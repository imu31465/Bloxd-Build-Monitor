export const id = 234;
export const ids = [234];
export const modules = {
  38440: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => NF,
      f: () => qW,
      i: () => aW,
      j: () => kW,
      m: () => TF,
      p: () => tW
    });
    var CF = SF(37994),
      AF = SF(38057),
      uF = SF(35623),
      hF = SF(38109),
      bW = SF(38448),
      dF = SF(38323),
      PF = SF(38016),
      RF = SF(38320),
      iW = SF(35639),
      eF = SF(38312),
      EF = SF(38303),
      QF = SF(38341),
      rW = SF(35660);
    const gW = {
      effect: null,
      subMesh: null
    };
    class tW extends RF.e {
      constructor(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(FF, WF, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new uF.b, this._cachedWorldViewProjectionMatrix = new uF.b, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = SF, this._options = {
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
          ...CF
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(FF) {
        this._shaderPath = FF
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
      _checkUniform(FF) {
        -1 === this._options.uniforms.indexOf(FF) && this._options.uniforms.push(FF)
      }
      setTexture(FF, WF) {
        return -1 === this._options.samplers.indexOf(FF) && this._options.samplers.push(FF), this._textures[FF] = WF, this
      }
      setInternalTexture(FF, WF) {
        return -1 === this._options.samplers.indexOf(FF) && this._options.samplers.push(FF), this._internalTextures[FF] = WF, this
      }
      removeTexture(FF) {
        delete this._textures[FF]
      }
      setTextureArray(FF, WF) {
        return -1 === this._options.samplers.indexOf(FF) && this._options.samplers.push(FF), this._checkUniform(FF), this._textureArrays[FF] = WF, this
      }
      setExternalTexture(FF, WF) {
        return -1 === this._options.externalTextures.indexOf(FF) && this._options.externalTextures.push(FF), this._externalTextures[FF] = WF, this
      }
      setFloat(FF, WF) {
        return this._checkUniform(FF), this._floats[FF] = WF, this
      }
      setInt(FF, WF) {
        return this._checkUniform(FF), this._ints[FF] = WF, this
      }
      setUInt(FF, WF) {
        return this._checkUniform(FF), this._uints[FF] = WF, this
      }
      setFloats(FF, WF) {
        return this._checkUniform(FF), this._floatsArrays[FF] = WF, this
      }
      setColor3(FF, WF) {
        return this._checkUniform(FF), this._colors3[FF] = WF, this
      }
      setColor3Array(FF, WF) {
        return this._checkUniform(FF), this._colors3Arrays[FF] = WF.reduce(((FF, WF) => (FF.push(WF.r, WF.g, WF.b), FF)), []), this
      }
      setColor4(FF, WF) {
        return this._checkUniform(FF), this._colors4[FF] = WF, this
      }
      setColor4Array(FF, WF) {
        return this._checkUniform(FF), this._colors4Arrays[FF] = WF.reduce(((FF, WF) => (FF.push(WF.r, WF.g, WF.b, WF.a), FF)), []), this
      }
      setVector2(FF, WF) {
        return this._checkUniform(FF), this._vectors2[FF] = WF, this
      }
      setVector3(FF, WF) {
        return this._checkUniform(FF), this._vectors3[FF] = WF, this
      }
      setVector4(FF, WF) {
        return this._checkUniform(FF), this._vectors4[FF] = WF, this
      }
      setQuaternion(FF, WF) {
        return this._checkUniform(FF), this._quaternions[FF] = WF, this
      }
      setQuaternionArray(FF, WF) {
        return this._checkUniform(FF), this._quaternionsArrays[FF] = WF.reduce(((FF, WF) => (WF.toArray(FF, FF.length), FF)), []), this
      }
      setMatrix(FF, WF) {
        return this._checkUniform(FF), this._matrices[FF] = WF, this
      }
      setMatrices(FF, WF) {
        this._checkUniform(FF);
        const SF = new Float32Array(16 * WF.length);
        for (let CF = 0; CF < WF.length; CF++) {
          WF[CF].copyToArray(SF, 16 * CF)
        }
        return this._matrixArrays[FF] = SF, this
      }
      setMatrix3x3(FF, WF) {
        return this._checkUniform(FF), this._matrices3x3[FF] = WF, this
      }
      setMatrix2x2(FF, WF) {
        return this._checkUniform(FF), this._matrices2x2[FF] = WF, this
      }
      setArray2(FF, WF) {
        return this._checkUniform(FF), this._vectors2Arrays[FF] = WF, this
      }
      setArray3(FF, WF) {
        return this._checkUniform(FF), this._vectors3Arrays[FF] = WF, this
      }
      setArray4(FF, WF) {
        return this._checkUniform(FF), this._vectors4Arrays[FF] = WF, this
      }
      setUniformBuffer(FF, WF) {
        return -1 === this._options.uniformBuffers.indexOf(FF) && this._options.uniformBuffers.push(FF), this._uniformBuffers[FF] = WF, this
      }
      setTextureSampler(FF, WF) {
        return -1 === this._options.samplerObjects.indexOf(FF) && this._options.samplerObjects.push(FF), this._textureSamplers[FF] = WF, this
      }
      setStorageBuffer(FF, WF) {
        return -1 === this._options.storageBuffers.indexOf(FF) && this._options.storageBuffers.push(FF), this._storageBuffers[FF] = WF, this
      }
      setDefine(FF, WF) {
        const SF = FF.trimEnd() + " ",
          CF = this.options.defines.findIndex((WF => WF === FF || WF.startsWith(SF)));
        return CF >= 0 && this.options.defines.splice(CF, 1), ("boolean" !== typeof WF || WF) && this.options.defines.push(SF + WF), this
      }
      isReadyForSubMesh(FF, WF, SF) {
        return this.isReady(FF, SF, WF)
      }
      isReady(FF, WF, SF) {
        const CF = SF && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const FF = CF ? SF._drawWrapper : this._drawWrapper;
          if (FF.effect && FF._wasPreviouslyReady && FF._wasPreviouslyUsingInstances === WF) return !0
        }
        const uF = this.OWF(),
          bW = uF.sC(),
          PF = [],
          RF = [];
        let iW = null,
          rW = this._shaderPath,
          tW = this._options.uniforms,
          TF = this._options.uniformBuffers,
          aW = this._options.samplers;
        bW.getCaps().multiview && uF.activeCamera && uF.activeCamera.outputRenderTarget && uF.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, PF.push("#define MULTIVIEW"), -1 !== tW.indexOf("viewProjection") && -1 === tW.indexOf("viewProjectionR") && tW.push("viewProjectionR"));
        for (let AF = 0; AF < this._options.defines.length; AF++) {
          const FF = 0 === this._options.defines[AF].indexOf("#define") ? this._options.defines[AF] : `#define ${this._options.defines[AF]}`;
          PF.push(FF)
        }
        for (let AF = 0; AF < this._options.attributes.length; AF++) RF.push(this._options.attributes[AF]);
        if (FF && FF.isVerticesDataPresent(hF.k.ColorKind) && (-1 === RF.indexOf(hF.k.ColorKind) && RF.push(hF.k.ColorKind), PF.push("#define VERTEXCOLOR")), WF && (PF.push("#define INSTANCES"), (0, EF.tb)(RF, this._materialHelperNeedsPreviousMatrices), FF?.hasThinInstances && (PF.push("#define THIN_INSTANCES"), FF && FF.isVerticesDataPresent(hF.k.ColorInstanceKind) && (RF.push(hF.k.ColorInstanceKind), PF.push("#define INSTANCESCOLOR")))), FF && FF.useBones && FF.computeBonesUsingShaders && FF.skeleton) {
          RF.push(hF.k.MatricesIndicesKind), RF.push(hF.k.MatricesWeightsKind), FF.numBoneInfluencers > 4 && (RF.push(hF.k.MatricesIndicesExtraKind), RF.push(hF.k.MatricesWeightsExtraKind));
          const WF = FF.skeleton;
          PF.push("#define NUM_BONE_INFLUENCERS " + FF.numBoneInfluencers), iW = new dF.b, iW.addCPUSkinningFallback(0, FF), WF.isUsingTextureForMatrices ? (PF.push("#define BONETEXTURE"), -1 === tW.indexOf("boneTextureInfo") && tW.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (PF.push("#define BonesPerMesh " + (WF.bones.length + 1)), -1 === tW.indexOf("mBones") && tW.push("mBones"))
        } else PF.push("#define NUM_BONE_INFLUENCERS 0");
        let kW = 0;
        const qW = FF ? FF.morphTargetManager : null;
        if (qW) {
          const WF = -1 !== PF.indexOf("#define UV1"),
            SF = -1 !== PF.indexOf("#define UV2"),
            CF = -1 !== PF.indexOf("#define TANGENT"),
            AF = -1 !== PF.indexOf("#define NORMAL"),
            uF = -1 !== PF.indexOf("#define VERTEXCOLOR");
          kW = (0, EF.S)(qW, PF, RF, FF, !0, AF, CF, WF, SF, uF), qW.isUsingTextureForTargets && (-1 === tW.indexOf("morphTargetTextureIndices") && tW.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), kW > 0 && (tW = tW.slice(), tW.push("morphTargetInfluences"), tW.push("morphTargetCount"), tW.push("morphTargetTextureInfo"), tW.push("morphTargetTextureIndices"))
        } else PF.push("#define NUM_MORPH_INFLUENCERS 0");
        if (FF) {
          const SF = FF.bakedVertexAnimationManager;
          SF && SF.isEnabled && (PF.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === tW.indexOf("bakedVertexAnimationSettings") && tW.push("bakedVertexAnimationSettings"), -1 === tW.indexOf("bakedVertexAnimationTextureSizeInverted") && tW.push("bakedVertexAnimationTextureSizeInverted"), -1 === tW.indexOf("bakedVertexAnimationTime") && tW.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), WF && RF.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const AF in this._textures)
          if (!this._textures[AF].isReady()) return !1;
        for (const AF in this._internalTextures)
          if (!this._internalTextures[AF].isReady) return !1;
        FF && this.needAlphaTestingForMesh(FF) && PF.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, eF.e)(tW), (0, eF.o)(this, uF, PF)), uF.fogEnabled && FF?.applyFog && uF.fogMode !== AF.f.FOGMODE_NONE && (PF.push("#define FOG"), -1 === tW.indexOf("view") && tW.push("view"), -1 === tW.indexOf("vFogInfos") && tW.push("vFogInfos"), -1 === tW.indexOf("vFogColor") && tW.push("vFogColor")), this._useLogarithmicDepth && (PF.push("#define LOGARITHMICDEPTH"), -1 === tW.indexOf("logarithmicDepthConstant") && tW.push("logarithmicDepthConstant"));
        const VF = SF ? SF.getRenderingMesh() : FF;
        if (VF && this.useVertexPulling) {
          const FF = VF.geometry;
          FF && (this._vertexPullingMetadata = (0, QF.f)(FF), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((FF, WF) => {
            tW.push(`vp_${WF}_info`)
          }))), PF.push("#define USE_VERTEX_PULLING");
          const WF = VF.geometry?.getIndexBuffer();
          WF && !VF.isUnIndexed && (PF.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), WF.is32Bits && PF.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (tW = tW.slice(), TF = TF.slice(), aW = aW.slice(), rW = this.customShaderNameResolve(this.name, tW, TF, aW, PF, RF));
        const NF = CF ? SF._getDrawWrapper(void 0, !0) : this._drawWrapper,
          DF = NF?.effect ?? null,
          LF = NF?.defines ?? null,
          mW = PF.join("\n");
        let OF = DF;
        return LF !== mW && (OF = bW.createEffect(rW, {
          attributes: RF,
          uniformsNames: tW,
          uniformBuffersNames: TF,
          samplers: aW,
          defines: mW,
          fallbacks: iW,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: kW
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, bW), CF ? SF.setEffect(OF, mW, this._materialContext) : NF && NF.setEffect(OF, mW), this._onEffectCreatedObservable && (gW.effect = OF, gW.subMesh = SF ?? FF?.Om[0] ?? null, this._onEffectCreatedObservable.notifyObservers(gW))), NF._wasPreviouslyUsingInstances = !!WF, !!OF?.isReady() && (DF !== OF && uF.resetCachedMaterial(), NF._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(FF, WF) {
        const SF = WF ?? this.getEffect();
        if (!SF) return;
        const CF = this._options.uniforms; - 1 !== CF.indexOf("world") && SF.setMatrix("world", FF);
        const AF = this.OWF(); - 1 !== CF.indexOf("worldView") && (FF.multiplyToRef(AF.getViewMatrix(), this._cachedWorldViewMatrix), SF.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== CF.indexOf("worldViewProjection") && (FF.multiplyToRef(AF.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), SF.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== CF.indexOf("view") && SF.setMatrix("view", AF.getViewMatrix())
      }
      bindForSubMesh(FF, WF, SF) {
        this.bind(FF, WF, SF._drawWrapperOverride?.effect, SF)
      }
      bind(FF, WF, SF, CF) {
        const AF = CF && this._storeEffectOnSubMeshes,
          uF = SF ?? (AF ? CF.effect : this.getEffect());
        if (!uF) return;
        const hF = this.OWF();
        this._activeEffect = uF, this.bindOnlyWorldMatrix(FF, SF);
        const bW = this._options.uniformBuffers;
        let dF = !1;
        if (uF && bW && bW.length > 0 && hF.sC().supportsUniformBuffers)
          for (let RF = 0; RF < bW.length; ++RF) {
            switch (bW[RF]) {
              case "Mesh":
                WF && (WF.getMeshUniformBuffer().bindToEffect(uF, "Mesh"), WF.transferToEffect(FF));
                break;
              case "Scene":
                (0, EF.w)(uF, hF.getSceneUniformBuffer()), hF.finalizeSceneUbo(), dF = !0
            }
          }
        const PF = WF && AF ? this._mustRebind(hF, uF, CF, WF.visibility) : hF.getCachedMaterial() !== this;
        if (uF && PF) {
          let FF;
          for (FF in dF || -1 === this._options.uniforms.indexOf("view") || uF.setMatrix("view", hF.getViewMatrix()), dF || -1 === this._options.uniforms.indexOf("projection") || uF.setMatrix("projection", hF.getProjectionMatrix()), dF || -1 === this._options.uniforms.indexOf("viewProjection") || (uF.setMatrix("viewProjection", hF.getTransformMatrix()), this._multiview && uF.setMatrix("viewProjectionR", hF._transformMatrixR)), hF.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && uF.setVector3("cameraPosition", hF.activeCamera.globalPosition), (0, EF.f)(WF, uF), (0, eF.h)(uF, this, hF), this._vertexPullingMetadata && (0, QF.c)(uF, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, EF.r)(AF ? CF.materialDefines : uF.defines, uF, hF), WF && (0, EF.i)(hF, WF, uF), this._textures) uF.setTexture(FF, this._textures[FF]);
          for (FF in this._internalTextures) uF._bindTexture(FF, this._internalTextures[FF]);
          for (FF in this._textureArrays) uF.setTextureArray(FF, this._textureArrays[FF]);
          for (FF in this._ints) uF.setInt(FF, this._ints[FF]);
          for (FF in this._uints) uF.setUInt(FF, this._uints[FF]);
          for (FF in this._floats) uF.setFloat(FF, this._floats[FF]);
          for (FF in this._floatsArrays) uF.setArray(FF, this._floatsArrays[FF]);
          for (FF in this._colors3) uF.setColor3(FF, this._colors3[FF]);
          for (FF in this._colors3Arrays) uF.setArray3(FF, this._colors3Arrays[FF]);
          for (FF in this._colors4) {
            const WF = this._colors4[FF];
            uF.setFloat4(FF, WF.r, WF.g, WF.b, WF.a)
          }
          for (FF in this._colors4Arrays) uF.setArray4(FF, this._colors4Arrays[FF]);
          for (FF in this._vectors2) uF.setVector2(FF, this._vectors2[FF]);
          for (FF in this._vectors3) uF.setVector3(FF, this._vectors3[FF]);
          for (FF in this._vectors4) uF.setVector4(FF, this._vectors4[FF]);
          for (FF in this._quaternions) uF.setQuaternion(FF, this._quaternions[FF]);
          for (FF in this._matrices) uF.setMatrix(FF, this._matrices[FF]);
          for (FF in this._matrixArrays) uF.setMatrices(FF, this._matrixArrays[FF]);
          for (FF in this._matrices3x3) uF.setMatrix3x3(FF, this._matrices3x3[FF]);
          for (FF in this._matrices2x2) uF.setMatrix2x2(FF, this._matrices2x2[FF]);
          for (FF in this._vectors2Arrays) uF.setArray2(FF, this._vectors2Arrays[FF]);
          for (FF in this._vectors3Arrays) uF.setArray3(FF, this._vectors3Arrays[FF]);
          for (FF in this._vectors4Arrays) uF.setArray4(FF, this._vectors4Arrays[FF]);
          for (FF in this._quaternionsArrays) uF.setArray4(FF, this._quaternionsArrays[FF]);
          for (FF in this._uniformBuffers) {
            const WF = this._uniformBuffers[FF].getBuffer();
            WF && uF.bindUniformBuffer(WF, FF)
          }
          const SF = hF.sC(),
            bW = SF.setExternalTexture;
          if (bW)
            for (FF in this._externalTextures) bW.call(SF, FF, this._externalTextures[FF]);
          const PF = SF.setTextureSampler;
          if (PF)
            for (FF in this._textureSamplers) PF.call(SF, FF, this._textureSamplers[FF]);
          const RF = SF.setStorageBuffer;
          if (RF)
            for (FF in this._storageBuffers) RF.call(SF, FF, this._storageBuffers[FF])
        }
        if (uF && WF && (PF || !this.isFrozen)) {
          (0, EF.t)(WF, uF), WF.morphTargetManager && WF.morphTargetManager.isUsingTextureForTargets && WF.morphTargetManager._bind(uF);
          const FF = WF.bakedVertexAnimationManager;
          if (FF && FF.isEnabled) {
            const FF = AF ? CF._drawWrapper : this._drawWrapper;
            WF.bakedVertexAnimationManager?.bind(uF, !!FF._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(WF, uF, CF)
      }
      getActiveTextures() {
        const FF = super.getActiveTextures();
        for (const WF in this._textures) FF.push(this._textures[WF]);
        for (const WF in this._textureArrays) {
          const SF = this._textureArrays[WF];
          for (let WF = 0; WF < SF.length; WF++) FF.push(SF[WF])
        }
        return FF
      }
      hasTexture(FF) {
        if (super.hasTexture(FF)) return !0;
        for (const SF in this._textures)
          if (this._textures[SF] === FF) return !0;
        const WF = FF.getInternalTexture();
        for (const SF in this._internalTextures)
          if (this._internalTextures[SF] === WF) return !0;
        for (const SF in this._textureArrays) {
          const WF = this._textureArrays[SF];
          for (let SF = 0; SF < WF.length; SF++)
            if (WF[SF] === FF) return !0
        }
        return !1
      }
      clone(FF) {
        const WF = CF.e.Clone((() => new tW(FF, this.OWF(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        WF.name = FF, WF.id = FF, "object" === typeof WF._shaderPath && (WF._shaderPath = {
          ...WF._shaderPath
        }), this._options = {
          ...this._options
        };
        const SF = Object.keys(this._options);
        for (const CF of SF) {
          const FF = this._options[CF];
          Array.isArray(FF) && (this._options[CF] = FF.slice(0))
        }
        this.stencil.copyTo(WF.stencil);
        for (const CF in this._textures) WF.setTexture(CF, this._textures[CF]);
        for (const CF in this._internalTextures) WF.setInternalTexture(CF, this._internalTextures[CF]);
        for (const CF in this._textureArrays) WF.setTextureArray(CF, this._textureArrays[CF]);
        for (const CF in this._externalTextures) WF.setExternalTexture(CF, this._externalTextures[CF]);
        for (const CF in this._ints) WF.setInt(CF, this._ints[CF]);
        for (const CF in this._uints) WF.setUInt(CF, this._uints[CF]);
        for (const CF in this._floats) WF.setFloat(CF, this._floats[CF]);
        for (const CF in this._floatsArrays) WF.setFloats(CF, this._floatsArrays[CF]);
        for (const CF in this._colors3) WF.setColor3(CF, this._colors3[CF]);
        for (const CF in this._colors3Arrays) WF._colors3Arrays[CF] = this._colors3Arrays[CF];
        for (const CF in this._colors4) WF.setColor4(CF, this._colors4[CF]);
        for (const CF in this._colors4Arrays) WF._colors4Arrays[CF] = this._colors4Arrays[CF];
        for (const CF in this._vectors2) WF.setVector2(CF, this._vectors2[CF]);
        for (const CF in this._vectors3) WF.setVector3(CF, this._vectors3[CF]);
        for (const CF in this._vectors4) WF.setVector4(CF, this._vectors4[CF]);
        for (const CF in this._quaternions) WF.setQuaternion(CF, this._quaternions[CF]);
        for (const CF in this._quaternionsArrays) WF._quaternionsArrays[CF] = this._quaternionsArrays[CF];
        for (const CF in this._matrices) WF.setMatrix(CF, this._matrices[CF]);
        for (const CF in this._matrixArrays) WF._matrixArrays[CF] = this._matrixArrays[CF].slice();
        for (const CF in this._matrices3x3) WF.setMatrix3x3(CF, this._matrices3x3[CF]);
        for (const CF in this._matrices2x2) WF.setMatrix2x2(CF, this._matrices2x2[CF]);
        for (const CF in this._vectors2Arrays) WF.setArray2(CF, this._vectors2Arrays[CF]);
        for (const CF in this._vectors3Arrays) WF.setArray3(CF, this._vectors3Arrays[CF]);
        for (const CF in this._vectors4Arrays) WF.setArray4(CF, this._vectors4Arrays[CF]);
        for (const CF in this._uniformBuffers) WF.setUniformBuffer(CF, this._uniformBuffers[CF]);
        for (const CF in this._textureSamplers) WF.setTextureSampler(CF, this._textureSamplers[CF]);
        for (const CF in this._storageBuffers) WF.setStorageBuffer(CF, this._storageBuffers[CF]);
        return WF
      }
      dispose(FF, WF, SF) {
        if (WF) {
          let FF;
          for (FF in this._textures) this._textures[FF].dispose();
          for (FF in this._internalTextures) this._internalTextures[FF].dispose();
          for (FF in this._textureArrays) {
            const WF = this._textureArrays[FF];
            for (let FF = 0; FF < WF.length; FF++) WF[FF].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(FF, WF, SF)
      }
      serialize() {
        const FF = CF.e.Serialize(this);
        let WF;
        for (WF in FF.customType = "BABYLON.ShaderMaterial", FF.uniqueId = this.uniqueId, FF.options = this._options, FF.shaderPath = this._shaderPath, FF.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, FF.stencil = this.stencil.serialize(), FF.textures = {}, this._textures) FF.textures[WF] = this._textures[WF].serialize();
        for (WF in FF.textureArrays = {}, this._textureArrays) {
          FF.textureArrays[WF] = [];
          const SF = this._textureArrays[WF];
          for (let CF = 0; CF < SF.length; CF++) FF.textureArrays[WF].push(SF[CF].serialize())
        }
        for (WF in FF.ints = {}, this._ints) FF.ints[WF] = this._ints[WF];
        for (WF in FF.uints = {}, this._uints) FF.uints[WF] = this._uints[WF];
        for (WF in FF.floats = {}, this._floats) FF.floats[WF] = this._floats[WF];
        for (WF in FF.floatsArrays = {}, this._floatsArrays) FF.floatsArrays[WF] = this._floatsArrays[WF];
        for (WF in FF.colors3 = {}, this._colors3) {
          const SF = this._colors3[WF];
          FF.colors3[WF] = [SF.r, SF.g, SF.b]
        }
        for (WF in FF.colors3Arrays = {}, this._colors3Arrays) FF.colors3Arrays[WF] = this._colors3Arrays[WF];
        for (WF in FF.colors4 = {}, this._colors4) {
          const SF = this._colors4[WF];
          FF.colors4[WF] = [SF.r, SF.g, SF.b, SF.a]
        }
        for (WF in FF.colors4Arrays = {}, this._colors4Arrays) FF.colors4Arrays[WF] = this._colors4Arrays[WF];
        for (WF in FF.vectors2 = {}, this._vectors2) {
          const SF = this._vectors2[WF];
          FF.vectors2[WF] = [SF.x, SF.y]
        }
        for (WF in FF.vectors3 = {}, this._vectors3) {
          const SF = this._vectors3[WF];
          FF.vectors3[WF] = [SF.x, SF.y, SF.z]
        }
        for (WF in FF.vectors4 = {}, this._vectors4) {
          const SF = this._vectors4[WF];
          FF.vectors4[WF] = [SF.x, SF.y, SF.z, SF.w]
        }
        for (WF in FF.quaternions = {}, this._quaternions) FF.quaternions[WF] = this._quaternions[WF].kRF();
        for (WF in FF.matrices = {}, this._matrices) FF.matrices[WF] = this._matrices[WF].kRF();
        for (WF in FF.matrixArray = {}, this._matrixArrays) FF.matrixArray[WF] = this._matrixArrays[WF];
        for (WF in FF.matrices3x3 = {}, this._matrices3x3) FF.matrices3x3[WF] = this._matrices3x3[WF];
        for (WF in FF.matrices2x2 = {}, this._matrices2x2) FF.matrices2x2[WF] = this._matrices2x2[WF];
        for (WF in FF.vectors2Arrays = {}, this._vectors2Arrays) FF.vectors2Arrays[WF] = this._vectors2Arrays[WF];
        for (WF in FF.vectors3Arrays = {}, this._vectors3Arrays) FF.vectors3Arrays[WF] = this._vectors3Arrays[WF];
        for (WF in FF.vectors4Arrays = {}, this._vectors4Arrays) FF.vectors4Arrays[WF] = this._vectors4Arrays[WF];
        for (WF in FF.quaternionsArrays = {}, this._quaternionsArrays) FF.quaternionsArrays[WF] = this._quaternionsArrays[WF];
        return FF
      }
    }

    function TF(FF, WF, SF) {
      const AF = CF.e.Parse((() => new tW(FF.name, WF, FF.shaderPath, FF.options, FF.storeEffectOnSubMeshes)), FF, WF, SF);
      let hF;
      for (hF in FF.stencil && AF.stencil.parse(FF.stencil, WF, SF), FF.textures) AF.setTexture(hF, bW.i.Parse(FF.textures[hF], WF, SF));
      for (hF in FF.textureArrays) {
        const CF = FF.textureArrays[hF],
          uF = [];
        for (let FF = 0; FF < CF.length; FF++) uF.push(bW.i.Parse(CF[FF], WF, SF));
        AF.setTextureArray(hF, uF)
      }
      for (hF in FF.ints) AF.setInt(hF, FF.ints[hF]);
      for (hF in FF.uints) AF.setUInt(hF, FF.uints[hF]);
      for (hF in FF.floats) AF.setFloat(hF, FF.floats[hF]);
      for (hF in FF.floatsArrays) AF.setFloats(hF, FF.floatsArrays[hF]);
      for (hF in FF.colors3) {
        const WF = FF.colors3[hF];
        AF.setColor3(hF, {
          r: WF[0],
          g: WF[1],
          b: WF[2]
        })
      }
      for (hF in FF.colors3Arrays) {
        const WF = FF.colors3Arrays[hF].reduce(((FF, WF, SF) => (SF % 3 === 0 ? FF.push([WF]) : FF[FF.length - 1].push(WF), FF)), []).map((FF => ({
          r: FF[0],
          g: FF[1],
          b: FF[2]
        })));
        AF.setColor3Array(hF, WF)
      }
      for (hF in FF.colors4) {
        const WF = FF.colors4[hF];
        AF.setColor4(hF, {
          r: WF[0],
          g: WF[1],
          b: WF[2],
          a: WF[3]
        })
      }
      for (hF in FF.colors4Arrays) {
        const WF = FF.colors4Arrays[hF].reduce(((FF, WF, SF) => (SF % 4 === 0 ? FF.push([WF]) : FF[FF.length - 1].push(WF), FF)), []).map((FF => ({
          r: FF[0],
          g: FF[1],
          b: FF[2],
          a: FF[3]
        })));
        AF.setColor4Array(hF, WF)
      }
      for (hF in FF.vectors2) {
        const WF = FF.vectors2[hF];
        AF.setVector2(hF, {
          x: WF[0],
          y: WF[1]
        })
      }
      for (hF in FF.vectors3) {
        const WF = FF.vectors3[hF];
        AF.setVector3(hF, {
          x: WF[0],
          y: WF[1],
          z: WF[2]
        })
      }
      for (hF in FF.vectors4) {
        const WF = FF.vectors4[hF];
        AF.setVector4(hF, {
          x: WF[0],
          y: WF[1],
          z: WF[2],
          w: WF[3]
        })
      }
      for (hF in FF.quaternions) AF.setQuaternion(hF, uF.e.FromArray(FF.quaternions[hF]));
      for (hF in FF.matrices) AF.setMatrix(hF, uF.b.FromArray(FF.matrices[hF]));
      const dF = AF;
      for (hF in FF.matrixArray) dF._matrixArrays[hF] = new Float32Array(FF.matrixArray[hF]);
      for (hF in FF.matrices3x3) AF.setMatrix3x3(hF, FF.matrices3x3[hF]);
      for (hF in FF.matrices2x2) AF.setMatrix2x2(hF, FF.matrices2x2[hF]);
      for (hF in FF.vectors2Arrays) AF.setArray2(hF, FF.vectors2Arrays[hF]);
      for (hF in FF.vectors3Arrays) AF.setArray3(hF, FF.vectors3Arrays[hF]);
      for (hF in FF.vectors4Arrays) AF.setArray4(hF, FF.vectors4Arrays[hF]);
      for (hF in FF.quaternionsArrays) AF.setArray4(hF, FF.quaternionsArrays[hF]);
      return AF
    }
    async function aW(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((AF, uF) => {
        const hF = new PF.d;
        hF.addEventListener("readystatechange", (() => {
          if (4 == hF.readyState)
            if (200 == hF.status) {
              const WF = TF(JSON.parse(hF.responseText), SF || iW.e.LastCreatedScene, CF);
              FF && (WF.name = FF), AF(WF)
            } else uF("Unable to load the ShaderMaterial")
        })), hF.open("GET", WF), hF.send()
      }))
    }
    async function kW(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const CF = this?.SnippetUrl ?? tW.SnippetUrl;
      return await new Promise(((AF, uF) => {
        const hF = new PF.d;
        hF.addEventListener("readystatechange", (() => {
          if (4 == hF.readyState)
            if (200 == hF.status) {
              const CF = JSON.parse(JSON.parse(hF.responseText).jsonPayload),
                uF = TF(JSON.parse(CF.shaderMaterial), WF || iW.e.LastCreatedScene, SF);
              uF.snippetId = FF, AF(uF)
            } else uF("Unable to load the snippet " + FF)
        })), hF.open("GET", CF + "/" + FF.replace(/#/g, "/")), hF.send()
      }))
    }
    tW.SnippetUrl = "https://snippet.babylonjs.com";
    const qW = kW;
    let VF = !1;

    function NF() {
      VF || (VF = !0, tW.Parse = TF, tW.ParseFromFileAsync = aW, tW.ParseFromSnippetAsync = kW, tW.CreateFromSnippetAsync = qW, (0, rW.f)("BABYLON.ShaderMaterial", tW))
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);