export const id = 681;
export const ids = [681];
export const modules = {
  64265: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      postprocessVertexShaderWGSL: () => ZR
    });
    var yR = GR(41387);
    const tR = "postprocessVertexShader",
      uR = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    yR.b.ShadersStoreWGSL[tR] || (yR.b.ShadersStoreWGSL[tR] = uR);
    const ZR = {
      name: tR,
      shader: uR
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);