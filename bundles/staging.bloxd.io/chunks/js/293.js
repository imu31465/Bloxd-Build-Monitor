export const id = 293;
export const ids = [293];
export const modules = {
  42080: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr,
      f: () => Ir
    });
    var Zr = Qr(40246),
      Wr = Qr(41889),
      ar = Qr(42057),
      jr = {};
    class Ir {
      constructor(rr) {
        this.attachedToElement = !1, this.attached = {}, this.camera = rr, this.checkInputs = () => {}
      }
      add(rr) {
        const Sr = rr.getSimpleName();
        this.attached[Sr] ? Zr.c.Warn("camera input of type " + Sr + " already exists on camera") : (this.attached[Sr] = rr, rr.camera = this.camera, rr.checkInputs && (this.checkInputs = this._addCheckInputs(rr.checkInputs.bind(rr))), this.attachedToElement && rr.attachControl(this.noPreventDefault))
      }
      remove(rr) {
        for (const Sr in this.attached) {
          const Qr = this.attached[Sr];
          if (Qr === rr) return Qr.detachControl(), Qr.camera = null, delete this.attached[Sr], void this.rebuildInputCheck()
        }
      }
      removeByType(rr) {
        for (const Sr in this.attached) {
          const Qr = this.attached[Sr];
          Qr.getClassName() === rr && (Qr.detachControl(), Qr.camera = null, delete this.attached[Sr], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(rr) {
        const Sr = this.checkInputs;
        return () => {
          Sr(), rr()
        }
      }
      attachInput(rr) {
        this.attachedToElement && rr.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          rr = !ar.d.ForceAttachControlToAlwaysPreventDefault && rr, this.attachedToElement = !0, this.noPreventDefault = rr;
          for (const Sr in this.attached) this.attached[Sr].attachControl(rr)
        }
      }
      detachElement() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Sr in this.attached) this.attached[Sr].detachControl(), rr && (this.attached[Sr].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const rr in this.attached) {
          const Sr = this.attached[rr];
          Sr.checkInputs && (this.checkInputs = this._addCheckInputs(Sr.checkInputs.bind(Sr)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(rr) {
        const Sr = {};
        for (const Qr in this.attached) {
          const rr = this.attached[Qr],
            Zr = Wr.e.Serialize(rr);
          Sr[rr.getClassName()] = Zr
        }
        rr.inputsmgr = Sr
      }
      parse(rr) {
        const Sr = rr.inputsmgr;
        if (Sr) {
          this.clear();
          for (const rr in Sr) {
            const Qr = jr[rr];
            if (Qr) {
              const Zr = Sr[rr],
                ar = Wr.e.Parse((() => new Qr), Zr, null);
              this.add(ar)
            }
          }
        } else
          for (const Qr in this.attached) {
            const Sr = jr[this.attached[Qr].getClassName()];
            if (Sr) {
              const Zr = Wr.e.Parse((() => new Sr), rr, null);
              this.remove(this.attached[Qr]), this.add(Zr)
            }
          }
      }
    }
  },
  43001: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => nr
    });
    var Zr = Qr(41872),
      Wr = Qr(41875),
      ar = Qr(41781),
      jr = Qr(38560),
      Ir = Qr(41865),
      fr = Qr(42310),
      Er = Qr(38609),
      pr = Qr(38595),
      xr = Qr(41889),
      mr = Qr(41731),
      Nr = Qr(40246),
      Ur = Qr(41898),
      tr = Qr(39405),
      hr = Qr(41928);
    var zr = Qr(41784);
    let Yr = !1;
    let nr = (() => {
        var rr;
        let Sr, Qr, Er, nr, er, Kr, yr, Br, Tr, vr = Ir.b,
          Or = [],
          Lr = [],
          lr = [],
          Xr = [],
          Pr = [],
          Hr = [],
          qr = [],
          Rr = [],
          gr = [],
          Cr = [],
          Mr = [],
          Gr = [],
          kr = [],
          Ar = [],
          Vr = [];
        return rr = class extends vr {
          set boundingBoxSize(rr) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(rr)) return;
            this._boundingBoxSize = rr;
            const Sr = this.eC();
            Sr && Sr.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(rr) {
            this._rotationY = rr, this.setReflectionTextureMatrix(jr.d.RotationY(this._rotationY))
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
          constructor(rr, Sr) {
            let Qr, Wr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              ar = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Ir = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Er = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              xr = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              nr = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              er = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              Kr = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              yr = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              Br = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              Tr = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              vr = arguments.length > 13 ? arguments[13] : void 0,
              ir = arguments.length > 14 ? arguments[14] : void 0;
            super(Sr), this._delayedOnLoad = (0, Zr.m)(this, Or), this.onLoadObservable = new pr.d, this.url = (0, Zr.m)(this, Lr, void 0), this.boundingBoxPosition = ((0, Zr.m)(this, lr), (0, Zr.m)(this, Xr, jr.u.Zero())), this._boundingBoxSize = (0, Zr.m)(this, Pr), this._rotationY = 0, this._files = (0, Zr.m)(this, Hr, null), this._forcedExtension = ((0, Zr.m)(this, qr), (0, Zr.m)(this, Rr, null)), this._extensions = ((0, Zr.m)(this, gr), (0, Zr.m)(this, Cr, null)), this._textureMatrix = ((0, Zr.m)(this, Mr), (0, Zr.m)(this, Gr, void 0)), this._textureMatrixRefraction = ((0, Zr.m)(this, kr), (0, Zr.m)(this, Ar, new jr.d)), this._format = (0, Zr.m)(this, Vr), this._buffer = null, Yr || (Yr = !0, zr.e.prototype._partialLoadFile = function(rr, Sr, Qr, Zr) {
              let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(rr, (rr => {
                Qr[Sr] = rr, Qr._internalCount++, 6 === Qr._internalCount && Zr(Qr)
              }), void 0, void 0, !0, ((rr, Sr) => {
                Wr && rr && Wr(rr.status + " " + rr.statusText, Sr)
              }))
            }, zr.e.prototype._cascadeLoadFiles = function(rr, Sr, Qr) {
              let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const Wr = [];
              Wr._internalCount = 0;
              for (let ar = 0; ar < 6; ar++) this._partialLoadFile(Qr[ar], ar, Wr, Sr, Zr)
            }, zr.e.prototype._cascadeLoadImgs = function(rr, Sr, Qr, Zr) {
              let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                ar = arguments.length > 5 ? arguments[5] : void 0;
              const jr = [];
              jr._internalCount = 0;
              for (let Ir = 0; Ir < 6; Ir++) this._partialLoadImg(Zr[Ir], Ir, jr, rr, Sr, Qr, Wr, ar)
            }, zr.e.prototype._partialLoadImg = function(rr, Sr, Qr, Zr, Wr, ar) {
              let jr = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                Ir = arguments.length > 7 ? arguments[7] : void 0;
              const fr = (0, tr.b)();
              (0, Ur.q)(rr, (rr => {
                Qr[Sr] = rr, Qr._internalCount++, Zr && Zr.removePendingData(fr), 6 === Qr._internalCount && ar && ar(Wr, Qr)
              }), ((rr, Sr) => {
                Zr && Zr.removePendingData(fr), jr && jr(rr, Sr)
              }), Zr ? Zr.offlineProvider : null, Ir), Zr && Zr.addPendingData(fr)
            }, zr.e.prototype.createCubeTextureBase = function(rr, Sr, Qr, Zr) {
              let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                jr = arguments.length > 6 ? arguments[6] : void 0,
                Ir = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                fr = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                Er = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                pr = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                xr = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                Ur = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                tr = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                zr = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                Yr = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const nr = xr || new mr.b(this, 7);
              nr.isCube = !0, nr.url = rr, nr.generateMipMaps = !Zr, nr._lodGenerationScale = Er, nr._lodGenerationOffset = pr, nr._useSRGBBuffer = !!zr && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!Zr), nr !== xr && (nr.label = rr.substring(0, 60)), this._doNotHandleContextLost || (nr._extension = Ir, nr._files = Qr, nr._buffer = Yr);
              const er = rr;
              this._transformTextureUrl && !xr && (rr = this._transformTextureUrl(rr));
              const Kr = Ir ?? function(rr) {
                  const Sr = rr.split("?")[0],
                    Qr = Sr.lastIndexOf(".");
                  return Qr > -1 ? Sr.substring(Qr).toLowerCase() : ""
                }(rr),
                yr = (0, hr.e)(Kr),
                Br = (rr, Sr) => {
                  nr.dispose(), ar ? ar(rr, Sr) : rr && Nr.c.Warn(rr)
                },
                Tr = (ar, xr) => {
                  rr === er ? ar && Br(ar.status + " " + ar.statusText, xr) : (Nr.c.Warn(`Failed to load ${rr}, falling back to the ${er}`), this.createCubeTextureBase(er, Sr, Qr, !!Zr, Wr, Br, jr, Ir, fr, Er, pr, nr, Ur, tr, zr, Yr))
                };
              if (yr) yr.then((Zr => {
                const ar = rr => {
                  Ur && Ur(nr, rr), Zr.loadCubeData(rr, nr, fr, Wr, ((rr, Sr) => {
                    Br(rr, Sr)
                  }))
                };
                Yr ? ar(Yr) : Qr && 6 === Qr.length ? Zr.supportCascades ? this._cascadeLoadFiles(Sr, (rr => ar(rr.map((rr => new Uint8Array(rr))))), Qr, Br) : Br("Textures type does not support cascades.") : this._loadFile(rr, (rr => ar(new Uint8Array(rr))), void 0, Sr ? Sr.offlineProvider || null : void 0, !0, Tr)
              }));
              else {
                if (!Qr || 0 === Qr.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(Sr, nr, ((rr, Sr) => {
                  tr && tr(rr, Sr)
                }), Qr, Br)
              }
              return this._internalTexturesCache.push(nr), nr
            }), this.name = rr, this.url = rr, this._noMipmap = ar, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = jr.d.Identity(), this.coordinatesMode = fr.f.CUBIC_MODE;
            let wr = null;
            null === Wr || Array.isArray(Wr) ? (this._noMipmap = ar, this._format = nr, this._createPolynomials = yr, Qr = Wr, this._loaderOptions = vr, this._useSRGBBuffer = ir, this._lodScale = Br, this._lodOffset = Tr) : (Qr = Wr.extensions ?? null, this._noMipmap = Wr.noMipmap ?? !1, Ir = Wr.files ?? null, wr = Wr.buffer ?? null, this._format = Wr.format ?? 5, er = Wr.prefiltered ?? !1, Kr = Wr.forcedExtension ?? null, this._createPolynomials = Wr.createPolynomials ?? !1, this._lodScale = Wr.lodScale ?? .8, this._lodOffset = Wr.lodOffset ?? 0, this._loaderOptions = Wr.loaderOptions, this._useSRGBBuffer = Wr.useSRGBBuffer, this._sphericalPolynomialTargetSize = Wr.sphericalPolynomialTargetSize ?? 0, Er = Wr.onLoad ?? null, xr = Wr.onError ?? null), (rr || Ir) && this.updateURL(rr, Kr, Er, er, xr, Qr, this.eC()?.useDelayedTextureLoading, Ir, wr)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              jr = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              Ir = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              fr = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = rr), this.url = rr, Sr && (this._forcedExtension = Sr);
            const Er = rr.lastIndexOf("."),
              pr = Sr || (Er > -1 ? rr.substring(Er).toLowerCase() : ""),
              xr = 0 === pr.indexOf(".dds"),
              mr = 0 === pr.indexOf(".env"),
              Nr = 0 === pr.indexOf(".basis");
            if (mr ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = Zr, Zr && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), Ir) this._files = Ir;
            else if (Nr || mr || xr || ar || (ar = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, ar) {
              for (let Sr = 0; Sr < ar.length; Sr++) this._files.push(rr + ar[Sr]);
              this._extensions = ar
            }
            this._buffer = fr, jr ? (this.delayLoadState = 4, this._delayedOnLoad = Qr, this._delayedOnError = Wr) : this._loadTexture(Qr, Wr)
          }
          delayLoad(rr) {
            4 === this.delayLoadState && (rr && (this._forcedExtension = rr), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(rr) {
            if (rr.updateFlag === this._textureMatrix.updateFlag) return;
            if (rr.isIdentity() !== this._textureMatrix.isIdentity() && this.eC()?.markAllMaterialsAsDirty(1, (rr => -1 !== rr.getActiveTextures().indexOf(this))), this._textureMatrix = rr, !this.eC()?.useRightHandedSystem) return;
            const Sr = jr.n.kU[0],
              Qr = jr.n.Quaternion[0],
              Zr = jr.n.kU[1];
            this._textureMatrix.decompose(Sr, Qr, Zr), Qr.z *= -1, Qr.w *= -1, jr.d.ComposeToRef(Sr, Qr, Zr, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.eC()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const Qr = this.eC(),
              Zr = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const Wr = () => {
                this.onLoadObservable.notifyObservers(this), Zr && (Zr.dispose(), this.eC()?.markAllMaterialsAsDirty(1)), rr && rr()
              },
              jr = (rr, Qr) => {
                this._loadingError = !0, this._errorObject = {
                  message: rr,
                  exception: Qr
                }, Sr && Sr(rr, Qr), fr.f.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? ar.d.SetImmediate((() => Wr())) : this._texture.onLoadedObservable.add((() => Wr())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, Qr, this._lodScale, this._lodOffset, rr, jr, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, Qr, this._files, this._noMipmap, rr, jr, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let Sr = 0;
            const Qr = this.irradianceTexture,
              Zr = xr.e.Clone((() => {
                const Qr = new rr(this.url, this.eC() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return Sr = Qr.uniqueId, Qr
              }), this);
            return Zr.uniqueId = Sr, Qr && !this.irradianceTexture && (this.irradianceTexture = Qr), Zr
          }
        }, (() => {
          const ar = "function" === typeof Symbol && Symbol.metadata ? Object.create(vr[Symbol.metadata] ?? null) : void 0;
          Sr = [(0, Wr.G)()], Qr = [(0, Wr.C)()], Er = [(0, Wr.C)()], nr = [(0, Wr.G)("rotationY")], er = [(0, Wr.G)("files")], Kr = [(0, Wr.G)("forcedExtension")], yr = [(0, Wr.G)("extensions")], Br = [(0, Wr.s)("textureMatrix")], Tr = [(0, Wr.s)("textureMatrixRefraction")], (0, Zr.k)(rr, null, Er, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: rr => "boundingBoxSize" in rr,
              get: rr => rr.boundingBoxSize
            },
            metadata: ar
          }, null, Or), (0, Zr.k)(rr, null, nr, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: rr => "rotationY" in rr,
              set: (rr, Sr) => {
                rr.rotationY = Sr
              }
            },
            metadata: ar
          }, null, Or), (0, Zr.k)(null, null, Sr, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: rr => "url" in rr,
              get: rr => rr.url,
              set: (rr, Sr) => {
                rr.url = Sr
              }
            },
            metadata: ar
          }, Lr, lr), (0, Zr.k)(null, null, Qr, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: rr => "boundingBoxPosition" in rr,
              get: rr => rr.boundingBoxPosition,
              set: (rr, Sr) => {
                rr.boundingBoxPosition = Sr
              }
            },
            metadata: ar
          }, Xr, Pr), (0, Zr.k)(null, null, er, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: rr => "_files" in rr,
              get: rr => rr._files,
              set: (rr, Sr) => {
                rr._files = Sr
              }
            },
            metadata: ar
          }, Hr, qr), (0, Zr.k)(null, null, Kr, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: rr => "_forcedExtension" in rr,
              get: rr => rr._forcedExtension,
              set: (rr, Sr) => {
                rr._forcedExtension = Sr
              }
            },
            metadata: ar
          }, Rr, gr), (0, Zr.k)(null, null, yr, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: rr => "_extensions" in rr,
              get: rr => rr._extensions,
              set: (rr, Sr) => {
                rr._extensions = Sr
              }
            },
            metadata: ar
          }, Cr, Mr), (0, Zr.k)(null, null, Br, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: rr => "_textureMatrix" in rr,
              get: rr => rr._textureMatrix,
              set: (rr, Sr) => {
                rr._textureMatrix = Sr
              }
            },
            metadata: ar
          }, Gr, kr), (0, Zr.k)(null, null, Tr, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: rr => "_textureMatrixRefraction" in rr,
              get: rr => rr._textureMatrixRefraction,
              set: (rr, Sr) => {
                rr._textureMatrixRefraction = Sr
              }
            },
            metadata: ar
          }, Ar, Vr), ar && Object.defineProperty(rr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ar
          })
        })(), rr
      })(),
      er = !1;

    function Kr(rr, Sr, Qr) {
      let Zr = "";
      for (const Wr of rr) Zr += Wr;
      return new nr(Zr, Sr, null, Qr, rr)
    }

    function yr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Zr = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Wr = Sr.useDelayedTextureLoading;
      Sr.useDelayedTextureLoading = !1;
      const ar = new nr(rr, Sr, null, !1, null, null, null, void 0, !0, Qr, Zr);
      return Sr.useDelayedTextureLoading = Wr, ar
    }

    function Br(rr, Sr, Qr) {
      const Zr = xr.e.Parse((() => {
        let Zr = !1;
        return rr.prefiltered && (Zr = rr.prefiltered), new nr(Qr + (rr.url ?? rr.name), Sr, rr.extensions, !1, rr.files || null, null, null, void 0, Zr, rr.forcedExtension)
      }), rr, Sr);
      if (rr.boundingBoxPosition && (Zr.boundingBoxPosition = jr.u.FromArray(rr.boundingBoxPosition)), rr.boundingBoxSize && (Zr.boundingBoxSize = jr.u.FromArray(rr.boundingBoxSize)), rr.animations)
        for (let Wr = 0; Wr < rr.animations.length; Wr++) {
          const Sr = rr.animations[Wr],
            Qr = (0, Er.d)("BABYLON.Animation");
          Qr && Zr.animations.push(Qr.Parse(Sr))
        }
      return Zr
    }
    er || (er = !0, nr.CreateFromImages = Kr, nr.CreateFromPrefilteredData = yr, nr.Parse = Br, fr.f._CubeTextureParser = Br, (0, Er.e)("BABYLON.CubeTexture", nr))
  },
  43041: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Er
    });
    var Zr = Qr(40246),
      Wr = Qr(42310),
      ar = Qr(41818),
      jr = Qr(41737),
      Ir = Qr(41731);
    let fr = !1;
    class Er extends Wr.f {
      constructor(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Er = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          pr = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          xr = arguments.length > 6 ? arguments[6] : void 0;
        const mr = !Qr || Qr._isScene;
        super(null, mr ? Qr : Qr?.Dt, mr ? !Zr : Qr, xr, Er, void 0, void 0, void 0, void 0, pr), fr || (fr = !0, jr.ThinEngine.prototype.createDynamicTexture = function(rr, Sr, Qr, Zr) {
          const Wr = new Ir.b(this, 4);
          return Wr.baseWidth = rr, Wr.baseHeight = Sr, Qr && (rr = this.needPOTTextures ? (0, ar.h)(rr, this._caps.maxTextureSize) : rr, Sr = this.needPOTTextures ? (0, ar.h)(Sr, this._caps.maxTextureSize) : Sr), Wr.width = rr, Wr.height = Sr, Wr.isReady = !1, Wr.generateMipMaps = Qr, Wr.samplingMode = Zr, this.updateTextureSamplingMode(Zr, Wr), this._internalTexturesCache.push(Wr), Wr
        }, jr.ThinEngine.prototype.updateDynamicTexture = function(rr, Sr, Qr) {
          let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Wr = arguments.length > 4 ? arguments[4] : void 0,
            ar = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!rr) return;
          const jr = this._gl,
            Ir = jr.TEXTURE_2D,
            fr = this._bindTextureDirectly(Ir, rr, !0, ar);
          this._unpackFlipY(void 0 === Qr ? rr.invertY : Qr), Zr && jr.pixelStorei(jr.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const Er = this._getWebGLTextureType(rr.type),
            pr = this._getInternalFormat(Wr || rr.format),
            xr = this._getRGBABufferInternalSizedFormat(rr.type, pr);
          jr.texImage2D(Ir, 0, xr, pr, Er, Sr), rr.generateMipMaps && jr.generateMipmap(Ir), fr || this._bindTextureDirectly(Ir, null), Zr && jr.pixelStorei(jr.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), Wr && (rr.format = Wr), rr._dynamicTextureSource = Sr, rr._premulAlpha = Zr, rr.invertY = Qr || !1, rr.isReady = !0
        }), this.name = rr, this.wrapU = Wr.f.CLAMP_ADDRESSMODE, this.wrapV = Wr.f.CLAMP_ADDRESSMODE, this._generateMipMaps = Zr;
        const Nr = this._getEngine();
        if (!Nr) return;
        if (Sr.getContext) this._canvas = Sr, this._ownCanvas = !1, this._texture = Nr.createDynamicTexture(this._canvas.width, this._canvas.height, Zr, Er);
        else {
          this._canvas = Nr.createCanvas(1, 1), this._ownCanvas = !0;
          const rr = Sr;
          rr.width || 0 === rr.width ? this._texture = Nr.createDynamicTexture(rr.width, rr.height, Zr, Er) : this._texture = Nr.createDynamicTexture(Sr, Sr, Zr, Er)
        }
        const Ur = this.getSize();
        this._canvas.width !== Ur.width && (this._canvas.width = Ur.width), this._canvas.height !== Ur.height && (this._canvas.height = Ur.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(rr) {
        this._canvas.width = rr.width, this._canvas.height = rr.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(rr.width, rr.height, this._generateMipMaps, this.samplingMode)
      }
      scale(rr) {
        const Sr = this.getSize();
        Sr.width *= rr, Sr.height *= rr, this._recreate(Sr)
      }
      scaleTo(rr, Sr) {
        const Qr = this.getSize();
        Qr.width = rr, Qr.height = Sr, this._recreate(Qr)
      }
      getContext() {
        return this._context
      }
      clear(rr) {
        const Sr = this.getSize();
        rr && (this._context.fillStyle = rr), this._context.clearRect(0, 0, Sr.width, Sr.height)
      }
      update(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === rr || rr, Sr, this._format || void 0, void 0, Qr)
      }
      drawText(rr, Sr, Qr, Zr, Wr, ar, jr) {
        let Ir = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const fr = this.getSize();
        if (ar && (this._context.fillStyle = ar, this._context.fillRect(0, 0, fr.width, fr.height)), this._context.font = Zr, null === Sr || void 0 === Sr) {
          const Qr = this._context.measureText(rr);
          Sr = (fr.width - Qr.width) / 2
        }
        if (null === Qr || void 0 === Qr) {
          const rr = parseInt(Zr.replace(/\D/g, ""));
          Qr = fr.height / 2 + rr / 3.65
        }
        this._context.fillStyle = Wr || "", this._context.fillText(rr, Sr, Qr), Ir && this.update(jr)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const rr = this.eC();
        if (!rr) return this;
        const Sr = this.getSize(),
          Qr = new Er(this.name, Sr, rr, this._generateMipMaps);
        return Qr.hasAlpha = this.hasAlpha, Qr.level = this.level, Qr.wrapU = this.wrapU, Qr.wrapV = this.wrapV, Qr
      }
      serialize() {
        const rr = this.eC();
        rr && !rr.isReady() && Zr.c.Warn("The scene must be ready before serializing the dynamic texture");
        const Sr = super.serialize();
        return Er._IsCanvasElement(this._canvas) && (Sr.base64String = this._canvas.toDataURL()), Sr.invertY = this._invertY, Sr.samplingMode = this.samplingMode, Sr
      }
      static _IsCanvasElement(rr) {
        return void 0 !== rr.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  43021: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr
    });
    var Zr = Qr(42310);
    class Wr extends Zr.f {
      get depth() {
        return this._depth
      }
      constructor(rr, Sr, Qr, Wr, ar, jr) {
        let Ir = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          fr = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          Er = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Zr.f.TRILINEAR_SAMPLINGMODE,
          pr = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          xr = arguments.length > 10 ? arguments[10] : void 0,
          mr = arguments.length > 11 ? arguments[11] : void 0;
        super(null, jr, !Ir, fr), this.format = ar, this._texture = jr.MU().createRawTexture2DArray(rr, Sr, Qr, Wr, ar, Ir, fr, Er, null, pr, xr ?? 0, mr), this._depth = Wr, this.is2DArray = !0
      }
      update(rr) {
        this.updateMipLevel(rr, 0)
      }
      updateMipLevel(rr, Sr) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, rr, this._texture.format, this._texture.invertY, null, this._texture.type, Sr)
      }
      static CreateRGBATexture(rr, Sr, Qr, Zr, ar) {
        return new Wr(rr, Sr, Qr, Zr, 5, ar, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  43012: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr.c
    });
    var Zr = Qr(42202);
    (0, Zr.f)()
  },
  41934: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Zr.f
    });
    var Zr = Qr(41941);
    (0, Zr.e)()
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);