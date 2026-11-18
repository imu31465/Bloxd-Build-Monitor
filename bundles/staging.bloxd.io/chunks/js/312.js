export const id = 312;
export const ids = [312];
export const modules = {
  40873: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => lB
    });
    var VB = dB(38595);
    const yB = "clipPlaneFragment",
      pB = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    VB.e.IncludesShadersStore[yB] || (VB.e.IncludesShadersStore[yB] = pB);
    const lB = {
      name: yB,
      shader: pB
    }
  },
  40866: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB
    });
    var VB = dB(38595);
    const yB = "clipPlaneFragmentDeclaration",
      pB = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    VB.e.IncludesShadersStore[yB] || (VB.e.IncludesShadersStore[yB] = pB);
    const lB = {
      name: yB,
      shader: pB
    }
  },
  40911: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => lB
    });
    var VB = dB(38595);
    const yB = "fogFragment",
      pB = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    VB.e.IncludesShadersStore[yB] || (VB.e.IncludesShadersStore[yB] = pB);
    const lB = {
      name: yB,
      shader: pB
    }
  },
  40870: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB
    });
    var VB = dB(38595);
    const yB = "fogFragmentDeclaration",
      pB = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    VB.e.IncludesShadersStore[yB] || (VB.e.IncludesShadersStore[yB] = pB);
    const lB = {
      name: yB,
      shader: pB
    }
  },
  41260: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      colorPixelShader: () => kB
    });
    var VB = dB(38595),
      yB = dB(40866),
      pB = dB(40870),
      lB = dB(40873),
      JB = dB(40911);
    const YB = "colorPixelShader",
      gB = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    VB.e.ShadersStore[YB] || (VB.e.ShadersStore[YB] = gB);
    const oB = [yB.e, pB.c, lB.b, JB.b];
    for (const LB of oB) VB.e.IncludesShadersStore[LB.name] || (VB.e.IncludesShadersStore[LB.name] = LB.shader);
    const kB = {
      name: YB,
      shader: gB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);