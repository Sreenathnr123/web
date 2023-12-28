import sty from './page.module.css'
import log from './Images/img2.png'
import Image from 'next/image'

function Header(){
    return(
        <>
        <div className={sty.nav}>
            <div className={sty.logo}>
               <Image src={log} style={{width:100, height:100}}></Image>
            </div>
           
    <ul className={sty.links}>
      <h1 style={{color:"#fcba03"}}>Wedding Events</h1>
        <li className={sty.link}>
            <a href="/">Home</a>
        </li>
        <li className={sty.link}>
            <a href="signup">Signup</a>
        </li>
        <li className={sty.link}>
            <a href="/">Signin</a>
        </li>
        <li className={sty.link}>
            <a href="/">Photos</a>
        </li>
        <li className={sty.link}>
            <a href="/">Videos</a>
        </li>

    </ul>
        </div>
        </>
    )
}
export default Header;