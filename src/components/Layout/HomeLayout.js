import React from 'react'
import "./HomeLayout.css"

export default function HomeLayout({children}) {
    return ( 
        <>
            <div className='container-fluid filter'>
            </div>
            <div className='container-fluid'>
                <div className='layout-header'></div>
                <div className='layout-content'>
                    {children}
                </div>
            </div>
        </>
    )
}