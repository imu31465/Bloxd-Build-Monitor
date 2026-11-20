export const id = 249;
export const ids = [249];
export const modules = {
  39686: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub,
      f: () => Lb
    });
    var Bb = hb(38302),
      Ob = hb(39488),
      Gb = hb(39666),
      Ub = {};
    class Lb {
      constructor(bb) {
        this.attachedToElement = !1, this.attached = {}, this.camera = bb, this.checkInputs = () => {}
      }
      add(bb) {
        const ub = bb.getSimpleName();
        this.attached[ub] ? Bb.b.Warn("camera input of type " + ub + " already exists on camera") : (this.attached[ub] = bb, bb.camera = this.camera, bb.checkInputs && (this.checkInputs = this._addCheckInputs(bb.checkInputs.bind(bb))), this.attachedToElement && bb.attachControl(this.noPreventDefault))
      }
      remove(bb) {
        for (const ub in this.attached) {
          const hb = this.attached[ub];
          if (hb === bb) return hb.detachControl(), hb.camera = null, delete this.attached[ub], void this.rebuildInputCheck()
        }
      }
      removeByType(bb) {
        for (const ub in this.attached) {
          const hb = this.attached[ub];
          hb.getClassName() === bb && (hb.detachControl(), hb.camera = null, delete this.attached[ub], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(bb) {
        const ub = this.checkInputs;
        return () => {
          ub(), bb()
        }
      }
      attachInput(bb) {
        this.attachedToElement && bb.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          bb = !Gb.d.ForceAttachControlToAlwaysPreventDefault && bb, this.attachedToElement = !0, this.noPreventDefault = bb;
          for (const ub in this.attached) this.attached[ub].attachControl(bb)
        }
      }
      detachElement() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const ub in this.attached) this.attached[ub].detachControl(), bb && (this.attached[ub].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const bb in this.attached) {
          const ub = this.attached[bb];
          ub.checkInputs && (this.checkInputs = this._addCheckInputs(ub.checkInputs.bind(ub)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(bb) {
        const ub = {};
        for (const hb in this.attached) {
          const bb = this.attached[hb],
            Bb = Ob.c.Serialize(bb);
          ub[bb.getClassName()] = Bb
        }
        bb.inputsmgr = ub
      }
      parse(bb) {
        const ub = bb.inputsmgr;
        if (ub) {
          this.clear();
          for (const bb in ub) {
            const hb = Ub[bb];
            if (hb) {
              const Bb = ub[bb],
                Gb = Ob.c.Parse((() => new hb), Bb, null);
              this.add(Gb)
            }
          }
        } else
          for (const hb in this.attached) {
            const ub = Ub[this.attached[hb].getClassName()];
            if (ub) {
              const Bb = Ob.c.Parse((() => new ub), bb, null);
              this.remove(this.attached[hb]), this.add(Bb)
            }
          }
      }
    }
  },
  40580: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Kb
    });
    var Bb = hb(39463),
      Ob = hb(39467),
      Gb = hb(39343),
      Ub = hb(36727),
      Lb = hb(39459),
      Yb = hb(39932),
      Sb = hb(36762),
      ab = hb(36753),
      Hb = hb(39488),
      wb = hb(39287),
      Zb = hb(38302),
      Xb = hb(39511),
      pb = hb(37507),
      ob = hb(39540);
    var Ab = hb(39350);
    let lb = !1;
    let Kb = (() => {
        var bb;
        let ub, hb, Sb, Kb, Wb, Cb, db, rb, jb, nb = Lb.d,
          Db = [],
          xb = [],
          zb = [],
          gb = [],
          ib = [],
          vb = [],
          tb = [],
          Jb = [],
          eb = [],
          Nb = [],
          sb = [],
          Mb = [],
          mb = [],
          Ib = [],
          Pb = [];
        return bb = class extends nb {
          set boundingBoxSize(bb) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(bb)) return;
            this._boundingBoxSize = bb;
            const ub = this.ZN();
            ub && ub.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(bb) {
            this._rotationY = bb, this.setReflectionTextureMatrix(Ub.d.RotationY(this._rotationY))
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
          constructor(bb, ub) {
            let hb, Ob = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Gb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Lb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Sb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Hb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              Kb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              Wb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              Cb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              db = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              rb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              jb = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              nb = arguments.length > 13 ? arguments[13] : void 0,
              qb = arguments.length > 14 ? arguments[14] : void 0;
            super(ub), this._delayedOnLoad = (0, Bb.k)(this, Db), this.onLoadObservable = new ab.e, this.url = (0, Bb.k)(this, xb, void 0), this.boundingBoxPosition = ((0, Bb.k)(this, zb), (0, Bb.k)(this, gb, Ub.q.Zero())), this._boundingBoxSize = (0, Bb.k)(this, ib), this._rotationY = 0, this._files = (0, Bb.k)(this, vb, null), this._forcedExtension = ((0, Bb.k)(this, tb), (0, Bb.k)(this, Jb, null)), this._extensions = ((0, Bb.k)(this, eb), (0, Bb.k)(this, Nb, null)), this._textureMatrix = ((0, Bb.k)(this, sb), (0, Bb.k)(this, Mb, void 0)), this._textureMatrixRefraction = ((0, Bb.k)(this, mb), (0, Bb.k)(this, Ib, new Ub.d)), this._format = (0, Bb.k)(this, Pb), this._buffer = null, lb || (lb = !0, Ab.d.prototype._partialLoadFile = function(bb, ub, hb, Bb) {
              let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(bb, (bb => {
                hb[ub] = bb, hb._internalCount++, 6 === hb._internalCount && Bb(hb)
              }), void 0, void 0, !0, ((bb, ub) => {
                Ob && bb && Ob(bb.status + " " + bb.statusText, ub)
              }))
            }, Ab.d.prototype._cascadeLoadFiles = function(bb, ub, hb) {
              let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const Ob = [];
              Ob._internalCount = 0;
              for (let Gb = 0; Gb < 6; Gb++) this._partialLoadFile(hb[Gb], Gb, Ob, ub, Bb)
            }, Ab.d.prototype._cascadeLoadImgs = function(bb, ub, hb, Bb) {
              let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                Gb = arguments.length > 5 ? arguments[5] : void 0;
              const Ub = [];
              Ub._internalCount = 0;
              for (let Lb = 0; Lb < 6; Lb++) this._partialLoadImg(Bb[Lb], Lb, Ub, bb, ub, hb, Ob, Gb)
            }, Ab.d.prototype._partialLoadImg = function(bb, ub, hb, Bb, Ob, Gb) {
              let Ub = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                Lb = arguments.length > 7 ? arguments[7] : void 0;
              const Yb = (0, pb.d)();
              (0, Xb.o)(bb, (bb => {
                hb[ub] = bb, hb._internalCount++, Bb && Bb.removePendingData(Yb), 6 === hb._internalCount && Gb && Gb(Ob, hb)
              }), ((bb, ub) => {
                Bb && Bb.removePendingData(Yb), Ub && Ub(bb, ub)
              }), Bb ? Bb.offlineProvider : null, Lb), Bb && Bb.addPendingData(Yb)
            }, Ab.d.prototype.createCubeTextureBase = function(bb, ub, hb, Bb) {
              let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                Ub = arguments.length > 6 ? arguments[6] : void 0,
                Lb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                Yb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                Sb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                ab = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                Hb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                Xb = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                pb = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                Ab = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                lb = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const Kb = Hb || new wb.b(this, 7);
              Kb.isCube = !0, Kb.url = bb, Kb.generateMipMaps = !Bb, Kb._lodGenerationScale = Sb, Kb._lodGenerationOffset = ab, Kb._useSRGBBuffer = !!Ab && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!Bb), Kb !== Hb && (Kb.label = bb.substring(0, 60)), this._doNotHandleContextLost || (Kb._extension = Lb, Kb._files = hb, Kb._buffer = lb);
              const Wb = bb;
              this._transformTextureUrl && !Hb && (bb = this._transformTextureUrl(bb));
              const Cb = Lb ?? function(bb) {
                  const ub = bb.split("?")[0],
                    hb = ub.lastIndexOf(".");
                  return hb > -1 ? ub.substring(hb).toLowerCase() : ""
                }(bb),
                db = (0, ob.d)(Cb),
                rb = (bb, ub) => {
                  Kb.dispose(), Gb ? Gb(bb, ub) : bb && Zb.b.Warn(bb)
                },
                jb = (Gb, Hb) => {
                  bb === Wb ? Gb && rb(Gb.status + " " + Gb.statusText, Hb) : (Zb.b.Warn(`Failed to load ${bb}, falling back to the ${Wb}`), this.createCubeTextureBase(Wb, ub, hb, !!Bb, Ob, rb, Ub, Lb, Yb, Sb, ab, Kb, Xb, pb, Ab, lb))
                };
              if (db) db.then((Bb => {
                const Gb = bb => {
                  Xb && Xb(Kb, bb), Bb.loadCubeData(bb, Kb, Yb, Ob, ((bb, ub) => {
                    rb(bb, ub)
                  }))
                };
                lb ? Gb(lb) : hb && 6 === hb.length ? Bb.supportCascades ? this._cascadeLoadFiles(ub, (bb => Gb(bb.map((bb => new Uint8Array(bb))))), hb, rb) : rb("Textures type does not support cascades.") : this._loadFile(bb, (bb => Gb(new Uint8Array(bb))), void 0, ub ? ub.offlineProvider || null : void 0, !0, jb)
              }));
              else {
                if (!hb || 0 === hb.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(ub, Kb, ((bb, ub) => {
                  pb && pb(bb, ub)
                }), hb, rb)
              }
              return this._internalTexturesCache.push(Kb), Kb
            }), this.name = bb, this.url = bb, this._noMipmap = Gb, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = Ub.d.Identity(), this.coordinatesMode = Yb.f.CUBIC_MODE;
            let Eb = null;
            null === Ob || Array.isArray(Ob) ? (this._noMipmap = Gb, this._format = Kb, this._createPolynomials = db, hb = Ob, this._loaderOptions = nb, this._useSRGBBuffer = qb, this._lodScale = rb, this._lodOffset = jb) : (hb = Ob.extensions ?? null, this._noMipmap = Ob.noMipmap ?? !1, Lb = Ob.files ?? null, Eb = Ob.buffer ?? null, this._format = Ob.format ?? 5, Wb = Ob.prefiltered ?? !1, Cb = Ob.forcedExtension ?? null, this._createPolynomials = Ob.createPolynomials ?? !1, this._lodScale = Ob.lodScale ?? .8, this._lodOffset = Ob.lodOffset ?? 0, this._loaderOptions = Ob.loaderOptions, this._useSRGBBuffer = Ob.useSRGBBuffer, this._sphericalPolynomialTargetSize = Ob.sphericalPolynomialTargetSize ?? 0, Sb = Ob.onLoad ?? null, Hb = Ob.onError ?? null), (bb || Lb) && this.updateURL(bb, Cb, Sb, Wb, Hb, hb, this.ZN()?.useDelayedTextureLoading, Lb, Eb)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(bb) {
            let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Ub = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              Lb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Yb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = bb), this.url = bb, ub && (this._forcedExtension = ub);
            const Sb = bb.lastIndexOf("."),
              ab = ub || (Sb > -1 ? bb.substring(Sb).toLowerCase() : ""),
              Hb = 0 === ab.indexOf(".dds"),
              wb = 0 === ab.indexOf(".env"),
              Zb = 0 === ab.indexOf(".basis");
            if (wb ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = Bb, Bb && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), Lb) this._files = Lb;
            else if (Zb || wb || Hb || Gb || (Gb = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, Gb) {
              for (let ub = 0; ub < Gb.length; ub++) this._files.push(bb + Gb[ub]);
              this._extensions = Gb
            }
            this._buffer = Yb, Ub ? (this.delayLoadState = 4, this._delayedOnLoad = hb, this._delayedOnError = Ob) : this._loadTexture(hb, Ob)
          }
          delayLoad(bb) {
            4 === this.delayLoadState && (bb && (this._forcedExtension = bb), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(bb) {
            if (bb.updateFlag === this._textureMatrix.updateFlag) return;
            if (bb.isIdentity() !== this._textureMatrix.isIdentity() && this.ZN()?.markAllMaterialsAsDirty(1, (bb => -1 !== bb.getActiveTextures().indexOf(this))), this._textureMatrix = bb, !this.ZN()?.useRightHandedSystem) return;
            const ub = Ub.i.YX[0],
              hb = Ub.i.Quaternion[0],
              Bb = Ub.i.YX[1];
            this._textureMatrix.decompose(ub, hb, Bb), hb.z *= -1, hb.w *= -1, Ub.d.ComposeToRef(ub, hb, Bb, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.ZN()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const hb = this.ZN(),
              Bb = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const Ob = () => {
                this.onLoadObservable.notifyObservers(this), Bb && (Bb.dispose(), this.ZN()?.markAllMaterialsAsDirty(1)), bb && bb()
              },
              Ub = (bb, hb) => {
                this._loadingError = !0, this._errorObject = {
                  message: bb,
                  exception: hb
                }, ub && ub(bb, hb), Yb.f.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? Gb.c.SetImmediate((() => Ob())) : this._texture.onLoadedObservable.add((() => Ob())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, hb, this._lodScale, this._lodOffset, bb, Ub, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, hb, this._files, this._noMipmap, bb, Ub, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let ub = 0;
            const hb = this.irradianceTexture,
              Bb = Hb.c.Clone((() => {
                const hb = new bb(this.url, this.ZN() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return ub = hb.uniqueId, hb
              }), this);
            return Bb.uniqueId = ub, hb && !this.irradianceTexture && (this.irradianceTexture = hb), Bb
          }
        }, (() => {
          const Gb = "function" === typeof Symbol && Symbol.metadata ? Object.create(nb[Symbol.metadata] ?? null) : void 0;
          ub = [(0, Ob.K)()], hb = [(0, Ob.H)()], Sb = [(0, Ob.H)()], Kb = [(0, Ob.K)("rotationY")], Wb = [(0, Ob.K)("files")], Cb = [(0, Ob.K)("forcedExtension")], db = [(0, Ob.K)("extensions")], rb = [(0, Ob.x)("textureMatrix")], jb = [(0, Ob.x)("textureMatrixRefraction")], (0, Bb.h)(bb, null, Sb, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: bb => "boundingBoxSize" in bb,
              get: bb => bb.boundingBoxSize
            },
            metadata: Gb
          }, null, Db), (0, Bb.h)(bb, null, Kb, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: bb => "rotationY" in bb,
              set: (bb, ub) => {
                bb.rotationY = ub
              }
            },
            metadata: Gb
          }, null, Db), (0, Bb.h)(null, null, ub, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: bb => "url" in bb,
              get: bb => bb.url,
              set: (bb, ub) => {
                bb.url = ub
              }
            },
            metadata: Gb
          }, xb, zb), (0, Bb.h)(null, null, hb, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: bb => "boundingBoxPosition" in bb,
              get: bb => bb.boundingBoxPosition,
              set: (bb, ub) => {
                bb.boundingBoxPosition = ub
              }
            },
            metadata: Gb
          }, gb, ib), (0, Bb.h)(null, null, Wb, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: bb => "_files" in bb,
              get: bb => bb._files,
              set: (bb, ub) => {
                bb._files = ub
              }
            },
            metadata: Gb
          }, vb, tb), (0, Bb.h)(null, null, Cb, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: bb => "_forcedExtension" in bb,
              get: bb => bb._forcedExtension,
              set: (bb, ub) => {
                bb._forcedExtension = ub
              }
            },
            metadata: Gb
          }, Jb, eb), (0, Bb.h)(null, null, db, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: bb => "_extensions" in bb,
              get: bb => bb._extensions,
              set: (bb, ub) => {
                bb._extensions = ub
              }
            },
            metadata: Gb
          }, Nb, sb), (0, Bb.h)(null, null, rb, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: bb => "_textureMatrix" in bb,
              get: bb => bb._textureMatrix,
              set: (bb, ub) => {
                bb._textureMatrix = ub
              }
            },
            metadata: Gb
          }, Mb, mb), (0, Bb.h)(null, null, jb, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: bb => "_textureMatrixRefraction" in bb,
              get: bb => bb._textureMatrixRefraction,
              set: (bb, ub) => {
                bb._textureMatrixRefraction = ub
              }
            },
            metadata: Gb
          }, Ib, Pb), Gb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Gb
          })
        })(), bb
      })(),
      Wb = !1;

    function Cb(bb, ub, hb) {
      let Bb = "";
      for (const Ob of bb) Bb += Ob;
      return new Kb(Bb, ub, null, hb, bb)
    }

    function db(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Bb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Ob = ub.useDelayedTextureLoading;
      ub.useDelayedTextureLoading = !1;
      const Gb = new Kb(bb, ub, null, !1, null, null, null, void 0, !0, hb, Bb);
      return ub.useDelayedTextureLoading = Ob, Gb
    }

    function rb(bb, ub, hb) {
      const Bb = Hb.c.Parse((() => {
        let Bb = !1;
        return bb.prefiltered && (Bb = bb.prefiltered), new Kb(hb + (bb.url ?? bb.name), ub, bb.extensions, !1, bb.files || null, null, null, void 0, Bb, bb.forcedExtension)
      }), bb, ub);
      if (bb.boundingBoxPosition && (Bb.boundingBoxPosition = Ub.q.FromArray(bb.boundingBoxPosition)), bb.boundingBoxSize && (Bb.boundingBoxSize = Ub.q.FromArray(bb.boundingBoxSize)), bb.animations)
        for (let Ob = 0; Ob < bb.animations.length; Ob++) {
          const ub = bb.animations[Ob],
            hb = (0, Sb.d)("BABYLON.Animation");
          hb && Bb.animations.push(hb.Parse(ub))
        }
      return Bb
    }
    Wb || (Wb = !0, Kb.CreateFromImages = Cb, Kb.CreateFromPrefilteredData = db, Kb.Parse = rb, Yb.f._CubeTextureParser = rb, (0, Sb.f)("BABYLON.CubeTexture", Kb))
  },
  40610: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Sb
    });
    var Bb = hb(38302),
      Ob = hb(39932),
      Gb = hb(39387),
      Ub = hb(39296),
      Lb = hb(39287);
    let Yb = !1;
    class Sb extends Ob.f {
      constructor(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Sb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          Hb = arguments.length > 6 ? arguments[6] : void 0;
        const wb = !hb || hb._isScene;
        super(null, wb ? hb : hb?.Xp, wb ? !Bb : hb, Hb, Sb, void 0, void 0, void 0, void 0, ab), Yb || (Yb = !0, Ub.ThinEngine.prototype.createDynamicTexture = function(bb, ub, hb, Bb) {
          const Ob = new Lb.b(this, 4);
          return Ob.baseWidth = bb, Ob.baseHeight = ub, hb && (bb = this.needPOTTextures ? (0, Gb.i)(bb, this._caps.maxTextureSize) : bb, ub = this.needPOTTextures ? (0, Gb.i)(ub, this._caps.maxTextureSize) : ub), Ob.width = bb, Ob.height = ub, Ob.isReady = !1, Ob.generateMipMaps = hb, Ob.samplingMode = Bb, this.updateTextureSamplingMode(Bb, Ob), this._internalTexturesCache.push(Ob), Ob
        }, Ub.ThinEngine.prototype.updateDynamicTexture = function(bb, ub, hb) {
          let Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Ob = arguments.length > 4 ? arguments[4] : void 0,
            Gb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!bb) return;
          const Ub = this._gl,
            Lb = Ub.TEXTURE_2D,
            Yb = this._bindTextureDirectly(Lb, bb, !0, Gb);
          this._unpackFlipY(void 0 === hb ? bb.invertY : hb), Bb && Ub.pixelStorei(Ub.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const Sb = this._getWebGLTextureType(bb.type),
            ab = this._getInternalFormat(Ob || bb.format),
            Hb = this._getRGBABufferInternalSizedFormat(bb.type, ab);
          Ub.texImage2D(Lb, 0, Hb, ab, Sb, ub), bb.generateMipMaps && Ub.generateMipmap(Lb), Yb || this._bindTextureDirectly(Lb, null), Bb && Ub.pixelStorei(Ub.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), Ob && (bb.format = Ob), bb._dynamicTextureSource = ub, bb._premulAlpha = Bb, bb.invertY = hb || !1, bb.isReady = !0
        }), this.name = bb, this.wrapU = Ob.f.CLAMP_ADDRESSMODE, this.wrapV = Ob.f.CLAMP_ADDRESSMODE, this._generateMipMaps = Bb;
        const Zb = this._getEngine();
        if (!Zb) return;
        if (ub.getContext) this._canvas = ub, this._ownCanvas = !1, this._texture = Zb.createDynamicTexture(this._canvas.width, this._canvas.height, Bb, Sb);
        else {
          this._canvas = Zb.createCanvas(1, 1), this._ownCanvas = !0;
          const bb = ub;
          bb.width || 0 === bb.width ? this._texture = Zb.createDynamicTexture(bb.width, bb.height, Bb, Sb) : this._texture = Zb.createDynamicTexture(ub, ub, Bb, Sb)
        }
        const Xb = this.getSize();
        this._canvas.width !== Xb.width && (this._canvas.width = Xb.width), this._canvas.height !== Xb.height && (this._canvas.height = Xb.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(bb) {
        this._canvas.width = bb.width, this._canvas.height = bb.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(bb.width, bb.height, this._generateMipMaps, this.samplingMode)
      }
      scale(bb) {
        const ub = this.getSize();
        ub.width *= bb, ub.height *= bb, this._recreate(ub)
      }
      scaleTo(bb, ub) {
        const hb = this.getSize();
        hb.width = bb, hb.height = ub, this._recreate(hb)
      }
      getContext() {
        return this._context
      }
      clear(bb) {
        const ub = this.getSize();
        bb && (this._context.fillStyle = bb), this._context.clearRect(0, 0, ub.width, ub.height)
      }
      update(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === bb || bb, ub, this._format || void 0, void 0, hb)
      }
      drawText(bb, ub, hb, Bb, Ob, Gb, Ub) {
        let Lb = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const Yb = this.getSize();
        if (Gb && (this._context.fillStyle = Gb, this._context.fillRect(0, 0, Yb.width, Yb.height)), this._context.font = Bb, null === ub || void 0 === ub) {
          const hb = this._context.measureText(bb);
          ub = (Yb.width - hb.width) / 2
        }
        if (null === hb || void 0 === hb) {
          const bb = parseInt(Bb.replace(/\D/g, ""));
          hb = Yb.height / 2 + bb / 3.65
        }
        this._context.fillStyle = Ob || "", this._context.fillText(bb, ub, hb), Lb && this.update(Ub)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const bb = this.ZN();
        if (!bb) return this;
        const ub = this.getSize(),
          hb = new Sb(this.name, ub, bb, this._generateMipMaps);
        return hb.hasAlpha = this.hasAlpha, hb.level = this.level, hb.wrapU = this.wrapU, hb.wrapV = this.wrapV, hb
      }
      serialize() {
        const bb = this.ZN();
        bb && !bb.isReady() && Bb.b.Warn("The scene must be ready before serializing the dynamic texture");
        const ub = super.serialize();
        return Sb._IsCanvasElement(this._canvas) && (ub.base64String = this._canvas.toDataURL()), ub.invertY = this._invertY, ub.samplingMode = this.samplingMode, ub
      }
      static _IsCanvasElement(bb) {
        return void 0 !== bb.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  40592: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob
    });
    var Bb = hb(39932);
    class Ob extends Bb.f {
      get depth() {
        return this._depth
      }
      constructor(bb, ub, hb, Ob, Gb, Ub) {
        let Lb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Yb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          Sb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Bb.f.TRILINEAR_SAMPLINGMODE,
          ab = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Hb = arguments.length > 10 ? arguments[10] : void 0,
          wb = arguments.length > 11 ? arguments[11] : void 0;
        super(null, Ub, !Lb, Yb), this.format = Gb, this._texture = Ub.UX().createRawTexture2DArray(bb, ub, hb, Ob, Gb, Lb, Yb, Sb, null, ab, Hb ?? 0, wb), this._depth = Ob, this.is2DArray = !0
      }
      update(bb) {
        this.updateMipLevel(bb, 0)
      }
      updateMipLevel(bb, ub) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, bb, this._texture.format, this._texture.invertY, null, this._texture.type, ub)
      }
      static CreateRGBATexture(bb, ub, hb, Bb, Gb) {
        return new Ob(bb, ub, hb, Bb, 5, Gb, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  40588: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Bb.c
    });
    var Bb = hb(39805);
    (0, Bb.g)()
  },
  39544: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb.f
    });
    var Bb = hb(39551);
    (0, Bb.d)()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);