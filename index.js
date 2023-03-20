// Code your solution in this file!
function distanceFromHqInBlocks(location){
    return location - 42
}

function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(startBlock, destinationBlock){
    if((destinationBlock - startBlock) * 264 > destinationBlock){
        return (destinationBlock - startBlock) * 264
    }
    return (destinationBlock - startBlock) * 264
}

function calculatesFarePrice(start, destination){
    distance = (destination - start) * 264
    if(distance<=400){
        return 0
    }
    else if(distance>400 && distance<=2000){
        return (distanceFeet - 400)* 0.02
    }
    else if(distance>2000 && distance<=2500){
        return 25
    }
    else{
        return 'cannot travel that far'
    }
}