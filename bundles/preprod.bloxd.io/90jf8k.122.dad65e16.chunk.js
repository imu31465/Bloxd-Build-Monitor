export const id = 122;
export const ids = [122];
export const modules = {
  5630: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF,
      f: () => uF
    });
    var CF = SF(33);
    const AF = "shaderPack";
    async function uF() {
      var FF;
      let WF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (FF = await CF.f.getItem(AF, WF)) && void 0 !== FF ? FF : null
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);