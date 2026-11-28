export const id = 690;
export const ids = [690];
export const modules = {
  64946: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      passPixelShader: () => Xd
    });
    var Wd = md(41785);
    const Fd = "passPixelShader",
      Rd = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    Wd.e.ShadersStore[Fd] || (Wd.e.ShadersStore[Fd] = Rd);
    const Xd = {
      name: Fd,
      shader: Rd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);