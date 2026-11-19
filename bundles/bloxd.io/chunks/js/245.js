export const id = 245;
export const ids = [245];
export const modules = {
  39223: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT
    });
    let iT = !1
  },
  38758: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => cT
    });
    var iT = IT(38764),
      zT = IT(38773),
      kT = IT(36149),
      WT = IT(36118),
      XT = IT(36146),
      BT = IT(36851),
      FT = IT(38790);
    class ST {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(TT) {
        this._wrapU = TT
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(TT) {
        this._wrapV = TT
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(TT) {
        this._texture && (this._texture.isCube = TT)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(TT) {
        this._texture && (this._texture.is3D = TT)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(TT) {
        this._texture && (this._texture.is2DArray = TT)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(TT) {
        return void 0 !== TT?.shareDepth
      }
      constructor(TT) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = FT.d.Zero(), this._cachedBaseSize = FT.d.Zero(), this._initialSamplingMode = 2, this._texture = ST._IsRenderTargetWrapper(TT) ? TT.texture : TT, this._texture && (this._engine = this._texture.Zc(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(TT, this._texture, this._texture.generateMipMaps && oT)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var DT, LT = IT(38799),
      xT = IT(38643);
    let cT = (() => {
      var TT;
      let oT, IT, FT, DT, xT, cT, KT, MT, rT, AT, gT, hT, wT, mT, eT, RT, uT, vT, ET, fT, CT, jT, JT, UT, aT, YT = ST,
        QT = [],
        OT = [],
        HT = [],
        nT = [],
        qT = [],
        ZT = [],
        lT = [],
        sT = [],
        tT = [],
        GT = [],
        pT = [],
        bT = [],
        yT = [],
        NT = [],
        PT = [],
        dT = [],
        VT = [],
        To = [],
        oo = [],
        Io = [],
        io = [],
        zo = [],
        ko = [],
        Wo = [],
        Xo = [],
        Bo = [],
        Fo = [],
        So = [],
        Do = [],
        Lo = [],
        xo = [];
      return TT = class extends YT {
        set hasAlpha(TT) {
          this._hasAlpha = TT
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(TT) {
          this._getAlphaFromRGB !== TT && (this._getAlphaFromRGB = TT, this._scene && this._scene.markAllMaterialsAsDirty(1, (TT => TT.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(TT) {
          this._coordinatesIndex !== TT && (this._coordinatesIndex = TT, this._scene && this._scene.markAllMaterialsAsDirty(1, (TT => TT.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(TT) {
          this._coordinatesMode !== TT && (this._coordinatesMode = TT, this._scene && this._scene.markAllMaterialsAsDirty(1, (TT => TT.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(TT) {
          this._wrapU = TT
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(TT) {
          this._wrapV = TT
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(TT) {
          this._texture ? this._texture.isCube = TT : this._isCube = TT
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(TT) {
          this._texture && (this._texture.is3D = TT)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(TT) {
          this._texture && (this._texture.is2DArray = TT)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(TT) {
          if (this._texture) {
            if (this._texture._gammaSpace === TT) return;
            this._texture._gammaSpace = TT
          } else {
            if (this._gammaSpace === TT) return;
            this._gammaSpace = TT
          }
          this.pC()?.markAllMaterialsAsDirty(1, (TT => TT.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(TT) {
          TT !== this.isRGBD && (this._texture && (this._texture._isRGBD = TT), this.pC()?.markAllMaterialsAsDirty(1, (TT => TT.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(TT) {
          this._texture && (this._texture._lodGenerationOffset = TT)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(TT) {
          this._texture && (this._texture._lodGenerationScale = TT)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(TT) {
          this._texture && (this._texture._linearSpecularLOD = TT)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(TT) {
          this._texture && (this._texture._irradianceTexture = TT)
        }
        get uid() {
          return this._uid || (this._uid = (0, BT.e)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(TT) {
          this._onDisposeObserver && this.bC.remove(this._onDisposeObserver), this._onDisposeObserver = this.bC.add(TT)
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
        constructor(oT) {
          let IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, iT.j)(this, QT), (0, iT.j)(this, OT, void 0)), this.name = ((0, iT.j)(this, HT), (0, iT.j)(this, nT, void 0)), this.displayName = ((0, iT.j)(this, qT), (0, iT.j)(this, ZT, void 0)), this.metadata = ((0, iT.j)(this, lT), (0, iT.j)(this, sT, null)), this._internalMetadata = (0, iT.j)(this, tT), this.reservedDataStore = null, this._hasAlpha = (0, iT.j)(this, GT, !1), this._getAlphaFromRGB = ((0, iT.j)(this, pT), (0, iT.j)(this, bT, !1)), this.level = ((0, iT.j)(this, yT), (0, iT.j)(this, NT, 1)), this._coordinatesIndex = ((0, iT.j)(this, PT), (0, iT.j)(this, dT, 0)), this.optimizeUVAllocation = ((0, iT.j)(this, VT), (0, iT.j)(this, To, !0)), this._coordinatesMode = ((0, iT.j)(this, oo), (0, iT.j)(this, Io, 0)), this.wrapR = ((0, iT.j)(this, io), (0, iT.j)(this, zo, 1)), this.anisotropicFilteringLevel = ((0, iT.j)(this, ko), (0, iT.j)(this, Wo, TT.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, iT.j)(this, Xo), !1), this._gammaSpace = !0, this.invertZ = (0, iT.j)(this, Bo, !1), this.lodLevelInAlpha = ((0, iT.j)(this, Fo), (0, iT.j)(this, So, !1)), this._dominantDirection = ((0, iT.j)(this, Do), null), this.isRenderTarget = (0, iT.j)(this, Lo, !1), this._prefiltered = ((0, iT.j)(this, xo), !1), this._forceSerialize = !1, this.animations = [], this.bC = new kT.d, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, oT ? TT._IsScene(oT) ? this._scene = oT : this._engine = oT : this._scene = XT.d.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.Zc()), this._texture = IT, this._uid = null
        }
        pC() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return WT.b.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return WT.b.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(TT) {}
        get canRescale() {
          return !1
        }
        _getFromCache(TT, oT, IT, iT, zT, kT) {
          const WT = this._getEngine();
          if (!WT) return null;
          const XT = WT._getUseSRGBBuffer(!!zT, oT),
            BT = WT.getLoadedTexturesCache();
          for (let FT = 0; FT < BT.length; FT++) {
            const WT = BT[FT];
            if ((void 0 === zT || XT === WT._useSRGBBuffer) && (void 0 === iT || iT === WT.invertY) && WT.url === TT && WT.generateMipMaps === !oT && (!IT || IT === WT.samplingMode) && (void 0 === kT || kT === WT.isCube)) return WT.incrementReferences(), WT
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
          const TT = this.pC();
          TT && TT.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            iT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            WT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            XT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            BT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const FT = this._getEngine();
          if (!FT) return null;
          const ST = this.getSize();
          let DT = ST.width,
            LT = ST.height;
          0 !== oT && (DT /= Math.pow(2, oT), LT /= Math.pow(2, oT), DT = Math.round(DT), LT = Math.round(LT)), XT = Math.min(DT, XT), BT = Math.min(LT, BT);
          try {
            return this._texture.isCube || this._texture.is2DArray ? FT._readTexturePixels(this._texture, XT, BT, TT, oT, IT, iT, zT, kT, WT) : FT._readTexturePixels(this._texture, XT, BT, -1, oT, IT, iT, zT, kT, WT)
          } catch (xT) {
            return null
          }
        }
        _readPixelsSync() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            iT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const kT = this.getSize();
          let WT = kT.width,
            XT = kT.height;
          const BT = this._getEngine();
          if (!BT) return null;
          0 != oT && (WT /= Math.pow(2, oT), XT /= Math.pow(2, oT), WT = Math.round(WT), XT = Math.round(XT));
          try {
            return this._texture.isCube ? BT._readTexturePixelsSync(this._texture, WT, XT, TT, oT, IT, iT, zT) : BT._readTexturePixelsSync(this._texture, WT, XT, -1, oT, IT, iT, zT)
          } catch (FT) {
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
            const TT = this._scene.textures.indexOf(this);
            if (TT >= 0 && this._scene.textures.splice(TT, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const TT = this._parentContainer.textures.indexOf(this);
              TT > -1 && this._parentContainer.textures.splice(TT, 1), this._parentContainer = null
            }
          }
          this.bC.notifyObservers(this), this.bC.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !TT) return null;
          const oT = LT.c.Serialize(this);
          return LT.c.AppendSerializedAnimations(this, oT), oT
        }
        static WhenAllReady(TT, oT) {
          let IT = TT.length;
          if (0 !== IT)
            for (let iT = 0; iT < TT.length; iT++) {
              const zT = TT[iT];
              if (zT.isReady()) 0 === --IT && oT();
              else {
                const TT = zT.onLoadObservable;
                TT ? TT.addOnce((() => {
                  0 === --IT && oT()
                })) : 0 === --IT && oT()
              }
            } else oT()
        }
        static _IsScene(TT) {
          return "Scene" === TT.getClassName()
        }
      }, (() => {
        const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(YT[Symbol.metadata] ?? null) : void 0;
        oT = [(0, zT.P)()], IT = [(0, zT.P)()], FT = [(0, zT.P)()], DT = [(0, zT.P)()], xT = [(0, zT.P)("hasAlpha")], cT = [(0, zT.P)("getAlphaFromRGB")], KT = [(0, zT.P)()], MT = [(0, zT.P)("coordinatesIndex")], rT = [(0, zT.P)()], AT = [(0, zT.P)("coordinatesMode")], gT = [(0, zT.P)()], hT = [(0, zT.P)()], wT = [(0, zT.P)()], mT = [(0, zT.P)()], eT = [(0, zT.P)()], RT = [(0, zT.P)()], uT = [(0, zT.P)()], vT = [(0, zT.P)()], ET = [(0, zT.P)()], fT = [(0, zT.P)()], CT = [(0, zT.P)()], jT = [(0, zT.P)()], JT = [(0, zT.P)()], UT = [(0, zT.H)()], aT = [(0, zT.P)()], (0, iT.h)(TT, null, gT, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: TT => "wrapU" in TT,
            get: TT => TT.wrapU
          },
          metadata: kT
        }, null, QT), (0, iT.h)(TT, null, hT, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: TT => "wrapV" in TT,
            get: TT => TT.wrapV
          },
          metadata: kT
        }, null, QT), (0, iT.h)(TT, null, eT, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: TT => "isCube" in TT,
            get: TT => TT.isCube
          },
          metadata: kT
        }, null, QT), (0, iT.h)(TT, null, RT, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: TT => "is3D" in TT,
            get: TT => TT.is3D
          },
          metadata: kT
        }, null, QT), (0, iT.h)(TT, null, uT, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: TT => "is2DArray" in TT,
            get: TT => TT.is2DArray
          },
          metadata: kT
        }, null, QT), (0, iT.h)(TT, null, vT, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: TT => "gammaSpace" in TT,
            get: TT => TT.gammaSpace
          },
          metadata: kT
        }, null, QT), (0, iT.h)(TT, null, CT, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: TT => "lodGenerationOffset" in TT,
            get: TT => TT.lodGenerationOffset
          },
          metadata: kT
        }, null, QT), (0, iT.h)(TT, null, jT, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: TT => "lodGenerationScale" in TT,
            get: TT => TT.lodGenerationScale
          },
          metadata: kT
        }, null, QT), (0, iT.h)(TT, null, JT, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: TT => "linearSpecularLOD" in TT,
            get: TT => TT.linearSpecularLOD
          },
          metadata: kT
        }, null, QT), (0, iT.h)(TT, null, UT, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "irradianceTexture" in TT,
            get: TT => TT.irradianceTexture
          },
          metadata: kT
        }, null, QT), (0, iT.h)(null, null, oT, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: TT => "uniqueId" in TT,
            get: TT => TT.uniqueId,
            set: (TT, oT) => {
              TT.uniqueId = oT
            }
          },
          metadata: kT
        }, OT, HT), (0, iT.h)(null, null, IT, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: TT => "name" in TT,
            get: TT => TT.name,
            set: (TT, oT) => {
              TT.name = oT
            }
          },
          metadata: kT
        }, nT, qT), (0, iT.h)(null, null, FT, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: TT => "displayName" in TT,
            get: TT => TT.displayName,
            set: (TT, oT) => {
              TT.displayName = oT
            }
          },
          metadata: kT
        }, ZT, lT), (0, iT.h)(null, null, DT, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: TT => "metadata" in TT,
            get: TT => TT.metadata,
            set: (TT, oT) => {
              TT.metadata = oT
            }
          },
          metadata: kT
        }, sT, tT), (0, iT.h)(null, null, xT, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: TT => "_hasAlpha" in TT,
            get: TT => TT._hasAlpha,
            set: (TT, oT) => {
              TT._hasAlpha = oT
            }
          },
          metadata: kT
        }, GT, pT), (0, iT.h)(null, null, cT, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: TT => "_getAlphaFromRGB" in TT,
            get: TT => TT._getAlphaFromRGB,
            set: (TT, oT) => {
              TT._getAlphaFromRGB = oT
            }
          },
          metadata: kT
        }, bT, yT), (0, iT.h)(null, null, KT, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: TT => "level" in TT,
            get: TT => TT.level,
            set: (TT, oT) => {
              TT.level = oT
            }
          },
          metadata: kT
        }, NT, PT), (0, iT.h)(null, null, MT, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: TT => "_coordinatesIndex" in TT,
            get: TT => TT._coordinatesIndex,
            set: (TT, oT) => {
              TT._coordinatesIndex = oT
            }
          },
          metadata: kT
        }, dT, VT), (0, iT.h)(null, null, rT, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: TT => "optimizeUVAllocation" in TT,
            get: TT => TT.optimizeUVAllocation,
            set: (TT, oT) => {
              TT.optimizeUVAllocation = oT
            }
          },
          metadata: kT
        }, To, oo), (0, iT.h)(null, null, AT, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "_coordinatesMode" in TT,
            get: TT => TT._coordinatesMode,
            set: (TT, oT) => {
              TT._coordinatesMode = oT
            }
          },
          metadata: kT
        }, Io, io), (0, iT.h)(null, null, wT, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: TT => "wrapR" in TT,
            get: TT => TT.wrapR,
            set: (TT, oT) => {
              TT.wrapR = oT
            }
          },
          metadata: kT
        }, zo, ko), (0, iT.h)(null, null, mT, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: TT => "anisotropicFilteringLevel" in TT,
            get: TT => TT.anisotropicFilteringLevel,
            set: (TT, oT) => {
              TT.anisotropicFilteringLevel = oT
            }
          },
          metadata: kT
        }, Wo, Xo), (0, iT.h)(null, null, ET, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: TT => "invertZ" in TT,
            get: TT => TT.invertZ,
            set: (TT, oT) => {
              TT.invertZ = oT
            }
          },
          metadata: kT
        }, Bo, Fo), (0, iT.h)(null, null, fT, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: TT => "lodLevelInAlpha" in TT,
            get: TT => TT.lodLevelInAlpha,
            set: (TT, oT) => {
              TT.lodLevelInAlpha = oT
            }
          },
          metadata: kT
        }, So, Do), (0, iT.h)(null, null, aT, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: TT => "isRenderTarget" in TT,
            get: TT => TT.isRenderTarget,
            set: (TT, oT) => {
              TT.isRenderTarget = oT
            }
          },
          metadata: kT
        }, Lo, xo), kT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: kT
        })
      })(), TT.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, TT
    })();
    (DT = cT.prototype).forceSphericalPolynomialsRecompute ?? (DT.forceSphericalPolynomialsRecompute = (0, xT.i)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(cT.prototype, "sphericalPolynomial") || Object.defineProperty(cT.prototype, "sphericalPolynomial", (0, xT.f)("BaseTexture", "sphericalPolynomial"))
  },
  39270: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => wT,
      g: () => gT
    });
    var iT = IT(38764),
      zT = IT(38773),
      kT = IT(36149),
      WT = IT(36118),
      XT = IT(38758),
      BT = IT(36166),
      FT = IT(38643),
      ST = IT(38653),
      DT = IT(38889),
      LT = IT(36717),
      xT = IT(38845);

    function cT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const iT = oT.width,
        zT = oT.height;
      if (TT instanceof Float32Array) {
        let oT = TT.byteLength / TT.BYTES_PER_ELEMENT;
        const IT = new Uint8Array(oT);
        for (; --oT >= 0;) {
          let iT = TT[oT];
          iT < 0 ? iT = 0 : iT > 1 && (iT = 1), IT[oT] = 255 * iT
        }
        TT = IT
      }
      const kT = document.createElement("canvas");
      kT.width = iT, kT.height = zT;
      const WT = kT.getContext("2d");
      if (!WT) return null;
      const XT = WT.createImageData(iT, zT);
      if (XT.data.set(TT), WT.putImageData(XT, 0, 0), IT) {
        const TT = document.createElement("canvas");
        TT.width = iT, TT.height = zT;
        const oT = TT.getContext("2d");
        return oT ? (oT.translate(0, zT), oT.scale(1, -1), oT.drawImage(kT, 0, 0), TT.toDataURL("image/png")) : null
      }
      return kT.toDataURL("image/png")
    }

    function KT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const iT = TT.getInternalTexture();
      if (!iT) return null;
      const zT = TT._readPixelsSync(oT, IT);
      return zT ? cT(zT, TT.getSize(), iT.invertY) : null
    }
    async function MT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const iT = TT.getInternalTexture();
      if (!iT) return null;
      const zT = await TT.readPixels(oT, IT);
      return zT ? cT(zT, TT.getSize(), iT.invertY) : null
    }
    var rT = IT(39223),
      AT = IT(38799);
    let gT = (() => {
        var TT;
        let oT, IT, cT, gT, hT, wT, mT, eT, RT, uT, vT, ET, fT, CT = XT.e,
          jT = [],
          JT = [],
          UT = [],
          aT = [],
          YT = [],
          QT = [],
          OT = [],
          HT = [],
          nT = [],
          qT = [],
          ZT = [],
          lT = [],
          sT = [],
          tT = [],
          GT = [],
          pT = [],
          bT = [],
          yT = [],
          NT = [],
          PT = [],
          dT = [],
          VT = [],
          To = [],
          oo = [],
          Io = [];
        return TT = class extends CT {
          static _CreateVideoTexture(oT, IT, iT) {
            arguments.length > 5 && void 0 !== arguments[5] || TT.TRILINEAR_SAMPLINGMODE;
            throw (0, FT.k)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(TT) {
            this._isBlocking = TT
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(oT, IT, zT, WT) {
            let XT, BT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : TT.TRILINEAR_SAMPLINGMODE,
              FT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              DT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              LT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              xT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              cT = arguments.length > 9 ? arguments[9] : void 0,
              KT = arguments.length > 10 ? arguments[10] : void 0,
              MT = arguments.length > 11 ? arguments[11] : void 0,
              AT = arguments.length > 12 ? arguments[12] : void 0,
              gT = arguments.length > 13 ? arguments[13] : void 0;
            super(IT), this.url = ((0, iT.j)(this, jT), (0, iT.j)(this, JT, null)), this.uOffset = ((0, iT.j)(this, UT), (0, iT.j)(this, aT, 0)), this.vOffset = ((0, iT.j)(this, YT), (0, iT.j)(this, QT, 0)), this.uScale = ((0, iT.j)(this, OT), (0, iT.j)(this, HT, 1)), this.vScale = ((0, iT.j)(this, nT), (0, iT.j)(this, qT, 1)), this.uAng = ((0, iT.j)(this, ZT), (0, iT.j)(this, lT, 0)), this.vAng = ((0, iT.j)(this, sT), (0, iT.j)(this, tT, 0)), this.wAng = ((0, iT.j)(this, GT), (0, iT.j)(this, pT, 0)), this.uRotationCenter = ((0, iT.j)(this, bT), (0, iT.j)(this, yT, .5)), this.vRotationCenter = ((0, iT.j)(this, NT), (0, iT.j)(this, PT, .5)), this.wRotationCenter = ((0, iT.j)(this, dT), (0, iT.j)(this, VT, .5)), this.homogeneousRotationInUVTransform = ((0, iT.j)(this, To), (0, iT.j)(this, oo, !1)), this.inspectableCustomProperties = ((0, iT.j)(this, Io), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new kT.d, this._isBlocking = !0, this.name = oT || "", this.url = oT;
            let hT = !1,
              wT = null,
              mT = !0;
            "object" === typeof zT && null !== zT ? (XT = zT.noMipmap ?? !1, WT = zT.invertY ?? !rT.d, BT = zT.samplingMode ?? TT.TRILINEAR_SAMPLINGMODE, FT = zT.onLoad ?? null, DT = zT.onError ?? null, LT = zT.buffer ?? null, xT = zT.deleteBuffer ?? !1, cT = zT.format, KT = zT.mimeType, MT = zT.loaderOptions, AT = zT.creationFlags, hT = zT.useSRGBBuffer ?? !1, wT = zT.internalTexture ?? null, mT = zT.gammaSpace ?? mT, gT = zT.forcedExtension ?? gT) : XT = !!zT, this._gammaSpace = mT, this._noMipmap = XT, this._invertY = void 0 === WT ? !rT.d : WT, this._initialSamplingMode = BT, this._buffer = LT, this._deleteBuffer = xT, this._mimeType = KT, this._loaderOptions = MT, this._creationFlags = AT, this._useSRGBBuffer = hT, this._forcedExtension = gT, void 0 !== cT && (this._format = cT);
            const eT = this.pC(),
              RT = this._getEngine();
            if (!RT) return;
            RT.onBeforeTextureInitObservable.notifyObservers(this);
            const uT = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), FT && FT(), !this.isBlocking && eT && eT.resetCachedMaterial()
              },
              vT = (oT, IT) => {
                this._loadingError = !0, this._errorObject = {
                  message: oT,
                  exception: IT
                }, DT && DT(oT, IT), TT.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !wT) return this._delayedOnLoad = uT, void(this._delayedOnError = vT);
            if (this._texture = wT ?? this._getFromCache(this.url, XT, BT, this._invertY, hT, this.isCube), this._texture)
              if (this._texture.isReady) ST.c.SetImmediate((() => uT()));
              else {
                const TT = this._texture.onLoadedObservable.add(uT);
                this._texture.onErrorObservable.add((oT => {
                  vT(oT.message, oT.exception), this._texture?.onLoadedObservable.remove(TT)
                }))
              }
            else if (eT && eT.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = uT, this._delayedOnError = vT;
            else {
              try {
                this._texture = RT.createTexture(this.url, XT, this._invertY, eT, BT, uT, vT, this._buffer, void 0, this._format, this._forcedExtension, KT, MT, AT, hT)
              } catch (ET) {
                throw vT("error loading", ET), ET
              }
              xT && (this._buffer = null)
            }
          }
          updateURL(TT) {
            let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              IT = arguments.length > 2 ? arguments[2] : void 0,
              iT = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.pC().markAllMaterialsAsDirty(1, (TT => TT.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = TT), this.url = TT, this._buffer = oT, this._forcedExtension = iT, this.delayLoadState = 4;
            const zT = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              zT ? zT() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), IT && IT()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const TT = this.pC();
            if (!TT) return;
            let oT = this.url;
            !oT && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (oT = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(oT, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? ST.c.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = TT.Zc().createTexture(oT, this._noMipmap, this._invertY, TT, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(TT, oT, IT, iT) {
            TT *= this._cachedUScale, oT *= this._cachedVScale, TT -= this.uRotationCenter * this._cachedUScale, oT -= this.vRotationCenter * this._cachedVScale, IT -= this.wRotationCenter, WT.m.TransformCoordinatesFromFloatsToRef(TT, oT, IT, this._rowGenerationMatrix, iT), iT.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, iT.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, iT.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * TT === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * TT, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = WT.b.Zero(), this._rowGenerationMatrix = new WT.b, this._t0 = WT.m.Zero(), this._t1 = WT.m.Zero(), this._t2 = WT.m.Zero()), WT.b.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (WT.b.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, WT.i.Matrix[0]), WT.b.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, WT.i.Matrix[1]), WT.b.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, WT.i.Matrix[2]), WT.b.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, WT.i.Matrix[3]), WT.i.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(WT.i.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(WT.i.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(WT.i.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.SiT(this._t0), this._t2.SiT(this._t0), WT.b.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const oT = this.pC();
            if (!oT) return this._cachedTextureMatrix;
            const IT = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && IT !== this._cachedIdentity3x2 && oT.markAllMaterialsAsDirty(1, (TT => TT.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const oT = this.pC();
            if (!oT) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== TT.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === oT.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = WT.b.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = WT.b.Zero());
            const IT = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case TT.PLANAR_MODE:
                WT.b.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case TT.PROJECTION_MODE: {
                WT.b.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const TT = oT.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = TT.updateFlag, TT.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                WT.b.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return IT && oT.markAllMaterialsAsDirty(1, (TT => TT.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const oT = {
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
            return AT.c.Clone((() => new TT(this._texture ? this._texture.url : null, this.pC(), oT)), this)
          }
          serialize() {
            const oT = this.name;
            TT.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const IT = super.serialize(TT._SerializeInternalTextureUniqueId);
            if (!IT) return null;
            if (TT.SerializeBuffers || TT.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) IT.base64String = this._buffer, IT.name = IT.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const TT = this.mimeType || "image/png";
              IT.base64String = `data:${TT};base64,${(0,xT.f)(this._buffer)}`
            } else(TT.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (IT.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? KT(this) : MT(this));
            return IT.invertY = this._invertY, IT.samplingMode = this.samplingMode, IT._creationFlags = this._creationFlags, IT._useSRGBBuffer = this._useSRGBBuffer, TT._SerializeInternalTextureUniqueId && (IT.internalTextureUniqueId = this._texture?.uniqueId), IT.internalTextureLabel = this._texture?.label, IT.noMipmap = this._noMipmap, this.name = oT, IT
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(oT, IT, iT) {
            if (oT.customType) {
              const TT = DT.d.Instantiate(oT.customType).Parse(oT, IT, iT);
              return oT.samplingMode && TT.updateSamplingMode && TT._samplingMode && TT._samplingMode !== oT.samplingMode && TT.updateSamplingMode(oT.samplingMode), TT
            }
            if (oT.isCube && !oT.isRenderTarget) return TT._CubeTextureParser(oT, IT, iT);
            const zT = void 0 !== oT.internalTextureUniqueId;
            if (!oT.name && !oT.isRenderTarget && !zT) return null;
            let kT;
            if (zT) {
              const TT = IT.Zc().getLoadedTexturesCache();
              for (const IT of TT)
                if (IT.uniqueId === oT.internalTextureUniqueId) {
                  kT = IT;
                  break
                }
            }
            const WT = TT => {
              if (TT && TT._texture && (TT._texture._cachedWrapU = null, TT._texture._cachedWrapV = null, TT._texture._cachedWrapR = null), oT.samplingMode) {
                const IT = oT.samplingMode;
                TT && TT.samplingMode !== IT && TT.updateSamplingMode(IT)
              }
              if (TT && oT.animations)
                for (let IT = 0; IT < oT.animations.length; IT++) {
                  const iT = oT.animations[IT],
                    zT = (0, BT.d)("BABYLON.Animation");
                  zT && TT.animations.push(zT.Parse(iT))
                }
              TT && TT._texture && (zT && !kT && TT._texture._setUniqueId(oT.internalTextureUniqueId), TT._texture.label = oT.internalTextureLabel)
            };
            return AT.c.Parse((() => {
              let zT = !0;
              if (oT.noMipmap && (zT = !1), oT.mirrorPlane) {
                const iT = TT._CreateMirror(oT.name, oT.renderTargetSize, IT, zT);
                return iT._waitingRenderList = oT.renderList, iT.mirrorPlane = LT.b.FromArray(oT.mirrorPlane), WT(iT), iT
              }
              if (oT.isRenderTarget && !oT.base64String) {
                let iT = null;
                if (oT.isCube) {
                  if (IT.reflectionProbes)
                    for (let TT = 0; TT < IT.reflectionProbes.length; TT++) {
                      const iT = IT.reflectionProbes[TT];
                      if (iT.name === oT.name) return iT.cubeTexture
                    }
                } else iT = TT._CreateRenderTargetTexture(oT.name, oT.renderTargetSize, IT, zT, oT._creationFlags ?? 0), iT._waitingRenderList = oT.renderList;
                return WT(iT), iT
              }
              if (oT.isVideo) {
                const kT = TT._CreateVideoTexture(iT + (oT.url || oT.name), iT + (oT.src || oT.url), IT, zT, oT.invertY, oT.samplingMode, oT.settings || {});
                return WT(kT), kT
              } {
                let XT;
                if ("string" === typeof oT.base64String && oT.base64String && !kT) {
                  const iT = {
                      buffer: oT.base64String,
                      noMipmap: !zT,
                      invertY: oT.invertY,
                      samplingMode: oT.samplingMode,
                      useSRGBBuffer: oT._useSRGBBuffer ?? !1,
                      creationFlags: oT._creationFlags ?? 0,
                      onLoad: () => {
                        WT(XT)
                      }
                    },
                    kT = oT.base64String,
                    BT = kT.startsWith("data:") ? kT.substring(5) : kT;
                  XT = TT.CreateFromBase64String("", BT, IT, iT), XT.name = oT.name
                } else {
                  let BT;
                  BT = oT.name && (oT.name.indexOf("://") > 0 || oT.name.startsWith("data:")) ? oT.name : iT + oT.name, oT.url && (oT.url.startsWith("data:") || TT.UseSerializedUrlIfAny) && (BT = oT.url);
                  const FT = {
                    noMipmap: !zT,
                    invertY: oT.invertY,
                    samplingMode: oT.samplingMode,
                    useSRGBBuffer: oT._useSRGBBuffer ?? !1,
                    creationFlags: oT._creationFlags ?? 0,
                    onLoad: () => {
                      WT(XT)
                    },
                    internalTexture: kT
                  };
                  XT = new TT(BT, IT, FT)
                }
                return XT
              }
            }), oT, IT)
          }
          static CreateFromBase64String(oT, IT, iT, zT, kT) {
            let WT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : TT.TRILINEAR_SAMPLINGMODE;
            return new TT("data:" + IT, iT, zT, kT, WT, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, oT, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(oT, IT, iT) {
            let zT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              kT = arguments.length > 4 ? arguments[4] : void 0,
              WT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              XT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : TT.TRILINEAR_SAMPLINGMODE,
              BT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              FT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              ST = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              DT = arguments.length > 10 ? arguments[10] : void 0,
              LT = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== oT.substring(0, 5) && (oT = "data:" + oT), new TT(oT, iT, kT, WT, XT, BT, FT, IT, zT, ST, void 0, void 0, DT, LT)
          }
        }, (() => {
          const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(CT[Symbol.metadata] ?? null) : void 0;
          oT = [(0, zT.P)()], IT = [(0, zT.P)()], cT = [(0, zT.P)()], gT = [(0, zT.P)()], hT = [(0, zT.P)()], wT = [(0, zT.P)()], mT = [(0, zT.P)()], eT = [(0, zT.P)()], RT = [(0, zT.P)()], uT = [(0, zT.P)()], vT = [(0, zT.P)()], ET = [(0, zT.P)()], fT = [(0, zT.P)()], (0, iT.h)(TT, null, fT, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: TT => "isBlocking" in TT,
              get: TT => TT.isBlocking
            },
            metadata: kT
          }, null, jT), (0, iT.h)(null, null, oT, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: TT => "url" in TT,
              get: TT => TT.url,
              set: (TT, oT) => {
                TT.url = oT
              }
            },
            metadata: kT
          }, JT, UT), (0, iT.h)(null, null, IT, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: TT => "uOffset" in TT,
              get: TT => TT.uOffset,
              set: (TT, oT) => {
                TT.uOffset = oT
              }
            },
            metadata: kT
          }, aT, YT), (0, iT.h)(null, null, cT, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: TT => "vOffset" in TT,
              get: TT => TT.vOffset,
              set: (TT, oT) => {
                TT.vOffset = oT
              }
            },
            metadata: kT
          }, QT, OT), (0, iT.h)(null, null, gT, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: TT => "uScale" in TT,
              get: TT => TT.uScale,
              set: (TT, oT) => {
                TT.uScale = oT
              }
            },
            metadata: kT
          }, HT, nT), (0, iT.h)(null, null, hT, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: TT => "vScale" in TT,
              get: TT => TT.vScale,
              set: (TT, oT) => {
                TT.vScale = oT
              }
            },
            metadata: kT
          }, qT, ZT), (0, iT.h)(null, null, wT, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: TT => "uAng" in TT,
              get: TT => TT.uAng,
              set: (TT, oT) => {
                TT.uAng = oT
              }
            },
            metadata: kT
          }, lT, sT), (0, iT.h)(null, null, mT, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: TT => "vAng" in TT,
              get: TT => TT.vAng,
              set: (TT, oT) => {
                TT.vAng = oT
              }
            },
            metadata: kT
          }, tT, GT), (0, iT.h)(null, null, eT, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: TT => "wAng" in TT,
              get: TT => TT.wAng,
              set: (TT, oT) => {
                TT.wAng = oT
              }
            },
            metadata: kT
          }, pT, bT), (0, iT.h)(null, null, RT, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: TT => "uRotationCenter" in TT,
              get: TT => TT.uRotationCenter,
              set: (TT, oT) => {
                TT.uRotationCenter = oT
              }
            },
            metadata: kT
          }, yT, NT), (0, iT.h)(null, null, uT, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: TT => "vRotationCenter" in TT,
              get: TT => TT.vRotationCenter,
              set: (TT, oT) => {
                TT.vRotationCenter = oT
              }
            },
            metadata: kT
          }, PT, dT), (0, iT.h)(null, null, vT, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: TT => "wRotationCenter" in TT,
              get: TT => TT.wRotationCenter,
              set: (TT, oT) => {
                TT.wRotationCenter = oT
              }
            },
            metadata: kT
          }, VT, To), (0, iT.h)(null, null, ET, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: TT => "homogeneousRotationInUVTransform" in TT,
              get: TT => TT.homogeneousRotationInUVTransform,
              set: (TT, oT) => {
                TT.homogeneousRotationInUVTransform = oT
              }
            },
            metadata: kT
          }, oo, Io), kT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: kT
          })
        })(), TT.SerializeBuffers = !0, TT.ForceSerializeBuffers = !1, TT.OnTextureLoadErrorObservable = new kT.d, TT._SerializeInternalTextureUniqueId = !1, TT._CubeTextureParser = (TT, oT, IT) => {
          throw (0, FT.k)("CubeTexture")
        }, TT._CreateMirror = (TT, oT, IT, iT) => {
          throw (0, FT.k)("MirrorTexture")
        }, TT._CreateRenderTargetTexture = (TT, oT, IT, iT, zT) => {
          throw (0, FT.k)("RenderTargetTexture")
        }, TT.NEAREST_SAMPLINGMODE = 1, TT.NEAREST_NEAREST_MIPLINEAR = 8, TT.BILINEAR_SAMPLINGMODE = 2, TT.LINEAR_LINEAR_MIPNEAREST = 11, TT.TRILINEAR_SAMPLINGMODE = 3, TT.LINEAR_LINEAR_MIPLINEAR = 3, TT.NEAREST_NEAREST_MIPNEAREST = 4, TT.NEAREST_LINEAR_MIPNEAREST = 5, TT.NEAREST_LINEAR_MIPLINEAR = 6, TT.NEAREST_LINEAR = 7, TT.NEAREST_NEAREST = 1, TT.LINEAR_NEAREST_MIPNEAREST = 9, TT.LINEAR_NEAREST_MIPLINEAR = 10, TT.LINEAR_LINEAR = 2, TT.LINEAR_NEAREST = 12, TT.EXPLICIT_MODE = 0, TT.SPHERICAL_MODE = 1, TT.PLANAR_MODE = 2, TT.CUBIC_MODE = 3, TT.PROJECTION_MODE = 4, TT.SKYBOX_MODE = 5, TT.INVCUBIC_MODE = 6, TT.EQUIRECTANGULAR_MODE = 7, TT.FIXED_EQUIRECTANGULAR_MODE = 8, TT.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, TT.CLAMP_ADDRESSMODE = 0, TT.WRAP_ADDRESSMODE = 1, TT.MIRROR_ADDRESSMODE = 2, TT.UseSerializedUrlIfAny = !1, TT
      })(),
      hT = !1;

    function wT() {
      hT || (hT = !0, (0, BT.h)("BABYLON.Texture", gT), AT.c._TextureParser = gT.Parse)
    }
  },
  38790: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT
    });
    class iT {
      constructor(TT, oT) {
        this.width = TT, this.height = oT
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let TT = 0 | this.width;
        return TT = 397 * TT ^ this.height, TT
      }
      SIT(TT) {
        this.width = TT.width, this.height = TT.height
      }
      S_(TT, oT) {
        return this.width = TT, this.height = oT, this
      }
      set(TT, oT) {
        return this.S_(TT, oT)
      }
      multiplyByFloats(TT, oT) {
        return new iT(this.width * TT, this.height * oT)
      }
      clone() {
        return new iT(this.width, this.height)
      }
      equals(TT) {
        return !!TT && (this.width === TT.width && this.height === TT.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new iT(0, 0)
      }
      add(TT) {
        return new iT(this.width + TT.width, this.height + TT.height)
      }
      subtract(TT) {
        return new iT(this.width - TT.width, this.height - TT.height)
      }
      scale(TT) {
        return new iT(this.width * TT, this.height * TT)
      }
      static Lerp(TT, oT, IT) {
        const zT = TT.width + (oT.width - TT.width) * IT,
          kT = TT.height + (oT.height - TT.height) * IT;
        return new iT(zT, kT)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);