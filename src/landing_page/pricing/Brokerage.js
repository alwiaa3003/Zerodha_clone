import React from 'react';

function Brokerage() {
    return ( 
        <div className='container '>
            
            <div className='row p-5 mt-5 text-center border-top'>
                <div className='col-8 p-4 '>
                    <a href="" style={{textDecoration:"none"}}><h3 className='fs-5'>Brokerage calculator</h3></a>
                    <ul style={{textAlign:"left", lineHeight:"2.5", fontSize:"16px"}} className='text-muted '>
                        <li>Call & Trade and Rms auto-squareoff: Additional charges of rs50 + GST per order.</li>
                        <li>Digital contractnotes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged rs20 per contract note. Courier charges apply.</li>
                        <li>For NRI account
                        (non-PIS), 0.5% or rup100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or  rup200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged rup40 per executed order instead of rup20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-4 p-4'>
                    <a href="" style={{textDecoration:"none"}}><h3 className='fs-5'>List of charges</h3></a>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;