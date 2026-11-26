export const id = 285;
export const ids = [285];
export const modules = {
  41721: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH
    });
    let AH = !1
  },
  41283: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => uH
    });
    var AH = LH(41290),
      rH = LH(41297),
      SH = LH(37997),
      hH = LH(37963),
      tH = LH(37989),
      zH = LH(38790),
      CH = LH(41312);
    class EH {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(HH) {
        this._wrapU = HH
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(HH) {
        this._wrapV = HH
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(HH) {
        this._texture && (this._texture.isCube = HH)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(HH) {
        this._texture && (this._texture.is3D = HH)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(HH) {
        this._texture && (this._texture.is2DArray = HH)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(HH) {
        return void 0 !== HH?.shareDepth
      }
      constructor(HH) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = CH.c.Zero(), this._cachedBaseSize = CH.c.Zero(), this._initialSamplingMode = 2, this._texture = EH._IsRenderTargetWrapper(HH) ? HH.texture : HH, this._texture && (this._engine = this._texture.Iu(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(HH, this._texture, this._texture.generateMipMaps && BH)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var XH, GH = LH(41319),
      YH = LH(41169);
    let uH = (() => {
      var HH;
      let BH, LH, CH, XH, YH, uH, QH, WH, MH, xH, vH, PH, TH, UH, VH, OH, bH, kH, mH, oH, IH, fH, lH, KH, cH, eH = EH,
        qH = [],
        gH = [],
        NH = [],
        RH = [],
        jH = [],
        nH = [],
        FH = [],
        DH = [],
        wH = [],
        ZH = [],
        dH = [],
        aH = [],
        sH = [],
        JH = [],
        iH = [],
        pH = [],
        yH = [],
        HB = [],
        BB = [],
        LB = [],
        AB = [],
        rB = [],
        SB = [],
        hB = [],
        tB = [],
        zB = [],
        CB = [],
        EB = [],
        XB = [],
        GB = [],
        YB = [];
      return HH = class extends eH {
        set hasAlpha(HH) {
          this._hasAlpha = HH
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(HH) {
          this._getAlphaFromRGB !== HH && (this._getAlphaFromRGB = HH, this._scene && this._scene.markAllMaterialsAsDirty(1, (HH => HH.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(HH) {
          this._coordinatesIndex !== HH && (this._coordinatesIndex = HH, this._scene && this._scene.markAllMaterialsAsDirty(1, (HH => HH.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(HH) {
          this._coordinatesMode !== HH && (this._coordinatesMode = HH, this._scene && this._scene.markAllMaterialsAsDirty(1, (HH => HH.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(HH) {
          this._wrapU = HH
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(HH) {
          this._wrapV = HH
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(HH) {
          this._texture ? this._texture.isCube = HH : this._isCube = HH
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(HH) {
          this._texture && (this._texture.is3D = HH)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(HH) {
          this._texture && (this._texture.is2DArray = HH)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(HH) {
          if (this._texture) {
            if (this._texture._gammaSpace === HH) return;
            this._texture._gammaSpace = HH
          } else {
            if (this._gammaSpace === HH) return;
            this._gammaSpace = HH
          }
          this.yN()?.markAllMaterialsAsDirty(1, (HH => HH.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(HH) {
          HH !== this.isRGBD && (this._texture && (this._texture._isRGBD = HH), this.yN()?.markAllMaterialsAsDirty(1, (HH => HH.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(HH) {
          this._texture && (this._texture._lodGenerationOffset = HH)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(HH) {
          this._texture && (this._texture._lodGenerationScale = HH)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(HH) {
          this._texture && (this._texture._linearSpecularLOD = HH)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(HH) {
          this._texture && (this._texture._irradianceTexture = HH)
        }
        get uid() {
          return this._uid || (this._uid = (0, zH.e)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(HH) {
          this._onDisposeObserver && this.uR.remove(this._onDisposeObserver), this._onDisposeObserver = this.uR.add(HH)
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
        constructor(BH) {
          let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, AH.k)(this, qH), (0, AH.k)(this, gH, void 0)), this.name = ((0, AH.k)(this, NH), (0, AH.k)(this, RH, void 0)), this.displayName = ((0, AH.k)(this, jH), (0, AH.k)(this, nH, void 0)), this.metadata = ((0, AH.k)(this, FH), (0, AH.k)(this, DH, null)), this._internalMetadata = (0, AH.k)(this, wH), this.reservedDataStore = null, this._hasAlpha = (0, AH.k)(this, ZH, !1), this._getAlphaFromRGB = ((0, AH.k)(this, dH), (0, AH.k)(this, aH, !1)), this.level = ((0, AH.k)(this, sH), (0, AH.k)(this, JH, 1)), this._coordinatesIndex = ((0, AH.k)(this, iH), (0, AH.k)(this, pH, 0)), this.optimizeUVAllocation = ((0, AH.k)(this, yH), (0, AH.k)(this, HB, !0)), this._coordinatesMode = ((0, AH.k)(this, BB), (0, AH.k)(this, LB, 0)), this.wrapR = ((0, AH.k)(this, AB), (0, AH.k)(this, rB, 1)), this.anisotropicFilteringLevel = ((0, AH.k)(this, SB), (0, AH.k)(this, hB, HH.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, AH.k)(this, tB), !1), this._gammaSpace = !0, this.invertZ = (0, AH.k)(this, zB, !1), this.lodLevelInAlpha = ((0, AH.k)(this, CB), (0, AH.k)(this, EB, !1)), this._dominantDirection = ((0, AH.k)(this, XB), null), this.isRenderTarget = (0, AH.k)(this, GB, !1), this._prefiltered = ((0, AH.k)(this, YB), !1), this._forceSerialize = !1, this.animations = [], this.uR = new SH.d, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, BH ? HH._IsScene(BH) ? this._scene = BH : this._engine = BH : this._scene = tH.d.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.Iu()), this._texture = LH, this._uid = null
        }
        yN() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return hH.e.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return hH.e.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(HH) {}
        get canRescale() {
          return !1
        }
        _getFromCache(HH, BH, LH, AH, rH, SH) {
          const hH = this._getEngine();
          if (!hH) return null;
          const tH = hH._getUseSRGBBuffer(!!rH, BH),
            zH = hH.getLoadedTexturesCache();
          for (let CH = 0; CH < zH.length; CH++) {
            const hH = zH[CH];
            if ((void 0 === rH || tH === hH._useSRGBBuffer) && (void 0 === AH || AH === hH.invertY) && hH.url === HH && hH.generateMipMaps === !BH && (!LH || LH === hH.samplingMode) && (void 0 === SH || SH === hH.isCube)) return hH.incrementReferences(), hH
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
          const HH = this.yN();
          HH && HH.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            AH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            hH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            tH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            zH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const CH = this._getEngine();
          if (!CH) return null;
          const EH = this.getSize();
          let XH = EH.width,
            GH = EH.height;
          0 !== BH && (XH /= Math.pow(2, BH), GH /= Math.pow(2, BH), XH = Math.round(XH), GH = Math.round(GH)), tH = Math.min(XH, tH), zH = Math.min(GH, zH);
          try {
            return this._texture.isCube || this._texture.is2DArray ? CH._readTexturePixels(this._texture, tH, zH, HH, BH, LH, AH, rH, SH, hH) : CH._readTexturePixels(this._texture, tH, zH, -1, BH, LH, AH, rH, SH, hH)
          } catch (YH) {
            return null
          }
        }
        _readPixelsSync() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            AH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const SH = this.getSize();
          let hH = SH.width,
            tH = SH.height;
          const zH = this._getEngine();
          if (!zH) return null;
          0 != BH && (hH /= Math.pow(2, BH), tH /= Math.pow(2, BH), hH = Math.round(hH), tH = Math.round(tH));
          try {
            return this._texture.isCube ? zH._readTexturePixelsSync(this._texture, hH, tH, HH, BH, LH, AH, rH) : zH._readTexturePixelsSync(this._texture, hH, tH, -1, BH, LH, AH, rH)
          } catch (CH) {
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
            const HH = this._scene.textures.indexOf(this);
            if (HH >= 0 && this._scene.textures.splice(HH, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const HH = this._parentContainer.textures.indexOf(this);
              HH > -1 && this._parentContainer.textures.splice(HH, 1), this._parentContainer = null
            }
          }
          this.uR.notifyObservers(this), this.uR.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !HH) return null;
          const BH = GH.c.Serialize(this);
          return GH.c.AppendSerializedAnimations(this, BH), BH
        }
        static WhenAllReady(HH, BH) {
          let LH = HH.length;
          if (0 !== LH)
            for (let AH = 0; AH < HH.length; AH++) {
              const rH = HH[AH];
              if (rH.isReady()) 0 === --LH && BH();
              else {
                const HH = rH.onLoadObservable;
                HH ? HH.addOnce((() => {
                  0 === --LH && BH()
                })) : 0 === --LH && BH()
              }
            } else BH()
        }
        static _IsScene(HH) {
          return "Scene" === HH.getClassName()
        }
      }, (() => {
        const SH = "function" === typeof Symbol && Symbol.metadata ? Object.create(eH[Symbol.metadata] ?? null) : void 0;
        BH = [(0, rH.H)()], LH = [(0, rH.H)()], CH = [(0, rH.H)()], XH = [(0, rH.H)()], YH = [(0, rH.H)("hasAlpha")], uH = [(0, rH.H)("getAlphaFromRGB")], QH = [(0, rH.H)()], WH = [(0, rH.H)("coordinatesIndex")], MH = [(0, rH.H)()], xH = [(0, rH.H)("coordinatesMode")], vH = [(0, rH.H)()], PH = [(0, rH.H)()], TH = [(0, rH.H)()], UH = [(0, rH.H)()], VH = [(0, rH.H)()], OH = [(0, rH.H)()], bH = [(0, rH.H)()], kH = [(0, rH.H)()], mH = [(0, rH.H)()], oH = [(0, rH.H)()], IH = [(0, rH.H)()], fH = [(0, rH.H)()], lH = [(0, rH.H)()], KH = [(0, rH.A)()], cH = [(0, rH.H)()], (0, AH.g)(HH, null, vH, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: HH => "wrapU" in HH,
            get: HH => HH.wrapU
          },
          metadata: SH
        }, null, qH), (0, AH.g)(HH, null, PH, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: HH => "wrapV" in HH,
            get: HH => HH.wrapV
          },
          metadata: SH
        }, null, qH), (0, AH.g)(HH, null, VH, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: HH => "isCube" in HH,
            get: HH => HH.isCube
          },
          metadata: SH
        }, null, qH), (0, AH.g)(HH, null, OH, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: HH => "is3D" in HH,
            get: HH => HH.is3D
          },
          metadata: SH
        }, null, qH), (0, AH.g)(HH, null, bH, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: HH => "is2DArray" in HH,
            get: HH => HH.is2DArray
          },
          metadata: SH
        }, null, qH), (0, AH.g)(HH, null, kH, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: HH => "gammaSpace" in HH,
            get: HH => HH.gammaSpace
          },
          metadata: SH
        }, null, qH), (0, AH.g)(HH, null, IH, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: HH => "lodGenerationOffset" in HH,
            get: HH => HH.lodGenerationOffset
          },
          metadata: SH
        }, null, qH), (0, AH.g)(HH, null, fH, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: HH => "lodGenerationScale" in HH,
            get: HH => HH.lodGenerationScale
          },
          metadata: SH
        }, null, qH), (0, AH.g)(HH, null, lH, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: HH => "linearSpecularLOD" in HH,
            get: HH => HH.linearSpecularLOD
          },
          metadata: SH
        }, null, qH), (0, AH.g)(HH, null, KH, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "irradianceTexture" in HH,
            get: HH => HH.irradianceTexture
          },
          metadata: SH
        }, null, qH), (0, AH.g)(null, null, BH, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: HH => "uniqueId" in HH,
            get: HH => HH.uniqueId,
            set: (HH, BH) => {
              HH.uniqueId = BH
            }
          },
          metadata: SH
        }, gH, NH), (0, AH.g)(null, null, LH, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: HH => "name" in HH,
            get: HH => HH.name,
            set: (HH, BH) => {
              HH.name = BH
            }
          },
          metadata: SH
        }, RH, jH), (0, AH.g)(null, null, CH, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: HH => "displayName" in HH,
            get: HH => HH.displayName,
            set: (HH, BH) => {
              HH.displayName = BH
            }
          },
          metadata: SH
        }, nH, FH), (0, AH.g)(null, null, XH, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: HH => "metadata" in HH,
            get: HH => HH.metadata,
            set: (HH, BH) => {
              HH.metadata = BH
            }
          },
          metadata: SH
        }, DH, wH), (0, AH.g)(null, null, YH, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: HH => "_hasAlpha" in HH,
            get: HH => HH._hasAlpha,
            set: (HH, BH) => {
              HH._hasAlpha = BH
            }
          },
          metadata: SH
        }, ZH, dH), (0, AH.g)(null, null, uH, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: HH => "_getAlphaFromRGB" in HH,
            get: HH => HH._getAlphaFromRGB,
            set: (HH, BH) => {
              HH._getAlphaFromRGB = BH
            }
          },
          metadata: SH
        }, aH, sH), (0, AH.g)(null, null, QH, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: HH => "level" in HH,
            get: HH => HH.level,
            set: (HH, BH) => {
              HH.level = BH
            }
          },
          metadata: SH
        }, JH, iH), (0, AH.g)(null, null, WH, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: HH => "_coordinatesIndex" in HH,
            get: HH => HH._coordinatesIndex,
            set: (HH, BH) => {
              HH._coordinatesIndex = BH
            }
          },
          metadata: SH
        }, pH, yH), (0, AH.g)(null, null, MH, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: HH => "optimizeUVAllocation" in HH,
            get: HH => HH.optimizeUVAllocation,
            set: (HH, BH) => {
              HH.optimizeUVAllocation = BH
            }
          },
          metadata: SH
        }, HB, BB), (0, AH.g)(null, null, xH, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: HH => "_coordinatesMode" in HH,
            get: HH => HH._coordinatesMode,
            set: (HH, BH) => {
              HH._coordinatesMode = BH
            }
          },
          metadata: SH
        }, LB, AB), (0, AH.g)(null, null, TH, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: HH => "wrapR" in HH,
            get: HH => HH.wrapR,
            set: (HH, BH) => {
              HH.wrapR = BH
            }
          },
          metadata: SH
        }, rB, SB), (0, AH.g)(null, null, UH, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: HH => "anisotropicFilteringLevel" in HH,
            get: HH => HH.anisotropicFilteringLevel,
            set: (HH, BH) => {
              HH.anisotropicFilteringLevel = BH
            }
          },
          metadata: SH
        }, hB, tB), (0, AH.g)(null, null, mH, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: HH => "invertZ" in HH,
            get: HH => HH.invertZ,
            set: (HH, BH) => {
              HH.invertZ = BH
            }
          },
          metadata: SH
        }, zB, CB), (0, AH.g)(null, null, oH, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: HH => "lodLevelInAlpha" in HH,
            get: HH => HH.lodLevelInAlpha,
            set: (HH, BH) => {
              HH.lodLevelInAlpha = BH
            }
          },
          metadata: SH
        }, EB, XB), (0, AH.g)(null, null, cH, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: HH => "isRenderTarget" in HH,
            get: HH => HH.isRenderTarget,
            set: (HH, BH) => {
              HH.isRenderTarget = BH
            }
          },
          metadata: SH
        }, GB, YB), SH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: SH
        })
      })(), HH.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, HH
    })();
    (XH = uH.prototype).forceSphericalPolynomialsRecompute ?? (XH.forceSphericalPolynomialsRecompute = (0, YH.f)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(uH.prototype, "sphericalPolynomial") || Object.defineProperty(uH.prototype, "sphericalPolynomial", (0, YH.e)("BaseTexture", "sphericalPolynomial"))
  },
  41777: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => TH,
      g: () => vH
    });
    var AH = LH(41290),
      rH = LH(41297),
      SH = LH(37997),
      hH = LH(37963),
      tH = LH(41283),
      zH = LH(38012),
      CH = LH(41169),
      EH = LH(41179),
      XH = LH(41392),
      GH = LH(38619),
      YH = LH(41353);

    function uH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const AH = BH.width,
        rH = BH.height;
      if (HH instanceof Float32Array) {
        let BH = HH.byteLength / HH.BYTES_PER_ELEMENT;
        const LH = new Uint8Array(BH);
        for (; --BH >= 0;) {
          let AH = HH[BH];
          AH < 0 ? AH = 0 : AH > 1 && (AH = 1), LH[BH] = 255 * AH
        }
        HH = LH
      }
      const SH = document.createElement("canvas");
      SH.width = AH, SH.height = rH;
      const hH = SH.getContext("2d");
      if (!hH) return null;
      const tH = hH.createImageData(AH, rH);
      if (tH.data.set(HH), hH.putImageData(tH, 0, 0), LH) {
        const HH = document.createElement("canvas");
        HH.width = AH, HH.height = rH;
        const BH = HH.getContext("2d");
        return BH ? (BH.translate(0, rH), BH.scale(1, -1), BH.drawImage(SH, 0, 0), HH.toDataURL("image/png")) : null
      }
      return SH.toDataURL("image/png")
    }

    function QH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const AH = HH.getInternalTexture();
      if (!AH) return null;
      const rH = HH._readPixelsSync(BH, LH);
      return rH ? uH(rH, HH.getSize(), AH.invertY) : null
    }
    async function WH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const AH = HH.getInternalTexture();
      if (!AH) return null;
      const rH = await HH.readPixels(BH, LH);
      return rH ? uH(rH, HH.getSize(), AH.invertY) : null
    }
    var MH = LH(41721),
      xH = LH(41319);
    let vH = (() => {
        var HH;
        let BH, LH, uH, vH, PH, TH, UH, VH, OH, bH, kH, mH, oH, IH = tH.e,
          fH = [],
          lH = [],
          KH = [],
          cH = [],
          eH = [],
          qH = [],
          gH = [],
          NH = [],
          RH = [],
          jH = [],
          nH = [],
          FH = [],
          DH = [],
          wH = [],
          ZH = [],
          dH = [],
          aH = [],
          sH = [],
          JH = [],
          iH = [],
          pH = [],
          yH = [],
          HB = [],
          BB = [],
          LB = [];
        return HH = class extends IH {
          static _CreateVideoTexture(BH, LH, AH) {
            arguments.length > 5 && void 0 !== arguments[5] || HH.TRILINEAR_SAMPLINGMODE;
            throw (0, CH.i)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(HH) {
            this._isBlocking = HH
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(BH, LH, rH, hH) {
            let tH, zH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : HH.TRILINEAR_SAMPLINGMODE,
              CH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              XH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              GH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              YH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              uH = arguments.length > 9 ? arguments[9] : void 0,
              QH = arguments.length > 10 ? arguments[10] : void 0,
              WH = arguments.length > 11 ? arguments[11] : void 0,
              xH = arguments.length > 12 ? arguments[12] : void 0,
              vH = arguments.length > 13 ? arguments[13] : void 0;
            super(LH), this.url = ((0, AH.k)(this, fH), (0, AH.k)(this, lH, null)), this.uOffset = ((0, AH.k)(this, KH), (0, AH.k)(this, cH, 0)), this.vOffset = ((0, AH.k)(this, eH), (0, AH.k)(this, qH, 0)), this.uScale = ((0, AH.k)(this, gH), (0, AH.k)(this, NH, 1)), this.vScale = ((0, AH.k)(this, RH), (0, AH.k)(this, jH, 1)), this.uAng = ((0, AH.k)(this, nH), (0, AH.k)(this, FH, 0)), this.vAng = ((0, AH.k)(this, DH), (0, AH.k)(this, wH, 0)), this.wAng = ((0, AH.k)(this, ZH), (0, AH.k)(this, dH, 0)), this.uRotationCenter = ((0, AH.k)(this, aH), (0, AH.k)(this, sH, .5)), this.vRotationCenter = ((0, AH.k)(this, JH), (0, AH.k)(this, iH, .5)), this.wRotationCenter = ((0, AH.k)(this, pH), (0, AH.k)(this, yH, .5)), this.homogeneousRotationInUVTransform = ((0, AH.k)(this, HB), (0, AH.k)(this, BB, !1)), this.inspectableCustomProperties = ((0, AH.k)(this, LB), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new SH.d, this._isBlocking = !0, this.name = BH || "", this.url = BH;
            let PH = !1,
              TH = null,
              UH = !0;
            "object" === typeof rH && null !== rH ? (tH = rH.noMipmap ?? !1, hH = rH.invertY ?? !MH.c, zH = rH.samplingMode ?? HH.TRILINEAR_SAMPLINGMODE, CH = rH.onLoad ?? null, XH = rH.onError ?? null, GH = rH.buffer ?? null, YH = rH.deleteBuffer ?? !1, uH = rH.format, QH = rH.mimeType, WH = rH.loaderOptions, xH = rH.creationFlags, PH = rH.useSRGBBuffer ?? !1, TH = rH.internalTexture ?? null, UH = rH.gammaSpace ?? UH, vH = rH.forcedExtension ?? vH) : tH = !!rH, this._gammaSpace = UH, this._noMipmap = tH, this._invertY = void 0 === hH ? !MH.c : hH, this._initialSamplingMode = zH, this._buffer = GH, this._deleteBuffer = YH, this._mimeType = QH, this._loaderOptions = WH, this._creationFlags = xH, this._useSRGBBuffer = PH, this._forcedExtension = vH, void 0 !== uH && (this._format = uH);
            const VH = this.yN(),
              OH = this._getEngine();
            if (!OH) return;
            OH.onBeforeTextureInitObservable.notifyObservers(this);
            const bH = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), CH && CH(), !this.isBlocking && VH && VH.resetCachedMaterial()
              },
              kH = (BH, LH) => {
                this._loadingError = !0, this._errorObject = {
                  message: BH,
                  exception: LH
                }, XH && XH(BH, LH), HH.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !TH) return this._delayedOnLoad = bH, void(this._delayedOnError = kH);
            if (this._texture = TH ?? this._getFromCache(this.url, tH, zH, this._invertY, PH, this.isCube), this._texture)
              if (this._texture.isReady) EH.d.SetImmediate((() => bH()));
              else {
                const HH = this._texture.onLoadedObservable.add(bH);
                this._texture.onErrorObservable.add((BH => {
                  kH(BH.message, BH.exception), this._texture?.onLoadedObservable.remove(HH)
                }))
              }
            else if (VH && VH.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = bH, this._delayedOnError = kH;
            else {
              try {
                this._texture = OH.createTexture(this.url, tH, this._invertY, VH, zH, bH, kH, this._buffer, void 0, this._format, this._forcedExtension, QH, WH, xH, PH)
              } catch (mH) {
                throw kH("error loading", mH), mH
              }
              YH && (this._buffer = null)
            }
          }
          updateURL(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              LH = arguments.length > 2 ? arguments[2] : void 0,
              AH = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.yN().markAllMaterialsAsDirty(1, (HH => HH.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = HH), this.url = HH, this._buffer = BH, this._forcedExtension = AH, this.delayLoadState = 4;
            const rH = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              rH ? rH() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), LH && LH()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const HH = this.yN();
            if (!HH) return;
            let BH = this.url;
            !BH && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (BH = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(BH, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? EH.d.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = HH.Iu().createTexture(BH, this._noMipmap, this._invertY, HH, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(HH, BH, LH, AH) {
            HH *= this._cachedUScale, BH *= this._cachedVScale, HH -= this.uRotationCenter * this._cachedUScale, BH -= this.vRotationCenter * this._cachedVScale, LH -= this.wRotationCenter, hH.o.TransformCoordinatesFromFloatsToRef(HH, BH, LH, this._rowGenerationMatrix, AH), AH.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, AH.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, AH.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * HH === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * HH, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = hH.e.Zero(), this._rowGenerationMatrix = new hH.e, this._t0 = hH.o.Zero(), this._t1 = hH.o.Zero(), this._t2 = hH.o.Zero()), hH.e.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (hH.e.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, hH.l.Matrix[0]), hH.e.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, hH.l.Matrix[1]), hH.e.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, hH.l.Matrix[2]), hH.e.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, hH.l.Matrix[3]), hH.l.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(hH.l.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(hH.l.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(hH.l.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.grH(this._t0), this._t2.grH(this._t0), hH.e.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const BH = this.yN();
            if (!BH) return this._cachedTextureMatrix;
            const LH = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && LH !== this._cachedIdentity3x2 && BH.markAllMaterialsAsDirty(1, (HH => HH.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const BH = this.yN();
            if (!BH) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== HH.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === BH.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = hH.e.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = hH.e.Zero());
            const LH = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case HH.PLANAR_MODE:
                hH.e.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case HH.PROJECTION_MODE: {
                hH.e.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const HH = BH.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = HH.updateFlag, HH.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                hH.e.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return LH && BH.markAllMaterialsAsDirty(1, (HH => HH.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const BH = {
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
            return xH.c.Clone((() => new HH(this._texture ? this._texture.url : null, this.yN(), BH)), this)
          }
          serialize() {
            const BH = this.name;
            HH.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const LH = super.serialize(HH._SerializeInternalTextureUniqueId);
            if (!LH) return null;
            if (HH.SerializeBuffers || HH.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) LH.base64String = this._buffer, LH.name = LH.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const HH = this.mimeType || "image/png";
              LH.base64String = `data:${HH};base64,${(0,YH.f)(this._buffer)}`
            } else(HH.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (LH.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? QH(this) : WH(this));
            return LH.invertY = this._invertY, LH.samplingMode = this.samplingMode, LH._creationFlags = this._creationFlags, LH._useSRGBBuffer = this._useSRGBBuffer, HH._SerializeInternalTextureUniqueId && (LH.internalTextureUniqueId = this._texture?.uniqueId), LH.internalTextureLabel = this._texture?.label, LH.noMipmap = this._noMipmap, this.name = BH, LH
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(BH, LH, AH) {
            if (BH.customType) {
              const HH = XH.c.Instantiate(BH.customType).Parse(BH, LH, AH);
              return BH.samplingMode && HH.updateSamplingMode && HH._samplingMode && HH._samplingMode !== BH.samplingMode && HH.updateSamplingMode(BH.samplingMode), HH
            }
            if (BH.isCube && !BH.isRenderTarget) return HH._CubeTextureParser(BH, LH, AH);
            const rH = void 0 !== BH.internalTextureUniqueId;
            if (!BH.name && !BH.isRenderTarget && !rH) return null;
            let SH;
            if (rH) {
              const HH = LH.Iu().getLoadedTexturesCache();
              for (const LH of HH)
                if (LH.uniqueId === BH.internalTextureUniqueId) {
                  SH = LH;
                  break
                }
            }
            const hH = HH => {
              if (HH && HH._texture && (HH._texture._cachedWrapU = null, HH._texture._cachedWrapV = null, HH._texture._cachedWrapR = null), BH.samplingMode) {
                const LH = BH.samplingMode;
                HH && HH.samplingMode !== LH && HH.updateSamplingMode(LH)
              }
              if (HH && BH.animations)
                for (let LH = 0; LH < BH.animations.length; LH++) {
                  const AH = BH.animations[LH],
                    rH = (0, zH.b)("BABYLON.Animation");
                  rH && HH.animations.push(rH.Parse(AH))
                }
              HH && HH._texture && (rH && !SH && HH._texture._setUniqueId(BH.internalTextureUniqueId), HH._texture.label = BH.internalTextureLabel)
            };
            return xH.c.Parse((() => {
              let rH = !0;
              if (BH.noMipmap && (rH = !1), BH.mirrorPlane) {
                const AH = HH._CreateMirror(BH.name, BH.renderTargetSize, LH, rH);
                return AH._waitingRenderList = BH.renderList, AH.mirrorPlane = GH.d.FromArray(BH.mirrorPlane), hH(AH), AH
              }
              if (BH.isRenderTarget && !BH.base64String) {
                let AH = null;
                if (BH.isCube) {
                  if (LH.reflectionProbes)
                    for (let HH = 0; HH < LH.reflectionProbes.length; HH++) {
                      const AH = LH.reflectionProbes[HH];
                      if (AH.name === BH.name) return AH.cubeTexture
                    }
                } else AH = HH._CreateRenderTargetTexture(BH.name, BH.renderTargetSize, LH, rH, BH._creationFlags ?? 0), AH._waitingRenderList = BH.renderList;
                return hH(AH), AH
              }
              if (BH.isVideo) {
                const SH = HH._CreateVideoTexture(AH + (BH.url || BH.name), AH + (BH.src || BH.url), LH, rH, BH.invertY, BH.samplingMode, BH.settings || {});
                return hH(SH), SH
              } {
                let tH;
                if ("string" === typeof BH.base64String && BH.base64String && !SH) {
                  const AH = {
                      buffer: BH.base64String,
                      noMipmap: !rH,
                      invertY: BH.invertY,
                      samplingMode: BH.samplingMode,
                      useSRGBBuffer: BH._useSRGBBuffer ?? !1,
                      creationFlags: BH._creationFlags ?? 0,
                      onLoad: () => {
                        hH(tH)
                      }
                    },
                    SH = BH.base64String,
                    zH = SH.startsWith("data:") ? SH.substring(5) : SH;
                  tH = HH.CreateFromBase64String("", zH, LH, AH), tH.name = BH.name
                } else {
                  let zH;
                  zH = BH.name && (BH.name.indexOf("://") > 0 || BH.name.startsWith("data:")) ? BH.name : AH + BH.name, BH.url && (BH.url.startsWith("data:") || HH.UseSerializedUrlIfAny) && (zH = BH.url);
                  const CH = {
                    noMipmap: !rH,
                    invertY: BH.invertY,
                    samplingMode: BH.samplingMode,
                    useSRGBBuffer: BH._useSRGBBuffer ?? !1,
                    creationFlags: BH._creationFlags ?? 0,
                    onLoad: () => {
                      hH(tH)
                    },
                    internalTexture: SH
                  };
                  tH = new HH(zH, LH, CH)
                }
                return tH
              }
            }), BH, LH)
          }
          static CreateFromBase64String(BH, LH, AH, rH, SH) {
            let hH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : HH.TRILINEAR_SAMPLINGMODE;
            return new HH("data:" + LH, AH, rH, SH, hH, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, BH, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(BH, LH, AH) {
            let rH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              SH = arguments.length > 4 ? arguments[4] : void 0,
              hH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              tH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : HH.TRILINEAR_SAMPLINGMODE,
              zH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              CH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              EH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              XH = arguments.length > 10 ? arguments[10] : void 0,
              GH = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== BH.substring(0, 5) && (BH = "data:" + BH), new HH(BH, AH, SH, hH, tH, zH, CH, LH, rH, EH, void 0, void 0, XH, GH)
          }
        }, (() => {
          const SH = "function" === typeof Symbol && Symbol.metadata ? Object.create(IH[Symbol.metadata] ?? null) : void 0;
          BH = [(0, rH.H)()], LH = [(0, rH.H)()], uH = [(0, rH.H)()], vH = [(0, rH.H)()], PH = [(0, rH.H)()], TH = [(0, rH.H)()], UH = [(0, rH.H)()], VH = [(0, rH.H)()], OH = [(0, rH.H)()], bH = [(0, rH.H)()], kH = [(0, rH.H)()], mH = [(0, rH.H)()], oH = [(0, rH.H)()], (0, AH.g)(HH, null, oH, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: HH => "isBlocking" in HH,
              get: HH => HH.isBlocking
            },
            metadata: SH
          }, null, fH), (0, AH.g)(null, null, BH, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: HH => "url" in HH,
              get: HH => HH.url,
              set: (HH, BH) => {
                HH.url = BH
              }
            },
            metadata: SH
          }, lH, KH), (0, AH.g)(null, null, LH, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: HH => "uOffset" in HH,
              get: HH => HH.uOffset,
              set: (HH, BH) => {
                HH.uOffset = BH
              }
            },
            metadata: SH
          }, cH, eH), (0, AH.g)(null, null, uH, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: HH => "vOffset" in HH,
              get: HH => HH.vOffset,
              set: (HH, BH) => {
                HH.vOffset = BH
              }
            },
            metadata: SH
          }, qH, gH), (0, AH.g)(null, null, vH, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: HH => "uScale" in HH,
              get: HH => HH.uScale,
              set: (HH, BH) => {
                HH.uScale = BH
              }
            },
            metadata: SH
          }, NH, RH), (0, AH.g)(null, null, PH, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: HH => "vScale" in HH,
              get: HH => HH.vScale,
              set: (HH, BH) => {
                HH.vScale = BH
              }
            },
            metadata: SH
          }, jH, nH), (0, AH.g)(null, null, TH, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: HH => "uAng" in HH,
              get: HH => HH.uAng,
              set: (HH, BH) => {
                HH.uAng = BH
              }
            },
            metadata: SH
          }, FH, DH), (0, AH.g)(null, null, UH, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: HH => "vAng" in HH,
              get: HH => HH.vAng,
              set: (HH, BH) => {
                HH.vAng = BH
              }
            },
            metadata: SH
          }, wH, ZH), (0, AH.g)(null, null, VH, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: HH => "wAng" in HH,
              get: HH => HH.wAng,
              set: (HH, BH) => {
                HH.wAng = BH
              }
            },
            metadata: SH
          }, dH, aH), (0, AH.g)(null, null, OH, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: HH => "uRotationCenter" in HH,
              get: HH => HH.uRotationCenter,
              set: (HH, BH) => {
                HH.uRotationCenter = BH
              }
            },
            metadata: SH
          }, sH, JH), (0, AH.g)(null, null, bH, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: HH => "vRotationCenter" in HH,
              get: HH => HH.vRotationCenter,
              set: (HH, BH) => {
                HH.vRotationCenter = BH
              }
            },
            metadata: SH
          }, iH, pH), (0, AH.g)(null, null, kH, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: HH => "wRotationCenter" in HH,
              get: HH => HH.wRotationCenter,
              set: (HH, BH) => {
                HH.wRotationCenter = BH
              }
            },
            metadata: SH
          }, yH, HB), (0, AH.g)(null, null, mH, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: HH => "homogeneousRotationInUVTransform" in HH,
              get: HH => HH.homogeneousRotationInUVTransform,
              set: (HH, BH) => {
                HH.homogeneousRotationInUVTransform = BH
              }
            },
            metadata: SH
          }, BB, LB), SH && Object.defineProperty(HH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SH
          })
        })(), HH.SerializeBuffers = !0, HH.ForceSerializeBuffers = !1, HH.OnTextureLoadErrorObservable = new SH.d, HH._SerializeInternalTextureUniqueId = !1, HH._CubeTextureParser = (HH, BH, LH) => {
          throw (0, CH.i)("CubeTexture")
        }, HH._CreateMirror = (HH, BH, LH, AH) => {
          throw (0, CH.i)("MirrorTexture")
        }, HH._CreateRenderTargetTexture = (HH, BH, LH, AH, rH) => {
          throw (0, CH.i)("RenderTargetTexture")
        }, HH.NEAREST_SAMPLINGMODE = 1, HH.NEAREST_NEAREST_MIPLINEAR = 8, HH.BILINEAR_SAMPLINGMODE = 2, HH.LINEAR_LINEAR_MIPNEAREST = 11, HH.TRILINEAR_SAMPLINGMODE = 3, HH.LINEAR_LINEAR_MIPLINEAR = 3, HH.NEAREST_NEAREST_MIPNEAREST = 4, HH.NEAREST_LINEAR_MIPNEAREST = 5, HH.NEAREST_LINEAR_MIPLINEAR = 6, HH.NEAREST_LINEAR = 7, HH.NEAREST_NEAREST = 1, HH.LINEAR_NEAREST_MIPNEAREST = 9, HH.LINEAR_NEAREST_MIPLINEAR = 10, HH.LINEAR_LINEAR = 2, HH.LINEAR_NEAREST = 12, HH.EXPLICIT_MODE = 0, HH.SPHERICAL_MODE = 1, HH.PLANAR_MODE = 2, HH.CUBIC_MODE = 3, HH.PROJECTION_MODE = 4, HH.SKYBOX_MODE = 5, HH.INVCUBIC_MODE = 6, HH.EQUIRECTANGULAR_MODE = 7, HH.FIXED_EQUIRECTANGULAR_MODE = 8, HH.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, HH.CLAMP_ADDRESSMODE = 0, HH.WRAP_ADDRESSMODE = 1, HH.MIRROR_ADDRESSMODE = 2, HH.UseSerializedUrlIfAny = !1, HH
      })(),
      PH = !1;

    function TH() {
      PH || (PH = !0, (0, zH.f)("BABYLON.Texture", vH), xH.c._TextureParser = vH.Parse)
    }
  },
  41312: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH
    });
    class AH {
      constructor(HH, BH) {
        this.width = HH, this.height = BH
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let HH = 0 | this.width;
        return HH = 397 * HH ^ this.height, HH
      }
      Tm(HH) {
        this.width = HH.width, this.height = HH.height
      }
      SBH(HH, BH) {
        return this.width = HH, this.height = BH, this
      }
      set(HH, BH) {
        return this.SBH(HH, BH)
      }
      multiplyByFloats(HH, BH) {
        return new AH(this.width * HH, this.height * BH)
      }
      clone() {
        return new AH(this.width, this.height)
      }
      equals(HH) {
        return !!HH && (this.width === HH.width && this.height === HH.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new AH(0, 0)
      }
      add(HH) {
        return new AH(this.width + HH.width, this.height + HH.height)
      }
      subtract(HH) {
        return new AH(this.width - HH.width, this.height - HH.height)
      }
      scale(HH) {
        return new AH(this.width * HH, this.height * HH)
      }
      static Lerp(HH, BH, LH) {
        const rH = HH.width + (BH.width - HH.width) * LH,
          SH = HH.height + (BH.height - HH.height) * LH;
        return new AH(rH, SH)
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);