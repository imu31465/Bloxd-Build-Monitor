export const id = 650;
export const ids = [650];
export const modules = {
  54352: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => PW
    });
    var mW = OW(41392);
    const EW = "clipPlaneFragment",
      NW = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
    const PW = {
      name: EW,
      shader: NW
    }
  },
  54343: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => PW
    });
    var mW = OW(41392);
    const EW = "clipPlaneFragmentDeclaration",
      NW = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
    const PW = {
      name: EW,
      shader: NW
    }
  },
  54380: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW
    });
    var mW = OW(41392);
    const EW = "fogFragment",
      NW = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
    const PW = {
      name: EW,
      shader: NW
    }
  },
  54347: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW
    });
    var mW = OW(41392);
    const EW = "fogFragmentDeclaration",
      NW = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
    const PW = {
      name: EW,
      shader: NW
    }
  },
  54726: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      colorPixelShader: () => ZW
    });
    var mW = OW(41392),
      EW = OW(54343),
      NW = OW(54347),
      PW = OW(54352),
      LW = OW(54380);
    const cW = "colorPixelShader",
      wW = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    mW.c.ShadersStore[cW] || (mW.c.ShadersStore[cW] = wW);
    const tW = [EW.b, NW.c, PW.b, LW.d];
    for (const xW of tW) mW.c.IncludesShadersStore[xW.name] || (mW.c.IncludesShadersStore[xW.name] = xW.shader);
    const ZW = {
      name: cW,
      shader: wW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);