export const id = 376;
export const ids = [376];
export const modules = {
  62011: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      passPixelShader: () => yG
    });
    var wG = ZG(40237);
    const SG = "passPixelShader",
      LG = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    wG.e.ShadersStore[SG] || (wG.e.ShadersStore[SG] = LG);
    const yG = {
      name: SG,
      shader: LG
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);