export const id = 254;
export const ids = [254];
export const modules = {
  39889: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Yb,
      g: () => Lb,
      i: () => Nb,
      k: () => Vb,
      m: () => Cb,
      q: () => eb
    });
    var kb = sb(39441),
      Wb = sb(39524),
      ab = sb(36656),
      Tb = sb(39576),
      Ub = sb(39895),
      Ib = sb(39777),
      Hb = sb(39475),
      fb = sb(39774),
      Mb = sb(36677),
      Xb = sb(39767),
      nb = sb(39761),
      mb = sb(39787),
      lb = sb(36698);
    const Qb = {
      effect: null,
      subMesh: null
    };
    class eb extends fb.d {
      constructor(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(bb, cb, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new ab.e, this._cachedWorldViewProjectionMatrix = new ab.e, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = sb, this._options = {
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
          ...kb
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
      setTexture(bb, cb) {
        return -1 === this._options.samplers.indexOf(bb) && this._options.samplers.push(bb), this._textures[bb] = cb, this
      }
      setInternalTexture(bb, cb) {
        return -1 === this._options.samplers.indexOf(bb) && this._options.samplers.push(bb), this._internalTextures[bb] = cb, this
      }
      removeTexture(bb) {
        delete this._textures[bb]
      }
      setTextureArray(bb, cb) {
        return -1 === this._options.samplers.indexOf(bb) && this._options.samplers.push(bb), this._checkUniform(bb), this._textureArrays[bb] = cb, this
      }
      setExternalTexture(bb, cb) {
        return -1 === this._options.externalTextures.indexOf(bb) && this._options.externalTextures.push(bb), this._externalTextures[bb] = cb, this
      }
      setFloat(bb, cb) {
        return this._checkUniform(bb), this._floats[bb] = cb, this
      }
      setInt(bb, cb) {
        return this._checkUniform(bb), this._ints[bb] = cb, this
      }
      setUInt(bb, cb) {
        return this._checkUniform(bb), this._uints[bb] = cb, this
      }
      setFloats(bb, cb) {
        return this._checkUniform(bb), this._floatsArrays[bb] = cb, this
      }
      setColor3(bb, cb) {
        return this._checkUniform(bb), this._colors3[bb] = cb, this
      }
      setColor3Array(bb, cb) {
        return this._checkUniform(bb), this._colors3Arrays[bb] = cb.reduce(((bb, cb) => (bb.push(cb.r, cb.g, cb.b), bb)), []), this
      }
      setColor4(bb, cb) {
        return this._checkUniform(bb), this._colors4[bb] = cb, this
      }
      setColor4Array(bb, cb) {
        return this._checkUniform(bb), this._colors4Arrays[bb] = cb.reduce(((bb, cb) => (bb.push(cb.r, cb.g, cb.b, cb.a), bb)), []), this
      }
      setVector2(bb, cb) {
        return this._checkUniform(bb), this._vectors2[bb] = cb, this
      }
      setVector3(bb, cb) {
        return this._checkUniform(bb), this._vectors3[bb] = cb, this
      }
      setVector4(bb, cb) {
        return this._checkUniform(bb), this._vectors4[bb] = cb, this
      }
      setQuaternion(bb, cb) {
        return this._checkUniform(bb), this._quaternions[bb] = cb, this
      }
      setQuaternionArray(bb, cb) {
        return this._checkUniform(bb), this._quaternionsArrays[bb] = cb.reduce(((bb, cb) => (cb.toArray(bb, bb.length), bb)), []), this
      }
      setMatrix(bb, cb) {
        return this._checkUniform(bb), this._matrices[bb] = cb, this
      }
      setMatrices(bb, cb) {
        this._checkUniform(bb);
        const sb = new Float32Array(16 * cb.length);
        for (let kb = 0; kb < cb.length; kb++) {
          cb[kb].copyToArray(sb, 16 * kb)
        }
        return this._matrixArrays[bb] = sb, this
      }
      setMatrix3x3(bb, cb) {
        return this._checkUniform(bb), this._matrices3x3[bb] = cb, this
      }
      setMatrix2x2(bb, cb) {
        return this._checkUniform(bb), this._matrices2x2[bb] = cb, this
      }
      setArray2(bb, cb) {
        return this._checkUniform(bb), this._vectors2Arrays[bb] = cb, this
      }
      setArray3(bb, cb) {
        return this._checkUniform(bb), this._vectors3Arrays[bb] = cb, this
      }
      setArray4(bb, cb) {
        return this._checkUniform(bb), this._vectors4Arrays[bb] = cb, this
      }
      setUniformBuffer(bb, cb) {
        return -1 === this._options.uniformBuffers.indexOf(bb) && this._options.uniformBuffers.push(bb), this._uniformBuffers[bb] = cb, this
      }
      setTextureSampler(bb, cb) {
        return -1 === this._options.samplerObjects.indexOf(bb) && this._options.samplerObjects.push(bb), this._textureSamplers[bb] = cb, this
      }
      setStorageBuffer(bb, cb) {
        return -1 === this._options.storageBuffers.indexOf(bb) && this._options.storageBuffers.push(bb), this._storageBuffers[bb] = cb, this
      }
      setDefine(bb, cb) {
        const sb = bb.trimEnd() + " ",
          kb = this.options.defines.findIndex((cb => cb === bb || cb.startsWith(sb)));
        return kb >= 0 && this.options.defines.splice(kb, 1), ("boolean" !== typeof cb || cb) && this.options.defines.push(sb + cb), this
      }
      isReadyForSubMesh(bb, cb, sb) {
        return this.isReady(bb, sb, cb)
      }
      isReady(bb, cb, sb) {
        const kb = sb && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const bb = kb ? sb._drawWrapper : this._drawWrapper;
          if (bb.effect && bb._wasPreviouslyReady && bb._wasPreviouslyUsingInstances === cb) return !0
        }
        const ab = this.EY(),
          Ub = ab.Sm(),
          Hb = [],
          fb = [];
        let Mb = null,
          lb = this._shaderPath,
          eb = this._options.uniforms,
          Cb = this._options.uniformBuffers,
          Nb = this._options.samplers;
        Ub.getCaps().multiview && ab.activeCamera && ab.activeCamera.outputRenderTarget && ab.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, Hb.push("#define MULTIVIEW"), -1 !== eb.indexOf("viewProjection") && -1 === eb.indexOf("viewProjectionR") && eb.push("viewProjectionR"));
        for (let Wb = 0; Wb < this._options.defines.length; Wb++) {
          const bb = 0 === this._options.defines[Wb].indexOf("#define") ? this._options.defines[Wb] : `#define ${this._options.defines[Wb]}`;
          Hb.push(bb)
        }
        for (let Wb = 0; Wb < this._options.attributes.length; Wb++) fb.push(this._options.attributes[Wb]);
        if (bb && bb.isVerticesDataPresent(Tb.l.ColorKind) && (-1 === fb.indexOf(Tb.l.ColorKind) && fb.push(Tb.l.ColorKind), Hb.push("#define VERTEXCOLOR")), cb && (Hb.push("#define INSTANCES"), (0, nb.Db)(fb, this._materialHelperNeedsPreviousMatrices), bb?.hasThinInstances && (Hb.push("#define THIN_INSTANCES"), bb && bb.isVerticesDataPresent(Tb.l.ColorInstanceKind) && (fb.push(Tb.l.ColorInstanceKind), Hb.push("#define INSTANCESCOLOR")))), bb && bb.useBones && bb.computeBonesUsingShaders && bb.skeleton) {
          fb.push(Tb.l.MatricesIndicesKind), fb.push(Tb.l.MatricesWeightsKind), bb.numBoneInfluencers > 4 && (fb.push(Tb.l.MatricesIndicesExtraKind), fb.push(Tb.l.MatricesWeightsExtraKind));
          const cb = bb.skeleton;
          Hb.push("#define NUM_BONE_INFLUENCERS " + bb.numBoneInfluencers), Mb = new Ib.b, Mb.addCPUSkinningFallback(0, bb), cb.isUsingTextureForMatrices ? (Hb.push("#define BONETEXTURE"), -1 === eb.indexOf("boneTextureInfo") && eb.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (Hb.push("#define BonesPerMesh " + (cb.bones.length + 1)), -1 === eb.indexOf("mBones") && eb.push("mBones"))
        } else Hb.push("#define NUM_BONE_INFLUENCERS 0");
        let Vb = 0;
        const Lb = bb ? bb.morphTargetManager : null;
        if (Lb) {
          const cb = -1 !== Hb.indexOf("#define UV1"),
            sb = -1 !== Hb.indexOf("#define UV2"),
            kb = -1 !== Hb.indexOf("#define TANGENT"),
            Wb = -1 !== Hb.indexOf("#define NORMAL"),
            ab = -1 !== Hb.indexOf("#define VERTEXCOLOR");
          Vb = (0, nb.R)(Lb, Hb, fb, bb, !0, Wb, kb, cb, sb, ab), Lb.isUsingTextureForTargets && (-1 === eb.indexOf("morphTargetTextureIndices") && eb.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), Vb > 0 && (eb = eb.slice(), eb.push("morphTargetInfluences"), eb.push("morphTargetCount"), eb.push("morphTargetTextureInfo"), eb.push("morphTargetTextureIndices"))
        } else Hb.push("#define NUM_MORPH_INFLUENCERS 0");
        if (bb) {
          const sb = bb.bakedVertexAnimationManager;
          sb && sb.isEnabled && (Hb.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === eb.indexOf("bakedVertexAnimationSettings") && eb.push("bakedVertexAnimationSettings"), -1 === eb.indexOf("bakedVertexAnimationTextureSizeInverted") && eb.push("bakedVertexAnimationTextureSizeInverted"), -1 === eb.indexOf("bakedVertexAnimationTime") && eb.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), cb && fb.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const Wb in this._textures)
          if (!this._textures[Wb].isReady()) return !1;
        for (const Wb in this._internalTextures)
          if (!this._internalTextures[Wb].isReady) return !1;
        bb && this.needAlphaTestingForMesh(bb) && Hb.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, Xb.c)(eb), (0, Xb.j)(this, ab, Hb)), ab.fogEnabled && bb?.applyFog && ab.fogMode !== Wb.c.FOGMODE_NONE && (Hb.push("#define FOG"), -1 === eb.indexOf("view") && eb.push("view"), -1 === eb.indexOf("vFogInfos") && eb.push("vFogInfos"), -1 === eb.indexOf("vFogColor") && eb.push("vFogColor")), this._useLogarithmicDepth && (Hb.push("#define LOGARITHMICDEPTH"), -1 === eb.indexOf("logarithmicDepthConstant") && eb.push("logarithmicDepthConstant"));
        const ub = sb ? sb.getRenderingMesh() : bb;
        if (ub && this.useVertexPulling) {
          const bb = ub.geometry;
          bb && (this._vertexPullingMetadata = (0, mb.h)(bb), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((bb, cb) => {
            eb.push(`vp_${cb}_info`)
          }))), Hb.push("#define USE_VERTEX_PULLING");
          const cb = ub.geometry?.getIndexBuffer();
          cb && !ub.isUnIndexed && (Hb.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), cb.is32Bits && Hb.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (eb = eb.slice(), Cb = Cb.slice(), Nb = Nb.slice(), lb = this.customShaderNameResolve(this.name, eb, Cb, Nb, Hb, fb));
        const Yb = kb ? sb._getDrawWrapper(void 0, !0) : this._drawWrapper,
          hb = Yb?.effect ?? null,
          Jb = Yb?.defines ?? null,
          gb = Hb.join("\n");
        let Bb = hb;
        return Jb !== gb && (Bb = Ub.createEffect(lb, {
          attributes: fb,
          uniformsNames: eb,
          uniformBuffersNames: Cb,
          samplers: Nb,
          defines: gb,
          fallbacks: Mb,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: Vb
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, Ub), kb ? sb.setEffect(Bb, gb, this._materialContext) : Yb && Yb.setEffect(Bb, gb), this._onEffectCreatedObservable && (Qb.effect = Bb, Qb.subMesh = sb ?? bb?.XV[0] ?? null, this._onEffectCreatedObservable.notifyObservers(Qb))), Yb._wasPreviouslyUsingInstances = !!cb, !!Bb?.isReady() && (hb !== Bb && ab.resetCachedMaterial(), Yb._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(bb, cb) {
        const sb = cb ?? this.getEffect();
        if (!sb) return;
        const kb = this._options.uniforms; - 1 !== kb.indexOf("world") && sb.setMatrix("world", bb);
        const Wb = this.EY(); - 1 !== kb.indexOf("worldView") && (bb.multiplyToRef(Wb.getViewMatrix(), this._cachedWorldViewMatrix), sb.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== kb.indexOf("worldViewProjection") && (bb.multiplyToRef(Wb.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), sb.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== kb.indexOf("view") && sb.setMatrix("view", Wb.getViewMatrix())
      }
      bindForSubMesh(bb, cb, sb) {
        this.bind(bb, cb, sb._drawWrapperOverride?.effect, sb)
      }
      bind(bb, cb, sb, kb) {
        const Wb = kb && this._storeEffectOnSubMeshes,
          ab = sb ?? (Wb ? kb.effect : this.getEffect());
        if (!ab) return;
        const Tb = this.EY();
        this._activeEffect = ab, this.bindOnlyWorldMatrix(bb, sb);
        const Ub = this._options.uniformBuffers;
        let Ib = !1;
        if (ab && Ub && Ub.length > 0 && Tb.Sm().supportsUniformBuffers)
          for (let fb = 0; fb < Ub.length; ++fb) {
            switch (Ub[fb]) {
              case "Mesh":
                cb && (cb.getMeshUniformBuffer().bindToEffect(ab, "Mesh"), cb.transferToEffect(bb));
                break;
              case "Scene":
                (0, nb.v)(ab, Tb.getSceneUniformBuffer()), Tb.finalizeSceneUbo(), Ib = !0
            }
          }
        const Hb = cb && Wb ? this._mustRebind(Tb, ab, kb, cb.visibility) : Tb.getCachedMaterial() !== this;
        if (ab && Hb) {
          let bb;
          for (bb in Ib || -1 === this._options.uniforms.indexOf("view") || ab.setMatrix("view", Tb.getViewMatrix()), Ib || -1 === this._options.uniforms.indexOf("projection") || ab.setMatrix("projection", Tb.getProjectionMatrix()), Ib || -1 === this._options.uniforms.indexOf("viewProjection") || (ab.setMatrix("viewProjection", Tb.getTransformMatrix()), this._multiview && ab.setMatrix("viewProjectionR", Tb._transformMatrixR)), Tb.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && ab.setVector3("cameraPosition", Tb.activeCamera.globalPosition), (0, nb.e)(cb, ab), (0, Xb.f)(ab, this, Tb), this._vertexPullingMetadata && (0, mb.d)(ab, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, nb.s)(Wb ? kb.materialDefines : ab.defines, ab, Tb), cb && (0, nb.g)(Tb, cb, ab), this._textures) ab.setTexture(bb, this._textures[bb]);
          for (bb in this._internalTextures) ab._bindTexture(bb, this._internalTextures[bb]);
          for (bb in this._textureArrays) ab.setTextureArray(bb, this._textureArrays[bb]);
          for (bb in this._ints) ab.setInt(bb, this._ints[bb]);
          for (bb in this._uints) ab.setUInt(bb, this._uints[bb]);
          for (bb in this._floats) ab.setFloat(bb, this._floats[bb]);
          for (bb in this._floatsArrays) ab.setArray(bb, this._floatsArrays[bb]);
          for (bb in this._colors3) ab.setColor3(bb, this._colors3[bb]);
          for (bb in this._colors3Arrays) ab.setArray3(bb, this._colors3Arrays[bb]);
          for (bb in this._colors4) {
            const cb = this._colors4[bb];
            ab.setFloat4(bb, cb.r, cb.g, cb.b, cb.a)
          }
          for (bb in this._colors4Arrays) ab.setArray4(bb, this._colors4Arrays[bb]);
          for (bb in this._vectors2) ab.setVector2(bb, this._vectors2[bb]);
          for (bb in this._vectors3) ab.setVector3(bb, this._vectors3[bb]);
          for (bb in this._vectors4) ab.setVector4(bb, this._vectors4[bb]);
          for (bb in this._quaternions) ab.setQuaternion(bb, this._quaternions[bb]);
          for (bb in this._matrices) ab.setMatrix(bb, this._matrices[bb]);
          for (bb in this._matrixArrays) ab.setMatrices(bb, this._matrixArrays[bb]);
          for (bb in this._matrices3x3) ab.setMatrix3x3(bb, this._matrices3x3[bb]);
          for (bb in this._matrices2x2) ab.setMatrix2x2(bb, this._matrices2x2[bb]);
          for (bb in this._vectors2Arrays) ab.setArray2(bb, this._vectors2Arrays[bb]);
          for (bb in this._vectors3Arrays) ab.setArray3(bb, this._vectors3Arrays[bb]);
          for (bb in this._vectors4Arrays) ab.setArray4(bb, this._vectors4Arrays[bb]);
          for (bb in this._quaternionsArrays) ab.setArray4(bb, this._quaternionsArrays[bb]);
          for (bb in this._uniformBuffers) {
            const cb = this._uniformBuffers[bb].getBuffer();
            cb && ab.bindUniformBuffer(cb, bb)
          }
          const sb = Tb.Sm(),
            Ub = sb.setExternalTexture;
          if (Ub)
            for (bb in this._externalTextures) Ub.call(sb, bb, this._externalTextures[bb]);
          const Hb = sb.setTextureSampler;
          if (Hb)
            for (bb in this._textureSamplers) Hb.call(sb, bb, this._textureSamplers[bb]);
          const fb = sb.setStorageBuffer;
          if (fb)
            for (bb in this._storageBuffers) fb.call(sb, bb, this._storageBuffers[bb])
        }
        if (ab && cb && (Hb || !this.isFrozen)) {
          (0, nb.t)(cb, ab), cb.morphTargetManager && cb.morphTargetManager.isUsingTextureForTargets && cb.morphTargetManager._bind(ab);
          const bb = cb.bakedVertexAnimationManager;
          if (bb && bb.isEnabled) {
            const bb = Wb ? kb._drawWrapper : this._drawWrapper;
            cb.bakedVertexAnimationManager?.bind(ab, !!bb._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(cb, ab, kb)
      }
      getActiveTextures() {
        const bb = super.getActiveTextures();
        for (const cb in this._textures) bb.push(this._textures[cb]);
        for (const cb in this._textureArrays) {
          const sb = this._textureArrays[cb];
          for (let cb = 0; cb < sb.length; cb++) bb.push(sb[cb])
        }
        return bb
      }
      hasTexture(bb) {
        if (super.hasTexture(bb)) return !0;
        for (const sb in this._textures)
          if (this._textures[sb] === bb) return !0;
        const cb = bb.getInternalTexture();
        for (const sb in this._internalTextures)
          if (this._internalTextures[sb] === cb) return !0;
        for (const sb in this._textureArrays) {
          const cb = this._textureArrays[sb];
          for (let sb = 0; sb < cb.length; sb++)
            if (cb[sb] === bb) return !0
        }
        return !1
      }
      clone(bb) {
        const cb = kb.d.Clone((() => new eb(bb, this.EY(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        cb.name = bb, cb.id = bb, "object" === typeof cb._shaderPath && (cb._shaderPath = {
          ...cb._shaderPath
        }), this._options = {
          ...this._options
        };
        const sb = Object.keys(this._options);
        for (const kb of sb) {
          const bb = this._options[kb];
          Array.isArray(bb) && (this._options[kb] = bb.slice(0))
        }
        this.stencil.copyTo(cb.stencil);
        for (const kb in this._textures) cb.setTexture(kb, this._textures[kb]);
        for (const kb in this._internalTextures) cb.setInternalTexture(kb, this._internalTextures[kb]);
        for (const kb in this._textureArrays) cb.setTextureArray(kb, this._textureArrays[kb]);
        for (const kb in this._externalTextures) cb.setExternalTexture(kb, this._externalTextures[kb]);
        for (const kb in this._ints) cb.setInt(kb, this._ints[kb]);
        for (const kb in this._uints) cb.setUInt(kb, this._uints[kb]);
        for (const kb in this._floats) cb.setFloat(kb, this._floats[kb]);
        for (const kb in this._floatsArrays) cb.setFloats(kb, this._floatsArrays[kb]);
        for (const kb in this._colors3) cb.setColor3(kb, this._colors3[kb]);
        for (const kb in this._colors3Arrays) cb._colors3Arrays[kb] = this._colors3Arrays[kb];
        for (const kb in this._colors4) cb.setColor4(kb, this._colors4[kb]);
        for (const kb in this._colors4Arrays) cb._colors4Arrays[kb] = this._colors4Arrays[kb];
        for (const kb in this._vectors2) cb.setVector2(kb, this._vectors2[kb]);
        for (const kb in this._vectors3) cb.setVector3(kb, this._vectors3[kb]);
        for (const kb in this._vectors4) cb.setVector4(kb, this._vectors4[kb]);
        for (const kb in this._quaternions) cb.setQuaternion(kb, this._quaternions[kb]);
        for (const kb in this._quaternionsArrays) cb._quaternionsArrays[kb] = this._quaternionsArrays[kb];
        for (const kb in this._matrices) cb.setMatrix(kb, this._matrices[kb]);
        for (const kb in this._matrixArrays) cb._matrixArrays[kb] = this._matrixArrays[kb].slice();
        for (const kb in this._matrices3x3) cb.setMatrix3x3(kb, this._matrices3x3[kb]);
        for (const kb in this._matrices2x2) cb.setMatrix2x2(kb, this._matrices2x2[kb]);
        for (const kb in this._vectors2Arrays) cb.setArray2(kb, this._vectors2Arrays[kb]);
        for (const kb in this._vectors3Arrays) cb.setArray3(kb, this._vectors3Arrays[kb]);
        for (const kb in this._vectors4Arrays) cb.setArray4(kb, this._vectors4Arrays[kb]);
        for (const kb in this._uniformBuffers) cb.setUniformBuffer(kb, this._uniformBuffers[kb]);
        for (const kb in this._textureSamplers) cb.setTextureSampler(kb, this._textureSamplers[kb]);
        for (const kb in this._storageBuffers) cb.setStorageBuffer(kb, this._storageBuffers[kb]);
        return cb
      }
      dispose(bb, cb, sb) {
        if (cb) {
          let bb;
          for (bb in this._textures) this._textures[bb].dispose();
          for (bb in this._internalTextures) this._internalTextures[bb].dispose();
          for (bb in this._textureArrays) {
            const cb = this._textureArrays[bb];
            for (let bb = 0; bb < cb.length; bb++) cb[bb].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(bb, cb, sb)
      }
      serialize() {
        const bb = kb.d.Serialize(this);
        let cb;
        for (cb in bb.customType = "BABYLON.ShaderMaterial", bb.uniqueId = this.uniqueId, bb.options = this._options, bb.shaderPath = this._shaderPath, bb.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, bb.stencil = this.stencil.serialize(), bb.textures = {}, this._textures) bb.textures[cb] = this._textures[cb].serialize();
        for (cb in bb.textureArrays = {}, this._textureArrays) {
          bb.textureArrays[cb] = [];
          const sb = this._textureArrays[cb];
          for (let kb = 0; kb < sb.length; kb++) bb.textureArrays[cb].push(sb[kb].serialize())
        }
        for (cb in bb.ints = {}, this._ints) bb.ints[cb] = this._ints[cb];
        for (cb in bb.uints = {}, this._uints) bb.uints[cb] = this._uints[cb];
        for (cb in bb.floats = {}, this._floats) bb.floats[cb] = this._floats[cb];
        for (cb in bb.floatsArrays = {}, this._floatsArrays) bb.floatsArrays[cb] = this._floatsArrays[cb];
        for (cb in bb.colors3 = {}, this._colors3) {
          const sb = this._colors3[cb];
          bb.colors3[cb] = [sb.r, sb.g, sb.b]
        }
        for (cb in bb.colors3Arrays = {}, this._colors3Arrays) bb.colors3Arrays[cb] = this._colors3Arrays[cb];
        for (cb in bb.colors4 = {}, this._colors4) {
          const sb = this._colors4[cb];
          bb.colors4[cb] = [sb.r, sb.g, sb.b, sb.a]
        }
        for (cb in bb.colors4Arrays = {}, this._colors4Arrays) bb.colors4Arrays[cb] = this._colors4Arrays[cb];
        for (cb in bb.vectors2 = {}, this._vectors2) {
          const sb = this._vectors2[cb];
          bb.vectors2[cb] = [sb.x, sb.y]
        }
        for (cb in bb.vectors3 = {}, this._vectors3) {
          const sb = this._vectors3[cb];
          bb.vectors3[cb] = [sb.x, sb.y, sb.z]
        }
        for (cb in bb.vectors4 = {}, this._vectors4) {
          const sb = this._vectors4[cb];
          bb.vectors4[cb] = [sb.x, sb.y, sb.z, sb.w]
        }
        for (cb in bb.quaternions = {}, this._quaternions) bb.quaternions[cb] = this._quaternions[cb].Osb();
        for (cb in bb.matrices = {}, this._matrices) bb.matrices[cb] = this._matrices[cb].Osb();
        for (cb in bb.matrixArray = {}, this._matrixArrays) bb.matrixArray[cb] = this._matrixArrays[cb];
        for (cb in bb.matrices3x3 = {}, this._matrices3x3) bb.matrices3x3[cb] = this._matrices3x3[cb];
        for (cb in bb.matrices2x2 = {}, this._matrices2x2) bb.matrices2x2[cb] = this._matrices2x2[cb];
        for (cb in bb.vectors2Arrays = {}, this._vectors2Arrays) bb.vectors2Arrays[cb] = this._vectors2Arrays[cb];
        for (cb in bb.vectors3Arrays = {}, this._vectors3Arrays) bb.vectors3Arrays[cb] = this._vectors3Arrays[cb];
        for (cb in bb.vectors4Arrays = {}, this._vectors4Arrays) bb.vectors4Arrays[cb] = this._vectors4Arrays[cb];
        for (cb in bb.quaternionsArrays = {}, this._quaternionsArrays) bb.quaternionsArrays[cb] = this._quaternionsArrays[cb];
        return bb
      }
    }

    function Cb(bb, cb, sb) {
      const Wb = kb.d.Parse((() => new eb(bb.name, cb, bb.shaderPath, bb.options, bb.storeEffectOnSubMeshes)), bb, cb, sb);
      let Tb;
      for (Tb in bb.stencil && Wb.stencil.parse(bb.stencil, cb, sb), bb.textures) Wb.setTexture(Tb, Ub.e.Parse(bb.textures[Tb], cb, sb));
      for (Tb in bb.textureArrays) {
        const kb = bb.textureArrays[Tb],
          ab = [];
        for (let bb = 0; bb < kb.length; bb++) ab.push(Ub.e.Parse(kb[bb], cb, sb));
        Wb.setTextureArray(Tb, ab)
      }
      for (Tb in bb.ints) Wb.setInt(Tb, bb.ints[Tb]);
      for (Tb in bb.uints) Wb.setUInt(Tb, bb.uints[Tb]);
      for (Tb in bb.floats) Wb.setFloat(Tb, bb.floats[Tb]);
      for (Tb in bb.floatsArrays) Wb.setFloats(Tb, bb.floatsArrays[Tb]);
      for (Tb in bb.colors3) {
        const cb = bb.colors3[Tb];
        Wb.setColor3(Tb, {
          r: cb[0],
          g: cb[1],
          b: cb[2]
        })
      }
      for (Tb in bb.colors3Arrays) {
        const cb = bb.colors3Arrays[Tb].reduce(((bb, cb, sb) => (sb % 3 === 0 ? bb.push([cb]) : bb[bb.length - 1].push(cb), bb)), []).map((bb => ({
          r: bb[0],
          g: bb[1],
          b: bb[2]
        })));
        Wb.setColor3Array(Tb, cb)
      }
      for (Tb in bb.colors4) {
        const cb = bb.colors4[Tb];
        Wb.setColor4(Tb, {
          r: cb[0],
          g: cb[1],
          b: cb[2],
          a: cb[3]
        })
      }
      for (Tb in bb.colors4Arrays) {
        const cb = bb.colors4Arrays[Tb].reduce(((bb, cb, sb) => (sb % 4 === 0 ? bb.push([cb]) : bb[bb.length - 1].push(cb), bb)), []).map((bb => ({
          r: bb[0],
          g: bb[1],
          b: bb[2],
          a: bb[3]
        })));
        Wb.setColor4Array(Tb, cb)
      }
      for (Tb in bb.vectors2) {
        const cb = bb.vectors2[Tb];
        Wb.setVector2(Tb, {
          x: cb[0],
          y: cb[1]
        })
      }
      for (Tb in bb.vectors3) {
        const cb = bb.vectors3[Tb];
        Wb.setVector3(Tb, {
          x: cb[0],
          y: cb[1],
          z: cb[2]
        })
      }
      for (Tb in bb.vectors4) {
        const cb = bb.vectors4[Tb];
        Wb.setVector4(Tb, {
          x: cb[0],
          y: cb[1],
          z: cb[2],
          w: cb[3]
        })
      }
      for (Tb in bb.quaternions) Wb.setQuaternion(Tb, ab.f.FromArray(bb.quaternions[Tb]));
      for (Tb in bb.matrices) Wb.setMatrix(Tb, ab.e.FromArray(bb.matrices[Tb]));
      const Ib = Wb;
      for (Tb in bb.matrixArray) Ib._matrixArrays[Tb] = new Float32Array(bb.matrixArray[Tb]);
      for (Tb in bb.matrices3x3) Wb.setMatrix3x3(Tb, bb.matrices3x3[Tb]);
      for (Tb in bb.matrices2x2) Wb.setMatrix2x2(Tb, bb.matrices2x2[Tb]);
      for (Tb in bb.vectors2Arrays) Wb.setArray2(Tb, bb.vectors2Arrays[Tb]);
      for (Tb in bb.vectors3Arrays) Wb.setArray3(Tb, bb.vectors3Arrays[Tb]);
      for (Tb in bb.vectors4Arrays) Wb.setArray4(Tb, bb.vectors4Arrays[Tb]);
      for (Tb in bb.quaternionsArrays) Wb.setArray4(Tb, bb.quaternionsArrays[Tb]);
      return Wb
    }
    async function Nb(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((Wb, ab) => {
        const Tb = new Hb.c;
        Tb.addEventListener("readystatechange", (() => {
          if (4 == Tb.readyState)
            if (200 == Tb.status) {
              const cb = Cb(JSON.parse(Tb.responseText), sb || Mb.d.LastCreatedScene, kb);
              bb && (cb.name = bb), Wb(cb)
            } else ab("Unable to load the ShaderMaterial")
        })), Tb.open("GET", cb), Tb.send()
      }))
    }
    async function Vb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const kb = this?.SnippetUrl ?? eb.SnippetUrl;
      return await new Promise(((Wb, ab) => {
        const Tb = new Hb.c;
        Tb.addEventListener("readystatechange", (() => {
          if (4 == Tb.readyState)
            if (200 == Tb.status) {
              const kb = JSON.parse(JSON.parse(Tb.responseText).jsonPayload),
                ab = Cb(JSON.parse(kb.shaderMaterial), cb || Mb.d.LastCreatedScene, sb);
              ab.snippetId = bb, Wb(ab)
            } else ab("Unable to load the snippet " + bb)
        })), Tb.open("GET", kb + "/" + bb.replace(/#/g, "/")), Tb.send()
      }))
    }
    eb.SnippetUrl = "https://snippet.babylonjs.com";
    const Lb = Vb;
    let ub = !1;

    function Yb() {
      ub || (ub = !0, eb.Parse = Cb, eb.ParseFromFileAsync = Nb, eb.ParseFromSnippetAsync = Vb, eb.CreateFromSnippetAsync = Lb, (0, lb.h)("BABYLON.ShaderMaterial", eb))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);