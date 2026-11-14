export const id = 349;
export const ids = [349];
export const modules = {
  59366: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      passPixelShader: () => uc
    });
    var Vc = nc(37923);
    const Ic = "passPixelShader",
      rB = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    Vc.b.ShadersStore[Ic] || (Vc.b.ShadersStore[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);