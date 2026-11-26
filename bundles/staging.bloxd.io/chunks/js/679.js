export const id = 679;
export const ids = [679];
export const modules = {
  64473: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      passPixelShaderWGSL: () => yV
    });
    var JV = xV(41108);
    const YV = "passPixelShader",
      UV = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    JV.d.ShadersStoreWGSL[YV] || (JV.d.ShadersStoreWGSL[YV] = UV);
    const yV = {
      name: YV,
      shader: UV
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);