export const id = 20;
export const ids = [20];
export const modules = {
  38407: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => UJ
    });
    var FJ = ZJ(17);
    const UJ = function(JJ, cJ, ZJ) {
      let UJ;
      return {
        onCreate: JJ => {
          UJ = JJ
        },
        onPlayerClick: (JJ, cJ, ZJ, eJ, XJ, AJ) => {
          cJ || "Workbench" !== UJ.getMetaInfo(AJ).rootName || FJ.i.Uf("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);