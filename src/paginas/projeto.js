import React from 'react'
import { HashLink } from 'react-router-hash-link';
// import logo from '../assets/img/logo.png';
import projetos from '../data/projetos.json';

export default function Projeto() {

    const projetoItem = (id, image, title, text) => {
        return (
            <div className="col-md-4" key={id}>
                <div className="card p-3 mb-4 shadow-sm">
                    <img className="card-img-top w-75" src={image} alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <HashLink to={"/projeto-detail/" + id} className="btn btn-sm btn-outline-primary">Ver mais</HashLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

        return (
            <div className='bg-light pt-3'>
                <section id="projeto" className="container pb-3">
                    <h1>Projeto</h1>
                    <p className="text-justify">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates velit officia
                        a quo. Ducimus fugiat, ex illo consectetur nostrum molestias iste itaque quod consequuntur ad perspiciatis
                        numquam ut a!
                        Dolores atque, mollitia, sapiente reprehenderit laborum expedita alias cumque quos quasi quod temporibus aperiam
                        ex repellat, praesentium nemo optio maiores? Iste minima doloremque perspiciatis tempore, possimus a aperiam
                        aliquid eveniet.
                        Officia tenetur quibusdam est, dignissimos nam tempora vel officiis vero eos, in ea quisquam mollitia molestiae
                        quos reiciendis necessitatibus aspernatur maiores obcaecati suscipit. Quasi, incidunt distinctio repellendus
                        dolore ipsa maiores!
                        Culpa facilis nemo consectetur in, nulla qui ipsum exercitationem dolorum modi minus, incidunt maxime quia ex
                        quisquam obcaecati atque voluptatum, aliquid ipsam hic molestiae vitae dolore cupiditate. Sed, numquam cumque!
                        Excepturi quos rem cum ducimus quo placeat alias doloremque aliquam dignissimos quia voluptate, animi distinctio
                        praesentium amet reiciendis vel culpa repudiandae delectus. Sunt repellendus temporibus, placeat esse unde
                        itaque rerum.
                    </p>

                    <div className="row">
                        {projetos.map((projeto) => {
                            return (
                                projetoItem(projeto.id, projeto.imagem, projeto.nome, projeto.text)
                            )
                        })}
                        {/* {projetoItem(logo, 'Nome do Projeto 1', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', '/projeto1')}
                        {projetoItem(logo, 'Nome do Projeto 2', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', '/projeto1')}
                        {projetoItem(logo, 'Nome do Projeto 3', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', '/projeto1')} */}
                    </div>

                </section>
            </div>

        )
    }
