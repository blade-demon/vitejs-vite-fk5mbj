import { useEffect, useRef } from 'react';
import videoSrc from './assets/flower.webm';

function autoplayMutedVideoIfBlocked(video: HTMLVideoElement) {
  // Browser can block video playback if it is auto played without user interaction
  // One solution is to mute the video and let the user know
  video.controls = true;
  var promise = video.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        // Autoplay started
        console.log('auto play started');
      })
      .catch((error) => {
        // The video must play muted until user hits play button
        video.muted = true;
        video.play();
      });
  }
}

export function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef?.current) autoplayMutedVideoIfBlocked(videoRef.current);
  }, []);

  return (
    <video controls width="450" autoPlay ref={videoRef}>
      <source src={videoSrc} type="video/webm" />
      <source
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        type="video/mp4"
      />
      Download the
      <a href="/media/cc0-videos/flower.webm">WEBM</a>
      or
      <a href="/media/cc0-videos/flower.mp4">MP4</a>
      video.
    </video>
  );
}

export function WrappedApp() {
  return <App />;
}
