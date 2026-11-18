export const id = 237;
export const ids = [237];
export const modules = {
  39006: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ,
      e: () => AJ
    });
    var FJ = ZJ(37660),
      UJ = ZJ(38822),
      eJ = ZJ(38986),
      XJ = {};
    class AJ {
      constructor(JJ) {
        this.attachedToElement = !1, this.attached = {}, this.camera = JJ, this.checkInputs = () => {}
      }
      add(JJ) {
        const cJ = JJ.getSimpleName();
        this.attached[cJ] ? FJ.c.Warn("camera input of type " + cJ + " already exists on camera") : (this.attached[cJ] = JJ, JJ.camera = this.camera, JJ.checkInputs && (this.checkInputs = this._addCheckInputs(JJ.checkInputs.bind(JJ))), this.attachedToElement && JJ.attachControl(this.noPreventDefault))
      }
      remove(JJ) {
        for (const cJ in this.attached) {
          const ZJ = this.attached[cJ];
          if (ZJ === JJ) return ZJ.detachControl(), ZJ.camera = null, delete this.attached[cJ], void this.rebuildInputCheck()
        }
      }
      removeByType(JJ) {
        for (const cJ in this.attached) {
          const ZJ = this.attached[cJ];
          ZJ.getClassName() === JJ && (ZJ.detachControl(), ZJ.camera = null, delete this.attached[cJ], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(JJ) {
        const cJ = this.checkInputs;
        return () => {
          cJ(), JJ()
        }
      }
      attachInput(JJ) {
        this.attachedToElement && JJ.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          JJ = !eJ.e.ForceAttachControlToAlwaysPreventDefault && JJ, this.attachedToElement = !0, this.noPreventDefault = JJ;
          for (const cJ in this.attached) this.attached[cJ].attachControl(JJ)
        }
      }
      detachElement() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const cJ in this.attached) this.attached[cJ].detachControl(), JJ && (this.attached[cJ].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const JJ in this.attached) {
          const cJ = this.attached[JJ];
          cJ.checkInputs && (this.checkInputs = this._addCheckInputs(cJ.checkInputs.bind(cJ)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(JJ) {
        const cJ = {};
        for (const ZJ in this.attached) {
          const JJ = this.attached[ZJ],
            FJ = UJ.c.Serialize(JJ);
          cJ[JJ.getClassName()] = FJ
        }
        JJ.inputsmgr = cJ
      }
      parse(JJ) {
        const cJ = JJ.inputsmgr;
        if (cJ) {
          this.clear();
          for (const JJ in cJ) {
            const ZJ = XJ[JJ];
            if (ZJ) {
              const FJ = cJ[JJ],
                eJ = UJ.c.Parse((() => new ZJ), FJ, null);
              this.add(eJ)
            }
          }
        } else
          for (const ZJ in this.attached) {
            const cJ = XJ[this.attached[ZJ].getClassName()];
            if (cJ) {
              const FJ = UJ.c.Parse((() => new cJ), JJ, null);
              this.remove(this.attached[ZJ]), this.add(FJ)
            }
          }
      }
    }
  },
  40001: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => vJ
    });
    var FJ = ZJ(38800),
      UJ = ZJ(38806),
      eJ = ZJ(38689),
      XJ = ZJ(36174),
      AJ = ZJ(38797),
      qJ = ZJ(39243),
      jJ = ZJ(36216),
      YJ = ZJ(36200),
      hJ = ZJ(38822),
      DJ = ZJ(38635),
      sJ = ZJ(37660),
      nJ = ZJ(38844),
      GJ = ZJ(36865),
      fJ = ZJ(38867);
    var xJ = ZJ(38698);
    let rJ = !1;
    let vJ = (() => {
        var JJ;
        let cJ, ZJ, jJ, vJ, mJ, QJ, EJ, VJ, KJ, yJ = AJ.c,
          SJ = [],
          IJ = [],
          MJ = [],
          bJ = [],
          wJ = [],
          WJ = [],
          gJ = [],
          HJ = [],
          PJ = [],
          kJ = [],
          pJ = [],
          dJ = [],
          zJ = [],
          NJ = [],
          OJ = [];
        return JJ = class extends yJ {
          set boundingBoxSize(JJ) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(JJ)) return;
            this._boundingBoxSize = JJ;
            const cJ = this.Qy();
            cJ && cJ.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(JJ) {
            this._rotationY = JJ, this.setReflectionTextureMatrix(XJ.b.RotationY(this._rotationY))
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
          constructor(JJ, cJ) {
            let ZJ, UJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              eJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              AJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              jJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              hJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              vJ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              mJ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              QJ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              EJ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              VJ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              KJ = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              yJ = arguments.length > 13 ? arguments[13] : void 0,
              TJ = arguments.length > 14 ? arguments[14] : void 0;
            super(cJ), this._delayedOnLoad = (0, FJ.e)(this, SJ), this.onLoadObservable = new YJ.c, this.url = (0, FJ.e)(this, IJ, void 0), this.boundingBoxPosition = ((0, FJ.e)(this, MJ), (0, FJ.e)(this, bJ, XJ.j.Zero())), this._boundingBoxSize = (0, FJ.e)(this, wJ), this._rotationY = 0, this._files = (0, FJ.e)(this, WJ, null), this._forcedExtension = ((0, FJ.e)(this, gJ), (0, FJ.e)(this, HJ, null)), this._extensions = ((0, FJ.e)(this, PJ), (0, FJ.e)(this, kJ, null)), this._textureMatrix = ((0, FJ.e)(this, pJ), (0, FJ.e)(this, dJ, void 0)), this._textureMatrixRefraction = ((0, FJ.e)(this, zJ), (0, FJ.e)(this, NJ, new XJ.b)), this._format = (0, FJ.e)(this, OJ), this._buffer = null, rJ || (rJ = !0, xJ.e.prototype._partialLoadFile = function(JJ, cJ, ZJ, FJ) {
              let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(JJ, (JJ => {
                ZJ[cJ] = JJ, ZJ._internalCount++, 6 === ZJ._internalCount && FJ(ZJ)
              }), void 0, void 0, !0, ((JJ, cJ) => {
                UJ && JJ && UJ(JJ.status + " " + JJ.statusText, cJ)
              }))
            }, xJ.e.prototype._cascadeLoadFiles = function(JJ, cJ, ZJ) {
              let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const UJ = [];
              UJ._internalCount = 0;
              for (let eJ = 0; eJ < 6; eJ++) this._partialLoadFile(ZJ[eJ], eJ, UJ, cJ, FJ)
            }, xJ.e.prototype._cascadeLoadImgs = function(JJ, cJ, ZJ, FJ) {
              let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                eJ = arguments.length > 5 ? arguments[5] : void 0;
              const XJ = [];
              XJ._internalCount = 0;
              for (let AJ = 0; AJ < 6; AJ++) this._partialLoadImg(FJ[AJ], AJ, XJ, JJ, cJ, ZJ, UJ, eJ)
            }, xJ.e.prototype._partialLoadImg = function(JJ, cJ, ZJ, FJ, UJ, eJ) {
              let XJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                AJ = arguments.length > 7 ? arguments[7] : void 0;
              const qJ = (0, GJ.d)();
              (0, nJ.n)(JJ, (JJ => {
                ZJ[cJ] = JJ, ZJ._internalCount++, FJ && FJ.removePendingData(qJ), 6 === ZJ._internalCount && eJ && eJ(UJ, ZJ)
              }), ((JJ, cJ) => {
                FJ && FJ.removePendingData(qJ), XJ && XJ(JJ, cJ)
              }), FJ ? FJ.offlineProvider : null, AJ), FJ && FJ.addPendingData(qJ)
            }, xJ.e.prototype.createCubeTextureBase = function(JJ, cJ, ZJ, FJ) {
              let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                XJ = arguments.length > 6 ? arguments[6] : void 0,
                AJ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                qJ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                jJ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                YJ = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                hJ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                nJ = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                GJ = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                xJ = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                rJ = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const vJ = hJ || new DJ.e(this, 7);
              vJ.isCube = !0, vJ.url = JJ, vJ.generateMipMaps = !FJ, vJ._lodGenerationScale = jJ, vJ._lodGenerationOffset = YJ, vJ._useSRGBBuffer = !!xJ && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!FJ), vJ !== hJ && (vJ.label = JJ.substring(0, 60)), this._doNotHandleContextLost || (vJ._extension = AJ, vJ._files = ZJ, vJ._buffer = rJ);
              const mJ = JJ;
              this._transformTextureUrl && !hJ && (JJ = this._transformTextureUrl(JJ));
              const QJ = AJ ?? function(JJ) {
                  const cJ = JJ.split("?")[0],
                    ZJ = cJ.lastIndexOf(".");
                  return ZJ > -1 ? cJ.substring(ZJ).toLowerCase() : ""
                }(JJ),
                EJ = (0, fJ.b)(QJ),
                VJ = (JJ, cJ) => {
                  vJ.dispose(), eJ ? eJ(JJ, cJ) : JJ && sJ.c.Warn(JJ)
                },
                KJ = (eJ, hJ) => {
                  JJ === mJ ? eJ && VJ(eJ.status + " " + eJ.statusText, hJ) : (sJ.c.Warn(`Failed to load ${JJ}, falling back to the ${mJ}`), this.createCubeTextureBase(mJ, cJ, ZJ, !!FJ, UJ, VJ, XJ, AJ, qJ, jJ, YJ, vJ, nJ, GJ, xJ, rJ))
                };
              if (EJ) EJ.then((FJ => {
                const eJ = JJ => {
                  nJ && nJ(vJ, JJ), FJ.loadCubeData(JJ, vJ, qJ, UJ, ((JJ, cJ) => {
                    VJ(JJ, cJ)
                  }))
                };
                rJ ? eJ(rJ) : ZJ && 6 === ZJ.length ? FJ.supportCascades ? this._cascadeLoadFiles(cJ, (JJ => eJ(JJ.map((JJ => new Uint8Array(JJ))))), ZJ, VJ) : VJ("Textures type does not support cascades.") : this._loadFile(JJ, (JJ => eJ(new Uint8Array(JJ))), void 0, cJ ? cJ.offlineProvider || null : void 0, !0, KJ)
              }));
              else {
                if (!ZJ || 0 === ZJ.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(cJ, vJ, ((JJ, cJ) => {
                  GJ && GJ(JJ, cJ)
                }), ZJ, VJ)
              }
              return this._internalTexturesCache.push(vJ), vJ
            }), this.name = JJ, this.url = JJ, this._noMipmap = eJ, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = XJ.b.Identity(), this.coordinatesMode = qJ.i.CUBIC_MODE;
            let CJ = null;
            null === UJ || Array.isArray(UJ) ? (this._noMipmap = eJ, this._format = vJ, this._createPolynomials = EJ, ZJ = UJ, this._loaderOptions = yJ, this._useSRGBBuffer = TJ, this._lodScale = VJ, this._lodOffset = KJ) : (ZJ = UJ.extensions ?? null, this._noMipmap = UJ.noMipmap ?? !1, AJ = UJ.files ?? null, CJ = UJ.buffer ?? null, this._format = UJ.format ?? 5, mJ = UJ.prefiltered ?? !1, QJ = UJ.forcedExtension ?? null, this._createPolynomials = UJ.createPolynomials ?? !1, this._lodScale = UJ.lodScale ?? .8, this._lodOffset = UJ.lodOffset ?? 0, this._loaderOptions = UJ.loaderOptions, this._useSRGBBuffer = UJ.useSRGBBuffer, this._sphericalPolynomialTargetSize = UJ.sphericalPolynomialTargetSize ?? 0, jJ = UJ.onLoad ?? null, hJ = UJ.onError ?? null), (JJ || AJ) && this.updateURL(JJ, QJ, jJ, mJ, hJ, ZJ, this.Qy()?.useDelayedTextureLoading, AJ, CJ)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(JJ) {
            let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              XJ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              AJ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              qJ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = JJ), this.url = JJ, cJ && (this._forcedExtension = cJ);
            const jJ = JJ.lastIndexOf("."),
              YJ = cJ || (jJ > -1 ? JJ.substring(jJ).toLowerCase() : ""),
              hJ = 0 === YJ.indexOf(".dds"),
              DJ = 0 === YJ.indexOf(".env"),
              sJ = 0 === YJ.indexOf(".basis");
            if (DJ ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = FJ, FJ && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), AJ) this._files = AJ;
            else if (sJ || DJ || hJ || eJ || (eJ = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, eJ) {
              for (let cJ = 0; cJ < eJ.length; cJ++) this._files.push(JJ + eJ[cJ]);
              this._extensions = eJ
            }
            this._buffer = qJ, XJ ? (this.delayLoadState = 4, this._delayedOnLoad = ZJ, this._delayedOnError = UJ) : this._loadTexture(ZJ, UJ)
          }
          delayLoad(JJ) {
            4 === this.delayLoadState && (JJ && (this._forcedExtension = JJ), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(JJ) {
            if (JJ.updateFlag === this._textureMatrix.updateFlag) return;
            if (JJ.isIdentity() !== this._textureMatrix.isIdentity() && this.Qy()?.markAllMaterialsAsDirty(1, (JJ => -1 !== JJ.getActiveTextures().indexOf(this))), this._textureMatrix = JJ, !this.Qy()?.useRightHandedSystem) return;
            const cJ = XJ.h.Pn[0],
              ZJ = XJ.h.Quaternion[0],
              FJ = XJ.h.Pn[1];
            this._textureMatrix.decompose(cJ, ZJ, FJ), ZJ.z *= -1, ZJ.w *= -1, XJ.b.ComposeToRef(cJ, ZJ, FJ, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.Qy()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const ZJ = this.Qy(),
              FJ = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const UJ = () => {
                this.onLoadObservable.notifyObservers(this), FJ && (FJ.dispose(), this.Qy()?.markAllMaterialsAsDirty(1)), JJ && JJ()
              },
              XJ = (JJ, ZJ) => {
                this._loadingError = !0, this._errorObject = {
                  message: JJ,
                  exception: ZJ
                }, cJ && cJ(JJ, ZJ), qJ.i.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? eJ.d.SetImmediate((() => UJ())) : this._texture.onLoadedObservable.add((() => UJ())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, ZJ, this._lodScale, this._lodOffset, JJ, XJ, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, ZJ, this._files, this._noMipmap, JJ, XJ, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let cJ = 0;
            const ZJ = this.irradianceTexture,
              FJ = hJ.c.Clone((() => {
                const ZJ = new JJ(this.url, this.Qy() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return cJ = ZJ.uniqueId, ZJ
              }), this);
            return FJ.uniqueId = cJ, ZJ && !this.irradianceTexture && (this.irradianceTexture = ZJ), FJ
          }
        }, (() => {
          const eJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(yJ[Symbol.metadata] ?? null) : void 0;
          cJ = [(0, UJ.F)()], ZJ = [(0, UJ.E)()], jJ = [(0, UJ.E)()], vJ = [(0, UJ.F)("rotationY")], mJ = [(0, UJ.F)("files")], QJ = [(0, UJ.F)("forcedExtension")], EJ = [(0, UJ.F)("extensions")], VJ = [(0, UJ.t)("textureMatrix")], KJ = [(0, UJ.t)("textureMatrixRefraction")], (0, FJ.d)(JJ, null, jJ, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: JJ => "boundingBoxSize" in JJ,
              get: JJ => JJ.boundingBoxSize
            },
            metadata: eJ
          }, null, SJ), (0, FJ.d)(JJ, null, vJ, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: JJ => "rotationY" in JJ,
              set: (JJ, cJ) => {
                JJ.rotationY = cJ
              }
            },
            metadata: eJ
          }, null, SJ), (0, FJ.d)(null, null, cJ, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: JJ => "url" in JJ,
              get: JJ => JJ.url,
              set: (JJ, cJ) => {
                JJ.url = cJ
              }
            },
            metadata: eJ
          }, IJ, MJ), (0, FJ.d)(null, null, ZJ, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: JJ => "boundingBoxPosition" in JJ,
              get: JJ => JJ.boundingBoxPosition,
              set: (JJ, cJ) => {
                JJ.boundingBoxPosition = cJ
              }
            },
            metadata: eJ
          }, bJ, wJ), (0, FJ.d)(null, null, mJ, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_files" in JJ,
              get: JJ => JJ._files,
              set: (JJ, cJ) => {
                JJ._files = cJ
              }
            },
            metadata: eJ
          }, WJ, gJ), (0, FJ.d)(null, null, QJ, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_forcedExtension" in JJ,
              get: JJ => JJ._forcedExtension,
              set: (JJ, cJ) => {
                JJ._forcedExtension = cJ
              }
            },
            metadata: eJ
          }, HJ, PJ), (0, FJ.d)(null, null, EJ, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_extensions" in JJ,
              get: JJ => JJ._extensions,
              set: (JJ, cJ) => {
                JJ._extensions = cJ
              }
            },
            metadata: eJ
          }, kJ, pJ), (0, FJ.d)(null, null, VJ, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_textureMatrix" in JJ,
              get: JJ => JJ._textureMatrix,
              set: (JJ, cJ) => {
                JJ._textureMatrix = cJ
              }
            },
            metadata: eJ
          }, dJ, zJ), (0, FJ.d)(null, null, KJ, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_textureMatrixRefraction" in JJ,
              get: JJ => JJ._textureMatrixRefraction,
              set: (JJ, cJ) => {
                JJ._textureMatrixRefraction = cJ
              }
            },
            metadata: eJ
          }, NJ, OJ), eJ && Object.defineProperty(JJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: eJ
          })
        })(), JJ
      })(),
      mJ = !1;

    function QJ(JJ, cJ, ZJ) {
      let FJ = "";
      for (const UJ of JJ) FJ += UJ;
      return new vJ(FJ, cJ, null, ZJ, JJ)
    }

    function EJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        FJ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const UJ = cJ.useDelayedTextureLoading;
      cJ.useDelayedTextureLoading = !1;
      const eJ = new vJ(JJ, cJ, null, !1, null, null, null, void 0, !0, ZJ, FJ);
      return cJ.useDelayedTextureLoading = UJ, eJ
    }

    function VJ(JJ, cJ, ZJ) {
      const FJ = hJ.c.Parse((() => {
        let FJ = !1;
        return JJ.prefiltered && (FJ = JJ.prefiltered), new vJ(ZJ + (JJ.url ?? JJ.name), cJ, JJ.extensions, !1, JJ.files || null, null, null, void 0, FJ, JJ.forcedExtension)
      }), JJ, cJ);
      if (JJ.boundingBoxPosition && (FJ.boundingBoxPosition = XJ.j.FromArray(JJ.boundingBoxPosition)), JJ.boundingBoxSize && (FJ.boundingBoxSize = XJ.j.FromArray(JJ.boundingBoxSize)), JJ.animations)
        for (let UJ = 0; UJ < JJ.animations.length; UJ++) {
          const cJ = JJ.animations[UJ],
            ZJ = (0, jJ.e)("BABYLON.Animation");
          ZJ && FJ.animations.push(ZJ.Parse(cJ))
        }
      return FJ
    }
    mJ || (mJ = !0, vJ.CreateFromImages = QJ, vJ.CreateFromPrefilteredData = EJ, vJ.Parse = VJ, qJ.i._CubeTextureParser = VJ, (0, jJ.f)("BABYLON.CubeTexture", vJ))
  },
  40037: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => jJ
    });
    var FJ = ZJ(37660),
      UJ = ZJ(39243),
      eJ = ZJ(38729),
      XJ = ZJ(38644),
      AJ = ZJ(38635);
    let qJ = !1;
    class jJ extends UJ.i {
      constructor(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          jJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          YJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          hJ = arguments.length > 6 ? arguments[6] : void 0;
        const DJ = !ZJ || ZJ._isScene;
        super(null, DJ ? ZJ : ZJ?.iG, DJ ? !FJ : ZJ, hJ, jJ, void 0, void 0, void 0, void 0, YJ), qJ || (qJ = !0, XJ.ThinEngine.prototype.createDynamicTexture = function(JJ, cJ, ZJ, FJ) {
          const UJ = new AJ.e(this, 4);
          return UJ.baseWidth = JJ, UJ.baseHeight = cJ, ZJ && (JJ = this.needPOTTextures ? (0, eJ.d)(JJ, this._caps.maxTextureSize) : JJ, cJ = this.needPOTTextures ? (0, eJ.d)(cJ, this._caps.maxTextureSize) : cJ), UJ.width = JJ, UJ.height = cJ, UJ.isReady = !1, UJ.generateMipMaps = ZJ, UJ.samplingMode = FJ, this.updateTextureSamplingMode(FJ, UJ), this._internalTexturesCache.push(UJ), UJ
        }, XJ.ThinEngine.prototype.updateDynamicTexture = function(JJ, cJ, ZJ) {
          let FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            UJ = arguments.length > 4 ? arguments[4] : void 0,
            eJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!JJ) return;
          const XJ = this._gl,
            AJ = XJ.TEXTURE_2D,
            qJ = this._bindTextureDirectly(AJ, JJ, !0, eJ);
          this._unpackFlipY(void 0 === ZJ ? JJ.invertY : ZJ), FJ && XJ.pixelStorei(XJ.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const jJ = this._getWebGLTextureType(JJ.type),
            YJ = this._getInternalFormat(UJ || JJ.format),
            hJ = this._getRGBABufferInternalSizedFormat(JJ.type, YJ);
          XJ.texImage2D(AJ, 0, hJ, YJ, jJ, cJ), JJ.generateMipMaps && XJ.generateMipmap(AJ), qJ || this._bindTextureDirectly(AJ, null), FJ && XJ.pixelStorei(XJ.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), UJ && (JJ.format = UJ), JJ._dynamicTextureSource = cJ, JJ._premulAlpha = FJ, JJ.invertY = ZJ || !1, JJ.isReady = !0
        }), this.name = JJ, this.wrapU = UJ.i.CLAMP_ADDRESSMODE, this.wrapV = UJ.i.CLAMP_ADDRESSMODE, this._generateMipMaps = FJ;
        const sJ = this._getEngine();
        if (!sJ) return;
        if (cJ.getContext) this._canvas = cJ, this._ownCanvas = !1, this._texture = sJ.createDynamicTexture(this._canvas.width, this._canvas.height, FJ, jJ);
        else {
          this._canvas = sJ.createCanvas(1, 1), this._ownCanvas = !0;
          const JJ = cJ;
          JJ.width || 0 === JJ.width ? this._texture = sJ.createDynamicTexture(JJ.width, JJ.height, FJ, jJ) : this._texture = sJ.createDynamicTexture(cJ, cJ, FJ, jJ)
        }
        const nJ = this.getSize();
        this._canvas.width !== nJ.width && (this._canvas.width = nJ.width), this._canvas.height !== nJ.height && (this._canvas.height = nJ.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(JJ) {
        this._canvas.width = JJ.width, this._canvas.height = JJ.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(JJ.width, JJ.height, this._generateMipMaps, this.samplingMode)
      }
      scale(JJ) {
        const cJ = this.getSize();
        cJ.width *= JJ, cJ.height *= JJ, this._recreate(cJ)
      }
      scaleTo(JJ, cJ) {
        const ZJ = this.getSize();
        ZJ.width = JJ, ZJ.height = cJ, this._recreate(ZJ)
      }
      getContext() {
        return this._context
      }
      clear(JJ) {
        const cJ = this.getSize();
        JJ && (this._context.fillStyle = JJ), this._context.clearRect(0, 0, cJ.width, cJ.height)
      }
      update(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === JJ || JJ, cJ, this._format || void 0, void 0, ZJ)
      }
      drawText(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        let AJ = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const qJ = this.getSize();
        if (eJ && (this._context.fillStyle = eJ, this._context.fillRect(0, 0, qJ.width, qJ.height)), this._context.font = FJ, null === cJ || void 0 === cJ) {
          const ZJ = this._context.measureText(JJ);
          cJ = (qJ.width - ZJ.width) / 2
        }
        if (null === ZJ || void 0 === ZJ) {
          const JJ = parseInt(FJ.replace(/\D/g, ""));
          ZJ = qJ.height / 2 + JJ / 3.65
        }
        this._context.fillStyle = UJ || "", this._context.fillText(JJ, cJ, ZJ), AJ && this.update(XJ)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const JJ = this.Qy();
        if (!JJ) return this;
        const cJ = this.getSize(),
          ZJ = new jJ(this.name, cJ, JJ, this._generateMipMaps);
        return ZJ.hasAlpha = this.hasAlpha, ZJ.level = this.level, ZJ.wrapU = this.wrapU, ZJ.wrapV = this.wrapV, ZJ
      }
      serialize() {
        const JJ = this.Qy();
        JJ && !JJ.isReady() && FJ.c.Warn("The scene must be ready before serializing the dynamic texture");
        const cJ = super.serialize();
        return jJ._IsCanvasElement(this._canvas) && (cJ.base64String = this._canvas.toDataURL()), cJ.invertY = this._invertY, cJ.samplingMode = this.samplingMode, cJ
      }
      static _IsCanvasElement(JJ) {
        return void 0 !== JJ.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  40012: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ
    });
    var FJ = ZJ(39243);
    class UJ extends FJ.i {
      get depth() {
        return this._depth
      }
      constructor(JJ, cJ, ZJ, UJ, eJ, XJ) {
        let AJ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          qJ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          jJ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : FJ.i.TRILINEAR_SAMPLINGMODE,
          YJ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          hJ = arguments.length > 10 ? arguments[10] : void 0,
          DJ = arguments.length > 11 ? arguments[11] : void 0;
        super(null, XJ, !AJ, qJ), this.format = eJ, this._texture = XJ.gn().createRawTexture2DArray(JJ, cJ, ZJ, UJ, eJ, AJ, qJ, jJ, null, YJ, hJ ?? 0, DJ), this._depth = UJ, this.is2DArray = !0
      }
      update(JJ) {
        this.updateMipLevel(JJ, 0)
      }
      updateMipLevel(JJ, cJ) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, JJ, this._texture.format, this._texture.invertY, null, this._texture.type, cJ)
      }
      static CreateRGBATexture(JJ, cJ, ZJ, FJ, eJ) {
        return new UJ(JJ, cJ, ZJ, FJ, 5, eJ, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  40009: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ.d
    });
    var FJ = ZJ(39123);
    (0, FJ.e)()
  },
  38872: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ.e
    });
    var FJ = ZJ(38874);
    (0, FJ.d)()
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);