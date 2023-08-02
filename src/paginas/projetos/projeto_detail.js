import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data/projetos.json'
import { useNavigate } from 'react-router-dom'
// import logo from '../../assets/img/logo.png';
//import YouTube from 'react-youtube';
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

    function gerarAplicacao(projeto) {
        if (projeto.aplicacao === undefined) {
            return
        }

        return <>
            <h1>Aplicação</h1>
            {projeto.aplicacao.map((apli, index) => (
                <p>{apli}</p>

            ))}
        </>
    }

    function gerarItensProjeto(titulo, texto) {
        return <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
                <strong class="mb-1">{titulo}</strong>
            </div>
            <span class="badge bg-primary rounded-pill">{texto}</span>
        </a>
    }

    return (
        <>
            <div className='container-fluid pb-3'>
                <div className='container pt-3'>
                    <div className='row'>
                        <div className='col-12'>
                            <h2>{projeto.nome}</h2>
                            <ul class="list-group list-group-horizontal pb-2">
                                {gerarItensProjeto('Responsável', projeto.responsavel)}
                                {gerarItensProjeto('Categoria', projeto.categoria)}
                                {gerarItensProjeto('Status', projeto.status)}
                            </ul>
                        </div>
                        <div className='col-8'>
                            {projeto.descricao.map((desc, index) => (
                                <p>{desc}</p>
                            ))}
                        </div>
                        <div className='col-4'>
                            <img src={projeto.imagem1} className='w-100' alt='Imagem do Projeto' />
                            <img src={projeto.imagem1} className='w-100' alt='Imagem do Projeto' />
                        </div>

                    </div>
                </div>
                <div className='row'>
                    <div className='col-9'>
                        {gerarAplicacao(projeto)}
                    </div>


                </div>
            </div>

            <div className='container-fluid bg-light text-dark'>
                <div className='container pt-3'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1>Resultados</h1>
                        </div>

                        <div className='col-4'>
                            <img src={projeto.imagem1} className='w-100' alt='...' />
                        </div>
                        <div className='col-8'>

                            {projeto.resultado.map((result, index) => (
                                <p>{result}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjetoDetail