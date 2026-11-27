export const id = 653;
export const ids = [653];
export const modules = {
  54753: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr
    });
    var Zr = Qr(41743);
    const Wr = "instancesDeclaration",
      ar = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform world : mat4x4<f32>;\n#endif\n#if defined(VELOCITY) || defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nattribute previousWorld0 : vec4<f32>;attribute previousWorld1 : vec4<f32>;attribute previousWorld2 : vec4<f32>;attribute previousWorld3 : vec4<f32>;\n#ifdef THIN_INSTANCES\nuniform previousWorld : mat4x4<f32>;\n#endif\n#endif\n#else\n#if !defined(WORLD_UBO)\nuniform world : mat4x4<f32>;\n#endif\n#if defined(VELOCITY) || defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nuniform previousWorld : mat4x4<f32>;\n#endif\n#endif\n";
    Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
    const jr = {
      name: Wr,
      shader: ar
    }
  },
  54837: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr
    });
    var Zr = Qr(41743);
    const Wr = "instancesVertex",
      ar = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=mat4x4<f32>(\nvertexInputs.previousWorld0,vertexInputs.previousWorld1,\nvertexInputs.previousWorld2,vertexInputs.previousWorld3);\n#endif\n#ifdef THIN_INSTANCES\n#if !defined(WORLD_UBO)\nfinalWorld=uniforms.world*finalWorld;\n#else\nfinalWorld=mesh.world*finalWorld;\n#endif\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nfinalPreviousWorld=uniforms.previousWorld*finalPreviousWorld;\n#endif\n#endif\n#else\n#if !defined(WORLD_UBO)\nvar finalWorld=uniforms.world;\n#else\nvar finalWorld=mesh.world;\n#endif\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=uniforms.previousWorld;\n#endif\n#endif\n";
    Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
    const jr = {
      name: Wr,
      shader: ar
    }
  },
  54723: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr
    });
    var Zr = Qr(41743);
    const Wr = "meshUboDeclaration",
      ar = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
    Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
    const jr = {
      name: Wr,
      shader: ar
    }
  },
  54721: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => jr
    });
    var Zr = Qr(41743);
    const Wr = "sceneUboDeclaration",
      ar = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
    Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
    const jr = {
      name: Wr,
      shader: ar
    }
  },
  65186: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      greasedLineVertexShaderWGSL: () => xr
    });
    var Zr = Qr(41743),
      Wr = Qr(54753),
      ar = Qr(54721),
      jr = Qr(54723),
      Ir = Qr(54837);
    const fr = "greasedLineVertexShader",
      Er = "#include<instancesDeclaration>\n#include<sceneUboDeclaration>\n#include<meshUboDeclaration>\nattribute grl_widths: f32;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute grl_offsets: vec3f; \n#endif\nattribute grl_colorPointers: f32;attribute position: vec3f;varying grlCounters: f32;varying grlColorPointer: f32;\n#ifdef GREASED_LINE_CAMERA_FACING\nattribute grl_nextAndCounters: vec4f;attribute grl_previousAndSide: vec4f;uniform grlResolution: vec2f;uniform grlAspect: f32;uniform grlWidth: f32;uniform grlSizeAttenuation: f32;fn grlFix(i: vec4f,aspect: f32)->vec2f {var res=i.xy/i.w;res.x*=aspect;return res;}\n#else\nattribute grl_slopes: vec3f;attribute grl_counters: f32;\n#endif\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#include<instancesVertex>\nvertexOutputs.grlColorPointer=vertexInputs.grl_colorPointers;let grlMatrix: mat4x4f=scene.viewProjection*mesh.world ;\n#ifdef GREASED_LINE_CAMERA_FACING\nlet grlBaseWidth: f32=uniforms.grlWidth;let grlPrevious: vec3f=vertexInputs.grl_previousAndSide.xyz;let grlSide: f32=vertexInputs.grl_previousAndSide.w;let grlNext: vec3f=vertexInputs.grl_nextAndCounters.xyz;vertexOutputs.grlCounters=vertexInputs.grl_nextAndCounters.w;let grlWidth:f32=grlBaseWidth*vertexInputs.grl_widths;\n#ifdef GREASED_LINE_USE_OFFSETS\nvar grlPositionOffset: vec3f=vertexInputs.grl_offsets;\n#else\nvar grlPositionOffset=vec3f(0.);\n#endif\nlet positionUpdated: vec3f=vertexInputs.position+grlPositionOffset;let worldDir: vec3f=normalize(grlNext-grlPrevious);let nearPosition: vec3f=positionUpdated+(worldDir*0.001);let grlFinalPosition: vec4f=grlMatrix*vec4f(positionUpdated,1.0);let screenNearPos: vec4f=grlMatrix*vec4(nearPosition,1.0);let grlLinePosition: vec2f=grlFix(grlFinalPosition,uniforms.grlAspect);let grlLineNearPosition: vec2f=grlFix(screenNearPos,uniforms.grlAspect);let grlDir: vec2f=normalize(grlLineNearPosition-grlLinePosition);var grlNormal: vec4f=vec4f(-grlDir.y,grlDir.x,0.0,1.0);let grlHalfWidth: f32=0.5*grlWidth;\n#if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\ngrlNormal.x*=-grlHalfWidth;grlNormal.y*=-grlHalfWidth;\n#else\ngrlNormal.x*=grlHalfWidth;grlNormal.y*=grlHalfWidth;\n#endif\ngrlNormal*=scene.projection;if (uniforms.grlSizeAttenuation==1.) {grlNormal.x*=grlFinalPosition.w;grlNormal.y*=grlFinalPosition.w;let pr=vec4f(uniforms.grlResolution,0.0,1.0)*scene.projection;grlNormal.x/=pr.x;grlNormal.y/=pr.y;}\nvertexOutputs.position=vec4f(grlFinalPosition.xy+grlNormal.xy*grlSide,grlFinalPosition.z,grlFinalPosition.w);\n#else\nvertexOutputs.grlCounters=vertexInputs.grl_counters;\n#ifdef GREASED_LINE_USE_OFFSETS\nlet grlPositionOffset: vec3f=vertexInputs.grl_offsets;\n#else\nlet grlPositionOffset: vec3f=vec3f(0.0);\n#endif\nvertexOutputs.position=grlMatrix*vec4f(vertexInputs.position+grlPositionOffset+vertexInputs.grl_slopes*vertexInputs.grl_widths,1.0);\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Zr.e.ShadersStoreWGSL[fr] || (Zr.e.ShadersStoreWGSL[fr] = Er);
    const pr = [Wr.d, ar.e, jr.c, Ir.c];
    for (const mr of pr) Zr.e.IncludesShadersStoreWGSL[mr.name] || (Zr.e.IncludesShadersStoreWGSL[mr.name] = mr.shader);
    const xr = {
      name: fr,
      shader: Er
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);