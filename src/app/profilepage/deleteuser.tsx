import React from 'react';
import styles from '../style.module.css'


  const DeleteUser = (props:any) => {

      
    
      return (props.trigger)?(
        <div className={styles.removepopup}>
          <div className={styles.removepopupInner}>
            {props.children}
          </div>
        </div>
      ):"";       
      
    };

   
    export default DeleteUser