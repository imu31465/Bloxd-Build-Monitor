export const id = 252;
export const ids = [252];
export const modules = {
  40014: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Dk
    });
    let Dk = !1
  },
  39564: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Uk
    });
    var Dk = ik(39566),
      fk = ik(39570),
      Sk = ik(36726),
      bk = ik(36698),
      rk = ik(36722),
      Pk = ik(37497),
      mk = ik(39583);
    class Mk {
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
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = mk.c.Zero(), this._cachedBaseSize = mk.c.Zero(), this._initialSamplingMode = 2, this._texture = Mk._IsRenderTargetWrapper(kk) ? kk.texture : kk, this._texture && (this._engine = this._texture.JU(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(kk, this._texture, this._texture.generateMipMaps && ek)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var Kk, xk = ik(39585),
      nk = ik(39447);
    let Uk = (() => {
      var kk;
      let ek, ik, mk, Kk, nk, Uk, Hk, wk, lk, pk, yk, Yk, Lk, Ck, Ak, jk, sk, dk, Vk, Fk, uk, qk, Ik, zk, Qk, vk = Mk,
        Ek = [],
        hk = [],
        ak = [],
        Wk = [],
        tk = [],
        Xk = [],
        Bk = [],
        ck = [],
        Tk = [],
        Zk = [],
        Ok = [],
        gk = [],
        Gk = [],
        Nk = [],
        Rk = [],
        Jk = [],
        ke = [],
        ee = [],
        ie = [],
        De = [],
        fe = [],
        Se = [],
        be = [],
        re = [],
        Pe = [],
        me = [],
        Me = [],
        Ke = [],
        xe = [],
        ne = [],
        Ue = [];
      return kk = class extends vk {
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
          this.XF()?.markAllMaterialsAsDirty(1, (kk => kk.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(kk) {
          kk !== this.isRGBD && (this._texture && (this._texture._isRGBD = kk), this.XF()?.markAllMaterialsAsDirty(1, (kk => kk.hasTexture(this))))
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
          return this._uid || (this._uid = (0, Pk.b)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(kk) {
          this._onDisposeObserver && this.ZF.remove(this._onDisposeObserver), this._onDisposeObserver = this.ZF.add(kk)
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
        constructor(ek) {
          let ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, Dk.e)(this, Ek), (0, Dk.e)(this, hk, void 0)), this.name = ((0, Dk.e)(this, ak), (0, Dk.e)(this, Wk, void 0)), this.displayName = ((0, Dk.e)(this, tk), (0, Dk.e)(this, Xk, void 0)), this.metadata = ((0, Dk.e)(this, Bk), (0, Dk.e)(this, ck, null)), this._internalMetadata = (0, Dk.e)(this, Tk), this.reservedDataStore = null, this._hasAlpha = (0, Dk.e)(this, Zk, !1), this._getAlphaFromRGB = ((0, Dk.e)(this, Ok), (0, Dk.e)(this, gk, !1)), this.level = ((0, Dk.e)(this, Gk), (0, Dk.e)(this, Nk, 1)), this._coordinatesIndex = ((0, Dk.e)(this, Rk), (0, Dk.e)(this, Jk, 0)), this.optimizeUVAllocation = ((0, Dk.e)(this, ke), (0, Dk.e)(this, ee, !0)), this._coordinatesMode = ((0, Dk.e)(this, ie), (0, Dk.e)(this, De, 0)), this.wrapR = ((0, Dk.e)(this, fe), (0, Dk.e)(this, Se, 1)), this.anisotropicFilteringLevel = ((0, Dk.e)(this, be), (0, Dk.e)(this, re, kk.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, Dk.e)(this, Pe), !1), this._gammaSpace = !0, this.invertZ = (0, Dk.e)(this, me, !1), this.lodLevelInAlpha = ((0, Dk.e)(this, Me), (0, Dk.e)(this, Ke, !1)), this._dominantDirection = ((0, Dk.e)(this, xe), null), this.isRenderTarget = (0, Dk.e)(this, ne, !1), this._prefiltered = ((0, Dk.e)(this, Ue), !1), this._forceSerialize = !1, this.animations = [], this.ZF = new Sk.c, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, ek ? kk._IsScene(ek) ? this._scene = ek : this._engine = ek : this._scene = rk.e.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.JU()), this._texture = ik, this._uid = null
        }
        XF() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return bk.b.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return bk.b.IdentityReadOnly
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
        _getFromCache(kk, ek, ik, Dk, fk, Sk) {
          const bk = this._getEngine();
          if (!bk) return null;
          const rk = bk._getUseSRGBBuffer(!!fk, ek),
            Pk = bk.getLoadedTexturesCache();
          for (let mk = 0; mk < Pk.length; mk++) {
            const bk = Pk[mk];
            if ((void 0 === fk || rk === bk._useSRGBBuffer) && (void 0 === Dk || Dk === bk.invertY) && bk.url === kk && bk.generateMipMaps === !ek && (!ik || ik === bk.samplingMode) && (void 0 === Sk || Sk === bk.isCube)) return bk.incrementReferences(), bk
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
          const kk = this.XF();
          kk && kk.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Dk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            fk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            bk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            rk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            Pk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const mk = this._getEngine();
          if (!mk) return null;
          const Mk = this.getSize();
          let Kk = Mk.width,
            xk = Mk.height;
          0 !== ek && (Kk /= Math.pow(2, ek), xk /= Math.pow(2, ek), Kk = Math.round(Kk), xk = Math.round(xk)), rk = Math.min(Kk, rk), Pk = Math.min(xk, Pk);
          try {
            return this._texture.isCube || this._texture.is2DArray ? mk._readTexturePixels(this._texture, rk, Pk, kk, ek, ik, Dk, fk, Sk, bk) : mk._readTexturePixels(this._texture, rk, Pk, -1, ek, ik, Dk, fk, Sk, bk)
          } catch (nk) {
            return null
          }
        }
        _readPixelsSync() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Dk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            fk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const Sk = this.getSize();
          let bk = Sk.width,
            rk = Sk.height;
          const Pk = this._getEngine();
          if (!Pk) return null;
          0 != ek && (bk /= Math.pow(2, ek), rk /= Math.pow(2, ek), bk = Math.round(bk), rk = Math.round(rk));
          try {
            return this._texture.isCube ? Pk._readTexturePixelsSync(this._texture, bk, rk, kk, ek, ik, Dk, fk) : Pk._readTexturePixelsSync(this._texture, bk, rk, -1, ek, ik, Dk, fk)
          } catch (mk) {
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
          this.ZF.notifyObservers(this), this.ZF.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !kk) return null;
          const ek = xk.b.Serialize(this);
          return xk.b.AppendSerializedAnimations(this, ek), ek
        }
        static WhenAllReady(kk, ek) {
          let ik = kk.length;
          if (0 !== ik)
            for (let Dk = 0; Dk < kk.length; Dk++) {
              const fk = kk[Dk];
              if (fk.isReady()) 0 === --ik && ek();
              else {
                const kk = fk.onLoadObservable;
                kk ? kk.addOnce((() => {
                  0 === --ik && ek()
                })) : 0 === --ik && ek()
              }
            } else ek()
        }
        static _IsScene(kk) {
          return "Scene" === kk.getClassName()
        }
      }, (() => {
        const Sk = "function" === typeof Symbol && Symbol.metadata ? Object.create(vk[Symbol.metadata] ?? null) : void 0;
        ek = [(0, fk.I)()], ik = [(0, fk.I)()], mk = [(0, fk.I)()], Kk = [(0, fk.I)()], nk = [(0, fk.I)("hasAlpha")], Uk = [(0, fk.I)("getAlphaFromRGB")], Hk = [(0, fk.I)()], wk = [(0, fk.I)("coordinatesIndex")], lk = [(0, fk.I)()], pk = [(0, fk.I)("coordinatesMode")], yk = [(0, fk.I)()], Yk = [(0, fk.I)()], Lk = [(0, fk.I)()], Ck = [(0, fk.I)()], Ak = [(0, fk.I)()], jk = [(0, fk.I)()], sk = [(0, fk.I)()], dk = [(0, fk.I)()], Vk = [(0, fk.I)()], Fk = [(0, fk.I)()], uk = [(0, fk.I)()], qk = [(0, fk.I)()], Ik = [(0, fk.I)()], zk = [(0, fk.z)()], Qk = [(0, fk.I)()], (0, Dk.d)(kk, null, yk, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: kk => "wrapU" in kk,
            get: kk => kk.wrapU
          },
          metadata: Sk
        }, null, Ek), (0, Dk.d)(kk, null, Yk, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: kk => "wrapV" in kk,
            get: kk => kk.wrapV
          },
          metadata: Sk
        }, null, Ek), (0, Dk.d)(kk, null, Ak, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: kk => "isCube" in kk,
            get: kk => kk.isCube
          },
          metadata: Sk
        }, null, Ek), (0, Dk.d)(kk, null, jk, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: kk => "is3D" in kk,
            get: kk => kk.is3D
          },
          metadata: Sk
        }, null, Ek), (0, Dk.d)(kk, null, sk, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: kk => "is2DArray" in kk,
            get: kk => kk.is2DArray
          },
          metadata: Sk
        }, null, Ek), (0, Dk.d)(kk, null, dk, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: kk => "gammaSpace" in kk,
            get: kk => kk.gammaSpace
          },
          metadata: Sk
        }, null, Ek), (0, Dk.d)(kk, null, uk, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: kk => "lodGenerationOffset" in kk,
            get: kk => kk.lodGenerationOffset
          },
          metadata: Sk
        }, null, Ek), (0, Dk.d)(kk, null, qk, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: kk => "lodGenerationScale" in kk,
            get: kk => kk.lodGenerationScale
          },
          metadata: Sk
        }, null, Ek), (0, Dk.d)(kk, null, Ik, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: kk => "linearSpecularLOD" in kk,
            get: kk => kk.linearSpecularLOD
          },
          metadata: Sk
        }, null, Ek), (0, Dk.d)(kk, null, zk, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "irradianceTexture" in kk,
            get: kk => kk.irradianceTexture
          },
          metadata: Sk
        }, null, Ek), (0, Dk.d)(null, null, ek, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: kk => "uniqueId" in kk,
            get: kk => kk.uniqueId,
            set: (kk, ek) => {
              kk.uniqueId = ek
            }
          },
          metadata: Sk
        }, hk, ak), (0, Dk.d)(null, null, ik, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: kk => "name" in kk,
            get: kk => kk.name,
            set: (kk, ek) => {
              kk.name = ek
            }
          },
          metadata: Sk
        }, Wk, tk), (0, Dk.d)(null, null, mk, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: kk => "displayName" in kk,
            get: kk => kk.displayName,
            set: (kk, ek) => {
              kk.displayName = ek
            }
          },
          metadata: Sk
        }, Xk, Bk), (0, Dk.d)(null, null, Kk, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: kk => "metadata" in kk,
            get: kk => kk.metadata,
            set: (kk, ek) => {
              kk.metadata = ek
            }
          },
          metadata: Sk
        }, ck, Tk), (0, Dk.d)(null, null, nk, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: kk => "_hasAlpha" in kk,
            get: kk => kk._hasAlpha,
            set: (kk, ek) => {
              kk._hasAlpha = ek
            }
          },
          metadata: Sk
        }, Zk, Ok), (0, Dk.d)(null, null, Uk, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: kk => "_getAlphaFromRGB" in kk,
            get: kk => kk._getAlphaFromRGB,
            set: (kk, ek) => {
              kk._getAlphaFromRGB = ek
            }
          },
          metadata: Sk
        }, gk, Gk), (0, Dk.d)(null, null, Hk, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: kk => "level" in kk,
            get: kk => kk.level,
            set: (kk, ek) => {
              kk.level = ek
            }
          },
          metadata: Sk
        }, Nk, Rk), (0, Dk.d)(null, null, wk, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: kk => "_coordinatesIndex" in kk,
            get: kk => kk._coordinatesIndex,
            set: (kk, ek) => {
              kk._coordinatesIndex = ek
            }
          },
          metadata: Sk
        }, Jk, ke), (0, Dk.d)(null, null, lk, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: kk => "optimizeUVAllocation" in kk,
            get: kk => kk.optimizeUVAllocation,
            set: (kk, ek) => {
              kk.optimizeUVAllocation = ek
            }
          },
          metadata: Sk
        }, ee, ie), (0, Dk.d)(null, null, pk, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: kk => "_coordinatesMode" in kk,
            get: kk => kk._coordinatesMode,
            set: (kk, ek) => {
              kk._coordinatesMode = ek
            }
          },
          metadata: Sk
        }, De, fe), (0, Dk.d)(null, null, Lk, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: kk => "wrapR" in kk,
            get: kk => kk.wrapR,
            set: (kk, ek) => {
              kk.wrapR = ek
            }
          },
          metadata: Sk
        }, Se, be), (0, Dk.d)(null, null, Ck, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: kk => "anisotropicFilteringLevel" in kk,
            get: kk => kk.anisotropicFilteringLevel,
            set: (kk, ek) => {
              kk.anisotropicFilteringLevel = ek
            }
          },
          metadata: Sk
        }, re, Pe), (0, Dk.d)(null, null, Vk, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: kk => "invertZ" in kk,
            get: kk => kk.invertZ,
            set: (kk, ek) => {
              kk.invertZ = ek
            }
          },
          metadata: Sk
        }, me, Me), (0, Dk.d)(null, null, Fk, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: kk => "lodLevelInAlpha" in kk,
            get: kk => kk.lodLevelInAlpha,
            set: (kk, ek) => {
              kk.lodLevelInAlpha = ek
            }
          },
          metadata: Sk
        }, Ke, xe), (0, Dk.d)(null, null, Qk, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: kk => "isRenderTarget" in kk,
            get: kk => kk.isRenderTarget,
            set: (kk, ek) => {
              kk.isRenderTarget = ek
            }
          },
          metadata: Sk
        }, ne, Ue), Sk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Sk
        })
      })(), kk.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, kk
    })();
    (Kk = Uk.prototype).forceSphericalPolynomialsRecompute ?? (Kk.forceSphericalPolynomialsRecompute = (0, nk.i)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(Uk.prototype, "sphericalPolynomial") || Object.defineProperty(Uk.prototype, "sphericalPolynomial", (0, nk.h)("BaseTexture", "sphericalPolynomial"))
  },
  40053: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Lk,
      f: () => yk
    });
    var Dk = ik(39566),
      fk = ik(39570),
      Sk = ik(36726),
      bk = ik(36698),
      rk = ik(39564),
      Pk = ik(36734),
      mk = ik(39447),
      Mk = ik(39458),
      Kk = ik(39666),
      xk = ik(37372),
      nk = ik(39620);

    function Uk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Dk = ek.width,
        fk = ek.height;
      if (kk instanceof Float32Array) {
        let ek = kk.byteLength / kk.BYTES_PER_ELEMENT;
        const ik = new Uint8Array(ek);
        for (; --ek >= 0;) {
          let Dk = kk[ek];
          Dk < 0 ? Dk = 0 : Dk > 1 && (Dk = 1), ik[ek] = 255 * Dk
        }
        kk = ik
      }
      const Sk = document.createElement("canvas");
      Sk.width = Dk, Sk.height = fk;
      const bk = Sk.getContext("2d");
      if (!bk) return null;
      const rk = bk.createImageData(Dk, fk);
      if (rk.data.set(kk), bk.putImageData(rk, 0, 0), ik) {
        const kk = document.createElement("canvas");
        kk.width = Dk, kk.height = fk;
        const ek = kk.getContext("2d");
        return ek ? (ek.translate(0, fk), ek.scale(1, -1), ek.drawImage(Sk, 0, 0), kk.toDataURL("image/png")) : null
      }
      return Sk.toDataURL("image/png")
    }

    function Hk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Dk = kk.getInternalTexture();
      if (!Dk) return null;
      const fk = kk._readPixelsSync(ek, ik);
      return fk ? Uk(fk, kk.getSize(), Dk.invertY) : null
    }
    async function wk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Dk = kk.getInternalTexture();
      if (!Dk) return null;
      const fk = await kk.readPixels(ek, ik);
      return fk ? Uk(fk, kk.getSize(), Dk.invertY) : null
    }
    var lk = ik(40014),
      pk = ik(39585);
    let yk = (() => {
        var kk;
        let ek, ik, Uk, yk, Yk, Lk, Ck, Ak, jk, sk, dk, Vk, Fk, uk = rk.b,
          qk = [],
          Ik = [],
          zk = [],
          Qk = [],
          vk = [],
          Ek = [],
          hk = [],
          ak = [],
          Wk = [],
          tk = [],
          Xk = [],
          Bk = [],
          ck = [],
          Tk = [],
          Zk = [],
          Ok = [],
          gk = [],
          Gk = [],
          Nk = [],
          Rk = [],
          Jk = [],
          ke = [],
          ee = [],
          ie = [],
          De = [];
        return kk = class extends uk {
          static _CreateVideoTexture(ek, ik, Dk) {
            arguments.length > 5 && void 0 !== arguments[5] || kk.TRILINEAR_SAMPLINGMODE;
            throw (0, mk.k)("VideoTexture")
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
          constructor(ek, ik, fk, bk) {
            let rk, Pk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : kk.TRILINEAR_SAMPLINGMODE,
              mk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Kk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              xk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              nk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              Uk = arguments.length > 9 ? arguments[9] : void 0,
              Hk = arguments.length > 10 ? arguments[10] : void 0,
              wk = arguments.length > 11 ? arguments[11] : void 0,
              pk = arguments.length > 12 ? arguments[12] : void 0,
              yk = arguments.length > 13 ? arguments[13] : void 0;
            super(ik), this.url = ((0, Dk.e)(this, qk), (0, Dk.e)(this, Ik, null)), this.uOffset = ((0, Dk.e)(this, zk), (0, Dk.e)(this, Qk, 0)), this.vOffset = ((0, Dk.e)(this, vk), (0, Dk.e)(this, Ek, 0)), this.uScale = ((0, Dk.e)(this, hk), (0, Dk.e)(this, ak, 1)), this.vScale = ((0, Dk.e)(this, Wk), (0, Dk.e)(this, tk, 1)), this.uAng = ((0, Dk.e)(this, Xk), (0, Dk.e)(this, Bk, 0)), this.vAng = ((0, Dk.e)(this, ck), (0, Dk.e)(this, Tk, 0)), this.wAng = ((0, Dk.e)(this, Zk), (0, Dk.e)(this, Ok, 0)), this.uRotationCenter = ((0, Dk.e)(this, gk), (0, Dk.e)(this, Gk, .5)), this.vRotationCenter = ((0, Dk.e)(this, Nk), (0, Dk.e)(this, Rk, .5)), this.wRotationCenter = ((0, Dk.e)(this, Jk), (0, Dk.e)(this, ke, .5)), this.homogeneousRotationInUVTransform = ((0, Dk.e)(this, ee), (0, Dk.e)(this, ie, !1)), this.inspectableCustomProperties = ((0, Dk.e)(this, De), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new Sk.c, this._isBlocking = !0, this.name = ek || "", this.url = ek;
            let Yk = !1,
              Lk = null,
              Ck = !0;
            "object" === typeof fk && null !== fk ? (rk = fk.noMipmap ?? !1, bk = fk.invertY ?? !lk.e, Pk = fk.samplingMode ?? kk.TRILINEAR_SAMPLINGMODE, mk = fk.onLoad ?? null, Kk = fk.onError ?? null, xk = fk.buffer ?? null, nk = fk.deleteBuffer ?? !1, Uk = fk.format, Hk = fk.mimeType, wk = fk.loaderOptions, pk = fk.creationFlags, Yk = fk.useSRGBBuffer ?? !1, Lk = fk.internalTexture ?? null, Ck = fk.gammaSpace ?? Ck, yk = fk.forcedExtension ?? yk) : rk = !!fk, this._gammaSpace = Ck, this._noMipmap = rk, this._invertY = void 0 === bk ? !lk.e : bk, this._initialSamplingMode = Pk, this._buffer = xk, this._deleteBuffer = nk, this._mimeType = Hk, this._loaderOptions = wk, this._creationFlags = pk, this._useSRGBBuffer = Yk, this._forcedExtension = yk, void 0 !== Uk && (this._format = Uk);
            const Ak = this.XF(),
              jk = this._getEngine();
            if (!jk) return;
            jk.onBeforeTextureInitObservable.notifyObservers(this);
            const sk = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), mk && mk(), !this.isBlocking && Ak && Ak.resetCachedMaterial()
              },
              dk = (ek, ik) => {
                this._loadingError = !0, this._errorObject = {
                  message: ek,
                  exception: ik
                }, Kk && Kk(ek, ik), kk.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !Lk) return this._delayedOnLoad = sk, void(this._delayedOnError = dk);
            if (this._texture = Lk ?? this._getFromCache(this.url, rk, Pk, this._invertY, Yk, this.isCube), this._texture)
              if (this._texture.isReady) Mk.e.SetImmediate((() => sk()));
              else {
                const kk = this._texture.onLoadedObservable.add(sk);
                this._texture.onErrorObservable.add((ek => {
                  dk(ek.message, ek.exception), this._texture?.onLoadedObservable.remove(kk)
                }))
              }
            else if (Ak && Ak.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = sk, this._delayedOnError = dk;
            else {
              try {
                this._texture = jk.createTexture(this.url, rk, this._invertY, Ak, Pk, sk, dk, this._buffer, void 0, this._format, this._forcedExtension, Hk, wk, pk, Yk)
              } catch (Vk) {
                throw dk("error loading", Vk), Vk
              }
              nk && (this._buffer = null)
            }
          }
          updateURL(kk) {
            let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              ik = arguments.length > 2 ? arguments[2] : void 0,
              Dk = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.XF().markAllMaterialsAsDirty(1, (kk => kk.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = kk), this.url = kk, this._buffer = ek, this._forcedExtension = Dk, this.delayLoadState = 4;
            const fk = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              fk ? fk() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), ik && ik()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const kk = this.XF();
            if (!kk) return;
            let ek = this.url;
            !ek && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (ek = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(ek, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? Mk.e.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = kk.JU().createTexture(ek, this._noMipmap, this._invertY, kk, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(kk, ek, ik, Dk) {
            kk *= this._cachedUScale, ek *= this._cachedVScale, kk -= this.uRotationCenter * this._cachedUScale, ek -= this.vRotationCenter * this._cachedVScale, ik -= this.wRotationCenter, bk.o.TransformCoordinatesFromFloatsToRef(kk, ek, ik, this._rowGenerationMatrix, Dk), Dk.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, Dk.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, Dk.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * kk === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * kk, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = bk.b.Zero(), this._rowGenerationMatrix = new bk.b, this._t0 = bk.o.Zero(), this._t1 = bk.o.Zero(), this._t2 = bk.o.Zero()), bk.b.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (bk.b.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, bk.j.Matrix[0]), bk.b.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, bk.j.Matrix[1]), bk.b.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, bk.j.Matrix[2]), bk.b.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, bk.j.Matrix[3]), bk.j.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(bk.j.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(bk.j.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(bk.j.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.KDk(this._t0), this._t2.KDk(this._t0), bk.b.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const ek = this.XF();
            if (!ek) return this._cachedTextureMatrix;
            const ik = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && ik !== this._cachedIdentity3x2 && ek.markAllMaterialsAsDirty(1, (kk => kk.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const ek = this.XF();
            if (!ek) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== kk.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === ek.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = bk.b.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = bk.b.Zero());
            const ik = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case kk.PLANAR_MODE:
                bk.b.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case kk.PROJECTION_MODE: {
                bk.b.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const kk = ek.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = kk.updateFlag, kk.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                bk.b.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return ik && ek.markAllMaterialsAsDirty(1, (kk => kk.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const ek = {
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
            return pk.b.Clone((() => new kk(this._texture ? this._texture.url : null, this.XF(), ek)), this)
          }
          serialize() {
            const ek = this.name;
            kk.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const ik = super.serialize(kk._SerializeInternalTextureUniqueId);
            if (!ik) return null;
            if (kk.SerializeBuffers || kk.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) ik.base64String = this._buffer, ik.name = ik.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const kk = this.mimeType || "image/png";
              ik.base64String = `data:${kk};base64,${(0,nk.i)(this._buffer)}`
            } else(kk.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (ik.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? Hk(this) : wk(this));
            return ik.invertY = this._invertY, ik.samplingMode = this.samplingMode, ik._creationFlags = this._creationFlags, ik._useSRGBBuffer = this._useSRGBBuffer, kk._SerializeInternalTextureUniqueId && (ik.internalTextureUniqueId = this._texture?.uniqueId), ik.internalTextureLabel = this._texture?.label, ik.noMipmap = this._noMipmap, this.name = ek, ik
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(ek, ik, Dk) {
            if (ek.customType) {
              const kk = Kk.d.Instantiate(ek.customType).Parse(ek, ik, Dk);
              return ek.samplingMode && kk.updateSamplingMode && kk._samplingMode && kk._samplingMode !== ek.samplingMode && kk.updateSamplingMode(ek.samplingMode), kk
            }
            if (ek.isCube && !ek.isRenderTarget) return kk._CubeTextureParser(ek, ik, Dk);
            const fk = void 0 !== ek.internalTextureUniqueId;
            if (!ek.name && !ek.isRenderTarget && !fk) return null;
            let Sk;
            if (fk) {
              const kk = ik.JU().getLoadedTexturesCache();
              for (const ik of kk)
                if (ik.uniqueId === ek.internalTextureUniqueId) {
                  Sk = ik;
                  break
                }
            }
            const bk = kk => {
              if (kk && kk._texture && (kk._texture._cachedWrapU = null, kk._texture._cachedWrapV = null, kk._texture._cachedWrapR = null), ek.samplingMode) {
                const ik = ek.samplingMode;
                kk && kk.samplingMode !== ik && kk.updateSamplingMode(ik)
              }
              if (kk && ek.animations)
                for (let ik = 0; ik < ek.animations.length; ik++) {
                  const Dk = ek.animations[ik],
                    fk = (0, Pk.d)("BABYLON.Animation");
                  fk && kk.animations.push(fk.Parse(Dk))
                }
              kk && kk._texture && (fk && !Sk && kk._texture._setUniqueId(ek.internalTextureUniqueId), kk._texture.label = ek.internalTextureLabel)
            };
            return pk.b.Parse((() => {
              let fk = !0;
              if (ek.noMipmap && (fk = !1), ek.mirrorPlane) {
                const Dk = kk._CreateMirror(ek.name, ek.renderTargetSize, ik, fk);
                return Dk._waitingRenderList = ek.renderList, Dk.mirrorPlane = xk.c.FromArray(ek.mirrorPlane), bk(Dk), Dk
              }
              if (ek.isRenderTarget && !ek.base64String) {
                let Dk = null;
                if (ek.isCube) {
                  if (ik.reflectionProbes)
                    for (let kk = 0; kk < ik.reflectionProbes.length; kk++) {
                      const Dk = ik.reflectionProbes[kk];
                      if (Dk.name === ek.name) return Dk.cubeTexture
                    }
                } else Dk = kk._CreateRenderTargetTexture(ek.name, ek.renderTargetSize, ik, fk, ek._creationFlags ?? 0), Dk._waitingRenderList = ek.renderList;
                return bk(Dk), Dk
              }
              if (ek.isVideo) {
                const Sk = kk._CreateVideoTexture(Dk + (ek.url || ek.name), Dk + (ek.src || ek.url), ik, fk, ek.invertY, ek.samplingMode, ek.settings || {});
                return bk(Sk), Sk
              } {
                let rk;
                if ("string" === typeof ek.base64String && ek.base64String && !Sk) {
                  const Dk = {
                      buffer: ek.base64String,
                      noMipmap: !fk,
                      invertY: ek.invertY,
                      samplingMode: ek.samplingMode,
                      useSRGBBuffer: ek._useSRGBBuffer ?? !1,
                      creationFlags: ek._creationFlags ?? 0,
                      onLoad: () => {
                        bk(rk)
                      }
                    },
                    Sk = ek.base64String,
                    Pk = Sk.startsWith("data:") ? Sk.substring(5) : Sk;
                  rk = kk.CreateFromBase64String("", Pk, ik, Dk), rk.name = ek.name
                } else {
                  let Pk;
                  Pk = ek.name && (ek.name.indexOf("://") > 0 || ek.name.startsWith("data:")) ? ek.name : Dk + ek.name, ek.url && (ek.url.startsWith("data:") || kk.UseSerializedUrlIfAny) && (Pk = ek.url);
                  const mk = {
                    noMipmap: !fk,
                    invertY: ek.invertY,
                    samplingMode: ek.samplingMode,
                    useSRGBBuffer: ek._useSRGBBuffer ?? !1,
                    creationFlags: ek._creationFlags ?? 0,
                    onLoad: () => {
                      bk(rk)
                    },
                    internalTexture: Sk
                  };
                  rk = new kk(Pk, ik, mk)
                }
                return rk
              }
            }), ek, ik)
          }
          static CreateFromBase64String(ek, ik, Dk, fk, Sk) {
            let bk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : kk.TRILINEAR_SAMPLINGMODE;
            return new kk("data:" + ik, Dk, fk, Sk, bk, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, ek, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(ek, ik, Dk) {
            let fk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Sk = arguments.length > 4 ? arguments[4] : void 0,
              bk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              rk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : kk.TRILINEAR_SAMPLINGMODE,
              Pk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              mk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              Mk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              Kk = arguments.length > 10 ? arguments[10] : void 0,
              xk = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== ek.substring(0, 5) && (ek = "data:" + ek), new kk(ek, Dk, Sk, bk, rk, Pk, mk, ik, fk, Mk, void 0, void 0, Kk, xk)
          }
        }, (() => {
          const Sk = "function" === typeof Symbol && Symbol.metadata ? Object.create(uk[Symbol.metadata] ?? null) : void 0;
          ek = [(0, fk.I)()], ik = [(0, fk.I)()], Uk = [(0, fk.I)()], yk = [(0, fk.I)()], Yk = [(0, fk.I)()], Lk = [(0, fk.I)()], Ck = [(0, fk.I)()], Ak = [(0, fk.I)()], jk = [(0, fk.I)()], sk = [(0, fk.I)()], dk = [(0, fk.I)()], Vk = [(0, fk.I)()], Fk = [(0, fk.I)()], (0, Dk.d)(kk, null, Fk, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: kk => "isBlocking" in kk,
              get: kk => kk.isBlocking
            },
            metadata: Sk
          }, null, qk), (0, Dk.d)(null, null, ek, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: kk => "url" in kk,
              get: kk => kk.url,
              set: (kk, ek) => {
                kk.url = ek
              }
            },
            metadata: Sk
          }, Ik, zk), (0, Dk.d)(null, null, ik, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: kk => "uOffset" in kk,
              get: kk => kk.uOffset,
              set: (kk, ek) => {
                kk.uOffset = ek
              }
            },
            metadata: Sk
          }, Qk, vk), (0, Dk.d)(null, null, Uk, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: kk => "vOffset" in kk,
              get: kk => kk.vOffset,
              set: (kk, ek) => {
                kk.vOffset = ek
              }
            },
            metadata: Sk
          }, Ek, hk), (0, Dk.d)(null, null, yk, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: kk => "uScale" in kk,
              get: kk => kk.uScale,
              set: (kk, ek) => {
                kk.uScale = ek
              }
            },
            metadata: Sk
          }, ak, Wk), (0, Dk.d)(null, null, Yk, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: kk => "vScale" in kk,
              get: kk => kk.vScale,
              set: (kk, ek) => {
                kk.vScale = ek
              }
            },
            metadata: Sk
          }, tk, Xk), (0, Dk.d)(null, null, Lk, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: kk => "uAng" in kk,
              get: kk => kk.uAng,
              set: (kk, ek) => {
                kk.uAng = ek
              }
            },
            metadata: Sk
          }, Bk, ck), (0, Dk.d)(null, null, Ck, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: kk => "vAng" in kk,
              get: kk => kk.vAng,
              set: (kk, ek) => {
                kk.vAng = ek
              }
            },
            metadata: Sk
          }, Tk, Zk), (0, Dk.d)(null, null, Ak, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: kk => "wAng" in kk,
              get: kk => kk.wAng,
              set: (kk, ek) => {
                kk.wAng = ek
              }
            },
            metadata: Sk
          }, Ok, gk), (0, Dk.d)(null, null, jk, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: kk => "uRotationCenter" in kk,
              get: kk => kk.uRotationCenter,
              set: (kk, ek) => {
                kk.uRotationCenter = ek
              }
            },
            metadata: Sk
          }, Gk, Nk), (0, Dk.d)(null, null, sk, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: kk => "vRotationCenter" in kk,
              get: kk => kk.vRotationCenter,
              set: (kk, ek) => {
                kk.vRotationCenter = ek
              }
            },
            metadata: Sk
          }, Rk, Jk), (0, Dk.d)(null, null, dk, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: kk => "wRotationCenter" in kk,
              get: kk => kk.wRotationCenter,
              set: (kk, ek) => {
                kk.wRotationCenter = ek
              }
            },
            metadata: Sk
          }, ke, ee), (0, Dk.d)(null, null, Vk, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: kk => "homogeneousRotationInUVTransform" in kk,
              get: kk => kk.homogeneousRotationInUVTransform,
              set: (kk, ek) => {
                kk.homogeneousRotationInUVTransform = ek
              }
            },
            metadata: Sk
          }, ie, De), Sk && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Sk
          })
        })(), kk.SerializeBuffers = !0, kk.ForceSerializeBuffers = !1, kk.OnTextureLoadErrorObservable = new Sk.c, kk._SerializeInternalTextureUniqueId = !1, kk._CubeTextureParser = (kk, ek, ik) => {
          throw (0, mk.k)("CubeTexture")
        }, kk._CreateMirror = (kk, ek, ik, Dk) => {
          throw (0, mk.k)("MirrorTexture")
        }, kk._CreateRenderTargetTexture = (kk, ek, ik, Dk, fk) => {
          throw (0, mk.k)("RenderTargetTexture")
        }, kk.NEAREST_SAMPLINGMODE = 1, kk.NEAREST_NEAREST_MIPLINEAR = 8, kk.BILINEAR_SAMPLINGMODE = 2, kk.LINEAR_LINEAR_MIPNEAREST = 11, kk.TRILINEAR_SAMPLINGMODE = 3, kk.LINEAR_LINEAR_MIPLINEAR = 3, kk.NEAREST_NEAREST_MIPNEAREST = 4, kk.NEAREST_LINEAR_MIPNEAREST = 5, kk.NEAREST_LINEAR_MIPLINEAR = 6, kk.NEAREST_LINEAR = 7, kk.NEAREST_NEAREST = 1, kk.LINEAR_NEAREST_MIPNEAREST = 9, kk.LINEAR_NEAREST_MIPLINEAR = 10, kk.LINEAR_LINEAR = 2, kk.LINEAR_NEAREST = 12, kk.EXPLICIT_MODE = 0, kk.SPHERICAL_MODE = 1, kk.PLANAR_MODE = 2, kk.CUBIC_MODE = 3, kk.PROJECTION_MODE = 4, kk.SKYBOX_MODE = 5, kk.INVCUBIC_MODE = 6, kk.EQUIRECTANGULAR_MODE = 7, kk.FIXED_EQUIRECTANGULAR_MODE = 8, kk.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, kk.CLAMP_ADDRESSMODE = 0, kk.WRAP_ADDRESSMODE = 1, kk.MIRROR_ADDRESSMODE = 2, kk.UseSerializedUrlIfAny = !1, kk
      })(),
      Yk = !1;

    function Lk() {
      Yk || (Yk = !0, (0, Pk.h)("BABYLON.Texture", yk), pk.b._TextureParser = yk.Parse)
    }
  },
  39583: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk
    });
    class Dk {
      constructor(kk, ek) {
        this.width = kk, this.height = ek
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
      Fs(kk) {
        this.width = kk.width, this.height = kk.height
      }
      Z6(kk, ek) {
        return this.width = kk, this.height = ek, this
      }
      set(kk, ek) {
        return this.Z6(kk, ek)
      }
      multiplyByFloats(kk, ek) {
        return new Dk(this.width * kk, this.height * ek)
      }
      clone() {
        return new Dk(this.width, this.height)
      }
      equals(kk) {
        return !!kk && (this.width === kk.width && this.height === kk.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new Dk(0, 0)
      }
      add(kk) {
        return new Dk(this.width + kk.width, this.height + kk.height)
      }
      subtract(kk) {
        return new Dk(this.width - kk.width, this.height - kk.height)
      }
      scale(kk) {
        return new Dk(this.width * kk, this.height * kk)
      }
      static Lerp(kk, ek, ik) {
        const fk = kk.width + (ek.width - kk.width) * ik,
          Sk = kk.height + (ek.height - kk.height) * ik;
        return new Dk(fk, Sk)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);