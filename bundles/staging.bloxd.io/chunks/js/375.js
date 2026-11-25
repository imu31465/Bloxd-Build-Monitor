export const id = 375;
export const ids = [375];
export const modules = {
  61679: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      passPixelShaderWGSL: () => Xu
    });
    var su = ju(40127);
    const Uu = "passPixelShader",
      Zu = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    su.b.ShadersStoreWGSL[Uu] || (su.b.ShadersStoreWGSL[Uu] = Zu);
    const Xu = {
      name: Uu,
      shader: Zu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);