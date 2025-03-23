function calculateX(x, a, b) {
    let result = -1;
    let errorCode = 0;
    if (x < 8) {
        result = Math.abs(a * x + b);
    } else {
        if (x === 8) {
            let sqrtArgument = (b * x) + 3;

            if (sqrtArgument < 0) {
                errorCode = 1;
            } else {
                result = 5 * Math.sqrt(sqrtArgument);
            }
        } else {
            if (x > 8 && x <= 10) {
                result = Math.cos(x);
            } else {
                errorCode = 2;
            }
        }
    }

    switch (errorCode) {
        case 1:
            console.log("Error: Square root argument must be non-negative!");
            break;
        case 2:
            console.log("X is out of range!");
            break;
        default:
            console.log("Calculation successful!");
            break;
    }

    return result;
};

console.log(calculateX(4, 5, 0));