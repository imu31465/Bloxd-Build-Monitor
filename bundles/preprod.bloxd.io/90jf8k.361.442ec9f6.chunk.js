export const id = 361;
export const ids = [361];
export const modules = {
  59550: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      proceduralVertexShaderWGSL: () => hF
    });
    var CF = SF(37824);
    const AF = "proceduralVertexShader",
      uF = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    CF.c.ShadersStoreWGSL[AF] || (CF.c.ShadersStoreWGSL[AF] = uF);
    const hF = {
      name: AF,
      shader: uF
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);