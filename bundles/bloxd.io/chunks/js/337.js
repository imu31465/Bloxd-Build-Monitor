export const id = 337;
export const ids = [337];
export const modules = {
  41469: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Eb
    });
    var Ab = Ub(38943);
    const Mb = "clipPlaneVertex",
      Tb = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    Ab.d.IncludesShadersStoreWGSL[Mb] || (Ab.d.IncludesShadersStoreWGSL[Mb] = Tb);
    const Eb = {
      name: Mb,
      shader: Tb
    }
  },
  41376: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Eb
    });
    var Ab = Ub(38943);
    const Mb = "clipPlaneVertexDeclaration",
      Tb = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    Ab.d.IncludesShadersStoreWGSL[Mb] || (Ab.d.IncludesShadersStoreWGSL[Mb] = Tb);
    const Eb = {
      name: Mb,
      shader: Tb
    }
  },
  41478: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Eb
    });
    var Ab = Ub(38943);
    const Mb = "fogVertex",
      Tb = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    Ab.d.IncludesShadersStoreWGSL[Mb] || (Ab.d.IncludesShadersStoreWGSL[Mb] = Tb);
    const Eb = {
      name: Mb,
      shader: Tb
    }
  },
  41378: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb
    });
    var Ab = Ub(38943);
    const Mb = "fogVertexDeclaration",
      Tb = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    Ab.d.IncludesShadersStoreWGSL[Mb] || (Ab.d.IncludesShadersStoreWGSL[Mb] = Tb);
    const Eb = {
      name: Mb,
      shader: Tb
    }
  },
  41403: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Eb
    });
    var Ab = Ub(38943);
    const Mb = "logDepthDeclaration",
      Tb = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    Ab.d.IncludesShadersStoreWGSL[Mb] || (Ab.d.IncludesShadersStoreWGSL[Mb] = Tb);
    const Eb = {
      name: Mb,
      shader: Tb
    }
  },
  41487: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb
    });
    var Ab = Ub(38943);
    const Mb = "logDepthVertex",
      Tb = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    Ab.d.IncludesShadersStoreWGSL[Mb] || (Ab.d.IncludesShadersStoreWGSL[Mb] = Tb);
    const Eb = {
      name: Mb,
      shader: Tb
    }
  },
  60319: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      skyVertexShaderWGSL: () => Xb
    });
    var Ab = Ub(38943),
      Mb = Ub(41403),
      Tb = Ub(41376),
      Eb = Ub(41378),
      Yb = Ub(41469),
      Bb = Ub(41487),
      eb = Ub(41478);
    const vb = "skyVertexShader",
      Lb = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Ab.d.ShadersStoreWGSL[vb] || (Ab.d.ShadersStoreWGSL[vb] = Lb);
    const Pb = [Mb.b, Tb.c, Eb.d, Yb.e, Bb.d, eb.c];
    for (const jb of Pb) Ab.d.IncludesShadersStoreWGSL[jb.name] || (Ab.d.IncludesShadersStoreWGSL[jb.name] = jb.shader);
    const Xb = {
      name: vb,
      shader: Lb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);