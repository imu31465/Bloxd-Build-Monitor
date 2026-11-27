export const id = 24;
export const ids = [24];
export const modules = {
  40788: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => EW
    });
    var mW = OW(27);
    const EW = function(WW, iW, OW) {
      let EW;
      return {
        onCreate: WW => {
          EW = WW
        },
        onPlayerClick: (WW, iW, OW, NW, PW, LW) => {
          iW || "Workbench" !== EW.getMetaInfo(LW).rootName || mW.l.iZ("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);