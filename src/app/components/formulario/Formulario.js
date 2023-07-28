import "./formulario.css"
export default function Formulario () {

    return (
        <div className="formulario">
            
            <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact"></input>
                <input type="text" id="nombre" name="nombre" placeholder="Nombre"></input>
                <input type="text" id="apellido" name="apellido" placeholder="Apellido"></input>
                <input type="text" id="mail" name="mail" placeholder="Email"></input>
                <textarea id="mensaje" name="mensaje" placeholder="Escriba su mensaje aquí..."></textarea>
                <div className="boton">
                    <button>ENVIAR</button>
                </div>
            </form>
        </div>
    )
}