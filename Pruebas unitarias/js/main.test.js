const op = require("./main.js");



test ("Sumar dos números: 2+2=4", () => {expect(op.suma(2,2)).toBe(4)});
test ("Sumar dos números: 20+20=40", () => {expect(op.suma(20,20)).toBe(40)});
test ("Sumar dos números: 5+6=11", () => {expect(op.suma(5,6)).toBe(11)});
test ("Sumar dos números: 5+6=30", () => {expect(op.mult(5,6)).toBe(30)});