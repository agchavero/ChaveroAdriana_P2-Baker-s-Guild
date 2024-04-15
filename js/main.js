import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

var width = window.innerWidth;
var height = window.innerHeight;


// 1: Set up the scene

var scene = new THREE.Scene();

// 2: Add a camera
var camera = new THREE.PerspectiveCamera(75,width/height,0.1,1000);
camera.position.z = 7;
camera.position.y = 1;
camera.position.x = -3;





// 3: create a renderer
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#D1DFE0");
renderer.setSize(width, height);
// document.body.appendChild(renderer.domElement);
document.getElementById("flex3d").appendChild(renderer.domElement);



// 4: Add objects to the scene

// --------------------Add a video texture-------------------
const cakeClassVideo = document.createElement('video');
cakeClassVideo.src = 'media/video/cakeclass.mp4';
cakeClassVideo.loop = true;
cakeClassVideo.muted = true;    
cakeClassVideo.play();

const cakeClassTexture = new THREE.VideoTexture(cakeClassVideo);
const cakeClassGeometry = new THREE.BoxGeometry(2,1,2);
const cakeClassMaterial = new THREE.MeshBasicMaterial({map: cakeClassTexture});
const cakeClassCube = new THREE.Mesh(cakeClassGeometry,cakeClassMaterial);
scene.add(cakeClassCube);

// rotate the cube
cakeClassCube.rotation.y = THREE.MathUtils.degToRad(25);
cakeClassCube.scale.set(7,7,7);
cakeClassCube.position.set(15,4,15);


//------------------------------add capsule
const geometry = new THREE.CapsuleGeometry( .5, 2, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xCCCCFF} ); 
const capsule = new THREE.Mesh( geometry, material ); 
scene.add( capsule );
capsule.scale.set(.3,.3,.3);
capsule.position.set(15,8,0);
capsule.rotation.z = THREE.MathUtils.degToRad(68);

// create another capsule
const geometry2 = new THREE.CapsuleGeometry( .5, 2, 4, 8 );
const material2 = new THREE.MeshBasicMaterial( {color: 0xDAF7A6} );
const capsule2 = new THREE.Mesh( geometry2, material2 );
scene.add( capsule2 );
capsule2.scale.set(.3,.3,.3);
capsule2.position.set(-2,5,-2);
capsule2.rotation.z = THREE.MathUtils.degToRad(-68);

// create another capsule
const geometry3 = new THREE.CapsuleGeometry( .5, 2, 4, 8 );
const material3 = new THREE.MeshBasicMaterial( {color: 0xFFC300} );
const capsule3 = new THREE.Mesh( geometry3, material3 );
scene.add( capsule3 );
capsule3.scale.set(.3,.3,.3);
capsule3.position.set(-5,4,5);

// create another capsule
const geometry4 = new THREE.CapsuleGeometry( .5, 2, 4, 8 );
const material4 = new THREE.MeshBasicMaterial( {color: 0xFF5733} );
const capsule4 = new THREE.Mesh( geometry4, material4 );
scene.add( capsule4 );
capsule4.scale.set(.3,.3,.3);
capsule4.position.set(5,4,-5);

// create another capsule
const geometry5 = new THREE.CapsuleGeometry( .5, 2, 4, 8 );
const material5 = new THREE.MeshBasicMaterial( {color: 0xC70039} );
const capsule5 = new THREE.Mesh( geometry5, material5 );
scene.add( capsule5 );
capsule5.scale.set(.3,.3,.3);
capsule5.position.set(-15,7,2);

// create another capsule
const geometry6 = new THREE.CapsuleGeometry( .5, 2, 4, 8 );
const material6 = new THREE.MeshBasicMaterial( {color: 0xCCEDFF} );
const capsule6 = new THREE.Mesh( geometry6, material6 );
scene.add( capsule6 );
capsule6.scale.set(.3,.3,.3);
capsule6.position.set(-12,8,-10);

// create another capsule
const geometry7 = new THREE.CapsuleGeometry( .5, 2, 4, 8 );
const material7 = new THREE.MeshBasicMaterial( {color: 0xFFFA88} );
const capsule7 = new THREE.Mesh( geometry7, material7 );
scene.add( capsule7 );
capsule7.scale.set(.3,.3,.3);
capsule7.position.set(0,-2.5,2);
capsule7.rotation.z = THREE.MathUtils.degToRad(30);












// ---------------------------------------------3D MODELS---------------------------------------------
//add bird model
var cake;

// declare variables for animation
// var mixer;            // THREE.js animation mixer
// var bird_anim_FLY;   // animation action

// add a 3d model
const gltfLoader = new GLTFLoader();
gltfLoader.load('media/models/cake.glb', (gltf) => {

    cake = gltf.scene;
    cake.scale.set(.12,.12,.12);
    cake.position.set(-3,-1,1);
    scene.add(cake);

});

// --------------------adding baking models
var cakes;
gltfLoader.load('media/models/snacks on stand.glb', (gltf) => {

    cakes = gltf.scene;
    cakes.scale.set(.17,.17,.17);
    cakes.position.set(-7,-2,-2);
    scene.add(cakes);

});


var whisk;
gltfLoader.load('media/models/whisk.glb', (gltf) => {

    whisk = gltf.scene;
    whisk.scale.set(3,3,3);
    whisk.position.set(25,-5,0);
    scene.add(whisk);
    whisk.rotation.z = THREE.MathUtils.degToRad(90);

});

//----------------- OBJECT ROTATION WITH MOUSE MOVE -----------------
// Define variables to store the previous mouse position
// let or var keyword is fine
let previousMousePosition = {
    x: 0,
    y: 0
};

// Function to handle mouse movement
function onMouseMove(event) {
    // Calculate the change in mouse position
    // no need to modify this code or next code *{
    const deltaMove = {
        x: event.clientX - previousMousePosition.x,
        y: event.clientY - previousMousePosition.y
    };

    // Update the previous mouse position
    previousMousePosition = {
        x: event.clientX,
        y: event.clientY
    };
        // }*

    // Adjust rotation based on mouse movement
    const rotationSpeed = 0.005;
    //substitute 'selfieCube' with the variable name for any object you want
    capsule.rotation.y += deltaMove.x * rotationSpeed;
    capsule.rotation.x += deltaMove.y * rotationSpeed;
    capsule2.rotation.y += deltaMove.x * rotationSpeed;
    capsule2.rotation.x += deltaMove.y * rotationSpeed;
    capsule3.rotation.y += deltaMove.x * rotationSpeed;
    capsule3.rotation.x += deltaMove.y * rotationSpeed;
    capsule4.rotation.y += deltaMove.x * rotationSpeed;
    capsule4.rotation.x += deltaMove.y * rotationSpeed;
    capsule5.rotation.y += deltaMove.x * rotationSpeed;
    capsule5.rotation.x += deltaMove.y * rotationSpeed;
    capsule6.rotation.y += deltaMove.x * rotationSpeed;
    capsule6.rotation.x += deltaMove.y * rotationSpeed;
    capsule7.rotation.y += deltaMove.x * rotationSpeed;
    capsule7.rotation.x += deltaMove.y * rotationSpeed;
  
    
}

// Add event listener for mouse movement
document.addEventListener('mousemove', onMouseMove, false);

//----------------- OBJECT FOLLOWS MOUSE MOVEMENT -----------------
// Function to handle mouse movement
function moveObj(event) {
    // Calculate the normalized device coordinates (NDC) of the mouse position
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

    // Create a raycaster to determine the intersection point with the scene
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera({ x: mouseX, y: mouseY }, camera);

    // Calculate the intersection point with a plane at z = 0 (the plane parallel to the camera)
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const intersectionPoint = new THREE.Vector3();
    raycaster.ray.intersectPlane(plane, intersectionPoint);
    //  z coordinate of  intersectionpoint moves cube closer or farther from the screen
    intersectionPoint.z = -2;
    // Update the cube's position to match the intersection point
    cube.position.copy(intersectionPoint);
}

// Add event listener for mouse movement
document.addEventListener('mousemove', moveObj, false);







var lightSize = 7;
// 5: Add lighting to the scene
var light = new THREE.PointLight(0xFFFFF,lightSize,700);
light.position.set(15,15,0);
scene.add(light);
// create ambient light
var ambientLight = new THREE.AmbientLight(0xFFFFFF, 3.5);
scene.add(ambientLight);




// orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = true;
controls.autoRotate = false;

// responsive window size
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});



// FINAL: Render the scene
function animate(){
    requestAnimationFrame(animate);


    cake.rotation.y += 0.005;
    cakes.rotation.y += 0.005;
   





    controls.update();

    renderer.render(scene,camera);
}

animate();