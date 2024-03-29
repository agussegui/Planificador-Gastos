import Gasto from './Gasto'

const ListadoGastos = ({
  gastos, 
  setGastoEditar, 
  eliminarGasto,
  filtro,
  gastosFiltrados
  }) => {
  return (
    <div className="listado-gastos contenedor">
        {/* si hay un filtro definido iteramos sobre los gastos filtrados sino iteramos sobre todos los gastos */}
        {
          filtro ? (
              <>
                <h2>{gastosFiltrados.length ? 'Gastos' : 'No Hay Gastos en esta categoria'}</h2>
                {gastosFiltrados.map( gasto => (
                  <Gasto 
                      key={gasto.id}
                      gasto={gasto}
                      setGastoEditar={setGastoEditar}
                      eliminarGasto={eliminarGasto}
                  />
                ))}
              </>
            ) : (
              <>
                <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos Aún'}</h2>
                {gastos.map( gasto => (
                  <Gasto 
                      key={gasto.id}
                      gasto={gasto}
                      setGastoEditar={setGastoEditar}
                      eliminarGasto={eliminarGasto}
                  />
                ))}
              </>
            )
        }

    </div>
  )
}

export default ListadoGastos