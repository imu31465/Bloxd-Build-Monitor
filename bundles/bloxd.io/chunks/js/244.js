export const id = 244;
export const ids = [244];
export const modules = {
  39234: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => VJ,
      h: () => QJ,
      l: () => vJ,
      o: () => mJ,
      s: () => rJ,
      t: () => xJ
    });
    var FJ = ZJ(38822),
      UJ = ZJ(38874),
      eJ = ZJ(36174),
      XJ = ZJ(38918),
      AJ = ZJ(39243),
      qJ = ZJ(39113),
      jJ = ZJ(38848),
      YJ = ZJ(39106),
      hJ = ZJ(36192),
      DJ = ZJ(39091),
      sJ = ZJ(39087),
      nJ = ZJ(39128),
      GJ = ZJ(36216);
    const fJ = {
      effect: null,
      subMesh: null
    };
    class xJ extends YJ.d {
      constructor(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(JJ, cJ, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new eJ.b, this._cachedWorldViewProjectionMatrix = new eJ.b, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = ZJ, this._options = {
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
          ...FJ
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(JJ) {
        this._shaderPath = JJ
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
      _checkUniform(JJ) {
        -1 === this._options.uniforms.indexOf(JJ) && this._options.uniforms.push(JJ)
      }
      setTexture(JJ, cJ) {
        return -1 === this._options.samplers.indexOf(JJ) && this._options.samplers.push(JJ), this._textures[JJ] = cJ, this
      }
      setInternalTexture(JJ, cJ) {
        return -1 === this._options.samplers.indexOf(JJ) && this._options.samplers.push(JJ), this._internalTextures[JJ] = cJ, this
      }
      removeTexture(JJ) {
        delete this._textures[JJ]
      }
      setTextureArray(JJ, cJ) {
        return -1 === this._options.samplers.indexOf(JJ) && this._options.samplers.push(JJ), this._checkUniform(JJ), this._textureArrays[JJ] = cJ, this
      }
      setExternalTexture(JJ, cJ) {
        return -1 === this._options.externalTextures.indexOf(JJ) && this._options.externalTextures.push(JJ), this._externalTextures[JJ] = cJ, this
      }
      setFloat(JJ, cJ) {
        return this._checkUniform(JJ), this._floats[JJ] = cJ, this
      }
      setInt(JJ, cJ) {
        return this._checkUniform(JJ), this._ints[JJ] = cJ, this
      }
      setUInt(JJ, cJ) {
        return this._checkUniform(JJ), this._uints[JJ] = cJ, this
      }
      setFloats(JJ, cJ) {
        return this._checkUniform(JJ), this._floatsArrays[JJ] = cJ, this
      }
      setColor3(JJ, cJ) {
        return this._checkUniform(JJ), this._colors3[JJ] = cJ, this
      }
      setColor3Array(JJ, cJ) {
        return this._checkUniform(JJ), this._colors3Arrays[JJ] = cJ.reduce(((JJ, cJ) => (JJ.push(cJ.r, cJ.g, cJ.b), JJ)), []), this
      }
      setColor4(JJ, cJ) {
        return this._checkUniform(JJ), this._colors4[JJ] = cJ, this
      }
      setColor4Array(JJ, cJ) {
        return this._checkUniform(JJ), this._colors4Arrays[JJ] = cJ.reduce(((JJ, cJ) => (JJ.push(cJ.r, cJ.g, cJ.b, cJ.a), JJ)), []), this
      }
      setVector2(JJ, cJ) {
        return this._checkUniform(JJ), this._vectors2[JJ] = cJ, this
      }
      setVector3(JJ, cJ) {
        return this._checkUniform(JJ), this._vectors3[JJ] = cJ, this
      }
      setVector4(JJ, cJ) {
        return this._checkUniform(JJ), this._vectors4[JJ] = cJ, this
      }
      setQuaternion(JJ, cJ) {
        return this._checkUniform(JJ), this._quaternions[JJ] = cJ, this
      }
      setQuaternionArray(JJ, cJ) {
        return this._checkUniform(JJ), this._quaternionsArrays[JJ] = cJ.reduce(((JJ, cJ) => (cJ.toArray(JJ, JJ.length), JJ)), []), this
      }
      setMatrix(JJ, cJ) {
        return this._checkUniform(JJ), this._matrices[JJ] = cJ, this
      }
      setMatrices(JJ, cJ) {
        this._checkUniform(JJ);
        const ZJ = new Float32Array(16 * cJ.length);
        for (let FJ = 0; FJ < cJ.length; FJ++) {
          cJ[FJ].copyToArray(ZJ, 16 * FJ)
        }
        return this._matrixArrays[JJ] = ZJ, this
      }
      setMatrix3x3(JJ, cJ) {
        return this._checkUniform(JJ), this._matrices3x3[JJ] = cJ, this
      }
      setMatrix2x2(JJ, cJ) {
        return this._checkUniform(JJ), this._matrices2x2[JJ] = cJ, this
      }
      setArray2(JJ, cJ) {
        return this._checkUniform(JJ), this._vectors2Arrays[JJ] = cJ, this
      }
      setArray3(JJ, cJ) {
        return this._checkUniform(JJ), this._vectors3Arrays[JJ] = cJ, this
      }
      setArray4(JJ, cJ) {
        return this._checkUniform(JJ), this._vectors4Arrays[JJ] = cJ, this
      }
      setUniformBuffer(JJ, cJ) {
        return -1 === this._options.uniformBuffers.indexOf(JJ) && this._options.uniformBuffers.push(JJ), this._uniformBuffers[JJ] = cJ, this
      }
      setTextureSampler(JJ, cJ) {
        return -1 === this._options.samplerObjects.indexOf(JJ) && this._options.samplerObjects.push(JJ), this._textureSamplers[JJ] = cJ, this
      }
      setStorageBuffer(JJ, cJ) {
        return -1 === this._options.storageBuffers.indexOf(JJ) && this._options.storageBuffers.push(JJ), this._storageBuffers[JJ] = cJ, this
      }
      setDefine(JJ, cJ) {
        const ZJ = JJ.trimEnd() + " ",
          FJ = this.options.defines.findIndex((cJ => cJ === JJ || cJ.startsWith(ZJ)));
        return FJ >= 0 && this.options.defines.splice(FJ, 1), ("boolean" !== typeof cJ || cJ) && this.options.defines.push(ZJ + cJ), this
      }
      isReadyForSubMesh(JJ, cJ, ZJ) {
        return this.isReady(JJ, ZJ, cJ)
      }
      isReady(JJ, cJ, ZJ) {
        const FJ = ZJ && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const JJ = FJ ? ZJ._drawWrapper : this._drawWrapper;
          if (JJ.effect && JJ._wasPreviouslyReady && JJ._wasPreviouslyUsingInstances === cJ) return !0
        }
        const eJ = this.Qy(),
          AJ = eJ.gn(),
          jJ = [],
          YJ = [];
        let hJ = null,
          GJ = this._shaderPath,
          xJ = this._options.uniforms,
          rJ = this._options.uniformBuffers,
          vJ = this._options.samplers;
        AJ.getCaps().multiview && eJ.activeCamera && eJ.activeCamera.outputRenderTarget && eJ.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, jJ.push("#define MULTIVIEW"), -1 !== xJ.indexOf("viewProjection") && -1 === xJ.indexOf("viewProjectionR") && xJ.push("viewProjectionR"));
        for (let UJ = 0; UJ < this._options.defines.length; UJ++) {
          const JJ = 0 === this._options.defines[UJ].indexOf("#define") ? this._options.defines[UJ] : `#define ${this._options.defines[UJ]}`;
          jJ.push(JJ)
        }
        for (let UJ = 0; UJ < this._options.attributes.length; UJ++) YJ.push(this._options.attributes[UJ]);
        if (JJ && JJ.isVerticesDataPresent(XJ.n.ColorKind) && (-1 === YJ.indexOf(XJ.n.ColorKind) && YJ.push(XJ.n.ColorKind), jJ.push("#define VERTEXCOLOR")), cJ && (jJ.push("#define INSTANCES"), (0, sJ.pb)(YJ, this._materialHelperNeedsPreviousMatrices), JJ?.hasThinInstances && (jJ.push("#define THIN_INSTANCES"), JJ && JJ.isVerticesDataPresent(XJ.n.ColorInstanceKind) && (YJ.push(XJ.n.ColorInstanceKind), jJ.push("#define INSTANCESCOLOR")))), JJ && JJ.useBones && JJ.computeBonesUsingShaders && JJ.skeleton) {
          YJ.push(XJ.n.MatricesIndicesKind), YJ.push(XJ.n.MatricesWeightsKind), JJ.numBoneInfluencers > 4 && (YJ.push(XJ.n.MatricesIndicesExtraKind), YJ.push(XJ.n.MatricesWeightsExtraKind));
          const cJ = JJ.skeleton;
          jJ.push("#define NUM_BONE_INFLUENCERS " + JJ.numBoneInfluencers), hJ = new qJ.b, hJ.addCPUSkinningFallback(0, JJ), cJ.isUsingTextureForMatrices ? (jJ.push("#define BONETEXTURE"), -1 === xJ.indexOf("boneTextureInfo") && xJ.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (jJ.push("#define BonesPerMesh " + (cJ.bones.length + 1)), -1 === xJ.indexOf("mBones") && xJ.push("mBones"))
        } else jJ.push("#define NUM_BONE_INFLUENCERS 0");
        let mJ = 0;
        const QJ = JJ ? JJ.morphTargetManager : null;
        if (QJ) {
          const cJ = -1 !== jJ.indexOf("#define UV1"),
            ZJ = -1 !== jJ.indexOf("#define UV2"),
            FJ = -1 !== jJ.indexOf("#define TANGENT"),
            UJ = -1 !== jJ.indexOf("#define NORMAL"),
            eJ = -1 !== jJ.indexOf("#define VERTEXCOLOR");
          mJ = (0, sJ.I)(QJ, jJ, YJ, JJ, !0, UJ, FJ, cJ, ZJ, eJ), QJ.isUsingTextureForTargets && (-1 === xJ.indexOf("morphTargetTextureIndices") && xJ.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), mJ > 0 && (xJ = xJ.slice(), xJ.push("morphTargetInfluences"), xJ.push("morphTargetCount"), xJ.push("morphTargetTextureInfo"), xJ.push("morphTargetTextureIndices"))
        } else jJ.push("#define NUM_MORPH_INFLUENCERS 0");
        if (JJ) {
          const ZJ = JJ.bakedVertexAnimationManager;
          ZJ && ZJ.isEnabled && (jJ.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === xJ.indexOf("bakedVertexAnimationSettings") && xJ.push("bakedVertexAnimationSettings"), -1 === xJ.indexOf("bakedVertexAnimationTextureSizeInverted") && xJ.push("bakedVertexAnimationTextureSizeInverted"), -1 === xJ.indexOf("bakedVertexAnimationTime") && xJ.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), cJ && YJ.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const UJ in this._textures)
          if (!this._textures[UJ].isReady()) return !1;
        for (const UJ in this._internalTextures)
          if (!this._internalTextures[UJ].isReady) return !1;
        JJ && this.needAlphaTestingForMesh(JJ) && jJ.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, DJ.c)(xJ), (0, DJ.l)(this, eJ, jJ)), eJ.fogEnabled && JJ?.applyFog && eJ.fogMode !== UJ.e.FOGMODE_NONE && (jJ.push("#define FOG"), -1 === xJ.indexOf("view") && xJ.push("view"), -1 === xJ.indexOf("vFogInfos") && xJ.push("vFogInfos"), -1 === xJ.indexOf("vFogColor") && xJ.push("vFogColor")), this._useLogarithmicDepth && (jJ.push("#define LOGARITHMICDEPTH"), -1 === xJ.indexOf("logarithmicDepthConstant") && xJ.push("logarithmicDepthConstant"));
        const EJ = ZJ ? ZJ.getRenderingMesh() : JJ;
        if (EJ && this.useVertexPulling) {
          const JJ = EJ.geometry;
          JJ && (this._vertexPullingMetadata = (0, nJ.f)(JJ), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((JJ, cJ) => {
            xJ.push(`vp_${cJ}_info`)
          }))), jJ.push("#define USE_VERTEX_PULLING");
          const cJ = EJ.geometry?.getIndexBuffer();
          cJ && !EJ.isUnIndexed && (jJ.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), cJ.is32Bits && jJ.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (xJ = xJ.slice(), rJ = rJ.slice(), vJ = vJ.slice(), GJ = this.customShaderNameResolve(this.name, xJ, rJ, vJ, jJ, YJ));
        const VJ = FJ ? ZJ._getDrawWrapper(void 0, !0) : this._drawWrapper,
          KJ = VJ?.effect ?? null,
          yJ = VJ?.defines ?? null,
          SJ = jJ.join("\n");
        let IJ = KJ;
        return yJ !== SJ && (IJ = AJ.createEffect(GJ, {
          attributes: YJ,
          uniformsNames: xJ,
          uniformBuffersNames: rJ,
          samplers: vJ,
          defines: SJ,
          fallbacks: hJ,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: mJ
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, AJ), FJ ? ZJ.setEffect(IJ, SJ, this._materialContext) : VJ && VJ.setEffect(IJ, SJ), this._onEffectCreatedObservable && (fJ.effect = IJ, fJ.subMesh = ZJ ?? JJ?.aE[0] ?? null, this._onEffectCreatedObservable.notifyObservers(fJ))), VJ._wasPreviouslyUsingInstances = !!cJ, !!IJ?.isReady() && (KJ !== IJ && eJ.resetCachedMaterial(), VJ._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(JJ, cJ) {
        const ZJ = cJ ?? this.getEffect();
        if (!ZJ) return;
        const FJ = this._options.uniforms; - 1 !== FJ.indexOf("world") && ZJ.setMatrix("world", JJ);
        const UJ = this.Qy(); - 1 !== FJ.indexOf("worldView") && (JJ.multiplyToRef(UJ.getViewMatrix(), this._cachedWorldViewMatrix), ZJ.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== FJ.indexOf("worldViewProjection") && (JJ.multiplyToRef(UJ.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), ZJ.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== FJ.indexOf("view") && ZJ.setMatrix("view", UJ.getViewMatrix())
      }
      bindForSubMesh(JJ, cJ, ZJ) {
        this.bind(JJ, cJ, ZJ._drawWrapperOverride?.effect, ZJ)
      }
      bind(JJ, cJ, ZJ, FJ) {
        const UJ = FJ && this._storeEffectOnSubMeshes,
          eJ = ZJ ?? (UJ ? FJ.effect : this.getEffect());
        if (!eJ) return;
        const XJ = this.Qy();
        this._activeEffect = eJ, this.bindOnlyWorldMatrix(JJ, ZJ);
        const AJ = this._options.uniformBuffers;
        let qJ = !1;
        if (eJ && AJ && AJ.length > 0 && XJ.gn().supportsUniformBuffers)
          for (let YJ = 0; YJ < AJ.length; ++YJ) {
            switch (AJ[YJ]) {
              case "Mesh":
                cJ && (cJ.getMeshUniformBuffer().bindToEffect(eJ, "Mesh"), cJ.transferToEffect(JJ));
                break;
              case "Scene":
                (0, sJ.o)(eJ, XJ.getSceneUniformBuffer()), XJ.finalizeSceneUbo(), qJ = !0
            }
          }
        const jJ = cJ && UJ ? this._mustRebind(XJ, eJ, FJ, cJ.visibility) : XJ.getCachedMaterial() !== this;
        if (eJ && jJ) {
          let JJ;
          for (JJ in qJ || -1 === this._options.uniforms.indexOf("view") || eJ.setMatrix("view", XJ.getViewMatrix()), qJ || -1 === this._options.uniforms.indexOf("projection") || eJ.setMatrix("projection", XJ.getProjectionMatrix()), qJ || -1 === this._options.uniforms.indexOf("viewProjection") || (eJ.setMatrix("viewProjection", XJ.getTransformMatrix()), this._multiview && eJ.setMatrix("viewProjectionR", XJ._transformMatrixR)), XJ.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && eJ.setVector3("cameraPosition", XJ.activeCamera.globalPosition), (0, sJ.e)(cJ, eJ), (0, DJ.e)(eJ, this, XJ), this._vertexPullingMetadata && (0, nJ.d)(eJ, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, sJ.l)(UJ ? FJ.materialDefines : eJ.defines, eJ, XJ), cJ && (0, sJ.h)(XJ, cJ, eJ), this._textures) eJ.setTexture(JJ, this._textures[JJ]);
          for (JJ in this._internalTextures) eJ._bindTexture(JJ, this._internalTextures[JJ]);
          for (JJ in this._textureArrays) eJ.setTextureArray(JJ, this._textureArrays[JJ]);
          for (JJ in this._ints) eJ.setInt(JJ, this._ints[JJ]);
          for (JJ in this._uints) eJ.setUInt(JJ, this._uints[JJ]);
          for (JJ in this._floats) eJ.setFloat(JJ, this._floats[JJ]);
          for (JJ in this._floatsArrays) eJ.setArray(JJ, this._floatsArrays[JJ]);
          for (JJ in this._colors3) eJ.setColor3(JJ, this._colors3[JJ]);
          for (JJ in this._colors3Arrays) eJ.setArray3(JJ, this._colors3Arrays[JJ]);
          for (JJ in this._colors4) {
            const cJ = this._colors4[JJ];
            eJ.setFloat4(JJ, cJ.r, cJ.g, cJ.b, cJ.a)
          }
          for (JJ in this._colors4Arrays) eJ.setArray4(JJ, this._colors4Arrays[JJ]);
          for (JJ in this._vectors2) eJ.setVector2(JJ, this._vectors2[JJ]);
          for (JJ in this._vectors3) eJ.setVector3(JJ, this._vectors3[JJ]);
          for (JJ in this._vectors4) eJ.setVector4(JJ, this._vectors4[JJ]);
          for (JJ in this._quaternions) eJ.setQuaternion(JJ, this._quaternions[JJ]);
          for (JJ in this._matrices) eJ.setMatrix(JJ, this._matrices[JJ]);
          for (JJ in this._matrixArrays) eJ.setMatrices(JJ, this._matrixArrays[JJ]);
          for (JJ in this._matrices3x3) eJ.setMatrix3x3(JJ, this._matrices3x3[JJ]);
          for (JJ in this._matrices2x2) eJ.setMatrix2x2(JJ, this._matrices2x2[JJ]);
          for (JJ in this._vectors2Arrays) eJ.setArray2(JJ, this._vectors2Arrays[JJ]);
          for (JJ in this._vectors3Arrays) eJ.setArray3(JJ, this._vectors3Arrays[JJ]);
          for (JJ in this._vectors4Arrays) eJ.setArray4(JJ, this._vectors4Arrays[JJ]);
          for (JJ in this._quaternionsArrays) eJ.setArray4(JJ, this._quaternionsArrays[JJ]);
          for (JJ in this._uniformBuffers) {
            const cJ = this._uniformBuffers[JJ].getBuffer();
            cJ && eJ.bindUniformBuffer(cJ, JJ)
          }
          const ZJ = XJ.gn(),
            AJ = ZJ.setExternalTexture;
          if (AJ)
            for (JJ in this._externalTextures) AJ.call(ZJ, JJ, this._externalTextures[JJ]);
          const jJ = ZJ.setTextureSampler;
          if (jJ)
            for (JJ in this._textureSamplers) jJ.call(ZJ, JJ, this._textureSamplers[JJ]);
          const YJ = ZJ.setStorageBuffer;
          if (YJ)
            for (JJ in this._storageBuffers) YJ.call(ZJ, JJ, this._storageBuffers[JJ])
        }
        if (eJ && cJ && (jJ || !this.isFrozen)) {
          (0, sJ.m)(cJ, eJ), cJ.morphTargetManager && cJ.morphTargetManager.isUsingTextureForTargets && cJ.morphTargetManager._bind(eJ);
          const JJ = cJ.bakedVertexAnimationManager;
          if (JJ && JJ.isEnabled) {
            const JJ = UJ ? FJ._drawWrapper : this._drawWrapper;
            cJ.bakedVertexAnimationManager?.bind(eJ, !!JJ._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(cJ, eJ, FJ)
      }
      getActiveTextures() {
        const JJ = super.getActiveTextures();
        for (const cJ in this._textures) JJ.push(this._textures[cJ]);
        for (const cJ in this._textureArrays) {
          const ZJ = this._textureArrays[cJ];
          for (let cJ = 0; cJ < ZJ.length; cJ++) JJ.push(ZJ[cJ])
        }
        return JJ
      }
      hasTexture(JJ) {
        if (super.hasTexture(JJ)) return !0;
        for (const ZJ in this._textures)
          if (this._textures[ZJ] === JJ) return !0;
        const cJ = JJ.getInternalTexture();
        for (const ZJ in this._internalTextures)
          if (this._internalTextures[ZJ] === cJ) return !0;
        for (const ZJ in this._textureArrays) {
          const cJ = this._textureArrays[ZJ];
          for (let ZJ = 0; ZJ < cJ.length; ZJ++)
            if (cJ[ZJ] === JJ) return !0
        }
        return !1
      }
      clone(JJ) {
        const cJ = FJ.c.Clone((() => new xJ(JJ, this.Qy(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        cJ.name = JJ, cJ.id = JJ, "object" === typeof cJ._shaderPath && (cJ._shaderPath = {
          ...cJ._shaderPath
        }), this._options = {
          ...this._options
        };
        const ZJ = Object.keys(this._options);
        for (const FJ of ZJ) {
          const JJ = this._options[FJ];
          Array.isArray(JJ) && (this._options[FJ] = JJ.slice(0))
        }
        this.stencil.copyTo(cJ.stencil);
        for (const FJ in this._textures) cJ.setTexture(FJ, this._textures[FJ]);
        for (const FJ in this._internalTextures) cJ.setInternalTexture(FJ, this._internalTextures[FJ]);
        for (const FJ in this._textureArrays) cJ.setTextureArray(FJ, this._textureArrays[FJ]);
        for (const FJ in this._externalTextures) cJ.setExternalTexture(FJ, this._externalTextures[FJ]);
        for (const FJ in this._ints) cJ.setInt(FJ, this._ints[FJ]);
        for (const FJ in this._uints) cJ.setUInt(FJ, this._uints[FJ]);
        for (const FJ in this._floats) cJ.setFloat(FJ, this._floats[FJ]);
        for (const FJ in this._floatsArrays) cJ.setFloats(FJ, this._floatsArrays[FJ]);
        for (const FJ in this._colors3) cJ.setColor3(FJ, this._colors3[FJ]);
        for (const FJ in this._colors3Arrays) cJ._colors3Arrays[FJ] = this._colors3Arrays[FJ];
        for (const FJ in this._colors4) cJ.setColor4(FJ, this._colors4[FJ]);
        for (const FJ in this._colors4Arrays) cJ._colors4Arrays[FJ] = this._colors4Arrays[FJ];
        for (const FJ in this._vectors2) cJ.setVector2(FJ, this._vectors2[FJ]);
        for (const FJ in this._vectors3) cJ.setVector3(FJ, this._vectors3[FJ]);
        for (const FJ in this._vectors4) cJ.setVector4(FJ, this._vectors4[FJ]);
        for (const FJ in this._quaternions) cJ.setQuaternion(FJ, this._quaternions[FJ]);
        for (const FJ in this._quaternionsArrays) cJ._quaternionsArrays[FJ] = this._quaternionsArrays[FJ];
        for (const FJ in this._matrices) cJ.setMatrix(FJ, this._matrices[FJ]);
        for (const FJ in this._matrixArrays) cJ._matrixArrays[FJ] = this._matrixArrays[FJ].slice();
        for (const FJ in this._matrices3x3) cJ.setMatrix3x3(FJ, this._matrices3x3[FJ]);
        for (const FJ in this._matrices2x2) cJ.setMatrix2x2(FJ, this._matrices2x2[FJ]);
        for (const FJ in this._vectors2Arrays) cJ.setArray2(FJ, this._vectors2Arrays[FJ]);
        for (const FJ in this._vectors3Arrays) cJ.setArray3(FJ, this._vectors3Arrays[FJ]);
        for (const FJ in this._vectors4Arrays) cJ.setArray4(FJ, this._vectors4Arrays[FJ]);
        for (const FJ in this._uniformBuffers) cJ.setUniformBuffer(FJ, this._uniformBuffers[FJ]);
        for (const FJ in this._textureSamplers) cJ.setTextureSampler(FJ, this._textureSamplers[FJ]);
        for (const FJ in this._storageBuffers) cJ.setStorageBuffer(FJ, this._storageBuffers[FJ]);
        return cJ
      }
      dispose(JJ, cJ, ZJ) {
        if (cJ) {
          let JJ;
          for (JJ in this._textures) this._textures[JJ].dispose();
          for (JJ in this._internalTextures) this._internalTextures[JJ].dispose();
          for (JJ in this._textureArrays) {
            const cJ = this._textureArrays[JJ];
            for (let JJ = 0; JJ < cJ.length; JJ++) cJ[JJ].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(JJ, cJ, ZJ)
      }
      serialize() {
        const JJ = FJ.c.Serialize(this);
        let cJ;
        for (cJ in JJ.customType = "BABYLON.ShaderMaterial", JJ.uniqueId = this.uniqueId, JJ.options = this._options, JJ.shaderPath = this._shaderPath, JJ.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, JJ.stencil = this.stencil.serialize(), JJ.textures = {}, this._textures) JJ.textures[cJ] = this._textures[cJ].serialize();
        for (cJ in JJ.textureArrays = {}, this._textureArrays) {
          JJ.textureArrays[cJ] = [];
          const ZJ = this._textureArrays[cJ];
          for (let FJ = 0; FJ < ZJ.length; FJ++) JJ.textureArrays[cJ].push(ZJ[FJ].serialize())
        }
        for (cJ in JJ.ints = {}, this._ints) JJ.ints[cJ] = this._ints[cJ];
        for (cJ in JJ.uints = {}, this._uints) JJ.uints[cJ] = this._uints[cJ];
        for (cJ in JJ.floats = {}, this._floats) JJ.floats[cJ] = this._floats[cJ];
        for (cJ in JJ.floatsArrays = {}, this._floatsArrays) JJ.floatsArrays[cJ] = this._floatsArrays[cJ];
        for (cJ in JJ.colors3 = {}, this._colors3) {
          const ZJ = this._colors3[cJ];
          JJ.colors3[cJ] = [ZJ.r, ZJ.g, ZJ.b]
        }
        for (cJ in JJ.colors3Arrays = {}, this._colors3Arrays) JJ.colors3Arrays[cJ] = this._colors3Arrays[cJ];
        for (cJ in JJ.colors4 = {}, this._colors4) {
          const ZJ = this._colors4[cJ];
          JJ.colors4[cJ] = [ZJ.r, ZJ.g, ZJ.b, ZJ.a]
        }
        for (cJ in JJ.colors4Arrays = {}, this._colors4Arrays) JJ.colors4Arrays[cJ] = this._colors4Arrays[cJ];
        for (cJ in JJ.vectors2 = {}, this._vectors2) {
          const ZJ = this._vectors2[cJ];
          JJ.vectors2[cJ] = [ZJ.x, ZJ.y]
        }
        for (cJ in JJ.vectors3 = {}, this._vectors3) {
          const ZJ = this._vectors3[cJ];
          JJ.vectors3[cJ] = [ZJ.x, ZJ.y, ZJ.z]
        }
        for (cJ in JJ.vectors4 = {}, this._vectors4) {
          const ZJ = this._vectors4[cJ];
          JJ.vectors4[cJ] = [ZJ.x, ZJ.y, ZJ.z, ZJ.w]
        }
        for (cJ in JJ.quaternions = {}, this._quaternions) JJ.quaternions[cJ] = this._quaternions[cJ].JFJ();
        for (cJ in JJ.matrices = {}, this._matrices) JJ.matrices[cJ] = this._matrices[cJ].JFJ();
        for (cJ in JJ.matrixArray = {}, this._matrixArrays) JJ.matrixArray[cJ] = this._matrixArrays[cJ];
        for (cJ in JJ.matrices3x3 = {}, this._matrices3x3) JJ.matrices3x3[cJ] = this._matrices3x3[cJ];
        for (cJ in JJ.matrices2x2 = {}, this._matrices2x2) JJ.matrices2x2[cJ] = this._matrices2x2[cJ];
        for (cJ in JJ.vectors2Arrays = {}, this._vectors2Arrays) JJ.vectors2Arrays[cJ] = this._vectors2Arrays[cJ];
        for (cJ in JJ.vectors3Arrays = {}, this._vectors3Arrays) JJ.vectors3Arrays[cJ] = this._vectors3Arrays[cJ];
        for (cJ in JJ.vectors4Arrays = {}, this._vectors4Arrays) JJ.vectors4Arrays[cJ] = this._vectors4Arrays[cJ];
        for (cJ in JJ.quaternionsArrays = {}, this._quaternionsArrays) JJ.quaternionsArrays[cJ] = this._quaternionsArrays[cJ];
        return JJ
      }
    }

    function rJ(JJ, cJ, ZJ) {
      const UJ = FJ.c.Parse((() => new xJ(JJ.name, cJ, JJ.shaderPath, JJ.options, JJ.storeEffectOnSubMeshes)), JJ, cJ, ZJ);
      let XJ;
      for (XJ in JJ.stencil && UJ.stencil.parse(JJ.stencil, cJ, ZJ), JJ.textures) UJ.setTexture(XJ, AJ.i.Parse(JJ.textures[XJ], cJ, ZJ));
      for (XJ in JJ.textureArrays) {
        const FJ = JJ.textureArrays[XJ],
          eJ = [];
        for (let JJ = 0; JJ < FJ.length; JJ++) eJ.push(AJ.i.Parse(FJ[JJ], cJ, ZJ));
        UJ.setTextureArray(XJ, eJ)
      }
      for (XJ in JJ.ints) UJ.setInt(XJ, JJ.ints[XJ]);
      for (XJ in JJ.uints) UJ.setUInt(XJ, JJ.uints[XJ]);
      for (XJ in JJ.floats) UJ.setFloat(XJ, JJ.floats[XJ]);
      for (XJ in JJ.floatsArrays) UJ.setFloats(XJ, JJ.floatsArrays[XJ]);
      for (XJ in JJ.colors3) {
        const cJ = JJ.colors3[XJ];
        UJ.setColor3(XJ, {
          r: cJ[0],
          g: cJ[1],
          b: cJ[2]
        })
      }
      for (XJ in JJ.colors3Arrays) {
        const cJ = JJ.colors3Arrays[XJ].reduce(((JJ, cJ, ZJ) => (ZJ % 3 === 0 ? JJ.push([cJ]) : JJ[JJ.length - 1].push(cJ), JJ)), []).map((JJ => ({
          r: JJ[0],
          g: JJ[1],
          b: JJ[2]
        })));
        UJ.setColor3Array(XJ, cJ)
      }
      for (XJ in JJ.colors4) {
        const cJ = JJ.colors4[XJ];
        UJ.setColor4(XJ, {
          r: cJ[0],
          g: cJ[1],
          b: cJ[2],
          a: cJ[3]
        })
      }
      for (XJ in JJ.colors4Arrays) {
        const cJ = JJ.colors4Arrays[XJ].reduce(((JJ, cJ, ZJ) => (ZJ % 4 === 0 ? JJ.push([cJ]) : JJ[JJ.length - 1].push(cJ), JJ)), []).map((JJ => ({
          r: JJ[0],
          g: JJ[1],
          b: JJ[2],
          a: JJ[3]
        })));
        UJ.setColor4Array(XJ, cJ)
      }
      for (XJ in JJ.vectors2) {
        const cJ = JJ.vectors2[XJ];
        UJ.setVector2(XJ, {
          x: cJ[0],
          y: cJ[1]
        })
      }
      for (XJ in JJ.vectors3) {
        const cJ = JJ.vectors3[XJ];
        UJ.setVector3(XJ, {
          x: cJ[0],
          y: cJ[1],
          z: cJ[2]
        })
      }
      for (XJ in JJ.vectors4) {
        const cJ = JJ.vectors4[XJ];
        UJ.setVector4(XJ, {
          x: cJ[0],
          y: cJ[1],
          z: cJ[2],
          w: cJ[3]
        })
      }
      for (XJ in JJ.quaternions) UJ.setQuaternion(XJ, eJ.e.FromArray(JJ.quaternions[XJ]));
      for (XJ in JJ.matrices) UJ.setMatrix(XJ, eJ.b.FromArray(JJ.matrices[XJ]));
      const qJ = UJ;
      for (XJ in JJ.matrixArray) qJ._matrixArrays[XJ] = new Float32Array(JJ.matrixArray[XJ]);
      for (XJ in JJ.matrices3x3) UJ.setMatrix3x3(XJ, JJ.matrices3x3[XJ]);
      for (XJ in JJ.matrices2x2) UJ.setMatrix2x2(XJ, JJ.matrices2x2[XJ]);
      for (XJ in JJ.vectors2Arrays) UJ.setArray2(XJ, JJ.vectors2Arrays[XJ]);
      for (XJ in JJ.vectors3Arrays) UJ.setArray3(XJ, JJ.vectors3Arrays[XJ]);
      for (XJ in JJ.vectors4Arrays) UJ.setArray4(XJ, JJ.vectors4Arrays[XJ]);
      for (XJ in JJ.quaternionsArrays) UJ.setArray4(XJ, JJ.quaternionsArrays[XJ]);
      return UJ
    }
    async function vJ(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((UJ, eJ) => {
        const XJ = new jJ.d;
        XJ.addEventListener("readystatechange", (() => {
          if (4 == XJ.readyState)
            if (200 == XJ.status) {
              const cJ = rJ(JSON.parse(XJ.responseText), ZJ || hJ.c.LastCreatedScene, FJ);
              JJ && (cJ.name = JJ), UJ(cJ)
            } else eJ("Unable to load the ShaderMaterial")
        })), XJ.open("GET", cJ), XJ.send()
      }))
    }
    async function mJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const FJ = this?.SnippetUrl ?? xJ.SnippetUrl;
      return await new Promise(((UJ, eJ) => {
        const XJ = new jJ.d;
        XJ.addEventListener("readystatechange", (() => {
          if (4 == XJ.readyState)
            if (200 == XJ.status) {
              const FJ = JSON.parse(JSON.parse(XJ.responseText).jsonPayload),
                eJ = rJ(JSON.parse(FJ.shaderMaterial), cJ || hJ.c.LastCreatedScene, ZJ);
              eJ.snippetId = JJ, UJ(eJ)
            } else eJ("Unable to load the snippet " + JJ)
        })), XJ.open("GET", FJ + "/" + JJ.replace(/#/g, "/")), XJ.send()
      }))
    }
    xJ.SnippetUrl = "https://snippet.babylonjs.com";
    const QJ = mJ;
    let EJ = !1;

    function VJ() {
      EJ || (EJ = !0, xJ.Parse = rJ, xJ.ParseFromFileAsync = vJ, xJ.ParseFromSnippetAsync = mJ, xJ.CreateFromSnippetAsync = QJ, (0, GJ.f)("BABYLON.ShaderMaterial", xJ))
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);