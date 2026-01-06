import * as THREE from 'three'
const scene=new THREE.Scene()
const cubeGemotery=new THREE.BoxGeometry(1,2,1)
const cubeMaterial=new THREE.MeshBasicMaterial({color:"green"})
const cubeMesh=new THREE.Mesh(
  cubeGemotery,
  cubeMaterial
)
scene.add(cubeMesh)
// camera 
const camera =new THREE.PerspectiveCamera(80,innerWidth/innerHeight,0.2,30)
camera.position.z=3
// render
const canvas=document.querySelector(".threejs")
const renderer=new THREE.WebGLRenderer({canvas})
renderer.setSize(innerWidth,innerHeight)
renderer.render(scene,camera)
