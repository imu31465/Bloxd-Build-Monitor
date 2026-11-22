export const id = 331;
export const ids = [331];
export const modules = {
  41733: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => bk
    });
    var Dk = ik(39412);
    const fk = "clipPlaneFragment",
      Sk = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
    const bk = {
      name: fk,
      shader: Sk
    }
  },
  41718: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => bk
    });
    var Dk = ik(39412);
    const fk = "clipPlaneFragmentDeclaration",
      Sk = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
    const bk = {
      name: fk,
      shader: Sk
    }
  },
  41760: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => bk
    });
    var Dk = ik(39412);
    const fk = "fogFragment",
      Sk = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
    const bk = {
      name: fk,
      shader: Sk
    }
  },
  41724: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => bk
    });
    var Dk = ik(39412);
    const fk = "fogFragmentDeclaration",
      Sk = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
    const bk = {
      name: fk,
      shader: Sk
    }
  },
  42174: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      colorPixelShader: () => Kk
    });
    var Dk = ik(39412),
      fk = ik(41718),
      Sk = ik(41724),
      bk = ik(41733),
      rk = ik(41760);
    const Pk = "colorPixelShader",
      mk = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    Dk.d.ShadersStore[Pk] || (Dk.d.ShadersStore[Pk] = mk);
    const Mk = [fk.d, Sk.e, bk.c, rk.d];
    for (const xk of Mk) Dk.d.IncludesShadersStore[xk.name] || (Dk.d.IncludesShadersStore[xk.name] = xk.shader);
    const Kk = {
      name: Pk,
      shader: mk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);