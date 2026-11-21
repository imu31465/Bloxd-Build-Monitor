export const id = 323;
export const ids = [323];
export const modules = {
  42133: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd
    });
    var pd = kd(39829);
    const Nd = "clipPlaneFragment",
      Wd = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    pd.c.IncludesShadersStore[Nd] || (pd.c.IncludesShadersStore[Nd] = Wd);
    const Pd = {
      name: Nd,
      shader: Wd
    }
  },
  42121: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Pd
    });
    var pd = kd(39829);
    const Nd = "clipPlaneFragmentDeclaration",
      Wd = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    pd.c.IncludesShadersStore[Nd] || (pd.c.IncludesShadersStore[Nd] = Wd);
    const Pd = {
      name: Nd,
      shader: Wd
    }
  },
  42160: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd
    });
    var pd = kd(39829);
    const Nd = "fogFragment",
      Wd = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    pd.c.IncludesShadersStore[Nd] || (pd.c.IncludesShadersStore[Nd] = Wd);
    const Pd = {
      name: Nd,
      shader: Wd
    }
  },
  42128: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Pd
    });
    var pd = kd(39829);
    const Nd = "fogFragmentDeclaration",
      Wd = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    pd.c.IncludesShadersStore[Nd] || (pd.c.IncludesShadersStore[Nd] = Wd);
    const Pd = {
      name: Nd,
      shader: Wd
    }
  },
  42483: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      colorPixelShader: () => od
    });
    var pd = kd(39829),
      Nd = kd(42121),
      Wd = kd(42128),
      Pd = kd(42133),
      Zd = kd(42160);
    const gd = "colorPixelShader",
      Cd = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    pd.c.ShadersStore[gd] || (pd.c.ShadersStore[gd] = Cd);
    const Kd = [Nd.c, Wd.d, Pd.b, Zd.e];
    for (const ld of Kd) pd.c.IncludesShadersStore[ld.name] || (pd.c.IncludesShadersStore[ld.name] = ld.shader);
    const od = {
      name: gd,
      shader: Cd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);