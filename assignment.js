//https://github.com/iffatunnessa/assignment3
function kilometerToMeter(distanceInKilometer){
    if(!isNaN(distanceInKilometer) || Number.isInteger(distanceInKilometer)){
        if(distanceInKilometer < 0){
            var error ="Distance cannot be negative!";
            return error;
        }
        var distanceInMeter = distanceInKilometer * 1000;
        return distanceInMeter;
    }
    else{
        var error = "The distance is not given properly!";
        return error;
    }
}

function budgetCalculator(numberOfWatches, numberOfMobiles, numberOfLaptops){
    if(!isNaN(numberOfWatches) && !isNaN(numberOfMobiles) && !isNaN(numberOfLaptops)){
        if(Number.isInteger(numberOfWatches, numberOfMobiles, numberOfLaptops)){
            if(numberOfWatches < 0 || numberOfMobiles < 0 || numberOfLaptops < 0){
                var error = "Counts cannot be negative." 
                return error;
            }
            let totalAmount = numberOfWatches * 50 + numberOfMobiles * 100 + numberOfLaptops * 500;
            return totalAmount;
        }
    }
    else if(Number.isInteger(numberOfWatches, numberOfMobiles, numberOfLaptops)){
        var error = "Number of the products cannot be a floating point number!";
        return error;
    }
    else{
        var error = "Numbers of the products are not provided properly!";
        return error;
    }
}

function hotelCost(numberOfDays){
    var totalCost, remainingDays = 0;
    if(numberOfDays >= 1){
        if(numberOfDays <= 10){
            totalCost = 100* numberOfDays; 
            return totalCost;
        }
        else if(numberOfDays > 10 && numberOfDays <= 20){
            totalCost = 10 * 100;
            remainingDays = numberOfDays - 10;
            totalCost = totalCost + remainingDays * 80;
            return totalCost;
        }
        else{
            totalCost = 10 * 100 + 10 * 80;
            remainingDays = numberOfDays - 20;
            totalCost = totalCost + remainingDays * 50;
            return totalCost;
        }
    }
    else if(Number.isInteger(numberOfDays)){
        var error = "Days cannot be a floating point number!";
        return error;
    }
    else if(numberOfDays < 0){
        var error = "Days cannot be negative!";
        return error;
    }
    else if(isNaN(numberOfDays)){
        var error = "Invalid input of days!";
        return error;
    }
    else{
        var error = "No cost has been applied!";
        return error;
    }
}

function megaFriend(nameOfFriends){
    var [name1,name2] = [nameOfFriends[0],""];
    if(!isNaN(nameOfFriends)){
        return "String is empty!";
    }
    if (/[^a-zA-Z]/.test(name1)){
        return "Other characters have been found";
    }
    for(var i = 1; i < nameOfFriends.length; i++){
        name2 = nameOfFriends[i];
        if(name2[0] == name2[0].toLowerCase()){
            return "Name should be started with a capital letter.";
        }
        if (/[^a-zA-Z]/.test(name2)){
            return "Other characters have been found";
        }
        if(name1.length < name2.length){
            name1 = name2;
        }
    }
    return name1;
}