package webChat;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import webChat.entity.PublicChatRoom;
import webChat.entity.Users;

import javax.ejb.Singleton;
import javax.ejb.Stateless;
import javax.json.Json;
import javax.json.JsonArray;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Path("/")
@Stateless
public class WebController {

    ObjectMapper objectMapper = new ObjectMapper().enable(SerializationFeature.INDENT_OUTPUT);

    @Context
    private UriInfo uriInfo;

    @PersistenceContext
    private EntityManager em;

    public WebController() {}

    @GET
    @Produces("text/json")
    public Response chatRooms() {
        List<PublicChatRoom> publicChatRoom = em.createNamedQuery("PublicChatRoom.findAll", PublicChatRoom.class).getResultList();
        String output = null;
        try {
            output = objectMapper.writeValueAsString(publicChatRoom);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        System.out.println(output);
        return Response.status(200).entity(output).build();
    }

    @GET
    @Produces("text/simple")
    @Path("getAllUsers")
    public Response users() {
        List<Users> users = em.createNamedQuery("Users.findAll", Users.class).getResultList();
        String output = null;
        try {
            output = objectMapper.writeValueAsString(users);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        System.out.println(output);
        return Response.status(200).entity(output).build();
    }

    @POST
    @Path("addNewUser")
    public void addUser(Users user) {
        Users newUser = new Users();
        newUser.setName(user.getName());
        em.persist(newUser);
    }



    private String httpBodyToString(HttpServletRequest request) throws IOException {
        StringBuilder buffer = new StringBuilder();
        BufferedReader reader = request.getReader();
        String line;
        while ((line = reader.readLine()) != null) {
            buffer.append(line);
        }
        return buffer.toString();
    }
}
