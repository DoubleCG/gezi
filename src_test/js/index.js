
console.log('loading index');
let doc = document;
let ic = doc.querySelectorAll('.icon-content');
let iconBtn = doc.querySelectorAll('icon-btn');


let indexIconContent = {
	q:ic[0],
	c:ic[1],
	a:ic[2],
	o:ic[3]
}

function hideAll(){
	for(let i of ic){
		i.style.display = 'none';
	}
}
function show(arg){
	console.log(arg);
	hideAll();
	indexIconContent[arg].style.display = 'block';
}

(function initialIconShow(){
	doc.querySelector('.icon-content').style.display = 'block';
})();

