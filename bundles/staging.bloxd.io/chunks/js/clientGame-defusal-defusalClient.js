export const id = 16;
export const ids = [16];
export const modules = {
  38726: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => ID
    });
    const ID = function(DD, CD, cD) {
      let ID;
      return {
        onCreate: DD => {
          ID = DD
        },
        onPlayerAltAction: (DD, CD, cD, pD, iD, fD) => {
          fD && "Mesh" === ID.getEntityType(fD) && ID.openShop(DD, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);