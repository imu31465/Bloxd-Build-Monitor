export const id = 254;
export const ids = [254];
export const modules = {
  39634: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Nz,
      f: () => rz,
      i: () => fz,
      k: () => sz,
      l: () => Xz,
      p: () => wz
    });
    var Ez = bz(39182),
      nz = bz(39253),
      iz = bz(36519),
      lz = bz(39299),
      Mz = bz(39636),
      tz = bz(39528),
      Hz = bz(39208),
      Oz = bz(39519),
      pz = bz(36543),
      dz = bz(39511),
      Fz = bz(39505),
      Zz = bz(39540),
      Rz = bz(36564);
    const Kz = {
      effect: null,
      subMesh: null
    };
    class wz extends Oz.b {
      constructor(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(zz, uz, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new iz.d, this._cachedWorldViewProjectionMatrix = new iz.d, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = bz, this._options = {
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
          ...Ez
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
      setTexture(zz, uz) {
        return -1 === this._options.samplers.indexOf(zz) && this._options.samplers.push(zz), this._textures[zz] = uz, this
      }
      setInternalTexture(zz, uz) {
        return -1 === this._options.samplers.indexOf(zz) && this._options.samplers.push(zz), this._internalTextures[zz] = uz, this
      }
      removeTexture(zz) {
        delete this._textures[zz]
      }
      setTextureArray(zz, uz) {
        return -1 === this._options.samplers.indexOf(zz) && this._options.samplers.push(zz), this._checkUniform(zz), this._textureArrays[zz] = uz, this
      }
      setExternalTexture(zz, uz) {
        return -1 === this._options.externalTextures.indexOf(zz) && this._options.externalTextures.push(zz), this._externalTextures[zz] = uz, this
      }
      setFloat(zz, uz) {
        return this._checkUniform(zz), this._floats[zz] = uz, this
      }
      setInt(zz, uz) {
        return this._checkUniform(zz), this._ints[zz] = uz, this
      }
      setUInt(zz, uz) {
        return this._checkUniform(zz), this._uints[zz] = uz, this
      }
      setFloats(zz, uz) {
        return this._checkUniform(zz), this._floatsArrays[zz] = uz, this
      }
      setColor3(zz, uz) {
        return this._checkUniform(zz), this._colors3[zz] = uz, this
      }
      setColor3Array(zz, uz) {
        return this._checkUniform(zz), this._colors3Arrays[zz] = uz.reduce(((zz, uz) => (zz.push(uz.r, uz.g, uz.b), zz)), []), this
      }
      setColor4(zz, uz) {
        return this._checkUniform(zz), this._colors4[zz] = uz, this
      }
      setColor4Array(zz, uz) {
        return this._checkUniform(zz), this._colors4Arrays[zz] = uz.reduce(((zz, uz) => (zz.push(uz.r, uz.g, uz.b, uz.a), zz)), []), this
      }
      setVector2(zz, uz) {
        return this._checkUniform(zz), this._vectors2[zz] = uz, this
      }
      setVector3(zz, uz) {
        return this._checkUniform(zz), this._vectors3[zz] = uz, this
      }
      setVector4(zz, uz) {
        return this._checkUniform(zz), this._vectors4[zz] = uz, this
      }
      setQuaternion(zz, uz) {
        return this._checkUniform(zz), this._quaternions[zz] = uz, this
      }
      setQuaternionArray(zz, uz) {
        return this._checkUniform(zz), this._quaternionsArrays[zz] = uz.reduce(((zz, uz) => (uz.toArray(zz, zz.length), zz)), []), this
      }
      setMatrix(zz, uz) {
        return this._checkUniform(zz), this._matrices[zz] = uz, this
      }
      setMatrices(zz, uz) {
        this._checkUniform(zz);
        const bz = new Float32Array(16 * uz.length);
        for (let Ez = 0; Ez < uz.length; Ez++) {
          uz[Ez].copyToArray(bz, 16 * Ez)
        }
        return this._matrixArrays[zz] = bz, this
      }
      setMatrix3x3(zz, uz) {
        return this._checkUniform(zz), this._matrices3x3[zz] = uz, this
      }
      setMatrix2x2(zz, uz) {
        return this._checkUniform(zz), this._matrices2x2[zz] = uz, this
      }
      setArray2(zz, uz) {
        return this._checkUniform(zz), this._vectors2Arrays[zz] = uz, this
      }
      setArray3(zz, uz) {
        return this._checkUniform(zz), this._vectors3Arrays[zz] = uz, this
      }
      setArray4(zz, uz) {
        return this._checkUniform(zz), this._vectors4Arrays[zz] = uz, this
      }
      setUniformBuffer(zz, uz) {
        return -1 === this._options.uniformBuffers.indexOf(zz) && this._options.uniformBuffers.push(zz), this._uniformBuffers[zz] = uz, this
      }
      setTextureSampler(zz, uz) {
        return -1 === this._options.samplerObjects.indexOf(zz) && this._options.samplerObjects.push(zz), this._textureSamplers[zz] = uz, this
      }
      setStorageBuffer(zz, uz) {
        return -1 === this._options.storageBuffers.indexOf(zz) && this._options.storageBuffers.push(zz), this._storageBuffers[zz] = uz, this
      }
      setDefine(zz, uz) {
        const bz = zz.trimEnd() + " ",
          Ez = this.options.defines.findIndex((uz => uz === zz || uz.startsWith(bz)));
        return Ez >= 0 && this.options.defines.splice(Ez, 1), ("boolean" !== typeof uz || uz) && this.options.defines.push(bz + uz), this
      }
      isReadyForSubMesh(zz, uz, bz) {
        return this.isReady(zz, bz, uz)
      }
      isReady(zz, uz, bz) {
        const Ez = bz && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const zz = Ez ? bz._drawWrapper : this._drawWrapper;
          if (zz.effect && zz._wasPreviouslyReady && zz._wasPreviouslyUsingInstances === uz) return !0
        }
        const iz = this.XT(),
          Mz = iz.uR(),
          Hz = [],
          Oz = [];
        let pz = null,
          Rz = this._shaderPath,
          wz = this._options.uniforms,
          Xz = this._options.uniformBuffers,
          fz = this._options.samplers;
        Mz.getCaps().multiview && iz.activeCamera && iz.activeCamera.outputRenderTarget && iz.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, Hz.push("#define MULTIVIEW"), -1 !== wz.indexOf("viewProjection") && -1 === wz.indexOf("viewProjectionR") && wz.push("viewProjectionR"));
        for (let nz = 0; nz < this._options.defines.length; nz++) {
          const zz = 0 === this._options.defines[nz].indexOf("#define") ? this._options.defines[nz] : `#define ${this._options.defines[nz]}`;
          Hz.push(zz)
        }
        for (let nz = 0; nz < this._options.attributes.length; nz++) Oz.push(this._options.attributes[nz]);
        if (zz && zz.isVerticesDataPresent(lz.j.ColorKind) && (-1 === Oz.indexOf(lz.j.ColorKind) && Oz.push(lz.j.ColorKind), Hz.push("#define VERTEXCOLOR")), uz && (Hz.push("#define INSTANCES"), (0, Fz.xb)(Oz, this._materialHelperNeedsPreviousMatrices), zz?.hasThinInstances && (Hz.push("#define THIN_INSTANCES"), zz && zz.isVerticesDataPresent(lz.j.ColorInstanceKind) && (Oz.push(lz.j.ColorInstanceKind), Hz.push("#define INSTANCESCOLOR")))), zz && zz.useBones && zz.computeBonesUsingShaders && zz.skeleton) {
          Oz.push(lz.j.MatricesIndicesKind), Oz.push(lz.j.MatricesWeightsKind), zz.numBoneInfluencers > 4 && (Oz.push(lz.j.MatricesIndicesExtraKind), Oz.push(lz.j.MatricesWeightsExtraKind));
          const uz = zz.skeleton;
          Hz.push("#define NUM_BONE_INFLUENCERS " + zz.numBoneInfluencers), pz = new tz.c, pz.addCPUSkinningFallback(0, zz), uz.isUsingTextureForMatrices ? (Hz.push("#define BONETEXTURE"), -1 === wz.indexOf("boneTextureInfo") && wz.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (Hz.push("#define BonesPerMesh " + (uz.bones.length + 1)), -1 === wz.indexOf("mBones") && wz.push("mBones"))
        } else Hz.push("#define NUM_BONE_INFLUENCERS 0");
        let sz = 0;
        const rz = zz ? zz.morphTargetManager : null;
        if (rz) {
          const uz = -1 !== Hz.indexOf("#define UV1"),
            bz = -1 !== Hz.indexOf("#define UV2"),
            Ez = -1 !== Hz.indexOf("#define TANGENT"),
            nz = -1 !== Hz.indexOf("#define NORMAL"),
            iz = -1 !== Hz.indexOf("#define VERTEXCOLOR");
          sz = (0, Fz.R)(rz, Hz, Oz, zz, !0, nz, Ez, uz, bz, iz), rz.isUsingTextureForTargets && (-1 === wz.indexOf("morphTargetTextureIndices") && wz.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), sz > 0 && (wz = wz.slice(), wz.push("morphTargetInfluences"), wz.push("morphTargetCount"), wz.push("morphTargetTextureInfo"), wz.push("morphTargetTextureIndices"))
        } else Hz.push("#define NUM_MORPH_INFLUENCERS 0");
        if (zz) {
          const bz = zz.bakedVertexAnimationManager;
          bz && bz.isEnabled && (Hz.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === wz.indexOf("bakedVertexAnimationSettings") && wz.push("bakedVertexAnimationSettings"), -1 === wz.indexOf("bakedVertexAnimationTextureSizeInverted") && wz.push("bakedVertexAnimationTextureSizeInverted"), -1 === wz.indexOf("bakedVertexAnimationTime") && wz.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), uz && Oz.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const nz in this._textures)
          if (!this._textures[nz].isReady()) return !1;
        for (const nz in this._internalTextures)
          if (!this._internalTextures[nz].isReady) return !1;
        zz && this.needAlphaTestingForMesh(zz) && Hz.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, dz.c)(wz), (0, dz.i)(this, iz, Hz)), iz.fogEnabled && zz?.applyFog && iz.fogMode !== nz.e.FOGMODE_NONE && (Hz.push("#define FOG"), -1 === wz.indexOf("view") && wz.push("view"), -1 === wz.indexOf("vFogInfos") && wz.push("vFogInfos"), -1 === wz.indexOf("vFogColor") && wz.push("vFogColor")), this._useLogarithmicDepth && (Hz.push("#define LOGARITHMICDEPTH"), -1 === wz.indexOf("logarithmicDepthConstant") && wz.push("logarithmicDepthConstant"));
        const oz = bz ? bz.getRenderingMesh() : zz;
        if (oz && this.useVertexPulling) {
          const zz = oz.geometry;
          zz && (this._vertexPullingMetadata = (0, Zz.e)(zz), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((zz, uz) => {
            wz.push(`vp_${uz}_info`)
          }))), Hz.push("#define USE_VERTEX_PULLING");
          const uz = oz.geometry?.getIndexBuffer();
          uz && !oz.isUnIndexed && (Hz.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), uz.is32Bits && Hz.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (wz = wz.slice(), Xz = Xz.slice(), fz = fz.slice(), Rz = this.customShaderNameResolve(this.name, wz, Xz, fz, Hz, Oz));
        const Nz = Ez ? bz._getDrawWrapper(void 0, !0) : this._drawWrapper,
          vz = Nz?.effect ?? null,
          xz = Nz?.defines ?? null,
          Jz = Hz.join("\n");
        let Az = vz;
        return xz !== Jz && (Az = Mz.createEffect(Rz, {
          attributes: Oz,
          uniformsNames: wz,
          uniformBuffersNames: Xz,
          samplers: fz,
          defines: Jz,
          fallbacks: pz,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: sz
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, Mz), Ez ? bz.setEffect(Az, Jz, this._materialContext) : Nz && Nz.setEffect(Az, Jz), this._onEffectCreatedObservable && (Kz.effect = Az, Kz.subMesh = bz ?? zz?.hN[0] ?? null, this._onEffectCreatedObservable.notifyObservers(Kz))), Nz._wasPreviouslyUsingInstances = !!uz, !!Az?.isReady() && (vz !== Az && iz.resetCachedMaterial(), Nz._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(zz, uz) {
        const bz = uz ?? this.getEffect();
        if (!bz) return;
        const Ez = this._options.uniforms; - 1 !== Ez.indexOf("world") && bz.setMatrix("world", zz);
        const nz = this.XT(); - 1 !== Ez.indexOf("worldView") && (zz.multiplyToRef(nz.getViewMatrix(), this._cachedWorldViewMatrix), bz.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== Ez.indexOf("worldViewProjection") && (zz.multiplyToRef(nz.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), bz.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== Ez.indexOf("view") && bz.setMatrix("view", nz.getViewMatrix())
      }
      bindForSubMesh(zz, uz, bz) {
        this.bind(zz, uz, bz._drawWrapperOverride?.effect, bz)
      }
      bind(zz, uz, bz, Ez) {
        const nz = Ez && this._storeEffectOnSubMeshes,
          iz = bz ?? (nz ? Ez.effect : this.getEffect());
        if (!iz) return;
        const lz = this.XT();
        this._activeEffect = iz, this.bindOnlyWorldMatrix(zz, bz);
        const Mz = this._options.uniformBuffers;
        let tz = !1;
        if (iz && Mz && Mz.length > 0 && lz.uR().supportsUniformBuffers)
          for (let Oz = 0; Oz < Mz.length; ++Oz) {
            switch (Mz[Oz]) {
              case "Mesh":
                uz && (uz.getMeshUniformBuffer().bindToEffect(iz, "Mesh"), uz.transferToEffect(zz));
                break;
              case "Scene":
                (0, Fz.y)(iz, lz.getSceneUniformBuffer()), lz.finalizeSceneUbo(), tz = !0
            }
          }
        const Hz = uz && nz ? this._mustRebind(lz, iz, Ez, uz.visibility) : lz.getCachedMaterial() !== this;
        if (iz && Hz) {
          let zz;
          for (zz in tz || -1 === this._options.uniforms.indexOf("view") || iz.setMatrix("view", lz.getViewMatrix()), tz || -1 === this._options.uniforms.indexOf("projection") || iz.setMatrix("projection", lz.getProjectionMatrix()), tz || -1 === this._options.uniforms.indexOf("viewProjection") || (iz.setMatrix("viewProjection", lz.getTransformMatrix()), this._multiview && iz.setMatrix("viewProjectionR", lz._transformMatrixR)), lz.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && iz.setVector3("cameraPosition", lz.activeCamera.globalPosition), (0, Fz.g)(uz, iz), (0, dz.d)(iz, this, lz), this._vertexPullingMetadata && (0, Zz.c)(iz, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, Fz.t)(nz ? Ez.materialDefines : iz.defines, iz, lz), uz && (0, Fz.k)(lz, uz, iz), this._textures) iz.setTexture(zz, this._textures[zz]);
          for (zz in this._internalTextures) iz._bindTexture(zz, this._internalTextures[zz]);
          for (zz in this._textureArrays) iz.setTextureArray(zz, this._textureArrays[zz]);
          for (zz in this._ints) iz.setInt(zz, this._ints[zz]);
          for (zz in this._uints) iz.setUInt(zz, this._uints[zz]);
          for (zz in this._floats) iz.setFloat(zz, this._floats[zz]);
          for (zz in this._floatsArrays) iz.setArray(zz, this._floatsArrays[zz]);
          for (zz in this._colors3) iz.setColor3(zz, this._colors3[zz]);
          for (zz in this._colors3Arrays) iz.setArray3(zz, this._colors3Arrays[zz]);
          for (zz in this._colors4) {
            const uz = this._colors4[zz];
            iz.setFloat4(zz, uz.r, uz.g, uz.b, uz.a)
          }
          for (zz in this._colors4Arrays) iz.setArray4(zz, this._colors4Arrays[zz]);
          for (zz in this._vectors2) iz.setVector2(zz, this._vectors2[zz]);
          for (zz in this._vectors3) iz.setVector3(zz, this._vectors3[zz]);
          for (zz in this._vectors4) iz.setVector4(zz, this._vectors4[zz]);
          for (zz in this._quaternions) iz.setQuaternion(zz, this._quaternions[zz]);
          for (zz in this._matrices) iz.setMatrix(zz, this._matrices[zz]);
          for (zz in this._matrixArrays) iz.setMatrices(zz, this._matrixArrays[zz]);
          for (zz in this._matrices3x3) iz.setMatrix3x3(zz, this._matrices3x3[zz]);
          for (zz in this._matrices2x2) iz.setMatrix2x2(zz, this._matrices2x2[zz]);
          for (zz in this._vectors2Arrays) iz.setArray2(zz, this._vectors2Arrays[zz]);
          for (zz in this._vectors3Arrays) iz.setArray3(zz, this._vectors3Arrays[zz]);
          for (zz in this._vectors4Arrays) iz.setArray4(zz, this._vectors4Arrays[zz]);
          for (zz in this._quaternionsArrays) iz.setArray4(zz, this._quaternionsArrays[zz]);
          for (zz in this._uniformBuffers) {
            const uz = this._uniformBuffers[zz].getBuffer();
            uz && iz.bindUniformBuffer(uz, zz)
          }
          const bz = lz.uR(),
            Mz = bz.setExternalTexture;
          if (Mz)
            for (zz in this._externalTextures) Mz.call(bz, zz, this._externalTextures[zz]);
          const Hz = bz.setTextureSampler;
          if (Hz)
            for (zz in this._textureSamplers) Hz.call(bz, zz, this._textureSamplers[zz]);
          const Oz = bz.setStorageBuffer;
          if (Oz)
            for (zz in this._storageBuffers) Oz.call(bz, zz, this._storageBuffers[zz])
        }
        if (iz && uz && (Hz || !this.isFrozen)) {
          (0, Fz.w)(uz, iz), uz.morphTargetManager && uz.morphTargetManager.isUsingTextureForTargets && uz.morphTargetManager._bind(iz);
          const zz = uz.bakedVertexAnimationManager;
          if (zz && zz.isEnabled) {
            const zz = nz ? Ez._drawWrapper : this._drawWrapper;
            uz.bakedVertexAnimationManager?.bind(iz, !!zz._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(uz, iz, Ez)
      }
      getActiveTextures() {
        const zz = super.getActiveTextures();
        for (const uz in this._textures) zz.push(this._textures[uz]);
        for (const uz in this._textureArrays) {
          const bz = this._textureArrays[uz];
          for (let uz = 0; uz < bz.length; uz++) zz.push(bz[uz])
        }
        return zz
      }
      hasTexture(zz) {
        if (super.hasTexture(zz)) return !0;
        for (const bz in this._textures)
          if (this._textures[bz] === zz) return !0;
        const uz = zz.getInternalTexture();
        for (const bz in this._internalTextures)
          if (this._internalTextures[bz] === uz) return !0;
        for (const bz in this._textureArrays) {
          const uz = this._textureArrays[bz];
          for (let bz = 0; bz < uz.length; bz++)
            if (uz[bz] === zz) return !0
        }
        return !1
      }
      clone(zz) {
        const uz = Ez.e.Clone((() => new wz(zz, this.XT(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        uz.name = zz, uz.id = zz, "object" === typeof uz._shaderPath && (uz._shaderPath = {
          ...uz._shaderPath
        }), this._options = {
          ...this._options
        };
        const bz = Object.keys(this._options);
        for (const Ez of bz) {
          const zz = this._options[Ez];
          Array.isArray(zz) && (this._options[Ez] = zz.slice(0))
        }
        this.stencil.copyTo(uz.stencil);
        for (const Ez in this._textures) uz.setTexture(Ez, this._textures[Ez]);
        for (const Ez in this._internalTextures) uz.setInternalTexture(Ez, this._internalTextures[Ez]);
        for (const Ez in this._textureArrays) uz.setTextureArray(Ez, this._textureArrays[Ez]);
        for (const Ez in this._externalTextures) uz.setExternalTexture(Ez, this._externalTextures[Ez]);
        for (const Ez in this._ints) uz.setInt(Ez, this._ints[Ez]);
        for (const Ez in this._uints) uz.setUInt(Ez, this._uints[Ez]);
        for (const Ez in this._floats) uz.setFloat(Ez, this._floats[Ez]);
        for (const Ez in this._floatsArrays) uz.setFloats(Ez, this._floatsArrays[Ez]);
        for (const Ez in this._colors3) uz.setColor3(Ez, this._colors3[Ez]);
        for (const Ez in this._colors3Arrays) uz._colors3Arrays[Ez] = this._colors3Arrays[Ez];
        for (const Ez in this._colors4) uz.setColor4(Ez, this._colors4[Ez]);
        for (const Ez in this._colors4Arrays) uz._colors4Arrays[Ez] = this._colors4Arrays[Ez];
        for (const Ez in this._vectors2) uz.setVector2(Ez, this._vectors2[Ez]);
        for (const Ez in this._vectors3) uz.setVector3(Ez, this._vectors3[Ez]);
        for (const Ez in this._vectors4) uz.setVector4(Ez, this._vectors4[Ez]);
        for (const Ez in this._quaternions) uz.setQuaternion(Ez, this._quaternions[Ez]);
        for (const Ez in this._quaternionsArrays) uz._quaternionsArrays[Ez] = this._quaternionsArrays[Ez];
        for (const Ez in this._matrices) uz.setMatrix(Ez, this._matrices[Ez]);
        for (const Ez in this._matrixArrays) uz._matrixArrays[Ez] = this._matrixArrays[Ez].slice();
        for (const Ez in this._matrices3x3) uz.setMatrix3x3(Ez, this._matrices3x3[Ez]);
        for (const Ez in this._matrices2x2) uz.setMatrix2x2(Ez, this._matrices2x2[Ez]);
        for (const Ez in this._vectors2Arrays) uz.setArray2(Ez, this._vectors2Arrays[Ez]);
        for (const Ez in this._vectors3Arrays) uz.setArray3(Ez, this._vectors3Arrays[Ez]);
        for (const Ez in this._vectors4Arrays) uz.setArray4(Ez, this._vectors4Arrays[Ez]);
        for (const Ez in this._uniformBuffers) uz.setUniformBuffer(Ez, this._uniformBuffers[Ez]);
        for (const Ez in this._textureSamplers) uz.setTextureSampler(Ez, this._textureSamplers[Ez]);
        for (const Ez in this._storageBuffers) uz.setStorageBuffer(Ez, this._storageBuffers[Ez]);
        return uz
      }
      dispose(zz, uz, bz) {
        if (uz) {
          let zz;
          for (zz in this._textures) this._textures[zz].dispose();
          for (zz in this._internalTextures) this._internalTextures[zz].dispose();
          for (zz in this._textureArrays) {
            const uz = this._textureArrays[zz];
            for (let zz = 0; zz < uz.length; zz++) uz[zz].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(zz, uz, bz)
      }
      serialize() {
        const zz = Ez.e.Serialize(this);
        let uz;
        for (uz in zz.customType = "BABYLON.ShaderMaterial", zz.uniqueId = this.uniqueId, zz.options = this._options, zz.shaderPath = this._shaderPath, zz.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, zz.stencil = this.stencil.serialize(), zz.textures = {}, this._textures) zz.textures[uz] = this._textures[uz].serialize();
        for (uz in zz.textureArrays = {}, this._textureArrays) {
          zz.textureArrays[uz] = [];
          const bz = this._textureArrays[uz];
          for (let Ez = 0; Ez < bz.length; Ez++) zz.textureArrays[uz].push(bz[Ez].serialize())
        }
        for (uz in zz.ints = {}, this._ints) zz.ints[uz] = this._ints[uz];
        for (uz in zz.uints = {}, this._uints) zz.uints[uz] = this._uints[uz];
        for (uz in zz.floats = {}, this._floats) zz.floats[uz] = this._floats[uz];
        for (uz in zz.floatsArrays = {}, this._floatsArrays) zz.floatsArrays[uz] = this._floatsArrays[uz];
        for (uz in zz.colors3 = {}, this._colors3) {
          const bz = this._colors3[uz];
          zz.colors3[uz] = [bz.r, bz.g, bz.b]
        }
        for (uz in zz.colors3Arrays = {}, this._colors3Arrays) zz.colors3Arrays[uz] = this._colors3Arrays[uz];
        for (uz in zz.colors4 = {}, this._colors4) {
          const bz = this._colors4[uz];
          zz.colors4[uz] = [bz.r, bz.g, bz.b, bz.a]
        }
        for (uz in zz.colors4Arrays = {}, this._colors4Arrays) zz.colors4Arrays[uz] = this._colors4Arrays[uz];
        for (uz in zz.vectors2 = {}, this._vectors2) {
          const bz = this._vectors2[uz];
          zz.vectors2[uz] = [bz.x, bz.y]
        }
        for (uz in zz.vectors3 = {}, this._vectors3) {
          const bz = this._vectors3[uz];
          zz.vectors3[uz] = [bz.x, bz.y, bz.z]
        }
        for (uz in zz.vectors4 = {}, this._vectors4) {
          const bz = this._vectors4[uz];
          zz.vectors4[uz] = [bz.x, bz.y, bz.z, bz.w]
        }
        for (uz in zz.quaternions = {}, this._quaternions) zz.quaternions[uz] = this._quaternions[uz].obz();
        for (uz in zz.matrices = {}, this._matrices) zz.matrices[uz] = this._matrices[uz].obz();
        for (uz in zz.matrixArray = {}, this._matrixArrays) zz.matrixArray[uz] = this._matrixArrays[uz];
        for (uz in zz.matrices3x3 = {}, this._matrices3x3) zz.matrices3x3[uz] = this._matrices3x3[uz];
        for (uz in zz.matrices2x2 = {}, this._matrices2x2) zz.matrices2x2[uz] = this._matrices2x2[uz];
        for (uz in zz.vectors2Arrays = {}, this._vectors2Arrays) zz.vectors2Arrays[uz] = this._vectors2Arrays[uz];
        for (uz in zz.vectors3Arrays = {}, this._vectors3Arrays) zz.vectors3Arrays[uz] = this._vectors3Arrays[uz];
        for (uz in zz.vectors4Arrays = {}, this._vectors4Arrays) zz.vectors4Arrays[uz] = this._vectors4Arrays[uz];
        for (uz in zz.quaternionsArrays = {}, this._quaternionsArrays) zz.quaternionsArrays[uz] = this._quaternionsArrays[uz];
        return zz
      }
    }

    function Xz(zz, uz, bz) {
      const nz = Ez.e.Parse((() => new wz(zz.name, uz, zz.shaderPath, zz.options, zz.storeEffectOnSubMeshes)), zz, uz, bz);
      let lz;
      for (lz in zz.stencil && nz.stencil.parse(zz.stencil, uz, bz), zz.textures) nz.setTexture(lz, Mz.e.Parse(zz.textures[lz], uz, bz));
      for (lz in zz.textureArrays) {
        const Ez = zz.textureArrays[lz],
          iz = [];
        for (let zz = 0; zz < Ez.length; zz++) iz.push(Mz.e.Parse(Ez[zz], uz, bz));
        nz.setTextureArray(lz, iz)
      }
      for (lz in zz.ints) nz.setInt(lz, zz.ints[lz]);
      for (lz in zz.uints) nz.setUInt(lz, zz.uints[lz]);
      for (lz in zz.floats) nz.setFloat(lz, zz.floats[lz]);
      for (lz in zz.floatsArrays) nz.setFloats(lz, zz.floatsArrays[lz]);
      for (lz in zz.colors3) {
        const uz = zz.colors3[lz];
        nz.setColor3(lz, {
          r: uz[0],
          g: uz[1],
          b: uz[2]
        })
      }
      for (lz in zz.colors3Arrays) {
        const uz = zz.colors3Arrays[lz].reduce(((zz, uz, bz) => (bz % 3 === 0 ? zz.push([uz]) : zz[zz.length - 1].push(uz), zz)), []).map((zz => ({
          r: zz[0],
          g: zz[1],
          b: zz[2]
        })));
        nz.setColor3Array(lz, uz)
      }
      for (lz in zz.colors4) {
        const uz = zz.colors4[lz];
        nz.setColor4(lz, {
          r: uz[0],
          g: uz[1],
          b: uz[2],
          a: uz[3]
        })
      }
      for (lz in zz.colors4Arrays) {
        const uz = zz.colors4Arrays[lz].reduce(((zz, uz, bz) => (bz % 4 === 0 ? zz.push([uz]) : zz[zz.length - 1].push(uz), zz)), []).map((zz => ({
          r: zz[0],
          g: zz[1],
          b: zz[2],
          a: zz[3]
        })));
        nz.setColor4Array(lz, uz)
      }
      for (lz in zz.vectors2) {
        const uz = zz.vectors2[lz];
        nz.setVector2(lz, {
          x: uz[0],
          y: uz[1]
        })
      }
      for (lz in zz.vectors3) {
        const uz = zz.vectors3[lz];
        nz.setVector3(lz, {
          x: uz[0],
          y: uz[1],
          z: uz[2]
        })
      }
      for (lz in zz.vectors4) {
        const uz = zz.vectors4[lz];
        nz.setVector4(lz, {
          x: uz[0],
          y: uz[1],
          z: uz[2],
          w: uz[3]
        })
      }
      for (lz in zz.quaternions) nz.setQuaternion(lz, iz.h.FromArray(zz.quaternions[lz]));
      for (lz in zz.matrices) nz.setMatrix(lz, iz.d.FromArray(zz.matrices[lz]));
      const tz = nz;
      for (lz in zz.matrixArray) tz._matrixArrays[lz] = new Float32Array(zz.matrixArray[lz]);
      for (lz in zz.matrices3x3) nz.setMatrix3x3(lz, zz.matrices3x3[lz]);
      for (lz in zz.matrices2x2) nz.setMatrix2x2(lz, zz.matrices2x2[lz]);
      for (lz in zz.vectors2Arrays) nz.setArray2(lz, zz.vectors2Arrays[lz]);
      for (lz in zz.vectors3Arrays) nz.setArray3(lz, zz.vectors3Arrays[lz]);
      for (lz in zz.vectors4Arrays) nz.setArray4(lz, zz.vectors4Arrays[lz]);
      for (lz in zz.quaternionsArrays) nz.setArray4(lz, zz.quaternionsArrays[lz]);
      return nz
    }
    async function fz(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((nz, iz) => {
        const lz = new Hz.b;
        lz.addEventListener("readystatechange", (() => {
          if (4 == lz.readyState)
            if (200 == lz.status) {
              const uz = Xz(JSON.parse(lz.responseText), bz || pz.d.LastCreatedScene, Ez);
              zz && (uz.name = zz), nz(uz)
            } else iz("Unable to load the ShaderMaterial")
        })), lz.open("GET", uz), lz.send()
      }))
    }
    async function sz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Ez = this?.SnippetUrl ?? wz.SnippetUrl;
      return await new Promise(((nz, iz) => {
        const lz = new Hz.b;
        lz.addEventListener("readystatechange", (() => {
          if (4 == lz.readyState)
            if (200 == lz.status) {
              const Ez = JSON.parse(JSON.parse(lz.responseText).jsonPayload),
                iz = Xz(JSON.parse(Ez.shaderMaterial), uz || pz.d.LastCreatedScene, bz);
              iz.snippetId = zz, nz(iz)
            } else iz("Unable to load the snippet " + zz)
        })), lz.open("GET", Ez + "/" + zz.replace(/#/g, "/")), lz.send()
      }))
    }
    wz.SnippetUrl = "https://snippet.babylonjs.com";
    const rz = sz;
    let oz = !1;

    function Nz() {
      oz || (oz = !0, wz.Parse = Xz, wz.ParseFromFileAsync = fz, wz.ParseFromSnippetAsync = sz, wz.CreateFromSnippetAsync = rz, (0, Rz.c)("BABYLON.ShaderMaterial", wz))
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);