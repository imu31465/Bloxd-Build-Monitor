export const id = 256;
export const ids = [256];
export const modules = {
  40439: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk
    });
    let Xk = !1
  },
  39994: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ek
    });
    var Xk = Ik(40003),
      Tk = Ik(40011),
      ik = Ik(37187),
      yk = Ik(37153),
      lk = Ik(37178),
      ak = Ik(37902),
      qk = Ik(40016);
    class Lk {
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
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = qk.d.Zero(), this._cachedBaseSize = qk.d.Zero(), this._initialSamplingMode = 2, this._texture = Lk._IsRenderTargetWrapper(kk) ? kk.texture : kk, this._texture && (this._engine = this._texture.Oe(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
    var tk, Zk = Ik(40021),
      jk = Ik(39863);
    let ek = (() => {
      var kk;
      let Fk, Ik, qk, tk, jk, ek, wk, Hk, Jk, xk, Pk, Kk, Qk, sk, Vk, zk, Sk, vk, Ek, Ok, nk, Gk, pk, uk, bk, Rk = Lk,
        Uk = [],
        Ck = [],
        Nk = [],
        ck = [],
        Wk = [],
        fk = [],
        Bk = [],
        dk = [],
        Yk = [],
        Ak = [],
        gk = [],
        mk = [],
        hk = [],
        rk = [],
        Dk = [],
        Mk = [],
        kF = [],
        FF = [],
        IF = [],
        XF = [],
        TF = [],
        iF = [],
        yF = [],
        lF = [],
        aF = [],
        qF = [],
        LF = [],
        tF = [],
        ZF = [],
        jF = [],
        eF = [];
      return kk = class extends Rk {
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
          this.mG()?.markAllMaterialsAsDirty(1, (kk => kk.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(kk) {
          kk !== this.isRGBD && (this._texture && (this._texture._isRGBD = kk), this.mG()?.markAllMaterialsAsDirty(1, (kk => kk.hasTexture(this))))
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
          return this._uid || (this._uid = (0, ak.e)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(kk) {
          this._onDisposeObserver && this.hG.remove(this._onDisposeObserver), this._onDisposeObserver = this.hG.add(kk)
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
          let Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, Xk.n)(this, Uk), (0, Xk.n)(this, Ck, void 0)), this.name = ((0, Xk.n)(this, Nk), (0, Xk.n)(this, ck, void 0)), this.displayName = ((0, Xk.n)(this, Wk), (0, Xk.n)(this, fk, void 0)), this.metadata = ((0, Xk.n)(this, Bk), (0, Xk.n)(this, dk, null)), this._internalMetadata = (0, Xk.n)(this, Yk), this.reservedDataStore = null, this._hasAlpha = (0, Xk.n)(this, Ak, !1), this._getAlphaFromRGB = ((0, Xk.n)(this, gk), (0, Xk.n)(this, mk, !1)), this.level = ((0, Xk.n)(this, hk), (0, Xk.n)(this, rk, 1)), this._coordinatesIndex = ((0, Xk.n)(this, Dk), (0, Xk.n)(this, Mk, 0)), this.optimizeUVAllocation = ((0, Xk.n)(this, kF), (0, Xk.n)(this, FF, !0)), this._coordinatesMode = ((0, Xk.n)(this, IF), (0, Xk.n)(this, XF, 0)), this.wrapR = ((0, Xk.n)(this, TF), (0, Xk.n)(this, iF, 1)), this.anisotropicFilteringLevel = ((0, Xk.n)(this, yF), (0, Xk.n)(this, lF, kk.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, Xk.n)(this, aF), !1), this._gammaSpace = !0, this.invertZ = (0, Xk.n)(this, qF, !1), this.lodLevelInAlpha = ((0, Xk.n)(this, LF), (0, Xk.n)(this, tF, !1)), this._dominantDirection = ((0, Xk.n)(this, ZF), null), this.isRenderTarget = (0, Xk.n)(this, jF, !1), this._prefiltered = ((0, Xk.n)(this, eF), !1), this._forceSerialize = !1, this.animations = [], this.hG = new ik.e, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, Fk ? kk._IsScene(Fk) ? this._scene = Fk : this._engine = Fk : this._scene = lk.e.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.Oe()), this._texture = Ik, this._uid = null
        }
        mG() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return yk.c.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return yk.c.IdentityReadOnly
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
        _getFromCache(kk, Fk, Ik, Xk, Tk, ik) {
          const yk = this._getEngine();
          if (!yk) return null;
          const lk = yk._getUseSRGBBuffer(!!Tk, Fk),
            ak = yk.getLoadedTexturesCache();
          for (let qk = 0; qk < ak.length; qk++) {
            const yk = ak[qk];
            if ((void 0 === Tk || lk === yk._useSRGBBuffer) && (void 0 === Xk || Xk === yk.invertY) && yk.url === kk && yk.generateMipMaps === !Fk && (!Ik || Ik === yk.samplingMode) && (void 0 === ik || ik === yk.isCube)) return yk.incrementReferences(), yk
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
          const kk = this.mG();
          kk && kk.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Xk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            yk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            lk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            ak = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const qk = this._getEngine();
          if (!qk) return null;
          const Lk = this.getSize();
          let tk = Lk.width,
            Zk = Lk.height;
          0 !== Fk && (tk /= Math.pow(2, Fk), Zk /= Math.pow(2, Fk), tk = Math.round(tk), Zk = Math.round(Zk)), lk = Math.min(tk, lk), ak = Math.min(Zk, ak);
          try {
            return this._texture.isCube || this._texture.is2DArray ? qk._readTexturePixels(this._texture, lk, ak, kk, Fk, Ik, Xk, Tk, ik, yk) : qk._readTexturePixels(this._texture, lk, ak, -1, Fk, Ik, Xk, Tk, ik, yk)
          } catch (jk) {
            return null
          }
        }
        _readPixelsSync() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Xk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const ik = this.getSize();
          let yk = ik.width,
            lk = ik.height;
          const ak = this._getEngine();
          if (!ak) return null;
          0 != Fk && (yk /= Math.pow(2, Fk), lk /= Math.pow(2, Fk), yk = Math.round(yk), lk = Math.round(lk));
          try {
            return this._texture.isCube ? ak._readTexturePixelsSync(this._texture, yk, lk, kk, Fk, Ik, Xk, Tk) : ak._readTexturePixelsSync(this._texture, yk, lk, -1, Fk, Ik, Xk, Tk)
          } catch (qk) {
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
          this.hG.notifyObservers(this), this.hG.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !kk) return null;
          const Fk = Zk.b.Serialize(this);
          return Zk.b.AppendSerializedAnimations(this, Fk), Fk
        }
        static WhenAllReady(kk, Fk) {
          let Ik = kk.length;
          if (0 !== Ik)
            for (let Xk = 0; Xk < kk.length; Xk++) {
              const Tk = kk[Xk];
              if (Tk.isReady()) 0 === --Ik && Fk();
              else {
                const kk = Tk.onLoadObservable;
                kk ? kk.addOnce((() => {
                  0 === --Ik && Fk()
                })) : 0 === --Ik && Fk()
              }
            } else Fk()
        }
        static _IsScene(kk) {
          return "Scene" === kk.getClassName()
        }
      }, (() => {
        const ik = "function" === typeof Symbol && Symbol.metadata ? Object.create(Rk[Symbol.metadata] ?? null) : void 0;
        Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], qk = [(0, Tk.J)()], tk = [(0, Tk.J)()], jk = [(0, Tk.J)("hasAlpha")], ek = [(0, Tk.J)("getAlphaFromRGB")], wk = [(0, Tk.J)()], Hk = [(0, Tk.J)("coordinatesIndex")], Jk = [(0, Tk.J)()], xk = [(0, Tk.J)("coordinatesMode")], Pk = [(0, Tk.J)()], Kk = [(0, Tk.J)()], Qk = [(0, Tk.J)()], sk = [(0, Tk.J)()], Vk = [(0, Tk.J)()], zk = [(0, Tk.J)()], Sk = [(0, Tk.J)()], vk = [(0, Tk.J)()], Ek = [(0, Tk.J)()], Ok = [(0, Tk.J)()], nk = [(0, Tk.J)()], Gk = [(0, Tk.J)()], pk = [(0, Tk.J)()], uk = [(0, Tk.B)()], bk = [(0, Tk.J)()], (0, Xk.j)(kk, null, Pk, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: kk => "wrapU" in kk,
            get: kk => kk.wrapU
          },
          metadata: ik
        }, null, Uk), (0, Xk.j)(kk, null, Kk, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: kk => "wrapV" in kk,
            get: kk => kk.wrapV
          },
          metadata: ik
        }, null, Uk), (0, Xk.j)(kk, null, Vk, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: kk => "isCube" in kk,
            get: kk => kk.isCube
          },
          metadata: ik
        }, null, Uk), (0, Xk.j)(kk, null, zk, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: kk => "is3D" in kk,
            get: kk => kk.is3D
          },
          metadata: ik
        }, null, Uk), (0, Xk.j)(kk, null, Sk, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: kk => "is2DArray" in kk,
            get: kk => kk.is2DArray
          },
          metadata: ik
        }, null, Uk), (0, Xk.j)(kk, null, vk, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: kk => "gammaSpace" in kk,
            get: kk => kk.gammaSpace
          },
          metadata: ik
        }, null, Uk), (0, Xk.j)(kk, null, nk, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: kk => "lodGenerationOffset" in kk,
            get: kk => kk.lodGenerationOffset
          },
          metadata: ik
        }, null, Uk), (0, Xk.j)(kk, null, Gk, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: kk => "lodGenerationScale" in kk,
            get: kk => kk.lodGenerationScale
          },
          metadata: ik
        }, null, Uk), (0, Xk.j)(kk, null, pk, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: kk => "linearSpecularLOD" in kk,
            get: kk => kk.linearSpecularLOD
          },
          metadata: ik
        }, null, Uk), (0, Xk.j)(kk, null, uk, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "irradianceTexture" in kk,
            get: kk => kk.irradianceTexture
          },
          metadata: ik
        }, null, Uk), (0, Xk.j)(null, null, Fk, {
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
          metadata: ik
        }, Ck, Nk), (0, Xk.j)(null, null, Ik, {
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
          metadata: ik
        }, ck, Wk), (0, Xk.j)(null, null, qk, {
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
          metadata: ik
        }, fk, Bk), (0, Xk.j)(null, null, tk, {
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
          metadata: ik
        }, dk, Yk), (0, Xk.j)(null, null, jk, {
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
          metadata: ik
        }, Ak, gk), (0, Xk.j)(null, null, ek, {
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
          metadata: ik
        }, mk, hk), (0, Xk.j)(null, null, wk, {
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
          metadata: ik
        }, rk, Dk), (0, Xk.j)(null, null, Hk, {
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
          metadata: ik
        }, Mk, kF), (0, Xk.j)(null, null, Jk, {
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
          metadata: ik
        }, FF, IF), (0, Xk.j)(null, null, xk, {
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
          metadata: ik
        }, XF, TF), (0, Xk.j)(null, null, Qk, {
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
          metadata: ik
        }, iF, yF), (0, Xk.j)(null, null, sk, {
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
          metadata: ik
        }, lF, aF), (0, Xk.j)(null, null, Ek, {
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
          metadata: ik
        }, qF, LF), (0, Xk.j)(null, null, Ok, {
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
          metadata: ik
        }, tF, ZF), (0, Xk.j)(null, null, bk, {
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
          metadata: ik
        }, jF, eF), ik && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ik
        })
      })(), kk.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, kk
    })();
    (tk = ek.prototype).forceSphericalPolynomialsRecompute ?? (tk.forceSphericalPolynomialsRecompute = (0, jk.h)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(ek.prototype, "sphericalPolynomial") || Object.defineProperty(ek.prototype, "sphericalPolynomial", (0, jk.g)("BaseTexture", "sphericalPolynomial"))
  },
  40489: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Qk,
      g: () => Pk
    });
    var Xk = Ik(40003),
      Tk = Ik(40011),
      ik = Ik(37187),
      yk = Ik(37153),
      lk = Ik(39994),
      ak = Ik(37201),
      qk = Ik(39863),
      Lk = Ik(39878),
      tk = Ik(40099),
      Zk = Ik(37785),
      jk = Ik(40048);

    function ek(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Xk = Fk.width,
        Tk = Fk.height;
      if (kk instanceof Float32Array) {
        let Fk = kk.byteLength / kk.BYTES_PER_ELEMENT;
        const Ik = new Uint8Array(Fk);
        for (; --Fk >= 0;) {
          let Xk = kk[Fk];
          Xk < 0 ? Xk = 0 : Xk > 1 && (Xk = 1), Ik[Fk] = 255 * Xk
        }
        kk = Ik
      }
      const ik = document.createElement("canvas");
      ik.width = Xk, ik.height = Tk;
      const yk = ik.getContext("2d");
      if (!yk) return null;
      const lk = yk.createImageData(Xk, Tk);
      if (lk.data.set(kk), yk.putImageData(lk, 0, 0), Ik) {
        const kk = document.createElement("canvas");
        kk.width = Xk, kk.height = Tk;
        const Fk = kk.getContext("2d");
        return Fk ? (Fk.translate(0, Tk), Fk.scale(1, -1), Fk.drawImage(ik, 0, 0), kk.toDataURL("image/png")) : null
      }
      return ik.toDataURL("image/png")
    }

    function wk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Xk = kk.getInternalTexture();
      if (!Xk) return null;
      const Tk = kk._readPixelsSync(Fk, Ik);
      return Tk ? ek(Tk, kk.getSize(), Xk.invertY) : null
    }
    async function Hk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Xk = kk.getInternalTexture();
      if (!Xk) return null;
      const Tk = await kk.readPixels(Fk, Ik);
      return Tk ? ek(Tk, kk.getSize(), Xk.invertY) : null
    }
    var Jk = Ik(40439),
      xk = Ik(40021);
    let Pk = (() => {
        var kk;
        let Fk, Ik, ek, Pk, Kk, Qk, sk, Vk, zk, Sk, vk, Ek, Ok, nk = lk.d,
          Gk = [],
          pk = [],
          uk = [],
          bk = [],
          Rk = [],
          Uk = [],
          Ck = [],
          Nk = [],
          ck = [],
          Wk = [],
          fk = [],
          Bk = [],
          dk = [],
          Yk = [],
          Ak = [],
          gk = [],
          mk = [],
          hk = [],
          rk = [],
          Dk = [],
          Mk = [],
          kF = [],
          FF = [],
          IF = [],
          XF = [];
        return kk = class extends nk {
          static _CreateVideoTexture(Fk, Ik, Xk) {
            arguments.length > 5 && void 0 !== arguments[5] || kk.TRILINEAR_SAMPLINGMODE;
            throw (0, qk.j)("VideoTexture")
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
          constructor(Fk, Ik, Tk, yk) {
            let lk, ak = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : kk.TRILINEAR_SAMPLINGMODE,
              qk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              tk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              Zk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              jk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              ek = arguments.length > 9 ? arguments[9] : void 0,
              wk = arguments.length > 10 ? arguments[10] : void 0,
              Hk = arguments.length > 11 ? arguments[11] : void 0,
              xk = arguments.length > 12 ? arguments[12] : void 0,
              Pk = arguments.length > 13 ? arguments[13] : void 0;
            super(Ik), this.url = ((0, Xk.n)(this, Gk), (0, Xk.n)(this, pk, null)), this.uOffset = ((0, Xk.n)(this, uk), (0, Xk.n)(this, bk, 0)), this.vOffset = ((0, Xk.n)(this, Rk), (0, Xk.n)(this, Uk, 0)), this.uScale = ((0, Xk.n)(this, Ck), (0, Xk.n)(this, Nk, 1)), this.vScale = ((0, Xk.n)(this, ck), (0, Xk.n)(this, Wk, 1)), this.uAng = ((0, Xk.n)(this, fk), (0, Xk.n)(this, Bk, 0)), this.vAng = ((0, Xk.n)(this, dk), (0, Xk.n)(this, Yk, 0)), this.wAng = ((0, Xk.n)(this, Ak), (0, Xk.n)(this, gk, 0)), this.uRotationCenter = ((0, Xk.n)(this, mk), (0, Xk.n)(this, hk, .5)), this.vRotationCenter = ((0, Xk.n)(this, rk), (0, Xk.n)(this, Dk, .5)), this.wRotationCenter = ((0, Xk.n)(this, Mk), (0, Xk.n)(this, kF, .5)), this.homogeneousRotationInUVTransform = ((0, Xk.n)(this, FF), (0, Xk.n)(this, IF, !1)), this.inspectableCustomProperties = ((0, Xk.n)(this, XF), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new ik.e, this._isBlocking = !0, this.name = Fk || "", this.url = Fk;
            let Kk = !1,
              Qk = null,
              sk = !0;
            "object" === typeof Tk && null !== Tk ? (lk = Tk.noMipmap ?? !1, yk = Tk.invertY ?? !Jk.b, ak = Tk.samplingMode ?? kk.TRILINEAR_SAMPLINGMODE, qk = Tk.onLoad ?? null, tk = Tk.onError ?? null, Zk = Tk.buffer ?? null, jk = Tk.deleteBuffer ?? !1, ek = Tk.format, wk = Tk.mimeType, Hk = Tk.loaderOptions, xk = Tk.creationFlags, Kk = Tk.useSRGBBuffer ?? !1, Qk = Tk.internalTexture ?? null, sk = Tk.gammaSpace ?? sk, Pk = Tk.forcedExtension ?? Pk) : lk = !!Tk, this._gammaSpace = sk, this._noMipmap = lk, this._invertY = void 0 === yk ? !Jk.b : yk, this._initialSamplingMode = ak, this._buffer = Zk, this._deleteBuffer = jk, this._mimeType = wk, this._loaderOptions = Hk, this._creationFlags = xk, this._useSRGBBuffer = Kk, this._forcedExtension = Pk, void 0 !== ek && (this._format = ek);
            const Vk = this.mG(),
              zk = this._getEngine();
            if (!zk) return;
            zk.onBeforeTextureInitObservable.notifyObservers(this);
            const Sk = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), qk && qk(), !this.isBlocking && Vk && Vk.resetCachedMaterial()
              },
              vk = (Fk, Ik) => {
                this._loadingError = !0, this._errorObject = {
                  message: Fk,
                  exception: Ik
                }, tk && tk(Fk, Ik), kk.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !Qk) return this._delayedOnLoad = Sk, void(this._delayedOnError = vk);
            if (this._texture = Qk ?? this._getFromCache(this.url, lk, ak, this._invertY, Kk, this.isCube), this._texture)
              if (this._texture.isReady) Lk.d.SetImmediate((() => Sk()));
              else {
                const kk = this._texture.onLoadedObservable.add(Sk);
                this._texture.onErrorObservable.add((Fk => {
                  vk(Fk.message, Fk.exception), this._texture?.onLoadedObservable.remove(kk)
                }))
              }
            else if (Vk && Vk.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = Sk, this._delayedOnError = vk;
            else {
              try {
                this._texture = zk.createTexture(this.url, lk, this._invertY, Vk, ak, Sk, vk, this._buffer, void 0, this._format, this._forcedExtension, wk, Hk, xk, Kk)
              } catch (Ek) {
                throw vk("error loading", Ek), Ek
              }
              jk && (this._buffer = null)
            }
          }
          updateURL(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Ik = arguments.length > 2 ? arguments[2] : void 0,
              Xk = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.mG().markAllMaterialsAsDirty(1, (kk => kk.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = kk), this.url = kk, this._buffer = Fk, this._forcedExtension = Xk, this.delayLoadState = 4;
            const Tk = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              Tk ? Tk() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), Ik && Ik()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const kk = this.mG();
            if (!kk) return;
            let Fk = this.url;
            !Fk && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (Fk = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(Fk, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? Lk.d.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = kk.Oe().createTexture(Fk, this._noMipmap, this._invertY, kk, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(kk, Fk, Ik, Xk) {
            kk *= this._cachedUScale, Fk *= this._cachedVScale, kk -= this.uRotationCenter * this._cachedUScale, Fk -= this.vRotationCenter * this._cachedVScale, Ik -= this.wRotationCenter, yk.t.TransformCoordinatesFromFloatsToRef(kk, Fk, Ik, this._rowGenerationMatrix, Xk), Xk.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, Xk.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, Xk.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * kk === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * kk, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = yk.c.Zero(), this._rowGenerationMatrix = new yk.c, this._t0 = yk.t.Zero(), this._t1 = yk.t.Zero(), this._t2 = yk.t.Zero()), yk.c.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (yk.c.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, yk.l.Matrix[0]), yk.c.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, yk.l.Matrix[1]), yk.c.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, yk.l.Matrix[2]), yk.c.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, yk.l.Matrix[3]), yk.l.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(yk.l.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(yk.l.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(yk.l.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.zXk(this._t0), this._t2.zXk(this._t0), yk.c.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const Fk = this.mG();
            if (!Fk) return this._cachedTextureMatrix;
            const Ik = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && Ik !== this._cachedIdentity3x2 && Fk.markAllMaterialsAsDirty(1, (kk => kk.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const Fk = this.mG();
            if (!Fk) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== kk.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === Fk.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = yk.c.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = yk.c.Zero());
            const Ik = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case kk.PLANAR_MODE:
                yk.c.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case kk.PROJECTION_MODE: {
                yk.c.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const kk = Fk.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = kk.updateFlag, kk.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                yk.c.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return Ik && Fk.markAllMaterialsAsDirty(1, (kk => kk.hasTexture(this))), this._cachedReflectionTextureMatrix
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
            return xk.b.Clone((() => new kk(this._texture ? this._texture.url : null, this.mG(), Fk)), this)
          }
          serialize() {
            const Fk = this.name;
            kk.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const Ik = super.serialize(kk._SerializeInternalTextureUniqueId);
            if (!Ik) return null;
            if (kk.SerializeBuffers || kk.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) Ik.base64String = this._buffer, Ik.name = Ik.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const kk = this.mimeType || "image/png";
              Ik.base64String = `data:${kk};base64,${(0,jk.i)(this._buffer)}`
            } else(kk.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (Ik.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? wk(this) : Hk(this));
            return Ik.invertY = this._invertY, Ik.samplingMode = this.samplingMode, Ik._creationFlags = this._creationFlags, Ik._useSRGBBuffer = this._useSRGBBuffer, kk._SerializeInternalTextureUniqueId && (Ik.internalTextureUniqueId = this._texture?.uniqueId), Ik.internalTextureLabel = this._texture?.label, Ik.noMipmap = this._noMipmap, this.name = Fk, Ik
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(Fk, Ik, Xk) {
            if (Fk.customType) {
              const kk = tk.d.Instantiate(Fk.customType).Parse(Fk, Ik, Xk);
              return Fk.samplingMode && kk.updateSamplingMode && kk._samplingMode && kk._samplingMode !== Fk.samplingMode && kk.updateSamplingMode(Fk.samplingMode), kk
            }
            if (Fk.isCube && !Fk.isRenderTarget) return kk._CubeTextureParser(Fk, Ik, Xk);
            const Tk = void 0 !== Fk.internalTextureUniqueId;
            if (!Fk.name && !Fk.isRenderTarget && !Tk) return null;
            let ik;
            if (Tk) {
              const kk = Ik.Oe().getLoadedTexturesCache();
              for (const Ik of kk)
                if (Ik.uniqueId === Fk.internalTextureUniqueId) {
                  ik = Ik;
                  break
                }
            }
            const yk = kk => {
              if (kk && kk._texture && (kk._texture._cachedWrapU = null, kk._texture._cachedWrapV = null, kk._texture._cachedWrapR = null), Fk.samplingMode) {
                const Ik = Fk.samplingMode;
                kk && kk.samplingMode !== Ik && kk.updateSamplingMode(Ik)
              }
              if (kk && Fk.animations)
                for (let Ik = 0; Ik < Fk.animations.length; Ik++) {
                  const Xk = Fk.animations[Ik],
                    Tk = (0, ak.b)("BABYLON.Animation");
                  Tk && kk.animations.push(Tk.Parse(Xk))
                }
              kk && kk._texture && (Tk && !ik && kk._texture._setUniqueId(Fk.internalTextureUniqueId), kk._texture.label = Fk.internalTextureLabel)
            };
            return xk.b.Parse((() => {
              let Tk = !0;
              if (Fk.noMipmap && (Tk = !1), Fk.mirrorPlane) {
                const Xk = kk._CreateMirror(Fk.name, Fk.renderTargetSize, Ik, Tk);
                return Xk._waitingRenderList = Fk.renderList, Xk.mirrorPlane = Zk.e.FromArray(Fk.mirrorPlane), yk(Xk), Xk
              }
              if (Fk.isRenderTarget && !Fk.base64String) {
                let Xk = null;
                if (Fk.isCube) {
                  if (Ik.reflectionProbes)
                    for (let kk = 0; kk < Ik.reflectionProbes.length; kk++) {
                      const Xk = Ik.reflectionProbes[kk];
                      if (Xk.name === Fk.name) return Xk.cubeTexture
                    }
                } else Xk = kk._CreateRenderTargetTexture(Fk.name, Fk.renderTargetSize, Ik, Tk, Fk._creationFlags ?? 0), Xk._waitingRenderList = Fk.renderList;
                return yk(Xk), Xk
              }
              if (Fk.isVideo) {
                const ik = kk._CreateVideoTexture(Xk + (Fk.url || Fk.name), Xk + (Fk.src || Fk.url), Ik, Tk, Fk.invertY, Fk.samplingMode, Fk.settings || {});
                return yk(ik), ik
              } {
                let lk;
                if ("string" === typeof Fk.base64String && Fk.base64String && !ik) {
                  const Xk = {
                      buffer: Fk.base64String,
                      noMipmap: !Tk,
                      invertY: Fk.invertY,
                      samplingMode: Fk.samplingMode,
                      useSRGBBuffer: Fk._useSRGBBuffer ?? !1,
                      creationFlags: Fk._creationFlags ?? 0,
                      onLoad: () => {
                        yk(lk)
                      }
                    },
                    ik = Fk.base64String,
                    ak = ik.startsWith("data:") ? ik.substring(5) : ik;
                  lk = kk.CreateFromBase64String("", ak, Ik, Xk), lk.name = Fk.name
                } else {
                  let ak;
                  ak = Fk.name && (Fk.name.indexOf("://") > 0 || Fk.name.startsWith("data:")) ? Fk.name : Xk + Fk.name, Fk.url && (Fk.url.startsWith("data:") || kk.UseSerializedUrlIfAny) && (ak = Fk.url);
                  const qk = {
                    noMipmap: !Tk,
                    invertY: Fk.invertY,
                    samplingMode: Fk.samplingMode,
                    useSRGBBuffer: Fk._useSRGBBuffer ?? !1,
                    creationFlags: Fk._creationFlags ?? 0,
                    onLoad: () => {
                      yk(lk)
                    },
                    internalTexture: ik
                  };
                  lk = new kk(ak, Ik, qk)
                }
                return lk
              }
            }), Fk, Ik)
          }
          static CreateFromBase64String(Fk, Ik, Xk, Tk, ik) {
            let yk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : kk.TRILINEAR_SAMPLINGMODE;
            return new kk("data:" + Ik, Xk, Tk, ik, yk, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, Fk, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(Fk, Ik, Xk) {
            let Tk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              ik = arguments.length > 4 ? arguments[4] : void 0,
              yk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              lk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : kk.TRILINEAR_SAMPLINGMODE,
              ak = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              qk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              Lk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              tk = arguments.length > 10 ? arguments[10] : void 0,
              Zk = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== Fk.substring(0, 5) && (Fk = "data:" + Fk), new kk(Fk, Xk, ik, yk, lk, ak, qk, Ik, Tk, Lk, void 0, void 0, tk, Zk)
          }
        }, (() => {
          const ik = "function" === typeof Symbol && Symbol.metadata ? Object.create(nk[Symbol.metadata] ?? null) : void 0;
          Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], ek = [(0, Tk.J)()], Pk = [(0, Tk.J)()], Kk = [(0, Tk.J)()], Qk = [(0, Tk.J)()], sk = [(0, Tk.J)()], Vk = [(0, Tk.J)()], zk = [(0, Tk.J)()], Sk = [(0, Tk.J)()], vk = [(0, Tk.J)()], Ek = [(0, Tk.J)()], Ok = [(0, Tk.J)()], (0, Xk.j)(kk, null, Ok, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: kk => "isBlocking" in kk,
              get: kk => kk.isBlocking
            },
            metadata: ik
          }, null, Gk), (0, Xk.j)(null, null, Fk, {
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
            metadata: ik
          }, pk, uk), (0, Xk.j)(null, null, Ik, {
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
            metadata: ik
          }, bk, Rk), (0, Xk.j)(null, null, ek, {
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
            metadata: ik
          }, Uk, Ck), (0, Xk.j)(null, null, Pk, {
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
            metadata: ik
          }, Nk, ck), (0, Xk.j)(null, null, Kk, {
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
            metadata: ik
          }, Wk, fk), (0, Xk.j)(null, null, Qk, {
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
            metadata: ik
          }, Bk, dk), (0, Xk.j)(null, null, sk, {
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
            metadata: ik
          }, Yk, Ak), (0, Xk.j)(null, null, Vk, {
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
            metadata: ik
          }, gk, mk), (0, Xk.j)(null, null, zk, {
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
            metadata: ik
          }, hk, rk), (0, Xk.j)(null, null, Sk, {
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
            metadata: ik
          }, Dk, Mk), (0, Xk.j)(null, null, vk, {
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
            metadata: ik
          }, kF, FF), (0, Xk.j)(null, null, Ek, {
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
            metadata: ik
          }, IF, XF), ik && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ik
          })
        })(), kk.SerializeBuffers = !0, kk.ForceSerializeBuffers = !1, kk.OnTextureLoadErrorObservable = new ik.e, kk._SerializeInternalTextureUniqueId = !1, kk._CubeTextureParser = (kk, Fk, Ik) => {
          throw (0, qk.j)("CubeTexture")
        }, kk._CreateMirror = (kk, Fk, Ik, Xk) => {
          throw (0, qk.j)("MirrorTexture")
        }, kk._CreateRenderTargetTexture = (kk, Fk, Ik, Xk, Tk) => {
          throw (0, qk.j)("RenderTargetTexture")
        }, kk.NEAREST_SAMPLINGMODE = 1, kk.NEAREST_NEAREST_MIPLINEAR = 8, kk.BILINEAR_SAMPLINGMODE = 2, kk.LINEAR_LINEAR_MIPNEAREST = 11, kk.TRILINEAR_SAMPLINGMODE = 3, kk.LINEAR_LINEAR_MIPLINEAR = 3, kk.NEAREST_NEAREST_MIPNEAREST = 4, kk.NEAREST_LINEAR_MIPNEAREST = 5, kk.NEAREST_LINEAR_MIPLINEAR = 6, kk.NEAREST_LINEAR = 7, kk.NEAREST_NEAREST = 1, kk.LINEAR_NEAREST_MIPNEAREST = 9, kk.LINEAR_NEAREST_MIPLINEAR = 10, kk.LINEAR_LINEAR = 2, kk.LINEAR_NEAREST = 12, kk.EXPLICIT_MODE = 0, kk.SPHERICAL_MODE = 1, kk.PLANAR_MODE = 2, kk.CUBIC_MODE = 3, kk.PROJECTION_MODE = 4, kk.SKYBOX_MODE = 5, kk.INVCUBIC_MODE = 6, kk.EQUIRECTANGULAR_MODE = 7, kk.FIXED_EQUIRECTANGULAR_MODE = 8, kk.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, kk.CLAMP_ADDRESSMODE = 0, kk.WRAP_ADDRESSMODE = 1, kk.MIRROR_ADDRESSMODE = 2, kk.UseSerializedUrlIfAny = !1, kk
      })(),
      Kk = !1;

    function Qk() {
      Kk || (Kk = !0, (0, ak.f)("BABYLON.Texture", Pk), xk.b._TextureParser = Pk.Parse)
    }
  },
  40016: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Xk
    });
    class Xk {
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
      kS(kk) {
        this.width = kk.width, this.height = kk.height
      }
      t5(kk, Fk) {
        return this.width = kk, this.height = Fk, this
      }
      set(kk, Fk) {
        return this.t5(kk, Fk)
      }
      multiplyByFloats(kk, Fk) {
        return new Xk(this.width * kk, this.height * Fk)
      }
      clone() {
        return new Xk(this.width, this.height)
      }
      equals(kk) {
        return !!kk && (this.width === kk.width && this.height === kk.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new Xk(0, 0)
      }
      add(kk) {
        return new Xk(this.width + kk.width, this.height + kk.height)
      }
      subtract(kk) {
        return new Xk(this.width - kk.width, this.height - kk.height)
      }
      scale(kk) {
        return new Xk(this.width * kk, this.height * kk)
      }
      static Lerp(kk, Fk, Ik) {
        const Tk = kk.width + (Fk.width - kk.width) * Ik,
          ik = kk.height + (Fk.height - kk.height) * Ik;
        return new Xk(Tk, ik)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);