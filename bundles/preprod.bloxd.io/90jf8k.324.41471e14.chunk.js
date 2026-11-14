export const id = 324;
export const ids = [324];
export const modules = {
  58898: (FF, WF, SF) => {
    var CF;
    SF.r(WF), SF.d(WF, {
        ShaderLanguage: () => CF
      }),
      function(FF) {
        FF[FF.GLSL = 0] = "GLSL", FF[FF.WGSL = 1] = "WGSL"
      }(CF || (CF = {}))
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);