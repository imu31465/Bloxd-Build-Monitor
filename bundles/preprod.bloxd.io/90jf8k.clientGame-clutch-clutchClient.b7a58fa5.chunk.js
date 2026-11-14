export const id = 12;
export const ids = [12];
export const modules = {
  37601: (FF, WF, SF) => {
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
          hF && "Mesh" === CF.getEntityType(hF) && "Quartermaster" === CF.getEntityName(hF) && CF.openShop(FF, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);