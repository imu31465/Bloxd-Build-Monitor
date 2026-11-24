export const id = 268;
export const ids = [268];
export const modules = {
  40647: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => kp,
      f: () => ep,
      j: () => Hp,
      m: () => dp,
      p: () => tp,
      q: () => vp
    });
    var Op = cp(40233),
      op = cp(40296),
      Ip = cp(37320),
      Sp = cp(40342),
      xp = cp(40654),
      Lp = cp(40530),
      Yp = cp(40261),
      Dp = cp(40523),
      Ap = cp(37345),
      Pp = cp(40516),
      Wp = cp(40512),
      yp = cp(40544),
      Up = cp(37368);
    const wp = {
      effect: null,
      subMesh: null
    };
    class vp extends Dp.e {
      constructor(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(pp, ip, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new Ip.b, this._cachedWorldViewProjectionMatrix = new Ip.b, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = cp, this._options = {
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
          ...Op
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(pp) {
        this._shaderPath = pp
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
      _checkUniform(pp) {
        -1 === this._options.uniforms.indexOf(pp) && this._options.uniforms.push(pp)
      }
      setTexture(pp, ip) {
        return -1 === this._options.samplers.indexOf(pp) && this._options.samplers.push(pp), this._textures[pp] = ip, this
      }
      setInternalTexture(pp, ip) {
        return -1 === this._options.samplers.indexOf(pp) && this._options.samplers.push(pp), this._internalTextures[pp] = ip, this
      }
      removeTexture(pp) {
        delete this._textures[pp]
      }
      setTextureArray(pp, ip) {
        return -1 === this._options.samplers.indexOf(pp) && this._options.samplers.push(pp), this._checkUniform(pp), this._textureArrays[pp] = ip, this
      }
      setExternalTexture(pp, ip) {
        return -1 === this._options.externalTextures.indexOf(pp) && this._options.externalTextures.push(pp), this._externalTextures[pp] = ip, this
      }
      setFloat(pp, ip) {
        return this._checkUniform(pp), this._floats[pp] = ip, this
      }
      setInt(pp, ip) {
        return this._checkUniform(pp), this._ints[pp] = ip, this
      }
      setUInt(pp, ip) {
        return this._checkUniform(pp), this._uints[pp] = ip, this
      }
      setFloats(pp, ip) {
        return this._checkUniform(pp), this._floatsArrays[pp] = ip, this
      }
      setColor3(pp, ip) {
        return this._checkUniform(pp), this._colors3[pp] = ip, this
      }
      setColor3Array(pp, ip) {
        return this._checkUniform(pp), this._colors3Arrays[pp] = ip.reduce(((pp, ip) => (pp.push(ip.r, ip.g, ip.b), pp)), []), this
      }
      setColor4(pp, ip) {
        return this._checkUniform(pp), this._colors4[pp] = ip, this
      }
      setColor4Array(pp, ip) {
        return this._checkUniform(pp), this._colors4Arrays[pp] = ip.reduce(((pp, ip) => (pp.push(ip.r, ip.g, ip.b, ip.a), pp)), []), this
      }
      setVector2(pp, ip) {
        return this._checkUniform(pp), this._vectors2[pp] = ip, this
      }
      setVector3(pp, ip) {
        return this._checkUniform(pp), this._vectors3[pp] = ip, this
      }
      setVector4(pp, ip) {
        return this._checkUniform(pp), this._vectors4[pp] = ip, this
      }
      setQuaternion(pp, ip) {
        return this._checkUniform(pp), this._quaternions[pp] = ip, this
      }
      setQuaternionArray(pp, ip) {
        return this._checkUniform(pp), this._quaternionsArrays[pp] = ip.reduce(((pp, ip) => (ip.toArray(pp, pp.length), pp)), []), this
      }
      setMatrix(pp, ip) {
        return this._checkUniform(pp), this._matrices[pp] = ip, this
      }
      setMatrices(pp, ip) {
        this._checkUniform(pp);
        const cp = new Float32Array(16 * ip.length);
        for (let Op = 0; Op < ip.length; Op++) {
          ip[Op].copyToArray(cp, 16 * Op)
        }
        return this._matrixArrays[pp] = cp, this
      }
      setMatrix3x3(pp, ip) {
        return this._checkUniform(pp), this._matrices3x3[pp] = ip, this
      }
      setMatrix2x2(pp, ip) {
        return this._checkUniform(pp), this._matrices2x2[pp] = ip, this
      }
      setArray2(pp, ip) {
        return this._checkUniform(pp), this._vectors2Arrays[pp] = ip, this
      }
      setArray3(pp, ip) {
        return this._checkUniform(pp), this._vectors3Arrays[pp] = ip, this
      }
      setArray4(pp, ip) {
        return this._checkUniform(pp), this._vectors4Arrays[pp] = ip, this
      }
      setUniformBuffer(pp, ip) {
        return -1 === this._options.uniformBuffers.indexOf(pp) && this._options.uniformBuffers.push(pp), this._uniformBuffers[pp] = ip, this
      }
      setTextureSampler(pp, ip) {
        return -1 === this._options.samplerObjects.indexOf(pp) && this._options.samplerObjects.push(pp), this._textureSamplers[pp] = ip, this
      }
      setStorageBuffer(pp, ip) {
        return -1 === this._options.storageBuffers.indexOf(pp) && this._options.storageBuffers.push(pp), this._storageBuffers[pp] = ip, this
      }
      setDefine(pp, ip) {
        const cp = pp.trimEnd() + " ",
          Op = this.options.defines.findIndex((ip => ip === pp || ip.startsWith(cp)));
        return Op >= 0 && this.options.defines.splice(Op, 1), ("boolean" !== typeof ip || ip) && this.options.defines.push(cp + ip), this
      }
      isReadyForSubMesh(pp, ip, cp) {
        return this.isReady(pp, cp, ip)
      }
      isReady(pp, ip, cp) {
        const Op = cp && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const pp = Op ? cp._drawWrapper : this._drawWrapper;
          if (pp.effect && pp._wasPreviouslyReady && pp._wasPreviouslyUsingInstances === ip) return !0
        }
        const Ip = this.Gl(),
          xp = Ip.gy(),
          Yp = [],
          Dp = [];
        let Ap = null,
          Up = this._shaderPath,
          vp = this._options.uniforms,
          tp = this._options.uniformBuffers,
          Hp = this._options.samplers;
        xp.getCaps().multiview && Ip.activeCamera && Ip.activeCamera.outputRenderTarget && Ip.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, Yp.push("#define MULTIVIEW"), -1 !== vp.indexOf("viewProjection") && -1 === vp.indexOf("viewProjectionR") && vp.push("viewProjectionR"));
        for (let op = 0; op < this._options.defines.length; op++) {
          const pp = 0 === this._options.defines[op].indexOf("#define") ? this._options.defines[op] : `#define ${this._options.defines[op]}`;
          Yp.push(pp)
        }
        for (let op = 0; op < this._options.attributes.length; op++) Dp.push(this._options.attributes[op]);
        if (pp && pp.isVerticesDataPresent(Sp.j.ColorKind) && (-1 === Dp.indexOf(Sp.j.ColorKind) && Dp.push(Sp.j.ColorKind), Yp.push("#define VERTEXCOLOR")), ip && (Yp.push("#define INSTANCES"), (0, Wp.Ab)(Dp, this._materialHelperNeedsPreviousMatrices), pp?.hasThinInstances && (Yp.push("#define THIN_INSTANCES"), pp && pp.isVerticesDataPresent(Sp.j.ColorInstanceKind) && (Dp.push(Sp.j.ColorInstanceKind), Yp.push("#define INSTANCESCOLOR")))), pp && pp.useBones && pp.computeBonesUsingShaders && pp.skeleton) {
          Dp.push(Sp.j.MatricesIndicesKind), Dp.push(Sp.j.MatricesWeightsKind), pp.numBoneInfluencers > 4 && (Dp.push(Sp.j.MatricesIndicesExtraKind), Dp.push(Sp.j.MatricesWeightsExtraKind));
          const ip = pp.skeleton;
          Yp.push("#define NUM_BONE_INFLUENCERS " + pp.numBoneInfluencers), Ap = new Lp.c, Ap.addCPUSkinningFallback(0, pp), ip.isUsingTextureForMatrices ? (Yp.push("#define BONETEXTURE"), -1 === vp.indexOf("boneTextureInfo") && vp.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (Yp.push("#define BonesPerMesh " + (ip.bones.length + 1)), -1 === vp.indexOf("mBones") && vp.push("mBones"))
        } else Yp.push("#define NUM_BONE_INFLUENCERS 0");
        let dp = 0;
        const ep = pp ? pp.morphTargetManager : null;
        if (ep) {
          const ip = -1 !== Yp.indexOf("#define UV1"),
            cp = -1 !== Yp.indexOf("#define UV2"),
            Op = -1 !== Yp.indexOf("#define TANGENT"),
            op = -1 !== Yp.indexOf("#define NORMAL"),
            Ip = -1 !== Yp.indexOf("#define VERTEXCOLOR");
          dp = (0, Wp.Q)(ep, Yp, Dp, pp, !0, op, Op, ip, cp, Ip), ep.isUsingTextureForTargets && (-1 === vp.indexOf("morphTargetTextureIndices") && vp.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), dp > 0 && (vp = vp.slice(), vp.push("morphTargetInfluences"), vp.push("morphTargetCount"), vp.push("morphTargetTextureInfo"), vp.push("morphTargetTextureIndices"))
        } else Yp.push("#define NUM_MORPH_INFLUENCERS 0");
        if (pp) {
          const cp = pp.bakedVertexAnimationManager;
          cp && cp.isEnabled && (Yp.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === vp.indexOf("bakedVertexAnimationSettings") && vp.push("bakedVertexAnimationSettings"), -1 === vp.indexOf("bakedVertexAnimationTextureSizeInverted") && vp.push("bakedVertexAnimationTextureSizeInverted"), -1 === vp.indexOf("bakedVertexAnimationTime") && vp.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), ip && Dp.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const op in this._textures)
          if (!this._textures[op].isReady()) return !1;
        for (const op in this._internalTextures)
          if (!this._internalTextures[op].isReady) return !1;
        pp && this.needAlphaTestingForMesh(pp) && Yp.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, Pp.c)(vp), (0, Pp.k)(this, Ip, Yp)), Ip.fogEnabled && pp?.applyFog && Ip.fogMode !== op.f.FOGMODE_NONE && (Yp.push("#define FOG"), -1 === vp.indexOf("view") && vp.push("view"), -1 === vp.indexOf("vFogInfos") && vp.push("vFogInfos"), -1 === vp.indexOf("vFogColor") && vp.push("vFogColor")), this._useLogarithmicDepth && (Yp.push("#define LOGARITHMICDEPTH"), -1 === vp.indexOf("logarithmicDepthConstant") && vp.push("logarithmicDepthConstant"));
        const jp = cp ? cp.getRenderingMesh() : pp;
        if (jp && this.useVertexPulling) {
          const pp = jp.geometry;
          pp && (this._vertexPullingMetadata = (0, yp.i)(pp), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((pp, ip) => {
            vp.push(`vp_${ip}_info`)
          }))), Yp.push("#define USE_VERTEX_PULLING");
          const ip = jp.geometry?.getIndexBuffer();
          ip && !jp.isUnIndexed && (Yp.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), ip.is32Bits && Yp.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (vp = vp.slice(), tp = tp.slice(), Hp = Hp.slice(), Up = this.customShaderNameResolve(this.name, vp, tp, Hp, Yp, Dp));
        const kp = Op ? cp._getDrawWrapper(void 0, !0) : this._drawWrapper,
          mp = kp?.effect ?? null,
          Rp = kp?.defines ?? null,
          qp = Yp.join("\n");
        let Mp = mp;
        return Rp !== qp && (Mp = xp.createEffect(Up, {
          attributes: Dp,
          uniformsNames: vp,
          uniformBuffersNames: tp,
          samplers: Hp,
          defines: qp,
          fallbacks: Ap,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: dp
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, xp), Op ? cp.setEffect(Mp, qp, this._materialContext) : kp && kp.setEffect(Mp, qp), this._onEffectCreatedObservable && (wp.effect = Mp, wp.subMesh = cp ?? pp?.Am[0] ?? null, this._onEffectCreatedObservable.notifyObservers(wp))), kp._wasPreviouslyUsingInstances = !!ip, !!Mp?.isReady() && (mp !== Mp && Ip.resetCachedMaterial(), kp._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(pp, ip) {
        const cp = ip ?? this.getEffect();
        if (!cp) return;
        const Op = this._options.uniforms; - 1 !== Op.indexOf("world") && cp.setMatrix("world", pp);
        const op = this.Gl(); - 1 !== Op.indexOf("worldView") && (pp.multiplyToRef(op.getViewMatrix(), this._cachedWorldViewMatrix), cp.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== Op.indexOf("worldViewProjection") && (pp.multiplyToRef(op.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), cp.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== Op.indexOf("view") && cp.setMatrix("view", op.getViewMatrix())
      }
      bindForSubMesh(pp, ip, cp) {
        this.bind(pp, ip, cp._drawWrapperOverride?.effect, cp)
      }
      bind(pp, ip, cp, Op) {
        const op = Op && this._storeEffectOnSubMeshes,
          Ip = cp ?? (op ? Op.effect : this.getEffect());
        if (!Ip) return;
        const Sp = this.Gl();
        this._activeEffect = Ip, this.bindOnlyWorldMatrix(pp, cp);
        const xp = this._options.uniformBuffers;
        let Lp = !1;
        if (Ip && xp && xp.length > 0 && Sp.gy().supportsUniformBuffers)
          for (let Dp = 0; Dp < xp.length; ++Dp) {
            switch (xp[Dp]) {
              case "Mesh":
                ip && (ip.getMeshUniformBuffer().bindToEffect(Ip, "Mesh"), ip.transferToEffect(pp));
                break;
              case "Scene":
                (0, Wp.y)(Ip, Sp.getSceneUniformBuffer()), Sp.finalizeSceneUbo(), Lp = !0
            }
          }
        const Yp = ip && op ? this._mustRebind(Sp, Ip, Op, ip.visibility) : Sp.getCachedMaterial() !== this;
        if (Ip && Yp) {
          let pp;
          for (pp in Lp || -1 === this._options.uniforms.indexOf("view") || Ip.setMatrix("view", Sp.getViewMatrix()), Lp || -1 === this._options.uniforms.indexOf("projection") || Ip.setMatrix("projection", Sp.getProjectionMatrix()), Lp || -1 === this._options.uniforms.indexOf("viewProjection") || (Ip.setMatrix("viewProjection", Sp.getTransformMatrix()), this._multiview && Ip.setMatrix("viewProjectionR", Sp._transformMatrixR)), Sp.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && Ip.setVector3("cameraPosition", Sp.activeCamera.globalPosition), (0, Wp.g)(ip, Ip), (0, Pp.g)(Ip, this, Sp), this._vertexPullingMetadata && (0, yp.e)(Ip, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, Wp.r)(op ? Op.materialDefines : Ip.defines, Ip, Sp), ip && (0, Wp.i)(Sp, ip, Ip), this._textures) Ip.setTexture(pp, this._textures[pp]);
          for (pp in this._internalTextures) Ip._bindTexture(pp, this._internalTextures[pp]);
          for (pp in this._textureArrays) Ip.setTextureArray(pp, this._textureArrays[pp]);
          for (pp in this._ints) Ip.setInt(pp, this._ints[pp]);
          for (pp in this._uints) Ip.setUInt(pp, this._uints[pp]);
          for (pp in this._floats) Ip.setFloat(pp, this._floats[pp]);
          for (pp in this._floatsArrays) Ip.setArray(pp, this._floatsArrays[pp]);
          for (pp in this._colors3) Ip.setColor3(pp, this._colors3[pp]);
          for (pp in this._colors3Arrays) Ip.setArray3(pp, this._colors3Arrays[pp]);
          for (pp in this._colors4) {
            const ip = this._colors4[pp];
            Ip.setFloat4(pp, ip.r, ip.g, ip.b, ip.a)
          }
          for (pp in this._colors4Arrays) Ip.setArray4(pp, this._colors4Arrays[pp]);
          for (pp in this._vectors2) Ip.setVector2(pp, this._vectors2[pp]);
          for (pp in this._vectors3) Ip.setVector3(pp, this._vectors3[pp]);
          for (pp in this._vectors4) Ip.setVector4(pp, this._vectors4[pp]);
          for (pp in this._quaternions) Ip.setQuaternion(pp, this._quaternions[pp]);
          for (pp in this._matrices) Ip.setMatrix(pp, this._matrices[pp]);
          for (pp in this._matrixArrays) Ip.setMatrices(pp, this._matrixArrays[pp]);
          for (pp in this._matrices3x3) Ip.setMatrix3x3(pp, this._matrices3x3[pp]);
          for (pp in this._matrices2x2) Ip.setMatrix2x2(pp, this._matrices2x2[pp]);
          for (pp in this._vectors2Arrays) Ip.setArray2(pp, this._vectors2Arrays[pp]);
          for (pp in this._vectors3Arrays) Ip.setArray3(pp, this._vectors3Arrays[pp]);
          for (pp in this._vectors4Arrays) Ip.setArray4(pp, this._vectors4Arrays[pp]);
          for (pp in this._quaternionsArrays) Ip.setArray4(pp, this._quaternionsArrays[pp]);
          for (pp in this._uniformBuffers) {
            const ip = this._uniformBuffers[pp].getBuffer();
            ip && Ip.bindUniformBuffer(ip, pp)
          }
          const cp = Sp.gy(),
            xp = cp.setExternalTexture;
          if (xp)
            for (pp in this._externalTextures) xp.call(cp, pp, this._externalTextures[pp]);
          const Yp = cp.setTextureSampler;
          if (Yp)
            for (pp in this._textureSamplers) Yp.call(cp, pp, this._textureSamplers[pp]);
          const Dp = cp.setStorageBuffer;
          if (Dp)
            for (pp in this._storageBuffers) Dp.call(cp, pp, this._storageBuffers[pp])
        }
        if (Ip && ip && (Yp || !this.isFrozen)) {
          (0, Wp.v)(ip, Ip), ip.morphTargetManager && ip.morphTargetManager.isUsingTextureForTargets && ip.morphTargetManager._bind(Ip);
          const pp = ip.bakedVertexAnimationManager;
          if (pp && pp.isEnabled) {
            const pp = op ? Op._drawWrapper : this._drawWrapper;
            ip.bakedVertexAnimationManager?.bind(Ip, !!pp._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(ip, Ip, Op)
      }
      getActiveTextures() {
        const pp = super.getActiveTextures();
        for (const ip in this._textures) pp.push(this._textures[ip]);
        for (const ip in this._textureArrays) {
          const cp = this._textureArrays[ip];
          for (let ip = 0; ip < cp.length; ip++) pp.push(cp[ip])
        }
        return pp
      }
      hasTexture(pp) {
        if (super.hasTexture(pp)) return !0;
        for (const cp in this._textures)
          if (this._textures[cp] === pp) return !0;
        const ip = pp.getInternalTexture();
        for (const cp in this._internalTextures)
          if (this._internalTextures[cp] === ip) return !0;
        for (const cp in this._textureArrays) {
          const ip = this._textureArrays[cp];
          for (let cp = 0; cp < ip.length; cp++)
            if (ip[cp] === pp) return !0
        }
        return !1
      }
      clone(pp) {
        const ip = Op.c.Clone((() => new vp(pp, this.Gl(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        ip.name = pp, ip.id = pp, "object" === typeof ip._shaderPath && (ip._shaderPath = {
          ...ip._shaderPath
        }), this._options = {
          ...this._options
        };
        const cp = Object.keys(this._options);
        for (const Op of cp) {
          const pp = this._options[Op];
          Array.isArray(pp) && (this._options[Op] = pp.slice(0))
        }
        this.stencil.copyTo(ip.stencil);
        for (const Op in this._textures) ip.setTexture(Op, this._textures[Op]);
        for (const Op in this._internalTextures) ip.setInternalTexture(Op, this._internalTextures[Op]);
        for (const Op in this._textureArrays) ip.setTextureArray(Op, this._textureArrays[Op]);
        for (const Op in this._externalTextures) ip.setExternalTexture(Op, this._externalTextures[Op]);
        for (const Op in this._ints) ip.setInt(Op, this._ints[Op]);
        for (const Op in this._uints) ip.setUInt(Op, this._uints[Op]);
        for (const Op in this._floats) ip.setFloat(Op, this._floats[Op]);
        for (const Op in this._floatsArrays) ip.setFloats(Op, this._floatsArrays[Op]);
        for (const Op in this._colors3) ip.setColor3(Op, this._colors3[Op]);
        for (const Op in this._colors3Arrays) ip._colors3Arrays[Op] = this._colors3Arrays[Op];
        for (const Op in this._colors4) ip.setColor4(Op, this._colors4[Op]);
        for (const Op in this._colors4Arrays) ip._colors4Arrays[Op] = this._colors4Arrays[Op];
        for (const Op in this._vectors2) ip.setVector2(Op, this._vectors2[Op]);
        for (const Op in this._vectors3) ip.setVector3(Op, this._vectors3[Op]);
        for (const Op in this._vectors4) ip.setVector4(Op, this._vectors4[Op]);
        for (const Op in this._quaternions) ip.setQuaternion(Op, this._quaternions[Op]);
        for (const Op in this._quaternionsArrays) ip._quaternionsArrays[Op] = this._quaternionsArrays[Op];
        for (const Op in this._matrices) ip.setMatrix(Op, this._matrices[Op]);
        for (const Op in this._matrixArrays) ip._matrixArrays[Op] = this._matrixArrays[Op].slice();
        for (const Op in this._matrices3x3) ip.setMatrix3x3(Op, this._matrices3x3[Op]);
        for (const Op in this._matrices2x2) ip.setMatrix2x2(Op, this._matrices2x2[Op]);
        for (const Op in this._vectors2Arrays) ip.setArray2(Op, this._vectors2Arrays[Op]);
        for (const Op in this._vectors3Arrays) ip.setArray3(Op, this._vectors3Arrays[Op]);
        for (const Op in this._vectors4Arrays) ip.setArray4(Op, this._vectors4Arrays[Op]);
        for (const Op in this._uniformBuffers) ip.setUniformBuffer(Op, this._uniformBuffers[Op]);
        for (const Op in this._textureSamplers) ip.setTextureSampler(Op, this._textureSamplers[Op]);
        for (const Op in this._storageBuffers) ip.setStorageBuffer(Op, this._storageBuffers[Op]);
        return ip
      }
      dispose(pp, ip, cp) {
        if (ip) {
          let pp;
          for (pp in this._textures) this._textures[pp].dispose();
          for (pp in this._internalTextures) this._internalTextures[pp].dispose();
          for (pp in this._textureArrays) {
            const ip = this._textureArrays[pp];
            for (let pp = 0; pp < ip.length; pp++) ip[pp].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(pp, ip, cp)
      }
      serialize() {
        const pp = Op.c.Serialize(this);
        let ip;
        for (ip in pp.customType = "BABYLON.ShaderMaterial", pp.uniqueId = this.uniqueId, pp.options = this._options, pp.shaderPath = this._shaderPath, pp.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, pp.stencil = this.stencil.serialize(), pp.textures = {}, this._textures) pp.textures[ip] = this._textures[ip].serialize();
        for (ip in pp.textureArrays = {}, this._textureArrays) {
          pp.textureArrays[ip] = [];
          const cp = this._textureArrays[ip];
          for (let Op = 0; Op < cp.length; Op++) pp.textureArrays[ip].push(cp[Op].serialize())
        }
        for (ip in pp.ints = {}, this._ints) pp.ints[ip] = this._ints[ip];
        for (ip in pp.uints = {}, this._uints) pp.uints[ip] = this._uints[ip];
        for (ip in pp.floats = {}, this._floats) pp.floats[ip] = this._floats[ip];
        for (ip in pp.floatsArrays = {}, this._floatsArrays) pp.floatsArrays[ip] = this._floatsArrays[ip];
        for (ip in pp.colors3 = {}, this._colors3) {
          const cp = this._colors3[ip];
          pp.colors3[ip] = [cp.r, cp.g, cp.b]
        }
        for (ip in pp.colors3Arrays = {}, this._colors3Arrays) pp.colors3Arrays[ip] = this._colors3Arrays[ip];
        for (ip in pp.colors4 = {}, this._colors4) {
          const cp = this._colors4[ip];
          pp.colors4[ip] = [cp.r, cp.g, cp.b, cp.a]
        }
        for (ip in pp.colors4Arrays = {}, this._colors4Arrays) pp.colors4Arrays[ip] = this._colors4Arrays[ip];
        for (ip in pp.vectors2 = {}, this._vectors2) {
          const cp = this._vectors2[ip];
          pp.vectors2[ip] = [cp.x, cp.y]
        }
        for (ip in pp.vectors3 = {}, this._vectors3) {
          const cp = this._vectors3[ip];
          pp.vectors3[ip] = [cp.x, cp.y, cp.z]
        }
        for (ip in pp.vectors4 = {}, this._vectors4) {
          const cp = this._vectors4[ip];
          pp.vectors4[ip] = [cp.x, cp.y, cp.z, cp.w]
        }
        for (ip in pp.quaternions = {}, this._quaternions) pp.quaternions[ip] = this._quaternions[ip].BOp();
        for (ip in pp.matrices = {}, this._matrices) pp.matrices[ip] = this._matrices[ip].BOp();
        for (ip in pp.matrixArray = {}, this._matrixArrays) pp.matrixArray[ip] = this._matrixArrays[ip];
        for (ip in pp.matrices3x3 = {}, this._matrices3x3) pp.matrices3x3[ip] = this._matrices3x3[ip];
        for (ip in pp.matrices2x2 = {}, this._matrices2x2) pp.matrices2x2[ip] = this._matrices2x2[ip];
        for (ip in pp.vectors2Arrays = {}, this._vectors2Arrays) pp.vectors2Arrays[ip] = this._vectors2Arrays[ip];
        for (ip in pp.vectors3Arrays = {}, this._vectors3Arrays) pp.vectors3Arrays[ip] = this._vectors3Arrays[ip];
        for (ip in pp.vectors4Arrays = {}, this._vectors4Arrays) pp.vectors4Arrays[ip] = this._vectors4Arrays[ip];
        for (ip in pp.quaternionsArrays = {}, this._quaternionsArrays) pp.quaternionsArrays[ip] = this._quaternionsArrays[ip];
        return pp
      }
    }

    function tp(pp, ip, cp) {
      const op = Op.c.Parse((() => new vp(pp.name, ip, pp.shaderPath, pp.options, pp.storeEffectOnSubMeshes)), pp, ip, cp);
      let Sp;
      for (Sp in pp.stencil && op.stencil.parse(pp.stencil, ip, cp), pp.textures) op.setTexture(Sp, xp.d.Parse(pp.textures[Sp], ip, cp));
      for (Sp in pp.textureArrays) {
        const Op = pp.textureArrays[Sp],
          Ip = [];
        for (let pp = 0; pp < Op.length; pp++) Ip.push(xp.d.Parse(Op[pp], ip, cp));
        op.setTextureArray(Sp, Ip)
      }
      for (Sp in pp.ints) op.setInt(Sp, pp.ints[Sp]);
      for (Sp in pp.uints) op.setUInt(Sp, pp.uints[Sp]);
      for (Sp in pp.floats) op.setFloat(Sp, pp.floats[Sp]);
      for (Sp in pp.floatsArrays) op.setFloats(Sp, pp.floatsArrays[Sp]);
      for (Sp in pp.colors3) {
        const ip = pp.colors3[Sp];
        op.setColor3(Sp, {
          r: ip[0],
          g: ip[1],
          b: ip[2]
        })
      }
      for (Sp in pp.colors3Arrays) {
        const ip = pp.colors3Arrays[Sp].reduce(((pp, ip, cp) => (cp % 3 === 0 ? pp.push([ip]) : pp[pp.length - 1].push(ip), pp)), []).map((pp => ({
          r: pp[0],
          g: pp[1],
          b: pp[2]
        })));
        op.setColor3Array(Sp, ip)
      }
      for (Sp in pp.colors4) {
        const ip = pp.colors4[Sp];
        op.setColor4(Sp, {
          r: ip[0],
          g: ip[1],
          b: ip[2],
          a: ip[3]
        })
      }
      for (Sp in pp.colors4Arrays) {
        const ip = pp.colors4Arrays[Sp].reduce(((pp, ip, cp) => (cp % 4 === 0 ? pp.push([ip]) : pp[pp.length - 1].push(ip), pp)), []).map((pp => ({
          r: pp[0],
          g: pp[1],
          b: pp[2],
          a: pp[3]
        })));
        op.setColor4Array(Sp, ip)
      }
      for (Sp in pp.vectors2) {
        const ip = pp.vectors2[Sp];
        op.setVector2(Sp, {
          x: ip[0],
          y: ip[1]
        })
      }
      for (Sp in pp.vectors3) {
        const ip = pp.vectors3[Sp];
        op.setVector3(Sp, {
          x: ip[0],
          y: ip[1],
          z: ip[2]
        })
      }
      for (Sp in pp.vectors4) {
        const ip = pp.vectors4[Sp];
        op.setVector4(Sp, {
          x: ip[0],
          y: ip[1],
          z: ip[2],
          w: ip[3]
        })
      }
      for (Sp in pp.quaternions) op.setQuaternion(Sp, Ip.f.FromArray(pp.quaternions[Sp]));
      for (Sp in pp.matrices) op.setMatrix(Sp, Ip.b.FromArray(pp.matrices[Sp]));
      const Lp = op;
      for (Sp in pp.matrixArray) Lp._matrixArrays[Sp] = new Float32Array(pp.matrixArray[Sp]);
      for (Sp in pp.matrices3x3) op.setMatrix3x3(Sp, pp.matrices3x3[Sp]);
      for (Sp in pp.matrices2x2) op.setMatrix2x2(Sp, pp.matrices2x2[Sp]);
      for (Sp in pp.vectors2Arrays) op.setArray2(Sp, pp.vectors2Arrays[Sp]);
      for (Sp in pp.vectors3Arrays) op.setArray3(Sp, pp.vectors3Arrays[Sp]);
      for (Sp in pp.vectors4Arrays) op.setArray4(Sp, pp.vectors4Arrays[Sp]);
      for (Sp in pp.quaternionsArrays) op.setArray4(Sp, pp.quaternionsArrays[Sp]);
      return op
    }
    async function Hp(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((op, Ip) => {
        const Sp = new Yp.e;
        Sp.addEventListener("readystatechange", (() => {
          if (4 == Sp.readyState)
            if (200 == Sp.status) {
              const ip = tp(JSON.parse(Sp.responseText), cp || Ap.e.LastCreatedScene, Op);
              pp && (ip.name = pp), op(ip)
            } else Ip("Unable to load the ShaderMaterial")
        })), Sp.open("GET", ip), Sp.send()
      }))
    }
    async function dp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Op = this?.SnippetUrl ?? vp.SnippetUrl;
      return await new Promise(((op, Ip) => {
        const Sp = new Yp.e;
        Sp.addEventListener("readystatechange", (() => {
          if (4 == Sp.readyState)
            if (200 == Sp.status) {
              const Op = JSON.parse(JSON.parse(Sp.responseText).jsonPayload),
                Ip = tp(JSON.parse(Op.shaderMaterial), ip || Ap.e.LastCreatedScene, cp);
              Ip.snippetId = pp, op(Ip)
            } else Ip("Unable to load the snippet " + pp)
        })), Sp.open("GET", Op + "/" + pp.replace(/#/g, "/")), Sp.send()
      }))
    }
    vp.SnippetUrl = "https://snippet.babylonjs.com";
    const ep = dp;
    let jp = !1;

    function kp() {
      jp || (jp = !0, vp.Parse = tp, vp.ParseFromFileAsync = Hp, vp.ParseFromSnippetAsync = dp, vp.CreateFromSnippetAsync = ep, (0, Up.g)("BABYLON.ShaderMaterial", vp))
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);