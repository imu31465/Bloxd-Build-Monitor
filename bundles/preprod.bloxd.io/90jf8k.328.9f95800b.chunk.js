export const id = 328;
export const ids = [328];
export const modules = {
  58947: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      particlesPixelShader: () => qW
    });
    var CF = SF(37824),
      AF = SF(39913),
      uF = SF(39919),
      hF = SF(4e4),
      bW = SF(39969),
      dF = SF(39820),
      PF = SF(39743),
      RF = SF(39975),
      iW = SF(40005),
      eF = SF(40008),
      EF = SF(40037),
      QF = SF(40044);
    const rW = "geometryRenderingFragment",
      gW = "#ifdef PREPASS\n#if SCENE_MRT_COUNT>0\nfloat geometryCoverage=geometryColor.a>0.4 ? 1.0 : 0.0;\n#ifdef PREPASS_COLOR\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_COLOR_INDEX,geometryColor);\n#endif\n#ifdef PREPASS_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_POSITION_INDEX,vec4(geometryPositionW,geometryCoverage));\n#endif\n#ifdef PREPASS_LOCAL_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_LOCAL_POSITION_INDEX,vec4(geometryPositionL,geometryCoverage));\n#endif\n#ifdef PREPASS_DEPTH\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_DEPTH_INDEX,vec4(geometryViewDepth,0.0,0.0,geometryCoverage));\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_NORMALIZED_VIEW_DEPTH_INDEX,vec4(geometryNormalizedViewDepth,0.0,0.0,geometryCoverage));\n#endif\n#ifdef PREPASS_SCREENSPACE_DEPTH\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_SCREENSPACE_DEPTH_INDEX,vec4(gl_FragCoord.z,0.0,0.0,geometryCoverage));\n#endif\n#ifdef PREPASS_NORMAL\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_NORMAL_INDEX,vec4(geometryNormalV,geometryCoverage));\n#endif\n#ifdef PREPASS_WORLD_NORMAL\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_WORLD_NORMAL_INDEX,vec4(geometryNormalW*0.5+0.5,geometryCoverage));\n#endif\n#ifdef PREPASS_ALBEDO\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_ALBEDO_INDEX,vec4(geometryAlbedo,geometryCoverage));\n#endif\n#ifdef PREPASS_ALBEDO_SQRT\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_ALBEDO_SQRT_INDEX,vec4(sqrt(max(geometryAlbedo,vec3(0.0))),geometryCoverage));\n#endif\n#ifdef PREPASS_REFLECTIVITY\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_REFLECTIVITY_INDEX,vec4(0.0,0.0,0.0,geometryCoverage));\n#endif\n#ifdef PREPASS_IRRADIANCE\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_IRRADIANCE_INDEX,vec4(0.0,0.0,0.0,geometryCoverage));\n#endif\n#ifdef PREPASS_IRRADIANCE_LEGACY\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_IRRADIANCE_LEGACY_INDEX,vec4(0.0));\n#endif\n#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)\n#ifdef PREPASS_VELOCITY_ZERO\nvec2 geometryMotion=vec2(0.0);\n#else\nvec2 geometryMotion=0.5*(geometryCurrentPosition.xy/geometryCurrentPosition.w-geometryPreviousPosition.xy/geometryPreviousPosition.w);\n#endif\n#ifdef PREPASS_VELOCITY\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_VELOCITY_INDEX,vec4(pow(abs(geometryMotion),vec2(1.0/3.0))*sign(geometryMotion)*0.5+0.5,0.0,geometryCoverage));\n#endif\n#ifdef PREPASS_VELOCITY_LINEAR\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_VELOCITY_LINEAR_INDEX,vec4(-geometryMotion,0.0,geometryCoverage));\n#endif\n#endif\n#ifdef PREPASS_OBJECT_ID\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_OBJECT_ID_INDEX,encodeObjectId(objectId)*geometryCoverage);\n#endif\n#ifdef PREPASS_MESH_BLEND_TAG\nmeshBlendTagOutput=geometryCoverage>0.0 ? uvec4(uint(meshBlendTag),0u,0u,0u) : uvec4(0u);\n#endif\n#endif\n#endif\n";
    CF.c.IncludesShadersStore[rW] || (CF.c.IncludesShadersStore[rW] = gW);
    const tW = {
        name: rW,
        shader: gW
      },
      TF = "particlesPixelShader",
      aW = "#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\nvarying vec2 vUV;varying vec4 vColor;uniform vec4 textureMask;uniform sampler2D diffuseSampler;\n#ifdef PREPASS\nuniform float geometryZeroAlphaDiscard;\n#ifdef PREPASS_POSITION\nvarying vec3 vGeometryPositionW;\n#endif\n#ifdef PREPASS_WORLD_NORMAL\nvarying vec3 vGeometryNormalW;\n#endif\n#ifdef PREPASS_NORMAL\nvarying vec3 vGeometryNormalV;\n#endif\n#endif\n#define PREPASS_VELOCITY_ZERO\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<clipPlaneFragmentDeclaration>\n#include<imageProcessingDeclaration>\n#include<logDepthDeclaration>\n#include<helperFunctions>\n#include<imageProcessingFunctions>\n#ifdef RAMPGRADIENT\nvarying vec4 remapRanges;uniform sampler2D rampSampler;\n#endif\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec4 textureColor=texture2D(diffuseSampler,vUV);vec4 baseColor=(textureColor*textureMask+(vec4(1.,1.,1.,1.)-textureMask))*vColor;\n#ifdef PREPASS\nvec3 geometryAlbedo=toLinearSpace(baseColor.rgb);\n#endif\n#ifdef RAMPGRADIENT\nfloat alpha=baseColor.a;float remappedColorIndex=clamp((alpha-remapRanges.x)/remapRanges.y,0.0,1.0);vec4 rampColor=texture2D(rampSampler,vec2(1.0-remappedColorIndex,0.));baseColor.rgb*=rampColor.rgb;float finalAlpha=baseColor.a;baseColor.a=clamp((alpha*rampColor.a-remapRanges.z)/remapRanges.w,0.0,1.0);\n#endif\n#ifdef BLENDMULTIPLYMODE\nfloat sourceAlpha=vColor.a*textureColor.a;baseColor.rgb=baseColor.rgb*sourceAlpha+vec3(1.0)*(1.0-sourceAlpha);\n#endif\n#include<logDepthFragment>\n#include<fogFragment>(color,baseColor)\n#ifdef IMAGEPROCESSINGPOSTPROCESS\nbaseColor.rgb=toLinearSpace(baseColor.rgb);\n#else\n#ifdef IMAGEPROCESSING\nbaseColor.rgb=toLinearSpace(baseColor.rgb);baseColor=applyImageProcessing(baseColor);\n#endif\n#endif\ngl_FragColor=baseColor;\n#ifdef PREPASS\nvec4 geometryColor=gl_FragColor;if (geometryColor.a<=0.0 && geometryZeroAlphaDiscard>0.0) {discard;}\n#ifdef PREPASS_POSITION\nvec3 geometryPositionW=vGeometryPositionW;\n#endif\n#ifdef PREPASS_LOCAL_POSITION\nvec3 geometryPositionL=vPosition;\n#endif\n#ifdef PREPASS_DEPTH\nfloat geometryViewDepth=vViewPos.z;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nfloat geometryNormalizedViewDepth=vNormViewDepth;\n#endif\n#ifdef PREPASS_NORMAL\nvec3 geometryNormalV=normalize(vGeometryNormalV);\n#endif\n#ifdef PREPASS_WORLD_NORMAL\nvec3 geometryNormalW=normalize(vGeometryNormalW);\n#endif\n#include<geometryRenderingFragment>\n#endif\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    CF.c.ShadersStore[TF] || (CF.c.ShadersStore[TF] = aW);
    const kW = [AF.b, uF.c, hF.c, bW.c, dF.d, PF.c, RF.e, iW.d, eF.b, EF.e, QF.e, tW];
    for (const VF of kW) CF.c.IncludesShadersStore[VF.name] || (CF.c.IncludesShadersStore[VF.name] = VF.shader);
    const qW = {
      name: TF,
      shader: aW
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);