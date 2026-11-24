export const id = 256;
export const ids = [256];
export const modules = {
  40364: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD
    });
    let pD = !1
  },
  39918: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => ID
    });
    var pD = wD(39921),
      sD = wD(39927),
      KD = wD(37119),
      rD = wD(37079),
      LD = wD(37110),
      cD = wD(37891),
      gD = wD(39935);
    class RD {
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
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = gD.b.Zero(), this._cachedBaseSize = gD.b.Zero(), this._initialSamplingMode = 2, this._texture = RD._IsRenderTargetWrapper(DD) ? DD.texture : DD, this._texture && (this._engine = this._texture.iI(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(DD, this._texture, this._texture.generateMipMaps && zD)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var AD, UD = wD(39939),
      fD = wD(39808);
    let ID = (() => {
      var DD;
      let zD, wD, gD, AD, fD, ID, BD, GD, hD, nD, MD, OD, JD, ED, QD, XD, VD, PD, CD, xD, TD, bD, jD, dD, SD, iD = RD,
        lD = [],
        WD = [],
        ND = [],
        ZD = [],
        yD = [],
        kD = [],
        mD = [],
        eD = [],
        oD = [],
        aD = [],
        uD = [],
        vD = [],
        tD = [],
        FD = [],
        YD = [],
        HD = [],
        qD = [],
        Dz = [],
        zz = [],
        wz = [],
        pz = [],
        sz = [],
        Kz = [],
        rz = [],
        Lz = [],
        cz = [],
        gz = [],
        Rz = [],
        Az = [],
        Uz = [],
        fz = [];
      return DD = class extends iD {
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
          this.Ul()?.markAllMaterialsAsDirty(1, (DD => DD.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(DD) {
          DD !== this.isRGBD && (this._texture && (this._texture._isRGBD = DD), this.Ul()?.markAllMaterialsAsDirty(1, (DD => DD.hasTexture(this))))
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
          return this._uid || (this._uid = (0, cD.c)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(DD) {
          this._onDisposeObserver && this.Bl.remove(this._onDisposeObserver), this._onDisposeObserver = this.Bl.add(DD)
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
        constructor(zD) {
          let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, pD.m)(this, lD), (0, pD.m)(this, WD, void 0)), this.name = ((0, pD.m)(this, ND), (0, pD.m)(this, ZD, void 0)), this.displayName = ((0, pD.m)(this, yD), (0, pD.m)(this, kD, void 0)), this.metadata = ((0, pD.m)(this, mD), (0, pD.m)(this, eD, null)), this._internalMetadata = (0, pD.m)(this, oD), this.reservedDataStore = null, this._hasAlpha = (0, pD.m)(this, aD, !1), this._getAlphaFromRGB = ((0, pD.m)(this, uD), (0, pD.m)(this, vD, !1)), this.level = ((0, pD.m)(this, tD), (0, pD.m)(this, FD, 1)), this._coordinatesIndex = ((0, pD.m)(this, YD), (0, pD.m)(this, HD, 0)), this.optimizeUVAllocation = ((0, pD.m)(this, qD), (0, pD.m)(this, Dz, !0)), this._coordinatesMode = ((0, pD.m)(this, zz), (0, pD.m)(this, wz, 0)), this.wrapR = ((0, pD.m)(this, pz), (0, pD.m)(this, sz, 1)), this.anisotropicFilteringLevel = ((0, pD.m)(this, Kz), (0, pD.m)(this, rz, DD.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, pD.m)(this, Lz), !1), this._gammaSpace = !0, this.invertZ = (0, pD.m)(this, cz, !1), this.lodLevelInAlpha = ((0, pD.m)(this, gz), (0, pD.m)(this, Rz, !1)), this._dominantDirection = ((0, pD.m)(this, Az), null), this.isRenderTarget = (0, pD.m)(this, Uz, !1), this._prefiltered = ((0, pD.m)(this, fz), !1), this._forceSerialize = !1, this.animations = [], this.Bl = new KD.b, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, zD ? DD._IsScene(zD) ? this._scene = zD : this._engine = zD : this._scene = LD.d.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.iI()), this._texture = wD, this._uid = null
        }
        Ul() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return rD.e.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return rD.e.IdentityReadOnly
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
        _getFromCache(DD, zD, wD, pD, sD, KD) {
          const rD = this._getEngine();
          if (!rD) return null;
          const LD = rD._getUseSRGBBuffer(!!sD, zD),
            cD = rD.getLoadedTexturesCache();
          for (let gD = 0; gD < cD.length; gD++) {
            const rD = cD[gD];
            if ((void 0 === sD || LD === rD._useSRGBBuffer) && (void 0 === pD || pD === rD.invertY) && rD.url === DD && rD.generateMipMaps === !zD && (!wD || wD === rD.samplingMode) && (void 0 === KD || KD === rD.isCube)) return rD.incrementReferences(), rD
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
          const DD = this.Ul();
          DD && DD.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            pD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            sD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            rD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            LD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            cD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const gD = this._getEngine();
          if (!gD) return null;
          const RD = this.getSize();
          let AD = RD.width,
            UD = RD.height;
          0 !== zD && (AD /= Math.pow(2, zD), UD /= Math.pow(2, zD), AD = Math.round(AD), UD = Math.round(UD)), LD = Math.min(AD, LD), cD = Math.min(UD, cD);
          try {
            return this._texture.isCube || this._texture.is2DArray ? gD._readTexturePixels(this._texture, LD, cD, DD, zD, wD, pD, sD, KD, rD) : gD._readTexturePixels(this._texture, LD, cD, -1, zD, wD, pD, sD, KD, rD)
          } catch (fD) {
            return null
          }
        }
        _readPixelsSync() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            pD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            sD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const KD = this.getSize();
          let rD = KD.width,
            LD = KD.height;
          const cD = this._getEngine();
          if (!cD) return null;
          0 != zD && (rD /= Math.pow(2, zD), LD /= Math.pow(2, zD), rD = Math.round(rD), LD = Math.round(LD));
          try {
            return this._texture.isCube ? cD._readTexturePixelsSync(this._texture, rD, LD, DD, zD, wD, pD, sD) : cD._readTexturePixelsSync(this._texture, rD, LD, -1, zD, wD, pD, sD)
          } catch (gD) {
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
          this.Bl.notifyObservers(this), this.Bl.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !DD) return null;
          const zD = UD.d.Serialize(this);
          return UD.d.AppendSerializedAnimations(this, zD), zD
        }
        static WhenAllReady(DD, zD) {
          let wD = DD.length;
          if (0 !== wD)
            for (let pD = 0; pD < DD.length; pD++) {
              const sD = DD[pD];
              if (sD.isReady()) 0 === --wD && zD();
              else {
                const DD = sD.onLoadObservable;
                DD ? DD.addOnce((() => {
                  0 === --wD && zD()
                })) : 0 === --wD && zD()
              }
            } else zD()
        }
        static _IsScene(DD) {
          return "Scene" === DD.getClassName()
        }
      }, (() => {
        const KD = "function" === typeof Symbol && Symbol.metadata ? Object.create(iD[Symbol.metadata] ?? null) : void 0;
        zD = [(0, sD.C)()], wD = [(0, sD.C)()], gD = [(0, sD.C)()], AD = [(0, sD.C)()], fD = [(0, sD.C)("hasAlpha")], ID = [(0, sD.C)("getAlphaFromRGB")], BD = [(0, sD.C)()], GD = [(0, sD.C)("coordinatesIndex")], hD = [(0, sD.C)()], nD = [(0, sD.C)("coordinatesMode")], MD = [(0, sD.C)()], OD = [(0, sD.C)()], JD = [(0, sD.C)()], ED = [(0, sD.C)()], QD = [(0, sD.C)()], XD = [(0, sD.C)()], VD = [(0, sD.C)()], PD = [(0, sD.C)()], CD = [(0, sD.C)()], xD = [(0, sD.C)()], TD = [(0, sD.C)()], bD = [(0, sD.C)()], jD = [(0, sD.C)()], dD = [(0, sD.w)()], SD = [(0, sD.C)()], (0, pD.i)(DD, null, MD, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: DD => "wrapU" in DD,
            get: DD => DD.wrapU
          },
          metadata: KD
        }, null, lD), (0, pD.i)(DD, null, OD, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: DD => "wrapV" in DD,
            get: DD => DD.wrapV
          },
          metadata: KD
        }, null, lD), (0, pD.i)(DD, null, QD, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: DD => "isCube" in DD,
            get: DD => DD.isCube
          },
          metadata: KD
        }, null, lD), (0, pD.i)(DD, null, XD, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: DD => "is3D" in DD,
            get: DD => DD.is3D
          },
          metadata: KD
        }, null, lD), (0, pD.i)(DD, null, VD, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: DD => "is2DArray" in DD,
            get: DD => DD.is2DArray
          },
          metadata: KD
        }, null, lD), (0, pD.i)(DD, null, PD, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: DD => "gammaSpace" in DD,
            get: DD => DD.gammaSpace
          },
          metadata: KD
        }, null, lD), (0, pD.i)(DD, null, TD, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: DD => "lodGenerationOffset" in DD,
            get: DD => DD.lodGenerationOffset
          },
          metadata: KD
        }, null, lD), (0, pD.i)(DD, null, bD, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: DD => "lodGenerationScale" in DD,
            get: DD => DD.lodGenerationScale
          },
          metadata: KD
        }, null, lD), (0, pD.i)(DD, null, jD, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: DD => "linearSpecularLOD" in DD,
            get: DD => DD.linearSpecularLOD
          },
          metadata: KD
        }, null, lD), (0, pD.i)(DD, null, dD, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "irradianceTexture" in DD,
            get: DD => DD.irradianceTexture
          },
          metadata: KD
        }, null, lD), (0, pD.i)(null, null, zD, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: DD => "uniqueId" in DD,
            get: DD => DD.uniqueId,
            set: (DD, zD) => {
              DD.uniqueId = zD
            }
          },
          metadata: KD
        }, WD, ND), (0, pD.i)(null, null, wD, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: DD => "name" in DD,
            get: DD => DD.name,
            set: (DD, zD) => {
              DD.name = zD
            }
          },
          metadata: KD
        }, ZD, yD), (0, pD.i)(null, null, gD, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: DD => "displayName" in DD,
            get: DD => DD.displayName,
            set: (DD, zD) => {
              DD.displayName = zD
            }
          },
          metadata: KD
        }, kD, mD), (0, pD.i)(null, null, AD, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: DD => "metadata" in DD,
            get: DD => DD.metadata,
            set: (DD, zD) => {
              DD.metadata = zD
            }
          },
          metadata: KD
        }, eD, oD), (0, pD.i)(null, null, fD, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: DD => "_hasAlpha" in DD,
            get: DD => DD._hasAlpha,
            set: (DD, zD) => {
              DD._hasAlpha = zD
            }
          },
          metadata: KD
        }, aD, uD), (0, pD.i)(null, null, ID, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: DD => "_getAlphaFromRGB" in DD,
            get: DD => DD._getAlphaFromRGB,
            set: (DD, zD) => {
              DD._getAlphaFromRGB = zD
            }
          },
          metadata: KD
        }, vD, tD), (0, pD.i)(null, null, BD, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: DD => "level" in DD,
            get: DD => DD.level,
            set: (DD, zD) => {
              DD.level = zD
            }
          },
          metadata: KD
        }, FD, YD), (0, pD.i)(null, null, GD, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: DD => "_coordinatesIndex" in DD,
            get: DD => DD._coordinatesIndex,
            set: (DD, zD) => {
              DD._coordinatesIndex = zD
            }
          },
          metadata: KD
        }, HD, qD), (0, pD.i)(null, null, hD, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: DD => "optimizeUVAllocation" in DD,
            get: DD => DD.optimizeUVAllocation,
            set: (DD, zD) => {
              DD.optimizeUVAllocation = zD
            }
          },
          metadata: KD
        }, Dz, zz), (0, pD.i)(null, null, nD, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: DD => "_coordinatesMode" in DD,
            get: DD => DD._coordinatesMode,
            set: (DD, zD) => {
              DD._coordinatesMode = zD
            }
          },
          metadata: KD
        }, wz, pz), (0, pD.i)(null, null, JD, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: DD => "wrapR" in DD,
            get: DD => DD.wrapR,
            set: (DD, zD) => {
              DD.wrapR = zD
            }
          },
          metadata: KD
        }, sz, Kz), (0, pD.i)(null, null, ED, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: DD => "anisotropicFilteringLevel" in DD,
            get: DD => DD.anisotropicFilteringLevel,
            set: (DD, zD) => {
              DD.anisotropicFilteringLevel = zD
            }
          },
          metadata: KD
        }, rz, Lz), (0, pD.i)(null, null, CD, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: DD => "invertZ" in DD,
            get: DD => DD.invertZ,
            set: (DD, zD) => {
              DD.invertZ = zD
            }
          },
          metadata: KD
        }, cz, gz), (0, pD.i)(null, null, xD, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: DD => "lodLevelInAlpha" in DD,
            get: DD => DD.lodLevelInAlpha,
            set: (DD, zD) => {
              DD.lodLevelInAlpha = zD
            }
          },
          metadata: KD
        }, Rz, Az), (0, pD.i)(null, null, SD, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: DD => "isRenderTarget" in DD,
            get: DD => DD.isRenderTarget,
            set: (DD, zD) => {
              DD.isRenderTarget = zD
            }
          },
          metadata: KD
        }, Uz, fz), KD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: KD
        })
      })(), DD.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, DD
    })();
    (AD = ID.prototype).forceSphericalPolynomialsRecompute ?? (AD.forceSphericalPolynomialsRecompute = (0, fD.h)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(ID.prototype, "sphericalPolynomial") || Object.defineProperty(ID.prototype, "sphericalPolynomial", (0, fD.g)("BaseTexture", "sphericalPolynomial"))
  },
  40400: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => JD,
      d: () => MD
    });
    var pD = wD(39921),
      sD = wD(39927),
      KD = wD(37119),
      rD = wD(37079),
      LD = wD(39918),
      cD = wD(37134),
      gD = wD(39808),
      RD = wD(39820),
      AD = wD(40036),
      UD = wD(37754),
      fD = wD(39975);

    function ID(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const pD = zD.width,
        sD = zD.height;
      if (DD instanceof Float32Array) {
        let zD = DD.byteLength / DD.BYTES_PER_ELEMENT;
        const wD = new Uint8Array(zD);
        for (; --zD >= 0;) {
          let pD = DD[zD];
          pD < 0 ? pD = 0 : pD > 1 && (pD = 1), wD[zD] = 255 * pD
        }
        DD = wD
      }
      const KD = document.createElement("canvas");
      KD.width = pD, KD.height = sD;
      const rD = KD.getContext("2d");
      if (!rD) return null;
      const LD = rD.createImageData(pD, sD);
      if (LD.data.set(DD), rD.putImageData(LD, 0, 0), wD) {
        const DD = document.createElement("canvas");
        DD.width = pD, DD.height = sD;
        const zD = DD.getContext("2d");
        return zD ? (zD.translate(0, sD), zD.scale(1, -1), zD.drawImage(KD, 0, 0), DD.toDataURL("image/png")) : null
      }
      return KD.toDataURL("image/png")
    }

    function BD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const pD = DD.getInternalTexture();
      if (!pD) return null;
      const sD = DD._readPixelsSync(zD, wD);
      return sD ? ID(sD, DD.getSize(), pD.invertY) : null
    }
    async function GD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const pD = DD.getInternalTexture();
      if (!pD) return null;
      const sD = await DD.readPixels(zD, wD);
      return sD ? ID(sD, DD.getSize(), pD.invertY) : null
    }
    var hD = wD(40364),
      nD = wD(39939);
    let MD = (() => {
        var DD;
        let zD, wD, ID, MD, OD, JD, ED, QD, XD, VD, PD, CD, xD, TD = LD.d,
          bD = [],
          jD = [],
          dD = [],
          SD = [],
          iD = [],
          lD = [],
          WD = [],
          ND = [],
          ZD = [],
          yD = [],
          kD = [],
          mD = [],
          eD = [],
          oD = [],
          aD = [],
          uD = [],
          vD = [],
          tD = [],
          FD = [],
          YD = [],
          HD = [],
          qD = [],
          Dz = [],
          zz = [],
          wz = [];
        return DD = class extends TD {
          static _CreateVideoTexture(zD, wD, pD) {
            arguments.length > 5 && void 0 !== arguments[5] || DD.TRILINEAR_SAMPLINGMODE;
            throw (0, gD.j)("VideoTexture")
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
          constructor(zD, wD, sD, rD) {
            let LD, cD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : DD.TRILINEAR_SAMPLINGMODE,
              gD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              AD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              UD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              fD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              ID = arguments.length > 9 ? arguments[9] : void 0,
              BD = arguments.length > 10 ? arguments[10] : void 0,
              GD = arguments.length > 11 ? arguments[11] : void 0,
              nD = arguments.length > 12 ? arguments[12] : void 0,
              MD = arguments.length > 13 ? arguments[13] : void 0;
            super(wD), this.url = ((0, pD.m)(this, bD), (0, pD.m)(this, jD, null)), this.uOffset = ((0, pD.m)(this, dD), (0, pD.m)(this, SD, 0)), this.vOffset = ((0, pD.m)(this, iD), (0, pD.m)(this, lD, 0)), this.uScale = ((0, pD.m)(this, WD), (0, pD.m)(this, ND, 1)), this.vScale = ((0, pD.m)(this, ZD), (0, pD.m)(this, yD, 1)), this.uAng = ((0, pD.m)(this, kD), (0, pD.m)(this, mD, 0)), this.vAng = ((0, pD.m)(this, eD), (0, pD.m)(this, oD, 0)), this.wAng = ((0, pD.m)(this, aD), (0, pD.m)(this, uD, 0)), this.uRotationCenter = ((0, pD.m)(this, vD), (0, pD.m)(this, tD, .5)), this.vRotationCenter = ((0, pD.m)(this, FD), (0, pD.m)(this, YD, .5)), this.wRotationCenter = ((0, pD.m)(this, HD), (0, pD.m)(this, qD, .5)), this.homogeneousRotationInUVTransform = ((0, pD.m)(this, Dz), (0, pD.m)(this, zz, !1)), this.inspectableCustomProperties = ((0, pD.m)(this, wz), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new KD.b, this._isBlocking = !0, this.name = zD || "", this.url = zD;
            let OD = !1,
              JD = null,
              ED = !0;
            "object" === typeof sD && null !== sD ? (LD = sD.noMipmap ?? !1, rD = sD.invertY ?? !hD.e, cD = sD.samplingMode ?? DD.TRILINEAR_SAMPLINGMODE, gD = sD.onLoad ?? null, AD = sD.onError ?? null, UD = sD.buffer ?? null, fD = sD.deleteBuffer ?? !1, ID = sD.format, BD = sD.mimeType, GD = sD.loaderOptions, nD = sD.creationFlags, OD = sD.useSRGBBuffer ?? !1, JD = sD.internalTexture ?? null, ED = sD.gammaSpace ?? ED, MD = sD.forcedExtension ?? MD) : LD = !!sD, this._gammaSpace = ED, this._noMipmap = LD, this._invertY = void 0 === rD ? !hD.e : rD, this._initialSamplingMode = cD, this._buffer = UD, this._deleteBuffer = fD, this._mimeType = BD, this._loaderOptions = GD, this._creationFlags = nD, this._useSRGBBuffer = OD, this._forcedExtension = MD, void 0 !== ID && (this._format = ID);
            const QD = this.Ul(),
              XD = this._getEngine();
            if (!XD) return;
            XD.onBeforeTextureInitObservable.notifyObservers(this);
            const VD = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), gD && gD(), !this.isBlocking && QD && QD.resetCachedMaterial()
              },
              PD = (zD, wD) => {
                this._loadingError = !0, this._errorObject = {
                  message: zD,
                  exception: wD
                }, AD && AD(zD, wD), DD.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !JD) return this._delayedOnLoad = VD, void(this._delayedOnError = PD);
            if (this._texture = JD ?? this._getFromCache(this.url, LD, cD, this._invertY, OD, this.isCube), this._texture)
              if (this._texture.isReady) RD.d.SetImmediate((() => VD()));
              else {
                const DD = this._texture.onLoadedObservable.add(VD);
                this._texture.onErrorObservable.add((zD => {
                  PD(zD.message, zD.exception), this._texture?.onLoadedObservable.remove(DD)
                }))
              }
            else if (QD && QD.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = VD, this._delayedOnError = PD;
            else {
              try {
                this._texture = XD.createTexture(this.url, LD, this._invertY, QD, cD, VD, PD, this._buffer, void 0, this._format, this._forcedExtension, BD, GD, nD, OD)
              } catch (CD) {
                throw PD("error loading", CD), CD
              }
              fD && (this._buffer = null)
            }
          }
          updateURL(DD) {
            let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              wD = arguments.length > 2 ? arguments[2] : void 0,
              pD = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.Ul().markAllMaterialsAsDirty(1, (DD => DD.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = DD), this.url = DD, this._buffer = zD, this._forcedExtension = pD, this.delayLoadState = 4;
            const sD = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              sD ? sD() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), wD && wD()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const DD = this.Ul();
            if (!DD) return;
            let zD = this.url;
            !zD && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (zD = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(zD, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? RD.d.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = DD.iI().createTexture(zD, this._noMipmap, this._invertY, DD, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(DD, zD, wD, pD) {
            DD *= this._cachedUScale, zD *= this._cachedVScale, DD -= this.uRotationCenter * this._cachedUScale, zD -= this.vRotationCenter * this._cachedVScale, wD -= this.wRotationCenter, rD.s.TransformCoordinatesFromFloatsToRef(DD, zD, wD, this._rowGenerationMatrix, pD), pD.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, pD.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, pD.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * DD === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * DD, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = rD.e.Zero(), this._rowGenerationMatrix = new rD.e, this._t0 = rD.s.Zero(), this._t1 = rD.s.Zero(), this._t2 = rD.s.Zero()), rD.e.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (rD.e.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, rD.n.Matrix[0]), rD.e.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, rD.n.Matrix[1]), rD.e.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, rD.n.Matrix[2]), rD.e.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, rD.n.Matrix[3]), rD.n.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(rD.n.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(rD.n.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(rD.n.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.apD(this._t0), this._t2.apD(this._t0), rD.e.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const zD = this.Ul();
            if (!zD) return this._cachedTextureMatrix;
            const wD = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && wD !== this._cachedIdentity3x2 && zD.markAllMaterialsAsDirty(1, (DD => DD.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const zD = this.Ul();
            if (!zD) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== DD.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === zD.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = rD.e.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = rD.e.Zero());
            const wD = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case DD.PLANAR_MODE:
                rD.e.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case DD.PROJECTION_MODE: {
                rD.e.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const DD = zD.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = DD.updateFlag, DD.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                rD.e.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return wD && zD.markAllMaterialsAsDirty(1, (DD => DD.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const zD = {
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
            return nD.d.Clone((() => new DD(this._texture ? this._texture.url : null, this.Ul(), zD)), this)
          }
          serialize() {
            const zD = this.name;
            DD.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const wD = super.serialize(DD._SerializeInternalTextureUniqueId);
            if (!wD) return null;
            if (DD.SerializeBuffers || DD.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) wD.base64String = this._buffer, wD.name = wD.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const DD = this.mimeType || "image/png";
              wD.base64String = `data:${DD};base64,${(0,fD.e)(this._buffer)}`
            } else(DD.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (wD.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? BD(this) : GD(this));
            return wD.invertY = this._invertY, wD.samplingMode = this.samplingMode, wD._creationFlags = this._creationFlags, wD._useSRGBBuffer = this._useSRGBBuffer, DD._SerializeInternalTextureUniqueId && (wD.internalTextureUniqueId = this._texture?.uniqueId), wD.internalTextureLabel = this._texture?.label, wD.noMipmap = this._noMipmap, this.name = zD, wD
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(zD, wD, pD) {
            if (zD.customType) {
              const DD = AD.b.Instantiate(zD.customType).Parse(zD, wD, pD);
              return zD.samplingMode && DD.updateSamplingMode && DD._samplingMode && DD._samplingMode !== zD.samplingMode && DD.updateSamplingMode(zD.samplingMode), DD
            }
            if (zD.isCube && !zD.isRenderTarget) return DD._CubeTextureParser(zD, wD, pD);
            const sD = void 0 !== zD.internalTextureUniqueId;
            if (!zD.name && !zD.isRenderTarget && !sD) return null;
            let KD;
            if (sD) {
              const DD = wD.iI().getLoadedTexturesCache();
              for (const wD of DD)
                if (wD.uniqueId === zD.internalTextureUniqueId) {
                  KD = wD;
                  break
                }
            }
            const rD = DD => {
              if (DD && DD._texture && (DD._texture._cachedWrapU = null, DD._texture._cachedWrapV = null, DD._texture._cachedWrapR = null), zD.samplingMode) {
                const wD = zD.samplingMode;
                DD && DD.samplingMode !== wD && DD.updateSamplingMode(wD)
              }
              if (DD && zD.animations)
                for (let wD = 0; wD < zD.animations.length; wD++) {
                  const pD = zD.animations[wD],
                    sD = (0, cD.e)("BABYLON.Animation");
                  sD && DD.animations.push(sD.Parse(pD))
                }
              DD && DD._texture && (sD && !KD && DD._texture._setUniqueId(zD.internalTextureUniqueId), DD._texture.label = zD.internalTextureLabel)
            };
            return nD.d.Parse((() => {
              let sD = !0;
              if (zD.noMipmap && (sD = !1), zD.mirrorPlane) {
                const pD = DD._CreateMirror(zD.name, zD.renderTargetSize, wD, sD);
                return pD._waitingRenderList = zD.renderList, pD.mirrorPlane = UD.e.FromArray(zD.mirrorPlane), rD(pD), pD
              }
              if (zD.isRenderTarget && !zD.base64String) {
                let pD = null;
                if (zD.isCube) {
                  if (wD.reflectionProbes)
                    for (let DD = 0; DD < wD.reflectionProbes.length; DD++) {
                      const pD = wD.reflectionProbes[DD];
                      if (pD.name === zD.name) return pD.cubeTexture
                    }
                } else pD = DD._CreateRenderTargetTexture(zD.name, zD.renderTargetSize, wD, sD, zD._creationFlags ?? 0), pD._waitingRenderList = zD.renderList;
                return rD(pD), pD
              }
              if (zD.isVideo) {
                const KD = DD._CreateVideoTexture(pD + (zD.url || zD.name), pD + (zD.src || zD.url), wD, sD, zD.invertY, zD.samplingMode, zD.settings || {});
                return rD(KD), KD
              } {
                let LD;
                if ("string" === typeof zD.base64String && zD.base64String && !KD) {
                  const pD = {
                      buffer: zD.base64String,
                      noMipmap: !sD,
                      invertY: zD.invertY,
                      samplingMode: zD.samplingMode,
                      useSRGBBuffer: zD._useSRGBBuffer ?? !1,
                      creationFlags: zD._creationFlags ?? 0,
                      onLoad: () => {
                        rD(LD)
                      }
                    },
                    KD = zD.base64String,
                    cD = KD.startsWith("data:") ? KD.substring(5) : KD;
                  LD = DD.CreateFromBase64String("", cD, wD, pD), LD.name = zD.name
                } else {
                  let cD;
                  cD = zD.name && (zD.name.indexOf("://") > 0 || zD.name.startsWith("data:")) ? zD.name : pD + zD.name, zD.url && (zD.url.startsWith("data:") || DD.UseSerializedUrlIfAny) && (cD = zD.url);
                  const gD = {
                    noMipmap: !sD,
                    invertY: zD.invertY,
                    samplingMode: zD.samplingMode,
                    useSRGBBuffer: zD._useSRGBBuffer ?? !1,
                    creationFlags: zD._creationFlags ?? 0,
                    onLoad: () => {
                      rD(LD)
                    },
                    internalTexture: KD
                  };
                  LD = new DD(cD, wD, gD)
                }
                return LD
              }
            }), zD, wD)
          }
          static CreateFromBase64String(zD, wD, pD, sD, KD) {
            let rD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : DD.TRILINEAR_SAMPLINGMODE;
            return new DD("data:" + wD, pD, sD, KD, rD, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, zD, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(zD, wD, pD) {
            let sD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              KD = arguments.length > 4 ? arguments[4] : void 0,
              rD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              LD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : DD.TRILINEAR_SAMPLINGMODE,
              cD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              gD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              RD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              AD = arguments.length > 10 ? arguments[10] : void 0,
              UD = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== zD.substring(0, 5) && (zD = "data:" + zD), new DD(zD, pD, KD, rD, LD, cD, gD, wD, sD, RD, void 0, void 0, AD, UD)
          }
        }, (() => {
          const KD = "function" === typeof Symbol && Symbol.metadata ? Object.create(TD[Symbol.metadata] ?? null) : void 0;
          zD = [(0, sD.C)()], wD = [(0, sD.C)()], ID = [(0, sD.C)()], MD = [(0, sD.C)()], OD = [(0, sD.C)()], JD = [(0, sD.C)()], ED = [(0, sD.C)()], QD = [(0, sD.C)()], XD = [(0, sD.C)()], VD = [(0, sD.C)()], PD = [(0, sD.C)()], CD = [(0, sD.C)()], xD = [(0, sD.C)()], (0, pD.i)(DD, null, xD, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: DD => "isBlocking" in DD,
              get: DD => DD.isBlocking
            },
            metadata: KD
          }, null, bD), (0, pD.i)(null, null, zD, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: DD => "url" in DD,
              get: DD => DD.url,
              set: (DD, zD) => {
                DD.url = zD
              }
            },
            metadata: KD
          }, jD, dD), (0, pD.i)(null, null, wD, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: DD => "uOffset" in DD,
              get: DD => DD.uOffset,
              set: (DD, zD) => {
                DD.uOffset = zD
              }
            },
            metadata: KD
          }, SD, iD), (0, pD.i)(null, null, ID, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: DD => "vOffset" in DD,
              get: DD => DD.vOffset,
              set: (DD, zD) => {
                DD.vOffset = zD
              }
            },
            metadata: KD
          }, lD, WD), (0, pD.i)(null, null, MD, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: DD => "uScale" in DD,
              get: DD => DD.uScale,
              set: (DD, zD) => {
                DD.uScale = zD
              }
            },
            metadata: KD
          }, ND, ZD), (0, pD.i)(null, null, OD, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: DD => "vScale" in DD,
              get: DD => DD.vScale,
              set: (DD, zD) => {
                DD.vScale = zD
              }
            },
            metadata: KD
          }, yD, kD), (0, pD.i)(null, null, JD, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: DD => "uAng" in DD,
              get: DD => DD.uAng,
              set: (DD, zD) => {
                DD.uAng = zD
              }
            },
            metadata: KD
          }, mD, eD), (0, pD.i)(null, null, ED, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: DD => "vAng" in DD,
              get: DD => DD.vAng,
              set: (DD, zD) => {
                DD.vAng = zD
              }
            },
            metadata: KD
          }, oD, aD), (0, pD.i)(null, null, QD, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: DD => "wAng" in DD,
              get: DD => DD.wAng,
              set: (DD, zD) => {
                DD.wAng = zD
              }
            },
            metadata: KD
          }, uD, vD), (0, pD.i)(null, null, XD, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: DD => "uRotationCenter" in DD,
              get: DD => DD.uRotationCenter,
              set: (DD, zD) => {
                DD.uRotationCenter = zD
              }
            },
            metadata: KD
          }, tD, FD), (0, pD.i)(null, null, VD, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: DD => "vRotationCenter" in DD,
              get: DD => DD.vRotationCenter,
              set: (DD, zD) => {
                DD.vRotationCenter = zD
              }
            },
            metadata: KD
          }, YD, HD), (0, pD.i)(null, null, PD, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: DD => "wRotationCenter" in DD,
              get: DD => DD.wRotationCenter,
              set: (DD, zD) => {
                DD.wRotationCenter = zD
              }
            },
            metadata: KD
          }, qD, Dz), (0, pD.i)(null, null, CD, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: DD => "homogeneousRotationInUVTransform" in DD,
              get: DD => DD.homogeneousRotationInUVTransform,
              set: (DD, zD) => {
                DD.homogeneousRotationInUVTransform = zD
              }
            },
            metadata: KD
          }, zz, wz), KD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: KD
          })
        })(), DD.SerializeBuffers = !0, DD.ForceSerializeBuffers = !1, DD.OnTextureLoadErrorObservable = new KD.b, DD._SerializeInternalTextureUniqueId = !1, DD._CubeTextureParser = (DD, zD, wD) => {
          throw (0, gD.j)("CubeTexture")
        }, DD._CreateMirror = (DD, zD, wD, pD) => {
          throw (0, gD.j)("MirrorTexture")
        }, DD._CreateRenderTargetTexture = (DD, zD, wD, pD, sD) => {
          throw (0, gD.j)("RenderTargetTexture")
        }, DD.NEAREST_SAMPLINGMODE = 1, DD.NEAREST_NEAREST_MIPLINEAR = 8, DD.BILINEAR_SAMPLINGMODE = 2, DD.LINEAR_LINEAR_MIPNEAREST = 11, DD.TRILINEAR_SAMPLINGMODE = 3, DD.LINEAR_LINEAR_MIPLINEAR = 3, DD.NEAREST_NEAREST_MIPNEAREST = 4, DD.NEAREST_LINEAR_MIPNEAREST = 5, DD.NEAREST_LINEAR_MIPLINEAR = 6, DD.NEAREST_LINEAR = 7, DD.NEAREST_NEAREST = 1, DD.LINEAR_NEAREST_MIPNEAREST = 9, DD.LINEAR_NEAREST_MIPLINEAR = 10, DD.LINEAR_LINEAR = 2, DD.LINEAR_NEAREST = 12, DD.EXPLICIT_MODE = 0, DD.SPHERICAL_MODE = 1, DD.PLANAR_MODE = 2, DD.CUBIC_MODE = 3, DD.PROJECTION_MODE = 4, DD.SKYBOX_MODE = 5, DD.INVCUBIC_MODE = 6, DD.EQUIRECTANGULAR_MODE = 7, DD.FIXED_EQUIRECTANGULAR_MODE = 8, DD.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, DD.CLAMP_ADDRESSMODE = 0, DD.WRAP_ADDRESSMODE = 1, DD.MIRROR_ADDRESSMODE = 2, DD.UseSerializedUrlIfAny = !1, DD
      })(),
      OD = !1;

    function JD() {
      OD || (OD = !0, (0, cD.i)("BABYLON.Texture", MD), nD.d._TextureParser = MD.Parse)
    }
  },
  39935: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD
    });
    class pD {
      constructor(DD, zD) {
        this.width = DD, this.height = zD
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
      pC(DD) {
        this.width = DD.width, this.height = DD.height
      }
      Z2(DD, zD) {
        return this.width = DD, this.height = zD, this
      }
      set(DD, zD) {
        return this.Z2(DD, zD)
      }
      multiplyByFloats(DD, zD) {
        return new pD(this.width * DD, this.height * zD)
      }
      clone() {
        return new pD(this.width, this.height)
      }
      equals(DD) {
        return !!DD && (this.width === DD.width && this.height === DD.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new pD(0, 0)
      }
      add(DD) {
        return new pD(this.width + DD.width, this.height + DD.height)
      }
      subtract(DD) {
        return new pD(this.width - DD.width, this.height - DD.height)
      }
      scale(DD) {
        return new pD(this.width * DD, this.height * DD)
      }
      static Lerp(DD, zD, wD) {
        const sD = DD.width + (zD.width - DD.width) * wD,
          KD = DD.height + (zD.height - DD.height) * wD;
        return new pD(sD, KD)
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);