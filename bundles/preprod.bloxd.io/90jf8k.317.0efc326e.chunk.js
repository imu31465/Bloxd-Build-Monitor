export const id = 317;
export const ids = [317];
export const modules = {
  40227: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => hF
    });
    var CF = SF(37824);
    const AF = "clipPlaneVertex",
      uF = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    CF.c.IncludesShadersStoreWGSL[AF] || (CF.c.IncludesShadersStoreWGSL[AF] = uF);
    const hF = {
      name: AF,
      shader: uF
    }
  },
  40115: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF
    });
    var CF = SF(37824);
    const AF = "clipPlaneVertexDeclaration",
      uF = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    CF.c.IncludesShadersStoreWGSL[AF] || (CF.c.IncludesShadersStoreWGSL[AF] = uF);
    const hF = {
      name: AF,
      shader: uF
    }
  },
  40231: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF
    });
    var CF = SF(37824);
    const AF = "fogVertex",
      uF = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    CF.c.IncludesShadersStoreWGSL[AF] || (CF.c.IncludesShadersStoreWGSL[AF] = uF);
    const hF = {
      name: AF,
      shader: uF
    }
  },
  40119: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF
    });
    var CF = SF(37824);
    const AF = "fogVertexDeclaration",
      uF = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    CF.c.IncludesShadersStoreWGSL[AF] || (CF.c.IncludesShadersStoreWGSL[AF] = uF);
    const hF = {
      name: AF,
      shader: uF
    }
  },
  40140: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => hF
    });
    var CF = SF(37824);
    const AF = "logDepthDeclaration",
      uF = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    CF.c.IncludesShadersStoreWGSL[AF] || (CF.c.IncludesShadersStoreWGSL[AF] = uF);
    const hF = {
      name: AF,
      shader: uF
    }
  },
  40249: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => hF
    });
    var CF = SF(37824);
    const AF = "logDepthVertex",
      uF = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    CF.c.IncludesShadersStoreWGSL[AF] || (CF.c.IncludesShadersStoreWGSL[AF] = uF);
    const hF = {
      name: AF,
      shader: uF
    }
  },
  58966: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      skyVertexShaderWGSL: () => EF
    });
    var CF = SF(37824),
      AF = SF(40140),
      uF = SF(40115),
      hF = SF(40119),
      bW = SF(40227),
      dF = SF(40249),
      PF = SF(40231);
    const RF = "skyVertexShader",
      iW = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    CF.c.ShadersStoreWGSL[RF] || (CF.c.ShadersStoreWGSL[RF] = iW);
    const eF = [AF.d, uF.c, hF.c, bW.b, dF.d, PF.c];
    for (const QF of eF) CF.c.IncludesShadersStoreWGSL[QF.name] || (CF.c.IncludesShadersStoreWGSL[QF.name] = QF.shader);
    const EF = {
      name: RF,
      shader: iW
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);