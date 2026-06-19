(function() {
  const container = document.getElementById('scene-container');
  if (!container || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0a1628, 0.018);

  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 1.2, 6);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  container.appendChild(renderer.domElement);

  // Lights
  const ambient = new THREE.AmbientLight(0x223366, 0.5);
  scene.add(ambient);
  const key = new THREE.DirectionalLight(0xffeedd, 1.5);
  key.position.set(4, 6, 5);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0x4488ff, 0.3);
  fill.position.set(-4, 2, -3);
  scene.add(fill);
  const rim = new THREE.DirectionalLight(0xd4a843, 0.5);
  rim.position.set(0, -3, -5);
  scene.add(rim);

  // Products data
  const showcaseProducts = (typeof products !== 'undefined' && products.length) ? products : [];
  const NUM = Math.min(showcaseProducts.length, 16);

  // ---- Product Card Group ----
  const cardGroup = new THREE.Group();
  scene.add(cardGroup);
  const cards = [];
  const cardData = [];

  showcaseProducts.slice(0, NUM).forEach((p, i) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = p.image;
    const tex = new THREE.Texture(img);
    img.onload = () => tex.needsUpdate = true;

    const geo = new THREE.PlaneGeometry(1.4, 1.4);
    const mat = new THREE.MeshStandardMaterial({
      map: tex, transparent: true, side: THREE.DoubleSide,
      roughness: 0.25, metalness: 0.05,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.userData = { id: p.id, i, baseY: 0, phase: i * 1.8, speed: 0.2 + Math.random() * 0.15 };

    const borderGeo = new THREE.PlaneGeometry(1.5, 1.5);
    const borderMat = new THREE.MeshBasicMaterial({
      color: 0xd4a843, transparent: true, opacity: 0.1, side: THREE.DoubleSide,
    });
    const border = new THREE.Mesh(borderGeo, borderMat);
    border.position.z = -0.02;
    mesh.add(border);

    cardGroup.add(mesh);
    cards.push(mesh);
    cardData.push({ id: p.id, i, phase: i * 1.8, speed: 0.2 + Math.random() * 0.15 });
  });

  // Fallback cards
  if (cards.length === 0) {
    for (let i = 0; i < 12; i++) {
      const canvas = document.createElement('canvas');
      canvas.width = 256; canvas.height = 256;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#0a1628'; ctx.fillRect(0,0,256,256);
      ctx.strokeStyle = '#d4a843'; ctx.lineWidth = 2; ctx.strokeRect(8,8,240,240);
      ctx.fillStyle = '#d4a843'; ctx.font = 'bold 20px Inter'; ctx.textAlign = 'center';
      ctx.textBaseline = 'middle'; ctx.fillText('Prestige', 128, 128);
      const tex = new THREE.CanvasTexture(canvas);
      const geo = new THREE.PlaneGeometry(1.4, 1.4);
      const mat = new THREE.MeshStandardMaterial({ map: tex, transparent: true, side: THREE.DoubleSide });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.userData = { i, phase: i * 1.2, speed: 0.2 };
      cardGroup.add(mesh);
      cards.push(mesh);
      cardData.push({ i, phase: i * 1.2, speed: 0.2 });
    }
  }

  // ---- Orbit Ring ----
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0xd4a843, transparent: true, opacity: 0.04, side: THREE.DoubleSide, depthWrite: false,
  });
  const ring1 = new THREE.Mesh(new THREE.RingGeometry(2.6, 2.8, 64), ringMat);
  ring1.rotation.x = -Math.PI / 3;
  scene.add(ring1);
  const ring2 = new THREE.Mesh(new THREE.RingGeometry(3.6, 3.7, 64), ringMat);
  ring2.rotation.x = Math.PI / 4;
  ring2.position.y = 0.5;
  scene.add(ring2);

  // ---- Particles ----
  const pCount = 500;
  const pGeo = new THREE.BufferGeometry();
  const pPos = new Float32Array(pCount * 3);
  for (let i = 0; i < pCount; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 3 + Math.random() * 12;
    pPos[i*3] = r * Math.sin(phi) * Math.cos(theta);
    pPos[i*3+1] = r * Math.cos(phi) * 1.5;
    pPos[i*3+2] = r * Math.sin(phi) * Math.sin(theta);
  }
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  const pMat = new THREE.PointsMaterial({
    color: 0xd4a843, size: 0.03, transparent: true, opacity: 0.4,
    blending: THREE.AdditiveBlending, sizeAttenuation: true,
  });
  const particles = new THREE.Points(pGeo, pMat);
  scene.add(particles);

  // ---- Collection 3D objects ----
  const collGroup = new THREE.Group();
  scene.add(collGroup);
  const collGeos = [
    new THREE.OctahedronGeometry(0.5),
    new THREE.IcosahedronGeometry(0.4),
    new THREE.TorusGeometry(0.35, 0.12, 12, 24),
    new THREE.ConeGeometry(0.4, 0.7, 6),
  ];
  const collColors = [0xd4a843, 0x4488ff, 0xd4a843, 0x88bbff];
  const collObjects = [];
  collGeos.forEach((g, i) => {
    const m = new THREE.MeshStandardMaterial({
      color: collColors[i], metalness: 0.3, roughness: 0.4, transparent: true, opacity: 0,
    });
    const obj = new THREE.Mesh(g, m);
    const angle = (i / collGeos.length) * Math.PI * 2;
    obj.position.set(Math.cos(angle) * 2.5, -1, Math.sin(angle) * 2.5);
    obj.userData = { phase: i * 1.5, baseY: -1 };
    collGroup.add(obj);
    collObjects.push(obj);
  });
  collGroup.visible = false;

  // ---- CTA burst particles ----
  const burstCount = 200;
  const bGeo = new THREE.BufferGeometry();
  const bPos = new Float32Array(burstCount * 3);
  const bVel = new Float32Array(burstCount * 3);
  for (let i = 0; i < burstCount; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 0.5 + Math.random() * 0.5;
    bPos[i*3] = r * Math.sin(phi) * Math.cos(theta);
    bPos[i*3+1] = r * Math.cos(phi);
    bPos[i*3+2] = r * Math.sin(phi) * Math.sin(theta);
    bVel[i*3] = (Math.random() - 0.5) * 0.02;
    bVel[i*3+1] = (Math.random() - 0.5) * 0.02;
    bVel[i*3+2] = (Math.random() - 0.5) * 0.02;
  }
  bGeo.setAttribute('position', new THREE.BufferAttribute(bPos, 3));
  bGeo.userData = { vel: bVel };
  const bMat = new THREE.PointsMaterial({
    color: 0xd4a843, size: 0.06, transparent: true, opacity: 0,
    blending: THREE.AdditiveBlending, sizeAttenuation: true,
  });
  const burstPts = new THREE.Points(bGeo, bMat);
  burstPts.position.y = -2;
  scene.add(burstPts);

  // ---- Mouse ----
  let mx = 0, my = 0;
  let tx = 0, ty = 0;
  document.addEventListener('mousemove', e => {
    mx = (e.clientX / window.innerWidth - 0.5) * 2;
    my = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // ---- Scroll progress ----
  function getProgress() {
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    return docH > 0 ? window.scrollY / docH : 0;
  }

  // ---- Raycaster ----
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  renderer.domElement.addEventListener('click', e => {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(cards);
    if (intersects.length > 0) {
      const id = intersects[0].object.userData.id;
      if (id && typeof showQuickView === 'function') showQuickView(id);
    }
  });

  // ---- Section progress ranges ----
  const SECTIONS = [
    { label: 'hero', start: 0, end: 0.15 },
    { label: 'collections', start: 0.15, end: 0.35 },
    { label: 'products', start: 0.35, end: 0.55 },
    { label: 'cta', start: 0.55, end: 0.70 },
    { label: 'trending', start: 0.70, end: 0.88 },
    { label: 'footer', start: 0.88, end: 1.0 },
  ];

  function lerp(a, b, t) { return a + (b - a) * Math.max(0, Math.min(1, t)); }

  function smoothstep(edge0, edge1, x) {
    const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
    return t * t * (3 - 2 * t);
  }

  // ---- Animation loop ----
  const clock = new THREE.Clock();
  let rotY = 0;

  function animate() {
    requestAnimationFrame(animate);
    const t = clock.elapsedTime;
    const progress = getProgress();

    // Smooth mouse
    tx += (mx - tx) * 0.04;
    ty += (my - ty) * 0.04;

    // Camera moves through 3D space based on scroll
    const camZ = lerp(6, 2, progress);
    const camY = lerp(1.2, 0.5, progress) + ty * 0.3;
    const camX = tx * 0.5;
    camera.position.x += (camX - camera.position.x) * 0.03;
    camera.position.y += (camY - camera.position.y) * 0.03;
    camera.position.z += (camZ - camera.position.z) * 0.03;
    camera.lookAt(0, 0, progress > 0.5 ? -2 : 0);

    // Auto rotation
    rotY += 0.002 * (1 - progress * 0.5);

    // ---- Card formation based on scroll ----
    const cardT = smoothstep(0, 0.15, progress);
    const cardSpread = lerp(3.2, 1.8, cardT);
    const cardYOff = lerp(0, -0.5, cardT);

    cards.forEach((mesh, i) => {
      const d = cardData[i] || { i, phase: i * 1.2, speed: 0.2 };
      const total = cards.length;
      const angle = (d.i / total) * Math.PI * 2 + rotY;
      const radius = cardSpread * (0.7 + 0.3 * Math.sin(progress * Math.PI + d.phase));
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = d.phase != null
        ? cardYOff + Math.sin(t * d.speed + d.phase) * 0.15 * (1 - progress * 0.5)
        : cardYOff;

      mesh.position.x += (x - mesh.position.x) * 0.08;
      mesh.position.z += (z - mesh.position.z) * 0.08;
      mesh.position.y += (y - mesh.position.y) * 0.08;

      mesh.rotation.y = -angle + Math.PI / 2;
      mesh.rotation.x = Math.sin(angle * 2 + t * 0.3) * 0.08;
      mesh.rotation.z = Math.cos(angle * 2 + t * 0.2) * 0.05;

      const s = 0.8 + 0.2 * (0.5 + 0.5 * Math.sin(t * 0.3 + d.phase));
      mesh.scale.setScalar(s);
    });

    // ---- Collection objects ----
    const collVis = smoothstep(0.12, 0.18, progress);
    const collFade = smoothstep(0.30, 0.35, progress) * -1 + 1;
    collGroup.visible = collVis > 0.01;
    collObjects.forEach((obj, i) => {
      const o = collVis * (1 - smoothstep(0.30, 0.35, progress));
      obj.material.opacity += (o - obj.material.opacity) * 0.05;
      obj.rotation.x += 0.01;
      obj.rotation.y += 0.015;
      obj.position.y = -1 + Math.sin(t * 0.5 + obj.userData.phase) * 0.15;
      const s = 0.8 + 0.2 * Math.sin(t * 0.4 + obj.userData.phase);
      obj.scale.setScalar(s);
    });

    // ---- CTA burst ----
    const burstVis = smoothstep(0.50, 0.58, progress);
    const burstFade = smoothstep(0.68, 0.72, progress) * -1 + 1;
    bMat.opacity += ((burstVis * burstFade * 0.8) - bMat.opacity) * 0.05;
    burstPts.position.y += (-0.5 - burstPts.position.y) * 0.03;
    const posAttr = bGeo.attributes.position;
    const vel = bGeo.userData.vel;
    if (posAttr && vel) {
      for (let i = 0; i < burstCount; i++) {
        posAttr.array[i*3] += vel[i*3];
        posAttr.array[i*3+1] += vel[i*3+1];
        posAttr.array[i*3+2] += vel[i*3+2];
        if (Math.abs(posAttr.array[i*3]) > 4) vel[i*3] *= -1;
        if (Math.abs(posAttr.array[i*3+1]) > 4) vel[i*3+1] *= -1;
        if (Math.abs(posAttr.array[i*3+2]) > 4) vel[i*3+2] *= -1;
      }
      posAttr.needsUpdate = true;
    }

    // ---- Particles ----
    particles.rotation.y += 0.0006;
    particles.rotation.x += 0.0002;

    // ---- Rings ----
    ring1.rotation.z += 0.002;
    ring2.rotation.z -= 0.0015;

    renderer.render(scene, camera);
  }

  animate();

  // ---- Resize ----
  window.addEventListener('resize', () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
})();
