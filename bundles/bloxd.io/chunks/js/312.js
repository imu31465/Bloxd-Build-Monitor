export const id = 312;
export const ids = [312];
export const modules = {
  40859: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => XJ
    });
    var FJ = ZJ(38658);
    const UJ = "clipPlaneFragment",
      eJ = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    FJ.b.IncludesShadersStore[UJ] || (FJ.b.IncludesShadersStore[UJ] = eJ);
    const XJ = {
      name: UJ,
      shader: eJ
    }
  },
  40848: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => XJ
    });
    var FJ = ZJ(38658);
    const UJ = "clipPlaneFragmentDeclaration",
      eJ = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    FJ.b.IncludesShadersStore[UJ] || (FJ.b.IncludesShadersStore[UJ] = eJ);
    const XJ = {
      name: UJ,
      shader: eJ
    }
  },
  40897: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => XJ
    });
    var FJ = ZJ(38658);
    const UJ = "fogFragment",
      eJ = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    FJ.b.IncludesShadersStore[UJ] || (FJ.b.IncludesShadersStore[UJ] = eJ);
    const XJ = {
      name: UJ,
      shader: eJ
    }
  },
  40857: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ
    });
    var FJ = ZJ(38658);
    const UJ = "fogFragmentDeclaration",
      eJ = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    FJ.b.IncludesShadersStore[UJ] || (FJ.b.IncludesShadersStore[UJ] = eJ);
    const XJ = {
      name: UJ,
      shader: eJ
    }
  },
  41230: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      colorPixelShader: () => hJ
    });
    var FJ = ZJ(38658),
      UJ = ZJ(40848),
      eJ = ZJ(40857),
      XJ = ZJ(40859),
      AJ = ZJ(40897);
    const qJ = "colorPixelShader",
      jJ = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    FJ.b.ShadersStore[qJ] || (FJ.b.ShadersStore[qJ] = jJ);
    const YJ = [UJ.b, eJ.d, XJ.c, AJ.c];
    for (const DJ of YJ) FJ.b.IncludesShadersStore[DJ.name] || (FJ.b.IncludesShadersStore[DJ.name] = DJ.shader);
    const hJ = {
      name: qJ,
      shader: jJ
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);