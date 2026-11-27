export const id = 680;
export const ids = [680];
export const modules = {
  64008: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      passPixelShader: () => Ke
    });
    var ye = He(40954);
    const be = "passPixelShader",
      Me = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    ye.d.ShadersStore[be] || (ye.d.ShadersStore[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);