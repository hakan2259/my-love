import React, {Component} from 'react';

class Hesaplama extends Component {
   constructor(props) {
       super(props);
       this.state ={
           currentDate : new Date(),
           targetDate : new Date("12/08/2014"),



       }
   }

    render() {
       const {currentDate,targetDate,sevgiliYilDonumu} = this.state;
       let hedefSalise = targetDate.getTime();



       let saniye = 1000;
       let dakika = 60*saniye;
       let saat = 60*dakika;
       let gun = 24*saat;
       let ay = 30*gun;
       let yil = 12*ay;



       const simdiSalise = currentDate.getTime();

       const sevgiliYilDonum = new Date(`12/08/${currentDate.getFullYear()}`);
       const sevgiliYilSalise = sevgiliYilDonum.getTime();

       let fark = simdiSalise-hedefSalise;
       const fark2 = sevgiliYilSalise-simdiSalise;





       let day = Math.floor(fark/gun);
       let month = Math.floor(fark/ay)
        let year = Math.floor(fark/yil)
        let hour = Math.floor(fark/saat)
        let minute = Math.floor(fark/dakika)
        let sevgiliDay = Math.floor(fark2/gun)


        return (
            <div>
                <h4>Sevgililik Süresi : <b>{year}</b> Yil <b>{month}</b> Ay <b>{day}</b> Gün </h4>
                <h5>Ay cinsinden :<b> {month}</b></h5>
                <h5>Gün cinsinden :<b> {day}</b></h5>
                <h5>Saat cinsinden  :<b> {hour}</b></h5>
                <h5>Dakika cinsinden  :<b> {minute}</b></h5>
                <h5>Bir Sonraki Sevgililik Yil Dönümümüz : {sevgiliDay} Gün Sonra</h5>
                <h1>Seni Çook Seviyorum Minicik Kuşum <i className="fas fa-heart"></i><i className="far fa-smile"></i><i
                    className="far fa-kiss-wink-heart"></i><i className="far fa-kiss-wink-heart"></i><i
                    className="far fa-kiss-wink-heart"></i></h1>
            </div>
        );
    }
}

export default Hesaplama;