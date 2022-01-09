
  var queue = [];
  var visited = [];
  var x;
  var r = 9;
  var c = 3;
  
  var pathArray = {
    "row":[
  [0,0,1,0,1,0,1,0],

  [0,0,0,1,0,0,0,1],

  [1,0,1,0,0,0,1,0],

  [0,1,0,1,0,1,0,1],

  [1,0,1,0,1,0,0,0],

  [0,1,0,1,0,1,0,0],

  [1,0,1,0,1,0,0,0],

  [0,1,0,1,0,0,0,1],

  [1,0,1,0,1,0,1,0],

  [0,1,0,1,0,1,0,1],
    ]
    
}

pathFinder();



function pathFinder(){
 
     queue.push(r+","+c);
    
     while(queue.length>0){
    
     if((r-1)<=9&&(c-1)<=7  &&pathArray.row[r-1][c-1]===1){
       if(( (r-1)+","+(c-1))in visited){

       }
      else{
        queue.push((r-1)+","+(c-1));
         //left top diag
        console.log("left diag")
        console.log("r"+r,"c"+c)
      }
    
      
     };
     
     if((r-1)<=9&&(c+1)<=7  && pathArray.row[r-1][c+1]===1){
       //right diag
       console.log("right diag")
       if(((r-1)+","+(c+1)) in visited){

       }
      else{
        queue.push((r-1)+","+(c+1));
      }
       console.log("r"+r,"c"+c);
       
      
      // console.log(queue)
      
    }

    console.log("r"+r,"c"+c)
   
    if((r+1)<=9 && (c-1)<=7  && pathArray.row[r+1][c-1]===1){
      //bottom left diag
      //console.log("bottom left diag")
      if(((r+1)+","+(c-1))in visited){

      }

      else{queue.push((r+1)+","+(c-1))};
      //console.log("r"+r,"c"+c)
     
     
     // console.log("hi")
}
    
    
    if((r+1)<=9&&(c+1)<=7  && pathArray.row[r+1][c+1]===1){
      //bottom right diag
      //console.log("bottom right diag")
      if(((r+1)+","+(c+1))in visited){

      }
      else{
        queue.push((r+1)+","+(c+1))
      }; 
      console.log("r"+r,"c"+c)
  
      
    }
  
  
 
  

  
  
   
  
    var n = queue.shift()
    if(queue.length>0){
      r = queue[0].split(",")[0];
      
      c = queue[0].split(",")[1];
    }
    //before shift
    // console.log("before shift")
    // console.log(queue[0])
    // console.log(queue[1])
    // console.log(queue[2])
    // console.log(queue[3])
    // console.log(queue[4])
    //queue.shift()
    
   //console.log(n);
//after shift
    
    console.log("queue      "   );
    console.log(queue);
    console.log("visited    " );
    console.log(visited);
    // console.log("after shift")
    // console.log(queue[0])
    // console.log(queue[1])
    // console.log(queue[2])
    // console.log(queue[3])
    // console.log(queue[4])
  // console.log("r,c");
  //   console.log(r,c);
   

    if  (n in visited){
     
   }
    else{
      visited.push(n);
    }
    console.log("visited") 
    console.log(visited.length);
   
   
    //var m =0;
    //r = queue[m+1];
   
  }
  
  
  
     
   // console.log(vnode)
 
    

 
  
  
    }

    
  
