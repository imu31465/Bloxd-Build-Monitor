export const id = 10;
export const ids = [10];
export const modules = {
  40542: (RR, JR, GR) => {
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
          ZR && "Mesh" === yR.getEntityType(ZR) && ("Permanent Upgrades" === yR.getEntityName(ZR) ? yR.openShop(RR, !1, "Upgrades") : "Items" === yR.getEntityName(ZR) ? yR.openShop(RR, !1, "Items") : "Prestige" === yR.getEntityName(ZR) && yR.openShop(RR, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);