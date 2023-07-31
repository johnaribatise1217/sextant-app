import React, {useState ,useEffect} from 'react'
import axios from 'axios'

const AddressRequest = ({apiUrl}) => {
  const [ipAdress , setIpAdress] = useState('')

  useEffect(() => {
    const fetchAdress = async () => {
        try{
            const res = await axios.get(apiUrl)
            setIpAdress(res.data.ip)
        } catch(error) {
            console.log('Error fetching ip address', error);
        }
    }
    fetchAdress()
  }, [apiUrl])

  return (
    <div className='address'>
      <h3>Your IP Adress is: </h3>
      <p>{ipAdress}</p>
    </div>
  )
}

export default AddressRequest
