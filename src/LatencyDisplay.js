import React , {useState, useEffect} from 'react'
import { w3cwebsocket } from 'websocket'

const LatencyDisplay = () => {
  const [latency , setLatency] = useState(0)

  useEffect(() => {
    const ws = new w3cwebsocket('ws://localhost:55455')

    ws.onmessage = (e) => {
        const packetTimeStamp = JSON.parse(e.data)
        const currentTimeStamp = Date.now()
        const packetLatency = currentTimeStamp - packetTimeStamp
        setLatency(packetLatency)
    }

    return ()=> {
        ws.close()
    }
  }, [])

  return (
    <div style={{textAlign : 'center', display: 'flex', gap : '1rem', }}>
      <h2 style={{fontSize : '20px' , fontFamily : 'tahoma', color : 'darkblue'}}>Packet Latency:</h2>
      <p>{latency} milliseconds</p>
    </div>
  )
}

export default LatencyDisplay
