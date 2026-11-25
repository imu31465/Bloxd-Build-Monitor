export const id = 260;
export const ids = [260];
export const modules = {
  40693: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => su
    });
    let su = !1
  },
  40253: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Ou
    });
    var su = ju(40255),
      Uu = ju(40258),
      Zu = ju(37514),
      Xu = ju(37494),
      lu = ju(37506),
      qu = ju(38303),
      fu = ju(40268);
    class Cu {
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
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = fu.e.Zero(), this._cachedBaseSize = fu.e.Zero(), this._initialSamplingMode = 2, this._texture = Cu._IsRenderTargetWrapper(uu) ? uu.texture : uu, this._texture && (this._engine = this._texture.wO(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(uu, this._texture, this._texture.generateMipMaps && Eu)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var bu, cu = ju(40272),
      Nu = ju(40153);
    let Ou = (() => {
      var uu;
      let Eu, ju, fu, bu, Nu, Ou, Yu, hu, Du, gu, Mu, eu, Gu, pu, wu, Ju, du, au, Pu, ou, ku, mu, vu, Ku, Vu, ru = Cu,
        Qu = [],
        iu = [],
        Wu = [],
        Su = [],
        Iu = [],
        Fu = [],
        Bu = [],
        Lu = [],
        tu = [],
        xu = [],
        Tu = [],
        Hu = [],
        Au = [],
        nu = [],
        yu = [],
        zu = [],
        Ru = [],
        uE = [],
        EE = [],
        jE = [],
        sE = [],
        UE = [],
        ZE = [],
        XE = [],
        lE = [],
        qE = [],
        fE = [],
        CE = [],
        bE = [],
        cE = [],
        NE = [];
      return uu = class extends ru {
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
          this.hV()?.markAllMaterialsAsDirty(1, (uu => uu.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(uu) {
          uu !== this.isRGBD && (this._texture && (this._texture._isRGBD = uu), this.hV()?.markAllMaterialsAsDirty(1, (uu => uu.hasTexture(this))))
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
          return this._uid || (this._uid = (0, qu.e)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(uu) {
          this._onDisposeObserver && this.wV.remove(this._onDisposeObserver), this._onDisposeObserver = this.wV.add(uu)
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
        constructor(Eu) {
          let ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, su.g)(this, Qu), (0, su.g)(this, iu, void 0)), this.name = ((0, su.g)(this, Wu), (0, su.g)(this, Su, void 0)), this.displayName = ((0, su.g)(this, Iu), (0, su.g)(this, Fu, void 0)), this.metadata = ((0, su.g)(this, Bu), (0, su.g)(this, Lu, null)), this._internalMetadata = (0, su.g)(this, tu), this.reservedDataStore = null, this._hasAlpha = (0, su.g)(this, xu, !1), this._getAlphaFromRGB = ((0, su.g)(this, Tu), (0, su.g)(this, Hu, !1)), this.level = ((0, su.g)(this, Au), (0, su.g)(this, nu, 1)), this._coordinatesIndex = ((0, su.g)(this, yu), (0, su.g)(this, zu, 0)), this.optimizeUVAllocation = ((0, su.g)(this, Ru), (0, su.g)(this, uE, !0)), this._coordinatesMode = ((0, su.g)(this, EE), (0, su.g)(this, jE, 0)), this.wrapR = ((0, su.g)(this, sE), (0, su.g)(this, UE, 1)), this.anisotropicFilteringLevel = ((0, su.g)(this, ZE), (0, su.g)(this, XE, uu.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, su.g)(this, lE), !1), this._gammaSpace = !0, this.invertZ = (0, su.g)(this, qE, !1), this.lodLevelInAlpha = ((0, su.g)(this, fE), (0, su.g)(this, CE, !1)), this._dominantDirection = ((0, su.g)(this, bE), null), this.isRenderTarget = (0, su.g)(this, cE, !1), this._prefiltered = ((0, su.g)(this, NE), !1), this._forceSerialize = !1, this.animations = [], this.wV = new Zu.d, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, Eu ? uu._IsScene(Eu) ? this._scene = Eu : this._engine = Eu : this._scene = lu.b.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.wO()), this._texture = ju, this._uid = null
        }
        hV() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return Xu.e.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return Xu.e.IdentityReadOnly
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
        _getFromCache(uu, Eu, ju, su, Uu, Zu) {
          const Xu = this._getEngine();
          if (!Xu) return null;
          const lu = Xu._getUseSRGBBuffer(!!Uu, Eu),
            qu = Xu.getLoadedTexturesCache();
          for (let fu = 0; fu < qu.length; fu++) {
            const Xu = qu[fu];
            if ((void 0 === Uu || lu === Xu._useSRGBBuffer) && (void 0 === su || su === Xu.invertY) && Xu.url === uu && Xu.generateMipMaps === !Eu && (!ju || ju === Xu.samplingMode) && (void 0 === Zu || Zu === Xu.isCube)) return Xu.incrementReferences(), Xu
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
          const uu = this.hV();
          uu && uu.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            su = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Uu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            Xu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            lu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            qu = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const fu = this._getEngine();
          if (!fu) return null;
          const Cu = this.getSize();
          let bu = Cu.width,
            cu = Cu.height;
          0 !== Eu && (bu /= Math.pow(2, Eu), cu /= Math.pow(2, Eu), bu = Math.round(bu), cu = Math.round(cu)), lu = Math.min(bu, lu), qu = Math.min(cu, qu);
          try {
            return this._texture.isCube || this._texture.is2DArray ? fu._readTexturePixels(this._texture, lu, qu, uu, Eu, ju, su, Uu, Zu, Xu) : fu._readTexturePixels(this._texture, lu, qu, -1, Eu, ju, su, Uu, Zu, Xu)
          } catch (Nu) {
            return null
          }
        }
        _readPixelsSync() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            su = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Uu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const Zu = this.getSize();
          let Xu = Zu.width,
            lu = Zu.height;
          const qu = this._getEngine();
          if (!qu) return null;
          0 != Eu && (Xu /= Math.pow(2, Eu), lu /= Math.pow(2, Eu), Xu = Math.round(Xu), lu = Math.round(lu));
          try {
            return this._texture.isCube ? qu._readTexturePixelsSync(this._texture, Xu, lu, uu, Eu, ju, su, Uu) : qu._readTexturePixelsSync(this._texture, Xu, lu, -1, Eu, ju, su, Uu)
          } catch (fu) {
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
          this.wV.notifyObservers(this), this.wV.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !uu) return null;
          const Eu = cu.e.Serialize(this);
          return cu.e.AppendSerializedAnimations(this, Eu), Eu
        }
        static WhenAllReady(uu, Eu) {
          let ju = uu.length;
          if (0 !== ju)
            for (let su = 0; su < uu.length; su++) {
              const Uu = uu[su];
              if (Uu.isReady()) 0 === --ju && Eu();
              else {
                const uu = Uu.onLoadObservable;
                uu ? uu.addOnce((() => {
                  0 === --ju && Eu()
                })) : 0 === --ju && Eu()
              }
            } else Eu()
        }
        static _IsScene(uu) {
          return "Scene" === uu.getClassName()
        }
      }, (() => {
        const Zu = "function" === typeof Symbol && Symbol.metadata ? Object.create(ru[Symbol.metadata] ?? null) : void 0;
        Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], fu = [(0, Uu.E)()], bu = [(0, Uu.E)()], Nu = [(0, Uu.E)("hasAlpha")], Ou = [(0, Uu.E)("getAlphaFromRGB")], Yu = [(0, Uu.E)()], hu = [(0, Uu.E)("coordinatesIndex")], Du = [(0, Uu.E)()], gu = [(0, Uu.E)("coordinatesMode")], Mu = [(0, Uu.E)()], eu = [(0, Uu.E)()], Gu = [(0, Uu.E)()], pu = [(0, Uu.E)()], wu = [(0, Uu.E)()], Ju = [(0, Uu.E)()], du = [(0, Uu.E)()], au = [(0, Uu.E)()], Pu = [(0, Uu.E)()], ou = [(0, Uu.E)()], ku = [(0, Uu.E)()], mu = [(0, Uu.E)()], vu = [(0, Uu.E)()], Ku = [(0, Uu.y)()], Vu = [(0, Uu.E)()], (0, su.e)(uu, null, Mu, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: uu => "wrapU" in uu,
            get: uu => uu.wrapU
          },
          metadata: Zu
        }, null, Qu), (0, su.e)(uu, null, eu, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: uu => "wrapV" in uu,
            get: uu => uu.wrapV
          },
          metadata: Zu
        }, null, Qu), (0, su.e)(uu, null, wu, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: uu => "isCube" in uu,
            get: uu => uu.isCube
          },
          metadata: Zu
        }, null, Qu), (0, su.e)(uu, null, Ju, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: uu => "is3D" in uu,
            get: uu => uu.is3D
          },
          metadata: Zu
        }, null, Qu), (0, su.e)(uu, null, du, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: uu => "is2DArray" in uu,
            get: uu => uu.is2DArray
          },
          metadata: Zu
        }, null, Qu), (0, su.e)(uu, null, au, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: uu => "gammaSpace" in uu,
            get: uu => uu.gammaSpace
          },
          metadata: Zu
        }, null, Qu), (0, su.e)(uu, null, ku, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: uu => "lodGenerationOffset" in uu,
            get: uu => uu.lodGenerationOffset
          },
          metadata: Zu
        }, null, Qu), (0, su.e)(uu, null, mu, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: uu => "lodGenerationScale" in uu,
            get: uu => uu.lodGenerationScale
          },
          metadata: Zu
        }, null, Qu), (0, su.e)(uu, null, vu, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: uu => "linearSpecularLOD" in uu,
            get: uu => uu.linearSpecularLOD
          },
          metadata: Zu
        }, null, Qu), (0, su.e)(uu, null, Ku, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "irradianceTexture" in uu,
            get: uu => uu.irradianceTexture
          },
          metadata: Zu
        }, null, Qu), (0, su.e)(null, null, Eu, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: uu => "uniqueId" in uu,
            get: uu => uu.uniqueId,
            set: (uu, Eu) => {
              uu.uniqueId = Eu
            }
          },
          metadata: Zu
        }, iu, Wu), (0, su.e)(null, null, ju, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: uu => "name" in uu,
            get: uu => uu.name,
            set: (uu, Eu) => {
              uu.name = Eu
            }
          },
          metadata: Zu
        }, Su, Iu), (0, su.e)(null, null, fu, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: uu => "displayName" in uu,
            get: uu => uu.displayName,
            set: (uu, Eu) => {
              uu.displayName = Eu
            }
          },
          metadata: Zu
        }, Fu, Bu), (0, su.e)(null, null, bu, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: uu => "metadata" in uu,
            get: uu => uu.metadata,
            set: (uu, Eu) => {
              uu.metadata = Eu
            }
          },
          metadata: Zu
        }, Lu, tu), (0, su.e)(null, null, Nu, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: uu => "_hasAlpha" in uu,
            get: uu => uu._hasAlpha,
            set: (uu, Eu) => {
              uu._hasAlpha = Eu
            }
          },
          metadata: Zu
        }, xu, Tu), (0, su.e)(null, null, Ou, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: uu => "_getAlphaFromRGB" in uu,
            get: uu => uu._getAlphaFromRGB,
            set: (uu, Eu) => {
              uu._getAlphaFromRGB = Eu
            }
          },
          metadata: Zu
        }, Hu, Au), (0, su.e)(null, null, Yu, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: uu => "level" in uu,
            get: uu => uu.level,
            set: (uu, Eu) => {
              uu.level = Eu
            }
          },
          metadata: Zu
        }, nu, yu), (0, su.e)(null, null, hu, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: uu => "_coordinatesIndex" in uu,
            get: uu => uu._coordinatesIndex,
            set: (uu, Eu) => {
              uu._coordinatesIndex = Eu
            }
          },
          metadata: Zu
        }, zu, Ru), (0, su.e)(null, null, Du, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: uu => "optimizeUVAllocation" in uu,
            get: uu => uu.optimizeUVAllocation,
            set: (uu, Eu) => {
              uu.optimizeUVAllocation = Eu
            }
          },
          metadata: Zu
        }, uE, EE), (0, su.e)(null, null, gu, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: uu => "_coordinatesMode" in uu,
            get: uu => uu._coordinatesMode,
            set: (uu, Eu) => {
              uu._coordinatesMode = Eu
            }
          },
          metadata: Zu
        }, jE, sE), (0, su.e)(null, null, Gu, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: uu => "wrapR" in uu,
            get: uu => uu.wrapR,
            set: (uu, Eu) => {
              uu.wrapR = Eu
            }
          },
          metadata: Zu
        }, UE, ZE), (0, su.e)(null, null, pu, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: uu => "anisotropicFilteringLevel" in uu,
            get: uu => uu.anisotropicFilteringLevel,
            set: (uu, Eu) => {
              uu.anisotropicFilteringLevel = Eu
            }
          },
          metadata: Zu
        }, XE, lE), (0, su.e)(null, null, Pu, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: uu => "invertZ" in uu,
            get: uu => uu.invertZ,
            set: (uu, Eu) => {
              uu.invertZ = Eu
            }
          },
          metadata: Zu
        }, qE, fE), (0, su.e)(null, null, ou, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: uu => "lodLevelInAlpha" in uu,
            get: uu => uu.lodLevelInAlpha,
            set: (uu, Eu) => {
              uu.lodLevelInAlpha = Eu
            }
          },
          metadata: Zu
        }, CE, bE), (0, su.e)(null, null, Vu, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: uu => "isRenderTarget" in uu,
            get: uu => uu.isRenderTarget,
            set: (uu, Eu) => {
              uu.isRenderTarget = Eu
            }
          },
          metadata: Zu
        }, cE, NE), Zu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Zu
        })
      })(), uu.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, uu
    })();
    (bu = Ou.prototype).forceSphericalPolynomialsRecompute ?? (bu.forceSphericalPolynomialsRecompute = (0, Nu.g)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(Ou.prototype, "sphericalPolynomial") || Object.defineProperty(Ou.prototype, "sphericalPolynomial", (0, Nu.d)("BaseTexture", "sphericalPolynomial"))
  },
  40739: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Gu,
      g: () => Mu
    });
    var su = ju(40255),
      Uu = ju(40258),
      Zu = ju(37514),
      Xu = ju(37494),
      lu = ju(40253),
      qu = ju(37532),
      fu = ju(40153),
      Cu = ju(40164),
      bu = ju(40358),
      cu = ju(38154),
      Nu = ju(40312);

    function Ou(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const su = Eu.width,
        Uu = Eu.height;
      if (uu instanceof Float32Array) {
        let Eu = uu.byteLength / uu.BYTES_PER_ELEMENT;
        const ju = new Uint8Array(Eu);
        for (; --Eu >= 0;) {
          let su = uu[Eu];
          su < 0 ? su = 0 : su > 1 && (su = 1), ju[Eu] = 255 * su
        }
        uu = ju
      }
      const Zu = document.createElement("canvas");
      Zu.width = su, Zu.height = Uu;
      const Xu = Zu.getContext("2d");
      if (!Xu) return null;
      const lu = Xu.createImageData(su, Uu);
      if (lu.data.set(uu), Xu.putImageData(lu, 0, 0), ju) {
        const uu = document.createElement("canvas");
        uu.width = su, uu.height = Uu;
        const Eu = uu.getContext("2d");
        return Eu ? (Eu.translate(0, Uu), Eu.scale(1, -1), Eu.drawImage(Zu, 0, 0), uu.toDataURL("image/png")) : null
      }
      return Zu.toDataURL("image/png")
    }

    function Yu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const su = uu.getInternalTexture();
      if (!su) return null;
      const Uu = uu._readPixelsSync(Eu, ju);
      return Uu ? Ou(Uu, uu.getSize(), su.invertY) : null
    }
    async function hu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const su = uu.getInternalTexture();
      if (!su) return null;
      const Uu = await uu.readPixels(Eu, ju);
      return Uu ? Ou(Uu, uu.getSize(), su.invertY) : null
    }
    var Du = ju(40693),
      gu = ju(40272);
    let Mu = (() => {
        var uu;
        let Eu, ju, Ou, Mu, eu, Gu, pu, wu, Ju, du, au, Pu, ou, ku = lu.c,
          mu = [],
          vu = [],
          Ku = [],
          Vu = [],
          ru = [],
          Qu = [],
          iu = [],
          Wu = [],
          Su = [],
          Iu = [],
          Fu = [],
          Bu = [],
          Lu = [],
          tu = [],
          xu = [],
          Tu = [],
          Hu = [],
          Au = [],
          nu = [],
          yu = [],
          zu = [],
          Ru = [],
          uE = [],
          EE = [],
          jE = [];
        return uu = class extends ku {
          static _CreateVideoTexture(Eu, ju, su) {
            arguments.length > 5 && void 0 !== arguments[5] || uu.TRILINEAR_SAMPLINGMODE;
            throw (0, fu.h)("VideoTexture")
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
          constructor(Eu, ju, Uu, Xu) {
            let lu, qu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : uu.TRILINEAR_SAMPLINGMODE,
              fu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              bu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              cu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Nu = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              Ou = arguments.length > 9 ? arguments[9] : void 0,
              Yu = arguments.length > 10 ? arguments[10] : void 0,
              hu = arguments.length > 11 ? arguments[11] : void 0,
              gu = arguments.length > 12 ? arguments[12] : void 0,
              Mu = arguments.length > 13 ? arguments[13] : void 0;
            super(ju), this.url = ((0, su.g)(this, mu), (0, su.g)(this, vu, null)), this.uOffset = ((0, su.g)(this, Ku), (0, su.g)(this, Vu, 0)), this.vOffset = ((0, su.g)(this, ru), (0, su.g)(this, Qu, 0)), this.uScale = ((0, su.g)(this, iu), (0, su.g)(this, Wu, 1)), this.vScale = ((0, su.g)(this, Su), (0, su.g)(this, Iu, 1)), this.uAng = ((0, su.g)(this, Fu), (0, su.g)(this, Bu, 0)), this.vAng = ((0, su.g)(this, Lu), (0, su.g)(this, tu, 0)), this.wAng = ((0, su.g)(this, xu), (0, su.g)(this, Tu, 0)), this.uRotationCenter = ((0, su.g)(this, Hu), (0, su.g)(this, Au, .5)), this.vRotationCenter = ((0, su.g)(this, nu), (0, su.g)(this, yu, .5)), this.wRotationCenter = ((0, su.g)(this, zu), (0, su.g)(this, Ru, .5)), this.homogeneousRotationInUVTransform = ((0, su.g)(this, uE), (0, su.g)(this, EE, !1)), this.inspectableCustomProperties = ((0, su.g)(this, jE), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new Zu.d, this._isBlocking = !0, this.name = Eu || "", this.url = Eu;
            let eu = !1,
              Gu = null,
              pu = !0;
            "object" === typeof Uu && null !== Uu ? (lu = Uu.noMipmap ?? !1, Xu = Uu.invertY ?? !Du.c, qu = Uu.samplingMode ?? uu.TRILINEAR_SAMPLINGMODE, fu = Uu.onLoad ?? null, bu = Uu.onError ?? null, cu = Uu.buffer ?? null, Nu = Uu.deleteBuffer ?? !1, Ou = Uu.format, Yu = Uu.mimeType, hu = Uu.loaderOptions, gu = Uu.creationFlags, eu = Uu.useSRGBBuffer ?? !1, Gu = Uu.internalTexture ?? null, pu = Uu.gammaSpace ?? pu, Mu = Uu.forcedExtension ?? Mu) : lu = !!Uu, this._gammaSpace = pu, this._noMipmap = lu, this._invertY = void 0 === Xu ? !Du.c : Xu, this._initialSamplingMode = qu, this._buffer = cu, this._deleteBuffer = Nu, this._mimeType = Yu, this._loaderOptions = hu, this._creationFlags = gu, this._useSRGBBuffer = eu, this._forcedExtension = Mu, void 0 !== Ou && (this._format = Ou);
            const wu = this.hV(),
              Ju = this._getEngine();
            if (!Ju) return;
            Ju.onBeforeTextureInitObservable.notifyObservers(this);
            const du = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), fu && fu(), !this.isBlocking && wu && wu.resetCachedMaterial()
              },
              au = (Eu, ju) => {
                this._loadingError = !0, this._errorObject = {
                  message: Eu,
                  exception: ju
                }, bu && bu(Eu, ju), uu.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !Gu) return this._delayedOnLoad = du, void(this._delayedOnError = au);
            if (this._texture = Gu ?? this._getFromCache(this.url, lu, qu, this._invertY, eu, this.isCube), this._texture)
              if (this._texture.isReady) Cu.c.SetImmediate((() => du()));
              else {
                const uu = this._texture.onLoadedObservable.add(du);
                this._texture.onErrorObservable.add((Eu => {
                  au(Eu.message, Eu.exception), this._texture?.onLoadedObservable.remove(uu)
                }))
              }
            else if (wu && wu.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = du, this._delayedOnError = au;
            else {
              try {
                this._texture = Ju.createTexture(this.url, lu, this._invertY, wu, qu, du, au, this._buffer, void 0, this._format, this._forcedExtension, Yu, hu, gu, eu)
              } catch (Pu) {
                throw au("error loading", Pu), Pu
              }
              Nu && (this._buffer = null)
            }
          }
          updateURL(uu) {
            let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              ju = arguments.length > 2 ? arguments[2] : void 0,
              su = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.hV().markAllMaterialsAsDirty(1, (uu => uu.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = uu), this.url = uu, this._buffer = Eu, this._forcedExtension = su, this.delayLoadState = 4;
            const Uu = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              Uu ? Uu() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), ju && ju()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const uu = this.hV();
            if (!uu) return;
            let Eu = this.url;
            !Eu && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (Eu = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(Eu, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? Cu.c.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = uu.wO().createTexture(Eu, this._noMipmap, this._invertY, uu, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(uu, Eu, ju, su) {
            uu *= this._cachedUScale, Eu *= this._cachedVScale, uu -= this.uRotationCenter * this._cachedUScale, Eu -= this.vRotationCenter * this._cachedVScale, ju -= this.wRotationCenter, Xu.t.TransformCoordinatesFromFloatsToRef(uu, Eu, ju, this._rowGenerationMatrix, su), su.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, su.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, su.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * uu === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * uu, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = Xu.e.Zero(), this._rowGenerationMatrix = new Xu.e, this._t0 = Xu.t.Zero(), this._t1 = Xu.t.Zero(), this._t2 = Xu.t.Zero()), Xu.e.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (Xu.e.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, Xu.m.Matrix[0]), Xu.e.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, Xu.m.Matrix[1]), Xu.e.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, Xu.m.Matrix[2]), Xu.e.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, Xu.m.Matrix[3]), Xu.m.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Xu.m.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Xu.m.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Xu.m.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.Qsu(this._t0), this._t2.Qsu(this._t0), Xu.e.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const Eu = this.hV();
            if (!Eu) return this._cachedTextureMatrix;
            const ju = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && ju !== this._cachedIdentity3x2 && Eu.markAllMaterialsAsDirty(1, (uu => uu.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const Eu = this.hV();
            if (!Eu) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== uu.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === Eu.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = Xu.e.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = Xu.e.Zero());
            const ju = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case uu.PLANAR_MODE:
                Xu.e.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case uu.PROJECTION_MODE: {
                Xu.e.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const uu = Eu.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = uu.updateFlag, uu.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                Xu.e.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return ju && Eu.markAllMaterialsAsDirty(1, (uu => uu.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const Eu = {
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
            return gu.e.Clone((() => new uu(this._texture ? this._texture.url : null, this.hV(), Eu)), this)
          }
          serialize() {
            const Eu = this.name;
            uu.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const ju = super.serialize(uu._SerializeInternalTextureUniqueId);
            if (!ju) return null;
            if (uu.SerializeBuffers || uu.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) ju.base64String = this._buffer, ju.name = ju.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const uu = this.mimeType || "image/png";
              ju.base64String = `data:${uu};base64,${(0,Nu.e)(this._buffer)}`
            } else(uu.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (ju.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? Yu(this) : hu(this));
            return ju.invertY = this._invertY, ju.samplingMode = this.samplingMode, ju._creationFlags = this._creationFlags, ju._useSRGBBuffer = this._useSRGBBuffer, uu._SerializeInternalTextureUniqueId && (ju.internalTextureUniqueId = this._texture?.uniqueId), ju.internalTextureLabel = this._texture?.label, ju.noMipmap = this._noMipmap, this.name = Eu, ju
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(Eu, ju, su) {
            if (Eu.customType) {
              const uu = bu.d.Instantiate(Eu.customType).Parse(Eu, ju, su);
              return Eu.samplingMode && uu.updateSamplingMode && uu._samplingMode && uu._samplingMode !== Eu.samplingMode && uu.updateSamplingMode(Eu.samplingMode), uu
            }
            if (Eu.isCube && !Eu.isRenderTarget) return uu._CubeTextureParser(Eu, ju, su);
            const Uu = void 0 !== Eu.internalTextureUniqueId;
            if (!Eu.name && !Eu.isRenderTarget && !Uu) return null;
            let Zu;
            if (Uu) {
              const uu = ju.wO().getLoadedTexturesCache();
              for (const ju of uu)
                if (ju.uniqueId === Eu.internalTextureUniqueId) {
                  Zu = ju;
                  break
                }
            }
            const Xu = uu => {
              if (uu && uu._texture && (uu._texture._cachedWrapU = null, uu._texture._cachedWrapV = null, uu._texture._cachedWrapR = null), Eu.samplingMode) {
                const ju = Eu.samplingMode;
                uu && uu.samplingMode !== ju && uu.updateSamplingMode(ju)
              }
              if (uu && Eu.animations)
                for (let ju = 0; ju < Eu.animations.length; ju++) {
                  const su = Eu.animations[ju],
                    Uu = (0, qu.d)("BABYLON.Animation");
                  Uu && uu.animations.push(Uu.Parse(su))
                }
              uu && uu._texture && (Uu && !Zu && uu._texture._setUniqueId(Eu.internalTextureUniqueId), uu._texture.label = Eu.internalTextureLabel)
            };
            return gu.e.Parse((() => {
              let Uu = !0;
              if (Eu.noMipmap && (Uu = !1), Eu.mirrorPlane) {
                const su = uu._CreateMirror(Eu.name, Eu.renderTargetSize, ju, Uu);
                return su._waitingRenderList = Eu.renderList, su.mirrorPlane = cu.d.FromArray(Eu.mirrorPlane), Xu(su), su
              }
              if (Eu.isRenderTarget && !Eu.base64String) {
                let su = null;
                if (Eu.isCube) {
                  if (ju.reflectionProbes)
                    for (let uu = 0; uu < ju.reflectionProbes.length; uu++) {
                      const su = ju.reflectionProbes[uu];
                      if (su.name === Eu.name) return su.cubeTexture
                    }
                } else su = uu._CreateRenderTargetTexture(Eu.name, Eu.renderTargetSize, ju, Uu, Eu._creationFlags ?? 0), su._waitingRenderList = Eu.renderList;
                return Xu(su), su
              }
              if (Eu.isVideo) {
                const Zu = uu._CreateVideoTexture(su + (Eu.url || Eu.name), su + (Eu.src || Eu.url), ju, Uu, Eu.invertY, Eu.samplingMode, Eu.settings || {});
                return Xu(Zu), Zu
              } {
                let lu;
                if ("string" === typeof Eu.base64String && Eu.base64String && !Zu) {
                  const su = {
                      buffer: Eu.base64String,
                      noMipmap: !Uu,
                      invertY: Eu.invertY,
                      samplingMode: Eu.samplingMode,
                      useSRGBBuffer: Eu._useSRGBBuffer ?? !1,
                      creationFlags: Eu._creationFlags ?? 0,
                      onLoad: () => {
                        Xu(lu)
                      }
                    },
                    Zu = Eu.base64String,
                    qu = Zu.startsWith("data:") ? Zu.substring(5) : Zu;
                  lu = uu.CreateFromBase64String("", qu, ju, su), lu.name = Eu.name
                } else {
                  let qu;
                  qu = Eu.name && (Eu.name.indexOf("://") > 0 || Eu.name.startsWith("data:")) ? Eu.name : su + Eu.name, Eu.url && (Eu.url.startsWith("data:") || uu.UseSerializedUrlIfAny) && (qu = Eu.url);
                  const fu = {
                    noMipmap: !Uu,
                    invertY: Eu.invertY,
                    samplingMode: Eu.samplingMode,
                    useSRGBBuffer: Eu._useSRGBBuffer ?? !1,
                    creationFlags: Eu._creationFlags ?? 0,
                    onLoad: () => {
                      Xu(lu)
                    },
                    internalTexture: Zu
                  };
                  lu = new uu(qu, ju, fu)
                }
                return lu
              }
            }), Eu, ju)
          }
          static CreateFromBase64String(Eu, ju, su, Uu, Zu) {
            let Xu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : uu.TRILINEAR_SAMPLINGMODE;
            return new uu("data:" + ju, su, Uu, Zu, Xu, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, Eu, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(Eu, ju, su) {
            let Uu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Zu = arguments.length > 4 ? arguments[4] : void 0,
              Xu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              lu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : uu.TRILINEAR_SAMPLINGMODE,
              qu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              fu = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              Cu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              bu = arguments.length > 10 ? arguments[10] : void 0,
              cu = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== Eu.substring(0, 5) && (Eu = "data:" + Eu), new uu(Eu, su, Zu, Xu, lu, qu, fu, ju, Uu, Cu, void 0, void 0, bu, cu)
          }
        }, (() => {
          const Zu = "function" === typeof Symbol && Symbol.metadata ? Object.create(ku[Symbol.metadata] ?? null) : void 0;
          Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], Ou = [(0, Uu.E)()], Mu = [(0, Uu.E)()], eu = [(0, Uu.E)()], Gu = [(0, Uu.E)()], pu = [(0, Uu.E)()], wu = [(0, Uu.E)()], Ju = [(0, Uu.E)()], du = [(0, Uu.E)()], au = [(0, Uu.E)()], Pu = [(0, Uu.E)()], ou = [(0, Uu.E)()], (0, su.e)(uu, null, ou, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: uu => "isBlocking" in uu,
              get: uu => uu.isBlocking
            },
            metadata: Zu
          }, null, mu), (0, su.e)(null, null, Eu, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: uu => "url" in uu,
              get: uu => uu.url,
              set: (uu, Eu) => {
                uu.url = Eu
              }
            },
            metadata: Zu
          }, vu, Ku), (0, su.e)(null, null, ju, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: uu => "uOffset" in uu,
              get: uu => uu.uOffset,
              set: (uu, Eu) => {
                uu.uOffset = Eu
              }
            },
            metadata: Zu
          }, Vu, ru), (0, su.e)(null, null, Ou, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: uu => "vOffset" in uu,
              get: uu => uu.vOffset,
              set: (uu, Eu) => {
                uu.vOffset = Eu
              }
            },
            metadata: Zu
          }, Qu, iu), (0, su.e)(null, null, Mu, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: uu => "uScale" in uu,
              get: uu => uu.uScale,
              set: (uu, Eu) => {
                uu.uScale = Eu
              }
            },
            metadata: Zu
          }, Wu, Su), (0, su.e)(null, null, eu, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: uu => "vScale" in uu,
              get: uu => uu.vScale,
              set: (uu, Eu) => {
                uu.vScale = Eu
              }
            },
            metadata: Zu
          }, Iu, Fu), (0, su.e)(null, null, Gu, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: uu => "uAng" in uu,
              get: uu => uu.uAng,
              set: (uu, Eu) => {
                uu.uAng = Eu
              }
            },
            metadata: Zu
          }, Bu, Lu), (0, su.e)(null, null, pu, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: uu => "vAng" in uu,
              get: uu => uu.vAng,
              set: (uu, Eu) => {
                uu.vAng = Eu
              }
            },
            metadata: Zu
          }, tu, xu), (0, su.e)(null, null, wu, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: uu => "wAng" in uu,
              get: uu => uu.wAng,
              set: (uu, Eu) => {
                uu.wAng = Eu
              }
            },
            metadata: Zu
          }, Tu, Hu), (0, su.e)(null, null, Ju, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: uu => "uRotationCenter" in uu,
              get: uu => uu.uRotationCenter,
              set: (uu, Eu) => {
                uu.uRotationCenter = Eu
              }
            },
            metadata: Zu
          }, Au, nu), (0, su.e)(null, null, du, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: uu => "vRotationCenter" in uu,
              get: uu => uu.vRotationCenter,
              set: (uu, Eu) => {
                uu.vRotationCenter = Eu
              }
            },
            metadata: Zu
          }, yu, zu), (0, su.e)(null, null, au, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: uu => "wRotationCenter" in uu,
              get: uu => uu.wRotationCenter,
              set: (uu, Eu) => {
                uu.wRotationCenter = Eu
              }
            },
            metadata: Zu
          }, Ru, uE), (0, su.e)(null, null, Pu, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: uu => "homogeneousRotationInUVTransform" in uu,
              get: uu => uu.homogeneousRotationInUVTransform,
              set: (uu, Eu) => {
                uu.homogeneousRotationInUVTransform = Eu
              }
            },
            metadata: Zu
          }, EE, jE), Zu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Zu
          })
        })(), uu.SerializeBuffers = !0, uu.ForceSerializeBuffers = !1, uu.OnTextureLoadErrorObservable = new Zu.d, uu._SerializeInternalTextureUniqueId = !1, uu._CubeTextureParser = (uu, Eu, ju) => {
          throw (0, fu.h)("CubeTexture")
        }, uu._CreateMirror = (uu, Eu, ju, su) => {
          throw (0, fu.h)("MirrorTexture")
        }, uu._CreateRenderTargetTexture = (uu, Eu, ju, su, Uu) => {
          throw (0, fu.h)("RenderTargetTexture")
        }, uu.NEAREST_SAMPLINGMODE = 1, uu.NEAREST_NEAREST_MIPLINEAR = 8, uu.BILINEAR_SAMPLINGMODE = 2, uu.LINEAR_LINEAR_MIPNEAREST = 11, uu.TRILINEAR_SAMPLINGMODE = 3, uu.LINEAR_LINEAR_MIPLINEAR = 3, uu.NEAREST_NEAREST_MIPNEAREST = 4, uu.NEAREST_LINEAR_MIPNEAREST = 5, uu.NEAREST_LINEAR_MIPLINEAR = 6, uu.NEAREST_LINEAR = 7, uu.NEAREST_NEAREST = 1, uu.LINEAR_NEAREST_MIPNEAREST = 9, uu.LINEAR_NEAREST_MIPLINEAR = 10, uu.LINEAR_LINEAR = 2, uu.LINEAR_NEAREST = 12, uu.EXPLICIT_MODE = 0, uu.SPHERICAL_MODE = 1, uu.PLANAR_MODE = 2, uu.CUBIC_MODE = 3, uu.PROJECTION_MODE = 4, uu.SKYBOX_MODE = 5, uu.INVCUBIC_MODE = 6, uu.EQUIRECTANGULAR_MODE = 7, uu.FIXED_EQUIRECTANGULAR_MODE = 8, uu.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, uu.CLAMP_ADDRESSMODE = 0, uu.WRAP_ADDRESSMODE = 1, uu.MIRROR_ADDRESSMODE = 2, uu.UseSerializedUrlIfAny = !1, uu
      })(),
      eu = !1;

    function Gu() {
      eu || (eu = !0, (0, qu.f)("BABYLON.Texture", Mu), gu.e._TextureParser = Mu.Parse)
    }
  },
  40268: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su
    });
    class su {
      constructor(uu, Eu) {
        this.width = uu, this.height = Eu
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
      yJ(uu) {
        this.width = uu.width, this.height = uu.height
      }
      T6(uu, Eu) {
        return this.width = uu, this.height = Eu, this
      }
      set(uu, Eu) {
        return this.T6(uu, Eu)
      }
      multiplyByFloats(uu, Eu) {
        return new su(this.width * uu, this.height * Eu)
      }
      clone() {
        return new su(this.width, this.height)
      }
      equals(uu) {
        return !!uu && (this.width === uu.width && this.height === uu.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new su(0, 0)
      }
      add(uu) {
        return new su(this.width + uu.width, this.height + uu.height)
      }
      subtract(uu) {
        return new su(this.width - uu.width, this.height - uu.height)
      }
      scale(uu) {
        return new su(this.width * uu, this.height * uu)
      }
      static Lerp(uu, Eu, ju) {
        const Uu = uu.width + (Eu.width - uu.width) * ju,
          Zu = uu.height + (Eu.height - uu.height) * ju;
        return new su(Uu, Zu)
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);