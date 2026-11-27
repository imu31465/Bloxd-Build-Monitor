export const id = 635;
export const ids = [635];
export const modules = {
  45208: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ke
    });
    var ye = He(40954);
    const be = "bakedVertexAnimation",
      Me = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME.z;float VATSpeed=BVASNAME.w;float totalFrames=VATEndFrame-VATStartFrame+1.0;float time=bakedVertexAnimationTime*VATSpeed/totalFrames;float frameCorrection=time<1.0 ? 0.0 : 1.0;float numOfFrames=totalFrames-frameCorrection;float VATFrameNum=fract(time)*numOfFrames;VATFrameNum=mod(VATFrameNum+VATOffsetFrame,numOfFrames);VATFrameNum=floor(VATFrameNum);VATFrameNum+=VATStartFrame+frameCorrection;mat4 VATInfluence;VATInfluence=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[0],VATFrameNum)*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\nVATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[1],VATFrameNum)*matricesWeights[1];\n#endif\n#if NUM_BONE_INFLUENCERS>2\nVATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[2],VATFrameNum)*matricesWeights[2];\n#endif\n#if NUM_BONE_INFLUENCERS>3\nVATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[3],VATFrameNum)*matricesWeights[3];\n#endif\n#if NUM_BONE_INFLUENCERS>4\nVATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[0],VATFrameNum)*matricesWeightsExtra[0];\n#endif\n#if NUM_BONE_INFLUENCERS>5\nVATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[1],VATFrameNum)*matricesWeightsExtra[1];\n#endif\n#if NUM_BONE_INFLUENCERS>6\nVATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[2],VATFrameNum)*matricesWeightsExtra[2];\n#endif\n#if NUM_BONE_INFLUENCERS>7\nVATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[3],VATFrameNum)*matricesWeightsExtra[3];\n#endif\nfinalWorld=finalWorld*VATInfluence;}\n#endif\n";
    ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45116: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ke
    });
    var ye = He(40954);
    const be = "bakedVertexAnimationDeclaration",
      Me = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTexture;\n#ifdef INSTANCES\nattribute vec4 bakedVertexAnimationSettingsInstanced;\n#endif\n#define inline\nmat4 readMatrixFromRawSamplerVAT(sampler2D smp,float index,float frame)\n{\n#if defined(WEBGL2) || defined(WEBGPU)\nint offset=int(index)*4;int frameUV=int(frame);vec4 m0=texelFetch(smp,ivec2(offset+0,frameUV),0);vec4 m1=texelFetch(smp,ivec2(offset+1,frameUV),0);vec4 m2=texelFetch(smp,ivec2(offset+2,frameUV),0);vec4 m3=texelFetch(smp,ivec2(offset+3,frameUV),0);return mat4(m0,m1,m2,m3);\n#else\nfloat offset=index*4.0;float frameUV=(frame+0.5)*bakedVertexAnimationTextureSizeInverted.y;float dx=bakedVertexAnimationTextureSizeInverted.x;vec4 m0=texture2D(smp,vec2(dx*(offset+0.5),frameUV));vec4 m1=texture2D(smp,vec2(dx*(offset+1.5),frameUV));vec4 m2=texture2D(smp,vec2(dx*(offset+2.5),frameUV));vec4 m3=texture2D(smp,vec2(dx*(offset+3.5),frameUV));return mat4(m0,m1,m2,m3);\n#endif\n}\n#endif\n";
    ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45114: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ke
    });
    var ye = He(40954);
    const be = "bonesDeclaration",
      Me = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nuniform highp sampler2D boneSampler;uniform vec2 boneTextureInfo;\n#else\nuniform mat4 mBones[BonesPerMesh];\n#endif\n#ifdef BONES_VELOCITY_ENABLED\nuniform mat4 mPreviousBones[BonesPerMesh];\n#endif\n#ifdef BONETEXTURE\n#define inline\nmat4 readMatrixFromRawSampler(sampler2D smp,float index)\n{\n#if defined(WEBGL2) || defined(WEBGPU)\nint offset=int(index)*4; \nint textureWidth=int(boneTextureInfo.x);int y=int(offset)/textureWidth;int x=int(offset) % textureWidth;vec4 m0=texelFetch(smp,ivec2(x+0,y),0);vec4 m1=texelFetch(smp,ivec2(x+1,y),0);vec4 m2=texelFetch(smp,ivec2(x+2,y),0);vec4 m3=texelFetch(smp,ivec2(x+3,y),0);return mat4(m0,m1,m2,m3);\n#else\nfloat offset=index*4.0;float y=floor(offset/boneTextureInfo.x);float x=offset-y*boneTextureInfo.x;float dy=1.0/boneTextureInfo.y;float dx=1.0/boneTextureInfo.x;vec4 m0=texture2D(smp,vec2(dx*(x+0.5),dy*(y+0.5)));vec4 m1=texture2D(smp,vec2(dx*(x+1.5),dy*(y+0.5)));vec4 m2=texture2D(smp,vec2(dx*(x+2.5),dy*(y+0.5)));vec4 m3=texture2D(smp,vec2(dx*(x+3.5),dy*(y+0.5))); \nreturn mat4(m0,m1,m2,m3);\n#endif\n}\n#endif\n#endif\n#endif\n";
    ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45206: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke
    });
    var ye = He(40954);
    const be = "bonesVertex",
      Me = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler,matricesIndices[1])*matricesWeights[1];\n#endif\n#if NUM_BONE_INFLUENCERS>2\ninfluence+=readMatrixFromRawSampler(boneSampler,matricesIndices[2])*matricesWeights[2];\n#endif\n#if NUM_BONE_INFLUENCERS>3\ninfluence+=readMatrixFromRawSampler(boneSampler,matricesIndices[3])*matricesWeights[3];\n#endif\n#if NUM_BONE_INFLUENCERS>4\ninfluence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[0])*matricesWeightsExtra[0];\n#endif\n#if NUM_BONE_INFLUENCERS>5\ninfluence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[1])*matricesWeightsExtra[1];\n#endif\n#if NUM_BONE_INFLUENCERS>6\ninfluence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[2])*matricesWeightsExtra[2];\n#endif\n#if NUM_BONE_INFLUENCERS>7\ninfluence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[3])*matricesWeightsExtra[3];\n#endif\n#else\ninfluence=mBones[int(matricesIndices[0])]*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=mBones[int(matricesIndices[1])]*matricesWeights[1];\n#endif\n#if NUM_BONE_INFLUENCERS>2\ninfluence+=mBones[int(matricesIndices[2])]*matricesWeights[2];\n#endif\n#if NUM_BONE_INFLUENCERS>3\ninfluence+=mBones[int(matricesIndices[3])]*matricesWeights[3];\n#endif\n#if NUM_BONE_INFLUENCERS>4\ninfluence+=mBones[int(matricesIndicesExtra[0])]*matricesWeightsExtra[0];\n#endif\n#if NUM_BONE_INFLUENCERS>5\ninfluence+=mBones[int(matricesIndicesExtra[1])]*matricesWeightsExtra[1];\n#endif\n#if NUM_BONE_INFLUENCERS>6\ninfluence+=mBones[int(matricesIndicesExtra[2])]*matricesWeightsExtra[2];\n#endif\n#if NUM_BONE_INFLUENCERS>7\ninfluence+=mBones[int(matricesIndicesExtra[3])]*matricesWeightsExtra[3];\n#endif\n#endif\nfinalWorld=finalWorld*influence;\n#endif\n#endif\n";
    ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45234: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke
    });
    var ye = He(40954);
    const be = "clipPlaneVertex",
      Me = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45143: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke
    });
    var ye = He(40954);
    const be = "clipPlaneVertexDeclaration",
      Me = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45238: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke
    });
    var ye = He(40954);
    const be = "fogVertex",
      Me = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45152: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke
    });
    var ye = He(40954);
    const be = "fogVertexDeclaration",
      Me = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45125: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke
    });
    var ye = He(40954);
    const be = "instancesDeclaration",
      Me = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOCITY) || defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nattribute vec4 previousWorld0;attribute vec4 previousWorld1;attribute vec4 previousWorld2;attribute vec4 previousWorld3;\n#ifdef THIN_INSTANCES\nuniform mat4 previousWorld;\n#endif\n#endif\n#else\n#if !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOCITY) || defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nuniform mat4 previousWorld;\n#endif\n#endif\n";
    ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45200: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke
    });
    var ye = He(40954);
    const be = "instancesVertex",
      Me = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previousWorld3);\n#endif\n#ifdef THIN_INSTANCES\nfinalWorld=world*finalWorld;\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nfinalPreviousWorld=previousWorld*finalPreviousWorld;\n#endif\n#endif\n#else\nmat4 finalWorld=world;\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=previousWorld;\n#endif\n#endif\n";
    ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45251: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke
    });
    var ye = He(40954);
    const be = "vertexColorMixing",
      Me = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvColor=vec4(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvColor*=colorUpdated;\n#else\nvColor.rgb*=colorUpdated.rgb;\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvColor*=instanceColor;\n#endif\n#endif\n";
    ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45780: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      colorVertexShader: () => ze
    });
    var ye = He(40954),
      be = He(45114),
      Me = He(45116),
      Ke = He(45143),
      Ue = He(45152),
      Fe = He(45125),
      Je = He(45200),
      oe = He(45206),
      Re = He(45208),
      ke = He(45234),
      qe = He(45238),
      fe = He(45251);
    const Te = "colorVertexShader",
      pe = "attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#ifdef FOG\nuniform mat4 view;\n#endif\n#include<instancesDeclaration>\nuniform mat4 viewProjection;\n#ifdef MULTIVIEW\nuniform mat4 viewProjectionR;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vec4 vColor;\n#endif\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#ifdef VERTEXCOLOR\nvec4 colorUpdated=color;\n#endif\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nvec4 worldPos=finalWorld*vec4(position,1.0);\n#ifdef MULTIVIEW\nif (gl_ViewID_OVR==0u) {gl_Position=viewProjection*worldPos;} else {gl_Position=viewProjectionR*worldPos;}\n#else\ngl_Position=viewProjection*worldPos;\n#endif\n#include<clipPlaneVertex>\n#include<fogVertex>\n#include<vertexColorMixing>\n#define CUSTOM_VERTEX_MAIN_END\n}";
    ye.d.ShadersStore[Te] || (ye.d.ShadersStore[Te] = pe);
    const Xe = [be.e, Me.e, Ke.b, Ue.c, Fe.c, Je.c, oe.c, Re.e, ke.c, qe.c, fe.d];
    for (const Be of Xe) ye.d.IncludesShadersStore[Be.name] || (ye.d.IncludesShadersStore[Be.name] = Be.shader);
    const ze = {
      name: Te,
      shader: pe
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);