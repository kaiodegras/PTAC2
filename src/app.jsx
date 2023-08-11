import '/.app.css'
import { exemplo } from './exemplo';

export default function app() {
  const listaAlunos = ["Joao", "Maria", "Marcos", "Tereza"];


    return (
      <div>
        <h1>Hello Word!</h1>
        <exemplo lista={listaAlunos}/>
      </div>
  
    );
  }