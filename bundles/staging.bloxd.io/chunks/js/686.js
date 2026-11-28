export const id = 686;
export const ids = [686];
export const modules = {
  64923: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      lod3DPixelShaderWGSL: () => Xd
    });
    var Wd = md(41785);
    const Fd = "lod3DPixelShader",
      Rd = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textureCoordinates=vec3i(vec2i(fragmentInputs.vUV*vec2f(textureSize.xy)),i32(uniforms.slice));fragmentOutputs.color=textureLoad(textureSampler,textureCoordinates,i32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    Wd.e.ShadersStoreWGSL[Fd] || (Wd.e.ShadersStoreWGSL[Fd] = Rd);
    const Xd = {
      name: Fd,
      shader: Rd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);