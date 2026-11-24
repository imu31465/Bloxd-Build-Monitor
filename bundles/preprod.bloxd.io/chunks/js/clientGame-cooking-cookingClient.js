export const id = 15;
export const ids = [15];
export const modules = {
  39608: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => op
    });
    const Op = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      op = function(pp, ip, cp) {
        let op;
        return {
          onCreate: pp => {
            op = pp
          },
          onPlayerAltAction: (pp, ip, cp, Ip, Sp, xp) => {
            Op.some((pp => pp[0] === ip && pp[2] === Ip)) && op.openShop(pp, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);