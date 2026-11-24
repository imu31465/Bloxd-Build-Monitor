export const id = 24;
export const ids = [24];
export const modules = {
  39543: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => Xk
    });
    const Xk = function() {
      let kk;
      return {
        onCreate: Fk => {
          kk = Fk
        },
        onPlayerAltAction: (Fk, Ik, Xk, Tk, ik, yk) => {
          if (!yk || "Mesh" !== kk.getEntityType(yk)) return;
          const lk = kk.getEntityName(yk);
          "Perks" === lk ? kk.openShop(Fk, !1, "Perks") : "Returning Bonus" === lk && kk.openShop(Fk, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);