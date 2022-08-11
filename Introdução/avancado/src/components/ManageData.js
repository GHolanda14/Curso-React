import {useState} from 'react';

const ManageData = () =>{
    const [numero, setNumero] = useState(15);
    return(
        <div>
            <p>Valor: {numero}</p>
            <button onClick={() => setNumero(25)}>Alterar valor</button>
        </div>
    )
}

export default ManageData;