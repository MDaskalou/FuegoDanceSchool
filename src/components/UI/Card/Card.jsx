import './Card.css'


export default function Card({ image, title, children, className = "" }) {
    return (
        <div className={`card ${className}`}>
            {image && <img src={image} alt={title} className="card-image" />}
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                {children}
            </div>
        </div>
    );
}