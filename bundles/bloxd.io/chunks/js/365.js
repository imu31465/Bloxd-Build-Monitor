export const id = 365;
export const ids = [365];
export const modules = {
  61486: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      lod3DPixelShader: () => xm
    });
    var hm = fm(39960);
    const Am = "lod3DPixelShader",
      am = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    hm.e.ShadersStore[Am] || (hm.e.ShadersStore[Am] = am);
    const xm = {
      name: Am,
      shader: am
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);