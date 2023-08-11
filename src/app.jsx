import '/.app'
import { exemplo } from './exemplo';

export default function app() {
  const listaAlunos = [
    {nome:"Kaio", idade:16, cidade:"Nova Andradina"}
    {nome:"Gustavo", idade:17, cidade:"Nova Andradina"}
    {nome:"Luis", idade:16, cidade:"Nova Andradina"}
  ];


    return (
      <div>
        <h1>Hello Word!</h1>
        <exemplo lista={listaAlunos}/>
      </div>
  
    );
  }