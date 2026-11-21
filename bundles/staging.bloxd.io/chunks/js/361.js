export const id = 361;
export const ids = [361];
export const modules = {
  61160: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      lod3DPixelShaderWGSL: () => Pd
    });
    var pd = kd(39829);
    const Nd = "lod3DPixelShader",
      Wd = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textureCoordinates=vec3i(vec2i(fragmentInputs.vUV*vec2f(textureSize.xy)),i32(uniforms.slice));fragmentOutputs.color=textureLoad(textureSampler,textureCoordinates,i32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    pd.c.ShadersStoreWGSL[Nd] || (pd.c.ShadersStoreWGSL[Nd] = Wd);
    const Pd = {
      name: Nd,
      shader: Wd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);