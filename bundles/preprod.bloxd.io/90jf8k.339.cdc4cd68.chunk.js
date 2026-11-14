export const id = 339;
export const ids = [339];
export const modules = {
  59164: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      lodPixelShader: () => hF
    });
    var CF = SF(37824);
    const AF = "lodPixelShader",
      uF = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch(textureSampler,ivec2(vUV*vec2(textureDimensions)),int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    CF.c.ShadersStore[AF] || (CF.c.ShadersStore[AF] = uF);
    const hF = {
      name: AF,
      shader: uF
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);