function chicharronera(a, b, c, signo){
    let x;
    switch (signo){
        case "positivo":
            x = (-b + Math.sqrt(b**2 - 4 * a * c)) / 2 * a;
            return x;
        case "negativo":
            x = (-b - Math.sqrt(b**2 - 4 * a* c)) / 2 * a;
            return x;
    }
}