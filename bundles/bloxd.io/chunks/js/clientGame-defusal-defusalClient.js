export const id = 17;
export const ids = [17];
export const modules = {
  40705: (RR, JR, GR) => {
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
          ZR && "Mesh" === yR.getEntityType(ZR) && yR.openShop(RR, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);