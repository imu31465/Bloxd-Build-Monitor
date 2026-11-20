export const id = 364;
export const ids = [364];
export const modules = {
  60573: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      passPixelShader: () => Eb
    });
    var Ab = Ub(38943);
    const Mb = "passPixelShader",
      Tb = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    Ab.d.ShadersStore[Mb] || (Ab.d.ShadersStore[Mb] = Tb);
    const Eb = {
      name: Mb,
      shader: Tb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);