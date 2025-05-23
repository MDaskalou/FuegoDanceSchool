import './Button.css';

export default function Button({onClick, children, className ="", type= "button"}) {

    return(
        <button onClick={onClick} className={`btn ${className}`} type={type}>{children}</button>
    );
}