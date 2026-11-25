export const id = 376;
export const ids = [376];
export const modules = {
  61688: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      passPixelShader: () => mt
    });
    var Ot = Vt(40061);
    const qt = "passPixelShader",
      Dt = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    Ot.b.ShadersStore[qt] || (Ot.b.ShadersStore[qt] = Dt);
    const mt = {
      name: qt,
      shader: Dt
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);