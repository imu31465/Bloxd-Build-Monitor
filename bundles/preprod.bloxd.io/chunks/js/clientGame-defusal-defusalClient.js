export const id = 16;
export const ids = [16];
export const modules = {
  39617: (pp, ip, cp) => {
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
          Sp && "Mesh" === Op.getEntityType(Sp) && Op.openShop(pp, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);