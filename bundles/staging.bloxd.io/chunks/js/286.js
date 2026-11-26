export const id = 286;
export const ids = [286];
export const modules = {
  41520: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH,
      e: () => tH
    });
    var AH = LH(39595),
      rH = LH(41319),
      SH = LH(41489),
      hH = {};
    class tH {
      constructor(HH) {
        this.attachedToElement = !1, this.attached = {}, this.camera = HH, this.checkInputs = () => {}
      }
      add(HH) {
        const BH = HH.getSimpleName();
        this.attached[BH] ? AH.e.Warn("camera input of type " + BH + " already exists on camera") : (this.attached[BH] = HH, HH.camera = this.camera, HH.checkInputs && (this.checkInputs = this._addCheckInputs(HH.checkInputs.bind(HH))), this.attachedToElement && HH.attachControl(this.noPreventDefault))
      }
      remove(HH) {
        for (const BH in this.attached) {
          const LH = this.attached[BH];
          if (LH === HH) return LH.detachControl(), LH.camera = null, delete this.attached[BH], void this.rebuildInputCheck()
        }
      }
      removeByType(HH) {
        for (const BH in this.attached) {
          const LH = this.attached[BH];
          LH.getClassName() === HH && (LH.detachControl(), LH.camera = null, delete this.attached[BH], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(HH) {
        const BH = this.checkInputs;
        return () => {
          BH(), HH()
        }
      }
      attachInput(HH) {
        this.attachedToElement && HH.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          HH = !SH.d.ForceAttachControlToAlwaysPreventDefault && HH, this.attachedToElement = !0, this.noPreventDefault = HH;
          for (const BH in this.attached) this.attached[BH].attachControl(HH)
        }
      }
      detachElement() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const BH in this.attached) this.attached[BH].detachControl(), HH && (this.attached[BH].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const HH in this.attached) {
          const BH = this.attached[HH];
          BH.checkInputs && (this.checkInputs = this._addCheckInputs(BH.checkInputs.bind(BH)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(HH) {
        const BH = {};
        for (const LH in this.attached) {
          const HH = this.attached[LH],
            AH = rH.c.Serialize(HH);
          BH[HH.getClassName()] = AH
        }
        HH.inputsmgr = BH
      }
      parse(HH) {
        const BH = HH.inputsmgr;
        if (BH) {
          this.clear();
          for (const HH in BH) {
            const LH = hH[HH];
            if (LH) {
              const AH = BH[HH],
                SH = rH.c.Parse((() => new LH), AH, null);
              this.add(SH)
            }
          }
        } else
          for (const LH in this.attached) {
            const BH = hH[this.attached[LH].getClassName()];
            if (BH) {
              const AH = rH.c.Parse((() => new BH), HH, null);
              this.remove(this.attached[LH]), this.add(AH)
            }
          }
      }
    }
  },
  42427: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => vH
    });
    var AH = LH(41290),
      rH = LH(41297),
      SH = LH(41179),
      hH = LH(37963),
      tH = LH(41283),
      zH = LH(41777),
      CH = LH(38012),
      EH = LH(37997),
      XH = LH(41319),
      GH = LH(41122),
      YH = LH(39595),
      uH = LH(41336),
      QH = LH(38790),
      WH = LH(41372);
    var MH = LH(41184);
    let xH = !1;
    let vH = (() => {
        var HH;
        let BH, LH, CH, vH, PH, TH, UH, VH, OH, bH = tH.e,
          kH = [],
          mH = [],
          oH = [],
          IH = [],
          fH = [],
          lH = [],
          KH = [],
          cH = [],
          eH = [],
          qH = [],
          gH = [],
          NH = [],
          RH = [],
          jH = [],
          nH = [];
        return HH = class extends bH {
          set boundingBoxSize(HH) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(HH)) return;
            this._boundingBoxSize = HH;
            const BH = this.yN();
            BH && BH.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(HH) {
            this._rotationY = HH, this.setReflectionTextureMatrix(hH.e.RotationY(this._rotationY))
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
          constructor(HH, BH) {
            let LH, rH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              SH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              tH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              CH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              XH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              vH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              PH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              TH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              UH = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              VH = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              OH = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              bH = arguments.length > 13 ? arguments[13] : void 0,
              FH = arguments.length > 14 ? arguments[14] : void 0;
            super(BH), this._delayedOnLoad = (0, AH.k)(this, kH), this.onLoadObservable = new EH.d, this.url = (0, AH.k)(this, mH, void 0), this.boundingBoxPosition = ((0, AH.k)(this, oH), (0, AH.k)(this, IH, hH.o.Zero())), this._boundingBoxSize = (0, AH.k)(this, fH), this._rotationY = 0, this._files = (0, AH.k)(this, lH, null), this._forcedExtension = ((0, AH.k)(this, KH), (0, AH.k)(this, cH, null)), this._extensions = ((0, AH.k)(this, eH), (0, AH.k)(this, qH, null)), this._textureMatrix = ((0, AH.k)(this, gH), (0, AH.k)(this, NH, void 0)), this._textureMatrixRefraction = ((0, AH.k)(this, RH), (0, AH.k)(this, jH, new hH.e)), this._format = (0, AH.k)(this, nH), this._buffer = null, xH || (xH = !0, MH.c.prototype._partialLoadFile = function(HH, BH, LH, AH) {
              let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(HH, (HH => {
                LH[BH] = HH, LH._internalCount++, 6 === LH._internalCount && AH(LH)
              }), void 0, void 0, !0, ((HH, BH) => {
                rH && HH && rH(HH.status + " " + HH.statusText, BH)
              }))
            }, MH.c.prototype._cascadeLoadFiles = function(HH, BH, LH) {
              let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const rH = [];
              rH._internalCount = 0;
              for (let SH = 0; SH < 6; SH++) this._partialLoadFile(LH[SH], SH, rH, BH, AH)
            }, MH.c.prototype._cascadeLoadImgs = function(HH, BH, LH, AH) {
              let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                SH = arguments.length > 5 ? arguments[5] : void 0;
              const hH = [];
              hH._internalCount = 0;
              for (let tH = 0; tH < 6; tH++) this._partialLoadImg(AH[tH], tH, hH, HH, BH, LH, rH, SH)
            }, MH.c.prototype._partialLoadImg = function(HH, BH, LH, AH, rH, SH) {
              let hH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                tH = arguments.length > 7 ? arguments[7] : void 0;
              const zH = (0, QH.e)();
              (0, uH.m)(HH, (HH => {
                LH[BH] = HH, LH._internalCount++, AH && AH.removePendingData(zH), 6 === LH._internalCount && SH && SH(rH, LH)
              }), ((HH, BH) => {
                AH && AH.removePendingData(zH), hH && hH(HH, BH)
              }), AH ? AH.offlineProvider : null, tH), AH && AH.addPendingData(zH)
            }, MH.c.prototype.createCubeTextureBase = function(HH, BH, LH, AH) {
              let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                hH = arguments.length > 6 ? arguments[6] : void 0,
                tH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                zH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                CH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                EH = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                XH = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                uH = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                QH = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                MH = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                xH = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const vH = XH || new GH.e(this, 7);
              vH.isCube = !0, vH.url = HH, vH.generateMipMaps = !AH, vH._lodGenerationScale = CH, vH._lodGenerationOffset = EH, vH._useSRGBBuffer = !!MH && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!AH), vH !== XH && (vH.label = HH.substring(0, 60)), this._doNotHandleContextLost || (vH._extension = tH, vH._files = LH, vH._buffer = xH);
              const PH = HH;
              this._transformTextureUrl && !XH && (HH = this._transformTextureUrl(HH));
              const TH = tH ?? function(HH) {
                  const BH = HH.split("?")[0],
                    LH = BH.lastIndexOf(".");
                  return LH > -1 ? BH.substring(LH).toLowerCase() : ""
                }(HH),
                UH = (0, WH.c)(TH),
                VH = (HH, BH) => {
                  vH.dispose(), SH ? SH(HH, BH) : HH && YH.e.Warn(HH)
                },
                OH = (SH, XH) => {
                  HH === PH ? SH && VH(SH.status + " " + SH.statusText, XH) : (YH.e.Warn(`Failed to load ${HH}, falling back to the ${PH}`), this.createCubeTextureBase(PH, BH, LH, !!AH, rH, VH, hH, tH, zH, CH, EH, vH, uH, QH, MH, xH))
                };
              if (UH) UH.then((AH => {
                const SH = HH => {
                  uH && uH(vH, HH), AH.loadCubeData(HH, vH, zH, rH, ((HH, BH) => {
                    VH(HH, BH)
                  }))
                };
                xH ? SH(xH) : LH && 6 === LH.length ? AH.supportCascades ? this._cascadeLoadFiles(BH, (HH => SH(HH.map((HH => new Uint8Array(HH))))), LH, VH) : VH("Textures type does not support cascades.") : this._loadFile(HH, (HH => SH(new Uint8Array(HH))), void 0, BH ? BH.offlineProvider || null : void 0, !0, OH)
              }));
              else {
                if (!LH || 0 === LH.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(BH, vH, ((HH, BH) => {
                  QH && QH(HH, BH)
                }), LH, VH)
              }
              return this._internalTexturesCache.push(vH), vH
            }), this.name = HH, this.url = HH, this._noMipmap = SH, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = hH.e.Identity(), this.coordinatesMode = zH.g.CUBIC_MODE;
            let DH = null;
            null === rH || Array.isArray(rH) ? (this._noMipmap = SH, this._format = vH, this._createPolynomials = UH, LH = rH, this._loaderOptions = bH, this._useSRGBBuffer = FH, this._lodScale = VH, this._lodOffset = OH) : (LH = rH.extensions ?? null, this._noMipmap = rH.noMipmap ?? !1, tH = rH.files ?? null, DH = rH.buffer ?? null, this._format = rH.format ?? 5, PH = rH.prefiltered ?? !1, TH = rH.forcedExtension ?? null, this._createPolynomials = rH.createPolynomials ?? !1, this._lodScale = rH.lodScale ?? .8, this._lodOffset = rH.lodOffset ?? 0, this._loaderOptions = rH.loaderOptions, this._useSRGBBuffer = rH.useSRGBBuffer, this._sphericalPolynomialTargetSize = rH.sphericalPolynomialTargetSize ?? 0, CH = rH.onLoad ?? null, XH = rH.onError ?? null), (HH || tH) && this.updateURL(HH, TH, CH, PH, XH, LH, this.yN()?.useDelayedTextureLoading, tH, DH)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              hH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              tH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              zH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = HH), this.url = HH, BH && (this._forcedExtension = BH);
            const CH = HH.lastIndexOf("."),
              EH = BH || (CH > -1 ? HH.substring(CH).toLowerCase() : ""),
              XH = 0 === EH.indexOf(".dds"),
              GH = 0 === EH.indexOf(".env"),
              YH = 0 === EH.indexOf(".basis");
            if (GH ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = AH, AH && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), tH) this._files = tH;
            else if (YH || GH || XH || SH || (SH = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, SH) {
              for (let BH = 0; BH < SH.length; BH++) this._files.push(HH + SH[BH]);
              this._extensions = SH
            }
            this._buffer = zH, hH ? (this.delayLoadState = 4, this._delayedOnLoad = LH, this._delayedOnError = rH) : this._loadTexture(LH, rH)
          }
          delayLoad(HH) {
            4 === this.delayLoadState && (HH && (this._forcedExtension = HH), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(HH) {
            if (HH.updateFlag === this._textureMatrix.updateFlag) return;
            if (HH.isIdentity() !== this._textureMatrix.isIdentity() && this.yN()?.markAllMaterialsAsDirty(1, (HH => -1 !== HH.getActiveTextures().indexOf(this))), this._textureMatrix = HH, !this.yN()?.useRightHandedSystem) return;
            const BH = hH.l.lu[0],
              LH = hH.l.Quaternion[0],
              AH = hH.l.lu[1];
            this._textureMatrix.decompose(BH, LH, AH), LH.z *= -1, LH.w *= -1, hH.e.ComposeToRef(BH, LH, AH, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.yN()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const LH = this.yN(),
              AH = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const rH = () => {
                this.onLoadObservable.notifyObservers(this), AH && (AH.dispose(), this.yN()?.markAllMaterialsAsDirty(1)), HH && HH()
              },
              hH = (HH, LH) => {
                this._loadingError = !0, this._errorObject = {
                  message: HH,
                  exception: LH
                }, BH && BH(HH, LH), zH.g.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? SH.d.SetImmediate((() => rH())) : this._texture.onLoadedObservable.add((() => rH())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, LH, this._lodScale, this._lodOffset, HH, hH, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, LH, this._files, this._noMipmap, HH, hH, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let BH = 0;
            const LH = this.irradianceTexture,
              AH = XH.c.Clone((() => {
                const LH = new HH(this.url, this.yN() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return BH = LH.uniqueId, LH
              }), this);
            return AH.uniqueId = BH, LH && !this.irradianceTexture && (this.irradianceTexture = LH), AH
          }
        }, (() => {
          const SH = "function" === typeof Symbol && Symbol.metadata ? Object.create(bH[Symbol.metadata] ?? null) : void 0;
          BH = [(0, rH.H)()], LH = [(0, rH.F)()], CH = [(0, rH.F)()], vH = [(0, rH.H)("rotationY")], PH = [(0, rH.H)("files")], TH = [(0, rH.H)("forcedExtension")], UH = [(0, rH.H)("extensions")], VH = [(0, rH.t)("textureMatrix")], OH = [(0, rH.t)("textureMatrixRefraction")], (0, AH.g)(HH, null, CH, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: HH => "boundingBoxSize" in HH,
              get: HH => HH.boundingBoxSize
            },
            metadata: SH
          }, null, kH), (0, AH.g)(HH, null, vH, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: HH => "rotationY" in HH,
              set: (HH, BH) => {
                HH.rotationY = BH
              }
            },
            metadata: SH
          }, null, kH), (0, AH.g)(null, null, BH, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: HH => "url" in HH,
              get: HH => HH.url,
              set: (HH, BH) => {
                HH.url = BH
              }
            },
            metadata: SH
          }, mH, oH), (0, AH.g)(null, null, LH, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: HH => "boundingBoxPosition" in HH,
              get: HH => HH.boundingBoxPosition,
              set: (HH, BH) => {
                HH.boundingBoxPosition = BH
              }
            },
            metadata: SH
          }, IH, fH), (0, AH.g)(null, null, PH, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: HH => "_files" in HH,
              get: HH => HH._files,
              set: (HH, BH) => {
                HH._files = BH
              }
            },
            metadata: SH
          }, lH, KH), (0, AH.g)(null, null, TH, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: HH => "_forcedExtension" in HH,
              get: HH => HH._forcedExtension,
              set: (HH, BH) => {
                HH._forcedExtension = BH
              }
            },
            metadata: SH
          }, cH, eH), (0, AH.g)(null, null, UH, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: HH => "_extensions" in HH,
              get: HH => HH._extensions,
              set: (HH, BH) => {
                HH._extensions = BH
              }
            },
            metadata: SH
          }, qH, gH), (0, AH.g)(null, null, VH, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: HH => "_textureMatrix" in HH,
              get: HH => HH._textureMatrix,
              set: (HH, BH) => {
                HH._textureMatrix = BH
              }
            },
            metadata: SH
          }, NH, RH), (0, AH.g)(null, null, OH, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: HH => "_textureMatrixRefraction" in HH,
              get: HH => HH._textureMatrixRefraction,
              set: (HH, BH) => {
                HH._textureMatrixRefraction = BH
              }
            },
            metadata: SH
          }, jH, nH), SH && Object.defineProperty(HH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SH
          })
        })(), HH
      })(),
      PH = !1;

    function TH(HH, BH, LH) {
      let AH = "";
      for (const rH of HH) AH += rH;
      return new vH(AH, BH, null, LH, HH)
    }

    function UH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        AH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const rH = BH.useDelayedTextureLoading;
      BH.useDelayedTextureLoading = !1;
      const SH = new vH(HH, BH, null, !1, null, null, null, void 0, !0, LH, AH);
      return BH.useDelayedTextureLoading = rH, SH
    }

    function VH(HH, BH, LH) {
      const AH = XH.c.Parse((() => {
        let AH = !1;
        return HH.prefiltered && (AH = HH.prefiltered), new vH(LH + (HH.url ?? HH.name), BH, HH.extensions, !1, HH.files || null, null, null, void 0, AH, HH.forcedExtension)
      }), HH, BH);
      if (HH.boundingBoxPosition && (AH.boundingBoxPosition = hH.o.FromArray(HH.boundingBoxPosition)), HH.boundingBoxSize && (AH.boundingBoxSize = hH.o.FromArray(HH.boundingBoxSize)), HH.animations)
        for (let rH = 0; rH < HH.animations.length; rH++) {
          const BH = HH.animations[rH],
            LH = (0, CH.b)("BABYLON.Animation");
          LH && AH.animations.push(LH.Parse(BH))
        }
      return AH
    }
    PH || (PH = !0, vH.CreateFromImages = TH, vH.CreateFromPrefilteredData = UH, vH.Parse = VH, zH.g._CubeTextureParser = VH, (0, CH.f)("BABYLON.CubeTexture", vH))
  },
  42472: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => CH
    });
    var AH = LH(39595),
      rH = LH(41777),
      SH = LH(41222),
      hH = LH(41129),
      tH = LH(41122);
    let zH = !1;
    class CH extends rH.g {
      constructor(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          CH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          EH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          XH = arguments.length > 6 ? arguments[6] : void 0;
        const GH = !LH || LH._isScene;
        super(null, GH ? LH : LH?.NQ, GH ? !AH : LH, XH, CH, void 0, void 0, void 0, void 0, EH), zH || (zH = !0, hH.ThinEngine.prototype.createDynamicTexture = function(HH, BH, LH, AH) {
          const rH = new tH.e(this, 4);
          return rH.baseWidth = HH, rH.baseHeight = BH, LH && (HH = this.needPOTTextures ? (0, SH.c)(HH, this._caps.maxTextureSize) : HH, BH = this.needPOTTextures ? (0, SH.c)(BH, this._caps.maxTextureSize) : BH), rH.width = HH, rH.height = BH, rH.isReady = !1, rH.generateMipMaps = LH, rH.samplingMode = AH, this.updateTextureSamplingMode(AH, rH), this._internalTexturesCache.push(rH), rH
        }, hH.ThinEngine.prototype.updateDynamicTexture = function(HH, BH, LH) {
          let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            rH = arguments.length > 4 ? arguments[4] : void 0,
            SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!HH) return;
          const hH = this._gl,
            tH = hH.TEXTURE_2D,
            zH = this._bindTextureDirectly(tH, HH, !0, SH);
          this._unpackFlipY(void 0 === LH ? HH.invertY : LH), AH && hH.pixelStorei(hH.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const CH = this._getWebGLTextureType(HH.type),
            EH = this._getInternalFormat(rH || HH.format),
            XH = this._getRGBABufferInternalSizedFormat(HH.type, EH);
          hH.texImage2D(tH, 0, XH, EH, CH, BH), HH.generateMipMaps && hH.generateMipmap(tH), zH || this._bindTextureDirectly(tH, null), AH && hH.pixelStorei(hH.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), rH && (HH.format = rH), HH._dynamicTextureSource = BH, HH._premulAlpha = AH, HH.invertY = LH || !1, HH.isReady = !0
        }), this.name = HH, this.wrapU = rH.g.CLAMP_ADDRESSMODE, this.wrapV = rH.g.CLAMP_ADDRESSMODE, this._generateMipMaps = AH;
        const YH = this._getEngine();
        if (!YH) return;
        if (BH.getContext) this._canvas = BH, this._ownCanvas = !1, this._texture = YH.createDynamicTexture(this._canvas.width, this._canvas.height, AH, CH);
        else {
          this._canvas = YH.createCanvas(1, 1), this._ownCanvas = !0;
          const HH = BH;
          HH.width || 0 === HH.width ? this._texture = YH.createDynamicTexture(HH.width, HH.height, AH, CH) : this._texture = YH.createDynamicTexture(BH, BH, AH, CH)
        }
        const uH = this.getSize();
        this._canvas.width !== uH.width && (this._canvas.width = uH.width), this._canvas.height !== uH.height && (this._canvas.height = uH.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(HH) {
        this._canvas.width = HH.width, this._canvas.height = HH.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(HH.width, HH.height, this._generateMipMaps, this.samplingMode)
      }
      scale(HH) {
        const BH = this.getSize();
        BH.width *= HH, BH.height *= HH, this._recreate(BH)
      }
      scaleTo(HH, BH) {
        const LH = this.getSize();
        LH.width = HH, LH.height = BH, this._recreate(LH)
      }
      getContext() {
        return this._context
      }
      clear(HH) {
        const BH = this.getSize();
        HH && (this._context.fillStyle = HH), this._context.clearRect(0, 0, BH.width, BH.height)
      }
      update(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === HH || HH, BH, this._format || void 0, void 0, LH)
      }
      drawText(HH, BH, LH, AH, rH, SH, hH) {
        let tH = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const zH = this.getSize();
        if (SH && (this._context.fillStyle = SH, this._context.fillRect(0, 0, zH.width, zH.height)), this._context.font = AH, null === BH || void 0 === BH) {
          const LH = this._context.measureText(HH);
          BH = (zH.width - LH.width) / 2
        }
        if (null === LH || void 0 === LH) {
          const HH = parseInt(AH.replace(/\D/g, ""));
          LH = zH.height / 2 + HH / 3.65
        }
        this._context.fillStyle = rH || "", this._context.fillText(HH, BH, LH), tH && this.update(hH)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const HH = this.yN();
        if (!HH) return this;
        const BH = this.getSize(),
          LH = new CH(this.name, BH, HH, this._generateMipMaps);
        return LH.hasAlpha = this.hasAlpha, LH.level = this.level, LH.wrapU = this.wrapU, LH.wrapV = this.wrapV, LH
      }
      serialize() {
        const HH = this.yN();
        HH && !HH.isReady() && AH.e.Warn("The scene must be ready before serializing the dynamic texture");
        const BH = super.serialize();
        return CH._IsCanvasElement(this._canvas) && (BH.base64String = this._canvas.toDataURL()), BH.invertY = this._invertY, BH.samplingMode = this.samplingMode, BH
      }
      static _IsCanvasElement(HH) {
        return void 0 !== HH.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  42445: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH
    });
    var AH = LH(41777);
    class rH extends AH.g {
      get depth() {
        return this._depth
      }
      constructor(HH, BH, LH, rH, SH, hH) {
        let tH = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          zH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          CH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : AH.g.TRILINEAR_SAMPLINGMODE,
          EH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          XH = arguments.length > 10 ? arguments[10] : void 0,
          GH = arguments.length > 11 ? arguments[11] : void 0;
        super(null, hH, !tH, zH), this.format = SH, this._texture = hH.Iu().createRawTexture2DArray(HH, BH, LH, rH, SH, tH, zH, CH, null, EH, XH ?? 0, GH), this._depth = rH, this.is2DArray = !0
      }
      update(HH) {
        this.updateMipLevel(HH, 0)
      }
      updateMipLevel(HH, BH) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, HH, this._texture.format, this._texture.invertY, null, this._texture.type, BH)
      }
      static CreateRGBATexture(HH, BH, LH, AH, SH) {
        return new rH(HH, BH, LH, AH, 5, SH, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  42439: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH.b
    });
    var AH = LH(41648);
    (0, AH.e)()
  },
  41374: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH.d
    });
    var AH = LH(41383);
    (0, AH.c)()
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);