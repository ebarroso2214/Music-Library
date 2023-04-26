import { useContext } from "react"
import { DataContext } from "../Context/DataContext"
import GalleryItem from "./GalleryItem"
        //save as props for now
function Gallery() {
    const data = useContext(DataContext)
    
    const display = data.map((item, i)=>{
        return(
            <GalleryItem key={i} item={item}/>
        )
    })


    return(
        <div>
            {display}
        </div>
    )
}

export default Gallery;