export const id = 261;
export const ids = [261];
export const modules = {
  40354: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT,
      g: () => nT
    });
    var WT = mT(38800),
      zT = mT(40122),
      MT = mT(40330),
      gT = {};
    class nT {
      constructor(TT) {
        this.attachedToElement = !1, this.attached = {}, this.camera = TT, this.checkInputs = () => {}
      }
      add(TT) {
        const UT = TT.getSimpleName();
        this.attached[UT] ? WT.b.Warn("camera input of type " + UT + " already exists on camera") : (this.attached[UT] = TT, TT.camera = this.camera, TT.checkInputs && (this.checkInputs = this._addCheckInputs(TT.checkInputs.bind(TT))), this.attachedToElement && TT.attachControl(this.noPreventDefault))
      }
      remove(TT) {
        for (const UT in this.attached) {
          const mT = this.attached[UT];
          if (mT === TT) return mT.detachControl(), mT.camera = null, delete this.attached[UT], void this.rebuildInputCheck()
        }
      }
      removeByType(TT) {
        for (const UT in this.attached) {
          const mT = this.attached[UT];
          mT.getClassName() === TT && (mT.detachControl(), mT.camera = null, delete this.attached[UT], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(TT) {
        const UT = this.checkInputs;
        return () => {
          UT(), TT()
        }
      }
      attachInput(TT) {
        this.attachedToElement && TT.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          TT = !MT.b.ForceAttachControlToAlwaysPreventDefault && TT, this.attachedToElement = !0, this.noPreventDefault = TT;
          for (const UT in this.attached) this.attached[UT].attachControl(TT)
        }
      }
      detachElement() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const UT in this.attached) this.attached[UT].detachControl(), TT && (this.attached[UT].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const TT in this.attached) {
          const UT = this.attached[TT];
          UT.checkInputs && (this.checkInputs = this._addCheckInputs(UT.checkInputs.bind(UT)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(TT) {
        const UT = {};
        for (const mT in this.attached) {
          const TT = this.attached[mT],
            WT = zT.e.Serialize(TT);
          UT[TT.getClassName()] = WT
        }
        TT.inputsmgr = UT
      }
      parse(TT) {
        const UT = TT.inputsmgr;
        if (UT) {
          this.clear();
          for (const TT in UT) {
            const mT = gT[TT];
            if (mT) {
              const WT = UT[TT],
                MT = zT.e.Parse((() => new mT), WT, null);
              this.add(MT)
            }
          }
        } else
          for (const mT in this.attached) {
            const UT = gT[this.attached[mT].getClassName()];
            if (UT) {
              const WT = zT.e.Parse((() => new UT), TT, null);
              this.remove(this.attached[mT]), this.add(WT)
            }
          }
      }
    }
  },
  41277: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => qT
    });
    var WT = mT(40095),
      zT = mT(40102),
      MT = mT(39975),
      gT = mT(37188),
      nT = mT(40088),
      HT = mT(40602),
      kT = mT(37239),
      jT = mT(37219),
      lT = mT(40122),
      LT = mT(39913),
      pT = mT(38800),
      BT = mT(40151),
      ZT = mT(38045),
      cT = mT(40183);
    var vT = mT(39982);
    let fT = !1;
    let qT = (() => {
        var TT;
        let UT, mT, kT, qT, iT, bT, OT, eT, YT, JT = nT.c,
          xT = [],
          dT = [],
          wT = [],
          tT = [],
          aT = [],
          yT = [],
          XT = [],
          IT = [],
          QT = [],
          sT = [],
          FT = [],
          PT = [],
          VT = [],
          uT = [],
          CT = [];
        return TT = class extends JT {
          set boundingBoxSize(TT) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(TT)) return;
            this._boundingBoxSize = TT;
            const UT = this.KF();
            UT && UT.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(TT) {
            this._rotationY = TT, this.setReflectionTextureMatrix(gT.e.RotationY(this._rotationY))
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
          constructor(TT, UT) {
            let mT, zT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              MT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              nT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              lT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              qT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              iT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              bT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              OT = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              eT = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              YT = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              JT = arguments.length > 13 ? arguments[13] : void 0,
              rT = arguments.length > 14 ? arguments[14] : void 0;
            super(UT), this._delayedOnLoad = (0, WT.k)(this, xT), this.onLoadObservable = new jT.d, this.url = (0, WT.k)(this, dT, void 0), this.boundingBoxPosition = ((0, WT.k)(this, wT), (0, WT.k)(this, tT, gT.p.Zero())), this._boundingBoxSize = (0, WT.k)(this, aT), this._rotationY = 0, this._files = (0, WT.k)(this, yT, null), this._forcedExtension = ((0, WT.k)(this, XT), (0, WT.k)(this, IT, null)), this._extensions = ((0, WT.k)(this, QT), (0, WT.k)(this, sT, null)), this._textureMatrix = ((0, WT.k)(this, FT), (0, WT.k)(this, PT, void 0)), this._textureMatrixRefraction = ((0, WT.k)(this, VT), (0, WT.k)(this, uT, new gT.e)), this._format = (0, WT.k)(this, CT), this._buffer = null, fT || (fT = !0, vT.c.prototype._partialLoadFile = function(TT, UT, mT, WT) {
              let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(TT, (TT => {
                mT[UT] = TT, mT._internalCount++, 6 === mT._internalCount && WT(mT)
              }), void 0, void 0, !0, ((TT, UT) => {
                zT && TT && zT(TT.status + " " + TT.statusText, UT)
              }))
            }, vT.c.prototype._cascadeLoadFiles = function(TT, UT, mT) {
              let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const zT = [];
              zT._internalCount = 0;
              for (let MT = 0; MT < 6; MT++) this._partialLoadFile(mT[MT], MT, zT, UT, WT)
            }, vT.c.prototype._cascadeLoadImgs = function(TT, UT, mT, WT) {
              let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                MT = arguments.length > 5 ? arguments[5] : void 0;
              const gT = [];
              gT._internalCount = 0;
              for (let nT = 0; nT < 6; nT++) this._partialLoadImg(WT[nT], nT, gT, TT, UT, mT, zT, MT)
            }, vT.c.prototype._partialLoadImg = function(TT, UT, mT, WT, zT, MT) {
              let gT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                nT = arguments.length > 7 ? arguments[7] : void 0;
              const HT = (0, ZT.c)();
              (0, BT.q)(TT, (TT => {
                mT[UT] = TT, mT._internalCount++, WT && WT.removePendingData(HT), 6 === mT._internalCount && MT && MT(zT, mT)
              }), ((TT, UT) => {
                WT && WT.removePendingData(HT), gT && gT(TT, UT)
              }), WT ? WT.offlineProvider : null, nT), WT && WT.addPendingData(HT)
            }, vT.c.prototype.createCubeTextureBase = function(TT, UT, mT, WT) {
              let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                gT = arguments.length > 6 ? arguments[6] : void 0,
                nT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                HT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                kT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                jT = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                lT = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                BT = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                ZT = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                vT = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                fT = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const qT = lT || new LT.b(this, 7);
              qT.isCube = !0, qT.url = TT, qT.generateMipMaps = !WT, qT._lodGenerationScale = kT, qT._lodGenerationOffset = jT, qT._useSRGBBuffer = !!vT && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!WT), qT !== lT && (qT.label = TT.substring(0, 60)), this._doNotHandleContextLost || (qT._extension = nT, qT._files = mT, qT._buffer = fT);
              const iT = TT;
              this._transformTextureUrl && !lT && (TT = this._transformTextureUrl(TT));
              const bT = nT ?? function(TT) {
                  const UT = TT.split("?")[0],
                    mT = UT.lastIndexOf(".");
                  return mT > -1 ? UT.substring(mT).toLowerCase() : ""
                }(TT),
                OT = (0, cT.c)(bT),
                eT = (TT, UT) => {
                  qT.dispose(), MT ? MT(TT, UT) : TT && pT.b.Warn(TT)
                },
                YT = (MT, lT) => {
                  TT === iT ? MT && eT(MT.status + " " + MT.statusText, lT) : (pT.b.Warn(`Failed to load ${TT}, falling back to the ${iT}`), this.createCubeTextureBase(iT, UT, mT, !!WT, zT, eT, gT, nT, HT, kT, jT, qT, BT, ZT, vT, fT))
                };
              if (OT) OT.then((WT => {
                const MT = TT => {
                  BT && BT(qT, TT), WT.loadCubeData(TT, qT, HT, zT, ((TT, UT) => {
                    eT(TT, UT)
                  }))
                };
                fT ? MT(fT) : mT && 6 === mT.length ? WT.supportCascades ? this._cascadeLoadFiles(UT, (TT => MT(TT.map((TT => new Uint8Array(TT))))), mT, eT) : eT("Textures type does not support cascades.") : this._loadFile(TT, (TT => MT(new Uint8Array(TT))), void 0, UT ? UT.offlineProvider || null : void 0, !0, YT)
              }));
              else {
                if (!mT || 0 === mT.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(UT, qT, ((TT, UT) => {
                  ZT && ZT(TT, UT)
                }), mT, eT)
              }
              return this._internalTexturesCache.push(qT), qT
            }), this.name = TT, this.url = TT, this._noMipmap = MT, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = gT.e.Identity(), this.coordinatesMode = HT.g.CUBIC_MODE;
            let KT = null;
            null === zT || Array.isArray(zT) ? (this._noMipmap = MT, this._format = qT, this._createPolynomials = OT, mT = zT, this._loaderOptions = JT, this._useSRGBBuffer = rT, this._lodScale = eT, this._lodOffset = YT) : (mT = zT.extensions ?? null, this._noMipmap = zT.noMipmap ?? !1, nT = zT.files ?? null, KT = zT.buffer ?? null, this._format = zT.format ?? 5, iT = zT.prefiltered ?? !1, bT = zT.forcedExtension ?? null, this._createPolynomials = zT.createPolynomials ?? !1, this._lodScale = zT.lodScale ?? .8, this._lodOffset = zT.lodOffset ?? 0, this._loaderOptions = zT.loaderOptions, this._useSRGBBuffer = zT.useSRGBBuffer, this._sphericalPolynomialTargetSize = zT.sphericalPolynomialTargetSize ?? 0, kT = zT.onLoad ?? null, lT = zT.onError ?? null), (TT || nT) && this.updateURL(TT, bT, kT, iT, lT, mT, this.KF()?.useDelayedTextureLoading, nT, KT)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(TT) {
            let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              gT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              nT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              HT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = TT), this.url = TT, UT && (this._forcedExtension = UT);
            const kT = TT.lastIndexOf("."),
              jT = UT || (kT > -1 ? TT.substring(kT).toLowerCase() : ""),
              lT = 0 === jT.indexOf(".dds"),
              LT = 0 === jT.indexOf(".env"),
              pT = 0 === jT.indexOf(".basis");
            if (LT ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = WT, WT && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), nT) this._files = nT;
            else if (pT || LT || lT || MT || (MT = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, MT) {
              for (let UT = 0; UT < MT.length; UT++) this._files.push(TT + MT[UT]);
              this._extensions = MT
            }
            this._buffer = HT, gT ? (this.delayLoadState = 4, this._delayedOnLoad = mT, this._delayedOnError = zT) : this._loadTexture(mT, zT)
          }
          delayLoad(TT) {
            4 === this.delayLoadState && (TT && (this._forcedExtension = TT), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(TT) {
            if (TT.updateFlag === this._textureMatrix.updateFlag) return;
            if (TT.isIdentity() !== this._textureMatrix.isIdentity() && this.KF()?.markAllMaterialsAsDirty(1, (TT => -1 !== TT.getActiveTextures().indexOf(this))), this._textureMatrix = TT, !this.KF()?.useRightHandedSystem) return;
            const UT = gT.l.JB[0],
              mT = gT.l.Quaternion[0],
              WT = gT.l.JB[1];
            this._textureMatrix.decompose(UT, mT, WT), mT.z *= -1, mT.w *= -1, gT.e.ComposeToRef(UT, mT, WT, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.KF()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const mT = this.KF(),
              WT = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const zT = () => {
                this.onLoadObservable.notifyObservers(this), WT && (WT.dispose(), this.KF()?.markAllMaterialsAsDirty(1)), TT && TT()
              },
              gT = (TT, mT) => {
                this._loadingError = !0, this._errorObject = {
                  message: TT,
                  exception: mT
                }, UT && UT(TT, mT), HT.g.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? MT.e.SetImmediate((() => zT())) : this._texture.onLoadedObservable.add((() => zT())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, mT, this._lodScale, this._lodOffset, TT, gT, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, mT, this._files, this._noMipmap, TT, gT, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let UT = 0;
            const mT = this.irradianceTexture,
              WT = lT.e.Clone((() => {
                const mT = new TT(this.url, this.KF() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return UT = mT.uniqueId, mT
              }), this);
            return WT.uniqueId = UT, mT && !this.irradianceTexture && (this.irradianceTexture = mT), WT
          }
        }, (() => {
          const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(JT[Symbol.metadata] ?? null) : void 0;
          UT = [(0, zT.L)()], mT = [(0, zT.J)()], kT = [(0, zT.J)()], qT = [(0, zT.L)("rotationY")], iT = [(0, zT.L)("files")], bT = [(0, zT.L)("forcedExtension")], OT = [(0, zT.L)("extensions")], eT = [(0, zT.v)("textureMatrix")], YT = [(0, zT.v)("textureMatrixRefraction")], (0, WT.h)(TT, null, kT, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: TT => "boundingBoxSize" in TT,
              get: TT => TT.boundingBoxSize
            },
            metadata: MT
          }, null, xT), (0, WT.h)(TT, null, qT, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: TT => "rotationY" in TT,
              set: (TT, UT) => {
                TT.rotationY = UT
              }
            },
            metadata: MT
          }, null, xT), (0, WT.h)(null, null, UT, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: TT => "url" in TT,
              get: TT => TT.url,
              set: (TT, UT) => {
                TT.url = UT
              }
            },
            metadata: MT
          }, dT, wT), (0, WT.h)(null, null, mT, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: TT => "boundingBoxPosition" in TT,
              get: TT => TT.boundingBoxPosition,
              set: (TT, UT) => {
                TT.boundingBoxPosition = UT
              }
            },
            metadata: MT
          }, tT, aT), (0, WT.h)(null, null, iT, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: TT => "_files" in TT,
              get: TT => TT._files,
              set: (TT, UT) => {
                TT._files = UT
              }
            },
            metadata: MT
          }, yT, XT), (0, WT.h)(null, null, bT, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: TT => "_forcedExtension" in TT,
              get: TT => TT._forcedExtension,
              set: (TT, UT) => {
                TT._forcedExtension = UT
              }
            },
            metadata: MT
          }, IT, QT), (0, WT.h)(null, null, OT, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: TT => "_extensions" in TT,
              get: TT => TT._extensions,
              set: (TT, UT) => {
                TT._extensions = UT
              }
            },
            metadata: MT
          }, sT, FT), (0, WT.h)(null, null, eT, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: TT => "_textureMatrix" in TT,
              get: TT => TT._textureMatrix,
              set: (TT, UT) => {
                TT._textureMatrix = UT
              }
            },
            metadata: MT
          }, PT, VT), (0, WT.h)(null, null, YT, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: TT => "_textureMatrixRefraction" in TT,
              get: TT => TT._textureMatrixRefraction,
              set: (TT, UT) => {
                TT._textureMatrixRefraction = UT
              }
            },
            metadata: MT
          }, uT, CT), MT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MT
          })
        })(), TT
      })(),
      iT = !1;

    function bT(TT, UT, mT) {
      let WT = "";
      for (const zT of TT) WT += zT;
      return new qT(WT, UT, null, mT, TT)
    }

    function OT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        WT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const zT = UT.useDelayedTextureLoading;
      UT.useDelayedTextureLoading = !1;
      const MT = new qT(TT, UT, null, !1, null, null, null, void 0, !0, mT, WT);
      return UT.useDelayedTextureLoading = zT, MT
    }

    function eT(TT, UT, mT) {
      const WT = lT.e.Parse((() => {
        let WT = !1;
        return TT.prefiltered && (WT = TT.prefiltered), new qT(mT + (TT.url ?? TT.name), UT, TT.extensions, !1, TT.files || null, null, null, void 0, WT, TT.forcedExtension)
      }), TT, UT);
      if (TT.boundingBoxPosition && (WT.boundingBoxPosition = gT.p.FromArray(TT.boundingBoxPosition)), TT.boundingBoxSize && (WT.boundingBoxSize = gT.p.FromArray(TT.boundingBoxSize)), TT.animations)
        for (let zT = 0; zT < TT.animations.length; zT++) {
          const UT = TT.animations[zT],
            mT = (0, kT.d)("BABYLON.Animation");
          mT && WT.animations.push(mT.Parse(UT))
        }
      return WT
    }
    iT || (iT = !0, qT.CreateFromImages = bT, qT.CreateFromPrefilteredData = OT, qT.Parse = eT, HT.g._CubeTextureParser = eT, (0, kT.h)("BABYLON.CubeTexture", qT))
  },
  41334: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => kT
    });
    var WT = mT(38800),
      zT = mT(40602),
      MT = mT(40022),
      gT = mT(39922),
      nT = mT(39913);
    let HT = !1;
    class kT extends zT.g {
      constructor(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          kT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          jT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          lT = arguments.length > 6 ? arguments[6] : void 0;
        const LT = !mT || mT._isScene;
        super(null, LT ? mT : mT?.XZ, LT ? !WT : mT, lT, kT, void 0, void 0, void 0, void 0, jT), HT || (HT = !0, gT.ThinEngine.prototype.createDynamicTexture = function(TT, UT, mT, WT) {
          const zT = new nT.b(this, 4);
          return zT.baseWidth = TT, zT.baseHeight = UT, mT && (TT = this.needPOTTextures ? (0, MT.f)(TT, this._caps.maxTextureSize) : TT, UT = this.needPOTTextures ? (0, MT.f)(UT, this._caps.maxTextureSize) : UT), zT.width = TT, zT.height = UT, zT.isReady = !1, zT.generateMipMaps = mT, zT.samplingMode = WT, this.updateTextureSamplingMode(WT, zT), this._internalTexturesCache.push(zT), zT
        }, gT.ThinEngine.prototype.updateDynamicTexture = function(TT, UT, mT) {
          let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            zT = arguments.length > 4 ? arguments[4] : void 0,
            MT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!TT) return;
          const gT = this._gl,
            nT = gT.TEXTURE_2D,
            HT = this._bindTextureDirectly(nT, TT, !0, MT);
          this._unpackFlipY(void 0 === mT ? TT.invertY : mT), WT && gT.pixelStorei(gT.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const kT = this._getWebGLTextureType(TT.type),
            jT = this._getInternalFormat(zT || TT.format),
            lT = this._getRGBABufferInternalSizedFormat(TT.type, jT);
          gT.texImage2D(nT, 0, lT, jT, kT, UT), TT.generateMipMaps && gT.generateMipmap(nT), HT || this._bindTextureDirectly(nT, null), WT && gT.pixelStorei(gT.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), zT && (TT.format = zT), TT._dynamicTextureSource = UT, TT._premulAlpha = WT, TT.invertY = mT || !1, TT.isReady = !0
        }), this.name = TT, this.wrapU = zT.g.CLAMP_ADDRESSMODE, this.wrapV = zT.g.CLAMP_ADDRESSMODE, this._generateMipMaps = WT;
        const pT = this._getEngine();
        if (!pT) return;
        if (UT.getContext) this._canvas = UT, this._ownCanvas = !1, this._texture = pT.createDynamicTexture(this._canvas.width, this._canvas.height, WT, kT);
        else {
          this._canvas = pT.createCanvas(1, 1), this._ownCanvas = !0;
          const TT = UT;
          TT.width || 0 === TT.width ? this._texture = pT.createDynamicTexture(TT.width, TT.height, WT, kT) : this._texture = pT.createDynamicTexture(UT, UT, WT, kT)
        }
        const BT = this.getSize();
        this._canvas.width !== BT.width && (this._canvas.width = BT.width), this._canvas.height !== BT.height && (this._canvas.height = BT.height), this._context = this._canvas.getContext("2d")
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
        const UT = this.getSize();
        UT.width *= TT, UT.height *= TT, this._recreate(UT)
      }
      scaleTo(TT, UT) {
        const mT = this.getSize();
        mT.width = TT, mT.height = UT, this._recreate(mT)
      }
      getContext() {
        return this._context
      }
      clear(TT) {
        const UT = this.getSize();
        TT && (this._context.fillStyle = TT), this._context.clearRect(0, 0, UT.width, UT.height)
      }
      update(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === TT || TT, UT, this._format || void 0, void 0, mT)
      }
      drawText(TT, UT, mT, WT, zT, MT, gT) {
        let nT = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const HT = this.getSize();
        if (MT && (this._context.fillStyle = MT, this._context.fillRect(0, 0, HT.width, HT.height)), this._context.font = WT, null === UT || void 0 === UT) {
          const mT = this._context.measureText(TT);
          UT = (HT.width - mT.width) / 2
        }
        if (null === mT || void 0 === mT) {
          const TT = parseInt(WT.replace(/\D/g, ""));
          mT = HT.height / 2 + TT / 3.65
        }
        this._context.fillStyle = zT || "", this._context.fillText(TT, UT, mT), nT && this.update(gT)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const TT = this.KF();
        if (!TT) return this;
        const UT = this.getSize(),
          mT = new kT(this.name, UT, TT, this._generateMipMaps);
        return mT.hasAlpha = this.hasAlpha, mT.level = this.level, mT.wrapU = this.wrapU, mT.wrapV = this.wrapV, mT
      }
      serialize() {
        const TT = this.KF();
        TT && !TT.isReady() && WT.b.Warn("The scene must be ready before serializing the dynamic texture");
        const UT = super.serialize();
        return kT._IsCanvasElement(this._canvas) && (UT.base64String = this._canvas.toDataURL()), UT.invertY = this._invertY, UT.samplingMode = this.samplingMode, UT
      }
      static _IsCanvasElement(TT) {
        return void 0 !== TT.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  41291: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => zT
    });
    var WT = mT(40602);
    class zT extends WT.g {
      get depth() {
        return this._depth
      }
      constructor(TT, UT, mT, zT, MT, gT) {
        let nT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          HT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          kT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : WT.g.TRILINEAR_SAMPLINGMODE,
          jT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          lT = arguments.length > 10 ? arguments[10] : void 0,
          LT = arguments.length > 11 ? arguments[11] : void 0;
        super(null, gT, !nT, HT), this.format = MT, this._texture = gT.eB().createRawTexture2DArray(TT, UT, mT, zT, MT, nT, HT, kT, null, jT, lT ?? 0, LT), this._depth = zT, this.is2DArray = !0
      }
      update(TT) {
        this.updateMipLevel(TT, 0)
      }
      updateMipLevel(TT, UT) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, TT, this._texture.format, this._texture.invertY, null, this._texture.type, UT)
      }
      static CreateRGBATexture(TT, UT, mT, WT, MT) {
        return new zT(TT, UT, mT, WT, 5, MT, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  41286: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => WT.e
    });
    var WT = mT(40487);
    (0, WT.g)()
  },
  40192: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT.i
    });
    var WT = mT(40198);
    (0, WT.e)()
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);