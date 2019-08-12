import React, { Component } from 'react';

//Importando estilo da página
import './steps.css';


//Componente generico para visualização de passos
class Steps extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.type === 'desktop'?
                    
                    (<div className="row desktop-steps">
                        {this.props.steps.map((step, index) => {
                            if((this.props.active - 1) === index) {
                                return (
                                    <React.Fragment>
                                        <span className="checked"><i className="Tiny material-icons">check</i></span> 
                                        {step}
                                        {(index + 1) < this.props.steps.length? (<i className="small material-icons">chevron_right</i>):''}
                                    </React.Fragment>
                                )
                            } else {
                                return (
                                    <React.Fragment>
                                        <span>{index + 1}</span> {step} 
                                        {(index + 1) < this.props.steps.length? (<i className="small material-icons">chevron_right</i>):''}
                                    </React.Fragment>
                                )
                            }
                            
                        })}
                        
                    </div>)
                    
                    :

                    (
                        <div className="step-info">
                            <i className="small material-icons">chevron_left</i>
                            <a href="#!"><strong>Etapa {this.props.active}</strong> de {this.props.total} </a>
                        </div>
                    )
                }
            </React.Fragment>
        )

    }
}

export default Steps;