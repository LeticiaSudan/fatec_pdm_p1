import React, { useState, useEffect } from 'react';

const Simulacoes = ({ valorFinal }) => {
    const [historicoSimulacoes, setHistoricoSimulacoes] = useState([]);
    let contador = 0;

    useEffect(() => {
        if (valorFinal === undefined || valorFinal === null) return;

        const novaSimulacao = {
            data: new Date().toLocaleString(),
            valorFinal: valorFinal
        };

        let novoHistorico = historicoSimulacoes.concat(novaSimulacao);

        if (novoHistorico.length > 4) {
            novoHistorico = [
                novoHistorico[1],
                novoHistorico[2],
                novoHistorico[3],
                novoHistorico[4]
            ];
        }

        setHistoricoSimulacoes(novoHistorico);

    }, [valorFinal]);

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mt-3">
                <h3>Histórico de Simulações</h3>
                <h3>{historicoSimulacoes.length} simulações</h3>
            </div>

            <div className='container mt-2 border rounded p-3 w-100 ' style={{ backgroundColor: '#d5e3f6' }}>

                <div className='row'>
                    <div className='col-6'>
                        <h4>Data</h4>
                    </div>
                    <div className='col-6 text-end'>
                        <h4>Valor Final</h4>
                    </div>
                </div>

                {historicoSimulacoes.map((item, index) => (
                    <div className='row' key={index}>
                        <div className='col-6'>
                            <h5>{item.data}</h5>
                        </div>

                        <div className='col-6 text-end'>
                            <h5>R$ {item.valorFinal}</h5>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Simulacoes;