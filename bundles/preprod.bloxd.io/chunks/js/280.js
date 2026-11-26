export const id = 280;
export const ids = [280];
export const modules = {
  41323: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU,
      h: () => FU
    });
    var cU = zU(39493),
      yU = zU(41134),
      QU = zU(41309),
      AU = {};
    class FU {
      constructor(UU) {
        this.attachedToElement = !1, this.attached = {}, this.camera = UU, this.checkInputs = () => {}
      }
      add(UU) {
        const XU = UU.getSimpleName();
        this.attached[XU] ? cU.b.Warn("camera input of type " + XU + " already exists on camera") : (this.attached[XU] = UU, UU.camera = this.camera, UU.checkInputs && (this.checkInputs = this._addCheckInputs(UU.checkInputs.bind(UU))), this.attachedToElement && UU.attachControl(this.noPreventDefault))
      }
      remove(UU) {
        for (const XU in this.attached) {
          const zU = this.attached[XU];
          if (zU === UU) return zU.detachControl(), zU.camera = null, delete this.attached[XU], void this.rebuildInputCheck()
        }
      }
      removeByType(UU) {
        for (const XU in this.attached) {
          const zU = this.attached[XU];
          zU.getClassName() === UU && (zU.detachControl(), zU.camera = null, delete this.attached[XU], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(UU) {
        const XU = this.checkInputs;
        return () => {
          XU(), UU()
        }
      }
      attachInput(UU) {
        this.attachedToElement && UU.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          UU = !QU.d.ForceAttachControlToAlwaysPreventDefault && UU, this.attachedToElement = !0, this.noPreventDefault = UU;
          for (const XU in this.attached) this.attached[XU].attachControl(UU)
        }
      }
      detachElement() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const XU in this.attached) this.attached[XU].detachControl(), UU && (this.attached[XU].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const UU in this.attached) {
          const XU = this.attached[UU];
          XU.checkInputs && (this.checkInputs = this._addCheckInputs(XU.checkInputs.bind(XU)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(UU) {
        const XU = {};
        for (const zU in this.attached) {
          const UU = this.attached[zU],
            cU = yU.b.Serialize(UU);
          XU[UU.getClassName()] = cU
        }
        UU.inputsmgr = XU
      }
      parse(UU) {
        const XU = UU.inputsmgr;
        if (XU) {
          this.clear();
          for (const UU in XU) {
            const zU = AU[UU];
            if (zU) {
              const cU = XU[UU],
                QU = yU.b.Parse((() => new zU), cU, null);
              this.add(QU)
            }
          }
        } else
          for (const zU in this.attached) {
            const XU = AU[this.attached[zU].getClassName()];
            if (XU) {
              const cU = yU.b.Parse((() => new XU), UU, null);
              this.remove(this.attached[zU]), this.add(cU)
            }
          }
      }
    }
  },
  42233: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => GU
    });
    var cU = zU(41113),
      yU = zU(41121),
      QU = zU(40999),
      AU = zU(37819),
      FU = zU(41108),
      oU = zU(41557),
      DU = zU(37863),
      EU = zU(37846),
      YU = zU(41134),
      NU = zU(40940),
      IU = zU(39493),
      pU = zU(41152),
      aU = zU(38649),
      tU = zU(41194);
    var gU = zU(41003);
    let kU = !1;
    let GU = (() => {
        var UU;
        let XU, zU, DU, GU, BU, ZU, RU, PU, WU, dU = FU.e,
          LU = [],
          eU = [],
          CU = [],
          wU = [],
          qU = [],
          OU = [],
          SU = [],
          rU = [],
          uU = [],
          fU = [],
          iU = [],
          HU = [],
          MU = [],
          vU = [],
          VU = [];
        return UU = class extends dU {
          set boundingBoxSize(UU) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(UU)) return;
            this._boundingBoxSize = UU;
            const XU = this.nS();
            XU && XU.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(UU) {
            this._rotationY = UU, this.setReflectionTextureMatrix(AU.e.RotationY(this._rotationY))
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
          constructor(UU, XU) {
            let zU, yU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              QU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              FU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              DU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              YU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              GU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              BU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              ZU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              RU = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              PU = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              WU = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              dU = arguments.length > 13 ? arguments[13] : void 0,
              sU = arguments.length > 14 ? arguments[14] : void 0;
            super(XU), this._delayedOnLoad = (0, cU.n)(this, LU), this.onLoadObservable = new EU.e, this.url = (0, cU.n)(this, eU, void 0), this.boundingBoxPosition = ((0, cU.n)(this, CU), (0, cU.n)(this, wU, AU.q.Zero())), this._boundingBoxSize = (0, cU.n)(this, qU), this._rotationY = 0, this._files = (0, cU.n)(this, OU, null), this._forcedExtension = ((0, cU.n)(this, SU), (0, cU.n)(this, rU, null)), this._extensions = ((0, cU.n)(this, uU), (0, cU.n)(this, fU, null)), this._textureMatrix = ((0, cU.n)(this, iU), (0, cU.n)(this, HU, void 0)), this._textureMatrixRefraction = ((0, cU.n)(this, MU), (0, cU.n)(this, vU, new AU.e)), this._format = (0, cU.n)(this, VU), this._buffer = null, kU || (kU = !0, gU.c.prototype._partialLoadFile = function(UU, XU, zU, cU) {
              let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(UU, (UU => {
                zU[XU] = UU, zU._internalCount++, 6 === zU._internalCount && cU(zU)
              }), void 0, void 0, !0, ((UU, XU) => {
                yU && UU && yU(UU.status + " " + UU.statusText, XU)
              }))
            }, gU.c.prototype._cascadeLoadFiles = function(UU, XU, zU) {
              let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const yU = [];
              yU._internalCount = 0;
              for (let QU = 0; QU < 6; QU++) this._partialLoadFile(zU[QU], QU, yU, XU, cU)
            }, gU.c.prototype._cascadeLoadImgs = function(UU, XU, zU, cU) {
              let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                QU = arguments.length > 5 ? arguments[5] : void 0;
              const AU = [];
              AU._internalCount = 0;
              for (let FU = 0; FU < 6; FU++) this._partialLoadImg(cU[FU], FU, AU, UU, XU, zU, yU, QU)
            }, gU.c.prototype._partialLoadImg = function(UU, XU, zU, cU, yU, QU) {
              let AU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                FU = arguments.length > 7 ? arguments[7] : void 0;
              const oU = (0, aU.d)();
              (0, pU.s)(UU, (UU => {
                zU[XU] = UU, zU._internalCount++, cU && cU.removePendingData(oU), 6 === zU._internalCount && QU && QU(yU, zU)
              }), ((UU, XU) => {
                cU && cU.removePendingData(oU), AU && AU(UU, XU)
              }), cU ? cU.offlineProvider : null, FU), cU && cU.addPendingData(oU)
            }, gU.c.prototype.createCubeTextureBase = function(UU, XU, zU, cU) {
              let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                AU = arguments.length > 6 ? arguments[6] : void 0,
                FU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                oU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                DU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                EU = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                YU = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                pU = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                aU = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                gU = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                kU = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const GU = YU || new NU.e(this, 7);
              GU.isCube = !0, GU.url = UU, GU.generateMipMaps = !cU, GU._lodGenerationScale = DU, GU._lodGenerationOffset = EU, GU._useSRGBBuffer = !!gU && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!cU), GU !== YU && (GU.label = UU.substring(0, 60)), this._doNotHandleContextLost || (GU._extension = FU, GU._files = zU, GU._buffer = kU);
              const BU = UU;
              this._transformTextureUrl && !YU && (UU = this._transformTextureUrl(UU));
              const ZU = FU ?? function(UU) {
                  const XU = UU.split("?")[0],
                    zU = XU.lastIndexOf(".");
                  return zU > -1 ? XU.substring(zU).toLowerCase() : ""
                }(UU),
                RU = (0, tU.e)(ZU),
                PU = (UU, XU) => {
                  GU.dispose(), QU ? QU(UU, XU) : UU && IU.b.Warn(UU)
                },
                WU = (QU, YU) => {
                  UU === BU ? QU && PU(QU.status + " " + QU.statusText, YU) : (IU.b.Warn(`Failed to load ${UU}, falling back to the ${BU}`), this.createCubeTextureBase(BU, XU, zU, !!cU, yU, PU, AU, FU, oU, DU, EU, GU, pU, aU, gU, kU))
                };
              if (RU) RU.then((cU => {
                const QU = UU => {
                  pU && pU(GU, UU), cU.loadCubeData(UU, GU, oU, yU, ((UU, XU) => {
                    PU(UU, XU)
                  }))
                };
                kU ? QU(kU) : zU && 6 === zU.length ? cU.supportCascades ? this._cascadeLoadFiles(XU, (UU => QU(UU.map((UU => new Uint8Array(UU))))), zU, PU) : PU("Textures type does not support cascades.") : this._loadFile(UU, (UU => QU(new Uint8Array(UU))), void 0, XU ? XU.offlineProvider || null : void 0, !0, WU)
              }));
              else {
                if (!zU || 0 === zU.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(XU, GU, ((UU, XU) => {
                  aU && aU(UU, XU)
                }), zU, PU)
              }
              return this._internalTexturesCache.push(GU), GU
            }), this.name = UU, this.url = UU, this._noMipmap = QU, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = AU.e.Identity(), this.coordinatesMode = oU.e.CUBIC_MODE;
            let nU = null;
            null === yU || Array.isArray(yU) ? (this._noMipmap = QU, this._format = GU, this._createPolynomials = RU, zU = yU, this._loaderOptions = dU, this._useSRGBBuffer = sU, this._lodScale = PU, this._lodOffset = WU) : (zU = yU.extensions ?? null, this._noMipmap = yU.noMipmap ?? !1, FU = yU.files ?? null, nU = yU.buffer ?? null, this._format = yU.format ?? 5, BU = yU.prefiltered ?? !1, ZU = yU.forcedExtension ?? null, this._createPolynomials = yU.createPolynomials ?? !1, this._lodScale = yU.lodScale ?? .8, this._lodOffset = yU.lodOffset ?? 0, this._loaderOptions = yU.loaderOptions, this._useSRGBBuffer = yU.useSRGBBuffer, this._sphericalPolynomialTargetSize = yU.sphericalPolynomialTargetSize ?? 0, DU = yU.onLoad ?? null, YU = yU.onError ?? null), (UU || FU) && this.updateURL(UU, ZU, DU, BU, YU, zU, this.nS()?.useDelayedTextureLoading, FU, nU)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              AU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              FU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              oU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = UU), this.url = UU, XU && (this._forcedExtension = XU);
            const DU = UU.lastIndexOf("."),
              EU = XU || (DU > -1 ? UU.substring(DU).toLowerCase() : ""),
              YU = 0 === EU.indexOf(".dds"),
              NU = 0 === EU.indexOf(".env"),
              IU = 0 === EU.indexOf(".basis");
            if (NU ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = cU, cU && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), FU) this._files = FU;
            else if (IU || NU || YU || QU || (QU = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, QU) {
              for (let XU = 0; XU < QU.length; XU++) this._files.push(UU + QU[XU]);
              this._extensions = QU
            }
            this._buffer = oU, AU ? (this.delayLoadState = 4, this._delayedOnLoad = zU, this._delayedOnError = yU) : this._loadTexture(zU, yU)
          }
          delayLoad(UU) {
            4 === this.delayLoadState && (UU && (this._forcedExtension = UU), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(UU) {
            if (UU.updateFlag === this._textureMatrix.updateFlag) return;
            if (UU.isIdentity() !== this._textureMatrix.isIdentity() && this.nS()?.markAllMaterialsAsDirty(1, (UU => -1 !== UU.getActiveTextures().indexOf(this))), this._textureMatrix = UU, !this.nS()?.useRightHandedSystem) return;
            const XU = AU.l.Sp[0],
              zU = AU.l.Quaternion[0],
              cU = AU.l.Sp[1];
            this._textureMatrix.decompose(XU, zU, cU), zU.z *= -1, zU.w *= -1, AU.e.ComposeToRef(XU, zU, cU, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.nS()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const zU = this.nS(),
              cU = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const yU = () => {
                this.onLoadObservable.notifyObservers(this), cU && (cU.dispose(), this.nS()?.markAllMaterialsAsDirty(1)), UU && UU()
              },
              AU = (UU, zU) => {
                this._loadingError = !0, this._errorObject = {
                  message: UU,
                  exception: zU
                }, XU && XU(UU, zU), oU.e.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? QU.e.SetImmediate((() => yU())) : this._texture.onLoadedObservable.add((() => yU())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, zU, this._lodScale, this._lodOffset, UU, AU, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, zU, this._files, this._noMipmap, UU, AU, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let XU = 0;
            const zU = this.irradianceTexture,
              cU = YU.b.Clone((() => {
                const zU = new UU(this.url, this.nS() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return XU = zU.uniqueId, zU
              }), this);
            return cU.uniqueId = XU, zU && !this.irradianceTexture && (this.irradianceTexture = zU), cU
          }
        }, (() => {
          const QU = "function" === typeof Symbol && Symbol.metadata ? Object.create(dU[Symbol.metadata] ?? null) : void 0;
          XU = [(0, yU.I)()], zU = [(0, yU.F)()], DU = [(0, yU.F)()], GU = [(0, yU.I)("rotationY")], BU = [(0, yU.I)("files")], ZU = [(0, yU.I)("forcedExtension")], RU = [(0, yU.I)("extensions")], PU = [(0, yU.q)("textureMatrix")], WU = [(0, yU.q)("textureMatrixRefraction")], (0, cU.j)(UU, null, DU, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: UU => "boundingBoxSize" in UU,
              get: UU => UU.boundingBoxSize
            },
            metadata: QU
          }, null, LU), (0, cU.j)(UU, null, GU, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: UU => "rotationY" in UU,
              set: (UU, XU) => {
                UU.rotationY = XU
              }
            },
            metadata: QU
          }, null, LU), (0, cU.j)(null, null, XU, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: UU => "url" in UU,
              get: UU => UU.url,
              set: (UU, XU) => {
                UU.url = XU
              }
            },
            metadata: QU
          }, eU, CU), (0, cU.j)(null, null, zU, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: UU => "boundingBoxPosition" in UU,
              get: UU => UU.boundingBoxPosition,
              set: (UU, XU) => {
                UU.boundingBoxPosition = XU
              }
            },
            metadata: QU
          }, wU, qU), (0, cU.j)(null, null, BU, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: UU => "_files" in UU,
              get: UU => UU._files,
              set: (UU, XU) => {
                UU._files = XU
              }
            },
            metadata: QU
          }, OU, SU), (0, cU.j)(null, null, ZU, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: UU => "_forcedExtension" in UU,
              get: UU => UU._forcedExtension,
              set: (UU, XU) => {
                UU._forcedExtension = XU
              }
            },
            metadata: QU
          }, rU, uU), (0, cU.j)(null, null, RU, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: UU => "_extensions" in UU,
              get: UU => UU._extensions,
              set: (UU, XU) => {
                UU._extensions = XU
              }
            },
            metadata: QU
          }, fU, iU), (0, cU.j)(null, null, PU, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: UU => "_textureMatrix" in UU,
              get: UU => UU._textureMatrix,
              set: (UU, XU) => {
                UU._textureMatrix = XU
              }
            },
            metadata: QU
          }, HU, MU), (0, cU.j)(null, null, WU, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: UU => "_textureMatrixRefraction" in UU,
              get: UU => UU._textureMatrixRefraction,
              set: (UU, XU) => {
                UU._textureMatrixRefraction = XU
              }
            },
            metadata: QU
          }, vU, VU), QU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QU
          })
        })(), UU
      })(),
      BU = !1;

    function ZU(UU, XU, zU) {
      let cU = "";
      for (const yU of UU) cU += yU;
      return new GU(cU, XU, null, zU, UU)
    }

    function RU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        cU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const yU = XU.useDelayedTextureLoading;
      XU.useDelayedTextureLoading = !1;
      const QU = new GU(UU, XU, null, !1, null, null, null, void 0, !0, zU, cU);
      return XU.useDelayedTextureLoading = yU, QU
    }

    function PU(UU, XU, zU) {
      const cU = YU.b.Parse((() => {
        let cU = !1;
        return UU.prefiltered && (cU = UU.prefiltered), new GU(zU + (UU.url ?? UU.name), XU, UU.extensions, !1, UU.files || null, null, null, void 0, cU, UU.forcedExtension)
      }), UU, XU);
      if (UU.boundingBoxPosition && (cU.boundingBoxPosition = AU.q.FromArray(UU.boundingBoxPosition)), UU.boundingBoxSize && (cU.boundingBoxSize = AU.q.FromArray(UU.boundingBoxSize)), UU.animations)
        for (let yU = 0; yU < UU.animations.length; yU++) {
          const XU = UU.animations[yU],
            zU = (0, DU.e)("BABYLON.Animation");
          zU && cU.animations.push(zU.Parse(XU))
        }
      return cU
    }
    BU || (BU = !0, GU.CreateFromImages = ZU, GU.CreateFromPrefilteredData = RU, GU.Parse = PU, oU.e._CubeTextureParser = PU, (0, DU.h)("BABYLON.CubeTexture", GU))
  },
  42279: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => DU
    });
    var cU = zU(39493),
      yU = zU(41557),
      QU = zU(41036),
      AU = zU(40948),
      FU = zU(40940);
    let oU = !1;
    class DU extends yU.e {
      constructor(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          DU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          YU = arguments.length > 6 ? arguments[6] : void 0;
        const NU = !zU || zU._isScene;
        super(null, NU ? zU : zU?.sa, NU ? !cU : zU, YU, DU, void 0, void 0, void 0, void 0, EU), oU || (oU = !0, AU.ThinEngine.prototype.createDynamicTexture = function(UU, XU, zU, cU) {
          const yU = new FU.e(this, 4);
          return yU.baseWidth = UU, yU.baseHeight = XU, zU && (UU = this.needPOTTextures ? (0, QU.g)(UU, this._caps.maxTextureSize) : UU, XU = this.needPOTTextures ? (0, QU.g)(XU, this._caps.maxTextureSize) : XU), yU.width = UU, yU.height = XU, yU.isReady = !1, yU.generateMipMaps = zU, yU.samplingMode = cU, this.updateTextureSamplingMode(cU, yU), this._internalTexturesCache.push(yU), yU
        }, AU.ThinEngine.prototype.updateDynamicTexture = function(UU, XU, zU) {
          let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            yU = arguments.length > 4 ? arguments[4] : void 0,
            QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!UU) return;
          const AU = this._gl,
            FU = AU.TEXTURE_2D,
            oU = this._bindTextureDirectly(FU, UU, !0, QU);
          this._unpackFlipY(void 0 === zU ? UU.invertY : zU), cU && AU.pixelStorei(AU.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const DU = this._getWebGLTextureType(UU.type),
            EU = this._getInternalFormat(yU || UU.format),
            YU = this._getRGBABufferInternalSizedFormat(UU.type, EU);
          AU.texImage2D(FU, 0, YU, EU, DU, XU), UU.generateMipMaps && AU.generateMipmap(FU), oU || this._bindTextureDirectly(FU, null), cU && AU.pixelStorei(AU.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), yU && (UU.format = yU), UU._dynamicTextureSource = XU, UU._premulAlpha = cU, UU.invertY = zU || !1, UU.isReady = !0
        }), this.name = UU, this.wrapU = yU.e.CLAMP_ADDRESSMODE, this.wrapV = yU.e.CLAMP_ADDRESSMODE, this._generateMipMaps = cU;
        const IU = this._getEngine();
        if (!IU) return;
        if (XU.getContext) this._canvas = XU, this._ownCanvas = !1, this._texture = IU.createDynamicTexture(this._canvas.width, this._canvas.height, cU, DU);
        else {
          this._canvas = IU.createCanvas(1, 1), this._ownCanvas = !0;
          const UU = XU;
          UU.width || 0 === UU.width ? this._texture = IU.createDynamicTexture(UU.width, UU.height, cU, DU) : this._texture = IU.createDynamicTexture(XU, XU, cU, DU)
        }
        const pU = this.getSize();
        this._canvas.width !== pU.width && (this._canvas.width = pU.width), this._canvas.height !== pU.height && (this._canvas.height = pU.height), this._context = this._canvas.getContext("2d")
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
        const XU = this.getSize();
        XU.width *= UU, XU.height *= UU, this._recreate(XU)
      }
      scaleTo(UU, XU) {
        const zU = this.getSize();
        zU.width = UU, zU.height = XU, this._recreate(zU)
      }
      getContext() {
        return this._context
      }
      clear(UU) {
        const XU = this.getSize();
        UU && (this._context.fillStyle = UU), this._context.clearRect(0, 0, XU.width, XU.height)
      }
      update(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === UU || UU, XU, this._format || void 0, void 0, zU)
      }
      drawText(UU, XU, zU, cU, yU, QU, AU) {
        let FU = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const oU = this.getSize();
        if (QU && (this._context.fillStyle = QU, this._context.fillRect(0, 0, oU.width, oU.height)), this._context.font = cU, null === XU || void 0 === XU) {
          const zU = this._context.measureText(UU);
          XU = (oU.width - zU.width) / 2
        }
        if (null === zU || void 0 === zU) {
          const UU = parseInt(cU.replace(/\D/g, ""));
          zU = oU.height / 2 + UU / 3.65
        }
        this._context.fillStyle = yU || "", this._context.fillText(UU, XU, zU), FU && this.update(AU)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const UU = this.nS();
        if (!UU) return this;
        const XU = this.getSize(),
          zU = new DU(this.name, XU, UU, this._generateMipMaps);
        return zU.hasAlpha = this.hasAlpha, zU.level = this.level, zU.wrapU = this.wrapU, zU.wrapV = this.wrapV, zU
      }
      serialize() {
        const UU = this.nS();
        UU && !UU.isReady() && cU.b.Warn("The scene must be ready before serializing the dynamic texture");
        const XU = super.serialize();
        return DU._IsCanvasElement(this._canvas) && (XU.base64String = this._canvas.toDataURL()), XU.invertY = this._invertY, XU.samplingMode = this.samplingMode, XU
      }
      static _IsCanvasElement(UU) {
        return void 0 !== UU.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  42257: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU
    });
    var cU = zU(41557);
    class yU extends cU.e {
      get depth() {
        return this._depth
      }
      constructor(UU, XU, zU, yU, QU, AU) {
        let FU = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          oU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          DU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : cU.e.TRILINEAR_SAMPLINGMODE,
          EU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          YU = arguments.length > 10 ? arguments[10] : void 0,
          NU = arguments.length > 11 ? arguments[11] : void 0;
        super(null, AU, !FU, oU), this.format = QU, this._texture = AU.qp().createRawTexture2DArray(UU, XU, zU, yU, QU, FU, oU, DU, null, EU, YU ?? 0, NU), this._depth = yU, this.is2DArray = !0
      }
      update(UU) {
        this.updateMipLevel(UU, 0)
      }
      updateMipLevel(UU, XU) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, UU, this._texture.format, this._texture.invertY, null, this._texture.type, XU)
      }
      static CreateRGBATexture(UU, XU, zU, cU, QU) {
        return new yU(UU, XU, zU, cU, 5, QU, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  42248: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU.e
    });
    var cU = zU(41436);
    (0, cU.i)()
  },
  41199: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => cU.d
    });
    var cU = zU(41202);
    (0, cU.b)()
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);