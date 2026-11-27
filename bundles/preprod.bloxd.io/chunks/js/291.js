export const id = 291;
export const ids = [291];
export const modules = {
  41940: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW
    });
    let mW = !1
  },
  41511: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => AW
    });
    var mW = OW(41516),
      EW = OW(41519),
      NW = OW(38276),
      PW = OW(38241),
      LW = OW(38270),
      cW = OW(39088),
      wW = OW(41531);
    class tW {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(WW) {
        this._wrapU = WW
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(WW) {
        this._wrapV = WW
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(WW) {
        this._texture && (this._texture.isCube = WW)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(WW) {
        this._texture && (this._texture.is3D = WW)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(WW) {
        this._texture && (this._texture.is2DArray = WW)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(WW) {
        return void 0 !== WW?.shareDepth
      }
      constructor(WW) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = wW.d.Zero(), this._cachedBaseSize = wW.d.Zero(), this._initialSamplingMode = 2, this._texture = tW._IsRenderTargetWrapper(WW) ? WW.texture : WW, this._texture && (this._engine = this._texture.VA(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(WW, this._texture, this._texture.generateMipMaps && iW)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var ZW, xW = OW(41538),
      lW = OW(41415);
    let AW = (() => {
      var WW;
      let iW, OW, wW, ZW, lW, AW, bW, jW, UW, kW, sW, MW, KW, SW, YW, yW, TW, JW, hW, HW, nW, uW, oW, dW, eW, vW = tW,
        gW = [],
        DW = [],
        VW = [],
        pW = [],
        fW = [],
        CW = [],
        XW = [],
        BW = [],
        qW = [],
        RW = [],
        GW = [],
        IW = [],
        aW = [],
        rW = [],
        zW = [],
        FW = [],
        QW = [],
        Wi = [],
        ii = [],
        Oi = [],
        mi = [],
        Ei = [],
        Ni = [],
        Pi = [],
        Li = [],
        ci = [],
        wi = [],
        ti = [],
        Zi = [],
        xi = [],
        li = [];
      return WW = class extends vW {
        set hasAlpha(WW) {
          this._hasAlpha = WW
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(WW) {
          this._getAlphaFromRGB !== WW && (this._getAlphaFromRGB = WW, this._scene && this._scene.markAllMaterialsAsDirty(1, (WW => WW.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(WW) {
          this._coordinatesIndex !== WW && (this._coordinatesIndex = WW, this._scene && this._scene.markAllMaterialsAsDirty(1, (WW => WW.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(WW) {
          this._coordinatesMode !== WW && (this._coordinatesMode = WW, this._scene && this._scene.markAllMaterialsAsDirty(1, (WW => WW.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(WW) {
          this._wrapU = WW
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(WW) {
          this._wrapV = WW
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(WW) {
          this._texture ? this._texture.isCube = WW : this._isCube = WW
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(WW) {
          this._texture && (this._texture.is3D = WW)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(WW) {
          this._texture && (this._texture.is2DArray = WW)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(WW) {
          if (this._texture) {
            if (this._texture._gammaSpace === WW) return;
            this._texture._gammaSpace = WW
          } else {
            if (this._gammaSpace === WW) return;
            this._gammaSpace = WW
          }
          this.bD()?.markAllMaterialsAsDirty(1, (WW => WW.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(WW) {
          WW !== this.isRGBD && (this._texture && (this._texture._isRGBD = WW), this.bD()?.markAllMaterialsAsDirty(1, (WW => WW.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(WW) {
          this._texture && (this._texture._lodGenerationOffset = WW)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(WW) {
          this._texture && (this._texture._lodGenerationScale = WW)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(WW) {
          this._texture && (this._texture._linearSpecularLOD = WW)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(WW) {
          this._texture && (this._texture._irradianceTexture = WW)
        }
        get uid() {
          return this._uid || (this._uid = (0, cW.b)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(WW) {
          this._onDisposeObserver && this.jD.remove(this._onDisposeObserver), this._onDisposeObserver = this.jD.add(WW)
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
        constructor(iW) {
          let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, mW.g)(this, gW), (0, mW.g)(this, DW, void 0)), this.name = ((0, mW.g)(this, VW), (0, mW.g)(this, pW, void 0)), this.displayName = ((0, mW.g)(this, fW), (0, mW.g)(this, CW, void 0)), this.metadata = ((0, mW.g)(this, XW), (0, mW.g)(this, BW, null)), this._internalMetadata = (0, mW.g)(this, qW), this.reservedDataStore = null, this._hasAlpha = (0, mW.g)(this, RW, !1), this._getAlphaFromRGB = ((0, mW.g)(this, GW), (0, mW.g)(this, IW, !1)), this.level = ((0, mW.g)(this, aW), (0, mW.g)(this, rW, 1)), this._coordinatesIndex = ((0, mW.g)(this, zW), (0, mW.g)(this, FW, 0)), this.optimizeUVAllocation = ((0, mW.g)(this, QW), (0, mW.g)(this, Wi, !0)), this._coordinatesMode = ((0, mW.g)(this, ii), (0, mW.g)(this, Oi, 0)), this.wrapR = ((0, mW.g)(this, mi), (0, mW.g)(this, Ei, 1)), this.anisotropicFilteringLevel = ((0, mW.g)(this, Ni), (0, mW.g)(this, Pi, WW.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, mW.g)(this, Li), !1), this._gammaSpace = !0, this.invertZ = (0, mW.g)(this, ci, !1), this.lodLevelInAlpha = ((0, mW.g)(this, wi), (0, mW.g)(this, ti, !1)), this._dominantDirection = ((0, mW.g)(this, Zi), null), this.isRenderTarget = (0, mW.g)(this, xi, !1), this._prefiltered = ((0, mW.g)(this, li), !1), this._forceSerialize = !1, this.animations = [], this.jD = new NW.e, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, iW ? WW._IsScene(iW) ? this._scene = iW : this._engine = iW : this._scene = LW.d.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.VA()), this._texture = OW, this._uid = null
        }
        bD() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return PW.d.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return PW.d.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(WW) {}
        get canRescale() {
          return !1
        }
        _getFromCache(WW, iW, OW, mW, EW, NW) {
          const PW = this._getEngine();
          if (!PW) return null;
          const LW = PW._getUseSRGBBuffer(!!EW, iW),
            cW = PW.getLoadedTexturesCache();
          for (let wW = 0; wW < cW.length; wW++) {
            const PW = cW[wW];
            if ((void 0 === EW || LW === PW._useSRGBBuffer) && (void 0 === mW || mW === PW.invertY) && PW.url === WW && PW.generateMipMaps === !iW && (!OW || OW === PW.samplingMode) && (void 0 === NW || NW === PW.isCube)) return PW.incrementReferences(), PW
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
          const WW = this.bD();
          WW && WW.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            mW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            PW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            LW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            cW = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const wW = this._getEngine();
          if (!wW) return null;
          const tW = this.getSize();
          let ZW = tW.width,
            xW = tW.height;
          0 !== iW && (ZW /= Math.pow(2, iW), xW /= Math.pow(2, iW), ZW = Math.round(ZW), xW = Math.round(xW)), LW = Math.min(ZW, LW), cW = Math.min(xW, cW);
          try {
            return this._texture.isCube || this._texture.is2DArray ? wW._readTexturePixels(this._texture, LW, cW, WW, iW, OW, mW, EW, NW, PW) : wW._readTexturePixels(this._texture, LW, cW, -1, iW, OW, mW, EW, NW, PW)
          } catch (lW) {
            return null
          }
        }
        _readPixelsSync() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            mW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const NW = this.getSize();
          let PW = NW.width,
            LW = NW.height;
          const cW = this._getEngine();
          if (!cW) return null;
          0 != iW && (PW /= Math.pow(2, iW), LW /= Math.pow(2, iW), PW = Math.round(PW), LW = Math.round(LW));
          try {
            return this._texture.isCube ? cW._readTexturePixelsSync(this._texture, PW, LW, WW, iW, OW, mW, EW) : cW._readTexturePixelsSync(this._texture, PW, LW, -1, iW, OW, mW, EW)
          } catch (wW) {
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
            const WW = this._scene.textures.indexOf(this);
            if (WW >= 0 && this._scene.textures.splice(WW, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const WW = this._parentContainer.textures.indexOf(this);
              WW > -1 && this._parentContainer.textures.splice(WW, 1), this._parentContainer = null
            }
          }
          this.jD.notifyObservers(this), this.jD.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !WW) return null;
          const iW = xW.d.Serialize(this);
          return xW.d.AppendSerializedAnimations(this, iW), iW
        }
        static WhenAllReady(WW, iW) {
          let OW = WW.length;
          if (0 !== OW)
            for (let mW = 0; mW < WW.length; mW++) {
              const EW = WW[mW];
              if (EW.isReady()) 0 === --OW && iW();
              else {
                const WW = EW.onLoadObservable;
                WW ? WW.addOnce((() => {
                  0 === --OW && iW()
                })) : 0 === --OW && iW()
              }
            } else iW()
        }
        static _IsScene(WW) {
          return "Scene" === WW.getClassName()
        }
      }, (() => {
        const NW = "function" === typeof Symbol && Symbol.metadata ? Object.create(vW[Symbol.metadata] ?? null) : void 0;
        iW = [(0, EW.M)()], OW = [(0, EW.M)()], wW = [(0, EW.M)()], ZW = [(0, EW.M)()], lW = [(0, EW.M)("hasAlpha")], AW = [(0, EW.M)("getAlphaFromRGB")], bW = [(0, EW.M)()], jW = [(0, EW.M)("coordinatesIndex")], UW = [(0, EW.M)()], kW = [(0, EW.M)("coordinatesMode")], sW = [(0, EW.M)()], MW = [(0, EW.M)()], KW = [(0, EW.M)()], SW = [(0, EW.M)()], YW = [(0, EW.M)()], yW = [(0, EW.M)()], TW = [(0, EW.M)()], JW = [(0, EW.M)()], hW = [(0, EW.M)()], HW = [(0, EW.M)()], nW = [(0, EW.M)()], uW = [(0, EW.M)()], oW = [(0, EW.M)()], dW = [(0, EW.F)()], eW = [(0, EW.M)()], (0, mW.e)(WW, null, sW, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: WW => "wrapU" in WW,
            get: WW => WW.wrapU
          },
          metadata: NW
        }, null, gW), (0, mW.e)(WW, null, MW, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: WW => "wrapV" in WW,
            get: WW => WW.wrapV
          },
          metadata: NW
        }, null, gW), (0, mW.e)(WW, null, YW, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: WW => "isCube" in WW,
            get: WW => WW.isCube
          },
          metadata: NW
        }, null, gW), (0, mW.e)(WW, null, yW, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: WW => "is3D" in WW,
            get: WW => WW.is3D
          },
          metadata: NW
        }, null, gW), (0, mW.e)(WW, null, TW, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: WW => "is2DArray" in WW,
            get: WW => WW.is2DArray
          },
          metadata: NW
        }, null, gW), (0, mW.e)(WW, null, JW, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: WW => "gammaSpace" in WW,
            get: WW => WW.gammaSpace
          },
          metadata: NW
        }, null, gW), (0, mW.e)(WW, null, nW, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: WW => "lodGenerationOffset" in WW,
            get: WW => WW.lodGenerationOffset
          },
          metadata: NW
        }, null, gW), (0, mW.e)(WW, null, uW, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: WW => "lodGenerationScale" in WW,
            get: WW => WW.lodGenerationScale
          },
          metadata: NW
        }, null, gW), (0, mW.e)(WW, null, oW, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: WW => "linearSpecularLOD" in WW,
            get: WW => WW.linearSpecularLOD
          },
          metadata: NW
        }, null, gW), (0, mW.e)(WW, null, dW, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "irradianceTexture" in WW,
            get: WW => WW.irradianceTexture
          },
          metadata: NW
        }, null, gW), (0, mW.e)(null, null, iW, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: WW => "uniqueId" in WW,
            get: WW => WW.uniqueId,
            set: (WW, iW) => {
              WW.uniqueId = iW
            }
          },
          metadata: NW
        }, DW, VW), (0, mW.e)(null, null, OW, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: WW => "name" in WW,
            get: WW => WW.name,
            set: (WW, iW) => {
              WW.name = iW
            }
          },
          metadata: NW
        }, pW, fW), (0, mW.e)(null, null, wW, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: WW => "displayName" in WW,
            get: WW => WW.displayName,
            set: (WW, iW) => {
              WW.displayName = iW
            }
          },
          metadata: NW
        }, CW, XW), (0, mW.e)(null, null, ZW, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: WW => "metadata" in WW,
            get: WW => WW.metadata,
            set: (WW, iW) => {
              WW.metadata = iW
            }
          },
          metadata: NW
        }, BW, qW), (0, mW.e)(null, null, lW, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: WW => "_hasAlpha" in WW,
            get: WW => WW._hasAlpha,
            set: (WW, iW) => {
              WW._hasAlpha = iW
            }
          },
          metadata: NW
        }, RW, GW), (0, mW.e)(null, null, AW, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: WW => "_getAlphaFromRGB" in WW,
            get: WW => WW._getAlphaFromRGB,
            set: (WW, iW) => {
              WW._getAlphaFromRGB = iW
            }
          },
          metadata: NW
        }, IW, aW), (0, mW.e)(null, null, bW, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: WW => "level" in WW,
            get: WW => WW.level,
            set: (WW, iW) => {
              WW.level = iW
            }
          },
          metadata: NW
        }, rW, zW), (0, mW.e)(null, null, jW, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: WW => "_coordinatesIndex" in WW,
            get: WW => WW._coordinatesIndex,
            set: (WW, iW) => {
              WW._coordinatesIndex = iW
            }
          },
          metadata: NW
        }, FW, QW), (0, mW.e)(null, null, UW, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: WW => "optimizeUVAllocation" in WW,
            get: WW => WW.optimizeUVAllocation,
            set: (WW, iW) => {
              WW.optimizeUVAllocation = iW
            }
          },
          metadata: NW
        }, Wi, ii), (0, mW.e)(null, null, kW, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: WW => "_coordinatesMode" in WW,
            get: WW => WW._coordinatesMode,
            set: (WW, iW) => {
              WW._coordinatesMode = iW
            }
          },
          metadata: NW
        }, Oi, mi), (0, mW.e)(null, null, KW, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: WW => "wrapR" in WW,
            get: WW => WW.wrapR,
            set: (WW, iW) => {
              WW.wrapR = iW
            }
          },
          metadata: NW
        }, Ei, Ni), (0, mW.e)(null, null, SW, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: WW => "anisotropicFilteringLevel" in WW,
            get: WW => WW.anisotropicFilteringLevel,
            set: (WW, iW) => {
              WW.anisotropicFilteringLevel = iW
            }
          },
          metadata: NW
        }, Pi, Li), (0, mW.e)(null, null, hW, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: WW => "invertZ" in WW,
            get: WW => WW.invertZ,
            set: (WW, iW) => {
              WW.invertZ = iW
            }
          },
          metadata: NW
        }, ci, wi), (0, mW.e)(null, null, HW, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: WW => "lodLevelInAlpha" in WW,
            get: WW => WW.lodLevelInAlpha,
            set: (WW, iW) => {
              WW.lodLevelInAlpha = iW
            }
          },
          metadata: NW
        }, ti, Zi), (0, mW.e)(null, null, eW, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: WW => "isRenderTarget" in WW,
            get: WW => WW.isRenderTarget,
            set: (WW, iW) => {
              WW.isRenderTarget = iW
            }
          },
          metadata: NW
        }, xi, li), NW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: NW
        })
      })(), WW.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, WW
    })();
    (ZW = AW.prototype).forceSphericalPolynomialsRecompute ?? (ZW.forceSphericalPolynomialsRecompute = (0, lW.k)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(AW.prototype, "sphericalPolynomial") || Object.defineProperty(AW.prototype, "sphericalPolynomial", (0, lW.h)("BaseTexture", "sphericalPolynomial"))
  },
  41992: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => KW,
      h: () => sW
    });
    var mW = OW(41516),
      EW = OW(41519),
      NW = OW(38276),
      PW = OW(38241),
      LW = OW(41511),
      cW = OW(38299),
      wW = OW(41415),
      tW = OW(41420),
      ZW = OW(41626),
      xW = OW(38939),
      lW = OW(41574);

    function AW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const mW = iW.width,
        EW = iW.height;
      if (WW instanceof Float32Array) {
        let iW = WW.byteLength / WW.BYTES_PER_ELEMENT;
        const OW = new Uint8Array(iW);
        for (; --iW >= 0;) {
          let mW = WW[iW];
          mW < 0 ? mW = 0 : mW > 1 && (mW = 1), OW[iW] = 255 * mW
        }
        WW = OW
      }
      const NW = document.createElement("canvas");
      NW.width = mW, NW.height = EW;
      const PW = NW.getContext("2d");
      if (!PW) return null;
      const LW = PW.createImageData(mW, EW);
      if (LW.data.set(WW), PW.putImageData(LW, 0, 0), OW) {
        const WW = document.createElement("canvas");
        WW.width = mW, WW.height = EW;
        const iW = WW.getContext("2d");
        return iW ? (iW.translate(0, EW), iW.scale(1, -1), iW.drawImage(NW, 0, 0), WW.toDataURL("image/png")) : null
      }
      return NW.toDataURL("image/png")
    }

    function bW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const mW = WW.getInternalTexture();
      if (!mW) return null;
      const EW = WW._readPixelsSync(iW, OW);
      return EW ? AW(EW, WW.getSize(), mW.invertY) : null
    }
    async function jW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const mW = WW.getInternalTexture();
      if (!mW) return null;
      const EW = await WW.readPixels(iW, OW);
      return EW ? AW(EW, WW.getSize(), mW.invertY) : null
    }
    var UW = OW(41940),
      kW = OW(41538);
    let sW = (() => {
        var WW;
        let iW, OW, AW, sW, MW, KW, SW, YW, yW, TW, JW, hW, HW, nW = LW.c,
          uW = [],
          oW = [],
          dW = [],
          eW = [],
          vW = [],
          gW = [],
          DW = [],
          VW = [],
          pW = [],
          fW = [],
          CW = [],
          XW = [],
          BW = [],
          qW = [],
          RW = [],
          GW = [],
          IW = [],
          aW = [],
          rW = [],
          zW = [],
          FW = [],
          QW = [],
          Wi = [],
          ii = [],
          Oi = [];
        return WW = class extends nW {
          static _CreateVideoTexture(iW, OW, mW) {
            arguments.length > 5 && void 0 !== arguments[5] || WW.TRILINEAR_SAMPLINGMODE;
            throw (0, wW.o)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(WW) {
            this._isBlocking = WW
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(iW, OW, EW, PW) {
            let LW, cW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : WW.TRILINEAR_SAMPLINGMODE,
              wW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              ZW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              xW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              lW = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              AW = arguments.length > 9 ? arguments[9] : void 0,
              bW = arguments.length > 10 ? arguments[10] : void 0,
              jW = arguments.length > 11 ? arguments[11] : void 0,
              kW = arguments.length > 12 ? arguments[12] : void 0,
              sW = arguments.length > 13 ? arguments[13] : void 0;
            super(OW), this.url = ((0, mW.g)(this, uW), (0, mW.g)(this, oW, null)), this.uOffset = ((0, mW.g)(this, dW), (0, mW.g)(this, eW, 0)), this.vOffset = ((0, mW.g)(this, vW), (0, mW.g)(this, gW, 0)), this.uScale = ((0, mW.g)(this, DW), (0, mW.g)(this, VW, 1)), this.vScale = ((0, mW.g)(this, pW), (0, mW.g)(this, fW, 1)), this.uAng = ((0, mW.g)(this, CW), (0, mW.g)(this, XW, 0)), this.vAng = ((0, mW.g)(this, BW), (0, mW.g)(this, qW, 0)), this.wAng = ((0, mW.g)(this, RW), (0, mW.g)(this, GW, 0)), this.uRotationCenter = ((0, mW.g)(this, IW), (0, mW.g)(this, aW, .5)), this.vRotationCenter = ((0, mW.g)(this, rW), (0, mW.g)(this, zW, .5)), this.wRotationCenter = ((0, mW.g)(this, FW), (0, mW.g)(this, QW, .5)), this.homogeneousRotationInUVTransform = ((0, mW.g)(this, Wi), (0, mW.g)(this, ii, !1)), this.inspectableCustomProperties = ((0, mW.g)(this, Oi), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new NW.e, this._isBlocking = !0, this.name = iW || "", this.url = iW;
            let MW = !1,
              KW = null,
              SW = !0;
            "object" === typeof EW && null !== EW ? (LW = EW.noMipmap ?? !1, PW = EW.invertY ?? !UW.b, cW = EW.samplingMode ?? WW.TRILINEAR_SAMPLINGMODE, wW = EW.onLoad ?? null, ZW = EW.onError ?? null, xW = EW.buffer ?? null, lW = EW.deleteBuffer ?? !1, AW = EW.format, bW = EW.mimeType, jW = EW.loaderOptions, kW = EW.creationFlags, MW = EW.useSRGBBuffer ?? !1, KW = EW.internalTexture ?? null, SW = EW.gammaSpace ?? SW, sW = EW.forcedExtension ?? sW) : LW = !!EW, this._gammaSpace = SW, this._noMipmap = LW, this._invertY = void 0 === PW ? !UW.b : PW, this._initialSamplingMode = cW, this._buffer = xW, this._deleteBuffer = lW, this._mimeType = bW, this._loaderOptions = jW, this._creationFlags = kW, this._useSRGBBuffer = MW, this._forcedExtension = sW, void 0 !== AW && (this._format = AW);
            const YW = this.bD(),
              yW = this._getEngine();
            if (!yW) return;
            yW.onBeforeTextureInitObservable.notifyObservers(this);
            const TW = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), wW && wW(), !this.isBlocking && YW && YW.resetCachedMaterial()
              },
              JW = (iW, OW) => {
                this._loadingError = !0, this._errorObject = {
                  message: iW,
                  exception: OW
                }, ZW && ZW(iW, OW), WW.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !KW) return this._delayedOnLoad = TW, void(this._delayedOnError = JW);
            if (this._texture = KW ?? this._getFromCache(this.url, LW, cW, this._invertY, MW, this.isCube), this._texture)
              if (this._texture.isReady) tW.d.SetImmediate((() => TW()));
              else {
                const WW = this._texture.onLoadedObservable.add(TW);
                this._texture.onErrorObservable.add((iW => {
                  JW(iW.message, iW.exception), this._texture?.onLoadedObservable.remove(WW)
                }))
              }
            else if (YW && YW.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = TW, this._delayedOnError = JW;
            else {
              try {
                this._texture = yW.createTexture(this.url, LW, this._invertY, YW, cW, TW, JW, this._buffer, void 0, this._format, this._forcedExtension, bW, jW, kW, MW)
              } catch (hW) {
                throw JW("error loading", hW), hW
              }
              lW && (this._buffer = null)
            }
          }
          updateURL(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              OW = arguments.length > 2 ? arguments[2] : void 0,
              mW = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.bD().markAllMaterialsAsDirty(1, (WW => WW.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = WW), this.url = WW, this._buffer = iW, this._forcedExtension = mW, this.delayLoadState = 4;
            const EW = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              EW ? EW() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), OW && OW()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const WW = this.bD();
            if (!WW) return;
            let iW = this.url;
            !iW && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (iW = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(iW, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? tW.d.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = WW.VA().createTexture(iW, this._noMipmap, this._invertY, WW, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(WW, iW, OW, mW) {
            WW *= this._cachedUScale, iW *= this._cachedVScale, WW -= this.uRotationCenter * this._cachedUScale, iW -= this.vRotationCenter * this._cachedVScale, OW -= this.wRotationCenter, PW.q.TransformCoordinatesFromFloatsToRef(WW, iW, OW, this._rowGenerationMatrix, mW), mW.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, mW.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, mW.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * WW === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * WW, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = PW.d.Zero(), this._rowGenerationMatrix = new PW.d, this._t0 = PW.q.Zero(), this._t1 = PW.q.Zero(), this._t2 = PW.q.Zero()), PW.d.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (PW.d.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, PW.l.Matrix[0]), PW.d.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, PW.l.Matrix[1]), PW.d.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, PW.l.Matrix[2]), PW.d.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, PW.l.Matrix[3]), PW.l.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(PW.l.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(PW.l.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(PW.l.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.yEW(this._t0), this._t2.yEW(this._t0), PW.d.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const iW = this.bD();
            if (!iW) return this._cachedTextureMatrix;
            const OW = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && OW !== this._cachedIdentity3x2 && iW.markAllMaterialsAsDirty(1, (WW => WW.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const iW = this.bD();
            if (!iW) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== WW.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === iW.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = PW.d.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = PW.d.Zero());
            const OW = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case WW.PLANAR_MODE:
                PW.d.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case WW.PROJECTION_MODE: {
                PW.d.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const WW = iW.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = WW.updateFlag, WW.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                PW.d.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return OW && iW.markAllMaterialsAsDirty(1, (WW => WW.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const iW = {
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
            return kW.d.Clone((() => new WW(this._texture ? this._texture.url : null, this.bD(), iW)), this)
          }
          serialize() {
            const iW = this.name;
            WW.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const OW = super.serialize(WW._SerializeInternalTextureUniqueId);
            if (!OW) return null;
            if (WW.SerializeBuffers || WW.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) OW.base64String = this._buffer, OW.name = OW.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const WW = this.mimeType || "image/png";
              OW.base64String = `data:${WW};base64,${(0,lW.h)(this._buffer)}`
            } else(WW.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (OW.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? bW(this) : jW(this));
            return OW.invertY = this._invertY, OW.samplingMode = this.samplingMode, OW._creationFlags = this._creationFlags, OW._useSRGBBuffer = this._useSRGBBuffer, WW._SerializeInternalTextureUniqueId && (OW.internalTextureUniqueId = this._texture?.uniqueId), OW.internalTextureLabel = this._texture?.label, OW.noMipmap = this._noMipmap, this.name = iW, OW
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(iW, OW, mW) {
            if (iW.customType) {
              const WW = ZW.b.Instantiate(iW.customType).Parse(iW, OW, mW);
              return iW.samplingMode && WW.updateSamplingMode && WW._samplingMode && WW._samplingMode !== iW.samplingMode && WW.updateSamplingMode(iW.samplingMode), WW
            }
            if (iW.isCube && !iW.isRenderTarget) return WW._CubeTextureParser(iW, OW, mW);
            const EW = void 0 !== iW.internalTextureUniqueId;
            if (!iW.name && !iW.isRenderTarget && !EW) return null;
            let NW;
            if (EW) {
              const WW = OW.VA().getLoadedTexturesCache();
              for (const OW of WW)
                if (OW.uniqueId === iW.internalTextureUniqueId) {
                  NW = OW;
                  break
                }
            }
            const PW = WW => {
              if (WW && WW._texture && (WW._texture._cachedWrapU = null, WW._texture._cachedWrapV = null, WW._texture._cachedWrapR = null), iW.samplingMode) {
                const OW = iW.samplingMode;
                WW && WW.samplingMode !== OW && WW.updateSamplingMode(OW)
              }
              if (WW && iW.animations)
                for (let OW = 0; OW < iW.animations.length; OW++) {
                  const mW = iW.animations[OW],
                    EW = (0, cW.d)("BABYLON.Animation");
                  EW && WW.animations.push(EW.Parse(mW))
                }
              WW && WW._texture && (EW && !NW && WW._texture._setUniqueId(iW.internalTextureUniqueId), WW._texture.label = iW.internalTextureLabel)
            };
            return kW.d.Parse((() => {
              let EW = !0;
              if (iW.noMipmap && (EW = !1), iW.mirrorPlane) {
                const mW = WW._CreateMirror(iW.name, iW.renderTargetSize, OW, EW);
                return mW._waitingRenderList = iW.renderList, mW.mirrorPlane = xW.c.FromArray(iW.mirrorPlane), PW(mW), mW
              }
              if (iW.isRenderTarget && !iW.base64String) {
                let mW = null;
                if (iW.isCube) {
                  if (OW.reflectionProbes)
                    for (let WW = 0; WW < OW.reflectionProbes.length; WW++) {
                      const mW = OW.reflectionProbes[WW];
                      if (mW.name === iW.name) return mW.cubeTexture
                    }
                } else mW = WW._CreateRenderTargetTexture(iW.name, iW.renderTargetSize, OW, EW, iW._creationFlags ?? 0), mW._waitingRenderList = iW.renderList;
                return PW(mW), mW
              }
              if (iW.isVideo) {
                const NW = WW._CreateVideoTexture(mW + (iW.url || iW.name), mW + (iW.src || iW.url), OW, EW, iW.invertY, iW.samplingMode, iW.settings || {});
                return PW(NW), NW
              } {
                let LW;
                if ("string" === typeof iW.base64String && iW.base64String && !NW) {
                  const mW = {
                      buffer: iW.base64String,
                      noMipmap: !EW,
                      invertY: iW.invertY,
                      samplingMode: iW.samplingMode,
                      useSRGBBuffer: iW._useSRGBBuffer ?? !1,
                      creationFlags: iW._creationFlags ?? 0,
                      onLoad: () => {
                        PW(LW)
                      }
                    },
                    NW = iW.base64String,
                    cW = NW.startsWith("data:") ? NW.substring(5) : NW;
                  LW = WW.CreateFromBase64String("", cW, OW, mW), LW.name = iW.name
                } else {
                  let cW;
                  cW = iW.name && (iW.name.indexOf("://") > 0 || iW.name.startsWith("data:")) ? iW.name : mW + iW.name, iW.url && (iW.url.startsWith("data:") || WW.UseSerializedUrlIfAny) && (cW = iW.url);
                  const wW = {
                    noMipmap: !EW,
                    invertY: iW.invertY,
                    samplingMode: iW.samplingMode,
                    useSRGBBuffer: iW._useSRGBBuffer ?? !1,
                    creationFlags: iW._creationFlags ?? 0,
                    onLoad: () => {
                      PW(LW)
                    },
                    internalTexture: NW
                  };
                  LW = new WW(cW, OW, wW)
                }
                return LW
              }
            }), iW, OW)
          }
          static CreateFromBase64String(iW, OW, mW, EW, NW) {
            let PW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : WW.TRILINEAR_SAMPLINGMODE;
            return new WW("data:" + OW, mW, EW, NW, PW, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, iW, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(iW, OW, mW) {
            let EW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              NW = arguments.length > 4 ? arguments[4] : void 0,
              PW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              LW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : WW.TRILINEAR_SAMPLINGMODE,
              cW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              wW = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              tW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              ZW = arguments.length > 10 ? arguments[10] : void 0,
              xW = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== iW.substring(0, 5) && (iW = "data:" + iW), new WW(iW, mW, NW, PW, LW, cW, wW, OW, EW, tW, void 0, void 0, ZW, xW)
          }
        }, (() => {
          const NW = "function" === typeof Symbol && Symbol.metadata ? Object.create(nW[Symbol.metadata] ?? null) : void 0;
          iW = [(0, EW.M)()], OW = [(0, EW.M)()], AW = [(0, EW.M)()], sW = [(0, EW.M)()], MW = [(0, EW.M)()], KW = [(0, EW.M)()], SW = [(0, EW.M)()], YW = [(0, EW.M)()], yW = [(0, EW.M)()], TW = [(0, EW.M)()], JW = [(0, EW.M)()], hW = [(0, EW.M)()], HW = [(0, EW.M)()], (0, mW.e)(WW, null, HW, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: WW => "isBlocking" in WW,
              get: WW => WW.isBlocking
            },
            metadata: NW
          }, null, uW), (0, mW.e)(null, null, iW, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: WW => "url" in WW,
              get: WW => WW.url,
              set: (WW, iW) => {
                WW.url = iW
              }
            },
            metadata: NW
          }, oW, dW), (0, mW.e)(null, null, OW, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: WW => "uOffset" in WW,
              get: WW => WW.uOffset,
              set: (WW, iW) => {
                WW.uOffset = iW
              }
            },
            metadata: NW
          }, eW, vW), (0, mW.e)(null, null, AW, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: WW => "vOffset" in WW,
              get: WW => WW.vOffset,
              set: (WW, iW) => {
                WW.vOffset = iW
              }
            },
            metadata: NW
          }, gW, DW), (0, mW.e)(null, null, sW, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: WW => "uScale" in WW,
              get: WW => WW.uScale,
              set: (WW, iW) => {
                WW.uScale = iW
              }
            },
            metadata: NW
          }, VW, pW), (0, mW.e)(null, null, MW, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: WW => "vScale" in WW,
              get: WW => WW.vScale,
              set: (WW, iW) => {
                WW.vScale = iW
              }
            },
            metadata: NW
          }, fW, CW), (0, mW.e)(null, null, KW, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: WW => "uAng" in WW,
              get: WW => WW.uAng,
              set: (WW, iW) => {
                WW.uAng = iW
              }
            },
            metadata: NW
          }, XW, BW), (0, mW.e)(null, null, SW, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: WW => "vAng" in WW,
              get: WW => WW.vAng,
              set: (WW, iW) => {
                WW.vAng = iW
              }
            },
            metadata: NW
          }, qW, RW), (0, mW.e)(null, null, YW, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: WW => "wAng" in WW,
              get: WW => WW.wAng,
              set: (WW, iW) => {
                WW.wAng = iW
              }
            },
            metadata: NW
          }, GW, IW), (0, mW.e)(null, null, yW, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: WW => "uRotationCenter" in WW,
              get: WW => WW.uRotationCenter,
              set: (WW, iW) => {
                WW.uRotationCenter = iW
              }
            },
            metadata: NW
          }, aW, rW), (0, mW.e)(null, null, TW, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: WW => "vRotationCenter" in WW,
              get: WW => WW.vRotationCenter,
              set: (WW, iW) => {
                WW.vRotationCenter = iW
              }
            },
            metadata: NW
          }, zW, FW), (0, mW.e)(null, null, JW, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: WW => "wRotationCenter" in WW,
              get: WW => WW.wRotationCenter,
              set: (WW, iW) => {
                WW.wRotationCenter = iW
              }
            },
            metadata: NW
          }, QW, Wi), (0, mW.e)(null, null, hW, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: WW => "homogeneousRotationInUVTransform" in WW,
              get: WW => WW.homogeneousRotationInUVTransform,
              set: (WW, iW) => {
                WW.homogeneousRotationInUVTransform = iW
              }
            },
            metadata: NW
          }, ii, Oi), NW && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: NW
          })
        })(), WW.SerializeBuffers = !0, WW.ForceSerializeBuffers = !1, WW.OnTextureLoadErrorObservable = new NW.e, WW._SerializeInternalTextureUniqueId = !1, WW._CubeTextureParser = (WW, iW, OW) => {
          throw (0, wW.o)("CubeTexture")
        }, WW._CreateMirror = (WW, iW, OW, mW) => {
          throw (0, wW.o)("MirrorTexture")
        }, WW._CreateRenderTargetTexture = (WW, iW, OW, mW, EW) => {
          throw (0, wW.o)("RenderTargetTexture")
        }, WW.NEAREST_SAMPLINGMODE = 1, WW.NEAREST_NEAREST_MIPLINEAR = 8, WW.BILINEAR_SAMPLINGMODE = 2, WW.LINEAR_LINEAR_MIPNEAREST = 11, WW.TRILINEAR_SAMPLINGMODE = 3, WW.LINEAR_LINEAR_MIPLINEAR = 3, WW.NEAREST_NEAREST_MIPNEAREST = 4, WW.NEAREST_LINEAR_MIPNEAREST = 5, WW.NEAREST_LINEAR_MIPLINEAR = 6, WW.NEAREST_LINEAR = 7, WW.NEAREST_NEAREST = 1, WW.LINEAR_NEAREST_MIPNEAREST = 9, WW.LINEAR_NEAREST_MIPLINEAR = 10, WW.LINEAR_LINEAR = 2, WW.LINEAR_NEAREST = 12, WW.EXPLICIT_MODE = 0, WW.SPHERICAL_MODE = 1, WW.PLANAR_MODE = 2, WW.CUBIC_MODE = 3, WW.PROJECTION_MODE = 4, WW.SKYBOX_MODE = 5, WW.INVCUBIC_MODE = 6, WW.EQUIRECTANGULAR_MODE = 7, WW.FIXED_EQUIRECTANGULAR_MODE = 8, WW.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, WW.CLAMP_ADDRESSMODE = 0, WW.WRAP_ADDRESSMODE = 1, WW.MIRROR_ADDRESSMODE = 2, WW.UseSerializedUrlIfAny = !1, WW
      })(),
      MW = !1;

    function KW() {
      MW || (MW = !0, (0, cW.h)("BABYLON.Texture", sW), kW.d._TextureParser = sW.Parse)
    }
  },
  41531: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => mW
    });
    class mW {
      constructor(WW, iW) {
        this.width = WW, this.height = iW
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let WW = 0 | this.width;
        return WW = 397 * WW ^ this.height, WW
      }
      HJ(WW) {
        this.width = WW.width, this.height = WW.height
      }
      yWW(WW, iW) {
        return this.width = WW, this.height = iW, this
      }
      set(WW, iW) {
        return this.yWW(WW, iW)
      }
      multiplyByFloats(WW, iW) {
        return new mW(this.width * WW, this.height * iW)
      }
      clone() {
        return new mW(this.width, this.height)
      }
      equals(WW) {
        return !!WW && (this.width === WW.width && this.height === WW.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new mW(0, 0)
      }
      add(WW) {
        return new mW(this.width + WW.width, this.height + WW.height)
      }
      subtract(WW) {
        return new mW(this.width - WW.width, this.height - WW.height)
      }
      scale(WW) {
        return new mW(this.width * WW, this.height * WW)
      }
      static Lerp(WW, iW, OW) {
        const EW = WW.width + (iW.width - WW.width) * OW,
          NW = WW.height + (iW.height - WW.height) * OW;
        return new mW(EW, NW)
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);