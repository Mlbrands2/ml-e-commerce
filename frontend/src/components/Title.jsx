import React from 'react'

const Title = ({title1,title2, titleStyles,title1Styles,paraStyles}) => {
  return (
    <div className={`${titleStyles} pb-1`}>
        <h3 className={`${title1Styles} h3`}>{title1}
             <span className='text-secondary !font-light '> {title2}</span>
        </h3>
        <p className={`${paraStyles} hidden`}>Every Click Brings You Closer <br/>To Perfect livestock.</p>
    </div>
  )
}

export default Title