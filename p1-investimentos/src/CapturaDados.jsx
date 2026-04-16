import React from 'react'

const CapturaDados = ({ 
    valorInicial, setValorInicial,
    aporteMensal, setAporteMensal,
    taxaJurosAnual, setTaxaJurosAnual,
    periodoMeses, setPeriodoMeses,
    setValorFinal,
    setTotalInvestido,
    setJurosAcumulados,
    setNAportes,
    setRentabilidade
}) => {

    const calcularValores = () => {
        const valor = Number(valorInicial)
        const aporte = Number(aporteMensal)
        const juros = Number(taxaJurosAnual)
        const periodo = Number(periodoMeses)

        if (valor < 0 || aporte < 0 || juros < 0 || periodo < 0) {
            alert('Valores não podem ser negativos!');
            return;
        }

        if (periodo === 0) {
            alert('Período deve ser maior que 0!');
            return;
        }

        const i = juros / 100;

        if (i === 0) {
            const totalInvestidoCalculado =
                valor + (aporte * periodo);

            setValorFinal(totalInvestidoCalculado);
            setTotalInvestido(totalInvestidoCalculado);
            setJurosAcumulados(0);
            setNAportes(periodo);
            setRentabilidade(0);
            return;
        }

        const fator = (1 + i) ** periodo;

        const valorFinalCalculado =
            valor * fator +
            aporte * ((fator - 1) / i);

        const totalInvestidoCalculado =
            valor + (aporte * periodo);

        const jurosAcumuladosCalculados =
            valorFinalCalculado - totalInvestidoCalculado;

        const rentabilidadeCalculada =
            ((valorFinalCalculado - totalInvestidoCalculado) / totalInvestidoCalculado) * 100;

        setValorFinal(valorFinalCalculado);
        setTotalInvestido(totalInvestidoCalculado);
        setJurosAcumulados(jurosAcumuladosCalculados);
        setNAportes(periodo);
        setRentabilidade(rentabilidadeCalculada);
    };

    return (
        <div className='container p-2 border rounded mt-3' style={{ backgroundColor: '#d5e3f6' }}>
            <div className='row'>
                <div className='col-sm-12 col-lg-6 col-xxl-6 mt-3'>
                    <label>Valor Inicial (R$)</label><br />
                    <input className="w-75 rounded p-1" type="text" placeholder="R$ 0,00" value={valorInicial} onChange={(e) => setValorInicial(e.target.value)} />
                </div>

                <div className='col-sm-12 col-lg-6 col-xxl-6 mt-3'>
                    <label>Aporte Mensal (R$)</label><br />
                    <input className="w-75 rounded p-1" type="text" placeholder="R$ 0,00" value={aporteMensal} onChange={(e) => setAporteMensal(e.target.value)} />
                </div>

                <div className='col-sm-12 col-lg-6 col-xxl-6 mt-3'>
                    <label>Taxa de Juros Anual (% ao mês)</label><br />
                    <input className="w-75 rounded p-1" type="text" placeholder="0,00" value={taxaJurosAnual} onChange={(e) => setTaxaJurosAnual(e.target.value)} />
                </div>

                <div className='col-sm-12 col-lg-6 col-xxl-6 mt-3'>
                    <label>Período (meses)</label><br />
                    <input className="w-75 rounded p-1" type="text" placeholder="0" value={periodoMeses} onChange={(e) => setPeriodoMeses(e.target.value)} />
                </div>

                <div className='col-sm-12 col-lg-9'>
                    <button
                        className='mt-3 rounded-pill border-success text-success w-100 p-2'
                        onClick={calcularValores}
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
                            setValorFinal(0);
                            setTotalInvestido(0);
                            setJurosAcumulados(0);
                            setNAportes(0);
                            setRentabilidade(0);
                        }}
                    >
                        Limpar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CapturaDados