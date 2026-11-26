export const id = 27;
export const ids = [27];
export const modules = {
  40816: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => JV
    });
    const JV = function(VV, eV, xV) {
      let JV;
      return {
        onCreate: VV => {
          JV = VV
        },
        onPlayerAltAction: (VV, eV, xV, YV, UV, yV) => {
          null !== yV && "Mesh" === JV.getEntityType(yV) && "Weaponmaster" === JV.getEntityName(yV) && JV.openShop(VV, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);