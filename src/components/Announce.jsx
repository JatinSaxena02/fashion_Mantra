import { Close } from '@material-ui/icons'
import React, { useState } from 'react'

const Announce = () => {
const[announcestyle,setAnnounceStyle]=useState('announceStyle bg-[#8a4af3] font-bold text-white text-center justify-center')
const handleClose=()=>{
    setAnnounceStyle(announcestyle +" hidden")
}
    return (
        <div className={announcestyle}>
            <h2>Hurry up it's 40% Off now......<Close className='ml-10 cursor-pointer' onClick={handleClose}/></h2>
        </div>
    )
}

export default Announce
