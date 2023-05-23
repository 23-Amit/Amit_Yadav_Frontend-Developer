import React from 'react'
import { useState, useEffect } from 'react'
import SearchForm from './SearchForm'

function Data() {
    const [data,setData] = useState([])
    const [filterData, setFilterData] = useState([])

    async function getData()
    {
        const res = await fetch('https://api.spacexdata.com/v3/capsules')
        const data = await res.json()
        setData(data)
        setFilterData(data)
    }
    
    useEffect(()=>
    {
        getData()
    },[])

    const listOfCapsule = filterData.map((ele)=>
    {
      return (
          <div key={ele.capsule_serial} className='data_card'>
            <h2>Status : {ele.status}</h2>
            <h2>Capsule Id : {ele.capsule_id}</h2>
            <h2>Type : {ele.type}</h2>
          </div>
      )
    })


    const handleFilter =(activityStatus,capsuleId,type)=>
    {
      let filteredActivity = data
      if (activityStatus !== '') {
        filteredActivity = filteredActivity.filter((ele) => ele.status === activityStatus)
      }
      if (capsuleId !== '') {
        filteredActivity = filteredActivity.filter((ele) => ele.capsule_id === capsuleId)
      }
      if (type !== '') {
        filteredActivity = filteredActivity.filter((ele) => ele.type === type)
      }
      setFilterData(filteredActivity)
    }

  return (

    <div>
      <SearchForm filteredData={handleFilter}/>
      <div className='capsule_list'>{listOfCapsule}</div>
    </div>
  )
}

export default Data