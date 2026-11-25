export const id = 398;
export const ids = [398];
export const modules = {
  62144: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      proceduralVertexShader: () => zQ
    });
    var wQ = XQ(40126);
    const qQ = "proceduralVertexShader",
      TQ = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    wQ.b.ShadersStore[qQ] || (wQ.b.ShadersStore[qQ] = TQ);
    const zQ = {
      name: qQ,
      shader: TQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);