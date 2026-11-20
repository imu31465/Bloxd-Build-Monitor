export const id = 254;
export const ids = [254];
export const modules = {
  39614: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => mz,
      h: () => Yz,
      k: () => Pz,
      m: () => rz,
      q: () => Bz,
      s: () => Hz
    });
    var Fz = sz(39181),
      Wz = sz(39256),
      Xz = sz(36475),
      Oz = sz(39293),
      oz = sz(39617),
      vz = sz(39507),
      Uz = sz(39213),
      Kz = sz(39501),
      uz = sz(36502),
      Nz = sz(39493),
      bz = sz(39489),
      wz = sz(39522),
      Dz = sz(36518);
    const gz = {
      effect: null,
      subMesh: null
    };
    class Hz extends Kz.c {
      constructor(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(zz, tz, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new Xz.e, this._cachedWorldViewProjectionMatrix = new Xz.e, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = sz, this._options = {
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
          ...Fz
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(zz) {
        this._shaderPath = zz
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
      _checkUniform(zz) {
        -1 === this._options.uniforms.indexOf(zz) && this._options.uniforms.push(zz)
      }
      setTexture(zz, tz) {
        return -1 === this._options.samplers.indexOf(zz) && this._options.samplers.push(zz), this._textures[zz] = tz, this
      }
      setInternalTexture(zz, tz) {
        return -1 === this._options.samplers.indexOf(zz) && this._options.samplers.push(zz), this._internalTextures[zz] = tz, this
      }
      removeTexture(zz) {
        delete this._textures[zz]
      }
      setTextureArray(zz, tz) {
        return -1 === this._options.samplers.indexOf(zz) && this._options.samplers.push(zz), this._checkUniform(zz), this._textureArrays[zz] = tz, this
      }
      setExternalTexture(zz, tz) {
        return -1 === this._options.externalTextures.indexOf(zz) && this._options.externalTextures.push(zz), this._externalTextures[zz] = tz, this
      }
      setFloat(zz, tz) {
        return this._checkUniform(zz), this._floats[zz] = tz, this
      }
      setInt(zz, tz) {
        return this._checkUniform(zz), this._ints[zz] = tz, this
      }
      setUInt(zz, tz) {
        return this._checkUniform(zz), this._uints[zz] = tz, this
      }
      setFloats(zz, tz) {
        return this._checkUniform(zz), this._floatsArrays[zz] = tz, this
      }
      setColor3(zz, tz) {
        return this._checkUniform(zz), this._colors3[zz] = tz, this
      }
      setColor3Array(zz, tz) {
        return this._checkUniform(zz), this._colors3Arrays[zz] = tz.reduce(((zz, tz) => (zz.push(tz.r, tz.g, tz.b), zz)), []), this
      }
      setColor4(zz, tz) {
        return this._checkUniform(zz), this._colors4[zz] = tz, this
      }
      setColor4Array(zz, tz) {
        return this._checkUniform(zz), this._colors4Arrays[zz] = tz.reduce(((zz, tz) => (zz.push(tz.r, tz.g, tz.b, tz.a), zz)), []), this
      }
      setVector2(zz, tz) {
        return this._checkUniform(zz), this._vectors2[zz] = tz, this
      }
      setVector3(zz, tz) {
        return this._checkUniform(zz), this._vectors3[zz] = tz, this
      }
      setVector4(zz, tz) {
        return this._checkUniform(zz), this._vectors4[zz] = tz, this
      }
      setQuaternion(zz, tz) {
        return this._checkUniform(zz), this._quaternions[zz] = tz, this
      }
      setQuaternionArray(zz, tz) {
        return this._checkUniform(zz), this._quaternionsArrays[zz] = tz.reduce(((zz, tz) => (tz.toArray(zz, zz.length), zz)), []), this
      }
      setMatrix(zz, tz) {
        return this._checkUniform(zz), this._matrices[zz] = tz, this
      }
      setMatrices(zz, tz) {
        this._checkUniform(zz);
        const sz = new Float32Array(16 * tz.length);
        for (let Fz = 0; Fz < tz.length; Fz++) {
          tz[Fz].copyToArray(sz, 16 * Fz)
        }
        return this._matrixArrays[zz] = sz, this
      }
      setMatrix3x3(zz, tz) {
        return this._checkUniform(zz), this._matrices3x3[zz] = tz, this
      }
      setMatrix2x2(zz, tz) {
        return this._checkUniform(zz), this._matrices2x2[zz] = tz, this
      }
      setArray2(zz, tz) {
        return this._checkUniform(zz), this._vectors2Arrays[zz] = tz, this
      }
      setArray3(zz, tz) {
        return this._checkUniform(zz), this._vectors3Arrays[zz] = tz, this
      }
      setArray4(zz, tz) {
        return this._checkUniform(zz), this._vectors4Arrays[zz] = tz, this
      }
      setUniformBuffer(zz, tz) {
        return -1 === this._options.uniformBuffers.indexOf(zz) && this._options.uniformBuffers.push(zz), this._uniformBuffers[zz] = tz, this
      }
      setTextureSampler(zz, tz) {
        return -1 === this._options.samplerObjects.indexOf(zz) && this._options.samplerObjects.push(zz), this._textureSamplers[zz] = tz, this
      }
      setStorageBuffer(zz, tz) {
        return -1 === this._options.storageBuffers.indexOf(zz) && this._options.storageBuffers.push(zz), this._storageBuffers[zz] = tz, this
      }
      setDefine(zz, tz) {
        const sz = zz.trimEnd() + " ",
          Fz = this.options.defines.findIndex((tz => tz === zz || tz.startsWith(sz)));
        return Fz >= 0 && this.options.defines.splice(Fz, 1), ("boolean" !== typeof tz || tz) && this.options.defines.push(sz + tz), this
      }
      isReadyForSubMesh(zz, tz, sz) {
        return this.isReady(zz, sz, tz)
      }
      isReady(zz, tz, sz) {
        const Fz = sz && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const zz = Fz ? sz._drawWrapper : this._drawWrapper;
          if (zz.effect && zz._wasPreviouslyReady && zz._wasPreviouslyUsingInstances === tz) return !0
        }
        const Xz = this.aJ(),
          oz = Xz.FD(),
          Uz = [],
          Kz = [];
        let uz = null,
          Dz = this._shaderPath,
          Hz = this._options.uniforms,
          Bz = this._options.uniformBuffers,
          Pz = this._options.samplers;
        oz.getCaps().multiview && Xz.activeCamera && Xz.activeCamera.outputRenderTarget && Xz.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, Uz.push("#define MULTIVIEW"), -1 !== Hz.indexOf("viewProjection") && -1 === Hz.indexOf("viewProjectionR") && Hz.push("viewProjectionR"));
        for (let Wz = 0; Wz < this._options.defines.length; Wz++) {
          const zz = 0 === this._options.defines[Wz].indexOf("#define") ? this._options.defines[Wz] : `#define ${this._options.defines[Wz]}`;
          Uz.push(zz)
        }
        for (let Wz = 0; Wz < this._options.attributes.length; Wz++) Kz.push(this._options.attributes[Wz]);
        if (zz && zz.isVerticesDataPresent(Oz.m.ColorKind) && (-1 === Kz.indexOf(Oz.m.ColorKind) && Kz.push(Oz.m.ColorKind), Uz.push("#define VERTEXCOLOR")), tz && (Uz.push("#define INSTANCES"), (0, bz.tb)(Kz, this._materialHelperNeedsPreviousMatrices), zz?.hasThinInstances && (Uz.push("#define THIN_INSTANCES"), zz && zz.isVerticesDataPresent(Oz.m.ColorInstanceKind) && (Kz.push(Oz.m.ColorInstanceKind), Uz.push("#define INSTANCESCOLOR")))), zz && zz.useBones && zz.computeBonesUsingShaders && zz.skeleton) {
          Kz.push(Oz.m.MatricesIndicesKind), Kz.push(Oz.m.MatricesWeightsKind), zz.numBoneInfluencers > 4 && (Kz.push(Oz.m.MatricesIndicesExtraKind), Kz.push(Oz.m.MatricesWeightsExtraKind));
          const tz = zz.skeleton;
          Uz.push("#define NUM_BONE_INFLUENCERS " + zz.numBoneInfluencers), uz = new vz.e, uz.addCPUSkinningFallback(0, zz), tz.isUsingTextureForMatrices ? (Uz.push("#define BONETEXTURE"), -1 === Hz.indexOf("boneTextureInfo") && Hz.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (Uz.push("#define BonesPerMesh " + (tz.bones.length + 1)), -1 === Hz.indexOf("mBones") && Hz.push("mBones"))
        } else Uz.push("#define NUM_BONE_INFLUENCERS 0");
        let rz = 0;
        const Yz = zz ? zz.morphTargetManager : null;
        if (Yz) {
          const tz = -1 !== Uz.indexOf("#define UV1"),
            sz = -1 !== Uz.indexOf("#define UV2"),
            Fz = -1 !== Uz.indexOf("#define TANGENT"),
            Wz = -1 !== Uz.indexOf("#define NORMAL"),
            Xz = -1 !== Uz.indexOf("#define VERTEXCOLOR");
          rz = (0, bz.O)(Yz, Uz, Kz, zz, !0, Wz, Fz, tz, sz, Xz), Yz.isUsingTextureForTargets && (-1 === Hz.indexOf("morphTargetTextureIndices") && Hz.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), rz > 0 && (Hz = Hz.slice(), Hz.push("morphTargetInfluences"), Hz.push("morphTargetCount"), Hz.push("morphTargetTextureInfo"), Hz.push("morphTargetTextureIndices"))
        } else Uz.push("#define NUM_MORPH_INFLUENCERS 0");
        if (zz) {
          const sz = zz.bakedVertexAnimationManager;
          sz && sz.isEnabled && (Uz.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === Hz.indexOf("bakedVertexAnimationSettings") && Hz.push("bakedVertexAnimationSettings"), -1 === Hz.indexOf("bakedVertexAnimationTextureSizeInverted") && Hz.push("bakedVertexAnimationTextureSizeInverted"), -1 === Hz.indexOf("bakedVertexAnimationTime") && Hz.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), tz && Kz.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const Wz in this._textures)
          if (!this._textures[Wz].isReady()) return !1;
        for (const Wz in this._internalTextures)
          if (!this._internalTextures[Wz].isReady) return !1;
        zz && this.needAlphaTestingForMesh(zz) && Uz.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, Nz.d)(Hz), (0, Nz.j)(this, Xz, Uz)), Xz.fogEnabled && zz?.applyFog && Xz.fogMode !== Wz.i.FOGMODE_NONE && (Uz.push("#define FOG"), -1 === Hz.indexOf("view") && Hz.push("view"), -1 === Hz.indexOf("vFogInfos") && Hz.push("vFogInfos"), -1 === Hz.indexOf("vFogColor") && Hz.push("vFogColor")), this._useLogarithmicDepth && (Uz.push("#define LOGARITHMICDEPTH"), -1 === Hz.indexOf("logarithmicDepthConstant") && Hz.push("logarithmicDepthConstant"));
        const xz = sz ? sz.getRenderingMesh() : zz;
        if (xz && this.useVertexPulling) {
          const zz = xz.geometry;
          zz && (this._vertexPullingMetadata = (0, wz.f)(zz), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((zz, tz) => {
            Hz.push(`vp_${tz}_info`)
          }))), Uz.push("#define USE_VERTEX_PULLING");
          const tz = xz.geometry?.getIndexBuffer();
          tz && !xz.isUnIndexed && (Uz.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), tz.is32Bits && Uz.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (Hz = Hz.slice(), Bz = Bz.slice(), Pz = Pz.slice(), Dz = this.customShaderNameResolve(this.name, Hz, Bz, Pz, Uz, Kz));
        const mz = Fz ? sz._getDrawWrapper(void 0, !0) : this._drawWrapper,
          Jz = mz?.effect ?? null,
          Iz = mz?.defines ?? null,
          Cz = Uz.join("\n");
        let ez = Jz;
        return Iz !== Cz && (ez = oz.createEffect(Dz, {
          attributes: Kz,
          uniformsNames: Hz,
          uniformBuffersNames: Bz,
          samplers: Pz,
          defines: Cz,
          fallbacks: uz,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: rz
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, oz), Fz ? sz.setEffect(ez, Cz, this._materialContext) : mz && mz.setEffect(ez, Cz), this._onEffectCreatedObservable && (gz.effect = ez, gz.subMesh = sz ?? zz?.kY[0] ?? null, this._onEffectCreatedObservable.notifyObservers(gz))), mz._wasPreviouslyUsingInstances = !!tz, !!ez?.isReady() && (Jz !== ez && Xz.resetCachedMaterial(), mz._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(zz, tz) {
        const sz = tz ?? this.getEffect();
        if (!sz) return;
        const Fz = this._options.uniforms; - 1 !== Fz.indexOf("world") && sz.setMatrix("world", zz);
        const Wz = this.aJ(); - 1 !== Fz.indexOf("worldView") && (zz.multiplyToRef(Wz.getViewMatrix(), this._cachedWorldViewMatrix), sz.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== Fz.indexOf("worldViewProjection") && (zz.multiplyToRef(Wz.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), sz.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== Fz.indexOf("view") && sz.setMatrix("view", Wz.getViewMatrix())
      }
      bindForSubMesh(zz, tz, sz) {
        this.bind(zz, tz, sz._drawWrapperOverride?.effect, sz)
      }
      bind(zz, tz, sz, Fz) {
        const Wz = Fz && this._storeEffectOnSubMeshes,
          Xz = sz ?? (Wz ? Fz.effect : this.getEffect());
        if (!Xz) return;
        const Oz = this.aJ();
        this._activeEffect = Xz, this.bindOnlyWorldMatrix(zz, sz);
        const oz = this._options.uniformBuffers;
        let vz = !1;
        if (Xz && oz && oz.length > 0 && Oz.FD().supportsUniformBuffers)
          for (let Kz = 0; Kz < oz.length; ++Kz) {
            switch (oz[Kz]) {
              case "Mesh":
                tz && (tz.getMeshUniformBuffer().bindToEffect(Xz, "Mesh"), tz.transferToEffect(zz));
                break;
              case "Scene":
                (0, bz.w)(Xz, Oz.getSceneUniformBuffer()), Oz.finalizeSceneUbo(), vz = !0
            }
          }
        const Uz = tz && Wz ? this._mustRebind(Oz, Xz, Fz, tz.visibility) : Oz.getCachedMaterial() !== this;
        if (Xz && Uz) {
          let zz;
          for (zz in vz || -1 === this._options.uniforms.indexOf("view") || Xz.setMatrix("view", Oz.getViewMatrix()), vz || -1 === this._options.uniforms.indexOf("projection") || Xz.setMatrix("projection", Oz.getProjectionMatrix()), vz || -1 === this._options.uniforms.indexOf("viewProjection") || (Xz.setMatrix("viewProjection", Oz.getTransformMatrix()), this._multiview && Xz.setMatrix("viewProjectionR", Oz._transformMatrixR)), Oz.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && Xz.setVector3("cameraPosition", Oz.activeCamera.globalPosition), (0, bz.g)(tz, Xz), (0, Nz.g)(Xz, this, Oz), this._vertexPullingMetadata && (0, wz.d)(Xz, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, bz.t)(Wz ? Fz.materialDefines : Xz.defines, Xz, Oz), tz && (0, bz.j)(Oz, tz, Xz), this._textures) Xz.setTexture(zz, this._textures[zz]);
          for (zz in this._internalTextures) Xz._bindTexture(zz, this._internalTextures[zz]);
          for (zz in this._textureArrays) Xz.setTextureArray(zz, this._textureArrays[zz]);
          for (zz in this._ints) Xz.setInt(zz, this._ints[zz]);
          for (zz in this._uints) Xz.setUInt(zz, this._uints[zz]);
          for (zz in this._floats) Xz.setFloat(zz, this._floats[zz]);
          for (zz in this._floatsArrays) Xz.setArray(zz, this._floatsArrays[zz]);
          for (zz in this._colors3) Xz.setColor3(zz, this._colors3[zz]);
          for (zz in this._colors3Arrays) Xz.setArray3(zz, this._colors3Arrays[zz]);
          for (zz in this._colors4) {
            const tz = this._colors4[zz];
            Xz.setFloat4(zz, tz.r, tz.g, tz.b, tz.a)
          }
          for (zz in this._colors4Arrays) Xz.setArray4(zz, this._colors4Arrays[zz]);
          for (zz in this._vectors2) Xz.setVector2(zz, this._vectors2[zz]);
          for (zz in this._vectors3) Xz.setVector3(zz, this._vectors3[zz]);
          for (zz in this._vectors4) Xz.setVector4(zz, this._vectors4[zz]);
          for (zz in this._quaternions) Xz.setQuaternion(zz, this._quaternions[zz]);
          for (zz in this._matrices) Xz.setMatrix(zz, this._matrices[zz]);
          for (zz in this._matrixArrays) Xz.setMatrices(zz, this._matrixArrays[zz]);
          for (zz in this._matrices3x3) Xz.setMatrix3x3(zz, this._matrices3x3[zz]);
          for (zz in this._matrices2x2) Xz.setMatrix2x2(zz, this._matrices2x2[zz]);
          for (zz in this._vectors2Arrays) Xz.setArray2(zz, this._vectors2Arrays[zz]);
          for (zz in this._vectors3Arrays) Xz.setArray3(zz, this._vectors3Arrays[zz]);
          for (zz in this._vectors4Arrays) Xz.setArray4(zz, this._vectors4Arrays[zz]);
          for (zz in this._quaternionsArrays) Xz.setArray4(zz, this._quaternionsArrays[zz]);
          for (zz in this._uniformBuffers) {
            const tz = this._uniformBuffers[zz].getBuffer();
            tz && Xz.bindUniformBuffer(tz, zz)
          }
          const sz = Oz.FD(),
            oz = sz.setExternalTexture;
          if (oz)
            for (zz in this._externalTextures) oz.call(sz, zz, this._externalTextures[zz]);
          const Uz = sz.setTextureSampler;
          if (Uz)
            for (zz in this._textureSamplers) Uz.call(sz, zz, this._textureSamplers[zz]);
          const Kz = sz.setStorageBuffer;
          if (Kz)
            for (zz in this._storageBuffers) Kz.call(sz, zz, this._storageBuffers[zz])
        }
        if (Xz && tz && (Uz || !this.isFrozen)) {
          (0, bz.v)(tz, Xz), tz.morphTargetManager && tz.morphTargetManager.isUsingTextureForTargets && tz.morphTargetManager._bind(Xz);
          const zz = tz.bakedVertexAnimationManager;
          if (zz && zz.isEnabled) {
            const zz = Wz ? Fz._drawWrapper : this._drawWrapper;
            tz.bakedVertexAnimationManager?.bind(Xz, !!zz._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(tz, Xz, Fz)
      }
      getActiveTextures() {
        const zz = super.getActiveTextures();
        for (const tz in this._textures) zz.push(this._textures[tz]);
        for (const tz in this._textureArrays) {
          const sz = this._textureArrays[tz];
          for (let tz = 0; tz < sz.length; tz++) zz.push(sz[tz])
        }
        return zz
      }
      hasTexture(zz) {
        if (super.hasTexture(zz)) return !0;
        for (const sz in this._textures)
          if (this._textures[sz] === zz) return !0;
        const tz = zz.getInternalTexture();
        for (const sz in this._internalTextures)
          if (this._internalTextures[sz] === tz) return !0;
        for (const sz in this._textureArrays) {
          const tz = this._textureArrays[sz];
          for (let sz = 0; sz < tz.length; sz++)
            if (tz[sz] === zz) return !0
        }
        return !1
      }
      clone(zz) {
        const tz = Fz.e.Clone((() => new Hz(zz, this.aJ(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        tz.name = zz, tz.id = zz, "object" === typeof tz._shaderPath && (tz._shaderPath = {
          ...tz._shaderPath
        }), this._options = {
          ...this._options
        };
        const sz = Object.keys(this._options);
        for (const Fz of sz) {
          const zz = this._options[Fz];
          Array.isArray(zz) && (this._options[Fz] = zz.slice(0))
        }
        this.stencil.copyTo(tz.stencil);
        for (const Fz in this._textures) tz.setTexture(Fz, this._textures[Fz]);
        for (const Fz in this._internalTextures) tz.setInternalTexture(Fz, this._internalTextures[Fz]);
        for (const Fz in this._textureArrays) tz.setTextureArray(Fz, this._textureArrays[Fz]);
        for (const Fz in this._externalTextures) tz.setExternalTexture(Fz, this._externalTextures[Fz]);
        for (const Fz in this._ints) tz.setInt(Fz, this._ints[Fz]);
        for (const Fz in this._uints) tz.setUInt(Fz, this._uints[Fz]);
        for (const Fz in this._floats) tz.setFloat(Fz, this._floats[Fz]);
        for (const Fz in this._floatsArrays) tz.setFloats(Fz, this._floatsArrays[Fz]);
        for (const Fz in this._colors3) tz.setColor3(Fz, this._colors3[Fz]);
        for (const Fz in this._colors3Arrays) tz._colors3Arrays[Fz] = this._colors3Arrays[Fz];
        for (const Fz in this._colors4) tz.setColor4(Fz, this._colors4[Fz]);
        for (const Fz in this._colors4Arrays) tz._colors4Arrays[Fz] = this._colors4Arrays[Fz];
        for (const Fz in this._vectors2) tz.setVector2(Fz, this._vectors2[Fz]);
        for (const Fz in this._vectors3) tz.setVector3(Fz, this._vectors3[Fz]);
        for (const Fz in this._vectors4) tz.setVector4(Fz, this._vectors4[Fz]);
        for (const Fz in this._quaternions) tz.setQuaternion(Fz, this._quaternions[Fz]);
        for (const Fz in this._quaternionsArrays) tz._quaternionsArrays[Fz] = this._quaternionsArrays[Fz];
        for (const Fz in this._matrices) tz.setMatrix(Fz, this._matrices[Fz]);
        for (const Fz in this._matrixArrays) tz._matrixArrays[Fz] = this._matrixArrays[Fz].slice();
        for (const Fz in this._matrices3x3) tz.setMatrix3x3(Fz, this._matrices3x3[Fz]);
        for (const Fz in this._matrices2x2) tz.setMatrix2x2(Fz, this._matrices2x2[Fz]);
        for (const Fz in this._vectors2Arrays) tz.setArray2(Fz, this._vectors2Arrays[Fz]);
        for (const Fz in this._vectors3Arrays) tz.setArray3(Fz, this._vectors3Arrays[Fz]);
        for (const Fz in this._vectors4Arrays) tz.setArray4(Fz, this._vectors4Arrays[Fz]);
        for (const Fz in this._uniformBuffers) tz.setUniformBuffer(Fz, this._uniformBuffers[Fz]);
        for (const Fz in this._textureSamplers) tz.setTextureSampler(Fz, this._textureSamplers[Fz]);
        for (const Fz in this._storageBuffers) tz.setStorageBuffer(Fz, this._storageBuffers[Fz]);
        return tz
      }
      dispose(zz, tz, sz) {
        if (tz) {
          let zz;
          for (zz in this._textures) this._textures[zz].dispose();
          for (zz in this._internalTextures) this._internalTextures[zz].dispose();
          for (zz in this._textureArrays) {
            const tz = this._textureArrays[zz];
            for (let zz = 0; zz < tz.length; zz++) tz[zz].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(zz, tz, sz)
      }
      serialize() {
        const zz = Fz.e.Serialize(this);
        let tz;
        for (tz in zz.customType = "BABYLON.ShaderMaterial", zz.uniqueId = this.uniqueId, zz.options = this._options, zz.shaderPath = this._shaderPath, zz.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, zz.stencil = this.stencil.serialize(), zz.textures = {}, this._textures) zz.textures[tz] = this._textures[tz].serialize();
        for (tz in zz.textureArrays = {}, this._textureArrays) {
          zz.textureArrays[tz] = [];
          const sz = this._textureArrays[tz];
          for (let Fz = 0; Fz < sz.length; Fz++) zz.textureArrays[tz].push(sz[Fz].serialize())
        }
        for (tz in zz.ints = {}, this._ints) zz.ints[tz] = this._ints[tz];
        for (tz in zz.uints = {}, this._uints) zz.uints[tz] = this._uints[tz];
        for (tz in zz.floats = {}, this._floats) zz.floats[tz] = this._floats[tz];
        for (tz in zz.floatsArrays = {}, this._floatsArrays) zz.floatsArrays[tz] = this._floatsArrays[tz];
        for (tz in zz.colors3 = {}, this._colors3) {
          const sz = this._colors3[tz];
          zz.colors3[tz] = [sz.r, sz.g, sz.b]
        }
        for (tz in zz.colors3Arrays = {}, this._colors3Arrays) zz.colors3Arrays[tz] = this._colors3Arrays[tz];
        for (tz in zz.colors4 = {}, this._colors4) {
          const sz = this._colors4[tz];
          zz.colors4[tz] = [sz.r, sz.g, sz.b, sz.a]
        }
        for (tz in zz.colors4Arrays = {}, this._colors4Arrays) zz.colors4Arrays[tz] = this._colors4Arrays[tz];
        for (tz in zz.vectors2 = {}, this._vectors2) {
          const sz = this._vectors2[tz];
          zz.vectors2[tz] = [sz.x, sz.y]
        }
        for (tz in zz.vectors3 = {}, this._vectors3) {
          const sz = this._vectors3[tz];
          zz.vectors3[tz] = [sz.x, sz.y, sz.z]
        }
        for (tz in zz.vectors4 = {}, this._vectors4) {
          const sz = this._vectors4[tz];
          zz.vectors4[tz] = [sz.x, sz.y, sz.z, sz.w]
        }
        for (tz in zz.quaternions = {}, this._quaternions) zz.quaternions[tz] = this._quaternions[tz].hsz();
        for (tz in zz.matrices = {}, this._matrices) zz.matrices[tz] = this._matrices[tz].hsz();
        for (tz in zz.matrixArray = {}, this._matrixArrays) zz.matrixArray[tz] = this._matrixArrays[tz];
        for (tz in zz.matrices3x3 = {}, this._matrices3x3) zz.matrices3x3[tz] = this._matrices3x3[tz];
        for (tz in zz.matrices2x2 = {}, this._matrices2x2) zz.matrices2x2[tz] = this._matrices2x2[tz];
        for (tz in zz.vectors2Arrays = {}, this._vectors2Arrays) zz.vectors2Arrays[tz] = this._vectors2Arrays[tz];
        for (tz in zz.vectors3Arrays = {}, this._vectors3Arrays) zz.vectors3Arrays[tz] = this._vectors3Arrays[tz];
        for (tz in zz.vectors4Arrays = {}, this._vectors4Arrays) zz.vectors4Arrays[tz] = this._vectors4Arrays[tz];
        for (tz in zz.quaternionsArrays = {}, this._quaternionsArrays) zz.quaternionsArrays[tz] = this._quaternionsArrays[tz];
        return zz
      }
    }

    function Bz(zz, tz, sz) {
      const Wz = Fz.e.Parse((() => new Hz(zz.name, tz, zz.shaderPath, zz.options, zz.storeEffectOnSubMeshes)), zz, tz, sz);
      let Oz;
      for (Oz in zz.stencil && Wz.stencil.parse(zz.stencil, tz, sz), zz.textures) Wz.setTexture(Oz, oz.g.Parse(zz.textures[Oz], tz, sz));
      for (Oz in zz.textureArrays) {
        const Fz = zz.textureArrays[Oz],
          Xz = [];
        for (let zz = 0; zz < Fz.length; zz++) Xz.push(oz.g.Parse(Fz[zz], tz, sz));
        Wz.setTextureArray(Oz, Xz)
      }
      for (Oz in zz.ints) Wz.setInt(Oz, zz.ints[Oz]);
      for (Oz in zz.uints) Wz.setUInt(Oz, zz.uints[Oz]);
      for (Oz in zz.floats) Wz.setFloat(Oz, zz.floats[Oz]);
      for (Oz in zz.floatsArrays) Wz.setFloats(Oz, zz.floatsArrays[Oz]);
      for (Oz in zz.colors3) {
        const tz = zz.colors3[Oz];
        Wz.setColor3(Oz, {
          r: tz[0],
          g: tz[1],
          b: tz[2]
        })
      }
      for (Oz in zz.colors3Arrays) {
        const tz = zz.colors3Arrays[Oz].reduce(((zz, tz, sz) => (sz % 3 === 0 ? zz.push([tz]) : zz[zz.length - 1].push(tz), zz)), []).map((zz => ({
          r: zz[0],
          g: zz[1],
          b: zz[2]
        })));
        Wz.setColor3Array(Oz, tz)
      }
      for (Oz in zz.colors4) {
        const tz = zz.colors4[Oz];
        Wz.setColor4(Oz, {
          r: tz[0],
          g: tz[1],
          b: tz[2],
          a: tz[3]
        })
      }
      for (Oz in zz.colors4Arrays) {
        const tz = zz.colors4Arrays[Oz].reduce(((zz, tz, sz) => (sz % 4 === 0 ? zz.push([tz]) : zz[zz.length - 1].push(tz), zz)), []).map((zz => ({
          r: zz[0],
          g: zz[1],
          b: zz[2],
          a: zz[3]
        })));
        Wz.setColor4Array(Oz, tz)
      }
      for (Oz in zz.vectors2) {
        const tz = zz.vectors2[Oz];
        Wz.setVector2(Oz, {
          x: tz[0],
          y: tz[1]
        })
      }
      for (Oz in zz.vectors3) {
        const tz = zz.vectors3[Oz];
        Wz.setVector3(Oz, {
          x: tz[0],
          y: tz[1],
          z: tz[2]
        })
      }
      for (Oz in zz.vectors4) {
        const tz = zz.vectors4[Oz];
        Wz.setVector4(Oz, {
          x: tz[0],
          y: tz[1],
          z: tz[2],
          w: tz[3]
        })
      }
      for (Oz in zz.quaternions) Wz.setQuaternion(Oz, Xz.h.FromArray(zz.quaternions[Oz]));
      for (Oz in zz.matrices) Wz.setMatrix(Oz, Xz.e.FromArray(zz.matrices[Oz]));
      const vz = Wz;
      for (Oz in zz.matrixArray) vz._matrixArrays[Oz] = new Float32Array(zz.matrixArray[Oz]);
      for (Oz in zz.matrices3x3) Wz.setMatrix3x3(Oz, zz.matrices3x3[Oz]);
      for (Oz in zz.matrices2x2) Wz.setMatrix2x2(Oz, zz.matrices2x2[Oz]);
      for (Oz in zz.vectors2Arrays) Wz.setArray2(Oz, zz.vectors2Arrays[Oz]);
      for (Oz in zz.vectors3Arrays) Wz.setArray3(Oz, zz.vectors3Arrays[Oz]);
      for (Oz in zz.vectors4Arrays) Wz.setArray4(Oz, zz.vectors4Arrays[Oz]);
      for (Oz in zz.quaternionsArrays) Wz.setArray4(Oz, zz.quaternionsArrays[Oz]);
      return Wz
    }
    async function Pz(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((Wz, Xz) => {
        const Oz = new Uz.d;
        Oz.addEventListener("readystatechange", (() => {
          if (4 == Oz.readyState)
            if (200 == Oz.status) {
              const tz = Bz(JSON.parse(Oz.responseText), sz || uz.c.LastCreatedScene, Fz);
              zz && (tz.name = zz), Wz(tz)
            } else Xz("Unable to load the ShaderMaterial")
        })), Oz.open("GET", tz), Oz.send()
      }))
    }
    async function rz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Fz = this?.SnippetUrl ?? Hz.SnippetUrl;
      return await new Promise(((Wz, Xz) => {
        const Oz = new Uz.d;
        Oz.addEventListener("readystatechange", (() => {
          if (4 == Oz.readyState)
            if (200 == Oz.status) {
              const Fz = JSON.parse(JSON.parse(Oz.responseText).jsonPayload),
                Xz = Bz(JSON.parse(Fz.shaderMaterial), tz || uz.c.LastCreatedScene, sz);
              Xz.snippetId = zz, Wz(Xz)
            } else Xz("Unable to load the snippet " + zz)
        })), Oz.open("GET", Fz + "/" + zz.replace(/#/g, "/")), Oz.send()
      }))
    }
    Hz.SnippetUrl = "https://snippet.babylonjs.com";
    const Yz = rz;
    let xz = !1;

    function mz() {
      xz || (xz = !0, Hz.Parse = Bz, Hz.ParseFromFileAsync = Pz, Hz.ParseFromSnippetAsync = rz, Hz.CreateFromSnippetAsync = Yz, (0, Dz.g)("BABYLON.ShaderMaterial", Hz))
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);