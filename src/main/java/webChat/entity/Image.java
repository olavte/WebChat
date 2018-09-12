package webChat.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@NamedQueries({
        @NamedQuery(name="Image.findAll",
                query="SELECT i FROM Image i"),
        @NamedQuery(name="Image.findById",
                query = "SELECT i FROM Image i WHERE i.id = :id")
})
@Data
@NoArgsConstructor
@Entity
public class Image implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String link;
}
