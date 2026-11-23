export const id = 257;
export const ids = [257];
export const modules = {
  40244: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => yk,
      h: () => lk
    });
    var Xk = Ik(38674),
      Tk = Ik(40021),
      ik = Ik(40214),
      yk = {};
    class lk {
      constructor(kk) {
        this.attachedToElement = !1, this.attached = {}, this.camera = kk, this.checkInputs = () => {}
      }
      add(kk) {
        const Fk = kk.getSimpleName();
        this.attached[Fk] ? Xk.e.Warn("camera input of type " + Fk + " already exists on camera") : (this.attached[Fk] = kk, kk.camera = this.camera, kk.checkInputs && (this.checkInputs = this._addCheckInputs(kk.checkInputs.bind(kk))), this.attachedToElement && kk.attachControl(this.noPreventDefault))
      }
      remove(kk) {
        for (const Fk in this.attached) {
          const Ik = this.attached[Fk];
          if (Ik === kk) return Ik.detachControl(), Ik.camera = null, delete this.attached[Fk], void this.rebuildInputCheck()
        }
      }
      removeByType(kk) {
        for (const Fk in this.attached) {
          const Ik = this.attached[Fk];
          Ik.getClassName() === kk && (Ik.detachControl(), Ik.camera = null, delete this.attached[Fk], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(kk) {
        const Fk = this.checkInputs;
        return () => {
          Fk(), kk()
        }
      }
      attachInput(kk) {
        this.attachedToElement && kk.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          kk = !ik.d.ForceAttachControlToAlwaysPreventDefault && kk, this.attachedToElement = !0, this.noPreventDefault = kk;
          for (const Fk in this.attached) this.attached[Fk].attachControl(kk)
        }
      }
      detachElement() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Fk in this.attached) this.attached[Fk].detachControl(), kk && (this.attached[Fk].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const kk in this.attached) {
          const Fk = this.attached[kk];
          Fk.checkInputs && (this.checkInputs = this._addCheckInputs(Fk.checkInputs.bind(Fk)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(kk) {
        const Fk = {};
        for (const Ik in this.attached) {
          const kk = this.attached[Ik],
            Xk = Tk.b.Serialize(kk);
          Fk[kk.getClassName()] = Xk
        }
        kk.inputsmgr = Fk
      }
      parse(kk) {
        const Fk = kk.inputsmgr;
        if (Fk) {
          this.clear();
          for (const kk in Fk) {
            const Ik = yk[kk];
            if (Ik) {
              const Xk = Fk[kk],
                ik = Tk.b.Parse((() => new Ik), Xk, null);
              this.add(ik)
            }
          }
        } else
          for (const Ik in this.attached) {
            const Fk = yk[this.attached[Ik].getClassName()];
            if (Fk) {
              const Xk = Tk.b.Parse((() => new Fk), kk, null);
              this.remove(this.attached[Ik]), this.add(Xk)
            }
          }
      }
    }
  },
  41139: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Pk
    });
    var Xk = Ik(40003),
      Tk = Ik(40011),
      ik = Ik(39878),
      yk = Ik(37153),
      lk = Ik(39994),
      ak = Ik(40489),
      qk = Ik(37201),
      Lk = Ik(37187),
      tk = Ik(40021),
      Zk = Ik(39818),
      jk = Ik(38674),
      ek = Ik(40038),
      wk = Ik(37902),
      Hk = Ik(40078);
    var Jk = Ik(39885);
    let xk = !1;
    let Pk = (() => {
        var kk;
        let Fk, Ik, qk, Pk, Kk, Qk, sk, Vk, zk, Sk = lk.d,
          vk = [],
          Ek = [],
          Ok = [],
          nk = [],
          Gk = [],
          pk = [],
          uk = [],
          bk = [],
          Rk = [],
          Uk = [],
          Ck = [],
          Nk = [],
          ck = [],
          Wk = [],
          fk = [];
        return kk = class extends Sk {
          set boundingBoxSize(kk) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(kk)) return;
            this._boundingBoxSize = kk;
            const Fk = this.mG();
            Fk && Fk.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(kk) {
            this._rotationY = kk, this.setReflectionTextureMatrix(yk.c.RotationY(this._rotationY))
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
          constructor(kk, Fk) {
            let Ik, Tk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              ik = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              lk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              qk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              tk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              Pk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              Kk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              Qk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              sk = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              Vk = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              zk = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              Sk = arguments.length > 13 ? arguments[13] : void 0,
              Bk = arguments.length > 14 ? arguments[14] : void 0;
            super(Fk), this._delayedOnLoad = (0, Xk.n)(this, vk), this.onLoadObservable = new Lk.e, this.url = (0, Xk.n)(this, Ek, void 0), this.boundingBoxPosition = ((0, Xk.n)(this, Ok), (0, Xk.n)(this, nk, yk.t.Zero())), this._boundingBoxSize = (0, Xk.n)(this, Gk), this._rotationY = 0, this._files = (0, Xk.n)(this, pk, null), this._forcedExtension = ((0, Xk.n)(this, uk), (0, Xk.n)(this, bk, null)), this._extensions = ((0, Xk.n)(this, Rk), (0, Xk.n)(this, Uk, null)), this._textureMatrix = ((0, Xk.n)(this, Ck), (0, Xk.n)(this, Nk, void 0)), this._textureMatrixRefraction = ((0, Xk.n)(this, ck), (0, Xk.n)(this, Wk, new yk.c)), this._format = (0, Xk.n)(this, fk), this._buffer = null, xk || (xk = !0, Jk.c.prototype._partialLoadFile = function(kk, Fk, Ik, Xk) {
              let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(kk, (kk => {
                Ik[Fk] = kk, Ik._internalCount++, 6 === Ik._internalCount && Xk(Ik)
              }), void 0, void 0, !0, ((kk, Fk) => {
                Tk && kk && Tk(kk.status + " " + kk.statusText, Fk)
              }))
            }, Jk.c.prototype._cascadeLoadFiles = function(kk, Fk, Ik) {
              let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const Tk = [];
              Tk._internalCount = 0;
              for (let ik = 0; ik < 6; ik++) this._partialLoadFile(Ik[ik], ik, Tk, Fk, Xk)
            }, Jk.c.prototype._cascadeLoadImgs = function(kk, Fk, Ik, Xk) {
              let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                ik = arguments.length > 5 ? arguments[5] : void 0;
              const yk = [];
              yk._internalCount = 0;
              for (let lk = 0; lk < 6; lk++) this._partialLoadImg(Xk[lk], lk, yk, kk, Fk, Ik, Tk, ik)
            }, Jk.c.prototype._partialLoadImg = function(kk, Fk, Ik, Xk, Tk, ik) {
              let yk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                lk = arguments.length > 7 ? arguments[7] : void 0;
              const ak = (0, wk.e)();
              (0, ek.t)(kk, (kk => {
                Ik[Fk] = kk, Ik._internalCount++, Xk && Xk.removePendingData(ak), 6 === Ik._internalCount && ik && ik(Tk, Ik)
              }), ((kk, Fk) => {
                Xk && Xk.removePendingData(ak), yk && yk(kk, Fk)
              }), Xk ? Xk.offlineProvider : null, lk), Xk && Xk.addPendingData(ak)
            }, Jk.c.prototype.createCubeTextureBase = function(kk, Fk, Ik, Xk) {
              let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                yk = arguments.length > 6 ? arguments[6] : void 0,
                lk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                ak = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                qk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                Lk = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                tk = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                ek = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                wk = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                Jk = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                xk = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const Pk = tk || new Zk.b(this, 7);
              Pk.isCube = !0, Pk.url = kk, Pk.generateMipMaps = !Xk, Pk._lodGenerationScale = qk, Pk._lodGenerationOffset = Lk, Pk._useSRGBBuffer = !!Jk && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!Xk), Pk !== tk && (Pk.label = kk.substring(0, 60)), this._doNotHandleContextLost || (Pk._extension = lk, Pk._files = Ik, Pk._buffer = xk);
              const Kk = kk;
              this._transformTextureUrl && !tk && (kk = this._transformTextureUrl(kk));
              const Qk = lk ?? function(kk) {
                  const Fk = kk.split("?")[0],
                    Ik = Fk.lastIndexOf(".");
                  return Ik > -1 ? Fk.substring(Ik).toLowerCase() : ""
                }(kk),
                sk = (0, Hk.b)(Qk),
                Vk = (kk, Fk) => {
                  Pk.dispose(), ik ? ik(kk, Fk) : kk && jk.e.Warn(kk)
                },
                zk = (ik, tk) => {
                  kk === Kk ? ik && Vk(ik.status + " " + ik.statusText, tk) : (jk.e.Warn(`Failed to load ${kk}, falling back to the ${Kk}`), this.createCubeTextureBase(Kk, Fk, Ik, !!Xk, Tk, Vk, yk, lk, ak, qk, Lk, Pk, ek, wk, Jk, xk))
                };
              if (sk) sk.then((Xk => {
                const ik = kk => {
                  ek && ek(Pk, kk), Xk.loadCubeData(kk, Pk, ak, Tk, ((kk, Fk) => {
                    Vk(kk, Fk)
                  }))
                };
                xk ? ik(xk) : Ik && 6 === Ik.length ? Xk.supportCascades ? this._cascadeLoadFiles(Fk, (kk => ik(kk.map((kk => new Uint8Array(kk))))), Ik, Vk) : Vk("Textures type does not support cascades.") : this._loadFile(kk, (kk => ik(new Uint8Array(kk))), void 0, Fk ? Fk.offlineProvider || null : void 0, !0, zk)
              }));
              else {
                if (!Ik || 0 === Ik.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(Fk, Pk, ((kk, Fk) => {
                  wk && wk(kk, Fk)
                }), Ik, Vk)
              }
              return this._internalTexturesCache.push(Pk), Pk
            }), this.name = kk, this.url = kk, this._noMipmap = ik, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = yk.c.Identity(), this.coordinatesMode = ak.g.CUBIC_MODE;
            let dk = null;
            null === Tk || Array.isArray(Tk) ? (this._noMipmap = ik, this._format = Pk, this._createPolynomials = sk, Ik = Tk, this._loaderOptions = Sk, this._useSRGBBuffer = Bk, this._lodScale = Vk, this._lodOffset = zk) : (Ik = Tk.extensions ?? null, this._noMipmap = Tk.noMipmap ?? !1, lk = Tk.files ?? null, dk = Tk.buffer ?? null, this._format = Tk.format ?? 5, Kk = Tk.prefiltered ?? !1, Qk = Tk.forcedExtension ?? null, this._createPolynomials = Tk.createPolynomials ?? !1, this._lodScale = Tk.lodScale ?? .8, this._lodOffset = Tk.lodOffset ?? 0, this._loaderOptions = Tk.loaderOptions, this._useSRGBBuffer = Tk.useSRGBBuffer, this._sphericalPolynomialTargetSize = Tk.sphericalPolynomialTargetSize ?? 0, qk = Tk.onLoad ?? null, tk = Tk.onError ?? null), (kk || lk) && this.updateURL(kk, Qk, qk, Kk, tk, Ik, this.mG()?.useDelayedTextureLoading, lk, dk)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              yk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              lk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              ak = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = kk), this.url = kk, Fk && (this._forcedExtension = Fk);
            const qk = kk.lastIndexOf("."),
              Lk = Fk || (qk > -1 ? kk.substring(qk).toLowerCase() : ""),
              tk = 0 === Lk.indexOf(".dds"),
              Zk = 0 === Lk.indexOf(".env"),
              jk = 0 === Lk.indexOf(".basis");
            if (Zk ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = Xk, Xk && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), lk) this._files = lk;
            else if (jk || Zk || tk || ik || (ik = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, ik) {
              for (let Fk = 0; Fk < ik.length; Fk++) this._files.push(kk + ik[Fk]);
              this._extensions = ik
            }
            this._buffer = ak, yk ? (this.delayLoadState = 4, this._delayedOnLoad = Ik, this._delayedOnError = Tk) : this._loadTexture(Ik, Tk)
          }
          delayLoad(kk) {
            4 === this.delayLoadState && (kk && (this._forcedExtension = kk), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(kk) {
            if (kk.updateFlag === this._textureMatrix.updateFlag) return;
            if (kk.isIdentity() !== this._textureMatrix.isIdentity() && this.mG()?.markAllMaterialsAsDirty(1, (kk => -1 !== kk.getActiveTextures().indexOf(this))), this._textureMatrix = kk, !this.mG()?.useRightHandedSystem) return;
            const Fk = yk.l.Ge[0],
              Ik = yk.l.Quaternion[0],
              Xk = yk.l.Ge[1];
            this._textureMatrix.decompose(Fk, Ik, Xk), Ik.z *= -1, Ik.w *= -1, yk.c.ComposeToRef(Fk, Ik, Xk, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.mG()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const Ik = this.mG(),
              Xk = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const Tk = () => {
                this.onLoadObservable.notifyObservers(this), Xk && (Xk.dispose(), this.mG()?.markAllMaterialsAsDirty(1)), kk && kk()
              },
              yk = (kk, Ik) => {
                this._loadingError = !0, this._errorObject = {
                  message: kk,
                  exception: Ik
                }, Fk && Fk(kk, Ik), ak.g.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? ik.d.SetImmediate((() => Tk())) : this._texture.onLoadedObservable.add((() => Tk())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, Ik, this._lodScale, this._lodOffset, kk, yk, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, Ik, this._files, this._noMipmap, kk, yk, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let Fk = 0;
            const Ik = this.irradianceTexture,
              Xk = tk.b.Clone((() => {
                const Ik = new kk(this.url, this.mG() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return Fk = Ik.uniqueId, Ik
              }), this);
            return Xk.uniqueId = Fk, Ik && !this.irradianceTexture && (this.irradianceTexture = Ik), Xk
          }
        }, (() => {
          const ik = "function" === typeof Symbol && Symbol.metadata ? Object.create(Sk[Symbol.metadata] ?? null) : void 0;
          Fk = [(0, Tk.J)()], Ik = [(0, Tk.H)()], qk = [(0, Tk.H)()], Pk = [(0, Tk.J)("rotationY")], Kk = [(0, Tk.J)("files")], Qk = [(0, Tk.J)("forcedExtension")], sk = [(0, Tk.J)("extensions")], Vk = [(0, Tk.w)("textureMatrix")], zk = [(0, Tk.w)("textureMatrixRefraction")], (0, Xk.j)(kk, null, qk, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: kk => "boundingBoxSize" in kk,
              get: kk => kk.boundingBoxSize
            },
            metadata: ik
          }, null, vk), (0, Xk.j)(kk, null, Pk, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: kk => "rotationY" in kk,
              set: (kk, Fk) => {
                kk.rotationY = Fk
              }
            },
            metadata: ik
          }, null, vk), (0, Xk.j)(null, null, Fk, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: kk => "url" in kk,
              get: kk => kk.url,
              set: (kk, Fk) => {
                kk.url = Fk
              }
            },
            metadata: ik
          }, Ek, Ok), (0, Xk.j)(null, null, Ik, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: kk => "boundingBoxPosition" in kk,
              get: kk => kk.boundingBoxPosition,
              set: (kk, Fk) => {
                kk.boundingBoxPosition = Fk
              }
            },
            metadata: ik
          }, nk, Gk), (0, Xk.j)(null, null, Kk, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: kk => "_files" in kk,
              get: kk => kk._files,
              set: (kk, Fk) => {
                kk._files = Fk
              }
            },
            metadata: ik
          }, pk, uk), (0, Xk.j)(null, null, Qk, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: kk => "_forcedExtension" in kk,
              get: kk => kk._forcedExtension,
              set: (kk, Fk) => {
                kk._forcedExtension = Fk
              }
            },
            metadata: ik
          }, bk, Rk), (0, Xk.j)(null, null, sk, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: kk => "_extensions" in kk,
              get: kk => kk._extensions,
              set: (kk, Fk) => {
                kk._extensions = Fk
              }
            },
            metadata: ik
          }, Uk, Ck), (0, Xk.j)(null, null, Vk, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: kk => "_textureMatrix" in kk,
              get: kk => kk._textureMatrix,
              set: (kk, Fk) => {
                kk._textureMatrix = Fk
              }
            },
            metadata: ik
          }, Nk, ck), (0, Xk.j)(null, null, zk, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: kk => "_textureMatrixRefraction" in kk,
              get: kk => kk._textureMatrixRefraction,
              set: (kk, Fk) => {
                kk._textureMatrixRefraction = Fk
              }
            },
            metadata: ik
          }, Wk, fk), ik && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ik
          })
        })(), kk
      })(),
      Kk = !1;

    function Qk(kk, Fk, Ik) {
      let Xk = "";
      for (const Tk of kk) Xk += Tk;
      return new Pk(Xk, Fk, null, Ik, kk)
    }

    function sk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Xk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Tk = Fk.useDelayedTextureLoading;
      Fk.useDelayedTextureLoading = !1;
      const ik = new Pk(kk, Fk, null, !1, null, null, null, void 0, !0, Ik, Xk);
      return Fk.useDelayedTextureLoading = Tk, ik
    }

    function Vk(kk, Fk, Ik) {
      const Xk = tk.b.Parse((() => {
        let Xk = !1;
        return kk.prefiltered && (Xk = kk.prefiltered), new Pk(Ik + (kk.url ?? kk.name), Fk, kk.extensions, !1, kk.files || null, null, null, void 0, Xk, kk.forcedExtension)
      }), kk, Fk);
      if (kk.boundingBoxPosition && (Xk.boundingBoxPosition = yk.t.FromArray(kk.boundingBoxPosition)), kk.boundingBoxSize && (Xk.boundingBoxSize = yk.t.FromArray(kk.boundingBoxSize)), kk.animations)
        for (let Tk = 0; Tk < kk.animations.length; Tk++) {
          const Fk = kk.animations[Tk],
            Ik = (0, qk.b)("BABYLON.Animation");
          Ik && Xk.animations.push(Ik.Parse(Fk))
        }
      return Xk
    }
    Kk || (Kk = !0, Pk.CreateFromImages = Qk, Pk.CreateFromPrefilteredData = sk, Pk.Parse = Vk, ak.g._CubeTextureParser = Vk, (0, qk.f)("BABYLON.CubeTexture", Pk))
  },
  41178: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => qk
    });
    var Xk = Ik(38674),
      Tk = Ik(40489),
      ik = Ik(39923),
      yk = Ik(39825),
      lk = Ik(39818);
    let ak = !1;
    class qk extends Tk.g {
      constructor(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          qk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Lk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          tk = arguments.length > 6 ? arguments[6] : void 0;
        const Zk = !Ik || Ik._isScene;
        super(null, Zk ? Ik : Ik?.Yw, Zk ? !Xk : Ik, tk, qk, void 0, void 0, void 0, void 0, Lk), ak || (ak = !0, yk.ThinEngine.prototype.createDynamicTexture = function(kk, Fk, Ik, Xk) {
          const Tk = new lk.b(this, 4);
          return Tk.baseWidth = kk, Tk.baseHeight = Fk, Ik && (kk = this.needPOTTextures ? (0, ik.g)(kk, this._caps.maxTextureSize) : kk, Fk = this.needPOTTextures ? (0, ik.g)(Fk, this._caps.maxTextureSize) : Fk), Tk.width = kk, Tk.height = Fk, Tk.isReady = !1, Tk.generateMipMaps = Ik, Tk.samplingMode = Xk, this.updateTextureSamplingMode(Xk, Tk), this._internalTexturesCache.push(Tk), Tk
        }, yk.ThinEngine.prototype.updateDynamicTexture = function(kk, Fk, Ik) {
          let Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Tk = arguments.length > 4 ? arguments[4] : void 0,
            ik = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!kk) return;
          const yk = this._gl,
            lk = yk.TEXTURE_2D,
            ak = this._bindTextureDirectly(lk, kk, !0, ik);
          this._unpackFlipY(void 0 === Ik ? kk.invertY : Ik), Xk && yk.pixelStorei(yk.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const qk = this._getWebGLTextureType(kk.type),
            Lk = this._getInternalFormat(Tk || kk.format),
            tk = this._getRGBABufferInternalSizedFormat(kk.type, Lk);
          yk.texImage2D(lk, 0, tk, Lk, qk, Fk), kk.generateMipMaps && yk.generateMipmap(lk), ak || this._bindTextureDirectly(lk, null), Xk && yk.pixelStorei(yk.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), Tk && (kk.format = Tk), kk._dynamicTextureSource = Fk, kk._premulAlpha = Xk, kk.invertY = Ik || !1, kk.isReady = !0
        }), this.name = kk, this.wrapU = Tk.g.CLAMP_ADDRESSMODE, this.wrapV = Tk.g.CLAMP_ADDRESSMODE, this._generateMipMaps = Xk;
        const jk = this._getEngine();
        if (!jk) return;
        if (Fk.getContext) this._canvas = Fk, this._ownCanvas = !1, this._texture = jk.createDynamicTexture(this._canvas.width, this._canvas.height, Xk, qk);
        else {
          this._canvas = jk.createCanvas(1, 1), this._ownCanvas = !0;
          const kk = Fk;
          kk.width || 0 === kk.width ? this._texture = jk.createDynamicTexture(kk.width, kk.height, Xk, qk) : this._texture = jk.createDynamicTexture(Fk, Fk, Xk, qk)
        }
        const ek = this.getSize();
        this._canvas.width !== ek.width && (this._canvas.width = ek.width), this._canvas.height !== ek.height && (this._canvas.height = ek.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(kk) {
        this._canvas.width = kk.width, this._canvas.height = kk.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(kk.width, kk.height, this._generateMipMaps, this.samplingMode)
      }
      scale(kk) {
        const Fk = this.getSize();
        Fk.width *= kk, Fk.height *= kk, this._recreate(Fk)
      }
      scaleTo(kk, Fk) {
        const Ik = this.getSize();
        Ik.width = kk, Ik.height = Fk, this._recreate(Ik)
      }
      getContext() {
        return this._context
      }
      clear(kk) {
        const Fk = this.getSize();
        kk && (this._context.fillStyle = kk), this._context.clearRect(0, 0, Fk.width, Fk.height)
      }
      update(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === kk || kk, Fk, this._format || void 0, void 0, Ik)
      }
      drawText(kk, Fk, Ik, Xk, Tk, ik, yk) {
        let lk = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const ak = this.getSize();
        if (ik && (this._context.fillStyle = ik, this._context.fillRect(0, 0, ak.width, ak.height)), this._context.font = Xk, null === Fk || void 0 === Fk) {
          const Ik = this._context.measureText(kk);
          Fk = (ak.width - Ik.width) / 2
        }
        if (null === Ik || void 0 === Ik) {
          const kk = parseInt(Xk.replace(/\D/g, ""));
          Ik = ak.height / 2 + kk / 3.65
        }
        this._context.fillStyle = Tk || "", this._context.fillText(kk, Fk, Ik), lk && this.update(yk)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const kk = this.mG();
        if (!kk) return this;
        const Fk = this.getSize(),
          Ik = new qk(this.name, Fk, kk, this._generateMipMaps);
        return Ik.hasAlpha = this.hasAlpha, Ik.level = this.level, Ik.wrapU = this.wrapU, Ik.wrapV = this.wrapV, Ik
      }
      serialize() {
        const kk = this.mG();
        kk && !kk.isReady() && Xk.e.Warn("The scene must be ready before serializing the dynamic texture");
        const Fk = super.serialize();
        return qk._IsCanvasElement(this._canvas) && (Fk.base64String = this._canvas.toDataURL()), Fk.invertY = this._invertY, Fk.samplingMode = this.samplingMode, Fk
      }
      static _IsCanvasElement(kk) {
        return void 0 !== kk.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  41155: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Tk
    });
    var Xk = Ik(40489);
    class Tk extends Xk.g {
      get depth() {
        return this._depth
      }
      constructor(kk, Fk, Ik, Tk, ik, yk) {
        let lk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          ak = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          qk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Xk.g.TRILINEAR_SAMPLINGMODE,
          Lk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          tk = arguments.length > 10 ? arguments[10] : void 0,
          Zk = arguments.length > 11 ? arguments[11] : void 0;
        super(null, yk, !lk, ak), this.format = ik, this._texture = yk.Oe().createRawTexture2DArray(kk, Fk, Ik, Tk, ik, lk, ak, qk, null, Lk, tk ?? 0, Zk), this._depth = Tk, this.is2DArray = !0
      }
      update(kk) {
        this.updateMipLevel(kk, 0)
      }
      updateMipLevel(kk, Fk) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, kk, this._texture.format, this._texture.invertY, null, this._texture.type, Fk)
      }
      static CreateRGBATexture(kk, Fk, Ik, Xk, ik) {
        return new Tk(kk, Fk, Ik, Xk, 5, ik, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  41149: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Xk.b
    });
    var Xk = Ik(40363);
    (0, Xk.d)()
  },
  40082: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk.f
    });
    var Xk = Ik(40090);
    (0, Xk.c)()
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);