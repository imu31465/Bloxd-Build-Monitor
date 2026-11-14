export const id = 234;
export const ids = [234];
export const modules = {
  38062: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => fW,
      f: () => lW,
      i: () => IW,
      m: () => oW,
      o: () => PW,
      r: () => JW
    });
    var wW = MW(37615),
      CW = MW(37677),
      zR = MW(35324),
      AW = MW(37722),
      bR = MW(38069),
      yR = MW(37930),
      NW = MW(37637),
      eW = MW(37925),
      BW = MW(35344),
      tR = MW(37910),
      TW = MW(37904),
      gR = MW(37948),
      iR = MW(35361);
    const YW = {
      effect: null,
      subMesh: null
    };
    class JW extends eW.c {
      constructor(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(WW, RW, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new zR.d, this._cachedWorldViewProjectionMatrix = new zR.d, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = MW, this._options = {
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
          ...wW
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
      setTexture(WW, RW) {
        return -1 === this._options.samplers.indexOf(WW) && this._options.samplers.push(WW), this._textures[WW] = RW, this
      }
      setInternalTexture(WW, RW) {
        return -1 === this._options.samplers.indexOf(WW) && this._options.samplers.push(WW), this._internalTextures[WW] = RW, this
      }
      removeTexture(WW) {
        delete this._textures[WW]
      }
      setTextureArray(WW, RW) {
        return -1 === this._options.samplers.indexOf(WW) && this._options.samplers.push(WW), this._checkUniform(WW), this._textureArrays[WW] = RW, this
      }
      setExternalTexture(WW, RW) {
        return -1 === this._options.externalTextures.indexOf(WW) && this._options.externalTextures.push(WW), this._externalTextures[WW] = RW, this
      }
      setFloat(WW, RW) {
        return this._checkUniform(WW), this._floats[WW] = RW, this
      }
      setInt(WW, RW) {
        return this._checkUniform(WW), this._ints[WW] = RW, this
      }
      setUInt(WW, RW) {
        return this._checkUniform(WW), this._uints[WW] = RW, this
      }
      setFloats(WW, RW) {
        return this._checkUniform(WW), this._floatsArrays[WW] = RW, this
      }
      setColor3(WW, RW) {
        return this._checkUniform(WW), this._colors3[WW] = RW, this
      }
      setColor3Array(WW, RW) {
        return this._checkUniform(WW), this._colors3Arrays[WW] = RW.reduce(((WW, RW) => (WW.push(RW.r, RW.g, RW.b), WW)), []), this
      }
      setColor4(WW, RW) {
        return this._checkUniform(WW), this._colors4[WW] = RW, this
      }
      setColor4Array(WW, RW) {
        return this._checkUniform(WW), this._colors4Arrays[WW] = RW.reduce(((WW, RW) => (WW.push(RW.r, RW.g, RW.b, RW.a), WW)), []), this
      }
      setVector2(WW, RW) {
        return this._checkUniform(WW), this._vectors2[WW] = RW, this
      }
      setVector3(WW, RW) {
        return this._checkUniform(WW), this._vectors3[WW] = RW, this
      }
      setVector4(WW, RW) {
        return this._checkUniform(WW), this._vectors4[WW] = RW, this
      }
      setQuaternion(WW, RW) {
        return this._checkUniform(WW), this._quaternions[WW] = RW, this
      }
      setQuaternionArray(WW, RW) {
        return this._checkUniform(WW), this._quaternionsArrays[WW] = RW.reduce(((WW, RW) => (RW.toArray(WW, WW.length), WW)), []), this
      }
      setMatrix(WW, RW) {
        return this._checkUniform(WW), this._matrices[WW] = RW, this
      }
      setMatrices(WW, RW) {
        this._checkUniform(WW);
        const MW = new Float32Array(16 * RW.length);
        for (let wW = 0; wW < RW.length; wW++) {
          RW[wW].copyToArray(MW, 16 * wW)
        }
        return this._matrixArrays[WW] = MW, this
      }
      setMatrix3x3(WW, RW) {
        return this._checkUniform(WW), this._matrices3x3[WW] = RW, this
      }
      setMatrix2x2(WW, RW) {
        return this._checkUniform(WW), this._matrices2x2[WW] = RW, this
      }
      setArray2(WW, RW) {
        return this._checkUniform(WW), this._vectors2Arrays[WW] = RW, this
      }
      setArray3(WW, RW) {
        return this._checkUniform(WW), this._vectors3Arrays[WW] = RW, this
      }
      setArray4(WW, RW) {
        return this._checkUniform(WW), this._vectors4Arrays[WW] = RW, this
      }
      setUniformBuffer(WW, RW) {
        return -1 === this._options.uniformBuffers.indexOf(WW) && this._options.uniformBuffers.push(WW), this._uniformBuffers[WW] = RW, this
      }
      setTextureSampler(WW, RW) {
        return -1 === this._options.samplerObjects.indexOf(WW) && this._options.samplerObjects.push(WW), this._textureSamplers[WW] = RW, this
      }
      setStorageBuffer(WW, RW) {
        return -1 === this._options.storageBuffers.indexOf(WW) && this._options.storageBuffers.push(WW), this._storageBuffers[WW] = RW, this
      }
      setDefine(WW, RW) {
        const MW = WW.trimEnd() + " ",
          wW = this.options.defines.findIndex((RW => RW === WW || RW.startsWith(MW)));
        return wW >= 0 && this.options.defines.splice(wW, 1), ("boolean" !== typeof RW || RW) && this.options.defines.push(MW + RW), this
      }
      isReadyForSubMesh(WW, RW, MW) {
        return this.isReady(WW, MW, RW)
      }
      isReady(WW, RW, MW) {
        const wW = MW && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const WW = wW ? MW._drawWrapper : this._drawWrapper;
          if (WW.effect && WW._wasPreviouslyReady && WW._wasPreviouslyUsingInstances === RW) return !0
        }
        const zR = this.QRW(),
          bR = zR.mC(),
          NW = [],
          eW = [];
        let BW = null,
          iR = this._shaderPath,
          JW = this._options.uniforms,
          PW = this._options.uniformBuffers,
          IW = this._options.samplers;
        bR.getCaps().multiview && zR.activeCamera && zR.activeCamera.outputRenderTarget && zR.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, NW.push("#define MULTIVIEW"), -1 !== JW.indexOf("viewProjection") && -1 === JW.indexOf("viewProjectionR") && JW.push("viewProjectionR"));
        for (let CW = 0; CW < this._options.defines.length; CW++) {
          const WW = 0 === this._options.defines[CW].indexOf("#define") ? this._options.defines[CW] : `#define ${this._options.defines[CW]}`;
          NW.push(WW)
        }
        for (let CW = 0; CW < this._options.attributes.length; CW++) eW.push(this._options.attributes[CW]);
        if (WW && WW.isVerticesDataPresent(AW.j.ColorKind) && (-1 === eW.indexOf(AW.j.ColorKind) && eW.push(AW.j.ColorKind), NW.push("#define VERTEXCOLOR")), RW && (NW.push("#define INSTANCES"), (0, TW.ub)(eW, this._materialHelperNeedsPreviousMatrices), WW?.hasThinInstances && (NW.push("#define THIN_INSTANCES"), WW && WW.isVerticesDataPresent(AW.j.ColorInstanceKind) && (eW.push(AW.j.ColorInstanceKind), NW.push("#define INSTANCESCOLOR")))), WW && WW.useBones && WW.computeBonesUsingShaders && WW.skeleton) {
          eW.push(AW.j.MatricesIndicesKind), eW.push(AW.j.MatricesWeightsKind), WW.numBoneInfluencers > 4 && (eW.push(AW.j.MatricesIndicesExtraKind), eW.push(AW.j.MatricesWeightsExtraKind));
          const RW = WW.skeleton;
          NW.push("#define NUM_BONE_INFLUENCERS " + WW.numBoneInfluencers), BW = new yR.c, BW.addCPUSkinningFallback(0, WW), RW.isUsingTextureForMatrices ? (NW.push("#define BONETEXTURE"), -1 === JW.indexOf("boneTextureInfo") && JW.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (NW.push("#define BonesPerMesh " + (RW.bones.length + 1)), -1 === JW.indexOf("mBones") && JW.push("mBones"))
        } else NW.push("#define NUM_BONE_INFLUENCERS 0");
        let oW = 0;
        const lW = WW ? WW.morphTargetManager : null;
        if (lW) {
          const RW = -1 !== NW.indexOf("#define UV1"),
            MW = -1 !== NW.indexOf("#define UV2"),
            wW = -1 !== NW.indexOf("#define TANGENT"),
            CW = -1 !== NW.indexOf("#define NORMAL"),
            zR = -1 !== NW.indexOf("#define VERTEXCOLOR");
          oW = (0, TW.T)(lW, NW, eW, WW, !0, CW, wW, RW, MW, zR), lW.isUsingTextureForTargets && (-1 === JW.indexOf("morphTargetTextureIndices") && JW.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), oW > 0 && (JW = JW.slice(), JW.push("morphTargetInfluences"), JW.push("morphTargetCount"), JW.push("morphTargetTextureInfo"), JW.push("morphTargetTextureIndices"))
        } else NW.push("#define NUM_MORPH_INFLUENCERS 0");
        if (WW) {
          const MW = WW.bakedVertexAnimationManager;
          MW && MW.isEnabled && (NW.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === JW.indexOf("bakedVertexAnimationSettings") && JW.push("bakedVertexAnimationSettings"), -1 === JW.indexOf("bakedVertexAnimationTextureSizeInverted") && JW.push("bakedVertexAnimationTextureSizeInverted"), -1 === JW.indexOf("bakedVertexAnimationTime") && JW.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), RW && eW.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const CW in this._textures)
          if (!this._textures[CW].isReady()) return !1;
        for (const CW in this._internalTextures)
          if (!this._internalTextures[CW].isReady) return !1;
        WW && this.needAlphaTestingForMesh(WW) && NW.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, tR.c)(JW), (0, tR.g)(this, zR, NW)), zR.fogEnabled && WW?.applyFog && zR.fogMode !== CW.i.FOGMODE_NONE && (NW.push("#define FOG"), -1 === JW.indexOf("view") && JW.push("view"), -1 === JW.indexOf("vFogInfos") && JW.push("vFogInfos"), -1 === JW.indexOf("vFogColor") && JW.push("vFogColor")), this._useLogarithmicDepth && (NW.push("#define LOGARITHMICDEPTH"), -1 === JW.indexOf("logarithmicDepthConstant") && JW.push("logarithmicDepthConstant"));
        const FW = MW ? MW.getRenderingMesh() : WW;
        if (FW && this.useVertexPulling) {
          const WW = FW.geometry;
          WW && (this._vertexPullingMetadata = (0, gR.e)(WW), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((WW, RW) => {
            JW.push(`vp_${RW}_info`)
          }))), NW.push("#define USE_VERTEX_PULLING");
          const RW = FW.geometry?.getIndexBuffer();
          RW && !FW.isUnIndexed && (NW.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), RW.is32Bits && NW.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (JW = JW.slice(), PW = PW.slice(), IW = IW.slice(), iR = this.customShaderNameResolve(this.name, JW, PW, IW, NW, eW));
        const fW = wW ? MW._getDrawWrapper(void 0, !0) : this._drawWrapper,
          QW = fW?.effect ?? null,
          rR = fW?.defines ?? null,
          cR = NW.join("\n");
        let XW = QW;
        return rR !== cR && (XW = bR.createEffect(iR, {
          attributes: eW,
          uniformsNames: JW,
          uniformBuffersNames: PW,
          samplers: IW,
          defines: cR,
          fallbacks: BW,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: oW
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, bR), wW ? MW.setEffect(XW, cR, this._materialContext) : fW && fW.setEffect(XW, cR), this._onEffectCreatedObservable && (YW.effect = XW, YW.subMesh = MW ?? WW?.Qs[0] ?? null, this._onEffectCreatedObservable.notifyObservers(YW))), fW._wasPreviouslyUsingInstances = !!RW, !!XW?.isReady() && (QW !== XW && zR.resetCachedMaterial(), fW._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(WW, RW) {
        const MW = RW ?? this.getEffect();
        if (!MW) return;
        const wW = this._options.uniforms; - 1 !== wW.indexOf("world") && MW.setMatrix("world", WW);
        const CW = this.QRW(); - 1 !== wW.indexOf("worldView") && (WW.multiplyToRef(CW.getViewMatrix(), this._cachedWorldViewMatrix), MW.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== wW.indexOf("worldViewProjection") && (WW.multiplyToRef(CW.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), MW.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== wW.indexOf("view") && MW.setMatrix("view", CW.getViewMatrix())
      }
      bindForSubMesh(WW, RW, MW) {
        this.bind(WW, RW, MW._drawWrapperOverride?.effect, MW)
      }
      bind(WW, RW, MW, wW) {
        const CW = wW && this._storeEffectOnSubMeshes,
          zR = MW ?? (CW ? wW.effect : this.getEffect());
        if (!zR) return;
        const AW = this.QRW();
        this._activeEffect = zR, this.bindOnlyWorldMatrix(WW, MW);
        const bR = this._options.uniformBuffers;
        let yR = !1;
        if (zR && bR && bR.length > 0 && AW.mC().supportsUniformBuffers)
          for (let eW = 0; eW < bR.length; ++eW) {
            switch (bR[eW]) {
              case "Mesh":
                RW && (RW.getMeshUniformBuffer().bindToEffect(zR, "Mesh"), RW.transferToEffect(WW));
                break;
              case "Scene":
                (0, TW.B)(zR, AW.getSceneUniformBuffer()), AW.finalizeSceneUbo(), yR = !0
            }
          }
        const NW = RW && CW ? this._mustRebind(AW, zR, wW, RW.visibility) : AW.getCachedMaterial() !== this;
        if (zR && NW) {
          let WW;
          for (WW in yR || -1 === this._options.uniforms.indexOf("view") || zR.setMatrix("view", AW.getViewMatrix()), yR || -1 === this._options.uniforms.indexOf("projection") || zR.setMatrix("projection", AW.getProjectionMatrix()), yR || -1 === this._options.uniforms.indexOf("viewProjection") || (zR.setMatrix("viewProjection", AW.getTransformMatrix()), this._multiview && zR.setMatrix("viewProjectionR", AW._transformMatrixR)), AW.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && zR.setVector3("cameraPosition", AW.activeCamera.globalPosition), (0, TW.e)(RW, zR), (0, tR.d)(zR, this, AW), this._vertexPullingMetadata && (0, gR.b)(zR, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, TW.t)(CW ? wW.materialDefines : zR.defines, zR, AW), RW && (0, TW.i)(AW, RW, zR), this._textures) zR.setTexture(WW, this._textures[WW]);
          for (WW in this._internalTextures) zR._bindTexture(WW, this._internalTextures[WW]);
          for (WW in this._textureArrays) zR.setTextureArray(WW, this._textureArrays[WW]);
          for (WW in this._ints) zR.setInt(WW, this._ints[WW]);
          for (WW in this._uints) zR.setUInt(WW, this._uints[WW]);
          for (WW in this._floats) zR.setFloat(WW, this._floats[WW]);
          for (WW in this._floatsArrays) zR.setArray(WW, this._floatsArrays[WW]);
          for (WW in this._colors3) zR.setColor3(WW, this._colors3[WW]);
          for (WW in this._colors3Arrays) zR.setArray3(WW, this._colors3Arrays[WW]);
          for (WW in this._colors4) {
            const RW = this._colors4[WW];
            zR.setFloat4(WW, RW.r, RW.g, RW.b, RW.a)
          }
          for (WW in this._colors4Arrays) zR.setArray4(WW, this._colors4Arrays[WW]);
          for (WW in this._vectors2) zR.setVector2(WW, this._vectors2[WW]);
          for (WW in this._vectors3) zR.setVector3(WW, this._vectors3[WW]);
          for (WW in this._vectors4) zR.setVector4(WW, this._vectors4[WW]);
          for (WW in this._quaternions) zR.setQuaternion(WW, this._quaternions[WW]);
          for (WW in this._matrices) zR.setMatrix(WW, this._matrices[WW]);
          for (WW in this._matrixArrays) zR.setMatrices(WW, this._matrixArrays[WW]);
          for (WW in this._matrices3x3) zR.setMatrix3x3(WW, this._matrices3x3[WW]);
          for (WW in this._matrices2x2) zR.setMatrix2x2(WW, this._matrices2x2[WW]);
          for (WW in this._vectors2Arrays) zR.setArray2(WW, this._vectors2Arrays[WW]);
          for (WW in this._vectors3Arrays) zR.setArray3(WW, this._vectors3Arrays[WW]);
          for (WW in this._vectors4Arrays) zR.setArray4(WW, this._vectors4Arrays[WW]);
          for (WW in this._quaternionsArrays) zR.setArray4(WW, this._quaternionsArrays[WW]);
          for (WW in this._uniformBuffers) {
            const RW = this._uniformBuffers[WW].getBuffer();
            RW && zR.bindUniformBuffer(RW, WW)
          }
          const MW = AW.mC(),
            bR = MW.setExternalTexture;
          if (bR)
            for (WW in this._externalTextures) bR.call(MW, WW, this._externalTextures[WW]);
          const NW = MW.setTextureSampler;
          if (NW)
            for (WW in this._textureSamplers) NW.call(MW, WW, this._textureSamplers[WW]);
          const eW = MW.setStorageBuffer;
          if (eW)
            for (WW in this._storageBuffers) eW.call(MW, WW, this._storageBuffers[WW])
        }
        if (zR && RW && (NW || !this.isFrozen)) {
          (0, TW.x)(RW, zR), RW.morphTargetManager && RW.morphTargetManager.isUsingTextureForTargets && RW.morphTargetManager._bind(zR);
          const WW = RW.bakedVertexAnimationManager;
          if (WW && WW.isEnabled) {
            const WW = CW ? wW._drawWrapper : this._drawWrapper;
            RW.bakedVertexAnimationManager?.bind(zR, !!WW._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(RW, zR, wW)
      }
      getActiveTextures() {
        const WW = super.getActiveTextures();
        for (const RW in this._textures) WW.push(this._textures[RW]);
        for (const RW in this._textureArrays) {
          const MW = this._textureArrays[RW];
          for (let RW = 0; RW < MW.length; RW++) WW.push(MW[RW])
        }
        return WW
      }
      hasTexture(WW) {
        if (super.hasTexture(WW)) return !0;
        for (const MW in this._textures)
          if (this._textures[MW] === WW) return !0;
        const RW = WW.getInternalTexture();
        for (const MW in this._internalTextures)
          if (this._internalTextures[MW] === RW) return !0;
        for (const MW in this._textureArrays) {
          const RW = this._textureArrays[MW];
          for (let MW = 0; MW < RW.length; MW++)
            if (RW[MW] === WW) return !0
        }
        return !1
      }
      clone(WW) {
        const RW = wW.d.Clone((() => new JW(WW, this.QRW(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        RW.name = WW, RW.id = WW, "object" === typeof RW._shaderPath && (RW._shaderPath = {
          ...RW._shaderPath
        }), this._options = {
          ...this._options
        };
        const MW = Object.keys(this._options);
        for (const wW of MW) {
          const WW = this._options[wW];
          Array.isArray(WW) && (this._options[wW] = WW.slice(0))
        }
        this.stencil.copyTo(RW.stencil);
        for (const wW in this._textures) RW.setTexture(wW, this._textures[wW]);
        for (const wW in this._internalTextures) RW.setInternalTexture(wW, this._internalTextures[wW]);
        for (const wW in this._textureArrays) RW.setTextureArray(wW, this._textureArrays[wW]);
        for (const wW in this._externalTextures) RW.setExternalTexture(wW, this._externalTextures[wW]);
        for (const wW in this._ints) RW.setInt(wW, this._ints[wW]);
        for (const wW in this._uints) RW.setUInt(wW, this._uints[wW]);
        for (const wW in this._floats) RW.setFloat(wW, this._floats[wW]);
        for (const wW in this._floatsArrays) RW.setFloats(wW, this._floatsArrays[wW]);
        for (const wW in this._colors3) RW.setColor3(wW, this._colors3[wW]);
        for (const wW in this._colors3Arrays) RW._colors3Arrays[wW] = this._colors3Arrays[wW];
        for (const wW in this._colors4) RW.setColor4(wW, this._colors4[wW]);
        for (const wW in this._colors4Arrays) RW._colors4Arrays[wW] = this._colors4Arrays[wW];
        for (const wW in this._vectors2) RW.setVector2(wW, this._vectors2[wW]);
        for (const wW in this._vectors3) RW.setVector3(wW, this._vectors3[wW]);
        for (const wW in this._vectors4) RW.setVector4(wW, this._vectors4[wW]);
        for (const wW in this._quaternions) RW.setQuaternion(wW, this._quaternions[wW]);
        for (const wW in this._quaternionsArrays) RW._quaternionsArrays[wW] = this._quaternionsArrays[wW];
        for (const wW in this._matrices) RW.setMatrix(wW, this._matrices[wW]);
        for (const wW in this._matrixArrays) RW._matrixArrays[wW] = this._matrixArrays[wW].slice();
        for (const wW in this._matrices3x3) RW.setMatrix3x3(wW, this._matrices3x3[wW]);
        for (const wW in this._matrices2x2) RW.setMatrix2x2(wW, this._matrices2x2[wW]);
        for (const wW in this._vectors2Arrays) RW.setArray2(wW, this._vectors2Arrays[wW]);
        for (const wW in this._vectors3Arrays) RW.setArray3(wW, this._vectors3Arrays[wW]);
        for (const wW in this._vectors4Arrays) RW.setArray4(wW, this._vectors4Arrays[wW]);
        for (const wW in this._uniformBuffers) RW.setUniformBuffer(wW, this._uniformBuffers[wW]);
        for (const wW in this._textureSamplers) RW.setTextureSampler(wW, this._textureSamplers[wW]);
        for (const wW in this._storageBuffers) RW.setStorageBuffer(wW, this._storageBuffers[wW]);
        return RW
      }
      dispose(WW, RW, MW) {
        if (RW) {
          let WW;
          for (WW in this._textures) this._textures[WW].dispose();
          for (WW in this._internalTextures) this._internalTextures[WW].dispose();
          for (WW in this._textureArrays) {
            const RW = this._textureArrays[WW];
            for (let WW = 0; WW < RW.length; WW++) RW[WW].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(WW, RW, MW)
      }
      serialize() {
        const WW = wW.d.Serialize(this);
        let RW;
        for (RW in WW.customType = "BABYLON.ShaderMaterial", WW.uniqueId = this.uniqueId, WW.options = this._options, WW.shaderPath = this._shaderPath, WW.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, WW.stencil = this.stencil.serialize(), WW.textures = {}, this._textures) WW.textures[RW] = this._textures[RW].serialize();
        for (RW in WW.textureArrays = {}, this._textureArrays) {
          WW.textureArrays[RW] = [];
          const MW = this._textureArrays[RW];
          for (let wW = 0; wW < MW.length; wW++) WW.textureArrays[RW].push(MW[wW].serialize())
        }
        for (RW in WW.ints = {}, this._ints) WW.ints[RW] = this._ints[RW];
        for (RW in WW.uints = {}, this._uints) WW.uints[RW] = this._uints[RW];
        for (RW in WW.floats = {}, this._floats) WW.floats[RW] = this._floats[RW];
        for (RW in WW.floatsArrays = {}, this._floatsArrays) WW.floatsArrays[RW] = this._floatsArrays[RW];
        for (RW in WW.colors3 = {}, this._colors3) {
          const MW = this._colors3[RW];
          WW.colors3[RW] = [MW.r, MW.g, MW.b]
        }
        for (RW in WW.colors3Arrays = {}, this._colors3Arrays) WW.colors3Arrays[RW] = this._colors3Arrays[RW];
        for (RW in WW.colors4 = {}, this._colors4) {
          const MW = this._colors4[RW];
          WW.colors4[RW] = [MW.r, MW.g, MW.b, MW.a]
        }
        for (RW in WW.colors4Arrays = {}, this._colors4Arrays) WW.colors4Arrays[RW] = this._colors4Arrays[RW];
        for (RW in WW.vectors2 = {}, this._vectors2) {
          const MW = this._vectors2[RW];
          WW.vectors2[RW] = [MW.x, MW.y]
        }
        for (RW in WW.vectors3 = {}, this._vectors3) {
          const MW = this._vectors3[RW];
          WW.vectors3[RW] = [MW.x, MW.y, MW.z]
        }
        for (RW in WW.vectors4 = {}, this._vectors4) {
          const MW = this._vectors4[RW];
          WW.vectors4[RW] = [MW.x, MW.y, MW.z, MW.w]
        }
        for (RW in WW.quaternions = {}, this._quaternions) WW.quaternions[RW] = this._quaternions[RW].JNW();
        for (RW in WW.matrices = {}, this._matrices) WW.matrices[RW] = this._matrices[RW].JNW();
        for (RW in WW.matrixArray = {}, this._matrixArrays) WW.matrixArray[RW] = this._matrixArrays[RW];
        for (RW in WW.matrices3x3 = {}, this._matrices3x3) WW.matrices3x3[RW] = this._matrices3x3[RW];
        for (RW in WW.matrices2x2 = {}, this._matrices2x2) WW.matrices2x2[RW] = this._matrices2x2[RW];
        for (RW in WW.vectors2Arrays = {}, this._vectors2Arrays) WW.vectors2Arrays[RW] = this._vectors2Arrays[RW];
        for (RW in WW.vectors3Arrays = {}, this._vectors3Arrays) WW.vectors3Arrays[RW] = this._vectors3Arrays[RW];
        for (RW in WW.vectors4Arrays = {}, this._vectors4Arrays) WW.vectors4Arrays[RW] = this._vectors4Arrays[RW];
        for (RW in WW.quaternionsArrays = {}, this._quaternionsArrays) WW.quaternionsArrays[RW] = this._quaternionsArrays[RW];
        return WW
      }
    }

    function PW(WW, RW, MW) {
      const CW = wW.d.Parse((() => new JW(WW.name, RW, WW.shaderPath, WW.options, WW.storeEffectOnSubMeshes)), WW, RW, MW);
      let AW;
      for (AW in WW.stencil && CW.stencil.parse(WW.stencil, RW, MW), WW.textures) CW.setTexture(AW, bR.d.Parse(WW.textures[AW], RW, MW));
      for (AW in WW.textureArrays) {
        const wW = WW.textureArrays[AW],
          zR = [];
        for (let WW = 0; WW < wW.length; WW++) zR.push(bR.d.Parse(wW[WW], RW, MW));
        CW.setTextureArray(AW, zR)
      }
      for (AW in WW.ints) CW.setInt(AW, WW.ints[AW]);
      for (AW in WW.uints) CW.setUInt(AW, WW.uints[AW]);
      for (AW in WW.floats) CW.setFloat(AW, WW.floats[AW]);
      for (AW in WW.floatsArrays) CW.setFloats(AW, WW.floatsArrays[AW]);
      for (AW in WW.colors3) {
        const RW = WW.colors3[AW];
        CW.setColor3(AW, {
          r: RW[0],
          g: RW[1],
          b: RW[2]
        })
      }
      for (AW in WW.colors3Arrays) {
        const RW = WW.colors3Arrays[AW].reduce(((WW, RW, MW) => (MW % 3 === 0 ? WW.push([RW]) : WW[WW.length - 1].push(RW), WW)), []).map((WW => ({
          r: WW[0],
          g: WW[1],
          b: WW[2]
        })));
        CW.setColor3Array(AW, RW)
      }
      for (AW in WW.colors4) {
        const RW = WW.colors4[AW];
        CW.setColor4(AW, {
          r: RW[0],
          g: RW[1],
          b: RW[2],
          a: RW[3]
        })
      }
      for (AW in WW.colors4Arrays) {
        const RW = WW.colors4Arrays[AW].reduce(((WW, RW, MW) => (MW % 4 === 0 ? WW.push([RW]) : WW[WW.length - 1].push(RW), WW)), []).map((WW => ({
          r: WW[0],
          g: WW[1],
          b: WW[2],
          a: WW[3]
        })));
        CW.setColor4Array(AW, RW)
      }
      for (AW in WW.vectors2) {
        const RW = WW.vectors2[AW];
        CW.setVector2(AW, {
          x: RW[0],
          y: RW[1]
        })
      }
      for (AW in WW.vectors3) {
        const RW = WW.vectors3[AW];
        CW.setVector3(AW, {
          x: RW[0],
          y: RW[1],
          z: RW[2]
        })
      }
      for (AW in WW.vectors4) {
        const RW = WW.vectors4[AW];
        CW.setVector4(AW, {
          x: RW[0],
          y: RW[1],
          z: RW[2],
          w: RW[3]
        })
      }
      for (AW in WW.quaternions) CW.setQuaternion(AW, zR.e.FromArray(WW.quaternions[AW]));
      for (AW in WW.matrices) CW.setMatrix(AW, zR.d.FromArray(WW.matrices[AW]));
      const yR = CW;
      for (AW in WW.matrixArray) yR._matrixArrays[AW] = new Float32Array(WW.matrixArray[AW]);
      for (AW in WW.matrices3x3) CW.setMatrix3x3(AW, WW.matrices3x3[AW]);
      for (AW in WW.matrices2x2) CW.setMatrix2x2(AW, WW.matrices2x2[AW]);
      for (AW in WW.vectors2Arrays) CW.setArray2(AW, WW.vectors2Arrays[AW]);
      for (AW in WW.vectors3Arrays) CW.setArray3(AW, WW.vectors3Arrays[AW]);
      for (AW in WW.vectors4Arrays) CW.setArray4(AW, WW.vectors4Arrays[AW]);
      for (AW in WW.quaternionsArrays) CW.setArray4(AW, WW.quaternionsArrays[AW]);
      return CW
    }
    async function IW(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((CW, zR) => {
        const AW = new NW.b;
        AW.addEventListener("readystatechange", (() => {
          if (4 == AW.readyState)
            if (200 == AW.status) {
              const RW = PW(JSON.parse(AW.responseText), MW || BW.d.LastCreatedScene, wW);
              WW && (RW.name = WW), CW(RW)
            } else zR("Unable to load the ShaderMaterial")
        })), AW.open("GET", RW), AW.send()
      }))
    }
    async function oW(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const wW = this?.SnippetUrl ?? JW.SnippetUrl;
      return await new Promise(((CW, zR) => {
        const AW = new NW.b;
        AW.addEventListener("readystatechange", (() => {
          if (4 == AW.readyState)
            if (200 == AW.status) {
              const wW = JSON.parse(JSON.parse(AW.responseText).jsonPayload),
                zR = PW(JSON.parse(wW.shaderMaterial), RW || BW.d.LastCreatedScene, MW);
              zR.snippetId = WW, CW(zR)
            } else zR("Unable to load the snippet " + WW)
        })), AW.open("GET", wW + "/" + WW.replace(/#/g, "/")), AW.send()
      }))
    }
    JW.SnippetUrl = "https://snippet.babylonjs.com";
    const lW = oW;
    let FW = !1;

    function fW() {
      FW || (FW = !0, JW.Parse = PW, JW.ParseFromFileAsync = IW, JW.ParseFromSnippetAsync = oW, JW.CreateFromSnippetAsync = lW, (0, iR.e)("BABYLON.ShaderMaterial", JW))
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);