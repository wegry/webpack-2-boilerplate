import moneyPie from './images/dreamstime-money-pie.jpg'

import React from 'react'

export default function Demo () {
  return (
    <div>
      <div>
        <div className="twin-columns">
          <div>
            <h1>Welcome</h1>
            <p>
        Marzipan bonbon soufflé chupa chups macaroon icing wafer candy canes. Gummi bears jelly-o candy canes pie toffee cotton candy oat cake. Powder donut sweet roll. Danish brownie powder topping lollipop.
      </p>
            <input placeholder="Placeholder autoprefixing" />
          </div>
          <img
            src={moneyPie}
            title={'Webpack inclusion of image'} />
        </div>
      </div>
      <div className="footer">
        <span>Created April 2017</span>
      </div>
    </div>
  )
}
