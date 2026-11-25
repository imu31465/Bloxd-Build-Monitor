export const id = 289;
export const ids = [289];
export const modules = {
  41556: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => eM,
      f: () => GM,
      g: () => EM,
      j: () => UM,
      m: () => lM,
      n: () => yM
    });
    var OM = iM(41121),
      SM = iM(41196),
      jM = iM(38040),
      aM = iM(41250),
      PM = iM(41560),
      nM = iM(41447),
      QM = iM(41148),
      zM = iM(41442),
      LM = iM(38064),
      mM = iM(41433),
      HM = iM(41426),
      hM = iM(41469),
      JM = iM(38085);
    const dM = {
      effect: null,
      subMesh: null
    };
    class yM extends zM.c {
      constructor(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(MM, rM, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new jM.d, this._cachedWorldViewProjectionMatrix = new jM.d, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = iM, this._options = {
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
          ...OM
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(MM) {
        this._shaderPath = MM
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
      _checkUniform(MM) {
        -1 === this._options.uniforms.indexOf(MM) && this._options.uniforms.push(MM)
      }
      setTexture(MM, rM) {
        return -1 === this._options.samplers.indexOf(MM) && this._options.samplers.push(MM), this._textures[MM] = rM, this
      }
      setInternalTexture(MM, rM) {
        return -1 === this._options.samplers.indexOf(MM) && this._options.samplers.push(MM), this._internalTextures[MM] = rM, this
      }
      removeTexture(MM) {
        delete this._textures[MM]
      }
      setTextureArray(MM, rM) {
        return -1 === this._options.samplers.indexOf(MM) && this._options.samplers.push(MM), this._checkUniform(MM), this._textureArrays[MM] = rM, this
      }
      setExternalTexture(MM, rM) {
        return -1 === this._options.externalTextures.indexOf(MM) && this._options.externalTextures.push(MM), this._externalTextures[MM] = rM, this
      }
      setFloat(MM, rM) {
        return this._checkUniform(MM), this._floats[MM] = rM, this
      }
      setInt(MM, rM) {
        return this._checkUniform(MM), this._ints[MM] = rM, this
      }
      setUInt(MM, rM) {
        return this._checkUniform(MM), this._uints[MM] = rM, this
      }
      setFloats(MM, rM) {
        return this._checkUniform(MM), this._floatsArrays[MM] = rM, this
      }
      setColor3(MM, rM) {
        return this._checkUniform(MM), this._colors3[MM] = rM, this
      }
      setColor3Array(MM, rM) {
        return this._checkUniform(MM), this._colors3Arrays[MM] = rM.reduce(((MM, rM) => (MM.push(rM.r, rM.g, rM.b), MM)), []), this
      }
      setColor4(MM, rM) {
        return this._checkUniform(MM), this._colors4[MM] = rM, this
      }
      setColor4Array(MM, rM) {
        return this._checkUniform(MM), this._colors4Arrays[MM] = rM.reduce(((MM, rM) => (MM.push(rM.r, rM.g, rM.b, rM.a), MM)), []), this
      }
      setVector2(MM, rM) {
        return this._checkUniform(MM), this._vectors2[MM] = rM, this
      }
      setVector3(MM, rM) {
        return this._checkUniform(MM), this._vectors3[MM] = rM, this
      }
      setVector4(MM, rM) {
        return this._checkUniform(MM), this._vectors4[MM] = rM, this
      }
      setQuaternion(MM, rM) {
        return this._checkUniform(MM), this._quaternions[MM] = rM, this
      }
      setQuaternionArray(MM, rM) {
        return this._checkUniform(MM), this._quaternionsArrays[MM] = rM.reduce(((MM, rM) => (rM.toArray(MM, MM.length), MM)), []), this
      }
      setMatrix(MM, rM) {
        return this._checkUniform(MM), this._matrices[MM] = rM, this
      }
      setMatrices(MM, rM) {
        this._checkUniform(MM);
        const iM = new Float32Array(16 * rM.length);
        for (let OM = 0; OM < rM.length; OM++) {
          rM[OM].copyToArray(iM, 16 * OM)
        }
        return this._matrixArrays[MM] = iM, this
      }
      setMatrix3x3(MM, rM) {
        return this._checkUniform(MM), this._matrices3x3[MM] = rM, this
      }
      setMatrix2x2(MM, rM) {
        return this._checkUniform(MM), this._matrices2x2[MM] = rM, this
      }
      setArray2(MM, rM) {
        return this._checkUniform(MM), this._vectors2Arrays[MM] = rM, this
      }
      setArray3(MM, rM) {
        return this._checkUniform(MM), this._vectors3Arrays[MM] = rM, this
      }
      setArray4(MM, rM) {
        return this._checkUniform(MM), this._vectors4Arrays[MM] = rM, this
      }
      setUniformBuffer(MM, rM) {
        return -1 === this._options.uniformBuffers.indexOf(MM) && this._options.uniformBuffers.push(MM), this._uniformBuffers[MM] = rM, this
      }
      setTextureSampler(MM, rM) {
        return -1 === this._options.samplerObjects.indexOf(MM) && this._options.samplerObjects.push(MM), this._textureSamplers[MM] = rM, this
      }
      setStorageBuffer(MM, rM) {
        return -1 === this._options.storageBuffers.indexOf(MM) && this._options.storageBuffers.push(MM), this._storageBuffers[MM] = rM, this
      }
      setDefine(MM, rM) {
        const iM = MM.trimEnd() + " ",
          OM = this.options.defines.findIndex((rM => rM === MM || rM.startsWith(iM)));
        return OM >= 0 && this.options.defines.splice(OM, 1), ("boolean" !== typeof rM || rM) && this.options.defines.push(iM + rM), this
      }
      isReadyForSubMesh(MM, rM, iM) {
        return this.isReady(MM, iM, rM)
      }
      isReady(MM, rM, iM) {
        const OM = iM && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const MM = OM ? iM._drawWrapper : this._drawWrapper;
          if (MM.effect && MM._wasPreviouslyReady && MM._wasPreviouslyUsingInstances === rM) return !0
        }
        const jM = this.Hk(),
          PM = jM.ph(),
          QM = [],
          zM = [];
        let LM = null,
          JM = this._shaderPath,
          yM = this._options.uniforms,
          lM = this._options.uniformBuffers,
          EM = this._options.samplers;
        PM.getCaps().multiview && jM.activeCamera && jM.activeCamera.outputRenderTarget && jM.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, QM.push("#define MULTIVIEW"), -1 !== yM.indexOf("viewProjection") && -1 === yM.indexOf("viewProjectionR") && yM.push("viewProjectionR"));
        for (let SM = 0; SM < this._options.defines.length; SM++) {
          const MM = 0 === this._options.defines[SM].indexOf("#define") ? this._options.defines[SM] : `#define ${this._options.defines[SM]}`;
          QM.push(MM)
        }
        for (let SM = 0; SM < this._options.attributes.length; SM++) zM.push(this._options.attributes[SM]);
        if (MM && MM.isVerticesDataPresent(aM.j.ColorKind) && (-1 === zM.indexOf(aM.j.ColorKind) && zM.push(aM.j.ColorKind), QM.push("#define VERTEXCOLOR")), rM && (QM.push("#define INSTANCES"), (0, HM.jb)(zM, this._materialHelperNeedsPreviousMatrices), MM?.hasThinInstances && (QM.push("#define THIN_INSTANCES"), MM && MM.isVerticesDataPresent(aM.j.ColorInstanceKind) && (zM.push(aM.j.ColorInstanceKind), QM.push("#define INSTANCESCOLOR")))), MM && MM.useBones && MM.computeBonesUsingShaders && MM.skeleton) {
          zM.push(aM.j.MatricesIndicesKind), zM.push(aM.j.MatricesWeightsKind), MM.numBoneInfluencers > 4 && (zM.push(aM.j.MatricesIndicesExtraKind), zM.push(aM.j.MatricesWeightsExtraKind));
          const rM = MM.skeleton;
          QM.push("#define NUM_BONE_INFLUENCERS " + MM.numBoneInfluencers), LM = new nM.b, LM.addCPUSkinningFallback(0, MM), rM.isUsingTextureForMatrices ? (QM.push("#define BONETEXTURE"), -1 === yM.indexOf("boneTextureInfo") && yM.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (QM.push("#define BonesPerMesh " + (rM.bones.length + 1)), -1 === yM.indexOf("mBones") && yM.push("mBones"))
        } else QM.push("#define NUM_BONE_INFLUENCERS 0");
        let UM = 0;
        const GM = MM ? MM.morphTargetManager : null;
        if (GM) {
          const rM = -1 !== QM.indexOf("#define UV1"),
            iM = -1 !== QM.indexOf("#define UV2"),
            OM = -1 !== QM.indexOf("#define TANGENT"),
            SM = -1 !== QM.indexOf("#define NORMAL"),
            jM = -1 !== QM.indexOf("#define VERTEXCOLOR");
          UM = (0, HM.H)(GM, QM, zM, MM, !0, SM, OM, rM, iM, jM), GM.isUsingTextureForTargets && (-1 === yM.indexOf("morphTargetTextureIndices") && yM.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), UM > 0 && (yM = yM.slice(), yM.push("morphTargetInfluences"), yM.push("morphTargetCount"), yM.push("morphTargetTextureInfo"), yM.push("morphTargetTextureIndices"))
        } else QM.push("#define NUM_MORPH_INFLUENCERS 0");
        if (MM) {
          const iM = MM.bakedVertexAnimationManager;
          iM && iM.isEnabled && (QM.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === yM.indexOf("bakedVertexAnimationSettings") && yM.push("bakedVertexAnimationSettings"), -1 === yM.indexOf("bakedVertexAnimationTextureSizeInverted") && yM.push("bakedVertexAnimationTextureSizeInverted"), -1 === yM.indexOf("bakedVertexAnimationTime") && yM.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), rM && zM.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const SM in this._textures)
          if (!this._textures[SM].isReady()) return !1;
        for (const SM in this._internalTextures)
          if (!this._internalTextures[SM].isReady) return !1;
        MM && this.needAlphaTestingForMesh(MM) && QM.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, mM.b)(yM), (0, mM.j)(this, jM, QM)), jM.fogEnabled && MM?.applyFog && jM.fogMode !== SM.d.FOGMODE_NONE && (QM.push("#define FOG"), -1 === yM.indexOf("view") && yM.push("view"), -1 === yM.indexOf("vFogInfos") && yM.push("vFogInfos"), -1 === yM.indexOf("vFogColor") && yM.push("vFogColor")), this._useLogarithmicDepth && (QM.push("#define LOGARITHMICDEPTH"), -1 === yM.indexOf("logarithmicDepthConstant") && yM.push("logarithmicDepthConstant"));
        const CM = iM ? iM.getRenderingMesh() : MM;
        if (CM && this.useVertexPulling) {
          const MM = CM.geometry;
          MM && (this._vertexPullingMetadata = (0, hM.g)(MM), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((MM, rM) => {
            yM.push(`vp_${rM}_info`)
          }))), QM.push("#define USE_VERTEX_PULLING");
          const rM = CM.geometry?.getIndexBuffer();
          rM && !CM.isUnIndexed && (QM.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), rM.is32Bits && QM.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (yM = yM.slice(), lM = lM.slice(), EM = EM.slice(), JM = this.customShaderNameResolve(this.name, yM, lM, EM, QM, zM));
        const eM = OM ? iM._getDrawWrapper(void 0, !0) : this._drawWrapper,
          bM = eM?.effect ?? null,
          wM = eM?.defines ?? null,
          tM = QM.join("\n");
        let gM = bM;
        return wM !== tM && (gM = PM.createEffect(JM, {
          attributes: zM,
          uniformsNames: yM,
          uniformBuffersNames: lM,
          samplers: EM,
          defines: tM,
          fallbacks: LM,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: UM
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, PM), OM ? iM.setEffect(gM, tM, this._materialContext) : eM && eM.setEffect(gM, tM), this._onEffectCreatedObservable && (dM.effect = gM, dM.subMesh = iM ?? MM?.iG[0] ?? null, this._onEffectCreatedObservable.notifyObservers(dM))), eM._wasPreviouslyUsingInstances = !!rM, !!gM?.isReady() && (bM !== gM && jM.resetCachedMaterial(), eM._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(MM, rM) {
        const iM = rM ?? this.getEffect();
        if (!iM) return;
        const OM = this._options.uniforms; - 1 !== OM.indexOf("world") && iM.setMatrix("world", MM);
        const SM = this.Hk(); - 1 !== OM.indexOf("worldView") && (MM.multiplyToRef(SM.getViewMatrix(), this._cachedWorldViewMatrix), iM.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== OM.indexOf("worldViewProjection") && (MM.multiplyToRef(SM.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), iM.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== OM.indexOf("view") && iM.setMatrix("view", SM.getViewMatrix())
      }
      bindForSubMesh(MM, rM, iM) {
        this.bind(MM, rM, iM._drawWrapperOverride?.effect, iM)
      }
      bind(MM, rM, iM, OM) {
        const SM = OM && this._storeEffectOnSubMeshes,
          jM = iM ?? (SM ? OM.effect : this.getEffect());
        if (!jM) return;
        const aM = this.Hk();
        this._activeEffect = jM, this.bindOnlyWorldMatrix(MM, iM);
        const PM = this._options.uniformBuffers;
        let nM = !1;
        if (jM && PM && PM.length > 0 && aM.ph().supportsUniformBuffers)
          for (let zM = 0; zM < PM.length; ++zM) {
            switch (PM[zM]) {
              case "Mesh":
                rM && (rM.getMeshUniformBuffer().bindToEffect(jM, "Mesh"), rM.transferToEffect(MM));
                break;
              case "Scene":
                (0, HM.v)(jM, aM.getSceneUniformBuffer()), aM.finalizeSceneUbo(), nM = !0
            }
          }
        const QM = rM && SM ? this._mustRebind(aM, jM, OM, rM.visibility) : aM.getCachedMaterial() !== this;
        if (jM && QM) {
          let MM;
          for (MM in nM || -1 === this._options.uniforms.indexOf("view") || jM.setMatrix("view", aM.getViewMatrix()), nM || -1 === this._options.uniforms.indexOf("projection") || jM.setMatrix("projection", aM.getProjectionMatrix()), nM || -1 === this._options.uniforms.indexOf("viewProjection") || (jM.setMatrix("viewProjection", aM.getTransformMatrix()), this._multiview && jM.setMatrix("viewProjectionR", aM._transformMatrixR)), aM.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && jM.setVector3("cameraPosition", aM.activeCamera.globalPosition), (0, HM.d)(rM, jM), (0, mM.e)(jM, this, aM), this._vertexPullingMetadata && (0, hM.d)(jM, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, HM.q)(SM ? OM.materialDefines : jM.defines, jM, aM), rM && (0, HM.g)(aM, rM, jM), this._textures) jM.setTexture(MM, this._textures[MM]);
          for (MM in this._internalTextures) jM._bindTexture(MM, this._internalTextures[MM]);
          for (MM in this._textureArrays) jM.setTextureArray(MM, this._textureArrays[MM]);
          for (MM in this._ints) jM.setInt(MM, this._ints[MM]);
          for (MM in this._uints) jM.setUInt(MM, this._uints[MM]);
          for (MM in this._floats) jM.setFloat(MM, this._floats[MM]);
          for (MM in this._floatsArrays) jM.setArray(MM, this._floatsArrays[MM]);
          for (MM in this._colors3) jM.setColor3(MM, this._colors3[MM]);
          for (MM in this._colors3Arrays) jM.setArray3(MM, this._colors3Arrays[MM]);
          for (MM in this._colors4) {
            const rM = this._colors4[MM];
            jM.setFloat4(MM, rM.r, rM.g, rM.b, rM.a)
          }
          for (MM in this._colors4Arrays) jM.setArray4(MM, this._colors4Arrays[MM]);
          for (MM in this._vectors2) jM.setVector2(MM, this._vectors2[MM]);
          for (MM in this._vectors3) jM.setVector3(MM, this._vectors3[MM]);
          for (MM in this._vectors4) jM.setVector4(MM, this._vectors4[MM]);
          for (MM in this._quaternions) jM.setQuaternion(MM, this._quaternions[MM]);
          for (MM in this._matrices) jM.setMatrix(MM, this._matrices[MM]);
          for (MM in this._matrixArrays) jM.setMatrices(MM, this._matrixArrays[MM]);
          for (MM in this._matrices3x3) jM.setMatrix3x3(MM, this._matrices3x3[MM]);
          for (MM in this._matrices2x2) jM.setMatrix2x2(MM, this._matrices2x2[MM]);
          for (MM in this._vectors2Arrays) jM.setArray2(MM, this._vectors2Arrays[MM]);
          for (MM in this._vectors3Arrays) jM.setArray3(MM, this._vectors3Arrays[MM]);
          for (MM in this._vectors4Arrays) jM.setArray4(MM, this._vectors4Arrays[MM]);
          for (MM in this._quaternionsArrays) jM.setArray4(MM, this._quaternionsArrays[MM]);
          for (MM in this._uniformBuffers) {
            const rM = this._uniformBuffers[MM].getBuffer();
            rM && jM.bindUniformBuffer(rM, MM)
          }
          const iM = aM.ph(),
            PM = iM.setExternalTexture;
          if (PM)
            for (MM in this._externalTextures) PM.call(iM, MM, this._externalTextures[MM]);
          const QM = iM.setTextureSampler;
          if (QM)
            for (MM in this._textureSamplers) QM.call(iM, MM, this._textureSamplers[MM]);
          const zM = iM.setStorageBuffer;
          if (zM)
            for (MM in this._storageBuffers) zM.call(iM, MM, this._storageBuffers[MM])
        }
        if (jM && rM && (QM || !this.isFrozen)) {
          (0, HM.r)(rM, jM), rM.morphTargetManager && rM.morphTargetManager.isUsingTextureForTargets && rM.morphTargetManager._bind(jM);
          const MM = rM.bakedVertexAnimationManager;
          if (MM && MM.isEnabled) {
            const MM = SM ? OM._drawWrapper : this._drawWrapper;
            rM.bakedVertexAnimationManager?.bind(jM, !!MM._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(rM, jM, OM)
      }
      getActiveTextures() {
        const MM = super.getActiveTextures();
        for (const rM in this._textures) MM.push(this._textures[rM]);
        for (const rM in this._textureArrays) {
          const iM = this._textureArrays[rM];
          for (let rM = 0; rM < iM.length; rM++) MM.push(iM[rM])
        }
        return MM
      }
      hasTexture(MM) {
        if (super.hasTexture(MM)) return !0;
        for (const iM in this._textures)
          if (this._textures[iM] === MM) return !0;
        const rM = MM.getInternalTexture();
        for (const iM in this._internalTextures)
          if (this._internalTextures[iM] === rM) return !0;
        for (const iM in this._textureArrays) {
          const rM = this._textureArrays[iM];
          for (let iM = 0; iM < rM.length; iM++)
            if (rM[iM] === MM) return !0
        }
        return !1
      }
      clone(MM) {
        const rM = OM.b.Clone((() => new yM(MM, this.Hk(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        rM.name = MM, rM.id = MM, "object" === typeof rM._shaderPath && (rM._shaderPath = {
          ...rM._shaderPath
        }), this._options = {
          ...this._options
        };
        const iM = Object.keys(this._options);
        for (const OM of iM) {
          const MM = this._options[OM];
          Array.isArray(MM) && (this._options[OM] = MM.slice(0))
        }
        this.stencil.copyTo(rM.stencil);
        for (const OM in this._textures) rM.setTexture(OM, this._textures[OM]);
        for (const OM in this._internalTextures) rM.setInternalTexture(OM, this._internalTextures[OM]);
        for (const OM in this._textureArrays) rM.setTextureArray(OM, this._textureArrays[OM]);
        for (const OM in this._externalTextures) rM.setExternalTexture(OM, this._externalTextures[OM]);
        for (const OM in this._ints) rM.setInt(OM, this._ints[OM]);
        for (const OM in this._uints) rM.setUInt(OM, this._uints[OM]);
        for (const OM in this._floats) rM.setFloat(OM, this._floats[OM]);
        for (const OM in this._floatsArrays) rM.setFloats(OM, this._floatsArrays[OM]);
        for (const OM in this._colors3) rM.setColor3(OM, this._colors3[OM]);
        for (const OM in this._colors3Arrays) rM._colors3Arrays[OM] = this._colors3Arrays[OM];
        for (const OM in this._colors4) rM.setColor4(OM, this._colors4[OM]);
        for (const OM in this._colors4Arrays) rM._colors4Arrays[OM] = this._colors4Arrays[OM];
        for (const OM in this._vectors2) rM.setVector2(OM, this._vectors2[OM]);
        for (const OM in this._vectors3) rM.setVector3(OM, this._vectors3[OM]);
        for (const OM in this._vectors4) rM.setVector4(OM, this._vectors4[OM]);
        for (const OM in this._quaternions) rM.setQuaternion(OM, this._quaternions[OM]);
        for (const OM in this._quaternionsArrays) rM._quaternionsArrays[OM] = this._quaternionsArrays[OM];
        for (const OM in this._matrices) rM.setMatrix(OM, this._matrices[OM]);
        for (const OM in this._matrixArrays) rM._matrixArrays[OM] = this._matrixArrays[OM].slice();
        for (const OM in this._matrices3x3) rM.setMatrix3x3(OM, this._matrices3x3[OM]);
        for (const OM in this._matrices2x2) rM.setMatrix2x2(OM, this._matrices2x2[OM]);
        for (const OM in this._vectors2Arrays) rM.setArray2(OM, this._vectors2Arrays[OM]);
        for (const OM in this._vectors3Arrays) rM.setArray3(OM, this._vectors3Arrays[OM]);
        for (const OM in this._vectors4Arrays) rM.setArray4(OM, this._vectors4Arrays[OM]);
        for (const OM in this._uniformBuffers) rM.setUniformBuffer(OM, this._uniformBuffers[OM]);
        for (const OM in this._textureSamplers) rM.setTextureSampler(OM, this._textureSamplers[OM]);
        for (const OM in this._storageBuffers) rM.setStorageBuffer(OM, this._storageBuffers[OM]);
        return rM
      }
      dispose(MM, rM, iM) {
        if (rM) {
          let MM;
          for (MM in this._textures) this._textures[MM].dispose();
          for (MM in this._internalTextures) this._internalTextures[MM].dispose();
          for (MM in this._textureArrays) {
            const rM = this._textureArrays[MM];
            for (let MM = 0; MM < rM.length; MM++) rM[MM].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(MM, rM, iM)
      }
      serialize() {
        const MM = OM.b.Serialize(this);
        let rM;
        for (rM in MM.customType = "BABYLON.ShaderMaterial", MM.uniqueId = this.uniqueId, MM.options = this._options, MM.shaderPath = this._shaderPath, MM.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, MM.stencil = this.stencil.serialize(), MM.textures = {}, this._textures) MM.textures[rM] = this._textures[rM].serialize();
        for (rM in MM.textureArrays = {}, this._textureArrays) {
          MM.textureArrays[rM] = [];
          const iM = this._textureArrays[rM];
          for (let OM = 0; OM < iM.length; OM++) MM.textureArrays[rM].push(iM[OM].serialize())
        }
        for (rM in MM.ints = {}, this._ints) MM.ints[rM] = this._ints[rM];
        for (rM in MM.uints = {}, this._uints) MM.uints[rM] = this._uints[rM];
        for (rM in MM.floats = {}, this._floats) MM.floats[rM] = this._floats[rM];
        for (rM in MM.floatsArrays = {}, this._floatsArrays) MM.floatsArrays[rM] = this._floatsArrays[rM];
        for (rM in MM.colors3 = {}, this._colors3) {
          const iM = this._colors3[rM];
          MM.colors3[rM] = [iM.r, iM.g, iM.b]
        }
        for (rM in MM.colors3Arrays = {}, this._colors3Arrays) MM.colors3Arrays[rM] = this._colors3Arrays[rM];
        for (rM in MM.colors4 = {}, this._colors4) {
          const iM = this._colors4[rM];
          MM.colors4[rM] = [iM.r, iM.g, iM.b, iM.a]
        }
        for (rM in MM.colors4Arrays = {}, this._colors4Arrays) MM.colors4Arrays[rM] = this._colors4Arrays[rM];
        for (rM in MM.vectors2 = {}, this._vectors2) {
          const iM = this._vectors2[rM];
          MM.vectors2[rM] = [iM.x, iM.y]
        }
        for (rM in MM.vectors3 = {}, this._vectors3) {
          const iM = this._vectors3[rM];
          MM.vectors3[rM] = [iM.x, iM.y, iM.z]
        }
        for (rM in MM.vectors4 = {}, this._vectors4) {
          const iM = this._vectors4[rM];
          MM.vectors4[rM] = [iM.x, iM.y, iM.z, iM.w]
        }
        for (rM in MM.quaternions = {}, this._quaternions) MM.quaternions[rM] = this._quaternions[rM].HOM();
        for (rM in MM.matrices = {}, this._matrices) MM.matrices[rM] = this._matrices[rM].HOM();
        for (rM in MM.matrixArray = {}, this._matrixArrays) MM.matrixArray[rM] = this._matrixArrays[rM];
        for (rM in MM.matrices3x3 = {}, this._matrices3x3) MM.matrices3x3[rM] = this._matrices3x3[rM];
        for (rM in MM.matrices2x2 = {}, this._matrices2x2) MM.matrices2x2[rM] = this._matrices2x2[rM];
        for (rM in MM.vectors2Arrays = {}, this._vectors2Arrays) MM.vectors2Arrays[rM] = this._vectors2Arrays[rM];
        for (rM in MM.vectors3Arrays = {}, this._vectors3Arrays) MM.vectors3Arrays[rM] = this._vectors3Arrays[rM];
        for (rM in MM.vectors4Arrays = {}, this._vectors4Arrays) MM.vectors4Arrays[rM] = this._vectors4Arrays[rM];
        for (rM in MM.quaternionsArrays = {}, this._quaternionsArrays) MM.quaternionsArrays[rM] = this._quaternionsArrays[rM];
        return MM
      }
    }

    function lM(MM, rM, iM) {
      const SM = OM.b.Parse((() => new yM(MM.name, rM, MM.shaderPath, MM.options, MM.storeEffectOnSubMeshes)), MM, rM, iM);
      let aM;
      for (aM in MM.stencil && SM.stencil.parse(MM.stencil, rM, iM), MM.textures) SM.setTexture(aM, PM.h.Parse(MM.textures[aM], rM, iM));
      for (aM in MM.textureArrays) {
        const OM = MM.textureArrays[aM],
          jM = [];
        for (let MM = 0; MM < OM.length; MM++) jM.push(PM.h.Parse(OM[MM], rM, iM));
        SM.setTextureArray(aM, jM)
      }
      for (aM in MM.ints) SM.setInt(aM, MM.ints[aM]);
      for (aM in MM.uints) SM.setUInt(aM, MM.uints[aM]);
      for (aM in MM.floats) SM.setFloat(aM, MM.floats[aM]);
      for (aM in MM.floatsArrays) SM.setFloats(aM, MM.floatsArrays[aM]);
      for (aM in MM.colors3) {
        const rM = MM.colors3[aM];
        SM.setColor3(aM, {
          r: rM[0],
          g: rM[1],
          b: rM[2]
        })
      }
      for (aM in MM.colors3Arrays) {
        const rM = MM.colors3Arrays[aM].reduce(((MM, rM, iM) => (iM % 3 === 0 ? MM.push([rM]) : MM[MM.length - 1].push(rM), MM)), []).map((MM => ({
          r: MM[0],
          g: MM[1],
          b: MM[2]
        })));
        SM.setColor3Array(aM, rM)
      }
      for (aM in MM.colors4) {
        const rM = MM.colors4[aM];
        SM.setColor4(aM, {
          r: rM[0],
          g: rM[1],
          b: rM[2],
          a: rM[3]
        })
      }
      for (aM in MM.colors4Arrays) {
        const rM = MM.colors4Arrays[aM].reduce(((MM, rM, iM) => (iM % 4 === 0 ? MM.push([rM]) : MM[MM.length - 1].push(rM), MM)), []).map((MM => ({
          r: MM[0],
          g: MM[1],
          b: MM[2],
          a: MM[3]
        })));
        SM.setColor4Array(aM, rM)
      }
      for (aM in MM.vectors2) {
        const rM = MM.vectors2[aM];
        SM.setVector2(aM, {
          x: rM[0],
          y: rM[1]
        })
      }
      for (aM in MM.vectors3) {
        const rM = MM.vectors3[aM];
        SM.setVector3(aM, {
          x: rM[0],
          y: rM[1],
          z: rM[2]
        })
      }
      for (aM in MM.vectors4) {
        const rM = MM.vectors4[aM];
        SM.setVector4(aM, {
          x: rM[0],
          y: rM[1],
          z: rM[2],
          w: rM[3]
        })
      }
      for (aM in MM.quaternions) SM.setQuaternion(aM, jM.h.FromArray(MM.quaternions[aM]));
      for (aM in MM.matrices) SM.setMatrix(aM, jM.d.FromArray(MM.matrices[aM]));
      const nM = SM;
      for (aM in MM.matrixArray) nM._matrixArrays[aM] = new Float32Array(MM.matrixArray[aM]);
      for (aM in MM.matrices3x3) SM.setMatrix3x3(aM, MM.matrices3x3[aM]);
      for (aM in MM.matrices2x2) SM.setMatrix2x2(aM, MM.matrices2x2[aM]);
      for (aM in MM.vectors2Arrays) SM.setArray2(aM, MM.vectors2Arrays[aM]);
      for (aM in MM.vectors3Arrays) SM.setArray3(aM, MM.vectors3Arrays[aM]);
      for (aM in MM.vectors4Arrays) SM.setArray4(aM, MM.vectors4Arrays[aM]);
      for (aM in MM.quaternionsArrays) SM.setArray4(aM, MM.quaternionsArrays[aM]);
      return SM
    }
    async function EM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((SM, jM) => {
        const aM = new QM.e;
        aM.addEventListener("readystatechange", (() => {
          if (4 == aM.readyState)
            if (200 == aM.status) {
              const rM = lM(JSON.parse(aM.responseText), iM || LM.c.LastCreatedScene, OM);
              MM && (rM.name = MM), SM(rM)
            } else jM("Unable to load the ShaderMaterial")
        })), aM.open("GET", rM), aM.send()
      }))
    }
    async function UM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const OM = this?.SnippetUrl ?? yM.SnippetUrl;
      return await new Promise(((SM, jM) => {
        const aM = new QM.e;
        aM.addEventListener("readystatechange", (() => {
          if (4 == aM.readyState)
            if (200 == aM.status) {
              const OM = JSON.parse(JSON.parse(aM.responseText).jsonPayload),
                jM = lM(JSON.parse(OM.shaderMaterial), rM || LM.c.LastCreatedScene, iM);
              jM.snippetId = MM, SM(jM)
            } else jM("Unable to load the snippet " + MM)
        })), aM.open("GET", OM + "/" + MM.replace(/#/g, "/")), aM.send()
      }))
    }
    yM.SnippetUrl = "https://snippet.babylonjs.com";
    const GM = UM;
    let CM = !1;

    function eM() {
      CM || (CM = !0, yM.Parse = lM, yM.ParseFromFileAsync = EM, yM.ParseFromSnippetAsync = UM, yM.CreateFromSnippetAsync = GM, (0, JM.e)("BABYLON.ShaderMaterial", yM))
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);