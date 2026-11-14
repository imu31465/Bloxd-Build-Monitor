export const id = 18;
export const ids = [18];
export const modules = {
  37284: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => CW
    });
    var wW = MW(33);
    const CW = function(WW, RW, MW) {
      let CW;
      return {
        onCreate: WW => {
          CW = WW
        },
        onPlayerClick: (WW, RW, MW, zR, AW, bR) => {
          RW || "Workbench" !== CW.getMetaInfo(bR).rootName || wW.k.Sz("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);