export const id = 323;
export const ids = [323];
export const modules = {
  41493: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv
    });
    var hv = Pv(39162);
    const Sv = "clipPlaneFragment",
      ev = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
    const gv = {
      name: Sv,
      shader: ev
    }
  },
  41478: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => gv
    });
    var hv = Pv(39162);
    const Sv = "clipPlaneFragmentDeclaration",
      ev = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
    const gv = {
      name: Sv,
      shader: ev
    }
  },
  41526: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => gv
    });
    var hv = Pv(39162);
    const Sv = "fogFragment",
      ev = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
    const gv = {
      name: Sv,
      shader: ev
    }
  },
  41487: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => gv
    });
    var hv = Pv(39162);
    const Sv = "fogFragmentDeclaration",
      ev = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
    const gv = {
      name: Sv,
      shader: ev
    }
  },
  41887: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      colorPixelShader: () => Tv
    });
    var hv = Pv(39162),
      Sv = Pv(41478),
      ev = Pv(41487),
      gv = Pv(41493),
      pv = Pv(41526);
    const dv = "colorPixelShader",
      Nv = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    hv.d.ShadersStore[dv] || (hv.d.ShadersStore[dv] = Nv);
    const lv = [Sv.d, ev.b, gv.c, pv.b];
    for (const Wv of lv) hv.d.IncludesShadersStore[Wv.name] || (hv.d.IncludesShadersStore[Wv.name] = Wv.shader);
    const Tv = {
      name: dv,
      shader: Nv
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);