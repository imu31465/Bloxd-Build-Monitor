export const id = 382;
export const ids = [382];
export const modules = {
  61067: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      proceduralVertexShader: () => fD
    });
    var ID = cD(39003);
    const pD = "proceduralVertexShader",
      iD = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    ID.e.ShadersStore[pD] || (ID.e.ShadersStore[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);