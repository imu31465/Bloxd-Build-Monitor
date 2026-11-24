export const id = 260;
export const ids = [260];
export const modules = {
  40605: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op
    });
    let Op = !1
  },
  40195: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => yp
    });
    var Op = cp(40203),
      op = cp(40210),
      Ip = cp(37349),
      Sp = cp(37320),
      xp = cp(37345),
      Lp = cp(38124),
      Yp = cp(40225);
    class Dp {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(pp) {
        this._wrapU = pp
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(pp) {
        this._wrapV = pp
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(pp) {
        this._texture && (this._texture.isCube = pp)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(pp) {
        this._texture && (this._texture.is3D = pp)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(pp) {
        this._texture && (this._texture.is2DArray = pp)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(pp) {
        return void 0 !== pp?.shareDepth
      }
      constructor(pp) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = Yp.c.Zero(), this._cachedBaseSize = Yp.c.Zero(), this._initialSamplingMode = 2, this._texture = Dp._IsRenderTargetWrapper(pp) ? pp.texture : pp, this._texture && (this._engine = this._texture.gy(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(pp, this._texture, this._texture.generateMipMaps && ip)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var Ap, Pp = cp(40233),
      Wp = cp(40096);
    let yp = (() => {
      var pp;
      let ip, cp, Yp, Ap, Wp, yp, Up, wp, vp, tp, Hp, dp, ep, jp, kp, mp, Rp, qp, Mp, Cp, Ep, Xp, lp, Qp, Jp, Bp = Dp,
        Np = [],
        Tp = [],
        fp = [],
        bp = [],
        hp = [],
        ap = [],
        np = [],
        Fp = [],
        gp = [],
        Gp = [],
        rp = [],
        Zp = [],
        zp = [],
        sp = [],
        Kp = [],
        Vp = [],
        ii = [],
        ci = [],
        Oi = [],
        oi = [],
        Ii = [],
        Si = [],
        xi = [],
        Li = [],
        Yi = [],
        Di = [],
        Ai = [],
        Pi = [],
        Wi = [],
        yi = [],
        Ui = [];
      return pp = class extends Bp {
        set hasAlpha(pp) {
          this._hasAlpha = pp
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(pp) {
          this._getAlphaFromRGB !== pp && (this._getAlphaFromRGB = pp, this._scene && this._scene.markAllMaterialsAsDirty(1, (pp => pp.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(pp) {
          this._coordinatesIndex !== pp && (this._coordinatesIndex = pp, this._scene && this._scene.markAllMaterialsAsDirty(1, (pp => pp.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(pp) {
          this._coordinatesMode !== pp && (this._coordinatesMode = pp, this._scene && this._scene.markAllMaterialsAsDirty(1, (pp => pp.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(pp) {
          this._wrapU = pp
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(pp) {
          this._wrapV = pp
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(pp) {
          this._texture ? this._texture.isCube = pp : this._isCube = pp
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(pp) {
          this._texture && (this._texture.is3D = pp)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(pp) {
          this._texture && (this._texture.is2DArray = pp)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(pp) {
          if (this._texture) {
            if (this._texture._gammaSpace === pp) return;
            this._texture._gammaSpace = pp
          } else {
            if (this._gammaSpace === pp) return;
            this._gammaSpace = pp
          }
          this.Gl()?.markAllMaterialsAsDirty(1, (pp => pp.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(pp) {
          pp !== this.isRGBD && (this._texture && (this._texture._isRGBD = pp), this.Gl()?.markAllMaterialsAsDirty(1, (pp => pp.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(pp) {
          this._texture && (this._texture._lodGenerationOffset = pp)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(pp) {
          this._texture && (this._texture._lodGenerationScale = pp)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(pp) {
          this._texture && (this._texture._linearSpecularLOD = pp)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(pp) {
          this._texture && (this._texture._irradianceTexture = pp)
        }
        get uid() {
          return this._uid || (this._uid = (0, Lp.e)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(pp) {
          this._onDisposeObserver && this.Kl.remove(this._onDisposeObserver), this._onDisposeObserver = this.Kl.add(pp)
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
        constructor(ip) {
          let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, Op.l)(this, Np), (0, Op.l)(this, Tp, void 0)), this.name = ((0, Op.l)(this, fp), (0, Op.l)(this, bp, void 0)), this.displayName = ((0, Op.l)(this, hp), (0, Op.l)(this, ap, void 0)), this.metadata = ((0, Op.l)(this, np), (0, Op.l)(this, Fp, null)), this._internalMetadata = (0, Op.l)(this, gp), this.reservedDataStore = null, this._hasAlpha = (0, Op.l)(this, Gp, !1), this._getAlphaFromRGB = ((0, Op.l)(this, rp), (0, Op.l)(this, Zp, !1)), this.level = ((0, Op.l)(this, zp), (0, Op.l)(this, sp, 1)), this._coordinatesIndex = ((0, Op.l)(this, Kp), (0, Op.l)(this, Vp, 0)), this.optimizeUVAllocation = ((0, Op.l)(this, ii), (0, Op.l)(this, ci, !0)), this._coordinatesMode = ((0, Op.l)(this, Oi), (0, Op.l)(this, oi, 0)), this.wrapR = ((0, Op.l)(this, Ii), (0, Op.l)(this, Si, 1)), this.anisotropicFilteringLevel = ((0, Op.l)(this, xi), (0, Op.l)(this, Li, pp.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, Op.l)(this, Yi), !1), this._gammaSpace = !0, this.invertZ = (0, Op.l)(this, Di, !1), this.lodLevelInAlpha = ((0, Op.l)(this, Ai), (0, Op.l)(this, Pi, !1)), this._dominantDirection = ((0, Op.l)(this, Wi), null), this.isRenderTarget = (0, Op.l)(this, yi, !1), this._prefiltered = ((0, Op.l)(this, Ui), !1), this._forceSerialize = !1, this.animations = [], this.Kl = new Ip.d, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, ip ? pp._IsScene(ip) ? this._scene = ip : this._engine = ip : this._scene = xp.e.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.gy()), this._texture = cp, this._uid = null
        }
        Gl() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return Sp.b.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return Sp.b.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(pp) {}
        get canRescale() {
          return !1
        }
        _getFromCache(pp, ip, cp, Op, op, Ip) {
          const Sp = this._getEngine();
          if (!Sp) return null;
          const xp = Sp._getUseSRGBBuffer(!!op, ip),
            Lp = Sp.getLoadedTexturesCache();
          for (let Yp = 0; Yp < Lp.length; Yp++) {
            const Sp = Lp[Yp];
            if ((void 0 === op || xp === Sp._useSRGBBuffer) && (void 0 === Op || Op === Sp.invertY) && Sp.url === pp && Sp.generateMipMaps === !ip && (!cp || cp === Sp.samplingMode) && (void 0 === Ip || Ip === Sp.isCube)) return Sp.incrementReferences(), Sp
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
          const pp = this.Gl();
          pp && pp.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            Sp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            xp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            Lp = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const Yp = this._getEngine();
          if (!Yp) return null;
          const Dp = this.getSize();
          let Ap = Dp.width,
            Pp = Dp.height;
          0 !== ip && (Ap /= Math.pow(2, ip), Pp /= Math.pow(2, ip), Ap = Math.round(Ap), Pp = Math.round(Pp)), xp = Math.min(Ap, xp), Lp = Math.min(Pp, Lp);
          try {
            return this._texture.isCube || this._texture.is2DArray ? Yp._readTexturePixels(this._texture, xp, Lp, pp, ip, cp, Op, op, Ip, Sp) : Yp._readTexturePixels(this._texture, xp, Lp, -1, ip, cp, Op, op, Ip, Sp)
          } catch (Wp) {
            return null
          }
        }
        _readPixelsSync() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const Ip = this.getSize();
          let Sp = Ip.width,
            xp = Ip.height;
          const Lp = this._getEngine();
          if (!Lp) return null;
          0 != ip && (Sp /= Math.pow(2, ip), xp /= Math.pow(2, ip), Sp = Math.round(Sp), xp = Math.round(xp));
          try {
            return this._texture.isCube ? Lp._readTexturePixelsSync(this._texture, Sp, xp, pp, ip, cp, Op, op) : Lp._readTexturePixelsSync(this._texture, Sp, xp, -1, ip, cp, Op, op)
          } catch (Yp) {
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
            const pp = this._scene.textures.indexOf(this);
            if (pp >= 0 && this._scene.textures.splice(pp, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const pp = this._parentContainer.textures.indexOf(this);
              pp > -1 && this._parentContainer.textures.splice(pp, 1), this._parentContainer = null
            }
          }
          this.Kl.notifyObservers(this), this.Kl.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !pp) return null;
          const ip = Pp.c.Serialize(this);
          return Pp.c.AppendSerializedAnimations(this, ip), ip
        }
        static WhenAllReady(pp, ip) {
          let cp = pp.length;
          if (0 !== cp)
            for (let Op = 0; Op < pp.length; Op++) {
              const op = pp[Op];
              if (op.isReady()) 0 === --cp && ip();
              else {
                const pp = op.onLoadObservable;
                pp ? pp.addOnce((() => {
                  0 === --cp && ip()
                })) : 0 === --cp && ip()
              }
            } else ip()
        }
        static _IsScene(pp) {
          return "Scene" === pp.getClassName()
        }
      }, (() => {
        const Ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(Bp[Symbol.metadata] ?? null) : void 0;
        ip = [(0, op.K)()], cp = [(0, op.K)()], Yp = [(0, op.K)()], Ap = [(0, op.K)()], Wp = [(0, op.K)("hasAlpha")], yp = [(0, op.K)("getAlphaFromRGB")], Up = [(0, op.K)()], wp = [(0, op.K)("coordinatesIndex")], vp = [(0, op.K)()], tp = [(0, op.K)("coordinatesMode")], Hp = [(0, op.K)()], dp = [(0, op.K)()], ep = [(0, op.K)()], jp = [(0, op.K)()], kp = [(0, op.K)()], mp = [(0, op.K)()], Rp = [(0, op.K)()], qp = [(0, op.K)()], Mp = [(0, op.K)()], Cp = [(0, op.K)()], Ep = [(0, op.K)()], Xp = [(0, op.K)()], lp = [(0, op.K)()], Qp = [(0, op.C)()], Jp = [(0, op.K)()], (0, Op.j)(pp, null, Hp, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: pp => "wrapU" in pp,
            get: pp => pp.wrapU
          },
          metadata: Ip
        }, null, Np), (0, Op.j)(pp, null, dp, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: pp => "wrapV" in pp,
            get: pp => pp.wrapV
          },
          metadata: Ip
        }, null, Np), (0, Op.j)(pp, null, kp, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: pp => "isCube" in pp,
            get: pp => pp.isCube
          },
          metadata: Ip
        }, null, Np), (0, Op.j)(pp, null, mp, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: pp => "is3D" in pp,
            get: pp => pp.is3D
          },
          metadata: Ip
        }, null, Np), (0, Op.j)(pp, null, Rp, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: pp => "is2DArray" in pp,
            get: pp => pp.is2DArray
          },
          metadata: Ip
        }, null, Np), (0, Op.j)(pp, null, qp, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: pp => "gammaSpace" in pp,
            get: pp => pp.gammaSpace
          },
          metadata: Ip
        }, null, Np), (0, Op.j)(pp, null, Ep, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: pp => "lodGenerationOffset" in pp,
            get: pp => pp.lodGenerationOffset
          },
          metadata: Ip
        }, null, Np), (0, Op.j)(pp, null, Xp, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: pp => "lodGenerationScale" in pp,
            get: pp => pp.lodGenerationScale
          },
          metadata: Ip
        }, null, Np), (0, Op.j)(pp, null, lp, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: pp => "linearSpecularLOD" in pp,
            get: pp => pp.linearSpecularLOD
          },
          metadata: Ip
        }, null, Np), (0, Op.j)(pp, null, Qp, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "irradianceTexture" in pp,
            get: pp => pp.irradianceTexture
          },
          metadata: Ip
        }, null, Np), (0, Op.j)(null, null, ip, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: pp => "uniqueId" in pp,
            get: pp => pp.uniqueId,
            set: (pp, ip) => {
              pp.uniqueId = ip
            }
          },
          metadata: Ip
        }, Tp, fp), (0, Op.j)(null, null, cp, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: pp => "name" in pp,
            get: pp => pp.name,
            set: (pp, ip) => {
              pp.name = ip
            }
          },
          metadata: Ip
        }, bp, hp), (0, Op.j)(null, null, Yp, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: pp => "displayName" in pp,
            get: pp => pp.displayName,
            set: (pp, ip) => {
              pp.displayName = ip
            }
          },
          metadata: Ip
        }, ap, np), (0, Op.j)(null, null, Ap, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: pp => "metadata" in pp,
            get: pp => pp.metadata,
            set: (pp, ip) => {
              pp.metadata = ip
            }
          },
          metadata: Ip
        }, Fp, gp), (0, Op.j)(null, null, Wp, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: pp => "_hasAlpha" in pp,
            get: pp => pp._hasAlpha,
            set: (pp, ip) => {
              pp._hasAlpha = ip
            }
          },
          metadata: Ip
        }, Gp, rp), (0, Op.j)(null, null, yp, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: pp => "_getAlphaFromRGB" in pp,
            get: pp => pp._getAlphaFromRGB,
            set: (pp, ip) => {
              pp._getAlphaFromRGB = ip
            }
          },
          metadata: Ip
        }, Zp, zp), (0, Op.j)(null, null, Up, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: pp => "level" in pp,
            get: pp => pp.level,
            set: (pp, ip) => {
              pp.level = ip
            }
          },
          metadata: Ip
        }, sp, Kp), (0, Op.j)(null, null, wp, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: pp => "_coordinatesIndex" in pp,
            get: pp => pp._coordinatesIndex,
            set: (pp, ip) => {
              pp._coordinatesIndex = ip
            }
          },
          metadata: Ip
        }, Vp, ii), (0, Op.j)(null, null, vp, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: pp => "optimizeUVAllocation" in pp,
            get: pp => pp.optimizeUVAllocation,
            set: (pp, ip) => {
              pp.optimizeUVAllocation = ip
            }
          },
          metadata: Ip
        }, ci, Oi), (0, Op.j)(null, null, tp, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: pp => "_coordinatesMode" in pp,
            get: pp => pp._coordinatesMode,
            set: (pp, ip) => {
              pp._coordinatesMode = ip
            }
          },
          metadata: Ip
        }, oi, Ii), (0, Op.j)(null, null, ep, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: pp => "wrapR" in pp,
            get: pp => pp.wrapR,
            set: (pp, ip) => {
              pp.wrapR = ip
            }
          },
          metadata: Ip
        }, Si, xi), (0, Op.j)(null, null, jp, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: pp => "anisotropicFilteringLevel" in pp,
            get: pp => pp.anisotropicFilteringLevel,
            set: (pp, ip) => {
              pp.anisotropicFilteringLevel = ip
            }
          },
          metadata: Ip
        }, Li, Yi), (0, Op.j)(null, null, Mp, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: pp => "invertZ" in pp,
            get: pp => pp.invertZ,
            set: (pp, ip) => {
              pp.invertZ = ip
            }
          },
          metadata: Ip
        }, Di, Ai), (0, Op.j)(null, null, Cp, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: pp => "lodLevelInAlpha" in pp,
            get: pp => pp.lodLevelInAlpha,
            set: (pp, ip) => {
              pp.lodLevelInAlpha = ip
            }
          },
          metadata: Ip
        }, Pi, Wi), (0, Op.j)(null, null, Jp, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: pp => "isRenderTarget" in pp,
            get: pp => pp.isRenderTarget,
            set: (pp, ip) => {
              pp.isRenderTarget = ip
            }
          },
          metadata: Ip
        }, yi, Ui), Ip && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ip
        })
      })(), pp.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, pp
    })();
    (Ap = yp.prototype).forceSphericalPolynomialsRecompute ?? (Ap.forceSphericalPolynomialsRecompute = (0, Wp.k)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(yp.prototype, "sphericalPolynomial") || Object.defineProperty(yp.prototype, "sphericalPolynomial", (0, Wp.h)("BaseTexture", "sphericalPolynomial"))
  },
  40654: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => ep,
      d: () => Hp
    });
    var Op = cp(40203),
      op = cp(40210),
      Ip = cp(37349),
      Sp = cp(37320),
      xp = cp(40195),
      Lp = cp(37368),
      Yp = cp(40096),
      Dp = cp(40107),
      Ap = cp(40306),
      Pp = cp(37989),
      Wp = cp(40269);

    function yp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Op = ip.width,
        op = ip.height;
      if (pp instanceof Float32Array) {
        let ip = pp.byteLength / pp.BYTES_PER_ELEMENT;
        const cp = new Uint8Array(ip);
        for (; --ip >= 0;) {
          let Op = pp[ip];
          Op < 0 ? Op = 0 : Op > 1 && (Op = 1), cp[ip] = 255 * Op
        }
        pp = cp
      }
      const Ip = document.createElement("canvas");
      Ip.width = Op, Ip.height = op;
      const Sp = Ip.getContext("2d");
      if (!Sp) return null;
      const xp = Sp.createImageData(Op, op);
      if (xp.data.set(pp), Sp.putImageData(xp, 0, 0), cp) {
        const pp = document.createElement("canvas");
        pp.width = Op, pp.height = op;
        const ip = pp.getContext("2d");
        return ip ? (ip.translate(0, op), ip.scale(1, -1), ip.drawImage(Ip, 0, 0), pp.toDataURL("image/png")) : null
      }
      return Ip.toDataURL("image/png")
    }

    function Up(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Op = pp.getInternalTexture();
      if (!Op) return null;
      const op = pp._readPixelsSync(ip, cp);
      return op ? yp(op, pp.getSize(), Op.invertY) : null
    }
    async function wp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Op = pp.getInternalTexture();
      if (!Op) return null;
      const op = await pp.readPixels(ip, cp);
      return op ? yp(op, pp.getSize(), Op.invertY) : null
    }
    var vp = cp(40605),
      tp = cp(40233);
    let Hp = (() => {
        var pp;
        let ip, cp, yp, Hp, dp, ep, jp, kp, mp, Rp, qp, Mp, Cp, Ep = xp.d,
          Xp = [],
          lp = [],
          Qp = [],
          Jp = [],
          Bp = [],
          Np = [],
          Tp = [],
          fp = [],
          bp = [],
          hp = [],
          ap = [],
          np = [],
          Fp = [],
          gp = [],
          Gp = [],
          rp = [],
          Zp = [],
          zp = [],
          sp = [],
          Kp = [],
          Vp = [],
          ii = [],
          ci = [],
          Oi = [],
          oi = [];
        return pp = class extends Ep {
          static _CreateVideoTexture(ip, cp, Op) {
            arguments.length > 5 && void 0 !== arguments[5] || pp.TRILINEAR_SAMPLINGMODE;
            throw (0, Yp.o)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(pp) {
            this._isBlocking = pp
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(ip, cp, op, Sp) {
            let xp, Lp = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : pp.TRILINEAR_SAMPLINGMODE,
              Yp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Ap = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              Pp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Wp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              yp = arguments.length > 9 ? arguments[9] : void 0,
              Up = arguments.length > 10 ? arguments[10] : void 0,
              wp = arguments.length > 11 ? arguments[11] : void 0,
              tp = arguments.length > 12 ? arguments[12] : void 0,
              Hp = arguments.length > 13 ? arguments[13] : void 0;
            super(cp), this.url = ((0, Op.l)(this, Xp), (0, Op.l)(this, lp, null)), this.uOffset = ((0, Op.l)(this, Qp), (0, Op.l)(this, Jp, 0)), this.vOffset = ((0, Op.l)(this, Bp), (0, Op.l)(this, Np, 0)), this.uScale = ((0, Op.l)(this, Tp), (0, Op.l)(this, fp, 1)), this.vScale = ((0, Op.l)(this, bp), (0, Op.l)(this, hp, 1)), this.uAng = ((0, Op.l)(this, ap), (0, Op.l)(this, np, 0)), this.vAng = ((0, Op.l)(this, Fp), (0, Op.l)(this, gp, 0)), this.wAng = ((0, Op.l)(this, Gp), (0, Op.l)(this, rp, 0)), this.uRotationCenter = ((0, Op.l)(this, Zp), (0, Op.l)(this, zp, .5)), this.vRotationCenter = ((0, Op.l)(this, sp), (0, Op.l)(this, Kp, .5)), this.wRotationCenter = ((0, Op.l)(this, Vp), (0, Op.l)(this, ii, .5)), this.homogeneousRotationInUVTransform = ((0, Op.l)(this, ci), (0, Op.l)(this, Oi, !1)), this.inspectableCustomProperties = ((0, Op.l)(this, oi), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new Ip.d, this._isBlocking = !0, this.name = ip || "", this.url = ip;
            let dp = !1,
              ep = null,
              jp = !0;
            "object" === typeof op && null !== op ? (xp = op.noMipmap ?? !1, Sp = op.invertY ?? !vp.c, Lp = op.samplingMode ?? pp.TRILINEAR_SAMPLINGMODE, Yp = op.onLoad ?? null, Ap = op.onError ?? null, Pp = op.buffer ?? null, Wp = op.deleteBuffer ?? !1, yp = op.format, Up = op.mimeType, wp = op.loaderOptions, tp = op.creationFlags, dp = op.useSRGBBuffer ?? !1, ep = op.internalTexture ?? null, jp = op.gammaSpace ?? jp, Hp = op.forcedExtension ?? Hp) : xp = !!op, this._gammaSpace = jp, this._noMipmap = xp, this._invertY = void 0 === Sp ? !vp.c : Sp, this._initialSamplingMode = Lp, this._buffer = Pp, this._deleteBuffer = Wp, this._mimeType = Up, this._loaderOptions = wp, this._creationFlags = tp, this._useSRGBBuffer = dp, this._forcedExtension = Hp, void 0 !== yp && (this._format = yp);
            const kp = this.Gl(),
              mp = this._getEngine();
            if (!mp) return;
            mp.onBeforeTextureInitObservable.notifyObservers(this);
            const Rp = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), Yp && Yp(), !this.isBlocking && kp && kp.resetCachedMaterial()
              },
              qp = (ip, cp) => {
                this._loadingError = !0, this._errorObject = {
                  message: ip,
                  exception: cp
                }, Ap && Ap(ip, cp), pp.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !ep) return this._delayedOnLoad = Rp, void(this._delayedOnError = qp);
            if (this._texture = ep ?? this._getFromCache(this.url, xp, Lp, this._invertY, dp, this.isCube), this._texture)
              if (this._texture.isReady) Dp.b.SetImmediate((() => Rp()));
              else {
                const pp = this._texture.onLoadedObservable.add(Rp);
                this._texture.onErrorObservable.add((ip => {
                  qp(ip.message, ip.exception), this._texture?.onLoadedObservable.remove(pp)
                }))
              }
            else if (kp && kp.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = Rp, this._delayedOnError = qp;
            else {
              try {
                this._texture = mp.createTexture(this.url, xp, this._invertY, kp, Lp, Rp, qp, this._buffer, void 0, this._format, this._forcedExtension, Up, wp, tp, dp)
              } catch (Mp) {
                throw qp("error loading", Mp), Mp
              }
              Wp && (this._buffer = null)
            }
          }
          updateURL(pp) {
            let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              cp = arguments.length > 2 ? arguments[2] : void 0,
              Op = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.Gl().markAllMaterialsAsDirty(1, (pp => pp.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = pp), this.url = pp, this._buffer = ip, this._forcedExtension = Op, this.delayLoadState = 4;
            const op = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              op ? op() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), cp && cp()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const pp = this.Gl();
            if (!pp) return;
            let ip = this.url;
            !ip && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (ip = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(ip, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? Dp.b.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = pp.gy().createTexture(ip, this._noMipmap, this._invertY, pp, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(pp, ip, cp, Op) {
            pp *= this._cachedUScale, ip *= this._cachedVScale, pp -= this.uRotationCenter * this._cachedUScale, ip -= this.vRotationCenter * this._cachedVScale, cp -= this.wRotationCenter, Sp.o.TransformCoordinatesFromFloatsToRef(pp, ip, cp, this._rowGenerationMatrix, Op), Op.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, Op.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, Op.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * pp === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * pp, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = Sp.b.Zero(), this._rowGenerationMatrix = new Sp.b, this._t0 = Sp.o.Zero(), this._t1 = Sp.o.Zero(), this._t2 = Sp.o.Zero()), Sp.b.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (Sp.b.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, Sp.i.Matrix[0]), Sp.b.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, Sp.i.Matrix[1]), Sp.b.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, Sp.i.Matrix[2]), Sp.b.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, Sp.i.Matrix[3]), Sp.i.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Sp.i.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Sp.i.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(Sp.i.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.Iop(this._t0), this._t2.Iop(this._t0), Sp.b.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const ip = this.Gl();
            if (!ip) return this._cachedTextureMatrix;
            const cp = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && cp !== this._cachedIdentity3x2 && ip.markAllMaterialsAsDirty(1, (pp => pp.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const ip = this.Gl();
            if (!ip) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== pp.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === ip.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = Sp.b.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = Sp.b.Zero());
            const cp = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case pp.PLANAR_MODE:
                Sp.b.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case pp.PROJECTION_MODE: {
                Sp.b.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const pp = ip.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = pp.updateFlag, pp.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                Sp.b.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return cp && ip.markAllMaterialsAsDirty(1, (pp => pp.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const ip = {
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
            return tp.c.Clone((() => new pp(this._texture ? this._texture.url : null, this.Gl(), ip)), this)
          }
          serialize() {
            const ip = this.name;
            pp.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const cp = super.serialize(pp._SerializeInternalTextureUniqueId);
            if (!cp) return null;
            if (pp.SerializeBuffers || pp.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) cp.base64String = this._buffer, cp.name = cp.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const pp = this.mimeType || "image/png";
              cp.base64String = `data:${pp};base64,${(0,Wp.i)(this._buffer)}`
            } else(pp.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (cp.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? Up(this) : wp(this));
            return cp.invertY = this._invertY, cp.samplingMode = this.samplingMode, cp._creationFlags = this._creationFlags, cp._useSRGBBuffer = this._useSRGBBuffer, pp._SerializeInternalTextureUniqueId && (cp.internalTextureUniqueId = this._texture?.uniqueId), cp.internalTextureLabel = this._texture?.label, cp.noMipmap = this._noMipmap, this.name = ip, cp
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(ip, cp, Op) {
            if (ip.customType) {
              const pp = Ap.d.Instantiate(ip.customType).Parse(ip, cp, Op);
              return ip.samplingMode && pp.updateSamplingMode && pp._samplingMode && pp._samplingMode !== ip.samplingMode && pp.updateSamplingMode(ip.samplingMode), pp
            }
            if (ip.isCube && !ip.isRenderTarget) return pp._CubeTextureParser(ip, cp, Op);
            const op = void 0 !== ip.internalTextureUniqueId;
            if (!ip.name && !ip.isRenderTarget && !op) return null;
            let Ip;
            if (op) {
              const pp = cp.gy().getLoadedTexturesCache();
              for (const cp of pp)
                if (cp.uniqueId === ip.internalTextureUniqueId) {
                  Ip = cp;
                  break
                }
            }
            const Sp = pp => {
              if (pp && pp._texture && (pp._texture._cachedWrapU = null, pp._texture._cachedWrapV = null, pp._texture._cachedWrapR = null), ip.samplingMode) {
                const cp = ip.samplingMode;
                pp && pp.samplingMode !== cp && pp.updateSamplingMode(cp)
              }
              if (pp && ip.animations)
                for (let cp = 0; cp < ip.animations.length; cp++) {
                  const Op = ip.animations[cp],
                    op = (0, Lp.d)("BABYLON.Animation");
                  op && pp.animations.push(op.Parse(Op))
                }
              pp && pp._texture && (op && !Ip && pp._texture._setUniqueId(ip.internalTextureUniqueId), pp._texture.label = ip.internalTextureLabel)
            };
            return tp.c.Parse((() => {
              let op = !0;
              if (ip.noMipmap && (op = !1), ip.mirrorPlane) {
                const Op = pp._CreateMirror(ip.name, ip.renderTargetSize, cp, op);
                return Op._waitingRenderList = ip.renderList, Op.mirrorPlane = Pp.e.FromArray(ip.mirrorPlane), Sp(Op), Op
              }
              if (ip.isRenderTarget && !ip.base64String) {
                let Op = null;
                if (ip.isCube) {
                  if (cp.reflectionProbes)
                    for (let pp = 0; pp < cp.reflectionProbes.length; pp++) {
                      const Op = cp.reflectionProbes[pp];
                      if (Op.name === ip.name) return Op.cubeTexture
                    }
                } else Op = pp._CreateRenderTargetTexture(ip.name, ip.renderTargetSize, cp, op, ip._creationFlags ?? 0), Op._waitingRenderList = ip.renderList;
                return Sp(Op), Op
              }
              if (ip.isVideo) {
                const Ip = pp._CreateVideoTexture(Op + (ip.url || ip.name), Op + (ip.src || ip.url), cp, op, ip.invertY, ip.samplingMode, ip.settings || {});
                return Sp(Ip), Ip
              } {
                let xp;
                if ("string" === typeof ip.base64String && ip.base64String && !Ip) {
                  const Op = {
                      buffer: ip.base64String,
                      noMipmap: !op,
                      invertY: ip.invertY,
                      samplingMode: ip.samplingMode,
                      useSRGBBuffer: ip._useSRGBBuffer ?? !1,
                      creationFlags: ip._creationFlags ?? 0,
                      onLoad: () => {
                        Sp(xp)
                      }
                    },
                    Ip = ip.base64String,
                    Lp = Ip.startsWith("data:") ? Ip.substring(5) : Ip;
                  xp = pp.CreateFromBase64String("", Lp, cp, Op), xp.name = ip.name
                } else {
                  let Lp;
                  Lp = ip.name && (ip.name.indexOf("://") > 0 || ip.name.startsWith("data:")) ? ip.name : Op + ip.name, ip.url && (ip.url.startsWith("data:") || pp.UseSerializedUrlIfAny) && (Lp = ip.url);
                  const Yp = {
                    noMipmap: !op,
                    invertY: ip.invertY,
                    samplingMode: ip.samplingMode,
                    useSRGBBuffer: ip._useSRGBBuffer ?? !1,
                    creationFlags: ip._creationFlags ?? 0,
                    onLoad: () => {
                      Sp(xp)
                    },
                    internalTexture: Ip
                  };
                  xp = new pp(Lp, cp, Yp)
                }
                return xp
              }
            }), ip, cp)
          }
          static CreateFromBase64String(ip, cp, Op, op, Ip) {
            let Sp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : pp.TRILINEAR_SAMPLINGMODE;
            return new pp("data:" + cp, Op, op, Ip, Sp, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, ip, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(ip, cp, Op) {
            let op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Ip = arguments.length > 4 ? arguments[4] : void 0,
              Sp = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              xp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : pp.TRILINEAR_SAMPLINGMODE,
              Lp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Yp = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              Dp = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              Ap = arguments.length > 10 ? arguments[10] : void 0,
              Pp = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== ip.substring(0, 5) && (ip = "data:" + ip), new pp(ip, Op, Ip, Sp, xp, Lp, Yp, cp, op, Dp, void 0, void 0, Ap, Pp)
          }
        }, (() => {
          const Ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ep[Symbol.metadata] ?? null) : void 0;
          ip = [(0, op.K)()], cp = [(0, op.K)()], yp = [(0, op.K)()], Hp = [(0, op.K)()], dp = [(0, op.K)()], ep = [(0, op.K)()], jp = [(0, op.K)()], kp = [(0, op.K)()], mp = [(0, op.K)()], Rp = [(0, op.K)()], qp = [(0, op.K)()], Mp = [(0, op.K)()], Cp = [(0, op.K)()], (0, Op.j)(pp, null, Cp, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: pp => "isBlocking" in pp,
              get: pp => pp.isBlocking
            },
            metadata: Ip
          }, null, Xp), (0, Op.j)(null, null, ip, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: pp => "url" in pp,
              get: pp => pp.url,
              set: (pp, ip) => {
                pp.url = ip
              }
            },
            metadata: Ip
          }, lp, Qp), (0, Op.j)(null, null, cp, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: pp => "uOffset" in pp,
              get: pp => pp.uOffset,
              set: (pp, ip) => {
                pp.uOffset = ip
              }
            },
            metadata: Ip
          }, Jp, Bp), (0, Op.j)(null, null, yp, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: pp => "vOffset" in pp,
              get: pp => pp.vOffset,
              set: (pp, ip) => {
                pp.vOffset = ip
              }
            },
            metadata: Ip
          }, Np, Tp), (0, Op.j)(null, null, Hp, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: pp => "uScale" in pp,
              get: pp => pp.uScale,
              set: (pp, ip) => {
                pp.uScale = ip
              }
            },
            metadata: Ip
          }, fp, bp), (0, Op.j)(null, null, dp, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: pp => "vScale" in pp,
              get: pp => pp.vScale,
              set: (pp, ip) => {
                pp.vScale = ip
              }
            },
            metadata: Ip
          }, hp, ap), (0, Op.j)(null, null, ep, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: pp => "uAng" in pp,
              get: pp => pp.uAng,
              set: (pp, ip) => {
                pp.uAng = ip
              }
            },
            metadata: Ip
          }, np, Fp), (0, Op.j)(null, null, jp, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: pp => "vAng" in pp,
              get: pp => pp.vAng,
              set: (pp, ip) => {
                pp.vAng = ip
              }
            },
            metadata: Ip
          }, gp, Gp), (0, Op.j)(null, null, kp, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: pp => "wAng" in pp,
              get: pp => pp.wAng,
              set: (pp, ip) => {
                pp.wAng = ip
              }
            },
            metadata: Ip
          }, rp, Zp), (0, Op.j)(null, null, mp, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: pp => "uRotationCenter" in pp,
              get: pp => pp.uRotationCenter,
              set: (pp, ip) => {
                pp.uRotationCenter = ip
              }
            },
            metadata: Ip
          }, zp, sp), (0, Op.j)(null, null, Rp, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: pp => "vRotationCenter" in pp,
              get: pp => pp.vRotationCenter,
              set: (pp, ip) => {
                pp.vRotationCenter = ip
              }
            },
            metadata: Ip
          }, Kp, Vp), (0, Op.j)(null, null, qp, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: pp => "wRotationCenter" in pp,
              get: pp => pp.wRotationCenter,
              set: (pp, ip) => {
                pp.wRotationCenter = ip
              }
            },
            metadata: Ip
          }, ii, ci), (0, Op.j)(null, null, Mp, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: pp => "homogeneousRotationInUVTransform" in pp,
              get: pp => pp.homogeneousRotationInUVTransform,
              set: (pp, ip) => {
                pp.homogeneousRotationInUVTransform = ip
              }
            },
            metadata: Ip
          }, Oi, oi), Ip && Object.defineProperty(pp, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ip
          })
        })(), pp.SerializeBuffers = !0, pp.ForceSerializeBuffers = !1, pp.OnTextureLoadErrorObservable = new Ip.d, pp._SerializeInternalTextureUniqueId = !1, pp._CubeTextureParser = (pp, ip, cp) => {
          throw (0, Yp.o)("CubeTexture")
        }, pp._CreateMirror = (pp, ip, cp, Op) => {
          throw (0, Yp.o)("MirrorTexture")
        }, pp._CreateRenderTargetTexture = (pp, ip, cp, Op, op) => {
          throw (0, Yp.o)("RenderTargetTexture")
        }, pp.NEAREST_SAMPLINGMODE = 1, pp.NEAREST_NEAREST_MIPLINEAR = 8, pp.BILINEAR_SAMPLINGMODE = 2, pp.LINEAR_LINEAR_MIPNEAREST = 11, pp.TRILINEAR_SAMPLINGMODE = 3, pp.LINEAR_LINEAR_MIPLINEAR = 3, pp.NEAREST_NEAREST_MIPNEAREST = 4, pp.NEAREST_LINEAR_MIPNEAREST = 5, pp.NEAREST_LINEAR_MIPLINEAR = 6, pp.NEAREST_LINEAR = 7, pp.NEAREST_NEAREST = 1, pp.LINEAR_NEAREST_MIPNEAREST = 9, pp.LINEAR_NEAREST_MIPLINEAR = 10, pp.LINEAR_LINEAR = 2, pp.LINEAR_NEAREST = 12, pp.EXPLICIT_MODE = 0, pp.SPHERICAL_MODE = 1, pp.PLANAR_MODE = 2, pp.CUBIC_MODE = 3, pp.PROJECTION_MODE = 4, pp.SKYBOX_MODE = 5, pp.INVCUBIC_MODE = 6, pp.EQUIRECTANGULAR_MODE = 7, pp.FIXED_EQUIRECTANGULAR_MODE = 8, pp.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, pp.CLAMP_ADDRESSMODE = 0, pp.WRAP_ADDRESSMODE = 1, pp.MIRROR_ADDRESSMODE = 2, pp.UseSerializedUrlIfAny = !1, pp
      })(),
      dp = !1;

    function ep() {
      dp || (dp = !0, (0, Lp.g)("BABYLON.Texture", Hp), tp.c._TextureParser = Hp.Parse)
    }
  },
  40225: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op
    });
    class Op {
      constructor(pp, ip) {
        this.width = pp, this.height = ip
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let pp = 0 | this.width;
        return pp = 397 * pp ^ this.height, pp
      }
      rM(pp) {
        this.width = pp.width, this.height = pp.height
      }
      i5(pp, ip) {
        return this.width = pp, this.height = ip, this
      }
      set(pp, ip) {
        return this.i5(pp, ip)
      }
      multiplyByFloats(pp, ip) {
        return new Op(this.width * pp, this.height * ip)
      }
      clone() {
        return new Op(this.width, this.height)
      }
      equals(pp) {
        return !!pp && (this.width === pp.width && this.height === pp.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new Op(0, 0)
      }
      add(pp) {
        return new Op(this.width + pp.width, this.height + pp.height)
      }
      subtract(pp) {
        return new Op(this.width - pp.width, this.height - pp.height)
      }
      scale(pp) {
        return new Op(this.width * pp, this.height * pp)
      }
      static Lerp(pp, ip, cp) {
        const op = pp.width + (ip.width - pp.width) * cp,
          Ip = pp.height + (ip.height - pp.height) * cp;
        return new Op(op, Ip)
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);