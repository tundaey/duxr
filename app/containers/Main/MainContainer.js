/**
 * Created by Tundaey on 5/21/2017.
 */
import React from 'react';
import { container, innerContainer} from './style.css'
import { Navigation } from 'components'

const MainContainer = React.createClass({
    render(){
        return (
           <div className={container}>
               <Navigation isAuthed={false} />
               <div className={innerContainer}>
                   {this.props.children}
               </div>
           </div>
        )
    }
})

export default MainContainer