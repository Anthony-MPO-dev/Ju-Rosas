import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'



const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')
    const [imglink, setImgLink] = useState('https://i.imgur.com/FDNhTU9.png') // Preparação para receber imagem da logo pelo useState
    const[imgClass, setImgClass] = useState('logo-sem-bg') // navebar inicia com a logo sem bg

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 20) {
                setColor('#ffffff')
                setTextColor('#000000')
                setImgLink('https://i.imgur.com/NRSB4jW.jpg') // Logo com fundo branco 
                setImgClass('logo-com-bg')
            } else {
                setColor('transparent')
                setTextColor('#ffffff')
                setImgLink('https://i.imgur.com/FDNhTU9.png') // Logo com fundo transparente
                setImgClass('logo-sem-bg')
            }
        }
        window.addEventListener('scroll', changeColor);
    }, [])

  return (
    <>
        <div className='invisible lg:visible absolute left-0 top-0 bottom-0 w-[40%] bg-[#B46A81] z-50 flex justify-center items-center fade-in-out' >
            <img  className='logo-principal' src='https://i.imgur.com/t6ErXwl.png' alt="" />
        </div>
        <div style={{backgroundColor: `${color}`}}  className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
            <div className='max-w-[1240px] m-auto h-[110px] flex justify-between items-center p-5 text-white'>
                <Link href='/' >
                    <img  className={`${imgClass}`} src={`${imglink}`} alt="" />
                </Link>
                <ul style={{color: `${textColor}`}} className='hidden md:flex'>
                    <li className='p-4'>
                        <Link href='/loja'>Rosas</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/sobre'>Sobre</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/#galeria'>Galeria</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/contato'>Contato</Link>
                    </li>
                </ul>

                {/* Mobile Button */}
                <div onClick={handleNav} className='block md:hidden z-10'>
                    {nav ? (<AiOutlineClose size={20} style={{color: `${textColor}`}} /> ): ( <AiOutlineMenu size={20} style={{color: `${textColor}`}} />)}
                </div>
                {/* Mobile Menu */}
                <div className={nav ? 'md:hidden absolute flex justify-center items-center w-full h-screen top-0 left-0 right-0 bottom-0 bg-black text-center ease-in duration-300 ' : 'md:hidden absolute flex justify-center items-center w-full h-screen top-0 left-[-100%] right-0 bottom-0 bg-black text-center ease-in duration-300 '}>
                    <ul>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/loja'>Rosas</Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/sobre'>Sobre</Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/#galeria'>Galeria</Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/contato'>Contato</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar