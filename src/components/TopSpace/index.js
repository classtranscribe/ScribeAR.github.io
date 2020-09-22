import React from 'react'
import styles from './index.module.css'
import PersistentDrawerLeft from '../Drawer'

// JavaScript functions used: setTimeout, clearTimeout, bind, getElementById,
// addEventListener, removeEventListener
// React functions used: constructor, setState, componentDidMount, render
export default function TopSpace(props){

          var h = props.height; // I don't remember why I set the height like this.
          // The Options component takes a function as a prop.
          //const meh = (state) => state.meh
          //const setting = useSelector(meh)
          //var choice = setting ? "none" : "block"
          return (
               <div className={styles.TopSpace} id="outer" style={{ height: h}}>
                    <div >
                          <div className={styles.itemwrapper} >
                              <PersistentDrawerLeft color = {props.color}/>
                         </div>

                    </div>
               </div>
          )
}
