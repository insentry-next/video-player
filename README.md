# video-player

Видеоплеер для сервисов InSentry


## Установка

```
npm install web-video-player rxjs lodash webstomp-client
```


## Начало работы

1) Импортировать плеер на страницу

```jsx
import React from 'react'
import VideoPlayer from 'web-video-player'
```

2) Для получения видео с камеры необходимо передать пллеру урлы служб Spot и Cast, UUID камеры, на которой настроена видеоаналитика и токен пользователя Watch

```jsx
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
```
