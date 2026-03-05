(function() {
  'use strict';

  function run() {
  if (typeof THREE === 'undefined') return;

  var container = document.getElementById('earth-canvas');
  if (!container) return;

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.z = 3.5;

  var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);
  renderer.domElement.style.pointerEvents = 'none';

  var mesh = null;
  var loader = new THREE.TextureLoader();

  function initEarth() {
    var colorUrl = 'images/earth/color.jpg';
    var fallbackUrl = 'images/planet-1-1.png';

    function createMesh(colorMap) {
      if (!colorMap) return;
      if (typeof colorMap.colorSpace !== 'undefined') colorMap.colorSpace = THREE.SRGBColorSpace;
      var material = new THREE.MeshStandardMaterial({ map: colorMap });
      loader.load('images/earth/normal.png', function(n) { material.normalMap = n; });
      loader.load('images/earth/occlusion.jpg', function(a) { material.aoMap = a; });
      var geometry = new THREE.SphereGeometry(1, 48, 48);
      mesh = new THREE.Mesh(geometry, material);
      mesh.scale.setScalar(2.5);
      scene.add(mesh);
    }

    loader.load(colorUrl, createMesh, undefined, function() {
      loader.load(fallbackUrl, createMesh);
    });
  }

  scene.add(new THREE.AmbientLight(0xffffff, 0.1));
  var light = new THREE.DirectionalLight(0xffffff, 3.5);
  light.position.set(1, 0, -0.25);
  scene.add(light);

  initEarth();

  function getScrollProgress() {
    var scrollY = window.scrollY || document.documentElement.scrollTop;
    var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) return 0;
    return Math.min(1, Math.max(0, scrollY / maxScroll));
  }

  function resize() {
    var w = container.offsetWidth;
    var h = container.offsetHeight;
    if (w <= 0 || h <= 0) return;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  function animate() {
    requestAnimationFrame(animate);
    if (mesh) {
      var p = getScrollProgress();
      mesh.rotation.y = p * Math.PI * 2;
    }
    renderer.render(scene, camera);
  }

  window.addEventListener('resize', resize);
  resize();
  animate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
