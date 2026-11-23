export const id = 330;
export const ids = [330];
export const modules = {
  41875: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => nC
    });
    var QC = ZC(39674);
    const wC = "clipPlaneVertex",
      bC = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
    const nC = {
      name: wC,
      shader: bC
    }
  },
  41778: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => nC
    });
    var QC = ZC(39674);
    const wC = "clipPlaneVertexDeclaration",
      bC = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
    const nC = {
      name: wC,
      shader: bC
    }
  },
  41881: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => nC
    });
    var QC = ZC(39674);
    const wC = "fogVertex",
      bC = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
    const nC = {
      name: wC,
      shader: bC
    }
  },
  41787: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC
    });
    var QC = ZC(39674);
    const wC = "fogVertexDeclaration",
      bC = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
    const nC = {
      name: wC,
      shader: bC
    }
  },
  41816: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC
    });
    var QC = ZC(39674);
    const wC = "logDepthDeclaration",
      bC = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
    const nC = {
      name: wC,
      shader: bC
    }
  },
  41894: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => nC
    });
    var QC = ZC(39674);
    const wC = "logDepthVertex",
      bC = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
    const nC = {
      name: wC,
      shader: bC
    }
  },
  60990: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      skyVertexShader: () => MC
    });
    var QC = ZC(39674),
      wC = ZC(41816),
      bC = ZC(41778),
      nC = ZC(41787),
      fC = ZC(41875),
      oC = ZC(41894),
      qC = ZC(41881);
    const FC = "skyVertexShader",
      WC = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    QC.b.ShadersStore[FC] || (QC.b.ShadersStore[FC] = WC);
    const NC = [wC.c, bC.d, nC.c, fC.d, oC.d, qC.d];
    for (const gC of NC) QC.b.IncludesShadersStore[gC.name] || (QC.b.IncludesShadersStore[gC.name] = gC.shader);
    const MC = {
      name: FC,
      shader: WC
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);