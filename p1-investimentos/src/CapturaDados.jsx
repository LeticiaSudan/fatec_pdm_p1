import React from 'react'

const CapturaDados = () => {
  return (
    <div className='container p-2 border rounded'>
      <div className='row'>
        <div className='col-sm-12 col-lg-6 col-xxl-6 mt-3'>
          <label htmlFor="valorInicial">Valor Inicial (R$)</label><br></br>
          <input className="w-75 rounded p-1" type="text" placeholder="R$ 0,00"/>
        </div>

        <div className='col-sm-12 col-lg-6 col-xxl-6 mt-3'>
          <label htmlFor="valorInicial">Aporte Mensal (R$)</label><br></br>
          <input className="w-75 rounded p-1" type="text" placeholder="R$ 0,00"/>
        </div>

        <div className='col-sm-12 col-lg-6 col-xxl-6 mt-3'>
          <label htmlFor="valorInicial">Taxa de Juros Anual (% ao mês)</label><br></br>
          <input className="w-75 rounded p-1" type="text" placeholder="0,00"/>
        </div>

        <div className='col-sm-12 col-lg-6 col-xxl-6 mt-3'>
          <label htmlFor="valorInicial">Período (meses)</label><br></br>
          <input className="w-75 rounded p-1" type="text" placeholder="0"/>
        </div>

        <div className='col-sm-12 col-lg-9 col-xxl-9'>
          <button className='mt-3 rounded-pill border-success text-success w-100 p-2'>Calcular</button>
        </div>

        <div className='col-sm-12 col-lg-3 col-xxl-3'>
          <button className='mt-3 rounded-pill border-danger text-danger w-50 p-2'>Limpar</button>
        </div>
      </div>
    </div>
  )
}

export default CapturaDados