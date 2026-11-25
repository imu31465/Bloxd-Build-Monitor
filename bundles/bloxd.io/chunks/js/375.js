export const id = 375;
export const ids = [375];
export const modules = {
  62004: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      passPixelShaderWGSL: () => yG
    });
    var wG = ZG(40237);
    const SG = "passPixelShader",
      LG = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    wG.e.ShadersStoreWGSL[SG] || (wG.e.ShadersStoreWGSL[SG] = LG);
    const yG = {
      name: SG,
      shader: LG
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);