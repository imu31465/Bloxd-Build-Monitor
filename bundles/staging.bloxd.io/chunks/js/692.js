export const id = 692;
export const ids = [692];
export const modules = {
  64599: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      passCubePixelShader: () => Vb
    });
    var eb = Mb(41518);
    const Hb = "passCubePixelShader",
      pb = "varying vec2 vUV;uniform samplerCube textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\ngl_FragColor=textureCube(textureSampler,vec3(-1.001,uv.y,uv.x));\n#endif\n#ifdef POSITIVEY\ngl_FragColor=textureCube(textureSampler,vec3(uv.y,1.001,uv.x));\n#endif\n#ifdef NEGATIVEY\ngl_FragColor=textureCube(textureSampler,vec3(uv.y,-1.001,uv.x));\n#endif\n#ifdef POSITIVEZ\ngl_FragColor=textureCube(textureSampler,vec3(uv,1.001));\n#endif\n#ifdef NEGATIVEZ\ngl_FragColor=textureCube(textureSampler,vec3(uv,-1.001));\n#endif\n}";
    eb.e.ShadersStore[Hb] || (eb.e.ShadersStore[Hb] = pb);
    const Vb = {
      name: Hb,
      shader: pb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);