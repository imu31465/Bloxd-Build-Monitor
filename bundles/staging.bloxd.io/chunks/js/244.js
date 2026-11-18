export const id = 244;
export const ids = [244];
export const modules = {
  39216: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => fB,
      f: () => NB,
      i: () => mB,
      j: () => iB,
      k: () => vB,
      l: () => EB
    });
    var VB = dB(38772),
      yB = dB(38843),
      pB = dB(36126),
      lB = dB(38897),
      JB = dB(39218),
      YB = dB(39088),
      gB = dB(38799),
      oB = dB(39080),
      kB = dB(36148),
      LB = dB(39075),
      OB = dB(39073),
      DB = dB(39101),
      uB = dB(36166);
    const HB = {
      effect: null,
      subMesh: null
    };
    class EB extends oB.c {
      constructor(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(BB, TB, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new pB.b, this._cachedWorldViewProjectionMatrix = new pB.b, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = dB, this._options = {
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
          ...VB
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
      setTexture(BB, TB) {
        return -1 === this._options.samplers.indexOf(BB) && this._options.samplers.push(BB), this._textures[BB] = TB, this
      }
      setInternalTexture(BB, TB) {
        return -1 === this._options.samplers.indexOf(BB) && this._options.samplers.push(BB), this._internalTextures[BB] = TB, this
      }
      removeTexture(BB) {
        delete this._textures[BB]
      }
      setTextureArray(BB, TB) {
        return -1 === this._options.samplers.indexOf(BB) && this._options.samplers.push(BB), this._checkUniform(BB), this._textureArrays[BB] = TB, this
      }
      setExternalTexture(BB, TB) {
        return -1 === this._options.externalTextures.indexOf(BB) && this._options.externalTextures.push(BB), this._externalTextures[BB] = TB, this
      }
      setFloat(BB, TB) {
        return this._checkUniform(BB), this._floats[BB] = TB, this
      }
      setInt(BB, TB) {
        return this._checkUniform(BB), this._ints[BB] = TB, this
      }
      setUInt(BB, TB) {
        return this._checkUniform(BB), this._uints[BB] = TB, this
      }
      setFloats(BB, TB) {
        return this._checkUniform(BB), this._floatsArrays[BB] = TB, this
      }
      setColor3(BB, TB) {
        return this._checkUniform(BB), this._colors3[BB] = TB, this
      }
      setColor3Array(BB, TB) {
        return this._checkUniform(BB), this._colors3Arrays[BB] = TB.reduce(((BB, TB) => (BB.push(TB.r, TB.g, TB.b), BB)), []), this
      }
      setColor4(BB, TB) {
        return this._checkUniform(BB), this._colors4[BB] = TB, this
      }
      setColor4Array(BB, TB) {
        return this._checkUniform(BB), this._colors4Arrays[BB] = TB.reduce(((BB, TB) => (BB.push(TB.r, TB.g, TB.b, TB.a), BB)), []), this
      }
      setVector2(BB, TB) {
        return this._checkUniform(BB), this._vectors2[BB] = TB, this
      }
      setVector3(BB, TB) {
        return this._checkUniform(BB), this._vectors3[BB] = TB, this
      }
      setVector4(BB, TB) {
        return this._checkUniform(BB), this._vectors4[BB] = TB, this
      }
      setQuaternion(BB, TB) {
        return this._checkUniform(BB), this._quaternions[BB] = TB, this
      }
      setQuaternionArray(BB, TB) {
        return this._checkUniform(BB), this._quaternionsArrays[BB] = TB.reduce(((BB, TB) => (TB.toArray(BB, BB.length), BB)), []), this
      }
      setMatrix(BB, TB) {
        return this._checkUniform(BB), this._matrices[BB] = TB, this
      }
      setMatrices(BB, TB) {
        this._checkUniform(BB);
        const dB = new Float32Array(16 * TB.length);
        for (let VB = 0; VB < TB.length; VB++) {
          TB[VB].copyToArray(dB, 16 * VB)
        }
        return this._matrixArrays[BB] = dB, this
      }
      setMatrix3x3(BB, TB) {
        return this._checkUniform(BB), this._matrices3x3[BB] = TB, this
      }
      setMatrix2x2(BB, TB) {
        return this._checkUniform(BB), this._matrices2x2[BB] = TB, this
      }
      setArray2(BB, TB) {
        return this._checkUniform(BB), this._vectors2Arrays[BB] = TB, this
      }
      setArray3(BB, TB) {
        return this._checkUniform(BB), this._vectors3Arrays[BB] = TB, this
      }
      setArray4(BB, TB) {
        return this._checkUniform(BB), this._vectors4Arrays[BB] = TB, this
      }
      setUniformBuffer(BB, TB) {
        return -1 === this._options.uniformBuffers.indexOf(BB) && this._options.uniformBuffers.push(BB), this._uniformBuffers[BB] = TB, this
      }
      setTextureSampler(BB, TB) {
        return -1 === this._options.samplerObjects.indexOf(BB) && this._options.samplerObjects.push(BB), this._textureSamplers[BB] = TB, this
      }
      setStorageBuffer(BB, TB) {
        return -1 === this._options.storageBuffers.indexOf(BB) && this._options.storageBuffers.push(BB), this._storageBuffers[BB] = TB, this
      }
      setDefine(BB, TB) {
        const dB = BB.trimEnd() + " ",
          VB = this.options.defines.findIndex((TB => TB === BB || TB.startsWith(dB)));
        return VB >= 0 && this.options.defines.splice(VB, 1), ("boolean" !== typeof TB || TB) && this.options.defines.push(dB + TB), this
      }
      isReadyForSubMesh(BB, TB, dB) {
        return this.isReady(BB, dB, TB)
      }
      isReady(BB, TB, dB) {
        const VB = dB && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const BB = VB ? dB._drawWrapper : this._drawWrapper;
          if (BB.effect && BB._wasPreviouslyReady && BB._wasPreviouslyUsingInstances === TB) return !0
        }
        const pB = this.jU(),
          JB = pB.PD(),
          gB = [],
          oB = [];
        let kB = null,
          uB = this._shaderPath,
          EB = this._options.uniforms,
          vB = this._options.uniformBuffers,
          mB = this._options.samplers;
        JB.getCaps().multiview && pB.activeCamera && pB.activeCamera.outputRenderTarget && pB.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, gB.push("#define MULTIVIEW"), -1 !== EB.indexOf("viewProjection") && -1 === EB.indexOf("viewProjectionR") && EB.push("viewProjectionR"));
        for (let yB = 0; yB < this._options.defines.length; yB++) {
          const BB = 0 === this._options.defines[yB].indexOf("#define") ? this._options.defines[yB] : `#define ${this._options.defines[yB]}`;
          gB.push(BB)
        }
        for (let yB = 0; yB < this._options.attributes.length; yB++) oB.push(this._options.attributes[yB]);
        if (BB && BB.isVerticesDataPresent(lB.m.ColorKind) && (-1 === oB.indexOf(lB.m.ColorKind) && oB.push(lB.m.ColorKind), gB.push("#define VERTEXCOLOR")), TB && (gB.push("#define INSTANCES"), (0, OB.qb)(oB, this._materialHelperNeedsPreviousMatrices), BB?.hasThinInstances && (gB.push("#define THIN_INSTANCES"), BB && BB.isVerticesDataPresent(lB.m.ColorInstanceKind) && (oB.push(lB.m.ColorInstanceKind), gB.push("#define INSTANCESCOLOR")))), BB && BB.useBones && BB.computeBonesUsingShaders && BB.skeleton) {
          oB.push(lB.m.MatricesIndicesKind), oB.push(lB.m.MatricesWeightsKind), BB.numBoneInfluencers > 4 && (oB.push(lB.m.MatricesIndicesExtraKind), oB.push(lB.m.MatricesWeightsExtraKind));
          const TB = BB.skeleton;
          gB.push("#define NUM_BONE_INFLUENCERS " + BB.numBoneInfluencers), kB = new YB.d, kB.addCPUSkinningFallback(0, BB), TB.isUsingTextureForMatrices ? (gB.push("#define BONETEXTURE"), -1 === EB.indexOf("boneTextureInfo") && EB.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (gB.push("#define BonesPerMesh " + (TB.bones.length + 1)), -1 === EB.indexOf("mBones") && EB.push("mBones"))
        } else gB.push("#define NUM_BONE_INFLUENCERS 0");
        let iB = 0;
        const NB = BB ? BB.morphTargetManager : null;
        if (NB) {
          const TB = -1 !== gB.indexOf("#define UV1"),
            dB = -1 !== gB.indexOf("#define UV2"),
            VB = -1 !== gB.indexOf("#define TANGENT"),
            yB = -1 !== gB.indexOf("#define NORMAL"),
            pB = -1 !== gB.indexOf("#define VERTEXCOLOR");
          iB = (0, OB.H)(NB, gB, oB, BB, !0, yB, VB, TB, dB, pB), NB.isUsingTextureForTargets && (-1 === EB.indexOf("morphTargetTextureIndices") && EB.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), iB > 0 && (EB = EB.slice(), EB.push("morphTargetInfluences"), EB.push("morphTargetCount"), EB.push("morphTargetTextureInfo"), EB.push("morphTargetTextureIndices"))
        } else gB.push("#define NUM_MORPH_INFLUENCERS 0");
        if (BB) {
          const dB = BB.bakedVertexAnimationManager;
          dB && dB.isEnabled && (gB.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === EB.indexOf("bakedVertexAnimationSettings") && EB.push("bakedVertexAnimationSettings"), -1 === EB.indexOf("bakedVertexAnimationTextureSizeInverted") && EB.push("bakedVertexAnimationTextureSizeInverted"), -1 === EB.indexOf("bakedVertexAnimationTime") && EB.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), TB && oB.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const yB in this._textures)
          if (!this._textures[yB].isReady()) return !1;
        for (const yB in this._internalTextures)
          if (!this._internalTextures[yB].isReady) return !1;
        BB && this.needAlphaTestingForMesh(BB) && gB.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, LB.c)(EB), (0, LB.g)(this, pB, gB)), pB.fogEnabled && BB?.applyFog && pB.fogMode !== yB.g.FOGMODE_NONE && (gB.push("#define FOG"), -1 === EB.indexOf("view") && EB.push("view"), -1 === EB.indexOf("vFogInfos") && EB.push("vFogInfos"), -1 === EB.indexOf("vFogColor") && EB.push("vFogColor")), this._useLogarithmicDepth && (gB.push("#define LOGARITHMICDEPTH"), -1 === EB.indexOf("logarithmicDepthConstant") && EB.push("logarithmicDepthConstant"));
        const tB = dB ? dB.getRenderingMesh() : BB;
        if (tB && this.useVertexPulling) {
          const BB = tB.geometry;
          BB && (this._vertexPullingMetadata = (0, DB.e)(BB), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((BB, TB) => {
            EB.push(`vp_${TB}_info`)
          }))), gB.push("#define USE_VERTEX_PULLING");
          const TB = tB.geometry?.getIndexBuffer();
          TB && !tB.isUnIndexed && (gB.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), TB.is32Bits && gB.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (EB = EB.slice(), vB = vB.slice(), mB = mB.slice(), uB = this.customShaderNameResolve(this.name, EB, vB, mB, gB, oB));
        const fB = VB ? dB._getDrawWrapper(void 0, !0) : this._drawWrapper,
          sB = fB?.effect ?? null,
          MB = fB?.defines ?? null,
          zB = gB.join("\n");
        let wB = sB;
        return MB !== zB && (wB = JB.createEffect(uB, {
          attributes: oB,
          uniformsNames: EB,
          uniformBuffersNames: vB,
          samplers: mB,
          defines: zB,
          fallbacks: kB,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: iB
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, JB), VB ? dB.setEffect(wB, zB, this._materialContext) : fB && fB.setEffect(wB, zB), this._onEffectCreatedObservable && (HB.effect = wB, HB.subMesh = dB ?? BB?.oN[0] ?? null, this._onEffectCreatedObservable.notifyObservers(HB))), fB._wasPreviouslyUsingInstances = !!TB, !!wB?.isReady() && (sB !== wB && pB.resetCachedMaterial(), fB._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(BB, TB) {
        const dB = TB ?? this.getEffect();
        if (!dB) return;
        const VB = this._options.uniforms; - 1 !== VB.indexOf("world") && dB.setMatrix("world", BB);
        const yB = this.jU(); - 1 !== VB.indexOf("worldView") && (BB.multiplyToRef(yB.getViewMatrix(), this._cachedWorldViewMatrix), dB.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== VB.indexOf("worldViewProjection") && (BB.multiplyToRef(yB.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), dB.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== VB.indexOf("view") && dB.setMatrix("view", yB.getViewMatrix())
      }
      bindForSubMesh(BB, TB, dB) {
        this.bind(BB, TB, dB._drawWrapperOverride?.effect, dB)
      }
      bind(BB, TB, dB, VB) {
        const yB = VB && this._storeEffectOnSubMeshes,
          pB = dB ?? (yB ? VB.effect : this.getEffect());
        if (!pB) return;
        const lB = this.jU();
        this._activeEffect = pB, this.bindOnlyWorldMatrix(BB, dB);
        const JB = this._options.uniformBuffers;
        let YB = !1;
        if (pB && JB && JB.length > 0 && lB.PD().supportsUniformBuffers)
          for (let oB = 0; oB < JB.length; ++oB) {
            switch (JB[oB]) {
              case "Mesh":
                TB && (TB.getMeshUniformBuffer().bindToEffect(pB, "Mesh"), TB.transferToEffect(BB));
                break;
              case "Scene":
                (0, OB.r)(pB, lB.getSceneUniformBuffer()), lB.finalizeSceneUbo(), YB = !0
            }
          }
        const gB = TB && yB ? this._mustRebind(lB, pB, VB, TB.visibility) : lB.getCachedMaterial() !== this;
        if (pB && gB) {
          let BB;
          for (BB in YB || -1 === this._options.uniforms.indexOf("view") || pB.setMatrix("view", lB.getViewMatrix()), YB || -1 === this._options.uniforms.indexOf("projection") || pB.setMatrix("projection", lB.getProjectionMatrix()), YB || -1 === this._options.uniforms.indexOf("viewProjection") || (pB.setMatrix("viewProjection", lB.getTransformMatrix()), this._multiview && pB.setMatrix("viewProjectionR", lB._transformMatrixR)), lB.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && pB.setVector3("cameraPosition", lB.activeCamera.globalPosition), (0, OB.f)(TB, pB), (0, LB.d)(pB, this, lB), this._vertexPullingMetadata && (0, DB.b)(pB, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, OB.p)(yB ? VB.materialDefines : pB.defines, pB, lB), TB && (0, OB.h)(lB, TB, pB), this._textures) pB.setTexture(BB, this._textures[BB]);
          for (BB in this._internalTextures) pB._bindTexture(BB, this._internalTextures[BB]);
          for (BB in this._textureArrays) pB.setTextureArray(BB, this._textureArrays[BB]);
          for (BB in this._ints) pB.setInt(BB, this._ints[BB]);
          for (BB in this._uints) pB.setUInt(BB, this._uints[BB]);
          for (BB in this._floats) pB.setFloat(BB, this._floats[BB]);
          for (BB in this._floatsArrays) pB.setArray(BB, this._floatsArrays[BB]);
          for (BB in this._colors3) pB.setColor3(BB, this._colors3[BB]);
          for (BB in this._colors3Arrays) pB.setArray3(BB, this._colors3Arrays[BB]);
          for (BB in this._colors4) {
            const TB = this._colors4[BB];
            pB.setFloat4(BB, TB.r, TB.g, TB.b, TB.a)
          }
          for (BB in this._colors4Arrays) pB.setArray4(BB, this._colors4Arrays[BB]);
          for (BB in this._vectors2) pB.setVector2(BB, this._vectors2[BB]);
          for (BB in this._vectors3) pB.setVector3(BB, this._vectors3[BB]);
          for (BB in this._vectors4) pB.setVector4(BB, this._vectors4[BB]);
          for (BB in this._quaternions) pB.setQuaternion(BB, this._quaternions[BB]);
          for (BB in this._matrices) pB.setMatrix(BB, this._matrices[BB]);
          for (BB in this._matrixArrays) pB.setMatrices(BB, this._matrixArrays[BB]);
          for (BB in this._matrices3x3) pB.setMatrix3x3(BB, this._matrices3x3[BB]);
          for (BB in this._matrices2x2) pB.setMatrix2x2(BB, this._matrices2x2[BB]);
          for (BB in this._vectors2Arrays) pB.setArray2(BB, this._vectors2Arrays[BB]);
          for (BB in this._vectors3Arrays) pB.setArray3(BB, this._vectors3Arrays[BB]);
          for (BB in this._vectors4Arrays) pB.setArray4(BB, this._vectors4Arrays[BB]);
          for (BB in this._quaternionsArrays) pB.setArray4(BB, this._quaternionsArrays[BB]);
          for (BB in this._uniformBuffers) {
            const TB = this._uniformBuffers[BB].getBuffer();
            TB && pB.bindUniformBuffer(TB, BB)
          }
          const dB = lB.PD(),
            JB = dB.setExternalTexture;
          if (JB)
            for (BB in this._externalTextures) JB.call(dB, BB, this._externalTextures[BB]);
          const gB = dB.setTextureSampler;
          if (gB)
            for (BB in this._textureSamplers) gB.call(dB, BB, this._textureSamplers[BB]);
          const oB = dB.setStorageBuffer;
          if (oB)
            for (BB in this._storageBuffers) oB.call(dB, BB, this._storageBuffers[BB])
        }
        if (pB && TB && (gB || !this.isFrozen)) {
          (0, OB.q)(TB, pB), TB.morphTargetManager && TB.morphTargetManager.isUsingTextureForTargets && TB.morphTargetManager._bind(pB);
          const BB = TB.bakedVertexAnimationManager;
          if (BB && BB.isEnabled) {
            const BB = yB ? VB._drawWrapper : this._drawWrapper;
            TB.bakedVertexAnimationManager?.bind(pB, !!BB._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(TB, pB, VB)
      }
      getActiveTextures() {
        const BB = super.getActiveTextures();
        for (const TB in this._textures) BB.push(this._textures[TB]);
        for (const TB in this._textureArrays) {
          const dB = this._textureArrays[TB];
          for (let TB = 0; TB < dB.length; TB++) BB.push(dB[TB])
        }
        return BB
      }
      hasTexture(BB) {
        if (super.hasTexture(BB)) return !0;
        for (const dB in this._textures)
          if (this._textures[dB] === BB) return !0;
        const TB = BB.getInternalTexture();
        for (const dB in this._internalTextures)
          if (this._internalTextures[dB] === TB) return !0;
        for (const dB in this._textureArrays) {
          const TB = this._textureArrays[dB];
          for (let dB = 0; dB < TB.length; dB++)
            if (TB[dB] === BB) return !0
        }
        return !1
      }
      clone(BB) {
        const TB = VB.c.Clone((() => new EB(BB, this.jU(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        TB.name = BB, TB.id = BB, "object" === typeof TB._shaderPath && (TB._shaderPath = {
          ...TB._shaderPath
        }), this._options = {
          ...this._options
        };
        const dB = Object.keys(this._options);
        for (const VB of dB) {
          const BB = this._options[VB];
          Array.isArray(BB) && (this._options[VB] = BB.slice(0))
        }
        this.stencil.copyTo(TB.stencil);
        for (const VB in this._textures) TB.setTexture(VB, this._textures[VB]);
        for (const VB in this._internalTextures) TB.setInternalTexture(VB, this._internalTextures[VB]);
        for (const VB in this._textureArrays) TB.setTextureArray(VB, this._textureArrays[VB]);
        for (const VB in this._externalTextures) TB.setExternalTexture(VB, this._externalTextures[VB]);
        for (const VB in this._ints) TB.setInt(VB, this._ints[VB]);
        for (const VB in this._uints) TB.setUInt(VB, this._uints[VB]);
        for (const VB in this._floats) TB.setFloat(VB, this._floats[VB]);
        for (const VB in this._floatsArrays) TB.setFloats(VB, this._floatsArrays[VB]);
        for (const VB in this._colors3) TB.setColor3(VB, this._colors3[VB]);
        for (const VB in this._colors3Arrays) TB._colors3Arrays[VB] = this._colors3Arrays[VB];
        for (const VB in this._colors4) TB.setColor4(VB, this._colors4[VB]);
        for (const VB in this._colors4Arrays) TB._colors4Arrays[VB] = this._colors4Arrays[VB];
        for (const VB in this._vectors2) TB.setVector2(VB, this._vectors2[VB]);
        for (const VB in this._vectors3) TB.setVector3(VB, this._vectors3[VB]);
        for (const VB in this._vectors4) TB.setVector4(VB, this._vectors4[VB]);
        for (const VB in this._quaternions) TB.setQuaternion(VB, this._quaternions[VB]);
        for (const VB in this._quaternionsArrays) TB._quaternionsArrays[VB] = this._quaternionsArrays[VB];
        for (const VB in this._matrices) TB.setMatrix(VB, this._matrices[VB]);
        for (const VB in this._matrixArrays) TB._matrixArrays[VB] = this._matrixArrays[VB].slice();
        for (const VB in this._matrices3x3) TB.setMatrix3x3(VB, this._matrices3x3[VB]);
        for (const VB in this._matrices2x2) TB.setMatrix2x2(VB, this._matrices2x2[VB]);
        for (const VB in this._vectors2Arrays) TB.setArray2(VB, this._vectors2Arrays[VB]);
        for (const VB in this._vectors3Arrays) TB.setArray3(VB, this._vectors3Arrays[VB]);
        for (const VB in this._vectors4Arrays) TB.setArray4(VB, this._vectors4Arrays[VB]);
        for (const VB in this._uniformBuffers) TB.setUniformBuffer(VB, this._uniformBuffers[VB]);
        for (const VB in this._textureSamplers) TB.setTextureSampler(VB, this._textureSamplers[VB]);
        for (const VB in this._storageBuffers) TB.setStorageBuffer(VB, this._storageBuffers[VB]);
        return TB
      }
      dispose(BB, TB, dB) {
        if (TB) {
          let BB;
          for (BB in this._textures) this._textures[BB].dispose();
          for (BB in this._internalTextures) this._internalTextures[BB].dispose();
          for (BB in this._textureArrays) {
            const TB = this._textureArrays[BB];
            for (let BB = 0; BB < TB.length; BB++) TB[BB].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(BB, TB, dB)
      }
      serialize() {
        const BB = VB.c.Serialize(this);
        let TB;
        for (TB in BB.customType = "BABYLON.ShaderMaterial", BB.uniqueId = this.uniqueId, BB.options = this._options, BB.shaderPath = this._shaderPath, BB.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, BB.stencil = this.stencil.serialize(), BB.textures = {}, this._textures) BB.textures[TB] = this._textures[TB].serialize();
        for (TB in BB.textureArrays = {}, this._textureArrays) {
          BB.textureArrays[TB] = [];
          const dB = this._textureArrays[TB];
          for (let VB = 0; VB < dB.length; VB++) BB.textureArrays[TB].push(dB[VB].serialize())
        }
        for (TB in BB.ints = {}, this._ints) BB.ints[TB] = this._ints[TB];
        for (TB in BB.uints = {}, this._uints) BB.uints[TB] = this._uints[TB];
        for (TB in BB.floats = {}, this._floats) BB.floats[TB] = this._floats[TB];
        for (TB in BB.floatsArrays = {}, this._floatsArrays) BB.floatsArrays[TB] = this._floatsArrays[TB];
        for (TB in BB.colors3 = {}, this._colors3) {
          const dB = this._colors3[TB];
          BB.colors3[TB] = [dB.r, dB.g, dB.b]
        }
        for (TB in BB.colors3Arrays = {}, this._colors3Arrays) BB.colors3Arrays[TB] = this._colors3Arrays[TB];
        for (TB in BB.colors4 = {}, this._colors4) {
          const dB = this._colors4[TB];
          BB.colors4[TB] = [dB.r, dB.g, dB.b, dB.a]
        }
        for (TB in BB.colors4Arrays = {}, this._colors4Arrays) BB.colors4Arrays[TB] = this._colors4Arrays[TB];
        for (TB in BB.vectors2 = {}, this._vectors2) {
          const dB = this._vectors2[TB];
          BB.vectors2[TB] = [dB.x, dB.y]
        }
        for (TB in BB.vectors3 = {}, this._vectors3) {
          const dB = this._vectors3[TB];
          BB.vectors3[TB] = [dB.x, dB.y, dB.z]
        }
        for (TB in BB.vectors4 = {}, this._vectors4) {
          const dB = this._vectors4[TB];
          BB.vectors4[TB] = [dB.x, dB.y, dB.z, dB.w]
        }
        for (TB in BB.quaternions = {}, this._quaternions) BB.quaternions[TB] = this._quaternions[TB].FVB();
        for (TB in BB.matrices = {}, this._matrices) BB.matrices[TB] = this._matrices[TB].FVB();
        for (TB in BB.matrixArray = {}, this._matrixArrays) BB.matrixArray[TB] = this._matrixArrays[TB];
        for (TB in BB.matrices3x3 = {}, this._matrices3x3) BB.matrices3x3[TB] = this._matrices3x3[TB];
        for (TB in BB.matrices2x2 = {}, this._matrices2x2) BB.matrices2x2[TB] = this._matrices2x2[TB];
        for (TB in BB.vectors2Arrays = {}, this._vectors2Arrays) BB.vectors2Arrays[TB] = this._vectors2Arrays[TB];
        for (TB in BB.vectors3Arrays = {}, this._vectors3Arrays) BB.vectors3Arrays[TB] = this._vectors3Arrays[TB];
        for (TB in BB.vectors4Arrays = {}, this._vectors4Arrays) BB.vectors4Arrays[TB] = this._vectors4Arrays[TB];
        for (TB in BB.quaternionsArrays = {}, this._quaternionsArrays) BB.quaternionsArrays[TB] = this._quaternionsArrays[TB];
        return BB
      }
    }

    function vB(BB, TB, dB) {
      const yB = VB.c.Parse((() => new EB(BB.name, TB, BB.shaderPath, BB.options, BB.storeEffectOnSubMeshes)), BB, TB, dB);
      let lB;
      for (lB in BB.stencil && yB.stencil.parse(BB.stencil, TB, dB), BB.textures) yB.setTexture(lB, JB.f.Parse(BB.textures[lB], TB, dB));
      for (lB in BB.textureArrays) {
        const VB = BB.textureArrays[lB],
          pB = [];
        for (let BB = 0; BB < VB.length; BB++) pB.push(JB.f.Parse(VB[BB], TB, dB));
        yB.setTextureArray(lB, pB)
      }
      for (lB in BB.ints) yB.setInt(lB, BB.ints[lB]);
      for (lB in BB.uints) yB.setUInt(lB, BB.uints[lB]);
      for (lB in BB.floats) yB.setFloat(lB, BB.floats[lB]);
      for (lB in BB.floatsArrays) yB.setFloats(lB, BB.floatsArrays[lB]);
      for (lB in BB.colors3) {
        const TB = BB.colors3[lB];
        yB.setColor3(lB, {
          r: TB[0],
          g: TB[1],
          b: TB[2]
        })
      }
      for (lB in BB.colors3Arrays) {
        const TB = BB.colors3Arrays[lB].reduce(((BB, TB, dB) => (dB % 3 === 0 ? BB.push([TB]) : BB[BB.length - 1].push(TB), BB)), []).map((BB => ({
          r: BB[0],
          g: BB[1],
          b: BB[2]
        })));
        yB.setColor3Array(lB, TB)
      }
      for (lB in BB.colors4) {
        const TB = BB.colors4[lB];
        yB.setColor4(lB, {
          r: TB[0],
          g: TB[1],
          b: TB[2],
          a: TB[3]
        })
      }
      for (lB in BB.colors4Arrays) {
        const TB = BB.colors4Arrays[lB].reduce(((BB, TB, dB) => (dB % 4 === 0 ? BB.push([TB]) : BB[BB.length - 1].push(TB), BB)), []).map((BB => ({
          r: BB[0],
          g: BB[1],
          b: BB[2],
          a: BB[3]
        })));
        yB.setColor4Array(lB, TB)
      }
      for (lB in BB.vectors2) {
        const TB = BB.vectors2[lB];
        yB.setVector2(lB, {
          x: TB[0],
          y: TB[1]
        })
      }
      for (lB in BB.vectors3) {
        const TB = BB.vectors3[lB];
        yB.setVector3(lB, {
          x: TB[0],
          y: TB[1],
          z: TB[2]
        })
      }
      for (lB in BB.vectors4) {
        const TB = BB.vectors4[lB];
        yB.setVector4(lB, {
          x: TB[0],
          y: TB[1],
          z: TB[2],
          w: TB[3]
        })
      }
      for (lB in BB.quaternions) yB.setQuaternion(lB, pB.f.FromArray(BB.quaternions[lB]));
      for (lB in BB.matrices) yB.setMatrix(lB, pB.b.FromArray(BB.matrices[lB]));
      const YB = yB;
      for (lB in BB.matrixArray) YB._matrixArrays[lB] = new Float32Array(BB.matrixArray[lB]);
      for (lB in BB.matrices3x3) yB.setMatrix3x3(lB, BB.matrices3x3[lB]);
      for (lB in BB.matrices2x2) yB.setMatrix2x2(lB, BB.matrices2x2[lB]);
      for (lB in BB.vectors2Arrays) yB.setArray2(lB, BB.vectors2Arrays[lB]);
      for (lB in BB.vectors3Arrays) yB.setArray3(lB, BB.vectors3Arrays[lB]);
      for (lB in BB.vectors4Arrays) yB.setArray4(lB, BB.vectors4Arrays[lB]);
      for (lB in BB.quaternionsArrays) yB.setArray4(lB, BB.quaternionsArrays[lB]);
      return yB
    }
    async function mB(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((yB, pB) => {
        const lB = new gB.c;
        lB.addEventListener("readystatechange", (() => {
          if (4 == lB.readyState)
            if (200 == lB.status) {
              const TB = vB(JSON.parse(lB.responseText), dB || kB.c.LastCreatedScene, VB);
              BB && (TB.name = BB), yB(TB)
            } else pB("Unable to load the ShaderMaterial")
        })), lB.open("GET", TB), lB.send()
      }))
    }
    async function iB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const VB = this?.SnippetUrl ?? EB.SnippetUrl;
      return await new Promise(((yB, pB) => {
        const lB = new gB.c;
        lB.addEventListener("readystatechange", (() => {
          if (4 == lB.readyState)
            if (200 == lB.status) {
              const VB = JSON.parse(JSON.parse(lB.responseText).jsonPayload),
                pB = vB(JSON.parse(VB.shaderMaterial), TB || kB.c.LastCreatedScene, dB);
              pB.snippetId = BB, yB(pB)
            } else pB("Unable to load the snippet " + BB)
        })), lB.open("GET", VB + "/" + BB.replace(/#/g, "/")), lB.send()
      }))
    }
    EB.SnippetUrl = "https://snippet.babylonjs.com";
    const NB = iB;
    let tB = !1;

    function fB() {
      tB || (tB = !0, EB.Parse = vB, EB.ParseFromFileAsync = mB, EB.ParseFromSnippetAsync = iB, EB.CreateFromSnippetAsync = NB, (0, uB.g)("BABYLON.ShaderMaterial", EB))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);