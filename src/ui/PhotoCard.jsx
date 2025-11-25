import { Link } from 'react-router-dom'

function PhotoCard(props) {
    return (
        <div className="photo-grid-item">
            <Link to={`/details/${props.Photoid}`}>
                <img src={props.Filename} alt={props.PhotoTitle} />
                <div className="label">{props.PhotoTitle}</div>
            </Link>
        </div>
    )
}

export default PhotoCard