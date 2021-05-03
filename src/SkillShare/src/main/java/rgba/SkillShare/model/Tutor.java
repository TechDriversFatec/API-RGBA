package rgba.SkillShare.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;

import lombok.Data;
import lombok.NoArgsConstructor;


/**
 *   Classe que define os usuários do tipo tutor.
 *  @author Nicholas Roque
 */
@Entity(name="tutor")
@NoArgsConstructor @Data 
public class Tutor extends Usuario{
    /** 
    *  Cria uma instância da classe Tutor.
    * @param cpf -> cpf do tutor
    * @param nome -> nome do tutor
    * @param email -> email do tutor
    * @param senha -> senha do tutor
    * @author Nicholas Roque
    */

    public Tutor(String cpf,String nome,String email,String senha) { 
        super(cpf,nome,email,senha);
    }
    public Tutor(String cpf,String nome,String email) { 
        super(cpf,nome,email);
    }

    @OneToMany(mappedBy = "tutor",cascade = CascadeType.ALL)
    private List<Turma> turmas;
}