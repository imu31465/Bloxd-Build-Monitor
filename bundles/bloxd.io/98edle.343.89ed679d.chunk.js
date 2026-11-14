export const id = 343;
export const ids = [343];
export const modules = {
  58866: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      passPixelShaderWGSL: () => AW
    });
    var wW = MW(37441);
    const CW = "passPixelShader",
      zR = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    wW.c.ShadersStoreWGSL[CW] || (wW.c.ShadersStoreWGSL[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);