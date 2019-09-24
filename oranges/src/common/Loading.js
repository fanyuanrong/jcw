import React from 'react';
import '../assets/Login/loading.scss'
import loadimg from '../assets/images/loading.gif';
class Two extends React.Component{   
    render(){
        return (
            <div className={'loading-div'}>
                <div className={'loading-box'}>
                    <img src={loadimg} alt='' />
                </div>
            </div>
        )
    }
}
export default Two;