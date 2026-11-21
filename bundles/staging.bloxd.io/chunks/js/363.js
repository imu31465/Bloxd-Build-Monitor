export const id = 363;
export const ids = [363];
export const modules = {
  60950: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      lodPixelShaderWGSL: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "lodPixelShader",
      oQ = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    LQ.c.ShadersStoreWGSL[qQ] || (LQ.c.ShadersStoreWGSL[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);