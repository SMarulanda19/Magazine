import './estilo.css'
import timeLogo from './assets/img/time-logo.png'
import titleNirvana from './assets/img/kanye-west-brands-gap-addidas.png'
import codigoBarra from './assets/img/codigo de barras.jpg'

export default  function App() {
  return (
    <div>
    <header>
    <div className="grid-container">
        <h3 className="itemEncabezado">Jesus is King </h3>
        <span className="spanEncabezado">*</span>
        <h3 className="itemEncabezado">Kids see ghost</h3>
        <span className="spanEncabezado">*</span>
        <h3 className="itemEncabezado">The life of Pablo</h3>
        <span className="spanEncabezado">*</span>
        <h3 className="itemEncabezado">Yezzus</h3>
    </div>
</header>
<main>
    <article>
        <div className="contenedorFilas">
            <div className="contenedortitleTime">
                <img className="titleRollin" src= {timeLogo} alt=""/>
            </div>
            </div>
            
            <div className="father">
                <div className="Contenedor1">
                    <div className="item">
                        <span className="spanYearOn">30 YEAR ON</span>
                    </div>
                    <img className="titleNirvana" src={titleNirvana} alt=""/>
                    <div className="item">
                        
                        <p className="PContenedor1">History will remember him 
                            as the best <br/>
                            20th and 21st century. 
                        </p>
                    </div>
                    <div className="item">
                        <img className="codigoBarras" src={codigoBarra} alt="codigo de barras"/>
                    </div>
              </div>
            </div>       
    </article>
</main>
</div>
  )
}
