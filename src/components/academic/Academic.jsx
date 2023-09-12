import "../../assets/css/academic/Academic.css";

export const Academic = () => {
  return (
    <div className="academic">
      <div className="container academic__container">
        {/* Título */}
        <h3 className="academic__title-main">Formación académica</h3>

        {/* Contenedor de elementos académicos */}
        <div className="academic__item-container">
          {/* Primer elemento académico */}
          <div className="academic__item">
            {/* Icono */}
            <div className="academic__icon">
              <img src="/image/academic/ufpr.png" alt="Logo UFPR" />
            </div>
            {/* Título de la formación */}
            <h4 className="academic__title">Análisis de datos</h4>
            {/* Año de finalización */}
            <p className="academic__year">2018 - UFPR</p>
          </div>

          {/* Segundo elemento académico */}
          <div className="academic__item">
            <div className="academic__icon">
              <img src="/image/academic/alura.png" alt="Logo Alura" />
            </div>
            <h4 className="academic__title">Formación en UX Design</h4>
            <p className="academic__year">2019 - Alura</p>
          </div>

          {/* Tercer elemento académico */}
          <div className="academic__item">
            <div className="academic__icon">
              <img src="/image/academic/ufrj.png" alt="Logo UFRJ" />
            </div>
            <h4 className="academic__title">Posgrado en diseño</h4>
            <p className="academic__year">En curso - UFRJ</p>
          </div>
        </div>
      </div>
    </div>
  );
};
