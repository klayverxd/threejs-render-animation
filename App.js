import React, { Suspense } from 'react'

import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei/native'

import ModelYBot from './ModelYBot'

export default function App() {
	return (
		<>
			<Canvas
				gl={{ physicallyCorrectLights: true }}
				camera={{ position: [-6, 0, 16], fov: 36 }}
			>
				<color attach="background" args={[0xd9e6ff]} />
				<ambientLight />
				<directionalLight intensity={1.1} position={[0, 0, 1]} />
				<directionalLight intensity={0.8} position={[-6, 2, 2]} />
				<Suspense>
					<Environment preset="park" />
					<ModelYBot />
				</Suspense>
			</Canvas>
		</>
	)
}
