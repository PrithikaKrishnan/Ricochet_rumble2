function Greet(){
    alert("Hello");
}
export function Square(color,id,piece){
    return{color,id,piece};

};
function Squarerow(rowId){
    const squarerow=[];
    const abcd=["a","b","c","d","e","f","g","h"];
    if(rowId %2==0){
        abcd.forEach((element,index)=> {
            if (index % 2==0){
                squarerow.push(Square("white",element+rowId,null));

            } else{
                squarerow.push(Square("black",element+rowId,null));

            }
        });
        
        
    }else{
        abcd.forEach((element,index) => {
            if (index%2==0){
                squarerow.push(Square("black",element+rowId,null));

            }else{
                squarerow.push(Square("white",element+rowId,null));
            }
            }); 


        }
        

        
      
    return squarerow;
}

export function initGame(){
    return[ Squarerow(8), 
            Squarerow(7), 
            Squarerow(6), 
            Squarerow(5), 
            Squarerow(4), 
            Squarerow(3), 
            Squarerow(2), 
            Squarerow(1)]
};