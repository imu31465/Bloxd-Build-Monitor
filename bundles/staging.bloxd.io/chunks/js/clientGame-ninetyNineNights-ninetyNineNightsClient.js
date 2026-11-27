export const id = 24;
export const ids = [24];
export const modules = {
  40340: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => be
    });
    var ye = He(27);
    const be = function(ee, ie, He) {
      let be;
      return {
        onCreate: ee => {
          be = ee
        },
        onPlayerClick: (ee, ie, He, Me, Ke, Ue) => {
          ie || "Workbench" !== be.getMetaInfo(Ue).rootName || ye.h.yR("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);