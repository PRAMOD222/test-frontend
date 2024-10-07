import React from 'react'
import DashNav from './DashNav'

const layout = ({ children }) => {
    return (
        <div>
            <div className='flex '>
                <DashNav />
                <div className=''>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout