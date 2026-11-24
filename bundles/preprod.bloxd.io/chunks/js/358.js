export const id = 358;
export const ids = [358];
export const modules = {
  61392: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      postprocessVertexShader: () => Sp
    });
    var Op = cp(40062);
    const op = "postprocessVertexShader",
      Ip = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
    const Sp = {
      name: op,
      shader: Ip
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);