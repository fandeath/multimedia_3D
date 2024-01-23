
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();

// let scene, camera, renderer;

function init() {
    
    // Створення сцени
    scene = new THREE.Scene();
    
    // Налаштування камери
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);

    // Налаштування рендерера
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Додавання освітлення
    const light = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light);
    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    scene.add(pointLight);

    // Завантаження моделі
    const loader = new THREE.GLTFLoader();
    loader.load('animations/Teddy.gltf', function(gltf) {
        scene.add(gltf.scene);
        animate();
    });
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

init();
