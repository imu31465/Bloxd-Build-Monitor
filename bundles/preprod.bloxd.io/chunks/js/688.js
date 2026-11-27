export const id = 688;
export const ids = [688];
export const modules = {
  64585: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      passPixelShaderWGSL: () => PW
    });
    var mW = OW(41392);
    const EW = "passPixelShader",
      NW = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    mW.c.ShadersStoreWGSL[EW] || (mW.c.ShadersStoreWGSL[EW] = NW);
    const PW = {
      name: EW,
      shader: NW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);