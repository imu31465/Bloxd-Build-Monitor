export const id = 351;
export const ids = [351];
export const modules = {
  59997: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      passPixelShaderWGSL: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "passPixelShader",
      fy = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    Uy.e.ShadersStoreWGSL[hy] || (Uy.e.ShadersStoreWGSL[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);