export const id = 227;
export const ids = [227];
export const modules = {
  37817: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => AW,
      d: () => bR
    });
    var wW = MW(36721),
      CW = MW(37615),
      zR = MW(37796),
      AW = {};
    class bR {
      constructor(WW) {
        this.attachedToElement = !1, this.attached = {}, this.camera = WW, this.checkInputs = () => {}
      }
      add(WW) {
        const RW = WW.getSimpleName();
        this.attached[RW] ? wW.b.Warn("camera input of type " + RW + " already exists on camera") : (this.attached[RW] = WW, WW.camera = this.camera, WW.checkInputs && (this.checkInputs = this._addCheckInputs(WW.checkInputs.bind(WW))), this.attachedToElement && WW.attachControl(this.noPreventDefault))
      }
      remove(WW) {
        for (const RW in this.attached) {
          const MW = this.attached[RW];
          if (MW === WW) return MW.detachControl(), MW.camera = null, delete this.attached[RW], void this.rebuildInputCheck()
        }
      }
      removeByType(WW) {
        for (const RW in this.attached) {
          const MW = this.attached[RW];
          MW.getClassName() === WW && (MW.detachControl(), MW.camera = null, delete this.attached[RW], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(WW) {
        const RW = this.checkInputs;
        return () => {
          RW(), WW()
        }
      }
      attachInput(WW) {
        this.attachedToElement && WW.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          WW = !zR.e.ForceAttachControlToAlwaysPreventDefault && WW, this.attachedToElement = !0, this.noPreventDefault = WW;
          for (const RW in this.attached) this.attached[RW].attachControl(WW)
        }
      }
      detachElement() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const RW in this.attached) this.attached[RW].detachControl(), WW && (this.attached[RW].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const WW in this.attached) {
          const RW = this.attached[WW];
          RW.checkInputs && (this.checkInputs = this._addCheckInputs(RW.checkInputs.bind(RW)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(WW) {
        const RW = {};
        for (const MW in this.attached) {
          const WW = this.attached[MW],
            wW = CW.d.Serialize(WW);
          RW[WW.getClassName()] = wW
        }
        WW.inputsmgr = RW
      }
      parse(WW) {
        const RW = WW.inputsmgr;
        if (RW) {
          this.clear();
          for (const WW in RW) {
            const MW = AW[WW];
            if (MW) {
              const wW = RW[WW],
                zR = CW.d.Parse((() => new MW), wW, null);
              this.add(zR)
            }
          }
        } else
          for (const MW in this.attached) {
            const RW = AW[this.attached[MW].getClassName()];
            if (RW) {
              const wW = CW.d.Parse((() => new RW), WW, null);
              this.remove(this.attached[MW]), this.add(wW)
            }
          }
      }
    }
  },
  38723: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => IW
    });
    var wW = MW(37587),
      CW = MW(37593),
      zR = MW(37483),
      AW = MW(35324),
      bR = MW(37579),
      yR = MW(38069),
      NW = MW(35361),
      eW = MW(35346),
      BW = MW(37615),
      tR = MW(37424),
      TW = MW(36721),
      gR = MW(37635),
      iR = MW(35984),
      YW = MW(37665);
    var JW = MW(37485);
    let PW = !1;
    let IW = (() => {
        var WW;
        let RW, MW, NW, IW, oW, lW, FW, fW, QW, rR = bR.c,
          cR = [],
          XW = [],
          jR = [],
          kR = [],
          aR = [],
          sW = [],
          dW = [],
          pW = [],
          hW = [],
          UW = [],
          EW = [],
          VW = [],
          mR = [],
          xR = [],
          vR = [];
        return WW = class extends rR {
          set boundingBoxSize(WW) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(WW)) return;
            this._boundingBoxSize = WW;
            const RW = this.QRW();
            RW && RW.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(WW) {
            this._rotationY = WW, this.setReflectionTextureMatrix(AW.d.RotationY(this._rotationY))
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
          constructor(WW, RW) {
            let MW, CW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              zR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              bR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              BW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              IW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              oW = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              lW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              FW = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              fW = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              QW = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              rR = arguments.length > 13 ? arguments[13] : void 0,
              KW = arguments.length > 14 ? arguments[14] : void 0;
            super(RW), this._delayedOnLoad = (0, wW.i)(this, cR), this.onLoadObservable = new eW.c, this.url = (0, wW.i)(this, XW, void 0), this.boundingBoxPosition = ((0, wW.i)(this, jR), (0, wW.i)(this, kR, AW.q.Zero())), this._boundingBoxSize = (0, wW.i)(this, aR), this._rotationY = 0, this._files = (0, wW.i)(this, sW, null), this._forcedExtension = ((0, wW.i)(this, dW), (0, wW.i)(this, pW, null)), this._extensions = ((0, wW.i)(this, hW), (0, wW.i)(this, UW, null)), this._textureMatrix = ((0, wW.i)(this, EW), (0, wW.i)(this, VW, void 0)), this._textureMatrixRefraction = ((0, wW.i)(this, mR), (0, wW.i)(this, xR, new AW.d)), this._format = (0, wW.i)(this, vR), this._buffer = null, PW || (PW = !0, JW.b.prototype._partialLoadFile = function(WW, RW, MW, wW) {
              let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(WW, (WW => {
                MW[RW] = WW, MW._internalCount++, 6 === MW._internalCount && wW(MW)
              }), void 0, void 0, !0, ((WW, RW) => {
                CW && WW && CW(WW.status + " " + WW.statusText, RW)
              }))
            }, JW.b.prototype._cascadeLoadFiles = function(WW, RW, MW) {
              let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const CW = [];
              CW._internalCount = 0;
              for (let zR = 0; zR < 6; zR++) this._partialLoadFile(MW[zR], zR, CW, RW, wW)
            }, JW.b.prototype._cascadeLoadImgs = function(WW, RW, MW, wW) {
              let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                zR = arguments.length > 5 ? arguments[5] : void 0;
              const AW = [];
              AW._internalCount = 0;
              for (let bR = 0; bR < 6; bR++) this._partialLoadImg(wW[bR], bR, AW, WW, RW, MW, CW, zR)
            }, JW.b.prototype._partialLoadImg = function(WW, RW, MW, wW, CW, zR) {
              let AW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                bR = arguments.length > 7 ? arguments[7] : void 0;
              const yR = (0, iR.e)();
              (0, gR.m)(WW, (WW => {
                MW[RW] = WW, MW._internalCount++, wW && wW.removePendingData(yR), 6 === MW._internalCount && zR && zR(CW, MW)
              }), ((WW, RW) => {
                wW && wW.removePendingData(yR), AW && AW(WW, RW)
              }), wW ? wW.offlineProvider : null, bR), wW && wW.addPendingData(yR)
            }, JW.b.prototype.createCubeTextureBase = function(WW, RW, MW, wW) {
              let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                AW = arguments.length > 6 ? arguments[6] : void 0,
                bR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                yR = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                NW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                eW = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                BW = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                gR = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                iR = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                JW = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                PW = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const IW = BW || new tR.e(this, 7);
              IW.isCube = !0, IW.url = WW, IW.generateMipMaps = !wW, IW._lodGenerationScale = NW, IW._lodGenerationOffset = eW, IW._useSRGBBuffer = !!JW && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!wW), IW !== BW && (IW.label = WW.substring(0, 60)), this._doNotHandleContextLost || (IW._extension = bR, IW._files = MW, IW._buffer = PW);
              const oW = WW;
              this._transformTextureUrl && !BW && (WW = this._transformTextureUrl(WW));
              const lW = bR ?? function(WW) {
                  const RW = WW.split("?")[0],
                    MW = RW.lastIndexOf(".");
                  return MW > -1 ? RW.substring(MW).toLowerCase() : ""
                }(WW),
                FW = (0, YW.e)(lW),
                fW = (WW, RW) => {
                  IW.dispose(), zR ? zR(WW, RW) : WW && TW.b.Warn(WW)
                },
                QW = (zR, BW) => {
                  WW === oW ? zR && fW(zR.status + " " + zR.statusText, BW) : (TW.b.Warn(`Failed to load ${WW}, falling back to the ${oW}`), this.createCubeTextureBase(oW, RW, MW, !!wW, CW, fW, AW, bR, yR, NW, eW, IW, gR, iR, JW, PW))
                };
              if (FW) FW.then((wW => {
                const zR = WW => {
                  gR && gR(IW, WW), wW.loadCubeData(WW, IW, yR, CW, ((WW, RW) => {
                    fW(WW, RW)
                  }))
                };
                PW ? zR(PW) : MW && 6 === MW.length ? wW.supportCascades ? this._cascadeLoadFiles(RW, (WW => zR(WW.map((WW => new Uint8Array(WW))))), MW, fW) : fW("Textures type does not support cascades.") : this._loadFile(WW, (WW => zR(new Uint8Array(WW))), void 0, RW ? RW.offlineProvider || null : void 0, !0, QW)
              }));
              else {
                if (!MW || 0 === MW.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(RW, IW, ((WW, RW) => {
                  iR && iR(WW, RW)
                }), MW, fW)
              }
              return this._internalTexturesCache.push(IW), IW
            }), this.name = WW, this.url = WW, this._noMipmap = zR, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = AW.d.Identity(), this.coordinatesMode = yR.d.CUBIC_MODE;
            let uW = null;
            null === CW || Array.isArray(CW) ? (this._noMipmap = zR, this._format = IW, this._createPolynomials = FW, MW = CW, this._loaderOptions = rR, this._useSRGBBuffer = KW, this._lodScale = fW, this._lodOffset = QW) : (MW = CW.extensions ?? null, this._noMipmap = CW.noMipmap ?? !1, bR = CW.files ?? null, uW = CW.buffer ?? null, this._format = CW.format ?? 5, oW = CW.prefiltered ?? !1, lW = CW.forcedExtension ?? null, this._createPolynomials = CW.createPolynomials ?? !1, this._lodScale = CW.lodScale ?? .8, this._lodOffset = CW.lodOffset ?? 0, this._loaderOptions = CW.loaderOptions, this._useSRGBBuffer = CW.useSRGBBuffer, this._sphericalPolynomialTargetSize = CW.sphericalPolynomialTargetSize ?? 0, NW = CW.onLoad ?? null, BW = CW.onError ?? null), (WW || bR) && this.updateURL(WW, lW, NW, oW, BW, MW, this.QRW()?.useDelayedTextureLoading, bR, uW)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(WW) {
            let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              AW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              bR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              yR = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = WW), this.url = WW, RW && (this._forcedExtension = RW);
            const NW = WW.lastIndexOf("."),
              eW = RW || (NW > -1 ? WW.substring(NW).toLowerCase() : ""),
              BW = 0 === eW.indexOf(".dds"),
              tR = 0 === eW.indexOf(".env"),
              TW = 0 === eW.indexOf(".basis");
            if (tR ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = wW, wW && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), bR) this._files = bR;
            else if (TW || tR || BW || zR || (zR = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, zR) {
              for (let RW = 0; RW < zR.length; RW++) this._files.push(WW + zR[RW]);
              this._extensions = zR
            }
            this._buffer = yR, AW ? (this.delayLoadState = 4, this._delayedOnLoad = MW, this._delayedOnError = CW) : this._loadTexture(MW, CW)
          }
          delayLoad(WW) {
            4 === this.delayLoadState && (WW && (this._forcedExtension = WW), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(WW) {
            if (WW.updateFlag === this._textureMatrix.updateFlag) return;
            if (WW.isIdentity() !== this._textureMatrix.isIdentity() && this.QRW()?.markAllMaterialsAsDirty(1, (WW => -1 !== WW.getActiveTextures().indexOf(this))), this._textureMatrix = WW, !this.QRW()?.useRightHandedSystem) return;
            const RW = AW.k.vC[0],
              MW = AW.k.Quaternion[0],
              wW = AW.k.vC[1];
            this._textureMatrix.decompose(RW, MW, wW), MW.z *= -1, MW.w *= -1, AW.d.ComposeToRef(RW, MW, wW, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.QRW()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const MW = this.QRW(),
              wW = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const CW = () => {
                this.onLoadObservable.notifyObservers(this), wW && (wW.dispose(), this.QRW()?.markAllMaterialsAsDirty(1)), WW && WW()
              },
              AW = (WW, MW) => {
                this._loadingError = !0, this._errorObject = {
                  message: WW,
                  exception: MW
                }, RW && RW(WW, MW), yR.d.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? zR.c.SetImmediate((() => CW())) : this._texture.onLoadedObservable.add((() => CW())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, MW, this._lodScale, this._lodOffset, WW, AW, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, MW, this._files, this._noMipmap, WW, AW, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let RW = 0;
            const MW = this.irradianceTexture,
              wW = BW.d.Clone((() => {
                const MW = new WW(this.url, this.QRW() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return RW = MW.uniqueId, MW
              }), this);
            return wW.uniqueId = RW, MW && !this.irradianceTexture && (this.irradianceTexture = MW), wW
          }
        }, (() => {
          const zR = "function" === typeof Symbol && Symbol.metadata ? Object.create(rR[Symbol.metadata] ?? null) : void 0;
          RW = [(0, CW.D)()], MW = [(0, CW.B)()], NW = [(0, CW.B)()], IW = [(0, CW.D)("rotationY")], oW = [(0, CW.D)("files")], lW = [(0, CW.D)("forcedExtension")], FW = [(0, CW.D)("extensions")], fW = [(0, CW.r)("textureMatrix")], QW = [(0, CW.r)("textureMatrixRefraction")], (0, wW.e)(WW, null, NW, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: WW => "boundingBoxSize" in WW,
              get: WW => WW.boundingBoxSize
            },
            metadata: zR
          }, null, cR), (0, wW.e)(WW, null, IW, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: WW => "rotationY" in WW,
              set: (WW, RW) => {
                WW.rotationY = RW
              }
            },
            metadata: zR
          }, null, cR), (0, wW.e)(null, null, RW, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: WW => "url" in WW,
              get: WW => WW.url,
              set: (WW, RW) => {
                WW.url = RW
              }
            },
            metadata: zR
          }, XW, jR), (0, wW.e)(null, null, MW, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: WW => "boundingBoxPosition" in WW,
              get: WW => WW.boundingBoxPosition,
              set: (WW, RW) => {
                WW.boundingBoxPosition = RW
              }
            },
            metadata: zR
          }, kR, aR), (0, wW.e)(null, null, oW, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: WW => "_files" in WW,
              get: WW => WW._files,
              set: (WW, RW) => {
                WW._files = RW
              }
            },
            metadata: zR
          }, sW, dW), (0, wW.e)(null, null, lW, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: WW => "_forcedExtension" in WW,
              get: WW => WW._forcedExtension,
              set: (WW, RW) => {
                WW._forcedExtension = RW
              }
            },
            metadata: zR
          }, pW, hW), (0, wW.e)(null, null, FW, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: WW => "_extensions" in WW,
              get: WW => WW._extensions,
              set: (WW, RW) => {
                WW._extensions = RW
              }
            },
            metadata: zR
          }, UW, EW), (0, wW.e)(null, null, fW, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: WW => "_textureMatrix" in WW,
              get: WW => WW._textureMatrix,
              set: (WW, RW) => {
                WW._textureMatrix = RW
              }
            },
            metadata: zR
          }, VW, mR), (0, wW.e)(null, null, QW, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: WW => "_textureMatrixRefraction" in WW,
              get: WW => WW._textureMatrixRefraction,
              set: (WW, RW) => {
                WW._textureMatrixRefraction = RW
              }
            },
            metadata: zR
          }, xR, vR), zR && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zR
          })
        })(), WW
      })(),
      oW = !1;

    function lW(WW, RW, MW) {
      let wW = "";
      for (const CW of WW) wW += CW;
      return new IW(wW, RW, null, MW, WW)
    }

    function FW(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        wW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const CW = RW.useDelayedTextureLoading;
      RW.useDelayedTextureLoading = !1;
      const zR = new IW(WW, RW, null, !1, null, null, null, void 0, !0, MW, wW);
      return RW.useDelayedTextureLoading = CW, zR
    }

    function fW(WW, RW, MW) {
      const wW = BW.d.Parse((() => {
        let wW = !1;
        return WW.prefiltered && (wW = WW.prefiltered), new IW(MW + (WW.url ?? WW.name), RW, WW.extensions, !1, WW.files || null, null, null, void 0, wW, WW.forcedExtension)
      }), WW, RW);
      if (WW.boundingBoxPosition && (wW.boundingBoxPosition = AW.q.FromArray(WW.boundingBoxPosition)), WW.boundingBoxSize && (wW.boundingBoxSize = AW.q.FromArray(WW.boundingBoxSize)), WW.animations)
        for (let CW = 0; CW < WW.animations.length; CW++) {
          const RW = WW.animations[CW],
            MW = (0, NW.c)("BABYLON.Animation");
          MW && wW.animations.push(MW.Parse(RW))
        }
      return wW
    }
    oW || (oW = !0, IW.CreateFromImages = lW, IW.CreateFromPrefilteredData = FW, IW.Parse = fW, yR.d._CubeTextureParser = fW, (0, NW.e)("BABYLON.CubeTexture", IW))
  },
  38763: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => NW
    });
    var wW = MW(36721),
      CW = MW(38069),
      zR = MW(37520),
      AW = MW(37433),
      bR = MW(37424);
    let yR = !1;
    class NW extends CW.d {
      constructor(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          eW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          BW = arguments.length > 6 ? arguments[6] : void 0;
        const tR = !MW || MW._isScene;
        super(null, tR ? MW : MW?.LC, tR ? !wW : MW, BW, NW, void 0, void 0, void 0, void 0, eW), yR || (yR = !0, AW.ThinEngine.prototype.createDynamicTexture = function(WW, RW, MW, wW) {
          const CW = new bR.e(this, 4);
          return CW.baseWidth = WW, CW.baseHeight = RW, MW && (WW = this.needPOTTextures ? (0, zR.e)(WW, this._caps.maxTextureSize) : WW, RW = this.needPOTTextures ? (0, zR.e)(RW, this._caps.maxTextureSize) : RW), CW.width = WW, CW.height = RW, CW.isReady = !1, CW.generateMipMaps = MW, CW.samplingMode = wW, this.updateTextureSamplingMode(wW, CW), this._internalTexturesCache.push(CW), CW
        }, AW.ThinEngine.prototype.updateDynamicTexture = function(WW, RW, MW) {
          let wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            CW = arguments.length > 4 ? arguments[4] : void 0,
            zR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!WW) return;
          const AW = this._gl,
            bR = AW.TEXTURE_2D,
            yR = this._bindTextureDirectly(bR, WW, !0, zR);
          this._unpackFlipY(void 0 === MW ? WW.invertY : MW), wW && AW.pixelStorei(AW.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const NW = this._getWebGLTextureType(WW.type),
            eW = this._getInternalFormat(CW || WW.format),
            BW = this._getRGBABufferInternalSizedFormat(WW.type, eW);
          AW.texImage2D(bR, 0, BW, eW, NW, RW), WW.generateMipMaps && AW.generateMipmap(bR), yR || this._bindTextureDirectly(bR, null), wW && AW.pixelStorei(AW.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), CW && (WW.format = CW), WW._dynamicTextureSource = RW, WW._premulAlpha = wW, WW.invertY = MW || !1, WW.isReady = !0
        }), this.name = WW, this.wrapU = CW.d.CLAMP_ADDRESSMODE, this.wrapV = CW.d.CLAMP_ADDRESSMODE, this._generateMipMaps = wW;
        const TW = this._getEngine();
        if (!TW) return;
        if (RW.getContext) this._canvas = RW, this._ownCanvas = !1, this._texture = TW.createDynamicTexture(this._canvas.width, this._canvas.height, wW, NW);
        else {
          this._canvas = TW.createCanvas(1, 1), this._ownCanvas = !0;
          const WW = RW;
          WW.width || 0 === WW.width ? this._texture = TW.createDynamicTexture(WW.width, WW.height, wW, NW) : this._texture = TW.createDynamicTexture(RW, RW, wW, NW)
        }
        const gR = this.getSize();
        this._canvas.width !== gR.width && (this._canvas.width = gR.width), this._canvas.height !== gR.height && (this._canvas.height = gR.height), this._context = this._canvas.getContext("2d")
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
        const RW = this.getSize();
        RW.width *= WW, RW.height *= WW, this._recreate(RW)
      }
      scaleTo(WW, RW) {
        const MW = this.getSize();
        MW.width = WW, MW.height = RW, this._recreate(MW)
      }
      getContext() {
        return this._context
      }
      clear(WW) {
        const RW = this.getSize();
        WW && (this._context.fillStyle = WW), this._context.clearRect(0, 0, RW.width, RW.height)
      }
      update(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === WW || WW, RW, this._format || void 0, void 0, MW)
      }
      drawText(WW, RW, MW, wW, CW, zR, AW) {
        let bR = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const yR = this.getSize();
        if (zR && (this._context.fillStyle = zR, this._context.fillRect(0, 0, yR.width, yR.height)), this._context.font = wW, null === RW || void 0 === RW) {
          const MW = this._context.measureText(WW);
          RW = (yR.width - MW.width) / 2
        }
        if (null === MW || void 0 === MW) {
          const WW = parseInt(wW.replace(/\D/g, ""));
          MW = yR.height / 2 + WW / 3.65
        }
        this._context.fillStyle = CW || "", this._context.fillText(WW, RW, MW), bR && this.update(AW)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const WW = this.QRW();
        if (!WW) return this;
        const RW = this.getSize(),
          MW = new NW(this.name, RW, WW, this._generateMipMaps);
        return MW.hasAlpha = this.hasAlpha, MW.level = this.level, MW.wrapU = this.wrapU, MW.wrapV = this.wrapV, MW
      }
      serialize() {
        const WW = this.QRW();
        WW && !WW.isReady() && wW.b.Warn("The scene must be ready before serializing the dynamic texture");
        const RW = super.serialize();
        return NW._IsCanvasElement(this._canvas) && (RW.base64String = this._canvas.toDataURL()), RW.invertY = this._invertY, RW.samplingMode = this.samplingMode, RW
      }
      static _IsCanvasElement(WW) {
        return void 0 !== WW.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  38740: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => CW
    });
    var wW = MW(38069);
    class CW extends wW.d {
      get depth() {
        return this._depth
      }
      constructor(WW, RW, MW, CW, zR, AW) {
        let bR = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          yR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          NW = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : wW.d.TRILINEAR_SAMPLINGMODE,
          eW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          BW = arguments.length > 10 ? arguments[10] : void 0,
          tR = arguments.length > 11 ? arguments[11] : void 0;
        super(null, AW, !bR, yR), this.format = zR, this._texture = AW.mC().createRawTexture2DArray(WW, RW, MW, CW, zR, bR, yR, NW, null, eW, BW ?? 0, tR), this._depth = CW, this.is2DArray = !0
      }
      update(WW) {
        this.updateMipLevel(WW, 0)
      }
      updateMipLevel(WW, RW) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, WW, this._texture.format, this._texture.invertY, null, this._texture.type, RW)
      }
      static CreateRGBATexture(WW, RW, MW, wW, zR) {
        return new CW(WW, RW, MW, wW, 5, zR, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  38732: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => wW.c
    });
    var wW = MW(37941);
    (0, wW.f)()
  },
  37670: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW.i
    });
    var wW = MW(37677);
    (0, wW.e)()
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);