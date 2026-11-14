export const id = 122;
export const ids = [122];
export const modules = {
  5661: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW,
      h: () => zR
    });
    var wW = MW(50);
    const CW = "shaderPack";
    async function zR() {
      var WW;
      let RW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (WW = await wW.e.getItem(CW, RW)) && void 0 !== WW ? WW : null
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);