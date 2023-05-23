import React from 'react'
import { useState } from 'react'

function SearchForm(props) {
    const [activityStatus, setActivityStatus] = useState('')
    const [capsuleId, setCapsuleId] = useState('')
    const [type, setType] = useState('')

    const handleStatusChange = (e) => {
        setActivityStatus(e.target.value)
    }

    const handleCapsuleIdChange = (e) => {
        setCapsuleId(e.target.value)
    }

    const handleTypeChange = (e) => {
        setType(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.filteredData(activityStatus,capsuleId,type)
        setActivityStatus('')
        setCapsuleId('')
        setType('')
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit} className='form'>

<input
    type="text"
    placeholder="Activity Status"
    onChange={handleStatusChange}
    value={activityStatus}
    className='ip'
/>
<input
    type="text"
    placeholder="Capsule Id"
    onChange={handleCapsuleIdChange}
    value={capsuleId}
    className='ip'
/>
<input
    type="text"
    placeholder="Type"
    onChange={handleTypeChange}
    value={type}
    className='ip'
/>
<button type='submit'>Filter</button>
</form>
        </div>
    )
}

export default SearchForm