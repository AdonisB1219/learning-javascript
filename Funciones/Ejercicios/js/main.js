function feeCalculator(a){
    total = (a + 3) * 1.01;
    return total;
}

let names = function (a, b, c){
    return "Welcome " + a + ", " + b + ", " + c + ".";
}

function getAge(birth){
    let year = new Date()
    year = year.getFullYear();
    age = year - birth;
    return age;
}

let namesAges = function (a, year1, b, year2, c, year3){
    let age1 = getAge(year1);
    let age2 = getAge(year2);
    let age3 = getAge(year3);
    let message = "Welcome " + a + ". You're " + age1 + ". Welcome " + b + ". You're " + age2 + ". Welcome " + c + ". You're " + age3 + "."
    return message;
}

function grading(a){
    if (a >= 5){
        console.log(true);
        if (a == 11){
            return "Perfect";
        }
        else if (a >= 8){
            return "Excelent";
        }
    }

    else{
        return false;
    }
    
    

    
}
