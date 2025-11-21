import { useEffect, useState } from 'react'

function App() {

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

    return(
        <>
            <div className="masonry-grid">
            {
                photos.length > 0 && (
                    photos.map(photo => (
                        <div key={photo.PhotoId} className="masonry-grid-item">
                            <a href="/">
                                <img src={photo.Filename} alt={photo.PhotoTitle} />
                                <div className="label">{photo.PhotoTitle}</div>
                            </a>
                        </div>
                    ))                    
                )
            }
            </div>
        </>
    )
}

export default App