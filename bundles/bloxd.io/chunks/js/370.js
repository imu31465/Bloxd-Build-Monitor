export const id = 370;
export const ids = [370];
export const modules = {
  60846: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      passPixelShaderWGSL: () => bk
    });
    var Dk = ik(39412);
    const fk = "passPixelShader",
      Sk = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    Dk.d.ShadersStoreWGSL[fk] || (Dk.d.ShadersStoreWGSL[fk] = Sk);
    const bk = {
      name: fk,
      shader: Sk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);