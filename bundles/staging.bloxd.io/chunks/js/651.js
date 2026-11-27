export const id = 651;
export const ids = [651];
export const modules = {
  54664: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr
    });
    var Zr = Qr(41743);
    const Wr = "clipPlaneFragment",
      ar = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
    const jr = {
      name: Wr,
      shader: ar
    }
  },
  54649: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => jr
    });
    var Zr = Qr(41743);
    const Wr = "clipPlaneFragmentDeclaration",
      ar = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
    const jr = {
      name: Wr,
      shader: ar
    }
  },
  54703: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => jr
    });
    var Zr = Qr(41743);
    const Wr = "fogFragment",
      ar = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
    const jr = {
      name: Wr,
      shader: ar
    }
  },
  54658: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => jr
    });
    var Zr = Qr(41743);
    const Wr = "fogFragmentDeclaration",
      ar = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
    const jr = {
      name: Wr,
      shader: ar
    }
  },
  55084: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      colorPixelShader: () => xr
    });
    var Zr = Qr(41743),
      Wr = Qr(54649),
      ar = Qr(54658),
      jr = Qr(54664),
      Ir = Qr(54703);
    const fr = "colorPixelShader",
      Er = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    Zr.e.ShadersStore[fr] || (Zr.e.ShadersStore[fr] = Er);
    const pr = [Wr.b, ar.e, jr.d, Ir.e];
    for (const mr of pr) Zr.e.IncludesShadersStore[mr.name] || (Zr.e.IncludesShadersStore[mr.name] = mr.shader);
    const xr = {
      name: fr,
      shader: Er
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);