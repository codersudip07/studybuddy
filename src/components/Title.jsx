import React from 'react'

const Title = ({style, text, highlight}) => {
  return (
    <>
      <h2 className={`text-center text-4xl tracking-tight font-bold ${style}`}>
        {text}<span className="text-(--primary)">{highlight}</span>?
      </h2>
    </>
  );
}

export default Title