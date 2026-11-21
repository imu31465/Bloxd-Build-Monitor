export const id = 363;
export const ids = [363];
export const modules = {
  61169: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      lodPixelShaderWGSL: () => Pd
    });
    var pd = kd(39829);
    const Nd = "lodPixelShader",
      Wd = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    pd.c.ShadersStoreWGSL[Nd] || (pd.c.ShadersStoreWGSL[Nd] = Wd);
    const Pd = {
      name: Nd,
      shader: Wd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);