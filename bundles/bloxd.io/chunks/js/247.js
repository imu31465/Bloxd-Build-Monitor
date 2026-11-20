export const id = 247;
export const ids = [247];
export const modules = {
  39629: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU,
      f: () => TU
    });
    var tU = gU(38236),
      pU = gU(39395),
      EU = gU(39603),
      PU = {};
    class TU {
      constructor(UU) {
        this.attachedToElement = !1, this.attached = {}, this.camera = UU, this.checkInputs = () => {}
      }
      add(UU) {
        const RU = UU.getSimpleName();
        this.attached[RU] ? tU.e.Warn("camera input of type " + RU + " already exists on camera") : (this.attached[RU] = UU, UU.camera = this.camera, UU.checkInputs && (this.checkInputs = this._addCheckInputs(UU.checkInputs.bind(UU))), this.attachedToElement && UU.attachControl(this.noPreventDefault))
      }
      remove(UU) {
        for (const RU in this.attached) {
          const gU = this.attached[RU];
          if (gU === UU) return gU.detachControl(), gU.camera = null, delete this.attached[RU], void this.rebuildInputCheck()
        }
      }
      removeByType(UU) {
        for (const RU in this.attached) {
          const gU = this.attached[RU];
          gU.getClassName() === UU && (gU.detachControl(), gU.camera = null, delete this.attached[RU], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(UU) {
        const RU = this.checkInputs;
        return () => {
          RU(), UU()
        }
      }
      attachInput(UU) {
        this.attachedToElement && UU.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          UU = !EU.d.ForceAttachControlToAlwaysPreventDefault && UU, this.attachedToElement = !0, this.noPreventDefault = UU;
          for (const RU in this.attached) this.attached[RU].attachControl(UU)
        }
      }
      detachElement() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const RU in this.attached) this.attached[RU].detachControl(), UU && (this.attached[RU].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const UU in this.attached) {
          const RU = this.attached[UU];
          RU.checkInputs && (this.checkInputs = this._addCheckInputs(RU.checkInputs.bind(RU)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(UU) {
        const RU = {};
        for (const gU in this.attached) {
          const UU = this.attached[gU],
            tU = pU.b.Serialize(UU);
          RU[UU.getClassName()] = tU
        }
        UU.inputsmgr = RU
      }
      parse(UU) {
        const RU = UU.inputsmgr;
        if (RU) {
          this.clear();
          for (const UU in RU) {
            const gU = PU[UU];
            if (gU) {
              const tU = RU[UU],
                EU = pU.b.Parse((() => new gU), tU, null);
              this.add(EU)
            }
          }
        } else
          for (const gU in this.attached) {
            const RU = PU[this.attached[gU].getClassName()];
            if (RU) {
              const tU = pU.b.Parse((() => new RU), UU, null);
              this.remove(this.attached[gU]), this.add(tU)
            }
          }
      }
    }
  },
  40511: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => fU
    });
    var tU = gU(39377),
      pU = gU(39380),
      EU = gU(39268),
      PU = gU(36600),
      TU = gU(39373),
      qU = gU(39855),
      KU = gU(36639),
      cU = gU(36624),
      GU = gU(39395),
      jU = gU(39203),
      uU = gU(38236),
      CU = gU(39424),
      hU = gU(37439),
      QU = gU(39452);
    var eU = gU(39272);
    let WU = !1;
    let fU = (() => {
        var UU;
        let RU, gU, KU, fU, xU, mU, IU, JU, wU, nU = TU.b,
          bU = [],
          oU = [],
          ZU = [],
          aU = [],
          YU = [],
          BU = [],
          VU = [],
          rU = [],
          XU = [],
          vU = [],
          dU = [],
          HU = [],
          SU = [],
          sU = [],
          yU = [];
        return UU = class extends nU {
          set boundingBoxSize(UU) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(UU)) return;
            this._boundingBoxSize = UU;
            const RU = this.aZ();
            RU && RU.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(UU) {
            this._rotationY = UU, this.setReflectionTextureMatrix(PU.c.RotationY(this._rotationY))
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
          constructor(UU, RU) {
            let gU, pU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              EU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              TU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              KU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              GU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              fU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              xU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              mU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              IU = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              JU = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              wU = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              nU = arguments.length > 13 ? arguments[13] : void 0,
              kU = arguments.length > 14 ? arguments[14] : void 0;
            super(RU), this._delayedOnLoad = (0, tU.j)(this, bU), this.onLoadObservable = new cU.b, this.url = (0, tU.j)(this, oU, void 0), this.boundingBoxPosition = ((0, tU.j)(this, ZU), (0, tU.j)(this, aU, PU.n.Zero())), this._boundingBoxSize = (0, tU.j)(this, YU), this._rotationY = 0, this._files = (0, tU.j)(this, BU, null), this._forcedExtension = ((0, tU.j)(this, VU), (0, tU.j)(this, rU, null)), this._extensions = ((0, tU.j)(this, XU), (0, tU.j)(this, vU, null)), this._textureMatrix = ((0, tU.j)(this, dU), (0, tU.j)(this, HU, void 0)), this._textureMatrixRefraction = ((0, tU.j)(this, SU), (0, tU.j)(this, sU, new PU.c)), this._format = (0, tU.j)(this, yU), this._buffer = null, WU || (WU = !0, eU.d.prototype._partialLoadFile = function(UU, RU, gU, tU) {
              let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(UU, (UU => {
                gU[RU] = UU, gU._internalCount++, 6 === gU._internalCount && tU(gU)
              }), void 0, void 0, !0, ((UU, RU) => {
                pU && UU && pU(UU.status + " " + UU.statusText, RU)
              }))
            }, eU.d.prototype._cascadeLoadFiles = function(UU, RU, gU) {
              let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const pU = [];
              pU._internalCount = 0;
              for (let EU = 0; EU < 6; EU++) this._partialLoadFile(gU[EU], EU, pU, RU, tU)
            }, eU.d.prototype._cascadeLoadImgs = function(UU, RU, gU, tU) {
              let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                EU = arguments.length > 5 ? arguments[5] : void 0;
              const PU = [];
              PU._internalCount = 0;
              for (let TU = 0; TU < 6; TU++) this._partialLoadImg(tU[TU], TU, PU, UU, RU, gU, pU, EU)
            }, eU.d.prototype._partialLoadImg = function(UU, RU, gU, tU, pU, EU) {
              let PU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                TU = arguments.length > 7 ? arguments[7] : void 0;
              const qU = (0, hU.b)();
              (0, CU.p)(UU, (UU => {
                gU[RU] = UU, gU._internalCount++, tU && tU.removePendingData(qU), 6 === gU._internalCount && EU && EU(pU, gU)
              }), ((UU, RU) => {
                tU && tU.removePendingData(qU), PU && PU(UU, RU)
              }), tU ? tU.offlineProvider : null, TU), tU && tU.addPendingData(qU)
            }, eU.d.prototype.createCubeTextureBase = function(UU, RU, gU, tU) {
              let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                PU = arguments.length > 6 ? arguments[6] : void 0,
                TU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                qU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                KU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                cU = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                GU = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                CU = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                hU = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                eU = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                WU = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const fU = GU || new jU.d(this, 7);
              fU.isCube = !0, fU.url = UU, fU.generateMipMaps = !tU, fU._lodGenerationScale = KU, fU._lodGenerationOffset = cU, fU._useSRGBBuffer = !!eU && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!tU), fU !== GU && (fU.label = UU.substring(0, 60)), this._doNotHandleContextLost || (fU._extension = TU, fU._files = gU, fU._buffer = WU);
              const xU = UU;
              this._transformTextureUrl && !GU && (UU = this._transformTextureUrl(UU));
              const mU = TU ?? function(UU) {
                  const RU = UU.split("?")[0],
                    gU = RU.lastIndexOf(".");
                  return gU > -1 ? RU.substring(gU).toLowerCase() : ""
                }(UU),
                IU = (0, QU.d)(mU),
                JU = (UU, RU) => {
                  fU.dispose(), EU ? EU(UU, RU) : UU && uU.e.Warn(UU)
                },
                wU = (EU, GU) => {
                  UU === xU ? EU && JU(EU.status + " " + EU.statusText, GU) : (uU.e.Warn(`Failed to load ${UU}, falling back to the ${xU}`), this.createCubeTextureBase(xU, RU, gU, !!tU, pU, JU, PU, TU, qU, KU, cU, fU, CU, hU, eU, WU))
                };
              if (IU) IU.then((tU => {
                const EU = UU => {
                  CU && CU(fU, UU), tU.loadCubeData(UU, fU, qU, pU, ((UU, RU) => {
                    JU(UU, RU)
                  }))
                };
                WU ? EU(WU) : gU && 6 === gU.length ? tU.supportCascades ? this._cascadeLoadFiles(RU, (UU => EU(UU.map((UU => new Uint8Array(UU))))), gU, JU) : JU("Textures type does not support cascades.") : this._loadFile(UU, (UU => EU(new Uint8Array(UU))), void 0, RU ? RU.offlineProvider || null : void 0, !0, wU)
              }));
              else {
                if (!gU || 0 === gU.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(RU, fU, ((UU, RU) => {
                  hU && hU(UU, RU)
                }), gU, JU)
              }
              return this._internalTexturesCache.push(fU), fU
            }), this.name = UU, this.url = UU, this._noMipmap = EU, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = PU.c.Identity(), this.coordinatesMode = qU.e.CUBIC_MODE;
            let FU = null;
            null === pU || Array.isArray(pU) ? (this._noMipmap = EU, this._format = fU, this._createPolynomials = IU, gU = pU, this._loaderOptions = nU, this._useSRGBBuffer = kU, this._lodScale = JU, this._lodOffset = wU) : (gU = pU.extensions ?? null, this._noMipmap = pU.noMipmap ?? !1, TU = pU.files ?? null, FU = pU.buffer ?? null, this._format = pU.format ?? 5, xU = pU.prefiltered ?? !1, mU = pU.forcedExtension ?? null, this._createPolynomials = pU.createPolynomials ?? !1, this._lodScale = pU.lodScale ?? .8, this._lodOffset = pU.lodOffset ?? 0, this._loaderOptions = pU.loaderOptions, this._useSRGBBuffer = pU.useSRGBBuffer, this._sphericalPolynomialTargetSize = pU.sphericalPolynomialTargetSize ?? 0, KU = pU.onLoad ?? null, GU = pU.onError ?? null), (UU || TU) && this.updateURL(UU, mU, KU, xU, GU, gU, this.aZ()?.useDelayedTextureLoading, TU, FU)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(UU) {
            let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              PU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              TU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              qU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = UU), this.url = UU, RU && (this._forcedExtension = RU);
            const KU = UU.lastIndexOf("."),
              cU = RU || (KU > -1 ? UU.substring(KU).toLowerCase() : ""),
              GU = 0 === cU.indexOf(".dds"),
              jU = 0 === cU.indexOf(".env"),
              uU = 0 === cU.indexOf(".basis");
            if (jU ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = tU, tU && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), TU) this._files = TU;
            else if (uU || jU || GU || EU || (EU = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, EU) {
              for (let RU = 0; RU < EU.length; RU++) this._files.push(UU + EU[RU]);
              this._extensions = EU
            }
            this._buffer = qU, PU ? (this.delayLoadState = 4, this._delayedOnLoad = gU, this._delayedOnError = pU) : this._loadTexture(gU, pU)
          }
          delayLoad(UU) {
            4 === this.delayLoadState && (UU && (this._forcedExtension = UU), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(UU) {
            if (UU.updateFlag === this._textureMatrix.updateFlag) return;
            if (UU.isIdentity() !== this._textureMatrix.isIdentity() && this.aZ()?.markAllMaterialsAsDirty(1, (UU => -1 !== UU.getActiveTextures().indexOf(this))), this._textureMatrix = UU, !this.aZ()?.useRightHandedSystem) return;
            const RU = PU.h.xC[0],
              gU = PU.h.Quaternion[0],
              tU = PU.h.xC[1];
            this._textureMatrix.decompose(RU, gU, tU), gU.z *= -1, gU.w *= -1, PU.c.ComposeToRef(RU, gU, tU, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.aZ()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const gU = this.aZ(),
              tU = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const pU = () => {
                this.onLoadObservable.notifyObservers(this), tU && (tU.dispose(), this.aZ()?.markAllMaterialsAsDirty(1)), UU && UU()
              },
              PU = (UU, gU) => {
                this._loadingError = !0, this._errorObject = {
                  message: UU,
                  exception: gU
                }, RU && RU(UU, gU), qU.e.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? EU.b.SetImmediate((() => pU())) : this._texture.onLoadedObservable.add((() => pU())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, gU, this._lodScale, this._lodOffset, UU, PU, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, gU, this._files, this._noMipmap, UU, PU, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let RU = 0;
            const gU = this.irradianceTexture,
              tU = GU.b.Clone((() => {
                const gU = new UU(this.url, this.aZ() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return RU = gU.uniqueId, gU
              }), this);
            return tU.uniqueId = RU, gU && !this.irradianceTexture && (this.irradianceTexture = gU), tU
          }
        }, (() => {
          const EU = "function" === typeof Symbol && Symbol.metadata ? Object.create(nU[Symbol.metadata] ?? null) : void 0;
          RU = [(0, pU.K)()], gU = [(0, pU.I)()], KU = [(0, pU.I)()], fU = [(0, pU.K)("rotationY")], xU = [(0, pU.K)("files")], mU = [(0, pU.K)("forcedExtension")], IU = [(0, pU.K)("extensions")], JU = [(0, pU.v)("textureMatrix")], wU = [(0, pU.v)("textureMatrixRefraction")], (0, tU.i)(UU, null, KU, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: UU => "boundingBoxSize" in UU,
              get: UU => UU.boundingBoxSize
            },
            metadata: EU
          }, null, bU), (0, tU.i)(UU, null, fU, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: UU => "rotationY" in UU,
              set: (UU, RU) => {
                UU.rotationY = RU
              }
            },
            metadata: EU
          }, null, bU), (0, tU.i)(null, null, RU, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: UU => "url" in UU,
              get: UU => UU.url,
              set: (UU, RU) => {
                UU.url = RU
              }
            },
            metadata: EU
          }, oU, ZU), (0, tU.i)(null, null, gU, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: UU => "boundingBoxPosition" in UU,
              get: UU => UU.boundingBoxPosition,
              set: (UU, RU) => {
                UU.boundingBoxPosition = RU
              }
            },
            metadata: EU
          }, aU, YU), (0, tU.i)(null, null, xU, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: UU => "_files" in UU,
              get: UU => UU._files,
              set: (UU, RU) => {
                UU._files = RU
              }
            },
            metadata: EU
          }, BU, VU), (0, tU.i)(null, null, mU, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: UU => "_forcedExtension" in UU,
              get: UU => UU._forcedExtension,
              set: (UU, RU) => {
                UU._forcedExtension = RU
              }
            },
            metadata: EU
          }, rU, XU), (0, tU.i)(null, null, IU, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: UU => "_extensions" in UU,
              get: UU => UU._extensions,
              set: (UU, RU) => {
                UU._extensions = RU
              }
            },
            metadata: EU
          }, vU, dU), (0, tU.i)(null, null, JU, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: UU => "_textureMatrix" in UU,
              get: UU => UU._textureMatrix,
              set: (UU, RU) => {
                UU._textureMatrix = RU
              }
            },
            metadata: EU
          }, HU, SU), (0, tU.i)(null, null, wU, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: UU => "_textureMatrixRefraction" in UU,
              get: UU => UU._textureMatrixRefraction,
              set: (UU, RU) => {
                UU._textureMatrixRefraction = RU
              }
            },
            metadata: EU
          }, sU, yU), EU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EU
          })
        })(), UU
      })(),
      xU = !1;

    function mU(UU, RU, gU) {
      let tU = "";
      for (const pU of UU) tU += pU;
      return new fU(tU, RU, null, gU, UU)
    }

    function IU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        tU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const pU = RU.useDelayedTextureLoading;
      RU.useDelayedTextureLoading = !1;
      const EU = new fU(UU, RU, null, !1, null, null, null, void 0, !0, gU, tU);
      return RU.useDelayedTextureLoading = pU, EU
    }

    function JU(UU, RU, gU) {
      const tU = GU.b.Parse((() => {
        let tU = !1;
        return UU.prefiltered && (tU = UU.prefiltered), new fU(gU + (UU.url ?? UU.name), RU, UU.extensions, !1, UU.files || null, null, null, void 0, tU, UU.forcedExtension)
      }), UU, RU);
      if (UU.boundingBoxPosition && (tU.boundingBoxPosition = PU.n.FromArray(UU.boundingBoxPosition)), UU.boundingBoxSize && (tU.boundingBoxSize = PU.n.FromArray(UU.boundingBoxSize)), UU.animations)
        for (let pU = 0; pU < UU.animations.length; pU++) {
          const RU = UU.animations[pU],
            gU = (0, KU.e)("BABYLON.Animation");
          gU && tU.animations.push(gU.Parse(RU))
        }
      return tU
    }
    xU || (xU = !0, fU.CreateFromImages = mU, fU.CreateFromPrefilteredData = IU, fU.Parse = JU, qU.e._CubeTextureParser = JU, (0, KU.g)("BABYLON.CubeTexture", fU))
  },
  40546: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => KU
    });
    var tU = gU(38236),
      pU = gU(39855),
      EU = gU(39311),
      PU = gU(39215),
      TU = gU(39203);
    let qU = !1;
    class KU extends pU.e {
      constructor(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          KU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          cU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          GU = arguments.length > 6 ? arguments[6] : void 0;
        const jU = !gU || gU._isScene;
        super(null, jU ? gU : gU?.Zh, jU ? !tU : gU, GU, KU, void 0, void 0, void 0, void 0, cU), qU || (qU = !0, PU.ThinEngine.prototype.createDynamicTexture = function(UU, RU, gU, tU) {
          const pU = new TU.d(this, 4);
          return pU.baseWidth = UU, pU.baseHeight = RU, gU && (UU = this.needPOTTextures ? (0, EU.e)(UU, this._caps.maxTextureSize) : UU, RU = this.needPOTTextures ? (0, EU.e)(RU, this._caps.maxTextureSize) : RU), pU.width = UU, pU.height = RU, pU.isReady = !1, pU.generateMipMaps = gU, pU.samplingMode = tU, this.updateTextureSamplingMode(tU, pU), this._internalTexturesCache.push(pU), pU
        }, PU.ThinEngine.prototype.updateDynamicTexture = function(UU, RU, gU) {
          let tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            pU = arguments.length > 4 ? arguments[4] : void 0,
            EU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!UU) return;
          const PU = this._gl,
            TU = PU.TEXTURE_2D,
            qU = this._bindTextureDirectly(TU, UU, !0, EU);
          this._unpackFlipY(void 0 === gU ? UU.invertY : gU), tU && PU.pixelStorei(PU.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const KU = this._getWebGLTextureType(UU.type),
            cU = this._getInternalFormat(pU || UU.format),
            GU = this._getRGBABufferInternalSizedFormat(UU.type, cU);
          PU.texImage2D(TU, 0, GU, cU, KU, RU), UU.generateMipMaps && PU.generateMipmap(TU), qU || this._bindTextureDirectly(TU, null), tU && PU.pixelStorei(PU.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), pU && (UU.format = pU), UU._dynamicTextureSource = RU, UU._premulAlpha = tU, UU.invertY = gU || !1, UU.isReady = !0
        }), this.name = UU, this.wrapU = pU.e.CLAMP_ADDRESSMODE, this.wrapV = pU.e.CLAMP_ADDRESSMODE, this._generateMipMaps = tU;
        const uU = this._getEngine();
        if (!uU) return;
        if (RU.getContext) this._canvas = RU, this._ownCanvas = !1, this._texture = uU.createDynamicTexture(this._canvas.width, this._canvas.height, tU, KU);
        else {
          this._canvas = uU.createCanvas(1, 1), this._ownCanvas = !0;
          const UU = RU;
          UU.width || 0 === UU.width ? this._texture = uU.createDynamicTexture(UU.width, UU.height, tU, KU) : this._texture = uU.createDynamicTexture(RU, RU, tU, KU)
        }
        const CU = this.getSize();
        this._canvas.width !== CU.width && (this._canvas.width = CU.width), this._canvas.height !== CU.height && (this._canvas.height = CU.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(UU) {
        this._canvas.width = UU.width, this._canvas.height = UU.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(UU.width, UU.height, this._generateMipMaps, this.samplingMode)
      }
      scale(UU) {
        const RU = this.getSize();
        RU.width *= UU, RU.height *= UU, this._recreate(RU)
      }
      scaleTo(UU, RU) {
        const gU = this.getSize();
        gU.width = UU, gU.height = RU, this._recreate(gU)
      }
      getContext() {
        return this._context
      }
      clear(UU) {
        const RU = this.getSize();
        UU && (this._context.fillStyle = UU), this._context.clearRect(0, 0, RU.width, RU.height)
      }
      update(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === UU || UU, RU, this._format || void 0, void 0, gU)
      }
      drawText(UU, RU, gU, tU, pU, EU, PU) {
        let TU = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const qU = this.getSize();
        if (EU && (this._context.fillStyle = EU, this._context.fillRect(0, 0, qU.width, qU.height)), this._context.font = tU, null === RU || void 0 === RU) {
          const gU = this._context.measureText(UU);
          RU = (qU.width - gU.width) / 2
        }
        if (null === gU || void 0 === gU) {
          const UU = parseInt(tU.replace(/\D/g, ""));
          gU = qU.height / 2 + UU / 3.65
        }
        this._context.fillStyle = pU || "", this._context.fillText(UU, RU, gU), TU && this.update(PU)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const UU = this.aZ();
        if (!UU) return this;
        const RU = this.getSize(),
          gU = new KU(this.name, RU, UU, this._generateMipMaps);
        return gU.hasAlpha = this.hasAlpha, gU.level = this.level, gU.wrapU = this.wrapU, gU.wrapV = this.wrapV, gU
      }
      serialize() {
        const UU = this.aZ();
        UU && !UU.isReady() && tU.e.Warn("The scene must be ready before serializing the dynamic texture");
        const RU = super.serialize();
        return KU._IsCanvasElement(this._canvas) && (RU.base64String = this._canvas.toDataURL()), RU.invertY = this._invertY, RU.samplingMode = this.samplingMode, RU
      }
      static _IsCanvasElement(UU) {
        return void 0 !== UU.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  40525: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => pU
    });
    var tU = gU(39855);
    class pU extends tU.e {
      get depth() {
        return this._depth
      }
      constructor(UU, RU, gU, pU, EU, PU) {
        let TU = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          qU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          KU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : tU.e.TRILINEAR_SAMPLINGMODE,
          cU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          GU = arguments.length > 10 ? arguments[10] : void 0,
          jU = arguments.length > 11 ? arguments[11] : void 0;
        super(null, PU, !TU, qU), this.format = EU, this._texture = PU.WC().createRawTexture2DArray(UU, RU, gU, pU, EU, TU, qU, KU, null, cU, GU ?? 0, jU), this._depth = pU, this.is2DArray = !0
      }
      update(UU) {
        this.updateMipLevel(UU, 0)
      }
      updateMipLevel(UU, RU) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, UU, this._texture.format, this._texture.invertY, null, this._texture.type, RU)
      }
      static CreateRGBATexture(UU, RU, gU, tU, EU) {
        return new pU(UU, RU, gU, tU, 5, EU, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  40522: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU.b
    });
    var tU = gU(39752);
    (0, tU.f)()
  },
  39460: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU.f
    });
    var tU = gU(39468);
    (0, tU.c)()
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);