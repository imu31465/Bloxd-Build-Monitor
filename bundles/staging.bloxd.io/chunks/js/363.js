export const id = 363;
export const ids = [363];
export const modules = {
  60594: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      passPixelShaderWGSL: () => lz
    });
    var Ez = bz(39033);
    const nz = "passPixelShader",
      iz = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    Ez.e.ShadersStoreWGSL[nz] || (Ez.e.ShadersStoreWGSL[nz] = iz);
    const lz = {
      name: nz,
      shader: iz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);