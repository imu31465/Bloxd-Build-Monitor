export const id = 681;
export const ids = [681];
export const modules = {
  64015: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      passCubePixelShaderWGSL: () => Ke
    });
    var ye = He(40954);
    const be = "passCubePixelShader",
      Me = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f=input.vUV*2.0-1.0;\n#ifdef POSITIVEX\nfragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\nfragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(-1.001,uv.y,uv.x));\n#endif\n#ifdef POSITIVEY\nfragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv.y,1.001,uv.x));\n#endif\n#ifdef NEGATIVEY\nfragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv.y,-1.001,uv.x));\n#endif\n#ifdef POSITIVEZ\nfragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv,1.001));\n#endif\n#ifdef NEGATIVEZ\nfragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv,-1.001));\n#endif\n}";
    ye.d.ShadersStoreWGSL[be] || (ye.d.ShadersStoreWGSL[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);