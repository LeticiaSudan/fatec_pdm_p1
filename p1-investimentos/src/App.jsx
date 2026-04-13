import React from 'react'
import CapturaDados from './CapturaDados'
import ExibeDados from './ExibeDados'
import Simulacoes from './Simulacoes'

const App = () => {
  return (
    <div className="container p-4 ">
      <div className="row">
        <div className="col-sm-12 col-lg-12 col-xxl-12">
          <h3>Histórico de Simulações</h3>
          <h4 className="text-muted mb-3">Descubra quanto seu dinheiro pode render com juros compostos</h4>
          <CapturaDados></CapturaDados>
        </div>
      </div>
    </div>
  )
}

export default App