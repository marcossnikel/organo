import Colaborador from '../Colaborador';
import './Team.css';

const Time = (props) => {

        const css = {backgroundColor: props.corSecundaria};
        const h3Css = {borderColor: props.corPrimaria};
    return(
       (props.colaboradores.length) > 0 ? <section className="time" style={css}>
            <h3 style={h3Css}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} imagem={colaborador.imagem} cargo={colaborador.cargo} />)}
            </div> 
        </section>
        : ''
    )
}

export default Time;