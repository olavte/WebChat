package webChat.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@NamedQueries({
        @NamedQuery(name="PrivateChatRoom.findAll",
                query="SELECT pc FROM PrivateChatRoom pc"),
        @NamedQuery(name="PrivateChatRoom.findById",
                query = "SELECT pc FROM PrivateChatRoom pc WHERE pc.id = :id")
})
@Data
@NoArgsConstructor
@Entity
public class PrivateChatRoom implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String name;
}
