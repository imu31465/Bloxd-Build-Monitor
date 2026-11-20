export const id = 363;
export const ids = [363];
export const modules = {
  60812: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      passPixelShaderWGSL: () => PU
    });
    var tU = gU(39225);
    const pU = "passPixelShader",
      EU = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    tU.d.ShadersStoreWGSL[pU] || (tU.d.ShadersStoreWGSL[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);