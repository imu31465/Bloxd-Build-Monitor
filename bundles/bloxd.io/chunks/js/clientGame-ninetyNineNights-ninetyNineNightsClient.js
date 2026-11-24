export const id = 20;
export const ids = [20];
export const modules = {
  39471: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => bS
    });
    var tS = gS(31);
    const bS = function(SS, HS, gS) {
      let bS;
      return {
        onCreate: SS => {
          bS = SS
        },
        onPlayerClick: (SS, HS, gS, XS, xS, NS) => {
          HS || "Workbench" !== bS.getMetaInfo(NS).rootName || tS.k.cj("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);