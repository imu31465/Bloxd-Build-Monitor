export const id = 357;
export const ids = [357];
export const modules = {
  60538: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      lod3DPixelShader: () => Eb
    });
    var Ab = Ub(38943);
    const Mb = "lod3DPixelShader",
      Tb = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    Ab.d.ShadersStore[Mb] || (Ab.d.ShadersStore[Mb] = Tb);
    const Eb = {
      name: Mb,
      shader: Tb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);