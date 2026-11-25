export const id = 341;
export const ids = [341];
export const modules = {
  42439: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ
    });
    var wQ = XQ(40126);
    const qQ = "clipPlaneFragment",
      TQ = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
    const zQ = {
      name: qQ,
      shader: TQ
    }
  },
  42425: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => zQ
    });
    var wQ = XQ(40126);
    const qQ = "clipPlaneFragmentDeclaration",
      TQ = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
    const zQ = {
      name: qQ,
      shader: TQ
    }
  },
  42473: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ
    });
    var wQ = XQ(40126);
    const qQ = "fogFragment",
      TQ = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
    const zQ = {
      name: qQ,
      shader: TQ
    }
  },
  42433: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ
    });
    var wQ = XQ(40126);
    const qQ = "fogFragmentDeclaration",
      TQ = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
    const zQ = {
      name: qQ,
      shader: TQ
    }
  },
  42851: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      colorPixelShader: () => JQ
    });
    var wQ = XQ(40126),
      qQ = XQ(42425),
      TQ = XQ(42433),
      zQ = XQ(42439),
      sQ = XQ(42473);
    const FQ = "colorPixelShader",
      PQ = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    wQ.b.ShadersStore[FQ] || (wQ.b.ShadersStore[FQ] = PQ);
    const gQ = [qQ.c, TQ.e, zQ.e, sQ.b];
    for (const rQ of gQ) wQ.b.IncludesShadersStore[rQ.name] || (wQ.b.IncludesShadersStore[rQ.name] = rQ.shader);
    const JQ = {
      name: FQ,
      shader: PQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);