 function shanghai(object) {
            document.getElementById("shanghai").style.display = "block";
            document.getElementById("suzhou").style.display = "none";
            document.getElementById("hangzhou").style.display = "none";
            document.getElementById("hangzhoubutton").classList.remove("active");
            document.getElementById("suzhoubutton").classList.remove("active");
        if(object.classList[2] !== "active"){
            
            object.classList.add('active');
        }
            
            
        
            
}

 function hangzhou(object) {
            document.getElementById("shanghai").style.display = "none";
            document.getElementById("suzhou").style.display = "none";
            document.getElementById("shanghaibutton").classList.remove('active');
            document.getElementById("suzhoubutton").classList.remove('active');
            document.getElementById("hangzhou").style.display = "block";
            object.classList.add("active");
     
     
}

 function suzhou(object) {
            document.getElementById("shanghai").style.display = "none";
            document.getElementById("suzhou").style.display = "block";
            document.getElementById("hangzhou").style.display = "none";
            document.getElementById("shanghaibutton").classList.remove('active');
            document.getElementById("hangzhoubutton").classList.remove('active');
            object.classList.add("active");
}
