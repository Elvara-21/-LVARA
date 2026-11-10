import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Scene() {
  const mount = useRef(null);
  useEffect(() => {
    const host = mount.current;
    if (!host) return;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#e9e0d3');
    const camera = new THREE.PerspectiveCamera(35, host.clientWidth / host.clientHeight, 0.1, 100);
    camera.position.set(0, 0.2, 7);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(host.clientWidth, host.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xffffff, 0x8b7865, 2.1));
    const key = new THREE.DirectionalLight(0xffffff, 3);
    key.position.set(3, 5, 5); key.castShadow = true; scene.add(key);
    const fill = new THREE.PointLight(0xc9a77d, 24, 15);
    fill.position.set(-4, 1, 2); scene.add(fill);

    const group = new THREE.Group(); scene.add(group);
    const fabric = new THREE.MeshStandardMaterial({ color: '#d6c5b0', roughness: 0.72, metalness: 0.02 });
    const dark = new THREE.MeshStandardMaterial({ color: '#292521', roughness: 0.6 });
    const gold = new THREE.MeshStandardMaterial({ color: '#b99a70', metalness: 0.72, roughness: 0.25 });
    const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.72, 1.25, 8, 18), fabric);
    torso.scale.set(0.9, 1, 0.43); torso.position.y = 0.15; torso.castShadow = true; group.add(torso);
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.2, 0.42, 24), fabric);
    neck.position.y = 1.35; group.add(neck);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.48, 32, 24), dark);
    head.scale.set(0.8, 1.12, 0.82); head.position.y = 1.9; head.castShadow = true; group.add(head);
    const left = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 1.1, 6, 12), fabric);
    left.position.set(-0.88, 0.1, 0); left.rotation.z = -0.18; group.add(left);
    const right = left.clone(); right.position.x = 0.88; right.rotation.z = 0.18; group.add(right);
    const belt = new THREE.Mesh(new THREE.TorusGeometry(0.54, 0.055, 12, 48), gold);
    belt.position.y = -0.55; belt.rotation.x = Math.PI / 2; belt.scale.set(1.25, 0.72, 1); group.add(belt);
    const floor = new THREE.Mesh(new THREE.CircleGeometry(3.2, 64), new THREE.MeshStandardMaterial({ color: '#d9cbbb', roughness: 1 }));
    floor.rotation.x = -Math.PI / 2; floor.position.y = -2.15; floor.receiveShadow = true; scene.add(floor);
    group.rotation.y = -0.22;

    let pointerX = 0, pointerY = 0, frame;
    const onMove = (e) => {
      const rect = host.getBoundingClientRect();
      pointerX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.5;
      pointerY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.25;
    };
    host.addEventListener('pointermove', onMove);
    const animate = () => {
      frame = requestAnimationFrame(animate);
      group.rotation.y += (pointerX - group.rotation.y * 0.15) * 0.025;
      group.rotation.x += (-pointerY - group.rotation.x) * 0.025;
      group.position.y = Math.sin(Date.now() * 0.0008) * 0.06;
      renderer.render(scene, camera);
    };
    animate();
    const resize = () => {
      const w = host.clientWidth, h = host.clientHeight;
      camera.aspect = w / h; camera.updateProjectionMatrix(); renderer.setSize(w, h);
    };
    const observer = new ResizeObserver(resize); observer.observe(host);
    return () => {
      cancelAnimationFrame(frame); observer.disconnect(); host.removeEventListener('pointermove', onMove);
      renderer.dispose();
      if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement);
      scene.traverse(o => { if (o.geometry) o.geometry.dispose(); });
    };
  }, []);
  return <div className="three-scene" ref={mount} aria-label="Interactive 3D fashion-inspired sculpture" />;
}