export const id = 345;
export const ids = [345];
export const modules = {
  60647: (QQ, FQ, wQ) => {
    var LQ;
    wQ.r(FQ), wQ.d(FQ, {
        ShaderLanguage: () => LQ
      }),
      function(QQ) {
        QQ[QQ.GLSL = 0] = "GLSL", QQ[QQ.WGSL = 1] = "WGSL"
      }(LQ || (LQ = {}))
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);