export const id = 27;
export const ids = [27];
export const modules = {
  40872: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => yR
    });
    const yR = function(RR, JR, GR) {
      let yR;
      return {
        onCreate: RR => {
          yR = RR
        },
        onPlayerAltAction: (RR, JR, GR, tR, uR, ZR) => {
          null !== ZR && "Mesh" === yR.getEntityType(ZR) && "Weaponmaster" === yR.getEntityName(ZR) && yR.openShop(RR, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);