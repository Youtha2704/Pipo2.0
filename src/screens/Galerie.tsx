

export const Galerie = () => {
    return (
        <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
            <div>
                <a href="photo1.jpg"><img src="photo1.jpg" alt="" loading="lazy" /></a>
            </div>
            <div className="col-start-3">
                <a href="photo1.jpg"><img src="photo1.jpg" alt="" loading="lazy" /></a>
            </div>
            <div>
                <a href="photo1.jpg"><img src="photo1.jpg" alt="" loading="lazy" /></a>
            </div>
            <div>
                <a href="photo1.jpg"><img src="photo1.jpg" alt="" loading="lazy" /></a>
            </div>
            <div className="row-start-1 col-start-2 col-span-2">
                <a href="photo1.jpg"><img src="photo1.jpg" alt="" loading="lazy" /></a>
            </div>
        </div>
    )
}