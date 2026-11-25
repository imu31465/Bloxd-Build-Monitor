export const id = 265;
export const ids = [265];
export const modules = {
  40515: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => zQ,
      g: () => sQ
    });
    var wQ = XQ(38956),
      qQ = XQ(40286),
      TQ = XQ(40487),
      zQ = {};
    class sQ {
      constructor(QQ) {
        this.attachedToElement = !1, this.attached = {}, this.camera = QQ, this.checkInputs = () => {}
      }
      add(QQ) {
        const WQ = QQ.getSimpleName();
        this.attached[WQ] ? wQ.b.Warn("camera input of type " + WQ + " already exists on camera") : (this.attached[WQ] = QQ, QQ.camera = this.camera, QQ.checkInputs && (this.checkInputs = this._addCheckInputs(QQ.checkInputs.bind(QQ))), this.attachedToElement && QQ.attachControl(this.noPreventDefault))
      }
      remove(QQ) {
        for (const WQ in this.attached) {
          const XQ = this.attached[WQ];
          if (XQ === QQ) return XQ.detachControl(), XQ.camera = null, delete this.attached[WQ], void this.rebuildInputCheck()
        }
      }
      removeByType(QQ) {
        for (const WQ in this.attached) {
          const XQ = this.attached[WQ];
          XQ.getClassName() === QQ && (XQ.detachControl(), XQ.camera = null, delete this.attached[WQ], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(QQ) {
        const WQ = this.checkInputs;
        return () => {
          WQ(), QQ()
        }
      }
      attachInput(QQ) {
        this.attachedToElement && QQ.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          QQ = !TQ.d.ForceAttachControlToAlwaysPreventDefault && QQ, this.attachedToElement = !0, this.noPreventDefault = QQ;
          for (const WQ in this.attached) this.attached[WQ].attachControl(QQ)
        }
      }
      detachElement() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const WQ in this.attached) this.attached[WQ].detachControl(), QQ && (this.attached[WQ].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const QQ in this.attached) {
          const WQ = this.attached[QQ];
          WQ.checkInputs && (this.checkInputs = this._addCheckInputs(WQ.checkInputs.bind(WQ)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(QQ) {
        const WQ = {};
        for (const XQ in this.attached) {
          const QQ = this.attached[XQ],
            wQ = qQ.b.Serialize(QQ);
          WQ[QQ.getClassName()] = wQ
        }
        QQ.inputsmgr = WQ
      }
      parse(QQ) {
        const WQ = QQ.inputsmgr;
        if (WQ) {
          this.clear();
          for (const QQ in WQ) {
            const XQ = zQ[QQ];
            if (XQ) {
              const wQ = WQ[QQ],
                TQ = qQ.b.Parse((() => new XQ), wQ, null);
              this.add(TQ)
            }
          }
        } else
          for (const XQ in this.attached) {
            const WQ = zQ[this.attached[XQ].getClassName()];
            if (WQ) {
              const wQ = qQ.b.Parse((() => new WQ), QQ, null);
              this.remove(this.attached[XQ]), this.add(wQ)
            }
          }
      }
    }
  },
  41348: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => pQ
    });
    var wQ = XQ(40260),
      qQ = XQ(40268),
      TQ = XQ(40164),
      zQ = XQ(37370),
      sQ = XQ(40253),
      FQ = XQ(40724),
      PQ = XQ(37418),
      gQ = XQ(37399),
      JQ = XQ(40286),
      rQ = XQ(40103),
      IQ = XQ(38956),
      jQ = XQ(40307),
      BQ = XQ(38191),
      yQ = XQ(40344);
    var VQ = XQ(40170);
    let DQ = !1;
    let pQ = (() => {
        var QQ;
        let WQ, XQ, PQ, pQ, GQ, UQ, bQ, vQ, dQ, HQ = sQ.c,
          aQ = [],
          lQ = [],
          hQ = [],
          iQ = [],
          cQ = [],
          AQ = [],
          RQ = [],
          EQ = [],
          CQ = [],
          uQ = [],
          LQ = [],
          kQ = [],
          fQ = [],
          SQ = [],
          tQ = [];
        return QQ = class extends HQ {
          set boundingBoxSize(QQ) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(QQ)) return;
            this._boundingBoxSize = QQ;
            const WQ = this.sE();
            WQ && WQ.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(QQ) {
            this._rotationY = QQ, this.setReflectionTextureMatrix(zQ.e.RotationY(this._rotationY))
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
          constructor(QQ, WQ) {
            let XQ, qQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              TQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              sQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              PQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              JQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              pQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              GQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              UQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              bQ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              vQ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              dQ = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              HQ = arguments.length > 13 ? arguments[13] : void 0,
              oQ = arguments.length > 14 ? arguments[14] : void 0;
            super(WQ), this._delayedOnLoad = (0, wQ.n)(this, aQ), this.onLoadObservable = new gQ.b, this.url = (0, wQ.n)(this, lQ, void 0), this.boundingBoxPosition = ((0, wQ.n)(this, hQ), (0, wQ.n)(this, iQ, zQ.s.Zero())), this._boundingBoxSize = (0, wQ.n)(this, cQ), this._rotationY = 0, this._files = (0, wQ.n)(this, AQ, null), this._forcedExtension = ((0, wQ.n)(this, RQ), (0, wQ.n)(this, EQ, null)), this._extensions = ((0, wQ.n)(this, CQ), (0, wQ.n)(this, uQ, null)), this._textureMatrix = ((0, wQ.n)(this, LQ), (0, wQ.n)(this, kQ, void 0)), this._textureMatrixRefraction = ((0, wQ.n)(this, fQ), (0, wQ.n)(this, SQ, new zQ.e)), this._format = (0, wQ.n)(this, tQ), this._buffer = null, DQ || (DQ = !0, VQ.d.prototype._partialLoadFile = function(QQ, WQ, XQ, wQ) {
              let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(QQ, (QQ => {
                XQ[WQ] = QQ, XQ._internalCount++, 6 === XQ._internalCount && wQ(XQ)
              }), void 0, void 0, !0, ((QQ, WQ) => {
                qQ && QQ && qQ(QQ.status + " " + QQ.statusText, WQ)
              }))
            }, VQ.d.prototype._cascadeLoadFiles = function(QQ, WQ, XQ) {
              let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const qQ = [];
              qQ._internalCount = 0;
              for (let TQ = 0; TQ < 6; TQ++) this._partialLoadFile(XQ[TQ], TQ, qQ, WQ, wQ)
            }, VQ.d.prototype._cascadeLoadImgs = function(QQ, WQ, XQ, wQ) {
              let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                TQ = arguments.length > 5 ? arguments[5] : void 0;
              const zQ = [];
              zQ._internalCount = 0;
              for (let sQ = 0; sQ < 6; sQ++) this._partialLoadImg(wQ[sQ], sQ, zQ, QQ, WQ, XQ, qQ, TQ)
            }, VQ.d.prototype._partialLoadImg = function(QQ, WQ, XQ, wQ, qQ, TQ) {
              let zQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                sQ = arguments.length > 7 ? arguments[7] : void 0;
              const FQ = (0, BQ.d)();
              (0, jQ.r)(QQ, (QQ => {
                XQ[WQ] = QQ, XQ._internalCount++, wQ && wQ.removePendingData(FQ), 6 === XQ._internalCount && TQ && TQ(qQ, XQ)
              }), ((QQ, WQ) => {
                wQ && wQ.removePendingData(FQ), zQ && zQ(QQ, WQ)
              }), wQ ? wQ.offlineProvider : null, sQ), wQ && wQ.addPendingData(FQ)
            }, VQ.d.prototype.createCubeTextureBase = function(QQ, WQ, XQ, wQ) {
              let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                zQ = arguments.length > 6 ? arguments[6] : void 0,
                sQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                FQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                PQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                gQ = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                JQ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                jQ = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                BQ = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                VQ = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                DQ = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const pQ = JQ || new rQ.e(this, 7);
              pQ.isCube = !0, pQ.url = QQ, pQ.generateMipMaps = !wQ, pQ._lodGenerationScale = PQ, pQ._lodGenerationOffset = gQ, pQ._useSRGBBuffer = !!VQ && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!wQ), pQ !== JQ && (pQ.label = QQ.substring(0, 60)), this._doNotHandleContextLost || (pQ._extension = sQ, pQ._files = XQ, pQ._buffer = DQ);
              const GQ = QQ;
              this._transformTextureUrl && !JQ && (QQ = this._transformTextureUrl(QQ));
              const UQ = sQ ?? function(QQ) {
                  const WQ = QQ.split("?")[0],
                    XQ = WQ.lastIndexOf(".");
                  return XQ > -1 ? WQ.substring(XQ).toLowerCase() : ""
                }(QQ),
                bQ = (0, yQ.b)(UQ),
                vQ = (QQ, WQ) => {
                  pQ.dispose(), TQ ? TQ(QQ, WQ) : QQ && IQ.b.Warn(QQ)
                },
                dQ = (TQ, JQ) => {
                  QQ === GQ ? TQ && vQ(TQ.status + " " + TQ.statusText, JQ) : (IQ.b.Warn(`Failed to load ${QQ}, falling back to the ${GQ}`), this.createCubeTextureBase(GQ, WQ, XQ, !!wQ, qQ, vQ, zQ, sQ, FQ, PQ, gQ, pQ, jQ, BQ, VQ, DQ))
                };
              if (bQ) bQ.then((wQ => {
                const TQ = QQ => {
                  jQ && jQ(pQ, QQ), wQ.loadCubeData(QQ, pQ, FQ, qQ, ((QQ, WQ) => {
                    vQ(QQ, WQ)
                  }))
                };
                DQ ? TQ(DQ) : XQ && 6 === XQ.length ? wQ.supportCascades ? this._cascadeLoadFiles(WQ, (QQ => TQ(QQ.map((QQ => new Uint8Array(QQ))))), XQ, vQ) : vQ("Textures type does not support cascades.") : this._loadFile(QQ, (QQ => TQ(new Uint8Array(QQ))), void 0, WQ ? WQ.offlineProvider || null : void 0, !0, dQ)
              }));
              else {
                if (!XQ || 0 === XQ.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(WQ, pQ, ((QQ, WQ) => {
                  BQ && BQ(QQ, WQ)
                }), XQ, vQ)
              }
              return this._internalTexturesCache.push(pQ), pQ
            }), this.name = QQ, this.url = QQ, this._noMipmap = TQ, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = zQ.e.Identity(), this.coordinatesMode = FQ.g.CUBIC_MODE;
            let eQ = null;
            null === qQ || Array.isArray(qQ) ? (this._noMipmap = TQ, this._format = pQ, this._createPolynomials = bQ, XQ = qQ, this._loaderOptions = HQ, this._useSRGBBuffer = oQ, this._lodScale = vQ, this._lodOffset = dQ) : (XQ = qQ.extensions ?? null, this._noMipmap = qQ.noMipmap ?? !1, sQ = qQ.files ?? null, eQ = qQ.buffer ?? null, this._format = qQ.format ?? 5, GQ = qQ.prefiltered ?? !1, UQ = qQ.forcedExtension ?? null, this._createPolynomials = qQ.createPolynomials ?? !1, this._lodScale = qQ.lodScale ?? .8, this._lodOffset = qQ.lodOffset ?? 0, this._loaderOptions = qQ.loaderOptions, this._useSRGBBuffer = qQ.useSRGBBuffer, this._sphericalPolynomialTargetSize = qQ.sphericalPolynomialTargetSize ?? 0, PQ = qQ.onLoad ?? null, JQ = qQ.onError ?? null), (QQ || sQ) && this.updateURL(QQ, UQ, PQ, GQ, JQ, XQ, this.sE()?.useDelayedTextureLoading, sQ, eQ)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(QQ) {
            let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              zQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              sQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              FQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = QQ), this.url = QQ, WQ && (this._forcedExtension = WQ);
            const PQ = QQ.lastIndexOf("."),
              gQ = WQ || (PQ > -1 ? QQ.substring(PQ).toLowerCase() : ""),
              JQ = 0 === gQ.indexOf(".dds"),
              rQ = 0 === gQ.indexOf(".env"),
              IQ = 0 === gQ.indexOf(".basis");
            if (rQ ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = wQ, wQ && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), sQ) this._files = sQ;
            else if (IQ || rQ || JQ || TQ || (TQ = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, TQ) {
              for (let WQ = 0; WQ < TQ.length; WQ++) this._files.push(QQ + TQ[WQ]);
              this._extensions = TQ
            }
            this._buffer = FQ, zQ ? (this.delayLoadState = 4, this._delayedOnLoad = XQ, this._delayedOnError = qQ) : this._loadTexture(XQ, qQ)
          }
          delayLoad(QQ) {
            4 === this.delayLoadState && (QQ && (this._forcedExtension = QQ), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(QQ) {
            if (QQ.updateFlag === this._textureMatrix.updateFlag) return;
            if (QQ.isIdentity() !== this._textureMatrix.isIdentity() && this.sE()?.markAllMaterialsAsDirty(1, (QQ => -1 !== QQ.getActiveTextures().indexOf(this))), this._textureMatrix = QQ, !this.sE()?.useRightHandedSystem) return;
            const WQ = zQ.m.vj[0],
              XQ = zQ.m.Quaternion[0],
              wQ = zQ.m.vj[1];
            this._textureMatrix.decompose(WQ, XQ, wQ), XQ.z *= -1, XQ.w *= -1, zQ.e.ComposeToRef(WQ, XQ, wQ, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.sE()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const XQ = this.sE(),
              wQ = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const qQ = () => {
                this.onLoadObservable.notifyObservers(this), wQ && (wQ.dispose(), this.sE()?.markAllMaterialsAsDirty(1)), QQ && QQ()
              },
              zQ = (QQ, XQ) => {
                this._loadingError = !0, this._errorObject = {
                  message: QQ,
                  exception: XQ
                }, WQ && WQ(QQ, XQ), FQ.g.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? TQ.b.SetImmediate((() => qQ())) : this._texture.onLoadedObservable.add((() => qQ())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, XQ, this._lodScale, this._lodOffset, QQ, zQ, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, XQ, this._files, this._noMipmap, QQ, zQ, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let WQ = 0;
            const XQ = this.irradianceTexture,
              wQ = JQ.b.Clone((() => {
                const XQ = new QQ(this.url, this.sE() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return WQ = XQ.uniqueId, XQ
              }), this);
            return wQ.uniqueId = WQ, XQ && !this.irradianceTexture && (this.irradianceTexture = XQ), wQ
          }
        }, (() => {
          const TQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(HQ[Symbol.metadata] ?? null) : void 0;
          WQ = [(0, qQ.I)()], XQ = [(0, qQ.F)()], PQ = [(0, qQ.F)()], pQ = [(0, qQ.I)("rotationY")], GQ = [(0, qQ.I)("files")], UQ = [(0, qQ.I)("forcedExtension")], bQ = [(0, qQ.I)("extensions")], vQ = [(0, qQ.t)("textureMatrix")], dQ = [(0, qQ.t)("textureMatrixRefraction")], (0, wQ.k)(QQ, null, PQ, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: QQ => "boundingBoxSize" in QQ,
              get: QQ => QQ.boundingBoxSize
            },
            metadata: TQ
          }, null, aQ), (0, wQ.k)(QQ, null, pQ, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: QQ => "rotationY" in QQ,
              set: (QQ, WQ) => {
                QQ.rotationY = WQ
              }
            },
            metadata: TQ
          }, null, aQ), (0, wQ.k)(null, null, WQ, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: QQ => "url" in QQ,
              get: QQ => QQ.url,
              set: (QQ, WQ) => {
                QQ.url = WQ
              }
            },
            metadata: TQ
          }, lQ, hQ), (0, wQ.k)(null, null, XQ, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: QQ => "boundingBoxPosition" in QQ,
              get: QQ => QQ.boundingBoxPosition,
              set: (QQ, WQ) => {
                QQ.boundingBoxPosition = WQ
              }
            },
            metadata: TQ
          }, iQ, cQ), (0, wQ.k)(null, null, GQ, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_files" in QQ,
              get: QQ => QQ._files,
              set: (QQ, WQ) => {
                QQ._files = WQ
              }
            },
            metadata: TQ
          }, AQ, RQ), (0, wQ.k)(null, null, UQ, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_forcedExtension" in QQ,
              get: QQ => QQ._forcedExtension,
              set: (QQ, WQ) => {
                QQ._forcedExtension = WQ
              }
            },
            metadata: TQ
          }, EQ, CQ), (0, wQ.k)(null, null, bQ, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_extensions" in QQ,
              get: QQ => QQ._extensions,
              set: (QQ, WQ) => {
                QQ._extensions = WQ
              }
            },
            metadata: TQ
          }, uQ, LQ), (0, wQ.k)(null, null, vQ, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_textureMatrix" in QQ,
              get: QQ => QQ._textureMatrix,
              set: (QQ, WQ) => {
                QQ._textureMatrix = WQ
              }
            },
            metadata: TQ
          }, kQ, fQ), (0, wQ.k)(null, null, dQ, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_textureMatrixRefraction" in QQ,
              get: QQ => QQ._textureMatrixRefraction,
              set: (QQ, WQ) => {
                QQ._textureMatrixRefraction = WQ
              }
            },
            metadata: TQ
          }, SQ, tQ), TQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: TQ
          })
        })(), QQ
      })(),
      GQ = !1;

    function UQ(QQ, WQ, XQ) {
      let wQ = "";
      for (const qQ of QQ) wQ += qQ;
      return new pQ(wQ, WQ, null, XQ, QQ)
    }

    function bQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        wQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const qQ = WQ.useDelayedTextureLoading;
      WQ.useDelayedTextureLoading = !1;
      const TQ = new pQ(QQ, WQ, null, !1, null, null, null, void 0, !0, XQ, wQ);
      return WQ.useDelayedTextureLoading = qQ, TQ
    }

    function vQ(QQ, WQ, XQ) {
      const wQ = JQ.b.Parse((() => {
        let wQ = !1;
        return QQ.prefiltered && (wQ = QQ.prefiltered), new pQ(XQ + (QQ.url ?? QQ.name), WQ, QQ.extensions, !1, QQ.files || null, null, null, void 0, wQ, QQ.forcedExtension)
      }), QQ, WQ);
      if (QQ.boundingBoxPosition && (wQ.boundingBoxPosition = zQ.s.FromArray(QQ.boundingBoxPosition)), QQ.boundingBoxSize && (wQ.boundingBoxSize = zQ.s.FromArray(QQ.boundingBoxSize)), QQ.animations)
        for (let qQ = 0; qQ < QQ.animations.length; qQ++) {
          const WQ = QQ.animations[qQ],
            XQ = (0, PQ.b)("BABYLON.Animation");
          XQ && wQ.animations.push(XQ.Parse(WQ))
        }
      return wQ
    }
    GQ || (GQ = !0, pQ.CreateFromImages = UQ, pQ.CreateFromPrefilteredData = bQ, pQ.Parse = vQ, FQ.g._CubeTextureParser = vQ, (0, PQ.d)("BABYLON.CubeTexture", pQ))
  },
  41394: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => PQ
    });
    var wQ = XQ(38956),
      qQ = XQ(40724),
      TQ = XQ(40206),
      zQ = XQ(40117),
      sQ = XQ(40103);
    let FQ = !1;
    class PQ extends qQ.g {
      constructor(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          PQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          gQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          JQ = arguments.length > 6 ? arguments[6] : void 0;
        const rQ = !XQ || XQ._isScene;
        super(null, rQ ? XQ : XQ?.cB, rQ ? !wQ : XQ, JQ, PQ, void 0, void 0, void 0, void 0, gQ), FQ || (FQ = !0, zQ.ThinEngine.prototype.createDynamicTexture = function(QQ, WQ, XQ, wQ) {
          const qQ = new sQ.e(this, 4);
          return qQ.baseWidth = QQ, qQ.baseHeight = WQ, XQ && (QQ = this.needPOTTextures ? (0, TQ.h)(QQ, this._caps.maxTextureSize) : QQ, WQ = this.needPOTTextures ? (0, TQ.h)(WQ, this._caps.maxTextureSize) : WQ), qQ.width = QQ, qQ.height = WQ, qQ.isReady = !1, qQ.generateMipMaps = XQ, qQ.samplingMode = wQ, this.updateTextureSamplingMode(wQ, qQ), this._internalTexturesCache.push(qQ), qQ
        }, zQ.ThinEngine.prototype.updateDynamicTexture = function(QQ, WQ, XQ) {
          let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            qQ = arguments.length > 4 ? arguments[4] : void 0,
            TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!QQ) return;
          const zQ = this._gl,
            sQ = zQ.TEXTURE_2D,
            FQ = this._bindTextureDirectly(sQ, QQ, !0, TQ);
          this._unpackFlipY(void 0 === XQ ? QQ.invertY : XQ), wQ && zQ.pixelStorei(zQ.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const PQ = this._getWebGLTextureType(QQ.type),
            gQ = this._getInternalFormat(qQ || QQ.format),
            JQ = this._getRGBABufferInternalSizedFormat(QQ.type, gQ);
          zQ.texImage2D(sQ, 0, JQ, gQ, PQ, WQ), QQ.generateMipMaps && zQ.generateMipmap(sQ), FQ || this._bindTextureDirectly(sQ, null), wQ && zQ.pixelStorei(zQ.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), qQ && (QQ.format = qQ), QQ._dynamicTextureSource = WQ, QQ._premulAlpha = wQ, QQ.invertY = XQ || !1, QQ.isReady = !0
        }), this.name = QQ, this.wrapU = qQ.g.CLAMP_ADDRESSMODE, this.wrapV = qQ.g.CLAMP_ADDRESSMODE, this._generateMipMaps = wQ;
        const IQ = this._getEngine();
        if (!IQ) return;
        if (WQ.getContext) this._canvas = WQ, this._ownCanvas = !1, this._texture = IQ.createDynamicTexture(this._canvas.width, this._canvas.height, wQ, PQ);
        else {
          this._canvas = IQ.createCanvas(1, 1), this._ownCanvas = !0;
          const QQ = WQ;
          QQ.width || 0 === QQ.width ? this._texture = IQ.createDynamicTexture(QQ.width, QQ.height, wQ, PQ) : this._texture = IQ.createDynamicTexture(WQ, WQ, wQ, PQ)
        }
        const jQ = this.getSize();
        this._canvas.width !== jQ.width && (this._canvas.width = jQ.width), this._canvas.height !== jQ.height && (this._canvas.height = jQ.height), this._context = this._canvas.getContext("2d")
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
        const WQ = this.getSize();
        WQ.width *= QQ, WQ.height *= QQ, this._recreate(WQ)
      }
      scaleTo(QQ, WQ) {
        const XQ = this.getSize();
        XQ.width = QQ, XQ.height = WQ, this._recreate(XQ)
      }
      getContext() {
        return this._context
      }
      clear(QQ) {
        const WQ = this.getSize();
        QQ && (this._context.fillStyle = QQ), this._context.clearRect(0, 0, WQ.width, WQ.height)
      }
      update(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === QQ || QQ, WQ, this._format || void 0, void 0, XQ)
      }
      drawText(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        let sQ = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const FQ = this.getSize();
        if (TQ && (this._context.fillStyle = TQ, this._context.fillRect(0, 0, FQ.width, FQ.height)), this._context.font = wQ, null === WQ || void 0 === WQ) {
          const XQ = this._context.measureText(QQ);
          WQ = (FQ.width - XQ.width) / 2
        }
        if (null === XQ || void 0 === XQ) {
          const QQ = parseInt(wQ.replace(/\D/g, ""));
          XQ = FQ.height / 2 + QQ / 3.65
        }
        this._context.fillStyle = qQ || "", this._context.fillText(QQ, WQ, XQ), sQ && this.update(zQ)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const QQ = this.sE();
        if (!QQ) return this;
        const WQ = this.getSize(),
          XQ = new PQ(this.name, WQ, QQ, this._generateMipMaps);
        return XQ.hasAlpha = this.hasAlpha, XQ.level = this.level, XQ.wrapU = this.wrapU, XQ.wrapV = this.wrapV, XQ
      }
      serialize() {
        const QQ = this.sE();
        QQ && !QQ.isReady() && wQ.b.Warn("The scene must be ready before serializing the dynamic texture");
        const WQ = super.serialize();
        return PQ._IsCanvasElement(this._canvas) && (WQ.base64String = this._canvas.toDataURL()), WQ.invertY = this._invertY, WQ.samplingMode = this.samplingMode, WQ
      }
      static _IsCanvasElement(QQ) {
        return void 0 !== QQ.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  41364: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ
    });
    var wQ = XQ(40724);
    class qQ extends wQ.g {
      get depth() {
        return this._depth
      }
      constructor(QQ, WQ, XQ, qQ, TQ, zQ) {
        let sQ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          FQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          PQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : wQ.g.TRILINEAR_SAMPLINGMODE,
          gQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          JQ = arguments.length > 10 ? arguments[10] : void 0,
          rQ = arguments.length > 11 ? arguments[11] : void 0;
        super(null, zQ, !sQ, FQ), this.format = TQ, this._texture = zQ.Uj().createRawTexture2DArray(QQ, WQ, XQ, qQ, TQ, sQ, FQ, PQ, null, gQ, JQ ?? 0, rQ), this._depth = qQ, this.is2DArray = !0
      }
      update(QQ) {
        this.updateMipLevel(QQ, 0)
      }
      updateMipLevel(QQ, WQ) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, QQ, this._texture.format, this._texture.invertY, null, this._texture.type, WQ)
      }
      static CreateRGBATexture(QQ, WQ, XQ, wQ, TQ) {
        return new qQ(QQ, WQ, XQ, wQ, 5, TQ, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  41357: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ.b
    });
    var wQ = XQ(40612);
    (0, wQ.d)()
  },
  40349: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => wQ.h
    });
    var wQ = XQ(40355);
    (0, wQ.e)()
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);