export const id = 362;
export const ids = [362];
export const modules = {
  60490: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      lodPixelShaderWGSL: () => RY
    });
    var FY = DY(38998);
    const AY = "lodPixelShader",
      IY = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    FY.b.ShadersStoreWGSL[AY] || (FY.b.ShadersStoreWGSL[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);