import { Fighter } from "./Fighter.js";

export class Sagat extends Fighter {

    constructor() {
        const name = "Sagat";
        const numAttackAnims = 6;
        const numHurtAnims = 3;

        const attackAnims = [];
        const hurtAnims = [];

        for (let i = 1; i <= numAttackAnims; i++) {
            attackAnims.push(`/2132-project/images/${name.toLowerCase()}/${name.toLowerCase()}-fight${i}.png`);
        }
        for (let i = 1; i <= numHurtAnims; i++) {
            hurtAnims.push(`/2132-project/images/${name.toLowerCase()}/${name.toLowerCase()}-hurt${i}.png`);
        }

        super({
            attack: attackAnims,
            hurt: hurtAnims,
            idle: `/2132-project/images/${name.toLowerCase()}/${name.toLowerCase()}-idle.gif`,
            defeat: `/2132-project/images/${name.toLowerCase()}/${name.toLowerCase()}-defeat.png`,
            victory: `/2132-project/images/${name.toLowerCase()}/${name.toLowerCase()}-victory.gif`,
        });
    }
}