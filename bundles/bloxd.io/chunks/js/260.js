export const id = 260;
export const ids = [260];
export const modules = {
  40628: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot
    });
    let Ot = !1
  },
  40202: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => ft
    });
    var Ot = Vt(40211),
      qt = Vt(40213),
      Dt = Vt(37367),
      mt = Vt(37336),
      dt = Vt(37359),
      jt = Vt(38159),
      Ht = Vt(40222);
    class Xt {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(tt) {
        this._wrapU = tt
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(tt) {
        this._wrapV = tt
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(tt) {
        this._texture && (this._texture.isCube = tt)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(tt) {
        this._texture && (this._texture.is3D = tt)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(tt) {
        this._texture && (this._texture.is2DArray = tt)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(tt) {
        return void 0 !== tt?.shareDepth
      }
      constructor(tt) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = Ht.e.Zero(), this._cachedBaseSize = Ht.e.Zero(), this._initialSamplingMode = 2, this._texture = Xt._IsRenderTargetWrapper(tt) ? tt.texture : tt, this._texture && (this._engine = this._texture.Jf(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(tt, this._texture, this._texture.generateMipMaps && et)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var Qt, lt = Vt(40230),
      Et = Vt(40080);
    let ft = (() => {
      var tt;
      let et, Vt, Ht, Qt, Et, ft, wt, yt, Nt, Mt, bt, Jt, Ct, ut, Kt, ht, vt, Wt, St, ct, Rt, It, Pt, Zt, Lt, Ft = Xt,
        kt = [],
        Gt = [],
        zt = [],
        ot = [],
        rt = [],
        Ut = [],
        At = [],
        it = [],
        Yt = [],
        Bt = [],
        pt = [],
        xt = [],
        Tt = [],
        gt = [],
        st = [],
        nt = [],
        te = [],
        ee = [],
        Ve = [],
        Oe = [],
        qe = [],
        De = [],
        me = [],
        de = [],
        je = [],
        He = [],
        Xe = [],
        Qe = [],
        le = [],
        Ee = [],
        fe = [];
      return tt = class extends Ft {
        set hasAlpha(tt) {
          this._hasAlpha = tt
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(tt) {
          this._getAlphaFromRGB !== tt && (this._getAlphaFromRGB = tt, this._scene && this._scene.markAllMaterialsAsDirty(1, (tt => tt.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(tt) {
          this._coordinatesIndex !== tt && (this._coordinatesIndex = tt, this._scene && this._scene.markAllMaterialsAsDirty(1, (tt => tt.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(tt) {
          this._coordinatesMode !== tt && (this._coordinatesMode = tt, this._scene && this._scene.markAllMaterialsAsDirty(1, (tt => tt.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(tt) {
          this._wrapU = tt
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(tt) {
          this._wrapV = tt
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(tt) {
          this._texture ? this._texture.isCube = tt : this._isCube = tt
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(tt) {
          this._texture && (this._texture.is3D = tt)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(tt) {
          this._texture && (this._texture.is2DArray = tt)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(tt) {
          if (this._texture) {
            if (this._texture._gammaSpace === tt) return;
            this._texture._gammaSpace = tt
          } else {
            if (this._gammaSpace === tt) return;
            this._gammaSpace = tt
          }
          this.vI()?.markAllMaterialsAsDirty(1, (tt => tt.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(tt) {
          tt !== this.isRGBD && (this._texture && (this._texture._isRGBD = tt), this.vI()?.markAllMaterialsAsDirty(1, (tt => tt.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(tt) {
          this._texture && (this._texture._lodGenerationOffset = tt)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(tt) {
          this._texture && (this._texture._lodGenerationScale = tt)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(tt) {
          this._texture && (this._texture._linearSpecularLOD = tt)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(tt) {
          this._texture && (this._texture._irradianceTexture = tt)
        }
        get uid() {
          return this._uid || (this._uid = (0, jt.b)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(tt) {
          this._onDisposeObserver && this.ZI.remove(this._onDisposeObserver), this._onDisposeObserver = this.ZI.add(tt)
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
        constructor(et) {
          let Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, Ot.m)(this, kt), (0, Ot.m)(this, Gt, void 0)), this.name = ((0, Ot.m)(this, zt), (0, Ot.m)(this, ot, void 0)), this.displayName = ((0, Ot.m)(this, rt), (0, Ot.m)(this, Ut, void 0)), this.metadata = ((0, Ot.m)(this, At), (0, Ot.m)(this, it, null)), this._internalMetadata = (0, Ot.m)(this, Yt), this.reservedDataStore = null, this._hasAlpha = (0, Ot.m)(this, Bt, !1), this._getAlphaFromRGB = ((0, Ot.m)(this, pt), (0, Ot.m)(this, xt, !1)), this.level = ((0, Ot.m)(this, Tt), (0, Ot.m)(this, gt, 1)), this._coordinatesIndex = ((0, Ot.m)(this, st), (0, Ot.m)(this, nt, 0)), this.optimizeUVAllocation = ((0, Ot.m)(this, te), (0, Ot.m)(this, ee, !0)), this._coordinatesMode = ((0, Ot.m)(this, Ve), (0, Ot.m)(this, Oe, 0)), this.wrapR = ((0, Ot.m)(this, qe), (0, Ot.m)(this, De, 1)), this.anisotropicFilteringLevel = ((0, Ot.m)(this, me), (0, Ot.m)(this, de, tt.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, Ot.m)(this, je), !1), this._gammaSpace = !0, this.invertZ = (0, Ot.m)(this, He, !1), this.lodLevelInAlpha = ((0, Ot.m)(this, Xe), (0, Ot.m)(this, Qe, !1)), this._dominantDirection = ((0, Ot.m)(this, le), null), this.isRenderTarget = (0, Ot.m)(this, Ee, !1), this._prefiltered = ((0, Ot.m)(this, fe), !1), this._forceSerialize = !1, this.animations = [], this.ZI = new Dt.c, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, et ? tt._IsScene(et) ? this._scene = et : this._engine = et : this._scene = dt.d.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.Jf()), this._texture = Vt, this._uid = null
        }
        vI() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return mt.c.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return mt.c.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(tt) {}
        get canRescale() {
          return !1
        }
        _getFromCache(tt, et, Vt, Ot, qt, Dt) {
          const mt = this._getEngine();
          if (!mt) return null;
          const dt = mt._getUseSRGBBuffer(!!qt, et),
            jt = mt.getLoadedTexturesCache();
          for (let Ht = 0; Ht < jt.length; Ht++) {
            const mt = jt[Ht];
            if ((void 0 === qt || dt === mt._useSRGBBuffer) && (void 0 === Ot || Ot === mt.invertY) && mt.url === tt && mt.generateMipMaps === !et && (!Vt || Vt === mt.samplingMode) && (void 0 === Dt || Dt === mt.isCube)) return mt.incrementReferences(), mt
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
          const tt = this.vI();
          tt && tt.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Ot = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            qt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            mt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            dt = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            jt = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const Ht = this._getEngine();
          if (!Ht) return null;
          const Xt = this.getSize();
          let Qt = Xt.width,
            lt = Xt.height;
          0 !== et && (Qt /= Math.pow(2, et), lt /= Math.pow(2, et), Qt = Math.round(Qt), lt = Math.round(lt)), dt = Math.min(Qt, dt), jt = Math.min(lt, jt);
          try {
            return this._texture.isCube || this._texture.is2DArray ? Ht._readTexturePixels(this._texture, dt, jt, tt, et, Vt, Ot, qt, Dt, mt) : Ht._readTexturePixels(this._texture, dt, jt, -1, et, Vt, Ot, qt, Dt, mt)
          } catch (Et) {
            return null
          }
        }
        _readPixelsSync() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Ot = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            qt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const Dt = this.getSize();
          let mt = Dt.width,
            dt = Dt.height;
          const jt = this._getEngine();
          if (!jt) return null;
          0 != et && (mt /= Math.pow(2, et), dt /= Math.pow(2, et), mt = Math.round(mt), dt = Math.round(dt));
          try {
            return this._texture.isCube ? jt._readTexturePixelsSync(this._texture, mt, dt, tt, et, Vt, Ot, qt) : jt._readTexturePixelsSync(this._texture, mt, dt, -1, et, Vt, Ot, qt)
          } catch (Ht) {
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
            const tt = this._scene.textures.indexOf(this);
            if (tt >= 0 && this._scene.textures.splice(tt, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const tt = this._parentContainer.textures.indexOf(this);
              tt > -1 && this._parentContainer.textures.splice(tt, 1), this._parentContainer = null
            }
          }
          this.ZI.notifyObservers(this), this.ZI.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !tt) return null;
          const et = lt.d.Serialize(this);
          return lt.d.AppendSerializedAnimations(this, et), et
        }
        static WhenAllReady(tt, et) {
          let Vt = tt.length;
          if (0 !== Vt)
            for (let Ot = 0; Ot < tt.length; Ot++) {
              const qt = tt[Ot];
              if (qt.isReady()) 0 === --Vt && et();
              else {
                const tt = qt.onLoadObservable;
                tt ? tt.addOnce((() => {
                  0 === --Vt && et()
                })) : 0 === --Vt && et()
              }
            } else et()
        }
        static _IsScene(tt) {
          return "Scene" === tt.getClassName()
        }
      }, (() => {
        const Dt = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ft[Symbol.metadata] ?? null) : void 0;
        et = [(0, qt.P)()], Vt = [(0, qt.P)()], Ht = [(0, qt.P)()], Qt = [(0, qt.P)()], Et = [(0, qt.P)("hasAlpha")], ft = [(0, qt.P)("getAlphaFromRGB")], wt = [(0, qt.P)()], yt = [(0, qt.P)("coordinatesIndex")], Nt = [(0, qt.P)()], Mt = [(0, qt.P)("coordinatesMode")], bt = [(0, qt.P)()], Jt = [(0, qt.P)()], Ct = [(0, qt.P)()], ut = [(0, qt.P)()], Kt = [(0, qt.P)()], ht = [(0, qt.P)()], vt = [(0, qt.P)()], Wt = [(0, qt.P)()], St = [(0, qt.P)()], ct = [(0, qt.P)()], Rt = [(0, qt.P)()], It = [(0, qt.P)()], Pt = [(0, qt.P)()], Zt = [(0, qt.E)()], Lt = [(0, qt.P)()], (0, Ot.l)(tt, null, bt, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: tt => "wrapU" in tt,
            get: tt => tt.wrapU
          },
          metadata: Dt
        }, null, kt), (0, Ot.l)(tt, null, Jt, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: tt => "wrapV" in tt,
            get: tt => tt.wrapV
          },
          metadata: Dt
        }, null, kt), (0, Ot.l)(tt, null, Kt, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: tt => "isCube" in tt,
            get: tt => tt.isCube
          },
          metadata: Dt
        }, null, kt), (0, Ot.l)(tt, null, ht, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: tt => "is3D" in tt,
            get: tt => tt.is3D
          },
          metadata: Dt
        }, null, kt), (0, Ot.l)(tt, null, vt, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: tt => "is2DArray" in tt,
            get: tt => tt.is2DArray
          },
          metadata: Dt
        }, null, kt), (0, Ot.l)(tt, null, Wt, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: tt => "gammaSpace" in tt,
            get: tt => tt.gammaSpace
          },
          metadata: Dt
        }, null, kt), (0, Ot.l)(tt, null, Rt, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: tt => "lodGenerationOffset" in tt,
            get: tt => tt.lodGenerationOffset
          },
          metadata: Dt
        }, null, kt), (0, Ot.l)(tt, null, It, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: tt => "lodGenerationScale" in tt,
            get: tt => tt.lodGenerationScale
          },
          metadata: Dt
        }, null, kt), (0, Ot.l)(tt, null, Pt, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: tt => "linearSpecularLOD" in tt,
            get: tt => tt.linearSpecularLOD
          },
          metadata: Dt
        }, null, kt), (0, Ot.l)(tt, null, Zt, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "irradianceTexture" in tt,
            get: tt => tt.irradianceTexture
          },
          metadata: Dt
        }, null, kt), (0, Ot.l)(null, null, et, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: tt => "uniqueId" in tt,
            get: tt => tt.uniqueId,
            set: (tt, et) => {
              tt.uniqueId = et
            }
          },
          metadata: Dt
        }, Gt, zt), (0, Ot.l)(null, null, Vt, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: tt => "name" in tt,
            get: tt => tt.name,
            set: (tt, et) => {
              tt.name = et
            }
          },
          metadata: Dt
        }, ot, rt), (0, Ot.l)(null, null, Ht, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: tt => "displayName" in tt,
            get: tt => tt.displayName,
            set: (tt, et) => {
              tt.displayName = et
            }
          },
          metadata: Dt
        }, Ut, At), (0, Ot.l)(null, null, Qt, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: tt => "metadata" in tt,
            get: tt => tt.metadata,
            set: (tt, et) => {
              tt.metadata = et
            }
          },
          metadata: Dt
        }, it, Yt), (0, Ot.l)(null, null, Et, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: tt => "_hasAlpha" in tt,
            get: tt => tt._hasAlpha,
            set: (tt, et) => {
              tt._hasAlpha = et
            }
          },
          metadata: Dt
        }, Bt, pt), (0, Ot.l)(null, null, ft, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: tt => "_getAlphaFromRGB" in tt,
            get: tt => tt._getAlphaFromRGB,
            set: (tt, et) => {
              tt._getAlphaFromRGB = et
            }
          },
          metadata: Dt
        }, xt, Tt), (0, Ot.l)(null, null, wt, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: tt => "level" in tt,
            get: tt => tt.level,
            set: (tt, et) => {
              tt.level = et
            }
          },
          metadata: Dt
        }, gt, st), (0, Ot.l)(null, null, yt, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: tt => "_coordinatesIndex" in tt,
            get: tt => tt._coordinatesIndex,
            set: (tt, et) => {
              tt._coordinatesIndex = et
            }
          },
          metadata: Dt
        }, nt, te), (0, Ot.l)(null, null, Nt, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: tt => "optimizeUVAllocation" in tt,
            get: tt => tt.optimizeUVAllocation,
            set: (tt, et) => {
              tt.optimizeUVAllocation = et
            }
          },
          metadata: Dt
        }, ee, Ve), (0, Ot.l)(null, null, Mt, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: tt => "_coordinatesMode" in tt,
            get: tt => tt._coordinatesMode,
            set: (tt, et) => {
              tt._coordinatesMode = et
            }
          },
          metadata: Dt
        }, Oe, qe), (0, Ot.l)(null, null, Ct, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: tt => "wrapR" in tt,
            get: tt => tt.wrapR,
            set: (tt, et) => {
              tt.wrapR = et
            }
          },
          metadata: Dt
        }, De, me), (0, Ot.l)(null, null, ut, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: tt => "anisotropicFilteringLevel" in tt,
            get: tt => tt.anisotropicFilteringLevel,
            set: (tt, et) => {
              tt.anisotropicFilteringLevel = et
            }
          },
          metadata: Dt
        }, de, je), (0, Ot.l)(null, null, St, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: tt => "invertZ" in tt,
            get: tt => tt.invertZ,
            set: (tt, et) => {
              tt.invertZ = et
            }
          },
          metadata: Dt
        }, He, Xe), (0, Ot.l)(null, null, ct, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: tt => "lodLevelInAlpha" in tt,
            get: tt => tt.lodLevelInAlpha,
            set: (tt, et) => {
              tt.lodLevelInAlpha = et
            }
          },
          metadata: Dt
        }, Qe, le), (0, Ot.l)(null, null, Lt, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: tt => "isRenderTarget" in tt,
            get: tt => tt.isRenderTarget,
            set: (tt, et) => {
              tt.isRenderTarget = et
            }
          },
          metadata: Dt
        }, Ee, fe), Dt && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Dt
        })
      })(), tt.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, tt
    })();
    (Qt = ft.prototype).forceSphericalPolynomialsRecompute ?? (Qt.forceSphericalPolynomialsRecompute = (0, Et.d)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(ft.prototype, "sphericalPolynomial") || Object.defineProperty(ft.prototype, "sphericalPolynomial", (0, Et.c)("BaseTexture", "sphericalPolynomial"))
  },
  40661: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ct,
      f: () => bt
    });
    var Ot = Vt(40211),
      qt = Vt(40213),
      Dt = Vt(37367),
      mt = Vt(37336),
      dt = Vt(40202),
      jt = Vt(37390),
      Ht = Vt(40080),
      Xt = Vt(40085),
      Qt = Vt(40307),
      lt = Vt(38016),
      Et = Vt(40261);

    function ft(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Ot = et.width,
        qt = et.height;
      if (tt instanceof Float32Array) {
        let et = tt.byteLength / tt.BYTES_PER_ELEMENT;
        const Vt = new Uint8Array(et);
        for (; --et >= 0;) {
          let Ot = tt[et];
          Ot < 0 ? Ot = 0 : Ot > 1 && (Ot = 1), Vt[et] = 255 * Ot
        }
        tt = Vt
      }
      const Dt = document.createElement("canvas");
      Dt.width = Ot, Dt.height = qt;
      const mt = Dt.getContext("2d");
      if (!mt) return null;
      const dt = mt.createImageData(Ot, qt);
      if (dt.data.set(tt), mt.putImageData(dt, 0, 0), Vt) {
        const tt = document.createElement("canvas");
        tt.width = Ot, tt.height = qt;
        const et = tt.getContext("2d");
        return et ? (et.translate(0, qt), et.scale(1, -1), et.drawImage(Dt, 0, 0), tt.toDataURL("image/png")) : null
      }
      return Dt.toDataURL("image/png")
    }

    function wt(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Ot = tt.getInternalTexture();
      if (!Ot) return null;
      const qt = tt._readPixelsSync(et, Vt);
      return qt ? ft(qt, tt.getSize(), Ot.invertY) : null
    }
    async function yt(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Ot = tt.getInternalTexture();
      if (!Ot) return null;
      const qt = await tt.readPixels(et, Vt);
      return qt ? ft(qt, tt.getSize(), Ot.invertY) : null
    }
    var Nt = Vt(40628),
      Mt = Vt(40230);
    let bt = (() => {
        var tt;
        let et, Vt, ft, bt, Jt, Ct, ut, Kt, ht, vt, Wt, St, ct, Rt = dt.b,
          It = [],
          Pt = [],
          Zt = [],
          Lt = [],
          Ft = [],
          kt = [],
          Gt = [],
          zt = [],
          ot = [],
          rt = [],
          Ut = [],
          At = [],
          it = [],
          Yt = [],
          Bt = [],
          pt = [],
          xt = [],
          Tt = [],
          gt = [],
          st = [],
          nt = [],
          te = [],
          ee = [],
          Ve = [],
          Oe = [];
        return tt = class extends Rt {
          static _CreateVideoTexture(et, Vt, Ot) {
            arguments.length > 5 && void 0 !== arguments[5] || tt.TRILINEAR_SAMPLINGMODE;
            throw (0, Ht.e)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(tt) {
            this._isBlocking = tt
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(et, Vt, qt, mt) {
            let dt, jt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : tt.TRILINEAR_SAMPLINGMODE,
              Ht = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Qt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              lt = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Et = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              ft = arguments.length > 9 ? arguments[9] : void 0,
              wt = arguments.length > 10 ? arguments[10] : void 0,
              yt = arguments.length > 11 ? arguments[11] : void 0,
              Mt = arguments.length > 12 ? arguments[12] : void 0,
              bt = arguments.length > 13 ? arguments[13] : void 0;
            super(Vt), this.url = ((0, Ot.m)(this, It), (0, Ot.m)(this, Pt, null)), this.uOffset = ((0, Ot.m)(this, Zt), (0, Ot.m)(this, Lt, 0)), this.vOffset = ((0, Ot.m)(this, Ft), (0, Ot.m)(this, kt, 0)), this.uScale = ((0, Ot.m)(this, Gt), (0, Ot.m)(this, zt, 1)), this.vScale = ((0, Ot.m)(this, ot), (0, Ot.m)(this, rt, 1)), this.uAng = ((0, Ot.m)(this, Ut), (0, Ot.m)(this, At, 0)), this.vAng = ((0, Ot.m)(this, it), (0, Ot.m)(this, Yt, 0)), this.wAng = ((0, Ot.m)(this, Bt), (0, Ot.m)(this, pt, 0)), this.uRotationCenter = ((0, Ot.m)(this, xt), (0, Ot.m)(this, Tt, .5)), this.vRotationCenter = ((0, Ot.m)(this, gt), (0, Ot.m)(this, st, .5)), this.wRotationCenter = ((0, Ot.m)(this, nt), (0, Ot.m)(this, te, .5)), this.homogeneousRotationInUVTransform = ((0, Ot.m)(this, ee), (0, Ot.m)(this, Ve, !1)), this.inspectableCustomProperties = ((0, Ot.m)(this, Oe), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new Dt.c, this._isBlocking = !0, this.name = et || "", this.url = et;
            let Jt = !1,
              Ct = null,
              ut = !0;
            "object" === typeof qt && null !== qt ? (dt = qt.noMipmap ?? !1, mt = qt.invertY ?? !Nt.b, jt = qt.samplingMode ?? tt.TRILINEAR_SAMPLINGMODE, Ht = qt.onLoad ?? null, Qt = qt.onError ?? null, lt = qt.buffer ?? null, Et = qt.deleteBuffer ?? !1, ft = qt.format, wt = qt.mimeType, yt = qt.loaderOptions, Mt = qt.creationFlags, Jt = qt.useSRGBBuffer ?? !1, Ct = qt.internalTexture ?? null, ut = qt.gammaSpace ?? ut, bt = qt.forcedExtension ?? bt) : dt = !!qt, this._gammaSpace = ut, this._noMipmap = dt, this._invertY = void 0 === mt ? !Nt.b : mt, this._initialSamplingMode = jt, this._buffer = lt, this._deleteBuffer = Et, this._mimeType = wt, this._loaderOptions = yt, this._creationFlags = Mt, this._useSRGBBuffer = Jt, this._forcedExtension = bt, void 0 !== ft && (this._format = ft);
            const Kt = this.vI(),
              ht = this._getEngine();
            if (!ht) return;
            ht.onBeforeTextureInitObservable.notifyObservers(this);
            const vt = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), Ht && Ht(), !this.isBlocking && Kt && Kt.resetCachedMaterial()
              },
              Wt = (et, Vt) => {
                this._loadingError = !0, this._errorObject = {
                  message: et,
                  exception: Vt
                }, Qt && Qt(et, Vt), tt.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !Ct) return this._delayedOnLoad = vt, void(this._delayedOnError = Wt);
            if (this._texture = Ct ?? this._getFromCache(this.url, dt, jt, this._invertY, Jt, this.isCube), this._texture)
              if (this._texture.isReady) Xt.c.SetImmediate((() => vt()));
              else {
                const tt = this._texture.onLoadedObservable.add(vt);
                this._texture.onErrorObservable.add((et => {
                  Wt(et.message, et.exception), this._texture?.onLoadedObservable.remove(tt)
                }))
              }
            else if (Kt && Kt.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = vt, this._delayedOnError = Wt;
            else {
              try {
                this._texture = ht.createTexture(this.url, dt, this._invertY, Kt, jt, vt, Wt, this._buffer, void 0, this._format, this._forcedExtension, wt, yt, Mt, Jt)
              } catch (St) {
                throw Wt("error loading", St), St
              }
              Et && (this._buffer = null)
            }
          }
          updateURL(tt) {
            let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Vt = arguments.length > 2 ? arguments[2] : void 0,
              Ot = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.vI().markAllMaterialsAsDirty(1, (tt => tt.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = tt), this.url = tt, this._buffer = et, this._forcedExtension = Ot, this.delayLoadState = 4;
            const qt = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              qt ? qt() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), Vt && Vt()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const tt = this.vI();
            if (!tt) return;
            let et = this.url;
            !et && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (et = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(et, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? Xt.c.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = tt.Jf().createTexture(et, this._noMipmap, this._invertY, tt, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(tt, et, Vt, Ot) {
            tt *= this._cachedUScale, et *= this._cachedVScale, tt -= this.uRotationCenter * this._cachedUScale, et -= this.vRotationCenter * this._cachedVScale, Vt -= this.wRotationCenter, mt.n.TransformCoordinatesFromFloatsToRef(tt, et, Vt, this._rowGenerationMatrix, Ot), Ot.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, Ot.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, Ot.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * tt === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * tt, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = mt.c.Zero(), this._rowGenerationMatrix = new mt.c, this._t0 = mt.n.Zero(), this._t1 = mt.n.Zero(), this._t2 = mt.n.Zero()), mt.c.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (mt.c.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, mt.k.Matrix[0]), mt.c.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, mt.k.Matrix[1]), mt.c.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, mt.k.Matrix[2]), mt.c.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, mt.k.Matrix[3]), mt.k.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(mt.k.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(mt.k.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(mt.k.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.qqt(this._t0), this._t2.qqt(this._t0), mt.c.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const et = this.vI();
            if (!et) return this._cachedTextureMatrix;
            const Vt = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && Vt !== this._cachedIdentity3x2 && et.markAllMaterialsAsDirty(1, (tt => tt.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const et = this.vI();
            if (!et) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== tt.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === et.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = mt.c.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = mt.c.Zero());
            const Vt = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case tt.PLANAR_MODE:
                mt.c.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case tt.PROJECTION_MODE: {
                mt.c.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const tt = et.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = tt.updateFlag, tt.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                mt.c.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return Vt && et.markAllMaterialsAsDirty(1, (tt => tt.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const et = {
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
            return Mt.d.Clone((() => new tt(this._texture ? this._texture.url : null, this.vI(), et)), this)
          }
          serialize() {
            const et = this.name;
            tt.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const Vt = super.serialize(tt._SerializeInternalTextureUniqueId);
            if (!Vt) return null;
            if (tt.SerializeBuffers || tt.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) Vt.base64String = this._buffer, Vt.name = Vt.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const tt = this.mimeType || "image/png";
              Vt.base64String = `data:${tt};base64,${(0,Et.j)(this._buffer)}`
            } else(tt.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (Vt.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? wt(this) : yt(this));
            return Vt.invertY = this._invertY, Vt.samplingMode = this.samplingMode, Vt._creationFlags = this._creationFlags, Vt._useSRGBBuffer = this._useSRGBBuffer, tt._SerializeInternalTextureUniqueId && (Vt.internalTextureUniqueId = this._texture?.uniqueId), Vt.internalTextureLabel = this._texture?.label, Vt.noMipmap = this._noMipmap, this.name = et, Vt
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(et, Vt, Ot) {
            if (et.customType) {
              const tt = Qt.d.Instantiate(et.customType).Parse(et, Vt, Ot);
              return et.samplingMode && tt.updateSamplingMode && tt._samplingMode && tt._samplingMode !== et.samplingMode && tt.updateSamplingMode(et.samplingMode), tt
            }
            if (et.isCube && !et.isRenderTarget) return tt._CubeTextureParser(et, Vt, Ot);
            const qt = void 0 !== et.internalTextureUniqueId;
            if (!et.name && !et.isRenderTarget && !qt) return null;
            let Dt;
            if (qt) {
              const tt = Vt.Jf().getLoadedTexturesCache();
              for (const Vt of tt)
                if (Vt.uniqueId === et.internalTextureUniqueId) {
                  Dt = Vt;
                  break
                }
            }
            const mt = tt => {
              if (tt && tt._texture && (tt._texture._cachedWrapU = null, tt._texture._cachedWrapV = null, tt._texture._cachedWrapR = null), et.samplingMode) {
                const Vt = et.samplingMode;
                tt && tt.samplingMode !== Vt && tt.updateSamplingMode(Vt)
              }
              if (tt && et.animations)
                for (let Vt = 0; Vt < et.animations.length; Vt++) {
                  const Ot = et.animations[Vt],
                    qt = (0, jt.e)("BABYLON.Animation");
                  qt && tt.animations.push(qt.Parse(Ot))
                }
              tt && tt._texture && (qt && !Dt && tt._texture._setUniqueId(et.internalTextureUniqueId), tt._texture.label = et.internalTextureLabel)
            };
            return Mt.d.Parse((() => {
              let qt = !0;
              if (et.noMipmap && (qt = !1), et.mirrorPlane) {
                const Ot = tt._CreateMirror(et.name, et.renderTargetSize, Vt, qt);
                return Ot._waitingRenderList = et.renderList, Ot.mirrorPlane = lt.b.FromArray(et.mirrorPlane), mt(Ot), Ot
              }
              if (et.isRenderTarget && !et.base64String) {
                let Ot = null;
                if (et.isCube) {
                  if (Vt.reflectionProbes)
                    for (let tt = 0; tt < Vt.reflectionProbes.length; tt++) {
                      const Ot = Vt.reflectionProbes[tt];
                      if (Ot.name === et.name) return Ot.cubeTexture
                    }
                } else Ot = tt._CreateRenderTargetTexture(et.name, et.renderTargetSize, Vt, qt, et._creationFlags ?? 0), Ot._waitingRenderList = et.renderList;
                return mt(Ot), Ot
              }
              if (et.isVideo) {
                const Dt = tt._CreateVideoTexture(Ot + (et.url || et.name), Ot + (et.src || et.url), Vt, qt, et.invertY, et.samplingMode, et.settings || {});
                return mt(Dt), Dt
              } {
                let dt;
                if ("string" === typeof et.base64String && et.base64String && !Dt) {
                  const Ot = {
                      buffer: et.base64String,
                      noMipmap: !qt,
                      invertY: et.invertY,
                      samplingMode: et.samplingMode,
                      useSRGBBuffer: et._useSRGBBuffer ?? !1,
                      creationFlags: et._creationFlags ?? 0,
                      onLoad: () => {
                        mt(dt)
                      }
                    },
                    Dt = et.base64String,
                    jt = Dt.startsWith("data:") ? Dt.substring(5) : Dt;
                  dt = tt.CreateFromBase64String("", jt, Vt, Ot), dt.name = et.name
                } else {
                  let jt;
                  jt = et.name && (et.name.indexOf("://") > 0 || et.name.startsWith("data:")) ? et.name : Ot + et.name, et.url && (et.url.startsWith("data:") || tt.UseSerializedUrlIfAny) && (jt = et.url);
                  const Ht = {
                    noMipmap: !qt,
                    invertY: et.invertY,
                    samplingMode: et.samplingMode,
                    useSRGBBuffer: et._useSRGBBuffer ?? !1,
                    creationFlags: et._creationFlags ?? 0,
                    onLoad: () => {
                      mt(dt)
                    },
                    internalTexture: Dt
                  };
                  dt = new tt(jt, Vt, Ht)
                }
                return dt
              }
            }), et, Vt)
          }
          static CreateFromBase64String(et, Vt, Ot, qt, Dt) {
            let mt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : tt.TRILINEAR_SAMPLINGMODE;
            return new tt("data:" + Vt, Ot, qt, Dt, mt, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, et, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(et, Vt, Ot) {
            let qt = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Dt = arguments.length > 4 ? arguments[4] : void 0,
              mt = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              dt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : tt.TRILINEAR_SAMPLINGMODE,
              jt = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Ht = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              Xt = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              Qt = arguments.length > 10 ? arguments[10] : void 0,
              lt = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== et.substring(0, 5) && (et = "data:" + et), new tt(et, Ot, Dt, mt, dt, jt, Ht, Vt, qt, Xt, void 0, void 0, Qt, lt)
          }
        }, (() => {
          const Dt = "function" === typeof Symbol && Symbol.metadata ? Object.create(Rt[Symbol.metadata] ?? null) : void 0;
          et = [(0, qt.P)()], Vt = [(0, qt.P)()], ft = [(0, qt.P)()], bt = [(0, qt.P)()], Jt = [(0, qt.P)()], Ct = [(0, qt.P)()], ut = [(0, qt.P)()], Kt = [(0, qt.P)()], ht = [(0, qt.P)()], vt = [(0, qt.P)()], Wt = [(0, qt.P)()], St = [(0, qt.P)()], ct = [(0, qt.P)()], (0, Ot.l)(tt, null, ct, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: tt => "isBlocking" in tt,
              get: tt => tt.isBlocking
            },
            metadata: Dt
          }, null, It), (0, Ot.l)(null, null, et, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: tt => "url" in tt,
              get: tt => tt.url,
              set: (tt, et) => {
                tt.url = et
              }
            },
            metadata: Dt
          }, Pt, Zt), (0, Ot.l)(null, null, Vt, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: tt => "uOffset" in tt,
              get: tt => tt.uOffset,
              set: (tt, et) => {
                tt.uOffset = et
              }
            },
            metadata: Dt
          }, Lt, Ft), (0, Ot.l)(null, null, ft, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: tt => "vOffset" in tt,
              get: tt => tt.vOffset,
              set: (tt, et) => {
                tt.vOffset = et
              }
            },
            metadata: Dt
          }, kt, Gt), (0, Ot.l)(null, null, bt, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: tt => "uScale" in tt,
              get: tt => tt.uScale,
              set: (tt, et) => {
                tt.uScale = et
              }
            },
            metadata: Dt
          }, zt, ot), (0, Ot.l)(null, null, Jt, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: tt => "vScale" in tt,
              get: tt => tt.vScale,
              set: (tt, et) => {
                tt.vScale = et
              }
            },
            metadata: Dt
          }, rt, Ut), (0, Ot.l)(null, null, Ct, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: tt => "uAng" in tt,
              get: tt => tt.uAng,
              set: (tt, et) => {
                tt.uAng = et
              }
            },
            metadata: Dt
          }, At, it), (0, Ot.l)(null, null, ut, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: tt => "vAng" in tt,
              get: tt => tt.vAng,
              set: (tt, et) => {
                tt.vAng = et
              }
            },
            metadata: Dt
          }, Yt, Bt), (0, Ot.l)(null, null, Kt, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: tt => "wAng" in tt,
              get: tt => tt.wAng,
              set: (tt, et) => {
                tt.wAng = et
              }
            },
            metadata: Dt
          }, pt, xt), (0, Ot.l)(null, null, ht, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: tt => "uRotationCenter" in tt,
              get: tt => tt.uRotationCenter,
              set: (tt, et) => {
                tt.uRotationCenter = et
              }
            },
            metadata: Dt
          }, Tt, gt), (0, Ot.l)(null, null, vt, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: tt => "vRotationCenter" in tt,
              get: tt => tt.vRotationCenter,
              set: (tt, et) => {
                tt.vRotationCenter = et
              }
            },
            metadata: Dt
          }, st, nt), (0, Ot.l)(null, null, Wt, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: tt => "wRotationCenter" in tt,
              get: tt => tt.wRotationCenter,
              set: (tt, et) => {
                tt.wRotationCenter = et
              }
            },
            metadata: Dt
          }, te, ee), (0, Ot.l)(null, null, St, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: tt => "homogeneousRotationInUVTransform" in tt,
              get: tt => tt.homogeneousRotationInUVTransform,
              set: (tt, et) => {
                tt.homogeneousRotationInUVTransform = et
              }
            },
            metadata: Dt
          }, Ve, Oe), Dt && Object.defineProperty(tt, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Dt
          })
        })(), tt.SerializeBuffers = !0, tt.ForceSerializeBuffers = !1, tt.OnTextureLoadErrorObservable = new Dt.c, tt._SerializeInternalTextureUniqueId = !1, tt._CubeTextureParser = (tt, et, Vt) => {
          throw (0, Ht.e)("CubeTexture")
        }, tt._CreateMirror = (tt, et, Vt, Ot) => {
          throw (0, Ht.e)("MirrorTexture")
        }, tt._CreateRenderTargetTexture = (tt, et, Vt, Ot, qt) => {
          throw (0, Ht.e)("RenderTargetTexture")
        }, tt.NEAREST_SAMPLINGMODE = 1, tt.NEAREST_NEAREST_MIPLINEAR = 8, tt.BILINEAR_SAMPLINGMODE = 2, tt.LINEAR_LINEAR_MIPNEAREST = 11, tt.TRILINEAR_SAMPLINGMODE = 3, tt.LINEAR_LINEAR_MIPLINEAR = 3, tt.NEAREST_NEAREST_MIPNEAREST = 4, tt.NEAREST_LINEAR_MIPNEAREST = 5, tt.NEAREST_LINEAR_MIPLINEAR = 6, tt.NEAREST_LINEAR = 7, tt.NEAREST_NEAREST = 1, tt.LINEAR_NEAREST_MIPNEAREST = 9, tt.LINEAR_NEAREST_MIPLINEAR = 10, tt.LINEAR_LINEAR = 2, tt.LINEAR_NEAREST = 12, tt.EXPLICIT_MODE = 0, tt.SPHERICAL_MODE = 1, tt.PLANAR_MODE = 2, tt.CUBIC_MODE = 3, tt.PROJECTION_MODE = 4, tt.SKYBOX_MODE = 5, tt.INVCUBIC_MODE = 6, tt.EQUIRECTANGULAR_MODE = 7, tt.FIXED_EQUIRECTANGULAR_MODE = 8, tt.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, tt.CLAMP_ADDRESSMODE = 0, tt.WRAP_ADDRESSMODE = 1, tt.MIRROR_ADDRESSMODE = 2, tt.UseSerializedUrlIfAny = !1, tt
      })(),
      Jt = !1;

    function Ct() {
      Jt || (Jt = !0, (0, jt.i)("BABYLON.Texture", bt), Mt.d._TextureParser = bt.Parse)
    }
  },
  40222: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot
    });
    class Ot {
      constructor(tt, et) {
        this.width = tt, this.height = et
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let tt = 0 | this.width;
        return tt = 397 * tt ^ this.height, tt
      }
      rK(tt) {
        this.width = tt.width, this.height = tt.height
      }
      W9(tt, et) {
        return this.width = tt, this.height = et, this
      }
      set(tt, et) {
        return this.W9(tt, et)
      }
      multiplyByFloats(tt, et) {
        return new Ot(this.width * tt, this.height * et)
      }
      clone() {
        return new Ot(this.width, this.height)
      }
      equals(tt) {
        return !!tt && (this.width === tt.width && this.height === tt.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new Ot(0, 0)
      }
      add(tt) {
        return new Ot(this.width + tt.width, this.height + tt.height)
      }
      subtract(tt) {
        return new Ot(this.width - tt.width, this.height - tt.height)
      }
      scale(tt) {
        return new Ot(this.width * tt, this.height * tt)
      }
      static Lerp(tt, et, Vt) {
        const qt = tt.width + (et.width - tt.width) * Vt,
          Dt = tt.height + (et.height - tt.height) * Vt;
        return new Ot(qt, Dt)
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);