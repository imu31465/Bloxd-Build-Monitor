export const id = 236;
export const ids = [236];
export const modules = {
  39172: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB
    });
    let VB = !1
  },
  38741: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => DB
    });
    var VB = dB(38745),
      yB = dB(38750),
      pB = dB(36150),
      lB = dB(36126),
      JB = dB(36148),
      YB = dB(36822),
      gB = dB(38768);
    class oB {
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
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = gB.c.Zero(), this._cachedBaseSize = gB.c.Zero(), this._initialSamplingMode = 2, this._texture = oB._IsRenderTargetWrapper(BB) ? BB.texture : BB, this._texture && (this._engine = this._texture.PD(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(BB, this._texture, this._texture.generateMipMaps && TB)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var kB, LB = dB(38772),
      OB = dB(38629);
    let DB = (() => {
      var BB;
      let TB, dB, gB, kB, OB, DB, uB, HB, EB, vB, mB, iB, NB, tB, fB, sB, MB, zB, wB, UB, FB, KB, rB, IB, cB, SB = oB,
        PB = [],
        QB = [],
        RB = [],
        aB = [],
        ZB = [],
        XB = [],
        WB = [],
        hB = [],
        CB = [],
        GB = [],
        qB = [],
        xB = [],
        jB = [],
        AB = [],
        bB = [],
        nB = [],
        eB = [],
        BT = [],
        TT = [],
        dT = [],
        VT = [],
        yT = [],
        pT = [],
        lT = [],
        JT = [],
        YT = [],
        gT = [],
        oT = [],
        kT = [],
        LT = [],
        OT = [];
      return BB = class extends SB {
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
          this.jU()?.markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(BB) {
          BB !== this.isRGBD && (this._texture && (this._texture._isRGBD = BB), this.jU()?.markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this))))
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
          return this._uid || (this._uid = (0, YB.c)()), this._uid
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
        constructor(TB) {
          let dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, VB.h)(this, PB), (0, VB.h)(this, QB, void 0)), this.name = ((0, VB.h)(this, RB), (0, VB.h)(this, aB, void 0)), this.displayName = ((0, VB.h)(this, ZB), (0, VB.h)(this, XB, void 0)), this.metadata = ((0, VB.h)(this, WB), (0, VB.h)(this, hB, null)), this._internalMetadata = (0, VB.h)(this, CB), this.reservedDataStore = null, this._hasAlpha = (0, VB.h)(this, GB, !1), this._getAlphaFromRGB = ((0, VB.h)(this, qB), (0, VB.h)(this, xB, !1)), this.level = ((0, VB.h)(this, jB), (0, VB.h)(this, AB, 1)), this._coordinatesIndex = ((0, VB.h)(this, bB), (0, VB.h)(this, nB, 0)), this.optimizeUVAllocation = ((0, VB.h)(this, eB), (0, VB.h)(this, BT, !0)), this._coordinatesMode = ((0, VB.h)(this, TT), (0, VB.h)(this, dT, 0)), this.wrapR = ((0, VB.h)(this, VT), (0, VB.h)(this, yT, 1)), this.anisotropicFilteringLevel = ((0, VB.h)(this, pT), (0, VB.h)(this, lT, BB.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, VB.h)(this, JT), !1), this._gammaSpace = !0, this.invertZ = (0, VB.h)(this, YT, !1), this.lodLevelInAlpha = ((0, VB.h)(this, gT), (0, VB.h)(this, oT, !1)), this._dominantDirection = ((0, VB.h)(this, kT), null), this.isRenderTarget = (0, VB.h)(this, LT, !1), this._prefiltered = ((0, VB.h)(this, OT), !1), this._forceSerialize = !1, this.animations = [], this.lF = new pB.e, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, TB ? BB._IsScene(TB) ? this._scene = TB : this._engine = TB : this._scene = JB.c.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.PD()), this._texture = dB, this._uid = null
        }
        jU() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return lB.b.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return lB.b.IdentityReadOnly
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
        _getFromCache(BB, TB, dB, VB, yB, pB) {
          const lB = this._getEngine();
          if (!lB) return null;
          const JB = lB._getUseSRGBBuffer(!!yB, TB),
            YB = lB.getLoadedTexturesCache();
          for (let gB = 0; gB < YB.length; gB++) {
            const lB = YB[gB];
            if ((void 0 === yB || JB === lB._useSRGBBuffer) && (void 0 === VB || VB === lB.invertY) && lB.url === BB && lB.generateMipMaps === !TB && (!dB || dB === lB.samplingMode) && (void 0 === pB || pB === lB.isCube)) return lB.incrementReferences(), lB
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
          const BB = this.jU();
          BB && BB.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            VB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            yB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            lB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            JB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            YB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const gB = this._getEngine();
          if (!gB) return null;
          const oB = this.getSize();
          let kB = oB.width,
            LB = oB.height;
          0 !== TB && (kB /= Math.pow(2, TB), LB /= Math.pow(2, TB), kB = Math.round(kB), LB = Math.round(LB)), JB = Math.min(kB, JB), YB = Math.min(LB, YB);
          try {
            return this._texture.isCube || this._texture.is2DArray ? gB._readTexturePixels(this._texture, JB, YB, BB, TB, dB, VB, yB, pB, lB) : gB._readTexturePixels(this._texture, JB, YB, -1, TB, dB, VB, yB, pB, lB)
          } catch (OB) {
            return null
          }
        }
        _readPixelsSync() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            VB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            yB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const pB = this.getSize();
          let lB = pB.width,
            JB = pB.height;
          const YB = this._getEngine();
          if (!YB) return null;
          0 != TB && (lB /= Math.pow(2, TB), JB /= Math.pow(2, TB), lB = Math.round(lB), JB = Math.round(JB));
          try {
            return this._texture.isCube ? YB._readTexturePixelsSync(this._texture, lB, JB, BB, TB, dB, VB, yB) : YB._readTexturePixelsSync(this._texture, lB, JB, -1, TB, dB, VB, yB)
          } catch (gB) {
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
          const TB = LB.c.Serialize(this);
          return LB.c.AppendSerializedAnimations(this, TB), TB
        }
        static WhenAllReady(BB, TB) {
          let dB = BB.length;
          if (0 !== dB)
            for (let VB = 0; VB < BB.length; VB++) {
              const yB = BB[VB];
              if (yB.isReady()) 0 === --dB && TB();
              else {
                const BB = yB.onLoadObservable;
                BB ? BB.addOnce((() => {
                  0 === --dB && TB()
                })) : 0 === --dB && TB()
              }
            } else TB()
        }
        static _IsScene(BB) {
          return "Scene" === BB.getClassName()
        }
      }, (() => {
        const pB = "function" === typeof Symbol && Symbol.metadata ? Object.create(SB[Symbol.metadata] ?? null) : void 0;
        TB = [(0, yB.W)()], dB = [(0, yB.W)()], gB = [(0, yB.W)()], kB = [(0, yB.W)()], OB = [(0, yB.W)("hasAlpha")], DB = [(0, yB.W)("getAlphaFromRGB")], uB = [(0, yB.W)()], HB = [(0, yB.W)("coordinatesIndex")], EB = [(0, yB.W)()], vB = [(0, yB.W)("coordinatesMode")], mB = [(0, yB.W)()], iB = [(0, yB.W)()], NB = [(0, yB.W)()], tB = [(0, yB.W)()], fB = [(0, yB.W)()], sB = [(0, yB.W)()], MB = [(0, yB.W)()], zB = [(0, yB.W)()], wB = [(0, yB.W)()], UB = [(0, yB.W)()], FB = [(0, yB.W)()], KB = [(0, yB.W)()], rB = [(0, yB.W)()], IB = [(0, yB.M)()], cB = [(0, yB.W)()], (0, VB.g)(BB, null, mB, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: BB => "wrapU" in BB,
            get: BB => BB.wrapU
          },
          metadata: pB
        }, null, PB), (0, VB.g)(BB, null, iB, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: BB => "wrapV" in BB,
            get: BB => BB.wrapV
          },
          metadata: pB
        }, null, PB), (0, VB.g)(BB, null, fB, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: BB => "isCube" in BB,
            get: BB => BB.isCube
          },
          metadata: pB
        }, null, PB), (0, VB.g)(BB, null, sB, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: BB => "is3D" in BB,
            get: BB => BB.is3D
          },
          metadata: pB
        }, null, PB), (0, VB.g)(BB, null, MB, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: BB => "is2DArray" in BB,
            get: BB => BB.is2DArray
          },
          metadata: pB
        }, null, PB), (0, VB.g)(BB, null, zB, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: BB => "gammaSpace" in BB,
            get: BB => BB.gammaSpace
          },
          metadata: pB
        }, null, PB), (0, VB.g)(BB, null, FB, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: BB => "lodGenerationOffset" in BB,
            get: BB => BB.lodGenerationOffset
          },
          metadata: pB
        }, null, PB), (0, VB.g)(BB, null, KB, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: BB => "lodGenerationScale" in BB,
            get: BB => BB.lodGenerationScale
          },
          metadata: pB
        }, null, PB), (0, VB.g)(BB, null, rB, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: BB => "linearSpecularLOD" in BB,
            get: BB => BB.linearSpecularLOD
          },
          metadata: pB
        }, null, PB), (0, VB.g)(BB, null, IB, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "irradianceTexture" in BB,
            get: BB => BB.irradianceTexture
          },
          metadata: pB
        }, null, PB), (0, VB.g)(null, null, TB, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: BB => "uniqueId" in BB,
            get: BB => BB.uniqueId,
            set: (BB, TB) => {
              BB.uniqueId = TB
            }
          },
          metadata: pB
        }, QB, RB), (0, VB.g)(null, null, dB, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: BB => "name" in BB,
            get: BB => BB.name,
            set: (BB, TB) => {
              BB.name = TB
            }
          },
          metadata: pB
        }, aB, ZB), (0, VB.g)(null, null, gB, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: BB => "displayName" in BB,
            get: BB => BB.displayName,
            set: (BB, TB) => {
              BB.displayName = TB
            }
          },
          metadata: pB
        }, XB, WB), (0, VB.g)(null, null, kB, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: BB => "metadata" in BB,
            get: BB => BB.metadata,
            set: (BB, TB) => {
              BB.metadata = TB
            }
          },
          metadata: pB
        }, hB, CB), (0, VB.g)(null, null, OB, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "_hasAlpha" in BB,
            get: BB => BB._hasAlpha,
            set: (BB, TB) => {
              BB._hasAlpha = TB
            }
          },
          metadata: pB
        }, GB, qB), (0, VB.g)(null, null, DB, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: BB => "_getAlphaFromRGB" in BB,
            get: BB => BB._getAlphaFromRGB,
            set: (BB, TB) => {
              BB._getAlphaFromRGB = TB
            }
          },
          metadata: pB
        }, xB, jB), (0, VB.g)(null, null, uB, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: BB => "level" in BB,
            get: BB => BB.level,
            set: (BB, TB) => {
              BB.level = TB
            }
          },
          metadata: pB
        }, AB, bB), (0, VB.g)(null, null, HB, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: BB => "_coordinatesIndex" in BB,
            get: BB => BB._coordinatesIndex,
            set: (BB, TB) => {
              BB._coordinatesIndex = TB
            }
          },
          metadata: pB
        }, nB, eB), (0, VB.g)(null, null, EB, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: BB => "optimizeUVAllocation" in BB,
            get: BB => BB.optimizeUVAllocation,
            set: (BB, TB) => {
              BB.optimizeUVAllocation = TB
            }
          },
          metadata: pB
        }, BT, TT), (0, VB.g)(null, null, vB, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "_coordinatesMode" in BB,
            get: BB => BB._coordinatesMode,
            set: (BB, TB) => {
              BB._coordinatesMode = TB
            }
          },
          metadata: pB
        }, dT, VT), (0, VB.g)(null, null, NB, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: BB => "wrapR" in BB,
            get: BB => BB.wrapR,
            set: (BB, TB) => {
              BB.wrapR = TB
            }
          },
          metadata: pB
        }, yT, pT), (0, VB.g)(null, null, tB, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: BB => "anisotropicFilteringLevel" in BB,
            get: BB => BB.anisotropicFilteringLevel,
            set: (BB, TB) => {
              BB.anisotropicFilteringLevel = TB
            }
          },
          metadata: pB
        }, lT, JT), (0, VB.g)(null, null, wB, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: BB => "invertZ" in BB,
            get: BB => BB.invertZ,
            set: (BB, TB) => {
              BB.invertZ = TB
            }
          },
          metadata: pB
        }, YT, gT), (0, VB.g)(null, null, UB, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "lodLevelInAlpha" in BB,
            get: BB => BB.lodLevelInAlpha,
            set: (BB, TB) => {
              BB.lodLevelInAlpha = TB
            }
          },
          metadata: pB
        }, oT, kT), (0, VB.g)(null, null, cB, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: BB => "isRenderTarget" in BB,
            get: BB => BB.isRenderTarget,
            set: (BB, TB) => {
              BB.isRenderTarget = TB
            }
          },
          metadata: pB
        }, LT, OT), pB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: pB
        })
      })(), BB.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, BB
    })();
    (kB = DB.prototype).forceSphericalPolynomialsRecompute ?? (kB.forceSphericalPolynomialsRecompute = (0, OB.h)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(DB.prototype, "sphericalPolynomial") || Object.defineProperty(DB.prototype, "sphericalPolynomial", (0, OB.d)("BaseTexture", "sphericalPolynomial"))
  },
  39218: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => NB,
      f: () => mB
    });
    var VB = dB(38745),
      yB = dB(38750),
      pB = dB(36150),
      lB = dB(36126),
      JB = dB(38741),
      YB = dB(36166),
      gB = dB(38629),
      oB = dB(38645),
      kB = dB(38852),
      LB = dB(36690),
      OB = dB(38811);

    function DB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const VB = TB.width,
        yB = TB.height;
      if (BB instanceof Float32Array) {
        let TB = BB.byteLength / BB.BYTES_PER_ELEMENT;
        const dB = new Uint8Array(TB);
        for (; --TB >= 0;) {
          let VB = BB[TB];
          VB < 0 ? VB = 0 : VB > 1 && (VB = 1), dB[TB] = 255 * VB
        }
        BB = dB
      }
      const pB = document.createElement("canvas");
      pB.width = VB, pB.height = yB;
      const lB = pB.getContext("2d");
      if (!lB) return null;
      const JB = lB.createImageData(VB, yB);
      if (JB.data.set(BB), lB.putImageData(JB, 0, 0), dB) {
        const BB = document.createElement("canvas");
        BB.width = VB, BB.height = yB;
        const TB = BB.getContext("2d");
        return TB ? (TB.translate(0, yB), TB.scale(1, -1), TB.drawImage(pB, 0, 0), BB.toDataURL("image/png")) : null
      }
      return pB.toDataURL("image/png")
    }

    function uB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const VB = BB.getInternalTexture();
      if (!VB) return null;
      const yB = BB._readPixelsSync(TB, dB);
      return yB ? DB(yB, BB.getSize(), VB.invertY) : null
    }
    async function HB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const VB = BB.getInternalTexture();
      if (!VB) return null;
      const yB = await BB.readPixels(TB, dB);
      return yB ? DB(yB, BB.getSize(), VB.invertY) : null
    }
    var EB = dB(39172),
      vB = dB(38772);
    let mB = (() => {
        var BB;
        let TB, dB, DB, mB, iB, NB, tB, fB, sB, MB, zB, wB, UB, FB = JB.b,
          KB = [],
          rB = [],
          IB = [],
          cB = [],
          SB = [],
          PB = [],
          QB = [],
          RB = [],
          aB = [],
          ZB = [],
          XB = [],
          WB = [],
          hB = [],
          CB = [],
          GB = [],
          qB = [],
          xB = [],
          jB = [],
          AB = [],
          bB = [],
          nB = [],
          eB = [],
          BT = [],
          TT = [],
          dT = [];
        return BB = class extends FB {
          static _CreateVideoTexture(TB, dB, VB) {
            arguments.length > 5 && void 0 !== arguments[5] || BB.TRILINEAR_SAMPLINGMODE;
            throw (0, gB.i)("VideoTexture")
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
          constructor(TB, dB, yB, lB) {
            let JB, YB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : BB.TRILINEAR_SAMPLINGMODE,
              gB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              kB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              LB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              OB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              DB = arguments.length > 9 ? arguments[9] : void 0,
              uB = arguments.length > 10 ? arguments[10] : void 0,
              HB = arguments.length > 11 ? arguments[11] : void 0,
              vB = arguments.length > 12 ? arguments[12] : void 0,
              mB = arguments.length > 13 ? arguments[13] : void 0;
            super(dB), this.url = ((0, VB.h)(this, KB), (0, VB.h)(this, rB, null)), this.uOffset = ((0, VB.h)(this, IB), (0, VB.h)(this, cB, 0)), this.vOffset = ((0, VB.h)(this, SB), (0, VB.h)(this, PB, 0)), this.uScale = ((0, VB.h)(this, QB), (0, VB.h)(this, RB, 1)), this.vScale = ((0, VB.h)(this, aB), (0, VB.h)(this, ZB, 1)), this.uAng = ((0, VB.h)(this, XB), (0, VB.h)(this, WB, 0)), this.vAng = ((0, VB.h)(this, hB), (0, VB.h)(this, CB, 0)), this.wAng = ((0, VB.h)(this, GB), (0, VB.h)(this, qB, 0)), this.uRotationCenter = ((0, VB.h)(this, xB), (0, VB.h)(this, jB, .5)), this.vRotationCenter = ((0, VB.h)(this, AB), (0, VB.h)(this, bB, .5)), this.wRotationCenter = ((0, VB.h)(this, nB), (0, VB.h)(this, eB, .5)), this.homogeneousRotationInUVTransform = ((0, VB.h)(this, BT), (0, VB.h)(this, TT, !1)), this.inspectableCustomProperties = ((0, VB.h)(this, dT), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new pB.e, this._isBlocking = !0, this.name = TB || "", this.url = TB;
            let iB = !1,
              NB = null,
              tB = !0;
            "object" === typeof yB && null !== yB ? (JB = yB.noMipmap ?? !1, lB = yB.invertY ?? !EB.c, YB = yB.samplingMode ?? BB.TRILINEAR_SAMPLINGMODE, gB = yB.onLoad ?? null, kB = yB.onError ?? null, LB = yB.buffer ?? null, OB = yB.deleteBuffer ?? !1, DB = yB.format, uB = yB.mimeType, HB = yB.loaderOptions, vB = yB.creationFlags, iB = yB.useSRGBBuffer ?? !1, NB = yB.internalTexture ?? null, tB = yB.gammaSpace ?? tB, mB = yB.forcedExtension ?? mB) : JB = !!yB, this._gammaSpace = tB, this._noMipmap = JB, this._invertY = void 0 === lB ? !EB.c : lB, this._initialSamplingMode = YB, this._buffer = LB, this._deleteBuffer = OB, this._mimeType = uB, this._loaderOptions = HB, this._creationFlags = vB, this._useSRGBBuffer = iB, this._forcedExtension = mB, void 0 !== DB && (this._format = DB);
            const fB = this.jU(),
              sB = this._getEngine();
            if (!sB) return;
            sB.onBeforeTextureInitObservable.notifyObservers(this);
            const MB = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), gB && gB(), !this.isBlocking && fB && fB.resetCachedMaterial()
              },
              zB = (TB, dB) => {
                this._loadingError = !0, this._errorObject = {
                  message: TB,
                  exception: dB
                }, kB && kB(TB, dB), BB.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !NB) return this._delayedOnLoad = MB, void(this._delayedOnError = zB);
            if (this._texture = NB ?? this._getFromCache(this.url, JB, YB, this._invertY, iB, this.isCube), this._texture)
              if (this._texture.isReady) oB.b.SetImmediate((() => MB()));
              else {
                const BB = this._texture.onLoadedObservable.add(MB);
                this._texture.onErrorObservable.add((TB => {
                  zB(TB.message, TB.exception), this._texture?.onLoadedObservable.remove(BB)
                }))
              }
            else if (fB && fB.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = MB, this._delayedOnError = zB;
            else {
              try {
                this._texture = sB.createTexture(this.url, JB, this._invertY, fB, YB, MB, zB, this._buffer, void 0, this._format, this._forcedExtension, uB, HB, vB, iB)
              } catch (wB) {
                throw zB("error loading", wB), wB
              }
              OB && (this._buffer = null)
            }
          }
          updateURL(BB) {
            let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              dB = arguments.length > 2 ? arguments[2] : void 0,
              VB = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.jU().markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = BB), this.url = BB, this._buffer = TB, this._forcedExtension = VB, this.delayLoadState = 4;
            const yB = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              yB ? yB() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), dB && dB()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const BB = this.jU();
            if (!BB) return;
            let TB = this.url;
            !TB && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (TB = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(TB, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? oB.b.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = BB.PD().createTexture(TB, this._noMipmap, this._invertY, BB, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(BB, TB, dB, VB) {
            BB *= this._cachedUScale, TB *= this._cachedVScale, BB -= this.uRotationCenter * this._cachedUScale, TB -= this.vRotationCenter * this._cachedVScale, dB -= this.wRotationCenter, lB.p.TransformCoordinatesFromFloatsToRef(BB, TB, dB, this._rowGenerationMatrix, VB), VB.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, VB.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, VB.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * BB === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * BB, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = lB.b.Zero(), this._rowGenerationMatrix = new lB.b, this._t0 = lB.p.Zero(), this._t1 = lB.p.Zero(), this._t2 = lB.p.Zero()), lB.b.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (lB.b.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, lB.j.Matrix[0]), lB.b.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, lB.j.Matrix[1]), lB.b.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, lB.j.Matrix[2]), lB.b.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, lB.j.Matrix[3]), lB.j.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(lB.j.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(lB.j.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(lB.j.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.qVB(this._t0), this._t2.qVB(this._t0), lB.b.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const TB = this.jU();
            if (!TB) return this._cachedTextureMatrix;
            const dB = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && dB !== this._cachedIdentity3x2 && TB.markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const TB = this.jU();
            if (!TB) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== BB.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === TB.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = lB.b.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = lB.b.Zero());
            const dB = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case BB.PLANAR_MODE:
                lB.b.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case BB.PROJECTION_MODE: {
                lB.b.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const BB = TB.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = BB.updateFlag, BB.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                lB.b.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return dB && TB.markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const TB = {
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
            return vB.c.Clone((() => new BB(this._texture ? this._texture.url : null, this.jU(), TB)), this)
          }
          serialize() {
            const TB = this.name;
            BB.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const dB = super.serialize(BB._SerializeInternalTextureUniqueId);
            if (!dB) return null;
            if (BB.SerializeBuffers || BB.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) dB.base64String = this._buffer, dB.name = dB.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const BB = this.mimeType || "image/png";
              dB.base64String = `data:${BB};base64,${(0,OB.k)(this._buffer)}`
            } else(BB.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (dB.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? uB(this) : HB(this));
            return dB.invertY = this._invertY, dB.samplingMode = this.samplingMode, dB._creationFlags = this._creationFlags, dB._useSRGBBuffer = this._useSRGBBuffer, BB._SerializeInternalTextureUniqueId && (dB.internalTextureUniqueId = this._texture?.uniqueId), dB.internalTextureLabel = this._texture?.label, dB.noMipmap = this._noMipmap, this.name = TB, dB
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(TB, dB, VB) {
            if (TB.customType) {
              const BB = kB.d.Instantiate(TB.customType).Parse(TB, dB, VB);
              return TB.samplingMode && BB.updateSamplingMode && BB._samplingMode && BB._samplingMode !== TB.samplingMode && BB.updateSamplingMode(TB.samplingMode), BB
            }
            if (TB.isCube && !TB.isRenderTarget) return BB._CubeTextureParser(TB, dB, VB);
            const yB = void 0 !== TB.internalTextureUniqueId;
            if (!TB.name && !TB.isRenderTarget && !yB) return null;
            let pB;
            if (yB) {
              const BB = dB.PD().getLoadedTexturesCache();
              for (const dB of BB)
                if (dB.uniqueId === TB.internalTextureUniqueId) {
                  pB = dB;
                  break
                }
            }
            const lB = BB => {
              if (BB && BB._texture && (BB._texture._cachedWrapU = null, BB._texture._cachedWrapV = null, BB._texture._cachedWrapR = null), TB.samplingMode) {
                const dB = TB.samplingMode;
                BB && BB.samplingMode !== dB && BB.updateSamplingMode(dB)
              }
              if (BB && TB.animations)
                for (let dB = 0; dB < TB.animations.length; dB++) {
                  const VB = TB.animations[dB],
                    yB = (0, YB.e)("BABYLON.Animation");
                  yB && BB.animations.push(yB.Parse(VB))
                }
              BB && BB._texture && (yB && !pB && BB._texture._setUniqueId(TB.internalTextureUniqueId), BB._texture.label = TB.internalTextureLabel)
            };
            return vB.c.Parse((() => {
              let yB = !0;
              if (TB.noMipmap && (yB = !1), TB.mirrorPlane) {
                const VB = BB._CreateMirror(TB.name, TB.renderTargetSize, dB, yB);
                return VB._waitingRenderList = TB.renderList, VB.mirrorPlane = LB.d.FromArray(TB.mirrorPlane), lB(VB), VB
              }
              if (TB.isRenderTarget && !TB.base64String) {
                let VB = null;
                if (TB.isCube) {
                  if (dB.reflectionProbes)
                    for (let BB = 0; BB < dB.reflectionProbes.length; BB++) {
                      const VB = dB.reflectionProbes[BB];
                      if (VB.name === TB.name) return VB.cubeTexture
                    }
                } else VB = BB._CreateRenderTargetTexture(TB.name, TB.renderTargetSize, dB, yB, TB._creationFlags ?? 0), VB._waitingRenderList = TB.renderList;
                return lB(VB), VB
              }
              if (TB.isVideo) {
                const pB = BB._CreateVideoTexture(VB + (TB.url || TB.name), VB + (TB.src || TB.url), dB, yB, TB.invertY, TB.samplingMode, TB.settings || {});
                return lB(pB), pB
              } {
                let JB;
                if ("string" === typeof TB.base64String && TB.base64String && !pB) {
                  const VB = {
                      buffer: TB.base64String,
                      noMipmap: !yB,
                      invertY: TB.invertY,
                      samplingMode: TB.samplingMode,
                      useSRGBBuffer: TB._useSRGBBuffer ?? !1,
                      creationFlags: TB._creationFlags ?? 0,
                      onLoad: () => {
                        lB(JB)
                      }
                    },
                    pB = TB.base64String,
                    YB = pB.startsWith("data:") ? pB.substring(5) : pB;
                  JB = BB.CreateFromBase64String("", YB, dB, VB), JB.name = TB.name
                } else {
                  let YB;
                  YB = TB.name && (TB.name.indexOf("://") > 0 || TB.name.startsWith("data:")) ? TB.name : VB + TB.name, TB.url && (TB.url.startsWith("data:") || BB.UseSerializedUrlIfAny) && (YB = TB.url);
                  const gB = {
                    noMipmap: !yB,
                    invertY: TB.invertY,
                    samplingMode: TB.samplingMode,
                    useSRGBBuffer: TB._useSRGBBuffer ?? !1,
                    creationFlags: TB._creationFlags ?? 0,
                    onLoad: () => {
                      lB(JB)
                    },
                    internalTexture: pB
                  };
                  JB = new BB(YB, dB, gB)
                }
                return JB
              }
            }), TB, dB)
          }
          static CreateFromBase64String(TB, dB, VB, yB, pB) {
            let lB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : BB.TRILINEAR_SAMPLINGMODE;
            return new BB("data:" + dB, VB, yB, pB, lB, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, TB, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(TB, dB, VB) {
            let yB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              pB = arguments.length > 4 ? arguments[4] : void 0,
              lB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              JB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : BB.TRILINEAR_SAMPLINGMODE,
              YB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              gB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              oB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              kB = arguments.length > 10 ? arguments[10] : void 0,
              LB = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== TB.substring(0, 5) && (TB = "data:" + TB), new BB(TB, VB, pB, lB, JB, YB, gB, dB, yB, oB, void 0, void 0, kB, LB)
          }
        }, (() => {
          const pB = "function" === typeof Symbol && Symbol.metadata ? Object.create(FB[Symbol.metadata] ?? null) : void 0;
          TB = [(0, yB.W)()], dB = [(0, yB.W)()], DB = [(0, yB.W)()], mB = [(0, yB.W)()], iB = [(0, yB.W)()], NB = [(0, yB.W)()], tB = [(0, yB.W)()], fB = [(0, yB.W)()], sB = [(0, yB.W)()], MB = [(0, yB.W)()], zB = [(0, yB.W)()], wB = [(0, yB.W)()], UB = [(0, yB.W)()], (0, VB.g)(BB, null, UB, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: BB => "isBlocking" in BB,
              get: BB => BB.isBlocking
            },
            metadata: pB
          }, null, KB), (0, VB.g)(null, null, TB, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: BB => "url" in BB,
              get: BB => BB.url,
              set: (BB, TB) => {
                BB.url = TB
              }
            },
            metadata: pB
          }, rB, IB), (0, VB.g)(null, null, dB, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "uOffset" in BB,
              get: BB => BB.uOffset,
              set: (BB, TB) => {
                BB.uOffset = TB
              }
            },
            metadata: pB
          }, cB, SB), (0, VB.g)(null, null, DB, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "vOffset" in BB,
              get: BB => BB.vOffset,
              set: (BB, TB) => {
                BB.vOffset = TB
              }
            },
            metadata: pB
          }, PB, QB), (0, VB.g)(null, null, mB, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: BB => "uScale" in BB,
              get: BB => BB.uScale,
              set: (BB, TB) => {
                BB.uScale = TB
              }
            },
            metadata: pB
          }, RB, aB), (0, VB.g)(null, null, iB, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: BB => "vScale" in BB,
              get: BB => BB.vScale,
              set: (BB, TB) => {
                BB.vScale = TB
              }
            },
            metadata: pB
          }, ZB, XB), (0, VB.g)(null, null, NB, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: BB => "uAng" in BB,
              get: BB => BB.uAng,
              set: (BB, TB) => {
                BB.uAng = TB
              }
            },
            metadata: pB
          }, WB, hB), (0, VB.g)(null, null, tB, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: BB => "vAng" in BB,
              get: BB => BB.vAng,
              set: (BB, TB) => {
                BB.vAng = TB
              }
            },
            metadata: pB
          }, CB, GB), (0, VB.g)(null, null, fB, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: BB => "wAng" in BB,
              get: BB => BB.wAng,
              set: (BB, TB) => {
                BB.wAng = TB
              }
            },
            metadata: pB
          }, qB, xB), (0, VB.g)(null, null, sB, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: BB => "uRotationCenter" in BB,
              get: BB => BB.uRotationCenter,
              set: (BB, TB) => {
                BB.uRotationCenter = TB
              }
            },
            metadata: pB
          }, jB, AB), (0, VB.g)(null, null, MB, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: BB => "vRotationCenter" in BB,
              get: BB => BB.vRotationCenter,
              set: (BB, TB) => {
                BB.vRotationCenter = TB
              }
            },
            metadata: pB
          }, bB, nB), (0, VB.g)(null, null, zB, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: BB => "wRotationCenter" in BB,
              get: BB => BB.wRotationCenter,
              set: (BB, TB) => {
                BB.wRotationCenter = TB
              }
            },
            metadata: pB
          }, eB, BT), (0, VB.g)(null, null, wB, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: BB => "homogeneousRotationInUVTransform" in BB,
              get: BB => BB.homogeneousRotationInUVTransform,
              set: (BB, TB) => {
                BB.homogeneousRotationInUVTransform = TB
              }
            },
            metadata: pB
          }, TT, dT), pB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pB
          })
        })(), BB.SerializeBuffers = !0, BB.ForceSerializeBuffers = !1, BB.OnTextureLoadErrorObservable = new pB.e, BB._SerializeInternalTextureUniqueId = !1, BB._CubeTextureParser = (BB, TB, dB) => {
          throw (0, gB.i)("CubeTexture")
        }, BB._CreateMirror = (BB, TB, dB, VB) => {
          throw (0, gB.i)("MirrorTexture")
        }, BB._CreateRenderTargetTexture = (BB, TB, dB, VB, yB) => {
          throw (0, gB.i)("RenderTargetTexture")
        }, BB.NEAREST_SAMPLINGMODE = 1, BB.NEAREST_NEAREST_MIPLINEAR = 8, BB.BILINEAR_SAMPLINGMODE = 2, BB.LINEAR_LINEAR_MIPNEAREST = 11, BB.TRILINEAR_SAMPLINGMODE = 3, BB.LINEAR_LINEAR_MIPLINEAR = 3, BB.NEAREST_NEAREST_MIPNEAREST = 4, BB.NEAREST_LINEAR_MIPNEAREST = 5, BB.NEAREST_LINEAR_MIPLINEAR = 6, BB.NEAREST_LINEAR = 7, BB.NEAREST_NEAREST = 1, BB.LINEAR_NEAREST_MIPNEAREST = 9, BB.LINEAR_NEAREST_MIPLINEAR = 10, BB.LINEAR_LINEAR = 2, BB.LINEAR_NEAREST = 12, BB.EXPLICIT_MODE = 0, BB.SPHERICAL_MODE = 1, BB.PLANAR_MODE = 2, BB.CUBIC_MODE = 3, BB.PROJECTION_MODE = 4, BB.SKYBOX_MODE = 5, BB.INVCUBIC_MODE = 6, BB.EQUIRECTANGULAR_MODE = 7, BB.FIXED_EQUIRECTANGULAR_MODE = 8, BB.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, BB.CLAMP_ADDRESSMODE = 0, BB.WRAP_ADDRESSMODE = 1, BB.MIRROR_ADDRESSMODE = 2, BB.UseSerializedUrlIfAny = !1, BB
      })(),
      iB = !1;

    function NB() {
      iB || (iB = !0, (0, YB.g)("BABYLON.Texture", mB), vB.c._TextureParser = mB.Parse)
    }
  },
  38768: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB
    });
    class VB {
      constructor(BB, TB) {
        this.width = BB, this.height = TB
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
      bdB(BB) {
        this.width = BB.width, this.height = BB.height
      }
      YBB(BB, TB) {
        return this.width = BB, this.height = TB, this
      }
      set(BB, TB) {
        return this.YBB(BB, TB)
      }
      multiplyByFloats(BB, TB) {
        return new VB(this.width * BB, this.height * TB)
      }
      clone() {
        return new VB(this.width, this.height)
      }
      equals(BB) {
        return !!BB && (this.width === BB.width && this.height === BB.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new VB(0, 0)
      }
      add(BB) {
        return new VB(this.width + BB.width, this.height + BB.height)
      }
      subtract(BB) {
        return new VB(this.width - BB.width, this.height - BB.height)
      }
      scale(BB) {
        return new VB(this.width * BB, this.height * BB)
      }
      static Lerp(BB, TB, dB) {
        const yB = BB.width + (TB.width - BB.width) * dB,
          pB = BB.height + (TB.height - BB.height) * dB;
        return new VB(yB, pB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);