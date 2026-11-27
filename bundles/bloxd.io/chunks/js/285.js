export const id = 285;
export const ids = [285];
export const modules = {
  41550: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye
    });
    let ye = !1
  },
  41111: (ee, ie, He) => {
    He.d(ie, {
      c: () => fe
    });
    var ye = He(41113),
      be = He(41121),
      Me = He(37931),
      Ke = He(37917),
      Ue = He(37929),
      Fe = He(38745),
      Je = He(41137);
    class oe {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(ee) {
        this._wrapU = ee
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(ee) {
        this._wrapV = ee
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(ee) {
        this._texture && (this._texture.isCube = ee)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(ee) {
        this._texture && (this._texture.is3D = ee)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(ee) {
        this._texture && (this._texture.is2DArray = ee)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(ee) {
        return void 0 !== ee?.shareDepth
      }
      constructor(ee) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = Je.e.Zero(), this._cachedBaseSize = Je.e.Zero(), this._initialSamplingMode = 2, this._texture = oe._IsRenderTargetWrapper(ee) ? ee.texture : ee, this._texture && (this._engine = this._texture.Nf(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(ee, this._texture, this._texture.generateMipMaps && ie)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var Re, ke = He(41141),
      qe = He(40985);
    let fe = (() => {
      var ee;
      let ie, He, Je, Re, qe, fe, Te, pe, Xe, ze, Be, Ee, ge, Oe, de, We, te, Ze, we, De, Pe, Ae, Ye, Ve, ae, ce = oe,
        xe = [],
        Le = [],
        Ce = [],
        ve = [],
        ue = [],
        me = [],
        le = [],
        Se = [],
        ne = [],
        je = [],
        se = [],
        Ie = [],
        he = [],
        Ne = [],
        Ge = [],
        re = [],
        Qe = [],
        ei = [],
        ii = [],
        Hi = [],
        yi = [],
        bi = [],
        Mi = [],
        Ki = [],
        Ui = [],
        Fi = [],
        Ji = [],
        oi = [],
        Ri = [],
        ki = [],
        qi = [];
      return ee = class extends ce {
        set hasAlpha(ee) {
          this._hasAlpha = ee
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(ee) {
          this._getAlphaFromRGB !== ee && (this._getAlphaFromRGB = ee, this._scene && this._scene.markAllMaterialsAsDirty(1, (ee => ee.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(ee) {
          this._coordinatesIndex !== ee && (this._coordinatesIndex = ee, this._scene && this._scene.markAllMaterialsAsDirty(1, (ee => ee.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(ee) {
          this._coordinatesMode !== ee && (this._coordinatesMode = ee, this._scene && this._scene.markAllMaterialsAsDirty(1, (ee => ee.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(ee) {
          this._wrapU = ee
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(ee) {
          this._wrapV = ee
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(ee) {
          this._texture ? this._texture.isCube = ee : this._isCube = ee
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(ee) {
          this._texture && (this._texture.is3D = ee)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(ee) {
          this._texture && (this._texture.is2DArray = ee)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(ee) {
          if (this._texture) {
            if (this._texture._gammaSpace === ee) return;
            this._texture._gammaSpace = ee
          } else {
            if (this._gammaSpace === ee) return;
            this._gammaSpace = ee
          }
          this.Xx()?.markAllMaterialsAsDirty(1, (ee => ee.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(ee) {
          ee !== this.isRGBD && (this._texture && (this._texture._isRGBD = ee), this.Xx()?.markAllMaterialsAsDirty(1, (ee => ee.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(ee) {
          this._texture && (this._texture._lodGenerationOffset = ee)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(ee) {
          this._texture && (this._texture._lodGenerationScale = ee)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(ee) {
          this._texture && (this._texture._linearSpecularLOD = ee)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(ee) {
          this._texture && (this._texture._irradianceTexture = ee)
        }
        get uid() {
          return this._uid || (this._uid = (0, Fe.d)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(ee) {
          this._onDisposeObserver && this.Bx.remove(this._onDisposeObserver), this._onDisposeObserver = this.Bx.add(ee)
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
        constructor(ie) {
          let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, ye.l)(this, xe), (0, ye.l)(this, Le, void 0)), this.name = ((0, ye.l)(this, Ce), (0, ye.l)(this, ve, void 0)), this.displayName = ((0, ye.l)(this, ue), (0, ye.l)(this, me, void 0)), this.metadata = ((0, ye.l)(this, le), (0, ye.l)(this, Se, null)), this._internalMetadata = (0, ye.l)(this, ne), this.reservedDataStore = null, this._hasAlpha = (0, ye.l)(this, je, !1), this._getAlphaFromRGB = ((0, ye.l)(this, se), (0, ye.l)(this, Ie, !1)), this.level = ((0, ye.l)(this, he), (0, ye.l)(this, Ne, 1)), this._coordinatesIndex = ((0, ye.l)(this, Ge), (0, ye.l)(this, re, 0)), this.optimizeUVAllocation = ((0, ye.l)(this, Qe), (0, ye.l)(this, ei, !0)), this._coordinatesMode = ((0, ye.l)(this, ii), (0, ye.l)(this, Hi, 0)), this.wrapR = ((0, ye.l)(this, yi), (0, ye.l)(this, bi, 1)), this.anisotropicFilteringLevel = ((0, ye.l)(this, Mi), (0, ye.l)(this, Ki, ee.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, ye.l)(this, Ui), !1), this._gammaSpace = !0, this.invertZ = (0, ye.l)(this, Fi, !1), this.lodLevelInAlpha = ((0, ye.l)(this, Ji), (0, ye.l)(this, oi, !1)), this._dominantDirection = ((0, ye.l)(this, Ri), null), this.isRenderTarget = (0, ye.l)(this, ki, !1), this._prefiltered = ((0, ye.l)(this, qi), !1), this._forceSerialize = !1, this.animations = [], this.Bx = new Me.d, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, ie ? ee._IsScene(ie) ? this._scene = ie : this._engine = ie : this._scene = Ue.b.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.Nf()), this._texture = He, this._uid = null
        }
        Xx() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return Ke.b.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return Ke.b.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(ee) {}
        get canRescale() {
          return !1
        }
        _getFromCache(ee, ie, He, ye, be, Me) {
          const Ke = this._getEngine();
          if (!Ke) return null;
          const Ue = Ke._getUseSRGBBuffer(!!be, ie),
            Fe = Ke.getLoadedTexturesCache();
          for (let Je = 0; Je < Fe.length; Je++) {
            const Ke = Fe[Je];
            if ((void 0 === be || Ue === Ke._useSRGBBuffer) && (void 0 === ye || ye === Ke.invertY) && Ke.url === ee && Ke.generateMipMaps === !ie && (!He || He === Ke.samplingMode) && (void 0 === Me || Me === Ke.isCube)) return Ke.incrementReferences(), Ke
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
          const ee = this.Xx();
          ee && ee.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            ye = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            be = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            Ke = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            Ue = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            Fe = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const Je = this._getEngine();
          if (!Je) return null;
          const oe = this.getSize();
          let Re = oe.width,
            ke = oe.height;
          0 !== ie && (Re /= Math.pow(2, ie), ke /= Math.pow(2, ie), Re = Math.round(Re), ke = Math.round(ke)), Ue = Math.min(Re, Ue), Fe = Math.min(ke, Fe);
          try {
            return this._texture.isCube || this._texture.is2DArray ? Je._readTexturePixels(this._texture, Ue, Fe, ee, ie, He, ye, be, Me, Ke) : Je._readTexturePixels(this._texture, Ue, Fe, -1, ie, He, ye, be, Me, Ke)
          } catch (qe) {
            return null
          }
        }
        _readPixelsSync() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            ye = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            be = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const Me = this.getSize();
          let Ke = Me.width,
            Ue = Me.height;
          const Fe = this._getEngine();
          if (!Fe) return null;
          0 != ie && (Ke /= Math.pow(2, ie), Ue /= Math.pow(2, ie), Ke = Math.round(Ke), Ue = Math.round(Ue));
          try {
            return this._texture.isCube ? Fe._readTexturePixelsSync(this._texture, Ke, Ue, ee, ie, He, ye, be) : Fe._readTexturePixelsSync(this._texture, Ke, Ue, -1, ie, He, ye, be)
          } catch (Je) {
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
            const ee = this._scene.textures.indexOf(this);
            if (ee >= 0 && this._scene.textures.splice(ee, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const ee = this._parentContainer.textures.indexOf(this);
              ee > -1 && this._parentContainer.textures.splice(ee, 1), this._parentContainer = null
            }
          }
          this.Bx.notifyObservers(this), this.Bx.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !ee) return null;
          const ie = ke.c.Serialize(this);
          return ke.c.AppendSerializedAnimations(this, ie), ie
        }
        static WhenAllReady(ee, ie) {
          let He = ee.length;
          if (0 !== He)
            for (let ye = 0; ye < ee.length; ye++) {
              const be = ee[ye];
              if (be.isReady()) 0 === --He && ie();
              else {
                const ee = be.onLoadObservable;
                ee ? ee.addOnce((() => {
                  0 === --He && ie()
                })) : 0 === --He && ie()
              }
            } else ie()
        }
        static _IsScene(ee) {
          return "Scene" === ee.getClassName()
        }
      }, (() => {
        const Me = "function" === typeof Symbol && Symbol.metadata ? Object.create(ce[Symbol.metadata] ?? null) : void 0;
        ie = [(0, be.R)()], He = [(0, be.R)()], Je = [(0, be.R)()], Re = [(0, be.R)()], qe = [(0, be.R)("hasAlpha")], fe = [(0, be.R)("getAlphaFromRGB")], Te = [(0, be.R)()], pe = [(0, be.R)("coordinatesIndex")], Xe = [(0, be.R)()], ze = [(0, be.R)("coordinatesMode")], Be = [(0, be.R)()], Ee = [(0, be.R)()], ge = [(0, be.R)()], Oe = [(0, be.R)()], de = [(0, be.R)()], We = [(0, be.R)()], te = [(0, be.R)()], Ze = [(0, be.R)()], we = [(0, be.R)()], De = [(0, be.R)()], Pe = [(0, be.R)()], Ae = [(0, be.R)()], Ye = [(0, be.R)()], Ve = [(0, be.H)()], ae = [(0, be.R)()], (0, ye.i)(ee, null, Be, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: ee => "wrapU" in ee,
            get: ee => ee.wrapU
          },
          metadata: Me
        }, null, xe), (0, ye.i)(ee, null, Ee, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: ee => "wrapV" in ee,
            get: ee => ee.wrapV
          },
          metadata: Me
        }, null, xe), (0, ye.i)(ee, null, de, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: ee => "isCube" in ee,
            get: ee => ee.isCube
          },
          metadata: Me
        }, null, xe), (0, ye.i)(ee, null, We, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: ee => "is3D" in ee,
            get: ee => ee.is3D
          },
          metadata: Me
        }, null, xe), (0, ye.i)(ee, null, te, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: ee => "is2DArray" in ee,
            get: ee => ee.is2DArray
          },
          metadata: Me
        }, null, xe), (0, ye.i)(ee, null, Ze, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: ee => "gammaSpace" in ee,
            get: ee => ee.gammaSpace
          },
          metadata: Me
        }, null, xe), (0, ye.i)(ee, null, Pe, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: ee => "lodGenerationOffset" in ee,
            get: ee => ee.lodGenerationOffset
          },
          metadata: Me
        }, null, xe), (0, ye.i)(ee, null, Ae, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: ee => "lodGenerationScale" in ee,
            get: ee => ee.lodGenerationScale
          },
          metadata: Me
        }, null, xe), (0, ye.i)(ee, null, Ye, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: ee => "linearSpecularLOD" in ee,
            get: ee => ee.linearSpecularLOD
          },
          metadata: Me
        }, null, xe), (0, ye.i)(ee, null, Ve, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "irradianceTexture" in ee,
            get: ee => ee.irradianceTexture
          },
          metadata: Me
        }, null, xe), (0, ye.i)(null, null, ie, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: ee => "uniqueId" in ee,
            get: ee => ee.uniqueId,
            set: (ee, ie) => {
              ee.uniqueId = ie
            }
          },
          metadata: Me
        }, Le, Ce), (0, ye.i)(null, null, He, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: ee => "name" in ee,
            get: ee => ee.name,
            set: (ee, ie) => {
              ee.name = ie
            }
          },
          metadata: Me
        }, ve, ue), (0, ye.i)(null, null, Je, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: ee => "displayName" in ee,
            get: ee => ee.displayName,
            set: (ee, ie) => {
              ee.displayName = ie
            }
          },
          metadata: Me
        }, me, le), (0, ye.i)(null, null, Re, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: ee => "metadata" in ee,
            get: ee => ee.metadata,
            set: (ee, ie) => {
              ee.metadata = ie
            }
          },
          metadata: Me
        }, Se, ne), (0, ye.i)(null, null, qe, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: ee => "_hasAlpha" in ee,
            get: ee => ee._hasAlpha,
            set: (ee, ie) => {
              ee._hasAlpha = ie
            }
          },
          metadata: Me
        }, je, se), (0, ye.i)(null, null, fe, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: ee => "_getAlphaFromRGB" in ee,
            get: ee => ee._getAlphaFromRGB,
            set: (ee, ie) => {
              ee._getAlphaFromRGB = ie
            }
          },
          metadata: Me
        }, Ie, he), (0, ye.i)(null, null, Te, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: ee => "level" in ee,
            get: ee => ee.level,
            set: (ee, ie) => {
              ee.level = ie
            }
          },
          metadata: Me
        }, Ne, Ge), (0, ye.i)(null, null, pe, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: ee => "_coordinatesIndex" in ee,
            get: ee => ee._coordinatesIndex,
            set: (ee, ie) => {
              ee._coordinatesIndex = ie
            }
          },
          metadata: Me
        }, re, Qe), (0, ye.i)(null, null, Xe, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: ee => "optimizeUVAllocation" in ee,
            get: ee => ee.optimizeUVAllocation,
            set: (ee, ie) => {
              ee.optimizeUVAllocation = ie
            }
          },
          metadata: Me
        }, ei, ii), (0, ye.i)(null, null, ze, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: ee => "_coordinatesMode" in ee,
            get: ee => ee._coordinatesMode,
            set: (ee, ie) => {
              ee._coordinatesMode = ie
            }
          },
          metadata: Me
        }, Hi, yi), (0, ye.i)(null, null, ge, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: ee => "wrapR" in ee,
            get: ee => ee.wrapR,
            set: (ee, ie) => {
              ee.wrapR = ie
            }
          },
          metadata: Me
        }, bi, Mi), (0, ye.i)(null, null, Oe, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: ee => "anisotropicFilteringLevel" in ee,
            get: ee => ee.anisotropicFilteringLevel,
            set: (ee, ie) => {
              ee.anisotropicFilteringLevel = ie
            }
          },
          metadata: Me
        }, Ki, Ui), (0, ye.i)(null, null, we, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: ee => "invertZ" in ee,
            get: ee => ee.invertZ,
            set: (ee, ie) => {
              ee.invertZ = ie
            }
          },
          metadata: Me
        }, Fi, Ji), (0, ye.i)(null, null, De, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: ee => "lodLevelInAlpha" in ee,
            get: ee => ee.lodLevelInAlpha,
            set: (ee, ie) => {
              ee.lodLevelInAlpha = ie
            }
          },
          metadata: Me
        }, oi, Ri), (0, ye.i)(null, null, ae, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: ee => "isRenderTarget" in ee,
            get: ee => ee.isRenderTarget,
            set: (ee, ie) => {
              ee.isRenderTarget = ie
            }
          },
          metadata: Me
        }, ki, qi), Me && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Me
        })
      })(), ee.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, ee
    })();
    (Re = fe.prototype).forceSphericalPolynomialsRecompute ?? (Re.forceSphericalPolynomialsRecompute = (0, qe.h)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(fe.prototype, "sphericalPolynomial") || Object.defineProperty(fe.prototype, "sphericalPolynomial", (0, qe.d)("BaseTexture", "sphericalPolynomial"))
  },
  41593: (ee, ie, He) => {
    He.d(ie, {
      c: () => ge,
      e: () => Be
    });
    var ye = He(41113),
      be = He(41121),
      Me = He(37931),
      Ke = He(37917),
      Ue = He(41111),
      Fe = He(37949),
      Je = He(40985),
      oe = He(40995),
      Re = He(41212),
      ke = He(38590),
      qe = He(41172);

    function fe(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const ye = ie.width,
        be = ie.height;
      if (ee instanceof Float32Array) {
        let ie = ee.byteLength / ee.BYTES_PER_ELEMENT;
        const He = new Uint8Array(ie);
        for (; --ie >= 0;) {
          let ye = ee[ie];
          ye < 0 ? ye = 0 : ye > 1 && (ye = 1), He[ie] = 255 * ye
        }
        ee = He
      }
      const Me = document.createElement("canvas");
      Me.width = ye, Me.height = be;
      const Ke = Me.getContext("2d");
      if (!Ke) return null;
      const Ue = Ke.createImageData(ye, be);
      if (Ue.data.set(ee), Ke.putImageData(Ue, 0, 0), He) {
        const ee = document.createElement("canvas");
        ee.width = ye, ee.height = be;
        const ie = ee.getContext("2d");
        return ie ? (ie.translate(0, be), ie.scale(1, -1), ie.drawImage(Me, 0, 0), ee.toDataURL("image/png")) : null
      }
      return Me.toDataURL("image/png")
    }

    function Te(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const ye = ee.getInternalTexture();
      if (!ye) return null;
      const be = ee._readPixelsSync(ie, He);
      return be ? fe(be, ee.getSize(), ye.invertY) : null
    }
    async function pe(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const ye = ee.getInternalTexture();
      if (!ye) return null;
      const be = await ee.readPixels(ie, He);
      return be ? fe(be, ee.getSize(), ye.invertY) : null
    }
    var Xe = He(41550),
      ze = He(41141);
    let Be = (() => {
        var ee;
        let ie, He, fe, Be, Ee, ge, Oe, de, We, te, Ze, we, De, Pe = Ue.c,
          Ae = [],
          Ye = [],
          Ve = [],
          ae = [],
          ce = [],
          xe = [],
          Le = [],
          Ce = [],
          ve = [],
          ue = [],
          me = [],
          le = [],
          Se = [],
          ne = [],
          je = [],
          se = [],
          Ie = [],
          he = [],
          Ne = [],
          Ge = [],
          re = [],
          Qe = [],
          ei = [],
          ii = [],
          Hi = [];
        return ee = class extends Pe {
          static _CreateVideoTexture(ie, He, ye) {
            arguments.length > 5 && void 0 !== arguments[5] || ee.TRILINEAR_SAMPLINGMODE;
            throw (0, Je.l)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(ee) {
            this._isBlocking = ee
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(ie, He, be, Ke) {
            let Ue, Fe = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ee.TRILINEAR_SAMPLINGMODE,
              Je = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Re = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              ke = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              qe = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              fe = arguments.length > 9 ? arguments[9] : void 0,
              Te = arguments.length > 10 ? arguments[10] : void 0,
              pe = arguments.length > 11 ? arguments[11] : void 0,
              ze = arguments.length > 12 ? arguments[12] : void 0,
              Be = arguments.length > 13 ? arguments[13] : void 0;
            super(He), this.url = ((0, ye.l)(this, Ae), (0, ye.l)(this, Ye, null)), this.uOffset = ((0, ye.l)(this, Ve), (0, ye.l)(this, ae, 0)), this.vOffset = ((0, ye.l)(this, ce), (0, ye.l)(this, xe, 0)), this.uScale = ((0, ye.l)(this, Le), (0, ye.l)(this, Ce, 1)), this.vScale = ((0, ye.l)(this, ve), (0, ye.l)(this, ue, 1)), this.uAng = ((0, ye.l)(this, me), (0, ye.l)(this, le, 0)), this.vAng = ((0, ye.l)(this, Se), (0, ye.l)(this, ne, 0)), this.wAng = ((0, ye.l)(this, je), (0, ye.l)(this, se, 0)), this.uRotationCenter = ((0, ye.l)(this, Ie), (0, ye.l)(this, he, .5)), this.vRotationCenter = ((0, ye.l)(this, Ne), (0, ye.l)(this, Ge, .5)), this.wRotationCenter = ((0, ye.l)(this, re), (0, ye.l)(this, Qe, .5)), this.homogeneousRotationInUVTransform = ((0, ye.l)(this, ei), (0, ye.l)(this, ii, !1)), this.inspectableCustomProperties = ((0, ye.l)(this, Hi), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new Me.d, this._isBlocking = !0, this.name = ie || "", this.url = ie;
            let Ee = !1,
              ge = null,
              Oe = !0;
            "object" === typeof be && null !== be ? (Ue = be.noMipmap ?? !1, Ke = be.invertY ?? !Xe.c, Fe = be.samplingMode ?? ee.TRILINEAR_SAMPLINGMODE, Je = be.onLoad ?? null, Re = be.onError ?? null, ke = be.buffer ?? null, qe = be.deleteBuffer ?? !1, fe = be.format, Te = be.mimeType, pe = be.loaderOptions, ze = be.creationFlags, Ee = be.useSRGBBuffer ?? !1, ge = be.internalTexture ?? null, Oe = be.gammaSpace ?? Oe, Be = be.forcedExtension ?? Be) : Ue = !!be, this._gammaSpace = Oe, this._noMipmap = Ue, this._invertY = void 0 === Ke ? !Xe.c : Ke, this._initialSamplingMode = Fe, this._buffer = ke, this._deleteBuffer = qe, this._mimeType = Te, this._loaderOptions = pe, this._creationFlags = ze, this._useSRGBBuffer = Ee, this._forcedExtension = Be, void 0 !== fe && (this._format = fe);
            const de = this.Xx(),
              We = this._getEngine();
            if (!We) return;
            We.onBeforeTextureInitObservable.notifyObservers(this);
            const te = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), Je && Je(), !this.isBlocking && de && de.resetCachedMaterial()
              },
              Ze = (ie, He) => {
                this._loadingError = !0, this._errorObject = {
                  message: ie,
                  exception: He
                }, Re && Re(ie, He), ee.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !ge) return this._delayedOnLoad = te, void(this._delayedOnError = Ze);
            if (this._texture = ge ?? this._getFromCache(this.url, Ue, Fe, this._invertY, Ee, this.isCube), this._texture)
              if (this._texture.isReady) oe.c.SetImmediate((() => te()));
              else {
                const ee = this._texture.onLoadedObservable.add(te);
                this._texture.onErrorObservable.add((ie => {
                  Ze(ie.message, ie.exception), this._texture?.onLoadedObservable.remove(ee)
                }))
              }
            else if (de && de.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = te, this._delayedOnError = Ze;
            else {
              try {
                this._texture = We.createTexture(this.url, Ue, this._invertY, de, Fe, te, Ze, this._buffer, void 0, this._format, this._forcedExtension, Te, pe, ze, Ee)
              } catch (we) {
                throw Ze("error loading", we), we
              }
              qe && (this._buffer = null)
            }
          }
          updateURL(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              He = arguments.length > 2 ? arguments[2] : void 0,
              ye = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.Xx().markAllMaterialsAsDirty(1, (ee => ee.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = ee), this.url = ee, this._buffer = ie, this._forcedExtension = ye, this.delayLoadState = 4;
            const be = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              be ? be() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), He && He()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const ee = this.Xx();
            if (!ee) return;
            let ie = this.url;
            !ie && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (ie = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(ie, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? oe.c.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = ee.Nf().createTexture(ie, this._noMipmap, this._invertY, ee, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(ee, ie, He, ye) {
            ee *= this._cachedUScale, ie *= this._cachedVScale, ee -= this.uRotationCenter * this._cachedUScale, ie -= this.vRotationCenter * this._cachedVScale, He -= this.wRotationCenter, Ke.p.TransformCoordinatesFromFloatsToRef(ee, ie, He, this._rowGenerationMatrix, ye), ye.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, ye.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, ye.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * ee === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * ee, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = Ke.b.Zero(), this._rowGenerationMatrix = new Ke.b, this._t0 = Ke.p.Zero(), this._t1 = Ke.p.Zero(), this._t2 = Ke.p.Zero()), Ke.b.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (Ke.b.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, Ke.j.Matrix[0]), Ke.b.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, Ke.j.Matrix[1]), Ke.b.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, Ke.j.Matrix[2]), Ke.b.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, Ke.j.Matrix[3]), Ke.j.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Ke.j.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Ke.j.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Ke.j.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.XMe(this._t0), this._t2.XMe(this._t0), Ke.b.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const ie = this.Xx();
            if (!ie) return this._cachedTextureMatrix;
            const He = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && He !== this._cachedIdentity3x2 && ie.markAllMaterialsAsDirty(1, (ee => ee.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const ie = this.Xx();
            if (!ie) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== ee.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === ie.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = Ke.b.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = Ke.b.Zero());
            const He = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case ee.PLANAR_MODE:
                Ke.b.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case ee.PROJECTION_MODE: {
                Ke.b.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const ee = ie.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = ee.updateFlag, ee.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                Ke.b.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return He && ie.markAllMaterialsAsDirty(1, (ee => ee.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const ie = {
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
            return ze.c.Clone((() => new ee(this._texture ? this._texture.url : null, this.Xx(), ie)), this)
          }
          serialize() {
            const ie = this.name;
            ee.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const He = super.serialize(ee._SerializeInternalTextureUniqueId);
            if (!He) return null;
            if (ee.SerializeBuffers || ee.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) He.base64String = this._buffer, He.name = He.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const ee = this.mimeType || "image/png";
              He.base64String = `data:${ee};base64,${(0,qe.j)(this._buffer)}`
            } else(ee.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (He.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? Te(this) : pe(this));
            return He.invertY = this._invertY, He.samplingMode = this.samplingMode, He._creationFlags = this._creationFlags, He._useSRGBBuffer = this._useSRGBBuffer, ee._SerializeInternalTextureUniqueId && (He.internalTextureUniqueId = this._texture?.uniqueId), He.internalTextureLabel = this._texture?.label, He.noMipmap = this._noMipmap, this.name = ie, He
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(ie, He, ye) {
            if (ie.customType) {
              const ee = Re.d.Instantiate(ie.customType).Parse(ie, He, ye);
              return ie.samplingMode && ee.updateSamplingMode && ee._samplingMode && ee._samplingMode !== ie.samplingMode && ee.updateSamplingMode(ie.samplingMode), ee
            }
            if (ie.isCube && !ie.isRenderTarget) return ee._CubeTextureParser(ie, He, ye);
            const be = void 0 !== ie.internalTextureUniqueId;
            if (!ie.name && !ie.isRenderTarget && !be) return null;
            let Me;
            if (be) {
              const ee = He.Nf().getLoadedTexturesCache();
              for (const He of ee)
                if (He.uniqueId === ie.internalTextureUniqueId) {
                  Me = He;
                  break
                }
            }
            const Ke = ee => {
              if (ee && ee._texture && (ee._texture._cachedWrapU = null, ee._texture._cachedWrapV = null, ee._texture._cachedWrapR = null), ie.samplingMode) {
                const He = ie.samplingMode;
                ee && ee.samplingMode !== He && ee.updateSamplingMode(He)
              }
              if (ee && ie.animations)
                for (let He = 0; He < ie.animations.length; He++) {
                  const ye = ie.animations[He],
                    be = (0, Fe.c)("BABYLON.Animation");
                  be && ee.animations.push(be.Parse(ye))
                }
              ee && ee._texture && (be && !Me && ee._texture._setUniqueId(ie.internalTextureUniqueId), ee._texture.label = ie.internalTextureLabel)
            };
            return ze.c.Parse((() => {
              let be = !0;
              if (ie.noMipmap && (be = !1), ie.mirrorPlane) {
                const ye = ee._CreateMirror(ie.name, ie.renderTargetSize, He, be);
                return ye._waitingRenderList = ie.renderList, ye.mirrorPlane = ke.c.FromArray(ie.mirrorPlane), Ke(ye), ye
              }
              if (ie.isRenderTarget && !ie.base64String) {
                let ye = null;
                if (ie.isCube) {
                  if (He.reflectionProbes)
                    for (let ee = 0; ee < He.reflectionProbes.length; ee++) {
                      const ye = He.reflectionProbes[ee];
                      if (ye.name === ie.name) return ye.cubeTexture
                    }
                } else ye = ee._CreateRenderTargetTexture(ie.name, ie.renderTargetSize, He, be, ie._creationFlags ?? 0), ye._waitingRenderList = ie.renderList;
                return Ke(ye), ye
              }
              if (ie.isVideo) {
                const Me = ee._CreateVideoTexture(ye + (ie.url || ie.name), ye + (ie.src || ie.url), He, be, ie.invertY, ie.samplingMode, ie.settings || {});
                return Ke(Me), Me
              } {
                let Ue;
                if ("string" === typeof ie.base64String && ie.base64String && !Me) {
                  const ye = {
                      buffer: ie.base64String,
                      noMipmap: !be,
                      invertY: ie.invertY,
                      samplingMode: ie.samplingMode,
                      useSRGBBuffer: ie._useSRGBBuffer ?? !1,
                      creationFlags: ie._creationFlags ?? 0,
                      onLoad: () => {
                        Ke(Ue)
                      }
                    },
                    Me = ie.base64String,
                    Fe = Me.startsWith("data:") ? Me.substring(5) : Me;
                  Ue = ee.CreateFromBase64String("", Fe, He, ye), Ue.name = ie.name
                } else {
                  let Fe;
                  Fe = ie.name && (ie.name.indexOf("://") > 0 || ie.name.startsWith("data:")) ? ie.name : ye + ie.name, ie.url && (ie.url.startsWith("data:") || ee.UseSerializedUrlIfAny) && (Fe = ie.url);
                  const Je = {
                    noMipmap: !be,
                    invertY: ie.invertY,
                    samplingMode: ie.samplingMode,
                    useSRGBBuffer: ie._useSRGBBuffer ?? !1,
                    creationFlags: ie._creationFlags ?? 0,
                    onLoad: () => {
                      Ke(Ue)
                    },
                    internalTexture: Me
                  };
                  Ue = new ee(Fe, He, Je)
                }
                return Ue
              }
            }), ie, He)
          }
          static CreateFromBase64String(ie, He, ye, be, Me) {
            let Ke = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ee.TRILINEAR_SAMPLINGMODE;
            return new ee("data:" + He, ye, be, Me, Ke, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, ie, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(ie, He, ye) {
            let be = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Me = arguments.length > 4 ? arguments[4] : void 0,
              Ke = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              Ue = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : ee.TRILINEAR_SAMPLINGMODE,
              Fe = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Je = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              oe = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              Re = arguments.length > 10 ? arguments[10] : void 0,
              ke = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== ie.substring(0, 5) && (ie = "data:" + ie), new ee(ie, ye, Me, Ke, Ue, Fe, Je, He, be, oe, void 0, void 0, Re, ke)
          }
        }, (() => {
          const Me = "function" === typeof Symbol && Symbol.metadata ? Object.create(Pe[Symbol.metadata] ?? null) : void 0;
          ie = [(0, be.R)()], He = [(0, be.R)()], fe = [(0, be.R)()], Be = [(0, be.R)()], Ee = [(0, be.R)()], ge = [(0, be.R)()], Oe = [(0, be.R)()], de = [(0, be.R)()], We = [(0, be.R)()], te = [(0, be.R)()], Ze = [(0, be.R)()], we = [(0, be.R)()], De = [(0, be.R)()], (0, ye.i)(ee, null, De, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: ee => "isBlocking" in ee,
              get: ee => ee.isBlocking
            },
            metadata: Me
          }, null, Ae), (0, ye.i)(null, null, ie, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: ee => "url" in ee,
              get: ee => ee.url,
              set: (ee, ie) => {
                ee.url = ie
              }
            },
            metadata: Me
          }, Ye, Ve), (0, ye.i)(null, null, He, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: ee => "uOffset" in ee,
              get: ee => ee.uOffset,
              set: (ee, ie) => {
                ee.uOffset = ie
              }
            },
            metadata: Me
          }, ae, ce), (0, ye.i)(null, null, fe, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: ee => "vOffset" in ee,
              get: ee => ee.vOffset,
              set: (ee, ie) => {
                ee.vOffset = ie
              }
            },
            metadata: Me
          }, xe, Le), (0, ye.i)(null, null, Be, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: ee => "uScale" in ee,
              get: ee => ee.uScale,
              set: (ee, ie) => {
                ee.uScale = ie
              }
            },
            metadata: Me
          }, Ce, ve), (0, ye.i)(null, null, Ee, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: ee => "vScale" in ee,
              get: ee => ee.vScale,
              set: (ee, ie) => {
                ee.vScale = ie
              }
            },
            metadata: Me
          }, ue, me), (0, ye.i)(null, null, ge, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: ee => "uAng" in ee,
              get: ee => ee.uAng,
              set: (ee, ie) => {
                ee.uAng = ie
              }
            },
            metadata: Me
          }, le, Se), (0, ye.i)(null, null, Oe, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: ee => "vAng" in ee,
              get: ee => ee.vAng,
              set: (ee, ie) => {
                ee.vAng = ie
              }
            },
            metadata: Me
          }, ne, je), (0, ye.i)(null, null, de, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: ee => "wAng" in ee,
              get: ee => ee.wAng,
              set: (ee, ie) => {
                ee.wAng = ie
              }
            },
            metadata: Me
          }, se, Ie), (0, ye.i)(null, null, We, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: ee => "uRotationCenter" in ee,
              get: ee => ee.uRotationCenter,
              set: (ee, ie) => {
                ee.uRotationCenter = ie
              }
            },
            metadata: Me
          }, he, Ne), (0, ye.i)(null, null, te, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: ee => "vRotationCenter" in ee,
              get: ee => ee.vRotationCenter,
              set: (ee, ie) => {
                ee.vRotationCenter = ie
              }
            },
            metadata: Me
          }, Ge, re), (0, ye.i)(null, null, Ze, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: ee => "wRotationCenter" in ee,
              get: ee => ee.wRotationCenter,
              set: (ee, ie) => {
                ee.wRotationCenter = ie
              }
            },
            metadata: Me
          }, Qe, ei), (0, ye.i)(null, null, we, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: ee => "homogeneousRotationInUVTransform" in ee,
              get: ee => ee.homogeneousRotationInUVTransform,
              set: (ee, ie) => {
                ee.homogeneousRotationInUVTransform = ie
              }
            },
            metadata: Me
          }, ii, Hi), Me && Object.defineProperty(ee, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Me
          })
        })(), ee.SerializeBuffers = !0, ee.ForceSerializeBuffers = !1, ee.OnTextureLoadErrorObservable = new Me.d, ee._SerializeInternalTextureUniqueId = !1, ee._CubeTextureParser = (ee, ie, He) => {
          throw (0, Je.l)("CubeTexture")
        }, ee._CreateMirror = (ee, ie, He, ye) => {
          throw (0, Je.l)("MirrorTexture")
        }, ee._CreateRenderTargetTexture = (ee, ie, He, ye, be) => {
          throw (0, Je.l)("RenderTargetTexture")
        }, ee.NEAREST_SAMPLINGMODE = 1, ee.NEAREST_NEAREST_MIPLINEAR = 8, ee.BILINEAR_SAMPLINGMODE = 2, ee.LINEAR_LINEAR_MIPNEAREST = 11, ee.TRILINEAR_SAMPLINGMODE = 3, ee.LINEAR_LINEAR_MIPLINEAR = 3, ee.NEAREST_NEAREST_MIPNEAREST = 4, ee.NEAREST_LINEAR_MIPNEAREST = 5, ee.NEAREST_LINEAR_MIPLINEAR = 6, ee.NEAREST_LINEAR = 7, ee.NEAREST_NEAREST = 1, ee.LINEAR_NEAREST_MIPNEAREST = 9, ee.LINEAR_NEAREST_MIPLINEAR = 10, ee.LINEAR_LINEAR = 2, ee.LINEAR_NEAREST = 12, ee.EXPLICIT_MODE = 0, ee.SPHERICAL_MODE = 1, ee.PLANAR_MODE = 2, ee.CUBIC_MODE = 3, ee.PROJECTION_MODE = 4, ee.SKYBOX_MODE = 5, ee.INVCUBIC_MODE = 6, ee.EQUIRECTANGULAR_MODE = 7, ee.FIXED_EQUIRECTANGULAR_MODE = 8, ee.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, ee.CLAMP_ADDRESSMODE = 0, ee.WRAP_ADDRESSMODE = 1, ee.MIRROR_ADDRESSMODE = 2, ee.UseSerializedUrlIfAny = !1, ee
      })(),
      Ee = !1;

    function ge() {
      Ee || (Ee = !0, (0, Fe.e)("BABYLON.Texture", Be), ze.c._TextureParser = Be.Parse)
    }
  },
  41137: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye
    });
    class ye {
      constructor(ee, ie) {
        this.width = ee, this.height = ie
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let ee = 0 | this.width;
        return ee = 397 * ee ^ this.height, ee
      }
      jD(ee) {
        this.width = ee.width, this.height = ee.height
      }
      wie(ee, ie) {
        return this.width = ee, this.height = ie, this
      }
      set(ee, ie) {
        return this.wie(ee, ie)
      }
      multiplyByFloats(ee, ie) {
        return new ye(this.width * ee, this.height * ie)
      }
      clone() {
        return new ye(this.width, this.height)
      }
      equals(ee) {
        return !!ee && (this.width === ee.width && this.height === ee.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new ye(0, 0)
      }
      add(ee) {
        return new ye(this.width + ee.width, this.height + ee.height)
      }
      subtract(ee) {
        return new ye(this.width - ee.width, this.height - ee.height)
      }
      scale(ee) {
        return new ye(this.width * ee, this.height * ee)
      }
      static Lerp(ee, ie, He) {
        const be = ee.width + (ie.width - ee.width) * He,
          Me = ee.height + (ie.height - ee.height) * He;
        return new ye(be, Me)
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);