let scene, camera, renderer, cube; // let for global value & const for local value decleration


function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);
    scene.background = new THREE.Color(0x9efff5 );


    //Adding texture in cube shape
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    //const material = new THREE.MeshBasicMaterial({ color: 0xab35f0 });
    const textures = new THREE.TextureLoader().load('texture/myimg.jpg');
    const material = new THREE.MeshBasicMaterial({ map: textures });

    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
}

//Animate bt frame
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.z += 0.01;
    renderer.render(scene, camera);
}

//Resize window
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false); //Resize the window call

init();
animate();
