import{ROOTdiv} from "./helper.js";
import{globalState} from "./index.js";
import { renderHighlight } from "./render.js";
function whitePawnClick({piece}){
    const current_pos=piece.current_position;
    const flatArray=globalState.flat()
    if (current_pos=="b7"){
        const highlightSquare = [
            `${current_pos[0]}${Number(current_pos[1])-1}`,
            `${current_pos[0]}${Number(current_pos[1])-2}`,

        ];
        highlightSquare.forEach((highlight)=> {
            globalState.forEach((row)=>{
                row.forEach((element)=>{
                    if (element.id==highlight){
                        element.highlight=true;
                    }
                })
            renderHighlight(highlight);
            })
            //const el=flatArray.find((element)=>element.id==highlight);
            //el.highlight=true;
        });

    }

}
    

function GlobalEvent(){
    ROOTdiv.addEventListener("click",function(event){
        if(event.target.localName=='img'){
            const clickId=event.target.parentNode.id;
            const flatArray=globalState.flat();
            const square=flatArray.find((eL)=> eL.id==clickId);
            if (square.piece.piece_name=="Blue_tank"){
                whitePawnClick(square);
            }

        }
    });

  console.log(globalState)  
}  
export{GlobalEvent};