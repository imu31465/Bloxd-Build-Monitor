export const id = 16;
export const ids = [16];
export const modules = {
  40640: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => YV
    });
    const JV = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      YV = function(VV, eV, xV) {
        let YV;
        return {
          onCreate: VV => {
            YV = VV
          },
          onPlayerAltAction: (VV, eV, xV, UV, yV, pV) => {
            JV.some((VV => VV[0] === eV && VV[2] === UV)) && YV.openShop(VV, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);