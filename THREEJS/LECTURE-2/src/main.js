import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
const scene=new THREE.Scene();
console.log(THREE)
const circleGeometry =new THREE.SphereGeometry( 2,25, 6);
const circleMaterial =new THREE.MeshBasicMaterial({color: "orangered"})
const circleMesh=new THREE.Mesh(circleGeometry,circleMaterial)
scene.add(circleMesh)
// camera 
const camera=new THREE.PerspectiveCamera(30,innerWidth/innerHeight,0.5,200)
camera.position.x=8;

// renderer 
const canvas=document.querySelector(".threejs")
const renderer= new THREE.WebGLRenderer({canvas})

const control=new OrbitControls(camera,canvas)
// const controls = new OrbitControls(camera, renderer.domElement);
control.enableDamping=true;
control.autoRotate=true
const loop=()=>{
  control.update()
  renderer.setSize(innerWidth,innerHeight)
  renderer.render(scene ,camera)
  window.requestAnimationFrame(loop)

}
loop();
