export const id = 648;
export const ids = [648];
export const modules = {
  54055: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR
    });
    var yR = GR(41387);
    const tR = "clipPlaneVertex",
      uR = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
    const ZR = {
      name: tR,
      shader: uR
    }
  },
  53978: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR
    });
    var yR = GR(41387);
    const tR = "clipPlaneVertexDeclaration",
      uR = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
    const ZR = {
      name: tR,
      shader: uR
    }
  },
  54059: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR
    });
    var yR = GR(41387);
    const tR = "fogVertex",
      uR = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
    const ZR = {
      name: tR,
      shader: uR
    }
  },
  53980: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR
    });
    var yR = GR(41387);
    const tR = "fogVertexDeclaration",
      uR = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
    const ZR = {
      name: tR,
      shader: uR
    }
  },
  54004: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR
    });
    var yR = GR(41387);
    const tR = "logDepthDeclaration",
      uR = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
    const ZR = {
      name: tR,
      shader: uR
    }
  },
  54073: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR
    });
    var yR = GR(41387);
    const tR = "logDepthVertex",
      uR = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
    const ZR = {
      name: tR,
      shader: uR
    }
  },
  64186: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      skyVertexShader: () => rR
    });
    var yR = GR(41387),
      tR = GR(54004),
      uR = GR(53978),
      ZR = GR(53980),
      qR = GR(54055),
      iR = GR(54073),
      fR = GR(54059);
    const VR = "skyVertexShader",
      KR = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    yR.b.ShadersStore[VR] || (yR.b.ShadersStore[VR] = KR);
    const wR = [tR.d, uR.b, ZR.c, qR.c, iR.d, fR.c];
    for (const eR of wR) yR.b.IncludesShadersStore[eR.name] || (yR.b.IncludesShadersStore[eR.name] = eR.shader);
    const rR = {
      name: VR,
      shader: KR
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);