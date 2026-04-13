import CapturaDados from './CapturaDados'
import React, { useState } from 'react'

const ExibeDados = ({ valorFinal, totalInvestido, jurosAcumulados, nAportes, rentabilidade}) => {
    
    return (
        <div className='container p-2 border rounded ' style={{ backgroundColor: '#d5e3f6' }}>
            <div className='row justify-content-center text-center'>
                <div className='col-sm-12 col-lg-6 col-xxl-6 p-3 mx-auto'>
                    <h1>Valor Final Acumulado</h1>
                    <h1 className='text-success'>R${valorFinal}</h1>
                </div>
            </div>

            <div className='mb-4 text-success border-bottom border-success mx-auto text-left'></div>

            <div className='row justify-content-center text-center'>
                <div className='col-12 col-md-6 col-lg-6 mt-3 mb-3'>
                    <h4>Total Investido</h4>
                    <h4>R${totalInvestido}</h4>
                </div>

                <div className='col-12 col-md-6 col-lg-6 mt-3 mb-3'>
                    <h4>Juros Acumulados</h4>
                    <h4>R${jurosAcumulados}</h4>
                </div>

                <div className='col-12 col-md-6 col-lg-6 mt-3 mb-3'>
                    <h4>Nº de Aportes</h4>
                    <h4>{nAportes}</h4>
                </div>

                <div className='col-12 col-md-6 col-lg-6 mt-3 mb-3'>
                    <h4>Rentabilidade</h4>
                    <h4 className='text-success'>+{rentabilidade}%</h4>
                </div>     
            </div>
        </div>
    )
}

export default ExibeDados