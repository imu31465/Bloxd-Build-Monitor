export const id = 14;
export const ids = [14];
export const modules = {
  37616: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => CF
    });
    const CF = function(FF, WF, SF) {
      let CF;
      return {
        onCreate: FF => {
          CF = FF
        },
        onPlayerAltAction: (FF, WF, SF, AF, uF, hF) => {
          hF && "Mesh" === CF.getEntityType(hF) && CF.openShop(FF, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);