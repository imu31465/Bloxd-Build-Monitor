export const id = 13;
export const ids = [13];
export const modules = {
  39472: (pp, ip, cp) => {
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
          Sp && "Mesh" === Op.getEntityType(Sp) && "Quartermaster" === Op.getEntityName(Sp) && Op.openShop(pp, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);