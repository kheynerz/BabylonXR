import React from 'react';
import {
  FreeCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  SceneLoader,
} from 'babylonjs';
import SceneComponent from './SceneComponent'; // uses above component in same directory
import 'babylonjs-loaders';

const onSceneReady = (scene) => {
  const camera = new FreeCamera('camera1', new Vector3(0, 35, 35), scene);

  camera.setTarget(new BABYLON.Vector3(0, 35, 0));
  scene.clearColor = new BABYLON.Color3(0, 0, 0);

  const canvas = scene.getEngine().getRenderingCanvas();

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);
  light.intensity = 0.7;

  SceneLoader.Append(
    'https://cdn.jsdelivr.net/gh/kheynerz/WebVR@main/assets/bathroom.glb',
    '',
    scene,
    (newScene) => {
      newScene.meshes.map((mesh) => {
        mesh.scaling = new BABYLON.Vector3(5, 5, 5);
      });
    }
  );

  scene.createDefaultVRExperience();
};

const onRender = (scene) => {};

const Bathroom = () => {
  return (
    <SceneComponent
      antialias
      onSceneReady={onSceneReady}
      onRender={onRender}
      id="renderCanvas"
    />
  );
};

export default Bathroom;
