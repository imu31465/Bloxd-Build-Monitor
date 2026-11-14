export const id = 346;
export const ids = [346];
export const modules = {
  58879: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      passCubePixelShader: () => AW
    });
    var wW = MW(37441);
    const CW = "passCubePixelShader",
      zR = "varying vec2 vUV;uniform samplerCube textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\ngl_FragColor=textureCube(textureSampler,vec3(-1.001,uv.y,uv.x));\n#endif\n#ifdef POSITIVEY\ngl_FragColor=textureCube(textureSampler,vec3(uv.y,1.001,uv.x));\n#endif\n#ifdef NEGATIVEY\ngl_FragColor=textureCube(textureSampler,vec3(uv.y,-1.001,uv.x));\n#endif\n#ifdef POSITIVEZ\ngl_FragColor=textureCube(textureSampler,vec3(uv,1.001));\n#endif\n#ifdef NEGATIVEZ\ngl_FragColor=textureCube(textureSampler,vec3(uv,-1.001));\n#endif\n}";
    wW.c.ShadersStore[CW] || (wW.c.ShadersStore[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);