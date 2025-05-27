let startbtn=document.getElementById('start')
let stopbtn=document.getElementById('stop')
let resetbtn=document.getElementById('reset')

let hr=0
let min=0
let sec=0
let milli=0
let timer=false;

startbtn.addEventListener('click',()=>{
    
    timer=true
    time()
 
    
})
function time(){
    if(timer){
    
        milli++;
      
      if(milli>99){
         milli=0;
         sec++;
      }
      if(sec==60){
        sec=0
        
        min++
      }
      if(min==60){
        min=0
        sec=0
        hr++
      }
      
        

      document.getElementById('hr').innerHTML=addzero(hr)
      document.getElementById('min').innerHTML=addzero(min)
      document.getElementById('sec').innerHTML=addzero(sec)
      document.getElementById('milli').innerHTML=addzero(milli)

      setTimeout(time,10);
    }
}
stopbtn.addEventListener('click',()=>{
    timer=false
})
resetbtn.addEventListener('click',()=>{
    timer=false
    hr=0
    min=0
    sec=0
    milli=0
    document.getElementById('hr').innerHTML="00"
    document.getElementById('min').innerHTML="00"
    document.getElementById('sec').innerHTML="00"
    document.getElementById('milli').innerHTML="00"
})
function addzero(num){
    return num<10?'0'+num:num;
        
}