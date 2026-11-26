export const id = 24;
export const ids = [24];
export const modules = {
  40232: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => DB
    });
    var YB = GB(25);
    const DB = function(BB, OB, GB) {
      let DB;
      return {
        onCreate: BB => {
          DB = BB
        },
        onPlayerClick: (BB, OB, GB, QB, oB, jB) => {
          OB || "Workbench" !== DB.getMetaInfo(jB).rootName || YB.o.tM("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);