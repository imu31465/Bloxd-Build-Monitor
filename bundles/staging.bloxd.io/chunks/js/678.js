export const id = 678;
export const ids = [678];
export const modules = {
  64042: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      lodPixelShaderWGSL: () => oB
    });
    var YB = GB(40864);
    const DB = "lodPixelShader",
      QB = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    YB.b.ShadersStoreWGSL[DB] || (YB.b.ShadersStoreWGSL[DB] = QB);
    const oB = {
      name: DB,
      shader: QB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);