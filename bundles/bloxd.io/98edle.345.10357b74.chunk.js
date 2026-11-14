export const id = 345;
export const ids = [345];
export const modules = {
  58877: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      passCubePixelShaderWGSL: () => AW
    });
    var wW = MW(37441);
    const CW = "passCubePixelShader",
      zR = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f=input.vUV*2.0-1.0;\n#ifdef POSITIVEX\nfragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\nfragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(-1.001,uv.y,uv.x));\n#endif\n#ifdef POSITIVEY\nfragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv.y,1.001,uv.x));\n#endif\n#ifdef NEGATIVEY\nfragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv.y,-1.001,uv.x));\n#endif\n#ifdef POSITIVEZ\nfragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv,1.001));\n#endif\n#ifdef NEGATIVEZ\nfragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv,-1.001));\n#endif\n}";
    wW.c.ShadersStoreWGSL[CW] || (wW.c.ShadersStoreWGSL[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);