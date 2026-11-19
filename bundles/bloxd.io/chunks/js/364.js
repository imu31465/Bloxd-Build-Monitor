export const id = 364;
export const ids = [364];
export const modules = {
  60673: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      passPixelShader: () => fD
    });
    var ID = cD(39003);
    const pD = "passPixelShader",
      iD = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    ID.e.ShadersStore[pD] || (ID.e.ShadersStore[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);