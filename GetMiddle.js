function getMiddle(inputString) {

            if ((inputString.length) % 2 == 0) {
                return inputString.charAt((inputString.length / 2) - 1) + inputString.charAt((inputString.length / 2))
            } else {
                return inputString.charAt(Math.floor(inputString.length / 2))
            }
        }