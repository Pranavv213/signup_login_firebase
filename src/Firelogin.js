import React,{useState,useEffect} from 'react';
import {database} from './firebase'
import GetData from './GetData'
import Buy from './Buy'
import {useSelector, useDispatch} from "react-redux";
import {incNumber,decNumber} from "./actions/index"

function Firelogin({n}) {
    const myState=useSelector((state)=> state.changethenum)
    const dispatch = useDispatch();
    const [username,setUsername]=useState('')
    const [no1,setNo1]=useState('')

    const [info1,setInfo1]=useState('')
    const [info,setInfo]=useState('')
    let createUserInDB=async()=>{
         let data=await database.users.get()
        data.forEach((obj)=>{
            if(obj.data().name=="docs")
            {
                let array=obj.data().arr;
                let i=0;
                array.forEach(x=>{
                    if(x.username==username)
                    {
                       if(x.no==no1)
                       {
                           console.log('successfully login')
                           setInfo1('1')
                           console.log(array)
                           dispatch(incNumber("got"))

                       }
                       else{
                        setInfo('incorrect username or password')
                       }
                      
                    }
                    else{
                        setInfo('incorrect username or password')
                       }
                    
                })
                
                // {
                //     let name1=obj.data().name;
                //     array.push({username,no})
                  
                    
                //     database.users.doc(obj.id).set({name:'docs',arr:array})
                // }
               
                
            }
           
        })
      
        setUser("123456")
    }
    
  return <div>
      {info1==''?<div>
        {n}
        {myState}
      <div>username<input value={username} onChange={(e)=>{
          setUsername(e.target.value)
      }}></input>
      <br></br>
      password<input type="password" value={no1} onChange={(e)=>{
          setNo1(e.target.value)
      }}></input>
      <br></br>
      <button onClick={createUserInDB}>Login</button></div>
      <br></br>
     
      {/* <a href="/url">already have an account</a> */}
      {/* {data} */}
      {info}
      </div>:<div>
       
        <Buy/></div>}
      
  </div>;
}

export default Firelogin;
