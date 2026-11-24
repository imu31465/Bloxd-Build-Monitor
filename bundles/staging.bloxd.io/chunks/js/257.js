export const id = 257;
export const ids = [257];
export const modules = {
  40340: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm,
      g: () => wm
    });
    var hm = fm(38766),
      Am = fm(40129),
      am = fm(40319),
      xm = {};
    class wm {
      constructor(mm) {
        this.attachedToElement = !1, this.attached = {}, this.camera = mm, this.checkInputs = () => {}
      }
      add(mm) {
        const Tm = mm.getSimpleName();
        this.attached[Tm] ? hm.b.Warn("camera input of type " + Tm + " already exists on camera") : (this.attached[Tm] = mm, mm.camera = this.camera, mm.checkInputs && (this.checkInputs = this._addCheckInputs(mm.checkInputs.bind(mm))), this.attachedToElement && mm.attachControl(this.noPreventDefault))
      }
      remove(mm) {
        for (const Tm in this.attached) {
          const fm = this.attached[Tm];
          if (fm === mm) return fm.detachControl(), fm.camera = null, delete this.attached[Tm], void this.rebuildInputCheck()
        }
      }
      removeByType(mm) {
        for (const Tm in this.attached) {
          const fm = this.attached[Tm];
          fm.getClassName() === mm && (fm.detachControl(), fm.camera = null, delete this.attached[Tm], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(mm) {
        const Tm = this.checkInputs;
        return () => {
          Tm(), mm()
        }
      }
      attachInput(mm) {
        this.attachedToElement && mm.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          mm = !am.b.ForceAttachControlToAlwaysPreventDefault && mm, this.attachedToElement = !0, this.noPreventDefault = mm;
          for (const Tm in this.attached) this.attached[Tm].attachControl(mm)
        }
      }
      detachElement() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Tm in this.attached) this.attached[Tm].detachControl(), mm && (this.attached[Tm].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const mm in this.attached) {
          const Tm = this.attached[mm];
          Tm.checkInputs && (this.checkInputs = this._addCheckInputs(Tm.checkInputs.bind(Tm)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(mm) {
        const Tm = {};
        for (const fm in this.attached) {
          const mm = this.attached[fm],
            hm = Am.d.Serialize(mm);
          Tm[mm.getClassName()] = hm
        }
        mm.inputsmgr = Tm
      }
      parse(mm) {
        const Tm = mm.inputsmgr;
        if (Tm) {
          this.clear();
          for (const mm in Tm) {
            const fm = xm[mm];
            if (fm) {
              const hm = Tm[mm],
                am = Am.d.Parse((() => new fm), hm, null);
              this.add(am)
            }
          }
        } else
          for (const fm in this.attached) {
            const Tm = xm[this.attached[fm].getClassName()];
            if (Tm) {
              const hm = Am.d.Parse((() => new Tm), mm, null);
              this.remove(this.attached[fm]), this.add(hm)
            }
          }
      }
    }
  },
  41186: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Im
    });
    var hm = fm(40113),
      Am = fm(40119),
      am = fm(40008),
      xm = fm(37185),
      wm = fm(40111),
      Dm = fm(40585),
      im = fm(37224),
      Rm = fm(37203),
      pm = fm(40129),
      Em = fm(39942),
      om = fm(38766),
      Om = fm(40154),
      Ym = fm(37970),
      qm = fm(40193);
    var jm = fm(40014);
    let Vm = !1;
    let Im = (() => {
        var mm;
        let Tm, fm, im, Im, Km, Qm, nm, Jm, cm, zm = wm.b,
          Zm = [],
          km = [],
          bm = [],
          Sm = [],
          em = [],
          Nm = [],
          Gm = [],
          Xm = [],
          Pm = [],
          Hm = [],
          ym = [],
          Cm = [],
          rm = [],
          sm = [],
          lm = [];
        return mm = class extends zm {
          set boundingBoxSize(mm) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(mm)) return;
            this._boundingBoxSize = mm;
            const Tm = this.wG();
            Tm && Tm.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(mm) {
            this._rotationY = mm, this.setReflectionTextureMatrix(xm.e.RotationY(this._rotationY))
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
          constructor(mm, Tm) {
            let fm, Am = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              am = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              wm = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              im = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              pm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              Im = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              Km = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              Qm = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              nm = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              Jm = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              cm = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              zm = arguments.length > 13 ? arguments[13] : void 0,
              Mm = arguments.length > 14 ? arguments[14] : void 0;
            super(Tm), this._delayedOnLoad = (0, hm.i)(this, Zm), this.onLoadObservable = new Rm.c, this.url = (0, hm.i)(this, km, void 0), this.boundingBoxPosition = ((0, hm.i)(this, bm), (0, hm.i)(this, Sm, xm.p.Zero())), this._boundingBoxSize = (0, hm.i)(this, em), this._rotationY = 0, this._files = (0, hm.i)(this, Nm, null), this._forcedExtension = ((0, hm.i)(this, Gm), (0, hm.i)(this, Xm, null)), this._extensions = ((0, hm.i)(this, Pm), (0, hm.i)(this, Hm, null)), this._textureMatrix = ((0, hm.i)(this, ym), (0, hm.i)(this, Cm, void 0)), this._textureMatrixRefraction = ((0, hm.i)(this, rm), (0, hm.i)(this, sm, new xm.e)), this._format = (0, hm.i)(this, lm), this._buffer = null, Vm || (Vm = !0, jm.b.prototype._partialLoadFile = function(mm, Tm, fm, hm) {
              let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(mm, (mm => {
                fm[Tm] = mm, fm._internalCount++, 6 === fm._internalCount && hm(fm)
              }), void 0, void 0, !0, ((mm, Tm) => {
                Am && mm && Am(mm.status + " " + mm.statusText, Tm)
              }))
            }, jm.b.prototype._cascadeLoadFiles = function(mm, Tm, fm) {
              let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const Am = [];
              Am._internalCount = 0;
              for (let am = 0; am < 6; am++) this._partialLoadFile(fm[am], am, Am, Tm, hm)
            }, jm.b.prototype._cascadeLoadImgs = function(mm, Tm, fm, hm) {
              let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                am = arguments.length > 5 ? arguments[5] : void 0;
              const xm = [];
              xm._internalCount = 0;
              for (let wm = 0; wm < 6; wm++) this._partialLoadImg(hm[wm], wm, xm, mm, Tm, fm, Am, am)
            }, jm.b.prototype._partialLoadImg = function(mm, Tm, fm, hm, Am, am) {
              let xm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                wm = arguments.length > 7 ? arguments[7] : void 0;
              const Dm = (0, Ym.c)();
              (0, Om.u)(mm, (mm => {
                fm[Tm] = mm, fm._internalCount++, hm && hm.removePendingData(Dm), 6 === fm._internalCount && am && am(Am, fm)
              }), ((mm, Tm) => {
                hm && hm.removePendingData(Dm), xm && xm(mm, Tm)
              }), hm ? hm.offlineProvider : null, wm), hm && hm.addPendingData(Dm)
            }, jm.b.prototype.createCubeTextureBase = function(mm, Tm, fm, hm) {
              let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                xm = arguments.length > 6 ? arguments[6] : void 0,
                wm = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                Dm = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                im = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                Rm = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                pm = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                Om = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                Ym = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                jm = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                Vm = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const Im = pm || new Em.d(this, 7);
              Im.isCube = !0, Im.url = mm, Im.generateMipMaps = !hm, Im._lodGenerationScale = im, Im._lodGenerationOffset = Rm, Im._useSRGBBuffer = !!jm && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!hm), Im !== pm && (Im.label = mm.substring(0, 60)), this._doNotHandleContextLost || (Im._extension = wm, Im._files = fm, Im._buffer = Vm);
              const Km = mm;
              this._transformTextureUrl && !pm && (mm = this._transformTextureUrl(mm));
              const Qm = wm ?? function(mm) {
                  const Tm = mm.split("?")[0],
                    fm = Tm.lastIndexOf(".");
                  return fm > -1 ? Tm.substring(fm).toLowerCase() : ""
                }(mm),
                nm = (0, qm.e)(Qm),
                Jm = (mm, Tm) => {
                  Im.dispose(), am ? am(mm, Tm) : mm && om.b.Warn(mm)
                },
                cm = (am, pm) => {
                  mm === Km ? am && Jm(am.status + " " + am.statusText, pm) : (om.b.Warn(`Failed to load ${mm}, falling back to the ${Km}`), this.createCubeTextureBase(Km, Tm, fm, !!hm, Am, Jm, xm, wm, Dm, im, Rm, Im, Om, Ym, jm, Vm))
                };
              if (nm) nm.then((hm => {
                const am = mm => {
                  Om && Om(Im, mm), hm.loadCubeData(mm, Im, Dm, Am, ((mm, Tm) => {
                    Jm(mm, Tm)
                  }))
                };
                Vm ? am(Vm) : fm && 6 === fm.length ? hm.supportCascades ? this._cascadeLoadFiles(Tm, (mm => am(mm.map((mm => new Uint8Array(mm))))), fm, Jm) : Jm("Textures type does not support cascades.") : this._loadFile(mm, (mm => am(new Uint8Array(mm))), void 0, Tm ? Tm.offlineProvider || null : void 0, !0, cm)
              }));
              else {
                if (!fm || 0 === fm.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(Tm, Im, ((mm, Tm) => {
                  Ym && Ym(mm, Tm)
                }), fm, Jm)
              }
              return this._internalTexturesCache.push(Im), Im
            }), this.name = mm, this.url = mm, this._noMipmap = am, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = xm.e.Identity(), this.coordinatesMode = Dm.f.CUBIC_MODE;
            let um = null;
            null === Am || Array.isArray(Am) ? (this._noMipmap = am, this._format = Im, this._createPolynomials = nm, fm = Am, this._loaderOptions = zm, this._useSRGBBuffer = Mm, this._lodScale = Jm, this._lodOffset = cm) : (fm = Am.extensions ?? null, this._noMipmap = Am.noMipmap ?? !1, wm = Am.files ?? null, um = Am.buffer ?? null, this._format = Am.format ?? 5, Km = Am.prefiltered ?? !1, Qm = Am.forcedExtension ?? null, this._createPolynomials = Am.createPolynomials ?? !1, this._lodScale = Am.lodScale ?? .8, this._lodOffset = Am.lodOffset ?? 0, this._loaderOptions = Am.loaderOptions, this._useSRGBBuffer = Am.useSRGBBuffer, this._sphericalPolynomialTargetSize = Am.sphericalPolynomialTargetSize ?? 0, im = Am.onLoad ?? null, pm = Am.onError ?? null), (mm || wm) && this.updateURL(mm, Qm, im, Km, pm, fm, this.wG()?.useDelayedTextureLoading, wm, um)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(mm) {
            let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              xm = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              wm = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Dm = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = mm), this.url = mm, Tm && (this._forcedExtension = Tm);
            const im = mm.lastIndexOf("."),
              Rm = Tm || (im > -1 ? mm.substring(im).toLowerCase() : ""),
              pm = 0 === Rm.indexOf(".dds"),
              Em = 0 === Rm.indexOf(".env"),
              om = 0 === Rm.indexOf(".basis");
            if (Em ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = hm, hm && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), wm) this._files = wm;
            else if (om || Em || pm || am || (am = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, am) {
              for (let Tm = 0; Tm < am.length; Tm++) this._files.push(mm + am[Tm]);
              this._extensions = am
            }
            this._buffer = Dm, xm ? (this.delayLoadState = 4, this._delayedOnLoad = fm, this._delayedOnError = Am) : this._loadTexture(fm, Am)
          }
          delayLoad(mm) {
            4 === this.delayLoadState && (mm && (this._forcedExtension = mm), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(mm) {
            if (mm.updateFlag === this._textureMatrix.updateFlag) return;
            if (mm.isIdentity() !== this._textureMatrix.isIdentity() && this.wG()?.markAllMaterialsAsDirty(1, (mm => -1 !== mm.getActiveTextures().indexOf(this))), this._textureMatrix = mm, !this.wG()?.useRightHandedSystem) return;
            const Tm = xm.j.WO[0],
              fm = xm.j.Quaternion[0],
              hm = xm.j.WO[1];
            this._textureMatrix.decompose(Tm, fm, hm), fm.z *= -1, fm.w *= -1, xm.e.ComposeToRef(Tm, fm, hm, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.wG()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const fm = this.wG(),
              hm = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const Am = () => {
                this.onLoadObservable.notifyObservers(this), hm && (hm.dispose(), this.wG()?.markAllMaterialsAsDirty(1)), mm && mm()
              },
              xm = (mm, fm) => {
                this._loadingError = !0, this._errorObject = {
                  message: mm,
                  exception: fm
                }, Tm && Tm(mm, fm), Dm.f.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? am.c.SetImmediate((() => Am())) : this._texture.onLoadedObservable.add((() => Am())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, fm, this._lodScale, this._lodOffset, mm, xm, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, fm, this._files, this._noMipmap, mm, xm, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let Tm = 0;
            const fm = this.irradianceTexture,
              hm = pm.d.Clone((() => {
                const fm = new mm(this.url, this.wG() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return Tm = fm.uniqueId, fm
              }), this);
            return hm.uniqueId = Tm, fm && !this.irradianceTexture && (this.irradianceTexture = fm), hm
          }
        }, (() => {
          const am = "function" === typeof Symbol && Symbol.metadata ? Object.create(zm[Symbol.metadata] ?? null) : void 0;
          Tm = [(0, Am.J)()], fm = [(0, Am.F)()], im = [(0, Am.F)()], Im = [(0, Am.J)("rotationY")], Km = [(0, Am.J)("files")], Qm = [(0, Am.J)("forcedExtension")], nm = [(0, Am.J)("extensions")], Jm = [(0, Am.u)("textureMatrix")], cm = [(0, Am.u)("textureMatrixRefraction")], (0, hm.g)(mm, null, im, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: mm => "boundingBoxSize" in mm,
              get: mm => mm.boundingBoxSize
            },
            metadata: am
          }, null, Zm), (0, hm.g)(mm, null, Im, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: mm => "rotationY" in mm,
              set: (mm, Tm) => {
                mm.rotationY = Tm
              }
            },
            metadata: am
          }, null, Zm), (0, hm.g)(null, null, Tm, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: mm => "url" in mm,
              get: mm => mm.url,
              set: (mm, Tm) => {
                mm.url = Tm
              }
            },
            metadata: am
          }, km, bm), (0, hm.g)(null, null, fm, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: mm => "boundingBoxPosition" in mm,
              get: mm => mm.boundingBoxPosition,
              set: (mm, Tm) => {
                mm.boundingBoxPosition = Tm
              }
            },
            metadata: am
          }, Sm, em), (0, hm.g)(null, null, Km, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: mm => "_files" in mm,
              get: mm => mm._files,
              set: (mm, Tm) => {
                mm._files = Tm
              }
            },
            metadata: am
          }, Nm, Gm), (0, hm.g)(null, null, Qm, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: mm => "_forcedExtension" in mm,
              get: mm => mm._forcedExtension,
              set: (mm, Tm) => {
                mm._forcedExtension = Tm
              }
            },
            metadata: am
          }, Xm, Pm), (0, hm.g)(null, null, nm, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: mm => "_extensions" in mm,
              get: mm => mm._extensions,
              set: (mm, Tm) => {
                mm._extensions = Tm
              }
            },
            metadata: am
          }, Hm, ym), (0, hm.g)(null, null, Jm, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: mm => "_textureMatrix" in mm,
              get: mm => mm._textureMatrix,
              set: (mm, Tm) => {
                mm._textureMatrix = Tm
              }
            },
            metadata: am
          }, Cm, rm), (0, hm.g)(null, null, cm, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: mm => "_textureMatrixRefraction" in mm,
              get: mm => mm._textureMatrixRefraction,
              set: (mm, Tm) => {
                mm._textureMatrixRefraction = Tm
              }
            },
            metadata: am
          }, sm, lm), am && Object.defineProperty(mm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: am
          })
        })(), mm
      })(),
      Km = !1;

    function Qm(mm, Tm, fm) {
      let hm = "";
      for (const Am of mm) hm += Am;
      return new Im(hm, Tm, null, fm, mm)
    }

    function nm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        hm = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Am = Tm.useDelayedTextureLoading;
      Tm.useDelayedTextureLoading = !1;
      const am = new Im(mm, Tm, null, !1, null, null, null, void 0, !0, fm, hm);
      return Tm.useDelayedTextureLoading = Am, am
    }

    function Jm(mm, Tm, fm) {
      const hm = pm.d.Parse((() => {
        let hm = !1;
        return mm.prefiltered && (hm = mm.prefiltered), new Im(fm + (mm.url ?? mm.name), Tm, mm.extensions, !1, mm.files || null, null, null, void 0, hm, mm.forcedExtension)
      }), mm, Tm);
      if (mm.boundingBoxPosition && (hm.boundingBoxPosition = xm.p.FromArray(mm.boundingBoxPosition)), mm.boundingBoxSize && (hm.boundingBoxSize = xm.p.FromArray(mm.boundingBoxSize)), mm.animations)
        for (let Am = 0; Am < mm.animations.length; Am++) {
          const Tm = mm.animations[Am],
            fm = (0, im.c)("BABYLON.Animation");
          fm && hm.animations.push(fm.Parse(Tm))
        }
      return hm
    }
    Km || (Km = !0, Im.CreateFromImages = Qm, Im.CreateFromPrefilteredData = nm, Im.Parse = Jm, Dm.f._CubeTextureParser = Jm, (0, im.d)("BABYLON.CubeTexture", Im))
  },
  41220: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => im
    });
    var hm = fm(38766),
      Am = fm(40585),
      am = fm(40052),
      xm = fm(39956),
      wm = fm(39942);
    let Dm = !1;
    class im extends Am.f {
      constructor(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          im = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Rm = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          pm = arguments.length > 6 ? arguments[6] : void 0;
        const Em = !fm || fm._isScene;
        super(null, Em ? fm : fm?.Aq, Em ? !hm : fm, pm, im, void 0, void 0, void 0, void 0, Rm), Dm || (Dm = !0, xm.ThinEngine.prototype.createDynamicTexture = function(mm, Tm, fm, hm) {
          const Am = new wm.d(this, 4);
          return Am.baseWidth = mm, Am.baseHeight = Tm, fm && (mm = this.needPOTTextures ? (0, am.f)(mm, this._caps.maxTextureSize) : mm, Tm = this.needPOTTextures ? (0, am.f)(Tm, this._caps.maxTextureSize) : Tm), Am.width = mm, Am.height = Tm, Am.isReady = !1, Am.generateMipMaps = fm, Am.samplingMode = hm, this.updateTextureSamplingMode(hm, Am), this._internalTexturesCache.push(Am), Am
        }, xm.ThinEngine.prototype.updateDynamicTexture = function(mm, Tm, fm) {
          let hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Am = arguments.length > 4 ? arguments[4] : void 0,
            am = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!mm) return;
          const xm = this._gl,
            wm = xm.TEXTURE_2D,
            Dm = this._bindTextureDirectly(wm, mm, !0, am);
          this._unpackFlipY(void 0 === fm ? mm.invertY : fm), hm && xm.pixelStorei(xm.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const im = this._getWebGLTextureType(mm.type),
            Rm = this._getInternalFormat(Am || mm.format),
            pm = this._getRGBABufferInternalSizedFormat(mm.type, Rm);
          xm.texImage2D(wm, 0, pm, Rm, im, Tm), mm.generateMipMaps && xm.generateMipmap(wm), Dm || this._bindTextureDirectly(wm, null), hm && xm.pixelStorei(xm.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), Am && (mm.format = Am), mm._dynamicTextureSource = Tm, mm._premulAlpha = hm, mm.invertY = fm || !1, mm.isReady = !0
        }), this.name = mm, this.wrapU = Am.f.CLAMP_ADDRESSMODE, this.wrapV = Am.f.CLAMP_ADDRESSMODE, this._generateMipMaps = hm;
        const om = this._getEngine();
        if (!om) return;
        if (Tm.getContext) this._canvas = Tm, this._ownCanvas = !1, this._texture = om.createDynamicTexture(this._canvas.width, this._canvas.height, hm, im);
        else {
          this._canvas = om.createCanvas(1, 1), this._ownCanvas = !0;
          const mm = Tm;
          mm.width || 0 === mm.width ? this._texture = om.createDynamicTexture(mm.width, mm.height, hm, im) : this._texture = om.createDynamicTexture(Tm, Tm, hm, im)
        }
        const Om = this.getSize();
        this._canvas.width !== Om.width && (this._canvas.width = Om.width), this._canvas.height !== Om.height && (this._canvas.height = Om.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(mm) {
        this._canvas.width = mm.width, this._canvas.height = mm.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(mm.width, mm.height, this._generateMipMaps, this.samplingMode)
      }
      scale(mm) {
        const Tm = this.getSize();
        Tm.width *= mm, Tm.height *= mm, this._recreate(Tm)
      }
      scaleTo(mm, Tm) {
        const fm = this.getSize();
        fm.width = mm, fm.height = Tm, this._recreate(fm)
      }
      getContext() {
        return this._context
      }
      clear(mm) {
        const Tm = this.getSize();
        mm && (this._context.fillStyle = mm), this._context.clearRect(0, 0, Tm.width, Tm.height)
      }
      update(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === mm || mm, Tm, this._format || void 0, void 0, fm)
      }
      drawText(mm, Tm, fm, hm, Am, am, xm) {
        let wm = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const Dm = this.getSize();
        if (am && (this._context.fillStyle = am, this._context.fillRect(0, 0, Dm.width, Dm.height)), this._context.font = hm, null === Tm || void 0 === Tm) {
          const fm = this._context.measureText(mm);
          Tm = (Dm.width - fm.width) / 2
        }
        if (null === fm || void 0 === fm) {
          const mm = parseInt(hm.replace(/\D/g, ""));
          fm = Dm.height / 2 + mm / 3.65
        }
        this._context.fillStyle = Am || "", this._context.fillText(mm, Tm, fm), wm && this.update(xm)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const mm = this.wG();
        if (!mm) return this;
        const Tm = this.getSize(),
          fm = new im(this.name, Tm, mm, this._generateMipMaps);
        return fm.hasAlpha = this.hasAlpha, fm.level = this.level, fm.wrapU = this.wrapU, fm.wrapV = this.wrapV, fm
      }
      serialize() {
        const mm = this.wG();
        mm && !mm.isReady() && hm.b.Warn("The scene must be ready before serializing the dynamic texture");
        const Tm = super.serialize();
        return im._IsCanvasElement(this._canvas) && (Tm.base64String = this._canvas.toDataURL()), Tm.invertY = this._invertY, Tm.samplingMode = this.samplingMode, Tm
      }
      static _IsCanvasElement(mm) {
        return void 0 !== mm.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  41201: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am
    });
    var hm = fm(40585);
    class Am extends hm.f {
      get depth() {
        return this._depth
      }
      constructor(mm, Tm, fm, Am, am, xm) {
        let wm = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Dm = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          im = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : hm.f.TRILINEAR_SAMPLINGMODE,
          Rm = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          pm = arguments.length > 10 ? arguments[10] : void 0,
          Em = arguments.length > 11 ? arguments[11] : void 0;
        super(null, xm, !wm, Dm), this.format = am, this._texture = xm.dO().createRawTexture2DArray(mm, Tm, fm, Am, am, wm, Dm, im, null, Rm, pm ?? 0, Em), this._depth = Am, this.is2DArray = !0
      }
      update(mm) {
        this.updateMipLevel(mm, 0)
      }
      updateMipLevel(mm, Tm) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, mm, this._texture.format, this._texture.invertY, null, this._texture.type, Tm)
      }
      static CreateRGBATexture(mm, Tm, fm, hm, am) {
        return new Am(mm, Tm, fm, hm, 5, am, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  41198: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm.e
    });
    var hm = fm(40458);
    (0, hm.f)()
  },
  40196: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => hm.f
    });
    var hm = fm(40199);
    (0, hm.e)()
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);