export const id = 676;
export const ids = [676];
export const modules = {
  63985: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      lod3DPixelShaderWGSL: () => Ke
    });
    var ye = He(40954);
    const be = "lod3DPixelShader",
      Me = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textureCoordinates=vec3i(vec2i(fragmentInputs.vUV*vec2f(textureSize.xy)),i32(uniforms.slice));fragmentOutputs.color=textureLoad(textureSampler,textureCoordinates,i32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    ye.d.ShadersStoreWGSL[be] || (ye.d.ShadersStoreWGSL[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);