export const id = 235;
export const ids = [235, 241];
export const modules = {
  42093: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt
    });
    var Ot = Vt(42031),
      qt = Vt(40202);
    let Dt = !1;

    function mt() {
      Dt || (Dt = !0, qt.b.prototype._sphericalPolynomialTargetSize = 0, qt.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(qt.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Ot.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((tt => {
              this._texture._sphericalPolynomial = tt, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(tt) {
          this._texture && (this._texture._sphericalPolynomial = tt)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  37510: (tt, et, Vt) => {
    Vt.d(et, {
      Color3: () => Ot.b,
      e: () => Ot.c
    });
    var Ot = Vt(37513);
    (0, Ot.e)()
  },
  38009: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt
    });
    var Ot = Vt(38016);
    class qt {
      static GetPlanes(tt) {
        const et = [];
        for (let Vt = 0; Vt < 6; Vt++) et.push(new Ot.b(0, 0, 0, 0));
        return qt.GetPlanesToRef(tt, et), et
      }
      static GetNearPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] + Vt[2], et.normal.y = Vt[7] + Vt[6], et.normal.z = Vt[11] + Vt[10], et.d = Vt[15] + Vt[14], et.normalize()
      }
      static GetFarPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] - Vt[2], et.normal.y = Vt[7] - Vt[6], et.normal.z = Vt[11] - Vt[10], et.d = Vt[15] - Vt[14], et.normalize()
      }
      static GetLeftPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] + Vt[0], et.normal.y = Vt[7] + Vt[4], et.normal.z = Vt[11] + Vt[8], et.d = Vt[15] + Vt[12], et.normalize()
      }
      static GetRightPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] - Vt[0], et.normal.y = Vt[7] - Vt[4], et.normal.z = Vt[11] - Vt[8], et.d = Vt[15] - Vt[12], et.normalize()
      }
      static GetTopPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] - Vt[1], et.normal.y = Vt[7] - Vt[5], et.normal.z = Vt[11] - Vt[9], et.d = Vt[15] - Vt[13], et.normalize()
      }
      static GetBottomPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] + Vt[1], et.normal.y = Vt[7] + Vt[5], et.normal.z = Vt[11] + Vt[9], et.d = Vt[15] + Vt[13], et.normalize()
      }
      static GetPlanesToRef(tt, et) {
        qt.GetNearPlaneToRef(tt, et[0]), qt.GetFarPlaneToRef(tt, et[1]), qt.GetLeftPlaneToRef(tt, et[2]), qt.GetRightPlaneToRef(tt, et[3]), qt.GetTopPlaneToRef(tt, et[4]), qt.GetBottomPlaneToRef(tt, et[5])
      }
      static IsPointInFrustum(tt, et) {
        for (let Vt = 0; Vt < 6; Vt++)
          if (et[Vt].dotCoordinate(tt) < 0) return !1;
        return !0
      }
    }
  },
  38016: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => qt
    });
    var Ot = Vt(37336);
    class qt {
      constructor(tt, et, Vt, qt) {
        this.normal = new Ot.n(tt, et, Vt), this.d = qt
      }
      GOt() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new qt(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let tt = this.normal.getHashCode();
        return tt = 397 * tt ^ this.d, tt
      }
      normalize() {
        const tt = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let et = 0;
        return 0 !== tt && (et = 1 / tt), this.normal.x *= et, this.normal.y *= et, this.normal.z *= et, this.d *= et, this
      }
      transform(tt) {
        const et = qt._TmpMatrix;
        tt.invertToRef(et);
        const Vt = et.m,
          Ot = this.normal.x,
          Dt = this.normal.y,
          mt = this.normal.z,
          dt = this.d,
          jt = Ot * Vt[0] + Dt * Vt[1] + mt * Vt[2] + dt * Vt[3],
          Ht = Ot * Vt[4] + Dt * Vt[5] + mt * Vt[6] + dt * Vt[7],
          Xt = Ot * Vt[8] + Dt * Vt[9] + mt * Vt[10] + dt * Vt[11],
          Qt = Ot * Vt[12] + Dt * Vt[13] + mt * Vt[14] + dt * Vt[15];
        return new qt(jt, Ht, Xt, Qt)
      }
      dotCoordinate(tt) {
        return this.normal.x * tt.x + this.normal.y * tt.y + this.normal.z * tt.z + this.d
      }
      copyFromPoints(tt, et, Vt) {
        const Ot = et.x - tt.x,
          qt = et.y - tt.y,
          Dt = et.z - tt.z,
          mt = Vt.x - tt.x,
          dt = Vt.y - tt.y,
          jt = Vt.z - tt.z,
          Ht = qt * jt - Dt * dt,
          Xt = Dt * mt - Ot * jt,
          Qt = Ot * dt - qt * mt,
          lt = Math.sqrt(Ht * Ht + Xt * Xt + Qt * Qt);
        let Et;
        return Et = 0 !== lt ? 1 / lt : 0, this.normal.x = Ht * Et, this.normal.y = Xt * Et, this.normal.z = Qt * Et, this.d = -(this.normal.x * tt.x + this.normal.y * tt.y + this.normal.z * tt.z), this
      }
      isFrontFacingTo(tt, et) {
        return Ot.n.Dot(this.normal, tt) <= et
      }
      signedDistanceTo(tt) {
        return Ot.n.Dot(tt, this.normal) + this.d
      }
      static FromArray(tt) {
        return new qt(tt[0], tt[1], tt[2], tt[3])
      }
      static FromPoints(tt, et, Vt) {
        const Ot = new qt(0, 0, 0, 0);
        return Ot.copyFromPoints(tt, et, Vt), Ot
      }
      static FromPositionAndNormal(tt, et) {
        const Vt = new qt(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(tt, et, Vt)
      }
      static FromPositionAndNormalToRef(tt, et, Vt) {
        return Vt.normal.rK(et), Vt.normal.normalize(), Vt.d = -tt.dot(Vt.normal), Vt
      }
      static SignedDistanceToPlaneFromPositionAndNormal(tt, et, Vt) {
        const qt = -(et.x * tt.x + et.y * tt.y + et.z * tt.z);
        return Ot.n.Dot(Vt, et) + qt
      }
    }
    qt._TmpMatrix = Ot.c.Identity()
  },
  37331: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      Matrix: () => Ot.c,
      Quaternion: () => Ot.e,
      RegisterMathVector: () => Ot.h,
      TmpVectors: () => Ot.k,
      Vector2: () => Ot.m,
      uf: () => Ot.n,
      Vector4: () => Ot.r
    });
    var Ot = Vt(37336);
    (0, Ot.h)()
  },
  38340: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot
    });
    class Ot {
      constructor(tt, et, Vt, Ot) {
        this.x = tt, this.y = et, this.width = Vt, this.height = Ot
      }
      toGlobal(tt, et) {
        return new Ot(this.x * tt, this.y * et, this.width * tt, this.height * et)
      }
      toGlobalToRef(tt, et, Vt) {
        return Vt.x = this.x * tt, Vt.y = this.y * et, Vt.width = this.width * tt, Vt.height = this.height * et, this
      }
      clone() {
        return new Ot(this.x, this.y, this.width, this.height)
      }
    }
  },
  42031: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ht
    });
    var Ot = Vt(37336),
      qt = Vt(37372),
      Dt = Vt(40194),
      mt = Vt(37342),
      dt = Vt(37513);
    class jt {
      constructor(tt, et, Vt, Ot) {
        this.name = tt, this.worldAxisForNormal = et, this.worldAxisForFileX = Vt, this.worldAxisForFileY = Ot
      }
    }
    class Ht {
      static _NearestPow2Floor(tt) {
        return tt <= 1 ? 1 : 1 << Math.floor(Math.log2(tt))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(tt) {
        if (!tt.isCube) return null;
        tt.vI()?.Jf().flushFramebuffer();
        const et = tt.getSize().width,
          Vt = tt._sphericalPolynomialTargetSize,
          Ot = Vt > 0 ? this._NearestPow2Floor(Vt) : 0,
          qt = !tt.noMipmap && !0 === tt._texture?.generateMipMaps,
          Dt = Ot > 0 && Ot < et && qt,
          mt = Dt ? Math.max(0, Math.round(Math.log2(et / Ot))) : 0,
          dt = Dt ? Math.max(1, Math.floor(et / Math.pow(2, mt))) : et,
          jt = tt.readPixels(0, mt, void 0, !1),
          Ht = tt.readPixels(1, mt, void 0, !1);
        let Xt, Qt;
        tt.isRenderTarget ? (Xt = tt.readPixels(3, mt, void 0, !1), Qt = tt.readPixels(2, mt, void 0, !1)) : (Xt = tt.readPixels(2, mt, void 0, !1), Qt = tt.readPixels(3, mt, void 0, !1));
        const lt = tt.readPixels(4, mt, void 0, !1),
          Et = tt.readPixels(5, mt, void 0, !1),
          ft = tt.gammaSpace,
          wt = Ot > 0 && Ot < et && !Dt;
        return new Promise((tt => {
          Promise.all([Ht, jt, Xt, Qt, lt, Et]).then((Vt => {
            let [qt, Dt, mt, jt, Ht, Xt] = Vt, Qt = dt;
            if (wt) {
              const tt = 4;
              qt = this._DownsampleFace(qt, et, Ot, tt), Dt = this._DownsampleFace(Dt, et, Ot, tt), mt = this._DownsampleFace(mt, et, Ot, tt), jt = this._DownsampleFace(jt, et, Ot, tt), Ht = this._DownsampleFace(Ht, et, Ot, tt), Xt = this._DownsampleFace(Xt, et, Ot, tt), Qt = Ot
            }
            const lt = {
              size: Qt,
              right: Dt,
              left: qt,
              up: mt,
              down: jt,
              front: Ht,
              back: Xt,
              format: 5,
              type: qt instanceof Float32Array ? 1 : 0,
              gammaSpace: ft
            };
            tt(this.ConvertCubeMapToSphericalPolynomial(lt))
          }))
        }))
      }
      static _AreaElement(tt, et) {
        return Math.atan2(tt * et, Math.sqrt(tt * tt + et * et + 1))
      }
      static _DownsampleFace(tt, et, Vt, Ot) {
        const qt = tt instanceof Float32Array ? tt : Float32Array.from(tt),
          Dt = Vt * Vt * Ot,
          mt = new Float32Array(Dt),
          dt = et / Vt,
          jt = 1 / (dt * dt);
        for (let Xt = 0; Xt < Vt; Xt++) {
          const tt = Math.floor(Xt * dt),
            Dt = Math.floor((Xt + 1) * dt);
          for (let Ht = 0; Ht < Vt; Ht++) {
            const Qt = Math.floor(Ht * dt),
              lt = Math.floor((Ht + 1) * dt),
              Et = (Xt * Vt + Ht) * Ot;
            for (let Vt = 0; Vt < Ot; Vt++) {
              let dt = 0;
              for (let mt = tt; mt < Dt; mt++)
                for (let tt = Qt; tt < lt; tt++) dt += qt[(mt * et + tt) * Ot + Vt];
              mt[Et + Vt] = dt * jt
            }
          }
        }
        if (tt instanceof Float32Array) return mt;
        const Ht = new(0, tt.constructor)(Dt);
        for (let Xt = 0; Xt < Dt; Xt++) Ht[Xt] = mt[Xt] + .5 | 0;
        return Ht
      }
      static ConvertCubeMapToSphericalPolynomial(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Vt = et > 0 ? this._NearestPow2Floor(et) : 0;
        if (Vt > 0 && tt.size > Vt) {
          const et = 5 === tt.format ? 4 : 3,
            Ot = ["right", "left", "up", "down", "front", "back"],
            qt = {};
          for (const Dt of Ot) qt[Dt] = this._DownsampleFace(tt[Dt], tt.size, Vt, et);
          tt = {
            ...tt,
            ...qt,
            size: Vt
          }
        }
        const Ot = new Dt.e;
        let jt = 0;
        const Ht = 2 / tt.size,
          Xt = Ht,
          Qt = .5 * Ht,
          lt = Qt - 1;
        for (let Dt = 0; Dt < 6; Dt++) {
          const et = this._FileFaces[Dt],
            Vt = tt[et.name];
          let Et = lt;
          const ft = 5 === tt.format ? 4 : 3;
          for (let Dt = 0; Dt < tt.size; Dt++) {
            let wt = lt;
            for (let Xt = 0; Xt < tt.size; Xt++) {
              const lt = et.worldAxisForFileX.scale(wt).add(et.worldAxisForFileY.scale(Et)).add(et.worldAxisForNormal);
              lt.normalize();
              const yt = this._AreaElement(wt - Qt, Et - Qt) - this._AreaElement(wt - Qt, Et + Qt) - this._AreaElement(wt + Qt, Et - Qt) + this._AreaElement(wt + Qt, Et + Qt);
              let Nt = Vt[Dt * tt.size * ft + Xt * ft + 0],
                Mt = Vt[Dt * tt.size * ft + Xt * ft + 1],
                bt = Vt[Dt * tt.size * ft + Xt * ft + 2];
              isNaN(Nt) && (Nt = 0), isNaN(Mt) && (Mt = 0), isNaN(bt) && (bt = 0), 0 === tt.type && (Nt /= 255, Mt /= 255, bt /= 255), tt.gammaSpace && (Nt = Math.pow((0, qt.Clamp)(Nt), mt.i), Mt = Math.pow((0, qt.Clamp)(Mt), mt.i), bt = Math.pow((0, qt.Clamp)(bt), mt.i));
              const Jt = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const tt = Math.max(Nt, Mt, bt);
                if (tt > Jt) {
                  const et = Jt / tt;
                  Nt *= et, Mt *= et, bt *= et
                }
              } else Nt = (0, qt.Clamp)(Nt, 0, Jt), Mt = (0, qt.Clamp)(Mt, 0, Jt), bt = (0, qt.Clamp)(bt, 0, Jt);
              const Ct = new dt.b(Nt, Mt, bt);
              Ot.addLight(lt, Ct, yt), jt += yt, wt += Ht
            }
            Et += Xt
          }
        }
        const Et = 6 * (4 * Math.PI) / 6 / jt;
        return Ot.scaleInPlace(Et), Ot.convertIncidentRadianceToIrradiance(), Ot.convertIrradianceToLambertianRadiance(), Dt.g.FromHarmonics(Ot)
      }
    }
    Ht._FileFaces = [new jt("right", new Ot.n(1, 0, 0), new Ot.n(0, 0, -1), new Ot.n(0, -1, 0)), new jt("left", new Ot.n(-1, 0, 0), new Ot.n(0, 0, 1), new Ot.n(0, -1, 0)), new jt("up", new Ot.n(0, 1, 0), new Ot.n(1, 0, 0), new Ot.n(0, 0, 1)), new jt("down", new Ot.n(0, -1, 0), new Ot.n(1, 0, 0), new Ot.n(0, 0, -1)), new jt("front", new Ot.n(0, 0, 1), new Ot.n(1, 0, 0), new Ot.n(0, -1, 0)), new jt("back", new Ot.n(0, 0, -1), new Ot.n(-1, 0, 0), new Ot.n(0, -1, 0))], Ht.MAX_HDRI_VALUE = 4096, Ht.PRESERVE_CLAMPED_COLORS = !1
  },
  41795: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot.j,
      g: () => Ot.p
    });
    var Ot = Vt(40249);
    (0, Ot.u)()
  },
  38159: (tt, et, Vt) => {
    function Ot() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (tt => {
        const et = 16 * Math.random() | 0;
        return ("x" === tt ? et : 3 & et | 8).toString(16)
      }))
    }
    Vt.d(et, {
      b: () => Ot
    })
  },
  42071: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt
    });
    var Ot = Vt(42062),
      qt = Vt(42074);
    class Dt {
      static ExpandRGBDTexture(tt) {
        const et = tt._texture;
        if (!et || !tt.isRGBD) return;
        const qt = et.Jf(),
          Dt = qt.getCaps(),
          mt = et.isReady;
        let dt = !1;
        Dt.textureHalfFloatRender && Dt.textureHalfFloatLinearFiltering ? (dt = !0, et.type = 2) : Dt.textureFloatRender && Dt.textureFloatLinearFiltering && (dt = !0, et.type = 1), dt && (et.isReady = !1, et._isRGBD = !1, et.invertY = !1);
        const jt = async () => {
          const Dt = qt.isWebGPU,
            mt = Dt ? 1 : 0;
          et.isReady = !1, Dt ? await Vt.e(347).then((() => Vt(61641))) : await Vt.e(329).then((() => Vt(61650)));
          const dt = new Ot.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, qt, !1, void 0, et.type, void 0, null, !1, void 0, mt);
          dt.externalTextureSamplerBinding = !0;
          const jt = qt.createRenderTargetTexture(et.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: et.samplingMode,
            type: et.type,
            format: 5
          });
          dt.onEffectCreatedObservable.addOnce((Vt => {
            Vt.executeWhenCompiled((() => {
              dt.onApply = tt => {
                tt._bindTexture("textureSampler", et), tt.setFloat2("scale", 1, 1)
              }, tt.vI()?.postProcessManager.directRender([dt], jt, !0), qt.restoreDefaultFramebuffer(), qt._releaseTexture(et), dt && dt.dispose(), jt._swapAndDie(et), et.isReady = !0
            }))
          }))
        };
        dt && (mt ? jt() : tt.onLoadObservable.addOnce(jt))
      }
      static async EncodeTextureToRGBD(tt, et) {
        let Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return et.Jf().isWebGPU ? await Vt.e(348).then((() => Vt(61661))) : await Vt.e(330).then((() => Vt(61654))), await (0, qt.e)("rgbdEncode", tt, et, Ot, 1, 5)
      }
    }
  },
  61509: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      AsyncLoop: () => Ot.d,
      RegisterTools: () => Ot.h,
      Tools: () => Ot.l,
      className: () => Ot.o
    });
    var Ot = Vt(40300);
    (0, Ot.h)()
  },
  42108: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt
    });
    class Ot {
      constructor(tt) {
        this._pendingActions = new Array, this._workerInfos = tt.map((tt => ({
          workerPromise: Promise.resolve(tt),
          idle: !0
        })))
      }
      dispose() {
        for (const tt of this._workerInfos) tt.workerPromise.then((tt => {
          tt.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(tt) {
        this._executeOnIdleWorker(tt) || this._pendingActions.push(tt)
      }
      _executeOnIdleWorker(tt) {
        for (const et of this._workerInfos)
          if (et.idle) return this._execute(et, tt), !0;
        return !1
      }
      _execute(tt, et) {
        tt.idle = !1, tt.workerPromise.then((Vt => {
          et(Vt, (() => {
            const et = this._pendingActions.shift();
            et ? this._execute(tt, et) : tt.idle = !0
          }))
        }))
      }
    }
    class qt extends Ot {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qt.DefaultOptions;
        super([]), this._maxWorkers = tt, this._createWorkerAsync = et, this._options = Vt
      }
      push(tt) {
        if (!this._executeOnIdleWorker(tt))
          if (this._workerInfos.length < this._maxWorkers) {
            const et = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(et), this._execute(et, tt)
          } else this._pendingActions.push(tt)
      }
      _execute(tt, et) {
        tt.timeoutId && (clearTimeout(tt.timeoutId), delete tt.timeoutId), super._execute(tt, ((Vt, Ot) => {
          et(Vt, (() => {
            Ot(), tt.idle && (tt.timeoutId = setTimeout((() => {
              tt.workerPromise.then((tt => {
                tt.terminate()
              }));
              const et = this._workerInfos.indexOf(tt); - 1 !== et && this._workerInfos.splice(et, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    qt.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  61543: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      AbstractThreeMfSerializer: () => Td,
      BVHExporter: () => Wm,
      ContentTypeFileName: () => wd,
      DefaultXmlSerializerFormatOptions: () => Am,
      DefaultXmlSerializerNumberOptions: () => Um,
      EXT_lights_area: () => Nq,
      EXT_mesh_gpu_instancing: () => zO,
      EXT_texture_avif: () => Dm,
      EXT_texture_webp: () => em,
      GLTF2Export: () => FO,
      GLTFData: () => Ht,
      GetXmlFieldMeta: () => km,
      GetXmlName: () => Gm,
      IsQualifiedName: () => Sm,
      KHR_draco_mesh_compression: () => sO,
      KHR_interactivity: () => Xq,
      KHR_lights_punctual: () => mq,
      KHR_materials_anisotropy: () => Jq,
      KHR_materials_clearcoat: () => vq,
      KHR_materials_coat: () => Pq,
      KHR_materials_diffuse_roughness: () => kD,
      KHR_materials_diffuse_transmission: () => zq,
      KHR_materials_dispersion: () => Aq,
      KHR_materials_emissive_strength: () => pq,
      KHR_materials_fuzz: () => QD,
      KHR_materials_ior: () => sq,
      KHR_materials_iridescence: () => VD,
      KHR_materials_openpbr: () => rD,
      KHR_materials_sheen: () => mD,
      KHR_materials_specular: () => wD,
      KHR_materials_transmission: () => MD,
      KHR_materials_unlit: () => KD,
      KHR_materials_volume: () => SD,
      KHR_materials_volume_scatter: () => PD,
      KHR_texture_basisu: () => gD,
      KHR_texture_transform: () => YD,
      Known3mfRelationshipTypes: () => yd,
      KnownI3mfContentType: () => Xd,
      Matrix3d: () => ud,
      MatrixFormatter: () => Kd,
      ModelFileName: () => Ed,
      NumberFormatter: () => Bm,
      OBJExport: () => mt,
      Object3dDirName: () => ld,
      OpenXmlContentTypesNamespace: () => jd,
      OpenXmlRelationshipsNamespace: () => Hd,
      RegisterEXT_lights_area: () => Mq,
      RegisterEXT_mesh_gpu_instancing: () => rO,
      RegisterEXT_texture_avif: () => dm,
      RegisterEXT_texture_webp: () => Om,
      RegisterKHR_draco_mesh_compression: () => tq,
      RegisterKHR_interactivity: () => lq,
      RegisterKHR_lights_punctual: () => jq,
      RegisterKHR_materials_anisotropy: () => uq,
      RegisterKHR_materials_clearcoat: () => Sq,
      RegisterKHR_materials_coat: () => Lq,
      RegisterKHR_materials_diffuse_roughness: () => zD,
      RegisterKHR_materials_diffuse_transmission: () => rq,
      RegisterKHR_materials_dispersion: () => Yq,
      RegisterKHR_materials_emissive_strength: () => Tq,
      RegisterKHR_materials_fuzz: () => ED,
      RegisterKHR_materials_ior: () => tD,
      RegisterKHR_materials_iridescence: () => qD,
      RegisterKHR_materials_openpbr: () => AD,
      RegisterKHR_materials_sheen: () => jD,
      RegisterKHR_materials_specular: () => ND,
      RegisterKHR_materials_transmission: () => JD,
      RegisterKHR_materials_unlit: () => vD,
      RegisterKHR_materials_volume: () => RD,
      RegisterKHR_materials_volume_scatter: () => LD,
      RegisterKHR_texture_basisu: () => nD,
      RegisterKHR_texture_transform: () => pD,
      RelationshipDirName: () => Qd,
      RelationshipFileName: () => fd,
      ResolveFormatOptions: () => Ym,
      ResolveNumberOptions: () => im,
      STLExport: () => jm,
      ST_ObjectType: () => dd,
      ST_Unit: () => md,
      StringXmlWriter: () => Vd,
      ThreeDimModelNamespace: () => qd,
      ThreeMf: () => gd,
      ThreeMfBase: () => zd,
      ThreeMfBaseMaterials: () => Gd,
      ThreeMfBuild: () => od,
      ThreeMfComponent: () => kd,
      ThreeMfComponents: () => Fd,
      ThreeMfComponentsBuilder: () => Ad,
      ThreeMfContentType: () => Md,
      ThreeMfContentTypes: () => Nd,
      ThreeMfDocument: () => Cd,
      ThreeMfDocumentBuilder: () => xd,
      ThreeMfItem: () => rd,
      ThreeMfMaterialBuilder: () => Bd,
      ThreeMfMesh: () => Rd,
      ThreeMfMeshBuilder: () => Yd,
      ThreeMfMeta: () => vd,
      ThreeMfMetadataGroup: () => Wd,
      ThreeMfModel: () => hd,
      ThreeMfModelBuilder: () => pd,
      ThreeMfObject: () => cd,
      ThreeMfObjectBuilder: () => Ud,
      ThreeMfRelationship: () => Jd,
      ThreeMfRelationships: () => bd,
      ThreeMfResources: () => Sd,
      ThreeMfSerializer: () => tj,
      ThreeMfSerializerGlobalConfiguration: () => sd,
      ThreeMfTriangle: () => Ld,
      ThreeMfTriangles: () => Zd,
      ThreeMfVertex: () => Pd,
      ThreeMfVertices: () => Id,
      ToQualifiedString: () => rm,
      TokenType: () => td,
      TriangleSetsNamespace: () => Dd,
      USDZExportAsync: () => Km,
      Utf8XmlWriterToBytes: () => Od,
      XmlAttr: () => Lm,
      XmlBuilder: () => ed,
      XmlElem: () => Fm,
      XmlIgnore: () => Zm,
      XmlName: () => Pm,
      XmlNameToParts: () => om,
      XmlSerializer: () => sm,
      _ConvertToGLTFPBRMetallicRoughness: () => vV,
      _SolveMetallic: () => hV,
      __IGLTFExporterExtension: () => dt
    });
    var Ot = Vt(37331),
      qt = Vt(61509),
      Dt = Vt(40474);
    class mt {
      static OBJ(tt, et, Vt, mt) {
        const dt = [];
        let jt = 1,
          Ht = 1;
        et && (Vt || (Vt = "mat"), dt.push("mtllib " + Vt + ".mtl"));
        for (let Xt = 0; Xt < tt.length; Xt++) {
          const Vt = tt[Xt],
            Qt = Vt.name || `mesh${Xt}}`;
          dt.push(`o ${Qt}`);
          let lt = null;
          if (mt) {
            const tt = Vt.computeWorldMatrix(!0);
            lt = new Ot.Matrix, tt.invertToRef(lt), Vt.bakeTransformIntoVertices(tt)
          }
          if (et) {
            const tt = Vt.material;
            tt && dt.push("usemtl " + tt.id)
          }
          const Et = Vt.geometry;
          if (!Et) {
            qt.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const ft = Et.getVerticesData("position"),
            wt = Et.getVerticesData("normal"),
            yt = Et.getVerticesData("uv"),
            Nt = Et.zOt();
          let Mt = 0,
            bt = 0;
          if (!ft || !Nt) {
            qt.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const Jt = tt[0].vI().useRightHandedSystem ? 1 : -1;
          for (let tt = 0; tt < ft.length; tt += 3) dt.push("v " + ft[tt] * Jt + " " + ft[tt + 1] + " " + ft[tt + 2]), Mt++;
          if (null != wt)
            for (let tt = 0; tt < wt.length; tt += 3) dt.push("vn " + wt[tt] * Jt + " " + wt[tt + 1] + " " + wt[tt + 2]);
          if (null != yt)
            for (let tt = 0; tt < yt.length; tt += 2) dt.push("vt " + yt[tt] + " " + yt[tt + 1]), bt++;
          const Ct = ["", "", ""],
            ut = (Vt.material || Vt.vI().defaultMaterial)._getEffectiveOrientation(Vt),
            [Kt, ht] = ut === Dt.c.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let tt = 0; tt < Nt.length; tt += 3) {
            const et = [String(Nt[tt] + jt), String(Nt[tt + Kt] + jt), String(Nt[tt + ht] + jt)],
              Vt = [String(Nt[tt] + Ht), String(Nt[tt + Kt] + Ht), String(Nt[tt + ht] + Ht)],
              Ot = et,
              qt = null != yt ? Vt : Ct,
              Dt = null != wt ? et : Ct;
            dt.push("f " + Ot[0] + "/" + qt[0] + "/" + Dt[0] + " " + Ot[1] + "/" + qt[1] + "/" + Dt[1] + " " + Ot[2] + "/" + qt[2] + "/" + Dt[2])
          }
          mt && lt && Vt.bakeTransformIntoVertices(lt), jt += Mt, Ht += bt
        }
        return dt.join("\n")
      }
      static MTL(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const Vt = [],
          Ot = tt.material;
        Vt.push("newmtl " + et), Vt.push("  Ns " + Ot.specularPower.toFixed(4)), Vt.push("  Ni 1.5000"), Vt.push("  d " + Ot.alpha.toFixed(4)), Vt.push("  Tr 0.0000"), Vt.push("  Tf 1.0000 1.0000 1.0000"), Vt.push("  illum 2"), Vt.push("  Ka " + Ot.ambientColor.r.toFixed(4) + " " + Ot.ambientColor.g.toFixed(4) + " " + Ot.ambientColor.b.toFixed(4)), Vt.push("  Kd " + Ot.diffuseColor.r.toFixed(4) + " " + Ot.diffuseColor.g.toFixed(4) + " " + Ot.diffuseColor.b.toFixed(4)), Vt.push("  Ks " + Ot.specularColor.r.toFixed(4) + " " + Ot.specularColor.g.toFixed(4) + " " + Ot.specularColor.b.toFixed(4)), Vt.push("  Ke " + Ot.emissiveColor.r.toFixed(4) + " " + Ot.emissiveColor.g.toFixed(4) + " " + Ot.emissiveColor.b.toFixed(4));
        Ot.ambientTexture && Vt.push("  map_Ka " + Ot.ambientTexture.name), Ot.diffuseTexture && Vt.push("  map_Kd " + Ot.diffuseTexture.name), Ot.specularTexture && Vt.push("  map_Ks " + Ot.specularTexture.name), Ot.bumpTexture && Vt.push("  map_bump -imfchan z " + Ot.bumpTexture.name), Ot.opacityTexture && Vt.push("  map_d " + Ot.opacityTexture.name);
        return Vt.join("\n")
      }
    }
    var dt = 0,
      jt = Vt(41795);
    class Ht {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const tt in this.files) {
          const et = this.files[tt],
            Vt = new Blob([et], {
              type: (0, jt.d)(tt)
            });
          qt.Tools.Download(Vt, tt)
        }
      }
    }
    var Xt = Vt(41374),
      Qt = Vt(41312),
      lt = Vt(41873),
      Et = Vt(41316),
      ft = Vt(40023),
      wt = Vt(37359),
      yt = Vt(37510),
      Nt = Vt(37372);
    const Mt = Nt.HighestCommonFactor,
      bt = {
        ...Nt,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: Mt
      };
    var Jt = Vt(42074),
      Ct = Vt(41348),
      ut = Vt(41840),
      Kt = Vt(41842),
      ht = Vt(42085);
    (0, ht.RegisterDumpTools)();
    var vt = Vt(40211),
      Wt = Vt(40213),
      St = Vt(38899),
      ct = Vt(40311),
      Rt = Vt(40661),
      It = Vt(42071);
    let Pt = 0;
    const Zt = (tt, et, Vt, Ot) => {
        if (!tt[Vt]) {
          const qt = tt.useDelayedTextureLoading;
          tt.useDelayedTextureLoading = !1;
          const Dt = tt._blockEntityCollection;
          tt._blockEntityCollection = !1;
          const mt = Rt.f.CreateFromBase64String(et, Ot + Pt++, tt, !0, !1, Rt.f.BILINEAR_SAMPLINGMODE);
          tt._blockEntityCollection = Dt;
          const dt = tt.Jf().getLoadedTexturesCache(),
            jt = dt.indexOf(mt.getInternalTexture()); - 1 !== jt && dt.splice(jt, 1), mt.isRGBD = !0, mt.wrapU = Rt.f.CLAMP_ADDRESSMODE, mt.wrapV = Rt.f.CLAMP_ADDRESSMODE, tt[Vt] = mt, tt.useDelayedTextureLoading = qt, It.c.ExpandRGBDTexture(mt);
          const Ht = tt.Jf().bf.add((() => {
            mt.isRGBD = !0;
            const et = tt.onBeforeRenderObservable.add((() => {
              mt.isReady() && (tt.onBeforeRenderObservable.remove(et), It.c.ExpandRGBDTexture(mt))
            }))
          }));
          tt.ZI.add((() => {
            tt.Jf().bf.remove(Ht)
          }))
        }
        return tt[Vt]
      },
      Lt = tt => Zt(tt, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      Ft = tt => Zt(tt, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      kt = tt => Zt(tt, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var Gt = Vt(40296),
      zt = Vt(37336),
      ot = Vt(40343),
      rt = Vt(40466),
      Ut = Vt(40551);
    class At extends rt.e {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let it = (() => {
      var tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht;
      let Xt, Qt, lt, Et, ft, wt, yt, Nt, Mt, bt = Ut.e,
        Jt = [],
        Ct = [],
        ut = [],
        Kt = [],
        ht = [],
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
        rt = [];
      return tt = class extends bt {
        get useEnergyConservation() {
          return (0, vt.e)(this, et, "f")
        }
        set useEnergyConservation(tt) {
          (0, vt.i)(this, et, tt, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, vt.e)(this, Vt, "f")
        }
        set useSmithVisibilityHeightCorrelated(tt) {
          (0, vt.i)(this, Vt, tt, "f")
        }
        get useSphericalHarmonics() {
          return (0, vt.e)(this, Ot, "f")
        }
        set useSphericalHarmonics(tt) {
          (0, vt.i)(this, Ot, tt, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, vt.e)(this, qt, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(tt) {
          (0, vt.i)(this, qt, tt, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, vt.e)(this, Dt, "f")
        }
        set mixIblRadianceWithIrradiance(tt) {
          (0, vt.i)(this, Dt, tt, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, vt.e)(this, mt, "f")
        }
        set useLegacySpecularEnergyConservation(tt) {
          (0, vt.i)(this, mt, tt, "f")
        }
        get baseDiffuseModel() {
          return (0, vt.e)(this, dt, "f")
        }
        set baseDiffuseModel(tt) {
          (0, vt.i)(this, dt, tt, "f")
        }
        get dielectricSpecularModel() {
          return (0, vt.e)(this, jt, "f")
        }
        set dielectricSpecularModel(tt) {
          (0, vt.i)(this, jt, tt, "f")
        }
        get conductorSpecularModel() {
          return (0, vt.e)(this, Ht, "f")
        }
        set conductorSpecularModel(tt) {
          (0, vt.i)(this, Ht, tt, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Xt) {
          let Qt = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Xt, "PBRBRDF", 90, new At, Qt), this._useEnergyConservation = tt.DEFAULT_USE_ENERGY_CONSERVATION, et.set(this, (0, vt.m)(this, Jt, tt.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, vt.m)(this, Ct), tt.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), Vt.set(this, (0, vt.m)(this, ut, tt.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, vt.m)(this, Kt), tt.DEFAULT_USE_SPHERICAL_HARMONICS), Ot.set(this, (0, vt.m)(this, ht, tt.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, vt.m)(this, St), tt.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), qt.set(this, (0, vt.m)(this, ct, tt.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, vt.m)(this, Rt), tt.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), Dt.set(this, (0, vt.m)(this, It, tt.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, vt.m)(this, Pt), tt.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), mt.set(this, (0, vt.m)(this, Zt, tt.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, vt.m)(this, Lt), tt.DEFAULT_DIFFUSE_MODEL), dt.set(this, (0, vt.m)(this, Ft, tt.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, vt.m)(this, kt), tt.DEFAULT_DIELECTRIC_SPECULAR_MODEL), jt.set(this, (0, vt.m)(this, Gt, tt.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, vt.m)(this, zt), tt.DEFAULT_CONDUCTOR_SPECULAR_MODEL), Ht.set(this, (0, vt.m)(this, ot, tt.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, vt.m)(this, rt), this._internalMarkAllSubMeshesAsMiscDirty = Xt._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(tt) {
          tt.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, tt.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, tt.SPHERICAL_HARMONICS = this._useSphericalHarmonics, tt.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, tt.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, tt.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, tt.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, tt.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, tt.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, et = new WeakMap, Vt = new WeakMap, Ot = new WeakMap, qt = new WeakMap, Dt = new WeakMap, mt = new WeakMap, dt = new WeakMap, jt = new WeakMap, Ht = new WeakMap, (() => {
        const et = "function" === typeof Symbol && Symbol.metadata ? Object.create(bt[Symbol.metadata] ?? null) : void 0;
        Xt = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsMiscDirty")], Qt = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsMiscDirty")], lt = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsMiscDirty")], Et = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsMiscDirty")], ft = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsMiscDirty")], wt = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsMiscDirty")], yt = [(0, Wt.P)("baseDiffuseModel"), (0, Wt.i)("_markAllSubMeshesAsMiscDirty")], Nt = [(0, Wt.P)("dielectricSpecularModel"), (0, Wt.i)("_markAllSubMeshesAsMiscDirty")], Mt = [(0, Wt.P)("conductorSpecularModel"), (0, Wt.i)("_markAllSubMeshesAsMiscDirty")], (0, vt.l)(tt, null, Xt, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: tt => "useEnergyConservation" in tt,
            get: tt => tt.useEnergyConservation,
            set: (tt, et) => {
              tt.useEnergyConservation = et
            }
          },
          metadata: et
        }, Jt, Ct), (0, vt.l)(tt, null, Qt, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: tt => "useSmithVisibilityHeightCorrelated" in tt,
            get: tt => tt.useSmithVisibilityHeightCorrelated,
            set: (tt, et) => {
              tt.useSmithVisibilityHeightCorrelated = et
            }
          },
          metadata: et
        }, ut, Kt), (0, vt.l)(tt, null, lt, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: tt => "useSphericalHarmonics" in tt,
            get: tt => tt.useSphericalHarmonics,
            set: (tt, et) => {
              tt.useSphericalHarmonics = et
            }
          },
          metadata: et
        }, ht, St), (0, vt.l)(tt, null, Et, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: tt => "useSpecularGlossinessInputEnergyConservation" in tt,
            get: tt => tt.useSpecularGlossinessInputEnergyConservation,
            set: (tt, et) => {
              tt.useSpecularGlossinessInputEnergyConservation = et
            }
          },
          metadata: et
        }, ct, Rt), (0, vt.l)(tt, null, ft, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: tt => "mixIblRadianceWithIrradiance" in tt,
            get: tt => tt.mixIblRadianceWithIrradiance,
            set: (tt, et) => {
              tt.mixIblRadianceWithIrradiance = et
            }
          },
          metadata: et
        }, It, Pt), (0, vt.l)(tt, null, wt, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: tt => "useLegacySpecularEnergyConservation" in tt,
            get: tt => tt.useLegacySpecularEnergyConservation,
            set: (tt, et) => {
              tt.useLegacySpecularEnergyConservation = et
            }
          },
          metadata: et
        }, Zt, Lt), (0, vt.l)(tt, null, yt, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: tt => "baseDiffuseModel" in tt,
            get: tt => tt.baseDiffuseModel,
            set: (tt, et) => {
              tt.baseDiffuseModel = et
            }
          },
          metadata: et
        }, Ft, kt), (0, vt.l)(tt, null, Nt, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: tt => "dielectricSpecularModel" in tt,
            get: tt => tt.dielectricSpecularModel,
            set: (tt, et) => {
              tt.dielectricSpecularModel = et
            }
          },
          metadata: et
        }, Gt, zt), (0, vt.l)(tt, null, Mt, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: tt => "conductorSpecularModel" in tt,
            get: tt => tt.conductorSpecularModel,
            set: (tt, et) => {
              tt.conductorSpecularModel = et
            }
          },
          metadata: et
        }, ot, rt), et && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: et
        })
      })(), tt.DEFAULT_USE_ENERGY_CONSERVATION = !0, tt.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, tt.DEFAULT_USE_SPHERICAL_HARMONICS = !0, tt.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, tt.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, tt.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, tt.DEFAULT_DIFFUSE_MODEL = 0, tt.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, tt.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, tt
    })();
    var Yt = Vt(40461),
      Bt = Vt(37513),
      pt = Vt(40463),
      xt = Vt(40313),
      Tt = Vt(40531),
      gt = Vt(40525),
      st = Vt(40540),
      nt = Vt(40514);
    class te extends rt.e {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let ee = (() => {
      var tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht;
      let Xt, Qt, lt, Et, ft, wt, yt, Nt, Mt, bt, Jt, Ct, ut, Kt, ht = Ut.e,
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
        At = [],
        it = [],
        Yt = [],
        pt = [],
        xt = [],
        Tt = [],
        st = [],
        ee = [],
        Ve = [],
        Oe = [],
        qe = [],
        De = [],
        me = [],
        de = [],
        je = [];
      return tt = class extends ht {
        get isEnabled() {
          return (0, vt.e)(this, et, "f")
        }
        set isEnabled(tt) {
          (0, vt.i)(this, et, tt, "f")
        }
        get indexOfRefraction() {
          return (0, vt.e)(this, Vt, "f")
        }
        set indexOfRefraction(tt) {
          (0, vt.i)(this, Vt, tt, "f")
        }
        get texture() {
          return (0, vt.e)(this, Ot, "f")
        }
        set texture(tt) {
          (0, vt.i)(this, Ot, tt, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, vt.e)(this, qt, "f")
        }
        set useRoughnessFromMainTexture(tt) {
          (0, vt.i)(this, qt, tt, "f")
        }
        get textureRoughness() {
          return (0, vt.e)(this, Dt, "f")
        }
        set textureRoughness(tt) {
          (0, vt.i)(this, Dt, tt, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, vt.e)(this, mt, "f")
        }
        set remapF0OnInterfaceChange(tt) {
          (0, vt.i)(this, mt, tt, "f")
        }
        get bumpTexture() {
          return (0, vt.e)(this, dt, "f")
        }
        set bumpTexture(tt) {
          (0, vt.i)(this, dt, tt, "f")
        }
        get isTintEnabled() {
          return (0, vt.e)(this, jt, "f")
        }
        set isTintEnabled(tt) {
          (0, vt.i)(this, jt, tt, "f")
        }
        get tintTexture() {
          return (0, vt.e)(this, Ht, "f")
        }
        set tintTexture(tt) {
          (0, vt.i)(this, Ht, tt, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Xt) {
          let Qt = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Xt, "PBRClearCoat", 100, new te, Qt), this._isEnabled = !1, et.set(this, (0, vt.m)(this, St, !1)), this.intensity = ((0, vt.m)(this, ct), (0, vt.m)(this, Rt, 1)), this.roughness = ((0, vt.m)(this, It), (0, vt.m)(this, Pt, 0)), this._indexOfRefraction = ((0, vt.m)(this, Zt), tt._DefaultIndexOfRefraction), Vt.set(this, (0, vt.m)(this, Lt, tt._DefaultIndexOfRefraction)), this._texture = ((0, vt.m)(this, Ft), null), Ot.set(this, (0, vt.m)(this, kt, null)), this._useRoughnessFromMainTexture = ((0, vt.m)(this, Gt), !0), qt.set(this, (0, vt.m)(this, zt, !0)), this._textureRoughness = ((0, vt.m)(this, ot), null), Dt.set(this, (0, vt.m)(this, rt, null)), this._remapF0OnInterfaceChange = ((0, vt.m)(this, At), !0), mt.set(this, (0, vt.m)(this, it, !0)), this._bumpTexture = ((0, vt.m)(this, Yt), null), dt.set(this, (0, vt.m)(this, pt, null)), this._isTintEnabled = ((0, vt.m)(this, xt), !1), jt.set(this, (0, vt.m)(this, Tt, !1)), this.tintColor = ((0, vt.m)(this, st), (0, vt.m)(this, ee, Bt.b.White())), this.tintColorAtDistance = ((0, vt.m)(this, Ve), (0, vt.m)(this, Oe, 1)), this.tintThickness = ((0, vt.m)(this, qe), (0, vt.m)(this, De, 1)), this._tintTexture = ((0, vt.m)(this, me), null), Ht.set(this, (0, vt.m)(this, de, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, vt.m)(this, je), this._internalMarkAllSubMeshesAsTexturesDirty = Xt._dirtyCallbacks[1]
        }
        isReadyForSubMesh(tt, et, Vt) {
          if (!this._isEnabled) return !0;
          const Ot = this._material._disableBumpMap;
          if (tt._areTexturesDirty && et.texturesEnabled) {
            if (this._texture && gt.e.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && gt.e.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (Vt.getCaps().standardDerivatives && this._bumpTexture && gt.e.ClearCoatBumpTextureEnabled && !Ot && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && gt.e.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(et, Vt) {
          this._isEnabled ? (et.CLEARCOAT = !0, et.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, et.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, et._areTexturesDirty && Vt.texturesEnabled && (this._texture && gt.e.ClearCoatTextureEnabled ? (0, nt.ab)(this._texture, et, "CLEARCOAT_TEXTURE") : et.CLEARCOAT_TEXTURE = !1, this._textureRoughness && gt.e.ClearCoatTextureEnabled ? (0, nt.ab)(this._textureRoughness, et, "CLEARCOAT_TEXTURE_ROUGHNESS") : et.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && gt.e.ClearCoatBumpTextureEnabled ? (0, nt.ab)(this._bumpTexture, et, "CLEARCOAT_BUMP") : et.CLEARCOAT_BUMP = !1, et.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === tt._DefaultIndexOfRefraction, this._isTintEnabled ? (et.CLEARCOAT_TINT = !0, this._tintTexture && gt.e.ClearCoatTintTextureEnabled ? ((0, nt.ab)(this._tintTexture, et, "CLEARCOAT_TINT_TEXTURE"), et.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : et.CLEARCOAT_TINT_TEXTURE = !1) : (et.CLEARCOAT_TINT = !1, et.CLEARCOAT_TINT_TEXTURE = !1))) : (et.CLEARCOAT = !1, et.CLEARCOAT_TEXTURE = !1, et.CLEARCOAT_TEXTURE_ROUGHNESS = !1, et.CLEARCOAT_BUMP = !1, et.CLEARCOAT_TINT = !1, et.CLEARCOAT_TINT_TEXTURE = !1, et.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, et.CLEARCOAT_DEFAULTIOR = !1, et.CLEARCOAT_TEXTUREDIRECTUV = 0, et.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, et.CLEARCOAT_BUMPDIRECTUV = 0, et.CLEARCOAT_REMAP_F0 = !1, et.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, et.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(tt, et, Vt, Ot) {
          if (!this._isEnabled) return;
          const qt = Ot.materialDefines,
            Dt = this._material.isFrozen,
            mt = this._material._disableBumpMap,
            dt = this._material._invertNormalMapX,
            jt = this._material._invertNormalMapY;
          if (!tt.useUbo || !Dt || !tt.isSync) {
            (this._texture || this._textureRoughness) && gt.e.ClearCoatTextureEnabled && (tt.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, nt.w)(this._texture, tt, "clearCoat"), this._textureRoughness && !qt.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, nt.w)(this._textureRoughness, tt, "clearCoatRoughness")), this._bumpTexture && Vt.getCaps().standardDerivatives && gt.e.ClearCoatTextureEnabled && !mt && (tt.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, nt.w)(this._bumpTexture, tt, "clearCoatBump"), et._mirroredCameraPosition ? tt.updateFloat2("vClearCoatTangentSpaceParams", dt ? 1 : -1, jt ? 1 : -1) : tt.updateFloat2("vClearCoatTangentSpaceParams", dt ? -1 : 1, jt ? -1 : 1)), this._tintTexture && gt.e.ClearCoatTintTextureEnabled && (tt.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, nt.w)(this._tintTexture, tt, "clearCoatTint")), tt.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const Ot = 1 - this._indexOfRefraction,
              Dt = 1 + this._indexOfRefraction,
              Ht = Math.pow(-Ot / Dt, 2),
              Xt = 1 / this._indexOfRefraction;
            tt.updateFloat4("vClearCoatRefractionParams", Ht, Xt, Ot, Dt), this._isTintEnabled && (tt.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), tt.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          et.texturesEnabled && (this._texture && gt.e.ClearCoatTextureEnabled && tt.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !qt.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && gt.e.ClearCoatTextureEnabled && tt.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && Vt.getCaps().standardDerivatives && gt.e.ClearCoatBumpTextureEnabled && !mt && tt.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && gt.e.ClearCoatTintTextureEnabled && tt.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(tt) {
          return this._texture === tt || (this._textureRoughness === tt || (this._bumpTexture === tt || this._tintTexture === tt))
        }
        getActiveTextures(tt) {
          this._texture && tt.push(this._texture), this._textureRoughness && tt.push(this._textureRoughness), this._bumpTexture && tt.push(this._bumpTexture), this._tintTexture && tt.push(this._tintTexture)
        }
        getAnimatables(tt) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && tt.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && tt.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && tt.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && tt.push(this._tintTexture)
        }
        dispose(tt) {
          tt && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(tt, et, Vt) {
          return tt.CLEARCOAT_BUMP && et.addFallback(Vt++, "CLEARCOAT_BUMP"), tt.CLEARCOAT_TINT && et.addFallback(Vt++, "CLEARCOAT_TINT"), tt.CLEARCOAT && et.addFallback(Vt++, "CLEARCOAT"), Vt
        }
        getSamplers(tt) {
          tt.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
        }
        getUniforms() {
          return {
            ubo: [{
              name: "vClearCoatParams",
              size: 2,
              type: "vec2"
            }, {
              name: "vClearCoatRefractionParams",
              size: 4,
              type: "vec4"
            }, {
              name: "vClearCoatInfos",
              size: 4,
              type: "vec4"
            }, {
              name: "clearCoatMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "clearCoatRoughnessMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "vClearCoatBumpInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "vClearCoatTangentSpaceParams",
              size: 2,
              type: "vec2"
            }, {
              name: "clearCoatBumpMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "vClearCoatTintParams",
              size: 4,
              type: "vec4"
            }, {
              name: "clearCoatColorAtDistance",
              size: 1,
              type: "float"
            }, {
              name: "vClearCoatTintInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "clearCoatTintMatrix",
              size: 16,
              type: "mat4"
            }]
          }
        }
      }, et = new WeakMap, Vt = new WeakMap, Ot = new WeakMap, qt = new WeakMap, Dt = new WeakMap, mt = new WeakMap, dt = new WeakMap, jt = new WeakMap, Ht = new WeakMap, (() => {
        const et = "function" === typeof Symbol && Symbol.metadata ? Object.create(ht[Symbol.metadata] ?? null) : void 0;
        Xt = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Qt = [(0, Wt.P)()], lt = [(0, Wt.P)()], Et = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], ft = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], wt = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], yt = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Nt = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Mt = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], bt = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Jt = [(0, Wt.t)()], Ct = [(0, Wt.P)()], ut = [(0, Wt.P)()], Kt = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], (0, vt.l)(tt, null, Xt, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: tt => "isEnabled" in tt,
            get: tt => tt.isEnabled,
            set: (tt, et) => {
              tt.isEnabled = et
            }
          },
          metadata: et
        }, St, ct), (0, vt.l)(tt, null, Et, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: tt => "indexOfRefraction" in tt,
            get: tt => tt.indexOfRefraction,
            set: (tt, et) => {
              tt.indexOfRefraction = et
            }
          },
          metadata: et
        }, Lt, Ft), (0, vt.l)(tt, null, ft, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: tt => "texture" in tt,
            get: tt => tt.texture,
            set: (tt, et) => {
              tt.texture = et
            }
          },
          metadata: et
        }, kt, Gt), (0, vt.l)(tt, null, wt, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "useRoughnessFromMainTexture" in tt,
            get: tt => tt.useRoughnessFromMainTexture,
            set: (tt, et) => {
              tt.useRoughnessFromMainTexture = et
            }
          },
          metadata: et
        }, zt, ot), (0, vt.l)(tt, null, yt, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: tt => "textureRoughness" in tt,
            get: tt => tt.textureRoughness,
            set: (tt, et) => {
              tt.textureRoughness = et
            }
          },
          metadata: et
        }, rt, At), (0, vt.l)(tt, null, Nt, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: tt => "remapF0OnInterfaceChange" in tt,
            get: tt => tt.remapF0OnInterfaceChange,
            set: (tt, et) => {
              tt.remapF0OnInterfaceChange = et
            }
          },
          metadata: et
        }, it, Yt), (0, vt.l)(tt, null, Mt, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "bumpTexture" in tt,
            get: tt => tt.bumpTexture,
            set: (tt, et) => {
              tt.bumpTexture = et
            }
          },
          metadata: et
        }, pt, xt), (0, vt.l)(tt, null, bt, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: tt => "isTintEnabled" in tt,
            get: tt => tt.isTintEnabled,
            set: (tt, et) => {
              tt.isTintEnabled = et
            }
          },
          metadata: et
        }, Tt, st), (0, vt.l)(tt, null, Kt, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "tintTexture" in tt,
            get: tt => tt.tintTexture,
            set: (tt, et) => {
              tt.tintTexture = et
            }
          },
          metadata: et
        }, de, je), (0, vt.l)(null, null, Qt, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: tt => "intensity" in tt,
            get: tt => tt.intensity,
            set: (tt, et) => {
              tt.intensity = et
            }
          },
          metadata: et
        }, Rt, It), (0, vt.l)(null, null, lt, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: tt => "roughness" in tt,
            get: tt => tt.roughness,
            set: (tt, et) => {
              tt.roughness = et
            }
          },
          metadata: et
        }, Pt, Zt), (0, vt.l)(null, null, Jt, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: tt => "tintColor" in tt,
            get: tt => tt.tintColor,
            set: (tt, et) => {
              tt.tintColor = et
            }
          },
          metadata: et
        }, ee, Ve), (0, vt.l)(null, null, Ct, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: tt => "tintColorAtDistance" in tt,
            get: tt => tt.tintColorAtDistance,
            set: (tt, et) => {
              tt.tintColorAtDistance = et
            }
          },
          metadata: et
        }, Oe, qe), (0, vt.l)(null, null, ut, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: tt => "tintThickness" in tt,
            get: tt => tt.tintThickness,
            set: (tt, et) => {
              tt.tintThickness = et
            }
          },
          metadata: et
        }, De, me), et && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: et
        })
      })(), tt._DefaultIndexOfRefraction = 1.5, tt
    })();
    class Ve extends rt.e {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let Oe = (() => {
      var tt, et, Vt, Ot;
      let qt, Dt, mt, dt, jt, Ht, Xt, Qt = Ut.e,
        lt = [],
        Et = [],
        ft = [],
        wt = [],
        yt = [],
        Nt = [],
        Mt = [],
        bt = [],
        Jt = [],
        Ct = [],
        ut = [],
        Kt = [],
        ht = [],
        St = [];
      return tt = class extends Qt {
        get isEnabled() {
          return (0, vt.e)(this, et, "f")
        }
        set isEnabled(tt) {
          (0, vt.i)(this, et, tt, "f")
        }
        get texture() {
          return (0, vt.e)(this, Vt, "f")
        }
        set texture(tt) {
          (0, vt.i)(this, Vt, tt, "f")
        }
        get thicknessTexture() {
          return (0, vt.e)(this, Ot, "f")
        }
        set thicknessTexture(tt) {
          (0, vt.i)(this, Ot, tt, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(qt) {
          let Dt = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(qt, "PBRIridescence", 110, new Ve, Dt), this._isEnabled = !1, et.set(this, (0, vt.m)(this, lt, !1)), this.intensity = ((0, vt.m)(this, Et), (0, vt.m)(this, ft, 1)), this.minimumThickness = ((0, vt.m)(this, wt), (0, vt.m)(this, yt, tt._DefaultMinimumThickness)), this.maximumThickness = ((0, vt.m)(this, Nt), (0, vt.m)(this, Mt, tt._DefaultMaximumThickness)), this.indexOfRefraction = ((0, vt.m)(this, bt), (0, vt.m)(this, Jt, tt._DefaultIndexOfRefraction)), this._texture = ((0, vt.m)(this, Ct), null), Vt.set(this, (0, vt.m)(this, ut, null)), this._thicknessTexture = ((0, vt.m)(this, Kt), null), Ot.set(this, (0, vt.m)(this, ht, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, vt.m)(this, St), this._internalMarkAllSubMeshesAsTexturesDirty = qt._dirtyCallbacks[1]
        }
        isReadyForSubMesh(tt, et) {
          if (!this._isEnabled) return !0;
          if (tt._areTexturesDirty && et.texturesEnabled) {
            if (this._texture && gt.e.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && gt.e.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(tt, et) {
          this._isEnabled ? (tt.IRIDESCENCE = !0, tt._areTexturesDirty && et.texturesEnabled && (this._texture && gt.e.IridescenceTextureEnabled ? (0, nt.ab)(this._texture, tt, "IRIDESCENCE_TEXTURE") : tt.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && gt.e.IridescenceTextureEnabled ? (0, nt.ab)(this._thicknessTexture, tt, "IRIDESCENCE_THICKNESS_TEXTURE") : tt.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (tt.IRIDESCENCE = !1, tt.IRIDESCENCE_TEXTURE = !1, tt.IRIDESCENCE_THICKNESS_TEXTURE = !1, tt.IRIDESCENCE_TEXTUREDIRECTUV = 0, tt.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(tt, et) {
          if (!this._isEnabled) return;
          const Vt = this._material.isFrozen;
          tt.useUbo && Vt && tt.isSync || ((this._texture || this._thicknessTexture) && gt.e.IridescenceTextureEnabled && (tt.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, nt.w)(this._texture, tt, "iridescence"), this._thicknessTexture && (0, nt.w)(this._thicknessTexture, tt, "iridescenceThickness")), tt.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), et.texturesEnabled && (this._texture && gt.e.IridescenceTextureEnabled && tt.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && gt.e.IridescenceTextureEnabled && tt.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(tt) {
          return this._texture === tt || this._thicknessTexture === tt
        }
        getActiveTextures(tt) {
          this._texture && tt.push(this._texture), this._thicknessTexture && tt.push(this._thicknessTexture)
        }
        getAnimatables(tt) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && tt.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && tt.push(this._thicknessTexture)
        }
        dispose(tt) {
          tt && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(tt, et, Vt) {
          return tt.IRIDESCENCE && et.addFallback(Vt++, "IRIDESCENCE"), Vt
        }
        getSamplers(tt) {
          tt.push("iridescenceSampler", "iridescenceThicknessSampler")
        }
        getUniforms() {
          return {
            ubo: [{
              name: "vIridescenceParams",
              size: 4,
              type: "vec4"
            }, {
              name: "vIridescenceInfos",
              size: 4,
              type: "vec4"
            }, {
              name: "iridescenceMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "iridescenceThicknessMatrix",
              size: 16,
              type: "mat4"
            }]
          }
        }
      }, et = new WeakMap, Vt = new WeakMap, Ot = new WeakMap, (() => {
        const et = "function" === typeof Symbol && Symbol.metadata ? Object.create(Qt[Symbol.metadata] ?? null) : void 0;
        qt = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Dt = [(0, Wt.P)()], mt = [(0, Wt.P)()], dt = [(0, Wt.P)()], jt = [(0, Wt.P)()], Ht = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Xt = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], (0, vt.l)(tt, null, qt, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: tt => "isEnabled" in tt,
            get: tt => tt.isEnabled,
            set: (tt, et) => {
              tt.isEnabled = et
            }
          },
          metadata: et
        }, lt, Et), (0, vt.l)(tt, null, Ht, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: tt => "texture" in tt,
            get: tt => tt.texture,
            set: (tt, et) => {
              tt.texture = et
            }
          },
          metadata: et
        }, ut, Kt), (0, vt.l)(tt, null, Xt, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "thicknessTexture" in tt,
            get: tt => tt.thicknessTexture,
            set: (tt, et) => {
              tt.thicknessTexture = et
            }
          },
          metadata: et
        }, ht, St), (0, vt.l)(null, null, Dt, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: tt => "intensity" in tt,
            get: tt => tt.intensity,
            set: (tt, et) => {
              tt.intensity = et
            }
          },
          metadata: et
        }, ft, wt), (0, vt.l)(null, null, mt, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: tt => "minimumThickness" in tt,
            get: tt => tt.minimumThickness,
            set: (tt, et) => {
              tt.minimumThickness = et
            }
          },
          metadata: et
        }, yt, Nt), (0, vt.l)(null, null, dt, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: tt => "maximumThickness" in tt,
            get: tt => tt.maximumThickness,
            set: (tt, et) => {
              tt.maximumThickness = et
            }
          },
          metadata: et
        }, Mt, bt), (0, vt.l)(null, null, jt, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: tt => "indexOfRefraction" in tt,
            get: tt => tt.indexOfRefraction,
            set: (tt, et) => {
              tt.indexOfRefraction = et
            }
          },
          metadata: et
        }, Jt, Ct), et && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: et
        })
      })(), tt._DefaultMinimumThickness = 100, tt._DefaultMaximumThickness = 400, tt._DefaultIndexOfRefraction = 1.3, tt
    })();
    class qe extends rt.e {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let De = (() => {
      var tt, et, Vt, Ot;
      let qt, Dt, mt, dt, jt, Ht = Ut.e,
        Xt = [],
        Qt = [],
        lt = [],
        Et = [],
        ft = [],
        wt = [],
        yt = [],
        Nt = [],
        Mt = [],
        bt = [];
      return tt = class extends Ht {
        get isEnabled() {
          return (0, vt.e)(this, et, "f")
        }
        set isEnabled(tt) {
          (0, vt.i)(this, et, tt, "f")
        }
        set angle(tt) {
          this.direction.x = Math.cos(tt), this.direction.y = Math.sin(tt)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, vt.e)(this, Vt, "f")
        }
        set texture(tt) {
          (0, vt.i)(this, Vt, tt, "f")
        }
        get legacy() {
          return (0, vt.e)(this, Ot, "f")
        }
        set legacy(tt) {
          (0, vt.i)(this, Ot, tt, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        _markAllSubMeshesAsMiscDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(tt) {
          let qt = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(tt, "PBRAnisotropic", 110, new qe, qt), this._isEnabled = !1, et.set(this, (0, vt.m)(this, Xt, !1)), this.intensity = ((0, vt.m)(this, Qt), (0, vt.m)(this, lt, 1)), this.direction = ((0, vt.m)(this, Et), (0, vt.m)(this, ft, new zt.m(1, 0))), this._texture = ((0, vt.m)(this, wt), null), Vt.set(this, (0, vt.m)(this, yt, null)), this._legacy = ((0, vt.m)(this, Nt), !1), Ot.set(this, (0, vt.m)(this, Mt, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, vt.m)(this, bt), this._internalMarkAllSubMeshesAsTexturesDirty = tt._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = tt._dirtyCallbacks[16]
        }
        isReadyForSubMesh(tt, et) {
          return !this._isEnabled || !(tt._areTexturesDirty && et.texturesEnabled && this._texture && gt.e.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(tt, et, Vt) {
          this._isEnabled ? (tt.ANISOTROPIC = this._isEnabled, this._isEnabled && !Vt.isVerticesDataPresent(ot.m.TangentKind) && (tt._needUVs = !0, tt.MAINUV1 = !0), tt._areTexturesDirty && et.texturesEnabled && (this._texture && gt.e.AnisotropicTextureEnabled ? (0, nt.ab)(this._texture, tt, "ANISOTROPIC_TEXTURE") : tt.ANISOTROPIC_TEXTURE = !1), tt._areMiscDirty && (tt.ANISOTROPIC_LEGACY = this._legacy)) : (tt.ANISOTROPIC = !1, tt.ANISOTROPIC_TEXTURE = !1, tt.ANISOTROPIC_TEXTUREDIRECTUV = 0, tt.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(tt, et) {
          if (!this._isEnabled) return;
          const Vt = this._material.isFrozen;
          tt.useUbo && Vt && tt.isSync || (this._texture && gt.e.AnisotropicTextureEnabled && (tt.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, nt.w)(this._texture, tt, "anisotropy")), tt.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), et.texturesEnabled && this._texture && gt.e.AnisotropicTextureEnabled && tt.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(tt) {
          return this._texture === tt
        }
        getActiveTextures(tt) {
          this._texture && tt.push(this._texture)
        }
        getAnimatables(tt) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && tt.push(this._texture)
        }
        dispose(tt) {
          tt && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(tt, et, Vt) {
          return tt.ANISOTROPIC && et.addFallback(Vt++, "ANISOTROPIC"), Vt
        }
        getSamplers(tt) {
          tt.push("anisotropySampler")
        }
        getUniforms() {
          return {
            ubo: [{
              name: "vAnisotropy",
              size: 3,
              type: "vec3"
            }, {
              name: "vAnisotropyInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "anisotropyMatrix",
              size: 16,
              type: "mat4"
            }]
          }
        }
        parse(tt, et, Vt) {
          super.parse(tt, et, Vt), void 0 === tt.legacy && (this.legacy = !0)
        }
      }, et = new WeakMap, Vt = new WeakMap, Ot = new WeakMap, (() => {
        const et = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ht[Symbol.metadata] ?? null) : void 0;
        qt = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Dt = [(0, Wt.P)()], mt = [(0, Wt.I)()], dt = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], jt = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsMiscDirty")], (0, vt.l)(tt, null, qt, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: tt => "isEnabled" in tt,
            get: tt => tt.isEnabled,
            set: (tt, et) => {
              tt.isEnabled = et
            }
          },
          metadata: et
        }, Xt, Qt), (0, vt.l)(tt, null, dt, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: tt => "texture" in tt,
            get: tt => tt.texture,
            set: (tt, et) => {
              tt.texture = et
            }
          },
          metadata: et
        }, yt, Nt), (0, vt.l)(tt, null, jt, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: tt => "legacy" in tt,
            get: tt => tt.legacy,
            set: (tt, et) => {
              tt.legacy = et
            }
          },
          metadata: et
        }, Mt, bt), (0, vt.l)(null, null, Dt, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: tt => "intensity" in tt,
            get: tt => tt.intensity,
            set: (tt, et) => {
              tt.intensity = et
            }
          },
          metadata: et
        }, lt, Et), (0, vt.l)(null, null, mt, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: tt => "direction" in tt,
            get: tt => tt.direction,
            set: (tt, et) => {
              tt.direction = et
            }
          },
          metadata: et
        }, ft, wt), et && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: et
        })
      })(), tt
    })();
    class me extends rt.e {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let de = (() => {
      var tt, et, Vt, Ot, qt, Dt, mt, dt;
      let jt, Ht, Xt, Qt, lt, Et, ft, wt, yt, Nt = Ut.e,
        Mt = [],
        bt = [],
        Jt = [],
        Ct = [],
        ut = [],
        Kt = [],
        ht = [],
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
        zt = [];
      return tt = class extends Nt {
        get isEnabled() {
          return (0, vt.e)(this, et, "f")
        }
        set isEnabled(tt) {
          (0, vt.i)(this, et, tt, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, vt.e)(this, Vt, "f")
        }
        set linkSheenWithAlbedo(tt) {
          (0, vt.i)(this, Vt, tt, "f")
        }
        get texture() {
          return (0, vt.e)(this, Ot, "f")
        }
        set texture(tt) {
          (0, vt.i)(this, Ot, tt, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, vt.e)(this, qt, "f")
        }
        set useRoughnessFromMainTexture(tt) {
          (0, vt.i)(this, qt, tt, "f")
        }
        get roughness() {
          return (0, vt.e)(this, Dt, "f")
        }
        set roughness(tt) {
          (0, vt.i)(this, Dt, tt, "f")
        }
        get textureRoughness() {
          return (0, vt.e)(this, mt, "f")
        }
        set textureRoughness(tt) {
          (0, vt.i)(this, mt, tt, "f")
        }
        get albedoScaling() {
          return (0, vt.e)(this, dt, "f")
        }
        set albedoScaling(tt) {
          (0, vt.i)(this, dt, tt, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(tt) {
          let jt = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(tt, "Sheen", 120, new me, jt), this._isEnabled = !1, et.set(this, (0, vt.m)(this, Mt, !1)), this._linkSheenWithAlbedo = ((0, vt.m)(this, bt), !1), Vt.set(this, (0, vt.m)(this, Jt, !1)), this.intensity = ((0, vt.m)(this, Ct), (0, vt.m)(this, ut, 1)), this.color = ((0, vt.m)(this, Kt), (0, vt.m)(this, ht, Bt.b.White())), this._texture = ((0, vt.m)(this, St), null), Ot.set(this, (0, vt.m)(this, ct, null)), this._useRoughnessFromMainTexture = ((0, vt.m)(this, Rt), !0), qt.set(this, (0, vt.m)(this, It, !0)), this._roughness = ((0, vt.m)(this, Pt), null), Dt.set(this, (0, vt.m)(this, Zt, null)), this._textureRoughness = ((0, vt.m)(this, Lt), null), mt.set(this, (0, vt.m)(this, Ft, null)), this._albedoScaling = ((0, vt.m)(this, kt), !1), dt.set(this, (0, vt.m)(this, Gt, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, vt.m)(this, zt), this._internalMarkAllSubMeshesAsTexturesDirty = tt._dirtyCallbacks[1]
        }
        isReadyForSubMesh(tt, et) {
          if (!this._isEnabled) return !0;
          if (tt._areTexturesDirty && et.texturesEnabled) {
            if (this._texture && gt.e.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && gt.e.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(tt, et) {
          this._isEnabled ? (tt.SHEEN = !0, tt.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, tt.SHEEN_ROUGHNESS = null !== this._roughness, tt.SHEEN_ALBEDOSCALING = this._albedoScaling, tt.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, tt._areTexturesDirty && et.texturesEnabled && (this._texture && gt.e.SheenTextureEnabled ? ((0, nt.ab)(this._texture, tt, "SHEEN_TEXTURE"), tt.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : tt.SHEEN_TEXTURE = !1, this._textureRoughness && gt.e.SheenTextureEnabled ? (0, nt.ab)(this._textureRoughness, tt, "SHEEN_TEXTURE_ROUGHNESS") : tt.SHEEN_TEXTURE_ROUGHNESS = !1)) : (tt.SHEEN = !1, tt.SHEEN_TEXTURE = !1, tt.SHEEN_TEXTURE_ROUGHNESS = !1, tt.SHEEN_LINKWITHALBEDO = !1, tt.SHEEN_ROUGHNESS = !1, tt.SHEEN_ALBEDOSCALING = !1, tt.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, tt.SHEEN_GAMMATEXTURE = !1, tt.SHEEN_TEXTUREDIRECTUV = 0, tt.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(tt, et, Vt, Ot) {
          if (!this._isEnabled) return;
          const qt = Ot.materialDefines,
            Dt = this._material.isFrozen;
          tt.useUbo && Dt && tt.isSync || ((this._texture || this._textureRoughness) && gt.e.SheenTextureEnabled && (tt.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, nt.w)(this._texture, tt, "sheen"), this._textureRoughness && !qt.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, nt.w)(this._textureRoughness, tt, "sheenRoughness")), tt.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && tt.updateFloat("vSheenRoughness", this._roughness)), et.texturesEnabled && (this._texture && gt.e.SheenTextureEnabled && tt.setTexture("sheenSampler", this._texture), this._textureRoughness && !qt.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && gt.e.SheenTextureEnabled && tt.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(tt) {
          return this._texture === tt || this._textureRoughness === tt
        }
        getActiveTextures(tt) {
          this._texture && tt.push(this._texture), this._textureRoughness && tt.push(this._textureRoughness)
        }
        getAnimatables(tt) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && tt.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && tt.push(this._textureRoughness)
        }
        dispose(tt) {
          tt && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(tt, et, Vt) {
          return tt.SHEEN && et.addFallback(Vt++, "SHEEN"), Vt
        }
        getSamplers(tt) {
          tt.push("sheenSampler", "sheenRoughnessSampler")
        }
        getUniforms() {
          return {
            ubo: [{
              name: "vSheenColor",
              size: 4,
              type: "vec4"
            }, {
              name: "vSheenRoughness",
              size: 1,
              type: "float"
            }, {
              name: "vSheenInfos",
              size: 4,
              type: "vec4"
            }, {
              name: "sheenMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "sheenRoughnessMatrix",
              size: 16,
              type: "mat4"
            }]
          }
        }
      }, et = new WeakMap, Vt = new WeakMap, Ot = new WeakMap, qt = new WeakMap, Dt = new WeakMap, mt = new WeakMap, dt = new WeakMap, (() => {
        const et = "function" === typeof Symbol && Symbol.metadata ? Object.create(Nt[Symbol.metadata] ?? null) : void 0;
        jt = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Ht = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Xt = [(0, Wt.P)()], Qt = [(0, Wt.t)()], lt = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Et = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], ft = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], wt = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], yt = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], (0, vt.l)(tt, null, jt, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: tt => "isEnabled" in tt,
            get: tt => tt.isEnabled,
            set: (tt, et) => {
              tt.isEnabled = et
            }
          },
          metadata: et
        }, Mt, bt), (0, vt.l)(tt, null, Ht, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: tt => "linkSheenWithAlbedo" in tt,
            get: tt => tt.linkSheenWithAlbedo,
            set: (tt, et) => {
              tt.linkSheenWithAlbedo = et
            }
          },
          metadata: et
        }, Jt, Ct), (0, vt.l)(tt, null, lt, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: tt => "texture" in tt,
            get: tt => tt.texture,
            set: (tt, et) => {
              tt.texture = et
            }
          },
          metadata: et
        }, ct, Rt), (0, vt.l)(tt, null, Et, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "useRoughnessFromMainTexture" in tt,
            get: tt => tt.useRoughnessFromMainTexture,
            set: (tt, et) => {
              tt.useRoughnessFromMainTexture = et
            }
          },
          metadata: et
        }, It, Pt), (0, vt.l)(tt, null, ft, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: tt => "roughness" in tt,
            get: tt => tt.roughness,
            set: (tt, et) => {
              tt.roughness = et
            }
          },
          metadata: et
        }, Zt, Lt), (0, vt.l)(tt, null, wt, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: tt => "textureRoughness" in tt,
            get: tt => tt.textureRoughness,
            set: (tt, et) => {
              tt.textureRoughness = et
            }
          },
          metadata: et
        }, Ft, kt), (0, vt.l)(tt, null, yt, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: tt => "albedoScaling" in tt,
            get: tt => tt.albedoScaling,
            set: (tt, et) => {
              tt.albedoScaling = et
            }
          },
          metadata: et
        }, Gt, zt), (0, vt.l)(null, null, Xt, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: tt => "intensity" in tt,
            get: tt => tt.intensity,
            set: (tt, et) => {
              tt.intensity = et
            }
          },
          metadata: et
        }, ut, Kt), (0, vt.l)(null, null, Qt, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: tt => "color" in tt,
            get: tt => tt.color,
            set: (tt, et) => {
              tt.color = et
            }
          },
          metadata: et
        }, ht, St), et && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: et
        })
      })(), tt
    })();
    class je extends rt.e {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let He = (() => {
      var tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt, Qt, lt, Et, ft, wt, yt;
      let Nt, Mt, bt, Jt, Ct, ut, Kt, ht, St, ct, Rt, It, Pt, Zt, Lt, Ft, kt, Gt, ot, rt, At, it, Yt, pt, xt, Tt, st, te, ee, Ve, Oe = Ut.e,
        qe = [],
        De = [],
        me = [],
        de = [],
        He = [],
        Xe = [],
        Qe = [],
        le = [],
        Ee = [],
        fe = [],
        we = [],
        ye = [],
        Ne = [],
        ae = [],
        Me = [],
        be = [],
        Je = [],
        Ce = [],
        ue = [],
        Ke = [],
        he = [],
        ve = [],
        We = [],
        Se = [],
        ce = [],
        Re = [],
        Ie = [],
        Pe = [],
        Ze = [],
        Le = [],
        Fe = [],
        ke = [],
        Ge = [],
        ze = [],
        oe = [],
        re = [],
        Ue = [],
        Ae = [],
        ie = [],
        Ye = [],
        Be = [],
        pe = [],
        xe = [],
        Te = [],
        ge = [],
        se = [],
        ne = [],
        tV = [],
        eV = [],
        VV = [],
        OV = [],
        qV = [],
        DV = [],
        mV = [],
        dV = [],
        jV = [],
        HV = [],
        XV = [],
        QV = [],
        lV = [];
      return tt = class extends Oe {
        get isRefractionEnabled() {
          return (0, vt.e)(this, et, "f")
        }
        set isRefractionEnabled(tt) {
          (0, vt.i)(this, et, tt, "f")
        }
        get isTranslucencyEnabled() {
          return (0, vt.e)(this, Vt, "f")
        }
        set isTranslucencyEnabled(tt) {
          (0, vt.i)(this, Vt, tt, "f")
        }
        get isDispersionEnabled() {
          return (0, vt.e)(this, Ot, "f")
        }
        set isDispersionEnabled(tt) {
          (0, vt.i)(this, Ot, tt, "f")
        }
        get isScatteringEnabled() {
          return (0, vt.e)(this, qt, "f")
        }
        set isScatteringEnabled(tt) {
          (0, vt.i)(this, qt, tt, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(tt) {
          this._scene.enableSubSurfaceForPrePass() && tt && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(tt))
        }
        get useAlbedoToTintRefraction() {
          return (0, vt.e)(this, Dt, "f")
        }
        set useAlbedoToTintRefraction(tt) {
          (0, vt.i)(this, Dt, tt, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, vt.e)(this, mt, "f")
        }
        set useAlbedoToTintTranslucency(tt) {
          (0, vt.i)(this, mt, tt, "f")
        }
        get thicknessTexture() {
          return (0, vt.e)(this, dt, "f")
        }
        set thicknessTexture(tt) {
          (0, vt.i)(this, dt, tt, "f")
        }
        get refractionTexture() {
          return (0, vt.e)(this, jt, "f")
        }
        set refractionTexture(tt) {
          (0, vt.i)(this, jt, tt, "f")
        }
        get indexOfRefraction() {
          return (0, vt.e)(this, Ht, "f")
        }
        set indexOfRefraction(tt) {
          (0, vt.i)(this, Ht, tt, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(tt) {
          const et = tt >= 1 ? tt : -1;
          this._volumeIndexOfRefraction !== et && (this._volumeIndexOfRefraction = et, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, vt.e)(this, Xt, "f")
        }
        set invertRefractionY(tt) {
          (0, vt.i)(this, Xt, tt, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, vt.e)(this, Qt, "f")
        }
        set linkRefractionWithTransparency(tt) {
          (0, vt.i)(this, Qt, tt, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, vt.e)(this, lt, "f")
        }
        set useMaskFromThicknessTexture(tt) {
          (0, vt.i)(this, lt, tt, "f")
        }
        get refractionIntensityTexture() {
          return (0, vt.e)(this, Et, "f")
        }
        set refractionIntensityTexture(tt) {
          (0, vt.i)(this, Et, tt, "f")
        }
        get translucencyIntensityTexture() {
          return (0, vt.e)(this, ft, "f")
        }
        set translucencyIntensityTexture(tt) {
          (0, vt.i)(this, ft, tt, "f")
        }
        get translucencyColorTexture() {
          return (0, vt.e)(this, wt, "f")
        }
        set translucencyColorTexture(tt) {
          (0, vt.i)(this, wt, tt, "f")
        }
        get useGltfStyleTextures() {
          return (0, vt.e)(this, yt, "f")
        }
        set useGltfStyleTextures(tt) {
          (0, vt.i)(this, yt, tt, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(tt) {
          this.legacyTranslucency = tt
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        _markScenePrePassDirty() {
          this._enable(this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled), this._internalMarkAllSubMeshesAsTexturesDirty(), this._internalMarkScenePrePassDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Nt) {
          let Mt = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Nt, "PBRSubSurface", 130, new je, Mt), this._isRefractionEnabled = !1, et.set(this, (0, vt.m)(this, qe, !1)), this._isTranslucencyEnabled = ((0, vt.m)(this, De), !1), Vt.set(this, (0, vt.m)(this, me, !1)), this._isDispersionEnabled = ((0, vt.m)(this, de), !1), Ot.set(this, (0, vt.m)(this, He, !1)), this._isScatteringEnabled = ((0, vt.m)(this, Xe), !1), qt.set(this, (0, vt.m)(this, Qe, !1)), this._scatteringDiffusionProfileIndex = ((0, vt.m)(this, le), (0, vt.m)(this, Ee, 0)), this.refractionIntensity = ((0, vt.m)(this, fe), (0, vt.m)(this, we, 1)), this.translucencyIntensity = ((0, vt.m)(this, ye), (0, vt.m)(this, Ne, 1)), this._useAlbedoToTintRefraction = ((0, vt.m)(this, ae), !1), Dt.set(this, (0, vt.m)(this, Me, !1)), this._useAlbedoToTintTranslucency = ((0, vt.m)(this, be), !1), mt.set(this, (0, vt.m)(this, Je, !1)), this._thicknessTexture = ((0, vt.m)(this, Ce), null), dt.set(this, (0, vt.m)(this, ue, null)), this._refractionTexture = ((0, vt.m)(this, Ke), null), jt.set(this, (0, vt.m)(this, he, null)), this._indexOfRefraction = ((0, vt.m)(this, ve), 1.5), Ht.set(this, (0, vt.m)(this, We, 1.5)), this._volumeIndexOfRefraction = ((0, vt.m)(this, Se), (0, vt.m)(this, ce, -1)), this._invertRefractionY = ((0, vt.m)(this, Re), !1), Xt.set(this, (0, vt.m)(this, Ie, !1)), this._linkRefractionWithTransparency = ((0, vt.m)(this, Pe), !1), Qt.set(this, (0, vt.m)(this, Ze, !1)), this.minimumThickness = ((0, vt.m)(this, Le), (0, vt.m)(this, Fe, 0)), this.maximumThickness = ((0, vt.m)(this, ke), (0, vt.m)(this, Ge, 1)), this.useThicknessAsDepth = ((0, vt.m)(this, ze), (0, vt.m)(this, oe, !1)), this.tintColor = ((0, vt.m)(this, re), (0, vt.m)(this, Ue, Bt.b.White())), this.tintColorAtDistance = ((0, vt.m)(this, Ae), (0, vt.m)(this, ie, 1)), this.dispersion = ((0, vt.m)(this, Ye), (0, vt.m)(this, Be, 0)), this.diffusionDistance = ((0, vt.m)(this, pe), (0, vt.m)(this, xe, Bt.b.White())), this._useMaskFromThicknessTexture = ((0, vt.m)(this, Te), !1), lt.set(this, (0, vt.m)(this, ge, !1)), this._refractionIntensityTexture = ((0, vt.m)(this, se), null), Et.set(this, (0, vt.m)(this, ne, null)), this._translucencyIntensityTexture = ((0, vt.m)(this, tV), null), ft.set(this, (0, vt.m)(this, eV, null)), this.translucencyColor = ((0, vt.m)(this, VV), (0, vt.m)(this, OV, null)), this._translucencyColorTexture = ((0, vt.m)(this, qV), null), wt.set(this, (0, vt.m)(this, DV, null)), this._useGltfStyleTextures = ((0, vt.m)(this, mV), !0), yt.set(this, (0, vt.m)(this, dV, !0)), this.applyAlbedoAfterSubSurface = ((0, vt.m)(this, jV), (0, vt.m)(this, HV, tt.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, vt.m)(this, XV), (0, vt.m)(this, QV, tt.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, vt.m)(this, lV), this._scene = Nt.vI(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = Nt._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = Nt._dirtyCallbacks[32]
        }
        isReadyForSubMesh(tt, et) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (tt._areTexturesDirty && et.texturesEnabled) {
            if (this._thicknessTexture && gt.e.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && gt.e.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && gt.e.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && gt.e.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const tt = this._getRefractionTexture(et);
            if (tt && gt.e.RefractionTextureEnabled && !tt.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(tt, et) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return tt.SUBSURFACE = !1, tt.SS_DISPERSION = !1, tt.SS_TRANSLUCENCY = !1, tt.SS_SCATTERING = !1, tt.SS_REFRACTION = !1, tt.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, tt.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, tt.SS_THICKNESSANDMASK_TEXTURE = !1, tt.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, tt.SS_HAS_THICKNESS = !1, tt.SS_REFRACTIONINTENSITY_TEXTURE = !1, tt.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, tt.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, tt.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, tt.SS_REFRACTIONMAP_3D = !1, tt.SS_REFRACTIONMAP_OPPOSITEZ = !1, tt.SS_LODINREFRACTIONALPHA = !1, tt.SS_GAMMAREFRACTION = !1, tt.SS_RGBDREFRACTION = !1, tt.SS_LINEARSPECULARREFRACTION = !1, tt.SS_LINKREFRACTIONTOTRANSPARENCY = !1, tt.SS_ALBEDOFORREFRACTIONTINT = !1, tt.SS_ALBEDOFORTRANSLUCENCYTINT = !1, tt.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, tt.SS_USE_THICKNESS_AS_DEPTH = !1, tt.SS_USE_GLTF_TEXTURES = !1, tt.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, tt.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, tt.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(tt.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (tt._areTexturesDirty) {
            if (tt.SUBSURFACE = !0, tt.SS_DISPERSION = this._isDispersionEnabled, tt.SS_TRANSLUCENCY = this._isTranslucencyEnabled, tt.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, tt.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, tt.SS_SCATTERING = this._isScatteringEnabled, tt.SS_THICKNESSANDMASK_TEXTURE = !1, tt.SS_REFRACTIONINTENSITY_TEXTURE = !1, tt.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, tt.SS_HAS_THICKNESS = !1, tt.SS_USE_GLTF_TEXTURES = !1, tt.SS_REFRACTION = !1, tt.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, tt.SS_REFRACTIONMAP_3D = !1, tt.SS_GAMMAREFRACTION = !1, tt.SS_RGBDREFRACTION = !1, tt.SS_LINEARSPECULARREFRACTION = !1, tt.SS_REFRACTIONMAP_OPPOSITEZ = !1, tt.SS_LODINREFRACTIONALPHA = !1, tt.SS_LINKREFRACTIONTOTRANSPARENCY = !1, tt.SS_ALBEDOFORREFRACTIONTINT = !1, tt.SS_ALBEDOFORTRANSLUCENCYTINT = !1, tt.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, tt.SS_USE_THICKNESS_AS_DEPTH = !1, tt.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, tt.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, tt._areTexturesDirty && et.texturesEnabled && (this._thicknessTexture && gt.e.ThicknessTextureEnabled && (0, nt.ab)(this._thicknessTexture, tt, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && gt.e.RefractionIntensityTextureEnabled && (0, nt.ab)(this._refractionIntensityTexture, tt, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && gt.e.TranslucencyIntensityTextureEnabled && (0, nt.ab)(this._translucencyIntensityTexture, tt, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && gt.e.TranslucencyColorTextureEnabled && ((0, nt.ab)(this._translucencyColorTexture, tt, "SS_TRANSLUCENCYCOLOR_TEXTURE"), tt.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), tt.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, tt.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, tt.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, tt.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && et.texturesEnabled) {
              const Vt = this._getRefractionTexture(et);
              Vt && gt.e.RefractionTextureEnabled && (tt.SS_REFRACTION = !0, tt.SS_REFRACTIONMAP_3D = Vt.isCube, tt.SS_GAMMAREFRACTION = Vt.gammaSpace, tt.SS_RGBDREFRACTION = Vt.isRGBD, tt.SS_LINEARSPECULARREFRACTION = Vt.linearSpecularLOD, tt.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && Vt.isCube ? !Vt.invertZ : Vt.invertZ, tt.SS_LODINREFRACTIONALPHA = Vt.lodLevelInAlpha, tt.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, tt.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, tt.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = Vt.isCube && Vt.boundingBoxSize, tt.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (tt.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(tt, et, Vt, Ot) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) tt.updateFloat2("vThicknessParam", 0, 0);
            else {
              Ot.getRenderingMesh().getWorldMatrix().decompose(zt.k.uf[0]);
              const et = Math.max(Math.abs(zt.k.uf[0].x), Math.abs(zt.k.uf[0].y), Math.abs(zt.k.uf[0].z));
              tt.updateFloat2("vThicknessParam", this.minimumThickness * et, (this.maximumThickness - this.minimumThickness) * et)
            }
        }
        bindForSubMesh(tt, et, Vt, Ot) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const qt = Ot.materialDefines,
            Dt = this._material.isFrozen,
            mt = this._material.realTimeFiltering,
            dt = qt.LODBASEDMICROSFURACE,
            jt = this._getRefractionTexture(et);
          if (!tt.useUbo || !Dt || !tt.isSync) {
            if (this._thicknessTexture && gt.e.ThicknessTextureEnabled && (tt.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, nt.w)(this._thicknessTexture, tt, "thickness")), this._refractionIntensityTexture && gt.e.RefractionIntensityTextureEnabled && qt.SS_REFRACTIONINTENSITY_TEXTURE && (tt.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, nt.w)(this._refractionIntensityTexture, tt, "refractionIntensity")), this._translucencyColorTexture && gt.e.TranslucencyColorTextureEnabled && qt.SS_TRANSLUCENCYCOLOR_TEXTURE && (tt.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, nt.w)(this._translucencyColorTexture, tt, "translucencyColor")), this._translucencyIntensityTexture && gt.e.TranslucencyIntensityTextureEnabled && qt.SS_TRANSLUCENCYINTENSITY_TEXTURE && (tt.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, nt.w)(this._translucencyIntensityTexture, tt, "translucencyIntensity")), jt && gt.e.RefractionTextureEnabled) {
              tt.x_("refractionMatrix", jt.getRefractionTextureMatrix());
              let et = 1;
              jt.isCube || jt.depth && (et = jt.depth);
              const Vt = jt.getSize().width,
                Ot = this.volumeIndexOfRefraction;
              if (tt.updateFloat4("vRefractionInfos", jt.level, 1 / Ot, et, this._invertRefractionY ? -1 : 1), tt.updateFloat4("vRefractionMicrosurfaceInfos", Vt, jt.lodGenerationScale, jt.lodGenerationOffset, 1 / this.indexOfRefraction), mt && tt.updateFloat2("vRefractionFilteringInfo", Vt, Math.log2(Vt)), jt.boundingBoxSize) {
                const et = jt;
                tt.updateVector3("vRefractionPosition", et.boundingBoxPosition), tt.updateVector3("vRefractionSize", et.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && tt.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), tt.updateColor3("vDiffusionDistance", this.diffusionDistance), tt.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), tt.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), tt.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), tt.updateFloat("dispersion", this.dispersion)
          }
          et.texturesEnabled && (this._thicknessTexture && gt.e.ThicknessTextureEnabled && tt.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && gt.e.RefractionIntensityTextureEnabled && qt.SS_REFRACTIONINTENSITY_TEXTURE && tt.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && gt.e.TranslucencyIntensityTextureEnabled && qt.SS_TRANSLUCENCYINTENSITY_TEXTURE && tt.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && gt.e.TranslucencyColorTextureEnabled && qt.SS_TRANSLUCENCYCOLOR_TEXTURE && tt.setTexture("translucencyColorSampler", this._translucencyColorTexture), jt && gt.e.RefractionTextureEnabled && (dt ? tt.setTexture("refractionSampler", jt) : (tt.setTexture("refractionSampler", jt._lodTextureMid || jt), tt.setTexture("refractionSamplerLow", jt._lodTextureLow || jt), tt.setTexture("refractionSamplerHigh", jt._lodTextureHigh || jt))))
        }
        _getRefractionTexture(tt) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? tt.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(tt) {
          gt.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && tt.push(this._refractionTexture)
        }
        hasTexture(tt) {
          return this._thicknessTexture === tt || (this._refractionTexture === tt || (this._refractionIntensityTexture === tt || (this._translucencyIntensityTexture === tt || this._translucencyColorTexture === tt)))
        }
        hasRenderTargetTextures() {
          return !!(gt.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(tt) {
          this._thicknessTexture && tt.push(this._thicknessTexture), this._refractionTexture && tt.push(this._refractionTexture), this._refractionIntensityTexture && tt.push(this._refractionIntensityTexture), this._translucencyColorTexture && tt.push(this._translucencyColorTexture), this._translucencyIntensityTexture && tt.push(this._translucencyIntensityTexture)
        }
        getAnimatables(tt) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && tt.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && tt.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && tt.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && tt.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && tt.push(this._translucencyIntensityTexture)
        }
        dispose(tt) {
          tt && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(tt, et, Vt) {
          return tt.SS_SCATTERING && et.addFallback(Vt++, "SS_SCATTERING"), tt.SS_TRANSLUCENCY && et.addFallback(Vt++, "SS_TRANSLUCENCY"), Vt
        }
        getSamplers(tt) {
          tt.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
        }
        getUniforms() {
          return {
            ubo: [{
              name: "vRefractionMicrosurfaceInfos",
              size: 4,
              type: "vec4"
            }, {
              name: "vRefractionFilteringInfo",
              size: 2,
              type: "vec2"
            }, {
              name: "vTranslucencyIntensityInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "vRefractionInfos",
              size: 4,
              type: "vec4"
            }, {
              name: "refractionMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "vThicknessInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "vRefractionIntensityInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "thicknessMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "refractionIntensityMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "translucencyIntensityMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "vThicknessParam",
              size: 2,
              type: "vec2"
            }, {
              name: "vDiffusionDistance",
              size: 3,
              type: "vec3"
            }, {
              name: "vTintColor",
              size: 4,
              type: "vec4"
            }, {
              name: "vSubSurfaceIntensity",
              size: 3,
              type: "vec3"
            }, {
              name: "vRefractionPosition",
              size: 3,
              type: "vec3"
            }, {
              name: "vRefractionSize",
              size: 3,
              type: "vec3"
            }, {
              name: "scatteringDiffusionProfile",
              size: 1,
              type: "float"
            }, {
              name: "dispersion",
              size: 1,
              type: "float"
            }, {
              name: "vTranslucencyColor",
              size: 4,
              type: "vec4"
            }, {
              name: "vTranslucencyColorInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "translucencyColorMatrix",
              size: 16,
              type: "mat4"
            }]
          }
        }
      }, et = new WeakMap, Vt = new WeakMap, Ot = new WeakMap, qt = new WeakMap, Dt = new WeakMap, mt = new WeakMap, dt = new WeakMap, jt = new WeakMap, Ht = new WeakMap, Xt = new WeakMap, Qt = new WeakMap, lt = new WeakMap, Et = new WeakMap, ft = new WeakMap, wt = new WeakMap, yt = new WeakMap, (() => {
        const et = "function" === typeof Symbol && Symbol.metadata ? Object.create(Oe[Symbol.metadata] ?? null) : void 0;
        Nt = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Mt = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], bt = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Jt = [(0, Wt.P)(), (0, Wt.i)("_markScenePrePassDirty")], Ct = [(0, Wt.P)()], ut = [(0, Wt.P)()], Kt = [(0, Wt.P)()], ht = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], St = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], ct = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Rt = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], It = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Pt = [(0, Wt.P)()], Zt = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Lt = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Ft = [(0, Wt.P)()], kt = [(0, Wt.P)()], Gt = [(0, Wt.P)()], ot = [(0, Wt.t)()], rt = [(0, Wt.P)()], At = [(0, Wt.P)()], it = [(0, Wt.t)()], Yt = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], pt = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], xt = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Tt = [(0, Wt.t)()], st = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], te = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], ee = [(0, Wt.P)()], Ve = [(0, Wt.P)()], (0, vt.l)(tt, null, Nt, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: tt => "isRefractionEnabled" in tt,
            get: tt => tt.isRefractionEnabled,
            set: (tt, et) => {
              tt.isRefractionEnabled = et
            }
          },
          metadata: et
        }, qe, De), (0, vt.l)(tt, null, Mt, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: tt => "isTranslucencyEnabled" in tt,
            get: tt => tt.isTranslucencyEnabled,
            set: (tt, et) => {
              tt.isTranslucencyEnabled = et
            }
          },
          metadata: et
        }, me, de), (0, vt.l)(tt, null, bt, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: tt => "isDispersionEnabled" in tt,
            get: tt => tt.isDispersionEnabled,
            set: (tt, et) => {
              tt.isDispersionEnabled = et
            }
          },
          metadata: et
        }, He, Xe), (0, vt.l)(tt, null, Jt, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: tt => "isScatteringEnabled" in tt,
            get: tt => tt.isScatteringEnabled,
            set: (tt, et) => {
              tt.isScatteringEnabled = et
            }
          },
          metadata: et
        }, Qe, le), (0, vt.l)(tt, null, ht, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: tt => "useAlbedoToTintRefraction" in tt,
            get: tt => tt.useAlbedoToTintRefraction,
            set: (tt, et) => {
              tt.useAlbedoToTintRefraction = et
            }
          },
          metadata: et
        }, Me, be), (0, vt.l)(tt, null, St, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: tt => "useAlbedoToTintTranslucency" in tt,
            get: tt => tt.useAlbedoToTintTranslucency,
            set: (tt, et) => {
              tt.useAlbedoToTintTranslucency = et
            }
          },
          metadata: et
        }, Je, Ce), (0, vt.l)(tt, null, ct, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "thicknessTexture" in tt,
            get: tt => tt.thicknessTexture,
            set: (tt, et) => {
              tt.thicknessTexture = et
            }
          },
          metadata: et
        }, ue, Ke), (0, vt.l)(tt, null, Rt, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "refractionTexture" in tt,
            get: tt => tt.refractionTexture,
            set: (tt, et) => {
              tt.refractionTexture = et
            }
          },
          metadata: et
        }, he, ve), (0, vt.l)(tt, null, It, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: tt => "indexOfRefraction" in tt,
            get: tt => tt.indexOfRefraction,
            set: (tt, et) => {
              tt.indexOfRefraction = et
            }
          },
          metadata: et
        }, We, Se), (0, vt.l)(tt, null, Zt, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: tt => "invertRefractionY" in tt,
            get: tt => tt.invertRefractionY,
            set: (tt, et) => {
              tt.invertRefractionY = et
            }
          },
          metadata: et
        }, Ie, Pe), (0, vt.l)(tt, null, Lt, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: tt => "linkRefractionWithTransparency" in tt,
            get: tt => tt.linkRefractionWithTransparency,
            set: (tt, et) => {
              tt.linkRefractionWithTransparency = et
            }
          },
          metadata: et
        }, Ze, Le), (0, vt.l)(tt, null, Yt, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "useMaskFromThicknessTexture" in tt,
            get: tt => tt.useMaskFromThicknessTexture,
            set: (tt, et) => {
              tt.useMaskFromThicknessTexture = et
            }
          },
          metadata: et
        }, ge, se), (0, vt.l)(tt, null, pt, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "refractionIntensityTexture" in tt,
            get: tt => tt.refractionIntensityTexture,
            set: (tt, et) => {
              tt.refractionIntensityTexture = et
            }
          },
          metadata: et
        }, ne, tV), (0, vt.l)(tt, null, xt, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "translucencyIntensityTexture" in tt,
            get: tt => tt.translucencyIntensityTexture,
            set: (tt, et) => {
              tt.translucencyIntensityTexture = et
            }
          },
          metadata: et
        }, eV, VV), (0, vt.l)(tt, null, st, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "translucencyColorTexture" in tt,
            get: tt => tt.translucencyColorTexture,
            set: (tt, et) => {
              tt.translucencyColorTexture = et
            }
          },
          metadata: et
        }, DV, mV), (0, vt.l)(tt, null, te, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: tt => "useGltfStyleTextures" in tt,
            get: tt => tt.useGltfStyleTextures,
            set: (tt, et) => {
              tt.useGltfStyleTextures = et
            }
          },
          metadata: et
        }, dV, jV), (0, vt.l)(null, null, Ct, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: tt => "_scatteringDiffusionProfileIndex" in tt,
            get: tt => tt._scatteringDiffusionProfileIndex,
            set: (tt, et) => {
              tt._scatteringDiffusionProfileIndex = et
            }
          },
          metadata: et
        }, Ee, fe), (0, vt.l)(null, null, ut, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: tt => "refractionIntensity" in tt,
            get: tt => tt.refractionIntensity,
            set: (tt, et) => {
              tt.refractionIntensity = et
            }
          },
          metadata: et
        }, we, ye), (0, vt.l)(null, null, Kt, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: tt => "translucencyIntensity" in tt,
            get: tt => tt.translucencyIntensity,
            set: (tt, et) => {
              tt.translucencyIntensity = et
            }
          },
          metadata: et
        }, Ne, ae), (0, vt.l)(null, null, Pt, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: tt => "_volumeIndexOfRefraction" in tt,
            get: tt => tt._volumeIndexOfRefraction,
            set: (tt, et) => {
              tt._volumeIndexOfRefraction = et
            }
          },
          metadata: et
        }, ce, Re), (0, vt.l)(null, null, Ft, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: tt => "minimumThickness" in tt,
            get: tt => tt.minimumThickness,
            set: (tt, et) => {
              tt.minimumThickness = et
            }
          },
          metadata: et
        }, Fe, ke), (0, vt.l)(null, null, kt, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: tt => "maximumThickness" in tt,
            get: tt => tt.maximumThickness,
            set: (tt, et) => {
              tt.maximumThickness = et
            }
          },
          metadata: et
        }, Ge, ze), (0, vt.l)(null, null, Gt, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: tt => "useThicknessAsDepth" in tt,
            get: tt => tt.useThicknessAsDepth,
            set: (tt, et) => {
              tt.useThicknessAsDepth = et
            }
          },
          metadata: et
        }, oe, re), (0, vt.l)(null, null, ot, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: tt => "tintColor" in tt,
            get: tt => tt.tintColor,
            set: (tt, et) => {
              tt.tintColor = et
            }
          },
          metadata: et
        }, Ue, Ae), (0, vt.l)(null, null, rt, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: tt => "tintColorAtDistance" in tt,
            get: tt => tt.tintColorAtDistance,
            set: (tt, et) => {
              tt.tintColorAtDistance = et
            }
          },
          metadata: et
        }, ie, Ye), (0, vt.l)(null, null, At, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: tt => "dispersion" in tt,
            get: tt => tt.dispersion,
            set: (tt, et) => {
              tt.dispersion = et
            }
          },
          metadata: et
        }, Be, pe), (0, vt.l)(null, null, it, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: tt => "diffusionDistance" in tt,
            get: tt => tt.diffusionDistance,
            set: (tt, et) => {
              tt.diffusionDistance = et
            }
          },
          metadata: et
        }, xe, Te), (0, vt.l)(null, null, Tt, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: tt => "translucencyColor" in tt,
            get: tt => tt.translucencyColor,
            set: (tt, et) => {
              tt.translucencyColor = et
            }
          },
          metadata: et
        }, OV, qV), (0, vt.l)(null, null, ee, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: tt => "applyAlbedoAfterSubSurface" in tt,
            get: tt => tt.applyAlbedoAfterSubSurface,
            set: (tt, et) => {
              tt.applyAlbedoAfterSubSurface = et
            }
          },
          metadata: et
        }, HV, XV), (0, vt.l)(null, null, Ve, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: tt => "legacyTranslucency" in tt,
            get: tt => tt.legacyTranslucency,
            set: (tt, et) => {
              tt.legacyTranslucency = et
            }
          },
          metadata: et
        }, QV, lV), et && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: et
        })
      })(), tt.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, tt.DEFAULT_LEGACY_TRANSLUCENCY = !1, tt
    })();
    var Xe = Vt(40546),
      Qe = Vt(40520),
      le = Vt(40558),
      Ee = Vt(40566),
      fe = Vt(40575),
      we = Vt(40582),
      ye = Vt(40587),
      Ne = Vt(40592),
      ae = Vt(40080);
    const Me = {
      effect: null,
      subMesh: null
    };
    class be extends((0, ye.b)((0, we.e)(rt.e))) {}
    class Je extends((0, pt.e)(be)) {
      constructor(tt) {
        super(tt), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class Ce extends((0, Ne.c)(Tt.e)) {}
    let ue = (() => {
      var tt, et;
      let Ot, qt = Ce,
        mt = [],
        dt = [];
      return tt = class extends qt {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(tt) {
          this._realTimeFiltering = tt, this.fVt(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(tt) {
          this._realTimeFilteringQuality = tt, this.fVt(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, vt.e)(this, et, "f")
        }
        set debugMode(tt) {
          (0, vt.i)(this, et, tt, "f")
        }
        constructor(Vt, Ot) {
          super(Vt, Ot, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || tt.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new zt.r(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = tt.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = Bt.b.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new Bt.b(0, 0, 0), this._albedoColor = new Bt.b(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new Bt.b(1, 1, 1), this._reflectionColor = new Bt.b(1, 1, 1), this._emissiveColor = new Bt.b(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = tt.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new ct.g(16), this._globalAmbientColor = new Bt.b(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, et.set(this, (0, vt.m)(this, mt, 0)), this.debugLimit = ((0, vt.m)(this, dt), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new it(this), this.clearCoat = new ee(this), this.iridescence = new Oe(this), this.anisotropy = new De(this), this.sheen = new de(this), this.subSurface = new He(this), this.detailMap = new Xe.e(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), gt.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Lt(this.vI()), this.prePassConfiguration = new Yt.b
        }
        get hasRenderTargetTextures() {
          return !!(gt.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === tt.PBRMATERIAL_OPAQUE || this._transparencyMode === tt.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === tt.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== tt.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(tt, et, Vt) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const Ot = et._drawWrapper;
          if (Ot.effect && this.isFrozen && Ot._wasPreviouslyReady && Ot._wasPreviouslyUsingInstances === Vt) return !0;
          et.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), et.materialDefines = new Je(this._eventInfo.defineNames));
          const qt = et.materialDefines;
          if (this._isReadyForSubMesh(et)) return !0;
          const Dt = this.vI(),
            mt = Dt.Jf();
          if (qt._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Dt.texturesEnabled)) {
            if (this._albedoTexture && gt.e.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && gt.e.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && gt.e.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && gt.e.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && gt.e.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const tt = this._getReflectionTexture();
            if (tt && gt.e.ReflectionTextureEnabled) {
              if (!tt.isReadyOrNotBlocking()) return !1;
              if (tt.irradianceTexture) {
                if (!tt.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!tt.sphericalPolynomial && tt.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && gt.e.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && gt.e.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (gt.e.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (mt.getCaps().standardDerivatives && this._bumpTexture && gt.e.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && gt.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = qt, this._eventInfo.subMesh = et, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (qt._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (qt.AREALIGHTUSED || qt.CLUSTLIGHT_BATCH)
            for (let Qt = 0; Qt < tt.lightSources.length; Qt++)
              if (!tt.lightSources[Qt]._isReady()) return !1;
          if (mt.getCaps().standardDerivatives || tt.isVerticesDataPresent(ot.m.NormalKind) || (tt.createNormals(!0), St.d.Warn("PBRMaterial: Normals have been created for the mesh: " + tt.name)), !(0, nt.e)(Dt, tt, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const dt = et.effect,
            jt = qt._areLightsDisposed,
            Ht = this._prepareEffect(tt, et.getRenderingMesh(), qt, this.onCompiled, this.onError, Vt, null);
          let Xt = !1;
          if (Ht)
            if (this._onEffectCreatedObservable && (Me.effect = Ht, Me.subMesh = et, this._onEffectCreatedObservable.notifyObservers(Me)), this.allowShaderHotSwapping && dt && !Ht.isReady()) {
              if (qt.markAsUnprocessed(), Xt = this.isFrozen, jt) return qt._areLightsDisposed = !0, !1
            } else Dt.resetCachedMaterial(), et.setEffect(Ht, qt, this._materialContext);
          return !(!et.effect || !et.effect.isReady()) && (qt._renderId = Dt.getRenderId(), Ot._wasPreviouslyReady = !Xt, Ot._wasPreviouslyUsingInstances = !!Vt, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(et, Vt, Ot) {
          let qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            Dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            mt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            dt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(et, Vt, Ot, mt, dt), !Ot.isDirty) return null;
          Ot.markAsProcessed();
          const jt = this.vI().Jf(),
            Ht = new st.b;
          let Xt = 0;
          Ot.USESPHERICALINVERTEX && Ht.addFallback(Xt++, "USESPHERICALINVERTEX"), Ot.FOG && Ht.addFallback(Xt, "FOG"), Ot.SPECULARAA && Ht.addFallback(Xt, "SPECULARAA"), Ot.POINTSIZE && Ht.addFallback(Xt, "POINTSIZE"), Ot.LOGARITHMICDEPTH && Ht.addFallback(Xt, "LOGARITHMICDEPTH"), Ot.PARALLAX && Ht.addFallback(Xt, "PARALLAX"), Ot.PARALLAX_RHS && Ht.addFallback(Xt, "PARALLAX_RHS"), Ot.PARALLAXOCCLUSION && Ht.addFallback(Xt++, "PARALLAXOCCLUSION"), Ot.ENVIRONMENTBRDF && Ht.addFallback(Xt++, "ENVIRONMENTBRDF"), Ot.TANGENT && Ht.addFallback(Xt++, "TANGENT"), Ot.BUMP && Ht.addFallback(Xt++, "BUMP"), Xt = (0, nt.A)(Ot, Ht, this._maxSimultaneousLights, Xt), Ot.SPECULARTERM && Ht.addFallback(Xt++, "SPECULARTERM"), Ot.USESPHERICALFROMREFLECTIONMAP && Ht.addFallback(Xt++, "USESPHERICALFROMREFLECTIONMAP"), Ot.USEIRRADIANCEMAP && Ht.addFallback(Xt++, "USEIRRADIANCEMAP"), Ot.LIGHTMAP && Ht.addFallback(Xt++, "LIGHTMAP"), Ot.NORMAL && Ht.addFallback(Xt++, "NORMAL"), Ot.AMBIENT && Ht.addFallback(Xt++, "AMBIENT"), Ot.EMISSIVE && Ht.addFallback(Xt++, "EMISSIVE"), Ot.VERTEXCOLOR && Ht.addFallback(Xt++, "VERTEXCOLOR"), Ot.MORPHTARGETS && Ht.addFallback(Xt++, "MORPHTARGETS"), Ot.MULTIVIEW && Ht.addFallback(0, "MULTIVIEW");
          const Qt = [ot.m.PositionKind];
          Ot.NORMAL && Qt.push(ot.m.NormalKind), Ot.TANGENT && Qt.push(ot.m.TangentKind);
          for (let tt = 1; tt <= 6; ++tt) Ot["UV" + tt] && Qt.push(`uv${1===tt?"":tt}`);
          Ot.VERTEXCOLOR && Qt.push(ot.m.ColorKind), (0, nt.H)(Qt, et, Ot, Ht), (0, nt.L)(Qt, Ot), (0, nt.M)(Qt, et, Ot), (0, nt.D)(Qt, et, Ot);
          let lt = "pbr";
          const Et = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            ft = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, nt.lb)(Et, ft, !0);
          const wt = ["Material", "Scene", "Mesh"],
            yt = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: Ot.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = Ht, this._eventInfo.fallbackRank = Xt, this._eventInfo.defines = Ot, this._eventInfo.uniforms = Et, this._eventInfo.attributes = Qt, this._eventInfo.samplers = ft, this._eventInfo.uniformBuffersNames = wt, this._eventInfo.customCode = void 0, this._eventInfo.mesh = et, this._eventInfo.indexParameters = yt, this._callbackPluginEventGeneric(128, this._eventInfo), fe.c.AddUniformsAndSamplers(Et, ft), Yt.b.AddUniforms(Et), Yt.b.AddSamplers(ft), (0, Qe.e)(Et), this._useVertexPulling) {
            const tt = Vt?.geometry;
            tt && (this._vertexPullingMetadata = (0, le.h)(tt), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((tt, et) => {
              Et.push(`vp_${et}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          xt.b && (xt.b.PrepareUniforms(Et, Ot), xt.b.PrepareSamplers(ft, Ot)), (0, nt.ob)({
            uniformsNames: Et,
            uniformBuffersNames: wt,
            samplers: ft,
            defines: Ot,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const Nt = {};
          this.customShaderNameResolve && (lt = this.customShaderNameResolve(lt, Et, wt, ft, Ot, Qt, Nt));
          const Mt = Ot.toString(),
            bt = jt.createEffect(lt, {
              attributes: Qt,
              uniformsNames: Et,
              uniformBuffersNames: wt,
              samplers: ft,
              defines: Mt,
              fallbacks: Ht,
              onCompiled: qt,
              onError: Dt,
              indexParameters: yt,
              processFinalCode: Nt.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: Ot.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: tt._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, jt);
          return this._eventInfo.customCode = void 0, bt
        }
        _prepareDefines(et, Vt, Ot) {
          let qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            Dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const mt = Vt.hasThinInstances,
            dt = this.vI(),
            jt = dt.Jf();
          (0, nt.Y)(dt, et, Ot, !0, this._maxSimultaneousLights, this._disableLighting), Ot._needNormals = !0, (0, nt.gb)(dt, Ot);
          const Ht = this.needAlphaBlendingForMesh(et) && this.vI().useOrderIndependentTransparency;
          if ((0, nt.jb)(dt, Ot, this.canRenderToMRT && !Ht), (0, nt.ib)(dt, Ot, Ht), fe.c.PrepareDefines(jt.currentRenderPassId, et, Ot), Ot.METALLICWORKFLOW = this.isMetallicWorkflow(), Ot._areTexturesDirty) {
            Ot._needUVs = !1;
            for (let tt = 1; tt <= 6; ++tt) Ot["MAINUV" + tt] = !1;
            if (dt.texturesEnabled) {
              Ot.ALBEDODIRECTUV = 0, Ot.BASE_WEIGHTDIRECTUV = 0, Ot.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, Ot.AMBIENTDIRECTUV = 0, Ot.OPACITYDIRECTUV = 0, Ot.EMISSIVEDIRECTUV = 0, Ot.REFLECTIVITYDIRECTUV = 0, Ot.MICROSURFACEMAPDIRECTUV = 0, Ot.METALLIC_REFLECTANCEDIRECTUV = 0, Ot.REFLECTANCEDIRECTUV = 0, Ot.BUMPDIRECTUV = 0, Ot.LIGHTMAPDIRECTUV = 0, jt.getCaps().textureLOD && (Ot.LODBASEDMICROSFURACE = !0), this._albedoTexture && gt.e.DiffuseTextureEnabled ? ((0, nt.ab)(this._albedoTexture, Ot, "ALBEDO"), Ot.GAMMAALBEDO = this._albedoTexture.gammaSpace) : Ot.ALBEDO = !1, this._baseWeightTexture && gt.e.BaseWeightTextureEnabled ? (0, nt.ab)(this._baseWeightTexture, Ot, "BASE_WEIGHT") : Ot.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && gt.e.BaseDiffuseRoughnessTextureEnabled ? (0, nt.ab)(this._baseDiffuseRoughnessTexture, Ot, "BASE_DIFFUSE_ROUGHNESS") : Ot.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && gt.e.AmbientTextureEnabled ? ((0, nt.ab)(this._ambientTexture, Ot, "AMBIENT"), Ot.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : Ot.AMBIENT = !1, this._opacityTexture && gt.e.OpacityTextureEnabled ? ((0, nt.ab)(this._opacityTexture, Ot, "OPACITY"), Ot.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : Ot.OPACITY = !1;
              const tt = this._getReflectionTexture(),
                et = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || jt.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, nt.X)(dt, tt, Ot, this.realTimeFiltering, this.realTimeFilteringQuality, !et), this._lightmapTexture && gt.e.LightmapTextureEnabled ? ((0, nt.ab)(this._lightmapTexture, Ot, "LIGHTMAP"), Ot.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Ot.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, Ot.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : Ot.LIGHTMAP = !1, this._emissiveTexture && gt.e.EmissiveTextureEnabled ? ((0, nt.ab)(this._emissiveTexture, Ot, "EMISSIVE"), Ot.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : Ot.EMISSIVE = !1, gt.e.SpecularTextureEnabled ? (this._metallicTexture ? ((0, nt.ab)(this._metallicTexture, Ot, "REFLECTIVITY"), Ot.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, Ot.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, Ot.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, Ot.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, Ot.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, nt.ab)(this._reflectivityTexture, Ot, "REFLECTIVITY"), Ot.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, Ot.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, Ot.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : Ot.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (Ot.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, nt.ab)(this._metallicReflectanceTexture, Ot, "METALLIC_REFLECTANCE"), Ot.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : Ot.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, nt.ab)(this._reflectanceTexture, Ot, "REFLECTANCE"), Ot.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : Ot.REFLECTANCE = !1) : (Ot.METALLIC_REFLECTANCE = !1, Ot.REFLECTANCE = !1), this._microSurfaceTexture ? (0, nt.ab)(this._microSurfaceTexture, Ot, "MICROSURFACEMAP") : Ot.MICROSURFACEMAP = !1) : (Ot.REFLECTIVITY = !1, Ot.MICROSURFACEMAP = !1), jt.getCaps().standardDerivatives && this._bumpTexture && gt.e.BumpTextureEnabled && !this._disableBumpMap ? ((0, nt.ab)(this._bumpTexture, Ot, "BUMP"), this._useParallax && this._albedoTexture && gt.e.DiffuseTextureEnabled ? (Ot.PARALLAX = !0, Ot.PARALLAX_RHS = dt.useRightHandedSystem, Ot.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Ot.PARALLAX = !1, Ot.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Ot.BUMP = !1, Ot.PARALLAX = !1, Ot.PARALLAX_RHS = !1, Ot.PARALLAXOCCLUSION = !1, Ot.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && gt.e.ReflectionTextureEnabled ? (Ot.ENVIRONMENTBRDF = !0, Ot.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Ot.ENVIRONMENTBRDF = !1, Ot.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? Ot.ALPHAFROMALBEDO = !0 : Ot.ALPHAFROMALBEDO = !1
            }
            Ot.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === tt.LIGHTFALLOFF_STANDARD ? (Ot.USEPHYSICALLIGHTFALLOFF = !1, Ot.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === tt.LIGHTFALLOFF_GLTF ? (Ot.USEPHYSICALLIGHTFALLOFF = !1, Ot.USEGLTFLIGHTFALLOFF = !0) : (Ot.USEPHYSICALLIGHTFALLOFF = !0, Ot.USEGLTFLIGHTFALLOFF = !1), Ot.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? Ot.TWOSIDEDLIGHTING = !0 : Ot.TWOSIDEDLIGHTING = !1, Ot.MIRRORED = !!dt._mirroredCameraPosition, Ot.SPECULARAA = jt.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(Ot._areTexturesDirty || Ot._areMiscDirty) && (Ot.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Ot.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Ot.ALPHABLEND = this.needAlphaBlendingForMesh(et), Ot.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, Ot.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), Ot._areTexturesDirty && (Ot.TEXTURE_REPETITION_MODE = jt.version > 1 || jt.isWebGPU ? this.textureRepetitionMode : 0), Ot._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Ot), Ot.FORCENORMALFORWARD = this._forceNormalForward, Ot.RADIANCEOCCLUSION = this._useRadianceOcclusion, Ot.HORIZONOCCLUSION = this._useHorizonOcclusion, Ot._areMiscDirty && ((0, nt.eb)(et, dt, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(et), Ot, this._applyDecalMapAfterDetailMap, this._useVertexPulling, Vt, this._isVertexOutputInvariant), Ot.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !et.isVerticesDataPresent(ot.m.NormalKind), Ot.DEBUGMODE = this._debugMode), (0, nt.V)(dt, jt, this, Ot, !!qt, Dt, mt), this._eventInfo.defines = Ot, this._eventInfo.mesh = et, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, nt.R)(et, Ot, !0, !0, !0, this._transparencyMode !== tt.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(tt, et, Vt) {
          const Ot = {
            clipPlane: !1,
            useInstances: !1,
            ...Vt
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const Vt = new Je(this._eventInfo.defineNames),
              qt = this._prepareEffect(tt, tt, Vt, void 0, void 0, Ot.useInstances, Ot.clipPlane);
            this._onEffectCreatedObservable && (Me.effect = qt, Me.subMesh = null, this._onEffectCreatedObservable.notifyObservers(Me)), qt.isReady() ? et && et(this) : qt.onCompileObservable.add((() => {
              et && et(this)
            }))
          })()
        }
        buildUniformLayout() {
          const tt = this._uniformBuffer;
          tt.addUniform("vAlbedoInfos", 2), tt.addUniform("vBaseWeightInfos", 2), tt.addUniform("vBaseDiffuseRoughnessInfos", 2), tt.addUniform("vAmbientInfos", 4), tt.addUniform("vOpacityInfos", 2), tt.addUniform("vEmissiveInfos", 2), tt.addUniform("vLightmapInfos", 2), tt.addUniform("vReflectivityInfos", 3), tt.addUniform("vMicroSurfaceSamplerInfos", 2), tt.addUniform("vBumpInfos", 3), tt.addUniform("albedoMatrix", 16), tt.addUniform("baseWeightMatrix", 16), tt.addUniform("baseDiffuseRoughnessMatrix", 16), tt.addUniform("ambientMatrix", 16), tt.addUniform("opacityMatrix", 16), tt.addUniform("emissiveMatrix", 16), tt.addUniform("lightmapMatrix", 16), tt.addUniform("reflectivityMatrix", 16), tt.addUniform("microSurfaceSamplerMatrix", 16), tt.addUniform("bumpMatrix", 16), tt.addUniform("vTangentSpaceParams", 2), tt.addUniform("vAlbedoColor", 4), tt.addUniform("baseWeight", 1), tt.addUniform("baseDiffuseRoughness", 1), tt.addUniform("vLightingIntensity", 4), tt.addUniform("pointSize", 1), tt.addUniform("vReflectivityColor", 4), tt.addUniform("vEmissiveColor", 3), tt.addUniform("vAmbientColor", 3), tt.addUniform("vDebugMode", 2), tt.addUniform("vMetallicReflectanceFactors", 4), tt.addUniform("vMetallicReflectanceInfos", 2), tt.addUniform("metallicReflectanceMatrix", 16), tt.addUniform("vReflectanceInfos", 2), tt.addUniform("reflectanceMatrix", 16), tt.addUniform("cameraInfo", 4), tt.addUniform("vTextureRepetitionHexTilingParams", 4), (0, nt.kb)(tt, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(tt, et, Vt) {
          const Ot = this.vI(),
            qt = Vt.materialDefines;
          if (!qt) return;
          const Dt = Vt.effect;
          if (!Dt) return;
          this._activeEffect = Dt, et.getMeshUniformBuffer().bindToEffect(Dt, "Mesh"), et.transferToEffect(tt);
          const mt = Ot.Jf();
          this._uniformBuffer.bindToEffect(Dt, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Ot, et, tt, this.isFrozen), fe.c.Bind(mt.currentRenderPassId, this._activeEffect, et, tt, this);
          const dt = Ot.activeCamera;
          dt ? this._uniformBuffer.updateFloat4("cameraInfo", dt.minZ, dt.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const jt = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", jt[0], jt[1], jt[2], jt[3]), this._eventInfo.subMesh = Vt, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), qt.OBJECTSPACE_NORMALMAP && (tt.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const Ht = this._mustRebind(Ot, Dt, Vt, et.visibility),
            Xt = mt._features.needToAlwaysBindUniformBuffers;
          (0, nt.f)(et, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, le.d)(this._activeEffect, this._vertexPullingMetadata);
          let Qt = null;
          const lt = this._uniformBuffer;
          if (Ht) {
            if (this.bindViewProjection(Dt), Qt = this._getReflectionTexture(), !lt.useUbo || !this.isFrozen || !lt.isSync || Vt._drawWrapper._forceRebindOnNextCall) {
              if (Ot.texturesEnabled && (this._albedoTexture && gt.e.DiffuseTextureEnabled && (lt.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, nt.w)(this._albedoTexture, lt, "albedo")), this._baseWeightTexture && gt.e.BaseWeightTextureEnabled && (lt.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, nt.w)(this._baseWeightTexture, lt, "baseWeight")), this._baseDiffuseRoughnessTexture && gt.e.BaseDiffuseRoughnessTextureEnabled && (lt.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, nt.w)(this._baseDiffuseRoughnessTexture, lt, "baseDiffuseRoughness")), this._ambientTexture && gt.e.AmbientTextureEnabled && (lt.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, nt.w)(this._ambientTexture, lt, "ambient")), this._opacityTexture && gt.e.OpacityTextureEnabled && (lt.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, nt.w)(this._opacityTexture, lt, "opacity")), this._emissiveTexture && gt.e.EmissiveTextureEnabled && (lt.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, nt.w)(this._emissiveTexture, lt, "emissive")), this._lightmapTexture && gt.e.LightmapTextureEnabled && (lt.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, nt.w)(this._lightmapTexture, lt, "lightmap")), gt.e.SpecularTextureEnabled && (this._metallicTexture ? (lt.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, nt.w)(this._metallicTexture, lt, "reflectivity")) : this._reflectivityTexture && (lt.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, nt.w)(this._reflectivityTexture, lt, "reflectivity")), this._metallicReflectanceTexture && (lt.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, nt.w)(this._metallicReflectanceTexture, lt, "metallicReflectance")), this._reflectanceTexture && qt.REFLECTANCE && (lt.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, nt.w)(this._reflectanceTexture, lt, "reflectance")), this._microSurfaceTexture && (lt.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, nt.w)(this._microSurfaceTexture, lt, "microSurfaceSampler"))), this._bumpTexture && mt.getCaps().standardDerivatives && gt.e.BumpTextureEnabled && !this._disableBumpMap && (lt.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, nt.w)(this._bumpTexture, lt, "bump"), Ot._mirroredCameraPosition ? lt.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : lt.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, nt.l)(Ot, qt, lt, this._reflectionColor, Qt, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && lt.updateFloat("pointSize", this.pointSize), qt.METALLICWORKFLOW) {
                Bt.f.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, Bt.f.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const tt = this.subSurface?._indexOfRefraction ?? 1.5,
                  et = 1;
                Bt.f.Color4[0].b = tt;
                const Vt = Math.pow((tt - et) / (tt + et), 2);
                Bt.f.Color4[0].a = Vt, lt.updateDirectColor4("vReflectivityColor", Bt.f.Color4[0]), lt.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else lt.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              lt.updateColor3("vEmissiveColor", gt.e.EmissiveTextureEnabled ? this._emissiveColor : Bt.b.BlackReadOnly), !qt.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? lt.updateColor4("vAlbedoColor", this._albedoColor, 1) : lt.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), lt.updateFloat("baseWeight", this._baseWeight), lt.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * Ot.environmentIntensity, this._lightingInfos.w = this._specularIntensity, lt.updateVector4("vLightingIntensity", this._lightingInfos), Ot.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), lt.updateColor3("vAmbientColor", this._globalAmbientColor), lt.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            Ot.texturesEnabled && (this._albedoTexture && gt.e.DiffuseTextureEnabled && lt.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && gt.e.BaseWeightTextureEnabled && lt.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && gt.e.BaseDiffuseRoughnessTextureEnabled && lt.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && gt.e.AmbientTextureEnabled && lt.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && gt.e.OpacityTextureEnabled && lt.setTexture("opacitySampler", this._opacityTexture), (0, nt.n)(Ot, qt, lt, Qt, this.realTimeFiltering), qt.ENVIRONMENTBRDF && lt.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && gt.e.EmissiveTextureEnabled && lt.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && gt.e.LightmapTextureEnabled && lt.setTexture("lightmapSampler", this._lightmapTexture), gt.e.SpecularTextureEnabled && (this._metallicTexture ? lt.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && lt.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && lt.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && qt.REFLECTANCE && lt.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && lt.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && mt.getCaps().standardDerivatives && gt.e.BumpTextureEnabled && !this._disableBumpMap && lt.setTexture("bumpSampler", this._bumpTexture)), this.vI().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(et) && this.vI().depthPeelingRenderer.bind(Dt), this._eventInfo.subMesh = Vt, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Qe.f)(this._activeEffect, this, Ot), this.bindEyePosition(Dt)
          } else Xt && (this._needToBindSceneUbo = !0);
          !Ht && this.isFrozen && !Xt || !Ot.lightsEnabled || this._disableLighting || (0, nt.o)(Ot, et, this._activeEffect, qt, this._maxSimultaneousLights), !Ht && this.isFrozen || ((Ot.fogEnabled && et.applyFog && Ot.fogMode !== Gt.d.FOGMODE_NONE || Qt || this.subSurface.refractionTexture || et.receiveShadows || qt.PREPASS || qt.CLUSTLIGHT_BATCH) && this.bindView(Dt), (0, nt.i)(Ot, et, this._activeEffect, !0), qt.NUM_MORPH_INFLUENCERS && (0, nt.r)(et, this._activeEffect), qt.BAKED_VERTEX_ANIMATION_TEXTURE && et.bakedVertexAnimationManager?.bind(Dt, qt.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, nt.q)(qt, this._activeEffect, Ot)), this._afterBind(et, this._activeEffect, Vt), lt.update()
        }
        getAnimatables() {
          const tt = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && tt.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && tt.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && tt.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && tt.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && tt.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && tt.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && tt.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? tt.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && tt.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && tt.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && tt.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && tt.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && tt.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && tt.push(this._microSurfaceTexture), tt
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.vI().environmentTexture
        }
        getActiveTextures() {
          const tt = super.getActiveTextures();
          return this._albedoTexture && tt.push(this._albedoTexture), this._baseWeightTexture && tt.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && tt.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && tt.push(this._ambientTexture), this._opacityTexture && tt.push(this._opacityTexture), this._reflectionTexture && tt.push(this._reflectionTexture), this._emissiveTexture && tt.push(this._emissiveTexture), this._reflectivityTexture && tt.push(this._reflectivityTexture), this._metallicTexture && tt.push(this._metallicTexture), this._metallicReflectanceTexture && tt.push(this._metallicReflectanceTexture), this._reflectanceTexture && tt.push(this._reflectanceTexture), this._microSurfaceTexture && tt.push(this._microSurfaceTexture), this._bumpTexture && tt.push(this._bumpTexture), this._lightmapTexture && tt.push(this._lightmapTexture), tt
        }
        hasTexture(tt) {
          return !!super.hasTexture(tt) || (this._albedoTexture === tt || (this._baseWeightTexture === tt || (this._baseDiffuseRoughnessTexture === tt || (this._ambientTexture === tt || (this._opacityTexture === tt || (this._reflectionTexture === tt || (this._emissiveTexture === tt || (this._reflectivityTexture === tt || (this._metallicTexture === tt || (this._metallicReflectanceTexture === tt || (this._reflectanceTexture === tt || (this._microSurfaceTexture === tt || (this._bumpTexture === tt || this._lightmapTexture === tt)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const tt = this.vI().enableSubSurfaceForPrePass();
          return tt && (tt.enabled = !0), !0
        }
        dispose(tt, et) {
          this._breakShaderLoadedCheck = !0, et && (this._environmentBRDFTexture && this.vI().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(tt, et)
        }
      }, et = new WeakMap, (() => {
        const et = "function" === typeof Symbol && Symbol.metadata ? Object.create(qt[Symbol.metadata] ?? null) : void 0;
        Ot = [(0, Wt.i)("_markAllSubMeshesAsMiscDirty")], (0, vt.l)(tt, null, Ot, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: tt => "debugMode" in tt,
            get: tt => tt.debugMode,
            set: (tt, et) => {
              tt.debugMode = et
            }
          },
          metadata: et
        }, mt, dt), et && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: et
        })
      })(), tt.PBRMATERIAL_OPAQUE = Dt.c.MATERIAL_OPAQUE, tt.PBRMATERIAL_ALPHATEST = Dt.c.MATERIAL_ALPHATEST, tt.PBRMATERIAL_ALPHABLEND = Dt.c.MATERIAL_ALPHABLEND, tt.PBRMATERIAL_ALPHATESTANDBLEND = Dt.c.MATERIAL_ALPHATESTANDBLEND, tt.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, tt.LIGHTFALLOFF_PHYSICAL = 0, tt.LIGHTFALLOFF_GLTF = 1, tt.LIGHTFALLOFF_STANDARD = 2, tt.ForceGLSL = !1, tt._ShaderLoader = new Ee.b((() => [Promise.all([Vt.e(322), Vt.e(333)]).then((() => Vt(61757))), Promise.all([Vt.e(327), Vt.e(323), Vt.e(384), Vt.e(336), Vt.e(383)]).then((() => Vt(61780)))]), (() => [Promise.all([Vt.e(341), Vt.e(343), Vt.e(350)]).then((() => Vt(61858))), Promise.all([Vt.e(341), Vt.e(344), Vt.e(387), Vt.e(354), Vt.e(386)]).then((() => Vt(61870)))])), tt
    })();
    Object.getOwnPropertyDescriptor(ue.prototype, "decalMap") || Object.defineProperty(ue.prototype, "decalMap", (0, ae.c)("PBRBaseMaterial", "decalMap")), (0, Vt(42093).e)();
    var Ke = Vt(40230);
    var he = Vt(40300),
      ve = Vt(42076),
      We = Vt(40037),
      Se = Vt(40048),
      ce = Vt(40148);
    let Re = !1;
    const Ie = new Bt.c,
      Pe = new Bt.c;
    class Ze extends ve.d {
      get isSupported() {
        return this._engine?.getCaps().drawBuffersExtension ?? !1
      }
      get textures() {
        return this._textures
      }
      get count() {
        return this._count
      }
      get depthTexture() {
        return this._textures[this._textures.length - 1]
      }
      set wrapU(tt) {
        if (this._textures)
          for (let et = 0; et < this._textures.length; et++) this._textures[et].wrapU = tt
      }
      set wrapV(tt) {
        if (this._textures)
          for (let et = 0; et < this._textures.length; et++) this._textures[et].wrapV = tt
      }
      constructor(tt, et, Vt, Ot, qt, Dt) {
        const mt = !(!qt || !qt.generateMipMaps) && qt.generateMipMaps,
          dt = !(!qt || !qt.generateDepthTexture) && qt.generateDepthTexture,
          jt = qt && qt.depthTextureFormat ? qt.depthTextureFormat : 15,
          Ht = !qt || void 0 === qt.doNotChangeAspectRatio || qt.doNotChangeAspectRatio,
          Xt = !(!qt || !qt.drawOnlyOnFirstAttachmentByDefault) && qt.drawOnlyOnFirstAttachmentByDefault;
        if (super(tt, et, Ot, mt, Ht, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), Re || (Re = !0, Se.ThinEngine.prototype.restoreSingleAttachment = function() {
            const tt = this._gl;
            this.bindAttachments([tt.BACK])
          }, Se.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const tt = this._gl;
            this.bindAttachments([tt.COLOR_ATTACHMENT0])
          }, Se.ThinEngine.prototype.buildTextureLayout = function(tt) {
            let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const Vt = this._gl,
              Ot = [];
            if (et) Ot.push(Vt.BACK);
            else
              for (let qt = 0; qt < tt.length; qt++) tt[qt] ? Ot.push(Vt["COLOR_ATTACHMENT" + qt]) : Ot.push(Vt.NONE);
            return Ot
          }, Se.ThinEngine.prototype.bindAttachments = function(tt) {
            const et = this._gl,
              Vt = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, Vt)
              for (let Ot = 0; Ot < tt.length; Ot++) tt[Ot] !== et.NONE && Vt[Ot] && (0, ce.e)(Vt[Ot].format) && (this._integerMRTAttachmentsMask |= 1 << Ot);
            et.drawBuffers(tt)
          }, Se.ThinEngine.prototype.clearAttachments = function(tt, et, Vt, Ot) {
            let qt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const mt = this._currentRenderTarget?.textures;
            let dt = !1;
            if (Vt && tt && mt)
              for (let jt = 0; jt < et.length; jt++) {
                const tt = mt[jt];
                if (et[jt] !== this._gl.NONE && tt && (0, ce.e)(tt.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  dt = !0;
                  break
                }
              }
            if (!dt || !tt || !mt) return this.bindAttachments(et), void this.clear(tt, Vt, Ot, qt, Dt);
            this.bindAttachments(et), this._applyColorWriteState();
            for (let jt = 0; jt < et.length; jt++) {
              const Vt = mt[jt];
              if (et[jt] !== this._gl.NONE && Vt) {
                let et = tt;
                if ((0, ce.e)(Vt.format)) {
                  const Ot = (0, ce.h)(Vt.type);
                  et = Ot ? Ie : Pe;
                  const qt = Ot ? 255 : 1;
                  et.r = Math.round(tt.r * qt), et.g = Math.round(tt.g * qt), et.b = Math.round(tt.b * qt), et.a = Math.round(tt.a * qt)
                }
                this._clearColorAttachment(jt, et, Vt.format, Vt.type)
              }
            }
            if (Ot || qt) {
              const tt = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, Ot, qt, Dt)
              } finally {
                this._integerMRTAttachmentsMask = tt
              }
            }
          }, Se.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(tt) {
            let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Vt = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, tt.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(tt), et || this.generateMipMapsMultiFramebuffer(tt), Vt && (tt._MSAAFramebuffer && this._bindUnboundFramebuffer(tt._framebuffer), Vt()), this._bindUnboundFramebuffer(null)
          }, Se.ThinEngine.prototype.createMultipleRenderTarget = function(tt, et) {
            let Vt, Ot = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              qt = !1,
              Dt = !0,
              mt = !1,
              dt = !1,
              jt = 1,
              Ht = 1,
              Xt = [],
              Qt = [],
              lt = [],
              Et = [],
              ft = [],
              wt = [],
              yt = [],
              Nt = [],
              Mt = [],
              bt = !1;
            const Jt = this._createHardwareRenderTargetWrapper(!0, !1, tt);
            void 0 !== et && (qt = void 0 !== et.generateMipMaps && et.generateMipMaps, Dt = void 0 === et.generateDepthBuffer || et.generateDepthBuffer, mt = void 0 !== et.generateStencilBuffer && et.generateStencilBuffer, dt = void 0 !== et.generateDepthTexture && et.generateDepthTexture, jt = et.ydt ?? 1, Ht = et.samples ?? Ht, Xt = et.types || Xt, Qt = et.samplingModes || Qt, lt = et.useSRGBBuffers || lt, Et = et.formats || Et, ft = et.targetTypes || ft, wt = et.faceIndex || wt, yt = et.layerIndex || yt, Nt = et.layerCounts || Nt, Mt = et.labels || Mt, bt = et.dontCreateTextures ?? !1, this.Vw > 1 && (13 === et.depthTextureFormat || 17 === et.depthTextureFormat || 16 === et.depthTextureFormat || 14 === et.depthTextureFormat || 18 === et.depthTextureFormat) && (Vt = et.depthTextureFormat)), void 0 === Vt && (Vt = mt ? 13 : 14);
            const Ct = this._gl,
              ut = this._currentFramebuffer,
              Kt = Ct.createFramebuffer();
            this._bindUnboundFramebuffer(Kt);
            const ht = tt.width ?? tt,
              vt = tt.height ?? tt,
              Wt = [],
              ct = [],
              Rt = this.Vw > 1 && (13 === Vt || 17 === Vt || 18 === Vt);
            Jt.label = et?.label ?? "MultiRenderTargetWrapper", Jt._framebuffer = Kt, Jt._generateDepthBuffer = dt || Dt, Jt._generateStencilBuffer = dt ? Rt : mt, Jt._depthStencilBuffer = this._setupFramebufferDepthAttachments(Jt._generateStencilBuffer, Jt._generateDepthBuffer, ht, vt, 1, Vt), Jt._attachments = ct;
            for (let It = 0; It < jt; It++) {
              let tt = Qt[It] || 3,
                et = Xt[It] || 0,
                Vt = lt[It] || !1;
              const Ot = Et[It] || 5,
                Dt = ft[It] || 3553,
                mt = Nt[It] ?? 1;
              (1 !== et || this._caps.textureFloatLinearFiltering) && (2 !== et || this._caps.textureHalfFloatLinearFiltering) || (tt = 1);
              const dt = this._getSamplingParameters(tt, qt);
              1 !== et || this._caps.textureFloat || (et = 0, St.d.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), Vt = Vt && this._caps.supportSRGBBuffers && (this.Vw > 1 || this.isWebGPU);
              const jt = this.Vw > 1,
                Ht = Ct[jt ? "COLOR_ATTACHMENT" + It : "COLOR_ATTACHMENT" + It + "_WEBGL"];
              if (ct.push(Ht), -1 === Dt || bt) continue;
              const wt = new We.d(this, 6);
              Wt[It] = wt, Ct.activeTexture(Ct["TEXTURE" + It]), Ct.bindTexture(Dt, wt._hardwareTexture.underlyingResource), Ct.texParameteri(Dt, Ct.TEXTURE_MAG_FILTER, dt.mag), Ct.texParameteri(Dt, Ct.TEXTURE_MIN_FILTER, dt.min), Ct.texParameteri(Dt, Ct.TEXTURE_WRAP_S, Ct.CLAMP_TO_EDGE), Ct.texParameteri(Dt, Ct.TEXTURE_WRAP_T, Ct.CLAMP_TO_EDGE);
              const yt = this._getRGBABufferInternalSizedFormat(et, Ot, Vt),
                ut = this._getInternalFormat(Ot),
                Kt = this._getWebGLTextureType(et);
              if (!jt || 35866 !== Dt && 32879 !== Dt)
                if (34067 === Dt) {
                  for (let tt = 0; tt < 6; tt++) Ct.texImage2D(Ct.TEXTURE_CUBE_MAP_POSITIVE_X + tt, 0, yt, ht, vt, 0, ut, Kt, null);
                  wt.isCube = !0
                } else Ct.texImage2D(Ct.TEXTURE_2D, 0, yt, ht, vt, 0, ut, Kt, null);
              else 35866 === Dt ? wt.is2DArray = !0 : wt.is3D = !0, wt.baseDepth = wt.depth = mt, Ct.texImage3D(Dt, 0, yt, ht, vt, mt, 0, ut, Kt, null);
              qt && Ct.generateMipmap(Dt), this._bindTextureDirectly(Dt, null), wt.baseWidth = ht, wt.baseHeight = vt, wt.width = ht, wt.height = vt, wt.isReady = !0, wt.samples = 1, wt.generateMipMaps = qt, wt.samplingMode = tt, wt.type = et, wt._useSRGBBuffer = Vt, wt.format = Ot, wt.label = Mt[It] ?? Jt.label + "-Texture" + It, this._internalTexturesCache.push(wt)
            }
            if (dt && this._caps.depthTextureExtension && !bt) {
              const tt = new We.d(this, 14);
              let et = 5,
                Ot = Ct.DEPTH_COMPONENT16,
                Dt = Ct.DEPTH_COMPONENT,
                mt = Ct.UNSIGNED_SHORT,
                dt = Ct.DEPTH_ATTACHMENT;
              this.Vw < 2 ? Ot = Ct.DEPTH_COMPONENT : 14 === Vt ? (et = 1, mt = Ct.FLOAT, Ot = Ct.DEPTH_COMPONENT32F) : 18 === Vt ? (et = 0, mt = Ct.FLOAT_32_UNSIGNED_INT_24_8_REV, Ot = Ct.DEPTH32F_STENCIL8, Dt = Ct.DEPTH_STENCIL, dt = Ct.DEPTH_STENCIL_ATTACHMENT) : 16 === Vt ? (et = 0, mt = Ct.UNSIGNED_INT, Ot = Ct.DEPTH_COMPONENT24, dt = Ct.DEPTH_ATTACHMENT) : 13 !== Vt && 17 !== Vt || (et = 12, mt = Ct.UNSIGNED_INT_24_8, Ot = Ct.DEPTH24_STENCIL8, Dt = Ct.DEPTH_STENCIL, dt = Ct.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(Ct.TEXTURE_2D, tt, !0), Ct.texParameteri(Ct.TEXTURE_2D, Ct.TEXTURE_MAG_FILTER, Ct.NEAREST), Ct.texParameteri(Ct.TEXTURE_2D, Ct.TEXTURE_MIN_FILTER, Ct.NEAREST), Ct.texParameteri(Ct.TEXTURE_2D, Ct.TEXTURE_WRAP_S, Ct.CLAMP_TO_EDGE), Ct.texParameteri(Ct.TEXTURE_2D, Ct.TEXTURE_WRAP_T, Ct.CLAMP_TO_EDGE), Ct.texImage2D(Ct.TEXTURE_2D, 0, Ot, ht, vt, 0, Dt, mt, null), Ct.framebufferTexture2D(Ct.FRAMEBUFFER, dt, Ct.TEXTURE_2D, tt._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(Ct.TEXTURE_2D, null), Jt._depthStencilTexture = tt, Jt._depthStencilTextureWithStencil = Rt, tt.baseWidth = ht, tt.baseHeight = vt, tt.width = ht, tt.height = vt, tt.isReady = !0, tt.samples = 1, tt.generateMipMaps = qt, tt.samplingMode = 1, tt.format = Vt, tt.type = et, tt.label = Jt.label + "-DepthStencil", Wt[jt] = tt, this._internalTexturesCache.push(tt)
            }
            if (Jt.setTextures(Wt), Ot && Ct.drawBuffers(ct), this._bindUnboundFramebuffer(ut), Jt.setLayerAndFaceIndices(yt, wt), this.resetTextureCache(), bt) {
              if (Ht > 1) {
                const tt = Ct.createFramebuffer();
                if (!tt) throw new Error("Unable to create multi sampled framebuffer");
                Jt._samples = Ht, Jt._MSAAFramebuffer = tt, jt > 0 && Ot && (this._bindUnboundFramebuffer(tt), Ct.drawBuffers(ct), this._bindUnboundFramebuffer(ut))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(Jt, Ht, Ot);
            return Jt
          }, Se.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(tt, et) {
            let Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.Vw < 2 || !tt) return 1;
            if (tt.samples === et) return et;
            const Ot = this._gl;
            et = Math.min(et, this.getCaps().maxMSAASamples), tt._depthStencilBuffer && (Ot.deleteRenderbuffer(tt._depthStencilBuffer), tt._depthStencilBuffer = null), tt._MSAAFramebuffer && (Ot.deleteFramebuffer(tt._MSAAFramebuffer), tt._MSAAFramebuffer = null);
            const qt = tt._attachments.length;
            for (let mt = 0; mt < qt; mt++) {
              const et = tt.textures[mt]._hardwareTexture;
              et?.releaseMSAARenderBuffers()
            }
            if (et > 1 && "function" === typeof Ot.renderbufferStorageMultisample) {
              const Dt = Ot.createFramebuffer();
              if (!Dt) throw new Error("Unable to create multi sampled framebuffer");
              tt._MSAAFramebuffer = Dt, this._bindUnboundFramebuffer(Dt);
              const mt = [];
              for (let Vt = 0; Vt < qt; Vt++) {
                const qt = tt.textures[Vt],
                  Dt = qt._hardwareTexture,
                  dt = Ot[this.Vw > 1 ? "COLOR_ATTACHMENT" + Vt : "COLOR_ATTACHMENT" + Vt + "_WEBGL"],
                  jt = this._createRenderBuffer(qt.width, qt.height, et, -1, this._getRGBABufferInternalSizedFormat(qt.type, qt.format, qt._useSRGBBuffer), dt);
                if (!jt) throw new Error("Unable to create multi sampled framebuffer");
                Dt.addMSAARenderBuffer(jt), qt.samples = et, mt.push(dt)
              }
              Vt && Ot.drawBuffers(mt)
            } else this._bindUnboundFramebuffer(tt._framebuffer);
            const Dt = tt._depthStencilTexture ? tt._depthStencilTexture.format : void 0;
            return tt._depthStencilBuffer = this._setupFramebufferDepthAttachments(tt._generateStencilBuffer, tt._generateDepthBuffer, tt.width, tt.height, et, Dt), this._bindUnboundFramebuffer(null), tt._samples = et, et
          }, Se.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(tt) {
            const et = tt,
              Vt = this._gl;
            if (et.isMulti)
              for (let Ot = 0; Ot < et._attachments.length; Ot++) {
                const tt = et.textures[Ot];
                !tt?.generateMipMaps || tt?.isCube || tt?.is3D || (this._bindTextureDirectly(Vt.TEXTURE_2D, tt, !0), Vt.generateMipmap(Vt.TEXTURE_2D), this._bindTextureDirectly(Vt.TEXTURE_2D, null))
              }
          }, Se.ThinEngine.prototype.resolveMultiFramebuffer = function(tt) {
            const et = tt,
              Vt = this._gl;
            if (!et._MSAAFramebuffer || !et.isMulti) return;
            let Ot = et.resolveMSAAColors ? Vt.COLOR_BUFFER_BIT : 0;
            Ot |= et._generateDepthBuffer && et.resolveMSAADepth ? Vt.DEPTH_BUFFER_BIT : 0, Ot |= et._generateStencilBuffer && et.resolveMSAAStencil ? Vt.STENCIL_BUFFER_BIT : 0;
            const qt = et._attachments,
              Dt = qt.length;
            Vt.bindFramebuffer(Vt.READ_FRAMEBUFFER, et._MSAAFramebuffer), Vt.bindFramebuffer(Vt.DRAW_FRAMEBUFFER, et._framebuffer);
            for (let mt = 0; mt < Dt; mt++) {
              const tt = et.textures[mt];
              for (let et = 0; et < Dt; et++) qt[et] = Vt.NONE;
              qt[mt] = Vt[this.Vw > 1 ? "COLOR_ATTACHMENT" + mt : "COLOR_ATTACHMENT" + mt + "_WEBGL"], Vt.readBuffer(qt[mt]), Vt.drawBuffers(qt), Vt.blitFramebuffer(0, 0, tt.width, tt.height, 0, 0, tt.width, tt.height, Ot, Vt.NEAREST)
            }
            for (let mt = 0; mt < Dt; mt++) qt[mt] = Vt[this.Vw > 1 ? "COLOR_ATTACHMENT" + mt : "COLOR_ATTACHMENT" + mt + "_WEBGL"];
            Vt.drawBuffers(qt), Vt.bindFramebuffer(this._gl.FRAMEBUFFER, et._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = Dt;
        const Qt = [],
          lt = [],
          Et = [],
          ft = [],
          wt = [],
          yt = [],
          Nt = [],
          Mt = [];
        this._initTypes(Vt, Qt, lt, Et, ft, wt, yt, Nt, Mt, qt);
        const bt = !qt || void 0 === qt.generateDepthBuffer || qt.generateDepthBuffer,
          Jt = !(!qt || void 0 === qt.generateStencilBuffer) && qt.generateStencilBuffer,
          Ct = qt && qt.samples ? qt.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: lt,
          generateMipMaps: mt,
          generateDepthBuffer: bt,
          generateStencilBuffer: Jt,
          generateDepthTexture: dt,
          depthTextureFormat: jt,
          types: Qt,
          ydt: Vt,
          useSRGBBuffers: Et,
          samples: Ct,
          formats: ft,
          targetTypes: wt,
          faceIndex: yt,
          layerIndex: Nt,
          layerCounts: Mt,
          labels: Dt,
          label: tt
        }, this._count = Vt, this._drawOnlyOnFirstAttachmentByDefault = Xt, Vt > 0 && (this._createInternalTextures(), this._createTextures(Dt))
      }
      _initTypes(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht) {
        for (let Xt = 0; Xt < tt; Xt++) Ht && Ht.types && void 0 !== Ht.types[Xt] ? et.push(Ht.types[Xt]) : et.push(Ht && Ht.defaultType ? Ht.defaultType : 0), Ht && Ht.samplingModes && void 0 !== Ht.samplingModes[Xt] ? Vt.push(Ht.samplingModes[Xt]) : Vt.push(Rt.f.BILINEAR_SAMPLINGMODE), Ht && Ht.useSRGBBuffers && void 0 !== Ht.useSRGBBuffers[Xt] ? Ot.push(Ht.useSRGBBuffers[Xt]) : Ot.push(!1), Ht && Ht.formats && void 0 !== Ht.formats[Xt] ? qt.push(Ht.formats[Xt]) : qt.push(5), Ht && Ht.targetTypes && void 0 !== Ht.targetTypes[Xt] ? Dt.push(Ht.targetTypes[Xt]) : Dt.push(3553), Ht && Ht.faceIndex && void 0 !== Ht.faceIndex[Xt] ? mt.push(Ht.faceIndex[Xt]) : mt.push(0), Ht && Ht.layerIndex && void 0 !== Ht.layerIndex[Xt] ? dt.push(Ht.layerIndex[Xt]) : dt.push(0), Ht && Ht.layerCounts && void 0 !== Ht.layerCounts[Xt] ? jt.push(Ht.layerCounts[Xt]) : jt.push(1)
      }
      _createInternaTextureIndexMapping() {
        const tt = {},
          et = [];
        if (!this._renderTarget) return et;
        const Vt = this._renderTarget.textures;
        for (let Ot = 0; Ot < Vt.length; Ot++) {
          const qt = Vt[Ot];
          if (!qt) continue;
          const Dt = tt[qt.uniqueId];
          void 0 !== Dt ? et[Ot] = Dt : tt[qt.uniqueId] = Ot
        }
        return et
      }
      _rebuild() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || tt) return;
        const Ot = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), et && (this._releaseTextures(), this._createTextures(Vt));
        const qt = this._renderTarget.textures;
        for (let Dt = 0; Dt < qt.length; Dt++) {
          const tt = this._textures[Dt];
          void 0 !== Ot[Dt] && this._renderTarget.setTexture(qt[Ot[Dt]], Dt), tt._texture = qt[Dt], tt._texture && (tt._noMipmap = !tt._texture.useMipMaps, tt._useSRGBBuffer = tt._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let tt = 0; tt < this._textures.length; tt++) this._textures[tt]._texture = null, this._textures[tt].dispose()
      }
      _createTextures(tt) {
        const et = this._renderTarget.textures;
        this._textures = [];
        for (let Vt = 0; Vt < et.length; Vt++) {
          const Ot = new Rt.f(null, this.vI());
          tt?.[Vt] && (Ot.name = tt[Vt]), Ot._texture = et[Vt], Ot._texture && (Ot._noMipmap = !Ot._texture.useMipMaps, Ot._useSRGBBuffer = Ot._texture._useSRGBBuffer), this._textures.push(Ot)
        }
      }
      setInternalTexture(tt, et) {
        let Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === et && (this._texture = tt), this.renderTarget.setTexture(tt, et, Vt), this.textures[et] || (this.textures[et] = new Rt.f(null, this.vI()), this.textures[et].name = this._textureNames?.[et] ?? this.textures[et].name), this.textures[et]._texture = tt, this.textures[et]._noMipmap = !tt.useMipMaps, this.textures[et]._useSRGBBuffer = tt._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[et] = tt.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[et] = tt.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[et] = tt._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[et])) {
          let Vt;
          Vt = tt.is2DArray ? 35866 : tt.isCube ? 34067 : tt.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[et] = Vt
        }
      }
      setLayerAndFaceIndex(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[tt] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[tt] = et), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[tt] = Vt), this.renderTarget.setLayerAndFaceIndex(tt, et, Vt))
      }
      setLayerAndFaceIndices(tt, et) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = tt, this._multiRenderTargetOptions.faceIndex = et, this.renderTarget.setLayerAndFaceIndices(tt, et))
      }
      get samples() {
        return this._samples
      }
      set samples(tt) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(tt) : this._samples = tt
      }
      resize(tt) {
        this._processSizeParameter(tt), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(tt, et, Vt) {
        this._multiRenderTargetOptions.ydt = tt, this._count = tt;
        const Ot = [],
          qt = [],
          Dt = [],
          mt = [],
          dt = [],
          jt = [],
          Ht = [],
          Xt = [];
        this._textureNames = Vt, this._initTypes(tt, Ot, qt, Dt, mt, dt, jt, Ht, Xt, et), this._multiRenderTargetOptions.types = Ot, this._multiRenderTargetOptions.samplingModes = qt, this._multiRenderTargetOptions.useSRGBBuffers = Dt, this._multiRenderTargetOptions.formats = mt, this._multiRenderTargetOptions.targetTypes = dt, this._multiRenderTargetOptions.faceIndex = jt, this._multiRenderTargetOptions.layerIndex = Ht, this._multiRenderTargetOptions.layerCounts = Xt, this._multiRenderTargetOptions.labels = Vt, this._rebuild(!1, !0, Vt)
      }
      _unbindFrameBuffer(tt, et) {
        this._renderTarget && tt.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(et)
        }))
      }
      dispose() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), tt ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const tt = this._renderTarget?.textures;
        if (tt) {
          for (let et = tt.length - 1; et >= 0; et--) this._textures[et]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var Le = Vt(40366);
    class Fe {
      constructor(tt) {
        this.name = Le.e.NAME_GEOMETRYBUFFERRENDERER, this.Fw = tt
      }
      register() {
        this.Fw._gatherRenderTargetsStage.registerStep(Le.e.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(tt) {
        this.Fw._geometryBufferRenderer && tt.push(this.Fw._geometryBufferRenderer.getGBuffer())
      }
    }
    let ke = !1;
    var Ge;
    ! function(tt) {
      tt[tt.Small = 0] = "Small", tt[tt.Medium = 1] = "Medium", tt[tt.Large = 2] = "Large", tt[tt.ExtraLarge = 3] = "ExtraLarge"
    }(Ge || (Ge = {}));
    const ze = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      oe = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class re {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(tt) {
        if (tt && this._enableMeshBlendTag && !this._scene.Jf().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = tt
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(tt) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = tt, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(tt, et) {
        tt === re.POSITION_TEXTURE_TYPE ? (this._positionIndex = et, this._enablePosition = !0) : tt === re.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = et, this._enableVelocity = !0) : tt === re.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = et, this._enableVelocityLinear = !0) : tt === re.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = et, this._enableReflectivity = !0) : tt === re.DEPTH_TEXTURE_TYPE ? (this._depthIndex = et, this._enableDepth = !0) : tt === re.NORMAL_TEXTURE_TYPE ? (this._normalIndex = et, this._enableNormal = !0) : tt === re.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = et, this._enableScreenspaceDepth = !0) : tt === re.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = et, this._enableIrradiance = !0) : tt === re.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = et, this._enableObjectId = !0) : tt === re.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = et, this._enableMeshBlendTag = !0)
      }
      _setAttachments(tt) {
        this._attachmentsFromPrePass = tt
      }
      _linkInternalTexture(tt) {
        this._multiRenderTarget.setInternalTexture(tt, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(tt) {
        this._multiRenderTarget.renderList = tt
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(tt) {
        switch (tt) {
          case re.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case re.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case re.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case re.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case re.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case re.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case re.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case re.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case re.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case re.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(tt) {
        this._enableDepth = tt, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(tt) {
        this._enableNormal = tt, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(tt) {
        this._enablePosition = tt, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(tt) {
        this._enableVelocity = tt, tt || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = tt
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(tt) {
        this._enableVelocityLinear = tt, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(tt) {
        this._enableReflectivity = tt, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(tt) {
        this._enableScreenspaceDepth = tt, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(tt) {
        this._enableIrradiance = tt, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(tt) {
        if (tt && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (tt && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (tt && !this._enableObjectId && !this._linkedWithPrePass) {
          const tt = this._scene.Jf(),
            et = Math.min(tt.getCaps().maxDrawBuffers ?? 1, 8),
            Vt = this._assignRenderTargetIndices()[0] + 1;
          if (tt.getCaps().drawBuffersExtension && Vt > et) throw new Error(`GeometryBufferRenderer: ${Vt} color attachments were requested, but this engine supports at most ${et}`)
        }
        this._enableObjectId = tt, tt || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(tt) {
        if (this._enableMeshBlendTag !== tt) {
          if (tt) {
            const tt = this._scene.Jf();
            if (! function(tt) {
                return "NATIVE" !== tt.shaderPlatformName && (tt.isWebGPU || 2 === tt.Vw)
              }(tt)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !tt.isWebGPU && !tt.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const et = Math.min(tt.getCaps().maxDrawBuffers ?? 1, 8),
                Vt = this._assignRenderTargetIndices()[0] + 1;
              if (tt.getCaps().drawBuffersExtension && Vt > et) throw new Error(`GeometryBufferRenderer: ${Vt} color attachments were requested, but this engine supports at most ${et}`)
            }
          }
          this._enableMeshBlendTag = tt, tt || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get Fw() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          Ot = arguments.length > 3 ? arguments[3] : void 0;
        var qt;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new Bt.c(0, 0, 0, 0), this._clearDepthColor = new Bt.c(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = tt, this._ratioOrDimensions = et, this._useUbo = tt.Jf().supportsUniformBuffers, this._depthFormat = Vt, this._textureTypesAndFormats = Ot || {}, this._initShaderSourceAsync(), qt = re, ke || (ke = !0, Object.defineProperty(Gt.d.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(tt) {
            tt && tt.isSupported && (this._geometryBufferRenderer = tt)
          },
          enumerable: !0,
          configurable: !0
        }), Gt.d.prototype.enableGeometryBufferRenderer = function() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            Vt = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new qt(this, tt, et, Vt), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, Gt.d.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, qt._SceneComponentInitialization = tt => {
          let et = tt._getComponent(Le.e.NAME_GEOMETRYBUFFERRENDERER);
          et || (et = new Fe(tt), tt.KOt(et))
        }), re._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.Jf().isWebGPU && !re.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([Vt.e(342).then((() => Vt(62069))), Promise.all([Vt.e(341), Vt.e(353)]).then((() => Vt(62073)))])) : await Promise.all([Vt.e(325).then((() => Vt(62081))), Vt.e(324).then((() => Vt(62088)))]), this._shadersLoaded = !0
      }
      isReady(tt, et) {
        if (!this._shadersLoaded) return !1;
        const Vt = tt.vf();
        if (Vt && Vt.disableDepthWrite) return !1;
        if (function(tt) {
            return tt._isGaussianSplatting || "GaussianSplattingMesh" === (et = tt.getClassName()) || "GaussianSplattingStream" === et;
            var et
          }(tt.getMesh())) return !1;
        const Ot = [],
          qt = [ot.m.PositionKind],
          Dt = tt.getMesh();
        Dt.isVerticesDataPresent(ot.m.NormalKind) && (Ot.push("#define HAS_NORMAL_ATTRIBUTE"), qt.push(ot.m.NormalKind));
        let mt = !1,
          dt = !1;
        if (Vt) {
          let tt = !1;
          if (Vt.needAlphaTestingForMesh(Dt) && Vt.getAlphaTestTexture() && (Ot.push("#define ALPHATEST"), Ot.push(`#define ALPHATEST_UV${Vt.getAlphaTestTexture().coordinatesIndex+1}`), tt = !0), (Vt.bumpTexture || Vt.normalTexture || Vt.geometryNormalTexture) && gt.e.BumpTextureEnabled) {
            const et = Vt.bumpTexture || Vt.normalTexture || Vt.geometryNormalTexture;
            Ot.push("#define BUMP"), Ot.push(`#define BUMP_UV${et.coordinatesIndex+1}`), tt = !0
          }
          if (this._enableReflectivity) {
            let et = !1;
            if ("PBRMetallicRoughnessMaterial" === Vt.getClassName()) Vt.metallicRoughnessTexture && (Ot.push("#define ORMTEXTURE"), Ot.push(`#define REFLECTIVITY_UV${Vt.metallicRoughnessTexture.coordinatesIndex+1}`), Ot.push("#define METALLICWORKFLOW"), tt = !0, et = !0), null != Vt.metallic && (Ot.push("#define METALLIC"), Ot.push("#define METALLICWORKFLOW"), et = !0), null != Vt.roughness && (Ot.push("#define ROUGHNESS"), Ot.push("#define METALLICWORKFLOW"), et = !0), et && (Vt.baseTexture && (Ot.push("#define ALBEDOTEXTURE"), Ot.push(`#define ALBEDO_UV${Vt.baseTexture.coordinatesIndex+1}`), Vt.baseTexture.gammaSpace && Ot.push("#define GAMMAALBEDO"), tt = !0), Vt.baseColor && Ot.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === Vt.getClassName()) Vt.specularGlossinessTexture ? (Ot.push("#define SPECULARGLOSSINESSTEXTURE"), Ot.push(`#define REFLECTIVITY_UV${Vt.specularGlossinessTexture.coordinatesIndex+1}`), tt = !0, Vt.specularGlossinessTexture.gammaSpace && Ot.push("#define GAMMAREFLECTIVITYTEXTURE")) : Vt.specularColor && Ot.push("#define REFLECTIVITYCOLOR"), null != Vt.glossiness && Ot.push("#define GLOSSINESS");
            else if ("PBRMaterial" === Vt.getClassName()) Vt.metallicTexture && (Ot.push("#define ORMTEXTURE"), Ot.push(`#define REFLECTIVITY_UV${Vt.metallicTexture.coordinatesIndex+1}`), Ot.push("#define METALLICWORKFLOW"), tt = !0, et = !0), null != Vt.metallic && (Ot.push("#define METALLIC"), Ot.push("#define METALLICWORKFLOW"), et = !0), null != Vt.roughness && (Ot.push("#define ROUGHNESS"), Ot.push("#define METALLICWORKFLOW"), et = !0), et ? (Vt.albedoTexture && (Ot.push("#define ALBEDOTEXTURE"), Ot.push(`#define ALBEDO_UV${Vt.albedoTexture.coordinatesIndex+1}`), Vt.albedoTexture.gammaSpace && Ot.push("#define GAMMAALBEDO"), tt = !0), Vt.albedoColor && Ot.push("#define ALBEDOCOLOR")) : (Vt.reflectivityTexture ? (Ot.push("#define SPECULARGLOSSINESSTEXTURE"), Ot.push(`#define REFLECTIVITY_UV${Vt.reflectivityTexture.coordinatesIndex+1}`), Vt.reflectivityTexture.gammaSpace && Ot.push("#define GAMMAREFLECTIVITYTEXTURE"), tt = !0) : Vt.reflectivityColor && Ot.push("#define REFLECTIVITYCOLOR"), null != Vt.microSurface && Ot.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === Vt.getClassName()) Vt.specularTexture && (Ot.push("#define REFLECTIVITYTEXTURE"), Ot.push(`#define REFLECTIVITY_UV${Vt.specularTexture.coordinatesIndex+1}`), Vt.specularTexture.gammaSpace && Ot.push("#define GAMMAREFLECTIVITYTEXTURE"), tt = !0), Vt.specularColor && Ot.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === Vt.getClassName()) {
              const et = Vt;
              Ot.push("#define METALLIC"), Ot.push("#define ROUGHNESS"), et._useRoughnessFromMetallicTextureGreen && et.baseMetalnessTexture ? (Ot.push("#define ORMTEXTURE"), Ot.push(`#define REFLECTIVITY_UV${et.baseMetalnessTexture.coordinatesIndex+1}`), tt = !0) : et.baseMetalnessTexture ? (Ot.push("#define METALLIC_TEXTURE"), Ot.push(`#define METALLIC_UV${et.baseMetalnessTexture.coordinatesIndex+1}`), tt = !0) : et.specularRoughnessTexture && (Ot.push("#define ROUGHNESS_TEXTURE"), Ot.push(`#define ROUGHNESS_UV${et.specularRoughnessTexture.coordinatesIndex+1}`), tt = !0), et.baseColorTexture && (Ot.push("#define ALBEDOTEXTURE"), Ot.push(`#define ALBEDO_UV${et.baseColorTexture.coordinatesIndex+1}`), et.baseColorTexture.gammaSpace && Ot.push("#define GAMMAALBEDO"), tt = !0), et.baseColor && Ot.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (Ot.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === Vt.getClassName())) {
            const et = Vt;
            et.subsurfaceWeight > 0 && et.subsurfaceWeightTexture && (Ot.push("#define SUBSURFACE_WEIGHT"), Ot.push(`#define SUBSURFACEWEIGHT_UV${et.subsurfaceWeightTexture.coordinatesIndex+1}`), tt = !0), et.transmissionWeight > 0 && et.transmissionWeightTexture && (Ot.push("#define TRANSMISSION_WEIGHT"), Ot.push(`#define TRANSMISSIONWEIGHT_UV${et.transmissionWeightTexture.coordinatesIndex+1}`), tt = !0)
          }
          tt && (Ot.push("#define NEED_UV"), Dt.isVerticesDataPresent(ot.m.UVKind) && (qt.push(ot.m.UVKind), Ot.push("#define UV1"), mt = !0), Dt.isVerticesDataPresent(ot.m.UV2Kind) && (qt.push(ot.m.UV2Kind), Ot.push("#define UV2"), dt = !0))
        }
        if (this._enableDepth && (Ot.push("#define DEPTH"), Ot.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (Ot.push("#define NORMAL"), Ot.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (Ot.push("#define POSITION"), Ot.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (Ot.push("#define VELOCITY"), Ot.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(Dt) && Ot.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (Ot.push("#define VELOCITY_LINEAR"), Ot.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(Dt) && Ot.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (Ot.push("#define REFLECTIVITY"), Ot.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (Ot.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), Ot.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          Ot.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), Ot.push("#define IRRADIANCE");
          const tt = this._scene;
          if (tt.environmentTexture) {
            const et = {};
            let qt = !1,
              Dt = 0;
            "OpenPBRMaterial" !== Vt.getClassName() && "StandardMaterial" !== Vt.getClassName() && "PBRMetallicRoughnessMaterial" !== Vt.getClassName() && "PBRSpecularGlossinessMaterial" !== Vt.getClassName() && "PBRMaterial" !== Vt.getClassName() || (qt = !!Vt.realtimeFiltering, Dt = Vt.realtimeFilteringQuality || 0), (0, nt.X)(tt, tt.environmentTexture, et, qt, Dt, !0);
            for (const tt in et) et[tt] && Ot.push("#define " + tt);
            et.USEIRRADIANCEMAP || Ot.push("#define SPHERICAL_HARMONICS");
            const mt = tt.postProcessRenderPipelineManager.supportedPipelines.find((tt => "IBLShadowsRenderPipeline" === tt.getClassName()));
            if (mt) {
              const tt = mt;
              tt._getAccumulatedTexture() && (Ot.push("#define IBL_SHADOW_TEXTURE"), tt.coloredShadows && Ot.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (Ot.push("#define OBJECT_ID"), Ot.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (Ot.push("#define MESH_BLEND_TAG"), Ot.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && Ot.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && Ot.push("#define ENCODE_NORMAL"), Dt.useBones && Dt.computeBonesUsingShaders && Dt.skeleton ? (qt.push(ot.m.MatricesIndicesKind), qt.push(ot.m.MatricesWeightsKind), Dt.numBoneInfluencers > 4 && (qt.push(ot.m.MatricesIndicesExtraKind), qt.push(ot.m.MatricesWeightsExtraKind)), Ot.push("#define NUM_BONE_INFLUENCERS " + Dt.numBoneInfluencers), Ot.push("#define BONETEXTURE " + Dt.skeleton.isUsingTextureForMatrices), Ot.push("#define BonesPerMesh " + (Dt.skeleton.bones.length + 1))) : (Ot.push("#define NUM_BONE_INFLUENCERS 0"), Ot.push("#define BONETEXTURE false"), Ot.push("#define BonesPerMesh 0"));
        const jt = Dt.morphTargetManager ? (0, nt.O)(Dt.morphTargetManager, Ot, qt, Dt, !0, !0, !1, mt, dt, !1) : 0;
        et && (Ot.push("#define INSTANCES"), (0, nt.pb)(qt, this._enableVelocity || this._enableVelocityLinear), tt.getRenderingMesh().hasThinInstances && Ot.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? Ot.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : Ot.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, Qe.j)(Vt, this._scene, Ot);
        const Ht = this._scene.Jf(),
          Xt = tt._getDrawWrapper(void 0, !0),
          Qt = Xt.defines,
          lt = Ot.join("\n");
        return Qt !== lt && Xt.setEffect(Ht.createEffect("geometry", {
          attributes: qt,
          uniformsNames: oe,
          samplers: ze,
          defines: lt,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: jt
          },
          shaderLanguage: this.shaderLanguage
        }, Ht), lt), Xt.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(tt) {
        if (this._enableObjectId && 1 !== tt) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== tt) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = tt
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.Jf().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.Fw.Jf()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.Fw.Jf().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const tt = [],
          et = [];
        let Vt = 0;
        return this._enableDepth && (this._depthIndex = Vt, Vt++, tt.push("gBuffer_Depth"), et.push(this._textureTypesAndFormats[re.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = Vt, Vt++, tt.push("gBuffer_Normal"), et.push(this._textureTypesAndFormats[re.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = Vt, Vt++, tt.push("gBuffer_Position"), et.push(this._textureTypesAndFormats[re.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = Vt, Vt++, tt.push("gBuffer_Velocity"), et.push(this._textureTypesAndFormats[re.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = Vt, Vt++, tt.push("gBuffer_VelocityLinear"), et.push(this._textureTypesAndFormats[re.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = Vt, Vt++, tt.push("gBuffer_Reflectivity"), et.push(this._textureTypesAndFormats[re.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = Vt, Vt++, tt.push("gBuffer_ScreenspaceDepth"), et.push(this._textureTypesAndFormats[re.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = Vt, Vt++, tt.push("gBuffer_Irradiance"), et.push(this._textureTypesAndFormats[re.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = Vt, Vt++, tt.push("gBuffer_ObjectId"), et.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = Vt, Vt++, tt.push("gBuffer_MeshBlendTag"), et.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [Vt, tt, et]
      }
      _createRenderTargets() {
        const tt = this._scene.Jf(),
          [et, Vt, Ot] = this._assignRenderTargetIndices(),
          qt = Math.min(tt.getCaps().maxDrawBuffers ?? 1, 8);
        if (tt.getCaps().drawBuffersExtension && et > qt) throw new Error(`GeometryBufferRenderer: ${et} color attachments were requested, but this engine supports at most ${qt}`);
        let mt = 0;
        tt._caps.textureFloat && tt._caps.textureFloatLinearFiltering ? mt = 1 : tt._caps.textureHalfFloat && tt._caps.textureHalfFloatLinearFiltering && (mt = 2);
        const dt = this._getRenderTargetDimensions(),
          jt = [],
          Ht = [],
          Xt = [];
        for (const Dt of Ot) Dt ? (jt.push(Dt.textureType), Ht.push(Dt.textureFormat), Xt.push(Dt.samplingMode ?? 2)) : (jt.push(mt), Ht.push(5), Xt.push(2));
        if (this._normalsAreUnsigned = 11 === jt[re.NORMAL_TEXTURE_TYPE] || 13 === jt[re.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new Ze("gBuffer", dt, et, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: jt,
            formats: Ht,
            samplingModes: Xt,
            depthTextureFormat: this._depthFormat
          }, Vt.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = Rt.f.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = Rt.f.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const Qt = [!0],
          lt = [!1],
          Et = [!0];
        for (let Dt = 1; Dt < et; ++Dt) Qt.push(!0), Et.push(!1), lt.push(!0);
        const ft = tt.buildTextureLayout(Qt),
          wt = tt.buildTextureLayout(lt),
          yt = tt.buildTextureLayout(Et);
        this._multiRenderTarget.onClearObservable.add((tt => {
          const et = this.useSpecificClearForDepthTexture ? wt : ft;
          tt.clearAttachments(this._clearColor, et, !0, !0, !0), this.useSpecificClearForDepthTexture && tt.clearAttachments(this._clearDepthColor, yt, !0, !1, !1), tt.bindAttachments(ft)
        })), this._resizeObserver = tt.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const Nt = tt => {
          const et = tt.getRenderingMesh(),
            Vt = tt.getEffectiveMesh(),
            Ot = this._scene,
            qt = Ot.Jf(),
            mt = tt.vf();
          if (!mt) return;
          if (Vt._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[Vt.uniqueId] && (this._previousTransformationMatrices[Vt.uniqueId] = {
              sQ: zt.c.Identity(),
              viewProjection: Ot.getTransformMatrix()
            }, et.skeleton)) {
            const tt = et.skeleton.getTransformMatrices(et);
            this._previousBonesTransformationMatrices[et.uniqueId] = this._copyBonesTransformationMatrices(tt, new Float32Array(tt.length))
          }
          const dt = et._getInstancesRenderList(tt._id, !!tt.getReplacementMesh());
          if (dt.mustReturn) return;
          const jt = qt.getCaps().instancedArrays && (null !== dt.visibleInstances[tt._id] || et.hasThinInstances),
            Ht = Vt.getWorldMatrix();
          if (this.isReady(tt, jt)) {
            const Xt = tt._getDrawWrapper();
            if (!Xt) return;
            const Qt = Xt.effect;
            let lt;
            qt.enableEffect(Xt), jt || et._bind(tt, Qt, mt.fillMode), this._useUbo ? ((0, nt.t)(Qt, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (Qt.setMatrix("viewProjection", Ot.getTransformMatrix()), Qt.setMatrix("view", Ot.getViewMatrix()), this._scene.bindEyePosition(Qt, "vEyePosition"));
            if (et._instanceDataStorage.isFrozen || !mt.backFaceCulling && null === mt.sideOrientation) lt = et._effectiveSideOrientation;
            else {
              const tt = Vt._getWorldMatrixDeterminant();
              lt = mt._getEffectiveOrientation(et), tt < 0 && (lt = lt === Dt.c.ClockWiseSideOrientation ? Dt.c.CounterClockWiseSideOrientation : Dt.c.ClockWiseSideOrientation)
            }
            if (mt._preBind(Xt, lt), mt.needAlphaTestingForMesh(Vt)) {
              const tt = mt.getAlphaTestTexture();
              tt && (Qt.setTexture("diffuseSampler", tt), Qt.setMatrix("diffuseMatrix", tt.getTextureMatrix()), Qt.setFloat("alphaCutOff", mt.alphaCutOff ?? .4))
            }
            if ((mt.bumpTexture || mt.normalTexture || mt.geometryNormalTexture) && Ot.Jf().getCaps().standardDerivatives && gt.e.BumpTextureEnabled) {
              const tt = mt.bumpTexture || mt.normalTexture || mt.geometryNormalTexture;
              Qt.setFloat3("vBumpInfos", tt.coordinatesIndex, 1 / tt.level, mt.parallaxScaleBias), Qt.setMatrix("bumpMatrix", tt.getTextureMatrix()), Qt.setTexture("bumpSampler", tt), Qt.setFloat2("vTangentSpaceParams", mt.invertNormalMapX ? -1 : 1, mt.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === mt.getClassName()) null !== mt.metallicRoughnessTexture && (Qt.setTexture("reflectivitySampler", mt.metallicRoughnessTexture), Qt.setMatrix("reflectivityMatrix", mt.metallicRoughnessTexture.getTextureMatrix())), null !== mt.metallic && Qt.setFloat("metallic", mt.metallic), null !== mt.roughness && Qt.setFloat("glossiness", 1 - mt.roughness), null !== mt.baseTexture && (Qt.setTexture("albedoSampler", mt.baseTexture), Qt.setMatrix("albedoMatrix", mt.baseTexture.getTextureMatrix())), null !== mt.baseColor && Qt.setColor3("albedoColor", mt.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === mt.getClassName()) null !== mt.specularGlossinessTexture ? (Qt.setTexture("reflectivitySampler", mt.specularGlossinessTexture), Qt.setMatrix("reflectivityMatrix", mt.specularGlossinessTexture.getTextureMatrix())) : null !== mt.specularColor && Qt.setColor3("reflectivityColor", mt.specularColor), null !== mt.glossiness && Qt.setFloat("glossiness", mt.glossiness);
            else if ("PBRMaterial" === mt.getClassName()) null !== mt.metallicTexture && (Qt.setTexture("reflectivitySampler", mt.metallicTexture), Qt.setMatrix("reflectivityMatrix", mt.metallicTexture.getTextureMatrix())), null !== mt.metallic && Qt.setFloat("metallic", mt.metallic), null !== mt.roughness && Qt.setFloat("glossiness", 1 - mt.roughness), null !== mt.roughness || null !== mt.metallic || null !== mt.metallicTexture ? (null !== mt.albedoTexture && (Qt.setTexture("albedoSampler", mt.albedoTexture), Qt.setMatrix("albedoMatrix", mt.albedoTexture.getTextureMatrix())), null !== mt.albedoColor && Qt.setColor3("albedoColor", mt.albedoColor)) : (null !== mt.reflectivityTexture ? (Qt.setTexture("reflectivitySampler", mt.reflectivityTexture), Qt.setMatrix("reflectivityMatrix", mt.reflectivityTexture.getTextureMatrix())) : null !== mt.reflectivityColor && Qt.setColor3("reflectivityColor", mt.reflectivityColor), null !== mt.microSurface && Qt.setFloat("glossiness", mt.microSurface));
            else if ("StandardMaterial" === mt.getClassName()) null !== mt.specularTexture && (Qt.setTexture("reflectivitySampler", mt.specularTexture), Qt.setMatrix("reflectivityMatrix", mt.specularTexture.getTextureMatrix())), null !== mt.specularColor && Qt.setColor3("reflectivityColor", mt.specularColor);
            else if ("OpenPBRMaterial" === mt.getClassName()) {
              const tt = mt;
              tt._useRoughnessFromMetallicTextureGreen && tt.baseMetalnessTexture ? (Qt.setTexture("reflectivitySampler", tt.baseMetalnessTexture), Qt.setMatrix("reflectivityMatrix", tt.baseMetalnessTexture.getTextureMatrix())) : tt.baseMetalnessTexture ? (Qt.setTexture("metallicSampler", tt.baseMetalnessTexture), Qt.setMatrix("metallicMatrix", tt.baseMetalnessTexture.getTextureMatrix())) : tt.specularRoughnessTexture && (Qt.setTexture("roughnessSampler", tt.specularRoughnessTexture), Qt.setMatrix("roughnessMatrix", tt.specularRoughnessTexture.getTextureMatrix())), Qt.setFloat("metallic", tt.baseMetalness), Qt.setFloat("glossiness", 1 - tt.specularRoughness), null !== tt.baseColorTexture && (Qt.setTexture("albedoSampler", tt.baseColorTexture), Qt.setMatrix("albedoMatrix", tt.baseColorTexture.getTextureMatrix())), null !== tt.baseColor && Qt.setColor3("albedoColor", tt.baseColor)
            }
            if (this._enableIrradiance && Ot.environmentTexture) {
              const tt = Ot.environmentTexture,
                et = Ot.postProcessRenderPipelineManager.supportedPipelines.find((tt => "IBLShadowsRenderPipeline" === tt.getClassName()));
              if (et) {
                const tt = et._getAccumulatedTexture();
                tt && (Qt.setTexture("iblShadowSampler", tt), Qt.setFloat2("shadowTextureSize", tt.getSize().width, tt.getSize().height))
              }
              if (Qt.setMatrix("reflectionMatrix", tt.getReflectionTextureMatrix()), Qt.setFloat2("vReflectionInfos", tt.level * Ot.iblIntensity, 0), Qt.setTexture("reflectionSampler", tt), tt.irradianceTexture && (Qt.setTexture("irradianceSampler", tt.irradianceTexture), tt.irradianceTexture._dominantDirection && Qt.setVector3("vReflectionDominantDirection", tt.irradianceTexture._dominantDirection)), tt.sphericalPolynomial) {
                const et = tt.sphericalPolynomial;
                if (et.preScaledHarmonics) {
                  const tt = et.preScaledHarmonics;
                  Qt.setVector3("vSphericalL00", tt.l00), Qt.setVector3("vSphericalL1_1", tt.l1_1), Qt.setVector3("vSphericalL10", tt.l10), Qt.setVector3("vSphericalL11", tt.l11), Qt.setVector3("vSphericalL2_2", tt.l2_2), Qt.setVector3("vSphericalL2_1", tt.l2_1), Qt.setVector3("vSphericalL20", tt.l20), Qt.setVector3("vSphericalL21", tt.l21), Qt.setVector3("vSphericalL22", tt.l22)
                } else Qt.setFloat3("vSphericalX", et.x.x, et.x.y, et.x.z), Qt.setFloat3("vSphericalY", et.y.x, et.y.y, et.y.z), Qt.setFloat3("vSphericalZ", et.z.x, et.z.y, et.z.z), Qt.setFloat3("vSphericalXX_ZZ", et.xx.x - et.zz.x, et.xx.y - et.zz.y, et.xx.z - et.zz.z), Qt.setFloat3("vSphericalYY_ZZ", et.yy.x - et.zz.x, et.yy.y - et.zz.y, et.yy.z - et.zz.z), Qt.setFloat3("vSphericalZZ", et.zz.x, et.zz.y, et.zz.z), Qt.setFloat3("vSphericalXY", et.xy.x, et.xy.y, et.xy.z), Qt.setFloat3("vSphericalYZ", et.yz.x, et.yz.y, et.yz.z), Qt.setFloat3("vSphericalZX", et.zx.x, et.zx.y, et.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === mt.getClassName()) {
                const tt = mt;
                Qt.setFloat("vSubsurfaceWeight", tt.subsurfaceWeight), tt.subsurfaceWeightTexture && (Qt.setTexture("subsurfaceWeightSampler", tt.subsurfaceWeightTexture), Qt.setMatrix("subsurfaceWeightMatrix", tt.subsurfaceWeightTexture.getTextureMatrix())), Qt.setFloat("vTransmissionWeight", tt.transmissionWeight), tt.transmissionWeightTexture && (Qt.setTexture("transmissionWeightSampler", tt.transmissionWeightTexture), Qt.setMatrix("transmissionWeightMatrix", tt.transmissionWeightTexture.getTextureMatrix())), Qt.setFloat("vTransmissionScatterAnisotropy", tt.transmissionScatterAnisotropy), Qt.setFloat("vSubsurfaceScatterAnisotropy", tt.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, Qe.f)(Qt, mt, this._scene), et.useBones && et.computeBonesUsingShaders && et.skeleton) {
              const tt = et.skeleton;
              if (tt.isUsingTextureForMatrices && Qt.getUniformIndex("boneTextureInfo") > -1) {
                const Vt = tt.getTransformMatrixTexture(et);
                Qt.setTexture("boneSampler", Vt), Qt.setFloat2("boneTextureInfo", tt._textureWidth, tt._textureHeight)
              } else Qt.setMatrices("mBones", et.skeleton.getTransformMatrices(et));
              (this._enableVelocity || this._enableVelocityLinear) && Qt.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[et.uniqueId])
            }
            if ((0, nt.r)(et, Qt), et.morphTargetManager && et.morphTargetManager.isUsingTextureForTargets && et.morphTargetManager._bind(Qt), (this._enableVelocity || this._enableVelocityLinear) && (Qt.setMatrix("previousWorld", this._previousTransformationMatrices[Vt.uniqueId].sQ), Qt.setMatrix("previousViewProjection", this._previousTransformationMatrices[Vt.uniqueId].viewProjection)), this._enableObjectId) {
              let tt = et.uniqueId;
              if (this.objectIdProvider) tt = (0, fe.h)(et, this.objectIdProvider);
              else if (tt > 16777215) throw new Error(`Invalid geometry object ID ${tt} for mesh "${et.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              Qt.setFloat("objectId", tt)
            }
            if (this._enableMeshBlendTag) {
              const tt = this.meshBlendTagProvider ? (0, fe.e)(et, this.meshBlendTagProvider) : et.meshBlendingTag;
              Qt.setInt("meshBlendTag", tt)
            }
            jt && et.hasThinInstances && Qt.setMatrix("world", Ht), et._processRendering(Vt, tt, Qt, mt.fillMode, dt, jt, ((tt, et) => {
              tt || Qt.setMatrix("world", et)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[Vt.uniqueId].sQ = Ht.clone(), this._previousTransformationMatrices[Vt.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), et.skeleton && this._copyBonesTransformationMatrices(et.skeleton.getTransformMatrices(et), this._previousBonesTransformationMatrices[Vt.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (et, Vt, Ot) => {
          if ((Ot || 0 === Vt) && et.vJ)
            for (let qt = 0; qt < et.vJ.length; ++qt) {
              const Vt = et.vJ[qt],
                Ot = Vt.vf(),
                Dt = Vt.getRenderingMesh();
              if (!Ot) continue;
              const mt = Dt._getInstancesRenderList(Vt._id, !!Vt.getReplacementMesh()),
                dt = tt.getCaps().instancedArrays && (null !== mt.visibleInstances[Vt._id] || Dt.hasThinInstances);
              if (!this.isReady(Vt, dt)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (et, Vt, Ot, qt) => {
          let Dt;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.Jf().bindAttachments(this._attachmentsFromPrePass)
          }
          if (qt.length) {
            for (tt.setColorWrite(!1), Dt = 0; Dt < qt.length; Dt++) Nt(qt.data[Dt]);
            tt.setColorWrite(!0)
          }
          for (Dt = 0; Dt < et.length; Dt++) Nt(et.data[Dt]);
          for (tt.setDepthWrite(!1), Dt = 0; Dt < Vt.length; Dt++) Nt(Vt.data[Dt]);
          if (this.renderTransparentMeshes)
            for (Dt = 0; Dt < Ot.length; Dt++) Nt(Ot.data[Dt]);
          tt.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const tt = this._scene.Jf();
        return {
          width: Math.max(1, Math.floor(tt.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(tt.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(tt, et) {
        for (let Vt = 0; Vt < tt.length; Vt++) et[Vt] = tt[Vt];
        return et
      }
    }
    re.ForceGLSL = !1, re.DEPTH_TEXTURE_TYPE = 0, re.NORMAL_TEXTURE_TYPE = 1, re.POSITION_TEXTURE_TYPE = 2, re.VELOCITY_TEXTURE_TYPE = 3, re.REFLECTIVITY_TEXTURE_TYPE = 4, re.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, re.VELOCITY_LINEAR_TEXTURE_TYPE = 6, re.IRRADIANCE_TEXTURE_TYPE = 7, re.OBJECT_ID_TEXTURE_TYPE = 8, re.MESH_BLEND_TAG_TEXTURE_TYPE = 9, re._SceneComponentInitialization = tt => {
      throw (0, ae.e)("GeometryBufferRendererSceneComponent")
    };
    var Ue = Vt(37390);
    const Ae = {
      effect: null,
      subMesh: null
    };

    function ie(tt) {
      if ("number" === typeof tt) return 1;
      if (tt instanceof zt.m) return 2;
      if (tt instanceof zt.n || tt instanceof Bt.b) return 3;
      if (tt instanceof zt.r || tt instanceof Bt.c) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class Ye {
      populateVectorFromLinkedProperties(tt) {
        const et = ie(tt);
        for (const Vt in this.linkedProperties) {
          const tt = this.linkedProperties[Vt],
            Ot = tt.numComponents;
          if (et < Ot || tt.targetUniformComponentOffset > et - Ot) return void(1 == Ot ? St.d.Error(`Float property ${tt.name} has an offset that is too large.`) : St.d.Error(`Vector${Ot} property ${tt.name} won't fit in Vector${et} or has an offset that is too large.`));
          "number" === typeof tt.value ? Ye._tmpArray[tt.targetUniformComponentOffset] = tt.value : tt.value.toArray(Ye._tmpArray, tt.targetUniformComponentOffset)
        }
        tt.vVt(Ye._tmpArray)
      }
      constructor(tt, et) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = tt, this.numComponents = et
      }
    }
    Ye._tmpArray = [0, 0, 0, 0];
    class Be {
      constructor(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Dt = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = tt, this.targetUniformName = Vt, this.defaultValue = et, this.value = et, this.targetUniformComponentNum = Ot, this.targetUniformComponentOffset = qt, this.requiredDefine = Dt
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : ie(this.defaultValue)
      }
    }
    class pe {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(tt, et, Vt) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = tt, this.samplerPrefix = et, this.textureDefine = Vt
      }
    }
    class xe extends((0, ye.b)((0, we.e)(rt.e))) {}
    class Te extends(function(tt) {
      return class extends tt {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(xe)) {}
    class ge extends((0, pt.e)(Te)) {
      constructor(tt) {
        super(tt), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class se extends((0, Ne.c)(Tt.e)) {}
    let ne = (() => {
        var tt, et, Ot, qt, mt, dt, jt, Ht, Xt, Qt, lt, Et, ft, wt, yt, Nt, Mt, bt, Jt, Ct, ut, Kt, ht, It, Pt, Zt, Lt, Gt, rt, Ut, At, it, pt, Tt, te, ee, Ve, Oe, qe, De, me, de, je, He, Xe, we, ye, Ne, ae, Me, be, Je, Ce, ue, ve, We, Se, ce, Re, Ie, Pe, Ze, Le, Fe, ke, Ge, ze, oe, Ue, ie, xe, Te, ne, tV, eV, VV, OV, qV, DV, mV, dV, jV, HV, XV, QV, lV, EV, fV, wV, yV, NV, aV, MV, bV, JV, CV, uV, KV, hV, vV, WV, SV, cV;
        let RV, IV, PV, ZV, LV, FV, kV, GV, zV, oV, rV, UV, AV, iV, YV, BV, pV, xV, TV, gV, sV, nV, tO, eO, VO, OO, qO, DO, mO, dO, jO, HO, XO, QO, lO, EO, fO, wO, yO, NO, aO, MO, bO, JO, CO, uO, KO, hO, vO, WO, SO, cO, RO, IO, PO, ZO, LO, FO, kO, GO, zO, oO, rO, UO, AO, iO, YO, BO, pO, xO, TO, gO, sO, nO, tq, eq, Vq, Oq, qq, Dq, mq, dq, jq, Hq, Xq, Qq, lq, Eq, fq, wq, yq, Nq, aq, Mq, bq, Jq, Cq, uq, Kq, hq, vq, Wq, Sq, cq, Rq, Iq = se,
          Pq = [],
          Zq = [],
          Lq = [],
          Fq = [],
          kq = [],
          Gq = [],
          zq = [],
          oq = [],
          rq = [],
          Uq = [],
          Aq = [],
          iq = [],
          Yq = [],
          Bq = [],
          pq = [],
          xq = [],
          Tq = [],
          gq = [],
          sq = [],
          nq = [],
          tD = [],
          eD = [],
          VD = [],
          OD = [],
          qD = [],
          DD = [],
          mD = [],
          dD = [],
          jD = [],
          HD = [],
          XD = [],
          QD = [],
          lD = [],
          ED = [],
          fD = [],
          wD = [],
          yD = [],
          ND = [],
          aD = [],
          MD = [],
          bD = [],
          JD = [],
          CD = [],
          uD = [],
          KD = [],
          hD = [],
          vD = [],
          WD = [],
          SD = [],
          cD = [],
          RD = [],
          ID = [],
          PD = [],
          ZD = [],
          LD = [],
          FD = [],
          kD = [],
          GD = [],
          zD = [],
          oD = [],
          rD = [],
          UD = [],
          AD = [],
          iD = [],
          YD = [],
          BD = [],
          pD = [],
          xD = [],
          TD = [],
          gD = [],
          sD = [],
          nD = [],
          tm = [],
          em = [],
          Vm = [],
          Om = [],
          qm = [],
          Dm = [],
          mm = [],
          dm = [],
          jm = [],
          Hm = [],
          Xm = [],
          Qm = [],
          lm = [],
          Em = [],
          fm = [],
          wm = [],
          ym = [],
          Nm = [],
          am = [],
          Mm = [],
          bm = [],
          Jm = [],
          Cm = [],
          um = [],
          Km = [],
          hm = [],
          Wm = [],
          Sm = [],
          cm = [],
          Rm = [],
          Im = [],
          Pm = [],
          Zm = [],
          Lm = [],
          Fm = [],
          km = [],
          Gm = [],
          zm = [],
          om = [],
          rm = [],
          Um = [],
          Am = [],
          im = [],
          Ym = [],
          Bm = [],
          pm = [],
          xm = [],
          Tm = [],
          gm = [],
          sm = [],
          nm = [],
          td = [],
          ed = [],
          Vd = [],
          Od = [],
          qd = [],
          Dd = [],
          md = [],
          dd = [],
          jd = [],
          Hd = [],
          Xd = [],
          Qd = [],
          ld = [],
          Ed = [],
          fd = [],
          wd = [],
          yd = [],
          Nd = [],
          Md = [],
          bd = [],
          Jd = [],
          Cd = [],
          ud = [],
          Kd = [],
          hd = [],
          vd = [],
          Wd = [],
          Sd = [],
          cd = [],
          Rd = [],
          Id = [],
          Pd = [],
          Zd = [],
          Ld = [],
          Fd = [],
          kd = [],
          Gd = [],
          zd = [],
          od = [],
          rd = [],
          Ud = [],
          Ad = [],
          Yd = [],
          Bd = [],
          pd = [],
          xd = [],
          Td = [],
          gd = [],
          sd = [],
          nd = [],
          tj = [],
          ej = [],
          Vj = [],
          Oj = [],
          qj = [],
          Dj = [],
          mj = [],
          dj = [],
          jj = [],
          Hj = [],
          Xj = [],
          Qj = [],
          lj = [],
          Ej = [],
          fj = [],
          wj = [],
          yj = [],
          Nj = [],
          aj = [],
          Mj = [],
          bj = [],
          Jj = [],
          Cj = [],
          uj = [],
          Kj = [],
          hj = [],
          vj = [],
          Wj = [],
          Sj = [],
          cj = [],
          Rj = [],
          Ij = [];
        return tt = class extends Iq {
          get baseWeight() {
            return (0, vt.e)(this, et, "f")
          }
          set baseWeight(tt) {
            (0, vt.i)(this, et, tt, "f")
          }
          get baseWeightTexture() {
            return (0, vt.e)(this, Ot, "f")
          }
          set baseWeightTexture(tt) {
            (0, vt.i)(this, Ot, tt, "f")
          }
          get baseColor() {
            return (0, vt.e)(this, qt, "f")
          }
          set baseColor(tt) {
            (0, vt.i)(this, qt, tt, "f")
          }
          get baseColorTexture() {
            return (0, vt.e)(this, mt, "f")
          }
          set baseColorTexture(tt) {
            (0, vt.i)(this, mt, tt, "f")
          }
          get baseDiffuseRoughness() {
            return (0, vt.e)(this, dt, "f")
          }
          set baseDiffuseRoughness(tt) {
            (0, vt.i)(this, dt, tt, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, vt.e)(this, jt, "f")
          }
          set baseDiffuseRoughnessTexture(tt) {
            (0, vt.i)(this, jt, tt, "f")
          }
          get baseMetalness() {
            return (0, vt.e)(this, Ht, "f")
          }
          set baseMetalness(tt) {
            (0, vt.i)(this, Ht, tt, "f")
          }
          get baseMetalnessTexture() {
            return (0, vt.e)(this, Xt, "f")
          }
          set baseMetalnessTexture(tt) {
            (0, vt.i)(this, Xt, tt, "f")
          }
          get specularWeight() {
            return (0, vt.e)(this, Qt, "f")
          }
          set specularWeight(tt) {
            (0, vt.i)(this, Qt, tt, "f")
          }
          get specularWeightTexture() {
            return (0, vt.e)(this, lt, "f")
          }
          set specularWeightTexture(tt) {
            (0, vt.i)(this, lt, tt, "f")
          }
          get specularColor() {
            return (0, vt.e)(this, Et, "f")
          }
          set specularColor(tt) {
            (0, vt.i)(this, Et, tt, "f")
          }
          get specularColorTexture() {
            return (0, vt.e)(this, ft, "f")
          }
          set specularColorTexture(tt) {
            (0, vt.i)(this, ft, tt, "f")
          }
          get specularRoughness() {
            return (0, vt.e)(this, wt, "f")
          }
          set specularRoughness(tt) {
            (0, vt.i)(this, wt, tt, "f")
          }
          get specularRoughnessTexture() {
            return (0, vt.e)(this, yt, "f")
          }
          set specularRoughnessTexture(tt) {
            (0, vt.i)(this, yt, tt, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, vt.e)(this, Nt, "f")
          }
          set specularRoughnessAnisotropy(tt) {
            (0, vt.i)(this, Nt, tt, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, vt.e)(this, Mt, "f")
          }
          set specularRoughnessAnisotropyTexture(tt) {
            (0, vt.i)(this, Mt, tt, "f")
          }
          get specularIor() {
            return (0, vt.e)(this, bt, "f")
          }
          set specularIor(tt) {
            (0, vt.i)(this, bt, tt, "f")
          }
          get transmissionWeight() {
            return (0, vt.e)(this, Jt, "f")
          }
          set transmissionWeight(tt) {
            (0, vt.i)(this, Jt, tt, "f")
          }
          get transmissionWeightTexture() {
            return (0, vt.e)(this, Ct, "f")
          }
          set transmissionWeightTexture(tt) {
            (0, vt.i)(this, Ct, tt, "f")
          }
          get transmissionColor() {
            return (0, vt.e)(this, ut, "f")
          }
          set transmissionColor(tt) {
            (0, vt.i)(this, ut, tt, "f")
          }
          get transmissionColorTexture() {
            return (0, vt.e)(this, Kt, "f")
          }
          set transmissionColorTexture(tt) {
            (0, vt.i)(this, Kt, tt, "f")
          }
          get transmissionDepth() {
            return (0, vt.e)(this, ht, "f")
          }
          set transmissionDepth(tt) {
            (0, vt.i)(this, ht, tt, "f")
          }
          get transmissionDepthTexture() {
            return (0, vt.e)(this, It, "f")
          }
          set transmissionDepthTexture(tt) {
            (0, vt.i)(this, It, tt, "f")
          }
          get transmissionScatter() {
            return (0, vt.e)(this, Pt, "f")
          }
          set transmissionScatter(tt) {
            (0, vt.i)(this, Pt, tt, "f")
          }
          get transmissionScatterTexture() {
            return (0, vt.e)(this, Zt, "f")
          }
          set transmissionScatterTexture(tt) {
            (0, vt.i)(this, Zt, tt, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, vt.e)(this, Lt, "f")
          }
          set transmissionScatterAnisotropy(tt) {
            (0, vt.i)(this, Lt, tt, "f")
          }
          get transmissionDispersionScale() {
            return (0, vt.e)(this, Gt, "f")
          }
          set transmissionDispersionScale(tt) {
            (0, vt.i)(this, Gt, tt, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, vt.e)(this, rt, "f")
          }
          set transmissionDispersionScaleTexture(tt) {
            (0, vt.i)(this, rt, tt, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, vt.e)(this, Ut, "f")
          }
          set transmissionDispersionAbbeNumber(tt) {
            (0, vt.i)(this, Ut, tt, "f")
          }
          get subsurfaceWeight() {
            return (0, vt.e)(this, At, "f")
          }
          set subsurfaceWeight(tt) {
            (0, vt.i)(this, At, tt, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, vt.e)(this, it, "f")
          }
          set subsurfaceWeightTexture(tt) {
            (0, vt.i)(this, it, tt, "f")
          }
          get subsurfaceColor() {
            return (0, vt.e)(this, pt, "f")
          }
          set subsurfaceColor(tt) {
            (0, vt.i)(this, pt, tt, "f")
          }
          get subsurfaceColorTexture() {
            return (0, vt.e)(this, Tt, "f")
          }
          set subsurfaceColorTexture(tt) {
            (0, vt.i)(this, Tt, tt, "f")
          }
          get subsurfaceRadius() {
            return (0, vt.e)(this, te, "f")
          }
          set subsurfaceRadius(tt) {
            (0, vt.i)(this, te, tt, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, vt.e)(this, ee, "f")
          }
          set subsurfaceRadiusScale(tt) {
            (0, vt.i)(this, ee, tt, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, vt.e)(this, Ve, "f")
          }
          set subsurfaceRadiusScaleTexture(tt) {
            (0, vt.i)(this, Ve, tt, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, vt.e)(this, Oe, "f")
          }
          set subsurfaceScatterAnisotropy(tt) {
            (0, vt.i)(this, Oe, tt, "f")
          }
          get coatWeight() {
            return (0, vt.e)(this, qe, "f")
          }
          set coatWeight(tt) {
            (0, vt.i)(this, qe, tt, "f")
          }
          get coatWeightTexture() {
            return (0, vt.e)(this, De, "f")
          }
          set coatWeightTexture(tt) {
            (0, vt.i)(this, De, tt, "f")
          }
          get coatColor() {
            return (0, vt.e)(this, me, "f")
          }
          set coatColor(tt) {
            (0, vt.i)(this, me, tt, "f")
          }
          get coatColorTexture() {
            return (0, vt.e)(this, de, "f")
          }
          set coatColorTexture(tt) {
            (0, vt.i)(this, de, tt, "f")
          }
          get coatRoughness() {
            return (0, vt.e)(this, je, "f")
          }
          set coatRoughness(tt) {
            (0, vt.i)(this, je, tt, "f")
          }
          get coatRoughnessTexture() {
            return (0, vt.e)(this, He, "f")
          }
          set coatRoughnessTexture(tt) {
            (0, vt.i)(this, He, tt, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, vt.e)(this, Xe, "f")
          }
          set coatRoughnessAnisotropy(tt) {
            (0, vt.i)(this, Xe, tt, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, vt.e)(this, we, "f")
          }
          set coatRoughnessAnisotropyTexture(tt) {
            (0, vt.i)(this, we, tt, "f")
          }
          get coatIor() {
            return (0, vt.e)(this, ye, "f")
          }
          set coatIor(tt) {
            (0, vt.i)(this, ye, tt, "f")
          }
          get coatDarkening() {
            return (0, vt.e)(this, Ne, "f")
          }
          set coatDarkening(tt) {
            (0, vt.i)(this, Ne, tt, "f")
          }
          get coatDarkeningTexture() {
            return (0, vt.e)(this, ae, "f")
          }
          set coatDarkeningTexture(tt) {
            (0, vt.i)(this, ae, tt, "f")
          }
          get fuzzWeight() {
            return (0, vt.e)(this, Me, "f")
          }
          set fuzzWeight(tt) {
            (0, vt.i)(this, Me, tt, "f")
          }
          get fuzzWeightTexture() {
            return (0, vt.e)(this, be, "f")
          }
          set fuzzWeightTexture(tt) {
            (0, vt.i)(this, be, tt, "f")
          }
          get fuzzColor() {
            return (0, vt.e)(this, Je, "f")
          }
          set fuzzColor(tt) {
            (0, vt.i)(this, Je, tt, "f")
          }
          get fuzzColorTexture() {
            return (0, vt.e)(this, Ce, "f")
          }
          set fuzzColorTexture(tt) {
            (0, vt.i)(this, Ce, tt, "f")
          }
          get fuzzRoughness() {
            return (0, vt.e)(this, ue, "f")
          }
          set fuzzRoughness(tt) {
            (0, vt.i)(this, ue, tt, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, vt.e)(this, ve, "f")
          }
          set fuzzRoughnessTexture(tt) {
            (0, vt.i)(this, ve, tt, "f")
          }
          get geometryThinWalled() {
            return (0, vt.e)(this, We, "f")
          }
          set geometryThinWalled(tt) {
            (0, vt.i)(this, We, tt, "f")
          }
          get geometryNormalTexture() {
            return (0, vt.e)(this, Se, "f")
          }
          set geometryNormalTexture(tt) {
            (0, vt.i)(this, Se, tt, "f")
          }
          get geometryTangent() {
            return (0, vt.e)(this, ce, "f")
          }
          set geometryTangent(tt) {
            (0, vt.i)(this, ce, tt, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(tt) {
            this.geometryTangent = new zt.m(Math.cos(tt), Math.sin(tt))
          }
          get geometryTangentTexture() {
            return (0, vt.e)(this, Re, "f")
          }
          set geometryTangentTexture(tt) {
            (0, vt.i)(this, Re, tt, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, vt.e)(this, Ie, "f")
          }
          set geometryCoatNormalTexture(tt) {
            (0, vt.i)(this, Ie, tt, "f")
          }
          get geometryCoatTangent() {
            return (0, vt.e)(this, Pe, "f")
          }
          set geometryCoatTangent(tt) {
            (0, vt.i)(this, Pe, tt, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(tt) {
            this.geometryCoatTangent = new zt.m(Math.cos(tt), Math.sin(tt))
          }
          get geometryCoatTangentTexture() {
            return (0, vt.e)(this, Ze, "f")
          }
          set geometryCoatTangentTexture(tt) {
            (0, vt.i)(this, Ze, tt, "f")
          }
          get geometryOpacity() {
            return (0, vt.e)(this, Le, "f")
          }
          set geometryOpacity(tt) {
            (0, vt.i)(this, Le, tt, "f")
          }
          get geometryOpacityTexture() {
            return (0, vt.e)(this, Fe, "f")
          }
          set geometryOpacityTexture(tt) {
            (0, vt.i)(this, Fe, tt, "f")
          }
          get geometryThickness() {
            return (0, vt.e)(this, ke, "f")
          }
          set geometryThickness(tt) {
            (0, vt.i)(this, ke, tt, "f")
          }
          get geometryThicknessTexture() {
            return (0, vt.e)(this, Ge, "f")
          }
          set geometryThicknessTexture(tt) {
            (0, vt.i)(this, Ge, tt, "f")
          }
          get emissionLuminance() {
            return (0, vt.e)(this, ze, "f")
          }
          set emissionLuminance(tt) {
            (0, vt.i)(this, ze, tt, "f")
          }
          get emissionColor() {
            return (0, vt.e)(this, oe, "f")
          }
          set emissionColor(tt) {
            (0, vt.i)(this, oe, tt, "f")
          }
          get emissionColorTexture() {
            return (0, vt.e)(this, Ue, "f")
          }
          set emissionColorTexture(tt) {
            (0, vt.i)(this, Ue, tt, "f")
          }
          get thinFilmWeight() {
            return (0, vt.e)(this, ie, "f")
          }
          set thinFilmWeight(tt) {
            (0, vt.i)(this, ie, tt, "f")
          }
          get thinFilmWeightTexture() {
            return (0, vt.e)(this, xe, "f")
          }
          set thinFilmWeightTexture(tt) {
            (0, vt.i)(this, xe, tt, "f")
          }
          get thinFilmThickness() {
            return (0, vt.e)(this, Te, "f")
          }
          set thinFilmThickness(tt) {
            (0, vt.i)(this, Te, tt, "f")
          }
          get thinFilmThicknessMin() {
            return (0, vt.e)(this, ne, "f")
          }
          set thinFilmThicknessMin(tt) {
            (0, vt.i)(this, ne, tt, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, vt.e)(this, tV, "f")
          }
          set thinFilmThicknessTexture(tt) {
            (0, vt.i)(this, tV, tt, "f")
          }
          get thinFilmIor() {
            return (0, vt.e)(this, eV, "f")
          }
          set thinFilmIor(tt) {
            (0, vt.i)(this, eV, tt, "f")
          }
          get ambientOcclusionTexture() {
            return (0, vt.e)(this, VV, "f")
          }
          set ambientOcclusionTexture(tt) {
            (0, vt.i)(this, VV, tt, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(tt) {
            this._sssQuality !== tt && (this._sssQuality = tt, this.fVt(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(tt) {
            this._sssIrradianceTexture !== tt && (this._sssIrradianceTexture = tt, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(tt) {
            this._sssDepthTexture !== tt && (this._sssDepthTexture = tt, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, vt.e)(this, OV, "f")
          }
          set directIntensity(tt) {
            (0, vt.i)(this, OV, tt, "f")
          }
          get environmentIntensity() {
            return (0, vt.e)(this, qV, "f")
          }
          set environmentIntensity(tt) {
            (0, vt.i)(this, qV, tt, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, vt.e)(this, DV, "f")
          }
          set useSpecularWeightFromTextureAlpha(tt) {
            (0, vt.i)(this, DV, tt, "f")
          }
          get forceAlphaTest() {
            return (0, vt.e)(this, mV, "f")
          }
          set forceAlphaTest(tt) {
            (0, vt.i)(this, mV, tt, "f")
          }
          get alphaCutOff() {
            return (0, vt.e)(this, dV, "f")
          }
          set alphaCutOff(tt) {
            (0, vt.i)(this, dV, tt, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, vt.e)(this, jV, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(tt) {
            (0, vt.i)(this, jV, tt, "f")
          }
          get useAmbientInGrayScale() {
            return (0, vt.e)(this, HV, "f")
          }
          set useAmbientInGrayScale(tt) {
            (0, vt.i)(this, HV, tt, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(Bt.b.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === Dt.c.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(tt) {
            tt !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = tt ? Dt.c.LIGHTFALLOFF_PHYSICAL : Dt.c.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === Dt.c.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(tt) {
            tt !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = tt ? Dt.c.LIGHTFALLOFF_GLTF : Dt.c.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, vt.e)(this, XV, "f")
          }
          set useObjectSpaceNormalMap(tt) {
            (0, vt.i)(this, XV, tt, "f")
          }
          get useParallax() {
            return (0, vt.e)(this, QV, "f")
          }
          set useParallax(tt) {
            (0, vt.i)(this, QV, tt, "f")
          }
          get useParallaxOcclusion() {
            return (0, vt.e)(this, lV, "f")
          }
          set useParallaxOcclusion(tt) {
            (0, vt.i)(this, lV, tt, "f")
          }
          get parallaxScaleBias() {
            return (0, vt.e)(this, EV, "f")
          }
          set parallaxScaleBias(tt) {
            (0, vt.i)(this, EV, tt, "f")
          }
          get disableLighting() {
            return (0, vt.e)(this, fV, "f")
          }
          set disableLighting(tt) {
            (0, vt.i)(this, fV, tt, "f")
          }
          get forceIrradianceInFragment() {
            return (0, vt.e)(this, wV, "f")
          }
          set forceIrradianceInFragment(tt) {
            (0, vt.i)(this, wV, tt, "f")
          }
          get maxSimultaneousLights() {
            return (0, vt.e)(this, yV, "f")
          }
          set maxSimultaneousLights(tt) {
            (0, vt.i)(this, yV, tt, "f")
          }
          get invertNormalMapX() {
            return (0, vt.e)(this, NV, "f")
          }
          set invertNormalMapX(tt) {
            (0, vt.i)(this, NV, tt, "f")
          }
          get invertNormalMapY() {
            return (0, vt.e)(this, aV, "f")
          }
          set invertNormalMapY(tt) {
            (0, vt.i)(this, aV, tt, "f")
          }
          get twoSidedLighting() {
            return (0, vt.e)(this, MV, "f")
          }
          set twoSidedLighting(tt) {
            (0, vt.i)(this, MV, tt, "f")
          }
          get useAlphaFresnel() {
            return (0, vt.e)(this, bV, "f")
          }
          set useAlphaFresnel(tt) {
            (0, vt.i)(this, bV, tt, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, vt.e)(this, JV, "f")
          }
          set useLinearAlphaFresnel(tt) {
            (0, vt.i)(this, JV, tt, "f")
          }
          get environmentBRDFTexture() {
            return (0, vt.e)(this, CV, "f")
          }
          set environmentBRDFTexture(tt) {
            (0, vt.i)(this, CV, tt, "f")
          }
          get forceNormalForward() {
            return (0, vt.e)(this, uV, "f")
          }
          set forceNormalForward(tt) {
            (0, vt.i)(this, uV, tt, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, vt.e)(this, KV, "f")
          }
          set enableSpecularAntiAliasing(tt) {
            (0, vt.i)(this, KV, tt, "f")
          }
          get useHorizonOcclusion() {
            return (0, vt.e)(this, hV, "f")
          }
          set useHorizonOcclusion(tt) {
            (0, vt.i)(this, hV, tt, "f")
          }
          get useRadianceOcclusion() {
            return (0, vt.e)(this, vV, "f")
          }
          set useRadianceOcclusion(tt) {
            (0, vt.i)(this, vV, tt, "f")
          }
          get unlit() {
            return (0, vt.e)(this, WV, "f")
          }
          set unlit(tt) {
            (0, vt.i)(this, WV, tt, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, vt.e)(this, SV, "f")
          }
          set applyDecalMapAfterDetailMap(tt) {
            (0, vt.i)(this, SV, tt, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(tt) {
            this._backgroundRefractionTexture = tt, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(tt) {
            this._refractionHighQualityBlur !== tt && (this._refractionHighQualityBlur = tt, this.fVt(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(tt) {
            this._realTimeFiltering = tt, this.fVt(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(tt) {
            this._realTimeFilteringQuality = tt, this.fVt(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(tt) {
            this._fuzzSampleNumber = tt, this.fVt(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, vt.e)(this, cV, "f")
          }
          set debugMode(tt) {
            (0, vt.i)(this, cV, tt, "f")
          }
          constructor(Vt, Wt) {
            super(Vt, Wt, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || tt.ForceGLSL), et.set(this, ((0, vt.m)(this, Pq), (0, vt.m)(this, Zq, void 0))), this._baseWeight = ((0, vt.m)(this, Lq), new Be("base_weight", 1, "vBaseWeight", 1)), Ot.set(this, (0, vt.m)(this, Fq, void 0)), this._baseWeightTexture = ((0, vt.m)(this, kq), new pe("base_weight", "baseWeight", "BASE_WEIGHT")), qt.set(this, (0, vt.m)(this, Gq, void 0)), this._baseColor = ((0, vt.m)(this, zq), new Be("base_color", Bt.b.White(), "vBaseColor", 4)), mt.set(this, (0, vt.m)(this, oq, void 0)), this._baseColorTexture = ((0, vt.m)(this, rq), new pe("base_color", "baseColor", "BASE_COLOR")), dt.set(this, (0, vt.m)(this, Uq, void 0)), this._baseDiffuseRoughness = ((0, vt.m)(this, Aq), new Be("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), jt.set(this, (0, vt.m)(this, iq, void 0)), this._baseDiffuseRoughnessTexture = ((0, vt.m)(this, Yq), new pe("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), Ht.set(this, (0, vt.m)(this, Bq, void 0)), this._baseMetalness = ((0, vt.m)(this, pq), new Be("base_metalness", 0, "vReflectanceInfo", 4, 0)), Xt.set(this, (0, vt.m)(this, xq, void 0)), this._baseMetalnessTexture = ((0, vt.m)(this, Tq), new pe("base_metalness", "baseMetalness", "BASE_METALNESS")), Qt.set(this, (0, vt.m)(this, gq, void 0)), this._specularWeight = ((0, vt.m)(this, sq), new Be("specular_weight", 1, "vReflectanceInfo", 4, 3)), lt.set(this, (0, vt.m)(this, nq, void 0)), this._specularWeightTexture = ((0, vt.m)(this, tD), new pe("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), Et.set(this, (0, vt.m)(this, eD, void 0)), this._specularColor = ((0, vt.m)(this, VD), new Be("specular_color", Bt.b.White(), "vSpecularColor", 4)), ft.set(this, (0, vt.m)(this, OD, void 0)), this._specularColorTexture = ((0, vt.m)(this, qD), new pe("specular_color", "specularColor", "SPECULAR_COLOR")), wt.set(this, (0, vt.m)(this, DD, void 0)), this._specularRoughness = ((0, vt.m)(this, mD), new Be("specular_roughness", .3, "vReflectanceInfo", 4, 1)), yt.set(this, (0, vt.m)(this, dD, void 0)), this._specularRoughnessTexture = ((0, vt.m)(this, jD), new pe("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), Nt.set(this, (0, vt.m)(this, HD, void 0)), this._specularRoughnessAnisotropy = ((0, vt.m)(this, XD), new Be("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), Mt.set(this, (0, vt.m)(this, QD, void 0)), this._specularRoughnessAnisotropyTexture = ((0, vt.m)(this, lD), new pe("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), bt.set(this, (0, vt.m)(this, ED, void 0)), this._specularIor = ((0, vt.m)(this, fD), new Be("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), Jt.set(this, (0, vt.m)(this, wD, void 0)), this._transmissionWeight = ((0, vt.m)(this, yD), new Be("transmission_weight", 0, "vTransmissionWeight", 1)), Ct.set(this, (0, vt.m)(this, ND, void 0)), this._transmissionWeightTexture = ((0, vt.m)(this, aD), new pe("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), ut.set(this, (0, vt.m)(this, MD, void 0)), this._transmissionColor = ((0, vt.m)(this, bD), new Be("transmission_color", Bt.b.White(), "vTransmissionColor", 3, 0)), Kt.set(this, (0, vt.m)(this, JD, void 0)), this._transmissionColorTexture = ((0, vt.m)(this, CD), new pe("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), ht.set(this, (0, vt.m)(this, uD, void 0)), this._transmissionDepth = ((0, vt.m)(this, KD), new Be("transmission_depth", 0, "vTransmissionDepth", 1, 0)), It.set(this, (0, vt.m)(this, hD, void 0)), this._transmissionDepthTexture = ((0, vt.m)(this, vD), new pe("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), Pt.set(this, (0, vt.m)(this, WD, void 0)), this._transmissionScatter = ((0, vt.m)(this, SD), new Be("transmission_scatter", Bt.b.Black(), "vTransmissionScatter", 3, 0)), Zt.set(this, (0, vt.m)(this, cD, void 0)), this._transmissionScatterTexture = ((0, vt.m)(this, RD), new pe("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), Lt.set(this, (0, vt.m)(this, ID, void 0)), this._transmissionScatterAnisotropy = ((0, vt.m)(this, PD), new Be("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), Gt.set(this, (0, vt.m)(this, ZD, void 0)), this._transmissionDispersionScale = ((0, vt.m)(this, LD), new Be("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), rt.set(this, (0, vt.m)(this, FD, void 0)), this._transmissionDispersionScaleTexture = ((0, vt.m)(this, kD), new pe("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), Ut.set(this, (0, vt.m)(this, GD, void 0)), this._transmissionDispersionAbbeNumber = ((0, vt.m)(this, zD), new Be("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), At.set(this, (0, vt.m)(this, oD, void 0)), this._subsurfaceWeight = ((0, vt.m)(this, rD), new Be("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), it.set(this, (0, vt.m)(this, UD, void 0)), this._subsurfaceWeightTexture = ((0, vt.m)(this, AD), new pe("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), pt.set(this, (0, vt.m)(this, iD, void 0)), this._subsurfaceColor = ((0, vt.m)(this, YD), new Be("subsurface_color", new Bt.b(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), Tt.set(this, (0, vt.m)(this, BD, void 0)), this._subsurfaceColorTexture = ((0, vt.m)(this, pD), new pe("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), te.set(this, (0, vt.m)(this, xD, void 0)), this._subsurfaceRadius = ((0, vt.m)(this, TD), new Be("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), ee.set(this, (0, vt.m)(this, gD, void 0)), this._subsurfaceRadiusScale = ((0, vt.m)(this, sD), new Be("subsurface_radius_scale", new Bt.b(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), Ve.set(this, (0, vt.m)(this, nD, void 0)), this._subsurfaceRadiusScaleTexture = ((0, vt.m)(this, tm), new pe("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), Oe.set(this, (0, vt.m)(this, em, void 0)), this._subsurfaceScatterAnisotropy = ((0, vt.m)(this, Vm), new Be("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), qe.set(this, (0, vt.m)(this, Om, void 0)), this._coatWeight = ((0, vt.m)(this, qm), new Be("coat_weight", 0, "vCoatWeight", 1, 0)), De.set(this, (0, vt.m)(this, Dm, void 0)), this._coatWeightTexture = ((0, vt.m)(this, mm), new pe("coat_weight", "coatWeight", "COAT_WEIGHT")), me.set(this, (0, vt.m)(this, dm, void 0)), this._coatColor = ((0, vt.m)(this, jm), new Be("coat_color", Bt.b.White(), "vCoatColor", 3, 0)), de.set(this, (0, vt.m)(this, Hm, void 0)), this._coatColorTexture = ((0, vt.m)(this, Xm), new pe("coat_color", "coatColor", "COAT_COLOR")), je.set(this, (0, vt.m)(this, Qm, void 0)), this._coatRoughness = ((0, vt.m)(this, lm), new Be("coat_roughness", 0, "vCoatRoughness", 1, 0)), He.set(this, (0, vt.m)(this, Em, void 0)), this._coatRoughnessTexture = ((0, vt.m)(this, fm), new pe("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), Xe.set(this, (0, vt.m)(this, wm, void 0)), this._coatRoughnessAnisotropy = ((0, vt.m)(this, ym), new Be("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), we.set(this, (0, vt.m)(this, Nm, void 0)), this._coatRoughnessAnisotropyTexture = ((0, vt.m)(this, am), new pe("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), ye.set(this, (0, vt.m)(this, Mm, void 0)), this._coatIor = ((0, vt.m)(this, bm), new Be("coat_ior", 1.5, "vCoatIor", 1, 0)), Ne.set(this, (0, vt.m)(this, Jm, void 0)), this._coatDarkening = ((0, vt.m)(this, Cm), new Be("coat_darkening", 1, "vCoatDarkening", 1, 0)), ae.set(this, (0, vt.m)(this, um, void 0)), this._coatDarkeningTexture = ((0, vt.m)(this, Km), new pe("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, Me.set(this, (0, vt.m)(this, hm, void 0)), this._fuzzWeight = ((0, vt.m)(this, Wm), new Be("fuzz_weight", 0, "vFuzzWeight", 1, 0)), be.set(this, (0, vt.m)(this, Sm, void 0)), this._fuzzWeightTexture = ((0, vt.m)(this, cm), new pe("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), Je.set(this, (0, vt.m)(this, Rm, void 0)), this._fuzzColor = ((0, vt.m)(this, Im), new Be("fuzz_color", Bt.b.White(), "vFuzzColor", 3, 0)), Ce.set(this, (0, vt.m)(this, Pm, void 0)), this._fuzzColorTexture = ((0, vt.m)(this, Zm), new pe("fuzz_color", "fuzzColor", "FUZZ_COLOR")), ue.set(this, (0, vt.m)(this, Lm, void 0)), this._fuzzRoughness = ((0, vt.m)(this, Fm), new Be("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), ve.set(this, (0, vt.m)(this, km, void 0)), this._fuzzRoughnessTexture = ((0, vt.m)(this, Gm), new pe("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), We.set(this, (0, vt.m)(this, zm, void 0)), this._geometryThinWalled = ((0, vt.m)(this, om), new Be("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), Se.set(this, (0, vt.m)(this, rm, void 0)), this._geometryNormalTexture = ((0, vt.m)(this, Um), new pe("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), ce.set(this, (0, vt.m)(this, Am, void 0)), this._geometryTangent = ((0, vt.m)(this, im), new Be("geometry_tangent", new zt.m(1, 0), "vSpecularAnisotropy", 3, 0)), Re.set(this, (0, vt.m)(this, Ym, void 0)), this._geometryTangentTexture = ((0, vt.m)(this, Bm), new pe("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), Ie.set(this, (0, vt.m)(this, pm, void 0)), this._geometryCoatNormalTexture = ((0, vt.m)(this, xm), new pe("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), Pe.set(this, (0, vt.m)(this, Tm, void 0)), this._geometryCoatTangent = ((0, vt.m)(this, gm), new Be("geometry_coat_tangent", new zt.m(1, 0), "vGeometryCoatTangent", 2, 0)), Ze.set(this, (0, vt.m)(this, sm, void 0)), this._geometryCoatTangentTexture = ((0, vt.m)(this, nm), new pe("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), Le.set(this, (0, vt.m)(this, td, void 0)), this._geometryOpacity = ((0, vt.m)(this, ed), new Be("geometry_opacity", 1, "vBaseColor", 4, 3)), Fe.set(this, (0, vt.m)(this, Vd, void 0)), this._geometryOpacityTexture = ((0, vt.m)(this, Od), new pe("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), ke.set(this, (0, vt.m)(this, qd, void 0)), this._geometryThickness = ((0, vt.m)(this, Dd), new Be("geometry_thickness", 0, "vGeometryThickness", 1, 0)), Ge.set(this, (0, vt.m)(this, md, void 0)), this._geometryThicknessTexture = ((0, vt.m)(this, dd), new pe("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), ze.set(this, (0, vt.m)(this, jd, void 0)), this._emissionLuminance = ((0, vt.m)(this, Hd), new Be("emission_luminance", 1, "vLightingIntensity", 4, 1)), oe.set(this, (0, vt.m)(this, Xd, void 0)), this._emissionColor = ((0, vt.m)(this, Qd), new Be("emission_color", Bt.b.Black(), "vEmissionColor", 3)), Ue.set(this, (0, vt.m)(this, ld, void 0)), this._emissionColorTexture = ((0, vt.m)(this, Ed), new pe("emission_color", "emissionColor", "EMISSION_COLOR")), ie.set(this, (0, vt.m)(this, fd, void 0)), this._thinFilmWeight = ((0, vt.m)(this, wd), new Be("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), xe.set(this, (0, vt.m)(this, yd, void 0)), this._thinFilmWeightTexture = ((0, vt.m)(this, Nd), new pe("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), Te.set(this, (0, vt.m)(this, Md, void 0)), this._thinFilmThickness = ((0, vt.m)(this, bd), new Be("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), ne.set(this, (0, vt.m)(this, Jd, void 0)), this._thinFilmThicknessMin = ((0, vt.m)(this, Cd), new Be("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), tV.set(this, (0, vt.m)(this, ud, void 0)), this._thinFilmThicknessTexture = ((0, vt.m)(this, Kd), new pe("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), eV.set(this, (0, vt.m)(this, hd, void 0)), this._thinFilmIor = ((0, vt.m)(this, vd), new Be("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), VV.set(this, (0, vt.m)(this, Wd, void 0)), this._ambientOcclusionTexture = ((0, vt.m)(this, Sd), new pe("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = tt.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, OV.set(this, (0, vt.m)(this, cd, 1)), qV.set(this, ((0, vt.m)(this, Rd), (0, vt.m)(this, Id, 1))), DV.set(this, ((0, vt.m)(this, Pd), (0, vt.m)(this, Zd, !1))), mV.set(this, ((0, vt.m)(this, Ld), (0, vt.m)(this, Fd, !1))), dV.set(this, ((0, vt.m)(this, kd), (0, vt.m)(this, Gd, .4))), jV.set(this, ((0, vt.m)(this, zd), (0, vt.m)(this, od, !1))), HV.set(this, ((0, vt.m)(this, rd), (0, vt.m)(this, Ud, !1))), XV.set(this, ((0, vt.m)(this, Ad), (0, vt.m)(this, Yd, !1))), QV.set(this, ((0, vt.m)(this, Bd), (0, vt.m)(this, pd, !1))), lV.set(this, ((0, vt.m)(this, xd), (0, vt.m)(this, Td, !1))), EV.set(this, ((0, vt.m)(this, gd), (0, vt.m)(this, sd, .05))), fV.set(this, ((0, vt.m)(this, nd), (0, vt.m)(this, tj, !1))), wV.set(this, ((0, vt.m)(this, ej), (0, vt.m)(this, Vj, !1))), yV.set(this, ((0, vt.m)(this, Oj), (0, vt.m)(this, qj, 4))), NV.set(this, ((0, vt.m)(this, Dj), (0, vt.m)(this, mj, !1))), aV.set(this, ((0, vt.m)(this, dj), (0, vt.m)(this, jj, !1))), MV.set(this, ((0, vt.m)(this, Hj), (0, vt.m)(this, Xj, !1))), bV.set(this, ((0, vt.m)(this, Qj), (0, vt.m)(this, lj, !1))), JV.set(this, ((0, vt.m)(this, Ej), (0, vt.m)(this, fj, !1))), CV.set(this, ((0, vt.m)(this, wj), (0, vt.m)(this, yj, null))), uV.set(this, ((0, vt.m)(this, Nj), (0, vt.m)(this, aj, !1))), KV.set(this, ((0, vt.m)(this, Mj), (0, vt.m)(this, bj, !1))), hV.set(this, ((0, vt.m)(this, Jj), (0, vt.m)(this, Cj, !0))), vV.set(this, ((0, vt.m)(this, uj), (0, vt.m)(this, Kj, !0))), WV.set(this, ((0, vt.m)(this, hj), (0, vt.m)(this, vj, !1))), SV.set(this, ((0, vt.m)(this, Wj), (0, vt.m)(this, Sj, !1))), this._lightingInfos = ((0, vt.m)(this, cj), new zt.r(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = Dt.c.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new ct.g(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, cV.set(this, (0, vt.m)(this, Rj, 0)), this.debugLimit = ((0, vt.m)(this, Ij), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = Dt.c.MATERIAL_OPAQUE, this.vI() && !this.vI()?.Jf().isWebGPU && this.vI().Jf().Vw < 2 && St.d.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), tt._noiseTextures[this.vI().uniqueId] || (tt._noiseTextures[this.vI().uniqueId] = new Rt.f(he.l.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.vI(), !1, !0, 1), this.vI().ZI.addOnce((() => {
              tt._noiseTextures[this.vI().uniqueId]?.dispose(), delete tt._noiseTextures[this.vI().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), gt.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), gt.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = kt(this.vI()), this._environmentFuzzBRDFTexture = Ft(this.vI()), this.prePassConfiguration = new Yt.b, this._propertyList = {};
            for (const tt of Object.getOwnPropertyNames(this)) {
              const et = this[tt];
              et instanceof Be && (this._propertyList[tt] = et)
            }
            Object.keys(this._propertyList).forEach((tt => {
              const et = this._propertyList[tt];
              let Vt = this._uniformsList[et.targetUniformName];
              Vt ? Vt.numComponents !== et.targetUniformComponentNum ? St.d.Error(`Uniform ${et.targetUniformName} already exists of size ${Vt.numComponents}, but trying to set it to ${et.targetUniformComponentNum}.`) : Vt.requiredDefine !== et.requiredDefine && (Vt.requiredDefine = void 0) : (Vt = new Ye(et.targetUniformName, et.targetUniformComponentNum), Vt.requiredDefine = et.requiredDefine, this._uniformsList[et.targetUniformName] = Vt), "" === Vt.firstLinkedKey && (Vt.firstLinkedKey = et.name), Vt.linkedProperties[et.name] = et
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const tt of Object.getOwnPropertyNames(this)) {
              const et = this[tt];
              et instanceof pe && (this._samplersList[tt] = et)
            }
            for (const tt in this._samplersList) {
              const et = this._samplersList[tt].textureDefine;
              this._samplerDefines[et] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[et + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[et + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(gt.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(gt.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          getClassName() {
            return "OpenPBRMaterial"
          }
          get transparencyMode() {
            return this._transparencyMode
          }
          set transparencyMode(tt) {
            this._transparencyMode !== tt && (this._transparencyMode = tt, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== Dt.c.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(tt) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(tt)
          }
          clone(et) {
            let Vt = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const qt = Ke.d.Clone((() => new tt(et, this.vI())), this, {
              cloneTexturesOnlyOnce: Vt
            });
            return qt.id = et, qt.name = et, this.stencil.copyTo(qt.stencil), this._clonePlugins(qt, Ot), qt
          }
          serialize() {
            const tt = super.serialize();
            return tt.customType = "BABYLON.OpenPBRMaterial", tt
          }
          static Parse(et, Vt, Ot) {
            const qt = Ke.d.Parse((() => new tt(et.name, Vt)), et, Vt, Ot);
            return et.stencil && qt.stencil.parse(et.stencil, Vt, Ot), Dt.c._ParsePlugins(et, qt, Vt, Ot), qt
          }
          forceCompilation(tt, et, Vt) {
            const Ot = {
              clipPlane: !1,
              useInstances: !1,
              ...Vt
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const Vt = new ge({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                qt = this._prepareEffect(tt, tt, Vt, void 0, void 0, Ot.useInstances, Ot.clipPlane);
              this._onEffectCreatedObservable && (Ae.effect = qt, Ae.subMesh = null, this._onEffectCreatedObservable.notifyObservers(Ae)), qt.isReady() ? et && et(this) : qt.onCompileObservable.add((() => {
                et && et(this)
              }))
            })()
          }
          isReadyForSubMesh(et, Vt, Ot) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const qt = Vt._drawWrapper;
            if (qt.effect && this.isFrozen && qt._wasPreviouslyReady && qt._wasPreviouslyUsingInstances === Ot) return !0;
            Vt.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), Vt.materialDefines = new ge({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const Dt = Vt.materialDefines;
            if (this._isReadyForSubMesh(Vt)) return !0;
            const mt = this.vI(),
              dt = mt.Jf();
            if (Dt._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, mt.texturesEnabled)) {
              for (const tt in this._samplersList) {
                const et = this._samplersList[tt];
                if (et.value && !et.value.isReadyOrNotBlocking()) return !1
              }
              const et = this._getRadianceTexture();
              if (et && gt.e.ReflectionTextureEnabled) {
                if (!et.isReadyOrNotBlocking()) return !1;
                if (et.irradianceTexture) {
                  if (!et.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!et.sphericalPolynomial && et.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && gt.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && gt.e.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && gt.e.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (tt._noiseTextures[mt.uniqueId] && !tt._noiseTextures[mt.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Dt, this._eventInfo.subMesh = Vt, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (Dt._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (Dt.AREALIGHTUSED)
              for (let tt = 0; tt < et.lightSources.length; tt++)
                if (!et.lightSources[tt]._isReady()) return !1;
            if (dt.getCaps().standardDerivatives || et.isVerticesDataPresent(ot.m.NormalKind) || (et.createNormals(!0), St.d.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + et.name)), !(0, nt.e)(mt, et, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const jt = Vt.effect,
              Ht = Dt._areLightsDisposed,
              Xt = this._prepareEffect(et, Vt.getRenderingMesh(), Dt, this.onCompiled, this.onError, Ot, null);
            let Qt = !1;
            if (Xt)
              if (this._onEffectCreatedObservable && (Ae.effect = Xt, Ae.subMesh = Vt, this._onEffectCreatedObservable.notifyObservers(Ae)), this.allowShaderHotSwapping && jt && !Xt.isReady()) {
                if (Dt.markAsUnprocessed(), Qt = this.isFrozen, Ht) return Dt._areLightsDisposed = !0, !1
              } else mt.resetCachedMaterial(), Vt.setEffect(Xt, Dt, this._materialContext);
            return !(!Vt.effect || !Vt.effect.isReady()) && (Dt._renderId = mt.getRenderId(), qt._wasPreviouslyReady = !Qt, qt._wasPreviouslyUsingInstances = !!Ot, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const tt = this._uniformBuffer;
            tt.addUniform("vTangentSpaceParams", 2), tt.addUniform("vLightingIntensity", 4), tt.addUniform("pointSize", 1), tt.addUniform("vDebugMode", 2), tt.addUniform("renderTargetSize", 2), tt.addUniform("cameraInfo", 4), tt.addUniform("vTextureRepetitionHexTilingParams", 4), tt.addUniform("backgroundRefractionMatrix", 16), tt.addUniform("vBackgroundRefractionInfos", 3), (0, nt.kb)(tt, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((et => {
              tt.addUniform(et.name, et.numComponents)
            })), Object.values(this._samplersList).forEach((et => {
              tt.addUniform(et.samplerInfoName, 2), tt.addUniform(et.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(tt, et, Vt, Ot) {
            if (0 === this.geometryThickness) tt.updateFloat("vGeometryThickness", 0);
            else {
              Ot.getRenderingMesh().getWorldMatrix().decompose(zt.k.uf[0]);
              const et = Math.max(Math.abs(zt.k.uf[0].x), Math.abs(zt.k.uf[0].y), Math.abs(zt.k.uf[0].z));
              tt.updateFloat("vGeometryThickness", this.geometryThickness * et)
            }
          }
          bindForSubMesh(et, Vt, Ot) {
            const qt = this.vI(),
              Dt = Ot.materialDefines;
            if (!Dt) return;
            const mt = Ot.effect;
            if (!mt) return;
            this._activeEffect = mt, Vt.getMeshUniformBuffer().bindToEffect(mt, "Mesh"), Vt.transferToEffect(et);
            const dt = qt.Jf();
            this._uniformBuffer.bindToEffect(mt, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, qt, Vt, et, this.isFrozen), fe.c.Bind(dt.currentRenderPassId, this._activeEffect, Vt, et, this);
            const jt = qt.activeCamera;
            jt ? this._uniformBuffer.updateFloat4("cameraInfo", jt.minZ, jt.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Ht = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Ht[0], Ht[1], Ht[2], Ht[3]), this._eventInfo.subMesh = Ot, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Dt.OBJECTSPACE_NORMALMAP && (et.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const Xt = this._mustRebind(qt, mt, Ot, Vt.visibility),
              Qt = dt._features.needToAlwaysBindUniformBuffers;
            (0, nt.f)(Vt, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, le.d)(this._activeEffect, this._vertexPullingMetadata);
            const lt = this._uniformBuffer;
            if (Xt) {
              this.bindViewProjection(mt);
              const et = this._getRadianceTexture();
              if (!lt.useUbo || !this.isFrozen || !lt.isSync || Ot._drawWrapper._forceRebindOnNextCall) {
                if (qt.texturesEnabled) {
                  for (const tt in this._samplersList) {
                    const et = this._samplersList[tt];
                    et.value && (lt.updateFloat2(et.samplerInfoName, et.value.coordinatesIndex, et.value.level), (0, nt.w)(et.value, lt, et.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (qt._mirroredCameraPosition ? lt.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : lt.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, nt.l)(qt, Dt, lt, Bt.b.White(), et, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && lt.updateFloat("pointSize", this.pointSize);
                const tt = this._uniformsArray;
                for (let et = 0, Vt = tt.length; et < Vt; et++) {
                  const Vt = tt[et];
                  (void 0 === Vt.requiredDefine || Dt[Vt.requiredDefine]) && (4 === Vt.numComponents ? (Vt.populateVectorFromLinkedProperties(zt.k.Vector4[0]), lt.updateVector4(Vt.name, zt.k.Vector4[0])) : 3 === Vt.numComponents ? (Vt.populateVectorFromLinkedProperties(zt.k.uf[0]), lt.updateVector3(Vt.name, zt.k.uf[0])) : 2 === Vt.numComponents ? (Vt.populateVectorFromLinkedProperties(zt.k.Vector2[0]), lt.updateFloat2(Vt.name, zt.k.Vector2[0].x, zt.k.Vector2[0].y)) : 1 === Vt.numComponents && lt.updateFloat(Vt.name, Vt.linkedProperties[Vt.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * qt.environmentIntensity, this._lightingInfos.w = 1, lt.updateVector4("vLightingIntensity", this._lightingInfos), lt.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (qt.texturesEnabled) {
                for (const tt in this._samplersList) {
                  const et = this._samplersList[tt];
                  et.value && lt.setTexture(et.samplerName, et.value)
                }
                if ((0, nt.n)(qt, Dt, lt, et, this.realTimeFiltering), Dt.ENVIRONMENTBRDF && lt.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), Dt.FUZZENVIRONMENTBRDF && lt.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), Dt.REFRACTED_BACKGROUND && (lt.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), lt.x_("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), zt.k.uf[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), lt.updateVector3("vBackgroundRefractionInfos", zt.k.uf[1])), (Dt.ANISOTROPIC || Dt.FUZZ || Dt.REFRACTED_BACKGROUND || Dt.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && lt.setTexture("blueNoiseSampler", tt._noiseTextures[this.vI().uniqueId]), Dt.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const tt = this.sssIrradianceTexture.getSize().width,
                    et = this.sssIrradianceTexture.getSize().height;
                  lt.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), lt.setTexture("sceneDepthSampler", this.sssDepthTexture), lt.updateFloat2("renderTargetSize", tt, et)
                }
              }
              this.vI().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(Vt) && this.vI().depthPeelingRenderer.bind(mt), this._eventInfo.subMesh = Ot, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Qe.f)(this._activeEffect, this, qt), this.bindEyePosition(mt)
            } else Qt && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, qt, qt.Jf(), Ot), !Xt && this.isFrozen && !Qt || !qt.lightsEnabled || this._disableLighting || (0, nt.o)(qt, Vt, this._activeEffect, Dt, this._maxSimultaneousLights), !Xt && this.isFrozen || (this.bindView(mt), (0, nt.i)(qt, Vt, this._activeEffect, !0), Dt.NUM_MORPH_INFLUENCERS && (0, nt.r)(Vt, this._activeEffect), Dt.BAKED_VERTEX_ANIMATION_TEXTURE && Vt.bakedVertexAnimationManager?.bind(mt, Dt.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, nt.q)(Dt, this._activeEffect, qt)), this._afterBind(Vt, this._activeEffect, Ot), lt.update()
          }
          getAnimatables() {
            const tt = super.getAnimatables();
            for (const et in this._samplersList) {
              const Vt = this._samplersList[et];
              Vt.value && Vt.value.animations && Vt.value.animations.length > 0 && tt.push(Vt.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && tt.push(this._radianceTexture), tt
          }
          getActiveTextures() {
            const tt = super.getActiveTextures();
            for (const et in this._samplersList) {
              const Vt = this._samplersList[et];
              Vt.value && tt.push(Vt.value)
            }
            return this._radianceTexture && tt.push(this._radianceTexture), tt
          }
          hasTexture(tt) {
            if (super.hasTexture(tt)) return !0;
            for (const et in this._samplersList) {
              if (this._samplersList[et].value === tt) return !0
            }
            return this._radianceTexture === tt
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(tt, et) {
            if (this._breakShaderLoadedCheck = !0, et) {
              this._environmentBRDFTexture && this.vI().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.vI().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const tt in this._samplersList) {
                const et = this._samplersList[tt];
                et.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(tt, et)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.vI().environmentTexture
          }
          _prepareEffect(et, Vt, Ot) {
            let qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              Dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              mt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              dt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(et, Vt, Ot, mt, dt), !Ot.isDirty) return null;
            Ot.markAsProcessed();
            const jt = this.vI().Jf(),
              Ht = new st.b;
            let Xt = 0;
            Ot.USESPHERICALINVERTEX && Ht.addFallback(Xt++, "USESPHERICALINVERTEX"), Ot.FOG && Ht.addFallback(Xt, "FOG"), Ot.SPECULARAA && Ht.addFallback(Xt, "SPECULARAA"), Ot.POINTSIZE && Ht.addFallback(Xt, "POINTSIZE"), Ot.LOGARITHMICDEPTH && Ht.addFallback(Xt, "LOGARITHMICDEPTH"), Ot.PARALLAX && Ht.addFallback(Xt, "PARALLAX"), Ot.PARALLAX_RHS && Ht.addFallback(Xt, "PARALLAX_RHS"), Ot.PARALLAXOCCLUSION && Ht.addFallback(Xt++, "PARALLAXOCCLUSION"), Ot.ENVIRONMENTBRDF && Ht.addFallback(Xt++, "ENVIRONMENTBRDF"), Ot.TANGENT && Ht.addFallback(Xt++, "TANGENT"), Xt = (0, nt.A)(Ot, Ht, this._maxSimultaneousLights, Xt), Ot.SPECULARTERM && Ht.addFallback(Xt++, "SPECULARTERM"), Ot.USESPHERICALFROMREFLECTIONMAP && Ht.addFallback(Xt++, "USESPHERICALFROMREFLECTIONMAP"), Ot.USEIRRADIANCEMAP && Ht.addFallback(Xt++, "USEIRRADIANCEMAP"), Ot.NORMAL && Ht.addFallback(Xt++, "NORMAL"), Ot.VERTEXCOLOR && Ht.addFallback(Xt++, "VERTEXCOLOR"), Ot.MORPHTARGETS && Ht.addFallback(Xt++, "MORPHTARGETS"), Ot.MULTIVIEW && Ht.addFallback(0, "MULTIVIEW");
            const Qt = [ot.m.PositionKind];
            Ot.NORMAL && Qt.push(ot.m.NormalKind), Ot.TANGENT && Qt.push(ot.m.TangentKind);
            for (let tt = 1; tt <= 6; ++tt) Ot["UV" + tt] && Qt.push(`uv${1===tt?"":tt}`);
            Ot.VERTEXCOLOR && Qt.push(ot.m.ColorKind), (0, nt.H)(Qt, et, Ot, Ht), (0, nt.L)(Qt, Ot), (0, nt.M)(Qt, et, Ot), (0, nt.D)(Qt, et, Ot);
            let lt = "openpbr";
            const Et = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const tt in this._uniformsList) Et.push(tt);
            const ft = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            Ot.FUZZENVIRONMENTBRDF && ft.push("environmentFuzzBrdfSampler"), Ot.REFRACTED_BACKGROUND && ft.push("backgroundRefractionSampler"), (Ot.ANISOTROPIC || Ot.FUZZ || Ot.REFRACTED_BACKGROUND || Ot.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && ft.push("blueNoiseSampler"), Ot.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (ft.push("sceneIrradianceSampler"), ft.push("sceneDepthSampler"));
            for (const tt in this._samplersList) {
              const et = this._samplersList[tt];
              ft.push(et.samplerName), Et.push(et.samplerInfoName), Et.push(et.samplerMatrixName)
            }(0, nt.lb)(Et, ft, !0);
            const wt = ["Material", "Scene", "Mesh"],
              yt = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: Ot.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = Ht, this._eventInfo.fallbackRank = Xt, this._eventInfo.defines = Ot, this._eventInfo.uniforms = Et, this._eventInfo.attributes = Qt, this._eventInfo.samplers = ft, this._eventInfo.uniformBuffersNames = wt, this._eventInfo.customCode = void 0, this._eventInfo.mesh = et, this._eventInfo.indexParameters = yt, this._callbackPluginEventGeneric(128, this._eventInfo), fe.c.AddUniformsAndSamplers(Et, ft), Yt.b.AddUniforms(Et), Yt.b.AddSamplers(ft), (0, Qe.e)(Et), this._useVertexPulling) {
              const tt = Vt?.geometry;
              tt && (this._vertexPullingMetadata = (0, le.h)(tt), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((tt, et) => {
                Et.push(`vp_${et}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            xt.b && (xt.b.PrepareUniforms(Et, Ot), xt.b.PrepareSamplers(ft, Ot)), (0, nt.ob)({
              uniformsNames: Et,
              uniformBuffersNames: wt,
              samplers: ft,
              defines: Ot,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const Nt = {};
            this.customShaderNameResolve && (lt = this.customShaderNameResolve(lt, Et, wt, ft, Ot, Qt, Nt));
            const Mt = Ot.toString(),
              bt = jt.createEffect(lt, {
                attributes: Qt,
                uniformsNames: Et,
                uniformBuffersNames: wt,
                samplers: ft,
                defines: Mt,
                fallbacks: Ht,
                onCompiled: qt,
                onError: Dt,
                indexParameters: yt,
                processFinalCode: Nt.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: Ot.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: tt._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, jt);
            return this._eventInfo.customCode = void 0, bt
          }
          _prepareDefines(et, Vt, Ot) {
            let qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              mt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const dt = Vt.hasThinInstances,
              jt = this.vI(),
              Ht = jt.Jf();
            (0, nt.Y)(jt, et, Ot, !0, this._maxSimultaneousLights, this._disableLighting), Ot._needNormals = !0, (0, nt.gb)(jt, Ot);
            const Xt = this.needAlphaBlendingForMesh(et) && this.vI().useOrderIndependentTransparency;
            if ((0, nt.jb)(jt, Ot, this.canRenderToMRT && !Xt), (0, nt.ib)(jt, Ot, Xt), fe.c.PrepareDefines(Ht.currentRenderPassId, et, Ot), Ot._areTexturesDirty) {
              Ot._needUVs = !1;
              for (let tt = 1; tt <= 6; ++tt) Ot["MAINUV" + tt] = !1;
              if (jt.texturesEnabled) {
                for (const Vt in this._samplersList) {
                  const tt = this._samplersList[Vt];
                  tt.value ? ((0, nt.ab)(tt.value, Ot, tt.textureDefine), Ot[tt.textureDefine + "_GAMMA"] = tt.value.gammaSpace) : Ot[tt.textureDefine] = !1
                }
                const tt = this._getRadianceTexture(),
                  et = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || Ht.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, nt.X)(jt, tt, Ot, this.realTimeFiltering, this.realTimeFilteringQuality, !et), this._baseMetalnessTexture && (Ot.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), Ot.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, Ot.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, Ot.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, Ot.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, Ot.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, Ot.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, Ot.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, Ot.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, Ot.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, Ot.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, Ot.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && gt.e.DiffuseTextureEnabled ? (Ot.PARALLAX = !0, Ot.PARALLAX_RHS = jt.useRightHandedSystem, Ot.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Ot.PARALLAX = !1, Ot.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Ot.PARALLAX = !1, Ot.PARALLAX_RHS = !1, Ot.PARALLAXOCCLUSION = !1, Ot.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && gt.e.ReflectionTextureEnabled ? (Ot.ENVIRONMENTBRDF = !0, Ot.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Ot.ENVIRONMENTBRDF = !1, Ot.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? Ot.FUZZENVIRONMENTBRDF = !0 : Ot.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  Ot.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && gt.e.RefractionTextureEnabled, Ot.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, Ot.REFRACTED_LIGHTS = !0;
                  const tt = this._getRadianceTexture();
                  tt ? (Ot.REFRACTED_ENVIRONMENT = gt.e.RefractionTextureEnabled, Ot.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.vI().useRightHandedSystem ? !tt.invertZ : tt.invertZ, Ot.REFRACTED_ENVIRONMENT_LOCAL_CUBE = tt.isCube && tt.boundingBoxSize) : Ot.REFRACTED_ENVIRONMENT = !1
                } else Ot.REFRACTED_BACKGROUND = !1, Ot.REFRACTED_LIGHTS = !1, Ot.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? Ot.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : Ot.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === Dt.c.LIGHTFALLOFF_STANDARD ? (Ot.USEPHYSICALLIGHTFALLOFF = !1, Ot.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === Dt.c.LIGHTFALLOFF_GLTF ? (Ot.USEPHYSICALLIGHTFALLOFF = !1, Ot.USEGLTFLIGHTFALLOFF = !0) : (Ot.USEPHYSICALLIGHTFALLOFF = !0, Ot.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? Ot.TWOSIDEDLIGHTING = !0 : Ot.TWOSIDEDLIGHTING = !1, Ot.MIRRORED = !!jt._mirroredCameraPosition, Ot.SPECULARAA = Ht.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(Ot._areTexturesDirty || Ot._areMiscDirty) && (Ot.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Ot.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Ot.ALPHABLEND = this.needAlphaBlendingForMesh(et)), Ot._areTexturesDirty && (Ot.TEXTURE_REPETITION_MODE = Ht.version > 1 || Ht.isWebGPU ? this.textureRepetitionMode : 0), Ot._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Ot), Ot.FORCENORMALFORWARD = this._forceNormalForward, Ot.RADIANCEOCCLUSION = this._useRadianceOcclusion, Ot.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && tt._noiseTextures[jt.uniqueId] && gt.e.ReflectionTextureEnabled ? (Ot.ANISOTROPIC = !0, et.isVerticesDataPresent(ot.m.TangentKind) || (Ot._needUVs = !0, Ot.MAINUV1 = !0), this._useGltfStyleAnisotropy && (Ot.USE_GLTF_STYLE_ANISOTROPY = !0), Ot.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, Ot.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (Ot.ANISOTROPIC = !1, Ot.USE_GLTF_STYLE_ANISOTROPY = !1, Ot.ANISOTROPIC_BASE = !1, Ot.ANISOTROPIC_COAT = !1), Ot.THIN_FILM = this.thinFilmWeight > 0, Ot.IRIDESCENCE = this.thinFilmWeight > 0, Ot.DISPERSION = this.transmissionDispersionScale > 0, Ot.SCATTERING = this.hasScattering;
            if (Ot.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, Ot.TRANSMISSION_SLAB = this.transmissionWeight > 0, Ot.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, Ot.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !Ot.PREPASS && (Ot.SUBSURFACE_SLAB || Ot.TRANSMISSION_SLAB_VOLUME)) {
              let tt = !1;
              if (!this.sssIrradianceTexture && jt.geometryBufferRenderer) {
                const et = jt.geometryBufferRenderer.getTextureIndex(re.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = jt.geometryBufferRenderer.getGBuffer().textures[et], tt = !0
              }
              if (!this.sssDepthTexture && jt.geometryBufferRenderer) {
                const et = jt.geometryBufferRenderer.getTextureIndex(re.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = jt.geometryBufferRenderer.getGBuffer().textures[et], tt = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (Ot.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, tt && (Ot.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            Ot.FUZZ = this.fuzzWeight > 0 && gt.e.ReflectionTextureEnabled, Ot.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, Ot.FUZZ ? (et.isVerticesDataPresent(ot.m.TangentKind) || (Ot._needUVs = !0, Ot.MAINUV1 = !0), this._environmentFuzzBRDFTexture = Ft(this.vI()), Ot.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, Ot.FUZZENVIRONMENTBRDF = !1, Ot.FUZZ_IBL_SAMPLES = 0), Ot._areMiscDirty && ((0, nt.eb)(et, jt, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(et), Ot, this._applyDecalMapAfterDetailMap, this._useVertexPulling, Vt, this._isVertexOutputInvariant), Ot.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !et.isVerticesDataPresent(ot.m.NormalKind), Ot.DEBUGMODE = this._debugMode), (0, nt.V)(jt, Ht, this, Ot, !!qt, mt, dt), this._eventInfo.defines = Ot, this._eventInfo.mesh = et, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, nt.R)(et, Ot, !0, !0, !0, this._transparencyMode !== Dt.c.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, et = new WeakMap, Ot = new WeakMap, qt = new WeakMap, mt = new WeakMap, dt = new WeakMap, jt = new WeakMap, Ht = new WeakMap, Xt = new WeakMap, Qt = new WeakMap, lt = new WeakMap, Et = new WeakMap, ft = new WeakMap, wt = new WeakMap, yt = new WeakMap, Nt = new WeakMap, Mt = new WeakMap, bt = new WeakMap, Jt = new WeakMap, Ct = new WeakMap, ut = new WeakMap, Kt = new WeakMap, ht = new WeakMap, It = new WeakMap, Pt = new WeakMap, Zt = new WeakMap, Lt = new WeakMap, Gt = new WeakMap, rt = new WeakMap, Ut = new WeakMap, At = new WeakMap, it = new WeakMap, pt = new WeakMap, Tt = new WeakMap, te = new WeakMap, ee = new WeakMap, Ve = new WeakMap, Oe = new WeakMap, qe = new WeakMap, De = new WeakMap, me = new WeakMap, de = new WeakMap, je = new WeakMap, He = new WeakMap, Xe = new WeakMap, we = new WeakMap, ye = new WeakMap, Ne = new WeakMap, ae = new WeakMap, Me = new WeakMap, be = new WeakMap, Je = new WeakMap, Ce = new WeakMap, ue = new WeakMap, ve = new WeakMap, We = new WeakMap, Se = new WeakMap, ce = new WeakMap, Re = new WeakMap, Ie = new WeakMap, Pe = new WeakMap, Ze = new WeakMap, Le = new WeakMap, Fe = new WeakMap, ke = new WeakMap, Ge = new WeakMap, ze = new WeakMap, oe = new WeakMap, Ue = new WeakMap, ie = new WeakMap, xe = new WeakMap, Te = new WeakMap, ne = new WeakMap, tV = new WeakMap, eV = new WeakMap, VV = new WeakMap, OV = new WeakMap, qV = new WeakMap, DV = new WeakMap, mV = new WeakMap, dV = new WeakMap, jV = new WeakMap, HV = new WeakMap, XV = new WeakMap, QV = new WeakMap, lV = new WeakMap, EV = new WeakMap, fV = new WeakMap, wV = new WeakMap, yV = new WeakMap, NV = new WeakMap, aV = new WeakMap, MV = new WeakMap, bV = new WeakMap, JV = new WeakMap, CV = new WeakMap, uV = new WeakMap, KV = new WeakMap, hV = new WeakMap, vV = new WeakMap, WV = new WeakMap, SV = new WeakMap, cV = new WeakMap, (() => {
          const et = "function" === typeof Symbol && Symbol.metadata ? Object.create(Iq[Symbol.metadata] ?? null) : void 0;
          RV = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], IV = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], PV = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], ZV = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], LV = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], FV = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], kV = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], GV = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], zV = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], oV = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], rV = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], UV = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], AV = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], iV = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], YV = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], BV = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], pV = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], xV = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], TV = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], gV = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], sV = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], nV = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], tO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], eO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], VO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], OO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], qO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], DO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], mO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], dO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], jO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], HO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], XO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], QO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], lO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], EO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], fO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], wO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], yO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], NO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], aO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], MO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], bO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], JO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], CO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], uO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], KO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], hO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], vO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], WO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], SO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], cO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], RO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], IO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], PO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], ZO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], LO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], FO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], kO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], GO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], zO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], oO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], rO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], UO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], AO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], iO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], YO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], BO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], pO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], xO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], TO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], gO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], sO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], nO = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], tq = [(0, Wt.e)("_markAllSubMeshesAsTexturesDirty")], eq = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Vq = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Oq = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], qq = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], Dq = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], mq = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], dq = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], jq = [(0, Wt.P)()], Hq = [(0, Wt.P)()], Xq = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Qq = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], lq = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Eq = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], fq = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsLightsDirty")], wq = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], yq = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsLightsDirty")], Nq = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], aq = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Mq = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], bq = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Jq = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Cq = [(0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], uq = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Kq = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], hq = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], vq = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Wq = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsMiscDirty")], Sq = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsMiscDirty")], cq = [(0, Wt.i)("_markAllSubMeshesAsMiscDirty")], Rq = [(0, Wt.P)()], (0, vt.l)(tt, null, RV, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: tt => "baseWeight" in tt,
              get: tt => tt.baseWeight,
              set: (tt, et) => {
                tt.baseWeight = et
              }
            },
            metadata: et
          }, Zq, Lq), (0, vt.l)(tt, null, IV, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "baseWeightTexture" in tt,
              get: tt => tt.baseWeightTexture,
              set: (tt, et) => {
                tt.baseWeightTexture = et
              }
            },
            metadata: et
          }, Fq, kq), (0, vt.l)(tt, null, PV, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: tt => "baseColor" in tt,
              get: tt => tt.baseColor,
              set: (tt, et) => {
                tt.baseColor = et
              }
            },
            metadata: et
          }, Gq, zq), (0, vt.l)(tt, null, ZV, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "baseColorTexture" in tt,
              get: tt => tt.baseColorTexture,
              set: (tt, et) => {
                tt.baseColorTexture = et
              }
            },
            metadata: et
          }, oq, rq), (0, vt.l)(tt, null, LV, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: tt => "baseDiffuseRoughness" in tt,
              get: tt => tt.baseDiffuseRoughness,
              set: (tt, et) => {
                tt.baseDiffuseRoughness = et
              }
            },
            metadata: et
          }, Uq, Aq), (0, vt.l)(tt, null, FV, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "baseDiffuseRoughnessTexture" in tt,
              get: tt => tt.baseDiffuseRoughnessTexture,
              set: (tt, et) => {
                tt.baseDiffuseRoughnessTexture = et
              }
            },
            metadata: et
          }, iq, Yq), (0, vt.l)(tt, null, kV, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: tt => "baseMetalness" in tt,
              get: tt => tt.baseMetalness,
              set: (tt, et) => {
                tt.baseMetalness = et
              }
            },
            metadata: et
          }, Bq, pq), (0, vt.l)(tt, null, GV, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "baseMetalnessTexture" in tt,
              get: tt => tt.baseMetalnessTexture,
              set: (tt, et) => {
                tt.baseMetalnessTexture = et
              }
            },
            metadata: et
          }, xq, Tq), (0, vt.l)(tt, null, zV, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: tt => "specularWeight" in tt,
              get: tt => tt.specularWeight,
              set: (tt, et) => {
                tt.specularWeight = et
              }
            },
            metadata: et
          }, gq, sq), (0, vt.l)(tt, null, oV, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "specularWeightTexture" in tt,
              get: tt => tt.specularWeightTexture,
              set: (tt, et) => {
                tt.specularWeightTexture = et
              }
            },
            metadata: et
          }, nq, tD), (0, vt.l)(tt, null, rV, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: tt => "specularColor" in tt,
              get: tt => tt.specularColor,
              set: (tt, et) => {
                tt.specularColor = et
              }
            },
            metadata: et
          }, eD, VD), (0, vt.l)(tt, null, UV, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "specularColorTexture" in tt,
              get: tt => tt.specularColorTexture,
              set: (tt, et) => {
                tt.specularColorTexture = et
              }
            },
            metadata: et
          }, OD, qD), (0, vt.l)(tt, null, AV, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: tt => "specularRoughness" in tt,
              get: tt => tt.specularRoughness,
              set: (tt, et) => {
                tt.specularRoughness = et
              }
            },
            metadata: et
          }, DD, mD), (0, vt.l)(tt, null, iV, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "specularRoughnessTexture" in tt,
              get: tt => tt.specularRoughnessTexture,
              set: (tt, et) => {
                tt.specularRoughnessTexture = et
              }
            },
            metadata: et
          }, dD, jD), (0, vt.l)(tt, null, YV, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: tt => "specularRoughnessAnisotropy" in tt,
              get: tt => tt.specularRoughnessAnisotropy,
              set: (tt, et) => {
                tt.specularRoughnessAnisotropy = et
              }
            },
            metadata: et
          }, HD, XD), (0, vt.l)(tt, null, BV, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "specularRoughnessAnisotropyTexture" in tt,
              get: tt => tt.specularRoughnessAnisotropyTexture,
              set: (tt, et) => {
                tt.specularRoughnessAnisotropyTexture = et
              }
            },
            metadata: et
          }, QD, lD), (0, vt.l)(tt, null, pV, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: tt => "specularIor" in tt,
              get: tt => tt.specularIor,
              set: (tt, et) => {
                tt.specularIor = et
              }
            },
            metadata: et
          }, ED, fD), (0, vt.l)(tt, null, xV, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: tt => "transmissionWeight" in tt,
              get: tt => tt.transmissionWeight,
              set: (tt, et) => {
                tt.transmissionWeight = et
              }
            },
            metadata: et
          }, wD, yD), (0, vt.l)(tt, null, TV, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "transmissionWeightTexture" in tt,
              get: tt => tt.transmissionWeightTexture,
              set: (tt, et) => {
                tt.transmissionWeightTexture = et
              }
            },
            metadata: et
          }, ND, aD), (0, vt.l)(tt, null, gV, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: tt => "transmissionColor" in tt,
              get: tt => tt.transmissionColor,
              set: (tt, et) => {
                tt.transmissionColor = et
              }
            },
            metadata: et
          }, MD, bD), (0, vt.l)(tt, null, sV, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "transmissionColorTexture" in tt,
              get: tt => tt.transmissionColorTexture,
              set: (tt, et) => {
                tt.transmissionColorTexture = et
              }
            },
            metadata: et
          }, JD, CD), (0, vt.l)(tt, null, nV, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: tt => "transmissionDepth" in tt,
              get: tt => tt.transmissionDepth,
              set: (tt, et) => {
                tt.transmissionDepth = et
              }
            },
            metadata: et
          }, uD, KD), (0, vt.l)(tt, null, tO, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "transmissionDepthTexture" in tt,
              get: tt => tt.transmissionDepthTexture,
              set: (tt, et) => {
                tt.transmissionDepthTexture = et
              }
            },
            metadata: et
          }, hD, vD), (0, vt.l)(tt, null, eO, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: tt => "transmissionScatter" in tt,
              get: tt => tt.transmissionScatter,
              set: (tt, et) => {
                tt.transmissionScatter = et
              }
            },
            metadata: et
          }, WD, SD), (0, vt.l)(tt, null, VO, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "transmissionScatterTexture" in tt,
              get: tt => tt.transmissionScatterTexture,
              set: (tt, et) => {
                tt.transmissionScatterTexture = et
              }
            },
            metadata: et
          }, cD, RD), (0, vt.l)(tt, null, OO, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: tt => "transmissionScatterAnisotropy" in tt,
              get: tt => tt.transmissionScatterAnisotropy,
              set: (tt, et) => {
                tt.transmissionScatterAnisotropy = et
              }
            },
            metadata: et
          }, ID, PD), (0, vt.l)(tt, null, qO, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: tt => "transmissionDispersionScale" in tt,
              get: tt => tt.transmissionDispersionScale,
              set: (tt, et) => {
                tt.transmissionDispersionScale = et
              }
            },
            metadata: et
          }, ZD, LD), (0, vt.l)(tt, null, DO, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "transmissionDispersionScaleTexture" in tt,
              get: tt => tt.transmissionDispersionScaleTexture,
              set: (tt, et) => {
                tt.transmissionDispersionScaleTexture = et
              }
            },
            metadata: et
          }, FD, kD), (0, vt.l)(tt, null, mO, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: tt => "transmissionDispersionAbbeNumber" in tt,
              get: tt => tt.transmissionDispersionAbbeNumber,
              set: (tt, et) => {
                tt.transmissionDispersionAbbeNumber = et
              }
            },
            metadata: et
          }, GD, zD), (0, vt.l)(tt, null, dO, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: tt => "subsurfaceWeight" in tt,
              get: tt => tt.subsurfaceWeight,
              set: (tt, et) => {
                tt.subsurfaceWeight = et
              }
            },
            metadata: et
          }, oD, rD), (0, vt.l)(tt, null, jO, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "subsurfaceWeightTexture" in tt,
              get: tt => tt.subsurfaceWeightTexture,
              set: (tt, et) => {
                tt.subsurfaceWeightTexture = et
              }
            },
            metadata: et
          }, UD, AD), (0, vt.l)(tt, null, HO, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: tt => "subsurfaceColor" in tt,
              get: tt => tt.subsurfaceColor,
              set: (tt, et) => {
                tt.subsurfaceColor = et
              }
            },
            metadata: et
          }, iD, YD), (0, vt.l)(tt, null, XO, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "subsurfaceColorTexture" in tt,
              get: tt => tt.subsurfaceColorTexture,
              set: (tt, et) => {
                tt.subsurfaceColorTexture = et
              }
            },
            metadata: et
          }, BD, pD), (0, vt.l)(tt, null, QO, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: tt => "subsurfaceRadius" in tt,
              get: tt => tt.subsurfaceRadius,
              set: (tt, et) => {
                tt.subsurfaceRadius = et
              }
            },
            metadata: et
          }, xD, TD), (0, vt.l)(tt, null, lO, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: tt => "subsurfaceRadiusScale" in tt,
              get: tt => tt.subsurfaceRadiusScale,
              set: (tt, et) => {
                tt.subsurfaceRadiusScale = et
              }
            },
            metadata: et
          }, gD, sD), (0, vt.l)(tt, null, EO, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "subsurfaceRadiusScaleTexture" in tt,
              get: tt => tt.subsurfaceRadiusScaleTexture,
              set: (tt, et) => {
                tt.subsurfaceRadiusScaleTexture = et
              }
            },
            metadata: et
          }, nD, tm), (0, vt.l)(tt, null, fO, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: tt => "subsurfaceScatterAnisotropy" in tt,
              get: tt => tt.subsurfaceScatterAnisotropy,
              set: (tt, et) => {
                tt.subsurfaceScatterAnisotropy = et
              }
            },
            metadata: et
          }, em, Vm), (0, vt.l)(tt, null, wO, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: tt => "coatWeight" in tt,
              get: tt => tt.coatWeight,
              set: (tt, et) => {
                tt.coatWeight = et
              }
            },
            metadata: et
          }, Om, qm), (0, vt.l)(tt, null, yO, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "coatWeightTexture" in tt,
              get: tt => tt.coatWeightTexture,
              set: (tt, et) => {
                tt.coatWeightTexture = et
              }
            },
            metadata: et
          }, Dm, mm), (0, vt.l)(tt, null, NO, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: tt => "coatColor" in tt,
              get: tt => tt.coatColor,
              set: (tt, et) => {
                tt.coatColor = et
              }
            },
            metadata: et
          }, dm, jm), (0, vt.l)(tt, null, aO, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "coatColorTexture" in tt,
              get: tt => tt.coatColorTexture,
              set: (tt, et) => {
                tt.coatColorTexture = et
              }
            },
            metadata: et
          }, Hm, Xm), (0, vt.l)(tt, null, MO, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: tt => "coatRoughness" in tt,
              get: tt => tt.coatRoughness,
              set: (tt, et) => {
                tt.coatRoughness = et
              }
            },
            metadata: et
          }, Qm, lm), (0, vt.l)(tt, null, bO, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "coatRoughnessTexture" in tt,
              get: tt => tt.coatRoughnessTexture,
              set: (tt, et) => {
                tt.coatRoughnessTexture = et
              }
            },
            metadata: et
          }, Em, fm), (0, vt.l)(tt, null, JO, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: tt => "coatRoughnessAnisotropy" in tt,
              get: tt => tt.coatRoughnessAnisotropy,
              set: (tt, et) => {
                tt.coatRoughnessAnisotropy = et
              }
            },
            metadata: et
          }, wm, ym), (0, vt.l)(tt, null, CO, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "coatRoughnessAnisotropyTexture" in tt,
              get: tt => tt.coatRoughnessAnisotropyTexture,
              set: (tt, et) => {
                tt.coatRoughnessAnisotropyTexture = et
              }
            },
            metadata: et
          }, Nm, am), (0, vt.l)(tt, null, uO, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: tt => "coatIor" in tt,
              get: tt => tt.coatIor,
              set: (tt, et) => {
                tt.coatIor = et
              }
            },
            metadata: et
          }, Mm, bm), (0, vt.l)(tt, null, KO, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: tt => "coatDarkening" in tt,
              get: tt => tt.coatDarkening,
              set: (tt, et) => {
                tt.coatDarkening = et
              }
            },
            metadata: et
          }, Jm, Cm), (0, vt.l)(tt, null, hO, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "coatDarkeningTexture" in tt,
              get: tt => tt.coatDarkeningTexture,
              set: (tt, et) => {
                tt.coatDarkeningTexture = et
              }
            },
            metadata: et
          }, um, Km), (0, vt.l)(tt, null, vO, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: tt => "fuzzWeight" in tt,
              get: tt => tt.fuzzWeight,
              set: (tt, et) => {
                tt.fuzzWeight = et
              }
            },
            metadata: et
          }, hm, Wm), (0, vt.l)(tt, null, WO, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "fuzzWeightTexture" in tt,
              get: tt => tt.fuzzWeightTexture,
              set: (tt, et) => {
                tt.fuzzWeightTexture = et
              }
            },
            metadata: et
          }, Sm, cm), (0, vt.l)(tt, null, SO, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: tt => "fuzzColor" in tt,
              get: tt => tt.fuzzColor,
              set: (tt, et) => {
                tt.fuzzColor = et
              }
            },
            metadata: et
          }, Rm, Im), (0, vt.l)(tt, null, cO, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "fuzzColorTexture" in tt,
              get: tt => tt.fuzzColorTexture,
              set: (tt, et) => {
                tt.fuzzColorTexture = et
              }
            },
            metadata: et
          }, Pm, Zm), (0, vt.l)(tt, null, RO, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: tt => "fuzzRoughness" in tt,
              get: tt => tt.fuzzRoughness,
              set: (tt, et) => {
                tt.fuzzRoughness = et
              }
            },
            metadata: et
          }, Lm, Fm), (0, vt.l)(tt, null, IO, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "fuzzRoughnessTexture" in tt,
              get: tt => tt.fuzzRoughnessTexture,
              set: (tt, et) => {
                tt.fuzzRoughnessTexture = et
              }
            },
            metadata: et
          }, km, Gm), (0, vt.l)(tt, null, PO, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: tt => "geometryThinWalled" in tt,
              get: tt => tt.geometryThinWalled,
              set: (tt, et) => {
                tt.geometryThinWalled = et
              }
            },
            metadata: et
          }, zm, om), (0, vt.l)(tt, null, ZO, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "geometryNormalTexture" in tt,
              get: tt => tt.geometryNormalTexture,
              set: (tt, et) => {
                tt.geometryNormalTexture = et
              }
            },
            metadata: et
          }, rm, Um), (0, vt.l)(tt, null, LO, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: tt => "geometryTangent" in tt,
              get: tt => tt.geometryTangent,
              set: (tt, et) => {
                tt.geometryTangent = et
              }
            },
            metadata: et
          }, Am, im), (0, vt.l)(tt, null, FO, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "geometryTangentTexture" in tt,
              get: tt => tt.geometryTangentTexture,
              set: (tt, et) => {
                tt.geometryTangentTexture = et
              }
            },
            metadata: et
          }, Ym, Bm), (0, vt.l)(tt, null, kO, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "geometryCoatNormalTexture" in tt,
              get: tt => tt.geometryCoatNormalTexture,
              set: (tt, et) => {
                tt.geometryCoatNormalTexture = et
              }
            },
            metadata: et
          }, pm, xm), (0, vt.l)(tt, null, GO, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: tt => "geometryCoatTangent" in tt,
              get: tt => tt.geometryCoatTangent,
              set: (tt, et) => {
                tt.geometryCoatTangent = et
              }
            },
            metadata: et
          }, Tm, gm), (0, vt.l)(tt, null, zO, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "geometryCoatTangentTexture" in tt,
              get: tt => tt.geometryCoatTangentTexture,
              set: (tt, et) => {
                tt.geometryCoatTangentTexture = et
              }
            },
            metadata: et
          }, sm, nm), (0, vt.l)(tt, null, oO, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: tt => "geometryOpacity" in tt,
              get: tt => tt.geometryOpacity,
              set: (tt, et) => {
                tt.geometryOpacity = et
              }
            },
            metadata: et
          }, td, ed), (0, vt.l)(tt, null, rO, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "geometryOpacityTexture" in tt,
              get: tt => tt.geometryOpacityTexture,
              set: (tt, et) => {
                tt.geometryOpacityTexture = et
              }
            },
            metadata: et
          }, Vd, Od), (0, vt.l)(tt, null, UO, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: tt => "geometryThickness" in tt,
              get: tt => tt.geometryThickness,
              set: (tt, et) => {
                tt.geometryThickness = et
              }
            },
            metadata: et
          }, qd, Dd), (0, vt.l)(tt, null, AO, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "geometryThicknessTexture" in tt,
              get: tt => tt.geometryThicknessTexture,
              set: (tt, et) => {
                tt.geometryThicknessTexture = et
              }
            },
            metadata: et
          }, md, dd), (0, vt.l)(tt, null, iO, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: tt => "emissionLuminance" in tt,
              get: tt => tt.emissionLuminance,
              set: (tt, et) => {
                tt.emissionLuminance = et
              }
            },
            metadata: et
          }, jd, Hd), (0, vt.l)(tt, null, YO, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: tt => "emissionColor" in tt,
              get: tt => tt.emissionColor,
              set: (tt, et) => {
                tt.emissionColor = et
              }
            },
            metadata: et
          }, Xd, Qd), (0, vt.l)(tt, null, BO, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "emissionColorTexture" in tt,
              get: tt => tt.emissionColorTexture,
              set: (tt, et) => {
                tt.emissionColorTexture = et
              }
            },
            metadata: et
          }, ld, Ed), (0, vt.l)(tt, null, pO, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: tt => "thinFilmWeight" in tt,
              get: tt => tt.thinFilmWeight,
              set: (tt, et) => {
                tt.thinFilmWeight = et
              }
            },
            metadata: et
          }, fd, wd), (0, vt.l)(tt, null, xO, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "thinFilmWeightTexture" in tt,
              get: tt => tt.thinFilmWeightTexture,
              set: (tt, et) => {
                tt.thinFilmWeightTexture = et
              }
            },
            metadata: et
          }, yd, Nd), (0, vt.l)(tt, null, TO, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: tt => "thinFilmThickness" in tt,
              get: tt => tt.thinFilmThickness,
              set: (tt, et) => {
                tt.thinFilmThickness = et
              }
            },
            metadata: et
          }, Md, bd), (0, vt.l)(tt, null, gO, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: tt => "thinFilmThicknessMin" in tt,
              get: tt => tt.thinFilmThicknessMin,
              set: (tt, et) => {
                tt.thinFilmThicknessMin = et
              }
            },
            metadata: et
          }, Jd, Cd), (0, vt.l)(tt, null, sO, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "thinFilmThicknessTexture" in tt,
              get: tt => tt.thinFilmThicknessTexture,
              set: (tt, et) => {
                tt.thinFilmThicknessTexture = et
              }
            },
            metadata: et
          }, ud, Kd), (0, vt.l)(tt, null, nO, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: tt => "thinFilmIor" in tt,
              get: tt => tt.thinFilmIor,
              set: (tt, et) => {
                tt.thinFilmIor = et
              }
            },
            metadata: et
          }, hd, vd), (0, vt.l)(tt, null, tq, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "ambientOcclusionTexture" in tt,
              get: tt => tt.ambientOcclusionTexture,
              set: (tt, et) => {
                tt.ambientOcclusionTexture = et
              }
            },
            metadata: et
          }, Wd, Sd), (0, vt.l)(tt, null, eq, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: tt => "directIntensity" in tt,
              get: tt => tt.directIntensity,
              set: (tt, et) => {
                tt.directIntensity = et
              }
            },
            metadata: et
          }, cd, Rd), (0, vt.l)(tt, null, Vq, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: tt => "environmentIntensity" in tt,
              get: tt => tt.environmentIntensity,
              set: (tt, et) => {
                tt.environmentIntensity = et
              }
            },
            metadata: et
          }, Id, Pd), (0, vt.l)(tt, null, Oq, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: tt => "useSpecularWeightFromTextureAlpha" in tt,
              get: tt => tt.useSpecularWeightFromTextureAlpha,
              set: (tt, et) => {
                tt.useSpecularWeightFromTextureAlpha = et
              }
            },
            metadata: et
          }, Zd, Ld), (0, vt.l)(tt, null, qq, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: tt => "forceAlphaTest" in tt,
              get: tt => tt.forceAlphaTest,
              set: (tt, et) => {
                tt.forceAlphaTest = et
              }
            },
            metadata: et
          }, Fd, kd), (0, vt.l)(tt, null, Dq, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: tt => "alphaCutOff" in tt,
              get: tt => tt.alphaCutOff,
              set: (tt, et) => {
                tt.alphaCutOff = et
              }
            },
            metadata: et
          }, Gd, zd), (0, vt.l)(tt, null, mq, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: tt => "useAmbientOcclusionFromMetallicTextureRed" in tt,
              get: tt => tt.useAmbientOcclusionFromMetallicTextureRed,
              set: (tt, et) => {
                tt.useAmbientOcclusionFromMetallicTextureRed = et
              }
            },
            metadata: et
          }, od, rd), (0, vt.l)(tt, null, dq, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: tt => "useAmbientInGrayScale" in tt,
              get: tt => tt.useAmbientInGrayScale,
              set: (tt, et) => {
                tt.useAmbientInGrayScale = et
              }
            },
            metadata: et
          }, Ud, Ad), (0, vt.l)(tt, null, jq, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: tt => "usePhysicalLightFalloff" in tt,
              get: tt => tt.usePhysicalLightFalloff
            },
            metadata: et
          }, null, Pq), (0, vt.l)(tt, null, Hq, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: tt => "useGLTFLightFalloff" in tt,
              get: tt => tt.useGLTFLightFalloff
            },
            metadata: et
          }, null, Pq), (0, vt.l)(tt, null, Xq, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: tt => "useObjectSpaceNormalMap" in tt,
              get: tt => tt.useObjectSpaceNormalMap,
              set: (tt, et) => {
                tt.useObjectSpaceNormalMap = et
              }
            },
            metadata: et
          }, Yd, Bd), (0, vt.l)(tt, null, Qq, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: tt => "useParallax" in tt,
              get: tt => tt.useParallax,
              set: (tt, et) => {
                tt.useParallax = et
              }
            },
            metadata: et
          }, pd, xd), (0, vt.l)(tt, null, lq, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: tt => "useParallaxOcclusion" in tt,
              get: tt => tt.useParallaxOcclusion,
              set: (tt, et) => {
                tt.useParallaxOcclusion = et
              }
            },
            metadata: et
          }, Td, gd), (0, vt.l)(tt, null, Eq, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: tt => "parallaxScaleBias" in tt,
              get: tt => tt.parallaxScaleBias,
              set: (tt, et) => {
                tt.parallaxScaleBias = et
              }
            },
            metadata: et
          }, sd, nd), (0, vt.l)(tt, null, fq, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: tt => "disableLighting" in tt,
              get: tt => tt.disableLighting,
              set: (tt, et) => {
                tt.disableLighting = et
              }
            },
            metadata: et
          }, tj, ej), (0, vt.l)(tt, null, wq, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: tt => "forceIrradianceInFragment" in tt,
              get: tt => tt.forceIrradianceInFragment,
              set: (tt, et) => {
                tt.forceIrradianceInFragment = et
              }
            },
            metadata: et
          }, Vj, Oj), (0, vt.l)(tt, null, yq, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: tt => "maxSimultaneousLights" in tt,
              get: tt => tt.maxSimultaneousLights,
              set: (tt, et) => {
                tt.maxSimultaneousLights = et
              }
            },
            metadata: et
          }, qj, Dj), (0, vt.l)(tt, null, Nq, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: tt => "invertNormalMapX" in tt,
              get: tt => tt.invertNormalMapX,
              set: (tt, et) => {
                tt.invertNormalMapX = et
              }
            },
            metadata: et
          }, mj, dj), (0, vt.l)(tt, null, aq, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: tt => "invertNormalMapY" in tt,
              get: tt => tt.invertNormalMapY,
              set: (tt, et) => {
                tt.invertNormalMapY = et
              }
            },
            metadata: et
          }, jj, Hj), (0, vt.l)(tt, null, Mq, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: tt => "twoSidedLighting" in tt,
              get: tt => tt.twoSidedLighting,
              set: (tt, et) => {
                tt.twoSidedLighting = et
              }
            },
            metadata: et
          }, Xj, Qj), (0, vt.l)(tt, null, bq, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: tt => "useAlphaFresnel" in tt,
              get: tt => tt.useAlphaFresnel,
              set: (tt, et) => {
                tt.useAlphaFresnel = et
              }
            },
            metadata: et
          }, lj, Ej), (0, vt.l)(tt, null, Jq, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: tt => "useLinearAlphaFresnel" in tt,
              get: tt => tt.useLinearAlphaFresnel,
              set: (tt, et) => {
                tt.useLinearAlphaFresnel = et
              }
            },
            metadata: et
          }, fj, wj), (0, vt.l)(tt, null, Cq, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "environmentBRDFTexture" in tt,
              get: tt => tt.environmentBRDFTexture,
              set: (tt, et) => {
                tt.environmentBRDFTexture = et
              }
            },
            metadata: et
          }, yj, Nj), (0, vt.l)(tt, null, uq, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: tt => "forceNormalForward" in tt,
              get: tt => tt.forceNormalForward,
              set: (tt, et) => {
                tt.forceNormalForward = et
              }
            },
            metadata: et
          }, aj, Mj), (0, vt.l)(tt, null, Kq, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: tt => "enableSpecularAntiAliasing" in tt,
              get: tt => tt.enableSpecularAntiAliasing,
              set: (tt, et) => {
                tt.enableSpecularAntiAliasing = et
              }
            },
            metadata: et
          }, bj, Jj), (0, vt.l)(tt, null, hq, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: tt => "useHorizonOcclusion" in tt,
              get: tt => tt.useHorizonOcclusion,
              set: (tt, et) => {
                tt.useHorizonOcclusion = et
              }
            },
            metadata: et
          }, Cj, uj), (0, vt.l)(tt, null, vq, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: tt => "useRadianceOcclusion" in tt,
              get: tt => tt.useRadianceOcclusion,
              set: (tt, et) => {
                tt.useRadianceOcclusion = et
              }
            },
            metadata: et
          }, Kj, hj), (0, vt.l)(tt, null, Wq, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: tt => "unlit" in tt,
              get: tt => tt.unlit,
              set: (tt, et) => {
                tt.unlit = et
              }
            },
            metadata: et
          }, vj, Wj), (0, vt.l)(tt, null, Sq, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: tt => "applyDecalMapAfterDetailMap" in tt,
              get: tt => tt.applyDecalMapAfterDetailMap,
              set: (tt, et) => {
                tt.applyDecalMapAfterDetailMap = et
              }
            },
            metadata: et
          }, Sj, cj), (0, vt.l)(tt, null, cq, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: tt => "debugMode" in tt,
              get: tt => tt.debugMode,
              set: (tt, et) => {
                tt.debugMode = et
              }
            },
            metadata: et
          }, Rj, Ij), (0, vt.l)(tt, null, Rq, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: tt => "transparencyMode" in tt,
              get: tt => tt.transparencyMode
            },
            metadata: et
          }, null, Pq), et && Object.defineProperty(tt, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: et
          })
        })(), tt.SSS_QUALITY_LOW = 0, tt.SSS_QUALITY_MEDIUM = 1, tt.SSS_QUALITY_HIGH = 2, tt._noiseTextures = {}, tt.ForceGLSL = !1, tt._ShaderLoader = new Ee.b((() => [Promise.all([Vt.e(322), Vt.e(385)]).then((() => Vt(61964))), Promise.all([Vt.e(327), Vt.e(323), Vt.e(384), Vt.e(389)]).then((() => Vt(61975)))]), (() => [Promise.all([Vt.e(341), Vt.e(343), Vt.e(388)]).then((() => Vt(62007))), Promise.all([Vt.e(341), Vt.e(344), Vt.e(387), Vt.e(390)]).then((() => Vt(62021)))])), tt
      })(),
      tV = !1;
    tV || (tV = !0, (0, xt.c)(), (0, Ue.i)("BABYLON.OpenPBRMaterial", ne));
    var eV = Vt(37367);
    class VV {
      constructor(tt) {
        this.name = Le.e.NAME_PROCEDURALTEXTURE, this.Fw = tt
      }
      register() {
        this.Fw._beforeClearStage.registerStep(Le.e.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.Fw.proceduralTexturesEnabled) {
          he.l.StartPerformanceCounter("Procedural textures", this.Fw.proceduralTextures.length > 0);
          for (let tt = 0; tt < this.Fw.proceduralTextures.length; tt++) {
            const et = this.Fw.proceduralTextures[tt];
            et._shouldRender() && et.render()
          }
          he.l.EndPerformanceCounter("Procedural textures", this.Fw.proceduralTextures.length > 0)
        }
      }
    }
    var OV = Vt(40512);
    let qV = (() => {
      var tt;
      let et, Ot, qt, mt, dt, jt = Rt.f,
        Ht = [],
        Xt = [],
        Qt = [],
        lt = [],
        Et = [],
        ft = [],
        yt = [],
        Nt = [],
        Mt = [];
      return tt = class extends jt {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(tt, et, Vt, Ot) {
          let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Dt = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            mt = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            dt = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, Ot, !Dt), this.isEnabled = ((0, vt.m)(this, Ht), (0, vt.m)(this, Xt, !0)), this.autoClear = ((0, vt.m)(this, Qt), (0, vt.m)(this, lt, !0)), this.onGenerated = (0, vt.m)(this, Et), this.onGeneratedObservable = new eV.c, this.onBeforeGenerationObservable = new eV.c, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, vt.m)(this, ft, void 0), this._drawWrapper = (0, vt.m)(this, yt), this._textures = {}, this._size = (0, vt.m)(this, Nt, void 0), this._textureType = (0, vt.m)(this, Mt), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === qt || qt instanceof Rt.f ? (this._options = {}, this._fallbackTexture = qt) : (this._options = qt, this._fallbackTexture = qt.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let jt = (Ot = this.vI() || wt.d.LastCreatedScene)._getComponent(Le.e.NAME_PROCEDURALTEXTURE);
          jt || (jt = new VV(Ot), Ot.KOt(jt)), this._options.skipSceneRegistration || Ot.proceduralTextures.push(this), this._fullEngine = Ot.Jf(), this.name = tt, this.isRenderTarget = !0, this._size = et, this._textureType = dt, this._generateMipMaps = Dt, this._drawWrapper = new OV.c(this._fullEngine), this.setFragment(Vt);
          const bt = this._createRtWrapper(mt, et, Dt, dt);
          this._texture = bt.texture;
          const Jt = [];
          Jt.push(1, 1), Jt.push(-1, 1), Jt.push(-1, -1), Jt.push(1, -1), this._vertexBuffers[ot.m.PositionKind] = new ot.m(this._fullEngine, Jt, ot.m.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(tt, et, Vt, Ot) {
          return tt ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(et, {
            generateMipMaps: Vt,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Ot,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(et, {
            generateMipMaps: Vt,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Ot,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(tt) {
          this._drawWrapper.effect = tt
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((tt => {
            this._contentData = this.readPixels(0, 0, tt), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const tt = this._fullEngine,
            et = [];
          et.push(0), et.push(1), et.push(2), et.push(0), et.push(2), et.push(3), this._indexBuffer = tt.createIndexBuffer(et)
        }
        _rebuild() {
          const tt = this._vertexBuffers[ot.m.PositionKind];
          tt && tt._rebuild(), this._createIndexBuffer(), this.refreshRate === ve.d.REFRESHRATE_RENDER_ONCE && (this.refreshRate = ve.d.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(tt) {
          if (this.isReady()) return void tt(this);
          const et = this.getEffect();
          et && et.executeWhenCompiled((() => {
            tt(this)
          }))
        }
        isReady() {
          const tt = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const et = this._getDefines();
          if (this._drawWrapper.effect && et === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const Ot = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== et && (this._cachedDefines = et, this._drawWrapper.effect = tt.createEffect(Ot, [ot.m.PositionKind], this._uniforms, this._samplers, et, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([Vt.e(393).then((() => Vt(62105))), this._options.extraInitializationsAsync()]) : await Promise.all([Vt.e(394).then((() => Vt(62112))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await Vt.e(393).then((() => Vt(62105))) : await Vt.e(394).then((() => Vt(62112)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(tt) {
          this._fragment = tt
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(tt) {
          this._refreshRate = tt, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(tt, et) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const Vt = this._texture.isCube;
          this._rtWrapper.dispose();
          const Ot = this._createRtWrapper(Vt, tt, et, this._textureType);
          this._texture = Ot.texture, this._size = tt, this._generateMipMaps = et
        }
        _checkUniform(tt) {
          -1 === this._uniforms.indexOf(tt) && this._uniforms.push(tt)
        }
        setTexture(tt, et) {
          return -1 === this._samplers.indexOf(tt) && this._samplers.push(tt), this._textures[tt] = et, this
        }
        setFloat(tt, et) {
          return this._checkUniform(tt), this._floats[tt] = et, this
        }
        setInt(tt, et) {
          return this._checkUniform(tt), this._ints[tt] = et, this
        }
        setFloats(tt, et) {
          return this._checkUniform(tt), this._floatsArrays[tt] = et, this
        }
        setColor3(tt, et) {
          return this._checkUniform(tt), this._colors3[tt] = et, this
        }
        setColor4(tt, et) {
          return this._checkUniform(tt), this._colors4[tt] = et, this
        }
        setVector2(tt, et) {
          return this._checkUniform(tt), this._vectors2[tt] = et, this
        }
        setVector3(tt, et) {
          return this._checkUniform(tt), this._vectors3[tt] = et, this
        }
        setVector4(tt, et) {
          return this._checkUniform(tt), this._vectors4[tt] = et, this
        }
        setMatrix(tt, et) {
          return this._checkUniform(tt), this._matrices[tt] = et, this
        }
        render(tt) {
          const et = this.vI();
          if (!et) return;
          const Vt = this._fullEngine;
          if (Vt.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), Vt.setState(!1), !this.nodeMaterialSource) {
            for (const tt in this._textures) this._drawWrapper.effect.setTexture(tt, this._textures[tt]);
            for (const tt in this._ints) this._drawWrapper.effect.setInt(tt, this._ints[tt]);
            for (const tt in this._floats) this._drawWrapper.effect.setFloat(tt, this._floats[tt]);
            for (const tt in this._floatsArrays) this._drawWrapper.effect.setArray(tt, this._floatsArrays[tt]);
            for (const tt in this._colors3) this._drawWrapper.effect.setColor3(tt, this._colors3[tt]);
            for (const tt in this._colors4) {
              const et = this._colors4[tt];
              this._drawWrapper.effect.setFloat4(tt, et.r, et.g, et.b, et.a)
            }
            for (const tt in this._vectors2) this._drawWrapper.effect.setVector2(tt, this._vectors2[tt]);
            for (const tt in this._vectors3) this._drawWrapper.effect.setVector3(tt, this._vectors3[tt]);
            for (const tt in this._vectors4) this._drawWrapper.effect.setVector4(tt, this._vectors4[tt]);
            for (const tt in this._matrices) this._drawWrapper.effect.setMatrix(tt, this._matrices[tt])
          }
          if (!this._texture || !this._rtWrapper) return;
          Vt._enableGPUDebugMarkers && Vt._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const Ot = Vt.currentViewport;
          if (this.isCube)
            for (let qt = 0; qt < 6; qt++) Vt.bindFramebuffer(this._rtWrapper, qt, void 0, void 0, !0), Vt.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", qt), this.autoClear && Vt.clear(et.clearColor, !0, !1, !1), Vt.drawElementsType(Dt.c.TriangleFillMode, 0, 6), Vt.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let tt = 1;
            this._rtWrapper.is3D ? tt = this._rtWrapper.depth : this._rtWrapper.is2DArray && (tt = this._rtWrapper.layers);
            for (let Ot = 0; Ot < tt; Ot++) {
              if (Vt.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, Ot), Vt.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== tt ? Ot / (tt - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", Ot);
                for (const tt in this._textures) this._drawWrapper.effect.setTexture(tt, this._textures[tt])
              }
              this.autoClear && Vt.clear(et.clearColor, !0, !1, !1), Vt.drawElementsType(Dt.c.TriangleFillMode, 0, 6), Vt.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          Ot && Vt.setViewport(Ot), this.isCube && Vt.generateMipMapsForCubemap(this._texture, !0), Vt._enableGPUDebugMarkers && Vt._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const et = this.getSize(),
            Vt = new tt(this.name, et.width, this._fragment, this.vI(), this._fallbackTexture, this._generateMipMaps);
          return Vt.hasAlpha = this.hasAlpha, Vt.level = this.level, Vt.coordinatesMode = this.coordinatesMode, Vt
        }
        dispose() {
          const tt = this.vI();
          if (!tt) return;
          const et = tt.proceduralTextures.indexOf(this);
          et >= 0 && tt.proceduralTextures.splice(et, 1);
          const Vt = this._vertexBuffers[ot.m.PositionKind];
          Vt && (Vt.dispose(), this._vertexBuffers[ot.m.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const Vt = "function" === typeof Symbol && Symbol.metadata ? Object.create(jt[Symbol.metadata] ?? null) : void 0;
        et = [(0, Wt.P)()], Ot = [(0, Wt.P)()], qt = [(0, Wt.P)()], mt = [(0, Wt.P)()], dt = [(0, Wt.P)()], (0, vt.l)(tt, null, dt, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: tt => "refreshRate" in tt,
            get: tt => tt.refreshRate
          },
          metadata: Vt
        }, null, Ht), (0, vt.l)(null, null, et, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: tt => "isEnabled" in tt,
            get: tt => tt.isEnabled,
            set: (tt, et) => {
              tt.isEnabled = et
            }
          },
          metadata: Vt
        }, Xt, Qt), (0, vt.l)(null, null, Ot, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: tt => "autoClear" in tt,
            get: tt => tt.autoClear,
            set: (tt, et) => {
              tt.autoClear = et
            }
          },
          metadata: Vt
        }, lt, Et), (0, vt.l)(null, null, qt, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: tt => "_generateMipMaps" in tt,
            get: tt => tt._generateMipMaps,
            set: (tt, et) => {
              tt._generateMipMaps = et
            }
          },
          metadata: Vt
        }, ft, yt), (0, vt.l)(null, null, mt, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: tt => "_size" in tt,
            get: tt => tt._size,
            set: (tt, et) => {
              tt._size = et
            }
          },
          metadata: Vt
        }, Nt, Mt), Vt && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Vt
        })
      })(), tt
    })();

    function DV(tt) {
      return "texture" in tt
    }

    function mV(tt) {
      return "value" in tt
    }
    async function dV(tt, et, Ot) {
      const qt = [et.red, et.green, et.blue, et.alpha],
        Dt = [],
        mt = [];
      for (let Vt = 0; Vt < 4; Vt++) {
        const tt = qt[Vt];
        if (tt)
          if (DV(tt)) {
            if (tt.sourceChannel < 0 || tt.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let et = Dt.indexOf(tt.texture); - 1 === et && (et = Dt.length, Dt.push(tt.texture)), mt[Vt] = et
          } else {
            if (!mV(tt)) throw new Error("Invalid channel input configuration");
            if (tt.value < 0 || tt.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            mt[Vt] = -1
          }
        else mt[Vt] = -1
      }
      let dt = et.outputSize;
      if (!dt && Dt.length > 0) {
        let tt = 0;
        for (const et of Dt) {
          const Vt = et.getSize(),
            Ot = Math.max(Vt.width, Vt.height);
          Ot > tt && (tt = Ot, dt = Vt.width === Vt.height ? tt : Vt)
        }
      }
      dt = dt || 512;
      const jt = [],
        Ht = new Set;
      for (let Vt = 0; Vt < 4; Vt++) {
        const tt = qt[Vt],
          et = ["RED", "GREEN", "BLUE", "ALPHA"][Vt];
        if (tt && DV(tt)) {
          jt.push(`${et}_FROM_TEXTURE`);
          const tt = mt[Vt];
          Ht.add(tt)
        }
      }
      Ht.forEach((tt => {
        jt.push(`USE_TEXTURE${tt}`)
      }));
      const Xt = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: Ot.Jf().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            Ot.Jf().isWebGPU ? await Promise.all([Vt.e(391).then((() => Vt(62094)))]) : await Promise.all([Vt.e(392).then((() => Vt(62101)))])
          },
          skipSceneRegistration: !0
        },
        Qt = new qV(tt, dt, "textureMerger", Ot, Xt);
      Qt.refreshRate = -1, Qt.defines = jt.length > 0 ? "#define " + jt.join("\n#define ") + "\n" : "";
      for (let Vt = 0; Vt < Dt.length; Vt++) lt = Dt[Vt], (Et = Qt).uOffset = lt.uOffset, Et.vOffset = lt.vOffset, Et.uScale = lt.uScale, Et.vScale = lt.vScale, Et.uAng = lt.uAng, Et.vAng = lt.vAng, Et.wAng = lt.wAng, Et.uRotationCenter = lt.uRotationCenter, Et.vRotationCenter = lt.vRotationCenter, Qt.setTexture(`inputTexture${Vt}`, Dt[Vt]);
      var lt, Et;
      for (let Vt = 0; Vt < 4; Vt++) {
        const tt = qt[Vt],
          et = ["red", "green", "blue", "alpha"][Vt];
        if (tt && DV(tt)) {
          const Ot = mt[Vt];
          Qt.setInt(`${et}TextureIndex`, Ot), Qt.setInt(`${et}SourceChannel`, tt.sourceChannel)
        } else {
          let Ot;
          Ot = tt && mV(tt) ? tt.value : 3 === Vt ? 1 : 0, Qt.setFloat(`${et}ConstantValue`, Ot)
        }
      }
      return await new Promise(((tt, et) => {
        Qt.executeWhenReady((() => {
          try {
            Qt.render(), tt(Qt)
          } catch (Vt) {
            et(Vt instanceof Error ? Vt : new Error(String(Vt)))
          }
        }))
      }))
    }

    function jV(tt, et) {
      return {
        texture: tt,
        sourceChannel: et
      }
    }

    function HV(tt) {
      return {
        value: tt
      }
    }

    function XV(tt, et, Vt, Ot) {
      return {
        red: tt,
        green: et,
        blue: Vt,
        alpha: Ot
      }
    }
    var QV = Vt(40031),
      lV = Vt(40125),
      EV = Vt(37353),
      fV = Vt(40188),
      wV = Vt(40112);
    class yV {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class NV extends QV.c {
      isDeterministicLockStep() {
        return this._options.deterministicLockstep
      }
      getLockstepMaxSteps() {
        return this._options.lockstepMaxSteps
      }
      getHardwareScalingLevel() {
        return 1
      }
      get supportsUniformBuffers() {
        return !!this._options?.enableMultiview || this.Vw > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new yV;
        super(null), void 0 === tt.deterministicLockstep && (tt.deterministicLockstep = !1), void 0 !== tt.timeStep && (this._timeStep = tt.timeStep), void 0 === tt.lockstepMaxSteps && (tt.lockstepMaxSteps = 4), this._options = tt, EV.b.SetMatrixPrecision(!!tt.useHighPrecisionMatrix), this._caps = {
          maxTexturesImageUnits: 16,
          maxVertexTextureImageUnits: 16,
          maxCombinedTexturesImageUnits: 32,
          maxTextureSize: 512,
          maxCubemapTextureSize: 512,
          maxDrawBuffers: 0,
          maxRenderTextureSize: 512,
          maxVertexAttribs: 16,
          maxVaryingVectors: 16,
          maxFragmentUniformVectors: 16,
          maxVertexUniformVectors: 16,
          shaderFloatPrecision: 10,
          standardDerivatives: !1,
          astc: null,
          pvrtc: null,
          etc1: null,
          etc2: null,
          bptc: null,
          maxAnisotropy: 0,
          uintIndices: !1,
          fragmentDepthSupported: !1,
          highPrecisionShaderSupported: !0,
          colorBufferFloat: !1,
          blendFloat: !1,
          supportFloatTexturesResolve: !1,
          rg11b10ufColorRenderable: !1,
          textureFloat: !1,
          textureFloatLinearFiltering: !1,
          textureFloatRender: !1,
          textureHalfFloat: !1,
          textureHalfFloatLinearFiltering: !1,
          textureHalfFloatRender: !1,
          textureLOD: !1,
          texelFetch: !1,
          drawBuffersExtension: !1,
          depthTextureExtension: !1,
          vertexArrayObject: !1,
          instancedArrays: !1,
          supportOcclusionQuery: !1,
          canUseTimestampForTimerQuery: !1,
          maxMSAASamples: 1,
          blendMinMax: !1,
          canUseGLInstanceID: !1,
          canUseGLVertexID: !1,
          supportComputeShaders: !1,
          supportSRGBBuffers: !1,
          supportTransformFeedbacks: !1,
          textureMaxLevel: !1,
          texture2DArrayMaxLayerCount: 128,
          disableMorphTargetTexture: !1,
          textureNorm16: !1,
          blendParametersPerTarget: !1,
          dualSourceBlending: !1,
          supportReadWriteStorageTextures: !1
        }, tt.enableMultiview && (this._caps.multiview = {
          framebufferTextureMultiviewOVR: () => {}
        }), this._features = {
          forceBitmapOverHTMLImageElement: !1,
          supportRenderAndCopyToLodForFloatTextures: !1,
          supportDepthStencilTexture: !1,
          supportShadowSamplers: !1,
          uniformBufferHardCheckMatrix: !1,
          allowTexturePrefiltering: !1,
          trackUbosInFrame: !1,
          checkUbosContentBeforeUpload: !1,
          supportCSM: !1,
          basisNeedsPOT: !1,
          support3DTextures: !1,
          needTypeSuffixInShaderConstants: !1,
          supportMSAA: !1,
          supportSSAO2: !1,
          supportIBLShadows: !1,
          supportExtendedTextureFormats: !1,
          supportSwitchCaseInShader: !1,
          supportSyncTextureRead: !1,
          needsInvertingBitmap: !1,
          useUBOBindingCache: !1,
          needShaderCodeInlining: !1,
          needToAlwaysBindUniformBuffers: !1,
          supportRenderPasses: !0,
          supportSpriteInstancing: !1,
          forceVertexBufferStrideAndOffsetMultiple4Bytes: !1,
          _checkNonFloatVertexBuffersDontRecreatePipelineContext: !1
        }, tt.renderingCanvas && (this._renderingCanvas = tt.renderingCanvas), St.d.Log(`Babylon.js v${QV.c.Version} - Null engine`);
        const et = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (et.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (et.Blob = function() {})
      }
      createVertexBuffer(tt) {
        const et = new lV.b;
        return et.references = 1, et
      }
      createIndexBuffer(tt) {
        const et = new lV.b;
        return et.references = 1, et
      }
      clear(tt, et, Vt) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(tt, et, Vt) {
        this._cachedViewport = tt
      }
      createUniformBuffer(tt) {
        const et = new lV.b;
        return et.references = 1, et.uQ = tt instanceof Array ? tt.length * Float32Array.BYTES_PER_ELEMENT : tt.byteLength, et
      }
      createDynamicUniformBuffer(tt) {
        return this.createUniformBuffer(tt)
      }
      updateUniformBuffer(tt, et, Vt, Ot) {}
      bindUniformBufferBase(tt, et, Vt) {}
      bindUniformBlock(tt, et, Vt) {}
      createShaderProgram(tt, et, Vt, Ot, qt) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(tt, et) {
        return []
      }
      getAttributes(tt, et) {
        return []
      }
      bindSamplers(tt) {
        this._currentEffect = null
      }
      enableEffect(tt) {
        tt = null !== tt && (0, wV.c)(tt) ? tt.effect : tt, this._currentEffect = tt, tt && (tt.onBind && tt.onBind(tt), tt._onBindObservable && tt._onBindObservable.notifyObservers(tt))
      }
      setStateCullFaceType(tt, et) {}
      setState(tt) {}
      setIntArray(tt, et) {
        return !0
      }
      setIntArray2(tt, et) {
        return !0
      }
      setIntArray3(tt, et) {
        return !0
      }
      setIntArray4(tt, et) {
        return !0
      }
      setFloatArray(tt, et) {
        return !0
      }
      setFloatArray2(tt, et) {
        return !0
      }
      setFloatArray3(tt, et) {
        return !0
      }
      setFloatArray4(tt, et) {
        return !0
      }
      setArray(tt, et) {
        return !0
      }
      setArray2(tt, et) {
        return !0
      }
      setArray3(tt, et) {
        return !0
      }
      setArray4(tt, et) {
        return !0
      }
      setMatrices(tt, et) {
        return !0
      }
      setMatrix3x3(tt, et) {
        return !0
      }
      setMatrix2x2(tt, et) {
        return !0
      }
      setFloat(tt, et) {
        return !0
      }
      setFloat2(tt, et, Vt) {
        return !0
      }
      setFloat3(tt, et, Vt, Ot) {
        return !0
      }
      setBool(tt, et) {
        return !0
      }
      setFloat4(tt, et, Vt, Ot, qt) {
        return !0
      }
      setAlphaMode(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[Vt] !== tt && (this.alphaState.setAlphaBlend(0 !== tt, 0), et || this.setDepthWrite(0 === tt), this._alphaMode[Vt] = tt)
      }
      bindBuffers(tt, et, Vt) {}
      wipeCaches(tt) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, tt && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(tt, et, Vt, Ot) {}
      drawElementsType(tt, et, Vt, Ot) {}
      drawArraysType(tt, et, Vt, Ot) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(tt) {}
      createTexture(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          mt = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          dt = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const jt = new We.d(this, 1),
          Ht = String(tt);
        return jt.url = Ht, jt.generateMipMaps = !et, jt.samplingMode = qt, jt.invertY = Vt, jt.baseWidth = this._options.textureSize, jt.baseHeight = this._options.textureSize, jt.width = this._options.textureSize, jt.height = this._options.textureSize, dt && (jt.format = dt), mt && (jt._buffer = mt), jt.isReady = !0, Dt && setTimeout((() => {
          Dt(jt)
        })), this._internalTexturesCache.push(jt), jt
      }
      _createHardwareRenderTargetWrapper(tt, et, Vt) {
        const Ot = new fV.d(tt, et, Vt, this);
        return this._renderTargetWrapperCache.push(Ot), Ot
      }
      createRenderTargetTexture(tt, et) {
        const Vt = this._createHardwareRenderTargetWrapper(!1, !1, tt),
          Ot = {};
        void 0 !== et && "object" === typeof et ? (Ot.generateMipMaps = et.generateMipMaps, Ot.generateDepthBuffer = void 0 === et.generateDepthBuffer || et.generateDepthBuffer, Ot.generateStencilBuffer = Ot.generateDepthBuffer && et.generateStencilBuffer, Ot.type = void 0 === et.type ? 0 : et.type, Ot.samplingMode = void 0 === et.samplingMode ? 3 : et.samplingMode) : (Ot.generateMipMaps = et, Ot.generateDepthBuffer = !0, Ot.generateStencilBuffer = !1, Ot.type = 0, Ot.samplingMode = 3);
        const qt = new We.d(this, 5);
        Vt.setTexture(qt);
        const Dt = tt.width || tt,
          mt = tt.height || tt;
        return Vt._generateDepthBuffer = Ot.generateDepthBuffer, Vt._generateStencilBuffer = !!Ot.generateStencilBuffer, qt.baseWidth = Dt, qt.baseHeight = mt, qt.width = Dt, qt.height = mt, qt.isReady = !0, qt.samples = 1, qt.generateMipMaps = !!Ot.generateMipMaps, qt.samplingMode = Ot.samplingMode, qt.type = Ot.type, this._internalTexturesCache.push(qt), Vt
      }
      createMultiviewRenderTargetTexture(tt, et) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const Vt = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: tt,
            height: et
          }),
          Ot = new We.d(this, 5, !0);
        return Ot.baseWidth = tt, Ot.baseHeight = et, Ot.width = tt, Ot.height = et, Ot.isMultiview = !0, Ot.isReady = !0, Ot.format = 5, Ot.samples = 1, Vt.setTextures(Ot), Vt
      }
      bindMultiviewFramebuffer(tt) {
        this.bindFramebuffer(tt, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(tt, et) {
        const Vt = this._createHardwareRenderTargetWrapper(!1, !0, tt),
          Ot = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...et
          };
        Ot.generateStencilBuffer = Ot.generateDepthBuffer && Ot.generateStencilBuffer, (1 !== Ot.type || this._caps.textureFloatLinearFiltering) && (2 !== Ot.type || this._caps.textureHalfFloatLinearFiltering) || (Ot.samplingMode = 1), Vt._generateDepthBuffer = Ot.generateDepthBuffer, Vt._generateStencilBuffer = !!Ot.generateStencilBuffer;
        const qt = new We.d(this, 5);
        return qt.baseWidth = tt, qt.baseHeight = tt, qt.width = tt, qt.height = tt, qt.isReady = !0, qt.isCube = !0, qt.samples = 1, qt.generateMipMaps = !!Ot.generateMipMaps, qt.samplingMode = Ot.samplingMode, qt.type = Ot.type, this._internalTexturesCache.push(qt), Vt
      }
      updateTextureSamplingMode(tt, et) {
        et.samplingMode = tt
      }
      createRawTexture(tt, et, Vt, Ot, qt, Dt, mt) {
        let dt = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          jt = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Ht = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Xt = new We.d(this, 3);
        return Xt.baseWidth = et, Xt.baseHeight = Vt, Xt.width = et, Xt.height = Vt, Xt.format = Ot, Xt.generateMipMaps = qt, Xt.samplingMode = mt, Xt.invertY = Dt, Xt._compression = dt, Xt.type = jt, Xt._useSRGBBuffer = Ht, this._doNotHandleContextLost || (Xt._bufferView = tt), Xt
      }
      updateRawTexture(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          mt = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        tt && (tt._bufferView = et, tt.format = Vt, tt.invertY = Ot, tt._compression = qt, tt.type = Dt, tt._useSRGBBuffer = mt)
      }
      bindFramebuffer(tt, et, Vt, Ot, qt) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = tt, this._currentFramebuffer = null, this._cachedViewport && !qt && this.setViewport(this._cachedViewport, Vt, Ot)
      }
      unBindFramebuffer(tt) {
        let et = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, et && et(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(tt) {
        const et = new lV.b;
        return et.references = 1, et.uQ = 1, et
      }
      updateDynamicTexture(tt, et, Vt) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(tt) {}
      updateDynamicIndexBuffer(tt, et) {}
      updateDynamicVertexBuffer(tt, et, Vt, Ot) {}
      _bindTextureDirectly(tt, et) {
        return this._boundTexturesCache[this._activeChannel] !== et && (this._boundTexturesCache[this._activeChannel] = et, !0)
      }
      _bindTexture(tt, et) {
        tt < 0 || this._bindTextureDirectly(0, et)
      }
      _deleteBuffer(tt) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(tt) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(tt, et, Vt, Ot, qt) {}
      _uploadDataToTextureDirectly(tt, et) {}
      _uploadArrayBufferViewToTexture(tt, et) {}
      _uploadImageToTexture(tt, et) {}
    }
    Vt(40246), Vt(40278), Vt(40244);
    async function aV(tt) {
      const et = tt.getInternalTexture();
      if (!et || 1 !== et.source) return null;
      if (et.invertY) {
        const et = tt.vI()?.Jf();
        if (!(et instanceof NV)) return null
      }
      const Vt = et._buffer;
      let Ot, Dt = tt.mimeType;
      try {
        Vt ? ArrayBuffer.isView(Vt) ? Ot = Vt.buffer.slice(Vt.byteOffset, Vt.byteOffset + Vt.byteLength) : Vt instanceof ArrayBuffer ? Ot = Vt : Vt instanceof Blob ? (Ot = await Vt.arrayBuffer(), Dt = Vt.type || Dt) : "string" === typeof Vt ? (Ot = await qt.Tools.LoadFileAsync(Vt), Dt = (0, jt.d)(Vt) || Dt) : "undefined" !== typeof HTMLImageElement && Vt instanceof HTMLImageElement && (Ot = await qt.Tools.LoadFileAsync(Vt.src), Dt = (0, jt.d)(Vt.src) || Dt) : (Ot = await qt.Tools.LoadFileAsync(et.url), Dt = (0, jt.d)(et.url) || Dt)
      } catch {
        return null
      }
      if (Ot && !Dt && et.url) {
        const tt = et.url.match(/^data:([^;,]+)/);
        Dt = tt ? tt[1] : (0, jt.d)(et.url)
      }
      return Ot && Dt ? {
        data: Ot,
        mimeType: Dt
      } : null
    }
    const MV = 1e-6,
      bV = new yt.Color3(.04, .04, .04),
      JV = 1024,
      CV = yt.Color3.White(),
      uV = yt.Color3.BlackReadOnly;

    function KV(tt) {
      switch (tt) {
        case "image/jpeg":
        case "image/png":
        case "image/webp":
        case "image/avif":
        case "image/ktx2":
          return !0;
        default:
          return !1
      }
    }

    function hV(tt, et, Vt) {
      if (et < bV.r) return 0;
      const Ot = bV.r,
        qt = tt * Vt / (1 - bV.r) + et - 2 * bV.r,
        Dt = qt * qt - 4 * Ot * (bV.r - et);
      return bt.Clamp((-qt + Math.sqrt(Dt)) / (2 * Ot), 0, 1)
    }

    function vV(tt) {
      const et = tt.diffuseColor.toLinearSpace(tt.vI().Jf().useExactSrgbConversions).scale(.5),
        Vt = tt.alpha,
        Ot = function(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new zt.m(0, 1),
            Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new zt.m(0, .1),
            Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new zt.m(0, .1),
            qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new zt.m(1300, .1);
          return function(tt, et, Vt, Ot, qt) {
            return (1 - tt) * (1 - tt) * (1 - tt) * et + 3 * (1 - tt) * (1 - tt) * tt * Vt + 3 * (1 - tt) * tt * tt * Ot + tt * tt * tt * qt
          }(Math.pow(tt / qt.x, .333333), et.y, Vt.y, Ot.y, qt.y)
        }(bt.Clamp(tt.specularPower, 0, JV));
      return {
        baseColorFactor: [et.r, et.g, et.b, Vt],
        metallicFactor: 0,
        roughnessFactor: Ot
      }
    }

    function WV(tt, et) {
      et.needAlphaBlending() ? tt.alphaMode = "BLEND" : et.needAlphaTesting() && (tt.alphaMode = "MASK", tt.alphaCutoff = et.alphaCutOff)
    }

    function SV(tt, et, Vt) {
      const Ot = new Uint8Array(tt * et * 4);
      for (let qt = 0; qt < Ot.length; qt += 4) Ot[qt] = Ot[qt + 1] = Ot[qt + 2] = Ot[qt + 3] = 255;
      return ut.d.CreateRGBATexture(Ot, tt, et, Vt)
    }

    function cV(tt) {
      if (tt instanceof Uint8Array) {
        const et = tt.length,
          Vt = new Float32Array(tt.length);
        for (let Ot = 0; Ot < et; ++Ot) Vt[Ot] = tt[Ot] / 255;
        return Vt
      }
      if (tt instanceof Float32Array) return tt;
      throw new Error("Unsupported pixel format!")
    }
    class RV {
      constructor(tt) {
        this._exporter = tt, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(tt) {
        return tt ? this._textureMap.get(tt.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(tt, et) {
        const Vt = vV(tt),
          Ot = {
            name: tt.name
          };
        if (null == tt.backFaceCulling || tt.backFaceCulling || (tt.twoSidedLighting || qt.Tools.Warn(tt.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), Ot.doubleSided = !0), et) {
          const et = [],
            qt = tt.diffuseTexture;
          qt && et.push(this.exportTextureAsync(qt).then((tt => {
            tt && (Vt.baseColorTexture = tt)
          })));
          const Dt = tt.bumpTexture;
          Dt && et.push(this.exportTextureAsync(Dt).then((tt => {
            tt && (Ot.normalTexture = tt, 1 !== Dt.level && (Ot.normalTexture.scale = Dt.level))
          })));
          const mt = tt.emissiveTexture;
          mt && (Ot.emissiveFactor = [1, 1, 1], et.push(this.exportTextureAsync(mt).then((tt => {
            tt && (Ot.emissiveTexture = tt)
          }))));
          const dt = tt.ambientTexture;
          dt && et.push(this.exportTextureAsync(dt).then((tt => {
            if (tt) {
              const et = {
                index: tt.index
              };
              Ot.occlusionTexture = et
            }
          }))), et.length > 0 && (this._exporter._materialNeedsUVsSet.add(tt), await Promise.all(et))
        }(tt.alpha < 1 || tt.opacityTexture) && (tt.alphaMode === Kt.e.ALPHA_COMBINE ? Ot.alphaMode = "BLEND" : qt.Tools.Warn(tt.name + ": glTF 2.0 does not support alpha mode: " + tt.alphaMode.toString())), tt.emissiveColor && !tt.emissiveColor.equalsWithEpsilon(uV, MV) && (Ot.emissiveFactor = tt.emissiveColor.GOt()), Ot.pbrMetallicRoughness = Vt, WV(Ot, tt), await this._finishMaterialAsync(Ot, tt);
        const Dt = this._exporter._materials;
        return Dt.push(Ot), Dt.length - 1
      }
      async _finishMaterialAsync(tt, et) {
        const Vt = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", tt, et),
          Ot = [];
        for (const qt of Vt) Ot.push(this.exportTextureAsync(qt));
        await Promise.all(Ot), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", tt, et)
      }
      _resizeTexturesToSameDimensions(tt, et, Vt) {
        const Ot = tt ? tt.getSize() : {
            width: 0,
            height: 0
          },
          qt = et ? et.getSize() : {
            width: 0,
            height: 0
          };
        let Dt, mt;
        return Ot.width < qt.width ? (Dt = tt && tt instanceof Ct.b ? Jt.m.CreateResizedCopy(tt, qt.width, qt.height, !0) : SV(qt.width, qt.height, Vt), mt = et) : Ot.width > qt.width ? (mt = et && et instanceof Ct.b ? Jt.m.CreateResizedCopy(et, Ot.width, Ot.height, !0) : SV(Ot.width, Ot.height, Vt), Dt = tt) : (Dt = tt, mt = et), {
          texture1: Dt,
          texture2: mt
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(tt, et, Vt) {
        const Ot = new Array;
        if (!tt && !et) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const qt = tt ? tt.vI() : et ? et.vI() : null;
        if (qt) {
          const Dt = this._resizeTexturesToSameDimensions(tt, et, qt),
            mt = Dt.texture1?.getSize();
          let dt, jt;
          const Ht = mt.width,
            Xt = mt.height,
            Qt = await Dt.texture1.readPixels(),
            lt = await Dt.texture2.readPixels();
          if (!Qt) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (dt = cV(Qt), !lt) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          jt = cV(lt);
          const Et = jt.byteLength,
            ft = new Uint8Array(Et),
            wt = new Uint8Array(Et),
            Nt = 4,
            Mt = new yt.Color3(0, 0, 0);
          let bt = 0,
            Jt = 0;
          for (let tt = 0; tt < Xt; ++tt)
            for (let et = 0; et < Ht; ++et) {
              const Ot = (Ht * tt + et) * Nt,
                mt = {
                  diffuseColor: new yt.Color3(dt[Ot], dt[Ot + 1], dt[Ot + 2]).toLinearSpace(qt.Jf().useExactSrgbConversions).multiply(Vt.diffuseColor),
                  specularColor: new yt.Color3(jt[Ot], jt[Ot + 1], jt[Ot + 2]).toLinearSpace(qt.Jf().useExactSrgbConversions).multiply(Vt.specularColor),
                  glossiness: jt[Ot + 3] * Vt.glossiness
                },
                Xt = this._convertSpecularGlossinessToMetallicRoughness(mt);
              Mt.r = Math.max(Mt.r, Xt.baseColor.r), Mt.g = Math.max(Mt.g, Xt.baseColor.g), Mt.b = Math.max(Mt.b, Xt.baseColor.b), bt = Math.max(bt, Xt.metallic), Jt = Math.max(Jt, Xt.roughness), wt[Ot] = 255 * Xt.baseColor.r, wt[Ot + 1] = 255 * Xt.baseColor.g, wt[Ot + 2] = 255 * Xt.baseColor.b, wt[Ot + 3] = Dt.texture1.hasAlpha ? 255 * dt[Ot + 3] : 255, ft[Ot] = 0, ft[Ot + 1] = 255 * Xt.roughness, ft[Ot + 2] = 255 * Xt.metallic, ft[Ot + 3] = 255
            }
          const Ct = {
            baseColor: Mt,
            metallic: bt,
            roughness: Jt
          };
          let ut = !1,
            Kt = !1;
          for (let tt = 0; tt < Xt; ++tt)
            for (let et = 0; et < Ht; ++et) {
              const Vt = (Ht * tt + et) * Nt;
              wt[Vt] /= Ct.baseColor.r > MV ? Ct.baseColor.r : 1, wt[Vt + 1] /= Ct.baseColor.g > MV ? Ct.baseColor.g : 1, wt[Vt + 2] /= Ct.baseColor.b > MV ? Ct.baseColor.b : 1;
              const Ot = yt.Color3.FromInts(wt[Vt], wt[Vt + 1], wt[Vt + 2]).toGammaSpace(qt.Jf().useExactSrgbConversions);
              wt[Vt] = 255 * Ot.r, wt[Vt + 1] = 255 * Ot.g, wt[Vt + 2] = 255 * Ot.b, Ot.equalsWithEpsilon(CV, MV) || (Kt = !0), ft[Vt + 1] /= Ct.roughness > MV ? Ct.roughness : 1, ft[Vt + 2] /= Ct.metallic > MV ? Ct.metallic : 1;
              yt.Color3.FromInts(255, ft[Vt + 1], ft[Vt + 2]).equalsWithEpsilon(CV, MV) || (ut = !0)
            }
          return ut && Ot.push((0, ht.EncodeImageAsync)(ft, Ht, Xt).then((tt => {
            Ct.metallicRoughnessTextureData = tt
          }))), Kt && Ot.push((0, ht.EncodeImageAsync)(wt, Ht, Xt).then((tt => {
            Ct.baseColorTextureData = tt
          }))), await Promise.all(Ot).then((() => Ct))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(tt) {
        const et = this._getPerceivedBrightness(tt.diffuseColor),
          Vt = this._getPerceivedBrightness(tt.specularColor),
          Ot = 1 - this._getMaxComponent(tt.specularColor),
          qt = hV(et, Vt, Ot),
          Dt = tt.diffuseColor.scale(Ot / (1 - bV.r) / Math.max(1 - qt, MV)),
          mt = tt.specularColor.subtract(bV.scale(1 - qt)).scale(1 / Math.max(qt, MV));
        let dt = yt.Color3.Lerp(Dt, mt, qt * qt);
        dt = dt.clampToRef(0, 1, dt);
        return {
          baseColor: dt,
          metallic: qt,
          roughness: 1 - tt.glossiness
        }
      }
      _getPerceivedBrightness(tt) {
        return Math.sqrt(.299 * tt.r * tt.r + .587 * tt.g * tt.g + .114 * tt.b * tt.b)
      }
      _getMaxComponent(tt) {
        return Math.max(tt.r, Math.max(tt.g, tt.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(tt, et, Vt, Ot, qt, Dt, mt, dt, jt) {
        const Ht = [],
          Xt = {
            baseColor: tt,
            metallic: et,
            roughness: Vt
          };
        if (jt)
          if (mt instanceof ne) {
            if (mt.geometryOpacityTexture) {
              const tt = Ot && Ot.getInternalTexture() ? Ot.getInternalTexture().uniqueId : 0,
                et = mt.geometryOpacityTexture && mt.geometryOpacityTexture.getInternalTexture() ? mt.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                Vt = Number(`${tt}${et}`),
                qt = this._textureMap.get(Vt);
              qt ? dt.baseColorTexture = qt : Ht.push(dV("baseColorOpacityTexture", XV(Ot ? jV(Ot, 0) : HV(1), Ot ? jV(Ot, 1) : HV(1), Ot ? jV(Ot, 2) : HV(1), jV(mt.geometryOpacityTexture, 0)), mt.vI()).then((async tt => {
                const et = await this.exportTextureAsync(tt, Vt);
                et && (dt.baseColorTexture = et)
              })))
            } else Ot && Ht.push(this.exportTextureAsync(Ot).then((tt => {
              tt && (dt.baseColorTexture = tt)
            })));
            if (mt._useMetallicFromMetallicTextureBlue && qt) Ht.push(this.exportTextureAsync(qt).then((tt => {
              tt && (dt.metallicRoughnessTexture = tt)
            })));
            else if (Dt || qt) {
              const tt = qt && qt.getInternalTexture() ? qt.getInternalTexture().uniqueId : 0,
                et = Dt && Dt.getInternalTexture() ? Dt.getInternalTexture().uniqueId : 0,
                Vt = Number(`${tt}${et}`),
                Ot = this._textureMap.get(Vt);
              Ot ? dt.metallicRoughnessTexture = Ot : Ht.push(dV("MetalRoughTexture", XV(mt.ambientOcclusionTexture ? jV(mt.ambientOcclusionTexture, 0) : HV(1), Dt ? jV(Dt, 0) : HV(1), qt ? jV(qt, 0) : HV(1)), mt.vI()).then((async tt => {
                const et = await this.exportTextureAsync(tt, Vt);
                et && (dt.metallicRoughnessTexture = et)
              })))
            }
          } else Ot && Ht.push(this.exportTextureAsync(Ot).then((tt => {
            tt && (dt.baseColorTexture = tt)
          }))), qt && Ht.push(this.exportTextureAsync(qt).then((tt => {
            tt && (dt.metallicRoughnessTexture = tt)
          })));
        return Ht.length > 0 && (this._exporter._materialNeedsUVsSet.add(mt), await Promise.all(Ht)), Xt
      }
      _getTextureSampler(tt) {
        const et = {};
        if (!tt || !(tt instanceof Ct.b)) return et;
        const Vt = this._getGLTFTextureWrapMode(tt.wrapU);
        10497 !== Vt && (et.wrapS = Vt);
        const Ot = this._getGLTFTextureWrapMode(tt.wrapV);
        switch (10497 !== Ot && (et.wrapT = Ot), tt.samplingMode) {
          case Ct.b.LINEAR_LINEAR:
            et.magFilter = 9729, et.minFilter = 9729;
            break;
          case Ct.b.LINEAR_NEAREST:
            et.magFilter = 9729, et.minFilter = 9728;
            break;
          case Ct.b.NEAREST_LINEAR:
            et.magFilter = 9728, et.minFilter = 9729;
            break;
          case Ct.b.NEAREST_LINEAR_MIPLINEAR:
            et.magFilter = 9728, et.minFilter = 9987;
            break;
          case Ct.b.NEAREST_NEAREST:
            et.magFilter = 9728, et.minFilter = 9728;
            break;
          case Ct.b.NEAREST_LINEAR_MIPNEAREST:
            et.magFilter = 9728, et.minFilter = 9985;
            break;
          case Ct.b.LINEAR_NEAREST_MIPNEAREST:
            et.magFilter = 9729, et.minFilter = 9984;
            break;
          case Ct.b.LINEAR_NEAREST_MIPLINEAR:
            et.magFilter = 9729, et.minFilter = 9986;
            break;
          case Ct.b.NEAREST_NEAREST_MIPLINEAR:
            et.magFilter = 9728, et.minFilter = 9986;
            break;
          case Ct.b.LINEAR_LINEAR_MIPLINEAR:
            et.magFilter = 9729, et.minFilter = 9987;
            break;
          case Ct.b.LINEAR_LINEAR_MIPNEAREST:
            et.magFilter = 9729, et.minFilter = 9985;
            break;
          case Ct.b.NEAREST_NEAREST_MIPNEAREST:
            et.magFilter = 9728, et.minFilter = 9984
        }
        return et
      }
      _getGLTFTextureWrapMode(tt) {
        switch (tt) {
          case Ct.b.WRAP_ADDRESSMODE:
            return 10497;
          case Ct.b.CLAMP_ADDRESSMODE:
            return 33071;
          case Ct.b.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return qt.Tools.Error(`Unsupported Texture Wrap Mode ${tt}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(tt, et, Vt) {
        const Ot = {
            diffuseColor: tt._albedoColor,
            specularColor: tt._reflectivityColor,
            glossiness: tt._microSurface
          },
          qt = tt._albedoTexture,
          Dt = tt._reflectivityTexture,
          mt = tt._useMicroSurfaceFromReflectivityMapAlpha;
        if (Dt && !mt) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((qt || Dt) && Vt) {
          this._exporter._materialNeedsUVsSet.add(tt);
          const Vt = this._exportTextureSampler(qt || Dt),
            mt = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(qt, Dt, Ot),
            dt = this._exporter._textures;
          if (mt.baseColorTextureData) {
            const tt = await this._exportImageAsync(`baseColor${dt.length}`, mt.baseColorTextureData);
            et.baseColorTexture = this._exportTextureInfo(tt, Vt, qt?.coordinatesIndex)
          }
          if (mt.metallicRoughnessTextureData) {
            const tt = await this._exportImageAsync(`metallicRoughness${dt.length}`, mt.metallicRoughnessTextureData);
            et.metallicRoughnessTexture = this._exportTextureInfo(tt, Vt, Dt?.coordinatesIndex)
          }
          return mt
        }
        return this._convertSpecularGlossinessToMetallicRoughness(Ot)
      }
      async exportPBRMaterialAsync(tt, et) {
        const Vt = {},
          Ot = {
            name: tt.name
          },
          qt = tt.isMetallicWorkflow();
        if (qt) {
          const et = tt._albedoColor,
            Ot = tt.alpha;
          et && (Vt.baseColorFactor = [et.r, et.g, et.b, Ot])
        }
        const Dt = qt ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(tt._albedoColor, tt._metallic, tt._roughness, tt._albedoTexture, tt._metallicTexture, tt._metallicTexture, tt, Vt, et) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(tt, Vt, et);
        await this._setMetallicRoughnessPbrMaterialAsync(Dt, tt, Ot, Vt, et), await this._finishMaterialAsync(Ot, tt);
        const mt = this._exporter._materials;
        return mt.push(Ot), mt.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(tt, et, Vt, Ot, Dt) {
        if (WV(Vt, et), tt.baseColor.equalsWithEpsilon(CV, MV) && bt.WithinEpsilon(et.alpha, 1, MV) || (Ot.baseColorFactor = [tt.baseColor.r, tt.baseColor.g, tt.baseColor.b, et.alpha]), null != tt.metallic && 1 !== tt.metallic && (Ot.metallicFactor = tt.metallic), null != tt.roughness && 1 !== tt.roughness && (Ot.roughnessFactor = tt.roughness), null == et.backFaceCulling || et.backFaceCulling || (et._twoSidedLighting || qt.Tools.Warn(et.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), Vt.doubleSided = !0), Dt) {
          const tt = [],
            qt = et instanceof ue ? et._bumpTexture : et.geometryNormalTexture;
          qt && tt.push(this.exportTextureAsync(qt).then((tt => {
            tt && (Vt.normalTexture = tt, 1 !== qt.level && (Vt.normalTexture.scale = qt.level))
          })));
          const Dt = et instanceof ue ? et._ambientTexture : et.ambientOcclusionTexture;
          Dt && tt.push(new Promise((async tt => {
            if (et instanceof ne && Ot.metallicRoughnessTexture) {
              const et = this._exportTextureSampler(Dt),
                Vt = this._exporter._textures[Ot.metallicRoughnessTexture.index].source,
                qt = this._exportTextureInfo(Vt, et, Dt.coordinatesIndex);
              return this._textureMap.set(Dt.uniqueId, qt), this._exporter._extensionsPostExportTextures("exporter", qt, Dt), tt(qt)
            }
            return tt(await this.exportTextureAsync(Dt))
          })).then((async tt => {
            if (tt) {
              const Ot = {
                index: tt.index,
                texCoord: tt.texCoord,
                extensions: tt.extensions
              };
              Vt.occlusionTexture = Ot, Ot.strength = et instanceof ue ? et._ambientTextureStrength : et.ambientOcclusionTexture.level
            }
          })));
          const mt = et instanceof ue ? et._emissiveTexture : et.emissionColorTexture;
          mt && tt.push(this.exportTextureAsync(mt).then((tt => {
            tt && (Vt.emissiveTexture = tt)
          }))), tt.length > 0 && (this._exporter._materialNeedsUVsSet.add(et), await Promise.all(tt))
        }
        const mt = et instanceof ue ? et._emissiveColor : et.emissionColor;
        mt.equalsWithEpsilon(uV, MV) || (Vt.emissiveFactor = mt.GOt()), Vt.pbrMetallicRoughness = Ot
      }
      async exportOpenPBRMaterialAsync(tt, et) {
        const Vt = {},
          Ot = {
            name: tt.name
          },
          qt = tt.baseColor,
          Dt = tt.geometryOpacity;
        qt && (Vt.baseColorFactor = [qt.r, qt.g, qt.b, Dt]);
        const mt = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(tt.baseColor, tt.baseMetalness, tt.specularRoughness, tt.baseColorTexture, tt.baseMetalnessTexture, tt.specularRoughnessTexture, tt, Vt, et);
        await this._setMetallicRoughnessPbrMaterialAsync(mt, tt, Ot, Vt, et), await this._finishMaterialAsync(Ot, tt);
        const dt = this._exporter._materials;
        return dt.push(Ot), dt.length - 1
      }
      async exportTextureAsync(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Vt = this._textureMap.get(et ?? tt.uniqueId);
        if (Vt) return Vt;
        const Ot = this._exportTextureSampler(tt),
          qt = await this._exportTextureImageAsync(tt);
        return Vt = this._exportTextureInfo(qt, Ot, tt.coordinatesIndex), this._textureMap.set(et ?? tt.uniqueId, Vt), this._exporter._extensionsPostExportTextures("exporter", Vt, tt), Vt
      }
      async _exportTextureImageAsync(tt) {
        const et = tt.mimeType ?? "none",
          Vt = this._internalTextureToImage,
          Ot = tt.getInternalTexture().uniqueId;
        Vt[Ot] = Vt[Ot] || {};
        let Dt = Vt[Ot][et];
        return void 0 === Dt && (Dt = (async () => {
          const Vt = await aV(tt);
          if (Vt && KV(Vt.mimeType) && ("none" === et || Vt.mimeType === et)) return await this._exportImageAsync(tt.name, new Blob([Vt.data], {
            type: Vt.mimeType
          }));
          let Ot = "image/png";
          "none" !== et && (KV(et) ? Ot = et : (Ot = "image/png", qt.Tools.Warn(`Unsupported media type: ${et}. Exporting texture as PNG.`)));
          const Dt = tt.getSize(),
            mt = await (0, Jt.i)(tt),
            dt = await (0, ht.EncodeImageAsync)(mt, Dt.width, Dt.height, Ot);
          return await this._exportImageAsync(tt.name, dt)
        })(), Vt[Ot][et] = Dt), await Dt
      }
      async _exportImageAsync(tt, et) {
        const Vt = this._exporter._images;
        let Ot;
        if (this._exporter._shouldUseGlb) {
          Ot = {
            name: tt,
            mimeType: et.type,
            bufferView: void 0
          };
          const Vt = await et.arrayBuffer(),
            qt = this._exporter._bufferManager.createBufferView(new Uint8Array(Vt));
          this._exporter._bufferManager.setBufferView(Ot, qt)
        } else {
          const Dt = tt.replace(/\.\/|\/|\.\\|\\/g, "_"),
            mt = function(tt) {
              switch (tt) {
                case "image/jpeg":
                  return ".jpg";
                case "image/png":
                  return ".png";
                case "image/webp":
                  return ".webp";
                case "image/avif":
                  return ".avif";
                case "image/ktx2":
                  return ".ktx2"
              }
            }(et.type);
          let dt = Dt + mt;
          Vt.some((tt => tt.uri === dt)) && (dt = `${Dt}_${qt.Tools.RandomId()}${mt}`), Ot = {
            name: tt,
            uri: dt
          }, this._exporter._imageData[dt] = et
        }
        return Vt.push(Ot), Vt.length - 1
      }
      _exportTextureInfo(tt, et, Vt) {
        const Ot = this._exporter._textures;
        let qt = Ot.findIndex((Vt => Vt.sampler == et && Vt.source === tt)); - 1 === qt && (qt = Ot.length, Ot.push({
          source: tt,
          sampler: et
        }));
        const Dt = {
          index: qt
        };
        return Vt && (Dt.texCoord = Vt), Dt
      }
      _exportTextureSampler(tt) {
        const et = this._getTextureSampler(tt),
          Vt = this._exporter._samplers,
          Ot = Vt.findIndex((tt => tt.minFilter === et.minFilter && tt.magFilter === et.magFilter && tt.wrapS === et.wrapS && tt.wrapT === et.wrapT));
        return -1 !== Ot ? Ot : (Vt.push(et), Vt.length - 1)
      }
    }
    var IV = Vt(40270),
      PV = Vt(40401);
    (0, PV.b)();
    var ZV = Vt(37342);
    const LV = Ot.Matrix.Compose(new Ot.uf(-1, 1, 1), Ot.Quaternion.Identity(), Ot.uf.Zero());

    function FV(tt, et) {
      if (!(tt instanceof Qt.c)) return !1;
      if (et) {
        if (!tt.getWorldMatrix().equalsWithEpsilon(Ot.Matrix.IdentityReadOnly, ZV.e)) return !1
      } else {
        if (!tt.getWorldMatrix().multiplyToRef(LV, Ot.TmpVectors.Matrix[0]).equalsWithEpsilon(Ot.Matrix.IdentityReadOnly, ZV.e)) return !1
      }
      return !(tt instanceof lt.c && tt.geometry)
    }
    const kV = Ot.uf.ZeroReadOnly,
      GV = Ot.Quaternion.Identity(),
      zV = Ot.uf.OneReadOnly,
      oV = new Ot.uf(-1, 1, 1);

    function rV(tt, et) {
      const {
        byteOffset: Vt,
        byteStride: Ot,
        type: qt,
        normalized: Dt
      } = tt, mt = tt.getSize(), dt = et.reduce(((tt, et) => et.getTotalVertices() > tt ? et.getTotalVertices() : tt), -Number.MAX_VALUE);
      return {
        byteOffset: Vt,
        byteStride: Ot,
        componentCount: mt,
        type: qt,
        count: dt * mt,
        normalized: Dt,
        totalVertices: dt,
        kind: tt.getKind()
      }
    }

    function UV(tt) {
      switch (tt) {
        case "MAT2":
        case "VEC4":
          return 4;
        case "MAT3":
          return 9;
        case "MAT4":
          return 16;
        case "SCALAR":
          return 1;
        case "VEC2":
          return 2;
        case "VEC3":
          return 3
      }
    }

    function AV(tt) {
      switch (tt) {
        case Xt.e.PositionKind:
        case Xt.e.NormalKind:
        case Xt.e.TangentKind:
        case Xt.e.ColorKind:
        case Xt.e.MatricesIndicesKind:
        case Xt.e.MatricesIndicesExtraKind:
        case Xt.e.MatricesWeightsKind:
        case Xt.e.MatricesWeightsExtraKind:
        case Xt.e.UVKind:
        case Xt.e.UV2Kind:
        case Xt.e.UV3Kind:
        case Xt.e.UV4Kind:
        case Xt.e.UV5Kind:
        case Xt.e.UV6Kind:
          return !0
      }
      return !1
    }

    function iV(tt) {
      const et = Math.sqrt(tt.x * tt.x + tt.y * tt.y + tt.z * tt.z);
      et > 0 && (tt.x /= et, tt.y /= et, tt.z /= et)
    }

    function YV(tt) {
      return tt.x *= -1, tt
    }

    function BV(tt) {
      if (tt.x * tt.x + tt.y * tt.y > .5) {
        const et = Math.abs(tt.x),
          Vt = Math.abs(tt.y);
        if (et > Vt) {
          const Vt = Math.sign(tt.x);
          tt.x = et, tt.y *= -Vt, tt.z *= -Vt, tt.w *= Vt
        } else {
          const et = Math.sign(tt.y);
          tt.x *= -et, tt.y = Vt, tt.z *= et, tt.w *= -et
        }
      } else {
        const et = Math.abs(tt.z),
          Vt = Math.abs(tt.w);
        if (et > Vt) {
          const Vt = Math.sign(tt.z);
          tt.x *= -Vt, tt.y *= Vt, tt.z = et, tt.w *= -Vt
        } else {
          const et = Math.sign(tt.w);
          tt.x *= et, tt.y *= -et, tt.z *= -et, tt.w = Vt
        }
      }
      return tt
    }

    function pV(tt) {
      tt.W9(-tt.z, tt.w, tt.x, -tt.y)
    }

    function xV(tt, et) {
      const Vt = Ot.uf.FromArrayToRef(et.translation || [0, 0, 0], 0, Ot.TmpVectors.uf[0]),
        qt = Ot.Quaternion.FromArrayToRef(et.rotation || [0, 0, 0, 1], 0, Ot.TmpVectors.Quaternion[0]),
        Dt = Ot.Matrix.ComposeToRef(zV, qt, Vt, Ot.TmpVectors.Matrix[0]),
        mt = Ot.uf.FromArrayToRef(tt.translation || [0, 0, 0], 0, Ot.TmpVectors.uf[2]),
        dt = Ot.Quaternion.FromArrayToRef(tt.rotation || [0, 0, 0, 1], 0, Ot.TmpVectors.Quaternion[1]),
        jt = Ot.Matrix.ComposeToRef(zV, dt, mt, Ot.TmpVectors.Matrix[1]);
      Dt.multiplyToRef(jt, jt), jt.decompose(void 0, qt, Vt), Vt.equalsWithEpsilon(kV, ZV.e) ? delete et.translation : et.translation = Vt.GOt(), qt.equalsWithEpsilon(GV, ZV.e) ? delete et.rotation : et.rotation = qt.GOt(), et.scale && delete et.scale
    }

    function TV(tt, et) {
      if (!(et instanceof Qt.c)) return !1;
      if (!(1 === et.getChildren().length && 0 === tt.getChildren().length && tt.parent === et)) return !1;
      const Vt = tt.vI(),
        Ot = tt instanceof PV.f && !Vt.useRightHandedSystem ? oV : zV;
      return !!et.cj.equalsWithEpsilon(Ot, ZV.e) || (St.d.Warn(`Cannot collapse node ${tt.name} into parent node ${et.name} with modified scaling.`), !1)
    }

    function gV(tt) {
      if (tt instanceof Array) {
        const et = new Float32Array(tt);
        return new Uint8Array(et.buffer, et.byteOffset, et.byteLength)
      }
      return ArrayBuffer.isView(tt) ? new Uint8Array(tt.buffer, tt.byteOffset, tt.byteLength) : new Uint8Array(tt)
    }

    function sV(tt, et) {
      for (const [Vt, Ot] of Object.entries(tt)) {
        const qt = et[Vt];
        (Array.isArray(Ot) && Array.isArray(qt) && nV(Ot, qt) || Ot === qt) && delete tt[Vt]
      }
      return tt
    }

    function nV(tt, et) {
      return tt.length === et.length && tt.every(((tt, Vt) => tt === et[Vt]))
    }
    const tO = new Map([
      [Int8Array, (tt, et, Vt) => tt.setInt8(et, Vt)],
      [Uint8Array, (tt, et, Vt) => tt.setUint8(et, Vt)],
      [Uint8ClampedArray, (tt, et, Vt) => tt.setUint8(et, Vt)],
      [Int16Array, (tt, et, Vt) => tt.setInt16(et, Vt, !0)],
      [Uint16Array, (tt, et, Vt) => tt.setUint16(et, Vt, !0)],
      [Int32Array, (tt, et, Vt) => tt.setInt32(et, Vt, !0)],
      [Uint32Array, (tt, et, Vt) => tt.setUint32(et, Vt, !0)],
      [Float32Array, (tt, et, Vt) => tt.setFloat32(et, Vt, !0)],
      [Float64Array, (tt, et, Vt) => tt.setFloat64(et, Vt, !0)]
    ]);
    class eO {
      writeTypedArray(tt) {
        this._checkGrowBuffer(tt.byteLength);
        const et = tO.get(tt.constructor);
        for (let Vt = 0; Vt < tt.length; Vt++) et(this._dataView, this._byteOffset, tt[Vt]), this._byteOffset += tt.BYTES_PER_ELEMENT
      }
      constructor(tt) {
        this._data = new Uint8Array(tt), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(tt) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, tt), this._byteOffset++
      }
      writeInt8(tt) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, tt), this._byteOffset++
      }
      writeInt16(tt) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, tt, !0), this._byteOffset += 2
      }
      writeUInt16(tt) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, tt, !0), this._byteOffset += 2
      }
      writeInt32(tt) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, tt, !0), this._byteOffset += 4
      }
      writeUInt32(tt) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, tt, !0), this._byteOffset += 4
      }
      writeFloat32(tt) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, tt, !0), this._byteOffset += 4
      }
      writeFloat64(tt) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, tt, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(tt) {
        const et = this.byteOffset + tt;
        if (et > this._data.byteLength) {
          const tt = new Uint8Array(2 * et);
          tt.set(this._data), this._data = tt, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function VO(tt) {
      return tt % 4 === 0 ? 4 : tt % 2 === 0 ? 2 : 1
    }
    class OO {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(tt) {
        let et = 0;
        this._bufferViewToData.forEach((tt => {
          et += tt.byteLength
        }));
        const Vt = new eO(et),
          Ot = Array.from(this._bufferViewToData.keys()).sort(((tt, et) => VO(et.byteLength) - VO(tt.byteLength)));
        for (const qt of Ot) {
          qt.byteOffset = Vt.byteOffset, tt.push(qt);
          const et = tt.length - 1,
            Ot = this.getPropertiesWithBufferView(qt);
          for (const tt of Ot) tt.bufferView = et;
          Vt.writeTypedArray(this._bufferViewToData.get(qt)), this._bufferViewToData.delete(qt)
        }
        return Vt.getOutputData()
      }
      createBufferView(tt, et) {
        const Vt = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: tt.byteLength,
          byteStride: et
        };
        return this._bufferViewToData.set(Vt, tt), Vt
      }
      createAccessor(tt, et, Vt, Ot, qt, Dt, mt) {
        this._verifyBufferView(tt);
        const dt = {
          bufferView: void 0,
          componentType: Vt,
          count: Ot,
          type: et,
          min: Dt?.min,
          max: Dt?.max,
          normalized: mt,
          byteOffset: qt
        };
        return this.setBufferView(dt, tt), this._accessorToBufferView.set(dt, tt), dt
      }
      setBufferView(tt, et) {
        this._verifyBufferView(et);
        this.getPropertiesWithBufferView(et).push(tt)
      }
      removeBufferView(tt) {
        const et = this.getPropertiesWithBufferView(tt);
        for (const Vt of et) void 0 !== Vt.bufferView && delete Vt.bufferView;
        this._bufferViewToData.delete(tt), this._bufferViewToProperties.delete(tt), this._accessorToBufferView.forEach(((et, Vt) => {
          et === tt && (void 0 !== Vt.byteOffset && delete Vt.byteOffset, this._accessorToBufferView.delete(Vt))
        }))
      }
      getBufferView(tt) {
        const et = this._accessorToBufferView.get(tt);
        return this._verifyBufferView(et), et
      }
      getPropertiesWithBufferView(tt) {
        return this._verifyBufferView(tt), this._bufferViewToProperties.set(tt, this._bufferViewToProperties.get(tt) ?? []), this._bufferViewToProperties.get(tt)
      }
      getData(tt) {
        return this._verifyBufferView(tt), this._bufferViewToData.get(tt)
      }
      _verifyBufferView(tt) {
        if (void 0 === tt || !this._bufferViewToData.has(tt)) throw new Error(`BufferView ${tt} not found in BufferManager.`)
      }
    }
    var qO = Vt(40409);
    (0, qO.d)();
    var DO = Vt(40642);
    (0, DO.i)();
    var mO = Vt(40452),
      dO = Vt(41298);
    (0, dO.h)();
    let jO = (() => {
      var tt;
      let et, Vt, Ot = [],
        qt = [],
        Dt = [],
        mt = [];
      return tt = class {
        get influence() {
          return this._influence
        }
        set influence(tt) {
          if (this._influence === tt) return;
          const et = this._influence;
          this._influence = tt, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === et || 0 === tt)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(tt) {
          this._animationPropertiesOverride = tt
        }
        constructor(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            dt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = tt, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new eV.c, this._onDataLayoutChanged = new eV.c, this.id = (0, vt.m)(this, Ot, void 0), this.morphTargetManager = ((0, vt.m)(this, qt), (0, vt.m)(this, Dt, null)), this._animationPropertiesOverride = ((0, vt.m)(this, mt), null), this.id = tt, this.morphTargetManager = dt, this._scene = Vt || wt.d.LastCreatedScene, this.influence = et, this._scene && (this._uniqueId = this._scene.getUniqueId())
        }
        get uniqueId() {
          return this._uniqueId
        }
        get hasPositions() {
          return !!this._positions
        }
        get hasNormals() {
          return !!this._normals
        }
        get hasTangents() {
          return !!this._tangents
        }
        get hasUVs() {
          return !!this._uvs
        }
        get hasUV2s() {
          return !!this._uv2s
        }
        get hasColors() {
          return !!this._colors
        }
        get vertexCount() {
          return this._positions ? this._positions.length / 3 : this._normals ? this._normals.length / 3 : this._tangents ? this._tangents.length / 3 : this._uvs ? this._uvs.length / 2 : this._uv2s ? this._uv2s.length / 2 : this._colors ? this._colors.length / 4 : 0
        }
        Ndt(tt) {
          const et = this.hasPositions;
          this._positions = tt, et !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(tt) {
          const et = this.hasNormals;
          this._normals = tt, et !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(tt) {
          const et = this.hasTangents;
          this._tangents = tt, et !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(tt) {
          const et = this.hasUVs;
          this._uvs = tt, et !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(tt) {
          const et = this.hasUV2s;
          this._uv2s = tt, et !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(tt) {
          const et = this.hasColors;
          this._colors = tt, et !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const et = Ke.d.Clone((() => new tt(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return et._positions = this._positions, et._normals = this._normals, et._tangents = this._tangents, et._uvs = this._uvs, et._uv2s = this._uv2s, et._colors = this._colors, et
        }
        serialize() {
          const tt = {};
          return tt.name = this.name, tt.influence = this.influence, null != this.id && (tt.id = this.id), tt.uniqueId = this.uniqueId, tt.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (tt.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (tt.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (tt.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (tt.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (tt.colors = Array.prototype.slice.call(this.getColors())), Ke.d.AppendSerializedAnimations(this, tt), tt
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(et, Vt) {
          let Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const qt = new tt(et.name, et.influence, Vt, Ot);
          if (qt.Ndt(et.positions), null != et.id && (qt.id = et.id), et.normals && qt.setNormals(et.normals), et.tangents && qt.setTangents(et.tangents), et.uvs && qt.setUVs(et.uvs), et.uv2s && qt.setUV2s(et.uv2s), et.colors && qt.setColors(et.colors), et.animations) {
            for (let tt = 0; tt < et.animations.length; tt++) {
              const Vt = et.animations[tt],
                Ot = (0, Ue.e)("BABYLON.Animation");
              Ot && qt.animations.push(Ot.Parse(Vt))
            }
            et.autoAnimate && Vt && Vt.beginAnimation(qt, et.autoAnimateFrom, et.autoAnimateTo, et.autoAnimateLoop, et.autoAnimateSpeed || 1)
          }
          return qt
        }
        static FromMesh(et, Vt, Ot) {
          Vt || (Vt = et.name);
          const qt = new tt(Vt, Ot, et.vI(), et.morphTargetManager);
          return qt.Ndt(et.getVerticesData(ot.m.PositionKind)), et.isVerticesDataPresent(ot.m.NormalKind) && qt.setNormals(et.getVerticesData(ot.m.NormalKind)), et.isVerticesDataPresent(ot.m.TangentKind) && qt.setTangents(et.getVerticesData(ot.m.TangentKind)), et.isVerticesDataPresent(ot.m.UVKind) && qt.setUVs(et.getVerticesData(ot.m.UVKind)), et.isVerticesDataPresent(ot.m.UV2Kind) && qt.setUV2s(et.getVerticesData(ot.m.UV2Kind)), et.isVerticesDataPresent(ot.m.ColorKind) && qt.setColors(et.getVerticesData(ot.m.ColorKind)), qt
        }
      }, (() => {
        const dt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        et = [(0, Wt.P)()], Vt = [(0, Wt.P)()], (0, vt.l)(null, null, et, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: tt => "id" in tt,
            get: tt => tt.id,
            set: (tt, et) => {
              tt.id = et
            }
          },
          metadata: dt
        }, Ot, qt), (0, vt.l)(null, null, Vt, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: tt => "morphTargetManager" in tt,
            get: tt => tt.morphTargetManager,
            set: (tt, et) => {
              tt.morphTargetManager = et
            }
          },
          metadata: dt
        }, Dt, mt), dt && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: dt
        })
      })(), tt
    })();
    var HO, XO = Vt(41379),
      QO = Vt(40445);
    ! function(tt) {
      tt[tt.INTANGENT = 0] = "INTANGENT", tt[tt.OUTTANGENT = 1] = "OUTTANGENT"
    }(HO || (HO = {}));
    class lO {
      static _IsTransformable(tt) {
        return tt && (tt instanceof Qt.c || tt instanceof qO.c || tt instanceof QO.e)
      }
      static _CreateNodeAnimation(tt, et, Vt, Ot, Dt) {
        if (this._IsTransformable(tt)) {
          const mt = [],
            dt = [],
            jt = et.getKeys(),
            Ht = lO._CalculateMinMaxKeyFrames(jt),
            Xt = lO._DeduceInterpolation(jt, Vt, Ot),
            Qt = Xt.interpolationType,
            lt = Xt.shouldBakeAnimation;
          if (lt ? lO._CreateBakedAnimation(tt, et, Vt, Ht.min, Ht.max, et.framePerSecond, Dt, mt, dt, Ht, Ot) : "LINEAR" === Qt || "STEP" === Qt ? lO._CreateLinearOrStepAnimation(tt, et, Vt, mt, dt, Ot) : "CUBICSPLINE" === Qt ? lO._CreateCubicSplineAnimation(tt, et, Vt, mt, dt, Ot) : lO._CreateBakedAnimation(tt, et, Vt, Ht.min, Ht.max, et.framePerSecond, Dt, mt, dt, Ht, Ot), mt.length && dt.length) {
            return {
              inputs: mt,
              outputs: dt,
              samplerInterpolation: Qt,
              inputsMin: lt ? Ht.min : qt.Tools.FloatRound(Ht.min / et.framePerSecond),
              inputsMax: lt ? Ht.max : qt.Tools.FloatRound(Ht.max / et.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(tt) {
        let et = null,
          Vt = "VEC3",
          Ot = !1;
        const Dt = tt.targetProperty.split(".");
        switch (Dt[0]) {
          case "cj":
            et = "scale";
            break;
          case "position":
            et = "translation";
            break;
          case "rotation":
            Vt = "VEC4", et = "rotation";
            break;
          case "rotationQuaternion":
            Vt = "VEC4", Ot = !0, et = "rotation";
            break;
          case "influence":
            Vt = "SCALAR", et = "weights";
            break;
          default:
            qt.Tools.Error(`Unsupported animatable property ${Dt[0]}`)
        }
        return et ? {
          animationChannelTargetPath: et,
          dataAccessorType: Vt,
          useQuaternion: Ot
        } : (qt.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt) {
        let Qt;
        if (lO._IsTransformable(tt) && tt.animations)
          for (const lt of tt.animations) {
            if (Xt && !Xt(lt)) continue;
            const qt = lO._DeduceAnimationInfo(lt);
            qt && (Qt = {
              name: lt.name,
              samplers: [],
              channels: []
            }, lO._AddAnimation(`${lt.name}`, lt.hasRunningRuntimeAnimations ? et : Qt, tt, lt, qt.dataAccessorType, qt.animationChannelTargetPath, Ot, Dt, mt, dt, qt.useQuaternion, jt, Ht), Qt.samplers.length && Qt.channels.length && Vt.push(Qt))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt) {
        let Qt;
        if (tt instanceof XO.b) {
          const qt = tt.morphTargetManager;
          if (qt)
            for (let lt = 0; lt < qt.numTargets; ++lt) {
              const Et = qt.getTarget(lt);
              for (const ft of Et.animations) {
                if (Xt && !Xt(ft)) continue;
                const Et = new dO.d(`${ft.name}`, "influence", ft.framePerSecond, ft.dataType, ft.Vq, ft.enableBlending),
                  wt = [],
                  yt = ft.getKeys();
                for (let tt = 0; tt < yt.length; ++tt) {
                  const et = yt[tt];
                  for (let tt = 0; tt < qt.numTargets; ++tt) tt == lt ? wt.push(et) : wt.push({
                    frame: et.frame,
                    value: 0
                  })
                }
                Et.setKeys(wt, !0);
                const Nt = lO._DeduceAnimationInfo(Et);
                Nt && (Qt = {
                  name: Et.name,
                  samplers: [],
                  channels: []
                }, lO._AddAnimation(ft.name, ft.hasRunningRuntimeAnimations ? et : Qt, tt, Et, Nt.dataAccessorType, Nt.animationChannelTargetPath, Ot, Dt, mt, dt, Nt.useQuaternion, jt, Ht, qt.numTargets), Qt.samplers.length && Qt.channels.length && Vt.push(Qt))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht) {
        let Xt;
        if (tt.animationGroups) {
          const Qt = tt.animationGroups;
          for (const lt of Qt) {
            const Qt = new Map,
              Et = new Map,
              ft = new Set,
              wt = lt.to - lt.from;
            Xt = {
              name: lt.name,
              channels: [],
              samplers: []
            };
            for (let et = 0; et < lt.targetedAnimations.length; ++et) {
              const Ht = lt.targetedAnimations[et],
                wt = Ht.target,
                yt = Ht.animation;
              if (jt && !jt(yt)) continue;
              const Nt = dt.has(wt);
              if (this._IsTransformable(wt) || 1 === wt.length && this._IsTransformable(wt[0])) {
                const tt = lO._DeduceAnimationInfo(Ht.animation);
                if (tt) {
                  const et = this._IsTransformable(wt) ? wt : this._IsTransformable(wt[0]) ? wt[0] : null;
                  et && lO._AddAnimation(`${yt.name}`, Xt, et, yt, tt.dataAccessorType, tt.animationChannelTargetPath, Vt, Ot, qt, Dt, tt.useQuaternion, mt, Nt)
                }
              } else if (wt instanceof jO || 1 === wt.length && wt[0] instanceof jO) {
                if (lO._DeduceAnimationInfo(Ht.animation)) {
                  const et = wt instanceof jO ? wt : wt[0];
                  if (et) {
                    const Vt = tt.morphTargetManagers.find((tt => {
                      for (let Vt = 0; Vt < tt.numTargets; ++Vt)
                        if (tt.getTarget(Vt) === et) return !0;
                      return !1
                    }));
                    if (Vt) {
                      const Ot = tt.meshes.find((tt => tt.morphTargetManager === Vt));
                      Ot && (Qt.has(Ot) || Qt.set(Ot, new Map), Qt.get(Ot)?.set(et, yt), ft.add(Ot), Et.set(Ot, yt))
                    }
                  }
                }
              }
            }
            ft.forEach((tt => {
              const et = tt.morphTargetManager;
              let dt = null;
              const jt = [],
                Ht = Et.get(tt).getKeys(),
                ft = Ht.length;
              for (let Vt = 0; Vt < ft; ++Vt)
                for (let Ot = 0; Ot < et.numTargets; ++Ot) {
                  const qt = et.getTarget(Ot),
                    Dt = Qt.get(tt);
                  if (Dt) {
                    const et = Dt.get(qt);
                    et ? (dt || (dt = new dO.d(`${lt.name}_${tt.name}_MorphWeightAnimation`, "influence", et.framePerSecond, dO.d.ANIMATIONTYPE_FLOAT, et.Vq, et.enableBlending)), jt.push(et.getKeys()[Vt])) : jt.push({
                      frame: lt.from + wt / ft * Vt,
                      value: qt.influence,
                      inTangent: Ht[0].inTangent ? 0 : void 0,
                      outTangent: Ht[0].outTangent ? 0 : void 0
                    })
                  }
                }
              dt.setKeys(jt, !0);
              const yt = lO._DeduceAnimationInfo(dt);
              yt && lO._AddAnimation(`${lt.name}_${tt.name}_MorphWeightAnimation`, Xt, tt, dt, yt.dataAccessorType, yt.animationChannelTargetPath, Vt, Ot, qt, Dt, yt.useQuaternion, mt, !1, et?.numTargets)
            })), Xt.channels.length && Xt.samplers.length && (Ht?.set(lt, et.length), et.push(Xt))
          }
        }
      }
      static _AddAnimation(tt, et, Vt, qt, Dt, mt, dt, jt, Ht, Xt, Qt, lt, Et, ft) {
        const wt = lO._CreateNodeAnimation(Vt, qt, mt, Qt, lt);
        let yt, Nt, Mt, bt, Jt, Ct;
        if (wt) {
          if (ft) {
            let tt, et = 0;
            const Vt = [];
            for (; wt.inputs.length > 0;) tt = wt.inputs.shift(), et % ft == 0 && Vt.push(tt), et++;
            wt.inputs = Vt
          }
          const tt = dt.get(Vt),
            qt = new Float32Array(wt.inputs);
          yt = jt.createBufferView(qt), Nt = jt.createAccessor(yt, "SCALAR", 5126, wt.inputs.length, void 0, {
            min: [wt.inputsMin],
            max: [wt.inputsMax]
          }), Xt.push(Nt), Mt = Xt.length - 1;
          const Ht = new Ot.Quaternion,
            Qt = new Ot.uf,
            lt = new Ot.uf,
            ut = Vt instanceof qO.c,
            Kt = UV(Dt),
            ht = new Float32Array(wt.outputs.length * Kt);
          wt.outputs.forEach((function(tt, et) {
            let Vt = tt;
            switch (mt) {
              case "translation":
                Et && (Ot.uf.FromArrayToRef(tt, 0, lt), YV(lt), lt.toArray(Vt));
                break;
              case "rotation":
                4 === tt.length ? Ot.Quaternion.FromArrayToRef(tt, 0, Ht) : (Vt = new Array(4), Ot.uf.FromArrayToRef(tt, 0, Qt), Ot.Quaternion.FromEulerVectorToRef(Qt, Ht)), Et && (BV(Ht), ut && pV(Ht)), Ht.toArray(Vt)
            }
            ht.set(Vt, et * Kt)
          })), yt = jt.createBufferView(ht), Nt = jt.createAccessor(yt, Dt, 5126, wt.outputs.length), Xt.push(Nt), bt = Xt.length - 1, Jt = {
            interpolation: wt.samplerInterpolation,
            input: Mt,
            output: bt
          }, et.samplers.push(Jt), Ct = {
            sampler: et.samplers.length - 1,
            target: {
              node: tt,
              path: mt
            }
          }, et.channels.push(Ct)
        }
      }
      static _CreateBakedAnimation(tt, et, Vt, Dt, mt, dt, jt, Ht, Xt, Qt, lt) {
        let Et;
        const ft = Ot.Quaternion.Identity();
        let wt, yt, Nt, Mt, bt, Jt = null,
          Ct = null;
        Qt.min = qt.Tools.FloatRound(Dt / dt);
        const ut = et.getKeys();
        for (let Ot = 0, Kt = ut.length; Ot < Kt; ++Ot) {
          if (yt = ut[Ot], Ot + 1 < Kt)
            if (Nt = ut[Ot + 1], yt.value.equals && yt.value.equals(Nt.value) || yt.value === Nt.value) {
              if (0 !== Ot) continue;
              bt = yt.frame
            } else bt = Nt.frame;
          else {
            if (Mt = ut[Ot - 1], yt.value.equals && yt.value.equals(Mt.value) || yt.value === Mt.value) continue;
            bt = mt
          }
          if (bt)
            for (let Ot = yt.frame; Ot <= bt; Ot += jt) {
              if (wt = qt.Tools.FloatRound(Ot / dt), wt === Jt) continue;
              Jt = wt, Ct = wt;
              const Dt = {
                key: 0,
                repeatCount: 0,
                Vq: et.Vq
              };
              Et = et._interpolate(Ot, Dt), lO._SetInterpolatedValue(tt, Et, wt, et, Vt, ft, Ht, Xt, lt)
            }
        }
        Ct && (Qt.max = Ct)
      }
      static _ConvertFactorToVector3OrQuaternion(tt, et, Vt, Dt, mt) {
        const dt = lO._GetBasePositionRotationOrScale(et, Dt, mt),
          jt = Vt.targetProperty.split("."),
          Ht = jt ? jt[1] : "",
          Xt = mt ? Ot.Quaternion.FromArray(dt).normalize() : Ot.uf.FromArray(dt);
        switch (Ht) {
          case "x":
          case "y":
          case "z":
            Xt[Ht] = tt;
            break;
          case "w":
            Xt.w = tt;
            break;
          default:
            qt.Tools.Error(`glTFAnimation: Unsupported component name "${Ht}"!`)
        }
        return Xt
      }
      static _SetInterpolatedValue(tt, et, Vt, qt, Dt, mt, dt, jt, Ht) {
        let Xt;
        dt.push(Vt), "weights" !== Dt ? (qt.dataType === dO.d.ANIMATIONTYPE_FLOAT && (et = this._ConvertFactorToVector3OrQuaternion(et, tt, qt, Dt, Ht)), "rotation" === Dt ? (Ht ? mt = et : (Xt = et, Ot.Quaternion.RotationYawPitchRollToRef(Xt.y, Xt.x, Xt.z, mt)), jt.push(mt.GOt())) : (Xt = et, jt.push(Xt.GOt()))) : jt.push([et])
      }
      static _CreateLinearOrStepAnimation(tt, et, Vt, Ot, qt, Dt) {
        for (const mt of et.getKeys()) Ot.push(mt.frame / et.framePerSecond), lO._AddKeyframeValue(mt, et, qt, Vt, tt, Dt)
      }
      static _CreateCubicSplineAnimation(tt, et, Vt, Ot, qt, Dt) {
        et.getKeys().forEach((function(mt) {
          Ot.push(mt.frame / et.framePerSecond), lO._AddSplineTangent(HO.INTANGENT, qt, Vt, "CUBICSPLINE", mt, Dt), lO._AddKeyframeValue(mt, et, qt, Vt, tt, Dt), lO._AddSplineTangent(HO.OUTTANGENT, qt, Vt, "CUBICSPLINE", mt, Dt)
        }))
      }
      static _GetBasePositionRotationOrScale(tt, et, Vt) {
        let qt;
        if ("rotation" === et)
          if (Vt) {
            qt = (tt.rotationQuaternion ?? Ot.Quaternion.Identity()).GOt()
          } else {
            qt = (tt.rotation ?? Ot.uf.Zero()).GOt()
          }
        else if ("translation" === et) {
          qt = (tt.position ?? Ot.uf.Zero()).GOt()
        } else {
          qt = (tt.cj ?? Ot.uf.One()).GOt()
        }
        return qt
      }
      static _AddKeyframeValue(tt, et, Vt, Dt, mt, dt) {
        let jt;
        const Ht = et.dataType;
        if (Ht === dO.d.ANIMATIONTYPE_VECTOR3) {
          let et = tt.value.GOt();
          if ("rotation" === Dt) {
            const tt = Ot.uf.FromArray(et);
            et = Ot.Quaternion.RotationYawPitchRoll(tt.y, tt.x, tt.z).GOt()
          }
          Vt.push(et)
        } else if (Ht === dO.d.ANIMATIONTYPE_FLOAT) {
          if ("weights" === Dt) Vt.push([tt.value]);
          else if (jt = this._ConvertFactorToVector3OrQuaternion(tt.value, mt, et, Dt, dt), jt) {
            if ("rotation" === Dt) {
              const tt = dt ? jt : Ot.Quaternion.RotationYawPitchRoll(jt.y, jt.x, jt.z).normalize();
              Vt.push(tt.GOt())
            }
            Vt.push(jt.GOt())
          }
        } else Ht === dO.d.ANIMATIONTYPE_QUATERNION ? Vt.push(tt.value.normalize().GOt()) : qt.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(tt, et, Vt) {
        let Ot, qt, Dt = !1;
        if ("rotation" === et && !Vt) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let mt = 0, dt = tt.length; mt < dt; ++mt)
          if (qt = tt[mt], qt.inTangent || qt.outTangent)
            if (Ot) {
              if ("CUBICSPLINE" !== Ot) {
                Ot = "LINEAR", Dt = !0;
                break
              }
            } else Ot = "CUBICSPLINE";
        else if (Ot) {
          if ("CUBICSPLINE" === Ot || qt.interpolation && 1 === qt.interpolation && "STEP" !== Ot) {
            Ot = "LINEAR", Dt = !0;
            break
          }
        } else Ot = qt.interpolation && 1 === qt.interpolation ? "STEP" : "LINEAR";
        return Ot || (Ot = "LINEAR"), {
          interpolationType: Ot,
          shouldBakeAnimation: Dt
        }
      }
      static _AddSplineTangent(tt, et, Vt, qt, Dt, mt) {
        let dt;
        const jt = tt === HO.INTANGENT ? Dt.inTangent : Dt.outTangent;
        if ("CUBICSPLINE" === qt) {
          if ("rotation" === Vt)
            if (jt)
              if (mt) dt = jt.GOt();
              else {
                const tt = jt;
                dt = Ot.Quaternion.RotationYawPitchRoll(tt.y, tt.x, tt.z).GOt()
              }
          else dt = [0, 0, 0, 0];
          else dt = "weights" === Vt ? jt ? [jt] : [0] : jt ? jt.GOt() : [0, 0, 0];
          et.push(dt)
        }
      }
      static _CalculateMinMaxKeyFrames(tt) {
        let et = 1 / 0,
          Vt = -1 / 0;
        return tt.forEach((function(tt) {
          et = Math.min(et, tt.frame), Vt = Math.max(Vt, tt.frame)
        })), {
          min: et,
          max: Vt
        }
      }
    }

    function EO(tt, et, Vt, Dt, mt, dt) {
      const jt = {
          attributes: {},
          influence: tt.influence,
          name: tt.name
        },
        Ht = et.geometry;
      if (!Ht) return qt.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), jt;
      const Qt = dt ? -1 : 1,
        lt = Ot.uf.Zero();
      let Et, ft;
      if (tt.hasPositions) {
        const Dt = tt.getPositions(),
          dt = Ht.getVerticesData(Xt.e.PositionKind);
        if (dt) {
          const tt = new Float32Array(dt.length),
            et = [1 / 0, 1 / 0, 1 / 0],
            qt = [-1 / 0, -1 / 0, -1 / 0];
          ft = dt.length / 3, Et = 0;
          for (let Vt = Et; Vt < ft; ++Vt) {
            const mt = Ot.uf.FromArray(dt, 3 * Vt);
            Ot.uf.FromArray(Dt, 3 * Vt).subtractToRef(mt, lt), lt.x *= Qt, et[0] = Math.min(et[0], lt.x), qt[0] = Math.max(qt[0], lt.x), et[1] = Math.min(et[1], lt.y), qt[1] = Math.max(qt[1], lt.y), et[2] = Math.min(et[2], lt.z), qt[2] = Math.max(qt[2], lt.z), tt[3 * Vt] = lt.x, tt[3 * Vt + 1] = lt.y, tt[3 * Vt + 2] = lt.z
          }
          const Ht = Vt.createBufferView(tt, 12),
            Xt = Vt.createAccessor(Ht, "VEC3", 5126, Dt.length / 3, 0, {
              min: et,
              max: qt
            });
          mt.push(Xt), jt.attributes.POSITION = mt.length - 1
        } else qt.Tools.Warn(`Morph target positions for mesh ${et.name} were not exported. Mesh does not have position vertex data`)
      }
      if (tt.hasNormals) {
        const Dt = tt.getNormals(),
          dt = Ht.getVerticesData(Xt.e.NormalKind);
        if (dt) {
          const tt = new Float32Array(dt.length);
          ft = dt.length / 3, Et = 0;
          for (let Vt = Et; Vt < ft; ++Vt) {
            const et = Ot.uf.FromArray(dt, 3 * Vt).normalize();
            Ot.uf.FromArray(Dt, 3 * Vt).normalize().subtractToRef(et, lt), tt[3 * Vt] = lt.x * Qt, tt[3 * Vt + 1] = lt.y, tt[3 * Vt + 2] = lt.z
          }
          const et = Vt.createBufferView(tt, 12),
            qt = Vt.createAccessor(et, "VEC3", 5126, Dt.length / 3, 0);
          mt.push(qt), jt.attributes.NORMAL = mt.length - 1
        } else qt.Tools.Warn(`Morph target normals for mesh ${et.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (tt.hasTangents) {
        const Dt = tt.getTangents(),
          dt = Ht.getVerticesData(Xt.e.TangentKind);
        if (dt) {
          ft = dt.length / 4;
          const tt = new Float32Array(3 * ft);
          Et = 0;
          for (let Vt = Et; Vt < ft; ++Vt) {
            const et = Ot.uf.FromArray(dt, 4 * Vt);
            iV(et);
            const qt = Ot.uf.FromArray(Dt, 3 * Vt);
            iV(qt), qt.subtractToRef(et, lt), tt[3 * Vt] = lt.x * Qt, tt[3 * Vt + 1] = lt.y, tt[3 * Vt + 2] = lt.z
          }
          const et = Vt.createBufferView(tt, 12),
            qt = Vt.createAccessor(et, "VEC3", 5126, ft, 0);
          mt.push(qt), jt.attributes.TANGENT = mt.length - 1
        } else qt.Tools.Warn(`Morph target tangents for mesh ${et.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (tt.hasColors) {
        const Dt = tt.getColors(),
          dt = Ht.getVerticesData(Xt.e.ColorKind),
          Qt = Ht.getVertexBuffer(Xt.e.ColorKind);
        if (dt && Qt) {
          const tt = Qt.getSize();
          ft = dt.length / tt;
          const et = new Float32Array(ft * tt);
          Et = 0;
          for (let Vt = Et; Vt < ft; ++Vt)
            if (3 === tt) {
              const qt = Ot.uf.FromArray(dt, Vt * tt);
              Ot.uf.FromArray(Dt, Vt * tt).subtractToRef(qt, lt), et[3 * Vt] = lt.x, et[3 * Vt + 1] = lt.y, et[3 * Vt + 2] = lt.z
            } else if (4 === tt) {
            const qt = new Ot.Vector4,
              mt = Ot.Vector4.FromArray(dt, Vt * tt);
            Ot.Vector4.FromArray(Dt, Vt * tt).subtractToRef(mt, qt), et[4 * Vt] = qt.x, et[4 * Vt + 1] = qt.y, et[4 * Vt + 2] = qt.z, et[4 * Vt + 3] = qt.w
          } else qt.Tools.Warn(`Unsupported number of components for color attribute: ${tt}`);
          const Ht = Vt.createBufferView(et, 4 * tt),
            Xt = Vt.createAccessor(Ht, 3 === tt ? "VEC3" : "VEC4", 5126, ft, 0);
          mt.push(Xt), jt.attributes.COLOR_0 = mt.length - 1
        } else qt.Tools.Warn(`Morph target colors for mesh ${et.name} were not exported. Mesh does not have colors vertex data`)
      }
      return jt
    }
    var fO = Vt(41824);
    class wO {}
    wO.DEFAULT_COLOR = Bt.b.White(), wO.DEFAULT_WIDTH_ATTENUATED = 1, wO.DEFAULT_WIDTH = .1;
    var yO = Vt(41293);
    class NO {
      constructor(tt) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = tt
      }
      moveTo(tt, et) {
        this._currentPath = new yO.i(tt, et), this._tempPaths.push(this._currentPath)
      }
      lineTo(tt, et) {
        this._currentPath.addLineTo(tt, et)
      }
      quadraticCurveTo(tt, et, Vt, Ot) {
        this._currentPath.addQuadraticCurveTo(tt, et, Vt, Ot, this._resolution)
      }
      bezierCurveTo(tt, et, Vt, Ot, qt, Dt) {
        this._currentPath.addBezierCurveTo(tt, et, Vt, Ot, qt, Dt, this._resolution)
      }
      extractHoles() {
        for (const tt of this._tempPaths) tt.area() > 0 ? this._holes.push(tt) : this._paths.push(tt);
        if (!this._paths.length && this._holes.length) {
          const tt = this._holes;
          this._holes = this._paths, this._paths = tt
        }
        this._tempPaths.length = 0
      }
      get paths() {
        return this._paths
      }
      get holes() {
        return this._holes
      }
    }

    function aO(tt, et, Vt, Ot, qt, Dt) {
      const mt = Dt.glyphs[tt] || Dt.glyphs["?"];
      if (!mt) return null;
      const dt = new NO(qt);
      if (mt.o) {
        const tt = mt.o.split(" ");
        for (let qt = 0, Dt = tt.length; qt < Dt;) {
          switch (tt[qt++]) {
            case "m": {
              const Dt = parseInt(tt[qt++]) * et + Vt,
                mt = parseInt(tt[qt++]) * et + Ot;
              dt.moveTo(Dt, mt);
              break
            }
            case "l": {
              const Dt = parseInt(tt[qt++]) * et + Vt,
                mt = parseInt(tt[qt++]) * et + Ot;
              dt.lineTo(Dt, mt);
              break
            }
            case "q": {
              const Dt = parseInt(tt[qt++]) * et + Vt,
                mt = parseInt(tt[qt++]) * et + Ot,
                jt = parseInt(tt[qt++]) * et + Vt,
                Ht = parseInt(tt[qt++]) * et + Ot;
              dt.quadraticCurveTo(jt, Ht, Dt, mt);
              break
            }
            case "b": {
              const Dt = parseInt(tt[qt++]) * et + Vt,
                mt = parseInt(tt[qt++]) * et + Ot,
                jt = parseInt(tt[qt++]) * et + Vt,
                Ht = parseInt(tt[qt++]) * et + Ot,
                Xt = parseInt(tt[qt++]) * et + Vt,
                Qt = parseInt(tt[qt++]) * et + Ot;
              dt.bezierCurveTo(jt, Ht, Xt, Qt, Dt, mt);
              break
            }
          }
        }
      }
      return dt.extractHoles(), {
        offsetX: mt.ha * et,
        shapePath: dt
      }
    }

    function MO(tt, et, Vt, Ot) {
      const qt = Array.from(tt),
        Dt = et / Ot.resolution,
        mt = (Ot.boundingBox.yMax - Ot.boundingBox.yMin + Ot.underlineThickness) * Dt,
        dt = [];
      let jt = 0,
        Ht = 0;
      for (let Xt = 0; Xt < qt.length; Xt++) {
        const tt = qt[Xt];
        if ("\n" === tt) jt = 0, Ht -= mt;
        else {
          const et = aO(tt, Dt, jt, Ht, Vt, Ot);
          et && (jt += et.offsetX, dt.push(et.shapePath))
        }
      }
      return dt
    }
    class bO {
      static ConvertPoints(tt, et) {
        if (tt.length && Array.isArray(tt) && "number" === typeof tt[0]) return [tt];
        if (tt.length && Array.isArray(tt[0]) && "number" === typeof tt[0][0]) return tt;
        if (tt.length && !Array.isArray(tt[0]) && tt[0] instanceof zt.n) {
          const et = [];
          for (let Vt = 0; Vt < tt.length; Vt++) {
            const Ot = tt[Vt];
            et.push(Ot.x, Ot.y, Ot.z)
          }
          return [et]
        }
        if (tt.length > 0 && Array.isArray(tt[0]) && tt[0].length > 0 && tt[0][0] instanceof zt.n) {
          const et = [],
            Vt = tt;
          for (const tt of Vt) et.push(tt.flatMap((tt => [tt.x, tt.y, tt.z])));
          return et
        }
        if (tt instanceof Float32Array) {
          if (et?.floatArrayStride) {
            const Vt = [],
              Ot = 3 * et.floatArrayStride;
            for (let et = 0; et < tt.length; et += Ot) {
              const qt = new Array(Ot);
              for (let Vt = 0; Vt < Ot; Vt++) qt[Vt] = tt[et + Vt];
              Vt.push(qt)
            }
            return Vt
          }
          return [Array.from(tt)]
        }
        if (tt.length && tt[0] instanceof Float32Array) {
          const et = [];
          for (const Vt of tt) et.push(Array.from(Vt));
          return et
        }
        return []
      }
      static OmitZeroLengthPredicate(tt, et, Vt) {
        const Ot = [];
        return et.subtract(tt).lengthSquared() > 0 && Ot.push([tt, et]), Vt.subtract(et).lengthSquared() > 0 && Ot.push([et, Vt]), tt.subtract(Vt).lengthSquared() > 0 && Ot.push([Vt, tt]), 0 === Ot.length ? null : Ot
      }
      static OmitDuplicatesPredicate(tt, et, Vt, Ot) {
        const qt = [];
        return bO._SearchInPoints(tt, et, Ot) || qt.push([tt, et]), bO._SearchInPoints(et, Vt, Ot) || qt.push([et, Vt]), bO._SearchInPoints(Vt, tt, Ot) || qt.push([Vt, tt]), 0 === qt.length ? null : qt
      }
      static _SearchInPoints(tt, et, Vt) {
        for (const Ot of Vt)
          for (let Vt = 0; Vt < Ot.length; Vt++)
            if (Ot[Vt]?.equals(tt) && (Ot[Vt + 1]?.equals(et) || Ot[Vt - 1]?.equals(et))) return !0;
        return !1
      }
      static MeshesToLines(tt, et) {
        const Vt = [];
        for (let Ot = 0; Ot < tt.length; Ot++) {
          const qt = tt[Ot],
            Dt = qt.getVerticesData(ot.m.PositionKind),
            mt = qt.zOt();
          if (Dt && mt)
            for (let tt = 0, dt = 0; tt < mt.length; tt++) {
              const jt = 3 * mt[dt++],
                Ht = 3 * mt[dt++],
                Xt = 3 * mt[dt++],
                Qt = new zt.n(Dt[jt], Dt[jt + 1], Dt[jt + 2]),
                lt = new zt.n(Dt[Ht], Dt[Ht + 1], Dt[Ht + 2]),
                Et = new zt.n(Dt[Xt], Dt[Xt + 1], Dt[Xt + 2]);
              if (et) {
                const dt = et(Qt, lt, Et, Vt, tt, jt, qt, Ot, Dt, mt);
                if (dt)
                  for (const tt of dt) Vt.push(tt)
              } else Vt.push([Qt, lt], [lt, Et], [Et, Qt])
            }
        }
        return Vt
      }
      static ToVector3Array(tt) {
        if (Array.isArray(tt[0])) {
          const et = [],
            Vt = tt;
          for (const tt of Vt) {
            const Vt = [];
            for (let et = 0; et < tt.length; et += 3) Vt.push(new zt.n(tt[et], tt[et + 1], tt[et + 2]));
            et.push(Vt)
          }
          return et
        }
        const et = tt,
          Vt = [];
        for (let Ot = 0; Ot < et.length; Ot += 3) Vt.push(new zt.n(et[Ot], et[Ot + 1], et[Ot + 2]));
        return Vt
      }
      static ToNumberArray(tt) {
        return tt.flatMap((tt => [tt.x, tt.y, tt.z]))
      }
      static GetPointsCountInfo(tt) {
        const et = new Array(tt.length);
        let Vt = 0;
        for (let Ot = tt.length; Ot--;) et[Ot] = tt[Ot].length / 3, Vt += et[Ot];
        return {
          total: Vt,
          counts: et
        }
      }
      static GetLineLength(tt) {
        if (0 === tt.length) return 0;
        let et;
        et = "number" === typeof tt[0] ? bO.ToVector3Array(tt) : tt;
        const Vt = zt.k.uf[0];
        let Ot = 0;
        for (let qt = 0; qt < et.length - 1; qt++) {
          const tt = et[qt];
          Ot += et[qt + 1].subtractToRef(tt, Vt).length()
        }
        return Ot
      }
      static GetLineLengthArray(tt, et) {
        const Vt = et ? new Float32Array(et, 0, tt.length / 3) : new Float32Array(tt.length / 3);
        let Ot = 0;
        for (let qt = 0, Dt = tt.length / 3 - 1; qt < Dt; qt++) {
          let et = tt[3 * qt + 0],
            Dt = tt[3 * qt + 1],
            mt = tt[3 * qt + 2];
          et -= tt[3 * qt + 3], Dt -= tt[3 * qt + 4], mt -= tt[3 * qt + 5];
          Ot += Math.sqrt(et * et + Dt * Dt + mt * mt), Vt[qt + 1] = Ot
        }
        return Vt
      }
      static SegmentizeSegmentByCount(tt, et, Vt) {
        const Ot = [],
          qt = et.subtract(tt),
          Dt = zt.k.uf[0];
        Dt.S_(Vt);
        const mt = zt.k.uf[1];
        qt.divideToRef(Dt, mt);
        let dt = tt.clone();
        Ot.push(dt);
        for (let jt = 0; jt < Vt; jt++) dt = dt.clone(), Ot.push(dt.addInPlace(mt));
        return Ot
      }
      static SegmentizeLineBySegmentLength(tt, et) {
        const Vt = tt[0] instanceof zt.n ? bO.GetLineSegments(tt) : "number" === typeof tt[0] ? bO.GetLineSegments(bO.ToVector3Array(tt)) : tt,
          Ot = [];
        for (const qt of Vt)
          if (qt.length > et) {
            const tt = bO.SegmentizeSegmentByCount(qt.point1, qt.point2, Math.ceil(qt.length / et));
            for (const et of tt) Ot.push(et)
          } else Ot.push(qt.point1), Ot.push(qt.point2);
        return Ot
      }
      static SegmentizeLineBySegmentCount(tt, et) {
        const Vt = "number" === typeof tt[0] ? bO.ToVector3Array(tt) : tt,
          Ot = bO.GetLineLength(Vt) / et;
        return bO.SegmentizeLineBySegmentLength(Vt, Ot)
      }
      static GetLineSegments(tt) {
        const et = [];
        for (let Vt = 0; Vt < tt.length - 1; Vt++) {
          const Ot = tt[Vt],
            qt = tt[Vt + 1],
            Dt = qt.subtract(Ot).length();
          et.push({
            point1: Ot,
            point2: qt,
            length: Dt
          })
        }
        return et
      }
      static GetMinMaxSegmentLength(tt) {
        const et = bO.GetLineSegments(tt).sort((tt => tt.length));
        return {
          min: et[0].length,
          max: et[et.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const qt = et * Vt;
        let Dt = 0,
          mt = 0;
        const dt = tt.length;
        for (let Ht = 0; Ht < dt; Ht++) {
          if (qt <= Dt + tt[Ht].length) {
            mt = Ht;
            break
          }
          Dt += tt[Ht].length
        }
        const jt = (qt - Dt) / tt[mt].length;
        return tt[mt].point2.subtractToRef(tt[mt].point1, zt.k.uf[0]), zt.k.uf[0].scaleToRef(jt, zt.k.uf[1]), Ot || zt.k.uf[1].addInPlace(tt[mt].point1), zt.k.uf[1].clone()
      }
      static GetCircleLinePoints(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tt,
          qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / et;
        const Dt = [];
        for (let mt = 0; mt <= et; mt++) Dt.push(new zt.n(Math.cos(mt * qt) * tt, Math.sin(mt * qt) * Ot, Vt));
        return Dt
      }
      static GetBezierLinePoints(tt, et, Vt, Ot) {
        return yO.e.CreateQuadraticBezier(tt, et, Vt, Ot).getPoints().flatMap((tt => [tt.x, tt.y, tt.z]))
      }
      static GetArrowCap(tt, et, Vt, Ot, qt) {
        let Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          mt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [tt.clone(), tt.add(et.multiplyByFloats(Vt, Vt, Vt))],
          widths: [Ot, qt, Dt, mt]
        }
      }
      static GetPointsFromText(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Dt = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const mt = [],
          dt = MO(tt, et, Vt, Ot);
        for (const jt of dt) {
          for (const tt of jt.paths) {
            const et = [],
              Vt = tt.getPoints();
            for (const tt of Vt) et.push(tt.x, tt.y, qt);
            mt.push(et)
          }
          if (Dt)
            for (const tt of jt.holes) {
              const et = [],
                Vt = tt.getPoints();
              for (const tt of Vt) et.push(tt.x, tt.y, qt);
              mt.push(et)
            }
        }
        return mt
      }
      static Color3toRGBAUint8(tt) {
        const et = new Uint8Array(4 * tt.length);
        for (let Vt = 0, Ot = 0; Vt < tt.length; Vt++) et[Ot++] = 255 * tt[Vt].r, et[Ot++] = 255 * tt[Vt].g, et[Ot++] = 255 * tt[Vt].b, et[Ot++] = 255;
        return et
      }
      static CreateColorsTexture(tt, et, Vt, Ot) {
        const qt = Ot.Jf().getCaps().maxTextureSize ?? 1,
          Dt = et.length > qt ? qt : et.length,
          mt = Math.ceil(et.length / qt);
        mt > 1 && (et = [...et, ...Array(Dt * mt - et.length).fill(et[0])]);
        const dt = bO.Color3toRGBAUint8(et),
          jt = new ut.d(dt, Dt, mt, QV.c.TEXTUREFORMAT_RGBA, Ot, !1, !0, Vt);
        return jt.name = tt, jt
      }
      static PrepareEmptyColorsTexture(tt) {
        if (!wO.EmptyColorsTexture) {
          const et = new Uint8Array(4);
          wO.EmptyColorsTexture = new ut.d(et, 1, 1, QV.c.TEXTUREFORMAT_RGBA, tt, !1, !1, ut.d.NEAREST_NEAREST), wO.EmptyColorsTexture.name = "grlEmptyColorsTexture", wO.EmptyColorsTexture.ZI.addOnce((() => {
            wO.EmptyColorsTexture = null
          }))
        }
        return wO.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        wO.EmptyColorsTexture?.dispose(), wO.EmptyColorsTexture = null
      }
      static BooleanToNumber(tt) {
        return tt ? 1 : 0
      }
    }
    class JO extends rt.e {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class CO extends Ut.e {
      isCompatible(tt) {
        return !0
      }
      constructor(tt, et, Vt) {
        Vt = Vt || {
          color: wO.DEFAULT_COLOR
        };
        const Ot = new JO;
        Ot.GREASED_LINE_HAS_COLOR = !!Vt.color && !Vt.useColors, Ot.GREASED_LINE_SIZE_ATTENUATION = Vt.sizeAttenuation ?? !1, Ot.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === Vt.colorDistributionType, Ot.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (et ?? tt.vI()).useRightHandedSystem, Ot.GREASED_LINE_CAMERA_FACING = Vt.cameraFacing ?? !0, super(tt, CO.GREASED_LINE_MATERIAL_NAME, 200, Ot, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = Vt?.forceGLSL || CO.ForceGLSL, this._scene = et ?? tt.vI(), this._engine = this._scene.Jf(), this._cameraFacing = Vt.cameraFacing ?? !0, this.visibility = Vt.visibility ?? 1, this.useDash = Vt.useDash ?? !1, this.dashRatio = Vt.dashRatio ?? .5, this.dashOffset = Vt.dashOffset ?? 0, this.width = Vt.width ? Vt.width : Vt.sizeAttenuation ? wO.DEFAULT_WIDTH_ATTENUATED : wO.DEFAULT_WIDTH, this._sizeAttenuation = Vt.sizeAttenuation ?? !1, this.colorMode = Vt.colorMode ?? 0, this._color = Vt.color ?? null, this.useColors = Vt.useColors ?? !1, this._colorsDistributionType = Vt.colorDistributionType ?? 0, this.colorsSampling = Vt.colorsSampling ?? ut.d.NEAREST_NEAREST, this._colors = Vt.colors ?? null, this.dashCount = Vt.dashCount ?? 1, this.resolution = Vt.resolution ?? new zt.m(this._engine.getRenderWidth(), this._engine.getRenderHeight()), Vt.colorsTexture ? this.colorsTexture = Vt.colorsTexture : this._colors ? this.colorsTexture = bO.CreateColorsTexture(`${tt.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? wO.DEFAULT_COLOR, bO.PrepareEmptyColorsTexture(this._scene)), this._engine.ZI.add((() => {
          bO.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(tt) {
        tt.push("grl_offsets"), tt.push("grl_widths"), tt.push("grl_colorPointers"), tt.push("grl_counters"), this._cameraFacing ? (tt.push("grl_previousAndSide"), tt.push("grl_nextAndCounters")) : tt.push("grl_slopes")
      }
      getSamplers(tt) {
        tt.push("grl_colors")
      }
      getActiveTextures(tt) {
        this.colorsTexture && tt.push(this.colorsTexture)
      }
      getUniforms() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const et = [{
          name: "grl_singleColor",
          size: 3,
          type: "vec3"
        }, {
          name: "grl_textureSize",
          size: 2,
          type: "vec2"
        }, {
          name: "grl_dashOptions",
          size: 4,
          type: "vec4"
        }, {
          name: "grl_colorMode_visibility_colorsWidth_useColors",
          size: 4,
          type: "vec4"
        }];
        return this._cameraFacing && et.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === tt && et.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: et,
          vertex: this._cameraFacing && this._isGLSL(tt) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(tt) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(tt) {
        if (this._cameraFacing) {
          tt.x_("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || tt.x_("viewProjection", this._scene.getTransformMatrix());
          const et = zt.k.Vector4[0];
          et.x = this._aspect, et.y = this._resolution.x, et.z = this._resolution.y, et.w = this.width, tt.updateVector4("grl_aspect_resolution_lineWidth", et)
        }
        const et = zt.k.Vector4[0];
        et.x = bO.BooleanToNumber(this.useDash), et.y = this._dashArray, et.z = this.dashOffset, et.w = this.dashRatio, tt.updateVector4("grl_dashOptions", et);
        const Vt = zt.k.Vector4[1];
        Vt.x = this.colorMode, Vt.y = this.visibility, Vt.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, Vt.w = bO.BooleanToNumber(this.useColors), tt.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", Vt), this._color && tt.updateColor3("grl_singleColor", this._color);
        const Ot = this.colorsTexture ?? wO.EmptyColorsTexture;
        tt.setTexture("grl_colors", Ot), tt.updateFloat2("grl_textureSize", Ot?.getSize().width ?? 1, Ot?.getSize().height ?? 1)
      }
      prepareDefines(tt, et, Vt) {
        tt.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, tt.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, tt.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, tt.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = et.useRightHandedSystem, tt.GREASED_LINE_CAMERA_FACING = this._cameraFacing, tt.GREASED_LINE_USE_OFFSETS = !!Vt.offsets
      }
      getClassName() {
        return CO.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(et) ? function(tt, et) {
          if ("vertex" === tt) {
            const tt = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return et && (tt["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), tt
          }
          return "fragment" === tt ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(tt, this._cameraFacing) : function(tt, et) {
          if ("vertex" === tt) {
            const tt = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return et && (tt["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), tt
          }
          return "fragment" === tt ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(tt, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(tt) {
        this.setColors(tt)
      }
      setColors(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ot = this._colors?.length ?? 0;
        if (this._colors = tt, null !== tt && 0 !== tt.length) {
          if (!et || Vt)
            if (this.colorsTexture && Ot === tt.length && !Vt) {
              const et = bO.Color3toRGBAUint8(tt);
              this.colorsTexture.update(et)
            } else this.colorsTexture?.dispose(), this.colorsTexture = bO.CreateColorsTexture(`${this._material.name}-colors-texture`, tt, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(tt) {
        this._dashCount = tt, this._dashArray = 1 / tt
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(tt) {
        this._sizeAttenuation = tt, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(tt) {
        this.setColor(tt)
      }
      setColor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== tt || null !== this._color && null === tt ? (this._color = tt, et || this.markAllDefinesAsDirty()) : this._color = tt
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(tt) {
        this._colorsDistributionType = tt, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(tt) {
        this._aspect = tt.x / tt.y, this._resolution = tt
      }
      serialize() {
        const tt = super.serialize(),
          et = {
            colorDistributionType: this._colorsDistributionType,
            colorsSampling: this.colorsSampling,
            colorMode: this.colorMode,
            dashCount: this._dashCount,
            dashOffset: this.dashOffset,
            dashRatio: this.dashRatio,
            resolution: this._resolution,
            sizeAttenuation: this._sizeAttenuation,
            useColors: this.useColors,
            useDash: this.useDash,
            visibility: this.visibility,
            width: this.width
          };
        return this._colors && (et.colors = this._colors), this._color && (et.color = this._color), tt.greasedLineMaterialOptions = et, tt
      }
      parse(tt, et, Vt) {
        super.parse(tt, et, Vt);
        const Ot = tt.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), Ot.color && this.setColor(Ot.color, !0), Ot.colorDistributionType && (this.colorsDistributionType = Ot.colorDistributionType), Ot.colors && (this.colors = Ot.colors), Ot.colorsSampling && (this.colorsSampling = Ot.colorsSampling), Ot.colorMode && (this.colorMode = Ot.colorMode), Ot.useColors && (this.useColors = Ot.useColors), Ot.visibility && (this.visibility = Ot.visibility), Ot.useDash && (this.useDash = Ot.useDash), Ot.dashCount && (this.dashCount = Ot.dashCount), Ot.dashRatio && (this.dashRatio = Ot.dashRatio), Ot.dashOffset && (this.dashOffset = Ot.dashOffset), Ot.width && (this.width = Ot.width), Ot.sizeAttenuation && (this.sizeAttenuation = Ot.sizeAttenuation), Ot.resolution && (this.resolution = Ot.resolution), this.colors ? this.colorsTexture = bO.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, et) : bO.PrepareEmptyColorsTexture(et), this.markAllDefinesAsDirty()
      }
      copyTo(tt) {
        const et = tt;
        et.colorsTexture?.dispose(), this._colors && (et.colorsTexture = bO.CreateColorsTexture(`${et._material.name}-colors-texture`, this._colors, et.colorsSampling, this._scene)), et.setColor(this.color, !0), et.colorsDistributionType = this.colorsDistributionType, et.colorsSampling = this.colorsSampling, et.colorMode = this.colorMode, et.useColors = this.useColors, et.visibility = this.visibility, et.useDash = this.useDash, et.dashCount = this.dashCount, et.dashRatio = this.dashRatio, et.dashOffset = this.dashOffset, et.width = this.width, et.sizeAttenuation = this.sizeAttenuation, et.resolution = this.resolution, et.markAllDefinesAsDirty()
      }
      _isGLSL(tt) {
        return 0 === tt || this._forceGLSL
      }
    }
    CO.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", CO.ForceGLSL = !1;
    var uO = Vt(40601),
      KO = Vt(40608),
      hO = Vt(38897),
      vO = Vt(40659),
      WO = Vt(40045);
    class SO extends vO.o {
      constructor(tt, et, Ot) {
        const qt = et.Jf(),
          Dt = qt.isWebGPU && !(Ot.forceGLSL || SO.ForceGLSL),
          mt = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        et.useRightHandedSystem && mt.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const dt = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        Ot.cameraFacing ? (mt.push("GREASED_LINE_CAMERA_FACING"), dt.push("grl_previousAndSide", "grl_nextAndCounters")) : (dt.push("grl_slopes"), dt.push("grl_counters"));
        const jt = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (Dt || jt.push("world", "viewProjection", "view", "projection"), super(tt, et, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: Dt ? ["Scene", "Mesh"] : void 0,
            attributes: dt,
            uniforms: jt,
            samplers: Dt ? [] : ["grlColors"],
            defines: mt,
            extraInitializationsAsync: async () => {
              Dt ? await Promise.all([Vt.e(339).then((() => Vt(62120))), Vt.e(395).then((() => Vt(62123)))]) : await Promise.all([Vt.e(332).then((() => Vt(62131))), Vt.e(396).then((() => Vt(62134)))])
            },
            shaderLanguage: Dt ? 1 : 0
          }), this._color = Bt.b.White(), this._colorsDistributionType = 0, this._colorsTexture = null, Ot = Ot || {
            color: wO.DEFAULT_COLOR
          }, this.visibility = Ot.visibility ?? 1, this.useDash = Ot.useDash ?? !1, this.dashRatio = Ot.dashRatio ?? .5, this.dashOffset = Ot.dashOffset ?? 0, this.dashCount = Ot.dashCount ?? 1, this.width = Ot.width ? Ot.width : Ot.sizeAttenuation && Ot.cameraFacing ? wO.DEFAULT_WIDTH_ATTENUATED : wO.DEFAULT_WIDTH, this.sizeAttenuation = Ot.sizeAttenuation ?? !1, this.color = Ot.color ?? Bt.b.White(), this.useColors = Ot.useColors ?? !1, this.colorsDistributionType = Ot.colorDistributionType ?? 0, this.colorsSampling = Ot.colorsSampling ?? ut.d.NEAREST_NEAREST, this.colorMode = Ot.colorMode ?? 0, this._colors = Ot.colors ?? null, this._cameraFacing = Ot.cameraFacing ?? !0, this.resolution = Ot.resolution ?? new zt.m(qt.getRenderWidth(), qt.getRenderHeight()), Ot.colorsTexture ? this.colorsTexture = Ot.colorsTexture : this._colors ? this.colorsTexture = bO.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, et) : (this._color = this._color ?? wO.DEFAULT_COLOR, this.colorsTexture = bO.PrepareEmptyColorsTexture(et)), Dt) {
          const tt = new WO.c;
          tt.setParameters(), tt.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", tt)
        }
        qt.ZI.add((() => {
          bO.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== wO.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new zt.m(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(tt) {
        this.setColors(tt)
      }
      setColors(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ot = this._colors?.length ?? 0;
        if (this._colors = tt, null !== tt && 0 !== tt.length) {
          if (!et || Vt)
            if (this._colorsTexture && Ot === tt.length && !Vt) {
              const et = bO.Color3toRGBAUint8(tt);
              this._colorsTexture.update(et)
            } else this._colorsTexture && this._colorsTexture !== wO.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = bO.CreateColorsTexture(`${this.name}-colors-texture`, tt, this.colorsSampling, this.vI())
        } else {
          this._colorsTexture && this._colorsTexture !== wO.EmptyColorsTexture && this._colorsTexture.dispose();
          const tt = this.vI();
          tt && (this.colorsTexture = bO.PrepareEmptyColorsTexture(tt))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(tt) {
        this._colorsTexture = tt, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(tt) {
        this._width = tt, this.setFloat("grlWidth", tt)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(tt) {
        this._useColors = tt, this.setFloat("grlUseColors", bO.BooleanToNumber(tt))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(tt) {
        this._colorsSampling = tt
      }
      get visibility() {
        return this._visibility
      }
      set visibility(tt) {
        this._visibility = tt, this.setFloat("grlVisibility", tt)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(tt) {
        this._useDash = tt, this.setFloat("grlUseDash", bO.BooleanToNumber(tt))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(tt) {
        this._dashOffset = tt, this.setFloat("grlDashOffset", tt)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(tt) {
        this._dashRatio = tt, this.setFloat("grlDashRatio", tt)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(tt) {
        this._dashCount = tt, this._dashArray = 1 / tt, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(tt) {
        this._sizeAttenuation = tt, this.setFloat("grlSizeAttenuation", bO.BooleanToNumber(tt))
      }
      get color() {
        return this._color
      }
      set color(tt) {
        this.setColor(tt)
      }
      setColor(tt) {
        tt = tt ?? wO.DEFAULT_COLOR, this._color = tt, this.setColor3("grlColor", tt)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(tt) {
        this._colorsDistributionType = tt, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(tt) {
        this._colorMode = tt, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(tt) {
        this._resolution = tt, this.setVector2("grlResolution", tt), this.setFloat("grlAspect", tt.x / tt.y)
      }
      serialize() {
        const tt = super.serialize(),
          et = {
            colorDistributionType: this._colorsDistributionType,
            colorsSampling: this._colorsSampling,
            colorMode: this._colorMode,
            color: this._color,
            dashCount: this._dashCount,
            dashOffset: this._dashOffset,
            dashRatio: this._dashRatio,
            resolution: this._resolution,
            sizeAttenuation: this._sizeAttenuation,
            useColors: this._useColors,
            useDash: this._useDash,
            visibility: this._visibility,
            width: this._width,
            cameraFacing: this._cameraFacing
          };
        return this._colors && (et.colors = this._colors), tt.greasedLineMaterialOptions = et, tt
      }
      parse(tt, et, Vt) {
        const Ot = tt.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), Ot.color && (this.color = Ot.color), Ot.colorDistributionType && (this.colorsDistributionType = Ot.colorDistributionType), Ot.colorsSampling && (this.colorsSampling = Ot.colorsSampling), Ot.colorMode && (this.colorMode = Ot.colorMode), Ot.useColors && (this.useColors = Ot.useColors), Ot.visibility && (this.visibility = Ot.visibility), Ot.useDash && (this.useDash = Ot.useDash), Ot.dashCount && (this.dashCount = Ot.dashCount), Ot.dashRatio && (this.dashRatio = Ot.dashRatio), Ot.dashOffset && (this.dashOffset = Ot.dashOffset), Ot.width && (this.width = Ot.width), Ot.sizeAttenuation && (this.sizeAttenuation = Ot.sizeAttenuation), Ot.resolution && (this.resolution = Ot.resolution), Ot.colors ? this.colorsTexture = bO.CreateColorsTexture(`${this.name}-colors-texture`, Ot.colors, this.colorsSampling, this.vI()) : this.colorsTexture = bO.PrepareEmptyColorsTexture(et), this._cameraFacing = Ot.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var cO, RO, IO;
    SO.ForceGLSL = !1,
      function(tt) {
        tt[tt.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", tt[tt.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(cO || (cO = {})),
      function(tt) {
        tt[tt.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", tt[tt.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", tt[tt.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(RO || (RO = {})),
      function(tt) {
        tt[tt.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", tt[tt.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", tt[tt.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", tt[tt.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", tt[tt.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(IO || (IO = {}));
    class PO extends uO.d {
      constructor(tt, et, Vt) {
        super(tt, et, null, null, !1, !1), this.name = tt, this._options = Vt, this._lazy = !1, this._updatable = !1, this._engine = et.Jf(), this._lazy = Vt.lazy ?? !1, this._updatable = Vt.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = Vt.colorPointers ?? [], this._widths = Vt.widths ?? new Array(Vt.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(tt) {
        let et = 0;
        for (const Ot of this._points) et += Ot.length;
        const Vt = et / 3 * 2 - this._widths.length;
        for (let Ot = 0; Ot < Vt; Ot++) this._widths.push(tt)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.hf && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(tt, et) {
        for (const Vt of tt) this._points.push(Vt);
        this._lazy || this.setPoints(this._points, et)
      }
      dispose(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(tt, et)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(tt) {
        this._uvs = tt instanceof Float32Array ? tt : new Float32Array(tt), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(tt) {
        this.material instanceof SO && this.material.setDefine("GREASED_LINE_USE_OFFSETS", tt?.length > 0), this._offsets = tt, this._offsetsBuffer ? this._offsetsBuffer.update(tt) : this._createOffsetsBuffer(tt)
      }
      get widths() {
        return this._widths
      }
      set widths(tt) {
        this._widths = tt, this._lazy || this._widthsBuffer && this._widthsBuffer.update(tt)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(tt) {
        this._colorPointers = tt, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(tt)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof SO) return this.material;
        const tt = this.material?.pluginManager?.getPlugin(CO.GREASED_LINE_MATERIAL_NAME);
        return tt || void 0
      }
      get points() {
        const tt = [];
        return hO.d.DeepCopy(this._points, tt), tt
      }
      setPoints(tt, et) {
        this._points = bO.ConvertPoints(tt, et?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), et?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, et)
      }
      _initGreasedLine() {
        this._vertexPositions = [], this._indices = [], this._uvs = []
      }
      _createLineOptions() {
        return {
          points: this._points,
          colorPointers: this._colorPointers,
          lazy: this._lazy,
          updatable: this._updatable,
          uvs: this._uvs,
          widths: this._widths,
          ribbonOptions: this._options.ribbonOptions
        }
      }
      serialize(tt) {
        super.serialize(tt), tt.type = this.getClassName(), tt.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const et = new KO.d;
        return et.positions = this._vertexPositions, et.indices = this._indices, et.uvs = this._uvs, tt && (et.normals = [], KO.d.ComputeNormals(this._vertexPositions, this._indices, et.normals)), et.applyToMesh(this, this._options.updatable), et
      }
      _createOffsetsBuffer(tt) {
        const et = this._scene.Jf(),
          Vt = new ot.b(et, tt, this._updatable, 3);
        this.setVerticesBuffer(Vt.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = Vt
      }
    }
    class ZO {
      constructor(tt, et) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = tt, this.wasAddedByNoopNode = et
      }
      getIndicesAccessor(tt, et, Vt, Ot, qt) {
        return this._indicesAccessorMap.get(tt)?.get(et)?.get(Vt)?.get(Ot)?.get(qt)
      }
      setIndicesAccessor(tt, et, Vt, Ot, qt, Dt) {
        let mt = this._indicesAccessorMap.get(tt);
        mt || (mt = new Map, this._indicesAccessorMap.set(tt, mt));
        let dt = mt.get(et);
        dt || (dt = new Map, mt.set(et, dt));
        let jt = dt.get(Vt);
        jt || (jt = new Map, dt.set(Vt, jt));
        let Ht = jt.get(Ot);
        Ht || (Ht = new Map, jt.set(Ot, Ht)), Ht.set(qt, Dt)
      }
      pushExportedNode(tt) {
        this._exportedNodes.has(tt) || this._exportedNodes.add(tt)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(tt) {
        return this._vertexBufferViewMap.get(tt)
      }
      setVertexBufferView(tt, et) {
        this._vertexBufferViewMap.set(tt, et)
      }
      setRemappedBufferView(tt, et, Vt) {
        this._remappedBufferView.set(tt, new Map), this._remappedBufferView.get(tt).set(et, Vt)
      }
      getRemappedBufferView(tt, et) {
        return this._remappedBufferView.get(tt)?.get(et)
      }
      getVertexAccessor(tt, et, Vt) {
        return this._vertexAccessorMap.get(tt)?.get(et)?.get(Vt)
      }
      setVertexAccessor(tt, et, Vt, Ot) {
        let qt = this._vertexAccessorMap.get(tt);
        qt || (qt = new Map, this._vertexAccessorMap.set(tt, qt));
        let Dt = qt.get(et);
        Dt || (Dt = new Map, qt.set(et, Dt)), Dt.set(Vt, Ot)
      }
      hasVertexColorAlpha(tt) {
        return this._vertexMapColorAlpha.get(tt) || !1
      }
      setHasVertexColorAlpha(tt, et) {
        return this._vertexMapColorAlpha.set(tt, et)
      }
      getMesh(tt) {
        return this._meshMap.get(tt)
      }
      setMesh(tt, et) {
        this._meshMap.set(tt, et)
      }
      bindMorphDataToMesh(tt, et) {
        const Vt = this._meshMorphTargetMap.get(tt) || [];
        this._meshMorphTargetMap.set(tt, Vt), -1 === Vt.indexOf(et) && Vt.push(et)
      }
      getMorphTargetsFromMesh(tt) {
        return this._meshMorphTargetMap.get(tt)
      }
    }
    class LO {
      _ApplyExtension(tt, et, Vt, Ot) {
        if (Vt >= et.length) return Promise.resolve(tt);
        const qt = Ot(et[Vt], tt);
        return qt ? qt.then((async tt => tt ? await this._ApplyExtension(tt, et, Vt + 1, Ot) : null)) : this._ApplyExtension(tt, et, Vt + 1, Ot)
      }
      _ApplyExtensions(tt, et) {
        const Vt = [];
        for (const Ot of LO._ExtensionNames) Vt.push(this._extensions[Ot]);
        return this._ApplyExtension(tt, Vt, 0, et)
      }
      _extensionsPostExportNodeAsync(tt, et, Vt, Ot, qt) {
        return this._ApplyExtensions(et, ((et, Dt) => et.postExportNodeAsync && et.postExportNodeAsync(tt, Dt, Vt, Ot, qt, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(tt, et, Vt) {
        return this._ApplyExtensions(et, ((et, Ot) => et.postExportMaterialAsync && et.postExportMaterialAsync(tt, Ot, Vt)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(tt, et, Vt) {
        const Ot = [];
        return await Promise.all(LO._ExtensionNames.map((async qt => {
          const Dt = this._extensions[qt];
          if (Dt.postExportMaterialAdditionalTexturesAsync) {
            const qt = await Dt.postExportMaterialAdditionalTexturesAsync(tt, et, Vt);
            Ot.push(...qt)
          }
        }))), Ot
      }
      _extensionsPostExportTextures(tt, et, Vt) {
        for (const Ot of LO._ExtensionNames) {
          const qt = this._extensions[Ot];
          qt.postExportTexture && qt.postExportTexture(tt, et, Vt)
        }
      }
      _extensionsPostExportMeshPrimitive(tt) {
        for (const et of LO._ExtensionNames) {
          const Vt = this._extensions[et];
          Vt.postExportMeshPrimitive && Vt.postExportMeshPrimitive(tt, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const tt of LO._ExtensionNames) {
          const et = this._extensions[tt];
          et.preGenerateBinaryAsync && await et.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(tt) {
        for (const et of LO._ExtensionNames) {
          const Vt = this._extensions[et];
          Vt.enabled && tt(Vt)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((tt => {
          var et, Vt, Ot;
          tt.wasUsed && ((et = this._glTF).extensionsUsed || (et.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(tt.name) && this._glTF.extensionsUsed.push(tt.name), tt.required && ((Vt = this._glTF).extensionsRequired || (Vt.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(tt.name) && this._glTF.extensionsRequired.push(tt.name)), (Ot = this._glTF).extensions || (Ot.extensions = {}), tt.onExporting && tt.onExporting())
        }))
      }
      _loadExtensions() {
        for (const tt of LO._ExtensionNames) {
          const et = LO._ExtensionFactories[tt](this);
          this._extensions[tt] = et
        }
      }
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wt.d.LastCreatedScene,
          et = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${ft.e.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new RV(this), this._extensions = {}, this._bufferManager = new OO, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !tt) throw new Error("No scene available to export");
        this._babylonScene = tt, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: tt => tt?.oR?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...et
        }, this._loadExtensions()
      }
      dispose() {
        for (const tt in this._extensions) {
          this._extensions[tt].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        LO.UnregisterExtension(tt) && qt.Tools.Warn(`Extension with the name ${tt} already exists`), LO._ExtensionFactories[tt] = et;
        const Ot = Vt ?? 0;
        LO._ExtensionOrders[tt] = Ot;
        let Dt = LO._ExtensionNames.length;
        for (let qt = 0; qt < LO._ExtensionNames.length; qt++) {
          const tt = LO._ExtensionNames[qt];
          if (Ot < LO._ExtensionOrders[tt]) {
            Dt = qt;
            break
          }
        }
        LO._ExtensionNames.splice(Dt, 0, tt)
      }
      static UnregisterExtension(tt) {
        if (!LO._ExtensionFactories[tt]) return !1;
        delete LO._ExtensionFactories[tt], delete LO._ExtensionOrders[tt];
        const et = LO._ExtensionNames.indexOf(tt);
        return -1 !== et && LO._ExtensionNames.splice(et, 1), !0
      }
      _generateJSON(tt, et, Vt) {
        const Ot = {
          byteLength: tt
        };
        return Ot.byteLength && (this._glTF.buffers = [Ot]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.Fw = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (Ot.uri = et + ".bin"), Vt ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(tt) {
        const et = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const Vt = this._generateJSON(et.byteLength, tt, !0),
          Ot = new Blob([et], {
            type: "application/octet-stream"
          }),
          qt = tt + ".gltf",
          Dt = tt + ".bin",
          mt = new Ht;
        if (mt.files[qt] = Vt, mt.files[Dt] = Ot, this._imageData)
          for (const dt in this._imageData) mt.files[dt] = this._imageData[dt];
        return mt
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(tt) {
        const et = tt % 4;
        return 0 === et ? et : 4 - et
      }
      async generateGLBAsync(tt) {
        this._shouldUseGlb = !0;
        const et = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const Vt = this._generateJSON(et.byteLength),
          Ot = tt + ".glb";
        let qt, Dt = Vt.length;
        if ("undefined" !== typeof TextEncoder) {
          qt = (new TextEncoder).encode(Vt), Dt = qt.length
        }
        const mt = this._getPadding(Dt),
          dt = this._getPadding(et.byteLength),
          jt = 28 + Dt + mt + et.byteLength + dt,
          Xt = new eO(jt);
        if (Xt.writeUInt32(1179937895), Xt.writeUInt32(2), Xt.writeUInt32(jt), Xt.writeUInt32(Dt + mt), Xt.writeUInt32(1313821514), qt) Xt.writeTypedArray(qt);
        else {
          const tt = "_".charCodeAt(0);
          for (let et = 0; et < Dt; ++et) {
            const Ot = Vt.charCodeAt(et);
            Ot != Vt.codePointAt(et) ? Xt.writeUInt8(tt) : Xt.writeUInt8(Ot)
          }
        }
        for (let Ht = 0; Ht < mt; ++Ht) Xt.writeUInt8(32);
        Xt.writeUInt32(et.byteLength + dt), Xt.writeUInt32(5130562), Xt.writeTypedArray(et);
        for (let Ht = 0; Ht < dt; ++Ht) Xt.writeUInt8(0);
        const Qt = new Ht;
        return Qt.files[Ot] = new Blob([Xt.getOutputData()], {
          type: "application/octet-stream"
        }), Qt
      }
      _setNodeTransformation(tt, et, Vt) {
        if (et.getPivotPoint().equalsWithEpsilon(kV, ZV.e) || qt.Tools.Warn("Pivot points are not supported in the glTF serializer"), !et.position.equalsWithEpsilon(kV, ZV.e)) {
          const qt = Ot.TmpVectors.uf[0].rK(et.position);
          Vt && YV(qt), tt.translation = qt.GOt()
        }
        et.cj.equalsWithEpsilon(zV, ZV.e) || (tt.scale = et.cj.GOt());
        const Dt = et.rotationQuaternion?.clone() || Ot.Quaternion.FromEulerAngles(et.rotation.x, et.rotation.y, et.rotation.z);
        Dt.equalsWithEpsilon(GV, ZV.e) || (Vt && BV(Dt), tt.rotation = Dt.normalize().GOt())
      }
      _setCameraTransformation(tt, et, Vt) {
        const qt = Ot.TmpVectors.uf[0],
          Dt = Ot.TmpVectors.Quaternion[0],
          mt = et.getWorldMatrix();
        if (et.parent) {
          const tt = et.parent.getWorldMatrix().invertToRef(Ot.TmpVectors.Matrix[0]);
          mt.multiplyToRef(tt, Ot.TmpVectors.Matrix[1]).decompose(void 0, Dt, qt)
        } else mt.decompose(void 0, Dt, qt);
        qt.equalsWithEpsilon(kV, ZV.e) || (Vt && YV(qt), tt.translation = qt.GOt()), Vt && BV(Dt), this._babylonScene.useRightHandedSystem || pV(Dt), Dt.equalsWithEpsilon(GV, ZV.e) || (tt.rotation = Dt.GOt())
      }
      _listAvailableCameras() {
        for (const tt of this._babylonScene.cameras) {
          const et = {
            type: tt.mode === qO.c.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (tt.name && (et.name = tt.name), "perspective" === et.type) et.perspective = {
            aspectRatio: tt.Jf().getAspectRatio(tt),
            yfov: tt.fovMode === qO.c.FOVMODE_VERTICAL_FIXED ? tt.fov : tt.fov * tt.Jf().getAspectRatio(tt),
            znear: tt.minZ,
            zfar: tt.maxZ
          };
          else if ("orthographic" === et.type) {
            const Vt = tt.orthoLeft && tt.orthoRight ? .5 * (tt.orthoRight - tt.orthoLeft) : .5 * tt.Jf().getRenderWidth(),
              Ot = tt.orthoBottom && tt.orthoTop ? .5 * (tt.orthoTop - tt.orthoBottom) : .5 * tt.Jf().getRenderHeight();
            et.orthographic = {
              xmag: Vt,
              ymag: Ot,
              znear: tt.minZ,
              zfar: tt.maxZ
            }
          }
          this._camerasMap.set(tt, et)
        }
      }
      _exportAndAssignCameras() {
        const tt = Array.from(this._camerasMap.values());
        for (const et of tt) {
          const tt = this._nodesCameraMap.get(et);
          if (void 0 !== tt) {
            this._cameras.push(et);
            for (const et of tt) et.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const tt of this._babylonScene.skeletons) {
          if (tt.bones.length <= 0) continue;
          const et = {
            joints: []
          };
          this._skinMap.set(tt, et)
        }
      }
      _exportAndAssignSkeletons(tt) {
        for (const Vt of this._babylonScene.skeletons) {
          if (Vt.bones.length <= 0) continue;
          const Dt = this._skinMap.get(Vt);
          if (void 0 == Dt) continue;
          const mt = {};
          let dt = -1;
          for (let tt = 0; tt < Vt.bones.length; ++tt) {
            const et = Vt.bones[tt],
              Ot = et.getIndex() ?? tt; - 1 !== Ot && (mt[Ot] = et, Ot > dt && (dt = Ot))
          }
          const jt = [];
          for (let Vt = 0; Vt <= dt; ++Vt) {
            const dt = mt[Vt],
              Ht = dt.getTransformNode(),
              Xt = Ht ? this._nodeMap.get(Ht) : void 0;
            if (void 0 === Xt) {
              qt.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            Dt.joints.push(Xt);
            const Qt = dt.getAbsoluteInverseBindMatrix().clone();
            tt.has(Ht) && (et = Qt, LV.invertToRef(Ot.TmpVectors.Matrix[0]).multiplyToRef(et, et).multiplyToRef(LV, et)), jt.push(Qt)
          }
          const Ht = this._nodesSkinMap.get(Dt);
          if (Dt.joints.length > 0 && void 0 !== Ht) {
            const tt = new Float32Array(16 * jt.length);
            jt.forEach(((et, Vt) => {
              tt.set(et.m, 16 * Vt)
            }));
            const et = this._bufferManager.createBufferView(tt);
            this._accessors.push(this._bufferManager.createAccessor(et, "MAT4", 5126, jt.length)), Dt.inverseBindMatrices = this._accessors.length - 1, this._skins.push(Dt);
            const Vt = this._skins.length - 1;
            for (const Ot of Ht) Ot.skin = Vt
          }
        }
        var et
      }
      async _exportSceneAsync() {
        const tt = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const et = this._options.metadataSelector(this._babylonScene.metadata);
          et && (tt.extras = et)
        }
        const et = new Array,
          Vt = new Array,
          Ot = new Array,
          qt = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let Dt;
        if (qt && !this._options.includeCoordinateSystemConversionNodes)
          for (const Ht of this._babylonScene.animationGroups)
            for (const tt of Ht.targetedAnimations) {
              const et = tt.target;
              et instanceof Qt.c && !et.parent && (Dt ?? (Dt = new Set)).add(et)
            }
        for (const Ht of this._babylonScene.rootNodes) {
          const tt = Ht.animations,
            mt = !!tt && tt.length > 0 || Dt?.has(Ht);
          qt && !this._options.includeCoordinateSystemConversionNodes && FV(Ht, this._babylonScene.useRightHandedSystem) && !mt ? Ot.push(...Ht.getChildren()) : this._babylonScene.useRightHandedSystem ? et.push(Ht) : Vt.push(Ht)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const mt = new ZO(!0, !1);
        tt.nodes.push(...await this._exportNodesAsync(Vt, mt));
        const dt = new ZO(!1, !1);
        tt.nodes.push(...await this._exportNodesAsync(et, dt));
        const jt = new ZO(!1, !0);
        tt.nodes.push(...await this._exportNodesAsync(Ot, jt)), tt.nodes.length && this._scenes.push(tt), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(mt.getNodesSet()), this._babylonScene.animationGroups.length && lO._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, mt.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(tt) {
        return this._nodeMap.get(tt)
      }
      _getAnimationIndex(tt) {
        return this._animationGroupMap.get(tt)
      }
      _getCameraIndex(tt) {
        const et = this._camerasMap.get(tt);
        if (!et) return;
        const Vt = this._cameras.indexOf(et);
        return Vt >= 0 ? Vt : void 0
      }
      _getMaterialIndex(tt) {
        return this._materialMap.get(tt)
      }
      _getRootIndex(tt, et) {
        switch (tt) {
          case "nodes":
            return this._getNodeIndex(et);
          case "animations":
            return this._getAnimationIndex(et);
          case "cameras":
            return this._getCameraIndex(et);
          case "materials":
            return this._getMaterialIndex(et);
          case "meshes": {
            const tt = this._getNodeIndex(et);
            return void 0 === tt ? void 0 : this._nodes[tt]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(et)?.index;
          case "images": {
            const tt = this._materialExporter.getTextureInfo(et)?.index;
            if (void 0 === tt) return;
            const Vt = this._textures[tt];
            for (const et of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const tt = Vt?.extensions?.[et]?.source;
              if ("number" === typeof tt) return tt
            }
            return Vt?.source
          }
          case "samplers": {
            const tt = this._materialExporter.getTextureInfo(et)?.index;
            return void 0 === tt ? void 0 : this._textures[tt]?.sampler
          }
          case "skins": {
            const tt = this._skinMap.get(et),
              Vt = tt ? this._skins.indexOf(tt) : -1;
            return Vt >= 0 ? Vt : void 0
          }
          case "scenes":
            return et === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(tt, et, Vt) {
        const Ot = this._nodes[tt];
        if (!Ot) throw new Error(`Cannot write ${et}: glTF node ${tt} does not exist.`);
        Ot.extensions || (Ot.extensions = {}), Ot.extensions[et] = Vt
      }
      _shouldExportNode(tt) {
        let et = this._shouldExportNodeMap.get(tt);
        return void 0 === et && (et = this._options.shouldExportNode(tt), this._shouldExportNodeMap.set(tt, et)), et
      }
      async _exportNodesAsync(tt, et) {
        const Vt = new Array;
        this._exportBuffers(tt, et);
        for (const Ot of tt) await this._exportNodeAsync(Ot, Vt, et);
        return Vt
      }
      _collectBuffers(tt, et, Vt, Ot, qt) {
        if (this._shouldExportNode(tt) && tt instanceof lt.c && tt.geometry) {
          const Dt = tt.geometry.getVertexBuffers();
          if (Dt)
            for (const Ot in Dt) {
              if (!AV(Ot)) continue;
              const mt = Dt[Ot];
              qt.setHasVertexColorAlpha(mt, tt.hasVertexAlpha);
              const dt = mt._buffer,
                jt = et.get(dt) || [];
              et.set(dt, jt), -1 === jt.indexOf(mt) && jt.push(mt);
              const Ht = Vt.get(mt) || [];
              Vt.set(mt, Ht), -1 === Ht.indexOf(tt) && Ht.push(tt)
            }
          const mt = tt.morphTargetManager;
          if (mt)
            for (let et = 0; et < mt.numTargets; et++) {
              const Vt = mt.getTarget(et),
                qt = Ot.get(Vt) || [];
              Ot.set(Vt, qt), -1 === qt.indexOf(tt) && qt.push(tt)
            }
        }
        for (const Dt of tt.getChildren()) this._collectBuffers(Dt, et, Vt, Ot, qt)
      }
      _exportBuffers(tt, et) {
        const Vt = new Map,
          Ot = new Map,
          qt = new Map;
        for (const dt of tt) this._collectBuffers(dt, Vt, Ot, qt, et);
        const Dt = Array.from(Vt.keys());
        for (const dt of Dt) {
          const tt = dt.getData();
          if (!tt) throw new Error("Buffer data is not available");
          const qt = Vt.get(dt);
          if (!qt) continue;
          const Dt = qt[0].byteStride;
          if (qt.some((tt => tt.byteStride !== Dt))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const mt = gV(tt).slice();
          for (const et of qt) {
            const tt = Ot.get(et),
              {
                byteOffset: Vt,
                byteStride: qt,
                componentCount: Dt,
                type: dt,
                count: jt,
                normalized: Ht,
                kind: Qt
              } = rV(et, tt);
            switch (Qt) {
              case Xt.e.NormalKind:
              case Xt.e.TangentKind:
                (0, IV.l)(mt, Vt, qt, Dt, dt, jt, Ht, (tt => {
                  const et = Math.sqrt(tt[0] * tt[0] + tt[1] * tt[1] + tt[2] * tt[2]);
                  if (et > 0) {
                    const Vt = 1 / et;
                    tt[0] *= Vt, tt[1] *= Vt, tt[2] *= Vt
                  }
                }));
                break;
              case Xt.e.ColorKind: {
                const et = tt.filter((tt => tt.material instanceof mO.StandardMaterial || null == tt.material)).length;
                if (0 == et) break;
                if (et != tt.length) {
                  St.d.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                dt == Xt.e.UNSIGNED_BYTE && St.d.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const Ot = new yt.Color3,
                  Qt = new yt.e,
                  lt = this._babylonScene.Jf().useExactSrgbConversions;
                (0, IV.l)(mt, Vt, qt, Dt, dt, jt, Ht, (tt => {
                  3 === tt.length ? (Ot.vVt(tt, 0), Ot.toLinearSpaceToRef(Ot, lt), Ot.toArray(tt, 0)) : (Qt.vVt(tt, 0), Qt.toLinearSpaceToRef(Qt, lt), Qt.toArray(tt, 0))
                }))
              }
            }
          }
          if (et.convertToRightHanded) {
            for (const tt of qt) {
              const et = Ot.get(tt),
                {
                  byteOffset: Vt,
                  byteStride: qt,
                  componentCount: Dt,
                  type: dt,
                  count: jt,
                  normalized: Ht,
                  kind: Qt
                } = rV(tt, et);
              switch (Qt) {
                case Xt.e.PositionKind:
                case Xt.e.NormalKind:
                case Xt.e.TangentKind:
                  (0, IV.l)(mt, Vt, qt, Dt, dt, jt, Ht, (tt => {
                    tt[0] = -tt[0]
                  }))
              }
            }
            et.convertedToRightHandedBuffers.set(dt, mt)
          }
          const jt = this._bufferManager.createBufferView(mt, Dt);
          et.setVertexBufferView(dt, jt);
          const Ht = new Map;
          for (const et of qt) {
            const tt = Ot.get(et),
              {
                kind: Vt,
                totalVertices: qt
              } = rV(et, tt);
            switch (Vt) {
              case Xt.e.MatricesIndicesKind:
              case Xt.e.MatricesIndicesExtraKind:
                if (et.type == Xt.e.FLOAT) {
                  const tt = et.getFloatData(qt);
                  null !== tt && Ht.set(et, tt)
                }
            }
          }
          0 !== Ht.size && St.d.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const Qt = Array.from(Ht.keys());
          for (const Vt of Qt) {
            const tt = Ht.get(Vt);
            if (!tt) continue;
            const Ot = tt.some((tt => tt >= 256)),
              qt = new(Ot ? Uint16Array : Uint8Array)(tt.length);
            for (let et = 0; et < tt.length; et++) qt[et] = tt[et];
            const Dt = this._bufferManager.createBufferView(qt, 4 * (Ot ? 2 : 1));
            et.setRemappedBufferView(dt, Vt, Dt)
          }
        }
        const mt = Array.from(qt.keys());
        for (const dt of mt) {
          const tt = qt.get(dt);
          if (!tt) continue;
          const Vt = EO(dt, tt[0], this._bufferManager, this._bufferViews, this._accessors, et.convertToRightHanded);
          for (const Ot of tt) et.bindMorphDataToMesh(Ot, Vt)
        }
      }
      async _exportNodeAsync(tt, et, Vt) {
        let Ot = this._nodeMap.get(tt);
        if (void 0 !== Ot) return void(et.includes(Ot) || et.push(Ot));
        const qt = await this._createNodeAsync(tt, Vt);
        if (qt) {
          Ot = this._nodes.length, this._nodes.push(qt), this._nodeMap.set(tt, Ot), Vt.pushExportedNode(tt), et.push(Ot);
          const Dt = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            mt = [];
          this._babylonScene.animationGroups.length || (lO._CreateMorphTargetAnimationFromMorphTargetAnimations(tt, Dt, mt, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Vt.convertToRightHanded, this._options.shouldExportAnimation), tt.animations.length && lO._CreateNodeAnimationFromNodeAnimations(tt, Dt, mt, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Vt.convertToRightHanded, this._options.shouldExportAnimation)), Dt.channels.length && Dt.samplers.length && this._animations.push(Dt), mt.forEach((tt => {
            tt.channels.length && tt.samplers.length && this._animations.push(tt)
          }))
        }
        const Dt = qt ? [] : et;
        for (const mt of tt.getChildren()) await this._exportNodeAsync(mt, Dt, Vt);
        qt && Dt.length && (qt.children = Dt)
      }
      async _createNodeAsync(tt, et) {
        if (!this._shouldExportNode(tt)) return null;
        const Vt = {};
        if (tt.name && (Vt.name = tt.name), tt.metadata) {
          const et = this._options.metadataSelector(tt.metadata);
          et && (Vt.extras = et)
        }
        if (tt instanceof Qt.c && (this._setNodeTransformation(Vt, tt, et.convertToRightHanded), tt instanceof lt.c)) {
          const Ot = tt instanceof Et.e ? tt.Rqt : tt;
          if (Ot.vJ && Ot.vJ.length > 0 && (Vt.mesh = await this._exportMeshAsync(Ot, et)), tt.skeleton) {
            const et = this._skinMap.get(tt.skeleton);
            void 0 !== et && (void 0 === this._nodesSkinMap.get(et) && this._nodesSkinMap.set(et, []), this._nodesSkinMap.get(et)?.push(Vt))
          }
        }
        if (tt instanceof PV.f) {
          const Ot = this._camerasMap.get(tt);
          if (Ot) {
            void 0 === this._nodesCameraMap.get(Ot) && this._nodesCameraMap.set(Ot, []), this._setCameraTransformation(Vt, tt, et.convertToRightHanded);
            const qt = tt.parent;
            if (null !== qt && TV(tt, qt)) {
              const tt = this._nodeMap.get(qt);
              if (void 0 !== tt) {
                const et = this._nodes[tt];
                return xV(Vt, et), this._nodesCameraMap.get(Ot)?.push(et), null
              }
            }
            this._nodesCameraMap.get(Ot)?.push(Vt)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", Vt, tt, this._nodeMap, et.convertToRightHanded) ? Vt : (St.d.Warn(`Not exporting node ${tt.name}`), null)
      }
      _exportIndices(tt, et, Vt, Ot, qt, mt, dt, jt, Ht) {
        let Xt = null;
        Ht.mode = function(tt) {
          switch (tt) {
            case Dt.c.TriangleFillMode:
              return 4;
            case Dt.c.TriangleStripDrawMode:
              return 5;
            case Dt.c.TriangleFanDrawMode:
              return 6;
            case Dt.c.PointListDrawMode:
            case Dt.c.PointFillMode:
              return 0;
            case Dt.c.LineLoopDrawMode:
              return 2;
            case Dt.c.LineListDrawMode:
              return 1;
            case Dt.c.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${tt}`)
        }(mt);
        const Qt = dt !== Dt.c.CounterClockWiseSideOrientation && function(tt) {
          switch (tt) {
            case Dt.c.TriangleFillMode:
            case Dt.c.TriangleStripDrawMode:
            case Dt.c.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(mt);
        if (Qt) {
          if (mt === Dt.c.TriangleStripDrawMode || mt === Dt.c.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const dt = et ? new Uint32Array(Ot) : new Uint16Array(Ot);
          if (tt)
            for (let et = 0; et + 2 < Ot; et += 3) dt[et] = tt[Vt + et] + qt, dt[et + 1] = tt[Vt + et + 2] + qt, dt[et + 2] = tt[Vt + et + 1] + qt;
          else
            for (let tt = 0; tt + 2 < Ot; tt += 3) dt[tt] = tt, dt[tt + 1] = tt + 2, dt[tt + 2] = tt + 1;
          Xt = dt
        } else if (tt && 0 !== qt) {
          const Dt = et ? new Uint32Array(Ot) : new Uint16Array(Ot);
          for (let et = 0; et < Ot; et++) Dt[et] = tt[Vt + et] + qt;
          Xt = Dt
        } else tt && (Xt = function(tt, et, Vt, Ot) {
          let qt = tt;
          return 0 === et && Vt === tt.length || (qt = Array.isArray(tt) ? tt.slice(et, et + Vt) : tt.subarray(et, et + Vt)), qt instanceof Int32Array ? new Uint32Array(qt.buffer, qt.byteOffset, qt.length) : Array.isArray(qt) ? Ot ? new Uint32Array(qt) : new Uint16Array(qt) : qt
        }(tt, Vt, Ot, et));
        if (Xt) {
          let Dt = jt.getIndicesAccessor(tt, Vt, Ot, qt, Qt);
          if (void 0 === Dt) {
            const mt = this._bufferManager.createBufferView(Xt),
              dt = et ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(mt, "SCALAR", dt, Ot, 0)), Dt = this._accessors.length - 1, jt.setIndicesAccessor(tt, Vt, Ot, qt, Qt, Dt)
          }
          Ht.indices = Dt
        }
      }
      _exportVertexBuffer(tt, et, Vt, Ot, qt, Dt) {
        const mt = tt.getKind();
        if (!AV(mt)) return;
        if (mt.startsWith("uv") && !this._options.exportUnusedUVs && (!et || !this._materialNeedsUVsSet.has(et))) return;
        let dt = qt.getVertexAccessor(tt, Vt, Ot);
        if (void 0 === dt) {
          const et = qt.convertedToRightHandedBuffers.get(tt._buffer) || tt._buffer.getData(),
            Dt = mt === Xt.e.PositionKind ? function(tt, et, Vt, Ot) {
              const {
                byteOffset: qt,
                byteStride: Dt,
                type: mt,
                normalized: dt
              } = et, jt = et.getSize(), Ht = new Array(jt).fill(1 / 0), Xt = new Array(jt).fill(-1 / 0);
              return (0, IV.l)(tt, qt + Vt * Dt, Dt, jt, mt, Ot * jt, dt, (tt => {
                for (let et = 0; et < jt; et++) Ht[et] = Math.min(Ht[et], tt[et]), Xt[et] = Math.max(Xt[et], tt[et])
              })), {
                min: Ht,
                max: Xt
              }
            }(et, tt, Vt, Ot) : void 0,
            jt = (mt === Xt.e.MatricesIndicesKind || mt === Xt.e.MatricesIndicesExtraKind) && tt.type === Xt.e.FLOAT,
            Ht = jt ? Xt.e.UNSIGNED_BYTE : tt.type,
            Qt = jt ? void 0 : tt.normalized,
            lt = jt ? qt.getRemappedBufferView(tt._buffer, tt) : qt.getVertexBufferView(tt._buffer),
            Et = tt.byteOffset + Vt * tt.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(lt, function(tt, et) {
            if (tt == Xt.e.ColorKind) return et ? "VEC4" : "VEC3";
            switch (tt) {
              case Xt.e.PositionKind:
              case Xt.e.NormalKind:
                return "VEC3";
              case Xt.e.TangentKind:
              case Xt.e.MatricesIndicesKind:
              case Xt.e.MatricesIndicesExtraKind:
              case Xt.e.MatricesWeightsKind:
              case Xt.e.MatricesWeightsExtraKind:
                return "VEC4";
              case Xt.e.UVKind:
              case Xt.e.UV2Kind:
              case Xt.e.UV3Kind:
              case Xt.e.UV4Kind:
              case Xt.e.UV5Kind:
              case Xt.e.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${tt}`)
          }(mt, qt.hasVertexColorAlpha(tt)), Ht, Ot, Et, Dt, Qt)), dt = this._accessors.length - 1, qt.setVertexAccessor(tt, Vt, Ot, dt)
        }
        Dt.attributes[function(tt) {
          switch (tt) {
            case Xt.e.PositionKind:
              return "POSITION";
            case Xt.e.NormalKind:
              return "NORMAL";
            case Xt.e.TangentKind:
              return "TANGENT";
            case Xt.e.ColorKind:
              return "COLOR_0";
            case Xt.e.UVKind:
              return "TEXCOORD_0";
            case Xt.e.UV2Kind:
              return "TEXCOORD_1";
            case Xt.e.UV3Kind:
              return "TEXCOORD_2";
            case Xt.e.UV4Kind:
              return "TEXCOORD_3";
            case Xt.e.UV5Kind:
              return "TEXCOORD_4";
            case Xt.e.UV6Kind:
              return "TEXCOORD_5";
            case Xt.e.MatricesIndicesKind:
              return "JOINTS_0";
            case Xt.e.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case Xt.e.MatricesWeightsKind:
              return "WEIGHTS_0";
            case Xt.e.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${tt}`)
        }(mt)] = dt
      }
      async _exportMaterialAsync(tt, et, Vt, Ot) {
        let qt = this._materialMap.get(tt);
        if (void 0 === qt) {
          const Ot = et && Object.keys(et).some((tt => tt.startsWith("uv")));
          if ((tt = tt instanceof DO.e ? tt.N9[Vt.materialIndex] : tt) instanceof ue) qt = await this._materialExporter.exportPBRMaterialAsync(tt, Ot);
          else if (tt instanceof mO.StandardMaterial) qt = await this._materialExporter.exportStandardMaterialAsync(tt, Ot);
          else {
            if (!(tt instanceof ne)) return void St.d.Warn(`Unsupported material '${tt.name}' with type ${tt.getClassName()}`);
            qt = await this._materialExporter.exportOpenPBRMaterialAsync(tt, Ot)
          }
          this._materialMap.set(tt, qt)
        }
        Ot.material = qt
      }
      async _exportMeshAsync(tt, et) {
        let Vt = et.getMesh(tt);
        if (void 0 !== Vt) return Vt;
        const Ot = {
          primitives: []
        };
        Vt = this._meshes.length, this._meshes.push(Ot), et.setMesh(tt, Vt);
        const qt = tt.isUnIndexed ? null : tt.zOt(),
          mt = tt.geometry?.getVertexBuffers(),
          dt = et.getMorphTargetsFromMesh(tt),
          jt = tt instanceof fO.c,
          Ht = tt instanceof PO,
          Xt = tt.vJ;
        if (mt && Xt && Xt.length > 0)
          for (const Qt of Xt) {
            const Vt = {
                attributes: {}
              },
              Xt = Qt.vf() || this._babylonScene.defaultMaterial;
            if (Ht) {
              const et = {
                  name: Xt.name
                },
                Ot = tt,
                qt = yt.Color3.White(),
                Dt = Ot.material?.alpha ?? 1,
                mt = Ot.greasedLineMaterial?.color ?? qt;
              (!mt.equalsWithEpsilon(qt, ZV.e) || Dt < 1) && (et.pbrMetallicRoughness = {
                baseColorFactor: [...mt.GOt(), Dt]
              }), this._materials.push(et), Vt.material = this._materials.length - 1
            } else if (jt) {
              const et = {
                  name: Xt.name
                },
                Ot = tt;
              (!Ot.color.equalsWithEpsilon(yt.Color3.White(), ZV.e) || Ot.alpha < 1) && (et.pbrMetallicRoughness = {
                baseColorFactor: [...Ot.color.GOt(), Ot.alpha]
              }), this._materials.push(et), Vt.material = this._materials.length - 1
            } else await this._exportMaterialAsync(Xt, mt, Qt, Vt);
            const lt = jt || Ht ? Dt.c.LineListDrawMode : tt.overrideRenderingFillMode ?? Xt.fillMode;
            let Et = Xt._getEffectiveOrientation(tt);
            et.wasAddedByNoopNode && !tt.vI().useRightHandedSystem && (Et = Et === Dt.c.ClockWiseSideOrientation ? Dt.c.CounterClockWiseSideOrientation : Dt.c.ClockWiseSideOrientation), this._exportIndices(qt, qt ? (0, IV.e)(qt, Qt.indexCount, Qt.indexStart, Qt.verticesStart) : Qt.verticesCount > 65535, qt ? Qt.indexStart : Qt.verticesStart, qt ? Qt.indexCount : Qt.verticesCount, -Qt.verticesStart, lt, Et, et, Vt);
            for (const tt of Object.values(mt)) this._exportVertexBuffer(tt, Xt, Qt.verticesStart, Qt.verticesCount, et, Vt);
            if (dt) {
              Vt.targets = [];
              for (const tt of dt) Vt.targets.push(tt.attributes)
            }
            Ot.primitives.push(Vt), this._extensionsPostExportMeshPrimitive(Vt)
          }
        if (dt) {
          Ot.weights = [], Ot.extras || (Ot.extras = {}), Ot.extras.targetNames = [];
          for (const tt of dt) Ot.weights.push(tt.influence), Ot.extras.targetNames.push(tt.name)
        }
        return Vt
      }
    }
    LO._ExtensionNames = new Array, LO._ExtensionFactories = {}, LO._ExtensionOrders = {};
    class FO {
      static async GLTFAsync(tt, et, Vt) {
        Vt && Vt.exportWithoutWaitingForScene || await tt.whenReadyAsync();
        const Ot = new LO(tt, Vt),
          qt = await Ot.generateGLTFAsync(et.replace(/\.[^/.]+$/, ""));
        return Ot.dispose(), qt
      }
      static async GLBAsync(tt, et, Vt) {
        Vt && Vt.exportWithoutWaitingForScene || await tt.whenReadyAsync();
        const Ot = new LO(tt, Vt),
          qt = await Ot.generateGLBAsync(et.replace(/\.[^/.]+$/, ""));
        return Ot.dispose(), qt
      }
    }
    const kO = "EXT_mesh_gpu_instancing";

    function GO(tt, et) {
      const Vt = new Float32Array(3 * et);
      for (let Ot = 0; Ot < et; Ot++) Vt[3 * Ot + 0] = tt[4 * Ot + 0], Vt[3 * Ot + 1] = tt[4 * Ot + 1], Vt[3 * Ot + 2] = tt[4 * Ot + 2];
      return Vt
    }
    class zO {
      constructor(tt) {
        this.name = kO, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = tt
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(tt, et, Vt, Ot, qt, Dt) {
        return await new Promise((tt => {
          if (et && Vt instanceof uO.d && Vt.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const tt = zt.n.Zero(),
              Ot = zt.e.Identity(),
              mt = zt.n.One(),
              dt = Vt.thinInstanceGetWorldMatrices(),
              jt = zt.k.uf[2],
              Ht = zt.k.Quaternion[1],
              Xt = zt.k.uf[3];
            let Qt = !1,
              lt = !1,
              Et = !1;
            const ft = new Float32Array(3 * Vt.r_),
              wt = new Float32Array(4 * Vt.r_),
              yt = new Float32Array(3 * Vt.r_);
            let Nt = 0;
            for (const et of dt) et.decompose(Xt, Ht, jt), qt && (YV(jt), BV(Ht)), ft.set(jt.GOt(), 3 * Nt), wt.set(Ht.normalize().GOt(), 4 * Nt), yt.set(Xt.GOt(), 3 * Nt), Qt = Qt || !jt.equalsWithEpsilon(tt), lt = lt || !Ht.equalsWithEpsilon(Ot), Et = Et || !Xt.equalsWithEpsilon(mt), Nt++;
            const Mt = {
              attributes: {}
            };
            Qt && (Mt.attributes.TRANSLATION = this._buildAccessor(ft, "VEC3", Vt.r_, Dt)), lt && (Mt.attributes.ROTATION = this._buildAccessor(wt, "VEC4", Vt.r_, Dt)), Et && (Mt.attributes.SCALE = this._buildAccessor(yt, "VEC3", Vt.r_, Dt));
            let bt = Vt._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (bt) {
              const tt = Vt.r_,
                et = "VEC3";
              Vt.hasVertexAlpha && bt.length === 4 * tt ? (this._instanceColorWarned || (St.d.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), bt = GO(bt, tt)) : bt.length === 4 * tt && (bt = GO(bt, tt)), bt.length === 3 * tt && (Mt.attributes._COLOR_0 = this._buildAccessor(bt, et, tt, Dt))
            }
            et.extensions = et.extensions || {}, et.extensions[kO] = Mt
          }
          tt(et)
        }))
      }
      _buildAccessor(tt, et, Vt, Ot) {
        const qt = Ot.createBufferView(tt),
          Dt = Ot.createAccessor(qt, et, 5126, Vt);
        return this._exporter._accessors.push(Dt), this._exporter._accessors.length - 1
      }
    }
    let oO = !1;

    function rO() {
      oO || (oO = !0, LO.RegisterExtension(kO, (tt => new zO(tt))))
    }
    Vt(40669);
    rO();
    var UO = Vt(42108);

    function AO(tt, et, Vt, Ot) {
      const qt = tt;
      let Dt = null,
        mt = null,
        dt = null,
        jt = null;
      const Ht = {},
        Xt = et.find((tt => "POSITION" === tt.dracoName));
      if (!Xt) throw new Error("Draco: Missing position attribute for encoding.");
      if (!Vt) {
        const tt = Xt.data.length / Xt.size;
        Vt = new(tt > 65535 ? Uint32Array : Uint16Array)(tt);
        for (let et = 0; et < tt; et++) Vt[et] = et
      }
      try {
        Dt = new qt.Encoder, mt = new qt.MeshBuilder, dt = new qt.Mesh, mt.AddFacesToMesh(dt, Vt.length / 3, Vt);
        const tt = new Map([
          [Float32Array, (tt, et, Vt, Ot, qt, Dt) => tt.AddFloatAttribute(et, Vt, Ot, qt, Dt)],
          [Uint32Array, (tt, et, Vt, Ot, qt, Dt) => tt.AddUInt32Attribute(et, Vt, Ot, qt, Dt)],
          [Uint16Array, (tt, et, Vt, Ot, qt, Dt) => tt.AddUInt16Attribute(et, Vt, Ot, qt, Dt)],
          [Uint8Array, (tt, et, Vt, Ot, qt, Dt) => tt.AddUInt8Attribute(et, Vt, Ot, qt, Dt)],
          [Int32Array, (tt, et, Vt, Ot, qt, Dt) => tt.AddInt32Attribute(et, Vt, Ot, qt, Dt)],
          [Int16Array, (tt, et, Vt, Ot, qt, Dt) => tt.AddInt16Attribute(et, Vt, Ot, qt, Dt)],
          [Int8Array, (tt, et, Vt, Ot, qt, Dt) => tt.AddInt8Attribute(et, Vt, Ot, qt, Dt)]
        ]);
        for (const Vt of et) {
          Vt.data instanceof Uint8ClampedArray && (Vt.data = new Uint8Array(Vt.data));
          const et = tt.get(Vt.data.constructor),
            jt = Vt.data.length / Vt.size;
          Ht[Vt.kind] = et(mt, dt, qt[Vt.dracoName], jt, Vt.size, Vt.data), Ot.quantizationBits && Ot.quantizationBits[Vt.dracoName] && Dt.SetAttributeQuantization(qt[Vt.dracoName], Ot.quantizationBits[Vt.dracoName])
        }
        Ot.method && Dt.SetEncodingMethod(qt[Ot.method]), void 0 !== Ot.encodeSpeed && void 0 !== Ot.decodeSpeed && Dt.SetSpeedOptions(Ot.encodeSpeed, Ot.decodeSpeed), jt = new qt.DracoInt8Array;
        const Xt = Dt.EncodeMeshToDracoBuffer(dt, jt);
        if (Xt <= 0) throw new Error("Draco: Failed to encode.");
        const Qt = new Int8Array(Xt);
        for (let et = 0; et < Xt; et++) Qt[et] = jt.GetValue(et);
        return {
          data: Qt,
          attributeIds: Ht
        }
      } finally {
        dt && qt.destroy(dt), mt && qt.destroy(mt), Dt && qt.destroy(Dt), jt && qt.destroy(jt)
      }
    }

    function iO() {
      let tt;
      onmessage = et => {
        const Vt = et.data;
        switch (Vt.id) {
          case "init": {
            Vt.url && importScripts(Vt.url);
            const et = Vt.wasmBinary ? {
              wasmBinary: Vt.wasmBinary
            } : {};
            tt = DracoEncoderModule(et), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!tt) throw new Error("Draco: Encoder module is not available.");
            tt.then((tt => {
              const et = AO(tt, Vt.attributes, Vt.indices, Vt.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: et
              }, et ? [et.data.buffer] : void 0)
            })).catch((tt => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: tt.message
              })
            }))
        }
      }
    }
    class YO {
      constructor(tt) {
        if (tt.workerPool) return void(this._workerPoolPromise = Promise.resolve(tt.workerPool));
        const et = tt.wasmBinary,
          Vt = tt.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          Ot = Vt && "function" === typeof Worker && "function" === typeof URL,
          qt = Ot || !tt.jsModule,
          Dt = tt.wasmUrl && tt.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: qt ? he.l.GetBabylonScriptURL(tt.wasmUrl, !0) : "",
            wasmBinaryPromise: et ? Promise.resolve(et) : he.l.LoadFileAsync(he.l.GetBabylonScriptURL(tt.wasmBinaryUrl, !0))
          } : {
            url: qt ? he.l.GetBabylonScriptURL(tt.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        Ot ? this._workerPoolPromise = Dt.wasmBinaryPromise.then((tt => {
          const et = this._getWorkerContent(),
            Ot = URL.createObjectURL(new Blob([et], {
              type: "application/javascript"
            }));
          return new UO.c(Vt, (() => async function(tt, et, Vt) {
            return await new Promise(((Ot, qt) => {
              const Dt = et => {
                  tt.removeEventListener("error", Dt), tt.removeEventListener("message", mt), qt(et)
                },
                mt = et => {
                  "initDone" === et.data.id && (tt.removeEventListener("error", Dt), tt.removeEventListener("message", mt), Ot(tt))
                };
              if (tt.addEventListener("error", Dt), tt.addEventListener("message", mt), et) {
                const Ot = et.slice(0);
                tt.postMessage({
                  id: "init",
                  url: Vt,
                  wasmBinary: Ot
                }, [Ot])
              } else tt.postMessage({
                id: "init",
                url: Vt
              })
            }))
          }(new Worker(Ot), tt, Dt.url)))
        })) : this._modulePromise = Dt.wasmBinaryPromise.then((async et => {
          if (!this._isModuleAvailable() && !tt.jsModule) {
            if (!Dt.url) throw new Error("Draco codec module is not available");
            await he.l.LoadBabylonScriptAsync(Dt.url)
          }
          return await this._createModuleAsync(et, tt.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((tt => {
          tt.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function BO() {
      const tt = tt => !!tt && "object" === typeof tt;
      for (var et = arguments.length, Vt = new Array(et), Ot = 0; Ot < et; Ot++) Vt[Ot] = arguments[Ot];
      return Vt.reduce(((et, Vt) => {
        const Ot = Object.keys(Vt);
        for (const qt of Ot) {
          const Ot = et[qt],
            Dt = Vt[qt];
          Array.isArray(Ot) && Array.isArray(Dt) ? et[qt] = Ot.concat(Dt) : tt(Ot) && tt(Dt) ? et[qt] = BO(Ot, Dt) : et[qt] = Dt
        }
        return et
      }), {})
    }

    function pO(tt) {
      return tt === ot.m.PositionKind ? "POSITION" : tt === ot.m.NormalKind ? "NORMAL" : tt === ot.m.ColorKind ? "COLOR" : tt.startsWith(ot.m.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const xO = {
      decodeSpeed: 5,
      encodeSpeed: 5,
      method: "MESH_EDGEBREAKER_ENCODING",
      quantizationBits: {
        POSITION: 14,
        NORMAL: 10,
        COLOR: 8,
        TEX_COORD: 12,
        GENERIC: 12
      }
    };
    class TO extends YO {
      static get DefaultAvailable() {
        return !!((tt = TO.DefaultConfiguration).wasmUrl && (tt.wasmBinary || tt.wasmBinaryUrl) && "object" === typeof WebAssembly || tt.fallbackUrl);
        var tt
      }
      static get Default() {
        return TO._Default ?? (TO._Default = new TO), TO._Default
      }
      static ResetDefault(tt) {
        TO._Default && (tt || TO._Default.dispose(), TO._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(tt, et) {
        return {
          module: await (et || DracoEncoderModule)({
            wasmBinary: tt
          })
        }
      }
      _getWorkerContent() {
        return `${AO}(${iO})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TO.DefaultConfiguration)
      }
      async _encodeAsync(tt, et, Vt) {
        const Ot = Vt ? BO(xO, Vt) : xO;
        if (this._workerPoolPromise) {
          const Vt = await this._workerPoolPromise;
          return await new Promise(((qt, Dt) => {
            Vt.push(((Vt, mt) => {
              const dt = tt => {
                  Vt.removeEventListener("error", dt), Vt.removeEventListener("message", jt), Dt(tt), mt()
                },
                jt = tt => {
                  "encodeMeshSuccess" === tt.data.id ? (Vt.removeEventListener("error", dt), Vt.removeEventListener("message", jt), qt(tt.data.encodedMeshData), mt()) : "encodeMeshError" === tt.data.id && (Vt.removeEventListener("error", dt), Vt.removeEventListener("message", jt), Dt(new Error(tt.data.errorMessage)), mt())
                };
              Vt.addEventListener("error", dt), Vt.addEventListener("message", jt);
              const Ht = [];
              for (const et of tt) Ht.push(et.data.buffer);
              et && Ht.push(et.buffer), Vt.postMessage({
                id: "encodeMesh",
                attributes: tt,
                indices: et,
                options: Ot
              }, Ht)
            }))
          }))
        }
        if (this._modulePromise) {
          return AO((await this._modulePromise).module, tt, et, Ot)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(tt, et) {
        if (0 == tt.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        tt instanceof uO.d && tt.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === et?.method && (St.d.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), et.method = "MESH_SEQUENTIAL_ENCODING");
        const Vt = function(tt) {
            let et = tt.zOt(void 0, !0);
            return !et || et instanceof Uint32Array || et instanceof Uint16Array || (et = ((0, IV.e)(et, et.length) ? Uint32Array : Uint16Array).from(et)), et
          }(tt),
          Ot = function(tt, et) {
            const Vt = [];
            for (const Ot of tt.getVerticesDataKinds()) {
              if (et?.includes(Ot)) {
                if (Ot === ot.m.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const qt = tt.getVertexBuffer(Ot),
                Dt = qt.getSize(),
                mt = (0, IV.z)(qt.getData(), Dt, qt.type, qt.byteOffset, qt.byteStride, tt.getTotalVertices(), !0);
              Vt.push({
                kind: Ot,
                dracoName: pO(Ot),
                size: Dt,
                data: mt
              })
            }
            return Vt
          }(tt, et?.excludedAttributes);
        return await this._encodeAsync(Ot, Vt, et)
      }
    }
    TO.DefaultConfiguration = {
      wasmUrl: `${he.l._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${he.l._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${he.l._DefaultCdnUrl}/draco_encoder.js`
    }, TO._Default = null;
    const gO = "KHR_draco_mesh_compression";
    class sO {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(tt) {
        this.name = gO, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === tt.options.meshCompressionMethod && TO.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(tt, et, Vt) {
        if (!this.enabled) return;
        if (4 !== tt.mode && 5 !== tt.mode) return void St.d.Warn("Cannot compress primitive with mode " + tt.mode + ".");
        const Ot = [],
          qt = [];
        let Dt = null;
        if (void 0 !== tt.indices) {
          const mt = Vt[tt.indices],
            dt = et.getBufferView(mt);
          Dt = et.getData(dt).slice(), Ot.push(dt), qt.push(mt)
        }
        const mt = [];
        for (const [Xt, Qt] of Object.entries(tt.attributes)) {
          const tt = Vt[Qt],
            Dt = et.getBufferView(tt),
            jt = UV(tt.type),
            Ht = (0, IV.z)(et.getData(Dt), jt, tt.componentType, tt.byteOffset || 0, Dt.byteStride || (0, IV.v)(tt.componentType) * jt, tt.count, !0);
          mt.push({
            kind: Xt,
            dracoName: (dt = Xt, "POSITION" === dt ? "POSITION" : "NORMAL" === dt ? "NORMAL" : dt.startsWith("COLOR") ? "COLOR" : dt.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: UV(tt.type),
            data: Ht
          }), Ot.push(Dt), qt.push(tt)
        }
        var dt;
        const jt = {
            method: tt.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          Ht = TO.Default._encodeAsync(mt, Dt, jt).then((Vt => {
            const Dt = {
                bufferView: -1,
                attributes: Vt.attributeIds
              },
              mt = et.createBufferView(Vt.data);
            et.setBufferView(Dt, mt);
            for (const tt of Ot) this._bufferViewsUsed.add(tt);
            for (const tt of qt) this._accessorsUsed.add(tt);
            tt.extensions || (tt.extensions = {}), tt.extensions[gO] = Dt
          })).catch((tt => {
            St.d.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + tt.message)
          }));
        this._encodePromises.push(Ht), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(tt) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((et => {
          tt.getPropertiesWithBufferView(et).every((tt => this._accessorsUsed.has(tt))) && tt.removeBufferView(et)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let nO = !1;

    function tq() {
      nO || (nO = !0, LO.RegisterExtension(gO, (tt => new sO(tt))))
    }
    tq();
    var eq = Vt(41819);
    const Vq = "KHR_lights_punctual",
      Oq = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      qq = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      Dq = zt.n.Backward();
    class mq {
      constructor(tt) {
        this.name = Vq, this.enabled = !0, this.required = !1, this._exporter = tt
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[Vq] = this._lights
      }
      async postExportNodeAsync(tt, et, Vt, Ot, qt) {
        return await new Promise((Dt => {
          if (!(Vt instanceof QO.e)) return void Dt(et);
          const mt = Vt.getTypeID() == QO.e.LIGHTTYPEID_POINTLIGHT ? "point" : Vt.getTypeID() == QO.e.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : Vt.getTypeID() == QO.e.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!mt || !(Vt instanceof eq.b)) return St.d.Warn(`${tt}: Light ${Vt.name} is not supported in ${Vq}`), void Dt(et);
          if (Vt.falloffType !== QO.e.FALLOFF_GLTF && St.d.Warn(`${tt}: Light falloff for ${Vt.name} does not match the ${Vq} specification!`), !Vt.position.adt(0, 0, 0)) {
            const tt = zt.k.uf[0].rK(Vt.position);
            qt && YV(tt), et.translation = tt.GOt()
          }
          if ("point" !== mt) {
            const tt = Vt.direction.normalizeToRef(zt.k.uf[0]);
            qt && YV(tt);
            const Ot = zt.e.FromUnitVectorsToRef(Dq, tt, zt.k.Quaternion[0]);
            zt.e.IsIdentity(Ot) || (et.rotation = Ot.GOt())
          }
          const dt = {
            type: mt,
            name: Vt.name,
            color: Vt.diffuse.GOt(),
            intensity: Vt.intensity,
            range: Vt.range
          };
          if (sV(dt, Oq), "spot" === mt) {
            const tt = Vt;
            dt.spot = {
              innerConeAngle: tt.innerAngle / 2,
              outerConeAngle: tt.angle / 2
            }, sV(dt.spot, qq)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(dt);
          const jt = {
              light: this._lights.lights.length - 1
            },
            Ht = Vt.parent;
          if (Ht && TV(Vt, Ht)) {
            const tt = Ot.get(Ht);
            if (tt) {
              const Vt = this._exporter._nodes[tt];
              return xV(et, Vt), Vt.extensions || (Vt.extensions = {}), Vt.extensions[Vq] = jt, void Dt(null)
            }
          }
          et.extensions || (et.extensions = {}), et.extensions[Vq] = jt, Dt(et)
        }))
      }
    }
    let dq = !1;

    function jq() {
      dq || (dq = !0, LO.RegisterExtension(Vq, (tt => new mq(tt))))
    }
    jq();
    const Hq = "KHR_interactivity";
    class Xq {
      constructor(tt) {
        this._exporter = tt, this.name = Hq, this.enabled = !!tt.options.khrInteractivity, this.required = tt.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var tt, et, Vt;
        const Ot = this._exporter.options.khrInteractivity;
        if (!Ot) return;
        const qt = Ot.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: tt => this._exporter._getNodeIndex(tt),
          getAnimationIndex: tt => this._exporter._getAnimationIndex(tt),
          getCameraIndex: tt => this._exporter._getCameraIndex(tt),
          getMaterialIndex: tt => this._exporter._getMaterialIndex(tt),
          getRootIndex: (tt, et) => this._exporter._getRootIndex(tt, et),
          setNodeExtension: (tt, et, Vt) => this._exporter._setNodeExtension(tt, et, Vt)
        });
        this._exporter._glTF.extensions[Hq] = qt;
        for (const Dt of Ot.additionalExtensionsUsed)(tt = this._exporter._glTF).extensionsUsed || (tt.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(Dt) && this._exporter._glTF.extensionsUsed.push(Dt);
        for (const Dt of Ot.additionalExtensionsRequired)(et = this._exporter._glTF).extensionsUsed || (et.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(Dt) && this._exporter._glTF.extensionsUsed.push(Dt), (Vt = this._exporter._glTF).extensionsRequired || (Vt.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(Dt) && this._exporter._glTF.extensionsRequired.push(Dt)
      }
    }
    let Qq = !1;

    function lq() {
      Qq || (Qq = !0, LO.RegisterExtension(Hq, (tt => new Xq(tt)), 200))
    }
    lq();
    const Eq = "EXT_lights_area",
      fq = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      wq = {
        aspect: 1
      },
      yq = zt.n.Backward();
    class Nq {
      constructor(tt) {
        this.name = Eq, this.enabled = !0, this.required = !1, this._exporter = tt
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[Eq] = this._lights
      }
      async postExportNodeAsync(tt, et, Vt, Ot, qt) {
        return await new Promise((Dt => {
          if (!(Vt instanceof QO.e)) return void Dt(et);
          const mt = Vt.getTypeID() == QO.e.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!mt) return St.d.Warn(`${tt}: Light ${Vt.name} is not supported in ${Eq}`), void Dt(et);
          const dt = Vt;
          if (dt.falloffType !== QO.e.FALLOFF_GLTF && St.d.Warn(`${tt}: Light falloff for ${Vt.name} does not match the ${Eq} specification!`), !dt.position.adt(0, 0, 0)) {
            const tt = zt.k.uf[0].rK(dt.position);
            qt && YV(tt), et.translation = tt.GOt()
          }
          const jt = zt.n.Forward();
          qt && YV(jt);
          const Ht = zt.e.FromUnitVectorsToRef(yq, jt, zt.k.Quaternion[0]);
          zt.e.IsIdentity(Ht) || (et.rotation = Ht.GOt());
          const Xt = {
            type: mt,
            name: dt.name,
            color: dt.diffuse.GOt(),
            intensity: dt.intensity,
            size: dt.height,
            rect: {
              aspect: dt.width / dt.height
            }
          };
          sV(Xt, fq), Xt.rect && sV(Xt.rect, wq), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(Xt);
          const Qt = {
              light: this._lights.lights.length - 1
            },
            lt = Vt.parent;
          if (lt && TV(dt, lt)) {
            const tt = Ot.get(lt);
            if (tt) {
              const Vt = this._exporter._nodes[tt];
              return xV(et, Vt), Vt.extensions || (Vt.extensions = {}), Vt.extensions[Eq] = Qt, void Dt(null)
            }
          }
          et.extensions || (et.extensions = {}), et.extensions[Eq] = Qt, Dt(et)
        }))
      }
    }
    let aq = !1;

    function Mq() {
      aq || (aq = !0, LO.RegisterExtension(Eq, (tt => new Nq(tt))))
    }
    Mq();
    const bq = "KHR_materials_anisotropy";
    class Jq {
      constructor(tt) {
        this.name = bq, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = tt
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(tt, et, Vt) {
        const Ot = [];
        if (Vt instanceof ue) {
          if (Vt.anisotropy.isEnabled && !Vt.anisotropy.legacy) return Vt.anisotropy.texture && Ot.push(Vt.anisotropy.texture), Ot
        } else if (Vt instanceof ne && Vt.specularRoughnessAnisotropy > 0) {
          const tt = function(tt) {
            const et = tt.specularRoughnessAnisotropyTexture,
              Vt = tt.geometryTangentTexture;
            return `${et&&et.getInternalTexture()?et.getInternalTexture().uniqueId:"NoStrength"}_${Vt&&Vt.getInternalTexture()?Vt.getInternalTexture().uniqueId:"NoTangent"}`
          }(Vt);
          if (this._anisoTexturesMap[tt]) Ot.push(this._anisoTexturesMap[tt]);
          else {
            const et = await async function(tt) {
              const et = tt.vI(),
                Vt = tt.specularRoughnessAnisotropyTexture,
                Ot = tt.geometryTangentTexture;
              return Vt || Ot ? await dV("AnisotropyTexture", XV(Ot ? jV(Ot, 0) : HV(1), Ot ? jV(Ot, 1) : HV(0), Vt ? jV(Vt, 0) : HV(1)), et) : null
            }(Vt);
            et && (Ot.push(et), this._anisoTexturesMap[tt] = et)
          }
          return Ot
        }
        return []
      }
      postExportMaterialAsync(tt, et, Vt) {
        return new Promise((tt => {
          var Ot;
          if (Vt instanceof ue) {
            if (!Vt.anisotropy.isEnabled || Vt.anisotropy.legacy) return void tt(et);
            this._wasUsed = !0, et.extensions = et.extensions || {};
            const Ot = this._exporter._materialExporter.getTextureInfo(Vt.anisotropy.texture),
              qt = {
                anisotropyStrength: Vt.anisotropy.intensity,
                anisotropyRotation: Vt.anisotropy.angle,
                anisotropyTexture: Ot ?? void 0
              };
            null !== qt.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(Vt), et.extensions[bq] = qt
          } else if (Vt instanceof ne && Vt.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, et.extensions = et.extensions || {};
            let qt = Vt.specularRoughnessTexture;
            Vt._useRoughnessFromMetallicTextureGreen && (qt = Vt.baseMetalnessTexture);
            const Dt = this._anisoTexturesMap[Vt.id];
            if (!qt && !Dt) {
              let Ot = Vt.specularRoughness,
                qt = Vt.specularRoughnessAnisotropy;
              if (!Vt._useGltfStyleAnisotropy) {
                const tt = function(tt, et) {
                  const Vt = tt * tt,
                    Ot = Vt * Math.sqrt(2 / (1 + (1 - et) * (1 - et))),
                    qt = (1 - et) * Ot;
                  return {
                    newBaseRoughness: Math.sqrt(qt),
                    newAnisotropyStrength: Math.min(Math.sqrt((Ot - Vt) / Math.max(1 - Vt, 1e-4)), 1)
                  }
                }(Vt.specularRoughness, Vt.specularRoughnessAnisotropy);
                Ot = tt.newBaseRoughness, qt = tt.newAnisotropyStrength
              }
              et.pbrMetallicRoughness && (et.pbrMetallicRoughness.roughnessFactor = Ot);
              const Dt = {
                anisotropyStrength: qt,
                anisotropyRotation: Vt.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return et.extensions[bq] = Dt, tt(et)
            }
            const mt = Dt ? this._exporter._materialExporter.getTextureInfo(Dt) : null,
              dt = {
                anisotropyStrength: Vt.specularRoughnessAnisotropy,
                anisotropyRotation: Vt.geometryTangentAngle,
                anisotropyTexture: mt || void 0,
                extensions: {}
              };
            Vt._useGltfStyleAnisotropy || (et.extensions.KHR_materials_openpbr = {}, (Ot = this._exporter._glTF).extensionsUsed || (Ot.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(Vt), et.extensions[bq] = dt
          }
          tt(et)
        }))
      }
    }
    let Cq = !1;

    function uq() {
      Cq || (Cq = !0, LO.RegisterExtension(bq, (tt => new Jq(tt))))
    }
    uq();
    const Kq = "KHR_materials_clearcoat";

    function hq(tt, et) {
      const Vt = new Rt.f(et.name, et.vI());
      return Vt._texture = tt, Vt.coordinatesIndex = et.coordinatesIndex, et instanceof Rt.f && (Vt.uOffset = et.uOffset, Vt.vOffset = et.vOffset, Vt.uScale = et.uScale, Vt.vScale = et.vScale, Vt.wAng = et.wAng), Vt.wrapU = et.wrapU, Vt.wrapV = et.wrapV, Vt
    }
    class vq {
      constructor(tt) {
        this.name = Kq, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = tt
      }
      dispose() {
        for (const tt of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[tt].dispose()
        }
        this._mergedTexturesMap = {};
        for (const tt of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[tt].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(tt, et, Vt) {
        const Ot = [];
        if (Vt instanceof ue) {
          if (Vt.clearCoat.isEnabled) return Vt.clearCoat.texture && Ot.push(Vt.clearCoat.texture), !Vt.clearCoat.useRoughnessFromMainTexture && Vt.clearCoat.textureRoughness && Ot.push(Vt.clearCoat.textureRoughness), Vt.clearCoat.bumpTexture && Ot.push(Vt.clearCoat.bumpTexture), Ot
        } else if (Vt instanceof ne && Vt.coatWeight > 0) {
          let tt = !1;
          if (Vt.coatWeightTexture ? Vt.coatRoughnessTexture ? Vt._useCoatRoughnessFromGreenChannel && Vt.coatWeightTexture.getInternalTexture() === Vt.coatRoughnessTexture.getInternalTexture() ? (Ot.push(Vt.coatWeightTexture), Ot.push(Vt.coatRoughnessTexture)) : tt = !0 : Ot.push(Vt.coatWeightTexture) : Vt.coatRoughnessTexture && (Vt._useCoatRoughnessFromGreenChannel ? Ot.push(Vt.coatRoughnessTexture) : tt = !0), tt) {
            const tt = function(tt) {
              const et = tt.coatWeightTexture,
                Vt = et && et.getInternalTexture() ? et.getInternalTexture().uniqueId : "NoCoat",
                Ot = tt.coatRoughnessTexture;
              return `${Vt}_${Ot&&Ot.getInternalTexture()?Ot.getInternalTexture().uniqueId:"NoRoughness"}`
            }(Vt);
            if (!this._cachedInternalTexturesMap[tt]) {
              const et = await async function(tt) {
                const et = tt.vI(),
                  Vt = tt.coatWeightTexture,
                  Ot = tt.coatRoughnessTexture;
                return Vt || Ot ? (await dV("CoatTexture", XV(Vt ? jV(Vt, 0) : HV(1), Ot ? jV(Ot, tt._useCoatRoughnessFromGreenChannel ? 1 : 0) : HV(1)), et)).getInternalTexture() : null
              }(Vt);
              et && (this._cachedInternalTexturesMap[tt] = et)
            }
            this._cachedInternalTexturesMap[tt] && (Vt.coatWeightTexture && (this._mergedTexturesMap[Vt.coatWeightTexture.uniqueId] = hq(this._cachedInternalTexturesMap[tt], Vt.coatWeightTexture), Ot.push(this._mergedTexturesMap[Vt.coatWeightTexture.uniqueId])), Vt.coatRoughnessTexture && (this._mergedTexturesMap[Vt.coatRoughnessTexture.uniqueId] = hq(this._cachedInternalTexturesMap[tt], Vt.coatRoughnessTexture), Ot.push(this._mergedTexturesMap[Vt.coatRoughnessTexture.uniqueId])))
          }
          return Vt.geometryCoatNormalTexture && Ot.push(Vt.geometryCoatNormalTexture), Ot
        }
        return []
      }
      postExportMaterialAsync(tt, et, Vt) {
        return new Promise((tt => {
          if (Vt instanceof ue) {
            if (!Vt.clearCoat.isEnabled) return void tt(et);
            this._wasUsed = !0, et.extensions = et.extensions || {};
            const Ot = this._exporter._materialExporter.getTextureInfo(Vt.clearCoat.texture);
            let qt;
            qt = Vt.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(Vt.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(Vt.clearCoat.textureRoughness), Vt.clearCoat.isTintEnabled && he.l.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${Vt.name}`), Vt.clearCoat.remapF0OnInterfaceChange && he.l.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${Vt.name}`);
            const Dt = this._exporter._materialExporter.getTextureInfo(Vt.clearCoat.bumpTexture),
              mt = {
                clearcoatFactor: Vt.clearCoat.intensity,
                clearcoatTexture: Ot ?? void 0,
                clearcoatRoughnessFactor: Vt.clearCoat.roughness,
                clearcoatRoughnessTexture: qt ?? void 0,
                clearcoatNormalTexture: Dt ?? void 0
              };
            null === mt.clearcoatTexture && null === mt.clearcoatRoughnessTexture && null === mt.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Vt), et.extensions[Kq] = mt
          } else if (Vt instanceof ne) {
            if (0 == Vt.coatWeight) return void tt(et);
            let Ot, qt, Dt, mt;
            this._wasUsed = !0, et.extensions = et.extensions || {}, Vt.coatWeightTexture && (Ot = this._mergedTexturesMap[Vt.coatWeightTexture.uniqueId], qt = this._exporter._materialExporter.getTextureInfo(Ot)), Vt.coatRoughnessTexture && (Dt = this._mergedTexturesMap[Vt.coatRoughnessTexture.uniqueId], mt = this._exporter._materialExporter.getTextureInfo(Dt)), Vt.coatColorTexture && he.l.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${Vt.name}`);
            const dt = this._exporter._materialExporter.getTextureInfo(Vt.geometryCoatNormalTexture),
              jt = {
                clearcoatFactor: Vt.coatWeight,
                clearcoatTexture: qt ?? void 0,
                clearcoatRoughnessFactor: Vt.coatRoughness,
                clearcoatRoughnessTexture: mt ?? void 0,
                clearcoatNormalTexture: dt ?? void 0
              };
            null === jt.clearcoatTexture && null === jt.clearcoatRoughnessTexture && null === jt.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Vt), et.extensions[Kq] = jt
          }
          tt(et)
        }))
      }
    }
    let Wq = !1;

    function Sq() {
      Wq || (Wq = !0, LO.RegisterExtension(Kq, (tt => new vq(tt))))
    }
    Sq();
    const cq = "KHR_materials_coat";

    function Rq(tt) {
      const et = tt.coatRoughnessAnisotropyTexture,
        Vt = tt.geometryCoatTangentTexture;
      return `${et&&et.getInternalTexture()?et.getInternalTexture().uniqueId:"NoStrength"}_${Vt&&Vt.getInternalTexture()?Vt.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function Iq(tt, et) {
      const Vt = new Rt.f(et.name, et.vI());
      return Vt._texture = tt, Vt.coordinatesIndex = et.coordinatesIndex, et instanceof Rt.f && (Vt.uOffset = et.uOffset, Vt.vOffset = et.vOffset, Vt.uScale = et.uScale, Vt.vScale = et.vScale, Vt.wAng = et.wAng), Vt.wrapU = et.wrapU, Vt.wrapV = et.wrapV, Vt
    }
    class Pq {
      constructor(tt) {
        this.name = cq, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = tt
      }
      dispose() {
        for (const tt of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[tt].dispose()
        }
        this._mergedTexturesMap = {};
        for (const tt of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[tt].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(tt, et, Vt) {
        const Ot = [];
        if (Vt instanceof ue) {
          if (Vt.clearCoat.isEnabled) return Vt.clearCoat.texture && Ot.push(Vt.clearCoat.texture), !Vt.clearCoat.useRoughnessFromMainTexture && Vt.clearCoat.textureRoughness && Ot.push(Vt.clearCoat.textureRoughness), Vt.clearCoat.bumpTexture && Ot.push(Vt.clearCoat.bumpTexture), Vt.clearCoat.tintTexture && Ot.push(Vt.clearCoat.tintTexture), Ot
        } else if (Vt instanceof ne && Vt.coatWeight > 0) {
          let tt = !1;
          if (Vt.coatWeightTexture ? Vt.coatRoughnessTexture ? Vt._useCoatRoughnessFromGreenChannel && Vt.coatWeightTexture.getInternalTexture() === Vt.coatRoughnessTexture.getInternalTexture() ? (Ot.push(Vt.coatWeightTexture), Ot.push(Vt.coatRoughnessTexture)) : tt = !0 : Ot.push(Vt.coatWeightTexture) : Vt.coatRoughnessTexture && (Vt._useCoatRoughnessFromGreenChannel ? Ot.push(Vt.coatRoughnessTexture) : tt = !0), tt) {
            const tt = function(tt) {
              const et = tt.coatWeightTexture,
                Vt = et && et.getInternalTexture() ? et.getInternalTexture().uniqueId : "NoCoat",
                Ot = tt.coatRoughnessTexture;
              return `${Vt}_${Ot&&Ot.getInternalTexture()?Ot.getInternalTexture().uniqueId:"NoRoughness"}`
            }(Vt);
            if (!this._cachedInternalTexturesMap[tt]) {
              const et = await async function(tt) {
                const et = tt.vI(),
                  Vt = tt.coatWeightTexture,
                  Ot = tt.coatRoughnessTexture;
                return Vt || Ot ? (await dV("CoatTexture", XV(Vt ? jV(Vt, 0) : HV(1), Ot ? jV(Ot, tt._useCoatRoughnessFromGreenChannel ? 1 : 0) : HV(1)), et)).getInternalTexture() : null
              }(Vt);
              et && (this._cachedInternalTexturesMap[tt] = et)
            }
            this._cachedInternalTexturesMap[tt] && (Vt.coatWeightTexture && (this._mergedTexturesMap[Vt.coatWeightTexture.uniqueId] = Iq(this._cachedInternalTexturesMap[tt], Vt.coatWeightTexture), Ot.push(this._mergedTexturesMap[Vt.coatWeightTexture.uniqueId])), Vt.coatRoughnessTexture && (this._mergedTexturesMap[Vt.coatRoughnessTexture.uniqueId] = Iq(this._cachedInternalTexturesMap[tt], Vt.coatRoughnessTexture), Ot.push(this._mergedTexturesMap[Vt.coatRoughnessTexture.uniqueId])))
          }
          if (Vt.geometryCoatNormalTexture && Ot.push(Vt.geometryCoatNormalTexture), Vt.coatColorTexture && Ot.push(Vt.coatColorTexture), Vt.coatRoughnessAnisotropy > 0) {
            const tt = Rq(Vt);
            if (this._mergedTexturesMap[tt]) Ot.push(this._mergedTexturesMap[tt]);
            else {
              const et = await async function(tt) {
                const et = tt.vI(),
                  Vt = tt.coatRoughnessAnisotropyTexture,
                  Ot = tt.geometryCoatTangentTexture;
                return Vt || Ot ? await dV("AnisotropyTexture", XV(Ot ? jV(Ot, 0) : HV(1), Ot ? jV(Ot, 1) : HV(0), Vt ? jV(Vt, 0) : HV(1)), et) : null
              }(Vt);
              et && (Ot.push(et), this._mergedTexturesMap[tt] = et)
            }
            return Ot
          }
          return Ot
        }
        return []
      }
      postExportMaterialAsync(tt, et, Vt) {
        return new Promise((tt => {
          var Ot;
          if (Vt instanceof ue) {
            if (!Vt.clearCoat.isEnabled) return void tt(et);
            this._wasUsed = !0, et.extensions = et.extensions || {};
            const Ot = this._exporter._materialExporter.getTextureInfo(Vt.clearCoat.texture);
            let qt, Dt;
            qt = Vt.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(Vt.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(Vt.clearCoat.textureRoughness), Vt.clearCoat.isTintEnabled && (Dt = this._exporter._materialExporter.getTextureInfo(Vt.clearCoat.tintTexture));
            const mt = this._exporter._materialExporter.getTextureInfo(Vt.clearCoat.bumpTexture),
              dt = Vt.clearCoat.indexOfRefraction,
              jt = {
                coatFactor: Vt.clearCoat.intensity,
                coatTexture: Ot ?? void 0,
                coatRoughnessFactor: Vt.clearCoat.roughness,
                coatRoughnessTexture: qt ?? void 0,
                coatNormalTexture: mt ?? void 0,
                coatColorFactor: Vt.clearCoat.tintColor.GOt(),
                coatColorTexture: Dt ?? void 0,
                coatIor: 1.5 !== dt ? dt : void 0
              };
            null === jt.coatTexture && null === jt.coatRoughnessTexture && null === jt.coatRoughnessTexture && null === jt.coatColorTexture || this._exporter._materialNeedsUVsSet.add(Vt), et.extensions[cq] = jt
          } else if (Vt instanceof ne) {
            if (0 == Vt.coatWeight) return void tt(et);
            let qt, Dt, mt, dt;
            this._wasUsed = !0, et.extensions = et.extensions || {}, Vt.coatWeightTexture && (qt = this._mergedTexturesMap[Vt.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[Vt.coatWeightTexture.uniqueId] : Vt.coatWeightTexture, Dt = this._exporter._materialExporter.getTextureInfo(qt)), Vt.coatRoughnessTexture && (mt = this._mergedTexturesMap[Vt.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[Vt.coatRoughnessTexture.uniqueId] : Vt.coatRoughnessTexture, dt = this._exporter._materialExporter.getTextureInfo(mt));
            const jt = this._exporter._materialExporter.getTextureInfo(Vt.geometryCoatNormalTexture),
              Ht = this._exporter._materialExporter.getTextureInfo(Vt.coatColorTexture),
              Xt = Vt.coatIor,
              Qt = Vt.coatDarkening,
              lt = Vt.coatRoughnessTexture,
              Et = Rq(Vt),
              ft = this._mergedTexturesMap[Et];
            let wt, yt = 0,
              Nt = 0;
            if (Vt.coatRoughnessAnisotropy > 0) {
              if (lt || ft) {
                const tt = ft ? this._exporter._materialExporter.getTextureInfo(ft) : null;
                yt = Vt.coatRoughnessAnisotropy, Nt = Vt.geometryCoatTangentAngle, wt = tt || void 0
              } else {
                let tt = Vt.coatRoughness,
                  Ot = Vt.coatRoughnessAnisotropy;
                if (!Vt._useGltfStyleAnisotropy) {
                  const et = function(tt, et) {
                    const Vt = tt * tt,
                      Ot = Vt * Math.sqrt(2 / (1 + (1 - et) * (1 - et))),
                      qt = (1 - et) * Ot;
                    return {
                      newBaseRoughness: Math.sqrt(qt),
                      newAnisotropyStrength: Math.min(Math.sqrt((Ot - Vt) / Math.max(1 - Vt, 1e-4)), 1)
                    }
                  }(Vt.coatRoughness, Vt.coatRoughnessAnisotropy);
                  tt = et.newBaseRoughness, Ot = et.newAnisotropyStrength
                }
                et.pbrMetallicRoughness && (et.pbrMetallicRoughness.roughnessFactor = tt), yt = Ot, Nt = Vt.geometryCoatTangentAngle + .5 * Math.PI, wt = void 0
              }
              Vt._useGltfStyleAnisotropy || (et.extensions.KHR_materials_openpbr = {}, (Ot = this._exporter._glTF).extensionsUsed || (Ot.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const Mt = {
              coatFactor: Vt.coatWeight,
              coatTexture: Dt ?? void 0,
              coatRoughnessFactor: Vt.coatRoughness,
              coatRoughnessTexture: dt ?? void 0,
              coatNormalTexture: jt ?? void 0,
              coatColorFactor: Vt.coatColor.GOt(),
              coatColorTexture: Ht ?? void 0,
              coatIor: 1.5 !== Xt ? Xt : void 0,
              coatDarkeningFactor: 1 !== Qt ? Qt : void 0,
              coatAnisotropyRotation: Nt,
              coatAnisotropyStrength: yt,
              coatAnisotropyTexture: wt
            };
            null === Mt.coatTexture && null === Mt.coatRoughnessTexture && null === Mt.coatRoughnessTexture && null === Mt.coatAnisotropyTexture && null === Mt.coatColorTexture || this._exporter._materialNeedsUVsSet.add(Vt), et.extensions[cq] = Mt
          }
          tt(et)
        }))
      }
    }
    let Zq = !1;

    function Lq() {
      Zq || (Zq = !0, LO.RegisterExtension(cq, (tt => new Pq(tt))))
    }
    Lq();
    let Fq = (() => {
      var tt, et, Vt, Ot, qt, mt, dt, jt, Ht, Xt, Qt, lt, Et, ft, wt, yt, Nt, Mt, bt, Jt, Ct, ut, Kt, ht, St, ct, Rt, It, Pt, Zt, Ft, kt, Gt, zt, ot, rt, Ut, At, it, Yt, pt, xt, Tt, gt, st, nt, te, ee, Ve, Oe, qe, De, me, de, je, He, Xe, Qe, le, Ee, fe, we, ye, Ne, ae, Me, be;
      let Je, Ce, he, ve, We, Se, ce, Re, Ie, Pe, Ze, Le, Fe, ke, Ge, ze, oe, re, Ue, Ae, ie, Ye, Be, pe, xe, Te, ge, se, ne, tV, eV, VV, OV, qV, DV, mV, dV, jV, HV, XV, QV, lV, EV, fV, wV, yV, NV, aV, MV, bV, JV, CV, uV, KV, hV, vV, WV, SV, cV, RV, IV, PV, ZV, LV, FV, kV, GV, zV, oV = ue,
        rV = [],
        UV = [],
        AV = [],
        iV = [],
        YV = [],
        BV = [],
        pV = [],
        xV = [],
        TV = [],
        gV = [],
        sV = [],
        nV = [],
        tO = [],
        eO = [],
        VO = [],
        OO = [],
        qO = [],
        DO = [],
        mO = [],
        dO = [],
        jO = [],
        HO = [],
        XO = [],
        QO = [],
        lO = [],
        EO = [],
        fO = [],
        wO = [],
        yO = [],
        NO = [],
        aO = [],
        MO = [],
        bO = [],
        JO = [],
        CO = [],
        uO = [],
        KO = [],
        hO = [],
        vO = [],
        WO = [],
        SO = [],
        cO = [],
        RO = [],
        IO = [],
        PO = [],
        ZO = [],
        LO = [],
        FO = [],
        kO = [],
        GO = [],
        zO = [],
        oO = [],
        rO = [],
        UO = [],
        AO = [],
        iO = [],
        YO = [],
        BO = [],
        pO = [],
        xO = [],
        TO = [],
        gO = [],
        sO = [],
        nO = [],
        tq = [],
        eq = [],
        Vq = [],
        Oq = [],
        qq = [],
        Dq = [],
        mq = [],
        dq = [],
        jq = [],
        Hq = [],
        Xq = [],
        Qq = [],
        lq = [],
        Eq = [],
        fq = [],
        wq = [],
        yq = [],
        Nq = [],
        aq = [],
        Mq = [],
        bq = [],
        Jq = [],
        Cq = [],
        uq = [],
        Kq = [],
        hq = [],
        vq = [],
        Wq = [],
        Sq = [],
        cq = [],
        Rq = [],
        Iq = [],
        Pq = [],
        Zq = [],
        Lq = [],
        Fq = [],
        kq = [],
        Gq = [],
        zq = [],
        oq = [],
        rq = [],
        Uq = [],
        Aq = [],
        iq = [],
        Yq = [],
        Bq = [],
        pq = [],
        xq = [],
        Tq = [],
        gq = [],
        sq = [],
        nq = [],
        tD = [],
        eD = [],
        VD = [],
        OD = [],
        qD = [],
        DD = [],
        mD = [],
        dD = [],
        jD = [],
        HD = [],
        XD = [],
        QD = [],
        lD = [],
        ED = [],
        fD = [],
        wD = [],
        yD = [];
      return tt = class extends oV {
        get directIntensity() {
          return (0, vt.e)(this, et, "f")
        }
        set directIntensity(tt) {
          (0, vt.i)(this, et, tt, "f")
        }
        get emissiveIntensity() {
          return (0, vt.e)(this, Vt, "f")
        }
        set emissiveIntensity(tt) {
          (0, vt.i)(this, Vt, tt, "f")
        }
        get environmentIntensity() {
          return (0, vt.e)(this, Ot, "f")
        }
        set environmentIntensity(tt) {
          (0, vt.i)(this, Ot, tt, "f")
        }
        get specularIntensity() {
          return (0, vt.e)(this, qt, "f")
        }
        set specularIntensity(tt) {
          (0, vt.i)(this, qt, tt, "f")
        }
        get disableBumpMap() {
          return (0, vt.e)(this, mt, "f")
        }
        set disableBumpMap(tt) {
          (0, vt.i)(this, mt, tt, "f")
        }
        get albedoTexture() {
          return (0, vt.e)(this, dt, "f")
        }
        set albedoTexture(tt) {
          (0, vt.i)(this, dt, tt, "f")
        }
        get baseWeightTexture() {
          return (0, vt.e)(this, jt, "f")
        }
        set baseWeightTexture(tt) {
          (0, vt.i)(this, jt, tt, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, vt.e)(this, Ht, "f")
        }
        set baseDiffuseRoughnessTexture(tt) {
          (0, vt.i)(this, Ht, tt, "f")
        }
        get ambientTexture() {
          return (0, vt.e)(this, Xt, "f")
        }
        set ambientTexture(tt) {
          (0, vt.i)(this, Xt, tt, "f")
        }
        get ambientTextureStrength() {
          return (0, vt.e)(this, Qt, "f")
        }
        set ambientTextureStrength(tt) {
          (0, vt.i)(this, Qt, tt, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, vt.e)(this, lt, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(tt) {
          (0, vt.i)(this, lt, tt, "f")
        }
        get opacityTexture() {
          return (0, vt.e)(this, Et, "f")
        }
        set opacityTexture(tt) {
          (0, vt.i)(this, Et, tt, "f")
        }
        get reflectionTexture() {
          return (0, vt.e)(this, ft, "f")
        }
        set reflectionTexture(tt) {
          (0, vt.i)(this, ft, tt, "f")
        }
        get emissiveTexture() {
          return (0, vt.e)(this, wt, "f")
        }
        set emissiveTexture(tt) {
          (0, vt.i)(this, wt, tt, "f")
        }
        get reflectivityTexture() {
          return (0, vt.e)(this, yt, "f")
        }
        set reflectivityTexture(tt) {
          (0, vt.i)(this, yt, tt, "f")
        }
        get metallicTexture() {
          return (0, vt.e)(this, Nt, "f")
        }
        set metallicTexture(tt) {
          (0, vt.i)(this, Nt, tt, "f")
        }
        get metallic() {
          return (0, vt.e)(this, Mt, "f")
        }
        set metallic(tt) {
          (0, vt.i)(this, Mt, tt, "f")
        }
        get roughness() {
          return (0, vt.e)(this, bt, "f")
        }
        set roughness(tt) {
          (0, vt.i)(this, bt, tt, "f")
        }
        get metallicF0Factor() {
          return (0, vt.e)(this, Jt, "f")
        }
        set metallicF0Factor(tt) {
          (0, vt.i)(this, Jt, tt, "f")
        }
        get metallicReflectanceColor() {
          return (0, vt.e)(this, Ct, "f")
        }
        set metallicReflectanceColor(tt) {
          (0, vt.i)(this, Ct, tt, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, vt.e)(this, ut, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(tt) {
          (0, vt.i)(this, ut, tt, "f")
        }
        get metallicReflectanceTexture() {
          return (0, vt.e)(this, Kt, "f")
        }
        set metallicReflectanceTexture(tt) {
          (0, vt.i)(this, Kt, tt, "f")
        }
        get reflectanceTexture() {
          return (0, vt.e)(this, ht, "f")
        }
        set reflectanceTexture(tt) {
          (0, vt.i)(this, ht, tt, "f")
        }
        get microSurfaceTexture() {
          return (0, vt.e)(this, St, "f")
        }
        set microSurfaceTexture(tt) {
          (0, vt.i)(this, St, tt, "f")
        }
        get bumpTexture() {
          return (0, vt.e)(this, ct, "f")
        }
        set bumpTexture(tt) {
          (0, vt.i)(this, ct, tt, "f")
        }
        get lightmapTexture() {
          return (0, vt.e)(this, Rt, "f")
        }
        set lightmapTexture(tt) {
          (0, vt.i)(this, Rt, tt, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(tt) {
          this.subSurface.refractionTexture = tt, tt ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, vt.e)(this, It, "f")
        }
        set ambientColor(tt) {
          (0, vt.i)(this, It, tt, "f")
        }
        get albedoColor() {
          return (0, vt.e)(this, Pt, "f")
        }
        set albedoColor(tt) {
          (0, vt.i)(this, Pt, tt, "f")
        }
        get baseWeight() {
          return (0, vt.e)(this, Zt, "f")
        }
        set baseWeight(tt) {
          (0, vt.i)(this, Zt, tt, "f")
        }
        get baseDiffuseRoughness() {
          return (0, vt.e)(this, Ft, "f")
        }
        set baseDiffuseRoughness(tt) {
          (0, vt.i)(this, Ft, tt, "f")
        }
        get reflectivityColor() {
          return (0, vt.e)(this, kt, "f")
        }
        set reflectivityColor(tt) {
          (0, vt.i)(this, kt, tt, "f")
        }
        get reflectionColor() {
          return (0, vt.e)(this, Gt, "f")
        }
        set reflectionColor(tt) {
          (0, vt.i)(this, Gt, tt, "f")
        }
        get emissiveColor() {
          return (0, vt.e)(this, zt, "f")
        }
        set emissiveColor(tt) {
          (0, vt.i)(this, zt, tt, "f")
        }
        get microSurface() {
          return (0, vt.e)(this, ot, "f")
        }
        set microSurface(tt) {
          (0, vt.i)(this, ot, tt, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(tt) {
          this.subSurface.indexOfRefraction = tt
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(tt) {
          this.subSurface.invertRefractionY = tt
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(tt) {
          this.subSurface.linkRefractionWithTransparency = tt, tt && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, vt.e)(this, rt, "f")
        }
        set useLightmapAsShadowmap(tt) {
          (0, vt.i)(this, rt, tt, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, vt.e)(this, Ut, "f")
        }
        set useAlphaFromAlbedoTexture(tt) {
          (0, vt.i)(this, Ut, tt, "f")
        }
        get forceAlphaTest() {
          return (0, vt.e)(this, At, "f")
        }
        set forceAlphaTest(tt) {
          (0, vt.i)(this, At, tt, "f")
        }
        get alphaCutOff() {
          return (0, vt.e)(this, it, "f")
        }
        set alphaCutOff(tt) {
          (0, vt.i)(this, it, tt, "f")
        }
        get useSpecularOverAlpha() {
          return (0, vt.e)(this, Yt, "f")
        }
        set useSpecularOverAlpha(tt) {
          (0, vt.i)(this, Yt, tt, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, vt.e)(this, pt, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(tt) {
          (0, vt.i)(this, pt, tt, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, vt.e)(this, xt, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(tt) {
          (0, vt.i)(this, xt, tt, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, vt.e)(this, Tt, "f")
        }
        set useRoughnessFromMetallicTextureGreen(tt) {
          (0, vt.i)(this, Tt, tt, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, vt.e)(this, gt, "f")
        }
        set useMetallnessFromMetallicTextureBlue(tt) {
          (0, vt.i)(this, gt, tt, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, vt.e)(this, st, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(tt) {
          (0, vt.i)(this, st, tt, "f")
        }
        get useAmbientInGrayScale() {
          return (0, vt.e)(this, nt, "f")
        }
        set useAmbientInGrayScale(tt) {
          (0, vt.i)(this, nt, tt, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, vt.e)(this, te, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(tt) {
          (0, vt.i)(this, te, tt, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === ue.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(tt) {
          tt !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = tt ? ue.LIGHTFALLOFF_PHYSICAL : ue.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === ue.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(tt) {
          tt !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = tt ? ue.LIGHTFALLOFF_GLTF : ue.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, vt.e)(this, ee, "f")
        }
        set useRadianceOverAlpha(tt) {
          (0, vt.i)(this, ee, tt, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, vt.e)(this, Ve, "f")
        }
        set useObjectSpaceNormalMap(tt) {
          (0, vt.i)(this, Ve, tt, "f")
        }
        get useParallax() {
          return (0, vt.e)(this, Oe, "f")
        }
        set useParallax(tt) {
          (0, vt.i)(this, Oe, tt, "f")
        }
        get useParallaxOcclusion() {
          return (0, vt.e)(this, qe, "f")
        }
        set useParallaxOcclusion(tt) {
          (0, vt.i)(this, qe, tt, "f")
        }
        get parallaxScaleBias() {
          return (0, vt.e)(this, De, "f")
        }
        set parallaxScaleBias(tt) {
          (0, vt.i)(this, De, tt, "f")
        }
        get disableLighting() {
          return (0, vt.e)(this, me, "f")
        }
        set disableLighting(tt) {
          (0, vt.i)(this, me, tt, "f")
        }
        get forceIrradianceInFragment() {
          return (0, vt.e)(this, de, "f")
        }
        set forceIrradianceInFragment(tt) {
          (0, vt.i)(this, de, tt, "f")
        }
        get maxSimultaneousLights() {
          return (0, vt.e)(this, je, "f")
        }
        set maxSimultaneousLights(tt) {
          (0, vt.i)(this, je, tt, "f")
        }
        get invertNormalMapX() {
          return (0, vt.e)(this, He, "f")
        }
        set invertNormalMapX(tt) {
          (0, vt.i)(this, He, tt, "f")
        }
        get invertNormalMapY() {
          return (0, vt.e)(this, Xe, "f")
        }
        set invertNormalMapY(tt) {
          (0, vt.i)(this, Xe, tt, "f")
        }
        get twoSidedLighting() {
          return (0, vt.e)(this, Qe, "f")
        }
        set twoSidedLighting(tt) {
          (0, vt.i)(this, Qe, tt, "f")
        }
        get useAlphaFresnel() {
          return (0, vt.e)(this, le, "f")
        }
        set useAlphaFresnel(tt) {
          (0, vt.i)(this, le, tt, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, vt.e)(this, Ee, "f")
        }
        set useLinearAlphaFresnel(tt) {
          (0, vt.i)(this, Ee, tt, "f")
        }
        get environmentBRDFTexture() {
          return (0, vt.e)(this, fe, "f")
        }
        set environmentBRDFTexture(tt) {
          (0, vt.i)(this, fe, tt, "f")
        }
        get forceNormalForward() {
          return (0, vt.e)(this, we, "f")
        }
        set forceNormalForward(tt) {
          (0, vt.i)(this, we, tt, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, vt.e)(this, ye, "f")
        }
        set enableSpecularAntiAliasing(tt) {
          (0, vt.i)(this, ye, tt, "f")
        }
        get useHorizonOcclusion() {
          return (0, vt.e)(this, Ne, "f")
        }
        set useHorizonOcclusion(tt) {
          (0, vt.i)(this, Ne, tt, "f")
        }
        get useRadianceOcclusion() {
          return (0, vt.e)(this, ae, "f")
        }
        set useRadianceOcclusion(tt) {
          (0, vt.i)(this, ae, tt, "f")
        }
        get unlit() {
          return (0, vt.e)(this, Me, "f")
        }
        set unlit(tt) {
          (0, vt.i)(this, Me, tt, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, vt.e)(this, be, "f")
        }
        set applyDecalMapAfterDetailMap(tt) {
          (0, vt.i)(this, be, tt, "f")
        }
        constructor(Dt, Wt) {
          super(Dt, Wt, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), et.set(this, ((0, vt.m)(this, rV), (0, vt.m)(this, UV, 1))), Vt.set(this, ((0, vt.m)(this, AV), (0, vt.m)(this, iV, 1))), Ot.set(this, ((0, vt.m)(this, YV), (0, vt.m)(this, BV, 1))), qt.set(this, ((0, vt.m)(this, pV), (0, vt.m)(this, xV, 1))), mt.set(this, ((0, vt.m)(this, TV), (0, vt.m)(this, gV, !1))), dt.set(this, ((0, vt.m)(this, sV), (0, vt.m)(this, nV, void 0))), jt.set(this, ((0, vt.m)(this, tO), (0, vt.m)(this, eO, void 0))), Ht.set(this, ((0, vt.m)(this, VO), (0, vt.m)(this, OO, void 0))), Xt.set(this, ((0, vt.m)(this, qO), (0, vt.m)(this, DO, void 0))), Qt.set(this, ((0, vt.m)(this, mO), (0, vt.m)(this, dO, 1))), lt.set(this, ((0, vt.m)(this, jO), (0, vt.m)(this, HO, tt.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), Et.set(this, ((0, vt.m)(this, XO), (0, vt.m)(this, QO, void 0))), ft.set(this, ((0, vt.m)(this, lO), (0, vt.m)(this, EO, void 0))), wt.set(this, ((0, vt.m)(this, fO), (0, vt.m)(this, wO, void 0))), yt.set(this, ((0, vt.m)(this, yO), (0, vt.m)(this, NO, void 0))), Nt.set(this, ((0, vt.m)(this, aO), (0, vt.m)(this, MO, void 0))), Mt.set(this, ((0, vt.m)(this, bO), (0, vt.m)(this, JO, void 0))), bt.set(this, ((0, vt.m)(this, CO), (0, vt.m)(this, uO, void 0))), Jt.set(this, ((0, vt.m)(this, KO), (0, vt.m)(this, hO, 1))), Ct.set(this, ((0, vt.m)(this, vO), (0, vt.m)(this, WO, Bt.b.White()))), ut.set(this, ((0, vt.m)(this, SO), (0, vt.m)(this, cO, !1))), Kt.set(this, ((0, vt.m)(this, RO), (0, vt.m)(this, IO, void 0))), ht.set(this, ((0, vt.m)(this, PO), (0, vt.m)(this, ZO, void 0))), St.set(this, ((0, vt.m)(this, LO), (0, vt.m)(this, FO, void 0))), ct.set(this, ((0, vt.m)(this, kO), (0, vt.m)(this, GO, void 0))), Rt.set(this, ((0, vt.m)(this, zO), (0, vt.m)(this, oO, void 0))), It.set(this, ((0, vt.m)(this, rO), (0, vt.m)(this, UO, new Bt.b(0, 0, 0)))), Pt.set(this, ((0, vt.m)(this, AO), (0, vt.m)(this, iO, new Bt.b(1, 1, 1)))), Zt.set(this, ((0, vt.m)(this, YO), (0, vt.m)(this, BO, 1))), Ft.set(this, ((0, vt.m)(this, pO), (0, vt.m)(this, xO, void 0))), kt.set(this, ((0, vt.m)(this, TO), (0, vt.m)(this, gO, new Bt.b(1, 1, 1)))), Gt.set(this, ((0, vt.m)(this, sO), (0, vt.m)(this, nO, new Bt.b(1, 1, 1)))), zt.set(this, ((0, vt.m)(this, tq), (0, vt.m)(this, eq, new Bt.b(0, 0, 0)))), ot.set(this, ((0, vt.m)(this, Vq), (0, vt.m)(this, Oq, 1))), rt.set(this, ((0, vt.m)(this, qq), (0, vt.m)(this, Dq, !1))), Ut.set(this, ((0, vt.m)(this, mq), (0, vt.m)(this, dq, !1))), At.set(this, ((0, vt.m)(this, jq), (0, vt.m)(this, Hq, !1))), it.set(this, ((0, vt.m)(this, Xq), (0, vt.m)(this, Qq, .4))), Yt.set(this, ((0, vt.m)(this, lq), (0, vt.m)(this, Eq, !0))), pt.set(this, ((0, vt.m)(this, fq), (0, vt.m)(this, wq, !1))), xt.set(this, ((0, vt.m)(this, yq), (0, vt.m)(this, Nq, !0))), Tt.set(this, ((0, vt.m)(this, aq), (0, vt.m)(this, Mq, !1))), gt.set(this, ((0, vt.m)(this, bq), (0, vt.m)(this, Jq, !1))), st.set(this, ((0, vt.m)(this, Cq), (0, vt.m)(this, uq, !1))), nt.set(this, ((0, vt.m)(this, Kq), (0, vt.m)(this, hq, !1))), te.set(this, ((0, vt.m)(this, vq), (0, vt.m)(this, Wq, !1))), ee.set(this, ((0, vt.m)(this, Sq), (0, vt.m)(this, cq, !0))), Ve.set(this, ((0, vt.m)(this, Rq), (0, vt.m)(this, Iq, !1))), Oe.set(this, ((0, vt.m)(this, Pq), (0, vt.m)(this, Zq, !1))), qe.set(this, ((0, vt.m)(this, Lq), (0, vt.m)(this, Fq, !1))), De.set(this, ((0, vt.m)(this, kq), (0, vt.m)(this, Gq, .05))), me.set(this, ((0, vt.m)(this, zq), (0, vt.m)(this, oq, !1))), de.set(this, ((0, vt.m)(this, rq), (0, vt.m)(this, Uq, !1))), je.set(this, ((0, vt.m)(this, Aq), (0, vt.m)(this, iq, 4))), He.set(this, ((0, vt.m)(this, Yq), (0, vt.m)(this, Bq, !1))), Xe.set(this, ((0, vt.m)(this, pq), (0, vt.m)(this, xq, !1))), Qe.set(this, ((0, vt.m)(this, Tq), (0, vt.m)(this, gq, !1))), le.set(this, ((0, vt.m)(this, sq), (0, vt.m)(this, nq, !1))), Ee.set(this, ((0, vt.m)(this, tD), (0, vt.m)(this, eD, !1))), fe.set(this, ((0, vt.m)(this, VD), (0, vt.m)(this, OD, null))), we.set(this, ((0, vt.m)(this, qD), (0, vt.m)(this, DD, !1))), ye.set(this, ((0, vt.m)(this, mD), (0, vt.m)(this, dD, !1))), Ne.set(this, ((0, vt.m)(this, jD), (0, vt.m)(this, HD, !0))), ae.set(this, ((0, vt.m)(this, XD), (0, vt.m)(this, QD, !0))), Me.set(this, ((0, vt.m)(this, lD), (0, vt.m)(this, ED, !1))), be.set(this, ((0, vt.m)(this, fD), (0, vt.m)(this, wD, !1))), (0, vt.m)(this, yD), this._environmentBRDFTexture = Lt(this.vI())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(et) {
          let Vt = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const qt = Ke.d.Clone((() => new tt(et, this.vI())), this, {
            cloneTexturesOnlyOnce: Vt
          });
          return qt.id = et, qt.name = et, this.stencil.copyTo(qt.stencil), this._clonePlugins(qt, Ot), qt
        }
        serialize() {
          const tt = super.serialize();
          return tt.customType = "BABYLON.PBRMaterial", tt
        }
        static Parse(et, Vt, Ot) {
          const qt = Ke.d.Parse((() => new tt(et.name, Vt)), et, Vt, Ot);
          return et.stencil && qt.stencil.parse(et.stencil, Vt, Ot), Dt.c._ParsePlugins(et, qt, Vt, Ot), et.clearCoat && qt.clearCoat.parse(et.clearCoat, Vt, Ot), et.anisotropy && qt.anisotropy.parse(et.anisotropy, Vt, Ot), et.brdf && qt.brdf.parse(et.brdf, Vt, Ot), et.sheen && qt.sheen.parse(et.sheen, Vt, Ot), et.subSurface && qt.subSurface.parse(et.subSurface, Vt, Ot), et.iridescence && qt.iridescence.parse(et.iridescence, Vt, Ot), qt
        }
      }, et = new WeakMap, Vt = new WeakMap, Ot = new WeakMap, qt = new WeakMap, mt = new WeakMap, dt = new WeakMap, jt = new WeakMap, Ht = new WeakMap, Xt = new WeakMap, Qt = new WeakMap, lt = new WeakMap, Et = new WeakMap, ft = new WeakMap, wt = new WeakMap, yt = new WeakMap, Nt = new WeakMap, Mt = new WeakMap, bt = new WeakMap, Jt = new WeakMap, Ct = new WeakMap, ut = new WeakMap, Kt = new WeakMap, ht = new WeakMap, St = new WeakMap, ct = new WeakMap, Rt = new WeakMap, It = new WeakMap, Pt = new WeakMap, Zt = new WeakMap, Ft = new WeakMap, kt = new WeakMap, Gt = new WeakMap, zt = new WeakMap, ot = new WeakMap, rt = new WeakMap, Ut = new WeakMap, At = new WeakMap, it = new WeakMap, Yt = new WeakMap, pt = new WeakMap, xt = new WeakMap, Tt = new WeakMap, gt = new WeakMap, st = new WeakMap, nt = new WeakMap, te = new WeakMap, ee = new WeakMap, Ve = new WeakMap, Oe = new WeakMap, qe = new WeakMap, De = new WeakMap, me = new WeakMap, de = new WeakMap, je = new WeakMap, He = new WeakMap, Xe = new WeakMap, Qe = new WeakMap, le = new WeakMap, Ee = new WeakMap, fe = new WeakMap, we = new WeakMap, ye = new WeakMap, Ne = new WeakMap, ae = new WeakMap, Me = new WeakMap, be = new WeakMap, (() => {
        const et = "function" === typeof Symbol && Symbol.metadata ? Object.create(oV[Symbol.metadata] ?? null) : void 0;
        Je = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Ce = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], he = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], ve = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], We = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Se = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], ce = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Re = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Ie = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Pe = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Ze = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Le = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], Fe = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], ke = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Ge = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], ze = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], oe = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], re = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Ue = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Ae = [(0, Wt.t)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], ie = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Ye = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Be = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], pe = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], xe = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], Te = [(0, Wt.E)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty", null)], ge = [(0, Wt.t)("ambient"), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], se = [(0, Wt.t)("albedo"), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], ne = [(0, Wt.P)("baseWeight"), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], tV = [(0, Wt.P)("baseDiffuseRoughness"), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], eV = [(0, Wt.t)("reflectivity"), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], VV = [(0, Wt.t)("reflection"), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], OV = [(0, Wt.t)("emissive"), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], qV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], DV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], mV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], dV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], jV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], HV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], XV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], QV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], lV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], EV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], fV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], wV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], yV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], NV = [(0, Wt.P)()], aV = [(0, Wt.P)()], MV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], bV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], JV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], CV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], uV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], KV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsLightsDirty")], hV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], vV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsLightsDirty")], WV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], SV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], cV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], RV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], IV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], PV = [(0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], ZV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], LV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], FV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], kV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsTexturesDirty")], GV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsMiscDirty")], zV = [(0, Wt.P)(), (0, Wt.i)("_markAllSubMeshesAsMiscDirty")], (0, vt.l)(tt, null, Je, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: tt => "directIntensity" in tt,
            get: tt => tt.directIntensity,
            set: (tt, et) => {
              tt.directIntensity = et
            }
          },
          metadata: et
        }, UV, AV), (0, vt.l)(tt, null, Ce, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: tt => "emissiveIntensity" in tt,
            get: tt => tt.emissiveIntensity,
            set: (tt, et) => {
              tt.emissiveIntensity = et
            }
          },
          metadata: et
        }, iV, YV), (0, vt.l)(tt, null, he, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: tt => "environmentIntensity" in tt,
            get: tt => tt.environmentIntensity,
            set: (tt, et) => {
              tt.environmentIntensity = et
            }
          },
          metadata: et
        }, BV, pV), (0, vt.l)(tt, null, ve, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: tt => "specularIntensity" in tt,
            get: tt => tt.specularIntensity,
            set: (tt, et) => {
              tt.specularIntensity = et
            }
          },
          metadata: et
        }, xV, TV), (0, vt.l)(tt, null, We, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: tt => "disableBumpMap" in tt,
            get: tt => tt.disableBumpMap,
            set: (tt, et) => {
              tt.disableBumpMap = et
            }
          },
          metadata: et
        }, gV, sV), (0, vt.l)(tt, null, Se, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "albedoTexture" in tt,
            get: tt => tt.albedoTexture,
            set: (tt, et) => {
              tt.albedoTexture = et
            }
          },
          metadata: et
        }, nV, tO), (0, vt.l)(tt, null, ce, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "baseWeightTexture" in tt,
            get: tt => tt.baseWeightTexture,
            set: (tt, et) => {
              tt.baseWeightTexture = et
            }
          },
          metadata: et
        }, eO, VO), (0, vt.l)(tt, null, Re, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "baseDiffuseRoughnessTexture" in tt,
            get: tt => tt.baseDiffuseRoughnessTexture,
            set: (tt, et) => {
              tt.baseDiffuseRoughnessTexture = et
            }
          },
          metadata: et
        }, OO, qO), (0, vt.l)(tt, null, Ie, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "ambientTexture" in tt,
            get: tt => tt.ambientTexture,
            set: (tt, et) => {
              tt.ambientTexture = et
            }
          },
          metadata: et
        }, DO, mO), (0, vt.l)(tt, null, Pe, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: tt => "ambientTextureStrength" in tt,
            get: tt => tt.ambientTextureStrength,
            set: (tt, et) => {
              tt.ambientTextureStrength = et
            }
          },
          metadata: et
        }, dO, jO), (0, vt.l)(tt, null, Ze, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: tt => "ambientTextureImpactOnAnalyticalLights" in tt,
            get: tt => tt.ambientTextureImpactOnAnalyticalLights,
            set: (tt, et) => {
              tt.ambientTextureImpactOnAnalyticalLights = et
            }
          },
          metadata: et
        }, HO, XO), (0, vt.l)(tt, null, Le, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "opacityTexture" in tt,
            get: tt => tt.opacityTexture,
            set: (tt, et) => {
              tt.opacityTexture = et
            }
          },
          metadata: et
        }, QO, lO), (0, vt.l)(tt, null, Fe, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "reflectionTexture" in tt,
            get: tt => tt.reflectionTexture,
            set: (tt, et) => {
              tt.reflectionTexture = et
            }
          },
          metadata: et
        }, EO, fO), (0, vt.l)(tt, null, ke, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "emissiveTexture" in tt,
            get: tt => tt.emissiveTexture,
            set: (tt, et) => {
              tt.emissiveTexture = et
            }
          },
          metadata: et
        }, wO, yO), (0, vt.l)(tt, null, Ge, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "reflectivityTexture" in tt,
            get: tt => tt.reflectivityTexture,
            set: (tt, et) => {
              tt.reflectivityTexture = et
            }
          },
          metadata: et
        }, NO, aO), (0, vt.l)(tt, null, ze, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "metallicTexture" in tt,
            get: tt => tt.metallicTexture,
            set: (tt, et) => {
              tt.metallicTexture = et
            }
          },
          metadata: et
        }, MO, bO), (0, vt.l)(tt, null, oe, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: tt => "metallic" in tt,
            get: tt => tt.metallic,
            set: (tt, et) => {
              tt.metallic = et
            }
          },
          metadata: et
        }, JO, CO), (0, vt.l)(tt, null, re, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: tt => "roughness" in tt,
            get: tt => tt.roughness,
            set: (tt, et) => {
              tt.roughness = et
            }
          },
          metadata: et
        }, uO, KO), (0, vt.l)(tt, null, Ue, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: tt => "metallicF0Factor" in tt,
            get: tt => tt.metallicF0Factor,
            set: (tt, et) => {
              tt.metallicF0Factor = et
            }
          },
          metadata: et
        }, hO, vO), (0, vt.l)(tt, null, Ae, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: tt => "metallicReflectanceColor" in tt,
            get: tt => tt.metallicReflectanceColor,
            set: (tt, et) => {
              tt.metallicReflectanceColor = et
            }
          },
          metadata: et
        }, WO, SO), (0, vt.l)(tt, null, ie, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "useOnlyMetallicFromMetallicReflectanceTexture" in tt,
            get: tt => tt.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (tt, et) => {
              tt.useOnlyMetallicFromMetallicReflectanceTexture = et
            }
          },
          metadata: et
        }, cO, RO), (0, vt.l)(tt, null, Ye, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "metallicReflectanceTexture" in tt,
            get: tt => tt.metallicReflectanceTexture,
            set: (tt, et) => {
              tt.metallicReflectanceTexture = et
            }
          },
          metadata: et
        }, IO, PO), (0, vt.l)(tt, null, Be, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "reflectanceTexture" in tt,
            get: tt => tt.reflectanceTexture,
            set: (tt, et) => {
              tt.reflectanceTexture = et
            }
          },
          metadata: et
        }, ZO, LO), (0, vt.l)(tt, null, pe, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "microSurfaceTexture" in tt,
            get: tt => tt.microSurfaceTexture,
            set: (tt, et) => {
              tt.microSurfaceTexture = et
            }
          },
          metadata: et
        }, FO, kO), (0, vt.l)(tt, null, xe, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "bumpTexture" in tt,
            get: tt => tt.bumpTexture,
            set: (tt, et) => {
              tt.bumpTexture = et
            }
          },
          metadata: et
        }, GO, zO), (0, vt.l)(tt, null, Te, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "lightmapTexture" in tt,
            get: tt => tt.lightmapTexture,
            set: (tt, et) => {
              tt.lightmapTexture = et
            }
          },
          metadata: et
        }, oO, rO), (0, vt.l)(tt, null, ge, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: tt => "ambientColor" in tt,
            get: tt => tt.ambientColor,
            set: (tt, et) => {
              tt.ambientColor = et
            }
          },
          metadata: et
        }, UO, AO), (0, vt.l)(tt, null, se, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: tt => "albedoColor" in tt,
            get: tt => tt.albedoColor,
            set: (tt, et) => {
              tt.albedoColor = et
            }
          },
          metadata: et
        }, iO, YO), (0, vt.l)(tt, null, ne, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: tt => "baseWeight" in tt,
            get: tt => tt.baseWeight,
            set: (tt, et) => {
              tt.baseWeight = et
            }
          },
          metadata: et
        }, BO, pO), (0, vt.l)(tt, null, tV, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: tt => "baseDiffuseRoughness" in tt,
            get: tt => tt.baseDiffuseRoughness,
            set: (tt, et) => {
              tt.baseDiffuseRoughness = et
            }
          },
          metadata: et
        }, xO, TO), (0, vt.l)(tt, null, eV, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: tt => "reflectivityColor" in tt,
            get: tt => tt.reflectivityColor,
            set: (tt, et) => {
              tt.reflectivityColor = et
            }
          },
          metadata: et
        }, gO, sO), (0, vt.l)(tt, null, VV, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: tt => "reflectionColor" in tt,
            get: tt => tt.reflectionColor,
            set: (tt, et) => {
              tt.reflectionColor = et
            }
          },
          metadata: et
        }, nO, tq), (0, vt.l)(tt, null, OV, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: tt => "emissiveColor" in tt,
            get: tt => tt.emissiveColor,
            set: (tt, et) => {
              tt.emissiveColor = et
            }
          },
          metadata: et
        }, eq, Vq), (0, vt.l)(tt, null, qV, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: tt => "microSurface" in tt,
            get: tt => tt.microSurface,
            set: (tt, et) => {
              tt.microSurface = et
            }
          },
          metadata: et
        }, Oq, qq), (0, vt.l)(tt, null, DV, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: tt => "useLightmapAsShadowmap" in tt,
            get: tt => tt.useLightmapAsShadowmap,
            set: (tt, et) => {
              tt.useLightmapAsShadowmap = et
            }
          },
          metadata: et
        }, Dq, mq), (0, vt.l)(tt, null, mV, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "useAlphaFromAlbedoTexture" in tt,
            get: tt => tt.useAlphaFromAlbedoTexture,
            set: (tt, et) => {
              tt.useAlphaFromAlbedoTexture = et
            }
          },
          metadata: et
        }, dq, jq), (0, vt.l)(tt, null, dV, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: tt => "forceAlphaTest" in tt,
            get: tt => tt.forceAlphaTest,
            set: (tt, et) => {
              tt.forceAlphaTest = et
            }
          },
          metadata: et
        }, Hq, Xq), (0, vt.l)(tt, null, jV, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: tt => "alphaCutOff" in tt,
            get: tt => tt.alphaCutOff,
            set: (tt, et) => {
              tt.alphaCutOff = et
            }
          },
          metadata: et
        }, Qq, lq), (0, vt.l)(tt, null, HV, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: tt => "useSpecularOverAlpha" in tt,
            get: tt => tt.useSpecularOverAlpha,
            set: (tt, et) => {
              tt.useSpecularOverAlpha = et
            }
          },
          metadata: et
        }, Eq, fq), (0, vt.l)(tt, null, XV, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: tt => "useMicroSurfaceFromReflectivityMapAlpha" in tt,
            get: tt => tt.useMicroSurfaceFromReflectivityMapAlpha,
            set: (tt, et) => {
              tt.useMicroSurfaceFromReflectivityMapAlpha = et
            }
          },
          metadata: et
        }, wq, yq), (0, vt.l)(tt, null, QV, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: tt => "useRoughnessFromMetallicTextureAlpha" in tt,
            get: tt => tt.useRoughnessFromMetallicTextureAlpha,
            set: (tt, et) => {
              tt.useRoughnessFromMetallicTextureAlpha = et
            }
          },
          metadata: et
        }, Nq, aq), (0, vt.l)(tt, null, lV, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: tt => "useRoughnessFromMetallicTextureGreen" in tt,
            get: tt => tt.useRoughnessFromMetallicTextureGreen,
            set: (tt, et) => {
              tt.useRoughnessFromMetallicTextureGreen = et
            }
          },
          metadata: et
        }, Mq, bq), (0, vt.l)(tt, null, EV, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: tt => "useMetallnessFromMetallicTextureBlue" in tt,
            get: tt => tt.useMetallnessFromMetallicTextureBlue,
            set: (tt, et) => {
              tt.useMetallnessFromMetallicTextureBlue = et
            }
          },
          metadata: et
        }, Jq, Cq), (0, vt.l)(tt, null, fV, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: tt => "useAmbientOcclusionFromMetallicTextureRed" in tt,
            get: tt => tt.useAmbientOcclusionFromMetallicTextureRed,
            set: (tt, et) => {
              tt.useAmbientOcclusionFromMetallicTextureRed = et
            }
          },
          metadata: et
        }, uq, Kq), (0, vt.l)(tt, null, wV, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: tt => "useAmbientInGrayScale" in tt,
            get: tt => tt.useAmbientInGrayScale,
            set: (tt, et) => {
              tt.useAmbientInGrayScale = et
            }
          },
          metadata: et
        }, hq, vq), (0, vt.l)(tt, null, yV, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: tt => "useAutoMicroSurfaceFromReflectivityMap" in tt,
            get: tt => tt.useAutoMicroSurfaceFromReflectivityMap,
            set: (tt, et) => {
              tt.useAutoMicroSurfaceFromReflectivityMap = et
            }
          },
          metadata: et
        }, Wq, Sq), (0, vt.l)(tt, null, NV, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: tt => "usePhysicalLightFalloff" in tt,
            get: tt => tt.usePhysicalLightFalloff
          },
          metadata: et
        }, null, rV), (0, vt.l)(tt, null, aV, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: tt => "useGLTFLightFalloff" in tt,
            get: tt => tt.useGLTFLightFalloff
          },
          metadata: et
        }, null, rV), (0, vt.l)(tt, null, MV, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: tt => "useRadianceOverAlpha" in tt,
            get: tt => tt.useRadianceOverAlpha,
            set: (tt, et) => {
              tt.useRadianceOverAlpha = et
            }
          },
          metadata: et
        }, cq, Rq), (0, vt.l)(tt, null, bV, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: tt => "useObjectSpaceNormalMap" in tt,
            get: tt => tt.useObjectSpaceNormalMap,
            set: (tt, et) => {
              tt.useObjectSpaceNormalMap = et
            }
          },
          metadata: et
        }, Iq, Pq), (0, vt.l)(tt, null, JV, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: tt => "useParallax" in tt,
            get: tt => tt.useParallax,
            set: (tt, et) => {
              tt.useParallax = et
            }
          },
          metadata: et
        }, Zq, Lq), (0, vt.l)(tt, null, CV, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: tt => "useParallaxOcclusion" in tt,
            get: tt => tt.useParallaxOcclusion,
            set: (tt, et) => {
              tt.useParallaxOcclusion = et
            }
          },
          metadata: et
        }, Fq, kq), (0, vt.l)(tt, null, uV, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: tt => "parallaxScaleBias" in tt,
            get: tt => tt.parallaxScaleBias,
            set: (tt, et) => {
              tt.parallaxScaleBias = et
            }
          },
          metadata: et
        }, Gq, zq), (0, vt.l)(tt, null, KV, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: tt => "disableLighting" in tt,
            get: tt => tt.disableLighting,
            set: (tt, et) => {
              tt.disableLighting = et
            }
          },
          metadata: et
        }, oq, rq), (0, vt.l)(tt, null, hV, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: tt => "forceIrradianceInFragment" in tt,
            get: tt => tt.forceIrradianceInFragment,
            set: (tt, et) => {
              tt.forceIrradianceInFragment = et
            }
          },
          metadata: et
        }, Uq, Aq), (0, vt.l)(tt, null, vV, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: tt => "maxSimultaneousLights" in tt,
            get: tt => tt.maxSimultaneousLights,
            set: (tt, et) => {
              tt.maxSimultaneousLights = et
            }
          },
          metadata: et
        }, iq, Yq), (0, vt.l)(tt, null, WV, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: tt => "invertNormalMapX" in tt,
            get: tt => tt.invertNormalMapX,
            set: (tt, et) => {
              tt.invertNormalMapX = et
            }
          },
          metadata: et
        }, Bq, pq), (0, vt.l)(tt, null, SV, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: tt => "invertNormalMapY" in tt,
            get: tt => tt.invertNormalMapY,
            set: (tt, et) => {
              tt.invertNormalMapY = et
            }
          },
          metadata: et
        }, xq, Tq), (0, vt.l)(tt, null, cV, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: tt => "twoSidedLighting" in tt,
            get: tt => tt.twoSidedLighting,
            set: (tt, et) => {
              tt.twoSidedLighting = et
            }
          },
          metadata: et
        }, gq, sq), (0, vt.l)(tt, null, RV, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: tt => "useAlphaFresnel" in tt,
            get: tt => tt.useAlphaFresnel,
            set: (tt, et) => {
              tt.useAlphaFresnel = et
            }
          },
          metadata: et
        }, nq, tD), (0, vt.l)(tt, null, IV, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: tt => "useLinearAlphaFresnel" in tt,
            get: tt => tt.useLinearAlphaFresnel,
            set: (tt, et) => {
              tt.useLinearAlphaFresnel = et
            }
          },
          metadata: et
        }, eD, VD), (0, vt.l)(tt, null, PV, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: tt => "environmentBRDFTexture" in tt,
            get: tt => tt.environmentBRDFTexture,
            set: (tt, et) => {
              tt.environmentBRDFTexture = et
            }
          },
          metadata: et
        }, OD, qD), (0, vt.l)(tt, null, ZV, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: tt => "forceNormalForward" in tt,
            get: tt => tt.forceNormalForward,
            set: (tt, et) => {
              tt.forceNormalForward = et
            }
          },
          metadata: et
        }, DD, mD), (0, vt.l)(tt, null, LV, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: tt => "enableSpecularAntiAliasing" in tt,
            get: tt => tt.enableSpecularAntiAliasing,
            set: (tt, et) => {
              tt.enableSpecularAntiAliasing = et
            }
          },
          metadata: et
        }, dD, jD), (0, vt.l)(tt, null, FV, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: tt => "useHorizonOcclusion" in tt,
            get: tt => tt.useHorizonOcclusion,
            set: (tt, et) => {
              tt.useHorizonOcclusion = et
            }
          },
          metadata: et
        }, HD, XD), (0, vt.l)(tt, null, kV, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: tt => "useRadianceOcclusion" in tt,
            get: tt => tt.useRadianceOcclusion,
            set: (tt, et) => {
              tt.useRadianceOcclusion = et
            }
          },
          metadata: et
        }, QD, lD), (0, vt.l)(tt, null, GV, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: tt => "unlit" in tt,
            get: tt => tt.unlit,
            set: (tt, et) => {
              tt.unlit = et
            }
          },
          metadata: et
        }, ED, fD), (0, vt.l)(tt, null, zV, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: tt => "applyDecalMapAfterDetailMap" in tt,
            get: tt => tt.applyDecalMapAfterDetailMap,
            set: (tt, et) => {
              tt.applyDecalMapAfterDetailMap = et
            }
          },
          metadata: et
        }, wD, yD), et && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: et
        })
      })(), tt.PBRMATERIAL_OPAQUE = ue.PBRMATERIAL_OPAQUE, tt.PBRMATERIAL_ALPHATEST = ue.PBRMATERIAL_ALPHATEST, tt.PBRMATERIAL_ALPHABLEND = ue.PBRMATERIAL_ALPHABLEND, tt.PBRMATERIAL_ALPHATESTANDBLEND = ue.PBRMATERIAL_ALPHATESTANDBLEND, tt.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = ue.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, tt
    })();
    const kq = "KHR_materials_diffuse_transmission";

    function Gq(tt, et) {
      const Vt = et.subSurface;
      let Ot = null;
      return Vt.translucencyIntensityTexture ? Ot = Vt.translucencyIntensityTexture : Vt.thicknessTexture && Vt.useMaskFromThicknessTexture && (Ot = Vt.thicknessTexture), Ot && !Vt.useGltfStyleTextures ? (St.d.Warn(`${tt}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${et.name}`, 1), null) : Ot
    }
    class zq {
      constructor(tt) {
        this.name = kq, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = tt
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(tt, et, Vt) {
        const Ot = [];
        if (Vt instanceof Fq && this._isExtensionEnabled(Vt)) {
          const et = Gq(tt, Vt);
          return et && Ot.push(et), Vt.subSurface.translucencyColorTexture && Ot.push(Vt.subSurface.translucencyColorTexture), Ot
        }
        return Ot
      }
      _isExtensionEnabled(tt) {
        if (tt.unlit) return !1;
        const et = tt.subSurface;
        return !!et.isTranslucencyEnabled && (!tt.unlit && !et.useAlbedoToTintTranslucency && et.useGltfStyleTextures && 1 === et.volumeIndexOfRefraction && 0 === et.minimumThickness && 0 === et.maximumThickness)
      }
      postExportMaterialAsync(tt, et, Vt) {
        return new Promise((Ot => {
          if (Vt instanceof Fq && this._isExtensionEnabled(Vt)) {
            this._wasUsed = !0;
            const Ot = Vt.subSurface,
              qt = Gq(tt, Vt),
              Dt = 0 == Ot.translucencyIntensity ? void 0 : Ot.translucencyIntensity,
              mt = this._exporter._materialExporter.getTextureInfo(qt) ?? void 0,
              dt = !Ot.translucencyColor || Ot.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : Ot.translucencyColor.GOt(),
              jt = this._exporter._materialExporter.getTextureInfo(Ot.translucencyColorTexture) ?? void 0,
              Ht = {
                diffuseTransmissionFactor: Dt,
                diffuseTransmissionTexture: mt,
                diffuseTransmissionColorFactor: dt,
                diffuseTransmissionColorTexture: jt
              };
            (mt || jt) && this._exporter._materialNeedsUVsSet.add(Vt), et.extensions = et.extensions || {}, et.extensions[kq] = Ht
          }
          Ot(et)
        }))
      }
    }
    let oq = !1;

    function rq() {
      oq || (oq = !0, LO.RegisterExtension(kq, (tt => new zq(tt))))
    }
    rq();
    const Uq = "KHR_materials_dispersion";
    class Aq {
      constructor() {
        this.name = Uq, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(tt) {
        if (tt.unlit) return !1;
        const et = tt.subSurface;
        return !(!et.isRefractionEnabled && !et.isDispersionEnabled)
      }
      postExportMaterialAsync(tt, et, Vt) {
        return new Promise((tt => {
          if (Vt instanceof Fq && this._isExtensionEnabled(Vt)) {
            this._wasUsed = !0;
            const tt = {
              dispersion: Vt.subSurface.dispersion
            };
            et.extensions = et.extensions || {}, et.extensions[Uq] = tt
          }
          tt(et)
        }))
      }
    }
    let iq = !1;

    function Yq() {
      iq || (iq = !0, LO.RegisterExtension(Uq, (() => new Aq)))
    }
    Yq();
    const Bq = "KHR_materials_emissive_strength";
    class pq {
      constructor() {
        this.name = Bq, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(tt, et, Vt) {
        return await new Promise((tt => {
          if (!(Vt instanceof Fq)) return tt(et);
          const Ot = Vt.emissiveColor.scale(Vt.emissiveIntensity),
            qt = Math.max(...Ot.GOt());
          if (qt > 1) {
            et.emissiveFactor = Ot.scale(1 / qt).GOt(), this._wasUsed = !0;
            const tt = {
              emissiveStrength: qt
            };
            et.extensions || (et.extensions = {}), et.extensions[Bq] = tt
          } else et.emissiveFactor = Ot.GOt();
          return tt(et)
        }))
      }
    }
    let xq = !1;

    function Tq() {
      xq || (xq = !0, LO.RegisterExtension(Bq, (() => new pq)))
    }
    Tq();
    const gq = "KHR_materials_ior";
    class sq {
      constructor() {
        this.name = gq, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(tt) {
        return !tt.unlit && (tt instanceof ne ? 1.5 != tt.specularIor : tt instanceof Fq && (void 0 != tt.indexOfRefraction && 1.5 != tt.indexOfRefraction))
      }
      postExportMaterialAsync(tt, et, Vt) {
        return new Promise((tt => {
          if (Vt instanceof Fq && this._isExtensionEnabled(Vt)) {
            this._wasUsed = !0;
            const tt = {
              ior: Vt.indexOfRefraction
            };
            et.extensions = et.extensions || {}, et.extensions[gq] = tt
          } else if (Vt instanceof ne && this._isExtensionEnabled(Vt)) {
            this._wasUsed = !0;
            const tt = {
              ior: Vt.specularIor
            };
            et.extensions = et.extensions || {}, et.extensions[gq] = tt
          }
          tt(et)
        }))
      }
    }
    let nq = !1;

    function tD() {
      nq || (nq = !0, LO.RegisterExtension(gq, (() => new sq)))
    }
    tD();
    const eD = "KHR_materials_iridescence";
    class VD {
      constructor(tt) {
        this.name = eD, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = tt
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(tt, et, Vt) {
        const Ot = [];
        if (Vt instanceof ue) {
          if (Vt.iridescence.isEnabled) return Vt.iridescence.texture && Ot.push(Vt.iridescence.texture), Vt.iridescence.thicknessTexture && Vt.iridescence.thicknessTexture !== Vt.iridescence.texture && Ot.push(Vt.iridescence.thicknessTexture), Ot
        } else if (Vt instanceof ne && Vt.thinFilmWeight > 0) return Vt.thinFilmWeightTexture && Ot.push(Vt.thinFilmWeightTexture), Vt.thinFilmThicknessTexture && Vt.thinFilmThicknessTexture !== Vt.thinFilmWeightTexture && Ot.push(Vt.thinFilmThicknessTexture), Ot;
        return []
      }
      postExportMaterialAsync(tt, et, Vt) {
        return new Promise((tt => {
          if (Vt instanceof ue) {
            if (!Vt.iridescence.isEnabled) return void tt(et);
            this._wasUsed = !0, et.extensions = et.extensions || {};
            const Ot = this._exporter._materialExporter.getTextureInfo(Vt.iridescence.texture),
              qt = this._exporter._materialExporter.getTextureInfo(Vt.iridescence.thicknessTexture),
              Dt = {
                iridescenceFactor: Vt.iridescence.intensity,
                iridescenceIor: Vt.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: Vt.iridescence.minimumThickness,
                iridescenceThicknessMaximum: Vt.iridescence.maximumThickness,
                iridescenceTexture: Ot ?? void 0,
                iridescenceThicknessTexture: qt ?? void 0
              };
            null === Dt.iridescenceTexture && null === Dt.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(Vt), et.extensions[eD] = Dt
          } else if (Vt instanceof ne) {
            if (Vt.thinFilmWeight <= 0) return void tt(et);
            this._wasUsed = !0, et.extensions = et.extensions || {};
            const Ot = this._exporter._materialExporter.getTextureInfo(Vt.thinFilmWeightTexture),
              qt = this._exporter._materialExporter.getTextureInfo(Vt.thinFilmThicknessTexture),
              Dt = {
                iridescenceFactor: Vt.thinFilmWeight,
                iridescenceIor: Vt.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * Vt.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * Vt.thinFilmThickness,
                iridescenceTexture: Ot ?? void 0,
                iridescenceThicknessTexture: qt ?? void 0
              };
            null === Dt.iridescenceTexture && null === Dt.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(Vt), et.extensions[eD] = Dt
          }
          tt(et)
        }))
      }
    }
    let OD = !1;

    function qD() {
      OD || (OD = !0, LO.RegisterExtension(eD, (tt => new VD(tt))))
    }
    qD();
    const DD = "KHR_materials_sheen";
    class mD {
      constructor(tt) {
        this.name = DD, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = tt
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(tt, et, Vt) {
        return Vt instanceof Fq && Vt.sheen.isEnabled && Vt.sheen.texture ? [Vt.sheen.texture] : []
      }
      async postExportMaterialAsync(tt, et, Vt) {
        return await new Promise((tt => {
          if (Vt instanceof Fq) {
            if (!Vt.sheen.isEnabled) return void tt(et);
            this._wasUsed = !0, null == et.extensions && (et.extensions = {});
            const Ot = {
              sheenColorFactor: Vt.sheen.color.GOt(),
              sheenRoughnessFactor: Vt.sheen.roughness ?? 0
            };
            null === Ot.sheenColorTexture && null === Ot.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Vt), Vt.sheen.texture && (Ot.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(Vt.sheen.texture) ?? void 0), Vt.sheen.textureRoughness && !Vt.sheen.useRoughnessFromMainTexture ? Ot.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Vt.sheen.textureRoughness) ?? void 0 : Vt.sheen.texture && Vt.sheen.useRoughnessFromMainTexture && (Ot.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Vt.sheen.texture) ?? void 0), et.extensions[DD] = Ot
          }
          tt(et)
        }))
      }
    }
    let dD = !1;

    function jD() {
      dD || (dD = !0, LO.RegisterExtension(DD, (tt => new mD(tt))))
    }
    jD();
    const HD = "KHR_materials_fuzz";

    function XD(tt, et) {
      const Vt = new Rt.f(et.name, et.vI());
      return Vt._texture = tt, Vt.coordinatesIndex = et.coordinatesIndex, et instanceof Rt.f && (Vt.uOffset = et.uOffset, Vt.vOffset = et.vOffset, Vt.uScale = et.uScale, Vt.vScale = et.vScale, Vt.wAng = et.wAng), Vt.wrapU = et.wrapU, Vt.wrapV = et.wrapV, Vt
    }
    class QD {
      constructor(tt) {
        this.name = HD, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = tt
      }
      dispose() {
        for (const tt of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[tt].dispose()
        }
        this._mergedTexturesMap = {};
        for (const tt of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[tt].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(tt, et, Vt) {
        if (Vt instanceof ne) {
          const tt = [];
          if (Vt.fuzzWeight > 0) {
            Vt.fuzzWeightTexture && tt.push(Vt.fuzzWeightTexture);
            let et = !1;
            if (Vt.fuzzRoughnessTexture && (Vt._useFuzzRoughnessFromTextureAlpha ? tt.push(Vt.fuzzRoughnessTexture) : et = !0), Vt.fuzzColorTexture && !et && tt.push(Vt.fuzzColorTexture), et) {
              const et = function(tt) {
                const et = tt.fuzzColorTexture,
                  Vt = et && et.getInternalTexture() ? et.getInternalTexture().uniqueId : "NoFuzzColor",
                  Ot = tt.fuzzRoughnessTexture;
                return `FuzzColor_${Vt}_FuzzRoughness_${Ot&&Ot.getInternalTexture()?Ot.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(Vt);
              if (!this._cachedInternalTexturesMap[et]) {
                const tt = await async function(tt) {
                  const et = tt.vI(),
                    Vt = tt.fuzzColorTexture,
                    Ot = tt.fuzzRoughnessTexture;
                  return Vt || Ot ? (await dV("FuzzTexture", XV(Vt ? jV(Vt, 0) : HV(1), Vt ? jV(Vt, 1) : HV(1), Vt ? jV(Vt, 2) : HV(1), Ot ? jV(Ot, tt._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : HV(1)), et)).getInternalTexture() : null
                }(Vt);
                tt && (this._cachedInternalTexturesMap[et] = tt)
              }
              this._cachedInternalTexturesMap[et] && (Vt.fuzzColorTexture && (this._mergedTexturesMap[Vt.fuzzColorTexture.uniqueId] = XD(this._cachedInternalTexturesMap[et], Vt.fuzzColorTexture), tt.push(this._mergedTexturesMap[Vt.fuzzColorTexture.uniqueId])), Vt.fuzzRoughnessTexture && (this._mergedTexturesMap[Vt.fuzzRoughnessTexture.uniqueId] = XD(this._cachedInternalTexturesMap[et], Vt.fuzzRoughnessTexture), tt.push(this._mergedTexturesMap[Vt.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return tt
        }
        return []
      }
      async postExportMaterialAsync(tt, et, Vt) {
        return await new Promise((tt => {
          if (Vt instanceof ne) {
            if (0 == Vt.fuzzWeight) return void tt(et);
            this._wasUsed = !0, null == et.extensions && (et.extensions = {});
            const Ot = {
              fuzzFactor: Vt.fuzzWeight,
              fuzzColorFactor: Vt.fuzzColor.GOt(),
              fuzzRoughnessFactor: Vt.fuzzRoughness
            };
            let qt, Dt;
            Vt.fuzzWeightTexture && (Ot.fuzzTexture = this._exporter._materialExporter.getTextureInfo(Vt.fuzzWeightTexture) ?? void 0), Vt.fuzzColorTexture && (qt = this._mergedTexturesMap[Vt.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[Vt.fuzzColorTexture.uniqueId] : Vt.fuzzColorTexture, Ot.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(qt) ?? void 0), Vt.fuzzRoughnessTexture && (Dt = this._mergedTexturesMap[Vt.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[Vt.fuzzRoughnessTexture.uniqueId] : Vt.fuzzRoughnessTexture, Ot.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Dt) ?? void 0), null === Ot.fuzzColorTexture && null === Ot.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Vt), et.extensions[HD] = Ot
          }
          tt(et)
        }))
      }
    }
    let lD = !1;

    function ED() {
      lD || (lD = !0, LO.RegisterExtension(HD, (tt => new QD(tt))))
    }
    ED();
    const fD = "KHR_materials_specular";
    class wD {
      constructor(tt) {
        this.name = fD, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = tt
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(tt, et, Vt) {
        const Ot = [];
        return Vt instanceof Fq && this._isExtensionEnabled(Vt) ? (Vt.metallicReflectanceTexture && Ot.push(Vt.metallicReflectanceTexture), Vt.reflectanceTexture && Ot.push(Vt.reflectanceTexture), Ot) : Ot
      }
      _isExtensionEnabled(tt) {
        return !tt.unlit && (void 0 != tt.metallicF0Factor && 1 != tt.metallicF0Factor || void 0 != tt.metallicReflectanceColor && !tt.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(tt))
      }
      _hasTexturesExtension(tt) {
        return null != tt.metallicReflectanceTexture || null != tt.reflectanceTexture
      }
      postExportMaterialAsync(tt, et, Vt) {
        return new Promise((tt => {
          var Ot;
          if (Vt instanceof Fq && this._isExtensionEnabled(Vt)) {
            this._wasUsed = !0, et.extensions = et.extensions || {};
            const tt = this._exporter._materialExporter.getTextureInfo(Vt.metallicReflectanceTexture) ?? void 0,
              Ot = this._exporter._materialExporter.getTextureInfo(Vt.reflectanceTexture) ?? void 0,
              qt = {
                specularFactor: 1 == Vt.metallicF0Factor ? void 0 : Vt.metallicF0Factor,
                specularTexture: tt,
                specularColorFactor: Vt.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : Vt.metallicReflectanceColor.GOt(),
                specularColorTexture: Ot
              };
            this._hasTexturesExtension(Vt) && this._exporter._materialNeedsUVsSet.add(Vt), et.extensions[fD] = qt
          } else if (Vt instanceof ne) {
            et.extensions = et.extensions || {};
            const qt = this._exporter._materialExporter.getTextureInfo(Vt.specularWeightTexture) ?? void 0,
              Dt = this._exporter._materialExporter.getTextureInfo(Vt.specularColorTexture) ?? void 0,
              mt = 1 == Vt.specularWeight ? void 0 : Vt.specularWeight,
              dt = Vt.specularColor.equalsFloats(1, 1, 1) ? void 0 : Vt.specularColor.GOt();
            if (!Dt && !qt && void 0 === mt && void 0 === dt) return tt(et);
            this._wasUsed = !0;
            const jt = {
                specularEdgeColorEnabled: !0
              },
              Ht = {
                specularFactor: mt,
                specularTexture: qt,
                specularColorFactor: dt,
                specularColorTexture: Dt,
                extensions: {}
              };
            Ht.extensions.EXT_materials_specular_edge_color = jt, (Ot = this._exporter._glTF).extensionsUsed || (Ot.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (qt || Dt) && this._exporter._materialNeedsUVsSet.add(Vt), et.extensions[fD] = Ht
          }
          tt(et)
        }))
      }
    }
    let yD = !1;

    function ND() {
      yD || (yD = !0, LO.RegisterExtension(fD, (tt => new wD(tt))))
    }
    ND();
    const aD = "KHR_materials_transmission";
    class MD {
      constructor(tt) {
        this.name = aD, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = tt
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(tt, et, Vt) {
        const Ot = [];
        if (Vt instanceof Fq) {
          if (this._isExtensionEnabled(Vt)) return Vt.subSurface.refractionIntensityTexture && Vt.subSurface.useGltfStyleTextures && Ot.push(Vt.subSurface.refractionIntensityTexture), Ot
        } else Vt instanceof ne && (Vt.transmissionWeight > 0 && Vt.transmissionWeightTexture && (Ot.push(Vt.transmissionWeightTexture), Vt.transmissionColorTexture && Ot.push(Vt.transmissionColorTexture)), Vt.subsurfaceWeight > 0 && Vt.subsurfaceWeightTexture && Ot.push(Vt.subsurfaceWeightTexture));
        return Ot
      }
      _isExtensionEnabled(tt) {
        if (tt instanceof ne && !tt.unlit) return tt.transmissionWeight > 0 || tt.subsurfaceWeight > 0;
        if (tt instanceof Fq && !tt.unlit) {
          const et = tt.subSurface;
          return et.isRefractionEnabled && void 0 != et.refractionIntensity && 0 != et.refractionIntensity || null != et.refractionIntensityTexture && et.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(tt, et, Vt) {
        if (!this._isExtensionEnabled(Vt)) return et;
        if (Vt instanceof Fq) {
          this._wasUsed = !0;
          const Ot = Vt.subSurface,
            qt = {
              transmissionFactor: 0 === Ot.refractionIntensity ? void 0 : Ot.refractionIntensity
            };
          if (Ot.refractionIntensityTexture)
            if (Ot.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(Vt);
              const tt = this._exporter._materialExporter.getTextureInfo(Ot.refractionIntensityTexture);
              tt && (qt.transmissionTexture = tt)
            } else St.d.Warn(`${tt}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          et.extensions || (et.extensions = {}), et.extensions[aD] = qt
        } else if (Vt instanceof ne) {
          this._wasUsed = !0;
          const tt = {
            transmissionFactor: (1 - Vt.transmissionWeight) * Vt.subsurfaceWeight + Vt.transmissionWeight
          };
          if (Vt.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(Vt);
            const et = this._exporter._materialExporter.getTextureInfo(Vt.transmissionWeightTexture);
            et && (tt.transmissionTexture = et)
          } else if (Vt.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(Vt);
            const et = this._exporter._materialExporter.getTextureInfo(Vt.subsurfaceWeightTexture);
            et && (tt.transmissionTexture = et)
          }
          if (0 == Vt.transmissionDepth && (!Vt.transmissionColor.equals(Bt.b.White()) || Vt.transmissionColorTexture) && et.pbrMetallicRoughness && (et.pbrMetallicRoughness.baseColorFactor || (et.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), et.pbrMetallicRoughness.baseColorFactor[0] *= Vt.transmissionColor.r, et.pbrMetallicRoughness.baseColorFactor[1] *= Vt.transmissionColor.g, et.pbrMetallicRoughness.baseColorFactor[2] *= Vt.transmissionColor.b, Vt.transmissionColorTexture && !et.pbrMetallicRoughness.baseColorTexture)) {
            const tt = this._exporter._materialExporter.getTextureInfo(Vt.transmissionColorTexture);
            tt && (et.pbrMetallicRoughness.baseColorTexture = tt, this._exporter._materialNeedsUVsSet.add(Vt))
          }
          et.extensions || (et.extensions = {}), et.extensions[aD] = tt
        }
        return et
      }
    }
    let bD = !1;

    function JD() {
      bD || (bD = !0, LO.RegisterExtension(aD, (tt => new MD(tt))))
    }
    JD();
    var CD = Vt(40456);
    const uD = "KHR_materials_unlit";
    class KD {
      constructor() {
        this.name = uD, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(tt, et, Vt) {
        return new Promise((tt => {
          let Ot = !1;
          Vt instanceof Fq ? Ot = Vt.unlit : Vt instanceof CD.d && (Ot = Vt.disableLighting), Ot && (this._wasUsed = !0, null == et.extensions && (et.extensions = {}), et.extensions[uD] = {}), tt(et)
        }))
      }
    }
    let hD = !1;

    function vD() {
      hD || (hD = !0, LO.RegisterExtension(uD, (() => new KD)))
    }
    vD();
    const WD = "KHR_materials_volume";
    class SD {
      constructor(tt) {
        this.name = WD, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = tt
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(tt, et, Vt) {
        const Ot = [];
        if (Vt instanceof Fq) {
          if (this._isExtensionEnabled(Vt)) return Vt.subSurface.thicknessTexture && Ot.push(Vt.subSurface.thicknessTexture), Ot
        } else Vt instanceof ne && (Vt.transmissionWeight > 0 || Vt.subsurfaceWeight > 0) && Vt.geometryThicknessTexture && Ot.push(Vt.geometryThicknessTexture);
        return Ot
      }
      _isExtensionEnabled(tt) {
        if (tt.unlit) return !1;
        const et = tt.subSurface;
        return !(!et.isRefractionEnabled && !et.isTranslucencyEnabled) && (void 0 != et.maximumThickness && 0 != et.maximumThickness || void 0 != et.tintColorAtDistance && et.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != et.tintColor && et.tintColor != Bt.b.White() || this._hasTexturesExtension(tt))
      }
      _hasTexturesExtension(tt) {
        return null != tt.subSurface.thicknessTexture
      }
      postExportMaterialAsync(tt, et, Vt) {
        return new Promise((tt => {
          if (Vt instanceof Fq && this._isExtensionEnabled(Vt)) {
            this._wasUsed = !0;
            const tt = Vt.subSurface,
              Ot = {
                thicknessFactor: 0 == tt.maximumThickness ? void 0 : tt.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(tt.thicknessTexture) ?? void 0,
                attenuationDistance: tt.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : tt.tintColorAtDistance,
                attenuationColor: tt.tintColor.equalsFloats(1, 1, 1) ? void 0 : tt.tintColor.GOt()
              };
            this._hasTexturesExtension(Vt) && this._exporter._materialNeedsUVsSet.add(Vt), et.extensions = et.extensions || {}, et.extensions[WD] = Ot
          } else if (Vt instanceof ne) {
            const tt = Vt.transmissionWeight > 0 && !Vt.geometryThinWalled,
              Ot = Vt.subsurfaceWeight > 0 && !Vt.geometryThinWalled;
            if (tt || Ot) {
              this._wasUsed = !0;
              const qt = Vt.geometryThickness,
                Dt = this._exporter._materialExporter.getTextureInfo(Vt.geometryThicknessTexture) ?? void 0;
              let mt;
              Dt && this._exporter._materialNeedsUVsSet.add(Vt);
              const dt = Bt.b.White().GOt();
              if (tt && Vt.transmissionDepth > 0) {
                const tt = 1 / Vt.transmissionDepth;
                let et = new zt.n(-Math.log(Vt.transmissionColor.r) * tt, -Math.log(Vt.transmissionColor.g) * tt, -Math.log(Vt.transmissionColor.b) * tt);
                const Ot = new zt.n(Vt.transmissionScatter.r * tt, Vt.transmissionScatter.g * tt, Vt.transmissionScatter.b * tt),
                  qt = et.subtract(Ot),
                  Dt = Math.min(qt.x, qt.y, qt.z);
                Dt < 0 && (qt.x = qt.x - Dt, qt.y = qt.y - Dt, qt.z = qt.z - Dt), et = qt.add(Ot);
                mt = 1 / Math.max(et.x, et.y, et.z), dt[0] = Math.exp(-et.x * mt), dt[1] = Math.exp(-et.y * mt), dt[2] = Math.exp(-et.z * mt)
              } else mt = Number.MAX_VALUE, dt[0] = 1, dt[1] = 1, dt[2] = 1;
              let jt = 1;
              const Ht = Bt.b.White().GOt();
              if (Ot) {
                const tt = Vt.subsurfaceRadius,
                  et = Vt.subsurfaceRadiusScale,
                  Ot = new zt.n(et.r, et.g, et.b).multiplyByFloats(tt, tt, tt),
                  qt = new zt.n(1 / Math.max(Ot.x, 1e-6), 1 / Math.max(Ot.y, 1e-6), 1 / Math.max(Ot.z, 1e-6));
                jt = 1 / Math.max(qt.x, qt.y, qt.z), Ht[0] = Math.exp(-qt.x * jt), Ht[1] = Math.exp(-qt.y * jt), Ht[2] = Math.exp(-qt.z * jt)
              }
              const Xt = (1 - Vt.transmissionWeight) * Vt.subsurfaceWeight,
                Qt = Xt + Vt.transmissionWeight,
                lt = 1 / Math.max(Qt, 1e-6),
                Et = Vt.transmissionWeight * lt,
                ft = Xt * lt,
                wt = dt.map(((tt, et) => tt * Et + Ht[et] * ft)),
                yt = {
                  thicknessFactor: qt,
                  thicknessTexture: Dt,
                  attenuationDistance: mt * Et + jt * ft,
                  attenuationColor: wt
                };
              et.extensions = et.extensions || {}, et.extensions[WD] = yt
            }
          }
          tt(et)
        }))
      }
    }
    let cD = !1;

    function RD() {
      cD || (cD = !0, LO.RegisterExtension(WD, (tt => new SD(tt))))
    }
    RD();
    const ID = "KHR_materials_volume_scatter";
    class PD {
      constructor(tt) {
        this.name = ID, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = tt
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(tt, et, Vt) {
        const Ot = [];
        return Vt instanceof ne && (Vt.transmissionWeight > 0 && Vt.transmissionScatterTexture && Ot.push(Vt.transmissionScatterTexture), Vt.subsurfaceWeight > 0 && Vt.subsurfaceColorTexture && Ot.push(Vt.subsurfaceColorTexture)), Ot
      }
      _isExtensionEnabled(tt) {
        if (tt.unlit) return !1;
        const et = tt.transmissionWeight > 0 && !tt.geometryThinWalled && tt.transmissionDepth > 0 && !tt.transmissionScatter.equals(Bt.b.Black()),
          Vt = tt.subsurfaceWeight > 0 && !tt.geometryThinWalled;
        return !(!et && !Vt)
      }
      postExportMaterialAsync(tt, et, Vt) {
        return new Promise((tt => {
          if (Vt instanceof ne && this._isExtensionEnabled(Vt)) {
            this._wasUsed = !0;
            let tt = zt.n.Zero(),
              Ot = 0;
            if (Vt.transmissionWeight > 0) {
              tt = function(tt) {
                const et = new zt.n(Math.sqrt(1 - tt.x), Math.sqrt(1 - tt.y), Math.sqrt(1 - tt.z)),
                  Vt = new zt.n(1, 1, 1),
                  Ot = Vt.subtract(et),
                  qt = Vt.subtract(new zt.n(.139, .139, .139).multiplyInPlace(et)),
                  Dt = Vt.add(new zt.n(1.17, 1.17, 1.17).multiplyInPlace(et));
                return Ot.multiplyInPlace(qt).divideInPlace(Dt)
              }(new zt.n(Vt.transmissionScatter.r, Vt.transmissionScatter.g, Vt.transmissionScatter.b)), Ot = Vt.transmissionScatterAnisotropy
            }
            const qt = zt.n.Zero();
            let Dt = 0;
            Vt.subsurfaceWeight > 0 && (qt.set(Vt.subsurfaceColor.r, Vt.subsurfaceColor.g, Vt.subsurfaceColor.b), Dt = Vt.subsurfaceScatterAnisotropy);
            const mt = (1 - Vt.transmissionWeight) * Vt.subsurfaceWeight,
              dt = mt + Vt.transmissionWeight,
              jt = 1 / Math.max(dt, 1e-6),
              Ht = Vt.transmissionWeight * jt,
              Xt = mt * jt,
              Qt = {
                multiscatterColorFactor: tt.multiplyByFloats(Ht, Ht, Ht).addInPlace(qt.multiplyByFloats(Xt, Xt, Xt)).GOt(),
                scatterAnisotropy: Ot * Ht + Dt * Xt
              };
            if (Vt.subsurfaceWeight > 0 && Vt.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(Vt);
              const tt = this._exporter._materialExporter.getTextureInfo(Vt.subsurfaceColorTexture);
              tt && (Qt.multiscatterColorTexture = tt)
            } else if (Vt.transmissionWeight > 0 && Vt.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(Vt);
              const tt = this._exporter._materialExporter.getTextureInfo(Vt.transmissionScatterTexture);
              tt && (Qt.multiscatterColorTexture = tt)
            }
            et.extensions = et.extensions || {}, et.extensions[ID] = Qt
          }
          tt(et)
        }))
      }
    }
    let ZD = !1;

    function LD() {
      ZD || (ZD = !0, LO.RegisterExtension(ID, (tt => new PD(tt)), 101))
    }
    LD();
    const FD = "KHR_materials_diffuse_roughness";
    class kD {
      constructor(tt) {
        this.name = FD, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = tt
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(tt, et, Vt) {
        const Ot = [];
        if (Vt instanceof ue) {
          if (Vt._baseDiffuseRoughness) return Vt._baseDiffuseRoughnessTexture && Ot.push(Vt._baseDiffuseRoughnessTexture), Ot
        } else if (Vt instanceof ne && Vt.baseDiffuseRoughness) return Vt.baseDiffuseRoughnessTexture && Ot.push(Vt.baseDiffuseRoughnessTexture), Ot;
        return []
      }
      postExportMaterialAsync(tt, et, Vt) {
        return new Promise((tt => {
          let Ot = null,
            qt = null;
          if (Vt instanceof ue ? (Ot = Vt._baseDiffuseRoughness, qt = Vt._baseDiffuseRoughnessTexture) : Vt instanceof ne && (Ot = Vt.baseDiffuseRoughness, qt = Vt.baseDiffuseRoughnessTexture), !Ot) return void tt(et);
          this._wasUsed = !0, et.extensions = et.extensions || {};
          const Dt = {
            diffuseRoughnessFactor: Ot,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(qt) ?? void 0
          };
          null !== Dt.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(Vt), et.extensions[FD] = Dt, tt(et)
        }))
      }
    }
    let GD = !1;

    function zD() {
      GD || (GD = !0, LO.RegisterExtension(FD, (tt => new kD(tt))))
    }
    zD();
    const oD = "KHR_materials_openpbr";
    class rD {
      constructor() {
        this.name = oD, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(tt, et, Vt) {
        return new Promise((tt => {
          Vt instanceof ne && (this._wasUsed = !0, et.extensions = et.extensions || {}, et.extensions[oD] = {}), tt(et)
        }))
      }
    }
    let UD = !1;

    function AD() {
      UD || (UD = !0, LO.RegisterExtension(oD, (() => new rD)))
    }
    AD();
    const iD = "KHR_texture_transform";
    class YD {
      constructor() {
        this.name = iD, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(tt, et, Vt) {
        if (Vt.vI() || he.l.Warn(`${tt}: "scene" is not defined for Babylon texture ${Vt.name}!`), (0 !== Vt.uAng || 0 !== Vt.vAng) && (he.l.Warn(`${tt}: Texture ${Vt.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== Vt.uRotationCenter || 0 !== Vt.vRotationCenter)) return;
        const Ot = {};
        let qt = !1;
        if (0 === Vt.uOffset && 0 === Vt.vOffset || (Ot.offset = [Vt.uOffset, Vt.vOffset], qt = !0), 1 === Vt.uScale && 1 === Vt.vScale || (Ot.scale = [Vt.uScale, Vt.vScale], qt = !0), 0 !== Vt.wAng) {
          if (0 !== Vt.uRotationCenter || 0 !== Vt.vRotationCenter) {
            if (Vt.homogeneousRotationInUVTransform && Vt.uScale !== Vt.vScale) return void he.l.Warn(`${tt}: Texture ${Vt.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${iD}.`);
            he.l.Warn(`${tt}: Texture ${Vt.name} with non-origin rotation center will be exported using an adjusted offset with ${iD}.`), Ot.offset = function(tt) {
              const {
                uOffset: et,
                vOffset: Vt,
                uRotationCenter: Ot,
                vRotationCenter: qt,
                uScale: Dt,
                vScale: mt,
                wAng: dt
              } = tt, jt = Math.cos(dt), Ht = Math.sin(dt), Xt = Ot * Dt, Qt = qt * mt;
              return [et + (Xt * (1 - jt) + Qt * Ht), Vt + (Qt * (1 - jt) - Xt * Ht)]
            }(Vt)
          }
          Ot.rotation = -Vt.wAng, qt = !0
        }
        0 !== Vt.coordinatesIndex && (Ot.texCoord = Vt.coordinatesIndex, qt = !0), qt && (this._wasUsed = !0, et.extensions || (et.extensions = {}), et.extensions[iD] = Ot)
      }
    }
    let BD = !1;

    function pD() {
      BD || (BD = !0, LO.RegisterExtension(iD, (() => new YD)))
    }
    pD();
    var xD = Vt(40249);
    const TD = "KHR_texture_basisu";
    class gD {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(tt) {
        this.name = TD, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = tt
      }
      dispose() {}
      postExportTexture(tt, et) {
        const Vt = this._exporter._textures[et.index],
          Ot = Vt.source;
        if (void 0 === Ot) return;
        const qt = this._exporter._images[Ot];
        "image/ktx2" === (qt.mimeType || (0, xD.j)(qt.uri)) && (Vt.source = void 0, Vt.extensions || (Vt.extensions = {}), Vt.extensions[TD] = {
          source: Ot
        }, this._wasUsed = !0)
      }
    }
    let sD = !1;

    function nD() {
      sD || (sD = !0, LO.RegisterExtension(TD, (tt => new gD(tt))))
    }
    nD();
    const tm = "EXT_texture_webp";
    class em {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(tt) {
        this.name = tm, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = tt
      }
      dispose() {}
      postExportTexture(tt, et) {
        const Vt = this._exporter._textures[et.index],
          Ot = Vt.source;
        if (void 0 === Ot) return;
        const qt = this._exporter._images[Ot];
        "image/webp" === (qt.mimeType || (0, xD.j)(qt.uri)) && (Vt.source = void 0, Vt.extensions || (Vt.extensions = {}), Vt.extensions[tm] = {
          source: Ot
        }, this._wasUsed = !0)
      }
    }
    let Vm = !1;

    function Om() {
      Vm || (Vm = !0, LO.RegisterExtension(tm, (tt => new em(tt))))
    }
    Om();
    const qm = "EXT_texture_avif";
    class Dm {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(tt) {
        this.name = qm, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = tt
      }
      dispose() {}
      postExportTexture(tt, et) {
        const Vt = this._exporter._textures[et.index],
          Ot = Vt.source;
        if (void 0 === Ot) return;
        const qt = this._exporter._images[Ot];
        "image/avif" === (qt.mimeType || (0, xD.j)(qt.uri)) && (Vt.source = void 0, Vt.extensions || (Vt.extensions = {}), Vt.extensions[qm] = {
          source: Ot
        }, this._wasUsed = !0)
      }
    }
    let mm = !1;

    function dm() {
      mm || (mm = !0, LO.RegisterExtension(qm, (tt => new Dm(tt))))
    }
    dm();
    class jm {
      static CreateSTL(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          qt = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Dt = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          mt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          dt = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          jt = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const Ht = function(tt, et, Vt) {
            const qt = [3 * tt[Vt], 3 * tt[Vt + 1], 3 * tt[Vt + 2]],
              Dt = [new Ot.uf(et[qt[0]], et[qt[0] + 2], et[qt[0] + 1]), new Ot.uf(et[qt[1]], et[qt[1] + 2], et[qt[1] + 1]), new Ot.uf(et[qt[2]], et[qt[2] + 2], et[qt[2] + 1])],
              mt = Dt[0].subtract(Dt[1]),
              dt = Dt[2].subtract(Dt[1]);
            return {
              v: Dt,
              n: Ot.uf.Cross(dt, mt).normalize()
            }
          },
          Qt = function(tt, et, Vt, Ot) {
            return et = lt(tt, et, Vt.x, Ot), et = lt(tt, et, Vt.y, Ot), lt(tt, et, Vt.z, Ot)
          },
          lt = function(tt, et, Vt, Ot) {
            return tt.setFloat32(et, Vt, Ot), et + 4
          },
          ft = function(tt) {
            if (dt) {
              let et = tt;
              tt instanceof Et.e && (et = tt.Rqt);
              const Vt = et.getVerticesData(Xt.e.PositionKind, !0, !0);
              if (!Vt) return [];
              const qt = Ot.uf.Zero();
              let Dt;
              for (Dt = 0; Dt < Vt.length; Dt += 3) Ot.uf.TransformCoordinatesFromFloatsToRef(Vt[Dt], Vt[Dt + 1], Vt[Dt + 2], tt.computeWorldMatrix(!0), qt).toArray(Vt, Dt);
              return Vt
            }
            return tt.getVerticesData(Xt.e.PositionKind) || []
          };
        dt && (mt = !0);
        let wt = "",
          yt = 0,
          Nt = 0;
        if (qt) {
          for (let Vt = 0; Vt < tt.length; Vt++) {
            const et = tt[Vt].zOt();
            yt += et ? et.length / 3 : 0
          }
          const et = new ArrayBuffer(84 + 50 * yt);
          wt = new DataView(et), Nt += 80, wt.setUint32(Nt, yt, Dt), Nt += 4
        } else jt || (wt = "solid stlmesh\r\n");
        for (let Ot = 0; Ot < tt.length; Ot++) {
          const et = tt[Ot];
          !qt && jt && (wt += "solid " + et.name + "\r\n"), !mt && et instanceof XO.b && et.bakeCurrentTransformIntoVertices();
          const Vt = ft(et),
            dt = et.zOt() || [];
          for (let tt = 0; tt < dt.length; tt += 3) {
            const et = Ht(dt, Vt, tt);
            qt ? (Nt = Qt(wt, Nt, et.n, Dt), Nt = Qt(wt, Nt, et.v[0], Dt), Nt = Qt(wt, Nt, et.v[1], Dt), Nt = Qt(wt, Nt, et.v[2], Dt), Nt += 2) : (wt += "\tfacet normal " + et.n.x + " " + et.n.y + " " + et.n.z + "\r\n", wt += "\t\touter loop\r\n", wt += "\t\t\tvertex " + et.v[0].x + " " + et.v[0].y + " " + et.v[0].z + "\r\n", wt += "\t\t\tvertex " + et.v[1].x + " " + et.v[1].y + " " + et.v[1].z + "\r\n", wt += "\t\t\tvertex " + et.v[2].x + " " + et.v[2].y + " " + et.v[2].z + "\r\n", wt += "\t\tendloop\r\n", wt += "\tendfacet\r\n")
          }!qt && jt && (wt += "endsolid " + name + "\r\n")
        }
        if (qt || jt || (wt += "endsolid stlmesh"), et) {
          const tt = document.createElement("a"),
            et = new Blob([wt], {
              type: "application/octet-stream"
            });
          tt.href = window.URL.createObjectURL(et), tt.download = Vt + ".stl", tt.click()
        }
        return wt
      }
    }

    function Hm(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const qt = [];
      for (let Dt = 0; Dt < tt.length / Vt; Dt++) {
        const mt = tt[Dt * Vt] * (Ot ? -1 : 1),
          dt = tt[Dt * Vt + 1],
          jt = tt[Dt * Vt + 2];
        qt.push(`(${mt.toPrecision(et.precision)}, ${dt.toPrecision(et.precision)}, ${jt.toPrecision(et.precision)})`)
      }
      return qt.join(", ")
    }

    function Xm(tt, et) {
      const Vt = [];
      for (let Ot = 0; Ot < tt.length / 2; Ot++) {
        const qt = tt[2 * Ot],
          Dt = tt[2 * Ot + 1];
        Vt.push(`(${qt.toPrecision(et.precision)}, ${(1-Dt).toPrecision(et.precision)})`)
      }
      return Vt.join(", ")
    }

    function Qm(tt, et, Vt, Ot) {
      const qt = tt.getVerticesData(Xt.e.PositionKind),
        Dt = tt.getVerticesData(Xt.e.NormalKind);
      if (qt && Dt) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${Vt}"\n\t\tint[] faceVertexCounts = [${function(tt){const et=tt.zOt()?.length?tt.getTotalIndices():tt.getTotalVertices();return Array(et/3).fill(3).join(", ")}(tt)}]\n\t\tint[] faceVertexIndices = [${function(tt){const et=tt.zOt(),Vt=et?.length??tt.getTotalVertices(),Ot=[];if(null!==et)for(let qt=0;qt<Vt;qt++)Ot.push(et[qt]);else for(let qt=0;qt<Vt;qt++)Ot.push(qt);return Ot.join(", ")}(tt)}]\n\t\tnormal3f[] normals = [${Hm(Dt,et,void 0,Ot)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${Hm(qt,et,void 0,Ot)}]\n        ${function(tt,et){let Vt="";for(let qt=0;qt<4;qt++){const Ot=qt>0?qt:"",Dt=tt.getVerticesData(Xt.e.UVKind+(Ot?Ot+1:""));Dt&&(Vt+=`\n\t\ttexCoord2f[] primvars:st${Ot} = [${Xm(Dt,et)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const Ot=tt.getVerticesData(Xt.e.ColorKind);return Ot&&(Vt+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        Hm(Ot, et, Ot.length / tt.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),Vt}(tt,et)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function lm(tt, et, Vt, Ot) {
      return `\n        def "Geometry"\n        {\n        ${Qm(tt,et,Vt,Ot)}\n        }\n        `
    }

    function Em(tt) {
      let et = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return et += tt, fflate.strToU8(et)
    }

    function fm(tt) {
      const et = tt.m;
      return `( ${wm(et,0)}, ${wm(et,4)}, ${wm(et,8)}, ${wm(et,12)} )`
    }

    function wm(tt, et) {
      return `(${tt[et+0]}, ${tt[et+1]}, ${tt[et+2]}, ${tt[et+3]})`
    }

    function ym(tt, et) {
      const Vt = "Object_" + tt.uniqueId,
        Ot = fm(et);
      return `def Xform "${Vt}" (\n\tprepend references = @./geometries/Geometry_${tt.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${Ot}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${tt.material.uniqueId}>\n}\n\n`
    }

    function Nm(tt) {
      switch (tt) {
        case Kt.e.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case Kt.e.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case Kt.e.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function am(tt) {
      return `(${tt.x}, ${tt.y})`
    }

    function Mm(tt) {
      return `(${tt.r}, ${tt.g}, ${tt.b})`
    }

    function bm(tt) {
      return "image/jpeg" === tt || "image/png" === tt
    }

    function Jm(tt, et, Vt, qt, Dt, mt) {
      const dt = tt.getInternalTexture().uniqueId + "_" + tt.invertY,
        Ht = tt.mimeType || (0, jt.d)(tt.getInternalTexture()?.url ?? ""),
        Xt = bm(Ht) ? Ht : "image/png",
        Qt = "image/jpeg" === Xt ? "jpg" : "png";
      Dt[dt] = {
        texture: tt,
        mimeType: Xt,
        ext: Qt
      };
      const lt = tt.coordinatesIndex > 0 ? "st" + tt.coordinatesIndex : "st",
        Et = new Ot.Vector2(tt.uScale, tt.vScale),
        ft = new Ot.Vector2(tt.uOffset, tt.vOffset),
        wt = tt.wAng,
        yt = Math.sin(wt),
        Nt = Math.cos(wt);
      return ft.y = 1 - ft.y - Et.y, ft.x += yt * Et.x, ft.y += (1 - Nt) * Et.y, `\n    def Shader "PrimvarReader_${Vt}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${lt}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${Vt}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${et.uniqueId}/PrimvarReader_${Vt}.outputs:result>\n        float inputs:rotation = ${(wt*(180/Math.PI)).toFixed(mt.precision)}\n        float2 inputs:scale = ${am(Et)}\n        float2 inputs:translation = ${am(ft)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${tt.uniqueId}_${Vt}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${dt}.${Qt}@\n        float2 inputs:st.connect = </Root/Materials/Material_${et.uniqueId}/Transform2d_${Vt}.outputs:result>\n        ${qt?"float4 inputs:scale = "+function(tt){return`(${tt.r}, ${tt.g}, ${tt.b}, 1.0)`}(qt):""}\n        token inputs:sourceColorSpace = "${tt.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${Nm(tt.wrapU)}"\n        token inputs:wrapT = "${Nm(tt.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${et.needAlphaBlending()||et.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function Cm(tt, et, Vt) {
      const Ot = "\t\t\t",
        qt = [],
        Dt = [],
        {
          diffuseMap: mt,
          diffuse: dt,
          alphaCutOff: jt,
          emissiveMap: Ht,
          emissive: Xt,
          normalMap: Qt,
          roughnessMap: lt,
          roughnessChannel: Et,
          roughness: ft,
          metalnessMap: wt,
          metalnessChannel: Nt,
          metalness: Mt,
          aoMap: bt,
          aoMapChannel: Jt,
          aoMapIntensity: Ct,
          alphaMap: ut,
          ior: Kt,
          clearCoatEnabled: ht,
          clearCoat: vt,
          clearCoatMap: Wt,
          clearCoatRoughness: St,
          clearCoatRoughnessMap: ct
        } = function(tt) {
          const et = {
            diffuseMap: null,
            diffuse: null,
            alphaCutOff: 0,
            emissiveMap: null,
            emissive: null,
            normalMap: null,
            roughnessMap: null,
            roughnessChannel: "a",
            roughness: 0,
            metalnessMap: null,
            metalnessChannel: "r",
            metalness: 0,
            aoMap: null,
            aoMapChannel: "rgb",
            aoMapIntensity: 0,
            alphaMap: null,
            ior: 1,
            clearCoatEnabled: !1,
            clearCoat: 0,
            clearCoatMap: null,
            clearCoatRoughness: 0,
            clearCoatRoughnessMap: null
          };
          return tt instanceof mO.StandardMaterial ? {
            ...et,
            diffuseMap: tt.diffuseTexture,
            diffuse: tt.diffuseColor,
            alphaCutOff: tt.alphaCutOff,
            emissiveMap: tt.emissiveTexture,
            emissive: tt.emissiveColor,
            roughness: 1,
            alphaMap: tt.opacityTexture
          } : tt instanceof ue ? {
            ...et,
            diffuseMap: tt._albedoTexture,
            diffuse: tt._albedoColor,
            alphaCutOff: tt._alphaCutOff,
            emissiveMap: tt._emissiveTexture,
            emissive: tt._emissiveColor,
            normalMap: tt._bumpTexture,
            roughnessMap: tt._metallicTexture,
            roughnessChannel: tt._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: tt._roughness ?? 1,
            metalnessMap: tt._metallicTexture,
            metalnessChannel: tt._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: tt._metallic ?? 0,
            aoMap: tt._ambientTexture,
            aoMapChannel: tt._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: tt._ambientTextureStrength,
            alphaMap: tt._opacityTexture,
            ior: tt.subSurface.indexOfRefraction,
            clearCoatEnabled: tt.clearCoat.isEnabled,
            clearCoat: tt.clearCoat.intensity,
            clearCoatMap: tt.clearCoat.texture,
            clearCoatRoughness: tt.clearCoat.roughness,
            clearCoatRoughnessMap: tt.clearCoat.useRoughnessFromMainTexture ? tt.clearCoat.texture : tt.clearCoat.textureRoughness
          } : et
        }(tt);
      return null !== mt ? (qt.push(`${Ot}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${tt.uniqueId}/Texture_${mt.uniqueId}_diffuse.outputs:rgb>`), tt.needAlphaBlending() ? qt.push(`${Ot}float inputs:opacity.connect = </Root/Materials/Material_${tt.uniqueId}/Texture_${mt.uniqueId}_diffuse.outputs:a>`) : tt.needAlphaTesting() && (qt.push(`${Ot}float inputs:opacity.connect = </Root/Materials/Material_${tt.uniqueId}/Texture_${mt.uniqueId}_diffuse.outputs:a>`), qt.push(`${Ot}float inputs:opacityThreshold = ${jt}`)), Dt.push(Jm(mt, tt, "diffuse", dt, et, Vt))) : qt.push(`${Ot}color3f inputs:diffuseColor = ${Mm(dt||yt.Color3.White())}`), null !== Ht ? (qt.push(`${Ot}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${tt.uniqueId}/Texture_${Ht.uniqueId}_emissive.outputs:rgb>`), Dt.push(Jm(Ht, tt, "emissive", Xt, et, Vt))) : Xt && Xt.toLuminance() > 0 && qt.push(`${Ot}color3f inputs:emissiveColor = ${Mm(Xt)}`), null !== Qt && (qt.push(`${Ot}normal3f inputs:normal.connect = </Root/Materials/Material_${tt.uniqueId}/Texture_${Qt.uniqueId}_normal.outputs:rgb>`), Dt.push(Jm(Qt, tt, "normal", null, et, Vt))), null !== bt && (qt.push(`${Ot}float inputs:occlusion.connect = </Root/Materials/Material_${tt.uniqueId}/Texture_${bt.uniqueId}_occlusion.outputs:${Jt}>`), Dt.push(Jm(bt, tt, "occlusion", new yt.Color3(Ct, Ct, Ct), et, Vt))), null !== lt ? (qt.push(`${Ot}float inputs:roughness.connect = </Root/Materials/Material_${tt.uniqueId}/Texture_${lt.uniqueId}_roughness.outputs:${Et}>`), Dt.push(Jm(lt, tt, "roughness", new yt.Color3(ft, ft, ft), et, Vt))) : qt.push(`${Ot}float inputs:roughness = ${ft}`), null !== wt ? (qt.push(`${Ot}float inputs:metallic.connect = </Root/Materials/Material_${tt.uniqueId}/Texture_${wt.uniqueId}_metallic.outputs:${Nt}>`), Dt.push(Jm(wt, tt, "metallic", new yt.Color3(Mt, Mt, Mt), et, Vt))) : qt.push(`${Ot}float inputs:metallic = ${Mt}`), null !== ut ? (qt.push(`${Ot}float inputs:opacity.connect = </Root/Materials/Material_${tt.uniqueId}/Texture_${ut.uniqueId}_opacity.outputs:r>`), qt.push(`${Ot}float inputs:opacityThreshold = 0.0001`), Dt.push(Jm(ut, tt, "opacity", null, et, Vt))) : qt.push(`${Ot}float inputs:opacity = ${tt.alpha}`), ht && (null !== Wt ? (qt.push(`${Ot}float inputs:clearcoat.connect = </Root/Materials/Material_${tt.uniqueId}/Texture_${Wt.uniqueId}_clearcoat.outputs:r>`), Dt.push(Jm(Wt, tt, "clearcoat", new yt.Color3(vt, vt, vt), et, Vt))) : qt.push(`${Ot}float inputs:clearcoat = ${vt}`), null !== ct ? (qt.push(`${Ot}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${tt.uniqueId}/Texture_${ct.uniqueId}_clearcoatRoughness.outputs:g>`), Dt.push(Jm(ct, tt, "clearcoatRoughness", new yt.Color3(St, St, St), et, Vt))) : qt.push(`${Ot}float inputs:clearcoatRoughness = ${St}`)), qt.push(`${Ot}float inputs:ior = ${Kt}`), `\n\tdef Material "Material_${tt.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${qt.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${tt.uniqueId}/PreviewSurface.outputs:surface>\n\n${Dt.join("\n")}\n\n\t}\n`
    }

    function um(tt) {
      tt.computeWorldMatrix(!0);
      const et = tt.getWorldMatrix().clone(),
        Vt = tt.vI().useRightHandedSystem;
      let Ot = tt.material?._getEffectiveOrientation(tt) ?? tt.sideOrientation,
        mt = !Vt,
        dt = tt.parent;
      for (; dt;) {
        if (FV(dt, Vt) && null === dt.parent) {
          Vt || (et.multiplyToRef(dt.getWorldMatrix().invert(), et), Ot = Ot === Dt.c.ClockWiseSideOrientation ? Dt.c.CounterClockWiseSideOrientation : Dt.c.ClockWiseSideOrientation), mt = !1;
          break
        }
        dt = dt.parent
      }
      return et.determinant() < 0 && qt.Tools.Warn(`Mesh ${tt.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: et,
        windingOrder: Ot === Dt.c.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: mt
      }
    }
    async function Km(tt, et, Vt) {
      const Dt = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...et
      };
      "undefined" === typeof fflate && await qt.Tools.LoadScriptAsync(Dt.fflateUrl);
      const mt = {};
      mt[Dt.modelFileName] = null;
      let dt = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      dt += function(tt) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===tt.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${tt.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${tt.planeAnchoringAlignment}"`:""}\n            `
      }(Dt);
      const jt = {};
      for (const Ot of tt.meshes) {
        if (0 === Ot.getTotalVertices()) continue;
        const tt = Ot,
          et = tt.geometry,
          Ht = tt.material;
        if (!Ht || !et || Vt && !Vt(tt)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(Ht.getClassName())) {
          const Vt = "geometries/Geometry_" + et.uniqueId + ".usda",
            {
              matrix: Ot,
              windingOrder: qt,
              convertToRightHanded: Xt
            } = um(tt);
          if (!(Vt in mt)) {
            const tt = lm(et, Dt, qt, Xt);
            mt[Vt] = Em(tt)
          }
          Ht.uniqueId in jt || (jt[Ht.uniqueId] = Ht), dt += ym(tt, Ot)
        } else qt.Tools.Warn("USDZExportAsync does not support this material type: " + Ht.getClassName())
      }
      tt.activeCamera && Dt.exportCamera && (dt += function(tt, et) {
        const Vt = "Camera_" + tt.uniqueId,
          qt = fm(Ot.Matrix.RotationY(Math.PI).multiply(tt.getWorldMatrix()));
        if (tt.mode === Kt.e.ORTHOGRAPHIC_CAMERA) return `def Camera "${Vt}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${qt}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${tt.minZ.toPrecision(et.precision)}, ${tt.maxZ.toPrecision(et.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(tt.orthoLeft||1)+Math.abs(tt.orthoRight||1))).toPrecision(et.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(tt.orthoTop||1)+Math.abs(tt.orthoBottom||1))).toPrecision(et.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const Ot = tt.Jf().getAspectRatio(tt),
            Dt = et.cameraSensorWidth || 35;
          return `def Camera "${Vt}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${qt}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${tt.minZ.toPrecision(et.precision)}, ${tt.maxZ.toPrecision(et.precision)})\n\t\t\tfloat focalLength = ${(Dt/(2*Math.tan(.5*tt.fov))).toPrecision(et.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(Dt*Ot).toPrecision(et.precision)}\n\t\t\tfloat verticalAperture = ${(Dt/Ot).toPrecision(et.precision)}            \n\t\t}\n\t\n\t`
        }
      }(tt.activeCamera, Dt)), dt += "\n            }\n        }";
      const Ht = {};
      dt += function(tt, et, Vt) {
        const Ot = [];
        for (const qt in tt) {
          const Dt = tt[qt];
          Ot.push(Cm(Dt, et, Vt))
        }
        return `\n    def "Materials"\n{\n${Ot.join("")}\n}\n\n`
      }(jt, Ht, Dt), dt += "\n    }", mt[Dt.modelFileName] = fflate.strToU8(dt);
      for (const Ot in Ht) {
        const {
          texture: tt,
          ext: et,
          mimeType: Vt
        } = Ht[Ot], qt = await aV(tt);
        if (qt && bm(qt.mimeType) && qt.mimeType === Vt) mt[`textures/Texture_${Ot}.${et}`] = new Uint8Array(qt.data);
        else {
          const qt = tt.getSize(),
            Dt = await (0, Jt.i)(tt),
            dt = await ht.DumpTools.DumpDataAsync(qt.width, qt.height, Dt, Vt, void 0, !1, !0);
          mt[`textures/Texture_${Ot}.${et}`] = new Uint8Array(dt).slice()
        }
      }
      let Xt = 0;
      for (const Ot in mt) {
        const tt = mt[Ot];
        if (!tt) continue;
        Xt += 34 + Ot.length;
        const et = 63 & Xt;
        if (4 !== et) {
          const Vt = new Uint8Array(64 - et);
          mt[Ot] = [tt, {
            extra: {
              12345: Vt
            }
          }]
        }
        Xt = tt.length
      }
      return fflate.zipSync(mt, {
        level: 0
      })
    }
    var hm = Vt(41306);
    class Wm {
      static Export(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        if (!tt || 0 === tt.bones.length) throw new Error("Invalid or empty skeleton provided");
        let Ot = et;
        et && 0 !== et.length || (Ot = tt.animations.map((tt => tt.name)));
        let qt = null;
        for (const Ht of Ot) {
          const et = tt.getAnimationRange(Ht);
          et && (qt = qt ? new hm.e("animation-range", Math.min(qt.from, et.from), Math.max(qt.to, et.to)) : et)
        }
        if (!qt && (tt.animations.length > 0 && (qt = tt.getAnimationRange(tt.animations[0].name)), !qt)) throw new Error("No animation range found in skeleton");
        const Dt = Vt || 1 / (tt.animations[0]?.framePerSecond || 30),
          mt = this._BuildBoneHierarchy(tt, Ot);
        let dt = 0;
        for (const Ht of mt) Ht.positionKeys.length > 0 && (dt = Math.max(dt, Ht.positionKeys.length)), Ht.rotationKeys.length > 0 && (dt = Math.max(dt, Ht.rotationKeys.length));
        0 === dt && (dt = Math.floor((qt.to - qt.from) / Dt) + 1);
        let jt = "";
        return jt += "HIERARCHY\n", jt += this._ExportHierarchy(mt, 0), jt += "MOTION\n", jt += `Frames: ${dt}\n`, jt += `Frame Time: ${Dt.toFixed(6)}\n`, jt += this._ExportMotionData(mt, dt, 0, Ot), jt
      }
      static _BuildBoneHierarchy(tt, et) {
        const Vt = new Map,
          Ot = [];
        for (const qt of tt.bones) {
          const tt = {
            bone: qt,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          Vt.set(qt, tt)
        }
        for (const qt of tt.bones) {
          const tt = Vt.get(qt);
          if (qt.animations.length > 0)
            for (const Vt of qt.animations) et.includes(Vt.name) && ("position" === Vt.targetProperty ? (tt.hasPositionChannels = !0, tt.positionKeys.push(...Vt.getKeys())) : "rotationQuaternion" === Vt.targetProperty && (tt.hasRotationChannels = !0, tt.rotationKeys.push(...Vt.getKeys())));
          if (qt.getParent()) {
            const et = Vt.get(qt.getParent());
            et && et.children.push(tt)
          } else Ot.push(tt)
        }
        return Ot
      }
      static _ExportHierarchy(tt, et) {
        let Vt = "";
        const Ot = "    ".repeat(et);
        for (const qt of tt) {
          const tt = qt.bone;
          if (this._IsEndSite(qt)) {
            Vt += `${Ot}End Site\n`, Vt += `${Ot}{\n`;
            const et = this._GetBoneOffset(tt);
            Vt += `${Ot}    OFFSET ${et.x.toFixed(6)} ${et.y.toFixed(6)} ${et.z.toFixed(6)}\n`, Vt += `${Ot}}\n`
          } else {
            Vt += `${0===et?"ROOT":`${Ot}JOINT`} ${tt.name}\n`, Vt += `${Ot}{\n`;
            const Dt = this._GetBoneOffset(tt);
            Vt += `${Ot}    OFFSET ${Dt.x.toFixed(6)} ${Dt.y.toFixed(6)} ${Dt.z.toFixed(6)}\n`;
            const mt = [];
            qt.hasPositionChannels && mt.push("Xposition", "Yposition", "Zposition"), qt.hasRotationChannels && mt.push("Zrotation", "Xrotation", "Yrotation"), mt.length > 0 && (Vt += `${Ot}    CHANNELS ${mt.length} ${mt.join(" ")}\n`), qt.children.length > 0 && (Vt += this._ExportHierarchy(qt.children, et + 1)), Vt += `${Ot}}\n`
          }
        }
        return Vt
      }
      static _IsEndSite(tt) {
        return 0 === tt.children.length
      }
      static _GetBoneOffset(tt) {
        try {
          if (!tt.getParent()) return tt.getRestMatrix().getTranslation();
          return tt.getLocalMatrix().getTranslation()
        } catch (et) {
          return Ot.uf.Zero()
        }
      }
      static _ExportMotionData(tt, et, Vt, Ot) {
        let qt = "";
        for (let Dt = 0; Dt < et; Dt++) {
          const et = [];
          this._CollectFrameValues(tt, Dt + Vt, et, Ot), qt += et.map((tt => tt.toFixed(6))).join(" ") + "\n"
        }
        return qt
      }
      static _CollectFrameValues(tt, et, Vt, Ot) {
        for (const qt of tt)
          if (!this._IsEndSite(qt)) {
            if (qt.hasPositionChannels) {
              const tt = this._GetPositionAtFrameIndex(qt.positionKeys, et);
              Vt.push(tt.x, tt.y, tt.z)
            }
            if (qt.hasRotationChannels) {
              const tt = this._GetRotationAtFrameIndex(qt.rotationKeys, et),
                Ot = this._QuaternionToEuler(tt);
              Vt.push(Ot.z, Ot.x, Ot.y)
            }
            qt.children.length > 0 && this._CollectFrameValues(qt.children, et, Vt, Ot)
          }
      }
      static _GetPositionAtFrameIndex(tt, et) {
        if (0 === tt.length) return Ot.uf.Zero();
        return tt[Math.max(0, Math.min(et, tt.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(tt, et) {
        if (0 === tt.length) return Ot.Quaternion.Identity();
        return tt[Math.max(0, Math.min(et, tt.length - 1))].value.clone()
      }
      static _QuaternionToEuler(tt) {
        const et = new Ot.Matrix;
        tt.toRotationMatrix(et);
        const Vt = et.m;
        let Dt, mt, dt;
        const jt = Math.sqrt(Vt[0] * Vt[0] + Vt[1] * Vt[1]);
        return jt > ZV.e ? (Dt = Math.atan2(Vt[6], Vt[10]), mt = Math.atan2(-Vt[2], jt), dt = Math.atan2(Vt[1], Vt[0])) : (Dt = Math.atan2(-Vt[9], Vt[5]), mt = Math.atan2(-Vt[2], jt), dt = 0), new Ot.uf(qt.Tools.ToDegrees(Dt), qt.Tools.ToDegrees(mt), qt.Tools.ToDegrees(dt))
      }
    }

    function Sm(tt) {
      return "string" === typeof tt?.name
    }
    const cm = Symbol("__xml:meta$__"),
      Rm = Symbol("__xml:name$__");

    function Im(tt, et) {
      Object.prototype.hasOwnProperty.call(tt.metadata, cm) || (tt.metadata[cm] = []), tt.metadata[cm].push(et)
    }

    function Pm(tt) {
      return (et, Vt) => {
        et[Rm] = tt
      }
    }

    function Zm() {
      return (tt, et) => Im(et, {
        kind: "none",
        prop: String(et.name),
        ignore: !0
      })
    }

    function Lm(tt) {
      return (et, Vt) => Im(Vt, {
        kind: "attr",
        prop: String(Vt.name),
        ...tt
      })
    }

    function Fm(tt) {
      return (et, Vt) => Im(Vt, {
        kind: "elem",
        prop: String(Vt.name),
        ...tt
      })
    }

    function km(tt) {
      const et = "function" === typeof tt ? tt : tt?.constructor,
        Vt = et?.[Symbol.metadata];
      if (!Vt) return [];
      const Ot = [];
      let qt = Vt;
      for (; qt;) Object.prototype.hasOwnProperty.call(qt, cm) && Ot.push(...qt[cm]), qt = Object.getPrototypeOf(qt);
      return Ot
    }

    function Gm(tt) {
      const et = tt?.constructor?.[Rm];
      return et || void 0
    }

    function zm(tt) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(tt)
    }

    function om(tt) {
      if (Sm(tt)) return tt;
      const et = (tt ?? "").trim();
      if (!et) return {
        name: ""
      };
      const Vt = et.indexOf(":");
      if (-1 === Vt) return {
        name: et
      };
      if (-1 !== et.indexOf(":", Vt + 1)) return {
        name: et
      };
      const Ot = et.slice(0, Vt),
        qt = et.slice(Vt + 1);
      return zm(Ot) && zm(qt) ? {
        ns: Ot,
        name: qt
      } : {
        name: et
      }
    }

    function rm(tt, et) {
      return et ? `${et}:${tt}` : tt
    }
    const Um = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      Am = Object.freeze({
        number: Um
      });

    function im(tt) {
      const et = tt?.eps ?? Um.eps;
      return {
        eps: et,
        maxDecimalsCap: tt?.maxDecimalsCap ?? Um.maxDecimalsCap,
        trimTrailingZeros: tt?.trimTrailingZeros ?? Um.trimTrailingZeros,
        fixedDecimals: tt?.fixedDecimals,
        allowScientific: tt?.allowScientific ?? Um.allowScientific,
        snapNearZero: tt?.snapNearZero ?? Um.snapNearZero,
        zeroThreshold: tt?.zeroThreshold ?? et,
        perAttributeEps: tt?.perAttributeEps
      }
    }

    function Ym(tt) {
      return {
        number: im(tt?.number)
      }
    }
    class Bm {
      constructor(tt) {
        if (this.o = tt, this._o = tt.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(tt) {
        if (!Number.isFinite(tt)) throw new Error(`Cannot format non-finite number: ${tt}`);
        const et = this._o,
          Vt = this._clampInt(et.maxDecimalsCap ?? 15, 0, 20),
          Ot = et.trimTrailingZeros ?? !0,
          qt = et.snapNearZero ?? !0,
          Dt = et.zeroThreshold ?? et.eps,
          mt = 1 / et.eps;
        let dt, jt = Math.round(tt * mt) / mt;
        if (Object.is(jt, -0) && (jt = 0), qt && Math.abs(jt) <= Dt && (jt = 0), dt = void 0 !== et.fixedDecimals ? this._clampInt(et.fixedDecimals, 0, Vt) : this._clampInt(Math.ceil(-Math.log10(et.eps)), 0, Vt), et.allowScientific, 0 === dt) return String(Math.trunc(jt));
        let Ht = jt.toFixed(dt);
        if (Ot && void 0 === et.fixedDecimals && (Ht = Ht.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(Ht)) throw new Error(`Scientific notation not allowed in XML output: ${Ht}`);
        return Ht
      }
      _clampInt(tt, et, Vt) {
        return Number.isFinite(tt) ? (tt = Math.trunc(tt), Math.max(et, Math.min(Vt, tt))) : et
      }
    }

    function pm(tt) {
      return tt instanceof Date
    }

    function xm(tt) {
      return "string" === typeof tt
    }

    function Tm(tt) {
      return "string" === typeof tt || "number" === typeof tt || "boolean" === typeof tt || "bigint" === typeof tt || pm(tt)
    }

    function gm(tt) {
      return "number" === typeof tt || "boolean" === typeof tt || "bigint" === typeof tt || pm(tt)
    }
    class sm {
      constructor(tt, et) {
        this._ns = new Map, this._prefixCount = 0, this._builder = tt, this._format = Ym(et), this._nFmt = new Bm(this._format)
      }
      withNamespace() {
        for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
        for (const Ot of et) this._assignNamespace(Ot);
        return this
      }
      serialize(tt, et) {
        if (!(et = et ?? Gm(tt))) throw new Error("can not find name for given object");
        const Vt = om(et);
        Vt.ns && this._assignNamespace(Vt.ns, "xmlns"), this._gatherNamespaces(tt, new WeakSet);
        const Ot = this._builder.ele(null, Vt.name);
        for (const [qt, Dt] of Array.from(this._ns.entries())) Ot.att("xmlns", Dt, qt);
        this._writeObjectContent(Ot, tt, (new WeakSet).add(tt)), this._builder.end()
      }
      _writeObject(tt, et, Vt) {
        if (Vt.has(et)) return;
        if (Vt.add(et), Array.isArray(et)) {
          for (const Ot of et) gm(Ot) || (xm(Ot) ? this._builder.text(Ot) : this._writeObject(tt, Ot, Vt));
          return
        }
        const Ot = Gm(et);
        if (!Ot) return;
        const qt = om(Ot),
          Dt = this._getPrefix(qt),
          mt = rm(qt.name, Dt);
        tt.ele(null, mt), this._writeObjectContent(tt, et, Vt), this._builder.end()
      }
      _getPrefix(tt) {
        if (tt.ns) {
          const et = this._ns.get(tt.ns.toLowerCase());
          if ("xmlns" !== et) return et
        }
      }
      _writeObjectContent(tt, et, Vt) {
        const Ot = km(et) ?? [],
          qt = new Map;
        for (const mt of Ot) {
          const tt = qt.get(mt.prop) ?? [];
          tt.push(mt), qt.set(mt.prop, tt)
        }
        const Dt = Object.keys(et).sort(((tt, et) => {
          const Vt = (qt.get(tt) ?? []).some((tt => "attr" === tt.kind));
          return Vt === (qt.get(et) ?? []).some((tt => "attr" === tt.kind)) ? 0 : Vt ? -1 : 1
        }));
        for (const mt of Dt) {
          const Ot = et[mt];
          if (null === Ot || void 0 === Ot) continue;
          const Dt = qt.get(mt);
          if (Dt) {
            if (Dt.some((tt => !0 === tt.ignore || "none" === tt.kind))) continue;
            for (const et of Dt) {
              const Vt = et.name ?? et.prop.toLowerCase();
              if (Vt) switch (et.kind) {
                case "attr": {
                  let qt = null;
                  if ("number" === typeof Ot && this._nFmt && (qt = this._nFmt.toString(Ot)), et.formatter) {
                    qt = new et.formatter(this._format).toString(Ot)
                  }
                  if (qt = qt ?? Ot.toString(), qt) {
                    const et = om(Vt),
                      Ot = this._getPrefix(et),
                      Dt = rm(et.name, Ot);
                    tt.att(null, Dt, qt)
                  }
                  break
                }
              }
            }
          } else gm(Ot) || (xm(Ot) ? this._builder.text(Ot) : this._writeObject(tt, Ot, Vt))
        }
      }
      _gatherNamespaces(tt, et) {
        if (et.has(tt)) return;
        if (et.add(tt), Array.isArray(tt)) {
          for (const Vt of tt) Tm(Vt) || this._gatherNamespaces(Vt, et);
          return
        }
        const Vt = Gm(tt);
        Vt && this._assignNamespace(Vt);
        const Ot = km(tt) ?? [],
          qt = new Map;
        for (const mt of Ot) {
          const tt = qt.get(mt.prop) ?? [];
          tt.push(mt), qt.set(mt.prop, tt)
        }
        const Dt = [];
        for (const mt of Object.keys(tt)) {
          const et = tt[mt];
          if (null === et || void 0 === et) continue;
          const Vt = qt.get(mt);
          if (Vt) {
            if (Vt.some((tt => !0 === tt.ignore || "none" === tt.kind))) continue;
            for (const tt of Vt) tt.name && this._assignNamespace(tt.name)
          }
          Dt.push(et)
        }
        for (const mt of Dt) Tm(mt) || this._gatherNamespaces(mt, et)
      }
      _assignNamespace(tt, et) {
        const Vt = om(tt);
        if (Vt?.ns) {
          const tt = Vt.ns.toLowerCase();
          this._ns.get(tt) || this._ns.set(tt, et ?? this._buildNsPrefix(tt))
        } else if ("xmlns" === et) {
          const tt = Vt.name.toLowerCase();
          this._ns.get(tt) || this._ns.set(tt, et ?? this._buildNsPrefix(tt))
        }
      }
      _buildNsPrefix(tt) {
        let et, Vt = !1;
        do {
          et = "ns" + this._prefixCount++;
          for (const tt of Array.from(this._ns.values()))
            if (tt === et) {
              Vt = !0;
              break
            }
        } while (Vt);
        return et
      }
    }
    class nm {}
    var td;
    nm.OpenTag = "<", nm.CloseTag = ">", nm.Slash = "/", nm.Question = "?", nm.Quote = '"', nm.Equal = "=", nm.Space = " ", nm.Semicolon = ":", nm.Dec = "<?xml", nm.Xml = "xml", nm.Xmlns = "xmlns", nm.Xsi = "xsi", nm.VersionKeyword = "version", nm.EncodingKeyword = "encoding", nm.StandaloneKeyword = "standalone",
      function(tt) {
        tt[tt.Declaration = 0] = "Declaration", tt[tt.Tag = 1] = "Tag", tt[tt.Attribute = 2] = "Attribute", tt[tt.Text = 3] = "Text"
      }(td || (td = {}));
    class ed {
      constructor(tt) {
        this._ctxStack = [], this._d = 0, this._w = tt
      }
      dec(tt, et, Vt) {
        return this._w.write(nm.Dec), this._writeAttStr(nm.VersionKeyword, tt), et && this._writeAttStr(nm.EncodingKeyword, et), void 0 !== Vt && this._writeAttStr(nm.StandaloneKeyword, Vt ? "yes" : "no"), this._w.write(nm.Question, nm.CloseTag), this
      }
      att(tt, et, Vt) {
        const Ot = this._peekContext();
        if (!Ot) throw new Error("att() without open element");
        if (Ot.closed) throw new Error(`att() after start tag closed for <${Ot.name}>`);
        if (this._isXmlnsDecl(tt, et)) {
          if (et === nm.Xmlns) Ot.defaultNs = Vt, this._registerNamespace(Ot, "", Vt), this._writeAttStr(nm.Xmlns, Vt);
          else if (tt) this._registerNamespace(Ot, et, Vt), this._writeAttStr(`${tt}:${et}`, Vt);
          else {
            const tt = et.slice(6);
            this._registerNamespace(Ot, tt, Vt), this._writeAttStr(et, Vt)
          }
          return Ot.lastToken = td.Attribute, this
        }
        let qt = et;
        if (tt) {
          qt = `${this._ensurePrefixDeclared(Ot,tt)}:${et}`
        }
        return Ot.lastToken = td.Attribute, this._writeAttStr(qt, Vt), this
      }
      ele(tt, et) {
        const Vt = this._peekContext();
        Vt && this._closeOpenTagIfNeeded(Vt);
        let Ot = et;
        if (tt) {
          Ot = `${this._lookupPrefix(tt)??tt}:${et}`
        }
        return this._pushContext(Ot, ++this._d), this._w.write(nm.OpenTag, Ot), this
      }
      text(tt) {
        const et = this._peekContext();
        if (!et) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(et), et.lastToken = td.Text, this._w.write(this._escText(tt)), this
      }
      end() {
        const tt = this._popContext();
        return tt && (this._d--, tt.closed ? this._w.write(nm.OpenTag, nm.Slash, tt.name, nm.CloseTag) : this._w.write(nm.Slash, nm.CloseTag)), this
      }
      _pushContext(tt, et) {
        const Vt = new ed.Context(tt, et);
        return this._ctxStack.push(Vt), Vt
      }
      _popContext() {
        return this._ctxStack.pop()
      }
      _peekContext() {
        return this._ctxStack[this._ctxStack.length - 1]
      }
      get _contextDepth() {
        return this._ctxStack.length
      }
      _writeAttStr(tt, et) {
        this._w.write(nm.Space, tt, nm.Equal, nm.Quote, this._escAttr(et), nm.Quote)
      }
      _lookupPrefix(tt) {
        let et = this._ctxStack.length - 1;
        if (et >= 0)
          do {
            const Vt = this._ctxStack[et--],
              Ot = Vt.ns2prefix?.get(tt);
            if (Ot) return Ot
          } while (et >= 0)
      }
      _escText(tt) {
        return tt.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(tt) {
        return this._escText(tt).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(tt, et) {
        if (tt) return tt === nm.Xmlns;
        const Vt = et.length,
          Ot = nm.Xmlns.length;
        return Vt >= Ot && (et.startsWith(nm.Xmlns) && (et.length == Ot || et[Ot] == nm.Semicolon))
      }
      _registerNamespace(tt, et, Vt) {
        if (et === nm.Xml || et === nm.Xmlns) throw new Error(`reserved prefix '${et}'`);
        const Ot = tt.prefix2ns.get(et);
        if (Ot && Ot !== Vt) throw new Error(`prefix '${et}' already bound to a different namespace`);
        tt.ns2prefix.get(Vt) || tt.ns2prefix.set(Vt, et), tt.prefix2ns.set(et, Vt)
      }
      _allocPrefix(tt) {
        let et = 1;
        for (;;) {
          const Vt = "ns" + et++;
          if (!tt.prefix2ns.has(Vt)) return Vt
        }
      }
      _ensurePrefixDeclared(tt, et) {
        const Vt = this._lookupPrefix(et);
        if (Vt) return Vt;
        if (tt.closed) throw new Error(`can not declare namespace after start tag closed for <${tt.name}>`);
        const Ot = this._allocPrefix(tt);
        return this._writeAttStr(`${nm.Xmlns}:${Ot}`, et), this._registerNamespace(tt, Ot, et), Ot
      }
      _closeOpenTagIfNeeded(tt) {
        tt.closed || (this._w.write(nm.CloseTag), tt.closed = !0)
      }
    }
    ed.Context = class {
      constructor(tt, et) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = tt, this.depth = et
      }
    };
    class Vd {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
        if (0 === et.length) return this;
        const Ot = et.join("");
        return this._chunks.push(Ot), this.count += Ot.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class Od {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = tt, this._opts = et, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
        if (0 === et.length) return this;
        const Ot = et.join("");
        if (0 === Ot.length) return this;
        this._pending += Ot, this._pendingChars += Ot.length;
        const qt = this._opts.flushChars ?? 65536;
        return this._pendingChars >= qt && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const tt = this._encoder.encode(this._pending);
        return this._sink.push(tt), this.count += tt.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const qd = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      Dd = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var md, dd;
    ! function(tt) {
      tt.micron = "micron", tt.millimeter = "millimeter", tt.centimeter = "centimeter", tt.inch = "inch", tt.foot = "foot", tt.meter = "meter"
    }(md || (md = {})),
    function(tt) {
      tt.model = "model", tt.solidsupport = "solidsupport", tt.support = "support", tt.surface = "surface", tt.other = "other"
    }(dd || (dd = {}));
    const jd = "http://schemas.openxmlformats.org/package/2006/content-types",
      Hd = "http://schemas.openxmlformats.org/package/2006/relationships";
    var Xd;
    ! function(tt) {
      tt.Relationships = "application/vnd.openxmlformats-package.relationships+xml", tt.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", tt.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", tt.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", tt.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", tt.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", tt.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", tt.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", tt.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", tt.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", tt.Png = "image/png", tt.Jpeg = "image/jpeg", tt.Tiff = "image/tiff", tt.Xml = "application/xml"
    }(Xd || (Xd = {}));
    const Qd = "_rels/",
      ld = "3D/",
      Ed = "3dmodel.model",
      fd = ".rels",
      wd = "[Content_Types].xml";
    class yd {
      static IsKnown(tt) {
        return yd.Known.has(tt)
      }
      static IsThreeDimModel(tt) {
        return tt === yd.ThreeDimModel
      }
    }
    yd.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", yd.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", yd.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", yd.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", yd.Known = new Set([yd.ThreeDimModel, yd.Thumbnail, yd.PrintTicket, yd.MustPreserve]);
    let Nd = (() => {
        let tt, et, Vt = [Pm({
            ns: jd,
            name: "Types"
          })],
          Ot = [];
        et = class {
          constructor() {
            this.items = []
          }
        };
        return (0, vt.q)(et, "ThreeMfContentTypes"), (() => {
          const qt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vt.l)(null, tt = {
            value: et
          }, Vt, {
            kind: "class",
            name: et.name,
            metadata: qt
          }, null, Ot), et = tt.value, qt && Object.defineProperty(et, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qt
          }), (0, vt.m)(et, Ot)
        })(), et
      })(),
      Md = (() => {
        let tt, et, Vt, Ot, qt = [Pm({
            ns: jd,
            name: "Default"
          })],
          Dt = [],
          mt = [],
          dt = [],
          jt = [],
          Ht = [];
        et = class {
          constructor(tt, et) {
            this.ext = (0, vt.m)(this, mt, void 0), this.ct = ((0, vt.m)(this, dt), (0, vt.m)(this, jt, void 0)), (0, vt.m)(this, Ht), this.ext = tt, this.ct = et
          }
        };
        return (0, vt.q)(et, "ThreeMfContentType"), (() => {
          const Xt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Vt = [Lm({
            name: {
              ns: jd,
              name: "Extension"
            }
          })], Ot = [Lm({
            name: {
              ns: jd,
              name: "ContentType"
            }
          })], (0, vt.l)(null, null, Vt, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: tt => "ext" in tt,
              get: tt => tt.ext,
              set: (tt, et) => {
                tt.ext = et
              }
            },
            metadata: Xt
          }, mt, dt), (0, vt.l)(null, null, Ot, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: tt => "ct" in tt,
              get: tt => tt.ct,
              set: (tt, et) => {
                tt.ct = et
              }
            },
            metadata: Xt
          }, jt, Ht), (0, vt.l)(null, tt = {
            value: et
          }, qt, {
            kind: "class",
            name: et.name,
            metadata: Xt
          }, null, Dt), et = tt.value, Xt && Object.defineProperty(et, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Xt
          }), (0, vt.m)(et, Dt)
        })(), et
      })(),
      bd = (() => {
        let tt, et, Vt = [Pm({
            ns: Hd,
            name: "Relationships"
          })],
          Ot = [];
        et = class {
          constructor() {
            this.items = []
          }
        };
        return (0, vt.q)(et, "ThreeMfRelationships"), (() => {
          const qt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vt.l)(null, tt = {
            value: et
          }, Vt, {
            kind: "class",
            name: et.name,
            metadata: qt
          }, null, Ot), et = tt.value, qt && Object.defineProperty(et, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qt
          }), (0, vt.m)(et, Ot)
        })(), et
      })(),
      Jd = (() => {
        let tt, et, Vt, Ot, qt, Dt = [Pm({
            ns: Hd,
            name: "Relationship"
          })],
          mt = [],
          dt = [],
          jt = [],
          Ht = [],
          Xt = [],
          Qt = [],
          lt = [];
        et = class {
          constructor(tt, et, Vt) {
            this.id = (0, vt.m)(this, dt, void 0), this.type = ((0, vt.m)(this, jt), (0, vt.m)(this, Ht, void 0)), this.target = ((0, vt.m)(this, Xt), (0, vt.m)(this, Qt, void 0)), (0, vt.m)(this, lt), this.id = tt, this.type = et, this.target = Vt
          }
        };
        return (0, vt.q)(et, "ThreeMfRelationship"), (() => {
          const Et = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Vt = [Lm({
            name: "Id"
          })], Ot = [Lm({
            name: "Type"
          })], qt = [Lm({
            name: "Target"
          })], (0, vt.l)(null, null, Vt, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: tt => "id" in tt,
              get: tt => tt.id,
              set: (tt, et) => {
                tt.id = et
              }
            },
            metadata: Et
          }, dt, jt), (0, vt.l)(null, null, Ot, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: tt => "type" in tt,
              get: tt => tt.type,
              set: (tt, et) => {
                tt.type = et
              }
            },
            metadata: Et
          }, Ht, Xt), (0, vt.l)(null, null, qt, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: tt => "target" in tt,
              get: tt => tt.target,
              set: (tt, et) => {
                tt.target = et
              }
            },
            metadata: Et
          }, Qt, lt), (0, vt.l)(null, tt = {
            value: et
          }, Dt, {
            kind: "class",
            name: et.name,
            metadata: Et
          }, null, mt), et = tt.value, Et && Object.defineProperty(et, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Et
          }), (0, vt.m)(et, mt)
        })(), et
      })();
    class Cd {
      constructor(tt, et, Vt) {
        this.contentTypes = tt, this.relationships = et, this.model = Vt
      }
    }
    class ud {
      static Zero() {
        return new ud([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(tt) {
        this.values = tt
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class Kd {
      constructor(tt) {
        this.o = tt, this._f = new Bm(tt)
      }
      toString(tt) {
        return tt.values.map((tt => this._f.toString(tt))).join(" ")
      }
    }
    let hd = (() => {
        let tt, et, Vt, Ot, qt, Dt = [Pm({
            ns: qd,
            name: "model"
          })],
          mt = [],
          dt = [],
          jt = [],
          Ht = [],
          Xt = [],
          Qt = [],
          lt = [];
        et = class {
          constructor() {
            this.unit = (0, vt.m)(this, dt, md.millimeter), this.requiredextensions = ((0, vt.m)(this, jt), (0, vt.m)(this, Ht, void 0)), this.recommendedextensions = ((0, vt.m)(this, Xt), (0, vt.m)(this, Qt, void 0)), this.metadata = (0, vt.m)(this, lt)
          }
        };
        return (0, vt.q)(et, "ThreeMfModel"), (() => {
          const Et = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Vt = [Lm({
            name: "unit"
          })], Ot = [Lm({
            name: "requiredextensions"
          })], qt = [Lm({
            name: "recommendedextensions"
          })], (0, vt.l)(null, null, Vt, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: tt => "unit" in tt,
              get: tt => tt.unit,
              set: (tt, et) => {
                tt.unit = et
              }
            },
            metadata: Et
          }, dt, jt), (0, vt.l)(null, null, Ot, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: tt => "requiredextensions" in tt,
              get: tt => tt.requiredextensions,
              set: (tt, et) => {
                tt.requiredextensions = et
              }
            },
            metadata: Et
          }, Ht, Xt), (0, vt.l)(null, null, qt, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: tt => "recommendedextensions" in tt,
              get: tt => tt.recommendedextensions,
              set: (tt, et) => {
                tt.recommendedextensions = et
              }
            },
            metadata: Et
          }, Qt, lt), (0, vt.l)(null, tt = {
            value: et
          }, Dt, {
            kind: "class",
            name: et.name,
            metadata: Et
          }, null, mt), et = tt.value, Et && Object.defineProperty(et, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Et
          })
        })(), et.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, vt.m)(et, mt), et
      })(),
      vd = (() => {
        let tt, et, Vt, Ot, qt, Dt = [Pm({
            ns: qd,
            name: "meta"
          })],
          mt = [],
          dt = [],
          jt = [],
          Ht = [],
          Xt = [],
          Qt = [],
          lt = [];
        et = class {
          constructor(tt, et, Vt, Ot) {
            this.name = (0, vt.m)(this, dt, void 0), this.preserve = ((0, vt.m)(this, jt), (0, vt.m)(this, Ht, void 0)), this.type = ((0, vt.m)(this, Xt), (0, vt.m)(this, Qt, void 0)), this.value = (0, vt.m)(this, lt), this.name = tt, this.value = et, this.preserve = Vt, this.type = Ot
          }
        };
        return (0, vt.q)(et, "ThreeMfMeta"), (() => {
          const Et = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Vt = [Lm({
            name: "name"
          })], Ot = [Lm({
            name: "preserve"
          })], qt = [Lm({
            name: "type"
          })], (0, vt.l)(null, null, Vt, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: tt => "name" in tt,
              get: tt => tt.name,
              set: (tt, et) => {
                tt.name = et
              }
            },
            metadata: Et
          }, dt, jt), (0, vt.l)(null, null, Ot, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: tt => "preserve" in tt,
              get: tt => tt.preserve,
              set: (tt, et) => {
                tt.preserve = et
              }
            },
            metadata: Et
          }, Ht, Xt), (0, vt.l)(null, null, qt, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: tt => "type" in tt,
              get: tt => tt.type,
              set: (tt, et) => {
                tt.type = et
              }
            },
            metadata: Et
          }, Qt, lt), (0, vt.l)(null, tt = {
            value: et
          }, Dt, {
            kind: "class",
            name: et.name,
            metadata: Et
          }, null, mt), et = tt.value, Et && Object.defineProperty(et, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Et
          }), (0, vt.m)(et, mt)
        })(), et
      })(),
      Wd = (() => {
        let tt, et, Vt = [Pm({
            ns: qd,
            name: "metadatagroup"
          })],
          Ot = [];
        et = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, vt.q)(et, "ThreeMfMetadataGroup"), (() => {
          const qt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vt.l)(null, tt = {
            value: et
          }, Vt, {
            kind: "class",
            name: et.name,
            metadata: qt
          }, null, Ot), et = tt.value, qt && Object.defineProperty(et, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qt
          }), (0, vt.m)(et, Ot)
        })(), et
      })(),
      Sd = (() => {
        let tt, et, Vt = [Pm({
            ns: qd,
            name: "resources"
          })],
          Ot = [];
        et = class {
          constructor() {
            this.object = []
          }
        };
        return (0, vt.q)(et, "ThreeMfResources"), (() => {
          const qt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vt.l)(null, tt = {
            value: et
          }, Vt, {
            kind: "class",
            name: et.name,
            metadata: qt
          }, null, Ot), et = tt.value, qt && Object.defineProperty(et, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qt
          }), (0, vt.m)(et, Ot)
        })(), et
      })(),
      cd = (() => {
        let tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht = [Pm({
            ns: qd,
            name: "object"
          })],
          Xt = [],
          Qt = [],
          lt = [],
          Et = [],
          ft = [],
          wt = [],
          yt = [],
          Nt = [],
          Mt = [],
          bt = [],
          Jt = [],
          Ct = [],
          ut = [],
          Kt = [],
          ht = [];
        et = class {
          constructor(tt) {
            let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd.model;
            this.id = (0, vt.m)(this, Qt, void 0), this.type = ((0, vt.m)(this, lt), (0, vt.m)(this, Et, void 0)), this.thumbnail = ((0, vt.m)(this, ft), (0, vt.m)(this, wt, void 0)), this.partnumber = ((0, vt.m)(this, yt), (0, vt.m)(this, Nt, void 0)), this.name = ((0, vt.m)(this, Mt), (0, vt.m)(this, bt, void 0)), this.pid = ((0, vt.m)(this, Jt), (0, vt.m)(this, Ct, void 0)), this.pindex = ((0, vt.m)(this, ut), (0, vt.m)(this, Kt, void 0)), this.metadatagroup = (0, vt.m)(this, ht), this.id = tt, this.type = et
          }
        };
        return (0, vt.q)(et, "ThreeMfObject"), (() => {
          const Wt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Vt = [Lm({
            name: "id"
          })], Ot = [Lm({
            name: "type"
          })], qt = [Lm({
            name: "thumbnail"
          })], Dt = [Lm({
            name: "partnumber"
          })], mt = [Lm({
            name: "name"
          })], dt = [Lm({
            name: "pid"
          })], jt = [Lm({
            name: "pindex"
          })], (0, vt.l)(null, null, Vt, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: tt => "id" in tt,
              get: tt => tt.id,
              set: (tt, et) => {
                tt.id = et
              }
            },
            metadata: Wt
          }, Qt, lt), (0, vt.l)(null, null, Ot, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: tt => "type" in tt,
              get: tt => tt.type,
              set: (tt, et) => {
                tt.type = et
              }
            },
            metadata: Wt
          }, Et, ft), (0, vt.l)(null, null, qt, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: tt => "thumbnail" in tt,
              get: tt => tt.thumbnail,
              set: (tt, et) => {
                tt.thumbnail = et
              }
            },
            metadata: Wt
          }, wt, yt), (0, vt.l)(null, null, Dt, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: tt => "partnumber" in tt,
              get: tt => tt.partnumber,
              set: (tt, et) => {
                tt.partnumber = et
              }
            },
            metadata: Wt
          }, Nt, Mt), (0, vt.l)(null, null, mt, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: tt => "name" in tt,
              get: tt => tt.name,
              set: (tt, et) => {
                tt.name = et
              }
            },
            metadata: Wt
          }, bt, Jt), (0, vt.l)(null, null, dt, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: tt => "pid" in tt,
              get: tt => tt.pid,
              set: (tt, et) => {
                tt.pid = et
              }
            },
            metadata: Wt
          }, Ct, ut), (0, vt.l)(null, null, jt, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: tt => "pindex" in tt,
              get: tt => tt.pindex,
              set: (tt, et) => {
                tt.pindex = et
              }
            },
            metadata: Wt
          }, Kt, ht), (0, vt.l)(null, tt = {
            value: et
          }, Ht, {
            kind: "class",
            name: et.name,
            metadata: Wt
          }, null, Xt), et = tt.value, Wt && Object.defineProperty(et, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wt
          }), (0, vt.m)(et, Xt)
        })(), et
      })(),
      Rd = (() => {
        let tt, et, Vt = [Pm({
            ns: qd,
            name: "mesh"
          })],
          Ot = [];
        et = class {
          constructor(tt, et) {
            this.vertices = tt ?? new Id, this.triangles = et ?? new Zd
          }
        };
        return (0, vt.q)(et, "ThreeMfMesh"), (() => {
          const qt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vt.l)(null, tt = {
            value: et
          }, Vt, {
            kind: "class",
            name: et.name,
            metadata: qt
          }, null, Ot), et = tt.value, qt && Object.defineProperty(et, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qt
          }), (0, vt.m)(et, Ot)
        })(), et
      })(),
      Id = (() => {
        let tt, et, Vt = [Pm({
            ns: qd,
            name: "vertices"
          })],
          Ot = [];
        et = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, vt.q)(et, "ThreeMfVertices"), (() => {
          const qt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vt.l)(null, tt = {
            value: et
          }, Vt, {
            kind: "class",
            name: et.name,
            metadata: qt
          }, null, Ot), et = tt.value, qt && Object.defineProperty(et, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qt
          }), (0, vt.m)(et, Ot)
        })(), et
      })(),
      Pd = (() => {
        let tt, et, Vt, Ot, qt, Dt = [Pm({
            ns: qd,
            name: "vertex"
          })],
          mt = [],
          dt = [],
          jt = [],
          Ht = [],
          Xt = [],
          Qt = [],
          lt = [];
        et = class {
          constructor() {
            let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, vt.m)(this, dt, void 0), this.y = ((0, vt.m)(this, jt), (0, vt.m)(this, Ht, void 0)), this.z = ((0, vt.m)(this, Xt), (0, vt.m)(this, Qt, void 0)), (0, vt.m)(this, lt), this.x = tt, this.y = et, this.z = Vt
          }
        };
        return (0, vt.q)(et, "ThreeMfVertex"), (() => {
          const Et = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Vt = [Lm({
            name: "x"
          })], Ot = [Lm({
            name: "y"
          })], qt = [Lm({
            name: "z"
          })], (0, vt.l)(null, null, Vt, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: tt => "x" in tt,
              get: tt => tt.x,
              set: (tt, et) => {
                tt.x = et
              }
            },
            metadata: Et
          }, dt, jt), (0, vt.l)(null, null, Ot, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: tt => "y" in tt,
              get: tt => tt.y,
              set: (tt, et) => {
                tt.y = et
              }
            },
            metadata: Et
          }, Ht, Xt), (0, vt.l)(null, null, qt, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: tt => "z" in tt,
              get: tt => tt.z,
              set: (tt, et) => {
                tt.z = et
              }
            },
            metadata: Et
          }, Qt, lt), (0, vt.l)(null, tt = {
            value: et
          }, Dt, {
            kind: "class",
            name: et.name,
            metadata: Et
          }, null, mt), et = tt.value, Et && Object.defineProperty(et, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Et
          }), (0, vt.m)(et, mt)
        })(), et
      })(),
      Zd = (() => {
        let tt, et, Vt = [Pm({
            ns: qd,
            name: "triangles"
          })],
          Ot = [];
        et = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, vt.q)(et, "ThreeMfTriangles"), (() => {
          const qt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vt.l)(null, tt = {
            value: et
          }, Vt, {
            kind: "class",
            name: et.name,
            metadata: qt
          }, null, Ot), et = tt.value, qt && Object.defineProperty(et, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qt
          }), (0, vt.m)(et, Ot)
        })(), et
      })(),
      Ld = (() => {
        let tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht = [Pm({
            ns: qd,
            name: "triangle"
          })],
          Xt = [],
          Qt = [],
          lt = [],
          Et = [],
          ft = [],
          wt = [],
          yt = [],
          Nt = [],
          Mt = [],
          bt = [],
          Jt = [],
          Ct = [],
          ut = [],
          Kt = [],
          ht = [];
        et = class {
          constructor(tt, et, Vt) {
            this.v1 = (0, vt.m)(this, Qt, void 0), this.v2 = ((0, vt.m)(this, lt), (0, vt.m)(this, Et, void 0)), this.v3 = ((0, vt.m)(this, ft), (0, vt.m)(this, wt, void 0)), this.p1 = ((0, vt.m)(this, yt), (0, vt.m)(this, Nt, void 0)), this.p2 = ((0, vt.m)(this, Mt), (0, vt.m)(this, bt, void 0)), this.p3 = ((0, vt.m)(this, Jt), (0, vt.m)(this, Ct, void 0)), this.pid = ((0, vt.m)(this, ut), (0, vt.m)(this, Kt, void 0)), (0, vt.m)(this, ht), this.v1 = tt, this.v2 = et, this.v3 = Vt
          }
        };
        return (0, vt.q)(et, "ThreeMfTriangle"), (() => {
          const Wt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Vt = [Lm({
            name: "v1"
          })], Ot = [Lm({
            name: "v2"
          })], qt = [Lm({
            name: "v3"
          })], Dt = [Lm({
            name: "p1"
          })], mt = [Lm({
            name: "p2"
          })], dt = [Lm({
            name: "p3"
          })], jt = [Lm({
            name: "pid"
          })], (0, vt.l)(null, null, Vt, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: tt => "v1" in tt,
              get: tt => tt.v1,
              set: (tt, et) => {
                tt.v1 = et
              }
            },
            metadata: Wt
          }, Qt, lt), (0, vt.l)(null, null, Ot, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: tt => "v2" in tt,
              get: tt => tt.v2,
              set: (tt, et) => {
                tt.v2 = et
              }
            },
            metadata: Wt
          }, Et, ft), (0, vt.l)(null, null, qt, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: tt => "v3" in tt,
              get: tt => tt.v3,
              set: (tt, et) => {
                tt.v3 = et
              }
            },
            metadata: Wt
          }, wt, yt), (0, vt.l)(null, null, Dt, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: tt => "p1" in tt,
              get: tt => tt.p1,
              set: (tt, et) => {
                tt.p1 = et
              }
            },
            metadata: Wt
          }, Nt, Mt), (0, vt.l)(null, null, mt, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: tt => "p2" in tt,
              get: tt => tt.p2,
              set: (tt, et) => {
                tt.p2 = et
              }
            },
            metadata: Wt
          }, bt, Jt), (0, vt.l)(null, null, dt, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: tt => "p3" in tt,
              get: tt => tt.p3,
              set: (tt, et) => {
                tt.p3 = et
              }
            },
            metadata: Wt
          }, Ct, ut), (0, vt.l)(null, null, jt, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: tt => "pid" in tt,
              get: tt => tt.pid,
              set: (tt, et) => {
                tt.pid = et
              }
            },
            metadata: Wt
          }, Kt, ht), (0, vt.l)(null, tt = {
            value: et
          }, Ht, {
            kind: "class",
            name: et.name,
            metadata: Wt
          }, null, Xt), et = tt.value, Wt && Object.defineProperty(et, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wt
          }), (0, vt.m)(et, Xt)
        })(), et
      })(),
      Fd = (() => {
        let tt, et, Vt = [Pm({
            ns: qd,
            name: "components"
          })],
          Ot = [];
        et = class {
          constructor() {
            this.component = []
          }
        };
        return (0, vt.q)(et, "ThreeMfComponents"), (() => {
          const qt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vt.l)(null, tt = {
            value: et
          }, Vt, {
            kind: "class",
            name: et.name,
            metadata: qt
          }, null, Ot), et = tt.value, qt && Object.defineProperty(et, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qt
          }), (0, vt.m)(et, Ot)
        })(), et
      })(),
      kd = (() => {
        let tt, et, Vt, Ot, qt = [Pm({
            ns: qd,
            name: "component"
          })],
          Dt = [],
          mt = [],
          dt = [],
          jt = [],
          Ht = [];
        et = class {
          constructor(tt, et) {
            this.objectid = (0, vt.m)(this, mt, void 0), this.transform = ((0, vt.m)(this, dt), (0, vt.m)(this, jt, void 0)), (0, vt.m)(this, Ht), this.objectid = tt, this.transform = et
          }
        };
        return (0, vt.q)(et, "ThreeMfComponent"), (() => {
          const Xt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Vt = [Lm({
            name: "objectid"
          })], Ot = [Lm({
            name: "transform",
            formatter: Kd
          })], (0, vt.l)(null, null, Vt, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: tt => "objectid" in tt,
              get: tt => tt.objectid,
              set: (tt, et) => {
                tt.objectid = et
              }
            },
            metadata: Xt
          }, mt, dt), (0, vt.l)(null, null, Ot, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: tt => "transform" in tt,
              get: tt => tt.transform,
              set: (tt, et) => {
                tt.transform = et
              }
            },
            metadata: Xt
          }, jt, Ht), (0, vt.l)(null, tt = {
            value: et
          }, qt, {
            kind: "class",
            name: et.name,
            metadata: Xt
          }, null, Dt), et = tt.value, Xt && Object.defineProperty(et, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Xt
          }), (0, vt.m)(et, Dt)
        })(), et
      })(),
      Gd = (() => {
        let tt, et, Vt, Ot = [Pm({
            ns: qd,
            name: "basematerials"
          })],
          qt = [],
          Dt = [],
          mt = [];
        et = class {
          constructor(tt) {
            this.id = (0, vt.m)(this, Dt, void 0), this.base = ((0, vt.m)(this, mt), []), this.id = tt
          }
        };
        return (0, vt.q)(et, "ThreeMfBaseMaterials"), (() => {
          const dt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Vt = [Lm({
            name: "id"
          })], (0, vt.l)(null, null, Vt, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: tt => "id" in tt,
              get: tt => tt.id,
              set: (tt, et) => {
                tt.id = et
              }
            },
            metadata: dt
          }, Dt, mt), (0, vt.l)(null, tt = {
            value: et
          }, Ot, {
            kind: "class",
            name: et.name,
            metadata: dt
          }, null, qt), et = tt.value, dt && Object.defineProperty(et, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: dt
          }), (0, vt.m)(et, qt)
        })(), et
      })(),
      zd = (() => {
        let tt, et, Vt, Ot, qt = [Pm({
            ns: qd,
            name: "base"
          })],
          Dt = [],
          mt = [],
          dt = [],
          jt = [],
          Ht = [];
        et = class {
          constructor(tt, et) {
            this.name = (0, vt.m)(this, mt, void 0), this.displaycolor = ((0, vt.m)(this, dt), (0, vt.m)(this, jt, void 0)), (0, vt.m)(this, Ht), this.name = tt, this.displaycolor = et
          }
        };
        return (0, vt.q)(et, "ThreeMfBase"), (() => {
          const Xt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Vt = [Lm({
            name: "name"
          })], Ot = [Lm({
            name: "displaycolor"
          })], (0, vt.l)(null, null, Vt, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: tt => "name" in tt,
              get: tt => tt.name,
              set: (tt, et) => {
                tt.name = et
              }
            },
            metadata: Xt
          }, mt, dt), (0, vt.l)(null, null, Ot, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: tt => "displaycolor" in tt,
              get: tt => tt.displaycolor,
              set: (tt, et) => {
                tt.displaycolor = et
              }
            },
            metadata: Xt
          }, jt, Ht), (0, vt.l)(null, tt = {
            value: et
          }, qt, {
            kind: "class",
            name: et.name,
            metadata: Xt
          }, null, Dt), et = tt.value, Xt && Object.defineProperty(et, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Xt
          }), (0, vt.m)(et, Dt)
        })(), et
      })(),
      od = (() => {
        let tt, et, Vt = [Pm({
            ns: qd,
            name: "build"
          })],
          Ot = [];
        et = class {
          constructor() {
            this.item = []
          }
        };
        return (0, vt.q)(et, "ThreeMfBuild"), (() => {
          const qt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vt.l)(null, tt = {
            value: et
          }, Vt, {
            kind: "class",
            name: et.name,
            metadata: qt
          }, null, Ot), et = tt.value, qt && Object.defineProperty(et, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qt
          }), (0, vt.m)(et, Ot)
        })(), et
      })(),
      rd = (() => {
        let tt, et, Vt, Ot, qt, Dt = [Pm({
            ns: qd,
            name: "item"
          })],
          mt = [],
          dt = [],
          jt = [],
          Ht = [],
          Xt = [],
          Qt = [],
          lt = [];
        et = class {
          constructor(tt, et, Vt) {
            this.objectid = (0, vt.m)(this, dt, void 0), this.transform = ((0, vt.m)(this, jt), (0, vt.m)(this, Ht, void 0)), this.partnumber = ((0, vt.m)(this, Xt), (0, vt.m)(this, Qt, void 0)), this.metadatagroup = (0, vt.m)(this, lt), this.objectid = tt, this.transform = et, this.partnumber = Vt
          }
        };
        return (0, vt.q)(et, "ThreeMfItem"), (() => {
          const Et = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Vt = [Lm({
            name: "objectid"
          })], Ot = [Lm({
            name: "transform",
            formatter: Kd
          })], qt = [Lm({
            name: "partnumber"
          })], (0, vt.l)(null, null, Vt, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: tt => "objectid" in tt,
              get: tt => tt.objectid,
              set: (tt, et) => {
                tt.objectid = et
              }
            },
            metadata: Et
          }, dt, jt), (0, vt.l)(null, null, Ot, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: tt => "transform" in tt,
              get: tt => tt.transform,
              set: (tt, et) => {
                tt.transform = et
              }
            },
            metadata: Et
          }, Ht, Xt), (0, vt.l)(null, null, qt, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: tt => "partnumber" in tt,
              get: tt => tt.partnumber,
              set: (tt, et) => {
                tt.partnumber = et
              }
            },
            metadata: Et
          }, Qt, lt), (0, vt.l)(null, tt = {
            value: et
          }, Dt, {
            kind: "class",
            name: et.name,
            metadata: Et
          }, null, mt), et = tt.value, Et && Object.defineProperty(et, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Et
          }), (0, vt.m)(et, mt)
        })(), et
      })();
    class Ud {
      constructor(tt, et) {
        this._object = new cd(tt, et)
      }
      withName(tt) {
        return this._object.name = tt, this
      }
      withThumbnail(tt) {
        return this._object.thumbnail = tt, this
      }
      withProperty(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = tt, this._object.id = et, this
      }
      build() {
        return this._object
      }
      reset(tt, et) {
        this._object = new cd(tt, et)
      }
    }
    class Ad extends Ud {
      constructor(tt) {
        super(tt, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd.model), this._object.content = new Fd
      }
      withComponent(tt, et) {
        return this._object.content.component.push(new kd(tt, et)), this
      }
    }
    class Yd extends Ud {
      constructor(tt) {
        super(tt, dd.model)
      }
      withPostProcessHandlers(tt, et) {
        return this._vh = tt, this._th = et, this
      }
      withData(tt) {
        return this._object.content = this._buildMesh(tt), this
      }
      withMaterial(tt, et) {
        return this._object.pid = tt, this._object.pindex = et, this
      }
      _buildMesh(tt) {
        const et = this._buildVertices(tt.positions),
          Vt = this._buildTriangle(tt.indices);
        return new Rd(et, Vt)
      }
      _buildVertices(tt) {
        const et = new Id;
        if (tt)
          for (let Vt = 0; Vt < tt.length;) {
            const Ot = tt[Vt++],
              qt = tt[Vt++],
              Dt = tt[Vt++];
            let mt = new Pd(Ot, qt, Dt);
            this._vh && (mt = this._vh(mt)), et.vertex.push(mt)
          }
        return et
      }
      _buildTriangle(tt) {
        const et = new Zd;
        if (tt)
          for (let Vt = 0; Vt < tt.length;) {
            const Ot = tt[Vt++],
              qt = tt[Vt++],
              Dt = tt[Vt++];
            let mt = new Ld(Ot, qt, Dt);
            this._th && (mt = this._th(mt)), et.triangle.push(mt)
          }
        return et
      }
    }
    class Bd {
      constructor(tt) {
        this._m = new Gd(tt)
      }
      withColor(tt, et) {
        this._m.base = this._m.base ?? [];
        let Vt = this._m.base.find((et => et.name.toLowerCase() === tt.toLowerCase()));
        return Vt ? (Vt.displaycolor = this._rgbaToHex(et), this) : (Vt = new zd(tt, this._rgbaToHex(et)), this._m.base.push(Vt), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(tt) {
        const et = tt => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(tt, 1 / 2.2)))),
          Vt = et(tt.r).toString(16).padStart(2, "0").toUpperCase(),
          Ot = et(tt.g).toString(16).padStart(2, "0").toUpperCase(),
          qt = et(tt.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof tt.a) {
          return `#${Vt}${Ot}${qt}${Math.round(Math.min(255,Math.max(0,255*tt.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${Vt}${Ot}${qt}`
      }
    }
    class pd {
      constructor() {
        this._model = new hd, this._objects = new Map
      }
      withMetaData(tt, et, Vt, Ot) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new vd(tt, et, Vt, Ot)), this
      }
      withMaterial(tt) {
        return tt instanceof Bd && (tt = tt.build()), tt && (this._model.resources = this._model.resources ?? new Sd, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(tt)), this
      }
      withMesh(tt) {
        return tt instanceof Yd && (tt = tt.build()), this._model.resources = this._model.resources ?? new Sd, this._model.resources.object.push(tt), this
      }
      withComponents(tt) {
        return tt instanceof Ad && (tt = tt.build()), this._model.resources = this._model.resources ?? new Sd, this._model.resources.object.push(tt), this
      }
      withBuild(tt, et, Vt) {
        return this._model.build = this._model.build ?? new od, this._model.build.item?.push(new rd(tt, et, Vt)), this
      }
      withUnit(tt) {
        return this._model.unit = tt, this
      }
      reset() {
        return this._model = new hd, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    pd.KnownMetaSet = new Set(hd.KnownMeta.map((tt => tt.toLowerCase())));
    class xd {
      withContentType(tt) {
        this._cts || (this._cts = new Nd);
        const et = this._cts.items;
        return et.some((et => et.ext === tt.ext && et.ct === tt.ct)) || et.push(tt), this
      }
      withRelationship(tt) {
        this._rs || (this._rs = new bd);
        const et = this._rs.items;
        return et.some((et => et.id === tt.id)) || et.push(tt), this.withContentType(new Md("rels", Xd.Relationships)), this
      }
      withModel(tt) {
        return tt instanceof pd && (tt = tt.build()), this._m = tt, this.withContentType(new Md("model", Xd.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const tt = `${ld}${Ed}`;
        if (!this._rs) {
          const et = `/${tt}`;
          this.withRelationship(new Jd("rel0", yd.ThreeDimModel, et))
        }
        return new Cd(this._cts, this._rs, this._m)
      }
    }
    class Td {
      constructor(tt) {
        this._o = tt
      }
      get options() {
        return this._o
      }
      async serializeAsync(tt) {
        const et = await this.ensureZipLibReadyAsync();
        if (!et) return;
        const Vt = et.Zip,
          Ot = et.ZipDeflate;
        if (!Vt || !Ot) throw new Error("fflate Zip / ZipDeflate not available");
        const qt = function(tt, et, Vt) {
          const qt = new Ot(et, {
            level: 6
          });
          tt.add(qt);
          const Dt = function(tt) {
              return {
                push: (et, Vt) => tt.push(et, Vt)
              }
            }(qt),
            mt = new Od(Dt),
            dt = new ed(mt).dec("1.0", "UTF-8");
          new sm(dt).serialize(Vt), mt.finish()
        };
        for (var Dt = arguments.length, mt = new Array(Dt > 1 ? Dt - 1 : 0), dt = 1; dt < Dt; dt++) mt[dt - 1] = arguments[dt];
        const jt = this.toDocument(...mt);
        if (!jt) return;
        const Ht = new Vt(tt);
        qt(Ht, wd, jt.contentTypes), qt(Ht, `${Qd}${fd}`, jt.relationships), qt(Ht, `${ld}${Ed}`, jt.model), Ht.end()
      }
      toDocument() {
        const tt = (new pd).withUnit(this._o?.unit ?? md.millimeter);
        if (this.options.metadata)
          for (const qt in this.options.metadata) tt.withMetaData(qt, this.options.metadata[qt]);
        for (var et = arguments.length, Vt = new Array(et), Ot = 0; Ot < et; Ot++) Vt[Ot] = arguments[Ot];
        return (new xd).withModel(this.toModel(tt, ...Vt)).build()
      }
    }
    class gd {
      static async SerializeToMemoryAsync(tt) {
        const et = new Array;
        let Vt = 0;
        for (var Ot = arguments.length, qt = new Array(Ot > 1 ? Ot - 1 : 0), Dt = 1; Dt < Ot; Dt++) qt[Dt - 1] = arguments[Dt];
        if (await tt.serializeAsync((function(tt, Ot, qt) {
            et.push(Ot), Vt += Ot.length
          }), ...qt), !Vt) return;
        const mt = new Uint8Array(Vt);
        let dt = 0;
        for (const jt of et) mt.set(jt, dt), dt += jt.length;
        return mt
      }
    }
    class sd {}
    sd.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class nd {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = tt, this._to = et, this._step = Vt, this._i = tt
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const tt = this._i;
        return this._i += this._step, tt
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class tj extends Td {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...tj.DefaultOptions,
          ...tt
        })
      }
      toModel(tt) {
        for (var et = arguments.length, Vt = new Array(et > 1 ? et - 1 : 0), Ot = 1; Ot < et; Ot++) Vt[Ot - 1] = arguments[Ot];
        Vt = Vt.filter((tt => tt instanceof XO.b || tt instanceof Et.e));
        const qt = new nd,
          Dt = tt,
          mt = new Map,
          dt = this.options.exportInstances ? [] : null;
        for (let jt = 0; jt < Vt.length; jt++) {
          const tt = Vt[jt];
          if (tt instanceof Et.e) {
            dt?.push(tt);
            continue
          }
          const et = tt.name || `mesh${jt}`,
            Ot = tt.getWorldMatrix(),
            Ht = this._handleBabylonTo3mfMatrixTransformToRef(Ot, ud.Zero()),
            Xt = tt.vJ;
          if (void 0 === Xt) continue;
          const Qt = 1 == Xt.length;
          for (let Vt = 0; Vt < Xt.length; Vt++) {
            const Ot = Xt[Vt],
              dt = this._extractSubMesh(tt, Ot);
            if (dt) {
              const tt = Qt ? `${et}` : `${et}_${Vt}`,
                jt = new Yd(qt.next()).withData(dt).withName(tt).build();
              Dt.withMesh(jt), Dt.withBuild(jt.id, Ht), mt.set(Ot, jt)
            }
          }
        }
        if (dt && dt.length) {
          const tt = this._groupBy(dt, (tt => tt.Rqt));
          for (const [et, Vt] of Array.from(tt.entries()))
            if (Vt && Vt.length)
              for (let tt = 0; tt < Vt.length; tt++) {
                const Ot = Vt[tt].getWorldMatrix(),
                  qt = et.vJ;
                for (let tt = 0; tt < qt.length; tt++) {
                  const et = qt[tt],
                    Vt = mt.get(et);
                  Vt && Dt.withBuild(Vt.id, this._handleBabylonTo3mfMatrixTransformToRef(Ot, ud.Zero()))
                }
              }
        }
        return Dt.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const tt = globalThis;
          return tt.fflate || await qt.Tools.LoadScriptAsync(sd.FFLATEUrl), tt.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(tt, et) {
        const Vt = tt.zOt();
        if (!Vt) return;
        const Ot = tt.getVerticesData(tj._PositionKind);
        if (!Ot) return;
        if (0 == et.indexStart && et.indexCount == Vt.length) return {
          positions: Ot,
          indices: Vt
        };
        const qt = et.indexStart,
          Dt = new Map,
          mt = [],
          dt = new Uint32Array(et.indexCount);
        for (let jt = 0; jt < et.indexCount; jt++) {
          const tt = Vt[qt + jt];
          let et = Dt.get(tt);
          if (void 0 === et) {
            et = Dt.size, Dt.set(tt, et);
            const Vt = 3 * tt;
            mt.push(Ot[Vt], Ot[Vt + 1], Ot[Vt + 2])
          }
          dt[jt] = et
        }
        return {
          positions: new Float32Array(mt),
          indices: dt
        }
      }
      _groupBy(tt, et) {
        const Vt = new Map;
        for (const Ot of tt) {
          const tt = et(Ot),
            qt = Vt.get(tt);
          qt ? qt.push(Ot) : Vt.set(tt, [Ot])
        }
        return Vt
      }
      _handleBabylonTo3mfMatrixTransformToRef(tt, et) {
        const Vt = tt.multiplyToRef(tj._R_BJS_TO_3MF, zt.c.Zero()).m;
        return et.values = [Vt[0], Vt[1], Vt[2], Vt[4], Vt[5], Vt[6], Vt[8], Vt[9], Vt[10], Vt[12], Vt[13], Vt[14]], et
      }
    }
    tj.DefaultOptions = {
      unit: md.meter,
      exportInstances: !1
    }, tj._PositionKind = "position", tj._R_BJS_TO_3MF = zt.c.RotationX(Math.PI / 2).multiply(zt.c.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);