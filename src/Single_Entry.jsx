export default function Single_Entry({ entry }) {
    return (
        <div className="single-entry">
            <h3>{entry.date}</h3>
            <p>Description: {entry.desc}</p>
            <div className="images">
                {entry.images.map((img, i) => (
                    <img key={i} src={img} alt={`image-${i}`} />
                ))}
            </div>
            <p>Status: {entry.status}</p>
            <p>Cost: </p>
        </div>
    )
}