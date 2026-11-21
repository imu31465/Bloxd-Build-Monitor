export const id = 307;
export const ids = [307];
export const modules = {
  41424: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "bumpVertex",
      oQ = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tangentUpdated.w;vTBN=mat3(finalWorld)*mat3(tbnTangent,tbnBitangent,tbnNormal);\n#endif\n#endif\n";
    LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  },
  41334: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "bumpVertexDeclaration",
      oQ = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
    LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  },
  41294: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ
    });
    var LQ = wQ(39251);
    wQ(41280), wQ(41285);
    const qQ = "defaultUboDeclaration",
      oQ = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;vec2 vDiffuseInfos;vec2 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec2 vSpecularInfos;vec3 vBumpInfos;mat4 diffuseMatrix;mat4 ambientMatrix;mat4 opacityMatrix;mat4 emissiveMatrix;mat4 lightmapMatrix;mat4 specularMatrix;mat4 bumpMatrix;vec2 vTangentSpaceParams;float pointSize;float alphaCutOff;mat4 refractionMatrix;vec4 vRefractionInfos;vec3 vRefractionPosition;vec3 vRefractionSize;vec4 vSpecularColor;vec3 vEmissiveColor;vec4 vDiffuseColor;vec3 vAmbientColor;vec4 cameraInfo;vec4 vTextureRepetitionHexTilingParams;vec2 vReflectionInfos;mat4 reflectionMatrix;vec3 vReflectionPosition;vec3 vReflectionSize;\n#define ADDITIONAL_UBO_DECLARATION\n};\n#include<sceneUboDeclaration>\n#include<meshUboDeclaration>\n";
    LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  },
  41271: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      defaultVertexShader: () => PQ
    });
    var LQ = wQ(39251),
      qQ = wQ(41276);
    const oQ = "defaultVertexDeclaration",
      DQ = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nuniform mat4 view;\n#ifdef DIFFUSE\nuniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform mat4 ambientMatrix;uniform vec2 vAmbientInfos;\n#endif\n#ifdef OPACITY\nuniform mat4 opacityMatrix;uniform vec2 vOpacityInfos;\n#endif\n#ifdef EMISSIVE\nuniform vec2 vEmissiveInfos;uniform mat4 emissiveMatrix;\n#endif\n#ifdef LIGHTMAP\nuniform vec2 vLightmapInfos;uniform mat4 lightmapMatrix;\n#endif\n#if defined(SPECULAR) && defined(SPECULARTERM)\nuniform vec2 vSpecularInfos;uniform mat4 specularMatrix;\n#endif\n#ifdef BUMP\nuniform vec3 vBumpInfos;uniform mat4 bumpMatrix;\n#endif\n#ifdef REFLECTION\nuniform mat4 reflectionMatrix;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\n#ifdef DETAIL\nuniform vec4 vDetailInfos;uniform mat4 detailMatrix;\n#endif\nuniform vec4 cameraInfo;uniform vec4 vTextureRepetitionHexTilingParams;\n#include<decalVertexDeclaration>\n#define ADDITIONAL_VERTEX_DECLARATION\n";
    LQ.c.IncludesShadersStore[oQ] || (LQ.c.IncludesShadersStore[oQ] = DQ);
    const kQ = {
      name: oQ,
      shader: DQ
    };
    var vQ = wQ(41280),
      mQ = wQ(41285),
      uQ = wQ(41294),
      HQ = wQ(41297),
      bQ = wQ(41300),
      YQ = wQ(41302),
      xQ = wQ(41309),
      AQ = wQ(41311),
      tQ = wQ(41315),
      eQ = wQ(41322),
      MQ = wQ(41329),
      GQ = wQ(41334),
      pQ = wQ(41343),
      cQ = wQ(41347),
      CQ = wQ(41351),
      SQ = wQ(41357),
      iQ = wQ(41361),
      WQ = wQ(41364),
      RQ = wQ(41368),
      OQ = wQ(41376),
      sQ = wQ(41383),
      rQ = wQ(41385),
      IQ = wQ(41387),
      UQ = wQ(41396),
      NQ = wQ(41404),
      TQ = wQ(41413),
      KQ = wQ(41422),
      zQ = wQ(41424),
      lQ = wQ(41428),
      jQ = wQ(41431),
      aQ = wQ(41438),
      XQ = wQ(41446);
    const fQ = "pointCloudVertex",
      VQ = "#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n";
    LQ.c.IncludesShadersStore[fQ] || (LQ.c.IncludesShadersStore[fQ] = VQ);
    const hQ = {
      name: fQ,
      shader: VQ
    };
    var JQ = wQ(41449);
    const EQ = "defaultVertexShader",
      nQ = "#define CUSTOM_VERTEX_EXTENSION\n#include<__decl__defaultVertex>\n#define CUSTOM_VERTEX_BEGIN\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef TANGENT\nattribute vec4 tangent;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#include<uvAttributeDeclaration>[2..7]\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<helperFunctions>\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\n#include<prePassVertexDeclaration>\n#include<mainUVVaryingDeclaration>[1..7]\n#include<samplerVertexDeclaration>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse)\n#include<samplerVertexDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail)\n#include<samplerVertexDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient)\n#include<samplerVertexDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity)\n#include<samplerVertexDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive)\n#include<samplerVertexDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap)\n#if defined(SPECULARTERM)\n#include<samplerVertexDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular)\n#endif\n#include<samplerVertexDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump)\n#include<samplerVertexDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal)\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vec4 vColor;\n#endif\n#include<bumpVertexDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightVxFragment>[0..maxSimultaneousLights]\n#include<morphTargetsVertexGlobalDeclaration>\n#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vec3 vPositionUVW;\n#endif\n#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)\nvarying vec3 vDirectionW;\n#endif\n#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\nvarying float vViewDepth;\n#endif\n#include<logDepthDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvec3 positionUpdated=position;\n#ifdef NORMAL\nvec3 normalUpdated=normal;\n#endif\n#ifdef TANGENT\nvec4 tangentUpdated=tangent;\n#endif\n#ifdef UV1\nvec2 uvUpdated=uv;\n#endif\n#ifdef UV2\nvec2 uv2Updated=uv2;\n#endif\n#ifdef VERTEXCOLOR\nvec4 colorUpdated=color;\n#endif\n#include<morphTargetsVertexGlobal>\n#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]\n#ifdef REFLECTIONMAP_SKYBOX\nvPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n#include<instancesVertex>\n#if defined(PREPASS) && ((defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)) && !defined(BONES_VELOCITY_ENABLED)\nvCurrentPosition=viewProjection*finalWorld*vec4(positionUpdated,1.0);vPreviousPosition=previousViewProjection*finalPreviousWorld*vec4(positionUpdated,1.0);\n#endif\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nvec4 worldPos=finalWorld*vec4(positionUpdated,1.0);\n#ifdef NORMAL\nmat3 normalWorld=mat3(finalWorld);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvNormalW=normalUpdated/vec3(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vNormalW=normalize(normalWorld*vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transposeMat3(inverseMat3(normalWorld));\n#endif\nvNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\n#ifdef MULTIVIEW\nif (gl_ViewID_OVR==0u) {gl_Position=viewProjection*worldPos;} else {gl_Position=viewProjectionR*worldPos;}\n#else\ngl_Position=viewProjection*worldPos;\n#endif\nvPositionW=vec3(worldPos);\n#ifdef PREPASS\n#include<prePassVertex>\n#endif\n#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)\nvDirectionW=normalize(vec3(finalWorld*vec4(positionUpdated,0.0)));\n#endif\n#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\n#ifdef RIGHT_HANDED\nvViewDepth=-(view*worldPos).z;\n#else\nvViewDepth=(view*worldPos).z;\n#endif\n#endif\n#ifndef UV1\nvec2 uvUpdated=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2Updated=vec2(0.,0.);\n#endif\n#ifdef MAINUV1\nvMainUV1=uvUpdated;\n#endif\n#ifdef MAINUV2\nvMainUV2=uv2Updated;\n#endif\n#include<uvVariableDeclaration>[3..7]\n#include<samplerVertexImplementation>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse,_MATRIXNAME_,diffuse,_INFONAME_,DiffuseInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_MATRIXNAME_,detail,_INFONAME_,DetailInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_MATRIXNAME_,ambient,_INFONAME_,AmbientInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_MATRIXNAME_,opacity,_INFONAME_,OpacityInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_MATRIXNAME_,emissive,_INFONAME_,EmissiveInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_MATRIXNAME_,lightmap,_INFONAME_,LightmapInfos.x)\n#if defined(SPECULARTERM)\n#include<samplerVertexImplementation>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_MATRIXNAME_,specular,_INFONAME_,SpecularInfos.x)\n#endif\n#include<samplerVertexImplementation>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_MATRIXNAME_,bump,_INFONAME_,BumpInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_MATRIXNAME_,decal,_INFONAME_,DecalInfos.x)\n#include<bumpVertex>\n#include<clipPlaneVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#include<vertexColorMixing>\n#include<pointCloudVertex>\n#include<logDepthVertex>\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    LQ.c.ShadersStore[EQ] || (LQ.c.ShadersStore[EQ] = nQ);
    const gQ = [qQ.b, kQ, vQ.d, mQ.c, uQ.b, HQ.d, bQ.e, YQ.d, xQ.d, AQ.c, tQ.b, eQ.b, MQ.d, GQ.b, pQ.c, cQ.e, CQ.d, SQ.d, iQ.e, WQ.d, RQ.c, OQ.e, sQ.b, rQ.d, IQ.e, UQ.d, NQ.d, TQ.e, KQ.e, zQ.e, lQ.e, jQ.b, aQ.d, XQ.c, hQ, JQ.c];
    for (const ZQ of gQ) LQ.c.IncludesShadersStore[ZQ.name] || (LQ.c.IncludesShadersStore[ZQ.name] = ZQ.shader);
    const PQ = {
      name: EQ,
      shader: nQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);