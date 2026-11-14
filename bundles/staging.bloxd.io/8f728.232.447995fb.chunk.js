export const id = 232;
export const ids = [232];
export const modules = {
  38448: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc
    });
    let Vc = !1
  },
  38033: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => mB
    });
    var Vc = nc(38035),
      Ic = nc(38043),
      rB = nc(35783),
      uc = nc(35756),
      sc = nc(35780),
      Mc = nc(36472),
      Pc = nc(38060);
    class qB {
      get wrapU() {
        return this._wrapU
      }
      set wrapU(cB) {
        this._wrapU = cB
      }
      get wrapV() {
        return this._wrapV
      }
      set wrapV(cB) {
        this._wrapV = cB
      }
      get coordinatesMode() {
        return 0
      }
      get isCube() {
        return !!this._texture && this._texture.isCube
      }
      set isCube(cB) {
        this._texture && (this._texture.isCube = cB)
      }
      get is3D() {
        return !!this._texture && this._texture.is3D
      }
      set is3D(cB) {
        this._texture && (this._texture.is3D = cB)
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray
      }
      set is2DArray(cB) {
        this._texture && (this._texture.is2DArray = cB)
      }
      getClassName() {
        return "ThinTexture"
      }
      static _IsRenderTargetWrapper(cB) {
        return void 0 !== cB?.shareDepth
      }
      constructor(cB) {
        this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = Pc.c.Zero(), this._cachedBaseSize = Pc.c.Zero(), this._initialSamplingMode = 2, this._texture = qB._IsRenderTargetWrapper(cB) ? cB.texture : cB, this._texture && (this._engine = this._texture.RV(), this.wrapU = this._texture._cachedWrapU ?? this.wrapU, this.wrapV = this._texture._cachedWrapV ?? this.wrapV, this.wrapR = this._texture._cachedWrapR ?? this.wrapR)
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
      updateSamplingMode(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(cB, this._texture, this._texture.generateMipMaps && Bc)
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null)
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null)
      }
    }
    var Oc, Tc = nc(38068),
      fc = nc(37953);
    let mB = (() => {
      var cB;
      let Bc, nc, Pc, Oc, fc, mB, ec, tB, Sc, yB, zB, pc, hc, aB, lc, Yc, Lc, gB, Uc, bB, Zc, Qc, Cc, vB, Dc, Nc = qB,
        Ec = [],
        oc = [],
        Wc = [],
        wc = [],
        kB = [],
        Xc = [],
        Hc = [],
        Fc = [],
        Jc = [],
        jB = [],
        Rc = [],
        iB = [],
        Kc = [],
        xB = [],
        dc = [],
        Ac = [],
        Gc = [],
        cn = [],
        BB = [],
        nB = [],
        VB = [],
        IB = [],
        rn = [],
        uB = [],
        sB = [],
        MB = [],
        PB = [],
        qn = [],
        OB = [],
        TB = [],
        fB = [];
      return cB = class extends Nc {
        set hasAlpha(cB) {
          this._hasAlpha = cB
        }
        get hasAlpha() {
          return this._hasAlpha
        }
        set getAlphaFromRGB(cB) {
          this._getAlphaFromRGB !== cB && (this._getAlphaFromRGB = cB, this._scene && this._scene.markAllMaterialsAsDirty(1, (cB => cB.hasTexture(this))))
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB
        }
        set coordinatesIndex(cB) {
          this._coordinatesIndex !== cB && (this._coordinatesIndex = cB, this._scene && this._scene.markAllMaterialsAsDirty(1, (cB => cB.hasTexture(this))))
        }
        get coordinatesIndex() {
          return this._coordinatesIndex
        }
        set coordinatesMode(cB) {
          this._coordinatesMode !== cB && (this._coordinatesMode = cB, this._scene && this._scene.markAllMaterialsAsDirty(1, (cB => cB.hasTexture(this))))
        }
        get coordinatesMode() {
          return this._coordinatesMode
        }
        get wrapU() {
          return this._wrapU
        }
        set wrapU(cB) {
          this._wrapU = cB
        }
        get wrapV() {
          return this._wrapV
        }
        set wrapV(cB) {
          this._wrapV = cB
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube
        }
        set isCube(cB) {
          this._texture ? this._texture.isCube = cB : this._isCube = cB
        }
        get is3D() {
          return !!this._texture && this._texture.is3D
        }
        set is3D(cB) {
          this._texture && (this._texture.is3D = cB)
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray
        }
        set is2DArray(cB) {
          this._texture && (this._texture.is2DArray = cB)
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
        }
        set gammaSpace(cB) {
          if (this._texture) {
            if (this._texture._gammaSpace === cB) return;
            this._texture._gammaSpace = cB
          } else {
            if (this._gammaSpace === cB) return;
            this._gammaSpace = cB
          }
          this.knc()?.markAllMaterialsAsDirty(1, (cB => cB.hasTexture(this)))
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD
        }
        set isRGBD(cB) {
          cB !== this.isRGBD && (this._texture && (this._texture._isRGBD = cB), this.knc()?.markAllMaterialsAsDirty(1, (cB => cB.hasTexture(this))))
        }
        get noMipmap() {
          return !1
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0
        }
        set lodGenerationOffset(cB) {
          this._texture && (this._texture._lodGenerationOffset = cB)
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0
        }
        set lodGenerationScale(cB) {
          this._texture && (this._texture._lodGenerationScale = cB)
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD
        }
        set linearSpecularLOD(cB) {
          this._texture && (this._texture._linearSpecularLOD = cB)
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null
        }
        set irradianceTexture(cB) {
          this._texture && (this._texture._irradianceTexture = cB)
        }
        get uid() {
          return this._uid || (this._uid = (0, Mc.d)()), this._uid
        }
        toString() {
          return this.name
        }
        getClassName() {
          return "BaseTexture"
        }
        set onDispose(cB) {
          this._onDisposeObserver && this.XBc.remove(this._onDisposeObserver), this._onDisposeObserver = this.XBc.add(cB)
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
        constructor(Bc) {
          let nc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, Vc.k)(this, Ec), (0, Vc.k)(this, oc, void 0)), this.name = ((0, Vc.k)(this, Wc), (0, Vc.k)(this, wc, void 0)), this.displayName = ((0, Vc.k)(this, kB), (0, Vc.k)(this, Xc, void 0)), this.metadata = ((0, Vc.k)(this, Hc), (0, Vc.k)(this, Fc, null)), this._internalMetadata = (0, Vc.k)(this, Jc), this.reservedDataStore = null, this._hasAlpha = (0, Vc.k)(this, jB, !1), this._getAlphaFromRGB = ((0, Vc.k)(this, Rc), (0, Vc.k)(this, iB, !1)), this.level = ((0, Vc.k)(this, Kc), (0, Vc.k)(this, xB, 1)), this._coordinatesIndex = ((0, Vc.k)(this, dc), (0, Vc.k)(this, Ac, 0)), this.optimizeUVAllocation = ((0, Vc.k)(this, Gc), (0, Vc.k)(this, cn, !0)), this._coordinatesMode = ((0, Vc.k)(this, BB), (0, Vc.k)(this, nB, 0)), this.wrapR = ((0, Vc.k)(this, VB), (0, Vc.k)(this, IB, 1)), this.anisotropicFilteringLevel = ((0, Vc.k)(this, rn), (0, Vc.k)(this, uB, cB.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, Vc.k)(this, sB), !1), this._gammaSpace = !0, this.invertZ = (0, Vc.k)(this, MB, !1), this.lodLevelInAlpha = ((0, Vc.k)(this, PB), (0, Vc.k)(this, qn, !1)), this._dominantDirection = ((0, Vc.k)(this, OB), null), this.isRenderTarget = (0, Vc.k)(this, TB, !1), this._prefiltered = ((0, Vc.k)(this, fB), !1), this._forceSerialize = !1, this.animations = [], this.XBc = new rB.c, this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, Bc ? cB._IsScene(Bc) ? this._scene = Bc : this._engine = Bc : this._scene = sc.d.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.RV()), this._texture = nc, this._uid = null
        }
        knc() {
          return this._scene
        }
        _getEngine() {
          return this._engine
        }
        getTextureMatrix() {
          return uc.d.IdentityReadOnly
        }
        getReflectionTextureMatrix() {
          return uc.d.IdentityReadOnly
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix()
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError
        }
        scale(cB) {}
        get canRescale() {
          return !1
        }
        _getFromCache(cB, Bc, nc, Vc, Ic, rB) {
          const uc = this._getEngine();
          if (!uc) return null;
          const sc = uc._getUseSRGBBuffer(!!Ic, Bc),
            Mc = uc.getLoadedTexturesCache();
          for (let Pc = 0; Pc < Mc.length; Pc++) {
            const uc = Mc[Pc];
            if ((void 0 === Ic || sc === uc._useSRGBBuffer) && (void 0 === Vc || Vc === uc.invertY) && uc.url === cB && uc.generateMipMaps === !Bc && (!nc || nc === uc.samplingMode) && (void 0 === rB || rB === uc.isCube)) return uc.incrementReferences(), uc
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
          const cB = this.knc();
          cB && cB.markAllMaterialsAsDirty(1)
        }
        readPixels() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Vc = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Ic = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            uc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            sc = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            Mc = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const Pc = this._getEngine();
          if (!Pc) return null;
          const qB = this.getSize();
          let Oc = qB.width,
            Tc = qB.height;
          0 !== Bc && (Oc /= Math.pow(2, Bc), Tc /= Math.pow(2, Bc), Oc = Math.round(Oc), Tc = Math.round(Tc)), sc = Math.min(Oc, sc), Mc = Math.min(Tc, Mc);
          try {
            return this._texture.isCube || this._texture.is2DArray ? Pc._readTexturePixels(this._texture, sc, Mc, cB, Bc, nc, Vc, Ic, rB, uc) : Pc._readTexturePixels(this._texture, sc, Mc, -1, Bc, nc, Vc, Ic, rB, uc)
          } catch (fc) {
            return null
          }
        }
        _readPixelsSync() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Vc = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            Ic = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const rB = this.getSize();
          let uc = rB.width,
            sc = rB.height;
          const Mc = this._getEngine();
          if (!Mc) return null;
          0 != Bc && (uc /= Math.pow(2, Bc), sc /= Math.pow(2, Bc), uc = Math.round(uc), sc = Math.round(sc));
          try {
            return this._texture.isCube ? Mc._readTexturePixelsSync(this._texture, uc, sc, cB, Bc, nc, Vc, Ic) : Mc._readTexturePixelsSync(this._texture, uc, sc, -1, Bc, nc, Vc, Ic)
          } catch (Pc) {
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
            const cB = this._scene.textures.indexOf(this);
            if (cB >= 0 && this._scene.textures.splice(cB, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const cB = this._parentContainer.textures.indexOf(this);
              cB > -1 && this._parentContainer.textures.splice(cB, 1), this._parentContainer = null
            }
          }
          this.XBc.notifyObservers(this), this.XBc.clear(), this.metadata = null, super.dispose()
        }
        serialize() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !cB) return null;
          const Bc = Tc.e.Serialize(this);
          return Tc.e.AppendSerializedAnimations(this, Bc), Bc
        }
        static WhenAllReady(cB, Bc) {
          let nc = cB.length;
          if (0 !== nc)
            for (let Vc = 0; Vc < cB.length; Vc++) {
              const Ic = cB[Vc];
              if (Ic.isReady()) 0 === --nc && Bc();
              else {
                const cB = Ic.onLoadObservable;
                cB ? cB.addOnce((() => {
                  0 === --nc && Bc()
                })) : 0 === --nc && Bc()
              }
            } else Bc()
        }
        static _IsScene(cB) {
          return "Scene" === cB.getClassName()
        }
      }, (() => {
        const rB = "function" === typeof Symbol && Symbol.metadata ? Object.create(Nc[Symbol.metadata] ?? null) : void 0;
        Bc = [(0, Ic.M)()], nc = [(0, Ic.M)()], Pc = [(0, Ic.M)()], Oc = [(0, Ic.M)()], fc = [(0, Ic.M)("hasAlpha")], mB = [(0, Ic.M)("getAlphaFromRGB")], ec = [(0, Ic.M)()], tB = [(0, Ic.M)("coordinatesIndex")], Sc = [(0, Ic.M)()], yB = [(0, Ic.M)("coordinatesMode")], zB = [(0, Ic.M)()], pc = [(0, Ic.M)()], hc = [(0, Ic.M)()], aB = [(0, Ic.M)()], lc = [(0, Ic.M)()], Yc = [(0, Ic.M)()], Lc = [(0, Ic.M)()], gB = [(0, Ic.M)()], Uc = [(0, Ic.M)()], bB = [(0, Ic.M)()], Zc = [(0, Ic.M)()], Qc = [(0, Ic.M)()], Cc = [(0, Ic.M)()], vB = [(0, Ic.F)()], Dc = [(0, Ic.M)()], (0, Vc.g)(cB, null, zB, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: cB => "wrapU" in cB,
            get: cB => cB.wrapU
          },
          metadata: rB
        }, null, Ec), (0, Vc.g)(cB, null, pc, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: cB => "wrapV" in cB,
            get: cB => cB.wrapV
          },
          metadata: rB
        }, null, Ec), (0, Vc.g)(cB, null, lc, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: cB => "isCube" in cB,
            get: cB => cB.isCube
          },
          metadata: rB
        }, null, Ec), (0, Vc.g)(cB, null, Yc, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: cB => "is3D" in cB,
            get: cB => cB.is3D
          },
          metadata: rB
        }, null, Ec), (0, Vc.g)(cB, null, Lc, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: cB => "is2DArray" in cB,
            get: cB => cB.is2DArray
          },
          metadata: rB
        }, null, Ec), (0, Vc.g)(cB, null, gB, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: cB => "gammaSpace" in cB,
            get: cB => cB.gammaSpace
          },
          metadata: rB
        }, null, Ec), (0, Vc.g)(cB, null, Zc, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: cB => "lodGenerationOffset" in cB,
            get: cB => cB.lodGenerationOffset
          },
          metadata: rB
        }, null, Ec), (0, Vc.g)(cB, null, Qc, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: cB => "lodGenerationScale" in cB,
            get: cB => cB.lodGenerationScale
          },
          metadata: rB
        }, null, Ec), (0, Vc.g)(cB, null, Cc, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: cB => "linearSpecularLOD" in cB,
            get: cB => cB.linearSpecularLOD
          },
          metadata: rB
        }, null, Ec), (0, Vc.g)(cB, null, vB, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "irradianceTexture" in cB,
            get: cB => cB.irradianceTexture
          },
          metadata: rB
        }, null, Ec), (0, Vc.g)(null, null, Bc, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: cB => "uniqueId" in cB,
            get: cB => cB.uniqueId,
            set: (cB, Bc) => {
              cB.uniqueId = Bc
            }
          },
          metadata: rB
        }, oc, Wc), (0, Vc.g)(null, null, nc, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: cB => "name" in cB,
            get: cB => cB.name,
            set: (cB, Bc) => {
              cB.name = Bc
            }
          },
          metadata: rB
        }, wc, kB), (0, Vc.g)(null, null, Pc, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: cB => "displayName" in cB,
            get: cB => cB.displayName,
            set: (cB, Bc) => {
              cB.displayName = Bc
            }
          },
          metadata: rB
        }, Xc, Hc), (0, Vc.g)(null, null, Oc, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: cB => "metadata" in cB,
            get: cB => cB.metadata,
            set: (cB, Bc) => {
              cB.metadata = Bc
            }
          },
          metadata: rB
        }, Fc, Jc), (0, Vc.g)(null, null, fc, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: cB => "_hasAlpha" in cB,
            get: cB => cB._hasAlpha,
            set: (cB, Bc) => {
              cB._hasAlpha = Bc
            }
          },
          metadata: rB
        }, jB, Rc), (0, Vc.g)(null, null, mB, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: cB => "_getAlphaFromRGB" in cB,
            get: cB => cB._getAlphaFromRGB,
            set: (cB, Bc) => {
              cB._getAlphaFromRGB = Bc
            }
          },
          metadata: rB
        }, iB, Kc), (0, Vc.g)(null, null, ec, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: cB => "level" in cB,
            get: cB => cB.level,
            set: (cB, Bc) => {
              cB.level = Bc
            }
          },
          metadata: rB
        }, xB, dc), (0, Vc.g)(null, null, tB, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: cB => "_coordinatesIndex" in cB,
            get: cB => cB._coordinatesIndex,
            set: (cB, Bc) => {
              cB._coordinatesIndex = Bc
            }
          },
          metadata: rB
        }, Ac, Gc), (0, Vc.g)(null, null, Sc, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: cB => "optimizeUVAllocation" in cB,
            get: cB => cB.optimizeUVAllocation,
            set: (cB, Bc) => {
              cB.optimizeUVAllocation = Bc
            }
          },
          metadata: rB
        }, cn, BB), (0, Vc.g)(null, null, yB, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: cB => "_coordinatesMode" in cB,
            get: cB => cB._coordinatesMode,
            set: (cB, Bc) => {
              cB._coordinatesMode = Bc
            }
          },
          metadata: rB
        }, nB, VB), (0, Vc.g)(null, null, hc, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: cB => "wrapR" in cB,
            get: cB => cB.wrapR,
            set: (cB, Bc) => {
              cB.wrapR = Bc
            }
          },
          metadata: rB
        }, IB, rn), (0, Vc.g)(null, null, aB, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: cB => "anisotropicFilteringLevel" in cB,
            get: cB => cB.anisotropicFilteringLevel,
            set: (cB, Bc) => {
              cB.anisotropicFilteringLevel = Bc
            }
          },
          metadata: rB
        }, uB, sB), (0, Vc.g)(null, null, Uc, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: cB => "invertZ" in cB,
            get: cB => cB.invertZ,
            set: (cB, Bc) => {
              cB.invertZ = Bc
            }
          },
          metadata: rB
        }, MB, PB), (0, Vc.g)(null, null, bB, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: cB => "lodLevelInAlpha" in cB,
            get: cB => cB.lodLevelInAlpha,
            set: (cB, Bc) => {
              cB.lodLevelInAlpha = Bc
            }
          },
          metadata: rB
        }, qn, OB), (0, Vc.g)(null, null, Dc, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: cB => "isRenderTarget" in cB,
            get: cB => cB.isRenderTarget,
            set: (cB, Bc) => {
              cB.isRenderTarget = Bc
            }
          },
          metadata: rB
        }, TB, fB), rB && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rB
        })
      })(), cB.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, cB
    })();
    (Oc = mB.prototype).forceSphericalPolynomialsRecompute ?? (Oc.forceSphericalPolynomialsRecompute = (0, fc.h)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(mB.prototype, "sphericalPolynomial") || Object.defineProperty(mB.prototype, "sphericalPolynomial", (0, fc.e)("BaseTexture", "sphericalPolynomial"))
  },
  38493: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => hc,
      e: () => zB
    });
    var Vc = nc(38035),
      Ic = nc(38043),
      rB = nc(35783),
      uc = nc(35756),
      sc = nc(38033),
      Mc = nc(35799),
      Pc = nc(37953),
      qB = nc(37963),
      Oc = nc(38153),
      Tc = nc(36329),
      fc = nc(38111);

    function mB(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Vc = Bc.width,
        Ic = Bc.height;
      if (cB instanceof Float32Array) {
        let Bc = cB.byteLength / cB.BYTES_PER_ELEMENT;
        const nc = new Uint8Array(Bc);
        for (; --Bc >= 0;) {
          let Vc = cB[Bc];
          Vc < 0 ? Vc = 0 : Vc > 1 && (Vc = 1), nc[Bc] = 255 * Vc
        }
        cB = nc
      }
      const rB = document.createElement("canvas");
      rB.width = Vc, rB.height = Ic;
      const uc = rB.getContext("2d");
      if (!uc) return null;
      const sc = uc.createImageData(Vc, Ic);
      if (sc.data.set(cB), uc.putImageData(sc, 0, 0), nc) {
        const cB = document.createElement("canvas");
        cB.width = Vc, cB.height = Ic;
        const Bc = cB.getContext("2d");
        return Bc ? (Bc.translate(0, Ic), Bc.scale(1, -1), Bc.drawImage(rB, 0, 0), cB.toDataURL("image/png")) : null
      }
      return rB.toDataURL("image/png")
    }

    function ec(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Vc = cB.getInternalTexture();
      if (!Vc) return null;
      const Ic = cB._readPixelsSync(Bc, nc);
      return Ic ? mB(Ic, cB.getSize(), Vc.invertY) : null
    }
    async function tB(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Vc = cB.getInternalTexture();
      if (!Vc) return null;
      const Ic = await cB.readPixels(Bc, nc);
      return Ic ? mB(Ic, cB.getSize(), Vc.invertY) : null
    }
    var Sc = nc(38448),
      yB = nc(38068);
    let zB = (() => {
        var cB;
        let Bc, nc, mB, zB, pc, hc, aB, lc, Yc, Lc, gB, Uc, bB, Zc = sc.b,
          Qc = [],
          Cc = [],
          vB = [],
          Dc = [],
          Nc = [],
          Ec = [],
          oc = [],
          Wc = [],
          wc = [],
          kB = [],
          Xc = [],
          Hc = [],
          Fc = [],
          Jc = [],
          jB = [],
          Rc = [],
          iB = [],
          Kc = [],
          xB = [],
          dc = [],
          Ac = [],
          Gc = [],
          cn = [],
          BB = [],
          nB = [];
        return cB = class extends Zc {
          static _CreateVideoTexture(Bc, nc, Vc) {
            arguments.length > 5 && void 0 !== arguments[5] || cB.TRILINEAR_SAMPLINGMODE;
            throw (0, Pc.k)("VideoTexture")
          }
          get noMipmap() {
            return this._noMipmap
          }
          get mimeType() {
            return this._mimeType
          }
          set isBlocking(cB) {
            this._isBlocking = cB
          }
          get isBlocking() {
            return this._isBlocking
          }
          get invertY() {
            return this._invertY
          }
          constructor(Bc, nc, Ic, uc) {
            let sc, Mc = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : cB.TRILINEAR_SAMPLINGMODE,
              Pc = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Oc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              Tc = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              fc = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              mB = arguments.length > 9 ? arguments[9] : void 0,
              ec = arguments.length > 10 ? arguments[10] : void 0,
              tB = arguments.length > 11 ? arguments[11] : void 0,
              yB = arguments.length > 12 ? arguments[12] : void 0,
              zB = arguments.length > 13 ? arguments[13] : void 0;
            super(nc), this.url = ((0, Vc.k)(this, Qc), (0, Vc.k)(this, Cc, null)), this.uOffset = ((0, Vc.k)(this, vB), (0, Vc.k)(this, Dc, 0)), this.vOffset = ((0, Vc.k)(this, Nc), (0, Vc.k)(this, Ec, 0)), this.uScale = ((0, Vc.k)(this, oc), (0, Vc.k)(this, Wc, 1)), this.vScale = ((0, Vc.k)(this, wc), (0, Vc.k)(this, kB, 1)), this.uAng = ((0, Vc.k)(this, Xc), (0, Vc.k)(this, Hc, 0)), this.vAng = ((0, Vc.k)(this, Fc), (0, Vc.k)(this, Jc, 0)), this.wAng = ((0, Vc.k)(this, jB), (0, Vc.k)(this, Rc, 0)), this.uRotationCenter = ((0, Vc.k)(this, iB), (0, Vc.k)(this, Kc, .5)), this.vRotationCenter = ((0, Vc.k)(this, xB), (0, Vc.k)(this, dc, .5)), this.wRotationCenter = ((0, Vc.k)(this, Ac), (0, Vc.k)(this, Gc, .5)), this.homogeneousRotationInUVTransform = ((0, Vc.k)(this, cn), (0, Vc.k)(this, BB, !1)), this.inspectableCustomProperties = ((0, Vc.k)(this, nB), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new rB.c, this._isBlocking = !0, this.name = Bc || "", this.url = Bc;
            let pc = !1,
              hc = null,
              aB = !0;
            "object" === typeof Ic && null !== Ic ? (sc = Ic.noMipmap ?? !1, uc = Ic.invertY ?? !Sc.e, Mc = Ic.samplingMode ?? cB.TRILINEAR_SAMPLINGMODE, Pc = Ic.onLoad ?? null, Oc = Ic.onError ?? null, Tc = Ic.buffer ?? null, fc = Ic.deleteBuffer ?? !1, mB = Ic.format, ec = Ic.mimeType, tB = Ic.loaderOptions, yB = Ic.creationFlags, pc = Ic.useSRGBBuffer ?? !1, hc = Ic.internalTexture ?? null, aB = Ic.gammaSpace ?? aB, zB = Ic.forcedExtension ?? zB) : sc = !!Ic, this._gammaSpace = aB, this._noMipmap = sc, this._invertY = void 0 === uc ? !Sc.e : uc, this._initialSamplingMode = Mc, this._buffer = Tc, this._deleteBuffer = fc, this._mimeType = ec, this._loaderOptions = tB, this._creationFlags = yB, this._useSRGBBuffer = pc, this._forcedExtension = zB, void 0 !== mB && (this._format = mB);
            const lc = this.knc(),
              Yc = this._getEngine();
            if (!Yc) return;
            Yc.onBeforeTextureInitObservable.notifyObservers(this);
            const Lc = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), Pc && Pc(), !this.isBlocking && lc && lc.resetCachedMaterial()
              },
              gB = (Bc, nc) => {
                this._loadingError = !0, this._errorObject = {
                  message: Bc,
                  exception: nc
                }, Oc && Oc(Bc, nc), cB.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            if (!this.url && !hc) return this._delayedOnLoad = Lc, void(this._delayedOnError = gB);
            if (this._texture = hc ?? this._getFromCache(this.url, sc, Mc, this._invertY, pc, this.isCube), this._texture)
              if (this._texture.isReady) qB.e.SetImmediate((() => Lc()));
              else {
                const cB = this._texture.onLoadedObservable.add(Lc);
                this._texture.onErrorObservable.add((Bc => {
                  gB(Bc.message, Bc.exception), this._texture?.onLoadedObservable.remove(cB)
                }))
              }
            else if (lc && lc.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = Lc, this._delayedOnError = gB;
            else {
              try {
                this._texture = Yc.createTexture(this.url, sc, this._invertY, lc, Mc, Lc, gB, this._buffer, void 0, this._format, this._forcedExtension, ec, tB, yB, pc)
              } catch (Uc) {
                throw gB("error loading", Uc), Uc
              }
              fc && (this._buffer = null)
            }
          }
          updateURL(cB) {
            let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              nc = arguments.length > 2 ? arguments[2] : void 0,
              Vc = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.knc().markAllMaterialsAsDirty(1, (cB => cB.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = cB), this.url = cB, this._buffer = Bc, this._forcedExtension = Vc, this.delayLoadState = 4;
            const Ic = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              Ic ? Ic() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), nc && nc()
            }, this.delayLoad()
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const cB = this.knc();
            if (!cB) return;
            let Bc = this.url;
            !Bc && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (Bc = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(Bc, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? qB.e.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = cB.RV().createTexture(Bc, this._noMipmap, this._invertY, cB, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null
          }
          _prepareRowForTextureGeneration(cB, Bc, nc, Vc) {
            cB *= this._cachedUScale, Bc *= this._cachedVScale, cB -= this.uRotationCenter * this._cachedUScale, Bc -= this.vRotationCenter * this._cachedVScale, nc -= this.wRotationCenter, uc.p.TransformCoordinatesFromFloatsToRef(cB, Bc, nc, this._rowGenerationMatrix, Vc), Vc.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, Vc.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, Vc.z += this.wRotationCenter
          }
          getTextureMatrix() {
            let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * cB === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * cB, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = uc.d.Zero(), this._rowGenerationMatrix = new uc.d, this._t0 = uc.p.Zero(), this._t1 = uc.p.Zero(), this._t2 = uc.p.Zero()), uc.d.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (uc.d.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, uc.i.Matrix[0]), uc.d.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, uc.i.Matrix[1]), uc.d.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, uc.i.Matrix[2]), uc.d.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, uc.i.Matrix[3]), uc.i.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(uc.i.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(uc.i.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(uc.i.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.Tqc(this._t0), this._t2.Tqc(this._t0), uc.d.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const Bc = this.knc();
            if (!Bc) return this._cachedTextureMatrix;
            const nc = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && nc !== this._cachedIdentity3x2 && Bc.markAllMaterialsAsDirty(1, (cB => cB.hasTexture(this))), this._cachedTextureMatrix
          }
          getReflectionTextureMatrix() {
            const Bc = this.knc();
            if (!Bc) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== cB.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === Bc.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = uc.d.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = uc.d.Zero());
            const nc = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case cB.PLANAR_MODE:
                uc.d.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case cB.PROJECTION_MODE: {
                uc.d.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                const cB = Bc.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = cB.updateFlag, cB.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break
              }
              default:
                uc.d.IdentityToRef(this._cachedReflectionTextureMatrix)
            }
            return nc && Bc.markAllMaterialsAsDirty(1, (cB => cB.hasTexture(this))), this._cachedReflectionTextureMatrix
          }
          clone() {
            const Bc = {
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
            return yB.e.Clone((() => new cB(this._texture ? this._texture.url : null, this.knc(), Bc)), this)
          }
          serialize() {
            const Bc = this.name;
            cB.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const nc = super.serialize(cB._SerializeInternalTextureUniqueId);
            if (!nc) return null;
            if (cB.SerializeBuffers || cB.ForceSerializeBuffers)
              if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) nc.base64String = this._buffer, nc.name = nc.name.replace("data:", "");
              else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const cB = this.mimeType || "image/png";
              nc.base64String = `data:${cB};base64,${(0,fc.e)(this._buffer)}`
            } else(cB.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (nc.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? ec(this) : tB(this));
            return nc.invertY = this._invertY, nc.samplingMode = this.samplingMode, nc._creationFlags = this._creationFlags, nc._useSRGBBuffer = this._useSRGBBuffer, cB._SerializeInternalTextureUniqueId && (nc.internalTextureUniqueId = this._texture?.uniqueId), nc.internalTextureLabel = this._texture?.label, nc.noMipmap = this._noMipmap, this.name = Bc, nc
          }
          getClassName() {
            return "Texture"
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
          }
          static Parse(Bc, nc, Vc) {
            if (Bc.customType) {
              const cB = Oc.c.Instantiate(Bc.customType).Parse(Bc, nc, Vc);
              return Bc.samplingMode && cB.updateSamplingMode && cB._samplingMode && cB._samplingMode !== Bc.samplingMode && cB.updateSamplingMode(Bc.samplingMode), cB
            }
            if (Bc.isCube && !Bc.isRenderTarget) return cB._CubeTextureParser(Bc, nc, Vc);
            const Ic = void 0 !== Bc.internalTextureUniqueId;
            if (!Bc.name && !Bc.isRenderTarget && !Ic) return null;
            let rB;
            if (Ic) {
              const cB = nc.RV().getLoadedTexturesCache();
              for (const nc of cB)
                if (nc.uniqueId === Bc.internalTextureUniqueId) {
                  rB = nc;
                  break
                }
            }
            const uc = cB => {
              if (cB && cB._texture && (cB._texture._cachedWrapU = null, cB._texture._cachedWrapV = null, cB._texture._cachedWrapR = null), Bc.samplingMode) {
                const nc = Bc.samplingMode;
                cB && cB.samplingMode !== nc && cB.updateSamplingMode(nc)
              }
              if (cB && Bc.animations)
                for (let nc = 0; nc < Bc.animations.length; nc++) {
                  const Vc = Bc.animations[nc],
                    Ic = (0, Mc.b)("BABYLON.Animation");
                  Ic && cB.animations.push(Ic.Parse(Vc))
                }
              cB && cB._texture && (Ic && !rB && cB._texture._setUniqueId(Bc.internalTextureUniqueId), cB._texture.label = Bc.internalTextureLabel)
            };
            return yB.e.Parse((() => {
              let Ic = !0;
              if (Bc.noMipmap && (Ic = !1), Bc.mirrorPlane) {
                const Vc = cB._CreateMirror(Bc.name, Bc.renderTargetSize, nc, Ic);
                return Vc._waitingRenderList = Bc.renderList, Vc.mirrorPlane = Tc.d.FromArray(Bc.mirrorPlane), uc(Vc), Vc
              }
              if (Bc.isRenderTarget && !Bc.base64String) {
                let Vc = null;
                if (Bc.isCube) {
                  if (nc.reflectionProbes)
                    for (let cB = 0; cB < nc.reflectionProbes.length; cB++) {
                      const Vc = nc.reflectionProbes[cB];
                      if (Vc.name === Bc.name) return Vc.cubeTexture
                    }
                } else Vc = cB._CreateRenderTargetTexture(Bc.name, Bc.renderTargetSize, nc, Ic, Bc._creationFlags ?? 0), Vc._waitingRenderList = Bc.renderList;
                return uc(Vc), Vc
              }
              if (Bc.isVideo) {
                const rB = cB._CreateVideoTexture(Vc + (Bc.url || Bc.name), Vc + (Bc.src || Bc.url), nc, Ic, Bc.invertY, Bc.samplingMode, Bc.settings || {});
                return uc(rB), rB
              } {
                let sc;
                if ("string" === typeof Bc.base64String && Bc.base64String && !rB) {
                  const Vc = {
                      buffer: Bc.base64String,
                      noMipmap: !Ic,
                      invertY: Bc.invertY,
                      samplingMode: Bc.samplingMode,
                      useSRGBBuffer: Bc._useSRGBBuffer ?? !1,
                      creationFlags: Bc._creationFlags ?? 0,
                      onLoad: () => {
                        uc(sc)
                      }
                    },
                    rB = Bc.base64String,
                    Mc = rB.startsWith("data:") ? rB.substring(5) : rB;
                  sc = cB.CreateFromBase64String("", Mc, nc, Vc), sc.name = Bc.name
                } else {
                  let Mc;
                  Mc = Bc.name && (Bc.name.indexOf("://") > 0 || Bc.name.startsWith("data:")) ? Bc.name : Vc + Bc.name, Bc.url && (Bc.url.startsWith("data:") || cB.UseSerializedUrlIfAny) && (Mc = Bc.url);
                  const Pc = {
                    noMipmap: !Ic,
                    invertY: Bc.invertY,
                    samplingMode: Bc.samplingMode,
                    useSRGBBuffer: Bc._useSRGBBuffer ?? !1,
                    creationFlags: Bc._creationFlags ?? 0,
                    onLoad: () => {
                      uc(sc)
                    },
                    internalTexture: rB
                  };
                  sc = new cB(Mc, nc, Pc)
                }
                return sc
              }
            }), Bc, nc)
          }
          static CreateFromBase64String(Bc, nc, Vc, Ic, rB) {
            let uc = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : cB.TRILINEAR_SAMPLINGMODE;
            return new cB("data:" + nc, Vc, Ic, rB, uc, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, Bc, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0)
          }
          static LoadFromDataString(Bc, nc, Vc) {
            let Ic = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              rB = arguments.length > 4 ? arguments[4] : void 0,
              uc = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              sc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : cB.TRILINEAR_SAMPLINGMODE,
              Mc = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Pc = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              qB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              Oc = arguments.length > 10 ? arguments[10] : void 0,
              Tc = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== Bc.substring(0, 5) && (Bc = "data:" + Bc), new cB(Bc, Vc, rB, uc, sc, Mc, Pc, nc, Ic, qB, void 0, void 0, Oc, Tc)
          }
        }, (() => {
          const rB = "function" === typeof Symbol && Symbol.metadata ? Object.create(Zc[Symbol.metadata] ?? null) : void 0;
          Bc = [(0, Ic.M)()], nc = [(0, Ic.M)()], mB = [(0, Ic.M)()], zB = [(0, Ic.M)()], pc = [(0, Ic.M)()], hc = [(0, Ic.M)()], aB = [(0, Ic.M)()], lc = [(0, Ic.M)()], Yc = [(0, Ic.M)()], Lc = [(0, Ic.M)()], gB = [(0, Ic.M)()], Uc = [(0, Ic.M)()], bB = [(0, Ic.M)()], (0, Vc.g)(cB, null, bB, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: cB => "isBlocking" in cB,
              get: cB => cB.isBlocking
            },
            metadata: rB
          }, null, Qc), (0, Vc.g)(null, null, Bc, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: cB => "url" in cB,
              get: cB => cB.url,
              set: (cB, Bc) => {
                cB.url = Bc
              }
            },
            metadata: rB
          }, Cc, vB), (0, Vc.g)(null, null, nc, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: cB => "uOffset" in cB,
              get: cB => cB.uOffset,
              set: (cB, Bc) => {
                cB.uOffset = Bc
              }
            },
            metadata: rB
          }, Dc, Nc), (0, Vc.g)(null, null, mB, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: cB => "vOffset" in cB,
              get: cB => cB.vOffset,
              set: (cB, Bc) => {
                cB.vOffset = Bc
              }
            },
            metadata: rB
          }, Ec, oc), (0, Vc.g)(null, null, zB, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: cB => "uScale" in cB,
              get: cB => cB.uScale,
              set: (cB, Bc) => {
                cB.uScale = Bc
              }
            },
            metadata: rB
          }, Wc, wc), (0, Vc.g)(null, null, pc, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: cB => "vScale" in cB,
              get: cB => cB.vScale,
              set: (cB, Bc) => {
                cB.vScale = Bc
              }
            },
            metadata: rB
          }, kB, Xc), (0, Vc.g)(null, null, hc, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: cB => "uAng" in cB,
              get: cB => cB.uAng,
              set: (cB, Bc) => {
                cB.uAng = Bc
              }
            },
            metadata: rB
          }, Hc, Fc), (0, Vc.g)(null, null, aB, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: cB => "vAng" in cB,
              get: cB => cB.vAng,
              set: (cB, Bc) => {
                cB.vAng = Bc
              }
            },
            metadata: rB
          }, Jc, jB), (0, Vc.g)(null, null, lc, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: cB => "wAng" in cB,
              get: cB => cB.wAng,
              set: (cB, Bc) => {
                cB.wAng = Bc
              }
            },
            metadata: rB
          }, Rc, iB), (0, Vc.g)(null, null, Yc, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: cB => "uRotationCenter" in cB,
              get: cB => cB.uRotationCenter,
              set: (cB, Bc) => {
                cB.uRotationCenter = Bc
              }
            },
            metadata: rB
          }, Kc, xB), (0, Vc.g)(null, null, Lc, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: cB => "vRotationCenter" in cB,
              get: cB => cB.vRotationCenter,
              set: (cB, Bc) => {
                cB.vRotationCenter = Bc
              }
            },
            metadata: rB
          }, dc, Ac), (0, Vc.g)(null, null, gB, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: cB => "wRotationCenter" in cB,
              get: cB => cB.wRotationCenter,
              set: (cB, Bc) => {
                cB.wRotationCenter = Bc
              }
            },
            metadata: rB
          }, Gc, cn), (0, Vc.g)(null, null, Uc, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: cB => "homogeneousRotationInUVTransform" in cB,
              get: cB => cB.homogeneousRotationInUVTransform,
              set: (cB, Bc) => {
                cB.homogeneousRotationInUVTransform = Bc
              }
            },
            metadata: rB
          }, BB, nB), rB && Object.defineProperty(cB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rB
          })
        })(), cB.SerializeBuffers = !0, cB.ForceSerializeBuffers = !1, cB.OnTextureLoadErrorObservable = new rB.c, cB._SerializeInternalTextureUniqueId = !1, cB._CubeTextureParser = (cB, Bc, nc) => {
          throw (0, Pc.k)("CubeTexture")
        }, cB._CreateMirror = (cB, Bc, nc, Vc) => {
          throw (0, Pc.k)("MirrorTexture")
        }, cB._CreateRenderTargetTexture = (cB, Bc, nc, Vc, Ic) => {
          throw (0, Pc.k)("RenderTargetTexture")
        }, cB.NEAREST_SAMPLINGMODE = 1, cB.NEAREST_NEAREST_MIPLINEAR = 8, cB.BILINEAR_SAMPLINGMODE = 2, cB.LINEAR_LINEAR_MIPNEAREST = 11, cB.TRILINEAR_SAMPLINGMODE = 3, cB.LINEAR_LINEAR_MIPLINEAR = 3, cB.NEAREST_NEAREST_MIPNEAREST = 4, cB.NEAREST_LINEAR_MIPNEAREST = 5, cB.NEAREST_LINEAR_MIPLINEAR = 6, cB.NEAREST_LINEAR = 7, cB.NEAREST_NEAREST = 1, cB.LINEAR_NEAREST_MIPNEAREST = 9, cB.LINEAR_NEAREST_MIPLINEAR = 10, cB.LINEAR_LINEAR = 2, cB.LINEAR_NEAREST = 12, cB.EXPLICIT_MODE = 0, cB.SPHERICAL_MODE = 1, cB.PLANAR_MODE = 2, cB.CUBIC_MODE = 3, cB.PROJECTION_MODE = 4, cB.SKYBOX_MODE = 5, cB.INVCUBIC_MODE = 6, cB.EQUIRECTANGULAR_MODE = 7, cB.FIXED_EQUIRECTANGULAR_MODE = 8, cB.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, cB.CLAMP_ADDRESSMODE = 0, cB.WRAP_ADDRESSMODE = 1, cB.MIRROR_ADDRESSMODE = 2, cB.UseSerializedUrlIfAny = !1, cB
      })(),
      pc = !1;

    function hc() {
      pc || (pc = !0, (0, Mc.d)("BABYLON.Texture", zB), yB.e._TextureParser = zB.Parse)
    }
  },
  38060: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Vc
    });
    class Vc {
      constructor(cB, Bc) {
        this.width = cB, this.height = Bc
      }
      toString() {
        return `{W: ${this.width}, H: ${this.height}}`
      }
      getClassName() {
        return "Size"
      }
      getHashCode() {
        let cB = 0 | this.width;
        return cB = 397 * cB ^ this.height, cB
      }
      qqc(cB) {
        this.width = cB.width, this.height = cB.height
      }
      puc(cB, Bc) {
        return this.width = cB, this.height = Bc, this
      }
      set(cB, Bc) {
        return this.puc(cB, Bc)
      }
      multiplyByFloats(cB, Bc) {
        return new Vc(this.width * cB, this.height * Bc)
      }
      clone() {
        return new Vc(this.width, this.height)
      }
      equals(cB) {
        return !!cB && (this.width === cB.width && this.height === cB.height)
      }
      get surface() {
        return this.width * this.height
      }
      static Zero() {
        return new Vc(0, 0)
      }
      add(cB) {
        return new Vc(this.width + cB.width, this.height + cB.height)
      }
      subtract(cB) {
        return new Vc(this.width - cB.width, this.height - cB.height)
      }
      scale(cB) {
        return new Vc(this.width * cB, this.height * cB)
      }
      static Lerp(cB, Bc, nc) {
        const Ic = cB.width + (Bc.width - cB.width) * nc,
          rB = cB.height + (Bc.height - cB.height) * nc;
        return new Vc(Ic, rB)
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);