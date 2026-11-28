export const id = 651;
export const ids = [651];
export const modules = {
  54395: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Vb
    });
    var eb = Mb(41518);
    const Hb = "clipPlaneFragment",
      pb = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    eb.e.IncludesShadersStore[Hb] || (eb.e.IncludesShadersStore[Hb] = pb);
    const Vb = {
      name: Hb,
      shader: pb
    }
  },
  54383: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Vb
    });
    var eb = Mb(41518);
    const Hb = "clipPlaneFragmentDeclaration",
      pb = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    eb.e.IncludesShadersStore[Hb] || (eb.e.IncludesShadersStore[Hb] = pb);
    const Vb = {
      name: Hb,
      shader: pb
    }
  },
  54425: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb
    });
    var eb = Mb(41518);
    const Hb = "fogFragment",
      pb = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    eb.e.IncludesShadersStore[Hb] || (eb.e.IncludesShadersStore[Hb] = pb);
    const Vb = {
      name: Hb,
      shader: pb
    }
  },
  54386: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Vb
    });
    var eb = Mb(41518);
    const Hb = "fogFragmentDeclaration",
      pb = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    eb.e.IncludesShadersStore[Hb] || (eb.e.IncludesShadersStore[Hb] = pb);
    const Vb = {
      name: Hb,
      shader: pb
    }
  },
  54802: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      colorPixelShader: () => Ob
    });
    var eb = Mb(41518),
      Hb = Mb(54383),
      pb = Mb(54386),
      Vb = Mb(54395),
      gb = Mb(54425);
    const lb = "colorPixelShader",
      Lb = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    eb.e.ShadersStore[lb] || (eb.e.ShadersStore[lb] = Lb);
    const Ib = [Hb.c, pb.c, Vb.e, gb.b];
    for (const Ub of Ib) eb.e.IncludesShadersStore[Ub.name] || (eb.e.IncludesShadersStore[Ub.name] = Ub.shader);
    const Ob = {
      name: lb,
      shader: Lb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);