async function autoTicTacToe() {
    // console.log("hello world")
    var boxes= ["box-1-sym", "box-2-sym", "box-3-sym", "box-4-sym", "box-5-sym", "box-6-sym", "box-7-sym", "box-8-sym", "box-9-sym"];
    let x = "X";
    let o = "O";
    
    for (let i = 0; i < 9; i++) {
        var box = boxes[Math.floor(Math.random()*boxes.length)];
        var removeBoxes = boxes.indexOf(box);
        if (removeBoxes !== -1) {
            boxes.splice(removeBoxes, 1);
        }
        console.log(boxes);
        console.log(box);
        await this.timeout(Math.random() * 100 + 1500);
        if (i % 2 == 0) {
            // console.log("Even");
            document.getElementById(box).innerHTML = `${x}`;
            document.getElementById(box).style.color = "#333";
        } else {
            // console.log("Odd");
            document.getElementById(box).innerHTML = `${o}`;
        }
    }
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function reload() {
    window.location.reload();
}
