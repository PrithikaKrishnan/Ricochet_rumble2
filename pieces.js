 function blueTank(current_position){
    return{
        current_position,
        img:"./ricochet/tank_blue.jpg",
        piece_name:'Blue_tank',
    }
 }
 function redTank(current_position){
    return{
        current_position,
        img:"./ricochet/tank_red.jpg",
        piece_name:'Red_tank',
    }
}
function blueRicochet(current_position){
    return{
        current_position,
        img:"./ricochet/blue_Ricochet.jpg",
        piece_name:'Blue_ricochet',
    }
}
function redRicochet(current_position){
    return{
        current_position,
        img:"./ricochet/red_Ricochet.jpg",
        piece_name:'Red_ricochet',
    }
}
function redSemi(current_position){
    return{
        current_position,
        img:"./ricochet/red_semiRicochet.jpg",
        piece_name:'Blue_semiRicochet',
    }
}
function blueSemi(current_position){
    return{
        current_position,
        img:"./ricochet/blue_semiRicochet.jpg",
        piece_name:'Red_semiRicochet',
    }
}
function blueCanon(current_position){
    return{
        current_position,
        img:"./ricochet/blue_canon.jpg",
        piece_name:'Blue_canon',
    }
}
function redCanon(current_position){
    return{
        current_position,
        img:"./ricochet/red_canon.jpg",
        piece_name:'Red_cannon',
    }
}
 export{blueTank};
 export{redTank};
 export{redRicochet};
 export{blueRicochet};
 export{redSemi};
 export{blueSemi};
 export{blueCanon};
 export{redCanon};