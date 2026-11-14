export const id = 300;
export const ids = [300];
export const modules = {
  39877: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => hF
    });
    var CF = SF(37824);
    const AF = "clipPlaneVertex",
      uF = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    CF.c.IncludesShadersStore[AF] || (CF.c.IncludesShadersStore[AF] = uF);
    const hF = {
      name: AF,
      shader: uF
    }
  },
  39785: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF
    });
    var CF = SF(37824);
    const AF = "clipPlaneVertexDeclaration",
      uF = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    CF.c.IncludesShadersStore[AF] || (CF.c.IncludesShadersStore[AF] = uF);
    const hF = {
      name: AF,
      shader: uF
    }
  },
  39881: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => hF
    });
    var CF = SF(37824);
    const AF = "fogVertex",
      uF = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    CF.c.IncludesShadersStore[AF] || (CF.c.IncludesShadersStore[AF] = uF);
    const hF = {
      name: AF,
      shader: uF
    }
  },
  39791: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF
    });
    var CF = SF(37824);
    const AF = "fogVertexDeclaration",
      uF = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    CF.c.IncludesShadersStore[AF] || (CF.c.IncludesShadersStore[AF] = uF);
    const hF = {
      name: AF,
      shader: uF
    }
  },
  39820: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => hF
    });
    var CF = SF(37824);
    const AF = "logDepthDeclaration",
      uF = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    CF.c.IncludesShadersStore[AF] || (CF.c.IncludesShadersStore[AF] = uF);
    const hF = {
      name: AF,
      shader: uF
    }
  },
  39897: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => hF
    });
    var CF = SF(37824);
    const AF = "logDepthVertex",
      uF = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    CF.c.IncludesShadersStore[AF] || (CF.c.IncludesShadersStore[AF] = uF);
    const hF = {
      name: AF,
      shader: uF
    }
  },
  58956: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      skyVertexShader: () => EF
    });
    var CF = SF(37824),
      AF = SF(39820),
      uF = SF(39785),
      hF = SF(39791),
      bW = SF(39877),
      dF = SF(39897),
      PF = SF(39881);
    const RF = "skyVertexShader",
      iW = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    CF.c.ShadersStore[RF] || (CF.c.ShadersStore[RF] = iW);
    const eF = [AF.d, uF.c, hF.c, bW.b, dF.e, PF.e];
    for (const QF of eF) CF.c.IncludesShadersStore[QF.name] || (CF.c.IncludesShadersStore[QF.name] = QF.shader);
    const EF = {
      name: RF,
      shader: iW
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);