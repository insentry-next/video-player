# video-player

Видеоплеер для сервисов InSentry


## Установка

```
npm install web-video-player rxjs lodash webstomp-client
```


## Начало работы

Импортировать плеер на страницу

```jsx
import React from 'react'
import VideoPlayer from 'web-video-player'
```

Для получения видео с камеры необходимо передать пллеру урлы служб Spot и Cast, UUID камеры, на которой настроена видеоаналитика и токен пользователя Watch

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

## Пример
В папке [src](https://github.com/insentry-next/video-player/blob/main/src/App.js) можно найти пример подключения и настройки плеера
