const Paragraph = ({text, color}) => {
    return (
        <p style={{ color: color}}>
            {text.toUpperCase()}
        </p>
    )
}

export default Paragraph