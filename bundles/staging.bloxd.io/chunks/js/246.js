export const id = 246;
export const ids = [246];
export const modules = {
  39609: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Ez
    });
    let Ez = !1
  },
  39167: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Zz
    });
    var Ez = bz(39170),
      nz = bz(39172),
      iz = bz(36547),
      lz = bz(36519),
      Mz = bz(36543),
      tz = bz(37335),
      Hz = bz(39180);
    class Oz {
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
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = Hz.e.Zero(), this._cachedBaseSize = Hz.e.Zero(), this._initialSamplingMode = 2, this._texture = Oz._IsRenderTargetWrapper(zz) ? zz.texture : zz, this._texture && (this._engine = this._texture.uR(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(zz, this._texture, this._texture.generateMipMaps && uz)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var pz, dz = bz(39182),
      Fz = bz(39061);
    let Zz = (() => {
      var zz;
      let uz, bz, Hz, pz, Fz, Zz, Rz, Kz, wz, Xz, fz, sz, rz, oz, Nz, vz, xz, Jz, Az, Tz, Lz, Pz, Gz, az, Vz, mz = Oz,
        qz = [],
        hz = [],
        Uz = [],
        cz = [],
        gz = [],
        Sz = [],
        yz = [],
        Dz = [],
        Qz = [],
        Wz = [],
        ez = [],
        jz = [],
        Iz = [],
        Bz = [],
        Cz = [],
        Yz = [],
        kz = [],
        zu = [],
        uu = [],
        bu = [],
        Eu = [],
        nu = [],
        iu = [],
        lu = [],
        Mu = [],
        tu = [],
        Hu = [],
        Ou = [],
        pu = [],
        du = [],
        Fu = [];
      return zz = class extends mz {
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
          this.XT()?.markAllMaterialsAsDirty(1, (zz => zz.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(zz) {
          zz !== this.isRGBD && (this._texture && (this._texture._isRGBD = zz), this.XT()?.markAllMaterialsAsDirty(1, (zz => zz.hasTexture(this))))
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
          return this._uid || (this._uid = (0, tz.c)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(zz) {
          this._onDisposeObserver && this.aT.remove(this._onDisposeObserver), this._onDisposeObserver = this.aT.add(zz)
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
        constructor(uz) {
          let bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, Ez.j)(this, qz), (0, Ez.j)(this, hz, void 0)), this.name = ((0, Ez.j)(this, Uz), (0, Ez.j)(this, cz, void 0)), this.displayName = ((0, Ez.j)(this, gz), (0, Ez.j)(this, Sz, void 0)), this.metadata = ((0, Ez.j)(this, yz), (0, Ez.j)(this, Dz, null)), this._internalMetadata = (0, Ez.j)(this, Qz), this.reservedDataStore = null, this._hasAlpha = (0, Ez.j)(this, Wz, !1), this._getAlphaFromRGB = ((0, Ez.j)(this, ez), (0, Ez.j)(this, jz, !1)), this.level = ((0, Ez.j)(this, Iz), (0, Ez.j)(this, Bz, 1)), this._coordinatesIndex = ((0, Ez.j)(this, Cz), (0, Ez.j)(this, Yz, 0)), this.optimizeUVAllocation = ((0, Ez.j)(this, kz), (0, Ez.j)(this, zu, !0)), this._coordinatesMode = ((0, Ez.j)(this, uu), (0, Ez.j)(this, bu, 0)), this.wrapR = ((0, Ez.j)(this, Eu), (0, Ez.j)(this, nu, 1)), this.anisotropicFilteringLevel = ((0, Ez.j)(this, iu), (0, Ez.j)(this, lu, zz.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, Ez.j)(this, Mu), !1), this._gammaSpace = !0, this.invertZ = (0, Ez.j)(this, tu, !1), this.lodLevelInAlpha = ((0, Ez.j)(this, Hu), (0, Ez.j)(this, Ou, !1)), this._dominantDirection = ((0, Ez.j)(this, pu), null), this.isRenderTarget = (0, Ez.j)(this, du, !1), this._prefiltered = ((0, Ez.j)(this, Fu), !1), this._forceSerialize = !1, this.animations = [], this.aT = new iz.b, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, uz ? zz._IsScene(uz) ? this._scene = uz : this._engine = uz : this._scene = Mz.d.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.uR()), this._texture = bz, this._uid = null
        }
        XT() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return lz.d.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return lz.d.IdentityReadOnly
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
        _getFromCache(zz, uz, bz, Ez, nz, iz) {
          const lz = this._getEngine();
          if (!lz) return null;
          const Mz = lz._getUseSRGBBuffer(!!nz, uz),
            tz = lz.getLoadedTexturesCache();
          for (let Hz = 0; Hz < tz.length; Hz++) {
            const lz = tz[Hz];
            if ((void 0 === nz || Mz === lz._useSRGBBuffer) && (void 0 === Ez || Ez === lz.invertY) && lz.url === zz && lz.generateMipMaps === !uz && (!bz || bz === lz.samplingMode) && (void 0 === iz || iz === lz.isCube)) return lz.incrementReferences(), lz
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
          const zz = this.XT();
          zz && zz.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Ez = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            nz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            lz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            Mz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            tz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const Hz = this._getEngine();
          if (!Hz) return null;
          const Oz = this.getSize();
          let pz = Oz.width,
            dz = Oz.height;
          0 !== uz && (pz /= Math.pow(2, uz), dz /= Math.pow(2, uz), pz = Math.round(pz), dz = Math.round(dz)), Mz = Math.min(pz, Mz), tz = Math.min(dz, tz);
          try {
            return this._texture.isCube || this._texture.is2DArray ? Hz._readTexturePixels(this._texture, Mz, tz, zz, uz, bz, Ez, nz, iz, lz) : Hz._readTexturePixels(this._texture, Mz, tz, -1, uz, bz, Ez, nz, iz, lz)
          } catch (Fz) {
            return null
          }
        }
        _readPixelsSync() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Ez = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            nz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const iz = this.getSize();
          let lz = iz.width,
            Mz = iz.height;
          const tz = this._getEngine();
          if (!tz) return null;
          0 != uz && (lz /= Math.pow(2, uz), Mz /= Math.pow(2, uz), lz = Math.round(lz), Mz = Math.round(Mz));
          try {
            return this._texture.isCube ? tz._readTexturePixelsSync(this._texture, lz, Mz, zz, uz, bz, Ez, nz) : tz._readTexturePixelsSync(this._texture, lz, Mz, -1, uz, bz, Ez, nz)
          } catch (Hz) {
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
          this.aT.notifyObservers(this), this.aT.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !zz) return null;
          const uz = dz.e.Serialize(this);
          return dz.e.AppendSerializedAnimations(this, uz), uz
        }
        static WhenAllReady(zz, uz) {
          let bz = zz.length;
          if (0 !== bz)
            for (let Ez = 0; Ez < zz.length; Ez++) {
              const nz = zz[Ez];
              if (nz.isReady()) 0 === --bz && uz();
              else {
                const zz = nz.onLoadObservable;
                zz ? zz.addOnce((() => {
                  0 === --bz && uz()
                })) : 0 === --bz && uz()
              }
            } else uz()
        }
        static _IsScene(zz) {
          return "Scene" === zz.getClassName()
        }
      }, (() => {
        const iz = "function" === typeof Symbol && Symbol.metadata ? Object.create(mz[Symbol.metadata] ?? null) : void 0;
        uz = [(0, nz.G)()], bz = [(0, nz.G)()], Hz = [(0, nz.G)()], pz = [(0, nz.G)()], Fz = [(0, nz.G)("hasAlpha")], Zz = [(0, nz.G)("getAlphaFromRGB")], Rz = [(0, nz.G)()], Kz = [(0, nz.G)("coordinatesIndex")], wz = [(0, nz.G)()], Xz = [(0, nz.G)("coordinatesMode")], fz = [(0, nz.G)()], sz = [(0, nz.G)()], rz = [(0, nz.G)()], oz = [(0, nz.G)()], Nz = [(0, nz.G)()], vz = [(0, nz.G)()], xz = [(0, nz.G)()], Jz = [(0, nz.G)()], Az = [(0, nz.G)()], Tz = [(0, nz.G)()], Lz = [(0, nz.G)()], Pz = [(0, nz.G)()], Gz = [(0, nz.G)()], az = [(0, nz.B)()], Vz = [(0, nz.G)()], (0, Ez.h)(zz, null, fz, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: zz => "wrapU" in zz,
            get: zz => zz.wrapU
          },
          metadata: iz
        }, null, qz), (0, Ez.h)(zz, null, sz, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: zz => "wrapV" in zz,
            get: zz => zz.wrapV
          },
          metadata: iz
        }, null, qz), (0, Ez.h)(zz, null, Nz, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: zz => "isCube" in zz,
            get: zz => zz.isCube
          },
          metadata: iz
        }, null, qz), (0, Ez.h)(zz, null, vz, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: zz => "is3D" in zz,
            get: zz => zz.is3D
          },
          metadata: iz
        }, null, qz), (0, Ez.h)(zz, null, xz, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: zz => "is2DArray" in zz,
            get: zz => zz.is2DArray
          },
          metadata: iz
        }, null, qz), (0, Ez.h)(zz, null, Jz, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: zz => "gammaSpace" in zz,
            get: zz => zz.gammaSpace
          },
          metadata: iz
        }, null, qz), (0, Ez.h)(zz, null, Lz, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: zz => "lodGenerationOffset" in zz,
            get: zz => zz.lodGenerationOffset
          },
          metadata: iz
        }, null, qz), (0, Ez.h)(zz, null, Pz, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: zz => "lodGenerationScale" in zz,
            get: zz => zz.lodGenerationScale
          },
          metadata: iz
        }, null, qz), (0, Ez.h)(zz, null, Gz, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: zz => "linearSpecularLOD" in zz,
            get: zz => zz.linearSpecularLOD
          },
          metadata: iz
        }, null, qz), (0, Ez.h)(zz, null, az, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "irradianceTexture" in zz,
            get: zz => zz.irradianceTexture
          },
          metadata: iz
        }, null, qz), (0, Ez.h)(null, null, uz, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: zz => "uniqueId" in zz,
            get: zz => zz.uniqueId,
            set: (zz, uz) => {
              zz.uniqueId = uz
            }
          },
          metadata: iz
        }, hz, Uz), (0, Ez.h)(null, null, bz, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: zz => "name" in zz,
            get: zz => zz.name,
            set: (zz, uz) => {
              zz.name = uz
            }
          },
          metadata: iz
        }, cz, gz), (0, Ez.h)(null, null, Hz, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: zz => "displayName" in zz,
            get: zz => zz.displayName,
            set: (zz, uz) => {
              zz.displayName = uz
            }
          },
          metadata: iz
        }, Sz, yz), (0, Ez.h)(null, null, pz, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: zz => "metadata" in zz,
            get: zz => zz.metadata,
            set: (zz, uz) => {
              zz.metadata = uz
            }
          },
          metadata: iz
        }, Dz, Qz), (0, Ez.h)(null, null, Fz, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: zz => "_hasAlpha" in zz,
            get: zz => zz._hasAlpha,
            set: (zz, uz) => {
              zz._hasAlpha = uz
            }
          },
          metadata: iz
        }, Wz, ez), (0, Ez.h)(null, null, Zz, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: zz => "_getAlphaFromRGB" in zz,
            get: zz => zz._getAlphaFromRGB,
            set: (zz, uz) => {
              zz._getAlphaFromRGB = uz
            }
          },
          metadata: iz
        }, jz, Iz), (0, Ez.h)(null, null, Rz, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: zz => "level" in zz,
            get: zz => zz.level,
            set: (zz, uz) => {
              zz.level = uz
            }
          },
          metadata: iz
        }, Bz, Cz), (0, Ez.h)(null, null, Kz, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: zz => "_coordinatesIndex" in zz,
            get: zz => zz._coordinatesIndex,
            set: (zz, uz) => {
              zz._coordinatesIndex = uz
            }
          },
          metadata: iz
        }, Yz, kz), (0, Ez.h)(null, null, wz, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: zz => "optimizeUVAllocation" in zz,
            get: zz => zz.optimizeUVAllocation,
            set: (zz, uz) => {
              zz.optimizeUVAllocation = uz
            }
          },
          metadata: iz
        }, zu, uu), (0, Ez.h)(null, null, Xz, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: zz => "_coordinatesMode" in zz,
            get: zz => zz._coordinatesMode,
            set: (zz, uz) => {
              zz._coordinatesMode = uz
            }
          },
          metadata: iz
        }, bu, Eu), (0, Ez.h)(null, null, rz, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: zz => "wrapR" in zz,
            get: zz => zz.wrapR,
            set: (zz, uz) => {
              zz.wrapR = uz
            }
          },
          metadata: iz
        }, nu, iu), (0, Ez.h)(null, null, oz, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: zz => "anisotropicFilteringLevel" in zz,
            get: zz => zz.anisotropicFilteringLevel,
            set: (zz, uz) => {
              zz.anisotropicFilteringLevel = uz
            }
          },
          metadata: iz
        }, lu, Mu), (0, Ez.h)(null, null, Az, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: zz => "invertZ" in zz,
            get: zz => zz.invertZ,
            set: (zz, uz) => {
              zz.invertZ = uz
            }
          },
          metadata: iz
        }, tu, Hu), (0, Ez.h)(null, null, Tz, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: zz => "lodLevelInAlpha" in zz,
            get: zz => zz.lodLevelInAlpha,
            set: (zz, uz) => {
              zz.lodLevelInAlpha = uz
            }
          },
          metadata: iz
        }, Ou, pu), (0, Ez.h)(null, null, Vz, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: zz => "isRenderTarget" in zz,
            get: zz => zz.isRenderTarget,
            set: (zz, uz) => {
              zz.isRenderTarget = uz
            }
          },
          metadata: iz
        }, du, Fu), iz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: iz
        })
      })(), zz.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, zz
    })();
    (pz = Zz.prototype).forceSphericalPolynomialsRecompute ?? (pz.forceSphericalPolynomialsRecompute = (0, Fz.h)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(Zz.prototype, "sphericalPolynomial") || Object.defineProperty(Zz.prototype, "sphericalPolynomial", (0, Fz.f)("BaseTexture", "sphericalPolynomial"))
  },
  39636: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => rz,
      e: () => fz
    });
    var Ez = bz(39170),
      nz = bz(39172),
      iz = bz(36547),
      lz = bz(36519),
      Mz = bz(39167),
      tz = bz(36564),
      Hz = bz(39061),
      Oz = bz(39071),
      pz = bz(39265),
      dz = bz(37239),
      Fz = bz(39221);

    function Zz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Ez = uz.width,
        nz = uz.height;
      if (zz instanceof Float32Array) {
        let uz = zz.byteLength / zz.BYTES_PER_ELEMENT;
        const bz = new Uint8Array(uz);
        for (; --uz >= 0;) {
          let Ez = zz[uz];
          Ez < 0 ? Ez = 0 : Ez > 1 && (Ez = 1), bz[uz] = 255 * Ez
        }
        zz = bz
      }
      const iz = document.createElement("canvas");
      iz.width = Ez, iz.height = nz;
      const lz = iz.getContext("2d");
      if (!lz) return null;
      const Mz = lz.createImageData(Ez, nz);
      if (Mz.data.set(zz), lz.putImageData(Mz, 0, 0), bz) {
        const zz = document.createElement("canvas");
        zz.width = Ez, zz.height = nz;
        const uz = zz.getContext("2d");
        return uz ? (uz.translate(0, nz), uz.scale(1, -1), uz.drawImage(iz, 0, 0), zz.toDataURL("image/png")) : null
      }
      return iz.toDataURL("image/png")
    }

    function Rz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Ez = zz.getInternalTexture();
      if (!Ez) return null;
      const nz = zz._readPixelsSync(uz, bz);
      return nz ? Zz(nz, zz.getSize(), Ez.invertY) : null
    }
    async function Kz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Ez = zz.getInternalTexture();
      if (!Ez) return null;
      const nz = await zz.readPixels(uz, bz);
      return nz ? Zz(nz, zz.getSize(), Ez.invertY) : null
    }
    var wz = bz(39609),
      Xz = bz(39182);
    let fz = (() => {
        var zz;
        let uz, bz, Zz, fz, sz, rz, oz, Nz, vz, xz, Jz, Az, Tz, Lz = Mz.b,
          Pz = [],
          Gz = [],
          az = [],
          Vz = [],
          mz = [],
          qz = [],
          hz = [],
          Uz = [],
          cz = [],
          gz = [],
          Sz = [],
          yz = [],
          Dz = [],
          Qz = [],
          Wz = [],
          ez = [],
          jz = [],
          Iz = [],
          Bz = [],
          Cz = [],
          Yz = [],
          kz = [],
          zu = [],
          uu = [],
          bu = [];
        return zz = class extends Lz {
          static _CreateVideoTexture(uz, bz, Ez) {
            arguments.length > 5 && void 0 !== arguments[5] || zz.TRILINEAR_SAMPLINGMODE;
            throw (0, Hz.l)("VideoTexture")
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
          constructor(uz, bz, nz, lz) {
            let Mz, tz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : zz.TRILINEAR_SAMPLINGMODE,
              Hz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              pz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              dz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Fz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              Zz = arguments.length > 9 ? arguments[9] : void 0,
              Rz = arguments.length > 10 ? arguments[10] : void 0,
              Kz = arguments.length > 11 ? arguments[11] : void 0,
              Xz = arguments.length > 12 ? arguments[12] : void 0,
              fz = arguments.length > 13 ? arguments[13] : void 0;
            super(bz), this.url = ((0, Ez.j)(this, Pz), (0, Ez.j)(this, Gz, null)), this.uOffset = ((0, Ez.j)(this, az), (0, Ez.j)(this, Vz, 0)), this.vOffset = ((0, Ez.j)(this, mz), (0, Ez.j)(this, qz, 0)), this.uScale = ((0, Ez.j)(this, hz), (0, Ez.j)(this, Uz, 1)), this.vScale = ((0, Ez.j)(this, cz), (0, Ez.j)(this, gz, 1)), this.uAng = ((0, Ez.j)(this, Sz), (0, Ez.j)(this, yz, 0)), this.vAng = ((0, Ez.j)(this, Dz), (0, Ez.j)(this, Qz, 0)), this.wAng = ((0, Ez.j)(this, Wz), (0, Ez.j)(this, ez, 0)), this.uRotationCenter = ((0, Ez.j)(this, jz), (0, Ez.j)(this, Iz, .5)), this.vRotationCenter = ((0, Ez.j)(this, Bz), (0, Ez.j)(this, Cz, .5)), this.wRotationCenter = ((0, Ez.j)(this, Yz), (0, Ez.j)(this, kz, .5)), this.homogeneousRotationInUVTransform = ((0, Ez.j)(this, zu), (0, Ez.j)(this, uu, !1)), this.inspectableCustomProperties = ((0, Ez.j)(this, bu), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new iz.b, this._isBlocking = !0, this.name = uz || "", this.url = uz;
            let sz = !1,
              rz = null,
              oz = !0;
            "object" === typeof nz && null !== nz ? (Mz = nz.noMipmap ?? !1, lz = nz.invertY ?? !wz.b, tz = nz.samplingMode ?? zz.TRILINEAR_SAMPLINGMODE, Hz = nz.onLoad ?? null, pz = nz.onError ?? null, dz = nz.buffer ?? null, Fz = nz.deleteBuffer ?? !1, Zz = nz.format, Rz = nz.mimeType, Kz = nz.loaderOptions, Xz = nz.creationFlags, sz = nz.useSRGBBuffer ?? !1, rz = nz.internalTexture ?? null, oz = nz.gammaSpace ?? oz, fz = nz.forcedExtension ?? fz) : Mz = !!nz, this._gammaSpace = oz, this._noMipmap = Mz, this._invertY = void 0 === lz ? !wz.b : lz, this._initialSamplingMode = tz, this._buffer = dz, this._deleteBuffer = Fz, this._mimeType = Rz, this._loaderOptions = Kz, this._creationFlags = Xz, this._useSRGBBuffer = sz, this._forcedExtension = fz, void 0 !== Zz && (this._format = Zz);
            const Nz = this.XT(),
              vz = this._getEngine();
            if (!vz) return;
            vz.onBeforeTextureInitObservable.notifyObservers(this);
            const xz = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), Hz && Hz(), !this.isBlocking && Nz && Nz.resetCachedMaterial()
              },
              Jz = (uz, bz) => {
                this._loadingError = !0, this._errorObject = {
                  message: uz,
                  exception: bz
                }, pz && pz(uz, bz), zz.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !rz) return this._delayedOnLoad = xz, void(this._delayedOnError = Jz);
            if (this._texture = rz ?? this._getFromCache(this.url, Mz, tz, this._invertY, sz, this.isCube), this._texture)
              if (this._texture.isReady) Oz.c.SetImmediate((() => xz()));
              else {
                const zz = this._texture.onLoadedObservable.add(xz);
                this._texture.onErrorObservable.add((uz => {
                  Jz(uz.message, uz.exception), this._texture?.onLoadedObservable.remove(zz)
                }))
              }
            else if (Nz && Nz.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = xz, this._delayedOnError = Jz;
            else {
              try {
                this._texture = vz.createTexture(this.url, Mz, this._invertY, Nz, tz, xz, Jz, this._buffer, void 0, this._format, this._forcedExtension, Rz, Kz, Xz, sz)
              } catch (Az) {
                throw Jz("error loading", Az), Az
              }
              Fz && (this._buffer = null)
            }
          }
          updateURL(zz) {
            let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              bz = arguments.length > 2 ? arguments[2] : void 0,
              Ez = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.XT().markAllMaterialsAsDirty(1, (zz => zz.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = zz), this.url = zz, this._buffer = uz, this._forcedExtension = Ez, this.delayLoadState = 4;
            const nz = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              nz ? nz() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), bz && bz()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const zz = this.XT();
            if (!zz) return;
            let uz = this.url;
            !uz && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (uz = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(uz, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? Oz.c.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = zz.uR().createTexture(uz, this._noMipmap, this._invertY, zz, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(zz, uz, bz, Ez) {
            zz *= this._cachedUScale, uz *= this._cachedVScale, zz -= this.uRotationCenter * this._cachedUScale, uz -= this.vRotationCenter * this._cachedVScale, bz -= this.wRotationCenter, lz.n.TransformCoordinatesFromFloatsToRef(zz, uz, bz, this._rowGenerationMatrix, Ez), Ez.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, Ez.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, Ez.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * zz === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * zz, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = lz.d.Zero(), this._rowGenerationMatrix = new lz.d, this._t0 = lz.n.Zero(), this._t1 = lz.n.Zero(), this._t2 = lz.n.Zero()), lz.d.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (lz.d.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, lz.l.Matrix[0]), lz.d.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, lz.l.Matrix[1]), lz.d.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, lz.l.Matrix[2]), lz.d.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, lz.l.Matrix[3]), lz.l.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(lz.l.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(lz.l.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(lz.l.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.Qbz(this._t0), this._t2.Qbz(this._t0), lz.d.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const uz = this.XT();
            if (!uz) return this._cachedTextureMatrix;
            const bz = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && bz !== this._cachedIdentity3x2 && uz.markAllMaterialsAsDirty(1, (zz => zz.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const uz = this.XT();
            if (!uz) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== zz.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === uz.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = lz.d.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = lz.d.Zero());
            const bz = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case zz.PLANAR_MODE:
                lz.d.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case zz.PROJECTION_MODE: {
                lz.d.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const zz = uz.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = zz.updateFlag, zz.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                lz.d.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return bz && uz.markAllMaterialsAsDirty(1, (zz => zz.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const uz = {
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
            return Xz.e.Clone((() => new zz(this._texture ? this._texture.url : null, this.XT(), uz)), this)
          }
          serialize() {
            const uz = this.name;
            zz.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const bz = super.serialize(zz._SerializeInternalTextureUniqueId);
            if (!bz) return null;
            if (zz.SerializeBuffers || zz.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) bz.base64String = this._buffer, bz.name = bz.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const zz = this.mimeType || "image/png";
              bz.base64String = `data:${zz};base64,${(0,Fz.h)(this._buffer)}`
            } else(zz.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (bz.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? Rz(this) : Kz(this));
            return bz.invertY = this._invertY, bz.samplingMode = this.samplingMode, bz._creationFlags = this._creationFlags, bz._useSRGBBuffer = this._useSRGBBuffer, zz._SerializeInternalTextureUniqueId && (bz.internalTextureUniqueId = this._texture?.uniqueId), bz.internalTextureLabel = this._texture?.label, bz.noMipmap = this._noMipmap, this.name = uz, bz
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(uz, bz, Ez) {
            if (uz.customType) {
              const zz = pz.d.Instantiate(uz.customType).Parse(uz, bz, Ez);
              return uz.samplingMode && zz.updateSamplingMode && zz._samplingMode && zz._samplingMode !== uz.samplingMode && zz.updateSamplingMode(uz.samplingMode), zz
            }
            if (uz.isCube && !uz.isRenderTarget) return zz._CubeTextureParser(uz, bz, Ez);
            const nz = void 0 !== uz.internalTextureUniqueId;
            if (!uz.name && !uz.isRenderTarget && !nz) return null;
            let iz;
            if (nz) {
              const zz = bz.uR().getLoadedTexturesCache();
              for (const bz of zz)
                if (bz.uniqueId === uz.internalTextureUniqueId) {
                  iz = bz;
                  break
                }
            }
            const lz = zz => {
              if (zz && zz._texture && (zz._texture._cachedWrapU = null, zz._texture._cachedWrapV = null, zz._texture._cachedWrapR = null), uz.samplingMode) {
                const bz = uz.samplingMode;
                zz && zz.samplingMode !== bz && zz.updateSamplingMode(bz)
              }
              if (zz && uz.animations)
                for (let bz = 0; bz < uz.animations.length; bz++) {
                  const Ez = uz.animations[bz],
                    nz = (0, tz.b)("BABYLON.Animation");
                  nz && zz.animations.push(nz.Parse(Ez))
                }
              zz && zz._texture && (nz && !iz && zz._texture._setUniqueId(uz.internalTextureUniqueId), zz._texture.label = uz.internalTextureLabel)
            };
            return Xz.e.Parse((() => {
              let nz = !0;
              if (uz.noMipmap && (nz = !1), uz.mirrorPlane) {
                const Ez = zz._CreateMirror(uz.name, uz.renderTargetSize, bz, nz);
                return Ez._waitingRenderList = uz.renderList, Ez.mirrorPlane = dz.b.FromArray(uz.mirrorPlane), lz(Ez), Ez
              }
              if (uz.isRenderTarget && !uz.base64String) {
                let Ez = null;
                if (uz.isCube) {
                  if (bz.reflectionProbes)
                    for (let zz = 0; zz < bz.reflectionProbes.length; zz++) {
                      const Ez = bz.reflectionProbes[zz];
                      if (Ez.name === uz.name) return Ez.cubeTexture
                    }
                } else Ez = zz._CreateRenderTargetTexture(uz.name, uz.renderTargetSize, bz, nz, uz._creationFlags ?? 0), Ez._waitingRenderList = uz.renderList;
                return lz(Ez), Ez
              }
              if (uz.isVideo) {
                const iz = zz._CreateVideoTexture(Ez + (uz.url || uz.name), Ez + (uz.src || uz.url), bz, nz, uz.invertY, uz.samplingMode, uz.settings || {});
                return lz(iz), iz
              } {
                let Mz;
                if ("string" === typeof uz.base64String && uz.base64String && !iz) {
                  const Ez = {
                      buffer: uz.base64String,
                      noMipmap: !nz,
                      invertY: uz.invertY,
                      samplingMode: uz.samplingMode,
                      useSRGBBuffer: uz._useSRGBBuffer ?? !1,
                      creationFlags: uz._creationFlags ?? 0,
                      onLoad: () => {
                        lz(Mz)
                      }
                    },
                    iz = uz.base64String,
                    tz = iz.startsWith("data:") ? iz.substring(5) : iz;
                  Mz = zz.CreateFromBase64String("", tz, bz, Ez), Mz.name = uz.name
                } else {
                  let tz;
                  tz = uz.name && (uz.name.indexOf("://") > 0 || uz.name.startsWith("data:")) ? uz.name : Ez + uz.name, uz.url && (uz.url.startsWith("data:") || zz.UseSerializedUrlIfAny) && (tz = uz.url);
                  const Hz = {
                    noMipmap: !nz,
                    invertY: uz.invertY,
                    samplingMode: uz.samplingMode,
                    useSRGBBuffer: uz._useSRGBBuffer ?? !1,
                    creationFlags: uz._creationFlags ?? 0,
                    onLoad: () => {
                      lz(Mz)
                    },
                    internalTexture: iz
                  };
                  Mz = new zz(tz, bz, Hz)
                }
                return Mz
              }
            }), uz, bz)
          }
          static CreateFromBase64String(uz, bz, Ez, nz, iz) {
            let lz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : zz.TRILINEAR_SAMPLINGMODE;
            return new zz("data:" + bz, Ez, nz, iz, lz, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, uz, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(uz, bz, Ez) {
            let nz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              iz = arguments.length > 4 ? arguments[4] : void 0,
              lz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              Mz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : zz.TRILINEAR_SAMPLINGMODE,
              tz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Hz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              Oz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              pz = arguments.length > 10 ? arguments[10] : void 0,
              dz = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== uz.substring(0, 5) && (uz = "data:" + uz), new zz(uz, Ez, iz, lz, Mz, tz, Hz, bz, nz, Oz, void 0, void 0, pz, dz)
          }
        }, (() => {
          const iz = "function" === typeof Symbol && Symbol.metadata ? Object.create(Lz[Symbol.metadata] ?? null) : void 0;
          uz = [(0, nz.G)()], bz = [(0, nz.G)()], Zz = [(0, nz.G)()], fz = [(0, nz.G)()], sz = [(0, nz.G)()], rz = [(0, nz.G)()], oz = [(0, nz.G)()], Nz = [(0, nz.G)()], vz = [(0, nz.G)()], xz = [(0, nz.G)()], Jz = [(0, nz.G)()], Az = [(0, nz.G)()], Tz = [(0, nz.G)()], (0, Ez.h)(zz, null, Tz, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: zz => "isBlocking" in zz,
              get: zz => zz.isBlocking
            },
            metadata: iz
          }, null, Pz), (0, Ez.h)(null, null, uz, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: zz => "url" in zz,
              get: zz => zz.url,
              set: (zz, uz) => {
                zz.url = uz
              }
            },
            metadata: iz
          }, Gz, az), (0, Ez.h)(null, null, bz, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: zz => "uOffset" in zz,
              get: zz => zz.uOffset,
              set: (zz, uz) => {
                zz.uOffset = uz
              }
            },
            metadata: iz
          }, Vz, mz), (0, Ez.h)(null, null, Zz, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: zz => "vOffset" in zz,
              get: zz => zz.vOffset,
              set: (zz, uz) => {
                zz.vOffset = uz
              }
            },
            metadata: iz
          }, qz, hz), (0, Ez.h)(null, null, fz, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: zz => "uScale" in zz,
              get: zz => zz.uScale,
              set: (zz, uz) => {
                zz.uScale = uz
              }
            },
            metadata: iz
          }, Uz, cz), (0, Ez.h)(null, null, sz, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: zz => "vScale" in zz,
              get: zz => zz.vScale,
              set: (zz, uz) => {
                zz.vScale = uz
              }
            },
            metadata: iz
          }, gz, Sz), (0, Ez.h)(null, null, rz, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: zz => "uAng" in zz,
              get: zz => zz.uAng,
              set: (zz, uz) => {
                zz.uAng = uz
              }
            },
            metadata: iz
          }, yz, Dz), (0, Ez.h)(null, null, oz, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: zz => "vAng" in zz,
              get: zz => zz.vAng,
              set: (zz, uz) => {
                zz.vAng = uz
              }
            },
            metadata: iz
          }, Qz, Wz), (0, Ez.h)(null, null, Nz, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: zz => "wAng" in zz,
              get: zz => zz.wAng,
              set: (zz, uz) => {
                zz.wAng = uz
              }
            },
            metadata: iz
          }, ez, jz), (0, Ez.h)(null, null, vz, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: zz => "uRotationCenter" in zz,
              get: zz => zz.uRotationCenter,
              set: (zz, uz) => {
                zz.uRotationCenter = uz
              }
            },
            metadata: iz
          }, Iz, Bz), (0, Ez.h)(null, null, xz, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: zz => "vRotationCenter" in zz,
              get: zz => zz.vRotationCenter,
              set: (zz, uz) => {
                zz.vRotationCenter = uz
              }
            },
            metadata: iz
          }, Cz, Yz), (0, Ez.h)(null, null, Jz, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: zz => "wRotationCenter" in zz,
              get: zz => zz.wRotationCenter,
              set: (zz, uz) => {
                zz.wRotationCenter = uz
              }
            },
            metadata: iz
          }, kz, zu), (0, Ez.h)(null, null, Az, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: zz => "homogeneousRotationInUVTransform" in zz,
              get: zz => zz.homogeneousRotationInUVTransform,
              set: (zz, uz) => {
                zz.homogeneousRotationInUVTransform = uz
              }
            },
            metadata: iz
          }, uu, bu), iz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iz
          })
        })(), zz.SerializeBuffers = !0, zz.ForceSerializeBuffers = !1, zz.OnTextureLoadErrorObservable = new iz.b, zz._SerializeInternalTextureUniqueId = !1, zz._CubeTextureParser = (zz, uz, bz) => {
          throw (0, Hz.l)("CubeTexture")
        }, zz._CreateMirror = (zz, uz, bz, Ez) => {
          throw (0, Hz.l)("MirrorTexture")
        }, zz._CreateRenderTargetTexture = (zz, uz, bz, Ez, nz) => {
          throw (0, Hz.l)("RenderTargetTexture")
        }, zz.NEAREST_SAMPLINGMODE = 1, zz.NEAREST_NEAREST_MIPLINEAR = 8, zz.BILINEAR_SAMPLINGMODE = 2, zz.LINEAR_LINEAR_MIPNEAREST = 11, zz.TRILINEAR_SAMPLINGMODE = 3, zz.LINEAR_LINEAR_MIPLINEAR = 3, zz.NEAREST_NEAREST_MIPNEAREST = 4, zz.NEAREST_LINEAR_MIPNEAREST = 5, zz.NEAREST_LINEAR_MIPLINEAR = 6, zz.NEAREST_LINEAR = 7, zz.NEAREST_NEAREST = 1, zz.LINEAR_NEAREST_MIPNEAREST = 9, zz.LINEAR_NEAREST_MIPLINEAR = 10, zz.LINEAR_LINEAR = 2, zz.LINEAR_NEAREST = 12, zz.EXPLICIT_MODE = 0, zz.SPHERICAL_MODE = 1, zz.PLANAR_MODE = 2, zz.CUBIC_MODE = 3, zz.PROJECTION_MODE = 4, zz.SKYBOX_MODE = 5, zz.INVCUBIC_MODE = 6, zz.EQUIRECTANGULAR_MODE = 7, zz.FIXED_EQUIRECTANGULAR_MODE = 8, zz.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, zz.CLAMP_ADDRESSMODE = 0, zz.WRAP_ADDRESSMODE = 1, zz.MIRROR_ADDRESSMODE = 2, zz.UseSerializedUrlIfAny = !1, zz
      })(),
      sz = !1;

    function rz() {
      sz || (sz = !0, (0, tz.c)("BABYLON.Texture", fz), Xz.e._TextureParser = fz.Parse)
    }
  },
  39180: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez
    });
    class Ez {
      constructor(zz, uz) {
        this.width = zz, this.height = uz
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
      euz(zz) {
        this.width = zz.width, this.height = zz.height
      }
      P_(zz, uz) {
        return this.width = zz, this.height = uz, this
      }
      set(zz, uz) {
        return this.P_(zz, uz)
      }
      multiplyByFloats(zz, uz) {
        return new Ez(this.width * zz, this.height * uz)
      }
      clone() {
        return new Ez(this.width, this.height)
      }
      equals(zz) {
        return !!zz && (this.width === zz.width && this.height === zz.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new Ez(0, 0)
      }
      add(zz) {
        return new Ez(this.width + zz.width, this.height + zz.height)
      }
      subtract(zz) {
        return new Ez(this.width - zz.width, this.height - zz.height)
      }
      scale(zz) {
        return new Ez(this.width * zz, this.height * zz)
      }
      static Lerp(zz, uz, bz) {
        const nz = zz.width + (uz.width - zz.width) * bz,
          iz = zz.height + (uz.height - zz.height) * bz;
        return new Ez(nz, iz)
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);