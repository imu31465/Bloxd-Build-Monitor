export const id = 371;
export const ids = [371];
export const modules = {
  61438: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      passPixelShaderWGSL: () => yk
    });
    var Xk = Ik(39837);
    const Tk = "passPixelShader",
      ik = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    Xk.b.ShadersStoreWGSL[Tk] || (Xk.b.ShadersStoreWGSL[Tk] = ik);
    const yk = {
      name: Tk,
      shader: ik
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);