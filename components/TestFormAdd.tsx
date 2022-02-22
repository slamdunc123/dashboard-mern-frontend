import React from 'react'

interface TestFormAddProps {
    title: string
}

const TestFormAdd = ({title}: TestFormAddProps) => {
  return (
    <h3>{title}</h3>
  )
}

export default TestFormAdd