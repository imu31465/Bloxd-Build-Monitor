export const id = 363;
export const ids = [363];
export const modules = {
  60313: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      passPixelShaderWGSL: () => WT
    });
    var iT = IT(38617);
    const zT = "passPixelShader",
      kT = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    iT.c.ShadersStoreWGSL[zT] || (iT.c.ShadersStoreWGSL[zT] = kT);
    const WT = {
      name: zT,
      shader: kT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);