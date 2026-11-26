export const id = 285;
export const ids = [285];
export const modules = {
  41436: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB
    });
    let YB = !1
  },
  40992: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => pB
    });
    var YB = GB(40998),
      DB = GB(41004),
      QB = GB(37802),
      oB = GB(37778),
      jB = GB(37796),
      yB = GB(38589),
      JB = GB(41015);
    class MB {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(BB) {
        this._wrapU = BB
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(BB) {
        this._wrapV = BB
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(BB) {
        this._texture && (this._texture.isCube = BB)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(BB) {
        this._texture && (this._texture.is3D = BB)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(BB) {
        this._texture && (this._texture.is2DArray = BB)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(BB) {
        return void 0 !== BB?.shareDepth
      }
      constructor(BB) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = JB.b.Zero(), this._cachedBaseSize = JB.b.Zero(), this._initialSamplingMode = 2, this._texture = MB._IsRenderTargetWrapper(BB) ? BB.texture : BB, this._texture && (this._engine = this._texture.Lp(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(BB, this._texture, this._texture.generateMipMaps && OB)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var PB, zB = GB(41022),
      lB = GB(40890);
    let pB = (() => {
      var BB;
      let OB, GB, JB, PB, lB, pB, qB, ZB, NB, RB, WB, AB, VB, SB, nB, UB, fB, kB, dB, KB, uB, mB, IB, FB, iB, LB = MB,
        gB = [],
        rB = [],
        XB = [],
        wB = [],
        EB = [],
        cB = [],
        hB = [],
        aB = [],
        eB = [],
        TB = [],
        bB = [],
        CB = [],
        HB = [],
        vB = [],
        sB = [],
        xB = [],
        tB = [],
        BO = [],
        OO = [],
        GO = [],
        YO = [],
        DO = [],
        QO = [],
        oO = [],
        jO = [],
        yO = [],
        JO = [],
        MO = [],
        PO = [],
        zO = [],
        lO = [];
      return BB = class extends LB {
        set hasAlpha(BB) {
          this._hasAlpha = BB
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(BB) {
          this._getAlphaFromRGB !== BB && (this._getAlphaFromRGB = BB, this._scene && this._scene.markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(BB) {
          this._coordinatesIndex !== BB && (this._coordinatesIndex = BB, this._scene && this._scene.markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(BB) {
          this._coordinatesMode !== BB && (this._coordinatesMode = BB, this._scene && this._scene.markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(BB) {
          this._wrapU = BB
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(BB) {
          this._wrapV = BB
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(BB) {
          this._texture ? this._texture.isCube = BB : this._isCube = BB
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(BB) {
          this._texture && (this._texture.is3D = BB)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(BB) {
          this._texture && (this._texture.is2DArray = BB)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(BB) {
          if (this._texture) {
            if (this._texture._gammaSpace === BB) return;
            this._texture._gammaSpace = BB
          } else {
            if (this._gammaSpace === BB) return;
            this._gammaSpace = BB
          }
          this.JF()?.markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(BB) {
          BB !== this.isRGBD && (this._texture && (this._texture._isRGBD = BB), this.JF()?.markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(BB) {
          this._texture && (this._texture._lodGenerationOffset = BB)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(BB) {
          this._texture && (this._texture._lodGenerationScale = BB)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(BB) {
          this._texture && (this._texture._linearSpecularLOD = BB)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(BB) {
          this._texture && (this._texture._irradianceTexture = BB)
        }
        get uid() {
          return this._uid || (this._uid = (0, yB.e)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(BB) {
          this._onDisposeObserver && this.lF.remove(this._onDisposeObserver), this._onDisposeObserver = this.lF.add(BB)
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
        constructor(OB) {
          let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, YB.j)(this, gB), (0, YB.j)(this, rB, void 0)), this.name = ((0, YB.j)(this, XB), (0, YB.j)(this, wB, void 0)), this.displayName = ((0, YB.j)(this, EB), (0, YB.j)(this, cB, void 0)), this.metadata = ((0, YB.j)(this, hB), (0, YB.j)(this, aB, null)), this._internalMetadata = (0, YB.j)(this, eB), this.reservedDataStore = null, this._hasAlpha = (0, YB.j)(this, TB, !1), this._getAlphaFromRGB = ((0, YB.j)(this, bB), (0, YB.j)(this, CB, !1)), this.level = ((0, YB.j)(this, HB), (0, YB.j)(this, vB, 1)), this._coordinatesIndex = ((0, YB.j)(this, sB), (0, YB.j)(this, xB, 0)), this.optimizeUVAllocation = ((0, YB.j)(this, tB), (0, YB.j)(this, BO, !0)), this._coordinatesMode = ((0, YB.j)(this, OO), (0, YB.j)(this, GO, 0)), this.wrapR = ((0, YB.j)(this, YO), (0, YB.j)(this, DO, 1)), this.anisotropicFilteringLevel = ((0, YB.j)(this, QO), (0, YB.j)(this, oO, BB.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, YB.j)(this, jO), !1), this._gammaSpace = !0, this.invertZ = (0, YB.j)(this, yO, !1), this.lodLevelInAlpha = ((0, YB.j)(this, JO), (0, YB.j)(this, MO, !1)), this._dominantDirection = ((0, YB.j)(this, PO), null), this.isRenderTarget = (0, YB.j)(this, zO, !1), this._prefiltered = ((0, YB.j)(this, lO), !1), this._forceSerialize = !1, this.animations = [], this.lF = new QB.b, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, OB ? BB._IsScene(OB) ? this._scene = OB : this._engine = OB : this._scene = jB.b.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.Lp()), this._texture = GB, this._uid = null
        }
        JF() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return oB.d.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return oB.d.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(BB) {}
        get canRescale() {
          return !1
        }
        _getFromCache(BB, OB, GB, YB, DB, QB) {
          const oB = this._getEngine();
          if (!oB) return null;
          const jB = oB._getUseSRGBBuffer(!!DB, OB),
            yB = oB.getLoadedTexturesCache();
          for (let JB = 0; JB < yB.length; JB++) {
            const oB = yB[JB];
            if ((void 0 === DB || jB === oB._useSRGBBuffer) && (void 0 === YB || YB === oB.invertY) && oB.url === BB && oB.generateMipMaps === !OB && (!GB || GB === oB.samplingMode) && (void 0 === QB || QB === oB.isCube)) return oB.incrementReferences(), oB
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
          const BB = this.JF();
          BB && BB.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            YB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            DB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            oB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            jB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            yB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const JB = this._getEngine();
          if (!JB) return null;
          const MB = this.getSize();
          let PB = MB.width,
            zB = MB.height;
          0 !== OB && (PB /= Math.pow(2, OB), zB /= Math.pow(2, OB), PB = Math.round(PB), zB = Math.round(zB)), jB = Math.min(PB, jB), yB = Math.min(zB, yB);
          try {
            return this._texture.isCube || this._texture.is2DArray ? JB._readTexturePixels(this._texture, jB, yB, BB, OB, GB, YB, DB, QB, oB) : JB._readTexturePixels(this._texture, jB, yB, -1, OB, GB, YB, DB, QB, oB)
          } catch (lB) {
            return null
          }
        }
        _readPixelsSync() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            YB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            DB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const QB = this.getSize();
          let oB = QB.width,
            jB = QB.height;
          const yB = this._getEngine();
          if (!yB) return null;
          0 != OB && (oB /= Math.pow(2, OB), jB /= Math.pow(2, OB), oB = Math.round(oB), jB = Math.round(jB));
          try {
            return this._texture.isCube ? yB._readTexturePixelsSync(this._texture, oB, jB, BB, OB, GB, YB, DB) : yB._readTexturePixelsSync(this._texture, oB, jB, -1, OB, GB, YB, DB)
          } catch (JB) {
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
            const BB = this._scene.textures.indexOf(this);
            if (BB >= 0 && this._scene.textures.splice(BB, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const BB = this._parentContainer.textures.indexOf(this);
              BB > -1 && this._parentContainer.textures.splice(BB, 1), this._parentContainer = null
            }
          }
          this.lF.notifyObservers(this), this.lF.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !BB) return null;
          const OB = zB.d.Serialize(this);
          return zB.d.AppendSerializedAnimations(this, OB), OB
        }
        static WhenAllReady(BB, OB) {
          let GB = BB.length;
          if (0 !== GB)
            for (let YB = 0; YB < BB.length; YB++) {
              const DB = BB[YB];
              if (DB.isReady()) 0 === --GB && OB();
              else {
                const BB = DB.onLoadObservable;
                BB ? BB.addOnce((() => {
                  0 === --GB && OB()
                })) : 0 === --GB && OB()
              }
            } else OB()
        }
        static _IsScene(BB) {
          return "Scene" === BB.getClassName()
        }
      }, (() => {
        const QB = "function" === typeof Symbol && Symbol.metadata ? Object.create(LB[Symbol.metadata] ?? null) : void 0;
        OB = [(0, DB.L)()], GB = [(0, DB.L)()], JB = [(0, DB.L)()], PB = [(0, DB.L)()], lB = [(0, DB.L)("hasAlpha")], pB = [(0, DB.L)("getAlphaFromRGB")], qB = [(0, DB.L)()], ZB = [(0, DB.L)("coordinatesIndex")], NB = [(0, DB.L)()], RB = [(0, DB.L)("coordinatesMode")], WB = [(0, DB.L)()], AB = [(0, DB.L)()], VB = [(0, DB.L)()], SB = [(0, DB.L)()], nB = [(0, DB.L)()], UB = [(0, DB.L)()], fB = [(0, DB.L)()], kB = [(0, DB.L)()], dB = [(0, DB.L)()], KB = [(0, DB.L)()], uB = [(0, DB.L)()], mB = [(0, DB.L)()], IB = [(0, DB.L)()], FB = [(0, DB.B)()], iB = [(0, DB.L)()], (0, YB.h)(BB, null, WB, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: BB => "wrapU" in BB,
            get: BB => BB.wrapU
          },
          metadata: QB
        }, null, gB), (0, YB.h)(BB, null, AB, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: BB => "wrapV" in BB,
            get: BB => BB.wrapV
          },
          metadata: QB
        }, null, gB), (0, YB.h)(BB, null, nB, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: BB => "isCube" in BB,
            get: BB => BB.isCube
          },
          metadata: QB
        }, null, gB), (0, YB.h)(BB, null, UB, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: BB => "is3D" in BB,
            get: BB => BB.is3D
          },
          metadata: QB
        }, null, gB), (0, YB.h)(BB, null, fB, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: BB => "is2DArray" in BB,
            get: BB => BB.is2DArray
          },
          metadata: QB
        }, null, gB), (0, YB.h)(BB, null, kB, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: BB => "gammaSpace" in BB,
            get: BB => BB.gammaSpace
          },
          metadata: QB
        }, null, gB), (0, YB.h)(BB, null, uB, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: BB => "lodGenerationOffset" in BB,
            get: BB => BB.lodGenerationOffset
          },
          metadata: QB
        }, null, gB), (0, YB.h)(BB, null, mB, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: BB => "lodGenerationScale" in BB,
            get: BB => BB.lodGenerationScale
          },
          metadata: QB
        }, null, gB), (0, YB.h)(BB, null, IB, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: BB => "linearSpecularLOD" in BB,
            get: BB => BB.linearSpecularLOD
          },
          metadata: QB
        }, null, gB), (0, YB.h)(BB, null, FB, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "irradianceTexture" in BB,
            get: BB => BB.irradianceTexture
          },
          metadata: QB
        }, null, gB), (0, YB.h)(null, null, OB, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: BB => "uniqueId" in BB,
            get: BB => BB.uniqueId,
            set: (BB, OB) => {
              BB.uniqueId = OB
            }
          },
          metadata: QB
        }, rB, XB), (0, YB.h)(null, null, GB, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: BB => "name" in BB,
            get: BB => BB.name,
            set: (BB, OB) => {
              BB.name = OB
            }
          },
          metadata: QB
        }, wB, EB), (0, YB.h)(null, null, JB, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: BB => "displayName" in BB,
            get: BB => BB.displayName,
            set: (BB, OB) => {
              BB.displayName = OB
            }
          },
          metadata: QB
        }, cB, hB), (0, YB.h)(null, null, PB, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: BB => "metadata" in BB,
            get: BB => BB.metadata,
            set: (BB, OB) => {
              BB.metadata = OB
            }
          },
          metadata: QB
        }, aB, eB), (0, YB.h)(null, null, lB, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "_hasAlpha" in BB,
            get: BB => BB._hasAlpha,
            set: (BB, OB) => {
              BB._hasAlpha = OB
            }
          },
          metadata: QB
        }, TB, bB), (0, YB.h)(null, null, pB, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: BB => "_getAlphaFromRGB" in BB,
            get: BB => BB._getAlphaFromRGB,
            set: (BB, OB) => {
              BB._getAlphaFromRGB = OB
            }
          },
          metadata: QB
        }, CB, HB), (0, YB.h)(null, null, qB, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: BB => "level" in BB,
            get: BB => BB.level,
            set: (BB, OB) => {
              BB.level = OB
            }
          },
          metadata: QB
        }, vB, sB), (0, YB.h)(null, null, ZB, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: BB => "_coordinatesIndex" in BB,
            get: BB => BB._coordinatesIndex,
            set: (BB, OB) => {
              BB._coordinatesIndex = OB
            }
          },
          metadata: QB
        }, xB, tB), (0, YB.h)(null, null, NB, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: BB => "optimizeUVAllocation" in BB,
            get: BB => BB.optimizeUVAllocation,
            set: (BB, OB) => {
              BB.optimizeUVAllocation = OB
            }
          },
          metadata: QB
        }, BO, OO), (0, YB.h)(null, null, RB, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "_coordinatesMode" in BB,
            get: BB => BB._coordinatesMode,
            set: (BB, OB) => {
              BB._coordinatesMode = OB
            }
          },
          metadata: QB
        }, GO, YO), (0, YB.h)(null, null, VB, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: BB => "wrapR" in BB,
            get: BB => BB.wrapR,
            set: (BB, OB) => {
              BB.wrapR = OB
            }
          },
          metadata: QB
        }, DO, QO), (0, YB.h)(null, null, SB, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: BB => "anisotropicFilteringLevel" in BB,
            get: BB => BB.anisotropicFilteringLevel,
            set: (BB, OB) => {
              BB.anisotropicFilteringLevel = OB
            }
          },
          metadata: QB
        }, oO, jO), (0, YB.h)(null, null, dB, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: BB => "invertZ" in BB,
            get: BB => BB.invertZ,
            set: (BB, OB) => {
              BB.invertZ = OB
            }
          },
          metadata: QB
        }, yO, JO), (0, YB.h)(null, null, KB, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "lodLevelInAlpha" in BB,
            get: BB => BB.lodLevelInAlpha,
            set: (BB, OB) => {
              BB.lodLevelInAlpha = OB
            }
          },
          metadata: QB
        }, MO, PO), (0, YB.h)(null, null, iB, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: BB => "isRenderTarget" in BB,
            get: BB => BB.isRenderTarget,
            set: (BB, OB) => {
              BB.isRenderTarget = OB
            }
          },
          metadata: QB
        }, zO, lO), QB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: QB
        })
      })(), BB.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, BB
    })();
    (PB = pB.prototype).forceSphericalPolynomialsRecompute ?? (PB.forceSphericalPolynomialsRecompute = (0, lB.g)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(pB.prototype, "sphericalPolynomial") || Object.defineProperty(pB.prototype, "sphericalPolynomial", (0, lB.e)("BaseTexture", "sphericalPolynomial"))
  },
  41470: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => VB,
      e: () => WB
    });
    var YB = GB(40998),
      DB = GB(41004),
      QB = GB(37802),
      oB = GB(37778),
      jB = GB(40992),
      yB = GB(37823),
      JB = GB(40890),
      MB = GB(40899),
      PB = GB(41103),
      zB = GB(38432),
      lB = GB(41058);

    function pB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const YB = OB.width,
        DB = OB.height;
      if (BB instanceof Float32Array) {
        let OB = BB.byteLength / BB.BYTES_PER_ELEMENT;
        const GB = new Uint8Array(OB);
        for (; --OB >= 0;) {
          let YB = BB[OB];
          YB < 0 ? YB = 0 : YB > 1 && (YB = 1), GB[OB] = 255 * YB
        }
        BB = GB
      }
      const QB = document.createElement("canvas");
      QB.width = YB, QB.height = DB;
      const oB = QB.getContext("2d");
      if (!oB) return null;
      const jB = oB.createImageData(YB, DB);
      if (jB.data.set(BB), oB.putImageData(jB, 0, 0), GB) {
        const BB = document.createElement("canvas");
        BB.width = YB, BB.height = DB;
        const OB = BB.getContext("2d");
        return OB ? (OB.translate(0, DB), OB.scale(1, -1), OB.drawImage(QB, 0, 0), BB.toDataURL("image/png")) : null
      }
      return QB.toDataURL("image/png")
    }

    function qB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const YB = BB.getInternalTexture();
      if (!YB) return null;
      const DB = BB._readPixelsSync(OB, GB);
      return DB ? pB(DB, BB.getSize(), YB.invertY) : null
    }
    async function ZB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const YB = BB.getInternalTexture();
      if (!YB) return null;
      const DB = await BB.readPixels(OB, GB);
      return DB ? pB(DB, BB.getSize(), YB.invertY) : null
    }
    var NB = GB(41436),
      RB = GB(41022);
    let WB = (() => {
        var BB;
        let OB, GB, pB, WB, AB, VB, SB, nB, UB, fB, kB, dB, KB, uB = jB.d,
          mB = [],
          IB = [],
          FB = [],
          iB = [],
          LB = [],
          gB = [],
          rB = [],
          XB = [],
          wB = [],
          EB = [],
          cB = [],
          hB = [],
          aB = [],
          eB = [],
          TB = [],
          bB = [],
          CB = [],
          HB = [],
          vB = [],
          sB = [],
          xB = [],
          tB = [],
          BO = [],
          OO = [],
          GO = [];
        return BB = class extends uB {
          static _CreateVideoTexture(OB, GB, YB) {
            arguments.length > 5 && void 0 !== arguments[5] || BB.TRILINEAR_SAMPLINGMODE;
            throw (0, JB.j)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(BB) {
            this._isBlocking = BB
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(OB, GB, DB, oB) {
            let jB, yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : BB.TRILINEAR_SAMPLINGMODE,
              JB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              PB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              zB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              lB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              pB = arguments.length > 9 ? arguments[9] : void 0,
              qB = arguments.length > 10 ? arguments[10] : void 0,
              ZB = arguments.length > 11 ? arguments[11] : void 0,
              RB = arguments.length > 12 ? arguments[12] : void 0,
              WB = arguments.length > 13 ? arguments[13] : void 0;
            super(GB), this.url = ((0, YB.j)(this, mB), (0, YB.j)(this, IB, null)), this.uOffset = ((0, YB.j)(this, FB), (0, YB.j)(this, iB, 0)), this.vOffset = ((0, YB.j)(this, LB), (0, YB.j)(this, gB, 0)), this.uScale = ((0, YB.j)(this, rB), (0, YB.j)(this, XB, 1)), this.vScale = ((0, YB.j)(this, wB), (0, YB.j)(this, EB, 1)), this.uAng = ((0, YB.j)(this, cB), (0, YB.j)(this, hB, 0)), this.vAng = ((0, YB.j)(this, aB), (0, YB.j)(this, eB, 0)), this.wAng = ((0, YB.j)(this, TB), (0, YB.j)(this, bB, 0)), this.uRotationCenter = ((0, YB.j)(this, CB), (0, YB.j)(this, HB, .5)), this.vRotationCenter = ((0, YB.j)(this, vB), (0, YB.j)(this, sB, .5)), this.wRotationCenter = ((0, YB.j)(this, xB), (0, YB.j)(this, tB, .5)), this.homogeneousRotationInUVTransform = ((0, YB.j)(this, BO), (0, YB.j)(this, OO, !1)), this.inspectableCustomProperties = ((0, YB.j)(this, GO), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new QB.b, this._isBlocking = !0, this.name = OB || "", this.url = OB;
            let AB = !1,
              VB = null,
              SB = !0;
            "object" === typeof DB && null !== DB ? (jB = DB.noMipmap ?? !1, oB = DB.invertY ?? !NB.e, yB = DB.samplingMode ?? BB.TRILINEAR_SAMPLINGMODE, JB = DB.onLoad ?? null, PB = DB.onError ?? null, zB = DB.buffer ?? null, lB = DB.deleteBuffer ?? !1, pB = DB.format, qB = DB.mimeType, ZB = DB.loaderOptions, RB = DB.creationFlags, AB = DB.useSRGBBuffer ?? !1, VB = DB.internalTexture ?? null, SB = DB.gammaSpace ?? SB, WB = DB.forcedExtension ?? WB) : jB = !!DB, this._gammaSpace = SB, this._noMipmap = jB, this._invertY = void 0 === oB ? !NB.e : oB, this._initialSamplingMode = yB, this._buffer = zB, this._deleteBuffer = lB, this._mimeType = qB, this._loaderOptions = ZB, this._creationFlags = RB, this._useSRGBBuffer = AB, this._forcedExtension = WB, void 0 !== pB && (this._format = pB);
            const nB = this.JF(),
              UB = this._getEngine();
            if (!UB) return;
            UB.onBeforeTextureInitObservable.notifyObservers(this);
            const fB = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), JB && JB(), !this.isBlocking && nB && nB.resetCachedMaterial()
              },
              kB = (OB, GB) => {
                this._loadingError = !0, this._errorObject = {
                  message: OB,
                  exception: GB
                }, PB && PB(OB, GB), BB.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !VB) return this._delayedOnLoad = fB, void(this._delayedOnError = kB);
            if (this._texture = VB ?? this._getFromCache(this.url, jB, yB, this._invertY, AB, this.isCube), this._texture)
              if (this._texture.isReady) MB.c.SetImmediate((() => fB()));
              else {
                const BB = this._texture.onLoadedObservable.add(fB);
                this._texture.onErrorObservable.add((OB => {
                  kB(OB.message, OB.exception), this._texture?.onLoadedObservable.remove(BB)
                }))
              }
            else if (nB && nB.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = fB, this._delayedOnError = kB;
            else {
              try {
                this._texture = UB.createTexture(this.url, jB, this._invertY, nB, yB, fB, kB, this._buffer, void 0, this._format, this._forcedExtension, qB, ZB, RB, AB)
              } catch (dB) {
                throw kB("error loading", dB), dB
              }
              lB && (this._buffer = null)
            }
          }
          updateURL(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              GB = arguments.length > 2 ? arguments[2] : void 0,
              YB = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.JF().markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = BB), this.url = BB, this._buffer = OB, this._forcedExtension = YB, this.delayLoadState = 4;
            const DB = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              DB ? DB() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), GB && GB()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const BB = this.JF();
            if (!BB) return;
            let OB = this.url;
            !OB && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (OB = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(OB, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? MB.c.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = BB.Lp().createTexture(OB, this._noMipmap, this._invertY, BB, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(BB, OB, GB, YB) {
            BB *= this._cachedUScale, OB *= this._cachedVScale, BB -= this.uRotationCenter * this._cachedUScale, OB -= this.vRotationCenter * this._cachedVScale, GB -= this.wRotationCenter, oB.r.TransformCoordinatesFromFloatsToRef(BB, OB, GB, this._rowGenerationMatrix, YB), YB.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, YB.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, YB.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * BB === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * BB, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = oB.d.Zero(), this._rowGenerationMatrix = new oB.d, this._t0 = oB.r.Zero(), this._t1 = oB.r.Zero(), this._t2 = oB.r.Zero()), oB.d.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (oB.d.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, oB.k.Matrix[0]), oB.d.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, oB.k.Matrix[1]), oB.d.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, oB.k.Matrix[2]), oB.d.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, oB.k.Matrix[3]), oB.k.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(oB.k.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(oB.k.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(oB.k.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.CDB(this._t0), this._t2.CDB(this._t0), oB.d.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const OB = this.JF();
            if (!OB) return this._cachedTextureMatrix;
            const GB = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && GB !== this._cachedIdentity3x2 && OB.markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const OB = this.JF();
            if (!OB) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== BB.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === OB.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = oB.d.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = oB.d.Zero());
            const GB = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case BB.PLANAR_MODE:
                oB.d.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case BB.PROJECTION_MODE: {
                oB.d.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const BB = OB.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = BB.updateFlag, BB.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                oB.d.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return GB && OB.markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const OB = {
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
            return RB.d.Clone((() => new BB(this._texture ? this._texture.url : null, this.JF(), OB)), this)
          }
          serialize() {
            const OB = this.name;
            BB.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const GB = super.serialize(BB._SerializeInternalTextureUniqueId);
            if (!GB) return null;
            if (BB.SerializeBuffers || BB.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) GB.base64String = this._buffer, GB.name = GB.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const BB = this.mimeType || "image/png";
              GB.base64String = `data:${BB};base64,${(0,lB.k)(this._buffer)}`
            } else(BB.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (GB.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? qB(this) : ZB(this));
            return GB.invertY = this._invertY, GB.samplingMode = this.samplingMode, GB._creationFlags = this._creationFlags, GB._useSRGBBuffer = this._useSRGBBuffer, BB._SerializeInternalTextureUniqueId && (GB.internalTextureUniqueId = this._texture?.uniqueId), GB.internalTextureLabel = this._texture?.label, GB.noMipmap = this._noMipmap, this.name = OB, GB
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(OB, GB, YB) {
            if (OB.customType) {
              const BB = PB.d.Instantiate(OB.customType).Parse(OB, GB, YB);
              return OB.samplingMode && BB.updateSamplingMode && BB._samplingMode && BB._samplingMode !== OB.samplingMode && BB.updateSamplingMode(OB.samplingMode), BB
            }
            if (OB.isCube && !OB.isRenderTarget) return BB._CubeTextureParser(OB, GB, YB);
            const DB = void 0 !== OB.internalTextureUniqueId;
            if (!OB.name && !OB.isRenderTarget && !DB) return null;
            let QB;
            if (DB) {
              const BB = GB.Lp().getLoadedTexturesCache();
              for (const GB of BB)
                if (GB.uniqueId === OB.internalTextureUniqueId) {
                  QB = GB;
                  break
                }
            }
            const oB = BB => {
              if (BB && BB._texture && (BB._texture._cachedWrapU = null, BB._texture._cachedWrapV = null, BB._texture._cachedWrapR = null), OB.samplingMode) {
                const GB = OB.samplingMode;
                BB && BB.samplingMode !== GB && BB.updateSamplingMode(GB)
              }
              if (BB && OB.animations)
                for (let GB = 0; GB < OB.animations.length; GB++) {
                  const YB = OB.animations[GB],
                    DB = (0, yB.c)("BABYLON.Animation");
                  DB && BB.animations.push(DB.Parse(YB))
                }
              BB && BB._texture && (DB && !QB && BB._texture._setUniqueId(OB.internalTextureUniqueId), BB._texture.label = OB.internalTextureLabel)
            };
            return RB.d.Parse((() => {
              let DB = !0;
              if (OB.noMipmap && (DB = !1), OB.mirrorPlane) {
                const YB = BB._CreateMirror(OB.name, OB.renderTargetSize, GB, DB);
                return YB._waitingRenderList = OB.renderList, YB.mirrorPlane = zB.c.FromArray(OB.mirrorPlane), oB(YB), YB
              }
              if (OB.isRenderTarget && !OB.base64String) {
                let YB = null;
                if (OB.isCube) {
                  if (GB.reflectionProbes)
                    for (let BB = 0; BB < GB.reflectionProbes.length; BB++) {
                      const YB = GB.reflectionProbes[BB];
                      if (YB.name === OB.name) return YB.cubeTexture
                    }
                } else YB = BB._CreateRenderTargetTexture(OB.name, OB.renderTargetSize, GB, DB, OB._creationFlags ?? 0), YB._waitingRenderList = OB.renderList;
                return oB(YB), YB
              }
              if (OB.isVideo) {
                const QB = BB._CreateVideoTexture(YB + (OB.url || OB.name), YB + (OB.src || OB.url), GB, DB, OB.invertY, OB.samplingMode, OB.settings || {});
                return oB(QB), QB
              } {
                let jB;
                if ("string" === typeof OB.base64String && OB.base64String && !QB) {
                  const YB = {
                      buffer: OB.base64String,
                      noMipmap: !DB,
                      invertY: OB.invertY,
                      samplingMode: OB.samplingMode,
                      useSRGBBuffer: OB._useSRGBBuffer ?? !1,
                      creationFlags: OB._creationFlags ?? 0,
                      onLoad: () => {
                        oB(jB)
                      }
                    },
                    QB = OB.base64String,
                    yB = QB.startsWith("data:") ? QB.substring(5) : QB;
                  jB = BB.CreateFromBase64String("", yB, GB, YB), jB.name = OB.name
                } else {
                  let yB;
                  yB = OB.name && (OB.name.indexOf("://") > 0 || OB.name.startsWith("data:")) ? OB.name : YB + OB.name, OB.url && (OB.url.startsWith("data:") || BB.UseSerializedUrlIfAny) && (yB = OB.url);
                  const JB = {
                    noMipmap: !DB,
                    invertY: OB.invertY,
                    samplingMode: OB.samplingMode,
                    useSRGBBuffer: OB._useSRGBBuffer ?? !1,
                    creationFlags: OB._creationFlags ?? 0,
                    onLoad: () => {
                      oB(jB)
                    },
                    internalTexture: QB
                  };
                  jB = new BB(yB, GB, JB)
                }
                return jB
              }
            }), OB, GB)
          }
          static CreateFromBase64String(OB, GB, YB, DB, QB) {
            let oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : BB.TRILINEAR_SAMPLINGMODE;
            return new BB("data:" + GB, YB, DB, QB, oB, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, OB, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(OB, GB, YB) {
            let DB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              QB = arguments.length > 4 ? arguments[4] : void 0,
              oB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              jB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : BB.TRILINEAR_SAMPLINGMODE,
              yB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              JB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              MB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              PB = arguments.length > 10 ? arguments[10] : void 0,
              zB = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== OB.substring(0, 5) && (OB = "data:" + OB), new BB(OB, YB, QB, oB, jB, yB, JB, GB, DB, MB, void 0, void 0, PB, zB)
          }
        }, (() => {
          const QB = "function" === typeof Symbol && Symbol.metadata ? Object.create(uB[Symbol.metadata] ?? null) : void 0;
          OB = [(0, DB.L)()], GB = [(0, DB.L)()], pB = [(0, DB.L)()], WB = [(0, DB.L)()], AB = [(0, DB.L)()], VB = [(0, DB.L)()], SB = [(0, DB.L)()], nB = [(0, DB.L)()], UB = [(0, DB.L)()], fB = [(0, DB.L)()], kB = [(0, DB.L)()], dB = [(0, DB.L)()], KB = [(0, DB.L)()], (0, YB.h)(BB, null, KB, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: BB => "isBlocking" in BB,
              get: BB => BB.isBlocking
            },
            metadata: QB
          }, null, mB), (0, YB.h)(null, null, OB, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: BB => "url" in BB,
              get: BB => BB.url,
              set: (BB, OB) => {
                BB.url = OB
              }
            },
            metadata: QB
          }, IB, FB), (0, YB.h)(null, null, GB, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "uOffset" in BB,
              get: BB => BB.uOffset,
              set: (BB, OB) => {
                BB.uOffset = OB
              }
            },
            metadata: QB
          }, iB, LB), (0, YB.h)(null, null, pB, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "vOffset" in BB,
              get: BB => BB.vOffset,
              set: (BB, OB) => {
                BB.vOffset = OB
              }
            },
            metadata: QB
          }, gB, rB), (0, YB.h)(null, null, WB, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: BB => "uScale" in BB,
              get: BB => BB.uScale,
              set: (BB, OB) => {
                BB.uScale = OB
              }
            },
            metadata: QB
          }, XB, wB), (0, YB.h)(null, null, AB, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: BB => "vScale" in BB,
              get: BB => BB.vScale,
              set: (BB, OB) => {
                BB.vScale = OB
              }
            },
            metadata: QB
          }, EB, cB), (0, YB.h)(null, null, VB, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: BB => "uAng" in BB,
              get: BB => BB.uAng,
              set: (BB, OB) => {
                BB.uAng = OB
              }
            },
            metadata: QB
          }, hB, aB), (0, YB.h)(null, null, SB, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: BB => "vAng" in BB,
              get: BB => BB.vAng,
              set: (BB, OB) => {
                BB.vAng = OB
              }
            },
            metadata: QB
          }, eB, TB), (0, YB.h)(null, null, nB, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: BB => "wAng" in BB,
              get: BB => BB.wAng,
              set: (BB, OB) => {
                BB.wAng = OB
              }
            },
            metadata: QB
          }, bB, CB), (0, YB.h)(null, null, UB, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: BB => "uRotationCenter" in BB,
              get: BB => BB.uRotationCenter,
              set: (BB, OB) => {
                BB.uRotationCenter = OB
              }
            },
            metadata: QB
          }, HB, vB), (0, YB.h)(null, null, fB, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: BB => "vRotationCenter" in BB,
              get: BB => BB.vRotationCenter,
              set: (BB, OB) => {
                BB.vRotationCenter = OB
              }
            },
            metadata: QB
          }, sB, xB), (0, YB.h)(null, null, kB, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: BB => "wRotationCenter" in BB,
              get: BB => BB.wRotationCenter,
              set: (BB, OB) => {
                BB.wRotationCenter = OB
              }
            },
            metadata: QB
          }, tB, BO), (0, YB.h)(null, null, dB, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: BB => "homogeneousRotationInUVTransform" in BB,
              get: BB => BB.homogeneousRotationInUVTransform,
              set: (BB, OB) => {
                BB.homogeneousRotationInUVTransform = OB
              }
            },
            metadata: QB
          }, OO, GO), QB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QB
          })
        })(), BB.SerializeBuffers = !0, BB.ForceSerializeBuffers = !1, BB.OnTextureLoadErrorObservable = new QB.b, BB._SerializeInternalTextureUniqueId = !1, BB._CubeTextureParser = (BB, OB, GB) => {
          throw (0, JB.j)("CubeTexture")
        }, BB._CreateMirror = (BB, OB, GB, YB) => {
          throw (0, JB.j)("MirrorTexture")
        }, BB._CreateRenderTargetTexture = (BB, OB, GB, YB, DB) => {
          throw (0, JB.j)("RenderTargetTexture")
        }, BB.NEAREST_SAMPLINGMODE = 1, BB.NEAREST_NEAREST_MIPLINEAR = 8, BB.BILINEAR_SAMPLINGMODE = 2, BB.LINEAR_LINEAR_MIPNEAREST = 11, BB.TRILINEAR_SAMPLINGMODE = 3, BB.LINEAR_LINEAR_MIPLINEAR = 3, BB.NEAREST_NEAREST_MIPNEAREST = 4, BB.NEAREST_LINEAR_MIPNEAREST = 5, BB.NEAREST_LINEAR_MIPLINEAR = 6, BB.NEAREST_LINEAR = 7, BB.NEAREST_NEAREST = 1, BB.LINEAR_NEAREST_MIPNEAREST = 9, BB.LINEAR_NEAREST_MIPLINEAR = 10, BB.LINEAR_LINEAR = 2, BB.LINEAR_NEAREST = 12, BB.EXPLICIT_MODE = 0, BB.SPHERICAL_MODE = 1, BB.PLANAR_MODE = 2, BB.CUBIC_MODE = 3, BB.PROJECTION_MODE = 4, BB.SKYBOX_MODE = 5, BB.INVCUBIC_MODE = 6, BB.EQUIRECTANGULAR_MODE = 7, BB.FIXED_EQUIRECTANGULAR_MODE = 8, BB.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, BB.CLAMP_ADDRESSMODE = 0, BB.WRAP_ADDRESSMODE = 1, BB.MIRROR_ADDRESSMODE = 2, BB.UseSerializedUrlIfAny = !1, BB
      })(),
      AB = !1;

    function VB() {
      AB || (AB = !0, (0, yB.f)("BABYLON.Texture", WB), RB.d._TextureParser = WB.Parse)
    }
  },
  41015: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB
    });
    class YB {
      constructor(BB, OB) {
        this.width = BB, this.height = OB
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let BB = 0 | this.width;
        return BB = 397 * BB ^ this.height, BB
      }
      IU(BB) {
        this.width = BB.width, this.height = BB.height
      }
      zOB(BB, OB) {
        return this.width = BB, this.height = OB, this
      }
      set(BB, OB) {
        return this.zOB(BB, OB)
      }
      multiplyByFloats(BB, OB) {
        return new YB(this.width * BB, this.height * OB)
      }
      clone() {
        return new YB(this.width, this.height)
      }
      equals(BB) {
        return !!BB && (this.width === BB.width && this.height === BB.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new YB(0, 0)
      }
      add(BB) {
        return new YB(this.width + BB.width, this.height + BB.height)
      }
      subtract(BB) {
        return new YB(this.width - BB.width, this.height - BB.height)
      }
      scale(BB) {
        return new YB(this.width * BB, this.height * BB)
      }
      static Lerp(BB, OB, GB) {
        const DB = BB.width + (OB.width - BB.width) * GB,
          QB = BB.height + (OB.height - BB.height) * GB;
        return new YB(DB, QB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);