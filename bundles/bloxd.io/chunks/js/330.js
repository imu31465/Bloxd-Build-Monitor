export const id = 330;
export const ids = [330];
export const modules = {
  42049: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS
    });
    var tS = gS(39899);
    const bS = "clipPlaneVertex",
      XS = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    tS.c.IncludesShadersStore[bS] || (tS.c.IncludesShadersStore[bS] = XS);
    const xS = {
      name: bS,
      shader: XS
    }
  },
  41972: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS
    });
    var tS = gS(39899);
    const bS = "clipPlaneVertexDeclaration",
      XS = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    tS.c.IncludesShadersStore[bS] || (tS.c.IncludesShadersStore[bS] = XS);
    const xS = {
      name: bS,
      shader: XS
    }
  },
  42057: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS
    });
    var tS = gS(39899);
    const bS = "fogVertex",
      XS = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    tS.c.IncludesShadersStore[bS] || (tS.c.IncludesShadersStore[bS] = XS);
    const xS = {
      name: bS,
      shader: XS
    }
  },
  41976: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS
    });
    var tS = gS(39899);
    const bS = "fogVertexDeclaration",
      XS = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    tS.c.IncludesShadersStore[bS] || (tS.c.IncludesShadersStore[bS] = XS);
    const xS = {
      name: bS,
      shader: XS
    }
  },
  41992: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS
    });
    var tS = gS(39899);
    const bS = "logDepthDeclaration",
      XS = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    tS.c.IncludesShadersStore[bS] || (tS.c.IncludesShadersStore[bS] = XS);
    const xS = {
      name: bS,
      shader: XS
    }
  },
  42076: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS
    });
    var tS = gS(39899);
    const bS = "logDepthVertex",
      XS = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    tS.c.IncludesShadersStore[bS] || (tS.c.IncludesShadersStore[bS] = XS);
    const xS = {
      name: bS,
      shader: XS
    }
  },
  61377: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      skyVertexShader: () => aS
    });
    var tS = gS(39899),
      bS = gS(41992),
      XS = gS(41972),
      xS = gS(41976),
      NS = gS(42049),
      qS = gS(42076),
      uS = gS(42057);
    const IS = "skyVertexShader",
      fS = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    tS.c.ShadersStore[IS] || (tS.c.ShadersStore[IS] = fS);
    const kS = [bS.b, XS.b, xS.e, NS.e, qS.b, uS.c];
    for (const KS of kS) tS.c.IncludesShadersStore[KS.name] || (tS.c.IncludesShadersStore[KS.name] = KS.shader);
    const aS = {
      name: IS,
      shader: fS
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);