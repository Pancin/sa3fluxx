'use strict';

module.exports = class Player {
    constructor(name, game) {
        this.name = name;
        this.hand = [];
        this.keepers = [];
        this.creepers = []; //aaw man!
    }
};