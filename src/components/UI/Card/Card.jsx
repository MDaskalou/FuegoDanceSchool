export default function Card({ image, title, children, className = "" }) {
    return (
        <div className={`bg-white rounded-2xl shadow-md overflow-hidden ${className}`}>
            {image && (
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
            )}
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                {children}
            </div>
        </div>
    );
}
