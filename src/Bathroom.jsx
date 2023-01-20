import React from 'react';
import { FreeCamera, Vector3, HemisphericLight, SceneLoader } from 'babylonjs';
import SceneComponent from './SceneComponent'; // uses above component in same directory
import 'babylonjs-loaders';
import { Button } from 'react-bootstrap';
const onSceneReady = async (scene) => {
  const camera = new FreeCamera('camera1', new Vector3(1.5, 1.5, 1.5), scene);

  camera.setTarget(new BABYLON.Vector3(0, 0, 0));
  scene.clearColor = new BABYLON.Color3(0, 0, 0);

  const canvas = scene.getEngine().getRenderingCanvas();

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);
  light.intensity = 0.7;

  SceneLoader.Append(
    'https://cdn.jsdelivr.net/gh/kheynerz/WebVR@main/assets/simple_bathroom_baking.glb',
    '',
    scene,
    (newScene) => {}
  );

  scene.createDefaultVRExperience();
};

const Bathroom = ({ goBack }) => {
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

export default Bathroom;
