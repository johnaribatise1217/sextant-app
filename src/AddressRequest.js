import React, {useState ,useEffect} from 'react'
import axios from 'axios'

const AddressRequest = ({ipv6}) => {
  const [ipAdress , setIpAdress] = useState('')

  useEffect(() => {
    const fetchAdress = async () => {
        try{
            const apiUrl = ipv6 ? 'https://api64.ipify.org?format=json&ipv6=true': 'https://api.ipify.org?format=json';
            const res = await axios.get(apiUrl)
            setIpAdress(res.data.ip)
        } catch(error) {
            console.log('Error fetching ip address', error);
        }
    }
    fetchAdress()
  }, [ipv6])

  return (
    <div className='address'>
      <h3>Your IP Adress is: </h3>
      <p>{ipAdress}</p>
    </div>
  )
}

export default AddressRequest
