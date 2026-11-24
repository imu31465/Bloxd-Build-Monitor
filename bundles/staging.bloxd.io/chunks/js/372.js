export const id = 372;
export const ids = [372];
export const modules = {
  61513: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      passPixelShader: () => xS
    });
    var tS = gS(39899);
    const bS = "passPixelShader",
      XS = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    tS.c.ShadersStore[bS] || (tS.c.ShadersStore[bS] = XS);
    const xS = {
      name: bS,
      shader: XS
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);