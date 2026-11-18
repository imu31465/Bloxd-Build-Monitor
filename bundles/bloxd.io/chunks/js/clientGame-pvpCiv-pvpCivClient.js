export const id = 23;
export const ids = [23];
export const modules = {
  38490: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => FJ
    });
    const FJ = function(JJ, cJ, ZJ) {
      let FJ;
      return {
        onCreate: JJ => {
          FJ = JJ
        },
        onPlayerAltAction: (JJ, cJ, ZJ, UJ, eJ, XJ) => {
          null !== XJ && "Mesh" === FJ.getEntityType(XJ) && "Weaponmaster" === FJ.getEntityName(XJ) && FJ.openShop(JJ, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);