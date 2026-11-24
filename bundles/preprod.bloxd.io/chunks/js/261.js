export const id = 261;
export const ids = [261];
export const modules = {
  40435: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Sp,
      f: () => xp
    });
    var Op = cp(38905),
      op = cp(40233),
      Ip = cp(40411),
      Sp = {};
    class xp {
      constructor(pp) {
        this.attachedToElement = !1, this.attached = {}, this.camera = pp, this.checkInputs = () => {}
      }
      add(pp) {
        const ip = pp.getSimpleName();
        this.attached[ip] ? Op.e.Warn("camera input of type " + ip + " already exists on camera") : (this.attached[ip] = pp, pp.camera = this.camera, pp.checkInputs && (this.checkInputs = this._addCheckInputs(pp.checkInputs.bind(pp))), this.attachedToElement && pp.attachControl(this.noPreventDefault))
      }
      remove(pp) {
        for (const ip in this.attached) {
          const cp = this.attached[ip];
          if (cp === pp) return cp.detachControl(), cp.camera = null, delete this.attached[ip], void this.rebuildInputCheck()
        }
      }
      removeByType(pp) {
        for (const ip in this.attached) {
          const cp = this.attached[ip];
          cp.getClassName() === pp && (cp.detachControl(), cp.camera = null, delete this.attached[ip], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(pp) {
        const ip = this.checkInputs;
        return () => {
          ip(), pp()
        }
      }
      attachInput(pp) {
        this.attachedToElement && pp.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          pp = !Ip.d.ForceAttachControlToAlwaysPreventDefault && pp, this.attachedToElement = !0, this.noPreventDefault = pp;
          for (const ip in this.attached) this.attached[ip].attachControl(pp)
        }
      }
      detachElement() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const ip in this.attached) this.attached[ip].detachControl(), pp && (this.attached[ip].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const pp in this.attached) {
          const ip = this.attached[pp];
          ip.checkInputs && (this.checkInputs = this._addCheckInputs(ip.checkInputs.bind(ip)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(pp) {
        const ip = {};
        for (const cp in this.attached) {
          const pp = this.attached[cp],
            Op = op.c.Serialize(pp);
          ip[pp.getClassName()] = Op
        }
        pp.inputsmgr = ip
      }
      parse(pp) {
        const ip = pp.inputsmgr;
        if (ip) {
          this.clear();
          for (const pp in ip) {
            const cp = Sp[pp];
            if (cp) {
              const Op = ip[pp],
                Ip = op.c.Parse((() => new cp), Op, null);
              this.add(Ip)
            }
          }
        } else
          for (const cp in this.attached) {
            const ip = Sp[this.attached[cp].getClassName()];
            if (ip) {
              const Op = op.c.Parse((() => new ip), pp, null);
              this.remove(this.attached[cp]), this.add(Op)
            }
          }
      }
    }
  },
  41347: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Hp
    });
    var Op = cp(40203),
      op = cp(40210),
      Ip = cp(40107),
      Sp = cp(37320),
      xp = cp(40195),
      Lp = cp(40654),
      Yp = cp(37368),
      Dp = cp(37349),
      Ap = cp(40233),
      Pp = cp(40033),
      Wp = cp(38905),
      yp = cp(40257),
      Up = cp(38124),
      wp = cp(40286);
    var vp = cp(40113);
    let tp = !1;
    let Hp = (() => {
        var pp;
        let ip, cp, Yp, Hp, dp, ep, jp, kp, mp, Rp = xp.d,
          qp = [],
          Mp = [],
          Cp = [],
          Ep = [],
          Xp = [],
          lp = [],
          Qp = [],
          Jp = [],
          Bp = [],
          Np = [],
          Tp = [],
          fp = [],
          bp = [],
          hp = [],
          ap = [];
        return pp = class extends Rp {
          set boundingBoxSize(pp) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(pp)) return;
            this._boundingBoxSize = pp;
            const ip = this.Gl();
            ip && ip.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(pp) {
            this._rotationY = pp, this.setReflectionTextureMatrix(Sp.b.RotationY(this._rotationY))
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
          constructor(pp, ip) {
            let cp, op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Ip = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              xp = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Yp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Ap = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              Hp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              dp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              ep = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              jp = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              kp = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              mp = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              Rp = arguments.length > 13 ? arguments[13] : void 0,
              np = arguments.length > 14 ? arguments[14] : void 0;
            super(ip), this._delayedOnLoad = (0, Op.l)(this, qp), this.onLoadObservable = new Dp.d, this.url = (0, Op.l)(this, Mp, void 0), this.boundingBoxPosition = ((0, Op.l)(this, Cp), (0, Op.l)(this, Ep, Sp.o.Zero())), this._boundingBoxSize = (0, Op.l)(this, Xp), this._rotationY = 0, this._files = (0, Op.l)(this, lp, null), this._forcedExtension = ((0, Op.l)(this, Qp), (0, Op.l)(this, Jp, null)), this._extensions = ((0, Op.l)(this, Bp), (0, Op.l)(this, Np, null)), this._textureMatrix = ((0, Op.l)(this, Tp), (0, Op.l)(this, fp, void 0)), this._textureMatrixRefraction = ((0, Op.l)(this, bp), (0, Op.l)(this, hp, new Sp.b)), this._format = (0, Op.l)(this, ap), this._buffer = null, tp || (tp = !0, vp.b.prototype._partialLoadFile = function(pp, ip, cp, Op) {
              let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(pp, (pp => {
                cp[ip] = pp, cp._internalCount++, 6 === cp._internalCount && Op(cp)
              }), void 0, void 0, !0, ((pp, ip) => {
                op && pp && op(pp.status + " " + pp.statusText, ip)
              }))
            }, vp.b.prototype._cascadeLoadFiles = function(pp, ip, cp) {
              let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const op = [];
              op._internalCount = 0;
              for (let Ip = 0; Ip < 6; Ip++) this._partialLoadFile(cp[Ip], Ip, op, ip, Op)
            }, vp.b.prototype._cascadeLoadImgs = function(pp, ip, cp, Op) {
              let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                Ip = arguments.length > 5 ? arguments[5] : void 0;
              const Sp = [];
              Sp._internalCount = 0;
              for (let xp = 0; xp < 6; xp++) this._partialLoadImg(Op[xp], xp, Sp, pp, ip, cp, op, Ip)
            }, vp.b.prototype._partialLoadImg = function(pp, ip, cp, Op, op, Ip) {
              let Sp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                xp = arguments.length > 7 ? arguments[7] : void 0;
              const Lp = (0, Up.e)();
              (0, yp.p)(pp, (pp => {
                cp[ip] = pp, cp._internalCount++, Op && Op.removePendingData(Lp), 6 === cp._internalCount && Ip && Ip(op, cp)
              }), ((pp, ip) => {
                Op && Op.removePendingData(Lp), Sp && Sp(pp, ip)
              }), Op ? Op.offlineProvider : null, xp), Op && Op.addPendingData(Lp)
            }, vp.b.prototype.createCubeTextureBase = function(pp, ip, cp, Op) {
              let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                Sp = arguments.length > 6 ? arguments[6] : void 0,
                xp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                Lp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                Yp = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                Dp = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                Ap = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                yp = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                Up = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                vp = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                tp = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const Hp = Ap || new Pp.b(this, 7);
              Hp.isCube = !0, Hp.url = pp, Hp.generateMipMaps = !Op, Hp._lodGenerationScale = Yp, Hp._lodGenerationOffset = Dp, Hp._useSRGBBuffer = !!vp && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!Op), Hp !== Ap && (Hp.label = pp.substring(0, 60)), this._doNotHandleContextLost || (Hp._extension = xp, Hp._files = cp, Hp._buffer = tp);
              const dp = pp;
              this._transformTextureUrl && !Ap && (pp = this._transformTextureUrl(pp));
              const ep = xp ?? function(pp) {
                  const ip = pp.split("?")[0],
                    cp = ip.lastIndexOf(".");
                  return cp > -1 ? ip.substring(cp).toLowerCase() : ""
                }(pp),
                jp = (0, wp.d)(ep),
                kp = (pp, ip) => {
                  Hp.dispose(), Ip ? Ip(pp, ip) : pp && Wp.e.Warn(pp)
                },
                mp = (Ip, Ap) => {
                  pp === dp ? Ip && kp(Ip.status + " " + Ip.statusText, Ap) : (Wp.e.Warn(`Failed to load ${pp}, falling back to the ${dp}`), this.createCubeTextureBase(dp, ip, cp, !!Op, op, kp, Sp, xp, Lp, Yp, Dp, Hp, yp, Up, vp, tp))
                };
              if (jp) jp.then((Op => {
                const Ip = pp => {
                  yp && yp(Hp, pp), Op.loadCubeData(pp, Hp, Lp, op, ((pp, ip) => {
                    kp(pp, ip)
                  }))
                };
                tp ? Ip(tp) : cp && 6 === cp.length ? Op.supportCascades ? this._cascadeLoadFiles(ip, (pp => Ip(pp.map((pp => new Uint8Array(pp))))), cp, kp) : kp("Textures type does not support cascades.") : this._loadFile(pp, (pp => Ip(new Uint8Array(pp))), void 0, ip ? ip.offlineProvider || null : void 0, !0, mp)
              }));
              else {
                if (!cp || 0 === cp.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(ip, Hp, ((pp, ip) => {
                  Up && Up(pp, ip)
                }), cp, kp)
              }
              return this._internalTexturesCache.push(Hp), Hp
            }), this.name = pp, this.url = pp, this._noMipmap = Ip, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = Sp.b.Identity(), this.coordinatesMode = Lp.d.CUBIC_MODE;
            let Fp = null;
            null === op || Array.isArray(op) ? (this._noMipmap = Ip, this._format = Hp, this._createPolynomials = jp, cp = op, this._loaderOptions = Rp, this._useSRGBBuffer = np, this._lodScale = kp, this._lodOffset = mp) : (cp = op.extensions ?? null, this._noMipmap = op.noMipmap ?? !1, xp = op.files ?? null, Fp = op.buffer ?? null, this._format = op.format ?? 5, dp = op.prefiltered ?? !1, ep = op.forcedExtension ?? null, this._createPolynomials = op.createPolynomials ?? !1, this._lodScale = op.lodScale ?? .8, this._lodOffset = op.lodOffset ?? 0, this._loaderOptions = op.loaderOptions, this._useSRGBBuffer = op.useSRGBBuffer, this._sphericalPolynomialTargetSize = op.sphericalPolynomialTargetSize ?? 0, Yp = op.onLoad ?? null, Ap = op.onError ?? null), (pp || xp) && this.updateURL(pp, ep, Yp, dp, Ap, cp, this.Gl()?.useDelayedTextureLoading, xp, Fp)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(pp) {
            let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Sp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              xp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Lp = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = pp), this.url = pp, ip && (this._forcedExtension = ip);
            const Yp = pp.lastIndexOf("."),
              Dp = ip || (Yp > -1 ? pp.substring(Yp).toLowerCase() : ""),
              Ap = 0 === Dp.indexOf(".dds"),
              Pp = 0 === Dp.indexOf(".env"),
              Wp = 0 === Dp.indexOf(".basis");
            if (Pp ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = Op, Op && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), xp) this._files = xp;
            else if (Wp || Pp || Ap || Ip || (Ip = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, Ip) {
              for (let ip = 0; ip < Ip.length; ip++) this._files.push(pp + Ip[ip]);
              this._extensions = Ip
            }
            this._buffer = Lp, Sp ? (this.delayLoadState = 4, this._delayedOnLoad = cp, this._delayedOnError = op) : this._loadTexture(cp, op)
          }
          delayLoad(pp) {
            4 === this.delayLoadState && (pp && (this._forcedExtension = pp), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(pp) {
            if (pp.updateFlag === this._textureMatrix.updateFlag) return;
            if (pp.isIdentity() !== this._textureMatrix.isIdentity() && this.Gl()?.markAllMaterialsAsDirty(1, (pp => -1 !== pp.getActiveTextures().indexOf(this))), this._textureMatrix = pp, !this.Gl()?.useRightHandedSystem) return;
            const ip = Sp.i.Zy[0],
              cp = Sp.i.Quaternion[0],
              Op = Sp.i.Zy[1];
            this._textureMatrix.decompose(ip, cp, Op), cp.z *= -1, cp.w *= -1, Sp.b.ComposeToRef(ip, cp, Op, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.Gl()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const cp = this.Gl(),
              Op = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const op = () => {
                this.onLoadObservable.notifyObservers(this), Op && (Op.dispose(), this.Gl()?.markAllMaterialsAsDirty(1)), pp && pp()
              },
              Sp = (pp, cp) => {
                this._loadingError = !0, this._errorObject = {
                  message: pp,
                  exception: cp
                }, ip && ip(pp, cp), Lp.d.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? Ip.b.SetImmediate((() => op())) : this._texture.onLoadedObservable.add((() => op())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, cp, this._lodScale, this._lodOffset, pp, Sp, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, cp, this._files, this._noMipmap, pp, Sp, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let ip = 0;
            const cp = this.irradianceTexture,
              Op = Ap.c.Clone((() => {
                const cp = new pp(this.url, this.Gl() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return ip = cp.uniqueId, cp
              }), this);
            return Op.uniqueId = ip, cp && !this.irradianceTexture && (this.irradianceTexture = cp), Op
          }
        }, (() => {
          const Ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(Rp[Symbol.metadata] ?? null) : void 0;
          ip = [(0, op.K)()], cp = [(0, op.H)()], Yp = [(0, op.H)()], Hp = [(0, op.K)("rotationY")], dp = [(0, op.K)("files")], ep = [(0, op.K)("forcedExtension")], jp = [(0, op.K)("extensions")], kp = [(0, op.s)("textureMatrix")], mp = [(0, op.s)("textureMatrixRefraction")], (0, Op.j)(pp, null, Yp, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: pp => "boundingBoxSize" in pp,
              get: pp => pp.boundingBoxSize
            },
            metadata: Ip
          }, null, qp), (0, Op.j)(pp, null, Hp, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: pp => "rotationY" in pp,
              set: (pp, ip) => {
                pp.rotationY = ip
              }
            },
            metadata: Ip
          }, null, qp), (0, Op.j)(null, null, ip, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: pp => "url" in pp,
              get: pp => pp.url,
              set: (pp, ip) => {
                pp.url = ip
              }
            },
            metadata: Ip
          }, Mp, Cp), (0, Op.j)(null, null, cp, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: pp => "boundingBoxPosition" in pp,
              get: pp => pp.boundingBoxPosition,
              set: (pp, ip) => {
                pp.boundingBoxPosition = ip
              }
            },
            metadata: Ip
          }, Ep, Xp), (0, Op.j)(null, null, dp, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: pp => "_files" in pp,
              get: pp => pp._files,
              set: (pp, ip) => {
                pp._files = ip
              }
            },
            metadata: Ip
          }, lp, Qp), (0, Op.j)(null, null, ep, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: pp => "_forcedExtension" in pp,
              get: pp => pp._forcedExtension,
              set: (pp, ip) => {
                pp._forcedExtension = ip
              }
            },
            metadata: Ip
          }, Jp, Bp), (0, Op.j)(null, null, jp, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: pp => "_extensions" in pp,
              get: pp => pp._extensions,
              set: (pp, ip) => {
                pp._extensions = ip
              }
            },
            metadata: Ip
          }, Np, Tp), (0, Op.j)(null, null, kp, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: pp => "_textureMatrix" in pp,
              get: pp => pp._textureMatrix,
              set: (pp, ip) => {
                pp._textureMatrix = ip
              }
            },
            metadata: Ip
          }, fp, bp), (0, Op.j)(null, null, mp, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: pp => "_textureMatrixRefraction" in pp,
              get: pp => pp._textureMatrixRefraction,
              set: (pp, ip) => {
                pp._textureMatrixRefraction = ip
              }
            },
            metadata: Ip
          }, hp, ap), Ip && Object.defineProperty(pp, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ip
          })
        })(), pp
      })(),
      dp = !1;

    function ep(pp, ip, cp) {
      let Op = "";
      for (const op of pp) Op += op;
      return new Hp(Op, ip, null, cp, pp)
    }

    function jp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const op = ip.useDelayedTextureLoading;
      ip.useDelayedTextureLoading = !1;
      const Ip = new Hp(pp, ip, null, !1, null, null, null, void 0, !0, cp, Op);
      return ip.useDelayedTextureLoading = op, Ip
    }

    function kp(pp, ip, cp) {
      const Op = Ap.c.Parse((() => {
        let Op = !1;
        return pp.prefiltered && (Op = pp.prefiltered), new Hp(cp + (pp.url ?? pp.name), ip, pp.extensions, !1, pp.files || null, null, null, void 0, Op, pp.forcedExtension)
      }), pp, ip);
      if (pp.boundingBoxPosition && (Op.boundingBoxPosition = Sp.o.FromArray(pp.boundingBoxPosition)), pp.boundingBoxSize && (Op.boundingBoxSize = Sp.o.FromArray(pp.boundingBoxSize)), pp.animations)
        for (let op = 0; op < pp.animations.length; op++) {
          const ip = pp.animations[op],
            cp = (0, Yp.d)("BABYLON.Animation");
          cp && Op.animations.push(cp.Parse(ip))
        }
      return Op
    }
    dp || (dp = !0, Hp.CreateFromImages = ep, Hp.CreateFromPrefilteredData = jp, Hp.Parse = kp, Lp.d._CubeTextureParser = kp, (0, Yp.g)("BABYLON.CubeTexture", Hp))
  },
  41393: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Yp
    });
    var Op = cp(38905),
      op = cp(40654),
      Ip = cp(40143),
      Sp = cp(40050),
      xp = cp(40033);
    let Lp = !1;
    class Yp extends op.d {
      constructor(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Yp = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Dp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          Ap = arguments.length > 6 ? arguments[6] : void 0;
        const Pp = !cp || cp._isScene;
        super(null, Pp ? cp : cp?.pw, Pp ? !Op : cp, Ap, Yp, void 0, void 0, void 0, void 0, Dp), Lp || (Lp = !0, Sp.ThinEngine.prototype.createDynamicTexture = function(pp, ip, cp, Op) {
          const op = new xp.b(this, 4);
          return op.baseWidth = pp, op.baseHeight = ip, cp && (pp = this.needPOTTextures ? (0, Ip.e)(pp, this._caps.maxTextureSize) : pp, ip = this.needPOTTextures ? (0, Ip.e)(ip, this._caps.maxTextureSize) : ip), op.width = pp, op.height = ip, op.isReady = !1, op.generateMipMaps = cp, op.samplingMode = Op, this.updateTextureSamplingMode(Op, op), this._internalTexturesCache.push(op), op
        }, Sp.ThinEngine.prototype.updateDynamicTexture = function(pp, ip, cp) {
          let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            op = arguments.length > 4 ? arguments[4] : void 0,
            Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!pp) return;
          const Sp = this._gl,
            xp = Sp.TEXTURE_2D,
            Lp = this._bindTextureDirectly(xp, pp, !0, Ip);
          this._unpackFlipY(void 0 === cp ? pp.invertY : cp), Op && Sp.pixelStorei(Sp.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const Yp = this._getWebGLTextureType(pp.type),
            Dp = this._getInternalFormat(op || pp.format),
            Ap = this._getRGBABufferInternalSizedFormat(pp.type, Dp);
          Sp.texImage2D(xp, 0, Ap, Dp, Yp, ip), pp.generateMipMaps && Sp.generateMipmap(xp), Lp || this._bindTextureDirectly(xp, null), Op && Sp.pixelStorei(Sp.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), op && (pp.format = op), pp._dynamicTextureSource = ip, pp._premulAlpha = Op, pp.invertY = cp || !1, pp.isReady = !0
        }), this.name = pp, this.wrapU = op.d.CLAMP_ADDRESSMODE, this.wrapV = op.d.CLAMP_ADDRESSMODE, this._generateMipMaps = Op;
        const Wp = this._getEngine();
        if (!Wp) return;
        if (ip.getContext) this._canvas = ip, this._ownCanvas = !1, this._texture = Wp.createDynamicTexture(this._canvas.width, this._canvas.height, Op, Yp);
        else {
          this._canvas = Wp.createCanvas(1, 1), this._ownCanvas = !0;
          const pp = ip;
          pp.width || 0 === pp.width ? this._texture = Wp.createDynamicTexture(pp.width, pp.height, Op, Yp) : this._texture = Wp.createDynamicTexture(ip, ip, Op, Yp)
        }
        const yp = this.getSize();
        this._canvas.width !== yp.width && (this._canvas.width = yp.width), this._canvas.height !== yp.height && (this._canvas.height = yp.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(pp) {
        this._canvas.width = pp.width, this._canvas.height = pp.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(pp.width, pp.height, this._generateMipMaps, this.samplingMode)
      }
      scale(pp) {
        const ip = this.getSize();
        ip.width *= pp, ip.height *= pp, this._recreate(ip)
      }
      scaleTo(pp, ip) {
        const cp = this.getSize();
        cp.width = pp, cp.height = ip, this._recreate(cp)
      }
      getContext() {
        return this._context
      }
      clear(pp) {
        const ip = this.getSize();
        pp && (this._context.fillStyle = pp), this._context.clearRect(0, 0, ip.width, ip.height)
      }
      update(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === pp || pp, ip, this._format || void 0, void 0, cp)
      }
      drawText(pp, ip, cp, Op, op, Ip, Sp) {
        let xp = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const Lp = this.getSize();
        if (Ip && (this._context.fillStyle = Ip, this._context.fillRect(0, 0, Lp.width, Lp.height)), this._context.font = Op, null === ip || void 0 === ip) {
          const cp = this._context.measureText(pp);
          ip = (Lp.width - cp.width) / 2
        }
        if (null === cp || void 0 === cp) {
          const pp = parseInt(Op.replace(/\D/g, ""));
          cp = Lp.height / 2 + pp / 3.65
        }
        this._context.fillStyle = op || "", this._context.fillText(pp, ip, cp), xp && this.update(Sp)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const pp = this.Gl();
        if (!pp) return this;
        const ip = this.getSize(),
          cp = new Yp(this.name, ip, pp, this._generateMipMaps);
        return cp.hasAlpha = this.hasAlpha, cp.level = this.level, cp.wrapU = this.wrapU, cp.wrapV = this.wrapV, cp
      }
      serialize() {
        const pp = this.Gl();
        pp && !pp.isReady() && Op.e.Warn("The scene must be ready before serializing the dynamic texture");
        const ip = super.serialize();
        return Yp._IsCanvasElement(this._canvas) && (ip.base64String = this._canvas.toDataURL()), ip.invertY = this._invertY, ip.samplingMode = this.samplingMode, ip
      }
      static _IsCanvasElement(pp) {
        return void 0 !== pp.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  41367: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => op
    });
    var Op = cp(40654);
    class op extends Op.d {
      get depth() {
        return this._depth
      }
      constructor(pp, ip, cp, op, Ip, Sp) {
        let xp = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Lp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          Yp = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Op.d.TRILINEAR_SAMPLINGMODE,
          Dp = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Ap = arguments.length > 10 ? arguments[10] : void 0,
          Pp = arguments.length > 11 ? arguments[11] : void 0;
        super(null, Sp, !xp, Lp), this.format = Ip, this._texture = Sp.gy().createRawTexture2DArray(pp, ip, cp, op, Ip, xp, Lp, Yp, null, Dp, Ap ?? 0, Pp), this._depth = op, this.is2DArray = !0
      }
      update(pp) {
        this.updateMipLevel(pp, 0)
      }
      updateMipLevel(pp, ip) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, pp, this._texture.format, this._texture.invertY, null, this._texture.type, ip)
      }
      static CreateRGBATexture(pp, ip, cp, Op, Ip) {
        return new op(pp, ip, cp, Op, 5, Ip, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  41359: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op.b
    });
    var Op = cp(40538);
    (0, Op.e)()
  },
  40289: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op.f
    });
    var Op = cp(40296);
    (0, Op.c)()
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);