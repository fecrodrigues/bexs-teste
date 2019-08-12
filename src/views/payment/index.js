import React, { Component } from 'react';
import { TextInput, Select, Button } from 'react-materialize';

import Cards from 'react-credit-cards';
import IMask from 'imask';
import 'react-credit-cards/es/styles-compiled.css';

//Importando componentes internos a serem utilizados na página
import PageNavbar from '../../components/navbar';
import OrderInfo from '../../components/order-info';

//Importando servico que chama
import PaymentService from './../../services/payment.service';

//Carregando as classes css da pagina
import './payment.css';

class Payment extends Component {

    constructor() {
        super();

        //Iniciando os valores do formulario
        this.state = {
            cardNumber: '',
            cardCode: '',
            cardName: '',
            cardDate: '',
            cardPortions: ''
        }
    }

    /*
    * Utilizando o método nativo do react que é disparado logo após o componente ser
    * renderizado para aplicar as mascaras utilizando o componente IMask
    */
    componentDidMount() {
        this.applyMask('cardNumber', '0000 0000 0000 0000'); 
        this.applyMask('cardDate', '00/00');
        this.applyMask('cardCode', '000'); 
    }

    /*
    * Extraindo a lógica de aplicação de mascara em um input
    * evitando assim repetição de código.
    */
    applyMask = (elementID, mask) => {
        let element = document.getElementById(elementID);
        let maskOptions = { mask: mask };

        IMask(element, maskOptions);
    }

    /*
    * Método chamado no evento onChange dos inputs para atualizar os valores
    * dos mesmos em suas respectivas variavies de estado do react.
    */
    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if(target.nodeName === 'SELECT') {
            let inputSelect =  document.getElementsByClassName('select-dropdown')[0];
            inputSelect.classList.remove('invalid');
        }

        this.focusCard(name, value);

        this.setState({
            [name]: value
        });
    }


    /*
    * Método que verifica qual o input que o usuário está interagindo no momento
    * e aplica o foco no compomente de cartão.
    */
    focusCard = (name, value) => {
        switch(name) {
            case 'cardNumber':
                this.setState({ focused: "number" });
            break;
            case 'cardName':
                this.setState({ focused: "name" });
            break;
            case 'cardCode':
                if(!value) {
                    this.setState({ focused: "number" });
                } else {
                    this.setState({ focused: "cvc" });
                }
            break; 
            case 'cardDate':
                this.setState({ focused: "expiry" });
            break;
            default:
                this.setState({ focused: "number" });
        }
    }


    /* Método chamado ao enviar o formulario (onSubmit) */
    sendCardInfo = (e) => {
        e.preventDefault();
        if(!this.checkFormErros(e.target)) {
            
            /* chamando servico mock para salvar cartão */
            const paymentService = new PaymentService();
            paymentService.saveCard(this.state).then((result) => {
                alert(result.message);
            });
        }
    }

    /* 
    *  Método que valida se os inputs estão preenchidos e caso 
    *  não estejam adiciona o feedback negativo na tela através da classe invalid
    */
    checkFormErros = (form) => {
        let invalidForm = false;
        const elements = form.elements;

        for (var i = 0; i < elements.length;i++) {
            if( elements[i] && 
                (elements[i].nodeName === 'INPUT' || elements[i].nodeName === 'SELECT') 
                && !this.state[elements[i].name]) {

                /* 
                *
                * Verificando se o input não é dropdown validando assim somente 
                * o select e não o input criado pelo component react-materialize.
                * 
                */
                if(!elements[i].classList.contains('select-dropdown')) {
                    invalidForm = true;
                    elements[i].classList.add("invalid");
                } else {
                    /* Adicionando mensagem de erro no select manualmente devido ao framework 
                     * não validar o select como faz nos inputs 
                    */
                    if(!this.state.cardPortions) {
                        if(!document.getElementById('select-error')) {
                            var errorSpan = document.createElement("SPAN");
                            errorSpan.setAttribute('id', 'select-error');
                            errorSpan.setAttribute('class', 'helper-text');
                            errorSpan.setAttribute('data-error', 'Selecione o número de parcelas');
        
                            elements[i].parentNode.insertBefore(errorSpan, elements[i].nextSibling);

                            elements[i].classList.add("invalid");
                        }
                    }
                   
                }
               
            }
        }

        return invalidForm;
    }

    render() {
        return (
            <div>
                {/* utilizando a navbar importada na página */}
                <PageNavbar></PageNavbar>

                <div className="content payment-container">
                    <div className="row flex-content">
                        
                        {/* Div contendo as informações do lado esquerdo (parte em vermelho) do pagamento */}
                        <div className="card-container">
                            
                            <div className="step-info">
                                <i className="small material-icons">chevron_left</i>
                                <a href="#!"><strong>Etapa 2</strong> de 3 </a>
                            </div>
                            
                            <a href="#!"><i className="small material-icons">chevron_left</i> Alterar forma de pagamento</a>
                            
                            <div className="add-card">
                                <p>
                                    <img src="/images/card-icon.png" alt="card icon"/>
                                    <span>Adicione um novo<br/> cartão de crédito</span>
                                </p>
                            </div>

                            <div className="credit-card">
                                <Cards
                                    number={this.state.cardNumber}
                                    name={this.state.cardName}
                                    expiry={this.state.cardDate}
                                    cvc={this.state.cardCode}
                                    focused={this.state.focused}
                                    />
                            </div>
                            
                        </div>
                        {/* Fim div card-container */}

                        {/* Div contendo as informações do lado direito (formulario) do pagamento */}
                        <div className="form-container">

                            <div className="row desktop-steps">
                                    <span className="checked"><i className="Tiny material-icons">check</i></span> Carrinho <i className="small material-icons">chevron_right</i>
                                    <span>2</span> Pagamento <i className="small material-icons">chevron_right</i>
                                    <span>3</span> Confirmação
                            </div>

                            <div className="row">

                                <form noValidate onSubmit={this.sendCardInfo}>
                                    <TextInput
                                        id="cardNumber"
                                        name="cardNumber"
                                        onChange={this.handleChange} 
                                        s={12} 
                                        error="Número do cartão inválido"
                                        label="Número do cartão"
                                        validate={true}
                                        required />

                                    <TextInput
                                        id="cardName"
                                        name="cardName"
                                        onChange={this.handleChange}
                                        s={12}
                                        error="Insira seu nome completo" 
                                        label="Nome (igual ao cartão)"
                                        validate={true}
                                        required />

                                    <TextInput
                                        name="cardDate"
                                        id="cardDate"
                                        onChange={this.handleChange}
                                        s={6}
                                        error="Data inválida" 
                                        label="Validade"
                                        validate={true}
                                        required />

                                    <TextInput
                                        name="cardCode"
                                        id="cardCode"
                                        onChange={this.handleChange}
                                        s={6}
                                        error="Código inválido" 
                                        label="CVV"
                                        validate={true}
                                        required />

                                    <Select
                                        onChange={this.handleChange}
                                        name="cardPortions"
                                        s={12}
                                        error="Selecione o número de parcelas"
                                        validate={true}
                                        required>
                                            <option value="">
                                                Número de parcelas
                                            </option>
                                            <option value="1">
                                            12 x de R$ 1000,00 sem juros
                                            </option>
                                    </Select>

                                    <div className="row submit-button">
                                        <Button type="submit" large>Continuar</Button>
                                    </div>
                                </form>
                            </div>
                            {/* fim row */}
                            
                        </div>
                        {/* Fim div form-container */}
                        
                        {/* importando componente com informações do pedido */}
                        <OrderInfo/>

                    </div>
                    {/* Fim flex-content */}
                   

                </div>
                {/* Fim pagamento-container */}
            </div>
        )
    }

}

export default Payment;