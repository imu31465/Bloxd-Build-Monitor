export const id = 249;
export const ids = [249];
export const modules = {
  39676: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ,
      e: () => kQ
    });
    var LQ = wQ(38203),
      qQ = wQ(39426),
      oQ = wQ(39642),
      DQ = {};
    class kQ {
      constructor(QQ) {
        this.attachedToElement = !1, this.attached = {}, this.camera = QQ, this.checkInputs = () => {}
      }
      add(QQ) {
        const FQ = QQ.getSimpleName();
        this.attached[FQ] ? LQ.c.Warn("camera input of type " + FQ + " already exists on camera") : (this.attached[FQ] = QQ, QQ.camera = this.camera, QQ.checkInputs && (this.checkInputs = this._addCheckInputs(QQ.checkInputs.bind(QQ))), this.attachedToElement && QQ.attachControl(this.noPreventDefault))
      }
      remove(QQ) {
        for (const FQ in this.attached) {
          const wQ = this.attached[FQ];
          if (wQ === QQ) return wQ.detachControl(), wQ.camera = null, delete this.attached[FQ], void this.rebuildInputCheck()
        }
      }
      removeByType(QQ) {
        for (const FQ in this.attached) {
          const wQ = this.attached[FQ];
          wQ.getClassName() === QQ && (wQ.detachControl(), wQ.camera = null, delete this.attached[FQ], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(QQ) {
        const FQ = this.checkInputs;
        return () => {
          FQ(), QQ()
        }
      }
      attachInput(QQ) {
        this.attachedToElement && QQ.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          QQ = !oQ.e.ForceAttachControlToAlwaysPreventDefault && QQ, this.attachedToElement = !0, this.noPreventDefault = QQ;
          for (const FQ in this.attached) this.attached[FQ].attachControl(QQ)
        }
      }
      detachElement() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const FQ in this.attached) this.attached[FQ].detachControl(), QQ && (this.attached[FQ].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const QQ in this.attached) {
          const FQ = this.attached[QQ];
          FQ.checkInputs && (this.checkInputs = this._addCheckInputs(FQ.checkInputs.bind(FQ)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(QQ) {
        const FQ = {};
        for (const wQ in this.attached) {
          const QQ = this.attached[wQ],
            LQ = qQ.c.Serialize(QQ);
          FQ[QQ.getClassName()] = LQ
        }
        QQ.inputsmgr = FQ
      }
      parse(QQ) {
        const FQ = QQ.inputsmgr;
        if (FQ) {
          this.clear();
          for (const QQ in FQ) {
            const wQ = DQ[QQ];
            if (wQ) {
              const LQ = FQ[QQ],
                oQ = qQ.c.Parse((() => new wQ), LQ, null);
              this.add(oQ)
            }
          }
        } else
          for (const wQ in this.attached) {
            const FQ = DQ[this.attached[wQ].getClassName()];
            if (FQ) {
              const LQ = qQ.c.Parse((() => new FQ), QQ, null);
              this.remove(this.attached[wQ]), this.add(LQ)
            }
          }
      }
    }
  },
  40537: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => GQ
    });
    var LQ = wQ(39402),
      qQ = wQ(39409),
      oQ = wQ(39289),
      DQ = wQ(36696),
      kQ = wQ(39397),
      vQ = wQ(39897),
      mQ = wQ(36741),
      uQ = wQ(36722),
      HQ = wQ(39426),
      bQ = wQ(39226),
      YQ = wQ(38203),
      xQ = wQ(39448),
      AQ = wQ(37452),
      tQ = wQ(39486);
    var eQ = wQ(39295);
    let MQ = !1;
    let GQ = (() => {
        var QQ;
        let FQ, wQ, mQ, GQ, pQ, cQ, CQ, SQ, iQ, WQ = kQ.b,
          RQ = [],
          OQ = [],
          sQ = [],
          rQ = [],
          IQ = [],
          UQ = [],
          NQ = [],
          TQ = [],
          KQ = [],
          zQ = [],
          lQ = [],
          jQ = [],
          aQ = [],
          XQ = [],
          fQ = [];
        return QQ = class extends WQ {
          set boundingBoxSize(QQ) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(QQ)) return;
            this._boundingBoxSize = QQ;
            const FQ = this.iN();
            FQ && FQ.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(QQ) {
            this._rotationY = QQ, this.setReflectionTextureMatrix(DQ.c.RotationY(this._rotationY))
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
          constructor(QQ, FQ) {
            let wQ, qQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              oQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              kQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              mQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              HQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              GQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              pQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              cQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              CQ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              SQ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              iQ = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              WQ = arguments.length > 13 ? arguments[13] : void 0,
              VQ = arguments.length > 14 ? arguments[14] : void 0;
            super(FQ), this._delayedOnLoad = (0, LQ.l)(this, RQ), this.onLoadObservable = new uQ.e, this.url = (0, LQ.l)(this, OQ, void 0), this.boundingBoxPosition = ((0, LQ.l)(this, sQ), (0, LQ.l)(this, rQ, DQ.p.Zero())), this._boundingBoxSize = (0, LQ.l)(this, IQ), this._rotationY = 0, this._files = (0, LQ.l)(this, UQ, null), this._forcedExtension = ((0, LQ.l)(this, NQ), (0, LQ.l)(this, TQ, null)), this._extensions = ((0, LQ.l)(this, KQ), (0, LQ.l)(this, zQ, null)), this._textureMatrix = ((0, LQ.l)(this, lQ), (0, LQ.l)(this, jQ, void 0)), this._textureMatrixRefraction = ((0, LQ.l)(this, aQ), (0, LQ.l)(this, XQ, new DQ.c)), this._format = (0, LQ.l)(this, fQ), this._buffer = null, MQ || (MQ = !0, eQ.e.prototype._partialLoadFile = function(QQ, FQ, wQ, LQ) {
              let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(QQ, (QQ => {
                wQ[FQ] = QQ, wQ._internalCount++, 6 === wQ._internalCount && LQ(wQ)
              }), void 0, void 0, !0, ((QQ, FQ) => {
                qQ && QQ && qQ(QQ.status + " " + QQ.statusText, FQ)
              }))
            }, eQ.e.prototype._cascadeLoadFiles = function(QQ, FQ, wQ) {
              let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const qQ = [];
              qQ._internalCount = 0;
              for (let oQ = 0; oQ < 6; oQ++) this._partialLoadFile(wQ[oQ], oQ, qQ, FQ, LQ)
            }, eQ.e.prototype._cascadeLoadImgs = function(QQ, FQ, wQ, LQ) {
              let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                oQ = arguments.length > 5 ? arguments[5] : void 0;
              const DQ = [];
              DQ._internalCount = 0;
              for (let kQ = 0; kQ < 6; kQ++) this._partialLoadImg(LQ[kQ], kQ, DQ, QQ, FQ, wQ, qQ, oQ)
            }, eQ.e.prototype._partialLoadImg = function(QQ, FQ, wQ, LQ, qQ, oQ) {
              let DQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                kQ = arguments.length > 7 ? arguments[7] : void 0;
              const vQ = (0, AQ.d)();
              (0, xQ.p)(QQ, (QQ => {
                wQ[FQ] = QQ, wQ._internalCount++, LQ && LQ.removePendingData(vQ), 6 === wQ._internalCount && oQ && oQ(qQ, wQ)
              }), ((QQ, FQ) => {
                LQ && LQ.removePendingData(vQ), DQ && DQ(QQ, FQ)
              }), LQ ? LQ.offlineProvider : null, kQ), LQ && LQ.addPendingData(vQ)
            }, eQ.e.prototype.createCubeTextureBase = function(QQ, FQ, wQ, LQ) {
              let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                DQ = arguments.length > 6 ? arguments[6] : void 0,
                kQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                vQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                mQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                uQ = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                HQ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                xQ = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                AQ = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                eQ = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                MQ = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const GQ = HQ || new bQ.d(this, 7);
              GQ.isCube = !0, GQ.url = QQ, GQ.generateMipMaps = !LQ, GQ._lodGenerationScale = mQ, GQ._lodGenerationOffset = uQ, GQ._useSRGBBuffer = !!eQ && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!LQ), GQ !== HQ && (GQ.label = QQ.substring(0, 60)), this._doNotHandleContextLost || (GQ._extension = kQ, GQ._files = wQ, GQ._buffer = MQ);
              const pQ = QQ;
              this._transformTextureUrl && !HQ && (QQ = this._transformTextureUrl(QQ));
              const cQ = kQ ?? function(QQ) {
                  const FQ = QQ.split("?")[0],
                    wQ = FQ.lastIndexOf(".");
                  return wQ > -1 ? FQ.substring(wQ).toLowerCase() : ""
                }(QQ),
                CQ = (0, tQ.b)(cQ),
                SQ = (QQ, FQ) => {
                  GQ.dispose(), oQ ? oQ(QQ, FQ) : QQ && YQ.c.Warn(QQ)
                },
                iQ = (oQ, HQ) => {
                  QQ === pQ ? oQ && SQ(oQ.status + " " + oQ.statusText, HQ) : (YQ.c.Warn(`Failed to load ${QQ}, falling back to the ${pQ}`), this.createCubeTextureBase(pQ, FQ, wQ, !!LQ, qQ, SQ, DQ, kQ, vQ, mQ, uQ, GQ, xQ, AQ, eQ, MQ))
                };
              if (CQ) CQ.then((LQ => {
                const oQ = QQ => {
                  xQ && xQ(GQ, QQ), LQ.loadCubeData(QQ, GQ, vQ, qQ, ((QQ, FQ) => {
                    SQ(QQ, FQ)
                  }))
                };
                MQ ? oQ(MQ) : wQ && 6 === wQ.length ? LQ.supportCascades ? this._cascadeLoadFiles(FQ, (QQ => oQ(QQ.map((QQ => new Uint8Array(QQ))))), wQ, SQ) : SQ("Textures type does not support cascades.") : this._loadFile(QQ, (QQ => oQ(new Uint8Array(QQ))), void 0, FQ ? FQ.offlineProvider || null : void 0, !0, iQ)
              }));
              else {
                if (!wQ || 0 === wQ.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(FQ, GQ, ((QQ, FQ) => {
                  AQ && AQ(QQ, FQ)
                }), wQ, SQ)
              }
              return this._internalTexturesCache.push(GQ), GQ
            }), this.name = QQ, this.url = QQ, this._noMipmap = oQ, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = DQ.c.Identity(), this.coordinatesMode = vQ.e.CUBIC_MODE;
            let hQ = null;
            null === qQ || Array.isArray(qQ) ? (this._noMipmap = oQ, this._format = GQ, this._createPolynomials = CQ, wQ = qQ, this._loaderOptions = WQ, this._useSRGBBuffer = VQ, this._lodScale = SQ, this._lodOffset = iQ) : (wQ = qQ.extensions ?? null, this._noMipmap = qQ.noMipmap ?? !1, kQ = qQ.files ?? null, hQ = qQ.buffer ?? null, this._format = qQ.format ?? 5, pQ = qQ.prefiltered ?? !1, cQ = qQ.forcedExtension ?? null, this._createPolynomials = qQ.createPolynomials ?? !1, this._lodScale = qQ.lodScale ?? .8, this._lodOffset = qQ.lodOffset ?? 0, this._loaderOptions = qQ.loaderOptions, this._useSRGBBuffer = qQ.useSRGBBuffer, this._sphericalPolynomialTargetSize = qQ.sphericalPolynomialTargetSize ?? 0, mQ = qQ.onLoad ?? null, HQ = qQ.onError ?? null), (QQ || kQ) && this.updateURL(QQ, cQ, mQ, pQ, HQ, wQ, this.iN()?.useDelayedTextureLoading, kQ, hQ)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(QQ) {
            let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              DQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              kQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              vQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = QQ), this.url = QQ, FQ && (this._forcedExtension = FQ);
            const mQ = QQ.lastIndexOf("."),
              uQ = FQ || (mQ > -1 ? QQ.substring(mQ).toLowerCase() : ""),
              HQ = 0 === uQ.indexOf(".dds"),
              bQ = 0 === uQ.indexOf(".env"),
              YQ = 0 === uQ.indexOf(".basis");
            if (bQ ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = LQ, LQ && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), kQ) this._files = kQ;
            else if (YQ || bQ || HQ || oQ || (oQ = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, oQ) {
              for (let FQ = 0; FQ < oQ.length; FQ++) this._files.push(QQ + oQ[FQ]);
              this._extensions = oQ
            }
            this._buffer = vQ, DQ ? (this.delayLoadState = 4, this._delayedOnLoad = wQ, this._delayedOnError = qQ) : this._loadTexture(wQ, qQ)
          }
          delayLoad(QQ) {
            4 === this.delayLoadState && (QQ && (this._forcedExtension = QQ), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(QQ) {
            if (QQ.updateFlag === this._textureMatrix.updateFlag) return;
            if (QQ.isIdentity() !== this._textureMatrix.isIdentity() && this.iN()?.markAllMaterialsAsDirty(1, (QQ => -1 !== QQ.getActiveTextures().indexOf(this))), this._textureMatrix = QQ, !this.iN()?.useRightHandedSystem) return;
            const FQ = DQ.k.Ox[0],
              wQ = DQ.k.Quaternion[0],
              LQ = DQ.k.Ox[1];
            this._textureMatrix.decompose(FQ, wQ, LQ), wQ.z *= -1, wQ.w *= -1, DQ.c.ComposeToRef(FQ, wQ, LQ, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.iN()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const wQ = this.iN(),
              LQ = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const qQ = () => {
                this.onLoadObservable.notifyObservers(this), LQ && (LQ.dispose(), this.iN()?.markAllMaterialsAsDirty(1)), QQ && QQ()
              },
              DQ = (QQ, wQ) => {
                this._loadingError = !0, this._errorObject = {
                  message: QQ,
                  exception: wQ
                }, FQ && FQ(QQ, wQ), vQ.e.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? oQ.d.SetImmediate((() => qQ())) : this._texture.onLoadedObservable.add((() => qQ())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, wQ, this._lodScale, this._lodOffset, QQ, DQ, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, wQ, this._files, this._noMipmap, QQ, DQ, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let FQ = 0;
            const wQ = this.irradianceTexture,
              LQ = HQ.c.Clone((() => {
                const wQ = new QQ(this.url, this.iN() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return FQ = wQ.uniqueId, wQ
              }), this);
            return LQ.uniqueId = FQ, wQ && !this.irradianceTexture && (this.irradianceTexture = wQ), LQ
          }
        }, (() => {
          const oQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(WQ[Symbol.metadata] ?? null) : void 0;
          FQ = [(0, qQ.I)()], wQ = [(0, qQ.F)()], mQ = [(0, qQ.F)()], GQ = [(0, qQ.I)("rotationY")], pQ = [(0, qQ.I)("files")], cQ = [(0, qQ.I)("forcedExtension")], CQ = [(0, qQ.I)("extensions")], SQ = [(0, qQ.s)("textureMatrix")], iQ = [(0, qQ.s)("textureMatrixRefraction")], (0, LQ.i)(QQ, null, mQ, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: QQ => "boundingBoxSize" in QQ,
              get: QQ => QQ.boundingBoxSize
            },
            metadata: oQ
          }, null, RQ), (0, LQ.i)(QQ, null, GQ, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: QQ => "rotationY" in QQ,
              set: (QQ, FQ) => {
                QQ.rotationY = FQ
              }
            },
            metadata: oQ
          }, null, RQ), (0, LQ.i)(null, null, FQ, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: QQ => "url" in QQ,
              get: QQ => QQ.url,
              set: (QQ, FQ) => {
                QQ.url = FQ
              }
            },
            metadata: oQ
          }, OQ, sQ), (0, LQ.i)(null, null, wQ, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: QQ => "boundingBoxPosition" in QQ,
              get: QQ => QQ.boundingBoxPosition,
              set: (QQ, FQ) => {
                QQ.boundingBoxPosition = FQ
              }
            },
            metadata: oQ
          }, rQ, IQ), (0, LQ.i)(null, null, pQ, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_files" in QQ,
              get: QQ => QQ._files,
              set: (QQ, FQ) => {
                QQ._files = FQ
              }
            },
            metadata: oQ
          }, UQ, NQ), (0, LQ.i)(null, null, cQ, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_forcedExtension" in QQ,
              get: QQ => QQ._forcedExtension,
              set: (QQ, FQ) => {
                QQ._forcedExtension = FQ
              }
            },
            metadata: oQ
          }, TQ, KQ), (0, LQ.i)(null, null, CQ, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_extensions" in QQ,
              get: QQ => QQ._extensions,
              set: (QQ, FQ) => {
                QQ._extensions = FQ
              }
            },
            metadata: oQ
          }, zQ, lQ), (0, LQ.i)(null, null, SQ, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_textureMatrix" in QQ,
              get: QQ => QQ._textureMatrix,
              set: (QQ, FQ) => {
                QQ._textureMatrix = FQ
              }
            },
            metadata: oQ
          }, jQ, aQ), (0, LQ.i)(null, null, iQ, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_textureMatrixRefraction" in QQ,
              get: QQ => QQ._textureMatrixRefraction,
              set: (QQ, FQ) => {
                QQ._textureMatrixRefraction = FQ
              }
            },
            metadata: oQ
          }, XQ, fQ), oQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oQ
          })
        })(), QQ
      })(),
      pQ = !1;

    function cQ(QQ, FQ, wQ) {
      let LQ = "";
      for (const qQ of QQ) LQ += qQ;
      return new GQ(LQ, FQ, null, wQ, QQ)
    }

    function CQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        LQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const qQ = FQ.useDelayedTextureLoading;
      FQ.useDelayedTextureLoading = !1;
      const oQ = new GQ(QQ, FQ, null, !1, null, null, null, void 0, !0, wQ, LQ);
      return FQ.useDelayedTextureLoading = qQ, oQ
    }

    function SQ(QQ, FQ, wQ) {
      const LQ = HQ.c.Parse((() => {
        let LQ = !1;
        return QQ.prefiltered && (LQ = QQ.prefiltered), new GQ(wQ + (QQ.url ?? QQ.name), FQ, QQ.extensions, !1, QQ.files || null, null, null, void 0, LQ, QQ.forcedExtension)
      }), QQ, FQ);
      if (QQ.boundingBoxPosition && (LQ.boundingBoxPosition = DQ.p.FromArray(QQ.boundingBoxPosition)), QQ.boundingBoxSize && (LQ.boundingBoxSize = DQ.p.FromArray(QQ.boundingBoxSize)), QQ.animations)
        for (let qQ = 0; qQ < QQ.animations.length; qQ++) {
          const FQ = QQ.animations[qQ],
            wQ = (0, mQ.b)("BABYLON.Animation");
          wQ && LQ.animations.push(wQ.Parse(FQ))
        }
      return LQ
    }
    pQ || (pQ = !0, GQ.CreateFromImages = cQ, GQ.CreateFromPrefilteredData = CQ, GQ.Parse = SQ, vQ.e._CubeTextureParser = SQ, (0, mQ.e)("BABYLON.CubeTexture", GQ))
  },
  40575: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => mQ
    });
    var LQ = wQ(38203),
      qQ = wQ(39897),
      oQ = wQ(39333),
      DQ = wQ(39240),
      kQ = wQ(39226);
    let vQ = !1;
    class mQ extends qQ.e {
      constructor(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          mQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          uQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          HQ = arguments.length > 6 ? arguments[6] : void 0;
        const bQ = !wQ || wQ._isScene;
        super(null, bQ ? wQ : wQ?.lA, bQ ? !LQ : wQ, HQ, mQ, void 0, void 0, void 0, void 0, uQ), vQ || (vQ = !0, DQ.ThinEngine.prototype.createDynamicTexture = function(QQ, FQ, wQ, LQ) {
          const qQ = new kQ.d(this, 4);
          return qQ.baseWidth = QQ, qQ.baseHeight = FQ, wQ && (QQ = this.needPOTTextures ? (0, oQ.e)(QQ, this._caps.maxTextureSize) : QQ, FQ = this.needPOTTextures ? (0, oQ.e)(FQ, this._caps.maxTextureSize) : FQ), qQ.width = QQ, qQ.height = FQ, qQ.isReady = !1, qQ.generateMipMaps = wQ, qQ.samplingMode = LQ, this.updateTextureSamplingMode(LQ, qQ), this._internalTexturesCache.push(qQ), qQ
        }, DQ.ThinEngine.prototype.updateDynamicTexture = function(QQ, FQ, wQ) {
          let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            qQ = arguments.length > 4 ? arguments[4] : void 0,
            oQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!QQ) return;
          const DQ = this._gl,
            kQ = DQ.TEXTURE_2D,
            vQ = this._bindTextureDirectly(kQ, QQ, !0, oQ);
          this._unpackFlipY(void 0 === wQ ? QQ.invertY : wQ), LQ && DQ.pixelStorei(DQ.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const mQ = this._getWebGLTextureType(QQ.type),
            uQ = this._getInternalFormat(qQ || QQ.format),
            HQ = this._getRGBABufferInternalSizedFormat(QQ.type, uQ);
          DQ.texImage2D(kQ, 0, HQ, uQ, mQ, FQ), QQ.generateMipMaps && DQ.generateMipmap(kQ), vQ || this._bindTextureDirectly(kQ, null), LQ && DQ.pixelStorei(DQ.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), qQ && (QQ.format = qQ), QQ._dynamicTextureSource = FQ, QQ._premulAlpha = LQ, QQ.invertY = wQ || !1, QQ.isReady = !0
        }), this.name = QQ, this.wrapU = qQ.e.CLAMP_ADDRESSMODE, this.wrapV = qQ.e.CLAMP_ADDRESSMODE, this._generateMipMaps = LQ;
        const YQ = this._getEngine();
        if (!YQ) return;
        if (FQ.getContext) this._canvas = FQ, this._ownCanvas = !1, this._texture = YQ.createDynamicTexture(this._canvas.width, this._canvas.height, LQ, mQ);
        else {
          this._canvas = YQ.createCanvas(1, 1), this._ownCanvas = !0;
          const QQ = FQ;
          QQ.width || 0 === QQ.width ? this._texture = YQ.createDynamicTexture(QQ.width, QQ.height, LQ, mQ) : this._texture = YQ.createDynamicTexture(FQ, FQ, LQ, mQ)
        }
        const xQ = this.getSize();
        this._canvas.width !== xQ.width && (this._canvas.width = xQ.width), this._canvas.height !== xQ.height && (this._canvas.height = xQ.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(QQ) {
        this._canvas.width = QQ.width, this._canvas.height = QQ.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(QQ.width, QQ.height, this._generateMipMaps, this.samplingMode)
      }
      scale(QQ) {
        const FQ = this.getSize();
        FQ.width *= QQ, FQ.height *= QQ, this._recreate(FQ)
      }
      scaleTo(QQ, FQ) {
        const wQ = this.getSize();
        wQ.width = QQ, wQ.height = FQ, this._recreate(wQ)
      }
      getContext() {
        return this._context
      }
      clear(QQ) {
        const FQ = this.getSize();
        QQ && (this._context.fillStyle = QQ), this._context.clearRect(0, 0, FQ.width, FQ.height)
      }
      update(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === QQ || QQ, FQ, this._format || void 0, void 0, wQ)
      }
      drawText(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        let kQ = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const vQ = this.getSize();
        if (oQ && (this._context.fillStyle = oQ, this._context.fillRect(0, 0, vQ.width, vQ.height)), this._context.font = LQ, null === FQ || void 0 === FQ) {
          const wQ = this._context.measureText(QQ);
          FQ = (vQ.width - wQ.width) / 2
        }
        if (null === wQ || void 0 === wQ) {
          const QQ = parseInt(LQ.replace(/\D/g, ""));
          wQ = vQ.height / 2 + QQ / 3.65
        }
        this._context.fillStyle = qQ || "", this._context.fillText(QQ, FQ, wQ), kQ && this.update(DQ)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const QQ = this.iN();
        if (!QQ) return this;
        const FQ = this.getSize(),
          wQ = new mQ(this.name, FQ, QQ, this._generateMipMaps);
        return wQ.hasAlpha = this.hasAlpha, wQ.level = this.level, wQ.wrapU = this.wrapU, wQ.wrapV = this.wrapV, wQ
      }
      serialize() {
        const QQ = this.iN();
        QQ && !QQ.isReady() && LQ.c.Warn("The scene must be ready before serializing the dynamic texture");
        const FQ = super.serialize();
        return mQ._IsCanvasElement(this._canvas) && (FQ.base64String = this._canvas.toDataURL()), FQ.invertY = this._invertY, FQ.samplingMode = this.samplingMode, FQ
      }
      static _IsCanvasElement(QQ) {
        return void 0 !== QQ.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  40551: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => qQ
    });
    var LQ = wQ(39897);
    class qQ extends LQ.e {
      get depth() {
        return this._depth
      }
      constructor(QQ, FQ, wQ, qQ, oQ, DQ) {
        let kQ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          vQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          mQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : LQ.e.TRILINEAR_SAMPLINGMODE,
          uQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          HQ = arguments.length > 10 ? arguments[10] : void 0,
          bQ = arguments.length > 11 ? arguments[11] : void 0;
        super(null, DQ, !kQ, vQ), this.format = oQ, this._texture = DQ.Wx().createRawTexture2DArray(QQ, FQ, wQ, qQ, oQ, kQ, vQ, mQ, null, uQ, HQ ?? 0, bQ), this._depth = qQ, this.is2DArray = !0
      }
      update(QQ) {
        this.updateMipLevel(QQ, 0)
      }
      updateMipLevel(QQ, FQ) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, QQ, this._texture.format, this._texture.invertY, null, this._texture.type, FQ)
      }
      static CreateRGBATexture(QQ, FQ, wQ, LQ, oQ) {
        return new qQ(QQ, FQ, wQ, LQ, 5, oQ, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  40544: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ.d
    });
    var LQ = wQ(39781);
    (0, LQ.g)()
  },
  39491: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ.e
    });
    var LQ = wQ(39496);
    (0, LQ.c)()
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);