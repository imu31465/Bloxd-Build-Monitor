export const id = 365;
export const ids = [365];
export const modules = {
  61182: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      passPixelShader: () => Pd
    });
    var pd = kd(39829);
    const Nd = "passPixelShader",
      Wd = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    pd.c.ShadersStore[Nd] || (pd.c.ShadersStore[Nd] = Wd);
    const Pd = {
      name: Nd,
      shader: Wd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);