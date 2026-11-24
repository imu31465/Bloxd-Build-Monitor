export const id = 375;
export const ids = [375];
export const modules = {
  61318: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      passPixelShaderWGSL: () => gT
    });
    var WT = mT(39934);
    const zT = "passPixelShader",
      MT = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    WT.d.ShadersStoreWGSL[zT] || (WT.d.ShadersStoreWGSL[zT] = MT);
    const gT = {
      name: zT,
      shader: MT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);