import { Fighter } from "./Fighter.js";

export class Ryu extends Fighter {
    
    constructor() {
        const name = "Ryu";
        const numAttackAnims = 6;
        const numHurtAnims = 3;

        const attackAnims = [];
        const hurtAnims = [];

        for (let i = 1; i <= numAttackAnims; i++) {
            attackAnims.push(`./images/${name.toLowerCase()}/${name.toLowerCase()}-fight${i}.png`);
        }
        for (let i = 1; i <= numHurtAnims; i++) {
            hurtAnims.push(`./images/${name.toLowerCase()}/${name.toLowerCase()}-hurt${i}.png`);
        }

        super({
            attack: attackAnims,
            hurt: hurtAnims,
            idle: `./images/${name.toLowerCase()}/${name.toLowerCase()}-idle.gif`,
            defeat: `./images/${name.toLowerCase()}/${name.toLowerCase()}-defeat.png`,
            victory: `./images/${name.toLowerCase()}/${name.toLowerCase()}-victory.gif`,
        });
    }
}