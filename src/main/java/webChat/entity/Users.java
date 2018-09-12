package webChat.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@NamedQueries({
        @NamedQuery(name="Users.findAll",
                query="SELECT u FROM Users u"),
        @NamedQuery(name="Users.findById",
                query = "SELECT u FROM Users u WHERE u.id = :id")
})
@Data
@NoArgsConstructor
@Entity
public class Users implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String password;
}
