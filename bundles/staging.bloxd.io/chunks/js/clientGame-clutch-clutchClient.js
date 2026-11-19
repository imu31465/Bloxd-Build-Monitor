export const id = 13;
export const ids = [13];
export const modules = {
  38592: (DD, CD, cD) => {
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
          fD && "Mesh" === ID.getEntityType(fD) && "Quartermaster" === ID.getEntityName(fD) && ID.openShop(DD, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);