export const id = 20;
export const ids = [20];
export const modules = {
  39642: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => op
    });
    var Op = cp(34);
    const op = function(pp, ip, cp) {
      let op;
      return {
        onCreate: pp => {
          op = pp
        },
        onPlayerClick: (pp, ip, cp, Ip, Sp, xp) => {
          ip || "Workbench" !== op.getMetaInfo(xp).rootName || Op.m.GA("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);