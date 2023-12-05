import * as THREE from '../node_modules/three/build/three.module.js'

// Constants
const constantWidth = (1 - 0.058)
const constantHeight = (1 - (0.05 * 2) - (0.001 * 2))

// Set up the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth * constantWidth, window.innerHeight * constantHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

// Create a particle geometry with round particles forming a sphere
const particleCount = 10000;
const particles = new THREE.BufferGeometry();

// Create arrays to store the particle data
const positions = new Float32Array(particleCount * 3);
const colors = new Float32Array(particleCount * 3);

// Define theta and phi outside the loop
let thetaArray = [];
let phiArray = [];

// Set initial positions and colors for the particles forming a sphere
for (let i = 0; i < particleCount; i++) {
  const i3 = i * 3;
  const radius = 1.5;

  // Distribute particles evenly on the surface of a sphere
  const phi = Math.acos(-1 + (2 * i) / particleCount);
  const theta = Math.sqrt(particleCount * Math.PI) * phi;

  thetaArray.push(theta);
  phiArray.push(phi);

  const variation = 0.5;

  const x = radius * Math.cos(theta) * Math.sin(phi) + (Math.random() - 0.5) * variation;
  const y = radius * Math.sin(theta) * Math.sin(phi) + (Math.random() - 0.5) * variation;
  const z = radius * Math.cos(phi) + (Math.random() - 0.5) * variation;

  positions[i3] = x;
  positions[i3 + 1] = y;
  positions[i3 + 2] = z;

}

particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

// Create a material with a shader that uses vertex colors
const material = new THREE.PointsMaterial({ size: 0.01, vertexColors: THREE.VertexColors });

// Create the particle system
const particleSystem = new THREE.Points(particles, material);
scene.add(particleSystem);

// Set up the camera position
camera.position.z = 5;

// Animation function
const animate = function () {

  // Rotate the particle system
  particleSystem.rotation.z += 0.001;
  particleSystem.rotation.y += 0.001;
  
  // Update the renderer
  renderer.render(scene, camera);

  requestAnimationFrame(animate);
};

// Handle window resize
window.addEventListener('resize', () => {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;

  camera.aspect = newWidth / newHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(newWidth * constantWidth, newHeight * constantHeight);
});

// Start the animation loop
const timestamp = Date.now();
animate(timestamp);