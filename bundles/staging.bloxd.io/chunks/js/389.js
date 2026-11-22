export const id = 389;
export const ids = [389];
export const modules = {
  61298: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      proceduralVertexShader: () => bk
    });
    var Dk = ik(39412);
    const fk = "proceduralVertexShader",
      Sk = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Dk.d.ShadersStore[fk] || (Dk.d.ShadersStore[fk] = Sk);
    const bk = {
      name: fk,
      shader: Sk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);