export const id = 27;
export const ids = [27];
export const modules = {
  40655: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => OM
    });
    const OM = function(MM, rM, iM) {
      let OM;
      return {
        onCreate: MM => {
          OM = MM
        },
        onPlayerAltAction: (MM, rM, iM, SM, jM, aM) => {
          null !== aM && "Mesh" === OM.getEntityType(aM) && "Weaponmaster" === OM.getEntityName(aM) && OM.openShop(MM, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);