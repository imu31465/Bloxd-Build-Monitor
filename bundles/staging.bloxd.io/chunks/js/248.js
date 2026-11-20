export const id = 248;
export const ids = [248];
export const modules = {
  39745: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => hv
    });
    let hv = !1
  },
  39287: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => av
    });
    var hv = Pv(39295),
      Sv = Pv(39300),
      ev = Pv(36618),
      gv = Pv(36594),
      pv = Pv(36615),
      dv = Pv(37431),
      Nv = Pv(39309);
    class lv {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(vv) {
        this._wrapU = vv
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(vv) {
        this._wrapV = vv
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(vv) {
        this._texture && (this._texture.isCube = vv)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(vv) {
        this._texture && (this._texture.is3D = vv)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(vv) {
        this._texture && (this._texture.is2DArray = vv)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(vv) {
        return void 0 !== vv?.shareDepth
      }
      constructor(vv) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = Nv.d.Zero(), this._cachedBaseSize = Nv.d.Zero(), this._initialSamplingMode = 2, this._texture = lv._IsRenderTargetWrapper(vv) ? vv.texture : vv, this._texture && (this._engine = this._texture.ma(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(vv, this._texture, this._texture.generateMipMaps && zv)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var Tv, Wv = Pv(39312),
      wv = Pv(39190);
    let av = (() => {
      var vv;
      let zv, Pv, Nv, Tv, wv, av, sv, Cv, iv, cv, Gv, mv, jv, fv, Fv, Yv, nv, Ov, Dv, Kv, Vv, Uv, Rv, xv, tv, qv = lv,
        Iv = [],
        Qv = [],
        Zv = [],
        Av = [],
        Lv = [],
        Hv = [],
        Mv = [],
        yv = [],
        Bv = [],
        Jv = [],
        Ev = [],
        ov = [],
        bv = [],
        rv = [],
        kv = [],
        Xv = [],
        uv = [],
        vz = [],
        zz = [],
        Pz = [],
        hz = [],
        Sz = [],
        ez = [],
        gz = [],
        pz = [],
        dz = [],
        Nz = [],
        lz = [],
        Tz = [],
        Wz = [],
        wz = [];
      return vv = class extends qv {
        set hasAlpha(vv) {
          this._hasAlpha = vv
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(vv) {
          this._getAlphaFromRGB !== vv && (this._getAlphaFromRGB = vv, this._scene && this._scene.markAllMaterialsAsDirty(1, (vv => vv.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(vv) {
          this._coordinatesIndex !== vv && (this._coordinatesIndex = vv, this._scene && this._scene.markAllMaterialsAsDirty(1, (vv => vv.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(vv) {
          this._coordinatesMode !== vv && (this._coordinatesMode = vv, this._scene && this._scene.markAllMaterialsAsDirty(1, (vv => vv.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(vv) {
          this._wrapU = vv
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(vv) {
          this._wrapV = vv
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(vv) {
          this._texture ? this._texture.isCube = vv : this._isCube = vv
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(vv) {
          this._texture && (this._texture.is3D = vv)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(vv) {
          this._texture && (this._texture.is2DArray = vv)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(vv) {
          if (this._texture) {
            if (this._texture._gammaSpace === vv) return;
            this._texture._gammaSpace = vv
          } else {
            if (this._gammaSpace === vv) return;
            this._gammaSpace = vv
          }
          this.rD()?.markAllMaterialsAsDirty(1, (vv => vv.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(vv) {
          vv !== this.isRGBD && (this._texture && (this._texture._isRGBD = vv), this.rD()?.markAllMaterialsAsDirty(1, (vv => vv.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(vv) {
          this._texture && (this._texture._lodGenerationOffset = vv)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(vv) {
          this._texture && (this._texture._lodGenerationScale = vv)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(vv) {
          this._texture && (this._texture._linearSpecularLOD = vv)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(vv) {
          this._texture && (this._texture._irradianceTexture = vv)
        }
        get uid() {
          return this._uid || (this._uid = (0, dv.b)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(vv) {
          this._onDisposeObserver && this.uD.remove(this._onDisposeObserver), this._onDisposeObserver = this.uD.add(vv)
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
        constructor(zv) {
          let Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, hv.f)(this, Iv), (0, hv.f)(this, Qv, void 0)), this.name = ((0, hv.f)(this, Zv), (0, hv.f)(this, Av, void 0)), this.displayName = ((0, hv.f)(this, Lv), (0, hv.f)(this, Hv, void 0)), this.metadata = ((0, hv.f)(this, Mv), (0, hv.f)(this, yv, null)), this._internalMetadata = (0, hv.f)(this, Bv), this.reservedDataStore = null, this._hasAlpha = (0, hv.f)(this, Jv, !1), this._getAlphaFromRGB = ((0, hv.f)(this, Ev), (0, hv.f)(this, ov, !1)), this.level = ((0, hv.f)(this, bv), (0, hv.f)(this, rv, 1)), this._coordinatesIndex = ((0, hv.f)(this, kv), (0, hv.f)(this, Xv, 0)), this.optimizeUVAllocation = ((0, hv.f)(this, uv), (0, hv.f)(this, vz, !0)), this._coordinatesMode = ((0, hv.f)(this, zz), (0, hv.f)(this, Pz, 0)), this.wrapR = ((0, hv.f)(this, hz), (0, hv.f)(this, Sz, 1)), this.anisotropicFilteringLevel = ((0, hv.f)(this, ez), (0, hv.f)(this, gz, vv.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, hv.f)(this, pz), !1), this._gammaSpace = !0, this.invertZ = (0, hv.f)(this, dz, !1), this.lodLevelInAlpha = ((0, hv.f)(this, Nz), (0, hv.f)(this, lz, !1)), this._dominantDirection = ((0, hv.f)(this, Tz), null), this.isRenderTarget = (0, hv.f)(this, Wz, !1), this._prefiltered = ((0, hv.f)(this, wz), !1), this._forceSerialize = !1, this.animations = [], this.uD = new ev.c, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, zv ? vv._IsScene(zv) ? this._scene = zv : this._engine = zv : this._scene = pv.e.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.ma()), this._texture = Pv, this._uid = null
        }
        rD() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return gv.c.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return gv.c.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(vv) {}
        get canRescale() {
          return !1
        }
        _getFromCache(vv, zv, Pv, hv, Sv, ev) {
          const gv = this._getEngine();
          if (!gv) return null;
          const pv = gv._getUseSRGBBuffer(!!Sv, zv),
            dv = gv.getLoadedTexturesCache();
          for (let Nv = 0; Nv < dv.length; Nv++) {
            const gv = dv[Nv];
            if ((void 0 === Sv || pv === gv._useSRGBBuffer) && (void 0 === hv || hv === gv.invertY) && gv.url === vv && gv.generateMipMaps === !zv && (!Pv || Pv === gv.samplingMode) && (void 0 === ev || ev === gv.isCube)) return gv.incrementReferences(), gv
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
          const vv = this.rD();
          vv && vv.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            hv = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Sv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            gv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            pv = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            dv = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const Nv = this._getEngine();
          if (!Nv) return null;
          const lv = this.getSize();
          let Tv = lv.width,
            Wv = lv.height;
          0 !== zv && (Tv /= Math.pow(2, zv), Wv /= Math.pow(2, zv), Tv = Math.round(Tv), Wv = Math.round(Wv)), pv = Math.min(Tv, pv), dv = Math.min(Wv, dv);
          try {
            return this._texture.isCube || this._texture.is2DArray ? Nv._readTexturePixels(this._texture, pv, dv, vv, zv, Pv, hv, Sv, ev, gv) : Nv._readTexturePixels(this._texture, pv, dv, -1, zv, Pv, hv, Sv, ev, gv)
          } catch (wv) {
            return null
          }
        }
        _readPixelsSync() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            hv = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Sv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const ev = this.getSize();
          let gv = ev.width,
            pv = ev.height;
          const dv = this._getEngine();
          if (!dv) return null;
          0 != zv && (gv /= Math.pow(2, zv), pv /= Math.pow(2, zv), gv = Math.round(gv), pv = Math.round(pv));
          try {
            return this._texture.isCube ? dv._readTexturePixelsSync(this._texture, gv, pv, vv, zv, Pv, hv, Sv) : dv._readTexturePixelsSync(this._texture, gv, pv, -1, zv, Pv, hv, Sv)
          } catch (Nv) {
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
            const vv = this._scene.textures.indexOf(this);
            if (vv >= 0 && this._scene.textures.splice(vv, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const vv = this._parentContainer.textures.indexOf(this);
              vv > -1 && this._parentContainer.textures.splice(vv, 1), this._parentContainer = null
            }
          }
          this.uD.notifyObservers(this), this.uD.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !vv) return null;
          const zv = Wv.c.Serialize(this);
          return Wv.c.AppendSerializedAnimations(this, zv), zv
        }
        static WhenAllReady(vv, zv) {
          let Pv = vv.length;
          if (0 !== Pv)
            for (let hv = 0; hv < vv.length; hv++) {
              const Sv = vv[hv];
              if (Sv.isReady()) 0 === --Pv && zv();
              else {
                const vv = Sv.onLoadObservable;
                vv ? vv.addOnce((() => {
                  0 === --Pv && zv()
                })) : 0 === --Pv && zv()
              }
            } else zv()
        }
        static _IsScene(vv) {
          return "Scene" === vv.getClassName()
        }
      }, (() => {
        const ev = "function" === typeof Symbol && Symbol.metadata ? Object.create(qv[Symbol.metadata] ?? null) : void 0;
        zv = [(0, Sv.L)()], Pv = [(0, Sv.L)()], Nv = [(0, Sv.L)()], Tv = [(0, Sv.L)()], wv = [(0, Sv.L)("hasAlpha")], av = [(0, Sv.L)("getAlphaFromRGB")], sv = [(0, Sv.L)()], Cv = [(0, Sv.L)("coordinatesIndex")], iv = [(0, Sv.L)()], cv = [(0, Sv.L)("coordinatesMode")], Gv = [(0, Sv.L)()], mv = [(0, Sv.L)()], jv = [(0, Sv.L)()], fv = [(0, Sv.L)()], Fv = [(0, Sv.L)()], Yv = [(0, Sv.L)()], nv = [(0, Sv.L)()], Ov = [(0, Sv.L)()], Dv = [(0, Sv.L)()], Kv = [(0, Sv.L)()], Vv = [(0, Sv.L)()], Uv = [(0, Sv.L)()], Rv = [(0, Sv.L)()], xv = [(0, Sv.E)()], tv = [(0, Sv.L)()], (0, hv.e)(vv, null, Gv, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: vv => "wrapU" in vv,
            get: vv => vv.wrapU
          },
          metadata: ev
        }, null, Iv), (0, hv.e)(vv, null, mv, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: vv => "wrapV" in vv,
            get: vv => vv.wrapV
          },
          metadata: ev
        }, null, Iv), (0, hv.e)(vv, null, Fv, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: vv => "isCube" in vv,
            get: vv => vv.isCube
          },
          metadata: ev
        }, null, Iv), (0, hv.e)(vv, null, Yv, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: vv => "is3D" in vv,
            get: vv => vv.is3D
          },
          metadata: ev
        }, null, Iv), (0, hv.e)(vv, null, nv, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: vv => "is2DArray" in vv,
            get: vv => vv.is2DArray
          },
          metadata: ev
        }, null, Iv), (0, hv.e)(vv, null, Ov, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: vv => "gammaSpace" in vv,
            get: vv => vv.gammaSpace
          },
          metadata: ev
        }, null, Iv), (0, hv.e)(vv, null, Vv, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: vv => "lodGenerationOffset" in vv,
            get: vv => vv.lodGenerationOffset
          },
          metadata: ev
        }, null, Iv), (0, hv.e)(vv, null, Uv, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: vv => "lodGenerationScale" in vv,
            get: vv => vv.lodGenerationScale
          },
          metadata: ev
        }, null, Iv), (0, hv.e)(vv, null, Rv, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: vv => "linearSpecularLOD" in vv,
            get: vv => vv.linearSpecularLOD
          },
          metadata: ev
        }, null, Iv), (0, hv.e)(vv, null, xv, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "irradianceTexture" in vv,
            get: vv => vv.irradianceTexture
          },
          metadata: ev
        }, null, Iv), (0, hv.e)(null, null, zv, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: vv => "uniqueId" in vv,
            get: vv => vv.uniqueId,
            set: (vv, zv) => {
              vv.uniqueId = zv
            }
          },
          metadata: ev
        }, Qv, Zv), (0, hv.e)(null, null, Pv, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: vv => "name" in vv,
            get: vv => vv.name,
            set: (vv, zv) => {
              vv.name = zv
            }
          },
          metadata: ev
        }, Av, Lv), (0, hv.e)(null, null, Nv, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: vv => "displayName" in vv,
            get: vv => vv.displayName,
            set: (vv, zv) => {
              vv.displayName = zv
            }
          },
          metadata: ev
        }, Hv, Mv), (0, hv.e)(null, null, Tv, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: vv => "metadata" in vv,
            get: vv => vv.metadata,
            set: (vv, zv) => {
              vv.metadata = zv
            }
          },
          metadata: ev
        }, yv, Bv), (0, hv.e)(null, null, wv, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: vv => "_hasAlpha" in vv,
            get: vv => vv._hasAlpha,
            set: (vv, zv) => {
              vv._hasAlpha = zv
            }
          },
          metadata: ev
        }, Jv, Ev), (0, hv.e)(null, null, av, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: vv => "_getAlphaFromRGB" in vv,
            get: vv => vv._getAlphaFromRGB,
            set: (vv, zv) => {
              vv._getAlphaFromRGB = zv
            }
          },
          metadata: ev
        }, ov, bv), (0, hv.e)(null, null, sv, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: vv => "level" in vv,
            get: vv => vv.level,
            set: (vv, zv) => {
              vv.level = zv
            }
          },
          metadata: ev
        }, rv, kv), (0, hv.e)(null, null, Cv, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: vv => "_coordinatesIndex" in vv,
            get: vv => vv._coordinatesIndex,
            set: (vv, zv) => {
              vv._coordinatesIndex = zv
            }
          },
          metadata: ev
        }, Xv, uv), (0, hv.e)(null, null, iv, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: vv => "optimizeUVAllocation" in vv,
            get: vv => vv.optimizeUVAllocation,
            set: (vv, zv) => {
              vv.optimizeUVAllocation = zv
            }
          },
          metadata: ev
        }, vz, zz), (0, hv.e)(null, null, cv, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: vv => "_coordinatesMode" in vv,
            get: vv => vv._coordinatesMode,
            set: (vv, zv) => {
              vv._coordinatesMode = zv
            }
          },
          metadata: ev
        }, Pz, hz), (0, hv.e)(null, null, jv, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: vv => "wrapR" in vv,
            get: vv => vv.wrapR,
            set: (vv, zv) => {
              vv.wrapR = zv
            }
          },
          metadata: ev
        }, Sz, ez), (0, hv.e)(null, null, fv, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: vv => "anisotropicFilteringLevel" in vv,
            get: vv => vv.anisotropicFilteringLevel,
            set: (vv, zv) => {
              vv.anisotropicFilteringLevel = zv
            }
          },
          metadata: ev
        }, gz, pz), (0, hv.e)(null, null, Dv, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: vv => "invertZ" in vv,
            get: vv => vv.invertZ,
            set: (vv, zv) => {
              vv.invertZ = zv
            }
          },
          metadata: ev
        }, dz, Nz), (0, hv.e)(null, null, Kv, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: vv => "lodLevelInAlpha" in vv,
            get: vv => vv.lodLevelInAlpha,
            set: (vv, zv) => {
              vv.lodLevelInAlpha = zv
            }
          },
          metadata: ev
        }, lz, Tz), (0, hv.e)(null, null, tv, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: vv => "isRenderTarget" in vv,
            get: vv => vv.isRenderTarget,
            set: (vv, zv) => {
              vv.isRenderTarget = zv
            }
          },
          metadata: ev
        }, Wz, wz), ev && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ev
        })
      })(), vv.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, vv
    })();
    (Tv = av.prototype).forceSphericalPolynomialsRecompute ?? (Tv.forceSphericalPolynomialsRecompute = (0, wv.j)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(av.prototype, "sphericalPolynomial") || Object.defineProperty(av.prototype, "sphericalPolynomial", (0, wv.g)("BaseTexture", "sphericalPolynomial"))
  },
  39798: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => jv,
      e: () => Gv
    });
    var hv = Pv(39295),
      Sv = Pv(39300),
      ev = Pv(36618),
      gv = Pv(36594),
      pv = Pv(39287),
      dv = Pv(36631),
      Nv = Pv(39190),
      lv = Pv(39204),
      Tv = Pv(39407),
      Wv = Pv(37293),
      wv = Pv(39356);

    function av(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const hv = zv.width,
        Sv = zv.height;
      if (vv instanceof Float32Array) {
        let zv = vv.byteLength / vv.BYTES_PER_ELEMENT;
        const Pv = new Uint8Array(zv);
        for (; --zv >= 0;) {
          let hv = vv[zv];
          hv < 0 ? hv = 0 : hv > 1 && (hv = 1), Pv[zv] = 255 * hv
        }
        vv = Pv
      }
      const ev = document.createElement("canvas");
      ev.width = hv, ev.height = Sv;
      const gv = ev.getContext("2d");
      if (!gv) return null;
      const pv = gv.createImageData(hv, Sv);
      if (pv.data.set(vv), gv.putImageData(pv, 0, 0), Pv) {
        const vv = document.createElement("canvas");
        vv.width = hv, vv.height = Sv;
        const zv = vv.getContext("2d");
        return zv ? (zv.translate(0, Sv), zv.scale(1, -1), zv.drawImage(ev, 0, 0), vv.toDataURL("image/png")) : null
      }
      return ev.toDataURL("image/png")
    }

    function sv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const hv = vv.getInternalTexture();
      if (!hv) return null;
      const Sv = vv._readPixelsSync(zv, Pv);
      return Sv ? av(Sv, vv.getSize(), hv.invertY) : null
    }
    async function Cv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const hv = vv.getInternalTexture();
      if (!hv) return null;
      const Sv = await vv.readPixels(zv, Pv);
      return Sv ? av(Sv, vv.getSize(), hv.invertY) : null
    }
    var iv = Pv(39745),
      cv = Pv(39312);
    let Gv = (() => {
        var vv;
        let zv, Pv, av, Gv, mv, jv, fv, Fv, Yv, nv, Ov, Dv, Kv, Vv = pv.e,
          Uv = [],
          Rv = [],
          xv = [],
          tv = [],
          qv = [],
          Iv = [],
          Qv = [],
          Zv = [],
          Av = [],
          Lv = [],
          Hv = [],
          Mv = [],
          yv = [],
          Bv = [],
          Jv = [],
          Ev = [],
          ov = [],
          bv = [],
          rv = [],
          kv = [],
          Xv = [],
          uv = [],
          vz = [],
          zz = [],
          Pz = [];
        return vv = class extends Vv {
          static _CreateVideoTexture(zv, Pv, hv) {
            arguments.length > 5 && void 0 !== arguments[5] || vv.TRILINEAR_SAMPLINGMODE;
            throw (0, Nv.m)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(vv) {
            this._isBlocking = vv
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(zv, Pv, Sv, gv) {
            let pv, dv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : vv.TRILINEAR_SAMPLINGMODE,
              Nv = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Tv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              Wv = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              wv = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              av = arguments.length > 9 ? arguments[9] : void 0,
              sv = arguments.length > 10 ? arguments[10] : void 0,
              Cv = arguments.length > 11 ? arguments[11] : void 0,
              cv = arguments.length > 12 ? arguments[12] : void 0,
              Gv = arguments.length > 13 ? arguments[13] : void 0;
            super(Pv), this.url = ((0, hv.f)(this, Uv), (0, hv.f)(this, Rv, null)), this.uOffset = ((0, hv.f)(this, xv), (0, hv.f)(this, tv, 0)), this.vOffset = ((0, hv.f)(this, qv), (0, hv.f)(this, Iv, 0)), this.uScale = ((0, hv.f)(this, Qv), (0, hv.f)(this, Zv, 1)), this.vScale = ((0, hv.f)(this, Av), (0, hv.f)(this, Lv, 1)), this.uAng = ((0, hv.f)(this, Hv), (0, hv.f)(this, Mv, 0)), this.vAng = ((0, hv.f)(this, yv), (0, hv.f)(this, Bv, 0)), this.wAng = ((0, hv.f)(this, Jv), (0, hv.f)(this, Ev, 0)), this.uRotationCenter = ((0, hv.f)(this, ov), (0, hv.f)(this, bv, .5)), this.vRotationCenter = ((0, hv.f)(this, rv), (0, hv.f)(this, kv, .5)), this.wRotationCenter = ((0, hv.f)(this, Xv), (0, hv.f)(this, uv, .5)), this.homogeneousRotationInUVTransform = ((0, hv.f)(this, vz), (0, hv.f)(this, zz, !1)), this.inspectableCustomProperties = ((0, hv.f)(this, Pz), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new ev.c, this._isBlocking = !0, this.name = zv || "", this.url = zv;
            let mv = !1,
              jv = null,
              fv = !0;
            "object" === typeof Sv && null !== Sv ? (pv = Sv.noMipmap ?? !1, gv = Sv.invertY ?? !iv.b, dv = Sv.samplingMode ?? vv.TRILINEAR_SAMPLINGMODE, Nv = Sv.onLoad ?? null, Tv = Sv.onError ?? null, Wv = Sv.buffer ?? null, wv = Sv.deleteBuffer ?? !1, av = Sv.format, sv = Sv.mimeType, Cv = Sv.loaderOptions, cv = Sv.creationFlags, mv = Sv.useSRGBBuffer ?? !1, jv = Sv.internalTexture ?? null, fv = Sv.gammaSpace ?? fv, Gv = Sv.forcedExtension ?? Gv) : pv = !!Sv, this._gammaSpace = fv, this._noMipmap = pv, this._invertY = void 0 === gv ? !iv.b : gv, this._initialSamplingMode = dv, this._buffer = Wv, this._deleteBuffer = wv, this._mimeType = sv, this._loaderOptions = Cv, this._creationFlags = cv, this._useSRGBBuffer = mv, this._forcedExtension = Gv, void 0 !== av && (this._format = av);
            const Fv = this.rD(),
              Yv = this._getEngine();
            if (!Yv) return;
            Yv.onBeforeTextureInitObservable.notifyObservers(this);
            const nv = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), Nv && Nv(), !this.isBlocking && Fv && Fv.resetCachedMaterial()
              },
              Ov = (zv, Pv) => {
                this._loadingError = !0, this._errorObject = {
                  message: zv,
                  exception: Pv
                }, Tv && Tv(zv, Pv), vv.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !jv) return this._delayedOnLoad = nv, void(this._delayedOnError = Ov);
            if (this._texture = jv ?? this._getFromCache(this.url, pv, dv, this._invertY, mv, this.isCube), this._texture)
              if (this._texture.isReady) lv.e.SetImmediate((() => nv()));
              else {
                const vv = this._texture.onLoadedObservable.add(nv);
                this._texture.onErrorObservable.add((zv => {
                  Ov(zv.message, zv.exception), this._texture?.onLoadedObservable.remove(vv)
                }))
              }
            else if (Fv && Fv.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = nv, this._delayedOnError = Ov;
            else {
              try {
                this._texture = Yv.createTexture(this.url, pv, this._invertY, Fv, dv, nv, Ov, this._buffer, void 0, this._format, this._forcedExtension, sv, Cv, cv, mv)
              } catch (Dv) {
                throw Ov("error loading", Dv), Dv
              }
              wv && (this._buffer = null)
            }
          }
          updateURL(vv) {
            let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Pv = arguments.length > 2 ? arguments[2] : void 0,
              hv = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.rD().markAllMaterialsAsDirty(1, (vv => vv.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = vv), this.url = vv, this._buffer = zv, this._forcedExtension = hv, this.delayLoadState = 4;
            const Sv = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              Sv ? Sv() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), Pv && Pv()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const vv = this.rD();
            if (!vv) return;
            let zv = this.url;
            !zv && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (zv = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(zv, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? lv.e.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = vv.ma().createTexture(zv, this._noMipmap, this._invertY, vv, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(vv, zv, Pv, hv) {
            vv *= this._cachedUScale, zv *= this._cachedVScale, vv -= this.uRotationCenter * this._cachedUScale, zv -= this.vRotationCenter * this._cachedVScale, Pv -= this.wRotationCenter, gv.l.TransformCoordinatesFromFloatsToRef(vv, zv, Pv, this._rowGenerationMatrix, hv), hv.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, hv.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, hv.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * vv === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * vv, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = gv.c.Zero(), this._rowGenerationMatrix = new gv.c, this._t0 = gv.l.Zero(), this._t1 = gv.l.Zero(), this._t2 = gv.l.Zero()), gv.c.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (gv.c.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, gv.i.Matrix[0]), gv.c.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, gv.i.Matrix[1]), gv.c.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, gv.i.Matrix[2]), gv.c.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, gv.i.Matrix[3]), gv.i.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(gv.i.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(gv.i.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(gv.i.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.VPv(this._t0), this._t2.VPv(this._t0), gv.c.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const zv = this.rD();
            if (!zv) return this._cachedTextureMatrix;
            const Pv = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && Pv !== this._cachedIdentity3x2 && zv.markAllMaterialsAsDirty(1, (vv => vv.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const zv = this.rD();
            if (!zv) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== vv.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === zv.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = gv.c.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = gv.c.Zero());
            const Pv = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case vv.PLANAR_MODE:
                gv.c.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case vv.PROJECTION_MODE: {
                gv.c.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const vv = zv.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = vv.updateFlag, vv.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                gv.c.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return Pv && zv.markAllMaterialsAsDirty(1, (vv => vv.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const zv = {
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
            return cv.c.Clone((() => new vv(this._texture ? this._texture.url : null, this.rD(), zv)), this)
          }
          serialize() {
            const zv = this.name;
            vv.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const Pv = super.serialize(vv._SerializeInternalTextureUniqueId);
            if (!Pv) return null;
            if (vv.SerializeBuffers || vv.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) Pv.base64String = this._buffer, Pv.name = Pv.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const vv = this.mimeType || "image/png";
              Pv.base64String = `data:${vv};base64,${(0,wv.i)(this._buffer)}`
            } else(vv.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (Pv.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? sv(this) : Cv(this));
            return Pv.invertY = this._invertY, Pv.samplingMode = this.samplingMode, Pv._creationFlags = this._creationFlags, Pv._useSRGBBuffer = this._useSRGBBuffer, vv._SerializeInternalTextureUniqueId && (Pv.internalTextureUniqueId = this._texture?.uniqueId), Pv.internalTextureLabel = this._texture?.label, Pv.noMipmap = this._noMipmap, this.name = zv, Pv
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(zv, Pv, hv) {
            if (zv.customType) {
              const vv = Tv.b.Instantiate(zv.customType).Parse(zv, Pv, hv);
              return zv.samplingMode && vv.updateSamplingMode && vv._samplingMode && vv._samplingMode !== zv.samplingMode && vv.updateSamplingMode(zv.samplingMode), vv
            }
            if (zv.isCube && !zv.isRenderTarget) return vv._CubeTextureParser(zv, Pv, hv);
            const Sv = void 0 !== zv.internalTextureUniqueId;
            if (!zv.name && !zv.isRenderTarget && !Sv) return null;
            let ev;
            if (Sv) {
              const vv = Pv.ma().getLoadedTexturesCache();
              for (const Pv of vv)
                if (Pv.uniqueId === zv.internalTextureUniqueId) {
                  ev = Pv;
                  break
                }
            }
            const gv = vv => {
              if (vv && vv._texture && (vv._texture._cachedWrapU = null, vv._texture._cachedWrapV = null, vv._texture._cachedWrapR = null), zv.samplingMode) {
                const Pv = zv.samplingMode;
                vv && vv.samplingMode !== Pv && vv.updateSamplingMode(Pv)
              }
              if (vv && zv.animations)
                for (let Pv = 0; Pv < zv.animations.length; Pv++) {
                  const hv = zv.animations[Pv],
                    Sv = (0, dv.b)("BABYLON.Animation");
                  Sv && vv.animations.push(Sv.Parse(hv))
                }
              vv && vv._texture && (Sv && !ev && vv._texture._setUniqueId(zv.internalTextureUniqueId), vv._texture.label = zv.internalTextureLabel)
            };
            return cv.c.Parse((() => {
              let Sv = !0;
              if (zv.noMipmap && (Sv = !1), zv.mirrorPlane) {
                const hv = vv._CreateMirror(zv.name, zv.renderTargetSize, Pv, Sv);
                return hv._waitingRenderList = zv.renderList, hv.mirrorPlane = Wv.b.FromArray(zv.mirrorPlane), gv(hv), hv
              }
              if (zv.isRenderTarget && !zv.base64String) {
                let hv = null;
                if (zv.isCube) {
                  if (Pv.reflectionProbes)
                    for (let vv = 0; vv < Pv.reflectionProbes.length; vv++) {
                      const hv = Pv.reflectionProbes[vv];
                      if (hv.name === zv.name) return hv.cubeTexture
                    }
                } else hv = vv._CreateRenderTargetTexture(zv.name, zv.renderTargetSize, Pv, Sv, zv._creationFlags ?? 0), hv._waitingRenderList = zv.renderList;
                return gv(hv), hv
              }
              if (zv.isVideo) {
                const ev = vv._CreateVideoTexture(hv + (zv.url || zv.name), hv + (zv.src || zv.url), Pv, Sv, zv.invertY, zv.samplingMode, zv.settings || {});
                return gv(ev), ev
              } {
                let pv;
                if ("string" === typeof zv.base64String && zv.base64String && !ev) {
                  const hv = {
                      buffer: zv.base64String,
                      noMipmap: !Sv,
                      invertY: zv.invertY,
                      samplingMode: zv.samplingMode,
                      useSRGBBuffer: zv._useSRGBBuffer ?? !1,
                      creationFlags: zv._creationFlags ?? 0,
                      onLoad: () => {
                        gv(pv)
                      }
                    },
                    ev = zv.base64String,
                    dv = ev.startsWith("data:") ? ev.substring(5) : ev;
                  pv = vv.CreateFromBase64String("", dv, Pv, hv), pv.name = zv.name
                } else {
                  let dv;
                  dv = zv.name && (zv.name.indexOf("://") > 0 || zv.name.startsWith("data:")) ? zv.name : hv + zv.name, zv.url && (zv.url.startsWith("data:") || vv.UseSerializedUrlIfAny) && (dv = zv.url);
                  const Nv = {
                    noMipmap: !Sv,
                    invertY: zv.invertY,
                    samplingMode: zv.samplingMode,
                    useSRGBBuffer: zv._useSRGBBuffer ?? !1,
                    creationFlags: zv._creationFlags ?? 0,
                    onLoad: () => {
                      gv(pv)
                    },
                    internalTexture: ev
                  };
                  pv = new vv(dv, Pv, Nv)
                }
                return pv
              }
            }), zv, Pv)
          }
          static CreateFromBase64String(zv, Pv, hv, Sv, ev) {
            let gv = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : vv.TRILINEAR_SAMPLINGMODE;
            return new vv("data:" + Pv, hv, Sv, ev, gv, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, zv, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(zv, Pv, hv) {
            let Sv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              ev = arguments.length > 4 ? arguments[4] : void 0,
              gv = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              pv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : vv.TRILINEAR_SAMPLINGMODE,
              dv = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Nv = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              lv = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              Tv = arguments.length > 10 ? arguments[10] : void 0,
              Wv = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== zv.substring(0, 5) && (zv = "data:" + zv), new vv(zv, hv, ev, gv, pv, dv, Nv, Pv, Sv, lv, void 0, void 0, Tv, Wv)
          }
        }, (() => {
          const ev = "function" === typeof Symbol && Symbol.metadata ? Object.create(Vv[Symbol.metadata] ?? null) : void 0;
          zv = [(0, Sv.L)()], Pv = [(0, Sv.L)()], av = [(0, Sv.L)()], Gv = [(0, Sv.L)()], mv = [(0, Sv.L)()], jv = [(0, Sv.L)()], fv = [(0, Sv.L)()], Fv = [(0, Sv.L)()], Yv = [(0, Sv.L)()], nv = [(0, Sv.L)()], Ov = [(0, Sv.L)()], Dv = [(0, Sv.L)()], Kv = [(0, Sv.L)()], (0, hv.e)(vv, null, Kv, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: vv => "isBlocking" in vv,
              get: vv => vv.isBlocking
            },
            metadata: ev
          }, null, Uv), (0, hv.e)(null, null, zv, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: vv => "url" in vv,
              get: vv => vv.url,
              set: (vv, zv) => {
                vv.url = zv
              }
            },
            metadata: ev
          }, Rv, xv), (0, hv.e)(null, null, Pv, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: vv => "uOffset" in vv,
              get: vv => vv.uOffset,
              set: (vv, zv) => {
                vv.uOffset = zv
              }
            },
            metadata: ev
          }, tv, qv), (0, hv.e)(null, null, av, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: vv => "vOffset" in vv,
              get: vv => vv.vOffset,
              set: (vv, zv) => {
                vv.vOffset = zv
              }
            },
            metadata: ev
          }, Iv, Qv), (0, hv.e)(null, null, Gv, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: vv => "uScale" in vv,
              get: vv => vv.uScale,
              set: (vv, zv) => {
                vv.uScale = zv
              }
            },
            metadata: ev
          }, Zv, Av), (0, hv.e)(null, null, mv, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: vv => "vScale" in vv,
              get: vv => vv.vScale,
              set: (vv, zv) => {
                vv.vScale = zv
              }
            },
            metadata: ev
          }, Lv, Hv), (0, hv.e)(null, null, jv, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: vv => "uAng" in vv,
              get: vv => vv.uAng,
              set: (vv, zv) => {
                vv.uAng = zv
              }
            },
            metadata: ev
          }, Mv, yv), (0, hv.e)(null, null, fv, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: vv => "vAng" in vv,
              get: vv => vv.vAng,
              set: (vv, zv) => {
                vv.vAng = zv
              }
            },
            metadata: ev
          }, Bv, Jv), (0, hv.e)(null, null, Fv, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: vv => "wAng" in vv,
              get: vv => vv.wAng,
              set: (vv, zv) => {
                vv.wAng = zv
              }
            },
            metadata: ev
          }, Ev, ov), (0, hv.e)(null, null, Yv, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: vv => "uRotationCenter" in vv,
              get: vv => vv.uRotationCenter,
              set: (vv, zv) => {
                vv.uRotationCenter = zv
              }
            },
            metadata: ev
          }, bv, rv), (0, hv.e)(null, null, nv, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: vv => "vRotationCenter" in vv,
              get: vv => vv.vRotationCenter,
              set: (vv, zv) => {
                vv.vRotationCenter = zv
              }
            },
            metadata: ev
          }, kv, Xv), (0, hv.e)(null, null, Ov, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: vv => "wRotationCenter" in vv,
              get: vv => vv.wRotationCenter,
              set: (vv, zv) => {
                vv.wRotationCenter = zv
              }
            },
            metadata: ev
          }, uv, vz), (0, hv.e)(null, null, Dv, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: vv => "homogeneousRotationInUVTransform" in vv,
              get: vv => vv.homogeneousRotationInUVTransform,
              set: (vv, zv) => {
                vv.homogeneousRotationInUVTransform = zv
              }
            },
            metadata: ev
          }, zz, Pz), ev && Object.defineProperty(vv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ev
          })
        })(), vv.SerializeBuffers = !0, vv.ForceSerializeBuffers = !1, vv.OnTextureLoadErrorObservable = new ev.c, vv._SerializeInternalTextureUniqueId = !1, vv._CubeTextureParser = (vv, zv, Pv) => {
          throw (0, Nv.m)("CubeTexture")
        }, vv._CreateMirror = (vv, zv, Pv, hv) => {
          throw (0, Nv.m)("MirrorTexture")
        }, vv._CreateRenderTargetTexture = (vv, zv, Pv, hv, Sv) => {
          throw (0, Nv.m)("RenderTargetTexture")
        }, vv.NEAREST_SAMPLINGMODE = 1, vv.NEAREST_NEAREST_MIPLINEAR = 8, vv.BILINEAR_SAMPLINGMODE = 2, vv.LINEAR_LINEAR_MIPNEAREST = 11, vv.TRILINEAR_SAMPLINGMODE = 3, vv.LINEAR_LINEAR_MIPLINEAR = 3, vv.NEAREST_NEAREST_MIPNEAREST = 4, vv.NEAREST_LINEAR_MIPNEAREST = 5, vv.NEAREST_LINEAR_MIPLINEAR = 6, vv.NEAREST_LINEAR = 7, vv.NEAREST_NEAREST = 1, vv.LINEAR_NEAREST_MIPNEAREST = 9, vv.LINEAR_NEAREST_MIPLINEAR = 10, vv.LINEAR_LINEAR = 2, vv.LINEAR_NEAREST = 12, vv.EXPLICIT_MODE = 0, vv.SPHERICAL_MODE = 1, vv.PLANAR_MODE = 2, vv.CUBIC_MODE = 3, vv.PROJECTION_MODE = 4, vv.SKYBOX_MODE = 5, vv.INVCUBIC_MODE = 6, vv.EQUIRECTANGULAR_MODE = 7, vv.FIXED_EQUIRECTANGULAR_MODE = 8, vv.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, vv.CLAMP_ADDRESSMODE = 0, vv.WRAP_ADDRESSMODE = 1, vv.MIRROR_ADDRESSMODE = 2, vv.UseSerializedUrlIfAny = !1, vv
      })(),
      mv = !1;

    function jv() {
      mv || (mv = !0, (0, dv.c)("BABYLON.Texture", Gv), cv.c._TextureParser = Gv.Parse)
    }
  },
  39309: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    class hv {
      constructor(vv, zv) {
        this.width = vv, this.height = zv
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let vv = 0 | this.width;
        return vv = 397 * vv ^ this.height, vv
      }
      Vzv(vv) {
        this.width = vv.width, this.height = vv.height
      }
      f_(vv, zv) {
        return this.width = vv, this.height = zv, this
      }
      set(vv, zv) {
        return this.f_(vv, zv)
      }
      multiplyByFloats(vv, zv) {
        return new hv(this.width * vv, this.height * zv)
      }
      clone() {
        return new hv(this.width, this.height)
      }
      equals(vv) {
        return !!vv && (this.width === vv.width && this.height === vv.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new hv(0, 0)
      }
      add(vv) {
        return new hv(this.width + vv.width, this.height + vv.height)
      }
      subtract(vv) {
        return new hv(this.width - vv.width, this.height - vv.height)
      }
      scale(vv) {
        return new hv(this.width * vv, this.height * vv)
      }
      static Lerp(vv, zv, Pv) {
        const Sv = vv.width + (zv.width - vv.width) * Pv,
          ev = vv.height + (zv.height - vv.height) * Pv;
        return new hv(Sv, ev)
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);