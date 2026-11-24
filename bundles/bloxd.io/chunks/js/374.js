export const id = 374;
export const ids = [374];
export const modules = {
  61227: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      passCubePixelShader: () => rD
    });
    var pD = wD(39776);
    const sD = "passCubePixelShader",
      KD = "varying vec2 vUV;uniform samplerCube textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\ngl_FragColor=textureCube(textureSampler,vec3(-1.001,uv.y,uv.x));\n#endif\n#ifdef POSITIVEY\ngl_FragColor=textureCube(textureSampler,vec3(uv.y,1.001,uv.x));\n#endif\n#ifdef NEGATIVEY\ngl_FragColor=textureCube(textureSampler,vec3(uv.y,-1.001,uv.x));\n#endif\n#ifdef POSITIVEZ\ngl_FragColor=textureCube(textureSampler,vec3(uv,1.001));\n#endif\n#ifdef NEGATIVEZ\ngl_FragColor=textureCube(textureSampler,vec3(uv,-1.001));\n#endif\n}";
    pD.e.ShadersStore[sD] || (pD.e.ShadersStore[sD] = KD);
    const rD = {
      name: sD,
      shader: KD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);