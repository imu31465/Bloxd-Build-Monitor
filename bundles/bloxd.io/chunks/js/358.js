export const id = 358;
export const ids = [358];
export const modules = {
  60857: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      lod3DPixelShader: () => Ub
    });
    var Bb = hb(39308);
    const Ob = "lod3DPixelShader",
      Gb = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    Bb.e.ShadersStore[Ob] || (Bb.e.ShadersStore[Ob] = Gb);
    const Ub = {
      name: Ob,
      shader: Gb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);