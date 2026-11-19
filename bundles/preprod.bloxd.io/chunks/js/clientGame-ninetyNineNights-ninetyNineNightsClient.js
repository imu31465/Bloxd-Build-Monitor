export const id = 20;
export const ids = [20];
export const modules = {
  38810: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => nz
    });
    var Ez = bz(22);
    const nz = function(zz, uz, bz) {
      let nz;
      return {
        onCreate: zz => {
          nz = zz
        },
        onPlayerClick: (zz, uz, bz, iz, lz, Mz) => {
          uz || "Workbench" !== nz.getMetaInfo(Mz).rootName || Ez.k.sK("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);