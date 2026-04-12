import React, { useState } from 'react'
import ExibeDados from './ExibeDados';

const CapturaDados = () => {
    const [calcular, setCalcular] = useState(false);
    const [valorInicial, setValorInicial] = useState(0);
    const [aporteMensal, setAporteMensal] = useState(0);
    const [taxaJurosAnual, setTaxaJurosAnual] = useState(0);
    const [periodoMeses, setPeriodoMeses] = useState(0);

    const [valorFinal, setValorFinal] = useState(0);
    const [totalInvestido, setTotalInvestido] = useState(0);
    const [jurosAcumulados, setJurosAcumulados] = useState(0);
    const [nAportes, setNAportes] = useState(0);
    const [rentabilidade, setRentabilidade] = useState(0);
    const [mostrarResultado, setMostrarResultado] = useState(false);

    const calcularValores = () => {
        const valorFinalCalculado =
            valorInicial +
            (aporteMensal * periodoMeses) +
            (valorInicial * (taxaJurosAnual / 100) * (periodoMeses / 12));

        const totalInvestidoCalculado =
            valorInicial + (aporteMensal * periodoMeses);

        const jurosAcumuladosCalculados =
            valorFinalCalculado - totalInvestidoCalculado;

        const nAportesCalculados = periodoMeses;

        const rentabilidadeCalculada =
            totalInvestidoCalculado > 0
                ? (jurosAcumuladosCalculados / totalInvestidoCalculado) * 100
                : 0;

        setValorFinal(valorFinalCalculado);
        setTotalInvestido(totalInvestidoCalculado);
        setJurosAcumulados(jurosAcumuladosCalculados);
        setNAportes(nAportesCalculados);
        setRentabilidade(rentabilidadeCalculada);
    };

    return (
        <div className='container p-2 border rounded mt-3' style={{ backgroundColor: '#d5e3f6' }}>
            <div className='row'>
                <div className='col-sm-12 col-lg-6 col-xxl-6 mt-3'>
                    <label htmlFor="valorInicial">Valor Inicial (R$)</label><br></br>
                    <input className="w-75 rounded p-1" type="number" placeholder="R$ 0,00" value={valorInicial} onChange={(e) => setValorInicial(Number(e.target.value))} />
                </div>

                <div className='col-sm-12 col-lg-6 col-xxl-6 mt-3'>
                    <label htmlFor="valorInicial">Aporte Mensal (R$)</label><br></br>
                    <input className="w-75 rounded p-1" type="number" placeholder="R$ 0,00" value={aporteMensal} onChange={(e) => setAporteMensal(Number(e.target.value))} />
                </div>

                <div className='col-sm-12 col-lg-6 col-xxl-6 mt-3'>
                    <label htmlFor="valorInicial">Taxa de Juros Anual (% ao mês)</label><br></br>
                    <input className="w-75 rounded p-1" type="number" placeholder="0,00" value={taxaJurosAnual} onChange={(e) => setTaxaJurosAnual(Number(e.target.value))} />
                </div>

                <div className='col-sm-12 col-lg-6 col-xxl-6 mt-3'>
                    <label htmlFor="valorInicial">Período (meses)</label><br></br>
                    <input className="w-75 rounded p-1" type="number" placeholder="0" value={periodoMeses} onChange={(e) => setPeriodoMeses(Number(e.target.value))} />
                </div>

                <div className='col-sm-12 col-lg-9'>
                    <button
                        className='mt-3 rounded-pill border-success text-success w-100 p-2'
                        onClick={() => {
                            calcularValores();
                            setMostrarResultado(true);
                        }}
                    >
                        Calcular
                    </button>
                </div>

                <div className='col-sm-12 col-lg-3'>
                    <button
                        className='mt-3 rounded-pill border-danger text-danger w-50 p-2'
                        onClick={() => {
                            setValorInicial(0);
                            setAporteMensal(0);
                            setTaxaJurosAnual(0);
                            setPeriodoMeses(0);
                            setMostrarResultado(false);
                        }}
                    >
                        Limpar
                    </button>
                </div>
            </div>

            {mostrarResultado && (
                <div className="mt-4">
                    <ExibeDados
                        valorFinal={valorFinal}
                        totalInvestido={totalInvestido}
                        jurosAcumulados={jurosAcumulados}
                        nAportes={nAportes}
                        rentabilidade={rentabilidade}
                    />
                </div>
            )}
        </div>
    )
}

export default CapturaDados