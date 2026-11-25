export const id = 374;
export const ids = [374];
export const modules = {
  61473: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      lodPixelShaderWGSL: () => GB
    });
    var TB = ZB(39905);
    const JB = "lodPixelShader",
      oB = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    TB.c.ShadersStoreWGSL[JB] || (TB.c.ShadersStoreWGSL[JB] = oB);
    const GB = {
      name: JB,
      shader: oB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);