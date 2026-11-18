export const id = 350;
export const ids = [350];
export const modules = {
  59993: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      lodPixelShaderWGSL: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "lodPixelShader",
      fy = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    Uy.e.ShadersStoreWGSL[hy] || (Uy.e.ShadersStoreWGSL[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);