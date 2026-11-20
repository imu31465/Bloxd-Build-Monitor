export const id = 358;
export const ids = [358];
export const modules = {
  60839: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      lodCubePixelShader: () => Tb
    });
    var kb = sb(39267);
    const Wb = "lodCubePixelShader",
      ab = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform samplerCube textureSampler;uniform float lod;uniform int gamma;void main(void)\n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x),lod);\n#endif\n#ifdef NEGATIVEX\ngl_FragColor=textureCube(textureSampler,vec3(-1.001,uv.y,uv.x),lod);\n#endif\n#ifdef POSITIVEY\ngl_FragColor=textureCube(textureSampler,vec3(uv.y,1.001,uv.x),lod);\n#endif\n#ifdef NEGATIVEY\ngl_FragColor=textureCube(textureSampler,vec3(uv.y,-1.001,uv.x),lod);\n#endif\n#ifdef POSITIVEZ\ngl_FragColor=textureCube(textureSampler,vec3(uv,1.001),lod);\n#endif\n#ifdef NEGATIVEZ\ngl_FragColor=textureCube(textureSampler,vec3(uv,-1.001),lod);\n#endif\nif (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    kb.d.ShadersStore[Wb] || (kb.d.ShadersStore[Wb] = ab);
    const Tb = {
      name: Wb,
      shader: ab
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);