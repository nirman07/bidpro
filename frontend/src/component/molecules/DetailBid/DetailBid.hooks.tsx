import React, { useEffect, useState } from 'react';
import AuthService from '../../../Services/Profile.service';

export default ()=>{
   
    const [finalData,setFinalData] =useState([]);

    let getItemData=useEffect(()=>{
      AuthService.getItemData().then((res:any)=>{
        let resData = res.data;
        if(resData.success && resData.data && resData.data && Array.isArray(resData.data)){
          let item:any = [];
          resData.data.map((ur:any)=>{
            let option = {
              label : ur.item_name,
              label2 : ur.item_prize,
              value:ur.item_name, 
              value2:ur.item_prize,
            
            }
            item.push(option)
            console.log(option)
          })
          setFinalData(item)
         
        }


   
      })
    },[])

    return {
      finalData,
      getItemData,
    }
    
}


