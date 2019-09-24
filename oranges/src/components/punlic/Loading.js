import React from 'react';
import '../../assets/Home/loding.scss'
import loadimg from '../../assets/Home/images/loading.gif';
class Loading extends React.Component{
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
export default Loading;