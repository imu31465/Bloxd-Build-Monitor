export const id = 362;
export const ids = [362];
export const modules = {
  60310: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      lodPixelShaderWGSL: () => WT
    });
    var iT = IT(38617);
    const zT = "lodPixelShader",
      kT = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    iT.c.ShadersStoreWGSL[zT] || (iT.c.ShadersStoreWGSL[zT] = kT);
    const WT = {
      name: zT,
      shader: kT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);