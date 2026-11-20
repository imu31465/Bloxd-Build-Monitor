export const id = 364;
export const ids = [364];
export const modules = {
  60863: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      passPixelShaderWGSL: () => gv
    });
    var hv = Pv(39162);
    const Sv = "passPixelShader",
      ev = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    hv.d.ShadersStoreWGSL[Sv] || (hv.d.ShadersStoreWGSL[Sv] = ev);
    const gv = {
      name: Sv,
      shader: ev
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);