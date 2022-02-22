import React from 'react'

interface TestFormUpdateProps {
    title: string
}

const TestFormUpdate = ({title}: TestFormUpdateProps) => {
  return (
    <h3>{title}</h3>
  )
}

export default TestFormUpdate