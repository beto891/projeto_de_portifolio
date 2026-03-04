import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap';

export function initModelScene(canvasContainer, modelPath) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const clock = new THREE.Clock();

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    canvasContainer.appendChild(renderer.domElement);

    const light = new THREE.AmbientLight(0xffffff, 1.3); 
    scene.add(light);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 8; // Um pouco mais longe para o FOV de 20

    let model;
    let mixer;

    // 1. Mapeamento de posições (sua ideia)
    const arrPosition = [
        { id: 'home', position: { x: -1.9, y: -1, z: 0 }, rotation: { x: 0.2, y: 0.5, z: 0 } },
        { id: 'sobre', position: { x: 2.5, y: -1, z: 0 }, rotation: { x: 0.2, y: 0.9, z: 0.2 } },
        { id: 'projetos', position: { x: -2.5, y: -1, z: 0 }, rotation: { x: 0.2, y: 0.5, z: 0 } },
        { id: 'skills', position: { x: 1.9, y: -1, z: 0 }, rotation: { x: 0.5, y: 0.5, z: 0 } },
        { id: 'contato', position: { x: 1.9, y: -1, z: 0 }, rotation: { x: 0.2, y: -0.5, z: 0 }}
    ];

    // 2. Função que move o modelo com GSAP
    const modelMove = () => {
        const sections = document.querySelectorAll('section');
        let currentSectionId = 'home';

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            // Verifica se a seção está visível (no terço superior da tela)
            if (rect.top <= window.innerHeight / 3) {
                currentSectionId = section.id;
            }
        });

        const targetPos = arrPosition.find(p => p.id === currentSectionId);

        if (model && targetPos) {
            // Animação suave de posição
            gsap.to(model.position, {
                x: targetPos.position.x,
                y: targetPos.position.y,
                z: targetPos.position.z,
                duration: 1.5,
                ease: "power2.out"
            });
            // Animação suave de rotação
            gsap.to(model.rotation, {
                x: targetPos.rotation.x,
                y: targetPos.rotation.y,
                z: targetPos.rotation.z,
                duration: 1.5,
                ease: "power2.out"
            });
        }
    };

    window.addEventListener('scroll', modelMove);

    const loader = new GLTFLoader();
    loader.load(modelPath, (gltf) => {
        model = gltf.scene;
        scene.add(model);

        // Inicializa na posição da primeira seção
        const initial = arrPosition[0].position;
        model.position.set(initial.x, initial.y, initial.z);

        if (gltf.animations.length > 0) {
            mixer = new THREE.AnimationMixer(model);
            mixer.clipAction(gltf.animations[0]).play();
        }
    });

    const animate = () => {
        const animationId = requestAnimationFrame(animate);
        const delta = clock.getDelta();
        if (mixer) mixer.update(delta);
        renderer.render(scene, camera);
        return animationId;
    };

    const animationId = animate();

    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return {
        destroy: () => {
            window.removeEventListener('scroll', modelMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            renderer.dispose();
        }
    };
}