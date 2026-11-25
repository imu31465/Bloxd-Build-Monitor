export const id = 281;
export const ids = [281];
export const modules = {
  41520: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => OM
    });
    let OM = !1
  },
  41091: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => hM
    });
    var OM = iM(41099),
      SM = iM(41105),
      jM = iM(38068),
      aM = iM(38040),
      PM = iM(38064),
      nM = iM(38885),
      QM = iM(41115);
    class zM {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(MM) {
        this._wrapU = MM
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(MM) {
        this._wrapV = MM
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(MM) {
        this._texture && (this._texture.isCube = MM)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(MM) {
        this._texture && (this._texture.is3D = MM)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(MM) {
        this._texture && (this._texture.is2DArray = MM)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(MM) {
        return void 0 !== MM?.shareDepth
      }
      constructor(MM) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = QM.d.Zero(), this._cachedBaseSize = QM.d.Zero(), this._initialSamplingMode = 2, this._texture = zM._IsRenderTargetWrapper(MM) ? MM.texture : MM, this._texture && (this._engine = this._texture.ph(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(MM, this._texture, this._texture.generateMipMaps && rM)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var LM, mM = iM(41121),
      HM = iM(40990);
    let hM = (() => {
      var MM;
      let rM, iM, QM, LM, HM, hM, JM, dM, yM, lM, EM, UM, GM, CM, eM, bM, wM, tM, gM, uM, RM, pM, WM, sM, DM, kM = zM,
        ZM = [],
        oM = [],
        fM = [],
        YM = [],
        NM = [],
        AM = [],
        xM = [],
        vM = [],
        FM = [],
        BM = [],
        XM = [],
        IM = [],
        KM = [],
        qM = [],
        TM = [],
        VM = [],
        cM = [],
        Mr = [],
        rr = [],
        ir = [],
        Or = [],
        Sr = [],
        jr = [],
        ar = [],
        Pr = [],
        nr = [],
        Qr = [],
        zr = [],
        Lr = [],
        mr = [],
        Hr = [];
      return MM = class extends kM {
        set hasAlpha(MM) {
          this._hasAlpha = MM
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(MM) {
          this._getAlphaFromRGB !== MM && (this._getAlphaFromRGB = MM, this._scene && this._scene.markAllMaterialsAsDirty(1, (MM => MM.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(MM) {
          this._coordinatesIndex !== MM && (this._coordinatesIndex = MM, this._scene && this._scene.markAllMaterialsAsDirty(1, (MM => MM.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(MM) {
          this._coordinatesMode !== MM && (this._coordinatesMode = MM, this._scene && this._scene.markAllMaterialsAsDirty(1, (MM => MM.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(MM) {
          this._wrapU = MM
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(MM) {
          this._wrapV = MM
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(MM) {
          this._texture ? this._texture.isCube = MM : this._isCube = MM
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(MM) {
          this._texture && (this._texture.is3D = MM)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(MM) {
          this._texture && (this._texture.is2DArray = MM)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(MM) {
          if (this._texture) {
            if (this._texture._gammaSpace === MM) return;
            this._texture._gammaSpace = MM
          } else {
            if (this._gammaSpace === MM) return;
            this._gammaSpace = MM
          }
          this.Hk()?.markAllMaterialsAsDirty(1, (MM => MM.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(MM) {
          MM !== this.isRGBD && (this._texture && (this._texture._isRGBD = MM), this.Hk()?.markAllMaterialsAsDirty(1, (MM => MM.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(MM) {
          this._texture && (this._texture._lodGenerationOffset = MM)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(MM) {
          this._texture && (this._texture._lodGenerationScale = MM)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(MM) {
          this._texture && (this._texture._linearSpecularLOD = MM)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(MM) {
          this._texture && (this._texture._irradianceTexture = MM)
        }
        get uid() {
          return this._uid || (this._uid = (0, nM.d)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(MM) {
          this._onDisposeObserver && this.Rk.remove(this._onDisposeObserver), this._onDisposeObserver = this.Rk.add(MM)
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
        constructor(rM) {
          let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, OM.m)(this, ZM), (0, OM.m)(this, oM, void 0)), this.name = ((0, OM.m)(this, fM), (0, OM.m)(this, YM, void 0)), this.displayName = ((0, OM.m)(this, NM), (0, OM.m)(this, AM, void 0)), this.metadata = ((0, OM.m)(this, xM), (0, OM.m)(this, vM, null)), this._internalMetadata = (0, OM.m)(this, FM), this.reservedDataStore = null, this._hasAlpha = (0, OM.m)(this, BM, !1), this._getAlphaFromRGB = ((0, OM.m)(this, XM), (0, OM.m)(this, IM, !1)), this.level = ((0, OM.m)(this, KM), (0, OM.m)(this, qM, 1)), this._coordinatesIndex = ((0, OM.m)(this, TM), (0, OM.m)(this, VM, 0)), this.optimizeUVAllocation = ((0, OM.m)(this, cM), (0, OM.m)(this, Mr, !0)), this._coordinatesMode = ((0, OM.m)(this, rr), (0, OM.m)(this, ir, 0)), this.wrapR = ((0, OM.m)(this, Or), (0, OM.m)(this, Sr, 1)), this.anisotropicFilteringLevel = ((0, OM.m)(this, jr), (0, OM.m)(this, ar, MM.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, OM.m)(this, Pr), !1), this._gammaSpace = !0, this.invertZ = (0, OM.m)(this, nr, !1), this.lodLevelInAlpha = ((0, OM.m)(this, Qr), (0, OM.m)(this, zr, !1)), this._dominantDirection = ((0, OM.m)(this, Lr), null), this.isRenderTarget = (0, OM.m)(this, mr, !1), this._prefiltered = ((0, OM.m)(this, Hr), !1), this._forceSerialize = !1, this.animations = [], this.Rk = new jM.d, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, rM ? MM._IsScene(rM) ? this._scene = rM : this._engine = rM : this._scene = PM.c.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.ph()), this._texture = iM, this._uid = null
        }
        Hk() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return aM.d.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return aM.d.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(MM) {}
        get canRescale() {
          return !1
        }
        _getFromCache(MM, rM, iM, OM, SM, jM) {
          const aM = this._getEngine();
          if (!aM) return null;
          const PM = aM._getUseSRGBBuffer(!!SM, rM),
            nM = aM.getLoadedTexturesCache();
          for (let QM = 0; QM < nM.length; QM++) {
            const aM = nM[QM];
            if ((void 0 === SM || PM === aM._useSRGBBuffer) && (void 0 === OM || OM === aM.invertY) && aM.url === MM && aM.generateMipMaps === !rM && (!iM || iM === aM.samplingMode) && (void 0 === jM || jM === aM.isCube)) return aM.incrementReferences(), aM
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
          const MM = this.Hk();
          MM && MM.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            OM = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            aM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            PM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            nM = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const QM = this._getEngine();
          if (!QM) return null;
          const zM = this.getSize();
          let LM = zM.width,
            mM = zM.height;
          0 !== rM && (LM /= Math.pow(2, rM), mM /= Math.pow(2, rM), LM = Math.round(LM), mM = Math.round(mM)), PM = Math.min(LM, PM), nM = Math.min(mM, nM);
          try {
            return this._texture.isCube || this._texture.is2DArray ? QM._readTexturePixels(this._texture, PM, nM, MM, rM, iM, OM, SM, jM, aM) : QM._readTexturePixels(this._texture, PM, nM, -1, rM, iM, OM, SM, jM, aM)
          } catch (HM) {
            return null
          }
        }
        _readPixelsSync() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            OM = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const jM = this.getSize();
          let aM = jM.width,
            PM = jM.height;
          const nM = this._getEngine();
          if (!nM) return null;
          0 != rM && (aM /= Math.pow(2, rM), PM /= Math.pow(2, rM), aM = Math.round(aM), PM = Math.round(PM));
          try {
            return this._texture.isCube ? nM._readTexturePixelsSync(this._texture, aM, PM, MM, rM, iM, OM, SM) : nM._readTexturePixelsSync(this._texture, aM, PM, -1, rM, iM, OM, SM)
          } catch (QM) {
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
            const MM = this._scene.textures.indexOf(this);
            if (MM >= 0 && this._scene.textures.splice(MM, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const MM = this._parentContainer.textures.indexOf(this);
              MM > -1 && this._parentContainer.textures.splice(MM, 1), this._parentContainer = null
            }
          }
          this.Rk.notifyObservers(this), this.Rk.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !MM) return null;
          const rM = mM.b.Serialize(this);
          return mM.b.AppendSerializedAnimations(this, rM), rM
        }
        static WhenAllReady(MM, rM) {
          let iM = MM.length;
          if (0 !== iM)
            for (let OM = 0; OM < MM.length; OM++) {
              const SM = MM[OM];
              if (SM.isReady()) 0 === --iM && rM();
              else {
                const MM = SM.onLoadObservable;
                MM ? MM.addOnce((() => {
                  0 === --iM && rM()
                })) : 0 === --iM && rM()
              }
            } else rM()
        }
        static _IsScene(MM) {
          return "Scene" === MM.getClassName()
        }
      }, (() => {
        const jM = "function" === typeof Symbol && Symbol.metadata ? Object.create(kM[Symbol.metadata] ?? null) : void 0;
        rM = [(0, SM.L)()], iM = [(0, SM.L)()], QM = [(0, SM.L)()], LM = [(0, SM.L)()], HM = [(0, SM.L)("hasAlpha")], hM = [(0, SM.L)("getAlphaFromRGB")], JM = [(0, SM.L)()], dM = [(0, SM.L)("coordinatesIndex")], yM = [(0, SM.L)()], lM = [(0, SM.L)("coordinatesMode")], EM = [(0, SM.L)()], UM = [(0, SM.L)()], GM = [(0, SM.L)()], CM = [(0, SM.L)()], eM = [(0, SM.L)()], bM = [(0, SM.L)()], wM = [(0, SM.L)()], tM = [(0, SM.L)()], gM = [(0, SM.L)()], uM = [(0, SM.L)()], RM = [(0, SM.L)()], pM = [(0, SM.L)()], WM = [(0, SM.L)()], sM = [(0, SM.B)()], DM = [(0, SM.L)()], (0, OM.i)(MM, null, EM, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: MM => "wrapU" in MM,
            get: MM => MM.wrapU
          },
          metadata: jM
        }, null, ZM), (0, OM.i)(MM, null, UM, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: MM => "wrapV" in MM,
            get: MM => MM.wrapV
          },
          metadata: jM
        }, null, ZM), (0, OM.i)(MM, null, eM, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: MM => "isCube" in MM,
            get: MM => MM.isCube
          },
          metadata: jM
        }, null, ZM), (0, OM.i)(MM, null, bM, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: MM => "is3D" in MM,
            get: MM => MM.is3D
          },
          metadata: jM
        }, null, ZM), (0, OM.i)(MM, null, wM, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: MM => "is2DArray" in MM,
            get: MM => MM.is2DArray
          },
          metadata: jM
        }, null, ZM), (0, OM.i)(MM, null, tM, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: MM => "gammaSpace" in MM,
            get: MM => MM.gammaSpace
          },
          metadata: jM
        }, null, ZM), (0, OM.i)(MM, null, RM, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: MM => "lodGenerationOffset" in MM,
            get: MM => MM.lodGenerationOffset
          },
          metadata: jM
        }, null, ZM), (0, OM.i)(MM, null, pM, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: MM => "lodGenerationScale" in MM,
            get: MM => MM.lodGenerationScale
          },
          metadata: jM
        }, null, ZM), (0, OM.i)(MM, null, WM, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: MM => "linearSpecularLOD" in MM,
            get: MM => MM.linearSpecularLOD
          },
          metadata: jM
        }, null, ZM), (0, OM.i)(MM, null, sM, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "irradianceTexture" in MM,
            get: MM => MM.irradianceTexture
          },
          metadata: jM
        }, null, ZM), (0, OM.i)(null, null, rM, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: MM => "uniqueId" in MM,
            get: MM => MM.uniqueId,
            set: (MM, rM) => {
              MM.uniqueId = rM
            }
          },
          metadata: jM
        }, oM, fM), (0, OM.i)(null, null, iM, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: MM => "name" in MM,
            get: MM => MM.name,
            set: (MM, rM) => {
              MM.name = rM
            }
          },
          metadata: jM
        }, YM, NM), (0, OM.i)(null, null, QM, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: MM => "displayName" in MM,
            get: MM => MM.displayName,
            set: (MM, rM) => {
              MM.displayName = rM
            }
          },
          metadata: jM
        }, AM, xM), (0, OM.i)(null, null, LM, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: MM => "metadata" in MM,
            get: MM => MM.metadata,
            set: (MM, rM) => {
              MM.metadata = rM
            }
          },
          metadata: jM
        }, vM, FM), (0, OM.i)(null, null, HM, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: MM => "_hasAlpha" in MM,
            get: MM => MM._hasAlpha,
            set: (MM, rM) => {
              MM._hasAlpha = rM
            }
          },
          metadata: jM
        }, BM, XM), (0, OM.i)(null, null, hM, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: MM => "_getAlphaFromRGB" in MM,
            get: MM => MM._getAlphaFromRGB,
            set: (MM, rM) => {
              MM._getAlphaFromRGB = rM
            }
          },
          metadata: jM
        }, IM, KM), (0, OM.i)(null, null, JM, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: MM => "level" in MM,
            get: MM => MM.level,
            set: (MM, rM) => {
              MM.level = rM
            }
          },
          metadata: jM
        }, qM, TM), (0, OM.i)(null, null, dM, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: MM => "_coordinatesIndex" in MM,
            get: MM => MM._coordinatesIndex,
            set: (MM, rM) => {
              MM._coordinatesIndex = rM
            }
          },
          metadata: jM
        }, VM, cM), (0, OM.i)(null, null, yM, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: MM => "optimizeUVAllocation" in MM,
            get: MM => MM.optimizeUVAllocation,
            set: (MM, rM) => {
              MM.optimizeUVAllocation = rM
            }
          },
          metadata: jM
        }, Mr, rr), (0, OM.i)(null, null, lM, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: MM => "_coordinatesMode" in MM,
            get: MM => MM._coordinatesMode,
            set: (MM, rM) => {
              MM._coordinatesMode = rM
            }
          },
          metadata: jM
        }, ir, Or), (0, OM.i)(null, null, GM, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: MM => "wrapR" in MM,
            get: MM => MM.wrapR,
            set: (MM, rM) => {
              MM.wrapR = rM
            }
          },
          metadata: jM
        }, Sr, jr), (0, OM.i)(null, null, CM, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: MM => "anisotropicFilteringLevel" in MM,
            get: MM => MM.anisotropicFilteringLevel,
            set: (MM, rM) => {
              MM.anisotropicFilteringLevel = rM
            }
          },
          metadata: jM
        }, ar, Pr), (0, OM.i)(null, null, gM, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: MM => "invertZ" in MM,
            get: MM => MM.invertZ,
            set: (MM, rM) => {
              MM.invertZ = rM
            }
          },
          metadata: jM
        }, nr, Qr), (0, OM.i)(null, null, uM, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: MM => "lodLevelInAlpha" in MM,
            get: MM => MM.lodLevelInAlpha,
            set: (MM, rM) => {
              MM.lodLevelInAlpha = rM
            }
          },
          metadata: jM
        }, zr, Lr), (0, OM.i)(null, null, DM, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: MM => "isRenderTarget" in MM,
            get: MM => MM.isRenderTarget,
            set: (MM, rM) => {
              MM.isRenderTarget = rM
            }
          },
          metadata: jM
        }, mr, Hr), jM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: jM
        })
      })(), MM.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, MM
    })();
    (LM = hM.prototype).forceSphericalPolynomialsRecompute ?? (LM.forceSphericalPolynomialsRecompute = (0, HM.j)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(hM.prototype, "sphericalPolynomial") || Object.defineProperty(hM.prototype, "sphericalPolynomial", (0, HM.g)("BaseTexture", "sphericalPolynomial"))
  },
  41560: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => GM,
      h: () => EM
    });
    var OM = iM(41099),
      SM = iM(41105),
      jM = iM(38068),
      aM = iM(38040),
      PM = iM(41091),
      nM = iM(38085),
      QM = iM(40990),
      zM = iM(41003),
      LM = iM(41210),
      mM = iM(38744),
      HM = iM(41160);

    function hM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const OM = rM.width,
        SM = rM.height;
      if (MM instanceof Float32Array) {
        let rM = MM.byteLength / MM.BYTES_PER_ELEMENT;
        const iM = new Uint8Array(rM);
        for (; --rM >= 0;) {
          let OM = MM[rM];
          OM < 0 ? OM = 0 : OM > 1 && (OM = 1), iM[rM] = 255 * OM
        }
        MM = iM
      }
      const jM = document.createElement("canvas");
      jM.width = OM, jM.height = SM;
      const aM = jM.getContext("2d");
      if (!aM) return null;
      const PM = aM.createImageData(OM, SM);
      if (PM.data.set(MM), aM.putImageData(PM, 0, 0), iM) {
        const MM = document.createElement("canvas");
        MM.width = OM, MM.height = SM;
        const rM = MM.getContext("2d");
        return rM ? (rM.translate(0, SM), rM.scale(1, -1), rM.drawImage(jM, 0, 0), MM.toDataURL("image/png")) : null
      }
      return jM.toDataURL("image/png")
    }

    function JM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const OM = MM.getInternalTexture();
      if (!OM) return null;
      const SM = MM._readPixelsSync(rM, iM);
      return SM ? hM(SM, MM.getSize(), OM.invertY) : null
    }
    async function dM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const OM = MM.getInternalTexture();
      if (!OM) return null;
      const SM = await MM.readPixels(rM, iM);
      return SM ? hM(SM, MM.getSize(), OM.invertY) : null
    }
    var yM = iM(41520),
      lM = iM(41121);
    let EM = (() => {
        var MM;
        let rM, iM, hM, EM, UM, GM, CM, eM, bM, wM, tM, gM, uM, RM = PM.c,
          pM = [],
          WM = [],
          sM = [],
          DM = [],
          kM = [],
          ZM = [],
          oM = [],
          fM = [],
          YM = [],
          NM = [],
          AM = [],
          xM = [],
          vM = [],
          FM = [],
          BM = [],
          XM = [],
          IM = [],
          KM = [],
          qM = [],
          TM = [],
          VM = [],
          cM = [],
          Mr = [],
          rr = [],
          ir = [];
        return MM = class extends RM {
          static _CreateVideoTexture(rM, iM, OM) {
            arguments.length > 5 && void 0 !== arguments[5] || MM.TRILINEAR_SAMPLINGMODE;
            throw (0, QM.n)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(MM) {
            this._isBlocking = MM
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(rM, iM, SM, aM) {
            let PM, nM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : MM.TRILINEAR_SAMPLINGMODE,
              QM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              LM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              mM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              HM = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              hM = arguments.length > 9 ? arguments[9] : void 0,
              JM = arguments.length > 10 ? arguments[10] : void 0,
              dM = arguments.length > 11 ? arguments[11] : void 0,
              lM = arguments.length > 12 ? arguments[12] : void 0,
              EM = arguments.length > 13 ? arguments[13] : void 0;
            super(iM), this.url = ((0, OM.m)(this, pM), (0, OM.m)(this, WM, null)), this.uOffset = ((0, OM.m)(this, sM), (0, OM.m)(this, DM, 0)), this.vOffset = ((0, OM.m)(this, kM), (0, OM.m)(this, ZM, 0)), this.uScale = ((0, OM.m)(this, oM), (0, OM.m)(this, fM, 1)), this.vScale = ((0, OM.m)(this, YM), (0, OM.m)(this, NM, 1)), this.uAng = ((0, OM.m)(this, AM), (0, OM.m)(this, xM, 0)), this.vAng = ((0, OM.m)(this, vM), (0, OM.m)(this, FM, 0)), this.wAng = ((0, OM.m)(this, BM), (0, OM.m)(this, XM, 0)), this.uRotationCenter = ((0, OM.m)(this, IM), (0, OM.m)(this, KM, .5)), this.vRotationCenter = ((0, OM.m)(this, qM), (0, OM.m)(this, TM, .5)), this.wRotationCenter = ((0, OM.m)(this, VM), (0, OM.m)(this, cM, .5)), this.homogeneousRotationInUVTransform = ((0, OM.m)(this, Mr), (0, OM.m)(this, rr, !1)), this.inspectableCustomProperties = ((0, OM.m)(this, ir), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new jM.d, this._isBlocking = !0, this.name = rM || "", this.url = rM;
            let UM = !1,
              GM = null,
              CM = !0;
            "object" === typeof SM && null !== SM ? (PM = SM.noMipmap ?? !1, aM = SM.invertY ?? !yM.c, nM = SM.samplingMode ?? MM.TRILINEAR_SAMPLINGMODE, QM = SM.onLoad ?? null, LM = SM.onError ?? null, mM = SM.buffer ?? null, HM = SM.deleteBuffer ?? !1, hM = SM.format, JM = SM.mimeType, dM = SM.loaderOptions, lM = SM.creationFlags, UM = SM.useSRGBBuffer ?? !1, GM = SM.internalTexture ?? null, CM = SM.gammaSpace ?? CM, EM = SM.forcedExtension ?? EM) : PM = !!SM, this._gammaSpace = CM, this._noMipmap = PM, this._invertY = void 0 === aM ? !yM.c : aM, this._initialSamplingMode = nM, this._buffer = mM, this._deleteBuffer = HM, this._mimeType = JM, this._loaderOptions = dM, this._creationFlags = lM, this._useSRGBBuffer = UM, this._forcedExtension = EM, void 0 !== hM && (this._format = hM);
            const eM = this.Hk(),
              bM = this._getEngine();
            if (!bM) return;
            bM.onBeforeTextureInitObservable.notifyObservers(this);
            const wM = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), QM && QM(), !this.isBlocking && eM && eM.resetCachedMaterial()
              },
              tM = (rM, iM) => {
                this._loadingError = !0, this._errorObject = {
                  message: rM,
                  exception: iM
                }, LM && LM(rM, iM), MM.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !GM) return this._delayedOnLoad = wM, void(this._delayedOnError = tM);
            if (this._texture = GM ?? this._getFromCache(this.url, PM, nM, this._invertY, UM, this.isCube), this._texture)
              if (this._texture.isReady) zM.c.SetImmediate((() => wM()));
              else {
                const MM = this._texture.onLoadedObservable.add(wM);
                this._texture.onErrorObservable.add((rM => {
                  tM(rM.message, rM.exception), this._texture?.onLoadedObservable.remove(MM)
                }))
              }
            else if (eM && eM.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = wM, this._delayedOnError = tM;
            else {
              try {
                this._texture = bM.createTexture(this.url, PM, this._invertY, eM, nM, wM, tM, this._buffer, void 0, this._format, this._forcedExtension, JM, dM, lM, UM)
              } catch (gM) {
                throw tM("error loading", gM), gM
              }
              HM && (this._buffer = null)
            }
          }
          updateURL(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              iM = arguments.length > 2 ? arguments[2] : void 0,
              OM = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.Hk().markAllMaterialsAsDirty(1, (MM => MM.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = MM), this.url = MM, this._buffer = rM, this._forcedExtension = OM, this.delayLoadState = 4;
            const SM = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              SM ? SM() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), iM && iM()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const MM = this.Hk();
            if (!MM) return;
            let rM = this.url;
            !rM && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (rM = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(rM, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? zM.c.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = MM.ph().createTexture(rM, this._noMipmap, this._invertY, MM, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(MM, rM, iM, OM) {
            MM *= this._cachedUScale, rM *= this._cachedVScale, MM -= this.uRotationCenter * this._cachedUScale, rM -= this.vRotationCenter * this._cachedVScale, iM -= this.wRotationCenter, aM.q.TransformCoordinatesFromFloatsToRef(MM, rM, iM, this._rowGenerationMatrix, OM), OM.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, OM.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, OM.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * MM === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * MM, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = aM.d.Zero(), this._rowGenerationMatrix = new aM.d, this._t0 = aM.q.Zero(), this._t1 = aM.q.Zero(), this._t2 = aM.q.Zero()), aM.d.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (aM.d.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, aM.l.Matrix[0]), aM.d.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, aM.l.Matrix[1]), aM.d.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, aM.l.Matrix[2]), aM.d.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, aM.l.Matrix[3]), aM.l.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(aM.l.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(aM.l.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(aM.l.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.kOM(this._t0), this._t2.kOM(this._t0), aM.d.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const rM = this.Hk();
            if (!rM) return this._cachedTextureMatrix;
            const iM = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && iM !== this._cachedIdentity3x2 && rM.markAllMaterialsAsDirty(1, (MM => MM.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const rM = this.Hk();
            if (!rM) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== MM.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === rM.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = aM.d.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = aM.d.Zero());
            const iM = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case MM.PLANAR_MODE:
                aM.d.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case MM.PROJECTION_MODE: {
                aM.d.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const MM = rM.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = MM.updateFlag, MM.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                aM.d.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return iM && rM.markAllMaterialsAsDirty(1, (MM => MM.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const rM = {
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
            return lM.b.Clone((() => new MM(this._texture ? this._texture.url : null, this.Hk(), rM)), this)
          }
          serialize() {
            const rM = this.name;
            MM.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const iM = super.serialize(MM._SerializeInternalTextureUniqueId);
            if (!iM) return null;
            if (MM.SerializeBuffers || MM.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) iM.base64String = this._buffer, iM.name = iM.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const MM = this.mimeType || "image/png";
              iM.base64String = `data:${MM};base64,${(0,HM.j)(this._buffer)}`
            } else(MM.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (iM.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? JM(this) : dM(this));
            return iM.invertY = this._invertY, iM.samplingMode = this.samplingMode, iM._creationFlags = this._creationFlags, iM._useSRGBBuffer = this._useSRGBBuffer, MM._SerializeInternalTextureUniqueId && (iM.internalTextureUniqueId = this._texture?.uniqueId), iM.internalTextureLabel = this._texture?.label, iM.noMipmap = this._noMipmap, this.name = rM, iM
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(rM, iM, OM) {
            if (rM.customType) {
              const MM = LM.d.Instantiate(rM.customType).Parse(rM, iM, OM);
              return rM.samplingMode && MM.updateSamplingMode && MM._samplingMode && MM._samplingMode !== rM.samplingMode && MM.updateSamplingMode(rM.samplingMode), MM
            }
            if (rM.isCube && !rM.isRenderTarget) return MM._CubeTextureParser(rM, iM, OM);
            const SM = void 0 !== rM.internalTextureUniqueId;
            if (!rM.name && !rM.isRenderTarget && !SM) return null;
            let jM;
            if (SM) {
              const MM = iM.ph().getLoadedTexturesCache();
              for (const iM of MM)
                if (iM.uniqueId === rM.internalTextureUniqueId) {
                  jM = iM;
                  break
                }
            }
            const aM = MM => {
              if (MM && MM._texture && (MM._texture._cachedWrapU = null, MM._texture._cachedWrapV = null, MM._texture._cachedWrapR = null), rM.samplingMode) {
                const iM = rM.samplingMode;
                MM && MM.samplingMode !== iM && MM.updateSamplingMode(iM)
              }
              if (MM && rM.animations)
                for (let iM = 0; iM < rM.animations.length; iM++) {
                  const OM = rM.animations[iM],
                    SM = (0, nM.b)("BABYLON.Animation");
                  SM && MM.animations.push(SM.Parse(OM))
                }
              MM && MM._texture && (SM && !jM && MM._texture._setUniqueId(rM.internalTextureUniqueId), MM._texture.label = rM.internalTextureLabel)
            };
            return lM.b.Parse((() => {
              let SM = !0;
              if (rM.noMipmap && (SM = !1), rM.mirrorPlane) {
                const OM = MM._CreateMirror(rM.name, rM.renderTargetSize, iM, SM);
                return OM._waitingRenderList = rM.renderList, OM.mirrorPlane = mM.d.FromArray(rM.mirrorPlane), aM(OM), OM
              }
              if (rM.isRenderTarget && !rM.base64String) {
                let OM = null;
                if (rM.isCube) {
                  if (iM.reflectionProbes)
                    for (let MM = 0; MM < iM.reflectionProbes.length; MM++) {
                      const OM = iM.reflectionProbes[MM];
                      if (OM.name === rM.name) return OM.cubeTexture
                    }
                } else OM = MM._CreateRenderTargetTexture(rM.name, rM.renderTargetSize, iM, SM, rM._creationFlags ?? 0), OM._waitingRenderList = rM.renderList;
                return aM(OM), OM
              }
              if (rM.isVideo) {
                const jM = MM._CreateVideoTexture(OM + (rM.url || rM.name), OM + (rM.src || rM.url), iM, SM, rM.invertY, rM.samplingMode, rM.settings || {});
                return aM(jM), jM
              } {
                let PM;
                if ("string" === typeof rM.base64String && rM.base64String && !jM) {
                  const OM = {
                      buffer: rM.base64String,
                      noMipmap: !SM,
                      invertY: rM.invertY,
                      samplingMode: rM.samplingMode,
                      useSRGBBuffer: rM._useSRGBBuffer ?? !1,
                      creationFlags: rM._creationFlags ?? 0,
                      onLoad: () => {
                        aM(PM)
                      }
                    },
                    jM = rM.base64String,
                    nM = jM.startsWith("data:") ? jM.substring(5) : jM;
                  PM = MM.CreateFromBase64String("", nM, iM, OM), PM.name = rM.name
                } else {
                  let nM;
                  nM = rM.name && (rM.name.indexOf("://") > 0 || rM.name.startsWith("data:")) ? rM.name : OM + rM.name, rM.url && (rM.url.startsWith("data:") || MM.UseSerializedUrlIfAny) && (nM = rM.url);
                  const QM = {
                    noMipmap: !SM,
                    invertY: rM.invertY,
                    samplingMode: rM.samplingMode,
                    useSRGBBuffer: rM._useSRGBBuffer ?? !1,
                    creationFlags: rM._creationFlags ?? 0,
                    onLoad: () => {
                      aM(PM)
                    },
                    internalTexture: jM
                  };
                  PM = new MM(nM, iM, QM)
                }
                return PM
              }
            }), rM, iM)
          }
          static CreateFromBase64String(rM, iM, OM, SM, jM) {
            let aM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : MM.TRILINEAR_SAMPLINGMODE;
            return new MM("data:" + iM, OM, SM, jM, aM, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, rM, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(rM, iM, OM) {
            let SM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              jM = arguments.length > 4 ? arguments[4] : void 0,
              aM = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              PM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : MM.TRILINEAR_SAMPLINGMODE,
              nM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              QM = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              zM = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              LM = arguments.length > 10 ? arguments[10] : void 0,
              mM = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== rM.substring(0, 5) && (rM = "data:" + rM), new MM(rM, OM, jM, aM, PM, nM, QM, iM, SM, zM, void 0, void 0, LM, mM)
          }
        }, (() => {
          const jM = "function" === typeof Symbol && Symbol.metadata ? Object.create(RM[Symbol.metadata] ?? null) : void 0;
          rM = [(0, SM.L)()], iM = [(0, SM.L)()], hM = [(0, SM.L)()], EM = [(0, SM.L)()], UM = [(0, SM.L)()], GM = [(0, SM.L)()], CM = [(0, SM.L)()], eM = [(0, SM.L)()], bM = [(0, SM.L)()], wM = [(0, SM.L)()], tM = [(0, SM.L)()], gM = [(0, SM.L)()], uM = [(0, SM.L)()], (0, OM.i)(MM, null, uM, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: MM => "isBlocking" in MM,
              get: MM => MM.isBlocking
            },
            metadata: jM
          }, null, pM), (0, OM.i)(null, null, rM, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: MM => "url" in MM,
              get: MM => MM.url,
              set: (MM, rM) => {
                MM.url = rM
              }
            },
            metadata: jM
          }, WM, sM), (0, OM.i)(null, null, iM, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: MM => "uOffset" in MM,
              get: MM => MM.uOffset,
              set: (MM, rM) => {
                MM.uOffset = rM
              }
            },
            metadata: jM
          }, DM, kM), (0, OM.i)(null, null, hM, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: MM => "vOffset" in MM,
              get: MM => MM.vOffset,
              set: (MM, rM) => {
                MM.vOffset = rM
              }
            },
            metadata: jM
          }, ZM, oM), (0, OM.i)(null, null, EM, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: MM => "uScale" in MM,
              get: MM => MM.uScale,
              set: (MM, rM) => {
                MM.uScale = rM
              }
            },
            metadata: jM
          }, fM, YM), (0, OM.i)(null, null, UM, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: MM => "vScale" in MM,
              get: MM => MM.vScale,
              set: (MM, rM) => {
                MM.vScale = rM
              }
            },
            metadata: jM
          }, NM, AM), (0, OM.i)(null, null, GM, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: MM => "uAng" in MM,
              get: MM => MM.uAng,
              set: (MM, rM) => {
                MM.uAng = rM
              }
            },
            metadata: jM
          }, xM, vM), (0, OM.i)(null, null, CM, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: MM => "vAng" in MM,
              get: MM => MM.vAng,
              set: (MM, rM) => {
                MM.vAng = rM
              }
            },
            metadata: jM
          }, FM, BM), (0, OM.i)(null, null, eM, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: MM => "wAng" in MM,
              get: MM => MM.wAng,
              set: (MM, rM) => {
                MM.wAng = rM
              }
            },
            metadata: jM
          }, XM, IM), (0, OM.i)(null, null, bM, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: MM => "uRotationCenter" in MM,
              get: MM => MM.uRotationCenter,
              set: (MM, rM) => {
                MM.uRotationCenter = rM
              }
            },
            metadata: jM
          }, KM, qM), (0, OM.i)(null, null, wM, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: MM => "vRotationCenter" in MM,
              get: MM => MM.vRotationCenter,
              set: (MM, rM) => {
                MM.vRotationCenter = rM
              }
            },
            metadata: jM
          }, TM, VM), (0, OM.i)(null, null, tM, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: MM => "wRotationCenter" in MM,
              get: MM => MM.wRotationCenter,
              set: (MM, rM) => {
                MM.wRotationCenter = rM
              }
            },
            metadata: jM
          }, cM, Mr), (0, OM.i)(null, null, gM, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: MM => "homogeneousRotationInUVTransform" in MM,
              get: MM => MM.homogeneousRotationInUVTransform,
              set: (MM, rM) => {
                MM.homogeneousRotationInUVTransform = rM
              }
            },
            metadata: jM
          }, rr, ir), jM && Object.defineProperty(MM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jM
          })
        })(), MM.SerializeBuffers = !0, MM.ForceSerializeBuffers = !1, MM.OnTextureLoadErrorObservable = new jM.d, MM._SerializeInternalTextureUniqueId = !1, MM._CubeTextureParser = (MM, rM, iM) => {
          throw (0, QM.n)("CubeTexture")
        }, MM._CreateMirror = (MM, rM, iM, OM) => {
          throw (0, QM.n)("MirrorTexture")
        }, MM._CreateRenderTargetTexture = (MM, rM, iM, OM, SM) => {
          throw (0, QM.n)("RenderTargetTexture")
        }, MM.NEAREST_SAMPLINGMODE = 1, MM.NEAREST_NEAREST_MIPLINEAR = 8, MM.BILINEAR_SAMPLINGMODE = 2, MM.LINEAR_LINEAR_MIPNEAREST = 11, MM.TRILINEAR_SAMPLINGMODE = 3, MM.LINEAR_LINEAR_MIPLINEAR = 3, MM.NEAREST_NEAREST_MIPNEAREST = 4, MM.NEAREST_LINEAR_MIPNEAREST = 5, MM.NEAREST_LINEAR_MIPLINEAR = 6, MM.NEAREST_LINEAR = 7, MM.NEAREST_NEAREST = 1, MM.LINEAR_NEAREST_MIPNEAREST = 9, MM.LINEAR_NEAREST_MIPLINEAR = 10, MM.LINEAR_LINEAR = 2, MM.LINEAR_NEAREST = 12, MM.EXPLICIT_MODE = 0, MM.SPHERICAL_MODE = 1, MM.PLANAR_MODE = 2, MM.CUBIC_MODE = 3, MM.PROJECTION_MODE = 4, MM.SKYBOX_MODE = 5, MM.INVCUBIC_MODE = 6, MM.EQUIRECTANGULAR_MODE = 7, MM.FIXED_EQUIRECTANGULAR_MODE = 8, MM.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, MM.CLAMP_ADDRESSMODE = 0, MM.WRAP_ADDRESSMODE = 1, MM.MIRROR_ADDRESSMODE = 2, MM.UseSerializedUrlIfAny = !1, MM
      })(),
      UM = !1;

    function GM() {
      UM || (UM = !0, (0, nM.e)("BABYLON.Texture", EM), lM.b._TextureParser = EM.Parse)
    }
  },
  41115: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => OM
    });
    class OM {
      constructor(MM, rM) {
        this.width = MM, this.height = rM
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let MM = 0 | this.width;
        return MM = 397 * MM ^ this.height, MM
      }
      jR(MM) {
        this.width = MM.width, this.height = MM.height
      }
      iMM(MM, rM) {
        return this.width = MM, this.height = rM, this
      }
      set(MM, rM) {
        return this.iMM(MM, rM)
      }
      multiplyByFloats(MM, rM) {
        return new OM(this.width * MM, this.height * rM)
      }
      clone() {
        return new OM(this.width, this.height)
      }
      equals(MM) {
        return !!MM && (this.width === MM.width && this.height === MM.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new OM(0, 0)
      }
      add(MM) {
        return new OM(this.width + MM.width, this.height + MM.height)
      }
      subtract(MM) {
        return new OM(this.width - MM.width, this.height - MM.height)
      }
      scale(MM) {
        return new OM(this.width * MM, this.height * MM)
      }
      static Lerp(MM, rM, iM) {
        const SM = MM.width + (rM.width - MM.width) * iM,
          jM = MM.height + (rM.height - MM.height) * iM;
        return new OM(SM, jM)
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);