export const id = 246;
export const ids = [246];
export const modules = {
  39560: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID
    });
    let ID = !1
  },
  39148: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => tD
    });
    var ID = cD(39154),
      pD = cD(39156),
      iD = cD(36473),
      fD = cD(36446),
      bD = cD(36464),
      QD = cD(37290),
      wD = cD(39166);
    class SD {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(DD) {
        this._wrapU = DD
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(DD) {
        this._wrapV = DD
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(DD) {
        this._texture && (this._texture.isCube = DD)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(DD) {
        this._texture && (this._texture.is3D = DD)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(DD) {
        this._texture && (this._texture.is2DArray = DD)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(DD) {
        return void 0 !== DD?.shareDepth
      }
      constructor(DD) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = wD.c.Zero(), this._cachedBaseSize = wD.c.Zero(), this._initialSamplingMode = 2, this._texture = SD._IsRenderTargetWrapper(DD) ? DD.texture : DD, this._texture && (this._engine = this._texture.DZ(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(DD, this._texture, this._texture.generateMipMaps && CD)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var BD, yD = cD(39174),
      MD = cD(39027);
    let tD = (() => {
      var DD;
      let CD, cD, wD, BD, MD, tD, ZD, oD, vD, ND, gD, XD, mD, nD, OD, PD, HD, UD, xD, qD, JD, KD, aD, VD, zD, jD = SD,
        lD = [],
        LD = [],
        TD = [],
        GD = [],
        RD = [],
        kD = [],
        dD = [],
        YD = [],
        WD = [],
        sD = [],
        ED = [],
        eD = [],
        uD = [],
        hD = [],
        rD = [],
        AD = [],
        FD = [],
        DC = [],
        CC = [],
        cC = [],
        IC = [],
        pC = [],
        iC = [],
        fC = [],
        bC = [],
        QC = [],
        wC = [],
        SC = [],
        BC = [],
        yC = [],
        MC = [];
      return DD = class extends jD {
        set hasAlpha(DD) {
          this._hasAlpha = DD
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(DD) {
          this._getAlphaFromRGB !== DD && (this._getAlphaFromRGB = DD, this._scene && this._scene.markAllMaterialsAsDirty(1, (DD => DD.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(DD) {
          this._coordinatesIndex !== DD && (this._coordinatesIndex = DD, this._scene && this._scene.markAllMaterialsAsDirty(1, (DD => DD.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(DD) {
          this._coordinatesMode !== DD && (this._coordinatesMode = DD, this._scene && this._scene.markAllMaterialsAsDirty(1, (DD => DD.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(DD) {
          this._wrapU = DD
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(DD) {
          this._wrapV = DD
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(DD) {
          this._texture ? this._texture.isCube = DD : this._isCube = DD
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(DD) {
          this._texture && (this._texture.is3D = DD)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(DD) {
          this._texture && (this._texture.is2DArray = DD)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(DD) {
          if (this._texture) {
            if (this._texture._gammaSpace === DD) return;
            this._texture._gammaSpace = DD
          } else {
            if (this._gammaSpace === DD) return;
            this._gammaSpace = DD
          }
          this.hq()?.markAllMaterialsAsDirty(1, (DD => DD.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(DD) {
          DD !== this.isRGBD && (this._texture && (this._texture._isRGBD = DD), this.hq()?.markAllMaterialsAsDirty(1, (DD => DD.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(DD) {
          this._texture && (this._texture._lodGenerationOffset = DD)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(DD) {
          this._texture && (this._texture._lodGenerationScale = DD)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(DD) {
          this._texture && (this._texture._linearSpecularLOD = DD)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(DD) {
          this._texture && (this._texture._irradianceTexture = DD)
        }
        get uid() {
          return this._uid || (this._uid = (0, QD.d)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(DD) {
          this._onDisposeObserver && this.Aq.remove(this._onDisposeObserver), this._onDisposeObserver = this.Aq.add(DD)
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
        constructor(CD) {
          let cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, ID.m)(this, lD), (0, ID.m)(this, LD, void 0)), this.name = ((0, ID.m)(this, TD), (0, ID.m)(this, GD, void 0)), this.displayName = ((0, ID.m)(this, RD), (0, ID.m)(this, kD, void 0)), this.metadata = ((0, ID.m)(this, dD), (0, ID.m)(this, YD, null)), this._internalMetadata = (0, ID.m)(this, WD), this.reservedDataStore = null, this._hasAlpha = (0, ID.m)(this, sD, !1), this._getAlphaFromRGB = ((0, ID.m)(this, ED), (0, ID.m)(this, eD, !1)), this.level = ((0, ID.m)(this, uD), (0, ID.m)(this, hD, 1)), this._coordinatesIndex = ((0, ID.m)(this, rD), (0, ID.m)(this, AD, 0)), this.optimizeUVAllocation = ((0, ID.m)(this, FD), (0, ID.m)(this, DC, !0)), this._coordinatesMode = ((0, ID.m)(this, CC), (0, ID.m)(this, cC, 0)), this.wrapR = ((0, ID.m)(this, IC), (0, ID.m)(this, pC, 1)), this.anisotropicFilteringLevel = ((0, ID.m)(this, iC), (0, ID.m)(this, fC, DD.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, ID.m)(this, bC), !1), this._gammaSpace = !0, this.invertZ = (0, ID.m)(this, QC, !1), this.lodLevelInAlpha = ((0, ID.m)(this, wC), (0, ID.m)(this, SC, !1)), this._dominantDirection = ((0, ID.m)(this, BC), null), this.isRenderTarget = (0, ID.m)(this, yC, !1), this._prefiltered = ((0, ID.m)(this, MC), !1), this._forceSerialize = !1, this.animations = [], this.Aq = new iD.c, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, CD ? DD._IsScene(CD) ? this._scene = CD : this._engine = CD : this._scene = bD.b.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.DZ()), this._texture = cD, this._uid = null
        }
        hq() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return fD.d.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return fD.d.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(DD) {}
        get canRescale() {
          return !1
        }
        _getFromCache(DD, CD, cD, ID, pD, iD) {
          const fD = this._getEngine();
          if (!fD) return null;
          const bD = fD._getUseSRGBBuffer(!!pD, CD),
            QD = fD.getLoadedTexturesCache();
          for (let wD = 0; wD < QD.length; wD++) {
            const fD = QD[wD];
            if ((void 0 === pD || bD === fD._useSRGBBuffer) && (void 0 === ID || ID === fD.invertY) && fD.url === DD && fD.generateMipMaps === !CD && (!cD || cD === fD.samplingMode) && (void 0 === iD || iD === fD.isCube)) return fD.incrementReferences(), fD
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
          const DD = this.hq();
          DD && DD.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            ID = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            pD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            fD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            bD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            QD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const wD = this._getEngine();
          if (!wD) return null;
          const SD = this.getSize();
          let BD = SD.width,
            yD = SD.height;
          0 !== CD && (BD /= Math.pow(2, CD), yD /= Math.pow(2, CD), BD = Math.round(BD), yD = Math.round(yD)), bD = Math.min(BD, bD), QD = Math.min(yD, QD);
          try {
            return this._texture.isCube || this._texture.is2DArray ? wD._readTexturePixels(this._texture, bD, QD, DD, CD, cD, ID, pD, iD, fD) : wD._readTexturePixels(this._texture, bD, QD, -1, CD, cD, ID, pD, iD, fD)
          } catch (MD) {
            return null
          }
        }
        _readPixelsSync() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            ID = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            pD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const iD = this.getSize();
          let fD = iD.width,
            bD = iD.height;
          const QD = this._getEngine();
          if (!QD) return null;
          0 != CD && (fD /= Math.pow(2, CD), bD /= Math.pow(2, CD), fD = Math.round(fD), bD = Math.round(bD));
          try {
            return this._texture.isCube ? QD._readTexturePixelsSync(this._texture, fD, bD, DD, CD, cD, ID, pD) : QD._readTexturePixelsSync(this._texture, fD, bD, -1, CD, cD, ID, pD)
          } catch (wD) {
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
            const DD = this._scene.textures.indexOf(this);
            if (DD >= 0 && this._scene.textures.splice(DD, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const DD = this._parentContainer.textures.indexOf(this);
              DD > -1 && this._parentContainer.textures.splice(DD, 1), this._parentContainer = null
            }
          }
          this.Aq.notifyObservers(this), this.Aq.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !DD) return null;
          const CD = yD.d.Serialize(this);
          return yD.d.AppendSerializedAnimations(this, CD), CD
        }
        static WhenAllReady(DD, CD) {
          let cD = DD.length;
          if (0 !== cD)
            for (let ID = 0; ID < DD.length; ID++) {
              const pD = DD[ID];
              if (pD.isReady()) 0 === --cD && CD();
              else {
                const DD = pD.onLoadObservable;
                DD ? DD.addOnce((() => {
                  0 === --cD && CD()
                })) : 0 === --cD && CD()
              }
            } else CD()
        }
        static _IsScene(DD) {
          return "Scene" === DD.getClassName()
        }
      }, (() => {
        const iD = "function" === typeof Symbol && Symbol.metadata ? Object.create(jD[Symbol.metadata] ?? null) : void 0;
        CD = [(0, pD.G)()], cD = [(0, pD.G)()], wD = [(0, pD.G)()], BD = [(0, pD.G)()], MD = [(0, pD.G)("hasAlpha")], tD = [(0, pD.G)("getAlphaFromRGB")], ZD = [(0, pD.G)()], oD = [(0, pD.G)("coordinatesIndex")], vD = [(0, pD.G)()], ND = [(0, pD.G)("coordinatesMode")], gD = [(0, pD.G)()], XD = [(0, pD.G)()], mD = [(0, pD.G)()], nD = [(0, pD.G)()], OD = [(0, pD.G)()], PD = [(0, pD.G)()], HD = [(0, pD.G)()], UD = [(0, pD.G)()], xD = [(0, pD.G)()], qD = [(0, pD.G)()], JD = [(0, pD.G)()], KD = [(0, pD.G)()], aD = [(0, pD.G)()], VD = [(0, pD.w)()], zD = [(0, pD.G)()], (0, ID.k)(DD, null, gD, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: DD => "wrapU" in DD,
            get: DD => DD.wrapU
          },
          metadata: iD
        }, null, lD), (0, ID.k)(DD, null, XD, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: DD => "wrapV" in DD,
            get: DD => DD.wrapV
          },
          metadata: iD
        }, null, lD), (0, ID.k)(DD, null, OD, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: DD => "isCube" in DD,
            get: DD => DD.isCube
          },
          metadata: iD
        }, null, lD), (0, ID.k)(DD, null, PD, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: DD => "is3D" in DD,
            get: DD => DD.is3D
          },
          metadata: iD
        }, null, lD), (0, ID.k)(DD, null, HD, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: DD => "is2DArray" in DD,
            get: DD => DD.is2DArray
          },
          metadata: iD
        }, null, lD), (0, ID.k)(DD, null, UD, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: DD => "gammaSpace" in DD,
            get: DD => DD.gammaSpace
          },
          metadata: iD
        }, null, lD), (0, ID.k)(DD, null, JD, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: DD => "lodGenerationOffset" in DD,
            get: DD => DD.lodGenerationOffset
          },
          metadata: iD
        }, null, lD), (0, ID.k)(DD, null, KD, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: DD => "lodGenerationScale" in DD,
            get: DD => DD.lodGenerationScale
          },
          metadata: iD
        }, null, lD), (0, ID.k)(DD, null, aD, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: DD => "linearSpecularLOD" in DD,
            get: DD => DD.linearSpecularLOD
          },
          metadata: iD
        }, null, lD), (0, ID.k)(DD, null, VD, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "irradianceTexture" in DD,
            get: DD => DD.irradianceTexture
          },
          metadata: iD
        }, null, lD), (0, ID.k)(null, null, CD, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: DD => "uniqueId" in DD,
            get: DD => DD.uniqueId,
            set: (DD, CD) => {
              DD.uniqueId = CD
            }
          },
          metadata: iD
        }, LD, TD), (0, ID.k)(null, null, cD, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: DD => "name" in DD,
            get: DD => DD.name,
            set: (DD, CD) => {
              DD.name = CD
            }
          },
          metadata: iD
        }, GD, RD), (0, ID.k)(null, null, wD, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: DD => "displayName" in DD,
            get: DD => DD.displayName,
            set: (DD, CD) => {
              DD.displayName = CD
            }
          },
          metadata: iD
        }, kD, dD), (0, ID.k)(null, null, BD, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: DD => "metadata" in DD,
            get: DD => DD.metadata,
            set: (DD, CD) => {
              DD.metadata = CD
            }
          },
          metadata: iD
        }, YD, WD), (0, ID.k)(null, null, MD, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: DD => "_hasAlpha" in DD,
            get: DD => DD._hasAlpha,
            set: (DD, CD) => {
              DD._hasAlpha = CD
            }
          },
          metadata: iD
        }, sD, ED), (0, ID.k)(null, null, tD, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: DD => "_getAlphaFromRGB" in DD,
            get: DD => DD._getAlphaFromRGB,
            set: (DD, CD) => {
              DD._getAlphaFromRGB = CD
            }
          },
          metadata: iD
        }, eD, uD), (0, ID.k)(null, null, ZD, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: DD => "level" in DD,
            get: DD => DD.level,
            set: (DD, CD) => {
              DD.level = CD
            }
          },
          metadata: iD
        }, hD, rD), (0, ID.k)(null, null, oD, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: DD => "_coordinatesIndex" in DD,
            get: DD => DD._coordinatesIndex,
            set: (DD, CD) => {
              DD._coordinatesIndex = CD
            }
          },
          metadata: iD
        }, AD, FD), (0, ID.k)(null, null, vD, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: DD => "optimizeUVAllocation" in DD,
            get: DD => DD.optimizeUVAllocation,
            set: (DD, CD) => {
              DD.optimizeUVAllocation = CD
            }
          },
          metadata: iD
        }, DC, CC), (0, ID.k)(null, null, ND, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: DD => "_coordinatesMode" in DD,
            get: DD => DD._coordinatesMode,
            set: (DD, CD) => {
              DD._coordinatesMode = CD
            }
          },
          metadata: iD
        }, cC, IC), (0, ID.k)(null, null, mD, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: DD => "wrapR" in DD,
            get: DD => DD.wrapR,
            set: (DD, CD) => {
              DD.wrapR = CD
            }
          },
          metadata: iD
        }, pC, iC), (0, ID.k)(null, null, nD, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: DD => "anisotropicFilteringLevel" in DD,
            get: DD => DD.anisotropicFilteringLevel,
            set: (DD, CD) => {
              DD.anisotropicFilteringLevel = CD
            }
          },
          metadata: iD
        }, fC, bC), (0, ID.k)(null, null, xD, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: DD => "invertZ" in DD,
            get: DD => DD.invertZ,
            set: (DD, CD) => {
              DD.invertZ = CD
            }
          },
          metadata: iD
        }, QC, wC), (0, ID.k)(null, null, qD, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: DD => "lodLevelInAlpha" in DD,
            get: DD => DD.lodLevelInAlpha,
            set: (DD, CD) => {
              DD.lodLevelInAlpha = CD
            }
          },
          metadata: iD
        }, SC, BC), (0, ID.k)(null, null, zD, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: DD => "isRenderTarget" in DD,
            get: DD => DD.isRenderTarget,
            set: (DD, CD) => {
              DD.isRenderTarget = CD
            }
          },
          metadata: iD
        }, yC, MC), iD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: iD
        })
      })(), DD.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, DD
    })();
    (BD = tD.prototype).forceSphericalPolynomialsRecompute ?? (BD.forceSphericalPolynomialsRecompute = (0, MD.j)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(tD.prototype, "sphericalPolynomial") || Object.defineProperty(tD.prototype, "sphericalPolynomial", (0, MD.g)("BaseTexture", "sphericalPolynomial"))
  },
  39595: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => mD,
      c: () => gD
    });
    var ID = cD(39154),
      pD = cD(39156),
      iD = cD(36473),
      fD = cD(36446),
      bD = cD(39148),
      QD = cD(36488),
      wD = cD(39027),
      SD = cD(39039),
      BD = cD(39250),
      yD = cD(37167),
      MD = cD(39208);

    function tD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const ID = CD.width,
        pD = CD.height;
      if (DD instanceof Float32Array) {
        let CD = DD.byteLength / DD.BYTES_PER_ELEMENT;
        const cD = new Uint8Array(CD);
        for (; --CD >= 0;) {
          let ID = DD[CD];
          ID < 0 ? ID = 0 : ID > 1 && (ID = 1), cD[CD] = 255 * ID
        }
        DD = cD
      }
      const iD = document.createElement("canvas");
      iD.width = ID, iD.height = pD;
      const fD = iD.getContext("2d");
      if (!fD) return null;
      const bD = fD.createImageData(ID, pD);
      if (bD.data.set(DD), fD.putImageData(bD, 0, 0), cD) {
        const DD = document.createElement("canvas");
        DD.width = ID, DD.height = pD;
        const CD = DD.getContext("2d");
        return CD ? (CD.translate(0, pD), CD.scale(1, -1), CD.drawImage(iD, 0, 0), DD.toDataURL("image/png")) : null
      }
      return iD.toDataURL("image/png")
    }

    function ZD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const ID = DD.getInternalTexture();
      if (!ID) return null;
      const pD = DD._readPixelsSync(CD, cD);
      return pD ? tD(pD, DD.getSize(), ID.invertY) : null
    }
    async function oD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const ID = DD.getInternalTexture();
      if (!ID) return null;
      const pD = await DD.readPixels(CD, cD);
      return pD ? tD(pD, DD.getSize(), ID.invertY) : null
    }
    var vD = cD(39560),
      ND = cD(39174);
    let gD = (() => {
        var DD;
        let CD, cD, tD, gD, XD, mD, nD, OD, PD, HD, UD, xD, qD, JD = bD.d,
          KD = [],
          aD = [],
          VD = [],
          zD = [],
          jD = [],
          lD = [],
          LD = [],
          TD = [],
          GD = [],
          RD = [],
          kD = [],
          dD = [],
          YD = [],
          WD = [],
          sD = [],
          ED = [],
          eD = [],
          uD = [],
          hD = [],
          rD = [],
          AD = [],
          FD = [],
          DC = [],
          CC = [],
          cC = [];
        return DD = class extends JD {
          static _CreateVideoTexture(CD, cD, ID) {
            arguments.length > 5 && void 0 !== arguments[5] || DD.TRILINEAR_SAMPLINGMODE;
            throw (0, wD.m)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(DD) {
            this._isBlocking = DD
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(CD, cD, pD, fD) {
            let bD, QD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : DD.TRILINEAR_SAMPLINGMODE,
              wD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              BD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              yD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              MD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              tD = arguments.length > 9 ? arguments[9] : void 0,
              ZD = arguments.length > 10 ? arguments[10] : void 0,
              oD = arguments.length > 11 ? arguments[11] : void 0,
              ND = arguments.length > 12 ? arguments[12] : void 0,
              gD = arguments.length > 13 ? arguments[13] : void 0;
            super(cD), this.url = ((0, ID.m)(this, KD), (0, ID.m)(this, aD, null)), this.uOffset = ((0, ID.m)(this, VD), (0, ID.m)(this, zD, 0)), this.vOffset = ((0, ID.m)(this, jD), (0, ID.m)(this, lD, 0)), this.uScale = ((0, ID.m)(this, LD), (0, ID.m)(this, TD, 1)), this.vScale = ((0, ID.m)(this, GD), (0, ID.m)(this, RD, 1)), this.uAng = ((0, ID.m)(this, kD), (0, ID.m)(this, dD, 0)), this.vAng = ((0, ID.m)(this, YD), (0, ID.m)(this, WD, 0)), this.wAng = ((0, ID.m)(this, sD), (0, ID.m)(this, ED, 0)), this.uRotationCenter = ((0, ID.m)(this, eD), (0, ID.m)(this, uD, .5)), this.vRotationCenter = ((0, ID.m)(this, hD), (0, ID.m)(this, rD, .5)), this.wRotationCenter = ((0, ID.m)(this, AD), (0, ID.m)(this, FD, .5)), this.homogeneousRotationInUVTransform = ((0, ID.m)(this, DC), (0, ID.m)(this, CC, !1)), this.inspectableCustomProperties = ((0, ID.m)(this, cC), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new iD.c, this._isBlocking = !0, this.name = CD || "", this.url = CD;
            let XD = !1,
              mD = null,
              nD = !0;
            "object" === typeof pD && null !== pD ? (bD = pD.noMipmap ?? !1, fD = pD.invertY ?? !vD.c, QD = pD.samplingMode ?? DD.TRILINEAR_SAMPLINGMODE, wD = pD.onLoad ?? null, BD = pD.onError ?? null, yD = pD.buffer ?? null, MD = pD.deleteBuffer ?? !1, tD = pD.format, ZD = pD.mimeType, oD = pD.loaderOptions, ND = pD.creationFlags, XD = pD.useSRGBBuffer ?? !1, mD = pD.internalTexture ?? null, nD = pD.gammaSpace ?? nD, gD = pD.forcedExtension ?? gD) : bD = !!pD, this._gammaSpace = nD, this._noMipmap = bD, this._invertY = void 0 === fD ? !vD.c : fD, this._initialSamplingMode = QD, this._buffer = yD, this._deleteBuffer = MD, this._mimeType = ZD, this._loaderOptions = oD, this._creationFlags = ND, this._useSRGBBuffer = XD, this._forcedExtension = gD, void 0 !== tD && (this._format = tD);
            const OD = this.hq(),
              PD = this._getEngine();
            if (!PD) return;
            PD.onBeforeTextureInitObservable.notifyObservers(this);
            const HD = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), wD && wD(), !this.isBlocking && OD && OD.resetCachedMaterial()
              },
              UD = (CD, cD) => {
                this._loadingError = !0, this._errorObject = {
                  message: CD,
                  exception: cD
                }, BD && BD(CD, cD), DD.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !mD) return this._delayedOnLoad = HD, void(this._delayedOnError = UD);
            if (this._texture = mD ?? this._getFromCache(this.url, bD, QD, this._invertY, XD, this.isCube), this._texture)
              if (this._texture.isReady) SD.d.SetImmediate((() => HD()));
              else {
                const DD = this._texture.onLoadedObservable.add(HD);
                this._texture.onErrorObservable.add((CD => {
                  UD(CD.message, CD.exception), this._texture?.onLoadedObservable.remove(DD)
                }))
              }
            else if (OD && OD.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = HD, this._delayedOnError = UD;
            else {
              try {
                this._texture = PD.createTexture(this.url, bD, this._invertY, OD, QD, HD, UD, this._buffer, void 0, this._format, this._forcedExtension, ZD, oD, ND, XD)
              } catch (xD) {
                throw UD("error loading", xD), xD
              }
              MD && (this._buffer = null)
            }
          }
          updateURL(DD) {
            let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              cD = arguments.length > 2 ? arguments[2] : void 0,
              ID = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.hq().markAllMaterialsAsDirty(1, (DD => DD.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = DD), this.url = DD, this._buffer = CD, this._forcedExtension = ID, this.delayLoadState = 4;
            const pD = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              pD ? pD() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), cD && cD()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const DD = this.hq();
            if (!DD) return;
            let CD = this.url;
            !CD && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (CD = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(CD, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? SD.d.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = DD.DZ().createTexture(CD, this._noMipmap, this._invertY, DD, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(DD, CD, cD, ID) {
            DD *= this._cachedUScale, CD *= this._cachedVScale, DD -= this.uRotationCenter * this._cachedUScale, CD -= this.vRotationCenter * this._cachedVScale, cD -= this.wRotationCenter, fD.p.TransformCoordinatesFromFloatsToRef(DD, CD, cD, this._rowGenerationMatrix, ID), ID.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, ID.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, ID.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * DD === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * DD, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = fD.d.Zero(), this._rowGenerationMatrix = new fD.d, this._t0 = fD.p.Zero(), this._t1 = fD.p.Zero(), this._t2 = fD.p.Zero()), fD.d.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (fD.d.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, fD.l.Matrix[0]), fD.d.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, fD.l.Matrix[1]), fD.d.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, fD.l.Matrix[2]), fD.d.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, fD.l.Matrix[3]), fD.l.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(fD.l.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(fD.l.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(fD.l.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.EcD(this._t0), this._t2.EcD(this._t0), fD.d.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const CD = this.hq();
            if (!CD) return this._cachedTextureMatrix;
            const cD = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && cD !== this._cachedIdentity3x2 && CD.markAllMaterialsAsDirty(1, (DD => DD.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const CD = this.hq();
            if (!CD) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== DD.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === CD.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = fD.d.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = fD.d.Zero());
            const cD = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case DD.PLANAR_MODE:
                fD.d.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case DD.PROJECTION_MODE: {
                fD.d.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const DD = CD.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = DD.updateFlag, DD.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                fD.d.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return cD && CD.markAllMaterialsAsDirty(1, (DD => DD.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const CD = {
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
            return ND.d.Clone((() => new DD(this._texture ? this._texture.url : null, this.hq(), CD)), this)
          }
          serialize() {
            const CD = this.name;
            DD.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const cD = super.serialize(DD._SerializeInternalTextureUniqueId);
            if (!cD) return null;
            if (DD.SerializeBuffers || DD.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) cD.base64String = this._buffer, cD.name = cD.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const DD = this.mimeType || "image/png";
              cD.base64String = `data:${DD};base64,${(0,MD.k)(this._buffer)}`
            } else(DD.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (cD.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? ZD(this) : oD(this));
            return cD.invertY = this._invertY, cD.samplingMode = this.samplingMode, cD._creationFlags = this._creationFlags, cD._useSRGBBuffer = this._useSRGBBuffer, DD._SerializeInternalTextureUniqueId && (cD.internalTextureUniqueId = this._texture?.uniqueId), cD.internalTextureLabel = this._texture?.label, cD.noMipmap = this._noMipmap, this.name = CD, cD
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(CD, cD, ID) {
            if (CD.customType) {
              const DD = BD.b.Instantiate(CD.customType).Parse(CD, cD, ID);
              return CD.samplingMode && DD.updateSamplingMode && DD._samplingMode && DD._samplingMode !== CD.samplingMode && DD.updateSamplingMode(CD.samplingMode), DD
            }
            if (CD.isCube && !CD.isRenderTarget) return DD._CubeTextureParser(CD, cD, ID);
            const pD = void 0 !== CD.internalTextureUniqueId;
            if (!CD.name && !CD.isRenderTarget && !pD) return null;
            let iD;
            if (pD) {
              const DD = cD.DZ().getLoadedTexturesCache();
              for (const cD of DD)
                if (cD.uniqueId === CD.internalTextureUniqueId) {
                  iD = cD;
                  break
                }
            }
            const fD = DD => {
              if (DD && DD._texture && (DD._texture._cachedWrapU = null, DD._texture._cachedWrapV = null, DD._texture._cachedWrapR = null), CD.samplingMode) {
                const cD = CD.samplingMode;
                DD && DD.samplingMode !== cD && DD.updateSamplingMode(cD)
              }
              if (DD && CD.animations)
                for (let cD = 0; cD < CD.animations.length; cD++) {
                  const ID = CD.animations[cD],
                    pD = (0, QD.b)("BABYLON.Animation");
                  pD && DD.animations.push(pD.Parse(ID))
                }
              DD && DD._texture && (pD && !iD && DD._texture._setUniqueId(CD.internalTextureUniqueId), DD._texture.label = CD.internalTextureLabel)
            };
            return ND.d.Parse((() => {
              let pD = !0;
              if (CD.noMipmap && (pD = !1), CD.mirrorPlane) {
                const ID = DD._CreateMirror(CD.name, CD.renderTargetSize, cD, pD);
                return ID._waitingRenderList = CD.renderList, ID.mirrorPlane = yD.c.FromArray(CD.mirrorPlane), fD(ID), ID
              }
              if (CD.isRenderTarget && !CD.base64String) {
                let ID = null;
                if (CD.isCube) {
                  if (cD.reflectionProbes)
                    for (let DD = 0; DD < cD.reflectionProbes.length; DD++) {
                      const ID = cD.reflectionProbes[DD];
                      if (ID.name === CD.name) return ID.cubeTexture
                    }
                } else ID = DD._CreateRenderTargetTexture(CD.name, CD.renderTargetSize, cD, pD, CD._creationFlags ?? 0), ID._waitingRenderList = CD.renderList;
                return fD(ID), ID
              }
              if (CD.isVideo) {
                const iD = DD._CreateVideoTexture(ID + (CD.url || CD.name), ID + (CD.src || CD.url), cD, pD, CD.invertY, CD.samplingMode, CD.settings || {});
                return fD(iD), iD
              } {
                let bD;
                if ("string" === typeof CD.base64String && CD.base64String && !iD) {
                  const ID = {
                      buffer: CD.base64String,
                      noMipmap: !pD,
                      invertY: CD.invertY,
                      samplingMode: CD.samplingMode,
                      useSRGBBuffer: CD._useSRGBBuffer ?? !1,
                      creationFlags: CD._creationFlags ?? 0,
                      onLoad: () => {
                        fD(bD)
                      }
                    },
                    iD = CD.base64String,
                    QD = iD.startsWith("data:") ? iD.substring(5) : iD;
                  bD = DD.CreateFromBase64String("", QD, cD, ID), bD.name = CD.name
                } else {
                  let QD;
                  QD = CD.name && (CD.name.indexOf("://") > 0 || CD.name.startsWith("data:")) ? CD.name : ID + CD.name, CD.url && (CD.url.startsWith("data:") || DD.UseSerializedUrlIfAny) && (QD = CD.url);
                  const wD = {
                    noMipmap: !pD,
                    invertY: CD.invertY,
                    samplingMode: CD.samplingMode,
                    useSRGBBuffer: CD._useSRGBBuffer ?? !1,
                    creationFlags: CD._creationFlags ?? 0,
                    onLoad: () => {
                      fD(bD)
                    },
                    internalTexture: iD
                  };
                  bD = new DD(QD, cD, wD)
                }
                return bD
              }
            }), CD, cD)
          }
          static CreateFromBase64String(CD, cD, ID, pD, iD) {
            let fD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : DD.TRILINEAR_SAMPLINGMODE;
            return new DD("data:" + cD, ID, pD, iD, fD, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, CD, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(CD, cD, ID) {
            let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              iD = arguments.length > 4 ? arguments[4] : void 0,
              fD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              bD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : DD.TRILINEAR_SAMPLINGMODE,
              QD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              wD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              SD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              BD = arguments.length > 10 ? arguments[10] : void 0,
              yD = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== CD.substring(0, 5) && (CD = "data:" + CD), new DD(CD, ID, iD, fD, bD, QD, wD, cD, pD, SD, void 0, void 0, BD, yD)
          }
        }, (() => {
          const iD = "function" === typeof Symbol && Symbol.metadata ? Object.create(JD[Symbol.metadata] ?? null) : void 0;
          CD = [(0, pD.G)()], cD = [(0, pD.G)()], tD = [(0, pD.G)()], gD = [(0, pD.G)()], XD = [(0, pD.G)()], mD = [(0, pD.G)()], nD = [(0, pD.G)()], OD = [(0, pD.G)()], PD = [(0, pD.G)()], HD = [(0, pD.G)()], UD = [(0, pD.G)()], xD = [(0, pD.G)()], qD = [(0, pD.G)()], (0, ID.k)(DD, null, qD, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: DD => "isBlocking" in DD,
              get: DD => DD.isBlocking
            },
            metadata: iD
          }, null, KD), (0, ID.k)(null, null, CD, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: DD => "url" in DD,
              get: DD => DD.url,
              set: (DD, CD) => {
                DD.url = CD
              }
            },
            metadata: iD
          }, aD, VD), (0, ID.k)(null, null, cD, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: DD => "uOffset" in DD,
              get: DD => DD.uOffset,
              set: (DD, CD) => {
                DD.uOffset = CD
              }
            },
            metadata: iD
          }, zD, jD), (0, ID.k)(null, null, tD, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: DD => "vOffset" in DD,
              get: DD => DD.vOffset,
              set: (DD, CD) => {
                DD.vOffset = CD
              }
            },
            metadata: iD
          }, lD, LD), (0, ID.k)(null, null, gD, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: DD => "uScale" in DD,
              get: DD => DD.uScale,
              set: (DD, CD) => {
                DD.uScale = CD
              }
            },
            metadata: iD
          }, TD, GD), (0, ID.k)(null, null, XD, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: DD => "vScale" in DD,
              get: DD => DD.vScale,
              set: (DD, CD) => {
                DD.vScale = CD
              }
            },
            metadata: iD
          }, RD, kD), (0, ID.k)(null, null, mD, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: DD => "uAng" in DD,
              get: DD => DD.uAng,
              set: (DD, CD) => {
                DD.uAng = CD
              }
            },
            metadata: iD
          }, dD, YD), (0, ID.k)(null, null, nD, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: DD => "vAng" in DD,
              get: DD => DD.vAng,
              set: (DD, CD) => {
                DD.vAng = CD
              }
            },
            metadata: iD
          }, WD, sD), (0, ID.k)(null, null, OD, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: DD => "wAng" in DD,
              get: DD => DD.wAng,
              set: (DD, CD) => {
                DD.wAng = CD
              }
            },
            metadata: iD
          }, ED, eD), (0, ID.k)(null, null, PD, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: DD => "uRotationCenter" in DD,
              get: DD => DD.uRotationCenter,
              set: (DD, CD) => {
                DD.uRotationCenter = CD
              }
            },
            metadata: iD
          }, uD, hD), (0, ID.k)(null, null, HD, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: DD => "vRotationCenter" in DD,
              get: DD => DD.vRotationCenter,
              set: (DD, CD) => {
                DD.vRotationCenter = CD
              }
            },
            metadata: iD
          }, rD, AD), (0, ID.k)(null, null, UD, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: DD => "wRotationCenter" in DD,
              get: DD => DD.wRotationCenter,
              set: (DD, CD) => {
                DD.wRotationCenter = CD
              }
            },
            metadata: iD
          }, FD, DC), (0, ID.k)(null, null, xD, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: DD => "homogeneousRotationInUVTransform" in DD,
              get: DD => DD.homogeneousRotationInUVTransform,
              set: (DD, CD) => {
                DD.homogeneousRotationInUVTransform = CD
              }
            },
            metadata: iD
          }, CC, cC), iD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iD
          })
        })(), DD.SerializeBuffers = !0, DD.ForceSerializeBuffers = !1, DD.OnTextureLoadErrorObservable = new iD.c, DD._SerializeInternalTextureUniqueId = !1, DD._CubeTextureParser = (DD, CD, cD) => {
          throw (0, wD.m)("CubeTexture")
        }, DD._CreateMirror = (DD, CD, cD, ID) => {
          throw (0, wD.m)("MirrorTexture")
        }, DD._CreateRenderTargetTexture = (DD, CD, cD, ID, pD) => {
          throw (0, wD.m)("RenderTargetTexture")
        }, DD.NEAREST_SAMPLINGMODE = 1, DD.NEAREST_NEAREST_MIPLINEAR = 8, DD.BILINEAR_SAMPLINGMODE = 2, DD.LINEAR_LINEAR_MIPNEAREST = 11, DD.TRILINEAR_SAMPLINGMODE = 3, DD.LINEAR_LINEAR_MIPLINEAR = 3, DD.NEAREST_NEAREST_MIPNEAREST = 4, DD.NEAREST_LINEAR_MIPNEAREST = 5, DD.NEAREST_LINEAR_MIPLINEAR = 6, DD.NEAREST_LINEAR = 7, DD.NEAREST_NEAREST = 1, DD.LINEAR_NEAREST_MIPNEAREST = 9, DD.LINEAR_NEAREST_MIPLINEAR = 10, DD.LINEAR_LINEAR = 2, DD.LINEAR_NEAREST = 12, DD.EXPLICIT_MODE = 0, DD.SPHERICAL_MODE = 1, DD.PLANAR_MODE = 2, DD.CUBIC_MODE = 3, DD.PROJECTION_MODE = 4, DD.SKYBOX_MODE = 5, DD.INVCUBIC_MODE = 6, DD.EQUIRECTANGULAR_MODE = 7, DD.FIXED_EQUIRECTANGULAR_MODE = 8, DD.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, DD.CLAMP_ADDRESSMODE = 0, DD.WRAP_ADDRESSMODE = 1, DD.MIRROR_ADDRESSMODE = 2, DD.UseSerializedUrlIfAny = !1, DD
      })(),
      XD = !1;

    function mD() {
      XD || (XD = !0, (0, QD.d)("BABYLON.Texture", gD), ND.d._TextureParser = gD.Parse)
    }
  },
  39166: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID
    });
    class ID {
      constructor(DD, CD) {
        this.width = DD, this.height = CD
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let DD = 0 | this.width;
        return DD = 397 * DD ^ this.height, DD
      }
      YCD(DD) {
        this.width = DD.width, this.height = DD.height
      }
      K4(DD, CD) {
        return this.width = DD, this.height = CD, this
      }
      set(DD, CD) {
        return this.K4(DD, CD)
      }
      multiplyByFloats(DD, CD) {
        return new ID(this.width * DD, this.height * CD)
      }
      clone() {
        return new ID(this.width, this.height)
      }
      equals(DD) {
        return !!DD && (this.width === DD.width && this.height === DD.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new ID(0, 0)
      }
      add(DD) {
        return new ID(this.width + DD.width, this.height + DD.height)
      }
      subtract(DD) {
        return new ID(this.width - DD.width, this.height - DD.height)
      }
      scale(DD) {
        return new ID(this.width * DD, this.height * DD)
      }
      static Lerp(DD, CD, cD) {
        const pD = DD.width + (CD.width - DD.width) * cD,
          iD = DD.height + (CD.height - DD.height) * cD;
        return new ID(pD, iD)
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);