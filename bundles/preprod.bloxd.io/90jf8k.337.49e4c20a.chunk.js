export const id = 337;
export const ids = [337];
export const modules = {
  59159: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      lod3DPixelShader: () => hF
    });
    var CF = SF(37824);
    const AF = "lod3DPixelShader",
      uF = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    CF.c.ShadersStore[AF] || (CF.c.ShadersStore[AF] = uF);
    const hF = {
      name: AF,
      shader: uF
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);