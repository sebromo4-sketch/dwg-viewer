export * from '../node_modules/three/build/three.module.js';
export class WebGLRenderer {
  constructor() { this.domElement = document.createElement('canvas'); }
  setPixelRatio() {}
  setSize() {}
  render() { window.__renders = (window.__renders || 0) + 1; }
  dispose() {}
}
