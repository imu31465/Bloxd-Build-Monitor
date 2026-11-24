export const id = 268;
export const ids = [268];
export const modules = {
  40576: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => MB,
      c: () => tB,
      f: () => LB,
      i: () => gB,
      k: () => GB,
      l: () => kB
    });
    var QB = zB(40086),
      nB = zB(40156),
      dB = zB(37171),
      IB = zB(40211),
      NB = zB(40580),
      uB = zB(40445),
      UB = zB(40110),
      aB = zB(40438),
      pB = zB(37197),
      rB = zB(40432),
      sB = zB(40428),
      JB = zB(40466),
      mB = zB(37222);
    const yB = {
      effect: null,
      subMesh: null
    };
    class kB extends aB.e {
      constructor(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(BB, jB, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new dB.c, this._cachedWorldViewProjectionMatrix = new dB.c, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = zB, this._options = {
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
          ...QB
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
      setTexture(BB, jB) {
        return -1 === this._options.samplers.indexOf(BB) && this._options.samplers.push(BB), this._textures[BB] = jB, this
      }
      setInternalTexture(BB, jB) {
        return -1 === this._options.samplers.indexOf(BB) && this._options.samplers.push(BB), this._internalTextures[BB] = jB, this
      }
      removeTexture(BB) {
        delete this._textures[BB]
      }
      setTextureArray(BB, jB) {
        return -1 === this._options.samplers.indexOf(BB) && this._options.samplers.push(BB), this._checkUniform(BB), this._textureArrays[BB] = jB, this
      }
      setExternalTexture(BB, jB) {
        return -1 === this._options.externalTextures.indexOf(BB) && this._options.externalTextures.push(BB), this._externalTextures[BB] = jB, this
      }
      setFloat(BB, jB) {
        return this._checkUniform(BB), this._floats[BB] = jB, this
      }
      setInt(BB, jB) {
        return this._checkUniform(BB), this._ints[BB] = jB, this
      }
      setUInt(BB, jB) {
        return this._checkUniform(BB), this._uints[BB] = jB, this
      }
      setFloats(BB, jB) {
        return this._checkUniform(BB), this._floatsArrays[BB] = jB, this
      }
      setColor3(BB, jB) {
        return this._checkUniform(BB), this._colors3[BB] = jB, this
      }
      setColor3Array(BB, jB) {
        return this._checkUniform(BB), this._colors3Arrays[BB] = jB.reduce(((BB, jB) => (BB.push(jB.r, jB.g, jB.b), BB)), []), this
      }
      setColor4(BB, jB) {
        return this._checkUniform(BB), this._colors4[BB] = jB, this
      }
      setColor4Array(BB, jB) {
        return this._checkUniform(BB), this._colors4Arrays[BB] = jB.reduce(((BB, jB) => (BB.push(jB.r, jB.g, jB.b, jB.a), BB)), []), this
      }
      setVector2(BB, jB) {
        return this._checkUniform(BB), this._vectors2[BB] = jB, this
      }
      setVector3(BB, jB) {
        return this._checkUniform(BB), this._vectors3[BB] = jB, this
      }
      setVector4(BB, jB) {
        return this._checkUniform(BB), this._vectors4[BB] = jB, this
      }
      setQuaternion(BB, jB) {
        return this._checkUniform(BB), this._quaternions[BB] = jB, this
      }
      setQuaternionArray(BB, jB) {
        return this._checkUniform(BB), this._quaternionsArrays[BB] = jB.reduce(((BB, jB) => (jB.toArray(BB, BB.length), BB)), []), this
      }
      setMatrix(BB, jB) {
        return this._checkUniform(BB), this._matrices[BB] = jB, this
      }
      setMatrices(BB, jB) {
        this._checkUniform(BB);
        const zB = new Float32Array(16 * jB.length);
        for (let QB = 0; QB < jB.length; QB++) {
          jB[QB].copyToArray(zB, 16 * QB)
        }
        return this._matrixArrays[BB] = zB, this
      }
      setMatrix3x3(BB, jB) {
        return this._checkUniform(BB), this._matrices3x3[BB] = jB, this
      }
      setMatrix2x2(BB, jB) {
        return this._checkUniform(BB), this._matrices2x2[BB] = jB, this
      }
      setArray2(BB, jB) {
        return this._checkUniform(BB), this._vectors2Arrays[BB] = jB, this
      }
      setArray3(BB, jB) {
        return this._checkUniform(BB), this._vectors3Arrays[BB] = jB, this
      }
      setArray4(BB, jB) {
        return this._checkUniform(BB), this._vectors4Arrays[BB] = jB, this
      }
      setUniformBuffer(BB, jB) {
        return -1 === this._options.uniformBuffers.indexOf(BB) && this._options.uniformBuffers.push(BB), this._uniformBuffers[BB] = jB, this
      }
      setTextureSampler(BB, jB) {
        return -1 === this._options.samplerObjects.indexOf(BB) && this._options.samplerObjects.push(BB), this._textureSamplers[BB] = jB, this
      }
      setStorageBuffer(BB, jB) {
        return -1 === this._options.storageBuffers.indexOf(BB) && this._options.storageBuffers.push(BB), this._storageBuffers[BB] = jB, this
      }
      setDefine(BB, jB) {
        const zB = BB.trimEnd() + " ",
          QB = this.options.defines.findIndex((jB => jB === BB || jB.startsWith(zB)));
        return QB >= 0 && this.options.defines.splice(QB, 1), ("boolean" !== typeof jB || jB) && this.options.defines.push(zB + jB), this
      }
      isReadyForSubMesh(BB, jB, zB) {
        return this.isReady(BB, zB, jB)
      }
      isReady(BB, jB, zB) {
        const QB = zB && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const BB = QB ? zB._drawWrapper : this._drawWrapper;
          if (BB.effect && BB._wasPreviouslyReady && BB._wasPreviouslyUsingInstances === jB) return !0
        }
        const dB = this.aY(),
          NB = dB.wJ(),
          UB = [],
          aB = [];
        let pB = null,
          mB = this._shaderPath,
          kB = this._options.uniforms,
          GB = this._options.uniformBuffers,
          LB = this._options.samplers;
        NB.getCaps().multiview && dB.activeCamera && dB.activeCamera.outputRenderTarget && dB.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, UB.push("#define MULTIVIEW"), -1 !== kB.indexOf("viewProjection") && -1 === kB.indexOf("viewProjectionR") && kB.push("viewProjectionR"));
        for (let nB = 0; nB < this._options.defines.length; nB++) {
          const BB = 0 === this._options.defines[nB].indexOf("#define") ? this._options.defines[nB] : `#define ${this._options.defines[nB]}`;
          UB.push(BB)
        }
        for (let nB = 0; nB < this._options.attributes.length; nB++) aB.push(this._options.attributes[nB]);
        if (BB && BB.isVerticesDataPresent(IB.l.ColorKind) && (-1 === aB.indexOf(IB.l.ColorKind) && aB.push(IB.l.ColorKind), UB.push("#define VERTEXCOLOR")), jB && (UB.push("#define INSTANCES"), (0, sB.xb)(aB, this._materialHelperNeedsPreviousMatrices), BB?.hasThinInstances && (UB.push("#define THIN_INSTANCES"), BB && BB.isVerticesDataPresent(IB.l.ColorInstanceKind) && (aB.push(IB.l.ColorInstanceKind), UB.push("#define INSTANCESCOLOR")))), BB && BB.useBones && BB.computeBonesUsingShaders && BB.skeleton) {
          aB.push(IB.l.MatricesIndicesKind), aB.push(IB.l.MatricesWeightsKind), BB.numBoneInfluencers > 4 && (aB.push(IB.l.MatricesIndicesExtraKind), aB.push(IB.l.MatricesWeightsExtraKind));
          const jB = BB.skeleton;
          UB.push("#define NUM_BONE_INFLUENCERS " + BB.numBoneInfluencers), pB = new uB.c, pB.addCPUSkinningFallback(0, BB), jB.isUsingTextureForMatrices ? (UB.push("#define BONETEXTURE"), -1 === kB.indexOf("boneTextureInfo") && kB.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (UB.push("#define BonesPerMesh " + (jB.bones.length + 1)), -1 === kB.indexOf("mBones") && kB.push("mBones"))
        } else UB.push("#define NUM_BONE_INFLUENCERS 0");
        let gB = 0;
        const tB = BB ? BB.morphTargetManager : null;
        if (tB) {
          const jB = -1 !== UB.indexOf("#define UV1"),
            zB = -1 !== UB.indexOf("#define UV2"),
            QB = -1 !== UB.indexOf("#define TANGENT"),
            nB = -1 !== UB.indexOf("#define NORMAL"),
            dB = -1 !== UB.indexOf("#define VERTEXCOLOR");
          gB = (0, sB.Q)(tB, UB, aB, BB, !0, nB, QB, jB, zB, dB), tB.isUsingTextureForTargets && (-1 === kB.indexOf("morphTargetTextureIndices") && kB.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), gB > 0 && (kB = kB.slice(), kB.push("morphTargetInfluences"), kB.push("morphTargetCount"), kB.push("morphTargetTextureInfo"), kB.push("morphTargetTextureIndices"))
        } else UB.push("#define NUM_MORPH_INFLUENCERS 0");
        if (BB) {
          const zB = BB.bakedVertexAnimationManager;
          zB && zB.isEnabled && (UB.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === kB.indexOf("bakedVertexAnimationSettings") && kB.push("bakedVertexAnimationSettings"), -1 === kB.indexOf("bakedVertexAnimationTextureSizeInverted") && kB.push("bakedVertexAnimationTextureSizeInverted"), -1 === kB.indexOf("bakedVertexAnimationTime") && kB.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), jB && aB.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const nB in this._textures)
          if (!this._textures[nB].isReady()) return !1;
        for (const nB in this._internalTextures)
          if (!this._internalTextures[nB].isReady) return !1;
        BB && this.needAlphaTestingForMesh(BB) && UB.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, rB.c)(kB), (0, rB.l)(this, dB, UB)), dB.fogEnabled && BB?.applyFog && dB.fogMode !== nB.g.FOGMODE_NONE && (UB.push("#define FOG"), -1 === kB.indexOf("view") && kB.push("view"), -1 === kB.indexOf("vFogInfos") && kB.push("vFogInfos"), -1 === kB.indexOf("vFogColor") && kB.push("vFogColor")), this._useLogarithmicDepth && (UB.push("#define LOGARITHMICDEPTH"), -1 === kB.indexOf("logarithmicDepthConstant") && kB.push("logarithmicDepthConstant"));
        const SB = zB ? zB.getRenderingMesh() : BB;
        if (SB && this.useVertexPulling) {
          const BB = SB.geometry;
          BB && (this._vertexPullingMetadata = (0, JB.d)(BB), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((BB, jB) => {
            kB.push(`vp_${jB}_info`)
          }))), UB.push("#define USE_VERTEX_PULLING");
          const jB = SB.geometry?.getIndexBuffer();
          jB && !SB.isUnIndexed && (UB.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), jB.is32Bits && UB.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (kB = kB.slice(), GB = GB.slice(), LB = LB.slice(), mB = this.customShaderNameResolve(this.name, kB, GB, LB, UB, aB));
        const MB = QB ? zB._getDrawWrapper(void 0, !0) : this._drawWrapper,
          EB = MB?.effect ?? null,
          iB = MB?.defines ?? null,
          qB = UB.join("\n");
        let fB = EB;
        return iB !== qB && (fB = NB.createEffect(mB, {
          attributes: aB,
          uniformsNames: kB,
          uniformBuffersNames: GB,
          samplers: LB,
          defines: qB,
          fallbacks: pB,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: gB
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, NB), QB ? zB.setEffect(fB, qB, this._materialContext) : MB && MB.setEffect(fB, qB), this._onEffectCreatedObservable && (yB.effect = fB, yB.subMesh = zB ?? BB?.cL[0] ?? null, this._onEffectCreatedObservable.notifyObservers(yB))), MB._wasPreviouslyUsingInstances = !!jB, !!fB?.isReady() && (EB !== fB && dB.resetCachedMaterial(), MB._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(BB, jB) {
        const zB = jB ?? this.getEffect();
        if (!zB) return;
        const QB = this._options.uniforms; - 1 !== QB.indexOf("world") && zB.setMatrix("world", BB);
        const nB = this.aY(); - 1 !== QB.indexOf("worldView") && (BB.multiplyToRef(nB.getViewMatrix(), this._cachedWorldViewMatrix), zB.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== QB.indexOf("worldViewProjection") && (BB.multiplyToRef(nB.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), zB.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== QB.indexOf("view") && zB.setMatrix("view", nB.getViewMatrix())
      }
      bindForSubMesh(BB, jB, zB) {
        this.bind(BB, jB, zB._drawWrapperOverride?.effect, zB)
      }
      bind(BB, jB, zB, QB) {
        const nB = QB && this._storeEffectOnSubMeshes,
          dB = zB ?? (nB ? QB.effect : this.getEffect());
        if (!dB) return;
        const IB = this.aY();
        this._activeEffect = dB, this.bindOnlyWorldMatrix(BB, zB);
        const NB = this._options.uniformBuffers;
        let uB = !1;
        if (dB && NB && NB.length > 0 && IB.wJ().supportsUniformBuffers)
          for (let aB = 0; aB < NB.length; ++aB) {
            switch (NB[aB]) {
              case "Mesh":
                jB && (jB.getMeshUniformBuffer().bindToEffect(dB, "Mesh"), jB.transferToEffect(BB));
                break;
              case "Scene":
                (0, sB.z)(dB, IB.getSceneUniformBuffer()), IB.finalizeSceneUbo(), uB = !0
            }
          }
        const UB = jB && nB ? this._mustRebind(IB, dB, QB, jB.visibility) : IB.getCachedMaterial() !== this;
        if (dB && UB) {
          let BB;
          for (BB in uB || -1 === this._options.uniforms.indexOf("view") || dB.setMatrix("view", IB.getViewMatrix()), uB || -1 === this._options.uniforms.indexOf("projection") || dB.setMatrix("projection", IB.getProjectionMatrix()), uB || -1 === this._options.uniforms.indexOf("viewProjection") || (dB.setMatrix("viewProjection", IB.getTransformMatrix()), this._multiview && dB.setMatrix("viewProjectionR", IB._transformMatrixR)), IB.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && dB.setVector3("cameraPosition", IB.activeCamera.globalPosition), (0, sB.f)(jB, dB), (0, rB.g)(dB, this, IB), this._vertexPullingMetadata && (0, JB.c)(dB, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, sB.x)(nB ? QB.materialDefines : dB.defines, dB, IB), jB && (0, sB.j)(IB, jB, dB), this._textures) dB.setTexture(BB, this._textures[BB]);
          for (BB in this._internalTextures) dB._bindTexture(BB, this._internalTextures[BB]);
          for (BB in this._textureArrays) dB.setTextureArray(BB, this._textureArrays[BB]);
          for (BB in this._ints) dB.setInt(BB, this._ints[BB]);
          for (BB in this._uints) dB.setUInt(BB, this._uints[BB]);
          for (BB in this._floats) dB.setFloat(BB, this._floats[BB]);
          for (BB in this._floatsArrays) dB.setArray(BB, this._floatsArrays[BB]);
          for (BB in this._colors3) dB.setColor3(BB, this._colors3[BB]);
          for (BB in this._colors3Arrays) dB.setArray3(BB, this._colors3Arrays[BB]);
          for (BB in this._colors4) {
            const jB = this._colors4[BB];
            dB.setFloat4(BB, jB.r, jB.g, jB.b, jB.a)
          }
          for (BB in this._colors4Arrays) dB.setArray4(BB, this._colors4Arrays[BB]);
          for (BB in this._vectors2) dB.setVector2(BB, this._vectors2[BB]);
          for (BB in this._vectors3) dB.setVector3(BB, this._vectors3[BB]);
          for (BB in this._vectors4) dB.setVector4(BB, this._vectors4[BB]);
          for (BB in this._quaternions) dB.setQuaternion(BB, this._quaternions[BB]);
          for (BB in this._matrices) dB.setMatrix(BB, this._matrices[BB]);
          for (BB in this._matrixArrays) dB.setMatrices(BB, this._matrixArrays[BB]);
          for (BB in this._matrices3x3) dB.setMatrix3x3(BB, this._matrices3x3[BB]);
          for (BB in this._matrices2x2) dB.setMatrix2x2(BB, this._matrices2x2[BB]);
          for (BB in this._vectors2Arrays) dB.setArray2(BB, this._vectors2Arrays[BB]);
          for (BB in this._vectors3Arrays) dB.setArray3(BB, this._vectors3Arrays[BB]);
          for (BB in this._vectors4Arrays) dB.setArray4(BB, this._vectors4Arrays[BB]);
          for (BB in this._quaternionsArrays) dB.setArray4(BB, this._quaternionsArrays[BB]);
          for (BB in this._uniformBuffers) {
            const jB = this._uniformBuffers[BB].getBuffer();
            jB && dB.bindUniformBuffer(jB, BB)
          }
          const zB = IB.wJ(),
            NB = zB.setExternalTexture;
          if (NB)
            for (BB in this._externalTextures) NB.call(zB, BB, this._externalTextures[BB]);
          const UB = zB.setTextureSampler;
          if (UB)
            for (BB in this._textureSamplers) UB.call(zB, BB, this._textureSamplers[BB]);
          const aB = zB.setStorageBuffer;
          if (aB)
            for (BB in this._storageBuffers) aB.call(zB, BB, this._storageBuffers[BB])
        }
        if (dB && jB && (UB || !this.isFrozen)) {
          (0, sB.y)(jB, dB), jB.morphTargetManager && jB.morphTargetManager.isUsingTextureForTargets && jB.morphTargetManager._bind(dB);
          const BB = jB.bakedVertexAnimationManager;
          if (BB && BB.isEnabled) {
            const BB = nB ? QB._drawWrapper : this._drawWrapper;
            jB.bakedVertexAnimationManager?.bind(dB, !!BB._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(jB, dB, QB)
      }
      getActiveTextures() {
        const BB = super.getActiveTextures();
        for (const jB in this._textures) BB.push(this._textures[jB]);
        for (const jB in this._textureArrays) {
          const zB = this._textureArrays[jB];
          for (let jB = 0; jB < zB.length; jB++) BB.push(zB[jB])
        }
        return BB
      }
      hasTexture(BB) {
        if (super.hasTexture(BB)) return !0;
        for (const zB in this._textures)
          if (this._textures[zB] === BB) return !0;
        const jB = BB.getInternalTexture();
        for (const zB in this._internalTextures)
          if (this._internalTextures[zB] === jB) return !0;
        for (const zB in this._textureArrays) {
          const jB = this._textureArrays[zB];
          for (let zB = 0; zB < jB.length; zB++)
            if (jB[zB] === BB) return !0
        }
        return !1
      }
      clone(BB) {
        const jB = QB.b.Clone((() => new kB(BB, this.aY(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        jB.name = BB, jB.id = BB, "object" === typeof jB._shaderPath && (jB._shaderPath = {
          ...jB._shaderPath
        }), this._options = {
          ...this._options
        };
        const zB = Object.keys(this._options);
        for (const QB of zB) {
          const BB = this._options[QB];
          Array.isArray(BB) && (this._options[QB] = BB.slice(0))
        }
        this.stencil.copyTo(jB.stencil);
        for (const QB in this._textures) jB.setTexture(QB, this._textures[QB]);
        for (const QB in this._internalTextures) jB.setInternalTexture(QB, this._internalTextures[QB]);
        for (const QB in this._textureArrays) jB.setTextureArray(QB, this._textureArrays[QB]);
        for (const QB in this._externalTextures) jB.setExternalTexture(QB, this._externalTextures[QB]);
        for (const QB in this._ints) jB.setInt(QB, this._ints[QB]);
        for (const QB in this._uints) jB.setUInt(QB, this._uints[QB]);
        for (const QB in this._floats) jB.setFloat(QB, this._floats[QB]);
        for (const QB in this._floatsArrays) jB.setFloats(QB, this._floatsArrays[QB]);
        for (const QB in this._colors3) jB.setColor3(QB, this._colors3[QB]);
        for (const QB in this._colors3Arrays) jB._colors3Arrays[QB] = this._colors3Arrays[QB];
        for (const QB in this._colors4) jB.setColor4(QB, this._colors4[QB]);
        for (const QB in this._colors4Arrays) jB._colors4Arrays[QB] = this._colors4Arrays[QB];
        for (const QB in this._vectors2) jB.setVector2(QB, this._vectors2[QB]);
        for (const QB in this._vectors3) jB.setVector3(QB, this._vectors3[QB]);
        for (const QB in this._vectors4) jB.setVector4(QB, this._vectors4[QB]);
        for (const QB in this._quaternions) jB.setQuaternion(QB, this._quaternions[QB]);
        for (const QB in this._quaternionsArrays) jB._quaternionsArrays[QB] = this._quaternionsArrays[QB];
        for (const QB in this._matrices) jB.setMatrix(QB, this._matrices[QB]);
        for (const QB in this._matrixArrays) jB._matrixArrays[QB] = this._matrixArrays[QB].slice();
        for (const QB in this._matrices3x3) jB.setMatrix3x3(QB, this._matrices3x3[QB]);
        for (const QB in this._matrices2x2) jB.setMatrix2x2(QB, this._matrices2x2[QB]);
        for (const QB in this._vectors2Arrays) jB.setArray2(QB, this._vectors2Arrays[QB]);
        for (const QB in this._vectors3Arrays) jB.setArray3(QB, this._vectors3Arrays[QB]);
        for (const QB in this._vectors4Arrays) jB.setArray4(QB, this._vectors4Arrays[QB]);
        for (const QB in this._uniformBuffers) jB.setUniformBuffer(QB, this._uniformBuffers[QB]);
        for (const QB in this._textureSamplers) jB.setTextureSampler(QB, this._textureSamplers[QB]);
        for (const QB in this._storageBuffers) jB.setStorageBuffer(QB, this._storageBuffers[QB]);
        return jB
      }
      dispose(BB, jB, zB) {
        if (jB) {
          let BB;
          for (BB in this._textures) this._textures[BB].dispose();
          for (BB in this._internalTextures) this._internalTextures[BB].dispose();
          for (BB in this._textureArrays) {
            const jB = this._textureArrays[BB];
            for (let BB = 0; BB < jB.length; BB++) jB[BB].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(BB, jB, zB)
      }
      serialize() {
        const BB = QB.b.Serialize(this);
        let jB;
        for (jB in BB.customType = "BABYLON.ShaderMaterial", BB.uniqueId = this.uniqueId, BB.options = this._options, BB.shaderPath = this._shaderPath, BB.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, BB.stencil = this.stencil.serialize(), BB.textures = {}, this._textures) BB.textures[jB] = this._textures[jB].serialize();
        for (jB in BB.textureArrays = {}, this._textureArrays) {
          BB.textureArrays[jB] = [];
          const zB = this._textureArrays[jB];
          for (let QB = 0; QB < zB.length; QB++) BB.textureArrays[jB].push(zB[QB].serialize())
        }
        for (jB in BB.ints = {}, this._ints) BB.ints[jB] = this._ints[jB];
        for (jB in BB.uints = {}, this._uints) BB.uints[jB] = this._uints[jB];
        for (jB in BB.floats = {}, this._floats) BB.floats[jB] = this._floats[jB];
        for (jB in BB.floatsArrays = {}, this._floatsArrays) BB.floatsArrays[jB] = this._floatsArrays[jB];
        for (jB in BB.colors3 = {}, this._colors3) {
          const zB = this._colors3[jB];
          BB.colors3[jB] = [zB.r, zB.g, zB.b]
        }
        for (jB in BB.colors3Arrays = {}, this._colors3Arrays) BB.colors3Arrays[jB] = this._colors3Arrays[jB];
        for (jB in BB.colors4 = {}, this._colors4) {
          const zB = this._colors4[jB];
          BB.colors4[jB] = [zB.r, zB.g, zB.b, zB.a]
        }
        for (jB in BB.colors4Arrays = {}, this._colors4Arrays) BB.colors4Arrays[jB] = this._colors4Arrays[jB];
        for (jB in BB.vectors2 = {}, this._vectors2) {
          const zB = this._vectors2[jB];
          BB.vectors2[jB] = [zB.x, zB.y]
        }
        for (jB in BB.vectors3 = {}, this._vectors3) {
          const zB = this._vectors3[jB];
          BB.vectors3[jB] = [zB.x, zB.y, zB.z]
        }
        for (jB in BB.vectors4 = {}, this._vectors4) {
          const zB = this._vectors4[jB];
          BB.vectors4[jB] = [zB.x, zB.y, zB.z, zB.w]
        }
        for (jB in BB.quaternions = {}, this._quaternions) BB.quaternions[jB] = this._quaternions[jB].nQB();
        for (jB in BB.matrices = {}, this._matrices) BB.matrices[jB] = this._matrices[jB].nQB();
        for (jB in BB.matrixArray = {}, this._matrixArrays) BB.matrixArray[jB] = this._matrixArrays[jB];
        for (jB in BB.matrices3x3 = {}, this._matrices3x3) BB.matrices3x3[jB] = this._matrices3x3[jB];
        for (jB in BB.matrices2x2 = {}, this._matrices2x2) BB.matrices2x2[jB] = this._matrices2x2[jB];
        for (jB in BB.vectors2Arrays = {}, this._vectors2Arrays) BB.vectors2Arrays[jB] = this._vectors2Arrays[jB];
        for (jB in BB.vectors3Arrays = {}, this._vectors3Arrays) BB.vectors3Arrays[jB] = this._vectors3Arrays[jB];
        for (jB in BB.vectors4Arrays = {}, this._vectors4Arrays) BB.vectors4Arrays[jB] = this._vectors4Arrays[jB];
        for (jB in BB.quaternionsArrays = {}, this._quaternionsArrays) BB.quaternionsArrays[jB] = this._quaternionsArrays[jB];
        return BB
      }
    }

    function GB(BB, jB, zB) {
      const nB = QB.b.Parse((() => new kB(BB.name, jB, BB.shaderPath, BB.options, BB.storeEffectOnSubMeshes)), BB, jB, zB);
      let IB;
      for (IB in BB.stencil && nB.stencil.parse(BB.stencil, jB, zB), BB.textures) nB.setTexture(IB, NB.i.Parse(BB.textures[IB], jB, zB));
      for (IB in BB.textureArrays) {
        const QB = BB.textureArrays[IB],
          dB = [];
        for (let BB = 0; BB < QB.length; BB++) dB.push(NB.i.Parse(QB[BB], jB, zB));
        nB.setTextureArray(IB, dB)
      }
      for (IB in BB.ints) nB.setInt(IB, BB.ints[IB]);
      for (IB in BB.uints) nB.setUInt(IB, BB.uints[IB]);
      for (IB in BB.floats) nB.setFloat(IB, BB.floats[IB]);
      for (IB in BB.floatsArrays) nB.setFloats(IB, BB.floatsArrays[IB]);
      for (IB in BB.colors3) {
        const jB = BB.colors3[IB];
        nB.setColor3(IB, {
          r: jB[0],
          g: jB[1],
          b: jB[2]
        })
      }
      for (IB in BB.colors3Arrays) {
        const jB = BB.colors3Arrays[IB].reduce(((BB, jB, zB) => (zB % 3 === 0 ? BB.push([jB]) : BB[BB.length - 1].push(jB), BB)), []).map((BB => ({
          r: BB[0],
          g: BB[1],
          b: BB[2]
        })));
        nB.setColor3Array(IB, jB)
      }
      for (IB in BB.colors4) {
        const jB = BB.colors4[IB];
        nB.setColor4(IB, {
          r: jB[0],
          g: jB[1],
          b: jB[2],
          a: jB[3]
        })
      }
      for (IB in BB.colors4Arrays) {
        const jB = BB.colors4Arrays[IB].reduce(((BB, jB, zB) => (zB % 4 === 0 ? BB.push([jB]) : BB[BB.length - 1].push(jB), BB)), []).map((BB => ({
          r: BB[0],
          g: BB[1],
          b: BB[2],
          a: BB[3]
        })));
        nB.setColor4Array(IB, jB)
      }
      for (IB in BB.vectors2) {
        const jB = BB.vectors2[IB];
        nB.setVector2(IB, {
          x: jB[0],
          y: jB[1]
        })
      }
      for (IB in BB.vectors3) {
        const jB = BB.vectors3[IB];
        nB.setVector3(IB, {
          x: jB[0],
          y: jB[1],
          z: jB[2]
        })
      }
      for (IB in BB.vectors4) {
        const jB = BB.vectors4[IB];
        nB.setVector4(IB, {
          x: jB[0],
          y: jB[1],
          z: jB[2],
          w: jB[3]
        })
      }
      for (IB in BB.quaternions) nB.setQuaternion(IB, dB.d.FromArray(BB.quaternions[IB]));
      for (IB in BB.matrices) nB.setMatrix(IB, dB.c.FromArray(BB.matrices[IB]));
      const uB = nB;
      for (IB in BB.matrixArray) uB._matrixArrays[IB] = new Float32Array(BB.matrixArray[IB]);
      for (IB in BB.matrices3x3) nB.setMatrix3x3(IB, BB.matrices3x3[IB]);
      for (IB in BB.matrices2x2) nB.setMatrix2x2(IB, BB.matrices2x2[IB]);
      for (IB in BB.vectors2Arrays) nB.setArray2(IB, BB.vectors2Arrays[IB]);
      for (IB in BB.vectors3Arrays) nB.setArray3(IB, BB.vectors3Arrays[IB]);
      for (IB in BB.vectors4Arrays) nB.setArray4(IB, BB.vectors4Arrays[IB]);
      for (IB in BB.quaternionsArrays) nB.setArray4(IB, BB.quaternionsArrays[IB]);
      return nB
    }
    async function LB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((nB, dB) => {
        const IB = new UB.b;
        IB.addEventListener("readystatechange", (() => {
          if (4 == IB.readyState)
            if (200 == IB.status) {
              const jB = GB(JSON.parse(IB.responseText), zB || pB.c.LastCreatedScene, QB);
              BB && (jB.name = BB), nB(jB)
            } else dB("Unable to load the ShaderMaterial")
        })), IB.open("GET", jB), IB.send()
      }))
    }
    async function gB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const QB = this?.SnippetUrl ?? kB.SnippetUrl;
      return await new Promise(((nB, dB) => {
        const IB = new UB.b;
        IB.addEventListener("readystatechange", (() => {
          if (4 == IB.readyState)
            if (200 == IB.status) {
              const QB = JSON.parse(JSON.parse(IB.responseText).jsonPayload),
                dB = GB(JSON.parse(QB.shaderMaterial), jB || pB.c.LastCreatedScene, zB);
              dB.snippetId = BB, nB(dB)
            } else dB("Unable to load the snippet " + BB)
        })), IB.open("GET", QB + "/" + BB.replace(/#/g, "/")), IB.send()
      }))
    }
    kB.SnippetUrl = "https://snippet.babylonjs.com";
    const tB = gB;
    let SB = !1;

    function MB() {
      SB || (SB = !0, kB.Parse = GB, kB.ParseFromFileAsync = LB, kB.ParseFromSnippetAsync = gB, kB.CreateFromSnippetAsync = tB, (0, mB.d)("BABYLON.ShaderMaterial", kB))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);