export const id = 302;
export const ids = [302];
export const modules = {
  39617: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => AW
    });
    var wW = MW(37441);
    const CW = "clipPlaneFragment",
      zR = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    wW.c.IncludesShadersStore[CW] || (wW.c.IncludesShadersStore[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  },
  39606: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => AW
    });
    var wW = MW(37441);
    const CW = "clipPlaneFragmentDeclaration",
      zR = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    wW.c.IncludesShadersStore[CW] || (wW.c.IncludesShadersStore[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  },
  39654: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW
    });
    var wW = MW(37441);
    const CW = "fogFragment",
      zR = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    wW.c.IncludesShadersStore[CW] || (wW.c.IncludesShadersStore[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  },
  39610: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => AW
    });
    var wW = MW(37441);
    const CW = "fogFragmentDeclaration",
      zR = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    wW.c.IncludesShadersStore[CW] || (wW.c.IncludesShadersStore[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  },
  40001: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      colorPixelShader: () => BW
    });
    var wW = MW(37441),
      CW = MW(39606),
      zR = MW(39610),
      AW = MW(39617),
      bR = MW(39654);
    const yR = "colorPixelShader",
      NW = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    wW.c.ShadersStore[yR] || (wW.c.ShadersStore[yR] = NW);
    const eW = [CW.d, zR.b, AW.d, bR.c];
    for (const tR of eW) wW.c.IncludesShadersStore[tR.name] || (wW.c.IncludesShadersStore[tR.name] = tR.shader);
    const BW = {
      name: yR,
      shader: NW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);