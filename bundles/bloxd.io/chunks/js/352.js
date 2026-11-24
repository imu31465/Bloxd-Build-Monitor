export const id = 352;
export const ids = [352];
export const modules = {
  42677: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Sp
    });
    var Op = cp(40062);
    const op = "clipPlaneVertex",
      Ip = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
    const Sp = {
      name: op,
      shader: Ip
    }
  },
  42565: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Sp
    });
    var Op = cp(40062);
    const op = "clipPlaneVertexDeclaration",
      Ip = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
    const Sp = {
      name: op,
      shader: Ip
    }
  },
  42680: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Sp
    });
    var Op = cp(40062);
    const op = "fogVertex",
      Ip = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
    const Sp = {
      name: op,
      shader: Ip
    }
  },
  42567: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Sp
    });
    var Op = cp(40062);
    const op = "fogVertexDeclaration",
      Ip = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
    const Sp = {
      name: op,
      shader: Ip
    }
  },
  42598: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Sp
    });
    var Op = cp(40062);
    const op = "logDepthDeclaration",
      Ip = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
    const Sp = {
      name: op,
      shader: Ip
    }
  },
  42697: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp
    });
    var Op = cp(40062);
    const op = "logDepthVertex",
      Ip = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
    const Sp = {
      name: op,
      shader: Ip
    }
  },
  61433: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      skyVertexShaderWGSL: () => Wp
    });
    var Op = cp(40062),
      op = cp(42598),
      Ip = cp(42565),
      Sp = cp(42567),
      xp = cp(42677),
      Lp = cp(42697),
      Yp = cp(42680);
    const Dp = "skyVertexShader",
      Ap = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Op.b.ShadersStoreWGSL[Dp] || (Op.b.ShadersStoreWGSL[Dp] = Ap);
    const Pp = [op.d, Ip.c, Sp.c, xp.e, Lp.b, Yp.d];
    for (const yp of Pp) Op.b.IncludesShadersStoreWGSL[yp.name] || (Op.b.IncludesShadersStoreWGSL[yp.name] = yp.shader);
    const Wp = {
      name: Dp,
      shader: Ap
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);