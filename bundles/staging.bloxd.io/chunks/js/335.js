export const id = 335;
export const ids = [335];
export const modules = {
  42324: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu
    });
    var su = ju(40127);
    const Uu = "clipPlaneVertex",
      Zu = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    su.b.IncludesShadersStore[Uu] || (su.b.IncludesShadersStore[Uu] = Zu);
    const Xu = {
      name: Uu,
      shader: Zu
    }
  },
  42239: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Xu
    });
    var su = ju(40127);
    const Uu = "clipPlaneVertexDeclaration",
      Zu = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    su.b.IncludesShadersStore[Uu] || (su.b.IncludesShadersStore[Uu] = Zu);
    const Xu = {
      name: Uu,
      shader: Zu
    }
  },
  42326: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Xu
    });
    var su = ju(40127);
    const Uu = "fogVertex",
      Zu = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    su.b.IncludesShadersStore[Uu] || (su.b.IncludesShadersStore[Uu] = Zu);
    const Xu = {
      name: Uu,
      shader: Zu
    }
  },
  42242: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu
    });
    var su = ju(40127);
    const Uu = "fogVertexDeclaration",
      Zu = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    su.b.IncludesShadersStore[Uu] || (su.b.IncludesShadersStore[Uu] = Zu);
    const Xu = {
      name: Uu,
      shader: Zu
    }
  },
  42269: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu
    });
    var su = ju(40127);
    const Uu = "logDepthDeclaration",
      Zu = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    su.b.IncludesShadersStore[Uu] || (su.b.IncludesShadersStore[Uu] = Zu);
    const Xu = {
      name: Uu,
      shader: Zu
    }
  },
  42345: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu
    });
    var su = ju(40127);
    const Uu = "logDepthVertex",
      Zu = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    su.b.IncludesShadersStore[Uu] || (su.b.IncludesShadersStore[Uu] = Zu);
    const Xu = {
      name: Uu,
      shader: Zu
    }
  },
  61559: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      skyVertexShader: () => Nu
    });
    var su = ju(40127),
      Uu = ju(42269),
      Zu = ju(42239),
      Xu = ju(42242),
      lu = ju(42324),
      qu = ju(42345),
      fu = ju(42326);
    const Cu = "skyVertexShader",
      bu = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    su.b.ShadersStore[Cu] || (su.b.ShadersStore[Cu] = bu);
    const cu = [Uu.b, Zu.d, Xu.b, lu.b, qu.b, fu.d];
    for (const Ou of cu) su.b.IncludesShadersStore[Ou.name] || (su.b.IncludesShadersStore[Ou.name] = Ou.shader);
    const Nu = {
      name: Cu,
      shader: bu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);