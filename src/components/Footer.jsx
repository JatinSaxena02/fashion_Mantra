import { EmailOutlined, Facebook, GitHub, LinkedIn, LocalPhoneOutlined, LocationOnOutlined, Twitter, YouTube } from '@material-ui/icons'
import React from 'react'

const Footer = () => {

    const socialIconStyle = 'm-3 rounded-full cursor-pointer text-white p-2';


    return (
        <div className='footer-style flex justify-around items-center p-2' >
            <div className='flex-1 flex flex-col flex-wrap p-2'>
                {/* Store Information */}
                <h1 className='text-[25px]'>Jatin Saxena</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis vitae sit repellat, laudantium provident quam sint ipsum quidem. Dicta recusandae asperiores ratione est incidunt quasi deleniti delectus iste pariatur placeat?</p>
                <div className='flex items-center justify-center mt-3 self-start'>
                    <div className={socialIconStyle + ' bg-blue-800'}><Facebook /></div>
                    <div className={socialIconStyle + ' bg-blue-400'}><Twitter /></div>
                    <div className={socialIconStyle + ' bg-pink-500'}><LinkedIn /></div>
                    <div className={socialIconStyle + ' bg-red-600'}><YouTube /></div>
                    <div className={socialIconStyle + ' bg-black'}><GitHub /></div>
                </div>
            </div>
            <div className='flex-1 flex flex-col p-2'>
                <div className='flex m-3'><LocationOnOutlined /><p className='pl-3'>Lives in Madhya Predesh - 473551</p></div>
                <div className='flex m-3'><LocalPhoneOutlined /><p className='pl-3'>+91 123456789</p></div>
                <div className='flex m-3'><EmailOutlined /><p className='pl-3'>jatinsaxena2704@gmail.com</p></div>

            </div>
        </div>
    )
}

export default Footer
