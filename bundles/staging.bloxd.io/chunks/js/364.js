export const id = 364;
export const ids = [364];
export const modules = {
  60836: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      passPixelShaderWGSL: () => OT
    });
    var lT = cT(39474);
    const MT = "passPixelShader",
      KT = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    lT.d.ShadersStoreWGSL[MT] || (lT.d.ShadersStoreWGSL[MT] = KT);
    const OT = {
      name: MT,
      shader: KT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);