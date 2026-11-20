export const id = 248;
export const ids = [248];
export const modules = {
  40190: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq
    });
    let Yq = !1
  },
  39748: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => aq
    });
    var Yq = gq(39757),
      lq = gq(39759),
      Oq = gq(37156),
      mq = gq(37139),
      xq = gq(37153),
      Aq = gq(37872),
      cq = gq(39774);
    class uq {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(qq) {
        this._wrapU = qq
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(qq) {
        this._wrapV = qq
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(qq) {
        this._texture && (this._texture.isCube = qq)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(qq) {
        this._texture && (this._texture.is3D = qq)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(qq) {
        this._texture && (this._texture.is2DArray = qq)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(qq) {
        return void 0 !== qq?.shareDepth
      }
      constructor(qq) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = cq.b.Zero(), this._cachedBaseSize = cq.b.Zero(), this._initialSamplingMode = 2, this._texture = uq._IsRenderTargetWrapper(qq) ? qq.texture : qq, this._texture && (this._engine = this._texture.Ba(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(qq, this._texture, this._texture.generateMipMaps && Eq)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var Bq, Wq = gq(39779),
      Nq = gq(39636);
    let aq = (() => {
      var qq;
      let Eq, gq, cq, Bq, Nq, aq, Vq, dq, jq, Hq, oq, Pq, Qq, yq, tq, rq, vq, hq, nq, bq, iq, Zq, fq, Mq, Tq, zq = uq,
        Sq = [],
        pq = [],
        Gq = [],
        Lq = [],
        Jq = [],
        kq = [],
        Rq = [],
        Uq = [],
        Fq = [],
        sq = [],
        Xq = [],
        wq = [],
        Kq = [],
        Cq = [],
        Iq = [],
        eq = [],
        Dq = [],
        qE = [],
        EE = [],
        gE = [],
        YE = [],
        lE = [],
        OE = [],
        mE = [],
        xE = [],
        AE = [],
        cE = [],
        uE = [],
        BE = [],
        WE = [],
        NE = [];
      return qq = class extends zq {
        set hasAlpha(qq) {
          this._hasAlpha = qq
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(qq) {
          this._getAlphaFromRGB !== qq && (this._getAlphaFromRGB = qq, this._scene && this._scene.markAllMaterialsAsDirty(1, (qq => qq.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(qq) {
          this._coordinatesIndex !== qq && (this._coordinatesIndex = qq, this._scene && this._scene.markAllMaterialsAsDirty(1, (qq => qq.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(qq) {
          this._coordinatesMode !== qq && (this._coordinatesMode = qq, this._scene && this._scene.markAllMaterialsAsDirty(1, (qq => qq.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(qq) {
          this._wrapU = qq
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(qq) {
          this._wrapV = qq
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(qq) {
          this._texture ? this._texture.isCube = qq : this._isCube = qq
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(qq) {
          this._texture && (this._texture.is3D = qq)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(qq) {
          this._texture && (this._texture.is2DArray = qq)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(qq) {
          if (this._texture) {
            if (this._texture._gammaSpace === qq) return;
            this._texture._gammaSpace = qq
          } else {
            if (this._gammaSpace === qq) return;
            this._gammaSpace = qq
          }
          this.ZJ()?.markAllMaterialsAsDirty(1, (qq => qq.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(qq) {
          qq !== this.isRGBD && (this._texture && (this._texture._isRGBD = qq), this.ZJ()?.markAllMaterialsAsDirty(1, (qq => qq.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(qq) {
          this._texture && (this._texture._lodGenerationOffset = qq)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(qq) {
          this._texture && (this._texture._lodGenerationScale = qq)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(qq) {
          this._texture && (this._texture._linearSpecularLOD = qq)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(qq) {
          this._texture && (this._texture._irradianceTexture = qq)
        }
        get uid() {
          return this._uid || (this._uid = (0, Aq.d)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(qq) {
          this._onDisposeObserver && this.MJ.remove(this._onDisposeObserver), this._onDisposeObserver = this.MJ.add(qq)
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
        constructor(Eq) {
          let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, Yq.i)(this, Sq), (0, Yq.i)(this, pq, void 0)), this.name = ((0, Yq.i)(this, Gq), (0, Yq.i)(this, Lq, void 0)), this.displayName = ((0, Yq.i)(this, Jq), (0, Yq.i)(this, kq, void 0)), this.metadata = ((0, Yq.i)(this, Rq), (0, Yq.i)(this, Uq, null)), this._internalMetadata = (0, Yq.i)(this, Fq), this.reservedDataStore = null, this._hasAlpha = (0, Yq.i)(this, sq, !1), this._getAlphaFromRGB = ((0, Yq.i)(this, Xq), (0, Yq.i)(this, wq, !1)), this.level = ((0, Yq.i)(this, Kq), (0, Yq.i)(this, Cq, 1)), this._coordinatesIndex = ((0, Yq.i)(this, Iq), (0, Yq.i)(this, eq, 0)), this.optimizeUVAllocation = ((0, Yq.i)(this, Dq), (0, Yq.i)(this, qE, !0)), this._coordinatesMode = ((0, Yq.i)(this, EE), (0, Yq.i)(this, gE, 0)), this.wrapR = ((0, Yq.i)(this, YE), (0, Yq.i)(this, lE, 1)), this.anisotropicFilteringLevel = ((0, Yq.i)(this, OE), (0, Yq.i)(this, mE, qq.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, Yq.i)(this, xE), !1), this._gammaSpace = !0, this.invertZ = (0, Yq.i)(this, AE, !1), this.lodLevelInAlpha = ((0, Yq.i)(this, cE), (0, Yq.i)(this, uE, !1)), this._dominantDirection = ((0, Yq.i)(this, BE), null), this.isRenderTarget = (0, Yq.i)(this, WE, !1), this._prefiltered = ((0, Yq.i)(this, NE), !1), this._forceSerialize = !1, this.animations = [], this.MJ = new Oq.d, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, Eq ? qq._IsScene(Eq) ? this._scene = Eq : this._engine = Eq : this._scene = xq.b.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.Ba()), this._texture = gq, this._uid = null
        }
        ZJ() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return mq.e.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return mq.e.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(qq) {}
        get canRescale() {
          return !1
        }
        _getFromCache(qq, Eq, gq, Yq, lq, Oq) {
          const mq = this._getEngine();
          if (!mq) return null;
          const xq = mq._getUseSRGBBuffer(!!lq, Eq),
            Aq = mq.getLoadedTexturesCache();
          for (let cq = 0; cq < Aq.length; cq++) {
            const mq = Aq[cq];
            if ((void 0 === lq || xq === mq._useSRGBBuffer) && (void 0 === Yq || Yq === mq.invertY) && mq.url === qq && mq.generateMipMaps === !Eq && (!gq || gq === mq.samplingMode) && (void 0 === Oq || Oq === mq.isCube)) return mq.incrementReferences(), mq
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
          const qq = this.ZJ();
          qq && qq.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Yq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            mq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            xq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            Aq = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const cq = this._getEngine();
          if (!cq) return null;
          const uq = this.getSize();
          let Bq = uq.width,
            Wq = uq.height;
          0 !== Eq && (Bq /= Math.pow(2, Eq), Wq /= Math.pow(2, Eq), Bq = Math.round(Bq), Wq = Math.round(Wq)), xq = Math.min(Bq, xq), Aq = Math.min(Wq, Aq);
          try {
            return this._texture.isCube || this._texture.is2DArray ? cq._readTexturePixels(this._texture, xq, Aq, qq, Eq, gq, Yq, lq, Oq, mq) : cq._readTexturePixels(this._texture, xq, Aq, -1, Eq, gq, Yq, lq, Oq, mq)
          } catch (Nq) {
            return null
          }
        }
        _readPixelsSync() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Yq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const Oq = this.getSize();
          let mq = Oq.width,
            xq = Oq.height;
          const Aq = this._getEngine();
          if (!Aq) return null;
          0 != Eq && (mq /= Math.pow(2, Eq), xq /= Math.pow(2, Eq), mq = Math.round(mq), xq = Math.round(xq));
          try {
            return this._texture.isCube ? Aq._readTexturePixelsSync(this._texture, mq, xq, qq, Eq, gq, Yq, lq) : Aq._readTexturePixelsSync(this._texture, mq, xq, -1, Eq, gq, Yq, lq)
          } catch (cq) {
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
            const qq = this._scene.textures.indexOf(this);
            if (qq >= 0 && this._scene.textures.splice(qq, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const qq = this._parentContainer.textures.indexOf(this);
              qq > -1 && this._parentContainer.textures.splice(qq, 1), this._parentContainer = null
            }
          }
          this.MJ.notifyObservers(this), this.MJ.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !qq) return null;
          const Eq = Wq.d.Serialize(this);
          return Wq.d.AppendSerializedAnimations(this, Eq), Eq
        }
        static WhenAllReady(qq, Eq) {
          let gq = qq.length;
          if (0 !== gq)
            for (let Yq = 0; Yq < qq.length; Yq++) {
              const lq = qq[Yq];
              if (lq.isReady()) 0 === --gq && Eq();
              else {
                const qq = lq.onLoadObservable;
                qq ? qq.addOnce((() => {
                  0 === --gq && Eq()
                })) : 0 === --gq && Eq()
              }
            } else Eq()
        }
        static _IsScene(qq) {
          return "Scene" === qq.getClassName()
        }
      }, (() => {
        const Oq = "function" === typeof Symbol && Symbol.metadata ? Object.create(zq[Symbol.metadata] ?? null) : void 0;
        Eq = [(0, lq.M)()], gq = [(0, lq.M)()], cq = [(0, lq.M)()], Bq = [(0, lq.M)()], Nq = [(0, lq.M)("hasAlpha")], aq = [(0, lq.M)("getAlphaFromRGB")], Vq = [(0, lq.M)()], dq = [(0, lq.M)("coordinatesIndex")], jq = [(0, lq.M)()], Hq = [(0, lq.M)("coordinatesMode")], oq = [(0, lq.M)()], Pq = [(0, lq.M)()], Qq = [(0, lq.M)()], yq = [(0, lq.M)()], tq = [(0, lq.M)()], rq = [(0, lq.M)()], vq = [(0, lq.M)()], hq = [(0, lq.M)()], nq = [(0, lq.M)()], bq = [(0, lq.M)()], iq = [(0, lq.M)()], Zq = [(0, lq.M)()], fq = [(0, lq.M)()], Mq = [(0, lq.E)()], Tq = [(0, lq.M)()], (0, Yq.f)(qq, null, oq, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: qq => "wrapU" in qq,
            get: qq => qq.wrapU
          },
          metadata: Oq
        }, null, Sq), (0, Yq.f)(qq, null, Pq, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: qq => "wrapV" in qq,
            get: qq => qq.wrapV
          },
          metadata: Oq
        }, null, Sq), (0, Yq.f)(qq, null, tq, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: qq => "isCube" in qq,
            get: qq => qq.isCube
          },
          metadata: Oq
        }, null, Sq), (0, Yq.f)(qq, null, rq, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: qq => "is3D" in qq,
            get: qq => qq.is3D
          },
          metadata: Oq
        }, null, Sq), (0, Yq.f)(qq, null, vq, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: qq => "is2DArray" in qq,
            get: qq => qq.is2DArray
          },
          metadata: Oq
        }, null, Sq), (0, Yq.f)(qq, null, hq, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: qq => "gammaSpace" in qq,
            get: qq => qq.gammaSpace
          },
          metadata: Oq
        }, null, Sq), (0, Yq.f)(qq, null, iq, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: qq => "lodGenerationOffset" in qq,
            get: qq => qq.lodGenerationOffset
          },
          metadata: Oq
        }, null, Sq), (0, Yq.f)(qq, null, Zq, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: qq => "lodGenerationScale" in qq,
            get: qq => qq.lodGenerationScale
          },
          metadata: Oq
        }, null, Sq), (0, Yq.f)(qq, null, fq, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: qq => "linearSpecularLOD" in qq,
            get: qq => qq.linearSpecularLOD
          },
          metadata: Oq
        }, null, Sq), (0, Yq.f)(qq, null, Mq, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "irradianceTexture" in qq,
            get: qq => qq.irradianceTexture
          },
          metadata: Oq
        }, null, Sq), (0, Yq.f)(null, null, Eq, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: qq => "uniqueId" in qq,
            get: qq => qq.uniqueId,
            set: (qq, Eq) => {
              qq.uniqueId = Eq
            }
          },
          metadata: Oq
        }, pq, Gq), (0, Yq.f)(null, null, gq, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: qq => "name" in qq,
            get: qq => qq.name,
            set: (qq, Eq) => {
              qq.name = Eq
            }
          },
          metadata: Oq
        }, Lq, Jq), (0, Yq.f)(null, null, cq, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: qq => "displayName" in qq,
            get: qq => qq.displayName,
            set: (qq, Eq) => {
              qq.displayName = Eq
            }
          },
          metadata: Oq
        }, kq, Rq), (0, Yq.f)(null, null, Bq, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: qq => "metadata" in qq,
            get: qq => qq.metadata,
            set: (qq, Eq) => {
              qq.metadata = Eq
            }
          },
          metadata: Oq
        }, Uq, Fq), (0, Yq.f)(null, null, Nq, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: qq => "_hasAlpha" in qq,
            get: qq => qq._hasAlpha,
            set: (qq, Eq) => {
              qq._hasAlpha = Eq
            }
          },
          metadata: Oq
        }, sq, Xq), (0, Yq.f)(null, null, aq, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: qq => "_getAlphaFromRGB" in qq,
            get: qq => qq._getAlphaFromRGB,
            set: (qq, Eq) => {
              qq._getAlphaFromRGB = Eq
            }
          },
          metadata: Oq
        }, wq, Kq), (0, Yq.f)(null, null, Vq, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: qq => "level" in qq,
            get: qq => qq.level,
            set: (qq, Eq) => {
              qq.level = Eq
            }
          },
          metadata: Oq
        }, Cq, Iq), (0, Yq.f)(null, null, dq, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: qq => "_coordinatesIndex" in qq,
            get: qq => qq._coordinatesIndex,
            set: (qq, Eq) => {
              qq._coordinatesIndex = Eq
            }
          },
          metadata: Oq
        }, eq, Dq), (0, Yq.f)(null, null, jq, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: qq => "optimizeUVAllocation" in qq,
            get: qq => qq.optimizeUVAllocation,
            set: (qq, Eq) => {
              qq.optimizeUVAllocation = Eq
            }
          },
          metadata: Oq
        }, qE, EE), (0, Yq.f)(null, null, Hq, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: qq => "_coordinatesMode" in qq,
            get: qq => qq._coordinatesMode,
            set: (qq, Eq) => {
              qq._coordinatesMode = Eq
            }
          },
          metadata: Oq
        }, gE, YE), (0, Yq.f)(null, null, Qq, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: qq => "wrapR" in qq,
            get: qq => qq.wrapR,
            set: (qq, Eq) => {
              qq.wrapR = Eq
            }
          },
          metadata: Oq
        }, lE, OE), (0, Yq.f)(null, null, yq, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: qq => "anisotropicFilteringLevel" in qq,
            get: qq => qq.anisotropicFilteringLevel,
            set: (qq, Eq) => {
              qq.anisotropicFilteringLevel = Eq
            }
          },
          metadata: Oq
        }, mE, xE), (0, Yq.f)(null, null, nq, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: qq => "invertZ" in qq,
            get: qq => qq.invertZ,
            set: (qq, Eq) => {
              qq.invertZ = Eq
            }
          },
          metadata: Oq
        }, AE, cE), (0, Yq.f)(null, null, bq, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: qq => "lodLevelInAlpha" in qq,
            get: qq => qq.lodLevelInAlpha,
            set: (qq, Eq) => {
              qq.lodLevelInAlpha = Eq
            }
          },
          metadata: Oq
        }, uE, BE), (0, Yq.f)(null, null, Tq, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: qq => "isRenderTarget" in qq,
            get: qq => qq.isRenderTarget,
            set: (qq, Eq) => {
              qq.isRenderTarget = Eq
            }
          },
          metadata: Oq
        }, WE, NE), Oq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Oq
        })
      })(), qq.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, qq
    })();
    (Bq = aq.prototype).forceSphericalPolynomialsRecompute ?? (Bq.forceSphericalPolynomialsRecompute = (0, Nq.i)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(aq.prototype, "sphericalPolynomial") || Object.defineProperty(aq.prototype, "sphericalPolynomial", (0, Nq.e)("BaseTexture", "sphericalPolynomial"))
  },
  40233: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Qq,
      d: () => oq
    });
    var Yq = gq(39757),
      lq = gq(39759),
      Oq = gq(37156),
      mq = gq(37139),
      xq = gq(39748),
      Aq = gq(37171),
      cq = gq(39636),
      uq = gq(39644),
      Bq = gq(39853),
      Wq = gq(37767),
      Nq = gq(39810);

    function aq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Yq = Eq.width,
        lq = Eq.height;
      if (qq instanceof Float32Array) {
        let Eq = qq.byteLength / qq.BYTES_PER_ELEMENT;
        const gq = new Uint8Array(Eq);
        for (; --Eq >= 0;) {
          let Yq = qq[Eq];
          Yq < 0 ? Yq = 0 : Yq > 1 && (Yq = 1), gq[Eq] = 255 * Yq
        }
        qq = gq
      }
      const Oq = document.createElement("canvas");
      Oq.width = Yq, Oq.height = lq;
      const mq = Oq.getContext("2d");
      if (!mq) return null;
      const xq = mq.createImageData(Yq, lq);
      if (xq.data.set(qq), mq.putImageData(xq, 0, 0), gq) {
        const qq = document.createElement("canvas");
        qq.width = Yq, qq.height = lq;
        const Eq = qq.getContext("2d");
        return Eq ? (Eq.translate(0, lq), Eq.scale(1, -1), Eq.drawImage(Oq, 0, 0), qq.toDataURL("image/png")) : null
      }
      return Oq.toDataURL("image/png")
    }

    function Vq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Yq = qq.getInternalTexture();
      if (!Yq) return null;
      const lq = qq._readPixelsSync(Eq, gq);
      return lq ? aq(lq, qq.getSize(), Yq.invertY) : null
    }
    async function dq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Yq = qq.getInternalTexture();
      if (!Yq) return null;
      const lq = await qq.readPixels(Eq, gq);
      return lq ? aq(lq, qq.getSize(), Yq.invertY) : null
    }
    var jq = gq(40190),
      Hq = gq(39779);
    let oq = (() => {
        var qq;
        let Eq, gq, aq, oq, Pq, Qq, yq, tq, rq, vq, hq, nq, bq, iq = xq.d,
          Zq = [],
          fq = [],
          Mq = [],
          Tq = [],
          zq = [],
          Sq = [],
          pq = [],
          Gq = [],
          Lq = [],
          Jq = [],
          kq = [],
          Rq = [],
          Uq = [],
          Fq = [],
          sq = [],
          Xq = [],
          wq = [],
          Kq = [],
          Cq = [],
          Iq = [],
          eq = [],
          Dq = [],
          qE = [],
          EE = [],
          gE = [];
        return qq = class extends iq {
          static _CreateVideoTexture(Eq, gq, Yq) {
            arguments.length > 5 && void 0 !== arguments[5] || qq.TRILINEAR_SAMPLINGMODE;
            throw (0, cq.m)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(qq) {
            this._isBlocking = qq
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(Eq, gq, lq, mq) {
            let xq, Aq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : qq.TRILINEAR_SAMPLINGMODE,
              cq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Bq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              Wq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Nq = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              aq = arguments.length > 9 ? arguments[9] : void 0,
              Vq = arguments.length > 10 ? arguments[10] : void 0,
              dq = arguments.length > 11 ? arguments[11] : void 0,
              Hq = arguments.length > 12 ? arguments[12] : void 0,
              oq = arguments.length > 13 ? arguments[13] : void 0;
            super(gq), this.url = ((0, Yq.i)(this, Zq), (0, Yq.i)(this, fq, null)), this.uOffset = ((0, Yq.i)(this, Mq), (0, Yq.i)(this, Tq, 0)), this.vOffset = ((0, Yq.i)(this, zq), (0, Yq.i)(this, Sq, 0)), this.uScale = ((0, Yq.i)(this, pq), (0, Yq.i)(this, Gq, 1)), this.vScale = ((0, Yq.i)(this, Lq), (0, Yq.i)(this, Jq, 1)), this.uAng = ((0, Yq.i)(this, kq), (0, Yq.i)(this, Rq, 0)), this.vAng = ((0, Yq.i)(this, Uq), (0, Yq.i)(this, Fq, 0)), this.wAng = ((0, Yq.i)(this, sq), (0, Yq.i)(this, Xq, 0)), this.uRotationCenter = ((0, Yq.i)(this, wq), (0, Yq.i)(this, Kq, .5)), this.vRotationCenter = ((0, Yq.i)(this, Cq), (0, Yq.i)(this, Iq, .5)), this.wRotationCenter = ((0, Yq.i)(this, eq), (0, Yq.i)(this, Dq, .5)), this.homogeneousRotationInUVTransform = ((0, Yq.i)(this, qE), (0, Yq.i)(this, EE, !1)), this.inspectableCustomProperties = ((0, Yq.i)(this, gE), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new Oq.d, this._isBlocking = !0, this.name = Eq || "", this.url = Eq;
            let Pq = !1,
              Qq = null,
              yq = !0;
            "object" === typeof lq && null !== lq ? (xq = lq.noMipmap ?? !1, mq = lq.invertY ?? !jq.b, Aq = lq.samplingMode ?? qq.TRILINEAR_SAMPLINGMODE, cq = lq.onLoad ?? null, Bq = lq.onError ?? null, Wq = lq.buffer ?? null, Nq = lq.deleteBuffer ?? !1, aq = lq.format, Vq = lq.mimeType, dq = lq.loaderOptions, Hq = lq.creationFlags, Pq = lq.useSRGBBuffer ?? !1, Qq = lq.internalTexture ?? null, yq = lq.gammaSpace ?? yq, oq = lq.forcedExtension ?? oq) : xq = !!lq, this._gammaSpace = yq, this._noMipmap = xq, this._invertY = void 0 === mq ? !jq.b : mq, this._initialSamplingMode = Aq, this._buffer = Wq, this._deleteBuffer = Nq, this._mimeType = Vq, this._loaderOptions = dq, this._creationFlags = Hq, this._useSRGBBuffer = Pq, this._forcedExtension = oq, void 0 !== aq && (this._format = aq);
            const tq = this.ZJ(),
              rq = this._getEngine();
            if (!rq) return;
            rq.onBeforeTextureInitObservable.notifyObservers(this);
            const vq = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), cq && cq(), !this.isBlocking && tq && tq.resetCachedMaterial()
              },
              hq = (Eq, gq) => {
                this._loadingError = !0, this._errorObject = {
                  message: Eq,
                  exception: gq
                }, Bq && Bq(Eq, gq), qq.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !Qq) return this._delayedOnLoad = vq, void(this._delayedOnError = hq);
            if (this._texture = Qq ?? this._getFromCache(this.url, xq, Aq, this._invertY, Pq, this.isCube), this._texture)
              if (this._texture.isReady) uq.c.SetImmediate((() => vq()));
              else {
                const qq = this._texture.onLoadedObservable.add(vq);
                this._texture.onErrorObservable.add((Eq => {
                  hq(Eq.message, Eq.exception), this._texture?.onLoadedObservable.remove(qq)
                }))
              }
            else if (tq && tq.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = vq, this._delayedOnError = hq;
            else {
              try {
                this._texture = rq.createTexture(this.url, xq, this._invertY, tq, Aq, vq, hq, this._buffer, void 0, this._format, this._forcedExtension, Vq, dq, Hq, Pq)
              } catch (nq) {
                throw hq("error loading", nq), nq
              }
              Nq && (this._buffer = null)
            }
          }
          updateURL(qq) {
            let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              gq = arguments.length > 2 ? arguments[2] : void 0,
              Yq = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.ZJ().markAllMaterialsAsDirty(1, (qq => qq.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = qq), this.url = qq, this._buffer = Eq, this._forcedExtension = Yq, this.delayLoadState = 4;
            const lq = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              lq ? lq() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), gq && gq()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const qq = this.ZJ();
            if (!qq) return;
            let Eq = this.url;
            !Eq && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (Eq = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(Eq, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? uq.c.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = qq.Ba().createTexture(Eq, this._noMipmap, this._invertY, qq, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(qq, Eq, gq, Yq) {
            qq *= this._cachedUScale, Eq *= this._cachedVScale, qq -= this.uRotationCenter * this._cachedUScale, Eq -= this.vRotationCenter * this._cachedVScale, gq -= this.wRotationCenter, mq.q.TransformCoordinatesFromFloatsToRef(qq, Eq, gq, this._rowGenerationMatrix, Yq), Yq.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, Yq.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, Yq.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * qq === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * qq, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = mq.e.Zero(), this._rowGenerationMatrix = new mq.e, this._t0 = mq.q.Zero(), this._t1 = mq.q.Zero(), this._t2 = mq.q.Zero()), mq.e.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (mq.e.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, mq.o.Matrix[0]), mq.e.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, mq.o.Matrix[1]), mq.e.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, mq.o.Matrix[2]), mq.e.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, mq.o.Matrix[3]), mq.o.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(mq.o.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(mq.o.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(mq.o.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.KYq(this._t0), this._t2.KYq(this._t0), mq.e.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const Eq = this.ZJ();
            if (!Eq) return this._cachedTextureMatrix;
            const gq = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && gq !== this._cachedIdentity3x2 && Eq.markAllMaterialsAsDirty(1, (qq => qq.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const Eq = this.ZJ();
            if (!Eq) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== qq.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === Eq.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = mq.e.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = mq.e.Zero());
            const gq = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case qq.PLANAR_MODE:
                mq.e.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case qq.PROJECTION_MODE: {
                mq.e.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const qq = Eq.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = qq.updateFlag, qq.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                mq.e.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return gq && Eq.markAllMaterialsAsDirty(1, (qq => qq.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const Eq = {
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
            return Hq.d.Clone((() => new qq(this._texture ? this._texture.url : null, this.ZJ(), Eq)), this)
          }
          serialize() {
            const Eq = this.name;
            qq.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const gq = super.serialize(qq._SerializeInternalTextureUniqueId);
            if (!gq) return null;
            if (qq.SerializeBuffers || qq.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) gq.base64String = this._buffer, gq.name = gq.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const qq = this.mimeType || "image/png";
              gq.base64String = `data:${qq};base64,${(0,Nq.f)(this._buffer)}`
            } else(qq.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (gq.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? Vq(this) : dq(this));
            return gq.invertY = this._invertY, gq.samplingMode = this.samplingMode, gq._creationFlags = this._creationFlags, gq._useSRGBBuffer = this._useSRGBBuffer, qq._SerializeInternalTextureUniqueId && (gq.internalTextureUniqueId = this._texture?.uniqueId), gq.internalTextureLabel = this._texture?.label, gq.noMipmap = this._noMipmap, this.name = Eq, gq
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(Eq, gq, Yq) {
            if (Eq.customType) {
              const qq = Bq.d.Instantiate(Eq.customType).Parse(Eq, gq, Yq);
              return Eq.samplingMode && qq.updateSamplingMode && qq._samplingMode && qq._samplingMode !== Eq.samplingMode && qq.updateSamplingMode(Eq.samplingMode), qq
            }
            if (Eq.isCube && !Eq.isRenderTarget) return qq._CubeTextureParser(Eq, gq, Yq);
            const lq = void 0 !== Eq.internalTextureUniqueId;
            if (!Eq.name && !Eq.isRenderTarget && !lq) return null;
            let Oq;
            if (lq) {
              const qq = gq.Ba().getLoadedTexturesCache();
              for (const gq of qq)
                if (gq.uniqueId === Eq.internalTextureUniqueId) {
                  Oq = gq;
                  break
                }
            }
            const mq = qq => {
              if (qq && qq._texture && (qq._texture._cachedWrapU = null, qq._texture._cachedWrapV = null, qq._texture._cachedWrapR = null), Eq.samplingMode) {
                const gq = Eq.samplingMode;
                qq && qq.samplingMode !== gq && qq.updateSamplingMode(gq)
              }
              if (qq && Eq.animations)
                for (let gq = 0; gq < Eq.animations.length; gq++) {
                  const Yq = Eq.animations[gq],
                    lq = (0, Aq.e)("BABYLON.Animation");
                  lq && qq.animations.push(lq.Parse(Yq))
                }
              qq && qq._texture && (lq && !Oq && qq._texture._setUniqueId(Eq.internalTextureUniqueId), qq._texture.label = Eq.internalTextureLabel)
            };
            return Hq.d.Parse((() => {
              let lq = !0;
              if (Eq.noMipmap && (lq = !1), Eq.mirrorPlane) {
                const Yq = qq._CreateMirror(Eq.name, Eq.renderTargetSize, gq, lq);
                return Yq._waitingRenderList = Eq.renderList, Yq.mirrorPlane = Wq.d.FromArray(Eq.mirrorPlane), mq(Yq), Yq
              }
              if (Eq.isRenderTarget && !Eq.base64String) {
                let Yq = null;
                if (Eq.isCube) {
                  if (gq.reflectionProbes)
                    for (let qq = 0; qq < gq.reflectionProbes.length; qq++) {
                      const Yq = gq.reflectionProbes[qq];
                      if (Yq.name === Eq.name) return Yq.cubeTexture
                    }
                } else Yq = qq._CreateRenderTargetTexture(Eq.name, Eq.renderTargetSize, gq, lq, Eq._creationFlags ?? 0), Yq._waitingRenderList = Eq.renderList;
                return mq(Yq), Yq
              }
              if (Eq.isVideo) {
                const Oq = qq._CreateVideoTexture(Yq + (Eq.url || Eq.name), Yq + (Eq.src || Eq.url), gq, lq, Eq.invertY, Eq.samplingMode, Eq.settings || {});
                return mq(Oq), Oq
              } {
                let xq;
                if ("string" === typeof Eq.base64String && Eq.base64String && !Oq) {
                  const Yq = {
                      buffer: Eq.base64String,
                      noMipmap: !lq,
                      invertY: Eq.invertY,
                      samplingMode: Eq.samplingMode,
                      useSRGBBuffer: Eq._useSRGBBuffer ?? !1,
                      creationFlags: Eq._creationFlags ?? 0,
                      onLoad: () => {
                        mq(xq)
                      }
                    },
                    Oq = Eq.base64String,
                    Aq = Oq.startsWith("data:") ? Oq.substring(5) : Oq;
                  xq = qq.CreateFromBase64String("", Aq, gq, Yq), xq.name = Eq.name
                } else {
                  let Aq;
                  Aq = Eq.name && (Eq.name.indexOf("://") > 0 || Eq.name.startsWith("data:")) ? Eq.name : Yq + Eq.name, Eq.url && (Eq.url.startsWith("data:") || qq.UseSerializedUrlIfAny) && (Aq = Eq.url);
                  const cq = {
                    noMipmap: !lq,
                    invertY: Eq.invertY,
                    samplingMode: Eq.samplingMode,
                    useSRGBBuffer: Eq._useSRGBBuffer ?? !1,
                    creationFlags: Eq._creationFlags ?? 0,
                    onLoad: () => {
                      mq(xq)
                    },
                    internalTexture: Oq
                  };
                  xq = new qq(Aq, gq, cq)
                }
                return xq
              }
            }), Eq, gq)
          }
          static CreateFromBase64String(Eq, gq, Yq, lq, Oq) {
            let mq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : qq.TRILINEAR_SAMPLINGMODE;
            return new qq("data:" + gq, Yq, lq, Oq, mq, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, Eq, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(Eq, gq, Yq) {
            let lq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Oq = arguments.length > 4 ? arguments[4] : void 0,
              mq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              xq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : qq.TRILINEAR_SAMPLINGMODE,
              Aq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              cq = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              uq = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              Bq = arguments.length > 10 ? arguments[10] : void 0,
              Wq = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== Eq.substring(0, 5) && (Eq = "data:" + Eq), new qq(Eq, Yq, Oq, mq, xq, Aq, cq, gq, lq, uq, void 0, void 0, Bq, Wq)
          }
        }, (() => {
          const Oq = "function" === typeof Symbol && Symbol.metadata ? Object.create(iq[Symbol.metadata] ?? null) : void 0;
          Eq = [(0, lq.M)()], gq = [(0, lq.M)()], aq = [(0, lq.M)()], oq = [(0, lq.M)()], Pq = [(0, lq.M)()], Qq = [(0, lq.M)()], yq = [(0, lq.M)()], tq = [(0, lq.M)()], rq = [(0, lq.M)()], vq = [(0, lq.M)()], hq = [(0, lq.M)()], nq = [(0, lq.M)()], bq = [(0, lq.M)()], (0, Yq.f)(qq, null, bq, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: qq => "isBlocking" in qq,
              get: qq => qq.isBlocking
            },
            metadata: Oq
          }, null, Zq), (0, Yq.f)(null, null, Eq, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: qq => "url" in qq,
              get: qq => qq.url,
              set: (qq, Eq) => {
                qq.url = Eq
              }
            },
            metadata: Oq
          }, fq, Mq), (0, Yq.f)(null, null, gq, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: qq => "uOffset" in qq,
              get: qq => qq.uOffset,
              set: (qq, Eq) => {
                qq.uOffset = Eq
              }
            },
            metadata: Oq
          }, Tq, zq), (0, Yq.f)(null, null, aq, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: qq => "vOffset" in qq,
              get: qq => qq.vOffset,
              set: (qq, Eq) => {
                qq.vOffset = Eq
              }
            },
            metadata: Oq
          }, Sq, pq), (0, Yq.f)(null, null, oq, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: qq => "uScale" in qq,
              get: qq => qq.uScale,
              set: (qq, Eq) => {
                qq.uScale = Eq
              }
            },
            metadata: Oq
          }, Gq, Lq), (0, Yq.f)(null, null, Pq, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: qq => "vScale" in qq,
              get: qq => qq.vScale,
              set: (qq, Eq) => {
                qq.vScale = Eq
              }
            },
            metadata: Oq
          }, Jq, kq), (0, Yq.f)(null, null, Qq, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: qq => "uAng" in qq,
              get: qq => qq.uAng,
              set: (qq, Eq) => {
                qq.uAng = Eq
              }
            },
            metadata: Oq
          }, Rq, Uq), (0, Yq.f)(null, null, yq, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: qq => "vAng" in qq,
              get: qq => qq.vAng,
              set: (qq, Eq) => {
                qq.vAng = Eq
              }
            },
            metadata: Oq
          }, Fq, sq), (0, Yq.f)(null, null, tq, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: qq => "wAng" in qq,
              get: qq => qq.wAng,
              set: (qq, Eq) => {
                qq.wAng = Eq
              }
            },
            metadata: Oq
          }, Xq, wq), (0, Yq.f)(null, null, rq, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: qq => "uRotationCenter" in qq,
              get: qq => qq.uRotationCenter,
              set: (qq, Eq) => {
                qq.uRotationCenter = Eq
              }
            },
            metadata: Oq
          }, Kq, Cq), (0, Yq.f)(null, null, vq, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: qq => "vRotationCenter" in qq,
              get: qq => qq.vRotationCenter,
              set: (qq, Eq) => {
                qq.vRotationCenter = Eq
              }
            },
            metadata: Oq
          }, Iq, eq), (0, Yq.f)(null, null, hq, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: qq => "wRotationCenter" in qq,
              get: qq => qq.wRotationCenter,
              set: (qq, Eq) => {
                qq.wRotationCenter = Eq
              }
            },
            metadata: Oq
          }, Dq, qE), (0, Yq.f)(null, null, nq, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: qq => "homogeneousRotationInUVTransform" in qq,
              get: qq => qq.homogeneousRotationInUVTransform,
              set: (qq, Eq) => {
                qq.homogeneousRotationInUVTransform = Eq
              }
            },
            metadata: Oq
          }, EE, gE), Oq && Object.defineProperty(qq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Oq
          })
        })(), qq.SerializeBuffers = !0, qq.ForceSerializeBuffers = !1, qq.OnTextureLoadErrorObservable = new Oq.d, qq._SerializeInternalTextureUniqueId = !1, qq._CubeTextureParser = (qq, Eq, gq) => {
          throw (0, cq.m)("CubeTexture")
        }, qq._CreateMirror = (qq, Eq, gq, Yq) => {
          throw (0, cq.m)("MirrorTexture")
        }, qq._CreateRenderTargetTexture = (qq, Eq, gq, Yq, lq) => {
          throw (0, cq.m)("RenderTargetTexture")
        }, qq.NEAREST_SAMPLINGMODE = 1, qq.NEAREST_NEAREST_MIPLINEAR = 8, qq.BILINEAR_SAMPLINGMODE = 2, qq.LINEAR_LINEAR_MIPNEAREST = 11, qq.TRILINEAR_SAMPLINGMODE = 3, qq.LINEAR_LINEAR_MIPLINEAR = 3, qq.NEAREST_NEAREST_MIPNEAREST = 4, qq.NEAREST_LINEAR_MIPNEAREST = 5, qq.NEAREST_LINEAR_MIPLINEAR = 6, qq.NEAREST_LINEAR = 7, qq.NEAREST_NEAREST = 1, qq.LINEAR_NEAREST_MIPNEAREST = 9, qq.LINEAR_NEAREST_MIPLINEAR = 10, qq.LINEAR_LINEAR = 2, qq.LINEAR_NEAREST = 12, qq.EXPLICIT_MODE = 0, qq.SPHERICAL_MODE = 1, qq.PLANAR_MODE = 2, qq.CUBIC_MODE = 3, qq.PROJECTION_MODE = 4, qq.SKYBOX_MODE = 5, qq.INVCUBIC_MODE = 6, qq.EQUIRECTANGULAR_MODE = 7, qq.FIXED_EQUIRECTANGULAR_MODE = 8, qq.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, qq.CLAMP_ADDRESSMODE = 0, qq.WRAP_ADDRESSMODE = 1, qq.MIRROR_ADDRESSMODE = 2, qq.UseSerializedUrlIfAny = !1, qq
      })(),
      Pq = !1;

    function Qq() {
      Pq || (Pq = !0, (0, Aq.g)("BABYLON.Texture", oq), Hq.d._TextureParser = oq.Parse)
    }
  },
  39774: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq
    });
    class Yq {
      constructor(qq, Eq) {
        this.width = qq, this.height = Eq
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let qq = 0 | this.width;
        return qq = 397 * qq ^ this.height, qq
      }
      WG(qq) {
        this.width = qq.width, this.height = qq.height
      }
      Vqq(qq, Eq) {
        return this.width = qq, this.height = Eq, this
      }
      set(qq, Eq) {
        return this.Vqq(qq, Eq)
      }
      multiplyByFloats(qq, Eq) {
        return new Yq(this.width * qq, this.height * Eq)
      }
      clone() {
        return new Yq(this.width, this.height)
      }
      equals(qq) {
        return !!qq && (this.width === qq.width && this.height === qq.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new Yq(0, 0)
      }
      add(qq) {
        return new Yq(this.width + qq.width, this.height + qq.height)
      }
      subtract(qq) {
        return new Yq(this.width - qq.width, this.height - qq.height)
      }
      scale(qq) {
        return new Yq(this.width * qq, this.height * qq)
      }
      static Lerp(qq, Eq, gq) {
        const lq = qq.width + (Eq.width - qq.width) * gq,
          Oq = qq.height + (Eq.height - qq.height) * gq;
        return new Yq(lq, Oq)
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);