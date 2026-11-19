export const id = 359;
export const ids = [359];
export const modules = {
  60566: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      lodPixelShader: () => lz
    });
    var Ez = bz(39033);
    const nz = "lodPixelShader",
      iz = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch(textureSampler,ivec2(vUV*vec2(textureDimensions)),int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    Ez.e.ShadersStore[nz] || (Ez.e.ShadersStore[nz] = iz);
    const lz = {
      name: nz,
      shader: iz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);