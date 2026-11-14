export const id = 125;
export const ids = [125];
export const modules = {
  5626: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic,
      e: () => rB
    });
    var Vc = nc(51);
    const Ic = "shaderPack";
    async function rB() {
      var cB;
      let Bc = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (cB = await Vc.d.getItem(Ic, Bc)) && void 0 !== cB ? cB : null
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);