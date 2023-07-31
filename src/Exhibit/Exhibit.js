import React, { useState } from 'react'
import './exhibit.css'
import AddressRequest from '../AddressRequest'

const urlArray = ['https://api.ipify.org?format=json', 'https://api64.ipify.org?format=json&ipv6=true']

const Exhibit = ({title}) => {
  const [ipv4] = useState(urlArray[0])
  const [ipv6] = useState(urlArray[1])

  return (
    <div className='exhibit'>
      <h2>{title}</h2>
      <div className='address'>
        <div className="ip4">
            <h3>Ipv4 Address</h3>
            <AddressRequest apiUrl={ipv4}/>
        </div>
        <div className="ip6">
            <h3>Ipv6 Address</h3>
            <AddressRequest apiUrl={ipv6}/>
        </div>
      </div>
    </div>
  )
}

export default Exhibit
