export const id = 256;
export const ids = [256];
export const modules = {
  40104: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => rT,
      f: () => aT,
      j: () => ST,
      k: () => DT,
      o: () => QT,
      q: () => NT
    });
    var lT = cT(39645),
      MT = cT(39720),
      KT = cT(36892),
      OT = cT(39782),
      yT = cT(40111),
      fT = cT(39970),
      xT = cT(39675),
      IT = cT(39967),
      AT = cT(36925),
      CT = cT(39951),
      jT = cT(39943),
      vT = cT(39985),
      tT = cT(36949);
    const hT = {
      effect: null,
      subMesh: null
    };
    class NT extends IT.e {
      constructor(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(TT, kT, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new KT.d, this._cachedWorldViewProjectionMatrix = new KT.d, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = cT, this._options = {
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
          ...lT
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(TT) {
        this._shaderPath = TT
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
      _checkUniform(TT) {
        -1 === this._options.uniforms.indexOf(TT) && this._options.uniforms.push(TT)
      }
      setTexture(TT, kT) {
        return -1 === this._options.samplers.indexOf(TT) && this._options.samplers.push(TT), this._textures[TT] = kT, this
      }
      setInternalTexture(TT, kT) {
        return -1 === this._options.samplers.indexOf(TT) && this._options.samplers.push(TT), this._internalTextures[TT] = kT, this
      }
      removeTexture(TT) {
        delete this._textures[TT]
      }
      setTextureArray(TT, kT) {
        return -1 === this._options.samplers.indexOf(TT) && this._options.samplers.push(TT), this._checkUniform(TT), this._textureArrays[TT] = kT, this
      }
      setExternalTexture(TT, kT) {
        return -1 === this._options.externalTextures.indexOf(TT) && this._options.externalTextures.push(TT), this._externalTextures[TT] = kT, this
      }
      setFloat(TT, kT) {
        return this._checkUniform(TT), this._floats[TT] = kT, this
      }
      setInt(TT, kT) {
        return this._checkUniform(TT), this._ints[TT] = kT, this
      }
      setUInt(TT, kT) {
        return this._checkUniform(TT), this._uints[TT] = kT, this
      }
      setFloats(TT, kT) {
        return this._checkUniform(TT), this._floatsArrays[TT] = kT, this
      }
      setColor3(TT, kT) {
        return this._checkUniform(TT), this._colors3[TT] = kT, this
      }
      setColor3Array(TT, kT) {
        return this._checkUniform(TT), this._colors3Arrays[TT] = kT.reduce(((TT, kT) => (TT.push(kT.r, kT.g, kT.b), TT)), []), this
      }
      setColor4(TT, kT) {
        return this._checkUniform(TT), this._colors4[TT] = kT, this
      }
      setColor4Array(TT, kT) {
        return this._checkUniform(TT), this._colors4Arrays[TT] = kT.reduce(((TT, kT) => (TT.push(kT.r, kT.g, kT.b, kT.a), TT)), []), this
      }
      setVector2(TT, kT) {
        return this._checkUniform(TT), this._vectors2[TT] = kT, this
      }
      setVector3(TT, kT) {
        return this._checkUniform(TT), this._vectors3[TT] = kT, this
      }
      setVector4(TT, kT) {
        return this._checkUniform(TT), this._vectors4[TT] = kT, this
      }
      setQuaternion(TT, kT) {
        return this._checkUniform(TT), this._quaternions[TT] = kT, this
      }
      setQuaternionArray(TT, kT) {
        return this._checkUniform(TT), this._quaternionsArrays[TT] = kT.reduce(((TT, kT) => (kT.toArray(TT, TT.length), TT)), []), this
      }
      setMatrix(TT, kT) {
        return this._checkUniform(TT), this._matrices[TT] = kT, this
      }
      setMatrices(TT, kT) {
        this._checkUniform(TT);
        const cT = new Float32Array(16 * kT.length);
        for (let lT = 0; lT < kT.length; lT++) {
          kT[lT].copyToArray(cT, 16 * lT)
        }
        return this._matrixArrays[TT] = cT, this
      }
      setMatrix3x3(TT, kT) {
        return this._checkUniform(TT), this._matrices3x3[TT] = kT, this
      }
      setMatrix2x2(TT, kT) {
        return this._checkUniform(TT), this._matrices2x2[TT] = kT, this
      }
      setArray2(TT, kT) {
        return this._checkUniform(TT), this._vectors2Arrays[TT] = kT, this
      }
      setArray3(TT, kT) {
        return this._checkUniform(TT), this._vectors3Arrays[TT] = kT, this
      }
      setArray4(TT, kT) {
        return this._checkUniform(TT), this._vectors4Arrays[TT] = kT, this
      }
      setUniformBuffer(TT, kT) {
        return -1 === this._options.uniformBuffers.indexOf(TT) && this._options.uniformBuffers.push(TT), this._uniformBuffers[TT] = kT, this
      }
      setTextureSampler(TT, kT) {
        return -1 === this._options.samplerObjects.indexOf(TT) && this._options.samplerObjects.push(TT), this._textureSamplers[TT] = kT, this
      }
      setStorageBuffer(TT, kT) {
        return -1 === this._options.storageBuffers.indexOf(TT) && this._options.storageBuffers.push(TT), this._storageBuffers[TT] = kT, this
      }
      setDefine(TT, kT) {
        const cT = TT.trimEnd() + " ",
          lT = this.options.defines.findIndex((kT => kT === TT || kT.startsWith(cT)));
        return lT >= 0 && this.options.defines.splice(lT, 1), ("boolean" !== typeof kT || kT) && this.options.defines.push(cT + kT), this
      }
      isReadyForSubMesh(TT, kT, cT) {
        return this.isReady(TT, cT, kT)
      }
      isReady(TT, kT, cT) {
        const lT = cT && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const TT = lT ? cT._drawWrapper : this._drawWrapper;
          if (TT.effect && TT._wasPreviouslyReady && TT._wasPreviouslyUsingInstances === kT) return !0
        }
        const KT = this.NJ(),
          yT = KT.Dv(),
          xT = [],
          IT = [];
        let AT = null,
          tT = this._shaderPath,
          NT = this._options.uniforms,
          QT = this._options.uniformBuffers,
          ST = this._options.samplers;
        yT.getCaps().multiview && KT.activeCamera && KT.activeCamera.outputRenderTarget && KT.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, xT.push("#define MULTIVIEW"), -1 !== NT.indexOf("viewProjection") && -1 === NT.indexOf("viewProjectionR") && NT.push("viewProjectionR"));
        for (let MT = 0; MT < this._options.defines.length; MT++) {
          const TT = 0 === this._options.defines[MT].indexOf("#define") ? this._options.defines[MT] : `#define ${this._options.defines[MT]}`;
          xT.push(TT)
        }
        for (let MT = 0; MT < this._options.attributes.length; MT++) IT.push(this._options.attributes[MT]);
        if (TT && TT.isVerticesDataPresent(OT.l.ColorKind) && (-1 === IT.indexOf(OT.l.ColorKind) && IT.push(OT.l.ColorKind), xT.push("#define VERTEXCOLOR")), kT && (xT.push("#define INSTANCES"), (0, jT.ub)(IT, this._materialHelperNeedsPreviousMatrices), TT?.hasThinInstances && (xT.push("#define THIN_INSTANCES"), TT && TT.isVerticesDataPresent(OT.l.ColorInstanceKind) && (IT.push(OT.l.ColorInstanceKind), xT.push("#define INSTANCESCOLOR")))), TT && TT.useBones && TT.computeBonesUsingShaders && TT.skeleton) {
          IT.push(OT.l.MatricesIndicesKind), IT.push(OT.l.MatricesWeightsKind), TT.numBoneInfluencers > 4 && (IT.push(OT.l.MatricesIndicesExtraKind), IT.push(OT.l.MatricesWeightsExtraKind));
          const kT = TT.skeleton;
          xT.push("#define NUM_BONE_INFLUENCERS " + TT.numBoneInfluencers), AT = new fT.e, AT.addCPUSkinningFallback(0, TT), kT.isUsingTextureForMatrices ? (xT.push("#define BONETEXTURE"), -1 === NT.indexOf("boneTextureInfo") && NT.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (xT.push("#define BonesPerMesh " + (kT.bones.length + 1)), -1 === NT.indexOf("mBones") && NT.push("mBones"))
        } else xT.push("#define NUM_BONE_INFLUENCERS 0");
        let DT = 0;
        const aT = TT ? TT.morphTargetManager : null;
        if (aT) {
          const kT = -1 !== xT.indexOf("#define UV1"),
            cT = -1 !== xT.indexOf("#define UV2"),
            lT = -1 !== xT.indexOf("#define TANGENT"),
            MT = -1 !== xT.indexOf("#define NORMAL"),
            KT = -1 !== xT.indexOf("#define VERTEXCOLOR");
          DT = (0, jT.J)(aT, xT, IT, TT, !0, MT, lT, kT, cT, KT), aT.isUsingTextureForTargets && (-1 === NT.indexOf("morphTargetTextureIndices") && NT.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), DT > 0 && (NT = NT.slice(), NT.push("morphTargetInfluences"), NT.push("morphTargetCount"), NT.push("morphTargetTextureInfo"), NT.push("morphTargetTextureIndices"))
        } else xT.push("#define NUM_MORPH_INFLUENCERS 0");
        if (TT) {
          const cT = TT.bakedVertexAnimationManager;
          cT && cT.isEnabled && (xT.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === NT.indexOf("bakedVertexAnimationSettings") && NT.push("bakedVertexAnimationSettings"), -1 === NT.indexOf("bakedVertexAnimationTextureSizeInverted") && NT.push("bakedVertexAnimationTextureSizeInverted"), -1 === NT.indexOf("bakedVertexAnimationTime") && NT.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), kT && IT.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const MT in this._textures)
          if (!this._textures[MT].isReady()) return !1;
        for (const MT in this._internalTextures)
          if (!this._internalTextures[MT].isReady) return !1;
        TT && this.needAlphaTestingForMesh(TT) && xT.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, CT.e)(NT), (0, CT.n)(this, KT, xT)), KT.fogEnabled && TT?.applyFog && KT.fogMode !== MT.f.FOGMODE_NONE && (xT.push("#define FOG"), -1 === NT.indexOf("view") && NT.push("view"), -1 === NT.indexOf("vFogInfos") && NT.push("vFogInfos"), -1 === NT.indexOf("vFogColor") && NT.push("vFogColor")), this._useLogarithmicDepth && (xT.push("#define LOGARITHMICDEPTH"), -1 === NT.indexOf("logarithmicDepthConstant") && NT.push("logarithmicDepthConstant"));
        const FT = cT ? cT.getRenderingMesh() : TT;
        if (FT && this.useVertexPulling) {
          const TT = FT.geometry;
          TT && (this._vertexPullingMetadata = (0, vT.f)(TT), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((TT, kT) => {
            NT.push(`vp_${kT}_info`)
          }))), xT.push("#define USE_VERTEX_PULLING");
          const kT = FT.geometry?.getIndexBuffer();
          kT && !FT.isUnIndexed && (xT.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), kT.is32Bits && xT.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (NT = NT.slice(), QT = QT.slice(), ST = ST.slice(), tT = this.customShaderNameResolve(this.name, NT, QT, ST, xT, IT));
        const rT = lT ? cT._getDrawWrapper(void 0, !0) : this._drawWrapper,
          PT = rT?.effect ?? null,
          wT = rT?.defines ?? null,
          mT = xT.join("\n");
        let bT = PT;
        return wT !== mT && (bT = yT.createEffect(tT, {
          attributes: IT,
          uniformsNames: NT,
          uniformBuffersNames: QT,
          samplers: ST,
          defines: mT,
          fallbacks: AT,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: DT
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, yT), lT ? cT.setEffect(bT, mT, this._materialContext) : rT && rT.setEffect(bT, mT), this._onEffectCreatedObservable && (hT.effect = bT, hT.subMesh = cT ?? TT?.kF[0] ?? null, this._onEffectCreatedObservable.notifyObservers(hT))), rT._wasPreviouslyUsingInstances = !!kT, !!bT?.isReady() && (PT !== bT && KT.resetCachedMaterial(), rT._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(TT, kT) {
        const cT = kT ?? this.getEffect();
        if (!cT) return;
        const lT = this._options.uniforms; - 1 !== lT.indexOf("world") && cT.setMatrix("world", TT);
        const MT = this.NJ(); - 1 !== lT.indexOf("worldView") && (TT.multiplyToRef(MT.getViewMatrix(), this._cachedWorldViewMatrix), cT.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== lT.indexOf("worldViewProjection") && (TT.multiplyToRef(MT.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), cT.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== lT.indexOf("view") && cT.setMatrix("view", MT.getViewMatrix())
      }
      bindForSubMesh(TT, kT, cT) {
        this.bind(TT, kT, cT._drawWrapperOverride?.effect, cT)
      }
      bind(TT, kT, cT, lT) {
        const MT = lT && this._storeEffectOnSubMeshes,
          KT = cT ?? (MT ? lT.effect : this.getEffect());
        if (!KT) return;
        const OT = this.NJ();
        this._activeEffect = KT, this.bindOnlyWorldMatrix(TT, cT);
        const yT = this._options.uniformBuffers;
        let fT = !1;
        if (KT && yT && yT.length > 0 && OT.Dv().supportsUniformBuffers)
          for (let IT = 0; IT < yT.length; ++IT) {
            switch (yT[IT]) {
              case "Mesh":
                kT && (kT.getMeshUniformBuffer().bindToEffect(KT, "Mesh"), kT.transferToEffect(TT));
                break;
              case "Scene":
                (0, jT.r)(KT, OT.getSceneUniformBuffer()), OT.finalizeSceneUbo(), fT = !0
            }
          }
        const xT = kT && MT ? this._mustRebind(OT, KT, lT, kT.visibility) : OT.getCachedMaterial() !== this;
        if (KT && xT) {
          let TT;
          for (TT in fT || -1 === this._options.uniforms.indexOf("view") || KT.setMatrix("view", OT.getViewMatrix()), fT || -1 === this._options.uniforms.indexOf("projection") || KT.setMatrix("projection", OT.getProjectionMatrix()), fT || -1 === this._options.uniforms.indexOf("viewProjection") || (KT.setMatrix("viewProjection", OT.getTransformMatrix()), this._multiview && KT.setMatrix("viewProjectionR", OT._transformMatrixR)), OT.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && KT.setVector3("cameraPosition", OT.activeCamera.globalPosition), (0, jT.e)(kT, KT), (0, CT.g)(KT, this, OT), this._vertexPullingMetadata && (0, vT.c)(KT, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, jT.p)(MT ? lT.materialDefines : KT.defines, KT, OT), kT && (0, jT.f)(OT, kT, KT), this._textures) KT.setTexture(TT, this._textures[TT]);
          for (TT in this._internalTextures) KT._bindTexture(TT, this._internalTextures[TT]);
          for (TT in this._textureArrays) KT.setTextureArray(TT, this._textureArrays[TT]);
          for (TT in this._ints) KT.setInt(TT, this._ints[TT]);
          for (TT in this._uints) KT.setUInt(TT, this._uints[TT]);
          for (TT in this._floats) KT.setFloat(TT, this._floats[TT]);
          for (TT in this._floatsArrays) KT.setArray(TT, this._floatsArrays[TT]);
          for (TT in this._colors3) KT.setColor3(TT, this._colors3[TT]);
          for (TT in this._colors3Arrays) KT.setArray3(TT, this._colors3Arrays[TT]);
          for (TT in this._colors4) {
            const kT = this._colors4[TT];
            KT.setFloat4(TT, kT.r, kT.g, kT.b, kT.a)
          }
          for (TT in this._colors4Arrays) KT.setArray4(TT, this._colors4Arrays[TT]);
          for (TT in this._vectors2) KT.setVector2(TT, this._vectors2[TT]);
          for (TT in this._vectors3) KT.setVector3(TT, this._vectors3[TT]);
          for (TT in this._vectors4) KT.setVector4(TT, this._vectors4[TT]);
          for (TT in this._quaternions) KT.setQuaternion(TT, this._quaternions[TT]);
          for (TT in this._matrices) KT.setMatrix(TT, this._matrices[TT]);
          for (TT in this._matrixArrays) KT.setMatrices(TT, this._matrixArrays[TT]);
          for (TT in this._matrices3x3) KT.setMatrix3x3(TT, this._matrices3x3[TT]);
          for (TT in this._matrices2x2) KT.setMatrix2x2(TT, this._matrices2x2[TT]);
          for (TT in this._vectors2Arrays) KT.setArray2(TT, this._vectors2Arrays[TT]);
          for (TT in this._vectors3Arrays) KT.setArray3(TT, this._vectors3Arrays[TT]);
          for (TT in this._vectors4Arrays) KT.setArray4(TT, this._vectors4Arrays[TT]);
          for (TT in this._quaternionsArrays) KT.setArray4(TT, this._quaternionsArrays[TT]);
          for (TT in this._uniformBuffers) {
            const kT = this._uniformBuffers[TT].getBuffer();
            kT && KT.bindUniformBuffer(kT, TT)
          }
          const cT = OT.Dv(),
            yT = cT.setExternalTexture;
          if (yT)
            for (TT in this._externalTextures) yT.call(cT, TT, this._externalTextures[TT]);
          const xT = cT.setTextureSampler;
          if (xT)
            for (TT in this._textureSamplers) xT.call(cT, TT, this._textureSamplers[TT]);
          const IT = cT.setStorageBuffer;
          if (IT)
            for (TT in this._storageBuffers) IT.call(cT, TT, this._storageBuffers[TT])
        }
        if (KT && kT && (xT || !this.isFrozen)) {
          (0, jT.q)(kT, KT), kT.morphTargetManager && kT.morphTargetManager.isUsingTextureForTargets && kT.morphTargetManager._bind(KT);
          const TT = kT.bakedVertexAnimationManager;
          if (TT && TT.isEnabled) {
            const TT = MT ? lT._drawWrapper : this._drawWrapper;
            kT.bakedVertexAnimationManager?.bind(KT, !!TT._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(kT, KT, lT)
      }
      getActiveTextures() {
        const TT = super.getActiveTextures();
        for (const kT in this._textures) TT.push(this._textures[kT]);
        for (const kT in this._textureArrays) {
          const cT = this._textureArrays[kT];
          for (let kT = 0; kT < cT.length; kT++) TT.push(cT[kT])
        }
        return TT
      }
      hasTexture(TT) {
        if (super.hasTexture(TT)) return !0;
        for (const cT in this._textures)
          if (this._textures[cT] === TT) return !0;
        const kT = TT.getInternalTexture();
        for (const cT in this._internalTextures)
          if (this._internalTextures[cT] === kT) return !0;
        for (const cT in this._textureArrays) {
          const kT = this._textureArrays[cT];
          for (let cT = 0; cT < kT.length; cT++)
            if (kT[cT] === TT) return !0
        }
        return !1
      }
      clone(TT) {
        const kT = lT.d.Clone((() => new NT(TT, this.NJ(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        kT.name = TT, kT.id = TT, "object" === typeof kT._shaderPath && (kT._shaderPath = {
          ...kT._shaderPath
        }), this._options = {
          ...this._options
        };
        const cT = Object.keys(this._options);
        for (const lT of cT) {
          const TT = this._options[lT];
          Array.isArray(TT) && (this._options[lT] = TT.slice(0))
        }
        this.stencil.copyTo(kT.stencil);
        for (const lT in this._textures) kT.setTexture(lT, this._textures[lT]);
        for (const lT in this._internalTextures) kT.setInternalTexture(lT, this._internalTextures[lT]);
        for (const lT in this._textureArrays) kT.setTextureArray(lT, this._textureArrays[lT]);
        for (const lT in this._externalTextures) kT.setExternalTexture(lT, this._externalTextures[lT]);
        for (const lT in this._ints) kT.setInt(lT, this._ints[lT]);
        for (const lT in this._uints) kT.setUInt(lT, this._uints[lT]);
        for (const lT in this._floats) kT.setFloat(lT, this._floats[lT]);
        for (const lT in this._floatsArrays) kT.setFloats(lT, this._floatsArrays[lT]);
        for (const lT in this._colors3) kT.setColor3(lT, this._colors3[lT]);
        for (const lT in this._colors3Arrays) kT._colors3Arrays[lT] = this._colors3Arrays[lT];
        for (const lT in this._colors4) kT.setColor4(lT, this._colors4[lT]);
        for (const lT in this._colors4Arrays) kT._colors4Arrays[lT] = this._colors4Arrays[lT];
        for (const lT in this._vectors2) kT.setVector2(lT, this._vectors2[lT]);
        for (const lT in this._vectors3) kT.setVector3(lT, this._vectors3[lT]);
        for (const lT in this._vectors4) kT.setVector4(lT, this._vectors4[lT]);
        for (const lT in this._quaternions) kT.setQuaternion(lT, this._quaternions[lT]);
        for (const lT in this._quaternionsArrays) kT._quaternionsArrays[lT] = this._quaternionsArrays[lT];
        for (const lT in this._matrices) kT.setMatrix(lT, this._matrices[lT]);
        for (const lT in this._matrixArrays) kT._matrixArrays[lT] = this._matrixArrays[lT].slice();
        for (const lT in this._matrices3x3) kT.setMatrix3x3(lT, this._matrices3x3[lT]);
        for (const lT in this._matrices2x2) kT.setMatrix2x2(lT, this._matrices2x2[lT]);
        for (const lT in this._vectors2Arrays) kT.setArray2(lT, this._vectors2Arrays[lT]);
        for (const lT in this._vectors3Arrays) kT.setArray3(lT, this._vectors3Arrays[lT]);
        for (const lT in this._vectors4Arrays) kT.setArray4(lT, this._vectors4Arrays[lT]);
        for (const lT in this._uniformBuffers) kT.setUniformBuffer(lT, this._uniformBuffers[lT]);
        for (const lT in this._textureSamplers) kT.setTextureSampler(lT, this._textureSamplers[lT]);
        for (const lT in this._storageBuffers) kT.setStorageBuffer(lT, this._storageBuffers[lT]);
        return kT
      }
      dispose(TT, kT, cT) {
        if (kT) {
          let TT;
          for (TT in this._textures) this._textures[TT].dispose();
          for (TT in this._internalTextures) this._internalTextures[TT].dispose();
          for (TT in this._textureArrays) {
            const kT = this._textureArrays[TT];
            for (let TT = 0; TT < kT.length; TT++) kT[TT].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(TT, kT, cT)
      }
      serialize() {
        const TT = lT.d.Serialize(this);
        let kT;
        for (kT in TT.customType = "BABYLON.ShaderMaterial", TT.uniqueId = this.uniqueId, TT.options = this._options, TT.shaderPath = this._shaderPath, TT.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, TT.stencil = this.stencil.serialize(), TT.textures = {}, this._textures) TT.textures[kT] = this._textures[kT].serialize();
        for (kT in TT.textureArrays = {}, this._textureArrays) {
          TT.textureArrays[kT] = [];
          const cT = this._textureArrays[kT];
          for (let lT = 0; lT < cT.length; lT++) TT.textureArrays[kT].push(cT[lT].serialize())
        }
        for (kT in TT.ints = {}, this._ints) TT.ints[kT] = this._ints[kT];
        for (kT in TT.uints = {}, this._uints) TT.uints[kT] = this._uints[kT];
        for (kT in TT.floats = {}, this._floats) TT.floats[kT] = this._floats[kT];
        for (kT in TT.floatsArrays = {}, this._floatsArrays) TT.floatsArrays[kT] = this._floatsArrays[kT];
        for (kT in TT.colors3 = {}, this._colors3) {
          const cT = this._colors3[kT];
          TT.colors3[kT] = [cT.r, cT.g, cT.b]
        }
        for (kT in TT.colors3Arrays = {}, this._colors3Arrays) TT.colors3Arrays[kT] = this._colors3Arrays[kT];
        for (kT in TT.colors4 = {}, this._colors4) {
          const cT = this._colors4[kT];
          TT.colors4[kT] = [cT.r, cT.g, cT.b, cT.a]
        }
        for (kT in TT.colors4Arrays = {}, this._colors4Arrays) TT.colors4Arrays[kT] = this._colors4Arrays[kT];
        for (kT in TT.vectors2 = {}, this._vectors2) {
          const cT = this._vectors2[kT];
          TT.vectors2[kT] = [cT.x, cT.y]
        }
        for (kT in TT.vectors3 = {}, this._vectors3) {
          const cT = this._vectors3[kT];
          TT.vectors3[kT] = [cT.x, cT.y, cT.z]
        }
        for (kT in TT.vectors4 = {}, this._vectors4) {
          const cT = this._vectors4[kT];
          TT.vectors4[kT] = [cT.x, cT.y, cT.z, cT.w]
        }
        for (kT in TT.quaternions = {}, this._quaternions) TT.quaternions[kT] = this._quaternions[kT].acT();
        for (kT in TT.matrices = {}, this._matrices) TT.matrices[kT] = this._matrices[kT].acT();
        for (kT in TT.matrixArray = {}, this._matrixArrays) TT.matrixArray[kT] = this._matrixArrays[kT];
        for (kT in TT.matrices3x3 = {}, this._matrices3x3) TT.matrices3x3[kT] = this._matrices3x3[kT];
        for (kT in TT.matrices2x2 = {}, this._matrices2x2) TT.matrices2x2[kT] = this._matrices2x2[kT];
        for (kT in TT.vectors2Arrays = {}, this._vectors2Arrays) TT.vectors2Arrays[kT] = this._vectors2Arrays[kT];
        for (kT in TT.vectors3Arrays = {}, this._vectors3Arrays) TT.vectors3Arrays[kT] = this._vectors3Arrays[kT];
        for (kT in TT.vectors4Arrays = {}, this._vectors4Arrays) TT.vectors4Arrays[kT] = this._vectors4Arrays[kT];
        for (kT in TT.quaternionsArrays = {}, this._quaternionsArrays) TT.quaternionsArrays[kT] = this._quaternionsArrays[kT];
        return TT
      }
    }

    function QT(TT, kT, cT) {
      const MT = lT.d.Parse((() => new NT(TT.name, kT, TT.shaderPath, TT.options, TT.storeEffectOnSubMeshes)), TT, kT, cT);
      let OT;
      for (OT in TT.stencil && MT.stencil.parse(TT.stencil, kT, cT), TT.textures) MT.setTexture(OT, yT.f.Parse(TT.textures[OT], kT, cT));
      for (OT in TT.textureArrays) {
        const lT = TT.textureArrays[OT],
          KT = [];
        for (let TT = 0; TT < lT.length; TT++) KT.push(yT.f.Parse(lT[TT], kT, cT));
        MT.setTextureArray(OT, KT)
      }
      for (OT in TT.ints) MT.setInt(OT, TT.ints[OT]);
      for (OT in TT.uints) MT.setUInt(OT, TT.uints[OT]);
      for (OT in TT.floats) MT.setFloat(OT, TT.floats[OT]);
      for (OT in TT.floatsArrays) MT.setFloats(OT, TT.floatsArrays[OT]);
      for (OT in TT.colors3) {
        const kT = TT.colors3[OT];
        MT.setColor3(OT, {
          r: kT[0],
          g: kT[1],
          b: kT[2]
        })
      }
      for (OT in TT.colors3Arrays) {
        const kT = TT.colors3Arrays[OT].reduce(((TT, kT, cT) => (cT % 3 === 0 ? TT.push([kT]) : TT[TT.length - 1].push(kT), TT)), []).map((TT => ({
          r: TT[0],
          g: TT[1],
          b: TT[2]
        })));
        MT.setColor3Array(OT, kT)
      }
      for (OT in TT.colors4) {
        const kT = TT.colors4[OT];
        MT.setColor4(OT, {
          r: kT[0],
          g: kT[1],
          b: kT[2],
          a: kT[3]
        })
      }
      for (OT in TT.colors4Arrays) {
        const kT = TT.colors4Arrays[OT].reduce(((TT, kT, cT) => (cT % 4 === 0 ? TT.push([kT]) : TT[TT.length - 1].push(kT), TT)), []).map((TT => ({
          r: TT[0],
          g: TT[1],
          b: TT[2],
          a: TT[3]
        })));
        MT.setColor4Array(OT, kT)
      }
      for (OT in TT.vectors2) {
        const kT = TT.vectors2[OT];
        MT.setVector2(OT, {
          x: kT[0],
          y: kT[1]
        })
      }
      for (OT in TT.vectors3) {
        const kT = TT.vectors3[OT];
        MT.setVector3(OT, {
          x: kT[0],
          y: kT[1],
          z: kT[2]
        })
      }
      for (OT in TT.vectors4) {
        const kT = TT.vectors4[OT];
        MT.setVector4(OT, {
          x: kT[0],
          y: kT[1],
          z: kT[2],
          w: kT[3]
        })
      }
      for (OT in TT.quaternions) MT.setQuaternion(OT, KT.f.FromArray(TT.quaternions[OT]));
      for (OT in TT.matrices) MT.setMatrix(OT, KT.d.FromArray(TT.matrices[OT]));
      const fT = MT;
      for (OT in TT.matrixArray) fT._matrixArrays[OT] = new Float32Array(TT.matrixArray[OT]);
      for (OT in TT.matrices3x3) MT.setMatrix3x3(OT, TT.matrices3x3[OT]);
      for (OT in TT.matrices2x2) MT.setMatrix2x2(OT, TT.matrices2x2[OT]);
      for (OT in TT.vectors2Arrays) MT.setArray2(OT, TT.vectors2Arrays[OT]);
      for (OT in TT.vectors3Arrays) MT.setArray3(OT, TT.vectors3Arrays[OT]);
      for (OT in TT.vectors4Arrays) MT.setArray4(OT, TT.vectors4Arrays[OT]);
      for (OT in TT.quaternionsArrays) MT.setArray4(OT, TT.quaternionsArrays[OT]);
      return MT
    }
    async function ST(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((MT, KT) => {
        const OT = new xT.b;
        OT.addEventListener("readystatechange", (() => {
          if (4 == OT.readyState)
            if (200 == OT.status) {
              const kT = QT(JSON.parse(OT.responseText), cT || AT.d.LastCreatedScene, lT);
              TT && (kT.name = TT), MT(kT)
            } else KT("Unable to load the ShaderMaterial")
        })), OT.open("GET", kT), OT.send()
      }))
    }
    async function DT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const lT = this?.SnippetUrl ?? NT.SnippetUrl;
      return await new Promise(((MT, KT) => {
        const OT = new xT.b;
        OT.addEventListener("readystatechange", (() => {
          if (4 == OT.readyState)
            if (200 == OT.status) {
              const lT = JSON.parse(JSON.parse(OT.responseText).jsonPayload),
                KT = QT(JSON.parse(lT.shaderMaterial), kT || AT.d.LastCreatedScene, cT);
              KT.snippetId = TT, MT(KT)
            } else KT("Unable to load the snippet " + TT)
        })), OT.open("GET", lT + "/" + TT.replace(/#/g, "/")), OT.send()
      }))
    }
    NT.SnippetUrl = "https://snippet.babylonjs.com";
    const aT = DT;
    let FT = !1;

    function rT() {
      FT || (FT = !0, NT.Parse = QT, NT.ParseFromFileAsync = ST, NT.ParseFromSnippetAsync = DT, NT.CreateFromSnippetAsync = aT, (0, tT.g)("BABYLON.ShaderMaterial", NT))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);