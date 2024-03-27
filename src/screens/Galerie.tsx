
import { Link } from "react-router-dom"
import "./styles.css"
export const Galerie = () => {
    return (
        <div className=" grid grid-cols-4 gap-4 ">

            <div className="">
                <Link to="#img1"><img className=" h-200 w-200 mr-3 mt-5  md:py-0 py-4 md:mx-5 mx-auto" src="photo1.jpg" /></Link>
                <Link to="#img2"><img className=" h-200 w-200 mr-3 mt-5  md:py-0 py-4 md:mx-5 mx-auto " src="photo1.jpg" /></Link>
                <Link to="#img3"><img className=" h-200 w-200 mr-3 mt-5  md:py-0 py-4 md:mx-5 mx-auto " src="photo1.jpg" /></Link>
                <Link to="#img4"><img className=" h-200 w-200 mr-3 mt-5  md:py-0 py-4 md:mx-5 mx-auto " src="photo1.jpg" /></Link>
                <Link to="#img5"><img className=" h-200 w-200 mr-3 mt-5  md:py-0 py-4 md:mx-5 mx-auto " src="photo1.jpg" /></Link>
            </div>
        </div>
    )
}
