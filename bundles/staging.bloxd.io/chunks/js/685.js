export const id = 685;
export const ids = [685];
export const modules = {
  64572: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      lod3DPixelShaderWGSL: () => PW
    });
    var mW = OW(41392);
    const EW = "lod3DPixelShader",
      NW = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textureCoordinates=vec3i(vec2i(fragmentInputs.vUV*vec2f(textureSize.xy)),i32(uniforms.slice));fragmentOutputs.color=textureLoad(textureSampler,textureCoordinates,i32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    mW.c.ShadersStoreWGSL[EW] || (mW.c.ShadersStoreWGSL[EW] = NW);
    const PW = {
      name: EW,
      shader: NW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);