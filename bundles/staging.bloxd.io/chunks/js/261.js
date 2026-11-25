export const id = 261;
export const ids = [261];
export const modules = {
  40431: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt,
      g: () => dt
    });
    var Ot = Vt(38899),
      qt = Vt(40230),
      Dt = Vt(40409),
      mt = {};
    class dt {
      constructor(tt) {
        this.attachedToElement = !1, this.attached = {}, this.camera = tt, this.checkInputs = () => {}
      }
      add(tt) {
        const et = tt.getSimpleName();
        this.attached[et] ? Ot.d.Warn("camera input of type " + et + " already exists on camera") : (this.attached[et] = tt, tt.camera = this.camera, tt.checkInputs && (this.checkInputs = this._addCheckInputs(tt.checkInputs.bind(tt))), this.attachedToElement && tt.attachControl(this.noPreventDefault))
      }
      remove(tt) {
        for (const et in this.attached) {
          const Vt = this.attached[et];
          if (Vt === tt) return Vt.detachControl(), Vt.camera = null, delete this.attached[et], void this.rebuildInputCheck()
        }
      }
      removeByType(tt) {
        for (const et in this.attached) {
          const Vt = this.attached[et];
          Vt.getClassName() === tt && (Vt.detachControl(), Vt.camera = null, delete this.attached[et], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(tt) {
        const et = this.checkInputs;
        return () => {
          et(), tt()
        }
      }
      attachInput(tt) {
        this.attachedToElement && tt.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          tt = !Dt.c.ForceAttachControlToAlwaysPreventDefault && tt, this.attachedToElement = !0, this.noPreventDefault = tt;
          for (const et in this.attached) this.attached[et].attachControl(tt)
        }
      }
      detachElement() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const et in this.attached) this.attached[et].detachControl(), tt && (this.attached[et].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const tt in this.attached) {
          const et = this.attached[tt];
          et.checkInputs && (this.checkInputs = this._addCheckInputs(et.checkInputs.bind(et)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(tt) {
        const et = {};
        for (const Vt in this.attached) {
          const tt = this.attached[Vt],
            Ot = qt.d.Serialize(tt);
          et[tt.getClassName()] = Ot
        }
        tt.inputsmgr = et
      }
      parse(tt) {
        const et = tt.inputsmgr;
        if (et) {
          this.clear();
          for (const tt in et) {
            const Vt = mt[tt];
            if (Vt) {
              const Ot = et[tt],
                Dt = qt.d.Parse((() => new Vt), Ot, null);
              this.add(Dt)
            }
          }
        } else
          for (const Vt in this.attached) {
            const et = mt[this.attached[Vt].getClassName()];
            if (et) {
              const Ot = qt.d.Parse((() => new et), tt, null);
              this.remove(this.attached[Vt]), this.add(Ot)
            }
          }
      }
    }
  },
  41339: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => bt
    });
    var Ot = Vt(40211),
      qt = Vt(40213),
      Dt = Vt(40085),
      mt = Vt(37336),
      dt = Vt(40202),
      jt = Vt(40661),
      Ht = Vt(37390),
      Xt = Vt(37367),
      Qt = Vt(40230),
      lt = Vt(40037),
      Et = Vt(38899),
      ft = Vt(40249),
      wt = Vt(38159),
      yt = Vt(40281);
    var Nt = Vt(40092);
    let Mt = !1;
    let bt = (() => {
        var tt;
        let et, Vt, Ht, bt, Jt, Ct, ut, Kt, ht, vt = dt.b,
          Wt = [],
          St = [],
          ct = [],
          Rt = [],
          It = [],
          Pt = [],
          Zt = [],
          Lt = [],
          Ft = [],
          kt = [],
          Gt = [],
          zt = [],
          ot = [],
          rt = [],
          Ut = [];
        return tt = class extends vt {
          set boundingBoxSize(tt) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(tt)) return;
            this._boundingBoxSize = tt;
            const et = this.vI();
            et && et.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(tt) {
            this._rotationY = tt, this.setReflectionTextureMatrix(mt.c.RotationY(this._rotationY))
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
          constructor(tt, et) {
            let Vt, qt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Dt = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Ht = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Qt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              bt = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              Jt = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              Ct = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              ut = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              Kt = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              ht = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              vt = arguments.length > 13 ? arguments[13] : void 0,
              At = arguments.length > 14 ? arguments[14] : void 0;
            super(et), this._delayedOnLoad = (0, Ot.m)(this, Wt), this.onLoadObservable = new Xt.c, this.url = (0, Ot.m)(this, St, void 0), this.boundingBoxPosition = ((0, Ot.m)(this, ct), (0, Ot.m)(this, Rt, mt.n.Zero())), this._boundingBoxSize = (0, Ot.m)(this, It), this._rotationY = 0, this._files = (0, Ot.m)(this, Pt, null), this._forcedExtension = ((0, Ot.m)(this, Zt), (0, Ot.m)(this, Lt, null)), this._extensions = ((0, Ot.m)(this, Ft), (0, Ot.m)(this, kt, null)), this._textureMatrix = ((0, Ot.m)(this, Gt), (0, Ot.m)(this, zt, void 0)), this._textureMatrixRefraction = ((0, Ot.m)(this, ot), (0, Ot.m)(this, rt, new mt.c)), this._format = (0, Ot.m)(this, Ut), this._buffer = null, Mt || (Mt = !0, Nt.d.prototype._partialLoadFile = function(tt, et, Vt, Ot) {
              let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(tt, (tt => {
                Vt[et] = tt, Vt._internalCount++, 6 === Vt._internalCount && Ot(Vt)
              }), void 0, void 0, !0, ((tt, et) => {
                qt && tt && qt(tt.status + " " + tt.statusText, et)
              }))
            }, Nt.d.prototype._cascadeLoadFiles = function(tt, et, Vt) {
              let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const qt = [];
              qt._internalCount = 0;
              for (let Dt = 0; Dt < 6; Dt++) this._partialLoadFile(Vt[Dt], Dt, qt, et, Ot)
            }, Nt.d.prototype._cascadeLoadImgs = function(tt, et, Vt, Ot) {
              let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                Dt = arguments.length > 5 ? arguments[5] : void 0;
              const mt = [];
              mt._internalCount = 0;
              for (let dt = 0; dt < 6; dt++) this._partialLoadImg(Ot[dt], dt, mt, tt, et, Vt, qt, Dt)
            }, Nt.d.prototype._partialLoadImg = function(tt, et, Vt, Ot, qt, Dt) {
              let mt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                dt = arguments.length > 7 ? arguments[7] : void 0;
              const jt = (0, wt.b)();
              (0, ft.p)(tt, (tt => {
                Vt[et] = tt, Vt._internalCount++, Ot && Ot.removePendingData(jt), 6 === Vt._internalCount && Dt && Dt(qt, Vt)
              }), ((tt, et) => {
                Ot && Ot.removePendingData(jt), mt && mt(tt, et)
              }), Ot ? Ot.offlineProvider : null, dt), Ot && Ot.addPendingData(jt)
            }, Nt.d.prototype.createCubeTextureBase = function(tt, et, Vt, Ot) {
              let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                mt = arguments.length > 6 ? arguments[6] : void 0,
                dt = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                jt = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                Ht = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                Xt = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                Qt = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                ft = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                wt = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                Nt = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                Mt = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const bt = Qt || new lt.d(this, 7);
              bt.isCube = !0, bt.url = tt, bt.generateMipMaps = !Ot, bt._lodGenerationScale = Ht, bt._lodGenerationOffset = Xt, bt._useSRGBBuffer = !!Nt && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!Ot), bt !== Qt && (bt.label = tt.substring(0, 60)), this._doNotHandleContextLost || (bt._extension = dt, bt._files = Vt, bt._buffer = Mt);
              const Jt = tt;
              this._transformTextureUrl && !Qt && (tt = this._transformTextureUrl(tt));
              const Ct = dt ?? function(tt) {
                  const et = tt.split("?")[0],
                    Vt = et.lastIndexOf(".");
                  return Vt > -1 ? et.substring(Vt).toLowerCase() : ""
                }(tt),
                ut = (0, yt.d)(Ct),
                Kt = (tt, et) => {
                  bt.dispose(), Dt ? Dt(tt, et) : tt && Et.d.Warn(tt)
                },
                ht = (Dt, Qt) => {
                  tt === Jt ? Dt && Kt(Dt.status + " " + Dt.statusText, Qt) : (Et.d.Warn(`Failed to load ${tt}, falling back to the ${Jt}`), this.createCubeTextureBase(Jt, et, Vt, !!Ot, qt, Kt, mt, dt, jt, Ht, Xt, bt, ft, wt, Nt, Mt))
                };
              if (ut) ut.then((Ot => {
                const Dt = tt => {
                  ft && ft(bt, tt), Ot.loadCubeData(tt, bt, jt, qt, ((tt, et) => {
                    Kt(tt, et)
                  }))
                };
                Mt ? Dt(Mt) : Vt && 6 === Vt.length ? Ot.supportCascades ? this._cascadeLoadFiles(et, (tt => Dt(tt.map((tt => new Uint8Array(tt))))), Vt, Kt) : Kt("Textures type does not support cascades.") : this._loadFile(tt, (tt => Dt(new Uint8Array(tt))), void 0, et ? et.offlineProvider || null : void 0, !0, ht)
              }));
              else {
                if (!Vt || 0 === Vt.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(et, bt, ((tt, et) => {
                  wt && wt(tt, et)
                }), Vt, Kt)
              }
              return this._internalTexturesCache.push(bt), bt
            }), this.name = tt, this.url = tt, this._noMipmap = Dt, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = mt.c.Identity(), this.coordinatesMode = jt.f.CUBIC_MODE;
            let it = null;
            null === qt || Array.isArray(qt) ? (this._noMipmap = Dt, this._format = bt, this._createPolynomials = ut, Vt = qt, this._loaderOptions = vt, this._useSRGBBuffer = At, this._lodScale = Kt, this._lodOffset = ht) : (Vt = qt.extensions ?? null, this._noMipmap = qt.noMipmap ?? !1, dt = qt.files ?? null, it = qt.buffer ?? null, this._format = qt.format ?? 5, Jt = qt.prefiltered ?? !1, Ct = qt.forcedExtension ?? null, this._createPolynomials = qt.createPolynomials ?? !1, this._lodScale = qt.lodScale ?? .8, this._lodOffset = qt.lodOffset ?? 0, this._loaderOptions = qt.loaderOptions, this._useSRGBBuffer = qt.useSRGBBuffer, this._sphericalPolynomialTargetSize = qt.sphericalPolynomialTargetSize ?? 0, Ht = qt.onLoad ?? null, Qt = qt.onError ?? null), (tt || dt) && this.updateURL(tt, Ct, Ht, Jt, Qt, Vt, this.vI()?.useDelayedTextureLoading, dt, it)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(tt) {
            let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              mt = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              dt = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              jt = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = tt), this.url = tt, et && (this._forcedExtension = et);
            const Ht = tt.lastIndexOf("."),
              Xt = et || (Ht > -1 ? tt.substring(Ht).toLowerCase() : ""),
              Qt = 0 === Xt.indexOf(".dds"),
              lt = 0 === Xt.indexOf(".env"),
              Et = 0 === Xt.indexOf(".basis");
            if (lt ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = Ot, Ot && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), dt) this._files = dt;
            else if (Et || lt || Qt || Dt || (Dt = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, Dt) {
              for (let et = 0; et < Dt.length; et++) this._files.push(tt + Dt[et]);
              this._extensions = Dt
            }
            this._buffer = jt, mt ? (this.delayLoadState = 4, this._delayedOnLoad = Vt, this._delayedOnError = qt) : this._loadTexture(Vt, qt)
          }
          delayLoad(tt) {
            4 === this.delayLoadState && (tt && (this._forcedExtension = tt), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(tt) {
            if (tt.updateFlag === this._textureMatrix.updateFlag) return;
            if (tt.isIdentity() !== this._textureMatrix.isIdentity() && this.vI()?.markAllMaterialsAsDirty(1, (tt => -1 !== tt.getActiveTextures().indexOf(this))), this._textureMatrix = tt, !this.vI()?.useRightHandedSystem) return;
            const et = mt.k.uf[0],
              Vt = mt.k.Quaternion[0],
              Ot = mt.k.uf[1];
            this._textureMatrix.decompose(et, Vt, Ot), Vt.z *= -1, Vt.w *= -1, mt.c.ComposeToRef(et, Vt, Ot, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.vI()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const Vt = this.vI(),
              Ot = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const qt = () => {
                this.onLoadObservable.notifyObservers(this), Ot && (Ot.dispose(), this.vI()?.markAllMaterialsAsDirty(1)), tt && tt()
              },
              mt = (tt, Vt) => {
                this._loadingError = !0, this._errorObject = {
                  message: tt,
                  exception: Vt
                }, et && et(tt, Vt), jt.f.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? Dt.c.SetImmediate((() => qt())) : this._texture.onLoadedObservable.add((() => qt())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, Vt, this._lodScale, this._lodOffset, tt, mt, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, Vt, this._files, this._noMipmap, tt, mt, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let et = 0;
            const Vt = this.irradianceTexture,
              Ot = Qt.d.Clone((() => {
                const Vt = new tt(this.url, this.vI() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return et = Vt.uniqueId, Vt
              }), this);
            return Ot.uniqueId = et, Vt && !this.irradianceTexture && (this.irradianceTexture = Vt), Ot
          }
        }, (() => {
          const Dt = "function" === typeof Symbol && Symbol.metadata ? Object.create(vt[Symbol.metadata] ?? null) : void 0;
          et = [(0, qt.P)()], Vt = [(0, qt.M)()], Ht = [(0, qt.M)()], bt = [(0, qt.P)("rotationY")], Jt = [(0, qt.P)("files")], Ct = [(0, qt.P)("forcedExtension")], ut = [(0, qt.P)("extensions")], Kt = [(0, qt.z)("textureMatrix")], ht = [(0, qt.z)("textureMatrixRefraction")], (0, Ot.l)(tt, null, Ht, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: tt => "boundingBoxSize" in tt,
              get: tt => tt.boundingBoxSize
            },
            metadata: Dt
          }, null, Wt), (0, Ot.l)(tt, null, bt, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: tt => "rotationY" in tt,
              set: (tt, et) => {
                tt.rotationY = et
              }
            },
            metadata: Dt
          }, null, Wt), (0, Ot.l)(null, null, et, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: tt => "url" in tt,
              get: tt => tt.url,
              set: (tt, et) => {
                tt.url = et
              }
            },
            metadata: Dt
          }, St, ct), (0, Ot.l)(null, null, Vt, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: tt => "boundingBoxPosition" in tt,
              get: tt => tt.boundingBoxPosition,
              set: (tt, et) => {
                tt.boundingBoxPosition = et
              }
            },
            metadata: Dt
          }, Rt, It), (0, Ot.l)(null, null, Jt, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: tt => "_files" in tt,
              get: tt => tt._files,
              set: (tt, et) => {
                tt._files = et
              }
            },
            metadata: Dt
          }, Pt, Zt), (0, Ot.l)(null, null, Ct, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: tt => "_forcedExtension" in tt,
              get: tt => tt._forcedExtension,
              set: (tt, et) => {
                tt._forcedExtension = et
              }
            },
            metadata: Dt
          }, Lt, Ft), (0, Ot.l)(null, null, ut, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: tt => "_extensions" in tt,
              get: tt => tt._extensions,
              set: (tt, et) => {
                tt._extensions = et
              }
            },
            metadata: Dt
          }, kt, Gt), (0, Ot.l)(null, null, Kt, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: tt => "_textureMatrix" in tt,
              get: tt => tt._textureMatrix,
              set: (tt, et) => {
                tt._textureMatrix = et
              }
            },
            metadata: Dt
          }, zt, ot), (0, Ot.l)(null, null, ht, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: tt => "_textureMatrixRefraction" in tt,
              get: tt => tt._textureMatrixRefraction,
              set: (tt, et) => {
                tt._textureMatrixRefraction = et
              }
            },
            metadata: Dt
          }, rt, Ut), Dt && Object.defineProperty(tt, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Dt
          })
        })(), tt
      })(),
      Jt = !1;

    function Ct(tt, et, Vt) {
      let Ot = "";
      for (const qt of tt) Ot += qt;
      return new bt(Ot, et, null, Vt, tt)
    }

    function ut(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Ot = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const qt = et.useDelayedTextureLoading;
      et.useDelayedTextureLoading = !1;
      const Dt = new bt(tt, et, null, !1, null, null, null, void 0, !0, Vt, Ot);
      return et.useDelayedTextureLoading = qt, Dt
    }

    function Kt(tt, et, Vt) {
      const Ot = Qt.d.Parse((() => {
        let Ot = !1;
        return tt.prefiltered && (Ot = tt.prefiltered), new bt(Vt + (tt.url ?? tt.name), et, tt.extensions, !1, tt.files || null, null, null, void 0, Ot, tt.forcedExtension)
      }), tt, et);
      if (tt.boundingBoxPosition && (Ot.boundingBoxPosition = mt.n.FromArray(tt.boundingBoxPosition)), tt.boundingBoxSize && (Ot.boundingBoxSize = mt.n.FromArray(tt.boundingBoxSize)), tt.animations)
        for (let qt = 0; qt < tt.animations.length; qt++) {
          const et = tt.animations[qt],
            Vt = (0, Ht.e)("BABYLON.Animation");
          Vt && Ot.animations.push(Vt.Parse(et))
        }
      return Ot
    }
    Jt || (Jt = !0, bt.CreateFromImages = Ct, bt.CreateFromPrefilteredData = ut, bt.Parse = Kt, jt.f._CubeTextureParser = Kt, (0, Ht.i)("BABYLON.CubeTexture", bt))
  },
  41394: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ht
    });
    var Ot = Vt(38899),
      qt = Vt(40661),
      Dt = Vt(40131),
      mt = Vt(40048),
      dt = Vt(40037);
    let jt = !1;
    class Ht extends qt.f {
      constructor(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Ht = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Xt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          Qt = arguments.length > 6 ? arguments[6] : void 0;
        const lt = !Vt || Vt._isScene;
        super(null, lt ? Vt : Vt?.Fw, lt ? !Ot : Vt, Qt, Ht, void 0, void 0, void 0, void 0, Xt), jt || (jt = !0, mt.ThinEngine.prototype.createDynamicTexture = function(tt, et, Vt, Ot) {
          const qt = new dt.d(this, 4);
          return qt.baseWidth = tt, qt.baseHeight = et, Vt && (tt = this.needPOTTextures ? (0, Dt.g)(tt, this._caps.maxTextureSize) : tt, et = this.needPOTTextures ? (0, Dt.g)(et, this._caps.maxTextureSize) : et), qt.width = tt, qt.height = et, qt.isReady = !1, qt.generateMipMaps = Vt, qt.samplingMode = Ot, this.updateTextureSamplingMode(Ot, qt), this._internalTexturesCache.push(qt), qt
        }, mt.ThinEngine.prototype.updateDynamicTexture = function(tt, et, Vt) {
          let Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            qt = arguments.length > 4 ? arguments[4] : void 0,
            Dt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!tt) return;
          const mt = this._gl,
            dt = mt.TEXTURE_2D,
            jt = this._bindTextureDirectly(dt, tt, !0, Dt);
          this._unpackFlipY(void 0 === Vt ? tt.invertY : Vt), Ot && mt.pixelStorei(mt.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const Ht = this._getWebGLTextureType(tt.type),
            Xt = this._getInternalFormat(qt || tt.format),
            Qt = this._getRGBABufferInternalSizedFormat(tt.type, Xt);
          mt.texImage2D(dt, 0, Qt, Xt, Ht, et), tt.generateMipMaps && mt.generateMipmap(dt), jt || this._bindTextureDirectly(dt, null), Ot && mt.pixelStorei(mt.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), qt && (tt.format = qt), tt._dynamicTextureSource = et, tt._premulAlpha = Ot, tt.invertY = Vt || !1, tt.isReady = !0
        }), this.name = tt, this.wrapU = qt.f.CLAMP_ADDRESSMODE, this.wrapV = qt.f.CLAMP_ADDRESSMODE, this._generateMipMaps = Ot;
        const Et = this._getEngine();
        if (!Et) return;
        if (et.getContext) this._canvas = et, this._ownCanvas = !1, this._texture = Et.createDynamicTexture(this._canvas.width, this._canvas.height, Ot, Ht);
        else {
          this._canvas = Et.createCanvas(1, 1), this._ownCanvas = !0;
          const tt = et;
          tt.width || 0 === tt.width ? this._texture = Et.createDynamicTexture(tt.width, tt.height, Ot, Ht) : this._texture = Et.createDynamicTexture(et, et, Ot, Ht)
        }
        const ft = this.getSize();
        this._canvas.width !== ft.width && (this._canvas.width = ft.width), this._canvas.height !== ft.height && (this._canvas.height = ft.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(tt) {
        this._canvas.width = tt.width, this._canvas.height = tt.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(tt.width, tt.height, this._generateMipMaps, this.samplingMode)
      }
      scale(tt) {
        const et = this.getSize();
        et.width *= tt, et.height *= tt, this._recreate(et)
      }
      scaleTo(tt, et) {
        const Vt = this.getSize();
        Vt.width = tt, Vt.height = et, this._recreate(Vt)
      }
      getContext() {
        return this._context
      }
      clear(tt) {
        const et = this.getSize();
        tt && (this._context.fillStyle = tt), this._context.clearRect(0, 0, et.width, et.height)
      }
      update(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === tt || tt, et, this._format || void 0, void 0, Vt)
      }
      drawText(tt, et, Vt, Ot, qt, Dt, mt) {
        let dt = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const jt = this.getSize();
        if (Dt && (this._context.fillStyle = Dt, this._context.fillRect(0, 0, jt.width, jt.height)), this._context.font = Ot, null === et || void 0 === et) {
          const Vt = this._context.measureText(tt);
          et = (jt.width - Vt.width) / 2
        }
        if (null === Vt || void 0 === Vt) {
          const tt = parseInt(Ot.replace(/\D/g, ""));
          Vt = jt.height / 2 + tt / 3.65
        }
        this._context.fillStyle = qt || "", this._context.fillText(tt, et, Vt), dt && this.update(mt)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const tt = this.vI();
        if (!tt) return this;
        const et = this.getSize(),
          Vt = new Ht(this.name, et, tt, this._generateMipMaps);
        return Vt.hasAlpha = this.hasAlpha, Vt.level = this.level, Vt.wrapU = this.wrapU, Vt.wrapV = this.wrapV, Vt
      }
      serialize() {
        const tt = this.vI();
        tt && !tt.isReady() && Ot.d.Warn("The scene must be ready before serializing the dynamic texture");
        const et = super.serialize();
        return Ht._IsCanvasElement(this._canvas) && (et.base64String = this._canvas.toDataURL()), et.invertY = this._invertY, et.samplingMode = this.samplingMode, et
      }
      static _IsCanvasElement(tt) {
        return void 0 !== tt.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  41361: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt
    });
    var Ot = Vt(40661);
    class qt extends Ot.f {
      get depth() {
        return this._depth
      }
      constructor(tt, et, Vt, qt, Dt, mt) {
        let dt = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          jt = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          Ht = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Ot.f.TRILINEAR_SAMPLINGMODE,
          Xt = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Qt = arguments.length > 10 ? arguments[10] : void 0,
          lt = arguments.length > 11 ? arguments[11] : void 0;
        super(null, mt, !dt, jt), this.format = Dt, this._texture = mt.Jf().createRawTexture2DArray(tt, et, Vt, qt, Dt, dt, jt, Ht, null, Xt, Qt ?? 0, lt), this._depth = qt, this.is2DArray = !0
      }
      update(tt) {
        this.updateMipLevel(tt, 0)
      }
      updateMipLevel(tt, et) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, tt, this._texture.format, this._texture.invertY, null, this._texture.type, et)
      }
      static CreateRGBATexture(tt, et, Vt, Ot, Dt) {
        return new qt(tt, et, Vt, Ot, 5, Dt, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  41355: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot.e
    });
    var Ot = Vt(40551);
    (0, Ot.h)()
  },
  40289: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot.d
    });
    var Ot = Vt(40296);
    (0, Ot.b)()
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);