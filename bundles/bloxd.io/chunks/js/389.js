export const id = 389;
export const ids = [389];
export const modules = {
  61841: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      proceduralVertexShaderWGSL: () => yk
    });
    var Xk = Ik(39837);
    const Tk = "proceduralVertexShader",
      ik = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Xk.b.ShadersStoreWGSL[Tk] || (Xk.b.ShadersStoreWGSL[Tk] = ik);
    const yk = {
      name: Tk,
      shader: ik
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);