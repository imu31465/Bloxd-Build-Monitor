export const id = 20;
export const ids = [20];
export const modules = {
  38752: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => pD
    });
    var ID = cD(20);
    const pD = function(DD, CD, cD) {
      let pD;
      return {
        onCreate: DD => {
          pD = DD
        },
        onPlayerClick: (DD, CD, cD, iD, fD, bD) => {
          CD || "Workbench" !== pD.getMetaInfo(bD).rootName || ID.i.Uo("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);