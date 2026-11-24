export const id = 264;
export const ids = [264];
export const modules = {
  40397: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => QD,
      f: () => JD,
      g: () => MD,
      h: () => OD,
      k: () => nD,
      m: () => hD
    });
    var pD = wD(39939),
      sD = wD(40022),
      KD = wD(37079),
      rD = wD(40066),
      LD = wD(40400),
      cD = wD(40278),
      gD = wD(39969),
      RD = wD(40270),
      AD = wD(37110),
      UD = wD(40263),
      fD = wD(40254),
      ID = wD(40299),
      BD = wD(37134);
    const GD = {
      effect: null,
      subMesh: null
    };
    class hD extends RD.d {
      constructor(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(DD, zD, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new KD.e, this._cachedWorldViewProjectionMatrix = new KD.e, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = wD, this._options = {
          needAlphaBlending: !1,
          needAlphaTesting: !1,
          attributes: ["position", "normal", "uv"],
          uniforms: ["worldViewProjection"],
          uniformBuffers: [],
          samplers: [],
          externalTextures: [],
          samplerObjects: [],
          storageBuffers: [],
          defines: [],
          useClipPlane: !1,
          ...pD
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(DD) {
        this._shaderPath = DD
      }
      get options() {
        return this._options
      }
      get isMultiview() {
        return this._multiview
      }
      getClassName() {
        return "ShaderMaterial"
      }
      needAlphaBlending() {
        return this.alpha < 1 || this._options.needAlphaBlending
      }
      needAlphaTesting() {
        return this._options.needAlphaTesting
      }
      _checkUniform(DD) {
        -1 === this._options.uniforms.indexOf(DD) && this._options.uniforms.push(DD)
      }
      setTexture(DD, zD) {
        return -1 === this._options.samplers.indexOf(DD) && this._options.samplers.push(DD), this._textures[DD] = zD, this
      }
      setInternalTexture(DD, zD) {
        return -1 === this._options.samplers.indexOf(DD) && this._options.samplers.push(DD), this._internalTextures[DD] = zD, this
      }
      removeTexture(DD) {
        delete this._textures[DD]
      }
      setTextureArray(DD, zD) {
        return -1 === this._options.samplers.indexOf(DD) && this._options.samplers.push(DD), this._checkUniform(DD), this._textureArrays[DD] = zD, this
      }
      setExternalTexture(DD, zD) {
        return -1 === this._options.externalTextures.indexOf(DD) && this._options.externalTextures.push(DD), this._externalTextures[DD] = zD, this
      }
      setFloat(DD, zD) {
        return this._checkUniform(DD), this._floats[DD] = zD, this
      }
      setInt(DD, zD) {
        return this._checkUniform(DD), this._ints[DD] = zD, this
      }
      setUInt(DD, zD) {
        return this._checkUniform(DD), this._uints[DD] = zD, this
      }
      setFloats(DD, zD) {
        return this._checkUniform(DD), this._floatsArrays[DD] = zD, this
      }
      setColor3(DD, zD) {
        return this._checkUniform(DD), this._colors3[DD] = zD, this
      }
      setColor3Array(DD, zD) {
        return this._checkUniform(DD), this._colors3Arrays[DD] = zD.reduce(((DD, zD) => (DD.push(zD.r, zD.g, zD.b), DD)), []), this
      }
      setColor4(DD, zD) {
        return this._checkUniform(DD), this._colors4[DD] = zD, this
      }
      setColor4Array(DD, zD) {
        return this._checkUniform(DD), this._colors4Arrays[DD] = zD.reduce(((DD, zD) => (DD.push(zD.r, zD.g, zD.b, zD.a), DD)), []), this
      }
      setVector2(DD, zD) {
        return this._checkUniform(DD), this._vectors2[DD] = zD, this
      }
      setVector3(DD, zD) {
        return this._checkUniform(DD), this._vectors3[DD] = zD, this
      }
      setVector4(DD, zD) {
        return this._checkUniform(DD), this._vectors4[DD] = zD, this
      }
      setQuaternion(DD, zD) {
        return this._checkUniform(DD), this._quaternions[DD] = zD, this
      }
      setQuaternionArray(DD, zD) {
        return this._checkUniform(DD), this._quaternionsArrays[DD] = zD.reduce(((DD, zD) => (zD.toArray(DD, DD.length), DD)), []), this
      }
      setMatrix(DD, zD) {
        return this._checkUniform(DD), this._matrices[DD] = zD, this
      }
      setMatrices(DD, zD) {
        this._checkUniform(DD);
        const wD = new Float32Array(16 * zD.length);
        for (let pD = 0; pD < zD.length; pD++) {
          zD[pD].copyToArray(wD, 16 * pD)
        }
        return this._matrixArrays[DD] = wD, this
      }
      setMatrix3x3(DD, zD) {
        return this._checkUniform(DD), this._matrices3x3[DD] = zD, this
      }
      setMatrix2x2(DD, zD) {
        return this._checkUniform(DD), this._matrices2x2[DD] = zD, this
      }
      setArray2(DD, zD) {
        return this._checkUniform(DD), this._vectors2Arrays[DD] = zD, this
      }
      setArray3(DD, zD) {
        return this._checkUniform(DD), this._vectors3Arrays[DD] = zD, this
      }
      setArray4(DD, zD) {
        return this._checkUniform(DD), this._vectors4Arrays[DD] = zD, this
      }
      setUniformBuffer(DD, zD) {
        return -1 === this._options.uniformBuffers.indexOf(DD) && this._options.uniformBuffers.push(DD), this._uniformBuffers[DD] = zD, this
      }
      setTextureSampler(DD, zD) {
        return -1 === this._options.samplerObjects.indexOf(DD) && this._options.samplerObjects.push(DD), this._textureSamplers[DD] = zD, this
      }
      setStorageBuffer(DD, zD) {
        return -1 === this._options.storageBuffers.indexOf(DD) && this._options.storageBuffers.push(DD), this._storageBuffers[DD] = zD, this
      }
      setDefine(DD, zD) {
        const wD = DD.trimEnd() + " ",
          pD = this.options.defines.findIndex((zD => zD === DD || zD.startsWith(wD)));
        return pD >= 0 && this.options.defines.splice(pD, 1), ("boolean" !== typeof zD || zD) && this.options.defines.push(wD + zD), this
      }
      isReadyForSubMesh(DD, zD, wD) {
        return this.isReady(DD, wD, zD)
      }
      isReady(DD, zD, wD) {
        const pD = wD && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const DD = pD ? wD._drawWrapper : this._drawWrapper;
          if (DD.effect && DD._wasPreviouslyReady && DD._wasPreviouslyUsingInstances === zD) return !0
        }
        const KD = this.Ul(),
          LD = KD.iI(),
          gD = [],
          RD = [];
        let AD = null,
          BD = this._shaderPath,
          hD = this._options.uniforms,
          nD = this._options.uniformBuffers,
          MD = this._options.samplers;
        LD.getCaps().multiview && KD.activeCamera && KD.activeCamera.outputRenderTarget && KD.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, gD.push("#define MULTIVIEW"), -1 !== hD.indexOf("viewProjection") && -1 === hD.indexOf("viewProjectionR") && hD.push("viewProjectionR"));
        for (let sD = 0; sD < this._options.defines.length; sD++) {
          const DD = 0 === this._options.defines[sD].indexOf("#define") ? this._options.defines[sD] : `#define ${this._options.defines[sD]}`;
          gD.push(DD)
        }
        for (let sD = 0; sD < this._options.attributes.length; sD++) RD.push(this._options.attributes[sD]);
        if (DD && DD.isVerticesDataPresent(rD.k.ColorKind) && (-1 === RD.indexOf(rD.k.ColorKind) && RD.push(rD.k.ColorKind), gD.push("#define VERTEXCOLOR")), zD && (gD.push("#define INSTANCES"), (0, fD.Eb)(RD, this._materialHelperNeedsPreviousMatrices), DD?.hasThinInstances && (gD.push("#define THIN_INSTANCES"), DD && DD.isVerticesDataPresent(rD.k.ColorInstanceKind) && (RD.push(rD.k.ColorInstanceKind), gD.push("#define INSTANCESCOLOR")))), DD && DD.useBones && DD.computeBonesUsingShaders && DD.skeleton) {
          RD.push(rD.k.MatricesIndicesKind), RD.push(rD.k.MatricesWeightsKind), DD.numBoneInfluencers > 4 && (RD.push(rD.k.MatricesIndicesExtraKind), RD.push(rD.k.MatricesWeightsExtraKind));
          const zD = DD.skeleton;
          gD.push("#define NUM_BONE_INFLUENCERS " + DD.numBoneInfluencers), AD = new cD.b, AD.addCPUSkinningFallback(0, DD), zD.isUsingTextureForMatrices ? (gD.push("#define BONETEXTURE"), -1 === hD.indexOf("boneTextureInfo") && hD.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (gD.push("#define BonesPerMesh " + (zD.bones.length + 1)), -1 === hD.indexOf("mBones") && hD.push("mBones"))
        } else gD.push("#define NUM_BONE_INFLUENCERS 0");
        let OD = 0;
        const JD = DD ? DD.morphTargetManager : null;
        if (JD) {
          const zD = -1 !== gD.indexOf("#define UV1"),
            wD = -1 !== gD.indexOf("#define UV2"),
            pD = -1 !== gD.indexOf("#define TANGENT"),
            sD = -1 !== gD.indexOf("#define NORMAL"),
            KD = -1 !== gD.indexOf("#define VERTEXCOLOR");
          OD = (0, fD.O)(JD, gD, RD, DD, !0, sD, pD, zD, wD, KD), JD.isUsingTextureForTargets && (-1 === hD.indexOf("morphTargetTextureIndices") && hD.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), OD > 0 && (hD = hD.slice(), hD.push("morphTargetInfluences"), hD.push("morphTargetCount"), hD.push("morphTargetTextureInfo"), hD.push("morphTargetTextureIndices"))
        } else gD.push("#define NUM_MORPH_INFLUENCERS 0");
        if (DD) {
          const wD = DD.bakedVertexAnimationManager;
          wD && wD.isEnabled && (gD.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === hD.indexOf("bakedVertexAnimationSettings") && hD.push("bakedVertexAnimationSettings"), -1 === hD.indexOf("bakedVertexAnimationTextureSizeInverted") && hD.push("bakedVertexAnimationTextureSizeInverted"), -1 === hD.indexOf("bakedVertexAnimationTime") && hD.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), zD && RD.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const sD in this._textures)
          if (!this._textures[sD].isReady()) return !1;
        for (const sD in this._internalTextures)
          if (!this._internalTextures[sD].isReady) return !1;
        DD && this.needAlphaTestingForMesh(DD) && gD.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, UD.e)(hD), (0, UD.n)(this, KD, gD)), KD.fogEnabled && DD?.applyFog && KD.fogMode !== sD.e.FOGMODE_NONE && (gD.push("#define FOG"), -1 === hD.indexOf("view") && hD.push("view"), -1 === hD.indexOf("vFogInfos") && hD.push("vFogInfos"), -1 === hD.indexOf("vFogColor") && hD.push("vFogColor")), this._useLogarithmicDepth && (gD.push("#define LOGARITHMICDEPTH"), -1 === hD.indexOf("logarithmicDepthConstant") && hD.push("logarithmicDepthConstant"));
        const ED = wD ? wD.getRenderingMesh() : DD;
        if (ED && this.useVertexPulling) {
          const DD = ED.geometry;
          DD && (this._vertexPullingMetadata = (0, ID.e)(DD), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((DD, zD) => {
            hD.push(`vp_${zD}_info`)
          }))), gD.push("#define USE_VERTEX_PULLING");
          const zD = ED.geometry?.getIndexBuffer();
          zD && !ED.isUnIndexed && (gD.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), zD.is32Bits && gD.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (hD = hD.slice(), nD = nD.slice(), MD = MD.slice(), BD = this.customShaderNameResolve(this.name, hD, nD, MD, gD, RD));
        const QD = pD ? wD._getDrawWrapper(void 0, !0) : this._drawWrapper,
          XD = QD?.effect ?? null,
          VD = QD?.defines ?? null,
          PD = gD.join("\n");
        let CD = XD;
        return VD !== PD && (CD = LD.createEffect(BD, {
          attributes: RD,
          uniformsNames: hD,
          uniformBuffersNames: nD,
          samplers: MD,
          defines: PD,
          fallbacks: AD,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: OD
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, LD), pD ? wD.setEffect(CD, PD, this._materialContext) : QD && QD.setEffect(CD, PD), this._onEffectCreatedObservable && (GD.effect = CD, GD.subMesh = wD ?? DD?.QE[0] ?? null, this._onEffectCreatedObservable.notifyObservers(GD))), QD._wasPreviouslyUsingInstances = !!zD, !!CD?.isReady() && (XD !== CD && KD.resetCachedMaterial(), QD._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(DD, zD) {
        const wD = zD ?? this.getEffect();
        if (!wD) return;
        const pD = this._options.uniforms; - 1 !== pD.indexOf("world") && wD.setMatrix("world", DD);
        const sD = this.Ul(); - 1 !== pD.indexOf("worldView") && (DD.multiplyToRef(sD.getViewMatrix(), this._cachedWorldViewMatrix), wD.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== pD.indexOf("worldViewProjection") && (DD.multiplyToRef(sD.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), wD.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== pD.indexOf("view") && wD.setMatrix("view", sD.getViewMatrix())
      }
      bindForSubMesh(DD, zD, wD) {
        this.bind(DD, zD, wD._drawWrapperOverride?.effect, wD)
      }
      bind(DD, zD, wD, pD) {
        const sD = pD && this._storeEffectOnSubMeshes,
          KD = wD ?? (sD ? pD.effect : this.getEffect());
        if (!KD) return;
        const rD = this.Ul();
        this._activeEffect = KD, this.bindOnlyWorldMatrix(DD, wD);
        const LD = this._options.uniformBuffers;
        let cD = !1;
        if (KD && LD && LD.length > 0 && rD.iI().supportsUniformBuffers)
          for (let RD = 0; RD < LD.length; ++RD) {
            switch (LD[RD]) {
              case "Mesh":
                zD && (zD.getMeshUniformBuffer().bindToEffect(KD, "Mesh"), zD.transferToEffect(DD));
                break;
              case "Scene":
                (0, fD.v)(KD, rD.getSceneUniformBuffer()), rD.finalizeSceneUbo(), cD = !0
            }
          }
        const gD = zD && sD ? this._mustRebind(rD, KD, pD, zD.visibility) : rD.getCachedMaterial() !== this;
        if (KD && gD) {
          let DD;
          for (DD in cD || -1 === this._options.uniforms.indexOf("view") || KD.setMatrix("view", rD.getViewMatrix()), cD || -1 === this._options.uniforms.indexOf("projection") || KD.setMatrix("projection", rD.getProjectionMatrix()), cD || -1 === this._options.uniforms.indexOf("viewProjection") || (KD.setMatrix("viewProjection", rD.getTransformMatrix()), this._multiview && KD.setMatrix("viewProjectionR", rD._transformMatrixR)), rD.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && KD.setVector3("cameraPosition", rD.activeCamera.globalPosition), (0, fD.h)(zD, KD), (0, UD.f)(KD, this, rD), this._vertexPullingMetadata && (0, ID.d)(KD, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, fD.q)(sD ? pD.materialDefines : KD.defines, KD, rD), zD && (0, fD.k)(rD, zD, KD), this._textures) KD.setTexture(DD, this._textures[DD]);
          for (DD in this._internalTextures) KD._bindTexture(DD, this._internalTextures[DD]);
          for (DD in this._textureArrays) KD.setTextureArray(DD, this._textureArrays[DD]);
          for (DD in this._ints) KD.setInt(DD, this._ints[DD]);
          for (DD in this._uints) KD.setUInt(DD, this._uints[DD]);
          for (DD in this._floats) KD.setFloat(DD, this._floats[DD]);
          for (DD in this._floatsArrays) KD.setArray(DD, this._floatsArrays[DD]);
          for (DD in this._colors3) KD.setColor3(DD, this._colors3[DD]);
          for (DD in this._colors3Arrays) KD.setArray3(DD, this._colors3Arrays[DD]);
          for (DD in this._colors4) {
            const zD = this._colors4[DD];
            KD.setFloat4(DD, zD.r, zD.g, zD.b, zD.a)
          }
          for (DD in this._colors4Arrays) KD.setArray4(DD, this._colors4Arrays[DD]);
          for (DD in this._vectors2) KD.setVector2(DD, this._vectors2[DD]);
          for (DD in this._vectors3) KD.setVector3(DD, this._vectors3[DD]);
          for (DD in this._vectors4) KD.setVector4(DD, this._vectors4[DD]);
          for (DD in this._quaternions) KD.setQuaternion(DD, this._quaternions[DD]);
          for (DD in this._matrices) KD.setMatrix(DD, this._matrices[DD]);
          for (DD in this._matrixArrays) KD.setMatrices(DD, this._matrixArrays[DD]);
          for (DD in this._matrices3x3) KD.setMatrix3x3(DD, this._matrices3x3[DD]);
          for (DD in this._matrices2x2) KD.setMatrix2x2(DD, this._matrices2x2[DD]);
          for (DD in this._vectors2Arrays) KD.setArray2(DD, this._vectors2Arrays[DD]);
          for (DD in this._vectors3Arrays) KD.setArray3(DD, this._vectors3Arrays[DD]);
          for (DD in this._vectors4Arrays) KD.setArray4(DD, this._vectors4Arrays[DD]);
          for (DD in this._quaternionsArrays) KD.setArray4(DD, this._quaternionsArrays[DD]);
          for (DD in this._uniformBuffers) {
            const zD = this._uniformBuffers[DD].getBuffer();
            zD && KD.bindUniformBuffer(zD, DD)
          }
          const wD = rD.iI(),
            LD = wD.setExternalTexture;
          if (LD)
            for (DD in this._externalTextures) LD.call(wD, DD, this._externalTextures[DD]);
          const gD = wD.setTextureSampler;
          if (gD)
            for (DD in this._textureSamplers) gD.call(wD, DD, this._textureSamplers[DD]);
          const RD = wD.setStorageBuffer;
          if (RD)
            for (DD in this._storageBuffers) RD.call(wD, DD, this._storageBuffers[DD])
        }
        if (KD && zD && (gD || !this.isFrozen)) {
          (0, fD.s)(zD, KD), zD.morphTargetManager && zD.morphTargetManager.isUsingTextureForTargets && zD.morphTargetManager._bind(KD);
          const DD = zD.bakedVertexAnimationManager;
          if (DD && DD.isEnabled) {
            const DD = sD ? pD._drawWrapper : this._drawWrapper;
            zD.bakedVertexAnimationManager?.bind(KD, !!DD._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(zD, KD, pD)
      }
      getActiveTextures() {
        const DD = super.getActiveTextures();
        for (const zD in this._textures) DD.push(this._textures[zD]);
        for (const zD in this._textureArrays) {
          const wD = this._textureArrays[zD];
          for (let zD = 0; zD < wD.length; zD++) DD.push(wD[zD])
        }
        return DD
      }
      hasTexture(DD) {
        if (super.hasTexture(DD)) return !0;
        for (const wD in this._textures)
          if (this._textures[wD] === DD) return !0;
        const zD = DD.getInternalTexture();
        for (const wD in this._internalTextures)
          if (this._internalTextures[wD] === zD) return !0;
        for (const wD in this._textureArrays) {
          const zD = this._textureArrays[wD];
          for (let wD = 0; wD < zD.length; wD++)
            if (zD[wD] === DD) return !0
        }
        return !1
      }
      clone(DD) {
        const zD = pD.d.Clone((() => new hD(DD, this.Ul(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        zD.name = DD, zD.id = DD, "object" === typeof zD._shaderPath && (zD._shaderPath = {
          ...zD._shaderPath
        }), this._options = {
          ...this._options
        };
        const wD = Object.keys(this._options);
        for (const pD of wD) {
          const DD = this._options[pD];
          Array.isArray(DD) && (this._options[pD] = DD.slice(0))
        }
        this.stencil.copyTo(zD.stencil);
        for (const pD in this._textures) zD.setTexture(pD, this._textures[pD]);
        for (const pD in this._internalTextures) zD.setInternalTexture(pD, this._internalTextures[pD]);
        for (const pD in this._textureArrays) zD.setTextureArray(pD, this._textureArrays[pD]);
        for (const pD in this._externalTextures) zD.setExternalTexture(pD, this._externalTextures[pD]);
        for (const pD in this._ints) zD.setInt(pD, this._ints[pD]);
        for (const pD in this._uints) zD.setUInt(pD, this._uints[pD]);
        for (const pD in this._floats) zD.setFloat(pD, this._floats[pD]);
        for (const pD in this._floatsArrays) zD.setFloats(pD, this._floatsArrays[pD]);
        for (const pD in this._colors3) zD.setColor3(pD, this._colors3[pD]);
        for (const pD in this._colors3Arrays) zD._colors3Arrays[pD] = this._colors3Arrays[pD];
        for (const pD in this._colors4) zD.setColor4(pD, this._colors4[pD]);
        for (const pD in this._colors4Arrays) zD._colors4Arrays[pD] = this._colors4Arrays[pD];
        for (const pD in this._vectors2) zD.setVector2(pD, this._vectors2[pD]);
        for (const pD in this._vectors3) zD.setVector3(pD, this._vectors3[pD]);
        for (const pD in this._vectors4) zD.setVector4(pD, this._vectors4[pD]);
        for (const pD in this._quaternions) zD.setQuaternion(pD, this._quaternions[pD]);
        for (const pD in this._quaternionsArrays) zD._quaternionsArrays[pD] = this._quaternionsArrays[pD];
        for (const pD in this._matrices) zD.setMatrix(pD, this._matrices[pD]);
        for (const pD in this._matrixArrays) zD._matrixArrays[pD] = this._matrixArrays[pD].slice();
        for (const pD in this._matrices3x3) zD.setMatrix3x3(pD, this._matrices3x3[pD]);
        for (const pD in this._matrices2x2) zD.setMatrix2x2(pD, this._matrices2x2[pD]);
        for (const pD in this._vectors2Arrays) zD.setArray2(pD, this._vectors2Arrays[pD]);
        for (const pD in this._vectors3Arrays) zD.setArray3(pD, this._vectors3Arrays[pD]);
        for (const pD in this._vectors4Arrays) zD.setArray4(pD, this._vectors4Arrays[pD]);
        for (const pD in this._uniformBuffers) zD.setUniformBuffer(pD, this._uniformBuffers[pD]);
        for (const pD in this._textureSamplers) zD.setTextureSampler(pD, this._textureSamplers[pD]);
        for (const pD in this._storageBuffers) zD.setStorageBuffer(pD, this._storageBuffers[pD]);
        return zD
      }
      dispose(DD, zD, wD) {
        if (zD) {
          let DD;
          for (DD in this._textures) this._textures[DD].dispose();
          for (DD in this._internalTextures) this._internalTextures[DD].dispose();
          for (DD in this._textureArrays) {
            const zD = this._textureArrays[DD];
            for (let DD = 0; DD < zD.length; DD++) zD[DD].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(DD, zD, wD)
      }
      serialize() {
        const DD = pD.d.Serialize(this);
        let zD;
        for (zD in DD.customType = "BABYLON.ShaderMaterial", DD.uniqueId = this.uniqueId, DD.options = this._options, DD.shaderPath = this._shaderPath, DD.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, DD.stencil = this.stencil.serialize(), DD.textures = {}, this._textures) DD.textures[zD] = this._textures[zD].serialize();
        for (zD in DD.textureArrays = {}, this._textureArrays) {
          DD.textureArrays[zD] = [];
          const wD = this._textureArrays[zD];
          for (let pD = 0; pD < wD.length; pD++) DD.textureArrays[zD].push(wD[pD].serialize())
        }
        for (zD in DD.ints = {}, this._ints) DD.ints[zD] = this._ints[zD];
        for (zD in DD.uints = {}, this._uints) DD.uints[zD] = this._uints[zD];
        for (zD in DD.floats = {}, this._floats) DD.floats[zD] = this._floats[zD];
        for (zD in DD.floatsArrays = {}, this._floatsArrays) DD.floatsArrays[zD] = this._floatsArrays[zD];
        for (zD in DD.colors3 = {}, this._colors3) {
          const wD = this._colors3[zD];
          DD.colors3[zD] = [wD.r, wD.g, wD.b]
        }
        for (zD in DD.colors3Arrays = {}, this._colors3Arrays) DD.colors3Arrays[zD] = this._colors3Arrays[zD];
        for (zD in DD.colors4 = {}, this._colors4) {
          const wD = this._colors4[zD];
          DD.colors4[zD] = [wD.r, wD.g, wD.b, wD.a]
        }
        for (zD in DD.colors4Arrays = {}, this._colors4Arrays) DD.colors4Arrays[zD] = this._colors4Arrays[zD];
        for (zD in DD.vectors2 = {}, this._vectors2) {
          const wD = this._vectors2[zD];
          DD.vectors2[zD] = [wD.x, wD.y]
        }
        for (zD in DD.vectors3 = {}, this._vectors3) {
          const wD = this._vectors3[zD];
          DD.vectors3[zD] = [wD.x, wD.y, wD.z]
        }
        for (zD in DD.vectors4 = {}, this._vectors4) {
          const wD = this._vectors4[zD];
          DD.vectors4[zD] = [wD.x, wD.y, wD.z, wD.w]
        }
        for (zD in DD.quaternions = {}, this._quaternions) DD.quaternions[zD] = this._quaternions[zD].QpD();
        for (zD in DD.matrices = {}, this._matrices) DD.matrices[zD] = this._matrices[zD].QpD();
        for (zD in DD.matrixArray = {}, this._matrixArrays) DD.matrixArray[zD] = this._matrixArrays[zD];
        for (zD in DD.matrices3x3 = {}, this._matrices3x3) DD.matrices3x3[zD] = this._matrices3x3[zD];
        for (zD in DD.matrices2x2 = {}, this._matrices2x2) DD.matrices2x2[zD] = this._matrices2x2[zD];
        for (zD in DD.vectors2Arrays = {}, this._vectors2Arrays) DD.vectors2Arrays[zD] = this._vectors2Arrays[zD];
        for (zD in DD.vectors3Arrays = {}, this._vectors3Arrays) DD.vectors3Arrays[zD] = this._vectors3Arrays[zD];
        for (zD in DD.vectors4Arrays = {}, this._vectors4Arrays) DD.vectors4Arrays[zD] = this._vectors4Arrays[zD];
        for (zD in DD.quaternionsArrays = {}, this._quaternionsArrays) DD.quaternionsArrays[zD] = this._quaternionsArrays[zD];
        return DD
      }
    }

    function nD(DD, zD, wD) {
      const sD = pD.d.Parse((() => new hD(DD.name, zD, DD.shaderPath, DD.options, DD.storeEffectOnSubMeshes)), DD, zD, wD);
      let rD;
      for (rD in DD.stencil && sD.stencil.parse(DD.stencil, zD, wD), DD.textures) sD.setTexture(rD, LD.d.Parse(DD.textures[rD], zD, wD));
      for (rD in DD.textureArrays) {
        const pD = DD.textureArrays[rD],
          KD = [];
        for (let DD = 0; DD < pD.length; DD++) KD.push(LD.d.Parse(pD[DD], zD, wD));
        sD.setTextureArray(rD, KD)
      }
      for (rD in DD.ints) sD.setInt(rD, DD.ints[rD]);
      for (rD in DD.uints) sD.setUInt(rD, DD.uints[rD]);
      for (rD in DD.floats) sD.setFloat(rD, DD.floats[rD]);
      for (rD in DD.floatsArrays) sD.setFloats(rD, DD.floatsArrays[rD]);
      for (rD in DD.colors3) {
        const zD = DD.colors3[rD];
        sD.setColor3(rD, {
          r: zD[0],
          g: zD[1],
          b: zD[2]
        })
      }
      for (rD in DD.colors3Arrays) {
        const zD = DD.colors3Arrays[rD].reduce(((DD, zD, wD) => (wD % 3 === 0 ? DD.push([zD]) : DD[DD.length - 1].push(zD), DD)), []).map((DD => ({
          r: DD[0],
          g: DD[1],
          b: DD[2]
        })));
        sD.setColor3Array(rD, zD)
      }
      for (rD in DD.colors4) {
        const zD = DD.colors4[rD];
        sD.setColor4(rD, {
          r: zD[0],
          g: zD[1],
          b: zD[2],
          a: zD[3]
        })
      }
      for (rD in DD.colors4Arrays) {
        const zD = DD.colors4Arrays[rD].reduce(((DD, zD, wD) => (wD % 4 === 0 ? DD.push([zD]) : DD[DD.length - 1].push(zD), DD)), []).map((DD => ({
          r: DD[0],
          g: DD[1],
          b: DD[2],
          a: DD[3]
        })));
        sD.setColor4Array(rD, zD)
      }
      for (rD in DD.vectors2) {
        const zD = DD.vectors2[rD];
        sD.setVector2(rD, {
          x: zD[0],
          y: zD[1]
        })
      }
      for (rD in DD.vectors3) {
        const zD = DD.vectors3[rD];
        sD.setVector3(rD, {
          x: zD[0],
          y: zD[1],
          z: zD[2]
        })
      }
      for (rD in DD.vectors4) {
        const zD = DD.vectors4[rD];
        sD.setVector4(rD, {
          x: zD[0],
          y: zD[1],
          z: zD[2],
          w: zD[3]
        })
      }
      for (rD in DD.quaternions) sD.setQuaternion(rD, KD.i.FromArray(DD.quaternions[rD]));
      for (rD in DD.matrices) sD.setMatrix(rD, KD.e.FromArray(DD.matrices[rD]));
      const cD = sD;
      for (rD in DD.matrixArray) cD._matrixArrays[rD] = new Float32Array(DD.matrixArray[rD]);
      for (rD in DD.matrices3x3) sD.setMatrix3x3(rD, DD.matrices3x3[rD]);
      for (rD in DD.matrices2x2) sD.setMatrix2x2(rD, DD.matrices2x2[rD]);
      for (rD in DD.vectors2Arrays) sD.setArray2(rD, DD.vectors2Arrays[rD]);
      for (rD in DD.vectors3Arrays) sD.setArray3(rD, DD.vectors3Arrays[rD]);
      for (rD in DD.vectors4Arrays) sD.setArray4(rD, DD.vectors4Arrays[rD]);
      for (rD in DD.quaternionsArrays) sD.setArray4(rD, DD.quaternionsArrays[rD]);
      return sD
    }
    async function MD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((sD, KD) => {
        const rD = new gD.e;
        rD.addEventListener("readystatechange", (() => {
          if (4 == rD.readyState)
            if (200 == rD.status) {
              const zD = nD(JSON.parse(rD.responseText), wD || AD.d.LastCreatedScene, pD);
              DD && (zD.name = DD), sD(zD)
            } else KD("Unable to load the ShaderMaterial")
        })), rD.open("GET", zD), rD.send()
      }))
    }
    async function OD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const pD = this?.SnippetUrl ?? hD.SnippetUrl;
      return await new Promise(((sD, KD) => {
        const rD = new gD.e;
        rD.addEventListener("readystatechange", (() => {
          if (4 == rD.readyState)
            if (200 == rD.status) {
              const pD = JSON.parse(JSON.parse(rD.responseText).jsonPayload),
                KD = nD(JSON.parse(pD.shaderMaterial), zD || AD.d.LastCreatedScene, wD);
              KD.snippetId = DD, sD(KD)
            } else KD("Unable to load the snippet " + DD)
        })), rD.open("GET", pD + "/" + DD.replace(/#/g, "/")), rD.send()
      }))
    }
    hD.SnippetUrl = "https://snippet.babylonjs.com";
    const JD = OD;
    let ED = !1;

    function QD() {
      ED || (ED = !0, hD.Parse = nD, hD.ParseFromFileAsync = MD, hD.ParseFromSnippetAsync = OD, hD.CreateFromSnippetAsync = JD, (0, BD.i)("BABYLON.ShaderMaterial", hD))
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);