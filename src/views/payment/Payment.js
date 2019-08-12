import React, { Component } from 'react';
import { TextInput, Select, Button } from 'react-materialize';

import Cards from 'react-credit-cards';
import IMask from 'imask';
import 'react-credit-cards/es/styles-compiled.css';

import PageNavbar from '../../components/navbar/PageNavbar';

//Carregando as classes css da pagina
import './payment.css';

class Payment extends Component {

    constructor() {
        super();

        this.state = {
            cardNumber: '',
            cardCode: '',
            cardName: '',
            cardDate: '',
            cardPortions: ''
        }
    }

    componentDidMount() {
        this.applyMask('cardNumber', '0000 0000 0000 0000'); 
        this.applyMask('cardDate', '00/00');
        this.applyMask('cardCode', '000'); 
    }

    applyMask = (elementID, mask) => {
        let element = document.getElementById(elementID);
        let maskOptions = { mask: mask };

        IMask(element, maskOptions);
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

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

        this.setState({
            [name]: value
        });
    }

    sendCardInfo = (e) => {
        e.preventDefault();
        if(!this.validateInputs(e.target)) {
            console.log('enviou')
        }
    }

    validateInputs = (form) => {
        let invalidForm = false;
        const elements = form.elements;

        for (var i = 0; i < elements.length;i++) {
            if(elements[i] && !this.state[elements[i].name]) {
                invalidForm = true;
                elements[i].classList.add("invalid");
            }
        }

        return invalidForm;
    }

    render() {
        return (
            <div>
                <PageNavbar></PageNavbar>

                <div className="content payment-container">
                    <div className="row flex-content">
                        
                    

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
                                        name="cardPortions"
                                        onChange={this.handleChange}
                                        s={12}
                                        error="Insira o número de parcelas"
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
                            
                            
                            
                        </div>
                    </div>
                   

                </div>
            </div>
        )
    }

}

export default Payment;