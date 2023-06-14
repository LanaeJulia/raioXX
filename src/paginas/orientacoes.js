import React from 'react'

export default function Orientacoes() {
    return (
        <div className='pt-3'>

            <section id="orientacoes" className="container pb-3">
                <h1>Orientações</h1>
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur qui aliquam iusto rerum
                    eligendi repudiandae
                    non perspiciatis quo amet hic autem cum reprehenderit, assumenda deleniti, maiores praesentium? Nemo, deserunt
                    quam.
                </p>

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                aria-expanded="true" aria-controls="collapseOne">
                                Projeto 1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae praesentium
                                    eligendi unde fuga asperiores maxime distinctio sapiente. Cumque, eveniet cum veniam tenetur sit
                                    nesciunt soluta debitis fugit quod doloremque libero.
                                    Voluptatum obcaecati ipsa commodi id alias dolores quis et ducimus maiores asperiores. Quod voluptatem
                                    eaque laboriosam suscipit nobis atque repudiandae eligendi sint in ad. Et dolore eligendi iure libero
                                    inventore!</p>
                                <a href="projeto1.html"> Quero participar</a>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Projeto 2
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae praesentium
                                        eligendi unde fuga asperiores maxime distinctio sapiente. Cumque, eveniet cum veniam tenetur sit
                                        nesciunt soluta debitis fugit quod doloremque libero.
                                        Voluptatum obcaecati ipsa commodi id alias dolores quis et ducimus maiores asperiores. Quod voluptatem
                                        eaque laboriosam suscipit nobis atque repudiandae eligendi sint in ad. Et dolore eligendi iure libero
                                        inventore!</p>
                                    <a href="projeto1.html"> Quero participar</a>

                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Projeto 3
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse " aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae praesentium
                                            eligendi unde fuga asperiores maxime distinctio sapiente. Cumque, eveniet cum veniam tenetur sit
                                            nesciunt soluta debitis fugit quod doloremque libero.
                                            Voluptatum obcaecati ipsa commodi id alias dolores quis et ducimus maiores asperiores. Quod voluptatem
                                            eaque laboriosam suscipit nobis atque repudiandae eligendi sint in ad. Et dolore eligendi iure libero
                                            inventore!
                                        </p>
                                        <a href="projeto1.html"> Quero participar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
