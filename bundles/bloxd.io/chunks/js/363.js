export const id = 363;
export const ids = [363];
export const modules = {
  60612: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      passPixelShaderWGSL: () => Oz
    });
    var Fz = sz(39041);
    const Wz = "passPixelShader",
      Xz = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    Fz.e.ShadersStoreWGSL[Wz] || (Fz.e.ShadersStoreWGSL[Wz] = Xz);
    const Oz = {
      name: Wz,
      shader: Xz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);