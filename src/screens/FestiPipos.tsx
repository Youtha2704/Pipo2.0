import { Equipes } from "../components/Equipes"
import { YoutubeVideo } from "../components/YoutubeVideo"


export const FestiPipos = () => {
    return (
        <div>

            <div className="mt-5" >
                <h1 className="text-3xl font-extrabold"> DE PRESENTATION DU FESTI PIPO </h1>
                <p className="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae earum debitis quisquam laborum. Quod in maxime fuga, dolorum atque id aliquid molestias ratione eveniet quibusdam neque officia earum quia libero deleniti voluptas facere alias consectetur minima corrupti repellat assumenda delectus doloribus. Debitis odit dolores aperiam dolore qui consequatur recusandae?</p>
                <YoutubeVideo id="6lWA9bwASrY" />

                <Equipes />
            </div>
        </div>
    )
}
