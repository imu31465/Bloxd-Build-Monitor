export const id = 680;
export const ids = [680];
export const modules = {
  64089: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      passPixelShader: () => aM
    });
    var OM = iM(40964);
    const SM = "passPixelShader",
      jM = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    OM.e.ShadersStore[SM] || (OM.e.ShadersStore[SM] = jM);
    const aM = {
      name: SM,
      shader: jM
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);