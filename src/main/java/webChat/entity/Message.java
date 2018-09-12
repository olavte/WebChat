package webChat.entity;

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
                query = "SELECT m FROM Message m WHERE m.id = :id")
})
@Data
@NoArgsConstructor
@Entity
public class Message implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String message;
}
