export const id = 366;
export const ids = [366];
export const modules = {
  61331: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      passCubePixelShader: () => mu
    });
    var Eu = yu(39403);
    const Ku = "passCubePixelShader",
      Qu = "varying vec2 vUV;uniform samplerCube textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\ngl_FragColor=textureCube(textureSampler,vec3(-1.001,uv.y,uv.x));\n#endif\n#ifdef POSITIVEY\ngl_FragColor=textureCube(textureSampler,vec3(uv.y,1.001,uv.x));\n#endif\n#ifdef NEGATIVEY\ngl_FragColor=textureCube(textureSampler,vec3(uv.y,-1.001,uv.x));\n#endif\n#ifdef POSITIVEZ\ngl_FragColor=textureCube(textureSampler,vec3(uv,1.001));\n#endif\n#ifdef NEGATIVEZ\ngl_FragColor=textureCube(textureSampler,vec3(uv,-1.001));\n#endif\n}";
    Eu.e.ShadersStore[Ku] || (Eu.e.ShadersStore[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);