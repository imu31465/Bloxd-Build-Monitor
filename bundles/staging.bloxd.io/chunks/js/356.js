export const id = 356;
export const ids = [356];
export const modules = {
  60446: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      postprocessVertexShaderWGSL: () => RY
    });
    var FY = DY(38998);
    const AY = "postprocessVertexShader",
      IY = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    FY.b.ShadersStoreWGSL[AY] || (FY.b.ShadersStoreWGSL[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);