import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data/projetos.json'
import { useNavigate } from 'react-router-dom'
// import logo from '../../assets/img/logo.png';
import YouTube from 'react-youtube';
import './styles.scss'

const ProjetoDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { id } = useParams()
    const projeto = data.find(p => p.id === id)
    const navigate = useNavigate()

    if (!projeto) {
        return navigate('/*')
    }

    const json = JSON.stringify(projeto, null, 3)

    const onPlayerReady = (event) => {
        event.target.pauseVideo();
    }

    return (
        <div className='container pt-3'>
            <div className='row'>
                <div className='col-6'>
                    <h1>{projeto.nome}</h1>
                    {projeto.descricao.map((desc, index) => (
                        <p>{desc}</p>

                    ))}

                </div>
                <div className='col-6'>
                    <img src={projeto.imagem1} className='w-75' alt='...' />
                    <img src={projeto.imagem1} className='w-75' alt='...' />

                    <p>{projeto.texto}</p>
                    <p>{projeto.dataInicio}</p>
                    <p>{projeto.dataFim}</p>
                    <p>{projeto.responsavel}</p>
                    <p>{projeto.categoria}</p>
                    <p>{projeto.status}</p>
                    <p>{projeto.observacoes}</p>

                </div>

            </div>
            <div className='row'>
                <div className='col-6'>
                    <img src={projeto.imagem1} className='w-75' alt='...' />
                    <img src={projeto.imagem1} className='w-75' alt='...' />

                </div>

                <div className='col-6'>
                <h1>Aplicação</h1>
                    {projeto.aplicacao.map((apli, index) => (
                        <p>{apli}</p>

                    ))}
                </div>

            </div>

        </div>
    )
}

export default ProjetoDetail