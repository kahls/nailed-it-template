import React, { FC } from 'react'

interface props {
    children: React.ReactNode;
    textCopy: string;
}

const DummyLink: FC<props> = ({children, textCopy}) => {
  return (
    <div style={{
    cursor: 'pointer', color: 'blue', textDecoration: 'underline'
    }}>
        {textCopy}
    </div>
  )
}

export default DummyLink;