export const id = 322;
export const ids = [322];
export const modules = {
  41264: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Eb
    });
    var Ab = Ub(38943);
    const Mb = "clipPlaneFragment",
      Tb = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    Ab.d.IncludesShadersStore[Mb] || (Ab.d.IncludesShadersStore[Mb] = Tb);
    const Eb = {
      name: Mb,
      shader: Tb
    }
  },
  41253: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Eb
    });
    var Ab = Ub(38943);
    const Mb = "clipPlaneFragmentDeclaration",
      Tb = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    Ab.d.IncludesShadersStore[Mb] || (Ab.d.IncludesShadersStore[Mb] = Tb);
    const Eb = {
      name: Mb,
      shader: Tb
    }
  },
  41300: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb
    });
    var Ab = Ub(38943);
    const Mb = "fogFragment",
      Tb = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    Ab.d.IncludesShadersStore[Mb] || (Ab.d.IncludesShadersStore[Mb] = Tb);
    const Eb = {
      name: Mb,
      shader: Tb
    }
  },
  41258: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Eb
    });
    var Ab = Ub(38943);
    const Mb = "fogFragmentDeclaration",
      Tb = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    Ab.d.IncludesShadersStore[Mb] || (Ab.d.IncludesShadersStore[Mb] = Tb);
    const Eb = {
      name: Mb,
      shader: Tb
    }
  },
  41662: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      colorPixelShader: () => Lb
    });
    var Ab = Ub(38943),
      Mb = Ub(41253),
      Tb = Ub(41258),
      Eb = Ub(41264),
      Yb = Ub(41300);
    const Bb = "colorPixelShader",
      eb = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    Ab.d.ShadersStore[Bb] || (Ab.d.ShadersStore[Bb] = eb);
    const vb = [Mb.c, Tb.c, Eb.b, Yb.d];
    for (const Pb of vb) Ab.d.IncludesShadersStore[Pb.name] || (Ab.d.IncludesShadersStore[Pb.name] = Pb.shader);
    const Lb = {
      name: Bb,
      shader: eb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);