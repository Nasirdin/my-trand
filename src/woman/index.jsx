import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei';
import { useState } from 'react';
import html2canvas from 'html2canvas';

import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';

const CanvasModel = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadClick = () => {
    setIsDownloading(true);
    const canvas = document.querySelector('.canvas-container canvas');
    html2canvas(canvas, {
      scale: 5 // double the size of the canvas
    }).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'my-trand.png';
      link.href = canvas.toDataURL();
      link.click();
      setIsDownloading(true);
    });
  }
  

  return (
    <div className="canvas-container w-full h-full ">
      {isDownloading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <span className="text-white">Downloading...</span>
        </div>
      )}
      <Canvas
        shadows
        camera={{ position: [0, 0, 0], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full max-w-full h-full transition-all ease-in"
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />

        <CameraRig>
          <Backdrop />
          <Center>
            <Shirt />
          </Center>
        </CameraRig>
      </Canvas>
      <button onClick={handleDownloadClick}  className="absolute z-50 bottom-1 right-4  p-2 bg-[#1fc142] text-white font-bold rounded">
        Download
      </button>
    </div>
  )
}

export default CanvasModel;