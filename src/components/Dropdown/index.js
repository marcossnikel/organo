import './Dropdown.css';



const Dropdown = (props) => {
    
    return(
        <div className="dropdown">
            <label>{props.label}</label>
            <select value={props.value} onChange={event => props.aoAlterado(event.target.value)}>
                    {props.itens.map(itens => {
                    return <option key={itens}>{itens}</option>
                    })}
            </select>
        </div>
    )
}




export default Dropdown;