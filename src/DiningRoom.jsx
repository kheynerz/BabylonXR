import React from 'react';
import { FreeCamera, Vector3, HemisphericLight, MeshBuilder } from 'babylonjs';
import SceneComponent from './SceneComponent'; // uses above component in same directory
import 'babylonjs-loaders';
import { Button } from 'react-bootstrap';
const onSceneReady = (scene) => {
  // This creates and positions a free camera (non-mesh)
  const camera = new FreeCamera('camera1', new Vector3(0, 1, 2), scene);

  // This targets the camera to scene origin
  camera.setTarget(Vector3.Zero());

  scene.clearColor = new BABYLON.Color3(255, 255, 255);
  const canvas = scene.getEngine().getRenderingCanvas();

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7;

  BABYLON.SceneLoader.Append(
    'https://cdn.jsdelivr.net/gh/kheynerz/WebVR@main/assets/modern_dining_room.glb',
    '',
    scene,
    () => {}
  );

  scene.createDefaultVRExperience();
};

const DiningRoom = ({ goBack }) => {
  return (
    <>
      <Button className="volver" variant="secondary" onClick={() => goBack()}>
        Go Back
      </Button>

      <SceneComponent
        antialias
        onSceneReady={onSceneReady}
        onRender={() => {}}
        id="renderCanvas"
      />
    </>
  );
};

export default DiningRoom;
