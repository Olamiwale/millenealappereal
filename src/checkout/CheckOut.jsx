import React from 'react';
import BankTransfer from './BankTransfer';
import PayStack from './PayStack'

export default function CheckOut() {
  return (
 
        <div className='flex flex-col justify-center items-center  '>

            <p>Payment Details</p>

            
                <div>
                 <BankTransfer />
            </div>

         


            <div>
               <PayStack />   
            </div> 
         

           
       
       
        </div>

  )
}
