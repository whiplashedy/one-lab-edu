import { useRouter } from 'next/router'
import React from "react";

export const Id = () =>{
    const router = useRouter()
    debugger;
    const { pid } = router.query;
    return <div>{pid}</div>
}

export default Id;
