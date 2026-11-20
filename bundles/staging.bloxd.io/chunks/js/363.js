export const id = 363;
export const ids = [363];
export const modules = {
  61204: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      passPixelShaderWGSL: () => Xk
    });
    var Rk = Bk(39270);
    const tk = "passPixelShader",
      ak = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    Rk.d.ShadersStoreWGSL[tk] || (Rk.d.ShadersStoreWGSL[tk] = ak);
    const Xk = {
      name: tk,
      shader: ak
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);