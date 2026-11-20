export const id = 24;
export const ids = [24];
export const modules = {
  39150: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => Bb
    });
    const Bb = function() {
      let bb;
      return {
        onCreate: ub => {
          bb = ub
        },
        onPlayerAltAction: (ub, hb, Bb, Ob, Gb, Ub) => {
          if (!Ub || "Mesh" !== bb.getEntityType(Ub)) return;
          const Lb = bb.getEntityName(Ub);
          "Perks" === Lb ? bb.openShop(ub, !1, "Perks") : "Returning Bonus" === Lb && bb.openShop(ub, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);