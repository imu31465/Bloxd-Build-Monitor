export const id = 363;
export const ids = [363];
export const modules = {
  60496: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      passPixelShaderWGSL: () => RY
    });
    var FY = DY(38998);
    const AY = "passPixelShader",
      IY = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    FY.b.ShadersStoreWGSL[AY] || (FY.b.ShadersStoreWGSL[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);