import * as THREE from '../node_modules/three/build/three.module.js'

// Set up the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth * (1 - 0.06), window.innerHeight * (1 - (0.05 * 2) - (0.001 * 2)));
document.getElementById('scene-container').appendChild(renderer.domElement);

// Create a particle geometry
const particleCount = 1000;
const particles = new THREE.BufferGeometry();

// Create arrays to store the particle data
const positions = new Float32Array(particleCount * 3);
const colors = new Float32Array(particleCount * 3);

// Set initial positions and colors for the particles
for (let i = 0; i < particleCount; i++) {
  const i3 = i * 3;
  positions[i3] = (Math.random() - 0.5) * 20;
  positions[i3 + 1] = (Math.random() - 0.5) * 20;
  positions[i3 + 2] = (Math.random() - 0.5) * 20;

  colors[i3] = Math.random();
  colors[i3 + 1] = Math.random();
  colors[i3 + 2] = Math.random();
}

particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

// Create a material with a shader that uses vertex colors
const material = new THREE.PointsMaterial({ size: 0.1, vertexColors: THREE.VertexColors });

// Create the particle system
const particleSystem = new THREE.Points(particles, material);
scene.add(particleSystem);

// Set up the camera position
camera.position.z = 5;

// Animation function
const animate = function () {
  requestAnimationFrame(animate);

  // Rotate the particle system
  particleSystem.rotation.x += 0.001;
  particleSystem.rotation.y += 0.001;

  // Update the renderer
  renderer.render(scene, camera);
};

// Handle window resize
window.addEventListener('resize', () => {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;

  camera.aspect = newWidth / newHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(newWidth, newHeight);
});

// Start the animation loop
animate();