/* The math.js file should create and export functions for addition, subtraction, multiplication and division. */

const sum = (a, b) => {
    return a + b
}

const subtract = (c, d) => {
    return c - d
}

const multiply = (e, f) => {
    return e * f
}

const divide = (g, h) => {
    return g / h
}

module.exports = {
    sum,
    subtract,
    multiply,
    divide
}; //Object literals for exporting multiple items