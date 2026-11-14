export const id = 227;
export const ids = [227];
export const modules = {
  38207: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => hF,
      d: () => bW
    });
    var CF = SF(37076),
      AF = SF(37994),
      uF = SF(38183),
      hF = {};
    class bW {
      constructor(FF) {
        this.attachedToElement = !1, this.attached = {}, this.camera = FF, this.checkInputs = () => {}
      }
      add(FF) {
        const WF = FF.getSimpleName();
        this.attached[WF] ? CF.b.Warn("camera input of type " + WF + " already exists on camera") : (this.attached[WF] = FF, FF.camera = this.camera, FF.checkInputs && (this.checkInputs = this._addCheckInputs(FF.checkInputs.bind(FF))), this.attachedToElement && FF.attachControl(this.noPreventDefault))
      }
      remove(FF) {
        for (const WF in this.attached) {
          const SF = this.attached[WF];
          if (SF === FF) return SF.detachControl(), SF.camera = null, delete this.attached[WF], void this.rebuildInputCheck()
        }
      }
      removeByType(FF) {
        for (const WF in this.attached) {
          const SF = this.attached[WF];
          SF.getClassName() === FF && (SF.detachControl(), SF.camera = null, delete this.attached[WF], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(FF) {
        const WF = this.checkInputs;
        return () => {
          WF(), FF()
        }
      }
      attachInput(FF) {
        this.attachedToElement && FF.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          FF = !uF.c.ForceAttachControlToAlwaysPreventDefault && FF, this.attachedToElement = !0, this.noPreventDefault = FF;
          for (const WF in this.attached) this.attached[WF].attachControl(FF)
        }
      }
      detachElement() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const WF in this.attached) this.attached[WF].detachControl(), FF && (this.attached[WF].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const FF in this.attached) {
          const WF = this.attached[FF];
          WF.checkInputs && (this.checkInputs = this._addCheckInputs(WF.checkInputs.bind(WF)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(FF) {
        const WF = {};
        for (const SF in this.attached) {
          const FF = this.attached[SF],
            CF = AF.e.Serialize(FF);
          WF[FF.getClassName()] = CF
        }
        FF.inputsmgr = WF
      }
      parse(FF) {
        const WF = FF.inputsmgr;
        if (WF) {
          this.clear();
          for (const FF in WF) {
            const SF = hF[FF];
            if (SF) {
              const CF = WF[FF],
                uF = AF.e.Parse((() => new SF), CF, null);
              this.add(uF)
            }
          }
        } else
          for (const SF in this.attached) {
            const WF = hF[this.attached[SF].getClassName()];
            if (WF) {
              const CF = AF.e.Parse((() => new WF), FF, null);
              this.remove(this.attached[SF]), this.add(CF)
            }
          }
      }
    }
  },
  39095: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => aW
    });
    var CF = SF(37972),
      AF = SF(37974),
      uF = SF(37860),
      hF = SF(35623),
      bW = SF(37963),
      dF = SF(38448),
      PF = SF(35660),
      RF = SF(35647),
      iW = SF(37994),
      eF = SF(37796),
      EF = SF(37076),
      QF = SF(38010),
      rW = SF(36308),
      gW = SF(38045);
    var tW = SF(37867);
    let TF = !1;
    let aW = (() => {
        var FF;
        let WF, SF, PF, aW, kW, qW, VF, NF, DF, LF = bW.d,
          mW = [],
          OF = [],
          xW = [],
          ZF = [],
          oF = [],
          YF = [],
          MF = [],
          cW = [],
          GF = [],
          zW = [],
          IF = [],
          fF = [],
          yW = [],
          sF = [],
          nF = [];
        return FF = class extends LF {
          set boundingBoxSize(FF) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(FF)) return;
            this._boundingBoxSize = FF;
            const WF = this.OWF();
            WF && WF.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(FF) {
            this._rotationY = FF, this.setReflectionTextureMatrix(hF.b.RotationY(this._rotationY))
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
          constructor(FF, WF) {
            let SF, AF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              uF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              bW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              PF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              iW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              aW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              kW = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              qW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              VF = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              NF = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              DF = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              LF = arguments.length > 13 ? arguments[13] : void 0,
              HF = arguments.length > 14 ? arguments[14] : void 0;
            super(WF), this._delayedOnLoad = (0, CF.k)(this, mW), this.onLoadObservable = new RF.b, this.url = (0, CF.k)(this, OF, void 0), this.boundingBoxPosition = ((0, CF.k)(this, xW), (0, CF.k)(this, ZF, hF.r.Zero())), this._boundingBoxSize = (0, CF.k)(this, oF), this._rotationY = 0, this._files = (0, CF.k)(this, YF, null), this._forcedExtension = ((0, CF.k)(this, MF), (0, CF.k)(this, cW, null)), this._extensions = ((0, CF.k)(this, GF), (0, CF.k)(this, zW, null)), this._textureMatrix = ((0, CF.k)(this, IF), (0, CF.k)(this, fF, void 0)), this._textureMatrixRefraction = ((0, CF.k)(this, yW), (0, CF.k)(this, sF, new hF.b)), this._format = (0, CF.k)(this, nF), this._buffer = null, TF || (TF = !0, tW.e.prototype._partialLoadFile = function(FF, WF, SF, CF) {
              let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(FF, (FF => {
                SF[WF] = FF, SF._internalCount++, 6 === SF._internalCount && CF(SF)
              }), void 0, void 0, !0, ((FF, WF) => {
                AF && FF && AF(FF.status + " " + FF.statusText, WF)
              }))
            }, tW.e.prototype._cascadeLoadFiles = function(FF, WF, SF) {
              let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const AF = [];
              AF._internalCount = 0;
              for (let uF = 0; uF < 6; uF++) this._partialLoadFile(SF[uF], uF, AF, WF, CF)
            }, tW.e.prototype._cascadeLoadImgs = function(FF, WF, SF, CF) {
              let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                uF = arguments.length > 5 ? arguments[5] : void 0;
              const hF = [];
              hF._internalCount = 0;
              for (let bW = 0; bW < 6; bW++) this._partialLoadImg(CF[bW], bW, hF, FF, WF, SF, AF, uF)
            }, tW.e.prototype._partialLoadImg = function(FF, WF, SF, CF, AF, uF) {
              let hF = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                bW = arguments.length > 7 ? arguments[7] : void 0;
              const dF = (0, rW.b)();
              (0, QF.m)(FF, (FF => {
                SF[WF] = FF, SF._internalCount++, CF && CF.removePendingData(dF), 6 === SF._internalCount && uF && uF(AF, SF)
              }), ((FF, WF) => {
                CF && CF.removePendingData(dF), hF && hF(FF, WF)
              }), CF ? CF.offlineProvider : null, bW), CF && CF.addPendingData(dF)
            }, tW.e.prototype.createCubeTextureBase = function(FF, WF, SF, CF) {
              let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                hF = arguments.length > 6 ? arguments[6] : void 0,
                bW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                dF = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                PF = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                RF = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                iW = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                QF = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                rW = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                tW = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                TF = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const aW = iW || new eF.b(this, 7);
              aW.isCube = !0, aW.url = FF, aW.generateMipMaps = !CF, aW._lodGenerationScale = PF, aW._lodGenerationOffset = RF, aW._useSRGBBuffer = !!tW && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!CF), aW !== iW && (aW.label = FF.substring(0, 60)), this._doNotHandleContextLost || (aW._extension = bW, aW._files = SF, aW._buffer = TF);
              const kW = FF;
              this._transformTextureUrl && !iW && (FF = this._transformTextureUrl(FF));
              const qW = bW ?? function(FF) {
                  const WF = FF.split("?")[0],
                    SF = WF.lastIndexOf(".");
                  return SF > -1 ? WF.substring(SF).toLowerCase() : ""
                }(FF),
                VF = (0, gW.d)(qW),
                NF = (FF, WF) => {
                  aW.dispose(), uF ? uF(FF, WF) : FF && EF.b.Warn(FF)
                },
                DF = (uF, iW) => {
                  FF === kW ? uF && NF(uF.status + " " + uF.statusText, iW) : (EF.b.Warn(`Failed to load ${FF}, falling back to the ${kW}`), this.createCubeTextureBase(kW, WF, SF, !!CF, AF, NF, hF, bW, dF, PF, RF, aW, QF, rW, tW, TF))
                };
              if (VF) VF.then((CF => {
                const uF = FF => {
                  QF && QF(aW, FF), CF.loadCubeData(FF, aW, dF, AF, ((FF, WF) => {
                    NF(FF, WF)
                  }))
                };
                TF ? uF(TF) : SF && 6 === SF.length ? CF.supportCascades ? this._cascadeLoadFiles(WF, (FF => uF(FF.map((FF => new Uint8Array(FF))))), SF, NF) : NF("Textures type does not support cascades.") : this._loadFile(FF, (FF => uF(new Uint8Array(FF))), void 0, WF ? WF.offlineProvider || null : void 0, !0, DF)
              }));
              else {
                if (!SF || 0 === SF.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(WF, aW, ((FF, WF) => {
                  rW && rW(FF, WF)
                }), SF, NF)
              }
              return this._internalTexturesCache.push(aW), aW
            }), this.name = FF, this.url = FF, this._noMipmap = uF, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = hF.b.Identity(), this.coordinatesMode = dF.i.CUBIC_MODE;
            let KF = null;
            null === AF || Array.isArray(AF) ? (this._noMipmap = uF, this._format = aW, this._createPolynomials = VF, SF = AF, this._loaderOptions = LF, this._useSRGBBuffer = HF, this._lodScale = NF, this._lodOffset = DF) : (SF = AF.extensions ?? null, this._noMipmap = AF.noMipmap ?? !1, bW = AF.files ?? null, KF = AF.buffer ?? null, this._format = AF.format ?? 5, kW = AF.prefiltered ?? !1, qW = AF.forcedExtension ?? null, this._createPolynomials = AF.createPolynomials ?? !1, this._lodScale = AF.lodScale ?? .8, this._lodOffset = AF.lodOffset ?? 0, this._loaderOptions = AF.loaderOptions, this._useSRGBBuffer = AF.useSRGBBuffer, this._sphericalPolynomialTargetSize = AF.sphericalPolynomialTargetSize ?? 0, PF = AF.onLoad ?? null, iW = AF.onError ?? null), (FF || bW) && this.updateURL(FF, qW, PF, kW, iW, SF, this.OWF()?.useDelayedTextureLoading, bW, KF)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(FF) {
            let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              hF = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              bW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              dF = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = FF), this.url = FF, WF && (this._forcedExtension = WF);
            const PF = FF.lastIndexOf("."),
              RF = WF || (PF > -1 ? FF.substring(PF).toLowerCase() : ""),
              iW = 0 === RF.indexOf(".dds"),
              eF = 0 === RF.indexOf(".env"),
              EF = 0 === RF.indexOf(".basis");
            if (eF ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = CF, CF && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), bW) this._files = bW;
            else if (EF || eF || iW || uF || (uF = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, uF) {
              for (let WF = 0; WF < uF.length; WF++) this._files.push(FF + uF[WF]);
              this._extensions = uF
            }
            this._buffer = dF, hF ? (this.delayLoadState = 4, this._delayedOnLoad = SF, this._delayedOnError = AF) : this._loadTexture(SF, AF)
          }
          delayLoad(FF) {
            4 === this.delayLoadState && (FF && (this._forcedExtension = FF), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(FF) {
            if (FF.updateFlag === this._textureMatrix.updateFlag) return;
            if (FF.isIdentity() !== this._textureMatrix.isIdentity() && this.OWF()?.markAllMaterialsAsDirty(1, (FF => -1 !== FF.getActiveTextures().indexOf(this))), this._textureMatrix = FF, !this.OWF()?.useRightHandedSystem) return;
            const WF = hF.j.HC[0],
              SF = hF.j.Quaternion[0],
              CF = hF.j.HC[1];
            this._textureMatrix.decompose(WF, SF, CF), SF.z *= -1, SF.w *= -1, hF.b.ComposeToRef(WF, SF, CF, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.OWF()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const SF = this.OWF(),
              CF = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const AF = () => {
                this.onLoadObservable.notifyObservers(this), CF && (CF.dispose(), this.OWF()?.markAllMaterialsAsDirty(1)), FF && FF()
              },
              hF = (FF, SF) => {
                this._loadingError = !0, this._errorObject = {
                  message: FF,
                  exception: SF
                }, WF && WF(FF, SF), dF.i.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? uF.c.SetImmediate((() => AF())) : this._texture.onLoadedObservable.add((() => AF())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, SF, this._lodScale, this._lodOffset, FF, hF, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, SF, this._files, this._noMipmap, FF, hF, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let WF = 0;
            const SF = this.irradianceTexture,
              CF = iW.e.Clone((() => {
                const SF = new FF(this.url, this.OWF() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return WF = SF.uniqueId, SF
              }), this);
            return CF.uniqueId = WF, SF && !this.irradianceTexture && (this.irradianceTexture = SF), CF
          }
        }, (() => {
          const uF = "function" === typeof Symbol && Symbol.metadata ? Object.create(LF[Symbol.metadata] ?? null) : void 0;
          WF = [(0, AF.H)()], SF = [(0, AF.G)()], PF = [(0, AF.G)()], aW = [(0, AF.H)("rotationY")], kW = [(0, AF.H)("files")], qW = [(0, AF.H)("forcedExtension")], VF = [(0, AF.H)("extensions")], NF = [(0, AF.v)("textureMatrix")], DF = [(0, AF.v)("textureMatrixRefraction")], (0, CF.j)(FF, null, PF, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: FF => "boundingBoxSize" in FF,
              get: FF => FF.boundingBoxSize
            },
            metadata: uF
          }, null, mW), (0, CF.j)(FF, null, aW, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: FF => "rotationY" in FF,
              set: (FF, WF) => {
                FF.rotationY = WF
              }
            },
            metadata: uF
          }, null, mW), (0, CF.j)(null, null, WF, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: FF => "url" in FF,
              get: FF => FF.url,
              set: (FF, WF) => {
                FF.url = WF
              }
            },
            metadata: uF
          }, OF, xW), (0, CF.j)(null, null, SF, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: FF => "boundingBoxPosition" in FF,
              get: FF => FF.boundingBoxPosition,
              set: (FF, WF) => {
                FF.boundingBoxPosition = WF
              }
            },
            metadata: uF
          }, ZF, oF), (0, CF.j)(null, null, kW, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: FF => "_files" in FF,
              get: FF => FF._files,
              set: (FF, WF) => {
                FF._files = WF
              }
            },
            metadata: uF
          }, YF, MF), (0, CF.j)(null, null, qW, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: FF => "_forcedExtension" in FF,
              get: FF => FF._forcedExtension,
              set: (FF, WF) => {
                FF._forcedExtension = WF
              }
            },
            metadata: uF
          }, cW, GF), (0, CF.j)(null, null, VF, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: FF => "_extensions" in FF,
              get: FF => FF._extensions,
              set: (FF, WF) => {
                FF._extensions = WF
              }
            },
            metadata: uF
          }, zW, IF), (0, CF.j)(null, null, NF, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: FF => "_textureMatrix" in FF,
              get: FF => FF._textureMatrix,
              set: (FF, WF) => {
                FF._textureMatrix = WF
              }
            },
            metadata: uF
          }, fF, yW), (0, CF.j)(null, null, DF, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: FF => "_textureMatrixRefraction" in FF,
              get: FF => FF._textureMatrixRefraction,
              set: (FF, WF) => {
                FF._textureMatrixRefraction = WF
              }
            },
            metadata: uF
          }, sF, nF), uF && Object.defineProperty(FF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uF
          })
        })(), FF
      })(),
      kW = !1;

    function qW(FF, WF, SF) {
      let CF = "";
      for (const AF of FF) CF += AF;
      return new aW(CF, WF, null, SF, FF)
    }

    function VF(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        CF = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const AF = WF.useDelayedTextureLoading;
      WF.useDelayedTextureLoading = !1;
      const uF = new aW(FF, WF, null, !1, null, null, null, void 0, !0, SF, CF);
      return WF.useDelayedTextureLoading = AF, uF
    }

    function NF(FF, WF, SF) {
      const CF = iW.e.Parse((() => {
        let CF = !1;
        return FF.prefiltered && (CF = FF.prefiltered), new aW(SF + (FF.url ?? FF.name), WF, FF.extensions, !1, FF.files || null, null, null, void 0, CF, FF.forcedExtension)
      }), FF, WF);
      if (FF.boundingBoxPosition && (CF.boundingBoxPosition = hF.r.FromArray(FF.boundingBoxPosition)), FF.boundingBoxSize && (CF.boundingBoxSize = hF.r.FromArray(FF.boundingBoxSize)), FF.animations)
        for (let AF = 0; AF < FF.animations.length; AF++) {
          const WF = FF.animations[AF],
            SF = (0, PF.c)("BABYLON.Animation");
          SF && CF.animations.push(SF.Parse(WF))
        }
      return CF
    }
    kW || (kW = !0, aW.CreateFromImages = qW, aW.CreateFromPrefilteredData = VF, aW.Parse = NF, dF.i._CubeTextureParser = NF, (0, PF.f)("BABYLON.CubeTexture", aW))
  },
  39132: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => PF
    });
    var CF = SF(37076),
      AF = SF(38448),
      uF = SF(37900),
      hF = SF(37809),
      bW = SF(37796);
    let dF = !1;
    class PF extends AF.i {
      constructor(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          PF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          RF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          iW = arguments.length > 6 ? arguments[6] : void 0;
        const eF = !SF || SF._isScene;
        super(null, eF ? SF : SF?.ju, eF ? !CF : SF, iW, PF, void 0, void 0, void 0, void 0, RF), dF || (dF = !0, hF.ThinEngine.prototype.createDynamicTexture = function(FF, WF, SF, CF) {
          const AF = new bW.b(this, 4);
          return AF.baseWidth = FF, AF.baseHeight = WF, SF && (FF = this.needPOTTextures ? (0, uF.e)(FF, this._caps.maxTextureSize) : FF, WF = this.needPOTTextures ? (0, uF.e)(WF, this._caps.maxTextureSize) : WF), AF.width = FF, AF.height = WF, AF.isReady = !1, AF.generateMipMaps = SF, AF.samplingMode = CF, this.updateTextureSamplingMode(CF, AF), this._internalTexturesCache.push(AF), AF
        }, hF.ThinEngine.prototype.updateDynamicTexture = function(FF, WF, SF) {
          let CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            AF = arguments.length > 4 ? arguments[4] : void 0,
            uF = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!FF) return;
          const hF = this._gl,
            bW = hF.TEXTURE_2D,
            dF = this._bindTextureDirectly(bW, FF, !0, uF);
          this._unpackFlipY(void 0 === SF ? FF.invertY : SF), CF && hF.pixelStorei(hF.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const PF = this._getWebGLTextureType(FF.type),
            RF = this._getInternalFormat(AF || FF.format),
            iW = this._getRGBABufferInternalSizedFormat(FF.type, RF);
          hF.texImage2D(bW, 0, iW, RF, PF, WF), FF.generateMipMaps && hF.generateMipmap(bW), dF || this._bindTextureDirectly(bW, null), CF && hF.pixelStorei(hF.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), AF && (FF.format = AF), FF._dynamicTextureSource = WF, FF._premulAlpha = CF, FF.invertY = SF || !1, FF.isReady = !0
        }), this.name = FF, this.wrapU = AF.i.CLAMP_ADDRESSMODE, this.wrapV = AF.i.CLAMP_ADDRESSMODE, this._generateMipMaps = CF;
        const EF = this._getEngine();
        if (!EF) return;
        if (WF.getContext) this._canvas = WF, this._ownCanvas = !1, this._texture = EF.createDynamicTexture(this._canvas.width, this._canvas.height, CF, PF);
        else {
          this._canvas = EF.createCanvas(1, 1), this._ownCanvas = !0;
          const FF = WF;
          FF.width || 0 === FF.width ? this._texture = EF.createDynamicTexture(FF.width, FF.height, CF, PF) : this._texture = EF.createDynamicTexture(WF, WF, CF, PF)
        }
        const QF = this.getSize();
        this._canvas.width !== QF.width && (this._canvas.width = QF.width), this._canvas.height !== QF.height && (this._canvas.height = QF.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(FF) {
        this._canvas.width = FF.width, this._canvas.height = FF.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(FF.width, FF.height, this._generateMipMaps, this.samplingMode)
      }
      scale(FF) {
        const WF = this.getSize();
        WF.width *= FF, WF.height *= FF, this._recreate(WF)
      }
      scaleTo(FF, WF) {
        const SF = this.getSize();
        SF.width = FF, SF.height = WF, this._recreate(SF)
      }
      getContext() {
        return this._context
      }
      clear(FF) {
        const WF = this.getSize();
        FF && (this._context.fillStyle = FF), this._context.clearRect(0, 0, WF.width, WF.height)
      }
      update(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === FF || FF, WF, this._format || void 0, void 0, SF)
      }
      drawText(FF, WF, SF, CF, AF, uF, hF) {
        let bW = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const dF = this.getSize();
        if (uF && (this._context.fillStyle = uF, this._context.fillRect(0, 0, dF.width, dF.height)), this._context.font = CF, null === WF || void 0 === WF) {
          const SF = this._context.measureText(FF);
          WF = (dF.width - SF.width) / 2
        }
        if (null === SF || void 0 === SF) {
          const FF = parseInt(CF.replace(/\D/g, ""));
          SF = dF.height / 2 + FF / 3.65
        }
        this._context.fillStyle = AF || "", this._context.fillText(FF, WF, SF), bW && this.update(hF)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const FF = this.OWF();
        if (!FF) return this;
        const WF = this.getSize(),
          SF = new PF(this.name, WF, FF, this._generateMipMaps);
        return SF.hasAlpha = this.hasAlpha, SF.level = this.level, SF.wrapU = this.wrapU, SF.wrapV = this.wrapV, SF
      }
      serialize() {
        const FF = this.OWF();
        FF && !FF.isReady() && CF.b.Warn("The scene must be ready before serializing the dynamic texture");
        const WF = super.serialize();
        return PF._IsCanvasElement(this._canvas) && (WF.base64String = this._canvas.toDataURL()), WF.invertY = this._invertY, WF.samplingMode = this.samplingMode, WF
      }
      static _IsCanvasElement(FF) {
        return void 0 !== FF.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  39109: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => AF
    });
    var CF = SF(38448);
    class AF extends CF.i {
      get depth() {
        return this._depth
      }
      constructor(FF, WF, SF, AF, uF, hF) {
        let bW = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          dF = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          PF = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : CF.i.TRILINEAR_SAMPLINGMODE,
          RF = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          iW = arguments.length > 10 ? arguments[10] : void 0,
          eF = arguments.length > 11 ? arguments[11] : void 0;
        super(null, hF, !bW, dF), this.format = uF, this._texture = hF.sC().createRawTexture2DArray(FF, WF, SF, AF, uF, bW, dF, PF, null, RF, iW ?? 0, eF), this._depth = AF, this.is2DArray = !0
      }
      update(FF) {
        this.updateMipLevel(FF, 0)
      }
      updateMipLevel(FF, WF) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, FF, this._texture.format, this._texture.invertY, null, this._texture.type, WF)
      }
      static CreateRGBATexture(FF, WF, SF, CF, uF) {
        return new AF(FF, WF, SF, CF, 5, uF, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  39104: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF.e
    });
    var CF = SF(38333);
    (0, CF.i)()
  },
  38053: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => CF.f
    });
    var CF = SF(38057);
    (0, CF.e)()
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);