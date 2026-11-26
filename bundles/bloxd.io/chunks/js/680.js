export const id = 680;
export const ids = [680];
export const modules = {
  64051: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      passPixelShader: () => oB
    });
    var YB = GB(40864);
    const DB = "passPixelShader",
      QB = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    YB.b.ShadersStore[DB] || (YB.b.ShadersStore[DB] = QB);
    const oB = {
      name: DB,
      shader: QB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);