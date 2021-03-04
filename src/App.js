import React, { useRef, useState, useEffect, useCallback } from 'react';
import VideoPlayer, { SpotConnection } from 'web-video-player'

import json from './detectors.json'

import './App.css'

function App() {
  const [isConnected, setConnected] = useState(false)
  const [detectors, setDetectors] = useState({})
  const [error, setError] = useState('')
  const spotRef = useRef()

  useEffect(() => {
    const mappedDetectors = Object.entries(json).reduce((acc, [key, value]) => ({
      ...acc,
      [key]: {
        id: key,
        ...value
      }
    }), {})

    setDetectors(mappedDetectors)

    spotRef.current = new SpotConnection(spotUrl, setError, () => setConnected(true))
  }, [])

  const videoShow = e => {
    if (error) {
      setError('')
    }
  }

  const videoError = (e) => {
    setError(e.code || e.type)
  }

  const spotUrl = `ws://${window.location.hostname}:8081/spot`
  const liveUrl = `ws://${window.location.hostname}:3301/live`
  const cameraId = '77f0c2aa-1b8f-4193-8222-8dfd936a228c'
  const userToken = '0611624c-ae7e-4dd3-90ba-feb49542116d'

  const spot = useCallback(() => spotRef.current, [isConnected])

  return (
    <div className="container">
      <VideoPlayer
        sceneInfo={detectors}
        spot={spot}
        spotUrl={spotUrl}
        className="video"
        onPlay={videoShow}
        onError={videoError}
        cameraId={cameraId}
        userToken={userToken}
        liveUrl={liveUrl}
        width={640}
        height={320}
      />
      {
        error && (
          <div className="videoError">
            <h2>{error}</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;
