export function App() {
  return (
    <video controls width="450">
      <source src="/media/cc0-videos/flower.webm" type="video/webm" />
      <source src="/media/cc0-videos/flower.mp4" type="video/mp4" />
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
