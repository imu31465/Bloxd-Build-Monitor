export const id = 248;
export const ids = [248];
export const modules = {
  40057: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT
    });
    let lT = !1
  },
  39615: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => vT
    });
    var lT = cT(39620),
      MT = cT(39624),
      KT = cT(36932),
      OT = cT(36892),
      yT = cT(36925),
      fT = cT(37760),
      xT = cT(39638);
    class IT {
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
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = xT.e.Zero(), this._cachedBaseSize = xT.e.Zero(), this._initialSamplingMode = 2, this._texture = IT._IsRenderTargetWrapper(TT) ? TT.texture : TT, this._texture && (this._engine = this._texture.Dv(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(TT, this._texture, this._texture.generateMipMaps && kT)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var AT, CT = cT(39645),
      jT = cT(39500);
    let vT = (() => {
      var TT;
      let kT, cT, xT, AT, jT, vT, tT, hT, NT, QT, ST, DT, aT, FT, rT, PT, wT, mT, bT, zT, JT, oT, HT, eT, GT, VT = IT,
        ET = [],
        ZT = [],
        uT = [],
        XT = [],
        dT = [],
        LT = [],
        RT = [],
        gT = [],
        UT = [],
        YT = [],
        BT = [],
        WT = [],
        nT = [],
        pT = [],
        iT = [],
        qT = [],
        sT = [],
        Tk = [],
        kk = [],
        ck = [],
        lk = [],
        Mk = [],
        Kk = [],
        Ok = [],
        yk = [],
        fk = [],
        xk = [],
        Ik = [],
        Ak = [],
        Ck = [],
        jk = [];
      return TT = class extends VT {
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
          this.NJ()?.markAllMaterialsAsDirty(1, (TT => TT.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(TT) {
          TT !== this.isRGBD && (this._texture && (this._texture._isRGBD = TT), this.NJ()?.markAllMaterialsAsDirty(1, (TT => TT.hasTexture(this))))
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
          return this._uid || (this._uid = (0, fT.c)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(TT) {
          this._onDisposeObserver && this.QJ.remove(this._onDisposeObserver), this._onDisposeObserver = this.QJ.add(TT)
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
        constructor(kT) {
          let cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, lT.h)(this, ET), (0, lT.h)(this, ZT, void 0)), this.name = ((0, lT.h)(this, uT), (0, lT.h)(this, XT, void 0)), this.displayName = ((0, lT.h)(this, dT), (0, lT.h)(this, LT, void 0)), this.metadata = ((0, lT.h)(this, RT), (0, lT.h)(this, gT, null)), this._internalMetadata = (0, lT.h)(this, UT), this.reservedDataStore = null, this._hasAlpha = (0, lT.h)(this, YT, !1), this._getAlphaFromRGB = ((0, lT.h)(this, BT), (0, lT.h)(this, WT, !1)), this.level = ((0, lT.h)(this, nT), (0, lT.h)(this, pT, 1)), this._coordinatesIndex = ((0, lT.h)(this, iT), (0, lT.h)(this, qT, 0)), this.optimizeUVAllocation = ((0, lT.h)(this, sT), (0, lT.h)(this, Tk, !0)), this._coordinatesMode = ((0, lT.h)(this, kk), (0, lT.h)(this, ck, 0)), this.wrapR = ((0, lT.h)(this, lk), (0, lT.h)(this, Mk, 1)), this.anisotropicFilteringLevel = ((0, lT.h)(this, Kk), (0, lT.h)(this, Ok, TT.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, lT.h)(this, yk), !1), this._gammaSpace = !0, this.invertZ = (0, lT.h)(this, fk, !1), this.lodLevelInAlpha = ((0, lT.h)(this, xk), (0, lT.h)(this, Ik, !1)), this._dominantDirection = ((0, lT.h)(this, Ak), null), this.isRenderTarget = (0, lT.h)(this, Ck, !1), this._prefiltered = ((0, lT.h)(this, jk), !1), this._forceSerialize = !1, this.animations = [], this.QJ = new KT.b, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, kT ? TT._IsScene(kT) ? this._scene = kT : this._engine = kT : this._scene = yT.d.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.Dv()), this._texture = cT, this._uid = null
        }
        NJ() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return OT.d.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return OT.d.IdentityReadOnly
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
        _getFromCache(TT, kT, cT, lT, MT, KT) {
          const OT = this._getEngine();
          if (!OT) return null;
          const yT = OT._getUseSRGBBuffer(!!MT, kT),
            fT = OT.getLoadedTexturesCache();
          for (let xT = 0; xT < fT.length; xT++) {
            const OT = fT[xT];
            if ((void 0 === MT || yT === OT._useSRGBBuffer) && (void 0 === lT || lT === OT.invertY) && OT.url === TT && OT.generateMipMaps === !kT && (!cT || cT === OT.samplingMode) && (void 0 === KT || KT === OT.isCube)) return OT.incrementReferences(), OT
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
          const TT = this.NJ();
          TT && TT.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            lT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            OT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            yT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            fT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const xT = this._getEngine();
          if (!xT) return null;
          const IT = this.getSize();
          let AT = IT.width,
            CT = IT.height;
          0 !== kT && (AT /= Math.pow(2, kT), CT /= Math.pow(2, kT), AT = Math.round(AT), CT = Math.round(CT)), yT = Math.min(AT, yT), fT = Math.min(CT, fT);
          try {
            return this._texture.isCube || this._texture.is2DArray ? xT._readTexturePixels(this._texture, yT, fT, TT, kT, cT, lT, MT, KT, OT) : xT._readTexturePixels(this._texture, yT, fT, -1, kT, cT, lT, MT, KT, OT)
          } catch (jT) {
            return null
          }
        }
        _readPixelsSync() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            lT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const KT = this.getSize();
          let OT = KT.width,
            yT = KT.height;
          const fT = this._getEngine();
          if (!fT) return null;
          0 != kT && (OT /= Math.pow(2, kT), yT /= Math.pow(2, kT), OT = Math.round(OT), yT = Math.round(yT));
          try {
            return this._texture.isCube ? fT._readTexturePixelsSync(this._texture, OT, yT, TT, kT, cT, lT, MT) : fT._readTexturePixelsSync(this._texture, OT, yT, -1, kT, cT, lT, MT)
          } catch (xT) {
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
          this.QJ.notifyObservers(this), this.QJ.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !TT) return null;
          const kT = CT.d.Serialize(this);
          return CT.d.AppendSerializedAnimations(this, kT), kT
        }
        static WhenAllReady(TT, kT) {
          let cT = TT.length;
          if (0 !== cT)
            for (let lT = 0; lT < TT.length; lT++) {
              const MT = TT[lT];
              if (MT.isReady()) 0 === --cT && kT();
              else {
                const TT = MT.onLoadObservable;
                TT ? TT.addOnce((() => {
                  0 === --cT && kT()
                })) : 0 === --cT && kT()
              }
            } else kT()
        }
        static _IsScene(TT) {
          return "Scene" === TT.getClassName()
        }
      }, (() => {
        const KT = "function" === typeof Symbol && Symbol.metadata ? Object.create(VT[Symbol.metadata] ?? null) : void 0;
        kT = [(0, MT.J)()], cT = [(0, MT.J)()], xT = [(0, MT.J)()], AT = [(0, MT.J)()], jT = [(0, MT.J)("hasAlpha")], vT = [(0, MT.J)("getAlphaFromRGB")], tT = [(0, MT.J)()], hT = [(0, MT.J)("coordinatesIndex")], NT = [(0, MT.J)()], QT = [(0, MT.J)("coordinatesMode")], ST = [(0, MT.J)()], DT = [(0, MT.J)()], aT = [(0, MT.J)()], FT = [(0, MT.J)()], rT = [(0, MT.J)()], PT = [(0, MT.J)()], wT = [(0, MT.J)()], mT = [(0, MT.J)()], bT = [(0, MT.J)()], zT = [(0, MT.J)()], JT = [(0, MT.J)()], oT = [(0, MT.J)()], HT = [(0, MT.J)()], eT = [(0, MT.A)()], GT = [(0, MT.J)()], (0, lT.e)(TT, null, ST, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: TT => "wrapU" in TT,
            get: TT => TT.wrapU
          },
          metadata: KT
        }, null, ET), (0, lT.e)(TT, null, DT, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: TT => "wrapV" in TT,
            get: TT => TT.wrapV
          },
          metadata: KT
        }, null, ET), (0, lT.e)(TT, null, rT, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: TT => "isCube" in TT,
            get: TT => TT.isCube
          },
          metadata: KT
        }, null, ET), (0, lT.e)(TT, null, PT, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: TT => "is3D" in TT,
            get: TT => TT.is3D
          },
          metadata: KT
        }, null, ET), (0, lT.e)(TT, null, wT, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: TT => "is2DArray" in TT,
            get: TT => TT.is2DArray
          },
          metadata: KT
        }, null, ET), (0, lT.e)(TT, null, mT, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: TT => "gammaSpace" in TT,
            get: TT => TT.gammaSpace
          },
          metadata: KT
        }, null, ET), (0, lT.e)(TT, null, JT, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: TT => "lodGenerationOffset" in TT,
            get: TT => TT.lodGenerationOffset
          },
          metadata: KT
        }, null, ET), (0, lT.e)(TT, null, oT, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: TT => "lodGenerationScale" in TT,
            get: TT => TT.lodGenerationScale
          },
          metadata: KT
        }, null, ET), (0, lT.e)(TT, null, HT, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: TT => "linearSpecularLOD" in TT,
            get: TT => TT.linearSpecularLOD
          },
          metadata: KT
        }, null, ET), (0, lT.e)(TT, null, eT, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "irradianceTexture" in TT,
            get: TT => TT.irradianceTexture
          },
          metadata: KT
        }, null, ET), (0, lT.e)(null, null, kT, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: TT => "uniqueId" in TT,
            get: TT => TT.uniqueId,
            set: (TT, kT) => {
              TT.uniqueId = kT
            }
          },
          metadata: KT
        }, ZT, uT), (0, lT.e)(null, null, cT, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: TT => "name" in TT,
            get: TT => TT.name,
            set: (TT, kT) => {
              TT.name = kT
            }
          },
          metadata: KT
        }, XT, dT), (0, lT.e)(null, null, xT, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: TT => "displayName" in TT,
            get: TT => TT.displayName,
            set: (TT, kT) => {
              TT.displayName = kT
            }
          },
          metadata: KT
        }, LT, RT), (0, lT.e)(null, null, AT, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: TT => "metadata" in TT,
            get: TT => TT.metadata,
            set: (TT, kT) => {
              TT.metadata = kT
            }
          },
          metadata: KT
        }, gT, UT), (0, lT.e)(null, null, jT, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: TT => "_hasAlpha" in TT,
            get: TT => TT._hasAlpha,
            set: (TT, kT) => {
              TT._hasAlpha = kT
            }
          },
          metadata: KT
        }, YT, BT), (0, lT.e)(null, null, vT, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: TT => "_getAlphaFromRGB" in TT,
            get: TT => TT._getAlphaFromRGB,
            set: (TT, kT) => {
              TT._getAlphaFromRGB = kT
            }
          },
          metadata: KT
        }, WT, nT), (0, lT.e)(null, null, tT, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: TT => "level" in TT,
            get: TT => TT.level,
            set: (TT, kT) => {
              TT.level = kT
            }
          },
          metadata: KT
        }, pT, iT), (0, lT.e)(null, null, hT, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: TT => "_coordinatesIndex" in TT,
            get: TT => TT._coordinatesIndex,
            set: (TT, kT) => {
              TT._coordinatesIndex = kT
            }
          },
          metadata: KT
        }, qT, sT), (0, lT.e)(null, null, NT, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: TT => "optimizeUVAllocation" in TT,
            get: TT => TT.optimizeUVAllocation,
            set: (TT, kT) => {
              TT.optimizeUVAllocation = kT
            }
          },
          metadata: KT
        }, Tk, kk), (0, lT.e)(null, null, QT, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "_coordinatesMode" in TT,
            get: TT => TT._coordinatesMode,
            set: (TT, kT) => {
              TT._coordinatesMode = kT
            }
          },
          metadata: KT
        }, ck, lk), (0, lT.e)(null, null, aT, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: TT => "wrapR" in TT,
            get: TT => TT.wrapR,
            set: (TT, kT) => {
              TT.wrapR = kT
            }
          },
          metadata: KT
        }, Mk, Kk), (0, lT.e)(null, null, FT, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: TT => "anisotropicFilteringLevel" in TT,
            get: TT => TT.anisotropicFilteringLevel,
            set: (TT, kT) => {
              TT.anisotropicFilteringLevel = kT
            }
          },
          metadata: KT
        }, Ok, yk), (0, lT.e)(null, null, bT, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: TT => "invertZ" in TT,
            get: TT => TT.invertZ,
            set: (TT, kT) => {
              TT.invertZ = kT
            }
          },
          metadata: KT
        }, fk, xk), (0, lT.e)(null, null, zT, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: TT => "lodLevelInAlpha" in TT,
            get: TT => TT.lodLevelInAlpha,
            set: (TT, kT) => {
              TT.lodLevelInAlpha = kT
            }
          },
          metadata: KT
        }, Ik, Ak), (0, lT.e)(null, null, GT, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: TT => "isRenderTarget" in TT,
            get: TT => TT.isRenderTarget,
            set: (TT, kT) => {
              TT.isRenderTarget = kT
            }
          },
          metadata: KT
        }, Ck, jk), KT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: KT
        })
      })(), TT.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, TT
    })();
    (AT = vT.prototype).forceSphericalPolynomialsRecompute ?? (AT.forceSphericalPolynomialsRecompute = (0, jT.f)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(vT.prototype, "sphericalPolynomial") || Object.defineProperty(vT.prototype, "sphericalPolynomial", (0, jT.d)("BaseTexture", "sphericalPolynomial"))
  },
  40111: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => aT,
      f: () => ST
    });
    var lT = cT(39620),
      MT = cT(39624),
      KT = cT(36932),
      OT = cT(36892),
      yT = cT(39615),
      fT = cT(36949),
      xT = cT(39500),
      IT = cT(39514),
      AT = cT(39732),
      CT = cT(37637),
      jT = cT(39687);

    function vT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const lT = kT.width,
        MT = kT.height;
      if (TT instanceof Float32Array) {
        let kT = TT.byteLength / TT.BYTES_PER_ELEMENT;
        const cT = new Uint8Array(kT);
        for (; --kT >= 0;) {
          let lT = TT[kT];
          lT < 0 ? lT = 0 : lT > 1 && (lT = 1), cT[kT] = 255 * lT
        }
        TT = cT
      }
      const KT = document.createElement("canvas");
      KT.width = lT, KT.height = MT;
      const OT = KT.getContext("2d");
      if (!OT) return null;
      const yT = OT.createImageData(lT, MT);
      if (yT.data.set(TT), OT.putImageData(yT, 0, 0), cT) {
        const TT = document.createElement("canvas");
        TT.width = lT, TT.height = MT;
        const kT = TT.getContext("2d");
        return kT ? (kT.translate(0, MT), kT.scale(1, -1), kT.drawImage(KT, 0, 0), TT.toDataURL("image/png")) : null
      }
      return KT.toDataURL("image/png")
    }

    function tT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const lT = TT.getInternalTexture();
      if (!lT) return null;
      const MT = TT._readPixelsSync(kT, cT);
      return MT ? vT(MT, TT.getSize(), lT.invertY) : null
    }
    async function hT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const lT = TT.getInternalTexture();
      if (!lT) return null;
      const MT = await TT.readPixels(kT, cT);
      return MT ? vT(MT, TT.getSize(), lT.invertY) : null
    }
    var NT = cT(40057),
      QT = cT(39645);
    let ST = (() => {
        var TT;
        let kT, cT, vT, ST, DT, aT, FT, rT, PT, wT, mT, bT, zT, JT = yT.c,
          oT = [],
          HT = [],
          eT = [],
          GT = [],
          VT = [],
          ET = [],
          ZT = [],
          uT = [],
          XT = [],
          dT = [],
          LT = [],
          RT = [],
          gT = [],
          UT = [],
          YT = [],
          BT = [],
          WT = [],
          nT = [],
          pT = [],
          iT = [],
          qT = [],
          sT = [],
          Tk = [],
          kk = [],
          ck = [];
        return TT = class extends JT {
          static _CreateVideoTexture(kT, cT, lT) {
            arguments.length > 5 && void 0 !== arguments[5] || TT.TRILINEAR_SAMPLINGMODE;
            throw (0, xT.i)("VideoTexture")
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
          constructor(kT, cT, MT, OT) {
            let yT, fT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : TT.TRILINEAR_SAMPLINGMODE,
              xT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              AT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              CT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              jT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              vT = arguments.length > 9 ? arguments[9] : void 0,
              tT = arguments.length > 10 ? arguments[10] : void 0,
              hT = arguments.length > 11 ? arguments[11] : void 0,
              QT = arguments.length > 12 ? arguments[12] : void 0,
              ST = arguments.length > 13 ? arguments[13] : void 0;
            super(cT), this.url = ((0, lT.h)(this, oT), (0, lT.h)(this, HT, null)), this.uOffset = ((0, lT.h)(this, eT), (0, lT.h)(this, GT, 0)), this.vOffset = ((0, lT.h)(this, VT), (0, lT.h)(this, ET, 0)), this.uScale = ((0, lT.h)(this, ZT), (0, lT.h)(this, uT, 1)), this.vScale = ((0, lT.h)(this, XT), (0, lT.h)(this, dT, 1)), this.uAng = ((0, lT.h)(this, LT), (0, lT.h)(this, RT, 0)), this.vAng = ((0, lT.h)(this, gT), (0, lT.h)(this, UT, 0)), this.wAng = ((0, lT.h)(this, YT), (0, lT.h)(this, BT, 0)), this.uRotationCenter = ((0, lT.h)(this, WT), (0, lT.h)(this, nT, .5)), this.vRotationCenter = ((0, lT.h)(this, pT), (0, lT.h)(this, iT, .5)), this.wRotationCenter = ((0, lT.h)(this, qT), (0, lT.h)(this, sT, .5)), this.homogeneousRotationInUVTransform = ((0, lT.h)(this, Tk), (0, lT.h)(this, kk, !1)), this.inspectableCustomProperties = ((0, lT.h)(this, ck), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new KT.b, this._isBlocking = !0, this.name = kT || "", this.url = kT;
            let DT = !1,
              aT = null,
              FT = !0;
            "object" === typeof MT && null !== MT ? (yT = MT.noMipmap ?? !1, OT = MT.invertY ?? !NT.c, fT = MT.samplingMode ?? TT.TRILINEAR_SAMPLINGMODE, xT = MT.onLoad ?? null, AT = MT.onError ?? null, CT = MT.buffer ?? null, jT = MT.deleteBuffer ?? !1, vT = MT.format, tT = MT.mimeType, hT = MT.loaderOptions, QT = MT.creationFlags, DT = MT.useSRGBBuffer ?? !1, aT = MT.internalTexture ?? null, FT = MT.gammaSpace ?? FT, ST = MT.forcedExtension ?? ST) : yT = !!MT, this._gammaSpace = FT, this._noMipmap = yT, this._invertY = void 0 === OT ? !NT.c : OT, this._initialSamplingMode = fT, this._buffer = CT, this._deleteBuffer = jT, this._mimeType = tT, this._loaderOptions = hT, this._creationFlags = QT, this._useSRGBBuffer = DT, this._forcedExtension = ST, void 0 !== vT && (this._format = vT);
            const rT = this.NJ(),
              PT = this._getEngine();
            if (!PT) return;
            PT.onBeforeTextureInitObservable.notifyObservers(this);
            const wT = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), xT && xT(), !this.isBlocking && rT && rT.resetCachedMaterial()
              },
              mT = (kT, cT) => {
                this._loadingError = !0, this._errorObject = {
                  message: kT,
                  exception: cT
                }, AT && AT(kT, cT), TT.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !aT) return this._delayedOnLoad = wT, void(this._delayedOnError = mT);
            if (this._texture = aT ?? this._getFromCache(this.url, yT, fT, this._invertY, DT, this.isCube), this._texture)
              if (this._texture.isReady) IT.e.SetImmediate((() => wT()));
              else {
                const TT = this._texture.onLoadedObservable.add(wT);
                this._texture.onErrorObservable.add((kT => {
                  mT(kT.message, kT.exception), this._texture?.onLoadedObservable.remove(TT)
                }))
              }
            else if (rT && rT.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = wT, this._delayedOnError = mT;
            else {
              try {
                this._texture = PT.createTexture(this.url, yT, this._invertY, rT, fT, wT, mT, this._buffer, void 0, this._format, this._forcedExtension, tT, hT, QT, DT)
              } catch (bT) {
                throw mT("error loading", bT), bT
              }
              jT && (this._buffer = null)
            }
          }
          updateURL(TT) {
            let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              cT = arguments.length > 2 ? arguments[2] : void 0,
              lT = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.NJ().markAllMaterialsAsDirty(1, (TT => TT.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = TT), this.url = TT, this._buffer = kT, this._forcedExtension = lT, this.delayLoadState = 4;
            const MT = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              MT ? MT() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), cT && cT()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const TT = this.NJ();
            if (!TT) return;
            let kT = this.url;
            !kT && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (kT = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(kT, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? IT.e.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = TT.Dv().createTexture(kT, this._noMipmap, this._invertY, TT, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(TT, kT, cT, lT) {
            TT *= this._cachedUScale, kT *= this._cachedVScale, TT -= this.uRotationCenter * this._cachedUScale, kT -= this.vRotationCenter * this._cachedVScale, cT -= this.wRotationCenter, OT.m.TransformCoordinatesFromFloatsToRef(TT, kT, cT, this._rowGenerationMatrix, lT), lT.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, lT.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, lT.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * TT === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * TT, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = OT.d.Zero(), this._rowGenerationMatrix = new OT.d, this._t0 = OT.m.Zero(), this._t1 = OT.m.Zero(), this._t2 = OT.m.Zero()), OT.d.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (OT.d.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, OT.h.Matrix[0]), OT.d.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, OT.h.Matrix[1]), OT.d.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, OT.h.Matrix[2]), OT.d.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, OT.h.Matrix[3]), OT.h.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(OT.h.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(OT.h.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(OT.h.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.gcT(this._t0), this._t2.gcT(this._t0), OT.d.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const kT = this.NJ();
            if (!kT) return this._cachedTextureMatrix;
            const cT = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && cT !== this._cachedIdentity3x2 && kT.markAllMaterialsAsDirty(1, (TT => TT.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const kT = this.NJ();
            if (!kT) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== TT.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === kT.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = OT.d.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = OT.d.Zero());
            const cT = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case TT.PLANAR_MODE:
                OT.d.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case TT.PROJECTION_MODE: {
                OT.d.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const TT = kT.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = TT.updateFlag, TT.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                OT.d.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return cT && kT.markAllMaterialsAsDirty(1, (TT => TT.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const kT = {
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
            return QT.d.Clone((() => new TT(this._texture ? this._texture.url : null, this.NJ(), kT)), this)
          }
          serialize() {
            const kT = this.name;
            TT.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const cT = super.serialize(TT._SerializeInternalTextureUniqueId);
            if (!cT) return null;
            if (TT.SerializeBuffers || TT.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) cT.base64String = this._buffer, cT.name = cT.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const TT = this.mimeType || "image/png";
              cT.base64String = `data:${TT};base64,${(0,jT.k)(this._buffer)}`
            } else(TT.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (cT.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? tT(this) : hT(this));
            return cT.invertY = this._invertY, cT.samplingMode = this.samplingMode, cT._creationFlags = this._creationFlags, cT._useSRGBBuffer = this._useSRGBBuffer, TT._SerializeInternalTextureUniqueId && (cT.internalTextureUniqueId = this._texture?.uniqueId), cT.internalTextureLabel = this._texture?.label, cT.noMipmap = this._noMipmap, this.name = kT, cT
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(kT, cT, lT) {
            if (kT.customType) {
              const TT = AT.d.Instantiate(kT.customType).Parse(kT, cT, lT);
              return kT.samplingMode && TT.updateSamplingMode && TT._samplingMode && TT._samplingMode !== kT.samplingMode && TT.updateSamplingMode(kT.samplingMode), TT
            }
            if (kT.isCube && !kT.isRenderTarget) return TT._CubeTextureParser(kT, cT, lT);
            const MT = void 0 !== kT.internalTextureUniqueId;
            if (!kT.name && !kT.isRenderTarget && !MT) return null;
            let KT;
            if (MT) {
              const TT = cT.Dv().getLoadedTexturesCache();
              for (const cT of TT)
                if (cT.uniqueId === kT.internalTextureUniqueId) {
                  KT = cT;
                  break
                }
            }
            const OT = TT => {
              if (TT && TT._texture && (TT._texture._cachedWrapU = null, TT._texture._cachedWrapV = null, TT._texture._cachedWrapR = null), kT.samplingMode) {
                const cT = kT.samplingMode;
                TT && TT.samplingMode !== cT && TT.updateSamplingMode(cT)
              }
              if (TT && kT.animations)
                for (let cT = 0; cT < kT.animations.length; cT++) {
                  const lT = kT.animations[cT],
                    MT = (0, fT.e)("BABYLON.Animation");
                  MT && TT.animations.push(MT.Parse(lT))
                }
              TT && TT._texture && (MT && !KT && TT._texture._setUniqueId(kT.internalTextureUniqueId), TT._texture.label = kT.internalTextureLabel)
            };
            return QT.d.Parse((() => {
              let MT = !0;
              if (kT.noMipmap && (MT = !1), kT.mirrorPlane) {
                const lT = TT._CreateMirror(kT.name, kT.renderTargetSize, cT, MT);
                return lT._waitingRenderList = kT.renderList, lT.mirrorPlane = CT.e.FromArray(kT.mirrorPlane), OT(lT), lT
              }
              if (kT.isRenderTarget && !kT.base64String) {
                let lT = null;
                if (kT.isCube) {
                  if (cT.reflectionProbes)
                    for (let TT = 0; TT < cT.reflectionProbes.length; TT++) {
                      const lT = cT.reflectionProbes[TT];
                      if (lT.name === kT.name) return lT.cubeTexture
                    }
                } else lT = TT._CreateRenderTargetTexture(kT.name, kT.renderTargetSize, cT, MT, kT._creationFlags ?? 0), lT._waitingRenderList = kT.renderList;
                return OT(lT), lT
              }
              if (kT.isVideo) {
                const KT = TT._CreateVideoTexture(lT + (kT.url || kT.name), lT + (kT.src || kT.url), cT, MT, kT.invertY, kT.samplingMode, kT.settings || {});
                return OT(KT), KT
              } {
                let yT;
                if ("string" === typeof kT.base64String && kT.base64String && !KT) {
                  const lT = {
                      buffer: kT.base64String,
                      noMipmap: !MT,
                      invertY: kT.invertY,
                      samplingMode: kT.samplingMode,
                      useSRGBBuffer: kT._useSRGBBuffer ?? !1,
                      creationFlags: kT._creationFlags ?? 0,
                      onLoad: () => {
                        OT(yT)
                      }
                    },
                    KT = kT.base64String,
                    fT = KT.startsWith("data:") ? KT.substring(5) : KT;
                  yT = TT.CreateFromBase64String("", fT, cT, lT), yT.name = kT.name
                } else {
                  let fT;
                  fT = kT.name && (kT.name.indexOf("://") > 0 || kT.name.startsWith("data:")) ? kT.name : lT + kT.name, kT.url && (kT.url.startsWith("data:") || TT.UseSerializedUrlIfAny) && (fT = kT.url);
                  const xT = {
                    noMipmap: !MT,
                    invertY: kT.invertY,
                    samplingMode: kT.samplingMode,
                    useSRGBBuffer: kT._useSRGBBuffer ?? !1,
                    creationFlags: kT._creationFlags ?? 0,
                    onLoad: () => {
                      OT(yT)
                    },
                    internalTexture: KT
                  };
                  yT = new TT(fT, cT, xT)
                }
                return yT
              }
            }), kT, cT)
          }
          static CreateFromBase64String(kT, cT, lT, MT, KT) {
            let OT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : TT.TRILINEAR_SAMPLINGMODE;
            return new TT("data:" + cT, lT, MT, KT, OT, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, kT, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(kT, cT, lT) {
            let MT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              KT = arguments.length > 4 ? arguments[4] : void 0,
              OT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              yT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : TT.TRILINEAR_SAMPLINGMODE,
              fT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              xT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              IT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              AT = arguments.length > 10 ? arguments[10] : void 0,
              CT = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== kT.substring(0, 5) && (kT = "data:" + kT), new TT(kT, lT, KT, OT, yT, fT, xT, cT, MT, IT, void 0, void 0, AT, CT)
          }
        }, (() => {
          const KT = "function" === typeof Symbol && Symbol.metadata ? Object.create(JT[Symbol.metadata] ?? null) : void 0;
          kT = [(0, MT.J)()], cT = [(0, MT.J)()], vT = [(0, MT.J)()], ST = [(0, MT.J)()], DT = [(0, MT.J)()], aT = [(0, MT.J)()], FT = [(0, MT.J)()], rT = [(0, MT.J)()], PT = [(0, MT.J)()], wT = [(0, MT.J)()], mT = [(0, MT.J)()], bT = [(0, MT.J)()], zT = [(0, MT.J)()], (0, lT.e)(TT, null, zT, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: TT => "isBlocking" in TT,
              get: TT => TT.isBlocking
            },
            metadata: KT
          }, null, oT), (0, lT.e)(null, null, kT, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: TT => "url" in TT,
              get: TT => TT.url,
              set: (TT, kT) => {
                TT.url = kT
              }
            },
            metadata: KT
          }, HT, eT), (0, lT.e)(null, null, cT, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: TT => "uOffset" in TT,
              get: TT => TT.uOffset,
              set: (TT, kT) => {
                TT.uOffset = kT
              }
            },
            metadata: KT
          }, GT, VT), (0, lT.e)(null, null, vT, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: TT => "vOffset" in TT,
              get: TT => TT.vOffset,
              set: (TT, kT) => {
                TT.vOffset = kT
              }
            },
            metadata: KT
          }, ET, ZT), (0, lT.e)(null, null, ST, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: TT => "uScale" in TT,
              get: TT => TT.uScale,
              set: (TT, kT) => {
                TT.uScale = kT
              }
            },
            metadata: KT
          }, uT, XT), (0, lT.e)(null, null, DT, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: TT => "vScale" in TT,
              get: TT => TT.vScale,
              set: (TT, kT) => {
                TT.vScale = kT
              }
            },
            metadata: KT
          }, dT, LT), (0, lT.e)(null, null, aT, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: TT => "uAng" in TT,
              get: TT => TT.uAng,
              set: (TT, kT) => {
                TT.uAng = kT
              }
            },
            metadata: KT
          }, RT, gT), (0, lT.e)(null, null, FT, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: TT => "vAng" in TT,
              get: TT => TT.vAng,
              set: (TT, kT) => {
                TT.vAng = kT
              }
            },
            metadata: KT
          }, UT, YT), (0, lT.e)(null, null, rT, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: TT => "wAng" in TT,
              get: TT => TT.wAng,
              set: (TT, kT) => {
                TT.wAng = kT
              }
            },
            metadata: KT
          }, BT, WT), (0, lT.e)(null, null, PT, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: TT => "uRotationCenter" in TT,
              get: TT => TT.uRotationCenter,
              set: (TT, kT) => {
                TT.uRotationCenter = kT
              }
            },
            metadata: KT
          }, nT, pT), (0, lT.e)(null, null, wT, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: TT => "vRotationCenter" in TT,
              get: TT => TT.vRotationCenter,
              set: (TT, kT) => {
                TT.vRotationCenter = kT
              }
            },
            metadata: KT
          }, iT, qT), (0, lT.e)(null, null, mT, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: TT => "wRotationCenter" in TT,
              get: TT => TT.wRotationCenter,
              set: (TT, kT) => {
                TT.wRotationCenter = kT
              }
            },
            metadata: KT
          }, sT, Tk), (0, lT.e)(null, null, bT, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: TT => "homogeneousRotationInUVTransform" in TT,
              get: TT => TT.homogeneousRotationInUVTransform,
              set: (TT, kT) => {
                TT.homogeneousRotationInUVTransform = kT
              }
            },
            metadata: KT
          }, kk, ck), KT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: KT
          })
        })(), TT.SerializeBuffers = !0, TT.ForceSerializeBuffers = !1, TT.OnTextureLoadErrorObservable = new KT.b, TT._SerializeInternalTextureUniqueId = !1, TT._CubeTextureParser = (TT, kT, cT) => {
          throw (0, xT.i)("CubeTexture")
        }, TT._CreateMirror = (TT, kT, cT, lT) => {
          throw (0, xT.i)("MirrorTexture")
        }, TT._CreateRenderTargetTexture = (TT, kT, cT, lT, MT) => {
          throw (0, xT.i)("RenderTargetTexture")
        }, TT.NEAREST_SAMPLINGMODE = 1, TT.NEAREST_NEAREST_MIPLINEAR = 8, TT.BILINEAR_SAMPLINGMODE = 2, TT.LINEAR_LINEAR_MIPNEAREST = 11, TT.TRILINEAR_SAMPLINGMODE = 3, TT.LINEAR_LINEAR_MIPLINEAR = 3, TT.NEAREST_NEAREST_MIPNEAREST = 4, TT.NEAREST_LINEAR_MIPNEAREST = 5, TT.NEAREST_LINEAR_MIPLINEAR = 6, TT.NEAREST_LINEAR = 7, TT.NEAREST_NEAREST = 1, TT.LINEAR_NEAREST_MIPNEAREST = 9, TT.LINEAR_NEAREST_MIPLINEAR = 10, TT.LINEAR_LINEAR = 2, TT.LINEAR_NEAREST = 12, TT.EXPLICIT_MODE = 0, TT.SPHERICAL_MODE = 1, TT.PLANAR_MODE = 2, TT.CUBIC_MODE = 3, TT.PROJECTION_MODE = 4, TT.SKYBOX_MODE = 5, TT.INVCUBIC_MODE = 6, TT.EQUIRECTANGULAR_MODE = 7, TT.FIXED_EQUIRECTANGULAR_MODE = 8, TT.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, TT.CLAMP_ADDRESSMODE = 0, TT.WRAP_ADDRESSMODE = 1, TT.MIRROR_ADDRESSMODE = 2, TT.UseSerializedUrlIfAny = !1, TT
      })(),
      DT = !1;

    function aT() {
      DT || (DT = !0, (0, fT.g)("BABYLON.Texture", ST), QT.d._TextureParser = ST.Parse)
    }
  },
  39638: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT
    });
    class lT {
      constructor(TT, kT) {
        this.width = TT, this.height = kT
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
      UkT(TT) {
        this.width = TT.width, this.height = TT.height
      }
      I5(TT, kT) {
        return this.width = TT, this.height = kT, this
      }
      set(TT, kT) {
        return this.I5(TT, kT)
      }
      multiplyByFloats(TT, kT) {
        return new lT(this.width * TT, this.height * kT)
      }
      clone() {
        return new lT(this.width, this.height)
      }
      equals(TT) {
        return !!TT && (this.width === TT.width && this.height === TT.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new lT(0, 0)
      }
      add(TT) {
        return new lT(this.width + TT.width, this.height + TT.height)
      }
      subtract(TT) {
        return new lT(this.width - TT.width, this.height - TT.height)
      }
      scale(TT) {
        return new lT(this.width * TT, this.height * TT)
      }
      static Lerp(TT, kT, cT) {
        const MT = TT.width + (kT.width - TT.width) * cT,
          KT = TT.height + (kT.height - TT.height) * cT;
        return new lT(MT, KT)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);