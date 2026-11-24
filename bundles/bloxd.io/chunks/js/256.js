export const id = 256;
export const ids = [256];
export const modules = {
  40540: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => hm
    });
    let hm = !1
  },
  40111: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Om
    });
    var hm = fm(40113),
      Am = fm(40119),
      am = fm(37203),
      xm = fm(37185),
      wm = fm(37201),
      Dm = fm(37970),
      im = fm(40127);
    class Rm {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(mm) {
        this._wrapU = mm
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(mm) {
        this._wrapV = mm
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(mm) {
        this._texture && (this._texture.isCube = mm)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(mm) {
        this._texture && (this._texture.is3D = mm)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(mm) {
        this._texture && (this._texture.is2DArray = mm)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(mm) {
        return void 0 !== mm?.shareDepth
      }
      constructor(mm) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = im.e.Zero(), this._cachedBaseSize = im.e.Zero(), this._initialSamplingMode = 2, this._texture = Rm._IsRenderTargetWrapper(mm) ? mm.texture : mm, this._texture && (this._engine = this._texture.dO(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(mm, this._texture, this._texture.generateMipMaps && Tm)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var pm, Em = fm(40129),
      om = fm(39993);
    let Om = (() => {
      var mm;
      let Tm, fm, im, pm, om, Om, Ym, qm, jm, Vm, Im, Km, Qm, nm, Jm, cm, zm, Zm, km, bm, Sm, em, Nm, Gm, Xm, Pm = Rm,
        Hm = [],
        ym = [],
        Cm = [],
        rm = [],
        sm = [],
        lm = [],
        Mm = [],
        um = [],
        Bm = [],
        Lm = [],
        tm = [],
        Um = [],
        dm = [],
        gm = [],
        Wm = [],
        Fm = [],
        mT = [],
        TT = [],
        fT = [],
        hT = [],
        AT = [],
        aT = [],
        xT = [],
        wT = [],
        DT = [],
        iT = [],
        RT = [],
        pT = [],
        ET = [],
        oT = [],
        OT = [];
      return mm = class extends Pm {
        set hasAlpha(mm) {
          this._hasAlpha = mm
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(mm) {
          this._getAlphaFromRGB !== mm && (this._getAlphaFromRGB = mm, this._scene && this._scene.markAllMaterialsAsDirty(1, (mm => mm.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(mm) {
          this._coordinatesIndex !== mm && (this._coordinatesIndex = mm, this._scene && this._scene.markAllMaterialsAsDirty(1, (mm => mm.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(mm) {
          this._coordinatesMode !== mm && (this._coordinatesMode = mm, this._scene && this._scene.markAllMaterialsAsDirty(1, (mm => mm.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(mm) {
          this._wrapU = mm
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(mm) {
          this._wrapV = mm
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(mm) {
          this._texture ? this._texture.isCube = mm : this._isCube = mm
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(mm) {
          this._texture && (this._texture.is3D = mm)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(mm) {
          this._texture && (this._texture.is2DArray = mm)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(mm) {
          if (this._texture) {
            if (this._texture._gammaSpace === mm) return;
            this._texture._gammaSpace = mm
          } else {
            if (this._gammaSpace === mm) return;
            this._gammaSpace = mm
          }
          this.wG()?.markAllMaterialsAsDirty(1, (mm => mm.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(mm) {
          mm !== this.isRGBD && (this._texture && (this._texture._isRGBD = mm), this.wG()?.markAllMaterialsAsDirty(1, (mm => mm.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(mm) {
          this._texture && (this._texture._lodGenerationOffset = mm)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(mm) {
          this._texture && (this._texture._lodGenerationScale = mm)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(mm) {
          this._texture && (this._texture._linearSpecularLOD = mm)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(mm) {
          this._texture && (this._texture._irradianceTexture = mm)
        }
        get uid() {
          return this._uid || (this._uid = (0, Dm.c)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(mm) {
          this._onDisposeObserver && this.iG.remove(this._onDisposeObserver), this._onDisposeObserver = this.iG.add(mm)
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
        constructor(Tm) {
          let fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, hm.i)(this, Hm), (0, hm.i)(this, ym, void 0)), this.name = ((0, hm.i)(this, Cm), (0, hm.i)(this, rm, void 0)), this.displayName = ((0, hm.i)(this, sm), (0, hm.i)(this, lm, void 0)), this.metadata = ((0, hm.i)(this, Mm), (0, hm.i)(this, um, null)), this._internalMetadata = (0, hm.i)(this, Bm), this.reservedDataStore = null, this._hasAlpha = (0, hm.i)(this, Lm, !1), this._getAlphaFromRGB = ((0, hm.i)(this, tm), (0, hm.i)(this, Um, !1)), this.level = ((0, hm.i)(this, dm), (0, hm.i)(this, gm, 1)), this._coordinatesIndex = ((0, hm.i)(this, Wm), (0, hm.i)(this, Fm, 0)), this.optimizeUVAllocation = ((0, hm.i)(this, mT), (0, hm.i)(this, TT, !0)), this._coordinatesMode = ((0, hm.i)(this, fT), (0, hm.i)(this, hT, 0)), this.wrapR = ((0, hm.i)(this, AT), (0, hm.i)(this, aT, 1)), this.anisotropicFilteringLevel = ((0, hm.i)(this, xT), (0, hm.i)(this, wT, mm.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, hm.i)(this, DT), !1), this._gammaSpace = !0, this.invertZ = (0, hm.i)(this, iT, !1), this.lodLevelInAlpha = ((0, hm.i)(this, RT), (0, hm.i)(this, pT, !1)), this._dominantDirection = ((0, hm.i)(this, ET), null), this.isRenderTarget = (0, hm.i)(this, oT, !1), this._prefiltered = ((0, hm.i)(this, OT), !1), this._forceSerialize = !1, this.animations = [], this.iG = new am.c, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, Tm ? mm._IsScene(Tm) ? this._scene = Tm : this._engine = Tm : this._scene = wm.c.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.dO()), this._texture = fm, this._uid = null
        }
        wG() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return xm.e.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return xm.e.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(mm) {}
        get canRescale() {
          return !1
        }
        _getFromCache(mm, Tm, fm, hm, Am, am) {
          const xm = this._getEngine();
          if (!xm) return null;
          const wm = xm._getUseSRGBBuffer(!!Am, Tm),
            Dm = xm.getLoadedTexturesCache();
          for (let im = 0; im < Dm.length; im++) {
            const xm = Dm[im];
            if ((void 0 === Am || wm === xm._useSRGBBuffer) && (void 0 === hm || hm === xm.invertY) && xm.url === mm && xm.generateMipMaps === !Tm && (!fm || fm === xm.samplingMode) && (void 0 === am || am === xm.isCube)) return xm.incrementReferences(), xm
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
          const mm = this.wG();
          mm && mm.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            hm = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            xm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            wm = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            Dm = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const im = this._getEngine();
          if (!im) return null;
          const Rm = this.getSize();
          let pm = Rm.width,
            Em = Rm.height;
          0 !== Tm && (pm /= Math.pow(2, Tm), Em /= Math.pow(2, Tm), pm = Math.round(pm), Em = Math.round(Em)), wm = Math.min(pm, wm), Dm = Math.min(Em, Dm);
          try {
            return this._texture.isCube || this._texture.is2DArray ? im._readTexturePixels(this._texture, wm, Dm, mm, Tm, fm, hm, Am, am, xm) : im._readTexturePixels(this._texture, wm, Dm, -1, Tm, fm, hm, Am, am, xm)
          } catch (om) {
            return null
          }
        }
        _readPixelsSync() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            hm = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const am = this.getSize();
          let xm = am.width,
            wm = am.height;
          const Dm = this._getEngine();
          if (!Dm) return null;
          0 != Tm && (xm /= Math.pow(2, Tm), wm /= Math.pow(2, Tm), xm = Math.round(xm), wm = Math.round(wm));
          try {
            return this._texture.isCube ? Dm._readTexturePixelsSync(this._texture, xm, wm, mm, Tm, fm, hm, Am) : Dm._readTexturePixelsSync(this._texture, xm, wm, -1, Tm, fm, hm, Am)
          } catch (im) {
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
            const mm = this._scene.textures.indexOf(this);
            if (mm >= 0 && this._scene.textures.splice(mm, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const mm = this._parentContainer.textures.indexOf(this);
              mm > -1 && this._parentContainer.textures.splice(mm, 1), this._parentContainer = null
            }
          }
          this.iG.notifyObservers(this), this.iG.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !mm) return null;
          const Tm = Em.d.Serialize(this);
          return Em.d.AppendSerializedAnimations(this, Tm), Tm
        }
        static WhenAllReady(mm, Tm) {
          let fm = mm.length;
          if (0 !== fm)
            for (let hm = 0; hm < mm.length; hm++) {
              const Am = mm[hm];
              if (Am.isReady()) 0 === --fm && Tm();
              else {
                const mm = Am.onLoadObservable;
                mm ? mm.addOnce((() => {
                  0 === --fm && Tm()
                })) : 0 === --fm && Tm()
              }
            } else Tm()
        }
        static _IsScene(mm) {
          return "Scene" === mm.getClassName()
        }
      }, (() => {
        const am = "function" === typeof Symbol && Symbol.metadata ? Object.create(Pm[Symbol.metadata] ?? null) : void 0;
        Tm = [(0, Am.J)()], fm = [(0, Am.J)()], im = [(0, Am.J)()], pm = [(0, Am.J)()], om = [(0, Am.J)("hasAlpha")], Om = [(0, Am.J)("getAlphaFromRGB")], Ym = [(0, Am.J)()], qm = [(0, Am.J)("coordinatesIndex")], jm = [(0, Am.J)()], Vm = [(0, Am.J)("coordinatesMode")], Im = [(0, Am.J)()], Km = [(0, Am.J)()], Qm = [(0, Am.J)()], nm = [(0, Am.J)()], Jm = [(0, Am.J)()], cm = [(0, Am.J)()], zm = [(0, Am.J)()], Zm = [(0, Am.J)()], km = [(0, Am.J)()], bm = [(0, Am.J)()], Sm = [(0, Am.J)()], em = [(0, Am.J)()], Nm = [(0, Am.J)()], Gm = [(0, Am.A)()], Xm = [(0, Am.J)()], (0, hm.g)(mm, null, Im, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: mm => "wrapU" in mm,
            get: mm => mm.wrapU
          },
          metadata: am
        }, null, Hm), (0, hm.g)(mm, null, Km, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: mm => "wrapV" in mm,
            get: mm => mm.wrapV
          },
          metadata: am
        }, null, Hm), (0, hm.g)(mm, null, Jm, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: mm => "isCube" in mm,
            get: mm => mm.isCube
          },
          metadata: am
        }, null, Hm), (0, hm.g)(mm, null, cm, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: mm => "is3D" in mm,
            get: mm => mm.is3D
          },
          metadata: am
        }, null, Hm), (0, hm.g)(mm, null, zm, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: mm => "is2DArray" in mm,
            get: mm => mm.is2DArray
          },
          metadata: am
        }, null, Hm), (0, hm.g)(mm, null, Zm, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: mm => "gammaSpace" in mm,
            get: mm => mm.gammaSpace
          },
          metadata: am
        }, null, Hm), (0, hm.g)(mm, null, Sm, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: mm => "lodGenerationOffset" in mm,
            get: mm => mm.lodGenerationOffset
          },
          metadata: am
        }, null, Hm), (0, hm.g)(mm, null, em, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: mm => "lodGenerationScale" in mm,
            get: mm => mm.lodGenerationScale
          },
          metadata: am
        }, null, Hm), (0, hm.g)(mm, null, Nm, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: mm => "linearSpecularLOD" in mm,
            get: mm => mm.linearSpecularLOD
          },
          metadata: am
        }, null, Hm), (0, hm.g)(mm, null, Gm, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "irradianceTexture" in mm,
            get: mm => mm.irradianceTexture
          },
          metadata: am
        }, null, Hm), (0, hm.g)(null, null, Tm, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: mm => "uniqueId" in mm,
            get: mm => mm.uniqueId,
            set: (mm, Tm) => {
              mm.uniqueId = Tm
            }
          },
          metadata: am
        }, ym, Cm), (0, hm.g)(null, null, fm, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: mm => "name" in mm,
            get: mm => mm.name,
            set: (mm, Tm) => {
              mm.name = Tm
            }
          },
          metadata: am
        }, rm, sm), (0, hm.g)(null, null, im, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: mm => "displayName" in mm,
            get: mm => mm.displayName,
            set: (mm, Tm) => {
              mm.displayName = Tm
            }
          },
          metadata: am
        }, lm, Mm), (0, hm.g)(null, null, pm, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: mm => "metadata" in mm,
            get: mm => mm.metadata,
            set: (mm, Tm) => {
              mm.metadata = Tm
            }
          },
          metadata: am
        }, um, Bm), (0, hm.g)(null, null, om, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: mm => "_hasAlpha" in mm,
            get: mm => mm._hasAlpha,
            set: (mm, Tm) => {
              mm._hasAlpha = Tm
            }
          },
          metadata: am
        }, Lm, tm), (0, hm.g)(null, null, Om, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: mm => "_getAlphaFromRGB" in mm,
            get: mm => mm._getAlphaFromRGB,
            set: (mm, Tm) => {
              mm._getAlphaFromRGB = Tm
            }
          },
          metadata: am
        }, Um, dm), (0, hm.g)(null, null, Ym, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: mm => "level" in mm,
            get: mm => mm.level,
            set: (mm, Tm) => {
              mm.level = Tm
            }
          },
          metadata: am
        }, gm, Wm), (0, hm.g)(null, null, qm, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: mm => "_coordinatesIndex" in mm,
            get: mm => mm._coordinatesIndex,
            set: (mm, Tm) => {
              mm._coordinatesIndex = Tm
            }
          },
          metadata: am
        }, Fm, mT), (0, hm.g)(null, null, jm, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: mm => "optimizeUVAllocation" in mm,
            get: mm => mm.optimizeUVAllocation,
            set: (mm, Tm) => {
              mm.optimizeUVAllocation = Tm
            }
          },
          metadata: am
        }, TT, fT), (0, hm.g)(null, null, Vm, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: mm => "_coordinatesMode" in mm,
            get: mm => mm._coordinatesMode,
            set: (mm, Tm) => {
              mm._coordinatesMode = Tm
            }
          },
          metadata: am
        }, hT, AT), (0, hm.g)(null, null, Qm, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: mm => "wrapR" in mm,
            get: mm => mm.wrapR,
            set: (mm, Tm) => {
              mm.wrapR = Tm
            }
          },
          metadata: am
        }, aT, xT), (0, hm.g)(null, null, nm, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: mm => "anisotropicFilteringLevel" in mm,
            get: mm => mm.anisotropicFilteringLevel,
            set: (mm, Tm) => {
              mm.anisotropicFilteringLevel = Tm
            }
          },
          metadata: am
        }, wT, DT), (0, hm.g)(null, null, km, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: mm => "invertZ" in mm,
            get: mm => mm.invertZ,
            set: (mm, Tm) => {
              mm.invertZ = Tm
            }
          },
          metadata: am
        }, iT, RT), (0, hm.g)(null, null, bm, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: mm => "lodLevelInAlpha" in mm,
            get: mm => mm.lodLevelInAlpha,
            set: (mm, Tm) => {
              mm.lodLevelInAlpha = Tm
            }
          },
          metadata: am
        }, pT, ET), (0, hm.g)(null, null, Xm, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: mm => "isRenderTarget" in mm,
            get: mm => mm.isRenderTarget,
            set: (mm, Tm) => {
              mm.isRenderTarget = Tm
            }
          },
          metadata: am
        }, oT, OT), am && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: am
        })
      })(), mm.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, mm
    })();
    (pm = Om.prototype).forceSphericalPolynomialsRecompute ?? (pm.forceSphericalPolynomialsRecompute = (0, om.f)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(Om.prototype, "sphericalPolynomial") || Object.defineProperty(Om.prototype, "sphericalPolynomial", (0, om.e)("BaseTexture", "sphericalPolynomial"))
  },
  40585: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Qm,
      f: () => Im
    });
    var hm = fm(40113),
      Am = fm(40119),
      am = fm(37203),
      xm = fm(37185),
      wm = fm(40111),
      Dm = fm(37224),
      im = fm(39993),
      Rm = fm(40008),
      pm = fm(40211),
      Em = fm(37821),
      om = fm(40173);

    function Om(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const hm = Tm.width,
        Am = Tm.height;
      if (mm instanceof Float32Array) {
        let Tm = mm.byteLength / mm.BYTES_PER_ELEMENT;
        const fm = new Uint8Array(Tm);
        for (; --Tm >= 0;) {
          let hm = mm[Tm];
          hm < 0 ? hm = 0 : hm > 1 && (hm = 1), fm[Tm] = 255 * hm
        }
        mm = fm
      }
      const am = document.createElement("canvas");
      am.width = hm, am.height = Am;
      const xm = am.getContext("2d");
      if (!xm) return null;
      const wm = xm.createImageData(hm, Am);
      if (wm.data.set(mm), xm.putImageData(wm, 0, 0), fm) {
        const mm = document.createElement("canvas");
        mm.width = hm, mm.height = Am;
        const Tm = mm.getContext("2d");
        return Tm ? (Tm.translate(0, Am), Tm.scale(1, -1), Tm.drawImage(am, 0, 0), mm.toDataURL("image/png")) : null
      }
      return am.toDataURL("image/png")
    }

    function Ym(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const hm = mm.getInternalTexture();
      if (!hm) return null;
      const Am = mm._readPixelsSync(Tm, fm);
      return Am ? Om(Am, mm.getSize(), hm.invertY) : null
    }
    async function qm(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const hm = mm.getInternalTexture();
      if (!hm) return null;
      const Am = await mm.readPixels(Tm, fm);
      return Am ? Om(Am, mm.getSize(), hm.invertY) : null
    }
    var jm = fm(40540),
      Vm = fm(40129);
    let Im = (() => {
        var mm;
        let Tm, fm, Om, Im, Km, Qm, nm, Jm, cm, zm, Zm, km, bm, Sm = wm.b,
          em = [],
          Nm = [],
          Gm = [],
          Xm = [],
          Pm = [],
          Hm = [],
          ym = [],
          Cm = [],
          rm = [],
          sm = [],
          lm = [],
          Mm = [],
          um = [],
          Bm = [],
          Lm = [],
          tm = [],
          Um = [],
          dm = [],
          gm = [],
          Wm = [],
          Fm = [],
          mT = [],
          TT = [],
          fT = [],
          hT = [];
        return mm = class extends Sm {
          static _CreateVideoTexture(Tm, fm, hm) {
            arguments.length > 5 && void 0 !== arguments[5] || mm.TRILINEAR_SAMPLINGMODE;
            throw (0, im.i)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(mm) {
            this._isBlocking = mm
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(Tm, fm, Am, xm) {
            let wm, Dm = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : mm.TRILINEAR_SAMPLINGMODE,
              im = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              pm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              Em = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              om = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              Om = arguments.length > 9 ? arguments[9] : void 0,
              Ym = arguments.length > 10 ? arguments[10] : void 0,
              qm = arguments.length > 11 ? arguments[11] : void 0,
              Vm = arguments.length > 12 ? arguments[12] : void 0,
              Im = arguments.length > 13 ? arguments[13] : void 0;
            super(fm), this.url = ((0, hm.i)(this, em), (0, hm.i)(this, Nm, null)), this.uOffset = ((0, hm.i)(this, Gm), (0, hm.i)(this, Xm, 0)), this.vOffset = ((0, hm.i)(this, Pm), (0, hm.i)(this, Hm, 0)), this.uScale = ((0, hm.i)(this, ym), (0, hm.i)(this, Cm, 1)), this.vScale = ((0, hm.i)(this, rm), (0, hm.i)(this, sm, 1)), this.uAng = ((0, hm.i)(this, lm), (0, hm.i)(this, Mm, 0)), this.vAng = ((0, hm.i)(this, um), (0, hm.i)(this, Bm, 0)), this.wAng = ((0, hm.i)(this, Lm), (0, hm.i)(this, tm, 0)), this.uRotationCenter = ((0, hm.i)(this, Um), (0, hm.i)(this, dm, .5)), this.vRotationCenter = ((0, hm.i)(this, gm), (0, hm.i)(this, Wm, .5)), this.wRotationCenter = ((0, hm.i)(this, Fm), (0, hm.i)(this, mT, .5)), this.homogeneousRotationInUVTransform = ((0, hm.i)(this, TT), (0, hm.i)(this, fT, !1)), this.inspectableCustomProperties = ((0, hm.i)(this, hT), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new am.c, this._isBlocking = !0, this.name = Tm || "", this.url = Tm;
            let Km = !1,
              Qm = null,
              nm = !0;
            "object" === typeof Am && null !== Am ? (wm = Am.noMipmap ?? !1, xm = Am.invertY ?? !jm.c, Dm = Am.samplingMode ?? mm.TRILINEAR_SAMPLINGMODE, im = Am.onLoad ?? null, pm = Am.onError ?? null, Em = Am.buffer ?? null, om = Am.deleteBuffer ?? !1, Om = Am.format, Ym = Am.mimeType, qm = Am.loaderOptions, Vm = Am.creationFlags, Km = Am.useSRGBBuffer ?? !1, Qm = Am.internalTexture ?? null, nm = Am.gammaSpace ?? nm, Im = Am.forcedExtension ?? Im) : wm = !!Am, this._gammaSpace = nm, this._noMipmap = wm, this._invertY = void 0 === xm ? !jm.c : xm, this._initialSamplingMode = Dm, this._buffer = Em, this._deleteBuffer = om, this._mimeType = Ym, this._loaderOptions = qm, this._creationFlags = Vm, this._useSRGBBuffer = Km, this._forcedExtension = Im, void 0 !== Om && (this._format = Om);
            const Jm = this.wG(),
              cm = this._getEngine();
            if (!cm) return;
            cm.onBeforeTextureInitObservable.notifyObservers(this);
            const zm = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), im && im(), !this.isBlocking && Jm && Jm.resetCachedMaterial()
              },
              Zm = (Tm, fm) => {
                this._loadingError = !0, this._errorObject = {
                  message: Tm,
                  exception: fm
                }, pm && pm(Tm, fm), mm.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !Qm) return this._delayedOnLoad = zm, void(this._delayedOnError = Zm);
            if (this._texture = Qm ?? this._getFromCache(this.url, wm, Dm, this._invertY, Km, this.isCube), this._texture)
              if (this._texture.isReady) Rm.c.SetImmediate((() => zm()));
              else {
                const mm = this._texture.onLoadedObservable.add(zm);
                this._texture.onErrorObservable.add((Tm => {
                  Zm(Tm.message, Tm.exception), this._texture?.onLoadedObservable.remove(mm)
                }))
              }
            else if (Jm && Jm.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = zm, this._delayedOnError = Zm;
            else {
              try {
                this._texture = cm.createTexture(this.url, wm, this._invertY, Jm, Dm, zm, Zm, this._buffer, void 0, this._format, this._forcedExtension, Ym, qm, Vm, Km)
              } catch (km) {
                throw Zm("error loading", km), km
              }
              om && (this._buffer = null)
            }
          }
          updateURL(mm) {
            let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              fm = arguments.length > 2 ? arguments[2] : void 0,
              hm = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.wG().markAllMaterialsAsDirty(1, (mm => mm.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = mm), this.url = mm, this._buffer = Tm, this._forcedExtension = hm, this.delayLoadState = 4;
            const Am = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              Am ? Am() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), fm && fm()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const mm = this.wG();
            if (!mm) return;
            let Tm = this.url;
            !Tm && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (Tm = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(Tm, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? Rm.c.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = mm.dO().createTexture(Tm, this._noMipmap, this._invertY, mm, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(mm, Tm, fm, hm) {
            mm *= this._cachedUScale, Tm *= this._cachedVScale, mm -= this.uRotationCenter * this._cachedUScale, Tm -= this.vRotationCenter * this._cachedVScale, fm -= this.wRotationCenter, xm.p.TransformCoordinatesFromFloatsToRef(mm, Tm, fm, this._rowGenerationMatrix, hm), hm.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, hm.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, hm.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * mm === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * mm, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = xm.e.Zero(), this._rowGenerationMatrix = new xm.e, this._t0 = xm.p.Zero(), this._t1 = xm.p.Zero(), this._t2 = xm.p.Zero()), xm.e.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (xm.e.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, xm.j.Matrix[0]), xm.e.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, xm.j.Matrix[1]), xm.e.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, xm.j.Matrix[2]), xm.e.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, xm.j.Matrix[3]), xm.j.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(xm.j.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(xm.j.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(xm.j.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.zhm(this._t0), this._t2.zhm(this._t0), xm.e.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const Tm = this.wG();
            if (!Tm) return this._cachedTextureMatrix;
            const fm = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && fm !== this._cachedIdentity3x2 && Tm.markAllMaterialsAsDirty(1, (mm => mm.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const Tm = this.wG();
            if (!Tm) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== mm.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === Tm.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = xm.e.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = xm.e.Zero());
            const fm = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case mm.PLANAR_MODE:
                xm.e.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case mm.PROJECTION_MODE: {
                xm.e.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const mm = Tm.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = mm.updateFlag, mm.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                xm.e.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return fm && Tm.markAllMaterialsAsDirty(1, (mm => mm.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const Tm = {
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
            return Vm.d.Clone((() => new mm(this._texture ? this._texture.url : null, this.wG(), Tm)), this)
          }
          serialize() {
            const Tm = this.name;
            mm.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const fm = super.serialize(mm._SerializeInternalTextureUniqueId);
            if (!fm) return null;
            if (mm.SerializeBuffers || mm.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) fm.base64String = this._buffer, fm.name = fm.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const mm = this.mimeType || "image/png";
              fm.base64String = `data:${mm};base64,${(0,om.g)(this._buffer)}`
            } else(mm.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (fm.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? Ym(this) : qm(this));
            return fm.invertY = this._invertY, fm.samplingMode = this.samplingMode, fm._creationFlags = this._creationFlags, fm._useSRGBBuffer = this._useSRGBBuffer, mm._SerializeInternalTextureUniqueId && (fm.internalTextureUniqueId = this._texture?.uniqueId), fm.internalTextureLabel = this._texture?.label, fm.noMipmap = this._noMipmap, this.name = Tm, fm
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(Tm, fm, hm) {
            if (Tm.customType) {
              const mm = pm.b.Instantiate(Tm.customType).Parse(Tm, fm, hm);
              return Tm.samplingMode && mm.updateSamplingMode && mm._samplingMode && mm._samplingMode !== Tm.samplingMode && mm.updateSamplingMode(Tm.samplingMode), mm
            }
            if (Tm.isCube && !Tm.isRenderTarget) return mm._CubeTextureParser(Tm, fm, hm);
            const Am = void 0 !== Tm.internalTextureUniqueId;
            if (!Tm.name && !Tm.isRenderTarget && !Am) return null;
            let am;
            if (Am) {
              const mm = fm.dO().getLoadedTexturesCache();
              for (const fm of mm)
                if (fm.uniqueId === Tm.internalTextureUniqueId) {
                  am = fm;
                  break
                }
            }
            const xm = mm => {
              if (mm && mm._texture && (mm._texture._cachedWrapU = null, mm._texture._cachedWrapV = null, mm._texture._cachedWrapR = null), Tm.samplingMode) {
                const fm = Tm.samplingMode;
                mm && mm.samplingMode !== fm && mm.updateSamplingMode(fm)
              }
              if (mm && Tm.animations)
                for (let fm = 0; fm < Tm.animations.length; fm++) {
                  const hm = Tm.animations[fm],
                    Am = (0, Dm.c)("BABYLON.Animation");
                  Am && mm.animations.push(Am.Parse(hm))
                }
              mm && mm._texture && (Am && !am && mm._texture._setUniqueId(Tm.internalTextureUniqueId), mm._texture.label = Tm.internalTextureLabel)
            };
            return Vm.d.Parse((() => {
              let Am = !0;
              if (Tm.noMipmap && (Am = !1), Tm.mirrorPlane) {
                const hm = mm._CreateMirror(Tm.name, Tm.renderTargetSize, fm, Am);
                return hm._waitingRenderList = Tm.renderList, hm.mirrorPlane = Em.d.FromArray(Tm.mirrorPlane), xm(hm), hm
              }
              if (Tm.isRenderTarget && !Tm.base64String) {
                let hm = null;
                if (Tm.isCube) {
                  if (fm.reflectionProbes)
                    for (let mm = 0; mm < fm.reflectionProbes.length; mm++) {
                      const hm = fm.reflectionProbes[mm];
                      if (hm.name === Tm.name) return hm.cubeTexture
                    }
                } else hm = mm._CreateRenderTargetTexture(Tm.name, Tm.renderTargetSize, fm, Am, Tm._creationFlags ?? 0), hm._waitingRenderList = Tm.renderList;
                return xm(hm), hm
              }
              if (Tm.isVideo) {
                const am = mm._CreateVideoTexture(hm + (Tm.url || Tm.name), hm + (Tm.src || Tm.url), fm, Am, Tm.invertY, Tm.samplingMode, Tm.settings || {});
                return xm(am), am
              } {
                let wm;
                if ("string" === typeof Tm.base64String && Tm.base64String && !am) {
                  const hm = {
                      buffer: Tm.base64String,
                      noMipmap: !Am,
                      invertY: Tm.invertY,
                      samplingMode: Tm.samplingMode,
                      useSRGBBuffer: Tm._useSRGBBuffer ?? !1,
                      creationFlags: Tm._creationFlags ?? 0,
                      onLoad: () => {
                        xm(wm)
                      }
                    },
                    am = Tm.base64String,
                    Dm = am.startsWith("data:") ? am.substring(5) : am;
                  wm = mm.CreateFromBase64String("", Dm, fm, hm), wm.name = Tm.name
                } else {
                  let Dm;
                  Dm = Tm.name && (Tm.name.indexOf("://") > 0 || Tm.name.startsWith("data:")) ? Tm.name : hm + Tm.name, Tm.url && (Tm.url.startsWith("data:") || mm.UseSerializedUrlIfAny) && (Dm = Tm.url);
                  const im = {
                    noMipmap: !Am,
                    invertY: Tm.invertY,
                    samplingMode: Tm.samplingMode,
                    useSRGBBuffer: Tm._useSRGBBuffer ?? !1,
                    creationFlags: Tm._creationFlags ?? 0,
                    onLoad: () => {
                      xm(wm)
                    },
                    internalTexture: am
                  };
                  wm = new mm(Dm, fm, im)
                }
                return wm
              }
            }), Tm, fm)
          }
          static CreateFromBase64String(Tm, fm, hm, Am, am) {
            let xm = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : mm.TRILINEAR_SAMPLINGMODE;
            return new mm("data:" + fm, hm, Am, am, xm, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, Tm, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(Tm, fm, hm) {
            let Am = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              am = arguments.length > 4 ? arguments[4] : void 0,
              xm = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              wm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : mm.TRILINEAR_SAMPLINGMODE,
              Dm = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              im = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              Rm = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              pm = arguments.length > 10 ? arguments[10] : void 0,
              Em = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== Tm.substring(0, 5) && (Tm = "data:" + Tm), new mm(Tm, hm, am, xm, wm, Dm, im, fm, Am, Rm, void 0, void 0, pm, Em)
          }
        }, (() => {
          const am = "function" === typeof Symbol && Symbol.metadata ? Object.create(Sm[Symbol.metadata] ?? null) : void 0;
          Tm = [(0, Am.J)()], fm = [(0, Am.J)()], Om = [(0, Am.J)()], Im = [(0, Am.J)()], Km = [(0, Am.J)()], Qm = [(0, Am.J)()], nm = [(0, Am.J)()], Jm = [(0, Am.J)()], cm = [(0, Am.J)()], zm = [(0, Am.J)()], Zm = [(0, Am.J)()], km = [(0, Am.J)()], bm = [(0, Am.J)()], (0, hm.g)(mm, null, bm, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: mm => "isBlocking" in mm,
              get: mm => mm.isBlocking
            },
            metadata: am
          }, null, em), (0, hm.g)(null, null, Tm, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: mm => "url" in mm,
              get: mm => mm.url,
              set: (mm, Tm) => {
                mm.url = Tm
              }
            },
            metadata: am
          }, Nm, Gm), (0, hm.g)(null, null, fm, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: mm => "uOffset" in mm,
              get: mm => mm.uOffset,
              set: (mm, Tm) => {
                mm.uOffset = Tm
              }
            },
            metadata: am
          }, Xm, Pm), (0, hm.g)(null, null, Om, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: mm => "vOffset" in mm,
              get: mm => mm.vOffset,
              set: (mm, Tm) => {
                mm.vOffset = Tm
              }
            },
            metadata: am
          }, Hm, ym), (0, hm.g)(null, null, Im, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: mm => "uScale" in mm,
              get: mm => mm.uScale,
              set: (mm, Tm) => {
                mm.uScale = Tm
              }
            },
            metadata: am
          }, Cm, rm), (0, hm.g)(null, null, Km, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: mm => "vScale" in mm,
              get: mm => mm.vScale,
              set: (mm, Tm) => {
                mm.vScale = Tm
              }
            },
            metadata: am
          }, sm, lm), (0, hm.g)(null, null, Qm, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: mm => "uAng" in mm,
              get: mm => mm.uAng,
              set: (mm, Tm) => {
                mm.uAng = Tm
              }
            },
            metadata: am
          }, Mm, um), (0, hm.g)(null, null, nm, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: mm => "vAng" in mm,
              get: mm => mm.vAng,
              set: (mm, Tm) => {
                mm.vAng = Tm
              }
            },
            metadata: am
          }, Bm, Lm), (0, hm.g)(null, null, Jm, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: mm => "wAng" in mm,
              get: mm => mm.wAng,
              set: (mm, Tm) => {
                mm.wAng = Tm
              }
            },
            metadata: am
          }, tm, Um), (0, hm.g)(null, null, cm, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: mm => "uRotationCenter" in mm,
              get: mm => mm.uRotationCenter,
              set: (mm, Tm) => {
                mm.uRotationCenter = Tm
              }
            },
            metadata: am
          }, dm, gm), (0, hm.g)(null, null, zm, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: mm => "vRotationCenter" in mm,
              get: mm => mm.vRotationCenter,
              set: (mm, Tm) => {
                mm.vRotationCenter = Tm
              }
            },
            metadata: am
          }, Wm, Fm), (0, hm.g)(null, null, Zm, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: mm => "wRotationCenter" in mm,
              get: mm => mm.wRotationCenter,
              set: (mm, Tm) => {
                mm.wRotationCenter = Tm
              }
            },
            metadata: am
          }, mT, TT), (0, hm.g)(null, null, km, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: mm => "homogeneousRotationInUVTransform" in mm,
              get: mm => mm.homogeneousRotationInUVTransform,
              set: (mm, Tm) => {
                mm.homogeneousRotationInUVTransform = Tm
              }
            },
            metadata: am
          }, fT, hT), am && Object.defineProperty(mm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: am
          })
        })(), mm.SerializeBuffers = !0, mm.ForceSerializeBuffers = !1, mm.OnTextureLoadErrorObservable = new am.c, mm._SerializeInternalTextureUniqueId = !1, mm._CubeTextureParser = (mm, Tm, fm) => {
          throw (0, im.i)("CubeTexture")
        }, mm._CreateMirror = (mm, Tm, fm, hm) => {
          throw (0, im.i)("MirrorTexture")
        }, mm._CreateRenderTargetTexture = (mm, Tm, fm, hm, Am) => {
          throw (0, im.i)("RenderTargetTexture")
        }, mm.NEAREST_SAMPLINGMODE = 1, mm.NEAREST_NEAREST_MIPLINEAR = 8, mm.BILINEAR_SAMPLINGMODE = 2, mm.LINEAR_LINEAR_MIPNEAREST = 11, mm.TRILINEAR_SAMPLINGMODE = 3, mm.LINEAR_LINEAR_MIPLINEAR = 3, mm.NEAREST_NEAREST_MIPNEAREST = 4, mm.NEAREST_LINEAR_MIPNEAREST = 5, mm.NEAREST_LINEAR_MIPLINEAR = 6, mm.NEAREST_LINEAR = 7, mm.NEAREST_NEAREST = 1, mm.LINEAR_NEAREST_MIPNEAREST = 9, mm.LINEAR_NEAREST_MIPLINEAR = 10, mm.LINEAR_LINEAR = 2, mm.LINEAR_NEAREST = 12, mm.EXPLICIT_MODE = 0, mm.SPHERICAL_MODE = 1, mm.PLANAR_MODE = 2, mm.CUBIC_MODE = 3, mm.PROJECTION_MODE = 4, mm.SKYBOX_MODE = 5, mm.INVCUBIC_MODE = 6, mm.EQUIRECTANGULAR_MODE = 7, mm.FIXED_EQUIRECTANGULAR_MODE = 8, mm.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, mm.CLAMP_ADDRESSMODE = 0, mm.WRAP_ADDRESSMODE = 1, mm.MIRROR_ADDRESSMODE = 2, mm.UseSerializedUrlIfAny = !1, mm
      })(),
      Km = !1;

    function Qm() {
      Km || (Km = !0, (0, Dm.d)("BABYLON.Texture", Im), Vm.d._TextureParser = Im.Parse)
    }
  },
  40127: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm
    });
    class hm {
      constructor(mm, Tm) {
        this.width = mm, this.height = Tm
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let mm = 0 | this.width;
        return mm = 397 * mm ^ this.height, mm
      }
      ZZ(mm) {
        this.width = mm.width, this.height = mm.height
      }
      Z8(mm, Tm) {
        return this.width = mm, this.height = Tm, this
      }
      set(mm, Tm) {
        return this.Z8(mm, Tm)
      }
      multiplyByFloats(mm, Tm) {
        return new hm(this.width * mm, this.height * Tm)
      }
      clone() {
        return new hm(this.width, this.height)
      }
      equals(mm) {
        return !!mm && (this.width === mm.width && this.height === mm.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new hm(0, 0)
      }
      add(mm) {
        return new hm(this.width + mm.width, this.height + mm.height)
      }
      subtract(mm) {
        return new hm(this.width - mm.width, this.height - mm.height)
      }
      scale(mm) {
        return new hm(this.width * mm, this.height * mm)
      }
      static Lerp(mm, Tm, fm) {
        const Am = mm.width + (Tm.width - mm.width) * fm,
          am = mm.height + (Tm.height - mm.height) * fm;
        return new hm(Am, am)
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);