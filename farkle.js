function changeDie(dieNum, dieFace) {
    const dieSelector = "." + dieNum;
    const die = document.querySelector(dieSelector);
    

    const upperLeftDot = document.querySelector(dieSelector + " .top .left");
    const upperRightDot = document.querySelector(dieSelector + " .top .right");
    
    const middleLeftDot = document.querySelector(dieSelector + " .middle .left");
    const middleCenterDot = document.querySelector(dieSelector + " .middle .center");
    const middleRightDot = document.querySelector(dieSelector + " .middle .right");

    const lowerLeftDot = document.querySelector(dieSelector + " .bottom .left");
    const lowerRightDot = document.querySelector(dieSelector + " .bottom .right");

    switch(dieFace) {
        case 1:
            die.style.visibility = "visible";

            upperLeftDot.style.visibility = "hidden";
            upperRightDot.style.visibility = "hidden";

            middleLeftDot.style.visibility = "hidden";
            middleCenterDot.style.visibility = "visible";
            middleRightDot.style.visibility = "hidden";

            lowerLeftDot.style.visibility = "hidden";
            lowerRightDot.style.visibility = "hidden";

            break;
        case 2:
            die.style.visibility = "visible";

            upperLeftDot.style.visibility = "hidden";
            upperRightDot.style.visibility = "visible";

            middleLeftDot.style.visibility = "hidden";
            middleCenterDot.style.visibility = "hidden";
            middleRightDot.style.visibility = "hidden";

            lowerLeftDot.style.visibility = "visible";
            lowerRightDot.style.visibility = "hidden";

            break;
        case 3:
            die.style.visibility = "visible";

            upperLeftDot.style.visibility = "visible";
            upperRightDot.style.visibility = "hidden";

            middleLeftDot.style.visibility = "hidden";
            middleCenterDot.style.visibility = "visible";
            middleRightDot.style.visibility = "hidden";

            lowerLeftDot.style.visibility = "hidden";
            lowerRightDot.style.visibility = "visible";
            break;
        case 4:
            die.style.visibility = "visible";

            upperLeftDot.style.visibility = "visible";
            upperRightDot.style.visibility = "visible";

            middleLeftDot.style.visibility = "hidden";
            middleCenterDot.style.visibility = "hidden";
            middleRightDot.style.visibility = "hidden";

            lowerLeftDot.style.visibility = "visible";
            lowerRightDot.style.visibility = "visible";
            break;
        case 5:
            die.style.visibility = "visible";

            upperLeftDot.style.visibility = "visible";
            upperRightDot.style.visibility = "visible";

            middleLeftDot.style.visibility = "hidden";
            middleCenterDot.style.visibility = "visible";
            middleRightDot.style.visibility = "hidden";

            lowerLeftDot.style.visibility = "visible";
            lowerRightDot.style.visibility = "visible";
            break;
        case 6:
            die.style.visibility = "visible";

            upperLeftDot.style.visibility = "visible";
            upperRightDot.style.visibility = "visible";

            middleLeftDot.style.visibility = "visible";
            middleCenterDot.style.visibility = "hidden";
            middleRightDot.style.visibility = "visible";

            lowerLeftDot.style.visibility = "visible";
            lowerRightDot.style.visibility = "visible";
            break;
        default:
            die.style.visibility = "hidden";
    }
}
