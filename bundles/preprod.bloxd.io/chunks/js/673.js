export const id = 673;
export const ids = [673];
export const modules = {
  64021: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      lod3DPixelShader: () => oB
    });
    var YB = GB(40864);
    const DB = "lod3DPixelShader",
      QB = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    YB.b.ShadersStore[DB] || (YB.b.ShadersStore[DB] = QB);
    const oB = {
      name: DB,
      shader: QB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);