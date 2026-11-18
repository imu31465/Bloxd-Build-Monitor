export const id = 243;
export const ids = [243];
export const modules = {
  38983: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => gb,
      g: () => Vy,
      j: () => Cy,
      l: () => Ty,
      o: () => mb,
      s: () => ly
    });
    var Uy = Wy(38485),
      hy = Wy(38569),
      fy = Wy(35861),
      Zy = Wy(38620),
      cb = Wy(38989),
      Py = Wy(38846),
      oy = Wy(38516),
      By = Wy(38841),
      Ky = Wy(35886),
      ey = Wy(38830),
      qb = Wy(38824),
      sy = Wy(38865),
      Sy = Wy(35909);
    const Ey = {
      effect: null,
      subMesh: null
    };
    class ly extends By.d {
      constructor(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(yb, bb, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new fy.c, this._cachedWorldViewProjectionMatrix = new fy.c, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = Wy, this._options = {
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
          ...Uy
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(yb) {
        this._shaderPath = yb
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
      _checkUniform(yb) {
        -1 === this._options.uniforms.indexOf(yb) && this._options.uniforms.push(yb)
      }
      setTexture(yb, bb) {
        return -1 === this._options.samplers.indexOf(yb) && this._options.samplers.push(yb), this._textures[yb] = bb, this
      }
      setInternalTexture(yb, bb) {
        return -1 === this._options.samplers.indexOf(yb) && this._options.samplers.push(yb), this._internalTextures[yb] = bb, this
      }
      removeTexture(yb) {
        delete this._textures[yb]
      }
      setTextureArray(yb, bb) {
        return -1 === this._options.samplers.indexOf(yb) && this._options.samplers.push(yb), this._checkUniform(yb), this._textureArrays[yb] = bb, this
      }
      setExternalTexture(yb, bb) {
        return -1 === this._options.externalTextures.indexOf(yb) && this._options.externalTextures.push(yb), this._externalTextures[yb] = bb, this
      }
      setFloat(yb, bb) {
        return this._checkUniform(yb), this._floats[yb] = bb, this
      }
      setInt(yb, bb) {
        return this._checkUniform(yb), this._ints[yb] = bb, this
      }
      setUInt(yb, bb) {
        return this._checkUniform(yb), this._uints[yb] = bb, this
      }
      setFloats(yb, bb) {
        return this._checkUniform(yb), this._floatsArrays[yb] = bb, this
      }
      setColor3(yb, bb) {
        return this._checkUniform(yb), this._colors3[yb] = bb, this
      }
      setColor3Array(yb, bb) {
        return this._checkUniform(yb), this._colors3Arrays[yb] = bb.reduce(((yb, bb) => (yb.push(bb.r, bb.g, bb.b), yb)), []), this
      }
      setColor4(yb, bb) {
        return this._checkUniform(yb), this._colors4[yb] = bb, this
      }
      setColor4Array(yb, bb) {
        return this._checkUniform(yb), this._colors4Arrays[yb] = bb.reduce(((yb, bb) => (yb.push(bb.r, bb.g, bb.b, bb.a), yb)), []), this
      }
      setVector2(yb, bb) {
        return this._checkUniform(yb), this._vectors2[yb] = bb, this
      }
      setVector3(yb, bb) {
        return this._checkUniform(yb), this._vectors3[yb] = bb, this
      }
      setVector4(yb, bb) {
        return this._checkUniform(yb), this._vectors4[yb] = bb, this
      }
      setQuaternion(yb, bb) {
        return this._checkUniform(yb), this._quaternions[yb] = bb, this
      }
      setQuaternionArray(yb, bb) {
        return this._checkUniform(yb), this._quaternionsArrays[yb] = bb.reduce(((yb, bb) => (bb.toArray(yb, yb.length), yb)), []), this
      }
      setMatrix(yb, bb) {
        return this._checkUniform(yb), this._matrices[yb] = bb, this
      }
      setMatrices(yb, bb) {
        this._checkUniform(yb);
        const Wy = new Float32Array(16 * bb.length);
        for (let Uy = 0; Uy < bb.length; Uy++) {
          bb[Uy].copyToArray(Wy, 16 * Uy)
        }
        return this._matrixArrays[yb] = Wy, this
      }
      setMatrix3x3(yb, bb) {
        return this._checkUniform(yb), this._matrices3x3[yb] = bb, this
      }
      setMatrix2x2(yb, bb) {
        return this._checkUniform(yb), this._matrices2x2[yb] = bb, this
      }
      setArray2(yb, bb) {
        return this._checkUniform(yb), this._vectors2Arrays[yb] = bb, this
      }
      setArray3(yb, bb) {
        return this._checkUniform(yb), this._vectors3Arrays[yb] = bb, this
      }
      setArray4(yb, bb) {
        return this._checkUniform(yb), this._vectors4Arrays[yb] = bb, this
      }
      setUniformBuffer(yb, bb) {
        return -1 === this._options.uniformBuffers.indexOf(yb) && this._options.uniformBuffers.push(yb), this._uniformBuffers[yb] = bb, this
      }
      setTextureSampler(yb, bb) {
        return -1 === this._options.samplerObjects.indexOf(yb) && this._options.samplerObjects.push(yb), this._textureSamplers[yb] = bb, this
      }
      setStorageBuffer(yb, bb) {
        return -1 === this._options.storageBuffers.indexOf(yb) && this._options.storageBuffers.push(yb), this._storageBuffers[yb] = bb, this
      }
      setDefine(yb, bb) {
        const Wy = yb.trimEnd() + " ",
          Uy = this.options.defines.findIndex((bb => bb === yb || bb.startsWith(Wy)));
        return Uy >= 0 && this.options.defines.splice(Uy, 1), ("boolean" !== typeof bb || bb) && this.options.defines.push(Wy + bb), this
      }
      isReadyForSubMesh(yb, bb, Wy) {
        return this.isReady(yb, Wy, bb)
      }
      isReady(yb, bb, Wy) {
        const Uy = Wy && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const yb = Uy ? Wy._drawWrapper : this._drawWrapper;
          if (yb.effect && yb._wasPreviouslyReady && yb._wasPreviouslyUsingInstances === bb) return !0
        }
        const fy = this.kWy(),
          cb = fy.xh(),
          oy = [],
          By = [];
        let Ky = null,
          Sy = this._shaderPath,
          ly = this._options.uniforms,
          mb = this._options.uniformBuffers,
          Cy = this._options.samplers;
        cb.getCaps().multiview && fy.activeCamera && fy.activeCamera.outputRenderTarget && fy.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, oy.push("#define MULTIVIEW"), -1 !== ly.indexOf("viewProjection") && -1 === ly.indexOf("viewProjectionR") && ly.push("viewProjectionR"));
        for (let hy = 0; hy < this._options.defines.length; hy++) {
          const yb = 0 === this._options.defines[hy].indexOf("#define") ? this._options.defines[hy] : `#define ${this._options.defines[hy]}`;
          oy.push(yb)
        }
        for (let hy = 0; hy < this._options.attributes.length; hy++) By.push(this._options.attributes[hy]);
        if (yb && yb.isVerticesDataPresent(Zy.k.ColorKind) && (-1 === By.indexOf(Zy.k.ColorKind) && By.push(Zy.k.ColorKind), oy.push("#define VERTEXCOLOR")), bb && (oy.push("#define INSTANCES"), (0, qb.tb)(By, this._materialHelperNeedsPreviousMatrices), yb?.hasThinInstances && (oy.push("#define THIN_INSTANCES"), yb && yb.isVerticesDataPresent(Zy.k.ColorInstanceKind) && (By.push(Zy.k.ColorInstanceKind), oy.push("#define INSTANCESCOLOR")))), yb && yb.useBones && yb.computeBonesUsingShaders && yb.skeleton) {
          By.push(Zy.k.MatricesIndicesKind), By.push(Zy.k.MatricesWeightsKind), yb.numBoneInfluencers > 4 && (By.push(Zy.k.MatricesIndicesExtraKind), By.push(Zy.k.MatricesWeightsExtraKind));
          const bb = yb.skeleton;
          oy.push("#define NUM_BONE_INFLUENCERS " + yb.numBoneInfluencers), Ky = new Py.c, Ky.addCPUSkinningFallback(0, yb), bb.isUsingTextureForMatrices ? (oy.push("#define BONETEXTURE"), -1 === ly.indexOf("boneTextureInfo") && ly.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (oy.push("#define BonesPerMesh " + (bb.bones.length + 1)), -1 === ly.indexOf("mBones") && ly.push("mBones"))
        } else oy.push("#define NUM_BONE_INFLUENCERS 0");
        let Ty = 0;
        const Vy = yb ? yb.morphTargetManager : null;
        if (Vy) {
          const bb = -1 !== oy.indexOf("#define UV1"),
            Wy = -1 !== oy.indexOf("#define UV2"),
            Uy = -1 !== oy.indexOf("#define TANGENT"),
            hy = -1 !== oy.indexOf("#define NORMAL"),
            fy = -1 !== oy.indexOf("#define VERTEXCOLOR");
          Ty = (0, qb.P)(Vy, oy, By, yb, !0, hy, Uy, bb, Wy, fy), Vy.isUsingTextureForTargets && (-1 === ly.indexOf("morphTargetTextureIndices") && ly.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), Ty > 0 && (ly = ly.slice(), ly.push("morphTargetInfluences"), ly.push("morphTargetCount"), ly.push("morphTargetTextureInfo"), ly.push("morphTargetTextureIndices"))
        } else oy.push("#define NUM_MORPH_INFLUENCERS 0");
        if (yb) {
          const Wy = yb.bakedVertexAnimationManager;
          Wy && Wy.isEnabled && (oy.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === ly.indexOf("bakedVertexAnimationSettings") && ly.push("bakedVertexAnimationSettings"), -1 === ly.indexOf("bakedVertexAnimationTextureSizeInverted") && ly.push("bakedVertexAnimationTextureSizeInverted"), -1 === ly.indexOf("bakedVertexAnimationTime") && ly.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), bb && By.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const hy in this._textures)
          if (!this._textures[hy].isReady()) return !1;
        for (const hy in this._internalTextures)
          if (!this._internalTextures[hy].isReady) return !1;
        yb && this.needAlphaTestingForMesh(yb) && oy.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, ey.d)(ly), (0, ey.k)(this, fy, oy)), fy.fogEnabled && yb?.applyFog && fy.fogMode !== hy.g.FOGMODE_NONE && (oy.push("#define FOG"), -1 === ly.indexOf("view") && ly.push("view"), -1 === ly.indexOf("vFogInfos") && ly.push("vFogInfos"), -1 === ly.indexOf("vFogColor") && ly.push("vFogColor")), this._useLogarithmicDepth && (oy.push("#define LOGARITHMICDEPTH"), -1 === ly.indexOf("logarithmicDepthConstant") && ly.push("logarithmicDepthConstant"));
        const Jy = Wy ? Wy.getRenderingMesh() : yb;
        if (Jy && this.useVertexPulling) {
          const yb = Jy.geometry;
          yb && (this._vertexPullingMetadata = (0, sy.c)(yb), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((yb, bb) => {
            ly.push(`vp_${bb}_info`)
          }))), oy.push("#define USE_VERTEX_PULLING");
          const bb = Jy.geometry?.getIndexBuffer();
          bb && !Jy.isUnIndexed && (oy.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), bb.is32Bits && oy.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (ly = ly.slice(), mb = mb.slice(), Cy = Cy.slice(), Sy = this.customShaderNameResolve(this.name, ly, mb, Cy, oy, By));
        const gb = Uy ? Wy._getDrawWrapper(void 0, !0) : this._drawWrapper,
          Gy = gb?.effect ?? null,
          Oy = gb?.defines ?? null,
          Ry = oy.join("\n");
        let vb = Gy;
        return Oy !== Ry && (vb = cb.createEffect(Sy, {
          attributes: By,
          uniformsNames: ly,
          uniformBuffersNames: mb,
          samplers: Cy,
          defines: Ry,
          fallbacks: Ky,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: Ty
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, cb), Uy ? Wy.setEffect(vb, Ry, this._materialContext) : gb && gb.setEffect(vb, Ry), this._onEffectCreatedObservable && (Ey.effect = vb, Ey.subMesh = Wy ?? yb?.vJ[0] ?? null, this._onEffectCreatedObservable.notifyObservers(Ey))), gb._wasPreviouslyUsingInstances = !!bb, !!vb?.isReady() && (Gy !== vb && fy.resetCachedMaterial(), gb._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(yb, bb) {
        const Wy = bb ?? this.getEffect();
        if (!Wy) return;
        const Uy = this._options.uniforms; - 1 !== Uy.indexOf("world") && Wy.setMatrix("world", yb);
        const hy = this.kWy(); - 1 !== Uy.indexOf("worldView") && (yb.multiplyToRef(hy.getViewMatrix(), this._cachedWorldViewMatrix), Wy.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== Uy.indexOf("worldViewProjection") && (yb.multiplyToRef(hy.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), Wy.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== Uy.indexOf("view") && Wy.setMatrix("view", hy.getViewMatrix())
      }
      bindForSubMesh(yb, bb, Wy) {
        this.bind(yb, bb, Wy._drawWrapperOverride?.effect, Wy)
      }
      bind(yb, bb, Wy, Uy) {
        const hy = Uy && this._storeEffectOnSubMeshes,
          fy = Wy ?? (hy ? Uy.effect : this.getEffect());
        if (!fy) return;
        const Zy = this.kWy();
        this._activeEffect = fy, this.bindOnlyWorldMatrix(yb, Wy);
        const cb = this._options.uniformBuffers;
        let Py = !1;
        if (fy && cb && cb.length > 0 && Zy.xh().supportsUniformBuffers)
          for (let By = 0; By < cb.length; ++By) {
            switch (cb[By]) {
              case "Mesh":
                bb && (bb.getMeshUniformBuffer().bindToEffect(fy, "Mesh"), bb.transferToEffect(yb));
                break;
              case "Scene":
                (0, qb.v)(fy, Zy.getSceneUniformBuffer()), Zy.finalizeSceneUbo(), Py = !0
            }
          }
        const oy = bb && hy ? this._mustRebind(Zy, fy, Uy, bb.visibility) : Zy.getCachedMaterial() !== this;
        if (fy && oy) {
          let yb;
          for (yb in Py || -1 === this._options.uniforms.indexOf("view") || fy.setMatrix("view", Zy.getViewMatrix()), Py || -1 === this._options.uniforms.indexOf("projection") || fy.setMatrix("projection", Zy.getProjectionMatrix()), Py || -1 === this._options.uniforms.indexOf("viewProjection") || (fy.setMatrix("viewProjection", Zy.getTransformMatrix()), this._multiview && fy.setMatrix("viewProjectionR", Zy._transformMatrixR)), Zy.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && fy.setVector3("cameraPosition", Zy.activeCamera.globalPosition), (0, qb.c)(bb, fy), (0, ey.g)(fy, this, Zy), this._vertexPullingMetadata && (0, sy.b)(fy, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, qb.q)(hy ? Uy.materialDefines : fy.defines, fy, Zy), bb && (0, qb.d)(Zy, bb, fy), this._textures) fy.setTexture(yb, this._textures[yb]);
          for (yb in this._internalTextures) fy._bindTexture(yb, this._internalTextures[yb]);
          for (yb in this._textureArrays) fy.setTextureArray(yb, this._textureArrays[yb]);
          for (yb in this._ints) fy.setInt(yb, this._ints[yb]);
          for (yb in this._uints) fy.setUInt(yb, this._uints[yb]);
          for (yb in this._floats) fy.setFloat(yb, this._floats[yb]);
          for (yb in this._floatsArrays) fy.setArray(yb, this._floatsArrays[yb]);
          for (yb in this._colors3) fy.setColor3(yb, this._colors3[yb]);
          for (yb in this._colors3Arrays) fy.setArray3(yb, this._colors3Arrays[yb]);
          for (yb in this._colors4) {
            const bb = this._colors4[yb];
            fy.setFloat4(yb, bb.r, bb.g, bb.b, bb.a)
          }
          for (yb in this._colors4Arrays) fy.setArray4(yb, this._colors4Arrays[yb]);
          for (yb in this._vectors2) fy.setVector2(yb, this._vectors2[yb]);
          for (yb in this._vectors3) fy.setVector3(yb, this._vectors3[yb]);
          for (yb in this._vectors4) fy.setVector4(yb, this._vectors4[yb]);
          for (yb in this._quaternions) fy.setQuaternion(yb, this._quaternions[yb]);
          for (yb in this._matrices) fy.setMatrix(yb, this._matrices[yb]);
          for (yb in this._matrixArrays) fy.setMatrices(yb, this._matrixArrays[yb]);
          for (yb in this._matrices3x3) fy.setMatrix3x3(yb, this._matrices3x3[yb]);
          for (yb in this._matrices2x2) fy.setMatrix2x2(yb, this._matrices2x2[yb]);
          for (yb in this._vectors2Arrays) fy.setArray2(yb, this._vectors2Arrays[yb]);
          for (yb in this._vectors3Arrays) fy.setArray3(yb, this._vectors3Arrays[yb]);
          for (yb in this._vectors4Arrays) fy.setArray4(yb, this._vectors4Arrays[yb]);
          for (yb in this._quaternionsArrays) fy.setArray4(yb, this._quaternionsArrays[yb]);
          for (yb in this._uniformBuffers) {
            const bb = this._uniformBuffers[yb].getBuffer();
            bb && fy.bindUniformBuffer(bb, yb)
          }
          const Wy = Zy.xh(),
            cb = Wy.setExternalTexture;
          if (cb)
            for (yb in this._externalTextures) cb.call(Wy, yb, this._externalTextures[yb]);
          const oy = Wy.setTextureSampler;
          if (oy)
            for (yb in this._textureSamplers) oy.call(Wy, yb, this._textureSamplers[yb]);
          const By = Wy.setStorageBuffer;
          if (By)
            for (yb in this._storageBuffers) By.call(Wy, yb, this._storageBuffers[yb])
        }
        if (fy && bb && (oy || !this.isFrozen)) {
          (0, qb.r)(bb, fy), bb.morphTargetManager && bb.morphTargetManager.isUsingTextureForTargets && bb.morphTargetManager._bind(fy);
          const yb = bb.bakedVertexAnimationManager;
          if (yb && yb.isEnabled) {
            const yb = hy ? Uy._drawWrapper : this._drawWrapper;
            bb.bakedVertexAnimationManager?.bind(fy, !!yb._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(bb, fy, Uy)
      }
      getActiveTextures() {
        const yb = super.getActiveTextures();
        for (const bb in this._textures) yb.push(this._textures[bb]);
        for (const bb in this._textureArrays) {
          const Wy = this._textureArrays[bb];
          for (let bb = 0; bb < Wy.length; bb++) yb.push(Wy[bb])
        }
        return yb
      }
      hasTexture(yb) {
        if (super.hasTexture(yb)) return !0;
        for (const Wy in this._textures)
          if (this._textures[Wy] === yb) return !0;
        const bb = yb.getInternalTexture();
        for (const Wy in this._internalTextures)
          if (this._internalTextures[Wy] === bb) return !0;
        for (const Wy in this._textureArrays) {
          const bb = this._textureArrays[Wy];
          for (let Wy = 0; Wy < bb.length; Wy++)
            if (bb[Wy] === yb) return !0
        }
        return !1
      }
      clone(yb) {
        const bb = Uy.c.Clone((() => new ly(yb, this.kWy(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        bb.name = yb, bb.id = yb, "object" === typeof bb._shaderPath && (bb._shaderPath = {
          ...bb._shaderPath
        }), this._options = {
          ...this._options
        };
        const Wy = Object.keys(this._options);
        for (const Uy of Wy) {
          const yb = this._options[Uy];
          Array.isArray(yb) && (this._options[Uy] = yb.slice(0))
        }
        this.stencil.copyTo(bb.stencil);
        for (const Uy in this._textures) bb.setTexture(Uy, this._textures[Uy]);
        for (const Uy in this._internalTextures) bb.setInternalTexture(Uy, this._internalTextures[Uy]);
        for (const Uy in this._textureArrays) bb.setTextureArray(Uy, this._textureArrays[Uy]);
        for (const Uy in this._externalTextures) bb.setExternalTexture(Uy, this._externalTextures[Uy]);
        for (const Uy in this._ints) bb.setInt(Uy, this._ints[Uy]);
        for (const Uy in this._uints) bb.setUInt(Uy, this._uints[Uy]);
        for (const Uy in this._floats) bb.setFloat(Uy, this._floats[Uy]);
        for (const Uy in this._floatsArrays) bb.setFloats(Uy, this._floatsArrays[Uy]);
        for (const Uy in this._colors3) bb.setColor3(Uy, this._colors3[Uy]);
        for (const Uy in this._colors3Arrays) bb._colors3Arrays[Uy] = this._colors3Arrays[Uy];
        for (const Uy in this._colors4) bb.setColor4(Uy, this._colors4[Uy]);
        for (const Uy in this._colors4Arrays) bb._colors4Arrays[Uy] = this._colors4Arrays[Uy];
        for (const Uy in this._vectors2) bb.setVector2(Uy, this._vectors2[Uy]);
        for (const Uy in this._vectors3) bb.setVector3(Uy, this._vectors3[Uy]);
        for (const Uy in this._vectors4) bb.setVector4(Uy, this._vectors4[Uy]);
        for (const Uy in this._quaternions) bb.setQuaternion(Uy, this._quaternions[Uy]);
        for (const Uy in this._quaternionsArrays) bb._quaternionsArrays[Uy] = this._quaternionsArrays[Uy];
        for (const Uy in this._matrices) bb.setMatrix(Uy, this._matrices[Uy]);
        for (const Uy in this._matrixArrays) bb._matrixArrays[Uy] = this._matrixArrays[Uy].slice();
        for (const Uy in this._matrices3x3) bb.setMatrix3x3(Uy, this._matrices3x3[Uy]);
        for (const Uy in this._matrices2x2) bb.setMatrix2x2(Uy, this._matrices2x2[Uy]);
        for (const Uy in this._vectors2Arrays) bb.setArray2(Uy, this._vectors2Arrays[Uy]);
        for (const Uy in this._vectors3Arrays) bb.setArray3(Uy, this._vectors3Arrays[Uy]);
        for (const Uy in this._vectors4Arrays) bb.setArray4(Uy, this._vectors4Arrays[Uy]);
        for (const Uy in this._uniformBuffers) bb.setUniformBuffer(Uy, this._uniformBuffers[Uy]);
        for (const Uy in this._textureSamplers) bb.setTextureSampler(Uy, this._textureSamplers[Uy]);
        for (const Uy in this._storageBuffers) bb.setStorageBuffer(Uy, this._storageBuffers[Uy]);
        return bb
      }
      dispose(yb, bb, Wy) {
        if (bb) {
          let yb;
          for (yb in this._textures) this._textures[yb].dispose();
          for (yb in this._internalTextures) this._internalTextures[yb].dispose();
          for (yb in this._textureArrays) {
            const bb = this._textureArrays[yb];
            for (let yb = 0; yb < bb.length; yb++) bb[yb].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(yb, bb, Wy)
      }
      serialize() {
        const yb = Uy.c.Serialize(this);
        let bb;
        for (bb in yb.customType = "BABYLON.ShaderMaterial", yb.uniqueId = this.uniqueId, yb.options = this._options, yb.shaderPath = this._shaderPath, yb.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, yb.stencil = this.stencil.serialize(), yb.textures = {}, this._textures) yb.textures[bb] = this._textures[bb].serialize();
        for (bb in yb.textureArrays = {}, this._textureArrays) {
          yb.textureArrays[bb] = [];
          const Wy = this._textureArrays[bb];
          for (let Uy = 0; Uy < Wy.length; Uy++) yb.textureArrays[bb].push(Wy[Uy].serialize())
        }
        for (bb in yb.ints = {}, this._ints) yb.ints[bb] = this._ints[bb];
        for (bb in yb.uints = {}, this._uints) yb.uints[bb] = this._uints[bb];
        for (bb in yb.floats = {}, this._floats) yb.floats[bb] = this._floats[bb];
        for (bb in yb.floatsArrays = {}, this._floatsArrays) yb.floatsArrays[bb] = this._floatsArrays[bb];
        for (bb in yb.colors3 = {}, this._colors3) {
          const Wy = this._colors3[bb];
          yb.colors3[bb] = [Wy.r, Wy.g, Wy.b]
        }
        for (bb in yb.colors3Arrays = {}, this._colors3Arrays) yb.colors3Arrays[bb] = this._colors3Arrays[bb];
        for (bb in yb.colors4 = {}, this._colors4) {
          const Wy = this._colors4[bb];
          yb.colors4[bb] = [Wy.r, Wy.g, Wy.b, Wy.a]
        }
        for (bb in yb.colors4Arrays = {}, this._colors4Arrays) yb.colors4Arrays[bb] = this._colors4Arrays[bb];
        for (bb in yb.vectors2 = {}, this._vectors2) {
          const Wy = this._vectors2[bb];
          yb.vectors2[bb] = [Wy.x, Wy.y]
        }
        for (bb in yb.vectors3 = {}, this._vectors3) {
          const Wy = this._vectors3[bb];
          yb.vectors3[bb] = [Wy.x, Wy.y, Wy.z]
        }
        for (bb in yb.vectors4 = {}, this._vectors4) {
          const Wy = this._vectors4[bb];
          yb.vectors4[bb] = [Wy.x, Wy.y, Wy.z, Wy.w]
        }
        for (bb in yb.quaternions = {}, this._quaternions) yb.quaternions[bb] = this._quaternions[bb].hBy();
        for (bb in yb.matrices = {}, this._matrices) yb.matrices[bb] = this._matrices[bb].hBy();
        for (bb in yb.matrixArray = {}, this._matrixArrays) yb.matrixArray[bb] = this._matrixArrays[bb];
        for (bb in yb.matrices3x3 = {}, this._matrices3x3) yb.matrices3x3[bb] = this._matrices3x3[bb];
        for (bb in yb.matrices2x2 = {}, this._matrices2x2) yb.matrices2x2[bb] = this._matrices2x2[bb];
        for (bb in yb.vectors2Arrays = {}, this._vectors2Arrays) yb.vectors2Arrays[bb] = this._vectors2Arrays[bb];
        for (bb in yb.vectors3Arrays = {}, this._vectors3Arrays) yb.vectors3Arrays[bb] = this._vectors3Arrays[bb];
        for (bb in yb.vectors4Arrays = {}, this._vectors4Arrays) yb.vectors4Arrays[bb] = this._vectors4Arrays[bb];
        for (bb in yb.quaternionsArrays = {}, this._quaternionsArrays) yb.quaternionsArrays[bb] = this._quaternionsArrays[bb];
        return yb
      }
    }

    function mb(yb, bb, Wy) {
      const hy = Uy.c.Parse((() => new ly(yb.name, bb, yb.shaderPath, yb.options, yb.storeEffectOnSubMeshes)), yb, bb, Wy);
      let Zy;
      for (Zy in yb.stencil && hy.stencil.parse(yb.stencil, bb, Wy), yb.textures) hy.setTexture(Zy, cb.f.Parse(yb.textures[Zy], bb, Wy));
      for (Zy in yb.textureArrays) {
        const Uy = yb.textureArrays[Zy],
          fy = [];
        for (let yb = 0; yb < Uy.length; yb++) fy.push(cb.f.Parse(Uy[yb], bb, Wy));
        hy.setTextureArray(Zy, fy)
      }
      for (Zy in yb.ints) hy.setInt(Zy, yb.ints[Zy]);
      for (Zy in yb.uints) hy.setUInt(Zy, yb.uints[Zy]);
      for (Zy in yb.floats) hy.setFloat(Zy, yb.floats[Zy]);
      for (Zy in yb.floatsArrays) hy.setFloats(Zy, yb.floatsArrays[Zy]);
      for (Zy in yb.colors3) {
        const bb = yb.colors3[Zy];
        hy.setColor3(Zy, {
          r: bb[0],
          g: bb[1],
          b: bb[2]
        })
      }
      for (Zy in yb.colors3Arrays) {
        const bb = yb.colors3Arrays[Zy].reduce(((yb, bb, Wy) => (Wy % 3 === 0 ? yb.push([bb]) : yb[yb.length - 1].push(bb), yb)), []).map((yb => ({
          r: yb[0],
          g: yb[1],
          b: yb[2]
        })));
        hy.setColor3Array(Zy, bb)
      }
      for (Zy in yb.colors4) {
        const bb = yb.colors4[Zy];
        hy.setColor4(Zy, {
          r: bb[0],
          g: bb[1],
          b: bb[2],
          a: bb[3]
        })
      }
      for (Zy in yb.colors4Arrays) {
        const bb = yb.colors4Arrays[Zy].reduce(((yb, bb, Wy) => (Wy % 4 === 0 ? yb.push([bb]) : yb[yb.length - 1].push(bb), yb)), []).map((yb => ({
          r: yb[0],
          g: yb[1],
          b: yb[2],
          a: yb[3]
        })));
        hy.setColor4Array(Zy, bb)
      }
      for (Zy in yb.vectors2) {
        const bb = yb.vectors2[Zy];
        hy.setVector2(Zy, {
          x: bb[0],
          y: bb[1]
        })
      }
      for (Zy in yb.vectors3) {
        const bb = yb.vectors3[Zy];
        hy.setVector3(Zy, {
          x: bb[0],
          y: bb[1],
          z: bb[2]
        })
      }
      for (Zy in yb.vectors4) {
        const bb = yb.vectors4[Zy];
        hy.setVector4(Zy, {
          x: bb[0],
          y: bb[1],
          z: bb[2],
          w: bb[3]
        })
      }
      for (Zy in yb.quaternions) hy.setQuaternion(Zy, fy.e.FromArray(yb.quaternions[Zy]));
      for (Zy in yb.matrices) hy.setMatrix(Zy, fy.c.FromArray(yb.matrices[Zy]));
      const Py = hy;
      for (Zy in yb.matrixArray) Py._matrixArrays[Zy] = new Float32Array(yb.matrixArray[Zy]);
      for (Zy in yb.matrices3x3) hy.setMatrix3x3(Zy, yb.matrices3x3[Zy]);
      for (Zy in yb.matrices2x2) hy.setMatrix2x2(Zy, yb.matrices2x2[Zy]);
      for (Zy in yb.vectors2Arrays) hy.setArray2(Zy, yb.vectors2Arrays[Zy]);
      for (Zy in yb.vectors3Arrays) hy.setArray3(Zy, yb.vectors3Arrays[Zy]);
      for (Zy in yb.vectors4Arrays) hy.setArray4(Zy, yb.vectors4Arrays[Zy]);
      for (Zy in yb.quaternionsArrays) hy.setArray4(Zy, yb.quaternionsArrays[Zy]);
      return hy
    }
    async function Cy(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((hy, fy) => {
        const Zy = new oy.c;
        Zy.addEventListener("readystatechange", (() => {
          if (4 == Zy.readyState)
            if (200 == Zy.status) {
              const bb = mb(JSON.parse(Zy.responseText), Wy || Ky.c.LastCreatedScene, Uy);
              yb && (bb.name = yb), hy(bb)
            } else fy("Unable to load the ShaderMaterial")
        })), Zy.open("GET", bb), Zy.send()
      }))
    }
    async function Ty(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Uy = this?.SnippetUrl ?? ly.SnippetUrl;
      return await new Promise(((hy, fy) => {
        const Zy = new oy.c;
        Zy.addEventListener("readystatechange", (() => {
          if (4 == Zy.readyState)
            if (200 == Zy.status) {
              const Uy = JSON.parse(JSON.parse(Zy.responseText).jsonPayload),
                fy = mb(JSON.parse(Uy.shaderMaterial), bb || Ky.c.LastCreatedScene, Wy);
              fy.snippetId = yb, hy(fy)
            } else fy("Unable to load the snippet " + yb)
        })), Zy.open("GET", Uy + "/" + yb.replace(/#/g, "/")), Zy.send()
      }))
    }
    ly.SnippetUrl = "https://snippet.babylonjs.com";
    const Vy = Ty;
    let Jy = !1;

    function gb() {
      Jy || (Jy = !0, ly.Parse = mb, ly.ParseFromFileAsync = Cy, ly.ParseFromSnippetAsync = Ty, ly.CreateFromSnippetAsync = Vy, (0, Sy.e)("BABYLON.ShaderMaterial", ly))
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);