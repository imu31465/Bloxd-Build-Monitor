export const id = 323;
export const ids = [323];
export const modules = {
  41560: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "clipPlaneFragment",
      oQ = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  },
  41548: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "clipPlaneFragmentDeclaration",
      oQ = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  },
  41596: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "fogFragment",
      oQ = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  },
  41552: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "fogFragmentDeclaration",
      oQ = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  },
  41950: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      colorPixelShader: () => HQ
    });
    var LQ = wQ(39251),
      qQ = wQ(41548),
      oQ = wQ(41552),
      DQ = wQ(41560),
      kQ = wQ(41596);
    const vQ = "colorPixelShader",
      mQ = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    LQ.c.ShadersStore[vQ] || (LQ.c.ShadersStore[vQ] = mQ);
    const uQ = [qQ.e, oQ.b, DQ.c, kQ.c];
    for (const bQ of uQ) LQ.c.IncludesShadersStore[bQ.name] || (LQ.c.IncludesShadersStore[bQ.name] = bQ.shader);
    const HQ = {
      name: vQ,
      shader: mQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);