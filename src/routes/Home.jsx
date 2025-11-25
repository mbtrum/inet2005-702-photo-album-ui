import { useEffect, useState } from 'react'
import PhotoCard from '../ui/PhotoCard.jsx'

function Home() {

    // Define a state variable to hold photos
    const [photos, setPhotos] = useState([])

    // Get API Url from environment variables
    const apiUrl = import.meta.env.VITE_PHOTOS_API_URL

    // Fetch photos from API when component mounts
    useEffect(() => { 
        const getPhotos = async () => { 
            const response = await fetch(apiUrl) 
            const result = await response.json() 

            if(response.ok) { 
                setPhotos(result)
            }
        } 

        getPhotos()
    }, [])

    return (
 <>
            <div className="photo-grid">
            {
                photos.length > 0 && (
                    photos.map(photo => (
                        <div key={photo.PhotoId}>
                            <PhotoCard Photoid={photo.PhotoId} Filename={photo.Filename} PhotoTitle={photo.PhotoTitle} />
                        </div>
                    ))                    
                )
            }
            </div>
        </>
    )
}

export default Home