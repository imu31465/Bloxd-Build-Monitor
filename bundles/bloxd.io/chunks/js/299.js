export const id = 299;
export const ids = [299];
export const modules = {
  41985: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => YW,
      d: () => KW,
      h: () => sW,
      i: () => MW,
      k: () => kW,
      o: () => UW
    });
    var mW = OW(41538),
      EW = OW(41612),
      NW = OW(38241),
      PW = OW(41660),
      LW = OW(41992),
      cW = OW(41867),
      wW = OW(41564),
      tW = OW(41861),
      ZW = OW(38270),
      xW = OW(41853),
      lW = OW(41845),
      AW = OW(41886),
      bW = OW(38299);
    const jW = {
      effect: null,
      subMesh: null
    };
    class UW extends tW.e {
      constructor(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(WW, iW, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new NW.d, this._cachedWorldViewProjectionMatrix = new NW.d, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = OW, this._options = {
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
          ...mW
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(WW) {
        this._shaderPath = WW
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
      _checkUniform(WW) {
        -1 === this._options.uniforms.indexOf(WW) && this._options.uniforms.push(WW)
      }
      setTexture(WW, iW) {
        return -1 === this._options.samplers.indexOf(WW) && this._options.samplers.push(WW), this._textures[WW] = iW, this
      }
      setInternalTexture(WW, iW) {
        return -1 === this._options.samplers.indexOf(WW) && this._options.samplers.push(WW), this._internalTextures[WW] = iW, this
      }
      removeTexture(WW) {
        delete this._textures[WW]
      }
      setTextureArray(WW, iW) {
        return -1 === this._options.samplers.indexOf(WW) && this._options.samplers.push(WW), this._checkUniform(WW), this._textureArrays[WW] = iW, this
      }
      setExternalTexture(WW, iW) {
        return -1 === this._options.externalTextures.indexOf(WW) && this._options.externalTextures.push(WW), this._externalTextures[WW] = iW, this
      }
      setFloat(WW, iW) {
        return this._checkUniform(WW), this._floats[WW] = iW, this
      }
      setInt(WW, iW) {
        return this._checkUniform(WW), this._ints[WW] = iW, this
      }
      setUInt(WW, iW) {
        return this._checkUniform(WW), this._uints[WW] = iW, this
      }
      setFloats(WW, iW) {
        return this._checkUniform(WW), this._floatsArrays[WW] = iW, this
      }
      setColor3(WW, iW) {
        return this._checkUniform(WW), this._colors3[WW] = iW, this
      }
      setColor3Array(WW, iW) {
        return this._checkUniform(WW), this._colors3Arrays[WW] = iW.reduce(((WW, iW) => (WW.push(iW.r, iW.g, iW.b), WW)), []), this
      }
      setColor4(WW, iW) {
        return this._checkUniform(WW), this._colors4[WW] = iW, this
      }
      setColor4Array(WW, iW) {
        return this._checkUniform(WW), this._colors4Arrays[WW] = iW.reduce(((WW, iW) => (WW.push(iW.r, iW.g, iW.b, iW.a), WW)), []), this
      }
      setVector2(WW, iW) {
        return this._checkUniform(WW), this._vectors2[WW] = iW, this
      }
      setVector3(WW, iW) {
        return this._checkUniform(WW), this._vectors3[WW] = iW, this
      }
      setVector4(WW, iW) {
        return this._checkUniform(WW), this._vectors4[WW] = iW, this
      }
      setQuaternion(WW, iW) {
        return this._checkUniform(WW), this._quaternions[WW] = iW, this
      }
      setQuaternionArray(WW, iW) {
        return this._checkUniform(WW), this._quaternionsArrays[WW] = iW.reduce(((WW, iW) => (iW.toArray(WW, WW.length), WW)), []), this
      }
      setMatrix(WW, iW) {
        return this._checkUniform(WW), this._matrices[WW] = iW, this
      }
      setMatrices(WW, iW) {
        this._checkUniform(WW);
        const OW = new Float32Array(16 * iW.length);
        for (let mW = 0; mW < iW.length; mW++) {
          iW[mW].copyToArray(OW, 16 * mW)
        }
        return this._matrixArrays[WW] = OW, this
      }
      setMatrix3x3(WW, iW) {
        return this._checkUniform(WW), this._matrices3x3[WW] = iW, this
      }
      setMatrix2x2(WW, iW) {
        return this._checkUniform(WW), this._matrices2x2[WW] = iW, this
      }
      setArray2(WW, iW) {
        return this._checkUniform(WW), this._vectors2Arrays[WW] = iW, this
      }
      setArray3(WW, iW) {
        return this._checkUniform(WW), this._vectors3Arrays[WW] = iW, this
      }
      setArray4(WW, iW) {
        return this._checkUniform(WW), this._vectors4Arrays[WW] = iW, this
      }
      setUniformBuffer(WW, iW) {
        return -1 === this._options.uniformBuffers.indexOf(WW) && this._options.uniformBuffers.push(WW), this._uniformBuffers[WW] = iW, this
      }
      setTextureSampler(WW, iW) {
        return -1 === this._options.samplerObjects.indexOf(WW) && this._options.samplerObjects.push(WW), this._textureSamplers[WW] = iW, this
      }
      setStorageBuffer(WW, iW) {
        return -1 === this._options.storageBuffers.indexOf(WW) && this._options.storageBuffers.push(WW), this._storageBuffers[WW] = iW, this
      }
      setDefine(WW, iW) {
        const OW = WW.trimEnd() + " ",
          mW = this.options.defines.findIndex((iW => iW === WW || iW.startsWith(OW)));
        return mW >= 0 && this.options.defines.splice(mW, 1), ("boolean" !== typeof iW || iW) && this.options.defines.push(OW + iW), this
      }
      isReadyForSubMesh(WW, iW, OW) {
        return this.isReady(WW, OW, iW)
      }
      isReady(WW, iW, OW) {
        const mW = OW && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const WW = mW ? OW._drawWrapper : this._drawWrapper;
          if (WW.effect && WW._wasPreviouslyReady && WW._wasPreviouslyUsingInstances === iW) return !0
        }
        const NW = this.bD(),
          LW = NW.VA(),
          wW = [],
          tW = [];
        let ZW = null,
          bW = this._shaderPath,
          UW = this._options.uniforms,
          kW = this._options.uniformBuffers,
          sW = this._options.samplers;
        LW.getCaps().multiview && NW.activeCamera && NW.activeCamera.outputRenderTarget && NW.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, wW.push("#define MULTIVIEW"), -1 !== UW.indexOf("viewProjection") && -1 === UW.indexOf("viewProjectionR") && UW.push("viewProjectionR"));
        for (let EW = 0; EW < this._options.defines.length; EW++) {
          const WW = 0 === this._options.defines[EW].indexOf("#define") ? this._options.defines[EW] : `#define ${this._options.defines[EW]}`;
          wW.push(WW)
        }
        for (let EW = 0; EW < this._options.attributes.length; EW++) tW.push(this._options.attributes[EW]);
        if (WW && WW.isVerticesDataPresent(PW.k.ColorKind) && (-1 === tW.indexOf(PW.k.ColorKind) && tW.push(PW.k.ColorKind), wW.push("#define VERTEXCOLOR")), iW && (wW.push("#define INSTANCES"), (0, lW.qb)(tW, this._materialHelperNeedsPreviousMatrices), WW?.hasThinInstances && (wW.push("#define THIN_INSTANCES"), WW && WW.isVerticesDataPresent(PW.k.ColorInstanceKind) && (tW.push(PW.k.ColorInstanceKind), wW.push("#define INSTANCESCOLOR")))), WW && WW.useBones && WW.computeBonesUsingShaders && WW.skeleton) {
          tW.push(PW.k.MatricesIndicesKind), tW.push(PW.k.MatricesWeightsKind), WW.numBoneInfluencers > 4 && (tW.push(PW.k.MatricesIndicesExtraKind), tW.push(PW.k.MatricesWeightsExtraKind));
          const iW = WW.skeleton;
          wW.push("#define NUM_BONE_INFLUENCERS " + WW.numBoneInfluencers), ZW = new cW.e, ZW.addCPUSkinningFallback(0, WW), iW.isUsingTextureForMatrices ? (wW.push("#define BONETEXTURE"), -1 === UW.indexOf("boneTextureInfo") && UW.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (wW.push("#define BonesPerMesh " + (iW.bones.length + 1)), -1 === UW.indexOf("mBones") && UW.push("mBones"))
        } else wW.push("#define NUM_BONE_INFLUENCERS 0");
        let MW = 0;
        const KW = WW ? WW.morphTargetManager : null;
        if (KW) {
          const iW = -1 !== wW.indexOf("#define UV1"),
            OW = -1 !== wW.indexOf("#define UV2"),
            mW = -1 !== wW.indexOf("#define TANGENT"),
            EW = -1 !== wW.indexOf("#define NORMAL"),
            NW = -1 !== wW.indexOf("#define VERTEXCOLOR");
          MW = (0, lW.K)(KW, wW, tW, WW, !0, EW, mW, iW, OW, NW), KW.isUsingTextureForTargets && (-1 === UW.indexOf("morphTargetTextureIndices") && UW.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), MW > 0 && (UW = UW.slice(), UW.push("morphTargetInfluences"), UW.push("morphTargetCount"), UW.push("morphTargetTextureInfo"), UW.push("morphTargetTextureIndices"))
        } else wW.push("#define NUM_MORPH_INFLUENCERS 0");
        if (WW) {
          const OW = WW.bakedVertexAnimationManager;
          OW && OW.isEnabled && (wW.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === UW.indexOf("bakedVertexAnimationSettings") && UW.push("bakedVertexAnimationSettings"), -1 === UW.indexOf("bakedVertexAnimationTextureSizeInverted") && UW.push("bakedVertexAnimationTextureSizeInverted"), -1 === UW.indexOf("bakedVertexAnimationTime") && UW.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), iW && tW.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const EW in this._textures)
          if (!this._textures[EW].isReady()) return !1;
        for (const EW in this._internalTextures)
          if (!this._internalTextures[EW].isReady) return !1;
        WW && this.needAlphaTestingForMesh(WW) && wW.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, xW.d)(UW), (0, xW.k)(this, NW, wW)), NW.fogEnabled && WW?.applyFog && NW.fogMode !== EW.i.FOGMODE_NONE && (wW.push("#define FOG"), -1 === UW.indexOf("view") && UW.push("view"), -1 === UW.indexOf("vFogInfos") && UW.push("vFogInfos"), -1 === UW.indexOf("vFogColor") && UW.push("vFogColor")), this._useLogarithmicDepth && (wW.push("#define LOGARITHMICDEPTH"), -1 === UW.indexOf("logarithmicDepthConstant") && UW.push("logarithmicDepthConstant"));
        const SW = OW ? OW.getRenderingMesh() : WW;
        if (SW && this.useVertexPulling) {
          const WW = SW.geometry;
          WW && (this._vertexPullingMetadata = (0, AW.c)(WW), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((WW, iW) => {
            UW.push(`vp_${iW}_info`)
          }))), wW.push("#define USE_VERTEX_PULLING");
          const iW = SW.geometry?.getIndexBuffer();
          iW && !SW.isUnIndexed && (wW.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), iW.is32Bits && wW.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (UW = UW.slice(), kW = kW.slice(), sW = sW.slice(), bW = this.customShaderNameResolve(this.name, UW, kW, sW, wW, tW));
        const YW = mW ? OW._getDrawWrapper(void 0, !0) : this._drawWrapper,
          yW = YW?.effect ?? null,
          TW = YW?.defines ?? null,
          JW = wW.join("\n");
        let hW = yW;
        return TW !== JW && (hW = LW.createEffect(bW, {
          attributes: tW,
          uniformsNames: UW,
          uniformBuffersNames: kW,
          samplers: sW,
          defines: JW,
          fallbacks: ZW,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: MW
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, LW), mW ? OW.setEffect(hW, JW, this._materialContext) : YW && YW.setEffect(hW, JW), this._onEffectCreatedObservable && (jW.effect = hW, jW.subMesh = OW ?? WW?.hY[0] ?? null, this._onEffectCreatedObservable.notifyObservers(jW))), YW._wasPreviouslyUsingInstances = !!iW, !!hW?.isReady() && (yW !== hW && NW.resetCachedMaterial(), YW._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(WW, iW) {
        const OW = iW ?? this.getEffect();
        if (!OW) return;
        const mW = this._options.uniforms; - 1 !== mW.indexOf("world") && OW.setMatrix("world", WW);
        const EW = this.bD(); - 1 !== mW.indexOf("worldView") && (WW.multiplyToRef(EW.getViewMatrix(), this._cachedWorldViewMatrix), OW.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== mW.indexOf("worldViewProjection") && (WW.multiplyToRef(EW.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), OW.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== mW.indexOf("view") && OW.setMatrix("view", EW.getViewMatrix())
      }
      bindForSubMesh(WW, iW, OW) {
        this.bind(WW, iW, OW._drawWrapperOverride?.effect, OW)
      }
      bind(WW, iW, OW, mW) {
        const EW = mW && this._storeEffectOnSubMeshes,
          NW = OW ?? (EW ? mW.effect : this.getEffect());
        if (!NW) return;
        const PW = this.bD();
        this._activeEffect = NW, this.bindOnlyWorldMatrix(WW, OW);
        const LW = this._options.uniformBuffers;
        let cW = !1;
        if (NW && LW && LW.length > 0 && PW.VA().supportsUniformBuffers)
          for (let tW = 0; tW < LW.length; ++tW) {
            switch (LW[tW]) {
              case "Mesh":
                iW && (iW.getMeshUniformBuffer().bindToEffect(NW, "Mesh"), iW.transferToEffect(WW));
                break;
              case "Scene":
                (0, lW.s)(NW, PW.getSceneUniformBuffer()), PW.finalizeSceneUbo(), cW = !0
            }
          }
        const wW = iW && EW ? this._mustRebind(PW, NW, mW, iW.visibility) : PW.getCachedMaterial() !== this;
        if (NW && wW) {
          let WW;
          for (WW in cW || -1 === this._options.uniforms.indexOf("view") || NW.setMatrix("view", PW.getViewMatrix()), cW || -1 === this._options.uniforms.indexOf("projection") || NW.setMatrix("projection", PW.getProjectionMatrix()), cW || -1 === this._options.uniforms.indexOf("viewProjection") || (NW.setMatrix("viewProjection", PW.getTransformMatrix()), this._multiview && NW.setMatrix("viewProjectionR", PW._transformMatrixR)), PW.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && NW.setVector3("cameraPosition", PW.activeCamera.globalPosition), (0, lW.f)(iW, NW), (0, xW.g)(NW, this, PW), this._vertexPullingMetadata && (0, AW.b)(NW, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, lW.p)(EW ? mW.materialDefines : NW.defines, NW, PW), iW && (0, lW.g)(PW, iW, NW), this._textures) NW.setTexture(WW, this._textures[WW]);
          for (WW in this._internalTextures) NW._bindTexture(WW, this._internalTextures[WW]);
          for (WW in this._textureArrays) NW.setTextureArray(WW, this._textureArrays[WW]);
          for (WW in this._ints) NW.setInt(WW, this._ints[WW]);
          for (WW in this._uints) NW.setUInt(WW, this._uints[WW]);
          for (WW in this._floats) NW.setFloat(WW, this._floats[WW]);
          for (WW in this._floatsArrays) NW.setArray(WW, this._floatsArrays[WW]);
          for (WW in this._colors3) NW.setColor3(WW, this._colors3[WW]);
          for (WW in this._colors3Arrays) NW.setArray3(WW, this._colors3Arrays[WW]);
          for (WW in this._colors4) {
            const iW = this._colors4[WW];
            NW.setFloat4(WW, iW.r, iW.g, iW.b, iW.a)
          }
          for (WW in this._colors4Arrays) NW.setArray4(WW, this._colors4Arrays[WW]);
          for (WW in this._vectors2) NW.setVector2(WW, this._vectors2[WW]);
          for (WW in this._vectors3) NW.setVector3(WW, this._vectors3[WW]);
          for (WW in this._vectors4) NW.setVector4(WW, this._vectors4[WW]);
          for (WW in this._quaternions) NW.setQuaternion(WW, this._quaternions[WW]);
          for (WW in this._matrices) NW.setMatrix(WW, this._matrices[WW]);
          for (WW in this._matrixArrays) NW.setMatrices(WW, this._matrixArrays[WW]);
          for (WW in this._matrices3x3) NW.setMatrix3x3(WW, this._matrices3x3[WW]);
          for (WW in this._matrices2x2) NW.setMatrix2x2(WW, this._matrices2x2[WW]);
          for (WW in this._vectors2Arrays) NW.setArray2(WW, this._vectors2Arrays[WW]);
          for (WW in this._vectors3Arrays) NW.setArray3(WW, this._vectors3Arrays[WW]);
          for (WW in this._vectors4Arrays) NW.setArray4(WW, this._vectors4Arrays[WW]);
          for (WW in this._quaternionsArrays) NW.setArray4(WW, this._quaternionsArrays[WW]);
          for (WW in this._uniformBuffers) {
            const iW = this._uniformBuffers[WW].getBuffer();
            iW && NW.bindUniformBuffer(iW, WW)
          }
          const OW = PW.VA(),
            LW = OW.setExternalTexture;
          if (LW)
            for (WW in this._externalTextures) LW.call(OW, WW, this._externalTextures[WW]);
          const wW = OW.setTextureSampler;
          if (wW)
            for (WW in this._textureSamplers) wW.call(OW, WW, this._textureSamplers[WW]);
          const tW = OW.setStorageBuffer;
          if (tW)
            for (WW in this._storageBuffers) tW.call(OW, WW, this._storageBuffers[WW])
        }
        if (NW && iW && (wW || !this.isFrozen)) {
          (0, lW.r)(iW, NW), iW.morphTargetManager && iW.morphTargetManager.isUsingTextureForTargets && iW.morphTargetManager._bind(NW);
          const WW = iW.bakedVertexAnimationManager;
          if (WW && WW.isEnabled) {
            const WW = EW ? mW._drawWrapper : this._drawWrapper;
            iW.bakedVertexAnimationManager?.bind(NW, !!WW._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(iW, NW, mW)
      }
      getActiveTextures() {
        const WW = super.getActiveTextures();
        for (const iW in this._textures) WW.push(this._textures[iW]);
        for (const iW in this._textureArrays) {
          const OW = this._textureArrays[iW];
          for (let iW = 0; iW < OW.length; iW++) WW.push(OW[iW])
        }
        return WW
      }
      hasTexture(WW) {
        if (super.hasTexture(WW)) return !0;
        for (const OW in this._textures)
          if (this._textures[OW] === WW) return !0;
        const iW = WW.getInternalTexture();
        for (const OW in this._internalTextures)
          if (this._internalTextures[OW] === iW) return !0;
        for (const OW in this._textureArrays) {
          const iW = this._textureArrays[OW];
          for (let OW = 0; OW < iW.length; OW++)
            if (iW[OW] === WW) return !0
        }
        return !1
      }
      clone(WW) {
        const iW = mW.d.Clone((() => new UW(WW, this.bD(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        iW.name = WW, iW.id = WW, "object" === typeof iW._shaderPath && (iW._shaderPath = {
          ...iW._shaderPath
        }), this._options = {
          ...this._options
        };
        const OW = Object.keys(this._options);
        for (const mW of OW) {
          const WW = this._options[mW];
          Array.isArray(WW) && (this._options[mW] = WW.slice(0))
        }
        this.stencil.copyTo(iW.stencil);
        for (const mW in this._textures) iW.setTexture(mW, this._textures[mW]);
        for (const mW in this._internalTextures) iW.setInternalTexture(mW, this._internalTextures[mW]);
        for (const mW in this._textureArrays) iW.setTextureArray(mW, this._textureArrays[mW]);
        for (const mW in this._externalTextures) iW.setExternalTexture(mW, this._externalTextures[mW]);
        for (const mW in this._ints) iW.setInt(mW, this._ints[mW]);
        for (const mW in this._uints) iW.setUInt(mW, this._uints[mW]);
        for (const mW in this._floats) iW.setFloat(mW, this._floats[mW]);
        for (const mW in this._floatsArrays) iW.setFloats(mW, this._floatsArrays[mW]);
        for (const mW in this._colors3) iW.setColor3(mW, this._colors3[mW]);
        for (const mW in this._colors3Arrays) iW._colors3Arrays[mW] = this._colors3Arrays[mW];
        for (const mW in this._colors4) iW.setColor4(mW, this._colors4[mW]);
        for (const mW in this._colors4Arrays) iW._colors4Arrays[mW] = this._colors4Arrays[mW];
        for (const mW in this._vectors2) iW.setVector2(mW, this._vectors2[mW]);
        for (const mW in this._vectors3) iW.setVector3(mW, this._vectors3[mW]);
        for (const mW in this._vectors4) iW.setVector4(mW, this._vectors4[mW]);
        for (const mW in this._quaternions) iW.setQuaternion(mW, this._quaternions[mW]);
        for (const mW in this._quaternionsArrays) iW._quaternionsArrays[mW] = this._quaternionsArrays[mW];
        for (const mW in this._matrices) iW.setMatrix(mW, this._matrices[mW]);
        for (const mW in this._matrixArrays) iW._matrixArrays[mW] = this._matrixArrays[mW].slice();
        for (const mW in this._matrices3x3) iW.setMatrix3x3(mW, this._matrices3x3[mW]);
        for (const mW in this._matrices2x2) iW.setMatrix2x2(mW, this._matrices2x2[mW]);
        for (const mW in this._vectors2Arrays) iW.setArray2(mW, this._vectors2Arrays[mW]);
        for (const mW in this._vectors3Arrays) iW.setArray3(mW, this._vectors3Arrays[mW]);
        for (const mW in this._vectors4Arrays) iW.setArray4(mW, this._vectors4Arrays[mW]);
        for (const mW in this._uniformBuffers) iW.setUniformBuffer(mW, this._uniformBuffers[mW]);
        for (const mW in this._textureSamplers) iW.setTextureSampler(mW, this._textureSamplers[mW]);
        for (const mW in this._storageBuffers) iW.setStorageBuffer(mW, this._storageBuffers[mW]);
        return iW
      }
      dispose(WW, iW, OW) {
        if (iW) {
          let WW;
          for (WW in this._textures) this._textures[WW].dispose();
          for (WW in this._internalTextures) this._internalTextures[WW].dispose();
          for (WW in this._textureArrays) {
            const iW = this._textureArrays[WW];
            for (let WW = 0; WW < iW.length; WW++) iW[WW].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(WW, iW, OW)
      }
      serialize() {
        const WW = mW.d.Serialize(this);
        let iW;
        for (iW in WW.customType = "BABYLON.ShaderMaterial", WW.uniqueId = this.uniqueId, WW.options = this._options, WW.shaderPath = this._shaderPath, WW.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, WW.stencil = this.stencil.serialize(), WW.textures = {}, this._textures) WW.textures[iW] = this._textures[iW].serialize();
        for (iW in WW.textureArrays = {}, this._textureArrays) {
          WW.textureArrays[iW] = [];
          const OW = this._textureArrays[iW];
          for (let mW = 0; mW < OW.length; mW++) WW.textureArrays[iW].push(OW[mW].serialize())
        }
        for (iW in WW.ints = {}, this._ints) WW.ints[iW] = this._ints[iW];
        for (iW in WW.uints = {}, this._uints) WW.uints[iW] = this._uints[iW];
        for (iW in WW.floats = {}, this._floats) WW.floats[iW] = this._floats[iW];
        for (iW in WW.floatsArrays = {}, this._floatsArrays) WW.floatsArrays[iW] = this._floatsArrays[iW];
        for (iW in WW.colors3 = {}, this._colors3) {
          const OW = this._colors3[iW];
          WW.colors3[iW] = [OW.r, OW.g, OW.b]
        }
        for (iW in WW.colors3Arrays = {}, this._colors3Arrays) WW.colors3Arrays[iW] = this._colors3Arrays[iW];
        for (iW in WW.colors4 = {}, this._colors4) {
          const OW = this._colors4[iW];
          WW.colors4[iW] = [OW.r, OW.g, OW.b, OW.a]
        }
        for (iW in WW.colors4Arrays = {}, this._colors4Arrays) WW.colors4Arrays[iW] = this._colors4Arrays[iW];
        for (iW in WW.vectors2 = {}, this._vectors2) {
          const OW = this._vectors2[iW];
          WW.vectors2[iW] = [OW.x, OW.y]
        }
        for (iW in WW.vectors3 = {}, this._vectors3) {
          const OW = this._vectors3[iW];
          WW.vectors3[iW] = [OW.x, OW.y, OW.z]
        }
        for (iW in WW.vectors4 = {}, this._vectors4) {
          const OW = this._vectors4[iW];
          WW.vectors4[iW] = [OW.x, OW.y, OW.z, OW.w]
        }
        for (iW in WW.quaternions = {}, this._quaternions) WW.quaternions[iW] = this._quaternions[iW].wEW();
        for (iW in WW.matrices = {}, this._matrices) WW.matrices[iW] = this._matrices[iW].wEW();
        for (iW in WW.matrixArray = {}, this._matrixArrays) WW.matrixArray[iW] = this._matrixArrays[iW];
        for (iW in WW.matrices3x3 = {}, this._matrices3x3) WW.matrices3x3[iW] = this._matrices3x3[iW];
        for (iW in WW.matrices2x2 = {}, this._matrices2x2) WW.matrices2x2[iW] = this._matrices2x2[iW];
        for (iW in WW.vectors2Arrays = {}, this._vectors2Arrays) WW.vectors2Arrays[iW] = this._vectors2Arrays[iW];
        for (iW in WW.vectors3Arrays = {}, this._vectors3Arrays) WW.vectors3Arrays[iW] = this._vectors3Arrays[iW];
        for (iW in WW.vectors4Arrays = {}, this._vectors4Arrays) WW.vectors4Arrays[iW] = this._vectors4Arrays[iW];
        for (iW in WW.quaternionsArrays = {}, this._quaternionsArrays) WW.quaternionsArrays[iW] = this._quaternionsArrays[iW];
        return WW
      }
    }

    function kW(WW, iW, OW) {
      const EW = mW.d.Parse((() => new UW(WW.name, iW, WW.shaderPath, WW.options, WW.storeEffectOnSubMeshes)), WW, iW, OW);
      let PW;
      for (PW in WW.stencil && EW.stencil.parse(WW.stencil, iW, OW), WW.textures) EW.setTexture(PW, LW.h.Parse(WW.textures[PW], iW, OW));
      for (PW in WW.textureArrays) {
        const mW = WW.textureArrays[PW],
          NW = [];
        for (let WW = 0; WW < mW.length; WW++) NW.push(LW.h.Parse(mW[WW], iW, OW));
        EW.setTextureArray(PW, NW)
      }
      for (PW in WW.ints) EW.setInt(PW, WW.ints[PW]);
      for (PW in WW.uints) EW.setUInt(PW, WW.uints[PW]);
      for (PW in WW.floats) EW.setFloat(PW, WW.floats[PW]);
      for (PW in WW.floatsArrays) EW.setFloats(PW, WW.floatsArrays[PW]);
      for (PW in WW.colors3) {
        const iW = WW.colors3[PW];
        EW.setColor3(PW, {
          r: iW[0],
          g: iW[1],
          b: iW[2]
        })
      }
      for (PW in WW.colors3Arrays) {
        const iW = WW.colors3Arrays[PW].reduce(((WW, iW, OW) => (OW % 3 === 0 ? WW.push([iW]) : WW[WW.length - 1].push(iW), WW)), []).map((WW => ({
          r: WW[0],
          g: WW[1],
          b: WW[2]
        })));
        EW.setColor3Array(PW, iW)
      }
      for (PW in WW.colors4) {
        const iW = WW.colors4[PW];
        EW.setColor4(PW, {
          r: iW[0],
          g: iW[1],
          b: iW[2],
          a: iW[3]
        })
      }
      for (PW in WW.colors4Arrays) {
        const iW = WW.colors4Arrays[PW].reduce(((WW, iW, OW) => (OW % 4 === 0 ? WW.push([iW]) : WW[WW.length - 1].push(iW), WW)), []).map((WW => ({
          r: WW[0],
          g: WW[1],
          b: WW[2],
          a: WW[3]
        })));
        EW.setColor4Array(PW, iW)
      }
      for (PW in WW.vectors2) {
        const iW = WW.vectors2[PW];
        EW.setVector2(PW, {
          x: iW[0],
          y: iW[1]
        })
      }
      for (PW in WW.vectors3) {
        const iW = WW.vectors3[PW];
        EW.setVector3(PW, {
          x: iW[0],
          y: iW[1],
          z: iW[2]
        })
      }
      for (PW in WW.vectors4) {
        const iW = WW.vectors4[PW];
        EW.setVector4(PW, {
          x: iW[0],
          y: iW[1],
          z: iW[2],
          w: iW[3]
        })
      }
      for (PW in WW.quaternions) EW.setQuaternion(PW, NW.g.FromArray(WW.quaternions[PW]));
      for (PW in WW.matrices) EW.setMatrix(PW, NW.d.FromArray(WW.matrices[PW]));
      const cW = EW;
      for (PW in WW.matrixArray) cW._matrixArrays[PW] = new Float32Array(WW.matrixArray[PW]);
      for (PW in WW.matrices3x3) EW.setMatrix3x3(PW, WW.matrices3x3[PW]);
      for (PW in WW.matrices2x2) EW.setMatrix2x2(PW, WW.matrices2x2[PW]);
      for (PW in WW.vectors2Arrays) EW.setArray2(PW, WW.vectors2Arrays[PW]);
      for (PW in WW.vectors3Arrays) EW.setArray3(PW, WW.vectors3Arrays[PW]);
      for (PW in WW.vectors4Arrays) EW.setArray4(PW, WW.vectors4Arrays[PW]);
      for (PW in WW.quaternionsArrays) EW.setArray4(PW, WW.quaternionsArrays[PW]);
      return EW
    }
    async function sW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((EW, NW) => {
        const PW = new wW.c;
        PW.addEventListener("readystatechange", (() => {
          if (4 == PW.readyState)
            if (200 == PW.status) {
              const iW = kW(JSON.parse(PW.responseText), OW || ZW.d.LastCreatedScene, mW);
              WW && (iW.name = WW), EW(iW)
            } else NW("Unable to load the ShaderMaterial")
        })), PW.open("GET", iW), PW.send()
      }))
    }
    async function MW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const mW = this?.SnippetUrl ?? UW.SnippetUrl;
      return await new Promise(((EW, NW) => {
        const PW = new wW.c;
        PW.addEventListener("readystatechange", (() => {
          if (4 == PW.readyState)
            if (200 == PW.status) {
              const mW = JSON.parse(JSON.parse(PW.responseText).jsonPayload),
                NW = kW(JSON.parse(mW.shaderMaterial), iW || ZW.d.LastCreatedScene, OW);
              NW.snippetId = WW, EW(NW)
            } else NW("Unable to load the snippet " + WW)
        })), PW.open("GET", mW + "/" + WW.replace(/#/g, "/")), PW.send()
      }))
    }
    UW.SnippetUrl = "https://snippet.babylonjs.com";
    const KW = MW;
    let SW = !1;

    function YW() {
      SW || (SW = !0, UW.Parse = kW, UW.ParseFromFileAsync = sW, UW.ParseFromSnippetAsync = MW, UW.CreateFromSnippetAsync = KW, (0, bW.h)("BABYLON.ShaderMaterial", UW))
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);