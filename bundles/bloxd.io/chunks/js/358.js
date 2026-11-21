export const id = 358;
export const ids = [358];
export const modules = {
  60913: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      lod3DPixelShader: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "lod3DPixelShader",
      oQ = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    LQ.c.ShadersStore[qQ] || (LQ.c.ShadersStore[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);