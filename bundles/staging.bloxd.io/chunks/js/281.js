export const id = 281;
export const ids = [281];
export const modules = {
  41688: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV
    });
    let JV = !1
  },
  41252: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => kV
    });
    var JV = xV(41257),
      YV = xV(41263),
      UV = xV(38296),
      yV = xV(38269),
      pV = xV(38287),
      QV = xV(39058),
      nV = xV(41272);
    class wV {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(VV) {
        this._wrapU = VV
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(VV) {
        this._wrapV = VV
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(VV) {
        this._texture && (this._texture.isCube = VV)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(VV) {
        this._texture && (this._texture.is3D = VV)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(VV) {
        this._texture && (this._texture.is2DArray = VV)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(VV) {
        return void 0 !== VV?.shareDepth
      }
      constructor(VV) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = nV.b.Zero(), this._cachedBaseSize = nV.b.Zero(), this._initialSamplingMode = 2, this._texture = wV._IsRenderTargetWrapper(VV) ? VV.texture : VV, this._texture && (this._engine = this._texture.sk(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(VV, this._texture, this._texture.generateMipMaps && eV)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var ZV, vV = xV(41279),
      rV = xV(41138);
    let kV = (() => {
      var VV;
      let eV, xV, nV, ZV, rV, kV, bV, EV, BV, jV, qV, tV, FV, TV, PV, AV, NV, XV, MV, zV, GV, WV, RV, gV, DV, iV = wV,
        CV = [],
        aV = [],
        oV = [],
        cV = [],
        hV = [],
        lV = [],
        LV = [],
        fV = [],
        mV = [],
        KV = [],
        HV = [],
        uV = [],
        sV = [],
        SV = [],
        IV = [],
        dV = [],
        OV = [],
        Ve = [],
        ee = [],
        xe = [],
        Je = [],
        Ye = [],
        Ue = [],
        ye = [],
        pe = [],
        Qe = [],
        ne = [],
        we = [],
        Ze = [],
        ve = [],
        re = [];
      return VV = class extends iV {
        set hasAlpha(VV) {
          this._hasAlpha = VV
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(VV) {
          this._getAlphaFromRGB !== VV && (this._getAlphaFromRGB = VV, this._scene && this._scene.markAllMaterialsAsDirty(1, (VV => VV.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(VV) {
          this._coordinatesIndex !== VV && (this._coordinatesIndex = VV, this._scene && this._scene.markAllMaterialsAsDirty(1, (VV => VV.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(VV) {
          this._coordinatesMode !== VV && (this._coordinatesMode = VV, this._scene && this._scene.markAllMaterialsAsDirty(1, (VV => VV.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(VV) {
          this._wrapU = VV
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(VV) {
          this._wrapV = VV
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(VV) {
          this._texture ? this._texture.isCube = VV : this._isCube = VV
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(VV) {
          this._texture && (this._texture.is3D = VV)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(VV) {
          this._texture && (this._texture.is2DArray = VV)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(VV) {
          if (this._texture) {
            if (this._texture._gammaSpace === VV) return;
            this._texture._gammaSpace = VV
          } else {
            if (this._gammaSpace === VV) return;
            this._gammaSpace = VV
          }
          this.dD()?.markAllMaterialsAsDirty(1, (VV => VV.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(VV) {
          VV !== this.isRGBD && (this._texture && (this._texture._isRGBD = VV), this.dD()?.markAllMaterialsAsDirty(1, (VV => VV.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(VV) {
          this._texture && (this._texture._lodGenerationOffset = VV)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(VV) {
          this._texture && (this._texture._lodGenerationScale = VV)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(VV) {
          this._texture && (this._texture._linearSpecularLOD = VV)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(VV) {
          this._texture && (this._texture._irradianceTexture = VV)
        }
        get uid() {
          return this._uid || (this._uid = (0, QV.d)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(VV) {
          this._onDisposeObserver && this.eC.remove(this._onDisposeObserver), this._onDisposeObserver = this.eC.add(VV)
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
        constructor(eV) {
          let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, JV.l)(this, CV), (0, JV.l)(this, aV, void 0)), this.name = ((0, JV.l)(this, oV), (0, JV.l)(this, cV, void 0)), this.displayName = ((0, JV.l)(this, hV), (0, JV.l)(this, lV, void 0)), this.metadata = ((0, JV.l)(this, LV), (0, JV.l)(this, fV, null)), this._internalMetadata = (0, JV.l)(this, mV), this.reservedDataStore = null, this._hasAlpha = (0, JV.l)(this, KV, !1), this._getAlphaFromRGB = ((0, JV.l)(this, HV), (0, JV.l)(this, uV, !1)), this.level = ((0, JV.l)(this, sV), (0, JV.l)(this, SV, 1)), this._coordinatesIndex = ((0, JV.l)(this, IV), (0, JV.l)(this, dV, 0)), this.optimizeUVAllocation = ((0, JV.l)(this, OV), (0, JV.l)(this, Ve, !0)), this._coordinatesMode = ((0, JV.l)(this, ee), (0, JV.l)(this, xe, 0)), this.wrapR = ((0, JV.l)(this, Je), (0, JV.l)(this, Ye, 1)), this.anisotropicFilteringLevel = ((0, JV.l)(this, Ue), (0, JV.l)(this, ye, VV.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, JV.l)(this, pe), !1), this._gammaSpace = !0, this.invertZ = (0, JV.l)(this, Qe, !1), this.lodLevelInAlpha = ((0, JV.l)(this, ne), (0, JV.l)(this, we, !1)), this._dominantDirection = ((0, JV.l)(this, Ze), null), this.isRenderTarget = (0, JV.l)(this, ve, !1), this._prefiltered = ((0, JV.l)(this, re), !1), this._forceSerialize = !1, this.animations = [], this.eC = new UV.c, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, eV ? VV._IsScene(eV) ? this._scene = eV : this._engine = eV : this._scene = pV.d.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.sk()), this._texture = xV, this._uid = null
        }
        dD() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return yV.d.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return yV.d.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(VV) {}
        get canRescale() {
          return !1
        }
        _getFromCache(VV, eV, xV, JV, YV, UV) {
          const yV = this._getEngine();
          if (!yV) return null;
          const pV = yV._getUseSRGBBuffer(!!YV, eV),
            QV = yV.getLoadedTexturesCache();
          for (let nV = 0; nV < QV.length; nV++) {
            const yV = QV[nV];
            if ((void 0 === YV || pV === yV._useSRGBBuffer) && (void 0 === JV || JV === yV.invertY) && yV.url === VV && yV.generateMipMaps === !eV && (!xV || xV === yV.samplingMode) && (void 0 === UV || UV === yV.isCube)) return yV.incrementReferences(), yV
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
          const VV = this.dD();
          VV && VV.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            JV = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            YV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            yV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            pV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            QV = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const nV = this._getEngine();
          if (!nV) return null;
          const wV = this.getSize();
          let ZV = wV.width,
            vV = wV.height;
          0 !== eV && (ZV /= Math.pow(2, eV), vV /= Math.pow(2, eV), ZV = Math.round(ZV), vV = Math.round(vV)), pV = Math.min(ZV, pV), QV = Math.min(vV, QV);
          try {
            return this._texture.isCube || this._texture.is2DArray ? nV._readTexturePixels(this._texture, pV, QV, VV, eV, xV, JV, YV, UV, yV) : nV._readTexturePixels(this._texture, pV, QV, -1, eV, xV, JV, YV, UV, yV)
          } catch (rV) {
            return null
          }
        }
        _readPixelsSync() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            JV = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            YV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const UV = this.getSize();
          let yV = UV.width,
            pV = UV.height;
          const QV = this._getEngine();
          if (!QV) return null;
          0 != eV && (yV /= Math.pow(2, eV), pV /= Math.pow(2, eV), yV = Math.round(yV), pV = Math.round(pV));
          try {
            return this._texture.isCube ? QV._readTexturePixelsSync(this._texture, yV, pV, VV, eV, xV, JV, YV) : QV._readTexturePixelsSync(this._texture, yV, pV, -1, eV, xV, JV, YV)
          } catch (nV) {
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
            const VV = this._scene.textures.indexOf(this);
            if (VV >= 0 && this._scene.textures.splice(VV, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const VV = this._parentContainer.textures.indexOf(this);
              VV > -1 && this._parentContainer.textures.splice(VV, 1), this._parentContainer = null
            }
          }
          this.eC.notifyObservers(this), this.eC.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !VV) return null;
          const eV = vV.b.Serialize(this);
          return vV.b.AppendSerializedAnimations(this, eV), eV
        }
        static WhenAllReady(VV, eV) {
          let xV = VV.length;
          if (0 !== xV)
            for (let JV = 0; JV < VV.length; JV++) {
              const YV = VV[JV];
              if (YV.isReady()) 0 === --xV && eV();
              else {
                const VV = YV.onLoadObservable;
                VV ? VV.addOnce((() => {
                  0 === --xV && eV()
                })) : 0 === --xV && eV()
              }
            } else eV()
        }
        static _IsScene(VV) {
          return "Scene" === VV.getClassName()
        }
      }, (() => {
        const UV = "function" === typeof Symbol && Symbol.metadata ? Object.create(iV[Symbol.metadata] ?? null) : void 0;
        eV = [(0, YV.J)()], xV = [(0, YV.J)()], nV = [(0, YV.J)()], ZV = [(0, YV.J)()], rV = [(0, YV.J)("hasAlpha")], kV = [(0, YV.J)("getAlphaFromRGB")], bV = [(0, YV.J)()], EV = [(0, YV.J)("coordinatesIndex")], BV = [(0, YV.J)()], jV = [(0, YV.J)("coordinatesMode")], qV = [(0, YV.J)()], tV = [(0, YV.J)()], FV = [(0, YV.J)()], TV = [(0, YV.J)()], PV = [(0, YV.J)()], AV = [(0, YV.J)()], NV = [(0, YV.J)()], XV = [(0, YV.J)()], MV = [(0, YV.J)()], zV = [(0, YV.J)()], GV = [(0, YV.J)()], WV = [(0, YV.J)()], RV = [(0, YV.J)()], gV = [(0, YV.F)()], DV = [(0, YV.J)()], (0, JV.i)(VV, null, qV, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: VV => "wrapU" in VV,
            get: VV => VV.wrapU
          },
          metadata: UV
        }, null, CV), (0, JV.i)(VV, null, tV, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: VV => "wrapV" in VV,
            get: VV => VV.wrapV
          },
          metadata: UV
        }, null, CV), (0, JV.i)(VV, null, PV, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: VV => "isCube" in VV,
            get: VV => VV.isCube
          },
          metadata: UV
        }, null, CV), (0, JV.i)(VV, null, AV, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: VV => "is3D" in VV,
            get: VV => VV.is3D
          },
          metadata: UV
        }, null, CV), (0, JV.i)(VV, null, NV, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: VV => "is2DArray" in VV,
            get: VV => VV.is2DArray
          },
          metadata: UV
        }, null, CV), (0, JV.i)(VV, null, XV, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: VV => "gammaSpace" in VV,
            get: VV => VV.gammaSpace
          },
          metadata: UV
        }, null, CV), (0, JV.i)(VV, null, GV, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: VV => "lodGenerationOffset" in VV,
            get: VV => VV.lodGenerationOffset
          },
          metadata: UV
        }, null, CV), (0, JV.i)(VV, null, WV, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: VV => "lodGenerationScale" in VV,
            get: VV => VV.lodGenerationScale
          },
          metadata: UV
        }, null, CV), (0, JV.i)(VV, null, RV, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: VV => "linearSpecularLOD" in VV,
            get: VV => VV.linearSpecularLOD
          },
          metadata: UV
        }, null, CV), (0, JV.i)(VV, null, gV, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "irradianceTexture" in VV,
            get: VV => VV.irradianceTexture
          },
          metadata: UV
        }, null, CV), (0, JV.i)(null, null, eV, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: VV => "uniqueId" in VV,
            get: VV => VV.uniqueId,
            set: (VV, eV) => {
              VV.uniqueId = eV
            }
          },
          metadata: UV
        }, aV, oV), (0, JV.i)(null, null, xV, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: VV => "name" in VV,
            get: VV => VV.name,
            set: (VV, eV) => {
              VV.name = eV
            }
          },
          metadata: UV
        }, cV, hV), (0, JV.i)(null, null, nV, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: VV => "displayName" in VV,
            get: VV => VV.displayName,
            set: (VV, eV) => {
              VV.displayName = eV
            }
          },
          metadata: UV
        }, lV, LV), (0, JV.i)(null, null, ZV, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: VV => "metadata" in VV,
            get: VV => VV.metadata,
            set: (VV, eV) => {
              VV.metadata = eV
            }
          },
          metadata: UV
        }, fV, mV), (0, JV.i)(null, null, rV, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: VV => "_hasAlpha" in VV,
            get: VV => VV._hasAlpha,
            set: (VV, eV) => {
              VV._hasAlpha = eV
            }
          },
          metadata: UV
        }, KV, HV), (0, JV.i)(null, null, kV, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: VV => "_getAlphaFromRGB" in VV,
            get: VV => VV._getAlphaFromRGB,
            set: (VV, eV) => {
              VV._getAlphaFromRGB = eV
            }
          },
          metadata: UV
        }, uV, sV), (0, JV.i)(null, null, bV, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: VV => "level" in VV,
            get: VV => VV.level,
            set: (VV, eV) => {
              VV.level = eV
            }
          },
          metadata: UV
        }, SV, IV), (0, JV.i)(null, null, EV, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: VV => "_coordinatesIndex" in VV,
            get: VV => VV._coordinatesIndex,
            set: (VV, eV) => {
              VV._coordinatesIndex = eV
            }
          },
          metadata: UV
        }, dV, OV), (0, JV.i)(null, null, BV, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: VV => "optimizeUVAllocation" in VV,
            get: VV => VV.optimizeUVAllocation,
            set: (VV, eV) => {
              VV.optimizeUVAllocation = eV
            }
          },
          metadata: UV
        }, Ve, ee), (0, JV.i)(null, null, jV, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: VV => "_coordinatesMode" in VV,
            get: VV => VV._coordinatesMode,
            set: (VV, eV) => {
              VV._coordinatesMode = eV
            }
          },
          metadata: UV
        }, xe, Je), (0, JV.i)(null, null, FV, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: VV => "wrapR" in VV,
            get: VV => VV.wrapR,
            set: (VV, eV) => {
              VV.wrapR = eV
            }
          },
          metadata: UV
        }, Ye, Ue), (0, JV.i)(null, null, TV, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: VV => "anisotropicFilteringLevel" in VV,
            get: VV => VV.anisotropicFilteringLevel,
            set: (VV, eV) => {
              VV.anisotropicFilteringLevel = eV
            }
          },
          metadata: UV
        }, ye, pe), (0, JV.i)(null, null, MV, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: VV => "invertZ" in VV,
            get: VV => VV.invertZ,
            set: (VV, eV) => {
              VV.invertZ = eV
            }
          },
          metadata: UV
        }, Qe, ne), (0, JV.i)(null, null, zV, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: VV => "lodLevelInAlpha" in VV,
            get: VV => VV.lodLevelInAlpha,
            set: (VV, eV) => {
              VV.lodLevelInAlpha = eV
            }
          },
          metadata: UV
        }, we, Ze), (0, JV.i)(null, null, DV, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: VV => "isRenderTarget" in VV,
            get: VV => VV.isRenderTarget,
            set: (VV, eV) => {
              VV.isRenderTarget = eV
            }
          },
          metadata: UV
        }, ve, re), UV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: UV
        })
      })(), VV.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, VV
    })();
    (ZV = kV.prototype).forceSphericalPolynomialsRecompute ?? (ZV.forceSphericalPolynomialsRecompute = (0, rV.j)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(kV.prototype, "sphericalPolynomial") || Object.defineProperty(kV.prototype, "sphericalPolynomial", (0, rV.g)("BaseTexture", "sphericalPolynomial"))
  },
  41738: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => FV,
      f: () => qV
    });
    var JV = xV(41257),
      YV = xV(41263),
      UV = xV(38296),
      yV = xV(38269),
      pV = xV(41252),
      QV = xV(38318),
      nV = xV(41138),
      wV = xV(41145),
      ZV = xV(41344),
      vV = xV(38917),
      rV = xV(41315);

    function kV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const JV = eV.width,
        YV = eV.height;
      if (VV instanceof Float32Array) {
        let eV = VV.byteLength / VV.BYTES_PER_ELEMENT;
        const xV = new Uint8Array(eV);
        for (; --eV >= 0;) {
          let JV = VV[eV];
          JV < 0 ? JV = 0 : JV > 1 && (JV = 1), xV[eV] = 255 * JV
        }
        VV = xV
      }
      const UV = document.createElement("canvas");
      UV.width = JV, UV.height = YV;
      const yV = UV.getContext("2d");
      if (!yV) return null;
      const pV = yV.createImageData(JV, YV);
      if (pV.data.set(VV), yV.putImageData(pV, 0, 0), xV) {
        const VV = document.createElement("canvas");
        VV.width = JV, VV.height = YV;
        const eV = VV.getContext("2d");
        return eV ? (eV.translate(0, YV), eV.scale(1, -1), eV.drawImage(UV, 0, 0), VV.toDataURL("image/png")) : null
      }
      return UV.toDataURL("image/png")
    }

    function bV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const JV = VV.getInternalTexture();
      if (!JV) return null;
      const YV = VV._readPixelsSync(eV, xV);
      return YV ? kV(YV, VV.getSize(), JV.invertY) : null
    }
    async function EV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const JV = VV.getInternalTexture();
      if (!JV) return null;
      const YV = await VV.readPixels(eV, xV);
      return YV ? kV(YV, VV.getSize(), JV.invertY) : null
    }
    var BV = xV(41688),
      jV = xV(41279);
    let qV = (() => {
        var VV;
        let eV, xV, kV, qV, tV, FV, TV, PV, AV, NV, XV, MV, zV, GV = pV.c,
          WV = [],
          RV = [],
          gV = [],
          DV = [],
          iV = [],
          CV = [],
          aV = [],
          oV = [],
          cV = [],
          hV = [],
          lV = [],
          LV = [],
          fV = [],
          mV = [],
          KV = [],
          HV = [],
          uV = [],
          sV = [],
          SV = [],
          IV = [],
          dV = [],
          OV = [],
          Ve = [],
          ee = [],
          xe = [];
        return VV = class extends GV {
          static _CreateVideoTexture(eV, xV, JV) {
            arguments.length > 5 && void 0 !== arguments[5] || VV.TRILINEAR_SAMPLINGMODE;
            throw (0, nV.n)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(VV) {
            this._isBlocking = VV
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(eV, xV, YV, yV) {
            let pV, QV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : VV.TRILINEAR_SAMPLINGMODE,
              nV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              ZV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              vV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              rV = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              kV = arguments.length > 9 ? arguments[9] : void 0,
              bV = arguments.length > 10 ? arguments[10] : void 0,
              EV = arguments.length > 11 ? arguments[11] : void 0,
              jV = arguments.length > 12 ? arguments[12] : void 0,
              qV = arguments.length > 13 ? arguments[13] : void 0;
            super(xV), this.url = ((0, JV.l)(this, WV), (0, JV.l)(this, RV, null)), this.uOffset = ((0, JV.l)(this, gV), (0, JV.l)(this, DV, 0)), this.vOffset = ((0, JV.l)(this, iV), (0, JV.l)(this, CV, 0)), this.uScale = ((0, JV.l)(this, aV), (0, JV.l)(this, oV, 1)), this.vScale = ((0, JV.l)(this, cV), (0, JV.l)(this, hV, 1)), this.uAng = ((0, JV.l)(this, lV), (0, JV.l)(this, LV, 0)), this.vAng = ((0, JV.l)(this, fV), (0, JV.l)(this, mV, 0)), this.wAng = ((0, JV.l)(this, KV), (0, JV.l)(this, HV, 0)), this.uRotationCenter = ((0, JV.l)(this, uV), (0, JV.l)(this, sV, .5)), this.vRotationCenter = ((0, JV.l)(this, SV), (0, JV.l)(this, IV, .5)), this.wRotationCenter = ((0, JV.l)(this, dV), (0, JV.l)(this, OV, .5)), this.homogeneousRotationInUVTransform = ((0, JV.l)(this, Ve), (0, JV.l)(this, ee, !1)), this.inspectableCustomProperties = ((0, JV.l)(this, xe), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new UV.c, this._isBlocking = !0, this.name = eV || "", this.url = eV;
            let tV = !1,
              FV = null,
              TV = !0;
            "object" === typeof YV && null !== YV ? (pV = YV.noMipmap ?? !1, yV = YV.invertY ?? !BV.d, QV = YV.samplingMode ?? VV.TRILINEAR_SAMPLINGMODE, nV = YV.onLoad ?? null, ZV = YV.onError ?? null, vV = YV.buffer ?? null, rV = YV.deleteBuffer ?? !1, kV = YV.format, bV = YV.mimeType, EV = YV.loaderOptions, jV = YV.creationFlags, tV = YV.useSRGBBuffer ?? !1, FV = YV.internalTexture ?? null, TV = YV.gammaSpace ?? TV, qV = YV.forcedExtension ?? qV) : pV = !!YV, this._gammaSpace = TV, this._noMipmap = pV, this._invertY = void 0 === yV ? !BV.d : yV, this._initialSamplingMode = QV, this._buffer = vV, this._deleteBuffer = rV, this._mimeType = bV, this._loaderOptions = EV, this._creationFlags = jV, this._useSRGBBuffer = tV, this._forcedExtension = qV, void 0 !== kV && (this._format = kV);
            const PV = this.dD(),
              AV = this._getEngine();
            if (!AV) return;
            AV.onBeforeTextureInitObservable.notifyObservers(this);
            const NV = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), nV && nV(), !this.isBlocking && PV && PV.resetCachedMaterial()
              },
              XV = (eV, xV) => {
                this._loadingError = !0, this._errorObject = {
                  message: eV,
                  exception: xV
                }, ZV && ZV(eV, xV), VV.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !FV) return this._delayedOnLoad = NV, void(this._delayedOnError = XV);
            if (this._texture = FV ?? this._getFromCache(this.url, pV, QV, this._invertY, tV, this.isCube), this._texture)
              if (this._texture.isReady) wV.b.SetImmediate((() => NV()));
              else {
                const VV = this._texture.onLoadedObservable.add(NV);
                this._texture.onErrorObservable.add((eV => {
                  XV(eV.message, eV.exception), this._texture?.onLoadedObservable.remove(VV)
                }))
              }
            else if (PV && PV.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = NV, this._delayedOnError = XV;
            else {
              try {
                this._texture = AV.createTexture(this.url, pV, this._invertY, PV, QV, NV, XV, this._buffer, void 0, this._format, this._forcedExtension, bV, EV, jV, tV)
              } catch (MV) {
                throw XV("error loading", MV), MV
              }
              rV && (this._buffer = null)
            }
          }
          updateURL(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              xV = arguments.length > 2 ? arguments[2] : void 0,
              JV = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.dD().markAllMaterialsAsDirty(1, (VV => VV.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = VV), this.url = VV, this._buffer = eV, this._forcedExtension = JV, this.delayLoadState = 4;
            const YV = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              YV ? YV() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), xV && xV()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const VV = this.dD();
            if (!VV) return;
            let eV = this.url;
            !eV && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (eV = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(eV, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? wV.b.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = VV.sk().createTexture(eV, this._noMipmap, this._invertY, VV, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(VV, eV, xV, JV) {
            VV *= this._cachedUScale, eV *= this._cachedVScale, VV -= this.uRotationCenter * this._cachedUScale, eV -= this.vRotationCenter * this._cachedVScale, xV -= this.wRotationCenter, yV.o.TransformCoordinatesFromFloatsToRef(VV, eV, xV, this._rowGenerationMatrix, JV), JV.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, JV.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, JV.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * VV === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * VV, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = yV.d.Zero(), this._rowGenerationMatrix = new yV.d, this._t0 = yV.o.Zero(), this._t1 = yV.o.Zero(), this._t2 = yV.o.Zero()), yV.d.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (yV.d.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, yV.l.Matrix[0]), yV.d.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, yV.l.Matrix[1]), yV.d.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, yV.l.Matrix[2]), yV.d.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, yV.l.Matrix[3]), yV.l.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(yV.l.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(yV.l.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(yV.l.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.IYV(this._t0), this._t2.IYV(this._t0), yV.d.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const eV = this.dD();
            if (!eV) return this._cachedTextureMatrix;
            const xV = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && xV !== this._cachedIdentity3x2 && eV.markAllMaterialsAsDirty(1, (VV => VV.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const eV = this.dD();
            if (!eV) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== VV.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === eV.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = yV.d.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = yV.d.Zero());
            const xV = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case VV.PLANAR_MODE:
                yV.d.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case VV.PROJECTION_MODE: {
                yV.d.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const VV = eV.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = VV.updateFlag, VV.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                yV.d.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return xV && eV.markAllMaterialsAsDirty(1, (VV => VV.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const eV = {
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
            return jV.b.Clone((() => new VV(this._texture ? this._texture.url : null, this.dD(), eV)), this)
          }
          serialize() {
            const eV = this.name;
            VV.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const xV = super.serialize(VV._SerializeInternalTextureUniqueId);
            if (!xV) return null;
            if (VV.SerializeBuffers || VV.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) xV.base64String = this._buffer, xV.name = xV.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const VV = this.mimeType || "image/png";
              xV.base64String = `data:${VV};base64,${(0,rV.h)(this._buffer)}`
            } else(VV.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (xV.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? bV(this) : EV(this));
            return xV.invertY = this._invertY, xV.samplingMode = this.samplingMode, xV._creationFlags = this._creationFlags, xV._useSRGBBuffer = this._useSRGBBuffer, VV._SerializeInternalTextureUniqueId && (xV.internalTextureUniqueId = this._texture?.uniqueId), xV.internalTextureLabel = this._texture?.label, xV.noMipmap = this._noMipmap, this.name = eV, xV
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(eV, xV, JV) {
            if (eV.customType) {
              const VV = ZV.e.Instantiate(eV.customType).Parse(eV, xV, JV);
              return eV.samplingMode && VV.updateSamplingMode && VV._samplingMode && VV._samplingMode !== eV.samplingMode && VV.updateSamplingMode(eV.samplingMode), VV
            }
            if (eV.isCube && !eV.isRenderTarget) return VV._CubeTextureParser(eV, xV, JV);
            const YV = void 0 !== eV.internalTextureUniqueId;
            if (!eV.name && !eV.isRenderTarget && !YV) return null;
            let UV;
            if (YV) {
              const VV = xV.sk().getLoadedTexturesCache();
              for (const xV of VV)
                if (xV.uniqueId === eV.internalTextureUniqueId) {
                  UV = xV;
                  break
                }
            }
            const yV = VV => {
              if (VV && VV._texture && (VV._texture._cachedWrapU = null, VV._texture._cachedWrapV = null, VV._texture._cachedWrapR = null), eV.samplingMode) {
                const xV = eV.samplingMode;
                VV && VV.samplingMode !== xV && VV.updateSamplingMode(xV)
              }
              if (VV && eV.animations)
                for (let xV = 0; xV < eV.animations.length; xV++) {
                  const JV = eV.animations[xV],
                    YV = (0, QV.c)("BABYLON.Animation");
                  YV && VV.animations.push(YV.Parse(JV))
                }
              VV && VV._texture && (YV && !UV && VV._texture._setUniqueId(eV.internalTextureUniqueId), VV._texture.label = eV.internalTextureLabel)
            };
            return jV.b.Parse((() => {
              let YV = !0;
              if (eV.noMipmap && (YV = !1), eV.mirrorPlane) {
                const JV = VV._CreateMirror(eV.name, eV.renderTargetSize, xV, YV);
                return JV._waitingRenderList = eV.renderList, JV.mirrorPlane = vV.d.FromArray(eV.mirrorPlane), yV(JV), JV
              }
              if (eV.isRenderTarget && !eV.base64String) {
                let JV = null;
                if (eV.isCube) {
                  if (xV.reflectionProbes)
                    for (let VV = 0; VV < xV.reflectionProbes.length; VV++) {
                      const JV = xV.reflectionProbes[VV];
                      if (JV.name === eV.name) return JV.cubeTexture
                    }
                } else JV = VV._CreateRenderTargetTexture(eV.name, eV.renderTargetSize, xV, YV, eV._creationFlags ?? 0), JV._waitingRenderList = eV.renderList;
                return yV(JV), JV
              }
              if (eV.isVideo) {
                const UV = VV._CreateVideoTexture(JV + (eV.url || eV.name), JV + (eV.src || eV.url), xV, YV, eV.invertY, eV.samplingMode, eV.settings || {});
                return yV(UV), UV
              } {
                let pV;
                if ("string" === typeof eV.base64String && eV.base64String && !UV) {
                  const JV = {
                      buffer: eV.base64String,
                      noMipmap: !YV,
                      invertY: eV.invertY,
                      samplingMode: eV.samplingMode,
                      useSRGBBuffer: eV._useSRGBBuffer ?? !1,
                      creationFlags: eV._creationFlags ?? 0,
                      onLoad: () => {
                        yV(pV)
                      }
                    },
                    UV = eV.base64String,
                    QV = UV.startsWith("data:") ? UV.substring(5) : UV;
                  pV = VV.CreateFromBase64String("", QV, xV, JV), pV.name = eV.name
                } else {
                  let QV;
                  QV = eV.name && (eV.name.indexOf("://") > 0 || eV.name.startsWith("data:")) ? eV.name : JV + eV.name, eV.url && (eV.url.startsWith("data:") || VV.UseSerializedUrlIfAny) && (QV = eV.url);
                  const nV = {
                    noMipmap: !YV,
                    invertY: eV.invertY,
                    samplingMode: eV.samplingMode,
                    useSRGBBuffer: eV._useSRGBBuffer ?? !1,
                    creationFlags: eV._creationFlags ?? 0,
                    onLoad: () => {
                      yV(pV)
                    },
                    internalTexture: UV
                  };
                  pV = new VV(QV, xV, nV)
                }
                return pV
              }
            }), eV, xV)
          }
          static CreateFromBase64String(eV, xV, JV, YV, UV) {
            let yV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : VV.TRILINEAR_SAMPLINGMODE;
            return new VV("data:" + xV, JV, YV, UV, yV, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, eV, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(eV, xV, JV) {
            let YV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              UV = arguments.length > 4 ? arguments[4] : void 0,
              yV = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              pV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : VV.TRILINEAR_SAMPLINGMODE,
              QV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              nV = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              wV = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              ZV = arguments.length > 10 ? arguments[10] : void 0,
              vV = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== eV.substring(0, 5) && (eV = "data:" + eV), new VV(eV, JV, UV, yV, pV, QV, nV, xV, YV, wV, void 0, void 0, ZV, vV)
          }
        }, (() => {
          const UV = "function" === typeof Symbol && Symbol.metadata ? Object.create(GV[Symbol.metadata] ?? null) : void 0;
          eV = [(0, YV.J)()], xV = [(0, YV.J)()], kV = [(0, YV.J)()], qV = [(0, YV.J)()], tV = [(0, YV.J)()], FV = [(0, YV.J)()], TV = [(0, YV.J)()], PV = [(0, YV.J)()], AV = [(0, YV.J)()], NV = [(0, YV.J)()], XV = [(0, YV.J)()], MV = [(0, YV.J)()], zV = [(0, YV.J)()], (0, JV.i)(VV, null, zV, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: VV => "isBlocking" in VV,
              get: VV => VV.isBlocking
            },
            metadata: UV
          }, null, WV), (0, JV.i)(null, null, eV, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: VV => "url" in VV,
              get: VV => VV.url,
              set: (VV, eV) => {
                VV.url = eV
              }
            },
            metadata: UV
          }, RV, gV), (0, JV.i)(null, null, xV, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: VV => "uOffset" in VV,
              get: VV => VV.uOffset,
              set: (VV, eV) => {
                VV.uOffset = eV
              }
            },
            metadata: UV
          }, DV, iV), (0, JV.i)(null, null, kV, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: VV => "vOffset" in VV,
              get: VV => VV.vOffset,
              set: (VV, eV) => {
                VV.vOffset = eV
              }
            },
            metadata: UV
          }, CV, aV), (0, JV.i)(null, null, qV, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: VV => "uScale" in VV,
              get: VV => VV.uScale,
              set: (VV, eV) => {
                VV.uScale = eV
              }
            },
            metadata: UV
          }, oV, cV), (0, JV.i)(null, null, tV, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: VV => "vScale" in VV,
              get: VV => VV.vScale,
              set: (VV, eV) => {
                VV.vScale = eV
              }
            },
            metadata: UV
          }, hV, lV), (0, JV.i)(null, null, FV, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: VV => "uAng" in VV,
              get: VV => VV.uAng,
              set: (VV, eV) => {
                VV.uAng = eV
              }
            },
            metadata: UV
          }, LV, fV), (0, JV.i)(null, null, TV, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: VV => "vAng" in VV,
              get: VV => VV.vAng,
              set: (VV, eV) => {
                VV.vAng = eV
              }
            },
            metadata: UV
          }, mV, KV), (0, JV.i)(null, null, PV, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: VV => "wAng" in VV,
              get: VV => VV.wAng,
              set: (VV, eV) => {
                VV.wAng = eV
              }
            },
            metadata: UV
          }, HV, uV), (0, JV.i)(null, null, AV, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: VV => "uRotationCenter" in VV,
              get: VV => VV.uRotationCenter,
              set: (VV, eV) => {
                VV.uRotationCenter = eV
              }
            },
            metadata: UV
          }, sV, SV), (0, JV.i)(null, null, NV, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: VV => "vRotationCenter" in VV,
              get: VV => VV.vRotationCenter,
              set: (VV, eV) => {
                VV.vRotationCenter = eV
              }
            },
            metadata: UV
          }, IV, dV), (0, JV.i)(null, null, XV, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: VV => "wRotationCenter" in VV,
              get: VV => VV.wRotationCenter,
              set: (VV, eV) => {
                VV.wRotationCenter = eV
              }
            },
            metadata: UV
          }, OV, Ve), (0, JV.i)(null, null, MV, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: VV => "homogeneousRotationInUVTransform" in VV,
              get: VV => VV.homogeneousRotationInUVTransform,
              set: (VV, eV) => {
                VV.homogeneousRotationInUVTransform = eV
              }
            },
            metadata: UV
          }, ee, xe), UV && Object.defineProperty(VV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: UV
          })
        })(), VV.SerializeBuffers = !0, VV.ForceSerializeBuffers = !1, VV.OnTextureLoadErrorObservable = new UV.c, VV._SerializeInternalTextureUniqueId = !1, VV._CubeTextureParser = (VV, eV, xV) => {
          throw (0, nV.n)("CubeTexture")
        }, VV._CreateMirror = (VV, eV, xV, JV) => {
          throw (0, nV.n)("MirrorTexture")
        }, VV._CreateRenderTargetTexture = (VV, eV, xV, JV, YV) => {
          throw (0, nV.n)("RenderTargetTexture")
        }, VV.NEAREST_SAMPLINGMODE = 1, VV.NEAREST_NEAREST_MIPLINEAR = 8, VV.BILINEAR_SAMPLINGMODE = 2, VV.LINEAR_LINEAR_MIPNEAREST = 11, VV.TRILINEAR_SAMPLINGMODE = 3, VV.LINEAR_LINEAR_MIPLINEAR = 3, VV.NEAREST_NEAREST_MIPNEAREST = 4, VV.NEAREST_LINEAR_MIPNEAREST = 5, VV.NEAREST_LINEAR_MIPLINEAR = 6, VV.NEAREST_LINEAR = 7, VV.NEAREST_NEAREST = 1, VV.LINEAR_NEAREST_MIPNEAREST = 9, VV.LINEAR_NEAREST_MIPLINEAR = 10, VV.LINEAR_LINEAR = 2, VV.LINEAR_NEAREST = 12, VV.EXPLICIT_MODE = 0, VV.SPHERICAL_MODE = 1, VV.PLANAR_MODE = 2, VV.CUBIC_MODE = 3, VV.PROJECTION_MODE = 4, VV.SKYBOX_MODE = 5, VV.INVCUBIC_MODE = 6, VV.EQUIRECTANGULAR_MODE = 7, VV.FIXED_EQUIRECTANGULAR_MODE = 8, VV.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, VV.CLAMP_ADDRESSMODE = 0, VV.WRAP_ADDRESSMODE = 1, VV.MIRROR_ADDRESSMODE = 2, VV.UseSerializedUrlIfAny = !1, VV
      })(),
      tV = !1;

    function FV() {
      tV || (tV = !0, (0, QV.d)("BABYLON.Texture", qV), jV.b._TextureParser = qV.Parse)
    }
  },
  41272: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV
    });
    class JV {
      constructor(VV, eV) {
        this.width = VV, this.height = eV
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let VV = 0 | this.width;
        return VV = 397 * VV ^ this.height, VV
      }
      iG(VV) {
        this.width = VV.width, this.height = VV.height
      }
      FeV(VV, eV) {
        return this.width = VV, this.height = eV, this
      }
      set(VV, eV) {
        return this.FeV(VV, eV)
      }
      multiplyByFloats(VV, eV) {
        return new JV(this.width * VV, this.height * eV)
      }
      clone() {
        return new JV(this.width, this.height)
      }
      equals(VV) {
        return !!VV && (this.width === VV.width && this.height === VV.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new JV(0, 0)
      }
      add(VV) {
        return new JV(this.width + VV.width, this.height + VV.height)
      }
      subtract(VV) {
        return new JV(this.width - VV.width, this.height - VV.height)
      }
      scale(VV) {
        return new JV(this.width * VV, this.height * VV)
      }
      static Lerp(VV, eV, xV) {
        const YV = VV.width + (eV.width - VV.width) * xV,
          UV = VV.height + (eV.height - VV.height) * xV;
        return new JV(YV, UV)
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);