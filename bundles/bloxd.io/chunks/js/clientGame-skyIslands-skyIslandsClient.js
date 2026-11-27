export const id = 30;
export const ids = [30];
export const modules = {
  40891: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => yR
    });
    const yR = function() {
      let RR;
      return {
        onCreate: JR => {
          RR = JR
        },
        onPlayerAltAction: (JR, GR, yR, tR, uR, ZR) => {
          if (!ZR || "Mesh" !== RR.getEntityType(ZR)) return;
          const qR = RR.getEntityName(ZR);
          "Perks" === qR ? RR.openShop(JR, !1, "Perks") : "Returning Bonus" === qR && RR.openShop(JR, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);