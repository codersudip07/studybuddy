import React from 'react'

//. update title for more flexibility.
const Title = ({ style, highlightStyle, text, text2, highlight }) => {
  return (
    <>
      <h2 className={`text-center text-3xl md:text-4xl leading-none tracking-tight font-bold ${style}`}>
        {text}<span className={`text-(--primary) ${highlightStyle}`}>{highlight}</span>{text2}
      </h2>
    </>
  );
}

export default Title