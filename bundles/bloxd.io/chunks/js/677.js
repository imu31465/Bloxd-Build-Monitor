export const id = 677;
export const ids = [677];
export const modules = {
  64072: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      lodCubePixelShaderWGSL: () => aM
    });
    var OM = iM(40964);
    const SM = "lodCubePixelShader",
      jM = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let uv=fragmentInputs.vUV*2.0-1.0;\n#ifdef POSITIVEX\nfragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(1.001,uv.y,uv.x),uniforms.lod);\n#endif\n#ifdef NEGATIVEX\nfragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(-1.001,uv.y,uv.x),uniforms.lod);\n#endif\n#ifdef POSITIVEY\nfragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(uv.y,1.001,uv.x),uniforms.lod);\n#endif\n#ifdef NEGATIVEY\nfragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(uv.y,-1.001,uv.x),uniforms.lod);\n#endif\n#ifdef POSITIVEZ\nfragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(uv,1.001),uniforms.lod);\n#endif\n#ifdef NEGATIVEZ\nfragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(uv,-1.001),uniforms.lod);\n#endif\nif (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    OM.e.ShadersStoreWGSL[SM] || (OM.e.ShadersStoreWGSL[SM] = jM);
    const aM = {
      name: SM,
      shader: jM
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);