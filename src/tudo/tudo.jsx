import { useState } from "react";
import {Link} from "react-rounter-dom"


export default function tudo (){
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState([]);

    const [id, setId] = useState(1)


    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista,{
            atividade: atividade, id:id
        }])

        setId(1 + 1)
        console.log(lista)
    }

    return(
        <div>
            <Link to="/home">home</Link>
            <h1>Lista de Atividades</h1>

         <form onSubmit={salvar}>
           <input type="text"
             oneChange={(e) =>{setAtividade(e.target.value)}}/>
             <button>ADD</button>
         </form>
         
    {lista.map((ativ)=>
      <div>
        <p>{ativ.atividade}</p>
      </div>
    )}
            
            </div>
    )

}
