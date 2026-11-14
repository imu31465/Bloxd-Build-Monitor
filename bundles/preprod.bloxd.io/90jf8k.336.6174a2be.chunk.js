export const id = 336;
export const ids = [336];
export const modules = {
  59144: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      postprocessVertexShaderWGSL: () => hF
    });
    var CF = SF(37824);
    const AF = "postprocessVertexShader",
      uF = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    CF.c.ShadersStoreWGSL[AF] || (CF.c.ShadersStoreWGSL[AF] = uF);
    const hF = {
      name: AF,
      shader: uF
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);