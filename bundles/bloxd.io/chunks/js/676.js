export const id = 676;
export const ids = [676];
export const modules = {
  64031: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      lod3DPixelShaderWGSL: () => oB
    });
    var YB = GB(40864);
    const DB = "lod3DPixelShader",
      QB = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textureCoordinates=vec3i(vec2i(fragmentInputs.vUV*vec2f(textureSize.xy)),i32(uniforms.slice));fragmentOutputs.color=textureLoad(textureSampler,textureCoordinates,i32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    YB.b.ShadersStoreWGSL[DB] || (YB.b.ShadersStoreWGSL[DB] = QB);
    const oB = {
      name: DB,
      shader: QB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);