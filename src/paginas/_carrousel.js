
import React from 'react'
import carrousel1 from '../assets/img/robolocalizador (1).svg'
import carrousel2 from '../assets/img/robolocalizador.svg'
import carrousel3 from '../assets/img/carrossel-3.jpg'

export default function Carousel() {

    const carouselItem = (image, active, title, text) => {

        const imageClass = "d-block w-100 img-fluid "
        const activeClass = active ? "active" : ""

        return (
            <div className={`carousel-item ${activeClass}`}>
                <img src={image} className={imageClass} alt={image} />
                <div className="carousel-caption d-none d-block">
                    <h5>{title}</h5>
                    <p>{text}</p>
                </div>
            </div>
        )
    }

    return (
        <div id="carrosel_projeto" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                {carouselItem(carrousel1, true, "Primeiro Slide", "Some representative placeholder content for the first slide.")}
                {carouselItem(carrousel2, false, "Segundo Slide", "Some representative placeholder content for the second slide.")}
                {carouselItem(carrousel3, false, "Terceiro Slide", "Some representative placeholder content for the third slide.")}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carrosel_projeto" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carrosel_projeto" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}