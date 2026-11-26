export const id = 279;
export const ids = [279];
export const modules = {
  41508: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU
    });
    let cU = !1
  },
  41108: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => pU
    });
    var cU = zU(41113),
      yU = zU(41121),
      QU = zU(37846),
      AU = zU(37819),
      FU = zU(37841),
      oU = zU(38649),
      DU = zU(41125);
    class EU {
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
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = DU.d.Zero(), this._cachedBaseSize = DU.d.Zero(), this._initialSamplingMode = 2, this._texture = EU._IsRenderTargetWrapper(UU) ? UU.texture : UU, this._texture && (this._engine = this._texture.qp(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(UU, this._texture, this._texture.generateMipMaps && XU)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var YU, NU = zU(41134),
      IU = zU(40989);
    let pU = (() => {
      var UU;
      let XU, zU, DU, YU, IU, pU, aU, tU, gU, kU, GU, BU, ZU, RU, PU, WU, dU, LU, eU, CU, wU, qU, OU, SU, rU, uU = EU,
        fU = [],
        iU = [],
        HU = [],
        MU = [],
        vU = [],
        VU = [],
        sU = [],
        nU = [],
        mU = [],
        lU = [],
        xU = [],
        JU = [],
        jU = [],
        KU = [],
        bU = [],
        TU = [],
        hU = [],
        UX = [],
        XX = [],
        zX = [],
        cX = [],
        yX = [],
        QX = [],
        AX = [],
        FX = [],
        oX = [],
        DX = [],
        EX = [],
        YX = [],
        NX = [],
        IX = [];
      return UU = class extends uU {
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
          this.nS()?.markAllMaterialsAsDirty(1, (UU => UU.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(UU) {
          UU !== this.isRGBD && (this._texture && (this._texture._isRGBD = UU), this.nS()?.markAllMaterialsAsDirty(1, (UU => UU.hasTexture(this))))
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
          return this._uid || (this._uid = (0, oU.d)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(UU) {
          this._onDisposeObserver && this.bS.remove(this._onDisposeObserver), this._onDisposeObserver = this.bS.add(UU)
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
        constructor(XU) {
          let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, cU.n)(this, fU), (0, cU.n)(this, iU, void 0)), this.name = ((0, cU.n)(this, HU), (0, cU.n)(this, MU, void 0)), this.displayName = ((0, cU.n)(this, vU), (0, cU.n)(this, VU, void 0)), this.metadata = ((0, cU.n)(this, sU), (0, cU.n)(this, nU, null)), this._internalMetadata = (0, cU.n)(this, mU), this.reservedDataStore = null, this._hasAlpha = (0, cU.n)(this, lU, !1), this._getAlphaFromRGB = ((0, cU.n)(this, xU), (0, cU.n)(this, JU, !1)), this.level = ((0, cU.n)(this, jU), (0, cU.n)(this, KU, 1)), this._coordinatesIndex = ((0, cU.n)(this, bU), (0, cU.n)(this, TU, 0)), this.optimizeUVAllocation = ((0, cU.n)(this, hU), (0, cU.n)(this, UX, !0)), this._coordinatesMode = ((0, cU.n)(this, XX), (0, cU.n)(this, zX, 0)), this.wrapR = ((0, cU.n)(this, cX), (0, cU.n)(this, yX, 1)), this.anisotropicFilteringLevel = ((0, cU.n)(this, QX), (0, cU.n)(this, AX, UU.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, cU.n)(this, FX), !1), this._gammaSpace = !0, this.invertZ = (0, cU.n)(this, oX, !1), this.lodLevelInAlpha = ((0, cU.n)(this, DX), (0, cU.n)(this, EX, !1)), this._dominantDirection = ((0, cU.n)(this, YX), null), this.isRenderTarget = (0, cU.n)(this, NX, !1), this._prefiltered = ((0, cU.n)(this, IX), !1), this._forceSerialize = !1, this.animations = [], this.bS = new QU.e, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, XU ? UU._IsScene(XU) ? this._scene = XU : this._engine = XU : this._scene = FU.b.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.qp()), this._texture = zU, this._uid = null
        }
        nS() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return AU.e.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return AU.e.IdentityReadOnly
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
        _getFromCache(UU, XU, zU, cU, yU, QU) {
          const AU = this._getEngine();
          if (!AU) return null;
          const FU = AU._getUseSRGBBuffer(!!yU, XU),
            oU = AU.getLoadedTexturesCache();
          for (let DU = 0; DU < oU.length; DU++) {
            const AU = oU[DU];
            if ((void 0 === yU || FU === AU._useSRGBBuffer) && (void 0 === cU || cU === AU.invertY) && AU.url === UU && AU.generateMipMaps === !XU && (!zU || zU === AU.samplingMode) && (void 0 === QU || QU === AU.isCube)) return AU.incrementReferences(), AU
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
          const UU = this.nS();
          UU && UU.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            cU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            yU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            AU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            FU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            oU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const DU = this._getEngine();
          if (!DU) return null;
          const EU = this.getSize();
          let YU = EU.width,
            NU = EU.height;
          0 !== XU && (YU /= Math.pow(2, XU), NU /= Math.pow(2, XU), YU = Math.round(YU), NU = Math.round(NU)), FU = Math.min(YU, FU), oU = Math.min(NU, oU);
          try {
            return this._texture.isCube || this._texture.is2DArray ? DU._readTexturePixels(this._texture, FU, oU, UU, XU, zU, cU, yU, QU, AU) : DU._readTexturePixels(this._texture, FU, oU, -1, XU, zU, cU, yU, QU, AU)
          } catch (IU) {
            return null
          }
        }
        _readPixelsSync() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            cU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            yU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const QU = this.getSize();
          let AU = QU.width,
            FU = QU.height;
          const oU = this._getEngine();
          if (!oU) return null;
          0 != XU && (AU /= Math.pow(2, XU), FU /= Math.pow(2, XU), AU = Math.round(AU), FU = Math.round(FU));
          try {
            return this._texture.isCube ? oU._readTexturePixelsSync(this._texture, AU, FU, UU, XU, zU, cU, yU) : oU._readTexturePixelsSync(this._texture, AU, FU, -1, XU, zU, cU, yU)
          } catch (DU) {
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
          this.bS.notifyObservers(this), this.bS.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !UU) return null;
          const XU = NU.b.Serialize(this);
          return NU.b.AppendSerializedAnimations(this, XU), XU
        }
        static WhenAllReady(UU, XU) {
          let zU = UU.length;
          if (0 !== zU)
            for (let cU = 0; cU < UU.length; cU++) {
              const yU = UU[cU];
              if (yU.isReady()) 0 === --zU && XU();
              else {
                const UU = yU.onLoadObservable;
                UU ? UU.addOnce((() => {
                  0 === --zU && XU()
                })) : 0 === --zU && XU()
              }
            } else XU()
        }
        static _IsScene(UU) {
          return "Scene" === UU.getClassName()
        }
      }, (() => {
        const QU = "function" === typeof Symbol && Symbol.metadata ? Object.create(uU[Symbol.metadata] ?? null) : void 0;
        XU = [(0, yU.I)()], zU = [(0, yU.I)()], DU = [(0, yU.I)()], YU = [(0, yU.I)()], IU = [(0, yU.I)("hasAlpha")], pU = [(0, yU.I)("getAlphaFromRGB")], aU = [(0, yU.I)()], tU = [(0, yU.I)("coordinatesIndex")], gU = [(0, yU.I)()], kU = [(0, yU.I)("coordinatesMode")], GU = [(0, yU.I)()], BU = [(0, yU.I)()], ZU = [(0, yU.I)()], RU = [(0, yU.I)()], PU = [(0, yU.I)()], WU = [(0, yU.I)()], dU = [(0, yU.I)()], LU = [(0, yU.I)()], eU = [(0, yU.I)()], CU = [(0, yU.I)()], wU = [(0, yU.I)()], qU = [(0, yU.I)()], OU = [(0, yU.I)()], SU = [(0, yU.x)()], rU = [(0, yU.I)()], (0, cU.j)(UU, null, GU, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: UU => "wrapU" in UU,
            get: UU => UU.wrapU
          },
          metadata: QU
        }, null, fU), (0, cU.j)(UU, null, BU, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: UU => "wrapV" in UU,
            get: UU => UU.wrapV
          },
          metadata: QU
        }, null, fU), (0, cU.j)(UU, null, PU, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: UU => "isCube" in UU,
            get: UU => UU.isCube
          },
          metadata: QU
        }, null, fU), (0, cU.j)(UU, null, WU, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: UU => "is3D" in UU,
            get: UU => UU.is3D
          },
          metadata: QU
        }, null, fU), (0, cU.j)(UU, null, dU, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: UU => "is2DArray" in UU,
            get: UU => UU.is2DArray
          },
          metadata: QU
        }, null, fU), (0, cU.j)(UU, null, LU, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: UU => "gammaSpace" in UU,
            get: UU => UU.gammaSpace
          },
          metadata: QU
        }, null, fU), (0, cU.j)(UU, null, wU, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: UU => "lodGenerationOffset" in UU,
            get: UU => UU.lodGenerationOffset
          },
          metadata: QU
        }, null, fU), (0, cU.j)(UU, null, qU, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: UU => "lodGenerationScale" in UU,
            get: UU => UU.lodGenerationScale
          },
          metadata: QU
        }, null, fU), (0, cU.j)(UU, null, OU, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: UU => "linearSpecularLOD" in UU,
            get: UU => UU.linearSpecularLOD
          },
          metadata: QU
        }, null, fU), (0, cU.j)(UU, null, SU, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "irradianceTexture" in UU,
            get: UU => UU.irradianceTexture
          },
          metadata: QU
        }, null, fU), (0, cU.j)(null, null, XU, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: UU => "uniqueId" in UU,
            get: UU => UU.uniqueId,
            set: (UU, XU) => {
              UU.uniqueId = XU
            }
          },
          metadata: QU
        }, iU, HU), (0, cU.j)(null, null, zU, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: UU => "name" in UU,
            get: UU => UU.name,
            set: (UU, XU) => {
              UU.name = XU
            }
          },
          metadata: QU
        }, MU, vU), (0, cU.j)(null, null, DU, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: UU => "displayName" in UU,
            get: UU => UU.displayName,
            set: (UU, XU) => {
              UU.displayName = XU
            }
          },
          metadata: QU
        }, VU, sU), (0, cU.j)(null, null, YU, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: UU => "metadata" in UU,
            get: UU => UU.metadata,
            set: (UU, XU) => {
              UU.metadata = XU
            }
          },
          metadata: QU
        }, nU, mU), (0, cU.j)(null, null, IU, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: UU => "_hasAlpha" in UU,
            get: UU => UU._hasAlpha,
            set: (UU, XU) => {
              UU._hasAlpha = XU
            }
          },
          metadata: QU
        }, lU, xU), (0, cU.j)(null, null, pU, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: UU => "_getAlphaFromRGB" in UU,
            get: UU => UU._getAlphaFromRGB,
            set: (UU, XU) => {
              UU._getAlphaFromRGB = XU
            }
          },
          metadata: QU
        }, JU, jU), (0, cU.j)(null, null, aU, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: UU => "level" in UU,
            get: UU => UU.level,
            set: (UU, XU) => {
              UU.level = XU
            }
          },
          metadata: QU
        }, KU, bU), (0, cU.j)(null, null, tU, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: UU => "_coordinatesIndex" in UU,
            get: UU => UU._coordinatesIndex,
            set: (UU, XU) => {
              UU._coordinatesIndex = XU
            }
          },
          metadata: QU
        }, TU, hU), (0, cU.j)(null, null, gU, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: UU => "optimizeUVAllocation" in UU,
            get: UU => UU.optimizeUVAllocation,
            set: (UU, XU) => {
              UU.optimizeUVAllocation = XU
            }
          },
          metadata: QU
        }, UX, XX), (0, cU.j)(null, null, kU, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: UU => "_coordinatesMode" in UU,
            get: UU => UU._coordinatesMode,
            set: (UU, XU) => {
              UU._coordinatesMode = XU
            }
          },
          metadata: QU
        }, zX, cX), (0, cU.j)(null, null, ZU, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: UU => "wrapR" in UU,
            get: UU => UU.wrapR,
            set: (UU, XU) => {
              UU.wrapR = XU
            }
          },
          metadata: QU
        }, yX, QX), (0, cU.j)(null, null, RU, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: UU => "anisotropicFilteringLevel" in UU,
            get: UU => UU.anisotropicFilteringLevel,
            set: (UU, XU) => {
              UU.anisotropicFilteringLevel = XU
            }
          },
          metadata: QU
        }, AX, FX), (0, cU.j)(null, null, eU, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: UU => "invertZ" in UU,
            get: UU => UU.invertZ,
            set: (UU, XU) => {
              UU.invertZ = XU
            }
          },
          metadata: QU
        }, oX, DX), (0, cU.j)(null, null, CU, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: UU => "lodLevelInAlpha" in UU,
            get: UU => UU.lodLevelInAlpha,
            set: (UU, XU) => {
              UU.lodLevelInAlpha = XU
            }
          },
          metadata: QU
        }, EX, YX), (0, cU.j)(null, null, rU, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: UU => "isRenderTarget" in UU,
            get: UU => UU.isRenderTarget,
            set: (UU, XU) => {
              UU.isRenderTarget = XU
            }
          },
          metadata: QU
        }, NX, IX), QU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: QU
        })
      })(), UU.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, UU
    })();
    (YU = pU.prototype).forceSphericalPolynomialsRecompute ?? (YU.forceSphericalPolynomialsRecompute = (0, IU.k)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(pU.prototype, "sphericalPolynomial") || Object.defineProperty(pU.prototype, "sphericalPolynomial", (0, IU.i)("BaseTexture", "sphericalPolynomial"))
  },
  41557: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => ZU,
      e: () => GU
    });
    var cU = zU(41113),
      yU = zU(41121),
      QU = zU(37846),
      AU = zU(37819),
      FU = zU(41108),
      oU = zU(37863),
      DU = zU(40989),
      EU = zU(40999),
      YU = zU(41207),
      NU = zU(38505),
      IU = zU(41171);

    function pU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const cU = XU.width,
        yU = XU.height;
      if (UU instanceof Float32Array) {
        let XU = UU.byteLength / UU.BYTES_PER_ELEMENT;
        const zU = new Uint8Array(XU);
        for (; --XU >= 0;) {
          let cU = UU[XU];
          cU < 0 ? cU = 0 : cU > 1 && (cU = 1), zU[XU] = 255 * cU
        }
        UU = zU
      }
      const QU = document.createElement("canvas");
      QU.width = cU, QU.height = yU;
      const AU = QU.getContext("2d");
      if (!AU) return null;
      const FU = AU.createImageData(cU, yU);
      if (FU.data.set(UU), AU.putImageData(FU, 0, 0), zU) {
        const UU = document.createElement("canvas");
        UU.width = cU, UU.height = yU;
        const XU = UU.getContext("2d");
        return XU ? (XU.translate(0, yU), XU.scale(1, -1), XU.drawImage(QU, 0, 0), UU.toDataURL("image/png")) : null
      }
      return QU.toDataURL("image/png")
    }

    function aU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const cU = UU.getInternalTexture();
      if (!cU) return null;
      const yU = UU._readPixelsSync(XU, zU);
      return yU ? pU(yU, UU.getSize(), cU.invertY) : null
    }
    async function tU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const cU = UU.getInternalTexture();
      if (!cU) return null;
      const yU = await UU.readPixels(XU, zU);
      return yU ? pU(yU, UU.getSize(), cU.invertY) : null
    }
    var gU = zU(41508),
      kU = zU(41134);
    let GU = (() => {
        var UU;
        let XU, zU, pU, GU, BU, ZU, RU, PU, WU, dU, LU, eU, CU, wU = FU.e,
          qU = [],
          OU = [],
          SU = [],
          rU = [],
          uU = [],
          fU = [],
          iU = [],
          HU = [],
          MU = [],
          vU = [],
          VU = [],
          sU = [],
          nU = [],
          mU = [],
          lU = [],
          xU = [],
          JU = [],
          jU = [],
          KU = [],
          bU = [],
          TU = [],
          hU = [],
          UX = [],
          XX = [],
          zX = [];
        return UU = class extends wU {
          static _CreateVideoTexture(XU, zU, cU) {
            arguments.length > 5 && void 0 !== arguments[5] || UU.TRILINEAR_SAMPLINGMODE;
            throw (0, DU.m)("VideoTexture")
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
          constructor(XU, zU, yU, AU) {
            let FU, oU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : UU.TRILINEAR_SAMPLINGMODE,
              DU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              YU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              NU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              IU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              pU = arguments.length > 9 ? arguments[9] : void 0,
              aU = arguments.length > 10 ? arguments[10] : void 0,
              tU = arguments.length > 11 ? arguments[11] : void 0,
              kU = arguments.length > 12 ? arguments[12] : void 0,
              GU = arguments.length > 13 ? arguments[13] : void 0;
            super(zU), this.url = ((0, cU.n)(this, qU), (0, cU.n)(this, OU, null)), this.uOffset = ((0, cU.n)(this, SU), (0, cU.n)(this, rU, 0)), this.vOffset = ((0, cU.n)(this, uU), (0, cU.n)(this, fU, 0)), this.uScale = ((0, cU.n)(this, iU), (0, cU.n)(this, HU, 1)), this.vScale = ((0, cU.n)(this, MU), (0, cU.n)(this, vU, 1)), this.uAng = ((0, cU.n)(this, VU), (0, cU.n)(this, sU, 0)), this.vAng = ((0, cU.n)(this, nU), (0, cU.n)(this, mU, 0)), this.wAng = ((0, cU.n)(this, lU), (0, cU.n)(this, xU, 0)), this.uRotationCenter = ((0, cU.n)(this, JU), (0, cU.n)(this, jU, .5)), this.vRotationCenter = ((0, cU.n)(this, KU), (0, cU.n)(this, bU, .5)), this.wRotationCenter = ((0, cU.n)(this, TU), (0, cU.n)(this, hU, .5)), this.homogeneousRotationInUVTransform = ((0, cU.n)(this, UX), (0, cU.n)(this, XX, !1)), this.inspectableCustomProperties = ((0, cU.n)(this, zX), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new QU.e, this._isBlocking = !0, this.name = XU || "", this.url = XU;
            let BU = !1,
              ZU = null,
              RU = !0;
            "object" === typeof yU && null !== yU ? (FU = yU.noMipmap ?? !1, AU = yU.invertY ?? !gU.c, oU = yU.samplingMode ?? UU.TRILINEAR_SAMPLINGMODE, DU = yU.onLoad ?? null, YU = yU.onError ?? null, NU = yU.buffer ?? null, IU = yU.deleteBuffer ?? !1, pU = yU.format, aU = yU.mimeType, tU = yU.loaderOptions, kU = yU.creationFlags, BU = yU.useSRGBBuffer ?? !1, ZU = yU.internalTexture ?? null, RU = yU.gammaSpace ?? RU, GU = yU.forcedExtension ?? GU) : FU = !!yU, this._gammaSpace = RU, this._noMipmap = FU, this._invertY = void 0 === AU ? !gU.c : AU, this._initialSamplingMode = oU, this._buffer = NU, this._deleteBuffer = IU, this._mimeType = aU, this._loaderOptions = tU, this._creationFlags = kU, this._useSRGBBuffer = BU, this._forcedExtension = GU, void 0 !== pU && (this._format = pU);
            const PU = this.nS(),
              WU = this._getEngine();
            if (!WU) return;
            WU.onBeforeTextureInitObservable.notifyObservers(this);
            const dU = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), DU && DU(), !this.isBlocking && PU && PU.resetCachedMaterial()
              },
              LU = (XU, zU) => {
                this._loadingError = !0, this._errorObject = {
                  message: XU,
                  exception: zU
                }, YU && YU(XU, zU), UU.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !ZU) return this._delayedOnLoad = dU, void(this._delayedOnError = LU);
            if (this._texture = ZU ?? this._getFromCache(this.url, FU, oU, this._invertY, BU, this.isCube), this._texture)
              if (this._texture.isReady) EU.e.SetImmediate((() => dU()));
              else {
                const UU = this._texture.onLoadedObservable.add(dU);
                this._texture.onErrorObservable.add((XU => {
                  LU(XU.message, XU.exception), this._texture?.onLoadedObservable.remove(UU)
                }))
              }
            else if (PU && PU.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = dU, this._delayedOnError = LU;
            else {
              try {
                this._texture = WU.createTexture(this.url, FU, this._invertY, PU, oU, dU, LU, this._buffer, void 0, this._format, this._forcedExtension, aU, tU, kU, BU)
              } catch (eU) {
                throw LU("error loading", eU), eU
              }
              IU && (this._buffer = null)
            }
          }
          updateURL(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              zU = arguments.length > 2 ? arguments[2] : void 0,
              cU = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.nS().markAllMaterialsAsDirty(1, (UU => UU.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = UU), this.url = UU, this._buffer = XU, this._forcedExtension = cU, this.delayLoadState = 4;
            const yU = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              yU ? yU() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), zU && zU()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const UU = this.nS();
            if (!UU) return;
            let XU = this.url;
            !XU && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (XU = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(XU, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? EU.e.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = UU.qp().createTexture(XU, this._noMipmap, this._invertY, UU, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(UU, XU, zU, cU) {
            UU *= this._cachedUScale, XU *= this._cachedVScale, UU -= this.uRotationCenter * this._cachedUScale, XU -= this.vRotationCenter * this._cachedVScale, zU -= this.wRotationCenter, AU.q.TransformCoordinatesFromFloatsToRef(UU, XU, zU, this._rowGenerationMatrix, cU), cU.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, cU.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, cU.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * UU === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * UU, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = AU.e.Zero(), this._rowGenerationMatrix = new AU.e, this._t0 = AU.q.Zero(), this._t1 = AU.q.Zero(), this._t2 = AU.q.Zero()), AU.e.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (AU.e.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, AU.l.Matrix[0]), AU.e.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, AU.l.Matrix[1]), AU.e.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, AU.l.Matrix[2]), AU.e.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, AU.l.Matrix[3]), AU.l.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(AU.l.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(AU.l.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(AU.l.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.ZyU(this._t0), this._t2.ZyU(this._t0), AU.e.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const XU = this.nS();
            if (!XU) return this._cachedTextureMatrix;
            const zU = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && zU !== this._cachedIdentity3x2 && XU.markAllMaterialsAsDirty(1, (UU => UU.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const XU = this.nS();
            if (!XU) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== UU.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === XU.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = AU.e.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = AU.e.Zero());
            const zU = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case UU.PLANAR_MODE:
                AU.e.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case UU.PROJECTION_MODE: {
                AU.e.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const UU = XU.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = UU.updateFlag, UU.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                AU.e.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return zU && XU.markAllMaterialsAsDirty(1, (UU => UU.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const XU = {
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
            return kU.b.Clone((() => new UU(this._texture ? this._texture.url : null, this.nS(), XU)), this)
          }
          serialize() {
            const XU = this.name;
            UU.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const zU = super.serialize(UU._SerializeInternalTextureUniqueId);
            if (!zU) return null;
            if (UU.SerializeBuffers || UU.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) zU.base64String = this._buffer, zU.name = zU.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const UU = this.mimeType || "image/png";
              zU.base64String = `data:${UU};base64,${(0,IU.f)(this._buffer)}`
            } else(UU.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (zU.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? aU(this) : tU(this));
            return zU.invertY = this._invertY, zU.samplingMode = this.samplingMode, zU._creationFlags = this._creationFlags, zU._useSRGBBuffer = this._useSRGBBuffer, UU._SerializeInternalTextureUniqueId && (zU.internalTextureUniqueId = this._texture?.uniqueId), zU.internalTextureLabel = this._texture?.label, zU.noMipmap = this._noMipmap, this.name = XU, zU
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(XU, zU, cU) {
            if (XU.customType) {
              const UU = YU.c.Instantiate(XU.customType).Parse(XU, zU, cU);
              return XU.samplingMode && UU.updateSamplingMode && UU._samplingMode && UU._samplingMode !== XU.samplingMode && UU.updateSamplingMode(XU.samplingMode), UU
            }
            if (XU.isCube && !XU.isRenderTarget) return UU._CubeTextureParser(XU, zU, cU);
            const yU = void 0 !== XU.internalTextureUniqueId;
            if (!XU.name && !XU.isRenderTarget && !yU) return null;
            let QU;
            if (yU) {
              const UU = zU.qp().getLoadedTexturesCache();
              for (const zU of UU)
                if (zU.uniqueId === XU.internalTextureUniqueId) {
                  QU = zU;
                  break
                }
            }
            const AU = UU => {
              if (UU && UU._texture && (UU._texture._cachedWrapU = null, UU._texture._cachedWrapV = null, UU._texture._cachedWrapR = null), XU.samplingMode) {
                const zU = XU.samplingMode;
                UU && UU.samplingMode !== zU && UU.updateSamplingMode(zU)
              }
              if (UU && XU.animations)
                for (let zU = 0; zU < XU.animations.length; zU++) {
                  const cU = XU.animations[zU],
                    yU = (0, oU.e)("BABYLON.Animation");
                  yU && UU.animations.push(yU.Parse(cU))
                }
              UU && UU._texture && (yU && !QU && UU._texture._setUniqueId(XU.internalTextureUniqueId), UU._texture.label = XU.internalTextureLabel)
            };
            return kU.b.Parse((() => {
              let yU = !0;
              if (XU.noMipmap && (yU = !1), XU.mirrorPlane) {
                const cU = UU._CreateMirror(XU.name, XU.renderTargetSize, zU, yU);
                return cU._waitingRenderList = XU.renderList, cU.mirrorPlane = NU.d.FromArray(XU.mirrorPlane), AU(cU), cU
              }
              if (XU.isRenderTarget && !XU.base64String) {
                let cU = null;
                if (XU.isCube) {
                  if (zU.reflectionProbes)
                    for (let UU = 0; UU < zU.reflectionProbes.length; UU++) {
                      const cU = zU.reflectionProbes[UU];
                      if (cU.name === XU.name) return cU.cubeTexture
                    }
                } else cU = UU._CreateRenderTargetTexture(XU.name, XU.renderTargetSize, zU, yU, XU._creationFlags ?? 0), cU._waitingRenderList = XU.renderList;
                return AU(cU), cU
              }
              if (XU.isVideo) {
                const QU = UU._CreateVideoTexture(cU + (XU.url || XU.name), cU + (XU.src || XU.url), zU, yU, XU.invertY, XU.samplingMode, XU.settings || {});
                return AU(QU), QU
              } {
                let FU;
                if ("string" === typeof XU.base64String && XU.base64String && !QU) {
                  const cU = {
                      buffer: XU.base64String,
                      noMipmap: !yU,
                      invertY: XU.invertY,
                      samplingMode: XU.samplingMode,
                      useSRGBBuffer: XU._useSRGBBuffer ?? !1,
                      creationFlags: XU._creationFlags ?? 0,
                      onLoad: () => {
                        AU(FU)
                      }
                    },
                    QU = XU.base64String,
                    oU = QU.startsWith("data:") ? QU.substring(5) : QU;
                  FU = UU.CreateFromBase64String("", oU, zU, cU), FU.name = XU.name
                } else {
                  let oU;
                  oU = XU.name && (XU.name.indexOf("://") > 0 || XU.name.startsWith("data:")) ? XU.name : cU + XU.name, XU.url && (XU.url.startsWith("data:") || UU.UseSerializedUrlIfAny) && (oU = XU.url);
                  const DU = {
                    noMipmap: !yU,
                    invertY: XU.invertY,
                    samplingMode: XU.samplingMode,
                    useSRGBBuffer: XU._useSRGBBuffer ?? !1,
                    creationFlags: XU._creationFlags ?? 0,
                    onLoad: () => {
                      AU(FU)
                    },
                    internalTexture: QU
                  };
                  FU = new UU(oU, zU, DU)
                }
                return FU
              }
            }), XU, zU)
          }
          static CreateFromBase64String(XU, zU, cU, yU, QU) {
            let AU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : UU.TRILINEAR_SAMPLINGMODE;
            return new UU("data:" + zU, cU, yU, QU, AU, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, XU, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(XU, zU, cU) {
            let yU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              QU = arguments.length > 4 ? arguments[4] : void 0,
              AU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              FU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : UU.TRILINEAR_SAMPLINGMODE,
              oU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              DU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              EU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              YU = arguments.length > 10 ? arguments[10] : void 0,
              NU = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== XU.substring(0, 5) && (XU = "data:" + XU), new UU(XU, cU, QU, AU, FU, oU, DU, zU, yU, EU, void 0, void 0, YU, NU)
          }
        }, (() => {
          const QU = "function" === typeof Symbol && Symbol.metadata ? Object.create(wU[Symbol.metadata] ?? null) : void 0;
          XU = [(0, yU.I)()], zU = [(0, yU.I)()], pU = [(0, yU.I)()], GU = [(0, yU.I)()], BU = [(0, yU.I)()], ZU = [(0, yU.I)()], RU = [(0, yU.I)()], PU = [(0, yU.I)()], WU = [(0, yU.I)()], dU = [(0, yU.I)()], LU = [(0, yU.I)()], eU = [(0, yU.I)()], CU = [(0, yU.I)()], (0, cU.j)(UU, null, CU, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: UU => "isBlocking" in UU,
              get: UU => UU.isBlocking
            },
            metadata: QU
          }, null, qU), (0, cU.j)(null, null, XU, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: UU => "url" in UU,
              get: UU => UU.url,
              set: (UU, XU) => {
                UU.url = XU
              }
            },
            metadata: QU
          }, OU, SU), (0, cU.j)(null, null, zU, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: UU => "uOffset" in UU,
              get: UU => UU.uOffset,
              set: (UU, XU) => {
                UU.uOffset = XU
              }
            },
            metadata: QU
          }, rU, uU), (0, cU.j)(null, null, pU, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: UU => "vOffset" in UU,
              get: UU => UU.vOffset,
              set: (UU, XU) => {
                UU.vOffset = XU
              }
            },
            metadata: QU
          }, fU, iU), (0, cU.j)(null, null, GU, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: UU => "uScale" in UU,
              get: UU => UU.uScale,
              set: (UU, XU) => {
                UU.uScale = XU
              }
            },
            metadata: QU
          }, HU, MU), (0, cU.j)(null, null, BU, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: UU => "vScale" in UU,
              get: UU => UU.vScale,
              set: (UU, XU) => {
                UU.vScale = XU
              }
            },
            metadata: QU
          }, vU, VU), (0, cU.j)(null, null, ZU, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: UU => "uAng" in UU,
              get: UU => UU.uAng,
              set: (UU, XU) => {
                UU.uAng = XU
              }
            },
            metadata: QU
          }, sU, nU), (0, cU.j)(null, null, RU, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: UU => "vAng" in UU,
              get: UU => UU.vAng,
              set: (UU, XU) => {
                UU.vAng = XU
              }
            },
            metadata: QU
          }, mU, lU), (0, cU.j)(null, null, PU, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: UU => "wAng" in UU,
              get: UU => UU.wAng,
              set: (UU, XU) => {
                UU.wAng = XU
              }
            },
            metadata: QU
          }, xU, JU), (0, cU.j)(null, null, WU, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: UU => "uRotationCenter" in UU,
              get: UU => UU.uRotationCenter,
              set: (UU, XU) => {
                UU.uRotationCenter = XU
              }
            },
            metadata: QU
          }, jU, KU), (0, cU.j)(null, null, dU, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: UU => "vRotationCenter" in UU,
              get: UU => UU.vRotationCenter,
              set: (UU, XU) => {
                UU.vRotationCenter = XU
              }
            },
            metadata: QU
          }, bU, TU), (0, cU.j)(null, null, LU, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: UU => "wRotationCenter" in UU,
              get: UU => UU.wRotationCenter,
              set: (UU, XU) => {
                UU.wRotationCenter = XU
              }
            },
            metadata: QU
          }, hU, UX), (0, cU.j)(null, null, eU, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: UU => "homogeneousRotationInUVTransform" in UU,
              get: UU => UU.homogeneousRotationInUVTransform,
              set: (UU, XU) => {
                UU.homogeneousRotationInUVTransform = XU
              }
            },
            metadata: QU
          }, XX, zX), QU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QU
          })
        })(), UU.SerializeBuffers = !0, UU.ForceSerializeBuffers = !1, UU.OnTextureLoadErrorObservable = new QU.e, UU._SerializeInternalTextureUniqueId = !1, UU._CubeTextureParser = (UU, XU, zU) => {
          throw (0, DU.m)("CubeTexture")
        }, UU._CreateMirror = (UU, XU, zU, cU) => {
          throw (0, DU.m)("MirrorTexture")
        }, UU._CreateRenderTargetTexture = (UU, XU, zU, cU, yU) => {
          throw (0, DU.m)("RenderTargetTexture")
        }, UU.NEAREST_SAMPLINGMODE = 1, UU.NEAREST_NEAREST_MIPLINEAR = 8, UU.BILINEAR_SAMPLINGMODE = 2, UU.LINEAR_LINEAR_MIPNEAREST = 11, UU.TRILINEAR_SAMPLINGMODE = 3, UU.LINEAR_LINEAR_MIPLINEAR = 3, UU.NEAREST_NEAREST_MIPNEAREST = 4, UU.NEAREST_LINEAR_MIPNEAREST = 5, UU.NEAREST_LINEAR_MIPLINEAR = 6, UU.NEAREST_LINEAR = 7, UU.NEAREST_NEAREST = 1, UU.LINEAR_NEAREST_MIPNEAREST = 9, UU.LINEAR_NEAREST_MIPLINEAR = 10, UU.LINEAR_LINEAR = 2, UU.LINEAR_NEAREST = 12, UU.EXPLICIT_MODE = 0, UU.SPHERICAL_MODE = 1, UU.PLANAR_MODE = 2, UU.CUBIC_MODE = 3, UU.PROJECTION_MODE = 4, UU.SKYBOX_MODE = 5, UU.INVCUBIC_MODE = 6, UU.EQUIRECTANGULAR_MODE = 7, UU.FIXED_EQUIRECTANGULAR_MODE = 8, UU.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, UU.CLAMP_ADDRESSMODE = 0, UU.WRAP_ADDRESSMODE = 1, UU.MIRROR_ADDRESSMODE = 2, UU.UseSerializedUrlIfAny = !1, UU
      })(),
      BU = !1;

    function ZU() {
      BU || (BU = !0, (0, oU.h)("BABYLON.Texture", GU), kU.b._TextureParser = GU.Parse)
    }
  },
  41125: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU
    });
    class cU {
      constructor(UU, XU) {
        this.width = UU, this.height = XU
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
      YL(UU) {
        this.width = UU.width, this.height = UU.height
      }
      sUU(UU, XU) {
        return this.width = UU, this.height = XU, this
      }
      set(UU, XU) {
        return this.sUU(UU, XU)
      }
      multiplyByFloats(UU, XU) {
        return new cU(this.width * UU, this.height * XU)
      }
      clone() {
        return new cU(this.width, this.height)
      }
      equals(UU) {
        return !!UU && (this.width === UU.width && this.height === UU.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new cU(0, 0)
      }
      add(UU) {
        return new cU(this.width + UU.width, this.height + UU.height)
      }
      subtract(UU) {
        return new cU(this.width - UU.width, this.height - UU.height)
      }
      scale(UU) {
        return new cU(this.width * UU, this.height * UU)
      }
      static Lerp(UU, XU, zU) {
        const yU = UU.width + (XU.width - UU.width) * zU,
          QU = UU.height + (XU.height - UU.height) * zU;
        return new cU(yU, QU)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);