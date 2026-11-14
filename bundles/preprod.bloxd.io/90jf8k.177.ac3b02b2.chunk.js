export const id = 177;
export const ids = [177];
export const modules = {
  38458: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      textureAnimationData: () => CF.t,
      textureNameToIndex: () => CF.v
    });
    var CF = SF(8242)
  },
  8331: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF,
      i: () => uF
    });
    var CF = SF(8286);
    const AF = "Air",
      uF = Object.freeze(new CF.d(AF, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);