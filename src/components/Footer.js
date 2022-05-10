import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	const handleBlur = ()=> {
		if(!inputValue.includes('@')){
			alert("L'email saisi ne contient pas de @");
			// for remove current content
			setInputValue('');
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :
			<input type={"email"} value={inputValue} onBlur={handleBlur} onChange={(e)=>setInputValue(e.target.value)} placeholder="Entrez vôtre email"/>
			<button>S'abonner</button>
			</div>
		</footer>
	)
}

export default Footer