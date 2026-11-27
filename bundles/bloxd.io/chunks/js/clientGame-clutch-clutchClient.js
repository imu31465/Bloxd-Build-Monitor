export const id = 14;
export const ids = [14];
export const modules = {
  40567: (RR, JR, GR) => {
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
          ZR && "Mesh" === yR.getEntityType(ZR) && "Quartermaster" === yR.getEntityName(ZR) && yR.openShop(RR, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);