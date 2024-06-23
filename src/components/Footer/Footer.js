import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <div className="footer">
        <div className="nitc-logo">
            <div className="nitc"></div>
            <div className="ragam"></div>
        </div>
        <div className="socal-media">
            <div className="socal-logo" id='insta'></div>
            <div className="socal-logo" id='x'></div>
            <div className="socal-logo" id='youtube'></div>
            <div className="socal-logo" id='whatsapp'></div>
        </div>
        <div className="nitc-address">
            <div className="name email">National Institute of Technology, Calicut</div>
            <div className="address email-address">Calicut Mukkam Road, Kattangal </div>
            <div className="address email-address">Kerala 673601</div>
        </div>
    </div> 
  )
}
