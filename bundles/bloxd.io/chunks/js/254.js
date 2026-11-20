export const id = 254;
export const ids = [254];
export const modules = {
  39847: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => JU,
      e: () => mU,
      f: () => fU,
      h: () => xU,
      i: () => WU,
      l: () => eU
    });
    var tU = gU(39395),
      pU = gU(39468),
      EU = gU(36600),
      PU = gU(39517),
      TU = gU(39855),
      qU = gU(39740),
      KU = gU(39427),
      cU = gU(39732),
      GU = gU(36622),
      jU = gU(39720),
      uU = gU(39716),
      CU = gU(39755),
      hU = gU(36639);
    const QU = {
      effect: null,
      subMesh: null
    };
    class eU extends cU.b {
      constructor(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(UU, RU, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new EU.c, this._cachedWorldViewProjectionMatrix = new EU.c, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = gU, this._options = {
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
          ...tU
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(UU) {
        this._shaderPath = UU
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
      _checkUniform(UU) {
        -1 === this._options.uniforms.indexOf(UU) && this._options.uniforms.push(UU)
      }
      setTexture(UU, RU) {
        return -1 === this._options.samplers.indexOf(UU) && this._options.samplers.push(UU), this._textures[UU] = RU, this
      }
      setInternalTexture(UU, RU) {
        return -1 === this._options.samplers.indexOf(UU) && this._options.samplers.push(UU), this._internalTextures[UU] = RU, this
      }
      removeTexture(UU) {
        delete this._textures[UU]
      }
      setTextureArray(UU, RU) {
        return -1 === this._options.samplers.indexOf(UU) && this._options.samplers.push(UU), this._checkUniform(UU), this._textureArrays[UU] = RU, this
      }
      setExternalTexture(UU, RU) {
        return -1 === this._options.externalTextures.indexOf(UU) && this._options.externalTextures.push(UU), this._externalTextures[UU] = RU, this
      }
      setFloat(UU, RU) {
        return this._checkUniform(UU), this._floats[UU] = RU, this
      }
      setInt(UU, RU) {
        return this._checkUniform(UU), this._ints[UU] = RU, this
      }
      setUInt(UU, RU) {
        return this._checkUniform(UU), this._uints[UU] = RU, this
      }
      setFloats(UU, RU) {
        return this._checkUniform(UU), this._floatsArrays[UU] = RU, this
      }
      setColor3(UU, RU) {
        return this._checkUniform(UU), this._colors3[UU] = RU, this
      }
      setColor3Array(UU, RU) {
        return this._checkUniform(UU), this._colors3Arrays[UU] = RU.reduce(((UU, RU) => (UU.push(RU.r, RU.g, RU.b), UU)), []), this
      }
      setColor4(UU, RU) {
        return this._checkUniform(UU), this._colors4[UU] = RU, this
      }
      setColor4Array(UU, RU) {
        return this._checkUniform(UU), this._colors4Arrays[UU] = RU.reduce(((UU, RU) => (UU.push(RU.r, RU.g, RU.b, RU.a), UU)), []), this
      }
      setVector2(UU, RU) {
        return this._checkUniform(UU), this._vectors2[UU] = RU, this
      }
      setVector3(UU, RU) {
        return this._checkUniform(UU), this._vectors3[UU] = RU, this
      }
      setVector4(UU, RU) {
        return this._checkUniform(UU), this._vectors4[UU] = RU, this
      }
      setQuaternion(UU, RU) {
        return this._checkUniform(UU), this._quaternions[UU] = RU, this
      }
      setQuaternionArray(UU, RU) {
        return this._checkUniform(UU), this._quaternionsArrays[UU] = RU.reduce(((UU, RU) => (RU.toArray(UU, UU.length), UU)), []), this
      }
      setMatrix(UU, RU) {
        return this._checkUniform(UU), this._matrices[UU] = RU, this
      }
      setMatrices(UU, RU) {
        this._checkUniform(UU);
        const gU = new Float32Array(16 * RU.length);
        for (let tU = 0; tU < RU.length; tU++) {
          RU[tU].copyToArray(gU, 16 * tU)
        }
        return this._matrixArrays[UU] = gU, this
      }
      setMatrix3x3(UU, RU) {
        return this._checkUniform(UU), this._matrices3x3[UU] = RU, this
      }
      setMatrix2x2(UU, RU) {
        return this._checkUniform(UU), this._matrices2x2[UU] = RU, this
      }
      setArray2(UU, RU) {
        return this._checkUniform(UU), this._vectors2Arrays[UU] = RU, this
      }
      setArray3(UU, RU) {
        return this._checkUniform(UU), this._vectors3Arrays[UU] = RU, this
      }
      setArray4(UU, RU) {
        return this._checkUniform(UU), this._vectors4Arrays[UU] = RU, this
      }
      setUniformBuffer(UU, RU) {
        return -1 === this._options.uniformBuffers.indexOf(UU) && this._options.uniformBuffers.push(UU), this._uniformBuffers[UU] = RU, this
      }
      setTextureSampler(UU, RU) {
        return -1 === this._options.samplerObjects.indexOf(UU) && this._options.samplerObjects.push(UU), this._textureSamplers[UU] = RU, this
      }
      setStorageBuffer(UU, RU) {
        return -1 === this._options.storageBuffers.indexOf(UU) && this._options.storageBuffers.push(UU), this._storageBuffers[UU] = RU, this
      }
      setDefine(UU, RU) {
        const gU = UU.trimEnd() + " ",
          tU = this.options.defines.findIndex((RU => RU === UU || RU.startsWith(gU)));
        return tU >= 0 && this.options.defines.splice(tU, 1), ("boolean" !== typeof RU || RU) && this.options.defines.push(gU + RU), this
      }
      isReadyForSubMesh(UU, RU, gU) {
        return this.isReady(UU, gU, RU)
      }
      isReady(UU, RU, gU) {
        const tU = gU && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const UU = tU ? gU._drawWrapper : this._drawWrapper;
          if (UU.effect && UU._wasPreviouslyReady && UU._wasPreviouslyUsingInstances === RU) return !0
        }
        const EU = this.aZ(),
          TU = EU.WC(),
          KU = [],
          cU = [];
        let GU = null,
          hU = this._shaderPath,
          eU = this._options.uniforms,
          WU = this._options.uniformBuffers,
          fU = this._options.samplers;
        TU.getCaps().multiview && EU.activeCamera && EU.activeCamera.outputRenderTarget && EU.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, KU.push("#define MULTIVIEW"), -1 !== eU.indexOf("viewProjection") && -1 === eU.indexOf("viewProjectionR") && eU.push("viewProjectionR"));
        for (let pU = 0; pU < this._options.defines.length; pU++) {
          const UU = 0 === this._options.defines[pU].indexOf("#define") ? this._options.defines[pU] : `#define ${this._options.defines[pU]}`;
          KU.push(UU)
        }
        for (let pU = 0; pU < this._options.attributes.length; pU++) cU.push(this._options.attributes[pU]);
        if (UU && UU.isVerticesDataPresent(PU.l.ColorKind) && (-1 === cU.indexOf(PU.l.ColorKind) && cU.push(PU.l.ColorKind), KU.push("#define VERTEXCOLOR")), RU && (KU.push("#define INSTANCES"), (0, uU.jb)(cU, this._materialHelperNeedsPreviousMatrices), UU?.hasThinInstances && (KU.push("#define THIN_INSTANCES"), UU && UU.isVerticesDataPresent(PU.l.ColorInstanceKind) && (cU.push(PU.l.ColorInstanceKind), KU.push("#define INSTANCESCOLOR")))), UU && UU.useBones && UU.computeBonesUsingShaders && UU.skeleton) {
          cU.push(PU.l.MatricesIndicesKind), cU.push(PU.l.MatricesWeightsKind), UU.numBoneInfluencers > 4 && (cU.push(PU.l.MatricesIndicesExtraKind), cU.push(PU.l.MatricesWeightsExtraKind));
          const RU = UU.skeleton;
          KU.push("#define NUM_BONE_INFLUENCERS " + UU.numBoneInfluencers), GU = new qU.c, GU.addCPUSkinningFallback(0, UU), RU.isUsingTextureForMatrices ? (KU.push("#define BONETEXTURE"), -1 === eU.indexOf("boneTextureInfo") && eU.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (KU.push("#define BonesPerMesh " + (RU.bones.length + 1)), -1 === eU.indexOf("mBones") && eU.push("mBones"))
        } else KU.push("#define NUM_BONE_INFLUENCERS 0");
        let xU = 0;
        const mU = UU ? UU.morphTargetManager : null;
        if (mU) {
          const RU = -1 !== KU.indexOf("#define UV1"),
            gU = -1 !== KU.indexOf("#define UV2"),
            tU = -1 !== KU.indexOf("#define TANGENT"),
            pU = -1 !== KU.indexOf("#define NORMAL"),
            EU = -1 !== KU.indexOf("#define VERTEXCOLOR");
          xU = (0, uU.I)(mU, KU, cU, UU, !0, pU, tU, RU, gU, EU), mU.isUsingTextureForTargets && (-1 === eU.indexOf("morphTargetTextureIndices") && eU.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), xU > 0 && (eU = eU.slice(), eU.push("morphTargetInfluences"), eU.push("morphTargetCount"), eU.push("morphTargetTextureInfo"), eU.push("morphTargetTextureIndices"))
        } else KU.push("#define NUM_MORPH_INFLUENCERS 0");
        if (UU) {
          const gU = UU.bakedVertexAnimationManager;
          gU && gU.isEnabled && (KU.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === eU.indexOf("bakedVertexAnimationSettings") && eU.push("bakedVertexAnimationSettings"), -1 === eU.indexOf("bakedVertexAnimationTextureSizeInverted") && eU.push("bakedVertexAnimationTextureSizeInverted"), -1 === eU.indexOf("bakedVertexAnimationTime") && eU.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), RU && cU.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const pU in this._textures)
          if (!this._textures[pU].isReady()) return !1;
        for (const pU in this._internalTextures)
          if (!this._internalTextures[pU].isReady) return !1;
        UU && this.needAlphaTestingForMesh(UU) && KU.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, jU.c)(eU), (0, jU.h)(this, EU, KU)), EU.fogEnabled && UU?.applyFog && EU.fogMode !== pU.f.FOGMODE_NONE && (KU.push("#define FOG"), -1 === eU.indexOf("view") && eU.push("view"), -1 === eU.indexOf("vFogInfos") && eU.push("vFogInfos"), -1 === eU.indexOf("vFogColor") && eU.push("vFogColor")), this._useLogarithmicDepth && (KU.push("#define LOGARITHMICDEPTH"), -1 === eU.indexOf("logarithmicDepthConstant") && eU.push("logarithmicDepthConstant"));
        const IU = gU ? gU.getRenderingMesh() : UU;
        if (IU && this.useVertexPulling) {
          const UU = IU.geometry;
          UU && (this._vertexPullingMetadata = (0, CU.f)(UU), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((UU, RU) => {
            eU.push(`vp_${RU}_info`)
          }))), KU.push("#define USE_VERTEX_PULLING");
          const RU = IU.geometry?.getIndexBuffer();
          RU && !IU.isUnIndexed && (KU.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), RU.is32Bits && KU.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (eU = eU.slice(), WU = WU.slice(), fU = fU.slice(), hU = this.customShaderNameResolve(this.name, eU, WU, fU, KU, cU));
        const JU = tU ? gU._getDrawWrapper(void 0, !0) : this._drawWrapper,
          wU = JU?.effect ?? null,
          nU = JU?.defines ?? null,
          bU = KU.join("\n");
        let oU = wU;
        return nU !== bU && (oU = TU.createEffect(hU, {
          attributes: cU,
          uniformsNames: eU,
          uniformBuffersNames: WU,
          samplers: fU,
          defines: bU,
          fallbacks: GU,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: xU
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, TU), tU ? gU.setEffect(oU, bU, this._materialContext) : JU && JU.setEffect(oU, bU), this._onEffectCreatedObservable && (QU.effect = oU, QU.subMesh = gU ?? UU?.ZI[0] ?? null, this._onEffectCreatedObservable.notifyObservers(QU))), JU._wasPreviouslyUsingInstances = !!RU, !!oU?.isReady() && (wU !== oU && EU.resetCachedMaterial(), JU._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(UU, RU) {
        const gU = RU ?? this.getEffect();
        if (!gU) return;
        const tU = this._options.uniforms; - 1 !== tU.indexOf("world") && gU.setMatrix("world", UU);
        const pU = this.aZ(); - 1 !== tU.indexOf("worldView") && (UU.multiplyToRef(pU.getViewMatrix(), this._cachedWorldViewMatrix), gU.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== tU.indexOf("worldViewProjection") && (UU.multiplyToRef(pU.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), gU.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== tU.indexOf("view") && gU.setMatrix("view", pU.getViewMatrix())
      }
      bindForSubMesh(UU, RU, gU) {
        this.bind(UU, RU, gU._drawWrapperOverride?.effect, gU)
      }
      bind(UU, RU, gU, tU) {
        const pU = tU && this._storeEffectOnSubMeshes,
          EU = gU ?? (pU ? tU.effect : this.getEffect());
        if (!EU) return;
        const PU = this.aZ();
        this._activeEffect = EU, this.bindOnlyWorldMatrix(UU, gU);
        const TU = this._options.uniformBuffers;
        let qU = !1;
        if (EU && TU && TU.length > 0 && PU.WC().supportsUniformBuffers)
          for (let cU = 0; cU < TU.length; ++cU) {
            switch (TU[cU]) {
              case "Mesh":
                RU && (RU.getMeshUniformBuffer().bindToEffect(EU, "Mesh"), RU.transferToEffect(UU));
                break;
              case "Scene":
                (0, uU.u)(EU, PU.getSceneUniformBuffer()), PU.finalizeSceneUbo(), qU = !0
            }
          }
        const KU = RU && pU ? this._mustRebind(PU, EU, tU, RU.visibility) : PU.getCachedMaterial() !== this;
        if (EU && KU) {
          let UU;
          for (UU in qU || -1 === this._options.uniforms.indexOf("view") || EU.setMatrix("view", PU.getViewMatrix()), qU || -1 === this._options.uniforms.indexOf("projection") || EU.setMatrix("projection", PU.getProjectionMatrix()), qU || -1 === this._options.uniforms.indexOf("viewProjection") || (EU.setMatrix("viewProjection", PU.getTransformMatrix()), this._multiview && EU.setMatrix("viewProjectionR", PU._transformMatrixR)), PU.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && EU.setVector3("cameraPosition", PU.activeCamera.globalPosition), (0, uU.c)(RU, EU), (0, jU.f)(EU, this, PU), this._vertexPullingMetadata && (0, CU.c)(EU, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, uU.q)(pU ? tU.materialDefines : EU.defines, EU, PU), RU && (0, uU.g)(PU, RU, EU), this._textures) EU.setTexture(UU, this._textures[UU]);
          for (UU in this._internalTextures) EU._bindTexture(UU, this._internalTextures[UU]);
          for (UU in this._textureArrays) EU.setTextureArray(UU, this._textureArrays[UU]);
          for (UU in this._ints) EU.setInt(UU, this._ints[UU]);
          for (UU in this._uints) EU.setUInt(UU, this._uints[UU]);
          for (UU in this._floats) EU.setFloat(UU, this._floats[UU]);
          for (UU in this._floatsArrays) EU.setArray(UU, this._floatsArrays[UU]);
          for (UU in this._colors3) EU.setColor3(UU, this._colors3[UU]);
          for (UU in this._colors3Arrays) EU.setArray3(UU, this._colors3Arrays[UU]);
          for (UU in this._colors4) {
            const RU = this._colors4[UU];
            EU.setFloat4(UU, RU.r, RU.g, RU.b, RU.a)
          }
          for (UU in this._colors4Arrays) EU.setArray4(UU, this._colors4Arrays[UU]);
          for (UU in this._vectors2) EU.setVector2(UU, this._vectors2[UU]);
          for (UU in this._vectors3) EU.setVector3(UU, this._vectors3[UU]);
          for (UU in this._vectors4) EU.setVector4(UU, this._vectors4[UU]);
          for (UU in this._quaternions) EU.setQuaternion(UU, this._quaternions[UU]);
          for (UU in this._matrices) EU.setMatrix(UU, this._matrices[UU]);
          for (UU in this._matrixArrays) EU.setMatrices(UU, this._matrixArrays[UU]);
          for (UU in this._matrices3x3) EU.setMatrix3x3(UU, this._matrices3x3[UU]);
          for (UU in this._matrices2x2) EU.setMatrix2x2(UU, this._matrices2x2[UU]);
          for (UU in this._vectors2Arrays) EU.setArray2(UU, this._vectors2Arrays[UU]);
          for (UU in this._vectors3Arrays) EU.setArray3(UU, this._vectors3Arrays[UU]);
          for (UU in this._vectors4Arrays) EU.setArray4(UU, this._vectors4Arrays[UU]);
          for (UU in this._quaternionsArrays) EU.setArray4(UU, this._quaternionsArrays[UU]);
          for (UU in this._uniformBuffers) {
            const RU = this._uniformBuffers[UU].getBuffer();
            RU && EU.bindUniformBuffer(RU, UU)
          }
          const gU = PU.WC(),
            TU = gU.setExternalTexture;
          if (TU)
            for (UU in this._externalTextures) TU.call(gU, UU, this._externalTextures[UU]);
          const KU = gU.setTextureSampler;
          if (KU)
            for (UU in this._textureSamplers) KU.call(gU, UU, this._textureSamplers[UU]);
          const cU = gU.setStorageBuffer;
          if (cU)
            for (UU in this._storageBuffers) cU.call(gU, UU, this._storageBuffers[UU])
        }
        if (EU && RU && (KU || !this.isFrozen)) {
          (0, uU.s)(RU, EU), RU.morphTargetManager && RU.morphTargetManager.isUsingTextureForTargets && RU.morphTargetManager._bind(EU);
          const UU = RU.bakedVertexAnimationManager;
          if (UU && UU.isEnabled) {
            const UU = pU ? tU._drawWrapper : this._drawWrapper;
            RU.bakedVertexAnimationManager?.bind(EU, !!UU._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(RU, EU, tU)
      }
      getActiveTextures() {
        const UU = super.getActiveTextures();
        for (const RU in this._textures) UU.push(this._textures[RU]);
        for (const RU in this._textureArrays) {
          const gU = this._textureArrays[RU];
          for (let RU = 0; RU < gU.length; RU++) UU.push(gU[RU])
        }
        return UU
      }
      hasTexture(UU) {
        if (super.hasTexture(UU)) return !0;
        for (const gU in this._textures)
          if (this._textures[gU] === UU) return !0;
        const RU = UU.getInternalTexture();
        for (const gU in this._internalTextures)
          if (this._internalTextures[gU] === RU) return !0;
        for (const gU in this._textureArrays) {
          const RU = this._textureArrays[gU];
          for (let gU = 0; gU < RU.length; gU++)
            if (RU[gU] === UU) return !0
        }
        return !1
      }
      clone(UU) {
        const RU = tU.b.Clone((() => new eU(UU, this.aZ(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        RU.name = UU, RU.id = UU, "object" === typeof RU._shaderPath && (RU._shaderPath = {
          ...RU._shaderPath
        }), this._options = {
          ...this._options
        };
        const gU = Object.keys(this._options);
        for (const tU of gU) {
          const UU = this._options[tU];
          Array.isArray(UU) && (this._options[tU] = UU.slice(0))
        }
        this.stencil.copyTo(RU.stencil);
        for (const tU in this._textures) RU.setTexture(tU, this._textures[tU]);
        for (const tU in this._internalTextures) RU.setInternalTexture(tU, this._internalTextures[tU]);
        for (const tU in this._textureArrays) RU.setTextureArray(tU, this._textureArrays[tU]);
        for (const tU in this._externalTextures) RU.setExternalTexture(tU, this._externalTextures[tU]);
        for (const tU in this._ints) RU.setInt(tU, this._ints[tU]);
        for (const tU in this._uints) RU.setUInt(tU, this._uints[tU]);
        for (const tU in this._floats) RU.setFloat(tU, this._floats[tU]);
        for (const tU in this._floatsArrays) RU.setFloats(tU, this._floatsArrays[tU]);
        for (const tU in this._colors3) RU.setColor3(tU, this._colors3[tU]);
        for (const tU in this._colors3Arrays) RU._colors3Arrays[tU] = this._colors3Arrays[tU];
        for (const tU in this._colors4) RU.setColor4(tU, this._colors4[tU]);
        for (const tU in this._colors4Arrays) RU._colors4Arrays[tU] = this._colors4Arrays[tU];
        for (const tU in this._vectors2) RU.setVector2(tU, this._vectors2[tU]);
        for (const tU in this._vectors3) RU.setVector3(tU, this._vectors3[tU]);
        for (const tU in this._vectors4) RU.setVector4(tU, this._vectors4[tU]);
        for (const tU in this._quaternions) RU.setQuaternion(tU, this._quaternions[tU]);
        for (const tU in this._quaternionsArrays) RU._quaternionsArrays[tU] = this._quaternionsArrays[tU];
        for (const tU in this._matrices) RU.setMatrix(tU, this._matrices[tU]);
        for (const tU in this._matrixArrays) RU._matrixArrays[tU] = this._matrixArrays[tU].slice();
        for (const tU in this._matrices3x3) RU.setMatrix3x3(tU, this._matrices3x3[tU]);
        for (const tU in this._matrices2x2) RU.setMatrix2x2(tU, this._matrices2x2[tU]);
        for (const tU in this._vectors2Arrays) RU.setArray2(tU, this._vectors2Arrays[tU]);
        for (const tU in this._vectors3Arrays) RU.setArray3(tU, this._vectors3Arrays[tU]);
        for (const tU in this._vectors4Arrays) RU.setArray4(tU, this._vectors4Arrays[tU]);
        for (const tU in this._uniformBuffers) RU.setUniformBuffer(tU, this._uniformBuffers[tU]);
        for (const tU in this._textureSamplers) RU.setTextureSampler(tU, this._textureSamplers[tU]);
        for (const tU in this._storageBuffers) RU.setStorageBuffer(tU, this._storageBuffers[tU]);
        return RU
      }
      dispose(UU, RU, gU) {
        if (RU) {
          let UU;
          for (UU in this._textures) this._textures[UU].dispose();
          for (UU in this._internalTextures) this._internalTextures[UU].dispose();
          for (UU in this._textureArrays) {
            const RU = this._textureArrays[UU];
            for (let UU = 0; UU < RU.length; UU++) RU[UU].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(UU, RU, gU)
      }
      serialize() {
        const UU = tU.b.Serialize(this);
        let RU;
        for (RU in UU.customType = "BABYLON.ShaderMaterial", UU.uniqueId = this.uniqueId, UU.options = this._options, UU.shaderPath = this._shaderPath, UU.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, UU.stencil = this.stencil.serialize(), UU.textures = {}, this._textures) UU.textures[RU] = this._textures[RU].serialize();
        for (RU in UU.textureArrays = {}, this._textureArrays) {
          UU.textureArrays[RU] = [];
          const gU = this._textureArrays[RU];
          for (let tU = 0; tU < gU.length; tU++) UU.textureArrays[RU].push(gU[tU].serialize())
        }
        for (RU in UU.ints = {}, this._ints) UU.ints[RU] = this._ints[RU];
        for (RU in UU.uints = {}, this._uints) UU.uints[RU] = this._uints[RU];
        for (RU in UU.floats = {}, this._floats) UU.floats[RU] = this._floats[RU];
        for (RU in UU.floatsArrays = {}, this._floatsArrays) UU.floatsArrays[RU] = this._floatsArrays[RU];
        for (RU in UU.colors3 = {}, this._colors3) {
          const gU = this._colors3[RU];
          UU.colors3[RU] = [gU.r, gU.g, gU.b]
        }
        for (RU in UU.colors3Arrays = {}, this._colors3Arrays) UU.colors3Arrays[RU] = this._colors3Arrays[RU];
        for (RU in UU.colors4 = {}, this._colors4) {
          const gU = this._colors4[RU];
          UU.colors4[RU] = [gU.r, gU.g, gU.b, gU.a]
        }
        for (RU in UU.colors4Arrays = {}, this._colors4Arrays) UU.colors4Arrays[RU] = this._colors4Arrays[RU];
        for (RU in UU.vectors2 = {}, this._vectors2) {
          const gU = this._vectors2[RU];
          UU.vectors2[RU] = [gU.x, gU.y]
        }
        for (RU in UU.vectors3 = {}, this._vectors3) {
          const gU = this._vectors3[RU];
          UU.vectors3[RU] = [gU.x, gU.y, gU.z]
        }
        for (RU in UU.vectors4 = {}, this._vectors4) {
          const gU = this._vectors4[RU];
          UU.vectors4[RU] = [gU.x, gU.y, gU.z, gU.w]
        }
        for (RU in UU.quaternions = {}, this._quaternions) UU.quaternions[RU] = this._quaternions[RU].vgU();
        for (RU in UU.matrices = {}, this._matrices) UU.matrices[RU] = this._matrices[RU].vgU();
        for (RU in UU.matrixArray = {}, this._matrixArrays) UU.matrixArray[RU] = this._matrixArrays[RU];
        for (RU in UU.matrices3x3 = {}, this._matrices3x3) UU.matrices3x3[RU] = this._matrices3x3[RU];
        for (RU in UU.matrices2x2 = {}, this._matrices2x2) UU.matrices2x2[RU] = this._matrices2x2[RU];
        for (RU in UU.vectors2Arrays = {}, this._vectors2Arrays) UU.vectors2Arrays[RU] = this._vectors2Arrays[RU];
        for (RU in UU.vectors3Arrays = {}, this._vectors3Arrays) UU.vectors3Arrays[RU] = this._vectors3Arrays[RU];
        for (RU in UU.vectors4Arrays = {}, this._vectors4Arrays) UU.vectors4Arrays[RU] = this._vectors4Arrays[RU];
        for (RU in UU.quaternionsArrays = {}, this._quaternionsArrays) UU.quaternionsArrays[RU] = this._quaternionsArrays[RU];
        return UU
      }
    }

    function WU(UU, RU, gU) {
      const pU = tU.b.Parse((() => new eU(UU.name, RU, UU.shaderPath, UU.options, UU.storeEffectOnSubMeshes)), UU, RU, gU);
      let PU;
      for (PU in UU.stencil && pU.stencil.parse(UU.stencil, RU, gU), UU.textures) pU.setTexture(PU, TU.e.Parse(UU.textures[PU], RU, gU));
      for (PU in UU.textureArrays) {
        const tU = UU.textureArrays[PU],
          EU = [];
        for (let UU = 0; UU < tU.length; UU++) EU.push(TU.e.Parse(tU[UU], RU, gU));
        pU.setTextureArray(PU, EU)
      }
      for (PU in UU.ints) pU.setInt(PU, UU.ints[PU]);
      for (PU in UU.uints) pU.setUInt(PU, UU.uints[PU]);
      for (PU in UU.floats) pU.setFloat(PU, UU.floats[PU]);
      for (PU in UU.floatsArrays) pU.setFloats(PU, UU.floatsArrays[PU]);
      for (PU in UU.colors3) {
        const RU = UU.colors3[PU];
        pU.setColor3(PU, {
          r: RU[0],
          g: RU[1],
          b: RU[2]
        })
      }
      for (PU in UU.colors3Arrays) {
        const RU = UU.colors3Arrays[PU].reduce(((UU, RU, gU) => (gU % 3 === 0 ? UU.push([RU]) : UU[UU.length - 1].push(RU), UU)), []).map((UU => ({
          r: UU[0],
          g: UU[1],
          b: UU[2]
        })));
        pU.setColor3Array(PU, RU)
      }
      for (PU in UU.colors4) {
        const RU = UU.colors4[PU];
        pU.setColor4(PU, {
          r: RU[0],
          g: RU[1],
          b: RU[2],
          a: RU[3]
        })
      }
      for (PU in UU.colors4Arrays) {
        const RU = UU.colors4Arrays[PU].reduce(((UU, RU, gU) => (gU % 4 === 0 ? UU.push([RU]) : UU[UU.length - 1].push(RU), UU)), []).map((UU => ({
          r: UU[0],
          g: UU[1],
          b: UU[2],
          a: UU[3]
        })));
        pU.setColor4Array(PU, RU)
      }
      for (PU in UU.vectors2) {
        const RU = UU.vectors2[PU];
        pU.setVector2(PU, {
          x: RU[0],
          y: RU[1]
        })
      }
      for (PU in UU.vectors3) {
        const RU = UU.vectors3[PU];
        pU.setVector3(PU, {
          x: RU[0],
          y: RU[1],
          z: RU[2]
        })
      }
      for (PU in UU.vectors4) {
        const RU = UU.vectors4[PU];
        pU.setVector4(PU, {
          x: RU[0],
          y: RU[1],
          z: RU[2],
          w: RU[3]
        })
      }
      for (PU in UU.quaternions) pU.setQuaternion(PU, EU.d.FromArray(UU.quaternions[PU]));
      for (PU in UU.matrices) pU.setMatrix(PU, EU.c.FromArray(UU.matrices[PU]));
      const qU = pU;
      for (PU in UU.matrixArray) qU._matrixArrays[PU] = new Float32Array(UU.matrixArray[PU]);
      for (PU in UU.matrices3x3) pU.setMatrix3x3(PU, UU.matrices3x3[PU]);
      for (PU in UU.matrices2x2) pU.setMatrix2x2(PU, UU.matrices2x2[PU]);
      for (PU in UU.vectors2Arrays) pU.setArray2(PU, UU.vectors2Arrays[PU]);
      for (PU in UU.vectors3Arrays) pU.setArray3(PU, UU.vectors3Arrays[PU]);
      for (PU in UU.vectors4Arrays) pU.setArray4(PU, UU.vectors4Arrays[PU]);
      for (PU in UU.quaternionsArrays) pU.setArray4(PU, UU.quaternionsArrays[PU]);
      return pU
    }
    async function fU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((pU, EU) => {
        const PU = new KU.e;
        PU.addEventListener("readystatechange", (() => {
          if (4 == PU.readyState)
            if (200 == PU.status) {
              const RU = WU(JSON.parse(PU.responseText), gU || GU.c.LastCreatedScene, tU);
              UU && (RU.name = UU), pU(RU)
            } else EU("Unable to load the ShaderMaterial")
        })), PU.open("GET", RU), PU.send()
      }))
    }
    async function xU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const tU = this?.SnippetUrl ?? eU.SnippetUrl;
      return await new Promise(((pU, EU) => {
        const PU = new KU.e;
        PU.addEventListener("readystatechange", (() => {
          if (4 == PU.readyState)
            if (200 == PU.status) {
              const tU = JSON.parse(JSON.parse(PU.responseText).jsonPayload),
                EU = WU(JSON.parse(tU.shaderMaterial), RU || GU.c.LastCreatedScene, gU);
              EU.snippetId = UU, pU(EU)
            } else EU("Unable to load the snippet " + UU)
        })), PU.open("GET", tU + "/" + UU.replace(/#/g, "/")), PU.send()
      }))
    }
    eU.SnippetUrl = "https://snippet.babylonjs.com";
    const mU = xU;
    let IU = !1;

    function JU() {
      IU || (IU = !0, eU.Parse = WU, eU.ParseFromFileAsync = fU, eU.ParseFromSnippetAsync = xU, eU.CreateFromSnippetAsync = mU, (0, hU.g)("BABYLON.ShaderMaterial", eU))
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);