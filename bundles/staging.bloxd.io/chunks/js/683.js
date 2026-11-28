export const id = 683;
export const ids = [683];
export const modules = {
  64912: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      lod3DPixelShader: () => Xd
    });
    var Wd = md(41785);
    const Fd = "lod3DPixelShader",
      Rd = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    Wd.e.ShadersStore[Fd] || (Wd.e.ShadersStore[Fd] = Rd);
    const Xd = {
      name: Fd,
      shader: Rd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);