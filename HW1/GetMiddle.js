    function getMiddle(inputString) {
        var stringLength = inputString.length,
            outputString;

        if ((inputString.length) % 2 == 0) {
            outputString = inputString.substr((stringLength / 2 - 1), 2)
        } else {
            outputString = inputString.substr(stringLength / 2, 1)
        }
        return outputString;
    }
