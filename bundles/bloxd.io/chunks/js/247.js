export const id = 247;
export const ids = [247];
export const modules = {
  39690: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Tb,
      c: () => Ub
    });
    var kb = sb(38284),
      Wb = sb(39441),
      ab = sb(39658),
      Tb = {};
    class Ub {
      constructor(bb) {
        this.attachedToElement = !1, this.attached = {}, this.camera = bb, this.checkInputs = () => {}
      }
      add(bb) {
        const cb = bb.getSimpleName();
        this.attached[cb] ? kb.c.Warn("camera input of type " + cb + " already exists on camera") : (this.attached[cb] = bb, bb.camera = this.camera, bb.checkInputs && (this.checkInputs = this._addCheckInputs(bb.checkInputs.bind(bb))), this.attachedToElement && bb.attachControl(this.noPreventDefault))
      }
      remove(bb) {
        for (const cb in this.attached) {
          const sb = this.attached[cb];
          if (sb === bb) return sb.detachControl(), sb.camera = null, delete this.attached[cb], void this.rebuildInputCheck()
        }
      }
      removeByType(bb) {
        for (const cb in this.attached) {
          const sb = this.attached[cb];
          sb.getClassName() === bb && (sb.detachControl(), sb.camera = null, delete this.attached[cb], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(bb) {
        const cb = this.checkInputs;
        return () => {
          cb(), bb()
        }
      }
      attachInput(bb) {
        this.attachedToElement && bb.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          bb = !ab.c.ForceAttachControlToAlwaysPreventDefault && bb, this.attachedToElement = !0, this.noPreventDefault = bb;
          for (const cb in this.attached) this.attached[cb].attachControl(bb)
        }
      }
      detachElement() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const cb in this.attached) this.attached[cb].detachControl(), bb && (this.attached[cb].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const bb in this.attached) {
          const cb = this.attached[bb];
          cb.checkInputs && (this.checkInputs = this._addCheckInputs(cb.checkInputs.bind(cb)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(bb) {
        const cb = {};
        for (const sb in this.attached) {
          const bb = this.attached[sb],
            kb = Wb.d.Serialize(bb);
          cb[bb.getClassName()] = kb
        }
        bb.inputsmgr = cb
      }
      parse(bb) {
        const cb = bb.inputsmgr;
        if (cb) {
          this.clear();
          for (const bb in cb) {
            const sb = Tb[bb];
            if (sb) {
              const kb = cb[bb],
                ab = Wb.d.Parse((() => new sb), kb, null);
              this.add(ab)
            }
          }
        } else
          for (const sb in this.attached) {
            const cb = Tb[this.attached[sb].getClassName()];
            if (cb) {
              const kb = Wb.d.Parse((() => new cb), bb, null);
              this.remove(this.attached[sb]), this.add(kb)
            }
          }
      }
    }
  },
  40542: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Nb
    });
    var kb = sb(39414),
      Wb = sb(39418),
      ab = sb(39307),
      Tb = sb(36656),
      Ub = sb(39406),
      Ib = sb(39895),
      Hb = sb(36698),
      fb = sb(36683),
      Mb = sb(39441),
      Xb = sb(39241),
      nb = sb(38284),
      mb = sb(39466),
      lb = sb(37501),
      Qb = sb(39514);
    var eb = sb(39311);
    let Cb = !1;
    let Nb = (() => {
        var bb;
        let cb, sb, Hb, Nb, Vb, Lb, ub, Yb, hb, Jb = Ub.e,
          gb = [],
          Bb = [],
          tb = [],
          yb = [],
          Pb = [],
          Db = [],
          Eb = [],
          ib = [],
          Ob = [],
          Gb = [],
          Kb = [],
          Zb = [],
          zb = [],
          qb = [],
          db = [];
        return bb = class extends Jb {
          set boundingBoxSize(bb) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(bb)) return;
            this._boundingBoxSize = bb;
            const cb = this.EY();
            cb && cb.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(bb) {
            this._rotationY = bb, this.setReflectionTextureMatrix(Tb.e.RotationY(this._rotationY))
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
          constructor(bb, cb) {
            let sb, Wb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Ub = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Hb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Mb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              Nb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              Vb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              Lb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              ub = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              Yb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              hb = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              Jb = arguments.length > 13 ? arguments[13] : void 0,
              Ab = arguments.length > 14 ? arguments[14] : void 0;
            super(cb), this._delayedOnLoad = (0, kb.m)(this, gb), this.onLoadObservable = new fb.c, this.url = (0, kb.m)(this, Bb, void 0), this.boundingBoxPosition = ((0, kb.m)(this, tb), (0, kb.m)(this, yb, Tb.p.Zero())), this._boundingBoxSize = (0, kb.m)(this, Pb), this._rotationY = 0, this._files = (0, kb.m)(this, Db, null), this._forcedExtension = ((0, kb.m)(this, Eb), (0, kb.m)(this, ib, null)), this._extensions = ((0, kb.m)(this, Ob), (0, kb.m)(this, Gb, null)), this._textureMatrix = ((0, kb.m)(this, Kb), (0, kb.m)(this, Zb, void 0)), this._textureMatrixRefraction = ((0, kb.m)(this, zb), (0, kb.m)(this, qb, new Tb.e)), this._format = (0, kb.m)(this, db), this._buffer = null, Cb || (Cb = !0, eb.b.prototype._partialLoadFile = function(bb, cb, sb, kb) {
              let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(bb, (bb => {
                sb[cb] = bb, sb._internalCount++, 6 === sb._internalCount && kb(sb)
              }), void 0, void 0, !0, ((bb, cb) => {
                Wb && bb && Wb(bb.status + " " + bb.statusText, cb)
              }))
            }, eb.b.prototype._cascadeLoadFiles = function(bb, cb, sb) {
              let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const Wb = [];
              Wb._internalCount = 0;
              for (let ab = 0; ab < 6; ab++) this._partialLoadFile(sb[ab], ab, Wb, cb, kb)
            }, eb.b.prototype._cascadeLoadImgs = function(bb, cb, sb, kb) {
              let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                ab = arguments.length > 5 ? arguments[5] : void 0;
              const Tb = [];
              Tb._internalCount = 0;
              for (let Ub = 0; Ub < 6; Ub++) this._partialLoadImg(kb[Ub], Ub, Tb, bb, cb, sb, Wb, ab)
            }, eb.b.prototype._partialLoadImg = function(bb, cb, sb, kb, Wb, ab) {
              let Tb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                Ub = arguments.length > 7 ? arguments[7] : void 0;
              const Ib = (0, lb.b)();
              (0, mb.m)(bb, (bb => {
                sb[cb] = bb, sb._internalCount++, kb && kb.removePendingData(Ib), 6 === sb._internalCount && ab && ab(Wb, sb)
              }), ((bb, cb) => {
                kb && kb.removePendingData(Ib), Tb && Tb(bb, cb)
              }), kb ? kb.offlineProvider : null, Ub), kb && kb.addPendingData(Ib)
            }, eb.b.prototype.createCubeTextureBase = function(bb, cb, sb, kb) {
              let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                Tb = arguments.length > 6 ? arguments[6] : void 0,
                Ub = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                Ib = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                Hb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                fb = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                Mb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                mb = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                lb = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                eb = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                Cb = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const Nb = Mb || new Xb.b(this, 7);
              Nb.isCube = !0, Nb.url = bb, Nb.generateMipMaps = !kb, Nb._lodGenerationScale = Hb, Nb._lodGenerationOffset = fb, Nb._useSRGBBuffer = !!eb && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!kb), Nb !== Mb && (Nb.label = bb.substring(0, 60)), this._doNotHandleContextLost || (Nb._extension = Ub, Nb._files = sb, Nb._buffer = Cb);
              const Vb = bb;
              this._transformTextureUrl && !Mb && (bb = this._transformTextureUrl(bb));
              const Lb = Ub ?? function(bb) {
                  const cb = bb.split("?")[0],
                    sb = cb.lastIndexOf(".");
                  return sb > -1 ? cb.substring(sb).toLowerCase() : ""
                }(bb),
                ub = (0, Qb.b)(Lb),
                Yb = (bb, cb) => {
                  Nb.dispose(), ab ? ab(bb, cb) : bb && nb.c.Warn(bb)
                },
                hb = (ab, Mb) => {
                  bb === Vb ? ab && Yb(ab.status + " " + ab.statusText, Mb) : (nb.c.Warn(`Failed to load ${bb}, falling back to the ${Vb}`), this.createCubeTextureBase(Vb, cb, sb, !!kb, Wb, Yb, Tb, Ub, Ib, Hb, fb, Nb, mb, lb, eb, Cb))
                };
              if (ub) ub.then((kb => {
                const ab = bb => {
                  mb && mb(Nb, bb), kb.loadCubeData(bb, Nb, Ib, Wb, ((bb, cb) => {
                    Yb(bb, cb)
                  }))
                };
                Cb ? ab(Cb) : sb && 6 === sb.length ? kb.supportCascades ? this._cascadeLoadFiles(cb, (bb => ab(bb.map((bb => new Uint8Array(bb))))), sb, Yb) : Yb("Textures type does not support cascades.") : this._loadFile(bb, (bb => ab(new Uint8Array(bb))), void 0, cb ? cb.offlineProvider || null : void 0, !0, hb)
              }));
              else {
                if (!sb || 0 === sb.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(cb, Nb, ((bb, cb) => {
                  lb && lb(bb, cb)
                }), sb, Yb)
              }
              return this._internalTexturesCache.push(Nb), Nb
            }), this.name = bb, this.url = bb, this._noMipmap = ab, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = Tb.e.Identity(), this.coordinatesMode = Ib.e.CUBIC_MODE;
            let wb = null;
            null === Wb || Array.isArray(Wb) ? (this._noMipmap = ab, this._format = Nb, this._createPolynomials = ub, sb = Wb, this._loaderOptions = Jb, this._useSRGBBuffer = Ab, this._lodScale = Yb, this._lodOffset = hb) : (sb = Wb.extensions ?? null, this._noMipmap = Wb.noMipmap ?? !1, Ub = Wb.files ?? null, wb = Wb.buffer ?? null, this._format = Wb.format ?? 5, Vb = Wb.prefiltered ?? !1, Lb = Wb.forcedExtension ?? null, this._createPolynomials = Wb.createPolynomials ?? !1, this._lodScale = Wb.lodScale ?? .8, this._lodOffset = Wb.lodOffset ?? 0, this._loaderOptions = Wb.loaderOptions, this._useSRGBBuffer = Wb.useSRGBBuffer, this._sphericalPolynomialTargetSize = Wb.sphericalPolynomialTargetSize ?? 0, Hb = Wb.onLoad ?? null, Mb = Wb.onError ?? null), (bb || Ub) && this.updateURL(bb, Lb, Hb, Vb, Mb, sb, this.EY()?.useDelayedTextureLoading, Ub, wb)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(bb) {
            let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Tb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              Ub = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Ib = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = bb), this.url = bb, cb && (this._forcedExtension = cb);
            const Hb = bb.lastIndexOf("."),
              fb = cb || (Hb > -1 ? bb.substring(Hb).toLowerCase() : ""),
              Mb = 0 === fb.indexOf(".dds"),
              Xb = 0 === fb.indexOf(".env"),
              nb = 0 === fb.indexOf(".basis");
            if (Xb ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = kb, kb && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), Ub) this._files = Ub;
            else if (nb || Xb || Mb || ab || (ab = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, ab) {
              for (let cb = 0; cb < ab.length; cb++) this._files.push(bb + ab[cb]);
              this._extensions = ab
            }
            this._buffer = Ib, Tb ? (this.delayLoadState = 4, this._delayedOnLoad = sb, this._delayedOnError = Wb) : this._loadTexture(sb, Wb)
          }
          delayLoad(bb) {
            4 === this.delayLoadState && (bb && (this._forcedExtension = bb), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(bb) {
            if (bb.updateFlag === this._textureMatrix.updateFlag) return;
            if (bb.isIdentity() !== this._textureMatrix.isIdentity() && this.EY()?.markAllMaterialsAsDirty(1, (bb => -1 !== bb.getActiveTextures().indexOf(this))), this._textureMatrix = bb, !this.EY()?.useRightHandedSystem) return;
            const cb = Tb.m.Fm[0],
              sb = Tb.m.Quaternion[0],
              kb = Tb.m.Fm[1];
            this._textureMatrix.decompose(cb, sb, kb), sb.z *= -1, sb.w *= -1, Tb.e.ComposeToRef(cb, sb, kb, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.EY()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const sb = this.EY(),
              kb = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const Wb = () => {
                this.onLoadObservable.notifyObservers(this), kb && (kb.dispose(), this.EY()?.markAllMaterialsAsDirty(1)), bb && bb()
              },
              Tb = (bb, sb) => {
                this._loadingError = !0, this._errorObject = {
                  message: bb,
                  exception: sb
                }, cb && cb(bb, sb), Ib.e.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? ab.c.SetImmediate((() => Wb())) : this._texture.onLoadedObservable.add((() => Wb())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, sb, this._lodScale, this._lodOffset, bb, Tb, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, sb, this._files, this._noMipmap, bb, Tb, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let cb = 0;
            const sb = this.irradianceTexture,
              kb = Mb.d.Clone((() => {
                const sb = new bb(this.url, this.EY() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return cb = sb.uniqueId, sb
              }), this);
            return kb.uniqueId = cb, sb && !this.irradianceTexture && (this.irradianceTexture = sb), kb
          }
        }, (() => {
          const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(Jb[Symbol.metadata] ?? null) : void 0;
          cb = [(0, Wb.E)()], sb = [(0, Wb.C)()], Hb = [(0, Wb.C)()], Nb = [(0, Wb.E)("rotationY")], Vb = [(0, Wb.E)("files")], Lb = [(0, Wb.E)("forcedExtension")], ub = [(0, Wb.E)("extensions")], Yb = [(0, Wb.t)("textureMatrix")], hb = [(0, Wb.t)("textureMatrixRefraction")], (0, kb.j)(bb, null, Hb, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: bb => "boundingBoxSize" in bb,
              get: bb => bb.boundingBoxSize
            },
            metadata: ab
          }, null, gb), (0, kb.j)(bb, null, Nb, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: bb => "rotationY" in bb,
              set: (bb, cb) => {
                bb.rotationY = cb
              }
            },
            metadata: ab
          }, null, gb), (0, kb.j)(null, null, cb, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: bb => "url" in bb,
              get: bb => bb.url,
              set: (bb, cb) => {
                bb.url = cb
              }
            },
            metadata: ab
          }, Bb, tb), (0, kb.j)(null, null, sb, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: bb => "boundingBoxPosition" in bb,
              get: bb => bb.boundingBoxPosition,
              set: (bb, cb) => {
                bb.boundingBoxPosition = cb
              }
            },
            metadata: ab
          }, yb, Pb), (0, kb.j)(null, null, Vb, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: bb => "_files" in bb,
              get: bb => bb._files,
              set: (bb, cb) => {
                bb._files = cb
              }
            },
            metadata: ab
          }, Db, Eb), (0, kb.j)(null, null, Lb, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: bb => "_forcedExtension" in bb,
              get: bb => bb._forcedExtension,
              set: (bb, cb) => {
                bb._forcedExtension = cb
              }
            },
            metadata: ab
          }, ib, Ob), (0, kb.j)(null, null, ub, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: bb => "_extensions" in bb,
              get: bb => bb._extensions,
              set: (bb, cb) => {
                bb._extensions = cb
              }
            },
            metadata: ab
          }, Gb, Kb), (0, kb.j)(null, null, Yb, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: bb => "_textureMatrix" in bb,
              get: bb => bb._textureMatrix,
              set: (bb, cb) => {
                bb._textureMatrix = cb
              }
            },
            metadata: ab
          }, Zb, zb), (0, kb.j)(null, null, hb, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: bb => "_textureMatrixRefraction" in bb,
              get: bb => bb._textureMatrixRefraction,
              set: (bb, cb) => {
                bb._textureMatrixRefraction = cb
              }
            },
            metadata: ab
          }, qb, db), ab && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ab
          })
        })(), bb
      })(),
      Vb = !1;

    function Lb(bb, cb, sb) {
      let kb = "";
      for (const Wb of bb) kb += Wb;
      return new Nb(kb, cb, null, sb, bb)
    }

    function ub(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        kb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Wb = cb.useDelayedTextureLoading;
      cb.useDelayedTextureLoading = !1;
      const ab = new Nb(bb, cb, null, !1, null, null, null, void 0, !0, sb, kb);
      return cb.useDelayedTextureLoading = Wb, ab
    }

    function Yb(bb, cb, sb) {
      const kb = Mb.d.Parse((() => {
        let kb = !1;
        return bb.prefiltered && (kb = bb.prefiltered), new Nb(sb + (bb.url ?? bb.name), cb, bb.extensions, !1, bb.files || null, null, null, void 0, kb, bb.forcedExtension)
      }), bb, cb);
      if (bb.boundingBoxPosition && (kb.boundingBoxPosition = Tb.p.FromArray(bb.boundingBoxPosition)), bb.boundingBoxSize && (kb.boundingBoxSize = Tb.p.FromArray(bb.boundingBoxSize)), bb.animations)
        for (let Wb = 0; Wb < bb.animations.length; Wb++) {
          const cb = bb.animations[Wb],
            sb = (0, Hb.e)("BABYLON.Animation");
          sb && kb.animations.push(sb.Parse(cb))
        }
      return kb
    }
    Vb || (Vb = !0, Nb.CreateFromImages = Lb, Nb.CreateFromPrefilteredData = ub, Nb.Parse = Yb, Ib.e._CubeTextureParser = Yb, (0, Hb.h)("BABYLON.CubeTexture", Nb))
  },
  40590: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Hb
    });
    var kb = sb(38284),
      Wb = sb(39895),
      ab = sb(39337),
      Tb = sb(39251),
      Ub = sb(39241);
    let Ib = !1;
    class Hb extends Wb.e {
      constructor(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          fb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          Mb = arguments.length > 6 ? arguments[6] : void 0;
        const Xb = !sb || sb._isScene;
        super(null, Xb ? sb : sb?.aQ, Xb ? !kb : sb, Mb, Hb, void 0, void 0, void 0, void 0, fb), Ib || (Ib = !0, Tb.ThinEngine.prototype.createDynamicTexture = function(bb, cb, sb, kb) {
          const Wb = new Ub.b(this, 4);
          return Wb.baseWidth = bb, Wb.baseHeight = cb, sb && (bb = this.needPOTTextures ? (0, ab.f)(bb, this._caps.maxTextureSize) : bb, cb = this.needPOTTextures ? (0, ab.f)(cb, this._caps.maxTextureSize) : cb), Wb.width = bb, Wb.height = cb, Wb.isReady = !1, Wb.generateMipMaps = sb, Wb.samplingMode = kb, this.updateTextureSamplingMode(kb, Wb), this._internalTexturesCache.push(Wb), Wb
        }, Tb.ThinEngine.prototype.updateDynamicTexture = function(bb, cb, sb) {
          let kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Wb = arguments.length > 4 ? arguments[4] : void 0,
            ab = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!bb) return;
          const Tb = this._gl,
            Ub = Tb.TEXTURE_2D,
            Ib = this._bindTextureDirectly(Ub, bb, !0, ab);
          this._unpackFlipY(void 0 === sb ? bb.invertY : sb), kb && Tb.pixelStorei(Tb.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const Hb = this._getWebGLTextureType(bb.type),
            fb = this._getInternalFormat(Wb || bb.format),
            Mb = this._getRGBABufferInternalSizedFormat(bb.type, fb);
          Tb.texImage2D(Ub, 0, Mb, fb, Hb, cb), bb.generateMipMaps && Tb.generateMipmap(Ub), Ib || this._bindTextureDirectly(Ub, null), kb && Tb.pixelStorei(Tb.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), Wb && (bb.format = Wb), bb._dynamicTextureSource = cb, bb._premulAlpha = kb, bb.invertY = sb || !1, bb.isReady = !0
        }), this.name = bb, this.wrapU = Wb.e.CLAMP_ADDRESSMODE, this.wrapV = Wb.e.CLAMP_ADDRESSMODE, this._generateMipMaps = kb;
        const nb = this._getEngine();
        if (!nb) return;
        if (cb.getContext) this._canvas = cb, this._ownCanvas = !1, this._texture = nb.createDynamicTexture(this._canvas.width, this._canvas.height, kb, Hb);
        else {
          this._canvas = nb.createCanvas(1, 1), this._ownCanvas = !0;
          const bb = cb;
          bb.width || 0 === bb.width ? this._texture = nb.createDynamicTexture(bb.width, bb.height, kb, Hb) : this._texture = nb.createDynamicTexture(cb, cb, kb, Hb)
        }
        const mb = this.getSize();
        this._canvas.width !== mb.width && (this._canvas.width = mb.width), this._canvas.height !== mb.height && (this._canvas.height = mb.height), this._context = this._canvas.getContext("2d")
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
        const cb = this.getSize();
        cb.width *= bb, cb.height *= bb, this._recreate(cb)
      }
      scaleTo(bb, cb) {
        const sb = this.getSize();
        sb.width = bb, sb.height = cb, this._recreate(sb)
      }
      getContext() {
        return this._context
      }
      clear(bb) {
        const cb = this.getSize();
        bb && (this._context.fillStyle = bb), this._context.clearRect(0, 0, cb.width, cb.height)
      }
      update(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === bb || bb, cb, this._format || void 0, void 0, sb)
      }
      drawText(bb, cb, sb, kb, Wb, ab, Tb) {
        let Ub = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const Ib = this.getSize();
        if (ab && (this._context.fillStyle = ab, this._context.fillRect(0, 0, Ib.width, Ib.height)), this._context.font = kb, null === cb || void 0 === cb) {
          const sb = this._context.measureText(bb);
          cb = (Ib.width - sb.width) / 2
        }
        if (null === sb || void 0 === sb) {
          const bb = parseInt(kb.replace(/\D/g, ""));
          sb = Ib.height / 2 + bb / 3.65
        }
        this._context.fillStyle = Wb || "", this._context.fillText(bb, cb, sb), Ub && this.update(Tb)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const bb = this.EY();
        if (!bb) return this;
        const cb = this.getSize(),
          sb = new Hb(this.name, cb, bb, this._generateMipMaps);
        return sb.hasAlpha = this.hasAlpha, sb.level = this.level, sb.wrapU = this.wrapU, sb.wrapV = this.wrapV, sb
      }
      serialize() {
        const bb = this.EY();
        bb && !bb.isReady() && kb.c.Warn("The scene must be ready before serializing the dynamic texture");
        const cb = super.serialize();
        return Hb._IsCanvasElement(this._canvas) && (cb.base64String = this._canvas.toDataURL()), cb.invertY = this._invertY, cb.samplingMode = this.samplingMode, cb
      }
      static _IsCanvasElement(bb) {
        return void 0 !== bb.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  40564: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb
    });
    var kb = sb(39895);
    class Wb extends kb.e {
      get depth() {
        return this._depth
      }
      constructor(bb, cb, sb, Wb, ab, Tb) {
        let Ub = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Ib = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          Hb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : kb.e.TRILINEAR_SAMPLINGMODE,
          fb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Mb = arguments.length > 10 ? arguments[10] : void 0,
          Xb = arguments.length > 11 ? arguments[11] : void 0;
        super(null, Tb, !Ub, Ib), this.format = ab, this._texture = Tb.Sm().createRawTexture2DArray(bb, cb, sb, Wb, ab, Ub, Ib, Hb, null, fb, Mb ?? 0, Xb), this._depth = Wb, this.is2DArray = !0
      }
      update(bb) {
        this.updateMipLevel(bb, 0)
      }
      updateMipLevel(bb, cb) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, bb, this._texture.format, this._texture.invertY, null, this._texture.type, cb)
      }
      static CreateRGBATexture(bb, cb, sb, kb, ab) {
        return new Wb(bb, cb, sb, kb, 5, ab, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  40555: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb.d
    });
    var kb = sb(39781);
    (0, kb.e)()
  },
  39522: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb.c
    });
    var kb = sb(39524);
    (0, kb.b)()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);