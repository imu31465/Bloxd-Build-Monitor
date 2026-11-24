export const id = 337;
export const ids = [337];
export const modules = {
  42449: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Sp
    });
    var Op = cp(40062);
    const op = "clipPlaneFragment",
      Ip = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
    const Sp = {
      name: op,
      shader: Ip
    }
  },
  42436: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Sp
    });
    var Op = cp(40062);
    const op = "clipPlaneFragmentDeclaration",
      Ip = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
    const Sp = {
      name: op,
      shader: Ip
    }
  },
  42476: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp
    });
    var Op = cp(40062);
    const op = "fogFragment",
      Ip = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
    const Sp = {
      name: op,
      shader: Ip
    }
  },
  42443: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp
    });
    var Op = cp(40062);
    const op = "fogFragmentDeclaration",
      Ip = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
    const Sp = {
      name: op,
      shader: Ip
    }
  },
  42863: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      colorPixelShader: () => Ap
    });
    var Op = cp(40062),
      op = cp(42436),
      Ip = cp(42443),
      Sp = cp(42449),
      xp = cp(42476);
    const Lp = "colorPixelShader",
      Yp = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    Op.b.ShadersStore[Lp] || (Op.b.ShadersStore[Lp] = Yp);
    const Dp = [op.e, Ip.b, Sp.d, xp.b];
    for (const Pp of Dp) Op.b.IncludesShadersStore[Pp.name] || (Op.b.IncludesShadersStore[Pp.name] = Pp.shader);
    const Ap = {
      name: Lp,
      shader: Yp
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);