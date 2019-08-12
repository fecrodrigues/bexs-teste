import React, { Component }  from 'react';

//importando estilo do componente
import './order-info.css';

class OrderDetail extends Component {
    render() {
        return (
            <div className="info-container">
                <div class="info"></div>
                <hr/>
                <div class="info left"></div> <div class="info right"></div>
                <div class="info left"></div> <div class="info right"></div>
                <div class="info left"></div> <div class="info right"></div>
                
                
                <div class="info left result"></div> <div class="info right result"></div>
            </div>
        ) 
    }
}

export default OrderDetail;