import React from 'react'
import './exhibit.css'
import AddressRequest from '../AddressRequest'

const Exhibit = ({title}) => {
  return (
    <div className='exhibit'>
      <h2>{title}</h2>
      <div className='address'>
        <div className="ip4">
            <h3>Ipv4 Address</h3>
            <AddressRequest ipv6={false}/>
        </div>
        <div className="ip6">
            <h3>Ipv6 Address</h3>
            <AddressRequest ipv6={true}/>
        </div>
      </div>
    </div>
  )
}

export default Exhibit
