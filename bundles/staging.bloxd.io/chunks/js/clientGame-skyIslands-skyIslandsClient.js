export const id = 24;
export const ids = [24];
export const modules = {
  39744: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => Op
    });
    const Op = function() {
      let pp;
      return {
        onCreate: ip => {
          pp = ip
        },
        onPlayerAltAction: (ip, cp, Op, op, Ip, Sp) => {
          if (!Sp || "Mesh" !== pp.getEntityType(Sp)) return;
          const xp = pp.getEntityName(Sp);
          "Perks" === xp ? pp.openShop(ip, !1, "Perks") : "Returning Bonus" === xp && pp.openShop(ip, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);