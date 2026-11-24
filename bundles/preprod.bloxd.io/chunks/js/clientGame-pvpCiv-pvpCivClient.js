export const id = 23;
export const ids = [23];
export const modules = {
  39735: (pp, ip, cp) => {
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
          null !== Sp && "Mesh" === Op.getEntityType(Sp) && "Weaponmaster" === Op.getEntityName(Sp) && Op.openShop(pp, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);