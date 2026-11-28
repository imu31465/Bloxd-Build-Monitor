export const id = 651;
export const ids = [651];
export const modules = {
  54593: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd
    });
    var Wd = md(41785);
    const Fd = "clipPlaneFragment",
      Rd = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    Wd.e.IncludesShadersStore[Fd] || (Wd.e.IncludesShadersStore[Fd] = Rd);
    const Xd = {
      name: Fd,
      shader: Rd
    }
  },
  54582: (dd, Od, md) => {
    md.d(Od, {
      e: () => Xd
    });
    var Wd = md(41785);
    const Fd = "clipPlaneFragmentDeclaration",
      Rd = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    Wd.e.IncludesShadersStore[Fd] || (Wd.e.IncludesShadersStore[Fd] = Rd);
    const Xd = {
      name: Fd,
      shader: Rd
    }
  },
  54632: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd
    });
    var Wd = md(41785);
    const Fd = "fogFragment",
      Rd = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    Wd.e.IncludesShadersStore[Fd] || (Wd.e.IncludesShadersStore[Fd] = Rd);
    const Xd = {
      name: Fd,
      shader: Rd
    }
  },
  54590: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd
    });
    var Wd = md(41785);
    const Fd = "fogFragmentDeclaration",
      Rd = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    Wd.e.IncludesShadersStore[Fd] || (Wd.e.IncludesShadersStore[Fd] = Rd);
    const Xd = {
      name: Fd,
      shader: Rd
    }
  },
  55004: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      colorPixelShader: () => td
    });
    var Wd = md(41785),
      Fd = md(54582),
      Rd = md(54590),
      Xd = md(54593),
      Kd = md(54632);
    const hd = "colorPixelShader",
      vd = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    Wd.e.ShadersStore[hd] || (Wd.e.ShadersStore[hd] = vd);
    const Qd = [Fd.e, Rd.b, Xd.c, Kd.b];
    for (const od of Qd) Wd.e.IncludesShadersStore[od.name] || (Wd.e.IncludesShadersStore[od.name] = od.shader);
    const td = {
      name: hd,
      shader: vd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);