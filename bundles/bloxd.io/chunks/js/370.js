export const id = 370;
export const ids = [370];
export const modules = {
  61202: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      lodPixelShaderWGSL: () => rD
    });
    var pD = wD(39776);
    const sD = "lodPixelShader",
      KD = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    pD.e.ShadersStoreWGSL[sD] || (pD.e.ShadersStoreWGSL[sD] = KD);
    const rD = {
      name: sD,
      shader: KD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);