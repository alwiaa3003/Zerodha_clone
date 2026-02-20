import React from 'react';

function RightSection({imageUrl, productName, productDescription, learnMore}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4 p-5 mt-5'>
                    <h2 className='text-small text-muted'>{productName}</h2>
                    <p className='text-muted'>{productDescription}</p>
                    <div>
                    <a href={learnMore} style={{textDecoration:"none"}}>Learn More →</a>
                    </div>
                </div>
                <div className='col-8 p-5'>
                    <img src={imageUrl}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;