export const id = 365;
export const ids = [365];
export const modules = {
  60869: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      passPixelShader: () => gv
    });
    var hv = Pv(39162);
    const Sv = "passPixelShader",
      ev = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    hv.d.ShadersStore[Sv] || (hv.d.ShadersStore[Sv] = ev);
    const gv = {
      name: Sv,
      shader: ev
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);