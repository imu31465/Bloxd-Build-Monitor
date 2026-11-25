export const id = 335;
export const ids = [335];
export const modules = {
  42498: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG
    });
    var wG = ZG(40237);
    const SG = "clipPlaneVertex",
      LG = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
    const yG = {
      name: SG,
      shader: LG
    }
  },
  42401: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => yG
    });
    var wG = ZG(40237);
    const SG = "clipPlaneVertexDeclaration",
      LG = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
    const yG = {
      name: SG,
      shader: LG
    }
  },
  42501: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG
    });
    var wG = ZG(40237);
    const SG = "fogVertex",
      LG = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
    const yG = {
      name: SG,
      shader: LG
    }
  },
  42410: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG
    });
    var wG = ZG(40237);
    const SG = "fogVertexDeclaration",
      LG = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
    const yG = {
      name: SG,
      shader: LG
    }
  },
  42441: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG
    });
    var wG = ZG(40237);
    const SG = "logDepthDeclaration",
      LG = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
    const yG = {
      name: SG,
      shader: LG
    }
  },
  42511: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => yG
    });
    var wG = ZG(40237);
    const SG = "logDepthVertex",
      LG = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
    const yG = {
      name: SG,
      shader: LG
    }
  },
  61867: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      skyVertexShader: () => QG
    });
    var wG = ZG(40237),
      SG = ZG(42441),
      LG = ZG(42401),
      yG = ZG(42410),
      kG = ZG(42498),
      UG = ZG(42511),
      YG = ZG(42501);
    const VG = "skyVertexShader",
      pG = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    wG.e.ShadersStore[VG] || (wG.e.ShadersStore[VG] = pG);
    const fG = [SG.e, LG.c, yG.e, kG.e, UG.b, YG.e];
    for (const KG of fG) wG.e.IncludesShadersStore[KG.name] || (wG.e.IncludesShadersStore[KG.name] = KG.shader);
    const QG = {
      name: VG,
      shader: pG
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);