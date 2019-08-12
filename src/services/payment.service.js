
class PaymentService {

    _defaultUrl = 'http://mock-api'

    saveCard = (cardInfo) => {
        let isErrorPromise = false;
        return this.mockCaller('/pagar', cardInfo, isErrorPromise);
    }

    /* metodo que simula uma chamada http retornando uma promise */
    mockCaller = (url, payload, error) => {
        console.log('chamada api', `URL: ${this._defaultUrl}/${url}, Method: POST`)
        return new Promise((resolve, reject) => {
            if(error) {
                reject({ code: 400, message: 'Não foi possivel salvar o cartão!' })
            }

            resolve({ code: 200, message: 'Cartão salvo com sucesso!' })
        })
    }
    
}

export default PaymentService;