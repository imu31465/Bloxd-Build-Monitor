export const id = 293;
export const ids = [293];
export const modules = {
  41468: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => nB,
      c: () => VB,
      d: () => WB,
      f: () => AB,
      j: () => RB,
      k: () => NB
    });
    var YB = GB(41022),
      DB = GB(41091),
      QB = GB(37778),
      oB = GB(41150),
      jB = GB(41470),
      yB = GB(41354),
      JB = GB(41041),
      MB = GB(41346),
      PB = GB(37796),
      zB = GB(41333),
      lB = GB(41325),
      pB = GB(41368),
      qB = GB(37823);
    const ZB = {
      effect: null,
      subMesh: null
    };
    class NB extends MB.d {
      constructor(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(BB, OB, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new QB.d, this._cachedWorldViewProjectionMatrix = new QB.d, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = GB, this._options = {
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
          ...YB
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
      setTexture(BB, OB) {
        return -1 === this._options.samplers.indexOf(BB) && this._options.samplers.push(BB), this._textures[BB] = OB, this
      }
      setInternalTexture(BB, OB) {
        return -1 === this._options.samplers.indexOf(BB) && this._options.samplers.push(BB), this._internalTextures[BB] = OB, this
      }
      removeTexture(BB) {
        delete this._textures[BB]
      }
      setTextureArray(BB, OB) {
        return -1 === this._options.samplers.indexOf(BB) && this._options.samplers.push(BB), this._checkUniform(BB), this._textureArrays[BB] = OB, this
      }
      setExternalTexture(BB, OB) {
        return -1 === this._options.externalTextures.indexOf(BB) && this._options.externalTextures.push(BB), this._externalTextures[BB] = OB, this
      }
      setFloat(BB, OB) {
        return this._checkUniform(BB), this._floats[BB] = OB, this
      }
      setInt(BB, OB) {
        return this._checkUniform(BB), this._ints[BB] = OB, this
      }
      setUInt(BB, OB) {
        return this._checkUniform(BB), this._uints[BB] = OB, this
      }
      setFloats(BB, OB) {
        return this._checkUniform(BB), this._floatsArrays[BB] = OB, this
      }
      setColor3(BB, OB) {
        return this._checkUniform(BB), this._colors3[BB] = OB, this
      }
      setColor3Array(BB, OB) {
        return this._checkUniform(BB), this._colors3Arrays[BB] = OB.reduce(((BB, OB) => (BB.push(OB.r, OB.g, OB.b), BB)), []), this
      }
      setColor4(BB, OB) {
        return this._checkUniform(BB), this._colors4[BB] = OB, this
      }
      setColor4Array(BB, OB) {
        return this._checkUniform(BB), this._colors4Arrays[BB] = OB.reduce(((BB, OB) => (BB.push(OB.r, OB.g, OB.b, OB.a), BB)), []), this
      }
      setVector2(BB, OB) {
        return this._checkUniform(BB), this._vectors2[BB] = OB, this
      }
      setVector3(BB, OB) {
        return this._checkUniform(BB), this._vectors3[BB] = OB, this
      }
      setVector4(BB, OB) {
        return this._checkUniform(BB), this._vectors4[BB] = OB, this
      }
      setQuaternion(BB, OB) {
        return this._checkUniform(BB), this._quaternions[BB] = OB, this
      }
      setQuaternionArray(BB, OB) {
        return this._checkUniform(BB), this._quaternionsArrays[BB] = OB.reduce(((BB, OB) => (OB.toArray(BB, BB.length), BB)), []), this
      }
      setMatrix(BB, OB) {
        return this._checkUniform(BB), this._matrices[BB] = OB, this
      }
      setMatrices(BB, OB) {
        this._checkUniform(BB);
        const GB = new Float32Array(16 * OB.length);
        for (let YB = 0; YB < OB.length; YB++) {
          OB[YB].copyToArray(GB, 16 * YB)
        }
        return this._matrixArrays[BB] = GB, this
      }
      setMatrix3x3(BB, OB) {
        return this._checkUniform(BB), this._matrices3x3[BB] = OB, this
      }
      setMatrix2x2(BB, OB) {
        return this._checkUniform(BB), this._matrices2x2[BB] = OB, this
      }
      setArray2(BB, OB) {
        return this._checkUniform(BB), this._vectors2Arrays[BB] = OB, this
      }
      setArray3(BB, OB) {
        return this._checkUniform(BB), this._vectors3Arrays[BB] = OB, this
      }
      setArray4(BB, OB) {
        return this._checkUniform(BB), this._vectors4Arrays[BB] = OB, this
      }
      setUniformBuffer(BB, OB) {
        return -1 === this._options.uniformBuffers.indexOf(BB) && this._options.uniformBuffers.push(BB), this._uniformBuffers[BB] = OB, this
      }
      setTextureSampler(BB, OB) {
        return -1 === this._options.samplerObjects.indexOf(BB) && this._options.samplerObjects.push(BB), this._textureSamplers[BB] = OB, this
      }
      setStorageBuffer(BB, OB) {
        return -1 === this._options.storageBuffers.indexOf(BB) && this._options.storageBuffers.push(BB), this._storageBuffers[BB] = OB, this
      }
      setDefine(BB, OB) {
        const GB = BB.trimEnd() + " ",
          YB = this.options.defines.findIndex((OB => OB === BB || OB.startsWith(GB)));
        return YB >= 0 && this.options.defines.splice(YB, 1), ("boolean" !== typeof OB || OB) && this.options.defines.push(GB + OB), this
      }
      isReadyForSubMesh(BB, OB, GB) {
        return this.isReady(BB, GB, OB)
      }
      isReady(BB, OB, GB) {
        const YB = GB && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const BB = YB ? GB._drawWrapper : this._drawWrapper;
          if (BB.effect && BB._wasPreviouslyReady && BB._wasPreviouslyUsingInstances === OB) return !0
        }
        const QB = this.JF(),
          jB = QB.Lp(),
          JB = [],
          MB = [];
        let PB = null,
          qB = this._shaderPath,
          NB = this._options.uniforms,
          RB = this._options.uniformBuffers,
          WB = this._options.samplers;
        jB.getCaps().multiview && QB.activeCamera && QB.activeCamera.outputRenderTarget && QB.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, JB.push("#define MULTIVIEW"), -1 !== NB.indexOf("viewProjection") && -1 === NB.indexOf("viewProjectionR") && NB.push("viewProjectionR"));
        for (let DB = 0; DB < this._options.defines.length; DB++) {
          const BB = 0 === this._options.defines[DB].indexOf("#define") ? this._options.defines[DB] : `#define ${this._options.defines[DB]}`;
          JB.push(BB)
        }
        for (let DB = 0; DB < this._options.attributes.length; DB++) MB.push(this._options.attributes[DB]);
        if (BB && BB.isVerticesDataPresent(oB.h.ColorKind) && (-1 === MB.indexOf(oB.h.ColorKind) && MB.push(oB.h.ColorKind), JB.push("#define VERTEXCOLOR")), OB && (JB.push("#define INSTANCES"), (0, lB.rb)(MB, this._materialHelperNeedsPreviousMatrices), BB?.hasThinInstances && (JB.push("#define THIN_INSTANCES"), BB && BB.isVerticesDataPresent(oB.h.ColorInstanceKind) && (MB.push(oB.h.ColorInstanceKind), JB.push("#define INSTANCESCOLOR")))), BB && BB.useBones && BB.computeBonesUsingShaders && BB.skeleton) {
          MB.push(oB.h.MatricesIndicesKind), MB.push(oB.h.MatricesWeightsKind), BB.numBoneInfluencers > 4 && (MB.push(oB.h.MatricesIndicesExtraKind), MB.push(oB.h.MatricesWeightsExtraKind));
          const OB = BB.skeleton;
          JB.push("#define NUM_BONE_INFLUENCERS " + BB.numBoneInfluencers), PB = new yB.c, PB.addCPUSkinningFallback(0, BB), OB.isUsingTextureForMatrices ? (JB.push("#define BONETEXTURE"), -1 === NB.indexOf("boneTextureInfo") && NB.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (JB.push("#define BonesPerMesh " + (OB.bones.length + 1)), -1 === NB.indexOf("mBones") && NB.push("mBones"))
        } else JB.push("#define NUM_BONE_INFLUENCERS 0");
        let AB = 0;
        const VB = BB ? BB.morphTargetManager : null;
        if (VB) {
          const OB = -1 !== JB.indexOf("#define UV1"),
            GB = -1 !== JB.indexOf("#define UV2"),
            YB = -1 !== JB.indexOf("#define TANGENT"),
            DB = -1 !== JB.indexOf("#define NORMAL"),
            QB = -1 !== JB.indexOf("#define VERTEXCOLOR");
          AB = (0, lB.V)(VB, JB, MB, BB, !0, DB, YB, OB, GB, QB), VB.isUsingTextureForTargets && (-1 === NB.indexOf("morphTargetTextureIndices") && NB.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), AB > 0 && (NB = NB.slice(), NB.push("morphTargetInfluences"), NB.push("morphTargetCount"), NB.push("morphTargetTextureInfo"), NB.push("morphTargetTextureIndices"))
        } else JB.push("#define NUM_MORPH_INFLUENCERS 0");
        if (BB) {
          const GB = BB.bakedVertexAnimationManager;
          GB && GB.isEnabled && (JB.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === NB.indexOf("bakedVertexAnimationSettings") && NB.push("bakedVertexAnimationSettings"), -1 === NB.indexOf("bakedVertexAnimationTextureSizeInverted") && NB.push("bakedVertexAnimationTextureSizeInverted"), -1 === NB.indexOf("bakedVertexAnimationTime") && NB.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), OB && MB.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const DB in this._textures)
          if (!this._textures[DB].isReady()) return !1;
        for (const DB in this._internalTextures)
          if (!this._internalTextures[DB].isReady) return !1;
        BB && this.needAlphaTestingForMesh(BB) && JB.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, zB.e)(NB), (0, zB.o)(this, QB, JB)), QB.fogEnabled && BB?.applyFog && QB.fogMode !== DB.e.FOGMODE_NONE && (JB.push("#define FOG"), -1 === NB.indexOf("view") && NB.push("view"), -1 === NB.indexOf("vFogInfos") && NB.push("vFogInfos"), -1 === NB.indexOf("vFogColor") && NB.push("vFogColor")), this._useLogarithmicDepth && (JB.push("#define LOGARITHMICDEPTH"), -1 === NB.indexOf("logarithmicDepthConstant") && NB.push("logarithmicDepthConstant"));
        const SB = GB ? GB.getRenderingMesh() : BB;
        if (SB && this.useVertexPulling) {
          const BB = SB.geometry;
          BB && (this._vertexPullingMetadata = (0, pB.e)(BB), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((BB, OB) => {
            NB.push(`vp_${OB}_info`)
          }))), JB.push("#define USE_VERTEX_PULLING");
          const OB = SB.geometry?.getIndexBuffer();
          OB && !SB.isUnIndexed && (JB.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), OB.is32Bits && JB.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (NB = NB.slice(), RB = RB.slice(), WB = WB.slice(), qB = this.customShaderNameResolve(this.name, NB, RB, WB, JB, MB));
        const nB = YB ? GB._getDrawWrapper(void 0, !0) : this._drawWrapper,
          UB = nB?.effect ?? null,
          fB = nB?.defines ?? null,
          kB = JB.join("\n");
        let dB = UB;
        return fB !== kB && (dB = jB.createEffect(qB, {
          attributes: MB,
          uniformsNames: NB,
          uniformBuffersNames: RB,
          samplers: WB,
          defines: kB,
          fallbacks: PB,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: AB
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, jB), YB ? GB.setEffect(dB, kB, this._materialContext) : nB && nB.setEffect(dB, kB), this._onEffectCreatedObservable && (ZB.effect = dB, ZB.subMesh = GB ?? BB?.iW[0] ?? null, this._onEffectCreatedObservable.notifyObservers(ZB))), nB._wasPreviouslyUsingInstances = !!OB, !!dB?.isReady() && (UB !== dB && QB.resetCachedMaterial(), nB._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(BB, OB) {
        const GB = OB ?? this.getEffect();
        if (!GB) return;
        const YB = this._options.uniforms; - 1 !== YB.indexOf("world") && GB.setMatrix("world", BB);
        const DB = this.JF(); - 1 !== YB.indexOf("worldView") && (BB.multiplyToRef(DB.getViewMatrix(), this._cachedWorldViewMatrix), GB.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== YB.indexOf("worldViewProjection") && (BB.multiplyToRef(DB.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), GB.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== YB.indexOf("view") && GB.setMatrix("view", DB.getViewMatrix())
      }
      bindForSubMesh(BB, OB, GB) {
        this.bind(BB, OB, GB._drawWrapperOverride?.effect, GB)
      }
      bind(BB, OB, GB, YB) {
        const DB = YB && this._storeEffectOnSubMeshes,
          QB = GB ?? (DB ? YB.effect : this.getEffect());
        if (!QB) return;
        const oB = this.JF();
        this._activeEffect = QB, this.bindOnlyWorldMatrix(BB, GB);
        const jB = this._options.uniformBuffers;
        let yB = !1;
        if (QB && jB && jB.length > 0 && oB.Lp().supportsUniformBuffers)
          for (let MB = 0; MB < jB.length; ++MB) {
            switch (jB[MB]) {
              case "Mesh":
                OB && (OB.getMeshUniformBuffer().bindToEffect(QB, "Mesh"), OB.transferToEffect(BB));
                break;
              case "Scene":
                (0, lB.E)(QB, oB.getSceneUniformBuffer()), oB.finalizeSceneUbo(), yB = !0
            }
          }
        const JB = OB && DB ? this._mustRebind(oB, QB, YB, OB.visibility) : oB.getCachedMaterial() !== this;
        if (QB && JB) {
          let BB;
          for (BB in yB || -1 === this._options.uniforms.indexOf("view") || QB.setMatrix("view", oB.getViewMatrix()), yB || -1 === this._options.uniforms.indexOf("projection") || QB.setMatrix("projection", oB.getProjectionMatrix()), yB || -1 === this._options.uniforms.indexOf("viewProjection") || (QB.setMatrix("viewProjection", oB.getTransformMatrix()), this._multiview && QB.setMatrix("viewProjectionR", oB._transformMatrixR)), oB.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && QB.setVector3("cameraPosition", oB.activeCamera.globalPosition), (0, lB.i)(OB, QB), (0, zB.g)(QB, this, oB), this._vertexPullingMetadata && (0, pB.c)(QB, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, lB.x)(DB ? YB.materialDefines : QB.defines, QB, oB), OB && (0, lB.k)(oB, OB, QB), this._textures) QB.setTexture(BB, this._textures[BB]);
          for (BB in this._internalTextures) QB._bindTexture(BB, this._internalTextures[BB]);
          for (BB in this._textureArrays) QB.setTextureArray(BB, this._textureArrays[BB]);
          for (BB in this._ints) QB.setInt(BB, this._ints[BB]);
          for (BB in this._uints) QB.setUInt(BB, this._uints[BB]);
          for (BB in this._floats) QB.setFloat(BB, this._floats[BB]);
          for (BB in this._floatsArrays) QB.setArray(BB, this._floatsArrays[BB]);
          for (BB in this._colors3) QB.setColor3(BB, this._colors3[BB]);
          for (BB in this._colors3Arrays) QB.setArray3(BB, this._colors3Arrays[BB]);
          for (BB in this._colors4) {
            const OB = this._colors4[BB];
            QB.setFloat4(BB, OB.r, OB.g, OB.b, OB.a)
          }
          for (BB in this._colors4Arrays) QB.setArray4(BB, this._colors4Arrays[BB]);
          for (BB in this._vectors2) QB.setVector2(BB, this._vectors2[BB]);
          for (BB in this._vectors3) QB.setVector3(BB, this._vectors3[BB]);
          for (BB in this._vectors4) QB.setVector4(BB, this._vectors4[BB]);
          for (BB in this._quaternions) QB.setQuaternion(BB, this._quaternions[BB]);
          for (BB in this._matrices) QB.setMatrix(BB, this._matrices[BB]);
          for (BB in this._matrixArrays) QB.setMatrices(BB, this._matrixArrays[BB]);
          for (BB in this._matrices3x3) QB.setMatrix3x3(BB, this._matrices3x3[BB]);
          for (BB in this._matrices2x2) QB.setMatrix2x2(BB, this._matrices2x2[BB]);
          for (BB in this._vectors2Arrays) QB.setArray2(BB, this._vectors2Arrays[BB]);
          for (BB in this._vectors3Arrays) QB.setArray3(BB, this._vectors3Arrays[BB]);
          for (BB in this._vectors4Arrays) QB.setArray4(BB, this._vectors4Arrays[BB]);
          for (BB in this._quaternionsArrays) QB.setArray4(BB, this._quaternionsArrays[BB]);
          for (BB in this._uniformBuffers) {
            const OB = this._uniformBuffers[BB].getBuffer();
            OB && QB.bindUniformBuffer(OB, BB)
          }
          const GB = oB.Lp(),
            jB = GB.setExternalTexture;
          if (jB)
            for (BB in this._externalTextures) jB.call(GB, BB, this._externalTextures[BB]);
          const JB = GB.setTextureSampler;
          if (JB)
            for (BB in this._textureSamplers) JB.call(GB, BB, this._textureSamplers[BB]);
          const MB = GB.setStorageBuffer;
          if (MB)
            for (BB in this._storageBuffers) MB.call(GB, BB, this._storageBuffers[BB])
        }
        if (QB && OB && (JB || !this.isFrozen)) {
          (0, lB.A)(OB, QB), OB.morphTargetManager && OB.morphTargetManager.isUsingTextureForTargets && OB.morphTargetManager._bind(QB);
          const BB = OB.bakedVertexAnimationManager;
          if (BB && BB.isEnabled) {
            const BB = DB ? YB._drawWrapper : this._drawWrapper;
            OB.bakedVertexAnimationManager?.bind(QB, !!BB._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(OB, QB, YB)
      }
      getActiveTextures() {
        const BB = super.getActiveTextures();
        for (const OB in this._textures) BB.push(this._textures[OB]);
        for (const OB in this._textureArrays) {
          const GB = this._textureArrays[OB];
          for (let OB = 0; OB < GB.length; OB++) BB.push(GB[OB])
        }
        return BB
      }
      hasTexture(BB) {
        if (super.hasTexture(BB)) return !0;
        for (const GB in this._textures)
          if (this._textures[GB] === BB) return !0;
        const OB = BB.getInternalTexture();
        for (const GB in this._internalTextures)
          if (this._internalTextures[GB] === OB) return !0;
        for (const GB in this._textureArrays) {
          const OB = this._textureArrays[GB];
          for (let GB = 0; GB < OB.length; GB++)
            if (OB[GB] === BB) return !0
        }
        return !1
      }
      clone(BB) {
        const OB = YB.d.Clone((() => new NB(BB, this.JF(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        OB.name = BB, OB.id = BB, "object" === typeof OB._shaderPath && (OB._shaderPath = {
          ...OB._shaderPath
        }), this._options = {
          ...this._options
        };
        const GB = Object.keys(this._options);
        for (const YB of GB) {
          const BB = this._options[YB];
          Array.isArray(BB) && (this._options[YB] = BB.slice(0))
        }
        this.stencil.copyTo(OB.stencil);
        for (const YB in this._textures) OB.setTexture(YB, this._textures[YB]);
        for (const YB in this._internalTextures) OB.setInternalTexture(YB, this._internalTextures[YB]);
        for (const YB in this._textureArrays) OB.setTextureArray(YB, this._textureArrays[YB]);
        for (const YB in this._externalTextures) OB.setExternalTexture(YB, this._externalTextures[YB]);
        for (const YB in this._ints) OB.setInt(YB, this._ints[YB]);
        for (const YB in this._uints) OB.setUInt(YB, this._uints[YB]);
        for (const YB in this._floats) OB.setFloat(YB, this._floats[YB]);
        for (const YB in this._floatsArrays) OB.setFloats(YB, this._floatsArrays[YB]);
        for (const YB in this._colors3) OB.setColor3(YB, this._colors3[YB]);
        for (const YB in this._colors3Arrays) OB._colors3Arrays[YB] = this._colors3Arrays[YB];
        for (const YB in this._colors4) OB.setColor4(YB, this._colors4[YB]);
        for (const YB in this._colors4Arrays) OB._colors4Arrays[YB] = this._colors4Arrays[YB];
        for (const YB in this._vectors2) OB.setVector2(YB, this._vectors2[YB]);
        for (const YB in this._vectors3) OB.setVector3(YB, this._vectors3[YB]);
        for (const YB in this._vectors4) OB.setVector4(YB, this._vectors4[YB]);
        for (const YB in this._quaternions) OB.setQuaternion(YB, this._quaternions[YB]);
        for (const YB in this._quaternionsArrays) OB._quaternionsArrays[YB] = this._quaternionsArrays[YB];
        for (const YB in this._matrices) OB.setMatrix(YB, this._matrices[YB]);
        for (const YB in this._matrixArrays) OB._matrixArrays[YB] = this._matrixArrays[YB].slice();
        for (const YB in this._matrices3x3) OB.setMatrix3x3(YB, this._matrices3x3[YB]);
        for (const YB in this._matrices2x2) OB.setMatrix2x2(YB, this._matrices2x2[YB]);
        for (const YB in this._vectors2Arrays) OB.setArray2(YB, this._vectors2Arrays[YB]);
        for (const YB in this._vectors3Arrays) OB.setArray3(YB, this._vectors3Arrays[YB]);
        for (const YB in this._vectors4Arrays) OB.setArray4(YB, this._vectors4Arrays[YB]);
        for (const YB in this._uniformBuffers) OB.setUniformBuffer(YB, this._uniformBuffers[YB]);
        for (const YB in this._textureSamplers) OB.setTextureSampler(YB, this._textureSamplers[YB]);
        for (const YB in this._storageBuffers) OB.setStorageBuffer(YB, this._storageBuffers[YB]);
        return OB
      }
      dispose(BB, OB, GB) {
        if (OB) {
          let BB;
          for (BB in this._textures) this._textures[BB].dispose();
          for (BB in this._internalTextures) this._internalTextures[BB].dispose();
          for (BB in this._textureArrays) {
            const OB = this._textureArrays[BB];
            for (let BB = 0; BB < OB.length; BB++) OB[BB].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(BB, OB, GB)
      }
      serialize() {
        const BB = YB.d.Serialize(this);
        let OB;
        for (OB in BB.customType = "BABYLON.ShaderMaterial", BB.uniqueId = this.uniqueId, BB.options = this._options, BB.shaderPath = this._shaderPath, BB.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, BB.stencil = this.stencil.serialize(), BB.textures = {}, this._textures) BB.textures[OB] = this._textures[OB].serialize();
        for (OB in BB.textureArrays = {}, this._textureArrays) {
          BB.textureArrays[OB] = [];
          const GB = this._textureArrays[OB];
          for (let YB = 0; YB < GB.length; YB++) BB.textureArrays[OB].push(GB[YB].serialize())
        }
        for (OB in BB.ints = {}, this._ints) BB.ints[OB] = this._ints[OB];
        for (OB in BB.uints = {}, this._uints) BB.uints[OB] = this._uints[OB];
        for (OB in BB.floats = {}, this._floats) BB.floats[OB] = this._floats[OB];
        for (OB in BB.floatsArrays = {}, this._floatsArrays) BB.floatsArrays[OB] = this._floatsArrays[OB];
        for (OB in BB.colors3 = {}, this._colors3) {
          const GB = this._colors3[OB];
          BB.colors3[OB] = [GB.r, GB.g, GB.b]
        }
        for (OB in BB.colors3Arrays = {}, this._colors3Arrays) BB.colors3Arrays[OB] = this._colors3Arrays[OB];
        for (OB in BB.colors4 = {}, this._colors4) {
          const GB = this._colors4[OB];
          BB.colors4[OB] = [GB.r, GB.g, GB.b, GB.a]
        }
        for (OB in BB.colors4Arrays = {}, this._colors4Arrays) BB.colors4Arrays[OB] = this._colors4Arrays[OB];
        for (OB in BB.vectors2 = {}, this._vectors2) {
          const GB = this._vectors2[OB];
          BB.vectors2[OB] = [GB.x, GB.y]
        }
        for (OB in BB.vectors3 = {}, this._vectors3) {
          const GB = this._vectors3[OB];
          BB.vectors3[OB] = [GB.x, GB.y, GB.z]
        }
        for (OB in BB.vectors4 = {}, this._vectors4) {
          const GB = this._vectors4[OB];
          BB.vectors4[OB] = [GB.x, GB.y, GB.z, GB.w]
        }
        for (OB in BB.quaternions = {}, this._quaternions) BB.quaternions[OB] = this._quaternions[OB].dDB();
        for (OB in BB.matrices = {}, this._matrices) BB.matrices[OB] = this._matrices[OB].dDB();
        for (OB in BB.matrixArray = {}, this._matrixArrays) BB.matrixArray[OB] = this._matrixArrays[OB];
        for (OB in BB.matrices3x3 = {}, this._matrices3x3) BB.matrices3x3[OB] = this._matrices3x3[OB];
        for (OB in BB.matrices2x2 = {}, this._matrices2x2) BB.matrices2x2[OB] = this._matrices2x2[OB];
        for (OB in BB.vectors2Arrays = {}, this._vectors2Arrays) BB.vectors2Arrays[OB] = this._vectors2Arrays[OB];
        for (OB in BB.vectors3Arrays = {}, this._vectors3Arrays) BB.vectors3Arrays[OB] = this._vectors3Arrays[OB];
        for (OB in BB.vectors4Arrays = {}, this._vectors4Arrays) BB.vectors4Arrays[OB] = this._vectors4Arrays[OB];
        for (OB in BB.quaternionsArrays = {}, this._quaternionsArrays) BB.quaternionsArrays[OB] = this._quaternionsArrays[OB];
        return BB
      }
    }

    function RB(BB, OB, GB) {
      const DB = YB.d.Parse((() => new NB(BB.name, OB, BB.shaderPath, BB.options, BB.storeEffectOnSubMeshes)), BB, OB, GB);
      let oB;
      for (oB in BB.stencil && DB.stencil.parse(BB.stencil, OB, GB), BB.textures) DB.setTexture(oB, jB.e.Parse(BB.textures[oB], OB, GB));
      for (oB in BB.textureArrays) {
        const YB = BB.textureArrays[oB],
          QB = [];
        for (let BB = 0; BB < YB.length; BB++) QB.push(jB.e.Parse(YB[BB], OB, GB));
        DB.setTextureArray(oB, QB)
      }
      for (oB in BB.ints) DB.setInt(oB, BB.ints[oB]);
      for (oB in BB.uints) DB.setUInt(oB, BB.uints[oB]);
      for (oB in BB.floats) DB.setFloat(oB, BB.floats[oB]);
      for (oB in BB.floatsArrays) DB.setFloats(oB, BB.floatsArrays[oB]);
      for (oB in BB.colors3) {
        const OB = BB.colors3[oB];
        DB.setColor3(oB, {
          r: OB[0],
          g: OB[1],
          b: OB[2]
        })
      }
      for (oB in BB.colors3Arrays) {
        const OB = BB.colors3Arrays[oB].reduce(((BB, OB, GB) => (GB % 3 === 0 ? BB.push([OB]) : BB[BB.length - 1].push(OB), BB)), []).map((BB => ({
          r: BB[0],
          g: BB[1],
          b: BB[2]
        })));
        DB.setColor3Array(oB, OB)
      }
      for (oB in BB.colors4) {
        const OB = BB.colors4[oB];
        DB.setColor4(oB, {
          r: OB[0],
          g: OB[1],
          b: OB[2],
          a: OB[3]
        })
      }
      for (oB in BB.colors4Arrays) {
        const OB = BB.colors4Arrays[oB].reduce(((BB, OB, GB) => (GB % 4 === 0 ? BB.push([OB]) : BB[BB.length - 1].push(OB), BB)), []).map((BB => ({
          r: BB[0],
          g: BB[1],
          b: BB[2],
          a: BB[3]
        })));
        DB.setColor4Array(oB, OB)
      }
      for (oB in BB.vectors2) {
        const OB = BB.vectors2[oB];
        DB.setVector2(oB, {
          x: OB[0],
          y: OB[1]
        })
      }
      for (oB in BB.vectors3) {
        const OB = BB.vectors3[oB];
        DB.setVector3(oB, {
          x: OB[0],
          y: OB[1],
          z: OB[2]
        })
      }
      for (oB in BB.vectors4) {
        const OB = BB.vectors4[oB];
        DB.setVector4(oB, {
          x: OB[0],
          y: OB[1],
          z: OB[2],
          w: OB[3]
        })
      }
      for (oB in BB.quaternions) DB.setQuaternion(oB, QB.f.FromArray(BB.quaternions[oB]));
      for (oB in BB.matrices) DB.setMatrix(oB, QB.d.FromArray(BB.matrices[oB]));
      const yB = DB;
      for (oB in BB.matrixArray) yB._matrixArrays[oB] = new Float32Array(BB.matrixArray[oB]);
      for (oB in BB.matrices3x3) DB.setMatrix3x3(oB, BB.matrices3x3[oB]);
      for (oB in BB.matrices2x2) DB.setMatrix2x2(oB, BB.matrices2x2[oB]);
      for (oB in BB.vectors2Arrays) DB.setArray2(oB, BB.vectors2Arrays[oB]);
      for (oB in BB.vectors3Arrays) DB.setArray3(oB, BB.vectors3Arrays[oB]);
      for (oB in BB.vectors4Arrays) DB.setArray4(oB, BB.vectors4Arrays[oB]);
      for (oB in BB.quaternionsArrays) DB.setArray4(oB, BB.quaternionsArrays[oB]);
      return DB
    }
    async function WB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((DB, QB) => {
        const oB = new JB.e;
        oB.addEventListener("readystatechange", (() => {
          if (4 == oB.readyState)
            if (200 == oB.status) {
              const OB = RB(JSON.parse(oB.responseText), GB || PB.b.LastCreatedScene, YB);
              BB && (OB.name = BB), DB(OB)
            } else QB("Unable to load the ShaderMaterial")
        })), oB.open("GET", OB), oB.send()
      }))
    }
    async function AB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const YB = this?.SnippetUrl ?? NB.SnippetUrl;
      return await new Promise(((DB, QB) => {
        const oB = new JB.e;
        oB.addEventListener("readystatechange", (() => {
          if (4 == oB.readyState)
            if (200 == oB.status) {
              const YB = JSON.parse(JSON.parse(oB.responseText).jsonPayload),
                QB = RB(JSON.parse(YB.shaderMaterial), OB || PB.b.LastCreatedScene, GB);
              QB.snippetId = BB, DB(QB)
            } else QB("Unable to load the snippet " + BB)
        })), oB.open("GET", YB + "/" + BB.replace(/#/g, "/")), oB.send()
      }))
    }
    NB.SnippetUrl = "https://snippet.babylonjs.com";
    const VB = AB;
    let SB = !1;

    function nB() {
      SB || (SB = !0, NB.Parse = RB, NB.ParseFromFileAsync = WB, NB.ParseFromSnippetAsync = AB, NB.CreateFromSnippetAsync = VB, (0, qB.f)("BABYLON.ShaderMaterial", NB))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);