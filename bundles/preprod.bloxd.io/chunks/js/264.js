export const id = 264;
export const ids = [264];
export const modules = {
  40297: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => IC,
      f: () => xC,
      i: () => RC,
      k: () => AC,
      o: () => GC,
      r: () => PC
    });
    var QC = ZC(39842),
      wC = ZC(39910),
      bC = ZC(36963),
      nC = ZC(39959),
      fC = ZC(40303),
      oC = ZC(40175),
      qC = ZC(39867),
      FC = ZC(40167),
      WC = ZC(36985),
      NC = ZC(40157),
      MC = ZC(40151),
      gC = ZC(40196),
      SC = ZC(37002);
    const pC = {
      effect: null,
      subMesh: null
    };
    class PC extends FC.e {
      constructor(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(CC, zC, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new bC.b, this._cachedWorldViewProjectionMatrix = new bC.b, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = ZC, this._options = {
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
          ...QC
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(CC) {
        this._shaderPath = CC
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
      _checkUniform(CC) {
        -1 === this._options.uniforms.indexOf(CC) && this._options.uniforms.push(CC)
      }
      setTexture(CC, zC) {
        return -1 === this._options.samplers.indexOf(CC) && this._options.samplers.push(CC), this._textures[CC] = zC, this
      }
      setInternalTexture(CC, zC) {
        return -1 === this._options.samplers.indexOf(CC) && this._options.samplers.push(CC), this._internalTextures[CC] = zC, this
      }
      removeTexture(CC) {
        delete this._textures[CC]
      }
      setTextureArray(CC, zC) {
        return -1 === this._options.samplers.indexOf(CC) && this._options.samplers.push(CC), this._checkUniform(CC), this._textureArrays[CC] = zC, this
      }
      setExternalTexture(CC, zC) {
        return -1 === this._options.externalTextures.indexOf(CC) && this._options.externalTextures.push(CC), this._externalTextures[CC] = zC, this
      }
      setFloat(CC, zC) {
        return this._checkUniform(CC), this._floats[CC] = zC, this
      }
      setInt(CC, zC) {
        return this._checkUniform(CC), this._ints[CC] = zC, this
      }
      setUInt(CC, zC) {
        return this._checkUniform(CC), this._uints[CC] = zC, this
      }
      setFloats(CC, zC) {
        return this._checkUniform(CC), this._floatsArrays[CC] = zC, this
      }
      setColor3(CC, zC) {
        return this._checkUniform(CC), this._colors3[CC] = zC, this
      }
      setColor3Array(CC, zC) {
        return this._checkUniform(CC), this._colors3Arrays[CC] = zC.reduce(((CC, zC) => (CC.push(zC.r, zC.g, zC.b), CC)), []), this
      }
      setColor4(CC, zC) {
        return this._checkUniform(CC), this._colors4[CC] = zC, this
      }
      setColor4Array(CC, zC) {
        return this._checkUniform(CC), this._colors4Arrays[CC] = zC.reduce(((CC, zC) => (CC.push(zC.r, zC.g, zC.b, zC.a), CC)), []), this
      }
      setVector2(CC, zC) {
        return this._checkUniform(CC), this._vectors2[CC] = zC, this
      }
      setVector3(CC, zC) {
        return this._checkUniform(CC), this._vectors3[CC] = zC, this
      }
      setVector4(CC, zC) {
        return this._checkUniform(CC), this._vectors4[CC] = zC, this
      }
      setQuaternion(CC, zC) {
        return this._checkUniform(CC), this._quaternions[CC] = zC, this
      }
      setQuaternionArray(CC, zC) {
        return this._checkUniform(CC), this._quaternionsArrays[CC] = zC.reduce(((CC, zC) => (zC.toArray(CC, CC.length), CC)), []), this
      }
      setMatrix(CC, zC) {
        return this._checkUniform(CC), this._matrices[CC] = zC, this
      }
      setMatrices(CC, zC) {
        this._checkUniform(CC);
        const ZC = new Float32Array(16 * zC.length);
        for (let QC = 0; QC < zC.length; QC++) {
          zC[QC].copyToArray(ZC, 16 * QC)
        }
        return this._matrixArrays[CC] = ZC, this
      }
      setMatrix3x3(CC, zC) {
        return this._checkUniform(CC), this._matrices3x3[CC] = zC, this
      }
      setMatrix2x2(CC, zC) {
        return this._checkUniform(CC), this._matrices2x2[CC] = zC, this
      }
      setArray2(CC, zC) {
        return this._checkUniform(CC), this._vectors2Arrays[CC] = zC, this
      }
      setArray3(CC, zC) {
        return this._checkUniform(CC), this._vectors3Arrays[CC] = zC, this
      }
      setArray4(CC, zC) {
        return this._checkUniform(CC), this._vectors4Arrays[CC] = zC, this
      }
      setUniformBuffer(CC, zC) {
        return -1 === this._options.uniformBuffers.indexOf(CC) && this._options.uniformBuffers.push(CC), this._uniformBuffers[CC] = zC, this
      }
      setTextureSampler(CC, zC) {
        return -1 === this._options.samplerObjects.indexOf(CC) && this._options.samplerObjects.push(CC), this._textureSamplers[CC] = zC, this
      }
      setStorageBuffer(CC, zC) {
        return -1 === this._options.storageBuffers.indexOf(CC) && this._options.storageBuffers.push(CC), this._storageBuffers[CC] = zC, this
      }
      setDefine(CC, zC) {
        const ZC = CC.trimEnd() + " ",
          QC = this.options.defines.findIndex((zC => zC === CC || zC.startsWith(ZC)));
        return QC >= 0 && this.options.defines.splice(QC, 1), ("boolean" !== typeof zC || zC) && this.options.defines.push(ZC + zC), this
      }
      isReadyForSubMesh(CC, zC, ZC) {
        return this.isReady(CC, ZC, zC)
      }
      isReady(CC, zC, ZC) {
        const QC = ZC && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const CC = QC ? ZC._drawWrapper : this._drawWrapper;
          if (CC.effect && CC._wasPreviouslyReady && CC._wasPreviouslyUsingInstances === zC) return !0
        }
        const bC = this.Km(),
          fC = bC.mg(),
          qC = [],
          FC = [];
        let WC = null,
          SC = this._shaderPath,
          PC = this._options.uniforms,
          GC = this._options.uniformBuffers,
          RC = this._options.samplers;
        fC.getCaps().multiview && bC.activeCamera && bC.activeCamera.outputRenderTarget && bC.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, qC.push("#define MULTIVIEW"), -1 !== PC.indexOf("viewProjection") && -1 === PC.indexOf("viewProjectionR") && PC.push("viewProjectionR"));
        for (let wC = 0; wC < this._options.defines.length; wC++) {
          const CC = 0 === this._options.defines[wC].indexOf("#define") ? this._options.defines[wC] : `#define ${this._options.defines[wC]}`;
          qC.push(CC)
        }
        for (let wC = 0; wC < this._options.attributes.length; wC++) FC.push(this._options.attributes[wC]);
        if (CC && CC.isVerticesDataPresent(nC.k.ColorKind) && (-1 === FC.indexOf(nC.k.ColorKind) && FC.push(nC.k.ColorKind), qC.push("#define VERTEXCOLOR")), zC && (qC.push("#define INSTANCES"), (0, MC.Ab)(FC, this._materialHelperNeedsPreviousMatrices), CC?.hasThinInstances && (qC.push("#define THIN_INSTANCES"), CC && CC.isVerticesDataPresent(nC.k.ColorInstanceKind) && (FC.push(nC.k.ColorInstanceKind), qC.push("#define INSTANCESCOLOR")))), CC && CC.useBones && CC.computeBonesUsingShaders && CC.skeleton) {
          FC.push(nC.k.MatricesIndicesKind), FC.push(nC.k.MatricesWeightsKind), CC.numBoneInfluencers > 4 && (FC.push(nC.k.MatricesIndicesExtraKind), FC.push(nC.k.MatricesWeightsExtraKind));
          const zC = CC.skeleton;
          qC.push("#define NUM_BONE_INFLUENCERS " + CC.numBoneInfluencers), WC = new oC.c, WC.addCPUSkinningFallback(0, CC), zC.isUsingTextureForMatrices ? (qC.push("#define BONETEXTURE"), -1 === PC.indexOf("boneTextureInfo") && PC.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (qC.push("#define BonesPerMesh " + (zC.bones.length + 1)), -1 === PC.indexOf("mBones") && PC.push("mBones"))
        } else qC.push("#define NUM_BONE_INFLUENCERS 0");
        let AC = 0;
        const xC = CC ? CC.morphTargetManager : null;
        if (xC) {
          const zC = -1 !== qC.indexOf("#define UV1"),
            ZC = -1 !== qC.indexOf("#define UV2"),
            QC = -1 !== qC.indexOf("#define TANGENT"),
            wC = -1 !== qC.indexOf("#define NORMAL"),
            bC = -1 !== qC.indexOf("#define VERTEXCOLOR");
          AC = (0, MC.T)(xC, qC, FC, CC, !0, wC, QC, zC, ZC, bC), xC.isUsingTextureForTargets && (-1 === PC.indexOf("morphTargetTextureIndices") && PC.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), AC > 0 && (PC = PC.slice(), PC.push("morphTargetInfluences"), PC.push("morphTargetCount"), PC.push("morphTargetTextureInfo"), PC.push("morphTargetTextureIndices"))
        } else qC.push("#define NUM_MORPH_INFLUENCERS 0");
        if (CC) {
          const ZC = CC.bakedVertexAnimationManager;
          ZC && ZC.isEnabled && (qC.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === PC.indexOf("bakedVertexAnimationSettings") && PC.push("bakedVertexAnimationSettings"), -1 === PC.indexOf("bakedVertexAnimationTextureSizeInverted") && PC.push("bakedVertexAnimationTextureSizeInverted"), -1 === PC.indexOf("bakedVertexAnimationTime") && PC.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), zC && FC.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const wC in this._textures)
          if (!this._textures[wC].isReady()) return !1;
        for (const wC in this._internalTextures)
          if (!this._internalTextures[wC].isReady) return !1;
        CC && this.needAlphaTestingForMesh(CC) && qC.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, NC.d)(PC), (0, NC.l)(this, bC, qC)), bC.fogEnabled && CC?.applyFog && bC.fogMode !== wC.g.FOGMODE_NONE && (qC.push("#define FOG"), -1 === PC.indexOf("view") && PC.push("view"), -1 === PC.indexOf("vFogInfos") && PC.push("vFogInfos"), -1 === PC.indexOf("vFogColor") && PC.push("vFogColor")), this._useLogarithmicDepth && (qC.push("#define LOGARITHMICDEPTH"), -1 === PC.indexOf("logarithmicDepthConstant") && PC.push("logarithmicDepthConstant"));
        const JC = ZC ? ZC.getRenderingMesh() : CC;
        if (JC && this.useVertexPulling) {
          const CC = JC.geometry;
          CC && (this._vertexPullingMetadata = (0, gC.d)(CC), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((CC, zC) => {
            PC.push(`vp_${zC}_info`)
          }))), qC.push("#define USE_VERTEX_PULLING");
          const zC = JC.geometry?.getIndexBuffer();
          zC && !JC.isUnIndexed && (qC.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), zC.is32Bits && qC.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (PC = PC.slice(), GC = GC.slice(), RC = RC.slice(), SC = this.customShaderNameResolve(this.name, PC, GC, RC, qC, FC));
        const IC = QC ? ZC._getDrawWrapper(void 0, !0) : this._drawWrapper,
          iC = IC?.effect ?? null,
          vC = IC?.defines ?? null,
          eC = qC.join("\n");
        let hC = iC;
        return vC !== eC && (hC = fC.createEffect(SC, {
          attributes: FC,
          uniformsNames: PC,
          uniformBuffersNames: GC,
          samplers: RC,
          defines: eC,
          fallbacks: WC,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: AC
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, fC), QC ? ZC.setEffect(hC, eC, this._materialContext) : IC && IC.setEffect(hC, eC), this._onEffectCreatedObservable && (pC.effect = hC, pC.subMesh = ZC ?? CC?.Zx[0] ?? null, this._onEffectCreatedObservable.notifyObservers(pC))), IC._wasPreviouslyUsingInstances = !!zC, !!hC?.isReady() && (iC !== hC && bC.resetCachedMaterial(), IC._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(CC, zC) {
        const ZC = zC ?? this.getEffect();
        if (!ZC) return;
        const QC = this._options.uniforms; - 1 !== QC.indexOf("world") && ZC.setMatrix("world", CC);
        const wC = this.Km(); - 1 !== QC.indexOf("worldView") && (CC.multiplyToRef(wC.getViewMatrix(), this._cachedWorldViewMatrix), ZC.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== QC.indexOf("worldViewProjection") && (CC.multiplyToRef(wC.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), ZC.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== QC.indexOf("view") && ZC.setMatrix("view", wC.getViewMatrix())
      }
      bindForSubMesh(CC, zC, ZC) {
        this.bind(CC, zC, ZC._drawWrapperOverride?.effect, ZC)
      }
      bind(CC, zC, ZC, QC) {
        const wC = QC && this._storeEffectOnSubMeshes,
          bC = ZC ?? (wC ? QC.effect : this.getEffect());
        if (!bC) return;
        const nC = this.Km();
        this._activeEffect = bC, this.bindOnlyWorldMatrix(CC, ZC);
        const fC = this._options.uniformBuffers;
        let oC = !1;
        if (bC && fC && fC.length > 0 && nC.mg().supportsUniformBuffers)
          for (let FC = 0; FC < fC.length; ++FC) {
            switch (fC[FC]) {
              case "Mesh":
                zC && (zC.getMeshUniformBuffer().bindToEffect(bC, "Mesh"), zC.transferToEffect(CC));
                break;
              case "Scene":
                (0, MC.x)(bC, nC.getSceneUniformBuffer()), nC.finalizeSceneUbo(), oC = !0
            }
          }
        const qC = zC && wC ? this._mustRebind(nC, bC, QC, zC.visibility) : nC.getCachedMaterial() !== this;
        if (bC && qC) {
          let CC;
          for (CC in oC || -1 === this._options.uniforms.indexOf("view") || bC.setMatrix("view", nC.getViewMatrix()), oC || -1 === this._options.uniforms.indexOf("projection") || bC.setMatrix("projection", nC.getProjectionMatrix()), oC || -1 === this._options.uniforms.indexOf("viewProjection") || (bC.setMatrix("viewProjection", nC.getTransformMatrix()), this._multiview && bC.setMatrix("viewProjectionR", nC._transformMatrixR)), nC.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && bC.setVector3("cameraPosition", nC.activeCamera.globalPosition), (0, MC.f)(zC, bC), (0, NC.g)(bC, this, nC), this._vertexPullingMetadata && (0, gC.c)(bC, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, MC.t)(wC ? QC.materialDefines : bC.defines, bC, nC), zC && (0, MC.h)(nC, zC, bC), this._textures) bC.setTexture(CC, this._textures[CC]);
          for (CC in this._internalTextures) bC._bindTexture(CC, this._internalTextures[CC]);
          for (CC in this._textureArrays) bC.setTextureArray(CC, this._textureArrays[CC]);
          for (CC in this._ints) bC.setInt(CC, this._ints[CC]);
          for (CC in this._uints) bC.setUInt(CC, this._uints[CC]);
          for (CC in this._floats) bC.setFloat(CC, this._floats[CC]);
          for (CC in this._floatsArrays) bC.setArray(CC, this._floatsArrays[CC]);
          for (CC in this._colors3) bC.setColor3(CC, this._colors3[CC]);
          for (CC in this._colors3Arrays) bC.setArray3(CC, this._colors3Arrays[CC]);
          for (CC in this._colors4) {
            const zC = this._colors4[CC];
            bC.setFloat4(CC, zC.r, zC.g, zC.b, zC.a)
          }
          for (CC in this._colors4Arrays) bC.setArray4(CC, this._colors4Arrays[CC]);
          for (CC in this._vectors2) bC.setVector2(CC, this._vectors2[CC]);
          for (CC in this._vectors3) bC.setVector3(CC, this._vectors3[CC]);
          for (CC in this._vectors4) bC.setVector4(CC, this._vectors4[CC]);
          for (CC in this._quaternions) bC.setQuaternion(CC, this._quaternions[CC]);
          for (CC in this._matrices) bC.setMatrix(CC, this._matrices[CC]);
          for (CC in this._matrixArrays) bC.setMatrices(CC, this._matrixArrays[CC]);
          for (CC in this._matrices3x3) bC.setMatrix3x3(CC, this._matrices3x3[CC]);
          for (CC in this._matrices2x2) bC.setMatrix2x2(CC, this._matrices2x2[CC]);
          for (CC in this._vectors2Arrays) bC.setArray2(CC, this._vectors2Arrays[CC]);
          for (CC in this._vectors3Arrays) bC.setArray3(CC, this._vectors3Arrays[CC]);
          for (CC in this._vectors4Arrays) bC.setArray4(CC, this._vectors4Arrays[CC]);
          for (CC in this._quaternionsArrays) bC.setArray4(CC, this._quaternionsArrays[CC]);
          for (CC in this._uniformBuffers) {
            const zC = this._uniformBuffers[CC].getBuffer();
            zC && bC.bindUniformBuffer(zC, CC)
          }
          const ZC = nC.mg(),
            fC = ZC.setExternalTexture;
          if (fC)
            for (CC in this._externalTextures) fC.call(ZC, CC, this._externalTextures[CC]);
          const qC = ZC.setTextureSampler;
          if (qC)
            for (CC in this._textureSamplers) qC.call(ZC, CC, this._textureSamplers[CC]);
          const FC = ZC.setStorageBuffer;
          if (FC)
            for (CC in this._storageBuffers) FC.call(ZC, CC, this._storageBuffers[CC])
        }
        if (bC && zC && (qC || !this.isFrozen)) {
          (0, MC.u)(zC, bC), zC.morphTargetManager && zC.morphTargetManager.isUsingTextureForTargets && zC.morphTargetManager._bind(bC);
          const CC = zC.bakedVertexAnimationManager;
          if (CC && CC.isEnabled) {
            const CC = wC ? QC._drawWrapper : this._drawWrapper;
            zC.bakedVertexAnimationManager?.bind(bC, !!CC._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(zC, bC, QC)
      }
      getActiveTextures() {
        const CC = super.getActiveTextures();
        for (const zC in this._textures) CC.push(this._textures[zC]);
        for (const zC in this._textureArrays) {
          const ZC = this._textureArrays[zC];
          for (let zC = 0; zC < ZC.length; zC++) CC.push(ZC[zC])
        }
        return CC
      }
      hasTexture(CC) {
        if (super.hasTexture(CC)) return !0;
        for (const ZC in this._textures)
          if (this._textures[ZC] === CC) return !0;
        const zC = CC.getInternalTexture();
        for (const ZC in this._internalTextures)
          if (this._internalTextures[ZC] === zC) return !0;
        for (const ZC in this._textureArrays) {
          const zC = this._textureArrays[ZC];
          for (let ZC = 0; ZC < zC.length; ZC++)
            if (zC[ZC] === CC) return !0
        }
        return !1
      }
      clone(CC) {
        const zC = QC.d.Clone((() => new PC(CC, this.Km(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        zC.name = CC, zC.id = CC, "object" === typeof zC._shaderPath && (zC._shaderPath = {
          ...zC._shaderPath
        }), this._options = {
          ...this._options
        };
        const ZC = Object.keys(this._options);
        for (const QC of ZC) {
          const CC = this._options[QC];
          Array.isArray(CC) && (this._options[QC] = CC.slice(0))
        }
        this.stencil.copyTo(zC.stencil);
        for (const QC in this._textures) zC.setTexture(QC, this._textures[QC]);
        for (const QC in this._internalTextures) zC.setInternalTexture(QC, this._internalTextures[QC]);
        for (const QC in this._textureArrays) zC.setTextureArray(QC, this._textureArrays[QC]);
        for (const QC in this._externalTextures) zC.setExternalTexture(QC, this._externalTextures[QC]);
        for (const QC in this._ints) zC.setInt(QC, this._ints[QC]);
        for (const QC in this._uints) zC.setUInt(QC, this._uints[QC]);
        for (const QC in this._floats) zC.setFloat(QC, this._floats[QC]);
        for (const QC in this._floatsArrays) zC.setFloats(QC, this._floatsArrays[QC]);
        for (const QC in this._colors3) zC.setColor3(QC, this._colors3[QC]);
        for (const QC in this._colors3Arrays) zC._colors3Arrays[QC] = this._colors3Arrays[QC];
        for (const QC in this._colors4) zC.setColor4(QC, this._colors4[QC]);
        for (const QC in this._colors4Arrays) zC._colors4Arrays[QC] = this._colors4Arrays[QC];
        for (const QC in this._vectors2) zC.setVector2(QC, this._vectors2[QC]);
        for (const QC in this._vectors3) zC.setVector3(QC, this._vectors3[QC]);
        for (const QC in this._vectors4) zC.setVector4(QC, this._vectors4[QC]);
        for (const QC in this._quaternions) zC.setQuaternion(QC, this._quaternions[QC]);
        for (const QC in this._quaternionsArrays) zC._quaternionsArrays[QC] = this._quaternionsArrays[QC];
        for (const QC in this._matrices) zC.setMatrix(QC, this._matrices[QC]);
        for (const QC in this._matrixArrays) zC._matrixArrays[QC] = this._matrixArrays[QC].slice();
        for (const QC in this._matrices3x3) zC.setMatrix3x3(QC, this._matrices3x3[QC]);
        for (const QC in this._matrices2x2) zC.setMatrix2x2(QC, this._matrices2x2[QC]);
        for (const QC in this._vectors2Arrays) zC.setArray2(QC, this._vectors2Arrays[QC]);
        for (const QC in this._vectors3Arrays) zC.setArray3(QC, this._vectors3Arrays[QC]);
        for (const QC in this._vectors4Arrays) zC.setArray4(QC, this._vectors4Arrays[QC]);
        for (const QC in this._uniformBuffers) zC.setUniformBuffer(QC, this._uniformBuffers[QC]);
        for (const QC in this._textureSamplers) zC.setTextureSampler(QC, this._textureSamplers[QC]);
        for (const QC in this._storageBuffers) zC.setStorageBuffer(QC, this._storageBuffers[QC]);
        return zC
      }
      dispose(CC, zC, ZC) {
        if (zC) {
          let CC;
          for (CC in this._textures) this._textures[CC].dispose();
          for (CC in this._internalTextures) this._internalTextures[CC].dispose();
          for (CC in this._textureArrays) {
            const zC = this._textureArrays[CC];
            for (let CC = 0; CC < zC.length; CC++) zC[CC].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(CC, zC, ZC)
      }
      serialize() {
        const CC = QC.d.Serialize(this);
        let zC;
        for (zC in CC.customType = "BABYLON.ShaderMaterial", CC.uniqueId = this.uniqueId, CC.options = this._options, CC.shaderPath = this._shaderPath, CC.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, CC.stencil = this.stencil.serialize(), CC.textures = {}, this._textures) CC.textures[zC] = this._textures[zC].serialize();
        for (zC in CC.textureArrays = {}, this._textureArrays) {
          CC.textureArrays[zC] = [];
          const ZC = this._textureArrays[zC];
          for (let QC = 0; QC < ZC.length; QC++) CC.textureArrays[zC].push(ZC[QC].serialize())
        }
        for (zC in CC.ints = {}, this._ints) CC.ints[zC] = this._ints[zC];
        for (zC in CC.uints = {}, this._uints) CC.uints[zC] = this._uints[zC];
        for (zC in CC.floats = {}, this._floats) CC.floats[zC] = this._floats[zC];
        for (zC in CC.floatsArrays = {}, this._floatsArrays) CC.floatsArrays[zC] = this._floatsArrays[zC];
        for (zC in CC.colors3 = {}, this._colors3) {
          const ZC = this._colors3[zC];
          CC.colors3[zC] = [ZC.r, ZC.g, ZC.b]
        }
        for (zC in CC.colors3Arrays = {}, this._colors3Arrays) CC.colors3Arrays[zC] = this._colors3Arrays[zC];
        for (zC in CC.colors4 = {}, this._colors4) {
          const ZC = this._colors4[zC];
          CC.colors4[zC] = [ZC.r, ZC.g, ZC.b, ZC.a]
        }
        for (zC in CC.colors4Arrays = {}, this._colors4Arrays) CC.colors4Arrays[zC] = this._colors4Arrays[zC];
        for (zC in CC.vectors2 = {}, this._vectors2) {
          const ZC = this._vectors2[zC];
          CC.vectors2[zC] = [ZC.x, ZC.y]
        }
        for (zC in CC.vectors3 = {}, this._vectors3) {
          const ZC = this._vectors3[zC];
          CC.vectors3[zC] = [ZC.x, ZC.y, ZC.z]
        }
        for (zC in CC.vectors4 = {}, this._vectors4) {
          const ZC = this._vectors4[zC];
          CC.vectors4[zC] = [ZC.x, ZC.y, ZC.z, ZC.w]
        }
        for (zC in CC.quaternions = {}, this._quaternions) CC.quaternions[zC] = this._quaternions[zC].VZC();
        for (zC in CC.matrices = {}, this._matrices) CC.matrices[zC] = this._matrices[zC].VZC();
        for (zC in CC.matrixArray = {}, this._matrixArrays) CC.matrixArray[zC] = this._matrixArrays[zC];
        for (zC in CC.matrices3x3 = {}, this._matrices3x3) CC.matrices3x3[zC] = this._matrices3x3[zC];
        for (zC in CC.matrices2x2 = {}, this._matrices2x2) CC.matrices2x2[zC] = this._matrices2x2[zC];
        for (zC in CC.vectors2Arrays = {}, this._vectors2Arrays) CC.vectors2Arrays[zC] = this._vectors2Arrays[zC];
        for (zC in CC.vectors3Arrays = {}, this._vectors3Arrays) CC.vectors3Arrays[zC] = this._vectors3Arrays[zC];
        for (zC in CC.vectors4Arrays = {}, this._vectors4Arrays) CC.vectors4Arrays[zC] = this._vectors4Arrays[zC];
        for (zC in CC.quaternionsArrays = {}, this._quaternionsArrays) CC.quaternionsArrays[zC] = this._quaternionsArrays[zC];
        return CC
      }
    }

    function GC(CC, zC, ZC) {
      const wC = QC.d.Parse((() => new PC(CC.name, zC, CC.shaderPath, CC.options, CC.storeEffectOnSubMeshes)), CC, zC, ZC);
      let nC;
      for (nC in CC.stencil && wC.stencil.parse(CC.stencil, zC, ZC), CC.textures) wC.setTexture(nC, fC.h.Parse(CC.textures[nC], zC, ZC));
      for (nC in CC.textureArrays) {
        const QC = CC.textureArrays[nC],
          bC = [];
        for (let CC = 0; CC < QC.length; CC++) bC.push(fC.h.Parse(QC[CC], zC, ZC));
        wC.setTextureArray(nC, bC)
      }
      for (nC in CC.ints) wC.setInt(nC, CC.ints[nC]);
      for (nC in CC.uints) wC.setUInt(nC, CC.uints[nC]);
      for (nC in CC.floats) wC.setFloat(nC, CC.floats[nC]);
      for (nC in CC.floatsArrays) wC.setFloats(nC, CC.floatsArrays[nC]);
      for (nC in CC.colors3) {
        const zC = CC.colors3[nC];
        wC.setColor3(nC, {
          r: zC[0],
          g: zC[1],
          b: zC[2]
        })
      }
      for (nC in CC.colors3Arrays) {
        const zC = CC.colors3Arrays[nC].reduce(((CC, zC, ZC) => (ZC % 3 === 0 ? CC.push([zC]) : CC[CC.length - 1].push(zC), CC)), []).map((CC => ({
          r: CC[0],
          g: CC[1],
          b: CC[2]
        })));
        wC.setColor3Array(nC, zC)
      }
      for (nC in CC.colors4) {
        const zC = CC.colors4[nC];
        wC.setColor4(nC, {
          r: zC[0],
          g: zC[1],
          b: zC[2],
          a: zC[3]
        })
      }
      for (nC in CC.colors4Arrays) {
        const zC = CC.colors4Arrays[nC].reduce(((CC, zC, ZC) => (ZC % 4 === 0 ? CC.push([zC]) : CC[CC.length - 1].push(zC), CC)), []).map((CC => ({
          r: CC[0],
          g: CC[1],
          b: CC[2],
          a: CC[3]
        })));
        wC.setColor4Array(nC, zC)
      }
      for (nC in CC.vectors2) {
        const zC = CC.vectors2[nC];
        wC.setVector2(nC, {
          x: zC[0],
          y: zC[1]
        })
      }
      for (nC in CC.vectors3) {
        const zC = CC.vectors3[nC];
        wC.setVector3(nC, {
          x: zC[0],
          y: zC[1],
          z: zC[2]
        })
      }
      for (nC in CC.vectors4) {
        const zC = CC.vectors4[nC];
        wC.setVector4(nC, {
          x: zC[0],
          y: zC[1],
          z: zC[2],
          w: zC[3]
        })
      }
      for (nC in CC.quaternions) wC.setQuaternion(nC, bC.f.FromArray(CC.quaternions[nC]));
      for (nC in CC.matrices) wC.setMatrix(nC, bC.b.FromArray(CC.matrices[nC]));
      const oC = wC;
      for (nC in CC.matrixArray) oC._matrixArrays[nC] = new Float32Array(CC.matrixArray[nC]);
      for (nC in CC.matrices3x3) wC.setMatrix3x3(nC, CC.matrices3x3[nC]);
      for (nC in CC.matrices2x2) wC.setMatrix2x2(nC, CC.matrices2x2[nC]);
      for (nC in CC.vectors2Arrays) wC.setArray2(nC, CC.vectors2Arrays[nC]);
      for (nC in CC.vectors3Arrays) wC.setArray3(nC, CC.vectors3Arrays[nC]);
      for (nC in CC.vectors4Arrays) wC.setArray4(nC, CC.vectors4Arrays[nC]);
      for (nC in CC.quaternionsArrays) wC.setArray4(nC, CC.quaternionsArrays[nC]);
      return wC
    }
    async function RC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((wC, bC) => {
        const nC = new qC.d;
        nC.addEventListener("readystatechange", (() => {
          if (4 == nC.readyState)
            if (200 == nC.status) {
              const zC = GC(JSON.parse(nC.responseText), ZC || WC.c.LastCreatedScene, QC);
              CC && (zC.name = CC), wC(zC)
            } else bC("Unable to load the ShaderMaterial")
        })), nC.open("GET", zC), nC.send()
      }))
    }
    async function AC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const QC = this?.SnippetUrl ?? PC.SnippetUrl;
      return await new Promise(((wC, bC) => {
        const nC = new qC.d;
        nC.addEventListener("readystatechange", (() => {
          if (4 == nC.readyState)
            if (200 == nC.status) {
              const QC = JSON.parse(JSON.parse(nC.responseText).jsonPayload),
                bC = GC(JSON.parse(QC.shaderMaterial), zC || WC.c.LastCreatedScene, ZC);
              bC.snippetId = CC, wC(bC)
            } else bC("Unable to load the snippet " + CC)
        })), nC.open("GET", QC + "/" + CC.replace(/#/g, "/")), nC.send()
      }))
    }
    PC.SnippetUrl = "https://snippet.babylonjs.com";
    const xC = AC;
    let JC = !1;

    function IC() {
      JC || (JC = !0, PC.Parse = GC, PC.ParseFromFileAsync = RC, PC.ParseFromSnippetAsync = AC, PC.CreateFromSnippetAsync = xC, (0, SC.d)("BABYLON.ShaderMaterial", PC))
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);