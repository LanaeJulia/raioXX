import logo from '../assets/img/logo.png'
import React from 'react'

export default function Sobre() {
    return (
        <section id="sobre" className="container pt-3">

            <div className="row">
                <div className="col-md-3">
                    <h1 className="text-center">Sobre Nós </h1>
                </div>
                <div className="col-md-6">
                    <p className="text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia animi iusto,
                        neque possimus autem
                        laborum ad, deleniti mollitia necessitatibus illo incidunt exercitationem quisquam error, architecto
                        obcaecati! Repellat, rem esse.
                        Assumenda accusantium voluptatibus dolor nobis, nulla nostrum quibusdam cumque aut officiis veniam earum
                        ipsum et enim mollitia, nisi ipsam saepe? Harum ipsam repellat unde! Aliquid, obcaecati? Est ullam repellat
                        officia.
                        Natus quis saepe nihil consequatur deserunt ab et, molestias enim. Vel quia autem expedita repudiandae
                        assumenda, dolorum similique! Voluptatum consequuntur quia voluptas iure expedita ullam, praesentium
                        temporibus molestias? Molestias, sit?
                        Repellendus architecto minima ea officia itaque amet, autem aperiam, praesentium consequatur quisquam ad
                        voluptates tempora suscipit? Voluptate explicabo doloremque, repudiandae soluta quibusdam molestias atque
                        quod obcaecati illum odio nostrum! Explicabo.
                        Pariatur deserunt nobis fugiat aliquam quam maxime, tempore fuga quibusdam odit voluptatibus, totam ullam
                        adipisci doloribus </p>
                </div>
                <div className="col-md-3 text-center">
                    <img src={logo} alt="logo" width="50%"/>
                </div>
            </div>


        </section>

    )
}
