export const id = 682;
export const ids = [682];
export const modules = {
  64055: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      passCubePixelShader: () => oB
    });
    var YB = GB(40864);
    const DB = "passCubePixelShader",
      QB = "varying vec2 vUV;uniform samplerCube textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\ngl_FragColor=textureCube(textureSampler,vec3(-1.001,uv.y,uv.x));\n#endif\n#ifdef POSITIVEY\ngl_FragColor=textureCube(textureSampler,vec3(uv.y,1.001,uv.x));\n#endif\n#ifdef NEGATIVEY\ngl_FragColor=textureCube(textureSampler,vec3(uv.y,-1.001,uv.x));\n#endif\n#ifdef POSITIVEZ\ngl_FragColor=textureCube(textureSampler,vec3(uv,1.001));\n#endif\n#ifdef NEGATIVEZ\ngl_FragColor=textureCube(textureSampler,vec3(uv,-1.001));\n#endif\n}";
    YB.b.ShadersStore[DB] || (YB.b.ShadersStore[DB] = QB);
    const oB = {
      name: DB,
      shader: QB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);