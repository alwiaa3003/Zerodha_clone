import React from 'react';

function LeftSection({imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-8 p-5'>
                    <img src={imageUrl}/>
                </div>
                <div className='col-4 p-5 mt-5'>
                    <h2 className='text-muted'>{productName}</h2>
                    <p className='text-muted'>{productDescription}</p>
                    <div>
                    <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo →</a>
                    <a href={learnMore} style={{marginLeft:"75px", textDecoration:"none"}}>Learn More →</a>
                    </div>
                    <div className='mt-3'>
                    <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"/></a>
                    <a href={appStore} style={{marginLeft:"25px"}}><img src="media/images/appstoreBadge.svg"/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;