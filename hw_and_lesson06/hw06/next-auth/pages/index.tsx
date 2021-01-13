import React from 'react'
import jwt from "jsonwebtoken";
import router from 'next/router';
import {is} from "@babel/types";

export default function Home({isAuth}) {
  if(!isAuth){
    router.push('/login');
  }
  return (
    <div>home page</div>
  )
}

Home.getServerSideProps = async () =>{
  const response = await fetch('http://localhost:3000/api/login',{
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  })  ;
  const data: any = await response.json();
  console.log(data)
  const token: any = data.token;
  let json: any;
  if(token){
     json = jwt.decode(token) as {[key: string]: string};
    console.log(json);

  }
  return({
    isAuth: json.isAuth
  })
}
