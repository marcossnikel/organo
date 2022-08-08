import './Form.css';
import TextField from '../TextField';
import Dropdown from '../Dropdown';
import Button from '../Button';
import { useState } from 'react';

const Formulario= (props) => {
    
    const [nome,setNome] = useState('');
    const [cargo,setCargo] = useState('');
    const [imagem,setImagem] = useState('');
    const [time,setTime] = useState('');

   
    const onSave = (event) =>{
        event.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome(' ')
        setCargo(' ')
        setImagem(' ')
        setTime(' ')
    }
    
    return(
        <section className="formulario">
            <form onSubmit={onSave}>
                <h2>Fill the data to create the employee card</h2>
                <TextField
                 obrigatorio={true}
                 label="Name" 
                 placeholder="Write your name here "
                 value={nome}
                 aoAlterado={value => setNome(value)}
                 />

                <TextField 
                obrigatorio={true}
                label="Role"
                placeholder="Put here your role in the company"
                value={cargo}
                aoAlterado={value => setCargo(value)}
                />

                <TextField 
                label="Image" 
                placeholder="Put the image adress"
                value={imagem}
                aoAlterado={value => setImagem(value)}
                />
                <Dropdown  
                obrigatorio={true}
                label="Team" 
                itens={props.times}
                value={time}
                aoAlterado={value => setTime(value)}
                />
                <Button>
                    Create Card
                </Button>
            </form>
        </section>
    )
}


export default Formulario;


