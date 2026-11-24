export const id = 260;
export const ids = [260];
export const modules = {
  40535: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB
    });
    let QB = !1
  },
  40062: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => JB
    });
    var QB = zB(40066),
      nB = zB(40068),
      dB = zB(37202),
      IB = zB(37171),
      NB = zB(37197),
      uB = zB(37987),
      UB = zB(40081);
    class aB {
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
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = UB.d.Zero(), this._cachedBaseSize = UB.d.Zero(), this._initialSamplingMode = 2, this._texture = aB._IsRenderTargetWrapper(BB) ? BB.texture : BB, this._texture && (this._engine = this._texture.wJ(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(BB, this._texture, this._texture.generateMipMaps && jB)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var pB, rB = zB(40086),
      sB = zB(39965);
    let JB = (() => {
      var BB;
      let jB, zB, UB, pB, sB, JB, mB, yB, kB, GB, LB, gB, tB, SB, MB, EB, iB, qB, fB, oB, HB, DB, FB, YB, VB, hB = aB,
        XB = [],
        ZB = [],
        AB = [],
        TB = [],
        PB = [],
        WB = [],
        eB = [],
        lB = [],
        wB = [],
        xB = [],
        KB = [],
        CB = [],
        cB = [],
        bB = [],
        vB = [],
        RB = [],
        OB = [],
        Bj = [],
        jj = [],
        zj = [],
        Qj = [],
        nj = [],
        dj = [],
        Ij = [],
        Nj = [],
        uj = [],
        Uj = [],
        aj = [],
        pj = [],
        rj = [],
        sj = [];
      return BB = class extends hB {
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
          this.aY()?.markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(BB) {
          BB !== this.isRGBD && (this._texture && (this._texture._isRGBD = BB), this.aY()?.markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this))))
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
          return this._uid || (this._uid = (0, uB.d)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(BB) {
          this._onDisposeObserver && this.pY.remove(this._onDisposeObserver), this._onDisposeObserver = this.pY.add(BB)
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
        constructor(jB) {
          let zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, QB.g)(this, XB), (0, QB.g)(this, ZB, void 0)), this.name = ((0, QB.g)(this, AB), (0, QB.g)(this, TB, void 0)), this.displayName = ((0, QB.g)(this, PB), (0, QB.g)(this, WB, void 0)), this.metadata = ((0, QB.g)(this, eB), (0, QB.g)(this, lB, null)), this._internalMetadata = (0, QB.g)(this, wB), this.reservedDataStore = null, this._hasAlpha = (0, QB.g)(this, xB, !1), this._getAlphaFromRGB = ((0, QB.g)(this, KB), (0, QB.g)(this, CB, !1)), this.level = ((0, QB.g)(this, cB), (0, QB.g)(this, bB, 1)), this._coordinatesIndex = ((0, QB.g)(this, vB), (0, QB.g)(this, RB, 0)), this.optimizeUVAllocation = ((0, QB.g)(this, OB), (0, QB.g)(this, Bj, !0)), this._coordinatesMode = ((0, QB.g)(this, jj), (0, QB.g)(this, zj, 0)), this.wrapR = ((0, QB.g)(this, Qj), (0, QB.g)(this, nj, 1)), this.anisotropicFilteringLevel = ((0, QB.g)(this, dj), (0, QB.g)(this, Ij, BB.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, QB.g)(this, Nj), !1), this._gammaSpace = !0, this.invertZ = (0, QB.g)(this, uj, !1), this.lodLevelInAlpha = ((0, QB.g)(this, Uj), (0, QB.g)(this, aj, !1)), this._dominantDirection = ((0, QB.g)(this, pj), null), this.isRenderTarget = (0, QB.g)(this, rj, !1), this._prefiltered = ((0, QB.g)(this, sj), !1), this._forceSerialize = !1, this.animations = [], this.pY = new dB.c, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, jB ? BB._IsScene(jB) ? this._scene = jB : this._engine = jB : this._scene = NB.c.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.wJ()), this._texture = zB, this._uid = null
        }
        aY() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return IB.c.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return IB.c.IdentityReadOnly
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
        _getFromCache(BB, jB, zB, QB, nB, dB) {
          const IB = this._getEngine();
          if (!IB) return null;
          const NB = IB._getUseSRGBBuffer(!!nB, jB),
            uB = IB.getLoadedTexturesCache();
          for (let UB = 0; UB < uB.length; UB++) {
            const IB = uB[UB];
            if ((void 0 === nB || NB === IB._useSRGBBuffer) && (void 0 === QB || QB === IB.invertY) && IB.url === BB && IB.generateMipMaps === !jB && (!zB || zB === IB.samplingMode) && (void 0 === dB || dB === IB.isCube)) return IB.incrementReferences(), IB
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
          const BB = this.aY();
          BB && BB.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            QB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            nB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            IB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            NB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            uB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const UB = this._getEngine();
          if (!UB) return null;
          const aB = this.getSize();
          let pB = aB.width,
            rB = aB.height;
          0 !== jB && (pB /= Math.pow(2, jB), rB /= Math.pow(2, jB), pB = Math.round(pB), rB = Math.round(rB)), NB = Math.min(pB, NB), uB = Math.min(rB, uB);
          try {
            return this._texture.isCube || this._texture.is2DArray ? UB._readTexturePixels(this._texture, NB, uB, BB, jB, zB, QB, nB, dB, IB) : UB._readTexturePixels(this._texture, NB, uB, -1, jB, zB, QB, nB, dB, IB)
          } catch (sB) {
            return null
          }
        }
        _readPixelsSync() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            QB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            nB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const dB = this.getSize();
          let IB = dB.width,
            NB = dB.height;
          const uB = this._getEngine();
          if (!uB) return null;
          0 != jB && (IB /= Math.pow(2, jB), NB /= Math.pow(2, jB), IB = Math.round(IB), NB = Math.round(NB));
          try {
            return this._texture.isCube ? uB._readTexturePixelsSync(this._texture, IB, NB, BB, jB, zB, QB, nB) : uB._readTexturePixelsSync(this._texture, IB, NB, -1, jB, zB, QB, nB)
          } catch (UB) {
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
          this.pY.notifyObservers(this), this.pY.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !BB) return null;
          const jB = rB.b.Serialize(this);
          return rB.b.AppendSerializedAnimations(this, jB), jB
        }
        static WhenAllReady(BB, jB) {
          let zB = BB.length;
          if (0 !== zB)
            for (let QB = 0; QB < BB.length; QB++) {
              const nB = BB[QB];
              if (nB.isReady()) 0 === --zB && jB();
              else {
                const BB = nB.onLoadObservable;
                BB ? BB.addOnce((() => {
                  0 === --zB && jB()
                })) : 0 === --zB && jB()
              }
            } else jB()
        }
        static _IsScene(BB) {
          return "Scene" === BB.getClassName()
        }
      }, (() => {
        const dB = "function" === typeof Symbol && Symbol.metadata ? Object.create(hB[Symbol.metadata] ?? null) : void 0;
        jB = [(0, nB.A)()], zB = [(0, nB.A)()], UB = [(0, nB.A)()], pB = [(0, nB.A)()], sB = [(0, nB.A)("hasAlpha")], JB = [(0, nB.A)("getAlphaFromRGB")], mB = [(0, nB.A)()], yB = [(0, nB.A)("coordinatesIndex")], kB = [(0, nB.A)()], GB = [(0, nB.A)("coordinatesMode")], LB = [(0, nB.A)()], gB = [(0, nB.A)()], tB = [(0, nB.A)()], SB = [(0, nB.A)()], MB = [(0, nB.A)()], EB = [(0, nB.A)()], iB = [(0, nB.A)()], qB = [(0, nB.A)()], fB = [(0, nB.A)()], oB = [(0, nB.A)()], HB = [(0, nB.A)()], DB = [(0, nB.A)()], FB = [(0, nB.A)()], YB = [(0, nB.v)()], VB = [(0, nB.A)()], (0, QB.e)(BB, null, LB, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: BB => "wrapU" in BB,
            get: BB => BB.wrapU
          },
          metadata: dB
        }, null, XB), (0, QB.e)(BB, null, gB, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: BB => "wrapV" in BB,
            get: BB => BB.wrapV
          },
          metadata: dB
        }, null, XB), (0, QB.e)(BB, null, MB, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: BB => "isCube" in BB,
            get: BB => BB.isCube
          },
          metadata: dB
        }, null, XB), (0, QB.e)(BB, null, EB, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: BB => "is3D" in BB,
            get: BB => BB.is3D
          },
          metadata: dB
        }, null, XB), (0, QB.e)(BB, null, iB, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: BB => "is2DArray" in BB,
            get: BB => BB.is2DArray
          },
          metadata: dB
        }, null, XB), (0, QB.e)(BB, null, qB, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: BB => "gammaSpace" in BB,
            get: BB => BB.gammaSpace
          },
          metadata: dB
        }, null, XB), (0, QB.e)(BB, null, HB, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: BB => "lodGenerationOffset" in BB,
            get: BB => BB.lodGenerationOffset
          },
          metadata: dB
        }, null, XB), (0, QB.e)(BB, null, DB, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: BB => "lodGenerationScale" in BB,
            get: BB => BB.lodGenerationScale
          },
          metadata: dB
        }, null, XB), (0, QB.e)(BB, null, FB, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: BB => "linearSpecularLOD" in BB,
            get: BB => BB.linearSpecularLOD
          },
          metadata: dB
        }, null, XB), (0, QB.e)(BB, null, YB, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "irradianceTexture" in BB,
            get: BB => BB.irradianceTexture
          },
          metadata: dB
        }, null, XB), (0, QB.e)(null, null, jB, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: BB => "uniqueId" in BB,
            get: BB => BB.uniqueId,
            set: (BB, jB) => {
              BB.uniqueId = jB
            }
          },
          metadata: dB
        }, ZB, AB), (0, QB.e)(null, null, zB, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: BB => "name" in BB,
            get: BB => BB.name,
            set: (BB, jB) => {
              BB.name = jB
            }
          },
          metadata: dB
        }, TB, PB), (0, QB.e)(null, null, UB, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: BB => "displayName" in BB,
            get: BB => BB.displayName,
            set: (BB, jB) => {
              BB.displayName = jB
            }
          },
          metadata: dB
        }, WB, eB), (0, QB.e)(null, null, pB, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: BB => "metadata" in BB,
            get: BB => BB.metadata,
            set: (BB, jB) => {
              BB.metadata = jB
            }
          },
          metadata: dB
        }, lB, wB), (0, QB.e)(null, null, sB, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "_hasAlpha" in BB,
            get: BB => BB._hasAlpha,
            set: (BB, jB) => {
              BB._hasAlpha = jB
            }
          },
          metadata: dB
        }, xB, KB), (0, QB.e)(null, null, JB, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: BB => "_getAlphaFromRGB" in BB,
            get: BB => BB._getAlphaFromRGB,
            set: (BB, jB) => {
              BB._getAlphaFromRGB = jB
            }
          },
          metadata: dB
        }, CB, cB), (0, QB.e)(null, null, mB, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: BB => "level" in BB,
            get: BB => BB.level,
            set: (BB, jB) => {
              BB.level = jB
            }
          },
          metadata: dB
        }, bB, vB), (0, QB.e)(null, null, yB, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: BB => "_coordinatesIndex" in BB,
            get: BB => BB._coordinatesIndex,
            set: (BB, jB) => {
              BB._coordinatesIndex = jB
            }
          },
          metadata: dB
        }, RB, OB), (0, QB.e)(null, null, kB, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: BB => "optimizeUVAllocation" in BB,
            get: BB => BB.optimizeUVAllocation,
            set: (BB, jB) => {
              BB.optimizeUVAllocation = jB
            }
          },
          metadata: dB
        }, Bj, jj), (0, QB.e)(null, null, GB, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "_coordinatesMode" in BB,
            get: BB => BB._coordinatesMode,
            set: (BB, jB) => {
              BB._coordinatesMode = jB
            }
          },
          metadata: dB
        }, zj, Qj), (0, QB.e)(null, null, tB, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: BB => "wrapR" in BB,
            get: BB => BB.wrapR,
            set: (BB, jB) => {
              BB.wrapR = jB
            }
          },
          metadata: dB
        }, nj, dj), (0, QB.e)(null, null, SB, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: BB => "anisotropicFilteringLevel" in BB,
            get: BB => BB.anisotropicFilteringLevel,
            set: (BB, jB) => {
              BB.anisotropicFilteringLevel = jB
            }
          },
          metadata: dB
        }, Ij, Nj), (0, QB.e)(null, null, fB, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: BB => "invertZ" in BB,
            get: BB => BB.invertZ,
            set: (BB, jB) => {
              BB.invertZ = jB
            }
          },
          metadata: dB
        }, uj, Uj), (0, QB.e)(null, null, oB, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "lodLevelInAlpha" in BB,
            get: BB => BB.lodLevelInAlpha,
            set: (BB, jB) => {
              BB.lodLevelInAlpha = jB
            }
          },
          metadata: dB
        }, aj, pj), (0, QB.e)(null, null, VB, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: BB => "isRenderTarget" in BB,
            get: BB => BB.isRenderTarget,
            set: (BB, jB) => {
              BB.isRenderTarget = jB
            }
          },
          metadata: dB
        }, rj, sj), dB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: dB
        })
      })(), BB.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, BB
    })();
    (pB = JB.prototype).forceSphericalPolynomialsRecompute ?? (pB.forceSphericalPolynomialsRecompute = (0, sB.i)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(JB.prototype, "sphericalPolynomial") || Object.defineProperty(JB.prototype, "sphericalPolynomial", (0, sB.f)("BaseTexture", "sphericalPolynomial"))
  },
  40580: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => tB,
      i: () => LB
    });
    var QB = zB(40066),
      nB = zB(40068),
      dB = zB(37202),
      IB = zB(37171),
      NB = zB(40062),
      uB = zB(37222),
      UB = zB(39965),
      aB = zB(39976),
      pB = zB(40167),
      rB = zB(37869),
      sB = zB(40120);

    function JB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const QB = jB.width,
        nB = jB.height;
      if (BB instanceof Float32Array) {
        let jB = BB.byteLength / BB.BYTES_PER_ELEMENT;
        const zB = new Uint8Array(jB);
        for (; --jB >= 0;) {
          let QB = BB[jB];
          QB < 0 ? QB = 0 : QB > 1 && (QB = 1), zB[jB] = 255 * QB
        }
        BB = zB
      }
      const dB = document.createElement("canvas");
      dB.width = QB, dB.height = nB;
      const IB = dB.getContext("2d");
      if (!IB) return null;
      const NB = IB.createImageData(QB, nB);
      if (NB.data.set(BB), IB.putImageData(NB, 0, 0), zB) {
        const BB = document.createElement("canvas");
        BB.width = QB, BB.height = nB;
        const jB = BB.getContext("2d");
        return jB ? (jB.translate(0, nB), jB.scale(1, -1), jB.drawImage(dB, 0, 0), BB.toDataURL("image/png")) : null
      }
      return dB.toDataURL("image/png")
    }

    function mB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const QB = BB.getInternalTexture();
      if (!QB) return null;
      const nB = BB._readPixelsSync(jB, zB);
      return nB ? JB(nB, BB.getSize(), QB.invertY) : null
    }
    async function yB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const QB = BB.getInternalTexture();
      if (!QB) return null;
      const nB = await BB.readPixels(jB, zB);
      return nB ? JB(nB, BB.getSize(), QB.invertY) : null
    }
    var kB = zB(40535),
      GB = zB(40086);
    let LB = (() => {
        var BB;
        let jB, zB, JB, LB, gB, tB, SB, MB, EB, iB, qB, fB, oB, HB = NB.c,
          DB = [],
          FB = [],
          YB = [],
          VB = [],
          hB = [],
          XB = [],
          ZB = [],
          AB = [],
          TB = [],
          PB = [],
          WB = [],
          eB = [],
          lB = [],
          wB = [],
          xB = [],
          KB = [],
          CB = [],
          cB = [],
          bB = [],
          vB = [],
          RB = [],
          OB = [],
          Bj = [],
          jj = [],
          zj = [];
        return BB = class extends HB {
          static _CreateVideoTexture(jB, zB, QB) {
            arguments.length > 5 && void 0 !== arguments[5] || BB.TRILINEAR_SAMPLINGMODE;
            throw (0, UB.k)("VideoTexture")
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
          constructor(jB, zB, nB, IB) {
            let NB, uB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : BB.TRILINEAR_SAMPLINGMODE,
              UB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              pB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              rB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              sB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              JB = arguments.length > 9 ? arguments[9] : void 0,
              mB = arguments.length > 10 ? arguments[10] : void 0,
              yB = arguments.length > 11 ? arguments[11] : void 0,
              GB = arguments.length > 12 ? arguments[12] : void 0,
              LB = arguments.length > 13 ? arguments[13] : void 0;
            super(zB), this.url = ((0, QB.g)(this, DB), (0, QB.g)(this, FB, null)), this.uOffset = ((0, QB.g)(this, YB), (0, QB.g)(this, VB, 0)), this.vOffset = ((0, QB.g)(this, hB), (0, QB.g)(this, XB, 0)), this.uScale = ((0, QB.g)(this, ZB), (0, QB.g)(this, AB, 1)), this.vScale = ((0, QB.g)(this, TB), (0, QB.g)(this, PB, 1)), this.uAng = ((0, QB.g)(this, WB), (0, QB.g)(this, eB, 0)), this.vAng = ((0, QB.g)(this, lB), (0, QB.g)(this, wB, 0)), this.wAng = ((0, QB.g)(this, xB), (0, QB.g)(this, KB, 0)), this.uRotationCenter = ((0, QB.g)(this, CB), (0, QB.g)(this, cB, .5)), this.vRotationCenter = ((0, QB.g)(this, bB), (0, QB.g)(this, vB, .5)), this.wRotationCenter = ((0, QB.g)(this, RB), (0, QB.g)(this, OB, .5)), this.homogeneousRotationInUVTransform = ((0, QB.g)(this, Bj), (0, QB.g)(this, jj, !1)), this.inspectableCustomProperties = ((0, QB.g)(this, zj), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new dB.c, this._isBlocking = !0, this.name = jB || "", this.url = jB;
            let gB = !1,
              tB = null,
              SB = !0;
            "object" === typeof nB && null !== nB ? (NB = nB.noMipmap ?? !1, IB = nB.invertY ?? !kB.d, uB = nB.samplingMode ?? BB.TRILINEAR_SAMPLINGMODE, UB = nB.onLoad ?? null, pB = nB.onError ?? null, rB = nB.buffer ?? null, sB = nB.deleteBuffer ?? !1, JB = nB.format, mB = nB.mimeType, yB = nB.loaderOptions, GB = nB.creationFlags, gB = nB.useSRGBBuffer ?? !1, tB = nB.internalTexture ?? null, SB = nB.gammaSpace ?? SB, LB = nB.forcedExtension ?? LB) : NB = !!nB, this._gammaSpace = SB, this._noMipmap = NB, this._invertY = void 0 === IB ? !kB.d : IB, this._initialSamplingMode = uB, this._buffer = rB, this._deleteBuffer = sB, this._mimeType = mB, this._loaderOptions = yB, this._creationFlags = GB, this._useSRGBBuffer = gB, this._forcedExtension = LB, void 0 !== JB && (this._format = JB);
            const MB = this.aY(),
              EB = this._getEngine();
            if (!EB) return;
            EB.onBeforeTextureInitObservable.notifyObservers(this);
            const iB = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), UB && UB(), !this.isBlocking && MB && MB.resetCachedMaterial()
              },
              qB = (jB, zB) => {
                this._loadingError = !0, this._errorObject = {
                  message: jB,
                  exception: zB
                }, pB && pB(jB, zB), BB.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !tB) return this._delayedOnLoad = iB, void(this._delayedOnError = qB);
            if (this._texture = tB ?? this._getFromCache(this.url, NB, uB, this._invertY, gB, this.isCube), this._texture)
              if (this._texture.isReady) aB.b.SetImmediate((() => iB()));
              else {
                const BB = this._texture.onLoadedObservable.add(iB);
                this._texture.onErrorObservable.add((jB => {
                  qB(jB.message, jB.exception), this._texture?.onLoadedObservable.remove(BB)
                }))
              }
            else if (MB && MB.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = iB, this._delayedOnError = qB;
            else {
              try {
                this._texture = EB.createTexture(this.url, NB, this._invertY, MB, uB, iB, qB, this._buffer, void 0, this._format, this._forcedExtension, mB, yB, GB, gB)
              } catch (fB) {
                throw qB("error loading", fB), fB
              }
              sB && (this._buffer = null)
            }
          }
          updateURL(BB) {
            let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              zB = arguments.length > 2 ? arguments[2] : void 0,
              QB = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.aY().markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = BB), this.url = BB, this._buffer = jB, this._forcedExtension = QB, this.delayLoadState = 4;
            const nB = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              nB ? nB() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), zB && zB()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const BB = this.aY();
            if (!BB) return;
            let jB = this.url;
            !jB && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (jB = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(jB, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? aB.b.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = BB.wJ().createTexture(jB, this._noMipmap, this._invertY, BB, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(BB, jB, zB, QB) {
            BB *= this._cachedUScale, jB *= this._cachedVScale, BB -= this.uRotationCenter * this._cachedUScale, jB -= this.vRotationCenter * this._cachedVScale, zB -= this.wRotationCenter, IB.m.TransformCoordinatesFromFloatsToRef(BB, jB, zB, this._rowGenerationMatrix, QB), QB.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, QB.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, QB.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * BB === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * BB, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = IB.c.Zero(), this._rowGenerationMatrix = new IB.c, this._t0 = IB.m.Zero(), this._t1 = IB.m.Zero(), this._t2 = IB.m.Zero()), IB.c.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (IB.c.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, IB.h.Matrix[0]), IB.c.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, IB.h.Matrix[1]), IB.c.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, IB.h.Matrix[2]), IB.c.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, IB.h.Matrix[3]), IB.h.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(IB.h.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(IB.h.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(IB.h.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.MQB(this._t0), this._t2.MQB(this._t0), IB.c.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const jB = this.aY();
            if (!jB) return this._cachedTextureMatrix;
            const zB = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && zB !== this._cachedIdentity3x2 && jB.markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const jB = this.aY();
            if (!jB) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== BB.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === jB.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = IB.c.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = IB.c.Zero());
            const zB = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case BB.PLANAR_MODE:
                IB.c.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case BB.PROJECTION_MODE: {
                IB.c.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const BB = jB.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = BB.updateFlag, BB.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                IB.c.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return zB && jB.markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const jB = {
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
            return GB.b.Clone((() => new BB(this._texture ? this._texture.url : null, this.aY(), jB)), this)
          }
          serialize() {
            const jB = this.name;
            BB.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const zB = super.serialize(BB._SerializeInternalTextureUniqueId);
            if (!zB) return null;
            if (BB.SerializeBuffers || BB.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) zB.base64String = this._buffer, zB.name = zB.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const BB = this.mimeType || "image/png";
              zB.base64String = `data:${BB};base64,${(0,sB.e)(this._buffer)}`
            } else(BB.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (zB.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? mB(this) : yB(this));
            return zB.invertY = this._invertY, zB.samplingMode = this.samplingMode, zB._creationFlags = this._creationFlags, zB._useSRGBBuffer = this._useSRGBBuffer, BB._SerializeInternalTextureUniqueId && (zB.internalTextureUniqueId = this._texture?.uniqueId), zB.internalTextureLabel = this._texture?.label, zB.noMipmap = this._noMipmap, this.name = jB, zB
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(jB, zB, QB) {
            if (jB.customType) {
              const BB = pB.b.Instantiate(jB.customType).Parse(jB, zB, QB);
              return jB.samplingMode && BB.updateSamplingMode && BB._samplingMode && BB._samplingMode !== jB.samplingMode && BB.updateSamplingMode(jB.samplingMode), BB
            }
            if (jB.isCube && !jB.isRenderTarget) return BB._CubeTextureParser(jB, zB, QB);
            const nB = void 0 !== jB.internalTextureUniqueId;
            if (!jB.name && !jB.isRenderTarget && !nB) return null;
            let dB;
            if (nB) {
              const BB = zB.wJ().getLoadedTexturesCache();
              for (const zB of BB)
                if (zB.uniqueId === jB.internalTextureUniqueId) {
                  dB = zB;
                  break
                }
            }
            const IB = BB => {
              if (BB && BB._texture && (BB._texture._cachedWrapU = null, BB._texture._cachedWrapV = null, BB._texture._cachedWrapR = null), jB.samplingMode) {
                const zB = jB.samplingMode;
                BB && BB.samplingMode !== zB && BB.updateSamplingMode(zB)
              }
              if (BB && jB.animations)
                for (let zB = 0; zB < jB.animations.length; zB++) {
                  const QB = jB.animations[zB],
                    nB = (0, uB.b)("BABYLON.Animation");
                  nB && BB.animations.push(nB.Parse(QB))
                }
              BB && BB._texture && (nB && !dB && BB._texture._setUniqueId(jB.internalTextureUniqueId), BB._texture.label = jB.internalTextureLabel)
            };
            return GB.b.Parse((() => {
              let nB = !0;
              if (jB.noMipmap && (nB = !1), jB.mirrorPlane) {
                const QB = BB._CreateMirror(jB.name, jB.renderTargetSize, zB, nB);
                return QB._waitingRenderList = jB.renderList, QB.mirrorPlane = rB.c.FromArray(jB.mirrorPlane), IB(QB), QB
              }
              if (jB.isRenderTarget && !jB.base64String) {
                let QB = null;
                if (jB.isCube) {
                  if (zB.reflectionProbes)
                    for (let BB = 0; BB < zB.reflectionProbes.length; BB++) {
                      const QB = zB.reflectionProbes[BB];
                      if (QB.name === jB.name) return QB.cubeTexture
                    }
                } else QB = BB._CreateRenderTargetTexture(jB.name, jB.renderTargetSize, zB, nB, jB._creationFlags ?? 0), QB._waitingRenderList = jB.renderList;
                return IB(QB), QB
              }
              if (jB.isVideo) {
                const dB = BB._CreateVideoTexture(QB + (jB.url || jB.name), QB + (jB.src || jB.url), zB, nB, jB.invertY, jB.samplingMode, jB.settings || {});
                return IB(dB), dB
              } {
                let NB;
                if ("string" === typeof jB.base64String && jB.base64String && !dB) {
                  const QB = {
                      buffer: jB.base64String,
                      noMipmap: !nB,
                      invertY: jB.invertY,
                      samplingMode: jB.samplingMode,
                      useSRGBBuffer: jB._useSRGBBuffer ?? !1,
                      creationFlags: jB._creationFlags ?? 0,
                      onLoad: () => {
                        IB(NB)
                      }
                    },
                    dB = jB.base64String,
                    uB = dB.startsWith("data:") ? dB.substring(5) : dB;
                  NB = BB.CreateFromBase64String("", uB, zB, QB), NB.name = jB.name
                } else {
                  let uB;
                  uB = jB.name && (jB.name.indexOf("://") > 0 || jB.name.startsWith("data:")) ? jB.name : QB + jB.name, jB.url && (jB.url.startsWith("data:") || BB.UseSerializedUrlIfAny) && (uB = jB.url);
                  const UB = {
                    noMipmap: !nB,
                    invertY: jB.invertY,
                    samplingMode: jB.samplingMode,
                    useSRGBBuffer: jB._useSRGBBuffer ?? !1,
                    creationFlags: jB._creationFlags ?? 0,
                    onLoad: () => {
                      IB(NB)
                    },
                    internalTexture: dB
                  };
                  NB = new BB(uB, zB, UB)
                }
                return NB
              }
            }), jB, zB)
          }
          static CreateFromBase64String(jB, zB, QB, nB, dB) {
            let IB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : BB.TRILINEAR_SAMPLINGMODE;
            return new BB("data:" + zB, QB, nB, dB, IB, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, jB, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(jB, zB, QB) {
            let nB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              dB = arguments.length > 4 ? arguments[4] : void 0,
              IB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              NB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : BB.TRILINEAR_SAMPLINGMODE,
              uB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              UB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              aB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              pB = arguments.length > 10 ? arguments[10] : void 0,
              rB = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== jB.substring(0, 5) && (jB = "data:" + jB), new BB(jB, QB, dB, IB, NB, uB, UB, zB, nB, aB, void 0, void 0, pB, rB)
          }
        }, (() => {
          const dB = "function" === typeof Symbol && Symbol.metadata ? Object.create(HB[Symbol.metadata] ?? null) : void 0;
          jB = [(0, nB.A)()], zB = [(0, nB.A)()], JB = [(0, nB.A)()], LB = [(0, nB.A)()], gB = [(0, nB.A)()], tB = [(0, nB.A)()], SB = [(0, nB.A)()], MB = [(0, nB.A)()], EB = [(0, nB.A)()], iB = [(0, nB.A)()], qB = [(0, nB.A)()], fB = [(0, nB.A)()], oB = [(0, nB.A)()], (0, QB.e)(BB, null, oB, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: BB => "isBlocking" in BB,
              get: BB => BB.isBlocking
            },
            metadata: dB
          }, null, DB), (0, QB.e)(null, null, jB, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: BB => "url" in BB,
              get: BB => BB.url,
              set: (BB, jB) => {
                BB.url = jB
              }
            },
            metadata: dB
          }, FB, YB), (0, QB.e)(null, null, zB, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "uOffset" in BB,
              get: BB => BB.uOffset,
              set: (BB, jB) => {
                BB.uOffset = jB
              }
            },
            metadata: dB
          }, VB, hB), (0, QB.e)(null, null, JB, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "vOffset" in BB,
              get: BB => BB.vOffset,
              set: (BB, jB) => {
                BB.vOffset = jB
              }
            },
            metadata: dB
          }, XB, ZB), (0, QB.e)(null, null, LB, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: BB => "uScale" in BB,
              get: BB => BB.uScale,
              set: (BB, jB) => {
                BB.uScale = jB
              }
            },
            metadata: dB
          }, AB, TB), (0, QB.e)(null, null, gB, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: BB => "vScale" in BB,
              get: BB => BB.vScale,
              set: (BB, jB) => {
                BB.vScale = jB
              }
            },
            metadata: dB
          }, PB, WB), (0, QB.e)(null, null, tB, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: BB => "uAng" in BB,
              get: BB => BB.uAng,
              set: (BB, jB) => {
                BB.uAng = jB
              }
            },
            metadata: dB
          }, eB, lB), (0, QB.e)(null, null, SB, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: BB => "vAng" in BB,
              get: BB => BB.vAng,
              set: (BB, jB) => {
                BB.vAng = jB
              }
            },
            metadata: dB
          }, wB, xB), (0, QB.e)(null, null, MB, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: BB => "wAng" in BB,
              get: BB => BB.wAng,
              set: (BB, jB) => {
                BB.wAng = jB
              }
            },
            metadata: dB
          }, KB, CB), (0, QB.e)(null, null, EB, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: BB => "uRotationCenter" in BB,
              get: BB => BB.uRotationCenter,
              set: (BB, jB) => {
                BB.uRotationCenter = jB
              }
            },
            metadata: dB
          }, cB, bB), (0, QB.e)(null, null, iB, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: BB => "vRotationCenter" in BB,
              get: BB => BB.vRotationCenter,
              set: (BB, jB) => {
                BB.vRotationCenter = jB
              }
            },
            metadata: dB
          }, vB, RB), (0, QB.e)(null, null, qB, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: BB => "wRotationCenter" in BB,
              get: BB => BB.wRotationCenter,
              set: (BB, jB) => {
                BB.wRotationCenter = jB
              }
            },
            metadata: dB
          }, OB, Bj), (0, QB.e)(null, null, fB, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: BB => "homogeneousRotationInUVTransform" in BB,
              get: BB => BB.homogeneousRotationInUVTransform,
              set: (BB, jB) => {
                BB.homogeneousRotationInUVTransform = jB
              }
            },
            metadata: dB
          }, jj, zj), dB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: dB
          })
        })(), BB.SerializeBuffers = !0, BB.ForceSerializeBuffers = !1, BB.OnTextureLoadErrorObservable = new dB.c, BB._SerializeInternalTextureUniqueId = !1, BB._CubeTextureParser = (BB, jB, zB) => {
          throw (0, UB.k)("CubeTexture")
        }, BB._CreateMirror = (BB, jB, zB, QB) => {
          throw (0, UB.k)("MirrorTexture")
        }, BB._CreateRenderTargetTexture = (BB, jB, zB, QB, nB) => {
          throw (0, UB.k)("RenderTargetTexture")
        }, BB.NEAREST_SAMPLINGMODE = 1, BB.NEAREST_NEAREST_MIPLINEAR = 8, BB.BILINEAR_SAMPLINGMODE = 2, BB.LINEAR_LINEAR_MIPNEAREST = 11, BB.TRILINEAR_SAMPLINGMODE = 3, BB.LINEAR_LINEAR_MIPLINEAR = 3, BB.NEAREST_NEAREST_MIPNEAREST = 4, BB.NEAREST_LINEAR_MIPNEAREST = 5, BB.NEAREST_LINEAR_MIPLINEAR = 6, BB.NEAREST_LINEAR = 7, BB.NEAREST_NEAREST = 1, BB.LINEAR_NEAREST_MIPNEAREST = 9, BB.LINEAR_NEAREST_MIPLINEAR = 10, BB.LINEAR_LINEAR = 2, BB.LINEAR_NEAREST = 12, BB.EXPLICIT_MODE = 0, BB.SPHERICAL_MODE = 1, BB.PLANAR_MODE = 2, BB.CUBIC_MODE = 3, BB.PROJECTION_MODE = 4, BB.SKYBOX_MODE = 5, BB.INVCUBIC_MODE = 6, BB.EQUIRECTANGULAR_MODE = 7, BB.FIXED_EQUIRECTANGULAR_MODE = 8, BB.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, BB.CLAMP_ADDRESSMODE = 0, BB.WRAP_ADDRESSMODE = 1, BB.MIRROR_ADDRESSMODE = 2, BB.UseSerializedUrlIfAny = !1, BB
      })(),
      gB = !1;

    function tB() {
      gB || (gB = !0, (0, uB.d)("BABYLON.Texture", LB), GB.b._TextureParser = LB.Parse)
    }
  },
  40081: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB
    });
    class QB {
      constructor(BB, jB) {
        this.width = BB, this.height = jB
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
      jH(BB) {
        this.width = BB.width, this.height = BB.height
      }
      U3(BB, jB) {
        return this.width = BB, this.height = jB, this
      }
      set(BB, jB) {
        return this.U3(BB, jB)
      }
      multiplyByFloats(BB, jB) {
        return new QB(this.width * BB, this.height * jB)
      }
      clone() {
        return new QB(this.width, this.height)
      }
      equals(BB) {
        return !!BB && (this.width === BB.width && this.height === BB.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new QB(0, 0)
      }
      add(BB) {
        return new QB(this.width + BB.width, this.height + BB.height)
      }
      subtract(BB) {
        return new QB(this.width - BB.width, this.height - BB.height)
      }
      scale(BB) {
        return new QB(this.width * BB, this.height * BB)
      }
      static Lerp(BB, jB, zB) {
        const nB = BB.width + (jB.width - BB.width) * zB,
          dB = BB.height + (jB.height - BB.height) * zB;
        return new QB(nB, dB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);