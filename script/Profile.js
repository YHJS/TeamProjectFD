function Slider(){
	var SliderPanel = document.getElementById ('ListMenuContainer');
	SliderPanel.style.height = '260px';
}
function HideSlide(){
	var SliderPanel = document.getElementById ('ListMenuContainer');
	SliderPanel.style.height = '167px';
}
//function darknessOn(){
//	var LightBlock = document.getElementById ('ProfileContainer');
//	LightBlock.style.boxShadow = '600px -500px 1px 1800px rgba(0,0,0,0.3)';
//}
function darknessOff(){
	var LightBlock = document.getElementById ('ProfileContainer');
	LightBlock.style.boxShadow = '';
}