export const id = 257;
export const ids = [257];
export const modules = {
  40278: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS,
      f: () => NS
    });
    var tS = gS(38687),
      bS = gS(40068),
      XS = gS(40248),
      xS = {};
    class NS {
      constructor(SS) {
        this.attachedToElement = !1, this.attached = {}, this.camera = SS, this.checkInputs = () => {}
      }
      add(SS) {
        const HS = SS.getSimpleName();
        this.attached[HS] ? tS.b.Warn("camera input of type " + HS + " already exists on camera") : (this.attached[HS] = SS, SS.camera = this.camera, SS.checkInputs && (this.checkInputs = this._addCheckInputs(SS.checkInputs.bind(SS))), this.attachedToElement && SS.attachControl(this.noPreventDefault))
      }
      remove(SS) {
        for (const HS in this.attached) {
          const gS = this.attached[HS];
          if (gS === SS) return gS.detachControl(), gS.camera = null, delete this.attached[HS], void this.rebuildInputCheck()
        }
      }
      removeByType(SS) {
        for (const HS in this.attached) {
          const gS = this.attached[HS];
          gS.getClassName() === SS && (gS.detachControl(), gS.camera = null, delete this.attached[HS], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(SS) {
        const HS = this.checkInputs;
        return () => {
          HS(), SS()
        }
      }
      attachInput(SS) {
        this.attachedToElement && SS.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          SS = !XS.b.ForceAttachControlToAlwaysPreventDefault && SS, this.attachedToElement = !0, this.noPreventDefault = SS;
          for (const HS in this.attached) this.attached[HS].attachControl(SS)
        }
      }
      detachElement() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const HS in this.attached) this.attached[HS].detachControl(), SS && (this.attached[HS].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const SS in this.attached) {
          const HS = this.attached[SS];
          HS.checkInputs && (this.checkInputs = this._addCheckInputs(HS.checkInputs.bind(HS)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(SS) {
        const HS = {};
        for (const gS in this.attached) {
          const SS = this.attached[gS],
            tS = bS.b.Serialize(SS);
          HS[SS.getClassName()] = tS
        }
        SS.inputsmgr = HS
      }
      parse(SS) {
        const HS = SS.inputsmgr;
        if (HS) {
          this.clear();
          for (const SS in HS) {
            const gS = xS[SS];
            if (gS) {
              const tS = HS[SS],
                XS = bS.b.Parse((() => new gS), tS, null);
              this.add(XS)
            }
          }
        } else
          for (const gS in this.attached) {
            const HS = xS[this.attached[gS].getClassName()];
            if (HS) {
              const tS = bS.b.Parse((() => new HS), SS, null);
              this.remove(this.attached[gS]), this.add(tS)
            }
          }
      }
    }
  },
  41138: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => PS
    });
    var tS = gS(40041),
      bS = gS(40048),
      XS = gS(39937),
      xS = gS(37117),
      NS = gS(40038),
      qS = gS(40510),
      uS = gS(37164),
      IS = gS(37144),
      fS = gS(40068),
      kS = gS(39877),
      aS = gS(38687),
      KS = gS(40087),
      jS = gS(37933),
      GS = gS(40125);
    var CS = gS(39939);
    let nS = !1;
    let PS = (() => {
        var SS;
        let HS, gS, uS, PS, QS, DS, wS, hS, ZS, JS = NS.e,
          OS = [],
          dS = [],
          cS = [],
          vS = [],
          ES = [],
          LS = [],
          YS = [],
          AS = [],
          yS = [],
          VS = [],
          iS = [],
          WS = [],
          zS = [],
          US = [],
          pS = [];
        return SS = class extends JS {
          set boundingBoxSize(SS) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(SS)) return;
            this._boundingBoxSize = SS;
            const HS = this.lL();
            HS && HS.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(SS) {
            this._rotationY = SS, this.setReflectionTextureMatrix(xS.e.RotationY(this._rotationY))
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
          constructor(SS, HS) {
            let gS, bS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              XS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              NS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              uS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              fS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              PS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              QS = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              DS = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              wS = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              hS = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              ZS = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              JS = arguments.length > 13 ? arguments[13] : void 0,
              sS = arguments.length > 14 ? arguments[14] : void 0;
            super(HS), this._delayedOnLoad = (0, tS.k)(this, OS), this.onLoadObservable = new IS.e, this.url = (0, tS.k)(this, dS, void 0), this.boundingBoxPosition = ((0, tS.k)(this, cS), (0, tS.k)(this, vS, xS.n.Zero())), this._boundingBoxSize = (0, tS.k)(this, ES), this._rotationY = 0, this._files = (0, tS.k)(this, LS, null), this._forcedExtension = ((0, tS.k)(this, YS), (0, tS.k)(this, AS, null)), this._extensions = ((0, tS.k)(this, yS), (0, tS.k)(this, VS, null)), this._textureMatrix = ((0, tS.k)(this, iS), (0, tS.k)(this, WS, void 0)), this._textureMatrixRefraction = ((0, tS.k)(this, zS), (0, tS.k)(this, US, new xS.e)), this._format = (0, tS.k)(this, pS), this._buffer = null, nS || (nS = !0, CS.b.prototype._partialLoadFile = function(SS, HS, gS, tS) {
              let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(SS, (SS => {
                gS[HS] = SS, gS._internalCount++, 6 === gS._internalCount && tS(gS)
              }), void 0, void 0, !0, ((SS, HS) => {
                bS && SS && bS(SS.status + " " + SS.statusText, HS)
              }))
            }, CS.b.prototype._cascadeLoadFiles = function(SS, HS, gS) {
              let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const bS = [];
              bS._internalCount = 0;
              for (let XS = 0; XS < 6; XS++) this._partialLoadFile(gS[XS], XS, bS, HS, tS)
            }, CS.b.prototype._cascadeLoadImgs = function(SS, HS, gS, tS) {
              let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                XS = arguments.length > 5 ? arguments[5] : void 0;
              const xS = [];
              xS._internalCount = 0;
              for (let NS = 0; NS < 6; NS++) this._partialLoadImg(tS[NS], NS, xS, SS, HS, gS, bS, XS)
            }, CS.b.prototype._partialLoadImg = function(SS, HS, gS, tS, bS, XS) {
              let xS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                NS = arguments.length > 7 ? arguments[7] : void 0;
              const qS = (0, jS.c)();
              (0, KS.n)(SS, (SS => {
                gS[HS] = SS, gS._internalCount++, tS && tS.removePendingData(qS), 6 === gS._internalCount && XS && XS(bS, gS)
              }), ((SS, HS) => {
                tS && tS.removePendingData(qS), xS && xS(SS, HS)
              }), tS ? tS.offlineProvider : null, NS), tS && tS.addPendingData(qS)
            }, CS.b.prototype.createCubeTextureBase = function(SS, HS, gS, tS) {
              let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                xS = arguments.length > 6 ? arguments[6] : void 0,
                NS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                qS = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                uS = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                IS = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                fS = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                KS = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                jS = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                CS = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                nS = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const PS = fS || new kS.e(this, 7);
              PS.isCube = !0, PS.url = SS, PS.generateMipMaps = !tS, PS._lodGenerationScale = uS, PS._lodGenerationOffset = IS, PS._useSRGBBuffer = !!CS && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!tS), PS !== fS && (PS.label = SS.substring(0, 60)), this._doNotHandleContextLost || (PS._extension = NS, PS._files = gS, PS._buffer = nS);
              const QS = SS;
              this._transformTextureUrl && !fS && (SS = this._transformTextureUrl(SS));
              const DS = NS ?? function(SS) {
                  const HS = SS.split("?")[0],
                    gS = HS.lastIndexOf(".");
                  return gS > -1 ? HS.substring(gS).toLowerCase() : ""
                }(SS),
                wS = (0, GS.e)(DS),
                hS = (SS, HS) => {
                  PS.dispose(), XS ? XS(SS, HS) : SS && aS.b.Warn(SS)
                },
                ZS = (XS, fS) => {
                  SS === QS ? XS && hS(XS.status + " " + XS.statusText, fS) : (aS.b.Warn(`Failed to load ${SS}, falling back to the ${QS}`), this.createCubeTextureBase(QS, HS, gS, !!tS, bS, hS, xS, NS, qS, uS, IS, PS, KS, jS, CS, nS))
                };
              if (wS) wS.then((tS => {
                const XS = SS => {
                  KS && KS(PS, SS), tS.loadCubeData(SS, PS, qS, bS, ((SS, HS) => {
                    hS(SS, HS)
                  }))
                };
                nS ? XS(nS) : gS && 6 === gS.length ? tS.supportCascades ? this._cascadeLoadFiles(HS, (SS => XS(SS.map((SS => new Uint8Array(SS))))), gS, hS) : hS("Textures type does not support cascades.") : this._loadFile(SS, (SS => XS(new Uint8Array(SS))), void 0, HS ? HS.offlineProvider || null : void 0, !0, ZS)
              }));
              else {
                if (!gS || 0 === gS.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(HS, PS, ((SS, HS) => {
                  jS && jS(SS, HS)
                }), gS, hS)
              }
              return this._internalTexturesCache.push(PS), PS
            }), this.name = SS, this.url = SS, this._noMipmap = XS, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = xS.e.Identity(), this.coordinatesMode = qS.i.CUBIC_MODE;
            let BS = null;
            null === bS || Array.isArray(bS) ? (this._noMipmap = XS, this._format = PS, this._createPolynomials = wS, gS = bS, this._loaderOptions = JS, this._useSRGBBuffer = sS, this._lodScale = hS, this._lodOffset = ZS) : (gS = bS.extensions ?? null, this._noMipmap = bS.noMipmap ?? !1, NS = bS.files ?? null, BS = bS.buffer ?? null, this._format = bS.format ?? 5, QS = bS.prefiltered ?? !1, DS = bS.forcedExtension ?? null, this._createPolynomials = bS.createPolynomials ?? !1, this._lodScale = bS.lodScale ?? .8, this._lodOffset = bS.lodOffset ?? 0, this._loaderOptions = bS.loaderOptions, this._useSRGBBuffer = bS.useSRGBBuffer, this._sphericalPolynomialTargetSize = bS.sphericalPolynomialTargetSize ?? 0, uS = bS.onLoad ?? null, fS = bS.onError ?? null), (SS || NS) && this.updateURL(SS, DS, uS, QS, fS, gS, this.lL()?.useDelayedTextureLoading, NS, BS)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(SS) {
            let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              xS = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              NS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              qS = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = SS), this.url = SS, HS && (this._forcedExtension = HS);
            const uS = SS.lastIndexOf("."),
              IS = HS || (uS > -1 ? SS.substring(uS).toLowerCase() : ""),
              fS = 0 === IS.indexOf(".dds"),
              kS = 0 === IS.indexOf(".env"),
              aS = 0 === IS.indexOf(".basis");
            if (kS ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = tS, tS && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), NS) this._files = NS;
            else if (aS || kS || fS || XS || (XS = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, XS) {
              for (let HS = 0; HS < XS.length; HS++) this._files.push(SS + XS[HS]);
              this._extensions = XS
            }
            this._buffer = qS, xS ? (this.delayLoadState = 4, this._delayedOnLoad = gS, this._delayedOnError = bS) : this._loadTexture(gS, bS)
          }
          delayLoad(SS) {
            4 === this.delayLoadState && (SS && (this._forcedExtension = SS), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(SS) {
            if (SS.updateFlag === this._textureMatrix.updateFlag) return;
            if (SS.isIdentity() !== this._textureMatrix.isIdentity() && this.lL()?.markAllMaterialsAsDirty(1, (SS => -1 !== SS.getActiveTextures().indexOf(this))), this._textureMatrix = SS, !this.lL()?.useRightHandedSystem) return;
            const HS = xS.l.VK[0],
              gS = xS.l.Quaternion[0],
              tS = xS.l.VK[1];
            this._textureMatrix.decompose(HS, gS, tS), gS.z *= -1, gS.w *= -1, xS.e.ComposeToRef(HS, gS, tS, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.lL()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const gS = this.lL(),
              tS = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const bS = () => {
                this.onLoadObservable.notifyObservers(this), tS && (tS.dispose(), this.lL()?.markAllMaterialsAsDirty(1)), SS && SS()
              },
              xS = (SS, gS) => {
                this._loadingError = !0, this._errorObject = {
                  message: SS,
                  exception: gS
                }, HS && HS(SS, gS), qS.i.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? XS.e.SetImmediate((() => bS())) : this._texture.onLoadedObservable.add((() => bS())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, gS, this._lodScale, this._lodOffset, SS, xS, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, gS, this._files, this._noMipmap, SS, xS, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let HS = 0;
            const gS = this.irradianceTexture,
              tS = fS.b.Clone((() => {
                const gS = new SS(this.url, this.lL() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return HS = gS.uniqueId, gS
              }), this);
            return tS.uniqueId = HS, gS && !this.irradianceTexture && (this.irradianceTexture = gS), tS
          }
        }, (() => {
          const XS = "function" === typeof Symbol && Symbol.metadata ? Object.create(JS[Symbol.metadata] ?? null) : void 0;
          HS = [(0, bS.M)()], gS = [(0, bS.I)()], uS = [(0, bS.I)()], PS = [(0, bS.M)("rotationY")], QS = [(0, bS.M)("files")], DS = [(0, bS.M)("forcedExtension")], wS = [(0, bS.M)("extensions")], hS = [(0, bS.r)("textureMatrix")], ZS = [(0, bS.r)("textureMatrixRefraction")], (0, tS.j)(SS, null, uS, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: SS => "boundingBoxSize" in SS,
              get: SS => SS.boundingBoxSize
            },
            metadata: XS
          }, null, OS), (0, tS.j)(SS, null, PS, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: SS => "rotationY" in SS,
              set: (SS, HS) => {
                SS.rotationY = HS
              }
            },
            metadata: XS
          }, null, OS), (0, tS.j)(null, null, HS, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: SS => "url" in SS,
              get: SS => SS.url,
              set: (SS, HS) => {
                SS.url = HS
              }
            },
            metadata: XS
          }, dS, cS), (0, tS.j)(null, null, gS, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: SS => "boundingBoxPosition" in SS,
              get: SS => SS.boundingBoxPosition,
              set: (SS, HS) => {
                SS.boundingBoxPosition = HS
              }
            },
            metadata: XS
          }, vS, ES), (0, tS.j)(null, null, QS, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: SS => "_files" in SS,
              get: SS => SS._files,
              set: (SS, HS) => {
                SS._files = HS
              }
            },
            metadata: XS
          }, LS, YS), (0, tS.j)(null, null, DS, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: SS => "_forcedExtension" in SS,
              get: SS => SS._forcedExtension,
              set: (SS, HS) => {
                SS._forcedExtension = HS
              }
            },
            metadata: XS
          }, AS, yS), (0, tS.j)(null, null, wS, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: SS => "_extensions" in SS,
              get: SS => SS._extensions,
              set: (SS, HS) => {
                SS._extensions = HS
              }
            },
            metadata: XS
          }, VS, iS), (0, tS.j)(null, null, hS, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: SS => "_textureMatrix" in SS,
              get: SS => SS._textureMatrix,
              set: (SS, HS) => {
                SS._textureMatrix = HS
              }
            },
            metadata: XS
          }, WS, zS), (0, tS.j)(null, null, ZS, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: SS => "_textureMatrixRefraction" in SS,
              get: SS => SS._textureMatrixRefraction,
              set: (SS, HS) => {
                SS._textureMatrixRefraction = HS
              }
            },
            metadata: XS
          }, US, pS), XS && Object.defineProperty(SS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: XS
          })
        })(), SS
      })(),
      QS = !1;

    function DS(SS, HS, gS) {
      let tS = "";
      for (const bS of SS) tS += bS;
      return new PS(tS, HS, null, gS, SS)
    }

    function wS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        tS = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const bS = HS.useDelayedTextureLoading;
      HS.useDelayedTextureLoading = !1;
      const XS = new PS(SS, HS, null, !1, null, null, null, void 0, !0, gS, tS);
      return HS.useDelayedTextureLoading = bS, XS
    }

    function hS(SS, HS, gS) {
      const tS = fS.b.Parse((() => {
        let tS = !1;
        return SS.prefiltered && (tS = SS.prefiltered), new PS(gS + (SS.url ?? SS.name), HS, SS.extensions, !1, SS.files || null, null, null, void 0, tS, SS.forcedExtension)
      }), SS, HS);
      if (SS.boundingBoxPosition && (tS.boundingBoxPosition = xS.n.FromArray(SS.boundingBoxPosition)), SS.boundingBoxSize && (tS.boundingBoxSize = xS.n.FromArray(SS.boundingBoxSize)), SS.animations)
        for (let bS = 0; bS < SS.animations.length; bS++) {
          const HS = SS.animations[bS],
            gS = (0, uS.d)("BABYLON.Animation");
          gS && tS.animations.push(gS.Parse(HS))
        }
      return tS
    }
    QS || (QS = !0, PS.CreateFromImages = DS, PS.CreateFromPrefilteredData = wS, PS.Parse = hS, qS.i._CubeTextureParser = hS, (0, uS.f)("BABYLON.CubeTexture", PS))
  },
  41177: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => uS
    });
    var tS = gS(38687),
      bS = gS(40510),
      XS = gS(39968),
      xS = gS(39888),
      NS = gS(39877);
    let qS = !1;
    class uS extends bS.i {
      constructor(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          uS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          IS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          fS = arguments.length > 6 ? arguments[6] : void 0;
        const kS = !gS || gS._isScene;
        super(null, kS ? gS : gS?.Bj, kS ? !tS : gS, fS, uS, void 0, void 0, void 0, void 0, IS), qS || (qS = !0, xS.ThinEngine.prototype.createDynamicTexture = function(SS, HS, gS, tS) {
          const bS = new NS.e(this, 4);
          return bS.baseWidth = SS, bS.baseHeight = HS, gS && (SS = this.needPOTTextures ? (0, XS.g)(SS, this._caps.maxTextureSize) : SS, HS = this.needPOTTextures ? (0, XS.g)(HS, this._caps.maxTextureSize) : HS), bS.width = SS, bS.height = HS, bS.isReady = !1, bS.generateMipMaps = gS, bS.samplingMode = tS, this.updateTextureSamplingMode(tS, bS), this._internalTexturesCache.push(bS), bS
        }, xS.ThinEngine.prototype.updateDynamicTexture = function(SS, HS, gS) {
          let tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            bS = arguments.length > 4 ? arguments[4] : void 0,
            XS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!SS) return;
          const xS = this._gl,
            NS = xS.TEXTURE_2D,
            qS = this._bindTextureDirectly(NS, SS, !0, XS);
          this._unpackFlipY(void 0 === gS ? SS.invertY : gS), tS && xS.pixelStorei(xS.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const uS = this._getWebGLTextureType(SS.type),
            IS = this._getInternalFormat(bS || SS.format),
            fS = this._getRGBABufferInternalSizedFormat(SS.type, IS);
          xS.texImage2D(NS, 0, fS, IS, uS, HS), SS.generateMipMaps && xS.generateMipmap(NS), qS || this._bindTextureDirectly(NS, null), tS && xS.pixelStorei(xS.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), bS && (SS.format = bS), SS._dynamicTextureSource = HS, SS._premulAlpha = tS, SS.invertY = gS || !1, SS.isReady = !0
        }), this.name = SS, this.wrapU = bS.i.CLAMP_ADDRESSMODE, this.wrapV = bS.i.CLAMP_ADDRESSMODE, this._generateMipMaps = tS;
        const aS = this._getEngine();
        if (!aS) return;
        if (HS.getContext) this._canvas = HS, this._ownCanvas = !1, this._texture = aS.createDynamicTexture(this._canvas.width, this._canvas.height, tS, uS);
        else {
          this._canvas = aS.createCanvas(1, 1), this._ownCanvas = !0;
          const SS = HS;
          SS.width || 0 === SS.width ? this._texture = aS.createDynamicTexture(SS.width, SS.height, tS, uS) : this._texture = aS.createDynamicTexture(HS, HS, tS, uS)
        }
        const KS = this.getSize();
        this._canvas.width !== KS.width && (this._canvas.width = KS.width), this._canvas.height !== KS.height && (this._canvas.height = KS.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(SS) {
        this._canvas.width = SS.width, this._canvas.height = SS.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(SS.width, SS.height, this._generateMipMaps, this.samplingMode)
      }
      scale(SS) {
        const HS = this.getSize();
        HS.width *= SS, HS.height *= SS, this._recreate(HS)
      }
      scaleTo(SS, HS) {
        const gS = this.getSize();
        gS.width = SS, gS.height = HS, this._recreate(gS)
      }
      getContext() {
        return this._context
      }
      clear(SS) {
        const HS = this.getSize();
        SS && (this._context.fillStyle = SS), this._context.clearRect(0, 0, HS.width, HS.height)
      }
      update(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === SS || SS, HS, this._format || void 0, void 0, gS)
      }
      drawText(SS, HS, gS, tS, bS, XS, xS) {
        let NS = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const qS = this.getSize();
        if (XS && (this._context.fillStyle = XS, this._context.fillRect(0, 0, qS.width, qS.height)), this._context.font = tS, null === HS || void 0 === HS) {
          const gS = this._context.measureText(SS);
          HS = (qS.width - gS.width) / 2
        }
        if (null === gS || void 0 === gS) {
          const SS = parseInt(tS.replace(/\D/g, ""));
          gS = qS.height / 2 + SS / 3.65
        }
        this._context.fillStyle = bS || "", this._context.fillText(SS, HS, gS), NS && this.update(xS)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const SS = this.lL();
        if (!SS) return this;
        const HS = this.getSize(),
          gS = new uS(this.name, HS, SS, this._generateMipMaps);
        return gS.hasAlpha = this.hasAlpha, gS.level = this.level, gS.wrapU = this.wrapU, gS.wrapV = this.wrapV, gS
      }
      serialize() {
        const SS = this.lL();
        SS && !SS.isReady() && tS.b.Warn("The scene must be ready before serializing the dynamic texture");
        const HS = super.serialize();
        return uS._IsCanvasElement(this._canvas) && (HS.base64String = this._canvas.toDataURL()), HS.invertY = this._invertY, HS.samplingMode = this.samplingMode, HS
      }
      static _IsCanvasElement(SS) {
        return void 0 !== SS.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  41152: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => bS
    });
    var tS = gS(40510);
    class bS extends tS.i {
      get depth() {
        return this._depth
      }
      constructor(SS, HS, gS, bS, XS, xS) {
        let NS = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          qS = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          uS = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : tS.i.TRILINEAR_SAMPLINGMODE,
          IS = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          fS = arguments.length > 10 ? arguments[10] : void 0,
          kS = arguments.length > 11 ? arguments[11] : void 0;
        super(null, xS, !NS, qS), this.format = XS, this._texture = xS.AK().createRawTexture2DArray(SS, HS, gS, bS, XS, NS, qS, uS, null, IS, fS ?? 0, kS), this._depth = bS, this.is2DArray = !0
      }
      update(SS) {
        this.updateMipLevel(SS, 0)
      }
      updateMipLevel(SS, HS) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, SS, this._texture.format, this._texture.invertY, null, this._texture.type, HS)
      }
      static CreateRGBATexture(SS, HS, gS, tS, XS) {
        return new bS(SS, HS, gS, tS, 5, XS, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  41144: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS.e
    });
    var tS = gS(40400);
    (0, tS.i)()
  },
  40129: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS.i
    });
    var tS = gS(40131);
    (0, tS.e)()
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);