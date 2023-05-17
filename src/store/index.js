import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#4f9e56',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.svg',
  fullDecal: './threejs.svg',
});

export default state;