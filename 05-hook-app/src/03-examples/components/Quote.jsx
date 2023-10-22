import React, { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({name, status, image, species}) => {

  const pRef = useRef();
  const [boxSice, setboxSice] = useState({width: 0, height: 0})

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect()
    setboxSice({ height, width })
  },[])


  return (
    <>
    <div className='card'>
        <img src={image} className='card-img-top'/>
        <div className='card-body'>
            <h5 ref={pRef} className='card-title'>{name}</h5>
            <p>{species}</p>
            <a href="#" className='btn btn-primary'>{status}</a>
        </div>
    </div>
    <code>
      { JSON.stringify(boxSice) }
    </code>
    </>
    
  )
}


