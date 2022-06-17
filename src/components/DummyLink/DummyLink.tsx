import React, { FC } from 'react'

interface props {
    textCopy: string;
}

const DummyLink: FC<props> = ({ textCopy}) => {
  return (
    <div style={{
    cursor: 'pointer', color: 'blue', textDecoration: 'underline'
    }}>
        {textCopy}
    </div>
  )
}

export default DummyLink;