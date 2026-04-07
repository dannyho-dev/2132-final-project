export class Fighter {
    #name;
    #attackAnim;
    #hurtAnim;
    #idleAnim;
    #defeatAnim;
    #victoryAnim;
    #numAttackAnims;
    #numHurtAnims;

    #lastAttackIndex = -1;
    #lastHurtIndex = -1;

    constructor({ attack, hurt, idle, defeat, victory}) {
        this.#setAttackAnim(attack);
        this.#setHurtAnim(hurt);
        this.#setIdleAnim(idle);
        this.#setDefeatAnim(defeat);
        this.#setVictoryAnim(victory);
    }

    // Getters

    getName() {
        return this.#name;
    }

    getAttackAnim() {
        return this.#attackAnim;
    }

    getIdleAnim() {
        return this.#idleAnim;
    }

    getHurtAnim() {
        return this.#hurtAnim;
    }

    getDefeatAnim() {
        return this.#defeatAnim;
    }

    getVictoryAnim() {
        return this.#victoryAnim;
    }

    getNumAttackAnims() {
        return this.#numAttackAnims;
    }

    getNumHurtAnims() {
        return this.#numHurtAnims;
    }

    // Setters
    #setName(name) {
        this.#name = name;
    }

    #setIdleAnim(idle) {
        this.#idleAnim = idle;
    }

    #setAttackAnim(attack) {
        this.#attackAnim = attack;
    }

    #setHurtAnim(hurt) {
        this.#hurtAnim = hurt;
    }

    #setVictoryAnim(victory) {
        this.#victoryAnim = victory;
    }

    #setDefeatAnim(defeat) {
        this.#defeatAnim = defeat;
    }

    #setNumAttackAnims(numAttackAnims) {
        this.#numAttackAnims = numAttackAnims;
    }

    #setNumHurtAnims(numHurtAnims) {
        this.#numHurtAnims = numHurtAnims;
    }

    getRandomAttackAnim() {
        if (this.#attackAnim.length === 1) {
            return this.#attackAnim[0];
        }

        let index;
        do {
            index = Math.floor(Math.random() * this.#attackAnim.length);
        } while (index === this.#lastAttackIndex);

        this.#lastAttackIndex = index;
        return this.#attackAnim[index];
    }

    getRandomHurtAnim() {
        if (this.#hurtAnim.length === 1) {
            return this.#hurtAnim[0];
        }

        let index;
        do {
            index = Math.floor(Math.random() * this.#hurtAnim.length);
        } while (index === this.#lastHurtIndex);

        this.#lastHurtIndex = index;
        return this.#hurtAnim[index];
    }
}