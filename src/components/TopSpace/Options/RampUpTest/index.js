import React from 'react';
import { useState } from 'react'
import SpringPop from '../../../SpringPop'
import ToggleButton from '../../../ToggleButton'
import styles from './index.module.css'

const RampUpTest = (props) => {
    const [dis,setDis] = useState(false);
    const handleClick = () => {
        setDis(!dis);
    }
    return (

       <div className={styles.wrapper}>
           <div className={styles.button}>
                <ToggleButton variant='outlined' size='medium' color='inherit' onClick={handleClick}>
                    {dis === false ? 'Off' : 'On'}
                </ToggleButton>
           </div>

            <div className={styles.spring}>
                <SpringPop title='Your Name' type='display' disable={dis} >
                    Your content
                </SpringPop>
            </div>

        </div>
    )


}

export default RampUpTest;