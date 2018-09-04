package webChat;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;

@Path("/")
@Stateless
public class WebService {

    @Context
    private UriInfo uriInfo;

    @PersistenceContext
    EntityManager em;

    public WebService() {}

    @GET
    @Produces("text/html")
    public Response getHello() {
        String output = "TEST";
        return Response.status(200).entity(output).build();
    }
}
