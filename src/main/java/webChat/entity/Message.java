package webChat.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@NamedQueries({
        @NamedQuery(
                name="Message.findAll",
                query = "SELECT m FROM Message m"),
        @NamedQuery(
                name="Message.findById",
                query = "SELECT m FROM Message m WHERE m.id = :id"),
        @NamedQuery(
                name="Message.findByRoomId",
                query = "SELECT m FROM Message m WHERE m.roomNumber = :roomNumber")
})
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Message implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String message;

    private int roomNumber;

    private String userName;

    private int userNumber;
}
