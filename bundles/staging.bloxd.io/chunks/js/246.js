export const id = 246;
export const ids = [246];
export const modules = {
  39847: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Rk
    });
    let Rk = !1
  },
  39392: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ek
    });
    var Rk = Bk(39397),
      tk = Bk(39404),
      ak = Bk(36781),
      Xk = Bk(36758),
      bk = Bk(36772),
      wk = Bk(37578),
      dk = Bk(39408);
    class sk {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(kk) {
        this._wrapU = kk
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(kk) {
        this._wrapV = kk
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(kk) {
        this._texture && (this._texture.isCube = kk)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(kk) {
        this._texture && (this._texture.is3D = kk)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(kk) {
        this._texture && (this._texture.is2DArray = kk)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(kk) {
        return void 0 !== kk?.shareDepth
      }
      constructor(kk) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = dk.d.Zero(), this._cachedBaseSize = dk.d.Zero(), this._initialSamplingMode = 2, this._texture = sk._IsRenderTargetWrapper(kk) ? kk.texture : kk, this._texture && (this._engine = this._texture.ne(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
      }
      isReady() {
        return 4 === this.delayLoadState ? (this.delayLoad(), !1) : !!this._texture && this._texture.isReady
      }
      delayLoad() {}
      getInternalTexture() {
        return this._texture
      }
      getSize() {
        if (this._texture) {
          if (this._texture.width) return this._cachedSize.width = this._texture.width, this._cachedSize.height = this._texture.height, this._cachedSize;
          if (this._texture._size) return this._cachedSize.width = this._texture._size, this._cachedSize.height = this._texture._size, this._cachedSize
        }
        return this._cachedSize
      }
      getBaseSize() {
        return this.isReady() && this._texture ? this._texture._size ? (this._cachedBaseSize.width = this._texture._size, this._cachedBaseSize.height = this._texture._size, this._cachedBaseSize) : (this._cachedBaseSize.width = this._texture.baseWidth, this._cachedBaseSize.height = this._texture.baseHeight, this._cachedBaseSize) : (this._cachedBaseSize.width = 0, this._cachedBaseSize.height = 0, this._cachedBaseSize)
      }
      get samplingMode() {
        return this._texture ? this._texture.samplingMode : this._initialSamplingMode
      }
      updateSamplingMode(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(kk, this._texture, this._texture.generateMipMaps && Fk)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var Vk, Jk = Bk(39414),
      Ak = Bk(39296);
    let ek = (() => {
      var kk;
      let Fk, Bk, dk, Vk, Ak, ek, yk, fk, mk, Wk, vk, ik, Yk, Lk, Ok, Ek, Sk, Nk, Hk, uk, Mk, gk, Uk, ck, Gk, Tk = sk,
        rk = [],
        Dk = [],
        zk = [],
        Pk = [],
        hk = [],
        qk = [],
        Ck = [],
        Zk = [],
        pk = [],
        Kk = [],
        xk = [],
        jk = [],
        lk = [],
        nk = [],
        Ik = [],
        Qk = [],
        kF = [],
        FF = [],
        BF = [],
        RF = [],
        tF = [],
        aF = [],
        XF = [],
        bF = [],
        wF = [],
        dF = [],
        sF = [],
        VF = [],
        JF = [],
        AF = [],
        eF = [];
      return kk = class extends Tk {
        set hasAlpha(kk) {
          this._hasAlpha = kk
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(kk) {
          this._getAlphaFromRGB !== kk && (this._getAlphaFromRGB = kk, this._scene && this._scene.markAllMaterialsAsDirty(1, (kk => kk.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(kk) {
          this._coordinatesIndex !== kk && (this._coordinatesIndex = kk, this._scene && this._scene.markAllMaterialsAsDirty(1, (kk => kk.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(kk) {
          this._coordinatesMode !== kk && (this._coordinatesMode = kk, this._scene && this._scene.markAllMaterialsAsDirty(1, (kk => kk.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(kk) {
          this._wrapU = kk
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(kk) {
          this._wrapV = kk
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(kk) {
          this._texture ? this._texture.isCube = kk : this._isCube = kk
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(kk) {
          this._texture && (this._texture.is3D = kk)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(kk) {
          this._texture && (this._texture.is2DArray = kk)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(kk) {
          if (this._texture) {
            if (this._texture._gammaSpace === kk) return;
            this._texture._gammaSpace = kk
          } else {
            if (this._gammaSpace === kk) return;
            this._gammaSpace = kk
          }
          this.XN()?.markAllMaterialsAsDirty(1, (kk => kk.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(kk) {
          kk !== this.isRGBD && (this._texture && (this._texture._isRGBD = kk), this.XN()?.markAllMaterialsAsDirty(1, (kk => kk.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(kk) {
          this._texture && (this._texture._lodGenerationOffset = kk)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(kk) {
          this._texture && (this._texture._lodGenerationScale = kk)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(kk) {
          this._texture && (this._texture._linearSpecularLOD = kk)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(kk) {
          this._texture && (this._texture._irradianceTexture = kk)
        }
        get uid() {
          return this._uid || (this._uid = (0, wk.e)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(kk) {
          this._onDisposeObserver && this.yN.remove(this._onDisposeObserver), this._onDisposeObserver = this.yN.add(kk)
        }
        get isBlocking() {
          return !0
        }
        get loadingError() {
          return this._loadingError
        }
        get errorObject() {
          return this._errorObject
        }
        constructor(Fk) {
          let Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, Rk.l)(this, rk), (0, Rk.l)(this, Dk, void 0)), this.name = ((0, Rk.l)(this, zk), (0, Rk.l)(this, Pk, void 0)), this.displayName = ((0, Rk.l)(this, hk), (0, Rk.l)(this, qk, void 0)), this.metadata = ((0, Rk.l)(this, Ck), (0, Rk.l)(this, Zk, null)), this._internalMetadata = (0, Rk.l)(this, pk), this.reservedDataStore = null, this._hasAlpha = (0, Rk.l)(this, Kk, !1), this._getAlphaFromRGB = ((0, Rk.l)(this, xk), (0, Rk.l)(this, jk, !1)), this.level = ((0, Rk.l)(this, lk), (0, Rk.l)(this, nk, 1)), this._coordinatesIndex = ((0, Rk.l)(this, Ik), (0, Rk.l)(this, Qk, 0)), this.optimizeUVAllocation = ((0, Rk.l)(this, kF), (0, Rk.l)(this, FF, !0)), this._coordinatesMode = ((0, Rk.l)(this, BF), (0, Rk.l)(this, RF, 0)), this.wrapR = ((0, Rk.l)(this, tF), (0, Rk.l)(this, aF, 1)), this.anisotropicFilteringLevel = ((0, Rk.l)(this, XF), (0, Rk.l)(this, bF, kk.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, Rk.l)(this, wF), !1), this._gammaSpace = !0, this.invertZ = (0, Rk.l)(this, dF, !1), this.lodLevelInAlpha = ((0, Rk.l)(this, sF), (0, Rk.l)(this, VF, !1)), this._dominantDirection = ((0, Rk.l)(this, JF), null), this.isRenderTarget = (0, Rk.l)(this, AF, !1), this._prefiltered = ((0, Rk.l)(this, eF), !1), this._forceSerialize = !1, this.animations = [], this.yN = new ak.e, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, Fk ? kk._IsScene(Fk) ? this._scene = Fk : this._engine = Fk : this._scene = bk.c.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.ne()), this._texture = Bk, this._uid = null
        }
        XN() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return Xk.c.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return Xk.c.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(kk) {}
        get canRescale() {
          return !1
        }
        _getFromCache(kk, Fk, Bk, Rk, tk, ak) {
          const Xk = this._getEngine();
          if (!Xk) return null;
          const bk = Xk._getUseSRGBBuffer(!!tk, Fk),
            wk = Xk.getLoadedTexturesCache();
          for (let dk = 0; dk < wk.length; dk++) {
            const Xk = wk[dk];
            if ((void 0 === tk || bk === Xk._useSRGBBuffer) && (void 0 === Rk || Rk === Xk.invertY) && Xk.url === kk && Xk.generateMipMaps === !Fk && (!Bk || Bk === Xk.samplingMode) && (void 0 === ak || ak === Xk.isCube)) return Xk.incrementReferences(), Xk
          }
          return null
        }
        _rebuild() {}
        clone() {
          return null
        }
        get textureType() {
          return this._texture && void 0 !== this._texture.type ? this._texture.type : 0
        }
        get textureFormat() {
          return this._texture && void 0 !== this._texture.format ? this._texture.format : 5
        }
        _markAllSubMeshesAsTexturesDirty() {
          const kk = this.XN();
          kk && kk.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Rk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            Xk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            bk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            wk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const dk = this._getEngine();
          if (!dk) return null;
          const sk = this.getSize();
          let Vk = sk.width,
            Jk = sk.height;
          0 !== Fk && (Vk /= Math.pow(2, Fk), Jk /= Math.pow(2, Fk), Vk = Math.round(Vk), Jk = Math.round(Jk)), bk = Math.min(Vk, bk), wk = Math.min(Jk, wk);
          try {
            return this._texture.isCube || this._texture.is2DArray ? dk._readTexturePixels(this._texture, bk, wk, kk, Fk, Bk, Rk, tk, ak, Xk) : dk._readTexturePixels(this._texture, bk, wk, -1, Fk, Bk, Rk, tk, ak, Xk)
          } catch (Ak) {
            return null
          }
        }
        _readPixelsSync() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Rk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const ak = this.getSize();
          let Xk = ak.width,
            bk = ak.height;
          const wk = this._getEngine();
          if (!wk) return null;
          0 != Fk && (Xk /= Math.pow(2, Fk), bk /= Math.pow(2, Fk), Xk = Math.round(Xk), bk = Math.round(bk));
          try {
            return this._texture.isCube ? wk._readTexturePixelsSync(this._texture, Xk, bk, kk, Fk, Bk, Rk, tk) : wk._readTexturePixelsSync(this._texture, Xk, bk, -1, Fk, Bk, Rk, tk)
          } catch (dk) {
            return null
          }
        }
        get _lodTextureHigh() {
          return this._texture ? this._texture._lodTextureHigh : null
        }
        get _lodTextureMid() {
          return this._texture ? this._texture._lodTextureMid : null
        }
        get _lodTextureLow() {
          return this._texture ? this._texture._lodTextureLow : null
        }
        dispose() {
          if (this._scene) {
            this._scene.stopAnimation && this._scene.stopAnimation(this), this._scene.removePendingData(this);
            const kk = this._scene.textures.indexOf(this);
            if (kk >= 0 && this._scene.textures.splice(kk, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const kk = this._parentContainer.textures.indexOf(this);
              kk > -1 && this._parentContainer.textures.splice(kk, 1), this._parentContainer = null
            }
          }
          this.yN.notifyObservers(this), this.yN.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !kk) return null;
          const Fk = Jk.c.Serialize(this);
          return Jk.c.AppendSerializedAnimations(this, Fk), Fk
        }
        static WhenAllReady(kk, Fk) {
          let Bk = kk.length;
          if (0 !== Bk)
            for (let Rk = 0; Rk < kk.length; Rk++) {
              const tk = kk[Rk];
              if (tk.isReady()) 0 === --Bk && Fk();
              else {
                const kk = tk.onLoadObservable;
                kk ? kk.addOnce((() => {
                  0 === --Bk && Fk()
                })) : 0 === --Bk && Fk()
              }
            } else Fk()
        }
        static _IsScene(kk) {
          return "Scene" === kk.getClassName()
        }
      }, (() => {
        const ak = "function" === typeof Symbol && Symbol.metadata ? Object.create(Tk[Symbol.metadata] ?? null) : void 0;
        Fk = [(0, tk.M)()], Bk = [(0, tk.M)()], dk = [(0, tk.M)()], Vk = [(0, tk.M)()], Ak = [(0, tk.M)("hasAlpha")], ek = [(0, tk.M)("getAlphaFromRGB")], yk = [(0, tk.M)()], fk = [(0, tk.M)("coordinatesIndex")], mk = [(0, tk.M)()], Wk = [(0, tk.M)("coordinatesMode")], vk = [(0, tk.M)()], ik = [(0, tk.M)()], Yk = [(0, tk.M)()], Lk = [(0, tk.M)()], Ok = [(0, tk.M)()], Ek = [(0, tk.M)()], Sk = [(0, tk.M)()], Nk = [(0, tk.M)()], Hk = [(0, tk.M)()], uk = [(0, tk.M)()], Mk = [(0, tk.M)()], gk = [(0, tk.M)()], Uk = [(0, tk.M)()], ck = [(0, tk.D)()], Gk = [(0, tk.M)()], (0, Rk.j)(kk, null, vk, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: kk => "wrapU" in kk,
            get: kk => kk.wrapU
          },
          metadata: ak
        }, null, rk), (0, Rk.j)(kk, null, ik, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: kk => "wrapV" in kk,
            get: kk => kk.wrapV
          },
          metadata: ak
        }, null, rk), (0, Rk.j)(kk, null, Ok, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: kk => "isCube" in kk,
            get: kk => kk.isCube
          },
          metadata: ak
        }, null, rk), (0, Rk.j)(kk, null, Ek, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: kk => "is3D" in kk,
            get: kk => kk.is3D
          },
          metadata: ak
        }, null, rk), (0, Rk.j)(kk, null, Sk, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: kk => "is2DArray" in kk,
            get: kk => kk.is2DArray
          },
          metadata: ak
        }, null, rk), (0, Rk.j)(kk, null, Nk, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: kk => "gammaSpace" in kk,
            get: kk => kk.gammaSpace
          },
          metadata: ak
        }, null, rk), (0, Rk.j)(kk, null, Mk, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: kk => "lodGenerationOffset" in kk,
            get: kk => kk.lodGenerationOffset
          },
          metadata: ak
        }, null, rk), (0, Rk.j)(kk, null, gk, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: kk => "lodGenerationScale" in kk,
            get: kk => kk.lodGenerationScale
          },
          metadata: ak
        }, null, rk), (0, Rk.j)(kk, null, Uk, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: kk => "linearSpecularLOD" in kk,
            get: kk => kk.linearSpecularLOD
          },
          metadata: ak
        }, null, rk), (0, Rk.j)(kk, null, ck, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "irradianceTexture" in kk,
            get: kk => kk.irradianceTexture
          },
          metadata: ak
        }, null, rk), (0, Rk.j)(null, null, Fk, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: kk => "uniqueId" in kk,
            get: kk => kk.uniqueId,
            set: (kk, Fk) => {
              kk.uniqueId = Fk
            }
          },
          metadata: ak
        }, Dk, zk), (0, Rk.j)(null, null, Bk, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: kk => "name" in kk,
            get: kk => kk.name,
            set: (kk, Fk) => {
              kk.name = Fk
            }
          },
          metadata: ak
        }, Pk, hk), (0, Rk.j)(null, null, dk, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: kk => "displayName" in kk,
            get: kk => kk.displayName,
            set: (kk, Fk) => {
              kk.displayName = Fk
            }
          },
          metadata: ak
        }, qk, Ck), (0, Rk.j)(null, null, Vk, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: kk => "metadata" in kk,
            get: kk => kk.metadata,
            set: (kk, Fk) => {
              kk.metadata = Fk
            }
          },
          metadata: ak
        }, Zk, pk), (0, Rk.j)(null, null, Ak, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: kk => "_hasAlpha" in kk,
            get: kk => kk._hasAlpha,
            set: (kk, Fk) => {
              kk._hasAlpha = Fk
            }
          },
          metadata: ak
        }, Kk, xk), (0, Rk.j)(null, null, ek, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: kk => "_getAlphaFromRGB" in kk,
            get: kk => kk._getAlphaFromRGB,
            set: (kk, Fk) => {
              kk._getAlphaFromRGB = Fk
            }
          },
          metadata: ak
        }, jk, lk), (0, Rk.j)(null, null, yk, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: kk => "level" in kk,
            get: kk => kk.level,
            set: (kk, Fk) => {
              kk.level = Fk
            }
          },
          metadata: ak
        }, nk, Ik), (0, Rk.j)(null, null, fk, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: kk => "_coordinatesIndex" in kk,
            get: kk => kk._coordinatesIndex,
            set: (kk, Fk) => {
              kk._coordinatesIndex = Fk
            }
          },
          metadata: ak
        }, Qk, kF), (0, Rk.j)(null, null, mk, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: kk => "optimizeUVAllocation" in kk,
            get: kk => kk.optimizeUVAllocation,
            set: (kk, Fk) => {
              kk.optimizeUVAllocation = Fk
            }
          },
          metadata: ak
        }, FF, BF), (0, Rk.j)(null, null, Wk, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: kk => "_coordinatesMode" in kk,
            get: kk => kk._coordinatesMode,
            set: (kk, Fk) => {
              kk._coordinatesMode = Fk
            }
          },
          metadata: ak
        }, RF, tF), (0, Rk.j)(null, null, Yk, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: kk => "wrapR" in kk,
            get: kk => kk.wrapR,
            set: (kk, Fk) => {
              kk.wrapR = Fk
            }
          },
          metadata: ak
        }, aF, XF), (0, Rk.j)(null, null, Lk, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: kk => "anisotropicFilteringLevel" in kk,
            get: kk => kk.anisotropicFilteringLevel,
            set: (kk, Fk) => {
              kk.anisotropicFilteringLevel = Fk
            }
          },
          metadata: ak
        }, bF, wF), (0, Rk.j)(null, null, Hk, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: kk => "invertZ" in kk,
            get: kk => kk.invertZ,
            set: (kk, Fk) => {
              kk.invertZ = Fk
            }
          },
          metadata: ak
        }, dF, sF), (0, Rk.j)(null, null, uk, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: kk => "lodLevelInAlpha" in kk,
            get: kk => kk.lodLevelInAlpha,
            set: (kk, Fk) => {
              kk.lodLevelInAlpha = Fk
            }
          },
          metadata: ak
        }, VF, JF), (0, Rk.j)(null, null, Gk, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: kk => "isRenderTarget" in kk,
            get: kk => kk.isRenderTarget,
            set: (kk, Fk) => {
              kk.isRenderTarget = Fk
            }
          },
          metadata: ak
        }, AF, eF), ak && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ak
        })
      })(), kk.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, kk
    })();
    (Vk = ek.prototype).forceSphericalPolynomialsRecompute ?? (Vk.forceSphericalPolynomialsRecompute = (0, Ak.g)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(ek.prototype, "sphericalPolynomial") || Object.defineProperty(ek.prototype, "sphericalPolynomial", (0, Ak.f)("BaseTexture", "sphericalPolynomial"))
  },
  39895: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Yk,
      f: () => vk
    });
    var Rk = Bk(39397),
      tk = Bk(39404),
      ak = Bk(36781),
      Xk = Bk(36758),
      bk = Bk(39392),
      wk = Bk(36798),
      dk = Bk(39296),
      sk = Bk(39302),
      Vk = Bk(39500),
      Jk = Bk(37467),
      Ak = Bk(39461);

    function ek(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Rk = Fk.width,
        tk = Fk.height;
      if (kk instanceof Float32Array) {
        let Fk = kk.byteLength / kk.BYTES_PER_ELEMENT;
        const Bk = new Uint8Array(Fk);
        for (; --Fk >= 0;) {
          let Rk = kk[Fk];
          Rk < 0 ? Rk = 0 : Rk > 1 && (Rk = 1), Bk[Fk] = 255 * Rk
        }
        kk = Bk
      }
      const ak = document.createElement("canvas");
      ak.width = Rk, ak.height = tk;
      const Xk = ak.getContext("2d");
      if (!Xk) return null;
      const bk = Xk.createImageData(Rk, tk);
      if (bk.data.set(kk), Xk.putImageData(bk, 0, 0), Bk) {
        const kk = document.createElement("canvas");
        kk.width = Rk, kk.height = tk;
        const Fk = kk.getContext("2d");
        return Fk ? (Fk.translate(0, tk), Fk.scale(1, -1), Fk.drawImage(ak, 0, 0), kk.toDataURL("image/png")) : null
      }
      return ak.toDataURL("image/png")
    }

    function yk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Rk = kk.getInternalTexture();
      if (!Rk) return null;
      const tk = kk._readPixelsSync(Fk, Bk);
      return tk ? ek(tk, kk.getSize(), Rk.invertY) : null
    }
    async function fk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Rk = kk.getInternalTexture();
      if (!Rk) return null;
      const tk = await kk.readPixels(Fk, Bk);
      return tk ? ek(tk, kk.getSize(), Rk.invertY) : null
    }
    var mk = Bk(39847),
      Wk = Bk(39414);
    let vk = (() => {
        var kk;
        let Fk, Bk, ek, vk, ik, Yk, Lk, Ok, Ek, Sk, Nk, Hk, uk, Mk = bk.e,
          gk = [],
          Uk = [],
          ck = [],
          Gk = [],
          Tk = [],
          rk = [],
          Dk = [],
          zk = [],
          Pk = [],
          hk = [],
          qk = [],
          Ck = [],
          Zk = [],
          pk = [],
          Kk = [],
          xk = [],
          jk = [],
          lk = [],
          nk = [],
          Ik = [],
          Qk = [],
          kF = [],
          FF = [],
          BF = [],
          RF = [];
        return kk = class extends Mk {
          static _CreateVideoTexture(Fk, Bk, Rk) {
            arguments.length > 5 && void 0 !== arguments[5] || kk.TRILINEAR_SAMPLINGMODE;
            throw (0, dk.i)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(kk) {
            this._isBlocking = kk
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(Fk, Bk, tk, Xk) {
            let bk, wk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : kk.TRILINEAR_SAMPLINGMODE,
              dk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Vk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              Jk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Ak = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              ek = arguments.length > 9 ? arguments[9] : void 0,
              yk = arguments.length > 10 ? arguments[10] : void 0,
              fk = arguments.length > 11 ? arguments[11] : void 0,
              Wk = arguments.length > 12 ? arguments[12] : void 0,
              vk = arguments.length > 13 ? arguments[13] : void 0;
            super(Bk), this.url = ((0, Rk.l)(this, gk), (0, Rk.l)(this, Uk, null)), this.uOffset = ((0, Rk.l)(this, ck), (0, Rk.l)(this, Gk, 0)), this.vOffset = ((0, Rk.l)(this, Tk), (0, Rk.l)(this, rk, 0)), this.uScale = ((0, Rk.l)(this, Dk), (0, Rk.l)(this, zk, 1)), this.vScale = ((0, Rk.l)(this, Pk), (0, Rk.l)(this, hk, 1)), this.uAng = ((0, Rk.l)(this, qk), (0, Rk.l)(this, Ck, 0)), this.vAng = ((0, Rk.l)(this, Zk), (0, Rk.l)(this, pk, 0)), this.wAng = ((0, Rk.l)(this, Kk), (0, Rk.l)(this, xk, 0)), this.uRotationCenter = ((0, Rk.l)(this, jk), (0, Rk.l)(this, lk, .5)), this.vRotationCenter = ((0, Rk.l)(this, nk), (0, Rk.l)(this, Ik, .5)), this.wRotationCenter = ((0, Rk.l)(this, Qk), (0, Rk.l)(this, kF, .5)), this.homogeneousRotationInUVTransform = ((0, Rk.l)(this, FF), (0, Rk.l)(this, BF, !1)), this.inspectableCustomProperties = ((0, Rk.l)(this, RF), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new ak.e, this._isBlocking = !0, this.name = Fk || "", this.url = Fk;
            let ik = !1,
              Yk = null,
              Lk = !0;
            "object" === typeof tk && null !== tk ? (bk = tk.noMipmap ?? !1, Xk = tk.invertY ?? !mk.c, wk = tk.samplingMode ?? kk.TRILINEAR_SAMPLINGMODE, dk = tk.onLoad ?? null, Vk = tk.onError ?? null, Jk = tk.buffer ?? null, Ak = tk.deleteBuffer ?? !1, ek = tk.format, yk = tk.mimeType, fk = tk.loaderOptions, Wk = tk.creationFlags, ik = tk.useSRGBBuffer ?? !1, Yk = tk.internalTexture ?? null, Lk = tk.gammaSpace ?? Lk, vk = tk.forcedExtension ?? vk) : bk = !!tk, this._gammaSpace = Lk, this._noMipmap = bk, this._invertY = void 0 === Xk ? !mk.c : Xk, this._initialSamplingMode = wk, this._buffer = Jk, this._deleteBuffer = Ak, this._mimeType = yk, this._loaderOptions = fk, this._creationFlags = Wk, this._useSRGBBuffer = ik, this._forcedExtension = vk, void 0 !== ek && (this._format = ek);
            const Ok = this.XN(),
              Ek = this._getEngine();
            if (!Ek) return;
            Ek.onBeforeTextureInitObservable.notifyObservers(this);
            const Sk = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), dk && dk(), !this.isBlocking && Ok && Ok.resetCachedMaterial()
              },
              Nk = (Fk, Bk) => {
                this._loadingError = !0, this._errorObject = {
                  message: Fk,
                  exception: Bk
                }, Vk && Vk(Fk, Bk), kk.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !Yk) return this._delayedOnLoad = Sk, void(this._delayedOnError = Nk);
            if (this._texture = Yk ?? this._getFromCache(this.url, bk, wk, this._invertY, ik, this.isCube), this._texture)
              if (this._texture.isReady) sk.e.SetImmediate((() => Sk()));
              else {
                const kk = this._texture.onLoadedObservable.add(Sk);
                this._texture.onErrorObservable.add((Fk => {
                  Nk(Fk.message, Fk.exception), this._texture?.onLoadedObservable.remove(kk)
                }))
              }
            else if (Ok && Ok.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = Sk, this._delayedOnError = Nk;
            else {
              try {
                this._texture = Ek.createTexture(this.url, bk, this._invertY, Ok, wk, Sk, Nk, this._buffer, void 0, this._format, this._forcedExtension, yk, fk, Wk, ik)
              } catch (Hk) {
                throw Nk("error loading", Hk), Hk
              }
              Ak && (this._buffer = null)
            }
          }
          updateURL(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Bk = arguments.length > 2 ? arguments[2] : void 0,
              Rk = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.XN().markAllMaterialsAsDirty(1, (kk => kk.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = kk), this.url = kk, this._buffer = Fk, this._forcedExtension = Rk, this.delayLoadState = 4;
            const tk = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              tk ? tk() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), Bk && Bk()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const kk = this.XN();
            if (!kk) return;
            let Fk = this.url;
            !Fk && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (Fk = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(Fk, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? sk.e.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = kk.ne().createTexture(Fk, this._noMipmap, this._invertY, kk, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(kk, Fk, Bk, Rk) {
            kk *= this._cachedUScale, Fk *= this._cachedVScale, kk -= this.uRotationCenter * this._cachedUScale, Fk -= this.vRotationCenter * this._cachedVScale, Bk -= this.wRotationCenter, Xk.s.TransformCoordinatesFromFloatsToRef(kk, Fk, Bk, this._rowGenerationMatrix, Rk), Rk.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, Rk.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, Rk.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * kk === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * kk, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = Xk.c.Zero(), this._rowGenerationMatrix = new Xk.c, this._t0 = Xk.s.Zero(), this._t1 = Xk.s.Zero(), this._t2 = Xk.s.Zero()), Xk.c.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (Xk.c.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, Xk.l.Matrix[0]), Xk.c.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, Xk.l.Matrix[1]), Xk.c.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, Xk.l.Matrix[2]), Xk.c.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, Xk.l.Matrix[3]), Xk.l.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Xk.l.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Xk.l.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Xk.l.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.wRk(this._t0), this._t2.wRk(this._t0), Xk.c.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const Fk = this.XN();
            if (!Fk) return this._cachedTextureMatrix;
            const Bk = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && Bk !== this._cachedIdentity3x2 && Fk.markAllMaterialsAsDirty(1, (kk => kk.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const Fk = this.XN();
            if (!Fk) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== kk.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === Fk.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = Xk.c.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = Xk.c.Zero());
            const Bk = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case kk.PLANAR_MODE:
                Xk.c.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case kk.PROJECTION_MODE: {
                Xk.c.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const kk = Fk.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = kk.updateFlag, kk.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                Xk.c.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return Bk && Fk.markAllMaterialsAsDirty(1, (kk => kk.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const Fk = {
              noMipmap: this._noMipmap,
              invertY: this._invertY,
              samplingMode: this.samplingMode,
              onLoad: void 0,
              onError: void 0,
              buffer: this._texture ? this._texture._buffer : void 0,
              deleteBuffer: this._deleteBuffer,
              format: this.textureFormat,
              mimeType: this.mimeType,
              loaderOptions: this._loaderOptions,
              creationFlags: this._creationFlags,
              useSRGBBuffer: this._useSRGBBuffer
            };
            return Wk.c.Clone((() => new kk(this._texture ? this._texture.url : null, this.XN(), Fk)), this)
          }
          serialize() {
            const Fk = this.name;
            kk.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const Bk = super.serialize(kk._SerializeInternalTextureUniqueId);
            if (!Bk) return null;
            if (kk.SerializeBuffers || kk.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) Bk.base64String = this._buffer, Bk.name = Bk.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const kk = this.mimeType || "image/png";
              Bk.base64String = `data:${kk};base64,${(0,Ak.f)(this._buffer)}`
            } else(kk.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (Bk.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? yk(this) : fk(this));
            return Bk.invertY = this._invertY, Bk.samplingMode = this.samplingMode, Bk._creationFlags = this._creationFlags, Bk._useSRGBBuffer = this._useSRGBBuffer, kk._SerializeInternalTextureUniqueId && (Bk.internalTextureUniqueId = this._texture?.uniqueId), Bk.internalTextureLabel = this._texture?.label, Bk.noMipmap = this._noMipmap, this.name = Fk, Bk
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(Fk, Bk, Rk) {
            if (Fk.customType) {
              const kk = Vk.c.Instantiate(Fk.customType).Parse(Fk, Bk, Rk);
              return Fk.samplingMode && kk.updateSamplingMode && kk._samplingMode && kk._samplingMode !== Fk.samplingMode && kk.updateSamplingMode(Fk.samplingMode), kk
            }
            if (Fk.isCube && !Fk.isRenderTarget) return kk._CubeTextureParser(Fk, Bk, Rk);
            const tk = void 0 !== Fk.internalTextureUniqueId;
            if (!Fk.name && !Fk.isRenderTarget && !tk) return null;
            let ak;
            if (tk) {
              const kk = Bk.ne().getLoadedTexturesCache();
              for (const Bk of kk)
                if (Bk.uniqueId === Fk.internalTextureUniqueId) {
                  ak = Bk;
                  break
                }
            }
            const Xk = kk => {
              if (kk && kk._texture && (kk._texture._cachedWrapU = null, kk._texture._cachedWrapV = null, kk._texture._cachedWrapR = null), Fk.samplingMode) {
                const Bk = Fk.samplingMode;
                kk && kk.samplingMode !== Bk && kk.updateSamplingMode(Bk)
              }
              if (kk && Fk.animations)
                for (let Bk = 0; Bk < Fk.animations.length; Bk++) {
                  const Rk = Fk.animations[Bk],
                    tk = (0, wk.c)("BABYLON.Animation");
                  tk && kk.animations.push(tk.Parse(Rk))
                }
              kk && kk._texture && (tk && !ak && kk._texture._setUniqueId(Fk.internalTextureUniqueId), kk._texture.label = Fk.internalTextureLabel)
            };
            return Wk.c.Parse((() => {
              let tk = !0;
              if (Fk.noMipmap && (tk = !1), Fk.mirrorPlane) {
                const Rk = kk._CreateMirror(Fk.name, Fk.renderTargetSize, Bk, tk);
                return Rk._waitingRenderList = Fk.renderList, Rk.mirrorPlane = Jk.c.FromArray(Fk.mirrorPlane), Xk(Rk), Rk
              }
              if (Fk.isRenderTarget && !Fk.base64String) {
                let Rk = null;
                if (Fk.isCube) {
                  if (Bk.reflectionProbes)
                    for (let kk = 0; kk < Bk.reflectionProbes.length; kk++) {
                      const Rk = Bk.reflectionProbes[kk];
                      if (Rk.name === Fk.name) return Rk.cubeTexture
                    }
                } else Rk = kk._CreateRenderTargetTexture(Fk.name, Fk.renderTargetSize, Bk, tk, Fk._creationFlags ?? 0), Rk._waitingRenderList = Fk.renderList;
                return Xk(Rk), Rk
              }
              if (Fk.isVideo) {
                const ak = kk._CreateVideoTexture(Rk + (Fk.url || Fk.name), Rk + (Fk.src || Fk.url), Bk, tk, Fk.invertY, Fk.samplingMode, Fk.settings || {});
                return Xk(ak), ak
              } {
                let bk;
                if ("string" === typeof Fk.base64String && Fk.base64String && !ak) {
                  const Rk = {
                      buffer: Fk.base64String,
                      noMipmap: !tk,
                      invertY: Fk.invertY,
                      samplingMode: Fk.samplingMode,
                      useSRGBBuffer: Fk._useSRGBBuffer ?? !1,
                      creationFlags: Fk._creationFlags ?? 0,
                      onLoad: () => {
                        Xk(bk)
                      }
                    },
                    ak = Fk.base64String,
                    wk = ak.startsWith("data:") ? ak.substring(5) : ak;
                  bk = kk.CreateFromBase64String("", wk, Bk, Rk), bk.name = Fk.name
                } else {
                  let wk;
                  wk = Fk.name && (Fk.name.indexOf("://") > 0 || Fk.name.startsWith("data:")) ? Fk.name : Rk + Fk.name, Fk.url && (Fk.url.startsWith("data:") || kk.UseSerializedUrlIfAny) && (wk = Fk.url);
                  const dk = {
                    noMipmap: !tk,
                    invertY: Fk.invertY,
                    samplingMode: Fk.samplingMode,
                    useSRGBBuffer: Fk._useSRGBBuffer ?? !1,
                    creationFlags: Fk._creationFlags ?? 0,
                    onLoad: () => {
                      Xk(bk)
                    },
                    internalTexture: ak
                  };
                  bk = new kk(wk, Bk, dk)
                }
                return bk
              }
            }), Fk, Bk)
          }
          static CreateFromBase64String(Fk, Bk, Rk, tk, ak) {
            let Xk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : kk.TRILINEAR_SAMPLINGMODE;
            return new kk("data:" + Bk, Rk, tk, ak, Xk, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, Fk, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(Fk, Bk, Rk) {
            let tk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              ak = arguments.length > 4 ? arguments[4] : void 0,
              Xk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              bk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : kk.TRILINEAR_SAMPLINGMODE,
              wk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              dk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              sk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              Vk = arguments.length > 10 ? arguments[10] : void 0,
              Jk = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== Fk.substring(0, 5) && (Fk = "data:" + Fk), new kk(Fk, Rk, ak, Xk, bk, wk, dk, Bk, tk, sk, void 0, void 0, Vk, Jk)
          }
        }, (() => {
          const ak = "function" === typeof Symbol && Symbol.metadata ? Object.create(Mk[Symbol.metadata] ?? null) : void 0;
          Fk = [(0, tk.M)()], Bk = [(0, tk.M)()], ek = [(0, tk.M)()], vk = [(0, tk.M)()], ik = [(0, tk.M)()], Yk = [(0, tk.M)()], Lk = [(0, tk.M)()], Ok = [(0, tk.M)()], Ek = [(0, tk.M)()], Sk = [(0, tk.M)()], Nk = [(0, tk.M)()], Hk = [(0, tk.M)()], uk = [(0, tk.M)()], (0, Rk.j)(kk, null, uk, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: kk => "isBlocking" in kk,
              get: kk => kk.isBlocking
            },
            metadata: ak
          }, null, gk), (0, Rk.j)(null, null, Fk, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: kk => "url" in kk,
              get: kk => kk.url,
              set: (kk, Fk) => {
                kk.url = Fk
              }
            },
            metadata: ak
          }, Uk, ck), (0, Rk.j)(null, null, Bk, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: kk => "uOffset" in kk,
              get: kk => kk.uOffset,
              set: (kk, Fk) => {
                kk.uOffset = Fk
              }
            },
            metadata: ak
          }, Gk, Tk), (0, Rk.j)(null, null, ek, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: kk => "vOffset" in kk,
              get: kk => kk.vOffset,
              set: (kk, Fk) => {
                kk.vOffset = Fk
              }
            },
            metadata: ak
          }, rk, Dk), (0, Rk.j)(null, null, vk, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: kk => "uScale" in kk,
              get: kk => kk.uScale,
              set: (kk, Fk) => {
                kk.uScale = Fk
              }
            },
            metadata: ak
          }, zk, Pk), (0, Rk.j)(null, null, ik, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: kk => "vScale" in kk,
              get: kk => kk.vScale,
              set: (kk, Fk) => {
                kk.vScale = Fk
              }
            },
            metadata: ak
          }, hk, qk), (0, Rk.j)(null, null, Yk, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: kk => "uAng" in kk,
              get: kk => kk.uAng,
              set: (kk, Fk) => {
                kk.uAng = Fk
              }
            },
            metadata: ak
          }, Ck, Zk), (0, Rk.j)(null, null, Lk, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: kk => "vAng" in kk,
              get: kk => kk.vAng,
              set: (kk, Fk) => {
                kk.vAng = Fk
              }
            },
            metadata: ak
          }, pk, Kk), (0, Rk.j)(null, null, Ok, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: kk => "wAng" in kk,
              get: kk => kk.wAng,
              set: (kk, Fk) => {
                kk.wAng = Fk
              }
            },
            metadata: ak
          }, xk, jk), (0, Rk.j)(null, null, Ek, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: kk => "uRotationCenter" in kk,
              get: kk => kk.uRotationCenter,
              set: (kk, Fk) => {
                kk.uRotationCenter = Fk
              }
            },
            metadata: ak
          }, lk, nk), (0, Rk.j)(null, null, Sk, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: kk => "vRotationCenter" in kk,
              get: kk => kk.vRotationCenter,
              set: (kk, Fk) => {
                kk.vRotationCenter = Fk
              }
            },
            metadata: ak
          }, Ik, Qk), (0, Rk.j)(null, null, Nk, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: kk => "wRotationCenter" in kk,
              get: kk => kk.wRotationCenter,
              set: (kk, Fk) => {
                kk.wRotationCenter = Fk
              }
            },
            metadata: ak
          }, kF, FF), (0, Rk.j)(null, null, Hk, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: kk => "homogeneousRotationInUVTransform" in kk,
              get: kk => kk.homogeneousRotationInUVTransform,
              set: (kk, Fk) => {
                kk.homogeneousRotationInUVTransform = Fk
              }
            },
            metadata: ak
          }, BF, RF), ak && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ak
          })
        })(), kk.SerializeBuffers = !0, kk.ForceSerializeBuffers = !1, kk.OnTextureLoadErrorObservable = new ak.e, kk._SerializeInternalTextureUniqueId = !1, kk._CubeTextureParser = (kk, Fk, Bk) => {
          throw (0, dk.i)("CubeTexture")
        }, kk._CreateMirror = (kk, Fk, Bk, Rk) => {
          throw (0, dk.i)("MirrorTexture")
        }, kk._CreateRenderTargetTexture = (kk, Fk, Bk, Rk, tk) => {
          throw (0, dk.i)("RenderTargetTexture")
        }, kk.NEAREST_SAMPLINGMODE = 1, kk.NEAREST_NEAREST_MIPLINEAR = 8, kk.BILINEAR_SAMPLINGMODE = 2, kk.LINEAR_LINEAR_MIPNEAREST = 11, kk.TRILINEAR_SAMPLINGMODE = 3, kk.LINEAR_LINEAR_MIPLINEAR = 3, kk.NEAREST_NEAREST_MIPNEAREST = 4, kk.NEAREST_LINEAR_MIPNEAREST = 5, kk.NEAREST_LINEAR_MIPLINEAR = 6, kk.NEAREST_LINEAR = 7, kk.NEAREST_NEAREST = 1, kk.LINEAR_NEAREST_MIPNEAREST = 9, kk.LINEAR_NEAREST_MIPLINEAR = 10, kk.LINEAR_LINEAR = 2, kk.LINEAR_NEAREST = 12, kk.EXPLICIT_MODE = 0, kk.SPHERICAL_MODE = 1, kk.PLANAR_MODE = 2, kk.CUBIC_MODE = 3, kk.PROJECTION_MODE = 4, kk.SKYBOX_MODE = 5, kk.INVCUBIC_MODE = 6, kk.EQUIRECTANGULAR_MODE = 7, kk.FIXED_EQUIRECTANGULAR_MODE = 8, kk.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, kk.CLAMP_ADDRESSMODE = 0, kk.WRAP_ADDRESSMODE = 1, kk.MIRROR_ADDRESSMODE = 2, kk.UseSerializedUrlIfAny = !1, kk
      })(),
      ik = !1;

    function Yk() {
      ik || (ik = !0, (0, wk.d)("BABYLON.Texture", vk), Wk.c._TextureParser = vk.Parse)
    }
  },
  39408: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk
    });
    class Rk {
      constructor(kk, Fk) {
        this.width = kk, this.height = Fk
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let kk = 0 | this.width;
        return kk = 397 * kk ^ this.height, kk
      }
      sBk(kk) {
        this.width = kk.width, this.height = kk.height
      }
      E1(kk, Fk) {
        return this.width = kk, this.height = Fk, this
      }
      set(kk, Fk) {
        return this.E1(kk, Fk)
      }
      multiplyByFloats(kk, Fk) {
        return new Rk(this.width * kk, this.height * Fk)
      }
      clone() {
        return new Rk(this.width, this.height)
      }
      equals(kk) {
        return !!kk && (this.width === kk.width && this.height === kk.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new Rk(0, 0)
      }
      add(kk) {
        return new Rk(this.width + kk.width, this.height + kk.height)
      }
      subtract(kk) {
        return new Rk(this.width - kk.width, this.height - kk.height)
      }
      scale(kk) {
        return new Rk(this.width * kk, this.height * kk)
      }
      static Lerp(kk, Fk, Bk) {
        const tk = kk.width + (Fk.width - kk.width) * Bk,
          ak = kk.height + (Fk.height - kk.height) * Bk;
        return new Rk(tk, ak)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);