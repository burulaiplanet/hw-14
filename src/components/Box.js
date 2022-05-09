import { useEffect, useRef } from 'react'
import styles from './Box.module.css'

function Box() {
	const boxRef = useRef(null)

	useEffect(() => {
		setInterval(() => {
			let boxGreen = (boxRef.current.className = styles.green)
			let boxRed= (boxRef.current.className = styles.red)
			boxRef.current.className = styles.green = boxRed
			boxRef.current.className = styles.red = boxGreen
		}, 1000)
	}, [])

	return (
		<div className={styles.box} >
	<div ref={boxRef} ></div>
	</div>
	)
}

export default Box
