export const id = 367;
export const ids = [367];
export const modules = {
  61483: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      lodPixelShader: () => xS
    });
    var tS = gS(39899);
    const bS = "lodPixelShader",
      XS = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch(textureSampler,ivec2(vUV*vec2(textureDimensions)),int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    tS.c.ShadersStore[bS] || (tS.c.ShadersStore[bS] = XS);
    const xS = {
      name: bS,
      shader: XS
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);