export const id = 289;
export const ids = [289];
export const modules = {
  41729: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => PV,
      f: () => FV,
      g: () => qV,
      j: () => tV,
      l: () => jV,
      n: () => BV
    });
    var JV = xV(41279),
      YV = xV(41337),
      UV = xV(38269),
      yV = xV(41394),
      pV = xV(41738),
      QV = xV(41610),
      nV = xV(41309),
      wV = xV(41606),
      ZV = xV(38287),
      vV = xV(41591),
      rV = xV(41583),
      kV = xV(41630),
      bV = xV(38318);
    const EV = {
      effect: null,
      subMesh: null
    };
    class BV extends wV.e {
      constructor(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(VV, eV, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new UV.d, this._cachedWorldViewProjectionMatrix = new UV.d, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = xV, this._options = {
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
          ...JV
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(VV) {
        this._shaderPath = VV
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
      _checkUniform(VV) {
        -1 === this._options.uniforms.indexOf(VV) && this._options.uniforms.push(VV)
      }
      setTexture(VV, eV) {
        return -1 === this._options.samplers.indexOf(VV) && this._options.samplers.push(VV), this._textures[VV] = eV, this
      }
      setInternalTexture(VV, eV) {
        return -1 === this._options.samplers.indexOf(VV) && this._options.samplers.push(VV), this._internalTextures[VV] = eV, this
      }
      removeTexture(VV) {
        delete this._textures[VV]
      }
      setTextureArray(VV, eV) {
        return -1 === this._options.samplers.indexOf(VV) && this._options.samplers.push(VV), this._checkUniform(VV), this._textureArrays[VV] = eV, this
      }
      setExternalTexture(VV, eV) {
        return -1 === this._options.externalTextures.indexOf(VV) && this._options.externalTextures.push(VV), this._externalTextures[VV] = eV, this
      }
      setFloat(VV, eV) {
        return this._checkUniform(VV), this._floats[VV] = eV, this
      }
      setInt(VV, eV) {
        return this._checkUniform(VV), this._ints[VV] = eV, this
      }
      setUInt(VV, eV) {
        return this._checkUniform(VV), this._uints[VV] = eV, this
      }
      setFloats(VV, eV) {
        return this._checkUniform(VV), this._floatsArrays[VV] = eV, this
      }
      setColor3(VV, eV) {
        return this._checkUniform(VV), this._colors3[VV] = eV, this
      }
      setColor3Array(VV, eV) {
        return this._checkUniform(VV), this._colors3Arrays[VV] = eV.reduce(((VV, eV) => (VV.push(eV.r, eV.g, eV.b), VV)), []), this
      }
      setColor4(VV, eV) {
        return this._checkUniform(VV), this._colors4[VV] = eV, this
      }
      setColor4Array(VV, eV) {
        return this._checkUniform(VV), this._colors4Arrays[VV] = eV.reduce(((VV, eV) => (VV.push(eV.r, eV.g, eV.b, eV.a), VV)), []), this
      }
      setVector2(VV, eV) {
        return this._checkUniform(VV), this._vectors2[VV] = eV, this
      }
      setVector3(VV, eV) {
        return this._checkUniform(VV), this._vectors3[VV] = eV, this
      }
      setVector4(VV, eV) {
        return this._checkUniform(VV), this._vectors4[VV] = eV, this
      }
      setQuaternion(VV, eV) {
        return this._checkUniform(VV), this._quaternions[VV] = eV, this
      }
      setQuaternionArray(VV, eV) {
        return this._checkUniform(VV), this._quaternionsArrays[VV] = eV.reduce(((VV, eV) => (eV.toArray(VV, VV.length), VV)), []), this
      }
      setMatrix(VV, eV) {
        return this._checkUniform(VV), this._matrices[VV] = eV, this
      }
      setMatrices(VV, eV) {
        this._checkUniform(VV);
        const xV = new Float32Array(16 * eV.length);
        for (let JV = 0; JV < eV.length; JV++) {
          eV[JV].copyToArray(xV, 16 * JV)
        }
        return this._matrixArrays[VV] = xV, this
      }
      setMatrix3x3(VV, eV) {
        return this._checkUniform(VV), this._matrices3x3[VV] = eV, this
      }
      setMatrix2x2(VV, eV) {
        return this._checkUniform(VV), this._matrices2x2[VV] = eV, this
      }
      setArray2(VV, eV) {
        return this._checkUniform(VV), this._vectors2Arrays[VV] = eV, this
      }
      setArray3(VV, eV) {
        return this._checkUniform(VV), this._vectors3Arrays[VV] = eV, this
      }
      setArray4(VV, eV) {
        return this._checkUniform(VV), this._vectors4Arrays[VV] = eV, this
      }
      setUniformBuffer(VV, eV) {
        return -1 === this._options.uniformBuffers.indexOf(VV) && this._options.uniformBuffers.push(VV), this._uniformBuffers[VV] = eV, this
      }
      setTextureSampler(VV, eV) {
        return -1 === this._options.samplerObjects.indexOf(VV) && this._options.samplerObjects.push(VV), this._textureSamplers[VV] = eV, this
      }
      setStorageBuffer(VV, eV) {
        return -1 === this._options.storageBuffers.indexOf(VV) && this._options.storageBuffers.push(VV), this._storageBuffers[VV] = eV, this
      }
      setDefine(VV, eV) {
        const xV = VV.trimEnd() + " ",
          JV = this.options.defines.findIndex((eV => eV === VV || eV.startsWith(xV)));
        return JV >= 0 && this.options.defines.splice(JV, 1), ("boolean" !== typeof eV || eV) && this.options.defines.push(xV + eV), this
      }
      isReadyForSubMesh(VV, eV, xV) {
        return this.isReady(VV, xV, eV)
      }
      isReady(VV, eV, xV) {
        const JV = xV && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const VV = JV ? xV._drawWrapper : this._drawWrapper;
          if (VV.effect && VV._wasPreviouslyReady && VV._wasPreviouslyUsingInstances === eV) return !0
        }
        const UV = this.dD(),
          pV = UV.sk(),
          nV = [],
          wV = [];
        let ZV = null,
          bV = this._shaderPath,
          BV = this._options.uniforms,
          jV = this._options.uniformBuffers,
          qV = this._options.samplers;
        pV.getCaps().multiview && UV.activeCamera && UV.activeCamera.outputRenderTarget && UV.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, nV.push("#define MULTIVIEW"), -1 !== BV.indexOf("viewProjection") && -1 === BV.indexOf("viewProjectionR") && BV.push("viewProjectionR"));
        for (let YV = 0; YV < this._options.defines.length; YV++) {
          const VV = 0 === this._options.defines[YV].indexOf("#define") ? this._options.defines[YV] : `#define ${this._options.defines[YV]}`;
          nV.push(VV)
        }
        for (let YV = 0; YV < this._options.attributes.length; YV++) wV.push(this._options.attributes[YV]);
        if (VV && VV.isVerticesDataPresent(yV.j.ColorKind) && (-1 === wV.indexOf(yV.j.ColorKind) && wV.push(yV.j.ColorKind), nV.push("#define VERTEXCOLOR")), eV && (nV.push("#define INSTANCES"), (0, rV.ob)(wV, this._materialHelperNeedsPreviousMatrices), VV?.hasThinInstances && (nV.push("#define THIN_INSTANCES"), VV && VV.isVerticesDataPresent(yV.j.ColorInstanceKind) && (wV.push(yV.j.ColorInstanceKind), nV.push("#define INSTANCESCOLOR")))), VV && VV.useBones && VV.computeBonesUsingShaders && VV.skeleton) {
          wV.push(yV.j.MatricesIndicesKind), wV.push(yV.j.MatricesWeightsKind), VV.numBoneInfluencers > 4 && (wV.push(yV.j.MatricesIndicesExtraKind), wV.push(yV.j.MatricesWeightsExtraKind));
          const eV = VV.skeleton;
          nV.push("#define NUM_BONE_INFLUENCERS " + VV.numBoneInfluencers), ZV = new QV.d, ZV.addCPUSkinningFallback(0, VV), eV.isUsingTextureForMatrices ? (nV.push("#define BONETEXTURE"), -1 === BV.indexOf("boneTextureInfo") && BV.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (nV.push("#define BonesPerMesh " + (eV.bones.length + 1)), -1 === BV.indexOf("mBones") && BV.push("mBones"))
        } else nV.push("#define NUM_BONE_INFLUENCERS 0");
        let tV = 0;
        const FV = VV ? VV.morphTargetManager : null;
        if (FV) {
          const eV = -1 !== nV.indexOf("#define UV1"),
            xV = -1 !== nV.indexOf("#define UV2"),
            JV = -1 !== nV.indexOf("#define TANGENT"),
            YV = -1 !== nV.indexOf("#define NORMAL"),
            UV = -1 !== nV.indexOf("#define VERTEXCOLOR");
          tV = (0, rV.O)(FV, nV, wV, VV, !0, YV, JV, eV, xV, UV), FV.isUsingTextureForTargets && (-1 === BV.indexOf("morphTargetTextureIndices") && BV.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), tV > 0 && (BV = BV.slice(), BV.push("morphTargetInfluences"), BV.push("morphTargetCount"), BV.push("morphTargetTextureInfo"), BV.push("morphTargetTextureIndices"))
        } else nV.push("#define NUM_MORPH_INFLUENCERS 0");
        if (VV) {
          const xV = VV.bakedVertexAnimationManager;
          xV && xV.isEnabled && (nV.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === BV.indexOf("bakedVertexAnimationSettings") && BV.push("bakedVertexAnimationSettings"), -1 === BV.indexOf("bakedVertexAnimationTextureSizeInverted") && BV.push("bakedVertexAnimationTextureSizeInverted"), -1 === BV.indexOf("bakedVertexAnimationTime") && BV.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), eV && wV.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const YV in this._textures)
          if (!this._textures[YV].isReady()) return !1;
        for (const YV in this._internalTextures)
          if (!this._internalTextures[YV].isReady) return !1;
        VV && this.needAlphaTestingForMesh(VV) && nV.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, vV.c)(BV), (0, vV.k)(this, UV, nV)), UV.fogEnabled && VV?.applyFog && UV.fogMode !== YV.e.FOGMODE_NONE && (nV.push("#define FOG"), -1 === BV.indexOf("view") && BV.push("view"), -1 === BV.indexOf("vFogInfos") && BV.push("vFogInfos"), -1 === BV.indexOf("vFogColor") && BV.push("vFogColor")), this._useLogarithmicDepth && (nV.push("#define LOGARITHMICDEPTH"), -1 === BV.indexOf("logarithmicDepthConstant") && BV.push("logarithmicDepthConstant"));
        const TV = xV ? xV.getRenderingMesh() : VV;
        if (TV && this.useVertexPulling) {
          const VV = TV.geometry;
          VV && (this._vertexPullingMetadata = (0, kV.e)(VV), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((VV, eV) => {
            BV.push(`vp_${eV}_info`)
          }))), nV.push("#define USE_VERTEX_PULLING");
          const eV = TV.geometry?.getIndexBuffer();
          eV && !TV.isUnIndexed && (nV.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), eV.is32Bits && nV.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (BV = BV.slice(), jV = jV.slice(), qV = qV.slice(), bV = this.customShaderNameResolve(this.name, BV, jV, qV, nV, wV));
        const PV = JV ? xV._getDrawWrapper(void 0, !0) : this._drawWrapper,
          AV = PV?.effect ?? null,
          NV = PV?.defines ?? null,
          XV = nV.join("\n");
        let MV = AV;
        return NV !== XV && (MV = pV.createEffect(bV, {
          attributes: wV,
          uniformsNames: BV,
          uniformBuffersNames: jV,
          samplers: qV,
          defines: XV,
          fallbacks: ZV,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: tV
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, pV), JV ? xV.setEffect(MV, XV, this._materialContext) : PV && PV.setEffect(MV, XV), this._onEffectCreatedObservable && (EV.effect = MV, EV.subMesh = xV ?? VV?.hT[0] ?? null, this._onEffectCreatedObservable.notifyObservers(EV))), PV._wasPreviouslyUsingInstances = !!eV, !!MV?.isReady() && (AV !== MV && UV.resetCachedMaterial(), PV._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(VV, eV) {
        const xV = eV ?? this.getEffect();
        if (!xV) return;
        const JV = this._options.uniforms; - 1 !== JV.indexOf("world") && xV.setMatrix("world", VV);
        const YV = this.dD(); - 1 !== JV.indexOf("worldView") && (VV.multiplyToRef(YV.getViewMatrix(), this._cachedWorldViewMatrix), xV.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== JV.indexOf("worldViewProjection") && (VV.multiplyToRef(YV.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), xV.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== JV.indexOf("view") && xV.setMatrix("view", YV.getViewMatrix())
      }
      bindForSubMesh(VV, eV, xV) {
        this.bind(VV, eV, xV._drawWrapperOverride?.effect, xV)
      }
      bind(VV, eV, xV, JV) {
        const YV = JV && this._storeEffectOnSubMeshes,
          UV = xV ?? (YV ? JV.effect : this.getEffect());
        if (!UV) return;
        const yV = this.dD();
        this._activeEffect = UV, this.bindOnlyWorldMatrix(VV, xV);
        const pV = this._options.uniformBuffers;
        let QV = !1;
        if (UV && pV && pV.length > 0 && yV.sk().supportsUniformBuffers)
          for (let wV = 0; wV < pV.length; ++wV) {
            switch (pV[wV]) {
              case "Mesh":
                eV && (eV.getMeshUniformBuffer().bindToEffect(UV, "Mesh"), eV.transferToEffect(VV));
                break;
              case "Scene":
                (0, rV.x)(UV, yV.getSceneUniformBuffer()), yV.finalizeSceneUbo(), QV = !0
            }
          }
        const nV = eV && YV ? this._mustRebind(yV, UV, JV, eV.visibility) : yV.getCachedMaterial() !== this;
        if (UV && nV) {
          let VV;
          for (VV in QV || -1 === this._options.uniforms.indexOf("view") || UV.setMatrix("view", yV.getViewMatrix()), QV || -1 === this._options.uniforms.indexOf("projection") || UV.setMatrix("projection", yV.getProjectionMatrix()), QV || -1 === this._options.uniforms.indexOf("viewProjection") || (UV.setMatrix("viewProjection", yV.getTransformMatrix()), this._multiview && UV.setMatrix("viewProjectionR", yV._transformMatrixR)), yV.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && UV.setVector3("cameraPosition", yV.activeCamera.globalPosition), (0, rV.e)(eV, UV), (0, vV.g)(UV, this, yV), this._vertexPullingMetadata && (0, kV.d)(UV, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, rV.r)(YV ? JV.materialDefines : UV.defines, UV, yV), eV && (0, rV.g)(yV, eV, UV), this._textures) UV.setTexture(VV, this._textures[VV]);
          for (VV in this._internalTextures) UV._bindTexture(VV, this._internalTextures[VV]);
          for (VV in this._textureArrays) UV.setTextureArray(VV, this._textureArrays[VV]);
          for (VV in this._ints) UV.setInt(VV, this._ints[VV]);
          for (VV in this._uints) UV.setUInt(VV, this._uints[VV]);
          for (VV in this._floats) UV.setFloat(VV, this._floats[VV]);
          for (VV in this._floatsArrays) UV.setArray(VV, this._floatsArrays[VV]);
          for (VV in this._colors3) UV.setColor3(VV, this._colors3[VV]);
          for (VV in this._colors3Arrays) UV.setArray3(VV, this._colors3Arrays[VV]);
          for (VV in this._colors4) {
            const eV = this._colors4[VV];
            UV.setFloat4(VV, eV.r, eV.g, eV.b, eV.a)
          }
          for (VV in this._colors4Arrays) UV.setArray4(VV, this._colors4Arrays[VV]);
          for (VV in this._vectors2) UV.setVector2(VV, this._vectors2[VV]);
          for (VV in this._vectors3) UV.setVector3(VV, this._vectors3[VV]);
          for (VV in this._vectors4) UV.setVector4(VV, this._vectors4[VV]);
          for (VV in this._quaternions) UV.setQuaternion(VV, this._quaternions[VV]);
          for (VV in this._matrices) UV.setMatrix(VV, this._matrices[VV]);
          for (VV in this._matrixArrays) UV.setMatrices(VV, this._matrixArrays[VV]);
          for (VV in this._matrices3x3) UV.setMatrix3x3(VV, this._matrices3x3[VV]);
          for (VV in this._matrices2x2) UV.setMatrix2x2(VV, this._matrices2x2[VV]);
          for (VV in this._vectors2Arrays) UV.setArray2(VV, this._vectors2Arrays[VV]);
          for (VV in this._vectors3Arrays) UV.setArray3(VV, this._vectors3Arrays[VV]);
          for (VV in this._vectors4Arrays) UV.setArray4(VV, this._vectors4Arrays[VV]);
          for (VV in this._quaternionsArrays) UV.setArray4(VV, this._quaternionsArrays[VV]);
          for (VV in this._uniformBuffers) {
            const eV = this._uniformBuffers[VV].getBuffer();
            eV && UV.bindUniformBuffer(eV, VV)
          }
          const xV = yV.sk(),
            pV = xV.setExternalTexture;
          if (pV)
            for (VV in this._externalTextures) pV.call(xV, VV, this._externalTextures[VV]);
          const nV = xV.setTextureSampler;
          if (nV)
            for (VV in this._textureSamplers) nV.call(xV, VV, this._textureSamplers[VV]);
          const wV = xV.setStorageBuffer;
          if (wV)
            for (VV in this._storageBuffers) wV.call(xV, VV, this._storageBuffers[VV])
        }
        if (UV && eV && (nV || !this.isFrozen)) {
          (0, rV.u)(eV, UV), eV.morphTargetManager && eV.morphTargetManager.isUsingTextureForTargets && eV.morphTargetManager._bind(UV);
          const VV = eV.bakedVertexAnimationManager;
          if (VV && VV.isEnabled) {
            const VV = YV ? JV._drawWrapper : this._drawWrapper;
            eV.bakedVertexAnimationManager?.bind(UV, !!VV._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(eV, UV, JV)
      }
      getActiveTextures() {
        const VV = super.getActiveTextures();
        for (const eV in this._textures) VV.push(this._textures[eV]);
        for (const eV in this._textureArrays) {
          const xV = this._textureArrays[eV];
          for (let eV = 0; eV < xV.length; eV++) VV.push(xV[eV])
        }
        return VV
      }
      hasTexture(VV) {
        if (super.hasTexture(VV)) return !0;
        for (const xV in this._textures)
          if (this._textures[xV] === VV) return !0;
        const eV = VV.getInternalTexture();
        for (const xV in this._internalTextures)
          if (this._internalTextures[xV] === eV) return !0;
        for (const xV in this._textureArrays) {
          const eV = this._textureArrays[xV];
          for (let xV = 0; xV < eV.length; xV++)
            if (eV[xV] === VV) return !0
        }
        return !1
      }
      clone(VV) {
        const eV = JV.b.Clone((() => new BV(VV, this.dD(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        eV.name = VV, eV.id = VV, "object" === typeof eV._shaderPath && (eV._shaderPath = {
          ...eV._shaderPath
        }), this._options = {
          ...this._options
        };
        const xV = Object.keys(this._options);
        for (const JV of xV) {
          const VV = this._options[JV];
          Array.isArray(VV) && (this._options[JV] = VV.slice(0))
        }
        this.stencil.copyTo(eV.stencil);
        for (const JV in this._textures) eV.setTexture(JV, this._textures[JV]);
        for (const JV in this._internalTextures) eV.setInternalTexture(JV, this._internalTextures[JV]);
        for (const JV in this._textureArrays) eV.setTextureArray(JV, this._textureArrays[JV]);
        for (const JV in this._externalTextures) eV.setExternalTexture(JV, this._externalTextures[JV]);
        for (const JV in this._ints) eV.setInt(JV, this._ints[JV]);
        for (const JV in this._uints) eV.setUInt(JV, this._uints[JV]);
        for (const JV in this._floats) eV.setFloat(JV, this._floats[JV]);
        for (const JV in this._floatsArrays) eV.setFloats(JV, this._floatsArrays[JV]);
        for (const JV in this._colors3) eV.setColor3(JV, this._colors3[JV]);
        for (const JV in this._colors3Arrays) eV._colors3Arrays[JV] = this._colors3Arrays[JV];
        for (const JV in this._colors4) eV.setColor4(JV, this._colors4[JV]);
        for (const JV in this._colors4Arrays) eV._colors4Arrays[JV] = this._colors4Arrays[JV];
        for (const JV in this._vectors2) eV.setVector2(JV, this._vectors2[JV]);
        for (const JV in this._vectors3) eV.setVector3(JV, this._vectors3[JV]);
        for (const JV in this._vectors4) eV.setVector4(JV, this._vectors4[JV]);
        for (const JV in this._quaternions) eV.setQuaternion(JV, this._quaternions[JV]);
        for (const JV in this._quaternionsArrays) eV._quaternionsArrays[JV] = this._quaternionsArrays[JV];
        for (const JV in this._matrices) eV.setMatrix(JV, this._matrices[JV]);
        for (const JV in this._matrixArrays) eV._matrixArrays[JV] = this._matrixArrays[JV].slice();
        for (const JV in this._matrices3x3) eV.setMatrix3x3(JV, this._matrices3x3[JV]);
        for (const JV in this._matrices2x2) eV.setMatrix2x2(JV, this._matrices2x2[JV]);
        for (const JV in this._vectors2Arrays) eV.setArray2(JV, this._vectors2Arrays[JV]);
        for (const JV in this._vectors3Arrays) eV.setArray3(JV, this._vectors3Arrays[JV]);
        for (const JV in this._vectors4Arrays) eV.setArray4(JV, this._vectors4Arrays[JV]);
        for (const JV in this._uniformBuffers) eV.setUniformBuffer(JV, this._uniformBuffers[JV]);
        for (const JV in this._textureSamplers) eV.setTextureSampler(JV, this._textureSamplers[JV]);
        for (const JV in this._storageBuffers) eV.setStorageBuffer(JV, this._storageBuffers[JV]);
        return eV
      }
      dispose(VV, eV, xV) {
        if (eV) {
          let VV;
          for (VV in this._textures) this._textures[VV].dispose();
          for (VV in this._internalTextures) this._internalTextures[VV].dispose();
          for (VV in this._textureArrays) {
            const eV = this._textureArrays[VV];
            for (let VV = 0; VV < eV.length; VV++) eV[VV].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(VV, eV, xV)
      }
      serialize() {
        const VV = JV.b.Serialize(this);
        let eV;
        for (eV in VV.customType = "BABYLON.ShaderMaterial", VV.uniqueId = this.uniqueId, VV.options = this._options, VV.shaderPath = this._shaderPath, VV.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, VV.stencil = this.stencil.serialize(), VV.textures = {}, this._textures) VV.textures[eV] = this._textures[eV].serialize();
        for (eV in VV.textureArrays = {}, this._textureArrays) {
          VV.textureArrays[eV] = [];
          const xV = this._textureArrays[eV];
          for (let JV = 0; JV < xV.length; JV++) VV.textureArrays[eV].push(xV[JV].serialize())
        }
        for (eV in VV.ints = {}, this._ints) VV.ints[eV] = this._ints[eV];
        for (eV in VV.uints = {}, this._uints) VV.uints[eV] = this._uints[eV];
        for (eV in VV.floats = {}, this._floats) VV.floats[eV] = this._floats[eV];
        for (eV in VV.floatsArrays = {}, this._floatsArrays) VV.floatsArrays[eV] = this._floatsArrays[eV];
        for (eV in VV.colors3 = {}, this._colors3) {
          const xV = this._colors3[eV];
          VV.colors3[eV] = [xV.r, xV.g, xV.b]
        }
        for (eV in VV.colors3Arrays = {}, this._colors3Arrays) VV.colors3Arrays[eV] = this._colors3Arrays[eV];
        for (eV in VV.colors4 = {}, this._colors4) {
          const xV = this._colors4[eV];
          VV.colors4[eV] = [xV.r, xV.g, xV.b, xV.a]
        }
        for (eV in VV.colors4Arrays = {}, this._colors4Arrays) VV.colors4Arrays[eV] = this._colors4Arrays[eV];
        for (eV in VV.vectors2 = {}, this._vectors2) {
          const xV = this._vectors2[eV];
          VV.vectors2[eV] = [xV.x, xV.y]
        }
        for (eV in VV.vectors3 = {}, this._vectors3) {
          const xV = this._vectors3[eV];
          VV.vectors3[eV] = [xV.x, xV.y, xV.z]
        }
        for (eV in VV.vectors4 = {}, this._vectors4) {
          const xV = this._vectors4[eV];
          VV.vectors4[eV] = [xV.x, xV.y, xV.z, xV.w]
        }
        for (eV in VV.quaternions = {}, this._quaternions) VV.quaternions[eV] = this._quaternions[eV].WYV();
        for (eV in VV.matrices = {}, this._matrices) VV.matrices[eV] = this._matrices[eV].WYV();
        for (eV in VV.matrixArray = {}, this._matrixArrays) VV.matrixArray[eV] = this._matrixArrays[eV];
        for (eV in VV.matrices3x3 = {}, this._matrices3x3) VV.matrices3x3[eV] = this._matrices3x3[eV];
        for (eV in VV.matrices2x2 = {}, this._matrices2x2) VV.matrices2x2[eV] = this._matrices2x2[eV];
        for (eV in VV.vectors2Arrays = {}, this._vectors2Arrays) VV.vectors2Arrays[eV] = this._vectors2Arrays[eV];
        for (eV in VV.vectors3Arrays = {}, this._vectors3Arrays) VV.vectors3Arrays[eV] = this._vectors3Arrays[eV];
        for (eV in VV.vectors4Arrays = {}, this._vectors4Arrays) VV.vectors4Arrays[eV] = this._vectors4Arrays[eV];
        for (eV in VV.quaternionsArrays = {}, this._quaternionsArrays) VV.quaternionsArrays[eV] = this._quaternionsArrays[eV];
        return VV
      }
    }

    function jV(VV, eV, xV) {
      const YV = JV.b.Parse((() => new BV(VV.name, eV, VV.shaderPath, VV.options, VV.storeEffectOnSubMeshes)), VV, eV, xV);
      let yV;
      for (yV in VV.stencil && YV.stencil.parse(VV.stencil, eV, xV), VV.textures) YV.setTexture(yV, pV.f.Parse(VV.textures[yV], eV, xV));
      for (yV in VV.textureArrays) {
        const JV = VV.textureArrays[yV],
          UV = [];
        for (let VV = 0; VV < JV.length; VV++) UV.push(pV.f.Parse(JV[VV], eV, xV));
        YV.setTextureArray(yV, UV)
      }
      for (yV in VV.ints) YV.setInt(yV, VV.ints[yV]);
      for (yV in VV.uints) YV.setUInt(yV, VV.uints[yV]);
      for (yV in VV.floats) YV.setFloat(yV, VV.floats[yV]);
      for (yV in VV.floatsArrays) YV.setFloats(yV, VV.floatsArrays[yV]);
      for (yV in VV.colors3) {
        const eV = VV.colors3[yV];
        YV.setColor3(yV, {
          r: eV[0],
          g: eV[1],
          b: eV[2]
        })
      }
      for (yV in VV.colors3Arrays) {
        const eV = VV.colors3Arrays[yV].reduce(((VV, eV, xV) => (xV % 3 === 0 ? VV.push([eV]) : VV[VV.length - 1].push(eV), VV)), []).map((VV => ({
          r: VV[0],
          g: VV[1],
          b: VV[2]
        })));
        YV.setColor3Array(yV, eV)
      }
      for (yV in VV.colors4) {
        const eV = VV.colors4[yV];
        YV.setColor4(yV, {
          r: eV[0],
          g: eV[1],
          b: eV[2],
          a: eV[3]
        })
      }
      for (yV in VV.colors4Arrays) {
        const eV = VV.colors4Arrays[yV].reduce(((VV, eV, xV) => (xV % 4 === 0 ? VV.push([eV]) : VV[VV.length - 1].push(eV), VV)), []).map((VV => ({
          r: VV[0],
          g: VV[1],
          b: VV[2],
          a: VV[3]
        })));
        YV.setColor4Array(yV, eV)
      }
      for (yV in VV.vectors2) {
        const eV = VV.vectors2[yV];
        YV.setVector2(yV, {
          x: eV[0],
          y: eV[1]
        })
      }
      for (yV in VV.vectors3) {
        const eV = VV.vectors3[yV];
        YV.setVector3(yV, {
          x: eV[0],
          y: eV[1],
          z: eV[2]
        })
      }
      for (yV in VV.vectors4) {
        const eV = VV.vectors4[yV];
        YV.setVector4(yV, {
          x: eV[0],
          y: eV[1],
          z: eV[2],
          w: eV[3]
        })
      }
      for (yV in VV.quaternions) YV.setQuaternion(yV, UV.h.FromArray(VV.quaternions[yV]));
      for (yV in VV.matrices) YV.setMatrix(yV, UV.d.FromArray(VV.matrices[yV]));
      const QV = YV;
      for (yV in VV.matrixArray) QV._matrixArrays[yV] = new Float32Array(VV.matrixArray[yV]);
      for (yV in VV.matrices3x3) YV.setMatrix3x3(yV, VV.matrices3x3[yV]);
      for (yV in VV.matrices2x2) YV.setMatrix2x2(yV, VV.matrices2x2[yV]);
      for (yV in VV.vectors2Arrays) YV.setArray2(yV, VV.vectors2Arrays[yV]);
      for (yV in VV.vectors3Arrays) YV.setArray3(yV, VV.vectors3Arrays[yV]);
      for (yV in VV.vectors4Arrays) YV.setArray4(yV, VV.vectors4Arrays[yV]);
      for (yV in VV.quaternionsArrays) YV.setArray4(yV, VV.quaternionsArrays[yV]);
      return YV
    }
    async function qV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((YV, UV) => {
        const yV = new nV.d;
        yV.addEventListener("readystatechange", (() => {
          if (4 == yV.readyState)
            if (200 == yV.status) {
              const eV = jV(JSON.parse(yV.responseText), xV || ZV.d.LastCreatedScene, JV);
              VV && (eV.name = VV), YV(eV)
            } else UV("Unable to load the ShaderMaterial")
        })), yV.open("GET", eV), yV.send()
      }))
    }
    async function tV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const JV = this?.SnippetUrl ?? BV.SnippetUrl;
      return await new Promise(((YV, UV) => {
        const yV = new nV.d;
        yV.addEventListener("readystatechange", (() => {
          if (4 == yV.readyState)
            if (200 == yV.status) {
              const JV = JSON.parse(JSON.parse(yV.responseText).jsonPayload),
                UV = jV(JSON.parse(JV.shaderMaterial), eV || ZV.d.LastCreatedScene, xV);
              UV.snippetId = VV, YV(UV)
            } else UV("Unable to load the snippet " + VV)
        })), yV.open("GET", JV + "/" + VV.replace(/#/g, "/")), yV.send()
      }))
    }
    BV.SnippetUrl = "https://snippet.babylonjs.com";
    const FV = tV;
    let TV = !1;

    function PV() {
      TV || (TV = !0, BV.Parse = jV, BV.ParseFromFileAsync = qV, BV.ParseFromSnippetAsync = tV, BV.CreateFromSnippetAsync = FV, (0, bV.d)("BABYLON.ShaderMaterial", BV))
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);