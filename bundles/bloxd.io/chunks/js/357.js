export const id = 357;
export const ids = [357];
export const modules = {
  60833: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      lod3DPixelShader: () => Tb
    });
    var kb = sb(39267);
    const Wb = "lod3DPixelShader",
      ab = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    kb.d.ShadersStore[Wb] || (kb.d.ShadersStore[Wb] = ab);
    const Tb = {
      name: Wb,
      shader: ab
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);