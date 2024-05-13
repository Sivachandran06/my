import styles from "./PokemonCardComponent.module.css"; // Correct path to CSS file

function PokemonCardComponent(props) {
    const { id, image, type, name } = props;
    return (
        <div className={`${styles} ${styles[type]}`}> {/* Correct usage of CSS class name */}
            <div className="number">{id}</div>
            <img src={image} alt={"pokemon Image"} /> {/* Correct usage of img tag */}
            <div className="details-wrapper">
                <h3>{name}</h3>
                <p>Type: {type}</p>
            </div>
        </div>
        
    );
}

export default PokemonCardComponent;
