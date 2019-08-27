import * as React from 'react';
import './index.less';
let loadingSrc = require('../../images/loading.gif');
export default class Loading extends React.Component{
   render(){
       return (
           <div className="loading">
              <img src={loadingSrc}/>
           </div>
       )
   }
}
