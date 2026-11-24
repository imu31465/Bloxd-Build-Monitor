export const id = 20;
export const ids = [20];
export const modules = {
  39574: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => zT
    });
    var WT = mT(31);
    const zT = function(TT, UT, mT) {
      let zT;
      return {
        onCreate: TT => {
          zT = TT
        },
        onPlayerClick: (TT, UT, mT, MT, gT, nT) => {
          UT || "Workbench" !== zT.getMetaInfo(nT).rootName || WT.j.EZ("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);