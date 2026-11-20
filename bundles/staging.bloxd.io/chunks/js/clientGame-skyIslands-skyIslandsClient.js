export const id = 24;
export const ids = [24];
export const modules = {
  38777: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => Ab
    });
    const Ab = function() {
      let bb;
      return {
        onCreate: ab => {
          bb = ab
        },
        onPlayerAltAction: (ab, Ub, Ab, Mb, Tb, Eb) => {
          if (!Eb || "Mesh" !== bb.getEntityType(Eb)) return;
          const Yb = bb.getEntityName(Eb);
          "Perks" === Yb ? bb.openShop(ab, !1, "Perks") : "Returning Bonus" === Yb && bb.openShop(ab, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);