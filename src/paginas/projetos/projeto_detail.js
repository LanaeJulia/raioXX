import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data/projetos.json'
import { useNavigate } from 'react-router-dom'
// import logo from '../../assets/img/logo.png';
import YouTube from 'react-youtube';

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
                    <p>{projeto.descricao}</p>
                    <p>{projeto.texto}</p>
                    <p>{projeto.dataInicio}</p>
                    <p>{projeto.dataFim}</p>
                    <p>{projeto.responsavel}</p>
                    <p>{projeto.categoria}</p>
                    <p>{projeto.status}</p>
                    <p>{projeto.observacoes}</p>
                </div>
                <div className='col-6'>
                    <img src={projeto.imagem} className='w-25' alt='...' />
                    <YouTube videoId={projeto.youtube} opts={{height: '390', width: '640', playerVars: {autoplay: 1}}} onReady={onPlayerReady} />
                    <a href={projeto.link} target='_blank' rel='noreferrer'>{projeto.link}</a>

                    <ul className='list-group'>
                        {projeto.tags.map((tag, index) => (
                            <li className='list-group-item' key={index}>{tag}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <hr />
            <div className='row'>
                <div className='col-12'>
                    <code><pre>{json}</pre></code>
                </div>
            </div>
        </div>
    )
}

export default ProjetoDetail