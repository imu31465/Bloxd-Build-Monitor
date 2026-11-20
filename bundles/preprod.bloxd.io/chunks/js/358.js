export const id = 358;
export const ids = [358];
export const modules = {
  61393: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      lod3DPixelShader: () => mq
    });
    var Yq = gq(39617);
    const lq = "lod3DPixelShader",
      Oq = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    Yq.d.ShadersStore[lq] || (Yq.d.ShadersStore[lq] = Oq);
    const mq = {
      name: lq,
      shader: Oq
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);