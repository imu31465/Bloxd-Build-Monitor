export const id = 20;
export const ids = [20];
export const modules = {
  38754: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => AY
    });
    var FY = DY(25);
    const AY = function(YY, rY, DY) {
      let AY;
      return {
        onCreate: YY => {
          AY = YY
        },
        onPlayerClick: (YY, rY, DY, IY, RY, OY) => {
          rY || "Workbench" !== AY.getMetaInfo(OY).rootName || FY.g.vo("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);