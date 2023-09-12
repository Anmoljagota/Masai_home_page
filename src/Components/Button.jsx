import React from 'react'

const Button = ({text,size,padding,radius,margin}) => {
    const props={
        background:"#ED0331",
        letterSpacing:"1.50px",
        lineHeight:"24px",
        fontWeight:"600",
        fontSize:size,
        padding:padding,
        borderRadius:radius,
        color:"#fff",
        marginTop:margin
    }
  return (
    <div>
      <button style={props}>{text}</button>
    </div>
  )
}

export default Button