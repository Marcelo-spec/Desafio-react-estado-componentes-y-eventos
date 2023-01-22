const Button = (props) => {
    const { text } = props;
    return (<button variant="primary" type="submit">{text}
    </button>
    )
}

export default Button;