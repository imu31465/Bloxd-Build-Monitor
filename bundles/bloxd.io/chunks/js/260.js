export const id = 260;
export const ids = [260];
export const modules = {
  40480: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB
    });
    let TB = !1
  },
  40052: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => NB
    });
    var TB = ZB(40061),
      JB = ZB(40065),
      oB = ZB(37153),
      GB = ZB(37120),
      vB = ZB(37147),
      kB = ZB(37964),
      cB = ZB(40077);
    class nB {
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
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = cB.b.Zero(), this._cachedBaseSize = cB.b.Zero(), this._initialSamplingMode = 2, this._texture = nB._IsRenderTargetWrapper(BB) ? BB.texture : BB, this._texture && (this._engine = this._texture.PN(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(BB, this._texture, this._texture.generateMipMaps && IB)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var hB, zB = ZB(40085),
      FB = ZB(39931);
    let NB = (() => {
      var BB;
      let IB, ZB, cB, hB, FB, NB, gB, qB, yB, UB, WB, dB, CB, QB, sB, wB, OB, YB, iB, pB, aB, HB, MB, jB, PB, RB = nB,
        rB = [],
        mB = [],
        XB = [],
        LB = [],
        eB = [],
        uB = [],
        fB = [],
        lB = [],
        AB = [],
        tB = [],
        bB = [],
        xB = [],
        EB = [],
        DB = [],
        KB = [],
        VB = [],
        SB = [],
        BI = [],
        II = [],
        ZI = [],
        TI = [],
        JI = [],
        oI = [],
        GI = [],
        vI = [],
        kI = [],
        cI = [],
        nI = [],
        hI = [],
        zI = [],
        FI = [];
      return BB = class extends RB {
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
          this.JR()?.markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(BB) {
          BB !== this.isRGBD && (this._texture && (this._texture._isRGBD = BB), this.JR()?.markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this))))
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
          return this._uid || (this._uid = (0, kB.d)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(BB) {
          this._onDisposeObserver && this.oR.remove(this._onDisposeObserver), this._onDisposeObserver = this.oR.add(BB)
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
        constructor(IB) {
          let ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, TB.l)(this, rB), (0, TB.l)(this, mB, void 0)), this.name = ((0, TB.l)(this, XB), (0, TB.l)(this, LB, void 0)), this.displayName = ((0, TB.l)(this, eB), (0, TB.l)(this, uB, void 0)), this.metadata = ((0, TB.l)(this, fB), (0, TB.l)(this, lB, null)), this._internalMetadata = (0, TB.l)(this, AB), this.reservedDataStore = null, this._hasAlpha = (0, TB.l)(this, tB, !1), this._getAlphaFromRGB = ((0, TB.l)(this, bB), (0, TB.l)(this, xB, !1)), this.level = ((0, TB.l)(this, EB), (0, TB.l)(this, DB, 1)), this._coordinatesIndex = ((0, TB.l)(this, KB), (0, TB.l)(this, VB, 0)), this.optimizeUVAllocation = ((0, TB.l)(this, SB), (0, TB.l)(this, BI, !0)), this._coordinatesMode = ((0, TB.l)(this, II), (0, TB.l)(this, ZI, 0)), this.wrapR = ((0, TB.l)(this, TI), (0, TB.l)(this, JI, 1)), this.anisotropicFilteringLevel = ((0, TB.l)(this, oI), (0, TB.l)(this, GI, BB.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, TB.l)(this, vI), !1), this._gammaSpace = !0, this.invertZ = (0, TB.l)(this, kI, !1), this.lodLevelInAlpha = ((0, TB.l)(this, cI), (0, TB.l)(this, nI, !1)), this._dominantDirection = ((0, TB.l)(this, hI), null), this.isRenderTarget = (0, TB.l)(this, zI, !1), this._prefiltered = ((0, TB.l)(this, FI), !1), this._forceSerialize = !1, this.animations = [], this.oR = new oB.b, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, IB ? BB._IsScene(IB) ? this._scene = IB : this._engine = IB : this._scene = vB.e.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.PN()), this._texture = ZB, this._uid = null
        }
        JR() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return GB.b.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return GB.b.IdentityReadOnly
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
        _getFromCache(BB, IB, ZB, TB, JB, oB) {
          const GB = this._getEngine();
          if (!GB) return null;
          const vB = GB._getUseSRGBBuffer(!!JB, IB),
            kB = GB.getLoadedTexturesCache();
          for (let cB = 0; cB < kB.length; cB++) {
            const GB = kB[cB];
            if ((void 0 === JB || vB === GB._useSRGBBuffer) && (void 0 === TB || TB === GB.invertY) && GB.url === BB && GB.generateMipMaps === !IB && (!ZB || ZB === GB.samplingMode) && (void 0 === oB || oB === GB.isCube)) return GB.incrementReferences(), GB
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
          const BB = this.JR();
          BB && BB.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            TB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            JB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            GB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            vB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            kB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const cB = this._getEngine();
          if (!cB) return null;
          const nB = this.getSize();
          let hB = nB.width,
            zB = nB.height;
          0 !== IB && (hB /= Math.pow(2, IB), zB /= Math.pow(2, IB), hB = Math.round(hB), zB = Math.round(zB)), vB = Math.min(hB, vB), kB = Math.min(zB, kB);
          try {
            return this._texture.isCube || this._texture.is2DArray ? cB._readTexturePixels(this._texture, vB, kB, BB, IB, ZB, TB, JB, oB, GB) : cB._readTexturePixels(this._texture, vB, kB, -1, IB, ZB, TB, JB, oB, GB)
          } catch (FB) {
            return null
          }
        }
        _readPixelsSync() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            TB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            JB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const oB = this.getSize();
          let GB = oB.width,
            vB = oB.height;
          const kB = this._getEngine();
          if (!kB) return null;
          0 != IB && (GB /= Math.pow(2, IB), vB /= Math.pow(2, IB), GB = Math.round(GB), vB = Math.round(vB));
          try {
            return this._texture.isCube ? kB._readTexturePixelsSync(this._texture, GB, vB, BB, IB, ZB, TB, JB) : kB._readTexturePixelsSync(this._texture, GB, vB, -1, IB, ZB, TB, JB)
          } catch (cB) {
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
          this.oR.notifyObservers(this), this.oR.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !BB) return null;
          const IB = zB.b.Serialize(this);
          return zB.b.AppendSerializedAnimations(this, IB), IB
        }
        static WhenAllReady(BB, IB) {
          let ZB = BB.length;
          if (0 !== ZB)
            for (let TB = 0; TB < BB.length; TB++) {
              const JB = BB[TB];
              if (JB.isReady()) 0 === --ZB && IB();
              else {
                const BB = JB.onLoadObservable;
                BB ? BB.addOnce((() => {
                  0 === --ZB && IB()
                })) : 0 === --ZB && IB()
              }
            } else IB()
        }
        static _IsScene(BB) {
          return "Scene" === BB.getClassName()
        }
      }, (() => {
        const oB = "function" === typeof Symbol && Symbol.metadata ? Object.create(RB[Symbol.metadata] ?? null) : void 0;
        IB = [(0, JB.C)()], ZB = [(0, JB.C)()], cB = [(0, JB.C)()], hB = [(0, JB.C)()], FB = [(0, JB.C)("hasAlpha")], NB = [(0, JB.C)("getAlphaFromRGB")], gB = [(0, JB.C)()], qB = [(0, JB.C)("coordinatesIndex")], yB = [(0, JB.C)()], UB = [(0, JB.C)("coordinatesMode")], WB = [(0, JB.C)()], dB = [(0, JB.C)()], CB = [(0, JB.C)()], QB = [(0, JB.C)()], sB = [(0, JB.C)()], wB = [(0, JB.C)()], OB = [(0, JB.C)()], YB = [(0, JB.C)()], iB = [(0, JB.C)()], pB = [(0, JB.C)()], aB = [(0, JB.C)()], HB = [(0, JB.C)()], MB = [(0, JB.C)()], jB = [(0, JB.v)()], PB = [(0, JB.C)()], (0, TB.j)(BB, null, WB, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: BB => "wrapU" in BB,
            get: BB => BB.wrapU
          },
          metadata: oB
        }, null, rB), (0, TB.j)(BB, null, dB, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: BB => "wrapV" in BB,
            get: BB => BB.wrapV
          },
          metadata: oB
        }, null, rB), (0, TB.j)(BB, null, sB, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: BB => "isCube" in BB,
            get: BB => BB.isCube
          },
          metadata: oB
        }, null, rB), (0, TB.j)(BB, null, wB, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: BB => "is3D" in BB,
            get: BB => BB.is3D
          },
          metadata: oB
        }, null, rB), (0, TB.j)(BB, null, OB, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: BB => "is2DArray" in BB,
            get: BB => BB.is2DArray
          },
          metadata: oB
        }, null, rB), (0, TB.j)(BB, null, YB, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: BB => "gammaSpace" in BB,
            get: BB => BB.gammaSpace
          },
          metadata: oB
        }, null, rB), (0, TB.j)(BB, null, aB, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: BB => "lodGenerationOffset" in BB,
            get: BB => BB.lodGenerationOffset
          },
          metadata: oB
        }, null, rB), (0, TB.j)(BB, null, HB, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: BB => "lodGenerationScale" in BB,
            get: BB => BB.lodGenerationScale
          },
          metadata: oB
        }, null, rB), (0, TB.j)(BB, null, MB, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: BB => "linearSpecularLOD" in BB,
            get: BB => BB.linearSpecularLOD
          },
          metadata: oB
        }, null, rB), (0, TB.j)(BB, null, jB, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "irradianceTexture" in BB,
            get: BB => BB.irradianceTexture
          },
          metadata: oB
        }, null, rB), (0, TB.j)(null, null, IB, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: BB => "uniqueId" in BB,
            get: BB => BB.uniqueId,
            set: (BB, IB) => {
              BB.uniqueId = IB
            }
          },
          metadata: oB
        }, mB, XB), (0, TB.j)(null, null, ZB, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: BB => "name" in BB,
            get: BB => BB.name,
            set: (BB, IB) => {
              BB.name = IB
            }
          },
          metadata: oB
        }, LB, eB), (0, TB.j)(null, null, cB, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: BB => "displayName" in BB,
            get: BB => BB.displayName,
            set: (BB, IB) => {
              BB.displayName = IB
            }
          },
          metadata: oB
        }, uB, fB), (0, TB.j)(null, null, hB, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: BB => "metadata" in BB,
            get: BB => BB.metadata,
            set: (BB, IB) => {
              BB.metadata = IB
            }
          },
          metadata: oB
        }, lB, AB), (0, TB.j)(null, null, FB, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "_hasAlpha" in BB,
            get: BB => BB._hasAlpha,
            set: (BB, IB) => {
              BB._hasAlpha = IB
            }
          },
          metadata: oB
        }, tB, bB), (0, TB.j)(null, null, NB, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: BB => "_getAlphaFromRGB" in BB,
            get: BB => BB._getAlphaFromRGB,
            set: (BB, IB) => {
              BB._getAlphaFromRGB = IB
            }
          },
          metadata: oB
        }, xB, EB), (0, TB.j)(null, null, gB, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: BB => "level" in BB,
            get: BB => BB.level,
            set: (BB, IB) => {
              BB.level = IB
            }
          },
          metadata: oB
        }, DB, KB), (0, TB.j)(null, null, qB, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: BB => "_coordinatesIndex" in BB,
            get: BB => BB._coordinatesIndex,
            set: (BB, IB) => {
              BB._coordinatesIndex = IB
            }
          },
          metadata: oB
        }, VB, SB), (0, TB.j)(null, null, yB, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: BB => "optimizeUVAllocation" in BB,
            get: BB => BB.optimizeUVAllocation,
            set: (BB, IB) => {
              BB.optimizeUVAllocation = IB
            }
          },
          metadata: oB
        }, BI, II), (0, TB.j)(null, null, UB, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "_coordinatesMode" in BB,
            get: BB => BB._coordinatesMode,
            set: (BB, IB) => {
              BB._coordinatesMode = IB
            }
          },
          metadata: oB
        }, ZI, TI), (0, TB.j)(null, null, CB, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: BB => "wrapR" in BB,
            get: BB => BB.wrapR,
            set: (BB, IB) => {
              BB.wrapR = IB
            }
          },
          metadata: oB
        }, JI, oI), (0, TB.j)(null, null, QB, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: BB => "anisotropicFilteringLevel" in BB,
            get: BB => BB.anisotropicFilteringLevel,
            set: (BB, IB) => {
              BB.anisotropicFilteringLevel = IB
            }
          },
          metadata: oB
        }, GI, vI), (0, TB.j)(null, null, iB, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: BB => "invertZ" in BB,
            get: BB => BB.invertZ,
            set: (BB, IB) => {
              BB.invertZ = IB
            }
          },
          metadata: oB
        }, kI, cI), (0, TB.j)(null, null, pB, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "lodLevelInAlpha" in BB,
            get: BB => BB.lodLevelInAlpha,
            set: (BB, IB) => {
              BB.lodLevelInAlpha = IB
            }
          },
          metadata: oB
        }, nI, hI), (0, TB.j)(null, null, PB, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: BB => "isRenderTarget" in BB,
            get: BB => BB.isRenderTarget,
            set: (BB, IB) => {
              BB.isRenderTarget = IB
            }
          },
          metadata: oB
        }, zI, FI), oB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oB
        })
      })(), BB.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, BB
    })();
    (hB = NB.prototype).forceSphericalPolynomialsRecompute ?? (hB.forceSphericalPolynomialsRecompute = (0, FB.j)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(NB.prototype, "sphericalPolynomial") || Object.defineProperty(NB.prototype, "sphericalPolynomial", (0, FB.g)("BaseTexture", "sphericalPolynomial"))
  },
  40521: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => CB,
      e: () => WB
    });
    var TB = ZB(40061),
      JB = ZB(40065),
      oB = ZB(37153),
      GB = ZB(37120),
      vB = ZB(40052),
      kB = ZB(37170),
      cB = ZB(39931),
      nB = ZB(39943),
      hB = ZB(40154),
      zB = ZB(37824),
      FB = ZB(40124);

    function NB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const TB = IB.width,
        JB = IB.height;
      if (BB instanceof Float32Array) {
        let IB = BB.byteLength / BB.BYTES_PER_ELEMENT;
        const ZB = new Uint8Array(IB);
        for (; --IB >= 0;) {
          let TB = BB[IB];
          TB < 0 ? TB = 0 : TB > 1 && (TB = 1), ZB[IB] = 255 * TB
        }
        BB = ZB
      }
      const oB = document.createElement("canvas");
      oB.width = TB, oB.height = JB;
      const GB = oB.getContext("2d");
      if (!GB) return null;
      const vB = GB.createImageData(TB, JB);
      if (vB.data.set(BB), GB.putImageData(vB, 0, 0), ZB) {
        const BB = document.createElement("canvas");
        BB.width = TB, BB.height = JB;
        const IB = BB.getContext("2d");
        return IB ? (IB.translate(0, JB), IB.scale(1, -1), IB.drawImage(oB, 0, 0), BB.toDataURL("image/png")) : null
      }
      return oB.toDataURL("image/png")
    }

    function gB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const TB = BB.getInternalTexture();
      if (!TB) return null;
      const JB = BB._readPixelsSync(IB, ZB);
      return JB ? NB(JB, BB.getSize(), TB.invertY) : null
    }
    async function qB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const TB = BB.getInternalTexture();
      if (!TB) return null;
      const JB = await BB.readPixels(IB, ZB);
      return JB ? NB(JB, BB.getSize(), TB.invertY) : null
    }
    var yB = ZB(40480),
      UB = ZB(40085);
    let WB = (() => {
        var BB;
        let IB, ZB, NB, WB, dB, CB, QB, sB, wB, OB, YB, iB, pB, aB = vB.e,
          HB = [],
          MB = [],
          jB = [],
          PB = [],
          RB = [],
          rB = [],
          mB = [],
          XB = [],
          LB = [],
          eB = [],
          uB = [],
          fB = [],
          lB = [],
          AB = [],
          tB = [],
          bB = [],
          xB = [],
          EB = [],
          DB = [],
          KB = [],
          VB = [],
          SB = [],
          BI = [],
          II = [],
          ZI = [];
        return BB = class extends aB {
          static _CreateVideoTexture(IB, ZB, TB) {
            arguments.length > 5 && void 0 !== arguments[5] || BB.TRILINEAR_SAMPLINGMODE;
            throw (0, cB.m)("VideoTexture")
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
          constructor(IB, ZB, JB, GB) {
            let vB, kB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : BB.TRILINEAR_SAMPLINGMODE,
              cB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              hB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              zB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              FB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              NB = arguments.length > 9 ? arguments[9] : void 0,
              gB = arguments.length > 10 ? arguments[10] : void 0,
              qB = arguments.length > 11 ? arguments[11] : void 0,
              UB = arguments.length > 12 ? arguments[12] : void 0,
              WB = arguments.length > 13 ? arguments[13] : void 0;
            super(ZB), this.url = ((0, TB.l)(this, HB), (0, TB.l)(this, MB, null)), this.uOffset = ((0, TB.l)(this, jB), (0, TB.l)(this, PB, 0)), this.vOffset = ((0, TB.l)(this, RB), (0, TB.l)(this, rB, 0)), this.uScale = ((0, TB.l)(this, mB), (0, TB.l)(this, XB, 1)), this.vScale = ((0, TB.l)(this, LB), (0, TB.l)(this, eB, 1)), this.uAng = ((0, TB.l)(this, uB), (0, TB.l)(this, fB, 0)), this.vAng = ((0, TB.l)(this, lB), (0, TB.l)(this, AB, 0)), this.wAng = ((0, TB.l)(this, tB), (0, TB.l)(this, bB, 0)), this.uRotationCenter = ((0, TB.l)(this, xB), (0, TB.l)(this, EB, .5)), this.vRotationCenter = ((0, TB.l)(this, DB), (0, TB.l)(this, KB, .5)), this.wRotationCenter = ((0, TB.l)(this, VB), (0, TB.l)(this, SB, .5)), this.homogeneousRotationInUVTransform = ((0, TB.l)(this, BI), (0, TB.l)(this, II, !1)), this.inspectableCustomProperties = ((0, TB.l)(this, ZI), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new oB.b, this._isBlocking = !0, this.name = IB || "", this.url = IB;
            let dB = !1,
              CB = null,
              QB = !0;
            "object" === typeof JB && null !== JB ? (vB = JB.noMipmap ?? !1, GB = JB.invertY ?? !yB.e, kB = JB.samplingMode ?? BB.TRILINEAR_SAMPLINGMODE, cB = JB.onLoad ?? null, hB = JB.onError ?? null, zB = JB.buffer ?? null, FB = JB.deleteBuffer ?? !1, NB = JB.format, gB = JB.mimeType, qB = JB.loaderOptions, UB = JB.creationFlags, dB = JB.useSRGBBuffer ?? !1, CB = JB.internalTexture ?? null, QB = JB.gammaSpace ?? QB, WB = JB.forcedExtension ?? WB) : vB = !!JB, this._gammaSpace = QB, this._noMipmap = vB, this._invertY = void 0 === GB ? !yB.e : GB, this._initialSamplingMode = kB, this._buffer = zB, this._deleteBuffer = FB, this._mimeType = gB, this._loaderOptions = qB, this._creationFlags = UB, this._useSRGBBuffer = dB, this._forcedExtension = WB, void 0 !== NB && (this._format = NB);
            const sB = this.JR(),
              wB = this._getEngine();
            if (!wB) return;
            wB.onBeforeTextureInitObservable.notifyObservers(this);
            const OB = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), cB && cB(), !this.isBlocking && sB && sB.resetCachedMaterial()
              },
              YB = (IB, ZB) => {
                this._loadingError = !0, this._errorObject = {
                  message: IB,
                  exception: ZB
                }, hB && hB(IB, ZB), BB.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !CB) return this._delayedOnLoad = OB, void(this._delayedOnError = YB);
            if (this._texture = CB ?? this._getFromCache(this.url, vB, kB, this._invertY, dB, this.isCube), this._texture)
              if (this._texture.isReady) nB.b.SetImmediate((() => OB()));
              else {
                const BB = this._texture.onLoadedObservable.add(OB);
                this._texture.onErrorObservable.add((IB => {
                  YB(IB.message, IB.exception), this._texture?.onLoadedObservable.remove(BB)
                }))
              }
            else if (sB && sB.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = OB, this._delayedOnError = YB;
            else {
              try {
                this._texture = wB.createTexture(this.url, vB, this._invertY, sB, kB, OB, YB, this._buffer, void 0, this._format, this._forcedExtension, gB, qB, UB, dB)
              } catch (iB) {
                throw YB("error loading", iB), iB
              }
              FB && (this._buffer = null)
            }
          }
          updateURL(BB) {
            let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              ZB = arguments.length > 2 ? arguments[2] : void 0,
              TB = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.JR().markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = BB), this.url = BB, this._buffer = IB, this._forcedExtension = TB, this.delayLoadState = 4;
            const JB = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              JB ? JB() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), ZB && ZB()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const BB = this.JR();
            if (!BB) return;
            let IB = this.url;
            !IB && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (IB = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(IB, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? nB.b.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = BB.PN().createTexture(IB, this._noMipmap, this._invertY, BB, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(BB, IB, ZB, TB) {
            BB *= this._cachedUScale, IB *= this._cachedVScale, BB -= this.uRotationCenter * this._cachedUScale, IB -= this.vRotationCenter * this._cachedVScale, ZB -= this.wRotationCenter, GB.s.TransformCoordinatesFromFloatsToRef(BB, IB, ZB, this._rowGenerationMatrix, TB), TB.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, TB.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, TB.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * BB === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * BB, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = GB.b.Zero(), this._rowGenerationMatrix = new GB.b, this._t0 = GB.s.Zero(), this._t1 = GB.s.Zero(), this._t2 = GB.s.Zero()), GB.b.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (GB.b.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, GB.m.Matrix[0]), GB.b.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, GB.m.Matrix[1]), GB.b.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, GB.m.Matrix[2]), GB.b.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, GB.m.Matrix[3]), GB.m.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(GB.m.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(GB.m.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(GB.m.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.VTB(this._t0), this._t2.VTB(this._t0), GB.b.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const IB = this.JR();
            if (!IB) return this._cachedTextureMatrix;
            const ZB = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && ZB !== this._cachedIdentity3x2 && IB.markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const IB = this.JR();
            if (!IB) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== BB.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === IB.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = GB.b.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = GB.b.Zero());
            const ZB = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case BB.PLANAR_MODE:
                GB.b.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case BB.PROJECTION_MODE: {
                GB.b.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const BB = IB.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = BB.updateFlag, BB.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                GB.b.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return ZB && IB.markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const IB = {
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
            return UB.b.Clone((() => new BB(this._texture ? this._texture.url : null, this.JR(), IB)), this)
          }
          serialize() {
            const IB = this.name;
            BB.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const ZB = super.serialize(BB._SerializeInternalTextureUniqueId);
            if (!ZB) return null;
            if (BB.SerializeBuffers || BB.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) ZB.base64String = this._buffer, ZB.name = ZB.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const BB = this.mimeType || "image/png";
              ZB.base64String = `data:${BB};base64,${(0,FB.h)(this._buffer)}`
            } else(BB.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (ZB.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? gB(this) : qB(this));
            return ZB.invertY = this._invertY, ZB.samplingMode = this.samplingMode, ZB._creationFlags = this._creationFlags, ZB._useSRGBBuffer = this._useSRGBBuffer, BB._SerializeInternalTextureUniqueId && (ZB.internalTextureUniqueId = this._texture?.uniqueId), ZB.internalTextureLabel = this._texture?.label, ZB.noMipmap = this._noMipmap, this.name = IB, ZB
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(IB, ZB, TB) {
            if (IB.customType) {
              const BB = hB.d.Instantiate(IB.customType).Parse(IB, ZB, TB);
              return IB.samplingMode && BB.updateSamplingMode && BB._samplingMode && BB._samplingMode !== IB.samplingMode && BB.updateSamplingMode(IB.samplingMode), BB
            }
            if (IB.isCube && !IB.isRenderTarget) return BB._CubeTextureParser(IB, ZB, TB);
            const JB = void 0 !== IB.internalTextureUniqueId;
            if (!IB.name && !IB.isRenderTarget && !JB) return null;
            let oB;
            if (JB) {
              const BB = ZB.PN().getLoadedTexturesCache();
              for (const ZB of BB)
                if (ZB.uniqueId === IB.internalTextureUniqueId) {
                  oB = ZB;
                  break
                }
            }
            const GB = BB => {
              if (BB && BB._texture && (BB._texture._cachedWrapU = null, BB._texture._cachedWrapV = null, BB._texture._cachedWrapR = null), IB.samplingMode) {
                const ZB = IB.samplingMode;
                BB && BB.samplingMode !== ZB && BB.updateSamplingMode(ZB)
              }
              if (BB && IB.animations)
                for (let ZB = 0; ZB < IB.animations.length; ZB++) {
                  const TB = IB.animations[ZB],
                    JB = (0, kB.e)("BABYLON.Animation");
                  JB && BB.animations.push(JB.Parse(TB))
                }
              BB && BB._texture && (JB && !oB && BB._texture._setUniqueId(IB.internalTextureUniqueId), BB._texture.label = IB.internalTextureLabel)
            };
            return UB.b.Parse((() => {
              let JB = !0;
              if (IB.noMipmap && (JB = !1), IB.mirrorPlane) {
                const TB = BB._CreateMirror(IB.name, IB.renderTargetSize, ZB, JB);
                return TB._waitingRenderList = IB.renderList, TB.mirrorPlane = zB.c.FromArray(IB.mirrorPlane), GB(TB), TB
              }
              if (IB.isRenderTarget && !IB.base64String) {
                let TB = null;
                if (IB.isCube) {
                  if (ZB.reflectionProbes)
                    for (let BB = 0; BB < ZB.reflectionProbes.length; BB++) {
                      const TB = ZB.reflectionProbes[BB];
                      if (TB.name === IB.name) return TB.cubeTexture
                    }
                } else TB = BB._CreateRenderTargetTexture(IB.name, IB.renderTargetSize, ZB, JB, IB._creationFlags ?? 0), TB._waitingRenderList = IB.renderList;
                return GB(TB), TB
              }
              if (IB.isVideo) {
                const oB = BB._CreateVideoTexture(TB + (IB.url || IB.name), TB + (IB.src || IB.url), ZB, JB, IB.invertY, IB.samplingMode, IB.settings || {});
                return GB(oB), oB
              } {
                let vB;
                if ("string" === typeof IB.base64String && IB.base64String && !oB) {
                  const TB = {
                      buffer: IB.base64String,
                      noMipmap: !JB,
                      invertY: IB.invertY,
                      samplingMode: IB.samplingMode,
                      useSRGBBuffer: IB._useSRGBBuffer ?? !1,
                      creationFlags: IB._creationFlags ?? 0,
                      onLoad: () => {
                        GB(vB)
                      }
                    },
                    oB = IB.base64String,
                    kB = oB.startsWith("data:") ? oB.substring(5) : oB;
                  vB = BB.CreateFromBase64String("", kB, ZB, TB), vB.name = IB.name
                } else {
                  let kB;
                  kB = IB.name && (IB.name.indexOf("://") > 0 || IB.name.startsWith("data:")) ? IB.name : TB + IB.name, IB.url && (IB.url.startsWith("data:") || BB.UseSerializedUrlIfAny) && (kB = IB.url);
                  const cB = {
                    noMipmap: !JB,
                    invertY: IB.invertY,
                    samplingMode: IB.samplingMode,
                    useSRGBBuffer: IB._useSRGBBuffer ?? !1,
                    creationFlags: IB._creationFlags ?? 0,
                    onLoad: () => {
                      GB(vB)
                    },
                    internalTexture: oB
                  };
                  vB = new BB(kB, ZB, cB)
                }
                return vB
              }
            }), IB, ZB)
          }
          static CreateFromBase64String(IB, ZB, TB, JB, oB) {
            let GB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : BB.TRILINEAR_SAMPLINGMODE;
            return new BB("data:" + ZB, TB, JB, oB, GB, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, IB, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(IB, ZB, TB) {
            let JB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              oB = arguments.length > 4 ? arguments[4] : void 0,
              GB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              vB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : BB.TRILINEAR_SAMPLINGMODE,
              kB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              cB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              nB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              hB = arguments.length > 10 ? arguments[10] : void 0,
              zB = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== IB.substring(0, 5) && (IB = "data:" + IB), new BB(IB, TB, oB, GB, vB, kB, cB, ZB, JB, nB, void 0, void 0, hB, zB)
          }
        }, (() => {
          const oB = "function" === typeof Symbol && Symbol.metadata ? Object.create(aB[Symbol.metadata] ?? null) : void 0;
          IB = [(0, JB.C)()], ZB = [(0, JB.C)()], NB = [(0, JB.C)()], WB = [(0, JB.C)()], dB = [(0, JB.C)()], CB = [(0, JB.C)()], QB = [(0, JB.C)()], sB = [(0, JB.C)()], wB = [(0, JB.C)()], OB = [(0, JB.C)()], YB = [(0, JB.C)()], iB = [(0, JB.C)()], pB = [(0, JB.C)()], (0, TB.j)(BB, null, pB, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: BB => "isBlocking" in BB,
              get: BB => BB.isBlocking
            },
            metadata: oB
          }, null, HB), (0, TB.j)(null, null, IB, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: BB => "url" in BB,
              get: BB => BB.url,
              set: (BB, IB) => {
                BB.url = IB
              }
            },
            metadata: oB
          }, MB, jB), (0, TB.j)(null, null, ZB, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "uOffset" in BB,
              get: BB => BB.uOffset,
              set: (BB, IB) => {
                BB.uOffset = IB
              }
            },
            metadata: oB
          }, PB, RB), (0, TB.j)(null, null, NB, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "vOffset" in BB,
              get: BB => BB.vOffset,
              set: (BB, IB) => {
                BB.vOffset = IB
              }
            },
            metadata: oB
          }, rB, mB), (0, TB.j)(null, null, WB, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: BB => "uScale" in BB,
              get: BB => BB.uScale,
              set: (BB, IB) => {
                BB.uScale = IB
              }
            },
            metadata: oB
          }, XB, LB), (0, TB.j)(null, null, dB, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: BB => "vScale" in BB,
              get: BB => BB.vScale,
              set: (BB, IB) => {
                BB.vScale = IB
              }
            },
            metadata: oB
          }, eB, uB), (0, TB.j)(null, null, CB, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: BB => "uAng" in BB,
              get: BB => BB.uAng,
              set: (BB, IB) => {
                BB.uAng = IB
              }
            },
            metadata: oB
          }, fB, lB), (0, TB.j)(null, null, QB, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: BB => "vAng" in BB,
              get: BB => BB.vAng,
              set: (BB, IB) => {
                BB.vAng = IB
              }
            },
            metadata: oB
          }, AB, tB), (0, TB.j)(null, null, sB, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: BB => "wAng" in BB,
              get: BB => BB.wAng,
              set: (BB, IB) => {
                BB.wAng = IB
              }
            },
            metadata: oB
          }, bB, xB), (0, TB.j)(null, null, wB, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: BB => "uRotationCenter" in BB,
              get: BB => BB.uRotationCenter,
              set: (BB, IB) => {
                BB.uRotationCenter = IB
              }
            },
            metadata: oB
          }, EB, DB), (0, TB.j)(null, null, OB, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: BB => "vRotationCenter" in BB,
              get: BB => BB.vRotationCenter,
              set: (BB, IB) => {
                BB.vRotationCenter = IB
              }
            },
            metadata: oB
          }, KB, VB), (0, TB.j)(null, null, YB, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: BB => "wRotationCenter" in BB,
              get: BB => BB.wRotationCenter,
              set: (BB, IB) => {
                BB.wRotationCenter = IB
              }
            },
            metadata: oB
          }, SB, BI), (0, TB.j)(null, null, iB, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: BB => "homogeneousRotationInUVTransform" in BB,
              get: BB => BB.homogeneousRotationInUVTransform,
              set: (BB, IB) => {
                BB.homogeneousRotationInUVTransform = IB
              }
            },
            metadata: oB
          }, II, ZI), oB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oB
          })
        })(), BB.SerializeBuffers = !0, BB.ForceSerializeBuffers = !1, BB.OnTextureLoadErrorObservable = new oB.b, BB._SerializeInternalTextureUniqueId = !1, BB._CubeTextureParser = (BB, IB, ZB) => {
          throw (0, cB.m)("CubeTexture")
        }, BB._CreateMirror = (BB, IB, ZB, TB) => {
          throw (0, cB.m)("MirrorTexture")
        }, BB._CreateRenderTargetTexture = (BB, IB, ZB, TB, JB) => {
          throw (0, cB.m)("RenderTargetTexture")
        }, BB.NEAREST_SAMPLINGMODE = 1, BB.NEAREST_NEAREST_MIPLINEAR = 8, BB.BILINEAR_SAMPLINGMODE = 2, BB.LINEAR_LINEAR_MIPNEAREST = 11, BB.TRILINEAR_SAMPLINGMODE = 3, BB.LINEAR_LINEAR_MIPLINEAR = 3, BB.NEAREST_NEAREST_MIPNEAREST = 4, BB.NEAREST_LINEAR_MIPNEAREST = 5, BB.NEAREST_LINEAR_MIPLINEAR = 6, BB.NEAREST_LINEAR = 7, BB.NEAREST_NEAREST = 1, BB.LINEAR_NEAREST_MIPNEAREST = 9, BB.LINEAR_NEAREST_MIPLINEAR = 10, BB.LINEAR_LINEAR = 2, BB.LINEAR_NEAREST = 12, BB.EXPLICIT_MODE = 0, BB.SPHERICAL_MODE = 1, BB.PLANAR_MODE = 2, BB.CUBIC_MODE = 3, BB.PROJECTION_MODE = 4, BB.SKYBOX_MODE = 5, BB.INVCUBIC_MODE = 6, BB.EQUIRECTANGULAR_MODE = 7, BB.FIXED_EQUIRECTANGULAR_MODE = 8, BB.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, BB.CLAMP_ADDRESSMODE = 0, BB.WRAP_ADDRESSMODE = 1, BB.MIRROR_ADDRESSMODE = 2, BB.UseSerializedUrlIfAny = !1, BB
      })(),
      dB = !1;

    function CB() {
      dB || (dB = !0, (0, kB.i)("BABYLON.Texture", WB), UB.b._TextureParser = WB.Parse)
    }
  },
  40077: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB
    });
    class TB {
      constructor(BB, IB) {
        this.width = BB, this.height = IB
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
      TY(BB) {
        this.width = BB.width, this.height = BB.height
      }
      cBB(BB, IB) {
        return this.width = BB, this.height = IB, this
      }
      set(BB, IB) {
        return this.cBB(BB, IB)
      }
      multiplyByFloats(BB, IB) {
        return new TB(this.width * BB, this.height * IB)
      }
      clone() {
        return new TB(this.width, this.height)
      }
      equals(BB) {
        return !!BB && (this.width === BB.width && this.height === BB.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new TB(0, 0)
      }
      add(BB) {
        return new TB(this.width + BB.width, this.height + BB.height)
      }
      subtract(BB) {
        return new TB(this.width - BB.width, this.height - BB.height)
      }
      scale(BB) {
        return new TB(this.width * BB, this.height * BB)
      }
      static Lerp(BB, IB, ZB) {
        const JB = BB.width + (IB.width - BB.width) * ZB,
          oB = BB.height + (IB.height - BB.height) * ZB;
        return new TB(JB, oB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);