import { isValidAddress } from "ethereumjs-util";
import Creature from "../models/creature.model";
import crypto from "crypto";
import nefturiansService from "./nefturians.service";

const MAX_HERO_ID = 1240;
const CYBERIAN_THRESHOLD = 800;

class HeroService {
  async getHeroByAddress(address: string): Promise<Creature> {
    if (!isValidAddress(address)) {
      throw new Error("Invalid address");
    }

    let creature = await Creature.findOne({ where: { address } });

    if (!creature) {
      const hash = crypto.createHash("sha256");
      hash.update(address);
      const hashedAddress = hash.digest("hex");

      const heroId = parseInt(hashedAddress, 16) % MAX_HERO_ID;
      const side = this.determineSide(heroId);

      creature = await Creature.create({ address, heroId, side });
    }

    const nefturian = await nefturiansService.getNefturianById(creature.heroId);

    const hero: Creature = {
      ...creature.get(),
      side:
        nefturian && nefturian.attributes.length > 0
          ? this.determineSide(nefturian.attributes[0].value)
          : "Lone Wolf",
      nefturian,
    };

    return hero;
  }

  determineSide(heroId: number): string {
    return heroId < CYBERIAN_THRESHOLD ? "Cyberian" : "Samurian";
  }
}

export default new HeroService();
