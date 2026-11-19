export const id = 337;
export const ids = [337];
export const modules = {
  41504: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => fD
    });
    var ID = cD(39003);
    const pD = "clipPlaneVertex",
      iD = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    ID.e.IncludesShadersStoreWGSL[pD] || (ID.e.IncludesShadersStoreWGSL[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41403: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD
    });
    var ID = cD(39003);
    const pD = "clipPlaneVertexDeclaration",
      iD = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    ID.e.IncludesShadersStoreWGSL[pD] || (ID.e.IncludesShadersStoreWGSL[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41512: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD
    });
    var ID = cD(39003);
    const pD = "fogVertex",
      iD = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    ID.e.IncludesShadersStoreWGSL[pD] || (ID.e.IncludesShadersStoreWGSL[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41407: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD
    });
    var ID = cD(39003);
    const pD = "fogVertexDeclaration",
      iD = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    ID.e.IncludesShadersStoreWGSL[pD] || (ID.e.IncludesShadersStoreWGSL[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41437: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD
    });
    var ID = cD(39003);
    const pD = "logDepthDeclaration",
      iD = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    ID.e.IncludesShadersStoreWGSL[pD] || (ID.e.IncludesShadersStoreWGSL[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41532: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => fD
    });
    var ID = cD(39003);
    const pD = "logDepthVertex",
      iD = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    ID.e.IncludesShadersStoreWGSL[pD] || (ID.e.IncludesShadersStoreWGSL[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  60460: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      skyVertexShaderWGSL: () => MD
    });
    var ID = cD(39003),
      pD = cD(41437),
      iD = cD(41403),
      fD = cD(41407),
      bD = cD(41504),
      QD = cD(41532),
      wD = cD(41512);
    const SD = "skyVertexShader",
      BD = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    ID.e.ShadersStoreWGSL[SD] || (ID.e.ShadersStoreWGSL[SD] = BD);
    const yD = [pD.c, iD.c, fD.b, bD.e, QD.d, wD.c];
    for (const tD of yD) ID.e.IncludesShadersStoreWGSL[tD.name] || (ID.e.IncludesShadersStoreWGSL[tD.name] = tD.shader);
    const MD = {
      name: SD,
      shader: BD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);