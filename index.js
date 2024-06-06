import{ initGame } from "./java.js";
import{initGamerender} from "./render.js";
const globalState=initGame();
initGamerender(globalState);
export{globalState};
import{piecerender} from "./render.js";
import{GlobalEvent} from "./global.js";
GlobalEvent();