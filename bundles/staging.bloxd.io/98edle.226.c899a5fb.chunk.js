export const id = 226;
export const ids = [226];
export const modules = {
  38019: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => wW
    });
    let wW = !1
  },
  37579: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => gR
    });
    var wW = MW(37587),
      CW = MW(37593),
      zR = MW(35346),
      AW = MW(35324),
      bR = MW(35344),
      yR = MW(35984),
      NW = MW(37608);
    class eW {
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
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = NW.d.Zero(), this._cachedBaseSize = NW.d.Zero(), this._initialSamplingMode = 2, this._texture = eW._IsRenderTargetWrapper(WW) ? WW.texture : WW, this._texture && (this._engine = this._texture.mC(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(WW, this._texture, this._texture.generateMipMaps && RW)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var BW, tR = MW(37615),
      TW = MW(37470);
    let gR = (() => {
      var WW;
      let RW, MW, NW, BW, TW, gR, iR, YW, JW, PW, IW, oW, lW, FW, fW, QW, rR, cR, XW, jR, kR, aR, sW, dW, pW, hW = eW,
        UW = [],
        EW = [],
        VW = [],
        mR = [],
        xR = [],
        vR = [],
        KW = [],
        uW = [],
        OW = [],
        nW = [],
        GW = [],
        LW = [],
        HW = [],
        DW = [],
        qR = [],
        ZW = [],
        SW = [],
        WR = [],
        RR = [],
        MR = [],
        wR = [],
        CR = [],
        zM = [],
        AR = [],
        bM = [],
        yM = [],
        NR = [],
        eR = [],
        BR = [],
        tM = [],
        TR = [];
      return WW = class extends hW {
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
          this.QRW()?.markAllMaterialsAsDirty(1, (WW => WW.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(WW) {
          WW !== this.isRGBD && (this._texture && (this._texture._isRGBD = WW), this.QRW()?.markAllMaterialsAsDirty(1, (WW => WW.hasTexture(this))))
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
          return this._uid || (this._uid = (0, yR.e)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(WW) {
          this._onDisposeObserver && this.rMW.remove(this._onDisposeObserver), this._onDisposeObserver = this.rMW.add(WW)
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
        constructor(RW) {
          let MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, wW.i)(this, UW), (0, wW.i)(this, EW, void 0)), this.name = ((0, wW.i)(this, VW), (0, wW.i)(this, mR, void 0)), this.displayName = ((0, wW.i)(this, xR), (0, wW.i)(this, vR, void 0)), this.metadata = ((0, wW.i)(this, KW), (0, wW.i)(this, uW, null)), this._internalMetadata = (0, wW.i)(this, OW), this.reservedDataStore = null, this._hasAlpha = (0, wW.i)(this, nW, !1), this._getAlphaFromRGB = ((0, wW.i)(this, GW), (0, wW.i)(this, LW, !1)), this.level = ((0, wW.i)(this, HW), (0, wW.i)(this, DW, 1)), this._coordinatesIndex = ((0, wW.i)(this, qR), (0, wW.i)(this, ZW, 0)), this.optimizeUVAllocation = ((0, wW.i)(this, SW), (0, wW.i)(this, WR, !0)), this._coordinatesMode = ((0, wW.i)(this, RR), (0, wW.i)(this, MR, 0)), this.wrapR = ((0, wW.i)(this, wR), (0, wW.i)(this, CR, 1)), this.anisotropicFilteringLevel = ((0, wW.i)(this, zM), (0, wW.i)(this, AR, WW.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, wW.i)(this, bM), !1), this._gammaSpace = !0, this.invertZ = (0, wW.i)(this, yM, !1), this.lodLevelInAlpha = ((0, wW.i)(this, NR), (0, wW.i)(this, eR, !1)), this._dominantDirection = ((0, wW.i)(this, BR), null), this.isRenderTarget = (0, wW.i)(this, tM, !1), this._prefiltered = ((0, wW.i)(this, TR), !1), this._forceSerialize = !1, this.animations = [], this.rMW = new zR.c, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, RW ? WW._IsScene(RW) ? this._scene = RW : this._engine = RW : this._scene = bR.d.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.mC()), this._texture = MW, this._uid = null
        }
        QRW() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return AW.d.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return AW.d.IdentityReadOnly
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
        _getFromCache(WW, RW, MW, wW, CW, zR) {
          const AW = this._getEngine();
          if (!AW) return null;
          const bR = AW._getUseSRGBBuffer(!!CW, RW),
            yR = AW.getLoadedTexturesCache();
          for (let NW = 0; NW < yR.length; NW++) {
            const AW = yR[NW];
            if ((void 0 === CW || bR === AW._useSRGBBuffer) && (void 0 === wW || wW === AW.invertY) && AW.url === WW && AW.generateMipMaps === !RW && (!MW || MW === AW.samplingMode) && (void 0 === zR || zR === AW.isCube)) return AW.incrementReferences(), AW
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
          const WW = this.QRW();
          WW && WW.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            wW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            CW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            AW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            bR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            yR = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const NW = this._getEngine();
          if (!NW) return null;
          const eW = this.getSize();
          let BW = eW.width,
            tR = eW.height;
          0 !== RW && (BW /= Math.pow(2, RW), tR /= Math.pow(2, RW), BW = Math.round(BW), tR = Math.round(tR)), bR = Math.min(BW, bR), yR = Math.min(tR, yR);
          try {
            return this._texture.isCube || this._texture.is2DArray ? NW._readTexturePixels(this._texture, bR, yR, WW, RW, MW, wW, CW, zR, AW) : NW._readTexturePixels(this._texture, bR, yR, -1, RW, MW, wW, CW, zR, AW)
          } catch (TW) {
            return null
          }
        }
        _readPixelsSync() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            wW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            CW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const zR = this.getSize();
          let AW = zR.width,
            bR = zR.height;
          const yR = this._getEngine();
          if (!yR) return null;
          0 != RW && (AW /= Math.pow(2, RW), bR /= Math.pow(2, RW), AW = Math.round(AW), bR = Math.round(bR));
          try {
            return this._texture.isCube ? yR._readTexturePixelsSync(this._texture, AW, bR, WW, RW, MW, wW, CW) : yR._readTexturePixelsSync(this._texture, AW, bR, -1, RW, MW, wW, CW)
          } catch (NW) {
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
          this.rMW.notifyObservers(this), this.rMW.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !WW) return null;
          const RW = tR.d.Serialize(this);
          return tR.d.AppendSerializedAnimations(this, RW), RW
        }
        static WhenAllReady(WW, RW) {
          let MW = WW.length;
          if (0 !== MW)
            for (let wW = 0; wW < WW.length; wW++) {
              const CW = WW[wW];
              if (CW.isReady()) 0 === --MW && RW();
              else {
                const WW = CW.onLoadObservable;
                WW ? WW.addOnce((() => {
                  0 === --MW && RW()
                })) : 0 === --MW && RW()
              }
            } else RW()
        }
        static _IsScene(WW) {
          return "Scene" === WW.getClassName()
        }
      }, (() => {
        const zR = "function" === typeof Symbol && Symbol.metadata ? Object.create(hW[Symbol.metadata] ?? null) : void 0;
        RW = [(0, CW.D)()], MW = [(0, CW.D)()], NW = [(0, CW.D)()], BW = [(0, CW.D)()], TW = [(0, CW.D)("hasAlpha")], gR = [(0, CW.D)("getAlphaFromRGB")], iR = [(0, CW.D)()], YW = [(0, CW.D)("coordinatesIndex")], JW = [(0, CW.D)()], PW = [(0, CW.D)("coordinatesMode")], IW = [(0, CW.D)()], oW = [(0, CW.D)()], lW = [(0, CW.D)()], FW = [(0, CW.D)()], fW = [(0, CW.D)()], QW = [(0, CW.D)()], rR = [(0, CW.D)()], cR = [(0, CW.D)()], XW = [(0, CW.D)()], jR = [(0, CW.D)()], kR = [(0, CW.D)()], aR = [(0, CW.D)()], sW = [(0, CW.D)()], dW = [(0, CW.y)()], pW = [(0, CW.D)()], (0, wW.e)(WW, null, IW, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: WW => "wrapU" in WW,
            get: WW => WW.wrapU
          },
          metadata: zR
        }, null, UW), (0, wW.e)(WW, null, oW, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: WW => "wrapV" in WW,
            get: WW => WW.wrapV
          },
          metadata: zR
        }, null, UW), (0, wW.e)(WW, null, fW, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: WW => "isCube" in WW,
            get: WW => WW.isCube
          },
          metadata: zR
        }, null, UW), (0, wW.e)(WW, null, QW, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: WW => "is3D" in WW,
            get: WW => WW.is3D
          },
          metadata: zR
        }, null, UW), (0, wW.e)(WW, null, rR, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: WW => "is2DArray" in WW,
            get: WW => WW.is2DArray
          },
          metadata: zR
        }, null, UW), (0, wW.e)(WW, null, cR, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: WW => "gammaSpace" in WW,
            get: WW => WW.gammaSpace
          },
          metadata: zR
        }, null, UW), (0, wW.e)(WW, null, kR, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: WW => "lodGenerationOffset" in WW,
            get: WW => WW.lodGenerationOffset
          },
          metadata: zR
        }, null, UW), (0, wW.e)(WW, null, aR, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: WW => "lodGenerationScale" in WW,
            get: WW => WW.lodGenerationScale
          },
          metadata: zR
        }, null, UW), (0, wW.e)(WW, null, sW, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: WW => "linearSpecularLOD" in WW,
            get: WW => WW.linearSpecularLOD
          },
          metadata: zR
        }, null, UW), (0, wW.e)(WW, null, dW, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "irradianceTexture" in WW,
            get: WW => WW.irradianceTexture
          },
          metadata: zR
        }, null, UW), (0, wW.e)(null, null, RW, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: WW => "uniqueId" in WW,
            get: WW => WW.uniqueId,
            set: (WW, RW) => {
              WW.uniqueId = RW
            }
          },
          metadata: zR
        }, EW, VW), (0, wW.e)(null, null, MW, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: WW => "name" in WW,
            get: WW => WW.name,
            set: (WW, RW) => {
              WW.name = RW
            }
          },
          metadata: zR
        }, mR, xR), (0, wW.e)(null, null, NW, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: WW => "displayName" in WW,
            get: WW => WW.displayName,
            set: (WW, RW) => {
              WW.displayName = RW
            }
          },
          metadata: zR
        }, vR, KW), (0, wW.e)(null, null, BW, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: WW => "metadata" in WW,
            get: WW => WW.metadata,
            set: (WW, RW) => {
              WW.metadata = RW
            }
          },
          metadata: zR
        }, uW, OW), (0, wW.e)(null, null, TW, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: WW => "_hasAlpha" in WW,
            get: WW => WW._hasAlpha,
            set: (WW, RW) => {
              WW._hasAlpha = RW
            }
          },
          metadata: zR
        }, nW, GW), (0, wW.e)(null, null, gR, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: WW => "_getAlphaFromRGB" in WW,
            get: WW => WW._getAlphaFromRGB,
            set: (WW, RW) => {
              WW._getAlphaFromRGB = RW
            }
          },
          metadata: zR
        }, LW, HW), (0, wW.e)(null, null, iR, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: WW => "level" in WW,
            get: WW => WW.level,
            set: (WW, RW) => {
              WW.level = RW
            }
          },
          metadata: zR
        }, DW, qR), (0, wW.e)(null, null, YW, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: WW => "_coordinatesIndex" in WW,
            get: WW => WW._coordinatesIndex,
            set: (WW, RW) => {
              WW._coordinatesIndex = RW
            }
          },
          metadata: zR
        }, ZW, SW), (0, wW.e)(null, null, JW, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: WW => "optimizeUVAllocation" in WW,
            get: WW => WW.optimizeUVAllocation,
            set: (WW, RW) => {
              WW.optimizeUVAllocation = RW
            }
          },
          metadata: zR
        }, WR, RR), (0, wW.e)(null, null, PW, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: WW => "_coordinatesMode" in WW,
            get: WW => WW._coordinatesMode,
            set: (WW, RW) => {
              WW._coordinatesMode = RW
            }
          },
          metadata: zR
        }, MR, wR), (0, wW.e)(null, null, lW, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: WW => "wrapR" in WW,
            get: WW => WW.wrapR,
            set: (WW, RW) => {
              WW.wrapR = RW
            }
          },
          metadata: zR
        }, CR, zM), (0, wW.e)(null, null, FW, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: WW => "anisotropicFilteringLevel" in WW,
            get: WW => WW.anisotropicFilteringLevel,
            set: (WW, RW) => {
              WW.anisotropicFilteringLevel = RW
            }
          },
          metadata: zR
        }, AR, bM), (0, wW.e)(null, null, XW, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: WW => "invertZ" in WW,
            get: WW => WW.invertZ,
            set: (WW, RW) => {
              WW.invertZ = RW
            }
          },
          metadata: zR
        }, yM, NR), (0, wW.e)(null, null, jR, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: WW => "lodLevelInAlpha" in WW,
            get: WW => WW.lodLevelInAlpha,
            set: (WW, RW) => {
              WW.lodLevelInAlpha = RW
            }
          },
          metadata: zR
        }, eR, BR), (0, wW.e)(null, null, pW, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: WW => "isRenderTarget" in WW,
            get: WW => WW.isRenderTarget,
            set: (WW, RW) => {
              WW.isRenderTarget = RW
            }
          },
          metadata: zR
        }, tM, TR), zR && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zR
        })
      })(), WW.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, WW
    })();
    (BW = gR.prototype).forceSphericalPolynomialsRecompute ?? (BW.forceSphericalPolynomialsRecompute = (0, TW.f)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(gR.prototype, "sphericalPolynomial") || Object.defineProperty(gR.prototype, "sphericalPolynomial", (0, TW.e)("BaseTexture", "sphericalPolynomial"))
  },
  38069: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => lW,
      d: () => IW
    });
    var wW = MW(37587),
      CW = MW(37593),
      zR = MW(35346),
      AW = MW(35324),
      bR = MW(37579),
      yR = MW(35361),
      NW = MW(37470),
      eW = MW(37483),
      BW = MW(37688),
      tR = MW(35852),
      TW = MW(37650);

    function gR(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const wW = RW.width,
        CW = RW.height;
      if (WW instanceof Float32Array) {
        let RW = WW.byteLength / WW.BYTES_PER_ELEMENT;
        const MW = new Uint8Array(RW);
        for (; --RW >= 0;) {
          let wW = WW[RW];
          wW < 0 ? wW = 0 : wW > 1 && (wW = 1), MW[RW] = 255 * wW
        }
        WW = MW
      }
      const zR = document.createElement("canvas");
      zR.width = wW, zR.height = CW;
      const AW = zR.getContext("2d");
      if (!AW) return null;
      const bR = AW.createImageData(wW, CW);
      if (bR.data.set(WW), AW.putImageData(bR, 0, 0), MW) {
        const WW = document.createElement("canvas");
        WW.width = wW, WW.height = CW;
        const RW = WW.getContext("2d");
        return RW ? (RW.translate(0, CW), RW.scale(1, -1), RW.drawImage(zR, 0, 0), WW.toDataURL("image/png")) : null
      }
      return zR.toDataURL("image/png")
    }

    function iR(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const wW = WW.getInternalTexture();
      if (!wW) return null;
      const CW = WW._readPixelsSync(RW, MW);
      return CW ? gR(CW, WW.getSize(), wW.invertY) : null
    }
    async function YW(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const wW = WW.getInternalTexture();
      if (!wW) return null;
      const CW = await WW.readPixels(RW, MW);
      return CW ? gR(CW, WW.getSize(), wW.invertY) : null
    }
    var JW = MW(38019),
      PW = MW(37615);
    let IW = (() => {
        var WW;
        let RW, MW, gR, IW, oW, lW, FW, fW, QW, rR, cR, XW, jR, kR = bR.c,
          aR = [],
          sW = [],
          dW = [],
          pW = [],
          hW = [],
          UW = [],
          EW = [],
          VW = [],
          mR = [],
          xR = [],
          vR = [],
          KW = [],
          uW = [],
          OW = [],
          nW = [],
          GW = [],
          LW = [],
          HW = [],
          DW = [],
          qR = [],
          ZW = [],
          SW = [],
          WR = [],
          RR = [],
          MR = [];
        return WW = class extends kR {
          static _CreateVideoTexture(RW, MW, wW) {
            arguments.length > 5 && void 0 !== arguments[5] || WW.TRILINEAR_SAMPLINGMODE;
            throw (0, NW.g)("VideoTexture")
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
          constructor(RW, MW, CW, AW) {
            let bR, yR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : WW.TRILINEAR_SAMPLINGMODE,
              NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              BW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              tR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              TW = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              gR = arguments.length > 9 ? arguments[9] : void 0,
              iR = arguments.length > 10 ? arguments[10] : void 0,
              YW = arguments.length > 11 ? arguments[11] : void 0,
              PW = arguments.length > 12 ? arguments[12] : void 0,
              IW = arguments.length > 13 ? arguments[13] : void 0;
            super(MW), this.url = ((0, wW.i)(this, aR), (0, wW.i)(this, sW, null)), this.uOffset = ((0, wW.i)(this, dW), (0, wW.i)(this, pW, 0)), this.vOffset = ((0, wW.i)(this, hW), (0, wW.i)(this, UW, 0)), this.uScale = ((0, wW.i)(this, EW), (0, wW.i)(this, VW, 1)), this.vScale = ((0, wW.i)(this, mR), (0, wW.i)(this, xR, 1)), this.uAng = ((0, wW.i)(this, vR), (0, wW.i)(this, KW, 0)), this.vAng = ((0, wW.i)(this, uW), (0, wW.i)(this, OW, 0)), this.wAng = ((0, wW.i)(this, nW), (0, wW.i)(this, GW, 0)), this.uRotationCenter = ((0, wW.i)(this, LW), (0, wW.i)(this, HW, .5)), this.vRotationCenter = ((0, wW.i)(this, DW), (0, wW.i)(this, qR, .5)), this.wRotationCenter = ((0, wW.i)(this, ZW), (0, wW.i)(this, SW, .5)), this.homogeneousRotationInUVTransform = ((0, wW.i)(this, WR), (0, wW.i)(this, RR, !1)), this.inspectableCustomProperties = ((0, wW.i)(this, MR), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new zR.c, this._isBlocking = !0, this.name = RW || "", this.url = RW;
            let oW = !1,
              lW = null,
              FW = !0;
            "object" === typeof CW && null !== CW ? (bR = CW.noMipmap ?? !1, AW = CW.invertY ?? !JW.c, yR = CW.samplingMode ?? WW.TRILINEAR_SAMPLINGMODE, NW = CW.onLoad ?? null, BW = CW.onError ?? null, tR = CW.buffer ?? null, TW = CW.deleteBuffer ?? !1, gR = CW.format, iR = CW.mimeType, YW = CW.loaderOptions, PW = CW.creationFlags, oW = CW.useSRGBBuffer ?? !1, lW = CW.internalTexture ?? null, FW = CW.gammaSpace ?? FW, IW = CW.forcedExtension ?? IW) : bR = !!CW, this._gammaSpace = FW, this._noMipmap = bR, this._invertY = void 0 === AW ? !JW.c : AW, this._initialSamplingMode = yR, this._buffer = tR, this._deleteBuffer = TW, this._mimeType = iR, this._loaderOptions = YW, this._creationFlags = PW, this._useSRGBBuffer = oW, this._forcedExtension = IW, void 0 !== gR && (this._format = gR);
            const fW = this.QRW(),
              QW = this._getEngine();
            if (!QW) return;
            QW.onBeforeTextureInitObservable.notifyObservers(this);
            const rR = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), NW && NW(), !this.isBlocking && fW && fW.resetCachedMaterial()
              },
              cR = (RW, MW) => {
                this._loadingError = !0, this._errorObject = {
                  message: RW,
                  exception: MW
                }, BW && BW(RW, MW), WW.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !lW) return this._delayedOnLoad = rR, void(this._delayedOnError = cR);
            if (this._texture = lW ?? this._getFromCache(this.url, bR, yR, this._invertY, oW, this.isCube), this._texture)
              if (this._texture.isReady) eW.c.SetImmediate((() => rR()));
              else {
                const WW = this._texture.onLoadedObservable.add(rR);
                this._texture.onErrorObservable.add((RW => {
                  cR(RW.message, RW.exception), this._texture?.onLoadedObservable.remove(WW)
                }))
              }
            else if (fW && fW.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = rR, this._delayedOnError = cR;
            else {
              try {
                this._texture = QW.createTexture(this.url, bR, this._invertY, fW, yR, rR, cR, this._buffer, void 0, this._format, this._forcedExtension, iR, YW, PW, oW)
              } catch (XW) {
                throw cR("error loading", XW), XW
              }
              TW && (this._buffer = null)
            }
          }
          updateURL(WW) {
            let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              MW = arguments.length > 2 ? arguments[2] : void 0,
              wW = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.QRW().markAllMaterialsAsDirty(1, (WW => WW.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = WW), this.url = WW, this._buffer = RW, this._forcedExtension = wW, this.delayLoadState = 4;
            const CW = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              CW ? CW() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), MW && MW()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const WW = this.QRW();
            if (!WW) return;
            let RW = this.url;
            !RW && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (RW = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(RW, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? eW.c.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = WW.mC().createTexture(RW, this._noMipmap, this._invertY, WW, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(WW, RW, MW, wW) {
            WW *= this._cachedUScale, RW *= this._cachedVScale, WW -= this.uRotationCenter * this._cachedUScale, RW -= this.vRotationCenter * this._cachedVScale, MW -= this.wRotationCenter, AW.q.TransformCoordinatesFromFloatsToRef(WW, RW, MW, this._rowGenerationMatrix, wW), wW.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, wW.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, wW.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * WW === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * WW, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = AW.d.Zero(), this._rowGenerationMatrix = new AW.d, this._t0 = AW.q.Zero(), this._t1 = AW.q.Zero(), this._t2 = AW.q.Zero()), AW.d.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (AW.d.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, AW.k.Matrix[0]), AW.d.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, AW.k.Matrix[1]), AW.d.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, AW.k.Matrix[2]), AW.d.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, AW.k.Matrix[3]), AW.k.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(AW.k.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(AW.k.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(AW.k.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.pNW(this._t0), this._t2.pNW(this._t0), AW.d.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const RW = this.QRW();
            if (!RW) return this._cachedTextureMatrix;
            const MW = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && MW !== this._cachedIdentity3x2 && RW.markAllMaterialsAsDirty(1, (WW => WW.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const RW = this.QRW();
            if (!RW) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== WW.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === RW.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = AW.d.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = AW.d.Zero());
            const MW = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case WW.PLANAR_MODE:
                AW.d.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case WW.PROJECTION_MODE: {
                AW.d.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const WW = RW.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = WW.updateFlag, WW.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                AW.d.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return MW && RW.markAllMaterialsAsDirty(1, (WW => WW.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const RW = {
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
            return PW.d.Clone((() => new WW(this._texture ? this._texture.url : null, this.QRW(), RW)), this)
          }
          serialize() {
            const RW = this.name;
            WW.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const MW = super.serialize(WW._SerializeInternalTextureUniqueId);
            if (!MW) return null;
            if (WW.SerializeBuffers || WW.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) MW.base64String = this._buffer, MW.name = MW.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const WW = this.mimeType || "image/png";
              MW.base64String = `data:${WW};base64,${(0,TW.h)(this._buffer)}`
            } else(WW.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (MW.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? iR(this) : YW(this));
            return MW.invertY = this._invertY, MW.samplingMode = this.samplingMode, MW._creationFlags = this._creationFlags, MW._useSRGBBuffer = this._useSRGBBuffer, WW._SerializeInternalTextureUniqueId && (MW.internalTextureUniqueId = this._texture?.uniqueId), MW.internalTextureLabel = this._texture?.label, MW.noMipmap = this._noMipmap, this.name = RW, MW
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(RW, MW, wW) {
            if (RW.customType) {
              const WW = BW.e.Instantiate(RW.customType).Parse(RW, MW, wW);
              return RW.samplingMode && WW.updateSamplingMode && WW._samplingMode && WW._samplingMode !== RW.samplingMode && WW.updateSamplingMode(RW.samplingMode), WW
            }
            if (RW.isCube && !RW.isRenderTarget) return WW._CubeTextureParser(RW, MW, wW);
            const CW = void 0 !== RW.internalTextureUniqueId;
            if (!RW.name && !RW.isRenderTarget && !CW) return null;
            let zR;
            if (CW) {
              const WW = MW.mC().getLoadedTexturesCache();
              for (const MW of WW)
                if (MW.uniqueId === RW.internalTextureUniqueId) {
                  zR = MW;
                  break
                }
            }
            const AW = WW => {
              if (WW && WW._texture && (WW._texture._cachedWrapU = null, WW._texture._cachedWrapV = null, WW._texture._cachedWrapR = null), RW.samplingMode) {
                const MW = RW.samplingMode;
                WW && WW.samplingMode !== MW && WW.updateSamplingMode(MW)
              }
              if (WW && RW.animations)
                for (let MW = 0; MW < RW.animations.length; MW++) {
                  const wW = RW.animations[MW],
                    CW = (0, yR.c)("BABYLON.Animation");
                  CW && WW.animations.push(CW.Parse(wW))
                }
              WW && WW._texture && (CW && !zR && WW._texture._setUniqueId(RW.internalTextureUniqueId), WW._texture.label = RW.internalTextureLabel)
            };
            return PW.d.Parse((() => {
              let CW = !0;
              if (RW.noMipmap && (CW = !1), RW.mirrorPlane) {
                const wW = WW._CreateMirror(RW.name, RW.renderTargetSize, MW, CW);
                return wW._waitingRenderList = RW.renderList, wW.mirrorPlane = tR.c.FromArray(RW.mirrorPlane), AW(wW), wW
              }
              if (RW.isRenderTarget && !RW.base64String) {
                let wW = null;
                if (RW.isCube) {
                  if (MW.reflectionProbes)
                    for (let WW = 0; WW < MW.reflectionProbes.length; WW++) {
                      const wW = MW.reflectionProbes[WW];
                      if (wW.name === RW.name) return wW.cubeTexture
                    }
                } else wW = WW._CreateRenderTargetTexture(RW.name, RW.renderTargetSize, MW, CW, RW._creationFlags ?? 0), wW._waitingRenderList = RW.renderList;
                return AW(wW), wW
              }
              if (RW.isVideo) {
                const zR = WW._CreateVideoTexture(wW + (RW.url || RW.name), wW + (RW.src || RW.url), MW, CW, RW.invertY, RW.samplingMode, RW.settings || {});
                return AW(zR), zR
              } {
                let bR;
                if ("string" === typeof RW.base64String && RW.base64String && !zR) {
                  const wW = {
                      buffer: RW.base64String,
                      noMipmap: !CW,
                      invertY: RW.invertY,
                      samplingMode: RW.samplingMode,
                      useSRGBBuffer: RW._useSRGBBuffer ?? !1,
                      creationFlags: RW._creationFlags ?? 0,
                      onLoad: () => {
                        AW(bR)
                      }
                    },
                    zR = RW.base64String,
                    yR = zR.startsWith("data:") ? zR.substring(5) : zR;
                  bR = WW.CreateFromBase64String("", yR, MW, wW), bR.name = RW.name
                } else {
                  let yR;
                  yR = RW.name && (RW.name.indexOf("://") > 0 || RW.name.startsWith("data:")) ? RW.name : wW + RW.name, RW.url && (RW.url.startsWith("data:") || WW.UseSerializedUrlIfAny) && (yR = RW.url);
                  const NW = {
                    noMipmap: !CW,
                    invertY: RW.invertY,
                    samplingMode: RW.samplingMode,
                    useSRGBBuffer: RW._useSRGBBuffer ?? !1,
                    creationFlags: RW._creationFlags ?? 0,
                    onLoad: () => {
                      AW(bR)
                    },
                    internalTexture: zR
                  };
                  bR = new WW(yR, MW, NW)
                }
                return bR
              }
            }), RW, MW)
          }
          static CreateFromBase64String(RW, MW, wW, CW, zR) {
            let AW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : WW.TRILINEAR_SAMPLINGMODE;
            return new WW("data:" + MW, wW, CW, zR, AW, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, RW, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(RW, MW, wW) {
            let CW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              zR = arguments.length > 4 ? arguments[4] : void 0,
              AW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              bR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : WW.TRILINEAR_SAMPLINGMODE,
              yR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              NW = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              eW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              BW = arguments.length > 10 ? arguments[10] : void 0,
              tR = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== RW.substring(0, 5) && (RW = "data:" + RW), new WW(RW, wW, zR, AW, bR, yR, NW, MW, CW, eW, void 0, void 0, BW, tR)
          }
        }, (() => {
          const zR = "function" === typeof Symbol && Symbol.metadata ? Object.create(kR[Symbol.metadata] ?? null) : void 0;
          RW = [(0, CW.D)()], MW = [(0, CW.D)()], gR = [(0, CW.D)()], IW = [(0, CW.D)()], oW = [(0, CW.D)()], lW = [(0, CW.D)()], FW = [(0, CW.D)()], fW = [(0, CW.D)()], QW = [(0, CW.D)()], rR = [(0, CW.D)()], cR = [(0, CW.D)()], XW = [(0, CW.D)()], jR = [(0, CW.D)()], (0, wW.e)(WW, null, jR, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: WW => "isBlocking" in WW,
              get: WW => WW.isBlocking
            },
            metadata: zR
          }, null, aR), (0, wW.e)(null, null, RW, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: WW => "url" in WW,
              get: WW => WW.url,
              set: (WW, RW) => {
                WW.url = RW
              }
            },
            metadata: zR
          }, sW, dW), (0, wW.e)(null, null, MW, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: WW => "uOffset" in WW,
              get: WW => WW.uOffset,
              set: (WW, RW) => {
                WW.uOffset = RW
              }
            },
            metadata: zR
          }, pW, hW), (0, wW.e)(null, null, gR, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: WW => "vOffset" in WW,
              get: WW => WW.vOffset,
              set: (WW, RW) => {
                WW.vOffset = RW
              }
            },
            metadata: zR
          }, UW, EW), (0, wW.e)(null, null, IW, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: WW => "uScale" in WW,
              get: WW => WW.uScale,
              set: (WW, RW) => {
                WW.uScale = RW
              }
            },
            metadata: zR
          }, VW, mR), (0, wW.e)(null, null, oW, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: WW => "vScale" in WW,
              get: WW => WW.vScale,
              set: (WW, RW) => {
                WW.vScale = RW
              }
            },
            metadata: zR
          }, xR, vR), (0, wW.e)(null, null, lW, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: WW => "uAng" in WW,
              get: WW => WW.uAng,
              set: (WW, RW) => {
                WW.uAng = RW
              }
            },
            metadata: zR
          }, KW, uW), (0, wW.e)(null, null, FW, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: WW => "vAng" in WW,
              get: WW => WW.vAng,
              set: (WW, RW) => {
                WW.vAng = RW
              }
            },
            metadata: zR
          }, OW, nW), (0, wW.e)(null, null, fW, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: WW => "wAng" in WW,
              get: WW => WW.wAng,
              set: (WW, RW) => {
                WW.wAng = RW
              }
            },
            metadata: zR
          }, GW, LW), (0, wW.e)(null, null, QW, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: WW => "uRotationCenter" in WW,
              get: WW => WW.uRotationCenter,
              set: (WW, RW) => {
                WW.uRotationCenter = RW
              }
            },
            metadata: zR
          }, HW, DW), (0, wW.e)(null, null, rR, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: WW => "vRotationCenter" in WW,
              get: WW => WW.vRotationCenter,
              set: (WW, RW) => {
                WW.vRotationCenter = RW
              }
            },
            metadata: zR
          }, qR, ZW), (0, wW.e)(null, null, cR, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: WW => "wRotationCenter" in WW,
              get: WW => WW.wRotationCenter,
              set: (WW, RW) => {
                WW.wRotationCenter = RW
              }
            },
            metadata: zR
          }, SW, WR), (0, wW.e)(null, null, XW, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: WW => "homogeneousRotationInUVTransform" in WW,
              get: WW => WW.homogeneousRotationInUVTransform,
              set: (WW, RW) => {
                WW.homogeneousRotationInUVTransform = RW
              }
            },
            metadata: zR
          }, RR, MR), zR && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zR
          })
        })(), WW.SerializeBuffers = !0, WW.ForceSerializeBuffers = !1, WW.OnTextureLoadErrorObservable = new zR.c, WW._SerializeInternalTextureUniqueId = !1, WW._CubeTextureParser = (WW, RW, MW) => {
          throw (0, NW.g)("CubeTexture")
        }, WW._CreateMirror = (WW, RW, MW, wW) => {
          throw (0, NW.g)("MirrorTexture")
        }, WW._CreateRenderTargetTexture = (WW, RW, MW, wW, CW) => {
          throw (0, NW.g)("RenderTargetTexture")
        }, WW.NEAREST_SAMPLINGMODE = 1, WW.NEAREST_NEAREST_MIPLINEAR = 8, WW.BILINEAR_SAMPLINGMODE = 2, WW.LINEAR_LINEAR_MIPNEAREST = 11, WW.TRILINEAR_SAMPLINGMODE = 3, WW.LINEAR_LINEAR_MIPLINEAR = 3, WW.NEAREST_NEAREST_MIPNEAREST = 4, WW.NEAREST_LINEAR_MIPNEAREST = 5, WW.NEAREST_LINEAR_MIPLINEAR = 6, WW.NEAREST_LINEAR = 7, WW.NEAREST_NEAREST = 1, WW.LINEAR_NEAREST_MIPNEAREST = 9, WW.LINEAR_NEAREST_MIPLINEAR = 10, WW.LINEAR_LINEAR = 2, WW.LINEAR_NEAREST = 12, WW.EXPLICIT_MODE = 0, WW.SPHERICAL_MODE = 1, WW.PLANAR_MODE = 2, WW.CUBIC_MODE = 3, WW.PROJECTION_MODE = 4, WW.SKYBOX_MODE = 5, WW.INVCUBIC_MODE = 6, WW.EQUIRECTANGULAR_MODE = 7, WW.FIXED_EQUIRECTANGULAR_MODE = 8, WW.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, WW.CLAMP_ADDRESSMODE = 0, WW.WRAP_ADDRESSMODE = 1, WW.MIRROR_ADDRESSMODE = 2, WW.UseSerializedUrlIfAny = !1, WW
      })(),
      oW = !1;

    function lW() {
      oW || (oW = !0, (0, yR.e)("BABYLON.Texture", IW), PW.d._TextureParser = IW.Parse)
    }
  },
  37608: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => wW
    });
    class wW {
      constructor(WW, RW) {
        this.width = WW, this.height = RW
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
      hyW(WW) {
        this.width = WW.width, this.height = WW.height
      }
      nzW(WW, RW) {
        return this.width = WW, this.height = RW, this
      }
      set(WW, RW) {
        return this.nzW(WW, RW)
      }
      multiplyByFloats(WW, RW) {
        return new wW(this.width * WW, this.height * RW)
      }
      clone() {
        return new wW(this.width, this.height)
      }
      equals(WW) {
        return !!WW && (this.width === WW.width && this.height === WW.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new wW(0, 0)
      }
      add(WW) {
        return new wW(this.width + WW.width, this.height + WW.height)
      }
      subtract(WW) {
        return new wW(this.width - WW.width, this.height - WW.height)
      }
      scale(WW) {
        return new wW(this.width * WW, this.height * WW)
      }
      static Lerp(WW, RW, MW) {
        const CW = WW.width + (RW.width - WW.width) * MW,
          zR = WW.height + (RW.height - WW.height) * MW;
        return new wW(CW, zR)
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);