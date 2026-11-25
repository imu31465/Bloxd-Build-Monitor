export const id = 272;
export const ids = [272];
export const modules = {
  40717: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => vQ,
      g: () => UQ,
      j: () => pQ,
      n: () => GQ,
      r: () => DQ,
      t: () => VQ
    });
    var wQ = XQ(40286),
      qQ = XQ(40355),
      TQ = XQ(37370),
      zQ = XQ(40404),
      sQ = XQ(40724),
      FQ = XQ(40602),
      PQ = XQ(40314),
      gQ = XQ(40596),
      JQ = XQ(37392),
      rQ = XQ(40589),
      IQ = XQ(40584),
      jQ = XQ(40621),
      BQ = XQ(37418);
    const yQ = {
      effect: null,
      subMesh: null
    };
    class VQ extends gQ.d {
      constructor(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(QQ, WQ, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new TQ.e, this._cachedWorldViewProjectionMatrix = new TQ.e, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = XQ, this._options = {
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
          ...wQ
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(QQ) {
        this._shaderPath = QQ
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
      _checkUniform(QQ) {
        -1 === this._options.uniforms.indexOf(QQ) && this._options.uniforms.push(QQ)
      }
      setTexture(QQ, WQ) {
        return -1 === this._options.samplers.indexOf(QQ) && this._options.samplers.push(QQ), this._textures[QQ] = WQ, this
      }
      setInternalTexture(QQ, WQ) {
        return -1 === this._options.samplers.indexOf(QQ) && this._options.samplers.push(QQ), this._internalTextures[QQ] = WQ, this
      }
      removeTexture(QQ) {
        delete this._textures[QQ]
      }
      setTextureArray(QQ, WQ) {
        return -1 === this._options.samplers.indexOf(QQ) && this._options.samplers.push(QQ), this._checkUniform(QQ), this._textureArrays[QQ] = WQ, this
      }
      setExternalTexture(QQ, WQ) {
        return -1 === this._options.externalTextures.indexOf(QQ) && this._options.externalTextures.push(QQ), this._externalTextures[QQ] = WQ, this
      }
      setFloat(QQ, WQ) {
        return this._checkUniform(QQ), this._floats[QQ] = WQ, this
      }
      setInt(QQ, WQ) {
        return this._checkUniform(QQ), this._ints[QQ] = WQ, this
      }
      setUInt(QQ, WQ) {
        return this._checkUniform(QQ), this._uints[QQ] = WQ, this
      }
      setFloats(QQ, WQ) {
        return this._checkUniform(QQ), this._floatsArrays[QQ] = WQ, this
      }
      setColor3(QQ, WQ) {
        return this._checkUniform(QQ), this._colors3[QQ] = WQ, this
      }
      setColor3Array(QQ, WQ) {
        return this._checkUniform(QQ), this._colors3Arrays[QQ] = WQ.reduce(((QQ, WQ) => (QQ.push(WQ.r, WQ.g, WQ.b), QQ)), []), this
      }
      setColor4(QQ, WQ) {
        return this._checkUniform(QQ), this._colors4[QQ] = WQ, this
      }
      setColor4Array(QQ, WQ) {
        return this._checkUniform(QQ), this._colors4Arrays[QQ] = WQ.reduce(((QQ, WQ) => (QQ.push(WQ.r, WQ.g, WQ.b, WQ.a), QQ)), []), this
      }
      setVector2(QQ, WQ) {
        return this._checkUniform(QQ), this._vectors2[QQ] = WQ, this
      }
      setVector3(QQ, WQ) {
        return this._checkUniform(QQ), this._vectors3[QQ] = WQ, this
      }
      setVector4(QQ, WQ) {
        return this._checkUniform(QQ), this._vectors4[QQ] = WQ, this
      }
      setQuaternion(QQ, WQ) {
        return this._checkUniform(QQ), this._quaternions[QQ] = WQ, this
      }
      setQuaternionArray(QQ, WQ) {
        return this._checkUniform(QQ), this._quaternionsArrays[QQ] = WQ.reduce(((QQ, WQ) => (WQ.toArray(QQ, QQ.length), QQ)), []), this
      }
      setMatrix(QQ, WQ) {
        return this._checkUniform(QQ), this._matrices[QQ] = WQ, this
      }
      setMatrices(QQ, WQ) {
        this._checkUniform(QQ);
        const XQ = new Float32Array(16 * WQ.length);
        for (let wQ = 0; wQ < WQ.length; wQ++) {
          WQ[wQ].copyToArray(XQ, 16 * wQ)
        }
        return this._matrixArrays[QQ] = XQ, this
      }
      setMatrix3x3(QQ, WQ) {
        return this._checkUniform(QQ), this._matrices3x3[QQ] = WQ, this
      }
      setMatrix2x2(QQ, WQ) {
        return this._checkUniform(QQ), this._matrices2x2[QQ] = WQ, this
      }
      setArray2(QQ, WQ) {
        return this._checkUniform(QQ), this._vectors2Arrays[QQ] = WQ, this
      }
      setArray3(QQ, WQ) {
        return this._checkUniform(QQ), this._vectors3Arrays[QQ] = WQ, this
      }
      setArray4(QQ, WQ) {
        return this._checkUniform(QQ), this._vectors4Arrays[QQ] = WQ, this
      }
      setUniformBuffer(QQ, WQ) {
        return -1 === this._options.uniformBuffers.indexOf(QQ) && this._options.uniformBuffers.push(QQ), this._uniformBuffers[QQ] = WQ, this
      }
      setTextureSampler(QQ, WQ) {
        return -1 === this._options.samplerObjects.indexOf(QQ) && this._options.samplerObjects.push(QQ), this._textureSamplers[QQ] = WQ, this
      }
      setStorageBuffer(QQ, WQ) {
        return -1 === this._options.storageBuffers.indexOf(QQ) && this._options.storageBuffers.push(QQ), this._storageBuffers[QQ] = WQ, this
      }
      setDefine(QQ, WQ) {
        const XQ = QQ.trimEnd() + " ",
          wQ = this.options.defines.findIndex((WQ => WQ === QQ || WQ.startsWith(XQ)));
        return wQ >= 0 && this.options.defines.splice(wQ, 1), ("boolean" !== typeof WQ || WQ) && this.options.defines.push(XQ + WQ), this
      }
      isReadyForSubMesh(QQ, WQ, XQ) {
        return this.isReady(QQ, XQ, WQ)
      }
      isReady(QQ, WQ, XQ) {
        const wQ = XQ && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const QQ = wQ ? XQ._drawWrapper : this._drawWrapper;
          if (QQ.effect && QQ._wasPreviouslyReady && QQ._wasPreviouslyUsingInstances === WQ) return !0
        }
        const TQ = this.sE(),
          sQ = TQ.Uj(),
          PQ = [],
          gQ = [];
        let JQ = null,
          BQ = this._shaderPath,
          VQ = this._options.uniforms,
          DQ = this._options.uniformBuffers,
          pQ = this._options.samplers;
        sQ.getCaps().multiview && TQ.activeCamera && TQ.activeCamera.outputRenderTarget && TQ.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, PQ.push("#define MULTIVIEW"), -1 !== VQ.indexOf("viewProjection") && -1 === VQ.indexOf("viewProjectionR") && VQ.push("viewProjectionR"));
        for (let qQ = 0; qQ < this._options.defines.length; qQ++) {
          const QQ = 0 === this._options.defines[qQ].indexOf("#define") ? this._options.defines[qQ] : `#define ${this._options.defines[qQ]}`;
          PQ.push(QQ)
        }
        for (let qQ = 0; qQ < this._options.attributes.length; qQ++) gQ.push(this._options.attributes[qQ]);
        if (QQ && QQ.isVerticesDataPresent(zQ.l.ColorKind) && (-1 === gQ.indexOf(zQ.l.ColorKind) && gQ.push(zQ.l.ColorKind), PQ.push("#define VERTEXCOLOR")), WQ && (PQ.push("#define INSTANCES"), (0, IQ.xb)(gQ, this._materialHelperNeedsPreviousMatrices), QQ?.hasThinInstances && (PQ.push("#define THIN_INSTANCES"), QQ && QQ.isVerticesDataPresent(zQ.l.ColorInstanceKind) && (gQ.push(zQ.l.ColorInstanceKind), PQ.push("#define INSTANCESCOLOR")))), QQ && QQ.useBones && QQ.computeBonesUsingShaders && QQ.skeleton) {
          gQ.push(zQ.l.MatricesIndicesKind), gQ.push(zQ.l.MatricesWeightsKind), QQ.numBoneInfluencers > 4 && (gQ.push(zQ.l.MatricesIndicesExtraKind), gQ.push(zQ.l.MatricesWeightsExtraKind));
          const WQ = QQ.skeleton;
          PQ.push("#define NUM_BONE_INFLUENCERS " + QQ.numBoneInfluencers), JQ = new FQ.e, JQ.addCPUSkinningFallback(0, QQ), WQ.isUsingTextureForMatrices ? (PQ.push("#define BONETEXTURE"), -1 === VQ.indexOf("boneTextureInfo") && VQ.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (PQ.push("#define BonesPerMesh " + (WQ.bones.length + 1)), -1 === VQ.indexOf("mBones") && VQ.push("mBones"))
        } else PQ.push("#define NUM_BONE_INFLUENCERS 0");
        let GQ = 0;
        const UQ = QQ ? QQ.morphTargetManager : null;
        if (UQ) {
          const WQ = -1 !== PQ.indexOf("#define UV1"),
            XQ = -1 !== PQ.indexOf("#define UV2"),
            wQ = -1 !== PQ.indexOf("#define TANGENT"),
            qQ = -1 !== PQ.indexOf("#define NORMAL"),
            TQ = -1 !== PQ.indexOf("#define VERTEXCOLOR");
          GQ = (0, IQ.W)(UQ, PQ, gQ, QQ, !0, qQ, wQ, WQ, XQ, TQ), UQ.isUsingTextureForTargets && (-1 === VQ.indexOf("morphTargetTextureIndices") && VQ.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), GQ > 0 && (VQ = VQ.slice(), VQ.push("morphTargetInfluences"), VQ.push("morphTargetCount"), VQ.push("morphTargetTextureInfo"), VQ.push("morphTargetTextureIndices"))
        } else PQ.push("#define NUM_MORPH_INFLUENCERS 0");
        if (QQ) {
          const XQ = QQ.bakedVertexAnimationManager;
          XQ && XQ.isEnabled && (PQ.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === VQ.indexOf("bakedVertexAnimationSettings") && VQ.push("bakedVertexAnimationSettings"), -1 === VQ.indexOf("bakedVertexAnimationTextureSizeInverted") && VQ.push("bakedVertexAnimationTextureSizeInverted"), -1 === VQ.indexOf("bakedVertexAnimationTime") && VQ.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), WQ && gQ.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const qQ in this._textures)
          if (!this._textures[qQ].isReady()) return !1;
        for (const qQ in this._internalTextures)
          if (!this._internalTextures[qQ].isReady) return !1;
        QQ && this.needAlphaTestingForMesh(QQ) && PQ.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, rQ.c)(VQ), (0, rQ.g)(this, TQ, PQ)), TQ.fogEnabled && QQ?.applyFog && TQ.fogMode !== qQ.h.FOGMODE_NONE && (PQ.push("#define FOG"), -1 === VQ.indexOf("view") && VQ.push("view"), -1 === VQ.indexOf("vFogInfos") && VQ.push("vFogInfos"), -1 === VQ.indexOf("vFogColor") && VQ.push("vFogColor")), this._useLogarithmicDepth && (PQ.push("#define LOGARITHMICDEPTH"), -1 === VQ.indexOf("logarithmicDepthConstant") && VQ.push("logarithmicDepthConstant"));
        const bQ = XQ ? XQ.getRenderingMesh() : QQ;
        if (bQ && this.useVertexPulling) {
          const QQ = bQ.geometry;
          QQ && (this._vertexPullingMetadata = (0, jQ.d)(QQ), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((QQ, WQ) => {
            VQ.push(`vp_${WQ}_info`)
          }))), PQ.push("#define USE_VERTEX_PULLING");
          const WQ = bQ.geometry?.getIndexBuffer();
          WQ && !bQ.isUnIndexed && (PQ.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), WQ.is32Bits && PQ.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (VQ = VQ.slice(), DQ = DQ.slice(), pQ = pQ.slice(), BQ = this.customShaderNameResolve(this.name, VQ, DQ, pQ, PQ, gQ));
        const vQ = wQ ? XQ._getDrawWrapper(void 0, !0) : this._drawWrapper,
          dQ = vQ?.effect ?? null,
          HQ = vQ?.defines ?? null,
          aQ = PQ.join("\n");
        let lQ = dQ;
        return HQ !== aQ && (lQ = sQ.createEffect(BQ, {
          attributes: gQ,
          uniformsNames: VQ,
          uniformBuffersNames: DQ,
          samplers: pQ,
          defines: aQ,
          fallbacks: JQ,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: GQ
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, sQ), wQ ? XQ.setEffect(lQ, aQ, this._materialContext) : vQ && vQ.setEffect(lQ, aQ), this._onEffectCreatedObservable && (yQ.effect = lQ, yQ.subMesh = XQ ?? QQ?.ZD[0] ?? null, this._onEffectCreatedObservable.notifyObservers(yQ))), vQ._wasPreviouslyUsingInstances = !!WQ, !!lQ?.isReady() && (dQ !== lQ && TQ.resetCachedMaterial(), vQ._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(QQ, WQ) {
        const XQ = WQ ?? this.getEffect();
        if (!XQ) return;
        const wQ = this._options.uniforms; - 1 !== wQ.indexOf("world") && XQ.setMatrix("world", QQ);
        const qQ = this.sE(); - 1 !== wQ.indexOf("worldView") && (QQ.multiplyToRef(qQ.getViewMatrix(), this._cachedWorldViewMatrix), XQ.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== wQ.indexOf("worldViewProjection") && (QQ.multiplyToRef(qQ.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), XQ.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== wQ.indexOf("view") && XQ.setMatrix("view", qQ.getViewMatrix())
      }
      bindForSubMesh(QQ, WQ, XQ) {
        this.bind(QQ, WQ, XQ._drawWrapperOverride?.effect, XQ)
      }
      bind(QQ, WQ, XQ, wQ) {
        const qQ = wQ && this._storeEffectOnSubMeshes,
          TQ = XQ ?? (qQ ? wQ.effect : this.getEffect());
        if (!TQ) return;
        const zQ = this.sE();
        this._activeEffect = TQ, this.bindOnlyWorldMatrix(QQ, XQ);
        const sQ = this._options.uniformBuffers;
        let FQ = !1;
        if (TQ && sQ && sQ.length > 0 && zQ.Uj().supportsUniformBuffers)
          for (let gQ = 0; gQ < sQ.length; ++gQ) {
            switch (sQ[gQ]) {
              case "Mesh":
                WQ && (WQ.getMeshUniformBuffer().bindToEffect(TQ, "Mesh"), WQ.transferToEffect(QQ));
                break;
              case "Scene":
                (0, IQ.C)(TQ, zQ.getSceneUniformBuffer()), zQ.finalizeSceneUbo(), FQ = !0
            }
          }
        const PQ = WQ && qQ ? this._mustRebind(zQ, TQ, wQ, WQ.visibility) : zQ.getCachedMaterial() !== this;
        if (TQ && PQ) {
          let QQ;
          for (QQ in FQ || -1 === this._options.uniforms.indexOf("view") || TQ.setMatrix("view", zQ.getViewMatrix()), FQ || -1 === this._options.uniforms.indexOf("projection") || TQ.setMatrix("projection", zQ.getProjectionMatrix()), FQ || -1 === this._options.uniforms.indexOf("viewProjection") || (TQ.setMatrix("viewProjection", zQ.getTransformMatrix()), this._multiview && TQ.setMatrix("viewProjectionR", zQ._transformMatrixR)), zQ.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && TQ.setVector3("cameraPosition", zQ.activeCamera.globalPosition), (0, IQ.i)(WQ, TQ), (0, rQ.d)(TQ, this, zQ), this._vertexPullingMetadata && (0, jQ.c)(TQ, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, IQ.w)(qQ ? wQ.materialDefines : TQ.defines, TQ, zQ), WQ && (0, IQ.l)(zQ, WQ, TQ), this._textures) TQ.setTexture(QQ, this._textures[QQ]);
          for (QQ in this._internalTextures) TQ._bindTexture(QQ, this._internalTextures[QQ]);
          for (QQ in this._textureArrays) TQ.setTextureArray(QQ, this._textureArrays[QQ]);
          for (QQ in this._ints) TQ.setInt(QQ, this._ints[QQ]);
          for (QQ in this._uints) TQ.setUInt(QQ, this._uints[QQ]);
          for (QQ in this._floats) TQ.setFloat(QQ, this._floats[QQ]);
          for (QQ in this._floatsArrays) TQ.setArray(QQ, this._floatsArrays[QQ]);
          for (QQ in this._colors3) TQ.setColor3(QQ, this._colors3[QQ]);
          for (QQ in this._colors3Arrays) TQ.setArray3(QQ, this._colors3Arrays[QQ]);
          for (QQ in this._colors4) {
            const WQ = this._colors4[QQ];
            TQ.setFloat4(QQ, WQ.r, WQ.g, WQ.b, WQ.a)
          }
          for (QQ in this._colors4Arrays) TQ.setArray4(QQ, this._colors4Arrays[QQ]);
          for (QQ in this._vectors2) TQ.setVector2(QQ, this._vectors2[QQ]);
          for (QQ in this._vectors3) TQ.setVector3(QQ, this._vectors3[QQ]);
          for (QQ in this._vectors4) TQ.setVector4(QQ, this._vectors4[QQ]);
          for (QQ in this._quaternions) TQ.setQuaternion(QQ, this._quaternions[QQ]);
          for (QQ in this._matrices) TQ.setMatrix(QQ, this._matrices[QQ]);
          for (QQ in this._matrixArrays) TQ.setMatrices(QQ, this._matrixArrays[QQ]);
          for (QQ in this._matrices3x3) TQ.setMatrix3x3(QQ, this._matrices3x3[QQ]);
          for (QQ in this._matrices2x2) TQ.setMatrix2x2(QQ, this._matrices2x2[QQ]);
          for (QQ in this._vectors2Arrays) TQ.setArray2(QQ, this._vectors2Arrays[QQ]);
          for (QQ in this._vectors3Arrays) TQ.setArray3(QQ, this._vectors3Arrays[QQ]);
          for (QQ in this._vectors4Arrays) TQ.setArray4(QQ, this._vectors4Arrays[QQ]);
          for (QQ in this._quaternionsArrays) TQ.setArray4(QQ, this._quaternionsArrays[QQ]);
          for (QQ in this._uniformBuffers) {
            const WQ = this._uniformBuffers[QQ].getBuffer();
            WQ && TQ.bindUniformBuffer(WQ, QQ)
          }
          const XQ = zQ.Uj(),
            sQ = XQ.setExternalTexture;
          if (sQ)
            for (QQ in this._externalTextures) sQ.call(XQ, QQ, this._externalTextures[QQ]);
          const PQ = XQ.setTextureSampler;
          if (PQ)
            for (QQ in this._textureSamplers) PQ.call(XQ, QQ, this._textureSamplers[QQ]);
          const gQ = XQ.setStorageBuffer;
          if (gQ)
            for (QQ in this._storageBuffers) gQ.call(XQ, QQ, this._storageBuffers[QQ])
        }
        if (TQ && WQ && (PQ || !this.isFrozen)) {
          (0, IQ.A)(WQ, TQ), WQ.morphTargetManager && WQ.morphTargetManager.isUsingTextureForTargets && WQ.morphTargetManager._bind(TQ);
          const QQ = WQ.bakedVertexAnimationManager;
          if (QQ && QQ.isEnabled) {
            const QQ = qQ ? wQ._drawWrapper : this._drawWrapper;
            WQ.bakedVertexAnimationManager?.bind(TQ, !!QQ._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(WQ, TQ, wQ)
      }
      getActiveTextures() {
        const QQ = super.getActiveTextures();
        for (const WQ in this._textures) QQ.push(this._textures[WQ]);
        for (const WQ in this._textureArrays) {
          const XQ = this._textureArrays[WQ];
          for (let WQ = 0; WQ < XQ.length; WQ++) QQ.push(XQ[WQ])
        }
        return QQ
      }
      hasTexture(QQ) {
        if (super.hasTexture(QQ)) return !0;
        for (const XQ in this._textures)
          if (this._textures[XQ] === QQ) return !0;
        const WQ = QQ.getInternalTexture();
        for (const XQ in this._internalTextures)
          if (this._internalTextures[XQ] === WQ) return !0;
        for (const XQ in this._textureArrays) {
          const WQ = this._textureArrays[XQ];
          for (let XQ = 0; XQ < WQ.length; XQ++)
            if (WQ[XQ] === QQ) return !0
        }
        return !1
      }
      clone(QQ) {
        const WQ = wQ.b.Clone((() => new VQ(QQ, this.sE(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        WQ.name = QQ, WQ.id = QQ, "object" === typeof WQ._shaderPath && (WQ._shaderPath = {
          ...WQ._shaderPath
        }), this._options = {
          ...this._options
        };
        const XQ = Object.keys(this._options);
        for (const wQ of XQ) {
          const QQ = this._options[wQ];
          Array.isArray(QQ) && (this._options[wQ] = QQ.slice(0))
        }
        this.stencil.copyTo(WQ.stencil);
        for (const wQ in this._textures) WQ.setTexture(wQ, this._textures[wQ]);
        for (const wQ in this._internalTextures) WQ.setInternalTexture(wQ, this._internalTextures[wQ]);
        for (const wQ in this._textureArrays) WQ.setTextureArray(wQ, this._textureArrays[wQ]);
        for (const wQ in this._externalTextures) WQ.setExternalTexture(wQ, this._externalTextures[wQ]);
        for (const wQ in this._ints) WQ.setInt(wQ, this._ints[wQ]);
        for (const wQ in this._uints) WQ.setUInt(wQ, this._uints[wQ]);
        for (const wQ in this._floats) WQ.setFloat(wQ, this._floats[wQ]);
        for (const wQ in this._floatsArrays) WQ.setFloats(wQ, this._floatsArrays[wQ]);
        for (const wQ in this._colors3) WQ.setColor3(wQ, this._colors3[wQ]);
        for (const wQ in this._colors3Arrays) WQ._colors3Arrays[wQ] = this._colors3Arrays[wQ];
        for (const wQ in this._colors4) WQ.setColor4(wQ, this._colors4[wQ]);
        for (const wQ in this._colors4Arrays) WQ._colors4Arrays[wQ] = this._colors4Arrays[wQ];
        for (const wQ in this._vectors2) WQ.setVector2(wQ, this._vectors2[wQ]);
        for (const wQ in this._vectors3) WQ.setVector3(wQ, this._vectors3[wQ]);
        for (const wQ in this._vectors4) WQ.setVector4(wQ, this._vectors4[wQ]);
        for (const wQ in this._quaternions) WQ.setQuaternion(wQ, this._quaternions[wQ]);
        for (const wQ in this._quaternionsArrays) WQ._quaternionsArrays[wQ] = this._quaternionsArrays[wQ];
        for (const wQ in this._matrices) WQ.setMatrix(wQ, this._matrices[wQ]);
        for (const wQ in this._matrixArrays) WQ._matrixArrays[wQ] = this._matrixArrays[wQ].slice();
        for (const wQ in this._matrices3x3) WQ.setMatrix3x3(wQ, this._matrices3x3[wQ]);
        for (const wQ in this._matrices2x2) WQ.setMatrix2x2(wQ, this._matrices2x2[wQ]);
        for (const wQ in this._vectors2Arrays) WQ.setArray2(wQ, this._vectors2Arrays[wQ]);
        for (const wQ in this._vectors3Arrays) WQ.setArray3(wQ, this._vectors3Arrays[wQ]);
        for (const wQ in this._vectors4Arrays) WQ.setArray4(wQ, this._vectors4Arrays[wQ]);
        for (const wQ in this._uniformBuffers) WQ.setUniformBuffer(wQ, this._uniformBuffers[wQ]);
        for (const wQ in this._textureSamplers) WQ.setTextureSampler(wQ, this._textureSamplers[wQ]);
        for (const wQ in this._storageBuffers) WQ.setStorageBuffer(wQ, this._storageBuffers[wQ]);
        return WQ
      }
      dispose(QQ, WQ, XQ) {
        if (WQ) {
          let QQ;
          for (QQ in this._textures) this._textures[QQ].dispose();
          for (QQ in this._internalTextures) this._internalTextures[QQ].dispose();
          for (QQ in this._textureArrays) {
            const WQ = this._textureArrays[QQ];
            for (let QQ = 0; QQ < WQ.length; QQ++) WQ[QQ].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(QQ, WQ, XQ)
      }
      serialize() {
        const QQ = wQ.b.Serialize(this);
        let WQ;
        for (WQ in QQ.customType = "BABYLON.ShaderMaterial", QQ.uniqueId = this.uniqueId, QQ.options = this._options, QQ.shaderPath = this._shaderPath, QQ.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, QQ.stencil = this.stencil.serialize(), QQ.textures = {}, this._textures) QQ.textures[WQ] = this._textures[WQ].serialize();
        for (WQ in QQ.textureArrays = {}, this._textureArrays) {
          QQ.textureArrays[WQ] = [];
          const XQ = this._textureArrays[WQ];
          for (let wQ = 0; wQ < XQ.length; wQ++) QQ.textureArrays[WQ].push(XQ[wQ].serialize())
        }
        for (WQ in QQ.ints = {}, this._ints) QQ.ints[WQ] = this._ints[WQ];
        for (WQ in QQ.uints = {}, this._uints) QQ.uints[WQ] = this._uints[WQ];
        for (WQ in QQ.floats = {}, this._floats) QQ.floats[WQ] = this._floats[WQ];
        for (WQ in QQ.floatsArrays = {}, this._floatsArrays) QQ.floatsArrays[WQ] = this._floatsArrays[WQ];
        for (WQ in QQ.colors3 = {}, this._colors3) {
          const XQ = this._colors3[WQ];
          QQ.colors3[WQ] = [XQ.r, XQ.g, XQ.b]
        }
        for (WQ in QQ.colors3Arrays = {}, this._colors3Arrays) QQ.colors3Arrays[WQ] = this._colors3Arrays[WQ];
        for (WQ in QQ.colors4 = {}, this._colors4) {
          const XQ = this._colors4[WQ];
          QQ.colors4[WQ] = [XQ.r, XQ.g, XQ.b, XQ.a]
        }
        for (WQ in QQ.colors4Arrays = {}, this._colors4Arrays) QQ.colors4Arrays[WQ] = this._colors4Arrays[WQ];
        for (WQ in QQ.vectors2 = {}, this._vectors2) {
          const XQ = this._vectors2[WQ];
          QQ.vectors2[WQ] = [XQ.x, XQ.y]
        }
        for (WQ in QQ.vectors3 = {}, this._vectors3) {
          const XQ = this._vectors3[WQ];
          QQ.vectors3[WQ] = [XQ.x, XQ.y, XQ.z]
        }
        for (WQ in QQ.vectors4 = {}, this._vectors4) {
          const XQ = this._vectors4[WQ];
          QQ.vectors4[WQ] = [XQ.x, XQ.y, XQ.z, XQ.w]
        }
        for (WQ in QQ.quaternions = {}, this._quaternions) QQ.quaternions[WQ] = this._quaternions[WQ].awQ();
        for (WQ in QQ.matrices = {}, this._matrices) QQ.matrices[WQ] = this._matrices[WQ].awQ();
        for (WQ in QQ.matrixArray = {}, this._matrixArrays) QQ.matrixArray[WQ] = this._matrixArrays[WQ];
        for (WQ in QQ.matrices3x3 = {}, this._matrices3x3) QQ.matrices3x3[WQ] = this._matrices3x3[WQ];
        for (WQ in QQ.matrices2x2 = {}, this._matrices2x2) QQ.matrices2x2[WQ] = this._matrices2x2[WQ];
        for (WQ in QQ.vectors2Arrays = {}, this._vectors2Arrays) QQ.vectors2Arrays[WQ] = this._vectors2Arrays[WQ];
        for (WQ in QQ.vectors3Arrays = {}, this._vectors3Arrays) QQ.vectors3Arrays[WQ] = this._vectors3Arrays[WQ];
        for (WQ in QQ.vectors4Arrays = {}, this._vectors4Arrays) QQ.vectors4Arrays[WQ] = this._vectors4Arrays[WQ];
        for (WQ in QQ.quaternionsArrays = {}, this._quaternionsArrays) QQ.quaternionsArrays[WQ] = this._quaternionsArrays[WQ];
        return QQ
      }
    }

    function DQ(QQ, WQ, XQ) {
      const qQ = wQ.b.Parse((() => new VQ(QQ.name, WQ, QQ.shaderPath, QQ.options, QQ.storeEffectOnSubMeshes)), QQ, WQ, XQ);
      let zQ;
      for (zQ in QQ.stencil && qQ.stencil.parse(QQ.stencil, WQ, XQ), QQ.textures) qQ.setTexture(zQ, sQ.g.Parse(QQ.textures[zQ], WQ, XQ));
      for (zQ in QQ.textureArrays) {
        const wQ = QQ.textureArrays[zQ],
          TQ = [];
        for (let QQ = 0; QQ < wQ.length; QQ++) TQ.push(sQ.g.Parse(wQ[QQ], WQ, XQ));
        qQ.setTextureArray(zQ, TQ)
      }
      for (zQ in QQ.ints) qQ.setInt(zQ, QQ.ints[zQ]);
      for (zQ in QQ.uints) qQ.setUInt(zQ, QQ.uints[zQ]);
      for (zQ in QQ.floats) qQ.setFloat(zQ, QQ.floats[zQ]);
      for (zQ in QQ.floatsArrays) qQ.setFloats(zQ, QQ.floatsArrays[zQ]);
      for (zQ in QQ.colors3) {
        const WQ = QQ.colors3[zQ];
        qQ.setColor3(zQ, {
          r: WQ[0],
          g: WQ[1],
          b: WQ[2]
        })
      }
      for (zQ in QQ.colors3Arrays) {
        const WQ = QQ.colors3Arrays[zQ].reduce(((QQ, WQ, XQ) => (XQ % 3 === 0 ? QQ.push([WQ]) : QQ[QQ.length - 1].push(WQ), QQ)), []).map((QQ => ({
          r: QQ[0],
          g: QQ[1],
          b: QQ[2]
        })));
        qQ.setColor3Array(zQ, WQ)
      }
      for (zQ in QQ.colors4) {
        const WQ = QQ.colors4[zQ];
        qQ.setColor4(zQ, {
          r: WQ[0],
          g: WQ[1],
          b: WQ[2],
          a: WQ[3]
        })
      }
      for (zQ in QQ.colors4Arrays) {
        const WQ = QQ.colors4Arrays[zQ].reduce(((QQ, WQ, XQ) => (XQ % 4 === 0 ? QQ.push([WQ]) : QQ[QQ.length - 1].push(WQ), QQ)), []).map((QQ => ({
          r: QQ[0],
          g: QQ[1],
          b: QQ[2],
          a: QQ[3]
        })));
        qQ.setColor4Array(zQ, WQ)
      }
      for (zQ in QQ.vectors2) {
        const WQ = QQ.vectors2[zQ];
        qQ.setVector2(zQ, {
          x: WQ[0],
          y: WQ[1]
        })
      }
      for (zQ in QQ.vectors3) {
        const WQ = QQ.vectors3[zQ];
        qQ.setVector3(zQ, {
          x: WQ[0],
          y: WQ[1],
          z: WQ[2]
        })
      }
      for (zQ in QQ.vectors4) {
        const WQ = QQ.vectors4[zQ];
        qQ.setVector4(zQ, {
          x: WQ[0],
          y: WQ[1],
          z: WQ[2],
          w: WQ[3]
        })
      }
      for (zQ in QQ.quaternions) qQ.setQuaternion(zQ, TQ.h.FromArray(QQ.quaternions[zQ]));
      for (zQ in QQ.matrices) qQ.setMatrix(zQ, TQ.e.FromArray(QQ.matrices[zQ]));
      const FQ = qQ;
      for (zQ in QQ.matrixArray) FQ._matrixArrays[zQ] = new Float32Array(QQ.matrixArray[zQ]);
      for (zQ in QQ.matrices3x3) qQ.setMatrix3x3(zQ, QQ.matrices3x3[zQ]);
      for (zQ in QQ.matrices2x2) qQ.setMatrix2x2(zQ, QQ.matrices2x2[zQ]);
      for (zQ in QQ.vectors2Arrays) qQ.setArray2(zQ, QQ.vectors2Arrays[zQ]);
      for (zQ in QQ.vectors3Arrays) qQ.setArray3(zQ, QQ.vectors3Arrays[zQ]);
      for (zQ in QQ.vectors4Arrays) qQ.setArray4(zQ, QQ.vectors4Arrays[zQ]);
      for (zQ in QQ.quaternionsArrays) qQ.setArray4(zQ, QQ.quaternionsArrays[zQ]);
      return qQ
    }
    async function pQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((qQ, TQ) => {
        const zQ = new PQ.b;
        zQ.addEventListener("readystatechange", (() => {
          if (4 == zQ.readyState)
            if (200 == zQ.status) {
              const WQ = DQ(JSON.parse(zQ.responseText), XQ || JQ.d.LastCreatedScene, wQ);
              QQ && (WQ.name = QQ), qQ(WQ)
            } else TQ("Unable to load the ShaderMaterial")
        })), zQ.open("GET", WQ), zQ.send()
      }))
    }
    async function GQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const wQ = this?.SnippetUrl ?? VQ.SnippetUrl;
      return await new Promise(((qQ, TQ) => {
        const zQ = new PQ.b;
        zQ.addEventListener("readystatechange", (() => {
          if (4 == zQ.readyState)
            if (200 == zQ.status) {
              const wQ = JSON.parse(JSON.parse(zQ.responseText).jsonPayload),
                TQ = DQ(JSON.parse(wQ.shaderMaterial), WQ || JQ.d.LastCreatedScene, XQ);
              TQ.snippetId = QQ, qQ(TQ)
            } else TQ("Unable to load the snippet " + QQ)
        })), zQ.open("GET", wQ + "/" + QQ.replace(/#/g, "/")), zQ.send()
      }))
    }
    VQ.SnippetUrl = "https://snippet.babylonjs.com";
    const UQ = GQ;
    let bQ = !1;

    function vQ() {
      bQ || (bQ = !0, VQ.Parse = DQ, VQ.ParseFromFileAsync = pQ, VQ.ParseFromSnippetAsync = GQ, VQ.CreateFromSnippetAsync = UQ, (0, BQ.d)("BABYLON.ShaderMaterial", VQ))
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);