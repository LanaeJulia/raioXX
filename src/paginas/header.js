import React from 'react'
import { HashLink } from 'react-router-hash-link'
import Carousel from './_carrousel'

export default function Header() {
    return (
        <div className='bg-light'>
            <div id='inicio' className='container'>
                <div className="row align-items-center py-2">
                    <div className="col-lg-5 col-md-6">
                        <Carousel />
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-12">
                        <h1 className="font-weight-light">Business Name or Tagline</h1>
                        <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
                        <HashLink to="/#projeto" className="btn btn-primary">Conheça nossos Projetos!</HashLink>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 mb-2">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title">Card One</h2>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
                            </div>
                            <div className="card-footer"><a className="btn btn-primary btn-sm" href="#!">More Info</a></div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-2">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title">Card Two</h2>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam eaque, vel, non in id dolore voluptates quos eligendi labore.</p>
                            </div>
                            <div className="card-footer"><a className="btn btn-primary btn-sm" href="#!">More Info</a></div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-2">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title">Card Three</h2>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
                            </div>
                            <div className="card-footer"><a className="btn btn-primary btn-sm" href="#!">More Info</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
