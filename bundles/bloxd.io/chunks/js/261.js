export const id = 261;
export const ids = [261];
export const modules = {
  40623: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG,
      f: () => kG
    });
    var wG = ZG(39093),
      SG = ZG(40416),
      LG = ZG(40592),
      yG = {};
    class kG {
      constructor(GG) {
        this.attachedToElement = !1, this.attached = {}, this.camera = GG, this.checkInputs = () => {}
      }
      add(GG) {
        const bG = GG.getSimpleName();
        this.attached[bG] ? wG.c.Warn("camera input of type " + bG + " already exists on camera") : (this.attached[bG] = GG, GG.camera = this.camera, GG.checkInputs && (this.checkInputs = this._addCheckInputs(GG.checkInputs.bind(GG))), this.attachedToElement && GG.attachControl(this.noPreventDefault))
      }
      remove(GG) {
        for (const bG in this.attached) {
          const ZG = this.attached[bG];
          if (ZG === GG) return ZG.detachControl(), ZG.camera = null, delete this.attached[bG], void this.rebuildInputCheck()
        }
      }
      removeByType(GG) {
        for (const bG in this.attached) {
          const ZG = this.attached[bG];
          ZG.getClassName() === GG && (ZG.detachControl(), ZG.camera = null, delete this.attached[bG], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(GG) {
        const bG = this.checkInputs;
        return () => {
          bG(), GG()
        }
      }
      attachInput(GG) {
        this.attachedToElement && GG.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          GG = !LG.d.ForceAttachControlToAlwaysPreventDefault && GG, this.attachedToElement = !0, this.noPreventDefault = GG;
          for (const bG in this.attached) this.attached[bG].attachControl(GG)
        }
      }
      detachElement() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const bG in this.attached) this.attached[bG].detachControl(), GG && (this.attached[bG].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const GG in this.attached) {
          const bG = this.attached[GG];
          bG.checkInputs && (this.checkInputs = this._addCheckInputs(bG.checkInputs.bind(bG)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(GG) {
        const bG = {};
        for (const ZG in this.attached) {
          const GG = this.attached[ZG],
            wG = SG.b.Serialize(GG);
          bG[GG.getClassName()] = wG
        }
        GG.inputsmgr = bG
      }
      parse(GG) {
        const bG = GG.inputsmgr;
        if (bG) {
          this.clear();
          for (const GG in bG) {
            const ZG = yG[GG];
            if (ZG) {
              const wG = bG[GG],
                LG = SG.b.Parse((() => new ZG), wG, null);
              this.add(LG)
            }
          }
        } else
          for (const ZG in this.attached) {
            const bG = yG[this.attached[ZG].getClassName()];
            if (bG) {
              const wG = SG.b.Parse((() => new bG), GG, null);
              this.remove(this.attached[ZG]), this.add(wG)
            }
          }
      }
    }
  },
  41519: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => zG
    });
    var wG = ZG(40393),
      SG = ZG(40398),
      LG = ZG(40271),
      yG = ZG(37439),
      kG = ZG(40387),
      UG = ZG(40857),
      YG = ZG(37484),
      VG = ZG(37465),
      pG = ZG(40416),
      fG = ZG(40210),
      QG = ZG(39093),
      KG = ZG(40430),
      hG = ZG(38311),
      dG = ZG(40463);
    var JG = ZG(40280);
    let rG = !1;
    let zG = (() => {
        var GG;
        let bG, ZG, YG, zG, EG, oG, XG, uG, iG, CG = kG.b,
          WG = [],
          mG = [],
          IG = [],
          FG = [],
          vG = [],
          aG = [],
          cG = [],
          lG = [],
          jG = [],
          PG = [],
          MG = [],
          AG = [],
          sG = [],
          qG = [],
          nG = [];
        return GG = class extends CG {
          set boundingBoxSize(GG) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(GG)) return;
            this._boundingBoxSize = GG;
            const bG = this.Dv();
            bG && bG.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(GG) {
            this._rotationY = GG, this.setReflectionTextureMatrix(yG.e.RotationY(this._rotationY))
          }
          get rotationY() {
            return this._rotationY
          }
          get noMipmap() {
            return this._noMipmap
          }
          get forcedExtension() {
            return this._forcedExtension
          }
          constructor(GG, bG) {
            let ZG, SG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              LG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              kG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              YG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              pG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              zG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              EG = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              oG = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              XG = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              uG = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              iG = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              CG = arguments.length > 13 ? arguments[13] : void 0,
              gG = arguments.length > 14 ? arguments[14] : void 0;
            super(bG), this._delayedOnLoad = (0, wG.n)(this, WG), this.onLoadObservable = new VG.c, this.url = (0, wG.n)(this, mG, void 0), this.boundingBoxPosition = ((0, wG.n)(this, IG), (0, wG.n)(this, FG, yG.p.Zero())), this._boundingBoxSize = (0, wG.n)(this, vG), this._rotationY = 0, this._files = (0, wG.n)(this, aG, null), this._forcedExtension = ((0, wG.n)(this, cG), (0, wG.n)(this, lG, null)), this._extensions = ((0, wG.n)(this, jG), (0, wG.n)(this, PG, null)), this._textureMatrix = ((0, wG.n)(this, MG), (0, wG.n)(this, AG, void 0)), this._textureMatrixRefraction = ((0, wG.n)(this, sG), (0, wG.n)(this, qG, new yG.e)), this._format = (0, wG.n)(this, nG), this._buffer = null, rG || (rG = !0, JG.c.prototype._partialLoadFile = function(GG, bG, ZG, wG) {
              let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(GG, (GG => {
                ZG[bG] = GG, ZG._internalCount++, 6 === ZG._internalCount && wG(ZG)
              }), void 0, void 0, !0, ((GG, bG) => {
                SG && GG && SG(GG.status + " " + GG.statusText, bG)
              }))
            }, JG.c.prototype._cascadeLoadFiles = function(GG, bG, ZG) {
              let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const SG = [];
              SG._internalCount = 0;
              for (let LG = 0; LG < 6; LG++) this._partialLoadFile(ZG[LG], LG, SG, bG, wG)
            }, JG.c.prototype._cascadeLoadImgs = function(GG, bG, ZG, wG) {
              let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                LG = arguments.length > 5 ? arguments[5] : void 0;
              const yG = [];
              yG._internalCount = 0;
              for (let kG = 0; kG < 6; kG++) this._partialLoadImg(wG[kG], kG, yG, GG, bG, ZG, SG, LG)
            }, JG.c.prototype._partialLoadImg = function(GG, bG, ZG, wG, SG, LG) {
              let yG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                kG = arguments.length > 7 ? arguments[7] : void 0;
              const UG = (0, hG.e)();
              (0, KG.q)(GG, (GG => {
                ZG[bG] = GG, ZG._internalCount++, wG && wG.removePendingData(UG), 6 === ZG._internalCount && LG && LG(SG, ZG)
              }), ((GG, bG) => {
                wG && wG.removePendingData(UG), yG && yG(GG, bG)
              }), wG ? wG.offlineProvider : null, kG), wG && wG.addPendingData(UG)
            }, JG.c.prototype.createCubeTextureBase = function(GG, bG, ZG, wG) {
              let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                yG = arguments.length > 6 ? arguments[6] : void 0,
                kG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                UG = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                YG = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                VG = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                pG = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                KG = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                hG = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                JG = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                rG = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const zG = pG || new fG.b(this, 7);
              zG.isCube = !0, zG.url = GG, zG.generateMipMaps = !wG, zG._lodGenerationScale = YG, zG._lodGenerationOffset = VG, zG._useSRGBBuffer = !!JG && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!wG), zG !== pG && (zG.label = GG.substring(0, 60)), this._doNotHandleContextLost || (zG._extension = kG, zG._files = ZG, zG._buffer = rG);
              const EG = GG;
              this._transformTextureUrl && !pG && (GG = this._transformTextureUrl(GG));
              const oG = kG ?? function(GG) {
                  const bG = GG.split("?")[0],
                    ZG = bG.lastIndexOf(".");
                  return ZG > -1 ? bG.substring(ZG).toLowerCase() : ""
                }(GG),
                XG = (0, dG.e)(oG),
                uG = (GG, bG) => {
                  zG.dispose(), LG ? LG(GG, bG) : GG && QG.c.Warn(GG)
                },
                iG = (LG, pG) => {
                  GG === EG ? LG && uG(LG.status + " " + LG.statusText, pG) : (QG.c.Warn(`Failed to load ${GG}, falling back to the ${EG}`), this.createCubeTextureBase(EG, bG, ZG, !!wG, SG, uG, yG, kG, UG, YG, VG, zG, KG, hG, JG, rG))
                };
              if (XG) XG.then((wG => {
                const LG = GG => {
                  KG && KG(zG, GG), wG.loadCubeData(GG, zG, UG, SG, ((GG, bG) => {
                    uG(GG, bG)
                  }))
                };
                rG ? LG(rG) : ZG && 6 === ZG.length ? wG.supportCascades ? this._cascadeLoadFiles(bG, (GG => LG(GG.map((GG => new Uint8Array(GG))))), ZG, uG) : uG("Textures type does not support cascades.") : this._loadFile(GG, (GG => LG(new Uint8Array(GG))), void 0, bG ? bG.offlineProvider || null : void 0, !0, iG)
              }));
              else {
                if (!ZG || 0 === ZG.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(bG, zG, ((GG, bG) => {
                  hG && hG(GG, bG)
                }), ZG, uG)
              }
              return this._internalTexturesCache.push(zG), zG
            }), this.name = GG, this.url = GG, this._noMipmap = LG, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = yG.e.Identity(), this.coordinatesMode = UG.d.CUBIC_MODE;
            let eG = null;
            null === SG || Array.isArray(SG) ? (this._noMipmap = LG, this._format = zG, this._createPolynomials = XG, ZG = SG, this._loaderOptions = CG, this._useSRGBBuffer = gG, this._lodScale = uG, this._lodOffset = iG) : (ZG = SG.extensions ?? null, this._noMipmap = SG.noMipmap ?? !1, kG = SG.files ?? null, eG = SG.buffer ?? null, this._format = SG.format ?? 5, EG = SG.prefiltered ?? !1, oG = SG.forcedExtension ?? null, this._createPolynomials = SG.createPolynomials ?? !1, this._lodScale = SG.lodScale ?? .8, this._lodOffset = SG.lodOffset ?? 0, this._loaderOptions = SG.loaderOptions, this._useSRGBBuffer = SG.useSRGBBuffer, this._sphericalPolynomialTargetSize = SG.sphericalPolynomialTargetSize ?? 0, YG = SG.onLoad ?? null, pG = SG.onError ?? null), (GG || kG) && this.updateURL(GG, oG, YG, EG, pG, ZG, this.Dv()?.useDelayedTextureLoading, kG, eG)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(GG) {
            let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              yG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              kG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              UG = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = GG), this.url = GG, bG && (this._forcedExtension = bG);
            const YG = GG.lastIndexOf("."),
              VG = bG || (YG > -1 ? GG.substring(YG).toLowerCase() : ""),
              pG = 0 === VG.indexOf(".dds"),
              fG = 0 === VG.indexOf(".env"),
              QG = 0 === VG.indexOf(".basis");
            if (fG ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = wG, wG && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), kG) this._files = kG;
            else if (QG || fG || pG || LG || (LG = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, LG) {
              for (let bG = 0; bG < LG.length; bG++) this._files.push(GG + LG[bG]);
              this._extensions = LG
            }
            this._buffer = UG, yG ? (this.delayLoadState = 4, this._delayedOnLoad = ZG, this._delayedOnError = SG) : this._loadTexture(ZG, SG)
          }
          delayLoad(GG) {
            4 === this.delayLoadState && (GG && (this._forcedExtension = GG), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(GG) {
            if (GG.updateFlag === this._textureMatrix.updateFlag) return;
            if (GG.isIdentity() !== this._textureMatrix.isIdentity() && this.Dv()?.markAllMaterialsAsDirty(1, (GG => -1 !== GG.getActiveTextures().indexOf(this))), this._textureMatrix = GG, !this.Dv()?.useRightHandedSystem) return;
            const bG = yG.j.mK[0],
              ZG = yG.j.Quaternion[0],
              wG = yG.j.mK[1];
            this._textureMatrix.decompose(bG, ZG, wG), ZG.z *= -1, ZG.w *= -1, yG.e.ComposeToRef(bG, ZG, wG, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.Dv()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const ZG = this.Dv(),
              wG = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const SG = () => {
                this.onLoadObservable.notifyObservers(this), wG && (wG.dispose(), this.Dv()?.markAllMaterialsAsDirty(1)), GG && GG()
              },
              yG = (GG, ZG) => {
                this._loadingError = !0, this._errorObject = {
                  message: GG,
                  exception: ZG
                }, bG && bG(GG, ZG), UG.d.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? LG.b.SetImmediate((() => SG())) : this._texture.onLoadedObservable.add((() => SG())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, ZG, this._lodScale, this._lodOffset, GG, yG, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, ZG, this._files, this._noMipmap, GG, yG, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let bG = 0;
            const ZG = this.irradianceTexture,
              wG = pG.b.Clone((() => {
                const ZG = new GG(this.url, this.Dv() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return bG = ZG.uniqueId, ZG
              }), this);
            return wG.uniqueId = bG, ZG && !this.irradianceTexture && (this.irradianceTexture = ZG), wG
          }
        }, (() => {
          const LG = "function" === typeof Symbol && Symbol.metadata ? Object.create(CG[Symbol.metadata] ?? null) : void 0;
          bG = [(0, SG.Q)()], ZG = [(0, SG.M)()], YG = [(0, SG.M)()], zG = [(0, SG.Q)("rotationY")], EG = [(0, SG.Q)("files")], oG = [(0, SG.Q)("forcedExtension")], XG = [(0, SG.Q)("extensions")], uG = [(0, SG.v)("textureMatrix")], iG = [(0, SG.v)("textureMatrixRefraction")], (0, wG.k)(GG, null, YG, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: GG => "boundingBoxSize" in GG,
              get: GG => GG.boundingBoxSize
            },
            metadata: LG
          }, null, WG), (0, wG.k)(GG, null, zG, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: GG => "rotationY" in GG,
              set: (GG, bG) => {
                GG.rotationY = bG
              }
            },
            metadata: LG
          }, null, WG), (0, wG.k)(null, null, bG, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: GG => "url" in GG,
              get: GG => GG.url,
              set: (GG, bG) => {
                GG.url = bG
              }
            },
            metadata: LG
          }, mG, IG), (0, wG.k)(null, null, ZG, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: GG => "boundingBoxPosition" in GG,
              get: GG => GG.boundingBoxPosition,
              set: (GG, bG) => {
                GG.boundingBoxPosition = bG
              }
            },
            metadata: LG
          }, FG, vG), (0, wG.k)(null, null, EG, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: GG => "_files" in GG,
              get: GG => GG._files,
              set: (GG, bG) => {
                GG._files = bG
              }
            },
            metadata: LG
          }, aG, cG), (0, wG.k)(null, null, oG, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: GG => "_forcedExtension" in GG,
              get: GG => GG._forcedExtension,
              set: (GG, bG) => {
                GG._forcedExtension = bG
              }
            },
            metadata: LG
          }, lG, jG), (0, wG.k)(null, null, XG, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: GG => "_extensions" in GG,
              get: GG => GG._extensions,
              set: (GG, bG) => {
                GG._extensions = bG
              }
            },
            metadata: LG
          }, PG, MG), (0, wG.k)(null, null, uG, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: GG => "_textureMatrix" in GG,
              get: GG => GG._textureMatrix,
              set: (GG, bG) => {
                GG._textureMatrix = bG
              }
            },
            metadata: LG
          }, AG, sG), (0, wG.k)(null, null, iG, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: GG => "_textureMatrixRefraction" in GG,
              get: GG => GG._textureMatrixRefraction,
              set: (GG, bG) => {
                GG._textureMatrixRefraction = bG
              }
            },
            metadata: LG
          }, qG, nG), LG && Object.defineProperty(GG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: LG
          })
        })(), GG
      })(),
      EG = !1;

    function oG(GG, bG, ZG) {
      let wG = "";
      for (const SG of GG) wG += SG;
      return new zG(wG, bG, null, ZG, GG)
    }

    function XG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        wG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const SG = bG.useDelayedTextureLoading;
      bG.useDelayedTextureLoading = !1;
      const LG = new zG(GG, bG, null, !1, null, null, null, void 0, !0, ZG, wG);
      return bG.useDelayedTextureLoading = SG, LG
    }

    function uG(GG, bG, ZG) {
      const wG = pG.b.Parse((() => {
        let wG = !1;
        return GG.prefiltered && (wG = GG.prefiltered), new zG(ZG + (GG.url ?? GG.name), bG, GG.extensions, !1, GG.files || null, null, null, void 0, wG, GG.forcedExtension)
      }), GG, bG);
      if (GG.boundingBoxPosition && (wG.boundingBoxPosition = yG.p.FromArray(GG.boundingBoxPosition)), GG.boundingBoxSize && (wG.boundingBoxSize = yG.p.FromArray(GG.boundingBoxSize)), GG.animations)
        for (let SG = 0; SG < GG.animations.length; SG++) {
          const bG = GG.animations[SG],
            ZG = (0, YG.e)("BABYLON.Animation");
          ZG && wG.animations.push(ZG.Parse(bG))
        }
      return wG
    }
    EG || (EG = !0, zG.CreateFromImages = oG, zG.CreateFromPrefilteredData = XG, zG.Parse = uG, UG.d._CubeTextureParser = uG, (0, YG.i)("BABYLON.CubeTexture", zG))
  },
  41574: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => YG
    });
    var wG = ZG(39093),
      SG = ZG(40857),
      LG = ZG(40319),
      yG = ZG(40225),
      kG = ZG(40210);
    let UG = !1;
    class YG extends SG.d {
      constructor(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          YG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          VG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          pG = arguments.length > 6 ? arguments[6] : void 0;
        const fG = !ZG || ZG._isScene;
        super(null, fG ? ZG : ZG?.Ah, fG ? !wG : ZG, pG, YG, void 0, void 0, void 0, void 0, VG), UG || (UG = !0, yG.ThinEngine.prototype.createDynamicTexture = function(GG, bG, ZG, wG) {
          const SG = new kG.b(this, 4);
          return SG.baseWidth = GG, SG.baseHeight = bG, ZG && (GG = this.needPOTTextures ? (0, LG.h)(GG, this._caps.maxTextureSize) : GG, bG = this.needPOTTextures ? (0, LG.h)(bG, this._caps.maxTextureSize) : bG), SG.width = GG, SG.height = bG, SG.isReady = !1, SG.generateMipMaps = ZG, SG.samplingMode = wG, this.updateTextureSamplingMode(wG, SG), this._internalTexturesCache.push(SG), SG
        }, yG.ThinEngine.prototype.updateDynamicTexture = function(GG, bG, ZG) {
          let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            SG = arguments.length > 4 ? arguments[4] : void 0,
            LG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!GG) return;
          const yG = this._gl,
            kG = yG.TEXTURE_2D,
            UG = this._bindTextureDirectly(kG, GG, !0, LG);
          this._unpackFlipY(void 0 === ZG ? GG.invertY : ZG), wG && yG.pixelStorei(yG.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const YG = this._getWebGLTextureType(GG.type),
            VG = this._getInternalFormat(SG || GG.format),
            pG = this._getRGBABufferInternalSizedFormat(GG.type, VG);
          yG.texImage2D(kG, 0, pG, VG, YG, bG), GG.generateMipMaps && yG.generateMipmap(kG), UG || this._bindTextureDirectly(kG, null), wG && yG.pixelStorei(yG.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), SG && (GG.format = SG), GG._dynamicTextureSource = bG, GG._premulAlpha = wG, GG.invertY = ZG || !1, GG.isReady = !0
        }), this.name = GG, this.wrapU = SG.d.CLAMP_ADDRESSMODE, this.wrapV = SG.d.CLAMP_ADDRESSMODE, this._generateMipMaps = wG;
        const QG = this._getEngine();
        if (!QG) return;
        if (bG.getContext) this._canvas = bG, this._ownCanvas = !1, this._texture = QG.createDynamicTexture(this._canvas.width, this._canvas.height, wG, YG);
        else {
          this._canvas = QG.createCanvas(1, 1), this._ownCanvas = !0;
          const GG = bG;
          GG.width || 0 === GG.width ? this._texture = QG.createDynamicTexture(GG.width, GG.height, wG, YG) : this._texture = QG.createDynamicTexture(bG, bG, wG, YG)
        }
        const KG = this.getSize();
        this._canvas.width !== KG.width && (this._canvas.width = KG.width), this._canvas.height !== KG.height && (this._canvas.height = KG.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(GG) {
        this._canvas.width = GG.width, this._canvas.height = GG.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(GG.width, GG.height, this._generateMipMaps, this.samplingMode)
      }
      scale(GG) {
        const bG = this.getSize();
        bG.width *= GG, bG.height *= GG, this._recreate(bG)
      }
      scaleTo(GG, bG) {
        const ZG = this.getSize();
        ZG.width = GG, ZG.height = bG, this._recreate(ZG)
      }
      getContext() {
        return this._context
      }
      clear(GG) {
        const bG = this.getSize();
        GG && (this._context.fillStyle = GG), this._context.clearRect(0, 0, bG.width, bG.height)
      }
      update(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === GG || GG, bG, this._format || void 0, void 0, ZG)
      }
      drawText(GG, bG, ZG, wG, SG, LG, yG) {
        let kG = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const UG = this.getSize();
        if (LG && (this._context.fillStyle = LG, this._context.fillRect(0, 0, UG.width, UG.height)), this._context.font = wG, null === bG || void 0 === bG) {
          const ZG = this._context.measureText(GG);
          bG = (UG.width - ZG.width) / 2
        }
        if (null === ZG || void 0 === ZG) {
          const GG = parseInt(wG.replace(/\D/g, ""));
          ZG = UG.height / 2 + GG / 3.65
        }
        this._context.fillStyle = SG || "", this._context.fillText(GG, bG, ZG), kG && this.update(yG)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const GG = this.Dv();
        if (!GG) return this;
        const bG = this.getSize(),
          ZG = new YG(this.name, bG, GG, this._generateMipMaps);
        return ZG.hasAlpha = this.hasAlpha, ZG.level = this.level, ZG.wrapU = this.wrapU, ZG.wrapV = this.wrapV, ZG
      }
      serialize() {
        const GG = this.Dv();
        GG && !GG.isReady() && wG.c.Warn("The scene must be ready before serializing the dynamic texture");
        const bG = super.serialize();
        return YG._IsCanvasElement(this._canvas) && (bG.base64String = this._canvas.toDataURL()), bG.invertY = this._invertY, bG.samplingMode = this.samplingMode, bG
      }
      static _IsCanvasElement(GG) {
        return void 0 !== GG.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  41539: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG
    });
    var wG = ZG(40857);
    class SG extends wG.d {
      get depth() {
        return this._depth
      }
      constructor(GG, bG, ZG, SG, LG, yG) {
        let kG = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          UG = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          YG = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : wG.d.TRILINEAR_SAMPLINGMODE,
          VG = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          pG = arguments.length > 10 ? arguments[10] : void 0,
          fG = arguments.length > 11 ? arguments[11] : void 0;
        super(null, yG, !kG, UG), this.format = LG, this._texture = yG.CK().createRawTexture2DArray(GG, bG, ZG, SG, LG, kG, UG, YG, null, VG, pG ?? 0, fG), this._depth = SG, this.is2DArray = !0
      }
      update(GG) {
        this.updateMipLevel(GG, 0)
      }
      updateMipLevel(GG, bG) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, GG, this._texture.format, this._texture.invertY, null, this._texture.type, bG)
      }
      static CreateRGBATexture(GG, bG, ZG, wG, LG) {
        return new SG(GG, bG, ZG, wG, 5, LG, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  41531: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => wG.e
    });
    var wG = ZG(40735);
    (0, wG.f)()
  },
  40467: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => wG.f
    });
    var wG = ZG(40475);
    (0, wG.d)()
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);