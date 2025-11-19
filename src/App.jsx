import 'dotenv/config'

// TO-DO: Fix "process is not defined" error in the browser console
function App() {

    // Define a state variable to hold photos
    const [photos, setPhotos] = useState([])

    // Get API Url from environment variables
    const apiUrl = process.env.PHOTOS_API_URL

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

        console.log(photos)
    }, [])

    return(
        <>
            <h1>My Photo Album</h1>
        </>
    )
}

export default App