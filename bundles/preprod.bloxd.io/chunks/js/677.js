export const id = 677;
export const ids = [677];
export const modules = {
  64115: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      passPixelShader: () => AU
    });
    var cU = zU(40961);
    const yU = "passPixelShader",
      QU = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
    const AU = {
      name: yU,
      shader: QU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);