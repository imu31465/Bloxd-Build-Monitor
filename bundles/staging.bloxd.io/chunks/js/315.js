export const id = 315;
export const ids = [315];
export const modules = {
  41597: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk
    });
    var Dk = ik(39412);
    const fk = "bumpVertex",
      Sk = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tangentUpdated.w;vTBN=mat3(finalWorld)*mat3(tbnTangent,tbnBitangent,tbnNormal);\n#endif\n#endif\n";
    Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
    const bk = {
      name: fk,
      shader: Sk
    }
  },
  41519: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => bk
    });
    var Dk = ik(39412);
    const fk = "bumpVertexDeclaration",
      Sk = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
    Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
    const bk = {
      name: fk,
      shader: Sk
    }
  },
  41471: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => bk
    });
    var Dk = ik(39412);
    ik(41462), ik(41467);
    const fk = "defaultUboDeclaration",
      Sk = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;vec2 vDiffuseInfos;vec2 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec2 vSpecularInfos;vec3 vBumpInfos;mat4 diffuseMatrix;mat4 ambientMatrix;mat4 opacityMatrix;mat4 emissiveMatrix;mat4 lightmapMatrix;mat4 specularMatrix;mat4 bumpMatrix;vec2 vTangentSpaceParams;float pointSize;float alphaCutOff;mat4 refractionMatrix;vec4 vRefractionInfos;vec3 vRefractionPosition;vec3 vRefractionSize;vec4 vSpecularColor;vec3 vEmissiveColor;vec4 vDiffuseColor;vec3 vAmbientColor;vec4 cameraInfo;vec4 vTextureRepetitionHexTilingParams;vec2 vReflectionInfos;mat4 reflectionMatrix;vec3 vReflectionPosition;vec3 vReflectionSize;\n#define ADDITIONAL_UBO_DECLARATION\n};\n#include<sceneUboDeclaration>\n#include<meshUboDeclaration>\n";
    Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
    const bk = {
      name: fk,
      shader: Sk
    }
  },
  41451: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      defaultVertexShader: () => Gk
    });
    var Dk = ik(39412),
      fk = ik(41455);
    const Sk = "defaultVertexDeclaration",
      bk = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nuniform mat4 view;\n#ifdef DIFFUSE\nuniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform mat4 ambientMatrix;uniform vec2 vAmbientInfos;\n#endif\n#ifdef OPACITY\nuniform mat4 opacityMatrix;uniform vec2 vOpacityInfos;\n#endif\n#ifdef EMISSIVE\nuniform vec2 vEmissiveInfos;uniform mat4 emissiveMatrix;\n#endif\n#ifdef LIGHTMAP\nuniform vec2 vLightmapInfos;uniform mat4 lightmapMatrix;\n#endif\n#if defined(SPECULAR) && defined(SPECULARTERM)\nuniform vec2 vSpecularInfos;uniform mat4 specularMatrix;\n#endif\n#ifdef BUMP\nuniform vec3 vBumpInfos;uniform mat4 bumpMatrix;\n#endif\n#ifdef REFLECTION\nuniform mat4 reflectionMatrix;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\n#ifdef DETAIL\nuniform vec4 vDetailInfos;uniform mat4 detailMatrix;\n#endif\nuniform vec4 cameraInfo;uniform vec4 vTextureRepetitionHexTilingParams;\n#include<decalVertexDeclaration>\n#define ADDITIONAL_VERTEX_DECLARATION\n";
    Dk.d.IncludesShadersStore[Sk] || (Dk.d.IncludesShadersStore[Sk] = bk);
    const rk = {
      name: Sk,
      shader: bk
    };
    var Pk = ik(41462),
      mk = ik(41467),
      Mk = ik(41471),
      Kk = ik(41477),
      xk = ik(41479),
      nk = ik(41487),
      Uk = ik(41494),
      Hk = ik(41501),
      wk = ik(41507),
      lk = ik(41513),
      pk = ik(41516),
      yk = ik(41519),
      Yk = ik(41522),
      Lk = ik(41524),
      Ck = ik(41528),
      Ak = ik(41534),
      jk = ik(41538),
      sk = ik(41546),
      dk = ik(41555),
      Vk = ik(41562),
      Fk = ik(41568),
      uk = ik(41570),
      qk = ik(41572),
      Ik = ik(41576),
      zk = ik(41582),
      Qk = ik(41591),
      vk = ik(41593),
      Ek = ik(41597),
      hk = ik(41606),
      ak = ik(41608),
      Wk = ik(41613),
      tk = ik(41617);
    const Xk = "pointCloudVertex",
      Bk = "#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n";
    Dk.d.IncludesShadersStore[Xk] || (Dk.d.IncludesShadersStore[Xk] = Bk);
    const ck = {
      name: Xk,
      shader: Bk
    };
    var Tk = ik(41624);
    const Zk = "defaultVertexShader",
      Ok = "#define CUSTOM_VERTEX_EXTENSION\n#include<__decl__defaultVertex>\n#define CUSTOM_VERTEX_BEGIN\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef TANGENT\nattribute vec4 tangent;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#include<uvAttributeDeclaration>[2..7]\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<helperFunctions>\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\n#include<prePassVertexDeclaration>\n#include<mainUVVaryingDeclaration>[1..7]\n#include<samplerVertexDeclaration>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse)\n#include<samplerVertexDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail)\n#include<samplerVertexDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient)\n#include<samplerVertexDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity)\n#include<samplerVertexDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive)\n#include<samplerVertexDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap)\n#if defined(SPECULARTERM)\n#include<samplerVertexDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular)\n#endif\n#include<samplerVertexDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump)\n#include<samplerVertexDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal)\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vec4 vColor;\n#endif\n#include<bumpVertexDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightVxFragment>[0..maxSimultaneousLights]\n#include<morphTargetsVertexGlobalDeclaration>\n#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vec3 vPositionUVW;\n#endif\n#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)\nvarying vec3 vDirectionW;\n#endif\n#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\nvarying float vViewDepth;\n#endif\n#include<logDepthDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvec3 positionUpdated=position;\n#ifdef NORMAL\nvec3 normalUpdated=normal;\n#endif\n#ifdef TANGENT\nvec4 tangentUpdated=tangent;\n#endif\n#ifdef UV1\nvec2 uvUpdated=uv;\n#endif\n#ifdef UV2\nvec2 uv2Updated=uv2;\n#endif\n#ifdef VERTEXCOLOR\nvec4 colorUpdated=color;\n#endif\n#include<morphTargetsVertexGlobal>\n#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]\n#ifdef REFLECTIONMAP_SKYBOX\nvPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n#include<instancesVertex>\n#if defined(PREPASS) && ((defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)) && !defined(BONES_VELOCITY_ENABLED)\nvCurrentPosition=viewProjection*finalWorld*vec4(positionUpdated,1.0);vPreviousPosition=previousViewProjection*finalPreviousWorld*vec4(positionUpdated,1.0);\n#endif\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nvec4 worldPos=finalWorld*vec4(positionUpdated,1.0);\n#ifdef NORMAL\nmat3 normalWorld=mat3(finalWorld);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvNormalW=normalUpdated/vec3(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vNormalW=normalize(normalWorld*vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transposeMat3(inverseMat3(normalWorld));\n#endif\nvNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\n#ifdef MULTIVIEW\nif (gl_ViewID_OVR==0u) {gl_Position=viewProjection*worldPos;} else {gl_Position=viewProjectionR*worldPos;}\n#else\ngl_Position=viewProjection*worldPos;\n#endif\nvPositionW=vec3(worldPos);\n#ifdef PREPASS\n#include<prePassVertex>\n#endif\n#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)\nvDirectionW=normalize(vec3(finalWorld*vec4(positionUpdated,0.0)));\n#endif\n#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\n#ifdef RIGHT_HANDED\nvViewDepth=-(view*worldPos).z;\n#else\nvViewDepth=(view*worldPos).z;\n#endif\n#endif\n#ifndef UV1\nvec2 uvUpdated=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2Updated=vec2(0.,0.);\n#endif\n#ifdef MAINUV1\nvMainUV1=uvUpdated;\n#endif\n#ifdef MAINUV2\nvMainUV2=uv2Updated;\n#endif\n#include<uvVariableDeclaration>[3..7]\n#include<samplerVertexImplementation>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse,_MATRIXNAME_,diffuse,_INFONAME_,DiffuseInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_MATRIXNAME_,detail,_INFONAME_,DetailInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_MATRIXNAME_,ambient,_INFONAME_,AmbientInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_MATRIXNAME_,opacity,_INFONAME_,OpacityInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_MATRIXNAME_,emissive,_INFONAME_,EmissiveInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_MATRIXNAME_,lightmap,_INFONAME_,LightmapInfos.x)\n#if defined(SPECULARTERM)\n#include<samplerVertexImplementation>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_MATRIXNAME_,specular,_INFONAME_,SpecularInfos.x)\n#endif\n#include<samplerVertexImplementation>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_MATRIXNAME_,bump,_INFONAME_,BumpInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_MATRIXNAME_,decal,_INFONAME_,DecalInfos.x)\n#include<bumpVertex>\n#include<clipPlaneVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#include<vertexColorMixing>\n#include<pointCloudVertex>\n#include<logDepthVertex>\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Dk.d.ShadersStore[Zk] || (Dk.d.ShadersStore[Zk] = Ok);
    const gk = [fk.b, rk, Pk.d, mk.d, Mk.d, Kk.d, xk.d, nk.b, Uk.d, Hk.d, wk.c, lk.d, pk.c, yk.c, Yk.e, Lk.e, Ck.d, Ak.c, jk.c, sk.d, dk.b, Vk.d, Fk.b, uk.b, qk.e, Ik.c, zk.c, Qk.b, vk.d, Ek.b, hk.c, ak.b, Wk.d, tk.c, ck, Tk.b];
    for (const Nk of gk) Dk.d.IncludesShadersStore[Nk.name] || (Dk.d.IncludesShadersStore[Nk.name] = Nk.shader);
    const Gk = {
      name: Zk,
      shader: Ok
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);