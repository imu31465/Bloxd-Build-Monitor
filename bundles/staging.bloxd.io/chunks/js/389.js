export const id = 389;
export const ids = [389];
export const modules = {
  61967: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      proceduralVertexShaderWGSL: () => xm
    });
    var hm = fm(39960);
    const Am = "proceduralVertexShader",
      am = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    hm.e.ShadersStoreWGSL[Am] || (hm.e.ShadersStoreWGSL[Am] = am);
    const xm = {
      name: Am,
      shader: am
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);