export const id = 292;
export const ids = [292];
export const modules = {
  41753: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW,
      f: () => LW
    });
    var mW = OW(39911),
      EW = OW(41538),
      NW = OW(41723),
      PW = {};
    class LW {
      constructor(WW) {
        this.attachedToElement = !1, this.attached = {}, this.camera = WW, this.checkInputs = () => {}
      }
      add(WW) {
        const iW = WW.getSimpleName();
        this.attached[iW] ? mW.b.Warn("camera input of type " + iW + " already exists on camera") : (this.attached[iW] = WW, WW.camera = this.camera, WW.checkInputs && (this.checkInputs = this._addCheckInputs(WW.checkInputs.bind(WW))), this.attachedToElement && WW.attachControl(this.noPreventDefault))
      }
      remove(WW) {
        for (const iW in this.attached) {
          const OW = this.attached[iW];
          if (OW === WW) return OW.detachControl(), OW.camera = null, delete this.attached[iW], void this.rebuildInputCheck()
        }
      }
      removeByType(WW) {
        for (const iW in this.attached) {
          const OW = this.attached[iW];
          OW.getClassName() === WW && (OW.detachControl(), OW.camera = null, delete this.attached[iW], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(WW) {
        const iW = this.checkInputs;
        return () => {
          iW(), WW()
        }
      }
      attachInput(WW) {
        this.attachedToElement && WW.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          WW = !NW.e.ForceAttachControlToAlwaysPreventDefault && WW, this.attachedToElement = !0, this.noPreventDefault = WW;
          for (const iW in this.attached) this.attached[iW].attachControl(WW)
        }
      }
      detachElement() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const iW in this.attached) this.attached[iW].detachControl(), WW && (this.attached[iW].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const WW in this.attached) {
          const iW = this.attached[WW];
          iW.checkInputs && (this.checkInputs = this._addCheckInputs(iW.checkInputs.bind(iW)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(WW) {
        const iW = {};
        for (const OW in this.attached) {
          const WW = this.attached[OW],
            mW = EW.d.Serialize(WW);
          iW[WW.getClassName()] = mW
        }
        WW.inputsmgr = iW
      }
      parse(WW) {
        const iW = WW.inputsmgr;
        if (iW) {
          this.clear();
          for (const WW in iW) {
            const OW = PW[WW];
            if (OW) {
              const mW = iW[WW],
                NW = EW.d.Parse((() => new OW), mW, null);
              this.add(NW)
            }
          }
        } else
          for (const OW in this.attached) {
            const iW = PW[this.attached[OW].getClassName()];
            if (iW) {
              const mW = EW.d.Parse((() => new iW), WW, null);
              this.remove(this.attached[OW]), this.add(mW)
            }
          }
      }
    }
  },
  42612: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => sW
    });
    var mW = OW(41516),
      EW = OW(41519),
      NW = OW(41420),
      PW = OW(38241),
      LW = OW(41511),
      cW = OW(41992),
      wW = OW(38299),
      tW = OW(38276),
      ZW = OW(41538),
      xW = OW(41371),
      lW = OW(39911),
      AW = OW(41558),
      bW = OW(39088),
      jW = OW(41595);
    var UW = OW(41423);
    let kW = !1;
    let sW = (() => {
        var WW;
        let iW, OW, wW, sW, MW, KW, SW, YW, yW, TW = LW.c,
          JW = [],
          hW = [],
          HW = [],
          nW = [],
          uW = [],
          oW = [],
          dW = [],
          eW = [],
          vW = [],
          gW = [],
          DW = [],
          VW = [],
          pW = [],
          fW = [],
          CW = [];
        return WW = class extends TW {
          set boundingBoxSize(WW) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(WW)) return;
            this._boundingBoxSize = WW;
            const iW = this.bD();
            iW && iW.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(WW) {
            this._rotationY = WW, this.setReflectionTextureMatrix(PW.d.RotationY(this._rotationY))
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
          constructor(WW, iW) {
            let OW, EW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              NW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              LW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              wW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              ZW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              sW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              MW = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              KW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              SW = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              YW = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              yW = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              TW = arguments.length > 13 ? arguments[13] : void 0,
              XW = arguments.length > 14 ? arguments[14] : void 0;
            super(iW), this._delayedOnLoad = (0, mW.g)(this, JW), this.onLoadObservable = new tW.e, this.url = (0, mW.g)(this, hW, void 0), this.boundingBoxPosition = ((0, mW.g)(this, HW), (0, mW.g)(this, nW, PW.q.Zero())), this._boundingBoxSize = (0, mW.g)(this, uW), this._rotationY = 0, this._files = (0, mW.g)(this, oW, null), this._forcedExtension = ((0, mW.g)(this, dW), (0, mW.g)(this, eW, null)), this._extensions = ((0, mW.g)(this, vW), (0, mW.g)(this, gW, null)), this._textureMatrix = ((0, mW.g)(this, DW), (0, mW.g)(this, VW, void 0)), this._textureMatrixRefraction = ((0, mW.g)(this, pW), (0, mW.g)(this, fW, new PW.d)), this._format = (0, mW.g)(this, CW), this._buffer = null, kW || (kW = !0, UW.b.prototype._partialLoadFile = function(WW, iW, OW, mW) {
              let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(WW, (WW => {
                OW[iW] = WW, OW._internalCount++, 6 === OW._internalCount && mW(OW)
              }), void 0, void 0, !0, ((WW, iW) => {
                EW && WW && EW(WW.status + " " + WW.statusText, iW)
              }))
            }, UW.b.prototype._cascadeLoadFiles = function(WW, iW, OW) {
              let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const EW = [];
              EW._internalCount = 0;
              for (let NW = 0; NW < 6; NW++) this._partialLoadFile(OW[NW], NW, EW, iW, mW)
            }, UW.b.prototype._cascadeLoadImgs = function(WW, iW, OW, mW) {
              let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                NW = arguments.length > 5 ? arguments[5] : void 0;
              const PW = [];
              PW._internalCount = 0;
              for (let LW = 0; LW < 6; LW++) this._partialLoadImg(mW[LW], LW, PW, WW, iW, OW, EW, NW)
            }, UW.b.prototype._partialLoadImg = function(WW, iW, OW, mW, EW, NW) {
              let PW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                LW = arguments.length > 7 ? arguments[7] : void 0;
              const cW = (0, bW.b)();
              (0, AW.s)(WW, (WW => {
                OW[iW] = WW, OW._internalCount++, mW && mW.removePendingData(cW), 6 === OW._internalCount && NW && NW(EW, OW)
              }), ((WW, iW) => {
                mW && mW.removePendingData(cW), PW && PW(WW, iW)
              }), mW ? mW.offlineProvider : null, LW), mW && mW.addPendingData(cW)
            }, UW.b.prototype.createCubeTextureBase = function(WW, iW, OW, mW) {
              let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                PW = arguments.length > 6 ? arguments[6] : void 0,
                LW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                cW = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                wW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                tW = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                ZW = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                AW = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                bW = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                UW = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                kW = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const sW = ZW || new xW.e(this, 7);
              sW.isCube = !0, sW.url = WW, sW.generateMipMaps = !mW, sW._lodGenerationScale = wW, sW._lodGenerationOffset = tW, sW._useSRGBBuffer = !!UW && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!mW), sW !== ZW && (sW.label = WW.substring(0, 60)), this._doNotHandleContextLost || (sW._extension = LW, sW._files = OW, sW._buffer = kW);
              const MW = WW;
              this._transformTextureUrl && !ZW && (WW = this._transformTextureUrl(WW));
              const KW = LW ?? function(WW) {
                  const iW = WW.split("?")[0],
                    OW = iW.lastIndexOf(".");
                  return OW > -1 ? iW.substring(OW).toLowerCase() : ""
                }(WW),
                SW = (0, jW.e)(KW),
                YW = (WW, iW) => {
                  sW.dispose(), NW ? NW(WW, iW) : WW && lW.b.Warn(WW)
                },
                yW = (NW, ZW) => {
                  WW === MW ? NW && YW(NW.status + " " + NW.statusText, ZW) : (lW.b.Warn(`Failed to load ${WW}, falling back to the ${MW}`), this.createCubeTextureBase(MW, iW, OW, !!mW, EW, YW, PW, LW, cW, wW, tW, sW, AW, bW, UW, kW))
                };
              if (SW) SW.then((mW => {
                const NW = WW => {
                  AW && AW(sW, WW), mW.loadCubeData(WW, sW, cW, EW, ((WW, iW) => {
                    YW(WW, iW)
                  }))
                };
                kW ? NW(kW) : OW && 6 === OW.length ? mW.supportCascades ? this._cascadeLoadFiles(iW, (WW => NW(WW.map((WW => new Uint8Array(WW))))), OW, YW) : YW("Textures type does not support cascades.") : this._loadFile(WW, (WW => NW(new Uint8Array(WW))), void 0, iW ? iW.offlineProvider || null : void 0, !0, yW)
              }));
              else {
                if (!OW || 0 === OW.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(iW, sW, ((WW, iW) => {
                  bW && bW(WW, iW)
                }), OW, YW)
              }
              return this._internalTexturesCache.push(sW), sW
            }), this.name = WW, this.url = WW, this._noMipmap = NW, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = PW.d.Identity(), this.coordinatesMode = cW.h.CUBIC_MODE;
            let BW = null;
            null === EW || Array.isArray(EW) ? (this._noMipmap = NW, this._format = sW, this._createPolynomials = SW, OW = EW, this._loaderOptions = TW, this._useSRGBBuffer = XW, this._lodScale = YW, this._lodOffset = yW) : (OW = EW.extensions ?? null, this._noMipmap = EW.noMipmap ?? !1, LW = EW.files ?? null, BW = EW.buffer ?? null, this._format = EW.format ?? 5, MW = EW.prefiltered ?? !1, KW = EW.forcedExtension ?? null, this._createPolynomials = EW.createPolynomials ?? !1, this._lodScale = EW.lodScale ?? .8, this._lodOffset = EW.lodOffset ?? 0, this._loaderOptions = EW.loaderOptions, this._useSRGBBuffer = EW.useSRGBBuffer, this._sphericalPolynomialTargetSize = EW.sphericalPolynomialTargetSize ?? 0, wW = EW.onLoad ?? null, ZW = EW.onError ?? null), (WW || LW) && this.updateURL(WW, KW, wW, MW, ZW, OW, this.bD()?.useDelayedTextureLoading, LW, BW)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              PW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              LW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              cW = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = WW), this.url = WW, iW && (this._forcedExtension = iW);
            const wW = WW.lastIndexOf("."),
              tW = iW || (wW > -1 ? WW.substring(wW).toLowerCase() : ""),
              ZW = 0 === tW.indexOf(".dds"),
              xW = 0 === tW.indexOf(".env"),
              lW = 0 === tW.indexOf(".basis");
            if (xW ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = mW, mW && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), LW) this._files = LW;
            else if (lW || xW || ZW || NW || (NW = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, NW) {
              for (let iW = 0; iW < NW.length; iW++) this._files.push(WW + NW[iW]);
              this._extensions = NW
            }
            this._buffer = cW, PW ? (this.delayLoadState = 4, this._delayedOnLoad = OW, this._delayedOnError = EW) : this._loadTexture(OW, EW)
          }
          delayLoad(WW) {
            4 === this.delayLoadState && (WW && (this._forcedExtension = WW), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(WW) {
            if (WW.updateFlag === this._textureMatrix.updateFlag) return;
            if (WW.isIdentity() !== this._textureMatrix.isIdentity() && this.bD()?.markAllMaterialsAsDirty(1, (WW => -1 !== WW.getActiveTextures().indexOf(this))), this._textureMatrix = WW, !this.bD()?.useRightHandedSystem) return;
            const iW = PW.l.fA[0],
              OW = PW.l.Quaternion[0],
              mW = PW.l.fA[1];
            this._textureMatrix.decompose(iW, OW, mW), OW.z *= -1, OW.w *= -1, PW.d.ComposeToRef(iW, OW, mW, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.bD()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const OW = this.bD(),
              mW = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const EW = () => {
                this.onLoadObservable.notifyObservers(this), mW && (mW.dispose(), this.bD()?.markAllMaterialsAsDirty(1)), WW && WW()
              },
              PW = (WW, OW) => {
                this._loadingError = !0, this._errorObject = {
                  message: WW,
                  exception: OW
                }, iW && iW(WW, OW), cW.h.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? NW.d.SetImmediate((() => EW())) : this._texture.onLoadedObservable.add((() => EW())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, OW, this._lodScale, this._lodOffset, WW, PW, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, OW, this._files, this._noMipmap, WW, PW, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let iW = 0;
            const OW = this.irradianceTexture,
              mW = ZW.d.Clone((() => {
                const OW = new WW(this.url, this.bD() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return iW = OW.uniqueId, OW
              }), this);
            return mW.uniqueId = iW, OW && !this.irradianceTexture && (this.irradianceTexture = OW), mW
          }
        }, (() => {
          const NW = "function" === typeof Symbol && Symbol.metadata ? Object.create(TW[Symbol.metadata] ?? null) : void 0;
          iW = [(0, EW.M)()], OW = [(0, EW.K)()], wW = [(0, EW.K)()], sW = [(0, EW.M)("rotationY")], MW = [(0, EW.M)("files")], KW = [(0, EW.M)("forcedExtension")], SW = [(0, EW.M)("extensions")], YW = [(0, EW.x)("textureMatrix")], yW = [(0, EW.x)("textureMatrixRefraction")], (0, mW.e)(WW, null, wW, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: WW => "boundingBoxSize" in WW,
              get: WW => WW.boundingBoxSize
            },
            metadata: NW
          }, null, JW), (0, mW.e)(WW, null, sW, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: WW => "rotationY" in WW,
              set: (WW, iW) => {
                WW.rotationY = iW
              }
            },
            metadata: NW
          }, null, JW), (0, mW.e)(null, null, iW, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: WW => "url" in WW,
              get: WW => WW.url,
              set: (WW, iW) => {
                WW.url = iW
              }
            },
            metadata: NW
          }, hW, HW), (0, mW.e)(null, null, OW, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: WW => "boundingBoxPosition" in WW,
              get: WW => WW.boundingBoxPosition,
              set: (WW, iW) => {
                WW.boundingBoxPosition = iW
              }
            },
            metadata: NW
          }, nW, uW), (0, mW.e)(null, null, MW, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: WW => "_files" in WW,
              get: WW => WW._files,
              set: (WW, iW) => {
                WW._files = iW
              }
            },
            metadata: NW
          }, oW, dW), (0, mW.e)(null, null, KW, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: WW => "_forcedExtension" in WW,
              get: WW => WW._forcedExtension,
              set: (WW, iW) => {
                WW._forcedExtension = iW
              }
            },
            metadata: NW
          }, eW, vW), (0, mW.e)(null, null, SW, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: WW => "_extensions" in WW,
              get: WW => WW._extensions,
              set: (WW, iW) => {
                WW._extensions = iW
              }
            },
            metadata: NW
          }, gW, DW), (0, mW.e)(null, null, YW, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: WW => "_textureMatrix" in WW,
              get: WW => WW._textureMatrix,
              set: (WW, iW) => {
                WW._textureMatrix = iW
              }
            },
            metadata: NW
          }, VW, pW), (0, mW.e)(null, null, yW, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: WW => "_textureMatrixRefraction" in WW,
              get: WW => WW._textureMatrixRefraction,
              set: (WW, iW) => {
                WW._textureMatrixRefraction = iW
              }
            },
            metadata: NW
          }, fW, CW), NW && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: NW
          })
        })(), WW
      })(),
      MW = !1;

    function KW(WW, iW, OW) {
      let mW = "";
      for (const EW of WW) mW += EW;
      return new sW(mW, iW, null, OW, WW)
    }

    function SW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        mW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const EW = iW.useDelayedTextureLoading;
      iW.useDelayedTextureLoading = !1;
      const NW = new sW(WW, iW, null, !1, null, null, null, void 0, !0, OW, mW);
      return iW.useDelayedTextureLoading = EW, NW
    }

    function YW(WW, iW, OW) {
      const mW = ZW.d.Parse((() => {
        let mW = !1;
        return WW.prefiltered && (mW = WW.prefiltered), new sW(OW + (WW.url ?? WW.name), iW, WW.extensions, !1, WW.files || null, null, null, void 0, mW, WW.forcedExtension)
      }), WW, iW);
      if (WW.boundingBoxPosition && (mW.boundingBoxPosition = PW.q.FromArray(WW.boundingBoxPosition)), WW.boundingBoxSize && (mW.boundingBoxSize = PW.q.FromArray(WW.boundingBoxSize)), WW.animations)
        for (let EW = 0; EW < WW.animations.length; EW++) {
          const iW = WW.animations[EW],
            OW = (0, wW.d)("BABYLON.Animation");
          OW && mW.animations.push(OW.Parse(iW))
        }
      return mW
    }
    MW || (MW = !0, sW.CreateFromImages = KW, sW.CreateFromPrefilteredData = SW, sW.Parse = YW, cW.h._CubeTextureParser = YW, (0, wW.h)("BABYLON.CubeTexture", sW))
  },
  42652: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => wW
    });
    var mW = OW(39911),
      EW = OW(41992),
      NW = OW(41458),
      PW = OW(41384),
      LW = OW(41371);
    let cW = !1;
    class wW extends EW.h {
      constructor(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          wW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          tW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          ZW = arguments.length > 6 ? arguments[6] : void 0;
        const xW = !OW || OW._isScene;
        super(null, xW ? OW : OW?.rb, xW ? !mW : OW, ZW, wW, void 0, void 0, void 0, void 0, tW), cW || (cW = !0, PW.ThinEngine.prototype.createDynamicTexture = function(WW, iW, OW, mW) {
          const EW = new LW.e(this, 4);
          return EW.baseWidth = WW, EW.baseHeight = iW, OW && (WW = this.needPOTTextures ? (0, NW.h)(WW, this._caps.maxTextureSize) : WW, iW = this.needPOTTextures ? (0, NW.h)(iW, this._caps.maxTextureSize) : iW), EW.width = WW, EW.height = iW, EW.isReady = !1, EW.generateMipMaps = OW, EW.samplingMode = mW, this.updateTextureSamplingMode(mW, EW), this._internalTexturesCache.push(EW), EW
        }, PW.ThinEngine.prototype.updateDynamicTexture = function(WW, iW, OW) {
          let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            EW = arguments.length > 4 ? arguments[4] : void 0,
            NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!WW) return;
          const PW = this._gl,
            LW = PW.TEXTURE_2D,
            cW = this._bindTextureDirectly(LW, WW, !0, NW);
          this._unpackFlipY(void 0 === OW ? WW.invertY : OW), mW && PW.pixelStorei(PW.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const wW = this._getWebGLTextureType(WW.type),
            tW = this._getInternalFormat(EW || WW.format),
            ZW = this._getRGBABufferInternalSizedFormat(WW.type, tW);
          PW.texImage2D(LW, 0, ZW, tW, wW, iW), WW.generateMipMaps && PW.generateMipmap(LW), cW || this._bindTextureDirectly(LW, null), mW && PW.pixelStorei(PW.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), EW && (WW.format = EW), WW._dynamicTextureSource = iW, WW._premulAlpha = mW, WW.invertY = OW || !1, WW.isReady = !0
        }), this.name = WW, this.wrapU = EW.h.CLAMP_ADDRESSMODE, this.wrapV = EW.h.CLAMP_ADDRESSMODE, this._generateMipMaps = mW;
        const lW = this._getEngine();
        if (!lW) return;
        if (iW.getContext) this._canvas = iW, this._ownCanvas = !1, this._texture = lW.createDynamicTexture(this._canvas.width, this._canvas.height, mW, wW);
        else {
          this._canvas = lW.createCanvas(1, 1), this._ownCanvas = !0;
          const WW = iW;
          WW.width || 0 === WW.width ? this._texture = lW.createDynamicTexture(WW.width, WW.height, mW, wW) : this._texture = lW.createDynamicTexture(iW, iW, mW, wW)
        }
        const AW = this.getSize();
        this._canvas.width !== AW.width && (this._canvas.width = AW.width), this._canvas.height !== AW.height && (this._canvas.height = AW.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(WW) {
        this._canvas.width = WW.width, this._canvas.height = WW.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(WW.width, WW.height, this._generateMipMaps, this.samplingMode)
      }
      scale(WW) {
        const iW = this.getSize();
        iW.width *= WW, iW.height *= WW, this._recreate(iW)
      }
      scaleTo(WW, iW) {
        const OW = this.getSize();
        OW.width = WW, OW.height = iW, this._recreate(OW)
      }
      getContext() {
        return this._context
      }
      clear(WW) {
        const iW = this.getSize();
        WW && (this._context.fillStyle = WW), this._context.clearRect(0, 0, iW.width, iW.height)
      }
      update(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === WW || WW, iW, this._format || void 0, void 0, OW)
      }
      drawText(WW, iW, OW, mW, EW, NW, PW) {
        let LW = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const cW = this.getSize();
        if (NW && (this._context.fillStyle = NW, this._context.fillRect(0, 0, cW.width, cW.height)), this._context.font = mW, null === iW || void 0 === iW) {
          const OW = this._context.measureText(WW);
          iW = (cW.width - OW.width) / 2
        }
        if (null === OW || void 0 === OW) {
          const WW = parseInt(mW.replace(/\D/g, ""));
          OW = cW.height / 2 + WW / 3.65
        }
        this._context.fillStyle = EW || "", this._context.fillText(WW, iW, OW), LW && this.update(PW)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const WW = this.bD();
        if (!WW) return this;
        const iW = this.getSize(),
          OW = new wW(this.name, iW, WW, this._generateMipMaps);
        return OW.hasAlpha = this.hasAlpha, OW.level = this.level, OW.wrapU = this.wrapU, OW.wrapV = this.wrapV, OW
      }
      serialize() {
        const WW = this.bD();
        WW && !WW.isReady() && mW.b.Warn("The scene must be ready before serializing the dynamic texture");
        const iW = super.serialize();
        return wW._IsCanvasElement(this._canvas) && (iW.base64String = this._canvas.toDataURL()), iW.invertY = this._invertY, iW.samplingMode = this.samplingMode, iW
      }
      static _IsCanvasElement(WW) {
        return void 0 !== WW.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  42630: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW
    });
    var mW = OW(41992);
    class EW extends mW.h {
      get depth() {
        return this._depth
      }
      constructor(WW, iW, OW, EW, NW, PW) {
        let LW = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          cW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          wW = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : mW.h.TRILINEAR_SAMPLINGMODE,
          tW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          ZW = arguments.length > 10 ? arguments[10] : void 0,
          xW = arguments.length > 11 ? arguments[11] : void 0;
        super(null, PW, !LW, cW), this.format = NW, this._texture = PW.VA().createRawTexture2DArray(WW, iW, OW, EW, NW, LW, cW, wW, null, tW, ZW ?? 0, xW), this._depth = EW, this.is2DArray = !0
      }
      update(WW) {
        this.updateMipLevel(WW, 0)
      }
      updateMipLevel(WW, iW) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, WW, this._texture.format, this._texture.invertY, null, this._texture.type, iW)
      }
      static CreateRGBATexture(WW, iW, OW, mW, NW) {
        return new EW(WW, iW, OW, mW, 5, NW, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  42623: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW.e
    });
    var mW = OW(41877);
    (0, mW.f)()
  },
  41604: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW.i
    });
    var mW = OW(41612);
    (0, mW.e)()
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);