export const id = 344;
export const ids = [344];
export const modules = {
  59192: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      passPixelShader: () => hF
    });
    var CF = SF(37824);
    const AF = "passPixelShader",
      uF = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    CF.c.ShadersStore[AF] || (CF.c.ShadersStore[AF] = uF);
    const hF = {
      name: AF,
      shader: uF
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);