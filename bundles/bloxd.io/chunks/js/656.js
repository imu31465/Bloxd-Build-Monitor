export const id = 656;
export const ids = [656];
export const modules = {
  45050: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM
    });
    var OM = iM(40964);
    const SM = "clipPlaneVertex",
      jM = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
    const aM = {
      name: SM,
      shader: jM
    }
  },
  44953: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM
    });
    var OM = iM(40964);
    const SM = "clipPlaneVertexDeclaration",
      jM = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
    const aM = {
      name: SM,
      shader: jM
    }
  },
  45056: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => aM
    });
    var OM = iM(40964);
    const SM = "fogVertex",
      jM = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
    const aM = {
      name: SM,
      shader: jM
    }
  },
  44958: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM
    });
    var OM = iM(40964);
    const SM = "fogVertexDeclaration",
      jM = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
    const aM = {
      name: SM,
      shader: jM
    }
  },
  44987: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM
    });
    var OM = iM(40964);
    const SM = "logDepthDeclaration",
      jM = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
    const aM = {
      name: SM,
      shader: jM
    }
  },
  45070: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => aM
    });
    var OM = iM(40964);
    const SM = "logDepthVertex",
      jM = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    OM.e.IncludesShadersStoreWGSL[SM] || (OM.e.IncludesShadersStoreWGSL[SM] = jM);
    const aM = {
      name: SM,
      shader: jM
    }
  },
  63968: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      skyVertexShaderWGSL: () => HM
    });
    var OM = iM(40964),
      SM = iM(44987),
      jM = iM(44953),
      aM = iM(44958),
      PM = iM(45050),
      nM = iM(45070),
      QM = iM(45056);
    const zM = "skyVertexShader",
      LM = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    OM.e.ShadersStoreWGSL[zM] || (OM.e.ShadersStoreWGSL[zM] = LM);
    const mM = [SM.c, jM.d, aM.b, PM.c, nM.e, QM.e];
    for (const hM of mM) OM.e.IncludesShadersStoreWGSL[hM.name] || (OM.e.IncludesShadersStoreWGSL[hM.name] = hM.shader);
    const HM = {
      name: zM,
      shader: LM
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);