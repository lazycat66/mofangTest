export let toast = msg => {
	let div = document.createElement('div');
	let text = document.createTextNode(msg);
	div.appendChild(text);
	div.setAttribute('class', 'mf-toast');
	document.body.appendChild(div);
	setTimeout(() => {
		document.body.removeChild(div);
	}, 2000)
}