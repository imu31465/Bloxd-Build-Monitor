export const id = 639;
export const ids = [639];
export const modules = {
  44932: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV
    });
    var JV = xV(41108);
    const YV = "clipPlaneVertex",
      UV = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    JV.d.IncludesShadersStore[YV] || (JV.d.IncludesShadersStore[YV] = UV);
    const yV = {
      name: YV,
      shader: UV
    }
  },
  44849: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV
    });
    var JV = xV(41108);
    const YV = "clipPlaneVertexDeclaration",
      UV = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    JV.d.IncludesShadersStore[YV] || (JV.d.IncludesShadersStore[YV] = UV);
    const yV = {
      name: YV,
      shader: UV
    }
  },
  44938: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV
    });
    var JV = xV(41108);
    const YV = "fogVertex",
      UV = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    JV.d.IncludesShadersStore[YV] || (JV.d.IncludesShadersStore[YV] = UV);
    const yV = {
      name: YV,
      shader: UV
    }
  },
  44855: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV
    });
    var JV = xV(41108);
    const YV = "fogVertexDeclaration",
      UV = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    JV.d.IncludesShadersStore[YV] || (JV.d.IncludesShadersStore[YV] = UV);
    const yV = {
      name: YV,
      shader: UV
    }
  },
  44880: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => yV
    });
    var JV = xV(41108);
    const YV = "logDepthDeclaration",
      UV = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    JV.d.IncludesShadersStore[YV] || (JV.d.IncludesShadersStore[YV] = UV);
    const yV = {
      name: YV,
      shader: UV
    }
  },
  44953: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => yV
    });
    var JV = xV(41108);
    const YV = "logDepthVertex",
      UV = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    JV.d.IncludesShadersStore[YV] || (JV.d.IncludesShadersStore[YV] = UV);
    const yV = {
      name: YV,
      shader: UV
    }
  },
  64357: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      skyVertexShader: () => rV
    });
    var JV = xV(41108),
      YV = xV(44880),
      UV = xV(44849),
      yV = xV(44855),
      pV = xV(44932),
      QV = xV(44953),
      nV = xV(44938);
    const wV = "skyVertexShader",
      ZV = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    JV.d.ShadersStore[wV] || (JV.d.ShadersStore[wV] = ZV);
    const vV = [YV.d, UV.c, yV.c, pV.e, QV.d, nV.e];
    for (const kV of vV) JV.d.IncludesShadersStore[kV.name] || (JV.d.IncludesShadersStore[kV.name] = kV.shader);
    const rV = {
      name: wV,
      shader: ZV
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);