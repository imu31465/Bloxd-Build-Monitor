export const id = 365;
export const ids = [365];
export const modules = {
  60896: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      passPixelShader: () => Ub
    });
    var Bb = hb(39308);
    const Ob = "passPixelShader",
      Gb = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    Bb.e.ShadersStore[Ob] || (Bb.e.ShadersStore[Ob] = Gb);
    const Ub = {
      name: Ob,
      shader: Gb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);