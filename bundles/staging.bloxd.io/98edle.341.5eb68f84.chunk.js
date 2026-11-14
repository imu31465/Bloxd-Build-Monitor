export const id = 341;
export const ids = [341];
export const modules = {
  58851: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      lodCubePixelShaderWGSL: () => AW
    });
    var wW = MW(37441);
    const CW = "lodCubePixelShader",
      zR = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let uv=fragmentInputs.vUV*2.0-1.0;\n#ifdef POSITIVEX\nfragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(1.001,uv.y,uv.x),uniforms.lod);\n#endif\n#ifdef NEGATIVEX\nfragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(-1.001,uv.y,uv.x),uniforms.lod);\n#endif\n#ifdef POSITIVEY\nfragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(uv.y,1.001,uv.x),uniforms.lod);\n#endif\n#ifdef NEGATIVEY\nfragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(uv.y,-1.001,uv.x),uniforms.lod);\n#endif\n#ifdef POSITIVEZ\nfragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(uv,1.001),uniforms.lod);\n#endif\n#ifdef NEGATIVEZ\nfragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(uv,-1.001),uniforms.lod);\n#endif\nif (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    wW.c.ShadersStoreWGSL[CW] || (wW.c.ShadersStoreWGSL[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);