export const id = 293;
export const ids = [293];
export const modules = {
  42154: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd,
      f: () => Kd
    });
    var Wd = md(40262),
      Fd = md(41948),
      Rd = md(42126),
      Xd = {};
    class Kd {
      constructor(dd) {
        this.attachedToElement = !1, this.attached = {}, this.camera = dd, this.checkInputs = () => {}
      }
      add(dd) {
        const Od = dd.getSimpleName();
        this.attached[Od] ? Wd.c.Warn("camera input of type " + Od + " already exists on camera") : (this.attached[Od] = dd, dd.camera = this.camera, dd.checkInputs && (this.checkInputs = this._addCheckInputs(dd.checkInputs.bind(dd))), this.attachedToElement && dd.attachControl(this.noPreventDefault))
      }
      remove(dd) {
        for (const Od in this.attached) {
          const md = this.attached[Od];
          if (md === dd) return md.detachControl(), md.camera = null, delete this.attached[Od], void this.rebuildInputCheck()
        }
      }
      removeByType(dd) {
        for (const Od in this.attached) {
          const md = this.attached[Od];
          md.getClassName() === dd && (md.detachControl(), md.camera = null, delete this.attached[Od], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(dd) {
        const Od = this.checkInputs;
        return () => {
          Od(), dd()
        }
      }
      attachInput(dd) {
        this.attachedToElement && dd.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          dd = !Rd.e.ForceAttachControlToAlwaysPreventDefault && dd, this.attachedToElement = !0, this.noPreventDefault = dd;
          for (const Od in this.attached) this.attached[Od].attachControl(dd)
        }
      }
      detachElement() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Od in this.attached) this.attached[Od].detachControl(), dd && (this.attached[Od].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const dd in this.attached) {
          const Od = this.attached[dd];
          Od.checkInputs && (this.checkInputs = this._addCheckInputs(Od.checkInputs.bind(Od)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(dd) {
        const Od = {};
        for (const md in this.attached) {
          const dd = this.attached[md],
            Wd = Fd.b.Serialize(dd);
          Od[dd.getClassName()] = Wd
        }
        dd.inputsmgr = Od
      }
      parse(dd) {
        const Od = dd.inputsmgr;
        if (Od) {
          this.clear();
          for (const dd in Od) {
            const md = Xd[dd];
            if (md) {
              const Wd = Od[dd],
                Rd = Fd.b.Parse((() => new md), Wd, null);
              this.add(Rd)
            }
          }
        } else
          for (const md in this.attached) {
            const Od = Xd[this.attached[md].getClassName()];
            if (Od) {
              const Wd = Fd.b.Parse((() => new Od), dd, null);
              this.remove(this.attached[md]), this.add(Wd)
            }
          }
      }
    }
  },
  43097: (dd, Od, md) => {
    md.d(Od, {
      b: () => pd
    });
    var Wd = md(41922),
      Fd = md(41931),
      Rd = md(41831),
      Xd = md(38636),
      Kd = md(41914),
      hd = md(42412),
      vd = md(38669),
      Qd = md(38660),
      td = md(41948),
      od = md(41763),
      Nd = md(40262),
      qd = md(41961),
      Hd = md(39461),
      yd = md(42010);
    var bd = md(41838);
    let Td = !1;
    let pd = (() => {
        var dd;
        let Od, md, vd, pd, Yd, gd, wd, Ed, Jd, Ud = Kd.c,
          xd = [],
          Bd = [],
          Sd = [],
          sd = [],
          ud = [],
          Vd = [],
          Ad = [],
          rd = [],
          Gd = [],
          nd = [],
          Ld = [],
          Pd = [],
          zd = [],
          cd = [],
          jd = [];
        return dd = class extends Ud {
          set boundingBoxSize(dd) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(dd)) return;
            this._boundingBoxSize = dd;
            const Od = this.zV();
            Od && Od.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(dd) {
            this._rotationY = dd, this.setReflectionTextureMatrix(Xd.d.RotationY(this._rotationY))
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
          constructor(dd, Od) {
            let md, Fd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Rd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Kd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              vd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              td = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              pd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              Yd = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              gd = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              wd = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              Ed = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              Jd = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              Ud = arguments.length > 13 ? arguments[13] : void 0,
              Dd = arguments.length > 14 ? arguments[14] : void 0;
            super(Od), this._delayedOnLoad = (0, Wd.k)(this, xd), this.onLoadObservable = new Qd.c, this.url = (0, Wd.k)(this, Bd, void 0), this.boundingBoxPosition = ((0, Wd.k)(this, Sd), (0, Wd.k)(this, sd, Xd.j.Zero())), this._boundingBoxSize = (0, Wd.k)(this, ud), this._rotationY = 0, this._files = (0, Wd.k)(this, Vd, null), this._forcedExtension = ((0, Wd.k)(this, Ad), (0, Wd.k)(this, rd, null)), this._extensions = ((0, Wd.k)(this, Gd), (0, Wd.k)(this, nd, null)), this._textureMatrix = ((0, Wd.k)(this, Ld), (0, Wd.k)(this, Pd, void 0)), this._textureMatrixRefraction = ((0, Wd.k)(this, zd), (0, Wd.k)(this, cd, new Xd.d)), this._format = (0, Wd.k)(this, jd), this._buffer = null, Td || (Td = !0, bd.b.prototype._partialLoadFile = function(dd, Od, md, Wd) {
              let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(dd, (dd => {
                md[Od] = dd, md._internalCount++, 6 === md._internalCount && Wd(md)
              }), void 0, void 0, !0, ((dd, Od) => {
                Fd && dd && Fd(dd.status + " " + dd.statusText, Od)
              }))
            }, bd.b.prototype._cascadeLoadFiles = function(dd, Od, md) {
              let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const Fd = [];
              Fd._internalCount = 0;
              for (let Rd = 0; Rd < 6; Rd++) this._partialLoadFile(md[Rd], Rd, Fd, Od, Wd)
            }, bd.b.prototype._cascadeLoadImgs = function(dd, Od, md, Wd) {
              let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                Rd = arguments.length > 5 ? arguments[5] : void 0;
              const Xd = [];
              Xd._internalCount = 0;
              for (let Kd = 0; Kd < 6; Kd++) this._partialLoadImg(Wd[Kd], Kd, Xd, dd, Od, md, Fd, Rd)
            }, bd.b.prototype._partialLoadImg = function(dd, Od, md, Wd, Fd, Rd) {
              let Xd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                Kd = arguments.length > 7 ? arguments[7] : void 0;
              const hd = (0, Hd.b)();
              (0, qd.h)(dd, (dd => {
                md[Od] = dd, md._internalCount++, Wd && Wd.removePendingData(hd), 6 === md._internalCount && Rd && Rd(Fd, md)
              }), ((dd, Od) => {
                Wd && Wd.removePendingData(hd), Xd && Xd(dd, Od)
              }), Wd ? Wd.offlineProvider : null, Kd), Wd && Wd.addPendingData(hd)
            }, bd.b.prototype.createCubeTextureBase = function(dd, Od, md, Wd) {
              let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                Xd = arguments.length > 6 ? arguments[6] : void 0,
                Kd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                hd = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                vd = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                Qd = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                td = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                qd = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                Hd = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                bd = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                Td = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const pd = td || new od.c(this, 7);
              pd.isCube = !0, pd.url = dd, pd.generateMipMaps = !Wd, pd._lodGenerationScale = vd, pd._lodGenerationOffset = Qd, pd._useSRGBBuffer = !!bd && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!Wd), pd !== td && (pd.label = dd.substring(0, 60)), this._doNotHandleContextLost || (pd._extension = Kd, pd._files = md, pd._buffer = Td);
              const Yd = dd;
              this._transformTextureUrl && !td && (dd = this._transformTextureUrl(dd));
              const gd = Kd ?? function(dd) {
                  const Od = dd.split("?")[0],
                    md = Od.lastIndexOf(".");
                  return md > -1 ? Od.substring(md).toLowerCase() : ""
                }(dd),
                wd = (0, yd.b)(gd),
                Ed = (dd, Od) => {
                  pd.dispose(), Rd ? Rd(dd, Od) : dd && Nd.c.Warn(dd)
                },
                Jd = (Rd, td) => {
                  dd === Yd ? Rd && Ed(Rd.status + " " + Rd.statusText, td) : (Nd.c.Warn(`Failed to load ${dd}, falling back to the ${Yd}`), this.createCubeTextureBase(Yd, Od, md, !!Wd, Fd, Ed, Xd, Kd, hd, vd, Qd, pd, qd, Hd, bd, Td))
                };
              if (wd) wd.then((Wd => {
                const Rd = dd => {
                  qd && qd(pd, dd), Wd.loadCubeData(dd, pd, hd, Fd, ((dd, Od) => {
                    Ed(dd, Od)
                  }))
                };
                Td ? Rd(Td) : md && 6 === md.length ? Wd.supportCascades ? this._cascadeLoadFiles(Od, (dd => Rd(dd.map((dd => new Uint8Array(dd))))), md, Ed) : Ed("Textures type does not support cascades.") : this._loadFile(dd, (dd => Rd(new Uint8Array(dd))), void 0, Od ? Od.offlineProvider || null : void 0, !0, Jd)
              }));
              else {
                if (!md || 0 === md.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(Od, pd, ((dd, Od) => {
                  Hd && Hd(dd, Od)
                }), md, Ed)
              }
              return this._internalTexturesCache.push(pd), pd
            }), this.name = dd, this.url = dd, this._noMipmap = Rd, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = Xd.d.Identity(), this.coordinatesMode = hd.f.CUBIC_MODE;
            let ed = null;
            null === Fd || Array.isArray(Fd) ? (this._noMipmap = Rd, this._format = pd, this._createPolynomials = wd, md = Fd, this._loaderOptions = Ud, this._useSRGBBuffer = Dd, this._lodScale = Ed, this._lodOffset = Jd) : (md = Fd.extensions ?? null, this._noMipmap = Fd.noMipmap ?? !1, Kd = Fd.files ?? null, ed = Fd.buffer ?? null, this._format = Fd.format ?? 5, Yd = Fd.prefiltered ?? !1, gd = Fd.forcedExtension ?? null, this._createPolynomials = Fd.createPolynomials ?? !1, this._lodScale = Fd.lodScale ?? .8, this._lodOffset = Fd.lodOffset ?? 0, this._loaderOptions = Fd.loaderOptions, this._useSRGBBuffer = Fd.useSRGBBuffer, this._sphericalPolynomialTargetSize = Fd.sphericalPolynomialTargetSize ?? 0, vd = Fd.onLoad ?? null, td = Fd.onError ?? null), (dd || Kd) && this.updateURL(dd, gd, vd, Yd, td, md, this.zV()?.useDelayedTextureLoading, Kd, ed)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Xd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              Kd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              hd = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = dd), this.url = dd, Od && (this._forcedExtension = Od);
            const vd = dd.lastIndexOf("."),
              Qd = Od || (vd > -1 ? dd.substring(vd).toLowerCase() : ""),
              td = 0 === Qd.indexOf(".dds"),
              od = 0 === Qd.indexOf(".env"),
              Nd = 0 === Qd.indexOf(".basis");
            if (od ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = Wd, Wd && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), Kd) this._files = Kd;
            else if (Nd || od || td || Rd || (Rd = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, Rd) {
              for (let Od = 0; Od < Rd.length; Od++) this._files.push(dd + Rd[Od]);
              this._extensions = Rd
            }
            this._buffer = hd, Xd ? (this.delayLoadState = 4, this._delayedOnLoad = md, this._delayedOnError = Fd) : this._loadTexture(md, Fd)
          }
          delayLoad(dd) {
            4 === this.delayLoadState && (dd && (this._forcedExtension = dd), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(dd) {
            if (dd.updateFlag === this._textureMatrix.updateFlag) return;
            if (dd.isIdentity() !== this._textureMatrix.isIdentity() && this.zV()?.markAllMaterialsAsDirty(1, (dd => -1 !== dd.getActiveTextures().indexOf(this))), this._textureMatrix = dd, !this.zV()?.useRightHandedSystem) return;
            const Od = Xd.h.Cq[0],
              md = Xd.h.Quaternion[0],
              Wd = Xd.h.Cq[1];
            this._textureMatrix.decompose(Od, md, Wd), md.z *= -1, md.w *= -1, Xd.d.ComposeToRef(Od, md, Wd, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.zV()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const md = this.zV(),
              Wd = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const Fd = () => {
                this.onLoadObservable.notifyObservers(this), Wd && (Wd.dispose(), this.zV()?.markAllMaterialsAsDirty(1)), dd && dd()
              },
              Xd = (dd, md) => {
                this._loadingError = !0, this._errorObject = {
                  message: dd,
                  exception: md
                }, Od && Od(dd, md), hd.f.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? Rd.c.SetImmediate((() => Fd())) : this._texture.onLoadedObservable.add((() => Fd())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, md, this._lodScale, this._lodOffset, dd, Xd, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, md, this._files, this._noMipmap, dd, Xd, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let Od = 0;
            const md = this.irradianceTexture,
              Wd = td.b.Clone((() => {
                const md = new dd(this.url, this.zV() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return Od = md.uniqueId, md
              }), this);
            return Wd.uniqueId = Od, md && !this.irradianceTexture && (this.irradianceTexture = md), Wd
          }
        }, (() => {
          const Rd = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ud[Symbol.metadata] ?? null) : void 0;
          Od = [(0, Fd.E)()], md = [(0, Fd.B)()], vd = [(0, Fd.B)()], pd = [(0, Fd.E)("rotationY")], Yd = [(0, Fd.E)("files")], gd = [(0, Fd.E)("forcedExtension")], wd = [(0, Fd.E)("extensions")], Ed = [(0, Fd.q)("textureMatrix")], Jd = [(0, Fd.q)("textureMatrixRefraction")], (0, Wd.h)(dd, null, vd, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: dd => "boundingBoxSize" in dd,
              get: dd => dd.boundingBoxSize
            },
            metadata: Rd
          }, null, xd), (0, Wd.h)(dd, null, pd, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: dd => "rotationY" in dd,
              set: (dd, Od) => {
                dd.rotationY = Od
              }
            },
            metadata: Rd
          }, null, xd), (0, Wd.h)(null, null, Od, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: dd => "url" in dd,
              get: dd => dd.url,
              set: (dd, Od) => {
                dd.url = Od
              }
            },
            metadata: Rd
          }, Bd, Sd), (0, Wd.h)(null, null, md, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: dd => "boundingBoxPosition" in dd,
              get: dd => dd.boundingBoxPosition,
              set: (dd, Od) => {
                dd.boundingBoxPosition = Od
              }
            },
            metadata: Rd
          }, sd, ud), (0, Wd.h)(null, null, Yd, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: dd => "_files" in dd,
              get: dd => dd._files,
              set: (dd, Od) => {
                dd._files = Od
              }
            },
            metadata: Rd
          }, Vd, Ad), (0, Wd.h)(null, null, gd, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: dd => "_forcedExtension" in dd,
              get: dd => dd._forcedExtension,
              set: (dd, Od) => {
                dd._forcedExtension = Od
              }
            },
            metadata: Rd
          }, rd, Gd), (0, Wd.h)(null, null, wd, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: dd => "_extensions" in dd,
              get: dd => dd._extensions,
              set: (dd, Od) => {
                dd._extensions = Od
              }
            },
            metadata: Rd
          }, nd, Ld), (0, Wd.h)(null, null, Ed, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: dd => "_textureMatrix" in dd,
              get: dd => dd._textureMatrix,
              set: (dd, Od) => {
                dd._textureMatrix = Od
              }
            },
            metadata: Rd
          }, Pd, zd), (0, Wd.h)(null, null, Jd, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: dd => "_textureMatrixRefraction" in dd,
              get: dd => dd._textureMatrixRefraction,
              set: (dd, Od) => {
                dd._textureMatrixRefraction = Od
              }
            },
            metadata: Rd
          }, cd, jd), Rd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Rd
          })
        })(), dd
      })(),
      Yd = !1;

    function gd(dd, Od, md) {
      let Wd = "";
      for (const Fd of dd) Wd += Fd;
      return new pd(Wd, Od, null, md, dd)
    }

    function wd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Wd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Fd = Od.useDelayedTextureLoading;
      Od.useDelayedTextureLoading = !1;
      const Rd = new pd(dd, Od, null, !1, null, null, null, void 0, !0, md, Wd);
      return Od.useDelayedTextureLoading = Fd, Rd
    }

    function Ed(dd, Od, md) {
      const Wd = td.b.Parse((() => {
        let Wd = !1;
        return dd.prefiltered && (Wd = dd.prefiltered), new pd(md + (dd.url ?? dd.name), Od, dd.extensions, !1, dd.files || null, null, null, void 0, Wd, dd.forcedExtension)
      }), dd, Od);
      if (dd.boundingBoxPosition && (Wd.boundingBoxPosition = Xd.j.FromArray(dd.boundingBoxPosition)), dd.boundingBoxSize && (Wd.boundingBoxSize = Xd.j.FromArray(dd.boundingBoxSize)), dd.animations)
        for (let Fd = 0; Fd < dd.animations.length; Fd++) {
          const Od = dd.animations[Fd],
            md = (0, vd.c)("BABYLON.Animation");
          md && Wd.animations.push(md.Parse(Od))
        }
      return Wd
    }
    Yd || (Yd = !0, pd.CreateFromImages = gd, pd.CreateFromPrefilteredData = wd, pd.Parse = Ed, hd.f._CubeTextureParser = Ed, (0, vd.e)("BABYLON.CubeTexture", pd))
  },
  43143: (dd, Od, md) => {
    md.d(Od, {
      e: () => vd
    });
    var Wd = md(40262),
      Fd = md(42412),
      Rd = md(41859),
      Xd = md(41777),
      Kd = md(41763);
    let hd = !1;
    class vd extends Fd.f {
      constructor(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          vd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Qd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          td = arguments.length > 6 ? arguments[6] : void 0;
        const od = !md || md._isScene;
        super(null, od ? md : md?.MH, od ? !Wd : md, td, vd, void 0, void 0, void 0, void 0, Qd), hd || (hd = !0, Xd.ThinEngine.prototype.createDynamicTexture = function(dd, Od, md, Wd) {
          const Fd = new Kd.c(this, 4);
          return Fd.baseWidth = dd, Fd.baseHeight = Od, md && (dd = this.needPOTTextures ? (0, Rd.f)(dd, this._caps.maxTextureSize) : dd, Od = this.needPOTTextures ? (0, Rd.f)(Od, this._caps.maxTextureSize) : Od), Fd.width = dd, Fd.height = Od, Fd.isReady = !1, Fd.generateMipMaps = md, Fd.samplingMode = Wd, this.updateTextureSamplingMode(Wd, Fd), this._internalTexturesCache.push(Fd), Fd
        }, Xd.ThinEngine.prototype.updateDynamicTexture = function(dd, Od, md) {
          let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Fd = arguments.length > 4 ? arguments[4] : void 0,
            Rd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!dd) return;
          const Xd = this._gl,
            Kd = Xd.TEXTURE_2D,
            hd = this._bindTextureDirectly(Kd, dd, !0, Rd);
          this._unpackFlipY(void 0 === md ? dd.invertY : md), Wd && Xd.pixelStorei(Xd.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const vd = this._getWebGLTextureType(dd.type),
            Qd = this._getInternalFormat(Fd || dd.format),
            td = this._getRGBABufferInternalSizedFormat(dd.type, Qd);
          Xd.texImage2D(Kd, 0, td, Qd, vd, Od), dd.generateMipMaps && Xd.generateMipmap(Kd), hd || this._bindTextureDirectly(Kd, null), Wd && Xd.pixelStorei(Xd.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), Fd && (dd.format = Fd), dd._dynamicTextureSource = Od, dd._premulAlpha = Wd, dd.invertY = md || !1, dd.isReady = !0
        }), this.name = dd, this.wrapU = Fd.f.CLAMP_ADDRESSMODE, this.wrapV = Fd.f.CLAMP_ADDRESSMODE, this._generateMipMaps = Wd;
        const Nd = this._getEngine();
        if (!Nd) return;
        if (Od.getContext) this._canvas = Od, this._ownCanvas = !1, this._texture = Nd.createDynamicTexture(this._canvas.width, this._canvas.height, Wd, vd);
        else {
          this._canvas = Nd.createCanvas(1, 1), this._ownCanvas = !0;
          const dd = Od;
          dd.width || 0 === dd.width ? this._texture = Nd.createDynamicTexture(dd.width, dd.height, Wd, vd) : this._texture = Nd.createDynamicTexture(Od, Od, Wd, vd)
        }
        const qd = this.getSize();
        this._canvas.width !== qd.width && (this._canvas.width = qd.width), this._canvas.height !== qd.height && (this._canvas.height = qd.height), this._context = this._canvas.getContext("2d")
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
        const Od = this.getSize();
        Od.width *= dd, Od.height *= dd, this._recreate(Od)
      }
      scaleTo(dd, Od) {
        const md = this.getSize();
        md.width = dd, md.height = Od, this._recreate(md)
      }
      getContext() {
        return this._context
      }
      clear(dd) {
        const Od = this.getSize();
        dd && (this._context.fillStyle = dd), this._context.clearRect(0, 0, Od.width, Od.height)
      }
      update(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === dd || dd, Od, this._format || void 0, void 0, md)
      }
      drawText(dd, Od, md, Wd, Fd, Rd, Xd) {
        let Kd = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const hd = this.getSize();
        if (Rd && (this._context.fillStyle = Rd, this._context.fillRect(0, 0, hd.width, hd.height)), this._context.font = Wd, null === Od || void 0 === Od) {
          const md = this._context.measureText(dd);
          Od = (hd.width - md.width) / 2
        }
        if (null === md || void 0 === md) {
          const dd = parseInt(Wd.replace(/\D/g, ""));
          md = hd.height / 2 + dd / 3.65
        }
        this._context.fillStyle = Fd || "", this._context.fillText(dd, Od, md), Kd && this.update(Xd)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const dd = this.zV();
        if (!dd) return this;
        const Od = this.getSize(),
          md = new vd(this.name, Od, dd, this._generateMipMaps);
        return md.hasAlpha = this.hasAlpha, md.level = this.level, md.wrapU = this.wrapU, md.wrapV = this.wrapV, md
      }
      serialize() {
        const dd = this.zV();
        dd && !dd.isReady() && Wd.c.Warn("The scene must be ready before serializing the dynamic texture");
        const Od = super.serialize();
        return vd._IsCanvasElement(this._canvas) && (Od.base64String = this._canvas.toDataURL()), Od.invertY = this._invertY, Od.samplingMode = this.samplingMode, Od
      }
      static _IsCanvasElement(dd) {
        return void 0 !== dd.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  43113: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd
    });
    var Wd = md(42412);
    class Fd extends Wd.f {
      get depth() {
        return this._depth
      }
      constructor(dd, Od, md, Fd, Rd, Xd) {
        let Kd = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          hd = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          vd = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Wd.f.TRILINEAR_SAMPLINGMODE,
          Qd = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          td = arguments.length > 10 ? arguments[10] : void 0,
          od = arguments.length > 11 ? arguments[11] : void 0;
        super(null, Xd, !Kd, hd), this.format = Rd, this._texture = Xd.Iq().createRawTexture2DArray(dd, Od, md, Fd, Rd, Kd, hd, vd, null, Qd, td ?? 0, od), this._depth = Fd, this.is2DArray = !0
      }
      update(dd) {
        this.updateMipLevel(dd, 0)
      }
      updateMipLevel(dd, Od) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, dd, this._texture.format, this._texture.invertY, null, this._texture.type, Od)
      }
      static CreateRGBATexture(dd, Od, md, Wd, Rd) {
        return new Fd(dd, Od, md, Wd, 5, Rd, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  43110: (dd, Od, md) => {
    md.d(Od, {
      d: () => Wd.e
    });
    var Wd = md(42283);
    (0, Wd.g)()
  },
  42016: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd.c
    });
    var Wd = md(42020);
    (0, Wd.b)()
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);