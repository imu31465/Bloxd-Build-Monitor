export const id = 24;
export const ids = [24];
export const modules = {
  39105: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => Dk
    });
    const Dk = function() {
      let kk;
      return {
        onCreate: ek => {
          kk = ek
        },
        onPlayerAltAction: (ek, ik, Dk, fk, Sk, bk) => {
          if (!bk || "Mesh" !== kk.getEntityType(bk)) return;
          const rk = kk.getEntityName(bk);
          "Perks" === rk ? kk.openShop(ek, !1, "Perks") : "Returning Bonus" === rk && kk.openShop(ek, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);