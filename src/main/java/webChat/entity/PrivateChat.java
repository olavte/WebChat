package webChat.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@NamedQueries({
        @NamedQuery(name="PrivateChat.findAll",
                query="SELECT pc FROM PrivateChat pc"),
        @NamedQuery(name="PrivateChat.findById",
                query = "SELECT pc FROM PrivateChat pc WHERE pc.id = :id")
})
@Data
@NoArgsConstructor
@Entity
public class PrivateChat implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String name;
}
