package webChat.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@NamedQueries({
        @NamedQuery(name="ChatRoom.findAll",
                query="SELECT pc FROM ChatRoom pc"),
        @NamedQuery(name="ChatRoom.findById",
                query = "SELECT pc FROM ChatRoom pc WHERE pc.id = :id")
})
@Data
@NoArgsConstructor
@Entity
public class ChatRoom implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String name;

    private String password;

    private boolean removed = false;
}
