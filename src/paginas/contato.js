import React from 'react'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { MdOutlineLocationOn } from "react-icons/md";

// Veja mais ícones em: https://react-icons.github.io/react-icons/search?q=info

export default function Contato() {
    return (
        <div className='bg-light pt-1'>
            <section id="contato" className='container pb-3'>
                <h1 className="text-center">Contato</h1>
                <div className="row">
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aperiam porro amet
                        tenetur natus consectetur sed laborum suscipit animi veritatis ut modi laudantium a est quidem, voluptatum id
                        cupiditate nam.
                    </p>
                    <div className="col-md-4 text-center">
                        <AiOutlineMail size={24} />
                        <p>Alguma dúvida?</p>
                        <p>contato@gmail.com</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <AiOutlinePhone size={24} />
                        <p>Ligue para</p>
                        <p>(49) 0000-0000</p>
                    </div>

                    <div className="col-md-4 text-center">
                        <MdOutlineLocationOn size={24} />
                        <p>IFC - Campus Videira</p>
                        <p>Bairro Campo Experimental</p>

                    </div>
                </div>
            </section>
        </div>
    )
}
