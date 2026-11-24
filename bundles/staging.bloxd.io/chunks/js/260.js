export const id = 260;
export const ids = [260];
export const modules = {
  40564: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => WT
    });
    let WT = !1
  },
  40088: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => BT
    });
    var WT = mT(40095),
      zT = mT(40102),
      MT = mT(37219),
      gT = mT(37188),
      nT = mT(37216),
      HT = mT(38045),
      kT = mT(40114);
    class jT {
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
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = kT.d.Zero(), this._cachedBaseSize = kT.d.Zero(), this._initialSamplingMode = 2, this._texture = jT._IsRenderTargetWrapper(TT) ? TT.texture : TT, this._texture && (this._engine = this._texture.eB(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(TT, this._texture, this._texture.generateMipMaps && UT)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var lT, LT = mT(40122),
      pT = mT(39965);
    let BT = (() => {
      var TT;
      let UT, mT, kT, lT, pT, BT, ZT, cT, vT, fT, qT, iT, bT, OT, eT, YT, JT, xT, dT, wT, tT, aT, yT, XT, IT, QT = jT,
        sT = [],
        FT = [],
        PT = [],
        VT = [],
        uT = [],
        CT = [],
        rT = [],
        KT = [],
        ST = [],
        GT = [],
        NT = [],
        ET = [],
        hT = [],
        DT = [],
        oT = [],
        AT = [],
        RT = [],
        TU = [],
        UU = [],
        mU = [],
        WU = [],
        zU = [],
        MU = [],
        gU = [],
        nU = [],
        HU = [],
        kU = [],
        jU = [],
        lU = [],
        LU = [],
        pU = [];
      return TT = class extends QT {
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
          this.KF()?.markAllMaterialsAsDirty(1, (TT => TT.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(TT) {
          TT !== this.isRGBD && (this._texture && (this._texture._isRGBD = TT), this.KF()?.markAllMaterialsAsDirty(1, (TT => TT.hasTexture(this))))
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
          return this._uid || (this._uid = (0, HT.c)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(TT) {
          this._onDisposeObserver && this.SF.remove(this._onDisposeObserver), this._onDisposeObserver = this.SF.add(TT)
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
        constructor(UT) {
          let mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, WT.k)(this, sT), (0, WT.k)(this, FT, void 0)), this.name = ((0, WT.k)(this, PT), (0, WT.k)(this, VT, void 0)), this.displayName = ((0, WT.k)(this, uT), (0, WT.k)(this, CT, void 0)), this.metadata = ((0, WT.k)(this, rT), (0, WT.k)(this, KT, null)), this._internalMetadata = (0, WT.k)(this, ST), this.reservedDataStore = null, this._hasAlpha = (0, WT.k)(this, GT, !1), this._getAlphaFromRGB = ((0, WT.k)(this, NT), (0, WT.k)(this, ET, !1)), this.level = ((0, WT.k)(this, hT), (0, WT.k)(this, DT, 1)), this._coordinatesIndex = ((0, WT.k)(this, oT), (0, WT.k)(this, AT, 0)), this.optimizeUVAllocation = ((0, WT.k)(this, RT), (0, WT.k)(this, TU, !0)), this._coordinatesMode = ((0, WT.k)(this, UU), (0, WT.k)(this, mU, 0)), this.wrapR = ((0, WT.k)(this, WU), (0, WT.k)(this, zU, 1)), this.anisotropicFilteringLevel = ((0, WT.k)(this, MU), (0, WT.k)(this, gU, TT.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, WT.k)(this, nU), !1), this._gammaSpace = !0, this.invertZ = (0, WT.k)(this, HU, !1), this.lodLevelInAlpha = ((0, WT.k)(this, kU), (0, WT.k)(this, jU, !1)), this._dominantDirection = ((0, WT.k)(this, lU), null), this.isRenderTarget = (0, WT.k)(this, LU, !1), this._prefiltered = ((0, WT.k)(this, pU), !1), this._forceSerialize = !1, this.animations = [], this.SF = new MT.d, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, UT ? TT._IsScene(UT) ? this._scene = UT : this._engine = UT : this._scene = nT.c.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.eB()), this._texture = mT, this._uid = null
        }
        KF() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return gT.e.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return gT.e.IdentityReadOnly
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
        _getFromCache(TT, UT, mT, WT, zT, MT) {
          const gT = this._getEngine();
          if (!gT) return null;
          const nT = gT._getUseSRGBBuffer(!!zT, UT),
            HT = gT.getLoadedTexturesCache();
          for (let kT = 0; kT < HT.length; kT++) {
            const gT = HT[kT];
            if ((void 0 === zT || nT === gT._useSRGBBuffer) && (void 0 === WT || WT === gT.invertY) && gT.url === TT && gT.generateMipMaps === !UT && (!mT || mT === gT.samplingMode) && (void 0 === MT || MT === gT.isCube)) return gT.incrementReferences(), gT
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
          const TT = this.KF();
          TT && TT.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            WT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            gT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            nT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            HT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const kT = this._getEngine();
          if (!kT) return null;
          const jT = this.getSize();
          let lT = jT.width,
            LT = jT.height;
          0 !== UT && (lT /= Math.pow(2, UT), LT /= Math.pow(2, UT), lT = Math.round(lT), LT = Math.round(LT)), nT = Math.min(lT, nT), HT = Math.min(LT, HT);
          try {
            return this._texture.isCube || this._texture.is2DArray ? kT._readTexturePixels(this._texture, nT, HT, TT, UT, mT, WT, zT, MT, gT) : kT._readTexturePixels(this._texture, nT, HT, -1, UT, mT, WT, zT, MT, gT)
          } catch (pT) {
            return null
          }
        }
        _readPixelsSync() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            WT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const MT = this.getSize();
          let gT = MT.width,
            nT = MT.height;
          const HT = this._getEngine();
          if (!HT) return null;
          0 != UT && (gT /= Math.pow(2, UT), nT /= Math.pow(2, UT), gT = Math.round(gT), nT = Math.round(nT));
          try {
            return this._texture.isCube ? HT._readTexturePixelsSync(this._texture, gT, nT, TT, UT, mT, WT, zT) : HT._readTexturePixelsSync(this._texture, gT, nT, -1, UT, mT, WT, zT)
          } catch (kT) {
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
          this.SF.notifyObservers(this), this.SF.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !TT) return null;
          const UT = LT.e.Serialize(this);
          return LT.e.AppendSerializedAnimations(this, UT), UT
        }
        static WhenAllReady(TT, UT) {
          let mT = TT.length;
          if (0 !== mT)
            for (let WT = 0; WT < TT.length; WT++) {
              const zT = TT[WT];
              if (zT.isReady()) 0 === --mT && UT();
              else {
                const TT = zT.onLoadObservable;
                TT ? TT.addOnce((() => {
                  0 === --mT && UT()
                })) : 0 === --mT && UT()
              }
            } else UT()
        }
        static _IsScene(TT) {
          return "Scene" === TT.getClassName()
        }
      }, (() => {
        const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(QT[Symbol.metadata] ?? null) : void 0;
        UT = [(0, zT.L)()], mT = [(0, zT.L)()], kT = [(0, zT.L)()], lT = [(0, zT.L)()], pT = [(0, zT.L)("hasAlpha")], BT = [(0, zT.L)("getAlphaFromRGB")], ZT = [(0, zT.L)()], cT = [(0, zT.L)("coordinatesIndex")], vT = [(0, zT.L)()], fT = [(0, zT.L)("coordinatesMode")], qT = [(0, zT.L)()], iT = [(0, zT.L)()], bT = [(0, zT.L)()], OT = [(0, zT.L)()], eT = [(0, zT.L)()], YT = [(0, zT.L)()], JT = [(0, zT.L)()], xT = [(0, zT.L)()], dT = [(0, zT.L)()], wT = [(0, zT.L)()], tT = [(0, zT.L)()], aT = [(0, zT.L)()], yT = [(0, zT.L)()], XT = [(0, zT.C)()], IT = [(0, zT.L)()], (0, WT.h)(TT, null, qT, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: TT => "wrapU" in TT,
            get: TT => TT.wrapU
          },
          metadata: MT
        }, null, sT), (0, WT.h)(TT, null, iT, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: TT => "wrapV" in TT,
            get: TT => TT.wrapV
          },
          metadata: MT
        }, null, sT), (0, WT.h)(TT, null, eT, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: TT => "isCube" in TT,
            get: TT => TT.isCube
          },
          metadata: MT
        }, null, sT), (0, WT.h)(TT, null, YT, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: TT => "is3D" in TT,
            get: TT => TT.is3D
          },
          metadata: MT
        }, null, sT), (0, WT.h)(TT, null, JT, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: TT => "is2DArray" in TT,
            get: TT => TT.is2DArray
          },
          metadata: MT
        }, null, sT), (0, WT.h)(TT, null, xT, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: TT => "gammaSpace" in TT,
            get: TT => TT.gammaSpace
          },
          metadata: MT
        }, null, sT), (0, WT.h)(TT, null, tT, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: TT => "lodGenerationOffset" in TT,
            get: TT => TT.lodGenerationOffset
          },
          metadata: MT
        }, null, sT), (0, WT.h)(TT, null, aT, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: TT => "lodGenerationScale" in TT,
            get: TT => TT.lodGenerationScale
          },
          metadata: MT
        }, null, sT), (0, WT.h)(TT, null, yT, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: TT => "linearSpecularLOD" in TT,
            get: TT => TT.linearSpecularLOD
          },
          metadata: MT
        }, null, sT), (0, WT.h)(TT, null, XT, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "irradianceTexture" in TT,
            get: TT => TT.irradianceTexture
          },
          metadata: MT
        }, null, sT), (0, WT.h)(null, null, UT, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: TT => "uniqueId" in TT,
            get: TT => TT.uniqueId,
            set: (TT, UT) => {
              TT.uniqueId = UT
            }
          },
          metadata: MT
        }, FT, PT), (0, WT.h)(null, null, mT, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: TT => "name" in TT,
            get: TT => TT.name,
            set: (TT, UT) => {
              TT.name = UT
            }
          },
          metadata: MT
        }, VT, uT), (0, WT.h)(null, null, kT, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: TT => "displayName" in TT,
            get: TT => TT.displayName,
            set: (TT, UT) => {
              TT.displayName = UT
            }
          },
          metadata: MT
        }, CT, rT), (0, WT.h)(null, null, lT, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: TT => "metadata" in TT,
            get: TT => TT.metadata,
            set: (TT, UT) => {
              TT.metadata = UT
            }
          },
          metadata: MT
        }, KT, ST), (0, WT.h)(null, null, pT, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: TT => "_hasAlpha" in TT,
            get: TT => TT._hasAlpha,
            set: (TT, UT) => {
              TT._hasAlpha = UT
            }
          },
          metadata: MT
        }, GT, NT), (0, WT.h)(null, null, BT, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: TT => "_getAlphaFromRGB" in TT,
            get: TT => TT._getAlphaFromRGB,
            set: (TT, UT) => {
              TT._getAlphaFromRGB = UT
            }
          },
          metadata: MT
        }, ET, hT), (0, WT.h)(null, null, ZT, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: TT => "level" in TT,
            get: TT => TT.level,
            set: (TT, UT) => {
              TT.level = UT
            }
          },
          metadata: MT
        }, DT, oT), (0, WT.h)(null, null, cT, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: TT => "_coordinatesIndex" in TT,
            get: TT => TT._coordinatesIndex,
            set: (TT, UT) => {
              TT._coordinatesIndex = UT
            }
          },
          metadata: MT
        }, AT, RT), (0, WT.h)(null, null, vT, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: TT => "optimizeUVAllocation" in TT,
            get: TT => TT.optimizeUVAllocation,
            set: (TT, UT) => {
              TT.optimizeUVAllocation = UT
            }
          },
          metadata: MT
        }, TU, UU), (0, WT.h)(null, null, fT, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "_coordinatesMode" in TT,
            get: TT => TT._coordinatesMode,
            set: (TT, UT) => {
              TT._coordinatesMode = UT
            }
          },
          metadata: MT
        }, mU, WU), (0, WT.h)(null, null, bT, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: TT => "wrapR" in TT,
            get: TT => TT.wrapR,
            set: (TT, UT) => {
              TT.wrapR = UT
            }
          },
          metadata: MT
        }, zU, MU), (0, WT.h)(null, null, OT, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: TT => "anisotropicFilteringLevel" in TT,
            get: TT => TT.anisotropicFilteringLevel,
            set: (TT, UT) => {
              TT.anisotropicFilteringLevel = UT
            }
          },
          metadata: MT
        }, gU, nU), (0, WT.h)(null, null, dT, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: TT => "invertZ" in TT,
            get: TT => TT.invertZ,
            set: (TT, UT) => {
              TT.invertZ = UT
            }
          },
          metadata: MT
        }, HU, kU), (0, WT.h)(null, null, wT, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: TT => "lodLevelInAlpha" in TT,
            get: TT => TT.lodLevelInAlpha,
            set: (TT, UT) => {
              TT.lodLevelInAlpha = UT
            }
          },
          metadata: MT
        }, jU, lU), (0, WT.h)(null, null, IT, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: TT => "isRenderTarget" in TT,
            get: TT => TT.isRenderTarget,
            set: (TT, UT) => {
              TT.isRenderTarget = UT
            }
          },
          metadata: MT
        }, LU, pU), MT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: MT
        })
      })(), TT.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, TT
    })();
    (lT = BT.prototype).forceSphericalPolynomialsRecompute ?? (lT.forceSphericalPolynomialsRecompute = (0, pT.j)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(BT.prototype, "sphericalPolynomial") || Object.defineProperty(BT.prototype, "sphericalPolynomial", (0, pT.h)("BaseTexture", "sphericalPolynomial"))
  },
  40602: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => bT,
      g: () => qT
    });
    var WT = mT(40095),
      zT = mT(40102),
      MT = mT(37219),
      gT = mT(37188),
      nT = mT(40088),
      HT = mT(37239),
      kT = mT(39965),
      jT = mT(39975),
      lT = mT(40208),
      LT = mT(37889),
      pT = mT(40165);

    function BT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const WT = UT.width,
        zT = UT.height;
      if (TT instanceof Float32Array) {
        let UT = TT.byteLength / TT.BYTES_PER_ELEMENT;
        const mT = new Uint8Array(UT);
        for (; --UT >= 0;) {
          let WT = TT[UT];
          WT < 0 ? WT = 0 : WT > 1 && (WT = 1), mT[UT] = 255 * WT
        }
        TT = mT
      }
      const MT = document.createElement("canvas");
      MT.width = WT, MT.height = zT;
      const gT = MT.getContext("2d");
      if (!gT) return null;
      const nT = gT.createImageData(WT, zT);
      if (nT.data.set(TT), gT.putImageData(nT, 0, 0), mT) {
        const TT = document.createElement("canvas");
        TT.width = WT, TT.height = zT;
        const UT = TT.getContext("2d");
        return UT ? (UT.translate(0, zT), UT.scale(1, -1), UT.drawImage(MT, 0, 0), TT.toDataURL("image/png")) : null
      }
      return MT.toDataURL("image/png")
    }

    function ZT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const WT = TT.getInternalTexture();
      if (!WT) return null;
      const zT = TT._readPixelsSync(UT, mT);
      return zT ? BT(zT, TT.getSize(), WT.invertY) : null
    }
    async function cT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const WT = TT.getInternalTexture();
      if (!WT) return null;
      const zT = await TT.readPixels(UT, mT);
      return zT ? BT(zT, TT.getSize(), WT.invertY) : null
    }
    var vT = mT(40564),
      fT = mT(40122);
    let qT = (() => {
        var TT;
        let UT, mT, BT, qT, iT, bT, OT, eT, YT, JT, xT, dT, wT, tT = nT.c,
          aT = [],
          yT = [],
          XT = [],
          IT = [],
          QT = [],
          sT = [],
          FT = [],
          PT = [],
          VT = [],
          uT = [],
          CT = [],
          rT = [],
          KT = [],
          ST = [],
          GT = [],
          NT = [],
          ET = [],
          hT = [],
          DT = [],
          oT = [],
          AT = [],
          RT = [],
          TU = [],
          UU = [],
          mU = [];
        return TT = class extends tT {
          static _CreateVideoTexture(UT, mT, WT) {
            arguments.length > 5 && void 0 !== arguments[5] || TT.TRILINEAR_SAMPLINGMODE;
            throw (0, kT.k)("VideoTexture")
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
          constructor(UT, mT, zT, gT) {
            let nT, HT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : TT.TRILINEAR_SAMPLINGMODE,
              kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              lT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              LT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              pT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              BT = arguments.length > 9 ? arguments[9] : void 0,
              ZT = arguments.length > 10 ? arguments[10] : void 0,
              cT = arguments.length > 11 ? arguments[11] : void 0,
              fT = arguments.length > 12 ? arguments[12] : void 0,
              qT = arguments.length > 13 ? arguments[13] : void 0;
            super(mT), this.url = ((0, WT.k)(this, aT), (0, WT.k)(this, yT, null)), this.uOffset = ((0, WT.k)(this, XT), (0, WT.k)(this, IT, 0)), this.vOffset = ((0, WT.k)(this, QT), (0, WT.k)(this, sT, 0)), this.uScale = ((0, WT.k)(this, FT), (0, WT.k)(this, PT, 1)), this.vScale = ((0, WT.k)(this, VT), (0, WT.k)(this, uT, 1)), this.uAng = ((0, WT.k)(this, CT), (0, WT.k)(this, rT, 0)), this.vAng = ((0, WT.k)(this, KT), (0, WT.k)(this, ST, 0)), this.wAng = ((0, WT.k)(this, GT), (0, WT.k)(this, NT, 0)), this.uRotationCenter = ((0, WT.k)(this, ET), (0, WT.k)(this, hT, .5)), this.vRotationCenter = ((0, WT.k)(this, DT), (0, WT.k)(this, oT, .5)), this.wRotationCenter = ((0, WT.k)(this, AT), (0, WT.k)(this, RT, .5)), this.homogeneousRotationInUVTransform = ((0, WT.k)(this, TU), (0, WT.k)(this, UU, !1)), this.inspectableCustomProperties = ((0, WT.k)(this, mU), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new MT.d, this._isBlocking = !0, this.name = UT || "", this.url = UT;
            let iT = !1,
              bT = null,
              OT = !0;
            "object" === typeof zT && null !== zT ? (nT = zT.noMipmap ?? !1, gT = zT.invertY ?? !vT.c, HT = zT.samplingMode ?? TT.TRILINEAR_SAMPLINGMODE, kT = zT.onLoad ?? null, lT = zT.onError ?? null, LT = zT.buffer ?? null, pT = zT.deleteBuffer ?? !1, BT = zT.format, ZT = zT.mimeType, cT = zT.loaderOptions, fT = zT.creationFlags, iT = zT.useSRGBBuffer ?? !1, bT = zT.internalTexture ?? null, OT = zT.gammaSpace ?? OT, qT = zT.forcedExtension ?? qT) : nT = !!zT, this._gammaSpace = OT, this._noMipmap = nT, this._invertY = void 0 === gT ? !vT.c : gT, this._initialSamplingMode = HT, this._buffer = LT, this._deleteBuffer = pT, this._mimeType = ZT, this._loaderOptions = cT, this._creationFlags = fT, this._useSRGBBuffer = iT, this._forcedExtension = qT, void 0 !== BT && (this._format = BT);
            const eT = this.KF(),
              YT = this._getEngine();
            if (!YT) return;
            YT.onBeforeTextureInitObservable.notifyObservers(this);
            const JT = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), kT && kT(), !this.isBlocking && eT && eT.resetCachedMaterial()
              },
              xT = (UT, mT) => {
                this._loadingError = !0, this._errorObject = {
                  message: UT,
                  exception: mT
                }, lT && lT(UT, mT), TT.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !bT) return this._delayedOnLoad = JT, void(this._delayedOnError = xT);
            if (this._texture = bT ?? this._getFromCache(this.url, nT, HT, this._invertY, iT, this.isCube), this._texture)
              if (this._texture.isReady) jT.e.SetImmediate((() => JT()));
              else {
                const TT = this._texture.onLoadedObservable.add(JT);
                this._texture.onErrorObservable.add((UT => {
                  xT(UT.message, UT.exception), this._texture?.onLoadedObservable.remove(TT)
                }))
              }
            else if (eT && eT.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = JT, this._delayedOnError = xT;
            else {
              try {
                this._texture = YT.createTexture(this.url, nT, this._invertY, eT, HT, JT, xT, this._buffer, void 0, this._format, this._forcedExtension, ZT, cT, fT, iT)
              } catch (dT) {
                throw xT("error loading", dT), dT
              }
              pT && (this._buffer = null)
            }
          }
          updateURL(TT) {
            let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              mT = arguments.length > 2 ? arguments[2] : void 0,
              WT = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.KF().markAllMaterialsAsDirty(1, (TT => TT.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = TT), this.url = TT, this._buffer = UT, this._forcedExtension = WT, this.delayLoadState = 4;
            const zT = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              zT ? zT() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), mT && mT()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const TT = this.KF();
            if (!TT) return;
            let UT = this.url;
            !UT && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (UT = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(UT, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? jT.e.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = TT.eB().createTexture(UT, this._noMipmap, this._invertY, TT, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(TT, UT, mT, WT) {
            TT *= this._cachedUScale, UT *= this._cachedVScale, TT -= this.uRotationCenter * this._cachedUScale, UT -= this.vRotationCenter * this._cachedVScale, mT -= this.wRotationCenter, gT.p.TransformCoordinatesFromFloatsToRef(TT, UT, mT, this._rowGenerationMatrix, WT), WT.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, WT.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, WT.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * TT === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * TT, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = gT.e.Zero(), this._rowGenerationMatrix = new gT.e, this._t0 = gT.p.Zero(), this._t1 = gT.p.Zero(), this._t2 = gT.p.Zero()), gT.e.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (gT.e.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, gT.l.Matrix[0]), gT.e.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, gT.l.Matrix[1]), gT.e.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, gT.l.Matrix[2]), gT.e.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, gT.l.Matrix[3]), gT.l.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(gT.l.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(gT.l.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(gT.l.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.FWT(this._t0), this._t2.FWT(this._t0), gT.e.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const UT = this.KF();
            if (!UT) return this._cachedTextureMatrix;
            const mT = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && mT !== this._cachedIdentity3x2 && UT.markAllMaterialsAsDirty(1, (TT => TT.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const UT = this.KF();
            if (!UT) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== TT.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === UT.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = gT.e.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = gT.e.Zero());
            const mT = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case TT.PLANAR_MODE:
                gT.e.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case TT.PROJECTION_MODE: {
                gT.e.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const TT = UT.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = TT.updateFlag, TT.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                gT.e.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return mT && UT.markAllMaterialsAsDirty(1, (TT => TT.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const UT = {
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
            return fT.e.Clone((() => new TT(this._texture ? this._texture.url : null, this.KF(), UT)), this)
          }
          serialize() {
            const UT = this.name;
            TT.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const mT = super.serialize(TT._SerializeInternalTextureUniqueId);
            if (!mT) return null;
            if (TT.SerializeBuffers || TT.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) mT.base64String = this._buffer, mT.name = mT.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const TT = this.mimeType || "image/png";
              mT.base64String = `data:${TT};base64,${(0,pT.j)(this._buffer)}`
            } else(TT.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (mT.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? ZT(this) : cT(this));
            return mT.invertY = this._invertY, mT.samplingMode = this.samplingMode, mT._creationFlags = this._creationFlags, mT._useSRGBBuffer = this._useSRGBBuffer, TT._SerializeInternalTextureUniqueId && (mT.internalTextureUniqueId = this._texture?.uniqueId), mT.internalTextureLabel = this._texture?.label, mT.noMipmap = this._noMipmap, this.name = UT, mT
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(UT, mT, WT) {
            if (UT.customType) {
              const TT = lT.c.Instantiate(UT.customType).Parse(UT, mT, WT);
              return UT.samplingMode && TT.updateSamplingMode && TT._samplingMode && TT._samplingMode !== UT.samplingMode && TT.updateSamplingMode(UT.samplingMode), TT
            }
            if (UT.isCube && !UT.isRenderTarget) return TT._CubeTextureParser(UT, mT, WT);
            const zT = void 0 !== UT.internalTextureUniqueId;
            if (!UT.name && !UT.isRenderTarget && !zT) return null;
            let MT;
            if (zT) {
              const TT = mT.eB().getLoadedTexturesCache();
              for (const mT of TT)
                if (mT.uniqueId === UT.internalTextureUniqueId) {
                  MT = mT;
                  break
                }
            }
            const gT = TT => {
              if (TT && TT._texture && (TT._texture._cachedWrapU = null, TT._texture._cachedWrapV = null, TT._texture._cachedWrapR = null), UT.samplingMode) {
                const mT = UT.samplingMode;
                TT && TT.samplingMode !== mT && TT.updateSamplingMode(mT)
              }
              if (TT && UT.animations)
                for (let mT = 0; mT < UT.animations.length; mT++) {
                  const WT = UT.animations[mT],
                    zT = (0, HT.d)("BABYLON.Animation");
                  zT && TT.animations.push(zT.Parse(WT))
                }
              TT && TT._texture && (zT && !MT && TT._texture._setUniqueId(UT.internalTextureUniqueId), TT._texture.label = UT.internalTextureLabel)
            };
            return fT.e.Parse((() => {
              let zT = !0;
              if (UT.noMipmap && (zT = !1), UT.mirrorPlane) {
                const WT = TT._CreateMirror(UT.name, UT.renderTargetSize, mT, zT);
                return WT._waitingRenderList = UT.renderList, WT.mirrorPlane = LT.e.FromArray(UT.mirrorPlane), gT(WT), WT
              }
              if (UT.isRenderTarget && !UT.base64String) {
                let WT = null;
                if (UT.isCube) {
                  if (mT.reflectionProbes)
                    for (let TT = 0; TT < mT.reflectionProbes.length; TT++) {
                      const WT = mT.reflectionProbes[TT];
                      if (WT.name === UT.name) return WT.cubeTexture
                    }
                } else WT = TT._CreateRenderTargetTexture(UT.name, UT.renderTargetSize, mT, zT, UT._creationFlags ?? 0), WT._waitingRenderList = UT.renderList;
                return gT(WT), WT
              }
              if (UT.isVideo) {
                const MT = TT._CreateVideoTexture(WT + (UT.url || UT.name), WT + (UT.src || UT.url), mT, zT, UT.invertY, UT.samplingMode, UT.settings || {});
                return gT(MT), MT
              } {
                let nT;
                if ("string" === typeof UT.base64String && UT.base64String && !MT) {
                  const WT = {
                      buffer: UT.base64String,
                      noMipmap: !zT,
                      invertY: UT.invertY,
                      samplingMode: UT.samplingMode,
                      useSRGBBuffer: UT._useSRGBBuffer ?? !1,
                      creationFlags: UT._creationFlags ?? 0,
                      onLoad: () => {
                        gT(nT)
                      }
                    },
                    MT = UT.base64String,
                    HT = MT.startsWith("data:") ? MT.substring(5) : MT;
                  nT = TT.CreateFromBase64String("", HT, mT, WT), nT.name = UT.name
                } else {
                  let HT;
                  HT = UT.name && (UT.name.indexOf("://") > 0 || UT.name.startsWith("data:")) ? UT.name : WT + UT.name, UT.url && (UT.url.startsWith("data:") || TT.UseSerializedUrlIfAny) && (HT = UT.url);
                  const kT = {
                    noMipmap: !zT,
                    invertY: UT.invertY,
                    samplingMode: UT.samplingMode,
                    useSRGBBuffer: UT._useSRGBBuffer ?? !1,
                    creationFlags: UT._creationFlags ?? 0,
                    onLoad: () => {
                      gT(nT)
                    },
                    internalTexture: MT
                  };
                  nT = new TT(HT, mT, kT)
                }
                return nT
              }
            }), UT, mT)
          }
          static CreateFromBase64String(UT, mT, WT, zT, MT) {
            let gT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : TT.TRILINEAR_SAMPLINGMODE;
            return new TT("data:" + mT, WT, zT, MT, gT, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, UT, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(UT, mT, WT) {
            let zT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              MT = arguments.length > 4 ? arguments[4] : void 0,
              gT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              nT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : TT.TRILINEAR_SAMPLINGMODE,
              HT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              kT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              jT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              lT = arguments.length > 10 ? arguments[10] : void 0,
              LT = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== UT.substring(0, 5) && (UT = "data:" + UT), new TT(UT, WT, MT, gT, nT, HT, kT, mT, zT, jT, void 0, void 0, lT, LT)
          }
        }, (() => {
          const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(tT[Symbol.metadata] ?? null) : void 0;
          UT = [(0, zT.L)()], mT = [(0, zT.L)()], BT = [(0, zT.L)()], qT = [(0, zT.L)()], iT = [(0, zT.L)()], bT = [(0, zT.L)()], OT = [(0, zT.L)()], eT = [(0, zT.L)()], YT = [(0, zT.L)()], JT = [(0, zT.L)()], xT = [(0, zT.L)()], dT = [(0, zT.L)()], wT = [(0, zT.L)()], (0, WT.h)(TT, null, wT, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: TT => "isBlocking" in TT,
              get: TT => TT.isBlocking
            },
            metadata: MT
          }, null, aT), (0, WT.h)(null, null, UT, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: TT => "url" in TT,
              get: TT => TT.url,
              set: (TT, UT) => {
                TT.url = UT
              }
            },
            metadata: MT
          }, yT, XT), (0, WT.h)(null, null, mT, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: TT => "uOffset" in TT,
              get: TT => TT.uOffset,
              set: (TT, UT) => {
                TT.uOffset = UT
              }
            },
            metadata: MT
          }, IT, QT), (0, WT.h)(null, null, BT, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: TT => "vOffset" in TT,
              get: TT => TT.vOffset,
              set: (TT, UT) => {
                TT.vOffset = UT
              }
            },
            metadata: MT
          }, sT, FT), (0, WT.h)(null, null, qT, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: TT => "uScale" in TT,
              get: TT => TT.uScale,
              set: (TT, UT) => {
                TT.uScale = UT
              }
            },
            metadata: MT
          }, PT, VT), (0, WT.h)(null, null, iT, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: TT => "vScale" in TT,
              get: TT => TT.vScale,
              set: (TT, UT) => {
                TT.vScale = UT
              }
            },
            metadata: MT
          }, uT, CT), (0, WT.h)(null, null, bT, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: TT => "uAng" in TT,
              get: TT => TT.uAng,
              set: (TT, UT) => {
                TT.uAng = UT
              }
            },
            metadata: MT
          }, rT, KT), (0, WT.h)(null, null, OT, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: TT => "vAng" in TT,
              get: TT => TT.vAng,
              set: (TT, UT) => {
                TT.vAng = UT
              }
            },
            metadata: MT
          }, ST, GT), (0, WT.h)(null, null, eT, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: TT => "wAng" in TT,
              get: TT => TT.wAng,
              set: (TT, UT) => {
                TT.wAng = UT
              }
            },
            metadata: MT
          }, NT, ET), (0, WT.h)(null, null, YT, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: TT => "uRotationCenter" in TT,
              get: TT => TT.uRotationCenter,
              set: (TT, UT) => {
                TT.uRotationCenter = UT
              }
            },
            metadata: MT
          }, hT, DT), (0, WT.h)(null, null, JT, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: TT => "vRotationCenter" in TT,
              get: TT => TT.vRotationCenter,
              set: (TT, UT) => {
                TT.vRotationCenter = UT
              }
            },
            metadata: MT
          }, oT, AT), (0, WT.h)(null, null, xT, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: TT => "wRotationCenter" in TT,
              get: TT => TT.wRotationCenter,
              set: (TT, UT) => {
                TT.wRotationCenter = UT
              }
            },
            metadata: MT
          }, RT, TU), (0, WT.h)(null, null, dT, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: TT => "homogeneousRotationInUVTransform" in TT,
              get: TT => TT.homogeneousRotationInUVTransform,
              set: (TT, UT) => {
                TT.homogeneousRotationInUVTransform = UT
              }
            },
            metadata: MT
          }, UU, mU), MT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MT
          })
        })(), TT.SerializeBuffers = !0, TT.ForceSerializeBuffers = !1, TT.OnTextureLoadErrorObservable = new MT.d, TT._SerializeInternalTextureUniqueId = !1, TT._CubeTextureParser = (TT, UT, mT) => {
          throw (0, kT.k)("CubeTexture")
        }, TT._CreateMirror = (TT, UT, mT, WT) => {
          throw (0, kT.k)("MirrorTexture")
        }, TT._CreateRenderTargetTexture = (TT, UT, mT, WT, zT) => {
          throw (0, kT.k)("RenderTargetTexture")
        }, TT.NEAREST_SAMPLINGMODE = 1, TT.NEAREST_NEAREST_MIPLINEAR = 8, TT.BILINEAR_SAMPLINGMODE = 2, TT.LINEAR_LINEAR_MIPNEAREST = 11, TT.TRILINEAR_SAMPLINGMODE = 3, TT.LINEAR_LINEAR_MIPLINEAR = 3, TT.NEAREST_NEAREST_MIPNEAREST = 4, TT.NEAREST_LINEAR_MIPNEAREST = 5, TT.NEAREST_LINEAR_MIPLINEAR = 6, TT.NEAREST_LINEAR = 7, TT.NEAREST_NEAREST = 1, TT.LINEAR_NEAREST_MIPNEAREST = 9, TT.LINEAR_NEAREST_MIPLINEAR = 10, TT.LINEAR_LINEAR = 2, TT.LINEAR_NEAREST = 12, TT.EXPLICIT_MODE = 0, TT.SPHERICAL_MODE = 1, TT.PLANAR_MODE = 2, TT.CUBIC_MODE = 3, TT.PROJECTION_MODE = 4, TT.SKYBOX_MODE = 5, TT.INVCUBIC_MODE = 6, TT.EQUIRECTANGULAR_MODE = 7, TT.FIXED_EQUIRECTANGULAR_MODE = 8, TT.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, TT.CLAMP_ADDRESSMODE = 0, TT.WRAP_ADDRESSMODE = 1, TT.MIRROR_ADDRESSMODE = 2, TT.UseSerializedUrlIfAny = !1, TT
      })(),
      iT = !1;

    function bT() {
      iT || (iT = !0, (0, HT.h)("BABYLON.Texture", qT), fT.e._TextureParser = qT.Parse)
    }
  },
  40114: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => WT
    });
    class WT {
      constructor(TT, UT) {
        this.width = TT, this.height = UT
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
      Gw(TT) {
        this.width = TT.width, this.height = TT.height
      }
      J9(TT, UT) {
        return this.width = TT, this.height = UT, this
      }
      set(TT, UT) {
        return this.J9(TT, UT)
      }
      multiplyByFloats(TT, UT) {
        return new WT(this.width * TT, this.height * UT)
      }
      clone() {
        return new WT(this.width, this.height)
      }
      equals(TT) {
        return !!TT && (this.width === TT.width && this.height === TT.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new WT(0, 0)
      }
      add(TT) {
        return new WT(this.width + TT.width, this.height + TT.height)
      }
      subtract(TT) {
        return new WT(this.width - TT.width, this.height - TT.height)
      }
      scale(TT) {
        return new WT(this.width * TT, this.height * TT)
      }
      static Lerp(TT, UT, mT) {
        const zT = TT.width + (UT.width - TT.width) * mT,
          MT = TT.height + (UT.height - TT.height) * mT;
        return new WT(zT, MT)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);