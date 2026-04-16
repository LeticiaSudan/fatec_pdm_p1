import React, { useState } from 'react'
import CapturaDados from './CapturaDados'
import ExibeDados from './ExibeDados'
import Simulacoes from './Simulacoes'

const App = () => {
  const [valorInicial, setValorInicial] = useState(0);
  const [aporteMensal, setAporteMensal] = useState(0);
  const [taxaJurosAnual, setTaxaJurosAnual] = useState(0);
  const [periodoMeses, setPeriodoMeses] = useState(0);
  const [valorFinal, setValorFinal] = useState(0);
  const [totalInvestido, setTotalInvestido] = useState(0);
  const [jurosAcumulados, setJurosAcumulados] = useState(0);
  const [nAportes, setNAportes] = useState(0);
  const [rentabilidade, setRentabilidade] = useState(0);

  return (
    <div className="container p-4 ">
      <div className="row">
        <div className="col-sm-12 col-lg-12 col-xxl-12">
          <h1>Hello, Investimentos</h1>
          <h3>Simulador de Investimentos</h3>
          <h4 className="text-muted mb-3">Descubra quanto seu dinheiro pode render com juros compostos</h4>
          <CapturaDados 
            valorInicial={valorInicial}
            setValorInicial={setValorInicial}
            aporteMensal={aporteMensal}
            setAporteMensal={setAporteMensal}
            taxaJurosAnual={taxaJurosAnual}
            setTaxaJurosAnual={setTaxaJurosAnual}
            periodoMeses={periodoMeses}
            setPeriodoMeses={setPeriodoMeses}
            setValorFinal={setValorFinal}
            setTotalInvestido={setTotalInvestido}
            setJurosAcumulados={setJurosAcumulados}
            setNAportes={setNAportes}
            setRentabilidade={setRentabilidade}
          />
          <div className="mt-5 mb-5">
            <ExibeDados
              valorFinal={valorFinal}
              totalInvestido={totalInvestido}
              jurosAcumulados={jurosAcumulados}
              nAportes={nAportes}
              rentabilidade={rentabilidade}
            />
          </div>
          <div className="mt-5 mb-5">
            <Simulacoes 
              valorFinal={valorFinal}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App