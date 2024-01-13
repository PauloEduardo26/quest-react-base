import './button.css'

const alertLabel = (props) =>{
    alert(`a label desse botão é ${props.label}`)
}

const Button =({label})=>{
    
    return (
        <button className='btn' onClick={()=>alertLabel({label})}>Clique aqui</button>
    )
}

export default Button

