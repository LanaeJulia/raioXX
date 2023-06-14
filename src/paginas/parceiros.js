import React from 'react'
import iconIfc from '../assets/img/iconIfc.jpg';
import iconcapes from '../assets/img/iconcapes.jpg';
import iconFapesc from '../assets/img/iconFapesc.png';
import iconNvidia from '../assets/img/iconNvidia.png';
import iconSTT from '../assets/img/iconSTT.png';


export default function Parceiros() {
  return (
    <div id='parceiros' className="container pt-3 mt-">
      Parceiros
      Penso que seria interessante colocar os logos dos parceiros aqui <a href="https://codepen.io/studiojvla/embed/qVbQqW?height=316&theme-id=0&default-tab=result">dessa forma</a> 

     <div class="slider">
  <div class="slide-track">
    <div class="slide">
      <img src={iconIfc} alt="logotipo" width="200" />
    </div>
    <div class="slide">
    <div class="slide">
      <img src={iconcapes} alt="logotipo" />
    </div>
    </div>
    <div class="slide">
    <img src={iconFapesc} alt="logotipo"/>
    </div>
    <div class="slide">
    <img src={iconNvidia} alt="logotipo" />
    </div>
    <div class="slide">
    <img src={iconSTT} alt="logotipo"/>
    </div>
    
    <div class="slide">
      <img src={iconIfc} alt="logotipo"/>
    </div>
    <div class="slide">
    <div class="slide">
      <img src={iconcapes} alt="logotipo"/>
    </div>
    </div>
    <div class="slide">
    <img src={iconFapesc} alt="logotipo"/>
    </div>
    <div class="slide">
    <img src={iconNvidia} alt="logotipo"/>
    </div>
    <div class="slide">
    <img src={iconSTT} alt="logotipo"/>
    </div>
  
  </div>
</div>
    </div>
  )
}
