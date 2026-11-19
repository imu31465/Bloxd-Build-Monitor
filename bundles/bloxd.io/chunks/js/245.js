export const id = 245;
export const ids = [245];
export const modules = {
  39546: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => FY
    });
    let FY = !1
  },
  39123: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => yY
    });
    var FY = DY(39127),
      AY = DY(39131),
      IY = DY(36552),
      RY = DY(36524),
      OY = DY(36546),
      gY = DY(37242),
      aY = DY(39139);
    class vY {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(YY) {
        this._wrapU = YY
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(YY) {
        this._wrapV = YY
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(YY) {
        this._texture && (this._texture.isCube = YY)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(YY) {
        this._texture && (this._texture.is3D = YY)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(YY) {
        this._texture && (this._texture.is2DArray = YY)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(YY) {
        return void 0 !== YY?.shareDepth
      }
      constructor(YY) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = aY.e.Zero(), this._cachedBaseSize = aY.e.Zero(), this._initialSamplingMode = 2, this._texture = vY._IsRenderTargetWrapper(YY) ? YY.texture : YY, this._texture && (this._engine = this._texture.ky(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(YY, this._texture, this._texture.generateMipMaps && rY)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var uY, sY = DY(39144),
      iY = DY(39029);
    let yY = (() => {
      var YY;
      let rY, DY, aY, uY, iY, yY, QY, oY, WY, EY, mY, VY, SY, lY, TY, eY, NY, BY, cY, KY, HY, zY, ZY, CY, fY, jY = vY,
        hY = [],
        dY = [],
        JY = [],
        MY = [],
        wY = [],
        bY = [],
        XY = [],
        qY = [],
        pY = [],
        kY = [],
        GY = [],
        xY = [],
        nY = [],
        PY = [],
        UY = [],
        LY = [],
        tY = [],
        Yr = [],
        rr = [],
        Dr = [],
        Fr = [],
        Ar = [],
        Ir = [],
        Rr = [],
        Or = [],
        gr = [],
        ar = [],
        vr = [],
        ur = [],
        sr = [],
        ir = [];
      return YY = class extends jY {
        set hasAlpha(YY) {
          this._hasAlpha = YY
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(YY) {
          this._getAlphaFromRGB !== YY && (this._getAlphaFromRGB = YY, this._scene && this._scene.markAllMaterialsAsDirty(1, (YY => YY.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(YY) {
          this._coordinatesIndex !== YY && (this._coordinatesIndex = YY, this._scene && this._scene.markAllMaterialsAsDirty(1, (YY => YY.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(YY) {
          this._coordinatesMode !== YY && (this._coordinatesMode = YY, this._scene && this._scene.markAllMaterialsAsDirty(1, (YY => YY.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(YY) {
          this._wrapU = YY
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(YY) {
          this._wrapV = YY
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(YY) {
          this._texture ? this._texture.isCube = YY : this._isCube = YY
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(YY) {
          this._texture && (this._texture.is3D = YY)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(YY) {
          this._texture && (this._texture.is2DArray = YY)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(YY) {
          if (this._texture) {
            if (this._texture._gammaSpace === YY) return;
            this._texture._gammaSpace = YY
          } else {
            if (this._gammaSpace === YY) return;
            this._gammaSpace = YY
          }
          this.hT()?.markAllMaterialsAsDirty(1, (YY => YY.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(YY) {
          YY !== this.isRGBD && (this._texture && (this._texture._isRGBD = YY), this.hT()?.markAllMaterialsAsDirty(1, (YY => YY.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(YY) {
          this._texture && (this._texture._lodGenerationOffset = YY)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(YY) {
          this._texture && (this._texture._lodGenerationScale = YY)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(YY) {
          this._texture && (this._texture._linearSpecularLOD = YY)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(YY) {
          this._texture && (this._texture._irradianceTexture = YY)
        }
        get uid() {
          return this._uid || (this._uid = (0, gY.c)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(YY) {
          this._onDisposeObserver && this.wT.remove(this._onDisposeObserver), this._onDisposeObserver = this.wT.add(YY)
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
        constructor(rY) {
          let DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, FY.j)(this, hY), (0, FY.j)(this, dY, void 0)), this.name = ((0, FY.j)(this, JY), (0, FY.j)(this, MY, void 0)), this.displayName = ((0, FY.j)(this, wY), (0, FY.j)(this, bY, void 0)), this.metadata = ((0, FY.j)(this, XY), (0, FY.j)(this, qY, null)), this._internalMetadata = (0, FY.j)(this, pY), this.reservedDataStore = null, this._hasAlpha = (0, FY.j)(this, kY, !1), this._getAlphaFromRGB = ((0, FY.j)(this, GY), (0, FY.j)(this, xY, !1)), this.level = ((0, FY.j)(this, nY), (0, FY.j)(this, PY, 1)), this._coordinatesIndex = ((0, FY.j)(this, UY), (0, FY.j)(this, LY, 0)), this.optimizeUVAllocation = ((0, FY.j)(this, tY), (0, FY.j)(this, Yr, !0)), this._coordinatesMode = ((0, FY.j)(this, rr), (0, FY.j)(this, Dr, 0)), this.wrapR = ((0, FY.j)(this, Fr), (0, FY.j)(this, Ar, 1)), this.anisotropicFilteringLevel = ((0, FY.j)(this, Ir), (0, FY.j)(this, Rr, YY.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, FY.j)(this, Or), !1), this._gammaSpace = !0, this.invertZ = (0, FY.j)(this, gr, !1), this.lodLevelInAlpha = ((0, FY.j)(this, ar), (0, FY.j)(this, vr, !1)), this._dominantDirection = ((0, FY.j)(this, ur), null), this.isRenderTarget = (0, FY.j)(this, sr, !1), this._prefiltered = ((0, FY.j)(this, ir), !1), this._forceSerialize = !1, this.animations = [], this.wT = new IY.e, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, rY ? YY._IsScene(rY) ? this._scene = rY : this._engine = rY : this._scene = OY.d.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.ky()), this._texture = DY, this._uid = null
        }
        hT() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return RY.e.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return RY.e.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(YY) {}
        get canRescale() {
          return !1
        }
        _getFromCache(YY, rY, DY, FY, AY, IY) {
          const RY = this._getEngine();
          if (!RY) return null;
          const OY = RY._getUseSRGBBuffer(!!AY, rY),
            gY = RY.getLoadedTexturesCache();
          for (let aY = 0; aY < gY.length; aY++) {
            const RY = gY[aY];
            if ((void 0 === AY || OY === RY._useSRGBBuffer) && (void 0 === FY || FY === RY.invertY) && RY.url === YY && RY.generateMipMaps === !rY && (!DY || DY === RY.samplingMode) && (void 0 === IY || IY === RY.isCube)) return RY.incrementReferences(), RY
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
          const YY = this.hT();
          YY && YY.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            FY = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            AY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            RY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            OY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            gY = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const aY = this._getEngine();
          if (!aY) return null;
          const vY = this.getSize();
          let uY = vY.width,
            sY = vY.height;
          0 !== rY && (uY /= Math.pow(2, rY), sY /= Math.pow(2, rY), uY = Math.round(uY), sY = Math.round(sY)), OY = Math.min(uY, OY), gY = Math.min(sY, gY);
          try {
            return this._texture.isCube || this._texture.is2DArray ? aY._readTexturePixels(this._texture, OY, gY, YY, rY, DY, FY, AY, IY, RY) : aY._readTexturePixels(this._texture, OY, gY, -1, rY, DY, FY, AY, IY, RY)
          } catch (iY) {
            return null
          }
        }
        _readPixelsSync() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            FY = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            AY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const IY = this.getSize();
          let RY = IY.width,
            OY = IY.height;
          const gY = this._getEngine();
          if (!gY) return null;
          0 != rY && (RY /= Math.pow(2, rY), OY /= Math.pow(2, rY), RY = Math.round(RY), OY = Math.round(OY));
          try {
            return this._texture.isCube ? gY._readTexturePixelsSync(this._texture, RY, OY, YY, rY, DY, FY, AY) : gY._readTexturePixelsSync(this._texture, RY, OY, -1, rY, DY, FY, AY)
          } catch (aY) {
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
            const YY = this._scene.textures.indexOf(this);
            if (YY >= 0 && this._scene.textures.splice(YY, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const YY = this._parentContainer.textures.indexOf(this);
              YY > -1 && this._parentContainer.textures.splice(YY, 1), this._parentContainer = null
            }
          }
          this.wT.notifyObservers(this), this.wT.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !YY) return null;
          const rY = sY.b.Serialize(this);
          return sY.b.AppendSerializedAnimations(this, rY), rY
        }
        static WhenAllReady(YY, rY) {
          let DY = YY.length;
          if (0 !== DY)
            for (let FY = 0; FY < YY.length; FY++) {
              const AY = YY[FY];
              if (AY.isReady()) 0 === --DY && rY();
              else {
                const YY = AY.onLoadObservable;
                YY ? YY.addOnce((() => {
                  0 === --DY && rY()
                })) : 0 === --DY && rY()
              }
            } else rY()
        }
        static _IsScene(YY) {
          return "Scene" === YY.getClassName()
        }
      }, (() => {
        const IY = "function" === typeof Symbol && Symbol.metadata ? Object.create(jY[Symbol.metadata] ?? null) : void 0;
        rY = [(0, AY.M)()], DY = [(0, AY.M)()], aY = [(0, AY.M)()], uY = [(0, AY.M)()], iY = [(0, AY.M)("hasAlpha")], yY = [(0, AY.M)("getAlphaFromRGB")], QY = [(0, AY.M)()], oY = [(0, AY.M)("coordinatesIndex")], WY = [(0, AY.M)()], EY = [(0, AY.M)("coordinatesMode")], mY = [(0, AY.M)()], VY = [(0, AY.M)()], SY = [(0, AY.M)()], lY = [(0, AY.M)()], TY = [(0, AY.M)()], eY = [(0, AY.M)()], NY = [(0, AY.M)()], BY = [(0, AY.M)()], cY = [(0, AY.M)()], KY = [(0, AY.M)()], HY = [(0, AY.M)()], zY = [(0, AY.M)()], ZY = [(0, AY.M)()], CY = [(0, AY.D)()], fY = [(0, AY.M)()], (0, FY.i)(YY, null, mY, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: YY => "wrapU" in YY,
            get: YY => YY.wrapU
          },
          metadata: IY
        }, null, hY), (0, FY.i)(YY, null, VY, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: YY => "wrapV" in YY,
            get: YY => YY.wrapV
          },
          metadata: IY
        }, null, hY), (0, FY.i)(YY, null, TY, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: YY => "isCube" in YY,
            get: YY => YY.isCube
          },
          metadata: IY
        }, null, hY), (0, FY.i)(YY, null, eY, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: YY => "is3D" in YY,
            get: YY => YY.is3D
          },
          metadata: IY
        }, null, hY), (0, FY.i)(YY, null, NY, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: YY => "is2DArray" in YY,
            get: YY => YY.is2DArray
          },
          metadata: IY
        }, null, hY), (0, FY.i)(YY, null, BY, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: YY => "gammaSpace" in YY,
            get: YY => YY.gammaSpace
          },
          metadata: IY
        }, null, hY), (0, FY.i)(YY, null, HY, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: YY => "lodGenerationOffset" in YY,
            get: YY => YY.lodGenerationOffset
          },
          metadata: IY
        }, null, hY), (0, FY.i)(YY, null, zY, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: YY => "lodGenerationScale" in YY,
            get: YY => YY.lodGenerationScale
          },
          metadata: IY
        }, null, hY), (0, FY.i)(YY, null, ZY, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: YY => "linearSpecularLOD" in YY,
            get: YY => YY.linearSpecularLOD
          },
          metadata: IY
        }, null, hY), (0, FY.i)(YY, null, CY, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "irradianceTexture" in YY,
            get: YY => YY.irradianceTexture
          },
          metadata: IY
        }, null, hY), (0, FY.i)(null, null, rY, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: YY => "uniqueId" in YY,
            get: YY => YY.uniqueId,
            set: (YY, rY) => {
              YY.uniqueId = rY
            }
          },
          metadata: IY
        }, dY, JY), (0, FY.i)(null, null, DY, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: YY => "name" in YY,
            get: YY => YY.name,
            set: (YY, rY) => {
              YY.name = rY
            }
          },
          metadata: IY
        }, MY, wY), (0, FY.i)(null, null, aY, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: YY => "displayName" in YY,
            get: YY => YY.displayName,
            set: (YY, rY) => {
              YY.displayName = rY
            }
          },
          metadata: IY
        }, bY, XY), (0, FY.i)(null, null, uY, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: YY => "metadata" in YY,
            get: YY => YY.metadata,
            set: (YY, rY) => {
              YY.metadata = rY
            }
          },
          metadata: IY
        }, qY, pY), (0, FY.i)(null, null, iY, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: YY => "_hasAlpha" in YY,
            get: YY => YY._hasAlpha,
            set: (YY, rY) => {
              YY._hasAlpha = rY
            }
          },
          metadata: IY
        }, kY, GY), (0, FY.i)(null, null, yY, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: YY => "_getAlphaFromRGB" in YY,
            get: YY => YY._getAlphaFromRGB,
            set: (YY, rY) => {
              YY._getAlphaFromRGB = rY
            }
          },
          metadata: IY
        }, xY, nY), (0, FY.i)(null, null, QY, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: YY => "level" in YY,
            get: YY => YY.level,
            set: (YY, rY) => {
              YY.level = rY
            }
          },
          metadata: IY
        }, PY, UY), (0, FY.i)(null, null, oY, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: YY => "_coordinatesIndex" in YY,
            get: YY => YY._coordinatesIndex,
            set: (YY, rY) => {
              YY._coordinatesIndex = rY
            }
          },
          metadata: IY
        }, LY, tY), (0, FY.i)(null, null, WY, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: YY => "optimizeUVAllocation" in YY,
            get: YY => YY.optimizeUVAllocation,
            set: (YY, rY) => {
              YY.optimizeUVAllocation = rY
            }
          },
          metadata: IY
        }, Yr, rr), (0, FY.i)(null, null, EY, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: YY => "_coordinatesMode" in YY,
            get: YY => YY._coordinatesMode,
            set: (YY, rY) => {
              YY._coordinatesMode = rY
            }
          },
          metadata: IY
        }, Dr, Fr), (0, FY.i)(null, null, SY, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: YY => "wrapR" in YY,
            get: YY => YY.wrapR,
            set: (YY, rY) => {
              YY.wrapR = rY
            }
          },
          metadata: IY
        }, Ar, Ir), (0, FY.i)(null, null, lY, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: YY => "anisotropicFilteringLevel" in YY,
            get: YY => YY.anisotropicFilteringLevel,
            set: (YY, rY) => {
              YY.anisotropicFilteringLevel = rY
            }
          },
          metadata: IY
        }, Rr, Or), (0, FY.i)(null, null, cY, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: YY => "invertZ" in YY,
            get: YY => YY.invertZ,
            set: (YY, rY) => {
              YY.invertZ = rY
            }
          },
          metadata: IY
        }, gr, ar), (0, FY.i)(null, null, KY, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: YY => "lodLevelInAlpha" in YY,
            get: YY => YY.lodLevelInAlpha,
            set: (YY, rY) => {
              YY.lodLevelInAlpha = rY
            }
          },
          metadata: IY
        }, vr, ur), (0, FY.i)(null, null, fY, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: YY => "isRenderTarget" in YY,
            get: YY => YY.isRenderTarget,
            set: (YY, rY) => {
              YY.isRenderTarget = rY
            }
          },
          metadata: IY
        }, sr, ir), IY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: IY
        })
      })(), YY.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, YY
    })();
    (uY = yY.prototype).forceSphericalPolynomialsRecompute ?? (uY.forceSphericalPolynomialsRecompute = (0, iY.g)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(yY.prototype, "sphericalPolynomial") || Object.defineProperty(yY.prototype, "sphericalPolynomial", (0, iY.c)("BaseTexture", "sphericalPolynomial"))
  },
  39596: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => SY,
      i: () => mY
    });
    var FY = DY(39127),
      AY = DY(39131),
      IY = DY(36552),
      RY = DY(36524),
      OY = DY(39123),
      gY = DY(36569),
      aY = DY(39029),
      vY = DY(39037),
      uY = DY(39223),
      sY = DY(37107),
      iY = DY(39174);

    function yY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const FY = rY.width,
        AY = rY.height;
      if (YY instanceof Float32Array) {
        let rY = YY.byteLength / YY.BYTES_PER_ELEMENT;
        const DY = new Uint8Array(rY);
        for (; --rY >= 0;) {
          let FY = YY[rY];
          FY < 0 ? FY = 0 : FY > 1 && (FY = 1), DY[rY] = 255 * FY
        }
        YY = DY
      }
      const IY = document.createElement("canvas");
      IY.width = FY, IY.height = AY;
      const RY = IY.getContext("2d");
      if (!RY) return null;
      const OY = RY.createImageData(FY, AY);
      if (OY.data.set(YY), RY.putImageData(OY, 0, 0), DY) {
        const YY = document.createElement("canvas");
        YY.width = FY, YY.height = AY;
        const rY = YY.getContext("2d");
        return rY ? (rY.translate(0, AY), rY.scale(1, -1), rY.drawImage(IY, 0, 0), YY.toDataURL("image/png")) : null
      }
      return IY.toDataURL("image/png")
    }

    function QY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const FY = YY.getInternalTexture();
      if (!FY) return null;
      const AY = YY._readPixelsSync(rY, DY);
      return AY ? yY(AY, YY.getSize(), FY.invertY) : null
    }
    async function oY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const FY = YY.getInternalTexture();
      if (!FY) return null;
      const AY = await YY.readPixels(rY, DY);
      return AY ? yY(AY, YY.getSize(), FY.invertY) : null
    }
    var WY = DY(39546),
      EY = DY(39144);
    let mY = (() => {
        var YY;
        let rY, DY, yY, mY, VY, SY, lY, TY, eY, NY, BY, cY, KY, HY = OY.e,
          zY = [],
          ZY = [],
          CY = [],
          fY = [],
          jY = [],
          hY = [],
          dY = [],
          JY = [],
          MY = [],
          wY = [],
          bY = [],
          XY = [],
          qY = [],
          pY = [],
          kY = [],
          GY = [],
          xY = [],
          nY = [],
          PY = [],
          UY = [],
          LY = [],
          tY = [],
          Yr = [],
          rr = [],
          Dr = [];
        return YY = class extends HY {
          static _CreateVideoTexture(rY, DY, FY) {
            arguments.length > 5 && void 0 !== arguments[5] || YY.TRILINEAR_SAMPLINGMODE;
            throw (0, aY.i)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(YY) {
            this._isBlocking = YY
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(rY, DY, AY, RY) {
            let OY, gY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : YY.TRILINEAR_SAMPLINGMODE,
              aY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              uY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              sY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              iY = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              yY = arguments.length > 9 ? arguments[9] : void 0,
              QY = arguments.length > 10 ? arguments[10] : void 0,
              oY = arguments.length > 11 ? arguments[11] : void 0,
              EY = arguments.length > 12 ? arguments[12] : void 0,
              mY = arguments.length > 13 ? arguments[13] : void 0;
            super(DY), this.url = ((0, FY.j)(this, zY), (0, FY.j)(this, ZY, null)), this.uOffset = ((0, FY.j)(this, CY), (0, FY.j)(this, fY, 0)), this.vOffset = ((0, FY.j)(this, jY), (0, FY.j)(this, hY, 0)), this.uScale = ((0, FY.j)(this, dY), (0, FY.j)(this, JY, 1)), this.vScale = ((0, FY.j)(this, MY), (0, FY.j)(this, wY, 1)), this.uAng = ((0, FY.j)(this, bY), (0, FY.j)(this, XY, 0)), this.vAng = ((0, FY.j)(this, qY), (0, FY.j)(this, pY, 0)), this.wAng = ((0, FY.j)(this, kY), (0, FY.j)(this, GY, 0)), this.uRotationCenter = ((0, FY.j)(this, xY), (0, FY.j)(this, nY, .5)), this.vRotationCenter = ((0, FY.j)(this, PY), (0, FY.j)(this, UY, .5)), this.wRotationCenter = ((0, FY.j)(this, LY), (0, FY.j)(this, tY, .5)), this.homogeneousRotationInUVTransform = ((0, FY.j)(this, Yr), (0, FY.j)(this, rr, !1)), this.inspectableCustomProperties = ((0, FY.j)(this, Dr), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new IY.e, this._isBlocking = !0, this.name = rY || "", this.url = rY;
            let VY = !1,
              SY = null,
              lY = !0;
            "object" === typeof AY && null !== AY ? (OY = AY.noMipmap ?? !1, RY = AY.invertY ?? !WY.e, gY = AY.samplingMode ?? YY.TRILINEAR_SAMPLINGMODE, aY = AY.onLoad ?? null, uY = AY.onError ?? null, sY = AY.buffer ?? null, iY = AY.deleteBuffer ?? !1, yY = AY.format, QY = AY.mimeType, oY = AY.loaderOptions, EY = AY.creationFlags, VY = AY.useSRGBBuffer ?? !1, SY = AY.internalTexture ?? null, lY = AY.gammaSpace ?? lY, mY = AY.forcedExtension ?? mY) : OY = !!AY, this._gammaSpace = lY, this._noMipmap = OY, this._invertY = void 0 === RY ? !WY.e : RY, this._initialSamplingMode = gY, this._buffer = sY, this._deleteBuffer = iY, this._mimeType = QY, this._loaderOptions = oY, this._creationFlags = EY, this._useSRGBBuffer = VY, this._forcedExtension = mY, void 0 !== yY && (this._format = yY);
            const TY = this.hT(),
              eY = this._getEngine();
            if (!eY) return;
            eY.onBeforeTextureInitObservable.notifyObservers(this);
            const NY = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), aY && aY(), !this.isBlocking && TY && TY.resetCachedMaterial()
              },
              BY = (rY, DY) => {
                this._loadingError = !0, this._errorObject = {
                  message: rY,
                  exception: DY
                }, uY && uY(rY, DY), YY.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !SY) return this._delayedOnLoad = NY, void(this._delayedOnError = BY);
            if (this._texture = SY ?? this._getFromCache(this.url, OY, gY, this._invertY, VY, this.isCube), this._texture)
              if (this._texture.isReady) vY.d.SetImmediate((() => NY()));
              else {
                const YY = this._texture.onLoadedObservable.add(NY);
                this._texture.onErrorObservable.add((rY => {
                  BY(rY.message, rY.exception), this._texture?.onLoadedObservable.remove(YY)
                }))
              }
            else if (TY && TY.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = NY, this._delayedOnError = BY;
            else {
              try {
                this._texture = eY.createTexture(this.url, OY, this._invertY, TY, gY, NY, BY, this._buffer, void 0, this._format, this._forcedExtension, QY, oY, EY, VY)
              } catch (cY) {
                throw BY("error loading", cY), cY
              }
              iY && (this._buffer = null)
            }
          }
          updateURL(YY) {
            let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              DY = arguments.length > 2 ? arguments[2] : void 0,
              FY = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.hT().markAllMaterialsAsDirty(1, (YY => YY.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = YY), this.url = YY, this._buffer = rY, this._forcedExtension = FY, this.delayLoadState = 4;
            const AY = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              AY ? AY() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), DY && DY()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const YY = this.hT();
            if (!YY) return;
            let rY = this.url;
            !rY && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (rY = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(rY, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? vY.d.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = YY.ky().createTexture(rY, this._noMipmap, this._invertY, YY, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(YY, rY, DY, FY) {
            YY *= this._cachedUScale, rY *= this._cachedVScale, YY -= this.uRotationCenter * this._cachedUScale, rY -= this.vRotationCenter * this._cachedVScale, DY -= this.wRotationCenter, RY.r.TransformCoordinatesFromFloatsToRef(YY, rY, DY, this._rowGenerationMatrix, FY), FY.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, FY.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, FY.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * YY === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * YY, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = RY.e.Zero(), this._rowGenerationMatrix = new RY.e, this._t0 = RY.r.Zero(), this._t1 = RY.r.Zero(), this._t2 = RY.r.Zero()), RY.e.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (RY.e.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, RY.n.Matrix[0]), RY.e.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, RY.n.Matrix[1]), RY.e.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, RY.n.Matrix[2]), RY.e.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, RY.n.Matrix[3]), RY.n.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(RY.n.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(RY.n.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(RY.n.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.dDY(this._t0), this._t2.dDY(this._t0), RY.e.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const rY = this.hT();
            if (!rY) return this._cachedTextureMatrix;
            const DY = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && DY !== this._cachedIdentity3x2 && rY.markAllMaterialsAsDirty(1, (YY => YY.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const rY = this.hT();
            if (!rY) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== YY.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === rY.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = RY.e.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = RY.e.Zero());
            const DY = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case YY.PLANAR_MODE:
                RY.e.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case YY.PROJECTION_MODE: {
                RY.e.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const YY = rY.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = YY.updateFlag, YY.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                RY.e.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return DY && rY.markAllMaterialsAsDirty(1, (YY => YY.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const rY = {
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
            return EY.b.Clone((() => new YY(this._texture ? this._texture.url : null, this.hT(), rY)), this)
          }
          serialize() {
            const rY = this.name;
            YY.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const DY = super.serialize(YY._SerializeInternalTextureUniqueId);
            if (!DY) return null;
            if (YY.SerializeBuffers || YY.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) DY.base64String = this._buffer, DY.name = DY.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const YY = this.mimeType || "image/png";
              DY.base64String = `data:${YY};base64,${(0,iY.h)(this._buffer)}`
            } else(YY.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (DY.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? QY(this) : oY(this));
            return DY.invertY = this._invertY, DY.samplingMode = this.samplingMode, DY._creationFlags = this._creationFlags, DY._useSRGBBuffer = this._useSRGBBuffer, YY._SerializeInternalTextureUniqueId && (DY.internalTextureUniqueId = this._texture?.uniqueId), DY.internalTextureLabel = this._texture?.label, DY.noMipmap = this._noMipmap, this.name = rY, DY
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(rY, DY, FY) {
            if (rY.customType) {
              const YY = uY.e.Instantiate(rY.customType).Parse(rY, DY, FY);
              return rY.samplingMode && YY.updateSamplingMode && YY._samplingMode && YY._samplingMode !== rY.samplingMode && YY.updateSamplingMode(rY.samplingMode), YY
            }
            if (rY.isCube && !rY.isRenderTarget) return YY._CubeTextureParser(rY, DY, FY);
            const AY = void 0 !== rY.internalTextureUniqueId;
            if (!rY.name && !rY.isRenderTarget && !AY) return null;
            let IY;
            if (AY) {
              const YY = DY.ky().getLoadedTexturesCache();
              for (const DY of YY)
                if (DY.uniqueId === rY.internalTextureUniqueId) {
                  IY = DY;
                  break
                }
            }
            const RY = YY => {
              if (YY && YY._texture && (YY._texture._cachedWrapU = null, YY._texture._cachedWrapV = null, YY._texture._cachedWrapR = null), rY.samplingMode) {
                const DY = rY.samplingMode;
                YY && YY.samplingMode !== DY && YY.updateSamplingMode(DY)
              }
              if (YY && rY.animations)
                for (let DY = 0; DY < rY.animations.length; DY++) {
                  const FY = rY.animations[DY],
                    AY = (0, gY.e)("BABYLON.Animation");
                  AY && YY.animations.push(AY.Parse(FY))
                }
              YY && YY._texture && (AY && !IY && YY._texture._setUniqueId(rY.internalTextureUniqueId), YY._texture.label = rY.internalTextureLabel)
            };
            return EY.b.Parse((() => {
              let AY = !0;
              if (rY.noMipmap && (AY = !1), rY.mirrorPlane) {
                const FY = YY._CreateMirror(rY.name, rY.renderTargetSize, DY, AY);
                return FY._waitingRenderList = rY.renderList, FY.mirrorPlane = sY.c.FromArray(rY.mirrorPlane), RY(FY), FY
              }
              if (rY.isRenderTarget && !rY.base64String) {
                let FY = null;
                if (rY.isCube) {
                  if (DY.reflectionProbes)
                    for (let YY = 0; YY < DY.reflectionProbes.length; YY++) {
                      const FY = DY.reflectionProbes[YY];
                      if (FY.name === rY.name) return FY.cubeTexture
                    }
                } else FY = YY._CreateRenderTargetTexture(rY.name, rY.renderTargetSize, DY, AY, rY._creationFlags ?? 0), FY._waitingRenderList = rY.renderList;
                return RY(FY), FY
              }
              if (rY.isVideo) {
                const IY = YY._CreateVideoTexture(FY + (rY.url || rY.name), FY + (rY.src || rY.url), DY, AY, rY.invertY, rY.samplingMode, rY.settings || {});
                return RY(IY), IY
              } {
                let OY;
                if ("string" === typeof rY.base64String && rY.base64String && !IY) {
                  const FY = {
                      buffer: rY.base64String,
                      noMipmap: !AY,
                      invertY: rY.invertY,
                      samplingMode: rY.samplingMode,
                      useSRGBBuffer: rY._useSRGBBuffer ?? !1,
                      creationFlags: rY._creationFlags ?? 0,
                      onLoad: () => {
                        RY(OY)
                      }
                    },
                    IY = rY.base64String,
                    gY = IY.startsWith("data:") ? IY.substring(5) : IY;
                  OY = YY.CreateFromBase64String("", gY, DY, FY), OY.name = rY.name
                } else {
                  let gY;
                  gY = rY.name && (rY.name.indexOf("://") > 0 || rY.name.startsWith("data:")) ? rY.name : FY + rY.name, rY.url && (rY.url.startsWith("data:") || YY.UseSerializedUrlIfAny) && (gY = rY.url);
                  const aY = {
                    noMipmap: !AY,
                    invertY: rY.invertY,
                    samplingMode: rY.samplingMode,
                    useSRGBBuffer: rY._useSRGBBuffer ?? !1,
                    creationFlags: rY._creationFlags ?? 0,
                    onLoad: () => {
                      RY(OY)
                    },
                    internalTexture: IY
                  };
                  OY = new YY(gY, DY, aY)
                }
                return OY
              }
            }), rY, DY)
          }
          static CreateFromBase64String(rY, DY, FY, AY, IY) {
            let RY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : YY.TRILINEAR_SAMPLINGMODE;
            return new YY("data:" + DY, FY, AY, IY, RY, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, rY, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(rY, DY, FY) {
            let AY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              IY = arguments.length > 4 ? arguments[4] : void 0,
              RY = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              OY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : YY.TRILINEAR_SAMPLINGMODE,
              gY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              aY = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              vY = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              uY = arguments.length > 10 ? arguments[10] : void 0,
              sY = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== rY.substring(0, 5) && (rY = "data:" + rY), new YY(rY, FY, IY, RY, OY, gY, aY, DY, AY, vY, void 0, void 0, uY, sY)
          }
        }, (() => {
          const IY = "function" === typeof Symbol && Symbol.metadata ? Object.create(HY[Symbol.metadata] ?? null) : void 0;
          rY = [(0, AY.M)()], DY = [(0, AY.M)()], yY = [(0, AY.M)()], mY = [(0, AY.M)()], VY = [(0, AY.M)()], SY = [(0, AY.M)()], lY = [(0, AY.M)()], TY = [(0, AY.M)()], eY = [(0, AY.M)()], NY = [(0, AY.M)()], BY = [(0, AY.M)()], cY = [(0, AY.M)()], KY = [(0, AY.M)()], (0, FY.i)(YY, null, KY, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: YY => "isBlocking" in YY,
              get: YY => YY.isBlocking
            },
            metadata: IY
          }, null, zY), (0, FY.i)(null, null, rY, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: YY => "url" in YY,
              get: YY => YY.url,
              set: (YY, rY) => {
                YY.url = rY
              }
            },
            metadata: IY
          }, ZY, CY), (0, FY.i)(null, null, DY, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: YY => "uOffset" in YY,
              get: YY => YY.uOffset,
              set: (YY, rY) => {
                YY.uOffset = rY
              }
            },
            metadata: IY
          }, fY, jY), (0, FY.i)(null, null, yY, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: YY => "vOffset" in YY,
              get: YY => YY.vOffset,
              set: (YY, rY) => {
                YY.vOffset = rY
              }
            },
            metadata: IY
          }, hY, dY), (0, FY.i)(null, null, mY, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: YY => "uScale" in YY,
              get: YY => YY.uScale,
              set: (YY, rY) => {
                YY.uScale = rY
              }
            },
            metadata: IY
          }, JY, MY), (0, FY.i)(null, null, VY, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: YY => "vScale" in YY,
              get: YY => YY.vScale,
              set: (YY, rY) => {
                YY.vScale = rY
              }
            },
            metadata: IY
          }, wY, bY), (0, FY.i)(null, null, SY, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: YY => "uAng" in YY,
              get: YY => YY.uAng,
              set: (YY, rY) => {
                YY.uAng = rY
              }
            },
            metadata: IY
          }, XY, qY), (0, FY.i)(null, null, lY, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: YY => "vAng" in YY,
              get: YY => YY.vAng,
              set: (YY, rY) => {
                YY.vAng = rY
              }
            },
            metadata: IY
          }, pY, kY), (0, FY.i)(null, null, TY, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: YY => "wAng" in YY,
              get: YY => YY.wAng,
              set: (YY, rY) => {
                YY.wAng = rY
              }
            },
            metadata: IY
          }, GY, xY), (0, FY.i)(null, null, eY, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: YY => "uRotationCenter" in YY,
              get: YY => YY.uRotationCenter,
              set: (YY, rY) => {
                YY.uRotationCenter = rY
              }
            },
            metadata: IY
          }, nY, PY), (0, FY.i)(null, null, NY, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: YY => "vRotationCenter" in YY,
              get: YY => YY.vRotationCenter,
              set: (YY, rY) => {
                YY.vRotationCenter = rY
              }
            },
            metadata: IY
          }, UY, LY), (0, FY.i)(null, null, BY, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: YY => "wRotationCenter" in YY,
              get: YY => YY.wRotationCenter,
              set: (YY, rY) => {
                YY.wRotationCenter = rY
              }
            },
            metadata: IY
          }, tY, Yr), (0, FY.i)(null, null, cY, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: YY => "homogeneousRotationInUVTransform" in YY,
              get: YY => YY.homogeneousRotationInUVTransform,
              set: (YY, rY) => {
                YY.homogeneousRotationInUVTransform = rY
              }
            },
            metadata: IY
          }, rr, Dr), IY && Object.defineProperty(YY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IY
          })
        })(), YY.SerializeBuffers = !0, YY.ForceSerializeBuffers = !1, YY.OnTextureLoadErrorObservable = new IY.e, YY._SerializeInternalTextureUniqueId = !1, YY._CubeTextureParser = (YY, rY, DY) => {
          throw (0, aY.i)("CubeTexture")
        }, YY._CreateMirror = (YY, rY, DY, FY) => {
          throw (0, aY.i)("MirrorTexture")
        }, YY._CreateRenderTargetTexture = (YY, rY, DY, FY, AY) => {
          throw (0, aY.i)("RenderTargetTexture")
        }, YY.NEAREST_SAMPLINGMODE = 1, YY.NEAREST_NEAREST_MIPLINEAR = 8, YY.BILINEAR_SAMPLINGMODE = 2, YY.LINEAR_LINEAR_MIPNEAREST = 11, YY.TRILINEAR_SAMPLINGMODE = 3, YY.LINEAR_LINEAR_MIPLINEAR = 3, YY.NEAREST_NEAREST_MIPNEAREST = 4, YY.NEAREST_LINEAR_MIPNEAREST = 5, YY.NEAREST_LINEAR_MIPLINEAR = 6, YY.NEAREST_LINEAR = 7, YY.NEAREST_NEAREST = 1, YY.LINEAR_NEAREST_MIPNEAREST = 9, YY.LINEAR_NEAREST_MIPLINEAR = 10, YY.LINEAR_LINEAR = 2, YY.LINEAR_NEAREST = 12, YY.EXPLICIT_MODE = 0, YY.SPHERICAL_MODE = 1, YY.PLANAR_MODE = 2, YY.CUBIC_MODE = 3, YY.PROJECTION_MODE = 4, YY.SKYBOX_MODE = 5, YY.INVCUBIC_MODE = 6, YY.EQUIRECTANGULAR_MODE = 7, YY.FIXED_EQUIRECTANGULAR_MODE = 8, YY.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, YY.CLAMP_ADDRESSMODE = 0, YY.WRAP_ADDRESSMODE = 1, YY.MIRROR_ADDRESSMODE = 2, YY.UseSerializedUrlIfAny = !1, YY
      })(),
      VY = !1;

    function SY() {
      VY || (VY = !0, (0, gY.i)("BABYLON.Texture", mY), EY.b._TextureParser = mY.Parse)
    }
  },
  39139: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => FY
    });
    class FY {
      constructor(YY, rY) {
        this.width = YY, this.height = rY
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let YY = 0 | this.width;
        return YY = 397 * YY ^ this.height, YY
      }
      brY(YY) {
        this.width = YY.width, this.height = YY.height
      }
      p_(YY, rY) {
        return this.width = YY, this.height = rY, this
      }
      set(YY, rY) {
        return this.p_(YY, rY)
      }
      multiplyByFloats(YY, rY) {
        return new FY(this.width * YY, this.height * rY)
      }
      clone() {
        return new FY(this.width, this.height)
      }
      equals(YY) {
        return !!YY && (this.width === YY.width && this.height === YY.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new FY(0, 0)
      }
      add(YY) {
        return new FY(this.width + YY.width, this.height + YY.height)
      }
      subtract(YY) {
        return new FY(this.width - YY.width, this.height - YY.height)
      }
      scale(YY) {
        return new FY(this.width * YY, this.height * YY)
      }
      static Lerp(YY, rY, DY) {
        const AY = YY.width + (rY.width - YY.width) * DY,
          IY = YY.height + (rY.height - YY.height) * DY;
        return new FY(AY, IY)
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);