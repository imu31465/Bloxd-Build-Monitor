export const id = 246;
export const ids = [246];
export const modules = {
  39576: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Fz
    });
    let Fz = !1
  },
  39163: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => wz
    });
    var Fz = sz(39167),
      Wz = sz(39170),
      Xz = sz(36505),
      Oz = sz(36475),
      oz = sz(36502),
      vz = sz(37333),
      Uz = sz(39179);
    class Kz {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(zz) {
        this._wrapU = zz
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(zz) {
        this._wrapV = zz
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(zz) {
        this._texture && (this._texture.isCube = zz)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(zz) {
        this._texture && (this._texture.is3D = zz)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(zz) {
        this._texture && (this._texture.is2DArray = zz)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(zz) {
        return void 0 !== zz?.shareDepth
      }
      constructor(zz) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = Uz.e.Zero(), this._cachedBaseSize = Uz.e.Zero(), this._initialSamplingMode = 2, this._texture = Kz._IsRenderTargetWrapper(zz) ? zz.texture : zz, this._texture && (this._engine = this._texture.FD(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(zz, this._texture, this._texture.generateMipMaps && tz)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var uz, Nz = sz(39181),
      bz = sz(39065);
    let wz = (() => {
      var zz;
      let tz, sz, Uz, uz, bz, wz, Dz, gz, Hz, Bz, Pz, rz, Yz, xz, mz, Jz, Iz, Cz, ez, Zz, Gz, Tz, cz, jz, Az, yz = Kz,
        Mz = [],
        dz = [],
        hz = [],
        Qz = [],
        kz = [],
        iz = [],
        Lz = [],
        lz = [],
        nz = [],
        az = [],
        qz = [],
        Sz = [],
        Vz = [],
        Rz = [],
        pz = [],
        fz = [],
        Ez = [],
        zt = [],
        tt = [],
        st = [],
        Ft = [],
        Wt = [],
        Xt = [],
        Ot = [],
        ot = [],
        vt = [],
        Ut = [],
        Kt = [],
        ut = [],
        Nt = [],
        bt = [];
      return zz = class extends yz {
        set hasAlpha(zz) {
          this._hasAlpha = zz
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(zz) {
          this._getAlphaFromRGB !== zz && (this._getAlphaFromRGB = zz, this._scene && this._scene.markAllMaterialsAsDirty(1, (zz => zz.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(zz) {
          this._coordinatesIndex !== zz && (this._coordinatesIndex = zz, this._scene && this._scene.markAllMaterialsAsDirty(1, (zz => zz.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(zz) {
          this._coordinatesMode !== zz && (this._coordinatesMode = zz, this._scene && this._scene.markAllMaterialsAsDirty(1, (zz => zz.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(zz) {
          this._wrapU = zz
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(zz) {
          this._wrapV = zz
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(zz) {
          this._texture ? this._texture.isCube = zz : this._isCube = zz
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(zz) {
          this._texture && (this._texture.is3D = zz)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(zz) {
          this._texture && (this._texture.is2DArray = zz)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(zz) {
          if (this._texture) {
            if (this._texture._gammaSpace === zz) return;
            this._texture._gammaSpace = zz
          } else {
            if (this._gammaSpace === zz) return;
            this._gammaSpace = zz
          }
          this.aJ()?.markAllMaterialsAsDirty(1, (zz => zz.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(zz) {
          zz !== this.isRGBD && (this._texture && (this._texture._isRGBD = zz), this.aJ()?.markAllMaterialsAsDirty(1, (zz => zz.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(zz) {
          this._texture && (this._texture._lodGenerationOffset = zz)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(zz) {
          this._texture && (this._texture._lodGenerationScale = zz)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(zz) {
          this._texture && (this._texture._linearSpecularLOD = zz)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(zz) {
          this._texture && (this._texture._irradianceTexture = zz)
        }
        get uid() {
          return this._uid || (this._uid = (0, vz.d)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(zz) {
          this._onDisposeObserver && this.qJ.remove(this._onDisposeObserver), this._onDisposeObserver = this.qJ.add(zz)
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
        constructor(tz) {
          let sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, Fz.k)(this, Mz), (0, Fz.k)(this, dz, void 0)), this.name = ((0, Fz.k)(this, hz), (0, Fz.k)(this, Qz, void 0)), this.displayName = ((0, Fz.k)(this, kz), (0, Fz.k)(this, iz, void 0)), this.metadata = ((0, Fz.k)(this, Lz), (0, Fz.k)(this, lz, null)), this._internalMetadata = (0, Fz.k)(this, nz), this.reservedDataStore = null, this._hasAlpha = (0, Fz.k)(this, az, !1), this._getAlphaFromRGB = ((0, Fz.k)(this, qz), (0, Fz.k)(this, Sz, !1)), this.level = ((0, Fz.k)(this, Vz), (0, Fz.k)(this, Rz, 1)), this._coordinatesIndex = ((0, Fz.k)(this, pz), (0, Fz.k)(this, fz, 0)), this.optimizeUVAllocation = ((0, Fz.k)(this, Ez), (0, Fz.k)(this, zt, !0)), this._coordinatesMode = ((0, Fz.k)(this, tt), (0, Fz.k)(this, st, 0)), this.wrapR = ((0, Fz.k)(this, Ft), (0, Fz.k)(this, Wt, 1)), this.anisotropicFilteringLevel = ((0, Fz.k)(this, Xt), (0, Fz.k)(this, Ot, zz.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, Fz.k)(this, ot), !1), this._gammaSpace = !0, this.invertZ = (0, Fz.k)(this, vt, !1), this.lodLevelInAlpha = ((0, Fz.k)(this, Ut), (0, Fz.k)(this, Kt, !1)), this._dominantDirection = ((0, Fz.k)(this, ut), null), this.isRenderTarget = (0, Fz.k)(this, Nt, !1), this._prefiltered = ((0, Fz.k)(this, bt), !1), this._forceSerialize = !1, this.animations = [], this.qJ = new Xz.c, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, tz ? zz._IsScene(tz) ? this._scene = tz : this._engine = tz : this._scene = oz.c.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.FD()), this._texture = sz, this._uid = null
        }
        aJ() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return Oz.e.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return Oz.e.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(zz) {}
        get canRescale() {
          return !1
        }
        _getFromCache(zz, tz, sz, Fz, Wz, Xz) {
          const Oz = this._getEngine();
          if (!Oz) return null;
          const oz = Oz._getUseSRGBBuffer(!!Wz, tz),
            vz = Oz.getLoadedTexturesCache();
          for (let Uz = 0; Uz < vz.length; Uz++) {
            const Oz = vz[Uz];
            if ((void 0 === Wz || oz === Oz._useSRGBBuffer) && (void 0 === Fz || Fz === Oz.invertY) && Oz.url === zz && Oz.generateMipMaps === !tz && (!sz || sz === Oz.samplingMode) && (void 0 === Xz || Xz === Oz.isCube)) return Oz.incrementReferences(), Oz
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
          const zz = this.aJ();
          zz && zz.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Fz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Wz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            Oz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            oz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            vz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const Uz = this._getEngine();
          if (!Uz) return null;
          const Kz = this.getSize();
          let uz = Kz.width,
            Nz = Kz.height;
          0 !== tz && (uz /= Math.pow(2, tz), Nz /= Math.pow(2, tz), uz = Math.round(uz), Nz = Math.round(Nz)), oz = Math.min(uz, oz), vz = Math.min(Nz, vz);
          try {
            return this._texture.isCube || this._texture.is2DArray ? Uz._readTexturePixels(this._texture, oz, vz, zz, tz, sz, Fz, Wz, Xz, Oz) : Uz._readTexturePixels(this._texture, oz, vz, -1, tz, sz, Fz, Wz, Xz, Oz)
          } catch (bz) {
            return null
          }
        }
        _readPixelsSync() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Fz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Wz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const Xz = this.getSize();
          let Oz = Xz.width,
            oz = Xz.height;
          const vz = this._getEngine();
          if (!vz) return null;
          0 != tz && (Oz /= Math.pow(2, tz), oz /= Math.pow(2, tz), Oz = Math.round(Oz), oz = Math.round(oz));
          try {
            return this._texture.isCube ? vz._readTexturePixelsSync(this._texture, Oz, oz, zz, tz, sz, Fz, Wz) : vz._readTexturePixelsSync(this._texture, Oz, oz, -1, tz, sz, Fz, Wz)
          } catch (Uz) {
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
            const zz = this._scene.textures.indexOf(this);
            if (zz >= 0 && this._scene.textures.splice(zz, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const zz = this._parentContainer.textures.indexOf(this);
              zz > -1 && this._parentContainer.textures.splice(zz, 1), this._parentContainer = null
            }
          }
          this.qJ.notifyObservers(this), this.qJ.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !zz) return null;
          const tz = Nz.e.Serialize(this);
          return Nz.e.AppendSerializedAnimations(this, tz), tz
        }
        static WhenAllReady(zz, tz) {
          let sz = zz.length;
          if (0 !== sz)
            for (let Fz = 0; Fz < zz.length; Fz++) {
              const Wz = zz[Fz];
              if (Wz.isReady()) 0 === --sz && tz();
              else {
                const zz = Wz.onLoadObservable;
                zz ? zz.addOnce((() => {
                  0 === --sz && tz()
                })) : 0 === --sz && tz()
              }
            } else tz()
        }
        static _IsScene(zz) {
          return "Scene" === zz.getClassName()
        }
      }, (() => {
        const Xz = "function" === typeof Symbol && Symbol.metadata ? Object.create(yz[Symbol.metadata] ?? null) : void 0;
        tz = [(0, Wz.J)()], sz = [(0, Wz.J)()], Uz = [(0, Wz.J)()], uz = [(0, Wz.J)()], bz = [(0, Wz.J)("hasAlpha")], wz = [(0, Wz.J)("getAlphaFromRGB")], Dz = [(0, Wz.J)()], gz = [(0, Wz.J)("coordinatesIndex")], Hz = [(0, Wz.J)()], Bz = [(0, Wz.J)("coordinatesMode")], Pz = [(0, Wz.J)()], rz = [(0, Wz.J)()], Yz = [(0, Wz.J)()], xz = [(0, Wz.J)()], mz = [(0, Wz.J)()], Jz = [(0, Wz.J)()], Iz = [(0, Wz.J)()], Cz = [(0, Wz.J)()], ez = [(0, Wz.J)()], Zz = [(0, Wz.J)()], Gz = [(0, Wz.J)()], Tz = [(0, Wz.J)()], cz = [(0, Wz.J)()], jz = [(0, Wz.D)()], Az = [(0, Wz.J)()], (0, Fz.h)(zz, null, Pz, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: zz => "wrapU" in zz,
            get: zz => zz.wrapU
          },
          metadata: Xz
        }, null, Mz), (0, Fz.h)(zz, null, rz, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: zz => "wrapV" in zz,
            get: zz => zz.wrapV
          },
          metadata: Xz
        }, null, Mz), (0, Fz.h)(zz, null, mz, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: zz => "isCube" in zz,
            get: zz => zz.isCube
          },
          metadata: Xz
        }, null, Mz), (0, Fz.h)(zz, null, Jz, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: zz => "is3D" in zz,
            get: zz => zz.is3D
          },
          metadata: Xz
        }, null, Mz), (0, Fz.h)(zz, null, Iz, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: zz => "is2DArray" in zz,
            get: zz => zz.is2DArray
          },
          metadata: Xz
        }, null, Mz), (0, Fz.h)(zz, null, Cz, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: zz => "gammaSpace" in zz,
            get: zz => zz.gammaSpace
          },
          metadata: Xz
        }, null, Mz), (0, Fz.h)(zz, null, Gz, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: zz => "lodGenerationOffset" in zz,
            get: zz => zz.lodGenerationOffset
          },
          metadata: Xz
        }, null, Mz), (0, Fz.h)(zz, null, Tz, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: zz => "lodGenerationScale" in zz,
            get: zz => zz.lodGenerationScale
          },
          metadata: Xz
        }, null, Mz), (0, Fz.h)(zz, null, cz, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: zz => "linearSpecularLOD" in zz,
            get: zz => zz.linearSpecularLOD
          },
          metadata: Xz
        }, null, Mz), (0, Fz.h)(zz, null, jz, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "irradianceTexture" in zz,
            get: zz => zz.irradianceTexture
          },
          metadata: Xz
        }, null, Mz), (0, Fz.h)(null, null, tz, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: zz => "uniqueId" in zz,
            get: zz => zz.uniqueId,
            set: (zz, tz) => {
              zz.uniqueId = tz
            }
          },
          metadata: Xz
        }, dz, hz), (0, Fz.h)(null, null, sz, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: zz => "name" in zz,
            get: zz => zz.name,
            set: (zz, tz) => {
              zz.name = tz
            }
          },
          metadata: Xz
        }, Qz, kz), (0, Fz.h)(null, null, Uz, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: zz => "displayName" in zz,
            get: zz => zz.displayName,
            set: (zz, tz) => {
              zz.displayName = tz
            }
          },
          metadata: Xz
        }, iz, Lz), (0, Fz.h)(null, null, uz, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: zz => "metadata" in zz,
            get: zz => zz.metadata,
            set: (zz, tz) => {
              zz.metadata = tz
            }
          },
          metadata: Xz
        }, lz, nz), (0, Fz.h)(null, null, bz, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: zz => "_hasAlpha" in zz,
            get: zz => zz._hasAlpha,
            set: (zz, tz) => {
              zz._hasAlpha = tz
            }
          },
          metadata: Xz
        }, az, qz), (0, Fz.h)(null, null, wz, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: zz => "_getAlphaFromRGB" in zz,
            get: zz => zz._getAlphaFromRGB,
            set: (zz, tz) => {
              zz._getAlphaFromRGB = tz
            }
          },
          metadata: Xz
        }, Sz, Vz), (0, Fz.h)(null, null, Dz, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: zz => "level" in zz,
            get: zz => zz.level,
            set: (zz, tz) => {
              zz.level = tz
            }
          },
          metadata: Xz
        }, Rz, pz), (0, Fz.h)(null, null, gz, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: zz => "_coordinatesIndex" in zz,
            get: zz => zz._coordinatesIndex,
            set: (zz, tz) => {
              zz._coordinatesIndex = tz
            }
          },
          metadata: Xz
        }, fz, Ez), (0, Fz.h)(null, null, Hz, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: zz => "optimizeUVAllocation" in zz,
            get: zz => zz.optimizeUVAllocation,
            set: (zz, tz) => {
              zz.optimizeUVAllocation = tz
            }
          },
          metadata: Xz
        }, zt, tt), (0, Fz.h)(null, null, Bz, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: zz => "_coordinatesMode" in zz,
            get: zz => zz._coordinatesMode,
            set: (zz, tz) => {
              zz._coordinatesMode = tz
            }
          },
          metadata: Xz
        }, st, Ft), (0, Fz.h)(null, null, Yz, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: zz => "wrapR" in zz,
            get: zz => zz.wrapR,
            set: (zz, tz) => {
              zz.wrapR = tz
            }
          },
          metadata: Xz
        }, Wt, Xt), (0, Fz.h)(null, null, xz, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: zz => "anisotropicFilteringLevel" in zz,
            get: zz => zz.anisotropicFilteringLevel,
            set: (zz, tz) => {
              zz.anisotropicFilteringLevel = tz
            }
          },
          metadata: Xz
        }, Ot, ot), (0, Fz.h)(null, null, ez, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: zz => "invertZ" in zz,
            get: zz => zz.invertZ,
            set: (zz, tz) => {
              zz.invertZ = tz
            }
          },
          metadata: Xz
        }, vt, Ut), (0, Fz.h)(null, null, Zz, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: zz => "lodLevelInAlpha" in zz,
            get: zz => zz.lodLevelInAlpha,
            set: (zz, tz) => {
              zz.lodLevelInAlpha = tz
            }
          },
          metadata: Xz
        }, Kt, ut), (0, Fz.h)(null, null, Az, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: zz => "isRenderTarget" in zz,
            get: zz => zz.isRenderTarget,
            set: (zz, tz) => {
              zz.isRenderTarget = tz
            }
          },
          metadata: Xz
        }, Nt, bt), Xz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Xz
        })
      })(), zz.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, zz
    })();
    (uz = wz.prototype).forceSphericalPolynomialsRecompute ?? (uz.forceSphericalPolynomialsRecompute = (0, bz.g)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(wz.prototype, "sphericalPolynomial") || Object.defineProperty(wz.prototype, "sphericalPolynomial", (0, bz.f)("BaseTexture", "sphericalPolynomial"))
  },
  39617: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Yz,
      g: () => Pz
    });
    var Fz = sz(39167),
      Wz = sz(39170),
      Xz = sz(36505),
      Oz = sz(36475),
      oz = sz(39163),
      vz = sz(36518),
      Uz = sz(39065),
      Kz = sz(39074),
      uz = sz(39266),
      Nz = sz(37199),
      bz = sz(39222);

    function wz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Fz = tz.width,
        Wz = tz.height;
      if (zz instanceof Float32Array) {
        let tz = zz.byteLength / zz.BYTES_PER_ELEMENT;
        const sz = new Uint8Array(tz);
        for (; --tz >= 0;) {
          let Fz = zz[tz];
          Fz < 0 ? Fz = 0 : Fz > 1 && (Fz = 1), sz[tz] = 255 * Fz
        }
        zz = sz
      }
      const Xz = document.createElement("canvas");
      Xz.width = Fz, Xz.height = Wz;
      const Oz = Xz.getContext("2d");
      if (!Oz) return null;
      const oz = Oz.createImageData(Fz, Wz);
      if (oz.data.set(zz), Oz.putImageData(oz, 0, 0), sz) {
        const zz = document.createElement("canvas");
        zz.width = Fz, zz.height = Wz;
        const tz = zz.getContext("2d");
        return tz ? (tz.translate(0, Wz), tz.scale(1, -1), tz.drawImage(Xz, 0, 0), zz.toDataURL("image/png")) : null
      }
      return Xz.toDataURL("image/png")
    }

    function Dz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Fz = zz.getInternalTexture();
      if (!Fz) return null;
      const Wz = zz._readPixelsSync(tz, sz);
      return Wz ? wz(Wz, zz.getSize(), Fz.invertY) : null
    }
    async function gz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Fz = zz.getInternalTexture();
      if (!Fz) return null;
      const Wz = await zz.readPixels(tz, sz);
      return Wz ? wz(Wz, zz.getSize(), Fz.invertY) : null
    }
    var Hz = sz(39576),
      Bz = sz(39181);
    let Pz = (() => {
        var zz;
        let tz, sz, wz, Pz, rz, Yz, xz, mz, Jz, Iz, Cz, ez, Zz, Gz = oz.b,
          Tz = [],
          cz = [],
          jz = [],
          Az = [],
          yz = [],
          Mz = [],
          dz = [],
          hz = [],
          Qz = [],
          kz = [],
          iz = [],
          Lz = [],
          lz = [],
          nz = [],
          az = [],
          qz = [],
          Sz = [],
          Vz = [],
          Rz = [],
          pz = [],
          fz = [],
          Ez = [],
          zt = [],
          tt = [],
          st = [];
        return zz = class extends Gz {
          static _CreateVideoTexture(tz, sz, Fz) {
            arguments.length > 5 && void 0 !== arguments[5] || zz.TRILINEAR_SAMPLINGMODE;
            throw (0, Uz.i)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(zz) {
            this._isBlocking = zz
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(tz, sz, Wz, Oz) {
            let oz, vz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : zz.TRILINEAR_SAMPLINGMODE,
              Uz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              uz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              Nz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              bz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              wz = arguments.length > 9 ? arguments[9] : void 0,
              Dz = arguments.length > 10 ? arguments[10] : void 0,
              gz = arguments.length > 11 ? arguments[11] : void 0,
              Bz = arguments.length > 12 ? arguments[12] : void 0,
              Pz = arguments.length > 13 ? arguments[13] : void 0;
            super(sz), this.url = ((0, Fz.k)(this, Tz), (0, Fz.k)(this, cz, null)), this.uOffset = ((0, Fz.k)(this, jz), (0, Fz.k)(this, Az, 0)), this.vOffset = ((0, Fz.k)(this, yz), (0, Fz.k)(this, Mz, 0)), this.uScale = ((0, Fz.k)(this, dz), (0, Fz.k)(this, hz, 1)), this.vScale = ((0, Fz.k)(this, Qz), (0, Fz.k)(this, kz, 1)), this.uAng = ((0, Fz.k)(this, iz), (0, Fz.k)(this, Lz, 0)), this.vAng = ((0, Fz.k)(this, lz), (0, Fz.k)(this, nz, 0)), this.wAng = ((0, Fz.k)(this, az), (0, Fz.k)(this, qz, 0)), this.uRotationCenter = ((0, Fz.k)(this, Sz), (0, Fz.k)(this, Vz, .5)), this.vRotationCenter = ((0, Fz.k)(this, Rz), (0, Fz.k)(this, pz, .5)), this.wRotationCenter = ((0, Fz.k)(this, fz), (0, Fz.k)(this, Ez, .5)), this.homogeneousRotationInUVTransform = ((0, Fz.k)(this, zt), (0, Fz.k)(this, tt, !1)), this.inspectableCustomProperties = ((0, Fz.k)(this, st), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new Xz.c, this._isBlocking = !0, this.name = tz || "", this.url = tz;
            let rz = !1,
              Yz = null,
              xz = !0;
            "object" === typeof Wz && null !== Wz ? (oz = Wz.noMipmap ?? !1, Oz = Wz.invertY ?? !Hz.d, vz = Wz.samplingMode ?? zz.TRILINEAR_SAMPLINGMODE, Uz = Wz.onLoad ?? null, uz = Wz.onError ?? null, Nz = Wz.buffer ?? null, bz = Wz.deleteBuffer ?? !1, wz = Wz.format, Dz = Wz.mimeType, gz = Wz.loaderOptions, Bz = Wz.creationFlags, rz = Wz.useSRGBBuffer ?? !1, Yz = Wz.internalTexture ?? null, xz = Wz.gammaSpace ?? xz, Pz = Wz.forcedExtension ?? Pz) : oz = !!Wz, this._gammaSpace = xz, this._noMipmap = oz, this._invertY = void 0 === Oz ? !Hz.d : Oz, this._initialSamplingMode = vz, this._buffer = Nz, this._deleteBuffer = bz, this._mimeType = Dz, this._loaderOptions = gz, this._creationFlags = Bz, this._useSRGBBuffer = rz, this._forcedExtension = Pz, void 0 !== wz && (this._format = wz);
            const mz = this.aJ(),
              Jz = this._getEngine();
            if (!Jz) return;
            Jz.onBeforeTextureInitObservable.notifyObservers(this);
            const Iz = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), Uz && Uz(), !this.isBlocking && mz && mz.resetCachedMaterial()
              },
              Cz = (tz, sz) => {
                this._loadingError = !0, this._errorObject = {
                  message: tz,
                  exception: sz
                }, uz && uz(tz, sz), zz.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !Yz) return this._delayedOnLoad = Iz, void(this._delayedOnError = Cz);
            if (this._texture = Yz ?? this._getFromCache(this.url, oz, vz, this._invertY, rz, this.isCube), this._texture)
              if (this._texture.isReady) Kz.b.SetImmediate((() => Iz()));
              else {
                const zz = this._texture.onLoadedObservable.add(Iz);
                this._texture.onErrorObservable.add((tz => {
                  Cz(tz.message, tz.exception), this._texture?.onLoadedObservable.remove(zz)
                }))
              }
            else if (mz && mz.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = Iz, this._delayedOnError = Cz;
            else {
              try {
                this._texture = Jz.createTexture(this.url, oz, this._invertY, mz, vz, Iz, Cz, this._buffer, void 0, this._format, this._forcedExtension, Dz, gz, Bz, rz)
              } catch (ez) {
                throw Cz("error loading", ez), ez
              }
              bz && (this._buffer = null)
            }
          }
          updateURL(zz) {
            let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              sz = arguments.length > 2 ? arguments[2] : void 0,
              Fz = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.aJ().markAllMaterialsAsDirty(1, (zz => zz.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = zz), this.url = zz, this._buffer = tz, this._forcedExtension = Fz, this.delayLoadState = 4;
            const Wz = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              Wz ? Wz() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), sz && sz()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const zz = this.aJ();
            if (!zz) return;
            let tz = this.url;
            !tz && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (tz = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(tz, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? Kz.b.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = zz.FD().createTexture(tz, this._noMipmap, this._invertY, zz, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(zz, tz, sz, Fz) {
            zz *= this._cachedUScale, tz *= this._cachedVScale, zz -= this.uRotationCenter * this._cachedUScale, tz -= this.vRotationCenter * this._cachedVScale, sz -= this.wRotationCenter, Oz.p.TransformCoordinatesFromFloatsToRef(zz, tz, sz, this._rowGenerationMatrix, Fz), Fz.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, Fz.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, Fz.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * zz === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * zz, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = Oz.e.Zero(), this._rowGenerationMatrix = new Oz.e, this._t0 = Oz.p.Zero(), this._t1 = Oz.p.Zero(), this._t2 = Oz.p.Zero()), Oz.e.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (Oz.e.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, Oz.m.Matrix[0]), Oz.e.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, Oz.m.Matrix[1]), Oz.e.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, Oz.m.Matrix[2]), Oz.e.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, Oz.m.Matrix[3]), Oz.m.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Oz.m.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Oz.m.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Oz.m.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.oFz(this._t0), this._t2.oFz(this._t0), Oz.e.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const tz = this.aJ();
            if (!tz) return this._cachedTextureMatrix;
            const sz = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && sz !== this._cachedIdentity3x2 && tz.markAllMaterialsAsDirty(1, (zz => zz.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const tz = this.aJ();
            if (!tz) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== zz.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === tz.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = Oz.e.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = Oz.e.Zero());
            const sz = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case zz.PLANAR_MODE:
                Oz.e.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case zz.PROJECTION_MODE: {
                Oz.e.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const zz = tz.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = zz.updateFlag, zz.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                Oz.e.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return sz && tz.markAllMaterialsAsDirty(1, (zz => zz.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const tz = {
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
            return Bz.e.Clone((() => new zz(this._texture ? this._texture.url : null, this.aJ(), tz)), this)
          }
          serialize() {
            const tz = this.name;
            zz.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const sz = super.serialize(zz._SerializeInternalTextureUniqueId);
            if (!sz) return null;
            if (zz.SerializeBuffers || zz.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) sz.base64String = this._buffer, sz.name = sz.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const zz = this.mimeType || "image/png";
              sz.base64String = `data:${zz};base64,${(0,bz.g)(this._buffer)}`
            } else(zz.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (sz.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? Dz(this) : gz(this));
            return sz.invertY = this._invertY, sz.samplingMode = this.samplingMode, sz._creationFlags = this._creationFlags, sz._useSRGBBuffer = this._useSRGBBuffer, zz._SerializeInternalTextureUniqueId && (sz.internalTextureUniqueId = this._texture?.uniqueId), sz.internalTextureLabel = this._texture?.label, sz.noMipmap = this._noMipmap, this.name = tz, sz
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(tz, sz, Fz) {
            if (tz.customType) {
              const zz = uz.d.Instantiate(tz.customType).Parse(tz, sz, Fz);
              return tz.samplingMode && zz.updateSamplingMode && zz._samplingMode && zz._samplingMode !== tz.samplingMode && zz.updateSamplingMode(tz.samplingMode), zz
            }
            if (tz.isCube && !tz.isRenderTarget) return zz._CubeTextureParser(tz, sz, Fz);
            const Wz = void 0 !== tz.internalTextureUniqueId;
            if (!tz.name && !tz.isRenderTarget && !Wz) return null;
            let Xz;
            if (Wz) {
              const zz = sz.FD().getLoadedTexturesCache();
              for (const sz of zz)
                if (sz.uniqueId === tz.internalTextureUniqueId) {
                  Xz = sz;
                  break
                }
            }
            const Oz = zz => {
              if (zz && zz._texture && (zz._texture._cachedWrapU = null, zz._texture._cachedWrapV = null, zz._texture._cachedWrapR = null), tz.samplingMode) {
                const sz = tz.samplingMode;
                zz && zz.samplingMode !== sz && zz.updateSamplingMode(sz)
              }
              if (zz && tz.animations)
                for (let sz = 0; sz < tz.animations.length; sz++) {
                  const Fz = tz.animations[sz],
                    Wz = (0, vz.e)("BABYLON.Animation");
                  Wz && zz.animations.push(Wz.Parse(Fz))
                }
              zz && zz._texture && (Wz && !Xz && zz._texture._setUniqueId(tz.internalTextureUniqueId), zz._texture.label = tz.internalTextureLabel)
            };
            return Bz.e.Parse((() => {
              let Wz = !0;
              if (tz.noMipmap && (Wz = !1), tz.mirrorPlane) {
                const Fz = zz._CreateMirror(tz.name, tz.renderTargetSize, sz, Wz);
                return Fz._waitingRenderList = tz.renderList, Fz.mirrorPlane = Nz.c.FromArray(tz.mirrorPlane), Oz(Fz), Fz
              }
              if (tz.isRenderTarget && !tz.base64String) {
                let Fz = null;
                if (tz.isCube) {
                  if (sz.reflectionProbes)
                    for (let zz = 0; zz < sz.reflectionProbes.length; zz++) {
                      const Fz = sz.reflectionProbes[zz];
                      if (Fz.name === tz.name) return Fz.cubeTexture
                    }
                } else Fz = zz._CreateRenderTargetTexture(tz.name, tz.renderTargetSize, sz, Wz, tz._creationFlags ?? 0), Fz._waitingRenderList = tz.renderList;
                return Oz(Fz), Fz
              }
              if (tz.isVideo) {
                const Xz = zz._CreateVideoTexture(Fz + (tz.url || tz.name), Fz + (tz.src || tz.url), sz, Wz, tz.invertY, tz.samplingMode, tz.settings || {});
                return Oz(Xz), Xz
              } {
                let oz;
                if ("string" === typeof tz.base64String && tz.base64String && !Xz) {
                  const Fz = {
                      buffer: tz.base64String,
                      noMipmap: !Wz,
                      invertY: tz.invertY,
                      samplingMode: tz.samplingMode,
                      useSRGBBuffer: tz._useSRGBBuffer ?? !1,
                      creationFlags: tz._creationFlags ?? 0,
                      onLoad: () => {
                        Oz(oz)
                      }
                    },
                    Xz = tz.base64String,
                    vz = Xz.startsWith("data:") ? Xz.substring(5) : Xz;
                  oz = zz.CreateFromBase64String("", vz, sz, Fz), oz.name = tz.name
                } else {
                  let vz;
                  vz = tz.name && (tz.name.indexOf("://") > 0 || tz.name.startsWith("data:")) ? tz.name : Fz + tz.name, tz.url && (tz.url.startsWith("data:") || zz.UseSerializedUrlIfAny) && (vz = tz.url);
                  const Uz = {
                    noMipmap: !Wz,
                    invertY: tz.invertY,
                    samplingMode: tz.samplingMode,
                    useSRGBBuffer: tz._useSRGBBuffer ?? !1,
                    creationFlags: tz._creationFlags ?? 0,
                    onLoad: () => {
                      Oz(oz)
                    },
                    internalTexture: Xz
                  };
                  oz = new zz(vz, sz, Uz)
                }
                return oz
              }
            }), tz, sz)
          }
          static CreateFromBase64String(tz, sz, Fz, Wz, Xz) {
            let Oz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : zz.TRILINEAR_SAMPLINGMODE;
            return new zz("data:" + sz, Fz, Wz, Xz, Oz, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, tz, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(tz, sz, Fz) {
            let Wz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Xz = arguments.length > 4 ? arguments[4] : void 0,
              Oz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              oz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : zz.TRILINEAR_SAMPLINGMODE,
              vz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Uz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              Kz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              uz = arguments.length > 10 ? arguments[10] : void 0,
              Nz = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== tz.substring(0, 5) && (tz = "data:" + tz), new zz(tz, Fz, Xz, Oz, oz, vz, Uz, sz, Wz, Kz, void 0, void 0, uz, Nz)
          }
        }, (() => {
          const Xz = "function" === typeof Symbol && Symbol.metadata ? Object.create(Gz[Symbol.metadata] ?? null) : void 0;
          tz = [(0, Wz.J)()], sz = [(0, Wz.J)()], wz = [(0, Wz.J)()], Pz = [(0, Wz.J)()], rz = [(0, Wz.J)()], Yz = [(0, Wz.J)()], xz = [(0, Wz.J)()], mz = [(0, Wz.J)()], Jz = [(0, Wz.J)()], Iz = [(0, Wz.J)()], Cz = [(0, Wz.J)()], ez = [(0, Wz.J)()], Zz = [(0, Wz.J)()], (0, Fz.h)(zz, null, Zz, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: zz => "isBlocking" in zz,
              get: zz => zz.isBlocking
            },
            metadata: Xz
          }, null, Tz), (0, Fz.h)(null, null, tz, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: zz => "url" in zz,
              get: zz => zz.url,
              set: (zz, tz) => {
                zz.url = tz
              }
            },
            metadata: Xz
          }, cz, jz), (0, Fz.h)(null, null, sz, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: zz => "uOffset" in zz,
              get: zz => zz.uOffset,
              set: (zz, tz) => {
                zz.uOffset = tz
              }
            },
            metadata: Xz
          }, Az, yz), (0, Fz.h)(null, null, wz, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: zz => "vOffset" in zz,
              get: zz => zz.vOffset,
              set: (zz, tz) => {
                zz.vOffset = tz
              }
            },
            metadata: Xz
          }, Mz, dz), (0, Fz.h)(null, null, Pz, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: zz => "uScale" in zz,
              get: zz => zz.uScale,
              set: (zz, tz) => {
                zz.uScale = tz
              }
            },
            metadata: Xz
          }, hz, Qz), (0, Fz.h)(null, null, rz, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: zz => "vScale" in zz,
              get: zz => zz.vScale,
              set: (zz, tz) => {
                zz.vScale = tz
              }
            },
            metadata: Xz
          }, kz, iz), (0, Fz.h)(null, null, Yz, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: zz => "uAng" in zz,
              get: zz => zz.uAng,
              set: (zz, tz) => {
                zz.uAng = tz
              }
            },
            metadata: Xz
          }, Lz, lz), (0, Fz.h)(null, null, xz, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: zz => "vAng" in zz,
              get: zz => zz.vAng,
              set: (zz, tz) => {
                zz.vAng = tz
              }
            },
            metadata: Xz
          }, nz, az), (0, Fz.h)(null, null, mz, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: zz => "wAng" in zz,
              get: zz => zz.wAng,
              set: (zz, tz) => {
                zz.wAng = tz
              }
            },
            metadata: Xz
          }, qz, Sz), (0, Fz.h)(null, null, Jz, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: zz => "uRotationCenter" in zz,
              get: zz => zz.uRotationCenter,
              set: (zz, tz) => {
                zz.uRotationCenter = tz
              }
            },
            metadata: Xz
          }, Vz, Rz), (0, Fz.h)(null, null, Iz, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: zz => "vRotationCenter" in zz,
              get: zz => zz.vRotationCenter,
              set: (zz, tz) => {
                zz.vRotationCenter = tz
              }
            },
            metadata: Xz
          }, pz, fz), (0, Fz.h)(null, null, Cz, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: zz => "wRotationCenter" in zz,
              get: zz => zz.wRotationCenter,
              set: (zz, tz) => {
                zz.wRotationCenter = tz
              }
            },
            metadata: Xz
          }, Ez, zt), (0, Fz.h)(null, null, ez, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: zz => "homogeneousRotationInUVTransform" in zz,
              get: zz => zz.homogeneousRotationInUVTransform,
              set: (zz, tz) => {
                zz.homogeneousRotationInUVTransform = tz
              }
            },
            metadata: Xz
          }, tt, st), Xz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Xz
          })
        })(), zz.SerializeBuffers = !0, zz.ForceSerializeBuffers = !1, zz.OnTextureLoadErrorObservable = new Xz.c, zz._SerializeInternalTextureUniqueId = !1, zz._CubeTextureParser = (zz, tz, sz) => {
          throw (0, Uz.i)("CubeTexture")
        }, zz._CreateMirror = (zz, tz, sz, Fz) => {
          throw (0, Uz.i)("MirrorTexture")
        }, zz._CreateRenderTargetTexture = (zz, tz, sz, Fz, Wz) => {
          throw (0, Uz.i)("RenderTargetTexture")
        }, zz.NEAREST_SAMPLINGMODE = 1, zz.NEAREST_NEAREST_MIPLINEAR = 8, zz.BILINEAR_SAMPLINGMODE = 2, zz.LINEAR_LINEAR_MIPNEAREST = 11, zz.TRILINEAR_SAMPLINGMODE = 3, zz.LINEAR_LINEAR_MIPLINEAR = 3, zz.NEAREST_NEAREST_MIPNEAREST = 4, zz.NEAREST_LINEAR_MIPNEAREST = 5, zz.NEAREST_LINEAR_MIPLINEAR = 6, zz.NEAREST_LINEAR = 7, zz.NEAREST_NEAREST = 1, zz.LINEAR_NEAREST_MIPNEAREST = 9, zz.LINEAR_NEAREST_MIPLINEAR = 10, zz.LINEAR_LINEAR = 2, zz.LINEAR_NEAREST = 12, zz.EXPLICIT_MODE = 0, zz.SPHERICAL_MODE = 1, zz.PLANAR_MODE = 2, zz.CUBIC_MODE = 3, zz.PROJECTION_MODE = 4, zz.SKYBOX_MODE = 5, zz.INVCUBIC_MODE = 6, zz.EQUIRECTANGULAR_MODE = 7, zz.FIXED_EQUIRECTANGULAR_MODE = 8, zz.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, zz.CLAMP_ADDRESSMODE = 0, zz.WRAP_ADDRESSMODE = 1, zz.MIRROR_ADDRESSMODE = 2, zz.UseSerializedUrlIfAny = !1, zz
      })(),
      rz = !1;

    function Yz() {
      rz || (rz = !0, (0, vz.g)("BABYLON.Texture", Pz), Bz.e._TextureParser = Pz.Parse)
    }
  },
  39179: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz
    });
    class Fz {
      constructor(zz, tz) {
        this.width = zz, this.height = tz
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let zz = 0 | this.width;
        return zz = 397 * zz ^ this.height, zz
      }
      vsz(zz) {
        this.width = zz.width, this.height = zz.height
      }
      m_(zz, tz) {
        return this.width = zz, this.height = tz, this
      }
      set(zz, tz) {
        return this.m_(zz, tz)
      }
      multiplyByFloats(zz, tz) {
        return new Fz(this.width * zz, this.height * tz)
      }
      clone() {
        return new Fz(this.width, this.height)
      }
      equals(zz) {
        return !!zz && (this.width === zz.width && this.height === zz.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new Fz(0, 0)
      }
      add(zz) {
        return new Fz(this.width + zz.width, this.height + zz.height)
      }
      subtract(zz) {
        return new Fz(this.width - zz.width, this.height - zz.height)
      }
      scale(zz) {
        return new Fz(this.width * zz, this.height * zz)
      }
      static Lerp(zz, tz, sz) {
        const Wz = zz.width + (tz.width - zz.width) * sz,
          Xz = zz.height + (tz.height - zz.height) * sz;
        return new Fz(Wz, Xz)
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);