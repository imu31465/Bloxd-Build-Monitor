export const id = 375;
export const ids = [375];
export const modules = {
  61552: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      passPixelShaderWGSL: () => Sp
    });
    var Op = cp(40062);
    const op = "passPixelShader",
      Ip = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    Op.b.ShadersStoreWGSL[op] || (Op.b.ShadersStoreWGSL[op] = Ip);
    const Sp = {
      name: op,
      shader: Ip
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);