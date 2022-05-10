import React from 'react';
import '../styles/Banner.css';

const Banner = (props) => {
    const children = props.children;
    return (
        <div className='lmj-banner' >
           {children}
        </div>
    )
}
export default Banner; 