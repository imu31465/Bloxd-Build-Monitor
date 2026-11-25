export const id = 376;
export const ids = [376];
export const modules = {
  61682: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      passPixelShader: () => Xu
    });
    var su = ju(40127);
    const Uu = "passPixelShader",
      Zu = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    su.b.ShadersStore[Uu] || (su.b.ShadersStore[Uu] = Zu);
    const Xu = {
      name: Uu,
      shader: Zu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);