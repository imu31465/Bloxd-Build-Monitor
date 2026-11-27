export const id = 687;
export const ids = [687];
export const modules = {
  64583: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      lodPixelShaderWGSL: () => PW
    });
    var mW = OW(41392);
    const EW = "lodPixelShader",
      NW = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    mW.c.ShadersStoreWGSL[EW] || (mW.c.ShadersStoreWGSL[EW] = NW);
    const PW = {
      name: EW,
      shader: NW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);