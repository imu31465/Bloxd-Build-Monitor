export const id = 300;
export const ids = [300];
export const modules = {
  42147: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => xb,
      e: () => zb,
      f: () => mb,
      h: () => hb,
      l: () => sb,
      n: () => Bb
    });
    var eb = Mb(41697),
      Hb = Mb(41764),
      pb = Mb(38285),
      Vb = Mb(41816),
      gb = Mb(42152),
      lb = Mb(42026),
      Lb = Mb(41727),
      Ib = Mb(42017),
      Ob = Mb(38313),
      Ub = Mb(42004),
      tb = Mb(41999),
      Cb = Mb(42050),
      Eb = Mb(38333);
    const Fb = {
      effect: null,
      subMesh: null
    };
    class Bb extends Ib.d {
      constructor(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(bb, wb, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new pb.b, this._cachedWorldViewProjectionMatrix = new pb.b, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = Mb, this._options = {
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
          ...eb
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
      setTexture(bb, wb) {
        return -1 === this._options.samplers.indexOf(bb) && this._options.samplers.push(bb), this._textures[bb] = wb, this
      }
      setInternalTexture(bb, wb) {
        return -1 === this._options.samplers.indexOf(bb) && this._options.samplers.push(bb), this._internalTextures[bb] = wb, this
      }
      removeTexture(bb) {
        delete this._textures[bb]
      }
      setTextureArray(bb, wb) {
        return -1 === this._options.samplers.indexOf(bb) && this._options.samplers.push(bb), this._checkUniform(bb), this._textureArrays[bb] = wb, this
      }
      setExternalTexture(bb, wb) {
        return -1 === this._options.externalTextures.indexOf(bb) && this._options.externalTextures.push(bb), this._externalTextures[bb] = wb, this
      }
      setFloat(bb, wb) {
        return this._checkUniform(bb), this._floats[bb] = wb, this
      }
      setInt(bb, wb) {
        return this._checkUniform(bb), this._ints[bb] = wb, this
      }
      setUInt(bb, wb) {
        return this._checkUniform(bb), this._uints[bb] = wb, this
      }
      setFloats(bb, wb) {
        return this._checkUniform(bb), this._floatsArrays[bb] = wb, this
      }
      setColor3(bb, wb) {
        return this._checkUniform(bb), this._colors3[bb] = wb, this
      }
      setColor3Array(bb, wb) {
        return this._checkUniform(bb), this._colors3Arrays[bb] = wb.reduce(((bb, wb) => (bb.push(wb.r, wb.g, wb.b), bb)), []), this
      }
      setColor4(bb, wb) {
        return this._checkUniform(bb), this._colors4[bb] = wb, this
      }
      setColor4Array(bb, wb) {
        return this._checkUniform(bb), this._colors4Arrays[bb] = wb.reduce(((bb, wb) => (bb.push(wb.r, wb.g, wb.b, wb.a), bb)), []), this
      }
      setVector2(bb, wb) {
        return this._checkUniform(bb), this._vectors2[bb] = wb, this
      }
      setVector3(bb, wb) {
        return this._checkUniform(bb), this._vectors3[bb] = wb, this
      }
      setVector4(bb, wb) {
        return this._checkUniform(bb), this._vectors4[bb] = wb, this
      }
      setQuaternion(bb, wb) {
        return this._checkUniform(bb), this._quaternions[bb] = wb, this
      }
      setQuaternionArray(bb, wb) {
        return this._checkUniform(bb), this._quaternionsArrays[bb] = wb.reduce(((bb, wb) => (wb.toArray(bb, bb.length), bb)), []), this
      }
      setMatrix(bb, wb) {
        return this._checkUniform(bb), this._matrices[bb] = wb, this
      }
      setMatrices(bb, wb) {
        this._checkUniform(bb);
        const Mb = new Float32Array(16 * wb.length);
        for (let eb = 0; eb < wb.length; eb++) {
          wb[eb].copyToArray(Mb, 16 * eb)
        }
        return this._matrixArrays[bb] = Mb, this
      }
      setMatrix3x3(bb, wb) {
        return this._checkUniform(bb), this._matrices3x3[bb] = wb, this
      }
      setMatrix2x2(bb, wb) {
        return this._checkUniform(bb), this._matrices2x2[bb] = wb, this
      }
      setArray2(bb, wb) {
        return this._checkUniform(bb), this._vectors2Arrays[bb] = wb, this
      }
      setArray3(bb, wb) {
        return this._checkUniform(bb), this._vectors3Arrays[bb] = wb, this
      }
      setArray4(bb, wb) {
        return this._checkUniform(bb), this._vectors4Arrays[bb] = wb, this
      }
      setUniformBuffer(bb, wb) {
        return -1 === this._options.uniformBuffers.indexOf(bb) && this._options.uniformBuffers.push(bb), this._uniformBuffers[bb] = wb, this
      }
      setTextureSampler(bb, wb) {
        return -1 === this._options.samplerObjects.indexOf(bb) && this._options.samplerObjects.push(bb), this._textureSamplers[bb] = wb, this
      }
      setStorageBuffer(bb, wb) {
        return -1 === this._options.storageBuffers.indexOf(bb) && this._options.storageBuffers.push(bb), this._storageBuffers[bb] = wb, this
      }
      setDefine(bb, wb) {
        const Mb = bb.trimEnd() + " ",
          eb = this.options.defines.findIndex((wb => wb === bb || wb.startsWith(Mb)));
        return eb >= 0 && this.options.defines.splice(eb, 1), ("boolean" !== typeof wb || wb) && this.options.defines.push(Mb + wb), this
      }
      isReadyForSubMesh(bb, wb, Mb) {
        return this.isReady(bb, Mb, wb)
      }
      isReady(bb, wb, Mb) {
        const eb = Mb && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const bb = eb ? Mb._drawWrapper : this._drawWrapper;
          if (bb.effect && bb._wasPreviouslyReady && bb._wasPreviouslyUsingInstances === wb) return !0
        }
        const pb = this.RJ(),
          gb = pb.DC(),
          Lb = [],
          Ib = [];
        let Ob = null,
          Eb = this._shaderPath,
          Bb = this._options.uniforms,
          sb = this._options.uniformBuffers,
          mb = this._options.samplers;
        gb.getCaps().multiview && pb.activeCamera && pb.activeCamera.outputRenderTarget && pb.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, Lb.push("#define MULTIVIEW"), -1 !== Bb.indexOf("viewProjection") && -1 === Bb.indexOf("viewProjectionR") && Bb.push("viewProjectionR"));
        for (let Hb = 0; Hb < this._options.defines.length; Hb++) {
          const bb = 0 === this._options.defines[Hb].indexOf("#define") ? this._options.defines[Hb] : `#define ${this._options.defines[Hb]}`;
          Lb.push(bb)
        }
        for (let Hb = 0; Hb < this._options.attributes.length; Hb++) Ib.push(this._options.attributes[Hb]);
        if (bb && bb.isVerticesDataPresent(Vb.i.ColorKind) && (-1 === Ib.indexOf(Vb.i.ColorKind) && Ib.push(Vb.i.ColorKind), Lb.push("#define VERTEXCOLOR")), wb && (Lb.push("#define INSTANCES"), (0, tb.sb)(Ib, this._materialHelperNeedsPreviousMatrices), bb?.hasThinInstances && (Lb.push("#define THIN_INSTANCES"), bb && bb.isVerticesDataPresent(Vb.i.ColorInstanceKind) && (Ib.push(Vb.i.ColorInstanceKind), Lb.push("#define INSTANCESCOLOR")))), bb && bb.useBones && bb.computeBonesUsingShaders && bb.skeleton) {
          Ib.push(Vb.i.MatricesIndicesKind), Ib.push(Vb.i.MatricesWeightsKind), bb.numBoneInfluencers > 4 && (Ib.push(Vb.i.MatricesIndicesExtraKind), Ib.push(Vb.i.MatricesWeightsExtraKind));
          const wb = bb.skeleton;
          Lb.push("#define NUM_BONE_INFLUENCERS " + bb.numBoneInfluencers), Ob = new lb.d, Ob.addCPUSkinningFallback(0, bb), wb.isUsingTextureForMatrices ? (Lb.push("#define BONETEXTURE"), -1 === Bb.indexOf("boneTextureInfo") && Bb.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (Lb.push("#define BonesPerMesh " + (wb.bones.length + 1)), -1 === Bb.indexOf("mBones") && Bb.push("mBones"))
        } else Lb.push("#define NUM_BONE_INFLUENCERS 0");
        let hb = 0;
        const zb = bb ? bb.morphTargetManager : null;
        if (zb) {
          const wb = -1 !== Lb.indexOf("#define UV1"),
            Mb = -1 !== Lb.indexOf("#define UV2"),
            eb = -1 !== Lb.indexOf("#define TANGENT"),
            Hb = -1 !== Lb.indexOf("#define NORMAL"),
            pb = -1 !== Lb.indexOf("#define VERTEXCOLOR");
          hb = (0, tb.P)(zb, Lb, Ib, bb, !0, Hb, eb, wb, Mb, pb), zb.isUsingTextureForTargets && (-1 === Bb.indexOf("morphTargetTextureIndices") && Bb.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), hb > 0 && (Bb = Bb.slice(), Bb.push("morphTargetInfluences"), Bb.push("morphTargetCount"), Bb.push("morphTargetTextureInfo"), Bb.push("morphTargetTextureIndices"))
        } else Lb.push("#define NUM_MORPH_INFLUENCERS 0");
        if (bb) {
          const Mb = bb.bakedVertexAnimationManager;
          Mb && Mb.isEnabled && (Lb.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === Bb.indexOf("bakedVertexAnimationSettings") && Bb.push("bakedVertexAnimationSettings"), -1 === Bb.indexOf("bakedVertexAnimationTextureSizeInverted") && Bb.push("bakedVertexAnimationTextureSizeInverted"), -1 === Bb.indexOf("bakedVertexAnimationTime") && Bb.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), wb && Ib.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const Hb in this._textures)
          if (!this._textures[Hb].isReady()) return !1;
        for (const Hb in this._internalTextures)
          if (!this._internalTextures[Hb].isReady) return !1;
        bb && this.needAlphaTestingForMesh(bb) && Lb.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, Ub.d)(Bb), (0, Ub.j)(this, pb, Lb)), pb.fogEnabled && bb?.applyFog && pb.fogMode !== Hb.g.FOGMODE_NONE && (Lb.push("#define FOG"), -1 === Bb.indexOf("view") && Bb.push("view"), -1 === Bb.indexOf("vFogInfos") && Bb.push("vFogInfos"), -1 === Bb.indexOf("vFogColor") && Bb.push("vFogColor")), this._useLogarithmicDepth && (Lb.push("#define LOGARITHMICDEPTH"), -1 === Bb.indexOf("logarithmicDepthConstant") && Bb.push("logarithmicDepthConstant"));
        const Xb = Mb ? Mb.getRenderingMesh() : bb;
        if (Xb && this.useVertexPulling) {
          const bb = Xb.geometry;
          bb && (this._vertexPullingMetadata = (0, Cb.e)(bb), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((bb, wb) => {
            Bb.push(`vp_${wb}_info`)
          }))), Lb.push("#define USE_VERTEX_PULLING");
          const wb = Xb.geometry?.getIndexBuffer();
          wb && !Xb.isUnIndexed && (Lb.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), wb.is32Bits && Lb.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (Bb = Bb.slice(), sb = sb.slice(), mb = mb.slice(), Eb = this.customShaderNameResolve(this.name, Bb, sb, mb, Lb, Ib));
        const xb = eb ? Mb._getDrawWrapper(void 0, !0) : this._drawWrapper,
          jb = xb?.effect ?? null,
          Kb = xb?.defines ?? null,
          rb = Lb.join("\n");
        let Rb = jb;
        return Kb !== rb && (Rb = gb.createEffect(Eb, {
          attributes: Ib,
          uniformsNames: Bb,
          uniformBuffersNames: sb,
          samplers: mb,
          defines: rb,
          fallbacks: Ob,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: hb
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, gb), eb ? Mb.setEffect(Rb, rb, this._materialContext) : xb && xb.setEffect(Rb, rb), this._onEffectCreatedObservable && (Fb.effect = Rb, Fb.subMesh = Mb ?? bb?.oR[0] ?? null, this._onEffectCreatedObservable.notifyObservers(Fb))), xb._wasPreviouslyUsingInstances = !!wb, !!Rb?.isReady() && (jb !== Rb && pb.resetCachedMaterial(), xb._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(bb, wb) {
        const Mb = wb ?? this.getEffect();
        if (!Mb) return;
        const eb = this._options.uniforms; - 1 !== eb.indexOf("world") && Mb.setMatrix("world", bb);
        const Hb = this.RJ(); - 1 !== eb.indexOf("worldView") && (bb.multiplyToRef(Hb.getViewMatrix(), this._cachedWorldViewMatrix), Mb.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== eb.indexOf("worldViewProjection") && (bb.multiplyToRef(Hb.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), Mb.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== eb.indexOf("view") && Mb.setMatrix("view", Hb.getViewMatrix())
      }
      bindForSubMesh(bb, wb, Mb) {
        this.bind(bb, wb, Mb._drawWrapperOverride?.effect, Mb)
      }
      bind(bb, wb, Mb, eb) {
        const Hb = eb && this._storeEffectOnSubMeshes,
          pb = Mb ?? (Hb ? eb.effect : this.getEffect());
        if (!pb) return;
        const Vb = this.RJ();
        this._activeEffect = pb, this.bindOnlyWorldMatrix(bb, Mb);
        const gb = this._options.uniformBuffers;
        let lb = !1;
        if (pb && gb && gb.length > 0 && Vb.DC().supportsUniformBuffers)
          for (let Ib = 0; Ib < gb.length; ++Ib) {
            switch (gb[Ib]) {
              case "Mesh":
                wb && (wb.getMeshUniformBuffer().bindToEffect(pb, "Mesh"), wb.transferToEffect(bb));
                break;
              case "Scene":
                (0, tb.y)(pb, Vb.getSceneUniformBuffer()), Vb.finalizeSceneUbo(), lb = !0
            }
          }
        const Lb = wb && Hb ? this._mustRebind(Vb, pb, eb, wb.visibility) : Vb.getCachedMaterial() !== this;
        if (pb && Lb) {
          let bb;
          for (bb in lb || -1 === this._options.uniforms.indexOf("view") || pb.setMatrix("view", Vb.getViewMatrix()), lb || -1 === this._options.uniforms.indexOf("projection") || pb.setMatrix("projection", Vb.getProjectionMatrix()), lb || -1 === this._options.uniforms.indexOf("viewProjection") || (pb.setMatrix("viewProjection", Vb.getTransformMatrix()), this._multiview && pb.setMatrix("viewProjectionR", Vb._transformMatrixR)), Vb.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && pb.setVector3("cameraPosition", Vb.activeCamera.globalPosition), (0, tb.g)(wb, pb), (0, Ub.f)(pb, this, Vb), this._vertexPullingMetadata && (0, Cb.c)(pb, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, tb.v)(Hb ? eb.materialDefines : pb.defines, pb, Vb), wb && (0, tb.j)(Vb, wb, pb), this._textures) pb.setTexture(bb, this._textures[bb]);
          for (bb in this._internalTextures) pb._bindTexture(bb, this._internalTextures[bb]);
          for (bb in this._textureArrays) pb.setTextureArray(bb, this._textureArrays[bb]);
          for (bb in this._ints) pb.setInt(bb, this._ints[bb]);
          for (bb in this._uints) pb.setUInt(bb, this._uints[bb]);
          for (bb in this._floats) pb.setFloat(bb, this._floats[bb]);
          for (bb in this._floatsArrays) pb.setArray(bb, this._floatsArrays[bb]);
          for (bb in this._colors3) pb.setColor3(bb, this._colors3[bb]);
          for (bb in this._colors3Arrays) pb.setArray3(bb, this._colors3Arrays[bb]);
          for (bb in this._colors4) {
            const wb = this._colors4[bb];
            pb.setFloat4(bb, wb.r, wb.g, wb.b, wb.a)
          }
          for (bb in this._colors4Arrays) pb.setArray4(bb, this._colors4Arrays[bb]);
          for (bb in this._vectors2) pb.setVector2(bb, this._vectors2[bb]);
          for (bb in this._vectors3) pb.setVector3(bb, this._vectors3[bb]);
          for (bb in this._vectors4) pb.setVector4(bb, this._vectors4[bb]);
          for (bb in this._quaternions) pb.setQuaternion(bb, this._quaternions[bb]);
          for (bb in this._matrices) pb.setMatrix(bb, this._matrices[bb]);
          for (bb in this._matrixArrays) pb.setMatrices(bb, this._matrixArrays[bb]);
          for (bb in this._matrices3x3) pb.setMatrix3x3(bb, this._matrices3x3[bb]);
          for (bb in this._matrices2x2) pb.setMatrix2x2(bb, this._matrices2x2[bb]);
          for (bb in this._vectors2Arrays) pb.setArray2(bb, this._vectors2Arrays[bb]);
          for (bb in this._vectors3Arrays) pb.setArray3(bb, this._vectors3Arrays[bb]);
          for (bb in this._vectors4Arrays) pb.setArray4(bb, this._vectors4Arrays[bb]);
          for (bb in this._quaternionsArrays) pb.setArray4(bb, this._quaternionsArrays[bb]);
          for (bb in this._uniformBuffers) {
            const wb = this._uniformBuffers[bb].getBuffer();
            wb && pb.bindUniformBuffer(wb, bb)
          }
          const Mb = Vb.DC(),
            gb = Mb.setExternalTexture;
          if (gb)
            for (bb in this._externalTextures) gb.call(Mb, bb, this._externalTextures[bb]);
          const Lb = Mb.setTextureSampler;
          if (Lb)
            for (bb in this._textureSamplers) Lb.call(Mb, bb, this._textureSamplers[bb]);
          const Ib = Mb.setStorageBuffer;
          if (Ib)
            for (bb in this._storageBuffers) Ib.call(Mb, bb, this._storageBuffers[bb])
        }
        if (pb && wb && (Lb || !this.isFrozen)) {
          (0, tb.x)(wb, pb), wb.morphTargetManager && wb.morphTargetManager.isUsingTextureForTargets && wb.morphTargetManager._bind(pb);
          const bb = wb.bakedVertexAnimationManager;
          if (bb && bb.isEnabled) {
            const bb = Hb ? eb._drawWrapper : this._drawWrapper;
            wb.bakedVertexAnimationManager?.bind(pb, !!bb._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(wb, pb, eb)
      }
      getActiveTextures() {
        const bb = super.getActiveTextures();
        for (const wb in this._textures) bb.push(this._textures[wb]);
        for (const wb in this._textureArrays) {
          const Mb = this._textureArrays[wb];
          for (let wb = 0; wb < Mb.length; wb++) bb.push(Mb[wb])
        }
        return bb
      }
      hasTexture(bb) {
        if (super.hasTexture(bb)) return !0;
        for (const Mb in this._textures)
          if (this._textures[Mb] === bb) return !0;
        const wb = bb.getInternalTexture();
        for (const Mb in this._internalTextures)
          if (this._internalTextures[Mb] === wb) return !0;
        for (const Mb in this._textureArrays) {
          const wb = this._textureArrays[Mb];
          for (let Mb = 0; Mb < wb.length; Mb++)
            if (wb[Mb] === bb) return !0
        }
        return !1
      }
      clone(bb) {
        const wb = eb.d.Clone((() => new Bb(bb, this.RJ(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        wb.name = bb, wb.id = bb, "object" === typeof wb._shaderPath && (wb._shaderPath = {
          ...wb._shaderPath
        }), this._options = {
          ...this._options
        };
        const Mb = Object.keys(this._options);
        for (const eb of Mb) {
          const bb = this._options[eb];
          Array.isArray(bb) && (this._options[eb] = bb.slice(0))
        }
        this.stencil.copyTo(wb.stencil);
        for (const eb in this._textures) wb.setTexture(eb, this._textures[eb]);
        for (const eb in this._internalTextures) wb.setInternalTexture(eb, this._internalTextures[eb]);
        for (const eb in this._textureArrays) wb.setTextureArray(eb, this._textureArrays[eb]);
        for (const eb in this._externalTextures) wb.setExternalTexture(eb, this._externalTextures[eb]);
        for (const eb in this._ints) wb.setInt(eb, this._ints[eb]);
        for (const eb in this._uints) wb.setUInt(eb, this._uints[eb]);
        for (const eb in this._floats) wb.setFloat(eb, this._floats[eb]);
        for (const eb in this._floatsArrays) wb.setFloats(eb, this._floatsArrays[eb]);
        for (const eb in this._colors3) wb.setColor3(eb, this._colors3[eb]);
        for (const eb in this._colors3Arrays) wb._colors3Arrays[eb] = this._colors3Arrays[eb];
        for (const eb in this._colors4) wb.setColor4(eb, this._colors4[eb]);
        for (const eb in this._colors4Arrays) wb._colors4Arrays[eb] = this._colors4Arrays[eb];
        for (const eb in this._vectors2) wb.setVector2(eb, this._vectors2[eb]);
        for (const eb in this._vectors3) wb.setVector3(eb, this._vectors3[eb]);
        for (const eb in this._vectors4) wb.setVector4(eb, this._vectors4[eb]);
        for (const eb in this._quaternions) wb.setQuaternion(eb, this._quaternions[eb]);
        for (const eb in this._quaternionsArrays) wb._quaternionsArrays[eb] = this._quaternionsArrays[eb];
        for (const eb in this._matrices) wb.setMatrix(eb, this._matrices[eb]);
        for (const eb in this._matrixArrays) wb._matrixArrays[eb] = this._matrixArrays[eb].slice();
        for (const eb in this._matrices3x3) wb.setMatrix3x3(eb, this._matrices3x3[eb]);
        for (const eb in this._matrices2x2) wb.setMatrix2x2(eb, this._matrices2x2[eb]);
        for (const eb in this._vectors2Arrays) wb.setArray2(eb, this._vectors2Arrays[eb]);
        for (const eb in this._vectors3Arrays) wb.setArray3(eb, this._vectors3Arrays[eb]);
        for (const eb in this._vectors4Arrays) wb.setArray4(eb, this._vectors4Arrays[eb]);
        for (const eb in this._uniformBuffers) wb.setUniformBuffer(eb, this._uniformBuffers[eb]);
        for (const eb in this._textureSamplers) wb.setTextureSampler(eb, this._textureSamplers[eb]);
        for (const eb in this._storageBuffers) wb.setStorageBuffer(eb, this._storageBuffers[eb]);
        return wb
      }
      dispose(bb, wb, Mb) {
        if (wb) {
          let bb;
          for (bb in this._textures) this._textures[bb].dispose();
          for (bb in this._internalTextures) this._internalTextures[bb].dispose();
          for (bb in this._textureArrays) {
            const wb = this._textureArrays[bb];
            for (let bb = 0; bb < wb.length; bb++) wb[bb].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(bb, wb, Mb)
      }
      serialize() {
        const bb = eb.d.Serialize(this);
        let wb;
        for (wb in bb.customType = "BABYLON.ShaderMaterial", bb.uniqueId = this.uniqueId, bb.options = this._options, bb.shaderPath = this._shaderPath, bb.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, bb.stencil = this.stencil.serialize(), bb.textures = {}, this._textures) bb.textures[wb] = this._textures[wb].serialize();
        for (wb in bb.textureArrays = {}, this._textureArrays) {
          bb.textureArrays[wb] = [];
          const Mb = this._textureArrays[wb];
          for (let eb = 0; eb < Mb.length; eb++) bb.textureArrays[wb].push(Mb[eb].serialize())
        }
        for (wb in bb.ints = {}, this._ints) bb.ints[wb] = this._ints[wb];
        for (wb in bb.uints = {}, this._uints) bb.uints[wb] = this._uints[wb];
        for (wb in bb.floats = {}, this._floats) bb.floats[wb] = this._floats[wb];
        for (wb in bb.floatsArrays = {}, this._floatsArrays) bb.floatsArrays[wb] = this._floatsArrays[wb];
        for (wb in bb.colors3 = {}, this._colors3) {
          const Mb = this._colors3[wb];
          bb.colors3[wb] = [Mb.r, Mb.g, Mb.b]
        }
        for (wb in bb.colors3Arrays = {}, this._colors3Arrays) bb.colors3Arrays[wb] = this._colors3Arrays[wb];
        for (wb in bb.colors4 = {}, this._colors4) {
          const Mb = this._colors4[wb];
          bb.colors4[wb] = [Mb.r, Mb.g, Mb.b, Mb.a]
        }
        for (wb in bb.colors4Arrays = {}, this._colors4Arrays) bb.colors4Arrays[wb] = this._colors4Arrays[wb];
        for (wb in bb.vectors2 = {}, this._vectors2) {
          const Mb = this._vectors2[wb];
          bb.vectors2[wb] = [Mb.x, Mb.y]
        }
        for (wb in bb.vectors3 = {}, this._vectors3) {
          const Mb = this._vectors3[wb];
          bb.vectors3[wb] = [Mb.x, Mb.y, Mb.z]
        }
        for (wb in bb.vectors4 = {}, this._vectors4) {
          const Mb = this._vectors4[wb];
          bb.vectors4[wb] = [Mb.x, Mb.y, Mb.z, Mb.w]
        }
        for (wb in bb.quaternions = {}, this._quaternions) bb.quaternions[wb] = this._quaternions[wb].ppb();
        for (wb in bb.matrices = {}, this._matrices) bb.matrices[wb] = this._matrices[wb].ppb();
        for (wb in bb.matrixArray = {}, this._matrixArrays) bb.matrixArray[wb] = this._matrixArrays[wb];
        for (wb in bb.matrices3x3 = {}, this._matrices3x3) bb.matrices3x3[wb] = this._matrices3x3[wb];
        for (wb in bb.matrices2x2 = {}, this._matrices2x2) bb.matrices2x2[wb] = this._matrices2x2[wb];
        for (wb in bb.vectors2Arrays = {}, this._vectors2Arrays) bb.vectors2Arrays[wb] = this._vectors2Arrays[wb];
        for (wb in bb.vectors3Arrays = {}, this._vectors3Arrays) bb.vectors3Arrays[wb] = this._vectors3Arrays[wb];
        for (wb in bb.vectors4Arrays = {}, this._vectors4Arrays) bb.vectors4Arrays[wb] = this._vectors4Arrays[wb];
        for (wb in bb.quaternionsArrays = {}, this._quaternionsArrays) bb.quaternionsArrays[wb] = this._quaternionsArrays[wb];
        return bb
      }
    }

    function sb(bb, wb, Mb) {
      const Hb = eb.d.Parse((() => new Bb(bb.name, wb, bb.shaderPath, bb.options, bb.storeEffectOnSubMeshes)), bb, wb, Mb);
      let Vb;
      for (Vb in bb.stencil && Hb.stencil.parse(bb.stencil, wb, Mb), bb.textures) Hb.setTexture(Vb, gb.f.Parse(bb.textures[Vb], wb, Mb));
      for (Vb in bb.textureArrays) {
        const eb = bb.textureArrays[Vb],
          pb = [];
        for (let bb = 0; bb < eb.length; bb++) pb.push(gb.f.Parse(eb[bb], wb, Mb));
        Hb.setTextureArray(Vb, pb)
      }
      for (Vb in bb.ints) Hb.setInt(Vb, bb.ints[Vb]);
      for (Vb in bb.uints) Hb.setUInt(Vb, bb.uints[Vb]);
      for (Vb in bb.floats) Hb.setFloat(Vb, bb.floats[Vb]);
      for (Vb in bb.floatsArrays) Hb.setFloats(Vb, bb.floatsArrays[Vb]);
      for (Vb in bb.colors3) {
        const wb = bb.colors3[Vb];
        Hb.setColor3(Vb, {
          r: wb[0],
          g: wb[1],
          b: wb[2]
        })
      }
      for (Vb in bb.colors3Arrays) {
        const wb = bb.colors3Arrays[Vb].reduce(((bb, wb, Mb) => (Mb % 3 === 0 ? bb.push([wb]) : bb[bb.length - 1].push(wb), bb)), []).map((bb => ({
          r: bb[0],
          g: bb[1],
          b: bb[2]
        })));
        Hb.setColor3Array(Vb, wb)
      }
      for (Vb in bb.colors4) {
        const wb = bb.colors4[Vb];
        Hb.setColor4(Vb, {
          r: wb[0],
          g: wb[1],
          b: wb[2],
          a: wb[3]
        })
      }
      for (Vb in bb.colors4Arrays) {
        const wb = bb.colors4Arrays[Vb].reduce(((bb, wb, Mb) => (Mb % 4 === 0 ? bb.push([wb]) : bb[bb.length - 1].push(wb), bb)), []).map((bb => ({
          r: bb[0],
          g: bb[1],
          b: bb[2],
          a: bb[3]
        })));
        Hb.setColor4Array(Vb, wb)
      }
      for (Vb in bb.vectors2) {
        const wb = bb.vectors2[Vb];
        Hb.setVector2(Vb, {
          x: wb[0],
          y: wb[1]
        })
      }
      for (Vb in bb.vectors3) {
        const wb = bb.vectors3[Vb];
        Hb.setVector3(Vb, {
          x: wb[0],
          y: wb[1],
          z: wb[2]
        })
      }
      for (Vb in bb.vectors4) {
        const wb = bb.vectors4[Vb];
        Hb.setVector4(Vb, {
          x: wb[0],
          y: wb[1],
          z: wb[2],
          w: wb[3]
        })
      }
      for (Vb in bb.quaternions) Hb.setQuaternion(Vb, pb.e.FromArray(bb.quaternions[Vb]));
      for (Vb in bb.matrices) Hb.setMatrix(Vb, pb.b.FromArray(bb.matrices[Vb]));
      const lb = Hb;
      for (Vb in bb.matrixArray) lb._matrixArrays[Vb] = new Float32Array(bb.matrixArray[Vb]);
      for (Vb in bb.matrices3x3) Hb.setMatrix3x3(Vb, bb.matrices3x3[Vb]);
      for (Vb in bb.matrices2x2) Hb.setMatrix2x2(Vb, bb.matrices2x2[Vb]);
      for (Vb in bb.vectors2Arrays) Hb.setArray2(Vb, bb.vectors2Arrays[Vb]);
      for (Vb in bb.vectors3Arrays) Hb.setArray3(Vb, bb.vectors3Arrays[Vb]);
      for (Vb in bb.vectors4Arrays) Hb.setArray4(Vb, bb.vectors4Arrays[Vb]);
      for (Vb in bb.quaternionsArrays) Hb.setArray4(Vb, bb.quaternionsArrays[Vb]);
      return Hb
    }
    async function mb(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((Hb, pb) => {
        const Vb = new Lb.b;
        Vb.addEventListener("readystatechange", (() => {
          if (4 == Vb.readyState)
            if (200 == Vb.status) {
              const wb = sb(JSON.parse(Vb.responseText), Mb || Ob.e.LastCreatedScene, eb);
              bb && (wb.name = bb), Hb(wb)
            } else pb("Unable to load the ShaderMaterial")
        })), Vb.open("GET", wb), Vb.send()
      }))
    }
    async function hb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const eb = this?.SnippetUrl ?? Bb.SnippetUrl;
      return await new Promise(((Hb, pb) => {
        const Vb = new Lb.b;
        Vb.addEventListener("readystatechange", (() => {
          if (4 == Vb.readyState)
            if (200 == Vb.status) {
              const eb = JSON.parse(JSON.parse(Vb.responseText).jsonPayload),
                pb = sb(JSON.parse(eb.shaderMaterial), wb || Ob.e.LastCreatedScene, Mb);
              pb.snippetId = bb, Hb(pb)
            } else pb("Unable to load the snippet " + bb)
        })), Vb.open("GET", eb + "/" + bb.replace(/#/g, "/")), Vb.send()
      }))
    }
    Bb.SnippetUrl = "https://snippet.babylonjs.com";
    const zb = hb;
    let Xb = !1;

    function xb() {
      Xb || (Xb = !0, Bb.Parse = sb, Bb.ParseFromFileAsync = mb, Bb.ParseFromSnippetAsync = hb, Bb.CreateFromSnippetAsync = zb, (0, Eb.e)("BABYLON.ShaderMaterial", Bb))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);