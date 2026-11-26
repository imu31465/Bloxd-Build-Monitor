export const id = 674;
export const ids = [674];
export const modules = {
  64023: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      lodCubePixelShader: () => oB
    });
    var YB = GB(40864);
    const DB = "lodCubePixelShader",
      QB = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform samplerCube textureSampler;uniform float lod;uniform int gamma;void main(void)\n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x),lod);\n#endif\n#ifdef NEGATIVEX\ngl_FragColor=textureCube(textureSampler,vec3(-1.001,uv.y,uv.x),lod);\n#endif\n#ifdef POSITIVEY\ngl_FragColor=textureCube(textureSampler,vec3(uv.y,1.001,uv.x),lod);\n#endif\n#ifdef NEGATIVEY\ngl_FragColor=textureCube(textureSampler,vec3(uv.y,-1.001,uv.x),lod);\n#endif\n#ifdef POSITIVEZ\ngl_FragColor=textureCube(textureSampler,vec3(uv,1.001),lod);\n#endif\n#ifdef NEGATIVEZ\ngl_FragColor=textureCube(textureSampler,vec3(uv,-1.001),lod);\n#endif\nif (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    YB.b.ShadersStore[DB] || (YB.b.ShadersStore[DB] = QB);
    const oB = {
      name: DB,
      shader: QB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);