//当前点击的某行
var clickNode;
function getClickNode(){
	return clickNode
}
//点击删除按钮事件
function deleteSpan(e){
	e.target.parentElement.style.display = "none";
}
//点击增加弹框事件
function addSpan(e){
	clickNode = e.target;
	var dialogBack = document.getElementsByClassName("dialogBack")[0],
	    pLeft = clickNode.offsetLeft,
	    pTop = clickNode.offsetTop;
	dialogBack.style.left = pLeft-20;
	dialogBack.style.top = pTop+50;
	dialogBack.style.display = 'block';
}
//关闭弹出框事件
function closeDialog(){
	var dialogBack = document.getElementsByClassName("dialogBack")[0];
	dialogBack.style.display = "none";
}

//弹框增加resource事件
function addResource(){
	var inputValue = document.getElementById("dialogBodyInput").value,
	    inputValueArr = [];
	if(inputValue){
		inputValueArr = inputValue.split(",");
		for(var i=0;i<inputValueArr.length;i++){
			var newNode = document.createElement("span");
			clickNode.parentElement.appendChild(newNode).innerHTML = 
			    inputValueArr[i]+"<span class='icon-trash' onclick='deleteSpan(event)' style='margin-left:10px;'></span>";
			closeDialog()
		}
	}else{

	}    
}
//切换功能
function changeStyle(e){
	var childNode = e.target.parentElement.childNodes
	for(var i=0;i<childNode.length;i++){
		if(childNode[i].className){
			if(childNode[i].className.indexOf("active") !== -1){
				childNode[i].className = childNode[i].className.split("active").join("")
			}
		}
	}
	e.target.className +=" " +"active"
}
//头像点击功能
function upOrDown(e){
    var className = e.target.className,
        dialogBack = document.getElementsByClassName("dialogBack_2")[0],
    	clickNode = e.target;
    if("icon-angle-up" == className){
    	e.target.className = "icon-angle-down"
		var pLeft = clickNode.offsetLeft,
	        pTop = clickNode.offsetTop;
		dialogBack.style.left = pLeft-120;
		dialogBack.style.top = pTop+40;
		dialogBack.style.display = 'block';
    }else{
    	e.target.className = "icon-angle-up"
    	dialogBack.style.display = "none"
    }
    

}
function isNum(num) {
    if (typeof num === 'number') {
        return true;
    } else {
        return false;
    }
}
var mainjs = {
	getClickNode,
	deleteSpan,
	addSpan,
	closeDialog,
	addResource,
	changeStyle,
	upOrDown,
	isNum
}
export default mainjs
