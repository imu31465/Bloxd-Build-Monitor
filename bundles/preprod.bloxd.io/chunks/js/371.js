export const id = 371;
export const ids = [371];
export const modules = {
  61101: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      passPixelShaderWGSL: () => nC
    });
    var QC = ZC(39674);
    const wC = "passPixelShader",
      bC = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    QC.b.ShadersStoreWGSL[wC] || (QC.b.ShadersStoreWGSL[wC] = bC);
    const nC = {
      name: wC,
      shader: bC
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);