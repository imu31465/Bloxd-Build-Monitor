export const id = 246;
export const ids = [246];
export const modules = {
  39812: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => tU
    });
    let tU = !1
  },
  39373: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => CU
    });
    var tU = gU(39377),
      pU = gU(39380),
      EU = gU(36624),
      PU = gU(36600),
      TU = gU(36622),
      qU = gU(37439),
      KU = gU(39387);
    class cU {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(UU) {
        this._wrapU = UU
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(UU) {
        this._wrapV = UU
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(UU) {
        this._texture && (this._texture.isCube = UU)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(UU) {
        this._texture && (this._texture.is3D = UU)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(UU) {
        this._texture && (this._texture.is2DArray = UU)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(UU) {
        return void 0 !== UU?.shareDepth
      }
      constructor(UU) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = KU.b.Zero(), this._cachedBaseSize = KU.b.Zero(), this._initialSamplingMode = 2, this._texture = cU._IsRenderTargetWrapper(UU) ? UU.texture : UU, this._texture && (this._engine = this._texture.WC(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(UU, this._texture, this._texture.generateMipMaps && RU)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var GU, jU = gU(39395),
      uU = gU(39256);
    let CU = (() => {
      var UU;
      let RU, gU, KU, GU, uU, CU, hU, QU, eU, WU, fU, xU, mU, IU, JU, wU, nU, bU, oU, ZU, aU, YU, BU, VU, rU, XU = cU,
        vU = [],
        dU = [],
        HU = [],
        SU = [],
        sU = [],
        yU = [],
        kU = [],
        FU = [],
        iU = [],
        AU = [],
        zU = [],
        MU = [],
        DU = [],
        LU = [],
        NU = [],
        lU = [],
        OU = [],
        UR = [],
        RR = [],
        gR = [],
        tR = [],
        pR = [],
        ER = [],
        PR = [],
        TR = [],
        qR = [],
        KR = [],
        cR = [],
        GR = [],
        jR = [],
        uR = [];
      return UU = class extends XU {
        set hasAlpha(UU) {
          this._hasAlpha = UU
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(UU) {
          this._getAlphaFromRGB !== UU && (this._getAlphaFromRGB = UU, this._scene && this._scene.markAllMaterialsAsDirty(1, (UU => UU.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(UU) {
          this._coordinatesIndex !== UU && (this._coordinatesIndex = UU, this._scene && this._scene.markAllMaterialsAsDirty(1, (UU => UU.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(UU) {
          this._coordinatesMode !== UU && (this._coordinatesMode = UU, this._scene && this._scene.markAllMaterialsAsDirty(1, (UU => UU.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(UU) {
          this._wrapU = UU
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(UU) {
          this._wrapV = UU
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(UU) {
          this._texture ? this._texture.isCube = UU : this._isCube = UU
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(UU) {
          this._texture && (this._texture.is3D = UU)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(UU) {
          this._texture && (this._texture.is2DArray = UU)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(UU) {
          if (this._texture) {
            if (this._texture._gammaSpace === UU) return;
            this._texture._gammaSpace = UU
          } else {
            if (this._gammaSpace === UU) return;
            this._gammaSpace = UU
          }
          this.aZ()?.markAllMaterialsAsDirty(1, (UU => UU.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(UU) {
          UU !== this.isRGBD && (this._texture && (this._texture._isRGBD = UU), this.aZ()?.markAllMaterialsAsDirty(1, (UU => UU.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(UU) {
          this._texture && (this._texture._lodGenerationOffset = UU)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(UU) {
          this._texture && (this._texture._lodGenerationScale = UU)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(UU) {
          this._texture && (this._texture._linearSpecularLOD = UU)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(UU) {
          this._texture && (this._texture._irradianceTexture = UU)
        }
        get uid() {
          return this._uid || (this._uid = (0, qU.b)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(UU) {
          this._onDisposeObserver && this.HZ.remove(this._onDisposeObserver), this._onDisposeObserver = this.HZ.add(UU)
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
        constructor(RU) {
          let gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, tU.j)(this, vU), (0, tU.j)(this, dU, void 0)), this.name = ((0, tU.j)(this, HU), (0, tU.j)(this, SU, void 0)), this.displayName = ((0, tU.j)(this, sU), (0, tU.j)(this, yU, void 0)), this.metadata = ((0, tU.j)(this, kU), (0, tU.j)(this, FU, null)), this._internalMetadata = (0, tU.j)(this, iU), this.reservedDataStore = null, this._hasAlpha = (0, tU.j)(this, AU, !1), this._getAlphaFromRGB = ((0, tU.j)(this, zU), (0, tU.j)(this, MU, !1)), this.level = ((0, tU.j)(this, DU), (0, tU.j)(this, LU, 1)), this._coordinatesIndex = ((0, tU.j)(this, NU), (0, tU.j)(this, lU, 0)), this.optimizeUVAllocation = ((0, tU.j)(this, OU), (0, tU.j)(this, UR, !0)), this._coordinatesMode = ((0, tU.j)(this, RR), (0, tU.j)(this, gR, 0)), this.wrapR = ((0, tU.j)(this, tR), (0, tU.j)(this, pR, 1)), this.anisotropicFilteringLevel = ((0, tU.j)(this, ER), (0, tU.j)(this, PR, UU.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, tU.j)(this, TR), !1), this._gammaSpace = !0, this.invertZ = (0, tU.j)(this, qR, !1), this.lodLevelInAlpha = ((0, tU.j)(this, KR), (0, tU.j)(this, cR, !1)), this._dominantDirection = ((0, tU.j)(this, GR), null), this.isRenderTarget = (0, tU.j)(this, jR, !1), this._prefiltered = ((0, tU.j)(this, uR), !1), this._forceSerialize = !1, this.animations = [], this.HZ = new EU.b, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, RU ? UU._IsScene(RU) ? this._scene = RU : this._engine = RU : this._scene = TU.c.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.WC()), this._texture = gU, this._uid = null
        }
        aZ() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return PU.c.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return PU.c.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(UU) {}
        get canRescale() {
          return !1
        }
        _getFromCache(UU, RU, gU, tU, pU, EU) {
          const PU = this._getEngine();
          if (!PU) return null;
          const TU = PU._getUseSRGBBuffer(!!pU, RU),
            qU = PU.getLoadedTexturesCache();
          for (let KU = 0; KU < qU.length; KU++) {
            const PU = qU[KU];
            if ((void 0 === pU || TU === PU._useSRGBBuffer) && (void 0 === tU || tU === PU.invertY) && PU.url === UU && PU.generateMipMaps === !RU && (!gU || gU === PU.samplingMode) && (void 0 === EU || EU === PU.isCube)) return PU.incrementReferences(), PU
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
          const UU = this.aZ();
          UU && UU.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            tU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            pU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            PU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            TU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            qU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const KU = this._getEngine();
          if (!KU) return null;
          const cU = this.getSize();
          let GU = cU.width,
            jU = cU.height;
          0 !== RU && (GU /= Math.pow(2, RU), jU /= Math.pow(2, RU), GU = Math.round(GU), jU = Math.round(jU)), TU = Math.min(GU, TU), qU = Math.min(jU, qU);
          try {
            return this._texture.isCube || this._texture.is2DArray ? KU._readTexturePixels(this._texture, TU, qU, UU, RU, gU, tU, pU, EU, PU) : KU._readTexturePixels(this._texture, TU, qU, -1, RU, gU, tU, pU, EU, PU)
          } catch (uU) {
            return null
          }
        }
        _readPixelsSync() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            tU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            pU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const EU = this.getSize();
          let PU = EU.width,
            TU = EU.height;
          const qU = this._getEngine();
          if (!qU) return null;
          0 != RU && (PU /= Math.pow(2, RU), TU /= Math.pow(2, RU), PU = Math.round(PU), TU = Math.round(TU));
          try {
            return this._texture.isCube ? qU._readTexturePixelsSync(this._texture, PU, TU, UU, RU, gU, tU, pU) : qU._readTexturePixelsSync(this._texture, PU, TU, -1, RU, gU, tU, pU)
          } catch (KU) {
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
            const UU = this._scene.textures.indexOf(this);
            if (UU >= 0 && this._scene.textures.splice(UU, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const UU = this._parentContainer.textures.indexOf(this);
              UU > -1 && this._parentContainer.textures.splice(UU, 1), this._parentContainer = null
            }
          }
          this.HZ.notifyObservers(this), this.HZ.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !UU) return null;
          const RU = jU.b.Serialize(this);
          return jU.b.AppendSerializedAnimations(this, RU), RU
        }
        static WhenAllReady(UU, RU) {
          let gU = UU.length;
          if (0 !== gU)
            for (let tU = 0; tU < UU.length; tU++) {
              const pU = UU[tU];
              if (pU.isReady()) 0 === --gU && RU();
              else {
                const UU = pU.onLoadObservable;
                UU ? UU.addOnce((() => {
                  0 === --gU && RU()
                })) : 0 === --gU && RU()
              }
            } else RU()
        }
        static _IsScene(UU) {
          return "Scene" === UU.getClassName()
        }
      }, (() => {
        const EU = "function" === typeof Symbol && Symbol.metadata ? Object.create(XU[Symbol.metadata] ?? null) : void 0;
        RU = [(0, pU.K)()], gU = [(0, pU.K)()], KU = [(0, pU.K)()], GU = [(0, pU.K)()], uU = [(0, pU.K)("hasAlpha")], CU = [(0, pU.K)("getAlphaFromRGB")], hU = [(0, pU.K)()], QU = [(0, pU.K)("coordinatesIndex")], eU = [(0, pU.K)()], WU = [(0, pU.K)("coordinatesMode")], fU = [(0, pU.K)()], xU = [(0, pU.K)()], mU = [(0, pU.K)()], IU = [(0, pU.K)()], JU = [(0, pU.K)()], wU = [(0, pU.K)()], nU = [(0, pU.K)()], bU = [(0, pU.K)()], oU = [(0, pU.K)()], ZU = [(0, pU.K)()], aU = [(0, pU.K)()], YU = [(0, pU.K)()], BU = [(0, pU.K)()], VU = [(0, pU.D)()], rU = [(0, pU.K)()], (0, tU.i)(UU, null, fU, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: UU => "wrapU" in UU,
            get: UU => UU.wrapU
          },
          metadata: EU
        }, null, vU), (0, tU.i)(UU, null, xU, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: UU => "wrapV" in UU,
            get: UU => UU.wrapV
          },
          metadata: EU
        }, null, vU), (0, tU.i)(UU, null, JU, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: UU => "isCube" in UU,
            get: UU => UU.isCube
          },
          metadata: EU
        }, null, vU), (0, tU.i)(UU, null, wU, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: UU => "is3D" in UU,
            get: UU => UU.is3D
          },
          metadata: EU
        }, null, vU), (0, tU.i)(UU, null, nU, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: UU => "is2DArray" in UU,
            get: UU => UU.is2DArray
          },
          metadata: EU
        }, null, vU), (0, tU.i)(UU, null, bU, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: UU => "gammaSpace" in UU,
            get: UU => UU.gammaSpace
          },
          metadata: EU
        }, null, vU), (0, tU.i)(UU, null, aU, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: UU => "lodGenerationOffset" in UU,
            get: UU => UU.lodGenerationOffset
          },
          metadata: EU
        }, null, vU), (0, tU.i)(UU, null, YU, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: UU => "lodGenerationScale" in UU,
            get: UU => UU.lodGenerationScale
          },
          metadata: EU
        }, null, vU), (0, tU.i)(UU, null, BU, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: UU => "linearSpecularLOD" in UU,
            get: UU => UU.linearSpecularLOD
          },
          metadata: EU
        }, null, vU), (0, tU.i)(UU, null, VU, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "irradianceTexture" in UU,
            get: UU => UU.irradianceTexture
          },
          metadata: EU
        }, null, vU), (0, tU.i)(null, null, RU, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: UU => "uniqueId" in UU,
            get: UU => UU.uniqueId,
            set: (UU, RU) => {
              UU.uniqueId = RU
            }
          },
          metadata: EU
        }, dU, HU), (0, tU.i)(null, null, gU, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: UU => "name" in UU,
            get: UU => UU.name,
            set: (UU, RU) => {
              UU.name = RU
            }
          },
          metadata: EU
        }, SU, sU), (0, tU.i)(null, null, KU, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: UU => "displayName" in UU,
            get: UU => UU.displayName,
            set: (UU, RU) => {
              UU.displayName = RU
            }
          },
          metadata: EU
        }, yU, kU), (0, tU.i)(null, null, GU, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: UU => "metadata" in UU,
            get: UU => UU.metadata,
            set: (UU, RU) => {
              UU.metadata = RU
            }
          },
          metadata: EU
        }, FU, iU), (0, tU.i)(null, null, uU, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: UU => "_hasAlpha" in UU,
            get: UU => UU._hasAlpha,
            set: (UU, RU) => {
              UU._hasAlpha = RU
            }
          },
          metadata: EU
        }, AU, zU), (0, tU.i)(null, null, CU, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: UU => "_getAlphaFromRGB" in UU,
            get: UU => UU._getAlphaFromRGB,
            set: (UU, RU) => {
              UU._getAlphaFromRGB = RU
            }
          },
          metadata: EU
        }, MU, DU), (0, tU.i)(null, null, hU, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: UU => "level" in UU,
            get: UU => UU.level,
            set: (UU, RU) => {
              UU.level = RU
            }
          },
          metadata: EU
        }, LU, NU), (0, tU.i)(null, null, QU, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: UU => "_coordinatesIndex" in UU,
            get: UU => UU._coordinatesIndex,
            set: (UU, RU) => {
              UU._coordinatesIndex = RU
            }
          },
          metadata: EU
        }, lU, OU), (0, tU.i)(null, null, eU, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: UU => "optimizeUVAllocation" in UU,
            get: UU => UU.optimizeUVAllocation,
            set: (UU, RU) => {
              UU.optimizeUVAllocation = RU
            }
          },
          metadata: EU
        }, UR, RR), (0, tU.i)(null, null, WU, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: UU => "_coordinatesMode" in UU,
            get: UU => UU._coordinatesMode,
            set: (UU, RU) => {
              UU._coordinatesMode = RU
            }
          },
          metadata: EU
        }, gR, tR), (0, tU.i)(null, null, mU, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: UU => "wrapR" in UU,
            get: UU => UU.wrapR,
            set: (UU, RU) => {
              UU.wrapR = RU
            }
          },
          metadata: EU
        }, pR, ER), (0, tU.i)(null, null, IU, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: UU => "anisotropicFilteringLevel" in UU,
            get: UU => UU.anisotropicFilteringLevel,
            set: (UU, RU) => {
              UU.anisotropicFilteringLevel = RU
            }
          },
          metadata: EU
        }, PR, TR), (0, tU.i)(null, null, oU, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: UU => "invertZ" in UU,
            get: UU => UU.invertZ,
            set: (UU, RU) => {
              UU.invertZ = RU
            }
          },
          metadata: EU
        }, qR, KR), (0, tU.i)(null, null, ZU, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: UU => "lodLevelInAlpha" in UU,
            get: UU => UU.lodLevelInAlpha,
            set: (UU, RU) => {
              UU.lodLevelInAlpha = RU
            }
          },
          metadata: EU
        }, cR, GR), (0, tU.i)(null, null, rU, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: UU => "isRenderTarget" in UU,
            get: UU => UU.isRenderTarget,
            set: (UU, RU) => {
              UU.isRenderTarget = RU
            }
          },
          metadata: EU
        }, jR, uR), EU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: EU
        })
      })(), UU.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, UU
    })();
    (GU = CU.prototype).forceSphericalPolynomialsRecompute ?? (GU.forceSphericalPolynomialsRecompute = (0, uU.m)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(CU.prototype, "sphericalPolynomial") || Object.defineProperty(CU.prototype, "sphericalPolynomial", (0, uU.i)("BaseTexture", "sphericalPolynomial"))
  },
  39855: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => mU,
      e: () => fU
    });
    var tU = gU(39377),
      pU = gU(39380),
      EU = gU(36624),
      PU = gU(36600),
      TU = gU(39373),
      qU = gU(36639),
      KU = gU(39256),
      cU = gU(39268),
      GU = gU(39475),
      jU = gU(37308),
      uU = gU(39434);

    function CU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const tU = RU.width,
        pU = RU.height;
      if (UU instanceof Float32Array) {
        let RU = UU.byteLength / UU.BYTES_PER_ELEMENT;
        const gU = new Uint8Array(RU);
        for (; --RU >= 0;) {
          let tU = UU[RU];
          tU < 0 ? tU = 0 : tU > 1 && (tU = 1), gU[RU] = 255 * tU
        }
        UU = gU
      }
      const EU = document.createElement("canvas");
      EU.width = tU, EU.height = pU;
      const PU = EU.getContext("2d");
      if (!PU) return null;
      const TU = PU.createImageData(tU, pU);
      if (TU.data.set(UU), PU.putImageData(TU, 0, 0), gU) {
        const UU = document.createElement("canvas");
        UU.width = tU, UU.height = pU;
        const RU = UU.getContext("2d");
        return RU ? (RU.translate(0, pU), RU.scale(1, -1), RU.drawImage(EU, 0, 0), UU.toDataURL("image/png")) : null
      }
      return EU.toDataURL("image/png")
    }

    function hU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const tU = UU.getInternalTexture();
      if (!tU) return null;
      const pU = UU._readPixelsSync(RU, gU);
      return pU ? CU(pU, UU.getSize(), tU.invertY) : null
    }
    async function QU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const tU = UU.getInternalTexture();
      if (!tU) return null;
      const pU = await UU.readPixels(RU, gU);
      return pU ? CU(pU, UU.getSize(), tU.invertY) : null
    }
    var eU = gU(39812),
      WU = gU(39395);
    let fU = (() => {
        var UU;
        let RU, gU, CU, fU, xU, mU, IU, JU, wU, nU, bU, oU, ZU, aU = TU.b,
          YU = [],
          BU = [],
          VU = [],
          rU = [],
          XU = [],
          vU = [],
          dU = [],
          HU = [],
          SU = [],
          sU = [],
          yU = [],
          kU = [],
          FU = [],
          iU = [],
          AU = [],
          zU = [],
          MU = [],
          DU = [],
          LU = [],
          NU = [],
          lU = [],
          OU = [],
          UR = [],
          RR = [],
          gR = [];
        return UU = class extends aU {
          static _CreateVideoTexture(RU, gU, tU) {
            arguments.length > 5 && void 0 !== arguments[5] || UU.TRILINEAR_SAMPLINGMODE;
            throw (0, KU.n)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(UU) {
            this._isBlocking = UU
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(RU, gU, pU, PU) {
            let TU, qU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : UU.TRILINEAR_SAMPLINGMODE,
              KU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              GU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              jU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              uU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              CU = arguments.length > 9 ? arguments[9] : void 0,
              hU = arguments.length > 10 ? arguments[10] : void 0,
              QU = arguments.length > 11 ? arguments[11] : void 0,
              WU = arguments.length > 12 ? arguments[12] : void 0,
              fU = arguments.length > 13 ? arguments[13] : void 0;
            super(gU), this.url = ((0, tU.j)(this, YU), (0, tU.j)(this, BU, null)), this.uOffset = ((0, tU.j)(this, VU), (0, tU.j)(this, rU, 0)), this.vOffset = ((0, tU.j)(this, XU), (0, tU.j)(this, vU, 0)), this.uScale = ((0, tU.j)(this, dU), (0, tU.j)(this, HU, 1)), this.vScale = ((0, tU.j)(this, SU), (0, tU.j)(this, sU, 1)), this.uAng = ((0, tU.j)(this, yU), (0, tU.j)(this, kU, 0)), this.vAng = ((0, tU.j)(this, FU), (0, tU.j)(this, iU, 0)), this.wAng = ((0, tU.j)(this, AU), (0, tU.j)(this, zU, 0)), this.uRotationCenter = ((0, tU.j)(this, MU), (0, tU.j)(this, DU, .5)), this.vRotationCenter = ((0, tU.j)(this, LU), (0, tU.j)(this, NU, .5)), this.wRotationCenter = ((0, tU.j)(this, lU), (0, tU.j)(this, OU, .5)), this.homogeneousRotationInUVTransform = ((0, tU.j)(this, UR), (0, tU.j)(this, RR, !1)), this.inspectableCustomProperties = ((0, tU.j)(this, gR), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new EU.b, this._isBlocking = !0, this.name = RU || "", this.url = RU;
            let xU = !1,
              mU = null,
              IU = !0;
            "object" === typeof pU && null !== pU ? (TU = pU.noMipmap ?? !1, PU = pU.invertY ?? !eU.c, qU = pU.samplingMode ?? UU.TRILINEAR_SAMPLINGMODE, KU = pU.onLoad ?? null, GU = pU.onError ?? null, jU = pU.buffer ?? null, uU = pU.deleteBuffer ?? !1, CU = pU.format, hU = pU.mimeType, QU = pU.loaderOptions, WU = pU.creationFlags, xU = pU.useSRGBBuffer ?? !1, mU = pU.internalTexture ?? null, IU = pU.gammaSpace ?? IU, fU = pU.forcedExtension ?? fU) : TU = !!pU, this._gammaSpace = IU, this._noMipmap = TU, this._invertY = void 0 === PU ? !eU.c : PU, this._initialSamplingMode = qU, this._buffer = jU, this._deleteBuffer = uU, this._mimeType = hU, this._loaderOptions = QU, this._creationFlags = WU, this._useSRGBBuffer = xU, this._forcedExtension = fU, void 0 !== CU && (this._format = CU);
            const JU = this.aZ(),
              wU = this._getEngine();
            if (!wU) return;
            wU.onBeforeTextureInitObservable.notifyObservers(this);
            const nU = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), KU && KU(), !this.isBlocking && JU && JU.resetCachedMaterial()
              },
              bU = (RU, gU) => {
                this._loadingError = !0, this._errorObject = {
                  message: RU,
                  exception: gU
                }, GU && GU(RU, gU), UU.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !mU) return this._delayedOnLoad = nU, void(this._delayedOnError = bU);
            if (this._texture = mU ?? this._getFromCache(this.url, TU, qU, this._invertY, xU, this.isCube), this._texture)
              if (this._texture.isReady) cU.b.SetImmediate((() => nU()));
              else {
                const UU = this._texture.onLoadedObservable.add(nU);
                this._texture.onErrorObservable.add((RU => {
                  bU(RU.message, RU.exception), this._texture?.onLoadedObservable.remove(UU)
                }))
              }
            else if (JU && JU.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = nU, this._delayedOnError = bU;
            else {
              try {
                this._texture = wU.createTexture(this.url, TU, this._invertY, JU, qU, nU, bU, this._buffer, void 0, this._format, this._forcedExtension, hU, QU, WU, xU)
              } catch (oU) {
                throw bU("error loading", oU), oU
              }
              uU && (this._buffer = null)
            }
          }
          updateURL(UU) {
            let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              gU = arguments.length > 2 ? arguments[2] : void 0,
              tU = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.aZ().markAllMaterialsAsDirty(1, (UU => UU.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = UU), this.url = UU, this._buffer = RU, this._forcedExtension = tU, this.delayLoadState = 4;
            const pU = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              pU ? pU() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), gU && gU()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const UU = this.aZ();
            if (!UU) return;
            let RU = this.url;
            !RU && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (RU = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(RU, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? cU.b.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = UU.WC().createTexture(RU, this._noMipmap, this._invertY, UU, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(UU, RU, gU, tU) {
            UU *= this._cachedUScale, RU *= this._cachedVScale, UU -= this.uRotationCenter * this._cachedUScale, RU -= this.vRotationCenter * this._cachedVScale, gU -= this.wRotationCenter, PU.n.TransformCoordinatesFromFloatsToRef(UU, RU, gU, this._rowGenerationMatrix, tU), tU.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, tU.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, tU.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * UU === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * UU, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = PU.c.Zero(), this._rowGenerationMatrix = new PU.c, this._t0 = PU.n.Zero(), this._t1 = PU.n.Zero(), this._t2 = PU.n.Zero()), PU.c.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (PU.c.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, PU.h.Matrix[0]), PU.c.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, PU.h.Matrix[1]), PU.c.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, PU.h.Matrix[2]), PU.c.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, PU.h.Matrix[3]), PU.h.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(PU.h.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(PU.h.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(PU.h.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.ptU(this._t0), this._t2.ptU(this._t0), PU.c.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const RU = this.aZ();
            if (!RU) return this._cachedTextureMatrix;
            const gU = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && gU !== this._cachedIdentity3x2 && RU.markAllMaterialsAsDirty(1, (UU => UU.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const RU = this.aZ();
            if (!RU) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== UU.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === RU.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = PU.c.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = PU.c.Zero());
            const gU = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case UU.PLANAR_MODE:
                PU.c.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case UU.PROJECTION_MODE: {
                PU.c.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const UU = RU.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = UU.updateFlag, UU.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                PU.c.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return gU && RU.markAllMaterialsAsDirty(1, (UU => UU.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const RU = {
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
            return WU.b.Clone((() => new UU(this._texture ? this._texture.url : null, this.aZ(), RU)), this)
          }
          serialize() {
            const RU = this.name;
            UU.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const gU = super.serialize(UU._SerializeInternalTextureUniqueId);
            if (!gU) return null;
            if (UU.SerializeBuffers || UU.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) gU.base64String = this._buffer, gU.name = gU.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const UU = this.mimeType || "image/png";
              gU.base64String = `data:${UU};base64,${(0,uU.d)(this._buffer)}`
            } else(UU.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (gU.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? hU(this) : QU(this));
            return gU.invertY = this._invertY, gU.samplingMode = this.samplingMode, gU._creationFlags = this._creationFlags, gU._useSRGBBuffer = this._useSRGBBuffer, UU._SerializeInternalTextureUniqueId && (gU.internalTextureUniqueId = this._texture?.uniqueId), gU.internalTextureLabel = this._texture?.label, gU.noMipmap = this._noMipmap, this.name = RU, gU
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(RU, gU, tU) {
            if (RU.customType) {
              const UU = GU.b.Instantiate(RU.customType).Parse(RU, gU, tU);
              return RU.samplingMode && UU.updateSamplingMode && UU._samplingMode && UU._samplingMode !== RU.samplingMode && UU.updateSamplingMode(RU.samplingMode), UU
            }
            if (RU.isCube && !RU.isRenderTarget) return UU._CubeTextureParser(RU, gU, tU);
            const pU = void 0 !== RU.internalTextureUniqueId;
            if (!RU.name && !RU.isRenderTarget && !pU) return null;
            let EU;
            if (pU) {
              const UU = gU.WC().getLoadedTexturesCache();
              for (const gU of UU)
                if (gU.uniqueId === RU.internalTextureUniqueId) {
                  EU = gU;
                  break
                }
            }
            const PU = UU => {
              if (UU && UU._texture && (UU._texture._cachedWrapU = null, UU._texture._cachedWrapV = null, UU._texture._cachedWrapR = null), RU.samplingMode) {
                const gU = RU.samplingMode;
                UU && UU.samplingMode !== gU && UU.updateSamplingMode(gU)
              }
              if (UU && RU.animations)
                for (let gU = 0; gU < RU.animations.length; gU++) {
                  const tU = RU.animations[gU],
                    pU = (0, qU.e)("BABYLON.Animation");
                  pU && UU.animations.push(pU.Parse(tU))
                }
              UU && UU._texture && (pU && !EU && UU._texture._setUniqueId(RU.internalTextureUniqueId), UU._texture.label = RU.internalTextureLabel)
            };
            return WU.b.Parse((() => {
              let pU = !0;
              if (RU.noMipmap && (pU = !1), RU.mirrorPlane) {
                const tU = UU._CreateMirror(RU.name, RU.renderTargetSize, gU, pU);
                return tU._waitingRenderList = RU.renderList, tU.mirrorPlane = jU.e.FromArray(RU.mirrorPlane), PU(tU), tU
              }
              if (RU.isRenderTarget && !RU.base64String) {
                let tU = null;
                if (RU.isCube) {
                  if (gU.reflectionProbes)
                    for (let UU = 0; UU < gU.reflectionProbes.length; UU++) {
                      const tU = gU.reflectionProbes[UU];
                      if (tU.name === RU.name) return tU.cubeTexture
                    }
                } else tU = UU._CreateRenderTargetTexture(RU.name, RU.renderTargetSize, gU, pU, RU._creationFlags ?? 0), tU._waitingRenderList = RU.renderList;
                return PU(tU), tU
              }
              if (RU.isVideo) {
                const EU = UU._CreateVideoTexture(tU + (RU.url || RU.name), tU + (RU.src || RU.url), gU, pU, RU.invertY, RU.samplingMode, RU.settings || {});
                return PU(EU), EU
              } {
                let TU;
                if ("string" === typeof RU.base64String && RU.base64String && !EU) {
                  const tU = {
                      buffer: RU.base64String,
                      noMipmap: !pU,
                      invertY: RU.invertY,
                      samplingMode: RU.samplingMode,
                      useSRGBBuffer: RU._useSRGBBuffer ?? !1,
                      creationFlags: RU._creationFlags ?? 0,
                      onLoad: () => {
                        PU(TU)
                      }
                    },
                    EU = RU.base64String,
                    qU = EU.startsWith("data:") ? EU.substring(5) : EU;
                  TU = UU.CreateFromBase64String("", qU, gU, tU), TU.name = RU.name
                } else {
                  let qU;
                  qU = RU.name && (RU.name.indexOf("://") > 0 || RU.name.startsWith("data:")) ? RU.name : tU + RU.name, RU.url && (RU.url.startsWith("data:") || UU.UseSerializedUrlIfAny) && (qU = RU.url);
                  const KU = {
                    noMipmap: !pU,
                    invertY: RU.invertY,
                    samplingMode: RU.samplingMode,
                    useSRGBBuffer: RU._useSRGBBuffer ?? !1,
                    creationFlags: RU._creationFlags ?? 0,
                    onLoad: () => {
                      PU(TU)
                    },
                    internalTexture: EU
                  };
                  TU = new UU(qU, gU, KU)
                }
                return TU
              }
            }), RU, gU)
          }
          static CreateFromBase64String(RU, gU, tU, pU, EU) {
            let PU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : UU.TRILINEAR_SAMPLINGMODE;
            return new UU("data:" + gU, tU, pU, EU, PU, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, RU, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(RU, gU, tU) {
            let pU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              EU = arguments.length > 4 ? arguments[4] : void 0,
              PU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              TU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : UU.TRILINEAR_SAMPLINGMODE,
              qU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              KU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              cU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              GU = arguments.length > 10 ? arguments[10] : void 0,
              jU = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== RU.substring(0, 5) && (RU = "data:" + RU), new UU(RU, tU, EU, PU, TU, qU, KU, gU, pU, cU, void 0, void 0, GU, jU)
          }
        }, (() => {
          const EU = "function" === typeof Symbol && Symbol.metadata ? Object.create(aU[Symbol.metadata] ?? null) : void 0;
          RU = [(0, pU.K)()], gU = [(0, pU.K)()], CU = [(0, pU.K)()], fU = [(0, pU.K)()], xU = [(0, pU.K)()], mU = [(0, pU.K)()], IU = [(0, pU.K)()], JU = [(0, pU.K)()], wU = [(0, pU.K)()], nU = [(0, pU.K)()], bU = [(0, pU.K)()], oU = [(0, pU.K)()], ZU = [(0, pU.K)()], (0, tU.i)(UU, null, ZU, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: UU => "isBlocking" in UU,
              get: UU => UU.isBlocking
            },
            metadata: EU
          }, null, YU), (0, tU.i)(null, null, RU, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: UU => "url" in UU,
              get: UU => UU.url,
              set: (UU, RU) => {
                UU.url = RU
              }
            },
            metadata: EU
          }, BU, VU), (0, tU.i)(null, null, gU, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: UU => "uOffset" in UU,
              get: UU => UU.uOffset,
              set: (UU, RU) => {
                UU.uOffset = RU
              }
            },
            metadata: EU
          }, rU, XU), (0, tU.i)(null, null, CU, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: UU => "vOffset" in UU,
              get: UU => UU.vOffset,
              set: (UU, RU) => {
                UU.vOffset = RU
              }
            },
            metadata: EU
          }, vU, dU), (0, tU.i)(null, null, fU, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: UU => "uScale" in UU,
              get: UU => UU.uScale,
              set: (UU, RU) => {
                UU.uScale = RU
              }
            },
            metadata: EU
          }, HU, SU), (0, tU.i)(null, null, xU, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: UU => "vScale" in UU,
              get: UU => UU.vScale,
              set: (UU, RU) => {
                UU.vScale = RU
              }
            },
            metadata: EU
          }, sU, yU), (0, tU.i)(null, null, mU, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: UU => "uAng" in UU,
              get: UU => UU.uAng,
              set: (UU, RU) => {
                UU.uAng = RU
              }
            },
            metadata: EU
          }, kU, FU), (0, tU.i)(null, null, IU, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: UU => "vAng" in UU,
              get: UU => UU.vAng,
              set: (UU, RU) => {
                UU.vAng = RU
              }
            },
            metadata: EU
          }, iU, AU), (0, tU.i)(null, null, JU, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: UU => "wAng" in UU,
              get: UU => UU.wAng,
              set: (UU, RU) => {
                UU.wAng = RU
              }
            },
            metadata: EU
          }, zU, MU), (0, tU.i)(null, null, wU, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: UU => "uRotationCenter" in UU,
              get: UU => UU.uRotationCenter,
              set: (UU, RU) => {
                UU.uRotationCenter = RU
              }
            },
            metadata: EU
          }, DU, LU), (0, tU.i)(null, null, nU, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: UU => "vRotationCenter" in UU,
              get: UU => UU.vRotationCenter,
              set: (UU, RU) => {
                UU.vRotationCenter = RU
              }
            },
            metadata: EU
          }, NU, lU), (0, tU.i)(null, null, bU, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: UU => "wRotationCenter" in UU,
              get: UU => UU.wRotationCenter,
              set: (UU, RU) => {
                UU.wRotationCenter = RU
              }
            },
            metadata: EU
          }, OU, UR), (0, tU.i)(null, null, oU, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: UU => "homogeneousRotationInUVTransform" in UU,
              get: UU => UU.homogeneousRotationInUVTransform,
              set: (UU, RU) => {
                UU.homogeneousRotationInUVTransform = RU
              }
            },
            metadata: EU
          }, RR, gR), EU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EU
          })
        })(), UU.SerializeBuffers = !0, UU.ForceSerializeBuffers = !1, UU.OnTextureLoadErrorObservable = new EU.b, UU._SerializeInternalTextureUniqueId = !1, UU._CubeTextureParser = (UU, RU, gU) => {
          throw (0, KU.n)("CubeTexture")
        }, UU._CreateMirror = (UU, RU, gU, tU) => {
          throw (0, KU.n)("MirrorTexture")
        }, UU._CreateRenderTargetTexture = (UU, RU, gU, tU, pU) => {
          throw (0, KU.n)("RenderTargetTexture")
        }, UU.NEAREST_SAMPLINGMODE = 1, UU.NEAREST_NEAREST_MIPLINEAR = 8, UU.BILINEAR_SAMPLINGMODE = 2, UU.LINEAR_LINEAR_MIPNEAREST = 11, UU.TRILINEAR_SAMPLINGMODE = 3, UU.LINEAR_LINEAR_MIPLINEAR = 3, UU.NEAREST_NEAREST_MIPNEAREST = 4, UU.NEAREST_LINEAR_MIPNEAREST = 5, UU.NEAREST_LINEAR_MIPLINEAR = 6, UU.NEAREST_LINEAR = 7, UU.NEAREST_NEAREST = 1, UU.LINEAR_NEAREST_MIPNEAREST = 9, UU.LINEAR_NEAREST_MIPLINEAR = 10, UU.LINEAR_LINEAR = 2, UU.LINEAR_NEAREST = 12, UU.EXPLICIT_MODE = 0, UU.SPHERICAL_MODE = 1, UU.PLANAR_MODE = 2, UU.CUBIC_MODE = 3, UU.PROJECTION_MODE = 4, UU.SKYBOX_MODE = 5, UU.INVCUBIC_MODE = 6, UU.EQUIRECTANGULAR_MODE = 7, UU.FIXED_EQUIRECTANGULAR_MODE = 8, UU.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, UU.CLAMP_ADDRESSMODE = 0, UU.WRAP_ADDRESSMODE = 1, UU.MIRROR_ADDRESSMODE = 2, UU.UseSerializedUrlIfAny = !1, UU
      })(),
      xU = !1;

    function mU() {
      xU || (xU = !0, (0, qU.g)("BABYLON.Texture", fU), WU.b._TextureParser = fU.Parse)
    }
  },
  39387: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU
    });
    class tU {
      constructor(UU, RU) {
        this.width = UU, this.height = RU
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let UU = 0 | this.width;
        return UU = 397 * UU ^ this.height, UU
      }
      PgU(UU) {
        this.width = UU.width, this.height = UU.height
      }
      b_(UU, RU) {
        return this.width = UU, this.height = RU, this
      }
      set(UU, RU) {
        return this.b_(UU, RU)
      }
      multiplyByFloats(UU, RU) {
        return new tU(this.width * UU, this.height * RU)
      }
      clone() {
        return new tU(this.width, this.height)
      }
      equals(UU) {
        return !!UU && (this.width === UU.width && this.height === UU.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new tU(0, 0)
      }
      add(UU) {
        return new tU(this.width + UU.width, this.height + UU.height)
      }
      subtract(UU) {
        return new tU(this.width - UU.width, this.height - UU.height)
      }
      scale(UU) {
        return new tU(this.width * UU, this.height * UU)
      }
      static Lerp(UU, RU, gU) {
        const pU = UU.width + (RU.width - UU.width) * gU,
          EU = UU.height + (RU.height - UU.height) * gU;
        return new tU(pU, EU)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);