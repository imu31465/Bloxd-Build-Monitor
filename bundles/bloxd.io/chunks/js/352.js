export const id = 352;
export const ids = [352];
export const modules = {
  59692: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      lodPixelShaderWGSL: () => XJ
    });
    var FJ = ZJ(38658);
    const UJ = "lodPixelShader",
      eJ = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    FJ.b.ShadersStoreWGSL[UJ] || (FJ.b.ShadersStoreWGSL[UJ] = eJ);
    const XJ = {
      name: UJ,
      shader: eJ
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);