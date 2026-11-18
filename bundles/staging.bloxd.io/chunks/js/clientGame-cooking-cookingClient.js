export const id = 15;
export const ids = [15];
export const modules = {
  38372: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => UJ
    });
    const FJ = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      UJ = function(JJ, cJ, ZJ) {
        let UJ;
        return {
          onCreate: JJ => {
            UJ = JJ
          },
          onPlayerAltAction: (JJ, cJ, ZJ, eJ, XJ, AJ) => {
            FJ.some((JJ => JJ[0] === cJ && JJ[2] === eJ)) && UJ.openShop(JJ, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);