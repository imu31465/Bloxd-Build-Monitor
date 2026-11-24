export const id = 20;
export const ids = [20];
export const modules = {
  39507: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => JB
    });
    var TB = ZB(24);
    const JB = function(BB, IB, ZB) {
      let JB;
      return {
        onCreate: BB => {
          JB = BB
        },
        onPlayerClick: (BB, IB, ZB, oB, GB, vB) => {
          IB || "Workbench" !== JB.getMetaInfo(vB).rootName || TB.l.Gq("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);