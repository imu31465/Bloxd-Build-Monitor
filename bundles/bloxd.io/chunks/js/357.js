export const id = 357;
export const ids = [357];
export const modules = {
  60575: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      lod3DPixelShader: () => Oz
    });
    var Fz = sz(39041);
    const Wz = "lod3DPixelShader",
      Xz = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    Fz.e.ShadersStore[Wz] || (Fz.e.ShadersStore[Wz] = Xz);
    const Oz = {
      name: Wz,
      shader: Xz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);