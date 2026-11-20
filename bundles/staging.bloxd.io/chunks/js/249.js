export const id = 249;
export const ids = [249];
export const modules = {
  39859: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT,
      h: () => yT
    });
    var lT = cT(38512),
      MT = cT(39645),
      KT = cT(39841),
      OT = {};
    class yT {
      constructor(TT) {
        this.attachedToElement = !1, this.attached = {}, this.camera = TT, this.checkInputs = () => {}
      }
      add(TT) {
        const kT = TT.getSimpleName();
        this.attached[kT] ? lT.e.Warn("camera input of type " + kT + " already exists on camera") : (this.attached[kT] = TT, TT.camera = this.camera, TT.checkInputs && (this.checkInputs = this._addCheckInputs(TT.checkInputs.bind(TT))), this.attachedToElement && TT.attachControl(this.noPreventDefault))
      }
      remove(TT) {
        for (const kT in this.attached) {
          const cT = this.attached[kT];
          if (cT === TT) return cT.detachControl(), cT.camera = null, delete this.attached[kT], void this.rebuildInputCheck()
        }
      }
      removeByType(TT) {
        for (const kT in this.attached) {
          const cT = this.attached[kT];
          cT.getClassName() === TT && (cT.detachControl(), cT.camera = null, delete this.attached[kT], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(TT) {
        const kT = this.checkInputs;
        return () => {
          kT(), TT()
        }
      }
      attachInput(TT) {
        this.attachedToElement && TT.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          TT = !KT.c.ForceAttachControlToAlwaysPreventDefault && TT, this.attachedToElement = !0, this.noPreventDefault = TT;
          for (const kT in this.attached) this.attached[kT].attachControl(TT)
        }
      }
      detachElement() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const kT in this.attached) this.attached[kT].detachControl(), TT && (this.attached[kT].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const TT in this.attached) {
          const kT = this.attached[TT];
          kT.checkInputs && (this.checkInputs = this._addCheckInputs(kT.checkInputs.bind(kT)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(TT) {
        const kT = {};
        for (const cT in this.attached) {
          const TT = this.attached[cT],
            lT = MT.d.Serialize(TT);
          kT[TT.getClassName()] = lT
        }
        TT.inputsmgr = kT
      }
      parse(TT) {
        const kT = TT.inputsmgr;
        if (kT) {
          this.clear();
          for (const TT in kT) {
            const cT = OT[TT];
            if (cT) {
              const lT = kT[TT],
                KT = MT.d.Parse((() => new cT), lT, null);
              this.add(KT)
            }
          }
        } else
          for (const cT in this.attached) {
            const kT = OT[this.attached[cT].getClassName()];
            if (kT) {
              const lT = MT.d.Parse((() => new kT), TT, null);
              this.remove(this.attached[cT]), this.add(lT)
            }
          }
      }
    }
  },
  40749: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => ST
    });
    var lT = cT(39620),
      MT = cT(39624),
      KT = cT(39514),
      OT = cT(36892),
      yT = cT(39615),
      fT = cT(40111),
      xT = cT(36949),
      IT = cT(36932),
      AT = cT(39645),
      CT = cT(39454),
      jT = cT(38512),
      vT = cT(39666),
      tT = cT(37760),
      hT = cT(39709);
    var NT = cT(39516);
    let QT = !1;
    let ST = (() => {
        var TT;
        let kT, cT, xT, ST, DT, aT, FT, rT, PT, wT = yT.c,
          mT = [],
          bT = [],
          zT = [],
          JT = [],
          oT = [],
          HT = [],
          eT = [],
          GT = [],
          VT = [],
          ET = [],
          ZT = [],
          uT = [],
          XT = [],
          dT = [],
          LT = [];
        return TT = class extends wT {
          set boundingBoxSize(TT) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(TT)) return;
            this._boundingBoxSize = TT;
            const kT = this.NJ();
            kT && kT.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(TT) {
            this._rotationY = TT, this.setReflectionTextureMatrix(OT.d.RotationY(this._rotationY))
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
          constructor(TT, kT) {
            let cT, MT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              KT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              yT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              xT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              AT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              ST = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              DT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              aT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              FT = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              rT = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              PT = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              wT = arguments.length > 13 ? arguments[13] : void 0,
              RT = arguments.length > 14 ? arguments[14] : void 0;
            super(kT), this._delayedOnLoad = (0, lT.h)(this, mT), this.onLoadObservable = new IT.b, this.url = (0, lT.h)(this, bT, void 0), this.boundingBoxPosition = ((0, lT.h)(this, zT), (0, lT.h)(this, JT, OT.m.Zero())), this._boundingBoxSize = (0, lT.h)(this, oT), this._rotationY = 0, this._files = (0, lT.h)(this, HT, null), this._forcedExtension = ((0, lT.h)(this, eT), (0, lT.h)(this, GT, null)), this._extensions = ((0, lT.h)(this, VT), (0, lT.h)(this, ET, null)), this._textureMatrix = ((0, lT.h)(this, ZT), (0, lT.h)(this, uT, void 0)), this._textureMatrixRefraction = ((0, lT.h)(this, XT), (0, lT.h)(this, dT, new OT.d)), this._format = (0, lT.h)(this, LT), this._buffer = null, QT || (QT = !0, NT.d.prototype._partialLoadFile = function(TT, kT, cT, lT) {
              let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(TT, (TT => {
                cT[kT] = TT, cT._internalCount++, 6 === cT._internalCount && lT(cT)
              }), void 0, void 0, !0, ((TT, kT) => {
                MT && TT && MT(TT.status + " " + TT.statusText, kT)
              }))
            }, NT.d.prototype._cascadeLoadFiles = function(TT, kT, cT) {
              let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const MT = [];
              MT._internalCount = 0;
              for (let KT = 0; KT < 6; KT++) this._partialLoadFile(cT[KT], KT, MT, kT, lT)
            }, NT.d.prototype._cascadeLoadImgs = function(TT, kT, cT, lT) {
              let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                KT = arguments.length > 5 ? arguments[5] : void 0;
              const OT = [];
              OT._internalCount = 0;
              for (let yT = 0; yT < 6; yT++) this._partialLoadImg(lT[yT], yT, OT, TT, kT, cT, MT, KT)
            }, NT.d.prototype._partialLoadImg = function(TT, kT, cT, lT, MT, KT) {
              let OT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                yT = arguments.length > 7 ? arguments[7] : void 0;
              const fT = (0, tT.c)();
              (0, vT.o)(TT, (TT => {
                cT[kT] = TT, cT._internalCount++, lT && lT.removePendingData(fT), 6 === cT._internalCount && KT && KT(MT, cT)
              }), ((TT, kT) => {
                lT && lT.removePendingData(fT), OT && OT(TT, kT)
              }), lT ? lT.offlineProvider : null, yT), lT && lT.addPendingData(fT)
            }, NT.d.prototype.createCubeTextureBase = function(TT, kT, cT, lT) {
              let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                OT = arguments.length > 6 ? arguments[6] : void 0,
                yT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                fT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                xT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                IT = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                AT = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                vT = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                tT = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                NT = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                QT = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const ST = AT || new CT.b(this, 7);
              ST.isCube = !0, ST.url = TT, ST.generateMipMaps = !lT, ST._lodGenerationScale = xT, ST._lodGenerationOffset = IT, ST._useSRGBBuffer = !!NT && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!lT), ST !== AT && (ST.label = TT.substring(0, 60)), this._doNotHandleContextLost || (ST._extension = yT, ST._files = cT, ST._buffer = QT);
              const DT = TT;
              this._transformTextureUrl && !AT && (TT = this._transformTextureUrl(TT));
              const aT = yT ?? function(TT) {
                  const kT = TT.split("?")[0],
                    cT = kT.lastIndexOf(".");
                  return cT > -1 ? kT.substring(cT).toLowerCase() : ""
                }(TT),
                FT = (0, hT.d)(aT),
                rT = (TT, kT) => {
                  ST.dispose(), KT ? KT(TT, kT) : TT && jT.e.Warn(TT)
                },
                PT = (KT, AT) => {
                  TT === DT ? KT && rT(KT.status + " " + KT.statusText, AT) : (jT.e.Warn(`Failed to load ${TT}, falling back to the ${DT}`), this.createCubeTextureBase(DT, kT, cT, !!lT, MT, rT, OT, yT, fT, xT, IT, ST, vT, tT, NT, QT))
                };
              if (FT) FT.then((lT => {
                const KT = TT => {
                  vT && vT(ST, TT), lT.loadCubeData(TT, ST, fT, MT, ((TT, kT) => {
                    rT(TT, kT)
                  }))
                };
                QT ? KT(QT) : cT && 6 === cT.length ? lT.supportCascades ? this._cascadeLoadFiles(kT, (TT => KT(TT.map((TT => new Uint8Array(TT))))), cT, rT) : rT("Textures type does not support cascades.") : this._loadFile(TT, (TT => KT(new Uint8Array(TT))), void 0, kT ? kT.offlineProvider || null : void 0, !0, PT)
              }));
              else {
                if (!cT || 0 === cT.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(kT, ST, ((TT, kT) => {
                  tT && tT(TT, kT)
                }), cT, rT)
              }
              return this._internalTexturesCache.push(ST), ST
            }), this.name = TT, this.url = TT, this._noMipmap = KT, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = OT.d.Identity(), this.coordinatesMode = fT.f.CUBIC_MODE;
            let gT = null;
            null === MT || Array.isArray(MT) ? (this._noMipmap = KT, this._format = ST, this._createPolynomials = FT, cT = MT, this._loaderOptions = wT, this._useSRGBBuffer = RT, this._lodScale = rT, this._lodOffset = PT) : (cT = MT.extensions ?? null, this._noMipmap = MT.noMipmap ?? !1, yT = MT.files ?? null, gT = MT.buffer ?? null, this._format = MT.format ?? 5, DT = MT.prefiltered ?? !1, aT = MT.forcedExtension ?? null, this._createPolynomials = MT.createPolynomials ?? !1, this._lodScale = MT.lodScale ?? .8, this._lodOffset = MT.lodOffset ?? 0, this._loaderOptions = MT.loaderOptions, this._useSRGBBuffer = MT.useSRGBBuffer, this._sphericalPolynomialTargetSize = MT.sphericalPolynomialTargetSize ?? 0, xT = MT.onLoad ?? null, AT = MT.onError ?? null), (TT || yT) && this.updateURL(TT, aT, xT, DT, AT, cT, this.NJ()?.useDelayedTextureLoading, yT, gT)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(TT) {
            let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              OT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              yT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              fT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = TT), this.url = TT, kT && (this._forcedExtension = kT);
            const xT = TT.lastIndexOf("."),
              IT = kT || (xT > -1 ? TT.substring(xT).toLowerCase() : ""),
              AT = 0 === IT.indexOf(".dds"),
              CT = 0 === IT.indexOf(".env"),
              jT = 0 === IT.indexOf(".basis");
            if (CT ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = lT, lT && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), yT) this._files = yT;
            else if (jT || CT || AT || KT || (KT = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, KT) {
              for (let kT = 0; kT < KT.length; kT++) this._files.push(TT + KT[kT]);
              this._extensions = KT
            }
            this._buffer = fT, OT ? (this.delayLoadState = 4, this._delayedOnLoad = cT, this._delayedOnError = MT) : this._loadTexture(cT, MT)
          }
          delayLoad(TT) {
            4 === this.delayLoadState && (TT && (this._forcedExtension = TT), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(TT) {
            if (TT.updateFlag === this._textureMatrix.updateFlag) return;
            if (TT.isIdentity() !== this._textureMatrix.isIdentity() && this.NJ()?.markAllMaterialsAsDirty(1, (TT => -1 !== TT.getActiveTextures().indexOf(this))), this._textureMatrix = TT, !this.NJ()?.useRightHandedSystem) return;
            const kT = OT.h.Fv[0],
              cT = OT.h.Quaternion[0],
              lT = OT.h.Fv[1];
            this._textureMatrix.decompose(kT, cT, lT), cT.z *= -1, cT.w *= -1, OT.d.ComposeToRef(kT, cT, lT, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.NJ()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const cT = this.NJ(),
              lT = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const MT = () => {
                this.onLoadObservable.notifyObservers(this), lT && (lT.dispose(), this.NJ()?.markAllMaterialsAsDirty(1)), TT && TT()
              },
              OT = (TT, cT) => {
                this._loadingError = !0, this._errorObject = {
                  message: TT,
                  exception: cT
                }, kT && kT(TT, cT), fT.f.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? KT.e.SetImmediate((() => MT())) : this._texture.onLoadedObservable.add((() => MT())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, cT, this._lodScale, this._lodOffset, TT, OT, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, cT, this._files, this._noMipmap, TT, OT, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let kT = 0;
            const cT = this.irradianceTexture,
              lT = AT.d.Clone((() => {
                const cT = new TT(this.url, this.NJ() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return kT = cT.uniqueId, cT
              }), this);
            return lT.uniqueId = kT, cT && !this.irradianceTexture && (this.irradianceTexture = cT), lT
          }
        }, (() => {
          const KT = "function" === typeof Symbol && Symbol.metadata ? Object.create(wT[Symbol.metadata] ?? null) : void 0;
          kT = [(0, MT.J)()], cT = [(0, MT.F)()], xT = [(0, MT.F)()], ST = [(0, MT.J)("rotationY")], DT = [(0, MT.J)("files")], aT = [(0, MT.J)("forcedExtension")], FT = [(0, MT.J)("extensions")], rT = [(0, MT.r)("textureMatrix")], PT = [(0, MT.r)("textureMatrixRefraction")], (0, lT.e)(TT, null, xT, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: TT => "boundingBoxSize" in TT,
              get: TT => TT.boundingBoxSize
            },
            metadata: KT
          }, null, mT), (0, lT.e)(TT, null, ST, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: TT => "rotationY" in TT,
              set: (TT, kT) => {
                TT.rotationY = kT
              }
            },
            metadata: KT
          }, null, mT), (0, lT.e)(null, null, kT, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: TT => "url" in TT,
              get: TT => TT.url,
              set: (TT, kT) => {
                TT.url = kT
              }
            },
            metadata: KT
          }, bT, zT), (0, lT.e)(null, null, cT, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: TT => "boundingBoxPosition" in TT,
              get: TT => TT.boundingBoxPosition,
              set: (TT, kT) => {
                TT.boundingBoxPosition = kT
              }
            },
            metadata: KT
          }, JT, oT), (0, lT.e)(null, null, DT, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: TT => "_files" in TT,
              get: TT => TT._files,
              set: (TT, kT) => {
                TT._files = kT
              }
            },
            metadata: KT
          }, HT, eT), (0, lT.e)(null, null, aT, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: TT => "_forcedExtension" in TT,
              get: TT => TT._forcedExtension,
              set: (TT, kT) => {
                TT._forcedExtension = kT
              }
            },
            metadata: KT
          }, GT, VT), (0, lT.e)(null, null, FT, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: TT => "_extensions" in TT,
              get: TT => TT._extensions,
              set: (TT, kT) => {
                TT._extensions = kT
              }
            },
            metadata: KT
          }, ET, ZT), (0, lT.e)(null, null, rT, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: TT => "_textureMatrix" in TT,
              get: TT => TT._textureMatrix,
              set: (TT, kT) => {
                TT._textureMatrix = kT
              }
            },
            metadata: KT
          }, uT, XT), (0, lT.e)(null, null, PT, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: TT => "_textureMatrixRefraction" in TT,
              get: TT => TT._textureMatrixRefraction,
              set: (TT, kT) => {
                TT._textureMatrixRefraction = kT
              }
            },
            metadata: KT
          }, dT, LT), KT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: KT
          })
        })(), TT
      })(),
      DT = !1;

    function aT(TT, kT, cT) {
      let lT = "";
      for (const MT of TT) lT += MT;
      return new ST(lT, kT, null, cT, TT)
    }

    function FT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        lT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const MT = kT.useDelayedTextureLoading;
      kT.useDelayedTextureLoading = !1;
      const KT = new ST(TT, kT, null, !1, null, null, null, void 0, !0, cT, lT);
      return kT.useDelayedTextureLoading = MT, KT
    }

    function rT(TT, kT, cT) {
      const lT = AT.d.Parse((() => {
        let lT = !1;
        return TT.prefiltered && (lT = TT.prefiltered), new ST(cT + (TT.url ?? TT.name), kT, TT.extensions, !1, TT.files || null, null, null, void 0, lT, TT.forcedExtension)
      }), TT, kT);
      if (TT.boundingBoxPosition && (lT.boundingBoxPosition = OT.m.FromArray(TT.boundingBoxPosition)), TT.boundingBoxSize && (lT.boundingBoxSize = OT.m.FromArray(TT.boundingBoxSize)), TT.animations)
        for (let MT = 0; MT < TT.animations.length; MT++) {
          const kT = TT.animations[MT],
            cT = (0, xT.e)("BABYLON.Animation");
          cT && lT.animations.push(cT.Parse(kT))
        }
      return lT
    }
    DT || (DT = !0, ST.CreateFromImages = aT, ST.CreateFromPrefilteredData = FT, ST.Parse = rT, fT.f._CubeTextureParser = rT, (0, xT.g)("BABYLON.CubeTexture", ST))
  },
  40787: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => xT
    });
    var lT = cT(38512),
      MT = cT(40111),
      KT = cT(39549),
      OT = cT(39463),
      yT = cT(39454);
    let fT = !1;
    class xT extends MT.f {
      constructor(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          xT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          IT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          AT = arguments.length > 6 ? arguments[6] : void 0;
        const CT = !cT || cT._isScene;
        super(null, CT ? cT : cT?.et, CT ? !lT : cT, AT, xT, void 0, void 0, void 0, void 0, IT), fT || (fT = !0, OT.ThinEngine.prototype.createDynamicTexture = function(TT, kT, cT, lT) {
          const MT = new yT.b(this, 4);
          return MT.baseWidth = TT, MT.baseHeight = kT, cT && (TT = this.needPOTTextures ? (0, KT.c)(TT, this._caps.maxTextureSize) : TT, kT = this.needPOTTextures ? (0, KT.c)(kT, this._caps.maxTextureSize) : kT), MT.width = TT, MT.height = kT, MT.isReady = !1, MT.generateMipMaps = cT, MT.samplingMode = lT, this.updateTextureSamplingMode(lT, MT), this._internalTexturesCache.push(MT), MT
        }, OT.ThinEngine.prototype.updateDynamicTexture = function(TT, kT, cT) {
          let lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            MT = arguments.length > 4 ? arguments[4] : void 0,
            KT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!TT) return;
          const OT = this._gl,
            yT = OT.TEXTURE_2D,
            fT = this._bindTextureDirectly(yT, TT, !0, KT);
          this._unpackFlipY(void 0 === cT ? TT.invertY : cT), lT && OT.pixelStorei(OT.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const xT = this._getWebGLTextureType(TT.type),
            IT = this._getInternalFormat(MT || TT.format),
            AT = this._getRGBABufferInternalSizedFormat(TT.type, IT);
          OT.texImage2D(yT, 0, AT, IT, xT, kT), TT.generateMipMaps && OT.generateMipmap(yT), fT || this._bindTextureDirectly(yT, null), lT && OT.pixelStorei(OT.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), MT && (TT.format = MT), TT._dynamicTextureSource = kT, TT._premulAlpha = lT, TT.invertY = cT || !1, TT.isReady = !0
        }), this.name = TT, this.wrapU = MT.f.CLAMP_ADDRESSMODE, this.wrapV = MT.f.CLAMP_ADDRESSMODE, this._generateMipMaps = lT;
        const jT = this._getEngine();
        if (!jT) return;
        if (kT.getContext) this._canvas = kT, this._ownCanvas = !1, this._texture = jT.createDynamicTexture(this._canvas.width, this._canvas.height, lT, xT);
        else {
          this._canvas = jT.createCanvas(1, 1), this._ownCanvas = !0;
          const TT = kT;
          TT.width || 0 === TT.width ? this._texture = jT.createDynamicTexture(TT.width, TT.height, lT, xT) : this._texture = jT.createDynamicTexture(kT, kT, lT, xT)
        }
        const vT = this.getSize();
        this._canvas.width !== vT.width && (this._canvas.width = vT.width), this._canvas.height !== vT.height && (this._canvas.height = vT.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(TT) {
        this._canvas.width = TT.width, this._canvas.height = TT.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(TT.width, TT.height, this._generateMipMaps, this.samplingMode)
      }
      scale(TT) {
        const kT = this.getSize();
        kT.width *= TT, kT.height *= TT, this._recreate(kT)
      }
      scaleTo(TT, kT) {
        const cT = this.getSize();
        cT.width = TT, cT.height = kT, this._recreate(cT)
      }
      getContext() {
        return this._context
      }
      clear(TT) {
        const kT = this.getSize();
        TT && (this._context.fillStyle = TT), this._context.clearRect(0, 0, kT.width, kT.height)
      }
      update(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === TT || TT, kT, this._format || void 0, void 0, cT)
      }
      drawText(TT, kT, cT, lT, MT, KT, OT) {
        let yT = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const fT = this.getSize();
        if (KT && (this._context.fillStyle = KT, this._context.fillRect(0, 0, fT.width, fT.height)), this._context.font = lT, null === kT || void 0 === kT) {
          const cT = this._context.measureText(TT);
          kT = (fT.width - cT.width) / 2
        }
        if (null === cT || void 0 === cT) {
          const TT = parseInt(lT.replace(/\D/g, ""));
          cT = fT.height / 2 + TT / 3.65
        }
        this._context.fillStyle = MT || "", this._context.fillText(TT, kT, cT), yT && this.update(OT)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const TT = this.NJ();
        if (!TT) return this;
        const kT = this.getSize(),
          cT = new xT(this.name, kT, TT, this._generateMipMaps);
        return cT.hasAlpha = this.hasAlpha, cT.level = this.level, cT.wrapU = this.wrapU, cT.wrapV = this.wrapV, cT
      }
      serialize() {
        const TT = this.NJ();
        TT && !TT.isReady() && lT.e.Warn("The scene must be ready before serializing the dynamic texture");
        const kT = super.serialize();
        return xT._IsCanvasElement(this._canvas) && (kT.base64String = this._canvas.toDataURL()), kT.invertY = this._invertY, kT.samplingMode = this.samplingMode, kT
      }
      static _IsCanvasElement(TT) {
        return void 0 !== TT.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  40769: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => MT
    });
    var lT = cT(40111);
    class MT extends lT.f {
      get depth() {
        return this._depth
      }
      constructor(TT, kT, cT, MT, KT, OT) {
        let yT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          fT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          xT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : lT.f.TRILINEAR_SAMPLINGMODE,
          IT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          AT = arguments.length > 10 ? arguments[10] : void 0,
          CT = arguments.length > 11 ? arguments[11] : void 0;
        super(null, OT, !yT, fT), this.format = KT, this._texture = OT.Dv().createRawTexture2DArray(TT, kT, cT, MT, KT, yT, fT, xT, null, IT, AT ?? 0, CT), this._depth = MT, this.is2DArray = !0
      }
      update(TT) {
        this.updateMipLevel(TT, 0)
      }
      updateMipLevel(TT, kT) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, TT, this._texture.format, this._texture.invertY, null, this._texture.type, kT)
      }
      static CreateRGBATexture(TT, kT, cT, lT, KT) {
        return new MT(TT, kT, cT, lT, 5, KT, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  40761: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT.b
    });
    var lT = cT(39980);
    (0, lT.c)()
  },
  39716: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT.f
    });
    var lT = cT(39720);
    (0, lT.c)()
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);