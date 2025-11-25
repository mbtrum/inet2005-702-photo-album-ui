import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Details() {
    const { id } = useParams()    

    return (
        <>
            <p><Link to="/">Back to Home</Link></p>

            <div>Details Page for ID:{id}</div>

            <h2>Comments</h2>

            <p>Comming soon...</p>

            <p><Link to={`/comment/${id}`}>Add a Comment</Link></p>
        </>
    )
}

export default Details