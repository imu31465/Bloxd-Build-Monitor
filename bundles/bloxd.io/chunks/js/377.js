export const id = 377;
export const ids = [377];
export const modules = {
  61485: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      passCubePixelShaderWGSL: () => GB
    });
    var TB = ZB(39905);
    const JB = "passCubePixelShader",
      oB = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f=input.vUV*2.0-1.0;\n#ifdef POSITIVEX\nfragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\nfragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(-1.001,uv.y,uv.x));\n#endif\n#ifdef POSITIVEY\nfragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv.y,1.001,uv.x));\n#endif\n#ifdef NEGATIVEY\nfragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv.y,-1.001,uv.x));\n#endif\n#ifdef POSITIVEZ\nfragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv,1.001));\n#endif\n#ifdef NEGATIVEZ\nfragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv,-1.001));\n#endif\n}";
    TB.c.ShadersStoreWGSL[JB] || (TB.c.ShadersStoreWGSL[JB] = oB);
    const GB = {
      name: JB,
      shader: oB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);