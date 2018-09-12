package webChat.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@NamedQueries({
        @NamedQuery(name="PublicChatRoom.findAll",
                query="SELECT pc FROM PublicChatRoom pc"),
        @NamedQuery(name="PublicChatRoom.findById",
                query = "SELECT pc FROM PublicChatRoom pc WHERE pc.id = :id")
})
@Data
@NoArgsConstructor
@Entity
public class PublicChatRoom implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String name;
}
