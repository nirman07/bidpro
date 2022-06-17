import React, { useEffect, useState } from 'react';
import AuthService from '../../../Services/Auth.Services';

export default ()=>{
    const [roles,setRoles] =useState([]);

    let getRoles=useEffect(()=>{
      AuthService.getRoles().then((res:any)=>{
        let resData = res.data;
        if(resData.success && resData.data && resData.data && Array.isArray(resData.data)){
          let role:any = [];
          resData.data.map((rl:any)=>{
            let option = {
              label : rl.name,
              value:rl._id
            }
            role.push(option)
          })
          setRoles(role)
        }


        // setRoles(res.data)
      })
    },[])

    const [categories,setCategories] =useState([]);

    let getCategories=useEffect(()=>{
      AuthService.getCategories().then((res:any)=>{
        let resData = res.data;
        if(resData.success && resData.data && resData.data && Array.isArray(resData.data)){
          let role:any = [];
          resData.data.map((rl:any)=>{
            let option = {
              label : rl.name,
              value:rl._id
            }
            role.push(option)
          })
          setCategories(role)
        }


        // setCategories(res.data)
      })
    },[])

    return {
      roles,
      getRoles,
      categories,
      getCategories,
    }
    
}


