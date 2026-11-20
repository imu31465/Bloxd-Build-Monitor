export const id = 363;
export const ids = [363];
export const modules = {
  60830: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      lodPixelShaderWGSL: () => OT
    });
    var lT = cT(39474);
    const MT = "lodPixelShader",
      KT = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    lT.d.ShadersStoreWGSL[MT] || (lT.d.ShadersStoreWGSL[MT] = KT);
    const OT = {
      name: MT,
      shader: KT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);