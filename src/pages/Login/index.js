import { useContext, useEffect, useState } from 'react';
import Logo from '../../assets/images/logo.webp'
import { MyContext } from '../../App';
import Patern from '../../assets/images/pattern.webp'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";



const Login = ()=>{

    const [inputIndex,setInputIndex] = useState(null)
    const context = useContext(MyContext)

    useEffect(()=>{
        context.setIsHideSidebarAndHeader(true)
    },[])

    const focusInput=(index)=>{
        setInputIndex(index)
    }

    return(
        <>
        <img src={Patern} className='loginPattern'/>
        <section className="loginSection">
            <div className="loginBox">
                <div className='logo text-center'>
                    <img src={Logo} width="60px"/>
                    <h5 className='font-weight-bold'>Login to Hotash</h5>
                </div>

            <div className="wrapper mt-3 card border">
                <form>
                    <div className={`form-group mb-3 position-relative 
                        ${inputIndex===0 && 'focus'}`}>
                        <span className='icon'><MdEmail/></span>
                        <input type='text' className='form-control' placeholder='Enter Your Email' onFocus={()=>focusInput(0)} onBlur={()=>setInputIndex(null)}/>
                    </div>
                    <div className={`form-group mb-3 position-relative 
                        ${inputIndex===1 && 'focus'}`}>
                        <span className='icon'><RiLockPasswordFill/></span>
                        <input type='password' className='form-control' placeholder='Enter Your Password' onFocus={()=>focusInput(1)} onBlur={()=>setInputIndex(null)}/>
                    </div>
                </form>
            </div>

            </div>
        </section>
        </>
    )
}

export default Login;