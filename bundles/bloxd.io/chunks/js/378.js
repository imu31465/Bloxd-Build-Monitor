export const id = 378;
export const ids = [378];
export const modules = {
  61331: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      passCubePixelShader: () => gT
    });
    var WT = mT(39934);
    const zT = "passCubePixelShader",
      MT = "varying vec2 vUV;uniform samplerCube textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\ngl_FragColor=textureCube(textureSampler,vec3(-1.001,uv.y,uv.x));\n#endif\n#ifdef POSITIVEY\ngl_FragColor=textureCube(textureSampler,vec3(uv.y,1.001,uv.x));\n#endif\n#ifdef NEGATIVEY\ngl_FragColor=textureCube(textureSampler,vec3(uv.y,-1.001,uv.x));\n#endif\n#ifdef POSITIVEZ\ngl_FragColor=textureCube(textureSampler,vec3(uv,1.001));\n#endif\n#ifdef NEGATIVEZ\ngl_FragColor=textureCube(textureSampler,vec3(uv,-1.001));\n#endif\n}";
    WT.d.ShadersStore[zT] || (WT.d.ShadersStore[zT] = MT);
    const gT = {
      name: zT,
      shader: MT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);