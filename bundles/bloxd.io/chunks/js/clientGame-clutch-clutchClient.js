export const id = 13;
export const ids = [13];
export const modules = {
  39256: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => pD
    });
    const pD = function(DD, zD, wD) {
      let pD;
      return {
        onCreate: DD => {
          pD = DD
        },
        onPlayerAltAction: (DD, zD, wD, sD, KD, rD) => {
          rD && "Mesh" === pD.getEntityType(rD) && "Quartermaster" === pD.getEntityName(rD) && pD.openShop(DD, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);