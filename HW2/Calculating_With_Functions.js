function zero(exp) {
    return numberExpression(0, exp);
}

function one(exp) {
    return numberExpression(1, exp);
}

function two(exp) {
    return numberExpression(2, exp);
}

function three(exp) {
    return numberExpression(3, exp);
}

function four(exp) {
    return numberExpression(4, exp);
}

function five(exp) {
    return numberExpression(5, exp);
}

function six(exp) {
    return numberExpression(6, exp);
}

function seven(exp) {
    return numberExpression(7, exp);
}

function eight(exp) {
    return numberExpression(8, exp);
}

function nine(exp) {
    return numberExpression(9, exp);
}

function numberExpression(num, exp) {
    return exp == undefined ? num : exp(num);
}

function plus(rightVal) {
    return function(leftVal) {
        return leftVal + rightVal;
    }
}

function minus(rightVal) {
    return function(leftVal) {
        return leftVal - rightVal;
    }
}

function times(rightVal) {
    return function(leftVal) {
        return leftVal * rightVal;
    }
}

function dividedBy(rightVal) {
    return function(leftVal) {
        return leftVal / rightVal;
    }
}
