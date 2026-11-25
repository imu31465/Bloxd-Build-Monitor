export const id = 373;
export const ids = [373];
export const modules = {
  61680: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      lod3DPixelShader: () => zQ
    });
    var wQ = XQ(40126);
    const qQ = "lod3DPixelShader",
      TQ = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    wQ.b.ShadersStore[qQ] || (wQ.b.ShadersStore[qQ] = TQ);
    const zQ = {
      name: qQ,
      shader: TQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);