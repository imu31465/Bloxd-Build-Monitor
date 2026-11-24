export const id = 10;
export const ids = [10];
export const modules = {
  39460: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => Op
    });
    const Op = function(pp, ip, cp) {
      let Op;
      return {
        onCreate: pp => {
          Op = pp
        },
        onPlayerAltAction: (pp, ip, cp, op, Ip, Sp) => {
          Sp && "Mesh" === Op.getEntityType(Sp) && ("Permanent Upgrades" === Op.getEntityName(Sp) ? Op.openShop(pp, !1, "Upgrades") : "Items" === Op.getEntityName(Sp) ? Op.openShop(pp, !1, "Items") : "Prestige" === Op.getEntityName(Sp) && Op.openShop(pp, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);