export const id = 378;
export const ids = [378];
export const modules = {
  61710: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      lodPixelShaderWGSL: () => zQ
    });
    var wQ = XQ(40126);
    const qQ = "lodPixelShader",
      TQ = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    wQ.b.ShadersStoreWGSL[qQ] || (wQ.b.ShadersStoreWGSL[qQ] = TQ);
    const zQ = {
      name: qQ,
      shader: TQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);