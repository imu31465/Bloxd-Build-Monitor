export const id = 678;
export const ids = [678];
export const modules = {
  64467: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      lodPixelShaderWGSL: () => yV
    });
    var JV = xV(41108);
    const YV = "lodPixelShader",
      UV = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    JV.d.ShadersStoreWGSL[YV] || (JV.d.ShadersStoreWGSL[YV] = UV);
    const yV = {
      name: YV,
      shader: UV
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);