export function exemplo({lista}){
    return(
        <div>
            {lista.map(aluno=>(
                <ul>
                    <li>(aluno)</li>
                </ul>
                 

            ))}
        </div>
    );
}