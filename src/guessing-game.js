class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.mid = this.max - Math.floor((this.max - this.min)/2);
    }

    guess() {
        // console.log('Max:', this.max, ' Min: ', this.min, ' RETRURN GUESS CANDIDATE - ', this.mid);
        return this.mid;
    }

    lower() {
        this.setRange(this.min, this.mid);
    }

    greater() {
        this.setRange(this.mid, this.max);
    }
}

module.exports = GuessingGame;
