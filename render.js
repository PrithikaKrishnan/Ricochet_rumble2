import {blueTank,redTank,redRicochet,blueRicochet,redSemi,blueSemi,blueCanon,redCanon} from "./pieces.js";

const ROOT_DIV=document.getElementById("root");
//used to render pieces on board
function piecerender(data){
    
    
    
    data.forEach((row)=>{
        row.forEach((square)=>{
            const piece=document.createElement("img");
            
            //if square has piece
            if (square.piece){
                piece.src=square.piece.img;
                piece.classList.add("pieces");
                const squareEl=document.getElementById(square.id);
                
                squareEl.appendChild(piece);
                
                
                //insert piece into the square
                
                
            
            
            }
        }) 
    }

    )
}
//used to render board initially
function initGamerender(data){
    data.forEach((element)=>{
        const rowE1=document.createElement("div");
        
        element.forEach((square)=>{
            const squareDiv=document.createElement("div")
            squareDiv.classList.add(square.color,"square");
            squareDiv.id=square.id;
            
            
            if(square.id=='b7'){
                square.piece=blueTank(square.id);
            }if (square.id=='b2'){
                square.piece=redTank(square.id);
            }if (square.id=='d7'){
                square.piece=blueRicochet(square.id);
            }
            if (square.id=='d2'){
                square.piece=redRicochet(square.id);
            }
            if (square.id=='c7'){
                square.piece=blueSemi(square.id);
            }
            if (square.id=='c2'){
                square.piece=redSemi(square.id);
            }
            if (square.id=='e7'){
                square.piece=blueCanon(square.id);
            }
            if (square.id=='a2'){
                square.piece=redCanon(square.id);
            }
            
            rowE1.appendChild(squareDiv);
        });
        
        rowE1.classList.add("squareRow");
        ROOT_DIV.appendChild(rowE1);
       
       

        
    });

    piecerender(data);
    }
function renderHighlight(squareId){
    console.log(squareId);
    const highlightSpan=document.createElement('span');
    highlightSpan.classList.add("highlight");
    document.getElementById(squareId).appendChild(highlightSpan);

}

export{initGamerender,renderHighlight};
export {piecerender};


