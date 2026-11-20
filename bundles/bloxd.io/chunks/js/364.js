export const id = 364;
export const ids = [364];
export const modules = {
  60880: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      passPixelShader: () => Tb
    });
    var kb = sb(39267);
    const Wb = "passPixelShader",
      ab = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    kb.d.ShadersStore[Wb] || (kb.d.ShadersStore[Wb] = ab);
    const Tb = {
      name: Wb,
      shader: ab
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);