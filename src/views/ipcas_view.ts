import Ipca from '../models/Ipca';

export default {
    render(ipca: Ipca) {
        return {
            date: ipca.date,
            value: ipca.value
        }
    },

    renderMany(ipcas: Ipca[]) {
        return ipcas.map(ipca => this.render(ipca));
    }
};