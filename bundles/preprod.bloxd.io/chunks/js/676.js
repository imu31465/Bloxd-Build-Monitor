export const id = 676;
export const ids = [676];
export const modules = {
  64109: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      passPixelShaderWGSL: () => AU
    });
    var cU = zU(40961);
    const yU = "passPixelShader",
      QU = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    cU.b.ShadersStoreWGSL[yU] || (cU.b.ShadersStoreWGSL[yU] = QU);
    const AU = {
      name: yU,
      shader: QU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);