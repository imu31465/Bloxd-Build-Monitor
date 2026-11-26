export const id = 16;
export const ids = [16];
export const modules = {
  40147: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => DB
    });
    const YB = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      DB = function(BB, OB, GB) {
        let DB;
        return {
          onCreate: BB => {
            DB = BB
          },
          onPlayerAltAction: (BB, OB, GB, QB, oB, jB) => {
            YB.some((BB => BB[0] === OB && BB[2] === QB)) && DB.openShop(BB, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);