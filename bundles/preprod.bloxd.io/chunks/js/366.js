export const id = 366;
export const ids = [366];
export const modules = {
  61429: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      passCubePixelShaderWGSL: () => mq
    });
    var Yq = gq(39617);
    const lq = "passCubePixelShader",
      Oq = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f=input.vUV*2.0-1.0;\n#ifdef POSITIVEX\nfragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\nfragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(-1.001,uv.y,uv.x));\n#endif\n#ifdef POSITIVEY\nfragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv.y,1.001,uv.x));\n#endif\n#ifdef NEGATIVEY\nfragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv.y,-1.001,uv.x));\n#endif\n#ifdef POSITIVEZ\nfragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv,1.001));\n#endif\n#ifdef NEGATIVEZ\nfragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv,-1.001));\n#endif\n}";
    Yq.d.ShadersStoreWGSL[lq] || (Yq.d.ShadersStoreWGSL[lq] = Oq);
    const mq = {
      name: lq,
      shader: Oq
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);