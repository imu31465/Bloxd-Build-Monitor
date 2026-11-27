export const id = 24;
export const ids = [24];
export const modules = {
  40777: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => tR
    });
    var yR = GR(32);
    const tR = function(RR, JR, GR) {
      let tR;
      return {
        onCreate: RR => {
          tR = RR
        },
        onPlayerClick: (RR, JR, GR, uR, ZR, qR) => {
          JR || "Workbench" !== tR.getMetaInfo(qR).rootName || yR.n.JK("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);