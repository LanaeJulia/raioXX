import React from 'react'
import Header from './header'
import Sobre from './sobre'
import Projeto from './projeto'
import Orientacoes from './orientacoes'
import Parceiros from './parceiros/parceiros'
import Contato from './contato'

const Home = () => {
    return (
        <>
            <Header />
            <Sobre />
            <Projeto />
            <Orientacoes />
            <Parceiros />
            <Contato />
        </>
    )
}

export default Home