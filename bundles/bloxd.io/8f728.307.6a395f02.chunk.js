export const id = 307;
export const ids = [307];
export const modules = {
  40108: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => uc
    });
    var Vc = nc(37923);
    const Ic = "clipPlaneFragment",
      rB = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    Vc.b.IncludesShadersStore[Ic] || (Vc.b.IncludesShadersStore[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  40093: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => uc
    });
    var Vc = nc(37923);
    const Ic = "clipPlaneFragmentDeclaration",
      rB = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    Vc.b.IncludesShadersStore[Ic] || (Vc.b.IncludesShadersStore[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  40151: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => uc
    });
    var Vc = nc(37923);
    const Ic = "fogFragment",
      rB = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    Vc.b.IncludesShadersStore[Ic] || (Vc.b.IncludesShadersStore[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  40102: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(37923);
    const Ic = "fogFragmentDeclaration",
      rB = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    Vc.b.IncludesShadersStore[Ic] || (Vc.b.IncludesShadersStore[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  40518: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      colorPixelShader: () => Oc
    });
    var Vc = nc(37923),
      Ic = nc(40093),
      rB = nc(40102),
      uc = nc(40108),
      sc = nc(40151);
    const Mc = "colorPixelShader",
      Pc = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    Vc.b.ShadersStore[Mc] || (Vc.b.ShadersStore[Mc] = Pc);
    const qB = [Ic.c, rB.e, uc.c, sc.c];
    for (const Tc of qB) Vc.b.IncludesShadersStore[Tc.name] || (Vc.b.IncludesShadersStore[Tc.name] = Tc.shader);
    const Oc = {
      name: Mc,
      shader: Pc
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);