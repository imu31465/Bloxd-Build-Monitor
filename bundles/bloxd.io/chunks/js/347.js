export const id = 347;
export const ids = [347];
export const modules = {
  42252: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => rD
    });
    var pD = wD(39776);
    const sD = "clipPlaneVertex",
      KD = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
    const rD = {
      name: sD,
      shader: KD
    }
  },
  42159: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => rD
    });
    var pD = wD(39776);
    const sD = "clipPlaneVertexDeclaration",
      KD = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
    const rD = {
      name: sD,
      shader: KD
    }
  },
  42255: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD
    });
    var pD = wD(39776);
    const sD = "fogVertex",
      KD = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
    const rD = {
      name: sD,
      shader: KD
    }
  },
  42168: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => rD
    });
    var pD = wD(39776);
    const sD = "fogVertexDeclaration",
      KD = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
    const rD = {
      name: sD,
      shader: KD
    }
  },
  42190: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => rD
    });
    var pD = wD(39776);
    const sD = "logDepthDeclaration",
      KD = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
    const rD = {
      name: sD,
      shader: KD
    }
  },
  42269: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => rD
    });
    var pD = wD(39776);
    const sD = "logDepthVertex",
      KD = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
    const rD = {
      name: sD,
      shader: KD
    }
  },
  61096: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      skyVertexShaderWGSL: () => fD
    });
    var pD = wD(39776),
      sD = wD(42190),
      KD = wD(42159),
      rD = wD(42168),
      LD = wD(42252),
      cD = wD(42269),
      gD = wD(42255);
    const RD = "skyVertexShader",
      AD = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    pD.e.ShadersStoreWGSL[RD] || (pD.e.ShadersStoreWGSL[RD] = AD);
    const UD = [sD.c, KD.b, rD.b, LD.b, cD.b, gD.d];
    for (const ID of UD) pD.e.IncludesShadersStoreWGSL[ID.name] || (pD.e.IncludesShadersStoreWGSL[ID.name] = ID.shader);
    const fD = {
      name: RD,
      shader: AD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);