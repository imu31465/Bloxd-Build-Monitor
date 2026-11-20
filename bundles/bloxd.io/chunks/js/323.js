export const id = 323;
export const ids = [323];
export const modules = {
  41591: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ub
    });
    var Bb = hb(39308);
    const Ob = "clipPlaneFragment",
      Gb = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    Bb.e.IncludesShadersStore[Ob] || (Bb.e.IncludesShadersStore[Ob] = Gb);
    const Ub = {
      name: Ob,
      shader: Gb
    }
  },
  41575: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ub
    });
    var Bb = hb(39308);
    const Ob = "clipPlaneFragmentDeclaration",
      Gb = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    Bb.e.IncludesShadersStore[Ob] || (Bb.e.IncludesShadersStore[Ob] = Gb);
    const Ub = {
      name: Ob,
      shader: Gb
    }
  },
  41631: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ub
    });
    var Bb = hb(39308);
    const Ob = "fogFragment",
      Gb = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    Bb.e.IncludesShadersStore[Ob] || (Bb.e.IncludesShadersStore[Ob] = Gb);
    const Ub = {
      name: Ob,
      shader: Gb
    }
  },
  41583: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ub
    });
    var Bb = hb(39308);
    const Ob = "fogFragmentDeclaration",
      Gb = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    Bb.e.IncludesShadersStore[Ob] || (Bb.e.IncludesShadersStore[Ob] = Gb);
    const Ub = {
      name: Ob,
      shader: Gb
    }
  },
  41987: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      colorPixelShader: () => Hb
    });
    var Bb = hb(39308),
      Ob = hb(41575),
      Gb = hb(41583),
      Ub = hb(41591),
      Lb = hb(41631);
    const Yb = "colorPixelShader",
      Sb = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    Bb.e.ShadersStore[Yb] || (Bb.e.ShadersStore[Yb] = Sb);
    const ab = [Ob.e, Gb.c, Ub.e, Lb.c];
    for (const wb of ab) Bb.e.IncludesShadersStore[wb.name] || (Bb.e.IncludesShadersStore[wb.name] = wb.shader);
    const Hb = {
      name: Yb,
      shader: Sb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);