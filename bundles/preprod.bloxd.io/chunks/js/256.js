export const id = 256;
export const ids = [256];
export const modules = {
  40256: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => QC
    });
    let QC = !1
  },
  39803: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => gC
    });
    var QC = ZC(39811),
      wC = ZC(39818),
      bC = ZC(36987),
      nC = ZC(36963),
      fC = ZC(36985),
      oC = ZC(37731),
      qC = ZC(39833);
    class FC {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(CC) {
        this._wrapU = CC
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(CC) {
        this._wrapV = CC
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(CC) {
        this._texture && (this._texture.isCube = CC)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(CC) {
        this._texture && (this._texture.is3D = CC)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(CC) {
        this._texture && (this._texture.is2DArray = CC)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(CC) {
        return void 0 !== CC?.shareDepth
      }
      constructor(CC) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = qC.d.Zero(), this._cachedBaseSize = qC.d.Zero(), this._initialSamplingMode = 2, this._texture = FC._IsRenderTargetWrapper(CC) ? CC.texture : CC, this._texture && (this._engine = this._texture.mg(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(CC, this._texture, this._texture.generateMipMaps && zC)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var WC, NC = ZC(39842),
      MC = ZC(39694);
    let gC = (() => {
      var CC;
      let zC, ZC, qC, WC, MC, gC, SC, pC, PC, GC, RC, AC, xC, JC, IC, iC, vC, eC, hC, KC, YC, dC, mC, HC, EC, lC = FC,
        XC = [],
        cC = [],
        uC = [],
        rC = [],
        sC = [],
        TC = [],
        aC = [],
        tC = [],
        DC = [],
        jC = [],
        yC = [],
        LC = [],
        UC = [],
        BC = [],
        OC = [],
        kC = [],
        VC = [],
        Cz = [],
        zz = [],
        Zz = [],
        Qz = [],
        wz = [],
        bz = [],
        nz = [],
        fz = [],
        oz = [],
        qz = [],
        Fz = [],
        Wz = [],
        Nz = [],
        Mz = [];
      return CC = class extends lC {
        set hasAlpha(CC) {
          this._hasAlpha = CC
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(CC) {
          this._getAlphaFromRGB !== CC && (this._getAlphaFromRGB = CC, this._scene && this._scene.markAllMaterialsAsDirty(1, (CC => CC.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(CC) {
          this._coordinatesIndex !== CC && (this._coordinatesIndex = CC, this._scene && this._scene.markAllMaterialsAsDirty(1, (CC => CC.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(CC) {
          this._coordinatesMode !== CC && (this._coordinatesMode = CC, this._scene && this._scene.markAllMaterialsAsDirty(1, (CC => CC.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(CC) {
          this._wrapU = CC
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(CC) {
          this._wrapV = CC
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(CC) {
          this._texture ? this._texture.isCube = CC : this._isCube = CC
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(CC) {
          this._texture && (this._texture.is3D = CC)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(CC) {
          this._texture && (this._texture.is2DArray = CC)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(CC) {
          if (this._texture) {
            if (this._texture._gammaSpace === CC) return;
            this._texture._gammaSpace = CC
          } else {
            if (this._gammaSpace === CC) return;
            this._gammaSpace = CC
          }
          this.Km()?.markAllMaterialsAsDirty(1, (CC => CC.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(CC) {
          CC !== this.isRGBD && (this._texture && (this._texture._isRGBD = CC), this.Km()?.markAllMaterialsAsDirty(1, (CC => CC.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(CC) {
          this._texture && (this._texture._lodGenerationOffset = CC)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(CC) {
          this._texture && (this._texture._lodGenerationScale = CC)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(CC) {
          this._texture && (this._texture._linearSpecularLOD = CC)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(CC) {
          this._texture && (this._texture._irradianceTexture = CC)
        }
        get uid() {
          return this._uid || (this._uid = (0, oC.b)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(CC) {
          this._onDisposeObserver && this.Tm.remove(this._onDisposeObserver), this._onDisposeObserver = this.Tm.add(CC)
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
        constructor(zC) {
          let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, QC.n)(this, XC), (0, QC.n)(this, cC, void 0)), this.name = ((0, QC.n)(this, uC), (0, QC.n)(this, rC, void 0)), this.displayName = ((0, QC.n)(this, sC), (0, QC.n)(this, TC, void 0)), this.metadata = ((0, QC.n)(this, aC), (0, QC.n)(this, tC, null)), this._internalMetadata = (0, QC.n)(this, DC), this.reservedDataStore = null, this._hasAlpha = (0, QC.n)(this, jC, !1), this._getAlphaFromRGB = ((0, QC.n)(this, yC), (0, QC.n)(this, LC, !1)), this.level = ((0, QC.n)(this, UC), (0, QC.n)(this, BC, 1)), this._coordinatesIndex = ((0, QC.n)(this, OC), (0, QC.n)(this, kC, 0)), this.optimizeUVAllocation = ((0, QC.n)(this, VC), (0, QC.n)(this, Cz, !0)), this._coordinatesMode = ((0, QC.n)(this, zz), (0, QC.n)(this, Zz, 0)), this.wrapR = ((0, QC.n)(this, Qz), (0, QC.n)(this, wz, 1)), this.anisotropicFilteringLevel = ((0, QC.n)(this, bz), (0, QC.n)(this, nz, CC.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, QC.n)(this, fz), !1), this._gammaSpace = !0, this.invertZ = (0, QC.n)(this, oz, !1), this.lodLevelInAlpha = ((0, QC.n)(this, qz), (0, QC.n)(this, Fz, !1)), this._dominantDirection = ((0, QC.n)(this, Wz), null), this.isRenderTarget = (0, QC.n)(this, Nz, !1), this._prefiltered = ((0, QC.n)(this, Mz), !1), this._forceSerialize = !1, this.animations = [], this.Tm = new bC.d, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, zC ? CC._IsScene(zC) ? this._scene = zC : this._engine = zC : this._scene = fC.c.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.mg()), this._texture = ZC, this._uid = null
        }
        Km() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return nC.b.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return nC.b.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(CC) {}
        get canRescale() {
          return !1
        }
        _getFromCache(CC, zC, ZC, QC, wC, bC) {
          const nC = this._getEngine();
          if (!nC) return null;
          const fC = nC._getUseSRGBBuffer(!!wC, zC),
            oC = nC.getLoadedTexturesCache();
          for (let qC = 0; qC < oC.length; qC++) {
            const nC = oC[qC];
            if ((void 0 === wC || fC === nC._useSRGBBuffer) && (void 0 === QC || QC === nC.invertY) && nC.url === CC && nC.generateMipMaps === !zC && (!ZC || ZC === nC.samplingMode) && (void 0 === bC || bC === nC.isCube)) return nC.incrementReferences(), nC
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
          const CC = this.Km();
          CC && CC.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            QC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            nC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            fC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            oC = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const qC = this._getEngine();
          if (!qC) return null;
          const FC = this.getSize();
          let WC = FC.width,
            NC = FC.height;
          0 !== zC && (WC /= Math.pow(2, zC), NC /= Math.pow(2, zC), WC = Math.round(WC), NC = Math.round(NC)), fC = Math.min(WC, fC), oC = Math.min(NC, oC);
          try {
            return this._texture.isCube || this._texture.is2DArray ? qC._readTexturePixels(this._texture, fC, oC, CC, zC, ZC, QC, wC, bC, nC) : qC._readTexturePixels(this._texture, fC, oC, -1, zC, ZC, QC, wC, bC, nC)
          } catch (MC) {
            return null
          }
        }
        _readPixelsSync() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            QC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const bC = this.getSize();
          let nC = bC.width,
            fC = bC.height;
          const oC = this._getEngine();
          if (!oC) return null;
          0 != zC && (nC /= Math.pow(2, zC), fC /= Math.pow(2, zC), nC = Math.round(nC), fC = Math.round(fC));
          try {
            return this._texture.isCube ? oC._readTexturePixelsSync(this._texture, nC, fC, CC, zC, ZC, QC, wC) : oC._readTexturePixelsSync(this._texture, nC, fC, -1, zC, ZC, QC, wC)
          } catch (qC) {
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
            const CC = this._scene.textures.indexOf(this);
            if (CC >= 0 && this._scene.textures.splice(CC, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const CC = this._parentContainer.textures.indexOf(this);
              CC > -1 && this._parentContainer.textures.splice(CC, 1), this._parentContainer = null
            }
          }
          this.Tm.notifyObservers(this), this.Tm.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !CC) return null;
          const zC = NC.d.Serialize(this);
          return NC.d.AppendSerializedAnimations(this, zC), zC
        }
        static WhenAllReady(CC, zC) {
          let ZC = CC.length;
          if (0 !== ZC)
            for (let QC = 0; QC < CC.length; QC++) {
              const wC = CC[QC];
              if (wC.isReady()) 0 === --ZC && zC();
              else {
                const CC = wC.onLoadObservable;
                CC ? CC.addOnce((() => {
                  0 === --ZC && zC()
                })) : 0 === --ZC && zC()
              }
            } else zC()
        }
        static _IsScene(CC) {
          return "Scene" === CC.getClassName()
        }
      }, (() => {
        const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(lC[Symbol.metadata] ?? null) : void 0;
        zC = [(0, wC.M)()], ZC = [(0, wC.M)()], qC = [(0, wC.M)()], WC = [(0, wC.M)()], MC = [(0, wC.M)("hasAlpha")], gC = [(0, wC.M)("getAlphaFromRGB")], SC = [(0, wC.M)()], pC = [(0, wC.M)("coordinatesIndex")], PC = [(0, wC.M)()], GC = [(0, wC.M)("coordinatesMode")], RC = [(0, wC.M)()], AC = [(0, wC.M)()], xC = [(0, wC.M)()], JC = [(0, wC.M)()], IC = [(0, wC.M)()], iC = [(0, wC.M)()], vC = [(0, wC.M)()], eC = [(0, wC.M)()], hC = [(0, wC.M)()], KC = [(0, wC.M)()], YC = [(0, wC.M)()], dC = [(0, wC.M)()], mC = [(0, wC.M)()], HC = [(0, wC.B)()], EC = [(0, wC.M)()], (0, QC.j)(CC, null, RC, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: CC => "wrapU" in CC,
            get: CC => CC.wrapU
          },
          metadata: bC
        }, null, XC), (0, QC.j)(CC, null, AC, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: CC => "wrapV" in CC,
            get: CC => CC.wrapV
          },
          metadata: bC
        }, null, XC), (0, QC.j)(CC, null, IC, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: CC => "isCube" in CC,
            get: CC => CC.isCube
          },
          metadata: bC
        }, null, XC), (0, QC.j)(CC, null, iC, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: CC => "is3D" in CC,
            get: CC => CC.is3D
          },
          metadata: bC
        }, null, XC), (0, QC.j)(CC, null, vC, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: CC => "is2DArray" in CC,
            get: CC => CC.is2DArray
          },
          metadata: bC
        }, null, XC), (0, QC.j)(CC, null, eC, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: CC => "gammaSpace" in CC,
            get: CC => CC.gammaSpace
          },
          metadata: bC
        }, null, XC), (0, QC.j)(CC, null, YC, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: CC => "lodGenerationOffset" in CC,
            get: CC => CC.lodGenerationOffset
          },
          metadata: bC
        }, null, XC), (0, QC.j)(CC, null, dC, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: CC => "lodGenerationScale" in CC,
            get: CC => CC.lodGenerationScale
          },
          metadata: bC
        }, null, XC), (0, QC.j)(CC, null, mC, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: CC => "linearSpecularLOD" in CC,
            get: CC => CC.linearSpecularLOD
          },
          metadata: bC
        }, null, XC), (0, QC.j)(CC, null, HC, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "irradianceTexture" in CC,
            get: CC => CC.irradianceTexture
          },
          metadata: bC
        }, null, XC), (0, QC.j)(null, null, zC, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: CC => "uniqueId" in CC,
            get: CC => CC.uniqueId,
            set: (CC, zC) => {
              CC.uniqueId = zC
            }
          },
          metadata: bC
        }, cC, uC), (0, QC.j)(null, null, ZC, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: CC => "name" in CC,
            get: CC => CC.name,
            set: (CC, zC) => {
              CC.name = zC
            }
          },
          metadata: bC
        }, rC, sC), (0, QC.j)(null, null, qC, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: CC => "displayName" in CC,
            get: CC => CC.displayName,
            set: (CC, zC) => {
              CC.displayName = zC
            }
          },
          metadata: bC
        }, TC, aC), (0, QC.j)(null, null, WC, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: CC => "metadata" in CC,
            get: CC => CC.metadata,
            set: (CC, zC) => {
              CC.metadata = zC
            }
          },
          metadata: bC
        }, tC, DC), (0, QC.j)(null, null, MC, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: CC => "_hasAlpha" in CC,
            get: CC => CC._hasAlpha,
            set: (CC, zC) => {
              CC._hasAlpha = zC
            }
          },
          metadata: bC
        }, jC, yC), (0, QC.j)(null, null, gC, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: CC => "_getAlphaFromRGB" in CC,
            get: CC => CC._getAlphaFromRGB,
            set: (CC, zC) => {
              CC._getAlphaFromRGB = zC
            }
          },
          metadata: bC
        }, LC, UC), (0, QC.j)(null, null, SC, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: CC => "level" in CC,
            get: CC => CC.level,
            set: (CC, zC) => {
              CC.level = zC
            }
          },
          metadata: bC
        }, BC, OC), (0, QC.j)(null, null, pC, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: CC => "_coordinatesIndex" in CC,
            get: CC => CC._coordinatesIndex,
            set: (CC, zC) => {
              CC._coordinatesIndex = zC
            }
          },
          metadata: bC
        }, kC, VC), (0, QC.j)(null, null, PC, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: CC => "optimizeUVAllocation" in CC,
            get: CC => CC.optimizeUVAllocation,
            set: (CC, zC) => {
              CC.optimizeUVAllocation = zC
            }
          },
          metadata: bC
        }, Cz, zz), (0, QC.j)(null, null, GC, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: CC => "_coordinatesMode" in CC,
            get: CC => CC._coordinatesMode,
            set: (CC, zC) => {
              CC._coordinatesMode = zC
            }
          },
          metadata: bC
        }, Zz, Qz), (0, QC.j)(null, null, xC, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: CC => "wrapR" in CC,
            get: CC => CC.wrapR,
            set: (CC, zC) => {
              CC.wrapR = zC
            }
          },
          metadata: bC
        }, wz, bz), (0, QC.j)(null, null, JC, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: CC => "anisotropicFilteringLevel" in CC,
            get: CC => CC.anisotropicFilteringLevel,
            set: (CC, zC) => {
              CC.anisotropicFilteringLevel = zC
            }
          },
          metadata: bC
        }, nz, fz), (0, QC.j)(null, null, hC, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: CC => "invertZ" in CC,
            get: CC => CC.invertZ,
            set: (CC, zC) => {
              CC.invertZ = zC
            }
          },
          metadata: bC
        }, oz, qz), (0, QC.j)(null, null, KC, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: CC => "lodLevelInAlpha" in CC,
            get: CC => CC.lodLevelInAlpha,
            set: (CC, zC) => {
              CC.lodLevelInAlpha = zC
            }
          },
          metadata: bC
        }, Fz, Wz), (0, QC.j)(null, null, EC, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: CC => "isRenderTarget" in CC,
            get: CC => CC.isRenderTarget,
            set: (CC, zC) => {
              CC.isRenderTarget = zC
            }
          },
          metadata: bC
        }, Nz, Mz), bC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bC
        })
      })(), CC.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, CC
    })();
    (WC = gC.prototype).forceSphericalPolynomialsRecompute ?? (WC.forceSphericalPolynomialsRecompute = (0, MC.f)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(gC.prototype, "sphericalPolynomial") || Object.defineProperty(gC.prototype, "sphericalPolynomial", (0, MC.d)("BaseTexture", "sphericalPolynomial"))
  },
  40303: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => xC,
      h: () => RC
    });
    var QC = ZC(39811),
      wC = ZC(39818),
      bC = ZC(36987),
      nC = ZC(36963),
      fC = ZC(39803),
      oC = ZC(37002),
      qC = ZC(39694),
      FC = ZC(39712),
      WC = ZC(39921),
      NC = ZC(37596),
      MC = ZC(39878);

    function gC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const QC = zC.width,
        wC = zC.height;
      if (CC instanceof Float32Array) {
        let zC = CC.byteLength / CC.BYTES_PER_ELEMENT;
        const ZC = new Uint8Array(zC);
        for (; --zC >= 0;) {
          let QC = CC[zC];
          QC < 0 ? QC = 0 : QC > 1 && (QC = 1), ZC[zC] = 255 * QC
        }
        CC = ZC
      }
      const bC = document.createElement("canvas");
      bC.width = QC, bC.height = wC;
      const nC = bC.getContext("2d");
      if (!nC) return null;
      const fC = nC.createImageData(QC, wC);
      if (fC.data.set(CC), nC.putImageData(fC, 0, 0), ZC) {
        const CC = document.createElement("canvas");
        CC.width = QC, CC.height = wC;
        const zC = CC.getContext("2d");
        return zC ? (zC.translate(0, wC), zC.scale(1, -1), zC.drawImage(bC, 0, 0), CC.toDataURL("image/png")) : null
      }
      return bC.toDataURL("image/png")
    }

    function SC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const QC = CC.getInternalTexture();
      if (!QC) return null;
      const wC = CC._readPixelsSync(zC, ZC);
      return wC ? gC(wC, CC.getSize(), QC.invertY) : null
    }
    async function pC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const QC = CC.getInternalTexture();
      if (!QC) return null;
      const wC = await CC.readPixels(zC, ZC);
      return wC ? gC(wC, CC.getSize(), QC.invertY) : null
    }
    var PC = ZC(40256),
      GC = ZC(39842);
    let RC = (() => {
        var CC;
        let zC, ZC, gC, RC, AC, xC, JC, IC, iC, vC, eC, hC, KC, YC = fC.b,
          dC = [],
          mC = [],
          HC = [],
          EC = [],
          lC = [],
          XC = [],
          cC = [],
          uC = [],
          rC = [],
          sC = [],
          TC = [],
          aC = [],
          tC = [],
          DC = [],
          jC = [],
          yC = [],
          LC = [],
          UC = [],
          BC = [],
          OC = [],
          kC = [],
          VC = [],
          Cz = [],
          zz = [],
          Zz = [];
        return CC = class extends YC {
          static _CreateVideoTexture(zC, ZC, QC) {
            arguments.length > 5 && void 0 !== arguments[5] || CC.TRILINEAR_SAMPLINGMODE;
            throw (0, qC.i)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(CC) {
            this._isBlocking = CC
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(zC, ZC, wC, nC) {
            let fC, oC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : CC.TRILINEAR_SAMPLINGMODE,
              qC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              WC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              NC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              MC = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              gC = arguments.length > 9 ? arguments[9] : void 0,
              SC = arguments.length > 10 ? arguments[10] : void 0,
              pC = arguments.length > 11 ? arguments[11] : void 0,
              GC = arguments.length > 12 ? arguments[12] : void 0,
              RC = arguments.length > 13 ? arguments[13] : void 0;
            super(ZC), this.url = ((0, QC.n)(this, dC), (0, QC.n)(this, mC, null)), this.uOffset = ((0, QC.n)(this, HC), (0, QC.n)(this, EC, 0)), this.vOffset = ((0, QC.n)(this, lC), (0, QC.n)(this, XC, 0)), this.uScale = ((0, QC.n)(this, cC), (0, QC.n)(this, uC, 1)), this.vScale = ((0, QC.n)(this, rC), (0, QC.n)(this, sC, 1)), this.uAng = ((0, QC.n)(this, TC), (0, QC.n)(this, aC, 0)), this.vAng = ((0, QC.n)(this, tC), (0, QC.n)(this, DC, 0)), this.wAng = ((0, QC.n)(this, jC), (0, QC.n)(this, yC, 0)), this.uRotationCenter = ((0, QC.n)(this, LC), (0, QC.n)(this, UC, .5)), this.vRotationCenter = ((0, QC.n)(this, BC), (0, QC.n)(this, OC, .5)), this.wRotationCenter = ((0, QC.n)(this, kC), (0, QC.n)(this, VC, .5)), this.homogeneousRotationInUVTransform = ((0, QC.n)(this, Cz), (0, QC.n)(this, zz, !1)), this.inspectableCustomProperties = ((0, QC.n)(this, Zz), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new bC.d, this._isBlocking = !0, this.name = zC || "", this.url = zC;
            let AC = !1,
              xC = null,
              JC = !0;
            "object" === typeof wC && null !== wC ? (fC = wC.noMipmap ?? !1, nC = wC.invertY ?? !PC.d, oC = wC.samplingMode ?? CC.TRILINEAR_SAMPLINGMODE, qC = wC.onLoad ?? null, WC = wC.onError ?? null, NC = wC.buffer ?? null, MC = wC.deleteBuffer ?? !1, gC = wC.format, SC = wC.mimeType, pC = wC.loaderOptions, GC = wC.creationFlags, AC = wC.useSRGBBuffer ?? !1, xC = wC.internalTexture ?? null, JC = wC.gammaSpace ?? JC, RC = wC.forcedExtension ?? RC) : fC = !!wC, this._gammaSpace = JC, this._noMipmap = fC, this._invertY = void 0 === nC ? !PC.d : nC, this._initialSamplingMode = oC, this._buffer = NC, this._deleteBuffer = MC, this._mimeType = SC, this._loaderOptions = pC, this._creationFlags = GC, this._useSRGBBuffer = AC, this._forcedExtension = RC, void 0 !== gC && (this._format = gC);
            const IC = this.Km(),
              iC = this._getEngine();
            if (!iC) return;
            iC.onBeforeTextureInitObservable.notifyObservers(this);
            const vC = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), qC && qC(), !this.isBlocking && IC && IC.resetCachedMaterial()
              },
              eC = (zC, ZC) => {
                this._loadingError = !0, this._errorObject = {
                  message: zC,
                  exception: ZC
                }, WC && WC(zC, ZC), CC.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !xC) return this._delayedOnLoad = vC, void(this._delayedOnError = eC);
            if (this._texture = xC ?? this._getFromCache(this.url, fC, oC, this._invertY, AC, this.isCube), this._texture)
              if (this._texture.isReady) FC.d.SetImmediate((() => vC()));
              else {
                const CC = this._texture.onLoadedObservable.add(vC);
                this._texture.onErrorObservable.add((zC => {
                  eC(zC.message, zC.exception), this._texture?.onLoadedObservable.remove(CC)
                }))
              }
            else if (IC && IC.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = vC, this._delayedOnError = eC;
            else {
              try {
                this._texture = iC.createTexture(this.url, fC, this._invertY, IC, oC, vC, eC, this._buffer, void 0, this._format, this._forcedExtension, SC, pC, GC, AC)
              } catch (hC) {
                throw eC("error loading", hC), hC
              }
              MC && (this._buffer = null)
            }
          }
          updateURL(CC) {
            let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              ZC = arguments.length > 2 ? arguments[2] : void 0,
              QC = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.Km().markAllMaterialsAsDirty(1, (CC => CC.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = CC), this.url = CC, this._buffer = zC, this._forcedExtension = QC, this.delayLoadState = 4;
            const wC = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              wC ? wC() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), ZC && ZC()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const CC = this.Km();
            if (!CC) return;
            let zC = this.url;
            !zC && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (zC = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(zC, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? FC.d.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = CC.mg().createTexture(zC, this._noMipmap, this._invertY, CC, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(CC, zC, ZC, QC) {
            CC *= this._cachedUScale, zC *= this._cachedVScale, CC -= this.uRotationCenter * this._cachedUScale, zC -= this.vRotationCenter * this._cachedVScale, ZC -= this.wRotationCenter, nC.r.TransformCoordinatesFromFloatsToRef(CC, zC, ZC, this._rowGenerationMatrix, QC), QC.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, QC.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, QC.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * CC === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * CC, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = nC.b.Zero(), this._rowGenerationMatrix = new nC.b, this._t0 = nC.r.Zero(), this._t1 = nC.r.Zero(), this._t2 = nC.r.Zero()), nC.b.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (nC.b.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, nC.j.Matrix[0]), nC.b.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, nC.j.Matrix[1]), nC.b.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, nC.j.Matrix[2]), nC.b.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, nC.j.Matrix[3]), nC.j.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(nC.j.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(nC.j.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(nC.j.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.RQC(this._t0), this._t2.RQC(this._t0), nC.b.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const zC = this.Km();
            if (!zC) return this._cachedTextureMatrix;
            const ZC = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && ZC !== this._cachedIdentity3x2 && zC.markAllMaterialsAsDirty(1, (CC => CC.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const zC = this.Km();
            if (!zC) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== CC.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === zC.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = nC.b.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = nC.b.Zero());
            const ZC = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case CC.PLANAR_MODE:
                nC.b.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case CC.PROJECTION_MODE: {
                nC.b.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const CC = zC.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = CC.updateFlag, CC.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                nC.b.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return ZC && zC.markAllMaterialsAsDirty(1, (CC => CC.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const zC = {
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
            return GC.d.Clone((() => new CC(this._texture ? this._texture.url : null, this.Km(), zC)), this)
          }
          serialize() {
            const zC = this.name;
            CC.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const ZC = super.serialize(CC._SerializeInternalTextureUniqueId);
            if (!ZC) return null;
            if (CC.SerializeBuffers || CC.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) ZC.base64String = this._buffer, ZC.name = ZC.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const CC = this.mimeType || "image/png";
              ZC.base64String = `data:${CC};base64,${(0,MC.i)(this._buffer)}`
            } else(CC.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (ZC.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? SC(this) : pC(this));
            return ZC.invertY = this._invertY, ZC.samplingMode = this.samplingMode, ZC._creationFlags = this._creationFlags, ZC._useSRGBBuffer = this._useSRGBBuffer, CC._SerializeInternalTextureUniqueId && (ZC.internalTextureUniqueId = this._texture?.uniqueId), ZC.internalTextureLabel = this._texture?.label, ZC.noMipmap = this._noMipmap, this.name = zC, ZC
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(zC, ZC, QC) {
            if (zC.customType) {
              const CC = WC.d.Instantiate(zC.customType).Parse(zC, ZC, QC);
              return zC.samplingMode && CC.updateSamplingMode && CC._samplingMode && CC._samplingMode !== zC.samplingMode && CC.updateSamplingMode(zC.samplingMode), CC
            }
            if (zC.isCube && !zC.isRenderTarget) return CC._CubeTextureParser(zC, ZC, QC);
            const wC = void 0 !== zC.internalTextureUniqueId;
            if (!zC.name && !zC.isRenderTarget && !wC) return null;
            let bC;
            if (wC) {
              const CC = ZC.mg().getLoadedTexturesCache();
              for (const ZC of CC)
                if (ZC.uniqueId === zC.internalTextureUniqueId) {
                  bC = ZC;
                  break
                }
            }
            const nC = CC => {
              if (CC && CC._texture && (CC._texture._cachedWrapU = null, CC._texture._cachedWrapV = null, CC._texture._cachedWrapR = null), zC.samplingMode) {
                const ZC = zC.samplingMode;
                CC && CC.samplingMode !== ZC && CC.updateSamplingMode(ZC)
              }
              if (CC && zC.animations)
                for (let ZC = 0; ZC < zC.animations.length; ZC++) {
                  const QC = zC.animations[ZC],
                    wC = (0, oC.c)("BABYLON.Animation");
                  wC && CC.animations.push(wC.Parse(QC))
                }
              CC && CC._texture && (wC && !bC && CC._texture._setUniqueId(zC.internalTextureUniqueId), CC._texture.label = zC.internalTextureLabel)
            };
            return GC.d.Parse((() => {
              let wC = !0;
              if (zC.noMipmap && (wC = !1), zC.mirrorPlane) {
                const QC = CC._CreateMirror(zC.name, zC.renderTargetSize, ZC, wC);
                return QC._waitingRenderList = zC.renderList, QC.mirrorPlane = NC.d.FromArray(zC.mirrorPlane), nC(QC), QC
              }
              if (zC.isRenderTarget && !zC.base64String) {
                let QC = null;
                if (zC.isCube) {
                  if (ZC.reflectionProbes)
                    for (let CC = 0; CC < ZC.reflectionProbes.length; CC++) {
                      const QC = ZC.reflectionProbes[CC];
                      if (QC.name === zC.name) return QC.cubeTexture
                    }
                } else QC = CC._CreateRenderTargetTexture(zC.name, zC.renderTargetSize, ZC, wC, zC._creationFlags ?? 0), QC._waitingRenderList = zC.renderList;
                return nC(QC), QC
              }
              if (zC.isVideo) {
                const bC = CC._CreateVideoTexture(QC + (zC.url || zC.name), QC + (zC.src || zC.url), ZC, wC, zC.invertY, zC.samplingMode, zC.settings || {});
                return nC(bC), bC
              } {
                let fC;
                if ("string" === typeof zC.base64String && zC.base64String && !bC) {
                  const QC = {
                      buffer: zC.base64String,
                      noMipmap: !wC,
                      invertY: zC.invertY,
                      samplingMode: zC.samplingMode,
                      useSRGBBuffer: zC._useSRGBBuffer ?? !1,
                      creationFlags: zC._creationFlags ?? 0,
                      onLoad: () => {
                        nC(fC)
                      }
                    },
                    bC = zC.base64String,
                    oC = bC.startsWith("data:") ? bC.substring(5) : bC;
                  fC = CC.CreateFromBase64String("", oC, ZC, QC), fC.name = zC.name
                } else {
                  let oC;
                  oC = zC.name && (zC.name.indexOf("://") > 0 || zC.name.startsWith("data:")) ? zC.name : QC + zC.name, zC.url && (zC.url.startsWith("data:") || CC.UseSerializedUrlIfAny) && (oC = zC.url);
                  const qC = {
                    noMipmap: !wC,
                    invertY: zC.invertY,
                    samplingMode: zC.samplingMode,
                    useSRGBBuffer: zC._useSRGBBuffer ?? !1,
                    creationFlags: zC._creationFlags ?? 0,
                    onLoad: () => {
                      nC(fC)
                    },
                    internalTexture: bC
                  };
                  fC = new CC(oC, ZC, qC)
                }
                return fC
              }
            }), zC, ZC)
          }
          static CreateFromBase64String(zC, ZC, QC, wC, bC) {
            let nC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : CC.TRILINEAR_SAMPLINGMODE;
            return new CC("data:" + ZC, QC, wC, bC, nC, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, zC, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(zC, ZC, QC) {
            let wC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              bC = arguments.length > 4 ? arguments[4] : void 0,
              nC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              fC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : CC.TRILINEAR_SAMPLINGMODE,
              oC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              qC = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              FC = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              WC = arguments.length > 10 ? arguments[10] : void 0,
              NC = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== zC.substring(0, 5) && (zC = "data:" + zC), new CC(zC, QC, bC, nC, fC, oC, qC, ZC, wC, FC, void 0, void 0, WC, NC)
          }
        }, (() => {
          const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(YC[Symbol.metadata] ?? null) : void 0;
          zC = [(0, wC.M)()], ZC = [(0, wC.M)()], gC = [(0, wC.M)()], RC = [(0, wC.M)()], AC = [(0, wC.M)()], xC = [(0, wC.M)()], JC = [(0, wC.M)()], IC = [(0, wC.M)()], iC = [(0, wC.M)()], vC = [(0, wC.M)()], eC = [(0, wC.M)()], hC = [(0, wC.M)()], KC = [(0, wC.M)()], (0, QC.j)(CC, null, KC, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: CC => "isBlocking" in CC,
              get: CC => CC.isBlocking
            },
            metadata: bC
          }, null, dC), (0, QC.j)(null, null, zC, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: CC => "url" in CC,
              get: CC => CC.url,
              set: (CC, zC) => {
                CC.url = zC
              }
            },
            metadata: bC
          }, mC, HC), (0, QC.j)(null, null, ZC, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: CC => "uOffset" in CC,
              get: CC => CC.uOffset,
              set: (CC, zC) => {
                CC.uOffset = zC
              }
            },
            metadata: bC
          }, EC, lC), (0, QC.j)(null, null, gC, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: CC => "vOffset" in CC,
              get: CC => CC.vOffset,
              set: (CC, zC) => {
                CC.vOffset = zC
              }
            },
            metadata: bC
          }, XC, cC), (0, QC.j)(null, null, RC, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: CC => "uScale" in CC,
              get: CC => CC.uScale,
              set: (CC, zC) => {
                CC.uScale = zC
              }
            },
            metadata: bC
          }, uC, rC), (0, QC.j)(null, null, AC, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: CC => "vScale" in CC,
              get: CC => CC.vScale,
              set: (CC, zC) => {
                CC.vScale = zC
              }
            },
            metadata: bC
          }, sC, TC), (0, QC.j)(null, null, xC, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: CC => "uAng" in CC,
              get: CC => CC.uAng,
              set: (CC, zC) => {
                CC.uAng = zC
              }
            },
            metadata: bC
          }, aC, tC), (0, QC.j)(null, null, JC, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: CC => "vAng" in CC,
              get: CC => CC.vAng,
              set: (CC, zC) => {
                CC.vAng = zC
              }
            },
            metadata: bC
          }, DC, jC), (0, QC.j)(null, null, IC, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: CC => "wAng" in CC,
              get: CC => CC.wAng,
              set: (CC, zC) => {
                CC.wAng = zC
              }
            },
            metadata: bC
          }, yC, LC), (0, QC.j)(null, null, iC, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: CC => "uRotationCenter" in CC,
              get: CC => CC.uRotationCenter,
              set: (CC, zC) => {
                CC.uRotationCenter = zC
              }
            },
            metadata: bC
          }, UC, BC), (0, QC.j)(null, null, vC, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: CC => "vRotationCenter" in CC,
              get: CC => CC.vRotationCenter,
              set: (CC, zC) => {
                CC.vRotationCenter = zC
              }
            },
            metadata: bC
          }, OC, kC), (0, QC.j)(null, null, eC, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: CC => "wRotationCenter" in CC,
              get: CC => CC.wRotationCenter,
              set: (CC, zC) => {
                CC.wRotationCenter = zC
              }
            },
            metadata: bC
          }, VC, Cz), (0, QC.j)(null, null, hC, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: CC => "homogeneousRotationInUVTransform" in CC,
              get: CC => CC.homogeneousRotationInUVTransform,
              set: (CC, zC) => {
                CC.homogeneousRotationInUVTransform = zC
              }
            },
            metadata: bC
          }, zz, Zz), bC && Object.defineProperty(CC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bC
          })
        })(), CC.SerializeBuffers = !0, CC.ForceSerializeBuffers = !1, CC.OnTextureLoadErrorObservable = new bC.d, CC._SerializeInternalTextureUniqueId = !1, CC._CubeTextureParser = (CC, zC, ZC) => {
          throw (0, qC.i)("CubeTexture")
        }, CC._CreateMirror = (CC, zC, ZC, QC) => {
          throw (0, qC.i)("MirrorTexture")
        }, CC._CreateRenderTargetTexture = (CC, zC, ZC, QC, wC) => {
          throw (0, qC.i)("RenderTargetTexture")
        }, CC.NEAREST_SAMPLINGMODE = 1, CC.NEAREST_NEAREST_MIPLINEAR = 8, CC.BILINEAR_SAMPLINGMODE = 2, CC.LINEAR_LINEAR_MIPNEAREST = 11, CC.TRILINEAR_SAMPLINGMODE = 3, CC.LINEAR_LINEAR_MIPLINEAR = 3, CC.NEAREST_NEAREST_MIPNEAREST = 4, CC.NEAREST_LINEAR_MIPNEAREST = 5, CC.NEAREST_LINEAR_MIPLINEAR = 6, CC.NEAREST_LINEAR = 7, CC.NEAREST_NEAREST = 1, CC.LINEAR_NEAREST_MIPNEAREST = 9, CC.LINEAR_NEAREST_MIPLINEAR = 10, CC.LINEAR_LINEAR = 2, CC.LINEAR_NEAREST = 12, CC.EXPLICIT_MODE = 0, CC.SPHERICAL_MODE = 1, CC.PLANAR_MODE = 2, CC.CUBIC_MODE = 3, CC.PROJECTION_MODE = 4, CC.SKYBOX_MODE = 5, CC.INVCUBIC_MODE = 6, CC.EQUIRECTANGULAR_MODE = 7, CC.FIXED_EQUIRECTANGULAR_MODE = 8, CC.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, CC.CLAMP_ADDRESSMODE = 0, CC.WRAP_ADDRESSMODE = 1, CC.MIRROR_ADDRESSMODE = 2, CC.UseSerializedUrlIfAny = !1, CC
      })(),
      AC = !1;

    function xC() {
      AC || (AC = !0, (0, oC.d)("BABYLON.Texture", RC), GC.d._TextureParser = RC.Parse)
    }
  },
  39833: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => QC
    });
    class QC {
      constructor(CC, zC) {
        this.width = CC, this.height = zC
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let CC = 0 | this.width;
        return CC = 397 * CC ^ this.height, CC
      }
      Av(CC) {
        this.width = CC.width, this.height = CC.height
      }
      L_(CC, zC) {
        return this.width = CC, this.height = zC, this
      }
      set(CC, zC) {
        return this.L_(CC, zC)
      }
      multiplyByFloats(CC, zC) {
        return new QC(this.width * CC, this.height * zC)
      }
      clone() {
        return new QC(this.width, this.height)
      }
      equals(CC) {
        return !!CC && (this.width === CC.width && this.height === CC.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new QC(0, 0)
      }
      add(CC) {
        return new QC(this.width + CC.width, this.height + CC.height)
      }
      subtract(CC) {
        return new QC(this.width - CC.width, this.height - CC.height)
      }
      scale(CC) {
        return new QC(this.width * CC, this.height * CC)
      }
      static Lerp(CC, zC, ZC) {
        const wC = CC.width + (zC.width - CC.width) * ZC,
          bC = CC.height + (zC.height - CC.height) * ZC;
        return new QC(wC, bC)
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);