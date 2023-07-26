import "../nosotros/nosotros.css";
import Image from "next/image";

export default function Nosotros() {
  return (
    <div>
      <div className="heading">
        <h2>Nosotros</h2>
      </div>

      <div className="principal">
        <div className="cantina">
          <img src="/assets/cantina.jpg"/>
        </div>
        <div className="parrafo">
          <p>
            Ubicado en un rincón encantador de la ciudad, La Cantina es un
            destino culinario único que ha cautivado los paladares más exigentes
            con sus exquisitas creaciones inspiradas en la rica tradición
            culinaria de Italia, España y Francia. Desde mi primera visita,
            quedé impresionado por la dedicación y pasión que impregna cada
            plato servido en este establecimiento.<br></br><br></br>
            El encanto y la atmósfera acogedora de La Cantina te invitan a una experiencia gastronómica
            inolvidable. El elegante y moderno diseño del lugar crea un ambiente
            sofisticado, ideal para una ocasión especial o simplemente para
            disfrutar de una comida excepcional en un ambiente refinado. El menú
            de La Cantina es una sinfonía de sabores auténticos que rinde
            homenaje a las tradiciones culinarias de tres de los países más
            apreciados por su cocina en el mundo: Italia, España y Francia.<br></br><br></br>
            Desde la primera a la última entrada, cada plato refleja la maestría
            culinaria y la creatividad del talentoso equipo de chefs, quienes
            logran un equilibrio perfecto entre la elegancia y la audacia en sus
            preparaciones. Los platos italianos ofrecen un auténtico sabor de la
            "dolce vita", con una pasta al dente que se funde en la boca y las
            salsas más deliciosas que han sido elaboradas con pasión y esmero.
            Los platos españoles, por su parte, despiertan los sentidos con sus
            intensos sabores y presentaciones artísticas que rinden homenaje a
            la rica cultura gastronómica del país. Y, para culminar, las
            creaciones francesas deleitan con su sofisticación y elegancia,
            mostrando la excelencia culinaria que merece una estrella Michelin.
          </p>
        </div>
      </div>
    </div>
  );
}
