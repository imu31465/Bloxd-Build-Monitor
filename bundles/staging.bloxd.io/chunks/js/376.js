export const id = 376;
export const ids = [376];
export const modules = {
  61482: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      passPixelShader: () => GB
    });
    var TB = ZB(39905);
    const JB = "passPixelShader",
      oB = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    TB.c.ShadersStore[JB] || (TB.c.ShadersStore[JB] = oB);
    const GB = {
      name: JB,
      shader: oB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);