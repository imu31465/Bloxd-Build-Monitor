export const id = 16;
export const ids = [16];
export const modules = {
  40701: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => tR
    });
    const yR = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      tR = function(RR, JR, GR) {
        let tR;
        return {
          onCreate: RR => {
            tR = RR
          },
          onPlayerAltAction: (RR, JR, GR, uR, ZR, qR) => {
            yR.some((RR => RR[0] === JR && RR[2] === uR)) && tR.openShop(RR, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);