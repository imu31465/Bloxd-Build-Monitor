export const id = 240;
export const ids = [240];
export const modules = {
  38485: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => lc,
      g: () => hc,
      k: () => zB,
      o: () => pc,
      r: () => yB,
      t: () => Sc
    });
    var Vc = nc(38068),
      Ic = nc(38141),
      rB = nc(35756),
      uc = nc(38194),
      sc = nc(38493),
      Mc = nc(38374),
      Pc = nc(38099),
      qB = nc(38370),
      Oc = nc(35780),
      Tc = nc(38362),
      fc = nc(38358),
      mB = nc(38383),
      ec = nc(35799);
    const tB = {
      effect: null,
      subMesh: null
    };
    class Sc extends qB.c {
      constructor(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(cB, Bc, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new rB.d, this._cachedWorldViewProjectionMatrix = new rB.d, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = nc, this._options = {
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
          ...Vc
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(cB) {
        this._shaderPath = cB
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
      _checkUniform(cB) {
        -1 === this._options.uniforms.indexOf(cB) && this._options.uniforms.push(cB)
      }
      setTexture(cB, Bc) {
        return -1 === this._options.samplers.indexOf(cB) && this._options.samplers.push(cB), this._textures[cB] = Bc, this
      }
      setInternalTexture(cB, Bc) {
        return -1 === this._options.samplers.indexOf(cB) && this._options.samplers.push(cB), this._internalTextures[cB] = Bc, this
      }
      removeTexture(cB) {
        delete this._textures[cB]
      }
      setTextureArray(cB, Bc) {
        return -1 === this._options.samplers.indexOf(cB) && this._options.samplers.push(cB), this._checkUniform(cB), this._textureArrays[cB] = Bc, this
      }
      setExternalTexture(cB, Bc) {
        return -1 === this._options.externalTextures.indexOf(cB) && this._options.externalTextures.push(cB), this._externalTextures[cB] = Bc, this
      }
      setFloat(cB, Bc) {
        return this._checkUniform(cB), this._floats[cB] = Bc, this
      }
      setInt(cB, Bc) {
        return this._checkUniform(cB), this._ints[cB] = Bc, this
      }
      setUInt(cB, Bc) {
        return this._checkUniform(cB), this._uints[cB] = Bc, this
      }
      setFloats(cB, Bc) {
        return this._checkUniform(cB), this._floatsArrays[cB] = Bc, this
      }
      setColor3(cB, Bc) {
        return this._checkUniform(cB), this._colors3[cB] = Bc, this
      }
      setColor3Array(cB, Bc) {
        return this._checkUniform(cB), this._colors3Arrays[cB] = Bc.reduce(((cB, Bc) => (cB.push(Bc.r, Bc.g, Bc.b), cB)), []), this
      }
      setColor4(cB, Bc) {
        return this._checkUniform(cB), this._colors4[cB] = Bc, this
      }
      setColor4Array(cB, Bc) {
        return this._checkUniform(cB), this._colors4Arrays[cB] = Bc.reduce(((cB, Bc) => (cB.push(Bc.r, Bc.g, Bc.b, Bc.a), cB)), []), this
      }
      setVector2(cB, Bc) {
        return this._checkUniform(cB), this._vectors2[cB] = Bc, this
      }
      setVector3(cB, Bc) {
        return this._checkUniform(cB), this._vectors3[cB] = Bc, this
      }
      setVector4(cB, Bc) {
        return this._checkUniform(cB), this._vectors4[cB] = Bc, this
      }
      setQuaternion(cB, Bc) {
        return this._checkUniform(cB), this._quaternions[cB] = Bc, this
      }
      setQuaternionArray(cB, Bc) {
        return this._checkUniform(cB), this._quaternionsArrays[cB] = Bc.reduce(((cB, Bc) => (Bc.toArray(cB, cB.length), cB)), []), this
      }
      setMatrix(cB, Bc) {
        return this._checkUniform(cB), this._matrices[cB] = Bc, this
      }
      setMatrices(cB, Bc) {
        this._checkUniform(cB);
        const nc = new Float32Array(16 * Bc.length);
        for (let Vc = 0; Vc < Bc.length; Vc++) {
          Bc[Vc].copyToArray(nc, 16 * Vc)
        }
        return this._matrixArrays[cB] = nc, this
      }
      setMatrix3x3(cB, Bc) {
        return this._checkUniform(cB), this._matrices3x3[cB] = Bc, this
      }
      setMatrix2x2(cB, Bc) {
        return this._checkUniform(cB), this._matrices2x2[cB] = Bc, this
      }
      setArray2(cB, Bc) {
        return this._checkUniform(cB), this._vectors2Arrays[cB] = Bc, this
      }
      setArray3(cB, Bc) {
        return this._checkUniform(cB), this._vectors3Arrays[cB] = Bc, this
      }
      setArray4(cB, Bc) {
        return this._checkUniform(cB), this._vectors4Arrays[cB] = Bc, this
      }
      setUniformBuffer(cB, Bc) {
        return -1 === this._options.uniformBuffers.indexOf(cB) && this._options.uniformBuffers.push(cB), this._uniformBuffers[cB] = Bc, this
      }
      setTextureSampler(cB, Bc) {
        return -1 === this._options.samplerObjects.indexOf(cB) && this._options.samplerObjects.push(cB), this._textureSamplers[cB] = Bc, this
      }
      setStorageBuffer(cB, Bc) {
        return -1 === this._options.storageBuffers.indexOf(cB) && this._options.storageBuffers.push(cB), this._storageBuffers[cB] = Bc, this
      }
      setDefine(cB, Bc) {
        const nc = cB.trimEnd() + " ",
          Vc = this.options.defines.findIndex((Bc => Bc === cB || Bc.startsWith(nc)));
        return Vc >= 0 && this.options.defines.splice(Vc, 1), ("boolean" !== typeof Bc || Bc) && this.options.defines.push(nc + Bc), this
      }
      isReadyForSubMesh(cB, Bc, nc) {
        return this.isReady(cB, nc, Bc)
      }
      isReady(cB, Bc, nc) {
        const Vc = nc && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const cB = Vc ? nc._drawWrapper : this._drawWrapper;
          if (cB.effect && cB._wasPreviouslyReady && cB._wasPreviouslyUsingInstances === Bc) return !0
        }
        const rB = this.knc(),
          sc = rB.RV(),
          Pc = [],
          qB = [];
        let Oc = null,
          ec = this._shaderPath,
          Sc = this._options.uniforms,
          yB = this._options.uniformBuffers,
          zB = this._options.samplers;
        sc.getCaps().multiview && rB.activeCamera && rB.activeCamera.outputRenderTarget && rB.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, Pc.push("#define MULTIVIEW"), -1 !== Sc.indexOf("viewProjection") && -1 === Sc.indexOf("viewProjectionR") && Sc.push("viewProjectionR"));
        for (let Ic = 0; Ic < this._options.defines.length; Ic++) {
          const cB = 0 === this._options.defines[Ic].indexOf("#define") ? this._options.defines[Ic] : `#define ${this._options.defines[Ic]}`;
          Pc.push(cB)
        }
        for (let Ic = 0; Ic < this._options.attributes.length; Ic++) qB.push(this._options.attributes[Ic]);
        if (cB && cB.isVerticesDataPresent(uc.i.ColorKind) && (-1 === qB.indexOf(uc.i.ColorKind) && qB.push(uc.i.ColorKind), Pc.push("#define VERTEXCOLOR")), Bc && (Pc.push("#define INSTANCES"), (0, fc.vb)(qB, this._materialHelperNeedsPreviousMatrices), cB?.hasThinInstances && (Pc.push("#define THIN_INSTANCES"), cB && cB.isVerticesDataPresent(uc.i.ColorInstanceKind) && (qB.push(uc.i.ColorInstanceKind), Pc.push("#define INSTANCESCOLOR")))), cB && cB.useBones && cB.computeBonesUsingShaders && cB.skeleton) {
          qB.push(uc.i.MatricesIndicesKind), qB.push(uc.i.MatricesWeightsKind), cB.numBoneInfluencers > 4 && (qB.push(uc.i.MatricesIndicesExtraKind), qB.push(uc.i.MatricesWeightsExtraKind));
          const Bc = cB.skeleton;
          Pc.push("#define NUM_BONE_INFLUENCERS " + cB.numBoneInfluencers), Oc = new Mc.e, Oc.addCPUSkinningFallback(0, cB), Bc.isUsingTextureForMatrices ? (Pc.push("#define BONETEXTURE"), -1 === Sc.indexOf("boneTextureInfo") && Sc.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (Pc.push("#define BonesPerMesh " + (Bc.bones.length + 1)), -1 === Sc.indexOf("mBones") && Sc.push("mBones"))
        } else Pc.push("#define NUM_BONE_INFLUENCERS 0");
        let pc = 0;
        const hc = cB ? cB.morphTargetManager : null;
        if (hc) {
          const Bc = -1 !== Pc.indexOf("#define UV1"),
            nc = -1 !== Pc.indexOf("#define UV2"),
            Vc = -1 !== Pc.indexOf("#define TANGENT"),
            Ic = -1 !== Pc.indexOf("#define NORMAL"),
            rB = -1 !== Pc.indexOf("#define VERTEXCOLOR");
          pc = (0, fc.S)(hc, Pc, qB, cB, !0, Ic, Vc, Bc, nc, rB), hc.isUsingTextureForTargets && (-1 === Sc.indexOf("morphTargetTextureIndices") && Sc.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), pc > 0 && (Sc = Sc.slice(), Sc.push("morphTargetInfluences"), Sc.push("morphTargetCount"), Sc.push("morphTargetTextureInfo"), Sc.push("morphTargetTextureIndices"))
        } else Pc.push("#define NUM_MORPH_INFLUENCERS 0");
        if (cB) {
          const nc = cB.bakedVertexAnimationManager;
          nc && nc.isEnabled && (Pc.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === Sc.indexOf("bakedVertexAnimationSettings") && Sc.push("bakedVertexAnimationSettings"), -1 === Sc.indexOf("bakedVertexAnimationTextureSizeInverted") && Sc.push("bakedVertexAnimationTextureSizeInverted"), -1 === Sc.indexOf("bakedVertexAnimationTime") && Sc.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), Bc && qB.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const Ic in this._textures)
          if (!this._textures[Ic].isReady()) return !1;
        for (const Ic in this._internalTextures)
          if (!this._internalTextures[Ic].isReady) return !1;
        cB && this.needAlphaTestingForMesh(cB) && Pc.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, Tc.b)(Sc), (0, Tc.i)(this, rB, Pc)), rB.fogEnabled && cB?.applyFog && rB.fogMode !== Ic.h.FOGMODE_NONE && (Pc.push("#define FOG"), -1 === Sc.indexOf("view") && Sc.push("view"), -1 === Sc.indexOf("vFogInfos") && Sc.push("vFogInfos"), -1 === Sc.indexOf("vFogColor") && Sc.push("vFogColor")), this._useLogarithmicDepth && (Pc.push("#define LOGARITHMICDEPTH"), -1 === Sc.indexOf("logarithmicDepthConstant") && Sc.push("logarithmicDepthConstant"));
        const aB = nc ? nc.getRenderingMesh() : cB;
        if (aB && this.useVertexPulling) {
          const cB = aB.geometry;
          cB && (this._vertexPullingMetadata = (0, mB.h)(cB), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((cB, Bc) => {
            Sc.push(`vp_${Bc}_info`)
          }))), Pc.push("#define USE_VERTEX_PULLING");
          const Bc = aB.geometry?.getIndexBuffer();
          Bc && !aB.isUnIndexed && (Pc.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), Bc.is32Bits && Pc.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (Sc = Sc.slice(), yB = yB.slice(), zB = zB.slice(), ec = this.customShaderNameResolve(this.name, Sc, yB, zB, Pc, qB));
        const lc = Vc ? nc._getDrawWrapper(void 0, !0) : this._drawWrapper,
          Yc = lc?.effect ?? null,
          Lc = lc?.defines ?? null,
          gB = Pc.join("\n");
        let Uc = Yc;
        return Lc !== gB && (Uc = sc.createEffect(ec, {
          attributes: qB,
          uniformsNames: Sc,
          uniformBuffersNames: yB,
          samplers: zB,
          defines: gB,
          fallbacks: Oc,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: pc
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, sc), Vc ? nc.setEffect(Uc, gB, this._materialContext) : lc && lc.setEffect(Uc, gB), this._onEffectCreatedObservable && (tB.effect = Uc, tB.subMesh = nc ?? cB?.rD[0] ?? null, this._onEffectCreatedObservable.notifyObservers(tB))), lc._wasPreviouslyUsingInstances = !!Bc, !!Uc?.isReady() && (Yc !== Uc && rB.resetCachedMaterial(), lc._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(cB, Bc) {
        const nc = Bc ?? this.getEffect();
        if (!nc) return;
        const Vc = this._options.uniforms; - 1 !== Vc.indexOf("world") && nc.setMatrix("world", cB);
        const Ic = this.knc(); - 1 !== Vc.indexOf("worldView") && (cB.multiplyToRef(Ic.getViewMatrix(), this._cachedWorldViewMatrix), nc.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== Vc.indexOf("worldViewProjection") && (cB.multiplyToRef(Ic.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), nc.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== Vc.indexOf("view") && nc.setMatrix("view", Ic.getViewMatrix())
      }
      bindForSubMesh(cB, Bc, nc) {
        this.bind(cB, Bc, nc._drawWrapperOverride?.effect, nc)
      }
      bind(cB, Bc, nc, Vc) {
        const Ic = Vc && this._storeEffectOnSubMeshes,
          rB = nc ?? (Ic ? Vc.effect : this.getEffect());
        if (!rB) return;
        const uc = this.knc();
        this._activeEffect = rB, this.bindOnlyWorldMatrix(cB, nc);
        const sc = this._options.uniformBuffers;
        let Mc = !1;
        if (rB && sc && sc.length > 0 && uc.RV().supportsUniformBuffers)
          for (let qB = 0; qB < sc.length; ++qB) {
            switch (sc[qB]) {
              case "Mesh":
                Bc && (Bc.getMeshUniformBuffer().bindToEffect(rB, "Mesh"), Bc.transferToEffect(cB));
                break;
              case "Scene":
                (0, fc.y)(rB, uc.getSceneUniformBuffer()), uc.finalizeSceneUbo(), Mc = !0
            }
          }
        const Pc = Bc && Ic ? this._mustRebind(uc, rB, Vc, Bc.visibility) : uc.getCachedMaterial() !== this;
        if (rB && Pc) {
          let cB;
          for (cB in Mc || -1 === this._options.uniforms.indexOf("view") || rB.setMatrix("view", uc.getViewMatrix()), Mc || -1 === this._options.uniforms.indexOf("projection") || rB.setMatrix("projection", uc.getProjectionMatrix()), Mc || -1 === this._options.uniforms.indexOf("viewProjection") || (rB.setMatrix("viewProjection", uc.getTransformMatrix()), this._multiview && rB.setMatrix("viewProjectionR", uc._transformMatrixR)), uc.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && rB.setVector3("cameraPosition", uc.activeCamera.globalPosition), (0, fc.i)(Bc, rB), (0, Tc.d)(rB, this, uc), this._vertexPullingMetadata && (0, mB.e)(rB, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, fc.s)(Ic ? Vc.materialDefines : rB.defines, rB, uc), Bc && (0, fc.j)(uc, Bc, rB), this._textures) rB.setTexture(cB, this._textures[cB]);
          for (cB in this._internalTextures) rB._bindTexture(cB, this._internalTextures[cB]);
          for (cB in this._textureArrays) rB.setTextureArray(cB, this._textureArrays[cB]);
          for (cB in this._ints) rB.setInt(cB, this._ints[cB]);
          for (cB in this._uints) rB.setUInt(cB, this._uints[cB]);
          for (cB in this._floats) rB.setFloat(cB, this._floats[cB]);
          for (cB in this._floatsArrays) rB.setArray(cB, this._floatsArrays[cB]);
          for (cB in this._colors3) rB.setColor3(cB, this._colors3[cB]);
          for (cB in this._colors3Arrays) rB.setArray3(cB, this._colors3Arrays[cB]);
          for (cB in this._colors4) {
            const Bc = this._colors4[cB];
            rB.setFloat4(cB, Bc.r, Bc.g, Bc.b, Bc.a)
          }
          for (cB in this._colors4Arrays) rB.setArray4(cB, this._colors4Arrays[cB]);
          for (cB in this._vectors2) rB.setVector2(cB, this._vectors2[cB]);
          for (cB in this._vectors3) rB.setVector3(cB, this._vectors3[cB]);
          for (cB in this._vectors4) rB.setVector4(cB, this._vectors4[cB]);
          for (cB in this._quaternions) rB.setQuaternion(cB, this._quaternions[cB]);
          for (cB in this._matrices) rB.setMatrix(cB, this._matrices[cB]);
          for (cB in this._matrixArrays) rB.setMatrices(cB, this._matrixArrays[cB]);
          for (cB in this._matrices3x3) rB.setMatrix3x3(cB, this._matrices3x3[cB]);
          for (cB in this._matrices2x2) rB.setMatrix2x2(cB, this._matrices2x2[cB]);
          for (cB in this._vectors2Arrays) rB.setArray2(cB, this._vectors2Arrays[cB]);
          for (cB in this._vectors3Arrays) rB.setArray3(cB, this._vectors3Arrays[cB]);
          for (cB in this._vectors4Arrays) rB.setArray4(cB, this._vectors4Arrays[cB]);
          for (cB in this._quaternionsArrays) rB.setArray4(cB, this._quaternionsArrays[cB]);
          for (cB in this._uniformBuffers) {
            const Bc = this._uniformBuffers[cB].getBuffer();
            Bc && rB.bindUniformBuffer(Bc, cB)
          }
          const nc = uc.RV(),
            sc = nc.setExternalTexture;
          if (sc)
            for (cB in this._externalTextures) sc.call(nc, cB, this._externalTextures[cB]);
          const Pc = nc.setTextureSampler;
          if (Pc)
            for (cB in this._textureSamplers) Pc.call(nc, cB, this._textureSamplers[cB]);
          const qB = nc.setStorageBuffer;
          if (qB)
            for (cB in this._storageBuffers) qB.call(nc, cB, this._storageBuffers[cB])
        }
        if (rB && Bc && (Pc || !this.isFrozen)) {
          (0, fc.w)(Bc, rB), Bc.morphTargetManager && Bc.morphTargetManager.isUsingTextureForTargets && Bc.morphTargetManager._bind(rB);
          const cB = Bc.bakedVertexAnimationManager;
          if (cB && cB.isEnabled) {
            const cB = Ic ? Vc._drawWrapper : this._drawWrapper;
            Bc.bakedVertexAnimationManager?.bind(rB, !!cB._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(Bc, rB, Vc)
      }
      getActiveTextures() {
        const cB = super.getActiveTextures();
        for (const Bc in this._textures) cB.push(this._textures[Bc]);
        for (const Bc in this._textureArrays) {
          const nc = this._textureArrays[Bc];
          for (let Bc = 0; Bc < nc.length; Bc++) cB.push(nc[Bc])
        }
        return cB
      }
      hasTexture(cB) {
        if (super.hasTexture(cB)) return !0;
        for (const nc in this._textures)
          if (this._textures[nc] === cB) return !0;
        const Bc = cB.getInternalTexture();
        for (const nc in this._internalTextures)
          if (this._internalTextures[nc] === Bc) return !0;
        for (const nc in this._textureArrays) {
          const Bc = this._textureArrays[nc];
          for (let nc = 0; nc < Bc.length; nc++)
            if (Bc[nc] === cB) return !0
        }
        return !1
      }
      clone(cB) {
        const Bc = Vc.e.Clone((() => new Sc(cB, this.knc(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        Bc.name = cB, Bc.id = cB, "object" === typeof Bc._shaderPath && (Bc._shaderPath = {
          ...Bc._shaderPath
        }), this._options = {
          ...this._options
        };
        const nc = Object.keys(this._options);
        for (const Vc of nc) {
          const cB = this._options[Vc];
          Array.isArray(cB) && (this._options[Vc] = cB.slice(0))
        }
        this.stencil.copyTo(Bc.stencil);
        for (const Vc in this._textures) Bc.setTexture(Vc, this._textures[Vc]);
        for (const Vc in this._internalTextures) Bc.setInternalTexture(Vc, this._internalTextures[Vc]);
        for (const Vc in this._textureArrays) Bc.setTextureArray(Vc, this._textureArrays[Vc]);
        for (const Vc in this._externalTextures) Bc.setExternalTexture(Vc, this._externalTextures[Vc]);
        for (const Vc in this._ints) Bc.setInt(Vc, this._ints[Vc]);
        for (const Vc in this._uints) Bc.setUInt(Vc, this._uints[Vc]);
        for (const Vc in this._floats) Bc.setFloat(Vc, this._floats[Vc]);
        for (const Vc in this._floatsArrays) Bc.setFloats(Vc, this._floatsArrays[Vc]);
        for (const Vc in this._colors3) Bc.setColor3(Vc, this._colors3[Vc]);
        for (const Vc in this._colors3Arrays) Bc._colors3Arrays[Vc] = this._colors3Arrays[Vc];
        for (const Vc in this._colors4) Bc.setColor4(Vc, this._colors4[Vc]);
        for (const Vc in this._colors4Arrays) Bc._colors4Arrays[Vc] = this._colors4Arrays[Vc];
        for (const Vc in this._vectors2) Bc.setVector2(Vc, this._vectors2[Vc]);
        for (const Vc in this._vectors3) Bc.setVector3(Vc, this._vectors3[Vc]);
        for (const Vc in this._vectors4) Bc.setVector4(Vc, this._vectors4[Vc]);
        for (const Vc in this._quaternions) Bc.setQuaternion(Vc, this._quaternions[Vc]);
        for (const Vc in this._quaternionsArrays) Bc._quaternionsArrays[Vc] = this._quaternionsArrays[Vc];
        for (const Vc in this._matrices) Bc.setMatrix(Vc, this._matrices[Vc]);
        for (const Vc in this._matrixArrays) Bc._matrixArrays[Vc] = this._matrixArrays[Vc].slice();
        for (const Vc in this._matrices3x3) Bc.setMatrix3x3(Vc, this._matrices3x3[Vc]);
        for (const Vc in this._matrices2x2) Bc.setMatrix2x2(Vc, this._matrices2x2[Vc]);
        for (const Vc in this._vectors2Arrays) Bc.setArray2(Vc, this._vectors2Arrays[Vc]);
        for (const Vc in this._vectors3Arrays) Bc.setArray3(Vc, this._vectors3Arrays[Vc]);
        for (const Vc in this._vectors4Arrays) Bc.setArray4(Vc, this._vectors4Arrays[Vc]);
        for (const Vc in this._uniformBuffers) Bc.setUniformBuffer(Vc, this._uniformBuffers[Vc]);
        for (const Vc in this._textureSamplers) Bc.setTextureSampler(Vc, this._textureSamplers[Vc]);
        for (const Vc in this._storageBuffers) Bc.setStorageBuffer(Vc, this._storageBuffers[Vc]);
        return Bc
      }
      dispose(cB, Bc, nc) {
        if (Bc) {
          let cB;
          for (cB in this._textures) this._textures[cB].dispose();
          for (cB in this._internalTextures) this._internalTextures[cB].dispose();
          for (cB in this._textureArrays) {
            const Bc = this._textureArrays[cB];
            for (let cB = 0; cB < Bc.length; cB++) Bc[cB].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(cB, Bc, nc)
      }
      serialize() {
        const cB = Vc.e.Serialize(this);
        let Bc;
        for (Bc in cB.customType = "BABYLON.ShaderMaterial", cB.uniqueId = this.uniqueId, cB.options = this._options, cB.shaderPath = this._shaderPath, cB.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, cB.stencil = this.stencil.serialize(), cB.textures = {}, this._textures) cB.textures[Bc] = this._textures[Bc].serialize();
        for (Bc in cB.textureArrays = {}, this._textureArrays) {
          cB.textureArrays[Bc] = [];
          const nc = this._textureArrays[Bc];
          for (let Vc = 0; Vc < nc.length; Vc++) cB.textureArrays[Bc].push(nc[Vc].serialize())
        }
        for (Bc in cB.ints = {}, this._ints) cB.ints[Bc] = this._ints[Bc];
        for (Bc in cB.uints = {}, this._uints) cB.uints[Bc] = this._uints[Bc];
        for (Bc in cB.floats = {}, this._floats) cB.floats[Bc] = this._floats[Bc];
        for (Bc in cB.floatsArrays = {}, this._floatsArrays) cB.floatsArrays[Bc] = this._floatsArrays[Bc];
        for (Bc in cB.colors3 = {}, this._colors3) {
          const nc = this._colors3[Bc];
          cB.colors3[Bc] = [nc.r, nc.g, nc.b]
        }
        for (Bc in cB.colors3Arrays = {}, this._colors3Arrays) cB.colors3Arrays[Bc] = this._colors3Arrays[Bc];
        for (Bc in cB.colors4 = {}, this._colors4) {
          const nc = this._colors4[Bc];
          cB.colors4[Bc] = [nc.r, nc.g, nc.b, nc.a]
        }
        for (Bc in cB.colors4Arrays = {}, this._colors4Arrays) cB.colors4Arrays[Bc] = this._colors4Arrays[Bc];
        for (Bc in cB.vectors2 = {}, this._vectors2) {
          const nc = this._vectors2[Bc];
          cB.vectors2[Bc] = [nc.x, nc.y]
        }
        for (Bc in cB.vectors3 = {}, this._vectors3) {
          const nc = this._vectors3[Bc];
          cB.vectors3[Bc] = [nc.x, nc.y, nc.z]
        }
        for (Bc in cB.vectors4 = {}, this._vectors4) {
          const nc = this._vectors4[Bc];
          cB.vectors4[Bc] = [nc.x, nc.y, nc.z, nc.w]
        }
        for (Bc in cB.quaternions = {}, this._quaternions) cB.quaternions[Bc] = this._quaternions[Bc].KPc();
        for (Bc in cB.matrices = {}, this._matrices) cB.matrices[Bc] = this._matrices[Bc].KPc();
        for (Bc in cB.matrixArray = {}, this._matrixArrays) cB.matrixArray[Bc] = this._matrixArrays[Bc];
        for (Bc in cB.matrices3x3 = {}, this._matrices3x3) cB.matrices3x3[Bc] = this._matrices3x3[Bc];
        for (Bc in cB.matrices2x2 = {}, this._matrices2x2) cB.matrices2x2[Bc] = this._matrices2x2[Bc];
        for (Bc in cB.vectors2Arrays = {}, this._vectors2Arrays) cB.vectors2Arrays[Bc] = this._vectors2Arrays[Bc];
        for (Bc in cB.vectors3Arrays = {}, this._vectors3Arrays) cB.vectors3Arrays[Bc] = this._vectors3Arrays[Bc];
        for (Bc in cB.vectors4Arrays = {}, this._vectors4Arrays) cB.vectors4Arrays[Bc] = this._vectors4Arrays[Bc];
        for (Bc in cB.quaternionsArrays = {}, this._quaternionsArrays) cB.quaternionsArrays[Bc] = this._quaternionsArrays[Bc];
        return cB
      }
    }

    function yB(cB, Bc, nc) {
      const Ic = Vc.e.Parse((() => new Sc(cB.name, Bc, cB.shaderPath, cB.options, cB.storeEffectOnSubMeshes)), cB, Bc, nc);
      let uc;
      for (uc in cB.stencil && Ic.stencil.parse(cB.stencil, Bc, nc), cB.textures) Ic.setTexture(uc, sc.e.Parse(cB.textures[uc], Bc, nc));
      for (uc in cB.textureArrays) {
        const Vc = cB.textureArrays[uc],
          rB = [];
        for (let cB = 0; cB < Vc.length; cB++) rB.push(sc.e.Parse(Vc[cB], Bc, nc));
        Ic.setTextureArray(uc, rB)
      }
      for (uc in cB.ints) Ic.setInt(uc, cB.ints[uc]);
      for (uc in cB.uints) Ic.setUInt(uc, cB.uints[uc]);
      for (uc in cB.floats) Ic.setFloat(uc, cB.floats[uc]);
      for (uc in cB.floatsArrays) Ic.setFloats(uc, cB.floatsArrays[uc]);
      for (uc in cB.colors3) {
        const Bc = cB.colors3[uc];
        Ic.setColor3(uc, {
          r: Bc[0],
          g: Bc[1],
          b: Bc[2]
        })
      }
      for (uc in cB.colors3Arrays) {
        const Bc = cB.colors3Arrays[uc].reduce(((cB, Bc, nc) => (nc % 3 === 0 ? cB.push([Bc]) : cB[cB.length - 1].push(Bc), cB)), []).map((cB => ({
          r: cB[0],
          g: cB[1],
          b: cB[2]
        })));
        Ic.setColor3Array(uc, Bc)
      }
      for (uc in cB.colors4) {
        const Bc = cB.colors4[uc];
        Ic.setColor4(uc, {
          r: Bc[0],
          g: Bc[1],
          b: Bc[2],
          a: Bc[3]
        })
      }
      for (uc in cB.colors4Arrays) {
        const Bc = cB.colors4Arrays[uc].reduce(((cB, Bc, nc) => (nc % 4 === 0 ? cB.push([Bc]) : cB[cB.length - 1].push(Bc), cB)), []).map((cB => ({
          r: cB[0],
          g: cB[1],
          b: cB[2],
          a: cB[3]
        })));
        Ic.setColor4Array(uc, Bc)
      }
      for (uc in cB.vectors2) {
        const Bc = cB.vectors2[uc];
        Ic.setVector2(uc, {
          x: Bc[0],
          y: Bc[1]
        })
      }
      for (uc in cB.vectors3) {
        const Bc = cB.vectors3[uc];
        Ic.setVector3(uc, {
          x: Bc[0],
          y: Bc[1],
          z: Bc[2]
        })
      }
      for (uc in cB.vectors4) {
        const Bc = cB.vectors4[uc];
        Ic.setVector4(uc, {
          x: Bc[0],
          y: Bc[1],
          z: Bc[2],
          w: Bc[3]
        })
      }
      for (uc in cB.quaternions) Ic.setQuaternion(uc, rB.f.FromArray(cB.quaternions[uc]));
      for (uc in cB.matrices) Ic.setMatrix(uc, rB.d.FromArray(cB.matrices[uc]));
      const Mc = Ic;
      for (uc in cB.matrixArray) Mc._matrixArrays[uc] = new Float32Array(cB.matrixArray[uc]);
      for (uc in cB.matrices3x3) Ic.setMatrix3x3(uc, cB.matrices3x3[uc]);
      for (uc in cB.matrices2x2) Ic.setMatrix2x2(uc, cB.matrices2x2[uc]);
      for (uc in cB.vectors2Arrays) Ic.setArray2(uc, cB.vectors2Arrays[uc]);
      for (uc in cB.vectors3Arrays) Ic.setArray3(uc, cB.vectors3Arrays[uc]);
      for (uc in cB.vectors4Arrays) Ic.setArray4(uc, cB.vectors4Arrays[uc]);
      for (uc in cB.quaternionsArrays) Ic.setArray4(uc, cB.quaternionsArrays[uc]);
      return Ic
    }
    async function zB(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((Ic, rB) => {
        const uc = new Pc.c;
        uc.addEventListener("readystatechange", (() => {
          if (4 == uc.readyState)
            if (200 == uc.status) {
              const Bc = yB(JSON.parse(uc.responseText), nc || Oc.d.LastCreatedScene, Vc);
              cB && (Bc.name = cB), Ic(Bc)
            } else rB("Unable to load the ShaderMaterial")
        })), uc.open("GET", Bc), uc.send()
      }))
    }
    async function pc(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Vc = this?.SnippetUrl ?? Sc.SnippetUrl;
      return await new Promise(((Ic, rB) => {
        const uc = new Pc.c;
        uc.addEventListener("readystatechange", (() => {
          if (4 == uc.readyState)
            if (200 == uc.status) {
              const Vc = JSON.parse(JSON.parse(uc.responseText).jsonPayload),
                rB = yB(JSON.parse(Vc.shaderMaterial), Bc || Oc.d.LastCreatedScene, nc);
              rB.snippetId = cB, Ic(rB)
            } else rB("Unable to load the snippet " + cB)
        })), uc.open("GET", Vc + "/" + cB.replace(/#/g, "/")), uc.send()
      }))
    }
    Sc.SnippetUrl = "https://snippet.babylonjs.com";
    const hc = pc;
    let aB = !1;

    function lc() {
      aB || (aB = !0, Sc.Parse = yB, Sc.ParseFromFileAsync = zB, Sc.ParseFromSnippetAsync = pc, Sc.CreateFromSnippetAsync = hc, (0, ec.d)("BABYLON.ShaderMaterial", Sc))
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);