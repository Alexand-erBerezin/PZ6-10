let roadMines = [false, false, false, false, true, false, false, false, true, false];
let position = roadMines.indexOf();
let healthPoints = 2;

for ( let mine of roadMines ) {
    console.log( `Танк переместился на ${++position + 1}` );
    if (mine == true) {
        --healthPoints;
        if(healthPoints > 0) console.log( 'Танк повреждён' );
        else {
         console.log( 'Танк уничтожен' );
         break;
        };
    }
}
if(healthPoints > 0 ) console.log( 'Танк выжил' );