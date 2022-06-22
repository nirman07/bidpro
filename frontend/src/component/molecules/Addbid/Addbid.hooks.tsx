import React, { useEffect, useState } from 'react';
import AuthService from '../../../Services/Profile.service';

export default ()=>{
   
    const [bidData,setBidData] =useState([]);

    let getProfileData=useEffect(()=>{
      AuthService.getProfileData().then((res:any)=>{
        let resData = res.data;
        if(resData.success && resData.data && resData.data && Array.isArray(resData.data)){
          let user:any = [];
          resData.data.map((ur:any)=>{
            let option = {
              label : ur.f_name,
              label2 : ur.email,
              lable3:ur.mobile,
              value:ur.f_name, 
              value2:ur.email,
              value3:ur.mobile,


            }
            user.push(option)
            console.log(option)
          })
          setBidData(user)
         
        }


   
      })
    },[])

    return {
      bidData,
      getProfileData,
    }
    
}


