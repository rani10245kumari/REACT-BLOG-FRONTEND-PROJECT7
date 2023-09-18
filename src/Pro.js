import React, { useState } from 'react'

const Rani = () => {
    const [rank, setRank] = useState(2)
    return (
        <>
            <div>My rani in the class is {rank}</div>
            <button >check</button>
        </>
    )
}
export default Rani