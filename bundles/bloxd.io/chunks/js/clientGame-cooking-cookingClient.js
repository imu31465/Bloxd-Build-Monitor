export const id = 16;
export const ids = [16];
export const modules = {
  40502: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => SM
    });
    const OM = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      SM = function(MM, rM, iM) {
        let SM;
        return {
          onCreate: MM => {
            SM = MM
          },
          onPlayerAltAction: (MM, rM, iM, jM, aM, PM) => {
            OM.some((MM => MM[0] === rM && MM[2] === jM)) && SM.openShop(MM, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);