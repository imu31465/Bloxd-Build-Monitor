export const id = 679;
export const ids = [679];
export const modules = {
  64293: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      passPixelShaderWGSL: () => hH
    });
    var AH = LH(41138);
    const rH = "passPixelShader",
      SH = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    AH.c.ShadersStoreWGSL[rH] || (AH.c.ShadersStoreWGSL[rH] = SH);
    const hH = {
      name: rH,
      shader: SH
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);