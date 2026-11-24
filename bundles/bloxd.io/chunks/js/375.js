export const id = 375;
export const ids = [375];
export const modules = {
  61682: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      passPixelShaderWGSL: () => mt
    });
    var Ot = Vt(40061);
    const qt = "passPixelShader",
      Dt = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    Ot.b.ShadersStoreWGSL[qt] || (Ot.b.ShadersStoreWGSL[qt] = Dt);
    const mt = {
      name: qt,
      shader: Dt
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);