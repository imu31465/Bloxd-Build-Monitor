export const id = 332;
export const ids = [332];
export const modules = {
  42179: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk
    });
    var Xk = Ik(39837);
    const Tk = "clipPlaneFragment",
      ik = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    Xk.b.IncludesShadersStore[Tk] || (Xk.b.IncludesShadersStore[Tk] = ik);
    const yk = {
      name: Tk,
      shader: ik
    }
  },
  42167: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk
    });
    var Xk = Ik(39837);
    const Tk = "clipPlaneFragmentDeclaration",
      ik = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    Xk.b.IncludesShadersStore[Tk] || (Xk.b.IncludesShadersStore[Tk] = ik);
    const yk = {
      name: Tk,
      shader: ik
    }
  },
  42212: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => yk
    });
    var Xk = Ik(39837);
    const Tk = "fogFragment",
      ik = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    Xk.b.IncludesShadersStore[Tk] || (Xk.b.IncludesShadersStore[Tk] = ik);
    const yk = {
      name: Tk,
      shader: ik
    }
  },
  42174: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => yk
    });
    var Xk = Ik(39837);
    const Tk = "fogFragmentDeclaration",
      ik = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    Xk.b.IncludesShadersStore[Tk] || (Xk.b.IncludesShadersStore[Tk] = ik);
    const yk = {
      name: Tk,
      shader: ik
    }
  },
  42574: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      colorPixelShader: () => tk
    });
    var Xk = Ik(39837),
      Tk = Ik(42167),
      ik = Ik(42174),
      yk = Ik(42179),
      lk = Ik(42212);
    const ak = "colorPixelShader",
      qk = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    Xk.b.ShadersStore[ak] || (Xk.b.ShadersStore[ak] = qk);
    const Lk = [Tk.e, ik.b, yk.e, lk.d];
    for (const Zk of Lk) Xk.b.IncludesShadersStore[Zk.name] || (Xk.b.IncludesShadersStore[Zk.name] = Zk.shader);
    const tk = {
      name: ak,
      shader: qk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);