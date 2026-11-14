export const id = 12;
export const ids = [12];
export const modules = {
  37254: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => wW
    });
    const wW = function(WW, RW, MW) {
      let wW;
      return {
        onCreate: WW => {
          wW = WW
        },
        onPlayerAltAction: (WW, RW, MW, CW, zR, AW) => {
          AW && "Mesh" === wW.getEntityType(AW) && "Quartermaster" === wW.getEntityName(AW) && wW.openShop(WW, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);