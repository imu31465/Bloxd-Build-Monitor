export const id = 305;
export const ids = [305];
export const modules = {
  39959: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => uc
    });
    var Vc = nc(37923);
    const Ic = "clipPlaneVertex",
      rB = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    Vc.b.IncludesShadersStore[Ic] || (Vc.b.IncludesShadersStore[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  39874: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(37923);
    const Ic = "clipPlaneVertexDeclaration",
      rB = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    Vc.b.IncludesShadersStore[Ic] || (Vc.b.IncludesShadersStore[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  39963: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => uc
    });
    var Vc = nc(37923);
    const Ic = "fogVertex",
      rB = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    Vc.b.IncludesShadersStore[Ic] || (Vc.b.IncludesShadersStore[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  39877: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => uc
    });
    var Vc = nc(37923);
    const Ic = "fogVertexDeclaration",
      rB = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    Vc.b.IncludesShadersStore[Ic] || (Vc.b.IncludesShadersStore[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  39902: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(37923);
    const Ic = "logDepthDeclaration",
      rB = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    Vc.b.IncludesShadersStore[Ic] || (Vc.b.IncludesShadersStore[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  39977: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(37923);
    const Ic = "logDepthVertex",
      rB = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    Vc.b.IncludesShadersStore[Ic] || (Vc.b.IncludesShadersStore[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  59149: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      skyVertexShader: () => fc
    });
    var Vc = nc(37923),
      Ic = nc(39902),
      rB = nc(39874),
      uc = nc(39877),
      sc = nc(39959),
      Mc = nc(39977),
      Pc = nc(39963);
    const qB = "skyVertexShader",
      Oc = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Vc.b.ShadersStore[qB] || (Vc.b.ShadersStore[qB] = Oc);
    const Tc = [Ic.e, rB.e, uc.d, sc.c, Mc.e, Pc.c];
    for (const mB of Tc) Vc.b.IncludesShadersStore[mB.name] || (Vc.b.IncludesShadersStore[mB.name] = mB.shader);
    const fc = {
      name: qB,
      shader: Oc
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);