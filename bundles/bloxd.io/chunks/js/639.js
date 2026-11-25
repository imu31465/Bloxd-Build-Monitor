export const id = 639;
export const ids = [639];
export const modules = {
  44681: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => aM
    });
    var OM = iM(40964);
    const SM = "clipPlaneVertex",
      jM = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
    const aM = {
      name: SM,
      shader: jM
    }
  },
  44600: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM
    });
    var OM = iM(40964);
    const SM = "clipPlaneVertexDeclaration",
      jM = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
    const aM = {
      name: SM,
      shader: jM
    }
  },
  44687: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM
    });
    var OM = iM(40964);
    const SM = "fogVertex",
      jM = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
    const aM = {
      name: SM,
      shader: jM
    }
  },
  44605: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => aM
    });
    var OM = iM(40964);
    const SM = "fogVertexDeclaration",
      jM = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
    const aM = {
      name: SM,
      shader: jM
    }
  },
  44633: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM
    });
    var OM = iM(40964);
    const SM = "logDepthDeclaration",
      jM = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
    const aM = {
      name: SM,
      shader: jM
    }
  },
  44707: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM
    });
    var OM = iM(40964);
    const SM = "logDepthVertex",
      jM = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
    const aM = {
      name: SM,
      shader: jM
    }
  },
  63957: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      skyVertexShader: () => HM
    });
    var OM = iM(40964),
      SM = iM(44633),
      jM = iM(44600),
      aM = iM(44605),
      PM = iM(44681),
      nM = iM(44707),
      QM = iM(44687);
    const zM = "skyVertexShader",
      LM = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    OM.e.ShadersStore[zM] || (OM.e.ShadersStore[zM] = LM);
    const mM = [SM.b, jM.d, aM.e, PM.e, nM.d, QM.d];
    for (const hM of mM) OM.e.IncludesShadersStore[hM.name] || (OM.e.IncludesShadersStore[hM.name] = hM.shader);
    const HM = {
      name: zM,
      shader: LM
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);