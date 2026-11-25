export const id = 394;
export const ids = [394];
export const modules = {
  62098: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      proceduralVertexShader: () => Xu
    });
    var su = ju(40127);
    const Uu = "proceduralVertexShader",
      Zu = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    su.b.ShadersStore[Uu] || (su.b.ShadersStore[Uu] = Zu);
    const Xu = {
      name: Uu,
      shader: Zu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);