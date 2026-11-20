export const id = 248;
export const ids = [248];
export const modules = {
  39880: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb
    });
    let Bb = !1
  },
  39459: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Xb
    });
    var Bb = hb(39463),
      Ob = hb(39467),
      Gb = hb(36753),
      Ub = hb(36727),
      Lb = hb(36748),
      Yb = hb(37507),
      Sb = hb(39480);
    class ab {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(bb) {
        this._wrapU = bb
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(bb) {
        this._wrapV = bb
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(bb) {
        this._texture && (this._texture.isCube = bb)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(bb) {
        this._texture && (this._texture.is3D = bb)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(bb) {
        this._texture && (this._texture.is2DArray = bb)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(bb) {
        return void 0 !== bb?.shareDepth
      }
      constructor(bb) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = Sb.d.Zero(), this._cachedBaseSize = Sb.d.Zero(), this._initialSamplingMode = 2, this._texture = ab._IsRenderTargetWrapper(bb) ? bb.texture : bb, this._texture && (this._engine = this._texture.UX(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(bb, this._texture, this._texture.generateMipMaps && ub)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var Hb, wb = hb(39488),
      Zb = hb(39333);
    let Xb = (() => {
      var bb;
      let ub, hb, Sb, Hb, Zb, Xb, pb, ob, Ab, lb, Kb, Wb, Cb, db, rb, jb, nb, Db, xb, zb, gb, ib, vb, tb, Jb, eb = ab,
        Nb = [],
        sb = [],
        Mb = [],
        mb = [],
        Ib = [],
        Pb = [],
        qb = [],
        Eb = [],
        yb = [],
        Vb = [],
        Fb = [],
        fb = [],
        kb = [],
        Tb = [],
        cb = [],
        Qb = [],
        Rb = [],
        bu = [],
        uu = [],
        hu = [],
        Bu = [],
        Ou = [],
        Gu = [],
        Uu = [],
        Lu = [],
        Yu = [],
        Su = [],
        au = [],
        Hu = [],
        wu = [],
        Zu = [];
      return bb = class extends eb {
        set hasAlpha(bb) {
          this._hasAlpha = bb
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(bb) {
          this._getAlphaFromRGB !== bb && (this._getAlphaFromRGB = bb, this._scene && this._scene.markAllMaterialsAsDirty(1, (bb => bb.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(bb) {
          this._coordinatesIndex !== bb && (this._coordinatesIndex = bb, this._scene && this._scene.markAllMaterialsAsDirty(1, (bb => bb.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(bb) {
          this._coordinatesMode !== bb && (this._coordinatesMode = bb, this._scene && this._scene.markAllMaterialsAsDirty(1, (bb => bb.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(bb) {
          this._wrapU = bb
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(bb) {
          this._wrapV = bb
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(bb) {
          this._texture ? this._texture.isCube = bb : this._isCube = bb
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(bb) {
          this._texture && (this._texture.is3D = bb)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(bb) {
          this._texture && (this._texture.is2DArray = bb)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(bb) {
          if (this._texture) {
            if (this._texture._gammaSpace === bb) return;
            this._texture._gammaSpace = bb
          } else {
            if (this._gammaSpace === bb) return;
            this._gammaSpace = bb
          }
          this.ZN()?.markAllMaterialsAsDirty(1, (bb => bb.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(bb) {
          bb !== this.isRGBD && (this._texture && (this._texture._isRGBD = bb), this.ZN()?.markAllMaterialsAsDirty(1, (bb => bb.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(bb) {
          this._texture && (this._texture._lodGenerationOffset = bb)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(bb) {
          this._texture && (this._texture._lodGenerationScale = bb)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(bb) {
          this._texture && (this._texture._linearSpecularLOD = bb)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(bb) {
          this._texture && (this._texture._irradianceTexture = bb)
        }
        get uid() {
          return this._uid || (this._uid = (0, Yb.d)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(bb) {
          this._onDisposeObserver && this.XN.remove(this._onDisposeObserver), this._onDisposeObserver = this.XN.add(bb)
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
        constructor(ub) {
          let hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, Bb.k)(this, Nb), (0, Bb.k)(this, sb, void 0)), this.name = ((0, Bb.k)(this, Mb), (0, Bb.k)(this, mb, void 0)), this.displayName = ((0, Bb.k)(this, Ib), (0, Bb.k)(this, Pb, void 0)), this.metadata = ((0, Bb.k)(this, qb), (0, Bb.k)(this, Eb, null)), this._internalMetadata = (0, Bb.k)(this, yb), this.reservedDataStore = null, this._hasAlpha = (0, Bb.k)(this, Vb, !1), this._getAlphaFromRGB = ((0, Bb.k)(this, Fb), (0, Bb.k)(this, fb, !1)), this.level = ((0, Bb.k)(this, kb), (0, Bb.k)(this, Tb, 1)), this._coordinatesIndex = ((0, Bb.k)(this, cb), (0, Bb.k)(this, Qb, 0)), this.optimizeUVAllocation = ((0, Bb.k)(this, Rb), (0, Bb.k)(this, bu, !0)), this._coordinatesMode = ((0, Bb.k)(this, uu), (0, Bb.k)(this, hu, 0)), this.wrapR = ((0, Bb.k)(this, Bu), (0, Bb.k)(this, Ou, 1)), this.anisotropicFilteringLevel = ((0, Bb.k)(this, Gu), (0, Bb.k)(this, Uu, bb.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, Bb.k)(this, Lu), !1), this._gammaSpace = !0, this.invertZ = (0, Bb.k)(this, Yu, !1), this.lodLevelInAlpha = ((0, Bb.k)(this, Su), (0, Bb.k)(this, au, !1)), this._dominantDirection = ((0, Bb.k)(this, Hu), null), this.isRenderTarget = (0, Bb.k)(this, wu, !1), this._prefiltered = ((0, Bb.k)(this, Zu), !1), this._forceSerialize = !1, this.animations = [], this.XN = new Gb.e, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, ub ? bb._IsScene(ub) ? this._scene = ub : this._engine = ub : this._scene = Lb.b.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.UX()), this._texture = hb, this._uid = null
        }
        ZN() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return Ub.d.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return Ub.d.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(bb) {}
        get canRescale() {
          return !1
        }
        _getFromCache(bb, ub, hb, Bb, Ob, Gb) {
          const Ub = this._getEngine();
          if (!Ub) return null;
          const Lb = Ub._getUseSRGBBuffer(!!Ob, ub),
            Yb = Ub.getLoadedTexturesCache();
          for (let Sb = 0; Sb < Yb.length; Sb++) {
            const Ub = Yb[Sb];
            if ((void 0 === Ob || Lb === Ub._useSRGBBuffer) && (void 0 === Bb || Bb === Ub.invertY) && Ub.url === bb && Ub.generateMipMaps === !ub && (!hb || hb === Ub.samplingMode) && (void 0 === Gb || Gb === Ub.isCube)) return Ub.incrementReferences(), Ub
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
          const bb = this.ZN();
          bb && bb.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Bb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Ob = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            Ub = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            Lb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            Yb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const Sb = this._getEngine();
          if (!Sb) return null;
          const ab = this.getSize();
          let Hb = ab.width,
            wb = ab.height;
          0 !== ub && (Hb /= Math.pow(2, ub), wb /= Math.pow(2, ub), Hb = Math.round(Hb), wb = Math.round(wb)), Lb = Math.min(Hb, Lb), Yb = Math.min(wb, Yb);
          try {
            return this._texture.isCube || this._texture.is2DArray ? Sb._readTexturePixels(this._texture, Lb, Yb, bb, ub, hb, Bb, Ob, Gb, Ub) : Sb._readTexturePixels(this._texture, Lb, Yb, -1, ub, hb, Bb, Ob, Gb, Ub)
          } catch (Zb) {
            return null
          }
        }
        _readPixelsSync() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Bb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Ob = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const Gb = this.getSize();
          let Ub = Gb.width,
            Lb = Gb.height;
          const Yb = this._getEngine();
          if (!Yb) return null;
          0 != ub && (Ub /= Math.pow(2, ub), Lb /= Math.pow(2, ub), Ub = Math.round(Ub), Lb = Math.round(Lb));
          try {
            return this._texture.isCube ? Yb._readTexturePixelsSync(this._texture, Ub, Lb, bb, ub, hb, Bb, Ob) : Yb._readTexturePixelsSync(this._texture, Ub, Lb, -1, ub, hb, Bb, Ob)
          } catch (Sb) {
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
            const bb = this._scene.textures.indexOf(this);
            if (bb >= 0 && this._scene.textures.splice(bb, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const bb = this._parentContainer.textures.indexOf(this);
              bb > -1 && this._parentContainer.textures.splice(bb, 1), this._parentContainer = null
            }
          }
          this.XN.notifyObservers(this), this.XN.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !bb) return null;
          const ub = wb.c.Serialize(this);
          return wb.c.AppendSerializedAnimations(this, ub), ub
        }
        static WhenAllReady(bb, ub) {
          let hb = bb.length;
          if (0 !== hb)
            for (let Bb = 0; Bb < bb.length; Bb++) {
              const Ob = bb[Bb];
              if (Ob.isReady()) 0 === --hb && ub();
              else {
                const bb = Ob.onLoadObservable;
                bb ? bb.addOnce((() => {
                  0 === --hb && ub()
                })) : 0 === --hb && ub()
              }
            } else ub()
        }
        static _IsScene(bb) {
          return "Scene" === bb.getClassName()
        }
      }, (() => {
        const Gb = "function" === typeof Symbol && Symbol.metadata ? Object.create(eb[Symbol.metadata] ?? null) : void 0;
        ub = [(0, Ob.K)()], hb = [(0, Ob.K)()], Sb = [(0, Ob.K)()], Hb = [(0, Ob.K)()], Zb = [(0, Ob.K)("hasAlpha")], Xb = [(0, Ob.K)("getAlphaFromRGB")], pb = [(0, Ob.K)()], ob = [(0, Ob.K)("coordinatesIndex")], Ab = [(0, Ob.K)()], lb = [(0, Ob.K)("coordinatesMode")], Kb = [(0, Ob.K)()], Wb = [(0, Ob.K)()], Cb = [(0, Ob.K)()], db = [(0, Ob.K)()], rb = [(0, Ob.K)()], jb = [(0, Ob.K)()], nb = [(0, Ob.K)()], Db = [(0, Ob.K)()], xb = [(0, Ob.K)()], zb = [(0, Ob.K)()], gb = [(0, Ob.K)()], ib = [(0, Ob.K)()], vb = [(0, Ob.K)()], tb = [(0, Ob.D)()], Jb = [(0, Ob.K)()], (0, Bb.h)(bb, null, Kb, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: bb => "wrapU" in bb,
            get: bb => bb.wrapU
          },
          metadata: Gb
        }, null, Nb), (0, Bb.h)(bb, null, Wb, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: bb => "wrapV" in bb,
            get: bb => bb.wrapV
          },
          metadata: Gb
        }, null, Nb), (0, Bb.h)(bb, null, rb, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: bb => "isCube" in bb,
            get: bb => bb.isCube
          },
          metadata: Gb
        }, null, Nb), (0, Bb.h)(bb, null, jb, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: bb => "is3D" in bb,
            get: bb => bb.is3D
          },
          metadata: Gb
        }, null, Nb), (0, Bb.h)(bb, null, nb, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: bb => "is2DArray" in bb,
            get: bb => bb.is2DArray
          },
          metadata: Gb
        }, null, Nb), (0, Bb.h)(bb, null, Db, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: bb => "gammaSpace" in bb,
            get: bb => bb.gammaSpace
          },
          metadata: Gb
        }, null, Nb), (0, Bb.h)(bb, null, gb, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: bb => "lodGenerationOffset" in bb,
            get: bb => bb.lodGenerationOffset
          },
          metadata: Gb
        }, null, Nb), (0, Bb.h)(bb, null, ib, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: bb => "lodGenerationScale" in bb,
            get: bb => bb.lodGenerationScale
          },
          metadata: Gb
        }, null, Nb), (0, Bb.h)(bb, null, vb, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: bb => "linearSpecularLOD" in bb,
            get: bb => bb.linearSpecularLOD
          },
          metadata: Gb
        }, null, Nb), (0, Bb.h)(bb, null, tb, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "irradianceTexture" in bb,
            get: bb => bb.irradianceTexture
          },
          metadata: Gb
        }, null, Nb), (0, Bb.h)(null, null, ub, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: bb => "uniqueId" in bb,
            get: bb => bb.uniqueId,
            set: (bb, ub) => {
              bb.uniqueId = ub
            }
          },
          metadata: Gb
        }, sb, Mb), (0, Bb.h)(null, null, hb, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: bb => "name" in bb,
            get: bb => bb.name,
            set: (bb, ub) => {
              bb.name = ub
            }
          },
          metadata: Gb
        }, mb, Ib), (0, Bb.h)(null, null, Sb, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: bb => "displayName" in bb,
            get: bb => bb.displayName,
            set: (bb, ub) => {
              bb.displayName = ub
            }
          },
          metadata: Gb
        }, Pb, qb), (0, Bb.h)(null, null, Hb, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: bb => "metadata" in bb,
            get: bb => bb.metadata,
            set: (bb, ub) => {
              bb.metadata = ub
            }
          },
          metadata: Gb
        }, Eb, yb), (0, Bb.h)(null, null, Zb, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "_hasAlpha" in bb,
            get: bb => bb._hasAlpha,
            set: (bb, ub) => {
              bb._hasAlpha = ub
            }
          },
          metadata: Gb
        }, Vb, Fb), (0, Bb.h)(null, null, Xb, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: bb => "_getAlphaFromRGB" in bb,
            get: bb => bb._getAlphaFromRGB,
            set: (bb, ub) => {
              bb._getAlphaFromRGB = ub
            }
          },
          metadata: Gb
        }, fb, kb), (0, Bb.h)(null, null, pb, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: bb => "level" in bb,
            get: bb => bb.level,
            set: (bb, ub) => {
              bb.level = ub
            }
          },
          metadata: Gb
        }, Tb, cb), (0, Bb.h)(null, null, ob, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: bb => "_coordinatesIndex" in bb,
            get: bb => bb._coordinatesIndex,
            set: (bb, ub) => {
              bb._coordinatesIndex = ub
            }
          },
          metadata: Gb
        }, Qb, Rb), (0, Bb.h)(null, null, Ab, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: bb => "optimizeUVAllocation" in bb,
            get: bb => bb.optimizeUVAllocation,
            set: (bb, ub) => {
              bb.optimizeUVAllocation = ub
            }
          },
          metadata: Gb
        }, bu, uu), (0, Bb.h)(null, null, lb, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "_coordinatesMode" in bb,
            get: bb => bb._coordinatesMode,
            set: (bb, ub) => {
              bb._coordinatesMode = ub
            }
          },
          metadata: Gb
        }, hu, Bu), (0, Bb.h)(null, null, Cb, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: bb => "wrapR" in bb,
            get: bb => bb.wrapR,
            set: (bb, ub) => {
              bb.wrapR = ub
            }
          },
          metadata: Gb
        }, Ou, Gu), (0, Bb.h)(null, null, db, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: bb => "anisotropicFilteringLevel" in bb,
            get: bb => bb.anisotropicFilteringLevel,
            set: (bb, ub) => {
              bb.anisotropicFilteringLevel = ub
            }
          },
          metadata: Gb
        }, Uu, Lu), (0, Bb.h)(null, null, xb, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: bb => "invertZ" in bb,
            get: bb => bb.invertZ,
            set: (bb, ub) => {
              bb.invertZ = ub
            }
          },
          metadata: Gb
        }, Yu, Su), (0, Bb.h)(null, null, zb, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "lodLevelInAlpha" in bb,
            get: bb => bb.lodLevelInAlpha,
            set: (bb, ub) => {
              bb.lodLevelInAlpha = ub
            }
          },
          metadata: Gb
        }, au, Hu), (0, Bb.h)(null, null, Jb, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: bb => "isRenderTarget" in bb,
            get: bb => bb.isRenderTarget,
            set: (bb, ub) => {
              bb.isRenderTarget = ub
            }
          },
          metadata: Gb
        }, wu, Zu), Gb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Gb
        })
      })(), bb.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, bb
    })();
    (Hb = Xb.prototype).forceSphericalPolynomialsRecompute ?? (Hb.forceSphericalPolynomialsRecompute = (0, Zb.j)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(Xb.prototype, "sphericalPolynomial") || Object.defineProperty(Xb.prototype, "sphericalPolynomial", (0, Zb.f)("BaseTexture", "sphericalPolynomial"))
  },
  39932: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Cb,
      f: () => Kb
    });
    var Bb = hb(39463),
      Ob = hb(39467),
      Gb = hb(36753),
      Ub = hb(36727),
      Lb = hb(39459),
      Yb = hb(36762),
      Sb = hb(39333),
      ab = hb(39343),
      Hb = hb(39565),
      wb = hb(37399),
      Zb = hb(39530);

    function Xb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Bb = ub.width,
        Ob = ub.height;
      if (bb instanceof Float32Array) {
        let ub = bb.byteLength / bb.BYTES_PER_ELEMENT;
        const hb = new Uint8Array(ub);
        for (; --ub >= 0;) {
          let Bb = bb[ub];
          Bb < 0 ? Bb = 0 : Bb > 1 && (Bb = 1), hb[ub] = 255 * Bb
        }
        bb = hb
      }
      const Gb = document.createElement("canvas");
      Gb.width = Bb, Gb.height = Ob;
      const Ub = Gb.getContext("2d");
      if (!Ub) return null;
      const Lb = Ub.createImageData(Bb, Ob);
      if (Lb.data.set(bb), Ub.putImageData(Lb, 0, 0), hb) {
        const bb = document.createElement("canvas");
        bb.width = Bb, bb.height = Ob;
        const ub = bb.getContext("2d");
        return ub ? (ub.translate(0, Ob), ub.scale(1, -1), ub.drawImage(Gb, 0, 0), bb.toDataURL("image/png")) : null
      }
      return Gb.toDataURL("image/png")
    }

    function pb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Bb = bb.getInternalTexture();
      if (!Bb) return null;
      const Ob = bb._readPixelsSync(ub, hb);
      return Ob ? Xb(Ob, bb.getSize(), Bb.invertY) : null
    }
    async function ob(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Bb = bb.getInternalTexture();
      if (!Bb) return null;
      const Ob = await bb.readPixels(ub, hb);
      return Ob ? Xb(Ob, bb.getSize(), Bb.invertY) : null
    }
    var Ab = hb(39880),
      lb = hb(39488);
    let Kb = (() => {
        var bb;
        let ub, hb, Xb, Kb, Wb, Cb, db, rb, jb, nb, Db, xb, zb, gb = Lb.d,
          ib = [],
          vb = [],
          tb = [],
          Jb = [],
          eb = [],
          Nb = [],
          sb = [],
          Mb = [],
          mb = [],
          Ib = [],
          Pb = [],
          qb = [],
          Eb = [],
          yb = [],
          Vb = [],
          Fb = [],
          fb = [],
          kb = [],
          Tb = [],
          cb = [],
          Qb = [],
          Rb = [],
          bu = [],
          uu = [],
          hu = [];
        return bb = class extends gb {
          static _CreateVideoTexture(ub, hb, Bb) {
            arguments.length > 5 && void 0 !== arguments[5] || bb.TRILINEAR_SAMPLINGMODE;
            throw (0, Sb.m)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(bb) {
            this._isBlocking = bb
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(ub, hb, Ob, Ub) {
            let Lb, Yb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : bb.TRILINEAR_SAMPLINGMODE,
              Sb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Hb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              wb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Zb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              Xb = arguments.length > 9 ? arguments[9] : void 0,
              pb = arguments.length > 10 ? arguments[10] : void 0,
              ob = arguments.length > 11 ? arguments[11] : void 0,
              lb = arguments.length > 12 ? arguments[12] : void 0,
              Kb = arguments.length > 13 ? arguments[13] : void 0;
            super(hb), this.url = ((0, Bb.k)(this, ib), (0, Bb.k)(this, vb, null)), this.uOffset = ((0, Bb.k)(this, tb), (0, Bb.k)(this, Jb, 0)), this.vOffset = ((0, Bb.k)(this, eb), (0, Bb.k)(this, Nb, 0)), this.uScale = ((0, Bb.k)(this, sb), (0, Bb.k)(this, Mb, 1)), this.vScale = ((0, Bb.k)(this, mb), (0, Bb.k)(this, Ib, 1)), this.uAng = ((0, Bb.k)(this, Pb), (0, Bb.k)(this, qb, 0)), this.vAng = ((0, Bb.k)(this, Eb), (0, Bb.k)(this, yb, 0)), this.wAng = ((0, Bb.k)(this, Vb), (0, Bb.k)(this, Fb, 0)), this.uRotationCenter = ((0, Bb.k)(this, fb), (0, Bb.k)(this, kb, .5)), this.vRotationCenter = ((0, Bb.k)(this, Tb), (0, Bb.k)(this, cb, .5)), this.wRotationCenter = ((0, Bb.k)(this, Qb), (0, Bb.k)(this, Rb, .5)), this.homogeneousRotationInUVTransform = ((0, Bb.k)(this, bu), (0, Bb.k)(this, uu, !1)), this.inspectableCustomProperties = ((0, Bb.k)(this, hu), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new Gb.e, this._isBlocking = !0, this.name = ub || "", this.url = ub;
            let Wb = !1,
              Cb = null,
              db = !0;
            "object" === typeof Ob && null !== Ob ? (Lb = Ob.noMipmap ?? !1, Ub = Ob.invertY ?? !Ab.d, Yb = Ob.samplingMode ?? bb.TRILINEAR_SAMPLINGMODE, Sb = Ob.onLoad ?? null, Hb = Ob.onError ?? null, wb = Ob.buffer ?? null, Zb = Ob.deleteBuffer ?? !1, Xb = Ob.format, pb = Ob.mimeType, ob = Ob.loaderOptions, lb = Ob.creationFlags, Wb = Ob.useSRGBBuffer ?? !1, Cb = Ob.internalTexture ?? null, db = Ob.gammaSpace ?? db, Kb = Ob.forcedExtension ?? Kb) : Lb = !!Ob, this._gammaSpace = db, this._noMipmap = Lb, this._invertY = void 0 === Ub ? !Ab.d : Ub, this._initialSamplingMode = Yb, this._buffer = wb, this._deleteBuffer = Zb, this._mimeType = pb, this._loaderOptions = ob, this._creationFlags = lb, this._useSRGBBuffer = Wb, this._forcedExtension = Kb, void 0 !== Xb && (this._format = Xb);
            const rb = this.ZN(),
              jb = this._getEngine();
            if (!jb) return;
            jb.onBeforeTextureInitObservable.notifyObservers(this);
            const nb = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), Sb && Sb(), !this.isBlocking && rb && rb.resetCachedMaterial()
              },
              Db = (ub, hb) => {
                this._loadingError = !0, this._errorObject = {
                  message: ub,
                  exception: hb
                }, Hb && Hb(ub, hb), bb.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !Cb) return this._delayedOnLoad = nb, void(this._delayedOnError = Db);
            if (this._texture = Cb ?? this._getFromCache(this.url, Lb, Yb, this._invertY, Wb, this.isCube), this._texture)
              if (this._texture.isReady) ab.c.SetImmediate((() => nb()));
              else {
                const bb = this._texture.onLoadedObservable.add(nb);
                this._texture.onErrorObservable.add((ub => {
                  Db(ub.message, ub.exception), this._texture?.onLoadedObservable.remove(bb)
                }))
              }
            else if (rb && rb.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = nb, this._delayedOnError = Db;
            else {
              try {
                this._texture = jb.createTexture(this.url, Lb, this._invertY, rb, Yb, nb, Db, this._buffer, void 0, this._format, this._forcedExtension, pb, ob, lb, Wb)
              } catch (xb) {
                throw Db("error loading", xb), xb
              }
              Zb && (this._buffer = null)
            }
          }
          updateURL(bb) {
            let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              hb = arguments.length > 2 ? arguments[2] : void 0,
              Bb = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.ZN().markAllMaterialsAsDirty(1, (bb => bb.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = bb), this.url = bb, this._buffer = ub, this._forcedExtension = Bb, this.delayLoadState = 4;
            const Ob = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              Ob ? Ob() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), hb && hb()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const bb = this.ZN();
            if (!bb) return;
            let ub = this.url;
            !ub && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (ub = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(ub, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? ab.c.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = bb.UX().createTexture(ub, this._noMipmap, this._invertY, bb, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(bb, ub, hb, Bb) {
            bb *= this._cachedUScale, ub *= this._cachedVScale, bb -= this.uRotationCenter * this._cachedUScale, ub -= this.vRotationCenter * this._cachedVScale, hb -= this.wRotationCenter, Ub.q.TransformCoordinatesFromFloatsToRef(bb, ub, hb, this._rowGenerationMatrix, Bb), Bb.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, Bb.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, Bb.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * bb === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * bb, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = Ub.d.Zero(), this._rowGenerationMatrix = new Ub.d, this._t0 = Ub.q.Zero(), this._t1 = Ub.q.Zero(), this._t2 = Ub.q.Zero()), Ub.d.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (Ub.d.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, Ub.i.Matrix[0]), Ub.d.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, Ub.i.Matrix[1]), Ub.d.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, Ub.i.Matrix[2]), Ub.d.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, Ub.i.Matrix[3]), Ub.i.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Ub.i.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Ub.i.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Ub.i.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.tBb(this._t0), this._t2.tBb(this._t0), Ub.d.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const ub = this.ZN();
            if (!ub) return this._cachedTextureMatrix;
            const hb = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && hb !== this._cachedIdentity3x2 && ub.markAllMaterialsAsDirty(1, (bb => bb.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const ub = this.ZN();
            if (!ub) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== bb.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === ub.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = Ub.d.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = Ub.d.Zero());
            const hb = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case bb.PLANAR_MODE:
                Ub.d.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case bb.PROJECTION_MODE: {
                Ub.d.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const bb = ub.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = bb.updateFlag, bb.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                Ub.d.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return hb && ub.markAllMaterialsAsDirty(1, (bb => bb.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const ub = {
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
            return lb.c.Clone((() => new bb(this._texture ? this._texture.url : null, this.ZN(), ub)), this)
          }
          serialize() {
            const ub = this.name;
            bb.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const hb = super.serialize(bb._SerializeInternalTextureUniqueId);
            if (!hb) return null;
            if (bb.SerializeBuffers || bb.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) hb.base64String = this._buffer, hb.name = hb.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const bb = this.mimeType || "image/png";
              hb.base64String = `data:${bb};base64,${(0,Zb.i)(this._buffer)}`
            } else(bb.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (hb.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? pb(this) : ob(this));
            return hb.invertY = this._invertY, hb.samplingMode = this.samplingMode, hb._creationFlags = this._creationFlags, hb._useSRGBBuffer = this._useSRGBBuffer, bb._SerializeInternalTextureUniqueId && (hb.internalTextureUniqueId = this._texture?.uniqueId), hb.internalTextureLabel = this._texture?.label, hb.noMipmap = this._noMipmap, this.name = ub, hb
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(ub, hb, Bb) {
            if (ub.customType) {
              const bb = Hb.b.Instantiate(ub.customType).Parse(ub, hb, Bb);
              return ub.samplingMode && bb.updateSamplingMode && bb._samplingMode && bb._samplingMode !== ub.samplingMode && bb.updateSamplingMode(ub.samplingMode), bb
            }
            if (ub.isCube && !ub.isRenderTarget) return bb._CubeTextureParser(ub, hb, Bb);
            const Ob = void 0 !== ub.internalTextureUniqueId;
            if (!ub.name && !ub.isRenderTarget && !Ob) return null;
            let Gb;
            if (Ob) {
              const bb = hb.UX().getLoadedTexturesCache();
              for (const hb of bb)
                if (hb.uniqueId === ub.internalTextureUniqueId) {
                  Gb = hb;
                  break
                }
            }
            const Ub = bb => {
              if (bb && bb._texture && (bb._texture._cachedWrapU = null, bb._texture._cachedWrapV = null, bb._texture._cachedWrapR = null), ub.samplingMode) {
                const hb = ub.samplingMode;
                bb && bb.samplingMode !== hb && bb.updateSamplingMode(hb)
              }
              if (bb && ub.animations)
                for (let hb = 0; hb < ub.animations.length; hb++) {
                  const Bb = ub.animations[hb],
                    Ob = (0, Yb.d)("BABYLON.Animation");
                  Ob && bb.animations.push(Ob.Parse(Bb))
                }
              bb && bb._texture && (Ob && !Gb && bb._texture._setUniqueId(ub.internalTextureUniqueId), bb._texture.label = ub.internalTextureLabel)
            };
            return lb.c.Parse((() => {
              let Ob = !0;
              if (ub.noMipmap && (Ob = !1), ub.mirrorPlane) {
                const Bb = bb._CreateMirror(ub.name, ub.renderTargetSize, hb, Ob);
                return Bb._waitingRenderList = ub.renderList, Bb.mirrorPlane = wb.d.FromArray(ub.mirrorPlane), Ub(Bb), Bb
              }
              if (ub.isRenderTarget && !ub.base64String) {
                let Bb = null;
                if (ub.isCube) {
                  if (hb.reflectionProbes)
                    for (let bb = 0; bb < hb.reflectionProbes.length; bb++) {
                      const Bb = hb.reflectionProbes[bb];
                      if (Bb.name === ub.name) return Bb.cubeTexture
                    }
                } else Bb = bb._CreateRenderTargetTexture(ub.name, ub.renderTargetSize, hb, Ob, ub._creationFlags ?? 0), Bb._waitingRenderList = ub.renderList;
                return Ub(Bb), Bb
              }
              if (ub.isVideo) {
                const Gb = bb._CreateVideoTexture(Bb + (ub.url || ub.name), Bb + (ub.src || ub.url), hb, Ob, ub.invertY, ub.samplingMode, ub.settings || {});
                return Ub(Gb), Gb
              } {
                let Lb;
                if ("string" === typeof ub.base64String && ub.base64String && !Gb) {
                  const Bb = {
                      buffer: ub.base64String,
                      noMipmap: !Ob,
                      invertY: ub.invertY,
                      samplingMode: ub.samplingMode,
                      useSRGBBuffer: ub._useSRGBBuffer ?? !1,
                      creationFlags: ub._creationFlags ?? 0,
                      onLoad: () => {
                        Ub(Lb)
                      }
                    },
                    Gb = ub.base64String,
                    Yb = Gb.startsWith("data:") ? Gb.substring(5) : Gb;
                  Lb = bb.CreateFromBase64String("", Yb, hb, Bb), Lb.name = ub.name
                } else {
                  let Yb;
                  Yb = ub.name && (ub.name.indexOf("://") > 0 || ub.name.startsWith("data:")) ? ub.name : Bb + ub.name, ub.url && (ub.url.startsWith("data:") || bb.UseSerializedUrlIfAny) && (Yb = ub.url);
                  const Sb = {
                    noMipmap: !Ob,
                    invertY: ub.invertY,
                    samplingMode: ub.samplingMode,
                    useSRGBBuffer: ub._useSRGBBuffer ?? !1,
                    creationFlags: ub._creationFlags ?? 0,
                    onLoad: () => {
                      Ub(Lb)
                    },
                    internalTexture: Gb
                  };
                  Lb = new bb(Yb, hb, Sb)
                }
                return Lb
              }
            }), ub, hb)
          }
          static CreateFromBase64String(ub, hb, Bb, Ob, Gb) {
            let Ub = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : bb.TRILINEAR_SAMPLINGMODE;
            return new bb("data:" + hb, Bb, Ob, Gb, Ub, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, ub, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(ub, hb, Bb) {
            let Ob = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Gb = arguments.length > 4 ? arguments[4] : void 0,
              Ub = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              Lb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : bb.TRILINEAR_SAMPLINGMODE,
              Yb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Sb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              ab = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              Hb = arguments.length > 10 ? arguments[10] : void 0,
              wb = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== ub.substring(0, 5) && (ub = "data:" + ub), new bb(ub, Bb, Gb, Ub, Lb, Yb, Sb, hb, Ob, ab, void 0, void 0, Hb, wb)
          }
        }, (() => {
          const Gb = "function" === typeof Symbol && Symbol.metadata ? Object.create(gb[Symbol.metadata] ?? null) : void 0;
          ub = [(0, Ob.K)()], hb = [(0, Ob.K)()], Xb = [(0, Ob.K)()], Kb = [(0, Ob.K)()], Wb = [(0, Ob.K)()], Cb = [(0, Ob.K)()], db = [(0, Ob.K)()], rb = [(0, Ob.K)()], jb = [(0, Ob.K)()], nb = [(0, Ob.K)()], Db = [(0, Ob.K)()], xb = [(0, Ob.K)()], zb = [(0, Ob.K)()], (0, Bb.h)(bb, null, zb, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: bb => "isBlocking" in bb,
              get: bb => bb.isBlocking
            },
            metadata: Gb
          }, null, ib), (0, Bb.h)(null, null, ub, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: bb => "url" in bb,
              get: bb => bb.url,
              set: (bb, ub) => {
                bb.url = ub
              }
            },
            metadata: Gb
          }, vb, tb), (0, Bb.h)(null, null, hb, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "uOffset" in bb,
              get: bb => bb.uOffset,
              set: (bb, ub) => {
                bb.uOffset = ub
              }
            },
            metadata: Gb
          }, Jb, eb), (0, Bb.h)(null, null, Xb, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "vOffset" in bb,
              get: bb => bb.vOffset,
              set: (bb, ub) => {
                bb.vOffset = ub
              }
            },
            metadata: Gb
          }, Nb, sb), (0, Bb.h)(null, null, Kb, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: bb => "uScale" in bb,
              get: bb => bb.uScale,
              set: (bb, ub) => {
                bb.uScale = ub
              }
            },
            metadata: Gb
          }, Mb, mb), (0, Bb.h)(null, null, Wb, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: bb => "vScale" in bb,
              get: bb => bb.vScale,
              set: (bb, ub) => {
                bb.vScale = ub
              }
            },
            metadata: Gb
          }, Ib, Pb), (0, Bb.h)(null, null, Cb, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: bb => "uAng" in bb,
              get: bb => bb.uAng,
              set: (bb, ub) => {
                bb.uAng = ub
              }
            },
            metadata: Gb
          }, qb, Eb), (0, Bb.h)(null, null, db, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: bb => "vAng" in bb,
              get: bb => bb.vAng,
              set: (bb, ub) => {
                bb.vAng = ub
              }
            },
            metadata: Gb
          }, yb, Vb), (0, Bb.h)(null, null, rb, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: bb => "wAng" in bb,
              get: bb => bb.wAng,
              set: (bb, ub) => {
                bb.wAng = ub
              }
            },
            metadata: Gb
          }, Fb, fb), (0, Bb.h)(null, null, jb, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: bb => "uRotationCenter" in bb,
              get: bb => bb.uRotationCenter,
              set: (bb, ub) => {
                bb.uRotationCenter = ub
              }
            },
            metadata: Gb
          }, kb, Tb), (0, Bb.h)(null, null, nb, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: bb => "vRotationCenter" in bb,
              get: bb => bb.vRotationCenter,
              set: (bb, ub) => {
                bb.vRotationCenter = ub
              }
            },
            metadata: Gb
          }, cb, Qb), (0, Bb.h)(null, null, Db, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: bb => "wRotationCenter" in bb,
              get: bb => bb.wRotationCenter,
              set: (bb, ub) => {
                bb.wRotationCenter = ub
              }
            },
            metadata: Gb
          }, Rb, bu), (0, Bb.h)(null, null, xb, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: bb => "homogeneousRotationInUVTransform" in bb,
              get: bb => bb.homogeneousRotationInUVTransform,
              set: (bb, ub) => {
                bb.homogeneousRotationInUVTransform = ub
              }
            },
            metadata: Gb
          }, uu, hu), Gb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Gb
          })
        })(), bb.SerializeBuffers = !0, bb.ForceSerializeBuffers = !1, bb.OnTextureLoadErrorObservable = new Gb.e, bb._SerializeInternalTextureUniqueId = !1, bb._CubeTextureParser = (bb, ub, hb) => {
          throw (0, Sb.m)("CubeTexture")
        }, bb._CreateMirror = (bb, ub, hb, Bb) => {
          throw (0, Sb.m)("MirrorTexture")
        }, bb._CreateRenderTargetTexture = (bb, ub, hb, Bb, Ob) => {
          throw (0, Sb.m)("RenderTargetTexture")
        }, bb.NEAREST_SAMPLINGMODE = 1, bb.NEAREST_NEAREST_MIPLINEAR = 8, bb.BILINEAR_SAMPLINGMODE = 2, bb.LINEAR_LINEAR_MIPNEAREST = 11, bb.TRILINEAR_SAMPLINGMODE = 3, bb.LINEAR_LINEAR_MIPLINEAR = 3, bb.NEAREST_NEAREST_MIPNEAREST = 4, bb.NEAREST_LINEAR_MIPNEAREST = 5, bb.NEAREST_LINEAR_MIPLINEAR = 6, bb.NEAREST_LINEAR = 7, bb.NEAREST_NEAREST = 1, bb.LINEAR_NEAREST_MIPNEAREST = 9, bb.LINEAR_NEAREST_MIPLINEAR = 10, bb.LINEAR_LINEAR = 2, bb.LINEAR_NEAREST = 12, bb.EXPLICIT_MODE = 0, bb.SPHERICAL_MODE = 1, bb.PLANAR_MODE = 2, bb.CUBIC_MODE = 3, bb.PROJECTION_MODE = 4, bb.SKYBOX_MODE = 5, bb.INVCUBIC_MODE = 6, bb.EQUIRECTANGULAR_MODE = 7, bb.FIXED_EQUIRECTANGULAR_MODE = 8, bb.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, bb.CLAMP_ADDRESSMODE = 0, bb.WRAP_ADDRESSMODE = 1, bb.MIRROR_ADDRESSMODE = 2, bb.UseSerializedUrlIfAny = !1, bb
      })(),
      Wb = !1;

    function Cb() {
      Wb || (Wb = !0, (0, Yb.f)("BABYLON.Texture", Kb), lb.c._TextureParser = Kb.Parse)
    }
  },
  39480: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb
    });
    class Bb {
      constructor(bb, ub) {
        this.width = bb, this.height = ub
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let bb = 0 | this.width;
        return bb = 397 * bb ^ this.height, bb
      }
      mD(bb) {
        this.width = bb.width, this.height = bb.height
      }
      M_(bb, ub) {
        return this.width = bb, this.height = ub, this
      }
      set(bb, ub) {
        return this.M_(bb, ub)
      }
      multiplyByFloats(bb, ub) {
        return new Bb(this.width * bb, this.height * ub)
      }
      clone() {
        return new Bb(this.width, this.height)
      }
      equals(bb) {
        return !!bb && (this.width === bb.width && this.height === bb.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new Bb(0, 0)
      }
      add(bb) {
        return new Bb(this.width + bb.width, this.height + bb.height)
      }
      subtract(bb) {
        return new Bb(this.width - bb.width, this.height - bb.height)
      }
      scale(bb) {
        return new Bb(this.width * bb, this.height * bb)
      }
      static Lerp(bb, ub, hb) {
        const Ob = bb.width + (ub.width - bb.width) * hb,
          Gb = bb.height + (ub.height - bb.height) * hb;
        return new Bb(Ob, Gb)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);