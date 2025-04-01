import React, { useContext } from 'react'
import { studentContext } from '../App3'

const Child6 = () => {
    const { name, roll } = useContext(studentContext);
    return (
        <div>
            <h1>Child6</h1>
            <h2>name: {name}</h2>
        </div>
    )
}

export default Child6;
