import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export const SocialLinks = () => {
    return (
        <div className="flex items-center">
            <div className="mr-20">
                <h3 className="mt-5 text-2xl font-extrabold text-[#f7d111]">Nos Reseaux Sociaux </h3>
                <ul className="mt-2">
                    <div className="flex items-center">
                        <li><a className="text-[white] underline hover:text-[red] flex items-center" href="https://www.youtube.com/@festipipos1924"><FaYoutube className="mr-2" />  Youtube</a></li>
                    </div>

                    <div className="flex items-center">
                        <li><a className="text-[white] underline hover:text-[blue] flex items-center" href="https://www.facebook.com/yan.low.376"><FaFacebook className="mr-2" />Facebook</a></li>
                    </div>


                    <div className="flex items-center">

                        <li><a className="text-[white] underline hover:text-[#E9AB12] flex items-center" href=""><FaInstagram className="mr-2" />Instagram</a></li>

                    </div>
                </ul>
            </div>


            <div className="mt-5">
                <h3 className="text-2xl font-extrabold text-[#f7d111]">Nos Partenaires</h3>
                <div className="flex items-inline">
                    <img src="33.jpeg" alt="33 export" className="w-20 mr-3 mt-5" />
                    <img src="vitale.png" alt="eau vitale" className="w-20 mr-3 mt-5" />
                    <img src="queen.jpeg" alt="queen space" className="w-20 mr-3 mt-5" />
                    <img src="youzou.png" alt="youzou juice" className="w-20 mr-3 mt-5" />
                </div>


            </div>

        </div>





    )
}
