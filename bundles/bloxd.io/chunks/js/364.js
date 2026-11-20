export const id = 364;
export const ids = [364];
export const modules = {
  61323: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      passPixelShader: () => mu
    });
    var Eu = yu(39403);
    const Ku = "passPixelShader",
      Qu = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    Eu.e.ShadersStore[Ku] || (Eu.e.ShadersStore[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);