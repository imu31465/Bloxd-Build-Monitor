export const id = 18;
export const ids = [18];
export const modules = {
  37640: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => AF
    });
    var CF = SF(20);
    const AF = function(FF, WF, SF) {
      let AF;
      return {
        onCreate: FF => {
          AF = FF
        },
        onPlayerClick: (FF, WF, SF, uF, hF, bW) => {
          WF || "Workbench" !== AF.getMetaInfo(bW).rootName || CF.j.Uu("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);