function displaytime(){
    let date=new Date();
    
    let hour=document.getElementById('hr')
    let min=document.getElementById('min')
    let second=document.getElementById('sec')
    let ampm=document.getElementById('am/pm')
    if(hour>12){
        hour=hour-12;
        ampm.innerHTML='PM'
    }
    hour.innerHTML=addzero(date.getHours())
    min.innerHTML=addzero(date.getMinutes())
    second.innerHTML=addzero(date.getSeconds())
   
}
function addzero(num){
    return num<10?'0'+num:num;
        
}
setInterval(displaytime,500)







