export const id = 260;
export const ids = [260];
export const modules = {
  40805: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG
    });
    let wG = !1
  },
  40387: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => KG
    });
    var wG = ZG(40393),
      SG = ZG(40398),
      LG = ZG(37465),
      yG = ZG(37439),
      kG = ZG(37463),
      UG = ZG(38311),
      YG = ZG(40407);
    class VG {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(GG) {
        this._wrapU = GG
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(GG) {
        this._wrapV = GG
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(GG) {
        this._texture && (this._texture.isCube = GG)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(GG) {
        this._texture && (this._texture.is3D = GG)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(GG) {
        this._texture && (this._texture.is2DArray = GG)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(GG) {
        return void 0 !== GG?.shareDepth
      }
      constructor(GG) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = YG.c.Zero(), this._cachedBaseSize = YG.c.Zero(), this._initialSamplingMode = 2, this._texture = VG._IsRenderTargetWrapper(GG) ? GG.texture : GG, this._texture && (this._engine = this._texture.CK(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(GG, this._texture, this._texture.generateMipMaps && bG)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var pG, fG = ZG(40416),
      QG = ZG(40258);
    let KG = (() => {
      var GG;
      let bG, ZG, YG, pG, QG, KG, hG, dG, JG, rG, zG, EG, oG, XG, uG, iG, CG, WG, mG, IG, FG, vG, aG, cG, lG, jG = VG,
        PG = [],
        MG = [],
        AG = [],
        sG = [],
        qG = [],
        nG = [],
        gG = [],
        eG = [],
        RG = [],
        TG = [],
        HG = [],
        tG = [],
        DG = [],
        NG = [],
        OG = [],
        xG = [],
        BG = [],
        Gb = [],
        bb = [],
        Zb = [],
        wb = [],
        Sb = [],
        Lb = [],
        yb = [],
        kb = [],
        Ub = [],
        Yb = [],
        Vb = [],
        pb = [],
        fb = [],
        Qb = [];
      return GG = class extends jG {
        set hasAlpha(GG) {
          this._hasAlpha = GG
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(GG) {
          this._getAlphaFromRGB !== GG && (this._getAlphaFromRGB = GG, this._scene && this._scene.markAllMaterialsAsDirty(1, (GG => GG.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(GG) {
          this._coordinatesIndex !== GG && (this._coordinatesIndex = GG, this._scene && this._scene.markAllMaterialsAsDirty(1, (GG => GG.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(GG) {
          this._coordinatesMode !== GG && (this._coordinatesMode = GG, this._scene && this._scene.markAllMaterialsAsDirty(1, (GG => GG.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(GG) {
          this._wrapU = GG
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(GG) {
          this._wrapV = GG
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(GG) {
          this._texture ? this._texture.isCube = GG : this._isCube = GG
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(GG) {
          this._texture && (this._texture.is3D = GG)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(GG) {
          this._texture && (this._texture.is2DArray = GG)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(GG) {
          if (this._texture) {
            if (this._texture._gammaSpace === GG) return;
            this._texture._gammaSpace = GG
          } else {
            if (this._gammaSpace === GG) return;
            this._gammaSpace = GG
          }
          this.Dv()?.markAllMaterialsAsDirty(1, (GG => GG.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(GG) {
          GG !== this.isRGBD && (this._texture && (this._texture._isRGBD = GG), this.Dv()?.markAllMaterialsAsDirty(1, (GG => GG.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(GG) {
          this._texture && (this._texture._lodGenerationOffset = GG)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(GG) {
          this._texture && (this._texture._lodGenerationScale = GG)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(GG) {
          this._texture && (this._texture._linearSpecularLOD = GG)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(GG) {
          this._texture && (this._texture._irradianceTexture = GG)
        }
        get uid() {
          return this._uid || (this._uid = (0, UG.e)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(GG) {
          this._onDisposeObserver && this.Gl.remove(this._onDisposeObserver), this._onDisposeObserver = this.Gl.add(GG)
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
        constructor(bG) {
          let ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, wG.n)(this, PG), (0, wG.n)(this, MG, void 0)), this.name = ((0, wG.n)(this, AG), (0, wG.n)(this, sG, void 0)), this.displayName = ((0, wG.n)(this, qG), (0, wG.n)(this, nG, void 0)), this.metadata = ((0, wG.n)(this, gG), (0, wG.n)(this, eG, null)), this._internalMetadata = (0, wG.n)(this, RG), this.reservedDataStore = null, this._hasAlpha = (0, wG.n)(this, TG, !1), this._getAlphaFromRGB = ((0, wG.n)(this, HG), (0, wG.n)(this, tG, !1)), this.level = ((0, wG.n)(this, DG), (0, wG.n)(this, NG, 1)), this._coordinatesIndex = ((0, wG.n)(this, OG), (0, wG.n)(this, xG, 0)), this.optimizeUVAllocation = ((0, wG.n)(this, BG), (0, wG.n)(this, Gb, !0)), this._coordinatesMode = ((0, wG.n)(this, bb), (0, wG.n)(this, Zb, 0)), this.wrapR = ((0, wG.n)(this, wb), (0, wG.n)(this, Sb, 1)), this.anisotropicFilteringLevel = ((0, wG.n)(this, Lb), (0, wG.n)(this, yb, GG.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, wG.n)(this, kb), !1), this._gammaSpace = !0, this.invertZ = (0, wG.n)(this, Ub, !1), this.lodLevelInAlpha = ((0, wG.n)(this, Yb), (0, wG.n)(this, Vb, !1)), this._dominantDirection = ((0, wG.n)(this, pb), null), this.isRenderTarget = (0, wG.n)(this, fb, !1), this._prefiltered = ((0, wG.n)(this, Qb), !1), this._forceSerialize = !1, this.animations = [], this.Gl = new LG.c, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, bG ? GG._IsScene(bG) ? this._scene = bG : this._engine = bG : this._scene = kG.c.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.CK()), this._texture = ZG, this._uid = null
        }
        Dv() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return yG.e.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return yG.e.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(GG) {}
        get canRescale() {
          return !1
        }
        _getFromCache(GG, bG, ZG, wG, SG, LG) {
          const yG = this._getEngine();
          if (!yG) return null;
          const kG = yG._getUseSRGBBuffer(!!SG, bG),
            UG = yG.getLoadedTexturesCache();
          for (let YG = 0; YG < UG.length; YG++) {
            const yG = UG[YG];
            if ((void 0 === SG || kG === yG._useSRGBBuffer) && (void 0 === wG || wG === yG.invertY) && yG.url === GG && yG.generateMipMaps === !bG && (!ZG || ZG === yG.samplingMode) && (void 0 === LG || LG === yG.isCube)) return yG.incrementReferences(), yG
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
          const GG = this.Dv();
          GG && GG.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            wG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            SG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            yG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            kG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            UG = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const YG = this._getEngine();
          if (!YG) return null;
          const VG = this.getSize();
          let pG = VG.width,
            fG = VG.height;
          0 !== bG && (pG /= Math.pow(2, bG), fG /= Math.pow(2, bG), pG = Math.round(pG), fG = Math.round(fG)), kG = Math.min(pG, kG), UG = Math.min(fG, UG);
          try {
            return this._texture.isCube || this._texture.is2DArray ? YG._readTexturePixels(this._texture, kG, UG, GG, bG, ZG, wG, SG, LG, yG) : YG._readTexturePixels(this._texture, kG, UG, -1, bG, ZG, wG, SG, LG, yG)
          } catch (QG) {
            return null
          }
        }
        _readPixelsSync() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            wG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            SG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const LG = this.getSize();
          let yG = LG.width,
            kG = LG.height;
          const UG = this._getEngine();
          if (!UG) return null;
          0 != bG && (yG /= Math.pow(2, bG), kG /= Math.pow(2, bG), yG = Math.round(yG), kG = Math.round(kG));
          try {
            return this._texture.isCube ? UG._readTexturePixelsSync(this._texture, yG, kG, GG, bG, ZG, wG, SG) : UG._readTexturePixelsSync(this._texture, yG, kG, -1, bG, ZG, wG, SG)
          } catch (YG) {
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
            const GG = this._scene.textures.indexOf(this);
            if (GG >= 0 && this._scene.textures.splice(GG, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const GG = this._parentContainer.textures.indexOf(this);
              GG > -1 && this._parentContainer.textures.splice(GG, 1), this._parentContainer = null
            }
          }
          this.Gl.notifyObservers(this), this.Gl.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !GG) return null;
          const bG = fG.b.Serialize(this);
          return fG.b.AppendSerializedAnimations(this, bG), bG
        }
        static WhenAllReady(GG, bG) {
          let ZG = GG.length;
          if (0 !== ZG)
            for (let wG = 0; wG < GG.length; wG++) {
              const SG = GG[wG];
              if (SG.isReady()) 0 === --ZG && bG();
              else {
                const GG = SG.onLoadObservable;
                GG ? GG.addOnce((() => {
                  0 === --ZG && bG()
                })) : 0 === --ZG && bG()
              }
            } else bG()
        }
        static _IsScene(GG) {
          return "Scene" === GG.getClassName()
        }
      }, (() => {
        const LG = "function" === typeof Symbol && Symbol.metadata ? Object.create(jG[Symbol.metadata] ?? null) : void 0;
        bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], YG = [(0, SG.Q)()], pG = [(0, SG.Q)()], QG = [(0, SG.Q)("hasAlpha")], KG = [(0, SG.Q)("getAlphaFromRGB")], hG = [(0, SG.Q)()], dG = [(0, SG.Q)("coordinatesIndex")], JG = [(0, SG.Q)()], rG = [(0, SG.Q)("coordinatesMode")], zG = [(0, SG.Q)()], EG = [(0, SG.Q)()], oG = [(0, SG.Q)()], XG = [(0, SG.Q)()], uG = [(0, SG.Q)()], iG = [(0, SG.Q)()], CG = [(0, SG.Q)()], WG = [(0, SG.Q)()], mG = [(0, SG.Q)()], IG = [(0, SG.Q)()], FG = [(0, SG.Q)()], vG = [(0, SG.Q)()], aG = [(0, SG.Q)()], cG = [(0, SG.E)()], lG = [(0, SG.Q)()], (0, wG.k)(GG, null, zG, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: GG => "wrapU" in GG,
            get: GG => GG.wrapU
          },
          metadata: LG
        }, null, PG), (0, wG.k)(GG, null, EG, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: GG => "wrapV" in GG,
            get: GG => GG.wrapV
          },
          metadata: LG
        }, null, PG), (0, wG.k)(GG, null, uG, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: GG => "isCube" in GG,
            get: GG => GG.isCube
          },
          metadata: LG
        }, null, PG), (0, wG.k)(GG, null, iG, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: GG => "is3D" in GG,
            get: GG => GG.is3D
          },
          metadata: LG
        }, null, PG), (0, wG.k)(GG, null, CG, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: GG => "is2DArray" in GG,
            get: GG => GG.is2DArray
          },
          metadata: LG
        }, null, PG), (0, wG.k)(GG, null, WG, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: GG => "gammaSpace" in GG,
            get: GG => GG.gammaSpace
          },
          metadata: LG
        }, null, PG), (0, wG.k)(GG, null, FG, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: GG => "lodGenerationOffset" in GG,
            get: GG => GG.lodGenerationOffset
          },
          metadata: LG
        }, null, PG), (0, wG.k)(GG, null, vG, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: GG => "lodGenerationScale" in GG,
            get: GG => GG.lodGenerationScale
          },
          metadata: LG
        }, null, PG), (0, wG.k)(GG, null, aG, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: GG => "linearSpecularLOD" in GG,
            get: GG => GG.linearSpecularLOD
          },
          metadata: LG
        }, null, PG), (0, wG.k)(GG, null, cG, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "irradianceTexture" in GG,
            get: GG => GG.irradianceTexture
          },
          metadata: LG
        }, null, PG), (0, wG.k)(null, null, bG, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: GG => "uniqueId" in GG,
            get: GG => GG.uniqueId,
            set: (GG, bG) => {
              GG.uniqueId = bG
            }
          },
          metadata: LG
        }, MG, AG), (0, wG.k)(null, null, ZG, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: GG => "name" in GG,
            get: GG => GG.name,
            set: (GG, bG) => {
              GG.name = bG
            }
          },
          metadata: LG
        }, sG, qG), (0, wG.k)(null, null, YG, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: GG => "displayName" in GG,
            get: GG => GG.displayName,
            set: (GG, bG) => {
              GG.displayName = bG
            }
          },
          metadata: LG
        }, nG, gG), (0, wG.k)(null, null, pG, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: GG => "metadata" in GG,
            get: GG => GG.metadata,
            set: (GG, bG) => {
              GG.metadata = bG
            }
          },
          metadata: LG
        }, eG, RG), (0, wG.k)(null, null, QG, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: GG => "_hasAlpha" in GG,
            get: GG => GG._hasAlpha,
            set: (GG, bG) => {
              GG._hasAlpha = bG
            }
          },
          metadata: LG
        }, TG, HG), (0, wG.k)(null, null, KG, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: GG => "_getAlphaFromRGB" in GG,
            get: GG => GG._getAlphaFromRGB,
            set: (GG, bG) => {
              GG._getAlphaFromRGB = bG
            }
          },
          metadata: LG
        }, tG, DG), (0, wG.k)(null, null, hG, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: GG => "level" in GG,
            get: GG => GG.level,
            set: (GG, bG) => {
              GG.level = bG
            }
          },
          metadata: LG
        }, NG, OG), (0, wG.k)(null, null, dG, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: GG => "_coordinatesIndex" in GG,
            get: GG => GG._coordinatesIndex,
            set: (GG, bG) => {
              GG._coordinatesIndex = bG
            }
          },
          metadata: LG
        }, xG, BG), (0, wG.k)(null, null, JG, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: GG => "optimizeUVAllocation" in GG,
            get: GG => GG.optimizeUVAllocation,
            set: (GG, bG) => {
              GG.optimizeUVAllocation = bG
            }
          },
          metadata: LG
        }, Gb, bb), (0, wG.k)(null, null, rG, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: GG => "_coordinatesMode" in GG,
            get: GG => GG._coordinatesMode,
            set: (GG, bG) => {
              GG._coordinatesMode = bG
            }
          },
          metadata: LG
        }, Zb, wb), (0, wG.k)(null, null, oG, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: GG => "wrapR" in GG,
            get: GG => GG.wrapR,
            set: (GG, bG) => {
              GG.wrapR = bG
            }
          },
          metadata: LG
        }, Sb, Lb), (0, wG.k)(null, null, XG, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: GG => "anisotropicFilteringLevel" in GG,
            get: GG => GG.anisotropicFilteringLevel,
            set: (GG, bG) => {
              GG.anisotropicFilteringLevel = bG
            }
          },
          metadata: LG
        }, yb, kb), (0, wG.k)(null, null, mG, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: GG => "invertZ" in GG,
            get: GG => GG.invertZ,
            set: (GG, bG) => {
              GG.invertZ = bG
            }
          },
          metadata: LG
        }, Ub, Yb), (0, wG.k)(null, null, IG, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: GG => "lodLevelInAlpha" in GG,
            get: GG => GG.lodLevelInAlpha,
            set: (GG, bG) => {
              GG.lodLevelInAlpha = bG
            }
          },
          metadata: LG
        }, Vb, pb), (0, wG.k)(null, null, lG, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: GG => "isRenderTarget" in GG,
            get: GG => GG.isRenderTarget,
            set: (GG, bG) => {
              GG.isRenderTarget = bG
            }
          },
          metadata: LG
        }, fb, Qb), LG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: LG
        })
      })(), GG.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, GG
    })();
    (pG = KG.prototype).forceSphericalPolynomialsRecompute ?? (pG.forceSphericalPolynomialsRecompute = (0, QG.h)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(KG.prototype, "sphericalPolynomial") || Object.defineProperty(KG.prototype, "sphericalPolynomial", (0, QG.d)("BaseTexture", "sphericalPolynomial"))
  },
  40857: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => oG,
      d: () => zG
    });
    var wG = ZG(40393),
      SG = ZG(40398),
      LG = ZG(37465),
      yG = ZG(37439),
      kG = ZG(40387),
      UG = ZG(37484),
      YG = ZG(40258),
      VG = ZG(40271),
      pG = ZG(40480),
      fG = ZG(38175),
      QG = ZG(40443);

    function KG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const wG = bG.width,
        SG = bG.height;
      if (GG instanceof Float32Array) {
        let bG = GG.byteLength / GG.BYTES_PER_ELEMENT;
        const ZG = new Uint8Array(bG);
        for (; --bG >= 0;) {
          let wG = GG[bG];
          wG < 0 ? wG = 0 : wG > 1 && (wG = 1), ZG[bG] = 255 * wG
        }
        GG = ZG
      }
      const LG = document.createElement("canvas");
      LG.width = wG, LG.height = SG;
      const yG = LG.getContext("2d");
      if (!yG) return null;
      const kG = yG.createImageData(wG, SG);
      if (kG.data.set(GG), yG.putImageData(kG, 0, 0), ZG) {
        const GG = document.createElement("canvas");
        GG.width = wG, GG.height = SG;
        const bG = GG.getContext("2d");
        return bG ? (bG.translate(0, SG), bG.scale(1, -1), bG.drawImage(LG, 0, 0), GG.toDataURL("image/png")) : null
      }
      return LG.toDataURL("image/png")
    }

    function hG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const wG = GG.getInternalTexture();
      if (!wG) return null;
      const SG = GG._readPixelsSync(bG, ZG);
      return SG ? KG(SG, GG.getSize(), wG.invertY) : null
    }
    async function dG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const wG = GG.getInternalTexture();
      if (!wG) return null;
      const SG = await GG.readPixels(bG, ZG);
      return SG ? KG(SG, GG.getSize(), wG.invertY) : null
    }
    var JG = ZG(40805),
      rG = ZG(40416);
    let zG = (() => {
        var GG;
        let bG, ZG, KG, zG, EG, oG, XG, uG, iG, CG, WG, mG, IG, FG = kG.b,
          vG = [],
          aG = [],
          cG = [],
          lG = [],
          jG = [],
          PG = [],
          MG = [],
          AG = [],
          sG = [],
          qG = [],
          nG = [],
          gG = [],
          eG = [],
          RG = [],
          TG = [],
          HG = [],
          tG = [],
          DG = [],
          NG = [],
          OG = [],
          xG = [],
          BG = [],
          Gb = [],
          bb = [],
          Zb = [];
        return GG = class extends FG {
          static _CreateVideoTexture(bG, ZG, wG) {
            arguments.length > 5 && void 0 !== arguments[5] || GG.TRILINEAR_SAMPLINGMODE;
            throw (0, YG.i)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(GG) {
            this._isBlocking = GG
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(bG, ZG, SG, yG) {
            let kG, UG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : GG.TRILINEAR_SAMPLINGMODE,
              YG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              pG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              fG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              QG = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              KG = arguments.length > 9 ? arguments[9] : void 0,
              hG = arguments.length > 10 ? arguments[10] : void 0,
              dG = arguments.length > 11 ? arguments[11] : void 0,
              rG = arguments.length > 12 ? arguments[12] : void 0,
              zG = arguments.length > 13 ? arguments[13] : void 0;
            super(ZG), this.url = ((0, wG.n)(this, vG), (0, wG.n)(this, aG, null)), this.uOffset = ((0, wG.n)(this, cG), (0, wG.n)(this, lG, 0)), this.vOffset = ((0, wG.n)(this, jG), (0, wG.n)(this, PG, 0)), this.uScale = ((0, wG.n)(this, MG), (0, wG.n)(this, AG, 1)), this.vScale = ((0, wG.n)(this, sG), (0, wG.n)(this, qG, 1)), this.uAng = ((0, wG.n)(this, nG), (0, wG.n)(this, gG, 0)), this.vAng = ((0, wG.n)(this, eG), (0, wG.n)(this, RG, 0)), this.wAng = ((0, wG.n)(this, TG), (0, wG.n)(this, HG, 0)), this.uRotationCenter = ((0, wG.n)(this, tG), (0, wG.n)(this, DG, .5)), this.vRotationCenter = ((0, wG.n)(this, NG), (0, wG.n)(this, OG, .5)), this.wRotationCenter = ((0, wG.n)(this, xG), (0, wG.n)(this, BG, .5)), this.homogeneousRotationInUVTransform = ((0, wG.n)(this, Gb), (0, wG.n)(this, bb, !1)), this.inspectableCustomProperties = ((0, wG.n)(this, Zb), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new LG.c, this._isBlocking = !0, this.name = bG || "", this.url = bG;
            let EG = !1,
              oG = null,
              XG = !0;
            "object" === typeof SG && null !== SG ? (kG = SG.noMipmap ?? !1, yG = SG.invertY ?? !JG.c, UG = SG.samplingMode ?? GG.TRILINEAR_SAMPLINGMODE, YG = SG.onLoad ?? null, pG = SG.onError ?? null, fG = SG.buffer ?? null, QG = SG.deleteBuffer ?? !1, KG = SG.format, hG = SG.mimeType, dG = SG.loaderOptions, rG = SG.creationFlags, EG = SG.useSRGBBuffer ?? !1, oG = SG.internalTexture ?? null, XG = SG.gammaSpace ?? XG, zG = SG.forcedExtension ?? zG) : kG = !!SG, this._gammaSpace = XG, this._noMipmap = kG, this._invertY = void 0 === yG ? !JG.c : yG, this._initialSamplingMode = UG, this._buffer = fG, this._deleteBuffer = QG, this._mimeType = hG, this._loaderOptions = dG, this._creationFlags = rG, this._useSRGBBuffer = EG, this._forcedExtension = zG, void 0 !== KG && (this._format = KG);
            const uG = this.Dv(),
              iG = this._getEngine();
            if (!iG) return;
            iG.onBeforeTextureInitObservable.notifyObservers(this);
            const CG = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), YG && YG(), !this.isBlocking && uG && uG.resetCachedMaterial()
              },
              WG = (bG, ZG) => {
                this._loadingError = !0, this._errorObject = {
                  message: bG,
                  exception: ZG
                }, pG && pG(bG, ZG), GG.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !oG) return this._delayedOnLoad = CG, void(this._delayedOnError = WG);
            if (this._texture = oG ?? this._getFromCache(this.url, kG, UG, this._invertY, EG, this.isCube), this._texture)
              if (this._texture.isReady) VG.b.SetImmediate((() => CG()));
              else {
                const GG = this._texture.onLoadedObservable.add(CG);
                this._texture.onErrorObservable.add((bG => {
                  WG(bG.message, bG.exception), this._texture?.onLoadedObservable.remove(GG)
                }))
              }
            else if (uG && uG.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = CG, this._delayedOnError = WG;
            else {
              try {
                this._texture = iG.createTexture(this.url, kG, this._invertY, uG, UG, CG, WG, this._buffer, void 0, this._format, this._forcedExtension, hG, dG, rG, EG)
              } catch (mG) {
                throw WG("error loading", mG), mG
              }
              QG && (this._buffer = null)
            }
          }
          updateURL(GG) {
            let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              ZG = arguments.length > 2 ? arguments[2] : void 0,
              wG = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.Dv().markAllMaterialsAsDirty(1, (GG => GG.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = GG), this.url = GG, this._buffer = bG, this._forcedExtension = wG, this.delayLoadState = 4;
            const SG = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              SG ? SG() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), ZG && ZG()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const GG = this.Dv();
            if (!GG) return;
            let bG = this.url;
            !bG && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (bG = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(bG, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? VG.b.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = GG.CK().createTexture(bG, this._noMipmap, this._invertY, GG, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(GG, bG, ZG, wG) {
            GG *= this._cachedUScale, bG *= this._cachedVScale, GG -= this.uRotationCenter * this._cachedUScale, bG -= this.vRotationCenter * this._cachedVScale, ZG -= this.wRotationCenter, yG.p.TransformCoordinatesFromFloatsToRef(GG, bG, ZG, this._rowGenerationMatrix, wG), wG.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, wG.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, wG.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * GG === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * GG, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = yG.e.Zero(), this._rowGenerationMatrix = new yG.e, this._t0 = yG.p.Zero(), this._t1 = yG.p.Zero(), this._t2 = yG.p.Zero()), yG.e.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (yG.e.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, yG.j.Matrix[0]), yG.e.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, yG.j.Matrix[1]), yG.e.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, yG.j.Matrix[2]), yG.e.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, yG.j.Matrix[3]), yG.j.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(yG.j.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(yG.j.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(yG.j.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.twG(this._t0), this._t2.twG(this._t0), yG.e.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const bG = this.Dv();
            if (!bG) return this._cachedTextureMatrix;
            const ZG = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && ZG !== this._cachedIdentity3x2 && bG.markAllMaterialsAsDirty(1, (GG => GG.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const bG = this.Dv();
            if (!bG) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== GG.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === bG.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = yG.e.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = yG.e.Zero());
            const ZG = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case GG.PLANAR_MODE:
                yG.e.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case GG.PROJECTION_MODE: {
                yG.e.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const GG = bG.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = GG.updateFlag, GG.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                yG.e.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return ZG && bG.markAllMaterialsAsDirty(1, (GG => GG.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const bG = {
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
            return rG.b.Clone((() => new GG(this._texture ? this._texture.url : null, this.Dv(), bG)), this)
          }
          serialize() {
            const bG = this.name;
            GG.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const ZG = super.serialize(GG._SerializeInternalTextureUniqueId);
            if (!ZG) return null;
            if (GG.SerializeBuffers || GG.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) ZG.base64String = this._buffer, ZG.name = ZG.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const GG = this.mimeType || "image/png";
              ZG.base64String = `data:${GG};base64,${(0,QG.e)(this._buffer)}`
            } else(GG.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (ZG.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? hG(this) : dG(this));
            return ZG.invertY = this._invertY, ZG.samplingMode = this.samplingMode, ZG._creationFlags = this._creationFlags, ZG._useSRGBBuffer = this._useSRGBBuffer, GG._SerializeInternalTextureUniqueId && (ZG.internalTextureUniqueId = this._texture?.uniqueId), ZG.internalTextureLabel = this._texture?.label, ZG.noMipmap = this._noMipmap, this.name = bG, ZG
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(bG, ZG, wG) {
            if (bG.customType) {
              const GG = pG.c.Instantiate(bG.customType).Parse(bG, ZG, wG);
              return bG.samplingMode && GG.updateSamplingMode && GG._samplingMode && GG._samplingMode !== bG.samplingMode && GG.updateSamplingMode(bG.samplingMode), GG
            }
            if (bG.isCube && !bG.isRenderTarget) return GG._CubeTextureParser(bG, ZG, wG);
            const SG = void 0 !== bG.internalTextureUniqueId;
            if (!bG.name && !bG.isRenderTarget && !SG) return null;
            let LG;
            if (SG) {
              const GG = ZG.CK().getLoadedTexturesCache();
              for (const ZG of GG)
                if (ZG.uniqueId === bG.internalTextureUniqueId) {
                  LG = ZG;
                  break
                }
            }
            const yG = GG => {
              if (GG && GG._texture && (GG._texture._cachedWrapU = null, GG._texture._cachedWrapV = null, GG._texture._cachedWrapR = null), bG.samplingMode) {
                const ZG = bG.samplingMode;
                GG && GG.samplingMode !== ZG && GG.updateSamplingMode(ZG)
              }
              if (GG && bG.animations)
                for (let ZG = 0; ZG < bG.animations.length; ZG++) {
                  const wG = bG.animations[ZG],
                    SG = (0, UG.e)("BABYLON.Animation");
                  SG && GG.animations.push(SG.Parse(wG))
                }
              GG && GG._texture && (SG && !LG && GG._texture._setUniqueId(bG.internalTextureUniqueId), GG._texture.label = bG.internalTextureLabel)
            };
            return rG.b.Parse((() => {
              let SG = !0;
              if (bG.noMipmap && (SG = !1), bG.mirrorPlane) {
                const wG = GG._CreateMirror(bG.name, bG.renderTargetSize, ZG, SG);
                return wG._waitingRenderList = bG.renderList, wG.mirrorPlane = fG.b.FromArray(bG.mirrorPlane), yG(wG), wG
              }
              if (bG.isRenderTarget && !bG.base64String) {
                let wG = null;
                if (bG.isCube) {
                  if (ZG.reflectionProbes)
                    for (let GG = 0; GG < ZG.reflectionProbes.length; GG++) {
                      const wG = ZG.reflectionProbes[GG];
                      if (wG.name === bG.name) return wG.cubeTexture
                    }
                } else wG = GG._CreateRenderTargetTexture(bG.name, bG.renderTargetSize, ZG, SG, bG._creationFlags ?? 0), wG._waitingRenderList = bG.renderList;
                return yG(wG), wG
              }
              if (bG.isVideo) {
                const LG = GG._CreateVideoTexture(wG + (bG.url || bG.name), wG + (bG.src || bG.url), ZG, SG, bG.invertY, bG.samplingMode, bG.settings || {});
                return yG(LG), LG
              } {
                let kG;
                if ("string" === typeof bG.base64String && bG.base64String && !LG) {
                  const wG = {
                      buffer: bG.base64String,
                      noMipmap: !SG,
                      invertY: bG.invertY,
                      samplingMode: bG.samplingMode,
                      useSRGBBuffer: bG._useSRGBBuffer ?? !1,
                      creationFlags: bG._creationFlags ?? 0,
                      onLoad: () => {
                        yG(kG)
                      }
                    },
                    LG = bG.base64String,
                    UG = LG.startsWith("data:") ? LG.substring(5) : LG;
                  kG = GG.CreateFromBase64String("", UG, ZG, wG), kG.name = bG.name
                } else {
                  let UG;
                  UG = bG.name && (bG.name.indexOf("://") > 0 || bG.name.startsWith("data:")) ? bG.name : wG + bG.name, bG.url && (bG.url.startsWith("data:") || GG.UseSerializedUrlIfAny) && (UG = bG.url);
                  const YG = {
                    noMipmap: !SG,
                    invertY: bG.invertY,
                    samplingMode: bG.samplingMode,
                    useSRGBBuffer: bG._useSRGBBuffer ?? !1,
                    creationFlags: bG._creationFlags ?? 0,
                    onLoad: () => {
                      yG(kG)
                    },
                    internalTexture: LG
                  };
                  kG = new GG(UG, ZG, YG)
                }
                return kG
              }
            }), bG, ZG)
          }
          static CreateFromBase64String(bG, ZG, wG, SG, LG) {
            let yG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : GG.TRILINEAR_SAMPLINGMODE;
            return new GG("data:" + ZG, wG, SG, LG, yG, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, bG, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(bG, ZG, wG) {
            let SG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              LG = arguments.length > 4 ? arguments[4] : void 0,
              yG = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              kG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : GG.TRILINEAR_SAMPLINGMODE,
              UG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              YG = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              VG = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              pG = arguments.length > 10 ? arguments[10] : void 0,
              fG = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== bG.substring(0, 5) && (bG = "data:" + bG), new GG(bG, wG, LG, yG, kG, UG, YG, ZG, SG, VG, void 0, void 0, pG, fG)
          }
        }, (() => {
          const LG = "function" === typeof Symbol && Symbol.metadata ? Object.create(FG[Symbol.metadata] ?? null) : void 0;
          bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], KG = [(0, SG.Q)()], zG = [(0, SG.Q)()], EG = [(0, SG.Q)()], oG = [(0, SG.Q)()], XG = [(0, SG.Q)()], uG = [(0, SG.Q)()], iG = [(0, SG.Q)()], CG = [(0, SG.Q)()], WG = [(0, SG.Q)()], mG = [(0, SG.Q)()], IG = [(0, SG.Q)()], (0, wG.k)(GG, null, IG, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: GG => "isBlocking" in GG,
              get: GG => GG.isBlocking
            },
            metadata: LG
          }, null, vG), (0, wG.k)(null, null, bG, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: GG => "url" in GG,
              get: GG => GG.url,
              set: (GG, bG) => {
                GG.url = bG
              }
            },
            metadata: LG
          }, aG, cG), (0, wG.k)(null, null, ZG, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: GG => "uOffset" in GG,
              get: GG => GG.uOffset,
              set: (GG, bG) => {
                GG.uOffset = bG
              }
            },
            metadata: LG
          }, lG, jG), (0, wG.k)(null, null, KG, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: GG => "vOffset" in GG,
              get: GG => GG.vOffset,
              set: (GG, bG) => {
                GG.vOffset = bG
              }
            },
            metadata: LG
          }, PG, MG), (0, wG.k)(null, null, zG, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: GG => "uScale" in GG,
              get: GG => GG.uScale,
              set: (GG, bG) => {
                GG.uScale = bG
              }
            },
            metadata: LG
          }, AG, sG), (0, wG.k)(null, null, EG, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: GG => "vScale" in GG,
              get: GG => GG.vScale,
              set: (GG, bG) => {
                GG.vScale = bG
              }
            },
            metadata: LG
          }, qG, nG), (0, wG.k)(null, null, oG, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: GG => "uAng" in GG,
              get: GG => GG.uAng,
              set: (GG, bG) => {
                GG.uAng = bG
              }
            },
            metadata: LG
          }, gG, eG), (0, wG.k)(null, null, XG, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: GG => "vAng" in GG,
              get: GG => GG.vAng,
              set: (GG, bG) => {
                GG.vAng = bG
              }
            },
            metadata: LG
          }, RG, TG), (0, wG.k)(null, null, uG, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: GG => "wAng" in GG,
              get: GG => GG.wAng,
              set: (GG, bG) => {
                GG.wAng = bG
              }
            },
            metadata: LG
          }, HG, tG), (0, wG.k)(null, null, iG, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: GG => "uRotationCenter" in GG,
              get: GG => GG.uRotationCenter,
              set: (GG, bG) => {
                GG.uRotationCenter = bG
              }
            },
            metadata: LG
          }, DG, NG), (0, wG.k)(null, null, CG, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: GG => "vRotationCenter" in GG,
              get: GG => GG.vRotationCenter,
              set: (GG, bG) => {
                GG.vRotationCenter = bG
              }
            },
            metadata: LG
          }, OG, xG), (0, wG.k)(null, null, WG, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: GG => "wRotationCenter" in GG,
              get: GG => GG.wRotationCenter,
              set: (GG, bG) => {
                GG.wRotationCenter = bG
              }
            },
            metadata: LG
          }, BG, Gb), (0, wG.k)(null, null, mG, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: GG => "homogeneousRotationInUVTransform" in GG,
              get: GG => GG.homogeneousRotationInUVTransform,
              set: (GG, bG) => {
                GG.homogeneousRotationInUVTransform = bG
              }
            },
            metadata: LG
          }, bb, Zb), LG && Object.defineProperty(GG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: LG
          })
        })(), GG.SerializeBuffers = !0, GG.ForceSerializeBuffers = !1, GG.OnTextureLoadErrorObservable = new LG.c, GG._SerializeInternalTextureUniqueId = !1, GG._CubeTextureParser = (GG, bG, ZG) => {
          throw (0, YG.i)("CubeTexture")
        }, GG._CreateMirror = (GG, bG, ZG, wG) => {
          throw (0, YG.i)("MirrorTexture")
        }, GG._CreateRenderTargetTexture = (GG, bG, ZG, wG, SG) => {
          throw (0, YG.i)("RenderTargetTexture")
        }, GG.NEAREST_SAMPLINGMODE = 1, GG.NEAREST_NEAREST_MIPLINEAR = 8, GG.BILINEAR_SAMPLINGMODE = 2, GG.LINEAR_LINEAR_MIPNEAREST = 11, GG.TRILINEAR_SAMPLINGMODE = 3, GG.LINEAR_LINEAR_MIPLINEAR = 3, GG.NEAREST_NEAREST_MIPNEAREST = 4, GG.NEAREST_LINEAR_MIPNEAREST = 5, GG.NEAREST_LINEAR_MIPLINEAR = 6, GG.NEAREST_LINEAR = 7, GG.NEAREST_NEAREST = 1, GG.LINEAR_NEAREST_MIPNEAREST = 9, GG.LINEAR_NEAREST_MIPLINEAR = 10, GG.LINEAR_LINEAR = 2, GG.LINEAR_NEAREST = 12, GG.EXPLICIT_MODE = 0, GG.SPHERICAL_MODE = 1, GG.PLANAR_MODE = 2, GG.CUBIC_MODE = 3, GG.PROJECTION_MODE = 4, GG.SKYBOX_MODE = 5, GG.INVCUBIC_MODE = 6, GG.EQUIRECTANGULAR_MODE = 7, GG.FIXED_EQUIRECTANGULAR_MODE = 8, GG.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, GG.CLAMP_ADDRESSMODE = 0, GG.WRAP_ADDRESSMODE = 1, GG.MIRROR_ADDRESSMODE = 2, GG.UseSerializedUrlIfAny = !1, GG
      })(),
      EG = !1;

    function oG() {
      EG || (EG = !0, (0, UG.i)("BABYLON.Texture", zG), rG.b._TextureParser = zG.Parse)
    }
  },
  40407: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG
    });
    class wG {
      constructor(GG, bG) {
        this.width = GG, this.height = bG
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let GG = 0 | this.width;
        return GG = 397 * GG ^ this.height, GG
      }
      oW(GG) {
        this.width = GG.width, this.height = GG.height
      }
      fGG(GG, bG) {
        return this.width = GG, this.height = bG, this
      }
      set(GG, bG) {
        return this.fGG(GG, bG)
      }
      multiplyByFloats(GG, bG) {
        return new wG(this.width * GG, this.height * bG)
      }
      clone() {
        return new wG(this.width, this.height)
      }
      equals(GG) {
        return !!GG && (this.width === GG.width && this.height === GG.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new wG(0, 0)
      }
      add(GG) {
        return new wG(this.width + GG.width, this.height + GG.height)
      }
      subtract(GG) {
        return new wG(this.width - GG.width, this.height - GG.height)
      }
      scale(GG) {
        return new wG(this.width * GG, this.height * GG)
      }
      static Lerp(GG, bG, ZG) {
        const SG = GG.width + (bG.width - GG.width) * ZG,
          LG = GG.height + (bG.height - GG.height) * ZG;
        return new wG(SG, LG)
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);