export const id = 264;
export const ids = [264];
export const modules = {
  40504: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => hS,
      f: () => DS,
      g: () => PS,
      i: () => QS,
      k: () => nS,
      o: () => CS
    });
    var tS = gS(40068),
      bS = gS(40131),
      XS = gS(37117),
      xS = gS(40183),
      NS = gS(40510),
      qS = gS(40392),
      uS = gS(40092),
      IS = gS(40386),
      fS = gS(37138),
      kS = gS(40375),
      aS = gS(40367),
      KS = gS(40405),
      jS = gS(37164);
    const GS = {
      effect: null,
      subMesh: null
    };
    class CS extends IS.d {
      constructor(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(SS, HS, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new XS.e, this._cachedWorldViewProjectionMatrix = new XS.e, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = gS, this._options = {
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
          ...tS
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(SS) {
        this._shaderPath = SS
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
      _checkUniform(SS) {
        -1 === this._options.uniforms.indexOf(SS) && this._options.uniforms.push(SS)
      }
      setTexture(SS, HS) {
        return -1 === this._options.samplers.indexOf(SS) && this._options.samplers.push(SS), this._textures[SS] = HS, this
      }
      setInternalTexture(SS, HS) {
        return -1 === this._options.samplers.indexOf(SS) && this._options.samplers.push(SS), this._internalTextures[SS] = HS, this
      }
      removeTexture(SS) {
        delete this._textures[SS]
      }
      setTextureArray(SS, HS) {
        return -1 === this._options.samplers.indexOf(SS) && this._options.samplers.push(SS), this._checkUniform(SS), this._textureArrays[SS] = HS, this
      }
      setExternalTexture(SS, HS) {
        return -1 === this._options.externalTextures.indexOf(SS) && this._options.externalTextures.push(SS), this._externalTextures[SS] = HS, this
      }
      setFloat(SS, HS) {
        return this._checkUniform(SS), this._floats[SS] = HS, this
      }
      setInt(SS, HS) {
        return this._checkUniform(SS), this._ints[SS] = HS, this
      }
      setUInt(SS, HS) {
        return this._checkUniform(SS), this._uints[SS] = HS, this
      }
      setFloats(SS, HS) {
        return this._checkUniform(SS), this._floatsArrays[SS] = HS, this
      }
      setColor3(SS, HS) {
        return this._checkUniform(SS), this._colors3[SS] = HS, this
      }
      setColor3Array(SS, HS) {
        return this._checkUniform(SS), this._colors3Arrays[SS] = HS.reduce(((SS, HS) => (SS.push(HS.r, HS.g, HS.b), SS)), []), this
      }
      setColor4(SS, HS) {
        return this._checkUniform(SS), this._colors4[SS] = HS, this
      }
      setColor4Array(SS, HS) {
        return this._checkUniform(SS), this._colors4Arrays[SS] = HS.reduce(((SS, HS) => (SS.push(HS.r, HS.g, HS.b, HS.a), SS)), []), this
      }
      setVector2(SS, HS) {
        return this._checkUniform(SS), this._vectors2[SS] = HS, this
      }
      setVector3(SS, HS) {
        return this._checkUniform(SS), this._vectors3[SS] = HS, this
      }
      setVector4(SS, HS) {
        return this._checkUniform(SS), this._vectors4[SS] = HS, this
      }
      setQuaternion(SS, HS) {
        return this._checkUniform(SS), this._quaternions[SS] = HS, this
      }
      setQuaternionArray(SS, HS) {
        return this._checkUniform(SS), this._quaternionsArrays[SS] = HS.reduce(((SS, HS) => (HS.toArray(SS, SS.length), SS)), []), this
      }
      setMatrix(SS, HS) {
        return this._checkUniform(SS), this._matrices[SS] = HS, this
      }
      setMatrices(SS, HS) {
        this._checkUniform(SS);
        const gS = new Float32Array(16 * HS.length);
        for (let tS = 0; tS < HS.length; tS++) {
          HS[tS].copyToArray(gS, 16 * tS)
        }
        return this._matrixArrays[SS] = gS, this
      }
      setMatrix3x3(SS, HS) {
        return this._checkUniform(SS), this._matrices3x3[SS] = HS, this
      }
      setMatrix2x2(SS, HS) {
        return this._checkUniform(SS), this._matrices2x2[SS] = HS, this
      }
      setArray2(SS, HS) {
        return this._checkUniform(SS), this._vectors2Arrays[SS] = HS, this
      }
      setArray3(SS, HS) {
        return this._checkUniform(SS), this._vectors3Arrays[SS] = HS, this
      }
      setArray4(SS, HS) {
        return this._checkUniform(SS), this._vectors4Arrays[SS] = HS, this
      }
      setUniformBuffer(SS, HS) {
        return -1 === this._options.uniformBuffers.indexOf(SS) && this._options.uniformBuffers.push(SS), this._uniformBuffers[SS] = HS, this
      }
      setTextureSampler(SS, HS) {
        return -1 === this._options.samplerObjects.indexOf(SS) && this._options.samplerObjects.push(SS), this._textureSamplers[SS] = HS, this
      }
      setStorageBuffer(SS, HS) {
        return -1 === this._options.storageBuffers.indexOf(SS) && this._options.storageBuffers.push(SS), this._storageBuffers[SS] = HS, this
      }
      setDefine(SS, HS) {
        const gS = SS.trimEnd() + " ",
          tS = this.options.defines.findIndex((HS => HS === SS || HS.startsWith(gS)));
        return tS >= 0 && this.options.defines.splice(tS, 1), ("boolean" !== typeof HS || HS) && this.options.defines.push(gS + HS), this
      }
      isReadyForSubMesh(SS, HS, gS) {
        return this.isReady(SS, gS, HS)
      }
      isReady(SS, HS, gS) {
        const tS = gS && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const SS = tS ? gS._drawWrapper : this._drawWrapper;
          if (SS.effect && SS._wasPreviouslyReady && SS._wasPreviouslyUsingInstances === HS) return !0
        }
        const XS = this.lL(),
          NS = XS.AK(),
          uS = [],
          IS = [];
        let fS = null,
          jS = this._shaderPath,
          CS = this._options.uniforms,
          nS = this._options.uniformBuffers,
          PS = this._options.samplers;
        NS.getCaps().multiview && XS.activeCamera && XS.activeCamera.outputRenderTarget && XS.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, uS.push("#define MULTIVIEW"), -1 !== CS.indexOf("viewProjection") && -1 === CS.indexOf("viewProjectionR") && CS.push("viewProjectionR"));
        for (let bS = 0; bS < this._options.defines.length; bS++) {
          const SS = 0 === this._options.defines[bS].indexOf("#define") ? this._options.defines[bS] : `#define ${this._options.defines[bS]}`;
          uS.push(SS)
        }
        for (let bS = 0; bS < this._options.attributes.length; bS++) IS.push(this._options.attributes[bS]);
        if (SS && SS.isVerticesDataPresent(xS.h.ColorKind) && (-1 === IS.indexOf(xS.h.ColorKind) && IS.push(xS.h.ColorKind), uS.push("#define VERTEXCOLOR")), HS && (uS.push("#define INSTANCES"), (0, aS.sb)(IS, this._materialHelperNeedsPreviousMatrices), SS?.hasThinInstances && (uS.push("#define THIN_INSTANCES"), SS && SS.isVerticesDataPresent(xS.h.ColorInstanceKind) && (IS.push(xS.h.ColorInstanceKind), uS.push("#define INSTANCESCOLOR")))), SS && SS.useBones && SS.computeBonesUsingShaders && SS.skeleton) {
          IS.push(xS.h.MatricesIndicesKind), IS.push(xS.h.MatricesWeightsKind), SS.numBoneInfluencers > 4 && (IS.push(xS.h.MatricesIndicesExtraKind), IS.push(xS.h.MatricesWeightsExtraKind));
          const HS = SS.skeleton;
          uS.push("#define NUM_BONE_INFLUENCERS " + SS.numBoneInfluencers), fS = new qS.c, fS.addCPUSkinningFallback(0, SS), HS.isUsingTextureForMatrices ? (uS.push("#define BONETEXTURE"), -1 === CS.indexOf("boneTextureInfo") && CS.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (uS.push("#define BonesPerMesh " + (HS.bones.length + 1)), -1 === CS.indexOf("mBones") && CS.push("mBones"))
        } else uS.push("#define NUM_BONE_INFLUENCERS 0");
        let QS = 0;
        const DS = SS ? SS.morphTargetManager : null;
        if (DS) {
          const HS = -1 !== uS.indexOf("#define UV1"),
            gS = -1 !== uS.indexOf("#define UV2"),
            tS = -1 !== uS.indexOf("#define TANGENT"),
            bS = -1 !== uS.indexOf("#define NORMAL"),
            XS = -1 !== uS.indexOf("#define VERTEXCOLOR");
          QS = (0, aS.L)(DS, uS, IS, SS, !0, bS, tS, HS, gS, XS), DS.isUsingTextureForTargets && (-1 === CS.indexOf("morphTargetTextureIndices") && CS.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), QS > 0 && (CS = CS.slice(), CS.push("morphTargetInfluences"), CS.push("morphTargetCount"), CS.push("morphTargetTextureInfo"), CS.push("morphTargetTextureIndices"))
        } else uS.push("#define NUM_MORPH_INFLUENCERS 0");
        if (SS) {
          const gS = SS.bakedVertexAnimationManager;
          gS && gS.isEnabled && (uS.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === CS.indexOf("bakedVertexAnimationSettings") && CS.push("bakedVertexAnimationSettings"), -1 === CS.indexOf("bakedVertexAnimationTextureSizeInverted") && CS.push("bakedVertexAnimationTextureSizeInverted"), -1 === CS.indexOf("bakedVertexAnimationTime") && CS.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), HS && IS.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const bS in this._textures)
          if (!this._textures[bS].isReady()) return !1;
        for (const bS in this._internalTextures)
          if (!this._internalTextures[bS].isReady) return !1;
        SS && this.needAlphaTestingForMesh(SS) && uS.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, kS.e)(CS), (0, kS.j)(this, XS, uS)), XS.fogEnabled && SS?.applyFog && XS.fogMode !== bS.i.FOGMODE_NONE && (uS.push("#define FOG"), -1 === CS.indexOf("view") && CS.push("view"), -1 === CS.indexOf("vFogInfos") && CS.push("vFogInfos"), -1 === CS.indexOf("vFogColor") && CS.push("vFogColor")), this._useLogarithmicDepth && (uS.push("#define LOGARITHMICDEPTH"), -1 === CS.indexOf("logarithmicDepthConstant") && CS.push("logarithmicDepthConstant"));
        const wS = gS ? gS.getRenderingMesh() : SS;
        if (wS && this.useVertexPulling) {
          const SS = wS.geometry;
          SS && (this._vertexPullingMetadata = (0, KS.e)(SS), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((SS, HS) => {
            CS.push(`vp_${HS}_info`)
          }))), uS.push("#define USE_VERTEX_PULLING");
          const HS = wS.geometry?.getIndexBuffer();
          HS && !wS.isUnIndexed && (uS.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), HS.is32Bits && uS.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (CS = CS.slice(), nS = nS.slice(), PS = PS.slice(), jS = this.customShaderNameResolve(this.name, CS, nS, PS, uS, IS));
        const hS = tS ? gS._getDrawWrapper(void 0, !0) : this._drawWrapper,
          ZS = hS?.effect ?? null,
          JS = hS?.defines ?? null,
          OS = uS.join("\n");
        let dS = ZS;
        return JS !== OS && (dS = NS.createEffect(jS, {
          attributes: IS,
          uniformsNames: CS,
          uniformBuffersNames: nS,
          samplers: PS,
          defines: OS,
          fallbacks: fS,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: QS
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, NS), tS ? gS.setEffect(dS, OS, this._materialContext) : hS && hS.setEffect(dS, OS), this._onEffectCreatedObservable && (GS.effect = dS, GS.subMesh = gS ?? SS?.dD[0] ?? null, this._onEffectCreatedObservable.notifyObservers(GS))), hS._wasPreviouslyUsingInstances = !!HS, !!dS?.isReady() && (ZS !== dS && XS.resetCachedMaterial(), hS._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(SS, HS) {
        const gS = HS ?? this.getEffect();
        if (!gS) return;
        const tS = this._options.uniforms; - 1 !== tS.indexOf("world") && gS.setMatrix("world", SS);
        const bS = this.lL(); - 1 !== tS.indexOf("worldView") && (SS.multiplyToRef(bS.getViewMatrix(), this._cachedWorldViewMatrix), gS.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== tS.indexOf("worldViewProjection") && (SS.multiplyToRef(bS.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), gS.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== tS.indexOf("view") && gS.setMatrix("view", bS.getViewMatrix())
      }
      bindForSubMesh(SS, HS, gS) {
        this.bind(SS, HS, gS._drawWrapperOverride?.effect, gS)
      }
      bind(SS, HS, gS, tS) {
        const bS = tS && this._storeEffectOnSubMeshes,
          XS = gS ?? (bS ? tS.effect : this.getEffect());
        if (!XS) return;
        const xS = this.lL();
        this._activeEffect = XS, this.bindOnlyWorldMatrix(SS, gS);
        const NS = this._options.uniformBuffers;
        let qS = !1;
        if (XS && NS && NS.length > 0 && xS.AK().supportsUniformBuffers)
          for (let IS = 0; IS < NS.length; ++IS) {
            switch (NS[IS]) {
              case "Mesh":
                HS && (HS.getMeshUniformBuffer().bindToEffect(XS, "Mesh"), HS.transferToEffect(SS));
                break;
              case "Scene":
                (0, aS.v)(XS, xS.getSceneUniformBuffer()), xS.finalizeSceneUbo(), qS = !0
            }
          }
        const uS = HS && bS ? this._mustRebind(xS, XS, tS, HS.visibility) : xS.getCachedMaterial() !== this;
        if (XS && uS) {
          let SS;
          for (SS in qS || -1 === this._options.uniforms.indexOf("view") || XS.setMatrix("view", xS.getViewMatrix()), qS || -1 === this._options.uniforms.indexOf("projection") || XS.setMatrix("projection", xS.getProjectionMatrix()), qS || -1 === this._options.uniforms.indexOf("viewProjection") || (XS.setMatrix("viewProjection", xS.getTransformMatrix()), this._multiview && XS.setMatrix("viewProjectionR", xS._transformMatrixR)), xS.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && XS.setVector3("cameraPosition", xS.activeCamera.globalPosition), (0, aS.f)(HS, XS), (0, kS.f)(XS, this, xS), this._vertexPullingMetadata && (0, KS.b)(XS, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, aS.q)(bS ? tS.materialDefines : XS.defines, XS, xS), HS && (0, aS.i)(xS, HS, XS), this._textures) XS.setTexture(SS, this._textures[SS]);
          for (SS in this._internalTextures) XS._bindTexture(SS, this._internalTextures[SS]);
          for (SS in this._textureArrays) XS.setTextureArray(SS, this._textureArrays[SS]);
          for (SS in this._ints) XS.setInt(SS, this._ints[SS]);
          for (SS in this._uints) XS.setUInt(SS, this._uints[SS]);
          for (SS in this._floats) XS.setFloat(SS, this._floats[SS]);
          for (SS in this._floatsArrays) XS.setArray(SS, this._floatsArrays[SS]);
          for (SS in this._colors3) XS.setColor3(SS, this._colors3[SS]);
          for (SS in this._colors3Arrays) XS.setArray3(SS, this._colors3Arrays[SS]);
          for (SS in this._colors4) {
            const HS = this._colors4[SS];
            XS.setFloat4(SS, HS.r, HS.g, HS.b, HS.a)
          }
          for (SS in this._colors4Arrays) XS.setArray4(SS, this._colors4Arrays[SS]);
          for (SS in this._vectors2) XS.setVector2(SS, this._vectors2[SS]);
          for (SS in this._vectors3) XS.setVector3(SS, this._vectors3[SS]);
          for (SS in this._vectors4) XS.setVector4(SS, this._vectors4[SS]);
          for (SS in this._quaternions) XS.setQuaternion(SS, this._quaternions[SS]);
          for (SS in this._matrices) XS.setMatrix(SS, this._matrices[SS]);
          for (SS in this._matrixArrays) XS.setMatrices(SS, this._matrixArrays[SS]);
          for (SS in this._matrices3x3) XS.setMatrix3x3(SS, this._matrices3x3[SS]);
          for (SS in this._matrices2x2) XS.setMatrix2x2(SS, this._matrices2x2[SS]);
          for (SS in this._vectors2Arrays) XS.setArray2(SS, this._vectors2Arrays[SS]);
          for (SS in this._vectors3Arrays) XS.setArray3(SS, this._vectors3Arrays[SS]);
          for (SS in this._vectors4Arrays) XS.setArray4(SS, this._vectors4Arrays[SS]);
          for (SS in this._quaternionsArrays) XS.setArray4(SS, this._quaternionsArrays[SS]);
          for (SS in this._uniformBuffers) {
            const HS = this._uniformBuffers[SS].getBuffer();
            HS && XS.bindUniformBuffer(HS, SS)
          }
          const gS = xS.AK(),
            NS = gS.setExternalTexture;
          if (NS)
            for (SS in this._externalTextures) NS.call(gS, SS, this._externalTextures[SS]);
          const uS = gS.setTextureSampler;
          if (uS)
            for (SS in this._textureSamplers) uS.call(gS, SS, this._textureSamplers[SS]);
          const IS = gS.setStorageBuffer;
          if (IS)
            for (SS in this._storageBuffers) IS.call(gS, SS, this._storageBuffers[SS])
        }
        if (XS && HS && (uS || !this.isFrozen)) {
          (0, aS.t)(HS, XS), HS.morphTargetManager && HS.morphTargetManager.isUsingTextureForTargets && HS.morphTargetManager._bind(XS);
          const SS = HS.bakedVertexAnimationManager;
          if (SS && SS.isEnabled) {
            const SS = bS ? tS._drawWrapper : this._drawWrapper;
            HS.bakedVertexAnimationManager?.bind(XS, !!SS._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(HS, XS, tS)
      }
      getActiveTextures() {
        const SS = super.getActiveTextures();
        for (const HS in this._textures) SS.push(this._textures[HS]);
        for (const HS in this._textureArrays) {
          const gS = this._textureArrays[HS];
          for (let HS = 0; HS < gS.length; HS++) SS.push(gS[HS])
        }
        return SS
      }
      hasTexture(SS) {
        if (super.hasTexture(SS)) return !0;
        for (const gS in this._textures)
          if (this._textures[gS] === SS) return !0;
        const HS = SS.getInternalTexture();
        for (const gS in this._internalTextures)
          if (this._internalTextures[gS] === HS) return !0;
        for (const gS in this._textureArrays) {
          const HS = this._textureArrays[gS];
          for (let gS = 0; gS < HS.length; gS++)
            if (HS[gS] === SS) return !0
        }
        return !1
      }
      clone(SS) {
        const HS = tS.b.Clone((() => new CS(SS, this.lL(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        HS.name = SS, HS.id = SS, "object" === typeof HS._shaderPath && (HS._shaderPath = {
          ...HS._shaderPath
        }), this._options = {
          ...this._options
        };
        const gS = Object.keys(this._options);
        for (const tS of gS) {
          const SS = this._options[tS];
          Array.isArray(SS) && (this._options[tS] = SS.slice(0))
        }
        this.stencil.copyTo(HS.stencil);
        for (const tS in this._textures) HS.setTexture(tS, this._textures[tS]);
        for (const tS in this._internalTextures) HS.setInternalTexture(tS, this._internalTextures[tS]);
        for (const tS in this._textureArrays) HS.setTextureArray(tS, this._textureArrays[tS]);
        for (const tS in this._externalTextures) HS.setExternalTexture(tS, this._externalTextures[tS]);
        for (const tS in this._ints) HS.setInt(tS, this._ints[tS]);
        for (const tS in this._uints) HS.setUInt(tS, this._uints[tS]);
        for (const tS in this._floats) HS.setFloat(tS, this._floats[tS]);
        for (const tS in this._floatsArrays) HS.setFloats(tS, this._floatsArrays[tS]);
        for (const tS in this._colors3) HS.setColor3(tS, this._colors3[tS]);
        for (const tS in this._colors3Arrays) HS._colors3Arrays[tS] = this._colors3Arrays[tS];
        for (const tS in this._colors4) HS.setColor4(tS, this._colors4[tS]);
        for (const tS in this._colors4Arrays) HS._colors4Arrays[tS] = this._colors4Arrays[tS];
        for (const tS in this._vectors2) HS.setVector2(tS, this._vectors2[tS]);
        for (const tS in this._vectors3) HS.setVector3(tS, this._vectors3[tS]);
        for (const tS in this._vectors4) HS.setVector4(tS, this._vectors4[tS]);
        for (const tS in this._quaternions) HS.setQuaternion(tS, this._quaternions[tS]);
        for (const tS in this._quaternionsArrays) HS._quaternionsArrays[tS] = this._quaternionsArrays[tS];
        for (const tS in this._matrices) HS.setMatrix(tS, this._matrices[tS]);
        for (const tS in this._matrixArrays) HS._matrixArrays[tS] = this._matrixArrays[tS].slice();
        for (const tS in this._matrices3x3) HS.setMatrix3x3(tS, this._matrices3x3[tS]);
        for (const tS in this._matrices2x2) HS.setMatrix2x2(tS, this._matrices2x2[tS]);
        for (const tS in this._vectors2Arrays) HS.setArray2(tS, this._vectors2Arrays[tS]);
        for (const tS in this._vectors3Arrays) HS.setArray3(tS, this._vectors3Arrays[tS]);
        for (const tS in this._vectors4Arrays) HS.setArray4(tS, this._vectors4Arrays[tS]);
        for (const tS in this._uniformBuffers) HS.setUniformBuffer(tS, this._uniformBuffers[tS]);
        for (const tS in this._textureSamplers) HS.setTextureSampler(tS, this._textureSamplers[tS]);
        for (const tS in this._storageBuffers) HS.setStorageBuffer(tS, this._storageBuffers[tS]);
        return HS
      }
      dispose(SS, HS, gS) {
        if (HS) {
          let SS;
          for (SS in this._textures) this._textures[SS].dispose();
          for (SS in this._internalTextures) this._internalTextures[SS].dispose();
          for (SS in this._textureArrays) {
            const HS = this._textureArrays[SS];
            for (let SS = 0; SS < HS.length; SS++) HS[SS].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(SS, HS, gS)
      }
      serialize() {
        const SS = tS.b.Serialize(this);
        let HS;
        for (HS in SS.customType = "BABYLON.ShaderMaterial", SS.uniqueId = this.uniqueId, SS.options = this._options, SS.shaderPath = this._shaderPath, SS.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, SS.stencil = this.stencil.serialize(), SS.textures = {}, this._textures) SS.textures[HS] = this._textures[HS].serialize();
        for (HS in SS.textureArrays = {}, this._textureArrays) {
          SS.textureArrays[HS] = [];
          const gS = this._textureArrays[HS];
          for (let tS = 0; tS < gS.length; tS++) SS.textureArrays[HS].push(gS[tS].serialize())
        }
        for (HS in SS.ints = {}, this._ints) SS.ints[HS] = this._ints[HS];
        for (HS in SS.uints = {}, this._uints) SS.uints[HS] = this._uints[HS];
        for (HS in SS.floats = {}, this._floats) SS.floats[HS] = this._floats[HS];
        for (HS in SS.floatsArrays = {}, this._floatsArrays) SS.floatsArrays[HS] = this._floatsArrays[HS];
        for (HS in SS.colors3 = {}, this._colors3) {
          const gS = this._colors3[HS];
          SS.colors3[HS] = [gS.r, gS.g, gS.b]
        }
        for (HS in SS.colors3Arrays = {}, this._colors3Arrays) SS.colors3Arrays[HS] = this._colors3Arrays[HS];
        for (HS in SS.colors4 = {}, this._colors4) {
          const gS = this._colors4[HS];
          SS.colors4[HS] = [gS.r, gS.g, gS.b, gS.a]
        }
        for (HS in SS.colors4Arrays = {}, this._colors4Arrays) SS.colors4Arrays[HS] = this._colors4Arrays[HS];
        for (HS in SS.vectors2 = {}, this._vectors2) {
          const gS = this._vectors2[HS];
          SS.vectors2[HS] = [gS.x, gS.y]
        }
        for (HS in SS.vectors3 = {}, this._vectors3) {
          const gS = this._vectors3[HS];
          SS.vectors3[HS] = [gS.x, gS.y, gS.z]
        }
        for (HS in SS.vectors4 = {}, this._vectors4) {
          const gS = this._vectors4[HS];
          SS.vectors4[HS] = [gS.x, gS.y, gS.z, gS.w]
        }
        for (HS in SS.quaternions = {}, this._quaternions) SS.quaternions[HS] = this._quaternions[HS].lgS();
        for (HS in SS.matrices = {}, this._matrices) SS.matrices[HS] = this._matrices[HS].lgS();
        for (HS in SS.matrixArray = {}, this._matrixArrays) SS.matrixArray[HS] = this._matrixArrays[HS];
        for (HS in SS.matrices3x3 = {}, this._matrices3x3) SS.matrices3x3[HS] = this._matrices3x3[HS];
        for (HS in SS.matrices2x2 = {}, this._matrices2x2) SS.matrices2x2[HS] = this._matrices2x2[HS];
        for (HS in SS.vectors2Arrays = {}, this._vectors2Arrays) SS.vectors2Arrays[HS] = this._vectors2Arrays[HS];
        for (HS in SS.vectors3Arrays = {}, this._vectors3Arrays) SS.vectors3Arrays[HS] = this._vectors3Arrays[HS];
        for (HS in SS.vectors4Arrays = {}, this._vectors4Arrays) SS.vectors4Arrays[HS] = this._vectors4Arrays[HS];
        for (HS in SS.quaternionsArrays = {}, this._quaternionsArrays) SS.quaternionsArrays[HS] = this._quaternionsArrays[HS];
        return SS
      }
    }

    function nS(SS, HS, gS) {
      const bS = tS.b.Parse((() => new CS(SS.name, HS, SS.shaderPath, SS.options, SS.storeEffectOnSubMeshes)), SS, HS, gS);
      let xS;
      for (xS in SS.stencil && bS.stencil.parse(SS.stencil, HS, gS), SS.textures) bS.setTexture(xS, NS.i.Parse(SS.textures[xS], HS, gS));
      for (xS in SS.textureArrays) {
        const tS = SS.textureArrays[xS],
          XS = [];
        for (let SS = 0; SS < tS.length; SS++) XS.push(NS.i.Parse(tS[SS], HS, gS));
        bS.setTextureArray(xS, XS)
      }
      for (xS in SS.ints) bS.setInt(xS, SS.ints[xS]);
      for (xS in SS.uints) bS.setUInt(xS, SS.uints[xS]);
      for (xS in SS.floats) bS.setFloat(xS, SS.floats[xS]);
      for (xS in SS.floatsArrays) bS.setFloats(xS, SS.floatsArrays[xS]);
      for (xS in SS.colors3) {
        const HS = SS.colors3[xS];
        bS.setColor3(xS, {
          r: HS[0],
          g: HS[1],
          b: HS[2]
        })
      }
      for (xS in SS.colors3Arrays) {
        const HS = SS.colors3Arrays[xS].reduce(((SS, HS, gS) => (gS % 3 === 0 ? SS.push([HS]) : SS[SS.length - 1].push(HS), SS)), []).map((SS => ({
          r: SS[0],
          g: SS[1],
          b: SS[2]
        })));
        bS.setColor3Array(xS, HS)
      }
      for (xS in SS.colors4) {
        const HS = SS.colors4[xS];
        bS.setColor4(xS, {
          r: HS[0],
          g: HS[1],
          b: HS[2],
          a: HS[3]
        })
      }
      for (xS in SS.colors4Arrays) {
        const HS = SS.colors4Arrays[xS].reduce(((SS, HS, gS) => (gS % 4 === 0 ? SS.push([HS]) : SS[SS.length - 1].push(HS), SS)), []).map((SS => ({
          r: SS[0],
          g: SS[1],
          b: SS[2],
          a: SS[3]
        })));
        bS.setColor4Array(xS, HS)
      }
      for (xS in SS.vectors2) {
        const HS = SS.vectors2[xS];
        bS.setVector2(xS, {
          x: HS[0],
          y: HS[1]
        })
      }
      for (xS in SS.vectors3) {
        const HS = SS.vectors3[xS];
        bS.setVector3(xS, {
          x: HS[0],
          y: HS[1],
          z: HS[2]
        })
      }
      for (xS in SS.vectors4) {
        const HS = SS.vectors4[xS];
        bS.setVector4(xS, {
          x: HS[0],
          y: HS[1],
          z: HS[2],
          w: HS[3]
        })
      }
      for (xS in SS.quaternions) bS.setQuaternion(xS, XS.i.FromArray(SS.quaternions[xS]));
      for (xS in SS.matrices) bS.setMatrix(xS, XS.e.FromArray(SS.matrices[xS]));
      const qS = bS;
      for (xS in SS.matrixArray) qS._matrixArrays[xS] = new Float32Array(SS.matrixArray[xS]);
      for (xS in SS.matrices3x3) bS.setMatrix3x3(xS, SS.matrices3x3[xS]);
      for (xS in SS.matrices2x2) bS.setMatrix2x2(xS, SS.matrices2x2[xS]);
      for (xS in SS.vectors2Arrays) bS.setArray2(xS, SS.vectors2Arrays[xS]);
      for (xS in SS.vectors3Arrays) bS.setArray3(xS, SS.vectors3Arrays[xS]);
      for (xS in SS.vectors4Arrays) bS.setArray4(xS, SS.vectors4Arrays[xS]);
      for (xS in SS.quaternionsArrays) bS.setArray4(xS, SS.quaternionsArrays[xS]);
      return bS
    }
    async function PS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((bS, XS) => {
        const xS = new uS.c;
        xS.addEventListener("readystatechange", (() => {
          if (4 == xS.readyState)
            if (200 == xS.status) {
              const HS = nS(JSON.parse(xS.responseText), gS || fS.d.LastCreatedScene, tS);
              SS && (HS.name = SS), bS(HS)
            } else XS("Unable to load the ShaderMaterial")
        })), xS.open("GET", HS), xS.send()
      }))
    }
    async function QS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const tS = this?.SnippetUrl ?? CS.SnippetUrl;
      return await new Promise(((bS, XS) => {
        const xS = new uS.c;
        xS.addEventListener("readystatechange", (() => {
          if (4 == xS.readyState)
            if (200 == xS.status) {
              const tS = JSON.parse(JSON.parse(xS.responseText).jsonPayload),
                XS = nS(JSON.parse(tS.shaderMaterial), HS || fS.d.LastCreatedScene, gS);
              XS.snippetId = SS, bS(XS)
            } else XS("Unable to load the snippet " + SS)
        })), xS.open("GET", tS + "/" + SS.replace(/#/g, "/")), xS.send()
      }))
    }
    CS.SnippetUrl = "https://snippet.babylonjs.com";
    const DS = QS;
    let wS = !1;

    function hS() {
      wS || (wS = !0, CS.Parse = nS, CS.ParseFromFileAsync = PS, CS.ParseFromSnippetAsync = QS, CS.CreateFromSnippetAsync = DS, (0, jS.f)("BABYLON.ShaderMaterial", CS))
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);