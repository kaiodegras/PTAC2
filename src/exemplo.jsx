import {Dev} from'./Dev'
export function exemplo({lista}){
    return(
        <div>
            {lista.map(aluno=>((aluno,index)=>(
        
     
                <ul key={index}>
                    <li>
                        {aluno.nome}, {aluno.idade},anos, Mora em{aluno.cidade}.
                    </li>
                </ul>
                 

            ))}
            <Dev nome="Joao"/>
        </div>
    );
}