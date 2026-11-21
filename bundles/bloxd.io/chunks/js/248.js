export const id = 248;
export const ids = [248];
export const modules = {
  40419: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd
    });
    let pd = !1
  },
  39957: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Ld
    });
    var pd = kd(39964),
      Nd = kd(39966),
      Wd = kd(37280),
      Pd = kd(37251),
      Zd = kd(37277),
      gd = kd(38105),
      Cd = kd(39981);
    class Kd {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(dd) {
        this._wrapU = dd
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(dd) {
        this._wrapV = dd
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(dd) {
        this._texture && (this._texture.isCube = dd)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(dd) {
        this._texture && (this._texture.is3D = dd)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(dd) {
        this._texture && (this._texture.is2DArray = dd)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(dd) {
        return void 0 !== dd?.shareDepth
      }
      constructor(dd) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = Cd.c.Zero(), this._cachedBaseSize = Cd.c.Zero(), this._initialSamplingMode = 2, this._texture = Kd._IsRenderTargetWrapper(dd) ? dd.texture : dd, this._texture && (this._engine = this._texture.eL(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(dd, this._texture, this._texture.generateMipMaps && Jd)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var od, ld = kd(39983),
      Qd = kd(39860);
    let Ld = (() => {
      var dd;
      let Jd, kd, Cd, od, Qd, Ld, Od, ed, Rd, Id, Gd, vd, xd, qd, Bd, sd, ad, Md, Fd, Yd, md, bd, Sd, jd, Xd, fd = Kd,
        nd = [],
        Ud = [],
        yd = [],
        Dd = [],
        Td = [],
        Ed = [],
        cd = [],
        hd = [],
        rd = [],
        ud = [],
        td = [],
        Vd = [],
        zd = [],
        Hd = [],
        wd = [],
        Ad = [],
        dJ = [],
        JJ = [],
        kJ = [],
        pJ = [],
        NJ = [],
        WJ = [],
        PJ = [],
        ZJ = [],
        gJ = [],
        CJ = [],
        KJ = [],
        oJ = [],
        lJ = [],
        QJ = [],
        LJ = [];
      return dd = class extends fd {
        set hasAlpha(dd) {
          this._hasAlpha = dd
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(dd) {
          this._getAlphaFromRGB !== dd && (this._getAlphaFromRGB = dd, this._scene && this._scene.markAllMaterialsAsDirty(1, (dd => dd.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(dd) {
          this._coordinatesIndex !== dd && (this._coordinatesIndex = dd, this._scene && this._scene.markAllMaterialsAsDirty(1, (dd => dd.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(dd) {
          this._coordinatesMode !== dd && (this._coordinatesMode = dd, this._scene && this._scene.markAllMaterialsAsDirty(1, (dd => dd.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(dd) {
          this._wrapU = dd
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(dd) {
          this._wrapV = dd
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(dd) {
          this._texture ? this._texture.isCube = dd : this._isCube = dd
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(dd) {
          this._texture && (this._texture.is3D = dd)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(dd) {
          this._texture && (this._texture.is2DArray = dd)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(dd) {
          if (this._texture) {
            if (this._texture._gammaSpace === dd) return;
            this._texture._gammaSpace = dd
          } else {
            if (this._gammaSpace === dd) return;
            this._gammaSpace = dd
          }
          this.Wm()?.markAllMaterialsAsDirty(1, (dd => dd.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(dd) {
          dd !== this.isRGBD && (this._texture && (this._texture._isRGBD = dd), this.Wm()?.markAllMaterialsAsDirty(1, (dd => dd.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(dd) {
          this._texture && (this._texture._lodGenerationOffset = dd)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(dd) {
          this._texture && (this._texture._lodGenerationScale = dd)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(dd) {
          this._texture && (this._texture._linearSpecularLOD = dd)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(dd) {
          this._texture && (this._texture._irradianceTexture = dd)
        }
        get uid() {
          return this._uid || (this._uid = (0, gd.c)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(dd) {
          this._onDisposeObserver && this.Zm.remove(this._onDisposeObserver), this._onDisposeObserver = this.Zm.add(dd)
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
        constructor(Jd) {
          let kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, pd.i)(this, nd), (0, pd.i)(this, Ud, void 0)), this.name = ((0, pd.i)(this, yd), (0, pd.i)(this, Dd, void 0)), this.displayName = ((0, pd.i)(this, Td), (0, pd.i)(this, Ed, void 0)), this.metadata = ((0, pd.i)(this, cd), (0, pd.i)(this, hd, null)), this._internalMetadata = (0, pd.i)(this, rd), this.reservedDataStore = null, this._hasAlpha = (0, pd.i)(this, ud, !1), this._getAlphaFromRGB = ((0, pd.i)(this, td), (0, pd.i)(this, Vd, !1)), this.level = ((0, pd.i)(this, zd), (0, pd.i)(this, Hd, 1)), this._coordinatesIndex = ((0, pd.i)(this, wd), (0, pd.i)(this, Ad, 0)), this.optimizeUVAllocation = ((0, pd.i)(this, dJ), (0, pd.i)(this, JJ, !0)), this._coordinatesMode = ((0, pd.i)(this, kJ), (0, pd.i)(this, pJ, 0)), this.wrapR = ((0, pd.i)(this, NJ), (0, pd.i)(this, WJ, 1)), this.anisotropicFilteringLevel = ((0, pd.i)(this, PJ), (0, pd.i)(this, ZJ, dd.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, pd.i)(this, gJ), !1), this._gammaSpace = !0, this.invertZ = (0, pd.i)(this, CJ, !1), this.lodLevelInAlpha = ((0, pd.i)(this, KJ), (0, pd.i)(this, oJ, !1)), this._dominantDirection = ((0, pd.i)(this, lJ), null), this.isRenderTarget = (0, pd.i)(this, QJ, !1), this._prefiltered = ((0, pd.i)(this, LJ), !1), this._forceSerialize = !1, this.animations = [], this.Zm = new Wd.e, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, Jd ? dd._IsScene(Jd) ? this._scene = Jd : this._engine = Jd : this._scene = Zd.d.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.eL()), this._texture = kd, this._uid = null
        }
        Wm() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return Pd.b.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return Pd.b.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(dd) {}
        get canRescale() {
          return !1
        }
        _getFromCache(dd, Jd, kd, pd, Nd, Wd) {
          const Pd = this._getEngine();
          if (!Pd) return null;
          const Zd = Pd._getUseSRGBBuffer(!!Nd, Jd),
            gd = Pd.getLoadedTexturesCache();
          for (let Cd = 0; Cd < gd.length; Cd++) {
            const Pd = gd[Cd];
            if ((void 0 === Nd || Zd === Pd._useSRGBBuffer) && (void 0 === pd || pd === Pd.invertY) && Pd.url === dd && Pd.generateMipMaps === !Jd && (!kd || kd === Pd.samplingMode) && (void 0 === Wd || Wd === Pd.isCube)) return Pd.incrementReferences(), Pd
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
          const dd = this.Wm();
          dd && dd.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            pd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Nd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            Pd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            Zd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            gd = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const Cd = this._getEngine();
          if (!Cd) return null;
          const Kd = this.getSize();
          let od = Kd.width,
            ld = Kd.height;
          0 !== Jd && (od /= Math.pow(2, Jd), ld /= Math.pow(2, Jd), od = Math.round(od), ld = Math.round(ld)), Zd = Math.min(od, Zd), gd = Math.min(ld, gd);
          try {
            return this._texture.isCube || this._texture.is2DArray ? Cd._readTexturePixels(this._texture, Zd, gd, dd, Jd, kd, pd, Nd, Wd, Pd) : Cd._readTexturePixels(this._texture, Zd, gd, -1, Jd, kd, pd, Nd, Wd, Pd)
          } catch (Qd) {
            return null
          }
        }
        _readPixelsSync() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            pd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Nd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const Wd = this.getSize();
          let Pd = Wd.width,
            Zd = Wd.height;
          const gd = this._getEngine();
          if (!gd) return null;
          0 != Jd && (Pd /= Math.pow(2, Jd), Zd /= Math.pow(2, Jd), Pd = Math.round(Pd), Zd = Math.round(Zd));
          try {
            return this._texture.isCube ? gd._readTexturePixelsSync(this._texture, Pd, Zd, dd, Jd, kd, pd, Nd) : gd._readTexturePixelsSync(this._texture, Pd, Zd, -1, Jd, kd, pd, Nd)
          } catch (Cd) {
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
            const dd = this._scene.textures.indexOf(this);
            if (dd >= 0 && this._scene.textures.splice(dd, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const dd = this._parentContainer.textures.indexOf(this);
              dd > -1 && this._parentContainer.textures.splice(dd, 1), this._parentContainer = null
            }
          }
          this.Zm.notifyObservers(this), this.Zm.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !dd) return null;
          const Jd = ld.c.Serialize(this);
          return ld.c.AppendSerializedAnimations(this, Jd), Jd
        }
        static WhenAllReady(dd, Jd) {
          let kd = dd.length;
          if (0 !== kd)
            for (let pd = 0; pd < dd.length; pd++) {
              const Nd = dd[pd];
              if (Nd.isReady()) 0 === --kd && Jd();
              else {
                const dd = Nd.onLoadObservable;
                dd ? dd.addOnce((() => {
                  0 === --kd && Jd()
                })) : 0 === --kd && Jd()
              }
            } else Jd()
        }
        static _IsScene(dd) {
          return "Scene" === dd.getClassName()
        }
      }, (() => {
        const Wd = "function" === typeof Symbol && Symbol.metadata ? Object.create(fd[Symbol.metadata] ?? null) : void 0;
        Jd = [(0, Nd.H)()], kd = [(0, Nd.H)()], Cd = [(0, Nd.H)()], od = [(0, Nd.H)()], Qd = [(0, Nd.H)("hasAlpha")], Ld = [(0, Nd.H)("getAlphaFromRGB")], Od = [(0, Nd.H)()], ed = [(0, Nd.H)("coordinatesIndex")], Rd = [(0, Nd.H)()], Id = [(0, Nd.H)("coordinatesMode")], Gd = [(0, Nd.H)()], vd = [(0, Nd.H)()], xd = [(0, Nd.H)()], qd = [(0, Nd.H)()], Bd = [(0, Nd.H)()], sd = [(0, Nd.H)()], ad = [(0, Nd.H)()], Md = [(0, Nd.H)()], Fd = [(0, Nd.H)()], Yd = [(0, Nd.H)()], md = [(0, Nd.H)()], bd = [(0, Nd.H)()], Sd = [(0, Nd.H)()], jd = [(0, Nd.y)()], Xd = [(0, Nd.H)()], (0, pd.h)(dd, null, Gd, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: dd => "wrapU" in dd,
            get: dd => dd.wrapU
          },
          metadata: Wd
        }, null, nd), (0, pd.h)(dd, null, vd, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: dd => "wrapV" in dd,
            get: dd => dd.wrapV
          },
          metadata: Wd
        }, null, nd), (0, pd.h)(dd, null, Bd, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: dd => "isCube" in dd,
            get: dd => dd.isCube
          },
          metadata: Wd
        }, null, nd), (0, pd.h)(dd, null, sd, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: dd => "is3D" in dd,
            get: dd => dd.is3D
          },
          metadata: Wd
        }, null, nd), (0, pd.h)(dd, null, ad, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: dd => "is2DArray" in dd,
            get: dd => dd.is2DArray
          },
          metadata: Wd
        }, null, nd), (0, pd.h)(dd, null, Md, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: dd => "gammaSpace" in dd,
            get: dd => dd.gammaSpace
          },
          metadata: Wd
        }, null, nd), (0, pd.h)(dd, null, md, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: dd => "lodGenerationOffset" in dd,
            get: dd => dd.lodGenerationOffset
          },
          metadata: Wd
        }, null, nd), (0, pd.h)(dd, null, bd, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: dd => "lodGenerationScale" in dd,
            get: dd => dd.lodGenerationScale
          },
          metadata: Wd
        }, null, nd), (0, pd.h)(dd, null, Sd, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: dd => "linearSpecularLOD" in dd,
            get: dd => dd.linearSpecularLOD
          },
          metadata: Wd
        }, null, nd), (0, pd.h)(dd, null, jd, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "irradianceTexture" in dd,
            get: dd => dd.irradianceTexture
          },
          metadata: Wd
        }, null, nd), (0, pd.h)(null, null, Jd, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: dd => "uniqueId" in dd,
            get: dd => dd.uniqueId,
            set: (dd, Jd) => {
              dd.uniqueId = Jd
            }
          },
          metadata: Wd
        }, Ud, yd), (0, pd.h)(null, null, kd, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: dd => "name" in dd,
            get: dd => dd.name,
            set: (dd, Jd) => {
              dd.name = Jd
            }
          },
          metadata: Wd
        }, Dd, Td), (0, pd.h)(null, null, Cd, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: dd => "displayName" in dd,
            get: dd => dd.displayName,
            set: (dd, Jd) => {
              dd.displayName = Jd
            }
          },
          metadata: Wd
        }, Ed, cd), (0, pd.h)(null, null, od, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: dd => "metadata" in dd,
            get: dd => dd.metadata,
            set: (dd, Jd) => {
              dd.metadata = Jd
            }
          },
          metadata: Wd
        }, hd, rd), (0, pd.h)(null, null, Qd, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: dd => "_hasAlpha" in dd,
            get: dd => dd._hasAlpha,
            set: (dd, Jd) => {
              dd._hasAlpha = Jd
            }
          },
          metadata: Wd
        }, ud, td), (0, pd.h)(null, null, Ld, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: dd => "_getAlphaFromRGB" in dd,
            get: dd => dd._getAlphaFromRGB,
            set: (dd, Jd) => {
              dd._getAlphaFromRGB = Jd
            }
          },
          metadata: Wd
        }, Vd, zd), (0, pd.h)(null, null, Od, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: dd => "level" in dd,
            get: dd => dd.level,
            set: (dd, Jd) => {
              dd.level = Jd
            }
          },
          metadata: Wd
        }, Hd, wd), (0, pd.h)(null, null, ed, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: dd => "_coordinatesIndex" in dd,
            get: dd => dd._coordinatesIndex,
            set: (dd, Jd) => {
              dd._coordinatesIndex = Jd
            }
          },
          metadata: Wd
        }, Ad, dJ), (0, pd.h)(null, null, Rd, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: dd => "optimizeUVAllocation" in dd,
            get: dd => dd.optimizeUVAllocation,
            set: (dd, Jd) => {
              dd.optimizeUVAllocation = Jd
            }
          },
          metadata: Wd
        }, JJ, kJ), (0, pd.h)(null, null, Id, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: dd => "_coordinatesMode" in dd,
            get: dd => dd._coordinatesMode,
            set: (dd, Jd) => {
              dd._coordinatesMode = Jd
            }
          },
          metadata: Wd
        }, pJ, NJ), (0, pd.h)(null, null, xd, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: dd => "wrapR" in dd,
            get: dd => dd.wrapR,
            set: (dd, Jd) => {
              dd.wrapR = Jd
            }
          },
          metadata: Wd
        }, WJ, PJ), (0, pd.h)(null, null, qd, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: dd => "anisotropicFilteringLevel" in dd,
            get: dd => dd.anisotropicFilteringLevel,
            set: (dd, Jd) => {
              dd.anisotropicFilteringLevel = Jd
            }
          },
          metadata: Wd
        }, ZJ, gJ), (0, pd.h)(null, null, Fd, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: dd => "invertZ" in dd,
            get: dd => dd.invertZ,
            set: (dd, Jd) => {
              dd.invertZ = Jd
            }
          },
          metadata: Wd
        }, CJ, KJ), (0, pd.h)(null, null, Yd, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: dd => "lodLevelInAlpha" in dd,
            get: dd => dd.lodLevelInAlpha,
            set: (dd, Jd) => {
              dd.lodLevelInAlpha = Jd
            }
          },
          metadata: Wd
        }, oJ, lJ), (0, pd.h)(null, null, Xd, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: dd => "isRenderTarget" in dd,
            get: dd => dd.isRenderTarget,
            set: (dd, Jd) => {
              dd.isRenderTarget = Jd
            }
          },
          metadata: Wd
        }, QJ, LJ), Wd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Wd
        })
      })(), dd.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, dd
    })();
    (od = Ld.prototype).forceSphericalPolynomialsRecompute ?? (od.forceSphericalPolynomialsRecompute = (0, Qd.j)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(Ld.prototype, "sphericalPolynomial") || Object.defineProperty(Ld.prototype, "sphericalPolynomial", (0, Qd.g)("BaseTexture", "sphericalPolynomial"))
  },
  40471: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => xd,
      c: () => Gd
    });
    var pd = kd(39964),
      Nd = kd(39966),
      Wd = kd(37280),
      Pd = kd(37251),
      Zd = kd(39957),
      gd = kd(37303),
      Cd = kd(39860),
      Kd = kd(39866),
      od = kd(40072),
      ld = kd(37969),
      Qd = kd(40023);

    function Ld(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const pd = Jd.width,
        Nd = Jd.height;
      if (dd instanceof Float32Array) {
        let Jd = dd.byteLength / dd.BYTES_PER_ELEMENT;
        const kd = new Uint8Array(Jd);
        for (; --Jd >= 0;) {
          let pd = dd[Jd];
          pd < 0 ? pd = 0 : pd > 1 && (pd = 1), kd[Jd] = 255 * pd
        }
        dd = kd
      }
      const Wd = document.createElement("canvas");
      Wd.width = pd, Wd.height = Nd;
      const Pd = Wd.getContext("2d");
      if (!Pd) return null;
      const Zd = Pd.createImageData(pd, Nd);
      if (Zd.data.set(dd), Pd.putImageData(Zd, 0, 0), kd) {
        const dd = document.createElement("canvas");
        dd.width = pd, dd.height = Nd;
        const Jd = dd.getContext("2d");
        return Jd ? (Jd.translate(0, Nd), Jd.scale(1, -1), Jd.drawImage(Wd, 0, 0), dd.toDataURL("image/png")) : null
      }
      return Wd.toDataURL("image/png")
    }

    function Od(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const pd = dd.getInternalTexture();
      if (!pd) return null;
      const Nd = dd._readPixelsSync(Jd, kd);
      return Nd ? Ld(Nd, dd.getSize(), pd.invertY) : null
    }
    async function ed(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const pd = dd.getInternalTexture();
      if (!pd) return null;
      const Nd = await dd.readPixels(Jd, kd);
      return Nd ? Ld(Nd, dd.getSize(), pd.invertY) : null
    }
    var Rd = kd(40419),
      Id = kd(39983);
    let Gd = (() => {
        var dd;
        let Jd, kd, Ld, Gd, vd, xd, qd, Bd, sd, ad, Md, Fd, Yd, md = Zd.b,
          bd = [],
          Sd = [],
          jd = [],
          Xd = [],
          fd = [],
          nd = [],
          Ud = [],
          yd = [],
          Dd = [],
          Td = [],
          Ed = [],
          cd = [],
          hd = [],
          rd = [],
          ud = [],
          td = [],
          Vd = [],
          zd = [],
          Hd = [],
          wd = [],
          Ad = [],
          dJ = [],
          JJ = [],
          kJ = [],
          pJ = [];
        return dd = class extends md {
          static _CreateVideoTexture(Jd, kd, pd) {
            arguments.length > 5 && void 0 !== arguments[5] || dd.TRILINEAR_SAMPLINGMODE;
            throw (0, Cd.n)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(dd) {
            this._isBlocking = dd
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(Jd, kd, Nd, Pd) {
            let Zd, gd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : dd.TRILINEAR_SAMPLINGMODE,
              Cd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              od = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              ld = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Qd = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              Ld = arguments.length > 9 ? arguments[9] : void 0,
              Od = arguments.length > 10 ? arguments[10] : void 0,
              ed = arguments.length > 11 ? arguments[11] : void 0,
              Id = arguments.length > 12 ? arguments[12] : void 0,
              Gd = arguments.length > 13 ? arguments[13] : void 0;
            super(kd), this.url = ((0, pd.i)(this, bd), (0, pd.i)(this, Sd, null)), this.uOffset = ((0, pd.i)(this, jd), (0, pd.i)(this, Xd, 0)), this.vOffset = ((0, pd.i)(this, fd), (0, pd.i)(this, nd, 0)), this.uScale = ((0, pd.i)(this, Ud), (0, pd.i)(this, yd, 1)), this.vScale = ((0, pd.i)(this, Dd), (0, pd.i)(this, Td, 1)), this.uAng = ((0, pd.i)(this, Ed), (0, pd.i)(this, cd, 0)), this.vAng = ((0, pd.i)(this, hd), (0, pd.i)(this, rd, 0)), this.wAng = ((0, pd.i)(this, ud), (0, pd.i)(this, td, 0)), this.uRotationCenter = ((0, pd.i)(this, Vd), (0, pd.i)(this, zd, .5)), this.vRotationCenter = ((0, pd.i)(this, Hd), (0, pd.i)(this, wd, .5)), this.wRotationCenter = ((0, pd.i)(this, Ad), (0, pd.i)(this, dJ, .5)), this.homogeneousRotationInUVTransform = ((0, pd.i)(this, JJ), (0, pd.i)(this, kJ, !1)), this.inspectableCustomProperties = ((0, pd.i)(this, pJ), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new Wd.e, this._isBlocking = !0, this.name = Jd || "", this.url = Jd;
            let vd = !1,
              xd = null,
              qd = !0;
            "object" === typeof Nd && null !== Nd ? (Zd = Nd.noMipmap ?? !1, Pd = Nd.invertY ?? !Rd.d, gd = Nd.samplingMode ?? dd.TRILINEAR_SAMPLINGMODE, Cd = Nd.onLoad ?? null, od = Nd.onError ?? null, ld = Nd.buffer ?? null, Qd = Nd.deleteBuffer ?? !1, Ld = Nd.format, Od = Nd.mimeType, ed = Nd.loaderOptions, Id = Nd.creationFlags, vd = Nd.useSRGBBuffer ?? !1, xd = Nd.internalTexture ?? null, qd = Nd.gammaSpace ?? qd, Gd = Nd.forcedExtension ?? Gd) : Zd = !!Nd, this._gammaSpace = qd, this._noMipmap = Zd, this._invertY = void 0 === Pd ? !Rd.d : Pd, this._initialSamplingMode = gd, this._buffer = ld, this._deleteBuffer = Qd, this._mimeType = Od, this._loaderOptions = ed, this._creationFlags = Id, this._useSRGBBuffer = vd, this._forcedExtension = Gd, void 0 !== Ld && (this._format = Ld);
            const Bd = this.Wm(),
              sd = this._getEngine();
            if (!sd) return;
            sd.onBeforeTextureInitObservable.notifyObservers(this);
            const ad = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), Cd && Cd(), !this.isBlocking && Bd && Bd.resetCachedMaterial()
              },
              Md = (Jd, kd) => {
                this._loadingError = !0, this._errorObject = {
                  message: Jd,
                  exception: kd
                }, od && od(Jd, kd), dd.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !xd) return this._delayedOnLoad = ad, void(this._delayedOnError = Md);
            if (this._texture = xd ?? this._getFromCache(this.url, Zd, gd, this._invertY, vd, this.isCube), this._texture)
              if (this._texture.isReady) Kd.d.SetImmediate((() => ad()));
              else {
                const dd = this._texture.onLoadedObservable.add(ad);
                this._texture.onErrorObservable.add((Jd => {
                  Md(Jd.message, Jd.exception), this._texture?.onLoadedObservable.remove(dd)
                }))
              }
            else if (Bd && Bd.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = ad, this._delayedOnError = Md;
            else {
              try {
                this._texture = sd.createTexture(this.url, Zd, this._invertY, Bd, gd, ad, Md, this._buffer, void 0, this._format, this._forcedExtension, Od, ed, Id, vd)
              } catch (Fd) {
                throw Md("error loading", Fd), Fd
              }
              Qd && (this._buffer = null)
            }
          }
          updateURL(dd) {
            let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              kd = arguments.length > 2 ? arguments[2] : void 0,
              pd = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.Wm().markAllMaterialsAsDirty(1, (dd => dd.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = dd), this.url = dd, this._buffer = Jd, this._forcedExtension = pd, this.delayLoadState = 4;
            const Nd = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              Nd ? Nd() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), kd && kd()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const dd = this.Wm();
            if (!dd) return;
            let Jd = this.url;
            !Jd && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (Jd = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(Jd, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? Kd.d.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = dd.eL().createTexture(Jd, this._noMipmap, this._invertY, dd, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(dd, Jd, kd, pd) {
            dd *= this._cachedUScale, Jd *= this._cachedVScale, dd -= this.uRotationCenter * this._cachedUScale, Jd -= this.vRotationCenter * this._cachedVScale, kd -= this.wRotationCenter, Pd.n.TransformCoordinatesFromFloatsToRef(dd, Jd, kd, this._rowGenerationMatrix, pd), pd.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, pd.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, pd.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * dd === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * dd, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = Pd.b.Zero(), this._rowGenerationMatrix = new Pd.b, this._t0 = Pd.n.Zero(), this._t1 = Pd.n.Zero(), this._t2 = Pd.n.Zero()), Pd.b.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (Pd.b.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, Pd.h.Matrix[0]), Pd.b.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, Pd.h.Matrix[1]), Pd.b.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, Pd.h.Matrix[2]), Pd.b.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, Pd.h.Matrix[3]), Pd.h.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Pd.h.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Pd.h.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Pd.h.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.hpd(this._t0), this._t2.hpd(this._t0), Pd.b.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const Jd = this.Wm();
            if (!Jd) return this._cachedTextureMatrix;
            const kd = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && kd !== this._cachedIdentity3x2 && Jd.markAllMaterialsAsDirty(1, (dd => dd.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const Jd = this.Wm();
            if (!Jd) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== dd.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === Jd.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = Pd.b.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = Pd.b.Zero());
            const kd = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case dd.PLANAR_MODE:
                Pd.b.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case dd.PROJECTION_MODE: {
                Pd.b.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const dd = Jd.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = dd.updateFlag, dd.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                Pd.b.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return kd && Jd.markAllMaterialsAsDirty(1, (dd => dd.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const Jd = {
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
            return Id.c.Clone((() => new dd(this._texture ? this._texture.url : null, this.Wm(), Jd)), this)
          }
          serialize() {
            const Jd = this.name;
            dd.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const kd = super.serialize(dd._SerializeInternalTextureUniqueId);
            if (!kd) return null;
            if (dd.SerializeBuffers || dd.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) kd.base64String = this._buffer, kd.name = kd.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const dd = this.mimeType || "image/png";
              kd.base64String = `data:${dd};base64,${(0,Qd.j)(this._buffer)}`
            } else(dd.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (kd.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? Od(this) : ed(this));
            return kd.invertY = this._invertY, kd.samplingMode = this.samplingMode, kd._creationFlags = this._creationFlags, kd._useSRGBBuffer = this._useSRGBBuffer, dd._SerializeInternalTextureUniqueId && (kd.internalTextureUniqueId = this._texture?.uniqueId), kd.internalTextureLabel = this._texture?.label, kd.noMipmap = this._noMipmap, this.name = Jd, kd
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(Jd, kd, pd) {
            if (Jd.customType) {
              const dd = od.e.Instantiate(Jd.customType).Parse(Jd, kd, pd);
              return Jd.samplingMode && dd.updateSamplingMode && dd._samplingMode && dd._samplingMode !== Jd.samplingMode && dd.updateSamplingMode(Jd.samplingMode), dd
            }
            if (Jd.isCube && !Jd.isRenderTarget) return dd._CubeTextureParser(Jd, kd, pd);
            const Nd = void 0 !== Jd.internalTextureUniqueId;
            if (!Jd.name && !Jd.isRenderTarget && !Nd) return null;
            let Wd;
            if (Nd) {
              const dd = kd.eL().getLoadedTexturesCache();
              for (const kd of dd)
                if (kd.uniqueId === Jd.internalTextureUniqueId) {
                  Wd = kd;
                  break
                }
            }
            const Pd = dd => {
              if (dd && dd._texture && (dd._texture._cachedWrapU = null, dd._texture._cachedWrapV = null, dd._texture._cachedWrapR = null), Jd.samplingMode) {
                const kd = Jd.samplingMode;
                dd && dd.samplingMode !== kd && dd.updateSamplingMode(kd)
              }
              if (dd && Jd.animations)
                for (let kd = 0; kd < Jd.animations.length; kd++) {
                  const pd = Jd.animations[kd],
                    Nd = (0, gd.e)("BABYLON.Animation");
                  Nd && dd.animations.push(Nd.Parse(pd))
                }
              dd && dd._texture && (Nd && !Wd && dd._texture._setUniqueId(Jd.internalTextureUniqueId), dd._texture.label = Jd.internalTextureLabel)
            };
            return Id.c.Parse((() => {
              let Nd = !0;
              if (Jd.noMipmap && (Nd = !1), Jd.mirrorPlane) {
                const pd = dd._CreateMirror(Jd.name, Jd.renderTargetSize, kd, Nd);
                return pd._waitingRenderList = Jd.renderList, pd.mirrorPlane = ld.c.FromArray(Jd.mirrorPlane), Pd(pd), pd
              }
              if (Jd.isRenderTarget && !Jd.base64String) {
                let pd = null;
                if (Jd.isCube) {
                  if (kd.reflectionProbes)
                    for (let dd = 0; dd < kd.reflectionProbes.length; dd++) {
                      const pd = kd.reflectionProbes[dd];
                      if (pd.name === Jd.name) return pd.cubeTexture
                    }
                } else pd = dd._CreateRenderTargetTexture(Jd.name, Jd.renderTargetSize, kd, Nd, Jd._creationFlags ?? 0), pd._waitingRenderList = Jd.renderList;
                return Pd(pd), pd
              }
              if (Jd.isVideo) {
                const Wd = dd._CreateVideoTexture(pd + (Jd.url || Jd.name), pd + (Jd.src || Jd.url), kd, Nd, Jd.invertY, Jd.samplingMode, Jd.settings || {});
                return Pd(Wd), Wd
              } {
                let Zd;
                if ("string" === typeof Jd.base64String && Jd.base64String && !Wd) {
                  const pd = {
                      buffer: Jd.base64String,
                      noMipmap: !Nd,
                      invertY: Jd.invertY,
                      samplingMode: Jd.samplingMode,
                      useSRGBBuffer: Jd._useSRGBBuffer ?? !1,
                      creationFlags: Jd._creationFlags ?? 0,
                      onLoad: () => {
                        Pd(Zd)
                      }
                    },
                    Wd = Jd.base64String,
                    gd = Wd.startsWith("data:") ? Wd.substring(5) : Wd;
                  Zd = dd.CreateFromBase64String("", gd, kd, pd), Zd.name = Jd.name
                } else {
                  let gd;
                  gd = Jd.name && (Jd.name.indexOf("://") > 0 || Jd.name.startsWith("data:")) ? Jd.name : pd + Jd.name, Jd.url && (Jd.url.startsWith("data:") || dd.UseSerializedUrlIfAny) && (gd = Jd.url);
                  const Cd = {
                    noMipmap: !Nd,
                    invertY: Jd.invertY,
                    samplingMode: Jd.samplingMode,
                    useSRGBBuffer: Jd._useSRGBBuffer ?? !1,
                    creationFlags: Jd._creationFlags ?? 0,
                    onLoad: () => {
                      Pd(Zd)
                    },
                    internalTexture: Wd
                  };
                  Zd = new dd(gd, kd, Cd)
                }
                return Zd
              }
            }), Jd, kd)
          }
          static CreateFromBase64String(Jd, kd, pd, Nd, Wd) {
            let Pd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : dd.TRILINEAR_SAMPLINGMODE;
            return new dd("data:" + kd, pd, Nd, Wd, Pd, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, Jd, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(Jd, kd, pd) {
            let Nd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Wd = arguments.length > 4 ? arguments[4] : void 0,
              Pd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              Zd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : dd.TRILINEAR_SAMPLINGMODE,
              gd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Cd = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              Kd = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              od = arguments.length > 10 ? arguments[10] : void 0,
              ld = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== Jd.substring(0, 5) && (Jd = "data:" + Jd), new dd(Jd, pd, Wd, Pd, Zd, gd, Cd, kd, Nd, Kd, void 0, void 0, od, ld)
          }
        }, (() => {
          const Wd = "function" === typeof Symbol && Symbol.metadata ? Object.create(md[Symbol.metadata] ?? null) : void 0;
          Jd = [(0, Nd.H)()], kd = [(0, Nd.H)()], Ld = [(0, Nd.H)()], Gd = [(0, Nd.H)()], vd = [(0, Nd.H)()], xd = [(0, Nd.H)()], qd = [(0, Nd.H)()], Bd = [(0, Nd.H)()], sd = [(0, Nd.H)()], ad = [(0, Nd.H)()], Md = [(0, Nd.H)()], Fd = [(0, Nd.H)()], Yd = [(0, Nd.H)()], (0, pd.h)(dd, null, Yd, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: dd => "isBlocking" in dd,
              get: dd => dd.isBlocking
            },
            metadata: Wd
          }, null, bd), (0, pd.h)(null, null, Jd, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: dd => "url" in dd,
              get: dd => dd.url,
              set: (dd, Jd) => {
                dd.url = Jd
              }
            },
            metadata: Wd
          }, Sd, jd), (0, pd.h)(null, null, kd, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: dd => "uOffset" in dd,
              get: dd => dd.uOffset,
              set: (dd, Jd) => {
                dd.uOffset = Jd
              }
            },
            metadata: Wd
          }, Xd, fd), (0, pd.h)(null, null, Ld, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: dd => "vOffset" in dd,
              get: dd => dd.vOffset,
              set: (dd, Jd) => {
                dd.vOffset = Jd
              }
            },
            metadata: Wd
          }, nd, Ud), (0, pd.h)(null, null, Gd, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: dd => "uScale" in dd,
              get: dd => dd.uScale,
              set: (dd, Jd) => {
                dd.uScale = Jd
              }
            },
            metadata: Wd
          }, yd, Dd), (0, pd.h)(null, null, vd, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: dd => "vScale" in dd,
              get: dd => dd.vScale,
              set: (dd, Jd) => {
                dd.vScale = Jd
              }
            },
            metadata: Wd
          }, Td, Ed), (0, pd.h)(null, null, xd, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: dd => "uAng" in dd,
              get: dd => dd.uAng,
              set: (dd, Jd) => {
                dd.uAng = Jd
              }
            },
            metadata: Wd
          }, cd, hd), (0, pd.h)(null, null, qd, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: dd => "vAng" in dd,
              get: dd => dd.vAng,
              set: (dd, Jd) => {
                dd.vAng = Jd
              }
            },
            metadata: Wd
          }, rd, ud), (0, pd.h)(null, null, Bd, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: dd => "wAng" in dd,
              get: dd => dd.wAng,
              set: (dd, Jd) => {
                dd.wAng = Jd
              }
            },
            metadata: Wd
          }, td, Vd), (0, pd.h)(null, null, sd, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: dd => "uRotationCenter" in dd,
              get: dd => dd.uRotationCenter,
              set: (dd, Jd) => {
                dd.uRotationCenter = Jd
              }
            },
            metadata: Wd
          }, zd, Hd), (0, pd.h)(null, null, ad, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: dd => "vRotationCenter" in dd,
              get: dd => dd.vRotationCenter,
              set: (dd, Jd) => {
                dd.vRotationCenter = Jd
              }
            },
            metadata: Wd
          }, wd, Ad), (0, pd.h)(null, null, Md, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: dd => "wRotationCenter" in dd,
              get: dd => dd.wRotationCenter,
              set: (dd, Jd) => {
                dd.wRotationCenter = Jd
              }
            },
            metadata: Wd
          }, dJ, JJ), (0, pd.h)(null, null, Fd, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: dd => "homogeneousRotationInUVTransform" in dd,
              get: dd => dd.homogeneousRotationInUVTransform,
              set: (dd, Jd) => {
                dd.homogeneousRotationInUVTransform = Jd
              }
            },
            metadata: Wd
          }, kJ, pJ), Wd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wd
          })
        })(), dd.SerializeBuffers = !0, dd.ForceSerializeBuffers = !1, dd.OnTextureLoadErrorObservable = new Wd.e, dd._SerializeInternalTextureUniqueId = !1, dd._CubeTextureParser = (dd, Jd, kd) => {
          throw (0, Cd.n)("CubeTexture")
        }, dd._CreateMirror = (dd, Jd, kd, pd) => {
          throw (0, Cd.n)("MirrorTexture")
        }, dd._CreateRenderTargetTexture = (dd, Jd, kd, pd, Nd) => {
          throw (0, Cd.n)("RenderTargetTexture")
        }, dd.NEAREST_SAMPLINGMODE = 1, dd.NEAREST_NEAREST_MIPLINEAR = 8, dd.BILINEAR_SAMPLINGMODE = 2, dd.LINEAR_LINEAR_MIPNEAREST = 11, dd.TRILINEAR_SAMPLINGMODE = 3, dd.LINEAR_LINEAR_MIPLINEAR = 3, dd.NEAREST_NEAREST_MIPNEAREST = 4, dd.NEAREST_LINEAR_MIPNEAREST = 5, dd.NEAREST_LINEAR_MIPLINEAR = 6, dd.NEAREST_LINEAR = 7, dd.NEAREST_NEAREST = 1, dd.LINEAR_NEAREST_MIPNEAREST = 9, dd.LINEAR_NEAREST_MIPLINEAR = 10, dd.LINEAR_LINEAR = 2, dd.LINEAR_NEAREST = 12, dd.EXPLICIT_MODE = 0, dd.SPHERICAL_MODE = 1, dd.PLANAR_MODE = 2, dd.CUBIC_MODE = 3, dd.PROJECTION_MODE = 4, dd.SKYBOX_MODE = 5, dd.INVCUBIC_MODE = 6, dd.EQUIRECTANGULAR_MODE = 7, dd.FIXED_EQUIRECTANGULAR_MODE = 8, dd.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, dd.CLAMP_ADDRESSMODE = 0, dd.WRAP_ADDRESSMODE = 1, dd.MIRROR_ADDRESSMODE = 2, dd.UseSerializedUrlIfAny = !1, dd
      })(),
      vd = !1;

    function xd() {
      vd || (vd = !0, (0, gd.h)("BABYLON.Texture", Gd), Id.c._TextureParser = Gd.Parse)
    }
  },
  39981: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd
    });
    class pd {
      constructor(dd, Jd) {
        this.width = dd, this.height = Jd
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let dd = 0 | this.width;
        return dd = 397 * dd ^ this.height, dd
      }
      Fs(dd) {
        this.width = dd.width, this.height = dd.height
      }
      kdd(dd, Jd) {
        return this.width = dd, this.height = Jd, this
      }
      set(dd, Jd) {
        return this.kdd(dd, Jd)
      }
      multiplyByFloats(dd, Jd) {
        return new pd(this.width * dd, this.height * Jd)
      }
      clone() {
        return new pd(this.width, this.height)
      }
      equals(dd) {
        return !!dd && (this.width === dd.width && this.height === dd.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new pd(0, 0)
      }
      add(dd) {
        return new pd(this.width + dd.width, this.height + dd.height)
      }
      subtract(dd) {
        return new pd(this.width - dd.width, this.height - dd.height)
      }
      scale(dd) {
        return new pd(this.width * dd, this.height * dd)
      }
      static Lerp(dd, Jd, kd) {
        const Nd = dd.width + (Jd.width - dd.width) * kd,
          Wd = dd.height + (Jd.height - dd.height) * kd;
        return new pd(Nd, Wd)
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);