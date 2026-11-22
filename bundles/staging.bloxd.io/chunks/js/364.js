export const id = 364;
export const ids = [364];
export const modules = {
  60820: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      lod3DPixelShader: () => bk
    });
    var Dk = ik(39412);
    const fk = "lod3DPixelShader",
      Sk = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    Dk.d.ShadersStore[fk] || (Dk.d.ShadersStore[fk] = Sk);
    const bk = {
      name: fk,
      shader: Sk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);