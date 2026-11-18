export const id = 236;
export const ids = [236];
export const modules = {
  39193: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => FJ
    });
    let FJ = !1
  },
  38797: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => nJ
    });
    var FJ = ZJ(38800),
      UJ = ZJ(38806),
      eJ = ZJ(36200),
      XJ = ZJ(36174),
      AJ = ZJ(36192),
      qJ = ZJ(36865),
      jJ = ZJ(38815);
    class YJ {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(JJ) {
        this._wrapU = JJ
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(JJ) {
        this._wrapV = JJ
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(JJ) {
        this._texture && (this._texture.isCube = JJ)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(JJ) {
        this._texture && (this._texture.is3D = JJ)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(JJ) {
        this._texture && (this._texture.is2DArray = JJ)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(JJ) {
        return void 0 !== JJ?.shareDepth
      }
      constructor(JJ) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = jJ.e.Zero(), this._cachedBaseSize = jJ.e.Zero(), this._initialSamplingMode = 2, this._texture = YJ._IsRenderTargetWrapper(JJ) ? JJ.texture : JJ, this._texture && (this._engine = this._texture.gn(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(JJ, this._texture, this._texture.generateMipMaps && cJ)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var hJ, DJ = ZJ(38822),
      sJ = ZJ(38677);
    let nJ = (() => {
      var JJ;
      let cJ, ZJ, jJ, hJ, sJ, nJ, GJ, fJ, xJ, rJ, vJ, mJ, QJ, EJ, VJ, KJ, yJ, SJ, IJ, MJ, bJ, wJ, WJ, gJ, HJ, PJ = YJ,
        kJ = [],
        pJ = [],
        dJ = [],
        zJ = [],
        NJ = [],
        OJ = [],
        TJ = [],
        CJ = [],
        uJ = [],
        iJ = [],
        RJ = [],
        LJ = [],
        aJ = [],
        BJ = [],
        tJ = [],
        oJ = [],
        lJ = [],
        Jc = [],
        cc = [],
        Zc = [],
        Fc = [],
        Uc = [],
        ec = [],
        Xc = [],
        Ac = [],
        qc = [],
        jc = [],
        Yc = [],
        hc = [],
        Dc = [],
        sc = [];
      return JJ = class extends PJ {
        set hasAlpha(JJ) {
          this._hasAlpha = JJ
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(JJ) {
          this._getAlphaFromRGB !== JJ && (this._getAlphaFromRGB = JJ, this._scene && this._scene.markAllMaterialsAsDirty(1, (JJ => JJ.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(JJ) {
          this._coordinatesIndex !== JJ && (this._coordinatesIndex = JJ, this._scene && this._scene.markAllMaterialsAsDirty(1, (JJ => JJ.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(JJ) {
          this._coordinatesMode !== JJ && (this._coordinatesMode = JJ, this._scene && this._scene.markAllMaterialsAsDirty(1, (JJ => JJ.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(JJ) {
          this._wrapU = JJ
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(JJ) {
          this._wrapV = JJ
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(JJ) {
          this._texture ? this._texture.isCube = JJ : this._isCube = JJ
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(JJ) {
          this._texture && (this._texture.is3D = JJ)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(JJ) {
          this._texture && (this._texture.is2DArray = JJ)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(JJ) {
          if (this._texture) {
            if (this._texture._gammaSpace === JJ) return;
            this._texture._gammaSpace = JJ
          } else {
            if (this._gammaSpace === JJ) return;
            this._gammaSpace = JJ
          }
          this.Qy()?.markAllMaterialsAsDirty(1, (JJ => JJ.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(JJ) {
          JJ !== this.isRGBD && (this._texture && (this._texture._isRGBD = JJ), this.Qy()?.markAllMaterialsAsDirty(1, (JJ => JJ.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(JJ) {
          this._texture && (this._texture._lodGenerationOffset = JJ)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(JJ) {
          this._texture && (this._texture._lodGenerationScale = JJ)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(JJ) {
          this._texture && (this._texture._linearSpecularLOD = JJ)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(JJ) {
          this._texture && (this._texture._irradianceTexture = JJ)
        }
        get uid() {
          return this._uid || (this._uid = (0, qJ.d)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(JJ) {
          this._onDisposeObserver && this.Sy.remove(this._onDisposeObserver), this._onDisposeObserver = this.Sy.add(JJ)
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
        constructor(cJ) {
          let ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, FJ.e)(this, kJ), (0, FJ.e)(this, pJ, void 0)), this.name = ((0, FJ.e)(this, dJ), (0, FJ.e)(this, zJ, void 0)), this.displayName = ((0, FJ.e)(this, NJ), (0, FJ.e)(this, OJ, void 0)), this.metadata = ((0, FJ.e)(this, TJ), (0, FJ.e)(this, CJ, null)), this._internalMetadata = (0, FJ.e)(this, uJ), this.reservedDataStore = null, this._hasAlpha = (0, FJ.e)(this, iJ, !1), this._getAlphaFromRGB = ((0, FJ.e)(this, RJ), (0, FJ.e)(this, LJ, !1)), this.level = ((0, FJ.e)(this, aJ), (0, FJ.e)(this, BJ, 1)), this._coordinatesIndex = ((0, FJ.e)(this, tJ), (0, FJ.e)(this, oJ, 0)), this.optimizeUVAllocation = ((0, FJ.e)(this, lJ), (0, FJ.e)(this, Jc, !0)), this._coordinatesMode = ((0, FJ.e)(this, cc), (0, FJ.e)(this, Zc, 0)), this.wrapR = ((0, FJ.e)(this, Fc), (0, FJ.e)(this, Uc, 1)), this.anisotropicFilteringLevel = ((0, FJ.e)(this, ec), (0, FJ.e)(this, Xc, JJ.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, FJ.e)(this, Ac), !1), this._gammaSpace = !0, this.invertZ = (0, FJ.e)(this, qc, !1), this.lodLevelInAlpha = ((0, FJ.e)(this, jc), (0, FJ.e)(this, Yc, !1)), this._dominantDirection = ((0, FJ.e)(this, hc), null), this.isRenderTarget = (0, FJ.e)(this, Dc, !1), this._prefiltered = ((0, FJ.e)(this, sc), !1), this._forceSerialize = !1, this.animations = [], this.Sy = new eJ.c, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, cJ ? JJ._IsScene(cJ) ? this._scene = cJ : this._engine = cJ : this._scene = AJ.c.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.gn()), this._texture = ZJ, this._uid = null
        }
        Qy() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return XJ.b.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return XJ.b.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(JJ) {}
        get canRescale() {
          return !1
        }
        _getFromCache(JJ, cJ, ZJ, FJ, UJ, eJ) {
          const XJ = this._getEngine();
          if (!XJ) return null;
          const AJ = XJ._getUseSRGBBuffer(!!UJ, cJ),
            qJ = XJ.getLoadedTexturesCache();
          for (let jJ = 0; jJ < qJ.length; jJ++) {
            const XJ = qJ[jJ];
            if ((void 0 === UJ || AJ === XJ._useSRGBBuffer) && (void 0 === FJ || FJ === XJ.invertY) && XJ.url === JJ && XJ.generateMipMaps === !cJ && (!ZJ || ZJ === XJ.samplingMode) && (void 0 === eJ || eJ === XJ.isCube)) return XJ.incrementReferences(), XJ
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
          const JJ = this.Qy();
          JJ && JJ.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            FJ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            UJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            XJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            AJ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            qJ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const jJ = this._getEngine();
          if (!jJ) return null;
          const YJ = this.getSize();
          let hJ = YJ.width,
            DJ = YJ.height;
          0 !== cJ && (hJ /= Math.pow(2, cJ), DJ /= Math.pow(2, cJ), hJ = Math.round(hJ), DJ = Math.round(DJ)), AJ = Math.min(hJ, AJ), qJ = Math.min(DJ, qJ);
          try {
            return this._texture.isCube || this._texture.is2DArray ? jJ._readTexturePixels(this._texture, AJ, qJ, JJ, cJ, ZJ, FJ, UJ, eJ, XJ) : jJ._readTexturePixels(this._texture, AJ, qJ, -1, cJ, ZJ, FJ, UJ, eJ, XJ)
          } catch (sJ) {
            return null
          }
        }
        _readPixelsSync() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            FJ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            UJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const eJ = this.getSize();
          let XJ = eJ.width,
            AJ = eJ.height;
          const qJ = this._getEngine();
          if (!qJ) return null;
          0 != cJ && (XJ /= Math.pow(2, cJ), AJ /= Math.pow(2, cJ), XJ = Math.round(XJ), AJ = Math.round(AJ));
          try {
            return this._texture.isCube ? qJ._readTexturePixelsSync(this._texture, XJ, AJ, JJ, cJ, ZJ, FJ, UJ) : qJ._readTexturePixelsSync(this._texture, XJ, AJ, -1, cJ, ZJ, FJ, UJ)
          } catch (jJ) {
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
            const JJ = this._scene.textures.indexOf(this);
            if (JJ >= 0 && this._scene.textures.splice(JJ, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const JJ = this._parentContainer.textures.indexOf(this);
              JJ > -1 && this._parentContainer.textures.splice(JJ, 1), this._parentContainer = null
            }
          }
          this.Sy.notifyObservers(this), this.Sy.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !JJ) return null;
          const cJ = DJ.c.Serialize(this);
          return DJ.c.AppendSerializedAnimations(this, cJ), cJ
        }
        static WhenAllReady(JJ, cJ) {
          let ZJ = JJ.length;
          if (0 !== ZJ)
            for (let FJ = 0; FJ < JJ.length; FJ++) {
              const UJ = JJ[FJ];
              if (UJ.isReady()) 0 === --ZJ && cJ();
              else {
                const JJ = UJ.onLoadObservable;
                JJ ? JJ.addOnce((() => {
                  0 === --ZJ && cJ()
                })) : 0 === --ZJ && cJ()
              }
            } else cJ()
        }
        static _IsScene(JJ) {
          return "Scene" === JJ.getClassName()
        }
      }, (() => {
        const eJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(PJ[Symbol.metadata] ?? null) : void 0;
        cJ = [(0, UJ.F)()], ZJ = [(0, UJ.F)()], jJ = [(0, UJ.F)()], hJ = [(0, UJ.F)()], sJ = [(0, UJ.F)("hasAlpha")], nJ = [(0, UJ.F)("getAlphaFromRGB")], GJ = [(0, UJ.F)()], fJ = [(0, UJ.F)("coordinatesIndex")], xJ = [(0, UJ.F)()], rJ = [(0, UJ.F)("coordinatesMode")], vJ = [(0, UJ.F)()], mJ = [(0, UJ.F)()], QJ = [(0, UJ.F)()], EJ = [(0, UJ.F)()], VJ = [(0, UJ.F)()], KJ = [(0, UJ.F)()], yJ = [(0, UJ.F)()], SJ = [(0, UJ.F)()], IJ = [(0, UJ.F)()], MJ = [(0, UJ.F)()], bJ = [(0, UJ.F)()], wJ = [(0, UJ.F)()], WJ = [(0, UJ.F)()], gJ = [(0, UJ.A)()], HJ = [(0, UJ.F)()], (0, FJ.d)(JJ, null, vJ, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: JJ => "wrapU" in JJ,
            get: JJ => JJ.wrapU
          },
          metadata: eJ
        }, null, kJ), (0, FJ.d)(JJ, null, mJ, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: JJ => "wrapV" in JJ,
            get: JJ => JJ.wrapV
          },
          metadata: eJ
        }, null, kJ), (0, FJ.d)(JJ, null, VJ, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: JJ => "isCube" in JJ,
            get: JJ => JJ.isCube
          },
          metadata: eJ
        }, null, kJ), (0, FJ.d)(JJ, null, KJ, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: JJ => "is3D" in JJ,
            get: JJ => JJ.is3D
          },
          metadata: eJ
        }, null, kJ), (0, FJ.d)(JJ, null, yJ, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: JJ => "is2DArray" in JJ,
            get: JJ => JJ.is2DArray
          },
          metadata: eJ
        }, null, kJ), (0, FJ.d)(JJ, null, SJ, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: JJ => "gammaSpace" in JJ,
            get: JJ => JJ.gammaSpace
          },
          metadata: eJ
        }, null, kJ), (0, FJ.d)(JJ, null, bJ, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: JJ => "lodGenerationOffset" in JJ,
            get: JJ => JJ.lodGenerationOffset
          },
          metadata: eJ
        }, null, kJ), (0, FJ.d)(JJ, null, wJ, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: JJ => "lodGenerationScale" in JJ,
            get: JJ => JJ.lodGenerationScale
          },
          metadata: eJ
        }, null, kJ), (0, FJ.d)(JJ, null, WJ, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: JJ => "linearSpecularLOD" in JJ,
            get: JJ => JJ.linearSpecularLOD
          },
          metadata: eJ
        }, null, kJ), (0, FJ.d)(JJ, null, gJ, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "irradianceTexture" in JJ,
            get: JJ => JJ.irradianceTexture
          },
          metadata: eJ
        }, null, kJ), (0, FJ.d)(null, null, cJ, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: JJ => "uniqueId" in JJ,
            get: JJ => JJ.uniqueId,
            set: (JJ, cJ) => {
              JJ.uniqueId = cJ
            }
          },
          metadata: eJ
        }, pJ, dJ), (0, FJ.d)(null, null, ZJ, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: JJ => "name" in JJ,
            get: JJ => JJ.name,
            set: (JJ, cJ) => {
              JJ.name = cJ
            }
          },
          metadata: eJ
        }, zJ, NJ), (0, FJ.d)(null, null, jJ, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: JJ => "displayName" in JJ,
            get: JJ => JJ.displayName,
            set: (JJ, cJ) => {
              JJ.displayName = cJ
            }
          },
          metadata: eJ
        }, OJ, TJ), (0, FJ.d)(null, null, hJ, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: JJ => "metadata" in JJ,
            get: JJ => JJ.metadata,
            set: (JJ, cJ) => {
              JJ.metadata = cJ
            }
          },
          metadata: eJ
        }, CJ, uJ), (0, FJ.d)(null, null, sJ, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_hasAlpha" in JJ,
            get: JJ => JJ._hasAlpha,
            set: (JJ, cJ) => {
              JJ._hasAlpha = cJ
            }
          },
          metadata: eJ
        }, iJ, RJ), (0, FJ.d)(null, null, nJ, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_getAlphaFromRGB" in JJ,
            get: JJ => JJ._getAlphaFromRGB,
            set: (JJ, cJ) => {
              JJ._getAlphaFromRGB = cJ
            }
          },
          metadata: eJ
        }, LJ, aJ), (0, FJ.d)(null, null, GJ, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: JJ => "level" in JJ,
            get: JJ => JJ.level,
            set: (JJ, cJ) => {
              JJ.level = cJ
            }
          },
          metadata: eJ
        }, BJ, tJ), (0, FJ.d)(null, null, fJ, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_coordinatesIndex" in JJ,
            get: JJ => JJ._coordinatesIndex,
            set: (JJ, cJ) => {
              JJ._coordinatesIndex = cJ
            }
          },
          metadata: eJ
        }, oJ, lJ), (0, FJ.d)(null, null, xJ, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: JJ => "optimizeUVAllocation" in JJ,
            get: JJ => JJ.optimizeUVAllocation,
            set: (JJ, cJ) => {
              JJ.optimizeUVAllocation = cJ
            }
          },
          metadata: eJ
        }, Jc, cc), (0, FJ.d)(null, null, rJ, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_coordinatesMode" in JJ,
            get: JJ => JJ._coordinatesMode,
            set: (JJ, cJ) => {
              JJ._coordinatesMode = cJ
            }
          },
          metadata: eJ
        }, Zc, Fc), (0, FJ.d)(null, null, QJ, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: JJ => "wrapR" in JJ,
            get: JJ => JJ.wrapR,
            set: (JJ, cJ) => {
              JJ.wrapR = cJ
            }
          },
          metadata: eJ
        }, Uc, ec), (0, FJ.d)(null, null, EJ, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: JJ => "anisotropicFilteringLevel" in JJ,
            get: JJ => JJ.anisotropicFilteringLevel,
            set: (JJ, cJ) => {
              JJ.anisotropicFilteringLevel = cJ
            }
          },
          metadata: eJ
        }, Xc, Ac), (0, FJ.d)(null, null, IJ, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: JJ => "invertZ" in JJ,
            get: JJ => JJ.invertZ,
            set: (JJ, cJ) => {
              JJ.invertZ = cJ
            }
          },
          metadata: eJ
        }, qc, jc), (0, FJ.d)(null, null, MJ, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: JJ => "lodLevelInAlpha" in JJ,
            get: JJ => JJ.lodLevelInAlpha,
            set: (JJ, cJ) => {
              JJ.lodLevelInAlpha = cJ
            }
          },
          metadata: eJ
        }, Yc, hc), (0, FJ.d)(null, null, HJ, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: JJ => "isRenderTarget" in JJ,
            get: JJ => JJ.isRenderTarget,
            set: (JJ, cJ) => {
              JJ.isRenderTarget = cJ
            }
          },
          metadata: eJ
        }, Dc, sc), eJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: eJ
        })
      })(), JJ.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, JJ
    })();
    (hJ = nJ.prototype).forceSphericalPolynomialsRecompute ?? (hJ.forceSphericalPolynomialsRecompute = (0, sJ.l)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(nJ.prototype, "sphericalPolynomial") || Object.defineProperty(nJ.prototype, "sphericalPolynomial", (0, sJ.h)("BaseTexture", "sphericalPolynomial"))
  },
  39243: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => QJ,
      i: () => vJ
    });
    var FJ = ZJ(38800),
      UJ = ZJ(38806),
      eJ = ZJ(36200),
      XJ = ZJ(36174),
      AJ = ZJ(38797),
      qJ = ZJ(36216),
      jJ = ZJ(38677),
      YJ = ZJ(38689),
      hJ = ZJ(38884),
      DJ = ZJ(36744),
      sJ = ZJ(38856);

    function nJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const FJ = cJ.width,
        UJ = cJ.height;
      if (JJ instanceof Float32Array) {
        let cJ = JJ.byteLength / JJ.BYTES_PER_ELEMENT;
        const ZJ = new Uint8Array(cJ);
        for (; --cJ >= 0;) {
          let FJ = JJ[cJ];
          FJ < 0 ? FJ = 0 : FJ > 1 && (FJ = 1), ZJ[cJ] = 255 * FJ
        }
        JJ = ZJ
      }
      const eJ = document.createElement("canvas");
      eJ.width = FJ, eJ.height = UJ;
      const XJ = eJ.getContext("2d");
      if (!XJ) return null;
      const AJ = XJ.createImageData(FJ, UJ);
      if (AJ.data.set(JJ), XJ.putImageData(AJ, 0, 0), ZJ) {
        const JJ = document.createElement("canvas");
        JJ.width = FJ, JJ.height = UJ;
        const cJ = JJ.getContext("2d");
        return cJ ? (cJ.translate(0, UJ), cJ.scale(1, -1), cJ.drawImage(eJ, 0, 0), JJ.toDataURL("image/png")) : null
      }
      return eJ.toDataURL("image/png")
    }

    function GJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const FJ = JJ.getInternalTexture();
      if (!FJ) return null;
      const UJ = JJ._readPixelsSync(cJ, ZJ);
      return UJ ? nJ(UJ, JJ.getSize(), FJ.invertY) : null
    }
    async function fJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const FJ = JJ.getInternalTexture();
      if (!FJ) return null;
      const UJ = await JJ.readPixels(cJ, ZJ);
      return UJ ? nJ(UJ, JJ.getSize(), FJ.invertY) : null
    }
    var xJ = ZJ(39193),
      rJ = ZJ(38822);
    let vJ = (() => {
        var JJ;
        let cJ, ZJ, nJ, vJ, mJ, QJ, EJ, VJ, KJ, yJ, SJ, IJ, MJ, bJ = AJ.c,
          wJ = [],
          WJ = [],
          gJ = [],
          HJ = [],
          PJ = [],
          kJ = [],
          pJ = [],
          dJ = [],
          zJ = [],
          NJ = [],
          OJ = [],
          TJ = [],
          CJ = [],
          uJ = [],
          iJ = [],
          RJ = [],
          LJ = [],
          aJ = [],
          BJ = [],
          tJ = [],
          oJ = [],
          lJ = [],
          Jc = [],
          cc = [],
          Zc = [];
        return JJ = class extends bJ {
          static _CreateVideoTexture(cJ, ZJ, FJ) {
            arguments.length > 5 && void 0 !== arguments[5] || JJ.TRILINEAR_SAMPLINGMODE;
            throw (0, jJ.m)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(JJ) {
            this._isBlocking = JJ
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(cJ, ZJ, UJ, XJ) {
            let AJ, qJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : JJ.TRILINEAR_SAMPLINGMODE,
              jJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              hJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              DJ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              sJ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              nJ = arguments.length > 9 ? arguments[9] : void 0,
              GJ = arguments.length > 10 ? arguments[10] : void 0,
              fJ = arguments.length > 11 ? arguments[11] : void 0,
              rJ = arguments.length > 12 ? arguments[12] : void 0,
              vJ = arguments.length > 13 ? arguments[13] : void 0;
            super(ZJ), this.url = ((0, FJ.e)(this, wJ), (0, FJ.e)(this, WJ, null)), this.uOffset = ((0, FJ.e)(this, gJ), (0, FJ.e)(this, HJ, 0)), this.vOffset = ((0, FJ.e)(this, PJ), (0, FJ.e)(this, kJ, 0)), this.uScale = ((0, FJ.e)(this, pJ), (0, FJ.e)(this, dJ, 1)), this.vScale = ((0, FJ.e)(this, zJ), (0, FJ.e)(this, NJ, 1)), this.uAng = ((0, FJ.e)(this, OJ), (0, FJ.e)(this, TJ, 0)), this.vAng = ((0, FJ.e)(this, CJ), (0, FJ.e)(this, uJ, 0)), this.wAng = ((0, FJ.e)(this, iJ), (0, FJ.e)(this, RJ, 0)), this.uRotationCenter = ((0, FJ.e)(this, LJ), (0, FJ.e)(this, aJ, .5)), this.vRotationCenter = ((0, FJ.e)(this, BJ), (0, FJ.e)(this, tJ, .5)), this.wRotationCenter = ((0, FJ.e)(this, oJ), (0, FJ.e)(this, lJ, .5)), this.homogeneousRotationInUVTransform = ((0, FJ.e)(this, Jc), (0, FJ.e)(this, cc, !1)), this.inspectableCustomProperties = ((0, FJ.e)(this, Zc), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new eJ.c, this._isBlocking = !0, this.name = cJ || "", this.url = cJ;
            let mJ = !1,
              QJ = null,
              EJ = !0;
            "object" === typeof UJ && null !== UJ ? (AJ = UJ.noMipmap ?? !1, XJ = UJ.invertY ?? !xJ.d, qJ = UJ.samplingMode ?? JJ.TRILINEAR_SAMPLINGMODE, jJ = UJ.onLoad ?? null, hJ = UJ.onError ?? null, DJ = UJ.buffer ?? null, sJ = UJ.deleteBuffer ?? !1, nJ = UJ.format, GJ = UJ.mimeType, fJ = UJ.loaderOptions, rJ = UJ.creationFlags, mJ = UJ.useSRGBBuffer ?? !1, QJ = UJ.internalTexture ?? null, EJ = UJ.gammaSpace ?? EJ, vJ = UJ.forcedExtension ?? vJ) : AJ = !!UJ, this._gammaSpace = EJ, this._noMipmap = AJ, this._invertY = void 0 === XJ ? !xJ.d : XJ, this._initialSamplingMode = qJ, this._buffer = DJ, this._deleteBuffer = sJ, this._mimeType = GJ, this._loaderOptions = fJ, this._creationFlags = rJ, this._useSRGBBuffer = mJ, this._forcedExtension = vJ, void 0 !== nJ && (this._format = nJ);
            const VJ = this.Qy(),
              KJ = this._getEngine();
            if (!KJ) return;
            KJ.onBeforeTextureInitObservable.notifyObservers(this);
            const yJ = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), jJ && jJ(), !this.isBlocking && VJ && VJ.resetCachedMaterial()
              },
              SJ = (cJ, ZJ) => {
                this._loadingError = !0, this._errorObject = {
                  message: cJ,
                  exception: ZJ
                }, hJ && hJ(cJ, ZJ), JJ.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !QJ) return this._delayedOnLoad = yJ, void(this._delayedOnError = SJ);
            if (this._texture = QJ ?? this._getFromCache(this.url, AJ, qJ, this._invertY, mJ, this.isCube), this._texture)
              if (this._texture.isReady) YJ.d.SetImmediate((() => yJ()));
              else {
                const JJ = this._texture.onLoadedObservable.add(yJ);
                this._texture.onErrorObservable.add((cJ => {
                  SJ(cJ.message, cJ.exception), this._texture?.onLoadedObservable.remove(JJ)
                }))
              }
            else if (VJ && VJ.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = yJ, this._delayedOnError = SJ;
            else {
              try {
                this._texture = KJ.createTexture(this.url, AJ, this._invertY, VJ, qJ, yJ, SJ, this._buffer, void 0, this._format, this._forcedExtension, GJ, fJ, rJ, mJ)
              } catch (IJ) {
                throw SJ("error loading", IJ), IJ
              }
              sJ && (this._buffer = null)
            }
          }
          updateURL(JJ) {
            let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              ZJ = arguments.length > 2 ? arguments[2] : void 0,
              FJ = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.Qy().markAllMaterialsAsDirty(1, (JJ => JJ.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = JJ), this.url = JJ, this._buffer = cJ, this._forcedExtension = FJ, this.delayLoadState = 4;
            const UJ = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              UJ ? UJ() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), ZJ && ZJ()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const JJ = this.Qy();
            if (!JJ) return;
            let cJ = this.url;
            !cJ && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (cJ = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(cJ, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? YJ.d.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = JJ.gn().createTexture(cJ, this._noMipmap, this._invertY, JJ, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(JJ, cJ, ZJ, FJ) {
            JJ *= this._cachedUScale, cJ *= this._cachedVScale, JJ -= this.uRotationCenter * this._cachedUScale, cJ -= this.vRotationCenter * this._cachedVScale, ZJ -= this.wRotationCenter, XJ.j.TransformCoordinatesFromFloatsToRef(JJ, cJ, ZJ, this._rowGenerationMatrix, FJ), FJ.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, FJ.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, FJ.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * JJ === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * JJ, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = XJ.b.Zero(), this._rowGenerationMatrix = new XJ.b, this._t0 = XJ.j.Zero(), this._t1 = XJ.j.Zero(), this._t2 = XJ.j.Zero()), XJ.b.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (XJ.b.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, XJ.h.Matrix[0]), XJ.b.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, XJ.h.Matrix[1]), XJ.b.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, XJ.h.Matrix[2]), XJ.b.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, XJ.h.Matrix[3]), XJ.h.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(XJ.h.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(XJ.h.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(XJ.h.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.xFJ(this._t0), this._t2.xFJ(this._t0), XJ.b.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const cJ = this.Qy();
            if (!cJ) return this._cachedTextureMatrix;
            const ZJ = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && ZJ !== this._cachedIdentity3x2 && cJ.markAllMaterialsAsDirty(1, (JJ => JJ.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const cJ = this.Qy();
            if (!cJ) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== JJ.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === cJ.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = XJ.b.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = XJ.b.Zero());
            const ZJ = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case JJ.PLANAR_MODE:
                XJ.b.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case JJ.PROJECTION_MODE: {
                XJ.b.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const JJ = cJ.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = JJ.updateFlag, JJ.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                XJ.b.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return ZJ && cJ.markAllMaterialsAsDirty(1, (JJ => JJ.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const cJ = {
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
            return rJ.c.Clone((() => new JJ(this._texture ? this._texture.url : null, this.Qy(), cJ)), this)
          }
          serialize() {
            const cJ = this.name;
            JJ.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const ZJ = super.serialize(JJ._SerializeInternalTextureUniqueId);
            if (!ZJ) return null;
            if (JJ.SerializeBuffers || JJ.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) ZJ.base64String = this._buffer, ZJ.name = ZJ.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const JJ = this.mimeType || "image/png";
              ZJ.base64String = `data:${JJ};base64,${(0,sJ.k)(this._buffer)}`
            } else(JJ.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (ZJ.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? GJ(this) : fJ(this));
            return ZJ.invertY = this._invertY, ZJ.samplingMode = this.samplingMode, ZJ._creationFlags = this._creationFlags, ZJ._useSRGBBuffer = this._useSRGBBuffer, JJ._SerializeInternalTextureUniqueId && (ZJ.internalTextureUniqueId = this._texture?.uniqueId), ZJ.internalTextureLabel = this._texture?.label, ZJ.noMipmap = this._noMipmap, this.name = cJ, ZJ
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(cJ, ZJ, FJ) {
            if (cJ.customType) {
              const JJ = hJ.d.Instantiate(cJ.customType).Parse(cJ, ZJ, FJ);
              return cJ.samplingMode && JJ.updateSamplingMode && JJ._samplingMode && JJ._samplingMode !== cJ.samplingMode && JJ.updateSamplingMode(cJ.samplingMode), JJ
            }
            if (cJ.isCube && !cJ.isRenderTarget) return JJ._CubeTextureParser(cJ, ZJ, FJ);
            const UJ = void 0 !== cJ.internalTextureUniqueId;
            if (!cJ.name && !cJ.isRenderTarget && !UJ) return null;
            let eJ;
            if (UJ) {
              const JJ = ZJ.gn().getLoadedTexturesCache();
              for (const ZJ of JJ)
                if (ZJ.uniqueId === cJ.internalTextureUniqueId) {
                  eJ = ZJ;
                  break
                }
            }
            const XJ = JJ => {
              if (JJ && JJ._texture && (JJ._texture._cachedWrapU = null, JJ._texture._cachedWrapV = null, JJ._texture._cachedWrapR = null), cJ.samplingMode) {
                const ZJ = cJ.samplingMode;
                JJ && JJ.samplingMode !== ZJ && JJ.updateSamplingMode(ZJ)
              }
              if (JJ && cJ.animations)
                for (let ZJ = 0; ZJ < cJ.animations.length; ZJ++) {
                  const FJ = cJ.animations[ZJ],
                    UJ = (0, qJ.e)("BABYLON.Animation");
                  UJ && JJ.animations.push(UJ.Parse(FJ))
                }
              JJ && JJ._texture && (UJ && !eJ && JJ._texture._setUniqueId(cJ.internalTextureUniqueId), JJ._texture.label = cJ.internalTextureLabel)
            };
            return rJ.c.Parse((() => {
              let UJ = !0;
              if (cJ.noMipmap && (UJ = !1), cJ.mirrorPlane) {
                const FJ = JJ._CreateMirror(cJ.name, cJ.renderTargetSize, ZJ, UJ);
                return FJ._waitingRenderList = cJ.renderList, FJ.mirrorPlane = DJ.c.FromArray(cJ.mirrorPlane), XJ(FJ), FJ
              }
              if (cJ.isRenderTarget && !cJ.base64String) {
                let FJ = null;
                if (cJ.isCube) {
                  if (ZJ.reflectionProbes)
                    for (let JJ = 0; JJ < ZJ.reflectionProbes.length; JJ++) {
                      const FJ = ZJ.reflectionProbes[JJ];
                      if (FJ.name === cJ.name) return FJ.cubeTexture
                    }
                } else FJ = JJ._CreateRenderTargetTexture(cJ.name, cJ.renderTargetSize, ZJ, UJ, cJ._creationFlags ?? 0), FJ._waitingRenderList = cJ.renderList;
                return XJ(FJ), FJ
              }
              if (cJ.isVideo) {
                const eJ = JJ._CreateVideoTexture(FJ + (cJ.url || cJ.name), FJ + (cJ.src || cJ.url), ZJ, UJ, cJ.invertY, cJ.samplingMode, cJ.settings || {});
                return XJ(eJ), eJ
              } {
                let AJ;
                if ("string" === typeof cJ.base64String && cJ.base64String && !eJ) {
                  const FJ = {
                      buffer: cJ.base64String,
                      noMipmap: !UJ,
                      invertY: cJ.invertY,
                      samplingMode: cJ.samplingMode,
                      useSRGBBuffer: cJ._useSRGBBuffer ?? !1,
                      creationFlags: cJ._creationFlags ?? 0,
                      onLoad: () => {
                        XJ(AJ)
                      }
                    },
                    eJ = cJ.base64String,
                    qJ = eJ.startsWith("data:") ? eJ.substring(5) : eJ;
                  AJ = JJ.CreateFromBase64String("", qJ, ZJ, FJ), AJ.name = cJ.name
                } else {
                  let qJ;
                  qJ = cJ.name && (cJ.name.indexOf("://") > 0 || cJ.name.startsWith("data:")) ? cJ.name : FJ + cJ.name, cJ.url && (cJ.url.startsWith("data:") || JJ.UseSerializedUrlIfAny) && (qJ = cJ.url);
                  const jJ = {
                    noMipmap: !UJ,
                    invertY: cJ.invertY,
                    samplingMode: cJ.samplingMode,
                    useSRGBBuffer: cJ._useSRGBBuffer ?? !1,
                    creationFlags: cJ._creationFlags ?? 0,
                    onLoad: () => {
                      XJ(AJ)
                    },
                    internalTexture: eJ
                  };
                  AJ = new JJ(qJ, ZJ, jJ)
                }
                return AJ
              }
            }), cJ, ZJ)
          }
          static CreateFromBase64String(cJ, ZJ, FJ, UJ, eJ) {
            let XJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : JJ.TRILINEAR_SAMPLINGMODE;
            return new JJ("data:" + ZJ, FJ, UJ, eJ, XJ, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, cJ, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(cJ, ZJ, FJ) {
            let UJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              eJ = arguments.length > 4 ? arguments[4] : void 0,
              XJ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              AJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : JJ.TRILINEAR_SAMPLINGMODE,
              qJ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              jJ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              YJ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              hJ = arguments.length > 10 ? arguments[10] : void 0,
              DJ = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== cJ.substring(0, 5) && (cJ = "data:" + cJ), new JJ(cJ, FJ, eJ, XJ, AJ, qJ, jJ, ZJ, UJ, YJ, void 0, void 0, hJ, DJ)
          }
        }, (() => {
          const eJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(bJ[Symbol.metadata] ?? null) : void 0;
          cJ = [(0, UJ.F)()], ZJ = [(0, UJ.F)()], nJ = [(0, UJ.F)()], vJ = [(0, UJ.F)()], mJ = [(0, UJ.F)()], QJ = [(0, UJ.F)()], EJ = [(0, UJ.F)()], VJ = [(0, UJ.F)()], KJ = [(0, UJ.F)()], yJ = [(0, UJ.F)()], SJ = [(0, UJ.F)()], IJ = [(0, UJ.F)()], MJ = [(0, UJ.F)()], (0, FJ.d)(JJ, null, MJ, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: JJ => "isBlocking" in JJ,
              get: JJ => JJ.isBlocking
            },
            metadata: eJ
          }, null, wJ), (0, FJ.d)(null, null, cJ, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: JJ => "url" in JJ,
              get: JJ => JJ.url,
              set: (JJ, cJ) => {
                JJ.url = cJ
              }
            },
            metadata: eJ
          }, WJ, gJ), (0, FJ.d)(null, null, ZJ, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: JJ => "uOffset" in JJ,
              get: JJ => JJ.uOffset,
              set: (JJ, cJ) => {
                JJ.uOffset = cJ
              }
            },
            metadata: eJ
          }, HJ, PJ), (0, FJ.d)(null, null, nJ, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: JJ => "vOffset" in JJ,
              get: JJ => JJ.vOffset,
              set: (JJ, cJ) => {
                JJ.vOffset = cJ
              }
            },
            metadata: eJ
          }, kJ, pJ), (0, FJ.d)(null, null, vJ, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: JJ => "uScale" in JJ,
              get: JJ => JJ.uScale,
              set: (JJ, cJ) => {
                JJ.uScale = cJ
              }
            },
            metadata: eJ
          }, dJ, zJ), (0, FJ.d)(null, null, mJ, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: JJ => "vScale" in JJ,
              get: JJ => JJ.vScale,
              set: (JJ, cJ) => {
                JJ.vScale = cJ
              }
            },
            metadata: eJ
          }, NJ, OJ), (0, FJ.d)(null, null, QJ, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: JJ => "uAng" in JJ,
              get: JJ => JJ.uAng,
              set: (JJ, cJ) => {
                JJ.uAng = cJ
              }
            },
            metadata: eJ
          }, TJ, CJ), (0, FJ.d)(null, null, EJ, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: JJ => "vAng" in JJ,
              get: JJ => JJ.vAng,
              set: (JJ, cJ) => {
                JJ.vAng = cJ
              }
            },
            metadata: eJ
          }, uJ, iJ), (0, FJ.d)(null, null, VJ, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: JJ => "wAng" in JJ,
              get: JJ => JJ.wAng,
              set: (JJ, cJ) => {
                JJ.wAng = cJ
              }
            },
            metadata: eJ
          }, RJ, LJ), (0, FJ.d)(null, null, KJ, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: JJ => "uRotationCenter" in JJ,
              get: JJ => JJ.uRotationCenter,
              set: (JJ, cJ) => {
                JJ.uRotationCenter = cJ
              }
            },
            metadata: eJ
          }, aJ, BJ), (0, FJ.d)(null, null, yJ, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: JJ => "vRotationCenter" in JJ,
              get: JJ => JJ.vRotationCenter,
              set: (JJ, cJ) => {
                JJ.vRotationCenter = cJ
              }
            },
            metadata: eJ
          }, tJ, oJ), (0, FJ.d)(null, null, SJ, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: JJ => "wRotationCenter" in JJ,
              get: JJ => JJ.wRotationCenter,
              set: (JJ, cJ) => {
                JJ.wRotationCenter = cJ
              }
            },
            metadata: eJ
          }, lJ, Jc), (0, FJ.d)(null, null, IJ, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: JJ => "homogeneousRotationInUVTransform" in JJ,
              get: JJ => JJ.homogeneousRotationInUVTransform,
              set: (JJ, cJ) => {
                JJ.homogeneousRotationInUVTransform = cJ
              }
            },
            metadata: eJ
          }, cc, Zc), eJ && Object.defineProperty(JJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: eJ
          })
        })(), JJ.SerializeBuffers = !0, JJ.ForceSerializeBuffers = !1, JJ.OnTextureLoadErrorObservable = new eJ.c, JJ._SerializeInternalTextureUniqueId = !1, JJ._CubeTextureParser = (JJ, cJ, ZJ) => {
          throw (0, jJ.m)("CubeTexture")
        }, JJ._CreateMirror = (JJ, cJ, ZJ, FJ) => {
          throw (0, jJ.m)("MirrorTexture")
        }, JJ._CreateRenderTargetTexture = (JJ, cJ, ZJ, FJ, UJ) => {
          throw (0, jJ.m)("RenderTargetTexture")
        }, JJ.NEAREST_SAMPLINGMODE = 1, JJ.NEAREST_NEAREST_MIPLINEAR = 8, JJ.BILINEAR_SAMPLINGMODE = 2, JJ.LINEAR_LINEAR_MIPNEAREST = 11, JJ.TRILINEAR_SAMPLINGMODE = 3, JJ.LINEAR_LINEAR_MIPLINEAR = 3, JJ.NEAREST_NEAREST_MIPNEAREST = 4, JJ.NEAREST_LINEAR_MIPNEAREST = 5, JJ.NEAREST_LINEAR_MIPLINEAR = 6, JJ.NEAREST_LINEAR = 7, JJ.NEAREST_NEAREST = 1, JJ.LINEAR_NEAREST_MIPNEAREST = 9, JJ.LINEAR_NEAREST_MIPLINEAR = 10, JJ.LINEAR_LINEAR = 2, JJ.LINEAR_NEAREST = 12, JJ.EXPLICIT_MODE = 0, JJ.SPHERICAL_MODE = 1, JJ.PLANAR_MODE = 2, JJ.CUBIC_MODE = 3, JJ.PROJECTION_MODE = 4, JJ.SKYBOX_MODE = 5, JJ.INVCUBIC_MODE = 6, JJ.EQUIRECTANGULAR_MODE = 7, JJ.FIXED_EQUIRECTANGULAR_MODE = 8, JJ.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, JJ.CLAMP_ADDRESSMODE = 0, JJ.WRAP_ADDRESSMODE = 1, JJ.MIRROR_ADDRESSMODE = 2, JJ.UseSerializedUrlIfAny = !1, JJ
      })(),
      mJ = !1;

    function QJ() {
      mJ || (mJ = !0, (0, qJ.f)("BABYLON.Texture", vJ), rJ.c._TextureParser = vJ.Parse)
    }
  },
  38815: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => FJ
    });
    class FJ {
      constructor(JJ, cJ) {
        this.width = JJ, this.height = cJ
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let JJ = 0 | this.width;
        return JJ = 397 * JJ ^ this.height, JJ
      }
      rZJ(JJ) {
        this.width = JJ.width, this.height = JJ.height
      }
      K9(JJ, cJ) {
        return this.width = JJ, this.height = cJ, this
      }
      set(JJ, cJ) {
        return this.K9(JJ, cJ)
      }
      multiplyByFloats(JJ, cJ) {
        return new FJ(this.width * JJ, this.height * cJ)
      }
      clone() {
        return new FJ(this.width, this.height)
      }
      equals(JJ) {
        return !!JJ && (this.width === JJ.width && this.height === JJ.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new FJ(0, 0)
      }
      add(JJ) {
        return new FJ(this.width + JJ.width, this.height + JJ.height)
      }
      subtract(JJ) {
        return new FJ(this.width - JJ.width, this.height - JJ.height)
      }
      scale(JJ) {
        return new FJ(this.width * JJ, this.height * JJ)
      }
      static Lerp(JJ, cJ, ZJ) {
        const UJ = JJ.width + (cJ.width - JJ.width) * ZJ,
          eJ = JJ.height + (cJ.height - JJ.height) * ZJ;
        return new FJ(UJ, eJ)
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);