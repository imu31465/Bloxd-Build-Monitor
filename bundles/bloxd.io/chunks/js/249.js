export const id = 249;
export const ids = [249];
export const modules = {
  40223: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Pd,
      g: () => Zd
    });
    var pd = kd(38812),
      Nd = kd(39983),
      Wd = kd(40199),
      Pd = {};
    class Zd {
      constructor(dd) {
        this.attachedToElement = !1, this.attached = {}, this.camera = dd, this.checkInputs = () => {}
      }
      add(dd) {
        const Jd = dd.getSimpleName();
        this.attached[Jd] ? pd.c.Warn("camera input of type " + Jd + " already exists on camera") : (this.attached[Jd] = dd, dd.camera = this.camera, dd.checkInputs && (this.checkInputs = this._addCheckInputs(dd.checkInputs.bind(dd))), this.attachedToElement && dd.attachControl(this.noPreventDefault))
      }
      remove(dd) {
        for (const Jd in this.attached) {
          const kd = this.attached[Jd];
          if (kd === dd) return kd.detachControl(), kd.camera = null, delete this.attached[Jd], void this.rebuildInputCheck()
        }
      }
      removeByType(dd) {
        for (const Jd in this.attached) {
          const kd = this.attached[Jd];
          kd.getClassName() === dd && (kd.detachControl(), kd.camera = null, delete this.attached[Jd], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(dd) {
        const Jd = this.checkInputs;
        return () => {
          Jd(), dd()
        }
      }
      attachInput(dd) {
        this.attachedToElement && dd.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          dd = !Wd.e.ForceAttachControlToAlwaysPreventDefault && dd, this.attachedToElement = !0, this.noPreventDefault = dd;
          for (const Jd in this.attached) this.attached[Jd].attachControl(dd)
        }
      }
      detachElement() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Jd in this.attached) this.attached[Jd].detachControl(), dd && (this.attached[Jd].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const dd in this.attached) {
          const Jd = this.attached[dd];
          Jd.checkInputs && (this.checkInputs = this._addCheckInputs(Jd.checkInputs.bind(Jd)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(dd) {
        const Jd = {};
        for (const kd in this.attached) {
          const dd = this.attached[kd],
            pd = Nd.c.Serialize(dd);
          Jd[dd.getClassName()] = pd
        }
        dd.inputsmgr = Jd
      }
      parse(dd) {
        const Jd = dd.inputsmgr;
        if (Jd) {
          this.clear();
          for (const dd in Jd) {
            const kd = Pd[dd];
            if (kd) {
              const pd = Jd[dd],
                Wd = Nd.c.Parse((() => new kd), pd, null);
              this.add(Wd)
            }
          }
        } else
          for (const kd in this.attached) {
            const Jd = Pd[this.attached[kd].getClassName()];
            if (Jd) {
              const pd = Nd.c.Parse((() => new Jd), dd, null);
              this.remove(this.attached[kd]), this.add(pd)
            }
          }
      }
    }
  },
  41108: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Gd
    });
    var pd = kd(39964),
      Nd = kd(39966),
      Wd = kd(39866),
      Pd = kd(37251),
      Zd = kd(39957),
      gd = kd(40471),
      Cd = kd(37303),
      Kd = kd(37280),
      od = kd(39983),
      ld = kd(39805),
      Qd = kd(38812),
      Ld = kd(40007),
      Od = kd(38105),
      ed = kd(40052);
    var Rd = kd(39874);
    let Id = !1;
    let Gd = (() => {
        var dd;
        let Jd, kd, Cd, Gd, vd, xd, qd, Bd, sd, ad = Zd.b,
          Md = [],
          Fd = [],
          Yd = [],
          md = [],
          bd = [],
          Sd = [],
          jd = [],
          Xd = [],
          fd = [],
          nd = [],
          Ud = [],
          yd = [],
          Dd = [],
          Td = [],
          Ed = [];
        return dd = class extends ad {
          set boundingBoxSize(dd) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(dd)) return;
            this._boundingBoxSize = dd;
            const Jd = this.Wm();
            Jd && Jd.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(dd) {
            this._rotationY = dd, this.setReflectionTextureMatrix(Pd.b.RotationY(this._rotationY))
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
          constructor(dd, Jd) {
            let kd, Nd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Zd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Cd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              od = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              Gd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              vd = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              xd = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              qd = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              Bd = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              sd = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              ad = arguments.length > 13 ? arguments[13] : void 0,
              cd = arguments.length > 14 ? arguments[14] : void 0;
            super(Jd), this._delayedOnLoad = (0, pd.i)(this, Md), this.onLoadObservable = new Kd.e, this.url = (0, pd.i)(this, Fd, void 0), this.boundingBoxPosition = ((0, pd.i)(this, Yd), (0, pd.i)(this, md, Pd.n.Zero())), this._boundingBoxSize = (0, pd.i)(this, bd), this._rotationY = 0, this._files = (0, pd.i)(this, Sd, null), this._forcedExtension = ((0, pd.i)(this, jd), (0, pd.i)(this, Xd, null)), this._extensions = ((0, pd.i)(this, fd), (0, pd.i)(this, nd, null)), this._textureMatrix = ((0, pd.i)(this, Ud), (0, pd.i)(this, yd, void 0)), this._textureMatrixRefraction = ((0, pd.i)(this, Dd), (0, pd.i)(this, Td, new Pd.b)), this._format = (0, pd.i)(this, Ed), this._buffer = null, Id || (Id = !0, Rd.b.prototype._partialLoadFile = function(dd, Jd, kd, pd) {
              let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(dd, (dd => {
                kd[Jd] = dd, kd._internalCount++, 6 === kd._internalCount && pd(kd)
              }), void 0, void 0, !0, ((dd, Jd) => {
                Nd && dd && Nd(dd.status + " " + dd.statusText, Jd)
              }))
            }, Rd.b.prototype._cascadeLoadFiles = function(dd, Jd, kd) {
              let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const Nd = [];
              Nd._internalCount = 0;
              for (let Wd = 0; Wd < 6; Wd++) this._partialLoadFile(kd[Wd], Wd, Nd, Jd, pd)
            }, Rd.b.prototype._cascadeLoadImgs = function(dd, Jd, kd, pd) {
              let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                Wd = arguments.length > 5 ? arguments[5] : void 0;
              const Pd = [];
              Pd._internalCount = 0;
              for (let Zd = 0; Zd < 6; Zd++) this._partialLoadImg(pd[Zd], Zd, Pd, dd, Jd, kd, Nd, Wd)
            }, Rd.b.prototype._partialLoadImg = function(dd, Jd, kd, pd, Nd, Wd) {
              let Pd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                Zd = arguments.length > 7 ? arguments[7] : void 0;
              const gd = (0, Od.c)();
              (0, Ld.r)(dd, (dd => {
                kd[Jd] = dd, kd._internalCount++, pd && pd.removePendingData(gd), 6 === kd._internalCount && Wd && Wd(Nd, kd)
              }), ((dd, Jd) => {
                pd && pd.removePendingData(gd), Pd && Pd(dd, Jd)
              }), pd ? pd.offlineProvider : null, Zd), pd && pd.addPendingData(gd)
            }, Rd.b.prototype.createCubeTextureBase = function(dd, Jd, kd, pd) {
              let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                Pd = arguments.length > 6 ? arguments[6] : void 0,
                Zd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                gd = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                Cd = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                Kd = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                od = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                Ld = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                Od = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                Rd = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                Id = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const Gd = od || new ld.b(this, 7);
              Gd.isCube = !0, Gd.url = dd, Gd.generateMipMaps = !pd, Gd._lodGenerationScale = Cd, Gd._lodGenerationOffset = Kd, Gd._useSRGBBuffer = !!Rd && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!pd), Gd !== od && (Gd.label = dd.substring(0, 60)), this._doNotHandleContextLost || (Gd._extension = Zd, Gd._files = kd, Gd._buffer = Id);
              const vd = dd;
              this._transformTextureUrl && !od && (dd = this._transformTextureUrl(dd));
              const xd = Zd ?? function(dd) {
                  const Jd = dd.split("?")[0],
                    kd = Jd.lastIndexOf(".");
                  return kd > -1 ? Jd.substring(kd).toLowerCase() : ""
                }(dd),
                qd = (0, ed.c)(xd),
                Bd = (dd, Jd) => {
                  Gd.dispose(), Wd ? Wd(dd, Jd) : dd && Qd.c.Warn(dd)
                },
                sd = (Wd, od) => {
                  dd === vd ? Wd && Bd(Wd.status + " " + Wd.statusText, od) : (Qd.c.Warn(`Failed to load ${dd}, falling back to the ${vd}`), this.createCubeTextureBase(vd, Jd, kd, !!pd, Nd, Bd, Pd, Zd, gd, Cd, Kd, Gd, Ld, Od, Rd, Id))
                };
              if (qd) qd.then((pd => {
                const Wd = dd => {
                  Ld && Ld(Gd, dd), pd.loadCubeData(dd, Gd, gd, Nd, ((dd, Jd) => {
                    Bd(dd, Jd)
                  }))
                };
                Id ? Wd(Id) : kd && 6 === kd.length ? pd.supportCascades ? this._cascadeLoadFiles(Jd, (dd => Wd(dd.map((dd => new Uint8Array(dd))))), kd, Bd) : Bd("Textures type does not support cascades.") : this._loadFile(dd, (dd => Wd(new Uint8Array(dd))), void 0, Jd ? Jd.offlineProvider || null : void 0, !0, sd)
              }));
              else {
                if (!kd || 0 === kd.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(Jd, Gd, ((dd, Jd) => {
                  Od && Od(dd, Jd)
                }), kd, Bd)
              }
              return this._internalTexturesCache.push(Gd), Gd
            }), this.name = dd, this.url = dd, this._noMipmap = Wd, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = Pd.b.Identity(), this.coordinatesMode = gd.c.CUBIC_MODE;
            let hd = null;
            null === Nd || Array.isArray(Nd) ? (this._noMipmap = Wd, this._format = Gd, this._createPolynomials = qd, kd = Nd, this._loaderOptions = ad, this._useSRGBBuffer = cd, this._lodScale = Bd, this._lodOffset = sd) : (kd = Nd.extensions ?? null, this._noMipmap = Nd.noMipmap ?? !1, Zd = Nd.files ?? null, hd = Nd.buffer ?? null, this._format = Nd.format ?? 5, vd = Nd.prefiltered ?? !1, xd = Nd.forcedExtension ?? null, this._createPolynomials = Nd.createPolynomials ?? !1, this._lodScale = Nd.lodScale ?? .8, this._lodOffset = Nd.lodOffset ?? 0, this._loaderOptions = Nd.loaderOptions, this._useSRGBBuffer = Nd.useSRGBBuffer, this._sphericalPolynomialTargetSize = Nd.sphericalPolynomialTargetSize ?? 0, Cd = Nd.onLoad ?? null, od = Nd.onError ?? null), (dd || Zd) && this.updateURL(dd, xd, Cd, vd, od, kd, this.Wm()?.useDelayedTextureLoading, Zd, hd)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(dd) {
            let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Pd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              Zd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              gd = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = dd), this.url = dd, Jd && (this._forcedExtension = Jd);
            const Cd = dd.lastIndexOf("."),
              Kd = Jd || (Cd > -1 ? dd.substring(Cd).toLowerCase() : ""),
              od = 0 === Kd.indexOf(".dds"),
              ld = 0 === Kd.indexOf(".env"),
              Qd = 0 === Kd.indexOf(".basis");
            if (ld ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = pd, pd && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), Zd) this._files = Zd;
            else if (Qd || ld || od || Wd || (Wd = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, Wd) {
              for (let Jd = 0; Jd < Wd.length; Jd++) this._files.push(dd + Wd[Jd]);
              this._extensions = Wd
            }
            this._buffer = gd, Pd ? (this.delayLoadState = 4, this._delayedOnLoad = kd, this._delayedOnError = Nd) : this._loadTexture(kd, Nd)
          }
          delayLoad(dd) {
            4 === this.delayLoadState && (dd && (this._forcedExtension = dd), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(dd) {
            if (dd.updateFlag === this._textureMatrix.updateFlag) return;
            if (dd.isIdentity() !== this._textureMatrix.isIdentity() && this.Wm()?.markAllMaterialsAsDirty(1, (dd => -1 !== dd.getActiveTextures().indexOf(this))), this._textureMatrix = dd, !this.Wm()?.useRightHandedSystem) return;
            const Jd = Pd.h.IL[0],
              kd = Pd.h.Quaternion[0],
              pd = Pd.h.IL[1];
            this._textureMatrix.decompose(Jd, kd, pd), kd.z *= -1, kd.w *= -1, Pd.b.ComposeToRef(Jd, kd, pd, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.Wm()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const kd = this.Wm(),
              pd = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const Nd = () => {
                this.onLoadObservable.notifyObservers(this), pd && (pd.dispose(), this.Wm()?.markAllMaterialsAsDirty(1)), dd && dd()
              },
              Pd = (dd, kd) => {
                this._loadingError = !0, this._errorObject = {
                  message: dd,
                  exception: kd
                }, Jd && Jd(dd, kd), gd.c.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? Wd.d.SetImmediate((() => Nd())) : this._texture.onLoadedObservable.add((() => Nd())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, kd, this._lodScale, this._lodOffset, dd, Pd, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, kd, this._files, this._noMipmap, dd, Pd, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let Jd = 0;
            const kd = this.irradianceTexture,
              pd = od.c.Clone((() => {
                const kd = new dd(this.url, this.Wm() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return Jd = kd.uniqueId, kd
              }), this);
            return pd.uniqueId = Jd, kd && !this.irradianceTexture && (this.irradianceTexture = kd), pd
          }
        }, (() => {
          const Wd = "function" === typeof Symbol && Symbol.metadata ? Object.create(ad[Symbol.metadata] ?? null) : void 0;
          Jd = [(0, Nd.H)()], kd = [(0, Nd.F)()], Cd = [(0, Nd.F)()], Gd = [(0, Nd.H)("rotationY")], vd = [(0, Nd.H)("files")], xd = [(0, Nd.H)("forcedExtension")], qd = [(0, Nd.H)("extensions")], Bd = [(0, Nd.u)("textureMatrix")], sd = [(0, Nd.u)("textureMatrixRefraction")], (0, pd.h)(dd, null, Cd, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: dd => "boundingBoxSize" in dd,
              get: dd => dd.boundingBoxSize
            },
            metadata: Wd
          }, null, Md), (0, pd.h)(dd, null, Gd, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: dd => "rotationY" in dd,
              set: (dd, Jd) => {
                dd.rotationY = Jd
              }
            },
            metadata: Wd
          }, null, Md), (0, pd.h)(null, null, Jd, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: dd => "url" in dd,
              get: dd => dd.url,
              set: (dd, Jd) => {
                dd.url = Jd
              }
            },
            metadata: Wd
          }, Fd, Yd), (0, pd.h)(null, null, kd, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: dd => "boundingBoxPosition" in dd,
              get: dd => dd.boundingBoxPosition,
              set: (dd, Jd) => {
                dd.boundingBoxPosition = Jd
              }
            },
            metadata: Wd
          }, md, bd), (0, pd.h)(null, null, vd, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: dd => "_files" in dd,
              get: dd => dd._files,
              set: (dd, Jd) => {
                dd._files = Jd
              }
            },
            metadata: Wd
          }, Sd, jd), (0, pd.h)(null, null, xd, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: dd => "_forcedExtension" in dd,
              get: dd => dd._forcedExtension,
              set: (dd, Jd) => {
                dd._forcedExtension = Jd
              }
            },
            metadata: Wd
          }, Xd, fd), (0, pd.h)(null, null, qd, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: dd => "_extensions" in dd,
              get: dd => dd._extensions,
              set: (dd, Jd) => {
                dd._extensions = Jd
              }
            },
            metadata: Wd
          }, nd, Ud), (0, pd.h)(null, null, Bd, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: dd => "_textureMatrix" in dd,
              get: dd => dd._textureMatrix,
              set: (dd, Jd) => {
                dd._textureMatrix = Jd
              }
            },
            metadata: Wd
          }, yd, Dd), (0, pd.h)(null, null, sd, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: dd => "_textureMatrixRefraction" in dd,
              get: dd => dd._textureMatrixRefraction,
              set: (dd, Jd) => {
                dd._textureMatrixRefraction = Jd
              }
            },
            metadata: Wd
          }, Td, Ed), Wd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wd
          })
        })(), dd
      })(),
      vd = !1;

    function xd(dd, Jd, kd) {
      let pd = "";
      for (const Nd of dd) pd += Nd;
      return new Gd(pd, Jd, null, kd, dd)
    }

    function qd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        pd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Nd = Jd.useDelayedTextureLoading;
      Jd.useDelayedTextureLoading = !1;
      const Wd = new Gd(dd, Jd, null, !1, null, null, null, void 0, !0, kd, pd);
      return Jd.useDelayedTextureLoading = Nd, Wd
    }

    function Bd(dd, Jd, kd) {
      const pd = od.c.Parse((() => {
        let pd = !1;
        return dd.prefiltered && (pd = dd.prefiltered), new Gd(kd + (dd.url ?? dd.name), Jd, dd.extensions, !1, dd.files || null, null, null, void 0, pd, dd.forcedExtension)
      }), dd, Jd);
      if (dd.boundingBoxPosition && (pd.boundingBoxPosition = Pd.n.FromArray(dd.boundingBoxPosition)), dd.boundingBoxSize && (pd.boundingBoxSize = Pd.n.FromArray(dd.boundingBoxSize)), dd.animations)
        for (let Nd = 0; Nd < dd.animations.length; Nd++) {
          const Jd = dd.animations[Nd],
            kd = (0, Cd.e)("BABYLON.Animation");
          kd && pd.animations.push(kd.Parse(Jd))
        }
      return pd
    }
    vd || (vd = !0, Gd.CreateFromImages = xd, Gd.CreateFromPrefilteredData = qd, Gd.Parse = Bd, gd.c._CubeTextureParser = Bd, (0, Cd.h)("BABYLON.CubeTexture", Gd))
  },
  41148: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Cd
    });
    var pd = kd(38812),
      Nd = kd(40471),
      Wd = kd(39902),
      Pd = kd(39813),
      Zd = kd(39805);
    let gd = !1;
    class Cd extends Nd.c {
      constructor(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Cd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Kd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          od = arguments.length > 6 ? arguments[6] : void 0;
        const ld = !kd || kd._isScene;
        super(null, ld ? kd : kd?.BO, ld ? !pd : kd, od, Cd, void 0, void 0, void 0, void 0, Kd), gd || (gd = !0, Pd.ThinEngine.prototype.createDynamicTexture = function(dd, Jd, kd, pd) {
          const Nd = new Zd.b(this, 4);
          return Nd.baseWidth = dd, Nd.baseHeight = Jd, kd && (dd = this.needPOTTextures ? (0, Wd.e)(dd, this._caps.maxTextureSize) : dd, Jd = this.needPOTTextures ? (0, Wd.e)(Jd, this._caps.maxTextureSize) : Jd), Nd.width = dd, Nd.height = Jd, Nd.isReady = !1, Nd.generateMipMaps = kd, Nd.samplingMode = pd, this.updateTextureSamplingMode(pd, Nd), this._internalTexturesCache.push(Nd), Nd
        }, Pd.ThinEngine.prototype.updateDynamicTexture = function(dd, Jd, kd) {
          let pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Nd = arguments.length > 4 ? arguments[4] : void 0,
            Wd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!dd) return;
          const Pd = this._gl,
            Zd = Pd.TEXTURE_2D,
            gd = this._bindTextureDirectly(Zd, dd, !0, Wd);
          this._unpackFlipY(void 0 === kd ? dd.invertY : kd), pd && Pd.pixelStorei(Pd.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const Cd = this._getWebGLTextureType(dd.type),
            Kd = this._getInternalFormat(Nd || dd.format),
            od = this._getRGBABufferInternalSizedFormat(dd.type, Kd);
          Pd.texImage2D(Zd, 0, od, Kd, Cd, Jd), dd.generateMipMaps && Pd.generateMipmap(Zd), gd || this._bindTextureDirectly(Zd, null), pd && Pd.pixelStorei(Pd.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), Nd && (dd.format = Nd), dd._dynamicTextureSource = Jd, dd._premulAlpha = pd, dd.invertY = kd || !1, dd.isReady = !0
        }), this.name = dd, this.wrapU = Nd.c.CLAMP_ADDRESSMODE, this.wrapV = Nd.c.CLAMP_ADDRESSMODE, this._generateMipMaps = pd;
        const Qd = this._getEngine();
        if (!Qd) return;
        if (Jd.getContext) this._canvas = Jd, this._ownCanvas = !1, this._texture = Qd.createDynamicTexture(this._canvas.width, this._canvas.height, pd, Cd);
        else {
          this._canvas = Qd.createCanvas(1, 1), this._ownCanvas = !0;
          const dd = Jd;
          dd.width || 0 === dd.width ? this._texture = Qd.createDynamicTexture(dd.width, dd.height, pd, Cd) : this._texture = Qd.createDynamicTexture(Jd, Jd, pd, Cd)
        }
        const Ld = this.getSize();
        this._canvas.width !== Ld.width && (this._canvas.width = Ld.width), this._canvas.height !== Ld.height && (this._canvas.height = Ld.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(dd) {
        this._canvas.width = dd.width, this._canvas.height = dd.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(dd.width, dd.height, this._generateMipMaps, this.samplingMode)
      }
      scale(dd) {
        const Jd = this.getSize();
        Jd.width *= dd, Jd.height *= dd, this._recreate(Jd)
      }
      scaleTo(dd, Jd) {
        const kd = this.getSize();
        kd.width = dd, kd.height = Jd, this._recreate(kd)
      }
      getContext() {
        return this._context
      }
      clear(dd) {
        const Jd = this.getSize();
        dd && (this._context.fillStyle = dd), this._context.clearRect(0, 0, Jd.width, Jd.height)
      }
      update(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === dd || dd, Jd, this._format || void 0, void 0, kd)
      }
      drawText(dd, Jd, kd, pd, Nd, Wd, Pd) {
        let Zd = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const gd = this.getSize();
        if (Wd && (this._context.fillStyle = Wd, this._context.fillRect(0, 0, gd.width, gd.height)), this._context.font = pd, null === Jd || void 0 === Jd) {
          const kd = this._context.measureText(dd);
          Jd = (gd.width - kd.width) / 2
        }
        if (null === kd || void 0 === kd) {
          const dd = parseInt(pd.replace(/\D/g, ""));
          kd = gd.height / 2 + dd / 3.65
        }
        this._context.fillStyle = Nd || "", this._context.fillText(dd, Jd, kd), Zd && this.update(Pd)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const dd = this.Wm();
        if (!dd) return this;
        const Jd = this.getSize(),
          kd = new Cd(this.name, Jd, dd, this._generateMipMaps);
        return kd.hasAlpha = this.hasAlpha, kd.level = this.level, kd.wrapU = this.wrapU, kd.wrapV = this.wrapV, kd
      }
      serialize() {
        const dd = this.Wm();
        dd && !dd.isReady() && pd.c.Warn("The scene must be ready before serializing the dynamic texture");
        const Jd = super.serialize();
        return Cd._IsCanvasElement(this._canvas) && (Jd.base64String = this._canvas.toDataURL()), Jd.invertY = this._invertY, Jd.samplingMode = this.samplingMode, Jd
      }
      static _IsCanvasElement(dd) {
        return void 0 !== dd.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  41125: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Nd
    });
    var pd = kd(40471);
    class Nd extends pd.c {
      get depth() {
        return this._depth
      }
      constructor(dd, Jd, kd, Nd, Wd, Pd) {
        let Zd = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          gd = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          Cd = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : pd.c.TRILINEAR_SAMPLINGMODE,
          Kd = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          od = arguments.length > 10 ? arguments[10] : void 0,
          ld = arguments.length > 11 ? arguments[11] : void 0;
        super(null, Pd, !Zd, gd), this.format = Wd, this._texture = Pd.eL().createRawTexture2DArray(dd, Jd, kd, Nd, Wd, Zd, gd, Cd, null, Kd, od ?? 0, ld), this._depth = Nd, this.is2DArray = !0
      }
      update(dd) {
        this.updateMipLevel(dd, 0)
      }
      updateMipLevel(dd, Jd) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, dd, this._texture.format, this._texture.invertY, null, this._texture.type, Jd)
      }
      static CreateRGBATexture(dd, Jd, kd, pd, Wd) {
        return new Nd(dd, Jd, kd, pd, 5, Wd, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  41117: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd.c
    });
    var pd = kd(40351);
    (0, pd.f)()
  },
  40054: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd.i
    });
    var pd = kd(40062);
    (0, pd.e)()
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);