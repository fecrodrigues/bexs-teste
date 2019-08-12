import React, { Component }  from 'react';

//importando estilo do componente
import './order-info.css';

class OrderDetail extends Component {
    render() {
        return (
            <div className="info-container">
                <div className="info"></div>
                <hr/>
                <div className="info left"></div> <div className="info right"></div>
                <div className="info left"></div> <div className="info right"></div>
                <div className="info left"></div> <div className="info right"></div>
                
                
                <div className="info left result"></div> <div className="info right result"></div>
            </div>
        ) 
    }
}

export default OrderDetail;