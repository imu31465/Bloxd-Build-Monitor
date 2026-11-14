export const id = 342;
export const ids = [342];
export const modules = {
  58857: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      lodPixelShaderWGSL: () => AW
    });
    var wW = MW(37441);
    const CW = "lodPixelShader",
      zR = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    wW.c.ShadersStoreWGSL[CW] || (wW.c.ShadersStoreWGSL[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);