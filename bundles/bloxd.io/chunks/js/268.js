export const id = 268;
export const ids = [268];
export const modules = {
  40514: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => sB,
      d: () => CB,
      h: () => WB,
      i: () => dB,
      k: () => UB,
      n: () => yB
    });
    var TB = ZB(40085),
      JB = ZB(40148),
      oB = ZB(37120),
      GB = ZB(40188),
      vB = ZB(40521),
      kB = ZB(40395),
      cB = ZB(40118),
      nB = ZB(40390),
      hB = ZB(37147),
      zB = ZB(40380),
      FB = ZB(40371),
      NB = ZB(40416),
      gB = ZB(37170);
    const qB = {
      effect: null,
      subMesh: null
    };
    class yB extends nB.b {
      constructor(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(BB, IB, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new oB.b, this._cachedWorldViewProjectionMatrix = new oB.b, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = ZB, this._options = {
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
          ...TB
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(BB) {
        this._shaderPath = BB
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
      _checkUniform(BB) {
        -1 === this._options.uniforms.indexOf(BB) && this._options.uniforms.push(BB)
      }
      setTexture(BB, IB) {
        return -1 === this._options.samplers.indexOf(BB) && this._options.samplers.push(BB), this._textures[BB] = IB, this
      }
      setInternalTexture(BB, IB) {
        return -1 === this._options.samplers.indexOf(BB) && this._options.samplers.push(BB), this._internalTextures[BB] = IB, this
      }
      removeTexture(BB) {
        delete this._textures[BB]
      }
      setTextureArray(BB, IB) {
        return -1 === this._options.samplers.indexOf(BB) && this._options.samplers.push(BB), this._checkUniform(BB), this._textureArrays[BB] = IB, this
      }
      setExternalTexture(BB, IB) {
        return -1 === this._options.externalTextures.indexOf(BB) && this._options.externalTextures.push(BB), this._externalTextures[BB] = IB, this
      }
      setFloat(BB, IB) {
        return this._checkUniform(BB), this._floats[BB] = IB, this
      }
      setInt(BB, IB) {
        return this._checkUniform(BB), this._ints[BB] = IB, this
      }
      setUInt(BB, IB) {
        return this._checkUniform(BB), this._uints[BB] = IB, this
      }
      setFloats(BB, IB) {
        return this._checkUniform(BB), this._floatsArrays[BB] = IB, this
      }
      setColor3(BB, IB) {
        return this._checkUniform(BB), this._colors3[BB] = IB, this
      }
      setColor3Array(BB, IB) {
        return this._checkUniform(BB), this._colors3Arrays[BB] = IB.reduce(((BB, IB) => (BB.push(IB.r, IB.g, IB.b), BB)), []), this
      }
      setColor4(BB, IB) {
        return this._checkUniform(BB), this._colors4[BB] = IB, this
      }
      setColor4Array(BB, IB) {
        return this._checkUniform(BB), this._colors4Arrays[BB] = IB.reduce(((BB, IB) => (BB.push(IB.r, IB.g, IB.b, IB.a), BB)), []), this
      }
      setVector2(BB, IB) {
        return this._checkUniform(BB), this._vectors2[BB] = IB, this
      }
      setVector3(BB, IB) {
        return this._checkUniform(BB), this._vectors3[BB] = IB, this
      }
      setVector4(BB, IB) {
        return this._checkUniform(BB), this._vectors4[BB] = IB, this
      }
      setQuaternion(BB, IB) {
        return this._checkUniform(BB), this._quaternions[BB] = IB, this
      }
      setQuaternionArray(BB, IB) {
        return this._checkUniform(BB), this._quaternionsArrays[BB] = IB.reduce(((BB, IB) => (IB.toArray(BB, BB.length), BB)), []), this
      }
      setMatrix(BB, IB) {
        return this._checkUniform(BB), this._matrices[BB] = IB, this
      }
      setMatrices(BB, IB) {
        this._checkUniform(BB);
        const ZB = new Float32Array(16 * IB.length);
        for (let TB = 0; TB < IB.length; TB++) {
          IB[TB].copyToArray(ZB, 16 * TB)
        }
        return this._matrixArrays[BB] = ZB, this
      }
      setMatrix3x3(BB, IB) {
        return this._checkUniform(BB), this._matrices3x3[BB] = IB, this
      }
      setMatrix2x2(BB, IB) {
        return this._checkUniform(BB), this._matrices2x2[BB] = IB, this
      }
      setArray2(BB, IB) {
        return this._checkUniform(BB), this._vectors2Arrays[BB] = IB, this
      }
      setArray3(BB, IB) {
        return this._checkUniform(BB), this._vectors3Arrays[BB] = IB, this
      }
      setArray4(BB, IB) {
        return this._checkUniform(BB), this._vectors4Arrays[BB] = IB, this
      }
      setUniformBuffer(BB, IB) {
        return -1 === this._options.uniformBuffers.indexOf(BB) && this._options.uniformBuffers.push(BB), this._uniformBuffers[BB] = IB, this
      }
      setTextureSampler(BB, IB) {
        return -1 === this._options.samplerObjects.indexOf(BB) && this._options.samplerObjects.push(BB), this._textureSamplers[BB] = IB, this
      }
      setStorageBuffer(BB, IB) {
        return -1 === this._options.storageBuffers.indexOf(BB) && this._options.storageBuffers.push(BB), this._storageBuffers[BB] = IB, this
      }
      setDefine(BB, IB) {
        const ZB = BB.trimEnd() + " ",
          TB = this.options.defines.findIndex((IB => IB === BB || IB.startsWith(ZB)));
        return TB >= 0 && this.options.defines.splice(TB, 1), ("boolean" !== typeof IB || IB) && this.options.defines.push(ZB + IB), this
      }
      isReadyForSubMesh(BB, IB, ZB) {
        return this.isReady(BB, ZB, IB)
      }
      isReady(BB, IB, ZB) {
        const TB = ZB && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const BB = TB ? ZB._drawWrapper : this._drawWrapper;
          if (BB.effect && BB._wasPreviouslyReady && BB._wasPreviouslyUsingInstances === IB) return !0
        }
        const oB = this.JR(),
          vB = oB.PN(),
          cB = [],
          nB = [];
        let hB = null,
          gB = this._shaderPath,
          yB = this._options.uniforms,
          UB = this._options.uniformBuffers,
          WB = this._options.samplers;
        vB.getCaps().multiview && oB.activeCamera && oB.activeCamera.outputRenderTarget && oB.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, cB.push("#define MULTIVIEW"), -1 !== yB.indexOf("viewProjection") && -1 === yB.indexOf("viewProjectionR") && yB.push("viewProjectionR"));
        for (let JB = 0; JB < this._options.defines.length; JB++) {
          const BB = 0 === this._options.defines[JB].indexOf("#define") ? this._options.defines[JB] : `#define ${this._options.defines[JB]}`;
          cB.push(BB)
        }
        for (let JB = 0; JB < this._options.attributes.length; JB++) nB.push(this._options.attributes[JB]);
        if (BB && BB.isVerticesDataPresent(GB.i.ColorKind) && (-1 === nB.indexOf(GB.i.ColorKind) && nB.push(GB.i.ColorKind), cB.push("#define VERTEXCOLOR")), IB && (cB.push("#define INSTANCES"), (0, FB.wb)(nB, this._materialHelperNeedsPreviousMatrices), BB?.hasThinInstances && (cB.push("#define THIN_INSTANCES"), BB && BB.isVerticesDataPresent(GB.i.ColorInstanceKind) && (nB.push(GB.i.ColorInstanceKind), cB.push("#define INSTANCESCOLOR")))), BB && BB.useBones && BB.computeBonesUsingShaders && BB.skeleton) {
          nB.push(GB.i.MatricesIndicesKind), nB.push(GB.i.MatricesWeightsKind), BB.numBoneInfluencers > 4 && (nB.push(GB.i.MatricesIndicesExtraKind), nB.push(GB.i.MatricesWeightsExtraKind));
          const IB = BB.skeleton;
          cB.push("#define NUM_BONE_INFLUENCERS " + BB.numBoneInfluencers), hB = new kB.e, hB.addCPUSkinningFallback(0, BB), IB.isUsingTextureForMatrices ? (cB.push("#define BONETEXTURE"), -1 === yB.indexOf("boneTextureInfo") && yB.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (cB.push("#define BonesPerMesh " + (IB.bones.length + 1)), -1 === yB.indexOf("mBones") && yB.push("mBones"))
        } else cB.push("#define NUM_BONE_INFLUENCERS 0");
        let dB = 0;
        const CB = BB ? BB.morphTargetManager : null;
        if (CB) {
          const IB = -1 !== cB.indexOf("#define UV1"),
            ZB = -1 !== cB.indexOf("#define UV2"),
            TB = -1 !== cB.indexOf("#define TANGENT"),
            JB = -1 !== cB.indexOf("#define NORMAL"),
            oB = -1 !== cB.indexOf("#define VERTEXCOLOR");
          dB = (0, FB.Q)(CB, cB, nB, BB, !0, JB, TB, IB, ZB, oB), CB.isUsingTextureForTargets && (-1 === yB.indexOf("morphTargetTextureIndices") && yB.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), dB > 0 && (yB = yB.slice(), yB.push("morphTargetInfluences"), yB.push("morphTargetCount"), yB.push("morphTargetTextureInfo"), yB.push("morphTargetTextureIndices"))
        } else cB.push("#define NUM_MORPH_INFLUENCERS 0");
        if (BB) {
          const ZB = BB.bakedVertexAnimationManager;
          ZB && ZB.isEnabled && (cB.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === yB.indexOf("bakedVertexAnimationSettings") && yB.push("bakedVertexAnimationSettings"), -1 === yB.indexOf("bakedVertexAnimationTextureSizeInverted") && yB.push("bakedVertexAnimationTextureSizeInverted"), -1 === yB.indexOf("bakedVertexAnimationTime") && yB.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), IB && nB.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const JB in this._textures)
          if (!this._textures[JB].isReady()) return !1;
        for (const JB in this._internalTextures)
          if (!this._internalTextures[JB].isReady) return !1;
        BB && this.needAlphaTestingForMesh(BB) && cB.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, zB.c)(yB), (0, zB.i)(this, oB, cB)), oB.fogEnabled && BB?.applyFog && oB.fogMode !== JB.e.FOGMODE_NONE && (cB.push("#define FOG"), -1 === yB.indexOf("view") && yB.push("view"), -1 === yB.indexOf("vFogInfos") && yB.push("vFogInfos"), -1 === yB.indexOf("vFogColor") && yB.push("vFogColor")), this._useLogarithmicDepth && (cB.push("#define LOGARITHMICDEPTH"), -1 === yB.indexOf("logarithmicDepthConstant") && yB.push("logarithmicDepthConstant"));
        const QB = ZB ? ZB.getRenderingMesh() : BB;
        if (QB && this.useVertexPulling) {
          const BB = QB.geometry;
          BB && (this._vertexPullingMetadata = (0, NB.d)(BB), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((BB, IB) => {
            yB.push(`vp_${IB}_info`)
          }))), cB.push("#define USE_VERTEX_PULLING");
          const IB = QB.geometry?.getIndexBuffer();
          IB && !QB.isUnIndexed && (cB.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), IB.is32Bits && cB.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (yB = yB.slice(), UB = UB.slice(), WB = WB.slice(), gB = this.customShaderNameResolve(this.name, yB, UB, WB, cB, nB));
        const sB = TB ? ZB._getDrawWrapper(void 0, !0) : this._drawWrapper,
          wB = sB?.effect ?? null,
          OB = sB?.defines ?? null,
          YB = cB.join("\n");
        let iB = wB;
        return OB !== YB && (iB = vB.createEffect(gB, {
          attributes: nB,
          uniformsNames: yB,
          uniformBuffersNames: UB,
          samplers: WB,
          defines: YB,
          fallbacks: hB,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: dB
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, vB), TB ? ZB.setEffect(iB, YB, this._materialContext) : sB && sB.setEffect(iB, YB), this._onEffectCreatedObservable && (qB.effect = iB, qB.subMesh = ZB ?? BB?.EW[0] ?? null, this._onEffectCreatedObservable.notifyObservers(qB))), sB._wasPreviouslyUsingInstances = !!IB, !!iB?.isReady() && (wB !== iB && oB.resetCachedMaterial(), sB._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(BB, IB) {
        const ZB = IB ?? this.getEffect();
        if (!ZB) return;
        const TB = this._options.uniforms; - 1 !== TB.indexOf("world") && ZB.setMatrix("world", BB);
        const JB = this.JR(); - 1 !== TB.indexOf("worldView") && (BB.multiplyToRef(JB.getViewMatrix(), this._cachedWorldViewMatrix), ZB.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== TB.indexOf("worldViewProjection") && (BB.multiplyToRef(JB.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), ZB.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== TB.indexOf("view") && ZB.setMatrix("view", JB.getViewMatrix())
      }
      bindForSubMesh(BB, IB, ZB) {
        this.bind(BB, IB, ZB._drawWrapperOverride?.effect, ZB)
      }
      bind(BB, IB, ZB, TB) {
        const JB = TB && this._storeEffectOnSubMeshes,
          oB = ZB ?? (JB ? TB.effect : this.getEffect());
        if (!oB) return;
        const GB = this.JR();
        this._activeEffect = oB, this.bindOnlyWorldMatrix(BB, ZB);
        const vB = this._options.uniformBuffers;
        let kB = !1;
        if (oB && vB && vB.length > 0 && GB.PN().supportsUniformBuffers)
          for (let nB = 0; nB < vB.length; ++nB) {
            switch (vB[nB]) {
              case "Mesh":
                IB && (IB.getMeshUniformBuffer().bindToEffect(oB, "Mesh"), IB.transferToEffect(BB));
                break;
              case "Scene":
                (0, FB.v)(oB, GB.getSceneUniformBuffer()), GB.finalizeSceneUbo(), kB = !0
            }
          }
        const cB = IB && JB ? this._mustRebind(GB, oB, TB, IB.visibility) : GB.getCachedMaterial() !== this;
        if (oB && cB) {
          let BB;
          for (BB in kB || -1 === this._options.uniforms.indexOf("view") || oB.setMatrix("view", GB.getViewMatrix()), kB || -1 === this._options.uniforms.indexOf("projection") || oB.setMatrix("projection", GB.getProjectionMatrix()), kB || -1 === this._options.uniforms.indexOf("viewProjection") || (oB.setMatrix("viewProjection", GB.getTransformMatrix()), this._multiview && oB.setMatrix("viewProjectionR", GB._transformMatrixR)), GB.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && oB.setVector3("cameraPosition", GB.activeCamera.globalPosition), (0, FB.e)(IB, oB), (0, zB.d)(oB, this, GB), this._vertexPullingMetadata && (0, NB.c)(oB, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, FB.s)(JB ? TB.materialDefines : oB.defines, oB, GB), IB && (0, FB.h)(GB, IB, oB), this._textures) oB.setTexture(BB, this._textures[BB]);
          for (BB in this._internalTextures) oB._bindTexture(BB, this._internalTextures[BB]);
          for (BB in this._textureArrays) oB.setTextureArray(BB, this._textureArrays[BB]);
          for (BB in this._ints) oB.setInt(BB, this._ints[BB]);
          for (BB in this._uints) oB.setUInt(BB, this._uints[BB]);
          for (BB in this._floats) oB.setFloat(BB, this._floats[BB]);
          for (BB in this._floatsArrays) oB.setArray(BB, this._floatsArrays[BB]);
          for (BB in this._colors3) oB.setColor3(BB, this._colors3[BB]);
          for (BB in this._colors3Arrays) oB.setArray3(BB, this._colors3Arrays[BB]);
          for (BB in this._colors4) {
            const IB = this._colors4[BB];
            oB.setFloat4(BB, IB.r, IB.g, IB.b, IB.a)
          }
          for (BB in this._colors4Arrays) oB.setArray4(BB, this._colors4Arrays[BB]);
          for (BB in this._vectors2) oB.setVector2(BB, this._vectors2[BB]);
          for (BB in this._vectors3) oB.setVector3(BB, this._vectors3[BB]);
          for (BB in this._vectors4) oB.setVector4(BB, this._vectors4[BB]);
          for (BB in this._quaternions) oB.setQuaternion(BB, this._quaternions[BB]);
          for (BB in this._matrices) oB.setMatrix(BB, this._matrices[BB]);
          for (BB in this._matrixArrays) oB.setMatrices(BB, this._matrixArrays[BB]);
          for (BB in this._matrices3x3) oB.setMatrix3x3(BB, this._matrices3x3[BB]);
          for (BB in this._matrices2x2) oB.setMatrix2x2(BB, this._matrices2x2[BB]);
          for (BB in this._vectors2Arrays) oB.setArray2(BB, this._vectors2Arrays[BB]);
          for (BB in this._vectors3Arrays) oB.setArray3(BB, this._vectors3Arrays[BB]);
          for (BB in this._vectors4Arrays) oB.setArray4(BB, this._vectors4Arrays[BB]);
          for (BB in this._quaternionsArrays) oB.setArray4(BB, this._quaternionsArrays[BB]);
          for (BB in this._uniformBuffers) {
            const IB = this._uniformBuffers[BB].getBuffer();
            IB && oB.bindUniformBuffer(IB, BB)
          }
          const ZB = GB.PN(),
            vB = ZB.setExternalTexture;
          if (vB)
            for (BB in this._externalTextures) vB.call(ZB, BB, this._externalTextures[BB]);
          const cB = ZB.setTextureSampler;
          if (cB)
            for (BB in this._textureSamplers) cB.call(ZB, BB, this._textureSamplers[BB]);
          const nB = ZB.setStorageBuffer;
          if (nB)
            for (BB in this._storageBuffers) nB.call(ZB, BB, this._storageBuffers[BB])
        }
        if (oB && IB && (cB || !this.isFrozen)) {
          (0, FB.t)(IB, oB), IB.morphTargetManager && IB.morphTargetManager.isUsingTextureForTargets && IB.morphTargetManager._bind(oB);
          const BB = IB.bakedVertexAnimationManager;
          if (BB && BB.isEnabled) {
            const BB = JB ? TB._drawWrapper : this._drawWrapper;
            IB.bakedVertexAnimationManager?.bind(oB, !!BB._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(IB, oB, TB)
      }
      getActiveTextures() {
        const BB = super.getActiveTextures();
        for (const IB in this._textures) BB.push(this._textures[IB]);
        for (const IB in this._textureArrays) {
          const ZB = this._textureArrays[IB];
          for (let IB = 0; IB < ZB.length; IB++) BB.push(ZB[IB])
        }
        return BB
      }
      hasTexture(BB) {
        if (super.hasTexture(BB)) return !0;
        for (const ZB in this._textures)
          if (this._textures[ZB] === BB) return !0;
        const IB = BB.getInternalTexture();
        for (const ZB in this._internalTextures)
          if (this._internalTextures[ZB] === IB) return !0;
        for (const ZB in this._textureArrays) {
          const IB = this._textureArrays[ZB];
          for (let ZB = 0; ZB < IB.length; ZB++)
            if (IB[ZB] === BB) return !0
        }
        return !1
      }
      clone(BB) {
        const IB = TB.b.Clone((() => new yB(BB, this.JR(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        IB.name = BB, IB.id = BB, "object" === typeof IB._shaderPath && (IB._shaderPath = {
          ...IB._shaderPath
        }), this._options = {
          ...this._options
        };
        const ZB = Object.keys(this._options);
        for (const TB of ZB) {
          const BB = this._options[TB];
          Array.isArray(BB) && (this._options[TB] = BB.slice(0))
        }
        this.stencil.copyTo(IB.stencil);
        for (const TB in this._textures) IB.setTexture(TB, this._textures[TB]);
        for (const TB in this._internalTextures) IB.setInternalTexture(TB, this._internalTextures[TB]);
        for (const TB in this._textureArrays) IB.setTextureArray(TB, this._textureArrays[TB]);
        for (const TB in this._externalTextures) IB.setExternalTexture(TB, this._externalTextures[TB]);
        for (const TB in this._ints) IB.setInt(TB, this._ints[TB]);
        for (const TB in this._uints) IB.setUInt(TB, this._uints[TB]);
        for (const TB in this._floats) IB.setFloat(TB, this._floats[TB]);
        for (const TB in this._floatsArrays) IB.setFloats(TB, this._floatsArrays[TB]);
        for (const TB in this._colors3) IB.setColor3(TB, this._colors3[TB]);
        for (const TB in this._colors3Arrays) IB._colors3Arrays[TB] = this._colors3Arrays[TB];
        for (const TB in this._colors4) IB.setColor4(TB, this._colors4[TB]);
        for (const TB in this._colors4Arrays) IB._colors4Arrays[TB] = this._colors4Arrays[TB];
        for (const TB in this._vectors2) IB.setVector2(TB, this._vectors2[TB]);
        for (const TB in this._vectors3) IB.setVector3(TB, this._vectors3[TB]);
        for (const TB in this._vectors4) IB.setVector4(TB, this._vectors4[TB]);
        for (const TB in this._quaternions) IB.setQuaternion(TB, this._quaternions[TB]);
        for (const TB in this._quaternionsArrays) IB._quaternionsArrays[TB] = this._quaternionsArrays[TB];
        for (const TB in this._matrices) IB.setMatrix(TB, this._matrices[TB]);
        for (const TB in this._matrixArrays) IB._matrixArrays[TB] = this._matrixArrays[TB].slice();
        for (const TB in this._matrices3x3) IB.setMatrix3x3(TB, this._matrices3x3[TB]);
        for (const TB in this._matrices2x2) IB.setMatrix2x2(TB, this._matrices2x2[TB]);
        for (const TB in this._vectors2Arrays) IB.setArray2(TB, this._vectors2Arrays[TB]);
        for (const TB in this._vectors3Arrays) IB.setArray3(TB, this._vectors3Arrays[TB]);
        for (const TB in this._vectors4Arrays) IB.setArray4(TB, this._vectors4Arrays[TB]);
        for (const TB in this._uniformBuffers) IB.setUniformBuffer(TB, this._uniformBuffers[TB]);
        for (const TB in this._textureSamplers) IB.setTextureSampler(TB, this._textureSamplers[TB]);
        for (const TB in this._storageBuffers) IB.setStorageBuffer(TB, this._storageBuffers[TB]);
        return IB
      }
      dispose(BB, IB, ZB) {
        if (IB) {
          let BB;
          for (BB in this._textures) this._textures[BB].dispose();
          for (BB in this._internalTextures) this._internalTextures[BB].dispose();
          for (BB in this._textureArrays) {
            const IB = this._textureArrays[BB];
            for (let BB = 0; BB < IB.length; BB++) IB[BB].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(BB, IB, ZB)
      }
      serialize() {
        const BB = TB.b.Serialize(this);
        let IB;
        for (IB in BB.customType = "BABYLON.ShaderMaterial", BB.uniqueId = this.uniqueId, BB.options = this._options, BB.shaderPath = this._shaderPath, BB.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, BB.stencil = this.stencil.serialize(), BB.textures = {}, this._textures) BB.textures[IB] = this._textures[IB].serialize();
        for (IB in BB.textureArrays = {}, this._textureArrays) {
          BB.textureArrays[IB] = [];
          const ZB = this._textureArrays[IB];
          for (let TB = 0; TB < ZB.length; TB++) BB.textureArrays[IB].push(ZB[TB].serialize())
        }
        for (IB in BB.ints = {}, this._ints) BB.ints[IB] = this._ints[IB];
        for (IB in BB.uints = {}, this._uints) BB.uints[IB] = this._uints[IB];
        for (IB in BB.floats = {}, this._floats) BB.floats[IB] = this._floats[IB];
        for (IB in BB.floatsArrays = {}, this._floatsArrays) BB.floatsArrays[IB] = this._floatsArrays[IB];
        for (IB in BB.colors3 = {}, this._colors3) {
          const ZB = this._colors3[IB];
          BB.colors3[IB] = [ZB.r, ZB.g, ZB.b]
        }
        for (IB in BB.colors3Arrays = {}, this._colors3Arrays) BB.colors3Arrays[IB] = this._colors3Arrays[IB];
        for (IB in BB.colors4 = {}, this._colors4) {
          const ZB = this._colors4[IB];
          BB.colors4[IB] = [ZB.r, ZB.g, ZB.b, ZB.a]
        }
        for (IB in BB.colors4Arrays = {}, this._colors4Arrays) BB.colors4Arrays[IB] = this._colors4Arrays[IB];
        for (IB in BB.vectors2 = {}, this._vectors2) {
          const ZB = this._vectors2[IB];
          BB.vectors2[IB] = [ZB.x, ZB.y]
        }
        for (IB in BB.vectors3 = {}, this._vectors3) {
          const ZB = this._vectors3[IB];
          BB.vectors3[IB] = [ZB.x, ZB.y, ZB.z]
        }
        for (IB in BB.vectors4 = {}, this._vectors4) {
          const ZB = this._vectors4[IB];
          BB.vectors4[IB] = [ZB.x, ZB.y, ZB.z, ZB.w]
        }
        for (IB in BB.quaternions = {}, this._quaternions) BB.quaternions[IB] = this._quaternions[IB].HTB();
        for (IB in BB.matrices = {}, this._matrices) BB.matrices[IB] = this._matrices[IB].HTB();
        for (IB in BB.matrixArray = {}, this._matrixArrays) BB.matrixArray[IB] = this._matrixArrays[IB];
        for (IB in BB.matrices3x3 = {}, this._matrices3x3) BB.matrices3x3[IB] = this._matrices3x3[IB];
        for (IB in BB.matrices2x2 = {}, this._matrices2x2) BB.matrices2x2[IB] = this._matrices2x2[IB];
        for (IB in BB.vectors2Arrays = {}, this._vectors2Arrays) BB.vectors2Arrays[IB] = this._vectors2Arrays[IB];
        for (IB in BB.vectors3Arrays = {}, this._vectors3Arrays) BB.vectors3Arrays[IB] = this._vectors3Arrays[IB];
        for (IB in BB.vectors4Arrays = {}, this._vectors4Arrays) BB.vectors4Arrays[IB] = this._vectors4Arrays[IB];
        for (IB in BB.quaternionsArrays = {}, this._quaternionsArrays) BB.quaternionsArrays[IB] = this._quaternionsArrays[IB];
        return BB
      }
    }

    function UB(BB, IB, ZB) {
      const JB = TB.b.Parse((() => new yB(BB.name, IB, BB.shaderPath, BB.options, BB.storeEffectOnSubMeshes)), BB, IB, ZB);
      let GB;
      for (GB in BB.stencil && JB.stencil.parse(BB.stencil, IB, ZB), BB.textures) JB.setTexture(GB, vB.e.Parse(BB.textures[GB], IB, ZB));
      for (GB in BB.textureArrays) {
        const TB = BB.textureArrays[GB],
          oB = [];
        for (let BB = 0; BB < TB.length; BB++) oB.push(vB.e.Parse(TB[BB], IB, ZB));
        JB.setTextureArray(GB, oB)
      }
      for (GB in BB.ints) JB.setInt(GB, BB.ints[GB]);
      for (GB in BB.uints) JB.setUInt(GB, BB.uints[GB]);
      for (GB in BB.floats) JB.setFloat(GB, BB.floats[GB]);
      for (GB in BB.floatsArrays) JB.setFloats(GB, BB.floatsArrays[GB]);
      for (GB in BB.colors3) {
        const IB = BB.colors3[GB];
        JB.setColor3(GB, {
          r: IB[0],
          g: IB[1],
          b: IB[2]
        })
      }
      for (GB in BB.colors3Arrays) {
        const IB = BB.colors3Arrays[GB].reduce(((BB, IB, ZB) => (ZB % 3 === 0 ? BB.push([IB]) : BB[BB.length - 1].push(IB), BB)), []).map((BB => ({
          r: BB[0],
          g: BB[1],
          b: BB[2]
        })));
        JB.setColor3Array(GB, IB)
      }
      for (GB in BB.colors4) {
        const IB = BB.colors4[GB];
        JB.setColor4(GB, {
          r: IB[0],
          g: IB[1],
          b: IB[2],
          a: IB[3]
        })
      }
      for (GB in BB.colors4Arrays) {
        const IB = BB.colors4Arrays[GB].reduce(((BB, IB, ZB) => (ZB % 4 === 0 ? BB.push([IB]) : BB[BB.length - 1].push(IB), BB)), []).map((BB => ({
          r: BB[0],
          g: BB[1],
          b: BB[2],
          a: BB[3]
        })));
        JB.setColor4Array(GB, IB)
      }
      for (GB in BB.vectors2) {
        const IB = BB.vectors2[GB];
        JB.setVector2(GB, {
          x: IB[0],
          y: IB[1]
        })
      }
      for (GB in BB.vectors3) {
        const IB = BB.vectors3[GB];
        JB.setVector3(GB, {
          x: IB[0],
          y: IB[1],
          z: IB[2]
        })
      }
      for (GB in BB.vectors4) {
        const IB = BB.vectors4[GB];
        JB.setVector4(GB, {
          x: IB[0],
          y: IB[1],
          z: IB[2],
          w: IB[3]
        })
      }
      for (GB in BB.quaternions) JB.setQuaternion(GB, oB.f.FromArray(BB.quaternions[GB]));
      for (GB in BB.matrices) JB.setMatrix(GB, oB.b.FromArray(BB.matrices[GB]));
      const kB = JB;
      for (GB in BB.matrixArray) kB._matrixArrays[GB] = new Float32Array(BB.matrixArray[GB]);
      for (GB in BB.matrices3x3) JB.setMatrix3x3(GB, BB.matrices3x3[GB]);
      for (GB in BB.matrices2x2) JB.setMatrix2x2(GB, BB.matrices2x2[GB]);
      for (GB in BB.vectors2Arrays) JB.setArray2(GB, BB.vectors2Arrays[GB]);
      for (GB in BB.vectors3Arrays) JB.setArray3(GB, BB.vectors3Arrays[GB]);
      for (GB in BB.vectors4Arrays) JB.setArray4(GB, BB.vectors4Arrays[GB]);
      for (GB in BB.quaternionsArrays) JB.setArray4(GB, BB.quaternionsArrays[GB]);
      return JB
    }
    async function WB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((JB, oB) => {
        const GB = new cB.d;
        GB.addEventListener("readystatechange", (() => {
          if (4 == GB.readyState)
            if (200 == GB.status) {
              const IB = UB(JSON.parse(GB.responseText), ZB || hB.e.LastCreatedScene, TB);
              BB && (IB.name = BB), JB(IB)
            } else oB("Unable to load the ShaderMaterial")
        })), GB.open("GET", IB), GB.send()
      }))
    }
    async function dB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const TB = this?.SnippetUrl ?? yB.SnippetUrl;
      return await new Promise(((JB, oB) => {
        const GB = new cB.d;
        GB.addEventListener("readystatechange", (() => {
          if (4 == GB.readyState)
            if (200 == GB.status) {
              const TB = JSON.parse(JSON.parse(GB.responseText).jsonPayload),
                oB = UB(JSON.parse(TB.shaderMaterial), IB || hB.e.LastCreatedScene, ZB);
              oB.snippetId = BB, JB(oB)
            } else oB("Unable to load the snippet " + BB)
        })), GB.open("GET", TB + "/" + BB.replace(/#/g, "/")), GB.send()
      }))
    }
    yB.SnippetUrl = "https://snippet.babylonjs.com";
    const CB = dB;
    let QB = !1;

    function sB() {
      QB || (QB = !0, yB.Parse = UB, yB.ParseFromFileAsync = WB, yB.ParseFromSnippetAsync = dB, yB.CreateFromSnippetAsync = CB, (0, gB.i)("BABYLON.ShaderMaterial", yB))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);