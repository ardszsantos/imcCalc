import { useState } from "react";
import './form.css'

const IMCFormulario = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);


    const imcCalc = peso / (altura * altura);
    const imcResult = Number(imcCalc.toFixed(2));

    function ReturnTablePos(imc) {
        switch (true) {
            case imc > 40:
                return 'Obesidade mórbida Grau 3'
            case imc >= 35:
                return 'Obesidade Severa Grau 2'
            case imc >= 30:
                return 'Obesidade Grau 1'
            case imc >= 25: 
                return 'Sobrepeso'
            case imc >= 18.5:
                return 'Saudável'
            default:
                return 'Magreza'
        }
    }

    return ( 
        <>
        <div className="wrapper">
            <div className="row">
                <label htmlFor="altura" >Insira sua altura</label>
                <input id="altura" type="number" placeholder="ex: 1.80" onChange={(e) => setAltura(parseFloat(e.target.value))}/>
            </div>
            <div className="row">
                <label htmlFor="peso">Insira seu Peso</label>
                <input id="peso" type="number" placeholder="ex: 80" onChange={(e) => setPeso(parseFloat(e.target.value))}/>
            </div>
        </div>
        <div className="result">
            {imcResult ?
            <>
            <p>
                IMC: ≈ {imcResult}            
            </p>
            
            <p>Na tabela, você se encaixa em: {ReturnTablePos(imcResult)}</p>
            
            </>
            : ''}

        </div>
        </>
    );
}
 
export default IMCFormulario;