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

      return () => wavesurfer.current?.destroy();
    }
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file && wavesurfer.current) {
      const fileURL = URL.createObjectURL(file);
      wavesurfer.current.load(fileURL);
    }
  };

  return (
    <div>
      <div>
        <input type="file" accept="audio/*" onChange={handleFileChange} />
      </div>
      <div ref={waveformRef} style={{ width: '300%', border: '1px solid black' }}>
      </div>
      <button onClick={() => wavesurfer.current?.playPause()}>
        Play/Pause
      </button>
    </div>
  );
}

export default App;
