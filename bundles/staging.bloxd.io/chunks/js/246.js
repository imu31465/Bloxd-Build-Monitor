export const id = 246;
export const ids = [246];
export const modules = {
  39016: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => WT,
      e: () => XT
    });
    var iT = IT(37660),
      zT = IT(38799),
      kT = IT(38986),
      WT = {};
    class XT {
      constructor(TT) {
        this.attachedToElement = !1, this.attached = {}, this.camera = TT, this.checkInputs = () => {}
      }
      add(TT) {
        const oT = TT.getSimpleName();
        this.attached[oT] ? iT.d.Warn("camera input of type " + oT + " already exists on camera") : (this.attached[oT] = TT, TT.camera = this.camera, TT.checkInputs && (this.checkInputs = this._addCheckInputs(TT.checkInputs.bind(TT))), this.attachedToElement && TT.attachControl(this.noPreventDefault))
      }
      remove(TT) {
        for (const oT in this.attached) {
          const IT = this.attached[oT];
          if (IT === TT) return IT.detachControl(), IT.camera = null, delete this.attached[oT], void this.rebuildInputCheck()
        }
      }
      removeByType(TT) {
        for (const oT in this.attached) {
          const IT = this.attached[oT];
          IT.getClassName() === TT && (IT.detachControl(), IT.camera = null, delete this.attached[oT], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(TT) {
        const oT = this.checkInputs;
        return () => {
          oT(), TT()
        }
      }
      attachInput(TT) {
        this.attachedToElement && TT.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          TT = !kT.c.ForceAttachControlToAlwaysPreventDefault && TT, this.attachedToElement = !0, this.noPreventDefault = TT;
          for (const oT in this.attached) this.attached[oT].attachControl(TT)
        }
      }
      detachElement() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const oT in this.attached) this.attached[oT].detachControl(), TT && (this.attached[oT].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const TT in this.attached) {
          const oT = this.attached[TT];
          oT.checkInputs && (this.checkInputs = this._addCheckInputs(oT.checkInputs.bind(oT)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(TT) {
        const oT = {};
        for (const IT in this.attached) {
          const TT = this.attached[IT],
            iT = zT.c.Serialize(TT);
          oT[TT.getClassName()] = iT
        }
        TT.inputsmgr = oT
      }
      parse(TT) {
        const oT = TT.inputsmgr;
        if (oT) {
          this.clear();
          for (const TT in oT) {
            const IT = WT[TT];
            if (IT) {
              const iT = oT[TT],
                kT = zT.c.Parse((() => new IT), iT, null);
              this.add(kT)
            }
          }
        } else
          for (const IT in this.attached) {
            const oT = WT[this.attached[IT].getClassName()];
            if (oT) {
              const iT = zT.c.Parse((() => new oT), TT, null);
              this.remove(this.attached[IT]), this.add(iT)
            }
          }
      }
    }
  },
  40050: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => gT
    });
    var iT = IT(38764),
      zT = IT(38773),
      kT = IT(38653),
      WT = IT(36118),
      XT = IT(38758),
      BT = IT(39270),
      FT = IT(36166),
      ST = IT(36149),
      DT = IT(38799),
      LT = IT(38594),
      xT = IT(37660),
      cT = IT(38827),
      KT = IT(36851),
      MT = IT(38867);
    var rT = IT(38659);
    let AT = !1;
    let gT = (() => {
        var TT;
        let oT, IT, FT, gT, hT, wT, mT, eT, RT, uT = XT.e,
          vT = [],
          ET = [],
          fT = [],
          CT = [],
          jT = [],
          JT = [],
          UT = [],
          aT = [],
          YT = [],
          QT = [],
          OT = [],
          HT = [],
          nT = [],
          qT = [],
          ZT = [];
        return TT = class extends uT {
          set boundingBoxSize(TT) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(TT)) return;
            this._boundingBoxSize = TT;
            const oT = this.pC();
            oT && oT.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(TT) {
            this._rotationY = TT, this.setReflectionTextureMatrix(WT.b.RotationY(this._rotationY))
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
          constructor(TT, oT) {
            let IT, zT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              kT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              XT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              FT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              DT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              gT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              hT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              wT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              mT = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              eT = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              RT = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              uT = arguments.length > 13 ? arguments[13] : void 0,
              lT = arguments.length > 14 ? arguments[14] : void 0;
            super(oT), this._delayedOnLoad = (0, iT.j)(this, vT), this.onLoadObservable = new ST.d, this.url = (0, iT.j)(this, ET, void 0), this.boundingBoxPosition = ((0, iT.j)(this, fT), (0, iT.j)(this, CT, WT.m.Zero())), this._boundingBoxSize = (0, iT.j)(this, jT), this._rotationY = 0, this._files = (0, iT.j)(this, JT, null), this._forcedExtension = ((0, iT.j)(this, UT), (0, iT.j)(this, aT, null)), this._extensions = ((0, iT.j)(this, YT), (0, iT.j)(this, QT, null)), this._textureMatrix = ((0, iT.j)(this, OT), (0, iT.j)(this, HT, void 0)), this._textureMatrixRefraction = ((0, iT.j)(this, nT), (0, iT.j)(this, qT, new WT.b)), this._format = (0, iT.j)(this, ZT), this._buffer = null, AT || (AT = !0, rT.b.prototype._partialLoadFile = function(TT, oT, IT, iT) {
              let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(TT, (TT => {
                IT[oT] = TT, IT._internalCount++, 6 === IT._internalCount && iT(IT)
              }), void 0, void 0, !0, ((TT, oT) => {
                zT && TT && zT(TT.status + " " + TT.statusText, oT)
              }))
            }, rT.b.prototype._cascadeLoadFiles = function(TT, oT, IT) {
              let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const zT = [];
              zT._internalCount = 0;
              for (let kT = 0; kT < 6; kT++) this._partialLoadFile(IT[kT], kT, zT, oT, iT)
            }, rT.b.prototype._cascadeLoadImgs = function(TT, oT, IT, iT) {
              let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                kT = arguments.length > 5 ? arguments[5] : void 0;
              const WT = [];
              WT._internalCount = 0;
              for (let XT = 0; XT < 6; XT++) this._partialLoadImg(iT[XT], XT, WT, TT, oT, IT, zT, kT)
            }, rT.b.prototype._partialLoadImg = function(TT, oT, IT, iT, zT, kT) {
              let WT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                XT = arguments.length > 7 ? arguments[7] : void 0;
              const BT = (0, KT.e)();
              (0, cT.r)(TT, (TT => {
                IT[oT] = TT, IT._internalCount++, iT && iT.removePendingData(BT), 6 === IT._internalCount && kT && kT(zT, IT)
              }), ((TT, oT) => {
                iT && iT.removePendingData(BT), WT && WT(TT, oT)
              }), iT ? iT.offlineProvider : null, XT), iT && iT.addPendingData(BT)
            }, rT.b.prototype.createCubeTextureBase = function(TT, oT, IT, iT) {
              let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                WT = arguments.length > 6 ? arguments[6] : void 0,
                XT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                BT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                FT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                ST = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                DT = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                cT = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                KT = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                rT = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                AT = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const gT = DT || new LT.e(this, 7);
              gT.isCube = !0, gT.url = TT, gT.generateMipMaps = !iT, gT._lodGenerationScale = FT, gT._lodGenerationOffset = ST, gT._useSRGBBuffer = !!rT && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!iT), gT !== DT && (gT.label = TT.substring(0, 60)), this._doNotHandleContextLost || (gT._extension = XT, gT._files = IT, gT._buffer = AT);
              const hT = TT;
              this._transformTextureUrl && !DT && (TT = this._transformTextureUrl(TT));
              const wT = XT ?? function(TT) {
                  const oT = TT.split("?")[0],
                    IT = oT.lastIndexOf(".");
                  return IT > -1 ? oT.substring(IT).toLowerCase() : ""
                }(TT),
                mT = (0, MT.e)(wT),
                eT = (TT, oT) => {
                  gT.dispose(), kT ? kT(TT, oT) : TT && xT.d.Warn(TT)
                },
                RT = (kT, DT) => {
                  TT === hT ? kT && eT(kT.status + " " + kT.statusText, DT) : (xT.d.Warn(`Failed to load ${TT}, falling back to the ${hT}`), this.createCubeTextureBase(hT, oT, IT, !!iT, zT, eT, WT, XT, BT, FT, ST, gT, cT, KT, rT, AT))
                };
              if (mT) mT.then((iT => {
                const kT = TT => {
                  cT && cT(gT, TT), iT.loadCubeData(TT, gT, BT, zT, ((TT, oT) => {
                    eT(TT, oT)
                  }))
                };
                AT ? kT(AT) : IT && 6 === IT.length ? iT.supportCascades ? this._cascadeLoadFiles(oT, (TT => kT(TT.map((TT => new Uint8Array(TT))))), IT, eT) : eT("Textures type does not support cascades.") : this._loadFile(TT, (TT => kT(new Uint8Array(TT))), void 0, oT ? oT.offlineProvider || null : void 0, !0, RT)
              }));
              else {
                if (!IT || 0 === IT.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(oT, gT, ((TT, oT) => {
                  KT && KT(TT, oT)
                }), IT, eT)
              }
              return this._internalTexturesCache.push(gT), gT
            }), this.name = TT, this.url = TT, this._noMipmap = kT, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = WT.b.Identity(), this.coordinatesMode = BT.g.CUBIC_MODE;
            let sT = null;
            null === zT || Array.isArray(zT) ? (this._noMipmap = kT, this._format = gT, this._createPolynomials = mT, IT = zT, this._loaderOptions = uT, this._useSRGBBuffer = lT, this._lodScale = eT, this._lodOffset = RT) : (IT = zT.extensions ?? null, this._noMipmap = zT.noMipmap ?? !1, XT = zT.files ?? null, sT = zT.buffer ?? null, this._format = zT.format ?? 5, hT = zT.prefiltered ?? !1, wT = zT.forcedExtension ?? null, this._createPolynomials = zT.createPolynomials ?? !1, this._lodScale = zT.lodScale ?? .8, this._lodOffset = zT.lodOffset ?? 0, this._loaderOptions = zT.loaderOptions, this._useSRGBBuffer = zT.useSRGBBuffer, this._sphericalPolynomialTargetSize = zT.sphericalPolynomialTargetSize ?? 0, FT = zT.onLoad ?? null, DT = zT.onError ?? null), (TT || XT) && this.updateURL(TT, wT, FT, hT, DT, IT, this.pC()?.useDelayedTextureLoading, XT, sT)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(TT) {
            let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              WT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              XT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              BT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = TT), this.url = TT, oT && (this._forcedExtension = oT);
            const FT = TT.lastIndexOf("."),
              ST = oT || (FT > -1 ? TT.substring(FT).toLowerCase() : ""),
              DT = 0 === ST.indexOf(".dds"),
              LT = 0 === ST.indexOf(".env"),
              xT = 0 === ST.indexOf(".basis");
            if (LT ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = iT, iT && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), XT) this._files = XT;
            else if (xT || LT || DT || kT || (kT = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, kT) {
              for (let oT = 0; oT < kT.length; oT++) this._files.push(TT + kT[oT]);
              this._extensions = kT
            }
            this._buffer = BT, WT ? (this.delayLoadState = 4, this._delayedOnLoad = IT, this._delayedOnError = zT) : this._loadTexture(IT, zT)
          }
          delayLoad(TT) {
            4 === this.delayLoadState && (TT && (this._forcedExtension = TT), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(TT) {
            if (TT.updateFlag === this._textureMatrix.updateFlag) return;
            if (TT.isIdentity() !== this._textureMatrix.isIdentity() && this.pC()?.markAllMaterialsAsDirty(1, (TT => -1 !== TT.getActiveTextures().indexOf(this))), this._textureMatrix = TT, !this.pC()?.useRightHandedSystem) return;
            const oT = WT.i.sc[0],
              IT = WT.i.Quaternion[0],
              iT = WT.i.sc[1];
            this._textureMatrix.decompose(oT, IT, iT), IT.z *= -1, IT.w *= -1, WT.b.ComposeToRef(oT, IT, iT, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.pC()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const IT = this.pC(),
              iT = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const zT = () => {
                this.onLoadObservable.notifyObservers(this), iT && (iT.dispose(), this.pC()?.markAllMaterialsAsDirty(1)), TT && TT()
              },
              WT = (TT, IT) => {
                this._loadingError = !0, this._errorObject = {
                  message: TT,
                  exception: IT
                }, oT && oT(TT, IT), BT.g.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? kT.c.SetImmediate((() => zT())) : this._texture.onLoadedObservable.add((() => zT())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, IT, this._lodScale, this._lodOffset, TT, WT, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, IT, this._files, this._noMipmap, TT, WT, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let oT = 0;
            const IT = this.irradianceTexture,
              iT = DT.c.Clone((() => {
                const IT = new TT(this.url, this.pC() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return oT = IT.uniqueId, IT
              }), this);
            return iT.uniqueId = oT, IT && !this.irradianceTexture && (this.irradianceTexture = IT), iT
          }
        }, (() => {
          const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(uT[Symbol.metadata] ?? null) : void 0;
          oT = [(0, zT.P)()], IT = [(0, zT.M)()], FT = [(0, zT.M)()], gT = [(0, zT.P)("rotationY")], hT = [(0, zT.P)("files")], wT = [(0, zT.P)("forcedExtension")], mT = [(0, zT.P)("extensions")], eT = [(0, zT.B)("textureMatrix")], RT = [(0, zT.B)("textureMatrixRefraction")], (0, iT.h)(TT, null, FT, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: TT => "boundingBoxSize" in TT,
              get: TT => TT.boundingBoxSize
            },
            metadata: kT
          }, null, vT), (0, iT.h)(TT, null, gT, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: TT => "rotationY" in TT,
              set: (TT, oT) => {
                TT.rotationY = oT
              }
            },
            metadata: kT
          }, null, vT), (0, iT.h)(null, null, oT, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: TT => "url" in TT,
              get: TT => TT.url,
              set: (TT, oT) => {
                TT.url = oT
              }
            },
            metadata: kT
          }, ET, fT), (0, iT.h)(null, null, IT, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: TT => "boundingBoxPosition" in TT,
              get: TT => TT.boundingBoxPosition,
              set: (TT, oT) => {
                TT.boundingBoxPosition = oT
              }
            },
            metadata: kT
          }, CT, jT), (0, iT.h)(null, null, hT, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: TT => "_files" in TT,
              get: TT => TT._files,
              set: (TT, oT) => {
                TT._files = oT
              }
            },
            metadata: kT
          }, JT, UT), (0, iT.h)(null, null, wT, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: TT => "_forcedExtension" in TT,
              get: TT => TT._forcedExtension,
              set: (TT, oT) => {
                TT._forcedExtension = oT
              }
            },
            metadata: kT
          }, aT, YT), (0, iT.h)(null, null, mT, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: TT => "_extensions" in TT,
              get: TT => TT._extensions,
              set: (TT, oT) => {
                TT._extensions = oT
              }
            },
            metadata: kT
          }, QT, OT), (0, iT.h)(null, null, eT, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: TT => "_textureMatrix" in TT,
              get: TT => TT._textureMatrix,
              set: (TT, oT) => {
                TT._textureMatrix = oT
              }
            },
            metadata: kT
          }, HT, nT), (0, iT.h)(null, null, RT, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: TT => "_textureMatrixRefraction" in TT,
              get: TT => TT._textureMatrixRefraction,
              set: (TT, oT) => {
                TT._textureMatrixRefraction = oT
              }
            },
            metadata: kT
          }, qT, ZT), kT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: kT
          })
        })(), TT
      })(),
      hT = !1;

    function wT(TT, oT, IT) {
      let iT = "";
      for (const zT of TT) iT += zT;
      return new gT(iT, oT, null, IT, TT)
    }

    function mT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        iT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const zT = oT.useDelayedTextureLoading;
      oT.useDelayedTextureLoading = !1;
      const kT = new gT(TT, oT, null, !1, null, null, null, void 0, !0, IT, iT);
      return oT.useDelayedTextureLoading = zT, kT
    }

    function eT(TT, oT, IT) {
      const iT = DT.c.Parse((() => {
        let iT = !1;
        return TT.prefiltered && (iT = TT.prefiltered), new gT(IT + (TT.url ?? TT.name), oT, TT.extensions, !1, TT.files || null, null, null, void 0, iT, TT.forcedExtension)
      }), TT, oT);
      if (TT.boundingBoxPosition && (iT.boundingBoxPosition = WT.m.FromArray(TT.boundingBoxPosition)), TT.boundingBoxSize && (iT.boundingBoxSize = WT.m.FromArray(TT.boundingBoxSize)), TT.animations)
        for (let zT = 0; zT < TT.animations.length; zT++) {
          const oT = TT.animations[zT],
            IT = (0, FT.d)("BABYLON.Animation");
          IT && iT.animations.push(IT.Parse(oT))
        }
      return iT
    }
    hT || (hT = !0, gT.CreateFromImages = wT, gT.CreateFromPrefilteredData = mT, gT.Parse = eT, BT.g._CubeTextureParser = eT, (0, FT.h)("BABYLON.CubeTexture", gT))
  },
  40086: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => FT
    });
    var iT = IT(37660),
      zT = IT(39270),
      kT = IT(38698),
      WT = IT(38607),
      XT = IT(38594);
    let BT = !1;
    class FT extends zT.g {
      constructor(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          FT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          ST = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          DT = arguments.length > 6 ? arguments[6] : void 0;
        const LT = !IT || IT._isScene;
        super(null, LT ? IT : IT?.NK, LT ? !iT : IT, DT, FT, void 0, void 0, void 0, void 0, ST), BT || (BT = !0, WT.ThinEngine.prototype.createDynamicTexture = function(TT, oT, IT, iT) {
          const zT = new XT.e(this, 4);
          return zT.baseWidth = TT, zT.baseHeight = oT, IT && (TT = this.needPOTTextures ? (0, kT.e)(TT, this._caps.maxTextureSize) : TT, oT = this.needPOTTextures ? (0, kT.e)(oT, this._caps.maxTextureSize) : oT), zT.width = TT, zT.height = oT, zT.isReady = !1, zT.generateMipMaps = IT, zT.samplingMode = iT, this.updateTextureSamplingMode(iT, zT), this._internalTexturesCache.push(zT), zT
        }, WT.ThinEngine.prototype.updateDynamicTexture = function(TT, oT, IT) {
          let iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            zT = arguments.length > 4 ? arguments[4] : void 0,
            kT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!TT) return;
          const WT = this._gl,
            XT = WT.TEXTURE_2D,
            BT = this._bindTextureDirectly(XT, TT, !0, kT);
          this._unpackFlipY(void 0 === IT ? TT.invertY : IT), iT && WT.pixelStorei(WT.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const FT = this._getWebGLTextureType(TT.type),
            ST = this._getInternalFormat(zT || TT.format),
            DT = this._getRGBABufferInternalSizedFormat(TT.type, ST);
          WT.texImage2D(XT, 0, DT, ST, FT, oT), TT.generateMipMaps && WT.generateMipmap(XT), BT || this._bindTextureDirectly(XT, null), iT && WT.pixelStorei(WT.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), zT && (TT.format = zT), TT._dynamicTextureSource = oT, TT._premulAlpha = iT, TT.invertY = IT || !1, TT.isReady = !0
        }), this.name = TT, this.wrapU = zT.g.CLAMP_ADDRESSMODE, this.wrapV = zT.g.CLAMP_ADDRESSMODE, this._generateMipMaps = iT;
        const xT = this._getEngine();
        if (!xT) return;
        if (oT.getContext) this._canvas = oT, this._ownCanvas = !1, this._texture = xT.createDynamicTexture(this._canvas.width, this._canvas.height, iT, FT);
        else {
          this._canvas = xT.createCanvas(1, 1), this._ownCanvas = !0;
          const TT = oT;
          TT.width || 0 === TT.width ? this._texture = xT.createDynamicTexture(TT.width, TT.height, iT, FT) : this._texture = xT.createDynamicTexture(oT, oT, iT, FT)
        }
        const cT = this.getSize();
        this._canvas.width !== cT.width && (this._canvas.width = cT.width), this._canvas.height !== cT.height && (this._canvas.height = cT.height), this._context = this._canvas.getContext("2d")
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
        const oT = this.getSize();
        oT.width *= TT, oT.height *= TT, this._recreate(oT)
      }
      scaleTo(TT, oT) {
        const IT = this.getSize();
        IT.width = TT, IT.height = oT, this._recreate(IT)
      }
      getContext() {
        return this._context
      }
      clear(TT) {
        const oT = this.getSize();
        TT && (this._context.fillStyle = TT), this._context.clearRect(0, 0, oT.width, oT.height)
      }
      update(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === TT || TT, oT, this._format || void 0, void 0, IT)
      }
      drawText(TT, oT, IT, iT, zT, kT, WT) {
        let XT = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const BT = this.getSize();
        if (kT && (this._context.fillStyle = kT, this._context.fillRect(0, 0, BT.width, BT.height)), this._context.font = iT, null === oT || void 0 === oT) {
          const IT = this._context.measureText(TT);
          oT = (BT.width - IT.width) / 2
        }
        if (null === IT || void 0 === IT) {
          const TT = parseInt(iT.replace(/\D/g, ""));
          IT = BT.height / 2 + TT / 3.65
        }
        this._context.fillStyle = zT || "", this._context.fillText(TT, oT, IT), XT && this.update(WT)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const TT = this.pC();
        if (!TT) return this;
        const oT = this.getSize(),
          IT = new FT(this.name, oT, TT, this._generateMipMaps);
        return IT.hasAlpha = this.hasAlpha, IT.level = this.level, IT.wrapU = this.wrapU, IT.wrapV = this.wrapV, IT
      }
      serialize() {
        const TT = this.pC();
        TT && !TT.isReady() && iT.d.Warn("The scene must be ready before serializing the dynamic texture");
        const oT = super.serialize();
        return FT._IsCanvasElement(this._canvas) && (oT.base64String = this._canvas.toDataURL()), oT.invertY = this._invertY, oT.samplingMode = this.samplingMode, oT
      }
      static _IsCanvasElement(TT) {
        return void 0 !== TT.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  40064: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT
    });
    var iT = IT(39270);
    class zT extends iT.g {
      get depth() {
        return this._depth
      }
      constructor(TT, oT, IT, zT, kT, WT) {
        let XT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          BT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          FT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : iT.g.TRILINEAR_SAMPLINGMODE,
          ST = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          DT = arguments.length > 10 ? arguments[10] : void 0,
          LT = arguments.length > 11 ? arguments[11] : void 0;
        super(null, WT, !XT, BT), this.format = kT, this._texture = WT.Zc().createRawTexture2DArray(TT, oT, IT, zT, kT, XT, BT, FT, null, ST, DT ?? 0, LT), this._depth = zT, this.is2DArray = !0
      }
      update(TT) {
        this.updateMipLevel(TT, 0)
      }
      updateMipLevel(TT, oT) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, TT, this._texture.format, this._texture.invertY, null, this._texture.type, oT)
      }
      static CreateRGBATexture(TT, oT, IT, iT, kT) {
        return new zT(TT, oT, IT, iT, 5, kT, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  40059: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT.b
    });
    var iT = IT(39149);
    (0, iT.e)()
  },
  38874: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT.d
    });
    var iT = IT(38882);
    (0, iT.b)()
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);