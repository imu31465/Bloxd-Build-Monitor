export const id = 364;
export const ids = [364];
export const modules = {
  61212: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      passPixelShader: () => Xk
    });
    var Rk = Bk(39270);
    const tk = "passPixelShader",
      ak = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    Rk.d.ShadersStore[tk] || (Rk.d.ShadersStore[tk] = ak);
    const Xk = {
      name: tk,
      shader: ak
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);