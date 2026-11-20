export const id = 323;
export const ids = [323];
export const modules = {
  41921: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => mq
    });
    var Yq = gq(39617);
    const lq = "clipPlaneFragment",
      Oq = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
    const mq = {
      name: lq,
      shader: Oq
    }
  },
  41905: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq
    });
    var Yq = gq(39617);
    const lq = "clipPlaneFragmentDeclaration",
      Oq = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
    const mq = {
      name: lq,
      shader: Oq
    }
  },
  41956: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => mq
    });
    var Yq = gq(39617);
    const lq = "fogFragment",
      Oq = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
    const mq = {
      name: lq,
      shader: Oq
    }
  },
  41912: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => mq
    });
    var Yq = gq(39617);
    const lq = "fogFragmentDeclaration",
      Oq = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
    const mq = {
      name: lq,
      shader: Oq
    }
  },
  42328: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      colorPixelShader: () => Bq
    });
    var Yq = gq(39617),
      lq = gq(41905),
      Oq = gq(41912),
      mq = gq(41921),
      xq = gq(41956);
    const Aq = "colorPixelShader",
      cq = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    Yq.d.ShadersStore[Aq] || (Yq.d.ShadersStore[Aq] = cq);
    const uq = [lq.d, Oq.e, mq.c, xq.e];
    for (const Wq of uq) Yq.d.IncludesShadersStore[Wq.name] || (Yq.d.IncludesShadersStore[Wq.name] = Wq.shader);
    const Bq = {
      name: Aq,
      shader: cq
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);