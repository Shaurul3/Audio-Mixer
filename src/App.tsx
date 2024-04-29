import { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

function App() {
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);

  useEffect(() => {
    if (waveformRef.current) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: 'rgb(200, 0, 200)',
        progressColor: 'rgb(100, 0, 100)'
      });

      wavesurfer.current.load('/Song.mp3');

      wavesurfer.current.on('ready', () => {
        console.log("WaveSurfer is ready!");
      });

      return () => wavesurfer.current?.destroy();
    }
  }, []);

  return (
    <div>
      <div ref={waveformRef} style={{ width: '300%', border: '1px solid black' }}>
      </div>
      <button onClick={() => wavesurfer.current?.playPause()}>
        Play/Pause
      </button>
    </div>
  );
}

export default App;