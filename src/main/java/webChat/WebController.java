package webChat;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import webChat.entity.ChatRoom;
import webChat.entity.Message;
import webChat.entity.Users;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;
import java.io.BufferedReader;
import java.io.IOException;
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

    @GET
    @Produces("text/simple")
    @Path("getAllChatRooms")
    public Response chatRooms() {
        List<ChatRoom> chatRooms = em.createNamedQuery("ChatRoom.findAll", ChatRoom.class).getResultList();
        String output = null;
        try {
            output = objectMapper.writeValueAsString(chatRooms);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return Response.status(200).entity(output).build();
    }

    @GET
    @Produces("text/simple")
    @Path("getAllMessagesInChatRoom")
    public Response getAllMessagesInChatRoom(@QueryParam("roomNumber") int roomNumber, @QueryParam("password") String password) {
        List<Message> messages = em.createNamedQuery("Message.findByRoomId", Message.class).setParameter("roomNumber", roomNumber).getResultList();
        String output = null;
        try {
            output = objectMapper.writeValueAsString(messages);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return Response.status(200).entity(output).build();
    }

    @POST
    @Path("addNewUser")
    public Response addUser(Users user) {
        Users newUser = new Users();
        newUser.setName(user.getName());
        em.persist(newUser);
        return Response.status(200).entity("ok").build();
    }

    @POST
    @Path("addNewChatRoom")
    public Response addChatRoom(ChatRoom chatRoom) {
        ChatRoom newChatRoom = new ChatRoom();
        newChatRoom.setName(chatRoom.getName());
        newChatRoom.setPassword(chatRoom.getPassword());
        em.persist(newChatRoom);
        return Response.status(200).entity("ok").build();
    }

    @POST
    @Consumes("application/json")
    @Path("addNewMessageToChatRoom")
    public Response addNewMessageToChatRoom(Message message) {
        Message newMessage = new Message();
        newMessage.setMessage(message.getMessage());
        newMessage.setRoomNumber(message.getRoomNumber());
        newMessage.setUserName(message.getUserName());
        em.persist(newMessage);
        return Response.status(200).entity("ok").build();
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
