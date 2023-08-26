<<<<<<< HEAD
import { useState } from "react"
=======
import { useState } from "react";
>>>>>>> 93201637cba213d01c87e0a4cb66122827228fca
import {Link} from "react-rounter-dom"


export default function tudo (){
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState([]);

    const [id, setId] = useState(1)

<<<<<<< HEAD
    
=======

>>>>>>> 93201637cba213d01c87e0a4cb66122827228fca
    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista,{
            atividade: atividade, id:id
        }])

        setId(1 + 1)
        console.log(lista)
    }

<<<<<<< HEAD
   return(
=======
    return(
>>>>>>> 93201637cba213d01c87e0a4cb66122827228fca
        <div>
            <Link to="/home">home</Link>
            <h1>Lista de Atividades</h1>

<<<<<<< HEAD
            <form onSubmit={salvar}>
                <input type="text"
                 oneChange={(e) =>{setAtividade(e.target.value)}}/>
                 <button>ADD</button>
            </form>

            {lista.map((ativ) =>
              <div>
                <p>{ativ.atividade}</p>
              </div>
            
            )}






        </div>
=======
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
>>>>>>> 93201637cba213d01c87e0a4cb66122827228fca
    )

}
