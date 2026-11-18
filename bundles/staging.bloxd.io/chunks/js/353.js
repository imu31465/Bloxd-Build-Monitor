export const id = 353;
export const ids = [353];
export const modules = {
  59697: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      passPixelShaderWGSL: () => XJ
    });
    var FJ = ZJ(38658);
    const UJ = "passPixelShader",
      eJ = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    FJ.b.ShadersStoreWGSL[UJ] || (FJ.b.ShadersStoreWGSL[UJ] = eJ);
    const XJ = {
      name: UJ,
      shader: eJ
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);