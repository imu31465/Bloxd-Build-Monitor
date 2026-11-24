export const id = 20;
export const ids = [20];
export const modules = {
  39393: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => sD
    });
    var pD = wD(25);
    const sD = function(DD, zD, wD) {
      let sD;
      return {
        onCreate: DD => {
          sD = DD
        },
        onPlayerClick: (DD, zD, wD, KD, rD, LD) => {
          zD || "Workbench" !== sD.getMetaInfo(LD).rootName || pD.l.KG("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);