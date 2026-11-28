export const id = 292;
export const ids = [292];
export const modules = {
  42107: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb
    });
    let eb = !1
  },
  41671: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Cb
    });
    var eb = Mb(41675),
      Hb = Mb(41679),
      pb = Mb(38318),
      Vb = Mb(38285),
      gb = Mb(38313),
      lb = Mb(39148),
      Lb = Mb(41693);
    class Ib {
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
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = Lb.b.Zero(), this._cachedBaseSize = Lb.b.Zero(), this._initialSamplingMode = 2, this._texture = Ib._IsRenderTargetWrapper(bb) ? bb.texture : bb, this._texture && (this._engine = this._texture.DC(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(bb, this._texture, this._texture.generateMipMaps && wb)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var Ob, Ub = Mb(41697),
      tb = Mb(41554);
    let Cb = (() => {
      var bb;
      let wb, Mb, Lb, Ob, tb, Cb, Eb, Fb, Bb, sb, mb, hb, zb, Xb, xb, jb, Kb, rb, Rb, Db, cb, Yb, Zb, fb, Ab, Wb = Ib,
        Jb = [],
        Sb = [],
        Nb = [],
        vb = [],
        Qb = [],
        Gb = [],
        qb = [],
        ab = [],
        ib = [],
        ub = [],
        db = [],
        Pb = [],
        nb = [],
        yb = [],
        ob = [],
        Tb = [],
        kb = [],
        bw = [],
        ww = [],
        Mw = [],
        ew = [],
        Hw = [],
        pw = [],
        Vw = [],
        gw = [],
        lw = [],
        Lw = [],
        Iw = [],
        Ow = [],
        Uw = [],
        tw = [];
      return bb = class extends Wb {
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
          this.RJ()?.markAllMaterialsAsDirty(1, (bb => bb.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(bb) {
          bb !== this.isRGBD && (this._texture && (this._texture._isRGBD = bb), this.RJ()?.markAllMaterialsAsDirty(1, (bb => bb.hasTexture(this))))
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
          return this._uid || (this._uid = (0, lb.c)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(bb) {
          this._onDisposeObserver && this.vJ.remove(this._onDisposeObserver), this._onDisposeObserver = this.vJ.add(bb)
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
        constructor(wb) {
          let Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, eb.m)(this, Jb), (0, eb.m)(this, Sb, void 0)), this.name = ((0, eb.m)(this, Nb), (0, eb.m)(this, vb, void 0)), this.displayName = ((0, eb.m)(this, Qb), (0, eb.m)(this, Gb, void 0)), this.metadata = ((0, eb.m)(this, qb), (0, eb.m)(this, ab, null)), this._internalMetadata = (0, eb.m)(this, ib), this.reservedDataStore = null, this._hasAlpha = (0, eb.m)(this, ub, !1), this._getAlphaFromRGB = ((0, eb.m)(this, db), (0, eb.m)(this, Pb, !1)), this.level = ((0, eb.m)(this, nb), (0, eb.m)(this, yb, 1)), this._coordinatesIndex = ((0, eb.m)(this, ob), (0, eb.m)(this, Tb, 0)), this.optimizeUVAllocation = ((0, eb.m)(this, kb), (0, eb.m)(this, bw, !0)), this._coordinatesMode = ((0, eb.m)(this, ww), (0, eb.m)(this, Mw, 0)), this.wrapR = ((0, eb.m)(this, ew), (0, eb.m)(this, Hw, 1)), this.anisotropicFilteringLevel = ((0, eb.m)(this, pw), (0, eb.m)(this, Vw, bb.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, eb.m)(this, gw), !1), this._gammaSpace = !0, this.invertZ = (0, eb.m)(this, lw, !1), this.lodLevelInAlpha = ((0, eb.m)(this, Lw), (0, eb.m)(this, Iw, !1)), this._dominantDirection = ((0, eb.m)(this, Ow), null), this.isRenderTarget = (0, eb.m)(this, Uw, !1), this._prefiltered = ((0, eb.m)(this, tw), !1), this._forceSerialize = !1, this.animations = [], this.vJ = new pb.b, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, wb ? bb._IsScene(wb) ? this._scene = wb : this._engine = wb : this._scene = gb.e.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.DC()), this._texture = Mb, this._uid = null
        }
        RJ() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return Vb.b.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return Vb.b.IdentityReadOnly
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
        _getFromCache(bb, wb, Mb, eb, Hb, pb) {
          const Vb = this._getEngine();
          if (!Vb) return null;
          const gb = Vb._getUseSRGBBuffer(!!Hb, wb),
            lb = Vb.getLoadedTexturesCache();
          for (let Lb = 0; Lb < lb.length; Lb++) {
            const Vb = lb[Lb];
            if ((void 0 === Hb || gb === Vb._useSRGBBuffer) && (void 0 === eb || eb === Vb.invertY) && Vb.url === bb && Vb.generateMipMaps === !wb && (!Mb || Mb === Vb.samplingMode) && (void 0 === pb || pb === Vb.isCube)) return Vb.incrementReferences(), Vb
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
          const bb = this.RJ();
          bb && bb.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            eb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Hb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            Vb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            gb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            lb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const Lb = this._getEngine();
          if (!Lb) return null;
          const Ib = this.getSize();
          let Ob = Ib.width,
            Ub = Ib.height;
          0 !== wb && (Ob /= Math.pow(2, wb), Ub /= Math.pow(2, wb), Ob = Math.round(Ob), Ub = Math.round(Ub)), gb = Math.min(Ob, gb), lb = Math.min(Ub, lb);
          try {
            return this._texture.isCube || this._texture.is2DArray ? Lb._readTexturePixels(this._texture, gb, lb, bb, wb, Mb, eb, Hb, pb, Vb) : Lb._readTexturePixels(this._texture, gb, lb, -1, wb, Mb, eb, Hb, pb, Vb)
          } catch (tb) {
            return null
          }
        }
        _readPixelsSync() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            eb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Hb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const pb = this.getSize();
          let Vb = pb.width,
            gb = pb.height;
          const lb = this._getEngine();
          if (!lb) return null;
          0 != wb && (Vb /= Math.pow(2, wb), gb /= Math.pow(2, wb), Vb = Math.round(Vb), gb = Math.round(gb));
          try {
            return this._texture.isCube ? lb._readTexturePixelsSync(this._texture, Vb, gb, bb, wb, Mb, eb, Hb) : lb._readTexturePixelsSync(this._texture, Vb, gb, -1, wb, Mb, eb, Hb)
          } catch (Lb) {
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
          this.vJ.notifyObservers(this), this.vJ.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !bb) return null;
          const wb = Ub.d.Serialize(this);
          return Ub.d.AppendSerializedAnimations(this, wb), wb
        }
        static WhenAllReady(bb, wb) {
          let Mb = bb.length;
          if (0 !== Mb)
            for (let eb = 0; eb < bb.length; eb++) {
              const Hb = bb[eb];
              if (Hb.isReady()) 0 === --Mb && wb();
              else {
                const bb = Hb.onLoadObservable;
                bb ? bb.addOnce((() => {
                  0 === --Mb && wb()
                })) : 0 === --Mb && wb()
              }
            } else wb()
        }
        static _IsScene(bb) {
          return "Scene" === bb.getClassName()
        }
      }, (() => {
        const pb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Wb[Symbol.metadata] ?? null) : void 0;
        wb = [(0, Hb.E)()], Mb = [(0, Hb.E)()], Lb = [(0, Hb.E)()], Ob = [(0, Hb.E)()], tb = [(0, Hb.E)("hasAlpha")], Cb = [(0, Hb.E)("getAlphaFromRGB")], Eb = [(0, Hb.E)()], Fb = [(0, Hb.E)("coordinatesIndex")], Bb = [(0, Hb.E)()], sb = [(0, Hb.E)("coordinatesMode")], mb = [(0, Hb.E)()], hb = [(0, Hb.E)()], zb = [(0, Hb.E)()], Xb = [(0, Hb.E)()], xb = [(0, Hb.E)()], jb = [(0, Hb.E)()], Kb = [(0, Hb.E)()], rb = [(0, Hb.E)()], Rb = [(0, Hb.E)()], Db = [(0, Hb.E)()], cb = [(0, Hb.E)()], Yb = [(0, Hb.E)()], Zb = [(0, Hb.E)()], fb = [(0, Hb.x)()], Ab = [(0, Hb.E)()], (0, eb.i)(bb, null, mb, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: bb => "wrapU" in bb,
            get: bb => bb.wrapU
          },
          metadata: pb
        }, null, Jb), (0, eb.i)(bb, null, hb, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: bb => "wrapV" in bb,
            get: bb => bb.wrapV
          },
          metadata: pb
        }, null, Jb), (0, eb.i)(bb, null, xb, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: bb => "isCube" in bb,
            get: bb => bb.isCube
          },
          metadata: pb
        }, null, Jb), (0, eb.i)(bb, null, jb, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: bb => "is3D" in bb,
            get: bb => bb.is3D
          },
          metadata: pb
        }, null, Jb), (0, eb.i)(bb, null, Kb, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: bb => "is2DArray" in bb,
            get: bb => bb.is2DArray
          },
          metadata: pb
        }, null, Jb), (0, eb.i)(bb, null, rb, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: bb => "gammaSpace" in bb,
            get: bb => bb.gammaSpace
          },
          metadata: pb
        }, null, Jb), (0, eb.i)(bb, null, cb, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: bb => "lodGenerationOffset" in bb,
            get: bb => bb.lodGenerationOffset
          },
          metadata: pb
        }, null, Jb), (0, eb.i)(bb, null, Yb, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: bb => "lodGenerationScale" in bb,
            get: bb => bb.lodGenerationScale
          },
          metadata: pb
        }, null, Jb), (0, eb.i)(bb, null, Zb, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: bb => "linearSpecularLOD" in bb,
            get: bb => bb.linearSpecularLOD
          },
          metadata: pb
        }, null, Jb), (0, eb.i)(bb, null, fb, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "irradianceTexture" in bb,
            get: bb => bb.irradianceTexture
          },
          metadata: pb
        }, null, Jb), (0, eb.i)(null, null, wb, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: bb => "uniqueId" in bb,
            get: bb => bb.uniqueId,
            set: (bb, wb) => {
              bb.uniqueId = wb
            }
          },
          metadata: pb
        }, Sb, Nb), (0, eb.i)(null, null, Mb, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: bb => "name" in bb,
            get: bb => bb.name,
            set: (bb, wb) => {
              bb.name = wb
            }
          },
          metadata: pb
        }, vb, Qb), (0, eb.i)(null, null, Lb, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: bb => "displayName" in bb,
            get: bb => bb.displayName,
            set: (bb, wb) => {
              bb.displayName = wb
            }
          },
          metadata: pb
        }, Gb, qb), (0, eb.i)(null, null, Ob, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: bb => "metadata" in bb,
            get: bb => bb.metadata,
            set: (bb, wb) => {
              bb.metadata = wb
            }
          },
          metadata: pb
        }, ab, ib), (0, eb.i)(null, null, tb, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "_hasAlpha" in bb,
            get: bb => bb._hasAlpha,
            set: (bb, wb) => {
              bb._hasAlpha = wb
            }
          },
          metadata: pb
        }, ub, db), (0, eb.i)(null, null, Cb, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: bb => "_getAlphaFromRGB" in bb,
            get: bb => bb._getAlphaFromRGB,
            set: (bb, wb) => {
              bb._getAlphaFromRGB = wb
            }
          },
          metadata: pb
        }, Pb, nb), (0, eb.i)(null, null, Eb, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: bb => "level" in bb,
            get: bb => bb.level,
            set: (bb, wb) => {
              bb.level = wb
            }
          },
          metadata: pb
        }, yb, ob), (0, eb.i)(null, null, Fb, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: bb => "_coordinatesIndex" in bb,
            get: bb => bb._coordinatesIndex,
            set: (bb, wb) => {
              bb._coordinatesIndex = wb
            }
          },
          metadata: pb
        }, Tb, kb), (0, eb.i)(null, null, Bb, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: bb => "optimizeUVAllocation" in bb,
            get: bb => bb.optimizeUVAllocation,
            set: (bb, wb) => {
              bb.optimizeUVAllocation = wb
            }
          },
          metadata: pb
        }, bw, ww), (0, eb.i)(null, null, sb, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "_coordinatesMode" in bb,
            get: bb => bb._coordinatesMode,
            set: (bb, wb) => {
              bb._coordinatesMode = wb
            }
          },
          metadata: pb
        }, Mw, ew), (0, eb.i)(null, null, zb, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: bb => "wrapR" in bb,
            get: bb => bb.wrapR,
            set: (bb, wb) => {
              bb.wrapR = wb
            }
          },
          metadata: pb
        }, Hw, pw), (0, eb.i)(null, null, Xb, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: bb => "anisotropicFilteringLevel" in bb,
            get: bb => bb.anisotropicFilteringLevel,
            set: (bb, wb) => {
              bb.anisotropicFilteringLevel = wb
            }
          },
          metadata: pb
        }, Vw, gw), (0, eb.i)(null, null, Rb, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: bb => "invertZ" in bb,
            get: bb => bb.invertZ,
            set: (bb, wb) => {
              bb.invertZ = wb
            }
          },
          metadata: pb
        }, lw, Lw), (0, eb.i)(null, null, Db, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "lodLevelInAlpha" in bb,
            get: bb => bb.lodLevelInAlpha,
            set: (bb, wb) => {
              bb.lodLevelInAlpha = wb
            }
          },
          metadata: pb
        }, Iw, Ow), (0, eb.i)(null, null, Ab, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: bb => "isRenderTarget" in bb,
            get: bb => bb.isRenderTarget,
            set: (bb, wb) => {
              bb.isRenderTarget = wb
            }
          },
          metadata: pb
        }, Uw, tw), pb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: pb
        })
      })(), bb.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, bb
    })();
    (Ob = Cb.prototype).forceSphericalPolynomialsRecompute ?? (Ob.forceSphericalPolynomialsRecompute = (0, tb.h)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(Cb.prototype, "sphericalPolynomial") || Object.defineProperty(Cb.prototype, "sphericalPolynomial", (0, tb.g)("BaseTexture", "sphericalPolynomial"))
  },
  42152: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => zb,
      f: () => mb
    });
    var eb = Mb(41675),
      Hb = Mb(41679),
      pb = Mb(38318),
      Vb = Mb(38285),
      gb = Mb(41671),
      lb = Mb(38333),
      Lb = Mb(41554),
      Ib = Mb(41565),
      Ob = Mb(41773),
      Ub = Mb(39001),
      tb = Mb(41734);

    function Cb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const eb = wb.width,
        Hb = wb.height;
      if (bb instanceof Float32Array) {
        let wb = bb.byteLength / bb.BYTES_PER_ELEMENT;
        const Mb = new Uint8Array(wb);
        for (; --wb >= 0;) {
          let eb = bb[wb];
          eb < 0 ? eb = 0 : eb > 1 && (eb = 1), Mb[wb] = 255 * eb
        }
        bb = Mb
      }
      const pb = document.createElement("canvas");
      pb.width = eb, pb.height = Hb;
      const Vb = pb.getContext("2d");
      if (!Vb) return null;
      const gb = Vb.createImageData(eb, Hb);
      if (gb.data.set(bb), Vb.putImageData(gb, 0, 0), Mb) {
        const bb = document.createElement("canvas");
        bb.width = eb, bb.height = Hb;
        const wb = bb.getContext("2d");
        return wb ? (wb.translate(0, Hb), wb.scale(1, -1), wb.drawImage(pb, 0, 0), bb.toDataURL("image/png")) : null
      }
      return pb.toDataURL("image/png")
    }

    function Eb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const eb = bb.getInternalTexture();
      if (!eb) return null;
      const Hb = bb._readPixelsSync(wb, Mb);
      return Hb ? Cb(Hb, bb.getSize(), eb.invertY) : null
    }
    async function Fb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const eb = bb.getInternalTexture();
      if (!eb) return null;
      const Hb = await bb.readPixels(wb, Mb);
      return Hb ? Cb(Hb, bb.getSize(), eb.invertY) : null
    }
    var Bb = Mb(42107),
      sb = Mb(41697);
    let mb = (() => {
        var bb;
        let wb, Mb, Cb, mb, hb, zb, Xb, xb, jb, Kb, rb, Rb, Db, cb = gb.b,
          Yb = [],
          Zb = [],
          fb = [],
          Ab = [],
          Wb = [],
          Jb = [],
          Sb = [],
          Nb = [],
          vb = [],
          Qb = [],
          Gb = [],
          qb = [],
          ab = [],
          ib = [],
          ub = [],
          db = [],
          Pb = [],
          nb = [],
          yb = [],
          ob = [],
          Tb = [],
          kb = [],
          bw = [],
          ww = [],
          Mw = [];
        return bb = class extends cb {
          static _CreateVideoTexture(wb, Mb, eb) {
            arguments.length > 5 && void 0 !== arguments[5] || bb.TRILINEAR_SAMPLINGMODE;
            throw (0, Lb.k)("VideoTexture")
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
          constructor(wb, Mb, Hb, Vb) {
            let gb, lb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : bb.TRILINEAR_SAMPLINGMODE,
              Lb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Ob = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              Ub = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              tb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              Cb = arguments.length > 9 ? arguments[9] : void 0,
              Eb = arguments.length > 10 ? arguments[10] : void 0,
              Fb = arguments.length > 11 ? arguments[11] : void 0,
              sb = arguments.length > 12 ? arguments[12] : void 0,
              mb = arguments.length > 13 ? arguments[13] : void 0;
            super(Mb), this.url = ((0, eb.m)(this, Yb), (0, eb.m)(this, Zb, null)), this.uOffset = ((0, eb.m)(this, fb), (0, eb.m)(this, Ab, 0)), this.vOffset = ((0, eb.m)(this, Wb), (0, eb.m)(this, Jb, 0)), this.uScale = ((0, eb.m)(this, Sb), (0, eb.m)(this, Nb, 1)), this.vScale = ((0, eb.m)(this, vb), (0, eb.m)(this, Qb, 1)), this.uAng = ((0, eb.m)(this, Gb), (0, eb.m)(this, qb, 0)), this.vAng = ((0, eb.m)(this, ab), (0, eb.m)(this, ib, 0)), this.wAng = ((0, eb.m)(this, ub), (0, eb.m)(this, db, 0)), this.uRotationCenter = ((0, eb.m)(this, Pb), (0, eb.m)(this, nb, .5)), this.vRotationCenter = ((0, eb.m)(this, yb), (0, eb.m)(this, ob, .5)), this.wRotationCenter = ((0, eb.m)(this, Tb), (0, eb.m)(this, kb, .5)), this.homogeneousRotationInUVTransform = ((0, eb.m)(this, bw), (0, eb.m)(this, ww, !1)), this.inspectableCustomProperties = ((0, eb.m)(this, Mw), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new pb.b, this._isBlocking = !0, this.name = wb || "", this.url = wb;
            let hb = !1,
              zb = null,
              Xb = !0;
            "object" === typeof Hb && null !== Hb ? (gb = Hb.noMipmap ?? !1, Vb = Hb.invertY ?? !Bb.d, lb = Hb.samplingMode ?? bb.TRILINEAR_SAMPLINGMODE, Lb = Hb.onLoad ?? null, Ob = Hb.onError ?? null, Ub = Hb.buffer ?? null, tb = Hb.deleteBuffer ?? !1, Cb = Hb.format, Eb = Hb.mimeType, Fb = Hb.loaderOptions, sb = Hb.creationFlags, hb = Hb.useSRGBBuffer ?? !1, zb = Hb.internalTexture ?? null, Xb = Hb.gammaSpace ?? Xb, mb = Hb.forcedExtension ?? mb) : gb = !!Hb, this._gammaSpace = Xb, this._noMipmap = gb, this._invertY = void 0 === Vb ? !Bb.d : Vb, this._initialSamplingMode = lb, this._buffer = Ub, this._deleteBuffer = tb, this._mimeType = Eb, this._loaderOptions = Fb, this._creationFlags = sb, this._useSRGBBuffer = hb, this._forcedExtension = mb, void 0 !== Cb && (this._format = Cb);
            const xb = this.RJ(),
              jb = this._getEngine();
            if (!jb) return;
            jb.onBeforeTextureInitObservable.notifyObservers(this);
            const Kb = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), Lb && Lb(), !this.isBlocking && xb && xb.resetCachedMaterial()
              },
              rb = (wb, Mb) => {
                this._loadingError = !0, this._errorObject = {
                  message: wb,
                  exception: Mb
                }, Ob && Ob(wb, Mb), bb.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !zb) return this._delayedOnLoad = Kb, void(this._delayedOnError = rb);
            if (this._texture = zb ?? this._getFromCache(this.url, gb, lb, this._invertY, hb, this.isCube), this._texture)
              if (this._texture.isReady) Ib.d.SetImmediate((() => Kb()));
              else {
                const bb = this._texture.onLoadedObservable.add(Kb);
                this._texture.onErrorObservable.add((wb => {
                  rb(wb.message, wb.exception), this._texture?.onLoadedObservable.remove(bb)
                }))
              }
            else if (xb && xb.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = Kb, this._delayedOnError = rb;
            else {
              try {
                this._texture = jb.createTexture(this.url, gb, this._invertY, xb, lb, Kb, rb, this._buffer, void 0, this._format, this._forcedExtension, Eb, Fb, sb, hb)
              } catch (Rb) {
                throw rb("error loading", Rb), Rb
              }
              tb && (this._buffer = null)
            }
          }
          updateURL(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Mb = arguments.length > 2 ? arguments[2] : void 0,
              eb = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.RJ().markAllMaterialsAsDirty(1, (bb => bb.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = bb), this.url = bb, this._buffer = wb, this._forcedExtension = eb, this.delayLoadState = 4;
            const Hb = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              Hb ? Hb() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), Mb && Mb()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const bb = this.RJ();
            if (!bb) return;
            let wb = this.url;
            !wb && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (wb = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(wb, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? Ib.d.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = bb.DC().createTexture(wb, this._noMipmap, this._invertY, bb, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(bb, wb, Mb, eb) {
            bb *= this._cachedUScale, wb *= this._cachedVScale, bb -= this.uRotationCenter * this._cachedUScale, wb -= this.vRotationCenter * this._cachedVScale, Mb -= this.wRotationCenter, Vb.o.TransformCoordinatesFromFloatsToRef(bb, wb, Mb, this._rowGenerationMatrix, eb), eb.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, eb.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, eb.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * bb === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * bb, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = Vb.b.Zero(), this._rowGenerationMatrix = new Vb.b, this._t0 = Vb.o.Zero(), this._t1 = Vb.o.Zero(), this._t2 = Vb.o.Zero()), Vb.b.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (Vb.b.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, Vb.j.Matrix[0]), Vb.b.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, Vb.j.Matrix[1]), Vb.b.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, Vb.j.Matrix[2]), Vb.b.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, Vb.j.Matrix[3]), Vb.j.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Vb.j.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Vb.j.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Vb.j.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.zpb(this._t0), this._t2.zpb(this._t0), Vb.b.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const wb = this.RJ();
            if (!wb) return this._cachedTextureMatrix;
            const Mb = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && Mb !== this._cachedIdentity3x2 && wb.markAllMaterialsAsDirty(1, (bb => bb.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const wb = this.RJ();
            if (!wb) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== bb.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === wb.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = Vb.b.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = Vb.b.Zero());
            const Mb = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case bb.PLANAR_MODE:
                Vb.b.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case bb.PROJECTION_MODE: {
                Vb.b.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const bb = wb.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = bb.updateFlag, bb.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                Vb.b.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return Mb && wb.markAllMaterialsAsDirty(1, (bb => bb.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const wb = {
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
            return sb.d.Clone((() => new bb(this._texture ? this._texture.url : null, this.RJ(), wb)), this)
          }
          serialize() {
            const wb = this.name;
            bb.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const Mb = super.serialize(bb._SerializeInternalTextureUniqueId);
            if (!Mb) return null;
            if (bb.SerializeBuffers || bb.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) Mb.base64String = this._buffer, Mb.name = Mb.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const bb = this.mimeType || "image/png";
              Mb.base64String = `data:${bb};base64,${(0,tb.h)(this._buffer)}`
            } else(bb.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (Mb.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? Eb(this) : Fb(this));
            return Mb.invertY = this._invertY, Mb.samplingMode = this.samplingMode, Mb._creationFlags = this._creationFlags, Mb._useSRGBBuffer = this._useSRGBBuffer, bb._SerializeInternalTextureUniqueId && (Mb.internalTextureUniqueId = this._texture?.uniqueId), Mb.internalTextureLabel = this._texture?.label, Mb.noMipmap = this._noMipmap, this.name = wb, Mb
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(wb, Mb, eb) {
            if (wb.customType) {
              const bb = Ob.e.Instantiate(wb.customType).Parse(wb, Mb, eb);
              return wb.samplingMode && bb.updateSamplingMode && bb._samplingMode && bb._samplingMode !== wb.samplingMode && bb.updateSamplingMode(wb.samplingMode), bb
            }
            if (wb.isCube && !wb.isRenderTarget) return bb._CubeTextureParser(wb, Mb, eb);
            const Hb = void 0 !== wb.internalTextureUniqueId;
            if (!wb.name && !wb.isRenderTarget && !Hb) return null;
            let pb;
            if (Hb) {
              const bb = Mb.DC().getLoadedTexturesCache();
              for (const Mb of bb)
                if (Mb.uniqueId === wb.internalTextureUniqueId) {
                  pb = Mb;
                  break
                }
            }
            const Vb = bb => {
              if (bb && bb._texture && (bb._texture._cachedWrapU = null, bb._texture._cachedWrapV = null, bb._texture._cachedWrapR = null), wb.samplingMode) {
                const Mb = wb.samplingMode;
                bb && bb.samplingMode !== Mb && bb.updateSamplingMode(Mb)
              }
              if (bb && wb.animations)
                for (let Mb = 0; Mb < wb.animations.length; Mb++) {
                  const eb = wb.animations[Mb],
                    Hb = (0, lb.c)("BABYLON.Animation");
                  Hb && bb.animations.push(Hb.Parse(eb))
                }
              bb && bb._texture && (Hb && !pb && bb._texture._setUniqueId(wb.internalTextureUniqueId), bb._texture.label = wb.internalTextureLabel)
            };
            return sb.d.Parse((() => {
              let Hb = !0;
              if (wb.noMipmap && (Hb = !1), wb.mirrorPlane) {
                const eb = bb._CreateMirror(wb.name, wb.renderTargetSize, Mb, Hb);
                return eb._waitingRenderList = wb.renderList, eb.mirrorPlane = Ub.d.FromArray(wb.mirrorPlane), Vb(eb), eb
              }
              if (wb.isRenderTarget && !wb.base64String) {
                let eb = null;
                if (wb.isCube) {
                  if (Mb.reflectionProbes)
                    for (let bb = 0; bb < Mb.reflectionProbes.length; bb++) {
                      const eb = Mb.reflectionProbes[bb];
                      if (eb.name === wb.name) return eb.cubeTexture
                    }
                } else eb = bb._CreateRenderTargetTexture(wb.name, wb.renderTargetSize, Mb, Hb, wb._creationFlags ?? 0), eb._waitingRenderList = wb.renderList;
                return Vb(eb), eb
              }
              if (wb.isVideo) {
                const pb = bb._CreateVideoTexture(eb + (wb.url || wb.name), eb + (wb.src || wb.url), Mb, Hb, wb.invertY, wb.samplingMode, wb.settings || {});
                return Vb(pb), pb
              } {
                let gb;
                if ("string" === typeof wb.base64String && wb.base64String && !pb) {
                  const eb = {
                      buffer: wb.base64String,
                      noMipmap: !Hb,
                      invertY: wb.invertY,
                      samplingMode: wb.samplingMode,
                      useSRGBBuffer: wb._useSRGBBuffer ?? !1,
                      creationFlags: wb._creationFlags ?? 0,
                      onLoad: () => {
                        Vb(gb)
                      }
                    },
                    pb = wb.base64String,
                    lb = pb.startsWith("data:") ? pb.substring(5) : pb;
                  gb = bb.CreateFromBase64String("", lb, Mb, eb), gb.name = wb.name
                } else {
                  let lb;
                  lb = wb.name && (wb.name.indexOf("://") > 0 || wb.name.startsWith("data:")) ? wb.name : eb + wb.name, wb.url && (wb.url.startsWith("data:") || bb.UseSerializedUrlIfAny) && (lb = wb.url);
                  const Lb = {
                    noMipmap: !Hb,
                    invertY: wb.invertY,
                    samplingMode: wb.samplingMode,
                    useSRGBBuffer: wb._useSRGBBuffer ?? !1,
                    creationFlags: wb._creationFlags ?? 0,
                    onLoad: () => {
                      Vb(gb)
                    },
                    internalTexture: pb
                  };
                  gb = new bb(lb, Mb, Lb)
                }
                return gb
              }
            }), wb, Mb)
          }
          static CreateFromBase64String(wb, Mb, eb, Hb, pb) {
            let Vb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : bb.TRILINEAR_SAMPLINGMODE;
            return new bb("data:" + Mb, eb, Hb, pb, Vb, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, wb, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(wb, Mb, eb) {
            let Hb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              pb = arguments.length > 4 ? arguments[4] : void 0,
              Vb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              gb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : bb.TRILINEAR_SAMPLINGMODE,
              lb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Lb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              Ib = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              Ob = arguments.length > 10 ? arguments[10] : void 0,
              Ub = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== wb.substring(0, 5) && (wb = "data:" + wb), new bb(wb, eb, pb, Vb, gb, lb, Lb, Mb, Hb, Ib, void 0, void 0, Ob, Ub)
          }
        }, (() => {
          const pb = "function" === typeof Symbol && Symbol.metadata ? Object.create(cb[Symbol.metadata] ?? null) : void 0;
          wb = [(0, Hb.E)()], Mb = [(0, Hb.E)()], Cb = [(0, Hb.E)()], mb = [(0, Hb.E)()], hb = [(0, Hb.E)()], zb = [(0, Hb.E)()], Xb = [(0, Hb.E)()], xb = [(0, Hb.E)()], jb = [(0, Hb.E)()], Kb = [(0, Hb.E)()], rb = [(0, Hb.E)()], Rb = [(0, Hb.E)()], Db = [(0, Hb.E)()], (0, eb.i)(bb, null, Db, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: bb => "isBlocking" in bb,
              get: bb => bb.isBlocking
            },
            metadata: pb
          }, null, Yb), (0, eb.i)(null, null, wb, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: bb => "url" in bb,
              get: bb => bb.url,
              set: (bb, wb) => {
                bb.url = wb
              }
            },
            metadata: pb
          }, Zb, fb), (0, eb.i)(null, null, Mb, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "uOffset" in bb,
              get: bb => bb.uOffset,
              set: (bb, wb) => {
                bb.uOffset = wb
              }
            },
            metadata: pb
          }, Ab, Wb), (0, eb.i)(null, null, Cb, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "vOffset" in bb,
              get: bb => bb.vOffset,
              set: (bb, wb) => {
                bb.vOffset = wb
              }
            },
            metadata: pb
          }, Jb, Sb), (0, eb.i)(null, null, mb, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: bb => "uScale" in bb,
              get: bb => bb.uScale,
              set: (bb, wb) => {
                bb.uScale = wb
              }
            },
            metadata: pb
          }, Nb, vb), (0, eb.i)(null, null, hb, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: bb => "vScale" in bb,
              get: bb => bb.vScale,
              set: (bb, wb) => {
                bb.vScale = wb
              }
            },
            metadata: pb
          }, Qb, Gb), (0, eb.i)(null, null, zb, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: bb => "uAng" in bb,
              get: bb => bb.uAng,
              set: (bb, wb) => {
                bb.uAng = wb
              }
            },
            metadata: pb
          }, qb, ab), (0, eb.i)(null, null, Xb, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: bb => "vAng" in bb,
              get: bb => bb.vAng,
              set: (bb, wb) => {
                bb.vAng = wb
              }
            },
            metadata: pb
          }, ib, ub), (0, eb.i)(null, null, xb, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: bb => "wAng" in bb,
              get: bb => bb.wAng,
              set: (bb, wb) => {
                bb.wAng = wb
              }
            },
            metadata: pb
          }, db, Pb), (0, eb.i)(null, null, jb, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: bb => "uRotationCenter" in bb,
              get: bb => bb.uRotationCenter,
              set: (bb, wb) => {
                bb.uRotationCenter = wb
              }
            },
            metadata: pb
          }, nb, yb), (0, eb.i)(null, null, Kb, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: bb => "vRotationCenter" in bb,
              get: bb => bb.vRotationCenter,
              set: (bb, wb) => {
                bb.vRotationCenter = wb
              }
            },
            metadata: pb
          }, ob, Tb), (0, eb.i)(null, null, rb, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: bb => "wRotationCenter" in bb,
              get: bb => bb.wRotationCenter,
              set: (bb, wb) => {
                bb.wRotationCenter = wb
              }
            },
            metadata: pb
          }, kb, bw), (0, eb.i)(null, null, Rb, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: bb => "homogeneousRotationInUVTransform" in bb,
              get: bb => bb.homogeneousRotationInUVTransform,
              set: (bb, wb) => {
                bb.homogeneousRotationInUVTransform = wb
              }
            },
            metadata: pb
          }, ww, Mw), pb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pb
          })
        })(), bb.SerializeBuffers = !0, bb.ForceSerializeBuffers = !1, bb.OnTextureLoadErrorObservable = new pb.b, bb._SerializeInternalTextureUniqueId = !1, bb._CubeTextureParser = (bb, wb, Mb) => {
          throw (0, Lb.k)("CubeTexture")
        }, bb._CreateMirror = (bb, wb, Mb, eb) => {
          throw (0, Lb.k)("MirrorTexture")
        }, bb._CreateRenderTargetTexture = (bb, wb, Mb, eb, Hb) => {
          throw (0, Lb.k)("RenderTargetTexture")
        }, bb.NEAREST_SAMPLINGMODE = 1, bb.NEAREST_NEAREST_MIPLINEAR = 8, bb.BILINEAR_SAMPLINGMODE = 2, bb.LINEAR_LINEAR_MIPNEAREST = 11, bb.TRILINEAR_SAMPLINGMODE = 3, bb.LINEAR_LINEAR_MIPLINEAR = 3, bb.NEAREST_NEAREST_MIPNEAREST = 4, bb.NEAREST_LINEAR_MIPNEAREST = 5, bb.NEAREST_LINEAR_MIPLINEAR = 6, bb.NEAREST_LINEAR = 7, bb.NEAREST_NEAREST = 1, bb.LINEAR_NEAREST_MIPNEAREST = 9, bb.LINEAR_NEAREST_MIPLINEAR = 10, bb.LINEAR_LINEAR = 2, bb.LINEAR_NEAREST = 12, bb.EXPLICIT_MODE = 0, bb.SPHERICAL_MODE = 1, bb.PLANAR_MODE = 2, bb.CUBIC_MODE = 3, bb.PROJECTION_MODE = 4, bb.SKYBOX_MODE = 5, bb.INVCUBIC_MODE = 6, bb.EQUIRECTANGULAR_MODE = 7, bb.FIXED_EQUIRECTANGULAR_MODE = 8, bb.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, bb.CLAMP_ADDRESSMODE = 0, bb.WRAP_ADDRESSMODE = 1, bb.MIRROR_ADDRESSMODE = 2, bb.UseSerializedUrlIfAny = !1, bb
      })(),
      hb = !1;

    function zb() {
      hb || (hb = !0, (0, lb.e)("BABYLON.Texture", mb), sb.d._TextureParser = mb.Parse)
    }
  },
  41693: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb
    });
    class eb {
      constructor(bb, wb) {
        this.width = bb, this.height = wb
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
      eZ(bb) {
        this.width = bb.width, this.height = bb.height
      }
      twb(bb, wb) {
        return this.width = bb, this.height = wb, this
      }
      set(bb, wb) {
        return this.twb(bb, wb)
      }
      multiplyByFloats(bb, wb) {
        return new eb(this.width * bb, this.height * wb)
      }
      clone() {
        return new eb(this.width, this.height)
      }
      equals(bb) {
        return !!bb && (this.width === bb.width && this.height === bb.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new eb(0, 0)
      }
      add(bb) {
        return new eb(this.width + bb.width, this.height + bb.height)
      }
      subtract(bb) {
        return new eb(this.width - bb.width, this.height - bb.height)
      }
      scale(bb) {
        return new eb(this.width * bb, this.height * bb)
      }
      static Lerp(bb, wb, Mb) {
        const Hb = bb.width + (wb.width - bb.width) * Mb,
          pb = bb.height + (wb.height - bb.height) * Mb;
        return new eb(Hb, pb)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);