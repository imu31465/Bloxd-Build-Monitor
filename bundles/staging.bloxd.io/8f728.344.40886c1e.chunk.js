export const id = 344;
export const ids = [344];
export const modules = {
  59340: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      lodPixelShader: () => uc
    });
    var Vc = nc(37923);
    const Ic = "lodPixelShader",
      rB = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch(textureSampler,ivec2(vUV*vec2(textureDimensions)),int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    Vc.b.ShadersStore[Ic] || (Vc.b.ShadersStore[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);