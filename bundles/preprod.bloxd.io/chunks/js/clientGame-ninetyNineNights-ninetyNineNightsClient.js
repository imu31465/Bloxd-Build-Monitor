export const id = 24;
export const ids = [24];
export const modules = {
  40476: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => rH
    });
    var AH = LH(18);
    const rH = function(HH, BH, LH) {
      let rH;
      return {
        onCreate: HH => {
          rH = HH
        },
        onPlayerClick: (HH, BH, LH, SH, hH, tH) => {
          BH || "Workbench" !== rH.getMetaInfo(tH).rootName || AH.k.AX("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);