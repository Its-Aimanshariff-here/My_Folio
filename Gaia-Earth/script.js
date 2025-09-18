const divcont = document.querySelector('#hide');
let isclicked = true;  

let showOrhide = function(){
    if(isclicked){
        divcont.style.display = 'block';
        divcont.style.color =  'beige';
         
        gsap.from(" #hide",{
            y:-25,
            duration:1,
            delay:0,
            opacity:0,
            stagger:1,
        
            
        })
        isclicked = false;
       
    }
    else{
        divcont.style.display = 'none';
        isclicked = true;
    }
    
};

const divcont2 = document.querySelector('#hide2');
let isclicked2 = true;  

let showOrhide2 = function(){
    if(isclicked2){
        divcont2.style.display = 'block';
        divcont2.style.color =  'beige';
            
        gsap.from(" #hide2",{
            y:-25,
            duration:1,
            delay:0,
            opacity:0,
            stagger:1,
        
            
        })
        isclicked2 = false;
       
    }
    else{
        divcont2.style.display = 'none';
        isclicked2 = true;
    }
    
};

const divcont3 = document.querySelector('#hide3');
let isclicked3 = true;  

let showOrhide3 = function(){
    if(isclicked3){
        divcont3.style.display = 'block';
        divcont3.style.color =  'beige';
            
        gsap.from(" #hide3",{
            y:-25,
            duration:1,
            delay:0,
            opacity:0,
            stagger:1,
        
            
        })
        isclicked3 = false;
       
    }
    else{
        divcont3.style.display = 'none';
        isclicked3 = true;
    }
    
};

const divcont4 = document.querySelector('#hide4');
let isclicked4 = true;  

let showOrhide4 = function(){
    if(isclicked4){
        divcont4.style.display = 'block';
        divcont4.style.color =  'beige';
            
        gsap.from(" #hide4",{
            y:-25,
            duration:1,
            delay:0,
            opacity:0,
            stagger:1,
        
            
        })
        isclicked4 = false;
       
    }
    else{
        divcont4.style.display = 'none';
        isclicked4 = true;
    }
    
};

const divcont5 = document.querySelector('#hide5');
let isclicked5 = true;  

let showOrhide5 = function(){
    if(isclicked5){
        divcont5.style.display = 'block';
        divcont5.style.color =  'beige';
            
        gsap.from(" #hide5",{
            y:-25,
            duration:1,
            delay:0,
            opacity:0,
            stagger:1,
        
            
        })
        isclicked5 = false;
       
    }
    else{
        divcont5.style.display = 'none';
        isclicked5 = true;
    }
    
};





gsap.from(".int , #name1 ,#name2",{
    y:50,
    duration:0.5,
    delay:0,
    opacity:0,
    stagger:1,
   
    
})


gsap.from(".projects  #project01",{
    x:-100,
    duration:0.3,
    delay:0,
    opacity:0,
    stagger:1,
    
    scrollTrigger:{
        trigger:"#project01",
        Scroller:'body',
        start:'top 65%',
        end:'top 20%',
        scrub:1,
       
        
       
    },
})
gsap.from(".projects  #project02",{
    x:100,
    duration:0.3,
    delay:0,
    opacity:0,
    
    scrollTrigger:{
        trigger:"#project02",
        Scroller:'body',
        start:'top 65%',
        end:'top 20%',
        scrub:1,
       
    },
})
gsap.from(".projects  #project03",{
    x:-100,
    duration:0.3,
    delay:0,
    opacity:0,
    
    scrollTrigger:{
        trigger:"#project03",
        Scroller:'body',
        start:'top 65%',
        end:'top 20%',
        scrub:1,
        
       
    },
})
gsap.from(".projects  #project04",{
    x:100,
    duration:0.3,
    delay:0,
    opacity:0,
    
    scrollTrigger:{
        trigger:"#project04",
        Scroller:'body',
        start:'top 65%',
        end:'top 20%',
        scrub:1,
       
    },
})
gsap.from(".projects  #project05",{
    x:-100,
    duration:0.3,
    delay:0,
    opacity:0,
    
    scrollTrigger:{
        trigger:"#project05",
        Scroller:'body',
       
        start:'top 65%',
        end:'top 20%',
        scrub:1,
        
       
    },
})


// gsap.to( ".abt-txt  h1",{
//     transform:"translateX(-470%)",
     
//     scrollTrigger:{
//         trigger:".abt-txt",
//         scroller:"body",
//         start:"top 20%",
//         end:"top 10%",
       
      
//         scrub:2,
//         pin:true,
       
//         markers:true,
//     }
// })

gsap.to( ".line  .words",{
    color:"#fff",
    stagger:1,
    duration:5,
 scrollTrigger:{
        trigger:".line .words",
       
        start:"top 40%",
        end:"top 10%",
        scrub:1,
      
    }
})

function showsidebar(){
    const  sidebar  =  document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
}

function hidesidebar(){
    const  sidebar  =  document.querySelector('.sidebar');
    sidebar.style.display = 'none'
}