class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.solution = Math.ceil(this.min + (this.max - this.min) / 2);
        return this.solution;
    }

    lower() {
        this.max = this.solution
    }

    greater() {
        this.min = this.solution
    }
}

module.exports = GuessingGame;
