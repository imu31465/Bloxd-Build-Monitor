export const id = 650;
export const ids = [650];
export const modules = {
  54180: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR
    });
    var yR = GR(41387);
    const tR = "clipPlaneFragment",
      uR = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
    const ZR = {
      name: tR,
      shader: uR
    }
  },
  54173: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR
    });
    var yR = GR(41387);
    const tR = "clipPlaneFragmentDeclaration",
      uR = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
    const ZR = {
      name: tR,
      shader: uR
    }
  },
  54212: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => ZR
    });
    var yR = GR(41387);
    const tR = "fogFragment",
      uR = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
    const ZR = {
      name: tR,
      shader: uR
    }
  },
  54178: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR
    });
    var yR = GR(41387);
    const tR = "fogFragmentDeclaration",
      uR = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
    const ZR = {
      name: tR,
      shader: uR
    }
  },
  54573: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      colorPixelShader: () => KR
    });
    var yR = GR(41387),
      tR = GR(54173),
      uR = GR(54178),
      ZR = GR(54180),
      qR = GR(54212);
    const iR = "colorPixelShader",
      fR = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    yR.b.ShadersStore[iR] || (yR.b.ShadersStore[iR] = fR);
    const VR = [tR.b, uR.b, ZR.d, qR.e];
    for (const wR of VR) yR.b.IncludesShadersStore[wR.name] || (yR.b.IncludesShadersStore[wR.name] = wR.shader);
    const KR = {
      name: iR,
      shader: fR
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);