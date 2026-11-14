export const id = 13;
export const ids = [13];
export const modules = {
  37608: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => AF
    });
    const CF = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      AF = function(FF, WF, SF) {
        let AF;
        return {
          onCreate: FF => {
            AF = FF
          },
          onPlayerAltAction: (FF, WF, SF, uF, hF, bW) => {
            CF.some((FF => FF[0] === WF && FF[2] === uF)) && AF.openShop(FF, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);