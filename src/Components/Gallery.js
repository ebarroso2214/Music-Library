import GalleryItem from "./GalleryItem"
        //save as props for now
function Gallery(props) {
    const display = props.data.map((item, i)=>{
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