export const id = 308;
export const ids = [308];
export const modules = {
  40508: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "clipPlaneVertex",
      fy = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    Uy.e.IncludesShadersStore[hy] || (Uy.e.IncludesShadersStore[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  },
  40430: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "clipPlaneVertexDeclaration",
      fy = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    Uy.e.IncludesShadersStore[hy] || (Uy.e.IncludesShadersStore[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  },
  40517: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "fogVertex",
      fy = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    Uy.e.IncludesShadersStore[hy] || (Uy.e.IncludesShadersStore[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  },
  40433: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "fogVertexDeclaration",
      fy = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    Uy.e.IncludesShadersStore[hy] || (Uy.e.IncludesShadersStore[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  },
  40456: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "logDepthDeclaration",
      fy = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    Uy.e.IncludesShadersStore[hy] || (Uy.e.IncludesShadersStore[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  },
  40536: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "logDepthVertex",
      fy = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    Uy.e.IncludesShadersStore[hy] || (Uy.e.IncludesShadersStore[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  },
  59748: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      skyVertexShader: () => qb
    });
    var Uy = Wy(38319),
      hy = Wy(40456),
      fy = Wy(40430),
      Zy = Wy(40433),
      cb = Wy(40508),
      Py = Wy(40536),
      oy = Wy(40517);
    const By = "skyVertexShader",
      Ky = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Uy.e.ShadersStore[By] || (Uy.e.ShadersStore[By] = Ky);
    const ey = [hy.d, fy.d, Zy.d, cb.b, Py.b, oy.e];
    for (const sy of ey) Uy.e.IncludesShadersStore[sy.name] || (Uy.e.IncludesShadersStore[sy.name] = sy.shader);
    const qb = {
      name: By,
      shader: Ky
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);