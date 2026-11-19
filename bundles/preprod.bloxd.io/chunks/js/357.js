export const id = 357;
export const ids = [357];
export const modules = {
  60558: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      lod3DPixelShader: () => lz
    });
    var Ez = bz(39033);
    const nz = "lod3DPixelShader",
      iz = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    Ez.e.ShadersStore[nz] || (Ez.e.ShadersStore[nz] = iz);
    const lz = {
      name: nz,
      shader: iz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);