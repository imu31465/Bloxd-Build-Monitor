export const id = 249;
export const ids = [249];
export const modules = {
  39535: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => gv,
      e: () => pv
    });
    var hv = Pv(38209),
      Sv = Pv(39312),
      ev = Pv(39515),
      gv = {};
    class pv {
      constructor(vv) {
        this.attachedToElement = !1, this.attached = {}, this.camera = vv, this.checkInputs = () => {}
      }
      add(vv) {
        const zv = vv.getSimpleName();
        this.attached[zv] ? hv.d.Warn("camera input of type " + zv + " already exists on camera") : (this.attached[zv] = vv, vv.camera = this.camera, vv.checkInputs && (this.checkInputs = this._addCheckInputs(vv.checkInputs.bind(vv))), this.attachedToElement && vv.attachControl(this.noPreventDefault))
      }
      remove(vv) {
        for (const zv in this.attached) {
          const Pv = this.attached[zv];
          if (Pv === vv) return Pv.detachControl(), Pv.camera = null, delete this.attached[zv], void this.rebuildInputCheck()
        }
      }
      removeByType(vv) {
        for (const zv in this.attached) {
          const Pv = this.attached[zv];
          Pv.getClassName() === vv && (Pv.detachControl(), Pv.camera = null, delete this.attached[zv], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(vv) {
        const zv = this.checkInputs;
        return () => {
          zv(), vv()
        }
      }
      attachInput(vv) {
        this.attachedToElement && vv.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          vv = !ev.c.ForceAttachControlToAlwaysPreventDefault && vv, this.attachedToElement = !0, this.noPreventDefault = vv;
          for (const zv in this.attached) this.attached[zv].attachControl(vv)
        }
      }
      detachElement() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const zv in this.attached) this.attached[zv].detachControl(), vv && (this.attached[zv].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const vv in this.attached) {
          const zv = this.attached[vv];
          zv.checkInputs && (this.checkInputs = this._addCheckInputs(zv.checkInputs.bind(zv)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(vv) {
        const zv = {};
        for (const Pv in this.attached) {
          const vv = this.attached[Pv],
            hv = Sv.c.Serialize(vv);
          zv[vv.getClassName()] = hv
        }
        vv.inputsmgr = zv
      }
      parse(vv) {
        const zv = vv.inputsmgr;
        if (zv) {
          this.clear();
          for (const vv in zv) {
            const Pv = gv[vv];
            if (Pv) {
              const hv = zv[vv],
                ev = Sv.c.Parse((() => new Pv), hv, null);
              this.add(ev)
            }
          }
        } else
          for (const Pv in this.attached) {
            const zv = gv[this.attached[Pv].getClassName()];
            if (zv) {
              const hv = Sv.c.Parse((() => new zv), vv, null);
              this.remove(this.attached[Pv]), this.add(hv)
            }
          }
      }
    }
  },
  40430: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Gv
    });
    var hv = Pv(39295),
      Sv = Pv(39300),
      ev = Pv(39204),
      gv = Pv(36594),
      pv = Pv(39287),
      dv = Pv(39798),
      Nv = Pv(36631),
      lv = Pv(36618),
      Tv = Pv(39312),
      Wv = Pv(39134),
      wv = Pv(38209),
      av = Pv(39338),
      sv = Pv(37431),
      Cv = Pv(39379);
    var iv = Pv(39212);
    let cv = !1;
    let Gv = (() => {
        var vv;
        let zv, Pv, Nv, Gv, mv, jv, fv, Fv, Yv, nv = pv.e,
          Ov = [],
          Dv = [],
          Kv = [],
          Vv = [],
          Uv = [],
          Rv = [],
          xv = [],
          tv = [],
          qv = [],
          Iv = [],
          Qv = [],
          Zv = [],
          Av = [],
          Lv = [],
          Hv = [];
        return vv = class extends nv {
          set boundingBoxSize(vv) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(vv)) return;
            this._boundingBoxSize = vv;
            const zv = this.rD();
            zv && zv.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(vv) {
            this._rotationY = vv, this.setReflectionTextureMatrix(gv.c.RotationY(this._rotationY))
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
          constructor(vv, zv) {
            let Pv, Sv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              ev = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              pv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Nv = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Tv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              Gv = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              mv = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              jv = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              fv = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              Fv = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              Yv = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              nv = arguments.length > 13 ? arguments[13] : void 0,
              Mv = arguments.length > 14 ? arguments[14] : void 0;
            super(zv), this._delayedOnLoad = (0, hv.f)(this, Ov), this.onLoadObservable = new lv.c, this.url = (0, hv.f)(this, Dv, void 0), this.boundingBoxPosition = ((0, hv.f)(this, Kv), (0, hv.f)(this, Vv, gv.l.Zero())), this._boundingBoxSize = (0, hv.f)(this, Uv), this._rotationY = 0, this._files = (0, hv.f)(this, Rv, null), this._forcedExtension = ((0, hv.f)(this, xv), (0, hv.f)(this, tv, null)), this._extensions = ((0, hv.f)(this, qv), (0, hv.f)(this, Iv, null)), this._textureMatrix = ((0, hv.f)(this, Qv), (0, hv.f)(this, Zv, void 0)), this._textureMatrixRefraction = ((0, hv.f)(this, Av), (0, hv.f)(this, Lv, new gv.c)), this._format = (0, hv.f)(this, Hv), this._buffer = null, cv || (cv = !0, iv.b.prototype._partialLoadFile = function(vv, zv, Pv, hv) {
              let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(vv, (vv => {
                Pv[zv] = vv, Pv._internalCount++, 6 === Pv._internalCount && hv(Pv)
              }), void 0, void 0, !0, ((vv, zv) => {
                Sv && vv && Sv(vv.status + " " + vv.statusText, zv)
              }))
            }, iv.b.prototype._cascadeLoadFiles = function(vv, zv, Pv) {
              let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const Sv = [];
              Sv._internalCount = 0;
              for (let ev = 0; ev < 6; ev++) this._partialLoadFile(Pv[ev], ev, Sv, zv, hv)
            }, iv.b.prototype._cascadeLoadImgs = function(vv, zv, Pv, hv) {
              let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                ev = arguments.length > 5 ? arguments[5] : void 0;
              const gv = [];
              gv._internalCount = 0;
              for (let pv = 0; pv < 6; pv++) this._partialLoadImg(hv[pv], pv, gv, vv, zv, Pv, Sv, ev)
            }, iv.b.prototype._partialLoadImg = function(vv, zv, Pv, hv, Sv, ev) {
              let gv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                pv = arguments.length > 7 ? arguments[7] : void 0;
              const dv = (0, sv.b)();
              (0, av.n)(vv, (vv => {
                Pv[zv] = vv, Pv._internalCount++, hv && hv.removePendingData(dv), 6 === Pv._internalCount && ev && ev(Sv, Pv)
              }), ((vv, zv) => {
                hv && hv.removePendingData(dv), gv && gv(vv, zv)
              }), hv ? hv.offlineProvider : null, pv), hv && hv.addPendingData(dv)
            }, iv.b.prototype.createCubeTextureBase = function(vv, zv, Pv, hv) {
              let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                gv = arguments.length > 6 ? arguments[6] : void 0,
                pv = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                dv = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                Nv = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                lv = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                Tv = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                av = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                sv = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                iv = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                cv = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const Gv = Tv || new Wv.e(this, 7);
              Gv.isCube = !0, Gv.url = vv, Gv.generateMipMaps = !hv, Gv._lodGenerationScale = Nv, Gv._lodGenerationOffset = lv, Gv._useSRGBBuffer = !!iv && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!hv), Gv !== Tv && (Gv.label = vv.substring(0, 60)), this._doNotHandleContextLost || (Gv._extension = pv, Gv._files = Pv, Gv._buffer = cv);
              const mv = vv;
              this._transformTextureUrl && !Tv && (vv = this._transformTextureUrl(vv));
              const jv = pv ?? function(vv) {
                  const zv = vv.split("?")[0],
                    Pv = zv.lastIndexOf(".");
                  return Pv > -1 ? zv.substring(Pv).toLowerCase() : ""
                }(vv),
                fv = (0, Cv.c)(jv),
                Fv = (vv, zv) => {
                  Gv.dispose(), ev ? ev(vv, zv) : vv && wv.d.Warn(vv)
                },
                Yv = (ev, Tv) => {
                  vv === mv ? ev && Fv(ev.status + " " + ev.statusText, Tv) : (wv.d.Warn(`Failed to load ${vv}, falling back to the ${mv}`), this.createCubeTextureBase(mv, zv, Pv, !!hv, Sv, Fv, gv, pv, dv, Nv, lv, Gv, av, sv, iv, cv))
                };
              if (fv) fv.then((hv => {
                const ev = vv => {
                  av && av(Gv, vv), hv.loadCubeData(vv, Gv, dv, Sv, ((vv, zv) => {
                    Fv(vv, zv)
                  }))
                };
                cv ? ev(cv) : Pv && 6 === Pv.length ? hv.supportCascades ? this._cascadeLoadFiles(zv, (vv => ev(vv.map((vv => new Uint8Array(vv))))), Pv, Fv) : Fv("Textures type does not support cascades.") : this._loadFile(vv, (vv => ev(new Uint8Array(vv))), void 0, zv ? zv.offlineProvider || null : void 0, !0, Yv)
              }));
              else {
                if (!Pv || 0 === Pv.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(zv, Gv, ((vv, zv) => {
                  sv && sv(vv, zv)
                }), Pv, Fv)
              }
              return this._internalTexturesCache.push(Gv), Gv
            }), this.name = vv, this.url = vv, this._noMipmap = ev, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = gv.c.Identity(), this.coordinatesMode = dv.e.CUBIC_MODE;
            let yv = null;
            null === Sv || Array.isArray(Sv) ? (this._noMipmap = ev, this._format = Gv, this._createPolynomials = fv, Pv = Sv, this._loaderOptions = nv, this._useSRGBBuffer = Mv, this._lodScale = Fv, this._lodOffset = Yv) : (Pv = Sv.extensions ?? null, this._noMipmap = Sv.noMipmap ?? !1, pv = Sv.files ?? null, yv = Sv.buffer ?? null, this._format = Sv.format ?? 5, mv = Sv.prefiltered ?? !1, jv = Sv.forcedExtension ?? null, this._createPolynomials = Sv.createPolynomials ?? !1, this._lodScale = Sv.lodScale ?? .8, this._lodOffset = Sv.lodOffset ?? 0, this._loaderOptions = Sv.loaderOptions, this._useSRGBBuffer = Sv.useSRGBBuffer, this._sphericalPolynomialTargetSize = Sv.sphericalPolynomialTargetSize ?? 0, Nv = Sv.onLoad ?? null, Tv = Sv.onError ?? null), (vv || pv) && this.updateURL(vv, jv, Nv, mv, Tv, Pv, this.rD()?.useDelayedTextureLoading, pv, yv)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(vv) {
            let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              gv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              pv = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              dv = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = vv), this.url = vv, zv && (this._forcedExtension = zv);
            const Nv = vv.lastIndexOf("."),
              lv = zv || (Nv > -1 ? vv.substring(Nv).toLowerCase() : ""),
              Tv = 0 === lv.indexOf(".dds"),
              Wv = 0 === lv.indexOf(".env"),
              wv = 0 === lv.indexOf(".basis");
            if (Wv ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = hv, hv && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), pv) this._files = pv;
            else if (wv || Wv || Tv || ev || (ev = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, ev) {
              for (let zv = 0; zv < ev.length; zv++) this._files.push(vv + ev[zv]);
              this._extensions = ev
            }
            this._buffer = dv, gv ? (this.delayLoadState = 4, this._delayedOnLoad = Pv, this._delayedOnError = Sv) : this._loadTexture(Pv, Sv)
          }
          delayLoad(vv) {
            4 === this.delayLoadState && (vv && (this._forcedExtension = vv), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(vv) {
            if (vv.updateFlag === this._textureMatrix.updateFlag) return;
            if (vv.isIdentity() !== this._textureMatrix.isIdentity() && this.rD()?.markAllMaterialsAsDirty(1, (vv => -1 !== vv.getActiveTextures().indexOf(this))), this._textureMatrix = vv, !this.rD()?.useRightHandedSystem) return;
            const zv = gv.i.fa[0],
              Pv = gv.i.Quaternion[0],
              hv = gv.i.fa[1];
            this._textureMatrix.decompose(zv, Pv, hv), Pv.z *= -1, Pv.w *= -1, gv.c.ComposeToRef(zv, Pv, hv, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.rD()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const Pv = this.rD(),
              hv = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const Sv = () => {
                this.onLoadObservable.notifyObservers(this), hv && (hv.dispose(), this.rD()?.markAllMaterialsAsDirty(1)), vv && vv()
              },
              gv = (vv, Pv) => {
                this._loadingError = !0, this._errorObject = {
                  message: vv,
                  exception: Pv
                }, zv && zv(vv, Pv), dv.e.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? ev.e.SetImmediate((() => Sv())) : this._texture.onLoadedObservable.add((() => Sv())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, Pv, this._lodScale, this._lodOffset, vv, gv, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, Pv, this._files, this._noMipmap, vv, gv, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let zv = 0;
            const Pv = this.irradianceTexture,
              hv = Tv.c.Clone((() => {
                const Pv = new vv(this.url, this.rD() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return zv = Pv.uniqueId, Pv
              }), this);
            return hv.uniqueId = zv, Pv && !this.irradianceTexture && (this.irradianceTexture = Pv), hv
          }
        }, (() => {
          const ev = "function" === typeof Symbol && Symbol.metadata ? Object.create(nv[Symbol.metadata] ?? null) : void 0;
          zv = [(0, Sv.L)()], Pv = [(0, Sv.I)()], Nv = [(0, Sv.I)()], Gv = [(0, Sv.L)("rotationY")], mv = [(0, Sv.L)("files")], jv = [(0, Sv.L)("forcedExtension")], fv = [(0, Sv.L)("extensions")], Fv = [(0, Sv.w)("textureMatrix")], Yv = [(0, Sv.w)("textureMatrixRefraction")], (0, hv.e)(vv, null, Nv, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: vv => "boundingBoxSize" in vv,
              get: vv => vv.boundingBoxSize
            },
            metadata: ev
          }, null, Ov), (0, hv.e)(vv, null, Gv, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: vv => "rotationY" in vv,
              set: (vv, zv) => {
                vv.rotationY = zv
              }
            },
            metadata: ev
          }, null, Ov), (0, hv.e)(null, null, zv, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: vv => "url" in vv,
              get: vv => vv.url,
              set: (vv, zv) => {
                vv.url = zv
              }
            },
            metadata: ev
          }, Dv, Kv), (0, hv.e)(null, null, Pv, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: vv => "boundingBoxPosition" in vv,
              get: vv => vv.boundingBoxPosition,
              set: (vv, zv) => {
                vv.boundingBoxPosition = zv
              }
            },
            metadata: ev
          }, Vv, Uv), (0, hv.e)(null, null, mv, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: vv => "_files" in vv,
              get: vv => vv._files,
              set: (vv, zv) => {
                vv._files = zv
              }
            },
            metadata: ev
          }, Rv, xv), (0, hv.e)(null, null, jv, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: vv => "_forcedExtension" in vv,
              get: vv => vv._forcedExtension,
              set: (vv, zv) => {
                vv._forcedExtension = zv
              }
            },
            metadata: ev
          }, tv, qv), (0, hv.e)(null, null, fv, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: vv => "_extensions" in vv,
              get: vv => vv._extensions,
              set: (vv, zv) => {
                vv._extensions = zv
              }
            },
            metadata: ev
          }, Iv, Qv), (0, hv.e)(null, null, Fv, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: vv => "_textureMatrix" in vv,
              get: vv => vv._textureMatrix,
              set: (vv, zv) => {
                vv._textureMatrix = zv
              }
            },
            metadata: ev
          }, Zv, Av), (0, hv.e)(null, null, Yv, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: vv => "_textureMatrixRefraction" in vv,
              get: vv => vv._textureMatrixRefraction,
              set: (vv, zv) => {
                vv._textureMatrixRefraction = zv
              }
            },
            metadata: ev
          }, Lv, Hv), ev && Object.defineProperty(vv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ev
          })
        })(), vv
      })(),
      mv = !1;

    function jv(vv, zv, Pv) {
      let hv = "";
      for (const Sv of vv) hv += Sv;
      return new Gv(hv, zv, null, Pv, vv)
    }

    function fv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        hv = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Sv = zv.useDelayedTextureLoading;
      zv.useDelayedTextureLoading = !1;
      const ev = new Gv(vv, zv, null, !1, null, null, null, void 0, !0, Pv, hv);
      return zv.useDelayedTextureLoading = Sv, ev
    }

    function Fv(vv, zv, Pv) {
      const hv = Tv.c.Parse((() => {
        let hv = !1;
        return vv.prefiltered && (hv = vv.prefiltered), new Gv(Pv + (vv.url ?? vv.name), zv, vv.extensions, !1, vv.files || null, null, null, void 0, hv, vv.forcedExtension)
      }), vv, zv);
      if (vv.boundingBoxPosition && (hv.boundingBoxPosition = gv.l.FromArray(vv.boundingBoxPosition)), vv.boundingBoxSize && (hv.boundingBoxSize = gv.l.FromArray(vv.boundingBoxSize)), vv.animations)
        for (let Sv = 0; Sv < vv.animations.length; Sv++) {
          const zv = vv.animations[Sv],
            Pv = (0, Nv.b)("BABYLON.Animation");
          Pv && hv.animations.push(Pv.Parse(zv))
        }
      return hv
    }
    mv || (mv = !0, Gv.CreateFromImages = jv, Gv.CreateFromPrefilteredData = fv, Gv.Parse = Fv, dv.e._CubeTextureParser = Fv, (0, Nv.c)("BABYLON.CubeTexture", Gv))
  },
  40471: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Nv
    });
    var hv = Pv(38209),
      Sv = Pv(39798),
      ev = Pv(39247),
      gv = Pv(39152),
      pv = Pv(39134);
    let dv = !1;
    class Nv extends Sv.e {
      constructor(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Nv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          lv = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          Tv = arguments.length > 6 ? arguments[6] : void 0;
        const Wv = !Pv || Pv._isScene;
        super(null, Wv ? Pv : Pv?.Is, Wv ? !hv : Pv, Tv, Nv, void 0, void 0, void 0, void 0, lv), dv || (dv = !0, gv.ThinEngine.prototype.createDynamicTexture = function(vv, zv, Pv, hv) {
          const Sv = new pv.e(this, 4);
          return Sv.baseWidth = vv, Sv.baseHeight = zv, Pv && (vv = this.needPOTTextures ? (0, ev.c)(vv, this._caps.maxTextureSize) : vv, zv = this.needPOTTextures ? (0, ev.c)(zv, this._caps.maxTextureSize) : zv), Sv.width = vv, Sv.height = zv, Sv.isReady = !1, Sv.generateMipMaps = Pv, Sv.samplingMode = hv, this.updateTextureSamplingMode(hv, Sv), this._internalTexturesCache.push(Sv), Sv
        }, gv.ThinEngine.prototype.updateDynamicTexture = function(vv, zv, Pv) {
          let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Sv = arguments.length > 4 ? arguments[4] : void 0,
            ev = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!vv) return;
          const gv = this._gl,
            pv = gv.TEXTURE_2D,
            dv = this._bindTextureDirectly(pv, vv, !0, ev);
          this._unpackFlipY(void 0 === Pv ? vv.invertY : Pv), hv && gv.pixelStorei(gv.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const Nv = this._getWebGLTextureType(vv.type),
            lv = this._getInternalFormat(Sv || vv.format),
            Tv = this._getRGBABufferInternalSizedFormat(vv.type, lv);
          gv.texImage2D(pv, 0, Tv, lv, Nv, zv), vv.generateMipMaps && gv.generateMipmap(pv), dv || this._bindTextureDirectly(pv, null), hv && gv.pixelStorei(gv.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), Sv && (vv.format = Sv), vv._dynamicTextureSource = zv, vv._premulAlpha = hv, vv.invertY = Pv || !1, vv.isReady = !0
        }), this.name = vv, this.wrapU = Sv.e.CLAMP_ADDRESSMODE, this.wrapV = Sv.e.CLAMP_ADDRESSMODE, this._generateMipMaps = hv;
        const wv = this._getEngine();
        if (!wv) return;
        if (zv.getContext) this._canvas = zv, this._ownCanvas = !1, this._texture = wv.createDynamicTexture(this._canvas.width, this._canvas.height, hv, Nv);
        else {
          this._canvas = wv.createCanvas(1, 1), this._ownCanvas = !0;
          const vv = zv;
          vv.width || 0 === vv.width ? this._texture = wv.createDynamicTexture(vv.width, vv.height, hv, Nv) : this._texture = wv.createDynamicTexture(zv, zv, hv, Nv)
        }
        const av = this.getSize();
        this._canvas.width !== av.width && (this._canvas.width = av.width), this._canvas.height !== av.height && (this._canvas.height = av.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(vv) {
        this._canvas.width = vv.width, this._canvas.height = vv.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(vv.width, vv.height, this._generateMipMaps, this.samplingMode)
      }
      scale(vv) {
        const zv = this.getSize();
        zv.width *= vv, zv.height *= vv, this._recreate(zv)
      }
      scaleTo(vv, zv) {
        const Pv = this.getSize();
        Pv.width = vv, Pv.height = zv, this._recreate(Pv)
      }
      getContext() {
        return this._context
      }
      clear(vv) {
        const zv = this.getSize();
        vv && (this._context.fillStyle = vv), this._context.clearRect(0, 0, zv.width, zv.height)
      }
      update(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === vv || vv, zv, this._format || void 0, void 0, Pv)
      }
      drawText(vv, zv, Pv, hv, Sv, ev, gv) {
        let pv = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const dv = this.getSize();
        if (ev && (this._context.fillStyle = ev, this._context.fillRect(0, 0, dv.width, dv.height)), this._context.font = hv, null === zv || void 0 === zv) {
          const Pv = this._context.measureText(vv);
          zv = (dv.width - Pv.width) / 2
        }
        if (null === Pv || void 0 === Pv) {
          const vv = parseInt(hv.replace(/\D/g, ""));
          Pv = dv.height / 2 + vv / 3.65
        }
        this._context.fillStyle = Sv || "", this._context.fillText(vv, zv, Pv), pv && this.update(gv)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const vv = this.rD();
        if (!vv) return this;
        const zv = this.getSize(),
          Pv = new Nv(this.name, zv, vv, this._generateMipMaps);
        return Pv.hasAlpha = this.hasAlpha, Pv.level = this.level, Pv.wrapU = this.wrapU, Pv.wrapV = this.wrapV, Pv
      }
      serialize() {
        const vv = this.rD();
        vv && !vv.isReady() && hv.d.Warn("The scene must be ready before serializing the dynamic texture");
        const zv = super.serialize();
        return Nv._IsCanvasElement(this._canvas) && (zv.base64String = this._canvas.toDataURL()), zv.invertY = this._invertY, zv.samplingMode = this.samplingMode, zv
      }
      static _IsCanvasElement(vv) {
        return void 0 !== vv.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  40452: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv
    });
    var hv = Pv(39798);
    class Sv extends hv.e {
      get depth() {
        return this._depth
      }
      constructor(vv, zv, Pv, Sv, ev, gv) {
        let pv = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          dv = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          Nv = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : hv.e.TRILINEAR_SAMPLINGMODE,
          lv = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Tv = arguments.length > 10 ? arguments[10] : void 0,
          Wv = arguments.length > 11 ? arguments[11] : void 0;
        super(null, gv, !pv, dv), this.format = ev, this._texture = gv.ma().createRawTexture2DArray(vv, zv, Pv, Sv, ev, pv, dv, Nv, null, lv, Tv ?? 0, Wv), this._depth = Sv, this.is2DArray = !0
      }
      update(vv) {
        this.updateMipLevel(vv, 0)
      }
      updateMipLevel(vv, zv) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, vv, this._texture.format, this._texture.invertY, null, this._texture.type, zv)
      }
      static CreateRGBATexture(vv, zv, Pv, hv, ev) {
        return new Sv(vv, zv, Pv, hv, 5, ev, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  40444: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv.d
    });
    var hv = Pv(39670);
    (0, hv.g)()
  },
  39387: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => hv.g
    });
    var hv = Pv(39395);
    (0, hv.d)()
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);