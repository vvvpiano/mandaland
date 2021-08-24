import React from "react"
import * as THREE from "three"

class Three extends React.Component {
    componentDidMount() {
        let camera, scene, renderer
        let plane
        let pointer,
            raycaster,
            isShiftDown = false
        let rollOverMesh, rollOverMaterial
        let cubeGeo, cubeMaterial
        const objects = []

        init()
        renderThree()

        function init() {
            camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000)
            camera.position.set(500, 800, 1300)
            camera.lookAt(0, 0, 0)

            scene = new THREE.Scene()
            scene.background = new THREE.Color(0x5ace95)

            // roll-over helpers => 마우스 올리면 빨간색으로 가이드라인 보여줌

            const rollOverGeo = new THREE.BoxGeometry(25, 25, 25)
            rollOverMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, opacity: 0.5, transparent: true })
            rollOverMesh = new THREE.Mesh(rollOverGeo, rollOverMaterial)
            scene.add(rollOverMesh)

            // cubes

            cubeGeo = new THREE.BoxGeometry(25, 25, 25)

            // 이 부분 코드를 바꾸면 큐브 색 바뀜
            cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xfeb74c, map: new THREE.TextureLoader().load(`${window.location.origin}/images/heart.png`) })

            // grid
            //(1000, 20) 한 변의 길이가 1000일 때 20칸으로 나눔(한 칸당 50의 길이를 갖게 됨)
            const gridHelper = new THREE.GridHelper(2000, 80)
            scene.add(gridHelper)

            //

            raycaster = new THREE.Raycaster()
            pointer = new THREE.Vector2()

            const geometry = new THREE.PlaneGeometry(2000, 2000)
            geometry.rotateX(-Math.PI / 2)

            plane = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0xfeb74c, map: new THREE.TextureLoader().load(`${window.location.origin}/images/cat1.png`) }))
            scene.add(plane)

            objects.push(plane)

            // lights

            const ambientLight = new THREE.AmbientLight(0x606060)
            scene.add(ambientLight)

            const directionalLight = new THREE.DirectionalLight(0xffffff)
            directionalLight.position.set(1, 0.75, 0.5).normalize()
            scene.add(directionalLight)

            renderer = new THREE.WebGLRenderer({ antialias: true })
            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize(window.innerWidth, window.innerHeight)
            document.body.appendChild(renderer.domElement)

            document.addEventListener("pointermove", onPointerMove)
            document.addEventListener("pointerdown", onPointerDown)
            document.addEventListener("keydown", onDocumentKeyDown)
            document.addEventListener("keyup", onDocumentKeyUp)

            //

            window.addEventListener("resize", onWindowResize)
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()

            renderer.setSize(window.innerWidth, window.innerHeight)
        }

        function onPointerMove(event) {
            pointer.set((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1)

            raycaster.setFromCamera(pointer, camera)

            const intersects = raycaster.intersectObjects(objects)

            if (intersects.length > 0) {
                const intersect = intersects[0]

                rollOverMesh.position.copy(intersect.point).add(intersect.face.normal)
                rollOverMesh.position.divideScalar(25).floor().multiplyScalar(25).addScalar(12.5)
            }

            renderThree()
        }

        function onPointerDown(event) {
            pointer.set((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1)

            raycaster.setFromCamera(pointer, camera)

            const intersects = raycaster.intersectObjects(objects)

            if (intersects.length > 0) {
                const intersect = intersects[0]

                // delete cube
                if (isShiftDown) {
                    if (intersect.object !== plane) {
                        scene.remove(intersect.object)
                        objects.splice(objects.indexOf(intersect.object), 1)
                    }
                    // create cube
                } else {
                    const voxel = new THREE.Mesh(cubeGeo, cubeMaterial)
                    voxel.position.copy(intersect.point).add(intersect.face.normal)
                    voxel.position.divideScalar(25).floor().multiplyScalar(25).addScalar(12.5)
                    scene.add(voxel)

                    objects.push(voxel)
                }
                renderThree()
            }
        }

        function onDocumentKeyDown(event) {
            switch (event.keyCode) {
                case 16:
                    isShiftDown = true
                    break
                default:
                    break
            }
        }

        function onDocumentKeyUp(event) {
            switch (event.keyCode) {
                case 16:
                    isShiftDown = false
                    break
                default:
                    break
            }
        }

        function renderThree() {
            renderer.render(scene, camera)
        }
        console.log(scene)
    }

    render() {
        return (
            <div
                ref={(ref) => {
                    this.mount = ref
                }}
            />
        )
    }
}

export default Three
