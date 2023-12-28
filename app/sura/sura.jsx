import sty from './sura.module.css'
import Image from 'next/image';
import sur from '../Images/img3.jpg'
const Surasree=()=>{
    return(
        <>
        <div className={sty.sura}>
<Image src={sur} className={sty.img}/>
        </div>
        </>
    )
}
export default Surasree;