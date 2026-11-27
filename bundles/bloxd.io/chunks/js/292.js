export const id = 292;
export const ids = [292];
export const modules = {
  42275: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr
    });
    let Zr = !1
  },
  41865: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ur
    });
    var Zr = Qr(41872),
      Wr = Qr(41875),
      ar = Qr(38595),
      jr = Qr(38560),
      Ir = Qr(38587),
      fr = Qr(39405),
      Er = Qr(41882);
    class pr {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(rr) {
        this._wrapU = rr
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(rr) {
        this._wrapV = rr
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(rr) {
        this._texture && (this._texture.isCube = rr)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(rr) {
        this._texture && (this._texture.is3D = rr)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(rr) {
        this._texture && (this._texture.is2DArray = rr)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(rr) {
        return void 0 !== rr?.shareDepth
      }
      constructor(rr) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = Er.b.Zero(), this._cachedBaseSize = Er.b.Zero(), this._initialSamplingMode = 2, this._texture = pr._IsRenderTargetWrapper(rr) ? rr.texture : rr, this._texture && (this._engine = this._texture.MU(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(rr, this._texture, this._texture.generateMipMaps && Sr)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var xr, mr = Qr(41889),
      Nr = Qr(41769);
    let Ur = (() => {
      var rr;
      let Sr, Qr, Er, xr, Nr, Ur, tr, hr, zr, Yr, nr, er, Kr, yr, Br, Tr, vr, Or, Lr, lr, Xr, Pr, Hr, qr, Rr, gr = pr,
        Cr = [],
        Mr = [],
        Gr = [],
        kr = [],
        Ar = [],
        Vr = [],
        ir = [],
        wr = [],
        cr = [],
        Fr = [],
        or = [],
        br = [],
        Jr = [],
        Dr = [],
        dr = [],
        sr = [],
        ur = [],
        rS = [],
        SS = [],
        QS = [],
        ZS = [],
        WS = [],
        aS = [],
        jS = [],
        IS = [],
        fS = [],
        ES = [],
        pS = [],
        xS = [],
        mS = [],
        NS = [];
      return rr = class extends gr {
        set hasAlpha(rr) {
          this._hasAlpha = rr
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(rr) {
          this._getAlphaFromRGB !== rr && (this._getAlphaFromRGB = rr, this._scene && this._scene.markAllMaterialsAsDirty(1, (rr => rr.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(rr) {
          this._coordinatesIndex !== rr && (this._coordinatesIndex = rr, this._scene && this._scene.markAllMaterialsAsDirty(1, (rr => rr.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(rr) {
          this._coordinatesMode !== rr && (this._coordinatesMode = rr, this._scene && this._scene.markAllMaterialsAsDirty(1, (rr => rr.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(rr) {
          this._wrapU = rr
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(rr) {
          this._wrapV = rr
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(rr) {
          this._texture ? this._texture.isCube = rr : this._isCube = rr
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(rr) {
          this._texture && (this._texture.is3D = rr)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(rr) {
          this._texture && (this._texture.is2DArray = rr)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(rr) {
          if (this._texture) {
            if (this._texture._gammaSpace === rr) return;
            this._texture._gammaSpace = rr
          } else {
            if (this._gammaSpace === rr) return;
            this._gammaSpace = rr
          }
          this.eC()?.markAllMaterialsAsDirty(1, (rr => rr.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(rr) {
          rr !== this.isRGBD && (this._texture && (this._texture._isRGBD = rr), this.eC()?.markAllMaterialsAsDirty(1, (rr => rr.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(rr) {
          this._texture && (this._texture._lodGenerationOffset = rr)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(rr) {
          this._texture && (this._texture._lodGenerationScale = rr)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(rr) {
          this._texture && (this._texture._linearSpecularLOD = rr)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(rr) {
          this._texture && (this._texture._irradianceTexture = rr)
        }
        get uid() {
          return this._uid || (this._uid = (0, fr.b)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(rr) {
          this._onDisposeObserver && this.lC.remove(this._onDisposeObserver), this._onDisposeObserver = this.lC.add(rr)
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
        constructor(Sr) {
          let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, Zr.m)(this, Cr), (0, Zr.m)(this, Mr, void 0)), this.name = ((0, Zr.m)(this, Gr), (0, Zr.m)(this, kr, void 0)), this.displayName = ((0, Zr.m)(this, Ar), (0, Zr.m)(this, Vr, void 0)), this.metadata = ((0, Zr.m)(this, ir), (0, Zr.m)(this, wr, null)), this._internalMetadata = (0, Zr.m)(this, cr), this.reservedDataStore = null, this._hasAlpha = (0, Zr.m)(this, Fr, !1), this._getAlphaFromRGB = ((0, Zr.m)(this, or), (0, Zr.m)(this, br, !1)), this.level = ((0, Zr.m)(this, Jr), (0, Zr.m)(this, Dr, 1)), this._coordinatesIndex = ((0, Zr.m)(this, dr), (0, Zr.m)(this, sr, 0)), this.optimizeUVAllocation = ((0, Zr.m)(this, ur), (0, Zr.m)(this, rS, !0)), this._coordinatesMode = ((0, Zr.m)(this, SS), (0, Zr.m)(this, QS, 0)), this.wrapR = ((0, Zr.m)(this, ZS), (0, Zr.m)(this, WS, 1)), this.anisotropicFilteringLevel = ((0, Zr.m)(this, aS), (0, Zr.m)(this, jS, rr.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, Zr.m)(this, IS), !1), this._gammaSpace = !0, this.invertZ = (0, Zr.m)(this, fS, !1), this.lodLevelInAlpha = ((0, Zr.m)(this, ES), (0, Zr.m)(this, pS, !1)), this._dominantDirection = ((0, Zr.m)(this, xS), null), this.isRenderTarget = (0, Zr.m)(this, mS, !1), this._prefiltered = ((0, Zr.m)(this, NS), !1), this._forceSerialize = !1, this.animations = [], this.lC = new ar.d, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, Sr ? rr._IsScene(Sr) ? this._scene = Sr : this._engine = Sr : this._scene = Ir.b.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.MU()), this._texture = Qr, this._uid = null
        }
        eC() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return jr.d.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return jr.d.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(rr) {}
        get canRescale() {
          return !1
        }
        _getFromCache(rr, Sr, Qr, Zr, Wr, ar) {
          const jr = this._getEngine();
          if (!jr) return null;
          const Ir = jr._getUseSRGBBuffer(!!Wr, Sr),
            fr = jr.getLoadedTexturesCache();
          for (let Er = 0; Er < fr.length; Er++) {
            const jr = fr[Er];
            if ((void 0 === Wr || Ir === jr._useSRGBBuffer) && (void 0 === Zr || Zr === jr.invertY) && jr.url === rr && jr.generateMipMaps === !Sr && (!Qr || Qr === jr.samplingMode) && (void 0 === ar || ar === jr.isCube)) return jr.incrementReferences(), jr
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
          const rr = this.eC();
          rr && rr.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Zr = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Wr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            jr = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            Ir = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            fr = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const Er = this._getEngine();
          if (!Er) return null;
          const pr = this.getSize();
          let xr = pr.width,
            mr = pr.height;
          0 !== Sr && (xr /= Math.pow(2, Sr), mr /= Math.pow(2, Sr), xr = Math.round(xr), mr = Math.round(mr)), Ir = Math.min(xr, Ir), fr = Math.min(mr, fr);
          try {
            return this._texture.isCube || this._texture.is2DArray ? Er._readTexturePixels(this._texture, Ir, fr, rr, Sr, Qr, Zr, Wr, ar, jr) : Er._readTexturePixels(this._texture, Ir, fr, -1, Sr, Qr, Zr, Wr, ar, jr)
          } catch (Nr) {
            return null
          }
        }
        _readPixelsSync() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Zr = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Wr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const ar = this.getSize();
          let jr = ar.width,
            Ir = ar.height;
          const fr = this._getEngine();
          if (!fr) return null;
          0 != Sr && (jr /= Math.pow(2, Sr), Ir /= Math.pow(2, Sr), jr = Math.round(jr), Ir = Math.round(Ir));
          try {
            return this._texture.isCube ? fr._readTexturePixelsSync(this._texture, jr, Ir, rr, Sr, Qr, Zr, Wr) : fr._readTexturePixelsSync(this._texture, jr, Ir, -1, Sr, Qr, Zr, Wr)
          } catch (Er) {
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
            const rr = this._scene.textures.indexOf(this);
            if (rr >= 0 && this._scene.textures.splice(rr, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const rr = this._parentContainer.textures.indexOf(this);
              rr > -1 && this._parentContainer.textures.splice(rr, 1), this._parentContainer = null
            }
          }
          this.lC.notifyObservers(this), this.lC.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !rr) return null;
          const Sr = mr.e.Serialize(this);
          return mr.e.AppendSerializedAnimations(this, Sr), Sr
        }
        static WhenAllReady(rr, Sr) {
          let Qr = rr.length;
          if (0 !== Qr)
            for (let Zr = 0; Zr < rr.length; Zr++) {
              const Wr = rr[Zr];
              if (Wr.isReady()) 0 === --Qr && Sr();
              else {
                const rr = Wr.onLoadObservable;
                rr ? rr.addOnce((() => {
                  0 === --Qr && Sr()
                })) : 0 === --Qr && Sr()
              }
            } else Sr()
        }
        static _IsScene(rr) {
          return "Scene" === rr.getClassName()
        }
      }, (() => {
        const ar = "function" === typeof Symbol && Symbol.metadata ? Object.create(gr[Symbol.metadata] ?? null) : void 0;
        Sr = [(0, Wr.G)()], Qr = [(0, Wr.G)()], Er = [(0, Wr.G)()], xr = [(0, Wr.G)()], Nr = [(0, Wr.G)("hasAlpha")], Ur = [(0, Wr.G)("getAlphaFromRGB")], tr = [(0, Wr.G)()], hr = [(0, Wr.G)("coordinatesIndex")], zr = [(0, Wr.G)()], Yr = [(0, Wr.G)("coordinatesMode")], nr = [(0, Wr.G)()], er = [(0, Wr.G)()], Kr = [(0, Wr.G)()], yr = [(0, Wr.G)()], Br = [(0, Wr.G)()], Tr = [(0, Wr.G)()], vr = [(0, Wr.G)()], Or = [(0, Wr.G)()], Lr = [(0, Wr.G)()], lr = [(0, Wr.G)()], Xr = [(0, Wr.G)()], Pr = [(0, Wr.G)()], Hr = [(0, Wr.G)()], qr = [(0, Wr.z)()], Rr = [(0, Wr.G)()], (0, Zr.k)(rr, null, nr, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: rr => "wrapU" in rr,
            get: rr => rr.wrapU
          },
          metadata: ar
        }, null, Cr), (0, Zr.k)(rr, null, er, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: rr => "wrapV" in rr,
            get: rr => rr.wrapV
          },
          metadata: ar
        }, null, Cr), (0, Zr.k)(rr, null, Br, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: rr => "isCube" in rr,
            get: rr => rr.isCube
          },
          metadata: ar
        }, null, Cr), (0, Zr.k)(rr, null, Tr, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: rr => "is3D" in rr,
            get: rr => rr.is3D
          },
          metadata: ar
        }, null, Cr), (0, Zr.k)(rr, null, vr, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: rr => "is2DArray" in rr,
            get: rr => rr.is2DArray
          },
          metadata: ar
        }, null, Cr), (0, Zr.k)(rr, null, Or, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: rr => "gammaSpace" in rr,
            get: rr => rr.gammaSpace
          },
          metadata: ar
        }, null, Cr), (0, Zr.k)(rr, null, Xr, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: rr => "lodGenerationOffset" in rr,
            get: rr => rr.lodGenerationOffset
          },
          metadata: ar
        }, null, Cr), (0, Zr.k)(rr, null, Pr, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: rr => "lodGenerationScale" in rr,
            get: rr => rr.lodGenerationScale
          },
          metadata: ar
        }, null, Cr), (0, Zr.k)(rr, null, Hr, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: rr => "linearSpecularLOD" in rr,
            get: rr => rr.linearSpecularLOD
          },
          metadata: ar
        }, null, Cr), (0, Zr.k)(rr, null, qr, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "irradianceTexture" in rr,
            get: rr => rr.irradianceTexture
          },
          metadata: ar
        }, null, Cr), (0, Zr.k)(null, null, Sr, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: rr => "uniqueId" in rr,
            get: rr => rr.uniqueId,
            set: (rr, Sr) => {
              rr.uniqueId = Sr
            }
          },
          metadata: ar
        }, Mr, Gr), (0, Zr.k)(null, null, Qr, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: rr => "name" in rr,
            get: rr => rr.name,
            set: (rr, Sr) => {
              rr.name = Sr
            }
          },
          metadata: ar
        }, kr, Ar), (0, Zr.k)(null, null, Er, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: rr => "displayName" in rr,
            get: rr => rr.displayName,
            set: (rr, Sr) => {
              rr.displayName = Sr
            }
          },
          metadata: ar
        }, Vr, ir), (0, Zr.k)(null, null, xr, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: rr => "metadata" in rr,
            get: rr => rr.metadata,
            set: (rr, Sr) => {
              rr.metadata = Sr
            }
          },
          metadata: ar
        }, wr, cr), (0, Zr.k)(null, null, Nr, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: rr => "_hasAlpha" in rr,
            get: rr => rr._hasAlpha,
            set: (rr, Sr) => {
              rr._hasAlpha = Sr
            }
          },
          metadata: ar
        }, Fr, or), (0, Zr.k)(null, null, Ur, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: rr => "_getAlphaFromRGB" in rr,
            get: rr => rr._getAlphaFromRGB,
            set: (rr, Sr) => {
              rr._getAlphaFromRGB = Sr
            }
          },
          metadata: ar
        }, br, Jr), (0, Zr.k)(null, null, tr, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: rr => "level" in rr,
            get: rr => rr.level,
            set: (rr, Sr) => {
              rr.level = Sr
            }
          },
          metadata: ar
        }, Dr, dr), (0, Zr.k)(null, null, hr, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: rr => "_coordinatesIndex" in rr,
            get: rr => rr._coordinatesIndex,
            set: (rr, Sr) => {
              rr._coordinatesIndex = Sr
            }
          },
          metadata: ar
        }, sr, ur), (0, Zr.k)(null, null, zr, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: rr => "optimizeUVAllocation" in rr,
            get: rr => rr.optimizeUVAllocation,
            set: (rr, Sr) => {
              rr.optimizeUVAllocation = Sr
            }
          },
          metadata: ar
        }, rS, SS), (0, Zr.k)(null, null, Yr, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: rr => "_coordinatesMode" in rr,
            get: rr => rr._coordinatesMode,
            set: (rr, Sr) => {
              rr._coordinatesMode = Sr
            }
          },
          metadata: ar
        }, QS, ZS), (0, Zr.k)(null, null, Kr, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: rr => "wrapR" in rr,
            get: rr => rr.wrapR,
            set: (rr, Sr) => {
              rr.wrapR = Sr
            }
          },
          metadata: ar
        }, WS, aS), (0, Zr.k)(null, null, yr, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: rr => "anisotropicFilteringLevel" in rr,
            get: rr => rr.anisotropicFilteringLevel,
            set: (rr, Sr) => {
              rr.anisotropicFilteringLevel = Sr
            }
          },
          metadata: ar
        }, jS, IS), (0, Zr.k)(null, null, Lr, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: rr => "invertZ" in rr,
            get: rr => rr.invertZ,
            set: (rr, Sr) => {
              rr.invertZ = Sr
            }
          },
          metadata: ar
        }, fS, ES), (0, Zr.k)(null, null, lr, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: rr => "lodLevelInAlpha" in rr,
            get: rr => rr.lodLevelInAlpha,
            set: (rr, Sr) => {
              rr.lodLevelInAlpha = Sr
            }
          },
          metadata: ar
        }, pS, xS), (0, Zr.k)(null, null, Rr, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: rr => "isRenderTarget" in rr,
            get: rr => rr.isRenderTarget,
            set: (rr, Sr) => {
              rr.isRenderTarget = Sr
            }
          },
          metadata: ar
        }, mS, NS), ar && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ar
        })
      })(), rr.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, rr
    })();
    (xr = Ur.prototype).forceSphericalPolynomialsRecompute ?? (xr.forceSphericalPolynomialsRecompute = (0, Nr.h)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(Ur.prototype, "sphericalPolynomial") || Object.defineProperty(Ur.prototype, "sphericalPolynomial", (0, Nr.g)("BaseTexture", "sphericalPolynomial"))
  },
  42310: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Kr,
      f: () => nr
    });
    var Zr = Qr(41872),
      Wr = Qr(41875),
      ar = Qr(38595),
      jr = Qr(38560),
      Ir = Qr(41865),
      fr = Qr(38609),
      Er = Qr(41769),
      pr = Qr(41781),
      xr = Qr(41955),
      mr = Qr(39264),
      Nr = Qr(41917);

    function Ur(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Zr = Sr.width,
        Wr = Sr.height;
      if (rr instanceof Float32Array) {
        let Sr = rr.byteLength / rr.BYTES_PER_ELEMENT;
        const Qr = new Uint8Array(Sr);
        for (; --Sr >= 0;) {
          let Zr = rr[Sr];
          Zr < 0 ? Zr = 0 : Zr > 1 && (Zr = 1), Qr[Sr] = 255 * Zr
        }
        rr = Qr
      }
      const ar = document.createElement("canvas");
      ar.width = Zr, ar.height = Wr;
      const jr = ar.getContext("2d");
      if (!jr) return null;
      const Ir = jr.createImageData(Zr, Wr);
      if (Ir.data.set(rr), jr.putImageData(Ir, 0, 0), Qr) {
        const rr = document.createElement("canvas");
        rr.width = Zr, rr.height = Wr;
        const Sr = rr.getContext("2d");
        return Sr ? (Sr.translate(0, Wr), Sr.scale(1, -1), Sr.drawImage(ar, 0, 0), rr.toDataURL("image/png")) : null
      }
      return ar.toDataURL("image/png")
    }

    function tr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Zr = rr.getInternalTexture();
      if (!Zr) return null;
      const Wr = rr._readPixelsSync(Sr, Qr);
      return Wr ? Ur(Wr, rr.getSize(), Zr.invertY) : null
    }
    async function hr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Zr = rr.getInternalTexture();
      if (!Zr) return null;
      const Wr = await rr.readPixels(Sr, Qr);
      return Wr ? Ur(Wr, rr.getSize(), Zr.invertY) : null
    }
    var zr = Qr(42275),
      Yr = Qr(41889);
    let nr = (() => {
        var rr;
        let Sr, Qr, Ur, nr, er, Kr, yr, Br, Tr, vr, Or, Lr, lr, Xr = Ir.b,
          Pr = [],
          Hr = [],
          qr = [],
          Rr = [],
          gr = [],
          Cr = [],
          Mr = [],
          Gr = [],
          kr = [],
          Ar = [],
          Vr = [],
          ir = [],
          wr = [],
          cr = [],
          Fr = [],
          or = [],
          br = [],
          Jr = [],
          Dr = [],
          dr = [],
          sr = [],
          ur = [],
          rS = [],
          SS = [],
          QS = [];
        return rr = class extends Xr {
          static _CreateVideoTexture(Sr, Qr, Zr) {
            arguments.length > 5 && void 0 !== arguments[5] || rr.TRILINEAR_SAMPLINGMODE;
            throw (0, Er.l)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(rr) {
            this._isBlocking = rr
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(Sr, Qr, Wr, jr) {
            let Ir, fr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : rr.TRILINEAR_SAMPLINGMODE,
              Er = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              xr = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              mr = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Nr = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              Ur = arguments.length > 9 ? arguments[9] : void 0,
              tr = arguments.length > 10 ? arguments[10] : void 0,
              hr = arguments.length > 11 ? arguments[11] : void 0,
              Yr = arguments.length > 12 ? arguments[12] : void 0,
              nr = arguments.length > 13 ? arguments[13] : void 0;
            super(Qr), this.url = ((0, Zr.m)(this, Pr), (0, Zr.m)(this, Hr, null)), this.uOffset = ((0, Zr.m)(this, qr), (0, Zr.m)(this, Rr, 0)), this.vOffset = ((0, Zr.m)(this, gr), (0, Zr.m)(this, Cr, 0)), this.uScale = ((0, Zr.m)(this, Mr), (0, Zr.m)(this, Gr, 1)), this.vScale = ((0, Zr.m)(this, kr), (0, Zr.m)(this, Ar, 1)), this.uAng = ((0, Zr.m)(this, Vr), (0, Zr.m)(this, ir, 0)), this.vAng = ((0, Zr.m)(this, wr), (0, Zr.m)(this, cr, 0)), this.wAng = ((0, Zr.m)(this, Fr), (0, Zr.m)(this, or, 0)), this.uRotationCenter = ((0, Zr.m)(this, br), (0, Zr.m)(this, Jr, .5)), this.vRotationCenter = ((0, Zr.m)(this, Dr), (0, Zr.m)(this, dr, .5)), this.wRotationCenter = ((0, Zr.m)(this, sr), (0, Zr.m)(this, ur, .5)), this.homogeneousRotationInUVTransform = ((0, Zr.m)(this, rS), (0, Zr.m)(this, SS, !1)), this.inspectableCustomProperties = ((0, Zr.m)(this, QS), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new ar.d, this._isBlocking = !0, this.name = Sr || "", this.url = Sr;
            let er = !1,
              Kr = null,
              yr = !0;
            "object" === typeof Wr && null !== Wr ? (Ir = Wr.noMipmap ?? !1, jr = Wr.invertY ?? !zr.b, fr = Wr.samplingMode ?? rr.TRILINEAR_SAMPLINGMODE, Er = Wr.onLoad ?? null, xr = Wr.onError ?? null, mr = Wr.buffer ?? null, Nr = Wr.deleteBuffer ?? !1, Ur = Wr.format, tr = Wr.mimeType, hr = Wr.loaderOptions, Yr = Wr.creationFlags, er = Wr.useSRGBBuffer ?? !1, Kr = Wr.internalTexture ?? null, yr = Wr.gammaSpace ?? yr, nr = Wr.forcedExtension ?? nr) : Ir = !!Wr, this._gammaSpace = yr, this._noMipmap = Ir, this._invertY = void 0 === jr ? !zr.b : jr, this._initialSamplingMode = fr, this._buffer = mr, this._deleteBuffer = Nr, this._mimeType = tr, this._loaderOptions = hr, this._creationFlags = Yr, this._useSRGBBuffer = er, this._forcedExtension = nr, void 0 !== Ur && (this._format = Ur);
            const Br = this.eC(),
              Tr = this._getEngine();
            if (!Tr) return;
            Tr.onBeforeTextureInitObservable.notifyObservers(this);
            const vr = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), Er && Er(), !this.isBlocking && Br && Br.resetCachedMaterial()
              },
              Or = (Sr, Qr) => {
                this._loadingError = !0, this._errorObject = {
                  message: Sr,
                  exception: Qr
                }, xr && xr(Sr, Qr), rr.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !Kr) return this._delayedOnLoad = vr, void(this._delayedOnError = Or);
            if (this._texture = Kr ?? this._getFromCache(this.url, Ir, fr, this._invertY, er, this.isCube), this._texture)
              if (this._texture.isReady) pr.d.SetImmediate((() => vr()));
              else {
                const rr = this._texture.onLoadedObservable.add(vr);
                this._texture.onErrorObservable.add((Sr => {
                  Or(Sr.message, Sr.exception), this._texture?.onLoadedObservable.remove(rr)
                }))
              }
            else if (Br && Br.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = vr, this._delayedOnError = Or;
            else {
              try {
                this._texture = Tr.createTexture(this.url, Ir, this._invertY, Br, fr, vr, Or, this._buffer, void 0, this._format, this._forcedExtension, tr, hr, Yr, er)
              } catch (Lr) {
                throw Or("error loading", Lr), Lr
              }
              Nr && (this._buffer = null)
            }
          }
          updateURL(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Qr = arguments.length > 2 ? arguments[2] : void 0,
              Zr = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.eC().markAllMaterialsAsDirty(1, (rr => rr.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = rr), this.url = rr, this._buffer = Sr, this._forcedExtension = Zr, this.delayLoadState = 4;
            const Wr = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              Wr ? Wr() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), Qr && Qr()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const rr = this.eC();
            if (!rr) return;
            let Sr = this.url;
            !Sr && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (Sr = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(Sr, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? pr.d.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = rr.MU().createTexture(Sr, this._noMipmap, this._invertY, rr, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(rr, Sr, Qr, Zr) {
            rr *= this._cachedUScale, Sr *= this._cachedVScale, rr -= this.uRotationCenter * this._cachedUScale, Sr -= this.vRotationCenter * this._cachedVScale, Qr -= this.wRotationCenter, jr.u.TransformCoordinatesFromFloatsToRef(rr, Sr, Qr, this._rowGenerationMatrix, Zr), Zr.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, Zr.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, Zr.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * rr === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * rr, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = jr.d.Zero(), this._rowGenerationMatrix = new jr.d, this._t0 = jr.u.Zero(), this._t1 = jr.u.Zero(), this._t2 = jr.u.Zero()), jr.d.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (jr.d.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, jr.n.Matrix[0]), jr.d.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, jr.n.Matrix[1]), jr.d.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, jr.n.Matrix[2]), jr.d.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, jr.n.Matrix[3]), jr.n.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(jr.n.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(jr.n.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(jr.n.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.iWr(this._t0), this._t2.iWr(this._t0), jr.d.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const Sr = this.eC();
            if (!Sr) return this._cachedTextureMatrix;
            const Qr = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && Qr !== this._cachedIdentity3x2 && Sr.markAllMaterialsAsDirty(1, (rr => rr.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const Sr = this.eC();
            if (!Sr) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== rr.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === Sr.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = jr.d.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = jr.d.Zero());
            const Qr = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case rr.PLANAR_MODE:
                jr.d.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case rr.PROJECTION_MODE: {
                jr.d.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const rr = Sr.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = rr.updateFlag, rr.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                jr.d.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return Qr && Sr.markAllMaterialsAsDirty(1, (rr => rr.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const Sr = {
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
            return Yr.e.Clone((() => new rr(this._texture ? this._texture.url : null, this.eC(), Sr)), this)
          }
          serialize() {
            const Sr = this.name;
            rr.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const Qr = super.serialize(rr._SerializeInternalTextureUniqueId);
            if (!Qr) return null;
            if (rr.SerializeBuffers || rr.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) Qr.base64String = this._buffer, Qr.name = Qr.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const rr = this.mimeType || "image/png";
              Qr.base64String = `data:${rr};base64,${(0,Nr.d)(this._buffer)}`
            } else(rr.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (Qr.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? tr(this) : hr(this));
            return Qr.invertY = this._invertY, Qr.samplingMode = this.samplingMode, Qr._creationFlags = this._creationFlags, Qr._useSRGBBuffer = this._useSRGBBuffer, rr._SerializeInternalTextureUniqueId && (Qr.internalTextureUniqueId = this._texture?.uniqueId), Qr.internalTextureLabel = this._texture?.label, Qr.noMipmap = this._noMipmap, this.name = Sr, Qr
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(Sr, Qr, Zr) {
            if (Sr.customType) {
              const rr = xr.d.Instantiate(Sr.customType).Parse(Sr, Qr, Zr);
              return Sr.samplingMode && rr.updateSamplingMode && rr._samplingMode && rr._samplingMode !== Sr.samplingMode && rr.updateSamplingMode(Sr.samplingMode), rr
            }
            if (Sr.isCube && !Sr.isRenderTarget) return rr._CubeTextureParser(Sr, Qr, Zr);
            const Wr = void 0 !== Sr.internalTextureUniqueId;
            if (!Sr.name && !Sr.isRenderTarget && !Wr) return null;
            let ar;
            if (Wr) {
              const rr = Qr.MU().getLoadedTexturesCache();
              for (const Qr of rr)
                if (Qr.uniqueId === Sr.internalTextureUniqueId) {
                  ar = Qr;
                  break
                }
            }
            const jr = rr => {
              if (rr && rr._texture && (rr._texture._cachedWrapU = null, rr._texture._cachedWrapV = null, rr._texture._cachedWrapR = null), Sr.samplingMode) {
                const Qr = Sr.samplingMode;
                rr && rr.samplingMode !== Qr && rr.updateSamplingMode(Qr)
              }
              if (rr && Sr.animations)
                for (let Qr = 0; Qr < Sr.animations.length; Qr++) {
                  const Zr = Sr.animations[Qr],
                    Wr = (0, fr.d)("BABYLON.Animation");
                  Wr && rr.animations.push(Wr.Parse(Zr))
                }
              rr && rr._texture && (Wr && !ar && rr._texture._setUniqueId(Sr.internalTextureUniqueId), rr._texture.label = Sr.internalTextureLabel)
            };
            return Yr.e.Parse((() => {
              let Wr = !0;
              if (Sr.noMipmap && (Wr = !1), Sr.mirrorPlane) {
                const Zr = rr._CreateMirror(Sr.name, Sr.renderTargetSize, Qr, Wr);
                return Zr._waitingRenderList = Sr.renderList, Zr.mirrorPlane = mr.d.FromArray(Sr.mirrorPlane), jr(Zr), Zr
              }
              if (Sr.isRenderTarget && !Sr.base64String) {
                let Zr = null;
                if (Sr.isCube) {
                  if (Qr.reflectionProbes)
                    for (let rr = 0; rr < Qr.reflectionProbes.length; rr++) {
                      const Zr = Qr.reflectionProbes[rr];
                      if (Zr.name === Sr.name) return Zr.cubeTexture
                    }
                } else Zr = rr._CreateRenderTargetTexture(Sr.name, Sr.renderTargetSize, Qr, Wr, Sr._creationFlags ?? 0), Zr._waitingRenderList = Sr.renderList;
                return jr(Zr), Zr
              }
              if (Sr.isVideo) {
                const ar = rr._CreateVideoTexture(Zr + (Sr.url || Sr.name), Zr + (Sr.src || Sr.url), Qr, Wr, Sr.invertY, Sr.samplingMode, Sr.settings || {});
                return jr(ar), ar
              } {
                let Ir;
                if ("string" === typeof Sr.base64String && Sr.base64String && !ar) {
                  const Zr = {
                      buffer: Sr.base64String,
                      noMipmap: !Wr,
                      invertY: Sr.invertY,
                      samplingMode: Sr.samplingMode,
                      useSRGBBuffer: Sr._useSRGBBuffer ?? !1,
                      creationFlags: Sr._creationFlags ?? 0,
                      onLoad: () => {
                        jr(Ir)
                      }
                    },
                    ar = Sr.base64String,
                    fr = ar.startsWith("data:") ? ar.substring(5) : ar;
                  Ir = rr.CreateFromBase64String("", fr, Qr, Zr), Ir.name = Sr.name
                } else {
                  let fr;
                  fr = Sr.name && (Sr.name.indexOf("://") > 0 || Sr.name.startsWith("data:")) ? Sr.name : Zr + Sr.name, Sr.url && (Sr.url.startsWith("data:") || rr.UseSerializedUrlIfAny) && (fr = Sr.url);
                  const Er = {
                    noMipmap: !Wr,
                    invertY: Sr.invertY,
                    samplingMode: Sr.samplingMode,
                    useSRGBBuffer: Sr._useSRGBBuffer ?? !1,
                    creationFlags: Sr._creationFlags ?? 0,
                    onLoad: () => {
                      jr(Ir)
                    },
                    internalTexture: ar
                  };
                  Ir = new rr(fr, Qr, Er)
                }
                return Ir
              }
            }), Sr, Qr)
          }
          static CreateFromBase64String(Sr, Qr, Zr, Wr, ar) {
            let jr = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : rr.TRILINEAR_SAMPLINGMODE;
            return new rr("data:" + Qr, Zr, Wr, ar, jr, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, Sr, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(Sr, Qr, Zr) {
            let Wr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              ar = arguments.length > 4 ? arguments[4] : void 0,
              jr = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              Ir = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : rr.TRILINEAR_SAMPLINGMODE,
              fr = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Er = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              pr = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              xr = arguments.length > 10 ? arguments[10] : void 0,
              mr = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== Sr.substring(0, 5) && (Sr = "data:" + Sr), new rr(Sr, Zr, ar, jr, Ir, fr, Er, Qr, Wr, pr, void 0, void 0, xr, mr)
          }
        }, (() => {
          const ar = "function" === typeof Symbol && Symbol.metadata ? Object.create(Xr[Symbol.metadata] ?? null) : void 0;
          Sr = [(0, Wr.G)()], Qr = [(0, Wr.G)()], Ur = [(0, Wr.G)()], nr = [(0, Wr.G)()], er = [(0, Wr.G)()], Kr = [(0, Wr.G)()], yr = [(0, Wr.G)()], Br = [(0, Wr.G)()], Tr = [(0, Wr.G)()], vr = [(0, Wr.G)()], Or = [(0, Wr.G)()], Lr = [(0, Wr.G)()], lr = [(0, Wr.G)()], (0, Zr.k)(rr, null, lr, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: rr => "isBlocking" in rr,
              get: rr => rr.isBlocking
            },
            metadata: ar
          }, null, Pr), (0, Zr.k)(null, null, Sr, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: rr => "url" in rr,
              get: rr => rr.url,
              set: (rr, Sr) => {
                rr.url = Sr
              }
            },
            metadata: ar
          }, Hr, qr), (0, Zr.k)(null, null, Qr, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: rr => "uOffset" in rr,
              get: rr => rr.uOffset,
              set: (rr, Sr) => {
                rr.uOffset = Sr
              }
            },
            metadata: ar
          }, Rr, gr), (0, Zr.k)(null, null, Ur, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: rr => "vOffset" in rr,
              get: rr => rr.vOffset,
              set: (rr, Sr) => {
                rr.vOffset = Sr
              }
            },
            metadata: ar
          }, Cr, Mr), (0, Zr.k)(null, null, nr, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: rr => "uScale" in rr,
              get: rr => rr.uScale,
              set: (rr, Sr) => {
                rr.uScale = Sr
              }
            },
            metadata: ar
          }, Gr, kr), (0, Zr.k)(null, null, er, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: rr => "vScale" in rr,
              get: rr => rr.vScale,
              set: (rr, Sr) => {
                rr.vScale = Sr
              }
            },
            metadata: ar
          }, Ar, Vr), (0, Zr.k)(null, null, Kr, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: rr => "uAng" in rr,
              get: rr => rr.uAng,
              set: (rr, Sr) => {
                rr.uAng = Sr
              }
            },
            metadata: ar
          }, ir, wr), (0, Zr.k)(null, null, yr, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: rr => "vAng" in rr,
              get: rr => rr.vAng,
              set: (rr, Sr) => {
                rr.vAng = Sr
              }
            },
            metadata: ar
          }, cr, Fr), (0, Zr.k)(null, null, Br, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: rr => "wAng" in rr,
              get: rr => rr.wAng,
              set: (rr, Sr) => {
                rr.wAng = Sr
              }
            },
            metadata: ar
          }, or, br), (0, Zr.k)(null, null, Tr, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: rr => "uRotationCenter" in rr,
              get: rr => rr.uRotationCenter,
              set: (rr, Sr) => {
                rr.uRotationCenter = Sr
              }
            },
            metadata: ar
          }, Jr, Dr), (0, Zr.k)(null, null, vr, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: rr => "vRotationCenter" in rr,
              get: rr => rr.vRotationCenter,
              set: (rr, Sr) => {
                rr.vRotationCenter = Sr
              }
            },
            metadata: ar
          }, dr, sr), (0, Zr.k)(null, null, Or, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: rr => "wRotationCenter" in rr,
              get: rr => rr.wRotationCenter,
              set: (rr, Sr) => {
                rr.wRotationCenter = Sr
              }
            },
            metadata: ar
          }, ur, rS), (0, Zr.k)(null, null, Lr, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: rr => "homogeneousRotationInUVTransform" in rr,
              get: rr => rr.homogeneousRotationInUVTransform,
              set: (rr, Sr) => {
                rr.homogeneousRotationInUVTransform = Sr
              }
            },
            metadata: ar
          }, SS, QS), ar && Object.defineProperty(rr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ar
          })
        })(), rr.SerializeBuffers = !0, rr.ForceSerializeBuffers = !1, rr.OnTextureLoadErrorObservable = new ar.d, rr._SerializeInternalTextureUniqueId = !1, rr._CubeTextureParser = (rr, Sr, Qr) => {
          throw (0, Er.l)("CubeTexture")
        }, rr._CreateMirror = (rr, Sr, Qr, Zr) => {
          throw (0, Er.l)("MirrorTexture")
        }, rr._CreateRenderTargetTexture = (rr, Sr, Qr, Zr, Wr) => {
          throw (0, Er.l)("RenderTargetTexture")
        }, rr.NEAREST_SAMPLINGMODE = 1, rr.NEAREST_NEAREST_MIPLINEAR = 8, rr.BILINEAR_SAMPLINGMODE = 2, rr.LINEAR_LINEAR_MIPNEAREST = 11, rr.TRILINEAR_SAMPLINGMODE = 3, rr.LINEAR_LINEAR_MIPLINEAR = 3, rr.NEAREST_NEAREST_MIPNEAREST = 4, rr.NEAREST_LINEAR_MIPNEAREST = 5, rr.NEAREST_LINEAR_MIPLINEAR = 6, rr.NEAREST_LINEAR = 7, rr.NEAREST_NEAREST = 1, rr.LINEAR_NEAREST_MIPNEAREST = 9, rr.LINEAR_NEAREST_MIPLINEAR = 10, rr.LINEAR_LINEAR = 2, rr.LINEAR_NEAREST = 12, rr.EXPLICIT_MODE = 0, rr.SPHERICAL_MODE = 1, rr.PLANAR_MODE = 2, rr.CUBIC_MODE = 3, rr.PROJECTION_MODE = 4, rr.SKYBOX_MODE = 5, rr.INVCUBIC_MODE = 6, rr.EQUIRECTANGULAR_MODE = 7, rr.FIXED_EQUIRECTANGULAR_MODE = 8, rr.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, rr.CLAMP_ADDRESSMODE = 0, rr.WRAP_ADDRESSMODE = 1, rr.MIRROR_ADDRESSMODE = 2, rr.UseSerializedUrlIfAny = !1, rr
      })(),
      er = !1;

    function Kr() {
      er || (er = !0, (0, fr.e)("BABYLON.Texture", nr), Yr.e._TextureParser = nr.Parse)
    }
  },
  41882: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr
    });
    class Zr {
      constructor(rr, Sr) {
        this.width = rr, this.height = Sr
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let rr = 0 | this.width;
        return rr = 397 * rr ^ this.height, rr
      }
      iH(rr) {
        this.width = rr.width, this.height = rr.height
      }
      Hrr(rr, Sr) {
        return this.width = rr, this.height = Sr, this
      }
      set(rr, Sr) {
        return this.Hrr(rr, Sr)
      }
      multiplyByFloats(rr, Sr) {
        return new Zr(this.width * rr, this.height * Sr)
      }
      clone() {
        return new Zr(this.width, this.height)
      }
      equals(rr) {
        return !!rr && (this.width === rr.width && this.height === rr.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new Zr(0, 0)
      }
      add(rr) {
        return new Zr(this.width + rr.width, this.height + rr.height)
      }
      subtract(rr) {
        return new Zr(this.width - rr.width, this.height - rr.height)
      }
      scale(rr) {
        return new Zr(this.width * rr, this.height * rr)
      }
      static Lerp(rr, Sr, Qr) {
        const Wr = rr.width + (Sr.width - rr.width) * Qr,
          ar = rr.height + (Sr.height - rr.height) * Qr;
        return new Zr(Wr, ar)
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);