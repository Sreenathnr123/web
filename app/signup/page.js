'use client'
import sty from '../page.module.css'
import { IoPeople } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiContactsFill } from "react-icons/ri";
import AXIOS from 'axios'

function Page(){

    const testing=()=>{
        console.log('yadhu');
    }
    return(
        <>
        <button type="button" >
            testing server side
        </button>
        <div className={sty.desc}>
           <h1>Signup here!</h1>
           <br></br>
           <form className={sty.style}><br></br>
            <label >
            <IoPeople />  Username
                <br></br>
                <input type="text" placeholder="" className={sty.qwert}></input>
            </label>
            
            <br></br><br></br>
            <label  >
            <MdEmail />  Email
                <br></br>
                <input type="text" placeholder="" className={sty.qwert}></input>
            </label>
            <br></br><br></br>
            <label  >
            <RiLockPasswordFill /> Password
                <br></br>
                <input type="text" placeholder="" className={sty.qwert}></input>
            </label><br></br><br></br>
            <label  >
            <RiContactsFill />  contact Number
                <br></br>
                <input type="text" placeholder="" className={sty.qwert}></input>
            </label>
            <br></br>  <br></br>  <br></br>
            <button onClick="submit">Submit</button>
           </form>
        </div>
        </>
    )
}
export default Page;

