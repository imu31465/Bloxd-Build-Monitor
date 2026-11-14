export const id = 233;
export const ids = [233];
export const modules = {
  38278: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc,
      f: () => sc
    });
    var Vc = nc(37191),
      Ic = nc(38068),
      rB = nc(38251),
      uc = {};
    class sc {
      constructor(cB) {
        this.attachedToElement = !1, this.attached = {}, this.camera = cB, this.checkInputs = () => {}
      }
      add(cB) {
        const Bc = cB.getSimpleName();
        this.attached[Bc] ? Vc.c.Warn("camera input of type " + Bc + " already exists on camera") : (this.attached[Bc] = cB, cB.camera = this.camera, cB.checkInputs && (this.checkInputs = this._addCheckInputs(cB.checkInputs.bind(cB))), this.attachedToElement && cB.attachControl(this.noPreventDefault))
      }
      remove(cB) {
        for (const Bc in this.attached) {
          const nc = this.attached[Bc];
          if (nc === cB) return nc.detachControl(), nc.camera = null, delete this.attached[Bc], void this.rebuildInputCheck()
        }
      }
      removeByType(cB) {
        for (const Bc in this.attached) {
          const nc = this.attached[Bc];
          nc.getClassName() === cB && (nc.detachControl(), nc.camera = null, delete this.attached[Bc], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(cB) {
        const Bc = this.checkInputs;
        return () => {
          Bc(), cB()
        }
      }
      attachInput(cB) {
        this.attachedToElement && cB.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          cB = !rB.e.ForceAttachControlToAlwaysPreventDefault && cB, this.attachedToElement = !0, this.noPreventDefault = cB;
          for (const Bc in this.attached) this.attached[Bc].attachControl(cB)
        }
      }
      detachElement() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Bc in this.attached) this.attached[Bc].detachControl(), cB && (this.attached[Bc].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const cB in this.attached) {
          const Bc = this.attached[cB];
          Bc.checkInputs && (this.checkInputs = this._addCheckInputs(Bc.checkInputs.bind(Bc)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(cB) {
        const Bc = {};
        for (const nc in this.attached) {
          const cB = this.attached[nc],
            Vc = Ic.e.Serialize(cB);
          Bc[cB.getClassName()] = Vc
        }
        cB.inputsmgr = Bc
      }
      parse(cB) {
        const Bc = cB.inputsmgr;
        if (Bc) {
          this.clear();
          for (const cB in Bc) {
            const nc = uc[cB];
            if (nc) {
              const Vc = Bc[cB],
                rB = Ic.e.Parse((() => new nc), Vc, null);
              this.add(rB)
            }
          }
        } else
          for (const nc in this.attached) {
            const Bc = uc[this.attached[nc].getClassName()];
            if (Bc) {
              const Vc = Ic.e.Parse((() => new Bc), cB, null);
              this.remove(this.attached[nc]), this.add(Vc)
            }
          }
      }
    }
  },
  39216: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => zB
    });
    var Vc = nc(38035),
      Ic = nc(38043),
      rB = nc(37963),
      uc = nc(35756),
      sc = nc(38033),
      Mc = nc(38493),
      Pc = nc(35799),
      qB = nc(35783),
      Oc = nc(38068),
      Tc = nc(37895),
      fc = nc(37191),
      mB = nc(38090),
      ec = nc(36472),
      tB = nc(38135);
    var Sc = nc(37965);
    let yB = !1;
    let zB = (() => {
        var cB;
        let Bc, nc, Pc, zB, pc, hc, aB, lc, Yc, Lc = sc.b,
          gB = [],
          Uc = [],
          bB = [],
          Zc = [],
          Qc = [],
          Cc = [],
          vB = [],
          Dc = [],
          Nc = [],
          Ec = [],
          oc = [],
          Wc = [],
          wc = [],
          kB = [],
          Xc = [];
        return cB = class extends Lc {
          set boundingBoxSize(cB) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(cB)) return;
            this._boundingBoxSize = cB;
            const Bc = this.knc();
            Bc && Bc.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(cB) {
            this._rotationY = cB, this.setReflectionTextureMatrix(uc.d.RotationY(this._rotationY))
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
          constructor(cB, Bc) {
            let nc, Ic = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              rB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              sc = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Pc = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Oc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              zB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              pc = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              hc = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              aB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              lc = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              Yc = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              Lc = arguments.length > 13 ? arguments[13] : void 0,
              Hc = arguments.length > 14 ? arguments[14] : void 0;
            super(Bc), this._delayedOnLoad = (0, Vc.k)(this, gB), this.onLoadObservable = new qB.c, this.url = (0, Vc.k)(this, Uc, void 0), this.boundingBoxPosition = ((0, Vc.k)(this, bB), (0, Vc.k)(this, Zc, uc.p.Zero())), this._boundingBoxSize = (0, Vc.k)(this, Qc), this._rotationY = 0, this._files = (0, Vc.k)(this, Cc, null), this._forcedExtension = ((0, Vc.k)(this, vB), (0, Vc.k)(this, Dc, null)), this._extensions = ((0, Vc.k)(this, Nc), (0, Vc.k)(this, Ec, null)), this._textureMatrix = ((0, Vc.k)(this, oc), (0, Vc.k)(this, Wc, void 0)), this._textureMatrixRefraction = ((0, Vc.k)(this, wc), (0, Vc.k)(this, kB, new uc.d)), this._format = (0, Vc.k)(this, Xc), this._buffer = null, yB || (yB = !0, Sc.e.prototype._partialLoadFile = function(cB, Bc, nc, Vc) {
              let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(cB, (cB => {
                nc[Bc] = cB, nc._internalCount++, 6 === nc._internalCount && Vc(nc)
              }), void 0, void 0, !0, ((cB, Bc) => {
                Ic && cB && Ic(cB.status + " " + cB.statusText, Bc)
              }))
            }, Sc.e.prototype._cascadeLoadFiles = function(cB, Bc, nc) {
              let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const Ic = [];
              Ic._internalCount = 0;
              for (let rB = 0; rB < 6; rB++) this._partialLoadFile(nc[rB], rB, Ic, Bc, Vc)
            }, Sc.e.prototype._cascadeLoadImgs = function(cB, Bc, nc, Vc) {
              let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                rB = arguments.length > 5 ? arguments[5] : void 0;
              const uc = [];
              uc._internalCount = 0;
              for (let sc = 0; sc < 6; sc++) this._partialLoadImg(Vc[sc], sc, uc, cB, Bc, nc, Ic, rB)
            }, Sc.e.prototype._partialLoadImg = function(cB, Bc, nc, Vc, Ic, rB) {
              let uc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                sc = arguments.length > 7 ? arguments[7] : void 0;
              const Mc = (0, ec.d)();
              (0, mB.p)(cB, (cB => {
                nc[Bc] = cB, nc._internalCount++, Vc && Vc.removePendingData(Mc), 6 === nc._internalCount && rB && rB(Ic, nc)
              }), ((cB, Bc) => {
                Vc && Vc.removePendingData(Mc), uc && uc(cB, Bc)
              }), Vc ? Vc.offlineProvider : null, sc), Vc && Vc.addPendingData(Mc)
            }, Sc.e.prototype.createCubeTextureBase = function(cB, Bc, nc, Vc) {
              let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                uc = arguments.length > 6 ? arguments[6] : void 0,
                sc = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                Mc = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                Pc = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                qB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                Oc = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                mB = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                ec = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                Sc = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                yB = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const zB = Oc || new Tc.e(this, 7);
              zB.isCube = !0, zB.url = cB, zB.generateMipMaps = !Vc, zB._lodGenerationScale = Pc, zB._lodGenerationOffset = qB, zB._useSRGBBuffer = !!Sc && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!Vc), zB !== Oc && (zB.label = cB.substring(0, 60)), this._doNotHandleContextLost || (zB._extension = sc, zB._files = nc, zB._buffer = yB);
              const pc = cB;
              this._transformTextureUrl && !Oc && (cB = this._transformTextureUrl(cB));
              const hc = sc ?? function(cB) {
                  const Bc = cB.split("?")[0],
                    nc = Bc.lastIndexOf(".");
                  return nc > -1 ? Bc.substring(nc).toLowerCase() : ""
                }(cB),
                aB = (0, tB.b)(hc),
                lc = (cB, Bc) => {
                  zB.dispose(), rB ? rB(cB, Bc) : cB && fc.c.Warn(cB)
                },
                Yc = (rB, Oc) => {
                  cB === pc ? rB && lc(rB.status + " " + rB.statusText, Oc) : (fc.c.Warn(`Failed to load ${cB}, falling back to the ${pc}`), this.createCubeTextureBase(pc, Bc, nc, !!Vc, Ic, lc, uc, sc, Mc, Pc, qB, zB, mB, ec, Sc, yB))
                };
              if (aB) aB.then((Vc => {
                const rB = cB => {
                  mB && mB(zB, cB), Vc.loadCubeData(cB, zB, Mc, Ic, ((cB, Bc) => {
                    lc(cB, Bc)
                  }))
                };
                yB ? rB(yB) : nc && 6 === nc.length ? Vc.supportCascades ? this._cascadeLoadFiles(Bc, (cB => rB(cB.map((cB => new Uint8Array(cB))))), nc, lc) : lc("Textures type does not support cascades.") : this._loadFile(cB, (cB => rB(new Uint8Array(cB))), void 0, Bc ? Bc.offlineProvider || null : void 0, !0, Yc)
              }));
              else {
                if (!nc || 0 === nc.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(Bc, zB, ((cB, Bc) => {
                  ec && ec(cB, Bc)
                }), nc, lc)
              }
              return this._internalTexturesCache.push(zB), zB
            }), this.name = cB, this.url = cB, this._noMipmap = rB, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = uc.d.Identity(), this.coordinatesMode = Mc.e.CUBIC_MODE;
            let Fc = null;
            null === Ic || Array.isArray(Ic) ? (this._noMipmap = rB, this._format = zB, this._createPolynomials = aB, nc = Ic, this._loaderOptions = Lc, this._useSRGBBuffer = Hc, this._lodScale = lc, this._lodOffset = Yc) : (nc = Ic.extensions ?? null, this._noMipmap = Ic.noMipmap ?? !1, sc = Ic.files ?? null, Fc = Ic.buffer ?? null, this._format = Ic.format ?? 5, pc = Ic.prefiltered ?? !1, hc = Ic.forcedExtension ?? null, this._createPolynomials = Ic.createPolynomials ?? !1, this._lodScale = Ic.lodScale ?? .8, this._lodOffset = Ic.lodOffset ?? 0, this._loaderOptions = Ic.loaderOptions, this._useSRGBBuffer = Ic.useSRGBBuffer, this._sphericalPolynomialTargetSize = Ic.sphericalPolynomialTargetSize ?? 0, Pc = Ic.onLoad ?? null, Oc = Ic.onError ?? null), (cB || sc) && this.updateURL(cB, hc, Pc, pc, Oc, nc, this.knc()?.useDelayedTextureLoading, sc, Fc)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(cB) {
            let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              uc = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              sc = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Mc = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = cB), this.url = cB, Bc && (this._forcedExtension = Bc);
            const Pc = cB.lastIndexOf("."),
              qB = Bc || (Pc > -1 ? cB.substring(Pc).toLowerCase() : ""),
              Oc = 0 === qB.indexOf(".dds"),
              Tc = 0 === qB.indexOf(".env"),
              fc = 0 === qB.indexOf(".basis");
            if (Tc ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = Vc, Vc && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), sc) this._files = sc;
            else if (fc || Tc || Oc || rB || (rB = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, rB) {
              for (let Bc = 0; Bc < rB.length; Bc++) this._files.push(cB + rB[Bc]);
              this._extensions = rB
            }
            this._buffer = Mc, uc ? (this.delayLoadState = 4, this._delayedOnLoad = nc, this._delayedOnError = Ic) : this._loadTexture(nc, Ic)
          }
          delayLoad(cB) {
            4 === this.delayLoadState && (cB && (this._forcedExtension = cB), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(cB) {
            if (cB.updateFlag === this._textureMatrix.updateFlag) return;
            if (cB.isIdentity() !== this._textureMatrix.isIdentity() && this.knc()?.markAllMaterialsAsDirty(1, (cB => -1 !== cB.getActiveTextures().indexOf(this))), this._textureMatrix = cB, !this.knc()?.useRightHandedSystem) return;
            const Bc = uc.i.KV[0],
              nc = uc.i.Quaternion[0],
              Vc = uc.i.KV[1];
            this._textureMatrix.decompose(Bc, nc, Vc), nc.z *= -1, nc.w *= -1, uc.d.ComposeToRef(Bc, nc, Vc, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.knc()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const nc = this.knc(),
              Vc = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const Ic = () => {
                this.onLoadObservable.notifyObservers(this), Vc && (Vc.dispose(), this.knc()?.markAllMaterialsAsDirty(1)), cB && cB()
              },
              uc = (cB, nc) => {
                this._loadingError = !0, this._errorObject = {
                  message: cB,
                  exception: nc
                }, Bc && Bc(cB, nc), Mc.e.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? rB.e.SetImmediate((() => Ic())) : this._texture.onLoadedObservable.add((() => Ic())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, nc, this._lodScale, this._lodOffset, cB, uc, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, nc, this._files, this._noMipmap, cB, uc, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let Bc = 0;
            const nc = this.irradianceTexture,
              Vc = Oc.e.Clone((() => {
                const nc = new cB(this.url, this.knc() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return Bc = nc.uniqueId, nc
              }), this);
            return Vc.uniqueId = Bc, nc && !this.irradianceTexture && (this.irradianceTexture = nc), Vc
          }
        }, (() => {
          const rB = "function" === typeof Symbol && Symbol.metadata ? Object.create(Lc[Symbol.metadata] ?? null) : void 0;
          Bc = [(0, Ic.M)()], nc = [(0, Ic.L)()], Pc = [(0, Ic.L)()], zB = [(0, Ic.M)("rotationY")], pc = [(0, Ic.M)("files")], hc = [(0, Ic.M)("forcedExtension")], aB = [(0, Ic.M)("extensions")], lc = [(0, Ic.w)("textureMatrix")], Yc = [(0, Ic.w)("textureMatrixRefraction")], (0, Vc.g)(cB, null, Pc, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: cB => "boundingBoxSize" in cB,
              get: cB => cB.boundingBoxSize
            },
            metadata: rB
          }, null, gB), (0, Vc.g)(cB, null, zB, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: cB => "rotationY" in cB,
              set: (cB, Bc) => {
                cB.rotationY = Bc
              }
            },
            metadata: rB
          }, null, gB), (0, Vc.g)(null, null, Bc, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: cB => "url" in cB,
              get: cB => cB.url,
              set: (cB, Bc) => {
                cB.url = Bc
              }
            },
            metadata: rB
          }, Uc, bB), (0, Vc.g)(null, null, nc, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: cB => "boundingBoxPosition" in cB,
              get: cB => cB.boundingBoxPosition,
              set: (cB, Bc) => {
                cB.boundingBoxPosition = Bc
              }
            },
            metadata: rB
          }, Zc, Qc), (0, Vc.g)(null, null, pc, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: cB => "_files" in cB,
              get: cB => cB._files,
              set: (cB, Bc) => {
                cB._files = Bc
              }
            },
            metadata: rB
          }, Cc, vB), (0, Vc.g)(null, null, hc, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: cB => "_forcedExtension" in cB,
              get: cB => cB._forcedExtension,
              set: (cB, Bc) => {
                cB._forcedExtension = Bc
              }
            },
            metadata: rB
          }, Dc, Nc), (0, Vc.g)(null, null, aB, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: cB => "_extensions" in cB,
              get: cB => cB._extensions,
              set: (cB, Bc) => {
                cB._extensions = Bc
              }
            },
            metadata: rB
          }, Ec, oc), (0, Vc.g)(null, null, lc, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: cB => "_textureMatrix" in cB,
              get: cB => cB._textureMatrix,
              set: (cB, Bc) => {
                cB._textureMatrix = Bc
              }
            },
            metadata: rB
          }, Wc, wc), (0, Vc.g)(null, null, Yc, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: cB => "_textureMatrixRefraction" in cB,
              get: cB => cB._textureMatrixRefraction,
              set: (cB, Bc) => {
                cB._textureMatrixRefraction = Bc
              }
            },
            metadata: rB
          }, kB, Xc), rB && Object.defineProperty(cB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rB
          })
        })(), cB
      })(),
      pc = !1;

    function hc(cB, Bc, nc) {
      let Vc = "";
      for (const Ic of cB) Vc += Ic;
      return new zB(Vc, Bc, null, nc, cB)
    }

    function aB(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Vc = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Ic = Bc.useDelayedTextureLoading;
      Bc.useDelayedTextureLoading = !1;
      const rB = new zB(cB, Bc, null, !1, null, null, null, void 0, !0, nc, Vc);
      return Bc.useDelayedTextureLoading = Ic, rB
    }

    function lc(cB, Bc, nc) {
      const Vc = Oc.e.Parse((() => {
        let Vc = !1;
        return cB.prefiltered && (Vc = cB.prefiltered), new zB(nc + (cB.url ?? cB.name), Bc, cB.extensions, !1, cB.files || null, null, null, void 0, Vc, cB.forcedExtension)
      }), cB, Bc);
      if (cB.boundingBoxPosition && (Vc.boundingBoxPosition = uc.p.FromArray(cB.boundingBoxPosition)), cB.boundingBoxSize && (Vc.boundingBoxSize = uc.p.FromArray(cB.boundingBoxSize)), cB.animations)
        for (let Ic = 0; Ic < cB.animations.length; Ic++) {
          const Bc = cB.animations[Ic],
            nc = (0, Pc.b)("BABYLON.Animation");
          nc && Vc.animations.push(nc.Parse(Bc))
        }
      return Vc
    }
    pc || (pc = !0, zB.CreateFromImages = hc, zB.CreateFromPrefilteredData = aB, zB.Parse = lc, Mc.e._CubeTextureParser = lc, (0, Pc.d)("BABYLON.CubeTexture", zB))
  },
  39251: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Pc
    });
    var Vc = nc(37191),
      Ic = nc(38493),
      rB = nc(37992),
      uc = nc(37911),
      sc = nc(37895);
    let Mc = !1;
    class Pc extends Ic.e {
      constructor(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Pc = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          qB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          Oc = arguments.length > 6 ? arguments[6] : void 0;
        const Tc = !nc || nc._isScene;
        super(null, Tc ? nc : nc?.Ir, Tc ? !Vc : nc, Oc, Pc, void 0, void 0, void 0, void 0, qB), Mc || (Mc = !0, uc.ThinEngine.prototype.createDynamicTexture = function(cB, Bc, nc, Vc) {
          const Ic = new sc.e(this, 4);
          return Ic.baseWidth = cB, Ic.baseHeight = Bc, nc && (cB = this.needPOTTextures ? (0, rB.f)(cB, this._caps.maxTextureSize) : cB, Bc = this.needPOTTextures ? (0, rB.f)(Bc, this._caps.maxTextureSize) : Bc), Ic.width = cB, Ic.height = Bc, Ic.isReady = !1, Ic.generateMipMaps = nc, Ic.samplingMode = Vc, this.updateTextureSamplingMode(Vc, Ic), this._internalTexturesCache.push(Ic), Ic
        }, uc.ThinEngine.prototype.updateDynamicTexture = function(cB, Bc, nc) {
          let Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Ic = arguments.length > 4 ? arguments[4] : void 0,
            rB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!cB) return;
          const uc = this._gl,
            sc = uc.TEXTURE_2D,
            Mc = this._bindTextureDirectly(sc, cB, !0, rB);
          this._unpackFlipY(void 0 === nc ? cB.invertY : nc), Vc && uc.pixelStorei(uc.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const Pc = this._getWebGLTextureType(cB.type),
            qB = this._getInternalFormat(Ic || cB.format),
            Oc = this._getRGBABufferInternalSizedFormat(cB.type, qB);
          uc.texImage2D(sc, 0, Oc, qB, Pc, Bc), cB.generateMipMaps && uc.generateMipmap(sc), Mc || this._bindTextureDirectly(sc, null), Vc && uc.pixelStorei(uc.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), Ic && (cB.format = Ic), cB._dynamicTextureSource = Bc, cB._premulAlpha = Vc, cB.invertY = nc || !1, cB.isReady = !0
        }), this.name = cB, this.wrapU = Ic.e.CLAMP_ADDRESSMODE, this.wrapV = Ic.e.CLAMP_ADDRESSMODE, this._generateMipMaps = Vc;
        const fc = this._getEngine();
        if (!fc) return;
        if (Bc.getContext) this._canvas = Bc, this._ownCanvas = !1, this._texture = fc.createDynamicTexture(this._canvas.width, this._canvas.height, Vc, Pc);
        else {
          this._canvas = fc.createCanvas(1, 1), this._ownCanvas = !0;
          const cB = Bc;
          cB.width || 0 === cB.width ? this._texture = fc.createDynamicTexture(cB.width, cB.height, Vc, Pc) : this._texture = fc.createDynamicTexture(Bc, Bc, Vc, Pc)
        }
        const mB = this.getSize();
        this._canvas.width !== mB.width && (this._canvas.width = mB.width), this._canvas.height !== mB.height && (this._canvas.height = mB.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(cB) {
        this._canvas.width = cB.width, this._canvas.height = cB.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(cB.width, cB.height, this._generateMipMaps, this.samplingMode)
      }
      scale(cB) {
        const Bc = this.getSize();
        Bc.width *= cB, Bc.height *= cB, this._recreate(Bc)
      }
      scaleTo(cB, Bc) {
        const nc = this.getSize();
        nc.width = cB, nc.height = Bc, this._recreate(nc)
      }
      getContext() {
        return this._context
      }
      clear(cB) {
        const Bc = this.getSize();
        cB && (this._context.fillStyle = cB), this._context.clearRect(0, 0, Bc.width, Bc.height)
      }
      update(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === cB || cB, Bc, this._format || void 0, void 0, nc)
      }
      drawText(cB, Bc, nc, Vc, Ic, rB, uc) {
        let sc = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const Mc = this.getSize();
        if (rB && (this._context.fillStyle = rB, this._context.fillRect(0, 0, Mc.width, Mc.height)), this._context.font = Vc, null === Bc || void 0 === Bc) {
          const nc = this._context.measureText(cB);
          Bc = (Mc.width - nc.width) / 2
        }
        if (null === nc || void 0 === nc) {
          const cB = parseInt(Vc.replace(/\D/g, ""));
          nc = Mc.height / 2 + cB / 3.65
        }
        this._context.fillStyle = Ic || "", this._context.fillText(cB, Bc, nc), sc && this.update(uc)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const cB = this.knc();
        if (!cB) return this;
        const Bc = this.getSize(),
          nc = new Pc(this.name, Bc, cB, this._generateMipMaps);
        return nc.hasAlpha = this.hasAlpha, nc.level = this.level, nc.wrapU = this.wrapU, nc.wrapV = this.wrapV, nc
      }
      serialize() {
        const cB = this.knc();
        cB && !cB.isReady() && Vc.c.Warn("The scene must be ready before serializing the dynamic texture");
        const Bc = super.serialize();
        return Pc._IsCanvasElement(this._canvas) && (Bc.base64String = this._canvas.toDataURL()), Bc.invertY = this._invertY, Bc.samplingMode = this.samplingMode, Bc
      }
      static _IsCanvasElement(cB) {
        return void 0 !== cB.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  39227: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Ic
    });
    var Vc = nc(38493);
    class Ic extends Vc.e {
      get depth() {
        return this._depth
      }
      constructor(cB, Bc, nc, Ic, rB, uc) {
        let sc = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Mc = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          Pc = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Vc.e.TRILINEAR_SAMPLINGMODE,
          qB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Oc = arguments.length > 10 ? arguments[10] : void 0,
          Tc = arguments.length > 11 ? arguments[11] : void 0;
        super(null, uc, !sc, Mc), this.format = rB, this._texture = uc.RV().createRawTexture2DArray(cB, Bc, nc, Ic, rB, sc, Mc, Pc, null, qB, Oc ?? 0, Tc), this._depth = Ic, this.is2DArray = !0
      }
      update(cB) {
        this.updateMipLevel(cB, 0)
      }
      updateMipLevel(cB, Bc) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, cB, this._texture.format, this._texture.invertY, null, this._texture.type, Bc)
      }
      static CreateRGBATexture(cB, Bc, nc, Vc, rB) {
        return new Ic(cB, Bc, nc, Vc, 5, rB, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  39220: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Vc.c
    });
    var Vc = nc(38379);
    (0, Vc.d)()
  },
  38137: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc.h
    });
    var Vc = nc(38141);
    (0, Vc.d)()
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);