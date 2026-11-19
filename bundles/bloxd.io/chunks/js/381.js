export const id = 381;
export const ids = [381];
export const modules = {
  60945: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      proceduralVertexShaderWGSL: () => RY
    });
    var FY = DY(38998);
    const AY = "proceduralVertexShader",
      IY = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    FY.b.ShadersStoreWGSL[AY] || (FY.b.ShadersStoreWGSL[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);