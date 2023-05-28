import art from './data/art.png';
import data from './data/data.json'

function Card() {
    return (
        <div className="card">
        <img
            src={art}
            alt="Card"
            className="card-image"
        />
        <h1 className="card-title">{data.project_title}</h1>
        <p className="card-text">{data.project_description}</p>
        </div>
    );
}

export default Card;