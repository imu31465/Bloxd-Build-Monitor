export const id = 639;
export const ids = [639];
export const modules = {
  45189: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => oB
    });
    var YB = GB(40864);
    const DB = "clipPlaneVertex",
      QB = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
    const oB = {
      name: DB,
      shader: QB
    }
  },
  45090: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB
    });
    var YB = GB(40864);
    const DB = "clipPlaneVertexDeclaration",
      QB = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
    const oB = {
      name: DB,
      shader: QB
    }
  },
  45198: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => oB
    });
    var YB = GB(40864);
    const DB = "fogVertex",
      QB = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
    const oB = {
      name: DB,
      shader: QB
    }
  },
  45096: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB
    });
    var YB = GB(40864);
    const DB = "fogVertexDeclaration",
      QB = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
    const oB = {
      name: DB,
      shader: QB
    }
  },
  45133: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB
    });
    var YB = GB(40864);
    const DB = "logDepthDeclaration",
      QB = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
    const oB = {
      name: DB,
      shader: QB
    }
  },
  45213: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB
    });
    var YB = GB(40864);
    const DB = "logDepthVertex",
      QB = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
    const oB = {
      name: DB,
      shader: QB
    }
  },
  63930: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      skyVertexShader: () => lB
    });
    var YB = GB(40864),
      DB = GB(45133),
      QB = GB(45090),
      oB = GB(45096),
      jB = GB(45189),
      yB = GB(45213),
      JB = GB(45198);
    const MB = "skyVertexShader",
      PB = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    YB.b.ShadersStore[MB] || (YB.b.ShadersStore[MB] = PB);
    const zB = [DB.e, QB.e, oB.c, jB.b, yB.d, JB.b];
    for (const pB of zB) YB.b.IncludesShadersStore[pB.name] || (YB.b.IncludesShadersStore[pB.name] = pB.shader);
    const lB = {
      name: MB,
      shader: PB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);