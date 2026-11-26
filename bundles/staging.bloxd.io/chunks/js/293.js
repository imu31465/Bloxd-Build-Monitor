export const id = 293;
export const ids = [293];
export const modules = {
  41769: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => VH,
      f: () => TH,
      j: () => vH,
      n: () => PH,
      q: () => xH,
      r: () => MH
    });
    var AH = LH(41319),
      rH = LH(41383),
      SH = LH(37963),
      hH = LH(41427),
      tH = LH(41777),
      zH = LH(41636),
      CH = LH(41339),
      EH = LH(41634),
      XH = LH(37989),
      GH = LH(41623),
      YH = LH(41618),
      uH = LH(41653),
      QH = LH(38012);
    const WH = {
      effect: null,
      subMesh: null
    };
    class MH extends EH.b {
      constructor(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(HH, BH, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new SH.e, this._cachedWorldViewProjectionMatrix = new SH.e, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = LH, this._options = {
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
          ...AH
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(HH) {
        this._shaderPath = HH
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
      _checkUniform(HH) {
        -1 === this._options.uniforms.indexOf(HH) && this._options.uniforms.push(HH)
      }
      setTexture(HH, BH) {
        return -1 === this._options.samplers.indexOf(HH) && this._options.samplers.push(HH), this._textures[HH] = BH, this
      }
      setInternalTexture(HH, BH) {
        return -1 === this._options.samplers.indexOf(HH) && this._options.samplers.push(HH), this._internalTextures[HH] = BH, this
      }
      removeTexture(HH) {
        delete this._textures[HH]
      }
      setTextureArray(HH, BH) {
        return -1 === this._options.samplers.indexOf(HH) && this._options.samplers.push(HH), this._checkUniform(HH), this._textureArrays[HH] = BH, this
      }
      setExternalTexture(HH, BH) {
        return -1 === this._options.externalTextures.indexOf(HH) && this._options.externalTextures.push(HH), this._externalTextures[HH] = BH, this
      }
      setFloat(HH, BH) {
        return this._checkUniform(HH), this._floats[HH] = BH, this
      }
      setInt(HH, BH) {
        return this._checkUniform(HH), this._ints[HH] = BH, this
      }
      setUInt(HH, BH) {
        return this._checkUniform(HH), this._uints[HH] = BH, this
      }
      setFloats(HH, BH) {
        return this._checkUniform(HH), this._floatsArrays[HH] = BH, this
      }
      setColor3(HH, BH) {
        return this._checkUniform(HH), this._colors3[HH] = BH, this
      }
      setColor3Array(HH, BH) {
        return this._checkUniform(HH), this._colors3Arrays[HH] = BH.reduce(((HH, BH) => (HH.push(BH.r, BH.g, BH.b), HH)), []), this
      }
      setColor4(HH, BH) {
        return this._checkUniform(HH), this._colors4[HH] = BH, this
      }
      setColor4Array(HH, BH) {
        return this._checkUniform(HH), this._colors4Arrays[HH] = BH.reduce(((HH, BH) => (HH.push(BH.r, BH.g, BH.b, BH.a), HH)), []), this
      }
      setVector2(HH, BH) {
        return this._checkUniform(HH), this._vectors2[HH] = BH, this
      }
      setVector3(HH, BH) {
        return this._checkUniform(HH), this._vectors3[HH] = BH, this
      }
      setVector4(HH, BH) {
        return this._checkUniform(HH), this._vectors4[HH] = BH, this
      }
      setQuaternion(HH, BH) {
        return this._checkUniform(HH), this._quaternions[HH] = BH, this
      }
      setQuaternionArray(HH, BH) {
        return this._checkUniform(HH), this._quaternionsArrays[HH] = BH.reduce(((HH, BH) => (BH.toArray(HH, HH.length), HH)), []), this
      }
      setMatrix(HH, BH) {
        return this._checkUniform(HH), this._matrices[HH] = BH, this
      }
      setMatrices(HH, BH) {
        this._checkUniform(HH);
        const LH = new Float32Array(16 * BH.length);
        for (let AH = 0; AH < BH.length; AH++) {
          BH[AH].copyToArray(LH, 16 * AH)
        }
        return this._matrixArrays[HH] = LH, this
      }
      setMatrix3x3(HH, BH) {
        return this._checkUniform(HH), this._matrices3x3[HH] = BH, this
      }
      setMatrix2x2(HH, BH) {
        return this._checkUniform(HH), this._matrices2x2[HH] = BH, this
      }
      setArray2(HH, BH) {
        return this._checkUniform(HH), this._vectors2Arrays[HH] = BH, this
      }
      setArray3(HH, BH) {
        return this._checkUniform(HH), this._vectors3Arrays[HH] = BH, this
      }
      setArray4(HH, BH) {
        return this._checkUniform(HH), this._vectors4Arrays[HH] = BH, this
      }
      setUniformBuffer(HH, BH) {
        return -1 === this._options.uniformBuffers.indexOf(HH) && this._options.uniformBuffers.push(HH), this._uniformBuffers[HH] = BH, this
      }
      setTextureSampler(HH, BH) {
        return -1 === this._options.samplerObjects.indexOf(HH) && this._options.samplerObjects.push(HH), this._textureSamplers[HH] = BH, this
      }
      setStorageBuffer(HH, BH) {
        return -1 === this._options.storageBuffers.indexOf(HH) && this._options.storageBuffers.push(HH), this._storageBuffers[HH] = BH, this
      }
      setDefine(HH, BH) {
        const LH = HH.trimEnd() + " ",
          AH = this.options.defines.findIndex((BH => BH === HH || BH.startsWith(LH)));
        return AH >= 0 && this.options.defines.splice(AH, 1), ("boolean" !== typeof BH || BH) && this.options.defines.push(LH + BH), this
      }
      isReadyForSubMesh(HH, BH, LH) {
        return this.isReady(HH, LH, BH)
      }
      isReady(HH, BH, LH) {
        const AH = LH && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const HH = AH ? LH._drawWrapper : this._drawWrapper;
          if (HH.effect && HH._wasPreviouslyReady && HH._wasPreviouslyUsingInstances === BH) return !0
        }
        const SH = this.yN(),
          tH = SH.Iu(),
          CH = [],
          EH = [];
        let XH = null,
          QH = this._shaderPath,
          MH = this._options.uniforms,
          xH = this._options.uniformBuffers,
          vH = this._options.samplers;
        tH.getCaps().multiview && SH.activeCamera && SH.activeCamera.outputRenderTarget && SH.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, CH.push("#define MULTIVIEW"), -1 !== MH.indexOf("viewProjection") && -1 === MH.indexOf("viewProjectionR") && MH.push("viewProjectionR"));
        for (let rH = 0; rH < this._options.defines.length; rH++) {
          const HH = 0 === this._options.defines[rH].indexOf("#define") ? this._options.defines[rH] : `#define ${this._options.defines[rH]}`;
          CH.push(HH)
        }
        for (let rH = 0; rH < this._options.attributes.length; rH++) EH.push(this._options.attributes[rH]);
        if (HH && HH.isVerticesDataPresent(hH.i.ColorKind) && (-1 === EH.indexOf(hH.i.ColorKind) && EH.push(hH.i.ColorKind), CH.push("#define VERTEXCOLOR")), BH && (CH.push("#define INSTANCES"), (0, YH.kb)(EH, this._materialHelperNeedsPreviousMatrices), HH?.hasThinInstances && (CH.push("#define THIN_INSTANCES"), HH && HH.isVerticesDataPresent(hH.i.ColorInstanceKind) && (EH.push(hH.i.ColorInstanceKind), CH.push("#define INSTANCESCOLOR")))), HH && HH.useBones && HH.computeBonesUsingShaders && HH.skeleton) {
          EH.push(hH.i.MatricesIndicesKind), EH.push(hH.i.MatricesWeightsKind), HH.numBoneInfluencers > 4 && (EH.push(hH.i.MatricesIndicesExtraKind), EH.push(hH.i.MatricesWeightsExtraKind));
          const BH = HH.skeleton;
          CH.push("#define NUM_BONE_INFLUENCERS " + HH.numBoneInfluencers), XH = new zH.b, XH.addCPUSkinningFallback(0, HH), BH.isUsingTextureForMatrices ? (CH.push("#define BONETEXTURE"), -1 === MH.indexOf("boneTextureInfo") && MH.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (CH.push("#define BonesPerMesh " + (BH.bones.length + 1)), -1 === MH.indexOf("mBones") && MH.push("mBones"))
        } else CH.push("#define NUM_BONE_INFLUENCERS 0");
        let PH = 0;
        const TH = HH ? HH.morphTargetManager : null;
        if (TH) {
          const BH = -1 !== CH.indexOf("#define UV1"),
            LH = -1 !== CH.indexOf("#define UV2"),
            AH = -1 !== CH.indexOf("#define TANGENT"),
            rH = -1 !== CH.indexOf("#define NORMAL"),
            SH = -1 !== CH.indexOf("#define VERTEXCOLOR");
          PH = (0, YH.H)(TH, CH, EH, HH, !0, rH, AH, BH, LH, SH), TH.isUsingTextureForTargets && (-1 === MH.indexOf("morphTargetTextureIndices") && MH.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), PH > 0 && (MH = MH.slice(), MH.push("morphTargetInfluences"), MH.push("morphTargetCount"), MH.push("morphTargetTextureInfo"), MH.push("morphTargetTextureIndices"))
        } else CH.push("#define NUM_MORPH_INFLUENCERS 0");
        if (HH) {
          const LH = HH.bakedVertexAnimationManager;
          LH && LH.isEnabled && (CH.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === MH.indexOf("bakedVertexAnimationSettings") && MH.push("bakedVertexAnimationSettings"), -1 === MH.indexOf("bakedVertexAnimationTextureSizeInverted") && MH.push("bakedVertexAnimationTextureSizeInverted"), -1 === MH.indexOf("bakedVertexAnimationTime") && MH.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), BH && EH.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const rH in this._textures)
          if (!this._textures[rH].isReady()) return !1;
        for (const rH in this._internalTextures)
          if (!this._internalTextures[rH].isReady) return !1;
        HH && this.needAlphaTestingForMesh(HH) && CH.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, GH.b)(MH), (0, GH.i)(this, SH, CH)), SH.fogEnabled && HH?.applyFog && SH.fogMode !== rH.d.FOGMODE_NONE && (CH.push("#define FOG"), -1 === MH.indexOf("view") && MH.push("view"), -1 === MH.indexOf("vFogInfos") && MH.push("vFogInfos"), -1 === MH.indexOf("vFogColor") && MH.push("vFogColor")), this._useLogarithmicDepth && (CH.push("#define LOGARITHMICDEPTH"), -1 === MH.indexOf("logarithmicDepthConstant") && MH.push("logarithmicDepthConstant"));
        const UH = LH ? LH.getRenderingMesh() : HH;
        if (UH && this.useVertexPulling) {
          const HH = UH.geometry;
          HH && (this._vertexPullingMetadata = (0, uH.f)(HH), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((HH, BH) => {
            MH.push(`vp_${BH}_info`)
          }))), CH.push("#define USE_VERTEX_PULLING");
          const BH = UH.geometry?.getIndexBuffer();
          BH && !UH.isUnIndexed && (CH.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), BH.is32Bits && CH.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (MH = MH.slice(), xH = xH.slice(), vH = vH.slice(), QH = this.customShaderNameResolve(this.name, MH, xH, vH, CH, EH));
        const VH = AH ? LH._getDrawWrapper(void 0, !0) : this._drawWrapper,
          OH = VH?.effect ?? null,
          bH = VH?.defines ?? null,
          kH = CH.join("\n");
        let mH = OH;
        return bH !== kH && (mH = tH.createEffect(QH, {
          attributes: EH,
          uniformsNames: MH,
          uniformBuffersNames: xH,
          samplers: vH,
          defines: kH,
          fallbacks: XH,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: PH
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, tH), AH ? LH.setEffect(mH, kH, this._materialContext) : VH && VH.setEffect(mH, kH), this._onEffectCreatedObservable && (WH.effect = mH, WH.subMesh = LH ?? HH?.jU[0] ?? null, this._onEffectCreatedObservable.notifyObservers(WH))), VH._wasPreviouslyUsingInstances = !!BH, !!mH?.isReady() && (OH !== mH && SH.resetCachedMaterial(), VH._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(HH, BH) {
        const LH = BH ?? this.getEffect();
        if (!LH) return;
        const AH = this._options.uniforms; - 1 !== AH.indexOf("world") && LH.setMatrix("world", HH);
        const rH = this.yN(); - 1 !== AH.indexOf("worldView") && (HH.multiplyToRef(rH.getViewMatrix(), this._cachedWorldViewMatrix), LH.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== AH.indexOf("worldViewProjection") && (HH.multiplyToRef(rH.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), LH.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== AH.indexOf("view") && LH.setMatrix("view", rH.getViewMatrix())
      }
      bindForSubMesh(HH, BH, LH) {
        this.bind(HH, BH, LH._drawWrapperOverride?.effect, LH)
      }
      bind(HH, BH, LH, AH) {
        const rH = AH && this._storeEffectOnSubMeshes,
          SH = LH ?? (rH ? AH.effect : this.getEffect());
        if (!SH) return;
        const hH = this.yN();
        this._activeEffect = SH, this.bindOnlyWorldMatrix(HH, LH);
        const tH = this._options.uniformBuffers;
        let zH = !1;
        if (SH && tH && tH.length > 0 && hH.Iu().supportsUniformBuffers)
          for (let EH = 0; EH < tH.length; ++EH) {
            switch (tH[EH]) {
              case "Mesh":
                BH && (BH.getMeshUniformBuffer().bindToEffect(SH, "Mesh"), BH.transferToEffect(HH));
                break;
              case "Scene":
                (0, YH.t)(SH, hH.getSceneUniformBuffer()), hH.finalizeSceneUbo(), zH = !0
            }
          }
        const CH = BH && rH ? this._mustRebind(hH, SH, AH, BH.visibility) : hH.getCachedMaterial() !== this;
        if (SH && CH) {
          let HH;
          for (HH in zH || -1 === this._options.uniforms.indexOf("view") || SH.setMatrix("view", hH.getViewMatrix()), zH || -1 === this._options.uniforms.indexOf("projection") || SH.setMatrix("projection", hH.getProjectionMatrix()), zH || -1 === this._options.uniforms.indexOf("viewProjection") || (SH.setMatrix("viewProjection", hH.getTransformMatrix()), this._multiview && SH.setMatrix("viewProjectionR", hH._transformMatrixR)), hH.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && SH.setVector3("cameraPosition", hH.activeCamera.globalPosition), (0, YH.d)(BH, SH), (0, GH.d)(SH, this, hH), this._vertexPullingMetadata && (0, uH.d)(SH, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, YH.q)(rH ? AH.materialDefines : SH.defines, SH, hH), BH && (0, YH.f)(hH, BH, SH), this._textures) SH.setTexture(HH, this._textures[HH]);
          for (HH in this._internalTextures) SH._bindTexture(HH, this._internalTextures[HH]);
          for (HH in this._textureArrays) SH.setTextureArray(HH, this._textureArrays[HH]);
          for (HH in this._ints) SH.setInt(HH, this._ints[HH]);
          for (HH in this._uints) SH.setUInt(HH, this._uints[HH]);
          for (HH in this._floats) SH.setFloat(HH, this._floats[HH]);
          for (HH in this._floatsArrays) SH.setArray(HH, this._floatsArrays[HH]);
          for (HH in this._colors3) SH.setColor3(HH, this._colors3[HH]);
          for (HH in this._colors3Arrays) SH.setArray3(HH, this._colors3Arrays[HH]);
          for (HH in this._colors4) {
            const BH = this._colors4[HH];
            SH.setFloat4(HH, BH.r, BH.g, BH.b, BH.a)
          }
          for (HH in this._colors4Arrays) SH.setArray4(HH, this._colors4Arrays[HH]);
          for (HH in this._vectors2) SH.setVector2(HH, this._vectors2[HH]);
          for (HH in this._vectors3) SH.setVector3(HH, this._vectors3[HH]);
          for (HH in this._vectors4) SH.setVector4(HH, this._vectors4[HH]);
          for (HH in this._quaternions) SH.setQuaternion(HH, this._quaternions[HH]);
          for (HH in this._matrices) SH.setMatrix(HH, this._matrices[HH]);
          for (HH in this._matrixArrays) SH.setMatrices(HH, this._matrixArrays[HH]);
          for (HH in this._matrices3x3) SH.setMatrix3x3(HH, this._matrices3x3[HH]);
          for (HH in this._matrices2x2) SH.setMatrix2x2(HH, this._matrices2x2[HH]);
          for (HH in this._vectors2Arrays) SH.setArray2(HH, this._vectors2Arrays[HH]);
          for (HH in this._vectors3Arrays) SH.setArray3(HH, this._vectors3Arrays[HH]);
          for (HH in this._vectors4Arrays) SH.setArray4(HH, this._vectors4Arrays[HH]);
          for (HH in this._quaternionsArrays) SH.setArray4(HH, this._quaternionsArrays[HH]);
          for (HH in this._uniformBuffers) {
            const BH = this._uniformBuffers[HH].getBuffer();
            BH && SH.bindUniformBuffer(BH, HH)
          }
          const LH = hH.Iu(),
            tH = LH.setExternalTexture;
          if (tH)
            for (HH in this._externalTextures) tH.call(LH, HH, this._externalTextures[HH]);
          const CH = LH.setTextureSampler;
          if (CH)
            for (HH in this._textureSamplers) CH.call(LH, HH, this._textureSamplers[HH]);
          const EH = LH.setStorageBuffer;
          if (EH)
            for (HH in this._storageBuffers) EH.call(LH, HH, this._storageBuffers[HH])
        }
        if (SH && BH && (CH || !this.isFrozen)) {
          (0, YH.r)(BH, SH), BH.morphTargetManager && BH.morphTargetManager.isUsingTextureForTargets && BH.morphTargetManager._bind(SH);
          const HH = BH.bakedVertexAnimationManager;
          if (HH && HH.isEnabled) {
            const HH = rH ? AH._drawWrapper : this._drawWrapper;
            BH.bakedVertexAnimationManager?.bind(SH, !!HH._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(BH, SH, AH)
      }
      getActiveTextures() {
        const HH = super.getActiveTextures();
        for (const BH in this._textures) HH.push(this._textures[BH]);
        for (const BH in this._textureArrays) {
          const LH = this._textureArrays[BH];
          for (let BH = 0; BH < LH.length; BH++) HH.push(LH[BH])
        }
        return HH
      }
      hasTexture(HH) {
        if (super.hasTexture(HH)) return !0;
        for (const LH in this._textures)
          if (this._textures[LH] === HH) return !0;
        const BH = HH.getInternalTexture();
        for (const LH in this._internalTextures)
          if (this._internalTextures[LH] === BH) return !0;
        for (const LH in this._textureArrays) {
          const BH = this._textureArrays[LH];
          for (let LH = 0; LH < BH.length; LH++)
            if (BH[LH] === HH) return !0
        }
        return !1
      }
      clone(HH) {
        const BH = AH.c.Clone((() => new MH(HH, this.yN(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        BH.name = HH, BH.id = HH, "object" === typeof BH._shaderPath && (BH._shaderPath = {
          ...BH._shaderPath
        }), this._options = {
          ...this._options
        };
        const LH = Object.keys(this._options);
        for (const AH of LH) {
          const HH = this._options[AH];
          Array.isArray(HH) && (this._options[AH] = HH.slice(0))
        }
        this.stencil.copyTo(BH.stencil);
        for (const AH in this._textures) BH.setTexture(AH, this._textures[AH]);
        for (const AH in this._internalTextures) BH.setInternalTexture(AH, this._internalTextures[AH]);
        for (const AH in this._textureArrays) BH.setTextureArray(AH, this._textureArrays[AH]);
        for (const AH in this._externalTextures) BH.setExternalTexture(AH, this._externalTextures[AH]);
        for (const AH in this._ints) BH.setInt(AH, this._ints[AH]);
        for (const AH in this._uints) BH.setUInt(AH, this._uints[AH]);
        for (const AH in this._floats) BH.setFloat(AH, this._floats[AH]);
        for (const AH in this._floatsArrays) BH.setFloats(AH, this._floatsArrays[AH]);
        for (const AH in this._colors3) BH.setColor3(AH, this._colors3[AH]);
        for (const AH in this._colors3Arrays) BH._colors3Arrays[AH] = this._colors3Arrays[AH];
        for (const AH in this._colors4) BH.setColor4(AH, this._colors4[AH]);
        for (const AH in this._colors4Arrays) BH._colors4Arrays[AH] = this._colors4Arrays[AH];
        for (const AH in this._vectors2) BH.setVector2(AH, this._vectors2[AH]);
        for (const AH in this._vectors3) BH.setVector3(AH, this._vectors3[AH]);
        for (const AH in this._vectors4) BH.setVector4(AH, this._vectors4[AH]);
        for (const AH in this._quaternions) BH.setQuaternion(AH, this._quaternions[AH]);
        for (const AH in this._quaternionsArrays) BH._quaternionsArrays[AH] = this._quaternionsArrays[AH];
        for (const AH in this._matrices) BH.setMatrix(AH, this._matrices[AH]);
        for (const AH in this._matrixArrays) BH._matrixArrays[AH] = this._matrixArrays[AH].slice();
        for (const AH in this._matrices3x3) BH.setMatrix3x3(AH, this._matrices3x3[AH]);
        for (const AH in this._matrices2x2) BH.setMatrix2x2(AH, this._matrices2x2[AH]);
        for (const AH in this._vectors2Arrays) BH.setArray2(AH, this._vectors2Arrays[AH]);
        for (const AH in this._vectors3Arrays) BH.setArray3(AH, this._vectors3Arrays[AH]);
        for (const AH in this._vectors4Arrays) BH.setArray4(AH, this._vectors4Arrays[AH]);
        for (const AH in this._uniformBuffers) BH.setUniformBuffer(AH, this._uniformBuffers[AH]);
        for (const AH in this._textureSamplers) BH.setTextureSampler(AH, this._textureSamplers[AH]);
        for (const AH in this._storageBuffers) BH.setStorageBuffer(AH, this._storageBuffers[AH]);
        return BH
      }
      dispose(HH, BH, LH) {
        if (BH) {
          let HH;
          for (HH in this._textures) this._textures[HH].dispose();
          for (HH in this._internalTextures) this._internalTextures[HH].dispose();
          for (HH in this._textureArrays) {
            const BH = this._textureArrays[HH];
            for (let HH = 0; HH < BH.length; HH++) BH[HH].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(HH, BH, LH)
      }
      serialize() {
        const HH = AH.c.Serialize(this);
        let BH;
        for (BH in HH.customType = "BABYLON.ShaderMaterial", HH.uniqueId = this.uniqueId, HH.options = this._options, HH.shaderPath = this._shaderPath, HH.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, HH.stencil = this.stencil.serialize(), HH.textures = {}, this._textures) HH.textures[BH] = this._textures[BH].serialize();
        for (BH in HH.textureArrays = {}, this._textureArrays) {
          HH.textureArrays[BH] = [];
          const LH = this._textureArrays[BH];
          for (let AH = 0; AH < LH.length; AH++) HH.textureArrays[BH].push(LH[AH].serialize())
        }
        for (BH in HH.ints = {}, this._ints) HH.ints[BH] = this._ints[BH];
        for (BH in HH.uints = {}, this._uints) HH.uints[BH] = this._uints[BH];
        for (BH in HH.floats = {}, this._floats) HH.floats[BH] = this._floats[BH];
        for (BH in HH.floatsArrays = {}, this._floatsArrays) HH.floatsArrays[BH] = this._floatsArrays[BH];
        for (BH in HH.colors3 = {}, this._colors3) {
          const LH = this._colors3[BH];
          HH.colors3[BH] = [LH.r, LH.g, LH.b]
        }
        for (BH in HH.colors3Arrays = {}, this._colors3Arrays) HH.colors3Arrays[BH] = this._colors3Arrays[BH];
        for (BH in HH.colors4 = {}, this._colors4) {
          const LH = this._colors4[BH];
          HH.colors4[BH] = [LH.r, LH.g, LH.b, LH.a]
        }
        for (BH in HH.colors4Arrays = {}, this._colors4Arrays) HH.colors4Arrays[BH] = this._colors4Arrays[BH];
        for (BH in HH.vectors2 = {}, this._vectors2) {
          const LH = this._vectors2[BH];
          HH.vectors2[BH] = [LH.x, LH.y]
        }
        for (BH in HH.vectors3 = {}, this._vectors3) {
          const LH = this._vectors3[BH];
          HH.vectors3[BH] = [LH.x, LH.y, LH.z]
        }
        for (BH in HH.vectors4 = {}, this._vectors4) {
          const LH = this._vectors4[BH];
          HH.vectors4[BH] = [LH.x, LH.y, LH.z, LH.w]
        }
        for (BH in HH.quaternions = {}, this._quaternions) HH.quaternions[BH] = this._quaternions[BH].xrH();
        for (BH in HH.matrices = {}, this._matrices) HH.matrices[BH] = this._matrices[BH].xrH();
        for (BH in HH.matrixArray = {}, this._matrixArrays) HH.matrixArray[BH] = this._matrixArrays[BH];
        for (BH in HH.matrices3x3 = {}, this._matrices3x3) HH.matrices3x3[BH] = this._matrices3x3[BH];
        for (BH in HH.matrices2x2 = {}, this._matrices2x2) HH.matrices2x2[BH] = this._matrices2x2[BH];
        for (BH in HH.vectors2Arrays = {}, this._vectors2Arrays) HH.vectors2Arrays[BH] = this._vectors2Arrays[BH];
        for (BH in HH.vectors3Arrays = {}, this._vectors3Arrays) HH.vectors3Arrays[BH] = this._vectors3Arrays[BH];
        for (BH in HH.vectors4Arrays = {}, this._vectors4Arrays) HH.vectors4Arrays[BH] = this._vectors4Arrays[BH];
        for (BH in HH.quaternionsArrays = {}, this._quaternionsArrays) HH.quaternionsArrays[BH] = this._quaternionsArrays[BH];
        return HH
      }
    }

    function xH(HH, BH, LH) {
      const rH = AH.c.Parse((() => new MH(HH.name, BH, HH.shaderPath, HH.options, HH.storeEffectOnSubMeshes)), HH, BH, LH);
      let hH;
      for (hH in HH.stencil && rH.stencil.parse(HH.stencil, BH, LH), HH.textures) rH.setTexture(hH, tH.g.Parse(HH.textures[hH], BH, LH));
      for (hH in HH.textureArrays) {
        const AH = HH.textureArrays[hH],
          SH = [];
        for (let HH = 0; HH < AH.length; HH++) SH.push(tH.g.Parse(AH[HH], BH, LH));
        rH.setTextureArray(hH, SH)
      }
      for (hH in HH.ints) rH.setInt(hH, HH.ints[hH]);
      for (hH in HH.uints) rH.setUInt(hH, HH.uints[hH]);
      for (hH in HH.floats) rH.setFloat(hH, HH.floats[hH]);
      for (hH in HH.floatsArrays) rH.setFloats(hH, HH.floatsArrays[hH]);
      for (hH in HH.colors3) {
        const BH = HH.colors3[hH];
        rH.setColor3(hH, {
          r: BH[0],
          g: BH[1],
          b: BH[2]
        })
      }
      for (hH in HH.colors3Arrays) {
        const BH = HH.colors3Arrays[hH].reduce(((HH, BH, LH) => (LH % 3 === 0 ? HH.push([BH]) : HH[HH.length - 1].push(BH), HH)), []).map((HH => ({
          r: HH[0],
          g: HH[1],
          b: HH[2]
        })));
        rH.setColor3Array(hH, BH)
      }
      for (hH in HH.colors4) {
        const BH = HH.colors4[hH];
        rH.setColor4(hH, {
          r: BH[0],
          g: BH[1],
          b: BH[2],
          a: BH[3]
        })
      }
      for (hH in HH.colors4Arrays) {
        const BH = HH.colors4Arrays[hH].reduce(((HH, BH, LH) => (LH % 4 === 0 ? HH.push([BH]) : HH[HH.length - 1].push(BH), HH)), []).map((HH => ({
          r: HH[0],
          g: HH[1],
          b: HH[2],
          a: HH[3]
        })));
        rH.setColor4Array(hH, BH)
      }
      for (hH in HH.vectors2) {
        const BH = HH.vectors2[hH];
        rH.setVector2(hH, {
          x: BH[0],
          y: BH[1]
        })
      }
      for (hH in HH.vectors3) {
        const BH = HH.vectors3[hH];
        rH.setVector3(hH, {
          x: BH[0],
          y: BH[1],
          z: BH[2]
        })
      }
      for (hH in HH.vectors4) {
        const BH = HH.vectors4[hH];
        rH.setVector4(hH, {
          x: BH[0],
          y: BH[1],
          z: BH[2],
          w: BH[3]
        })
      }
      for (hH in HH.quaternions) rH.setQuaternion(hH, SH.f.FromArray(HH.quaternions[hH]));
      for (hH in HH.matrices) rH.setMatrix(hH, SH.e.FromArray(HH.matrices[hH]));
      const zH = rH;
      for (hH in HH.matrixArray) zH._matrixArrays[hH] = new Float32Array(HH.matrixArray[hH]);
      for (hH in HH.matrices3x3) rH.setMatrix3x3(hH, HH.matrices3x3[hH]);
      for (hH in HH.matrices2x2) rH.setMatrix2x2(hH, HH.matrices2x2[hH]);
      for (hH in HH.vectors2Arrays) rH.setArray2(hH, HH.vectors2Arrays[hH]);
      for (hH in HH.vectors3Arrays) rH.setArray3(hH, HH.vectors3Arrays[hH]);
      for (hH in HH.vectors4Arrays) rH.setArray4(hH, HH.vectors4Arrays[hH]);
      for (hH in HH.quaternionsArrays) rH.setArray4(hH, HH.quaternionsArrays[hH]);
      return rH
    }
    async function vH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((rH, SH) => {
        const hH = new CH.d;
        hH.addEventListener("readystatechange", (() => {
          if (4 == hH.readyState)
            if (200 == hH.status) {
              const BH = xH(JSON.parse(hH.responseText), LH || XH.d.LastCreatedScene, AH);
              HH && (BH.name = HH), rH(BH)
            } else SH("Unable to load the ShaderMaterial")
        })), hH.open("GET", BH), hH.send()
      }))
    }
    async function PH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const AH = this?.SnippetUrl ?? MH.SnippetUrl;
      return await new Promise(((rH, SH) => {
        const hH = new CH.d;
        hH.addEventListener("readystatechange", (() => {
          if (4 == hH.readyState)
            if (200 == hH.status) {
              const AH = JSON.parse(JSON.parse(hH.responseText).jsonPayload),
                SH = xH(JSON.parse(AH.shaderMaterial), BH || XH.d.LastCreatedScene, LH);
              SH.snippetId = HH, rH(SH)
            } else SH("Unable to load the snippet " + HH)
        })), hH.open("GET", AH + "/" + HH.replace(/#/g, "/")), hH.send()
      }))
    }
    MH.SnippetUrl = "https://snippet.babylonjs.com";
    const TH = PH;
    let UH = !1;

    function VH() {
      UH || (UH = !0, MH.Parse = xH, MH.ParseFromFileAsync = vH, MH.ParseFromSnippetAsync = PH, MH.CreateFromSnippetAsync = TH, (0, QH.f)("BABYLON.ShaderMaterial", MH))
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);