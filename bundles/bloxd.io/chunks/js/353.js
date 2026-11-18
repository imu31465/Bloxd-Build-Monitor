export const id = 353;
export const ids = [353];
export const modules = {
  60006: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      passPixelShaderWGSL: () => lB
    });
    var VB = dB(38595);
    const yB = "passPixelShader",
      pB = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    VB.e.ShadersStoreWGSL[yB] || (VB.e.ShadersStoreWGSL[yB] = pB);
    const lB = {
      name: yB,
      shader: pB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);