export const id = 354;
export const ids = [354];
export const modules = {
  59703: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      passPixelShader: () => XJ
    });
    var FJ = ZJ(38658);
    const UJ = "passPixelShader",
      eJ = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    FJ.b.ShadersStore[UJ] || (FJ.b.ShadersStore[UJ] = eJ);
    const XJ = {
      name: UJ,
      shader: eJ
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);