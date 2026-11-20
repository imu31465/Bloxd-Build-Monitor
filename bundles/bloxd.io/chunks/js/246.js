export const id = 246;
export const ids = [246];
export const modules = {
  40003: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu
    });
    let Eu = !1
  },
  39555: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Su
    });
    var Eu = yu(39560),
      Ku = yu(39566),
      Qu = yu(36858),
      mu = yu(36830),
      Ju = yu(36851),
      Nu = yu(37665),
      Xu = yu(39580);
    class Vu {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(uu) {
        this._wrapU = uu
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(uu) {
        this._wrapV = uu
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(uu) {
        this._texture && (this._texture.isCube = uu)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(uu) {
        this._texture && (this._texture.is3D = uu)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(uu) {
        this._texture && (this._texture.is2DArray = uu)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(uu) {
        return void 0 !== uu?.shareDepth
      }
      constructor(uu) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = Xu.c.Zero(), this._cachedBaseSize = Xu.c.Zero(), this._initialSamplingMode = 2, this._texture = Vu._IsRenderTargetWrapper(uu) ? uu.texture : uu, this._texture && (this._engine = this._texture.eS(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(uu, this._texture, this._texture.generateMipMaps && Ru)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var ru, Bu = yu(39582),
      xu = yu(39430);
    let Su = (() => {
      var uu;
      let Ru, yu, Xu, ru, xu, Su, pu, Tu, Wu, ju, Hu, du, bu, Cu, ku, eu, Au, Du, Mu, Iu, Gu, Uu, nu, su, tu, lu = Vu,
        gu = [],
        cu = [],
        Lu = [],
        zu = [],
        Fu = [],
        wu = [],
        Zu = [],
        hu = [],
        Pu = [],
        iu = [],
        Yu = [],
        ou = [],
        qu = [],
        Ou = [],
        vu = [],
        au = [],
        fu = [],
        uR = [],
        RR = [],
        yR = [],
        ER = [],
        KR = [],
        QR = [],
        mR = [],
        JR = [],
        NR = [],
        XR = [],
        VR = [],
        rR = [],
        BR = [],
        xR = [];
      return uu = class extends lu {
        set hasAlpha(uu) {
          this._hasAlpha = uu
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(uu) {
          this._getAlphaFromRGB !== uu && (this._getAlphaFromRGB = uu, this._scene && this._scene.markAllMaterialsAsDirty(1, (uu => uu.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(uu) {
          this._coordinatesIndex !== uu && (this._coordinatesIndex = uu, this._scene && this._scene.markAllMaterialsAsDirty(1, (uu => uu.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(uu) {
          this._coordinatesMode !== uu && (this._coordinatesMode = uu, this._scene && this._scene.markAllMaterialsAsDirty(1, (uu => uu.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(uu) {
          this._wrapU = uu
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(uu) {
          this._wrapV = uu
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(uu) {
          this._texture ? this._texture.isCube = uu : this._isCube = uu
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(uu) {
          this._texture && (this._texture.is3D = uu)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(uu) {
          this._texture && (this._texture.is2DArray = uu)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(uu) {
          if (this._texture) {
            if (this._texture._gammaSpace === uu) return;
            this._texture._gammaSpace = uu
          } else {
            if (this._gammaSpace === uu) return;
            this._gammaSpace = uu
          }
          this.lD()?.markAllMaterialsAsDirty(1, (uu => uu.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(uu) {
          uu !== this.isRGBD && (this._texture && (this._texture._isRGBD = uu), this.lD()?.markAllMaterialsAsDirty(1, (uu => uu.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(uu) {
          this._texture && (this._texture._lodGenerationOffset = uu)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(uu) {
          this._texture && (this._texture._lodGenerationScale = uu)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(uu) {
          this._texture && (this._texture._linearSpecularLOD = uu)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(uu) {
          this._texture && (this._texture._irradianceTexture = uu)
        }
        get uid() {
          return this._uid || (this._uid = (0, Nu.b)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(uu) {
          this._onDisposeObserver && this.zD.remove(this._onDisposeObserver), this._onDisposeObserver = this.zD.add(uu)
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
        constructor(Ru) {
          let yu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, Eu.l)(this, gu), (0, Eu.l)(this, cu, void 0)), this.name = ((0, Eu.l)(this, Lu), (0, Eu.l)(this, zu, void 0)), this.displayName = ((0, Eu.l)(this, Fu), (0, Eu.l)(this, wu, void 0)), this.metadata = ((0, Eu.l)(this, Zu), (0, Eu.l)(this, hu, null)), this._internalMetadata = (0, Eu.l)(this, Pu), this.reservedDataStore = null, this._hasAlpha = (0, Eu.l)(this, iu, !1), this._getAlphaFromRGB = ((0, Eu.l)(this, Yu), (0, Eu.l)(this, ou, !1)), this.level = ((0, Eu.l)(this, qu), (0, Eu.l)(this, Ou, 1)), this._coordinatesIndex = ((0, Eu.l)(this, vu), (0, Eu.l)(this, au, 0)), this.optimizeUVAllocation = ((0, Eu.l)(this, fu), (0, Eu.l)(this, uR, !0)), this._coordinatesMode = ((0, Eu.l)(this, RR), (0, Eu.l)(this, yR, 0)), this.wrapR = ((0, Eu.l)(this, ER), (0, Eu.l)(this, KR, 1)), this.anisotropicFilteringLevel = ((0, Eu.l)(this, QR), (0, Eu.l)(this, mR, uu.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, Eu.l)(this, JR), !1), this._gammaSpace = !0, this.invertZ = (0, Eu.l)(this, NR, !1), this.lodLevelInAlpha = ((0, Eu.l)(this, XR), (0, Eu.l)(this, VR, !1)), this._dominantDirection = ((0, Eu.l)(this, rR), null), this.isRenderTarget = (0, Eu.l)(this, BR, !1), this._prefiltered = ((0, Eu.l)(this, xR), !1), this._forceSerialize = !1, this.animations = [], this.zD = new Qu.b, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, Ru ? uu._IsScene(Ru) ? this._scene = Ru : this._engine = Ru : this._scene = Ju.b.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.eS()), this._texture = yu, this._uid = null
        }
        lD() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return mu.d.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return mu.d.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(uu) {}
        get canRescale() {
          return !1
        }
        _getFromCache(uu, Ru, yu, Eu, Ku, Qu) {
          const mu = this._getEngine();
          if (!mu) return null;
          const Ju = mu._getUseSRGBBuffer(!!Ku, Ru),
            Nu = mu.getLoadedTexturesCache();
          for (let Xu = 0; Xu < Nu.length; Xu++) {
            const mu = Nu[Xu];
            if ((void 0 === Ku || Ju === mu._useSRGBBuffer) && (void 0 === Eu || Eu === mu.invertY) && mu.url === uu && mu.generateMipMaps === !Ru && (!yu || yu === mu.samplingMode) && (void 0 === Qu || Qu === mu.isCube)) return mu.incrementReferences(), mu
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
          const uu = this.lD();
          uu && uu.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Eu = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Ku = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            mu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            Ju = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            Nu = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const Xu = this._getEngine();
          if (!Xu) return null;
          const Vu = this.getSize();
          let ru = Vu.width,
            Bu = Vu.height;
          0 !== Ru && (ru /= Math.pow(2, Ru), Bu /= Math.pow(2, Ru), ru = Math.round(ru), Bu = Math.round(Bu)), Ju = Math.min(ru, Ju), Nu = Math.min(Bu, Nu);
          try {
            return this._texture.isCube || this._texture.is2DArray ? Xu._readTexturePixels(this._texture, Ju, Nu, uu, Ru, yu, Eu, Ku, Qu, mu) : Xu._readTexturePixels(this._texture, Ju, Nu, -1, Ru, yu, Eu, Ku, Qu, mu)
          } catch (xu) {
            return null
          }
        }
        _readPixelsSync() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Eu = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Ku = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const Qu = this.getSize();
          let mu = Qu.width,
            Ju = Qu.height;
          const Nu = this._getEngine();
          if (!Nu) return null;
          0 != Ru && (mu /= Math.pow(2, Ru), Ju /= Math.pow(2, Ru), mu = Math.round(mu), Ju = Math.round(Ju));
          try {
            return this._texture.isCube ? Nu._readTexturePixelsSync(this._texture, mu, Ju, uu, Ru, yu, Eu, Ku) : Nu._readTexturePixelsSync(this._texture, mu, Ju, -1, Ru, yu, Eu, Ku)
          } catch (Xu) {
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
            const uu = this._scene.textures.indexOf(this);
            if (uu >= 0 && this._scene.textures.splice(uu, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const uu = this._parentContainer.textures.indexOf(this);
              uu > -1 && this._parentContainer.textures.splice(uu, 1), this._parentContainer = null
            }
          }
          this.zD.notifyObservers(this), this.zD.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !uu) return null;
          const Ru = Bu.c.Serialize(this);
          return Bu.c.AppendSerializedAnimations(this, Ru), Ru
        }
        static WhenAllReady(uu, Ru) {
          let yu = uu.length;
          if (0 !== yu)
            for (let Eu = 0; Eu < uu.length; Eu++) {
              const Ku = uu[Eu];
              if (Ku.isReady()) 0 === --yu && Ru();
              else {
                const uu = Ku.onLoadObservable;
                uu ? uu.addOnce((() => {
                  0 === --yu && Ru()
                })) : 0 === --yu && Ru()
              }
            } else Ru()
        }
        static _IsScene(uu) {
          return "Scene" === uu.getClassName()
        }
      }, (() => {
        const Qu = "function" === typeof Symbol && Symbol.metadata ? Object.create(lu[Symbol.metadata] ?? null) : void 0;
        Ru = [(0, Ku.K)()], yu = [(0, Ku.K)()], Xu = [(0, Ku.K)()], ru = [(0, Ku.K)()], xu = [(0, Ku.K)("hasAlpha")], Su = [(0, Ku.K)("getAlphaFromRGB")], pu = [(0, Ku.K)()], Tu = [(0, Ku.K)("coordinatesIndex")], Wu = [(0, Ku.K)()], ju = [(0, Ku.K)("coordinatesMode")], Hu = [(0, Ku.K)()], du = [(0, Ku.K)()], bu = [(0, Ku.K)()], Cu = [(0, Ku.K)()], ku = [(0, Ku.K)()], eu = [(0, Ku.K)()], Au = [(0, Ku.K)()], Du = [(0, Ku.K)()], Mu = [(0, Ku.K)()], Iu = [(0, Ku.K)()], Gu = [(0, Ku.K)()], Uu = [(0, Ku.K)()], nu = [(0, Ku.K)()], su = [(0, Ku.A)()], tu = [(0, Ku.K)()], (0, Eu.h)(uu, null, Hu, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: uu => "wrapU" in uu,
            get: uu => uu.wrapU
          },
          metadata: Qu
        }, null, gu), (0, Eu.h)(uu, null, du, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: uu => "wrapV" in uu,
            get: uu => uu.wrapV
          },
          metadata: Qu
        }, null, gu), (0, Eu.h)(uu, null, ku, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: uu => "isCube" in uu,
            get: uu => uu.isCube
          },
          metadata: Qu
        }, null, gu), (0, Eu.h)(uu, null, eu, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: uu => "is3D" in uu,
            get: uu => uu.is3D
          },
          metadata: Qu
        }, null, gu), (0, Eu.h)(uu, null, Au, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: uu => "is2DArray" in uu,
            get: uu => uu.is2DArray
          },
          metadata: Qu
        }, null, gu), (0, Eu.h)(uu, null, Du, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: uu => "gammaSpace" in uu,
            get: uu => uu.gammaSpace
          },
          metadata: Qu
        }, null, gu), (0, Eu.h)(uu, null, Gu, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: uu => "lodGenerationOffset" in uu,
            get: uu => uu.lodGenerationOffset
          },
          metadata: Qu
        }, null, gu), (0, Eu.h)(uu, null, Uu, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: uu => "lodGenerationScale" in uu,
            get: uu => uu.lodGenerationScale
          },
          metadata: Qu
        }, null, gu), (0, Eu.h)(uu, null, nu, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: uu => "linearSpecularLOD" in uu,
            get: uu => uu.linearSpecularLOD
          },
          metadata: Qu
        }, null, gu), (0, Eu.h)(uu, null, su, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "irradianceTexture" in uu,
            get: uu => uu.irradianceTexture
          },
          metadata: Qu
        }, null, gu), (0, Eu.h)(null, null, Ru, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: uu => "uniqueId" in uu,
            get: uu => uu.uniqueId,
            set: (uu, Ru) => {
              uu.uniqueId = Ru
            }
          },
          metadata: Qu
        }, cu, Lu), (0, Eu.h)(null, null, yu, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: uu => "name" in uu,
            get: uu => uu.name,
            set: (uu, Ru) => {
              uu.name = Ru
            }
          },
          metadata: Qu
        }, zu, Fu), (0, Eu.h)(null, null, Xu, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: uu => "displayName" in uu,
            get: uu => uu.displayName,
            set: (uu, Ru) => {
              uu.displayName = Ru
            }
          },
          metadata: Qu
        }, wu, Zu), (0, Eu.h)(null, null, ru, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: uu => "metadata" in uu,
            get: uu => uu.metadata,
            set: (uu, Ru) => {
              uu.metadata = Ru
            }
          },
          metadata: Qu
        }, hu, Pu), (0, Eu.h)(null, null, xu, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: uu => "_hasAlpha" in uu,
            get: uu => uu._hasAlpha,
            set: (uu, Ru) => {
              uu._hasAlpha = Ru
            }
          },
          metadata: Qu
        }, iu, Yu), (0, Eu.h)(null, null, Su, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: uu => "_getAlphaFromRGB" in uu,
            get: uu => uu._getAlphaFromRGB,
            set: (uu, Ru) => {
              uu._getAlphaFromRGB = Ru
            }
          },
          metadata: Qu
        }, ou, qu), (0, Eu.h)(null, null, pu, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: uu => "level" in uu,
            get: uu => uu.level,
            set: (uu, Ru) => {
              uu.level = Ru
            }
          },
          metadata: Qu
        }, Ou, vu), (0, Eu.h)(null, null, Tu, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: uu => "_coordinatesIndex" in uu,
            get: uu => uu._coordinatesIndex,
            set: (uu, Ru) => {
              uu._coordinatesIndex = Ru
            }
          },
          metadata: Qu
        }, au, fu), (0, Eu.h)(null, null, Wu, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: uu => "optimizeUVAllocation" in uu,
            get: uu => uu.optimizeUVAllocation,
            set: (uu, Ru) => {
              uu.optimizeUVAllocation = Ru
            }
          },
          metadata: Qu
        }, uR, RR), (0, Eu.h)(null, null, ju, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: uu => "_coordinatesMode" in uu,
            get: uu => uu._coordinatesMode,
            set: (uu, Ru) => {
              uu._coordinatesMode = Ru
            }
          },
          metadata: Qu
        }, yR, ER), (0, Eu.h)(null, null, bu, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: uu => "wrapR" in uu,
            get: uu => uu.wrapR,
            set: (uu, Ru) => {
              uu.wrapR = Ru
            }
          },
          metadata: Qu
        }, KR, QR), (0, Eu.h)(null, null, Cu, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: uu => "anisotropicFilteringLevel" in uu,
            get: uu => uu.anisotropicFilteringLevel,
            set: (uu, Ru) => {
              uu.anisotropicFilteringLevel = Ru
            }
          },
          metadata: Qu
        }, mR, JR), (0, Eu.h)(null, null, Mu, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: uu => "invertZ" in uu,
            get: uu => uu.invertZ,
            set: (uu, Ru) => {
              uu.invertZ = Ru
            }
          },
          metadata: Qu
        }, NR, XR), (0, Eu.h)(null, null, Iu, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: uu => "lodLevelInAlpha" in uu,
            get: uu => uu.lodLevelInAlpha,
            set: (uu, Ru) => {
              uu.lodLevelInAlpha = Ru
            }
          },
          metadata: Qu
        }, VR, rR), (0, Eu.h)(null, null, tu, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: uu => "isRenderTarget" in uu,
            get: uu => uu.isRenderTarget,
            set: (uu, Ru) => {
              uu.isRenderTarget = Ru
            }
          },
          metadata: Qu
        }, BR, xR), Qu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Qu
        })
      })(), uu.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, uu
    })();
    (ru = Su.prototype).forceSphericalPolynomialsRecompute ?? (ru.forceSphericalPolynomialsRecompute = (0, xu.i)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(Su.prototype, "sphericalPolynomial") || Object.defineProperty(Su.prototype, "sphericalPolynomial", (0, xu.e)("BaseTexture", "sphericalPolynomial"))
  },
  40054: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => bu,
      h: () => Hu
    });
    var Eu = yu(39560),
      Ku = yu(39566),
      Qu = yu(36858),
      mu = yu(36830),
      Ju = yu(39555),
      Nu = yu(36871),
      Xu = yu(39430),
      Vu = yu(39447),
      ru = yu(39664),
      Bu = yu(37528),
      xu = yu(39621);

    function Su(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Eu = Ru.width,
        Ku = Ru.height;
      if (uu instanceof Float32Array) {
        let Ru = uu.byteLength / uu.BYTES_PER_ELEMENT;
        const yu = new Uint8Array(Ru);
        for (; --Ru >= 0;) {
          let Eu = uu[Ru];
          Eu < 0 ? Eu = 0 : Eu > 1 && (Eu = 1), yu[Ru] = 255 * Eu
        }
        uu = yu
      }
      const Qu = document.createElement("canvas");
      Qu.width = Eu, Qu.height = Ku;
      const mu = Qu.getContext("2d");
      if (!mu) return null;
      const Ju = mu.createImageData(Eu, Ku);
      if (Ju.data.set(uu), mu.putImageData(Ju, 0, 0), yu) {
        const uu = document.createElement("canvas");
        uu.width = Eu, uu.height = Ku;
        const Ru = uu.getContext("2d");
        return Ru ? (Ru.translate(0, Ku), Ru.scale(1, -1), Ru.drawImage(Qu, 0, 0), uu.toDataURL("image/png")) : null
      }
      return Qu.toDataURL("image/png")
    }

    function pu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Eu = uu.getInternalTexture();
      if (!Eu) return null;
      const Ku = uu._readPixelsSync(Ru, yu);
      return Ku ? Su(Ku, uu.getSize(), Eu.invertY) : null
    }
    async function Tu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Eu = uu.getInternalTexture();
      if (!Eu) return null;
      const Ku = await uu.readPixels(Ru, yu);
      return Ku ? Su(Ku, uu.getSize(), Eu.invertY) : null
    }
    var Wu = yu(40003),
      ju = yu(39582);
    let Hu = (() => {
        var uu;
        let Ru, yu, Su, Hu, du, bu, Cu, ku, eu, Au, Du, Mu, Iu, Gu = Ju.e,
          Uu = [],
          nu = [],
          su = [],
          tu = [],
          lu = [],
          gu = [],
          cu = [],
          Lu = [],
          zu = [],
          Fu = [],
          wu = [],
          Zu = [],
          hu = [],
          Pu = [],
          iu = [],
          Yu = [],
          ou = [],
          qu = [],
          Ou = [],
          vu = [],
          au = [],
          fu = [],
          uR = [],
          RR = [],
          yR = [];
        return uu = class extends Gu {
          static _CreateVideoTexture(Ru, yu, Eu) {
            arguments.length > 5 && void 0 !== arguments[5] || uu.TRILINEAR_SAMPLINGMODE;
            throw (0, Xu.k)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(uu) {
            this._isBlocking = uu
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(Ru, yu, Ku, mu) {
            let Ju, Nu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : uu.TRILINEAR_SAMPLINGMODE,
              Xu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              ru = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              Bu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              xu = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              Su = arguments.length > 9 ? arguments[9] : void 0,
              pu = arguments.length > 10 ? arguments[10] : void 0,
              Tu = arguments.length > 11 ? arguments[11] : void 0,
              ju = arguments.length > 12 ? arguments[12] : void 0,
              Hu = arguments.length > 13 ? arguments[13] : void 0;
            super(yu), this.url = ((0, Eu.l)(this, Uu), (0, Eu.l)(this, nu, null)), this.uOffset = ((0, Eu.l)(this, su), (0, Eu.l)(this, tu, 0)), this.vOffset = ((0, Eu.l)(this, lu), (0, Eu.l)(this, gu, 0)), this.uScale = ((0, Eu.l)(this, cu), (0, Eu.l)(this, Lu, 1)), this.vScale = ((0, Eu.l)(this, zu), (0, Eu.l)(this, Fu, 1)), this.uAng = ((0, Eu.l)(this, wu), (0, Eu.l)(this, Zu, 0)), this.vAng = ((0, Eu.l)(this, hu), (0, Eu.l)(this, Pu, 0)), this.wAng = ((0, Eu.l)(this, iu), (0, Eu.l)(this, Yu, 0)), this.uRotationCenter = ((0, Eu.l)(this, ou), (0, Eu.l)(this, qu, .5)), this.vRotationCenter = ((0, Eu.l)(this, Ou), (0, Eu.l)(this, vu, .5)), this.wRotationCenter = ((0, Eu.l)(this, au), (0, Eu.l)(this, fu, .5)), this.homogeneousRotationInUVTransform = ((0, Eu.l)(this, uR), (0, Eu.l)(this, RR, !1)), this.inspectableCustomProperties = ((0, Eu.l)(this, yR), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new Qu.b, this._isBlocking = !0, this.name = Ru || "", this.url = Ru;
            let du = !1,
              bu = null,
              Cu = !0;
            "object" === typeof Ku && null !== Ku ? (Ju = Ku.noMipmap ?? !1, mu = Ku.invertY ?? !Wu.e, Nu = Ku.samplingMode ?? uu.TRILINEAR_SAMPLINGMODE, Xu = Ku.onLoad ?? null, ru = Ku.onError ?? null, Bu = Ku.buffer ?? null, xu = Ku.deleteBuffer ?? !1, Su = Ku.format, pu = Ku.mimeType, Tu = Ku.loaderOptions, ju = Ku.creationFlags, du = Ku.useSRGBBuffer ?? !1, bu = Ku.internalTexture ?? null, Cu = Ku.gammaSpace ?? Cu, Hu = Ku.forcedExtension ?? Hu) : Ju = !!Ku, this._gammaSpace = Cu, this._noMipmap = Ju, this._invertY = void 0 === mu ? !Wu.e : mu, this._initialSamplingMode = Nu, this._buffer = Bu, this._deleteBuffer = xu, this._mimeType = pu, this._loaderOptions = Tu, this._creationFlags = ju, this._useSRGBBuffer = du, this._forcedExtension = Hu, void 0 !== Su && (this._format = Su);
            const ku = this.lD(),
              eu = this._getEngine();
            if (!eu) return;
            eu.onBeforeTextureInitObservable.notifyObservers(this);
            const Au = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), Xu && Xu(), !this.isBlocking && ku && ku.resetCachedMaterial()
              },
              Du = (Ru, yu) => {
                this._loadingError = !0, this._errorObject = {
                  message: Ru,
                  exception: yu
                }, ru && ru(Ru, yu), uu.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !bu) return this._delayedOnLoad = Au, void(this._delayedOnError = Du);
            if (this._texture = bu ?? this._getFromCache(this.url, Ju, Nu, this._invertY, du, this.isCube), this._texture)
              if (this._texture.isReady) Vu.e.SetImmediate((() => Au()));
              else {
                const uu = this._texture.onLoadedObservable.add(Au);
                this._texture.onErrorObservable.add((Ru => {
                  Du(Ru.message, Ru.exception), this._texture?.onLoadedObservable.remove(uu)
                }))
              }
            else if (ku && ku.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = Au, this._delayedOnError = Du;
            else {
              try {
                this._texture = eu.createTexture(this.url, Ju, this._invertY, ku, Nu, Au, Du, this._buffer, void 0, this._format, this._forcedExtension, pu, Tu, ju, du)
              } catch (Mu) {
                throw Du("error loading", Mu), Mu
              }
              xu && (this._buffer = null)
            }
          }
          updateURL(uu) {
            let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              yu = arguments.length > 2 ? arguments[2] : void 0,
              Eu = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.lD().markAllMaterialsAsDirty(1, (uu => uu.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = uu), this.url = uu, this._buffer = Ru, this._forcedExtension = Eu, this.delayLoadState = 4;
            const Ku = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              Ku ? Ku() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), yu && yu()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const uu = this.lD();
            if (!uu) return;
            let Ru = this.url;
            !Ru && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (Ru = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(Ru, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? Vu.e.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = uu.eS().createTexture(Ru, this._noMipmap, this._invertY, uu, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(uu, Ru, yu, Eu) {
            uu *= this._cachedUScale, Ru *= this._cachedVScale, uu -= this.uRotationCenter * this._cachedUScale, Ru -= this.vRotationCenter * this._cachedVScale, yu -= this.wRotationCenter, mu.p.TransformCoordinatesFromFloatsToRef(uu, Ru, yu, this._rowGenerationMatrix, Eu), Eu.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, Eu.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, Eu.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * uu === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * uu, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = mu.d.Zero(), this._rowGenerationMatrix = new mu.d, this._t0 = mu.p.Zero(), this._t1 = mu.p.Zero(), this._t2 = mu.p.Zero()), mu.d.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (mu.d.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, mu.m.Matrix[0]), mu.d.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, mu.m.Matrix[1]), mu.d.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, mu.m.Matrix[2]), mu.d.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, mu.m.Matrix[3]), mu.m.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(mu.m.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(mu.m.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(mu.m.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.oEu(this._t0), this._t2.oEu(this._t0), mu.d.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const Ru = this.lD();
            if (!Ru) return this._cachedTextureMatrix;
            const yu = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && yu !== this._cachedIdentity3x2 && Ru.markAllMaterialsAsDirty(1, (uu => uu.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const Ru = this.lD();
            if (!Ru) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== uu.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === Ru.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = mu.d.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = mu.d.Zero());
            const yu = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case uu.PLANAR_MODE:
                mu.d.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case uu.PROJECTION_MODE: {
                mu.d.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const uu = Ru.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = uu.updateFlag, uu.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                mu.d.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return yu && Ru.markAllMaterialsAsDirty(1, (uu => uu.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const Ru = {
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
            return ju.c.Clone((() => new uu(this._texture ? this._texture.url : null, this.lD(), Ru)), this)
          }
          serialize() {
            const Ru = this.name;
            uu.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const yu = super.serialize(uu._SerializeInternalTextureUniqueId);
            if (!yu) return null;
            if (uu.SerializeBuffers || uu.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) yu.base64String = this._buffer, yu.name = yu.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const uu = this.mimeType || "image/png";
              yu.base64String = `data:${uu};base64,${(0,xu.g)(this._buffer)}`
            } else(uu.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (yu.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? pu(this) : Tu(this));
            return yu.invertY = this._invertY, yu.samplingMode = this.samplingMode, yu._creationFlags = this._creationFlags, yu._useSRGBBuffer = this._useSRGBBuffer, uu._SerializeInternalTextureUniqueId && (yu.internalTextureUniqueId = this._texture?.uniqueId), yu.internalTextureLabel = this._texture?.label, yu.noMipmap = this._noMipmap, this.name = Ru, yu
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(Ru, yu, Eu) {
            if (Ru.customType) {
              const uu = ru.b.Instantiate(Ru.customType).Parse(Ru, yu, Eu);
              return Ru.samplingMode && uu.updateSamplingMode && uu._samplingMode && uu._samplingMode !== Ru.samplingMode && uu.updateSamplingMode(Ru.samplingMode), uu
            }
            if (Ru.isCube && !Ru.isRenderTarget) return uu._CubeTextureParser(Ru, yu, Eu);
            const Ku = void 0 !== Ru.internalTextureUniqueId;
            if (!Ru.name && !Ru.isRenderTarget && !Ku) return null;
            let Qu;
            if (Ku) {
              const uu = yu.eS().getLoadedTexturesCache();
              for (const yu of uu)
                if (yu.uniqueId === Ru.internalTextureUniqueId) {
                  Qu = yu;
                  break
                }
            }
            const mu = uu => {
              if (uu && uu._texture && (uu._texture._cachedWrapU = null, uu._texture._cachedWrapV = null, uu._texture._cachedWrapR = null), Ru.samplingMode) {
                const yu = Ru.samplingMode;
                uu && uu.samplingMode !== yu && uu.updateSamplingMode(yu)
              }
              if (uu && Ru.animations)
                for (let yu = 0; yu < Ru.animations.length; yu++) {
                  const Eu = Ru.animations[yu],
                    Ku = (0, Nu.b)("BABYLON.Animation");
                  Ku && uu.animations.push(Ku.Parse(Eu))
                }
              uu && uu._texture && (Ku && !Qu && uu._texture._setUniqueId(Ru.internalTextureUniqueId), uu._texture.label = Ru.internalTextureLabel)
            };
            return ju.c.Parse((() => {
              let Ku = !0;
              if (Ru.noMipmap && (Ku = !1), Ru.mirrorPlane) {
                const Eu = uu._CreateMirror(Ru.name, Ru.renderTargetSize, yu, Ku);
                return Eu._waitingRenderList = Ru.renderList, Eu.mirrorPlane = Bu.d.FromArray(Ru.mirrorPlane), mu(Eu), Eu
              }
              if (Ru.isRenderTarget && !Ru.base64String) {
                let Eu = null;
                if (Ru.isCube) {
                  if (yu.reflectionProbes)
                    for (let uu = 0; uu < yu.reflectionProbes.length; uu++) {
                      const Eu = yu.reflectionProbes[uu];
                      if (Eu.name === Ru.name) return Eu.cubeTexture
                    }
                } else Eu = uu._CreateRenderTargetTexture(Ru.name, Ru.renderTargetSize, yu, Ku, Ru._creationFlags ?? 0), Eu._waitingRenderList = Ru.renderList;
                return mu(Eu), Eu
              }
              if (Ru.isVideo) {
                const Qu = uu._CreateVideoTexture(Eu + (Ru.url || Ru.name), Eu + (Ru.src || Ru.url), yu, Ku, Ru.invertY, Ru.samplingMode, Ru.settings || {});
                return mu(Qu), Qu
              } {
                let Ju;
                if ("string" === typeof Ru.base64String && Ru.base64String && !Qu) {
                  const Eu = {
                      buffer: Ru.base64String,
                      noMipmap: !Ku,
                      invertY: Ru.invertY,
                      samplingMode: Ru.samplingMode,
                      useSRGBBuffer: Ru._useSRGBBuffer ?? !1,
                      creationFlags: Ru._creationFlags ?? 0,
                      onLoad: () => {
                        mu(Ju)
                      }
                    },
                    Qu = Ru.base64String,
                    Nu = Qu.startsWith("data:") ? Qu.substring(5) : Qu;
                  Ju = uu.CreateFromBase64String("", Nu, yu, Eu), Ju.name = Ru.name
                } else {
                  let Nu;
                  Nu = Ru.name && (Ru.name.indexOf("://") > 0 || Ru.name.startsWith("data:")) ? Ru.name : Eu + Ru.name, Ru.url && (Ru.url.startsWith("data:") || uu.UseSerializedUrlIfAny) && (Nu = Ru.url);
                  const Xu = {
                    noMipmap: !Ku,
                    invertY: Ru.invertY,
                    samplingMode: Ru.samplingMode,
                    useSRGBBuffer: Ru._useSRGBBuffer ?? !1,
                    creationFlags: Ru._creationFlags ?? 0,
                    onLoad: () => {
                      mu(Ju)
                    },
                    internalTexture: Qu
                  };
                  Ju = new uu(Nu, yu, Xu)
                }
                return Ju
              }
            }), Ru, yu)
          }
          static CreateFromBase64String(Ru, yu, Eu, Ku, Qu) {
            let mu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : uu.TRILINEAR_SAMPLINGMODE;
            return new uu("data:" + yu, Eu, Ku, Qu, mu, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, Ru, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(Ru, yu, Eu) {
            let Ku = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Qu = arguments.length > 4 ? arguments[4] : void 0,
              mu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              Ju = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : uu.TRILINEAR_SAMPLINGMODE,
              Nu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Xu = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              Vu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              ru = arguments.length > 10 ? arguments[10] : void 0,
              Bu = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== Ru.substring(0, 5) && (Ru = "data:" + Ru), new uu(Ru, Eu, Qu, mu, Ju, Nu, Xu, yu, Ku, Vu, void 0, void 0, ru, Bu)
          }
        }, (() => {
          const Qu = "function" === typeof Symbol && Symbol.metadata ? Object.create(Gu[Symbol.metadata] ?? null) : void 0;
          Ru = [(0, Ku.K)()], yu = [(0, Ku.K)()], Su = [(0, Ku.K)()], Hu = [(0, Ku.K)()], du = [(0, Ku.K)()], bu = [(0, Ku.K)()], Cu = [(0, Ku.K)()], ku = [(0, Ku.K)()], eu = [(0, Ku.K)()], Au = [(0, Ku.K)()], Du = [(0, Ku.K)()], Mu = [(0, Ku.K)()], Iu = [(0, Ku.K)()], (0, Eu.h)(uu, null, Iu, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: uu => "isBlocking" in uu,
              get: uu => uu.isBlocking
            },
            metadata: Qu
          }, null, Uu), (0, Eu.h)(null, null, Ru, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: uu => "url" in uu,
              get: uu => uu.url,
              set: (uu, Ru) => {
                uu.url = Ru
              }
            },
            metadata: Qu
          }, nu, su), (0, Eu.h)(null, null, yu, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: uu => "uOffset" in uu,
              get: uu => uu.uOffset,
              set: (uu, Ru) => {
                uu.uOffset = Ru
              }
            },
            metadata: Qu
          }, tu, lu), (0, Eu.h)(null, null, Su, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: uu => "vOffset" in uu,
              get: uu => uu.vOffset,
              set: (uu, Ru) => {
                uu.vOffset = Ru
              }
            },
            metadata: Qu
          }, gu, cu), (0, Eu.h)(null, null, Hu, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: uu => "uScale" in uu,
              get: uu => uu.uScale,
              set: (uu, Ru) => {
                uu.uScale = Ru
              }
            },
            metadata: Qu
          }, Lu, zu), (0, Eu.h)(null, null, du, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: uu => "vScale" in uu,
              get: uu => uu.vScale,
              set: (uu, Ru) => {
                uu.vScale = Ru
              }
            },
            metadata: Qu
          }, Fu, wu), (0, Eu.h)(null, null, bu, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: uu => "uAng" in uu,
              get: uu => uu.uAng,
              set: (uu, Ru) => {
                uu.uAng = Ru
              }
            },
            metadata: Qu
          }, Zu, hu), (0, Eu.h)(null, null, Cu, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: uu => "vAng" in uu,
              get: uu => uu.vAng,
              set: (uu, Ru) => {
                uu.vAng = Ru
              }
            },
            metadata: Qu
          }, Pu, iu), (0, Eu.h)(null, null, ku, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: uu => "wAng" in uu,
              get: uu => uu.wAng,
              set: (uu, Ru) => {
                uu.wAng = Ru
              }
            },
            metadata: Qu
          }, Yu, ou), (0, Eu.h)(null, null, eu, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: uu => "uRotationCenter" in uu,
              get: uu => uu.uRotationCenter,
              set: (uu, Ru) => {
                uu.uRotationCenter = Ru
              }
            },
            metadata: Qu
          }, qu, Ou), (0, Eu.h)(null, null, Au, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: uu => "vRotationCenter" in uu,
              get: uu => uu.vRotationCenter,
              set: (uu, Ru) => {
                uu.vRotationCenter = Ru
              }
            },
            metadata: Qu
          }, vu, au), (0, Eu.h)(null, null, Du, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: uu => "wRotationCenter" in uu,
              get: uu => uu.wRotationCenter,
              set: (uu, Ru) => {
                uu.wRotationCenter = Ru
              }
            },
            metadata: Qu
          }, fu, uR), (0, Eu.h)(null, null, Mu, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: uu => "homogeneousRotationInUVTransform" in uu,
              get: uu => uu.homogeneousRotationInUVTransform,
              set: (uu, Ru) => {
                uu.homogeneousRotationInUVTransform = Ru
              }
            },
            metadata: Qu
          }, RR, yR), Qu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Qu
          })
        })(), uu.SerializeBuffers = !0, uu.ForceSerializeBuffers = !1, uu.OnTextureLoadErrorObservable = new Qu.b, uu._SerializeInternalTextureUniqueId = !1, uu._CubeTextureParser = (uu, Ru, yu) => {
          throw (0, Xu.k)("CubeTexture")
        }, uu._CreateMirror = (uu, Ru, yu, Eu) => {
          throw (0, Xu.k)("MirrorTexture")
        }, uu._CreateRenderTargetTexture = (uu, Ru, yu, Eu, Ku) => {
          throw (0, Xu.k)("RenderTargetTexture")
        }, uu.NEAREST_SAMPLINGMODE = 1, uu.NEAREST_NEAREST_MIPLINEAR = 8, uu.BILINEAR_SAMPLINGMODE = 2, uu.LINEAR_LINEAR_MIPNEAREST = 11, uu.TRILINEAR_SAMPLINGMODE = 3, uu.LINEAR_LINEAR_MIPLINEAR = 3, uu.NEAREST_NEAREST_MIPNEAREST = 4, uu.NEAREST_LINEAR_MIPNEAREST = 5, uu.NEAREST_LINEAR_MIPLINEAR = 6, uu.NEAREST_LINEAR = 7, uu.NEAREST_NEAREST = 1, uu.LINEAR_NEAREST_MIPNEAREST = 9, uu.LINEAR_NEAREST_MIPLINEAR = 10, uu.LINEAR_LINEAR = 2, uu.LINEAR_NEAREST = 12, uu.EXPLICIT_MODE = 0, uu.SPHERICAL_MODE = 1, uu.PLANAR_MODE = 2, uu.CUBIC_MODE = 3, uu.PROJECTION_MODE = 4, uu.SKYBOX_MODE = 5, uu.INVCUBIC_MODE = 6, uu.EQUIRECTANGULAR_MODE = 7, uu.FIXED_EQUIRECTANGULAR_MODE = 8, uu.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, uu.CLAMP_ADDRESSMODE = 0, uu.WRAP_ADDRESSMODE = 1, uu.MIRROR_ADDRESSMODE = 2, uu.UseSerializedUrlIfAny = !1, uu
      })(),
      du = !1;

    function bu() {
      du || (du = !0, (0, Nu.c)("BABYLON.Texture", Hu), ju.c._TextureParser = Hu.Parse)
    }
  },
  39580: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Eu
    });
    class Eu {
      constructor(uu, Ru) {
        this.width = uu, this.height = Ru
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let uu = 0 | this.width;
        return uu = 397 * uu ^ this.height, uu
      }
      Oyu(uu) {
        this.width = uu.width, this.height = uu.height
      }
      muu(uu, Ru) {
        return this.width = uu, this.height = Ru, this
      }
      set(uu, Ru) {
        return this.muu(uu, Ru)
      }
      multiplyByFloats(uu, Ru) {
        return new Eu(this.width * uu, this.height * Ru)
      }
      clone() {
        return new Eu(this.width, this.height)
      }
      equals(uu) {
        return !!uu && (this.width === uu.width && this.height === uu.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new Eu(0, 0)
      }
      add(uu) {
        return new Eu(this.width + uu.width, this.height + uu.height)
      }
      subtract(uu) {
        return new Eu(this.width - uu.width, this.height - uu.height)
      }
      scale(uu) {
        return new Eu(this.width * uu, this.height * uu)
      }
      static Lerp(uu, Ru, yu) {
        const Ku = uu.width + (Ru.width - uu.width) * yu,
          Qu = uu.height + (Ru.height - uu.height) * yu;
        return new Eu(Ku, Qu)
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);