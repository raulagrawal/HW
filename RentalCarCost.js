function rentalCarCost(numberOfDays) {
    var finalAmount = 0,
        actualAmount = numberOfDays * 40;

    if (numberOfDays >= 3 && numberOfDays < 7) {
        finalAmount = actualAmount - 20;
    } else if (numberOfDays >= 7) {
        finalAmount = actualAmount - 50;
    } else {
        finalAmount = actualAmount;
    }
    return finalAmount;
}
