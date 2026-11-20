export const id = 20;
export const ids = [20];
export const modules = {
  38798: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => Wz
    });
    var Fz = sz(34);
    const Wz = function(zz, tz, sz) {
      let Wz;
      return {
        onCreate: zz => {
          Wz = zz
        },
        onPlayerClick: (zz, tz, sz, Xz, Oz, oz) => {
          tz || "Workbench" !== Wz.getMetaInfo(oz).rootName || Fz.o.Yg("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);