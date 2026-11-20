export const id = 320;
export const ids = [320];
export const modules = {
  41429: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Tb
    });
    var kb = sb(39267);
    const Wb = "clipPlaneVertex",
      ab = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    kb.d.IncludesShadersStore[Wb] || (kb.d.IncludesShadersStore[Wb] = ab);
    const Tb = {
      name: Wb,
      shader: ab
    }
  },
  41351: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb
    });
    var kb = sb(39267);
    const Wb = "clipPlaneVertexDeclaration",
      ab = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    kb.d.IncludesShadersStore[Wb] || (kb.d.IncludesShadersStore[Wb] = ab);
    const Tb = {
      name: Wb,
      shader: ab
    }
  },
  41433: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Tb
    });
    var kb = sb(39267);
    const Wb = "fogVertex",
      ab = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    kb.d.IncludesShadersStore[Wb] || (kb.d.IncludesShadersStore[Wb] = ab);
    const Tb = {
      name: Wb,
      shader: ab
    }
  },
  41355: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb
    });
    var kb = sb(39267);
    const Wb = "fogVertexDeclaration",
      ab = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    kb.d.IncludesShadersStore[Wb] || (kb.d.IncludesShadersStore[Wb] = ab);
    const Tb = {
      name: Wb,
      shader: ab
    }
  },
  41381: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Tb
    });
    var kb = sb(39267);
    const Wb = "logDepthDeclaration",
      ab = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    kb.d.IncludesShadersStore[Wb] || (kb.d.IncludesShadersStore[Wb] = ab);
    const Tb = {
      name: Wb,
      shader: ab
    }
  },
  41451: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb
    });
    var kb = sb(39267);
    const Wb = "logDepthVertex",
      ab = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    kb.d.IncludesShadersStore[Wb] || (kb.d.IncludesShadersStore[Wb] = ab);
    const Tb = {
      name: Wb,
      shader: ab
    }
  },
  60636: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      skyVertexShader: () => nb
    });
    var kb = sb(39267),
      Wb = sb(41381),
      ab = sb(41351),
      Tb = sb(41355),
      Ub = sb(41429),
      Ib = sb(41451),
      Hb = sb(41433);
    const fb = "skyVertexShader",
      Mb = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    kb.d.ShadersStore[fb] || (kb.d.ShadersStore[fb] = Mb);
    const Xb = [Wb.b, ab.e, Tb.d, Ub.b, Ib.d, Hb.b];
    for (const mb of Xb) kb.d.IncludesShadersStore[mb.name] || (kb.d.IncludesShadersStore[mb.name] = mb.shader);
    const nb = {
      name: fb,
      shader: Mb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);