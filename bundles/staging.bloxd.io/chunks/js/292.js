export const id = 292;
export const ids = [292];
export const modules = {
  42358: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd
    });
    let Wd = !1
  },
  41914: (dd, Od, md) => {
    md.d(Od, {
      c: () => qd
    });
    var Wd = md(41922),
      Fd = md(41931),
      Rd = md(38660),
      Xd = md(38636),
      Kd = md(38651),
      hd = md(39461),
      vd = md(41939);
    class Qd {
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
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = vd.e.Zero(), this._cachedBaseSize = vd.e.Zero(), this._initialSamplingMode = 2, this._texture = Qd._IsRenderTargetWrapper(dd) ? dd.texture : dd, this._texture && (this._engine = this._texture.Iq(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(dd, this._texture, this._texture.generateMipMaps && Od)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var td, od = md(41948),
      Nd = md(41817);
    let qd = (() => {
      var dd;
      let Od, md, vd, td, Nd, qd, Hd, yd, bd, Td, pd, Yd, gd, wd, Ed, Jd, Ud, xd, Bd, Sd, sd, ud, Vd, Ad, rd, Gd = Qd,
        nd = [],
        Ld = [],
        Pd = [],
        zd = [],
        cd = [],
        jd = [],
        Dd = [],
        ed = [],
        Id = [],
        ld = [],
        Cd = [],
        Zd = [],
        kd = [],
        fd = [],
        Md = [],
        dO = [],
        OO = [],
        mO = [],
        WO = [],
        FO = [],
        RO = [],
        XO = [],
        KO = [],
        hO = [],
        vO = [],
        QO = [],
        tO = [],
        oO = [],
        NO = [],
        qO = [],
        HO = [];
      return dd = class extends Gd {
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
          this.zV()?.markAllMaterialsAsDirty(1, (dd => dd.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(dd) {
          dd !== this.isRGBD && (this._texture && (this._texture._isRGBD = dd), this.zV()?.markAllMaterialsAsDirty(1, (dd => dd.hasTexture(this))))
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
          return this._uid || (this._uid = (0, hd.b)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(dd) {
          this._onDisposeObserver && this.cV.remove(this._onDisposeObserver), this._onDisposeObserver = this.cV.add(dd)
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
        constructor(Od) {
          let md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, Wd.k)(this, nd), (0, Wd.k)(this, Ld, void 0)), this.name = ((0, Wd.k)(this, Pd), (0, Wd.k)(this, zd, void 0)), this.displayName = ((0, Wd.k)(this, cd), (0, Wd.k)(this, jd, void 0)), this.metadata = ((0, Wd.k)(this, Dd), (0, Wd.k)(this, ed, null)), this._internalMetadata = (0, Wd.k)(this, Id), this.reservedDataStore = null, this._hasAlpha = (0, Wd.k)(this, ld, !1), this._getAlphaFromRGB = ((0, Wd.k)(this, Cd), (0, Wd.k)(this, Zd, !1)), this.level = ((0, Wd.k)(this, kd), (0, Wd.k)(this, fd, 1)), this._coordinatesIndex = ((0, Wd.k)(this, Md), (0, Wd.k)(this, dO, 0)), this.optimizeUVAllocation = ((0, Wd.k)(this, OO), (0, Wd.k)(this, mO, !0)), this._coordinatesMode = ((0, Wd.k)(this, WO), (0, Wd.k)(this, FO, 0)), this.wrapR = ((0, Wd.k)(this, RO), (0, Wd.k)(this, XO, 1)), this.anisotropicFilteringLevel = ((0, Wd.k)(this, KO), (0, Wd.k)(this, hO, dd.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, Wd.k)(this, vO), !1), this._gammaSpace = !0, this.invertZ = (0, Wd.k)(this, QO, !1), this.lodLevelInAlpha = ((0, Wd.k)(this, tO), (0, Wd.k)(this, oO, !1)), this._dominantDirection = ((0, Wd.k)(this, NO), null), this.isRenderTarget = (0, Wd.k)(this, qO, !1), this._prefiltered = ((0, Wd.k)(this, HO), !1), this._forceSerialize = !1, this.animations = [], this.cV = new Rd.c, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, Od ? dd._IsScene(Od) ? this._scene = Od : this._engine = Od : this._scene = Kd.e.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.Iq()), this._texture = md, this._uid = null
        }
        zV() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return Xd.d.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return Xd.d.IdentityReadOnly
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
        _getFromCache(dd, Od, md, Wd, Fd, Rd) {
          const Xd = this._getEngine();
          if (!Xd) return null;
          const Kd = Xd._getUseSRGBBuffer(!!Fd, Od),
            hd = Xd.getLoadedTexturesCache();
          for (let vd = 0; vd < hd.length; vd++) {
            const Xd = hd[vd];
            if ((void 0 === Fd || Kd === Xd._useSRGBBuffer) && (void 0 === Wd || Wd === Xd.invertY) && Xd.url === dd && Xd.generateMipMaps === !Od && (!md || md === Xd.samplingMode) && (void 0 === Rd || Rd === Xd.isCube)) return Xd.incrementReferences(), Xd
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
          const dd = this.zV();
          dd && dd.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Wd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Fd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            Xd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            Kd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            hd = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const vd = this._getEngine();
          if (!vd) return null;
          const Qd = this.getSize();
          let td = Qd.width,
            od = Qd.height;
          0 !== Od && (td /= Math.pow(2, Od), od /= Math.pow(2, Od), td = Math.round(td), od = Math.round(od)), Kd = Math.min(td, Kd), hd = Math.min(od, hd);
          try {
            return this._texture.isCube || this._texture.is2DArray ? vd._readTexturePixels(this._texture, Kd, hd, dd, Od, md, Wd, Fd, Rd, Xd) : vd._readTexturePixels(this._texture, Kd, hd, -1, Od, md, Wd, Fd, Rd, Xd)
          } catch (Nd) {
            return null
          }
        }
        _readPixelsSync() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Wd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Fd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const Rd = this.getSize();
          let Xd = Rd.width,
            Kd = Rd.height;
          const hd = this._getEngine();
          if (!hd) return null;
          0 != Od && (Xd /= Math.pow(2, Od), Kd /= Math.pow(2, Od), Xd = Math.round(Xd), Kd = Math.round(Kd));
          try {
            return this._texture.isCube ? hd._readTexturePixelsSync(this._texture, Xd, Kd, dd, Od, md, Wd, Fd) : hd._readTexturePixelsSync(this._texture, Xd, Kd, -1, Od, md, Wd, Fd)
          } catch (vd) {
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
          this.cV.notifyObservers(this), this.cV.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !dd) return null;
          const Od = od.b.Serialize(this);
          return od.b.AppendSerializedAnimations(this, Od), Od
        }
        static WhenAllReady(dd, Od) {
          let md = dd.length;
          if (0 !== md)
            for (let Wd = 0; Wd < dd.length; Wd++) {
              const Fd = dd[Wd];
              if (Fd.isReady()) 0 === --md && Od();
              else {
                const dd = Fd.onLoadObservable;
                dd ? dd.addOnce((() => {
                  0 === --md && Od()
                })) : 0 === --md && Od()
              }
            } else Od()
        }
        static _IsScene(dd) {
          return "Scene" === dd.getClassName()
        }
      }, (() => {
        const Rd = "function" === typeof Symbol && Symbol.metadata ? Object.create(Gd[Symbol.metadata] ?? null) : void 0;
        Od = [(0, Fd.E)()], md = [(0, Fd.E)()], vd = [(0, Fd.E)()], td = [(0, Fd.E)()], Nd = [(0, Fd.E)("hasAlpha")], qd = [(0, Fd.E)("getAlphaFromRGB")], Hd = [(0, Fd.E)()], yd = [(0, Fd.E)("coordinatesIndex")], bd = [(0, Fd.E)()], Td = [(0, Fd.E)("coordinatesMode")], pd = [(0, Fd.E)()], Yd = [(0, Fd.E)()], gd = [(0, Fd.E)()], wd = [(0, Fd.E)()], Ed = [(0, Fd.E)()], Jd = [(0, Fd.E)()], Ud = [(0, Fd.E)()], xd = [(0, Fd.E)()], Bd = [(0, Fd.E)()], Sd = [(0, Fd.E)()], sd = [(0, Fd.E)()], ud = [(0, Fd.E)()], Vd = [(0, Fd.E)()], Ad = [(0, Fd.x)()], rd = [(0, Fd.E)()], (0, Wd.h)(dd, null, pd, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: dd => "wrapU" in dd,
            get: dd => dd.wrapU
          },
          metadata: Rd
        }, null, nd), (0, Wd.h)(dd, null, Yd, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: dd => "wrapV" in dd,
            get: dd => dd.wrapV
          },
          metadata: Rd
        }, null, nd), (0, Wd.h)(dd, null, Ed, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: dd => "isCube" in dd,
            get: dd => dd.isCube
          },
          metadata: Rd
        }, null, nd), (0, Wd.h)(dd, null, Jd, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: dd => "is3D" in dd,
            get: dd => dd.is3D
          },
          metadata: Rd
        }, null, nd), (0, Wd.h)(dd, null, Ud, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: dd => "is2DArray" in dd,
            get: dd => dd.is2DArray
          },
          metadata: Rd
        }, null, nd), (0, Wd.h)(dd, null, xd, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: dd => "gammaSpace" in dd,
            get: dd => dd.gammaSpace
          },
          metadata: Rd
        }, null, nd), (0, Wd.h)(dd, null, sd, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: dd => "lodGenerationOffset" in dd,
            get: dd => dd.lodGenerationOffset
          },
          metadata: Rd
        }, null, nd), (0, Wd.h)(dd, null, ud, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: dd => "lodGenerationScale" in dd,
            get: dd => dd.lodGenerationScale
          },
          metadata: Rd
        }, null, nd), (0, Wd.h)(dd, null, Vd, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: dd => "linearSpecularLOD" in dd,
            get: dd => dd.linearSpecularLOD
          },
          metadata: Rd
        }, null, nd), (0, Wd.h)(dd, null, Ad, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "irradianceTexture" in dd,
            get: dd => dd.irradianceTexture
          },
          metadata: Rd
        }, null, nd), (0, Wd.h)(null, null, Od, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: dd => "uniqueId" in dd,
            get: dd => dd.uniqueId,
            set: (dd, Od) => {
              dd.uniqueId = Od
            }
          },
          metadata: Rd
        }, Ld, Pd), (0, Wd.h)(null, null, md, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: dd => "name" in dd,
            get: dd => dd.name,
            set: (dd, Od) => {
              dd.name = Od
            }
          },
          metadata: Rd
        }, zd, cd), (0, Wd.h)(null, null, vd, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: dd => "displayName" in dd,
            get: dd => dd.displayName,
            set: (dd, Od) => {
              dd.displayName = Od
            }
          },
          metadata: Rd
        }, jd, Dd), (0, Wd.h)(null, null, td, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: dd => "metadata" in dd,
            get: dd => dd.metadata,
            set: (dd, Od) => {
              dd.metadata = Od
            }
          },
          metadata: Rd
        }, ed, Id), (0, Wd.h)(null, null, Nd, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: dd => "_hasAlpha" in dd,
            get: dd => dd._hasAlpha,
            set: (dd, Od) => {
              dd._hasAlpha = Od
            }
          },
          metadata: Rd
        }, ld, Cd), (0, Wd.h)(null, null, qd, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: dd => "_getAlphaFromRGB" in dd,
            get: dd => dd._getAlphaFromRGB,
            set: (dd, Od) => {
              dd._getAlphaFromRGB = Od
            }
          },
          metadata: Rd
        }, Zd, kd), (0, Wd.h)(null, null, Hd, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: dd => "level" in dd,
            get: dd => dd.level,
            set: (dd, Od) => {
              dd.level = Od
            }
          },
          metadata: Rd
        }, fd, Md), (0, Wd.h)(null, null, yd, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: dd => "_coordinatesIndex" in dd,
            get: dd => dd._coordinatesIndex,
            set: (dd, Od) => {
              dd._coordinatesIndex = Od
            }
          },
          metadata: Rd
        }, dO, OO), (0, Wd.h)(null, null, bd, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: dd => "optimizeUVAllocation" in dd,
            get: dd => dd.optimizeUVAllocation,
            set: (dd, Od) => {
              dd.optimizeUVAllocation = Od
            }
          },
          metadata: Rd
        }, mO, WO), (0, Wd.h)(null, null, Td, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: dd => "_coordinatesMode" in dd,
            get: dd => dd._coordinatesMode,
            set: (dd, Od) => {
              dd._coordinatesMode = Od
            }
          },
          metadata: Rd
        }, FO, RO), (0, Wd.h)(null, null, gd, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: dd => "wrapR" in dd,
            get: dd => dd.wrapR,
            set: (dd, Od) => {
              dd.wrapR = Od
            }
          },
          metadata: Rd
        }, XO, KO), (0, Wd.h)(null, null, wd, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: dd => "anisotropicFilteringLevel" in dd,
            get: dd => dd.anisotropicFilteringLevel,
            set: (dd, Od) => {
              dd.anisotropicFilteringLevel = Od
            }
          },
          metadata: Rd
        }, hO, vO), (0, Wd.h)(null, null, Bd, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: dd => "invertZ" in dd,
            get: dd => dd.invertZ,
            set: (dd, Od) => {
              dd.invertZ = Od
            }
          },
          metadata: Rd
        }, QO, tO), (0, Wd.h)(null, null, Sd, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: dd => "lodLevelInAlpha" in dd,
            get: dd => dd.lodLevelInAlpha,
            set: (dd, Od) => {
              dd.lodLevelInAlpha = Od
            }
          },
          metadata: Rd
        }, oO, NO), (0, Wd.h)(null, null, rd, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: dd => "isRenderTarget" in dd,
            get: dd => dd.isRenderTarget,
            set: (dd, Od) => {
              dd.isRenderTarget = Od
            }
          },
          metadata: Rd
        }, qO, HO), Rd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Rd
        })
      })(), dd.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, dd
    })();
    (td = qd.prototype).forceSphericalPolynomialsRecompute ?? (td.forceSphericalPolynomialsRecompute = (0, Nd.i)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(qd.prototype, "sphericalPolynomial") || Object.defineProperty(qd.prototype, "sphericalPolynomial", (0, Nd.g)("BaseTexture", "sphericalPolynomial"))
  },
  42412: (dd, Od, md) => {
    md.d(Od, {
      e: () => gd,
      f: () => pd
    });
    var Wd = md(41922),
      Fd = md(41931),
      Rd = md(38660),
      Xd = md(38636),
      Kd = md(41914),
      hd = md(38669),
      vd = md(41817),
      Qd = md(41831),
      td = md(42034),
      od = md(39306),
      Nd = md(41983);

    function qd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Wd = Od.width,
        Fd = Od.height;
      if (dd instanceof Float32Array) {
        let Od = dd.byteLength / dd.BYTES_PER_ELEMENT;
        const md = new Uint8Array(Od);
        for (; --Od >= 0;) {
          let Wd = dd[Od];
          Wd < 0 ? Wd = 0 : Wd > 1 && (Wd = 1), md[Od] = 255 * Wd
        }
        dd = md
      }
      const Rd = document.createElement("canvas");
      Rd.width = Wd, Rd.height = Fd;
      const Xd = Rd.getContext("2d");
      if (!Xd) return null;
      const Kd = Xd.createImageData(Wd, Fd);
      if (Kd.data.set(dd), Xd.putImageData(Kd, 0, 0), md) {
        const dd = document.createElement("canvas");
        dd.width = Wd, dd.height = Fd;
        const Od = dd.getContext("2d");
        return Od ? (Od.translate(0, Fd), Od.scale(1, -1), Od.drawImage(Rd, 0, 0), dd.toDataURL("image/png")) : null
      }
      return Rd.toDataURL("image/png")
    }

    function Hd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Wd = dd.getInternalTexture();
      if (!Wd) return null;
      const Fd = dd._readPixelsSync(Od, md);
      return Fd ? qd(Fd, dd.getSize(), Wd.invertY) : null
    }
    async function yd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Wd = dd.getInternalTexture();
      if (!Wd) return null;
      const Fd = await dd.readPixels(Od, md);
      return Fd ? qd(Fd, dd.getSize(), Wd.invertY) : null
    }
    var bd = md(42358),
      Td = md(41948);
    let pd = (() => {
        var dd;
        let Od, md, qd, pd, Yd, gd, wd, Ed, Jd, Ud, xd, Bd, Sd, sd = Kd.c,
          ud = [],
          Vd = [],
          Ad = [],
          rd = [],
          Gd = [],
          nd = [],
          Ld = [],
          Pd = [],
          zd = [],
          cd = [],
          jd = [],
          Dd = [],
          ed = [],
          Id = [],
          ld = [],
          Cd = [],
          Zd = [],
          kd = [],
          fd = [],
          Md = [],
          dO = [],
          OO = [],
          mO = [],
          WO = [],
          FO = [];
        return dd = class extends sd {
          static _CreateVideoTexture(Od, md, Wd) {
            arguments.length > 5 && void 0 !== arguments[5] || dd.TRILINEAR_SAMPLINGMODE;
            throw (0, vd.m)("VideoTexture")
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
          constructor(Od, md, Fd, Xd) {
            let Kd, hd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : dd.TRILINEAR_SAMPLINGMODE,
              vd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              td = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              od = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Nd = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              qd = arguments.length > 9 ? arguments[9] : void 0,
              Hd = arguments.length > 10 ? arguments[10] : void 0,
              yd = arguments.length > 11 ? arguments[11] : void 0,
              Td = arguments.length > 12 ? arguments[12] : void 0,
              pd = arguments.length > 13 ? arguments[13] : void 0;
            super(md), this.url = ((0, Wd.k)(this, ud), (0, Wd.k)(this, Vd, null)), this.uOffset = ((0, Wd.k)(this, Ad), (0, Wd.k)(this, rd, 0)), this.vOffset = ((0, Wd.k)(this, Gd), (0, Wd.k)(this, nd, 0)), this.uScale = ((0, Wd.k)(this, Ld), (0, Wd.k)(this, Pd, 1)), this.vScale = ((0, Wd.k)(this, zd), (0, Wd.k)(this, cd, 1)), this.uAng = ((0, Wd.k)(this, jd), (0, Wd.k)(this, Dd, 0)), this.vAng = ((0, Wd.k)(this, ed), (0, Wd.k)(this, Id, 0)), this.wAng = ((0, Wd.k)(this, ld), (0, Wd.k)(this, Cd, 0)), this.uRotationCenter = ((0, Wd.k)(this, Zd), (0, Wd.k)(this, kd, .5)), this.vRotationCenter = ((0, Wd.k)(this, fd), (0, Wd.k)(this, Md, .5)), this.wRotationCenter = ((0, Wd.k)(this, dO), (0, Wd.k)(this, OO, .5)), this.homogeneousRotationInUVTransform = ((0, Wd.k)(this, mO), (0, Wd.k)(this, WO, !1)), this.inspectableCustomProperties = ((0, Wd.k)(this, FO), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new Rd.c, this._isBlocking = !0, this.name = Od || "", this.url = Od;
            let Yd = !1,
              gd = null,
              wd = !0;
            "object" === typeof Fd && null !== Fd ? (Kd = Fd.noMipmap ?? !1, Xd = Fd.invertY ?? !bd.e, hd = Fd.samplingMode ?? dd.TRILINEAR_SAMPLINGMODE, vd = Fd.onLoad ?? null, td = Fd.onError ?? null, od = Fd.buffer ?? null, Nd = Fd.deleteBuffer ?? !1, qd = Fd.format, Hd = Fd.mimeType, yd = Fd.loaderOptions, Td = Fd.creationFlags, Yd = Fd.useSRGBBuffer ?? !1, gd = Fd.internalTexture ?? null, wd = Fd.gammaSpace ?? wd, pd = Fd.forcedExtension ?? pd) : Kd = !!Fd, this._gammaSpace = wd, this._noMipmap = Kd, this._invertY = void 0 === Xd ? !bd.e : Xd, this._initialSamplingMode = hd, this._buffer = od, this._deleteBuffer = Nd, this._mimeType = Hd, this._loaderOptions = yd, this._creationFlags = Td, this._useSRGBBuffer = Yd, this._forcedExtension = pd, void 0 !== qd && (this._format = qd);
            const Ed = this.zV(),
              Jd = this._getEngine();
            if (!Jd) return;
            Jd.onBeforeTextureInitObservable.notifyObservers(this);
            const Ud = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), vd && vd(), !this.isBlocking && Ed && Ed.resetCachedMaterial()
              },
              xd = (Od, md) => {
                this._loadingError = !0, this._errorObject = {
                  message: Od,
                  exception: md
                }, td && td(Od, md), dd.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !gd) return this._delayedOnLoad = Ud, void(this._delayedOnError = xd);
            if (this._texture = gd ?? this._getFromCache(this.url, Kd, hd, this._invertY, Yd, this.isCube), this._texture)
              if (this._texture.isReady) Qd.c.SetImmediate((() => Ud()));
              else {
                const dd = this._texture.onLoadedObservable.add(Ud);
                this._texture.onErrorObservable.add((Od => {
                  xd(Od.message, Od.exception), this._texture?.onLoadedObservable.remove(dd)
                }))
              }
            else if (Ed && Ed.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = Ud, this._delayedOnError = xd;
            else {
              try {
                this._texture = Jd.createTexture(this.url, Kd, this._invertY, Ed, hd, Ud, xd, this._buffer, void 0, this._format, this._forcedExtension, Hd, yd, Td, Yd)
              } catch (Bd) {
                throw xd("error loading", Bd), Bd
              }
              Nd && (this._buffer = null)
            }
          }
          updateURL(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              md = arguments.length > 2 ? arguments[2] : void 0,
              Wd = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.zV().markAllMaterialsAsDirty(1, (dd => dd.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = dd), this.url = dd, this._buffer = Od, this._forcedExtension = Wd, this.delayLoadState = 4;
            const Fd = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              Fd ? Fd() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), md && md()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const dd = this.zV();
            if (!dd) return;
            let Od = this.url;
            !Od && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (Od = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(Od, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? Qd.c.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = dd.Iq().createTexture(Od, this._noMipmap, this._invertY, dd, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(dd, Od, md, Wd) {
            dd *= this._cachedUScale, Od *= this._cachedVScale, dd -= this.uRotationCenter * this._cachedUScale, Od -= this.vRotationCenter * this._cachedVScale, md -= this.wRotationCenter, Xd.j.TransformCoordinatesFromFloatsToRef(dd, Od, md, this._rowGenerationMatrix, Wd), Wd.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, Wd.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, Wd.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * dd === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * dd, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = Xd.d.Zero(), this._rowGenerationMatrix = new Xd.d, this._t0 = Xd.j.Zero(), this._t1 = Xd.j.Zero(), this._t2 = Xd.j.Zero()), Xd.d.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (Xd.d.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, Xd.h.Matrix[0]), Xd.d.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, Xd.h.Matrix[1]), Xd.d.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, Xd.h.Matrix[2]), Xd.d.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, Xd.h.Matrix[3]), Xd.h.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Xd.h.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Xd.h.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Xd.h.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.YRd(this._t0), this._t2.YRd(this._t0), Xd.d.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const Od = this.zV();
            if (!Od) return this._cachedTextureMatrix;
            const md = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && md !== this._cachedIdentity3x2 && Od.markAllMaterialsAsDirty(1, (dd => dd.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const Od = this.zV();
            if (!Od) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== dd.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === Od.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = Xd.d.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = Xd.d.Zero());
            const md = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case dd.PLANAR_MODE:
                Xd.d.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case dd.PROJECTION_MODE: {
                Xd.d.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const dd = Od.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = dd.updateFlag, dd.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                Xd.d.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return md && Od.markAllMaterialsAsDirty(1, (dd => dd.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const Od = {
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
            return Td.b.Clone((() => new dd(this._texture ? this._texture.url : null, this.zV(), Od)), this)
          }
          serialize() {
            const Od = this.name;
            dd.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const md = super.serialize(dd._SerializeInternalTextureUniqueId);
            if (!md) return null;
            if (dd.SerializeBuffers || dd.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) md.base64String = this._buffer, md.name = md.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const dd = this.mimeType || "image/png";
              md.base64String = `data:${dd};base64,${(0,Nd.h)(this._buffer)}`
            } else(dd.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (md.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? Hd(this) : yd(this));
            return md.invertY = this._invertY, md.samplingMode = this.samplingMode, md._creationFlags = this._creationFlags, md._useSRGBBuffer = this._useSRGBBuffer, dd._SerializeInternalTextureUniqueId && (md.internalTextureUniqueId = this._texture?.uniqueId), md.internalTextureLabel = this._texture?.label, md.noMipmap = this._noMipmap, this.name = Od, md
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(Od, md, Wd) {
            if (Od.customType) {
              const dd = td.c.Instantiate(Od.customType).Parse(Od, md, Wd);
              return Od.samplingMode && dd.updateSamplingMode && dd._samplingMode && dd._samplingMode !== Od.samplingMode && dd.updateSamplingMode(Od.samplingMode), dd
            }
            if (Od.isCube && !Od.isRenderTarget) return dd._CubeTextureParser(Od, md, Wd);
            const Fd = void 0 !== Od.internalTextureUniqueId;
            if (!Od.name && !Od.isRenderTarget && !Fd) return null;
            let Rd;
            if (Fd) {
              const dd = md.Iq().getLoadedTexturesCache();
              for (const md of dd)
                if (md.uniqueId === Od.internalTextureUniqueId) {
                  Rd = md;
                  break
                }
            }
            const Xd = dd => {
              if (dd && dd._texture && (dd._texture._cachedWrapU = null, dd._texture._cachedWrapV = null, dd._texture._cachedWrapR = null), Od.samplingMode) {
                const md = Od.samplingMode;
                dd && dd.samplingMode !== md && dd.updateSamplingMode(md)
              }
              if (dd && Od.animations)
                for (let md = 0; md < Od.animations.length; md++) {
                  const Wd = Od.animations[md],
                    Fd = (0, hd.c)("BABYLON.Animation");
                  Fd && dd.animations.push(Fd.Parse(Wd))
                }
              dd && dd._texture && (Fd && !Rd && dd._texture._setUniqueId(Od.internalTextureUniqueId), dd._texture.label = Od.internalTextureLabel)
            };
            return Td.b.Parse((() => {
              let Fd = !0;
              if (Od.noMipmap && (Fd = !1), Od.mirrorPlane) {
                const Wd = dd._CreateMirror(Od.name, Od.renderTargetSize, md, Fd);
                return Wd._waitingRenderList = Od.renderList, Wd.mirrorPlane = od.d.FromArray(Od.mirrorPlane), Xd(Wd), Wd
              }
              if (Od.isRenderTarget && !Od.base64String) {
                let Wd = null;
                if (Od.isCube) {
                  if (md.reflectionProbes)
                    for (let dd = 0; dd < md.reflectionProbes.length; dd++) {
                      const Wd = md.reflectionProbes[dd];
                      if (Wd.name === Od.name) return Wd.cubeTexture
                    }
                } else Wd = dd._CreateRenderTargetTexture(Od.name, Od.renderTargetSize, md, Fd, Od._creationFlags ?? 0), Wd._waitingRenderList = Od.renderList;
                return Xd(Wd), Wd
              }
              if (Od.isVideo) {
                const Rd = dd._CreateVideoTexture(Wd + (Od.url || Od.name), Wd + (Od.src || Od.url), md, Fd, Od.invertY, Od.samplingMode, Od.settings || {});
                return Xd(Rd), Rd
              } {
                let Kd;
                if ("string" === typeof Od.base64String && Od.base64String && !Rd) {
                  const Wd = {
                      buffer: Od.base64String,
                      noMipmap: !Fd,
                      invertY: Od.invertY,
                      samplingMode: Od.samplingMode,
                      useSRGBBuffer: Od._useSRGBBuffer ?? !1,
                      creationFlags: Od._creationFlags ?? 0,
                      onLoad: () => {
                        Xd(Kd)
                      }
                    },
                    Rd = Od.base64String,
                    hd = Rd.startsWith("data:") ? Rd.substring(5) : Rd;
                  Kd = dd.CreateFromBase64String("", hd, md, Wd), Kd.name = Od.name
                } else {
                  let hd;
                  hd = Od.name && (Od.name.indexOf("://") > 0 || Od.name.startsWith("data:")) ? Od.name : Wd + Od.name, Od.url && (Od.url.startsWith("data:") || dd.UseSerializedUrlIfAny) && (hd = Od.url);
                  const vd = {
                    noMipmap: !Fd,
                    invertY: Od.invertY,
                    samplingMode: Od.samplingMode,
                    useSRGBBuffer: Od._useSRGBBuffer ?? !1,
                    creationFlags: Od._creationFlags ?? 0,
                    onLoad: () => {
                      Xd(Kd)
                    },
                    internalTexture: Rd
                  };
                  Kd = new dd(hd, md, vd)
                }
                return Kd
              }
            }), Od, md)
          }
          static CreateFromBase64String(Od, md, Wd, Fd, Rd) {
            let Xd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : dd.TRILINEAR_SAMPLINGMODE;
            return new dd("data:" + md, Wd, Fd, Rd, Xd, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, Od, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(Od, md, Wd) {
            let Fd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Rd = arguments.length > 4 ? arguments[4] : void 0,
              Xd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              Kd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : dd.TRILINEAR_SAMPLINGMODE,
              hd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              vd = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              Qd = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              td = arguments.length > 10 ? arguments[10] : void 0,
              od = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== Od.substring(0, 5) && (Od = "data:" + Od), new dd(Od, Wd, Rd, Xd, Kd, hd, vd, md, Fd, Qd, void 0, void 0, td, od)
          }
        }, (() => {
          const Rd = "function" === typeof Symbol && Symbol.metadata ? Object.create(sd[Symbol.metadata] ?? null) : void 0;
          Od = [(0, Fd.E)()], md = [(0, Fd.E)()], qd = [(0, Fd.E)()], pd = [(0, Fd.E)()], Yd = [(0, Fd.E)()], gd = [(0, Fd.E)()], wd = [(0, Fd.E)()], Ed = [(0, Fd.E)()], Jd = [(0, Fd.E)()], Ud = [(0, Fd.E)()], xd = [(0, Fd.E)()], Bd = [(0, Fd.E)()], Sd = [(0, Fd.E)()], (0, Wd.h)(dd, null, Sd, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: dd => "isBlocking" in dd,
              get: dd => dd.isBlocking
            },
            metadata: Rd
          }, null, ud), (0, Wd.h)(null, null, Od, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: dd => "url" in dd,
              get: dd => dd.url,
              set: (dd, Od) => {
                dd.url = Od
              }
            },
            metadata: Rd
          }, Vd, Ad), (0, Wd.h)(null, null, md, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: dd => "uOffset" in dd,
              get: dd => dd.uOffset,
              set: (dd, Od) => {
                dd.uOffset = Od
              }
            },
            metadata: Rd
          }, rd, Gd), (0, Wd.h)(null, null, qd, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: dd => "vOffset" in dd,
              get: dd => dd.vOffset,
              set: (dd, Od) => {
                dd.vOffset = Od
              }
            },
            metadata: Rd
          }, nd, Ld), (0, Wd.h)(null, null, pd, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: dd => "uScale" in dd,
              get: dd => dd.uScale,
              set: (dd, Od) => {
                dd.uScale = Od
              }
            },
            metadata: Rd
          }, Pd, zd), (0, Wd.h)(null, null, Yd, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: dd => "vScale" in dd,
              get: dd => dd.vScale,
              set: (dd, Od) => {
                dd.vScale = Od
              }
            },
            metadata: Rd
          }, cd, jd), (0, Wd.h)(null, null, gd, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: dd => "uAng" in dd,
              get: dd => dd.uAng,
              set: (dd, Od) => {
                dd.uAng = Od
              }
            },
            metadata: Rd
          }, Dd, ed), (0, Wd.h)(null, null, wd, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: dd => "vAng" in dd,
              get: dd => dd.vAng,
              set: (dd, Od) => {
                dd.vAng = Od
              }
            },
            metadata: Rd
          }, Id, ld), (0, Wd.h)(null, null, Ed, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: dd => "wAng" in dd,
              get: dd => dd.wAng,
              set: (dd, Od) => {
                dd.wAng = Od
              }
            },
            metadata: Rd
          }, Cd, Zd), (0, Wd.h)(null, null, Jd, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: dd => "uRotationCenter" in dd,
              get: dd => dd.uRotationCenter,
              set: (dd, Od) => {
                dd.uRotationCenter = Od
              }
            },
            metadata: Rd
          }, kd, fd), (0, Wd.h)(null, null, Ud, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: dd => "vRotationCenter" in dd,
              get: dd => dd.vRotationCenter,
              set: (dd, Od) => {
                dd.vRotationCenter = Od
              }
            },
            metadata: Rd
          }, Md, dO), (0, Wd.h)(null, null, xd, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: dd => "wRotationCenter" in dd,
              get: dd => dd.wRotationCenter,
              set: (dd, Od) => {
                dd.wRotationCenter = Od
              }
            },
            metadata: Rd
          }, OO, mO), (0, Wd.h)(null, null, Bd, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: dd => "homogeneousRotationInUVTransform" in dd,
              get: dd => dd.homogeneousRotationInUVTransform,
              set: (dd, Od) => {
                dd.homogeneousRotationInUVTransform = Od
              }
            },
            metadata: Rd
          }, WO, FO), Rd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Rd
          })
        })(), dd.SerializeBuffers = !0, dd.ForceSerializeBuffers = !1, dd.OnTextureLoadErrorObservable = new Rd.c, dd._SerializeInternalTextureUniqueId = !1, dd._CubeTextureParser = (dd, Od, md) => {
          throw (0, vd.m)("CubeTexture")
        }, dd._CreateMirror = (dd, Od, md, Wd) => {
          throw (0, vd.m)("MirrorTexture")
        }, dd._CreateRenderTargetTexture = (dd, Od, md, Wd, Fd) => {
          throw (0, vd.m)("RenderTargetTexture")
        }, dd.NEAREST_SAMPLINGMODE = 1, dd.NEAREST_NEAREST_MIPLINEAR = 8, dd.BILINEAR_SAMPLINGMODE = 2, dd.LINEAR_LINEAR_MIPNEAREST = 11, dd.TRILINEAR_SAMPLINGMODE = 3, dd.LINEAR_LINEAR_MIPLINEAR = 3, dd.NEAREST_NEAREST_MIPNEAREST = 4, dd.NEAREST_LINEAR_MIPNEAREST = 5, dd.NEAREST_LINEAR_MIPLINEAR = 6, dd.NEAREST_LINEAR = 7, dd.NEAREST_NEAREST = 1, dd.LINEAR_NEAREST_MIPNEAREST = 9, dd.LINEAR_NEAREST_MIPLINEAR = 10, dd.LINEAR_LINEAR = 2, dd.LINEAR_NEAREST = 12, dd.EXPLICIT_MODE = 0, dd.SPHERICAL_MODE = 1, dd.PLANAR_MODE = 2, dd.CUBIC_MODE = 3, dd.PROJECTION_MODE = 4, dd.SKYBOX_MODE = 5, dd.INVCUBIC_MODE = 6, dd.EQUIRECTANGULAR_MODE = 7, dd.FIXED_EQUIRECTANGULAR_MODE = 8, dd.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, dd.CLAMP_ADDRESSMODE = 0, dd.WRAP_ADDRESSMODE = 1, dd.MIRROR_ADDRESSMODE = 2, dd.UseSerializedUrlIfAny = !1, dd
      })(),
      Yd = !1;

    function gd() {
      Yd || (Yd = !0, (0, hd.e)("BABYLON.Texture", pd), Td.b._TextureParser = pd.Parse)
    }
  },
  41939: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd
    });
    class Wd {
      constructor(dd, Od) {
        this.width = dd, this.height = Od
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
      Bx(dd) {
        this.width = dd.width, this.height = dd.height
      }
      KOd(dd, Od) {
        return this.width = dd, this.height = Od, this
      }
      set(dd, Od) {
        return this.KOd(dd, Od)
      }
      multiplyByFloats(dd, Od) {
        return new Wd(this.width * dd, this.height * Od)
      }
      clone() {
        return new Wd(this.width, this.height)
      }
      equals(dd) {
        return !!dd && (this.width === dd.width && this.height === dd.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new Wd(0, 0)
      }
      add(dd) {
        return new Wd(this.width + dd.width, this.height + dd.height)
      }
      subtract(dd) {
        return new Wd(this.width - dd.width, this.height - dd.height)
      }
      scale(dd) {
        return new Wd(this.width * dd, this.height * dd)
      }
      static Lerp(dd, Od, md) {
        const Fd = dd.width + (Od.width - dd.width) * md,
          Rd = dd.height + (Od.height - dd.height) * md;
        return new Wd(Fd, Rd)
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);