export const id = 254;
export const ids = [254];
export const modules = {
  39598: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => fb,
      f: () => xb,
      g: () => Db,
      h: () => zb,
      l: () => Zb,
      o: () => yb
    });
    var Ab = Ub(39124),
      Mb = Ub(39188),
      Tb = Ub(36401),
      Eb = Ub(39244),
      Yb = Ub(39605),
      Bb = Ub(39460),
      eb = Ub(39153),
      vb = Ub(39454),
      Lb = Ub(36425),
      Pb = Ub(39440),
      Xb = Ub(39432),
      jb = Ub(39478),
      Rb = Ub(36447);
    const kb = {
      effect: null,
      subMesh: null
    };
    class yb extends vb.d {
      constructor(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(bb, ab, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new Tb.b, this._cachedWorldViewProjectionMatrix = new Tb.b, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = Ub, this._options = {
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
          ...Ab
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(bb) {
        this._shaderPath = bb
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
      _checkUniform(bb) {
        -1 === this._options.uniforms.indexOf(bb) && this._options.uniforms.push(bb)
      }
      setTexture(bb, ab) {
        return -1 === this._options.samplers.indexOf(bb) && this._options.samplers.push(bb), this._textures[bb] = ab, this
      }
      setInternalTexture(bb, ab) {
        return -1 === this._options.samplers.indexOf(bb) && this._options.samplers.push(bb), this._internalTextures[bb] = ab, this
      }
      removeTexture(bb) {
        delete this._textures[bb]
      }
      setTextureArray(bb, ab) {
        return -1 === this._options.samplers.indexOf(bb) && this._options.samplers.push(bb), this._checkUniform(bb), this._textureArrays[bb] = ab, this
      }
      setExternalTexture(bb, ab) {
        return -1 === this._options.externalTextures.indexOf(bb) && this._options.externalTextures.push(bb), this._externalTextures[bb] = ab, this
      }
      setFloat(bb, ab) {
        return this._checkUniform(bb), this._floats[bb] = ab, this
      }
      setInt(bb, ab) {
        return this._checkUniform(bb), this._ints[bb] = ab, this
      }
      setUInt(bb, ab) {
        return this._checkUniform(bb), this._uints[bb] = ab, this
      }
      setFloats(bb, ab) {
        return this._checkUniform(bb), this._floatsArrays[bb] = ab, this
      }
      setColor3(bb, ab) {
        return this._checkUniform(bb), this._colors3[bb] = ab, this
      }
      setColor3Array(bb, ab) {
        return this._checkUniform(bb), this._colors3Arrays[bb] = ab.reduce(((bb, ab) => (bb.push(ab.r, ab.g, ab.b), bb)), []), this
      }
      setColor4(bb, ab) {
        return this._checkUniform(bb), this._colors4[bb] = ab, this
      }
      setColor4Array(bb, ab) {
        return this._checkUniform(bb), this._colors4Arrays[bb] = ab.reduce(((bb, ab) => (bb.push(ab.r, ab.g, ab.b, ab.a), bb)), []), this
      }
      setVector2(bb, ab) {
        return this._checkUniform(bb), this._vectors2[bb] = ab, this
      }
      setVector3(bb, ab) {
        return this._checkUniform(bb), this._vectors3[bb] = ab, this
      }
      setVector4(bb, ab) {
        return this._checkUniform(bb), this._vectors4[bb] = ab, this
      }
      setQuaternion(bb, ab) {
        return this._checkUniform(bb), this._quaternions[bb] = ab, this
      }
      setQuaternionArray(bb, ab) {
        return this._checkUniform(bb), this._quaternionsArrays[bb] = ab.reduce(((bb, ab) => (ab.toArray(bb, bb.length), bb)), []), this
      }
      setMatrix(bb, ab) {
        return this._checkUniform(bb), this._matrices[bb] = ab, this
      }
      setMatrices(bb, ab) {
        this._checkUniform(bb);
        const Ub = new Float32Array(16 * ab.length);
        for (let Ab = 0; Ab < ab.length; Ab++) {
          ab[Ab].copyToArray(Ub, 16 * Ab)
        }
        return this._matrixArrays[bb] = Ub, this
      }
      setMatrix3x3(bb, ab) {
        return this._checkUniform(bb), this._matrices3x3[bb] = ab, this
      }
      setMatrix2x2(bb, ab) {
        return this._checkUniform(bb), this._matrices2x2[bb] = ab, this
      }
      setArray2(bb, ab) {
        return this._checkUniform(bb), this._vectors2Arrays[bb] = ab, this
      }
      setArray3(bb, ab) {
        return this._checkUniform(bb), this._vectors3Arrays[bb] = ab, this
      }
      setArray4(bb, ab) {
        return this._checkUniform(bb), this._vectors4Arrays[bb] = ab, this
      }
      setUniformBuffer(bb, ab) {
        return -1 === this._options.uniformBuffers.indexOf(bb) && this._options.uniformBuffers.push(bb), this._uniformBuffers[bb] = ab, this
      }
      setTextureSampler(bb, ab) {
        return -1 === this._options.samplerObjects.indexOf(bb) && this._options.samplerObjects.push(bb), this._textureSamplers[bb] = ab, this
      }
      setStorageBuffer(bb, ab) {
        return -1 === this._options.storageBuffers.indexOf(bb) && this._options.storageBuffers.push(bb), this._storageBuffers[bb] = ab, this
      }
      setDefine(bb, ab) {
        const Ub = bb.trimEnd() + " ",
          Ab = this.options.defines.findIndex((ab => ab === bb || ab.startsWith(Ub)));
        return Ab >= 0 && this.options.defines.splice(Ab, 1), ("boolean" !== typeof ab || ab) && this.options.defines.push(Ub + ab), this
      }
      isReadyForSubMesh(bb, ab, Ub) {
        return this.isReady(bb, Ub, ab)
      }
      isReady(bb, ab, Ub) {
        const Ab = Ub && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const bb = Ab ? Ub._drawWrapper : this._drawWrapper;
          if (bb.effect && bb._wasPreviouslyReady && bb._wasPreviouslyUsingInstances === ab) return !0
        }
        const Tb = this.oN(),
          Yb = Tb.vj(),
          eb = [],
          vb = [];
        let Lb = null,
          Rb = this._shaderPath,
          yb = this._options.uniforms,
          Zb = this._options.uniformBuffers,
          Db = this._options.samplers;
        Yb.getCaps().multiview && Tb.activeCamera && Tb.activeCamera.outputRenderTarget && Tb.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, eb.push("#define MULTIVIEW"), -1 !== yb.indexOf("viewProjection") && -1 === yb.indexOf("viewProjectionR") && yb.push("viewProjectionR"));
        for (let Mb = 0; Mb < this._options.defines.length; Mb++) {
          const bb = 0 === this._options.defines[Mb].indexOf("#define") ? this._options.defines[Mb] : `#define ${this._options.defines[Mb]}`;
          eb.push(bb)
        }
        for (let Mb = 0; Mb < this._options.attributes.length; Mb++) vb.push(this._options.attributes[Mb]);
        if (bb && bb.isVerticesDataPresent(Eb.m.ColorKind) && (-1 === vb.indexOf(Eb.m.ColorKind) && vb.push(Eb.m.ColorKind), eb.push("#define VERTEXCOLOR")), ab && (eb.push("#define INSTANCES"), (0, Xb.sb)(vb, this._materialHelperNeedsPreviousMatrices), bb?.hasThinInstances && (eb.push("#define THIN_INSTANCES"), bb && bb.isVerticesDataPresent(Eb.m.ColorInstanceKind) && (vb.push(Eb.m.ColorInstanceKind), eb.push("#define INSTANCESCOLOR")))), bb && bb.useBones && bb.computeBonesUsingShaders && bb.skeleton) {
          vb.push(Eb.m.MatricesIndicesKind), vb.push(Eb.m.MatricesWeightsKind), bb.numBoneInfluencers > 4 && (vb.push(Eb.m.MatricesIndicesExtraKind), vb.push(Eb.m.MatricesWeightsExtraKind));
          const ab = bb.skeleton;
          eb.push("#define NUM_BONE_INFLUENCERS " + bb.numBoneInfluencers), Lb = new Bb.d, Lb.addCPUSkinningFallback(0, bb), ab.isUsingTextureForMatrices ? (eb.push("#define BONETEXTURE"), -1 === yb.indexOf("boneTextureInfo") && yb.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (eb.push("#define BonesPerMesh " + (ab.bones.length + 1)), -1 === yb.indexOf("mBones") && yb.push("mBones"))
        } else eb.push("#define NUM_BONE_INFLUENCERS 0");
        let zb = 0;
        const xb = bb ? bb.morphTargetManager : null;
        if (xb) {
          const ab = -1 !== eb.indexOf("#define UV1"),
            Ub = -1 !== eb.indexOf("#define UV2"),
            Ab = -1 !== eb.indexOf("#define TANGENT"),
            Mb = -1 !== eb.indexOf("#define NORMAL"),
            Tb = -1 !== eb.indexOf("#define VERTEXCOLOR");
          zb = (0, Xb.N)(xb, eb, vb, bb, !0, Mb, Ab, ab, Ub, Tb), xb.isUsingTextureForTargets && (-1 === yb.indexOf("morphTargetTextureIndices") && yb.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), zb > 0 && (yb = yb.slice(), yb.push("morphTargetInfluences"), yb.push("morphTargetCount"), yb.push("morphTargetTextureInfo"), yb.push("morphTargetTextureIndices"))
        } else eb.push("#define NUM_MORPH_INFLUENCERS 0");
        if (bb) {
          const Ub = bb.bakedVertexAnimationManager;
          Ub && Ub.isEnabled && (eb.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === yb.indexOf("bakedVertexAnimationSettings") && yb.push("bakedVertexAnimationSettings"), -1 === yb.indexOf("bakedVertexAnimationTextureSizeInverted") && yb.push("bakedVertexAnimationTextureSizeInverted"), -1 === yb.indexOf("bakedVertexAnimationTime") && yb.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), ab && vb.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const Mb in this._textures)
          if (!this._textures[Mb].isReady()) return !1;
        for (const Mb in this._internalTextures)
          if (!this._internalTextures[Mb].isReady) return !1;
        bb && this.needAlphaTestingForMesh(bb) && eb.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, Pb.e)(yb), (0, Pb.k)(this, Tb, eb)), Tb.fogEnabled && bb?.applyFog && Tb.fogMode !== Mb.e.FOGMODE_NONE && (eb.push("#define FOG"), -1 === yb.indexOf("view") && yb.push("view"), -1 === yb.indexOf("vFogInfos") && yb.push("vFogInfos"), -1 === yb.indexOf("vFogColor") && yb.push("vFogColor")), this._useLogarithmicDepth && (eb.push("#define LOGARITHMICDEPTH"), -1 === yb.indexOf("logarithmicDepthConstant") && yb.push("logarithmicDepthConstant"));
        const ib = Ub ? Ub.getRenderingMesh() : bb;
        if (ib && this.useVertexPulling) {
          const bb = ib.geometry;
          bb && (this._vertexPullingMetadata = (0, jb.g)(bb), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((bb, ab) => {
            yb.push(`vp_${ab}_info`)
          }))), eb.push("#define USE_VERTEX_PULLING");
          const ab = ib.geometry?.getIndexBuffer();
          ab && !ib.isUnIndexed && (eb.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), ab.is32Bits && eb.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (yb = yb.slice(), Zb = Zb.slice(), Db = Db.slice(), Rb = this.customShaderNameResolve(this.name, yb, Zb, Db, eb, vb));
        const fb = Ab ? Ub._getDrawWrapper(void 0, !0) : this._drawWrapper,
          mb = fb?.effect ?? null,
          pb = fb?.defines ?? null,
          Nb = eb.join("\n");
        let Wb = mb;
        return pb !== Nb && (Wb = Yb.createEffect(Rb, {
          attributes: vb,
          uniformsNames: yb,
          uniformBuffersNames: Zb,
          samplers: Db,
          defines: Nb,
          fallbacks: Lb,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: zb
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, Yb), Ab ? Ub.setEffect(Wb, Nb, this._materialContext) : fb && fb.setEffect(Wb, Nb), this._onEffectCreatedObservable && (kb.effect = Wb, kb.subMesh = Ub ?? bb?.mD[0] ?? null, this._onEffectCreatedObservable.notifyObservers(kb))), fb._wasPreviouslyUsingInstances = !!ab, !!Wb?.isReady() && (mb !== Wb && Tb.resetCachedMaterial(), fb._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(bb, ab) {
        const Ub = ab ?? this.getEffect();
        if (!Ub) return;
        const Ab = this._options.uniforms; - 1 !== Ab.indexOf("world") && Ub.setMatrix("world", bb);
        const Mb = this.oN(); - 1 !== Ab.indexOf("worldView") && (bb.multiplyToRef(Mb.getViewMatrix(), this._cachedWorldViewMatrix), Ub.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== Ab.indexOf("worldViewProjection") && (bb.multiplyToRef(Mb.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), Ub.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== Ab.indexOf("view") && Ub.setMatrix("view", Mb.getViewMatrix())
      }
      bindForSubMesh(bb, ab, Ub) {
        this.bind(bb, ab, Ub._drawWrapperOverride?.effect, Ub)
      }
      bind(bb, ab, Ub, Ab) {
        const Mb = Ab && this._storeEffectOnSubMeshes,
          Tb = Ub ?? (Mb ? Ab.effect : this.getEffect());
        if (!Tb) return;
        const Eb = this.oN();
        this._activeEffect = Tb, this.bindOnlyWorldMatrix(bb, Ub);
        const Yb = this._options.uniformBuffers;
        let Bb = !1;
        if (Tb && Yb && Yb.length > 0 && Eb.vj().supportsUniformBuffers)
          for (let vb = 0; vb < Yb.length; ++vb) {
            switch (Yb[vb]) {
              case "Mesh":
                ab && (ab.getMeshUniformBuffer().bindToEffect(Tb, "Mesh"), ab.transferToEffect(bb));
                break;
              case "Scene":
                (0, Xb.w)(Tb, Eb.getSceneUniformBuffer()), Eb.finalizeSceneUbo(), Bb = !0
            }
          }
        const eb = ab && Mb ? this._mustRebind(Eb, Tb, Ab, ab.visibility) : Eb.getCachedMaterial() !== this;
        if (Tb && eb) {
          let bb;
          for (bb in Bb || -1 === this._options.uniforms.indexOf("view") || Tb.setMatrix("view", Eb.getViewMatrix()), Bb || -1 === this._options.uniforms.indexOf("projection") || Tb.setMatrix("projection", Eb.getProjectionMatrix()), Bb || -1 === this._options.uniforms.indexOf("viewProjection") || (Tb.setMatrix("viewProjection", Eb.getTransformMatrix()), this._multiview && Tb.setMatrix("viewProjectionR", Eb._transformMatrixR)), Eb.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && Tb.setVector3("cameraPosition", Eb.activeCamera.globalPosition), (0, Xb.h)(ab, Tb), (0, Pb.f)(Tb, this, Eb), this._vertexPullingMetadata && (0, jb.e)(Tb, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, Xb.u)(Mb ? Ab.materialDefines : Tb.defines, Tb, Eb), ab && (0, Xb.l)(Eb, ab, Tb), this._textures) Tb.setTexture(bb, this._textures[bb]);
          for (bb in this._internalTextures) Tb._bindTexture(bb, this._internalTextures[bb]);
          for (bb in this._textureArrays) Tb.setTextureArray(bb, this._textureArrays[bb]);
          for (bb in this._ints) Tb.setInt(bb, this._ints[bb]);
          for (bb in this._uints) Tb.setUInt(bb, this._uints[bb]);
          for (bb in this._floats) Tb.setFloat(bb, this._floats[bb]);
          for (bb in this._floatsArrays) Tb.setArray(bb, this._floatsArrays[bb]);
          for (bb in this._colors3) Tb.setColor3(bb, this._colors3[bb]);
          for (bb in this._colors3Arrays) Tb.setArray3(bb, this._colors3Arrays[bb]);
          for (bb in this._colors4) {
            const ab = this._colors4[bb];
            Tb.setFloat4(bb, ab.r, ab.g, ab.b, ab.a)
          }
          for (bb in this._colors4Arrays) Tb.setArray4(bb, this._colors4Arrays[bb]);
          for (bb in this._vectors2) Tb.setVector2(bb, this._vectors2[bb]);
          for (bb in this._vectors3) Tb.setVector3(bb, this._vectors3[bb]);
          for (bb in this._vectors4) Tb.setVector4(bb, this._vectors4[bb]);
          for (bb in this._quaternions) Tb.setQuaternion(bb, this._quaternions[bb]);
          for (bb in this._matrices) Tb.setMatrix(bb, this._matrices[bb]);
          for (bb in this._matrixArrays) Tb.setMatrices(bb, this._matrixArrays[bb]);
          for (bb in this._matrices3x3) Tb.setMatrix3x3(bb, this._matrices3x3[bb]);
          for (bb in this._matrices2x2) Tb.setMatrix2x2(bb, this._matrices2x2[bb]);
          for (bb in this._vectors2Arrays) Tb.setArray2(bb, this._vectors2Arrays[bb]);
          for (bb in this._vectors3Arrays) Tb.setArray3(bb, this._vectors3Arrays[bb]);
          for (bb in this._vectors4Arrays) Tb.setArray4(bb, this._vectors4Arrays[bb]);
          for (bb in this._quaternionsArrays) Tb.setArray4(bb, this._quaternionsArrays[bb]);
          for (bb in this._uniformBuffers) {
            const ab = this._uniformBuffers[bb].getBuffer();
            ab && Tb.bindUniformBuffer(ab, bb)
          }
          const Ub = Eb.vj(),
            Yb = Ub.setExternalTexture;
          if (Yb)
            for (bb in this._externalTextures) Yb.call(Ub, bb, this._externalTextures[bb]);
          const eb = Ub.setTextureSampler;
          if (eb)
            for (bb in this._textureSamplers) eb.call(Ub, bb, this._textureSamplers[bb]);
          const vb = Ub.setStorageBuffer;
          if (vb)
            for (bb in this._storageBuffers) vb.call(Ub, bb, this._storageBuffers[bb])
        }
        if (Tb && ab && (eb || !this.isFrozen)) {
          (0, Xb.v)(ab, Tb), ab.morphTargetManager && ab.morphTargetManager.isUsingTextureForTargets && ab.morphTargetManager._bind(Tb);
          const bb = ab.bakedVertexAnimationManager;
          if (bb && bb.isEnabled) {
            const bb = Mb ? Ab._drawWrapper : this._drawWrapper;
            ab.bakedVertexAnimationManager?.bind(Tb, !!bb._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(ab, Tb, Ab)
      }
      getActiveTextures() {
        const bb = super.getActiveTextures();
        for (const ab in this._textures) bb.push(this._textures[ab]);
        for (const ab in this._textureArrays) {
          const Ub = this._textureArrays[ab];
          for (let ab = 0; ab < Ub.length; ab++) bb.push(Ub[ab])
        }
        return bb
      }
      hasTexture(bb) {
        if (super.hasTexture(bb)) return !0;
        for (const Ub in this._textures)
          if (this._textures[Ub] === bb) return !0;
        const ab = bb.getInternalTexture();
        for (const Ub in this._internalTextures)
          if (this._internalTextures[Ub] === ab) return !0;
        for (const Ub in this._textureArrays) {
          const ab = this._textureArrays[Ub];
          for (let Ub = 0; Ub < ab.length; Ub++)
            if (ab[Ub] === bb) return !0
        }
        return !1
      }
      clone(bb) {
        const ab = Ab.b.Clone((() => new yb(bb, this.oN(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        ab.name = bb, ab.id = bb, "object" === typeof ab._shaderPath && (ab._shaderPath = {
          ...ab._shaderPath
        }), this._options = {
          ...this._options
        };
        const Ub = Object.keys(this._options);
        for (const Ab of Ub) {
          const bb = this._options[Ab];
          Array.isArray(bb) && (this._options[Ab] = bb.slice(0))
        }
        this.stencil.copyTo(ab.stencil);
        for (const Ab in this._textures) ab.setTexture(Ab, this._textures[Ab]);
        for (const Ab in this._internalTextures) ab.setInternalTexture(Ab, this._internalTextures[Ab]);
        for (const Ab in this._textureArrays) ab.setTextureArray(Ab, this._textureArrays[Ab]);
        for (const Ab in this._externalTextures) ab.setExternalTexture(Ab, this._externalTextures[Ab]);
        for (const Ab in this._ints) ab.setInt(Ab, this._ints[Ab]);
        for (const Ab in this._uints) ab.setUInt(Ab, this._uints[Ab]);
        for (const Ab in this._floats) ab.setFloat(Ab, this._floats[Ab]);
        for (const Ab in this._floatsArrays) ab.setFloats(Ab, this._floatsArrays[Ab]);
        for (const Ab in this._colors3) ab.setColor3(Ab, this._colors3[Ab]);
        for (const Ab in this._colors3Arrays) ab._colors3Arrays[Ab] = this._colors3Arrays[Ab];
        for (const Ab in this._colors4) ab.setColor4(Ab, this._colors4[Ab]);
        for (const Ab in this._colors4Arrays) ab._colors4Arrays[Ab] = this._colors4Arrays[Ab];
        for (const Ab in this._vectors2) ab.setVector2(Ab, this._vectors2[Ab]);
        for (const Ab in this._vectors3) ab.setVector3(Ab, this._vectors3[Ab]);
        for (const Ab in this._vectors4) ab.setVector4(Ab, this._vectors4[Ab]);
        for (const Ab in this._quaternions) ab.setQuaternion(Ab, this._quaternions[Ab]);
        for (const Ab in this._quaternionsArrays) ab._quaternionsArrays[Ab] = this._quaternionsArrays[Ab];
        for (const Ab in this._matrices) ab.setMatrix(Ab, this._matrices[Ab]);
        for (const Ab in this._matrixArrays) ab._matrixArrays[Ab] = this._matrixArrays[Ab].slice();
        for (const Ab in this._matrices3x3) ab.setMatrix3x3(Ab, this._matrices3x3[Ab]);
        for (const Ab in this._matrices2x2) ab.setMatrix2x2(Ab, this._matrices2x2[Ab]);
        for (const Ab in this._vectors2Arrays) ab.setArray2(Ab, this._vectors2Arrays[Ab]);
        for (const Ab in this._vectors3Arrays) ab.setArray3(Ab, this._vectors3Arrays[Ab]);
        for (const Ab in this._vectors4Arrays) ab.setArray4(Ab, this._vectors4Arrays[Ab]);
        for (const Ab in this._uniformBuffers) ab.setUniformBuffer(Ab, this._uniformBuffers[Ab]);
        for (const Ab in this._textureSamplers) ab.setTextureSampler(Ab, this._textureSamplers[Ab]);
        for (const Ab in this._storageBuffers) ab.setStorageBuffer(Ab, this._storageBuffers[Ab]);
        return ab
      }
      dispose(bb, ab, Ub) {
        if (ab) {
          let bb;
          for (bb in this._textures) this._textures[bb].dispose();
          for (bb in this._internalTextures) this._internalTextures[bb].dispose();
          for (bb in this._textureArrays) {
            const ab = this._textureArrays[bb];
            for (let bb = 0; bb < ab.length; bb++) ab[bb].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(bb, ab, Ub)
      }
      serialize() {
        const bb = Ab.b.Serialize(this);
        let ab;
        for (ab in bb.customType = "BABYLON.ShaderMaterial", bb.uniqueId = this.uniqueId, bb.options = this._options, bb.shaderPath = this._shaderPath, bb.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, bb.stencil = this.stencil.serialize(), bb.textures = {}, this._textures) bb.textures[ab] = this._textures[ab].serialize();
        for (ab in bb.textureArrays = {}, this._textureArrays) {
          bb.textureArrays[ab] = [];
          const Ub = this._textureArrays[ab];
          for (let Ab = 0; Ab < Ub.length; Ab++) bb.textureArrays[ab].push(Ub[Ab].serialize())
        }
        for (ab in bb.ints = {}, this._ints) bb.ints[ab] = this._ints[ab];
        for (ab in bb.uints = {}, this._uints) bb.uints[ab] = this._uints[ab];
        for (ab in bb.floats = {}, this._floats) bb.floats[ab] = this._floats[ab];
        for (ab in bb.floatsArrays = {}, this._floatsArrays) bb.floatsArrays[ab] = this._floatsArrays[ab];
        for (ab in bb.colors3 = {}, this._colors3) {
          const Ub = this._colors3[ab];
          bb.colors3[ab] = [Ub.r, Ub.g, Ub.b]
        }
        for (ab in bb.colors3Arrays = {}, this._colors3Arrays) bb.colors3Arrays[ab] = this._colors3Arrays[ab];
        for (ab in bb.colors4 = {}, this._colors4) {
          const Ub = this._colors4[ab];
          bb.colors4[ab] = [Ub.r, Ub.g, Ub.b, Ub.a]
        }
        for (ab in bb.colors4Arrays = {}, this._colors4Arrays) bb.colors4Arrays[ab] = this._colors4Arrays[ab];
        for (ab in bb.vectors2 = {}, this._vectors2) {
          const Ub = this._vectors2[ab];
          bb.vectors2[ab] = [Ub.x, Ub.y]
        }
        for (ab in bb.vectors3 = {}, this._vectors3) {
          const Ub = this._vectors3[ab];
          bb.vectors3[ab] = [Ub.x, Ub.y, Ub.z]
        }
        for (ab in bb.vectors4 = {}, this._vectors4) {
          const Ub = this._vectors4[ab];
          bb.vectors4[ab] = [Ub.x, Ub.y, Ub.z, Ub.w]
        }
        for (ab in bb.quaternions = {}, this._quaternions) bb.quaternions[ab] = this._quaternions[ab].qUb();
        for (ab in bb.matrices = {}, this._matrices) bb.matrices[ab] = this._matrices[ab].qUb();
        for (ab in bb.matrixArray = {}, this._matrixArrays) bb.matrixArray[ab] = this._matrixArrays[ab];
        for (ab in bb.matrices3x3 = {}, this._matrices3x3) bb.matrices3x3[ab] = this._matrices3x3[ab];
        for (ab in bb.matrices2x2 = {}, this._matrices2x2) bb.matrices2x2[ab] = this._matrices2x2[ab];
        for (ab in bb.vectors2Arrays = {}, this._vectors2Arrays) bb.vectors2Arrays[ab] = this._vectors2Arrays[ab];
        for (ab in bb.vectors3Arrays = {}, this._vectors3Arrays) bb.vectors3Arrays[ab] = this._vectors3Arrays[ab];
        for (ab in bb.vectors4Arrays = {}, this._vectors4Arrays) bb.vectors4Arrays[ab] = this._vectors4Arrays[ab];
        for (ab in bb.quaternionsArrays = {}, this._quaternionsArrays) bb.quaternionsArrays[ab] = this._quaternionsArrays[ab];
        return bb
      }
    }

    function Zb(bb, ab, Ub) {
      const Mb = Ab.b.Parse((() => new yb(bb.name, ab, bb.shaderPath, bb.options, bb.storeEffectOnSubMeshes)), bb, ab, Ub);
      let Eb;
      for (Eb in bb.stencil && Mb.stencil.parse(bb.stencil, ab, Ub), bb.textures) Mb.setTexture(Eb, Yb.e.Parse(bb.textures[Eb], ab, Ub));
      for (Eb in bb.textureArrays) {
        const Ab = bb.textureArrays[Eb],
          Tb = [];
        for (let bb = 0; bb < Ab.length; bb++) Tb.push(Yb.e.Parse(Ab[bb], ab, Ub));
        Mb.setTextureArray(Eb, Tb)
      }
      for (Eb in bb.ints) Mb.setInt(Eb, bb.ints[Eb]);
      for (Eb in bb.uints) Mb.setUInt(Eb, bb.uints[Eb]);
      for (Eb in bb.floats) Mb.setFloat(Eb, bb.floats[Eb]);
      for (Eb in bb.floatsArrays) Mb.setFloats(Eb, bb.floatsArrays[Eb]);
      for (Eb in bb.colors3) {
        const ab = bb.colors3[Eb];
        Mb.setColor3(Eb, {
          r: ab[0],
          g: ab[1],
          b: ab[2]
        })
      }
      for (Eb in bb.colors3Arrays) {
        const ab = bb.colors3Arrays[Eb].reduce(((bb, ab, Ub) => (Ub % 3 === 0 ? bb.push([ab]) : bb[bb.length - 1].push(ab), bb)), []).map((bb => ({
          r: bb[0],
          g: bb[1],
          b: bb[2]
        })));
        Mb.setColor3Array(Eb, ab)
      }
      for (Eb in bb.colors4) {
        const ab = bb.colors4[Eb];
        Mb.setColor4(Eb, {
          r: ab[0],
          g: ab[1],
          b: ab[2],
          a: ab[3]
        })
      }
      for (Eb in bb.colors4Arrays) {
        const ab = bb.colors4Arrays[Eb].reduce(((bb, ab, Ub) => (Ub % 4 === 0 ? bb.push([ab]) : bb[bb.length - 1].push(ab), bb)), []).map((bb => ({
          r: bb[0],
          g: bb[1],
          b: bb[2],
          a: bb[3]
        })));
        Mb.setColor4Array(Eb, ab)
      }
      for (Eb in bb.vectors2) {
        const ab = bb.vectors2[Eb];
        Mb.setVector2(Eb, {
          x: ab[0],
          y: ab[1]
        })
      }
      for (Eb in bb.vectors3) {
        const ab = bb.vectors3[Eb];
        Mb.setVector3(Eb, {
          x: ab[0],
          y: ab[1],
          z: ab[2]
        })
      }
      for (Eb in bb.vectors4) {
        const ab = bb.vectors4[Eb];
        Mb.setVector4(Eb, {
          x: ab[0],
          y: ab[1],
          z: ab[2],
          w: ab[3]
        })
      }
      for (Eb in bb.quaternions) Mb.setQuaternion(Eb, Tb.e.FromArray(bb.quaternions[Eb]));
      for (Eb in bb.matrices) Mb.setMatrix(Eb, Tb.b.FromArray(bb.matrices[Eb]));
      const Bb = Mb;
      for (Eb in bb.matrixArray) Bb._matrixArrays[Eb] = new Float32Array(bb.matrixArray[Eb]);
      for (Eb in bb.matrices3x3) Mb.setMatrix3x3(Eb, bb.matrices3x3[Eb]);
      for (Eb in bb.matrices2x2) Mb.setMatrix2x2(Eb, bb.matrices2x2[Eb]);
      for (Eb in bb.vectors2Arrays) Mb.setArray2(Eb, bb.vectors2Arrays[Eb]);
      for (Eb in bb.vectors3Arrays) Mb.setArray3(Eb, bb.vectors3Arrays[Eb]);
      for (Eb in bb.vectors4Arrays) Mb.setArray4(Eb, bb.vectors4Arrays[Eb]);
      for (Eb in bb.quaternionsArrays) Mb.setArray4(Eb, bb.quaternionsArrays[Eb]);
      return Mb
    }
    async function Db(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((Mb, Tb) => {
        const Eb = new eb.d;
        Eb.addEventListener("readystatechange", (() => {
          if (4 == Eb.readyState)
            if (200 == Eb.status) {
              const ab = Zb(JSON.parse(Eb.responseText), Ub || Lb.d.LastCreatedScene, Ab);
              bb && (ab.name = bb), Mb(ab)
            } else Tb("Unable to load the ShaderMaterial")
        })), Eb.open("GET", ab), Eb.send()
      }))
    }
    async function zb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Ab = this?.SnippetUrl ?? yb.SnippetUrl;
      return await new Promise(((Mb, Tb) => {
        const Eb = new eb.d;
        Eb.addEventListener("readystatechange", (() => {
          if (4 == Eb.readyState)
            if (200 == Eb.status) {
              const Ab = JSON.parse(JSON.parse(Eb.responseText).jsonPayload),
                Tb = Zb(JSON.parse(Ab.shaderMaterial), ab || Lb.d.LastCreatedScene, Ub);
              Tb.snippetId = bb, Mb(Tb)
            } else Tb("Unable to load the snippet " + bb)
        })), Eb.open("GET", Ab + "/" + bb.replace(/#/g, "/")), Eb.send()
      }))
    }
    yb.SnippetUrl = "https://snippet.babylonjs.com";
    const xb = zb;
    let ib = !1;

    function fb() {
      ib || (ib = !0, yb.Parse = Zb, yb.ParseFromFileAsync = Db, yb.ParseFromSnippetAsync = zb, yb.CreateFromSnippetAsync = xb, (0, Rb.f)("BABYLON.ShaderMaterial", yb))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);