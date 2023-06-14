import React from 'react'
import './styles.scss'

/**
 * 
 * @returns Componente com o slider de parceiros
 */
export default function Parceiros() {
  
  // Lista com os nomes das imagens que estão nas pasta src\assets\img\parceiros
  const parceiros = [
    'iconIfc.webp', 'iconcapes.webp', 'iconFapesc.webp', 'iconNvidia.webp', 'iconSTT.webp',
  ]

  // Função que retorna o componente com a imagem do parceiro
  function getParceiro(image_name) {
    let image = require('../../assets/img/parceiros/' + image_name)
    if (image === null) {
      return null
    }

    return (
      <div className="slide p-3" key={image}>
        <img src={image} alt="logotipo" className='h-100' />
      </div>
    )
  }

  // Retorna o componente com o slider de parceiros
  return (
    <div id='parceiros' className="container p-3">
      <div className="slider">
        <div className="slide-track">
          {parceiros.map(parceiro => getParceiro(parceiro))}
        </div>
      </div>
    </div>
  )
}
