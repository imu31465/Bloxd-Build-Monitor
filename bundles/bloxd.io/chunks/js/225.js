export const id = 225;
export const ids = [225, 230];
export const modules = {
  41148: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => gv
    });
    var hv = Pv(41067),
      Sv = Pv(39287);
    let ev = !1;

    function gv() {
      ev || (ev = !0, Sv.e.prototype._sphericalPolynomialTargetSize = 0, Sv.e.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Sv.e.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = hv.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((vv => {
              this._texture._sphericalPolynomial = vv, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(vv) {
          this._texture && (this._texture._sphericalPolynomial = vv)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  36745: (vv, zv, Pv) => {
    Pv.d(zv, {
      Color3: () => hv.b,
      d: () => hv.e
    });
    var hv = Pv(36751);
    (0, hv.h)()
  },
  37290: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv
    });
    var hv = Pv(37293);
    class Sv {
      static GetPlanes(vv) {
        const zv = [];
        for (let Pv = 0; Pv < 6; Pv++) zv.push(new hv.b(0, 0, 0, 0));
        return Sv.GetPlanesToRef(vv, zv), zv
      }
      static GetNearPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] + Pv[2], zv.normal.y = Pv[7] + Pv[6], zv.normal.z = Pv[11] + Pv[10], zv.d = Pv[15] + Pv[14], zv.normalize()
      }
      static GetFarPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] - Pv[2], zv.normal.y = Pv[7] - Pv[6], zv.normal.z = Pv[11] - Pv[10], zv.d = Pv[15] - Pv[14], zv.normalize()
      }
      static GetLeftPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] + Pv[0], zv.normal.y = Pv[7] + Pv[4], zv.normal.z = Pv[11] + Pv[8], zv.d = Pv[15] + Pv[12], zv.normalize()
      }
      static GetRightPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] - Pv[0], zv.normal.y = Pv[7] - Pv[4], zv.normal.z = Pv[11] - Pv[8], zv.d = Pv[15] - Pv[12], zv.normalize()
      }
      static GetTopPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] - Pv[1], zv.normal.y = Pv[7] - Pv[5], zv.normal.z = Pv[11] - Pv[9], zv.d = Pv[15] - Pv[13], zv.normalize()
      }
      static GetBottomPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] + Pv[1], zv.normal.y = Pv[7] + Pv[5], zv.normal.z = Pv[11] + Pv[9], zv.d = Pv[15] + Pv[13], zv.normalize()
      }
      static GetPlanesToRef(vv, zv) {
        Sv.GetNearPlaneToRef(vv, zv[0]), Sv.GetFarPlaneToRef(vv, zv[1]), Sv.GetLeftPlaneToRef(vv, zv[2]), Sv.GetRightPlaneToRef(vv, zv[3]), Sv.GetTopPlaneToRef(vv, zv[4]), Sv.GetBottomPlaneToRef(vv, zv[5])
      }
      static IsPointInFrustum(vv, zv) {
        for (let Pv = 0; Pv < 6; Pv++)
          if (zv[Pv].dotCoordinate(vv) < 0) return !1;
        return !0
      }
    }
  },
  37293: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv
    });
    var hv = Pv(36594);
    class Sv {
      constructor(vv, zv, Pv, Sv) {
        this.normal = new hv.l(vv, zv, Pv), this.d = Sv
      }
      pPv() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Sv(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let vv = this.normal.getHashCode();
        return vv = 397 * vv ^ this.d, vv
      }
      normalize() {
        const vv = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let zv = 0;
        return 0 !== vv && (zv = 1 / vv), this.normal.x *= zv, this.normal.y *= zv, this.normal.z *= zv, this.d *= zv, this
      }
      transform(vv) {
        const zv = Sv._TmpMatrix;
        vv.invertToRef(zv);
        const Pv = zv.m,
          hv = this.normal.x,
          ev = this.normal.y,
          gv = this.normal.z,
          pv = this.d,
          dv = hv * Pv[0] + ev * Pv[1] + gv * Pv[2] + pv * Pv[3],
          Nv = hv * Pv[4] + ev * Pv[5] + gv * Pv[6] + pv * Pv[7],
          lv = hv * Pv[8] + ev * Pv[9] + gv * Pv[10] + pv * Pv[11],
          Tv = hv * Pv[12] + ev * Pv[13] + gv * Pv[14] + pv * Pv[15];
        return new Sv(dv, Nv, lv, Tv)
      }
      dotCoordinate(vv) {
        return this.normal.x * vv.x + this.normal.y * vv.y + this.normal.z * vv.z + this.d
      }
      copyFromPoints(vv, zv, Pv) {
        const hv = zv.x - vv.x,
          Sv = zv.y - vv.y,
          ev = zv.z - vv.z,
          gv = Pv.x - vv.x,
          pv = Pv.y - vv.y,
          dv = Pv.z - vv.z,
          Nv = Sv * dv - ev * pv,
          lv = ev * gv - hv * dv,
          Tv = hv * pv - Sv * gv,
          Wv = Math.sqrt(Nv * Nv + lv * lv + Tv * Tv);
        let wv;
        return wv = 0 !== Wv ? 1 / Wv : 0, this.normal.x = Nv * wv, this.normal.y = lv * wv, this.normal.z = Tv * wv, this.d = -(this.normal.x * vv.x + this.normal.y * vv.y + this.normal.z * vv.z), this
      }
      isFrontFacingTo(vv, zv) {
        return hv.l.Dot(this.normal, vv) <= zv
      }
      signedDistanceTo(vv) {
        return hv.l.Dot(vv, this.normal) + this.d
      }
      static FromArray(vv) {
        return new Sv(vv[0], vv[1], vv[2], vv[3])
      }
      static FromPoints(vv, zv, Pv) {
        const hv = new Sv(0, 0, 0, 0);
        return hv.copyFromPoints(vv, zv, Pv), hv
      }
      static FromPositionAndNormal(vv, zv) {
        const Pv = new Sv(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(vv, zv, Pv)
      }
      static FromPositionAndNormalToRef(vv, zv, Pv) {
        return Pv.normal.Vzv(zv), Pv.normal.normalize(), Pv.d = -vv.dot(Pv.normal), Pv
      }
      static SignedDistanceToPlaneFromPositionAndNormal(vv, zv, Pv) {
        const Sv = -(zv.x * vv.x + zv.y * vv.y + zv.z * vv.z);
        return hv.l.Dot(Pv, zv) + Sv
      }
    }
    Sv._TmpMatrix = hv.c.Identity()
  },
  36591: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      Matrix: () => hv.c,
      Quaternion: () => hv.d,
      RegisterMathVector: () => hv.e,
      TmpVectors: () => hv.i,
      Vector2: () => hv.j,
      fa: () => hv.l,
      Vector4: () => hv.m
    });
    var hv = Pv(36594);
    (0, hv.e)()
  },
  37633: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    class hv {
      constructor(vv, zv, Pv, hv) {
        this.x = vv, this.y = zv, this.width = Pv, this.height = hv
      }
      toGlobal(vv, zv) {
        return new hv(this.x * vv, this.y * zv, this.width * vv, this.height * zv)
      }
      toGlobalToRef(vv, zv, Pv) {
        return Pv.x = this.x * vv, Pv.y = this.y * zv, Pv.width = this.width * vv, Pv.height = this.height * zv, this
      }
      clone() {
        return new hv(this.x, this.y, this.width, this.height)
      }
    }
  },
  41067: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Nv
    });
    var hv = Pv(36594),
      Sv = Pv(36620),
      ev = Pv(39284),
      gv = Pv(36599),
      pv = Pv(36751);
    class dv {
      constructor(vv, zv, Pv, hv) {
        this.name = vv, this.worldAxisForNormal = zv, this.worldAxisForFileX = Pv, this.worldAxisForFileY = hv
      }
    }
    class Nv {
      static _NearestPow2Floor(vv) {
        return vv <= 1 ? 1 : 1 << Math.floor(Math.log2(vv))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(vv) {
        if (!vv.isCube) return null;
        vv.rD()?.ma().flushFramebuffer();
        const zv = vv.getSize().width,
          Pv = vv._sphericalPolynomialTargetSize,
          hv = Pv > 0 ? this._NearestPow2Floor(Pv) : 0,
          Sv = !vv.noMipmap && !0 === vv._texture?.generateMipMaps,
          ev = hv > 0 && hv < zv && Sv,
          gv = ev ? Math.max(0, Math.round(Math.log2(zv / hv))) : 0,
          pv = ev ? Math.max(1, Math.floor(zv / Math.pow(2, gv))) : zv,
          dv = vv.readPixels(0, gv, void 0, !1),
          Nv = vv.readPixels(1, gv, void 0, !1);
        let lv, Tv;
        vv.isRenderTarget ? (lv = vv.readPixels(3, gv, void 0, !1), Tv = vv.readPixels(2, gv, void 0, !1)) : (lv = vv.readPixels(2, gv, void 0, !1), Tv = vv.readPixels(3, gv, void 0, !1));
        const Wv = vv.readPixels(4, gv, void 0, !1),
          wv = vv.readPixels(5, gv, void 0, !1),
          av = vv.gammaSpace,
          sv = hv > 0 && hv < zv && !ev;
        return new Promise((vv => {
          Promise.all([Nv, dv, lv, Tv, Wv, wv]).then((Pv => {
            let [Sv, ev, gv, dv, Nv, lv] = Pv, Tv = pv;
            if (sv) {
              const vv = 4;
              Sv = this._DownsampleFace(Sv, zv, hv, vv), ev = this._DownsampleFace(ev, zv, hv, vv), gv = this._DownsampleFace(gv, zv, hv, vv), dv = this._DownsampleFace(dv, zv, hv, vv), Nv = this._DownsampleFace(Nv, zv, hv, vv), lv = this._DownsampleFace(lv, zv, hv, vv), Tv = hv
            }
            const Wv = {
              size: Tv,
              right: ev,
              left: Sv,
              up: gv,
              down: dv,
              front: Nv,
              back: lv,
              format: 5,
              type: Sv instanceof Float32Array ? 1 : 0,
              gammaSpace: av
            };
            vv(this.ConvertCubeMapToSphericalPolynomial(Wv))
          }))
        }))
      }
      static _AreaElement(vv, zv) {
        return Math.atan2(vv * zv, Math.sqrt(vv * vv + zv * zv + 1))
      }
      static _DownsampleFace(vv, zv, Pv, hv) {
        const Sv = vv instanceof Float32Array ? vv : Float32Array.from(vv),
          ev = Pv * Pv * hv,
          gv = new Float32Array(ev),
          pv = zv / Pv,
          dv = 1 / (pv * pv);
        for (let lv = 0; lv < Pv; lv++) {
          const vv = Math.floor(lv * pv),
            ev = Math.floor((lv + 1) * pv);
          for (let Nv = 0; Nv < Pv; Nv++) {
            const Tv = Math.floor(Nv * pv),
              Wv = Math.floor((Nv + 1) * pv),
              wv = (lv * Pv + Nv) * hv;
            for (let Pv = 0; Pv < hv; Pv++) {
              let pv = 0;
              for (let gv = vv; gv < ev; gv++)
                for (let vv = Tv; vv < Wv; vv++) pv += Sv[(gv * zv + vv) * hv + Pv];
              gv[wv + Pv] = pv * dv
            }
          }
        }
        if (vv instanceof Float32Array) return gv;
        const Nv = new(0, vv.constructor)(ev);
        for (let lv = 0; lv < ev; lv++) Nv[lv] = gv[lv] + .5 | 0;
        return Nv
      }
      static ConvertCubeMapToSphericalPolynomial(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Pv = zv > 0 ? this._NearestPow2Floor(zv) : 0;
        if (Pv > 0 && vv.size > Pv) {
          const zv = 5 === vv.format ? 4 : 3,
            hv = ["right", "left", "up", "down", "front", "back"],
            Sv = {};
          for (const ev of hv) Sv[ev] = this._DownsampleFace(vv[ev], vv.size, Pv, zv);
          vv = {
            ...vv,
            ...Sv,
            size: Pv
          }
        }
        const hv = new ev.d;
        let dv = 0;
        const Nv = 2 / vv.size,
          lv = Nv,
          Tv = .5 * Nv,
          Wv = Tv - 1;
        for (let ev = 0; ev < 6; ev++) {
          const zv = this._FileFaces[ev],
            Pv = vv[zv.name];
          let wv = Wv;
          const av = 5 === vv.format ? 4 : 3;
          for (let ev = 0; ev < vv.size; ev++) {
            let sv = Wv;
            for (let lv = 0; lv < vv.size; lv++) {
              const Wv = zv.worldAxisForFileX.scale(sv).add(zv.worldAxisForFileY.scale(wv)).add(zv.worldAxisForNormal);
              Wv.normalize();
              const Cv = this._AreaElement(sv - Tv, wv - Tv) - this._AreaElement(sv - Tv, wv + Tv) - this._AreaElement(sv + Tv, wv - Tv) + this._AreaElement(sv + Tv, wv + Tv);
              let iv = Pv[ev * vv.size * av + lv * av + 0],
                cv = Pv[ev * vv.size * av + lv * av + 1],
                Gv = Pv[ev * vv.size * av + lv * av + 2];
              isNaN(iv) && (iv = 0), isNaN(cv) && (cv = 0), isNaN(Gv) && (Gv = 0), 0 === vv.type && (iv /= 255, cv /= 255, Gv /= 255), vv.gammaSpace && (iv = Math.pow((0, Sv.Clamp)(iv), gv.h), cv = Math.pow((0, Sv.Clamp)(cv), gv.h), Gv = Math.pow((0, Sv.Clamp)(Gv), gv.h));
              const mv = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const vv = Math.max(iv, cv, Gv);
                if (vv > mv) {
                  const zv = mv / vv;
                  iv *= zv, cv *= zv, Gv *= zv
                }
              } else iv = (0, Sv.Clamp)(iv, 0, mv), cv = (0, Sv.Clamp)(cv, 0, mv), Gv = (0, Sv.Clamp)(Gv, 0, mv);
              const jv = new pv.b(iv, cv, Gv);
              hv.addLight(Wv, jv, Cv), dv += Cv, sv += Nv
            }
            wv += lv
          }
        }
        const wv = 6 * (4 * Math.PI) / 6 / dv;
        return hv.scaleInPlace(wv), hv.convertIncidentRadianceToIrradiance(), hv.convertIrradianceToLambertianRadiance(), ev.f.FromHarmonics(hv)
      }
    }
    Nv._FileFaces = [new dv("right", new hv.l(1, 0, 0), new hv.l(0, 0, -1), new hv.l(0, -1, 0)), new dv("left", new hv.l(-1, 0, 0), new hv.l(0, 0, 1), new hv.l(0, -1, 0)), new dv("up", new hv.l(0, 1, 0), new hv.l(1, 0, 0), new hv.l(0, 0, 1)), new dv("down", new hv.l(0, -1, 0), new hv.l(1, 0, 0), new hv.l(0, 0, -1)), new dv("front", new hv.l(0, 0, 1), new hv.l(1, 0, 0), new hv.l(0, -1, 0)), new dv("back", new hv.l(0, 0, -1), new hv.l(-1, 0, 0), new hv.l(0, -1, 0))], Nv.MAX_HDRI_VALUE = 4096, Nv.PRESERVE_CLAMPED_COLORS = !1
  },
  40846: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => hv.i,
      e: () => hv.n
    });
    var hv = Pv(39338);
    (0, hv.v)()
  },
  37431: (vv, zv, Pv) => {
    function hv() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (vv => {
        const zv = 16 * Math.random() | 0;
        return ("x" === vv ? zv : 3 & zv | 8).toString(16)
      }))
    }
    Pv.d(zv, {
      b: () => hv
    })
  },
  41109: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev
    });
    var hv = Pv(41097),
      Sv = Pv(41118);
    class ev {
      static ExpandRGBDTexture(vv) {
        const zv = vv._texture;
        if (!zv || !vv.isRGBD) return;
        const Sv = zv.ma(),
          ev = Sv.getCaps(),
          gv = zv.isReady;
        let pv = !1;
        ev.textureHalfFloatRender && ev.textureHalfFloatLinearFiltering ? (pv = !0, zv.type = 2) : ev.textureFloatRender && ev.textureFloatLinearFiltering && (pv = !0, zv.type = 1), pv && (zv.isReady = !1, zv._isRGBD = !1, zv.invertY = !1);
        const dv = async () => {
          const ev = Sv.isWebGPU,
            gv = ev ? 1 : 0;
          zv.isReady = !1, ev ? await Pv.e(333).then((() => Pv(60803))) : await Pv.e(315).then((() => Pv(60807)));
          const pv = new hv.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Sv, !1, void 0, zv.type, void 0, null, !1, void 0, gv);
          pv.externalTextureSamplerBinding = !0;
          const dv = Sv.createRenderTargetTexture(zv.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: zv.samplingMode,
            type: zv.type,
            format: 5
          });
          pv.onEffectCreatedObservable.addOnce((Pv => {
            Pv.executeWhenCompiled((() => {
              pv.onApply = vv => {
                vv._bindTexture("textureSampler", zv), vv.setFloat2("scale", 1, 1)
              }, vv.rD()?.postProcessManager.directRender([pv], dv, !0), Sv.restoreDefaultFramebuffer(), Sv._releaseTexture(zv), pv && pv.dispose(), dv._swapAndDie(zv), zv.isReady = !0
            }))
          }))
        };
        pv && (gv ? dv() : vv.onLoadObservable.addOnce(dv))
      }
      static async EncodeTextureToRGBD(vv, zv) {
        let hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return zv.ma().isWebGPU ? await Pv.e(334).then((() => Pv(60827))) : await Pv.e(316).then((() => Pv(60818))), await (0, Sv.b)("rgbdEncode", vv, zv, hv, 1, 5)
      }
    }
  },
  60565: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      AsyncLoop: () => hv.d,
      RegisterTools: () => hv.e,
      Tools: () => hv.h,
      className: () => hv.i
    });
    var hv = Pv(39399);
    (0, hv.e)()
  },
  41174: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv
    });
    class hv {
      constructor(vv) {
        this._pendingActions = new Array, this._workerInfos = vv.map((vv => ({
          workerPromise: Promise.resolve(vv),
          idle: !0
        })))
      }
      dispose() {
        for (const vv of this._workerInfos) vv.workerPromise.then((vv => {
          vv.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(vv) {
        this._executeOnIdleWorker(vv) || this._pendingActions.push(vv)
      }
      _executeOnIdleWorker(vv) {
        for (const zv of this._workerInfos)
          if (zv.idle) return this._execute(zv, vv), !0;
        return !1
      }
      _execute(vv, zv) {
        vv.idle = !1, vv.workerPromise.then((Pv => {
          zv(Pv, (() => {
            const zv = this._pendingActions.shift();
            zv ? this._execute(vv, zv) : vv.idle = !0
          }))
        }))
      }
    }
    class Sv extends hv {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Sv.DefaultOptions;
        super([]), this._maxWorkers = vv, this._createWorkerAsync = zv, this._options = Pv
      }
      push(vv) {
        if (!this._executeOnIdleWorker(vv))
          if (this._workerInfos.length < this._maxWorkers) {
            const zv = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(zv), this._execute(zv, vv)
          } else this._pendingActions.push(vv)
      }
      _execute(vv, zv) {
        vv.timeoutId && (clearTimeout(vv.timeoutId), delete vv.timeoutId), super._execute(vv, ((Pv, hv) => {
          zv(Pv, (() => {
            hv(), vv.idle && (vv.timeoutId = setTimeout((() => {
              vv.workerPromise.then((vv => {
                vv.terminate()
              }));
              const zv = this._workerInfos.indexOf(vv); - 1 !== zv && this._workerInfos.splice(zv, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Sv.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  60598: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      AbstractThreeMfSerializer: () => Jp,
      BVHExporter: () => ng,
      ContentTypeFileName: () => wp,
      DefaultXmlSerializerFormatOptions: () => Hg,
      DefaultXmlSerializerNumberOptions: () => Lg,
      EXT_lights_area: () => CS,
      EXT_mesh_gpu_instancing: () => Zh,
      EXT_texture_avif: () => Sg,
      EXT_texture_webp: () => vg,
      GLTF2Export: () => qh,
      GLTFData: () => Nv,
      GetXmlFieldMeta: () => qg,
      GetXmlName: () => Ig,
      IsQualifiedName: () => Og,
      KHR_draco_mesh_compression: () => kh,
      KHR_interactivity: () => NS,
      KHR_lights_punctual: () => eS,
      KHR_materials_anisotropy: () => mS,
      KHR_materials_clearcoat: () => nS,
      KHR_materials_coat: () => RS,
      KHR_materials_diffuse_roughness: () => Ie,
      KHR_materials_diffuse_transmission: () => ZS,
      KHR_materials_dispersion: () => MS,
      KHR_materials_emissive_strength: () => ES,
      KHR_materials_fuzz: () => le,
      KHR_materials_ior: () => kS,
      KHR_materials_iridescence: () => ze,
      KHR_materials_openpbr: () => Le,
      KHR_materials_sheen: () => ee,
      KHR_materials_specular: () => ae,
      KHR_materials_transmission: () => ce,
      KHR_materials_unlit: () => Fe,
      KHR_materials_volume: () => De,
      KHR_materials_volume_scatter: () => Re,
      KHR_texture_basisu: () => re,
      KHR_texture_transform: () => Be,
      Known3mfRelationshipTypes: () => ap,
      KnownI3mfContentType: () => dp,
      Matrix3d: () => mp,
      MatrixFormatter: () => jp,
      ModelFileName: () => Tp,
      NumberFormatter: () => Bg,
      OBJExport: () => gv,
      Object3dDirName: () => lp,
      OpenXmlContentTypesNamespace: () => gp,
      OpenXmlRelationshipsNamespace: () => pp,
      RegisterEXT_lights_area: () => cS,
      RegisterEXT_mesh_gpu_instancing: () => Lh,
      RegisterEXT_texture_avif: () => gg,
      RegisterEXT_texture_webp: () => Pg,
      RegisterKHR_draco_mesh_compression: () => uh,
      RegisterKHR_interactivity: () => TS,
      RegisterKHR_lights_punctual: () => pS,
      RegisterKHR_materials_anisotropy: () => fS,
      RegisterKHR_materials_clearcoat: () => DS,
      RegisterKHR_materials_coat: () => tS,
      RegisterKHR_materials_diffuse_roughness: () => Ze,
      RegisterKHR_materials_diffuse_transmission: () => LS,
      RegisterKHR_materials_dispersion: () => BS,
      RegisterKHR_materials_emissive_strength: () => bS,
      RegisterKHR_materials_fuzz: () => We,
      RegisterKHR_materials_ior: () => uS,
      RegisterKHR_materials_iridescence: () => he,
      RegisterKHR_materials_openpbr: () => Me,
      RegisterKHR_materials_sheen: () => pe,
      RegisterKHR_materials_specular: () => Ce,
      RegisterKHR_materials_transmission: () => me,
      RegisterKHR_materials_unlit: () => ne,
      RegisterKHR_materials_volume: () => Ve,
      RegisterKHR_materials_volume_scatter: () => te,
      RegisterKHR_texture_basisu: () => Xe,
      RegisterKHR_texture_transform: () => Ee,
      RelationshipDirName: () => Np,
      RelationshipFileName: () => Wp,
      ResolveFormatOptions: () => yg,
      ResolveNumberOptions: () => Mg,
      STLExport: () => pg,
      ST_ObjectType: () => ep,
      ST_Unit: () => Sp,
      StringXmlWriter: () => vp,
      ThreeDimModelNamespace: () => Pp,
      ThreeMf: () => Ep,
      ThreeMfBase: () => Ip,
      ThreeMfBaseMaterials: () => qp,
      ThreeMfBuild: () => Qp,
      ThreeMfComponent: () => tp,
      ThreeMfComponents: () => xp,
      ThreeMfComponentsBuilder: () => Lp,
      ThreeMfContentType: () => Cp,
      ThreeMfContentTypes: () => sp,
      ThreeMfDocument: () => Gp,
      ThreeMfDocumentBuilder: () => Bp,
      ThreeMfItem: () => Zp,
      ThreeMfMaterialBuilder: () => Mp,
      ThreeMfMesh: () => Dp,
      ThreeMfMeshBuilder: () => Hp,
      ThreeMfMeta: () => Fp,
      ThreeMfMetadataGroup: () => Yp,
      ThreeMfModel: () => fp,
      ThreeMfModelBuilder: () => yp,
      ThreeMfObject: () => Op,
      ThreeMfObjectBuilder: () => Ap,
      ThreeMfRelationship: () => cp,
      ThreeMfRelationships: () => ip,
      ThreeMfResources: () => np,
      ThreeMfSerializer: () => rp,
      ThreeMfSerializerGlobalConfiguration: () => op,
      ThreeMfTriangle: () => Rp,
      ThreeMfTriangles: () => Up,
      ThreeMfVertex: () => Vp,
      ThreeMfVertices: () => Kp,
      ToQualifiedString: () => Ag,
      TokenType: () => Xg,
      TriangleSetsNamespace: () => hp,
      USDZExportAsync: () => Fg,
      Utf8XmlWriterToBytes: () => zp,
      XmlAttr: () => xg,
      XmlBuilder: () => ug,
      XmlElem: () => tg,
      XmlIgnore: () => Rg,
      XmlName: () => Ug,
      XmlNameToParts: () => Zg,
      XmlSerializer: () => rg,
      _ConvertToGLTFPBRMetallicRoughness: () => nP,
      _SolveMetallic: () => YP,
      __IGLTFExporterExtension: () => pv
    });
    var hv = Pv(36591),
      Sv = Pv(60565),
      ev = Pv(39593);
    class gv {
      static OBJ(vv, zv, Pv, gv) {
        const pv = [];
        let dv = 1,
          Nv = 1;
        zv && (Pv || (Pv = "mat"), pv.push("mtllib " + Pv + ".mtl"));
        for (let lv = 0; lv < vv.length; lv++) {
          const Pv = vv[lv],
            Tv = Pv.name || `mesh${lv}}`;
          pv.push(`o ${Tv}`);
          let Wv = null;
          if (gv) {
            const vv = Pv.computeWorldMatrix(!0);
            Wv = new hv.Matrix, vv.invertToRef(Wv), Pv.bakeTransformIntoVertices(vv)
          }
          if (zv) {
            const vv = Pv.material;
            vv && pv.push("usemtl " + vv.id)
          }
          const wv = Pv.geometry;
          if (!wv) {
            Sv.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const av = wv.getVerticesData("position"),
            sv = wv.getVerticesData("normal"),
            Cv = wv.getVerticesData("uv"),
            iv = wv.dPv();
          let cv = 0,
            Gv = 0;
          if (!av || !iv) {
            Sv.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const mv = vv[0].rD().useRightHandedSystem ? 1 : -1;
          for (let vv = 0; vv < av.length; vv += 3) pv.push("v " + av[vv] * mv + " " + av[vv + 1] + " " + av[vv + 2]), cv++;
          if (null != sv)
            for (let vv = 0; vv < sv.length; vv += 3) pv.push("vn " + sv[vv] * mv + " " + sv[vv + 1] + " " + sv[vv + 2]);
          if (null != Cv)
            for (let vv = 0; vv < Cv.length; vv += 2) pv.push("vt " + Cv[vv] + " " + Cv[vv + 1]), Gv++;
          const jv = ["", "", ""],
            fv = (Pv.material || Pv.rD().defaultMaterial)._getEffectiveOrientation(Pv),
            [Fv, Yv] = fv === ev.b.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let vv = 0; vv < iv.length; vv += 3) {
            const zv = [String(iv[vv] + dv), String(iv[vv + Fv] + dv), String(iv[vv + Yv] + dv)],
              Pv = [String(iv[vv] + Nv), String(iv[vv + Fv] + Nv), String(iv[vv + Yv] + Nv)],
              hv = zv,
              Sv = null != Cv ? Pv : jv,
              ev = null != sv ? zv : jv;
            pv.push("f " + hv[0] + "/" + Sv[0] + "/" + ev[0] + " " + hv[1] + "/" + Sv[1] + "/" + ev[1] + " " + hv[2] + "/" + Sv[2] + "/" + ev[2])
          }
          gv && Wv && Pv.bakeTransformIntoVertices(Wv), dv += cv, Nv += Gv
        }
        return pv.join("\n")
      }
      static MTL(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const Pv = [],
          hv = vv.material;
        Pv.push("newmtl " + zv), Pv.push("  Ns " + hv.specularPower.toFixed(4)), Pv.push("  Ni 1.5000"), Pv.push("  d " + hv.alpha.toFixed(4)), Pv.push("  Tr 0.0000"), Pv.push("  Tf 1.0000 1.0000 1.0000"), Pv.push("  illum 2"), Pv.push("  Ka " + hv.ambientColor.r.toFixed(4) + " " + hv.ambientColor.g.toFixed(4) + " " + hv.ambientColor.b.toFixed(4)), Pv.push("  Kd " + hv.diffuseColor.r.toFixed(4) + " " + hv.diffuseColor.g.toFixed(4) + " " + hv.diffuseColor.b.toFixed(4)), Pv.push("  Ks " + hv.specularColor.r.toFixed(4) + " " + hv.specularColor.g.toFixed(4) + " " + hv.specularColor.b.toFixed(4)), Pv.push("  Ke " + hv.emissiveColor.r.toFixed(4) + " " + hv.emissiveColor.g.toFixed(4) + " " + hv.emissiveColor.b.toFixed(4));
        hv.ambientTexture && Pv.push("  map_Ka " + hv.ambientTexture.name), hv.diffuseTexture && Pv.push("  map_Kd " + hv.diffuseTexture.name), hv.specularTexture && Pv.push("  map_Ks " + hv.specularTexture.name), hv.bumpTexture && Pv.push("  map_bump -imfchan z " + hv.bumpTexture.name), hv.opacityTexture && Pv.push("  map_d " + hv.opacityTexture.name);
        return Pv.join("\n")
      }
    }
    var pv = 0,
      dv = Pv(40846);
    class Nv {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const vv in this.files) {
          const zv = this.files[vv],
            Pv = new Blob([zv], {
              type: (0, dv.c)(vv)
            });
          Sv.Tools.Download(Pv, vv)
        }
      }
    }
    var lv = Pv(40454),
      Tv = Pv(40408),
      Wv = Pv(40935),
      wv = Pv(40410),
      av = Pv(39127),
      sv = Pv(36615),
      Cv = Pv(36745),
      iv = Pv(36620);
    const cv = iv.HighestCommonFactor,
      Gv = {
        ...iv,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: cv
      };
    var mv = Pv(41118),
      jv = Pv(40435),
      fv = Pv(40898),
      Fv = Pv(40906),
      Yv = Pv(41139);
    (0, Yv.RegisterDumpTools)();
    var nv = Pv(39295),
      Ov = Pv(39300),
      Dv = Pv(38209),
      Kv = Pv(39413),
      Vv = Pv(39798),
      Uv = Pv(41109);
    let Rv = 0;
    const xv = (vv, zv, Pv, hv) => {
        if (!vv[Pv]) {
          const Sv = vv.useDelayedTextureLoading;
          vv.useDelayedTextureLoading = !1;
          const ev = vv._blockEntityCollection;
          vv._blockEntityCollection = !1;
          const gv = Vv.e.CreateFromBase64String(zv, hv + Rv++, vv, !0, !1, Vv.e.BILINEAR_SAMPLINGMODE);
          vv._blockEntityCollection = ev;
          const pv = vv.ma().getLoadedTexturesCache(),
            dv = pv.indexOf(gv.getInternalTexture()); - 1 !== dv && pv.splice(dv, 1), gv.isRGBD = !0, gv.wrapU = Vv.e.CLAMP_ADDRESSMODE, gv.wrapV = Vv.e.CLAMP_ADDRESSMODE, vv[Pv] = gv, vv.useDelayedTextureLoading = Sv, Uv.d.ExpandRGBDTexture(gv);
          const Nv = vv.ma().onContextRestoredObservable.add((() => {
            gv.isRGBD = !0;
            const zv = vv.onBeforeRenderObservable.add((() => {
              gv.isReady() && (vv.onBeforeRenderObservable.remove(zv), Uv.d.ExpandRGBDTexture(gv))
            }))
          }));
          vv.uD.add((() => {
            vv.ma().onContextRestoredObservable.remove(Nv)
          }))
        }
        return vv[Pv]
      },
      tv = vv => xv(vv, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAgAElEQVR42u29yY5tWXIlZnbuiSaTbZFUkZRKrCKhElASQA0EoQABgn6hJvoXzfUP+gP9hWb6Bg00IgRoQJaKqUxmZmTEe8/v0uB2u7Fm2T7HIyIrnz88uPvt3f2a2WrMbOvf/u3PvvzP/sUf/N6//i8vf/lv/3v5H//d//Sb//Uq/5u8yf8hV/m/5Cp/L1f5hVzlG7nKJ7mKyJuIXN/hPwqXI/g++zq6rPI5u8z+WqfLre+zy7PrVv9L8brsMiGvk8XLmM/sdfHXal4e3ad6GXPdyu2ij8u/+uv/5cuf/OSLfdtEfvUr+dnf/d0X//t3H/7bf/hP//N/928h/0Yg/4VA/kogfyGQP5Wr/IFAvhbIlwK5CGQTPP+9z5uPeePJSW+yo2+s/GtN30Rnv1E+f5zxof9R/lSXv/nr//mrr3+i+5dfyX7ZZQP07Tffys//8R/l/9TtX7790T/7r/8G8pdy+/8XAvnnAvkzgfwzgfyxQP5AIL8vkJ8K5KsmMVzu1U7p5PA5AXxOAJ8TwPf7sX/51ZeXfcemqnp9w/W77/S7X/6T/vzf/7383RWCX3/z05/9i3/13/0PX//eX/2FyP8tIv+PiPy9iPy/IvIzEfm5iPxCRH4lIt/c/393//9BRD6KyKf7f488fP74/PH544dJAF9cLl98IZfLBZtuqterXr/7Dt9982v95S9+Lv+gF/3i7Spv/8lf/vnf/vGf/dF/JfKnIvLnIvLvReQ/NEngn0TklyLy6/v/34jIt00iGJOBlxAsdvv54/PH5493SQCXy9t2ueh2ueimKorrFbjq9eNH+fDtb+TXv/ol/vHyhX4Fxfbx7euPf/Lnf/PfiPyeiPyhiPxxkwB+fk8AvxzQgJcIrGTwFsiAEXH4/PH54/PHUgLY7whgu2C7bLqpQgHB2xvePn6SDx8+6G9+84384vKF/IPu8iVU9Y/+7C/+jWxffiHytYj8VER+X0T+oEEBvxqQwCMJeIngo5EI3goIwVMIPn98/vj8ESaAbbtu2ybbvl8u2ybbdtluSECA65u8ffqIDx8+6G++/VZ/efkV/sO261dQXP7wT/7kX8vl8qXIFyLylbySwe/dE0CLAr65B/9vGn0gQwRMMqgmhM/J4fPH548eAezbZd/lsm3YtssNAYiqiogAAkCvb5/k46cP8u2HD/rrb7+R/2/b9Wu9yJe//8d/9Ney6S5yEZFdRL68/38khG/uKOCnAwoYkcCoEXwkEgGDDq7CeQfyOTl8/vhd1QCum26ybZtu2yabbrKpQvXue1yvuF6v+vbpTT5+/CDffviAX1++1V9sO77WXb/66R/+4V/dgkbllQi+aBLBV/dE8LWRALwkYCWCNyMZXElkwLTMeMkga/P4/PH547ccAVwuctkvdxSw6bbdtYDbTfSZBN7e8PHTR/3u4wf55vKd/nL7DX6mu3791U9//5+/gkNFZGuSgZUQvnKowKgLWLTAQgRtEniTuEfwaELw0MJvf3LQzynud+53uG+X6y3gN9kul+2y6XVT1U27JCDAFVc8ksAn/e7jR/nN5YP+avtWfq6Xy9f7Vz/9w1dgRYngiyYhfNkkgzYBWHTg44AEMmqQUYQKOmDaiCIa8TmsfmzB+DnZDQjgcpGLbti2y3bZHjRAdRMVvb/dcYU8kcDbPQlsH/CrbddfbF98+RPZfvLFnAQeieCRDC5DMvju/vmD4JkEvjRQgKULeGggowdHkAHTYxihg89vu88I5UeGAPSOAFTlrgPopiqbKPSmCKreUoAAkCcSePukHz590m8vH+WbD9/JP335k6/+tA86KxFchv8jMvhiogE4JQm8XhfKqOAqx5qRPyeGzx8/cgSwbXcUoLJtim27C4Oi93+4v6VxQwKAvl2v+Hj9pB8+fZJvt4/yzfbF9lPdv/wJnsE2BogmyeCRED40tGFvksIXiSbgiYSRRpDNDZ6BDI6ghM+J4fPHeyKAO+zX7cb9t4tedMMNAQju5V+f1uAtBSiu1zsduMrHy5t8ePsk3376KN98sX/xE5FPAnm7/782o0DiUINXMkCXCB7/P94/e87AWUmARQWVvgMuKej9t1RLBp+Tw+ePgwngsutFFdu26WXbbl+rSvdfbnqAiuA23QcBgCugV1zl7e1NPm5v+LC96XfbJ/1W9y++fgXjA3bDYXV+MuhRwSPwL3JLMFYC+HS/LU8HYrGwIhwyNOF12SvgM4SgztdifP85MXz+KGsA2C6X7aJ6bXSAOwrY5OYIqGy3d5uq4P5GhABXuV6veLvRAf10fZMPb2/y3b7vX7+g+9v98/WOBq7GG7RNAlYy+Dgkhhb+Xxp0sE8IAC4SGAP/TbgVJK/PoJPBnAiwPKxsXfbbnRg+i3s/JAK4Q/4b9NfLtomBAqCickMBjy7BuywAUVyv8na94tMjCVzf9KNcLl/0SeA6oAEYb1i9g+FtSALb/bKL8/+t+wxXFMyswqiHoK4ToIgKqslgpg1qUC0QoYbvJZg/B/q5v4szHmPX7YEAsD0CX25OwEUVm9xag1+agKg+nxQArnKjAtDr9U0+Xd/k4/UqH7bL5YsewrcBBiMJZPRAp6TwQgWfjM9vgRbgUYGL8AvLWH2gqhesCokeUmCSwPsnhs8fP2YNYMO2XeSmAWxy2VQaXeDmDIhApf33rD4PTUCuV+DtCn27XuXT5ir8VmCJ2G5BpBM8/r/dEcJb8/0lEQMtJHA5TAlqNuLRhJChhEpSqFabH3di+G1AGj+W1/dyAR4IYJNNnuLf6+tWC9CHHiAtFhAIFLjK2/Uqn65X+SS67aK+3QeTDoy/IG2ogQ7fb/dAtz5vBgrYGqrwNtCHsVfgIvwK07OTQBURVNCBFpKCOjqCHn5L/67TgTN+fpySAC56nwSUi256kXsSuFGAVyLoUIDo8/Pz7fdoErr/v17lk162HbgHvFpIYDfoAJJfW4sGPjkU4VNAF8ZEcLmLhdc7kljdY1y1Dq9yLiI4IiRqcLujb138KIPn80ejATwRwIbtBvn1cqv+2J78/5EI5N4cJA8qIPcmwRsKAHDF9WYP6mV7VmrgLuTpxYTcMEW0LAmoQxFsuvAI8tv/a/C5fV2ZMMiKg++FCM7RDPRu8ebWY7VG6VJi+Bzk35MI2LsAckMAgwvQ0gC5DQjd3ABg2HQLAPpEAlZ1Bu7VV7MGHDFRAbo3VKsTbAY9sPWC/uvx86gBbDK3D1eEQS8pbAeSgSwmhepnJb6uBv/o/PzHLzxWA/X7TH77De5j6AGQi6o0CUGfCOD2X7cXAlCFQABtEsGLDtxuOyQB2UTQBKZe5GUPXgkUYCUAbZJRhBDeuq8xBf+bgwbehDm+BFQi2IJksOocvA8ysIMfxluVcRsY/eB3JzH8GFDAXQO48X/dcIf9jyDHptIigDsFkEe066tBSETQUYF7ElDdYEBytN4+rk9UcBPfrKaZqFHWcw3i4J8/X4ev2//bSXqAhwTay6OEIPLD2Ipt8OtAGzxkwLw9WVFRjTc/qC6H3+YK/b1oAA0KuOizHfieCLaHHiAb5NYTIC9EMEbZrVEQt1xwhVy1UfBh8PUOquMizwaap3tQXfY5B//tea/NZdfhsvbz+PURQTDSGWB87VX/7WSd4KxjUqrIgE0IUkoKGnhIvwvawpGf6eECXJ7tv4qbA7DJgwpsKthEmmYgfaAAffYF3HLxo0vwNjJ0SwRWMG4db4eh1gPNm18vQ+us/0eGmxDemu/fnM/X4evq/8342ksGHgLY5LyT/zg0wM8lcMjgGFXwqIOVFJBQw99eCvF9oZL9Mfl3QwAvIXDsBRC9R+fz8x0FPBLB0xJEpwUobrfAkARgIAF41h3wQgP6QAmX5E/7eI43IxGwwf/moIkRyWRJQIPgt9CA9b39nzt4bYUWjAlCjWDPgv8IEjgLJfzuaAsrv9VdVG4OwOXW/fdoA35qAdL0BDwvf6AAUVHd8LIEu94A3K+Q+2YxaB84MOH62P//qoo38fCRDERE2zf0JfmDa+MieElAjcDPKz+mRKCOtdgGtXaBjgNJ4H2owSpNeAW/rRH4CaHSpMwnBYYycjgSJwfie9CR6mPu20Uv8kABF206AvXlBMiIBPSlB9wjBW1fwEuSb94296VCqgMaGCt/G1BbExi3IG+r3a3J6P48Gv/J0YmEYoiGY7V/SxwFCwGoE/xa0AJ0CEiV9QPCJb1OJ5F1VTjEY2/MO9AEJvj1BJTQpqLfTlGwjABuzT962e4IoKnyrdh3+/6mzDVJ4PHOxj0JqGKoy20+wBMN6D1gLWi9NQHfVP5MEEPzjGYy8BMAOnTAJgEr8HUIejRo5xrA5xkR5AngmiSHs+zDDAmMgWzTg55GSJEmHE8IvWPAoYTfhWak/Wn/bQ0CGLSAjv83SUEfKp5q24LXuQICpzrjrgWoza8xVE00CQCORdhMJuTUT/rjuls0gO4Iby8BIEgK6gS7BsGuTtDrScH/fR68biUHNVGBnxjeNyHEvQe/ve3LZQqgG3rof6cEclsNflG9J4KtaQ8WHcVBHS1BtHE4QP9OBMS98mpbKTeDW7dJwRsnHpMBTFJpV4I+b0kY/NqInVFSyBLANbnMSgBM8F+Fqfxq/h657/Up+GaBnwV9hRqc9bZ/vA6vu+T9E8KPJWns94UfTeCj2QXwCHS9dNL8Xf3Ho/rfewSeFODGDV69AU0y6NFAE1DP3qK++rdB7/1HRxf86gT376zOr99T/h/ioBiXWQkgQgVeIrCC/WomhDmQK+hASI2ARQZKooHMLdCJwGEBBXC3+uERwg+VOHZ9ioAt9H80AI06wGgJ3nQA3BoCut6AhxYwgcPOFnxuFnrphk+NIKIGrWPQtgz3b0i7Y6D5rs1GKqTop0nQX52vmQC4BkjA+r4a7Kx9WLENGeegkhSETBCrNXIMdi/444Rw1n6E96ry7OPuj8UfLxtQ78NA2iSBbg7gIiIbdDLsb5agPhLC3RkYKv8NDbS2YGsatNRAG2oQwf9ZIOydgy1MAzBkAw8UwEEIDzSAqdPQ6za0PkeJAMH3Z0wXniUSZoHvBXU2mcjQgv56TedIKglCpIoQfgwCIjOytd8WgN0bfxoR8Fn9Gx0Aj5Zgq0lIZbsH/ibSJoFnS+C98g9ooHEELI3gliy25yONIiE6pb0NfBlyNEYyENoodkKwgl6I6s8kARgJ4ZoEfuYWHLEJa0LhSBXm7kImGeSfVdoJ1DO2G7WXsehAptupSOoyrCSF904k+6vt98X/ZcM98Hsd4JYIXhQAIg3/f9AAUYhsLQKAtkHVBnzjCKhOoYl2ym+iBtvzDzQ2DLXJ4PUmbJHAVnBQX4jkxfvHhNDqAdHXGQJgv0aSDGItgOseHIU+K9hXnIJzkoGlEKzNHagTdJ6VWEUH4iCKH4fd2AwDPaYBm4Wgng4gQ9V/CoGiuNmD04AQtNGMGzSAAQ2I2pzfogY9LRh7BrbOh4+D30sAencljFu2CUFrwY8UAWRfWwGvVOVfbx2uIILM0pwDv082dUTw8hYs8L+uIWiHGpWgClnAa1lMPJogovvvbePPs/q3Xr++kgCsfgB5oQF9WYKPJqEn6G+OE3i5AqouF59FQOmahQC8rlPLj38kg1c2f30vw+XaoIX24/pMGIgSBoZqoH3wo0sIIGlA9PWcCPrAtpPB8eBf6x1o6cHra+2+tpIFP4PgBfxZtZUJfo4qxELT948D9ucK8Mt9+ccjIQw6QJcEbrD/1g340ATuDgDkFfx6twSf1f9xvuBECYxq/7ythQQGm+5JDx6Brw4CkMGT3wgscCUoQ4sU2t6DR2ciBjTgtcpenQoZVX9NuL4Owc+dVaDursYVkVALX+shjSBKBuvCYDUZjE5BdNkxdHAUBexyHwB6NP7Iyw7sxUDViwge1t+mz8B/LAvVx/c3PeBBCToB8IUGOgqA3iV4yUg6UAOxaUFHDx6CYS8SorMOue0CCJGAf5YfRhoAI+A1CvwxqNkAY5yAIx2EQmkFfeWOXi+nEdSQQA0ZHMEItiagJArQxDXIrj8nCfQi4HZPAttrIahso9oPQ/2/JwV5JQU8zw+7I4D7/sBn4EO6rjw0FR+i3Z9fHtahzsFvJgM0X+tmVH5vaYiNDGAigewAz+gyNLThnjCURQFR1b9d3lZvnVqmj9mEPDKIUIC4KCCjBXywS4N+otp/Hk3QVthOkwEKlV9PQwXjT7s/zwF4Qf9toAAzFdjuaEB6S7D1//U5FIQu2MevO0rQQH8ZmoXE6B/IkgE60XCjVoq8gt2iCG0S8L5GdxkM1cGsfsCMArSCAnrr7dzAZxCEEpepvB8tqHJ/q+bmJGGts/AcAXFOMMeTwC7Pw0B6CtCtA2vWgonqBQJFSwH0JQK29OB2kvgj2HHXAoyeAIsCQO0kMNECAhFMqCBf8mElAkyBbX1tJQP2RJ/ha0gpAfS9l+/5n00CkrQpq0MZbOdAuxmMvHswog62jZj7BnYQe19b14kxNq2D/ehX/p68HEcF+x3yP7z/V/A/q/5DA3i5A/dzA5pdgbKp3v3/wQF4Bb70WkCTHGRAA6+KL0bFl6FJaFw0ImZwm6igSwbbwPn9RMBWf3sN2JgA/BVh/Rg0kQBgePf6HglAHLFQwqQQOwDjbdVxNZjR4iM6Qa3WxwvNxh0JFb3g/WzFQQS8b/ttKcDWoABtUMAd8j9hf0MB2uDXhzX4CHj03L9DBU3Qjz0C0l4mLSLQPicOOwZoVCB6P6dA7nDbGkVuxcNr8PU2JQO4wX5trEqmccZaHU4q8oCDFOpzAnOwqyMIMktNNNAHouDGxO37DgArQZzlmp/14W1QlqHTMaIIx7SCx0+5yza7AKJ3IXBrNAHVDcMZAU/BT/vgv/ULPOA+XiLggAREDF2g0ci6xNDRglegd7P7TWWH5oJfayliEg7bScQRBVgI4Ookg/F6rvpLWP29swREqA3CaG8/FpKqS8DTAV4TiBqIqtxfzaQRLys5I0XEFIFrPbZRQb+16Fgi2LvJv8EFUPW1gGfQv1T/F/d/HBnccP7rAwnIIyHI4ArgWeGbU4eHy6Tx/EeTZIb5bo/BsMBjmjBE08f/RB0PHYBd9eVRAGY7cHRwiBf8WeCPHY1bgBTa9xKTELzEkQX9CPtl0gJiqsAmCT7I8xbjivh3JGFI+D2nBcSJQJ8agDX+O9iBL7UfG4bzAkcaICrbtYHz1ycSmGmAjJfL3CMgT3tQpmrfB7gxSzC1DnvdhQMieG47u75+kTouKNkM8c/+vq/Q7ZYjO/hhVvRq8F/9gGfhP8aqE9EIdR6LTwJ1h0BItyDqB8iFwuNqASscRnYioxOg9ApvnYA35f8e9Ohbfe8J4rknoFkO0lmA2gmAG0YK0DkB4ieEjiLoMD8wBzom27ANZkzIoU8EMHk/uo1mzeVoEoRWKn8L/62EYAX/lsB7D/LXg74uAMr9oGivJ0CNJCGD6i9DhZdQF+gtOp4S+NODRzsDVbhdgv4BqTMNyIL9SCKwL9/FGPp5oQKxIf8A/UX6r231H7YIqLML0Ae2GtrADOvRQH5b/MPE9dt9BGLNG8jVTAQvIaK5TtvvvWQgDvyXIClUA78S9Nfg7VtIBlO7cbsEYkQDMot+ygQ7QwmOawTHnAM2XUSnJvPIYRYMmYPS+sv3J+cfP3d04JYIXsF/EwMbBKB9Q9AY+BiSwFj9mzrSXmcJhFPVHySTbgHJCPvRQ/z7G/SVUETsg0ZF+i3CRoCjhf7y1A9mOiDD7TwdwEoEXjLwAv+avLE2B7Jnb+OqDpBoAchoQJskxKnss0vu7Q2YhcDv4ySeLOg9GsCKiUIihP7yfW7zbTsBh0TQfN0iAWn9f72Z56/Ax9P7j5OAH/Qvv3/QxKfk0DgDuP+R3USg3bzBC7bO/QT9Eeh9QvDPG7glBQzJwK740lAFFgFk8P88CqDGAa223YckWYhr+c0BPdwetl2ocnsfzePAWcVnnAIp6gDVhDLyfV4nqFEDPxHsbWD3k4BDkN+pARqKMLYBPzYEvxp9xmCHQQdgWH/9EtH2TIFpu3AH/cdGydv1j0TQbRrq+D/mLcX3ZACZ15bF378CG0My6Kq/zoGOQwhASDFwFbxyNGBuSxbCEhQ/uEPe/6gAERWQObCVVfjPpQX+rexxYhYFxIkgpgX7Y/vPs+Pvxf9vwt8kAs7i32t3QCP+3SPaTwIytQXP38u0PESm+YER+o9B3vr8mETAUfDrEkPI80ck0FZ0dXh9U+HRbhey0cAc2H7A4y4egoD6y8JfkBiigLdFP8v2W00E8deT2IeAKujZ/QAVKpAtKI20gLWksHedfgPcb+0+NEHefd9vB9rayi8h7J91gBbaw20MsnWAF5xHkyDUCOoXp+yrOwwxcKj0aL6fFppaaKDv6OpHR5sgx5BAlK/+fYhuP1D196o8e7lFBaKqv5YIMnFQpd0FGVR35RJCnCDaABaXBtgbiSwtICMtalKC+1JQ6bx/PLcDPQL91QFodQNKpwOgF/9eqcBxBBqRcKAAVk+ArQOMx1RYGgB6naDhlK+uQQwJYx4meQbxtNnYQwMjt/d4f3M9ZE4UOld1LAh99fbfzOxiEkKFCkTJIUIMUeVnJ/9sDt8/e1NEJOi9oVHDGYhgnSLss9DX2IAqw1zALUncKcDr0FB5NP+0cBQNrEezDiyiADPkt9qGpwoPdL0AGPx/NOKeyf3b9WJNdfcFv6bKd2cLMJVfJ6Y3B6wB9WFUfWWEwKMfGiQL+3bz9XGQz2EHKhF41GCtZyDi/gUCsNhYoAr3UNJ58YidHKqnMb/6AB5J4N73/4L+t7mAkeeP3P+1LNSB/l0SkMEd8DcEuUlguEw6t2AU/PCE/q++Akw6QFf1u6SBrj1ZnnhG50AfkoGIdf7gJv1KcSfgzWWkQ9U33Z3tHXYASKJ9e/YhU90rvD+q9Ej69/wxYJVs506Eg/r3DkMDzEdDBRGgcZay49XihLA30P+l8N+hf1f57/0AoxbQbwYaan/rBMirE9Dk+sBzTkC8JNDEUlv5McB8PP19Y01Gayep+hC/2zvQ/2HGLAurowsNGlA1cnqGGzeH5weiYLZm7h3QQC4O2tXdhvMMk1ZS5ebpgI8eMrPvPGkwaxayk8Yc6PMOBPEdC1XZ+2UfbfOPtxLMQQAG9BcZFoF0gp/RKjxe7+oAw9T7ZPWhgedodgz0gf5KBtrtIZhQAZpAV1Bi36w6t98qVfH7hqGI318lLCjLCUFlxRHwqYEH9a2qb4XjWvDT7kBwfbZA5P0+PNuRuW1yf4yNQH3zzwv6b70QOJ0G9OT/dhoYRUGT15uQH/71MjQLtQlxfDuiCXrtM+SkA+icQdH6sU/xz7Ze7FlubV4TpoTQ2osdpaEjtqADmEU7OkBEFoLeC3IWFFeswJXKXzkboNL+wzcFHU8hTGKIboO7CLi1/P+5F+gydQhuvRbwEgxvtACmANikhLTbj0gCYk8KdlYgmj+4Ymaod7TwahwadICuX0Cm2fE5iNHPK0x/CDV66Kyg1MnqjNFBnhBoLQCgUULfaVe5nq/6EQWY67bXCszUb+7232fVPz51iGB12owK9peyP1T4raMFF/OEYJP792mgXYfZ04GHMAhBkCSmSj+dKqRPgVFGHbpLEGMiGFeQWfSgrY52VxaeDUPSNJI0P7NoisG729HHl78z6hxfs9rV3m4JjgM/lsui2qmThjCfDFSb+I9vwUqG5wwL55U7C+6ot8B+7N2o6r3q37T9trfpjgmTvv7PSQATLLeRAOZhIJHBQfDQQJPBdUwEbVW3+L08EcEE/9G4ANrCeWcnPKRHDupbNynMx5AA9IRYLmrc/YLSiD5EaEBS/s/TgnU9ILcH19n+CpHwegLejx7Mn/d25fdN+e9U/1vgb7bqf08MOtf8EXxaoh+GY8L6gDfhvs4i6HQ7seYI2sv1GchdMsBIG3xlvxcCRzdgCPTn+6q/TW00VE8Q9FaFv+R2VlOM1vm/hhjhDCdgNflVKME5B47I9xT8z0YgPAJ8myb/LqHy36j/Mwqw9AALxuO1JVjiuQAYLcFzIhiEPe05fk8tRjGw7yWQbsfuLAT2VqOId1osnr0F49VM8INACPHDoBz4B5mqqSnUgyh3ArjXxfQH5BbgUS8gP7aU+w0zHD9GGD0CGHf+P1p/DeivlhU4BbxR9a2kYFR58YaDZCUR2P0DMmgED2eg77puegy6PgDphEB0CwlG/i9d+/Hs34pBEQrBn0W51mqGnJAk3ACCHeiqkQ1XFQA5AlKH7Lk8yJKWY3/nym14h2C3JvxeMwD9ZVMz0BPMi1n1RbKl1cYhIVblF3G0ATsRiCMUvoK9//OgcwYMoe+ZKOLlC6/Xk50br9NFz9fanqA8UIYSpCwlBO4kHc4WLLBfBHVaKwKgLQjmP4Un61Vq+3s7Bsyi0WztmLjJwJwFeE0I2vD/1Q6MVwefxfUf32skCPbCnxQqf+QMPEUDHZ7vGeyj020JgkPXXwsldA7SYR1RE3h94NvNtugswcgxXEkIcBPCGZ1rmrgDC0A4K88nm2fn/eTnpQtWyZfybRoK8Dro4zYDIMGsf7saTBzvX0SMbkAD6o9CYbsfMK38cJKD9l2FJt9/VGs0h5Gib33pxMKWNsigFUh3G2un+/N1WUglI/EEx8fq27vUNnwsiOoKecL7kQS8VnWAGCFUgn6dBtQhv40CmIYggwK0uwDHRGAuBXVdfwzHUjZzATLMAoyJ4FmBhzaWBlrHld9CCWpPHRqofBqMReMGTJ78q9rDes1Tv7/0m0v0AFHXNR6P6g30SHivin7V1BOhh3iWPwvps/yE836L2XiwnUT8x2iHgfqhnwn667QHEE8oLQjEvtEW7GYBZDrDVkwNIO4G5GiBDf9fGoFM6n+vbEtzXwP6u9AduaWnGYSLAlVdl/AU+ikrSeEIKgwdaZ4AACAASURBVKj4/wtgHcHtdO2nWKcBkPfxcvnNQvsj2Me9f02r76T8q0IBn9OLKfz1HX8yVXQYGoAB/2UeBQ5/5kCL6+H/OGGoRnLSwdd3oH8r7KkGTbgIxEwVWvnF8KOpHnyzfF9Jod5Px+IF1h8owyitDw/XEgRb5bPqbt1uvn7qBIQ16vtS/u+DP3cR7CH0WWJgd5mTJKYgNzoGjQrfvu99NDBC+bnyW1x/qhTatv2OaMKgJWPvv5kwnMgxHYGFRtJW8VMl3uP+MgoqSZyWFKr7+KIDw1d6+IiOgZI4+d5iYL3imzbgyO+tph9t2oSBxOM3ugHtPoFZ1LM0hF4kXNEBssvVgPdjdXZWK7uKvyS3q1Xb1WQwtVDqSUggq+Vw3t56JA2cz7PXOwGNW1ecwxPhfe3QEUsDsFaAz8jg0nf+iZMAHNg/XSazDuC18Iq1HBRrOsAQ8NLB+16g614jmuSgs3bROxE55D+WDDQNA4ivdMJ9M1b309UqknaDU8ObV9/PwmMPATvTMAxpABLBzugUtV9bLdhNDQA+7B9tQJ06/7QNDHGSwtgZOCIA47InIoDdROQGtt0U1HI3GaoUnCnC/rzBMQJteN17+VaAzYNA7e+PFqHQUyXPUYB7iQYa5ZFjq1Zqpx8Uqu/XT7+6BWC1Xaj0GlBIwMoHu7UzcI/6/Acb8KIq+hzmGWmAYnADrIpvKP7TZeLaf0LAeQkGgebbq9FToI44p654F47tekKkI0L5PQNZPsDwPBpy/ni+wKMN76Vav4+2cFZFf8+JwAraMt0DFB7beA/u4Zz/a+RXx0M/ct4/jwaNAS8G17eSwmta0Fhx0VRxJkHMivso+onMXr+YwdWKbgioy1jp4x4AzIKg5lEA7wvHEYCRmdx11TAuT6lDLVl4KvXkAET9P4RT8H2u+lg9EPQIpw+/NpJ7RwE8HaDv/Mu4f3OdNkq/EfAiEiOANjEALvcWL9gfFV4NZbgbQc6qPky4Pm35QZxtH1f4j+P/jXuaYPcWwIEH/fmEPBoAO4m4LGxV3txOQqDU+dXgey+UwSzuqP++uImO/u/6ogCb7wTc1n61sL+vZi87rxnrNas+giTg6QLzaUCjIp6JfhwtGI7AjBBB9JjDY4ePYVR6ZPgN4owVv6Q2N5hhVHwNeYrM+w6dN6K1sMHZm/Ce7bHe3dzKr1xw1w4JrSQMZtgnoQHlr18fzunAszD4qurNUg/TDqzx/lfCaO6t4tACMUQ6P6htWjDPC1hCoZ8kpODzJ70MUR9AODcgwyqyPhmE+wfHYB/hvSqt6qeXUShhXH+d9SR8DzrDaZZdpSp/HxqLMQuATgDU/qDPRgOIeT8cvz/h/XC6BtE7ACLOWPE0KIS4UUjmZaJ2grBphiWgT41BUVWZfP3AnEIT6OrfoF122l2rMycBoU5i/OXoUZ4/aglsXwLzHNU++FVF3qikOj5HXm2PBitT1WuvJRAB+6O//W0/PY8vQH5IrAsMs/WuVmAdHBrQgrbOxJShXwRSsu08h8JMBpo0+aDTALwV4tbswgzHrftG/dJKIAQb5h9KCssWIMeto+GYqG12/HWGjx8kzqNJaa0noMWOr2KwW01AMwJoNvhMQda2/RKQP/3ecABM3g9uD6BY68Ntz9+nDOMb5iV+hIE+dP/Zs/wwJhJ9mgBnohBuStABUXjugF3hkXF9ZZJAjefKdHZCc389LoStKvIl7QIEb1d9RyciQgFDI9Cjyccc/23Aam7/PZJBhgDgin5CtQvbCzX8ip9YgIFtOAt+w0owp/hOiCWgEGbVHuYjRigPGR/YOnEoqPDoV5z5YqB3mRq2ox5ICmSSgAP1Ne+XV2NE+/vuFbCTRADxtS70VRBCjgBk2OyDUQiUgfl77b7DwaHm2rAZ7osRSOOUoHgKfNBSLI767+oDYrfwZvqChSpGfj3pFwZFsCJg2jeIQQBUiyI4WgD68ww4qO8khuWkkIuDrxWv2nv+UTBpJYiPd0KemTA8qqFiuUF1jWS3BoG6pADJq751JqBI0wvAVPyMQvjcX1zbELltKK+zBiXRFiRxG+b7q3M9xuLdzR8g0gCGNzSM5gNYfqGO9CBT8OHct6oB3KsSDBisUnwsFuISQaRHxDSv0vptt2oeLHMERfRn/FG/Cx01EpgIQG8LP+/i37PKw53xn6sYCM4/JwSRrCnIeB1ZkLsawDhaPKv/njU3wnZ/dBdGE8+YTHSG8+ofGgIjsC19YnwdM/KAnTSsqj6ig7uGgIPw3nYFzhhIIvriAxFP9CQd4HSlnzgxONIdrE7A8ZDPx9fjib8ifgegNIliRgdx95+E1T7+3nQVNNhEzDgGA3T2rEDLduwtPpuuouPcs8swwXFjdTaMKt+jA5gUAQPcf95KJQxYU0cYxEDvsBSmYuukp7AwnqniC9Afa5z8vboI68ImT0t26CvwBzSggkj447r9IojvCn7U92J/Hw0QSdwZKNNjxPCfSxRqnATkdwpOwh88oc4J8KTSm/wdbZjrc+4iFP8YO0/5JJDCfaijK5xVXevqfg6zGRrQf83chvX4aRfAE//6vv5+6490U4ADdO7QgM/5bcHP/n4OtCQhBEFeDWSvos8DPq8/IwzLzjpa8/U6MMSkBklDm8e0mn3QIY7XG1Om8wzN48y7HwhOK3P0/ZwUQHHv4psbdoVeb9VlAjChBCdtDDpOKTh9ZfcagOYq31RFjN4/gwBYzp8lAwYNwBELhZoxECeZxMlAzWGdCRV0fQWGHo8+8Kx+AAxnCIzowAxy9KvNepWfsfp4RR9kUrD88CPVTuXRybhqqTHcnxEGndsgub1Gdug8yz9fHt3Hpl57x/mfCOC29FOSQ7/noAZR5W3Ob24UMpuPYAYiQrQgk1gnFoUIKr4vKFpV15pHUJO3Y5rfH3UFHU4bGkU+NKJ9f2hJyOMxDBDpjAgwiYqvk5TqNl9EH2Arb6fA3yaA4cBtPWewhkEcIQJBlGzYp6zRmr1v+e3Fv27xpzvyI44NGDkCIi7CGNV9Dw0M8NtHC2vUwHINumCGNG8erxOwtQINsW88Tlwdoc+F85nI559ngEDpt2F/Uu3hiXYrkN/pBFS26hYDAkFgErMK67y9mGBA3L5ore5izf8b3n805MOq/t7XU4WHv1DUF/5gugCSOAIW/59uMwl6CHWAib8bvfxWl9/rBGEMTTwDfG+ezEYG4yk6FvRPuPwE+wvc39IRjENWM+/cm5b0W4Pf4WuKUnw/vD6eDbB1ETs5vl77Dhnm/51g6wPWwQAqxnivgQaeS3gy/u/1H4hpTPrIgHAN0mSgXUX13YP5PMIuQAfBr/f70cdeE+QoCX3i8nFMLcAjInBoAIYqt1LhC1WdtvmSab28AYffaeivCB+ohdYQgfUa/WS4ToMsNLHLc9nnvPZLwn1/EefPVf+U/xvnCVSEQEkEQEnEQJO7S7RvYDxNeNYKrG7DKMhtsQ8cMmhgPKKKj+F7CiHYFR5KIIPxOmg5IVAtu3ACQSPh7CzUQOgAej5CWEkIe3vgxz0ROGO//qYfz/dnLT+ZxDr4QW0eNCJBorCFOVC312Ec2TiY5Bk0cAaQmiA1VH1MOwDHQ0kHdEDDf+2UTWhS4Z8diQMicLx8MLBfverLcP/jQzF0P8EJj5+NGK9RCz755S6F/f1+X/gxeP+Wsedv+vF8/54aSPJYFjIQd624MDz/UDLQnr8HU3ztKHRf8Qeno1vyAQJBaLcMtTV3cvgP56COCqd/QP9xLgBkH4BxO13n4hNUDtACC6G1S3zqooZ6Ba4lp/zcAFb7iERKQwQcF39IFJjdXECGADw0IE4gg674pYAnk4HoHPx54tD5daO5vxrugSkMjgiiqc7TVKAT6AT8R4ckbHEQCYR/IZBxJgA+XZjsR7vaoRpIxWqeqfXuGC2CxwudicwePEB1kNkaZCuwyF0DuKv/4sz9mzP/Qxdg3BDkBTMC8Q+loD6UGBzx0Kz6eAX/KArOQTlPHFoI4vVtf4rNuLrca9edRn4xBP7k8w+9AgZCgBfEUZWfEs8iFNZ3UO7TqmkjCO/rWdgco/yIqHcQWaC2EGTzgz5y/iXQAvyx3riyxxV/JeBriaGB9OrTA5g9/eokM+37GszqfA/UZk9iW5UnCtBqBl3XoNN6Ag/+zy6A5evPAp+TIFDn15gQw9rjrOzFX0s2JBVAxa/nP1a6AsNWYGjPNGPLTQgBsNUFvOA3Ht9o/rGDN0tWOCcxJGp+f7++kkP7PxcGv1+GjkaLt/fawpwwerQxBJNW4b+PJsYEgiAYYdEAGIlDNaAbRkIgK3ut0jKByp+8yz23X6GttmBmjwDvChgiYLP5V/zhH6/110sGcKo5CkggCngxnIPoPja0j2B+1BRkiYJiviaLJqghDI63G2nAgAxMCuDdnoD0wIQm+urMB3VuAwbBrFGgGgnhAFqg9+ujKsLxB3qGCQNEEtPinIQlAj4WgIw7/iXc9V/x/yUWFs2KH504bAh4aYWf4TrTLGTy9YbftyLeVOWNfYNyt/ji29mQnqMAltU3ioTtbX343yv/1u0YPUBz6zB702tQucnX0gWaFh6DgPdmhXaapGotw0SFz1qDiTMdd8h45HfcqCPRUhA3+NmKz1l9teCPaMd4urGaewRitNBDdahR5c3AfQmDCFT9vmtQEwqAYXX4XI2n23Z9B/Yb1FL+LWox6wHGbZSo6FR1LzyG+3hriSZvWT6jfXhl2cmQZJDrAbuYAqAHo1GA/EOgD8eGcU7A8eDvH4fQBuAhBL/Zp/vamPTrRENDGLTV/7E1WEPLDlP/PwzU4YhusIMUgfIPAr6Dhv5R4y2r8ldFwiFoYHnmr8TAHbhRQSZOctH598ZYhqt6wP7q/ouqe77RJxvzFYaji/z4vna4v5cUMDXqDAJ5ytktqtBDckyjvJg04hl16LB0xFfyMfD77PZjErGQRRjYIfSvoAXntks0ok8MsUC4KARWnYPlJBeIgLeFrUgDOHYCag0/XNAbWgRwQuLAsaQwIhC1g7+jCNKuT38JfnYSyTi+QQEwwHeT4/dWHYxJPxfOj5oAnRQqgU3YgGZSOaDyK3n/qkDYBKptzR3oD6B4fyRKjp2AzSl80YR/3P+/1vBjX18Jbu+YsrMRgbqPP8zrDLTAaupphfeZtyPs9BPztpLSBZjowF3woYRwBwOWaqbev15b7X4RWsiqYiY6ZkFEIoUwUA2OrkeEQE8HYNyD/rl3m88jCGgO/nPW3xy8x4Q/HBcM1dYg5q8N+B/SBSYhtD0EY1PRGLDoKIBHF3yLz4H/gSYQJRETgqeB2d4vC8L2NVnQn4PoVJJAcP0inahAfdXVI8CFszjRagCTtRdV7Sr895NBpRKXIT64RMFw/iw5eChhEvmmyUIH+k+Qu3cLzOAN6ILlFvgWnx3YWFDz0f38ze9GlfP6UQ3ojEY0gtqRIEbA5/WgQFhsEuIeL75uTzvqHktAWfj/OD6sQXssROcGiRgFn0QVkld7OznMDT7CJKzhMIqxW9B+LCOQdH4uyxIcE49VTSeLj0wKjzcp2oDXQA8YoDEGBLMW0BJw+eAxXejPV/IXd59/tp5rVyYXDw5BlRetSpQAcvgfOwVM8ObzBq/AQ2wX4lwkQV3vNhYFfn2LFgaoDU1ogqsfqGkJYmrj9Tr22KQwBLzbLuzDeA9yzyJjVRfwegWq0H+FThDPA6ZhZwX2M2Kh4waovCzAWJTzD/qY00c+6PM8coz08VNqglzx54LfHuTJK7z2rwX35ABLg1DzsZ7Qv7l/f2yXDlbf4C/irg0MJ0aCuD0wP74MrxfdFlX7tq+vtRdCpvt599EG9Yz3V+P+Oj/n4zLruZHcJ7oMt/MNp9eD6HEeFb6/TMfbWo85Pb79HJo8t3371/PuIAZqMvjPC34nVV6ZB4hEuA7AzA5cfU0y2n6ux89D/35/n2/vWY5Bf0qwf3tPLISO1Tap9qzFB6eap/beqI94NCCbGwgqOItY3CGl446CaQ8i2Q9g0AvmgJOnBoAA0gu17tsKtKS7D4udgCYERy2QIceCX/P7mBW+g/7D9S6Mn50CS0eAoQPDcBjopIA5+EcxEjLweRjXq0UbLIjcBxsGx2IZvlf0ATjz/6qypAmY7bhrk4ahsIis6ccXKHdueAfUgk+RWPCLh42c6zEeKyJpRTdRAOqBbl/Wq/uT+q+Fx3FoTIuCzc6+hN8j4veGjuAnhSE5gKnco3A3XwYlq2sq+lmP4yEOpqEoG0M+mGDYuYT0pKCFHgLHKt3T7T9p8GcWH+n1UwGa8X6kQt2x4CeqPexegT6o/Z4Cr313PHdgrsS2ZReLfpKIf+IMFnmVmwxQ9AhithYT73+p2s+JIVfrjwiHnpAZrSsr9CMstQXP1+1+510N/q8E/YoekMN9OMFvi5LvkRDsy9rgFCOoPdpgaQIWBZjf5KCSQszZJ1ivTvLokpen6tsJAVND0NFqb6GUGg2Im4Dyx9Pn7/0dm4pADAslJzTv+dKNrAPQ0wyySm7bj1RQgbAXsRa4R+mBJzpaQmHLmy0BLoL+Nh2ZRca8uUc6P37k97n451fvTieAE8BdZ2ItqFEK6oOJIYPsiU4woo140Oh+H/UC++gatHYcOFT+2y3AYvD1rM/fpxdUcsAi70c0OxAEP45X/hymE9XeoC0zfYhbcqfbhs09HpwnKMDR6g0mmYyKth/UcLl9ITGQ8N1S6s+gA1HvQCc2pluPvN2Br8SyZyfyxPP/VhCi1L1HWX2CQCuAE8TIq/sBYdANZmTIwqq0sb0HIzhhugBeUpBZLFyA8y+EErsBUYDZHYN9QAAooQwOws+uQlhdESSSqk5Qsh8LSYI6LDS1AbmOvLlRBqQIeITvM36+TP63VfE5hFClCTr9zEyVFwS3STQBy66DMHB+PJWIrfgGnYBx2dTboPa2X49GaBVlePA7CFx4iaGi4ns0aLVjMGvtPTDtmO4XEE8E5Kb/8qYai+NHl60LgAICcUCoJPVeiYG6Pxw/X9VFNVbFn9FNPzXoIRDTyzcpREYB5Fm1EQQn3KRi9wKApR8Tz48SwxnV3qM0q7ZhpdKvr0zfY+gO4oQf+EGPFYW/Xf5hwWsUgxiBbShGoGIx+D2eH1h2EeR3UQMH4zMaUKr4033nzkSkfQADelFbLOQCalxdxvN8mInhPas9bxtGJw29Fx3Y8429MAS0fL33Oeo7qFZeiToCC3B/VSNYuU0fgDnkhxGgMFdxiYEY7MYel+OHPH30IMeVFK1C79l+QdXVpFqHlMAXEf3EYDyfkkGdNvJ8f3RAXU0jpgM7jMNA5yCrtfzOicKG/M9bgEkEjqqPPDEcDfqVwGZv6zcO9avDfOhf4OmLFd9OLBHHdxp51HvOBlnAoQksYjASA1xnIhPsapTCPjbsGB2YevpPpgM73EYeSYIftgPgte6CWesVBB9QEgfnWYMgoeC8ql69bWoRIqYHvSIv/u26bj/jdqZ9KSGk74JRo6QS9PuTiSHm6Z62kLUGH0UO4rwWrhtRETkR4iKRdI8giJ2D2nUCMjsA0TXiVDb98NAf/rCMlajA9wesWHZrAe1dlwRyVI2jx4KkyUHSx7YDe6YD4tOC6XW01puEdAJwaEJzf1uATHi6ZlSCpBQscsh6C1xRcWEG4bCFeKcAVhVlDu54JQIkTT21hptIT/Afk0kMcS9BKfjBJozcDXCrtgbWXxbMAw3INQIxtQJPAGwXmYaBbYh4SCsuKwLOAQ5awKskCMmRg8P3xwlBfbosQaDqyZqBkyQe1CLQACoTgN4qbyHsPwkTiF2pYaj6MAXBmUosQHnUEYCsBL3MW39SNKMJ5PfoBsT33DVJCEbFnBCMOkHfvj6Xq8uw+dgRIhGgAiUqf5QgKDFyhe8nnYrlqn9sG1GoAfirubygX4H+8IM1CmQrMFAJ5ExzKIp54nPoVU2Auh6eBShDlTV4u5c4HE/fVvjFrsII0Ik6QX+Iq68jB19ziLoKC27FYe0gC+j1RSS+BgB7AvAM3m8HLdy5fV60C8RMVuhD1ieQB32MCCq0QPJuvuw5IHF/geMKwOPdpmsxBwVEfGEOgeincJqNmuSFIPhPq/xM81CWIIi+gCFBqDX3QPYd2OcCRo6GZBoA3AM+00aesAOQ7/2Pe/vBCXoguD4OBD1WfPwClzcui12AuH+gC0gEwW72KfjBCQRBr05D0IQc7N8PzOCMehPWK384MPVDJQim7yDdoiRTItzzFV/ZOX9sYFetP0fsQzb6O7wOoFjxk89YoQXv+BmSN+yYHYO+BsDRAXHhuJXsEFbdIEGZQWUkNVNzGA9NZUVBIQL7jASR0AclE4Pb7JN3BO72mG92+o8UG3nybj+mASh0FsLKn9GPxDrEcS2Au35BzHO1BksriIJdpqWjKR1wlpR4fN977rZqI+XbYjYDgVDpcYQalOYKMiuQbB3G6Pu/HlMbi9a0EMkksXtjvvXTfgMKAEZRN/i/O7yD8Da2S2Bdh3ICWfp8yuMkYl5a4df4vVWt4UF0yyqEnaT6swYyWB8/j111Y1ERS9oB0SLMtBGDEBD1PEHwtdjUEAHnqmoHU4wCDAoAS+lHwtu9eQLUAgmxVvAuMB9cELMV3m8EUtcBYYI9nkNIEEJYrQeUHfnzzRyC39j8CgSkir/E0P2odnAmAqDnDIhqrtV9BDNS2POjv/0pwKr6z1h/PMz3uf9ykFYq9TtoAXSwpz0HljdvBCVAPY6t7osv6gFhMpkX13rcfXQMIpuTsfTibkfOPRAC2meLRipI4mDPwMD5x+v3+Ey+qEfACwoUEkKQSMZxYJDz9R68PyP43yvo2aYf881rNQbZgRU/jp80QnW/hdXqJxMvCFxXQSNHpE8QiF4XI+wFfQcw7VL2Md7RRajsKgh2D+6SLAKPF356+/7yXYBTUgFy/38StUjFHweD+iiHh8/LV/i/TSvGk4L5x7F6AsIKbgb4C0YjgdGRIToGUx7cgS3JKP8pRcgak95BJGQbjaJdBYQ1qHYnYHL8F45QgHx2gLMQ2cDxBD/4SeR0LSDi5XzPQNjM4ySE/HGG6g+ugltLNSARn281BPtNO72eJLjdX4ITSEgpQvJYFEUg24f1qAYQNQdxx6Q/RcB85j9f+03zf2QV33IDPHegNgPABTfqFR8cZK9TA7/ll0EQbUUHW8Gr1d+MSadia+LRHwhunv87yWoJ3h/pRDwJAbDNQQFd2P2mH4kP/wDT/ZeN3CK3+ZjvgVpw4r20AMafb58j4N1UMknuj6iCx883PU9g2VHVH5JX2eEcPghSgRBCKPzK0Q3fknwPN0Hk0CyC0zBkz//7duEetgFjVtypASDI4CsknYJgYDhqsBxxy29+eyxrAZX75EEf8f+CkOcijMDDHx4ASYGGu8WHgPwpHJc0qOG8FgFTuVk0cRZVePFwHEIUEu8xSHoL5qWg4I7/HgOKXe2dcnu2SSdCGIDTA+AcxY1zYL6Q6AAFu+/1GvjKPSeEoJV3NiM4Dz9C6oWkEav+NWjPWXNOIkKgNTi2I8LeBgaZHJxqrC4oNXoB9pzzMws/OW3ghSyQJgjbygOVEDhoj4nHLld8HPD6UUMFVLIgKrTL7cFoBRLQgEdXIseZ2/HhFPKbk4d5tYWwwR0nIFQSD2P5gQhs6meVfB+Bkyz2fOIvX/zxqsSODuAGIOLtPNnmIPCrv6Kqvgz3q4tCwNl9lWYfnsdHj2HTgQw5IBHwULmfSu1jEV3gDFSxTBmqSEVqiYK2IkWcRiAkwV/cyW9YhqHXDw9dkNQAcO6HFNJT7oChfrPUYc3KY17zAd+evAwF2w5SCKLV4EuCEKsKfjBVWHu9Q9Arh4CoBqEMWYBsNX7YgKP/69uC3M7/mOOz232QT+ox4iCyJGEFP4oBHd+GVvXBwX35nqp7qeIbV6L6tdZub3ueJ+gBIKgC6S5gOQFxDoGr+Bv2nzqbknd7ph/EmXzO0o+kZdc/wqvQkAOUffVMzKtYgx5Vob1/+HAfCdzHSiXHenX35/2JTr3KZ9Ruj2lYiMhLIFoNyMq9hFroeYMTE0bSLbhb4l3YlFPa6hMd2jk8dmrDgdQCnC4/+ANFlYTB6ATlx2GDGXP1rvL+SnWHw+cJes5/rRWt4H2pw9GklD4uSMpwasIQiaYR92gIyFX5S8dtRZt/nCAH48VXW3hRE/HKOsGquj8EM85Q9cfeAV4XwNGAlmIFIwPYrfLKuxV476RRetzcdeAsRSZhiHizCKEIOHn3EMOWy5X4uIJnXX6sFiBFLaBm/THOQAkVJK9j6TKwiSDTBWpwHkSPQJX7U959uAkoaTUuug6oQCBz1Zlxm0OJSIoIw04M+7zCGuYiznCfHww9AN6Ir+HXA7lfn2oBSJ2FOOh8SzINfmcAyITq8JX/sOMPx6A9LeYtVfwgCBZhdu25OB9/XmWWNPUEPD5dUuJ68wd1AqD2+w1PI9KxE9BW5t3z/igdYGWiL7L+wPv9jgVY8f0ZcbCKCuLAHN+c5wa69Zpr0J9t2KnpAGzyiAIPiFalJ8/xXrrA6Y+/8NoDnWCPNwFJzf5DpVkHte8hx76P+HU1+HEytEeSEIzAsu5r6wPJGu6oLz8VrKofXLce+ywIHhNa/Dmw8LrptWXZ4NKZm4pr/QQ7Qk8ehMrPtAF7PQCD309QgRgRZMKgAbFREAfBBXNalbHA9cEHMo4IgIUuPjjBWEUFEQpYTkhVO43eRiynJw9Jjj8TOUIlJExK+0wA4gWgQvcFBHAc7P4/u78/Ff4CC5ATB3P3oUwFClYgcALcxzp/B9Ez4DUV8RjBbsCBrMH4dLNwIDaCGhA6o3pXksdBvYBsktrXDgNJKAFy1Z+ZGIy5NXgXoBT8a3ZgVSPIUAMV6DjLxhsV8wX4n4ibbONObHNyCr8Z4FinNFjg8ziiF5zSV8A99u7Zdf5OisvVaAAAG3VJREFU/kIPAJLWX3hUIFD6o7MD4WkHIMXBk4IftSrPNBJVk0OoC7ice8HGS8XBKDoz/YFBLaQi392lGpCMJfhD9xVkx5Xbj73P9V4m1j0v73x9FjDDPlYvATkgFAVWcdNvJBamliOjAwRV0EpeRymAe717kMYRyy/j5FwFBX0fP7Dyx8gq8wn2ZXi8GfGYR+lFcGJSxa3Y84WgzBHetlU4cvKY44Ps4iP9fsgsPGEhQTAcHqwwGCj61SoPexKwasXFqtxq8qhD9SixoBBYcJEDNzmIoi3J7QkoJActVHocTVpPBCDhElAvMDK1PT/Sq3DwB/ygmyB9GNhYDH4so4Foy48kkPtZfZEv1PQTxYpyX0EI3Bu+/5krcN8fgwVdwWu2JNVNWAk+PcOOPMNdGFyAZ5Aj6gicgzNfwuHZg0HrLxBWfjSRl88fVCo/apX/IBrIvf65ZxtEoK9Bec4KZIPLe76osQns46NwW0pUPCPAyMc4A/KXOwZzFLGbAqD5xhhbgBcWfoJBAlarcCSQgdQJ+Movnih4gjZQTw51rz588y/ZgxVUEAQ8soCfX8OR26JwujCLGFAMsOjnwGrlPuQw9D/PPv8BYVR7pG/eeFtQpsLzR2KFI8SwKj9KlX++HeLOPuSBKrKeHBi7L4b+Kx184+ptAp4Trcscv69oARVYzWgaK01H1X0K3zNSmARKtxXYHvwJuT+8gLGGWgpHcWOmBeljFB2Ckg6wiAYOqfxEK3GMCAj6kIiTWdCBCXhkjUKMgJcLk271N9uLSbtvvK0S69OXAvoA5z94VsFubbmZvx4QAnXgBnJxENyQjy38wef81uPhxMpPJIQzr5ckuUTKe0wZyN57iFTWga8GvCwlh5UqvYgmaNV9XSxEVWs40kkosFwA70RgNOu8mLZfR6wDiwRa35y7j08NksqPQhcfkRBK/J8R75Iz+9C8gJpqzwiIeZII3QnYOkJWbVEI5jNuA+o2BwK82ifwnpSgHwaC+GNAdmW2VXfC+vPu6wR6lBj84C9WfvivZyUhZMJlJhjSukDlFJ3g4AvGJfC1iEpQJ/CaEd7G9wds7p71+odruKrHip/C7RdsxeVjzIxhoNkFGOW/+sk/YVAGtltfzZAIfzix8gcHhZCXpcGN2u69qWqD9OlRFAy7x2fQBhHUiETB+DocqvArYt98f+AEAXApsEmEcNLC0t2uPHCqPQIXwHYDfI4/9+8LMpchqr5HK39MJSrBXwnutNqjovjHFdq+fcHLp7YLR4mGgduW5hFpAXUoL4cTTuW5HJSkB5PC0S7A+8c+837DyoM1J9iv/po/o3BunlDqPjOSO/YbLFd+FGy9sxKFeT8b+nLNPrkAyD53FtT27yUS32yqUaEGTMBiASGcZ0FmK8nWxbvjC1q6WQC4VdWdAcBY8eFoAzIrC0b7Wt8wlPcIdE1FhUWeKU1Igv8Q/0dl4k/NnYSxdlDon8diUDeuQB4c8XVzcahRgyyZmNC+LAgeCfSVALde8/t1DCYawNoePGT83wlOpFUdOZKwxn89OsMEf0X8CxJCBN/dwKbFwkSMgx0ACJJDJD4iC1JEYh6XcEqVHpx4+J4I4UiAl26r5x64sttvSlAn3LBuQCz6edU8C+J5epBrC4YP52EFDgHrCw1B0eU9bOaTgh3wmYvQV3Oqqcf53XnVNXUBELX1xtSgFrirlII5d3HFulxBCNEfZx0h7K2f34XwdHpuYQcguN189Ow/nPXclaUcqMH5leCXjKOjbv3F0a7i2ZaRHmBe5zwnhA9S736ZC8AH8LHkg/T5znYgmES1dtuzGo92qwHIquiWX+4KgVLd8utv9Ml1BQNhEJW/FOgweiTguCUoQHkEwYhjfQIgm8eAzPKzHqAG5xGiiPyxeGRRaYetUpDVpHVC1T9bHGyaknb/TQTnuG7rDYwYCUT7/cMjtILzA+Go/FPw581F/mWeTkDuBsBCAK8ki+A29nMzPn4Rzjv6QV7xWW4fzQFUxb9jQQ1qc28kMi4mDl1NBr4usIsz5ltZqNm7AeJXfuTHd7nioLEyPBISU+8/tP1AC4Il/n+YGmjg2NiBRdl6yCw//zG5ph7bqaBuz8B4VMU/TqSsNPbwCeZA1cdxyG9SgKzRZPL+GXFOiH1/SFZ9wX8M3zUgvH8a4rMBjZj/h1W9MrwTiN6MlsCKiI4gycBzgV/xUaQGjGDHwHiYi0VIzeEAasCpNuL76AC7BIEl7i4AIxnAfoMxk35eJbZ68wWEUChs8IPz/EEE9BkUoNA4RCWSLJkY1h0Y/dG9bVCtUVPe7QRhtStXG4nOECDfUxc4Uw/Ik8JkA9o9+a83IrfHH11EdFUWc4phNgVFWkPsIHBnCvCCYBSgqEN9qtoXuwHhByYoJJA7BxIkkRwpDGgAHo+vQ3ZGOwCFJCJKUAx4MBpFZWvReeLgtBBkDDQu2OJxXa7SE/P4ZiUPHABjY1DsFIhPAaygWewiXK72hHjow/k8gCL6gKES8qcDZ7A+EhYlWCPGCX1wXIwzkQEKt8cP6iqkC0FEhFj/ZYtvXCtwuBLcDT5wXN+9H6ZEIkTwV/x/s78fXFX3siWHEKrC3tw7EFZ31Ll7ttknQyEMGgAqCaVe1bGk8r8nFWCQQR0h7CY0dsU/mIeIuA1AGCo02Q0YVXxub36sG1Qgfo0CBBUXxap+ECFEycQVyViBEBFPt14TK9rZHB9EwMG7DPXOv0OVHkdtx7OSCXfb3av4CFZGTwQBwT7/hKPHE4PzpJ4L4+FM9r1n8B+B+9R9I4Fu9brYUZgCunZWNxdQgIs8mASBQ4F8hJpEiaf4GPihk8FdAxin/kybjZjTj+mAQy6ihZ9whDvHAWB6BKrBXQr+5SBfqPaINwiz12UIwoTmbPACZY/fshBBBKNlW8ZCHwH/cVKSOZMm4Mxk4OwE9JeB+EFkn1IzcPQoiSB4vGgNeJSoik1A7m0TCmE/HrggB+/1M12C1Z18ACGoIeH1pH2IhAqFWgBq+kDFEWAvA3X8tpW0cnSD5WAOriOHhnYraF1eLTkS8P/QsHUBdtMPnOrMaANJE9AZiaKWII5Ue/8PTHn/UcCSTgIF2xN4zdmAQYIAKeBFl6FiO0aKfq5jcImHfPwTxcEdRmD3LcFoAva1Hdjm9UgGggI9YOoPkOBYLsT8HlG3nucMDGkOOJ8CkNOELdSO7D5qqAeJYBb2GpABgRi2gxLITgrOQ9C937HgB+0i7MeRx3gfPWCXLtgbLJAu/gCFBPzRX8eADJqCvA3FViC/BlOQC4LZyrBq8BdQAOUKoKjqR7v7EFfVFMojPgEoSlJesNIePyLHwW9NRgq7E6HvUN8A0yj0wyWDHRZ3J2A1jHdMyu3hCGwSDwdRir7h9VP7AKLgPoMCgKziOFLtrUm8aIFHlgxYfz8WBYUU55iAXauo+evJaIK/NTgRJM9sUcZRzcCnMdNKMJc7usnAyrpxHYkTRHK+n1HxS01LheAHqRWwKIDqLvQC0+PupHZgBawfVGsiniTVHwZHRqbUI/D4Cd+ftgyLAR1ehkIiqaKFw7MJEwUIuK5zsu4svoFYCFKgBJZACBuppOId2RDkPZas8H9kULcA9a0KTCQDGtpnzT+RMJiOGseHl4BQ1C29AWUXIIf/OIwwqoNEK3SCuA7FRiBrE9B4/PcrGJ1OQNj83F4Xbol/TgVHfMiIZLAdcaVkgh8sLrd+liNQH/FqsNTfj15m1J0X+ffZuq/gTY7QnvIfJz6UzBJLs83ItQpt3RfZz5iuGfNPajpngUm0R8DoA5jDlzsOTAwZjzsC3Jjxg7H914PjlcskGdghgx9HG4OOQH34uwQyzz61/0qiYNQjXxECuWYbGM/DrjtPH/Mw/K+gBLLSA+cEfPr4MroArzcDuybbr8Zc72i2UnzeHnTgzD4Ug78SzIvCoARVOQxaFFR3TzWnkkHUVFShEuqKxZnKz4p4YYcf8ZhYhuu8wFgSHcuuwCJagI4bgchJQK/qe9c/RT6nGcg6KGREJpb+MI0EY/b0jcsni3AJBeCQNsBOFVYoApcM2Aom4VFgIRdHpeIG8D3YaxBD+qCiQ+rBOSVnci8hzkAG1t/pgHA4uwDzmu8xFKkkkIqCfkIRs204r/hiDgutoAAcowBMZ9+KS0CcXVBOHCvJw2jMQSJyeoeExF2DuTuRcuWAo9sefyUQ6/oBaIjPtiRH1KvQKvygAHb171d+vc4GRMDPoxN/kL5pwlVh1mBQ1quQJAJ5j0TgOAis+h8d3mnC8xTKE34+8sDNjyVXE6nFMN+H39TQDmocHScENvN74LoGScGU4f7g6IG3n3C3qnG6JBS+Z5tHOOzRYQx+u7MZmAl0OSsRLAS/VIKfRAWU92+12aaVPksGDBWQuCMvgNy2M2Mt8EwqbjosZAec5xLEAmXmcFTHiOWARWglpNpjdEtBQRxJJU5VL5/7F1X86XntXgUK4q+KggsUoIIK8oA+kgy4+zLaACqQGTVOX6MBWdehL6BxHn+tlyBMDGAqufd7WOX5WTJwKYDfXJJP2GXDPk7Tj5Ed7BOG7DMFaBRAJgI/+H2Ngeb2SKb0zkoGlQBHkefDr7xMA5HZeJPtKIzyApI9gmnPgf1c3mulfhe0gFekDCdNFnrOwi4Gs6eTACNjB+Uegcgojog4V25P8bctRYY6RL8AJklE9ACFAGZdBEahd4d4CmghFhbzcwaXYH5qTlS6DY+KfNH5Avzjo2JJ0poDkSCMxLn73H/eB+ifvgvyIFCWAji7BWC8hd0qj0FziMdrS70BlVbgamIgcmotGZDNPwm0L9l5iHv7WRoAFx57ScFS2r2iwot8oKu8l+TOCOg2mZ2nFdjTgOFQENzKkJ8OjEnsE8f6AzyXwT6MNF3RDRnuj0Lwo6wTlBMDIyqaz6G+RiLJMg/KUrQV/rh9uH0tWduwoxmky0kSMQ+rnXxZsGadgnxfgk1pCnsIsGYltvfdzTOBIclIsN8MLAGcz5gBwj94AE8DuC9Molip/JGwB57nRyJiyD3pyk6q5ij+3TzRLohcqyqCEQBTepF15+WVmW8SEr5jMUUkx3oMIsrH3ndwAQganKzyMpOJNxMQooGBYwcByw7axIhgPRGEr6GSGJhkAELoQ1YRg+dPeD5IIRDIqq5PA2Jh0Rq0YcS8XBi0ghGRFpCtWTdum5+yLOsQf2EuYY8AfnbQZDgCjHxBSKwTGpt8QCIDVH3/4H5OwEvldhliINwAFLsEyyIfGKV+vm3eEehVqKTdNxtDiPoLHCRiuwTJxCECxMDqDjTvZ63KaPKvRgV2i/F3ohm88V8LN8hgJcXD5pVGIPPNn9EBqSQC0I4AMxBUcQNCkarkFgSn/oCs9GCVep4eUG5BRAOcQOCWlGSc3If0IFqRfURQGRrKewPKEJ9sLnIowKCcw+f48N6UHjqYtgInaCCkBbPSj8VEkCr2g8U43wY1xX/BNkwreQrzg+oaJghOCGTU8RBxuIp6VFOGoEXgEsBLIgV6gBgxoLSI5CgiYNT+GBHsU01GthrceiMUtv9KgAYktgVNeGrBbtiOQVi9x8WjiAW7UNUnm4Vet7WtsFgDCDYEwQ/EVL1PnQf/xCDLTowTh4c4HPRDoQaiwhKIAae4B7xgCBydI/CDPOrevK0FR4p6w3VfoXgQiB3T1N8Y1PCD0X19JqcHGfzB5WkQE4p/kdeXBcEVUXEIFqSij82lMyrWq/7c+LFHA7z5/dwOHHg8s/Y8C2CmhbmALtare+4UWLfb25BmXABKABTniC8gRAP2yvDAiUAsElnrxFzITQa/sAFecAOY7zPV/8jMQHSbWAiUPGkQNABhw85xrSCv+mMSzFR8+7mjw01A8f4F8S/td4jnDHYxpT8/OEyV3gz2+GTfdAeAszswfJNGlQhEIjB0Bls0BKn4Iw7WKu9f1gmSagmvqleEwJwnZwjO7npz1HdCJ1hS/mlBcRXyF3i/M7NxqJFoeH27z7nnJaBmpUZKHsTbGUc1ALEoIGsGYl9ixS50gjAT/VhB8IzvGTrBVfWEz1MzAkRFTtecW731VdjNQPukVdhdn0Y8d/a7WYH6i/TBPBzUFwAlHwtGHOQISrgb1AMUgDETTA3+THAdeRJhg59V/Ektofa9I8wxVICkC7QQSAd2O3cftzPzdMK6aA4iZI4ILfYRbb9RgqICt2AxVnYZ4kkBvHOBxT/zN9ybHx/f5Ql2fkGCX6ANm6F8WCfqAS+Eq5AGcHJd2IFHagTMHAAj+mWBnDXuc81CjhsAi5dL2K8QCYI1aJ/PJtSSxEFXASv7C2I3ZB9/a0j/7nDn/j1pHsz9Jr8fNpxPBUAUUYD4wz5GBlmyAiORjtAIGDFwzSUwqiNZ1d1tPiB7/Q9VeI9KeJU16/knkEeQJEALjY4rkp74fCZiMDSA/PgvT/aT2gYgp5E/P29AKBQAo6TRth5T4VesQFb0i4K7RA2MZpgyFXCEQHCOixuYMPgy2L7+45ezSSKt2oUkURlpXkEMOLSiXPuDQZjk63N5bmzOSxQdLHX7AhwUEA0BAeQPJIQzkAuFlOK/GtyLdiGDKEBdllQ7YouxV2Xdwza9So4Kp5Z0yAgUhTlJgFzSFrznIHYIwKcCu2/L3LsCg6UI1b1/CA+ApIV5/32HqOIjdQusE4azip5Wc1b0q/QGIAlaWEJbXP3r/L+AEipw/+BtkQVY9fIM2i/ZhgVEgJO6DZ1ksVtlYdoQAPhVO0oKmYBmnAYco4DRCRB3TwCziptaE0auER9/VzRqKNOEYINOQg2m1l9GpGNQAhh1v6UmxNQh2M4+LmlUzll0OTjYQOaGlZAEMCrdhmBphaMBwBADrSQQc3//He8KgFETT7p6BHnjj2X9EXsDjrgBS6ihoAmcSQVYmE4JgYWFpp1waAQRoqDzxDhU+HxSnZHz/9JEY6Y5MJA+cwoWrt99+U3Mc/9g/NQTFaigAEtwB1yBzwzucZSX7RZEILhR1d5GDCsBLVUdIQvsldZfEJt5i/MHx2hGJZFkVVyK242iFeh58oBUFqIQbkfp2DV2X0CkAYgv1sU+P+I/HmBu8nErugdRnUWhfp+A/ddlbEH3uQlBsNobUEMHasK1HOYn8BEEvCUaiuigXRIKj+sGOPA4KAWz9/s7WxcgB4+a6/fI2osEwv4yOENAiPf+wQhbc/5f0gGisWuQaRFmGoIqguARWsBQgTTocDLMT5OJUQnhqdCEig+/EShKSEgTVV0MBMnz04BcshPnLk/+OaV0/dwKzB4QUt1NB6uTDfGOP+cNm9mEsBAFiM7AQh9AKVEU75vy68jeOxrUC4mDEuYO0oLqoSdHaEF2eXYYSm0V+oEOwpLmYFOF3Z4CmAeBTIGueiIw2xoKPzDBJVBXQ5g5O8/twwA+QguIjJt3+g0NQEcDfUXgO5gsqlTBLkQLdl86K3CWneitQ8sg/5oWAUJP2C3V3RoEyji5n4b9lB4t9pz2CA+cAFn1Z9I/uzYsU/ELtEBOCHYQQqGcFejV+yeuRJX31zsKV5IGjway9z6PLDxKwNEPsBuOEiqw57jGgOtZ1Y++T50AuMFl7hPIbhskiOwsATtRoc7rS7dXrpcgrMCGJca6ELJo+Y0be0BW5ZKGcFz4y8W9BduwcDnK9iO5fagsKpp9ANnvDPxeP8THNyIVFo1AMas8Qk5v2Ytm0LCCYAXqn+wQsPTBh/5Bcnne14Os3uCQt28vsK1WUESJFviBgAW//3u9PLxusXchcCR2WsNzv/ImvgZzzkUByDUAIrjTvmSHAowpJBQE4SUlxMxnARlQbIqkArVAJ6pBBvELCCKlkyCDAP45BYfEPfcUpfMch3Vn4bheYK4E66BxAxHSVd5INgEPgU/NBCDfNQ8Ho1CoINAPQAW/QT8OCIZlNFCB84XhoDChFByHGjx35v9BLgyhmojqHYb5QYXnuAecvua0hZe6BV9f7v4ibvgvamrmAc1TmaEir0LQ9h97eYAYVoM/nWA60i8Q3Ifezha9BqaaL3zvqd6IAuwwLSCCuCLuJWch4h30giPtyiAphKEBcCu9BV5wwzkMxID8rhMwdwMhcSFgrBT3RUTQboAUg3+p+Qe1IGarOioVnazmefV3lHpwA0AcLWCahUiXwePHWJsP+GH1gnp/we5KfOhJAbsj0H/BIEb04TbrTPsAyb2LLu93KwfCvn5PLAwrOXAa72eEQRo1CNdw5IprsAZ3hApy9zlcITG2vpCihsRSYxNS+J4vdBZ6B52eqRcQ/QXmSjAWSfa/5GA5qEg4iJFtm624AqXLrSA2gx8p1Mdqcghv41S0lSp/xAYs9gakQc4Ie2RTUYwYgt748mV+FU1Xgp14eW3XYZ6cdqGTNHwHICTwEeTPl0jEZwIgP9gDEaogeg5IHWCF+1eoAhvEKPB/EAeTRsM/pSAP5wjWEUMM1/NJRhwJbpJSgK7S7zF3EOsI5jBQBK9DV80Z8Y0COzvmWzJXgDl40KEC6cqvqgi4OB5cpgLFYK/1CvDiItXqC6/S87wfAUfPtxqfGNzlYaOjlf1IsHPPvffHgDAoEeEST4ZLZUd/RSo91/BjXY5ggWgQ4In3fyj4mUqPrInHOCLKO3wUwRsfyXpt1nEIRLrqcWeTuk7bigsbid1zD4iDRQtnIdQsyIXnFCn1I9D7ADgxEhOvR5AJosoUbu1FkJyYCi9OhQERoIx+4AX/YqUXQhtYEwKN4Cy1HntLMmtaAQpqfrT/UCoLSxeswjA5UWPPi0mjajUWxMTdVusNvt/ChMdmILK5IRMFu90BMEzFYHdg2GAgeYVHMMJIBTA7EFTx/5fpgTFXz9w/en0ZjD8kCDoKPNGwlB01BmoWQbh+AxR689mBponGJOr9OwmMu3dtJ/ylW1Tik4ElUPmR9RqII+pVhD9ychABMQ51gOIZg+/G+5mGIzLB1JJC5WhzYjhJ7IWmLDpA8jzsAafUPkB2WnFBF4iSxkq1ty7f25rv/+EQLOxs2oUdTSA9HIR9swdBlCcFe9owPC3XWDDC0ISVzsEVbSCF/sWdA5Fu4HJqankp2SeQCYYrImNalfmhpVxYrGkUS4LeSUjg8dD7+D7w/ybIfy7vlB9/HJ978zr7/45Qgajzj+4EjIK/ULHPRAOlKr/aG0AFcqCyu0GcW45Igh6JMJmhA49/U+cEssHNJhtXDC1MOya3j/sAiAGcrEtqtgjBD6wEzSDc7D8o6C8rIqAZyPk+NQoNLAZ1hR64Yl1FBY648smUYKnSg1Xwk/0DyRyArByMUobyByhCcPnOaPyoegREFS4jNfYAw+IHCjdC1J2WDZBke/OyN85J24WiXwDYPoJyYuCD238ulvuzwt6KgHf0shWKsqCFFGjB/w8HU8eeTED9wAAAAABJRU5ErkJggg==", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      qv = vv => xv(vv, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      Iv = vv => xv(vv, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var Qv = Pv(39395),
      Zv = Pv(36594),
      Av = Pv(39441),
      Lv = Pv(39588),
      Hv = Pv(39670);
    class Mv extends Lv.c {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let yv = (() => {
      var vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv;
      let lv, Tv, Wv, wv, av, sv, Cv, iv, cv, Gv = Hv.d,
        mv = [],
        jv = [],
        fv = [],
        Fv = [],
        Yv = [],
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
        Lv = [];
      return vv = class extends Gv {
        get useEnergyConservation() {
          return (0, nv.c)(this, zv, "f")
        }
        set useEnergyConservation(vv) {
          (0, nv.d)(this, zv, vv, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, nv.c)(this, Pv, "f")
        }
        set useSmithVisibilityHeightCorrelated(vv) {
          (0, nv.d)(this, Pv, vv, "f")
        }
        get useSphericalHarmonics() {
          return (0, nv.c)(this, hv, "f")
        }
        set useSphericalHarmonics(vv) {
          (0, nv.d)(this, hv, vv, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, nv.c)(this, Sv, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(vv) {
          (0, nv.d)(this, Sv, vv, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, nv.c)(this, ev, "f")
        }
        set mixIblRadianceWithIrradiance(vv) {
          (0, nv.d)(this, ev, vv, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, nv.c)(this, gv, "f")
        }
        set useLegacySpecularEnergyConservation(vv) {
          (0, nv.d)(this, gv, vv, "f")
        }
        get baseDiffuseModel() {
          return (0, nv.c)(this, pv, "f")
        }
        set baseDiffuseModel(vv) {
          (0, nv.d)(this, pv, vv, "f")
        }
        get dielectricSpecularModel() {
          return (0, nv.c)(this, dv, "f")
        }
        set dielectricSpecularModel(vv) {
          (0, nv.d)(this, dv, vv, "f")
        }
        get conductorSpecularModel() {
          return (0, nv.c)(this, Nv, "f")
        }
        set conductorSpecularModel(vv) {
          (0, nv.d)(this, Nv, vv, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(lv) {
          let Tv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(lv, "PBRBRDF", 90, new Mv, Tv), this._useEnergyConservation = vv.DEFAULT_USE_ENERGY_CONSERVATION, zv.set(this, (0, nv.f)(this, mv, vv.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, nv.f)(this, jv), vv.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), Pv.set(this, (0, nv.f)(this, fv, vv.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, nv.f)(this, Fv), vv.DEFAULT_USE_SPHERICAL_HARMONICS), hv.set(this, (0, nv.f)(this, Yv, vv.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, nv.f)(this, Dv), vv.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), Sv.set(this, (0, nv.f)(this, Kv, vv.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, nv.f)(this, Vv), vv.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), ev.set(this, (0, nv.f)(this, Uv, vv.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, nv.f)(this, Rv), vv.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), gv.set(this, (0, nv.f)(this, xv, vv.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, nv.f)(this, tv), vv.DEFAULT_DIFFUSE_MODEL), pv.set(this, (0, nv.f)(this, qv, vv.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, nv.f)(this, Iv), vv.DEFAULT_DIELECTRIC_SPECULAR_MODEL), dv.set(this, (0, nv.f)(this, Qv, vv.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, nv.f)(this, Zv), vv.DEFAULT_CONDUCTOR_SPECULAR_MODEL), Nv.set(this, (0, nv.f)(this, Av, vv.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, nv.f)(this, Lv), this._internalMarkAllSubMeshesAsMiscDirty = lv._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(vv) {
          vv.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, vv.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, vv.SPHERICAL_HARMONICS = this._useSphericalHarmonics, vv.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, vv.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, vv.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, vv.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, vv.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, vv.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, zv = new WeakMap, Pv = new WeakMap, hv = new WeakMap, Sv = new WeakMap, ev = new WeakMap, gv = new WeakMap, pv = new WeakMap, dv = new WeakMap, Nv = new WeakMap, (() => {
        const zv = "function" === typeof Symbol && Symbol.metadata ? Object.create(Gv[Symbol.metadata] ?? null) : void 0;
        lv = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsMiscDirty")], Tv = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsMiscDirty")], Wv = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsMiscDirty")], wv = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsMiscDirty")], av = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsMiscDirty")], sv = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsMiscDirty")], Cv = [(0, Ov.L)("baseDiffuseModel"), (0, Ov.e)("_markAllSubMeshesAsMiscDirty")], iv = [(0, Ov.L)("dielectricSpecularModel"), (0, Ov.e)("_markAllSubMeshesAsMiscDirty")], cv = [(0, Ov.L)("conductorSpecularModel"), (0, Ov.e)("_markAllSubMeshesAsMiscDirty")], (0, nv.e)(vv, null, lv, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: vv => "useEnergyConservation" in vv,
            get: vv => vv.useEnergyConservation,
            set: (vv, zv) => {
              vv.useEnergyConservation = zv
            }
          },
          metadata: zv
        }, mv, jv), (0, nv.e)(vv, null, Tv, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: vv => "useSmithVisibilityHeightCorrelated" in vv,
            get: vv => vv.useSmithVisibilityHeightCorrelated,
            set: (vv, zv) => {
              vv.useSmithVisibilityHeightCorrelated = zv
            }
          },
          metadata: zv
        }, fv, Fv), (0, nv.e)(vv, null, Wv, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: vv => "useSphericalHarmonics" in vv,
            get: vv => vv.useSphericalHarmonics,
            set: (vv, zv) => {
              vv.useSphericalHarmonics = zv
            }
          },
          metadata: zv
        }, Yv, Dv), (0, nv.e)(vv, null, wv, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: vv => "useSpecularGlossinessInputEnergyConservation" in vv,
            get: vv => vv.useSpecularGlossinessInputEnergyConservation,
            set: (vv, zv) => {
              vv.useSpecularGlossinessInputEnergyConservation = zv
            }
          },
          metadata: zv
        }, Kv, Vv), (0, nv.e)(vv, null, av, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: vv => "mixIblRadianceWithIrradiance" in vv,
            get: vv => vv.mixIblRadianceWithIrradiance,
            set: (vv, zv) => {
              vv.mixIblRadianceWithIrradiance = zv
            }
          },
          metadata: zv
        }, Uv, Rv), (0, nv.e)(vv, null, sv, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: vv => "useLegacySpecularEnergyConservation" in vv,
            get: vv => vv.useLegacySpecularEnergyConservation,
            set: (vv, zv) => {
              vv.useLegacySpecularEnergyConservation = zv
            }
          },
          metadata: zv
        }, xv, tv), (0, nv.e)(vv, null, Cv, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: vv => "baseDiffuseModel" in vv,
            get: vv => vv.baseDiffuseModel,
            set: (vv, zv) => {
              vv.baseDiffuseModel = zv
            }
          },
          metadata: zv
        }, qv, Iv), (0, nv.e)(vv, null, iv, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: vv => "dielectricSpecularModel" in vv,
            get: vv => vv.dielectricSpecularModel,
            set: (vv, zv) => {
              vv.dielectricSpecularModel = zv
            }
          },
          metadata: zv
        }, Qv, Zv), (0, nv.e)(vv, null, cv, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: vv => "conductorSpecularModel" in vv,
            get: vv => vv.conductorSpecularModel,
            set: (vv, zv) => {
              vv.conductorSpecularModel = zv
            }
          },
          metadata: zv
        }, Av, Lv), zv && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zv
        })
      })(), vv.DEFAULT_USE_ENERGY_CONSERVATION = !0, vv.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, vv.DEFAULT_USE_SPHERICAL_HARMONICS = !0, vv.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, vv.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, vv.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, vv.DEFAULT_DIFFUSE_MODEL = 0, vv.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, vv.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, vv
    })();
    var Bv = Pv(39571),
      Jv = Pv(36751),
      Ev = Pv(39580),
      ov = Pv(39420),
      bv = Pv(39647),
      rv = Pv(39644),
      kv = Pv(39656),
      Xv = Pv(39629);
    class uv extends Lv.c {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let vz = (() => {
      var vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv;
      let lv, Tv, Wv, wv, av, sv, Cv, iv, cv, Gv, mv, jv, fv, Fv, Yv = Hv.d,
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
        Mv = [],
        yv = [],
        Bv = [],
        Ev = [],
        ov = [],
        bv = [],
        kv = [],
        vz = [],
        zz = [],
        Pz = [],
        hz = [],
        Sz = [],
        ez = [],
        gz = [],
        pz = [];
      return vv = class extends Yv {
        get isEnabled() {
          return (0, nv.c)(this, zv, "f")
        }
        set isEnabled(vv) {
          (0, nv.d)(this, zv, vv, "f")
        }
        get indexOfRefraction() {
          return (0, nv.c)(this, Pv, "f")
        }
        set indexOfRefraction(vv) {
          (0, nv.d)(this, Pv, vv, "f")
        }
        get texture() {
          return (0, nv.c)(this, hv, "f")
        }
        set texture(vv) {
          (0, nv.d)(this, hv, vv, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, nv.c)(this, Sv, "f")
        }
        set useRoughnessFromMainTexture(vv) {
          (0, nv.d)(this, Sv, vv, "f")
        }
        get textureRoughness() {
          return (0, nv.c)(this, ev, "f")
        }
        set textureRoughness(vv) {
          (0, nv.d)(this, ev, vv, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, nv.c)(this, gv, "f")
        }
        set remapF0OnInterfaceChange(vv) {
          (0, nv.d)(this, gv, vv, "f")
        }
        get bumpTexture() {
          return (0, nv.c)(this, pv, "f")
        }
        set bumpTexture(vv) {
          (0, nv.d)(this, pv, vv, "f")
        }
        get isTintEnabled() {
          return (0, nv.c)(this, dv, "f")
        }
        set isTintEnabled(vv) {
          (0, nv.d)(this, dv, vv, "f")
        }
        get tintTexture() {
          return (0, nv.c)(this, Nv, "f")
        }
        set tintTexture(vv) {
          (0, nv.d)(this, Nv, vv, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(lv) {
          let Tv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(lv, "PBRClearCoat", 100, new uv, Tv), this._isEnabled = !1, zv.set(this, (0, nv.f)(this, Dv, !1)), this.intensity = ((0, nv.f)(this, Kv), (0, nv.f)(this, Vv, 1)), this.roughness = ((0, nv.f)(this, Uv), (0, nv.f)(this, Rv, 0)), this._indexOfRefraction = ((0, nv.f)(this, xv), vv._DefaultIndexOfRefraction), Pv.set(this, (0, nv.f)(this, tv, vv._DefaultIndexOfRefraction)), this._texture = ((0, nv.f)(this, qv), null), hv.set(this, (0, nv.f)(this, Iv, null)), this._useRoughnessFromMainTexture = ((0, nv.f)(this, Qv), !0), Sv.set(this, (0, nv.f)(this, Zv, !0)), this._textureRoughness = ((0, nv.f)(this, Av), null), ev.set(this, (0, nv.f)(this, Lv, null)), this._remapF0OnInterfaceChange = ((0, nv.f)(this, Mv), !0), gv.set(this, (0, nv.f)(this, yv, !0)), this._bumpTexture = ((0, nv.f)(this, Bv), null), pv.set(this, (0, nv.f)(this, Ev, null)), this._isTintEnabled = ((0, nv.f)(this, ov), !1), dv.set(this, (0, nv.f)(this, bv, !1)), this.tintColor = ((0, nv.f)(this, kv), (0, nv.f)(this, vz, Jv.b.White())), this.tintColorAtDistance = ((0, nv.f)(this, zz), (0, nv.f)(this, Pz, 1)), this.tintThickness = ((0, nv.f)(this, hz), (0, nv.f)(this, Sz, 1)), this._tintTexture = ((0, nv.f)(this, ez), null), Nv.set(this, (0, nv.f)(this, gz, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, nv.f)(this, pz), this._internalMarkAllSubMeshesAsTexturesDirty = lv._dirtyCallbacks[1]
        }
        isReadyForSubMesh(vv, zv, Pv) {
          if (!this._isEnabled) return !0;
          const hv = this._material._disableBumpMap;
          if (vv._areTexturesDirty && zv.texturesEnabled) {
            if (this._texture && rv.e.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && rv.e.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (Pv.getCaps().standardDerivatives && this._bumpTexture && rv.e.ClearCoatBumpTextureEnabled && !hv && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && rv.e.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(zv, Pv) {
          this._isEnabled ? (zv.CLEARCOAT = !0, zv.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, zv.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, zv._areTexturesDirty && Pv.texturesEnabled && (this._texture && rv.e.ClearCoatTextureEnabled ? (0, Xv._)(this._texture, zv, "CLEARCOAT_TEXTURE") : zv.CLEARCOAT_TEXTURE = !1, this._textureRoughness && rv.e.ClearCoatTextureEnabled ? (0, Xv._)(this._textureRoughness, zv, "CLEARCOAT_TEXTURE_ROUGHNESS") : zv.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && rv.e.ClearCoatBumpTextureEnabled ? (0, Xv._)(this._bumpTexture, zv, "CLEARCOAT_BUMP") : zv.CLEARCOAT_BUMP = !1, zv.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === vv._DefaultIndexOfRefraction, this._isTintEnabled ? (zv.CLEARCOAT_TINT = !0, this._tintTexture && rv.e.ClearCoatTintTextureEnabled ? ((0, Xv._)(this._tintTexture, zv, "CLEARCOAT_TINT_TEXTURE"), zv.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : zv.CLEARCOAT_TINT_TEXTURE = !1) : (zv.CLEARCOAT_TINT = !1, zv.CLEARCOAT_TINT_TEXTURE = !1))) : (zv.CLEARCOAT = !1, zv.CLEARCOAT_TEXTURE = !1, zv.CLEARCOAT_TEXTURE_ROUGHNESS = !1, zv.CLEARCOAT_BUMP = !1, zv.CLEARCOAT_TINT = !1, zv.CLEARCOAT_TINT_TEXTURE = !1, zv.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, zv.CLEARCOAT_DEFAULTIOR = !1, zv.CLEARCOAT_TEXTUREDIRECTUV = 0, zv.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, zv.CLEARCOAT_BUMPDIRECTUV = 0, zv.CLEARCOAT_REMAP_F0 = !1, zv.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, zv.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(vv, zv, Pv, hv) {
          if (!this._isEnabled) return;
          const Sv = hv.materialDefines,
            ev = this._material.isFrozen,
            gv = this._material._disableBumpMap,
            pv = this._material._invertNormalMapX,
            dv = this._material._invertNormalMapY;
          if (!vv.useUbo || !ev || !vv.isSync) {
            (this._texture || this._textureRoughness) && rv.e.ClearCoatTextureEnabled && (vv.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, Xv.A)(this._texture, vv, "clearCoat"), this._textureRoughness && !Sv.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, Xv.A)(this._textureRoughness, vv, "clearCoatRoughness")), this._bumpTexture && Pv.getCaps().standardDerivatives && rv.e.ClearCoatTextureEnabled && !gv && (vv.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, Xv.A)(this._bumpTexture, vv, "clearCoatBump"), zv._mirroredCameraPosition ? vv.updateFloat2("vClearCoatTangentSpaceParams", pv ? 1 : -1, dv ? 1 : -1) : vv.updateFloat2("vClearCoatTangentSpaceParams", pv ? -1 : 1, dv ? -1 : 1)), this._tintTexture && rv.e.ClearCoatTintTextureEnabled && (vv.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, Xv.A)(this._tintTexture, vv, "clearCoatTint")), vv.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const hv = 1 - this._indexOfRefraction,
              ev = 1 + this._indexOfRefraction,
              Nv = Math.pow(-hv / ev, 2),
              lv = 1 / this._indexOfRefraction;
            vv.updateFloat4("vClearCoatRefractionParams", Nv, lv, hv, ev), this._isTintEnabled && (vv.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), vv.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          zv.texturesEnabled && (this._texture && rv.e.ClearCoatTextureEnabled && vv.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !Sv.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && rv.e.ClearCoatTextureEnabled && vv.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && Pv.getCaps().standardDerivatives && rv.e.ClearCoatBumpTextureEnabled && !gv && vv.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && rv.e.ClearCoatTintTextureEnabled && vv.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(vv) {
          return this._texture === vv || (this._textureRoughness === vv || (this._bumpTexture === vv || this._tintTexture === vv))
        }
        getActiveTextures(vv) {
          this._texture && vv.push(this._texture), this._textureRoughness && vv.push(this._textureRoughness), this._bumpTexture && vv.push(this._bumpTexture), this._tintTexture && vv.push(this._tintTexture)
        }
        getAnimatables(vv) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && vv.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && vv.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && vv.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && vv.push(this._tintTexture)
        }
        dispose(vv) {
          vv && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(vv, zv, Pv) {
          return vv.CLEARCOAT_BUMP && zv.addFallback(Pv++, "CLEARCOAT_BUMP"), vv.CLEARCOAT_TINT && zv.addFallback(Pv++, "CLEARCOAT_TINT"), vv.CLEARCOAT && zv.addFallback(Pv++, "CLEARCOAT"), Pv
        }
        getSamplers(vv) {
          vv.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, zv = new WeakMap, Pv = new WeakMap, hv = new WeakMap, Sv = new WeakMap, ev = new WeakMap, gv = new WeakMap, pv = new WeakMap, dv = new WeakMap, Nv = new WeakMap, (() => {
        const zv = "function" === typeof Symbol && Symbol.metadata ? Object.create(Yv[Symbol.metadata] ?? null) : void 0;
        lv = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Tv = [(0, Ov.L)()], Wv = [(0, Ov.L)()], wv = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], av = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], sv = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Cv = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], iv = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], cv = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Gv = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], mv = [(0, Ov.n)()], jv = [(0, Ov.L)()], fv = [(0, Ov.L)()], Fv = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], (0, nv.e)(vv, null, lv, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: vv => "isEnabled" in vv,
            get: vv => vv.isEnabled,
            set: (vv, zv) => {
              vv.isEnabled = zv
            }
          },
          metadata: zv
        }, Dv, Kv), (0, nv.e)(vv, null, wv, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: vv => "indexOfRefraction" in vv,
            get: vv => vv.indexOfRefraction,
            set: (vv, zv) => {
              vv.indexOfRefraction = zv
            }
          },
          metadata: zv
        }, tv, qv), (0, nv.e)(vv, null, av, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: vv => "texture" in vv,
            get: vv => vv.texture,
            set: (vv, zv) => {
              vv.texture = zv
            }
          },
          metadata: zv
        }, Iv, Qv), (0, nv.e)(vv, null, sv, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "useRoughnessFromMainTexture" in vv,
            get: vv => vv.useRoughnessFromMainTexture,
            set: (vv, zv) => {
              vv.useRoughnessFromMainTexture = zv
            }
          },
          metadata: zv
        }, Zv, Av), (0, nv.e)(vv, null, Cv, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: vv => "textureRoughness" in vv,
            get: vv => vv.textureRoughness,
            set: (vv, zv) => {
              vv.textureRoughness = zv
            }
          },
          metadata: zv
        }, Lv, Mv), (0, nv.e)(vv, null, iv, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: vv => "remapF0OnInterfaceChange" in vv,
            get: vv => vv.remapF0OnInterfaceChange,
            set: (vv, zv) => {
              vv.remapF0OnInterfaceChange = zv
            }
          },
          metadata: zv
        }, yv, Bv), (0, nv.e)(vv, null, cv, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "bumpTexture" in vv,
            get: vv => vv.bumpTexture,
            set: (vv, zv) => {
              vv.bumpTexture = zv
            }
          },
          metadata: zv
        }, Ev, ov), (0, nv.e)(vv, null, Gv, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: vv => "isTintEnabled" in vv,
            get: vv => vv.isTintEnabled,
            set: (vv, zv) => {
              vv.isTintEnabled = zv
            }
          },
          metadata: zv
        }, bv, kv), (0, nv.e)(vv, null, Fv, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "tintTexture" in vv,
            get: vv => vv.tintTexture,
            set: (vv, zv) => {
              vv.tintTexture = zv
            }
          },
          metadata: zv
        }, gz, pz), (0, nv.e)(null, null, Tv, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: vv => "intensity" in vv,
            get: vv => vv.intensity,
            set: (vv, zv) => {
              vv.intensity = zv
            }
          },
          metadata: zv
        }, Vv, Uv), (0, nv.e)(null, null, Wv, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: vv => "roughness" in vv,
            get: vv => vv.roughness,
            set: (vv, zv) => {
              vv.roughness = zv
            }
          },
          metadata: zv
        }, Rv, xv), (0, nv.e)(null, null, mv, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: vv => "tintColor" in vv,
            get: vv => vv.tintColor,
            set: (vv, zv) => {
              vv.tintColor = zv
            }
          },
          metadata: zv
        }, vz, zz), (0, nv.e)(null, null, jv, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: vv => "tintColorAtDistance" in vv,
            get: vv => vv.tintColorAtDistance,
            set: (vv, zv) => {
              vv.tintColorAtDistance = zv
            }
          },
          metadata: zv
        }, Pz, hz), (0, nv.e)(null, null, fv, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: vv => "tintThickness" in vv,
            get: vv => vv.tintThickness,
            set: (vv, zv) => {
              vv.tintThickness = zv
            }
          },
          metadata: zv
        }, Sz, ez), zv && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zv
        })
      })(), vv._DefaultIndexOfRefraction = 1.5, vv
    })();
    class zz extends Lv.c {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let Pz = (() => {
      var vv, zv, Pv, hv;
      let Sv, ev, gv, pv, dv, Nv, lv, Tv = Hv.d,
        Wv = [],
        wv = [],
        av = [],
        sv = [],
        Cv = [],
        iv = [],
        cv = [],
        Gv = [],
        mv = [],
        jv = [],
        fv = [],
        Fv = [],
        Yv = [],
        Dv = [];
      return vv = class extends Tv {
        get isEnabled() {
          return (0, nv.c)(this, zv, "f")
        }
        set isEnabled(vv) {
          (0, nv.d)(this, zv, vv, "f")
        }
        get texture() {
          return (0, nv.c)(this, Pv, "f")
        }
        set texture(vv) {
          (0, nv.d)(this, Pv, vv, "f")
        }
        get thicknessTexture() {
          return (0, nv.c)(this, hv, "f")
        }
        set thicknessTexture(vv) {
          (0, nv.d)(this, hv, vv, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Sv) {
          let ev = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Sv, "PBRIridescence", 110, new zz, ev), this._isEnabled = !1, zv.set(this, (0, nv.f)(this, Wv, !1)), this.intensity = ((0, nv.f)(this, wv), (0, nv.f)(this, av, 1)), this.minimumThickness = ((0, nv.f)(this, sv), (0, nv.f)(this, Cv, vv._DefaultMinimumThickness)), this.maximumThickness = ((0, nv.f)(this, iv), (0, nv.f)(this, cv, vv._DefaultMaximumThickness)), this.indexOfRefraction = ((0, nv.f)(this, Gv), (0, nv.f)(this, mv, vv._DefaultIndexOfRefraction)), this._texture = ((0, nv.f)(this, jv), null), Pv.set(this, (0, nv.f)(this, fv, null)), this._thicknessTexture = ((0, nv.f)(this, Fv), null), hv.set(this, (0, nv.f)(this, Yv, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, nv.f)(this, Dv), this._internalMarkAllSubMeshesAsTexturesDirty = Sv._dirtyCallbacks[1]
        }
        isReadyForSubMesh(vv, zv) {
          if (!this._isEnabled) return !0;
          if (vv._areTexturesDirty && zv.texturesEnabled) {
            if (this._texture && rv.e.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && rv.e.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(vv, zv) {
          this._isEnabled ? (vv.IRIDESCENCE = !0, vv._areTexturesDirty && zv.texturesEnabled && (this._texture && rv.e.IridescenceTextureEnabled ? (0, Xv._)(this._texture, vv, "IRIDESCENCE_TEXTURE") : vv.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && rv.e.IridescenceTextureEnabled ? (0, Xv._)(this._thicknessTexture, vv, "IRIDESCENCE_THICKNESS_TEXTURE") : vv.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (vv.IRIDESCENCE = !1, vv.IRIDESCENCE_TEXTURE = !1, vv.IRIDESCENCE_THICKNESS_TEXTURE = !1, vv.IRIDESCENCE_TEXTUREDIRECTUV = 0, vv.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(vv, zv) {
          if (!this._isEnabled) return;
          const Pv = this._material.isFrozen;
          vv.useUbo && Pv && vv.isSync || ((this._texture || this._thicknessTexture) && rv.e.IridescenceTextureEnabled && (vv.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, Xv.A)(this._texture, vv, "iridescence"), this._thicknessTexture && (0, Xv.A)(this._thicknessTexture, vv, "iridescenceThickness")), vv.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), zv.texturesEnabled && (this._texture && rv.e.IridescenceTextureEnabled && vv.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && rv.e.IridescenceTextureEnabled && vv.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(vv) {
          return this._texture === vv || this._thicknessTexture === vv
        }
        getActiveTextures(vv) {
          this._texture && vv.push(this._texture), this._thicknessTexture && vv.push(this._thicknessTexture)
        }
        getAnimatables(vv) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && vv.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && vv.push(this._thicknessTexture)
        }
        dispose(vv) {
          vv && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(vv, zv, Pv) {
          return vv.IRIDESCENCE && zv.addFallback(Pv++, "IRIDESCENCE"), Pv
        }
        getSamplers(vv) {
          vv.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, zv = new WeakMap, Pv = new WeakMap, hv = new WeakMap, (() => {
        const zv = "function" === typeof Symbol && Symbol.metadata ? Object.create(Tv[Symbol.metadata] ?? null) : void 0;
        Sv = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], ev = [(0, Ov.L)()], gv = [(0, Ov.L)()], pv = [(0, Ov.L)()], dv = [(0, Ov.L)()], Nv = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], lv = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], (0, nv.e)(vv, null, Sv, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: vv => "isEnabled" in vv,
            get: vv => vv.isEnabled,
            set: (vv, zv) => {
              vv.isEnabled = zv
            }
          },
          metadata: zv
        }, Wv, wv), (0, nv.e)(vv, null, Nv, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: vv => "texture" in vv,
            get: vv => vv.texture,
            set: (vv, zv) => {
              vv.texture = zv
            }
          },
          metadata: zv
        }, fv, Fv), (0, nv.e)(vv, null, lv, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "thicknessTexture" in vv,
            get: vv => vv.thicknessTexture,
            set: (vv, zv) => {
              vv.thicknessTexture = zv
            }
          },
          metadata: zv
        }, Yv, Dv), (0, nv.e)(null, null, ev, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: vv => "intensity" in vv,
            get: vv => vv.intensity,
            set: (vv, zv) => {
              vv.intensity = zv
            }
          },
          metadata: zv
        }, av, sv), (0, nv.e)(null, null, gv, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: vv => "minimumThickness" in vv,
            get: vv => vv.minimumThickness,
            set: (vv, zv) => {
              vv.minimumThickness = zv
            }
          },
          metadata: zv
        }, Cv, iv), (0, nv.e)(null, null, pv, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: vv => "maximumThickness" in vv,
            get: vv => vv.maximumThickness,
            set: (vv, zv) => {
              vv.maximumThickness = zv
            }
          },
          metadata: zv
        }, cv, Gv), (0, nv.e)(null, null, dv, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: vv => "indexOfRefraction" in vv,
            get: vv => vv.indexOfRefraction,
            set: (vv, zv) => {
              vv.indexOfRefraction = zv
            }
          },
          metadata: zv
        }, mv, jv), zv && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zv
        })
      })(), vv._DefaultMinimumThickness = 100, vv._DefaultMaximumThickness = 400, vv._DefaultIndexOfRefraction = 1.3, vv
    })();
    class hz extends Lv.c {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let Sz = (() => {
      var vv, zv, Pv, hv;
      let Sv, ev, gv, pv, dv, Nv = Hv.d,
        lv = [],
        Tv = [],
        Wv = [],
        wv = [],
        av = [],
        sv = [],
        Cv = [],
        iv = [],
        cv = [],
        Gv = [];
      return vv = class extends Nv {
        get isEnabled() {
          return (0, nv.c)(this, zv, "f")
        }
        set isEnabled(vv) {
          (0, nv.d)(this, zv, vv, "f")
        }
        set angle(vv) {
          this.direction.x = Math.cos(vv), this.direction.y = Math.sin(vv)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, nv.c)(this, Pv, "f")
        }
        set texture(vv) {
          (0, nv.d)(this, Pv, vv, "f")
        }
        get legacy() {
          return (0, nv.c)(this, hv, "f")
        }
        set legacy(vv) {
          (0, nv.d)(this, hv, vv, "f")
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
        constructor(vv) {
          let Sv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(vv, "PBRAnisotropic", 110, new hz, Sv), this._isEnabled = !1, zv.set(this, (0, nv.f)(this, lv, !1)), this.intensity = ((0, nv.f)(this, Tv), (0, nv.f)(this, Wv, 1)), this.direction = ((0, nv.f)(this, wv), (0, nv.f)(this, av, new Zv.j(1, 0))), this._texture = ((0, nv.f)(this, sv), null), Pv.set(this, (0, nv.f)(this, Cv, null)), this._legacy = ((0, nv.f)(this, iv), !1), hv.set(this, (0, nv.f)(this, cv, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, nv.f)(this, Gv), this._internalMarkAllSubMeshesAsTexturesDirty = vv._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = vv._dirtyCallbacks[16]
        }
        isReadyForSubMesh(vv, zv) {
          return !this._isEnabled || !(vv._areTexturesDirty && zv.texturesEnabled && this._texture && rv.e.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(vv, zv, Pv) {
          this._isEnabled ? (vv.ANISOTROPIC = this._isEnabled, this._isEnabled && !Pv.isVerticesDataPresent(Av.k.TangentKind) && (vv._needUVs = !0, vv.MAINUV1 = !0), vv._areTexturesDirty && zv.texturesEnabled && (this._texture && rv.e.AnisotropicTextureEnabled ? (0, Xv._)(this._texture, vv, "ANISOTROPIC_TEXTURE") : vv.ANISOTROPIC_TEXTURE = !1), vv._areMiscDirty && (vv.ANISOTROPIC_LEGACY = this._legacy)) : (vv.ANISOTROPIC = !1, vv.ANISOTROPIC_TEXTURE = !1, vv.ANISOTROPIC_TEXTUREDIRECTUV = 0, vv.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(vv, zv) {
          if (!this._isEnabled) return;
          const Pv = this._material.isFrozen;
          vv.useUbo && Pv && vv.isSync || (this._texture && rv.e.AnisotropicTextureEnabled && (vv.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, Xv.A)(this._texture, vv, "anisotropy")), vv.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), zv.texturesEnabled && this._texture && rv.e.AnisotropicTextureEnabled && vv.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(vv) {
          return this._texture === vv
        }
        getActiveTextures(vv) {
          this._texture && vv.push(this._texture)
        }
        getAnimatables(vv) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && vv.push(this._texture)
        }
        dispose(vv) {
          vv && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(vv, zv, Pv) {
          return vv.ANISOTROPIC && zv.addFallback(Pv++, "ANISOTROPIC"), Pv
        }
        getSamplers(vv) {
          vv.push("anisotropySampler")
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
        parse(vv, zv, Pv) {
          super.parse(vv, zv, Pv), void 0 === vv.legacy && (this.legacy = !0)
        }
      }, zv = new WeakMap, Pv = new WeakMap, hv = new WeakMap, (() => {
        const zv = "function" === typeof Symbol && Symbol.metadata ? Object.create(Nv[Symbol.metadata] ?? null) : void 0;
        Sv = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], ev = [(0, Ov.L)()], gv = [(0, Ov.H)()], pv = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], dv = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsMiscDirty")], (0, nv.e)(vv, null, Sv, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: vv => "isEnabled" in vv,
            get: vv => vv.isEnabled,
            set: (vv, zv) => {
              vv.isEnabled = zv
            }
          },
          metadata: zv
        }, lv, Tv), (0, nv.e)(vv, null, pv, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: vv => "texture" in vv,
            get: vv => vv.texture,
            set: (vv, zv) => {
              vv.texture = zv
            }
          },
          metadata: zv
        }, Cv, iv), (0, nv.e)(vv, null, dv, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: vv => "legacy" in vv,
            get: vv => vv.legacy,
            set: (vv, zv) => {
              vv.legacy = zv
            }
          },
          metadata: zv
        }, cv, Gv), (0, nv.e)(null, null, ev, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: vv => "intensity" in vv,
            get: vv => vv.intensity,
            set: (vv, zv) => {
              vv.intensity = zv
            }
          },
          metadata: zv
        }, Wv, wv), (0, nv.e)(null, null, gv, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: vv => "direction" in vv,
            get: vv => vv.direction,
            set: (vv, zv) => {
              vv.direction = zv
            }
          },
          metadata: zv
        }, av, sv), zv && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zv
        })
      })(), vv
    })();
    class ez extends Lv.c {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let gz = (() => {
      var vv, zv, Pv, hv, Sv, ev, gv, pv;
      let dv, Nv, lv, Tv, Wv, wv, av, sv, Cv, iv = Hv.d,
        cv = [],
        Gv = [],
        mv = [],
        jv = [],
        fv = [],
        Fv = [],
        Yv = [],
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
        Zv = [];
      return vv = class extends iv {
        get isEnabled() {
          return (0, nv.c)(this, zv, "f")
        }
        set isEnabled(vv) {
          (0, nv.d)(this, zv, vv, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, nv.c)(this, Pv, "f")
        }
        set linkSheenWithAlbedo(vv) {
          (0, nv.d)(this, Pv, vv, "f")
        }
        get texture() {
          return (0, nv.c)(this, hv, "f")
        }
        set texture(vv) {
          (0, nv.d)(this, hv, vv, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, nv.c)(this, Sv, "f")
        }
        set useRoughnessFromMainTexture(vv) {
          (0, nv.d)(this, Sv, vv, "f")
        }
        get roughness() {
          return (0, nv.c)(this, ev, "f")
        }
        set roughness(vv) {
          (0, nv.d)(this, ev, vv, "f")
        }
        get textureRoughness() {
          return (0, nv.c)(this, gv, "f")
        }
        set textureRoughness(vv) {
          (0, nv.d)(this, gv, vv, "f")
        }
        get albedoScaling() {
          return (0, nv.c)(this, pv, "f")
        }
        set albedoScaling(vv) {
          (0, nv.d)(this, pv, vv, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(vv) {
          let dv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(vv, "Sheen", 120, new ez, dv), this._isEnabled = !1, zv.set(this, (0, nv.f)(this, cv, !1)), this._linkSheenWithAlbedo = ((0, nv.f)(this, Gv), !1), Pv.set(this, (0, nv.f)(this, mv, !1)), this.intensity = ((0, nv.f)(this, jv), (0, nv.f)(this, fv, 1)), this.color = ((0, nv.f)(this, Fv), (0, nv.f)(this, Yv, Jv.b.White())), this._texture = ((0, nv.f)(this, Dv), null), hv.set(this, (0, nv.f)(this, Kv, null)), this._useRoughnessFromMainTexture = ((0, nv.f)(this, Vv), !0), Sv.set(this, (0, nv.f)(this, Uv, !0)), this._roughness = ((0, nv.f)(this, Rv), null), ev.set(this, (0, nv.f)(this, xv, null)), this._textureRoughness = ((0, nv.f)(this, tv), null), gv.set(this, (0, nv.f)(this, qv, null)), this._albedoScaling = ((0, nv.f)(this, Iv), !1), pv.set(this, (0, nv.f)(this, Qv, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, nv.f)(this, Zv), this._internalMarkAllSubMeshesAsTexturesDirty = vv._dirtyCallbacks[1]
        }
        isReadyForSubMesh(vv, zv) {
          if (!this._isEnabled) return !0;
          if (vv._areTexturesDirty && zv.texturesEnabled) {
            if (this._texture && rv.e.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && rv.e.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(vv, zv) {
          this._isEnabled ? (vv.SHEEN = !0, vv.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, vv.SHEEN_ROUGHNESS = null !== this._roughness, vv.SHEEN_ALBEDOSCALING = this._albedoScaling, vv.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, vv._areTexturesDirty && zv.texturesEnabled && (this._texture && rv.e.SheenTextureEnabled ? ((0, Xv._)(this._texture, vv, "SHEEN_TEXTURE"), vv.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : vv.SHEEN_TEXTURE = !1, this._textureRoughness && rv.e.SheenTextureEnabled ? (0, Xv._)(this._textureRoughness, vv, "SHEEN_TEXTURE_ROUGHNESS") : vv.SHEEN_TEXTURE_ROUGHNESS = !1)) : (vv.SHEEN = !1, vv.SHEEN_TEXTURE = !1, vv.SHEEN_TEXTURE_ROUGHNESS = !1, vv.SHEEN_LINKWITHALBEDO = !1, vv.SHEEN_ROUGHNESS = !1, vv.SHEEN_ALBEDOSCALING = !1, vv.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, vv.SHEEN_GAMMATEXTURE = !1, vv.SHEEN_TEXTUREDIRECTUV = 0, vv.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(vv, zv, Pv, hv) {
          if (!this._isEnabled) return;
          const Sv = hv.materialDefines,
            ev = this._material.isFrozen;
          vv.useUbo && ev && vv.isSync || ((this._texture || this._textureRoughness) && rv.e.SheenTextureEnabled && (vv.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, Xv.A)(this._texture, vv, "sheen"), this._textureRoughness && !Sv.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, Xv.A)(this._textureRoughness, vv, "sheenRoughness")), vv.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && vv.updateFloat("vSheenRoughness", this._roughness)), zv.texturesEnabled && (this._texture && rv.e.SheenTextureEnabled && vv.setTexture("sheenSampler", this._texture), this._textureRoughness && !Sv.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && rv.e.SheenTextureEnabled && vv.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(vv) {
          return this._texture === vv || this._textureRoughness === vv
        }
        getActiveTextures(vv) {
          this._texture && vv.push(this._texture), this._textureRoughness && vv.push(this._textureRoughness)
        }
        getAnimatables(vv) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && vv.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && vv.push(this._textureRoughness)
        }
        dispose(vv) {
          vv && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(vv, zv, Pv) {
          return vv.SHEEN && zv.addFallback(Pv++, "SHEEN"), Pv
        }
        getSamplers(vv) {
          vv.push("sheenSampler", "sheenRoughnessSampler")
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
      }, zv = new WeakMap, Pv = new WeakMap, hv = new WeakMap, Sv = new WeakMap, ev = new WeakMap, gv = new WeakMap, pv = new WeakMap, (() => {
        const zv = "function" === typeof Symbol && Symbol.metadata ? Object.create(iv[Symbol.metadata] ?? null) : void 0;
        dv = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Nv = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], lv = [(0, Ov.L)()], Tv = [(0, Ov.n)()], Wv = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], wv = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], av = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], sv = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Cv = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], (0, nv.e)(vv, null, dv, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: vv => "isEnabled" in vv,
            get: vv => vv.isEnabled,
            set: (vv, zv) => {
              vv.isEnabled = zv
            }
          },
          metadata: zv
        }, cv, Gv), (0, nv.e)(vv, null, Nv, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: vv => "linkSheenWithAlbedo" in vv,
            get: vv => vv.linkSheenWithAlbedo,
            set: (vv, zv) => {
              vv.linkSheenWithAlbedo = zv
            }
          },
          metadata: zv
        }, mv, jv), (0, nv.e)(vv, null, Wv, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: vv => "texture" in vv,
            get: vv => vv.texture,
            set: (vv, zv) => {
              vv.texture = zv
            }
          },
          metadata: zv
        }, Kv, Vv), (0, nv.e)(vv, null, wv, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "useRoughnessFromMainTexture" in vv,
            get: vv => vv.useRoughnessFromMainTexture,
            set: (vv, zv) => {
              vv.useRoughnessFromMainTexture = zv
            }
          },
          metadata: zv
        }, Uv, Rv), (0, nv.e)(vv, null, av, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: vv => "roughness" in vv,
            get: vv => vv.roughness,
            set: (vv, zv) => {
              vv.roughness = zv
            }
          },
          metadata: zv
        }, xv, tv), (0, nv.e)(vv, null, sv, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: vv => "textureRoughness" in vv,
            get: vv => vv.textureRoughness,
            set: (vv, zv) => {
              vv.textureRoughness = zv
            }
          },
          metadata: zv
        }, qv, Iv), (0, nv.e)(vv, null, Cv, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: vv => "albedoScaling" in vv,
            get: vv => vv.albedoScaling,
            set: (vv, zv) => {
              vv.albedoScaling = zv
            }
          },
          metadata: zv
        }, Qv, Zv), (0, nv.e)(null, null, lv, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: vv => "intensity" in vv,
            get: vv => vv.intensity,
            set: (vv, zv) => {
              vv.intensity = zv
            }
          },
          metadata: zv
        }, fv, Fv), (0, nv.e)(null, null, Tv, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: vv => "color" in vv,
            get: vv => vv.color,
            set: (vv, zv) => {
              vv.color = zv
            }
          },
          metadata: zv
        }, Yv, Dv), zv && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zv
        })
      })(), vv
    })();
    class pz extends Lv.c {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let dz = (() => {
      var vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv, lv, Tv, Wv, wv, av, sv, Cv;
      let iv, cv, Gv, mv, jv, fv, Fv, Yv, Dv, Kv, Vv, Uv, Rv, xv, tv, qv, Iv, Qv, Av, Lv, Mv, yv, Bv, Ev, ov, bv, kv, uv, vz, zz, Pz = Hv.d,
        hz = [],
        Sz = [],
        ez = [],
        gz = [],
        dz = [],
        Nz = [],
        lz = [],
        Tz = [],
        Wz = [],
        wz = [],
        az = [],
        sz = [],
        Cz = [],
        iz = [],
        cz = [],
        Gz = [],
        mz = [],
        jz = [],
        fz = [],
        Fz = [],
        Yz = [],
        nz = [],
        Oz = [],
        Dz = [],
        Kz = [],
        Vz = [],
        Uz = [],
        Rz = [],
        xz = [],
        tz = [],
        qz = [],
        Iz = [],
        Qz = [],
        Zz = [],
        Az = [],
        Lz = [],
        Hz = [],
        Mz = [],
        yz = [],
        Bz = [],
        Jz = [],
        Ez = [],
        oz = [],
        bz = [],
        rz = [],
        kz = [],
        Xz = [],
        uz = [],
        vP = [],
        zP = [],
        PP = [],
        hP = [],
        SP = [],
        eP = [],
        gP = [],
        pP = [],
        dP = [],
        NP = [],
        lP = [],
        TP = [];
      return vv = class extends Pz {
        get isRefractionEnabled() {
          return (0, nv.c)(this, zv, "f")
        }
        set isRefractionEnabled(vv) {
          (0, nv.d)(this, zv, vv, "f")
        }
        get isTranslucencyEnabled() {
          return (0, nv.c)(this, Pv, "f")
        }
        set isTranslucencyEnabled(vv) {
          (0, nv.d)(this, Pv, vv, "f")
        }
        get isDispersionEnabled() {
          return (0, nv.c)(this, hv, "f")
        }
        set isDispersionEnabled(vv) {
          (0, nv.d)(this, hv, vv, "f")
        }
        get isScatteringEnabled() {
          return (0, nv.c)(this, Sv, "f")
        }
        set isScatteringEnabled(vv) {
          (0, nv.d)(this, Sv, vv, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(vv) {
          this._scene.enableSubSurfaceForPrePass() && vv && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(vv))
        }
        get useAlbedoToTintRefraction() {
          return (0, nv.c)(this, ev, "f")
        }
        set useAlbedoToTintRefraction(vv) {
          (0, nv.d)(this, ev, vv, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, nv.c)(this, gv, "f")
        }
        set useAlbedoToTintTranslucency(vv) {
          (0, nv.d)(this, gv, vv, "f")
        }
        get thicknessTexture() {
          return (0, nv.c)(this, pv, "f")
        }
        set thicknessTexture(vv) {
          (0, nv.d)(this, pv, vv, "f")
        }
        get refractionTexture() {
          return (0, nv.c)(this, dv, "f")
        }
        set refractionTexture(vv) {
          (0, nv.d)(this, dv, vv, "f")
        }
        get indexOfRefraction() {
          return (0, nv.c)(this, Nv, "f")
        }
        set indexOfRefraction(vv) {
          (0, nv.d)(this, Nv, vv, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(vv) {
          const zv = vv >= 1 ? vv : -1;
          this._volumeIndexOfRefraction !== zv && (this._volumeIndexOfRefraction = zv, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, nv.c)(this, lv, "f")
        }
        set invertRefractionY(vv) {
          (0, nv.d)(this, lv, vv, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, nv.c)(this, Tv, "f")
        }
        set linkRefractionWithTransparency(vv) {
          (0, nv.d)(this, Tv, vv, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, nv.c)(this, Wv, "f")
        }
        set useMaskFromThicknessTexture(vv) {
          (0, nv.d)(this, Wv, vv, "f")
        }
        get refractionIntensityTexture() {
          return (0, nv.c)(this, wv, "f")
        }
        set refractionIntensityTexture(vv) {
          (0, nv.d)(this, wv, vv, "f")
        }
        get translucencyIntensityTexture() {
          return (0, nv.c)(this, av, "f")
        }
        set translucencyIntensityTexture(vv) {
          (0, nv.d)(this, av, vv, "f")
        }
        get translucencyColorTexture() {
          return (0, nv.c)(this, sv, "f")
        }
        set translucencyColorTexture(vv) {
          (0, nv.d)(this, sv, vv, "f")
        }
        get useGltfStyleTextures() {
          return (0, nv.c)(this, Cv, "f")
        }
        set useGltfStyleTextures(vv) {
          (0, nv.d)(this, Cv, vv, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(vv) {
          this.legacyTranslucency = vv
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
        constructor(iv) {
          let cv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(iv, "PBRSubSurface", 130, new pz, cv), this._isRefractionEnabled = !1, zv.set(this, (0, nv.f)(this, hz, !1)), this._isTranslucencyEnabled = ((0, nv.f)(this, Sz), !1), Pv.set(this, (0, nv.f)(this, ez, !1)), this._isDispersionEnabled = ((0, nv.f)(this, gz), !1), hv.set(this, (0, nv.f)(this, dz, !1)), this._isScatteringEnabled = ((0, nv.f)(this, Nz), !1), Sv.set(this, (0, nv.f)(this, lz, !1)), this._scatteringDiffusionProfileIndex = ((0, nv.f)(this, Tz), (0, nv.f)(this, Wz, 0)), this.refractionIntensity = ((0, nv.f)(this, wz), (0, nv.f)(this, az, 1)), this.translucencyIntensity = ((0, nv.f)(this, sz), (0, nv.f)(this, Cz, 1)), this._useAlbedoToTintRefraction = ((0, nv.f)(this, iz), !1), ev.set(this, (0, nv.f)(this, cz, !1)), this._useAlbedoToTintTranslucency = ((0, nv.f)(this, Gz), !1), gv.set(this, (0, nv.f)(this, mz, !1)), this._thicknessTexture = ((0, nv.f)(this, jz), null), pv.set(this, (0, nv.f)(this, fz, null)), this._refractionTexture = ((0, nv.f)(this, Fz), null), dv.set(this, (0, nv.f)(this, Yz, null)), this._indexOfRefraction = ((0, nv.f)(this, nz), 1.5), Nv.set(this, (0, nv.f)(this, Oz, 1.5)), this._volumeIndexOfRefraction = ((0, nv.f)(this, Dz), (0, nv.f)(this, Kz, -1)), this._invertRefractionY = ((0, nv.f)(this, Vz), !1), lv.set(this, (0, nv.f)(this, Uz, !1)), this._linkRefractionWithTransparency = ((0, nv.f)(this, Rz), !1), Tv.set(this, (0, nv.f)(this, xz, !1)), this.minimumThickness = ((0, nv.f)(this, tz), (0, nv.f)(this, qz, 0)), this.maximumThickness = ((0, nv.f)(this, Iz), (0, nv.f)(this, Qz, 1)), this.useThicknessAsDepth = ((0, nv.f)(this, Zz), (0, nv.f)(this, Az, !1)), this.tintColor = ((0, nv.f)(this, Lz), (0, nv.f)(this, Hz, Jv.b.White())), this.tintColorAtDistance = ((0, nv.f)(this, Mz), (0, nv.f)(this, yz, 1)), this.dispersion = ((0, nv.f)(this, Bz), (0, nv.f)(this, Jz, 0)), this.diffusionDistance = ((0, nv.f)(this, Ez), (0, nv.f)(this, oz, Jv.b.White())), this._useMaskFromThicknessTexture = ((0, nv.f)(this, bz), !1), Wv.set(this, (0, nv.f)(this, rz, !1)), this._refractionIntensityTexture = ((0, nv.f)(this, kz), null), wv.set(this, (0, nv.f)(this, Xz, null)), this._translucencyIntensityTexture = ((0, nv.f)(this, uz), null), av.set(this, (0, nv.f)(this, vP, null)), this.translucencyColor = ((0, nv.f)(this, zP), (0, nv.f)(this, PP, null)), this._translucencyColorTexture = ((0, nv.f)(this, hP), null), sv.set(this, (0, nv.f)(this, SP, null)), this._useGltfStyleTextures = ((0, nv.f)(this, eP), !0), Cv.set(this, (0, nv.f)(this, gP, !0)), this.applyAlbedoAfterSubSurface = ((0, nv.f)(this, pP), (0, nv.f)(this, dP, vv.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, nv.f)(this, NP), (0, nv.f)(this, lP, vv.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, nv.f)(this, TP), this._scene = iv.rD(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = iv._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = iv._dirtyCallbacks[32]
        }
        isReadyForSubMesh(vv, zv) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (vv._areTexturesDirty && zv.texturesEnabled) {
            if (this._thicknessTexture && rv.e.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && rv.e.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && rv.e.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && rv.e.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const vv = this._getRefractionTexture(zv);
            if (vv && rv.e.RefractionTextureEnabled && !vv.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(vv, zv) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return vv.SUBSURFACE = !1, vv.SS_DISPERSION = !1, vv.SS_TRANSLUCENCY = !1, vv.SS_SCATTERING = !1, vv.SS_REFRACTION = !1, vv.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, vv.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, vv.SS_THICKNESSANDMASK_TEXTURE = !1, vv.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, vv.SS_HAS_THICKNESS = !1, vv.SS_REFRACTIONINTENSITY_TEXTURE = !1, vv.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, vv.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, vv.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, vv.SS_REFRACTIONMAP_3D = !1, vv.SS_REFRACTIONMAP_OPPOSITEZ = !1, vv.SS_LODINREFRACTIONALPHA = !1, vv.SS_GAMMAREFRACTION = !1, vv.SS_RGBDREFRACTION = !1, vv.SS_LINEARSPECULARREFRACTION = !1, vv.SS_LINKREFRACTIONTOTRANSPARENCY = !1, vv.SS_ALBEDOFORREFRACTIONTINT = !1, vv.SS_ALBEDOFORTRANSLUCENCYTINT = !1, vv.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, vv.SS_USE_THICKNESS_AS_DEPTH = !1, vv.SS_USE_GLTF_TEXTURES = !1, vv.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, vv.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, vv.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(vv.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (vv._areTexturesDirty) {
            if (vv.SUBSURFACE = !0, vv.SS_DISPERSION = this._isDispersionEnabled, vv.SS_TRANSLUCENCY = this._isTranslucencyEnabled, vv.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, vv.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, vv.SS_SCATTERING = this._isScatteringEnabled, vv.SS_THICKNESSANDMASK_TEXTURE = !1, vv.SS_REFRACTIONINTENSITY_TEXTURE = !1, vv.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, vv.SS_HAS_THICKNESS = !1, vv.SS_USE_GLTF_TEXTURES = !1, vv.SS_REFRACTION = !1, vv.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, vv.SS_REFRACTIONMAP_3D = !1, vv.SS_GAMMAREFRACTION = !1, vv.SS_RGBDREFRACTION = !1, vv.SS_LINEARSPECULARREFRACTION = !1, vv.SS_REFRACTIONMAP_OPPOSITEZ = !1, vv.SS_LODINREFRACTIONALPHA = !1, vv.SS_LINKREFRACTIONTOTRANSPARENCY = !1, vv.SS_ALBEDOFORREFRACTIONTINT = !1, vv.SS_ALBEDOFORTRANSLUCENCYTINT = !1, vv.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, vv.SS_USE_THICKNESS_AS_DEPTH = !1, vv.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, vv.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, vv._areTexturesDirty && zv.texturesEnabled && (this._thicknessTexture && rv.e.ThicknessTextureEnabled && (0, Xv._)(this._thicknessTexture, vv, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && rv.e.RefractionIntensityTextureEnabled && (0, Xv._)(this._refractionIntensityTexture, vv, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && rv.e.TranslucencyIntensityTextureEnabled && (0, Xv._)(this._translucencyIntensityTexture, vv, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && rv.e.TranslucencyColorTextureEnabled && ((0, Xv._)(this._translucencyColorTexture, vv, "SS_TRANSLUCENCYCOLOR_TEXTURE"), vv.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), vv.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, vv.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, vv.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, vv.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && zv.texturesEnabled) {
              const Pv = this._getRefractionTexture(zv);
              Pv && rv.e.RefractionTextureEnabled && (vv.SS_REFRACTION = !0, vv.SS_REFRACTIONMAP_3D = Pv.isCube, vv.SS_GAMMAREFRACTION = Pv.gammaSpace, vv.SS_RGBDREFRACTION = Pv.isRGBD, vv.SS_LINEARSPECULARREFRACTION = Pv.linearSpecularLOD, vv.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && Pv.isCube ? !Pv.invertZ : Pv.invertZ, vv.SS_LODINREFRACTIONALPHA = Pv.lodLevelInAlpha, vv.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, vv.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, vv.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = Pv.isCube && Pv.boundingBoxSize, vv.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (vv.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(vv, zv, Pv, hv) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) vv.updateFloat2("vThicknessParam", 0, 0);
            else {
              hv.getRenderingMesh().getWorldMatrix().decompose(Zv.i.fa[0]);
              const zv = Math.max(Math.abs(Zv.i.fa[0].x), Math.abs(Zv.i.fa[0].y), Math.abs(Zv.i.fa[0].z));
              vv.updateFloat2("vThicknessParam", this.minimumThickness * zv, (this.maximumThickness - this.minimumThickness) * zv)
            }
        }
        bindForSubMesh(vv, zv, Pv, hv) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const Sv = hv.materialDefines,
            ev = this._material.isFrozen,
            gv = this._material.realTimeFiltering,
            pv = Sv.LODBASEDMICROSFURACE,
            dv = this._getRefractionTexture(zv);
          if (!vv.useUbo || !ev || !vv.isSync) {
            if (this._thicknessTexture && rv.e.ThicknessTextureEnabled && (vv.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, Xv.A)(this._thicknessTexture, vv, "thickness")), this._refractionIntensityTexture && rv.e.RefractionIntensityTextureEnabled && Sv.SS_REFRACTIONINTENSITY_TEXTURE && (vv.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, Xv.A)(this._refractionIntensityTexture, vv, "refractionIntensity")), this._translucencyColorTexture && rv.e.TranslucencyColorTextureEnabled && Sv.SS_TRANSLUCENCYCOLOR_TEXTURE && (vv.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, Xv.A)(this._translucencyColorTexture, vv, "translucencyColor")), this._translucencyIntensityTexture && rv.e.TranslucencyIntensityTextureEnabled && Sv.SS_TRANSLUCENCYINTENSITY_TEXTURE && (vv.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, Xv.A)(this._translucencyIntensityTexture, vv, "translucencyIntensity")), dv && rv.e.RefractionTextureEnabled) {
              vv.Xu("refractionMatrix", dv.getRefractionTextureMatrix());
              let zv = 1;
              dv.isCube || dv.depth && (zv = dv.depth);
              const Pv = dv.getSize().width,
                hv = this.volumeIndexOfRefraction;
              if (vv.updateFloat4("vRefractionInfos", dv.level, 1 / hv, zv, this._invertRefractionY ? -1 : 1), vv.updateFloat4("vRefractionMicrosurfaceInfos", Pv, dv.lodGenerationScale, dv.lodGenerationOffset, 1 / this.indexOfRefraction), gv && vv.updateFloat2("vRefractionFilteringInfo", Pv, Math.log2(Pv)), dv.boundingBoxSize) {
                const zv = dv;
                vv.updateVector3("vRefractionPosition", zv.boundingBoxPosition), vv.updateVector3("vRefractionSize", zv.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && vv.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), vv.updateColor3("vDiffusionDistance", this.diffusionDistance), vv.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), vv.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), vv.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), vv.updateFloat("dispersion", this.dispersion)
          }
          zv.texturesEnabled && (this._thicknessTexture && rv.e.ThicknessTextureEnabled && vv.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && rv.e.RefractionIntensityTextureEnabled && Sv.SS_REFRACTIONINTENSITY_TEXTURE && vv.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && rv.e.TranslucencyIntensityTextureEnabled && Sv.SS_TRANSLUCENCYINTENSITY_TEXTURE && vv.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && rv.e.TranslucencyColorTextureEnabled && Sv.SS_TRANSLUCENCYCOLOR_TEXTURE && vv.setTexture("translucencyColorSampler", this._translucencyColorTexture), dv && rv.e.RefractionTextureEnabled && (pv ? vv.setTexture("refractionSampler", dv) : (vv.setTexture("refractionSampler", dv._lodTextureMid || dv), vv.setTexture("refractionSamplerLow", dv._lodTextureLow || dv), vv.setTexture("refractionSamplerHigh", dv._lodTextureHigh || dv))))
        }
        _getRefractionTexture(vv) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? vv.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(vv) {
          rv.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && vv.push(this._refractionTexture)
        }
        hasTexture(vv) {
          return this._thicknessTexture === vv || (this._refractionTexture === vv || (this._refractionIntensityTexture === vv || (this._translucencyIntensityTexture === vv || this._translucencyColorTexture === vv)))
        }
        hasRenderTargetTextures() {
          return !!(rv.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(vv) {
          this._thicknessTexture && vv.push(this._thicknessTexture), this._refractionTexture && vv.push(this._refractionTexture), this._refractionIntensityTexture && vv.push(this._refractionIntensityTexture), this._translucencyColorTexture && vv.push(this._translucencyColorTexture), this._translucencyIntensityTexture && vv.push(this._translucencyIntensityTexture)
        }
        getAnimatables(vv) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && vv.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && vv.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && vv.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && vv.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && vv.push(this._translucencyIntensityTexture)
        }
        dispose(vv) {
          vv && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(vv, zv, Pv) {
          return vv.SS_SCATTERING && zv.addFallback(Pv++, "SS_SCATTERING"), vv.SS_TRANSLUCENCY && zv.addFallback(Pv++, "SS_TRANSLUCENCY"), Pv
        }
        getSamplers(vv) {
          vv.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, zv = new WeakMap, Pv = new WeakMap, hv = new WeakMap, Sv = new WeakMap, ev = new WeakMap, gv = new WeakMap, pv = new WeakMap, dv = new WeakMap, Nv = new WeakMap, lv = new WeakMap, Tv = new WeakMap, Wv = new WeakMap, wv = new WeakMap, av = new WeakMap, sv = new WeakMap, Cv = new WeakMap, (() => {
        const zv = "function" === typeof Symbol && Symbol.metadata ? Object.create(Pz[Symbol.metadata] ?? null) : void 0;
        iv = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], cv = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Gv = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], mv = [(0, Ov.L)(), (0, Ov.e)("_markScenePrePassDirty")], jv = [(0, Ov.L)()], fv = [(0, Ov.L)()], Fv = [(0, Ov.L)()], Yv = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Dv = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Kv = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Vv = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Uv = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Rv = [(0, Ov.L)()], xv = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], tv = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], qv = [(0, Ov.L)()], Iv = [(0, Ov.L)()], Qv = [(0, Ov.L)()], Av = [(0, Ov.n)()], Lv = [(0, Ov.L)()], Mv = [(0, Ov.L)()], yv = [(0, Ov.n)()], Bv = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Ev = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], ov = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], bv = [(0, Ov.n)()], kv = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], uv = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], vz = [(0, Ov.L)()], zz = [(0, Ov.L)()], (0, nv.e)(vv, null, iv, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: vv => "isRefractionEnabled" in vv,
            get: vv => vv.isRefractionEnabled,
            set: (vv, zv) => {
              vv.isRefractionEnabled = zv
            }
          },
          metadata: zv
        }, hz, Sz), (0, nv.e)(vv, null, cv, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: vv => "isTranslucencyEnabled" in vv,
            get: vv => vv.isTranslucencyEnabled,
            set: (vv, zv) => {
              vv.isTranslucencyEnabled = zv
            }
          },
          metadata: zv
        }, ez, gz), (0, nv.e)(vv, null, Gv, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: vv => "isDispersionEnabled" in vv,
            get: vv => vv.isDispersionEnabled,
            set: (vv, zv) => {
              vv.isDispersionEnabled = zv
            }
          },
          metadata: zv
        }, dz, Nz), (0, nv.e)(vv, null, mv, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: vv => "isScatteringEnabled" in vv,
            get: vv => vv.isScatteringEnabled,
            set: (vv, zv) => {
              vv.isScatteringEnabled = zv
            }
          },
          metadata: zv
        }, lz, Tz), (0, nv.e)(vv, null, Yv, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: vv => "useAlbedoToTintRefraction" in vv,
            get: vv => vv.useAlbedoToTintRefraction,
            set: (vv, zv) => {
              vv.useAlbedoToTintRefraction = zv
            }
          },
          metadata: zv
        }, cz, Gz), (0, nv.e)(vv, null, Dv, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: vv => "useAlbedoToTintTranslucency" in vv,
            get: vv => vv.useAlbedoToTintTranslucency,
            set: (vv, zv) => {
              vv.useAlbedoToTintTranslucency = zv
            }
          },
          metadata: zv
        }, mz, jz), (0, nv.e)(vv, null, Kv, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "thicknessTexture" in vv,
            get: vv => vv.thicknessTexture,
            set: (vv, zv) => {
              vv.thicknessTexture = zv
            }
          },
          metadata: zv
        }, fz, Fz), (0, nv.e)(vv, null, Vv, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "refractionTexture" in vv,
            get: vv => vv.refractionTexture,
            set: (vv, zv) => {
              vv.refractionTexture = zv
            }
          },
          metadata: zv
        }, Yz, nz), (0, nv.e)(vv, null, Uv, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: vv => "indexOfRefraction" in vv,
            get: vv => vv.indexOfRefraction,
            set: (vv, zv) => {
              vv.indexOfRefraction = zv
            }
          },
          metadata: zv
        }, Oz, Dz), (0, nv.e)(vv, null, xv, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: vv => "invertRefractionY" in vv,
            get: vv => vv.invertRefractionY,
            set: (vv, zv) => {
              vv.invertRefractionY = zv
            }
          },
          metadata: zv
        }, Uz, Rz), (0, nv.e)(vv, null, tv, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: vv => "linkRefractionWithTransparency" in vv,
            get: vv => vv.linkRefractionWithTransparency,
            set: (vv, zv) => {
              vv.linkRefractionWithTransparency = zv
            }
          },
          metadata: zv
        }, xz, tz), (0, nv.e)(vv, null, Bv, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "useMaskFromThicknessTexture" in vv,
            get: vv => vv.useMaskFromThicknessTexture,
            set: (vv, zv) => {
              vv.useMaskFromThicknessTexture = zv
            }
          },
          metadata: zv
        }, rz, kz), (0, nv.e)(vv, null, Ev, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "refractionIntensityTexture" in vv,
            get: vv => vv.refractionIntensityTexture,
            set: (vv, zv) => {
              vv.refractionIntensityTexture = zv
            }
          },
          metadata: zv
        }, Xz, uz), (0, nv.e)(vv, null, ov, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "translucencyIntensityTexture" in vv,
            get: vv => vv.translucencyIntensityTexture,
            set: (vv, zv) => {
              vv.translucencyIntensityTexture = zv
            }
          },
          metadata: zv
        }, vP, zP), (0, nv.e)(vv, null, kv, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "translucencyColorTexture" in vv,
            get: vv => vv.translucencyColorTexture,
            set: (vv, zv) => {
              vv.translucencyColorTexture = zv
            }
          },
          metadata: zv
        }, SP, eP), (0, nv.e)(vv, null, uv, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: vv => "useGltfStyleTextures" in vv,
            get: vv => vv.useGltfStyleTextures,
            set: (vv, zv) => {
              vv.useGltfStyleTextures = zv
            }
          },
          metadata: zv
        }, gP, pP), (0, nv.e)(null, null, jv, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: vv => "_scatteringDiffusionProfileIndex" in vv,
            get: vv => vv._scatteringDiffusionProfileIndex,
            set: (vv, zv) => {
              vv._scatteringDiffusionProfileIndex = zv
            }
          },
          metadata: zv
        }, Wz, wz), (0, nv.e)(null, null, fv, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: vv => "refractionIntensity" in vv,
            get: vv => vv.refractionIntensity,
            set: (vv, zv) => {
              vv.refractionIntensity = zv
            }
          },
          metadata: zv
        }, az, sz), (0, nv.e)(null, null, Fv, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: vv => "translucencyIntensity" in vv,
            get: vv => vv.translucencyIntensity,
            set: (vv, zv) => {
              vv.translucencyIntensity = zv
            }
          },
          metadata: zv
        }, Cz, iz), (0, nv.e)(null, null, Rv, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: vv => "_volumeIndexOfRefraction" in vv,
            get: vv => vv._volumeIndexOfRefraction,
            set: (vv, zv) => {
              vv._volumeIndexOfRefraction = zv
            }
          },
          metadata: zv
        }, Kz, Vz), (0, nv.e)(null, null, qv, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: vv => "minimumThickness" in vv,
            get: vv => vv.minimumThickness,
            set: (vv, zv) => {
              vv.minimumThickness = zv
            }
          },
          metadata: zv
        }, qz, Iz), (0, nv.e)(null, null, Iv, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: vv => "maximumThickness" in vv,
            get: vv => vv.maximumThickness,
            set: (vv, zv) => {
              vv.maximumThickness = zv
            }
          },
          metadata: zv
        }, Qz, Zz), (0, nv.e)(null, null, Qv, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: vv => "useThicknessAsDepth" in vv,
            get: vv => vv.useThicknessAsDepth,
            set: (vv, zv) => {
              vv.useThicknessAsDepth = zv
            }
          },
          metadata: zv
        }, Az, Lz), (0, nv.e)(null, null, Av, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: vv => "tintColor" in vv,
            get: vv => vv.tintColor,
            set: (vv, zv) => {
              vv.tintColor = zv
            }
          },
          metadata: zv
        }, Hz, Mz), (0, nv.e)(null, null, Lv, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: vv => "tintColorAtDistance" in vv,
            get: vv => vv.tintColorAtDistance,
            set: (vv, zv) => {
              vv.tintColorAtDistance = zv
            }
          },
          metadata: zv
        }, yz, Bz), (0, nv.e)(null, null, Mv, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: vv => "dispersion" in vv,
            get: vv => vv.dispersion,
            set: (vv, zv) => {
              vv.dispersion = zv
            }
          },
          metadata: zv
        }, Jz, Ez), (0, nv.e)(null, null, yv, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: vv => "diffusionDistance" in vv,
            get: vv => vv.diffusionDistance,
            set: (vv, zv) => {
              vv.diffusionDistance = zv
            }
          },
          metadata: zv
        }, oz, bz), (0, nv.e)(null, null, bv, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: vv => "translucencyColor" in vv,
            get: vv => vv.translucencyColor,
            set: (vv, zv) => {
              vv.translucencyColor = zv
            }
          },
          metadata: zv
        }, PP, hP), (0, nv.e)(null, null, vz, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: vv => "applyAlbedoAfterSubSurface" in vv,
            get: vv => vv.applyAlbedoAfterSubSurface,
            set: (vv, zv) => {
              vv.applyAlbedoAfterSubSurface = zv
            }
          },
          metadata: zv
        }, dP, NP), (0, nv.e)(null, null, zz, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: vv => "legacyTranslucency" in vv,
            get: vv => vv.legacyTranslucency,
            set: (vv, zv) => {
              vv.legacyTranslucency = zv
            }
          },
          metadata: zv
        }, lP, TP), zv && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zv
        })
      })(), vv.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, vv.DEFAULT_LEGACY_TRANSLUCENCY = !1, vv
    })();
    var Nz = Pv(39665),
      lz = Pv(39636),
      Tz = Pv(39676),
      Wz = Pv(39682),
      wz = Pv(39686),
      az = Pv(39694),
      sz = Pv(39697),
      Cz = Pv(39705),
      iz = Pv(39190);
    const cz = {
      effect: null,
      subMesh: null
    };
    class Gz extends((0, sz.b)((0, az.b)(Lv.c))) {}
    class mz extends((0, Ev.f)(Gz)) {
      constructor(vv) {
        super(vv), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class jz extends((0, Cz.d)(bv.d)) {}
    let fz = (() => {
      var vv, zv;
      let hv, Sv = jz,
        gv = [],
        pv = [];
      return vv = class extends Sv {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(vv) {
          this._realTimeFiltering = vv, this.xvv(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(vv) {
          this._realTimeFilteringQuality = vv, this.xvv(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, nv.c)(this, zv, "f")
        }
        set debugMode(vv) {
          (0, nv.d)(this, zv, vv, "f")
        }
        constructor(Pv, hv) {
          super(Pv, hv, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || vv.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new Zv.m(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = vv.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = Jv.b.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new Jv.b(0, 0, 0), this._albedoColor = new Jv.b(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new Jv.b(1, 1, 1), this._reflectionColor = new Jv.b(1, 1, 1), this._emissiveColor = new Jv.b(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = vv.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new Kv.g(16), this._globalAmbientColor = new Jv.b(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, zv.set(this, (0, nv.f)(this, gv, 0)), this.debugLimit = ((0, nv.f)(this, pv), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new yv(this), this.clearCoat = new vz(this), this.iridescence = new Pz(this), this.anisotropy = new Sz(this), this.sheen = new gz(this), this.subSurface = new dz(this), this.detailMap = new Nz.b(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), rv.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = tv(this.rD()), this.prePassConfiguration = new Bv.b
        }
        get hasRenderTargetTextures() {
          return !!(rv.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === vv.PBRMATERIAL_OPAQUE || this._transparencyMode === vv.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === vv.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== vv.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(vv, zv, Pv) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const hv = zv._drawWrapper;
          if (hv.effect && this.isFrozen && hv._wasPreviouslyReady && hv._wasPreviouslyUsingInstances === Pv) return !0;
          zv.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), zv.materialDefines = new mz(this._eventInfo.defineNames));
          const Sv = zv.materialDefines;
          if (this._isReadyForSubMesh(zv)) return !0;
          const ev = this.rD(),
            gv = ev.ma();
          if (Sv._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, ev.texturesEnabled)) {
            if (this._albedoTexture && rv.e.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && rv.e.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && rv.e.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && rv.e.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && rv.e.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const vv = this._getReflectionTexture();
            if (vv && rv.e.ReflectionTextureEnabled) {
              if (!vv.isReadyOrNotBlocking()) return !1;
              if (vv.irradianceTexture) {
                if (!vv.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!vv.sphericalPolynomial && vv.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && rv.e.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && rv.e.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (rv.e.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (gv.getCaps().standardDerivatives && this._bumpTexture && rv.e.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && rv.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Sv, this._eventInfo.subMesh = zv, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (Sv._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (Sv.AREALIGHTUSED || Sv.CLUSTLIGHT_BATCH)
            for (let Tv = 0; Tv < vv.lightSources.length; Tv++)
              if (!vv.lightSources[Tv]._isReady()) return !1;
          if (gv.getCaps().standardDerivatives || vv.isVerticesDataPresent(Av.k.NormalKind) || (vv.createNormals(!0), Dv.d.Warn("PBRMaterial: Normals have been created for the mesh: " + vv.name)), !(0, Xv.d)(ev, vv, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const pv = zv.effect,
            dv = Sv._areLightsDisposed,
            Nv = this._prepareEffect(vv, zv.getRenderingMesh(), Sv, this.onCompiled, this.onError, Pv, null);
          let lv = !1;
          if (Nv)
            if (this._onEffectCreatedObservable && (cz.effect = Nv, cz.subMesh = zv, this._onEffectCreatedObservable.notifyObservers(cz)), this.allowShaderHotSwapping && pv && !Nv.isReady()) {
              if (Sv.markAsUnprocessed(), lv = this.isFrozen, dv) return Sv._areLightsDisposed = !0, !1
            } else ev.resetCachedMaterial(), zv.setEffect(Nv, Sv, this._materialContext);
          return !(!zv.effect || !zv.effect.isReady()) && (Sv._renderId = ev.getRenderId(), hv._wasPreviouslyReady = !lv, hv._wasPreviouslyUsingInstances = !!Pv, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(zv, Pv, hv) {
          let Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            ev = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            gv = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            pv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(zv, Pv, hv, gv, pv), !hv.isDirty) return null;
          hv.markAsProcessed();
          const dv = this.rD().ma(),
            Nv = new kv.e;
          let lv = 0;
          hv.USESPHERICALINVERTEX && Nv.addFallback(lv++, "USESPHERICALINVERTEX"), hv.FOG && Nv.addFallback(lv, "FOG"), hv.SPECULARAA && Nv.addFallback(lv, "SPECULARAA"), hv.POINTSIZE && Nv.addFallback(lv, "POINTSIZE"), hv.LOGARITHMICDEPTH && Nv.addFallback(lv, "LOGARITHMICDEPTH"), hv.PARALLAX && Nv.addFallback(lv, "PARALLAX"), hv.PARALLAX_RHS && Nv.addFallback(lv, "PARALLAX_RHS"), hv.PARALLAXOCCLUSION && Nv.addFallback(lv++, "PARALLAXOCCLUSION"), hv.ENVIRONMENTBRDF && Nv.addFallback(lv++, "ENVIRONMENTBRDF"), hv.TANGENT && Nv.addFallback(lv++, "TANGENT"), hv.BUMP && Nv.addFallback(lv++, "BUMP"), lv = (0, Xv.B)(hv, Nv, this._maxSimultaneousLights, lv), hv.SPECULARTERM && Nv.addFallback(lv++, "SPECULARTERM"), hv.USESPHERICALFROMREFLECTIONMAP && Nv.addFallback(lv++, "USESPHERICALFROMREFLECTIONMAP"), hv.USEIRRADIANCEMAP && Nv.addFallback(lv++, "USEIRRADIANCEMAP"), hv.LIGHTMAP && Nv.addFallback(lv++, "LIGHTMAP"), hv.NORMAL && Nv.addFallback(lv++, "NORMAL"), hv.AMBIENT && Nv.addFallback(lv++, "AMBIENT"), hv.EMISSIVE && Nv.addFallback(lv++, "EMISSIVE"), hv.VERTEXCOLOR && Nv.addFallback(lv++, "VERTEXCOLOR"), hv.MORPHTARGETS && Nv.addFallback(lv++, "MORPHTARGETS"), hv.MULTIVIEW && Nv.addFallback(0, "MULTIVIEW");
          const Tv = [Av.k.PositionKind];
          hv.NORMAL && Tv.push(Av.k.NormalKind), hv.TANGENT && Tv.push(Av.k.TangentKind);
          for (let vv = 1; vv <= 6; ++vv) hv["UV" + vv] && Tv.push(`uv${1===vv?"":vv}`);
          hv.VERTEXCOLOR && Tv.push(Av.k.ColorKind), (0, Xv.G)(Tv, zv, hv, Nv), (0, Xv.J)(Tv, hv), (0, Xv.L)(Tv, zv, hv), (0, Xv.F)(Tv, zv, hv);
          let Wv = "pbr";
          const wv = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            av = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, Xv.kb)(wv, av, !0);
          const sv = ["Material", "Scene", "Mesh"],
            Cv = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: hv.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = Nv, this._eventInfo.fallbackRank = lv, this._eventInfo.defines = hv, this._eventInfo.uniforms = wv, this._eventInfo.attributes = Tv, this._eventInfo.samplers = av, this._eventInfo.uniformBuffersNames = sv, this._eventInfo.customCode = void 0, this._eventInfo.mesh = zv, this._eventInfo.indexParameters = Cv, this._callbackPluginEventGeneric(128, this._eventInfo), wz.d.AddUniformsAndSamplers(wv, av), Bv.b.AddUniforms(wv), Bv.b.AddSamplers(av), (0, lz.c)(wv), this._useVertexPulling) {
            const vv = Pv?.geometry;
            vv && (this._vertexPullingMetadata = (0, Tz.e)(vv), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((vv, zv) => {
              wv.push(`vp_${zv}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          ov.b && (ov.b.PrepareUniforms(wv, hv), ov.b.PrepareSamplers(av, hv)), (0, Xv.lb)({
            uniformsNames: wv,
            uniformBuffersNames: sv,
            samplers: av,
            defines: hv,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const iv = {};
          this.customShaderNameResolve && (Wv = this.customShaderNameResolve(Wv, wv, sv, av, hv, Tv, iv));
          const cv = hv.toString(),
            Gv = dv.createEffect(Wv, {
              attributes: Tv,
              uniformsNames: wv,
              uniformBuffersNames: sv,
              samplers: av,
              defines: cv,
              fallbacks: Nv,
              onCompiled: Sv,
              onError: ev,
              indexParameters: Cv,
              processFinalCode: iv.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: hv.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: vv._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, dv);
          return this._eventInfo.customCode = void 0, Gv
        }
        _prepareDefines(zv, Pv, hv) {
          let Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            ev = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const gv = Pv.hasThinInstances,
            pv = this.rD(),
            dv = pv.ma();
          (0, Xv.W)(pv, zv, hv, !0, this._maxSimultaneousLights, this._disableLighting), hv._needNormals = !0, (0, Xv.cb)(pv, hv);
          const Nv = this.needAlphaBlendingForMesh(zv) && this.rD().useOrderIndependentTransparency;
          if ((0, Xv.ib)(pv, hv, this.canRenderToMRT && !Nv), (0, Xv.eb)(pv, hv, Nv), wz.d.PrepareDefines(dv.currentRenderPassId, zv, hv), hv.METALLICWORKFLOW = this.isMetallicWorkflow(), hv._areTexturesDirty) {
            hv._needUVs = !1;
            for (let vv = 1; vv <= 6; ++vv) hv["MAINUV" + vv] = !1;
            if (pv.texturesEnabled) {
              hv.ALBEDODIRECTUV = 0, hv.BASE_WEIGHTDIRECTUV = 0, hv.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, hv.AMBIENTDIRECTUV = 0, hv.OPACITYDIRECTUV = 0, hv.EMISSIVEDIRECTUV = 0, hv.REFLECTIVITYDIRECTUV = 0, hv.MICROSURFACEMAPDIRECTUV = 0, hv.METALLIC_REFLECTANCEDIRECTUV = 0, hv.REFLECTANCEDIRECTUV = 0, hv.BUMPDIRECTUV = 0, hv.LIGHTMAPDIRECTUV = 0, dv.getCaps().textureLOD && (hv.LODBASEDMICROSFURACE = !0), this._albedoTexture && rv.e.DiffuseTextureEnabled ? ((0, Xv._)(this._albedoTexture, hv, "ALBEDO"), hv.GAMMAALBEDO = this._albedoTexture.gammaSpace) : hv.ALBEDO = !1, this._baseWeightTexture && rv.e.BaseWeightTextureEnabled ? (0, Xv._)(this._baseWeightTexture, hv, "BASE_WEIGHT") : hv.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && rv.e.BaseDiffuseRoughnessTextureEnabled ? (0, Xv._)(this._baseDiffuseRoughnessTexture, hv, "BASE_DIFFUSE_ROUGHNESS") : hv.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && rv.e.AmbientTextureEnabled ? ((0, Xv._)(this._ambientTexture, hv, "AMBIENT"), hv.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : hv.AMBIENT = !1, this._opacityTexture && rv.e.OpacityTextureEnabled ? ((0, Xv._)(this._opacityTexture, hv, "OPACITY"), hv.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : hv.OPACITY = !1;
              const vv = this._getReflectionTexture(),
                zv = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || dv.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, Xv.T)(pv, vv, hv, this.realTimeFiltering, this.realTimeFilteringQuality, !zv), this._lightmapTexture && rv.e.LightmapTextureEnabled ? ((0, Xv._)(this._lightmapTexture, hv, "LIGHTMAP"), hv.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, hv.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, hv.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : hv.LIGHTMAP = !1, this._emissiveTexture && rv.e.EmissiveTextureEnabled ? ((0, Xv._)(this._emissiveTexture, hv, "EMISSIVE"), hv.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : hv.EMISSIVE = !1, rv.e.SpecularTextureEnabled ? (this._metallicTexture ? ((0, Xv._)(this._metallicTexture, hv, "REFLECTIVITY"), hv.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, hv.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, hv.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, hv.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, hv.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, Xv._)(this._reflectivityTexture, hv, "REFLECTIVITY"), hv.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, hv.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, hv.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : hv.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (hv.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, Xv._)(this._metallicReflectanceTexture, hv, "METALLIC_REFLECTANCE"), hv.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : hv.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, Xv._)(this._reflectanceTexture, hv, "REFLECTANCE"), hv.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : hv.REFLECTANCE = !1) : (hv.METALLIC_REFLECTANCE = !1, hv.REFLECTANCE = !1), this._microSurfaceTexture ? (0, Xv._)(this._microSurfaceTexture, hv, "MICROSURFACEMAP") : hv.MICROSURFACEMAP = !1) : (hv.REFLECTIVITY = !1, hv.MICROSURFACEMAP = !1), dv.getCaps().standardDerivatives && this._bumpTexture && rv.e.BumpTextureEnabled && !this._disableBumpMap ? ((0, Xv._)(this._bumpTexture, hv, "BUMP"), this._useParallax && this._albedoTexture && rv.e.DiffuseTextureEnabled ? (hv.PARALLAX = !0, hv.PARALLAX_RHS = pv.useRightHandedSystem, hv.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : hv.PARALLAX = !1, hv.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (hv.BUMP = !1, hv.PARALLAX = !1, hv.PARALLAX_RHS = !1, hv.PARALLAXOCCLUSION = !1, hv.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && rv.e.ReflectionTextureEnabled ? (hv.ENVIRONMENTBRDF = !0, hv.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (hv.ENVIRONMENTBRDF = !1, hv.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? hv.ALPHAFROMALBEDO = !0 : hv.ALPHAFROMALBEDO = !1
            }
            hv.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === vv.LIGHTFALLOFF_STANDARD ? (hv.USEPHYSICALLIGHTFALLOFF = !1, hv.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === vv.LIGHTFALLOFF_GLTF ? (hv.USEPHYSICALLIGHTFALLOFF = !1, hv.USEGLTFLIGHTFALLOFF = !0) : (hv.USEPHYSICALLIGHTFALLOFF = !0, hv.USEGLTFLIGHTFALLOFF = !1), hv.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? hv.TWOSIDEDLIGHTING = !0 : hv.TWOSIDEDLIGHTING = !1, hv.MIRRORED = !!pv._mirroredCameraPosition, hv.SPECULARAA = dv.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(hv._areTexturesDirty || hv._areMiscDirty) && (hv.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, hv.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, hv.ALPHABLEND = this.needAlphaBlendingForMesh(zv), hv.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, hv.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), hv._areTexturesDirty && (hv.TEXTURE_REPETITION_MODE = dv.version > 1 || dv.isWebGPU ? this.textureRepetitionMode : 0), hv._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(hv), hv.FORCENORMALFORWARD = this._forceNormalForward, hv.RADIANCEOCCLUSION = this._useRadianceOcclusion, hv.HORIZONOCCLUSION = this._useHorizonOcclusion, hv._areMiscDirty && ((0, Xv.$)(zv, pv, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(zv), hv, this._applyDecalMapAfterDetailMap, this._useVertexPulling, Pv, this._isVertexOutputInvariant), hv.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !zv.isVerticesDataPresent(Av.k.NormalKind), hv.DEBUGMODE = this._debugMode), (0, Xv.S)(pv, dv, this, hv, !!Sv, ev, gv), this._eventInfo.defines = hv, this._eventInfo.mesh = zv, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Xv.P)(zv, hv, !0, !0, !0, this._transparencyMode !== vv.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(vv, zv, Pv) {
          const hv = {
            clipPlane: !1,
            useInstances: !1,
            ...Pv
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const Pv = new mz(this._eventInfo.defineNames),
              Sv = this._prepareEffect(vv, vv, Pv, void 0, void 0, hv.useInstances, hv.clipPlane);
            this._onEffectCreatedObservable && (cz.effect = Sv, cz.subMesh = null, this._onEffectCreatedObservable.notifyObservers(cz)), Sv.isReady() ? zv && zv(this) : Sv.onCompileObservable.add((() => {
              zv && zv(this)
            }))
          })()
        }
        buildUniformLayout() {
          const vv = this._uniformBuffer;
          vv.addUniform("vAlbedoInfos", 2), vv.addUniform("vBaseWeightInfos", 2), vv.addUniform("vBaseDiffuseRoughnessInfos", 2), vv.addUniform("vAmbientInfos", 4), vv.addUniform("vOpacityInfos", 2), vv.addUniform("vEmissiveInfos", 2), vv.addUniform("vLightmapInfos", 2), vv.addUniform("vReflectivityInfos", 3), vv.addUniform("vMicroSurfaceSamplerInfos", 2), vv.addUniform("vBumpInfos", 3), vv.addUniform("albedoMatrix", 16), vv.addUniform("baseWeightMatrix", 16), vv.addUniform("baseDiffuseRoughnessMatrix", 16), vv.addUniform("ambientMatrix", 16), vv.addUniform("opacityMatrix", 16), vv.addUniform("emissiveMatrix", 16), vv.addUniform("lightmapMatrix", 16), vv.addUniform("reflectivityMatrix", 16), vv.addUniform("microSurfaceSamplerMatrix", 16), vv.addUniform("bumpMatrix", 16), vv.addUniform("vTangentSpaceParams", 2), vv.addUniform("vAlbedoColor", 4), vv.addUniform("baseWeight", 1), vv.addUniform("baseDiffuseRoughness", 1), vv.addUniform("vLightingIntensity", 4), vv.addUniform("pointSize", 1), vv.addUniform("vReflectivityColor", 4), vv.addUniform("vEmissiveColor", 3), vv.addUniform("vAmbientColor", 3), vv.addUniform("vDebugMode", 2), vv.addUniform("vMetallicReflectanceFactors", 4), vv.addUniform("vMetallicReflectanceInfos", 2), vv.addUniform("metallicReflectanceMatrix", 16), vv.addUniform("vReflectanceInfos", 2), vv.addUniform("reflectanceMatrix", 16), vv.addUniform("cameraInfo", 4), vv.addUniform("vTextureRepetitionHexTilingParams", 4), (0, Xv.jb)(vv, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(vv, zv, Pv) {
          const hv = this.rD(),
            Sv = Pv.materialDefines;
          if (!Sv) return;
          const ev = Pv.effect;
          if (!ev) return;
          this._activeEffect = ev, zv.getMeshUniformBuffer().bindToEffect(ev, "Mesh"), zv.transferToEffect(vv);
          const gv = hv.ma();
          this._uniformBuffer.bindToEffect(ev, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, hv, zv, vv, this.isFrozen), wz.d.Bind(gv.currentRenderPassId, this._activeEffect, zv, vv, this);
          const pv = hv.activeCamera;
          pv ? this._uniformBuffer.updateFloat4("cameraInfo", pv.minZ, pv.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const dv = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", dv[0], dv[1], dv[2], dv[3]), this._eventInfo.subMesh = Pv, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Sv.OBJECTSPACE_NORMALMAP && (vv.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const Nv = this._mustRebind(hv, ev, Pv, zv.visibility),
            lv = gv._features.needToAlwaysBindUniformBuffers;
          (0, Xv.e)(zv, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Tz.d)(this._activeEffect, this._vertexPullingMetadata);
          let Tv = null;
          const Wv = this._uniformBuffer;
          if (Nv) {
            if (this.bindViewProjection(ev), Tv = this._getReflectionTexture(), !Wv.useUbo || !this.isFrozen || !Wv.isSync || Pv._drawWrapper._forceRebindOnNextCall) {
              if (hv.texturesEnabled && (this._albedoTexture && rv.e.DiffuseTextureEnabled && (Wv.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, Xv.A)(this._albedoTexture, Wv, "albedo")), this._baseWeightTexture && rv.e.BaseWeightTextureEnabled && (Wv.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, Xv.A)(this._baseWeightTexture, Wv, "baseWeight")), this._baseDiffuseRoughnessTexture && rv.e.BaseDiffuseRoughnessTextureEnabled && (Wv.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, Xv.A)(this._baseDiffuseRoughnessTexture, Wv, "baseDiffuseRoughness")), this._ambientTexture && rv.e.AmbientTextureEnabled && (Wv.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, Xv.A)(this._ambientTexture, Wv, "ambient")), this._opacityTexture && rv.e.OpacityTextureEnabled && (Wv.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, Xv.A)(this._opacityTexture, Wv, "opacity")), this._emissiveTexture && rv.e.EmissiveTextureEnabled && (Wv.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, Xv.A)(this._emissiveTexture, Wv, "emissive")), this._lightmapTexture && rv.e.LightmapTextureEnabled && (Wv.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, Xv.A)(this._lightmapTexture, Wv, "lightmap")), rv.e.SpecularTextureEnabled && (this._metallicTexture ? (Wv.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, Xv.A)(this._metallicTexture, Wv, "reflectivity")) : this._reflectivityTexture && (Wv.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, Xv.A)(this._reflectivityTexture, Wv, "reflectivity")), this._metallicReflectanceTexture && (Wv.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, Xv.A)(this._metallicReflectanceTexture, Wv, "metallicReflectance")), this._reflectanceTexture && Sv.REFLECTANCE && (Wv.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, Xv.A)(this._reflectanceTexture, Wv, "reflectance")), this._microSurfaceTexture && (Wv.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, Xv.A)(this._microSurfaceTexture, Wv, "microSurfaceSampler"))), this._bumpTexture && gv.getCaps().standardDerivatives && rv.e.BumpTextureEnabled && !this._disableBumpMap && (Wv.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, Xv.A)(this._bumpTexture, Wv, "bump"), hv._mirroredCameraPosition ? Wv.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Wv.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, Xv.j)(hv, Sv, Wv, this._reflectionColor, Tv, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && Wv.updateFloat("pointSize", this.pointSize), Sv.METALLICWORKFLOW) {
                Jv.k.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, Jv.k.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const vv = this.subSurface?._indexOfRefraction ?? 1.5,
                  zv = 1;
                Jv.k.Color4[0].b = vv;
                const Pv = Math.pow((vv - zv) / (vv + zv), 2);
                Jv.k.Color4[0].a = Pv, Wv.updateDirectColor4("vReflectivityColor", Jv.k.Color4[0]), Wv.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else Wv.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              Wv.updateColor3("vEmissiveColor", rv.e.EmissiveTextureEnabled ? this._emissiveColor : Jv.b.BlackReadOnly), !Sv.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? Wv.updateColor4("vAlbedoColor", this._albedoColor, 1) : Wv.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), Wv.updateFloat("baseWeight", this._baseWeight), Wv.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * hv.environmentIntensity, this._lightingInfos.w = this._specularIntensity, Wv.updateVector4("vLightingIntensity", this._lightingInfos), hv.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), Wv.updateColor3("vAmbientColor", this._globalAmbientColor), Wv.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            hv.texturesEnabled && (this._albedoTexture && rv.e.DiffuseTextureEnabled && Wv.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && rv.e.BaseWeightTextureEnabled && Wv.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && rv.e.BaseDiffuseRoughnessTextureEnabled && Wv.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && rv.e.AmbientTextureEnabled && Wv.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && rv.e.OpacityTextureEnabled && Wv.setTexture("opacitySampler", this._opacityTexture), (0, Xv.n)(hv, Sv, Wv, Tv, this.realTimeFiltering), Sv.ENVIRONMENTBRDF && Wv.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && rv.e.EmissiveTextureEnabled && Wv.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && rv.e.LightmapTextureEnabled && Wv.setTexture("lightmapSampler", this._lightmapTexture), rv.e.SpecularTextureEnabled && (this._metallicTexture ? Wv.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && Wv.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && Wv.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && Sv.REFLECTANCE && Wv.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && Wv.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && gv.getCaps().standardDerivatives && rv.e.BumpTextureEnabled && !this._disableBumpMap && Wv.setTexture("bumpSampler", this._bumpTexture)), this.rD().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(zv) && this.rD().depthPeelingRenderer.bind(ev), this._eventInfo.subMesh = Pv, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, lz.e)(this._activeEffect, this, hv), this.bindEyePosition(ev)
          } else lv && (this._needToBindSceneUbo = !0);
          !Nv && this.isFrozen && !lv || !hv.lightsEnabled || this._disableLighting || (0, Xv.r)(hv, zv, this._activeEffect, Sv, this._maxSimultaneousLights), !Nv && this.isFrozen || ((hv.fogEnabled && zv.applyFog && hv.fogMode !== Qv.g.FOGMODE_NONE || Tv || this.subSurface.refractionTexture || zv.receiveShadows || Sv.PREPASS || Sv.CLUSTLIGHT_BATCH) && this.bindView(ev), (0, Xv.g)(hv, zv, this._activeEffect, !0), Sv.NUM_MORPH_INFLUENCERS && (0, Xv.v)(zv, this._activeEffect), Sv.BAKED_VERTEX_ANIMATION_TEXTURE && zv.bakedVertexAnimationManager?.bind(ev, Sv.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, Xv.u)(Sv, this._activeEffect, hv)), this._afterBind(zv, this._activeEffect, Pv), Wv.update()
        }
        getAnimatables() {
          const vv = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && vv.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && vv.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && vv.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && vv.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && vv.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && vv.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && vv.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? vv.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && vv.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && vv.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && vv.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && vv.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && vv.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && vv.push(this._microSurfaceTexture), vv
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.rD().environmentTexture
        }
        getActiveTextures() {
          const vv = super.getActiveTextures();
          return this._albedoTexture && vv.push(this._albedoTexture), this._baseWeightTexture && vv.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && vv.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && vv.push(this._ambientTexture), this._opacityTexture && vv.push(this._opacityTexture), this._reflectionTexture && vv.push(this._reflectionTexture), this._emissiveTexture && vv.push(this._emissiveTexture), this._reflectivityTexture && vv.push(this._reflectivityTexture), this._metallicTexture && vv.push(this._metallicTexture), this._metallicReflectanceTexture && vv.push(this._metallicReflectanceTexture), this._reflectanceTexture && vv.push(this._reflectanceTexture), this._microSurfaceTexture && vv.push(this._microSurfaceTexture), this._bumpTexture && vv.push(this._bumpTexture), this._lightmapTexture && vv.push(this._lightmapTexture), vv
        }
        hasTexture(vv) {
          return !!super.hasTexture(vv) || (this._albedoTexture === vv || (this._baseWeightTexture === vv || (this._baseDiffuseRoughnessTexture === vv || (this._ambientTexture === vv || (this._opacityTexture === vv || (this._reflectionTexture === vv || (this._emissiveTexture === vv || (this._reflectivityTexture === vv || (this._metallicTexture === vv || (this._metallicReflectanceTexture === vv || (this._reflectanceTexture === vv || (this._microSurfaceTexture === vv || (this._bumpTexture === vv || this._lightmapTexture === vv)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const vv = this.rD().enableSubSurfaceForPrePass();
          return vv && (vv.enabled = !0), !0
        }
        dispose(vv, zv) {
          this._breakShaderLoadedCheck = !0, zv && (this._environmentBRDFTexture && this.rD().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(vv, zv)
        }
      }, zv = new WeakMap, (() => {
        const zv = "function" === typeof Symbol && Symbol.metadata ? Object.create(Sv[Symbol.metadata] ?? null) : void 0;
        hv = [(0, Ov.e)("_markAllSubMeshesAsMiscDirty")], (0, nv.e)(vv, null, hv, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: vv => "debugMode" in vv,
            get: vv => vv.debugMode,
            set: (vv, zv) => {
              vv.debugMode = zv
            }
          },
          metadata: zv
        }, gv, pv), zv && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zv
        })
      })(), vv.PBRMATERIAL_OPAQUE = ev.b.MATERIAL_OPAQUE, vv.PBRMATERIAL_ALPHATEST = ev.b.MATERIAL_ALPHATEST, vv.PBRMATERIAL_ALPHABLEND = ev.b.MATERIAL_ALPHABLEND, vv.PBRMATERIAL_ALPHATESTANDBLEND = ev.b.MATERIAL_ALPHATESTANDBLEND, vv.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, vv.LIGHTFALLOFF_PHYSICAL = 0, vv.LIGHTFALLOFF_GLTF = 1, vv.LIGHTFALLOFF_STANDARD = 2, vv.ForceGLSL = !1, vv._ShaderLoader = new Wz.e((() => [Promise.all([Pv.e(308), Pv.e(319)]).then((() => Pv(60940))), Promise.all([Pv.e(313), Pv.e(309), Pv.e(373), Pv.e(322), Pv.e(372)]).then((() => Pv(60956)))]), (() => [Promise.all([Pv.e(327), Pv.e(329), Pv.e(336)]).then((() => Pv(61040))), Promise.all([Pv.e(327), Pv.e(330), Pv.e(376), Pv.e(340), Pv.e(375)]).then((() => Pv(61071)))])), vv
    })();
    Object.getOwnPropertyDescriptor(fz.prototype, "decalMap") || Object.defineProperty(fz.prototype, "decalMap", (0, iz.g)("PBRBaseMaterial", "decalMap")), (0, Pv(41148).d)();
    var Fz = Pv(39312);
    var Yz = Pv(39399),
      nz = Pv(41125),
      Oz = Pv(39134),
      Dz = Pv(39152),
      Kz = Pv(39255);
    let Vz = !1;
    const Uz = new Jv.e,
      Rz = new Jv.e;
    class xz extends nz.e {
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
      set wrapU(vv) {
        if (this._textures)
          for (let zv = 0; zv < this._textures.length; zv++) this._textures[zv].wrapU = vv
      }
      set wrapV(vv) {
        if (this._textures)
          for (let zv = 0; zv < this._textures.length; zv++) this._textures[zv].wrapV = vv
      }
      constructor(vv, zv, Pv, hv, Sv, ev) {
        const gv = !(!Sv || !Sv.generateMipMaps) && Sv.generateMipMaps,
          pv = !(!Sv || !Sv.generateDepthTexture) && Sv.generateDepthTexture,
          dv = Sv && Sv.depthTextureFormat ? Sv.depthTextureFormat : 15,
          Nv = !Sv || void 0 === Sv.doNotChangeAspectRatio || Sv.doNotChangeAspectRatio,
          lv = !(!Sv || !Sv.drawOnlyOnFirstAttachmentByDefault) && Sv.drawOnlyOnFirstAttachmentByDefault;
        if (super(vv, zv, hv, gv, Nv, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), Vz || (Vz = !0, Dz.ThinEngine.prototype.restoreSingleAttachment = function() {
            const vv = this._gl;
            this.bindAttachments([vv.BACK])
          }, Dz.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const vv = this._gl;
            this.bindAttachments([vv.COLOR_ATTACHMENT0])
          }, Dz.ThinEngine.prototype.buildTextureLayout = function(vv) {
            let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const Pv = this._gl,
              hv = [];
            if (zv) hv.push(Pv.BACK);
            else
              for (let Sv = 0; Sv < vv.length; Sv++) vv[Sv] ? hv.push(Pv["COLOR_ATTACHMENT" + Sv]) : hv.push(Pv.NONE);
            return hv
          }, Dz.ThinEngine.prototype.bindAttachments = function(vv) {
            const zv = this._gl,
              Pv = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, Pv)
              for (let hv = 0; hv < vv.length; hv++) vv[hv] !== zv.NONE && Pv[hv] && (0, Kz.g)(Pv[hv].format) && (this._integerMRTAttachmentsMask |= 1 << hv);
            zv.drawBuffers(vv)
          }, Dz.ThinEngine.prototype.clearAttachments = function(vv, zv, Pv, hv) {
            let Sv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const gv = this._currentRenderTarget?.textures;
            let pv = !1;
            if (Pv && vv && gv)
              for (let dv = 0; dv < zv.length; dv++) {
                const vv = gv[dv];
                if (zv[dv] !== this._gl.NONE && vv && (0, Kz.g)(vv.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  pv = !0;
                  break
                }
              }
            if (!pv || !vv || !gv) return this.bindAttachments(zv), void this.clear(vv, Pv, hv, Sv, ev);
            this.bindAttachments(zv), this._applyColorWriteState();
            for (let dv = 0; dv < zv.length; dv++) {
              const Pv = gv[dv];
              if (zv[dv] !== this._gl.NONE && Pv) {
                let zv = vv;
                if ((0, Kz.g)(Pv.format)) {
                  const hv = (0, Kz.h)(Pv.type);
                  zv = hv ? Uz : Rz;
                  const Sv = hv ? 255 : 1;
                  zv.r = Math.round(vv.r * Sv), zv.g = Math.round(vv.g * Sv), zv.b = Math.round(vv.b * Sv), zv.a = Math.round(vv.a * Sv)
                }
                this._clearColorAttachment(dv, zv, Pv.format, Pv.type)
              }
            }
            if (hv || Sv) {
              const vv = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, hv, Sv, ev)
              } finally {
                this._integerMRTAttachmentsMask = vv
              }
            }
          }, Dz.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(vv) {
            let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Pv = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, vv.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(vv), zv || this.generateMipMapsMultiFramebuffer(vv), Pv && (vv._MSAAFramebuffer && this._bindUnboundFramebuffer(vv._framebuffer), Pv()), this._bindUnboundFramebuffer(null)
          }, Dz.ThinEngine.prototype.createMultipleRenderTarget = function(vv, zv) {
            let Pv, hv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Sv = !1,
              ev = !0,
              gv = !1,
              pv = !1,
              dv = 1,
              Nv = 1,
              lv = [],
              Tv = [],
              Wv = [],
              wv = [],
              av = [],
              sv = [],
              Cv = [],
              iv = [],
              cv = [],
              Gv = !1;
            const mv = this._createHardwareRenderTargetWrapper(!0, !1, vv);
            void 0 !== zv && (Sv = void 0 !== zv.generateMipMaps && zv.generateMipMaps, ev = void 0 === zv.generateDepthBuffer || zv.generateDepthBuffer, gv = void 0 !== zv.generateStencilBuffer && zv.generateStencilBuffer, pv = void 0 !== zv.generateDepthTexture && zv.generateDepthTexture, dv = zv.Aev ?? 1, Nv = zv.samples ?? Nv, lv = zv.types || lv, Tv = zv.samplingModes || Tv, Wv = zv.useSRGBBuffers || Wv, wv = zv.formats || wv, av = zv.targetTypes || av, sv = zv.faceIndex || sv, Cv = zv.layerIndex || Cv, iv = zv.layerCounts || iv, cv = zv.labels || cv, Gv = zv.dontCreateTextures ?? !1, this.ka > 1 && (13 === zv.depthTextureFormat || 17 === zv.depthTextureFormat || 16 === zv.depthTextureFormat || 14 === zv.depthTextureFormat || 18 === zv.depthTextureFormat) && (Pv = zv.depthTextureFormat)), void 0 === Pv && (Pv = gv ? 13 : 14);
            const jv = this._gl,
              fv = this._currentFramebuffer,
              Fv = jv.createFramebuffer();
            this._bindUnboundFramebuffer(Fv);
            const Yv = vv.width ?? vv,
              nv = vv.height ?? vv,
              Ov = [],
              Kv = [],
              Vv = this.ka > 1 && (13 === Pv || 17 === Pv || 18 === Pv);
            mv.label = zv?.label ?? "MultiRenderTargetWrapper", mv._framebuffer = Fv, mv._generateDepthBuffer = pv || ev, mv._generateStencilBuffer = pv ? Vv : gv, mv._depthStencilBuffer = this._setupFramebufferDepthAttachments(mv._generateStencilBuffer, mv._generateDepthBuffer, Yv, nv, 1, Pv), mv._attachments = Kv;
            for (let Uv = 0; Uv < dv; Uv++) {
              let vv = Tv[Uv] || 3,
                zv = lv[Uv] || 0,
                Pv = Wv[Uv] || !1;
              const hv = wv[Uv] || 5,
                ev = av[Uv] || 3553,
                gv = iv[Uv] ?? 1;
              (1 !== zv || this._caps.textureFloatLinearFiltering) && (2 !== zv || this._caps.textureHalfFloatLinearFiltering) || (vv = 1);
              const pv = this._getSamplingParameters(vv, Sv);
              1 !== zv || this._caps.textureFloat || (zv = 0, Dv.d.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), Pv = Pv && this._caps.supportSRGBBuffers && (this.ka > 1 || this.isWebGPU);
              const dv = this.ka > 1,
                Nv = jv[dv ? "COLOR_ATTACHMENT" + Uv : "COLOR_ATTACHMENT" + Uv + "_WEBGL"];
              if (Kv.push(Nv), -1 === ev || Gv) continue;
              const sv = new Oz.e(this, 6);
              Ov[Uv] = sv, jv.activeTexture(jv["TEXTURE" + Uv]), jv.bindTexture(ev, sv._hardwareTexture.underlyingResource), jv.texParameteri(ev, jv.TEXTURE_MAG_FILTER, pv.mag), jv.texParameteri(ev, jv.TEXTURE_MIN_FILTER, pv.min), jv.texParameteri(ev, jv.TEXTURE_WRAP_S, jv.CLAMP_TO_EDGE), jv.texParameteri(ev, jv.TEXTURE_WRAP_T, jv.CLAMP_TO_EDGE);
              const Cv = this._getRGBABufferInternalSizedFormat(zv, hv, Pv),
                fv = this._getInternalFormat(hv),
                Fv = this._getWebGLTextureType(zv);
              if (!dv || 35866 !== ev && 32879 !== ev)
                if (34067 === ev) {
                  for (let vv = 0; vv < 6; vv++) jv.texImage2D(jv.TEXTURE_CUBE_MAP_POSITIVE_X + vv, 0, Cv, Yv, nv, 0, fv, Fv, null);
                  sv.isCube = !0
                } else jv.texImage2D(jv.TEXTURE_2D, 0, Cv, Yv, nv, 0, fv, Fv, null);
              else 35866 === ev ? sv.is2DArray = !0 : sv.is3D = !0, sv.baseDepth = sv.depth = gv, jv.texImage3D(ev, 0, Cv, Yv, nv, gv, 0, fv, Fv, null);
              Sv && jv.generateMipmap(ev), this._bindTextureDirectly(ev, null), sv.baseWidth = Yv, sv.baseHeight = nv, sv.width = Yv, sv.height = nv, sv.isReady = !0, sv.samples = 1, sv.generateMipMaps = Sv, sv.samplingMode = vv, sv.type = zv, sv._useSRGBBuffer = Pv, sv.format = hv, sv.label = cv[Uv] ?? mv.label + "-Texture" + Uv, this._internalTexturesCache.push(sv)
            }
            if (pv && this._caps.depthTextureExtension && !Gv) {
              const vv = new Oz.e(this, 14);
              let zv = 5,
                hv = jv.DEPTH_COMPONENT16,
                ev = jv.DEPTH_COMPONENT,
                gv = jv.UNSIGNED_SHORT,
                pv = jv.DEPTH_ATTACHMENT;
              this.ka < 2 ? hv = jv.DEPTH_COMPONENT : 14 === Pv ? (zv = 1, gv = jv.FLOAT, hv = jv.DEPTH_COMPONENT32F) : 18 === Pv ? (zv = 0, gv = jv.FLOAT_32_UNSIGNED_INT_24_8_REV, hv = jv.DEPTH32F_STENCIL8, ev = jv.DEPTH_STENCIL, pv = jv.DEPTH_STENCIL_ATTACHMENT) : 16 === Pv ? (zv = 0, gv = jv.UNSIGNED_INT, hv = jv.DEPTH_COMPONENT24, pv = jv.DEPTH_ATTACHMENT) : 13 !== Pv && 17 !== Pv || (zv = 12, gv = jv.UNSIGNED_INT_24_8, hv = jv.DEPTH24_STENCIL8, ev = jv.DEPTH_STENCIL, pv = jv.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(jv.TEXTURE_2D, vv, !0), jv.texParameteri(jv.TEXTURE_2D, jv.TEXTURE_MAG_FILTER, jv.NEAREST), jv.texParameteri(jv.TEXTURE_2D, jv.TEXTURE_MIN_FILTER, jv.NEAREST), jv.texParameteri(jv.TEXTURE_2D, jv.TEXTURE_WRAP_S, jv.CLAMP_TO_EDGE), jv.texParameteri(jv.TEXTURE_2D, jv.TEXTURE_WRAP_T, jv.CLAMP_TO_EDGE), jv.texImage2D(jv.TEXTURE_2D, 0, hv, Yv, nv, 0, ev, gv, null), jv.framebufferTexture2D(jv.FRAMEBUFFER, pv, jv.TEXTURE_2D, vv._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(jv.TEXTURE_2D, null), mv._depthStencilTexture = vv, mv._depthStencilTextureWithStencil = Vv, vv.baseWidth = Yv, vv.baseHeight = nv, vv.width = Yv, vv.height = nv, vv.isReady = !0, vv.samples = 1, vv.generateMipMaps = Sv, vv.samplingMode = 1, vv.format = Pv, vv.type = zv, vv.label = mv.label + "-DepthStencil", Ov[dv] = vv, this._internalTexturesCache.push(vv)
            }
            if (mv.setTextures(Ov), hv && jv.drawBuffers(Kv), this._bindUnboundFramebuffer(fv), mv.setLayerAndFaceIndices(Cv, sv), this.resetTextureCache(), Gv) {
              if (Nv > 1) {
                const vv = jv.createFramebuffer();
                if (!vv) throw new Error("Unable to create multi sampled framebuffer");
                mv._samples = Nv, mv._MSAAFramebuffer = vv, dv > 0 && hv && (this._bindUnboundFramebuffer(vv), jv.drawBuffers(Kv), this._bindUnboundFramebuffer(fv))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(mv, Nv, hv);
            return mv
          }, Dz.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(vv, zv) {
            let Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.ka < 2 || !vv) return 1;
            if (vv.samples === zv) return zv;
            const hv = this._gl;
            zv = Math.min(zv, this.getCaps().maxMSAASamples), vv._depthStencilBuffer && (hv.deleteRenderbuffer(vv._depthStencilBuffer), vv._depthStencilBuffer = null), vv._MSAAFramebuffer && (hv.deleteFramebuffer(vv._MSAAFramebuffer), vv._MSAAFramebuffer = null);
            const Sv = vv._attachments.length;
            for (let gv = 0; gv < Sv; gv++) {
              const zv = vv.textures[gv]._hardwareTexture;
              zv?.releaseMSAARenderBuffers()
            }
            if (zv > 1 && "function" === typeof hv.renderbufferStorageMultisample) {
              const ev = hv.createFramebuffer();
              if (!ev) throw new Error("Unable to create multi sampled framebuffer");
              vv._MSAAFramebuffer = ev, this._bindUnboundFramebuffer(ev);
              const gv = [];
              for (let Pv = 0; Pv < Sv; Pv++) {
                const Sv = vv.textures[Pv],
                  ev = Sv._hardwareTexture,
                  pv = hv[this.ka > 1 ? "COLOR_ATTACHMENT" + Pv : "COLOR_ATTACHMENT" + Pv + "_WEBGL"],
                  dv = this._createRenderBuffer(Sv.width, Sv.height, zv, -1, this._getRGBABufferInternalSizedFormat(Sv.type, Sv.format, Sv._useSRGBBuffer), pv);
                if (!dv) throw new Error("Unable to create multi sampled framebuffer");
                ev.addMSAARenderBuffer(dv), Sv.samples = zv, gv.push(pv)
              }
              Pv && hv.drawBuffers(gv)
            } else this._bindUnboundFramebuffer(vv._framebuffer);
            const ev = vv._depthStencilTexture ? vv._depthStencilTexture.format : void 0;
            return vv._depthStencilBuffer = this._setupFramebufferDepthAttachments(vv._generateStencilBuffer, vv._generateDepthBuffer, vv.width, vv.height, zv, ev), this._bindUnboundFramebuffer(null), vv._samples = zv, zv
          }, Dz.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(vv) {
            const zv = vv,
              Pv = this._gl;
            if (zv.isMulti)
              for (let hv = 0; hv < zv._attachments.length; hv++) {
                const vv = zv.textures[hv];
                !vv?.generateMipMaps || vv?.isCube || vv?.is3D || (this._bindTextureDirectly(Pv.TEXTURE_2D, vv, !0), Pv.generateMipmap(Pv.TEXTURE_2D), this._bindTextureDirectly(Pv.TEXTURE_2D, null))
              }
          }, Dz.ThinEngine.prototype.resolveMultiFramebuffer = function(vv) {
            const zv = vv,
              Pv = this._gl;
            if (!zv._MSAAFramebuffer || !zv.isMulti) return;
            let hv = zv.resolveMSAAColors ? Pv.COLOR_BUFFER_BIT : 0;
            hv |= zv._generateDepthBuffer && zv.resolveMSAADepth ? Pv.DEPTH_BUFFER_BIT : 0, hv |= zv._generateStencilBuffer && zv.resolveMSAAStencil ? Pv.STENCIL_BUFFER_BIT : 0;
            const Sv = zv._attachments,
              ev = Sv.length;
            Pv.bindFramebuffer(Pv.READ_FRAMEBUFFER, zv._MSAAFramebuffer), Pv.bindFramebuffer(Pv.DRAW_FRAMEBUFFER, zv._framebuffer);
            for (let gv = 0; gv < ev; gv++) {
              const vv = zv.textures[gv];
              for (let zv = 0; zv < ev; zv++) Sv[zv] = Pv.NONE;
              Sv[gv] = Pv[this.ka > 1 ? "COLOR_ATTACHMENT" + gv : "COLOR_ATTACHMENT" + gv + "_WEBGL"], Pv.readBuffer(Sv[gv]), Pv.drawBuffers(Sv), Pv.blitFramebuffer(0, 0, vv.width, vv.height, 0, 0, vv.width, vv.height, hv, Pv.NEAREST)
            }
            for (let gv = 0; gv < ev; gv++) Sv[gv] = Pv[this.ka > 1 ? "COLOR_ATTACHMENT" + gv : "COLOR_ATTACHMENT" + gv + "_WEBGL"];
            Pv.drawBuffers(Sv), Pv.bindFramebuffer(this._gl.FRAMEBUFFER, zv._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = ev;
        const Tv = [],
          Wv = [],
          wv = [],
          av = [],
          sv = [],
          Cv = [],
          iv = [],
          cv = [];
        this._initTypes(Pv, Tv, Wv, wv, av, sv, Cv, iv, cv, Sv);
        const Gv = !Sv || void 0 === Sv.generateDepthBuffer || Sv.generateDepthBuffer,
          mv = !(!Sv || void 0 === Sv.generateStencilBuffer) && Sv.generateStencilBuffer,
          jv = Sv && Sv.samples ? Sv.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: Wv,
          generateMipMaps: gv,
          generateDepthBuffer: Gv,
          generateStencilBuffer: mv,
          generateDepthTexture: pv,
          depthTextureFormat: dv,
          types: Tv,
          Aev: Pv,
          useSRGBBuffers: wv,
          samples: jv,
          formats: av,
          targetTypes: sv,
          faceIndex: Cv,
          layerIndex: iv,
          layerCounts: cv,
          labels: ev,
          label: vv
        }, this._count = Pv, this._drawOnlyOnFirstAttachmentByDefault = lv, Pv > 0 && (this._createInternalTextures(), this._createTextures(ev))
      }
      _initTypes(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv) {
        for (let lv = 0; lv < vv; lv++) Nv && Nv.types && void 0 !== Nv.types[lv] ? zv.push(Nv.types[lv]) : zv.push(Nv && Nv.defaultType ? Nv.defaultType : 0), Nv && Nv.samplingModes && void 0 !== Nv.samplingModes[lv] ? Pv.push(Nv.samplingModes[lv]) : Pv.push(Vv.e.BILINEAR_SAMPLINGMODE), Nv && Nv.useSRGBBuffers && void 0 !== Nv.useSRGBBuffers[lv] ? hv.push(Nv.useSRGBBuffers[lv]) : hv.push(!1), Nv && Nv.formats && void 0 !== Nv.formats[lv] ? Sv.push(Nv.formats[lv]) : Sv.push(5), Nv && Nv.targetTypes && void 0 !== Nv.targetTypes[lv] ? ev.push(Nv.targetTypes[lv]) : ev.push(3553), Nv && Nv.faceIndex && void 0 !== Nv.faceIndex[lv] ? gv.push(Nv.faceIndex[lv]) : gv.push(0), Nv && Nv.layerIndex && void 0 !== Nv.layerIndex[lv] ? pv.push(Nv.layerIndex[lv]) : pv.push(0), Nv && Nv.layerCounts && void 0 !== Nv.layerCounts[lv] ? dv.push(Nv.layerCounts[lv]) : dv.push(1)
      }
      _createInternaTextureIndexMapping() {
        const vv = {},
          zv = [];
        if (!this._renderTarget) return zv;
        const Pv = this._renderTarget.textures;
        for (let hv = 0; hv < Pv.length; hv++) {
          const Sv = Pv[hv];
          if (!Sv) continue;
          const ev = vv[Sv.uniqueId];
          void 0 !== ev ? zv[hv] = ev : vv[Sv.uniqueId] = hv
        }
        return zv
      }
      _rebuild() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || vv) return;
        const hv = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), zv && (this._releaseTextures(), this._createTextures(Pv));
        const Sv = this._renderTarget.textures;
        for (let ev = 0; ev < Sv.length; ev++) {
          const vv = this._textures[ev];
          void 0 !== hv[ev] && this._renderTarget.setTexture(Sv[hv[ev]], ev), vv._texture = Sv[ev], vv._texture && (vv._noMipmap = !vv._texture.useMipMaps, vv._useSRGBBuffer = vv._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let vv = 0; vv < this._textures.length; vv++) this._textures[vv]._texture = null, this._textures[vv].dispose()
      }
      _createTextures(vv) {
        const zv = this._renderTarget.textures;
        this._textures = [];
        for (let Pv = 0; Pv < zv.length; Pv++) {
          const hv = new Vv.e(null, this.rD());
          vv?.[Pv] && (hv.name = vv[Pv]), hv._texture = zv[Pv], hv._texture && (hv._noMipmap = !hv._texture.useMipMaps, hv._useSRGBBuffer = hv._texture._useSRGBBuffer), this._textures.push(hv)
        }
      }
      setInternalTexture(vv, zv) {
        let Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === zv && (this._texture = vv), this.renderTarget.setTexture(vv, zv, Pv), this.textures[zv] || (this.textures[zv] = new Vv.e(null, this.rD()), this.textures[zv].name = this._textureNames?.[zv] ?? this.textures[zv].name), this.textures[zv]._texture = vv, this.textures[zv]._noMipmap = !vv.useMipMaps, this.textures[zv]._useSRGBBuffer = vv._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[zv] = vv.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[zv] = vv.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[zv] = vv._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[zv])) {
          let Pv;
          Pv = vv.is2DArray ? 35866 : vv.isCube ? 34067 : vv.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[zv] = Pv
        }
      }
      setLayerAndFaceIndex(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[vv] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[vv] = zv), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[vv] = Pv), this.renderTarget.setLayerAndFaceIndex(vv, zv, Pv))
      }
      setLayerAndFaceIndices(vv, zv) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = vv, this._multiRenderTargetOptions.faceIndex = zv, this.renderTarget.setLayerAndFaceIndices(vv, zv))
      }
      get samples() {
        return this._samples
      }
      set samples(vv) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(vv) : this._samples = vv
      }
      resize(vv) {
        this._processSizeParameter(vv), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(vv, zv, Pv) {
        this._multiRenderTargetOptions.Aev = vv, this._count = vv;
        const hv = [],
          Sv = [],
          ev = [],
          gv = [],
          pv = [],
          dv = [],
          Nv = [],
          lv = [];
        this._textureNames = Pv, this._initTypes(vv, hv, Sv, ev, gv, pv, dv, Nv, lv, zv), this._multiRenderTargetOptions.types = hv, this._multiRenderTargetOptions.samplingModes = Sv, this._multiRenderTargetOptions.useSRGBBuffers = ev, this._multiRenderTargetOptions.formats = gv, this._multiRenderTargetOptions.targetTypes = pv, this._multiRenderTargetOptions.faceIndex = dv, this._multiRenderTargetOptions.layerIndex = Nv, this._multiRenderTargetOptions.layerCounts = lv, this._multiRenderTargetOptions.labels = Pv, this._rebuild(!1, !0, Pv)
      }
      _unbindFrameBuffer(vv, zv) {
        this._renderTarget && vv.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(zv)
        }))
      }
      dispose() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), vv ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const vv = this._renderTarget?.textures;
        if (vv) {
          for (let zv = vv.length - 1; zv >= 0; zv--) this._textures[zv]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var tz = Pv(39477);
    class qz {
      constructor(vv) {
        this.name = tz.d.NAME_GEOMETRYBUFFERRENDERER, this.Is = vv
      }
      register() {
        this.Is._gatherRenderTargetsStage.registerStep(tz.d.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(vv) {
        this.Is._geometryBufferRenderer && vv.push(this.Is._geometryBufferRenderer.getGBuffer())
      }
    }
    let Iz = !1;
    var Qz;
    ! function(vv) {
      vv[vv.Small = 0] = "Small", vv[vv.Medium = 1] = "Medium", vv[vv.Large = 2] = "Large", vv[vv.ExtraLarge = 3] = "ExtraLarge"
    }(Qz || (Qz = {}));
    const Zz = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      Az = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class Lz {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(vv) {
        if (vv && this._enableMeshBlendTag && !this._scene.ma().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = vv
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(vv) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = vv, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(vv, zv) {
        vv === Lz.POSITION_TEXTURE_TYPE ? (this._positionIndex = zv, this._enablePosition = !0) : vv === Lz.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = zv, this._enableVelocity = !0) : vv === Lz.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = zv, this._enableVelocityLinear = !0) : vv === Lz.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = zv, this._enableReflectivity = !0) : vv === Lz.DEPTH_TEXTURE_TYPE ? (this._depthIndex = zv, this._enableDepth = !0) : vv === Lz.NORMAL_TEXTURE_TYPE ? (this._normalIndex = zv, this._enableNormal = !0) : vv === Lz.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = zv, this._enableScreenspaceDepth = !0) : vv === Lz.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = zv, this._enableIrradiance = !0) : vv === Lz.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = zv, this._enableObjectId = !0) : vv === Lz.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = zv, this._enableMeshBlendTag = !0)
      }
      _setAttachments(vv) {
        this._attachmentsFromPrePass = vv
      }
      _linkInternalTexture(vv) {
        this._multiRenderTarget.setInternalTexture(vv, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(vv) {
        this._multiRenderTarget.renderList = vv
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(vv) {
        switch (vv) {
          case Lz.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case Lz.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case Lz.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case Lz.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case Lz.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case Lz.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case Lz.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case Lz.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case Lz.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case Lz.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(vv) {
        this._enableDepth = vv, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(vv) {
        this._enableNormal = vv, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(vv) {
        this._enablePosition = vv, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(vv) {
        this._enableVelocity = vv, vv || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = vv
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(vv) {
        this._enableVelocityLinear = vv, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(vv) {
        this._enableReflectivity = vv, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(vv) {
        this._enableScreenspaceDepth = vv, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(vv) {
        this._enableIrradiance = vv, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(vv) {
        if (vv && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (vv && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (vv && !this._enableObjectId && !this._linkedWithPrePass) {
          const vv = this._scene.ma(),
            zv = Math.min(vv.getCaps().maxDrawBuffers ?? 1, 8),
            Pv = this._assignRenderTargetIndices()[0] + 1;
          if (vv.getCaps().drawBuffersExtension && Pv > zv) throw new Error(`GeometryBufferRenderer: ${Pv} color attachments were requested, but this engine supports at most ${zv}`)
        }
        this._enableObjectId = vv, vv || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(vv) {
        if (this._enableMeshBlendTag !== vv) {
          if (vv) {
            const vv = this._scene.ma();
            if (! function(vv) {
                return "NATIVE" !== vv.shaderPlatformName && (vv.isWebGPU || 2 === vv.ka)
              }(vv)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !vv.isWebGPU && !vv.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const zv = Math.min(vv.getCaps().maxDrawBuffers ?? 1, 8),
                Pv = this._assignRenderTargetIndices()[0] + 1;
              if (vv.getCaps().drawBuffersExtension && Pv > zv) throw new Error(`GeometryBufferRenderer: ${Pv} color attachments were requested, but this engine supports at most ${zv}`)
            }
          }
          this._enableMeshBlendTag = vv, vv || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get Is() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          hv = arguments.length > 3 ? arguments[3] : void 0;
        var Sv;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new Jv.e(0, 0, 0, 0), this._clearDepthColor = new Jv.e(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = vv, this._ratioOrDimensions = zv, this._useUbo = vv.ma().supportsUniformBuffers, this._depthFormat = Pv, this._textureTypesAndFormats = hv || {}, this._initShaderSourceAsync(), Sv = Lz, Iz || (Iz = !0, Object.defineProperty(Qv.g.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(vv) {
            vv && vv.isSupported && (this._geometryBufferRenderer = vv)
          },
          enumerable: !0,
          configurable: !0
        }), Qv.g.prototype.enableGeometryBufferRenderer = function() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            Pv = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new Sv(this, vv, zv, Pv), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, Qv.g.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, Sv._SceneComponentInitialization = vv => {
          let zv = vv._getComponent(tz.d.NAME_GEOMETRYBUFFERRENDERER);
          zv || (zv = new qz(vv), vv.Ezv(zv))
        }), Lz._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.ma().isWebGPU && !Lz.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([Pv.e(328).then((() => Pv(61260))), Promise.all([Pv.e(327), Pv.e(339)]).then((() => Pv(61262)))])) : await Promise.all([Pv.e(311).then((() => Pv(61268))), Pv.e(310).then((() => Pv(61276)))]), this._shadersLoaded = !0
      }
      isReady(vv, zv) {
        if (!this._shadersLoaded) return !1;
        const Pv = vv.na();
        if (Pv && Pv.disableDepthWrite) return !1;
        if (function(vv) {
            return vv._isGaussianSplatting || "GaussianSplattingMesh" === (zv = vv.getClassName()) || "GaussianSplattingStream" === zv;
            var zv
          }(vv.getMesh())) return !1;
        const hv = [],
          Sv = [Av.k.PositionKind],
          ev = vv.getMesh();
        ev.isVerticesDataPresent(Av.k.NormalKind) && (hv.push("#define HAS_NORMAL_ATTRIBUTE"), Sv.push(Av.k.NormalKind));
        let gv = !1,
          pv = !1;
        if (Pv) {
          let vv = !1;
          if (Pv.needAlphaTestingForMesh(ev) && Pv.getAlphaTestTexture() && (hv.push("#define ALPHATEST"), hv.push(`#define ALPHATEST_UV${Pv.getAlphaTestTexture().coordinatesIndex+1}`), vv = !0), (Pv.bumpTexture || Pv.normalTexture || Pv.geometryNormalTexture) && rv.e.BumpTextureEnabled) {
            const zv = Pv.bumpTexture || Pv.normalTexture || Pv.geometryNormalTexture;
            hv.push("#define BUMP"), hv.push(`#define BUMP_UV${zv.coordinatesIndex+1}`), vv = !0
          }
          if (this._enableReflectivity) {
            let zv = !1;
            if ("PBRMetallicRoughnessMaterial" === Pv.getClassName()) Pv.metallicRoughnessTexture && (hv.push("#define ORMTEXTURE"), hv.push(`#define REFLECTIVITY_UV${Pv.metallicRoughnessTexture.coordinatesIndex+1}`), hv.push("#define METALLICWORKFLOW"), vv = !0, zv = !0), null != Pv.metallic && (hv.push("#define METALLIC"), hv.push("#define METALLICWORKFLOW"), zv = !0), null != Pv.roughness && (hv.push("#define ROUGHNESS"), hv.push("#define METALLICWORKFLOW"), zv = !0), zv && (Pv.baseTexture && (hv.push("#define ALBEDOTEXTURE"), hv.push(`#define ALBEDO_UV${Pv.baseTexture.coordinatesIndex+1}`), Pv.baseTexture.gammaSpace && hv.push("#define GAMMAALBEDO"), vv = !0), Pv.baseColor && hv.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === Pv.getClassName()) Pv.specularGlossinessTexture ? (hv.push("#define SPECULARGLOSSINESSTEXTURE"), hv.push(`#define REFLECTIVITY_UV${Pv.specularGlossinessTexture.coordinatesIndex+1}`), vv = !0, Pv.specularGlossinessTexture.gammaSpace && hv.push("#define GAMMAREFLECTIVITYTEXTURE")) : Pv.specularColor && hv.push("#define REFLECTIVITYCOLOR"), null != Pv.glossiness && hv.push("#define GLOSSINESS");
            else if ("PBRMaterial" === Pv.getClassName()) Pv.metallicTexture && (hv.push("#define ORMTEXTURE"), hv.push(`#define REFLECTIVITY_UV${Pv.metallicTexture.coordinatesIndex+1}`), hv.push("#define METALLICWORKFLOW"), vv = !0, zv = !0), null != Pv.metallic && (hv.push("#define METALLIC"), hv.push("#define METALLICWORKFLOW"), zv = !0), null != Pv.roughness && (hv.push("#define ROUGHNESS"), hv.push("#define METALLICWORKFLOW"), zv = !0), zv ? (Pv.albedoTexture && (hv.push("#define ALBEDOTEXTURE"), hv.push(`#define ALBEDO_UV${Pv.albedoTexture.coordinatesIndex+1}`), Pv.albedoTexture.gammaSpace && hv.push("#define GAMMAALBEDO"), vv = !0), Pv.albedoColor && hv.push("#define ALBEDOCOLOR")) : (Pv.reflectivityTexture ? (hv.push("#define SPECULARGLOSSINESSTEXTURE"), hv.push(`#define REFLECTIVITY_UV${Pv.reflectivityTexture.coordinatesIndex+1}`), Pv.reflectivityTexture.gammaSpace && hv.push("#define GAMMAREFLECTIVITYTEXTURE"), vv = !0) : Pv.reflectivityColor && hv.push("#define REFLECTIVITYCOLOR"), null != Pv.microSurface && hv.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === Pv.getClassName()) Pv.specularTexture && (hv.push("#define REFLECTIVITYTEXTURE"), hv.push(`#define REFLECTIVITY_UV${Pv.specularTexture.coordinatesIndex+1}`), Pv.specularTexture.gammaSpace && hv.push("#define GAMMAREFLECTIVITYTEXTURE"), vv = !0), Pv.specularColor && hv.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === Pv.getClassName()) {
              const zv = Pv;
              hv.push("#define METALLIC"), hv.push("#define ROUGHNESS"), zv._useRoughnessFromMetallicTextureGreen && zv.baseMetalnessTexture ? (hv.push("#define ORMTEXTURE"), hv.push(`#define REFLECTIVITY_UV${zv.baseMetalnessTexture.coordinatesIndex+1}`), vv = !0) : zv.baseMetalnessTexture ? (hv.push("#define METALLIC_TEXTURE"), hv.push(`#define METALLIC_UV${zv.baseMetalnessTexture.coordinatesIndex+1}`), vv = !0) : zv.specularRoughnessTexture && (hv.push("#define ROUGHNESS_TEXTURE"), hv.push(`#define ROUGHNESS_UV${zv.specularRoughnessTexture.coordinatesIndex+1}`), vv = !0), zv.baseColorTexture && (hv.push("#define ALBEDOTEXTURE"), hv.push(`#define ALBEDO_UV${zv.baseColorTexture.coordinatesIndex+1}`), zv.baseColorTexture.gammaSpace && hv.push("#define GAMMAALBEDO"), vv = !0), zv.baseColor && hv.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (hv.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === Pv.getClassName())) {
            const zv = Pv;
            zv.subsurfaceWeight > 0 && zv.subsurfaceWeightTexture && (hv.push("#define SUBSURFACE_WEIGHT"), hv.push(`#define SUBSURFACEWEIGHT_UV${zv.subsurfaceWeightTexture.coordinatesIndex+1}`), vv = !0), zv.transmissionWeight > 0 && zv.transmissionWeightTexture && (hv.push("#define TRANSMISSION_WEIGHT"), hv.push(`#define TRANSMISSIONWEIGHT_UV${zv.transmissionWeightTexture.coordinatesIndex+1}`), vv = !0)
          }
          vv && (hv.push("#define NEED_UV"), ev.isVerticesDataPresent(Av.k.UVKind) && (Sv.push(Av.k.UVKind), hv.push("#define UV1"), gv = !0), ev.isVerticesDataPresent(Av.k.UV2Kind) && (Sv.push(Av.k.UV2Kind), hv.push("#define UV2"), pv = !0))
        }
        if (this._enableDepth && (hv.push("#define DEPTH"), hv.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (hv.push("#define NORMAL"), hv.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (hv.push("#define POSITION"), hv.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (hv.push("#define VELOCITY"), hv.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(ev) && hv.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (hv.push("#define VELOCITY_LINEAR"), hv.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(ev) && hv.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (hv.push("#define REFLECTIVITY"), hv.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (hv.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), hv.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          hv.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), hv.push("#define IRRADIANCE");
          const vv = this._scene;
          if (vv.environmentTexture) {
            const zv = {};
            let Sv = !1,
              ev = 0;
            "OpenPBRMaterial" !== Pv.getClassName() && "StandardMaterial" !== Pv.getClassName() && "PBRMetallicRoughnessMaterial" !== Pv.getClassName() && "PBRSpecularGlossinessMaterial" !== Pv.getClassName() && "PBRMaterial" !== Pv.getClassName() || (Sv = !!Pv.realtimeFiltering, ev = Pv.realtimeFilteringQuality || 0), (0, Xv.T)(vv, vv.environmentTexture, zv, Sv, ev, !0);
            for (const vv in zv) zv[vv] && hv.push("#define " + vv);
            zv.USEIRRADIANCEMAP || hv.push("#define SPHERICAL_HARMONICS");
            const gv = vv.postProcessRenderPipelineManager.supportedPipelines.find((vv => "IBLShadowsRenderPipeline" === vv.getClassName()));
            if (gv) {
              const vv = gv;
              vv._getAccumulatedTexture() && (hv.push("#define IBL_SHADOW_TEXTURE"), vv.coloredShadows && hv.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (hv.push("#define OBJECT_ID"), hv.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (hv.push("#define MESH_BLEND_TAG"), hv.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && hv.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && hv.push("#define ENCODE_NORMAL"), ev.useBones && ev.computeBonesUsingShaders && ev.skeleton ? (Sv.push(Av.k.MatricesIndicesKind), Sv.push(Av.k.MatricesWeightsKind), ev.numBoneInfluencers > 4 && (Sv.push(Av.k.MatricesIndicesExtraKind), Sv.push(Av.k.MatricesWeightsExtraKind)), hv.push("#define NUM_BONE_INFLUENCERS " + ev.numBoneInfluencers), hv.push("#define BONETEXTURE " + ev.skeleton.isUsingTextureForMatrices), hv.push("#define BonesPerMesh " + (ev.skeleton.bones.length + 1))) : (hv.push("#define NUM_BONE_INFLUENCERS 0"), hv.push("#define BONETEXTURE false"), hv.push("#define BonesPerMesh 0"));
        const dv = ev.morphTargetManager ? (0, Xv.M)(ev.morphTargetManager, hv, Sv, ev, !0, !0, !1, gv, pv, !1) : 0;
        zv && (hv.push("#define INSTANCES"), (0, Xv.mb)(Sv, this._enableVelocity || this._enableVelocityLinear), vv.getRenderingMesh().hasThinInstances && hv.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? hv.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : hv.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, lz.m)(Pv, this._scene, hv);
        const Nv = this._scene.ma(),
          lv = vv._getDrawWrapper(void 0, !0),
          Tv = lv.defines,
          Wv = hv.join("\n");
        return Tv !== Wv && lv.setEffect(Nv.createEffect("geometry", {
          attributes: Sv,
          uniformsNames: Az,
          samplers: Zz,
          defines: Wv,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: dv
          },
          shaderLanguage: this.shaderLanguage
        }, Nv), Wv), lv.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(vv) {
        if (this._enableObjectId && 1 !== vv) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== vv) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = vv
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.ma().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.Is.ma()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.Is.ma().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const vv = [],
          zv = [];
        let Pv = 0;
        return this._enableDepth && (this._depthIndex = Pv, Pv++, vv.push("gBuffer_Depth"), zv.push(this._textureTypesAndFormats[Lz.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = Pv, Pv++, vv.push("gBuffer_Normal"), zv.push(this._textureTypesAndFormats[Lz.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = Pv, Pv++, vv.push("gBuffer_Position"), zv.push(this._textureTypesAndFormats[Lz.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = Pv, Pv++, vv.push("gBuffer_Velocity"), zv.push(this._textureTypesAndFormats[Lz.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = Pv, Pv++, vv.push("gBuffer_VelocityLinear"), zv.push(this._textureTypesAndFormats[Lz.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = Pv, Pv++, vv.push("gBuffer_Reflectivity"), zv.push(this._textureTypesAndFormats[Lz.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = Pv, Pv++, vv.push("gBuffer_ScreenspaceDepth"), zv.push(this._textureTypesAndFormats[Lz.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = Pv, Pv++, vv.push("gBuffer_Irradiance"), zv.push(this._textureTypesAndFormats[Lz.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = Pv, Pv++, vv.push("gBuffer_ObjectId"), zv.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = Pv, Pv++, vv.push("gBuffer_MeshBlendTag"), zv.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [Pv, vv, zv]
      }
      _createRenderTargets() {
        const vv = this._scene.ma(),
          [zv, Pv, hv] = this._assignRenderTargetIndices(),
          Sv = Math.min(vv.getCaps().maxDrawBuffers ?? 1, 8);
        if (vv.getCaps().drawBuffersExtension && zv > Sv) throw new Error(`GeometryBufferRenderer: ${zv} color attachments were requested, but this engine supports at most ${Sv}`);
        let gv = 0;
        vv._caps.textureFloat && vv._caps.textureFloatLinearFiltering ? gv = 1 : vv._caps.textureHalfFloat && vv._caps.textureHalfFloatLinearFiltering && (gv = 2);
        const pv = this._getRenderTargetDimensions(),
          dv = [],
          Nv = [],
          lv = [];
        for (const ev of hv) ev ? (dv.push(ev.textureType), Nv.push(ev.textureFormat), lv.push(ev.samplingMode ?? 2)) : (dv.push(gv), Nv.push(5), lv.push(2));
        if (this._normalsAreUnsigned = 11 === dv[Lz.NORMAL_TEXTURE_TYPE] || 13 === dv[Lz.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new xz("gBuffer", pv, zv, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: dv,
            formats: Nv,
            samplingModes: lv,
            depthTextureFormat: this._depthFormat
          }, Pv.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = Vv.e.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = Vv.e.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const Tv = [!0],
          Wv = [!1],
          wv = [!0];
        for (let ev = 1; ev < zv; ++ev) Tv.push(!0), wv.push(!1), Wv.push(!0);
        const av = vv.buildTextureLayout(Tv),
          sv = vv.buildTextureLayout(Wv),
          Cv = vv.buildTextureLayout(wv);
        this._multiRenderTarget.onClearObservable.add((vv => {
          const zv = this.useSpecificClearForDepthTexture ? sv : av;
          vv.clearAttachments(this._clearColor, zv, !0, !0, !0), this.useSpecificClearForDepthTexture && vv.clearAttachments(this._clearDepthColor, Cv, !0, !1, !1), vv.bindAttachments(av)
        })), this._resizeObserver = vv.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const iv = vv => {
          const zv = vv.getRenderingMesh(),
            Pv = vv.getEffectiveMesh(),
            hv = this._scene,
            Sv = hv.ma(),
            gv = vv.na();
          if (!gv) return;
          if (Pv._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[Pv.uniqueId] && (this._previousTransformationMatrices[Pv.uniqueId] = {
              oT: Zv.c.Identity(),
              viewProjection: hv.getTransformMatrix()
            }, zv.skeleton)) {
            const vv = zv.skeleton.getTransformMatrices(zv);
            this._previousBonesTransformationMatrices[zv.uniqueId] = this._copyBonesTransformationMatrices(vv, new Float32Array(vv.length))
          }
          const pv = zv._getInstancesRenderList(vv._id, !!vv.getReplacementMesh());
          if (pv.mustReturn) return;
          const dv = Sv.getCaps().instancedArrays && (null !== pv.visibleInstances[vv._id] || zv.hasThinInstances),
            Nv = Pv.getWorldMatrix();
          if (this.isReady(vv, dv)) {
            const lv = vv._getDrawWrapper();
            if (!lv) return;
            const Tv = lv.effect;
            let Wv;
            Sv.enableEffect(lv), dv || zv._bind(vv, Tv, gv.fillMode), this._useUbo ? ((0, Xv.x)(Tv, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (Tv.setMatrix("viewProjection", hv.getTransformMatrix()), Tv.setMatrix("view", hv.getViewMatrix()), this._scene.bindEyePosition(Tv, "vEyePosition"));
            if (zv._instanceDataStorage.isFrozen || !gv.backFaceCulling && null === gv.sideOrientation) Wv = zv._effectiveSideOrientation;
            else {
              const vv = Pv._getWorldMatrixDeterminant();
              Wv = gv._getEffectiveOrientation(zv), vv < 0 && (Wv = Wv === ev.b.ClockWiseSideOrientation ? ev.b.CounterClockWiseSideOrientation : ev.b.ClockWiseSideOrientation)
            }
            if (gv._preBind(lv, Wv), gv.needAlphaTestingForMesh(Pv)) {
              const vv = gv.getAlphaTestTexture();
              vv && (Tv.setTexture("diffuseSampler", vv), Tv.setMatrix("diffuseMatrix", vv.getTextureMatrix()), Tv.setFloat("alphaCutOff", gv.alphaCutOff ?? .4))
            }
            if ((gv.bumpTexture || gv.normalTexture || gv.geometryNormalTexture) && hv.ma().getCaps().standardDerivatives && rv.e.BumpTextureEnabled) {
              const vv = gv.bumpTexture || gv.normalTexture || gv.geometryNormalTexture;
              Tv.setFloat3("vBumpInfos", vv.coordinatesIndex, 1 / vv.level, gv.parallaxScaleBias), Tv.setMatrix("bumpMatrix", vv.getTextureMatrix()), Tv.setTexture("bumpSampler", vv), Tv.setFloat2("vTangentSpaceParams", gv.invertNormalMapX ? -1 : 1, gv.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === gv.getClassName()) null !== gv.metallicRoughnessTexture && (Tv.setTexture("reflectivitySampler", gv.metallicRoughnessTexture), Tv.setMatrix("reflectivityMatrix", gv.metallicRoughnessTexture.getTextureMatrix())), null !== gv.metallic && Tv.setFloat("metallic", gv.metallic), null !== gv.roughness && Tv.setFloat("glossiness", 1 - gv.roughness), null !== gv.baseTexture && (Tv.setTexture("albedoSampler", gv.baseTexture), Tv.setMatrix("albedoMatrix", gv.baseTexture.getTextureMatrix())), null !== gv.baseColor && Tv.setColor3("albedoColor", gv.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === gv.getClassName()) null !== gv.specularGlossinessTexture ? (Tv.setTexture("reflectivitySampler", gv.specularGlossinessTexture), Tv.setMatrix("reflectivityMatrix", gv.specularGlossinessTexture.getTextureMatrix())) : null !== gv.specularColor && Tv.setColor3("reflectivityColor", gv.specularColor), null !== gv.glossiness && Tv.setFloat("glossiness", gv.glossiness);
            else if ("PBRMaterial" === gv.getClassName()) null !== gv.metallicTexture && (Tv.setTexture("reflectivitySampler", gv.metallicTexture), Tv.setMatrix("reflectivityMatrix", gv.metallicTexture.getTextureMatrix())), null !== gv.metallic && Tv.setFloat("metallic", gv.metallic), null !== gv.roughness && Tv.setFloat("glossiness", 1 - gv.roughness), null !== gv.roughness || null !== gv.metallic || null !== gv.metallicTexture ? (null !== gv.albedoTexture && (Tv.setTexture("albedoSampler", gv.albedoTexture), Tv.setMatrix("albedoMatrix", gv.albedoTexture.getTextureMatrix())), null !== gv.albedoColor && Tv.setColor3("albedoColor", gv.albedoColor)) : (null !== gv.reflectivityTexture ? (Tv.setTexture("reflectivitySampler", gv.reflectivityTexture), Tv.setMatrix("reflectivityMatrix", gv.reflectivityTexture.getTextureMatrix())) : null !== gv.reflectivityColor && Tv.setColor3("reflectivityColor", gv.reflectivityColor), null !== gv.microSurface && Tv.setFloat("glossiness", gv.microSurface));
            else if ("StandardMaterial" === gv.getClassName()) null !== gv.specularTexture && (Tv.setTexture("reflectivitySampler", gv.specularTexture), Tv.setMatrix("reflectivityMatrix", gv.specularTexture.getTextureMatrix())), null !== gv.specularColor && Tv.setColor3("reflectivityColor", gv.specularColor);
            else if ("OpenPBRMaterial" === gv.getClassName()) {
              const vv = gv;
              vv._useRoughnessFromMetallicTextureGreen && vv.baseMetalnessTexture ? (Tv.setTexture("reflectivitySampler", vv.baseMetalnessTexture), Tv.setMatrix("reflectivityMatrix", vv.baseMetalnessTexture.getTextureMatrix())) : vv.baseMetalnessTexture ? (Tv.setTexture("metallicSampler", vv.baseMetalnessTexture), Tv.setMatrix("metallicMatrix", vv.baseMetalnessTexture.getTextureMatrix())) : vv.specularRoughnessTexture && (Tv.setTexture("roughnessSampler", vv.specularRoughnessTexture), Tv.setMatrix("roughnessMatrix", vv.specularRoughnessTexture.getTextureMatrix())), Tv.setFloat("metallic", vv.baseMetalness), Tv.setFloat("glossiness", 1 - vv.specularRoughness), null !== vv.baseColorTexture && (Tv.setTexture("albedoSampler", vv.baseColorTexture), Tv.setMatrix("albedoMatrix", vv.baseColorTexture.getTextureMatrix())), null !== vv.baseColor && Tv.setColor3("albedoColor", vv.baseColor)
            }
            if (this._enableIrradiance && hv.environmentTexture) {
              const vv = hv.environmentTexture,
                zv = hv.postProcessRenderPipelineManager.supportedPipelines.find((vv => "IBLShadowsRenderPipeline" === vv.getClassName()));
              if (zv) {
                const vv = zv._getAccumulatedTexture();
                vv && (Tv.setTexture("iblShadowSampler", vv), Tv.setFloat2("shadowTextureSize", vv.getSize().width, vv.getSize().height))
              }
              if (Tv.setMatrix("reflectionMatrix", vv.getReflectionTextureMatrix()), Tv.setFloat2("vReflectionInfos", vv.level * hv.iblIntensity, 0), Tv.setTexture("reflectionSampler", vv), vv.irradianceTexture && (Tv.setTexture("irradianceSampler", vv.irradianceTexture), vv.irradianceTexture._dominantDirection && Tv.setVector3("vReflectionDominantDirection", vv.irradianceTexture._dominantDirection)), vv.sphericalPolynomial) {
                const zv = vv.sphericalPolynomial;
                if (zv.preScaledHarmonics) {
                  const vv = zv.preScaledHarmonics;
                  Tv.setVector3("vSphericalL00", vv.l00), Tv.setVector3("vSphericalL1_1", vv.l1_1), Tv.setVector3("vSphericalL10", vv.l10), Tv.setVector3("vSphericalL11", vv.l11), Tv.setVector3("vSphericalL2_2", vv.l2_2), Tv.setVector3("vSphericalL2_1", vv.l2_1), Tv.setVector3("vSphericalL20", vv.l20), Tv.setVector3("vSphericalL21", vv.l21), Tv.setVector3("vSphericalL22", vv.l22)
                } else Tv.setFloat3("vSphericalX", zv.x.x, zv.x.y, zv.x.z), Tv.setFloat3("vSphericalY", zv.y.x, zv.y.y, zv.y.z), Tv.setFloat3("vSphericalZ", zv.z.x, zv.z.y, zv.z.z), Tv.setFloat3("vSphericalXX_ZZ", zv.xx.x - zv.zz.x, zv.xx.y - zv.zz.y, zv.xx.z - zv.zz.z), Tv.setFloat3("vSphericalYY_ZZ", zv.yy.x - zv.zz.x, zv.yy.y - zv.zz.y, zv.yy.z - zv.zz.z), Tv.setFloat3("vSphericalZZ", zv.zz.x, zv.zz.y, zv.zz.z), Tv.setFloat3("vSphericalXY", zv.xy.x, zv.xy.y, zv.xy.z), Tv.setFloat3("vSphericalYZ", zv.yz.x, zv.yz.y, zv.yz.z), Tv.setFloat3("vSphericalZX", zv.zx.x, zv.zx.y, zv.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === gv.getClassName()) {
                const vv = gv;
                Tv.setFloat("vSubsurfaceWeight", vv.subsurfaceWeight), vv.subsurfaceWeightTexture && (Tv.setTexture("subsurfaceWeightSampler", vv.subsurfaceWeightTexture), Tv.setMatrix("subsurfaceWeightMatrix", vv.subsurfaceWeightTexture.getTextureMatrix())), Tv.setFloat("vTransmissionWeight", vv.transmissionWeight), vv.transmissionWeightTexture && (Tv.setTexture("transmissionWeightSampler", vv.transmissionWeightTexture), Tv.setMatrix("transmissionWeightMatrix", vv.transmissionWeightTexture.getTextureMatrix())), Tv.setFloat("vTransmissionScatterAnisotropy", vv.transmissionScatterAnisotropy), Tv.setFloat("vSubsurfaceScatterAnisotropy", vv.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, lz.e)(Tv, gv, this._scene), zv.useBones && zv.computeBonesUsingShaders && zv.skeleton) {
              const vv = zv.skeleton;
              if (vv.isUsingTextureForMatrices && Tv.getUniformIndex("boneTextureInfo") > -1) {
                const Pv = vv.getTransformMatrixTexture(zv);
                Tv.setTexture("boneSampler", Pv), Tv.setFloat2("boneTextureInfo", vv._textureWidth, vv._textureHeight)
              } else Tv.setMatrices("mBones", zv.skeleton.getTransformMatrices(zv));
              (this._enableVelocity || this._enableVelocityLinear) && Tv.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[zv.uniqueId])
            }
            if ((0, Xv.v)(zv, Tv), zv.morphTargetManager && zv.morphTargetManager.isUsingTextureForTargets && zv.morphTargetManager._bind(Tv), (this._enableVelocity || this._enableVelocityLinear) && (Tv.setMatrix("previousWorld", this._previousTransformationMatrices[Pv.uniqueId].oT), Tv.setMatrix("previousViewProjection", this._previousTransformationMatrices[Pv.uniqueId].viewProjection)), this._enableObjectId) {
              let vv = zv.uniqueId;
              if (this.objectIdProvider) vv = (0, wz.g)(zv, this.objectIdProvider);
              else if (vv > 16777215) throw new Error(`Invalid geometry object ID ${vv} for mesh "${zv.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              Tv.setFloat("objectId", vv)
            }
            if (this._enableMeshBlendTag) {
              const vv = this.meshBlendTagProvider ? (0, wz.f)(zv, this.meshBlendTagProvider) : zv.meshBlendingTag;
              Tv.setInt("meshBlendTag", vv)
            }
            dv && zv.hasThinInstances && Tv.setMatrix("world", Nv), zv._processRendering(Pv, vv, Tv, gv.fillMode, pv, dv, ((vv, zv) => {
              vv || Tv.setMatrix("world", zv)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[Pv.uniqueId].oT = Nv.clone(), this._previousTransformationMatrices[Pv.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), zv.skeleton && this._copyBonesTransformationMatrices(zv.skeleton.getTransformMatrices(zv), this._previousBonesTransformationMatrices[Pv.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (zv, Pv, hv) => {
          if ((hv || 0 === Pv) && zv.sF)
            for (let Sv = 0; Sv < zv.sF.length; ++Sv) {
              const Pv = zv.sF[Sv],
                hv = Pv.na(),
                ev = Pv.getRenderingMesh();
              if (!hv) continue;
              const gv = ev._getInstancesRenderList(Pv._id, !!Pv.getReplacementMesh()),
                pv = vv.getCaps().instancedArrays && (null !== gv.visibleInstances[Pv._id] || ev.hasThinInstances);
              if (!this.isReady(Pv, pv)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (zv, Pv, hv, Sv) => {
          let ev;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.ma().bindAttachments(this._attachmentsFromPrePass)
          }
          if (Sv.length) {
            for (vv.setColorWrite(!1), ev = 0; ev < Sv.length; ev++) iv(Sv.data[ev]);
            vv.setColorWrite(!0)
          }
          for (ev = 0; ev < zv.length; ev++) iv(zv.data[ev]);
          for (vv.setDepthWrite(!1), ev = 0; ev < Pv.length; ev++) iv(Pv.data[ev]);
          if (this.renderTransparentMeshes)
            for (ev = 0; ev < hv.length; ev++) iv(hv.data[ev]);
          vv.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const vv = this._scene.ma();
        return {
          width: Math.max(1, Math.floor(vv.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(vv.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(vv, zv) {
        for (let Pv = 0; Pv < vv.length; Pv++) zv[Pv] = vv[Pv];
        return zv
      }
    }
    Lz.ForceGLSL = !1, Lz.DEPTH_TEXTURE_TYPE = 0, Lz.NORMAL_TEXTURE_TYPE = 1, Lz.POSITION_TEXTURE_TYPE = 2, Lz.VELOCITY_TEXTURE_TYPE = 3, Lz.REFLECTIVITY_TEXTURE_TYPE = 4, Lz.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, Lz.VELOCITY_LINEAR_TEXTURE_TYPE = 6, Lz.IRRADIANCE_TEXTURE_TYPE = 7, Lz.OBJECT_ID_TEXTURE_TYPE = 8, Lz.MESH_BLEND_TAG_TEXTURE_TYPE = 9, Lz._SceneComponentInitialization = vv => {
      throw (0, iz.m)("GeometryBufferRendererSceneComponent")
    };
    var Hz = Pv(36631);
    const Mz = {
      effect: null,
      subMesh: null
    };

    function yz(vv) {
      if ("number" === typeof vv) return 1;
      if (vv instanceof Zv.j) return 2;
      if (vv instanceof Zv.l || vv instanceof Jv.b) return 3;
      if (vv instanceof Zv.m || vv instanceof Jv.e) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class Bz {
      populateVectorFromLinkedProperties(vv) {
        const zv = yz(vv);
        for (const Pv in this.linkedProperties) {
          const vv = this.linkedProperties[Pv],
            hv = vv.numComponents;
          if (zv < hv || vv.targetUniformComponentOffset > zv - hv) return void(1 == hv ? Dv.d.Error(`Float property ${vv.name} has an offset that is too large.`) : Dv.d.Error(`Vector${hv} property ${vv.name} won't fit in Vector${zv} or has an offset that is too large.`));
          "number" === typeof vv.value ? Bz._tmpArray[vv.targetUniformComponentOffset] = vv.value : vv.value.toArray(Bz._tmpArray, vv.targetUniformComponentOffset)
        }
        vv.Evv(Bz._tmpArray)
      }
      constructor(vv, zv) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = vv, this.numComponents = zv
      }
    }
    Bz._tmpArray = [0, 0, 0, 0];
    class Jz {
      constructor(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          ev = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = vv, this.targetUniformName = Pv, this.defaultValue = zv, this.value = zv, this.targetUniformComponentNum = hv, this.targetUniformComponentOffset = Sv, this.requiredDefine = ev
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : yz(this.defaultValue)
      }
    }
    class Ez {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(vv, zv, Pv) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = vv, this.samplerPrefix = zv, this.textureDefine = Pv
      }
    }
    class oz extends((0, sz.b)((0, az.b)(Lv.c))) {}
    class bz extends(function(vv) {
      return class extends vv {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(oz)) {}
    class rz extends((0, Ev.f)(bz)) {
      constructor(vv) {
        super(vv), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class kz extends((0, Cz.d)(bv.d)) {}
    let Xz = (() => {
        var vv, zv, hv, Sv, gv, pv, dv, Nv, lv, Tv, Wv, wv, av, sv, Cv, iv, cv, Gv, mv, jv, fv, Fv, Yv, Uv, Rv, xv, tv, Qv, Lv, Hv, Mv, yv, Ev, bv, uv, vz, zz, Pz, hz, Sz, ez, gz, pz, dz, Nz, az, sz, Cz, iz, cz, Gz, mz, jz, fz, nz, Oz, Dz, Kz, Vz, Uz, Rz, xz, tz, qz, Iz, Qz, Zz, Az, Hz, yz, oz, bz, Xz, uz, vP, zP, PP, hP, SP, eP, gP, pP, dP, NP, lP, TP, WP, wP, aP, sP, CP, iP, cP, GP, mP, jP, fP, FP, YP, nP, OP, DP, KP;
        let VP, UP, RP, xP, tP, qP, IP, QP, ZP, AP, LP, HP, MP, yP, BP, JP, EP, oP, bP, rP, kP, XP, uP, vh, zh, Ph, hh, Sh, eh, gh, ph, dh, Nh, lh, Th, Wh, wh, ah, sh, Ch, ih, ch, Gh, mh, jh, fh, Fh, Yh, nh, Oh, Dh, Kh, Vh, Uh, Rh, xh, th, qh, Ih, Qh, Zh, Ah, Lh, Hh, Mh, yh, Bh, Jh, Eh, oh, bh, rh, kh, Xh, uh, vS, zS, PS, hS, SS, eS, gS, pS, dS, NS, lS, TS, WS, wS, aS, sS, CS, iS, cS, GS, mS, jS, fS, FS, YS, nS, OS, DS, KS, VS, US = kz,
          RS = [],
          xS = [],
          tS = [],
          qS = [],
          IS = [],
          QS = [],
          ZS = [],
          AS = [],
          LS = [],
          HS = [],
          MS = [],
          yS = [],
          BS = [],
          JS = [],
          ES = [],
          oS = [],
          bS = [],
          rS = [],
          kS = [],
          XS = [],
          uS = [],
          ve = [],
          ze = [],
          Pe = [],
          he = [],
          Se = [],
          ee = [],
          ge = [],
          pe = [],
          de = [],
          Ne = [],
          le = [],
          Te = [],
          We = [],
          we = [],
          ae = [],
          se = [],
          Ce = [],
          ie = [],
          ce = [],
          Ge = [],
          me = [],
          je = [],
          fe = [],
          Fe = [],
          Ye = [],
          ne = [],
          Oe = [],
          De = [],
          Ke = [],
          Ve = [],
          Ue = [],
          Re = [],
          xe = [],
          te = [],
          qe = [],
          Ie = [],
          Qe = [],
          Ze = [],
          Ae = [],
          Le = [],
          He = [],
          Me = [],
          ye = [],
          Be = [],
          Je = [],
          Ee = [],
          oe = [],
          be = [],
          re = [],
          ke = [],
          Xe = [],
          ue = [],
          vg = [],
          zg = [],
          Pg = [],
          hg = [],
          Sg = [],
          eg = [],
          gg = [],
          pg = [],
          dg = [],
          Ng = [],
          lg = [],
          Tg = [],
          Wg = [],
          wg = [],
          ag = [],
          sg = [],
          Cg = [],
          ig = [],
          cg = [],
          Gg = [],
          mg = [],
          jg = [],
          fg = [],
          Fg = [],
          Yg = [],
          ng = [],
          Og = [],
          Dg = [],
          Kg = [],
          Vg = [],
          Ug = [],
          Rg = [],
          xg = [],
          tg = [],
          qg = [],
          Ig = [],
          Qg = [],
          Zg = [],
          Ag = [],
          Lg = [],
          Hg = [],
          Mg = [],
          yg = [],
          Bg = [],
          Jg = [],
          Eg = [],
          og = [],
          bg = [],
          rg = [],
          kg = [],
          Xg = [],
          ug = [],
          vp = [],
          zp = [],
          Pp = [],
          hp = [],
          Sp = [],
          ep = [],
          gp = [],
          pp = [],
          dp = [],
          Np = [],
          lp = [],
          Tp = [],
          Wp = [],
          wp = [],
          ap = [],
          sp = [],
          Cp = [],
          ip = [],
          cp = [],
          Gp = [],
          mp = [],
          jp = [],
          fp = [],
          Fp = [],
          Yp = [],
          np = [],
          Op = [],
          Dp = [],
          Kp = [],
          Vp = [],
          Up = [],
          Rp = [],
          xp = [],
          tp = [],
          qp = [],
          Ip = [],
          Qp = [],
          Zp = [],
          Ap = [],
          Lp = [],
          Hp = [],
          Mp = [],
          yp = [],
          Bp = [],
          Jp = [],
          Ep = [],
          op = [],
          bp = [],
          rp = [],
          kp = [],
          Xp = [],
          vd = [],
          zd = [],
          Pd = [],
          hd = [],
          Sd = [],
          ed = [],
          gd = [],
          pd = [],
          dd = [],
          Nd = [],
          ld = [],
          Td = [],
          Wd = [],
          wd = [],
          ad = [],
          sd = [],
          Cd = [],
          cd = [],
          Gd = [],
          md = [],
          jd = [],
          fd = [],
          Fd = [],
          Yd = [],
          nd = [],
          Od = [],
          Dd = [],
          Kd = [],
          Vd = [];
        return vv = class extends US {
          get baseWeight() {
            return (0, nv.c)(this, zv, "f")
          }
          set baseWeight(vv) {
            (0, nv.d)(this, zv, vv, "f")
          }
          get baseWeightTexture() {
            return (0, nv.c)(this, hv, "f")
          }
          set baseWeightTexture(vv) {
            (0, nv.d)(this, hv, vv, "f")
          }
          get baseColor() {
            return (0, nv.c)(this, Sv, "f")
          }
          set baseColor(vv) {
            (0, nv.d)(this, Sv, vv, "f")
          }
          get baseColorTexture() {
            return (0, nv.c)(this, gv, "f")
          }
          set baseColorTexture(vv) {
            (0, nv.d)(this, gv, vv, "f")
          }
          get baseDiffuseRoughness() {
            return (0, nv.c)(this, pv, "f")
          }
          set baseDiffuseRoughness(vv) {
            (0, nv.d)(this, pv, vv, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, nv.c)(this, dv, "f")
          }
          set baseDiffuseRoughnessTexture(vv) {
            (0, nv.d)(this, dv, vv, "f")
          }
          get baseMetalness() {
            return (0, nv.c)(this, Nv, "f")
          }
          set baseMetalness(vv) {
            (0, nv.d)(this, Nv, vv, "f")
          }
          get baseMetalnessTexture() {
            return (0, nv.c)(this, lv, "f")
          }
          set baseMetalnessTexture(vv) {
            (0, nv.d)(this, lv, vv, "f")
          }
          get specularWeight() {
            return (0, nv.c)(this, Tv, "f")
          }
          set specularWeight(vv) {
            (0, nv.d)(this, Tv, vv, "f")
          }
          get specularWeightTexture() {
            return (0, nv.c)(this, Wv, "f")
          }
          set specularWeightTexture(vv) {
            (0, nv.d)(this, Wv, vv, "f")
          }
          get specularColor() {
            return (0, nv.c)(this, wv, "f")
          }
          set specularColor(vv) {
            (0, nv.d)(this, wv, vv, "f")
          }
          get specularColorTexture() {
            return (0, nv.c)(this, av, "f")
          }
          set specularColorTexture(vv) {
            (0, nv.d)(this, av, vv, "f")
          }
          get specularRoughness() {
            return (0, nv.c)(this, sv, "f")
          }
          set specularRoughness(vv) {
            (0, nv.d)(this, sv, vv, "f")
          }
          get specularRoughnessTexture() {
            return (0, nv.c)(this, Cv, "f")
          }
          set specularRoughnessTexture(vv) {
            (0, nv.d)(this, Cv, vv, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, nv.c)(this, iv, "f")
          }
          set specularRoughnessAnisotropy(vv) {
            (0, nv.d)(this, iv, vv, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, nv.c)(this, cv, "f")
          }
          set specularRoughnessAnisotropyTexture(vv) {
            (0, nv.d)(this, cv, vv, "f")
          }
          get specularIor() {
            return (0, nv.c)(this, Gv, "f")
          }
          set specularIor(vv) {
            (0, nv.d)(this, Gv, vv, "f")
          }
          get transmissionWeight() {
            return (0, nv.c)(this, mv, "f")
          }
          set transmissionWeight(vv) {
            (0, nv.d)(this, mv, vv, "f")
          }
          get transmissionWeightTexture() {
            return (0, nv.c)(this, jv, "f")
          }
          set transmissionWeightTexture(vv) {
            (0, nv.d)(this, jv, vv, "f")
          }
          get transmissionColor() {
            return (0, nv.c)(this, fv, "f")
          }
          set transmissionColor(vv) {
            (0, nv.d)(this, fv, vv, "f")
          }
          get transmissionColorTexture() {
            return (0, nv.c)(this, Fv, "f")
          }
          set transmissionColorTexture(vv) {
            (0, nv.d)(this, Fv, vv, "f")
          }
          get transmissionDepth() {
            return (0, nv.c)(this, Yv, "f")
          }
          set transmissionDepth(vv) {
            (0, nv.d)(this, Yv, vv, "f")
          }
          get transmissionDepthTexture() {
            return (0, nv.c)(this, Uv, "f")
          }
          set transmissionDepthTexture(vv) {
            (0, nv.d)(this, Uv, vv, "f")
          }
          get transmissionScatter() {
            return (0, nv.c)(this, Rv, "f")
          }
          set transmissionScatter(vv) {
            (0, nv.d)(this, Rv, vv, "f")
          }
          get transmissionScatterTexture() {
            return (0, nv.c)(this, xv, "f")
          }
          set transmissionScatterTexture(vv) {
            (0, nv.d)(this, xv, vv, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, nv.c)(this, tv, "f")
          }
          set transmissionScatterAnisotropy(vv) {
            (0, nv.d)(this, tv, vv, "f")
          }
          get transmissionDispersionScale() {
            return (0, nv.c)(this, Qv, "f")
          }
          set transmissionDispersionScale(vv) {
            (0, nv.d)(this, Qv, vv, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, nv.c)(this, Lv, "f")
          }
          set transmissionDispersionScaleTexture(vv) {
            (0, nv.d)(this, Lv, vv, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, nv.c)(this, Hv, "f")
          }
          set transmissionDispersionAbbeNumber(vv) {
            (0, nv.d)(this, Hv, vv, "f")
          }
          get subsurfaceWeight() {
            return (0, nv.c)(this, Mv, "f")
          }
          set subsurfaceWeight(vv) {
            (0, nv.d)(this, Mv, vv, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, nv.c)(this, yv, "f")
          }
          set subsurfaceWeightTexture(vv) {
            (0, nv.d)(this, yv, vv, "f")
          }
          get subsurfaceColor() {
            return (0, nv.c)(this, Ev, "f")
          }
          set subsurfaceColor(vv) {
            (0, nv.d)(this, Ev, vv, "f")
          }
          get subsurfaceColorTexture() {
            return (0, nv.c)(this, bv, "f")
          }
          set subsurfaceColorTexture(vv) {
            (0, nv.d)(this, bv, vv, "f")
          }
          get subsurfaceRadius() {
            return (0, nv.c)(this, uv, "f")
          }
          set subsurfaceRadius(vv) {
            (0, nv.d)(this, uv, vv, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, nv.c)(this, vz, "f")
          }
          set subsurfaceRadiusScale(vv) {
            (0, nv.d)(this, vz, vv, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, nv.c)(this, zz, "f")
          }
          set subsurfaceRadiusScaleTexture(vv) {
            (0, nv.d)(this, zz, vv, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, nv.c)(this, Pz, "f")
          }
          set subsurfaceScatterAnisotropy(vv) {
            (0, nv.d)(this, Pz, vv, "f")
          }
          get coatWeight() {
            return (0, nv.c)(this, hz, "f")
          }
          set coatWeight(vv) {
            (0, nv.d)(this, hz, vv, "f")
          }
          get coatWeightTexture() {
            return (0, nv.c)(this, Sz, "f")
          }
          set coatWeightTexture(vv) {
            (0, nv.d)(this, Sz, vv, "f")
          }
          get coatColor() {
            return (0, nv.c)(this, ez, "f")
          }
          set coatColor(vv) {
            (0, nv.d)(this, ez, vv, "f")
          }
          get coatColorTexture() {
            return (0, nv.c)(this, gz, "f")
          }
          set coatColorTexture(vv) {
            (0, nv.d)(this, gz, vv, "f")
          }
          get coatRoughness() {
            return (0, nv.c)(this, pz, "f")
          }
          set coatRoughness(vv) {
            (0, nv.d)(this, pz, vv, "f")
          }
          get coatRoughnessTexture() {
            return (0, nv.c)(this, dz, "f")
          }
          set coatRoughnessTexture(vv) {
            (0, nv.d)(this, dz, vv, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, nv.c)(this, Nz, "f")
          }
          set coatRoughnessAnisotropy(vv) {
            (0, nv.d)(this, Nz, vv, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, nv.c)(this, az, "f")
          }
          set coatRoughnessAnisotropyTexture(vv) {
            (0, nv.d)(this, az, vv, "f")
          }
          get coatIor() {
            return (0, nv.c)(this, sz, "f")
          }
          set coatIor(vv) {
            (0, nv.d)(this, sz, vv, "f")
          }
          get coatDarkening() {
            return (0, nv.c)(this, Cz, "f")
          }
          set coatDarkening(vv) {
            (0, nv.d)(this, Cz, vv, "f")
          }
          get coatDarkeningTexture() {
            return (0, nv.c)(this, iz, "f")
          }
          set coatDarkeningTexture(vv) {
            (0, nv.d)(this, iz, vv, "f")
          }
          get fuzzWeight() {
            return (0, nv.c)(this, cz, "f")
          }
          set fuzzWeight(vv) {
            (0, nv.d)(this, cz, vv, "f")
          }
          get fuzzWeightTexture() {
            return (0, nv.c)(this, Gz, "f")
          }
          set fuzzWeightTexture(vv) {
            (0, nv.d)(this, Gz, vv, "f")
          }
          get fuzzColor() {
            return (0, nv.c)(this, mz, "f")
          }
          set fuzzColor(vv) {
            (0, nv.d)(this, mz, vv, "f")
          }
          get fuzzColorTexture() {
            return (0, nv.c)(this, jz, "f")
          }
          set fuzzColorTexture(vv) {
            (0, nv.d)(this, jz, vv, "f")
          }
          get fuzzRoughness() {
            return (0, nv.c)(this, fz, "f")
          }
          set fuzzRoughness(vv) {
            (0, nv.d)(this, fz, vv, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, nv.c)(this, nz, "f")
          }
          set fuzzRoughnessTexture(vv) {
            (0, nv.d)(this, nz, vv, "f")
          }
          get geometryThinWalled() {
            return (0, nv.c)(this, Oz, "f")
          }
          set geometryThinWalled(vv) {
            (0, nv.d)(this, Oz, vv, "f")
          }
          get geometryNormalTexture() {
            return (0, nv.c)(this, Dz, "f")
          }
          set geometryNormalTexture(vv) {
            (0, nv.d)(this, Dz, vv, "f")
          }
          get geometryTangent() {
            return (0, nv.c)(this, Kz, "f")
          }
          set geometryTangent(vv) {
            (0, nv.d)(this, Kz, vv, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(vv) {
            this.geometryTangent = new Zv.j(Math.cos(vv), Math.sin(vv))
          }
          get geometryTangentTexture() {
            return (0, nv.c)(this, Vz, "f")
          }
          set geometryTangentTexture(vv) {
            (0, nv.d)(this, Vz, vv, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, nv.c)(this, Uz, "f")
          }
          set geometryCoatNormalTexture(vv) {
            (0, nv.d)(this, Uz, vv, "f")
          }
          get geometryCoatTangent() {
            return (0, nv.c)(this, Rz, "f")
          }
          set geometryCoatTangent(vv) {
            (0, nv.d)(this, Rz, vv, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(vv) {
            this.geometryCoatTangent = new Zv.j(Math.cos(vv), Math.sin(vv))
          }
          get geometryCoatTangentTexture() {
            return (0, nv.c)(this, xz, "f")
          }
          set geometryCoatTangentTexture(vv) {
            (0, nv.d)(this, xz, vv, "f")
          }
          get geometryOpacity() {
            return (0, nv.c)(this, tz, "f")
          }
          set geometryOpacity(vv) {
            (0, nv.d)(this, tz, vv, "f")
          }
          get geometryOpacityTexture() {
            return (0, nv.c)(this, qz, "f")
          }
          set geometryOpacityTexture(vv) {
            (0, nv.d)(this, qz, vv, "f")
          }
          get geometryThickness() {
            return (0, nv.c)(this, Iz, "f")
          }
          set geometryThickness(vv) {
            (0, nv.d)(this, Iz, vv, "f")
          }
          get geometryThicknessTexture() {
            return (0, nv.c)(this, Qz, "f")
          }
          set geometryThicknessTexture(vv) {
            (0, nv.d)(this, Qz, vv, "f")
          }
          get emissionLuminance() {
            return (0, nv.c)(this, Zz, "f")
          }
          set emissionLuminance(vv) {
            (0, nv.d)(this, Zz, vv, "f")
          }
          get emissionColor() {
            return (0, nv.c)(this, Az, "f")
          }
          set emissionColor(vv) {
            (0, nv.d)(this, Az, vv, "f")
          }
          get emissionColorTexture() {
            return (0, nv.c)(this, Hz, "f")
          }
          set emissionColorTexture(vv) {
            (0, nv.d)(this, Hz, vv, "f")
          }
          get thinFilmWeight() {
            return (0, nv.c)(this, yz, "f")
          }
          set thinFilmWeight(vv) {
            (0, nv.d)(this, yz, vv, "f")
          }
          get thinFilmWeightTexture() {
            return (0, nv.c)(this, oz, "f")
          }
          set thinFilmWeightTexture(vv) {
            (0, nv.d)(this, oz, vv, "f")
          }
          get thinFilmThickness() {
            return (0, nv.c)(this, bz, "f")
          }
          set thinFilmThickness(vv) {
            (0, nv.d)(this, bz, vv, "f")
          }
          get thinFilmThicknessMin() {
            return (0, nv.c)(this, Xz, "f")
          }
          set thinFilmThicknessMin(vv) {
            (0, nv.d)(this, Xz, vv, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, nv.c)(this, uz, "f")
          }
          set thinFilmThicknessTexture(vv) {
            (0, nv.d)(this, uz, vv, "f")
          }
          get thinFilmIor() {
            return (0, nv.c)(this, vP, "f")
          }
          set thinFilmIor(vv) {
            (0, nv.d)(this, vP, vv, "f")
          }
          get ambientOcclusionTexture() {
            return (0, nv.c)(this, zP, "f")
          }
          set ambientOcclusionTexture(vv) {
            (0, nv.d)(this, zP, vv, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(vv) {
            this._sssQuality !== vv && (this._sssQuality = vv, this.xvv(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(vv) {
            this._sssIrradianceTexture !== vv && (this._sssIrradianceTexture = vv, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(vv) {
            this._sssDepthTexture !== vv && (this._sssDepthTexture = vv, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, nv.c)(this, PP, "f")
          }
          set directIntensity(vv) {
            (0, nv.d)(this, PP, vv, "f")
          }
          get environmentIntensity() {
            return (0, nv.c)(this, hP, "f")
          }
          set environmentIntensity(vv) {
            (0, nv.d)(this, hP, vv, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, nv.c)(this, SP, "f")
          }
          set useSpecularWeightFromTextureAlpha(vv) {
            (0, nv.d)(this, SP, vv, "f")
          }
          get forceAlphaTest() {
            return (0, nv.c)(this, eP, "f")
          }
          set forceAlphaTest(vv) {
            (0, nv.d)(this, eP, vv, "f")
          }
          get alphaCutOff() {
            return (0, nv.c)(this, gP, "f")
          }
          set alphaCutOff(vv) {
            (0, nv.d)(this, gP, vv, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, nv.c)(this, pP, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(vv) {
            (0, nv.d)(this, pP, vv, "f")
          }
          get useAmbientInGrayScale() {
            return (0, nv.c)(this, dP, "f")
          }
          set useAmbientInGrayScale(vv) {
            (0, nv.d)(this, dP, vv, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(Jv.b.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === ev.b.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(vv) {
            vv !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = vv ? ev.b.LIGHTFALLOFF_PHYSICAL : ev.b.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === ev.b.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(vv) {
            vv !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = vv ? ev.b.LIGHTFALLOFF_GLTF : ev.b.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, nv.c)(this, NP, "f")
          }
          set useObjectSpaceNormalMap(vv) {
            (0, nv.d)(this, NP, vv, "f")
          }
          get useParallax() {
            return (0, nv.c)(this, lP, "f")
          }
          set useParallax(vv) {
            (0, nv.d)(this, lP, vv, "f")
          }
          get useParallaxOcclusion() {
            return (0, nv.c)(this, TP, "f")
          }
          set useParallaxOcclusion(vv) {
            (0, nv.d)(this, TP, vv, "f")
          }
          get parallaxScaleBias() {
            return (0, nv.c)(this, WP, "f")
          }
          set parallaxScaleBias(vv) {
            (0, nv.d)(this, WP, vv, "f")
          }
          get disableLighting() {
            return (0, nv.c)(this, wP, "f")
          }
          set disableLighting(vv) {
            (0, nv.d)(this, wP, vv, "f")
          }
          get forceIrradianceInFragment() {
            return (0, nv.c)(this, aP, "f")
          }
          set forceIrradianceInFragment(vv) {
            (0, nv.d)(this, aP, vv, "f")
          }
          get maxSimultaneousLights() {
            return (0, nv.c)(this, sP, "f")
          }
          set maxSimultaneousLights(vv) {
            (0, nv.d)(this, sP, vv, "f")
          }
          get invertNormalMapX() {
            return (0, nv.c)(this, CP, "f")
          }
          set invertNormalMapX(vv) {
            (0, nv.d)(this, CP, vv, "f")
          }
          get invertNormalMapY() {
            return (0, nv.c)(this, iP, "f")
          }
          set invertNormalMapY(vv) {
            (0, nv.d)(this, iP, vv, "f")
          }
          get twoSidedLighting() {
            return (0, nv.c)(this, cP, "f")
          }
          set twoSidedLighting(vv) {
            (0, nv.d)(this, cP, vv, "f")
          }
          get useAlphaFresnel() {
            return (0, nv.c)(this, GP, "f")
          }
          set useAlphaFresnel(vv) {
            (0, nv.d)(this, GP, vv, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, nv.c)(this, mP, "f")
          }
          set useLinearAlphaFresnel(vv) {
            (0, nv.d)(this, mP, vv, "f")
          }
          get environmentBRDFTexture() {
            return (0, nv.c)(this, jP, "f")
          }
          set environmentBRDFTexture(vv) {
            (0, nv.d)(this, jP, vv, "f")
          }
          get forceNormalForward() {
            return (0, nv.c)(this, fP, "f")
          }
          set forceNormalForward(vv) {
            (0, nv.d)(this, fP, vv, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, nv.c)(this, FP, "f")
          }
          set enableSpecularAntiAliasing(vv) {
            (0, nv.d)(this, FP, vv, "f")
          }
          get useHorizonOcclusion() {
            return (0, nv.c)(this, YP, "f")
          }
          set useHorizonOcclusion(vv) {
            (0, nv.d)(this, YP, vv, "f")
          }
          get useRadianceOcclusion() {
            return (0, nv.c)(this, nP, "f")
          }
          set useRadianceOcclusion(vv) {
            (0, nv.d)(this, nP, vv, "f")
          }
          get unlit() {
            return (0, nv.c)(this, OP, "f")
          }
          set unlit(vv) {
            (0, nv.d)(this, OP, vv, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, nv.c)(this, DP, "f")
          }
          set applyDecalMapAfterDetailMap(vv) {
            (0, nv.d)(this, DP, vv, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(vv) {
            this._backgroundRefractionTexture = vv, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(vv) {
            this._refractionHighQualityBlur !== vv && (this._refractionHighQualityBlur = vv, this.xvv(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(vv) {
            this._realTimeFiltering = vv, this.xvv(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(vv) {
            this._realTimeFilteringQuality = vv, this.xvv(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(vv) {
            this._fuzzSampleNumber = vv, this.xvv(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, nv.c)(this, KP, "f")
          }
          set debugMode(vv) {
            (0, nv.d)(this, KP, vv, "f")
          }
          constructor(Pv, Ov) {
            super(Pv, Ov, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || vv.ForceGLSL), zv.set(this, ((0, nv.f)(this, RS), (0, nv.f)(this, xS, void 0))), this._baseWeight = ((0, nv.f)(this, tS), new Jz("base_weight", 1, "vBaseWeight", 1)), hv.set(this, (0, nv.f)(this, qS, void 0)), this._baseWeightTexture = ((0, nv.f)(this, IS), new Ez("base_weight", "baseWeight", "BASE_WEIGHT")), Sv.set(this, (0, nv.f)(this, QS, void 0)), this._baseColor = ((0, nv.f)(this, ZS), new Jz("base_color", Jv.b.White(), "vBaseColor", 4)), gv.set(this, (0, nv.f)(this, AS, void 0)), this._baseColorTexture = ((0, nv.f)(this, LS), new Ez("base_color", "baseColor", "BASE_COLOR")), pv.set(this, (0, nv.f)(this, HS, void 0)), this._baseDiffuseRoughness = ((0, nv.f)(this, MS), new Jz("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), dv.set(this, (0, nv.f)(this, yS, void 0)), this._baseDiffuseRoughnessTexture = ((0, nv.f)(this, BS), new Ez("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), Nv.set(this, (0, nv.f)(this, JS, void 0)), this._baseMetalness = ((0, nv.f)(this, ES), new Jz("base_metalness", 0, "vReflectanceInfo", 4, 0)), lv.set(this, (0, nv.f)(this, oS, void 0)), this._baseMetalnessTexture = ((0, nv.f)(this, bS), new Ez("base_metalness", "baseMetalness", "BASE_METALNESS")), Tv.set(this, (0, nv.f)(this, rS, void 0)), this._specularWeight = ((0, nv.f)(this, kS), new Jz("specular_weight", 1, "vReflectanceInfo", 4, 3)), Wv.set(this, (0, nv.f)(this, XS, void 0)), this._specularWeightTexture = ((0, nv.f)(this, uS), new Ez("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), wv.set(this, (0, nv.f)(this, ve, void 0)), this._specularColor = ((0, nv.f)(this, ze), new Jz("specular_color", Jv.b.White(), "vSpecularColor", 4)), av.set(this, (0, nv.f)(this, Pe, void 0)), this._specularColorTexture = ((0, nv.f)(this, he), new Ez("specular_color", "specularColor", "SPECULAR_COLOR")), sv.set(this, (0, nv.f)(this, Se, void 0)), this._specularRoughness = ((0, nv.f)(this, ee), new Jz("specular_roughness", .3, "vReflectanceInfo", 4, 1)), Cv.set(this, (0, nv.f)(this, ge, void 0)), this._specularRoughnessTexture = ((0, nv.f)(this, pe), new Ez("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), iv.set(this, (0, nv.f)(this, de, void 0)), this._specularRoughnessAnisotropy = ((0, nv.f)(this, Ne), new Jz("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), cv.set(this, (0, nv.f)(this, le, void 0)), this._specularRoughnessAnisotropyTexture = ((0, nv.f)(this, Te), new Ez("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), Gv.set(this, (0, nv.f)(this, We, void 0)), this._specularIor = ((0, nv.f)(this, we), new Jz("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), mv.set(this, (0, nv.f)(this, ae, void 0)), this._transmissionWeight = ((0, nv.f)(this, se), new Jz("transmission_weight", 0, "vTransmissionWeight", 1)), jv.set(this, (0, nv.f)(this, Ce, void 0)), this._transmissionWeightTexture = ((0, nv.f)(this, ie), new Ez("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), fv.set(this, (0, nv.f)(this, ce, void 0)), this._transmissionColor = ((0, nv.f)(this, Ge), new Jz("transmission_color", Jv.b.White(), "vTransmissionColor", 3, 0)), Fv.set(this, (0, nv.f)(this, me, void 0)), this._transmissionColorTexture = ((0, nv.f)(this, je), new Ez("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), Yv.set(this, (0, nv.f)(this, fe, void 0)), this._transmissionDepth = ((0, nv.f)(this, Fe), new Jz("transmission_depth", 0, "vTransmissionDepth", 1, 0)), Uv.set(this, (0, nv.f)(this, Ye, void 0)), this._transmissionDepthTexture = ((0, nv.f)(this, ne), new Ez("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), Rv.set(this, (0, nv.f)(this, Oe, void 0)), this._transmissionScatter = ((0, nv.f)(this, De), new Jz("transmission_scatter", Jv.b.Black(), "vTransmissionScatter", 3, 0)), xv.set(this, (0, nv.f)(this, Ke, void 0)), this._transmissionScatterTexture = ((0, nv.f)(this, Ve), new Ez("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), tv.set(this, (0, nv.f)(this, Ue, void 0)), this._transmissionScatterAnisotropy = ((0, nv.f)(this, Re), new Jz("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), Qv.set(this, (0, nv.f)(this, xe, void 0)), this._transmissionDispersionScale = ((0, nv.f)(this, te), new Jz("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), Lv.set(this, (0, nv.f)(this, qe, void 0)), this._transmissionDispersionScaleTexture = ((0, nv.f)(this, Ie), new Ez("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), Hv.set(this, (0, nv.f)(this, Qe, void 0)), this._transmissionDispersionAbbeNumber = ((0, nv.f)(this, Ze), new Jz("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), Mv.set(this, (0, nv.f)(this, Ae, void 0)), this._subsurfaceWeight = ((0, nv.f)(this, Le), new Jz("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), yv.set(this, (0, nv.f)(this, He, void 0)), this._subsurfaceWeightTexture = ((0, nv.f)(this, Me), new Ez("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), Ev.set(this, (0, nv.f)(this, ye, void 0)), this._subsurfaceColor = ((0, nv.f)(this, Be), new Jz("subsurface_color", new Jv.b(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), bv.set(this, (0, nv.f)(this, Je, void 0)), this._subsurfaceColorTexture = ((0, nv.f)(this, Ee), new Ez("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), uv.set(this, (0, nv.f)(this, oe, void 0)), this._subsurfaceRadius = ((0, nv.f)(this, be), new Jz("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), vz.set(this, (0, nv.f)(this, re, void 0)), this._subsurfaceRadiusScale = ((0, nv.f)(this, ke), new Jz("subsurface_radius_scale", new Jv.b(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), zz.set(this, (0, nv.f)(this, Xe, void 0)), this._subsurfaceRadiusScaleTexture = ((0, nv.f)(this, ue), new Ez("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), Pz.set(this, (0, nv.f)(this, vg, void 0)), this._subsurfaceScatterAnisotropy = ((0, nv.f)(this, zg), new Jz("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), hz.set(this, (0, nv.f)(this, Pg, void 0)), this._coatWeight = ((0, nv.f)(this, hg), new Jz("coat_weight", 0, "vCoatWeight", 1, 0)), Sz.set(this, (0, nv.f)(this, Sg, void 0)), this._coatWeightTexture = ((0, nv.f)(this, eg), new Ez("coat_weight", "coatWeight", "COAT_WEIGHT")), ez.set(this, (0, nv.f)(this, gg, void 0)), this._coatColor = ((0, nv.f)(this, pg), new Jz("coat_color", Jv.b.White(), "vCoatColor", 3, 0)), gz.set(this, (0, nv.f)(this, dg, void 0)), this._coatColorTexture = ((0, nv.f)(this, Ng), new Ez("coat_color", "coatColor", "COAT_COLOR")), pz.set(this, (0, nv.f)(this, lg, void 0)), this._coatRoughness = ((0, nv.f)(this, Tg), new Jz("coat_roughness", 0, "vCoatRoughness", 1, 0)), dz.set(this, (0, nv.f)(this, Wg, void 0)), this._coatRoughnessTexture = ((0, nv.f)(this, wg), new Ez("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), Nz.set(this, (0, nv.f)(this, ag, void 0)), this._coatRoughnessAnisotropy = ((0, nv.f)(this, sg), new Jz("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), az.set(this, (0, nv.f)(this, Cg, void 0)), this._coatRoughnessAnisotropyTexture = ((0, nv.f)(this, ig), new Ez("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), sz.set(this, (0, nv.f)(this, cg, void 0)), this._coatIor = ((0, nv.f)(this, Gg), new Jz("coat_ior", 1.5, "vCoatIor", 1, 0)), Cz.set(this, (0, nv.f)(this, mg, void 0)), this._coatDarkening = ((0, nv.f)(this, jg), new Jz("coat_darkening", 1, "vCoatDarkening", 1, 0)), iz.set(this, (0, nv.f)(this, fg, void 0)), this._coatDarkeningTexture = ((0, nv.f)(this, Fg), new Ez("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, cz.set(this, (0, nv.f)(this, Yg, void 0)), this._fuzzWeight = ((0, nv.f)(this, ng), new Jz("fuzz_weight", 0, "vFuzzWeight", 1, 0)), Gz.set(this, (0, nv.f)(this, Og, void 0)), this._fuzzWeightTexture = ((0, nv.f)(this, Dg), new Ez("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), mz.set(this, (0, nv.f)(this, Kg, void 0)), this._fuzzColor = ((0, nv.f)(this, Vg), new Jz("fuzz_color", Jv.b.White(), "vFuzzColor", 3, 0)), jz.set(this, (0, nv.f)(this, Ug, void 0)), this._fuzzColorTexture = ((0, nv.f)(this, Rg), new Ez("fuzz_color", "fuzzColor", "FUZZ_COLOR")), fz.set(this, (0, nv.f)(this, xg, void 0)), this._fuzzRoughness = ((0, nv.f)(this, tg), new Jz("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), nz.set(this, (0, nv.f)(this, qg, void 0)), this._fuzzRoughnessTexture = ((0, nv.f)(this, Ig), new Ez("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), Oz.set(this, (0, nv.f)(this, Qg, void 0)), this._geometryThinWalled = ((0, nv.f)(this, Zg), new Jz("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), Dz.set(this, (0, nv.f)(this, Ag, void 0)), this._geometryNormalTexture = ((0, nv.f)(this, Lg), new Ez("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), Kz.set(this, (0, nv.f)(this, Hg, void 0)), this._geometryTangent = ((0, nv.f)(this, Mg), new Jz("geometry_tangent", new Zv.j(1, 0), "vSpecularAnisotropy", 3, 0)), Vz.set(this, (0, nv.f)(this, yg, void 0)), this._geometryTangentTexture = ((0, nv.f)(this, Bg), new Ez("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), Uz.set(this, (0, nv.f)(this, Jg, void 0)), this._geometryCoatNormalTexture = ((0, nv.f)(this, Eg), new Ez("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), Rz.set(this, (0, nv.f)(this, og, void 0)), this._geometryCoatTangent = ((0, nv.f)(this, bg), new Jz("geometry_coat_tangent", new Zv.j(1, 0), "vGeometryCoatTangent", 2, 0)), xz.set(this, (0, nv.f)(this, rg, void 0)), this._geometryCoatTangentTexture = ((0, nv.f)(this, kg), new Ez("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), tz.set(this, (0, nv.f)(this, Xg, void 0)), this._geometryOpacity = ((0, nv.f)(this, ug), new Jz("geometry_opacity", 1, "vBaseColor", 4, 3)), qz.set(this, (0, nv.f)(this, vp, void 0)), this._geometryOpacityTexture = ((0, nv.f)(this, zp), new Ez("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), Iz.set(this, (0, nv.f)(this, Pp, void 0)), this._geometryThickness = ((0, nv.f)(this, hp), new Jz("geometry_thickness", 0, "vGeometryThickness", 1, 0)), Qz.set(this, (0, nv.f)(this, Sp, void 0)), this._geometryThicknessTexture = ((0, nv.f)(this, ep), new Ez("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), Zz.set(this, (0, nv.f)(this, gp, void 0)), this._emissionLuminance = ((0, nv.f)(this, pp), new Jz("emission_luminance", 1, "vLightingIntensity", 4, 1)), Az.set(this, (0, nv.f)(this, dp, void 0)), this._emissionColor = ((0, nv.f)(this, Np), new Jz("emission_color", Jv.b.Black(), "vEmissionColor", 3)), Hz.set(this, (0, nv.f)(this, lp, void 0)), this._emissionColorTexture = ((0, nv.f)(this, Tp), new Ez("emission_color", "emissionColor", "EMISSION_COLOR")), yz.set(this, (0, nv.f)(this, Wp, void 0)), this._thinFilmWeight = ((0, nv.f)(this, wp), new Jz("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), oz.set(this, (0, nv.f)(this, ap, void 0)), this._thinFilmWeightTexture = ((0, nv.f)(this, sp), new Ez("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), bz.set(this, (0, nv.f)(this, Cp, void 0)), this._thinFilmThickness = ((0, nv.f)(this, ip), new Jz("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), Xz.set(this, (0, nv.f)(this, cp, void 0)), this._thinFilmThicknessMin = ((0, nv.f)(this, Gp), new Jz("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), uz.set(this, (0, nv.f)(this, mp, void 0)), this._thinFilmThicknessTexture = ((0, nv.f)(this, jp), new Ez("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), vP.set(this, (0, nv.f)(this, fp, void 0)), this._thinFilmIor = ((0, nv.f)(this, Fp), new Jz("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), zP.set(this, (0, nv.f)(this, Yp, void 0)), this._ambientOcclusionTexture = ((0, nv.f)(this, np), new Ez("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = vv.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, PP.set(this, (0, nv.f)(this, Op, 1)), hP.set(this, ((0, nv.f)(this, Dp), (0, nv.f)(this, Kp, 1))), SP.set(this, ((0, nv.f)(this, Vp), (0, nv.f)(this, Up, !1))), eP.set(this, ((0, nv.f)(this, Rp), (0, nv.f)(this, xp, !1))), gP.set(this, ((0, nv.f)(this, tp), (0, nv.f)(this, qp, .4))), pP.set(this, ((0, nv.f)(this, Ip), (0, nv.f)(this, Qp, !1))), dP.set(this, ((0, nv.f)(this, Zp), (0, nv.f)(this, Ap, !1))), NP.set(this, ((0, nv.f)(this, Lp), (0, nv.f)(this, Hp, !1))), lP.set(this, ((0, nv.f)(this, Mp), (0, nv.f)(this, yp, !1))), TP.set(this, ((0, nv.f)(this, Bp), (0, nv.f)(this, Jp, !1))), WP.set(this, ((0, nv.f)(this, Ep), (0, nv.f)(this, op, .05))), wP.set(this, ((0, nv.f)(this, bp), (0, nv.f)(this, rp, !1))), aP.set(this, ((0, nv.f)(this, kp), (0, nv.f)(this, Xp, !1))), sP.set(this, ((0, nv.f)(this, vd), (0, nv.f)(this, zd, 4))), CP.set(this, ((0, nv.f)(this, Pd), (0, nv.f)(this, hd, !1))), iP.set(this, ((0, nv.f)(this, Sd), (0, nv.f)(this, ed, !1))), cP.set(this, ((0, nv.f)(this, gd), (0, nv.f)(this, pd, !1))), GP.set(this, ((0, nv.f)(this, dd), (0, nv.f)(this, Nd, !1))), mP.set(this, ((0, nv.f)(this, ld), (0, nv.f)(this, Td, !1))), jP.set(this, ((0, nv.f)(this, Wd), (0, nv.f)(this, wd, null))), fP.set(this, ((0, nv.f)(this, ad), (0, nv.f)(this, sd, !1))), FP.set(this, ((0, nv.f)(this, Cd), (0, nv.f)(this, cd, !1))), YP.set(this, ((0, nv.f)(this, Gd), (0, nv.f)(this, md, !0))), nP.set(this, ((0, nv.f)(this, jd), (0, nv.f)(this, fd, !0))), OP.set(this, ((0, nv.f)(this, Fd), (0, nv.f)(this, Yd, !1))), DP.set(this, ((0, nv.f)(this, nd), (0, nv.f)(this, Od, !1))), this._lightingInfos = ((0, nv.f)(this, Dd), new Zv.m(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = ev.b.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new Kv.g(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, KP.set(this, (0, nv.f)(this, Kd, 0)), this.debugLimit = ((0, nv.f)(this, Vd), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = ev.b.MATERIAL_OPAQUE, this.rD() && !this.rD()?.ma().isWebGPU && this.rD().ma().ka < 2 && Dv.d.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), vv._noiseTextures[this.rD().uniqueId] || (vv._noiseTextures[this.rD().uniqueId] = new Vv.e(Yz.h.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.rD(), !1, !0, 1), this.rD().uD.addOnce((() => {
              vv._noiseTextures[this.rD().uniqueId]?.dispose(), delete vv._noiseTextures[this.rD().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), rv.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), rv.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Iv(this.rD()), this._environmentFuzzBRDFTexture = qv(this.rD()), this.prePassConfiguration = new Bv.b, this._propertyList = {};
            for (const vv of Object.getOwnPropertyNames(this)) {
              const zv = this[vv];
              zv instanceof Jz && (this._propertyList[vv] = zv)
            }
            Object.keys(this._propertyList).forEach((vv => {
              const zv = this._propertyList[vv];
              let Pv = this._uniformsList[zv.targetUniformName];
              Pv ? Pv.numComponents !== zv.targetUniformComponentNum ? Dv.d.Error(`Uniform ${zv.targetUniformName} already exists of size ${Pv.numComponents}, but trying to set it to ${zv.targetUniformComponentNum}.`) : Pv.requiredDefine !== zv.requiredDefine && (Pv.requiredDefine = void 0) : (Pv = new Bz(zv.targetUniformName, zv.targetUniformComponentNum), Pv.requiredDefine = zv.requiredDefine, this._uniformsList[zv.targetUniformName] = Pv), "" === Pv.firstLinkedKey && (Pv.firstLinkedKey = zv.name), Pv.linkedProperties[zv.name] = zv
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const vv of Object.getOwnPropertyNames(this)) {
              const zv = this[vv];
              zv instanceof Ez && (this._samplersList[vv] = zv)
            }
            for (const vv in this._samplersList) {
              const zv = this._samplersList[vv].textureDefine;
              this._samplerDefines[zv] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[zv + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[zv + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(rv.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(rv.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(vv) {
            this._transparencyMode !== vv && (this._transparencyMode = vv, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== ev.b.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(vv) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(vv)
          }
          clone(zv) {
            let Pv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Sv = Fz.c.Clone((() => new vv(zv, this.rD())), this, {
              cloneTexturesOnlyOnce: Pv
            });
            return Sv.id = zv, Sv.name = zv, this.stencil.copyTo(Sv.stencil), this._clonePlugins(Sv, hv), Sv
          }
          serialize() {
            const vv = super.serialize();
            return vv.customType = "BABYLON.OpenPBRMaterial", vv
          }
          static Parse(zv, Pv, hv) {
            const Sv = Fz.c.Parse((() => new vv(zv.name, Pv)), zv, Pv, hv);
            return zv.stencil && Sv.stencil.parse(zv.stencil, Pv, hv), ev.b._ParsePlugins(zv, Sv, Pv, hv), Sv
          }
          forceCompilation(vv, zv, Pv) {
            const hv = {
              clipPlane: !1,
              useInstances: !1,
              ...Pv
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const Pv = new rz({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                Sv = this._prepareEffect(vv, vv, Pv, void 0, void 0, hv.useInstances, hv.clipPlane);
              this._onEffectCreatedObservable && (Mz.effect = Sv, Mz.subMesh = null, this._onEffectCreatedObservable.notifyObservers(Mz)), Sv.isReady() ? zv && zv(this) : Sv.onCompileObservable.add((() => {
                zv && zv(this)
              }))
            })()
          }
          isReadyForSubMesh(zv, Pv, hv) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Sv = Pv._drawWrapper;
            if (Sv.effect && this.isFrozen && Sv._wasPreviouslyReady && Sv._wasPreviouslyUsingInstances === hv) return !0;
            Pv.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), Pv.materialDefines = new rz({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const ev = Pv.materialDefines;
            if (this._isReadyForSubMesh(Pv)) return !0;
            const gv = this.rD(),
              pv = gv.ma();
            if (ev._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, gv.texturesEnabled)) {
              for (const vv in this._samplersList) {
                const zv = this._samplersList[vv];
                if (zv.value && !zv.value.isReadyOrNotBlocking()) return !1
              }
              const zv = this._getRadianceTexture();
              if (zv && rv.e.ReflectionTextureEnabled) {
                if (!zv.isReadyOrNotBlocking()) return !1;
                if (zv.irradianceTexture) {
                  if (!zv.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!zv.sphericalPolynomial && zv.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && rv.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && rv.e.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && rv.e.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (vv._noiseTextures[gv.uniqueId] && !vv._noiseTextures[gv.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = ev, this._eventInfo.subMesh = Pv, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (ev._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (ev.AREALIGHTUSED)
              for (let vv = 0; vv < zv.lightSources.length; vv++)
                if (!zv.lightSources[vv]._isReady()) return !1;
            if (pv.getCaps().standardDerivatives || zv.isVerticesDataPresent(Av.k.NormalKind) || (zv.createNormals(!0), Dv.d.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + zv.name)), !(0, Xv.d)(gv, zv, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const dv = Pv.effect,
              Nv = ev._areLightsDisposed,
              lv = this._prepareEffect(zv, Pv.getRenderingMesh(), ev, this.onCompiled, this.onError, hv, null);
            let Tv = !1;
            if (lv)
              if (this._onEffectCreatedObservable && (Mz.effect = lv, Mz.subMesh = Pv, this._onEffectCreatedObservable.notifyObservers(Mz)), this.allowShaderHotSwapping && dv && !lv.isReady()) {
                if (ev.markAsUnprocessed(), Tv = this.isFrozen, Nv) return ev._areLightsDisposed = !0, !1
              } else gv.resetCachedMaterial(), Pv.setEffect(lv, ev, this._materialContext);
            return !(!Pv.effect || !Pv.effect.isReady()) && (ev._renderId = gv.getRenderId(), Sv._wasPreviouslyReady = !Tv, Sv._wasPreviouslyUsingInstances = !!hv, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const vv = this._uniformBuffer;
            vv.addUniform("vTangentSpaceParams", 2), vv.addUniform("vLightingIntensity", 4), vv.addUniform("pointSize", 1), vv.addUniform("vDebugMode", 2), vv.addUniform("renderTargetSize", 2), vv.addUniform("cameraInfo", 4), vv.addUniform("vTextureRepetitionHexTilingParams", 4), vv.addUniform("backgroundRefractionMatrix", 16), vv.addUniform("vBackgroundRefractionInfos", 3), (0, Xv.jb)(vv, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((zv => {
              vv.addUniform(zv.name, zv.numComponents)
            })), Object.values(this._samplersList).forEach((zv => {
              vv.addUniform(zv.samplerInfoName, 2), vv.addUniform(zv.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(vv, zv, Pv, hv) {
            if (0 === this.geometryThickness) vv.updateFloat("vGeometryThickness", 0);
            else {
              hv.getRenderingMesh().getWorldMatrix().decompose(Zv.i.fa[0]);
              const zv = Math.max(Math.abs(Zv.i.fa[0].x), Math.abs(Zv.i.fa[0].y), Math.abs(Zv.i.fa[0].z));
              vv.updateFloat("vGeometryThickness", this.geometryThickness * zv)
            }
          }
          bindForSubMesh(zv, Pv, hv) {
            const Sv = this.rD(),
              ev = hv.materialDefines;
            if (!ev) return;
            const gv = hv.effect;
            if (!gv) return;
            this._activeEffect = gv, Pv.getMeshUniformBuffer().bindToEffect(gv, "Mesh"), Pv.transferToEffect(zv);
            const pv = Sv.ma();
            this._uniformBuffer.bindToEffect(gv, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Sv, Pv, zv, this.isFrozen), wz.d.Bind(pv.currentRenderPassId, this._activeEffect, Pv, zv, this);
            const dv = Sv.activeCamera;
            dv ? this._uniformBuffer.updateFloat4("cameraInfo", dv.minZ, dv.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Nv = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Nv[0], Nv[1], Nv[2], Nv[3]), this._eventInfo.subMesh = hv, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), ev.OBJECTSPACE_NORMALMAP && (zv.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const lv = this._mustRebind(Sv, gv, hv, Pv.visibility),
              Tv = pv._features.needToAlwaysBindUniformBuffers;
            (0, Xv.e)(Pv, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Tz.d)(this._activeEffect, this._vertexPullingMetadata);
            const Wv = this._uniformBuffer;
            if (lv) {
              this.bindViewProjection(gv);
              const zv = this._getRadianceTexture();
              if (!Wv.useUbo || !this.isFrozen || !Wv.isSync || hv._drawWrapper._forceRebindOnNextCall) {
                if (Sv.texturesEnabled) {
                  for (const vv in this._samplersList) {
                    const zv = this._samplersList[vv];
                    zv.value && (Wv.updateFloat2(zv.samplerInfoName, zv.value.coordinatesIndex, zv.value.level), (0, Xv.A)(zv.value, Wv, zv.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (Sv._mirroredCameraPosition ? Wv.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Wv.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, Xv.j)(Sv, ev, Wv, Jv.b.White(), zv, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && Wv.updateFloat("pointSize", this.pointSize);
                const vv = this._uniformsArray;
                for (let zv = 0, Pv = vv.length; zv < Pv; zv++) {
                  const Pv = vv[zv];
                  (void 0 === Pv.requiredDefine || ev[Pv.requiredDefine]) && (4 === Pv.numComponents ? (Pv.populateVectorFromLinkedProperties(Zv.i.Vector4[0]), Wv.updateVector4(Pv.name, Zv.i.Vector4[0])) : 3 === Pv.numComponents ? (Pv.populateVectorFromLinkedProperties(Zv.i.fa[0]), Wv.updateVector3(Pv.name, Zv.i.fa[0])) : 2 === Pv.numComponents ? (Pv.populateVectorFromLinkedProperties(Zv.i.Vector2[0]), Wv.updateFloat2(Pv.name, Zv.i.Vector2[0].x, Zv.i.Vector2[0].y)) : 1 === Pv.numComponents && Wv.updateFloat(Pv.name, Pv.linkedProperties[Pv.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * Sv.environmentIntensity, this._lightingInfos.w = 1, Wv.updateVector4("vLightingIntensity", this._lightingInfos), Wv.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (Sv.texturesEnabled) {
                for (const vv in this._samplersList) {
                  const zv = this._samplersList[vv];
                  zv.value && Wv.setTexture(zv.samplerName, zv.value)
                }
                if ((0, Xv.n)(Sv, ev, Wv, zv, this.realTimeFiltering), ev.ENVIRONMENTBRDF && Wv.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), ev.FUZZENVIRONMENTBRDF && Wv.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), ev.REFRACTED_BACKGROUND && (Wv.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), Wv.Xu("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), Zv.i.fa[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), Wv.updateVector3("vBackgroundRefractionInfos", Zv.i.fa[1])), (ev.ANISOTROPIC || ev.FUZZ || ev.REFRACTED_BACKGROUND || ev.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && Wv.setTexture("blueNoiseSampler", vv._noiseTextures[this.rD().uniqueId]), ev.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const vv = this.sssIrradianceTexture.getSize().width,
                    zv = this.sssIrradianceTexture.getSize().height;
                  Wv.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), Wv.setTexture("sceneDepthSampler", this.sssDepthTexture), Wv.updateFloat2("renderTargetSize", vv, zv)
                }
              }
              this.rD().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(Pv) && this.rD().depthPeelingRenderer.bind(gv), this._eventInfo.subMesh = hv, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, lz.e)(this._activeEffect, this, Sv), this.bindEyePosition(gv)
            } else Tv && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, Sv, Sv.ma(), hv), !lv && this.isFrozen && !Tv || !Sv.lightsEnabled || this._disableLighting || (0, Xv.r)(Sv, Pv, this._activeEffect, ev, this._maxSimultaneousLights), !lv && this.isFrozen || (this.bindView(gv), (0, Xv.g)(Sv, Pv, this._activeEffect, !0), ev.NUM_MORPH_INFLUENCERS && (0, Xv.v)(Pv, this._activeEffect), ev.BAKED_VERTEX_ANIMATION_TEXTURE && Pv.bakedVertexAnimationManager?.bind(gv, ev.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, Xv.u)(ev, this._activeEffect, Sv)), this._afterBind(Pv, this._activeEffect, hv), Wv.update()
          }
          getAnimatables() {
            const vv = super.getAnimatables();
            for (const zv in this._samplersList) {
              const Pv = this._samplersList[zv];
              Pv.value && Pv.value.animations && Pv.value.animations.length > 0 && vv.push(Pv.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && vv.push(this._radianceTexture), vv
          }
          getActiveTextures() {
            const vv = super.getActiveTextures();
            for (const zv in this._samplersList) {
              const Pv = this._samplersList[zv];
              Pv.value && vv.push(Pv.value)
            }
            return this._radianceTexture && vv.push(this._radianceTexture), vv
          }
          hasTexture(vv) {
            if (super.hasTexture(vv)) return !0;
            for (const zv in this._samplersList) {
              if (this._samplersList[zv].value === vv) return !0
            }
            return this._radianceTexture === vv
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(vv, zv) {
            if (this._breakShaderLoadedCheck = !0, zv) {
              this._environmentBRDFTexture && this.rD().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.rD().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const vv in this._samplersList) {
                const zv = this._samplersList[vv];
                zv.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(vv, zv)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.rD().environmentTexture
          }
          _prepareEffect(zv, Pv, hv) {
            let Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              ev = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              gv = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              pv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(zv, Pv, hv, gv, pv), !hv.isDirty) return null;
            hv.markAsProcessed();
            const dv = this.rD().ma(),
              Nv = new kv.e;
            let lv = 0;
            hv.USESPHERICALINVERTEX && Nv.addFallback(lv++, "USESPHERICALINVERTEX"), hv.FOG && Nv.addFallback(lv, "FOG"), hv.SPECULARAA && Nv.addFallback(lv, "SPECULARAA"), hv.POINTSIZE && Nv.addFallback(lv, "POINTSIZE"), hv.LOGARITHMICDEPTH && Nv.addFallback(lv, "LOGARITHMICDEPTH"), hv.PARALLAX && Nv.addFallback(lv, "PARALLAX"), hv.PARALLAX_RHS && Nv.addFallback(lv, "PARALLAX_RHS"), hv.PARALLAXOCCLUSION && Nv.addFallback(lv++, "PARALLAXOCCLUSION"), hv.ENVIRONMENTBRDF && Nv.addFallback(lv++, "ENVIRONMENTBRDF"), hv.TANGENT && Nv.addFallback(lv++, "TANGENT"), lv = (0, Xv.B)(hv, Nv, this._maxSimultaneousLights, lv), hv.SPECULARTERM && Nv.addFallback(lv++, "SPECULARTERM"), hv.USESPHERICALFROMREFLECTIONMAP && Nv.addFallback(lv++, "USESPHERICALFROMREFLECTIONMAP"), hv.USEIRRADIANCEMAP && Nv.addFallback(lv++, "USEIRRADIANCEMAP"), hv.NORMAL && Nv.addFallback(lv++, "NORMAL"), hv.VERTEXCOLOR && Nv.addFallback(lv++, "VERTEXCOLOR"), hv.MORPHTARGETS && Nv.addFallback(lv++, "MORPHTARGETS"), hv.MULTIVIEW && Nv.addFallback(0, "MULTIVIEW");
            const Tv = [Av.k.PositionKind];
            hv.NORMAL && Tv.push(Av.k.NormalKind), hv.TANGENT && Tv.push(Av.k.TangentKind);
            for (let vv = 1; vv <= 6; ++vv) hv["UV" + vv] && Tv.push(`uv${1===vv?"":vv}`);
            hv.VERTEXCOLOR && Tv.push(Av.k.ColorKind), (0, Xv.G)(Tv, zv, hv, Nv), (0, Xv.J)(Tv, hv), (0, Xv.L)(Tv, zv, hv), (0, Xv.F)(Tv, zv, hv);
            let Wv = "openpbr";
            const wv = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const vv in this._uniformsList) wv.push(vv);
            const av = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            hv.FUZZENVIRONMENTBRDF && av.push("environmentFuzzBrdfSampler"), hv.REFRACTED_BACKGROUND && av.push("backgroundRefractionSampler"), (hv.ANISOTROPIC || hv.FUZZ || hv.REFRACTED_BACKGROUND || hv.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && av.push("blueNoiseSampler"), hv.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (av.push("sceneIrradianceSampler"), av.push("sceneDepthSampler"));
            for (const vv in this._samplersList) {
              const zv = this._samplersList[vv];
              av.push(zv.samplerName), wv.push(zv.samplerInfoName), wv.push(zv.samplerMatrixName)
            }(0, Xv.kb)(wv, av, !0);
            const sv = ["Material", "Scene", "Mesh"],
              Cv = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: hv.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = Nv, this._eventInfo.fallbackRank = lv, this._eventInfo.defines = hv, this._eventInfo.uniforms = wv, this._eventInfo.attributes = Tv, this._eventInfo.samplers = av, this._eventInfo.uniformBuffersNames = sv, this._eventInfo.customCode = void 0, this._eventInfo.mesh = zv, this._eventInfo.indexParameters = Cv, this._callbackPluginEventGeneric(128, this._eventInfo), wz.d.AddUniformsAndSamplers(wv, av), Bv.b.AddUniforms(wv), Bv.b.AddSamplers(av), (0, lz.c)(wv), this._useVertexPulling) {
              const vv = Pv?.geometry;
              vv && (this._vertexPullingMetadata = (0, Tz.e)(vv), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((vv, zv) => {
                wv.push(`vp_${zv}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            ov.b && (ov.b.PrepareUniforms(wv, hv), ov.b.PrepareSamplers(av, hv)), (0, Xv.lb)({
              uniformsNames: wv,
              uniformBuffersNames: sv,
              samplers: av,
              defines: hv,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const iv = {};
            this.customShaderNameResolve && (Wv = this.customShaderNameResolve(Wv, wv, sv, av, hv, Tv, iv));
            const cv = hv.toString(),
              Gv = dv.createEffect(Wv, {
                attributes: Tv,
                uniformsNames: wv,
                uniformBuffersNames: sv,
                samplers: av,
                defines: cv,
                fallbacks: Nv,
                onCompiled: Sv,
                onError: ev,
                indexParameters: Cv,
                processFinalCode: iv.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: hv.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: vv._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, dv);
            return this._eventInfo.customCode = void 0, Gv
          }
          _prepareDefines(zv, Pv, hv) {
            let Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              gv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const pv = Pv.hasThinInstances,
              dv = this.rD(),
              Nv = dv.ma();
            (0, Xv.W)(dv, zv, hv, !0, this._maxSimultaneousLights, this._disableLighting), hv._needNormals = !0, (0, Xv.cb)(dv, hv);
            const lv = this.needAlphaBlendingForMesh(zv) && this.rD().useOrderIndependentTransparency;
            if ((0, Xv.ib)(dv, hv, this.canRenderToMRT && !lv), (0, Xv.eb)(dv, hv, lv), wz.d.PrepareDefines(Nv.currentRenderPassId, zv, hv), hv._areTexturesDirty) {
              hv._needUVs = !1;
              for (let vv = 1; vv <= 6; ++vv) hv["MAINUV" + vv] = !1;
              if (dv.texturesEnabled) {
                for (const Pv in this._samplersList) {
                  const vv = this._samplersList[Pv];
                  vv.value ? ((0, Xv._)(vv.value, hv, vv.textureDefine), hv[vv.textureDefine + "_GAMMA"] = vv.value.gammaSpace) : hv[vv.textureDefine] = !1
                }
                const vv = this._getRadianceTexture(),
                  zv = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || Nv.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, Xv.T)(dv, vv, hv, this.realTimeFiltering, this.realTimeFilteringQuality, !zv), this._baseMetalnessTexture && (hv.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), hv.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, hv.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, hv.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, hv.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, hv.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, hv.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, hv.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, hv.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, hv.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, hv.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, hv.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && rv.e.DiffuseTextureEnabled ? (hv.PARALLAX = !0, hv.PARALLAX_RHS = dv.useRightHandedSystem, hv.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : hv.PARALLAX = !1, hv.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (hv.PARALLAX = !1, hv.PARALLAX_RHS = !1, hv.PARALLAXOCCLUSION = !1, hv.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && rv.e.ReflectionTextureEnabled ? (hv.ENVIRONMENTBRDF = !0, hv.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (hv.ENVIRONMENTBRDF = !1, hv.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? hv.FUZZENVIRONMENTBRDF = !0 : hv.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  hv.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && rv.e.RefractionTextureEnabled, hv.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, hv.REFRACTED_LIGHTS = !0;
                  const vv = this._getRadianceTexture();
                  vv ? (hv.REFRACTED_ENVIRONMENT = rv.e.RefractionTextureEnabled, hv.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.rD().useRightHandedSystem ? !vv.invertZ : vv.invertZ, hv.REFRACTED_ENVIRONMENT_LOCAL_CUBE = vv.isCube && vv.boundingBoxSize) : hv.REFRACTED_ENVIRONMENT = !1
                } else hv.REFRACTED_BACKGROUND = !1, hv.REFRACTED_LIGHTS = !1, hv.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? hv.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : hv.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === ev.b.LIGHTFALLOFF_STANDARD ? (hv.USEPHYSICALLIGHTFALLOFF = !1, hv.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === ev.b.LIGHTFALLOFF_GLTF ? (hv.USEPHYSICALLIGHTFALLOFF = !1, hv.USEGLTFLIGHTFALLOFF = !0) : (hv.USEPHYSICALLIGHTFALLOFF = !0, hv.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? hv.TWOSIDEDLIGHTING = !0 : hv.TWOSIDEDLIGHTING = !1, hv.MIRRORED = !!dv._mirroredCameraPosition, hv.SPECULARAA = Nv.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(hv._areTexturesDirty || hv._areMiscDirty) && (hv.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, hv.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, hv.ALPHABLEND = this.needAlphaBlendingForMesh(zv)), hv._areTexturesDirty && (hv.TEXTURE_REPETITION_MODE = Nv.version > 1 || Nv.isWebGPU ? this.textureRepetitionMode : 0), hv._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(hv), hv.FORCENORMALFORWARD = this._forceNormalForward, hv.RADIANCEOCCLUSION = this._useRadianceOcclusion, hv.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && vv._noiseTextures[dv.uniqueId] && rv.e.ReflectionTextureEnabled ? (hv.ANISOTROPIC = !0, zv.isVerticesDataPresent(Av.k.TangentKind) || (hv._needUVs = !0, hv.MAINUV1 = !0), this._useGltfStyleAnisotropy && (hv.USE_GLTF_STYLE_ANISOTROPY = !0), hv.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, hv.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (hv.ANISOTROPIC = !1, hv.USE_GLTF_STYLE_ANISOTROPY = !1, hv.ANISOTROPIC_BASE = !1, hv.ANISOTROPIC_COAT = !1), hv.THIN_FILM = this.thinFilmWeight > 0, hv.IRIDESCENCE = this.thinFilmWeight > 0, hv.DISPERSION = this.transmissionDispersionScale > 0, hv.SCATTERING = this.hasScattering;
            if (hv.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, hv.TRANSMISSION_SLAB = this.transmissionWeight > 0, hv.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, hv.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !hv.PREPASS && (hv.SUBSURFACE_SLAB || hv.TRANSMISSION_SLAB_VOLUME)) {
              let vv = !1;
              if (!this.sssIrradianceTexture && dv.geometryBufferRenderer) {
                const zv = dv.geometryBufferRenderer.getTextureIndex(Lz.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = dv.geometryBufferRenderer.getGBuffer().textures[zv], vv = !0
              }
              if (!this.sssDepthTexture && dv.geometryBufferRenderer) {
                const zv = dv.geometryBufferRenderer.getTextureIndex(Lz.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = dv.geometryBufferRenderer.getGBuffer().textures[zv], vv = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (hv.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, vv && (hv.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            hv.FUZZ = this.fuzzWeight > 0 && rv.e.ReflectionTextureEnabled, hv.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, hv.FUZZ ? (zv.isVerticesDataPresent(Av.k.TangentKind) || (hv._needUVs = !0, hv.MAINUV1 = !0), this._environmentFuzzBRDFTexture = qv(this.rD()), hv.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, hv.FUZZENVIRONMENTBRDF = !1, hv.FUZZ_IBL_SAMPLES = 0), hv._areMiscDirty && ((0, Xv.$)(zv, dv, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(zv), hv, this._applyDecalMapAfterDetailMap, this._useVertexPulling, Pv, this._isVertexOutputInvariant), hv.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !zv.isVerticesDataPresent(Av.k.NormalKind), hv.DEBUGMODE = this._debugMode), (0, Xv.S)(dv, Nv, this, hv, !!Sv, gv, pv), this._eventInfo.defines = hv, this._eventInfo.mesh = zv, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Xv.P)(zv, hv, !0, !0, !0, this._transparencyMode !== ev.b.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, zv = new WeakMap, hv = new WeakMap, Sv = new WeakMap, gv = new WeakMap, pv = new WeakMap, dv = new WeakMap, Nv = new WeakMap, lv = new WeakMap, Tv = new WeakMap, Wv = new WeakMap, wv = new WeakMap, av = new WeakMap, sv = new WeakMap, Cv = new WeakMap, iv = new WeakMap, cv = new WeakMap, Gv = new WeakMap, mv = new WeakMap, jv = new WeakMap, fv = new WeakMap, Fv = new WeakMap, Yv = new WeakMap, Uv = new WeakMap, Rv = new WeakMap, xv = new WeakMap, tv = new WeakMap, Qv = new WeakMap, Lv = new WeakMap, Hv = new WeakMap, Mv = new WeakMap, yv = new WeakMap, Ev = new WeakMap, bv = new WeakMap, uv = new WeakMap, vz = new WeakMap, zz = new WeakMap, Pz = new WeakMap, hz = new WeakMap, Sz = new WeakMap, ez = new WeakMap, gz = new WeakMap, pz = new WeakMap, dz = new WeakMap, Nz = new WeakMap, az = new WeakMap, sz = new WeakMap, Cz = new WeakMap, iz = new WeakMap, cz = new WeakMap, Gz = new WeakMap, mz = new WeakMap, jz = new WeakMap, fz = new WeakMap, nz = new WeakMap, Oz = new WeakMap, Dz = new WeakMap, Kz = new WeakMap, Vz = new WeakMap, Uz = new WeakMap, Rz = new WeakMap, xz = new WeakMap, tz = new WeakMap, qz = new WeakMap, Iz = new WeakMap, Qz = new WeakMap, Zz = new WeakMap, Az = new WeakMap, Hz = new WeakMap, yz = new WeakMap, oz = new WeakMap, bz = new WeakMap, Xz = new WeakMap, uz = new WeakMap, vP = new WeakMap, zP = new WeakMap, PP = new WeakMap, hP = new WeakMap, SP = new WeakMap, eP = new WeakMap, gP = new WeakMap, pP = new WeakMap, dP = new WeakMap, NP = new WeakMap, lP = new WeakMap, TP = new WeakMap, WP = new WeakMap, wP = new WeakMap, aP = new WeakMap, sP = new WeakMap, CP = new WeakMap, iP = new WeakMap, cP = new WeakMap, GP = new WeakMap, mP = new WeakMap, jP = new WeakMap, fP = new WeakMap, FP = new WeakMap, YP = new WeakMap, nP = new WeakMap, OP = new WeakMap, DP = new WeakMap, KP = new WeakMap, (() => {
          const zv = "function" === typeof Symbol && Symbol.metadata ? Object.create(US[Symbol.metadata] ?? null) : void 0;
          VP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], UP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], RP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], xP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], tP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], qP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], IP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], QP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], ZP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], AP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], LP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], HP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], MP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], yP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], BP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], JP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], EP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], oP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], bP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], rP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], kP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], XP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], uP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], vh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], zh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], Ph = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], hh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], Sh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], eh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], gh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], ph = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], dh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], Nh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], lh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], Th = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], Wh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], wh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], ah = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], sh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], Ch = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], ih = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], ch = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], Gh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], mh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], jh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], fh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], Fh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], Yh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], nh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], Oh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], Dh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], Kh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], Vh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], Uh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], Rh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], xh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], th = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], qh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], Ih = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], Qh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], Zh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], Ah = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], Lh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], Hh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], Mh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], yh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], Bh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], Jh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], Eh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], oh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], bh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], rh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], kh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], Xh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], uh = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], vS = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], zS = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], PS = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], hS = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], SS = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], eS = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], gS = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], pS = [(0, Ov.L)()], dS = [(0, Ov.L)()], NS = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], lS = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], TS = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], WS = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], wS = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsLightsDirty")], aS = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], sS = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsLightsDirty")], CS = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], iS = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], cS = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], GS = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], mS = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], jS = [(0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], fS = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], FS = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], YS = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], nS = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], OS = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsMiscDirty")], DS = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsMiscDirty")], KS = [(0, Ov.e)("_markAllSubMeshesAsMiscDirty")], VS = [(0, Ov.L)()], (0, nv.e)(vv, null, VP, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: vv => "baseWeight" in vv,
              get: vv => vv.baseWeight,
              set: (vv, zv) => {
                vv.baseWeight = zv
              }
            },
            metadata: zv
          }, xS, tS), (0, nv.e)(vv, null, UP, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "baseWeightTexture" in vv,
              get: vv => vv.baseWeightTexture,
              set: (vv, zv) => {
                vv.baseWeightTexture = zv
              }
            },
            metadata: zv
          }, qS, IS), (0, nv.e)(vv, null, RP, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: vv => "baseColor" in vv,
              get: vv => vv.baseColor,
              set: (vv, zv) => {
                vv.baseColor = zv
              }
            },
            metadata: zv
          }, QS, ZS), (0, nv.e)(vv, null, xP, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "baseColorTexture" in vv,
              get: vv => vv.baseColorTexture,
              set: (vv, zv) => {
                vv.baseColorTexture = zv
              }
            },
            metadata: zv
          }, AS, LS), (0, nv.e)(vv, null, tP, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: vv => "baseDiffuseRoughness" in vv,
              get: vv => vv.baseDiffuseRoughness,
              set: (vv, zv) => {
                vv.baseDiffuseRoughness = zv
              }
            },
            metadata: zv
          }, HS, MS), (0, nv.e)(vv, null, qP, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "baseDiffuseRoughnessTexture" in vv,
              get: vv => vv.baseDiffuseRoughnessTexture,
              set: (vv, zv) => {
                vv.baseDiffuseRoughnessTexture = zv
              }
            },
            metadata: zv
          }, yS, BS), (0, nv.e)(vv, null, IP, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: vv => "baseMetalness" in vv,
              get: vv => vv.baseMetalness,
              set: (vv, zv) => {
                vv.baseMetalness = zv
              }
            },
            metadata: zv
          }, JS, ES), (0, nv.e)(vv, null, QP, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "baseMetalnessTexture" in vv,
              get: vv => vv.baseMetalnessTexture,
              set: (vv, zv) => {
                vv.baseMetalnessTexture = zv
              }
            },
            metadata: zv
          }, oS, bS), (0, nv.e)(vv, null, ZP, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: vv => "specularWeight" in vv,
              get: vv => vv.specularWeight,
              set: (vv, zv) => {
                vv.specularWeight = zv
              }
            },
            metadata: zv
          }, rS, kS), (0, nv.e)(vv, null, AP, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "specularWeightTexture" in vv,
              get: vv => vv.specularWeightTexture,
              set: (vv, zv) => {
                vv.specularWeightTexture = zv
              }
            },
            metadata: zv
          }, XS, uS), (0, nv.e)(vv, null, LP, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: vv => "specularColor" in vv,
              get: vv => vv.specularColor,
              set: (vv, zv) => {
                vv.specularColor = zv
              }
            },
            metadata: zv
          }, ve, ze), (0, nv.e)(vv, null, HP, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "specularColorTexture" in vv,
              get: vv => vv.specularColorTexture,
              set: (vv, zv) => {
                vv.specularColorTexture = zv
              }
            },
            metadata: zv
          }, Pe, he), (0, nv.e)(vv, null, MP, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: vv => "specularRoughness" in vv,
              get: vv => vv.specularRoughness,
              set: (vv, zv) => {
                vv.specularRoughness = zv
              }
            },
            metadata: zv
          }, Se, ee), (0, nv.e)(vv, null, yP, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "specularRoughnessTexture" in vv,
              get: vv => vv.specularRoughnessTexture,
              set: (vv, zv) => {
                vv.specularRoughnessTexture = zv
              }
            },
            metadata: zv
          }, ge, pe), (0, nv.e)(vv, null, BP, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: vv => "specularRoughnessAnisotropy" in vv,
              get: vv => vv.specularRoughnessAnisotropy,
              set: (vv, zv) => {
                vv.specularRoughnessAnisotropy = zv
              }
            },
            metadata: zv
          }, de, Ne), (0, nv.e)(vv, null, JP, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "specularRoughnessAnisotropyTexture" in vv,
              get: vv => vv.specularRoughnessAnisotropyTexture,
              set: (vv, zv) => {
                vv.specularRoughnessAnisotropyTexture = zv
              }
            },
            metadata: zv
          }, le, Te), (0, nv.e)(vv, null, EP, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: vv => "specularIor" in vv,
              get: vv => vv.specularIor,
              set: (vv, zv) => {
                vv.specularIor = zv
              }
            },
            metadata: zv
          }, We, we), (0, nv.e)(vv, null, oP, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: vv => "transmissionWeight" in vv,
              get: vv => vv.transmissionWeight,
              set: (vv, zv) => {
                vv.transmissionWeight = zv
              }
            },
            metadata: zv
          }, ae, se), (0, nv.e)(vv, null, bP, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "transmissionWeightTexture" in vv,
              get: vv => vv.transmissionWeightTexture,
              set: (vv, zv) => {
                vv.transmissionWeightTexture = zv
              }
            },
            metadata: zv
          }, Ce, ie), (0, nv.e)(vv, null, rP, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: vv => "transmissionColor" in vv,
              get: vv => vv.transmissionColor,
              set: (vv, zv) => {
                vv.transmissionColor = zv
              }
            },
            metadata: zv
          }, ce, Ge), (0, nv.e)(vv, null, kP, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "transmissionColorTexture" in vv,
              get: vv => vv.transmissionColorTexture,
              set: (vv, zv) => {
                vv.transmissionColorTexture = zv
              }
            },
            metadata: zv
          }, me, je), (0, nv.e)(vv, null, XP, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: vv => "transmissionDepth" in vv,
              get: vv => vv.transmissionDepth,
              set: (vv, zv) => {
                vv.transmissionDepth = zv
              }
            },
            metadata: zv
          }, fe, Fe), (0, nv.e)(vv, null, uP, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "transmissionDepthTexture" in vv,
              get: vv => vv.transmissionDepthTexture,
              set: (vv, zv) => {
                vv.transmissionDepthTexture = zv
              }
            },
            metadata: zv
          }, Ye, ne), (0, nv.e)(vv, null, vh, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: vv => "transmissionScatter" in vv,
              get: vv => vv.transmissionScatter,
              set: (vv, zv) => {
                vv.transmissionScatter = zv
              }
            },
            metadata: zv
          }, Oe, De), (0, nv.e)(vv, null, zh, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "transmissionScatterTexture" in vv,
              get: vv => vv.transmissionScatterTexture,
              set: (vv, zv) => {
                vv.transmissionScatterTexture = zv
              }
            },
            metadata: zv
          }, Ke, Ve), (0, nv.e)(vv, null, Ph, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: vv => "transmissionScatterAnisotropy" in vv,
              get: vv => vv.transmissionScatterAnisotropy,
              set: (vv, zv) => {
                vv.transmissionScatterAnisotropy = zv
              }
            },
            metadata: zv
          }, Ue, Re), (0, nv.e)(vv, null, hh, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: vv => "transmissionDispersionScale" in vv,
              get: vv => vv.transmissionDispersionScale,
              set: (vv, zv) => {
                vv.transmissionDispersionScale = zv
              }
            },
            metadata: zv
          }, xe, te), (0, nv.e)(vv, null, Sh, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "transmissionDispersionScaleTexture" in vv,
              get: vv => vv.transmissionDispersionScaleTexture,
              set: (vv, zv) => {
                vv.transmissionDispersionScaleTexture = zv
              }
            },
            metadata: zv
          }, qe, Ie), (0, nv.e)(vv, null, eh, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: vv => "transmissionDispersionAbbeNumber" in vv,
              get: vv => vv.transmissionDispersionAbbeNumber,
              set: (vv, zv) => {
                vv.transmissionDispersionAbbeNumber = zv
              }
            },
            metadata: zv
          }, Qe, Ze), (0, nv.e)(vv, null, gh, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: vv => "subsurfaceWeight" in vv,
              get: vv => vv.subsurfaceWeight,
              set: (vv, zv) => {
                vv.subsurfaceWeight = zv
              }
            },
            metadata: zv
          }, Ae, Le), (0, nv.e)(vv, null, ph, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "subsurfaceWeightTexture" in vv,
              get: vv => vv.subsurfaceWeightTexture,
              set: (vv, zv) => {
                vv.subsurfaceWeightTexture = zv
              }
            },
            metadata: zv
          }, He, Me), (0, nv.e)(vv, null, dh, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: vv => "subsurfaceColor" in vv,
              get: vv => vv.subsurfaceColor,
              set: (vv, zv) => {
                vv.subsurfaceColor = zv
              }
            },
            metadata: zv
          }, ye, Be), (0, nv.e)(vv, null, Nh, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "subsurfaceColorTexture" in vv,
              get: vv => vv.subsurfaceColorTexture,
              set: (vv, zv) => {
                vv.subsurfaceColorTexture = zv
              }
            },
            metadata: zv
          }, Je, Ee), (0, nv.e)(vv, null, lh, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: vv => "subsurfaceRadius" in vv,
              get: vv => vv.subsurfaceRadius,
              set: (vv, zv) => {
                vv.subsurfaceRadius = zv
              }
            },
            metadata: zv
          }, oe, be), (0, nv.e)(vv, null, Th, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: vv => "subsurfaceRadiusScale" in vv,
              get: vv => vv.subsurfaceRadiusScale,
              set: (vv, zv) => {
                vv.subsurfaceRadiusScale = zv
              }
            },
            metadata: zv
          }, re, ke), (0, nv.e)(vv, null, Wh, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "subsurfaceRadiusScaleTexture" in vv,
              get: vv => vv.subsurfaceRadiusScaleTexture,
              set: (vv, zv) => {
                vv.subsurfaceRadiusScaleTexture = zv
              }
            },
            metadata: zv
          }, Xe, ue), (0, nv.e)(vv, null, wh, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: vv => "subsurfaceScatterAnisotropy" in vv,
              get: vv => vv.subsurfaceScatterAnisotropy,
              set: (vv, zv) => {
                vv.subsurfaceScatterAnisotropy = zv
              }
            },
            metadata: zv
          }, vg, zg), (0, nv.e)(vv, null, ah, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: vv => "coatWeight" in vv,
              get: vv => vv.coatWeight,
              set: (vv, zv) => {
                vv.coatWeight = zv
              }
            },
            metadata: zv
          }, Pg, hg), (0, nv.e)(vv, null, sh, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "coatWeightTexture" in vv,
              get: vv => vv.coatWeightTexture,
              set: (vv, zv) => {
                vv.coatWeightTexture = zv
              }
            },
            metadata: zv
          }, Sg, eg), (0, nv.e)(vv, null, Ch, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: vv => "coatColor" in vv,
              get: vv => vv.coatColor,
              set: (vv, zv) => {
                vv.coatColor = zv
              }
            },
            metadata: zv
          }, gg, pg), (0, nv.e)(vv, null, ih, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "coatColorTexture" in vv,
              get: vv => vv.coatColorTexture,
              set: (vv, zv) => {
                vv.coatColorTexture = zv
              }
            },
            metadata: zv
          }, dg, Ng), (0, nv.e)(vv, null, ch, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: vv => "coatRoughness" in vv,
              get: vv => vv.coatRoughness,
              set: (vv, zv) => {
                vv.coatRoughness = zv
              }
            },
            metadata: zv
          }, lg, Tg), (0, nv.e)(vv, null, Gh, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "coatRoughnessTexture" in vv,
              get: vv => vv.coatRoughnessTexture,
              set: (vv, zv) => {
                vv.coatRoughnessTexture = zv
              }
            },
            metadata: zv
          }, Wg, wg), (0, nv.e)(vv, null, mh, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: vv => "coatRoughnessAnisotropy" in vv,
              get: vv => vv.coatRoughnessAnisotropy,
              set: (vv, zv) => {
                vv.coatRoughnessAnisotropy = zv
              }
            },
            metadata: zv
          }, ag, sg), (0, nv.e)(vv, null, jh, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "coatRoughnessAnisotropyTexture" in vv,
              get: vv => vv.coatRoughnessAnisotropyTexture,
              set: (vv, zv) => {
                vv.coatRoughnessAnisotropyTexture = zv
              }
            },
            metadata: zv
          }, Cg, ig), (0, nv.e)(vv, null, fh, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: vv => "coatIor" in vv,
              get: vv => vv.coatIor,
              set: (vv, zv) => {
                vv.coatIor = zv
              }
            },
            metadata: zv
          }, cg, Gg), (0, nv.e)(vv, null, Fh, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: vv => "coatDarkening" in vv,
              get: vv => vv.coatDarkening,
              set: (vv, zv) => {
                vv.coatDarkening = zv
              }
            },
            metadata: zv
          }, mg, jg), (0, nv.e)(vv, null, Yh, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "coatDarkeningTexture" in vv,
              get: vv => vv.coatDarkeningTexture,
              set: (vv, zv) => {
                vv.coatDarkeningTexture = zv
              }
            },
            metadata: zv
          }, fg, Fg), (0, nv.e)(vv, null, nh, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: vv => "fuzzWeight" in vv,
              get: vv => vv.fuzzWeight,
              set: (vv, zv) => {
                vv.fuzzWeight = zv
              }
            },
            metadata: zv
          }, Yg, ng), (0, nv.e)(vv, null, Oh, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "fuzzWeightTexture" in vv,
              get: vv => vv.fuzzWeightTexture,
              set: (vv, zv) => {
                vv.fuzzWeightTexture = zv
              }
            },
            metadata: zv
          }, Og, Dg), (0, nv.e)(vv, null, Dh, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: vv => "fuzzColor" in vv,
              get: vv => vv.fuzzColor,
              set: (vv, zv) => {
                vv.fuzzColor = zv
              }
            },
            metadata: zv
          }, Kg, Vg), (0, nv.e)(vv, null, Kh, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "fuzzColorTexture" in vv,
              get: vv => vv.fuzzColorTexture,
              set: (vv, zv) => {
                vv.fuzzColorTexture = zv
              }
            },
            metadata: zv
          }, Ug, Rg), (0, nv.e)(vv, null, Vh, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: vv => "fuzzRoughness" in vv,
              get: vv => vv.fuzzRoughness,
              set: (vv, zv) => {
                vv.fuzzRoughness = zv
              }
            },
            metadata: zv
          }, xg, tg), (0, nv.e)(vv, null, Uh, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "fuzzRoughnessTexture" in vv,
              get: vv => vv.fuzzRoughnessTexture,
              set: (vv, zv) => {
                vv.fuzzRoughnessTexture = zv
              }
            },
            metadata: zv
          }, qg, Ig), (0, nv.e)(vv, null, Rh, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: vv => "geometryThinWalled" in vv,
              get: vv => vv.geometryThinWalled,
              set: (vv, zv) => {
                vv.geometryThinWalled = zv
              }
            },
            metadata: zv
          }, Qg, Zg), (0, nv.e)(vv, null, xh, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "geometryNormalTexture" in vv,
              get: vv => vv.geometryNormalTexture,
              set: (vv, zv) => {
                vv.geometryNormalTexture = zv
              }
            },
            metadata: zv
          }, Ag, Lg), (0, nv.e)(vv, null, th, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: vv => "geometryTangent" in vv,
              get: vv => vv.geometryTangent,
              set: (vv, zv) => {
                vv.geometryTangent = zv
              }
            },
            metadata: zv
          }, Hg, Mg), (0, nv.e)(vv, null, qh, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "geometryTangentTexture" in vv,
              get: vv => vv.geometryTangentTexture,
              set: (vv, zv) => {
                vv.geometryTangentTexture = zv
              }
            },
            metadata: zv
          }, yg, Bg), (0, nv.e)(vv, null, Ih, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "geometryCoatNormalTexture" in vv,
              get: vv => vv.geometryCoatNormalTexture,
              set: (vv, zv) => {
                vv.geometryCoatNormalTexture = zv
              }
            },
            metadata: zv
          }, Jg, Eg), (0, nv.e)(vv, null, Qh, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: vv => "geometryCoatTangent" in vv,
              get: vv => vv.geometryCoatTangent,
              set: (vv, zv) => {
                vv.geometryCoatTangent = zv
              }
            },
            metadata: zv
          }, og, bg), (0, nv.e)(vv, null, Zh, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "geometryCoatTangentTexture" in vv,
              get: vv => vv.geometryCoatTangentTexture,
              set: (vv, zv) => {
                vv.geometryCoatTangentTexture = zv
              }
            },
            metadata: zv
          }, rg, kg), (0, nv.e)(vv, null, Ah, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: vv => "geometryOpacity" in vv,
              get: vv => vv.geometryOpacity,
              set: (vv, zv) => {
                vv.geometryOpacity = zv
              }
            },
            metadata: zv
          }, Xg, ug), (0, nv.e)(vv, null, Lh, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "geometryOpacityTexture" in vv,
              get: vv => vv.geometryOpacityTexture,
              set: (vv, zv) => {
                vv.geometryOpacityTexture = zv
              }
            },
            metadata: zv
          }, vp, zp), (0, nv.e)(vv, null, Hh, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: vv => "geometryThickness" in vv,
              get: vv => vv.geometryThickness,
              set: (vv, zv) => {
                vv.geometryThickness = zv
              }
            },
            metadata: zv
          }, Pp, hp), (0, nv.e)(vv, null, Mh, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "geometryThicknessTexture" in vv,
              get: vv => vv.geometryThicknessTexture,
              set: (vv, zv) => {
                vv.geometryThicknessTexture = zv
              }
            },
            metadata: zv
          }, Sp, ep), (0, nv.e)(vv, null, yh, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: vv => "emissionLuminance" in vv,
              get: vv => vv.emissionLuminance,
              set: (vv, zv) => {
                vv.emissionLuminance = zv
              }
            },
            metadata: zv
          }, gp, pp), (0, nv.e)(vv, null, Bh, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: vv => "emissionColor" in vv,
              get: vv => vv.emissionColor,
              set: (vv, zv) => {
                vv.emissionColor = zv
              }
            },
            metadata: zv
          }, dp, Np), (0, nv.e)(vv, null, Jh, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "emissionColorTexture" in vv,
              get: vv => vv.emissionColorTexture,
              set: (vv, zv) => {
                vv.emissionColorTexture = zv
              }
            },
            metadata: zv
          }, lp, Tp), (0, nv.e)(vv, null, Eh, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: vv => "thinFilmWeight" in vv,
              get: vv => vv.thinFilmWeight,
              set: (vv, zv) => {
                vv.thinFilmWeight = zv
              }
            },
            metadata: zv
          }, Wp, wp), (0, nv.e)(vv, null, oh, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "thinFilmWeightTexture" in vv,
              get: vv => vv.thinFilmWeightTexture,
              set: (vv, zv) => {
                vv.thinFilmWeightTexture = zv
              }
            },
            metadata: zv
          }, ap, sp), (0, nv.e)(vv, null, bh, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: vv => "thinFilmThickness" in vv,
              get: vv => vv.thinFilmThickness,
              set: (vv, zv) => {
                vv.thinFilmThickness = zv
              }
            },
            metadata: zv
          }, Cp, ip), (0, nv.e)(vv, null, rh, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: vv => "thinFilmThicknessMin" in vv,
              get: vv => vv.thinFilmThicknessMin,
              set: (vv, zv) => {
                vv.thinFilmThicknessMin = zv
              }
            },
            metadata: zv
          }, cp, Gp), (0, nv.e)(vv, null, kh, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "thinFilmThicknessTexture" in vv,
              get: vv => vv.thinFilmThicknessTexture,
              set: (vv, zv) => {
                vv.thinFilmThicknessTexture = zv
              }
            },
            metadata: zv
          }, mp, jp), (0, nv.e)(vv, null, Xh, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: vv => "thinFilmIor" in vv,
              get: vv => vv.thinFilmIor,
              set: (vv, zv) => {
                vv.thinFilmIor = zv
              }
            },
            metadata: zv
          }, fp, Fp), (0, nv.e)(vv, null, uh, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "ambientOcclusionTexture" in vv,
              get: vv => vv.ambientOcclusionTexture,
              set: (vv, zv) => {
                vv.ambientOcclusionTexture = zv
              }
            },
            metadata: zv
          }, Yp, np), (0, nv.e)(vv, null, vS, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: vv => "directIntensity" in vv,
              get: vv => vv.directIntensity,
              set: (vv, zv) => {
                vv.directIntensity = zv
              }
            },
            metadata: zv
          }, Op, Dp), (0, nv.e)(vv, null, zS, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: vv => "environmentIntensity" in vv,
              get: vv => vv.environmentIntensity,
              set: (vv, zv) => {
                vv.environmentIntensity = zv
              }
            },
            metadata: zv
          }, Kp, Vp), (0, nv.e)(vv, null, PS, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: vv => "useSpecularWeightFromTextureAlpha" in vv,
              get: vv => vv.useSpecularWeightFromTextureAlpha,
              set: (vv, zv) => {
                vv.useSpecularWeightFromTextureAlpha = zv
              }
            },
            metadata: zv
          }, Up, Rp), (0, nv.e)(vv, null, hS, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: vv => "forceAlphaTest" in vv,
              get: vv => vv.forceAlphaTest,
              set: (vv, zv) => {
                vv.forceAlphaTest = zv
              }
            },
            metadata: zv
          }, xp, tp), (0, nv.e)(vv, null, SS, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: vv => "alphaCutOff" in vv,
              get: vv => vv.alphaCutOff,
              set: (vv, zv) => {
                vv.alphaCutOff = zv
              }
            },
            metadata: zv
          }, qp, Ip), (0, nv.e)(vv, null, eS, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: vv => "useAmbientOcclusionFromMetallicTextureRed" in vv,
              get: vv => vv.useAmbientOcclusionFromMetallicTextureRed,
              set: (vv, zv) => {
                vv.useAmbientOcclusionFromMetallicTextureRed = zv
              }
            },
            metadata: zv
          }, Qp, Zp), (0, nv.e)(vv, null, gS, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: vv => "useAmbientInGrayScale" in vv,
              get: vv => vv.useAmbientInGrayScale,
              set: (vv, zv) => {
                vv.useAmbientInGrayScale = zv
              }
            },
            metadata: zv
          }, Ap, Lp), (0, nv.e)(vv, null, pS, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: vv => "usePhysicalLightFalloff" in vv,
              get: vv => vv.usePhysicalLightFalloff
            },
            metadata: zv
          }, null, RS), (0, nv.e)(vv, null, dS, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: vv => "useGLTFLightFalloff" in vv,
              get: vv => vv.useGLTFLightFalloff
            },
            metadata: zv
          }, null, RS), (0, nv.e)(vv, null, NS, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: vv => "useObjectSpaceNormalMap" in vv,
              get: vv => vv.useObjectSpaceNormalMap,
              set: (vv, zv) => {
                vv.useObjectSpaceNormalMap = zv
              }
            },
            metadata: zv
          }, Hp, Mp), (0, nv.e)(vv, null, lS, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: vv => "useParallax" in vv,
              get: vv => vv.useParallax,
              set: (vv, zv) => {
                vv.useParallax = zv
              }
            },
            metadata: zv
          }, yp, Bp), (0, nv.e)(vv, null, TS, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: vv => "useParallaxOcclusion" in vv,
              get: vv => vv.useParallaxOcclusion,
              set: (vv, zv) => {
                vv.useParallaxOcclusion = zv
              }
            },
            metadata: zv
          }, Jp, Ep), (0, nv.e)(vv, null, WS, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: vv => "parallaxScaleBias" in vv,
              get: vv => vv.parallaxScaleBias,
              set: (vv, zv) => {
                vv.parallaxScaleBias = zv
              }
            },
            metadata: zv
          }, op, bp), (0, nv.e)(vv, null, wS, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: vv => "disableLighting" in vv,
              get: vv => vv.disableLighting,
              set: (vv, zv) => {
                vv.disableLighting = zv
              }
            },
            metadata: zv
          }, rp, kp), (0, nv.e)(vv, null, aS, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: vv => "forceIrradianceInFragment" in vv,
              get: vv => vv.forceIrradianceInFragment,
              set: (vv, zv) => {
                vv.forceIrradianceInFragment = zv
              }
            },
            metadata: zv
          }, Xp, vd), (0, nv.e)(vv, null, sS, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: vv => "maxSimultaneousLights" in vv,
              get: vv => vv.maxSimultaneousLights,
              set: (vv, zv) => {
                vv.maxSimultaneousLights = zv
              }
            },
            metadata: zv
          }, zd, Pd), (0, nv.e)(vv, null, CS, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: vv => "invertNormalMapX" in vv,
              get: vv => vv.invertNormalMapX,
              set: (vv, zv) => {
                vv.invertNormalMapX = zv
              }
            },
            metadata: zv
          }, hd, Sd), (0, nv.e)(vv, null, iS, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: vv => "invertNormalMapY" in vv,
              get: vv => vv.invertNormalMapY,
              set: (vv, zv) => {
                vv.invertNormalMapY = zv
              }
            },
            metadata: zv
          }, ed, gd), (0, nv.e)(vv, null, cS, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: vv => "twoSidedLighting" in vv,
              get: vv => vv.twoSidedLighting,
              set: (vv, zv) => {
                vv.twoSidedLighting = zv
              }
            },
            metadata: zv
          }, pd, dd), (0, nv.e)(vv, null, GS, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: vv => "useAlphaFresnel" in vv,
              get: vv => vv.useAlphaFresnel,
              set: (vv, zv) => {
                vv.useAlphaFresnel = zv
              }
            },
            metadata: zv
          }, Nd, ld), (0, nv.e)(vv, null, mS, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: vv => "useLinearAlphaFresnel" in vv,
              get: vv => vv.useLinearAlphaFresnel,
              set: (vv, zv) => {
                vv.useLinearAlphaFresnel = zv
              }
            },
            metadata: zv
          }, Td, Wd), (0, nv.e)(vv, null, jS, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "environmentBRDFTexture" in vv,
              get: vv => vv.environmentBRDFTexture,
              set: (vv, zv) => {
                vv.environmentBRDFTexture = zv
              }
            },
            metadata: zv
          }, wd, ad), (0, nv.e)(vv, null, fS, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: vv => "forceNormalForward" in vv,
              get: vv => vv.forceNormalForward,
              set: (vv, zv) => {
                vv.forceNormalForward = zv
              }
            },
            metadata: zv
          }, sd, Cd), (0, nv.e)(vv, null, FS, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: vv => "enableSpecularAntiAliasing" in vv,
              get: vv => vv.enableSpecularAntiAliasing,
              set: (vv, zv) => {
                vv.enableSpecularAntiAliasing = zv
              }
            },
            metadata: zv
          }, cd, Gd), (0, nv.e)(vv, null, YS, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: vv => "useHorizonOcclusion" in vv,
              get: vv => vv.useHorizonOcclusion,
              set: (vv, zv) => {
                vv.useHorizonOcclusion = zv
              }
            },
            metadata: zv
          }, md, jd), (0, nv.e)(vv, null, nS, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: vv => "useRadianceOcclusion" in vv,
              get: vv => vv.useRadianceOcclusion,
              set: (vv, zv) => {
                vv.useRadianceOcclusion = zv
              }
            },
            metadata: zv
          }, fd, Fd), (0, nv.e)(vv, null, OS, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: vv => "unlit" in vv,
              get: vv => vv.unlit,
              set: (vv, zv) => {
                vv.unlit = zv
              }
            },
            metadata: zv
          }, Yd, nd), (0, nv.e)(vv, null, DS, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: vv => "applyDecalMapAfterDetailMap" in vv,
              get: vv => vv.applyDecalMapAfterDetailMap,
              set: (vv, zv) => {
                vv.applyDecalMapAfterDetailMap = zv
              }
            },
            metadata: zv
          }, Od, Dd), (0, nv.e)(vv, null, KS, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: vv => "debugMode" in vv,
              get: vv => vv.debugMode,
              set: (vv, zv) => {
                vv.debugMode = zv
              }
            },
            metadata: zv
          }, Kd, Vd), (0, nv.e)(vv, null, VS, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: vv => "transparencyMode" in vv,
              get: vv => vv.transparencyMode
            },
            metadata: zv
          }, null, RS), zv && Object.defineProperty(vv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zv
          })
        })(), vv.SSS_QUALITY_LOW = 0, vv.SSS_QUALITY_MEDIUM = 1, vv.SSS_QUALITY_HIGH = 2, vv._noiseTextures = {}, vv.ForceGLSL = !1, vv._ShaderLoader = new Wz.e((() => [Promise.all([Pv.e(308), Pv.e(374)]).then((() => Pv(61171))), Promise.all([Pv.e(313), Pv.e(309), Pv.e(373), Pv.e(378)]).then((() => Pv(61179)))]), (() => [Promise.all([Pv.e(327), Pv.e(329), Pv.e(377)]).then((() => Pv(61217))), Promise.all([Pv.e(327), Pv.e(330), Pv.e(376), Pv.e(379)]).then((() => Pv(61225)))])), vv
      })(),
      uz = !1;
    uz || (uz = !0, (0, ov.f)(), (0, Hz.c)("BABYLON.OpenPBRMaterial", Xz));
    var vP = Pv(36618);
    class zP {
      constructor(vv) {
        this.name = tz.d.NAME_PROCEDURALTEXTURE, this.Is = vv
      }
      register() {
        this.Is._beforeClearStage.registerStep(tz.d.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.Is.proceduralTexturesEnabled) {
          Yz.h.StartPerformanceCounter("Procedural textures", this.Is.proceduralTextures.length > 0);
          for (let vv = 0; vv < this.Is.proceduralTextures.length; vv++) {
            const zv = this.Is.proceduralTextures[vv];
            zv._shouldRender() && zv.render()
          }
          Yz.h.EndPerformanceCounter("Procedural textures", this.Is.proceduralTextures.length > 0)
        }
      }
    }
    var PP = Pv(39621);
    let hP = (() => {
      var vv;
      let zv, hv, Sv, gv, pv, dv = Vv.e,
        Nv = [],
        lv = [],
        Tv = [],
        Wv = [],
        wv = [],
        av = [],
        Cv = [],
        iv = [],
        cv = [];
      return vv = class extends dv {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(vv, zv, Pv, hv) {
          let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            ev = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            gv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            pv = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, hv, !ev), this.isEnabled = ((0, nv.f)(this, Nv), (0, nv.f)(this, lv, !0)), this.autoClear = ((0, nv.f)(this, Tv), (0, nv.f)(this, Wv, !0)), this.onGenerated = (0, nv.f)(this, wv), this.onGeneratedObservable = new vP.c, this.onBeforeGenerationObservable = new vP.c, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, nv.f)(this, av, void 0), this._drawWrapper = (0, nv.f)(this, Cv), this._textures = {}, this._size = (0, nv.f)(this, iv, void 0), this._textureType = (0, nv.f)(this, cv), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === Sv || Sv instanceof Vv.e ? (this._options = {}, this._fallbackTexture = Sv) : (this._options = Sv, this._fallbackTexture = Sv.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let dv = (hv = this.rD() || sv.e.LastCreatedScene)._getComponent(tz.d.NAME_PROCEDURALTEXTURE);
          dv || (dv = new zP(hv), hv.Ezv(dv)), this._options.skipSceneRegistration || hv.proceduralTextures.push(this), this._fullEngine = hv.ma(), this.name = vv, this.isRenderTarget = !0, this._size = zv, this._textureType = pv, this._generateMipMaps = ev, this._drawWrapper = new PP.c(this._fullEngine), this.setFragment(Pv);
          const Gv = this._createRtWrapper(gv, zv, ev, pv);
          this._texture = Gv.texture;
          const mv = [];
          mv.push(1, 1), mv.push(-1, 1), mv.push(-1, -1), mv.push(1, -1), this._vertexBuffers[Av.k.PositionKind] = new Av.k(this._fullEngine, mv, Av.k.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(vv, zv, Pv, hv) {
          return vv ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(zv, {
            generateMipMaps: Pv,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: hv,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(zv, {
            generateMipMaps: Pv,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: hv,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(vv) {
          this._drawWrapper.effect = vv
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((vv => {
            this._contentData = this.readPixels(0, 0, vv), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const vv = this._fullEngine,
            zv = [];
          zv.push(0), zv.push(1), zv.push(2), zv.push(0), zv.push(2), zv.push(3), this._indexBuffer = vv.createIndexBuffer(zv)
        }
        _rebuild() {
          const vv = this._vertexBuffers[Av.k.PositionKind];
          vv && vv._rebuild(), this._createIndexBuffer(), this.refreshRate === nz.e.REFRESHRATE_RENDER_ONCE && (this.refreshRate = nz.e.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(vv) {
          if (this.isReady()) return void vv(this);
          const zv = this.getEffect();
          zv && zv.executeWhenCompiled((() => {
            vv(this)
          }))
        }
        isReady() {
          const vv = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const zv = this._getDefines();
          if (this._drawWrapper.effect && zv === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const hv = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== zv && (this._cachedDefines = zv, this._drawWrapper.effect = vv.createEffect(hv, [Av.k.PositionKind], this._uniforms, this._samplers, zv, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([Pv.e(382).then((() => Pv(61291))), this._options.extraInitializationsAsync()]) : await Promise.all([Pv.e(383).then((() => Pv(61295))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await Pv.e(382).then((() => Pv(61291))) : await Pv.e(383).then((() => Pv(61295)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(vv) {
          this._fragment = vv
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(vv) {
          this._refreshRate = vv, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(vv, zv) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const Pv = this._texture.isCube;
          this._rtWrapper.dispose();
          const hv = this._createRtWrapper(Pv, vv, zv, this._textureType);
          this._texture = hv.texture, this._size = vv, this._generateMipMaps = zv
        }
        _checkUniform(vv) {
          -1 === this._uniforms.indexOf(vv) && this._uniforms.push(vv)
        }
        setTexture(vv, zv) {
          return -1 === this._samplers.indexOf(vv) && this._samplers.push(vv), this._textures[vv] = zv, this
        }
        setFloat(vv, zv) {
          return this._checkUniform(vv), this._floats[vv] = zv, this
        }
        setInt(vv, zv) {
          return this._checkUniform(vv), this._ints[vv] = zv, this
        }
        setFloats(vv, zv) {
          return this._checkUniform(vv), this._floatsArrays[vv] = zv, this
        }
        setColor3(vv, zv) {
          return this._checkUniform(vv), this._colors3[vv] = zv, this
        }
        setColor4(vv, zv) {
          return this._checkUniform(vv), this._colors4[vv] = zv, this
        }
        setVector2(vv, zv) {
          return this._checkUniform(vv), this._vectors2[vv] = zv, this
        }
        setVector3(vv, zv) {
          return this._checkUniform(vv), this._vectors3[vv] = zv, this
        }
        setVector4(vv, zv) {
          return this._checkUniform(vv), this._vectors4[vv] = zv, this
        }
        setMatrix(vv, zv) {
          return this._checkUniform(vv), this._matrices[vv] = zv, this
        }
        render(vv) {
          const zv = this.rD();
          if (!zv) return;
          const Pv = this._fullEngine;
          if (Pv.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), Pv.setState(!1), !this.nodeMaterialSource) {
            for (const vv in this._textures) this._drawWrapper.effect.setTexture(vv, this._textures[vv]);
            for (const vv in this._ints) this._drawWrapper.effect.setInt(vv, this._ints[vv]);
            for (const vv in this._floats) this._drawWrapper.effect.setFloat(vv, this._floats[vv]);
            for (const vv in this._floatsArrays) this._drawWrapper.effect.setArray(vv, this._floatsArrays[vv]);
            for (const vv in this._colors3) this._drawWrapper.effect.setColor3(vv, this._colors3[vv]);
            for (const vv in this._colors4) {
              const zv = this._colors4[vv];
              this._drawWrapper.effect.setFloat4(vv, zv.r, zv.g, zv.b, zv.a)
            }
            for (const vv in this._vectors2) this._drawWrapper.effect.setVector2(vv, this._vectors2[vv]);
            for (const vv in this._vectors3) this._drawWrapper.effect.setVector3(vv, this._vectors3[vv]);
            for (const vv in this._vectors4) this._drawWrapper.effect.setVector4(vv, this._vectors4[vv]);
            for (const vv in this._matrices) this._drawWrapper.effect.setMatrix(vv, this._matrices[vv])
          }
          if (!this._texture || !this._rtWrapper) return;
          Pv._enableGPUDebugMarkers && Pv._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const hv = Pv.currentViewport;
          if (this.isCube)
            for (let Sv = 0; Sv < 6; Sv++) Pv.bindFramebuffer(this._rtWrapper, Sv, void 0, void 0, !0), Pv.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", Sv), this.autoClear && Pv.clear(zv.clearColor, !0, !1, !1), Pv.drawElementsType(ev.b.TriangleFillMode, 0, 6), Pv.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let vv = 1;
            this._rtWrapper.is3D ? vv = this._rtWrapper.depth : this._rtWrapper.is2DArray && (vv = this._rtWrapper.layers);
            for (let hv = 0; hv < vv; hv++) {
              if (Pv.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, hv), Pv.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== vv ? hv / (vv - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", hv);
                for (const vv in this._textures) this._drawWrapper.effect.setTexture(vv, this._textures[vv])
              }
              this.autoClear && Pv.clear(zv.clearColor, !0, !1, !1), Pv.drawElementsType(ev.b.TriangleFillMode, 0, 6), Pv.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          hv && Pv.setViewport(hv), this.isCube && Pv.generateMipMapsForCubemap(this._texture, !0), Pv._enableGPUDebugMarkers && Pv._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const zv = this.getSize(),
            Pv = new vv(this.name, zv.width, this._fragment, this.rD(), this._fallbackTexture, this._generateMipMaps);
          return Pv.hasAlpha = this.hasAlpha, Pv.level = this.level, Pv.coordinatesMode = this.coordinatesMode, Pv
        }
        dispose() {
          const vv = this.rD();
          if (!vv) return;
          const zv = vv.proceduralTextures.indexOf(this);
          zv >= 0 && vv.proceduralTextures.splice(zv, 1);
          const Pv = this._vertexBuffers[Av.k.PositionKind];
          Pv && (Pv.dispose(), this._vertexBuffers[Av.k.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const Pv = "function" === typeof Symbol && Symbol.metadata ? Object.create(dv[Symbol.metadata] ?? null) : void 0;
        zv = [(0, Ov.L)()], hv = [(0, Ov.L)()], Sv = [(0, Ov.L)()], gv = [(0, Ov.L)()], pv = [(0, Ov.L)()], (0, nv.e)(vv, null, pv, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: vv => "refreshRate" in vv,
            get: vv => vv.refreshRate
          },
          metadata: Pv
        }, null, Nv), (0, nv.e)(null, null, zv, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: vv => "isEnabled" in vv,
            get: vv => vv.isEnabled,
            set: (vv, zv) => {
              vv.isEnabled = zv
            }
          },
          metadata: Pv
        }, lv, Tv), (0, nv.e)(null, null, hv, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: vv => "autoClear" in vv,
            get: vv => vv.autoClear,
            set: (vv, zv) => {
              vv.autoClear = zv
            }
          },
          metadata: Pv
        }, Wv, wv), (0, nv.e)(null, null, Sv, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: vv => "_generateMipMaps" in vv,
            get: vv => vv._generateMipMaps,
            set: (vv, zv) => {
              vv._generateMipMaps = zv
            }
          },
          metadata: Pv
        }, av, Cv), (0, nv.e)(null, null, gv, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: vv => "_size" in vv,
            get: vv => vv._size,
            set: (vv, zv) => {
              vv._size = zv
            }
          },
          metadata: Pv
        }, iv, cv), Pv && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Pv
        })
      })(), vv
    })();

    function SP(vv) {
      return "texture" in vv
    }

    function eP(vv) {
      return "value" in vv
    }
    async function gP(vv, zv, hv) {
      const Sv = [zv.red, zv.green, zv.blue, zv.alpha],
        ev = [],
        gv = [];
      for (let Pv = 0; Pv < 4; Pv++) {
        const vv = Sv[Pv];
        if (vv)
          if (SP(vv)) {
            if (vv.sourceChannel < 0 || vv.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let zv = ev.indexOf(vv.texture); - 1 === zv && (zv = ev.length, ev.push(vv.texture)), gv[Pv] = zv
          } else {
            if (!eP(vv)) throw new Error("Invalid channel input configuration");
            if (vv.value < 0 || vv.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            gv[Pv] = -1
          }
        else gv[Pv] = -1
      }
      let pv = zv.outputSize;
      if (!pv && ev.length > 0) {
        let vv = 0;
        for (const zv of ev) {
          const Pv = zv.getSize(),
            hv = Math.max(Pv.width, Pv.height);
          hv > vv && (vv = hv, pv = Pv.width === Pv.height ? vv : Pv)
        }
      }
      pv = pv || 512;
      const dv = [],
        Nv = new Set;
      for (let Pv = 0; Pv < 4; Pv++) {
        const vv = Sv[Pv],
          zv = ["RED", "GREEN", "BLUE", "ALPHA"][Pv];
        if (vv && SP(vv)) {
          dv.push(`${zv}_FROM_TEXTURE`);
          const vv = gv[Pv];
          Nv.add(vv)
        }
      }
      Nv.forEach((vv => {
        dv.push(`USE_TEXTURE${vv}`)
      }));
      const lv = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: hv.ma().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            hv.ma().isWebGPU ? await Promise.all([Pv.e(380).then((() => Pv(61279)))]) : await Promise.all([Pv.e(381).then((() => Pv(61283)))])
          },
          skipSceneRegistration: !0
        },
        Tv = new hP(vv, pv, "textureMerger", hv, lv);
      Tv.refreshRate = -1, Tv.defines = dv.length > 0 ? "#define " + dv.join("\n#define ") + "\n" : "";
      for (let Pv = 0; Pv < ev.length; Pv++) Wv = ev[Pv], (wv = Tv).uOffset = Wv.uOffset, wv.vOffset = Wv.vOffset, wv.uScale = Wv.uScale, wv.vScale = Wv.vScale, wv.uAng = Wv.uAng, wv.vAng = Wv.vAng, wv.wAng = Wv.wAng, wv.uRotationCenter = Wv.uRotationCenter, wv.vRotationCenter = Wv.vRotationCenter, Tv.setTexture(`inputTexture${Pv}`, ev[Pv]);
      var Wv, wv;
      for (let Pv = 0; Pv < 4; Pv++) {
        const vv = Sv[Pv],
          zv = ["red", "green", "blue", "alpha"][Pv];
        if (vv && SP(vv)) {
          const hv = gv[Pv];
          Tv.setInt(`${zv}TextureIndex`, hv), Tv.setInt(`${zv}SourceChannel`, vv.sourceChannel)
        } else {
          let hv;
          hv = vv && eP(vv) ? vv.value : 3 === Pv ? 1 : 0, Tv.setFloat(`${zv}ConstantValue`, hv)
        }
      }
      return await new Promise(((vv, zv) => {
        Tv.executeWhenReady((() => {
          try {
            Tv.render(), vv(Tv)
          } catch (Pv) {
            zv(Pv instanceof Error ? Pv : new Error(String(Pv)))
          }
        }))
      }))
    }

    function pP(vv, zv) {
      return {
        texture: vv,
        sourceChannel: zv
      }
    }

    function dP(vv) {
      return {
        value: vv
      }
    }

    function NP(vv, zv, Pv, hv) {
      return {
        red: vv,
        green: zv,
        blue: Pv,
        alpha: hv
      }
    }
    var lP = Pv(39131),
      TP = Pv(39242),
      WP = Pv(36610),
      wP = Pv(39278),
      aP = Pv(39230);
    class sP {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class CP extends lP.b {
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
        return !!this._options?.enableMultiview || this.ka > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new sP;
        super(null), void 0 === vv.deterministicLockstep && (vv.deterministicLockstep = !1), void 0 !== vv.timeStep && (this._timeStep = vv.timeStep), void 0 === vv.lockstepMaxSteps && (vv.lockstepMaxSteps = 4), this._options = vv, WP.b.SetMatrixPrecision(!!vv.useHighPrecisionMatrix), this._caps = {
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
        }, vv.enableMultiview && (this._caps.multiview = {
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
        }, vv.renderingCanvas && (this._renderingCanvas = vv.renderingCanvas), Dv.d.Log(`Babylon.js v${lP.b.Version} - Null engine`);
        const zv = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (zv.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (zv.Blob = function() {})
      }
      createVertexBuffer(vv) {
        const zv = new TP.b;
        return zv.references = 1, zv
      }
      createIndexBuffer(vv) {
        const zv = new TP.b;
        return zv.references = 1, zv
      }
      clear(vv, zv, Pv) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(vv, zv, Pv) {
        this._cachedViewport = vv
      }
      createUniformBuffer(vv) {
        const zv = new TP.b;
        return zv.references = 1, zv.GT = vv instanceof Array ? vv.length * Float32Array.BYTES_PER_ELEMENT : vv.byteLength, zv
      }
      createDynamicUniformBuffer(vv) {
        return this.createUniformBuffer(vv)
      }
      updateUniformBuffer(vv, zv, Pv, hv) {}
      bindUniformBufferBase(vv, zv, Pv) {}
      bindUniformBlock(vv, zv, Pv) {}
      createShaderProgram(vv, zv, Pv, hv, Sv) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(vv, zv) {
        return []
      }
      getAttributes(vv, zv) {
        return []
      }
      bindSamplers(vv) {
        this._currentEffect = null
      }
      enableEffect(vv) {
        vv = null !== vv && (0, aP.e)(vv) ? vv.effect : vv, this._currentEffect = vv, vv && (vv.onBind && vv.onBind(vv), vv._onBindObservable && vv._onBindObservable.notifyObservers(vv))
      }
      setStateCullFaceType(vv, zv) {}
      setState(vv) {}
      setIntArray(vv, zv) {
        return !0
      }
      setIntArray2(vv, zv) {
        return !0
      }
      setIntArray3(vv, zv) {
        return !0
      }
      setIntArray4(vv, zv) {
        return !0
      }
      setFloatArray(vv, zv) {
        return !0
      }
      setFloatArray2(vv, zv) {
        return !0
      }
      setFloatArray3(vv, zv) {
        return !0
      }
      setFloatArray4(vv, zv) {
        return !0
      }
      setArray(vv, zv) {
        return !0
      }
      setArray2(vv, zv) {
        return !0
      }
      setArray3(vv, zv) {
        return !0
      }
      setArray4(vv, zv) {
        return !0
      }
      setMatrices(vv, zv) {
        return !0
      }
      setMatrix3x3(vv, zv) {
        return !0
      }
      setMatrix2x2(vv, zv) {
        return !0
      }
      setFloat(vv, zv) {
        return !0
      }
      setFloat2(vv, zv, Pv) {
        return !0
      }
      setFloat3(vv, zv, Pv, hv) {
        return !0
      }
      setBool(vv, zv) {
        return !0
      }
      setFloat4(vv, zv, Pv, hv, Sv) {
        return !0
      }
      setAlphaMode(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[Pv] !== vv && (this.alphaState.setAlphaBlend(0 !== vv, 0), zv || this.setDepthWrite(0 === vv), this._alphaMode[Pv] = vv)
      }
      bindBuffers(vv, zv, Pv) {}
      wipeCaches(vv) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, vv && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(vv, zv, Pv, hv) {}
      drawElementsType(vv, zv, Pv, hv) {}
      drawArraysType(vv, zv, Pv, hv) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(vv) {}
      createTexture(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          gv = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          pv = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const dv = new Oz.e(this, 1),
          Nv = String(vv);
        return dv.url = Nv, dv.generateMipMaps = !zv, dv.samplingMode = Sv, dv.invertY = Pv, dv.baseWidth = this._options.textureSize, dv.baseHeight = this._options.textureSize, dv.width = this._options.textureSize, dv.height = this._options.textureSize, pv && (dv.format = pv), gv && (dv._buffer = gv), dv.isReady = !0, ev && setTimeout((() => {
          ev(dv)
        })), this._internalTexturesCache.push(dv), dv
      }
      _createHardwareRenderTargetWrapper(vv, zv, Pv) {
        const hv = new wP.d(vv, zv, Pv, this);
        return this._renderTargetWrapperCache.push(hv), hv
      }
      createRenderTargetTexture(vv, zv) {
        const Pv = this._createHardwareRenderTargetWrapper(!1, !1, vv),
          hv = {};
        void 0 !== zv && "object" === typeof zv ? (hv.generateMipMaps = zv.generateMipMaps, hv.generateDepthBuffer = void 0 === zv.generateDepthBuffer || zv.generateDepthBuffer, hv.generateStencilBuffer = hv.generateDepthBuffer && zv.generateStencilBuffer, hv.type = void 0 === zv.type ? 0 : zv.type, hv.samplingMode = void 0 === zv.samplingMode ? 3 : zv.samplingMode) : (hv.generateMipMaps = zv, hv.generateDepthBuffer = !0, hv.generateStencilBuffer = !1, hv.type = 0, hv.samplingMode = 3);
        const Sv = new Oz.e(this, 5);
        Pv.setTexture(Sv);
        const ev = vv.width || vv,
          gv = vv.height || vv;
        return Pv._generateDepthBuffer = hv.generateDepthBuffer, Pv._generateStencilBuffer = !!hv.generateStencilBuffer, Sv.baseWidth = ev, Sv.baseHeight = gv, Sv.width = ev, Sv.height = gv, Sv.isReady = !0, Sv.samples = 1, Sv.generateMipMaps = !!hv.generateMipMaps, Sv.samplingMode = hv.samplingMode, Sv.type = hv.type, this._internalTexturesCache.push(Sv), Pv
      }
      createMultiviewRenderTargetTexture(vv, zv) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const Pv = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: vv,
            height: zv
          }),
          hv = new Oz.e(this, 5, !0);
        return hv.baseWidth = vv, hv.baseHeight = zv, hv.width = vv, hv.height = zv, hv.isMultiview = !0, hv.isReady = !0, hv.format = 5, hv.samples = 1, Pv.setTextures(hv), Pv
      }
      bindMultiviewFramebuffer(vv) {
        this.bindFramebuffer(vv, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(vv, zv) {
        const Pv = this._createHardwareRenderTargetWrapper(!1, !0, vv),
          hv = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...zv
          };
        hv.generateStencilBuffer = hv.generateDepthBuffer && hv.generateStencilBuffer, (1 !== hv.type || this._caps.textureFloatLinearFiltering) && (2 !== hv.type || this._caps.textureHalfFloatLinearFiltering) || (hv.samplingMode = 1), Pv._generateDepthBuffer = hv.generateDepthBuffer, Pv._generateStencilBuffer = !!hv.generateStencilBuffer;
        const Sv = new Oz.e(this, 5);
        return Sv.baseWidth = vv, Sv.baseHeight = vv, Sv.width = vv, Sv.height = vv, Sv.isReady = !0, Sv.isCube = !0, Sv.samples = 1, Sv.generateMipMaps = !!hv.generateMipMaps, Sv.samplingMode = hv.samplingMode, Sv.type = hv.type, this._internalTexturesCache.push(Sv), Pv
      }
      updateTextureSamplingMode(vv, zv) {
        zv.samplingMode = vv
      }
      createRawTexture(vv, zv, Pv, hv, Sv, ev, gv) {
        let pv = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          dv = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Nv = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const lv = new Oz.e(this, 3);
        return lv.baseWidth = zv, lv.baseHeight = Pv, lv.width = zv, lv.height = Pv, lv.format = hv, lv.generateMipMaps = Sv, lv.samplingMode = gv, lv.invertY = ev, lv._compression = pv, lv.type = dv, lv._useSRGBBuffer = Nv, this._doNotHandleContextLost || (lv._bufferView = vv), lv
      }
      updateRawTexture(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          gv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        vv && (vv._bufferView = zv, vv.format = Pv, vv.invertY = hv, vv._compression = Sv, vv.type = ev, vv._useSRGBBuffer = gv)
      }
      bindFramebuffer(vv, zv, Pv, hv, Sv) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = vv, this._currentFramebuffer = null, this._cachedViewport && !Sv && this.setViewport(this._cachedViewport, Pv, hv)
      }
      unBindFramebuffer(vv) {
        let zv = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, zv && zv(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(vv) {
        const zv = new TP.b;
        return zv.references = 1, zv.GT = 1, zv
      }
      updateDynamicTexture(vv, zv, Pv) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(vv) {}
      updateDynamicIndexBuffer(vv, zv) {}
      updateDynamicVertexBuffer(vv, zv, Pv, hv) {}
      _bindTextureDirectly(vv, zv) {
        return this._boundTexturesCache[this._activeChannel] !== zv && (this._boundTexturesCache[this._activeChannel] = zv, !0)
      }
      _bindTexture(vv, zv) {
        vv < 0 || this._bindTextureDirectly(0, zv)
      }
      _deleteBuffer(vv) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(vv) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(vv, zv, Pv, hv, Sv) {}
      _uploadDataToTextureDirectly(vv, zv) {}
      _uploadArrayBufferViewToTexture(vv, zv) {}
      _uploadImageToTexture(vv, zv) {}
    }
    Pv(39334), Pv(39374), Pv(39325);
    async function iP(vv) {
      const zv = vv.getInternalTexture();
      if (!zv || 1 !== zv.source) return null;
      if (zv.invertY) {
        const zv = vv.rD()?.ma();
        if (!(zv instanceof CP)) return null
      }
      const Pv = zv._buffer;
      let hv, ev = vv.mimeType;
      try {
        Pv ? ArrayBuffer.isView(Pv) ? hv = Pv.buffer.slice(Pv.byteOffset, Pv.byteOffset + Pv.byteLength) : Pv instanceof ArrayBuffer ? hv = Pv : Pv instanceof Blob ? (hv = await Pv.arrayBuffer(), ev = Pv.type || ev) : "string" === typeof Pv ? (hv = await Sv.Tools.LoadFileAsync(Pv), ev = (0, dv.c)(Pv) || ev) : "undefined" !== typeof HTMLImageElement && Pv instanceof HTMLImageElement && (hv = await Sv.Tools.LoadFileAsync(Pv.src), ev = (0, dv.c)(Pv.src) || ev) : (hv = await Sv.Tools.LoadFileAsync(zv.url), ev = (0, dv.c)(zv.url) || ev)
      } catch {
        return null
      }
      if (hv && !ev && zv.url) {
        const vv = zv.url.match(/^data:([^;,]+)/);
        ev = vv ? vv[1] : (0, dv.c)(zv.url)
      }
      return hv && ev ? {
        data: hv,
        mimeType: ev
      } : null
    }
    const cP = 1e-6,
      GP = new Cv.Color3(.04, .04, .04),
      mP = 1024,
      jP = Cv.Color3.White(),
      fP = Cv.Color3.BlackReadOnly;

    function FP(vv) {
      switch (vv) {
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

    function YP(vv, zv, Pv) {
      if (zv < GP.r) return 0;
      const hv = GP.r,
        Sv = vv * Pv / (1 - GP.r) + zv - 2 * GP.r,
        ev = Sv * Sv - 4 * hv * (GP.r - zv);
      return Gv.Clamp((-Sv + Math.sqrt(ev)) / (2 * hv), 0, 1)
    }

    function nP(vv) {
      const zv = vv.diffuseColor.toLinearSpace(vv.rD().ma().useExactSrgbConversions).scale(.5),
        Pv = vv.alpha,
        hv = function(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Zv.j(0, 1),
            Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Zv.j(0, .1),
            hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Zv.j(0, .1),
            Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Zv.j(1300, .1);
          return function(vv, zv, Pv, hv, Sv) {
            return (1 - vv) * (1 - vv) * (1 - vv) * zv + 3 * (1 - vv) * (1 - vv) * vv * Pv + 3 * (1 - vv) * vv * vv * hv + vv * vv * vv * Sv
          }(Math.pow(vv / Sv.x, .333333), zv.y, Pv.y, hv.y, Sv.y)
        }(Gv.Clamp(vv.specularPower, 0, mP));
      return {
        baseColorFactor: [zv.r, zv.g, zv.b, Pv],
        metallicFactor: 0,
        roughnessFactor: hv
      }
    }

    function OP(vv, zv) {
      zv.needAlphaBlending() ? vv.alphaMode = "BLEND" : zv.needAlphaTesting() && (vv.alphaMode = "MASK", vv.alphaCutoff = zv.alphaCutOff)
    }

    function DP(vv, zv, Pv) {
      const hv = new Uint8Array(vv * zv * 4);
      for (let Sv = 0; Sv < hv.length; Sv += 4) hv[Sv] = hv[Sv + 1] = hv[Sv + 2] = hv[Sv + 3] = 255;
      return fv.e.CreateRGBATexture(hv, vv, zv, Pv)
    }

    function KP(vv) {
      if (vv instanceof Uint8Array) {
        const zv = vv.length,
          Pv = new Float32Array(vv.length);
        for (let hv = 0; hv < zv; ++hv) Pv[hv] = vv[hv] / 255;
        return Pv
      }
      if (vv instanceof Float32Array) return vv;
      throw new Error("Unsupported pixel format!")
    }
    class VP {
      constructor(vv) {
        this._exporter = vv, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(vv) {
        return vv ? this._textureMap.get(vv.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(vv, zv) {
        const Pv = nP(vv),
          hv = {
            name: vv.name
          };
        if (null == vv.backFaceCulling || vv.backFaceCulling || (vv.twoSidedLighting || Sv.Tools.Warn(vv.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), hv.doubleSided = !0), zv) {
          const zv = [],
            Sv = vv.diffuseTexture;
          Sv && zv.push(this.exportTextureAsync(Sv).then((vv => {
            vv && (Pv.baseColorTexture = vv)
          })));
          const ev = vv.bumpTexture;
          ev && zv.push(this.exportTextureAsync(ev).then((vv => {
            vv && (hv.normalTexture = vv, 1 !== ev.level && (hv.normalTexture.scale = ev.level))
          })));
          const gv = vv.emissiveTexture;
          gv && (hv.emissiveFactor = [1, 1, 1], zv.push(this.exportTextureAsync(gv).then((vv => {
            vv && (hv.emissiveTexture = vv)
          }))));
          const pv = vv.ambientTexture;
          pv && zv.push(this.exportTextureAsync(pv).then((vv => {
            if (vv) {
              const zv = {
                index: vv.index
              };
              hv.occlusionTexture = zv
            }
          }))), zv.length > 0 && (this._exporter._materialNeedsUVsSet.add(vv), await Promise.all(zv))
        }(vv.alpha < 1 || vv.opacityTexture) && (vv.alphaMode === Fv.d.ALPHA_COMBINE ? hv.alphaMode = "BLEND" : Sv.Tools.Warn(vv.name + ": glTF 2.0 does not support alpha mode: " + vv.alphaMode.toString())), vv.emissiveColor && !vv.emissiveColor.equalsWithEpsilon(fP, cP) && (hv.emissiveFactor = vv.emissiveColor.pPv()), hv.pbrMetallicRoughness = Pv, OP(hv, vv), await this._finishMaterialAsync(hv, vv);
        const ev = this._exporter._materials;
        return ev.push(hv), ev.length - 1
      }
      async _finishMaterialAsync(vv, zv) {
        const Pv = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", vv, zv),
          hv = [];
        for (const Sv of Pv) hv.push(this.exportTextureAsync(Sv));
        await Promise.all(hv), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", vv, zv)
      }
      _resizeTexturesToSameDimensions(vv, zv, Pv) {
        const hv = vv ? vv.getSize() : {
            width: 0,
            height: 0
          },
          Sv = zv ? zv.getSize() : {
            width: 0,
            height: 0
          };
        let ev, gv;
        return hv.width < Sv.width ? (ev = vv && vv instanceof jv.d ? mv.f.CreateResizedCopy(vv, Sv.width, Sv.height, !0) : DP(Sv.width, Sv.height, Pv), gv = zv) : hv.width > Sv.width ? (gv = zv && zv instanceof jv.d ? mv.f.CreateResizedCopy(zv, hv.width, hv.height, !0) : DP(hv.width, hv.height, Pv), ev = vv) : (ev = vv, gv = zv), {
          texture1: ev,
          texture2: gv
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(vv, zv, Pv) {
        const hv = new Array;
        if (!vv && !zv) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const Sv = vv ? vv.rD() : zv ? zv.rD() : null;
        if (Sv) {
          const ev = this._resizeTexturesToSameDimensions(vv, zv, Sv),
            gv = ev.texture1?.getSize();
          let pv, dv;
          const Nv = gv.width,
            lv = gv.height,
            Tv = await ev.texture1.readPixels(),
            Wv = await ev.texture2.readPixels();
          if (!Tv) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (pv = KP(Tv), !Wv) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          dv = KP(Wv);
          const wv = dv.byteLength,
            av = new Uint8Array(wv),
            sv = new Uint8Array(wv),
            iv = 4,
            cv = new Cv.Color3(0, 0, 0);
          let Gv = 0,
            mv = 0;
          for (let vv = 0; vv < lv; ++vv)
            for (let zv = 0; zv < Nv; ++zv) {
              const hv = (Nv * vv + zv) * iv,
                gv = {
                  diffuseColor: new Cv.Color3(pv[hv], pv[hv + 1], pv[hv + 2]).toLinearSpace(Sv.ma().useExactSrgbConversions).multiply(Pv.diffuseColor),
                  specularColor: new Cv.Color3(dv[hv], dv[hv + 1], dv[hv + 2]).toLinearSpace(Sv.ma().useExactSrgbConversions).multiply(Pv.specularColor),
                  glossiness: dv[hv + 3] * Pv.glossiness
                },
                lv = this._convertSpecularGlossinessToMetallicRoughness(gv);
              cv.r = Math.max(cv.r, lv.baseColor.r), cv.g = Math.max(cv.g, lv.baseColor.g), cv.b = Math.max(cv.b, lv.baseColor.b), Gv = Math.max(Gv, lv.metallic), mv = Math.max(mv, lv.roughness), sv[hv] = 255 * lv.baseColor.r, sv[hv + 1] = 255 * lv.baseColor.g, sv[hv + 2] = 255 * lv.baseColor.b, sv[hv + 3] = ev.texture1.hasAlpha ? 255 * pv[hv + 3] : 255, av[hv] = 0, av[hv + 1] = 255 * lv.roughness, av[hv + 2] = 255 * lv.metallic, av[hv + 3] = 255
            }
          const jv = {
            baseColor: cv,
            metallic: Gv,
            roughness: mv
          };
          let fv = !1,
            Fv = !1;
          for (let vv = 0; vv < lv; ++vv)
            for (let zv = 0; zv < Nv; ++zv) {
              const Pv = (Nv * vv + zv) * iv;
              sv[Pv] /= jv.baseColor.r > cP ? jv.baseColor.r : 1, sv[Pv + 1] /= jv.baseColor.g > cP ? jv.baseColor.g : 1, sv[Pv + 2] /= jv.baseColor.b > cP ? jv.baseColor.b : 1;
              const hv = Cv.Color3.FromInts(sv[Pv], sv[Pv + 1], sv[Pv + 2]).toGammaSpace(Sv.ma().useExactSrgbConversions);
              sv[Pv] = 255 * hv.r, sv[Pv + 1] = 255 * hv.g, sv[Pv + 2] = 255 * hv.b, hv.equalsWithEpsilon(jP, cP) || (Fv = !0), av[Pv + 1] /= jv.roughness > cP ? jv.roughness : 1, av[Pv + 2] /= jv.metallic > cP ? jv.metallic : 1;
              Cv.Color3.FromInts(255, av[Pv + 1], av[Pv + 2]).equalsWithEpsilon(jP, cP) || (fv = !0)
            }
          return fv && hv.push((0, Yv.EncodeImageAsync)(av, Nv, lv).then((vv => {
            jv.metallicRoughnessTextureData = vv
          }))), Fv && hv.push((0, Yv.EncodeImageAsync)(sv, Nv, lv).then((vv => {
            jv.baseColorTextureData = vv
          }))), await Promise.all(hv).then((() => jv))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(vv) {
        const zv = this._getPerceivedBrightness(vv.diffuseColor),
          Pv = this._getPerceivedBrightness(vv.specularColor),
          hv = 1 - this._getMaxComponent(vv.specularColor),
          Sv = YP(zv, Pv, hv),
          ev = vv.diffuseColor.scale(hv / (1 - GP.r) / Math.max(1 - Sv, cP)),
          gv = vv.specularColor.subtract(GP.scale(1 - Sv)).scale(1 / Math.max(Sv, cP));
        let pv = Cv.Color3.Lerp(ev, gv, Sv * Sv);
        pv = pv.clampToRef(0, 1, pv);
        return {
          baseColor: pv,
          metallic: Sv,
          roughness: 1 - vv.glossiness
        }
      }
      _getPerceivedBrightness(vv) {
        return Math.sqrt(.299 * vv.r * vv.r + .587 * vv.g * vv.g + .114 * vv.b * vv.b)
      }
      _getMaxComponent(vv) {
        return Math.max(vv.r, Math.max(vv.g, vv.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(vv, zv, Pv, hv, Sv, ev, gv, pv, dv) {
        const Nv = [],
          lv = {
            baseColor: vv,
            metallic: zv,
            roughness: Pv
          };
        if (dv)
          if (gv instanceof Xz) {
            if (gv.geometryOpacityTexture) {
              const vv = hv && hv.getInternalTexture() ? hv.getInternalTexture().uniqueId : 0,
                zv = gv.geometryOpacityTexture && gv.geometryOpacityTexture.getInternalTexture() ? gv.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                Pv = Number(`${vv}${zv}`),
                Sv = this._textureMap.get(Pv);
              Sv ? pv.baseColorTexture = Sv : Nv.push(gP("baseColorOpacityTexture", NP(hv ? pP(hv, 0) : dP(1), hv ? pP(hv, 1) : dP(1), hv ? pP(hv, 2) : dP(1), pP(gv.geometryOpacityTexture, 0)), gv.rD()).then((async vv => {
                const zv = await this.exportTextureAsync(vv, Pv);
                zv && (pv.baseColorTexture = zv)
              })))
            } else hv && Nv.push(this.exportTextureAsync(hv).then((vv => {
              vv && (pv.baseColorTexture = vv)
            })));
            if (gv._useMetallicFromMetallicTextureBlue && Sv) Nv.push(this.exportTextureAsync(Sv).then((vv => {
              vv && (pv.metallicRoughnessTexture = vv)
            })));
            else if (ev || Sv) {
              const vv = Sv && Sv.getInternalTexture() ? Sv.getInternalTexture().uniqueId : 0,
                zv = ev && ev.getInternalTexture() ? ev.getInternalTexture().uniqueId : 0,
                Pv = Number(`${vv}${zv}`),
                hv = this._textureMap.get(Pv);
              hv ? pv.metallicRoughnessTexture = hv : Nv.push(gP("MetalRoughTexture", NP(gv.ambientOcclusionTexture ? pP(gv.ambientOcclusionTexture, 0) : dP(1), ev ? pP(ev, 0) : dP(1), Sv ? pP(Sv, 0) : dP(1)), gv.rD()).then((async vv => {
                const zv = await this.exportTextureAsync(vv, Pv);
                zv && (pv.metallicRoughnessTexture = zv)
              })))
            }
          } else hv && Nv.push(this.exportTextureAsync(hv).then((vv => {
            vv && (pv.baseColorTexture = vv)
          }))), Sv && Nv.push(this.exportTextureAsync(Sv).then((vv => {
            vv && (pv.metallicRoughnessTexture = vv)
          })));
        return Nv.length > 0 && (this._exporter._materialNeedsUVsSet.add(gv), await Promise.all(Nv)), lv
      }
      _getTextureSampler(vv) {
        const zv = {};
        if (!vv || !(vv instanceof jv.d)) return zv;
        const Pv = this._getGLTFTextureWrapMode(vv.wrapU);
        10497 !== Pv && (zv.wrapS = Pv);
        const hv = this._getGLTFTextureWrapMode(vv.wrapV);
        switch (10497 !== hv && (zv.wrapT = hv), vv.samplingMode) {
          case jv.d.LINEAR_LINEAR:
            zv.magFilter = 9729, zv.minFilter = 9729;
            break;
          case jv.d.LINEAR_NEAREST:
            zv.magFilter = 9729, zv.minFilter = 9728;
            break;
          case jv.d.NEAREST_LINEAR:
            zv.magFilter = 9728, zv.minFilter = 9729;
            break;
          case jv.d.NEAREST_LINEAR_MIPLINEAR:
            zv.magFilter = 9728, zv.minFilter = 9987;
            break;
          case jv.d.NEAREST_NEAREST:
            zv.magFilter = 9728, zv.minFilter = 9728;
            break;
          case jv.d.NEAREST_LINEAR_MIPNEAREST:
            zv.magFilter = 9728, zv.minFilter = 9985;
            break;
          case jv.d.LINEAR_NEAREST_MIPNEAREST:
            zv.magFilter = 9729, zv.minFilter = 9984;
            break;
          case jv.d.LINEAR_NEAREST_MIPLINEAR:
            zv.magFilter = 9729, zv.minFilter = 9986;
            break;
          case jv.d.NEAREST_NEAREST_MIPLINEAR:
            zv.magFilter = 9728, zv.minFilter = 9986;
            break;
          case jv.d.LINEAR_LINEAR_MIPLINEAR:
            zv.magFilter = 9729, zv.minFilter = 9987;
            break;
          case jv.d.LINEAR_LINEAR_MIPNEAREST:
            zv.magFilter = 9729, zv.minFilter = 9985;
            break;
          case jv.d.NEAREST_NEAREST_MIPNEAREST:
            zv.magFilter = 9728, zv.minFilter = 9984
        }
        return zv
      }
      _getGLTFTextureWrapMode(vv) {
        switch (vv) {
          case jv.d.WRAP_ADDRESSMODE:
            return 10497;
          case jv.d.CLAMP_ADDRESSMODE:
            return 33071;
          case jv.d.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return Sv.Tools.Error(`Unsupported Texture Wrap Mode ${vv}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(vv, zv, Pv) {
        const hv = {
            diffuseColor: vv._albedoColor,
            specularColor: vv._reflectivityColor,
            glossiness: vv._microSurface
          },
          Sv = vv._albedoTexture,
          ev = vv._reflectivityTexture,
          gv = vv._useMicroSurfaceFromReflectivityMapAlpha;
        if (ev && !gv) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((Sv || ev) && Pv) {
          this._exporter._materialNeedsUVsSet.add(vv);
          const Pv = this._exportTextureSampler(Sv || ev),
            gv = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(Sv, ev, hv),
            pv = this._exporter._textures;
          if (gv.baseColorTextureData) {
            const vv = await this._exportImageAsync(`baseColor${pv.length}`, gv.baseColorTextureData);
            zv.baseColorTexture = this._exportTextureInfo(vv, Pv, Sv?.coordinatesIndex)
          }
          if (gv.metallicRoughnessTextureData) {
            const vv = await this._exportImageAsync(`metallicRoughness${pv.length}`, gv.metallicRoughnessTextureData);
            zv.metallicRoughnessTexture = this._exportTextureInfo(vv, Pv, ev?.coordinatesIndex)
          }
          return gv
        }
        return this._convertSpecularGlossinessToMetallicRoughness(hv)
      }
      async exportPBRMaterialAsync(vv, zv) {
        const Pv = {},
          hv = {
            name: vv.name
          },
          Sv = vv.isMetallicWorkflow();
        if (Sv) {
          const zv = vv._albedoColor,
            hv = vv.alpha;
          zv && (Pv.baseColorFactor = [zv.r, zv.g, zv.b, hv])
        }
        const ev = Sv ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(vv._albedoColor, vv._metallic, vv._roughness, vv._albedoTexture, vv._metallicTexture, vv._metallicTexture, vv, Pv, zv) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(vv, Pv, zv);
        await this._setMetallicRoughnessPbrMaterialAsync(ev, vv, hv, Pv, zv), await this._finishMaterialAsync(hv, vv);
        const gv = this._exporter._materials;
        return gv.push(hv), gv.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(vv, zv, Pv, hv, ev) {
        if (OP(Pv, zv), vv.baseColor.equalsWithEpsilon(jP, cP) && Gv.WithinEpsilon(zv.alpha, 1, cP) || (hv.baseColorFactor = [vv.baseColor.r, vv.baseColor.g, vv.baseColor.b, zv.alpha]), null != vv.metallic && 1 !== vv.metallic && (hv.metallicFactor = vv.metallic), null != vv.roughness && 1 !== vv.roughness && (hv.roughnessFactor = vv.roughness), null == zv.backFaceCulling || zv.backFaceCulling || (zv._twoSidedLighting || Sv.Tools.Warn(zv.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), Pv.doubleSided = !0), ev) {
          const vv = [],
            Sv = zv instanceof fz ? zv._bumpTexture : zv.geometryNormalTexture;
          Sv && vv.push(this.exportTextureAsync(Sv).then((vv => {
            vv && (Pv.normalTexture = vv, 1 !== Sv.level && (Pv.normalTexture.scale = Sv.level))
          })));
          const ev = zv instanceof fz ? zv._ambientTexture : zv.ambientOcclusionTexture;
          ev && vv.push(new Promise((async vv => {
            if (zv instanceof Xz && hv.metallicRoughnessTexture) {
              const zv = this._exportTextureSampler(ev),
                Pv = this._exporter._textures[hv.metallicRoughnessTexture.index].source,
                Sv = this._exportTextureInfo(Pv, zv, ev.coordinatesIndex);
              return this._textureMap.set(ev.uniqueId, Sv), this._exporter._extensionsPostExportTextures("exporter", Sv, ev), vv(Sv)
            }
            return vv(await this.exportTextureAsync(ev))
          })).then((async vv => {
            if (vv) {
              const hv = {
                index: vv.index,
                texCoord: vv.texCoord,
                extensions: vv.extensions
              };
              Pv.occlusionTexture = hv, hv.strength = zv instanceof fz ? zv._ambientTextureStrength : zv.ambientOcclusionTexture.level
            }
          })));
          const gv = zv instanceof fz ? zv._emissiveTexture : zv.emissionColorTexture;
          gv && vv.push(this.exportTextureAsync(gv).then((vv => {
            vv && (Pv.emissiveTexture = vv)
          }))), vv.length > 0 && (this._exporter._materialNeedsUVsSet.add(zv), await Promise.all(vv))
        }
        const gv = zv instanceof fz ? zv._emissiveColor : zv.emissionColor;
        gv.equalsWithEpsilon(fP, cP) || (Pv.emissiveFactor = gv.pPv()), Pv.pbrMetallicRoughness = hv
      }
      async exportOpenPBRMaterialAsync(vv, zv) {
        const Pv = {},
          hv = {
            name: vv.name
          },
          Sv = vv.baseColor,
          ev = vv.geometryOpacity;
        Sv && (Pv.baseColorFactor = [Sv.r, Sv.g, Sv.b, ev]);
        const gv = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(vv.baseColor, vv.baseMetalness, vv.specularRoughness, vv.baseColorTexture, vv.baseMetalnessTexture, vv.specularRoughnessTexture, vv, Pv, zv);
        await this._setMetallicRoughnessPbrMaterialAsync(gv, vv, hv, Pv, zv), await this._finishMaterialAsync(hv, vv);
        const pv = this._exporter._materials;
        return pv.push(hv), pv.length - 1
      }
      async exportTextureAsync(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Pv = this._textureMap.get(zv ?? vv.uniqueId);
        if (Pv) return Pv;
        const hv = this._exportTextureSampler(vv),
          Sv = await this._exportTextureImageAsync(vv);
        return Pv = this._exportTextureInfo(Sv, hv, vv.coordinatesIndex), this._textureMap.set(zv ?? vv.uniqueId, Pv), this._exporter._extensionsPostExportTextures("exporter", Pv, vv), Pv
      }
      async _exportTextureImageAsync(vv) {
        const zv = vv.mimeType ?? "none",
          Pv = this._internalTextureToImage,
          hv = vv.getInternalTexture().uniqueId;
        Pv[hv] = Pv[hv] || {};
        let ev = Pv[hv][zv];
        return void 0 === ev && (ev = (async () => {
          const Pv = await iP(vv);
          if (Pv && FP(Pv.mimeType) && ("none" === zv || Pv.mimeType === zv)) return await this._exportImageAsync(vv.name, new Blob([Pv.data], {
            type: Pv.mimeType
          }));
          let hv = "image/png";
          "none" !== zv && (FP(zv) ? hv = zv : (hv = "image/png", Sv.Tools.Warn(`Unsupported media type: ${zv}. Exporting texture as PNG.`)));
          const ev = vv.getSize(),
            gv = await (0, mv.d)(vv),
            pv = await (0, Yv.EncodeImageAsync)(gv, ev.width, ev.height, hv);
          return await this._exportImageAsync(vv.name, pv)
        })(), Pv[hv][zv] = ev), await ev
      }
      async _exportImageAsync(vv, zv) {
        const Pv = this._exporter._images;
        let hv;
        if (this._exporter._shouldUseGlb) {
          hv = {
            name: vv,
            mimeType: zv.type,
            bufferView: void 0
          };
          const Pv = await zv.arrayBuffer(),
            Sv = this._exporter._bufferManager.createBufferView(new Uint8Array(Pv));
          this._exporter._bufferManager.setBufferView(hv, Sv)
        } else {
          const ev = vv.replace(/\.\/|\/|\.\\|\\/g, "_"),
            gv = function(vv) {
              switch (vv) {
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
            }(zv.type);
          let pv = ev + gv;
          Pv.some((vv => vv.uri === pv)) && (pv = `${ev}_${Sv.Tools.RandomId()}${gv}`), hv = {
            name: vv,
            uri: pv
          }, this._exporter._imageData[pv] = zv
        }
        return Pv.push(hv), Pv.length - 1
      }
      _exportTextureInfo(vv, zv, Pv) {
        const hv = this._exporter._textures;
        let Sv = hv.findIndex((Pv => Pv.sampler == zv && Pv.source === vv)); - 1 === Sv && (Sv = hv.length, hv.push({
          source: vv,
          sampler: zv
        }));
        const ev = {
          index: Sv
        };
        return Pv && (ev.texCoord = Pv), ev
      }
      _exportTextureSampler(vv) {
        const zv = this._getTextureSampler(vv),
          Pv = this._exporter._samplers,
          hv = Pv.findIndex((vv => vv.minFilter === zv.minFilter && vv.magFilter === zv.magFilter && vv.wrapS === zv.wrapS && vv.wrapT === zv.wrapT));
        return -1 !== hv ? hv : (Pv.push(zv), Pv.length - 1)
      }
    }
    var UP = Pv(39361),
      RP = Pv(39511);
    (0, RP.d)();
    var xP = Pv(36599);
    const tP = hv.Matrix.Compose(new hv.fa(-1, 1, 1), hv.Quaternion.Identity(), hv.fa.Zero());

    function qP(vv, zv) {
      if (!(vv instanceof Tv.b)) return !1;
      if (zv) {
        if (!vv.getWorldMatrix().equalsWithEpsilon(hv.Matrix.IdentityReadOnly, xP.e)) return !1
      } else {
        if (!vv.getWorldMatrix().multiplyToRef(tP, hv.TmpVectors.Matrix[0]).equalsWithEpsilon(hv.Matrix.IdentityReadOnly, xP.e)) return !1
      }
      return !(vv instanceof Wv.e && vv.geometry)
    }
    const IP = hv.fa.ZeroReadOnly,
      QP = hv.Quaternion.Identity(),
      ZP = hv.fa.OneReadOnly,
      AP = new hv.fa(-1, 1, 1);

    function LP(vv, zv) {
      const {
        byteOffset: Pv,
        byteStride: hv,
        type: Sv,
        normalized: ev
      } = vv, gv = vv.getSize(), pv = zv.reduce(((vv, zv) => zv.getTotalVertices() > vv ? zv.getTotalVertices() : vv), -Number.MAX_VALUE);
      return {
        byteOffset: Pv,
        byteStride: hv,
        componentCount: gv,
        type: Sv,
        count: pv * gv,
        normalized: ev,
        totalVertices: pv,
        kind: vv.getKind()
      }
    }

    function HP(vv) {
      switch (vv) {
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

    function MP(vv) {
      switch (vv) {
        case lv.i.PositionKind:
        case lv.i.NormalKind:
        case lv.i.TangentKind:
        case lv.i.ColorKind:
        case lv.i.MatricesIndicesKind:
        case lv.i.MatricesIndicesExtraKind:
        case lv.i.MatricesWeightsKind:
        case lv.i.MatricesWeightsExtraKind:
        case lv.i.UVKind:
        case lv.i.UV2Kind:
        case lv.i.UV3Kind:
        case lv.i.UV4Kind:
        case lv.i.UV5Kind:
        case lv.i.UV6Kind:
          return !0
      }
      return !1
    }

    function yP(vv) {
      const zv = Math.sqrt(vv.x * vv.x + vv.y * vv.y + vv.z * vv.z);
      zv > 0 && (vv.x /= zv, vv.y /= zv, vv.z /= zv)
    }

    function BP(vv) {
      return vv.x *= -1, vv
    }

    function JP(vv) {
      if (vv.x * vv.x + vv.y * vv.y > .5) {
        const zv = Math.abs(vv.x),
          Pv = Math.abs(vv.y);
        if (zv > Pv) {
          const Pv = Math.sign(vv.x);
          vv.x = zv, vv.y *= -Pv, vv.z *= -Pv, vv.w *= Pv
        } else {
          const zv = Math.sign(vv.y);
          vv.x *= -zv, vv.y = Pv, vv.z *= zv, vv.w *= -zv
        }
      } else {
        const zv = Math.abs(vv.z),
          Pv = Math.abs(vv.w);
        if (zv > Pv) {
          const Pv = Math.sign(vv.z);
          vv.x *= -Pv, vv.y *= Pv, vv.z = zv, vv.w *= -Pv
        } else {
          const zv = Math.sign(vv.w);
          vv.x *= zv, vv.y *= -zv, vv.z *= -zv, vv.w = Pv
        }
      }
      return vv
    }

    function EP(vv) {
      vv.f_(-vv.z, vv.w, vv.x, -vv.y)
    }

    function oP(vv, zv) {
      const Pv = hv.fa.FromArrayToRef(zv.translation || [0, 0, 0], 0, hv.TmpVectors.fa[0]),
        Sv = hv.Quaternion.FromArrayToRef(zv.rotation || [0, 0, 0, 1], 0, hv.TmpVectors.Quaternion[0]),
        ev = hv.Matrix.ComposeToRef(ZP, Sv, Pv, hv.TmpVectors.Matrix[0]),
        gv = hv.fa.FromArrayToRef(vv.translation || [0, 0, 0], 0, hv.TmpVectors.fa[2]),
        pv = hv.Quaternion.FromArrayToRef(vv.rotation || [0, 0, 0, 1], 0, hv.TmpVectors.Quaternion[1]),
        dv = hv.Matrix.ComposeToRef(ZP, pv, gv, hv.TmpVectors.Matrix[1]);
      ev.multiplyToRef(dv, dv), dv.decompose(void 0, Sv, Pv), Pv.equalsWithEpsilon(IP, xP.e) ? delete zv.translation : zv.translation = Pv.pPv(), Sv.equalsWithEpsilon(QP, xP.e) ? delete zv.rotation : zv.rotation = Sv.pPv(), zv.scale && delete zv.scale
    }

    function bP(vv, zv) {
      if (!(zv instanceof Tv.b)) return !1;
      if (!(1 === zv.getChildren().length && 0 === vv.getChildren().length && vv.parent === zv)) return !1;
      const Pv = vv.rD(),
        hv = vv instanceof RP.e && !Pv.useRightHandedSystem ? AP : ZP;
      return !!zv.pp.equalsWithEpsilon(hv, xP.e) || (Dv.d.Warn(`Cannot collapse node ${vv.name} into parent node ${zv.name} with modified scaling.`), !1)
    }

    function rP(vv) {
      if (vv instanceof Array) {
        const zv = new Float32Array(vv);
        return new Uint8Array(zv.buffer, zv.byteOffset, zv.byteLength)
      }
      return ArrayBuffer.isView(vv) ? new Uint8Array(vv.buffer, vv.byteOffset, vv.byteLength) : new Uint8Array(vv)
    }

    function kP(vv, zv) {
      for (const [Pv, hv] of Object.entries(vv)) {
        const Sv = zv[Pv];
        (Array.isArray(hv) && Array.isArray(Sv) && XP(hv, Sv) || hv === Sv) && delete vv[Pv]
      }
      return vv
    }

    function XP(vv, zv) {
      return vv.length === zv.length && vv.every(((vv, Pv) => vv === zv[Pv]))
    }
    const uP = new Map([
      [Int8Array, (vv, zv, Pv) => vv.setInt8(zv, Pv)],
      [Uint8Array, (vv, zv, Pv) => vv.setUint8(zv, Pv)],
      [Uint8ClampedArray, (vv, zv, Pv) => vv.setUint8(zv, Pv)],
      [Int16Array, (vv, zv, Pv) => vv.setInt16(zv, Pv, !0)],
      [Uint16Array, (vv, zv, Pv) => vv.setUint16(zv, Pv, !0)],
      [Int32Array, (vv, zv, Pv) => vv.setInt32(zv, Pv, !0)],
      [Uint32Array, (vv, zv, Pv) => vv.setUint32(zv, Pv, !0)],
      [Float32Array, (vv, zv, Pv) => vv.setFloat32(zv, Pv, !0)],
      [Float64Array, (vv, zv, Pv) => vv.setFloat64(zv, Pv, !0)]
    ]);
    class vh {
      writeTypedArray(vv) {
        this._checkGrowBuffer(vv.byteLength);
        const zv = uP.get(vv.constructor);
        for (let Pv = 0; Pv < vv.length; Pv++) zv(this._dataView, this._byteOffset, vv[Pv]), this._byteOffset += vv.BYTES_PER_ELEMENT
      }
      constructor(vv) {
        this._data = new Uint8Array(vv), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(vv) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, vv), this._byteOffset++
      }
      writeInt8(vv) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, vv), this._byteOffset++
      }
      writeInt16(vv) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, vv, !0), this._byteOffset += 2
      }
      writeUInt16(vv) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, vv, !0), this._byteOffset += 2
      }
      writeInt32(vv) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, vv, !0), this._byteOffset += 4
      }
      writeUInt32(vv) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, vv, !0), this._byteOffset += 4
      }
      writeFloat32(vv) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, vv, !0), this._byteOffset += 4
      }
      writeFloat64(vv) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, vv, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(vv) {
        const zv = this.byteOffset + vv;
        if (zv > this._data.byteLength) {
          const vv = new Uint8Array(2 * zv);
          vv.set(this._data), this._data = vv, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function zh(vv) {
      return vv % 4 === 0 ? 4 : vv % 2 === 0 ? 2 : 1
    }
    class Ph {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(vv) {
        let zv = 0;
        this._bufferViewToData.forEach((vv => {
          zv += vv.byteLength
        }));
        const Pv = new vh(zv),
          hv = Array.from(this._bufferViewToData.keys()).sort(((vv, zv) => zh(zv.byteLength) - zh(vv.byteLength)));
        for (const Sv of hv) {
          Sv.byteOffset = Pv.byteOffset, vv.push(Sv);
          const zv = vv.length - 1,
            hv = this.getPropertiesWithBufferView(Sv);
          for (const vv of hv) vv.bufferView = zv;
          Pv.writeTypedArray(this._bufferViewToData.get(Sv)), this._bufferViewToData.delete(Sv)
        }
        return Pv.getOutputData()
      }
      createBufferView(vv, zv) {
        const Pv = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: vv.byteLength,
          byteStride: zv
        };
        return this._bufferViewToData.set(Pv, vv), Pv
      }
      createAccessor(vv, zv, Pv, hv, Sv, ev, gv) {
        this._verifyBufferView(vv);
        const pv = {
          bufferView: void 0,
          componentType: Pv,
          count: hv,
          type: zv,
          min: ev?.min,
          max: ev?.max,
          normalized: gv,
          byteOffset: Sv
        };
        return this.setBufferView(pv, vv), this._accessorToBufferView.set(pv, vv), pv
      }
      setBufferView(vv, zv) {
        this._verifyBufferView(zv);
        this.getPropertiesWithBufferView(zv).push(vv)
      }
      removeBufferView(vv) {
        const zv = this.getPropertiesWithBufferView(vv);
        for (const Pv of zv) void 0 !== Pv.bufferView && delete Pv.bufferView;
        this._bufferViewToData.delete(vv), this._bufferViewToProperties.delete(vv), this._accessorToBufferView.forEach(((zv, Pv) => {
          zv === vv && (void 0 !== Pv.byteOffset && delete Pv.byteOffset, this._accessorToBufferView.delete(Pv))
        }))
      }
      getBufferView(vv) {
        const zv = this._accessorToBufferView.get(vv);
        return this._verifyBufferView(zv), zv
      }
      getPropertiesWithBufferView(vv) {
        return this._verifyBufferView(vv), this._bufferViewToProperties.set(vv, this._bufferViewToProperties.get(vv) ?? []), this._bufferViewToProperties.get(vv)
      }
      getData(vv) {
        return this._verifyBufferView(vv), this._bufferViewToData.get(vv)
      }
      _verifyBufferView(vv) {
        if (void 0 === vv || !this._bufferViewToData.has(vv)) throw new Error(`BufferView ${vv} not found in BufferManager.`)
      }
    }
    var hh = Pv(39515);
    (0, hh.e)();
    var Sh = Pv(39767);
    (0, Sh.e)();
    var eh = Pv(39560),
      gh = Pv(40396);
    (0, gh.e)();
    let ph = (() => {
      var vv;
      let zv, Pv, hv = [],
        Sv = [],
        ev = [],
        gv = [];
      return vv = class {
        get influence() {
          return this._influence
        }
        set influence(vv) {
          if (this._influence === vv) return;
          const zv = this._influence;
          this._influence = vv, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === zv || 0 === vv)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(vv) {
          this._animationPropertiesOverride = vv
        }
        constructor(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            pv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = vv, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new vP.c, this._onDataLayoutChanged = new vP.c, this.id = (0, nv.f)(this, hv, void 0), this.morphTargetManager = ((0, nv.f)(this, Sv), (0, nv.f)(this, ev, null)), this._animationPropertiesOverride = ((0, nv.f)(this, gv), null), this.id = vv, this.morphTargetManager = pv, this._scene = Pv || sv.e.LastCreatedScene, this.influence = zv, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        Hev(vv) {
          const zv = this.hasPositions;
          this._positions = vv, zv !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(vv) {
          const zv = this.hasNormals;
          this._normals = vv, zv !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(vv) {
          const zv = this.hasTangents;
          this._tangents = vv, zv !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(vv) {
          const zv = this.hasUVs;
          this._uvs = vv, zv !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(vv) {
          const zv = this.hasUV2s;
          this._uv2s = vv, zv !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(vv) {
          const zv = this.hasColors;
          this._colors = vv, zv !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const zv = Fz.c.Clone((() => new vv(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return zv._positions = this._positions, zv._normals = this._normals, zv._tangents = this._tangents, zv._uvs = this._uvs, zv._uv2s = this._uv2s, zv._colors = this._colors, zv
        }
        serialize() {
          const vv = {};
          return vv.name = this.name, vv.influence = this.influence, null != this.id && (vv.id = this.id), vv.uniqueId = this.uniqueId, vv.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (vv.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (vv.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (vv.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (vv.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (vv.colors = Array.prototype.slice.call(this.getColors())), Fz.c.AppendSerializedAnimations(this, vv), vv
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(zv, Pv) {
          let hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const Sv = new vv(zv.name, zv.influence, Pv, hv);
          if (Sv.Hev(zv.positions), null != zv.id && (Sv.id = zv.id), zv.normals && Sv.setNormals(zv.normals), zv.tangents && Sv.setTangents(zv.tangents), zv.uvs && Sv.setUVs(zv.uvs), zv.uv2s && Sv.setUV2s(zv.uv2s), zv.colors && Sv.setColors(zv.colors), zv.animations) {
            for (let vv = 0; vv < zv.animations.length; vv++) {
              const Pv = zv.animations[vv],
                hv = (0, Hz.b)("BABYLON.Animation");
              hv && Sv.animations.push(hv.Parse(Pv))
            }
            zv.autoAnimate && Pv && Pv.beginAnimation(Sv, zv.autoAnimateFrom, zv.autoAnimateTo, zv.autoAnimateLoop, zv.autoAnimateSpeed || 1)
          }
          return Sv
        }
        static FromMesh(zv, Pv, hv) {
          Pv || (Pv = zv.name);
          const Sv = new vv(Pv, hv, zv.rD(), zv.morphTargetManager);
          return Sv.Hev(zv.getVerticesData(Av.k.PositionKind)), zv.isVerticesDataPresent(Av.k.NormalKind) && Sv.setNormals(zv.getVerticesData(Av.k.NormalKind)), zv.isVerticesDataPresent(Av.k.TangentKind) && Sv.setTangents(zv.getVerticesData(Av.k.TangentKind)), zv.isVerticesDataPresent(Av.k.UVKind) && Sv.setUVs(zv.getVerticesData(Av.k.UVKind)), zv.isVerticesDataPresent(Av.k.UV2Kind) && Sv.setUV2s(zv.getVerticesData(Av.k.UV2Kind)), zv.isVerticesDataPresent(Av.k.ColorKind) && Sv.setColors(zv.getVerticesData(Av.k.ColorKind)), Sv
        }
      }, (() => {
        const pv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zv = [(0, Ov.L)()], Pv = [(0, Ov.L)()], (0, nv.e)(null, null, zv, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: vv => "id" in vv,
            get: vv => vv.id,
            set: (vv, zv) => {
              vv.id = zv
            }
          },
          metadata: pv
        }, hv, Sv), (0, nv.e)(null, null, Pv, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: vv => "morphTargetManager" in vv,
            get: vv => vv.morphTargetManager,
            set: (vv, zv) => {
              vv.morphTargetManager = zv
            }
          },
          metadata: pv
        }, ev, gv), pv && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: pv
        })
      })(), vv
    })();
    var dh, Nh = Pv(40460),
      lh = Pv(39553);
    ! function(vv) {
      vv[vv.INTANGENT = 0] = "INTANGENT", vv[vv.OUTTANGENT = 1] = "OUTTANGENT"
    }(dh || (dh = {}));
    class Th {
      static _IsTransformable(vv) {
        return vv && (vv instanceof Tv.b || vv instanceof hh.c || vv instanceof lh.c)
      }
      static _CreateNodeAnimation(vv, zv, Pv, hv, ev) {
        if (this._IsTransformable(vv)) {
          const gv = [],
            pv = [],
            dv = zv.getKeys(),
            Nv = Th._CalculateMinMaxKeyFrames(dv),
            lv = Th._DeduceInterpolation(dv, Pv, hv),
            Tv = lv.interpolationType,
            Wv = lv.shouldBakeAnimation;
          if (Wv ? Th._CreateBakedAnimation(vv, zv, Pv, Nv.min, Nv.max, zv.framePerSecond, ev, gv, pv, Nv, hv) : "LINEAR" === Tv || "STEP" === Tv ? Th._CreateLinearOrStepAnimation(vv, zv, Pv, gv, pv, hv) : "CUBICSPLINE" === Tv ? Th._CreateCubicSplineAnimation(vv, zv, Pv, gv, pv, hv) : Th._CreateBakedAnimation(vv, zv, Pv, Nv.min, Nv.max, zv.framePerSecond, ev, gv, pv, Nv, hv), gv.length && pv.length) {
            return {
              inputs: gv,
              outputs: pv,
              samplerInterpolation: Tv,
              inputsMin: Wv ? Nv.min : Sv.Tools.FloatRound(Nv.min / zv.framePerSecond),
              inputsMax: Wv ? Nv.max : Sv.Tools.FloatRound(Nv.max / zv.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(vv) {
        let zv = null,
          Pv = "VEC3",
          hv = !1;
        const ev = vv.targetProperty.split(".");
        switch (ev[0]) {
          case "pp":
            zv = "scale";
            break;
          case "position":
            zv = "translation";
            break;
          case "rotation":
            Pv = "VEC4", zv = "rotation";
            break;
          case "rotationQuaternion":
            Pv = "VEC4", hv = !0, zv = "rotation";
            break;
          case "influence":
            Pv = "SCALAR", zv = "weights";
            break;
          default:
            Sv.Tools.Error(`Unsupported animatable property ${ev[0]}`)
        }
        return zv ? {
          animationChannelTargetPath: zv,
          dataAccessorType: Pv,
          useQuaternion: hv
        } : (Sv.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv, lv) {
        let Tv;
        if (Th._IsTransformable(vv) && vv.animations)
          for (const Wv of vv.animations) {
            if (lv && !lv(Wv)) continue;
            const Sv = Th._DeduceAnimationInfo(Wv);
            Sv && (Tv = {
              name: Wv.name,
              samplers: [],
              channels: []
            }, Th._AddAnimation(`${Wv.name}`, Wv.hasRunningRuntimeAnimations ? zv : Tv, vv, Wv, Sv.dataAccessorType, Sv.animationChannelTargetPath, hv, ev, gv, pv, Sv.useQuaternion, dv, Nv), Tv.samplers.length && Tv.channels.length && Pv.push(Tv))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv, lv) {
        let Tv;
        if (vv instanceof Nh.e) {
          const Sv = vv.morphTargetManager;
          if (Sv)
            for (let Wv = 0; Wv < Sv.numTargets; ++Wv) {
              const wv = Sv.getTarget(Wv);
              for (const av of wv.animations) {
                if (lv && !lv(av)) continue;
                const wv = new gh.b(`${av.name}`, "influence", av.framePerSecond, av.dataType, av.GS, av.enableBlending),
                  sv = [],
                  Cv = av.getKeys();
                for (let vv = 0; vv < Cv.length; ++vv) {
                  const zv = Cv[vv];
                  for (let vv = 0; vv < Sv.numTargets; ++vv) vv == Wv ? sv.push(zv) : sv.push({
                    frame: zv.frame,
                    value: 0
                  })
                }
                wv.setKeys(sv, !0);
                const iv = Th._DeduceAnimationInfo(wv);
                iv && (Tv = {
                  name: wv.name,
                  samplers: [],
                  channels: []
                }, Th._AddAnimation(av.name, av.hasRunningRuntimeAnimations ? zv : Tv, vv, wv, iv.dataAccessorType, iv.animationChannelTargetPath, hv, ev, gv, pv, iv.useQuaternion, dv, Nv, Sv.numTargets), Tv.samplers.length && Tv.channels.length && Pv.push(Tv))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv) {
        let lv;
        if (vv.animationGroups) {
          const Tv = vv.animationGroups;
          for (const Wv of Tv) {
            const Tv = new Map,
              wv = new Map,
              av = new Set,
              sv = Wv.to - Wv.from;
            lv = {
              name: Wv.name,
              channels: [],
              samplers: []
            };
            for (let zv = 0; zv < Wv.targetedAnimations.length; ++zv) {
              const Nv = Wv.targetedAnimations[zv],
                sv = Nv.target,
                Cv = Nv.animation;
              if (dv && !dv(Cv)) continue;
              const iv = pv.has(sv);
              if (this._IsTransformable(sv) || 1 === sv.length && this._IsTransformable(sv[0])) {
                const vv = Th._DeduceAnimationInfo(Nv.animation);
                if (vv) {
                  const zv = this._IsTransformable(sv) ? sv : this._IsTransformable(sv[0]) ? sv[0] : null;
                  zv && Th._AddAnimation(`${Cv.name}`, lv, zv, Cv, vv.dataAccessorType, vv.animationChannelTargetPath, Pv, hv, Sv, ev, vv.useQuaternion, gv, iv)
                }
              } else if (sv instanceof ph || 1 === sv.length && sv[0] instanceof ph) {
                if (Th._DeduceAnimationInfo(Nv.animation)) {
                  const zv = sv instanceof ph ? sv : sv[0];
                  if (zv) {
                    const Pv = vv.morphTargetManagers.find((vv => {
                      for (let Pv = 0; Pv < vv.numTargets; ++Pv)
                        if (vv.getTarget(Pv) === zv) return !0;
                      return !1
                    }));
                    if (Pv) {
                      const hv = vv.meshes.find((vv => vv.morphTargetManager === Pv));
                      hv && (Tv.has(hv) || Tv.set(hv, new Map), Tv.get(hv)?.set(zv, Cv), av.add(hv), wv.set(hv, Cv))
                    }
                  }
                }
              }
            }
            av.forEach((vv => {
              const zv = vv.morphTargetManager;
              let pv = null;
              const dv = [],
                Nv = wv.get(vv).getKeys(),
                av = Nv.length;
              for (let Pv = 0; Pv < av; ++Pv)
                for (let hv = 0; hv < zv.numTargets; ++hv) {
                  const Sv = zv.getTarget(hv),
                    ev = Tv.get(vv);
                  if (ev) {
                    const zv = ev.get(Sv);
                    zv ? (pv || (pv = new gh.b(`${Wv.name}_${vv.name}_MorphWeightAnimation`, "influence", zv.framePerSecond, gh.b.ANIMATIONTYPE_FLOAT, zv.GS, zv.enableBlending)), dv.push(zv.getKeys()[Pv])) : dv.push({
                      frame: Wv.from + sv / av * Pv,
                      value: Sv.influence,
                      inTangent: Nv[0].inTangent ? 0 : void 0,
                      outTangent: Nv[0].outTangent ? 0 : void 0
                    })
                  }
                }
              pv.setKeys(dv, !0);
              const Cv = Th._DeduceAnimationInfo(pv);
              Cv && Th._AddAnimation(`${Wv.name}_${vv.name}_MorphWeightAnimation`, lv, vv, pv, Cv.dataAccessorType, Cv.animationChannelTargetPath, Pv, hv, Sv, ev, Cv.useQuaternion, gv, !1, zv?.numTargets)
            })), lv.channels.length && lv.samplers.length && (Nv?.set(Wv, zv.length), zv.push(lv))
          }
        }
      }
      static _AddAnimation(vv, zv, Pv, Sv, ev, gv, pv, dv, Nv, lv, Tv, Wv, wv, av) {
        const sv = Th._CreateNodeAnimation(Pv, Sv, gv, Tv, Wv);
        let Cv, iv, cv, Gv, mv, jv;
        if (sv) {
          if (av) {
            let vv, zv = 0;
            const Pv = [];
            for (; sv.inputs.length > 0;) vv = sv.inputs.shift(), zv % av == 0 && Pv.push(vv), zv++;
            sv.inputs = Pv
          }
          const vv = pv.get(Pv),
            Sv = new Float32Array(sv.inputs);
          Cv = dv.createBufferView(Sv), iv = dv.createAccessor(Cv, "SCALAR", 5126, sv.inputs.length, void 0, {
            min: [sv.inputsMin],
            max: [sv.inputsMax]
          }), lv.push(iv), cv = lv.length - 1;
          const Nv = new hv.Quaternion,
            Tv = new hv.fa,
            Wv = new hv.fa,
            fv = Pv instanceof hh.c,
            Fv = HP(ev),
            Yv = new Float32Array(sv.outputs.length * Fv);
          sv.outputs.forEach((function(vv, zv) {
            let Pv = vv;
            switch (gv) {
              case "translation":
                wv && (hv.fa.FromArrayToRef(vv, 0, Wv), BP(Wv), Wv.toArray(Pv));
                break;
              case "rotation":
                4 === vv.length ? hv.Quaternion.FromArrayToRef(vv, 0, Nv) : (Pv = new Array(4), hv.fa.FromArrayToRef(vv, 0, Tv), hv.Quaternion.FromEulerVectorToRef(Tv, Nv)), wv && (JP(Nv), fv && EP(Nv)), Nv.toArray(Pv)
            }
            Yv.set(Pv, zv * Fv)
          })), Cv = dv.createBufferView(Yv), iv = dv.createAccessor(Cv, ev, 5126, sv.outputs.length), lv.push(iv), Gv = lv.length - 1, mv = {
            interpolation: sv.samplerInterpolation,
            input: cv,
            output: Gv
          }, zv.samplers.push(mv), jv = {
            sampler: zv.samplers.length - 1,
            target: {
              node: vv,
              path: gv
            }
          }, zv.channels.push(jv)
        }
      }
      static _CreateBakedAnimation(vv, zv, Pv, ev, gv, pv, dv, Nv, lv, Tv, Wv) {
        let wv;
        const av = hv.Quaternion.Identity();
        let sv, Cv, iv, cv, Gv, mv = null,
          jv = null;
        Tv.min = Sv.Tools.FloatRound(ev / pv);
        const fv = zv.getKeys();
        for (let hv = 0, Fv = fv.length; hv < Fv; ++hv) {
          if (Cv = fv[hv], hv + 1 < Fv)
            if (iv = fv[hv + 1], Cv.value.equals && Cv.value.equals(iv.value) || Cv.value === iv.value) {
              if (0 !== hv) continue;
              Gv = Cv.frame
            } else Gv = iv.frame;
          else {
            if (cv = fv[hv - 1], Cv.value.equals && Cv.value.equals(cv.value) || Cv.value === cv.value) continue;
            Gv = gv
          }
          if (Gv)
            for (let hv = Cv.frame; hv <= Gv; hv += dv) {
              if (sv = Sv.Tools.FloatRound(hv / pv), sv === mv) continue;
              mv = sv, jv = sv;
              const ev = {
                key: 0,
                repeatCount: 0,
                GS: zv.GS
              };
              wv = zv._interpolate(hv, ev), Th._SetInterpolatedValue(vv, wv, sv, zv, Pv, av, Nv, lv, Wv)
            }
        }
        jv && (Tv.max = jv)
      }
      static _ConvertFactorToVector3OrQuaternion(vv, zv, Pv, ev, gv) {
        const pv = Th._GetBasePositionRotationOrScale(zv, ev, gv),
          dv = Pv.targetProperty.split("."),
          Nv = dv ? dv[1] : "",
          lv = gv ? hv.Quaternion.FromArray(pv).normalize() : hv.fa.FromArray(pv);
        switch (Nv) {
          case "x":
          case "y":
          case "z":
            lv[Nv] = vv;
            break;
          case "w":
            lv.w = vv;
            break;
          default:
            Sv.Tools.Error(`glTFAnimation: Unsupported component name "${Nv}"!`)
        }
        return lv
      }
      static _SetInterpolatedValue(vv, zv, Pv, Sv, ev, gv, pv, dv, Nv) {
        let lv;
        pv.push(Pv), "weights" !== ev ? (Sv.dataType === gh.b.ANIMATIONTYPE_FLOAT && (zv = this._ConvertFactorToVector3OrQuaternion(zv, vv, Sv, ev, Nv)), "rotation" === ev ? (Nv ? gv = zv : (lv = zv, hv.Quaternion.RotationYawPitchRollToRef(lv.y, lv.x, lv.z, gv)), dv.push(gv.pPv())) : (lv = zv, dv.push(lv.pPv()))) : dv.push([zv])
      }
      static _CreateLinearOrStepAnimation(vv, zv, Pv, hv, Sv, ev) {
        for (const gv of zv.getKeys()) hv.push(gv.frame / zv.framePerSecond), Th._AddKeyframeValue(gv, zv, Sv, Pv, vv, ev)
      }
      static _CreateCubicSplineAnimation(vv, zv, Pv, hv, Sv, ev) {
        zv.getKeys().forEach((function(gv) {
          hv.push(gv.frame / zv.framePerSecond), Th._AddSplineTangent(dh.INTANGENT, Sv, Pv, "CUBICSPLINE", gv, ev), Th._AddKeyframeValue(gv, zv, Sv, Pv, vv, ev), Th._AddSplineTangent(dh.OUTTANGENT, Sv, Pv, "CUBICSPLINE", gv, ev)
        }))
      }
      static _GetBasePositionRotationOrScale(vv, zv, Pv) {
        let Sv;
        if ("rotation" === zv)
          if (Pv) {
            Sv = (vv.rotationQuaternion ?? hv.Quaternion.Identity()).pPv()
          } else {
            Sv = (vv.rotation ?? hv.fa.Zero()).pPv()
          }
        else if ("translation" === zv) {
          Sv = (vv.position ?? hv.fa.Zero()).pPv()
        } else {
          Sv = (vv.pp ?? hv.fa.One()).pPv()
        }
        return Sv
      }
      static _AddKeyframeValue(vv, zv, Pv, ev, gv, pv) {
        let dv;
        const Nv = zv.dataType;
        if (Nv === gh.b.ANIMATIONTYPE_VECTOR3) {
          let zv = vv.value.pPv();
          if ("rotation" === ev) {
            const vv = hv.fa.FromArray(zv);
            zv = hv.Quaternion.RotationYawPitchRoll(vv.y, vv.x, vv.z).pPv()
          }
          Pv.push(zv)
        } else if (Nv === gh.b.ANIMATIONTYPE_FLOAT) {
          if ("weights" === ev) Pv.push([vv.value]);
          else if (dv = this._ConvertFactorToVector3OrQuaternion(vv.value, gv, zv, ev, pv), dv) {
            if ("rotation" === ev) {
              const vv = pv ? dv : hv.Quaternion.RotationYawPitchRoll(dv.y, dv.x, dv.z).normalize();
              Pv.push(vv.pPv())
            }
            Pv.push(dv.pPv())
          }
        } else Nv === gh.b.ANIMATIONTYPE_QUATERNION ? Pv.push(vv.value.normalize().pPv()) : Sv.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(vv, zv, Pv) {
        let hv, Sv, ev = !1;
        if ("rotation" === zv && !Pv) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let gv = 0, pv = vv.length; gv < pv; ++gv)
          if (Sv = vv[gv], Sv.inTangent || Sv.outTangent)
            if (hv) {
              if ("CUBICSPLINE" !== hv) {
                hv = "LINEAR", ev = !0;
                break
              }
            } else hv = "CUBICSPLINE";
        else if (hv) {
          if ("CUBICSPLINE" === hv || Sv.interpolation && 1 === Sv.interpolation && "STEP" !== hv) {
            hv = "LINEAR", ev = !0;
            break
          }
        } else hv = Sv.interpolation && 1 === Sv.interpolation ? "STEP" : "LINEAR";
        return hv || (hv = "LINEAR"), {
          interpolationType: hv,
          shouldBakeAnimation: ev
        }
      }
      static _AddSplineTangent(vv, zv, Pv, Sv, ev, gv) {
        let pv;
        const dv = vv === dh.INTANGENT ? ev.inTangent : ev.outTangent;
        if ("CUBICSPLINE" === Sv) {
          if ("rotation" === Pv)
            if (dv)
              if (gv) pv = dv.pPv();
              else {
                const vv = dv;
                pv = hv.Quaternion.RotationYawPitchRoll(vv.y, vv.x, vv.z).pPv()
              }
          else pv = [0, 0, 0, 0];
          else pv = "weights" === Pv ? dv ? [dv] : [0] : dv ? dv.pPv() : [0, 0, 0];
          zv.push(pv)
        }
      }
      static _CalculateMinMaxKeyFrames(vv) {
        let zv = 1 / 0,
          Pv = -1 / 0;
        return vv.forEach((function(vv) {
          zv = Math.min(zv, vv.frame), Pv = Math.max(Pv, vv.frame)
        })), {
          min: zv,
          max: Pv
        }
      }
    }

    function Wh(vv, zv, Pv, ev, gv, pv) {
      const dv = {
          attributes: {},
          influence: vv.influence,
          name: vv.name
        },
        Nv = zv.geometry;
      if (!Nv) return Sv.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), dv;
      const Tv = pv ? -1 : 1,
        Wv = hv.fa.Zero();
      let wv, av;
      if (vv.hasPositions) {
        const ev = vv.getPositions(),
          pv = Nv.getVerticesData(lv.i.PositionKind);
        if (pv) {
          const vv = new Float32Array(pv.length),
            zv = [1 / 0, 1 / 0, 1 / 0],
            Sv = [-1 / 0, -1 / 0, -1 / 0];
          av = pv.length / 3, wv = 0;
          for (let Pv = wv; Pv < av; ++Pv) {
            const gv = hv.fa.FromArray(pv, 3 * Pv);
            hv.fa.FromArray(ev, 3 * Pv).subtractToRef(gv, Wv), Wv.x *= Tv, zv[0] = Math.min(zv[0], Wv.x), Sv[0] = Math.max(Sv[0], Wv.x), zv[1] = Math.min(zv[1], Wv.y), Sv[1] = Math.max(Sv[1], Wv.y), zv[2] = Math.min(zv[2], Wv.z), Sv[2] = Math.max(Sv[2], Wv.z), vv[3 * Pv] = Wv.x, vv[3 * Pv + 1] = Wv.y, vv[3 * Pv + 2] = Wv.z
          }
          const Nv = Pv.createBufferView(vv, 12),
            lv = Pv.createAccessor(Nv, "VEC3", 5126, ev.length / 3, 0, {
              min: zv,
              max: Sv
            });
          gv.push(lv), dv.attributes.POSITION = gv.length - 1
        } else Sv.Tools.Warn(`Morph target positions for mesh ${zv.name} were not exported. Mesh does not have position vertex data`)
      }
      if (vv.hasNormals) {
        const ev = vv.getNormals(),
          pv = Nv.getVerticesData(lv.i.NormalKind);
        if (pv) {
          const vv = new Float32Array(pv.length);
          av = pv.length / 3, wv = 0;
          for (let Pv = wv; Pv < av; ++Pv) {
            const zv = hv.fa.FromArray(pv, 3 * Pv).normalize();
            hv.fa.FromArray(ev, 3 * Pv).normalize().subtractToRef(zv, Wv), vv[3 * Pv] = Wv.x * Tv, vv[3 * Pv + 1] = Wv.y, vv[3 * Pv + 2] = Wv.z
          }
          const zv = Pv.createBufferView(vv, 12),
            Sv = Pv.createAccessor(zv, "VEC3", 5126, ev.length / 3, 0);
          gv.push(Sv), dv.attributes.NORMAL = gv.length - 1
        } else Sv.Tools.Warn(`Morph target normals for mesh ${zv.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (vv.hasTangents) {
        const ev = vv.getTangents(),
          pv = Nv.getVerticesData(lv.i.TangentKind);
        if (pv) {
          av = pv.length / 4;
          const vv = new Float32Array(3 * av);
          wv = 0;
          for (let Pv = wv; Pv < av; ++Pv) {
            const zv = hv.fa.FromArray(pv, 4 * Pv);
            yP(zv);
            const Sv = hv.fa.FromArray(ev, 3 * Pv);
            yP(Sv), Sv.subtractToRef(zv, Wv), vv[3 * Pv] = Wv.x * Tv, vv[3 * Pv + 1] = Wv.y, vv[3 * Pv + 2] = Wv.z
          }
          const zv = Pv.createBufferView(vv, 12),
            Sv = Pv.createAccessor(zv, "VEC3", 5126, av, 0);
          gv.push(Sv), dv.attributes.TANGENT = gv.length - 1
        } else Sv.Tools.Warn(`Morph target tangents for mesh ${zv.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (vv.hasColors) {
        const ev = vv.getColors(),
          pv = Nv.getVerticesData(lv.i.ColorKind),
          Tv = Nv.getVertexBuffer(lv.i.ColorKind);
        if (pv && Tv) {
          const vv = Tv.getSize();
          av = pv.length / vv;
          const zv = new Float32Array(av * vv);
          wv = 0;
          for (let Pv = wv; Pv < av; ++Pv)
            if (3 === vv) {
              const Sv = hv.fa.FromArray(pv, Pv * vv);
              hv.fa.FromArray(ev, Pv * vv).subtractToRef(Sv, Wv), zv[3 * Pv] = Wv.x, zv[3 * Pv + 1] = Wv.y, zv[3 * Pv + 2] = Wv.z
            } else if (4 === vv) {
            const Sv = new hv.Vector4,
              gv = hv.Vector4.FromArray(pv, Pv * vv);
            hv.Vector4.FromArray(ev, Pv * vv).subtractToRef(gv, Sv), zv[4 * Pv] = Sv.x, zv[4 * Pv + 1] = Sv.y, zv[4 * Pv + 2] = Sv.z, zv[4 * Pv + 3] = Sv.w
          } else Sv.Tools.Warn(`Unsupported number of components for color attribute: ${vv}`);
          const Nv = Pv.createBufferView(zv, 4 * vv),
            lv = Pv.createAccessor(Nv, 3 === vv ? "VEC3" : "VEC4", 5126, av, 0);
          gv.push(lv), dv.attributes.COLOR_0 = gv.length - 1
        } else Sv.Tools.Warn(`Morph target colors for mesh ${zv.name} were not exported. Mesh does not have colors vertex data`)
      }
      return dv
    }
    var wh = Pv(40883);
    class ah {}
    ah.DEFAULT_COLOR = Jv.b.White(), ah.DEFAULT_WIDTH_ATTENUATED = 1, ah.DEFAULT_WIDTH = .1;
    var sh = Pv(40387);
    class Ch {
      constructor(vv) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = vv
      }
      moveTo(vv, zv) {
        this._currentPath = new sh.h(vv, zv), this._tempPaths.push(this._currentPath)
      }
      lineTo(vv, zv) {
        this._currentPath.addLineTo(vv, zv)
      }
      quadraticCurveTo(vv, zv, Pv, hv) {
        this._currentPath.addQuadraticCurveTo(vv, zv, Pv, hv, this._resolution)
      }
      bezierCurveTo(vv, zv, Pv, hv, Sv, ev) {
        this._currentPath.addBezierCurveTo(vv, zv, Pv, hv, Sv, ev, this._resolution)
      }
      extractHoles() {
        for (const vv of this._tempPaths) vv.area() > 0 ? this._holes.push(vv) : this._paths.push(vv);
        if (!this._paths.length && this._holes.length) {
          const vv = this._holes;
          this._holes = this._paths, this._paths = vv
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

    function ih(vv, zv, Pv, hv, Sv, ev) {
      const gv = ev.glyphs[vv] || ev.glyphs["?"];
      if (!gv) return null;
      const pv = new Ch(Sv);
      if (gv.o) {
        const vv = gv.o.split(" ");
        for (let Sv = 0, ev = vv.length; Sv < ev;) {
          switch (vv[Sv++]) {
            case "m": {
              const ev = parseInt(vv[Sv++]) * zv + Pv,
                gv = parseInt(vv[Sv++]) * zv + hv;
              pv.moveTo(ev, gv);
              break
            }
            case "l": {
              const ev = parseInt(vv[Sv++]) * zv + Pv,
                gv = parseInt(vv[Sv++]) * zv + hv;
              pv.lineTo(ev, gv);
              break
            }
            case "q": {
              const ev = parseInt(vv[Sv++]) * zv + Pv,
                gv = parseInt(vv[Sv++]) * zv + hv,
                dv = parseInt(vv[Sv++]) * zv + Pv,
                Nv = parseInt(vv[Sv++]) * zv + hv;
              pv.quadraticCurveTo(dv, Nv, ev, gv);
              break
            }
            case "b": {
              const ev = parseInt(vv[Sv++]) * zv + Pv,
                gv = parseInt(vv[Sv++]) * zv + hv,
                dv = parseInt(vv[Sv++]) * zv + Pv,
                Nv = parseInt(vv[Sv++]) * zv + hv,
                lv = parseInt(vv[Sv++]) * zv + Pv,
                Tv = parseInt(vv[Sv++]) * zv + hv;
              pv.bezierCurveTo(dv, Nv, lv, Tv, ev, gv);
              break
            }
          }
        }
      }
      return pv.extractHoles(), {
        offsetX: gv.ha * zv,
        shapePath: pv
      }
    }

    function ch(vv, zv, Pv, hv) {
      const Sv = Array.from(vv),
        ev = zv / hv.resolution,
        gv = (hv.boundingBox.yMax - hv.boundingBox.yMin + hv.underlineThickness) * ev,
        pv = [];
      let dv = 0,
        Nv = 0;
      for (let lv = 0; lv < Sv.length; lv++) {
        const vv = Sv[lv];
        if ("\n" === vv) dv = 0, Nv -= gv;
        else {
          const zv = ih(vv, ev, dv, Nv, Pv, hv);
          zv && (dv += zv.offsetX, pv.push(zv.shapePath))
        }
      }
      return pv
    }
    class Gh {
      static ConvertPoints(vv, zv) {
        if (vv.length && Array.isArray(vv) && "number" === typeof vv[0]) return [vv];
        if (vv.length && Array.isArray(vv[0]) && "number" === typeof vv[0][0]) return vv;
        if (vv.length && !Array.isArray(vv[0]) && vv[0] instanceof Zv.l) {
          const zv = [];
          for (let Pv = 0; Pv < vv.length; Pv++) {
            const hv = vv[Pv];
            zv.push(hv.x, hv.y, hv.z)
          }
          return [zv]
        }
        if (vv.length > 0 && Array.isArray(vv[0]) && vv[0].length > 0 && vv[0][0] instanceof Zv.l) {
          const zv = [],
            Pv = vv;
          for (const vv of Pv) zv.push(vv.flatMap((vv => [vv.x, vv.y, vv.z])));
          return zv
        }
        if (vv instanceof Float32Array) {
          if (zv?.floatArrayStride) {
            const Pv = [],
              hv = 3 * zv.floatArrayStride;
            for (let zv = 0; zv < vv.length; zv += hv) {
              const Sv = new Array(hv);
              for (let Pv = 0; Pv < hv; Pv++) Sv[Pv] = vv[zv + Pv];
              Pv.push(Sv)
            }
            return Pv
          }
          return [Array.from(vv)]
        }
        if (vv.length && vv[0] instanceof Float32Array) {
          const zv = [];
          for (const Pv of vv) zv.push(Array.from(Pv));
          return zv
        }
        return []
      }
      static OmitZeroLengthPredicate(vv, zv, Pv) {
        const hv = [];
        return zv.subtract(vv).lengthSquared() > 0 && hv.push([vv, zv]), Pv.subtract(zv).lengthSquared() > 0 && hv.push([zv, Pv]), vv.subtract(Pv).lengthSquared() > 0 && hv.push([Pv, vv]), 0 === hv.length ? null : hv
      }
      static OmitDuplicatesPredicate(vv, zv, Pv, hv) {
        const Sv = [];
        return Gh._SearchInPoints(vv, zv, hv) || Sv.push([vv, zv]), Gh._SearchInPoints(zv, Pv, hv) || Sv.push([zv, Pv]), Gh._SearchInPoints(Pv, vv, hv) || Sv.push([Pv, vv]), 0 === Sv.length ? null : Sv
      }
      static _SearchInPoints(vv, zv, Pv) {
        for (const hv of Pv)
          for (let Pv = 0; Pv < hv.length; Pv++)
            if (hv[Pv]?.equals(vv) && (hv[Pv + 1]?.equals(zv) || hv[Pv - 1]?.equals(zv))) return !0;
        return !1
      }
      static MeshesToLines(vv, zv) {
        const Pv = [];
        for (let hv = 0; hv < vv.length; hv++) {
          const Sv = vv[hv],
            ev = Sv.getVerticesData(Av.k.PositionKind),
            gv = Sv.dPv();
          if (ev && gv)
            for (let vv = 0, pv = 0; vv < gv.length; vv++) {
              const dv = 3 * gv[pv++],
                Nv = 3 * gv[pv++],
                lv = 3 * gv[pv++],
                Tv = new Zv.l(ev[dv], ev[dv + 1], ev[dv + 2]),
                Wv = new Zv.l(ev[Nv], ev[Nv + 1], ev[Nv + 2]),
                wv = new Zv.l(ev[lv], ev[lv + 1], ev[lv + 2]);
              if (zv) {
                const pv = zv(Tv, Wv, wv, Pv, vv, dv, Sv, hv, ev, gv);
                if (pv)
                  for (const vv of pv) Pv.push(vv)
              } else Pv.push([Tv, Wv], [Wv, wv], [wv, Tv])
            }
        }
        return Pv
      }
      static ToVector3Array(vv) {
        if (Array.isArray(vv[0])) {
          const zv = [],
            Pv = vv;
          for (const vv of Pv) {
            const Pv = [];
            for (let zv = 0; zv < vv.length; zv += 3) Pv.push(new Zv.l(vv[zv], vv[zv + 1], vv[zv + 2]));
            zv.push(Pv)
          }
          return zv
        }
        const zv = vv,
          Pv = [];
        for (let hv = 0; hv < zv.length; hv += 3) Pv.push(new Zv.l(zv[hv], zv[hv + 1], zv[hv + 2]));
        return Pv
      }
      static ToNumberArray(vv) {
        return vv.flatMap((vv => [vv.x, vv.y, vv.z]))
      }
      static GetPointsCountInfo(vv) {
        const zv = new Array(vv.length);
        let Pv = 0;
        for (let hv = vv.length; hv--;) zv[hv] = vv[hv].length / 3, Pv += zv[hv];
        return {
          total: Pv,
          counts: zv
        }
      }
      static GetLineLength(vv) {
        if (0 === vv.length) return 0;
        let zv;
        zv = "number" === typeof vv[0] ? Gh.ToVector3Array(vv) : vv;
        const Pv = Zv.i.fa[0];
        let hv = 0;
        for (let Sv = 0; Sv < zv.length - 1; Sv++) {
          const vv = zv[Sv];
          hv += zv[Sv + 1].subtractToRef(vv, Pv).length()
        }
        return hv
      }
      static GetLineLengthArray(vv, zv) {
        const Pv = zv ? new Float32Array(zv, 0, vv.length / 3) : new Float32Array(vv.length / 3);
        let hv = 0;
        for (let Sv = 0, ev = vv.length / 3 - 1; Sv < ev; Sv++) {
          let zv = vv[3 * Sv + 0],
            ev = vv[3 * Sv + 1],
            gv = vv[3 * Sv + 2];
          zv -= vv[3 * Sv + 3], ev -= vv[3 * Sv + 4], gv -= vv[3 * Sv + 5];
          hv += Math.sqrt(zv * zv + ev * ev + gv * gv), Pv[Sv + 1] = hv
        }
        return Pv
      }
      static SegmentizeSegmentByCount(vv, zv, Pv) {
        const hv = [],
          Sv = zv.subtract(vv),
          ev = Zv.i.fa[0];
        ev.Dk(Pv);
        const gv = Zv.i.fa[1];
        Sv.divideToRef(ev, gv);
        let pv = vv.clone();
        hv.push(pv);
        for (let dv = 0; dv < Pv; dv++) pv = pv.clone(), hv.push(pv.addInPlace(gv));
        return hv
      }
      static SegmentizeLineBySegmentLength(vv, zv) {
        const Pv = vv[0] instanceof Zv.l ? Gh.GetLineSegments(vv) : "number" === typeof vv[0] ? Gh.GetLineSegments(Gh.ToVector3Array(vv)) : vv,
          hv = [];
        for (const Sv of Pv)
          if (Sv.length > zv) {
            const vv = Gh.SegmentizeSegmentByCount(Sv.point1, Sv.point2, Math.ceil(Sv.length / zv));
            for (const zv of vv) hv.push(zv)
          } else hv.push(Sv.point1), hv.push(Sv.point2);
        return hv
      }
      static SegmentizeLineBySegmentCount(vv, zv) {
        const Pv = "number" === typeof vv[0] ? Gh.ToVector3Array(vv) : vv,
          hv = Gh.GetLineLength(Pv) / zv;
        return Gh.SegmentizeLineBySegmentLength(Pv, hv)
      }
      static GetLineSegments(vv) {
        const zv = [];
        for (let Pv = 0; Pv < vv.length - 1; Pv++) {
          const hv = vv[Pv],
            Sv = vv[Pv + 1],
            ev = Sv.subtract(hv).length();
          zv.push({
            point1: hv,
            point2: Sv,
            length: ev
          })
        }
        return zv
      }
      static GetMinMaxSegmentLength(vv) {
        const zv = Gh.GetLineSegments(vv).sort((vv => vv.length));
        return {
          min: zv[0].length,
          max: zv[zv.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Sv = zv * Pv;
        let ev = 0,
          gv = 0;
        const pv = vv.length;
        for (let Nv = 0; Nv < pv; Nv++) {
          if (Sv <= ev + vv[Nv].length) {
            gv = Nv;
            break
          }
          ev += vv[Nv].length
        }
        const dv = (Sv - ev) / vv[gv].length;
        return vv[gv].point2.subtractToRef(vv[gv].point1, Zv.i.fa[0]), Zv.i.fa[0].scaleToRef(dv, Zv.i.fa[1]), hv || Zv.i.fa[1].addInPlace(vv[gv].point1), Zv.i.fa[1].clone()
      }
      static GetCircleLinePoints(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vv,
          Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / zv;
        const ev = [];
        for (let gv = 0; gv <= zv; gv++) ev.push(new Zv.l(Math.cos(gv * Sv) * vv, Math.sin(gv * Sv) * hv, Pv));
        return ev
      }
      static GetBezierLinePoints(vv, zv, Pv, hv) {
        return sh.e.CreateQuadraticBezier(vv, zv, Pv, hv).getPoints().flatMap((vv => [vv.x, vv.y, vv.z]))
      }
      static GetArrowCap(vv, zv, Pv, hv, Sv) {
        let ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          gv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [vv.clone(), vv.add(zv.multiplyByFloats(Pv, Pv, Pv))],
          widths: [hv, Sv, ev, gv]
        }
      }
      static GetPointsFromText(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          ev = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const gv = [],
          pv = ch(vv, zv, Pv, hv);
        for (const dv of pv) {
          for (const vv of dv.paths) {
            const zv = [],
              Pv = vv.getPoints();
            for (const vv of Pv) zv.push(vv.x, vv.y, Sv);
            gv.push(zv)
          }
          if (ev)
            for (const vv of dv.holes) {
              const zv = [],
                Pv = vv.getPoints();
              for (const vv of Pv) zv.push(vv.x, vv.y, Sv);
              gv.push(zv)
            }
        }
        return gv
      }
      static Color3toRGBAUint8(vv) {
        const zv = new Uint8Array(4 * vv.length);
        for (let Pv = 0, hv = 0; Pv < vv.length; Pv++) zv[hv++] = 255 * vv[Pv].r, zv[hv++] = 255 * vv[Pv].g, zv[hv++] = 255 * vv[Pv].b, zv[hv++] = 255;
        return zv
      }
      static CreateColorsTexture(vv, zv, Pv, hv) {
        const Sv = hv.ma().getCaps().maxTextureSize ?? 1,
          ev = zv.length > Sv ? Sv : zv.length,
          gv = Math.ceil(zv.length / Sv);
        gv > 1 && (zv = [...zv, ...Array(ev * gv - zv.length).fill(zv[0])]);
        const pv = Gh.Color3toRGBAUint8(zv),
          dv = new fv.e(pv, ev, gv, lP.b.TEXTUREFORMAT_RGBA, hv, !1, !0, Pv);
        return dv.name = vv, dv
      }
      static PrepareEmptyColorsTexture(vv) {
        if (!ah.EmptyColorsTexture) {
          const zv = new Uint8Array(4);
          ah.EmptyColorsTexture = new fv.e(zv, 1, 1, lP.b.TEXTUREFORMAT_RGBA, vv, !1, !1, fv.e.NEAREST_NEAREST), ah.EmptyColorsTexture.name = "grlEmptyColorsTexture", ah.EmptyColorsTexture.uD.addOnce((() => {
            ah.EmptyColorsTexture = null
          }))
        }
        return ah.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        ah.EmptyColorsTexture?.dispose(), ah.EmptyColorsTexture = null
      }
      static BooleanToNumber(vv) {
        return vv ? 1 : 0
      }
    }
    class mh extends Lv.c {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class jh extends Hv.d {
      isCompatible(vv) {
        return !0
      }
      constructor(vv, zv, Pv) {
        Pv = Pv || {
          color: ah.DEFAULT_COLOR
        };
        const hv = new mh;
        hv.GREASED_LINE_HAS_COLOR = !!Pv.color && !Pv.useColors, hv.GREASED_LINE_SIZE_ATTENUATION = Pv.sizeAttenuation ?? !1, hv.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === Pv.colorDistributionType, hv.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (zv ?? vv.rD()).useRightHandedSystem, hv.GREASED_LINE_CAMERA_FACING = Pv.cameraFacing ?? !0, super(vv, jh.GREASED_LINE_MATERIAL_NAME, 200, hv, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = Pv?.forceGLSL || jh.ForceGLSL, this._scene = zv ?? vv.rD(), this._engine = this._scene.ma(), this._cameraFacing = Pv.cameraFacing ?? !0, this.visibility = Pv.visibility ?? 1, this.useDash = Pv.useDash ?? !1, this.dashRatio = Pv.dashRatio ?? .5, this.dashOffset = Pv.dashOffset ?? 0, this.width = Pv.width ? Pv.width : Pv.sizeAttenuation ? ah.DEFAULT_WIDTH_ATTENUATED : ah.DEFAULT_WIDTH, this._sizeAttenuation = Pv.sizeAttenuation ?? !1, this.colorMode = Pv.colorMode ?? 0, this._color = Pv.color ?? null, this.useColors = Pv.useColors ?? !1, this._colorsDistributionType = Pv.colorDistributionType ?? 0, this.colorsSampling = Pv.colorsSampling ?? fv.e.NEAREST_NEAREST, this._colors = Pv.colors ?? null, this.dashCount = Pv.dashCount ?? 1, this.resolution = Pv.resolution ?? new Zv.j(this._engine.getRenderWidth(), this._engine.getRenderHeight()), Pv.colorsTexture ? this.colorsTexture = Pv.colorsTexture : this._colors ? this.colorsTexture = Gh.CreateColorsTexture(`${vv.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? ah.DEFAULT_COLOR, Gh.PrepareEmptyColorsTexture(this._scene)), this._engine.uD.add((() => {
          Gh.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(vv) {
        vv.push("grl_offsets"), vv.push("grl_widths"), vv.push("grl_colorPointers"), vv.push("grl_counters"), this._cameraFacing ? (vv.push("grl_previousAndSide"), vv.push("grl_nextAndCounters")) : vv.push("grl_slopes")
      }
      getSamplers(vv) {
        vv.push("grl_colors")
      }
      getActiveTextures(vv) {
        this.colorsTexture && vv.push(this.colorsTexture)
      }
      getUniforms() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const zv = [{
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
        return this._cameraFacing && zv.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === vv && zv.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: zv,
          vertex: this._cameraFacing && this._isGLSL(vv) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(vv) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(vv) {
        if (this._cameraFacing) {
          vv.Xu("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || vv.Xu("viewProjection", this._scene.getTransformMatrix());
          const zv = Zv.i.Vector4[0];
          zv.x = this._aspect, zv.y = this._resolution.x, zv.z = this._resolution.y, zv.w = this.width, vv.updateVector4("grl_aspect_resolution_lineWidth", zv)
        }
        const zv = Zv.i.Vector4[0];
        zv.x = Gh.BooleanToNumber(this.useDash), zv.y = this._dashArray, zv.z = this.dashOffset, zv.w = this.dashRatio, vv.updateVector4("grl_dashOptions", zv);
        const Pv = Zv.i.Vector4[1];
        Pv.x = this.colorMode, Pv.y = this.visibility, Pv.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, Pv.w = Gh.BooleanToNumber(this.useColors), vv.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", Pv), this._color && vv.updateColor3("grl_singleColor", this._color);
        const hv = this.colorsTexture ?? ah.EmptyColorsTexture;
        vv.setTexture("grl_colors", hv), vv.updateFloat2("grl_textureSize", hv?.getSize().width ?? 1, hv?.getSize().height ?? 1)
      }
      prepareDefines(vv, zv, Pv) {
        vv.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, vv.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, vv.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, vv.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = zv.useRightHandedSystem, vv.GREASED_LINE_CAMERA_FACING = this._cameraFacing, vv.GREASED_LINE_USE_OFFSETS = !!Pv.offsets
      }
      getClassName() {
        return jh.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(zv) ? function(vv, zv) {
          if ("vertex" === vv) {
            const vv = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return zv && (vv["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), vv
          }
          return "fragment" === vv ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(vv, this._cameraFacing) : function(vv, zv) {
          if ("vertex" === vv) {
            const vv = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return zv && (vv["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), vv
          }
          return "fragment" === vv ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(vv, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(vv) {
        this.setColors(vv)
      }
      setColors(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const hv = this._colors?.length ?? 0;
        if (this._colors = vv, null !== vv && 0 !== vv.length) {
          if (!zv || Pv)
            if (this.colorsTexture && hv === vv.length && !Pv) {
              const zv = Gh.Color3toRGBAUint8(vv);
              this.colorsTexture.update(zv)
            } else this.colorsTexture?.dispose(), this.colorsTexture = Gh.CreateColorsTexture(`${this._material.name}-colors-texture`, vv, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(vv) {
        this._dashCount = vv, this._dashArray = 1 / vv
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(vv) {
        this._sizeAttenuation = vv, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(vv) {
        this.setColor(vv)
      }
      setColor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== vv || null !== this._color && null === vv ? (this._color = vv, zv || this.markAllDefinesAsDirty()) : this._color = vv
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(vv) {
        this._colorsDistributionType = vv, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(vv) {
        this._aspect = vv.x / vv.y, this._resolution = vv
      }
      serialize() {
        const vv = super.serialize(),
          zv = {
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
        return this._colors && (zv.colors = this._colors), this._color && (zv.color = this._color), vv.greasedLineMaterialOptions = zv, vv
      }
      parse(vv, zv, Pv) {
        super.parse(vv, zv, Pv);
        const hv = vv.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), hv.color && this.setColor(hv.color, !0), hv.colorDistributionType && (this.colorsDistributionType = hv.colorDistributionType), hv.colors && (this.colors = hv.colors), hv.colorsSampling && (this.colorsSampling = hv.colorsSampling), hv.colorMode && (this.colorMode = hv.colorMode), hv.useColors && (this.useColors = hv.useColors), hv.visibility && (this.visibility = hv.visibility), hv.useDash && (this.useDash = hv.useDash), hv.dashCount && (this.dashCount = hv.dashCount), hv.dashRatio && (this.dashRatio = hv.dashRatio), hv.dashOffset && (this.dashOffset = hv.dashOffset), hv.width && (this.width = hv.width), hv.sizeAttenuation && (this.sizeAttenuation = hv.sizeAttenuation), hv.resolution && (this.resolution = hv.resolution), this.colors ? this.colorsTexture = Gh.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, zv) : Gh.PrepareEmptyColorsTexture(zv), this.markAllDefinesAsDirty()
      }
      copyTo(vv) {
        const zv = vv;
        zv.colorsTexture?.dispose(), this._colors && (zv.colorsTexture = Gh.CreateColorsTexture(`${zv._material.name}-colors-texture`, this._colors, zv.colorsSampling, this._scene)), zv.setColor(this.color, !0), zv.colorsDistributionType = this.colorsDistributionType, zv.colorsSampling = this.colorsSampling, zv.colorMode = this.colorMode, zv.useColors = this.useColors, zv.visibility = this.visibility, zv.useDash = this.useDash, zv.dashCount = this.dashCount, zv.dashRatio = this.dashRatio, zv.dashOffset = this.dashOffset, zv.width = this.width, zv.sizeAttenuation = this.sizeAttenuation, zv.resolution = this.resolution, zv.markAllDefinesAsDirty()
      }
      _isGLSL(vv) {
        return 0 === vv || this._forceGLSL
      }
    }
    jh.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", jh.ForceGLSL = !1;
    var fh = Pv(39712),
      Fh = Pv(39720),
      Yh = Pv(38207),
      nh = Pv(39790),
      Oh = Pv(39143);
    class Dh extends nh.o {
      constructor(vv, zv, hv) {
        const Sv = zv.ma(),
          ev = Sv.isWebGPU && !(hv.forceGLSL || Dh.ForceGLSL),
          gv = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        zv.useRightHandedSystem && gv.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const pv = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        hv.cameraFacing ? (gv.push("GREASED_LINE_CAMERA_FACING"), pv.push("grl_previousAndSide", "grl_nextAndCounters")) : (pv.push("grl_slopes"), pv.push("grl_counters"));
        const dv = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (ev || dv.push("world", "viewProjection", "view", "projection"), super(vv, zv, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: ev ? ["Scene", "Mesh"] : void 0,
            attributes: pv,
            uniforms: dv,
            samplers: ev ? [] : ["grlColors"],
            defines: gv,
            extraInitializationsAsync: async () => {
              ev ? await Promise.all([Pv.e(325).then((() => Pv(61304))), Pv.e(384).then((() => Pv(61308)))]) : await Promise.all([Pv.e(318).then((() => Pv(61315))), Pv.e(385).then((() => Pv(61322)))])
            },
            shaderLanguage: ev ? 1 : 0
          }), this._color = Jv.b.White(), this._colorsDistributionType = 0, this._colorsTexture = null, hv = hv || {
            color: ah.DEFAULT_COLOR
          }, this.visibility = hv.visibility ?? 1, this.useDash = hv.useDash ?? !1, this.dashRatio = hv.dashRatio ?? .5, this.dashOffset = hv.dashOffset ?? 0, this.dashCount = hv.dashCount ?? 1, this.width = hv.width ? hv.width : hv.sizeAttenuation && hv.cameraFacing ? ah.DEFAULT_WIDTH_ATTENUATED : ah.DEFAULT_WIDTH, this.sizeAttenuation = hv.sizeAttenuation ?? !1, this.color = hv.color ?? Jv.b.White(), this.useColors = hv.useColors ?? !1, this.colorsDistributionType = hv.colorDistributionType ?? 0, this.colorsSampling = hv.colorsSampling ?? fv.e.NEAREST_NEAREST, this.colorMode = hv.colorMode ?? 0, this._colors = hv.colors ?? null, this._cameraFacing = hv.cameraFacing ?? !0, this.resolution = hv.resolution ?? new Zv.j(Sv.getRenderWidth(), Sv.getRenderHeight()), hv.colorsTexture ? this.colorsTexture = hv.colorsTexture : this._colors ? this.colorsTexture = Gh.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, zv) : (this._color = this._color ?? ah.DEFAULT_COLOR, this.colorsTexture = Gh.PrepareEmptyColorsTexture(zv)), ev) {
          const vv = new Oh.d;
          vv.setParameters(), vv.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", vv)
        }
        Sv.uD.add((() => {
          Gh.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== ah.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new Zv.j(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(vv) {
        this.setColors(vv)
      }
      setColors(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const hv = this._colors?.length ?? 0;
        if (this._colors = vv, null !== vv && 0 !== vv.length) {
          if (!zv || Pv)
            if (this._colorsTexture && hv === vv.length && !Pv) {
              const zv = Gh.Color3toRGBAUint8(vv);
              this._colorsTexture.update(zv)
            } else this._colorsTexture && this._colorsTexture !== ah.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = Gh.CreateColorsTexture(`${this.name}-colors-texture`, vv, this.colorsSampling, this.rD())
        } else {
          this._colorsTexture && this._colorsTexture !== ah.EmptyColorsTexture && this._colorsTexture.dispose();
          const vv = this.rD();
          vv && (this.colorsTexture = Gh.PrepareEmptyColorsTexture(vv))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(vv) {
        this._colorsTexture = vv, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(vv) {
        this._width = vv, this.setFloat("grlWidth", vv)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(vv) {
        this._useColors = vv, this.setFloat("grlUseColors", Gh.BooleanToNumber(vv))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(vv) {
        this._colorsSampling = vv
      }
      get visibility() {
        return this._visibility
      }
      set visibility(vv) {
        this._visibility = vv, this.setFloat("grlVisibility", vv)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(vv) {
        this._useDash = vv, this.setFloat("grlUseDash", Gh.BooleanToNumber(vv))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(vv) {
        this._dashOffset = vv, this.setFloat("grlDashOffset", vv)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(vv) {
        this._dashRatio = vv, this.setFloat("grlDashRatio", vv)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(vv) {
        this._dashCount = vv, this._dashArray = 1 / vv, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(vv) {
        this._sizeAttenuation = vv, this.setFloat("grlSizeAttenuation", Gh.BooleanToNumber(vv))
      }
      get color() {
        return this._color
      }
      set color(vv) {
        this.setColor(vv)
      }
      setColor(vv) {
        vv = vv ?? ah.DEFAULT_COLOR, this._color = vv, this.setColor3("grlColor", vv)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(vv) {
        this._colorsDistributionType = vv, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(vv) {
        this._colorMode = vv, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(vv) {
        this._resolution = vv, this.setVector2("grlResolution", vv), this.setFloat("grlAspect", vv.x / vv.y)
      }
      serialize() {
        const vv = super.serialize(),
          zv = {
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
        return this._colors && (zv.colors = this._colors), vv.greasedLineMaterialOptions = zv, vv
      }
      parse(vv, zv, Pv) {
        const hv = vv.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), hv.color && (this.color = hv.color), hv.colorDistributionType && (this.colorsDistributionType = hv.colorDistributionType), hv.colorsSampling && (this.colorsSampling = hv.colorsSampling), hv.colorMode && (this.colorMode = hv.colorMode), hv.useColors && (this.useColors = hv.useColors), hv.visibility && (this.visibility = hv.visibility), hv.useDash && (this.useDash = hv.useDash), hv.dashCount && (this.dashCount = hv.dashCount), hv.dashRatio && (this.dashRatio = hv.dashRatio), hv.dashOffset && (this.dashOffset = hv.dashOffset), hv.width && (this.width = hv.width), hv.sizeAttenuation && (this.sizeAttenuation = hv.sizeAttenuation), hv.resolution && (this.resolution = hv.resolution), hv.colors ? this.colorsTexture = Gh.CreateColorsTexture(`${this.name}-colors-texture`, hv.colors, this.colorsSampling, this.rD()) : this.colorsTexture = Gh.PrepareEmptyColorsTexture(zv), this._cameraFacing = hv.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var Kh, Vh, Uh;
    Dh.ForceGLSL = !1,
      function(vv) {
        vv[vv.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", vv[vv.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(Kh || (Kh = {})),
      function(vv) {
        vv[vv.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", vv[vv.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", vv[vv.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(Vh || (Vh = {})),
      function(vv) {
        vv[vv.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", vv[vv.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", vv[vv.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", vv[vv.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", vv[vv.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(Uh || (Uh = {}));
    class Rh extends fh.c {
      constructor(vv, zv, Pv) {
        super(vv, zv, null, null, !1, !1), this.name = vv, this._options = Pv, this._lazy = !1, this._updatable = !1, this._engine = zv.ma(), this._lazy = Pv.lazy ?? !1, this._updatable = Pv.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = Pv.colorPointers ?? [], this._widths = Pv.widths ?? new Array(Pv.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(vv) {
        let zv = 0;
        for (const hv of this._points) zv += hv.length;
        const Pv = zv / 3 * 2 - this._widths.length;
        for (let hv = 0; hv < Pv; hv++) this._widths.push(vv)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.Ya && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(vv, zv) {
        for (const Pv of vv) this._points.push(Pv);
        this._lazy || this.setPoints(this._points, zv)
      }
      dispose(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(vv, zv)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(vv) {
        this._uvs = vv instanceof Float32Array ? vv : new Float32Array(vv), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(vv) {
        this.material instanceof Dh && this.material.setDefine("GREASED_LINE_USE_OFFSETS", vv?.length > 0), this._offsets = vv, this._offsetsBuffer ? this._offsetsBuffer.update(vv) : this._createOffsetsBuffer(vv)
      }
      get widths() {
        return this._widths
      }
      set widths(vv) {
        this._widths = vv, this._lazy || this._widthsBuffer && this._widthsBuffer.update(vv)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(vv) {
        this._colorPointers = vv, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(vv)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof Dh) return this.material;
        const vv = this.material?.pluginManager?.getPlugin(jh.GREASED_LINE_MATERIAL_NAME);
        return vv || void 0
      }
      get points() {
        const vv = [];
        return Yh.b.DeepCopy(this._points, vv), vv
      }
      setPoints(vv, zv) {
        this._points = Gh.ConvertPoints(vv, zv?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), zv?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, zv)
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
      serialize(vv) {
        super.serialize(vv), vv.type = this.getClassName(), vv.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zv = new Fh.d;
        return zv.positions = this._vertexPositions, zv.indices = this._indices, zv.uvs = this._uvs, vv && (zv.normals = [], Fh.d.ComputeNormals(this._vertexPositions, this._indices, zv.normals)), zv.applyToMesh(this, this._options.updatable), zv
      }
      _createOffsetsBuffer(vv) {
        const zv = this._scene.ma(),
          Pv = new Av.c(zv, vv, this._updatable, 3);
        this.setVerticesBuffer(Pv.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = Pv
      }
    }
    class xh {
      constructor(vv, zv) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = vv, this.wasAddedByNoopNode = zv
      }
      getIndicesAccessor(vv, zv, Pv, hv, Sv) {
        return this._indicesAccessorMap.get(vv)?.get(zv)?.get(Pv)?.get(hv)?.get(Sv)
      }
      setIndicesAccessor(vv, zv, Pv, hv, Sv, ev) {
        let gv = this._indicesAccessorMap.get(vv);
        gv || (gv = new Map, this._indicesAccessorMap.set(vv, gv));
        let pv = gv.get(zv);
        pv || (pv = new Map, gv.set(zv, pv));
        let dv = pv.get(Pv);
        dv || (dv = new Map, pv.set(Pv, dv));
        let Nv = dv.get(hv);
        Nv || (Nv = new Map, dv.set(hv, Nv)), Nv.set(Sv, ev)
      }
      pushExportedNode(vv) {
        this._exportedNodes.has(vv) || this._exportedNodes.add(vv)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(vv) {
        return this._vertexBufferViewMap.get(vv)
      }
      setVertexBufferView(vv, zv) {
        this._vertexBufferViewMap.set(vv, zv)
      }
      setRemappedBufferView(vv, zv, Pv) {
        this._remappedBufferView.set(vv, new Map), this._remappedBufferView.get(vv).set(zv, Pv)
      }
      getRemappedBufferView(vv, zv) {
        return this._remappedBufferView.get(vv)?.get(zv)
      }
      getVertexAccessor(vv, zv, Pv) {
        return this._vertexAccessorMap.get(vv)?.get(zv)?.get(Pv)
      }
      setVertexAccessor(vv, zv, Pv, hv) {
        let Sv = this._vertexAccessorMap.get(vv);
        Sv || (Sv = new Map, this._vertexAccessorMap.set(vv, Sv));
        let ev = Sv.get(zv);
        ev || (ev = new Map, Sv.set(zv, ev)), ev.set(Pv, hv)
      }
      hasVertexColorAlpha(vv) {
        return this._vertexMapColorAlpha.get(vv) || !1
      }
      setHasVertexColorAlpha(vv, zv) {
        return this._vertexMapColorAlpha.set(vv, zv)
      }
      getMesh(vv) {
        return this._meshMap.get(vv)
      }
      setMesh(vv, zv) {
        this._meshMap.set(vv, zv)
      }
      bindMorphDataToMesh(vv, zv) {
        const Pv = this._meshMorphTargetMap.get(vv) || [];
        this._meshMorphTargetMap.set(vv, Pv), -1 === Pv.indexOf(zv) && Pv.push(zv)
      }
      getMorphTargetsFromMesh(vv) {
        return this._meshMorphTargetMap.get(vv)
      }
    }
    class th {
      _ApplyExtension(vv, zv, Pv, hv) {
        if (Pv >= zv.length) return Promise.resolve(vv);
        const Sv = hv(zv[Pv], vv);
        return Sv ? Sv.then((async vv => vv ? await this._ApplyExtension(vv, zv, Pv + 1, hv) : null)) : this._ApplyExtension(vv, zv, Pv + 1, hv)
      }
      _ApplyExtensions(vv, zv) {
        const Pv = [];
        for (const hv of th._ExtensionNames) Pv.push(this._extensions[hv]);
        return this._ApplyExtension(vv, Pv, 0, zv)
      }
      _extensionsPostExportNodeAsync(vv, zv, Pv, hv, Sv) {
        return this._ApplyExtensions(zv, ((zv, ev) => zv.postExportNodeAsync && zv.postExportNodeAsync(vv, ev, Pv, hv, Sv, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(vv, zv, Pv) {
        return this._ApplyExtensions(zv, ((zv, hv) => zv.postExportMaterialAsync && zv.postExportMaterialAsync(vv, hv, Pv)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(vv, zv, Pv) {
        const hv = [];
        return await Promise.all(th._ExtensionNames.map((async Sv => {
          const ev = this._extensions[Sv];
          if (ev.postExportMaterialAdditionalTexturesAsync) {
            const Sv = await ev.postExportMaterialAdditionalTexturesAsync(vv, zv, Pv);
            hv.push(...Sv)
          }
        }))), hv
      }
      _extensionsPostExportTextures(vv, zv, Pv) {
        for (const hv of th._ExtensionNames) {
          const Sv = this._extensions[hv];
          Sv.postExportTexture && Sv.postExportTexture(vv, zv, Pv)
        }
      }
      _extensionsPostExportMeshPrimitive(vv) {
        for (const zv of th._ExtensionNames) {
          const Pv = this._extensions[zv];
          Pv.postExportMeshPrimitive && Pv.postExportMeshPrimitive(vv, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const vv of th._ExtensionNames) {
          const zv = this._extensions[vv];
          zv.preGenerateBinaryAsync && await zv.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(vv) {
        for (const zv of th._ExtensionNames) {
          const Pv = this._extensions[zv];
          Pv.enabled && vv(Pv)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((vv => {
          var zv, Pv, hv;
          vv.wasUsed && ((zv = this._glTF).extensionsUsed || (zv.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(vv.name) && this._glTF.extensionsUsed.push(vv.name), vv.required && ((Pv = this._glTF).extensionsRequired || (Pv.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(vv.name) && this._glTF.extensionsRequired.push(vv.name)), (hv = this._glTF).extensions || (hv.extensions = {}), vv.onExporting && vv.onExporting())
        }))
      }
      _loadExtensions() {
        for (const vv of th._ExtensionNames) {
          const zv = th._ExtensionFactories[vv](this);
          this._extensions[vv] = zv
        }
      }
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sv.e.LastCreatedScene,
          zv = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${av.d.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new VP(this), this._extensions = {}, this._bufferManager = new Ph, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !vv) throw new Error("No scene available to export");
        this._babylonScene = vv, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: vv => vv?.nD?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...zv
        }, this._loadExtensions()
      }
      dispose() {
        for (const vv in this._extensions) {
          this._extensions[vv].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        th.UnregisterExtension(vv) && Sv.Tools.Warn(`Extension with the name ${vv} already exists`), th._ExtensionFactories[vv] = zv;
        const hv = Pv ?? 0;
        th._ExtensionOrders[vv] = hv;
        let ev = th._ExtensionNames.length;
        for (let Sv = 0; Sv < th._ExtensionNames.length; Sv++) {
          const vv = th._ExtensionNames[Sv];
          if (hv < th._ExtensionOrders[vv]) {
            ev = Sv;
            break
          }
        }
        th._ExtensionNames.splice(ev, 0, vv)
      }
      static UnregisterExtension(vv) {
        if (!th._ExtensionFactories[vv]) return !1;
        delete th._ExtensionFactories[vv], delete th._ExtensionOrders[vv];
        const zv = th._ExtensionNames.indexOf(vv);
        return -1 !== zv && th._ExtensionNames.splice(zv, 1), !0
      }
      _generateJSON(vv, zv, Pv) {
        const hv = {
          byteLength: vv
        };
        return hv.byteLength && (this._glTF.buffers = [hv]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.Is = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (hv.uri = zv + ".bin"), Pv ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(vv) {
        const zv = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const Pv = this._generateJSON(zv.byteLength, vv, !0),
          hv = new Blob([zv], {
            type: "application/octet-stream"
          }),
          Sv = vv + ".gltf",
          ev = vv + ".bin",
          gv = new Nv;
        if (gv.files[Sv] = Pv, gv.files[ev] = hv, this._imageData)
          for (const pv in this._imageData) gv.files[pv] = this._imageData[pv];
        return gv
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(vv) {
        const zv = vv % 4;
        return 0 === zv ? zv : 4 - zv
      }
      async generateGLBAsync(vv) {
        this._shouldUseGlb = !0;
        const zv = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const Pv = this._generateJSON(zv.byteLength),
          hv = vv + ".glb";
        let Sv, ev = Pv.length;
        if ("undefined" !== typeof TextEncoder) {
          Sv = (new TextEncoder).encode(Pv), ev = Sv.length
        }
        const gv = this._getPadding(ev),
          pv = this._getPadding(zv.byteLength),
          dv = 28 + ev + gv + zv.byteLength + pv,
          lv = new vh(dv);
        if (lv.writeUInt32(1179937895), lv.writeUInt32(2), lv.writeUInt32(dv), lv.writeUInt32(ev + gv), lv.writeUInt32(1313821514), Sv) lv.writeTypedArray(Sv);
        else {
          const vv = "_".charCodeAt(0);
          for (let zv = 0; zv < ev; ++zv) {
            const hv = Pv.charCodeAt(zv);
            hv != Pv.codePointAt(zv) ? lv.writeUInt8(vv) : lv.writeUInt8(hv)
          }
        }
        for (let Nv = 0; Nv < gv; ++Nv) lv.writeUInt8(32);
        lv.writeUInt32(zv.byteLength + pv), lv.writeUInt32(5130562), lv.writeTypedArray(zv);
        for (let Nv = 0; Nv < pv; ++Nv) lv.writeUInt8(0);
        const Tv = new Nv;
        return Tv.files[hv] = new Blob([lv.getOutputData()], {
          type: "application/octet-stream"
        }), Tv
      }
      _setNodeTransformation(vv, zv, Pv) {
        if (zv.getPivotPoint().equalsWithEpsilon(IP, xP.e) || Sv.Tools.Warn("Pivot points are not supported in the glTF serializer"), !zv.position.equalsWithEpsilon(IP, xP.e)) {
          const Sv = hv.TmpVectors.fa[0].Vzv(zv.position);
          Pv && BP(Sv), vv.translation = Sv.pPv()
        }
        zv.pp.equalsWithEpsilon(ZP, xP.e) || (vv.scale = zv.pp.pPv());
        const ev = zv.rotationQuaternion?.clone() || hv.Quaternion.FromEulerAngles(zv.rotation.x, zv.rotation.y, zv.rotation.z);
        ev.equalsWithEpsilon(QP, xP.e) || (Pv && JP(ev), vv.rotation = ev.normalize().pPv())
      }
      _setCameraTransformation(vv, zv, Pv) {
        const Sv = hv.TmpVectors.fa[0],
          ev = hv.TmpVectors.Quaternion[0],
          gv = zv.getWorldMatrix();
        if (zv.parent) {
          const vv = zv.parent.getWorldMatrix().invertToRef(hv.TmpVectors.Matrix[0]);
          gv.multiplyToRef(vv, hv.TmpVectors.Matrix[1]).decompose(void 0, ev, Sv)
        } else gv.decompose(void 0, ev, Sv);
        Sv.equalsWithEpsilon(IP, xP.e) || (Pv && BP(Sv), vv.translation = Sv.pPv()), Pv && JP(ev), this._babylonScene.useRightHandedSystem || EP(ev), ev.equalsWithEpsilon(QP, xP.e) || (vv.rotation = ev.pPv())
      }
      _listAvailableCameras() {
        for (const vv of this._babylonScene.cameras) {
          const zv = {
            type: vv.mode === hh.c.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (vv.name && (zv.name = vv.name), "perspective" === zv.type) zv.perspective = {
            aspectRatio: vv.ma().getAspectRatio(vv),
            yfov: vv.fovMode === hh.c.FOVMODE_VERTICAL_FIXED ? vv.fov : vv.fov * vv.ma().getAspectRatio(vv),
            znear: vv.minZ,
            zfar: vv.maxZ
          };
          else if ("orthographic" === zv.type) {
            const Pv = vv.orthoLeft && vv.orthoRight ? .5 * (vv.orthoRight - vv.orthoLeft) : .5 * vv.ma().getRenderWidth(),
              hv = vv.orthoBottom && vv.orthoTop ? .5 * (vv.orthoTop - vv.orthoBottom) : .5 * vv.ma().getRenderHeight();
            zv.orthographic = {
              xmag: Pv,
              ymag: hv,
              znear: vv.minZ,
              zfar: vv.maxZ
            }
          }
          this._camerasMap.set(vv, zv)
        }
      }
      _exportAndAssignCameras() {
        const vv = Array.from(this._camerasMap.values());
        for (const zv of vv) {
          const vv = this._nodesCameraMap.get(zv);
          if (void 0 !== vv) {
            this._cameras.push(zv);
            for (const zv of vv) zv.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const vv of this._babylonScene.skeletons) {
          if (vv.bones.length <= 0) continue;
          const zv = {
            joints: []
          };
          this._skinMap.set(vv, zv)
        }
      }
      _exportAndAssignSkeletons(vv) {
        for (const Pv of this._babylonScene.skeletons) {
          if (Pv.bones.length <= 0) continue;
          const ev = this._skinMap.get(Pv);
          if (void 0 == ev) continue;
          const gv = {};
          let pv = -1;
          for (let vv = 0; vv < Pv.bones.length; ++vv) {
            const zv = Pv.bones[vv],
              hv = zv.getIndex() ?? vv; - 1 !== hv && (gv[hv] = zv, hv > pv && (pv = hv))
          }
          const dv = [];
          for (let Pv = 0; Pv <= pv; ++Pv) {
            const pv = gv[Pv],
              Nv = pv.getTransformNode(),
              lv = Nv ? this._nodeMap.get(Nv) : void 0;
            if (void 0 === lv) {
              Sv.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            ev.joints.push(lv);
            const Tv = pv.getAbsoluteInverseBindMatrix().clone();
            vv.has(Nv) && (zv = Tv, tP.invertToRef(hv.TmpVectors.Matrix[0]).multiplyToRef(zv, zv).multiplyToRef(tP, zv)), dv.push(Tv)
          }
          const Nv = this._nodesSkinMap.get(ev);
          if (ev.joints.length > 0 && void 0 !== Nv) {
            const vv = new Float32Array(16 * dv.length);
            dv.forEach(((zv, Pv) => {
              vv.set(zv.m, 16 * Pv)
            }));
            const zv = this._bufferManager.createBufferView(vv);
            this._accessors.push(this._bufferManager.createAccessor(zv, "MAT4", 5126, dv.length)), ev.inverseBindMatrices = this._accessors.length - 1, this._skins.push(ev);
            const Pv = this._skins.length - 1;
            for (const hv of Nv) hv.skin = Pv
          }
        }
        var zv
      }
      async _exportSceneAsync() {
        const vv = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const zv = this._options.metadataSelector(this._babylonScene.metadata);
          zv && (vv.extras = zv)
        }
        const zv = new Array,
          Pv = new Array,
          hv = new Array,
          Sv = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let ev;
        if (Sv && !this._options.includeCoordinateSystemConversionNodes)
          for (const Nv of this._babylonScene.animationGroups)
            for (const vv of Nv.targetedAnimations) {
              const zv = vv.target;
              zv instanceof Tv.b && !zv.parent && (ev ?? (ev = new Set)).add(zv)
            }
        for (const Nv of this._babylonScene.rootNodes) {
          const vv = Nv.animations,
            gv = !!vv && vv.length > 0 || ev?.has(Nv);
          Sv && !this._options.includeCoordinateSystemConversionNodes && qP(Nv, this._babylonScene.useRightHandedSystem) && !gv ? hv.push(...Nv.getChildren()) : this._babylonScene.useRightHandedSystem ? zv.push(Nv) : Pv.push(Nv)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const gv = new xh(!0, !1);
        vv.nodes.push(...await this._exportNodesAsync(Pv, gv));
        const pv = new xh(!1, !1);
        vv.nodes.push(...await this._exportNodesAsync(zv, pv));
        const dv = new xh(!1, !0);
        vv.nodes.push(...await this._exportNodesAsync(hv, dv)), vv.nodes.length && this._scenes.push(vv), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(gv.getNodesSet()), this._babylonScene.animationGroups.length && Th._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, gv.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(vv) {
        return this._nodeMap.get(vv)
      }
      _getAnimationIndex(vv) {
        return this._animationGroupMap.get(vv)
      }
      _getCameraIndex(vv) {
        const zv = this._camerasMap.get(vv);
        if (!zv) return;
        const Pv = this._cameras.indexOf(zv);
        return Pv >= 0 ? Pv : void 0
      }
      _getMaterialIndex(vv) {
        return this._materialMap.get(vv)
      }
      _getRootIndex(vv, zv) {
        switch (vv) {
          case "nodes":
            return this._getNodeIndex(zv);
          case "animations":
            return this._getAnimationIndex(zv);
          case "cameras":
            return this._getCameraIndex(zv);
          case "materials":
            return this._getMaterialIndex(zv);
          case "meshes": {
            const vv = this._getNodeIndex(zv);
            return void 0 === vv ? void 0 : this._nodes[vv]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(zv)?.index;
          case "images": {
            const vv = this._materialExporter.getTextureInfo(zv)?.index;
            if (void 0 === vv) return;
            const Pv = this._textures[vv];
            for (const zv of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const vv = Pv?.extensions?.[zv]?.source;
              if ("number" === typeof vv) return vv
            }
            return Pv?.source
          }
          case "samplers": {
            const vv = this._materialExporter.getTextureInfo(zv)?.index;
            return void 0 === vv ? void 0 : this._textures[vv]?.sampler
          }
          case "skins": {
            const vv = this._skinMap.get(zv),
              Pv = vv ? this._skins.indexOf(vv) : -1;
            return Pv >= 0 ? Pv : void 0
          }
          case "scenes":
            return zv === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(vv, zv, Pv) {
        const hv = this._nodes[vv];
        if (!hv) throw new Error(`Cannot write ${zv}: glTF node ${vv} does not exist.`);
        hv.extensions || (hv.extensions = {}), hv.extensions[zv] = Pv
      }
      _shouldExportNode(vv) {
        let zv = this._shouldExportNodeMap.get(vv);
        return void 0 === zv && (zv = this._options.shouldExportNode(vv), this._shouldExportNodeMap.set(vv, zv)), zv
      }
      async _exportNodesAsync(vv, zv) {
        const Pv = new Array;
        this._exportBuffers(vv, zv);
        for (const hv of vv) await this._exportNodeAsync(hv, Pv, zv);
        return Pv
      }
      _collectBuffers(vv, zv, Pv, hv, Sv) {
        if (this._shouldExportNode(vv) && vv instanceof Wv.e && vv.geometry) {
          const ev = vv.geometry.getVertexBuffers();
          if (ev)
            for (const hv in ev) {
              if (!MP(hv)) continue;
              const gv = ev[hv];
              Sv.setHasVertexColorAlpha(gv, vv.hasVertexAlpha);
              const pv = gv._buffer,
                dv = zv.get(pv) || [];
              zv.set(pv, dv), -1 === dv.indexOf(gv) && dv.push(gv);
              const Nv = Pv.get(gv) || [];
              Pv.set(gv, Nv), -1 === Nv.indexOf(vv) && Nv.push(vv)
            }
          const gv = vv.morphTargetManager;
          if (gv)
            for (let zv = 0; zv < gv.numTargets; zv++) {
              const Pv = gv.getTarget(zv),
                Sv = hv.get(Pv) || [];
              hv.set(Pv, Sv), -1 === Sv.indexOf(vv) && Sv.push(vv)
            }
        }
        for (const ev of vv.getChildren()) this._collectBuffers(ev, zv, Pv, hv, Sv)
      }
      _exportBuffers(vv, zv) {
        const Pv = new Map,
          hv = new Map,
          Sv = new Map;
        for (const pv of vv) this._collectBuffers(pv, Pv, hv, Sv, zv);
        const ev = Array.from(Pv.keys());
        for (const pv of ev) {
          const vv = pv.getData();
          if (!vv) throw new Error("Buffer data is not available");
          const Sv = Pv.get(pv);
          if (!Sv) continue;
          const ev = Sv[0].byteStride;
          if (Sv.some((vv => vv.byteStride !== ev))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const gv = rP(vv).slice();
          for (const zv of Sv) {
            const vv = hv.get(zv),
              {
                byteOffset: Pv,
                byteStride: Sv,
                componentCount: ev,
                type: pv,
                count: dv,
                normalized: Nv,
                kind: Tv
              } = LP(zv, vv);
            switch (Tv) {
              case lv.i.NormalKind:
              case lv.i.TangentKind:
                (0, UP.j)(gv, Pv, Sv, ev, pv, dv, Nv, (vv => {
                  const zv = Math.sqrt(vv[0] * vv[0] + vv[1] * vv[1] + vv[2] * vv[2]);
                  if (zv > 0) {
                    const Pv = 1 / zv;
                    vv[0] *= Pv, vv[1] *= Pv, vv[2] *= Pv
                  }
                }));
                break;
              case lv.i.ColorKind: {
                const zv = vv.filter((vv => vv.material instanceof eh.StandardMaterial || null == vv.material)).length;
                if (0 == zv) break;
                if (zv != vv.length) {
                  Dv.d.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                pv == lv.i.UNSIGNED_BYTE && Dv.d.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const hv = new Cv.Color3,
                  Tv = new Cv.d,
                  Wv = this._babylonScene.ma().useExactSrgbConversions;
                (0, UP.j)(gv, Pv, Sv, ev, pv, dv, Nv, (vv => {
                  3 === vv.length ? (hv.Evv(vv, 0), hv.toLinearSpaceToRef(hv, Wv), hv.toArray(vv, 0)) : (Tv.Evv(vv, 0), Tv.toLinearSpaceToRef(Tv, Wv), Tv.toArray(vv, 0))
                }))
              }
            }
          }
          if (zv.convertToRightHanded) {
            for (const vv of Sv) {
              const zv = hv.get(vv),
                {
                  byteOffset: Pv,
                  byteStride: Sv,
                  componentCount: ev,
                  type: pv,
                  count: dv,
                  normalized: Nv,
                  kind: Tv
                } = LP(vv, zv);
              switch (Tv) {
                case lv.i.PositionKind:
                case lv.i.NormalKind:
                case lv.i.TangentKind:
                  (0, UP.j)(gv, Pv, Sv, ev, pv, dv, Nv, (vv => {
                    vv[0] = -vv[0]
                  }))
              }
            }
            zv.convertedToRightHandedBuffers.set(pv, gv)
          }
          const dv = this._bufferManager.createBufferView(gv, ev);
          zv.setVertexBufferView(pv, dv);
          const Nv = new Map;
          for (const zv of Sv) {
            const vv = hv.get(zv),
              {
                kind: Pv,
                totalVertices: Sv
              } = LP(zv, vv);
            switch (Pv) {
              case lv.i.MatricesIndicesKind:
              case lv.i.MatricesIndicesExtraKind:
                if (zv.type == lv.i.FLOAT) {
                  const vv = zv.getFloatData(Sv);
                  null !== vv && Nv.set(zv, vv)
                }
            }
          }
          0 !== Nv.size && Dv.d.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const Tv = Array.from(Nv.keys());
          for (const Pv of Tv) {
            const vv = Nv.get(Pv);
            if (!vv) continue;
            const hv = vv.some((vv => vv >= 256)),
              Sv = new(hv ? Uint16Array : Uint8Array)(vv.length);
            for (let zv = 0; zv < vv.length; zv++) Sv[zv] = vv[zv];
            const ev = this._bufferManager.createBufferView(Sv, 4 * (hv ? 2 : 1));
            zv.setRemappedBufferView(pv, Pv, ev)
          }
        }
        const gv = Array.from(Sv.keys());
        for (const pv of gv) {
          const vv = Sv.get(pv);
          if (!vv) continue;
          const Pv = Wh(pv, vv[0], this._bufferManager, this._bufferViews, this._accessors, zv.convertToRightHanded);
          for (const hv of vv) zv.bindMorphDataToMesh(hv, Pv)
        }
      }
      async _exportNodeAsync(vv, zv, Pv) {
        let hv = this._nodeMap.get(vv);
        if (void 0 !== hv) return void(zv.includes(hv) || zv.push(hv));
        const Sv = await this._createNodeAsync(vv, Pv);
        if (Sv) {
          hv = this._nodes.length, this._nodes.push(Sv), this._nodeMap.set(vv, hv), Pv.pushExportedNode(vv), zv.push(hv);
          const ev = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            gv = [];
          this._babylonScene.animationGroups.length || (Th._CreateMorphTargetAnimationFromMorphTargetAnimations(vv, ev, gv, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Pv.convertToRightHanded, this._options.shouldExportAnimation), vv.animations.length && Th._CreateNodeAnimationFromNodeAnimations(vv, ev, gv, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Pv.convertToRightHanded, this._options.shouldExportAnimation)), ev.channels.length && ev.samplers.length && this._animations.push(ev), gv.forEach((vv => {
            vv.channels.length && vv.samplers.length && this._animations.push(vv)
          }))
        }
        const ev = Sv ? [] : zv;
        for (const gv of vv.getChildren()) await this._exportNodeAsync(gv, ev, Pv);
        Sv && ev.length && (Sv.children = ev)
      }
      async _createNodeAsync(vv, zv) {
        if (!this._shouldExportNode(vv)) return null;
        const Pv = {};
        if (vv.name && (Pv.name = vv.name), vv.metadata) {
          const zv = this._options.metadataSelector(vv.metadata);
          zv && (Pv.extras = zv)
        }
        if (vv instanceof Tv.b && (this._setNodeTransformation(Pv, vv, zv.convertToRightHanded), vv instanceof Wv.e)) {
          const hv = vv instanceof wv.d ? vv.hhv : vv;
          if (hv.sF && hv.sF.length > 0 && (Pv.mesh = await this._exportMeshAsync(hv, zv)), vv.skeleton) {
            const zv = this._skinMap.get(vv.skeleton);
            void 0 !== zv && (void 0 === this._nodesSkinMap.get(zv) && this._nodesSkinMap.set(zv, []), this._nodesSkinMap.get(zv)?.push(Pv))
          }
        }
        if (vv instanceof RP.e) {
          const hv = this._camerasMap.get(vv);
          if (hv) {
            void 0 === this._nodesCameraMap.get(hv) && this._nodesCameraMap.set(hv, []), this._setCameraTransformation(Pv, vv, zv.convertToRightHanded);
            const Sv = vv.parent;
            if (null !== Sv && bP(vv, Sv)) {
              const vv = this._nodeMap.get(Sv);
              if (void 0 !== vv) {
                const zv = this._nodes[vv];
                return oP(Pv, zv), this._nodesCameraMap.get(hv)?.push(zv), null
              }
            }
            this._nodesCameraMap.get(hv)?.push(Pv)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", Pv, vv, this._nodeMap, zv.convertToRightHanded) ? Pv : (Dv.d.Warn(`Not exporting node ${vv.name}`), null)
      }
      _exportIndices(vv, zv, Pv, hv, Sv, gv, pv, dv, Nv) {
        let lv = null;
        Nv.mode = function(vv) {
          switch (vv) {
            case ev.b.TriangleFillMode:
              return 4;
            case ev.b.TriangleStripDrawMode:
              return 5;
            case ev.b.TriangleFanDrawMode:
              return 6;
            case ev.b.PointListDrawMode:
            case ev.b.PointFillMode:
              return 0;
            case ev.b.LineLoopDrawMode:
              return 2;
            case ev.b.LineListDrawMode:
              return 1;
            case ev.b.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${vv}`)
        }(gv);
        const Tv = pv !== ev.b.CounterClockWiseSideOrientation && function(vv) {
          switch (vv) {
            case ev.b.TriangleFillMode:
            case ev.b.TriangleStripDrawMode:
            case ev.b.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(gv);
        if (Tv) {
          if (gv === ev.b.TriangleStripDrawMode || gv === ev.b.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const pv = zv ? new Uint32Array(hv) : new Uint16Array(hv);
          if (vv)
            for (let zv = 0; zv + 2 < hv; zv += 3) pv[zv] = vv[Pv + zv] + Sv, pv[zv + 1] = vv[Pv + zv + 2] + Sv, pv[zv + 2] = vv[Pv + zv + 1] + Sv;
          else
            for (let vv = 0; vv + 2 < hv; vv += 3) pv[vv] = vv, pv[vv + 1] = vv + 2, pv[vv + 2] = vv + 1;
          lv = pv
        } else if (vv && 0 !== Sv) {
          const ev = zv ? new Uint32Array(hv) : new Uint16Array(hv);
          for (let zv = 0; zv < hv; zv++) ev[zv] = vv[Pv + zv] + Sv;
          lv = ev
        } else vv && (lv = function(vv, zv, Pv, hv) {
          let Sv = vv;
          return 0 === zv && Pv === vv.length || (Sv = Array.isArray(vv) ? vv.slice(zv, zv + Pv) : vv.subarray(zv, zv + Pv)), Sv instanceof Int32Array ? new Uint32Array(Sv.buffer, Sv.byteOffset, Sv.length) : Array.isArray(Sv) ? hv ? new Uint32Array(Sv) : new Uint16Array(Sv) : Sv
        }(vv, Pv, hv, zv));
        if (lv) {
          let ev = dv.getIndicesAccessor(vv, Pv, hv, Sv, Tv);
          if (void 0 === ev) {
            const gv = this._bufferManager.createBufferView(lv),
              pv = zv ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(gv, "SCALAR", pv, hv, 0)), ev = this._accessors.length - 1, dv.setIndicesAccessor(vv, Pv, hv, Sv, Tv, ev)
          }
          Nv.indices = ev
        }
      }
      _exportVertexBuffer(vv, zv, Pv, hv, Sv, ev) {
        const gv = vv.getKind();
        if (!MP(gv)) return;
        if (gv.startsWith("uv") && !this._options.exportUnusedUVs && (!zv || !this._materialNeedsUVsSet.has(zv))) return;
        let pv = Sv.getVertexAccessor(vv, Pv, hv);
        if (void 0 === pv) {
          const zv = Sv.convertedToRightHandedBuffers.get(vv._buffer) || vv._buffer.getData(),
            ev = gv === lv.i.PositionKind ? function(vv, zv, Pv, hv) {
              const {
                byteOffset: Sv,
                byteStride: ev,
                type: gv,
                normalized: pv
              } = zv, dv = zv.getSize(), Nv = new Array(dv).fill(1 / 0), lv = new Array(dv).fill(-1 / 0);
              return (0, UP.j)(vv, Sv + Pv * ev, ev, dv, gv, hv * dv, pv, (vv => {
                for (let zv = 0; zv < dv; zv++) Nv[zv] = Math.min(Nv[zv], vv[zv]), lv[zv] = Math.max(lv[zv], vv[zv])
              })), {
                min: Nv,
                max: lv
              }
            }(zv, vv, Pv, hv) : void 0,
            dv = (gv === lv.i.MatricesIndicesKind || gv === lv.i.MatricesIndicesExtraKind) && vv.type === lv.i.FLOAT,
            Nv = dv ? lv.i.UNSIGNED_BYTE : vv.type,
            Tv = dv ? void 0 : vv.normalized,
            Wv = dv ? Sv.getRemappedBufferView(vv._buffer, vv) : Sv.getVertexBufferView(vv._buffer),
            wv = vv.byteOffset + Pv * vv.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(Wv, function(vv, zv) {
            if (vv == lv.i.ColorKind) return zv ? "VEC4" : "VEC3";
            switch (vv) {
              case lv.i.PositionKind:
              case lv.i.NormalKind:
                return "VEC3";
              case lv.i.TangentKind:
              case lv.i.MatricesIndicesKind:
              case lv.i.MatricesIndicesExtraKind:
              case lv.i.MatricesWeightsKind:
              case lv.i.MatricesWeightsExtraKind:
                return "VEC4";
              case lv.i.UVKind:
              case lv.i.UV2Kind:
              case lv.i.UV3Kind:
              case lv.i.UV4Kind:
              case lv.i.UV5Kind:
              case lv.i.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${vv}`)
          }(gv, Sv.hasVertexColorAlpha(vv)), Nv, hv, wv, ev, Tv)), pv = this._accessors.length - 1, Sv.setVertexAccessor(vv, Pv, hv, pv)
        }
        ev.attributes[function(vv) {
          switch (vv) {
            case lv.i.PositionKind:
              return "POSITION";
            case lv.i.NormalKind:
              return "NORMAL";
            case lv.i.TangentKind:
              return "TANGENT";
            case lv.i.ColorKind:
              return "COLOR_0";
            case lv.i.UVKind:
              return "TEXCOORD_0";
            case lv.i.UV2Kind:
              return "TEXCOORD_1";
            case lv.i.UV3Kind:
              return "TEXCOORD_2";
            case lv.i.UV4Kind:
              return "TEXCOORD_3";
            case lv.i.UV5Kind:
              return "TEXCOORD_4";
            case lv.i.UV6Kind:
              return "TEXCOORD_5";
            case lv.i.MatricesIndicesKind:
              return "JOINTS_0";
            case lv.i.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case lv.i.MatricesWeightsKind:
              return "WEIGHTS_0";
            case lv.i.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${vv}`)
        }(gv)] = pv
      }
      async _exportMaterialAsync(vv, zv, Pv, hv) {
        let Sv = this._materialMap.get(vv);
        if (void 0 === Sv) {
          const hv = zv && Object.keys(zv).some((vv => vv.startsWith("uv")));
          if ((vv = vv instanceof Sh.d ? vv.T_[Pv.materialIndex] : vv) instanceof fz) Sv = await this._materialExporter.exportPBRMaterialAsync(vv, hv);
          else if (vv instanceof eh.StandardMaterial) Sv = await this._materialExporter.exportStandardMaterialAsync(vv, hv);
          else {
            if (!(vv instanceof Xz)) return void Dv.d.Warn(`Unsupported material '${vv.name}' with type ${vv.getClassName()}`);
            Sv = await this._materialExporter.exportOpenPBRMaterialAsync(vv, hv)
          }
          this._materialMap.set(vv, Sv)
        }
        hv.material = Sv
      }
      async _exportMeshAsync(vv, zv) {
        let Pv = zv.getMesh(vv);
        if (void 0 !== Pv) return Pv;
        const hv = {
          primitives: []
        };
        Pv = this._meshes.length, this._meshes.push(hv), zv.setMesh(vv, Pv);
        const Sv = vv.isUnIndexed ? null : vv.dPv(),
          gv = vv.geometry?.getVertexBuffers(),
          pv = zv.getMorphTargetsFromMesh(vv),
          dv = vv instanceof wh.c,
          Nv = vv instanceof Rh,
          lv = vv.sF;
        if (gv && lv && lv.length > 0)
          for (const Tv of lv) {
            const Pv = {
                attributes: {}
              },
              lv = Tv.na() || this._babylonScene.defaultMaterial;
            if (Nv) {
              const zv = {
                  name: lv.name
                },
                hv = vv,
                Sv = Cv.Color3.White(),
                ev = hv.material?.alpha ?? 1,
                gv = hv.greasedLineMaterial?.color ?? Sv;
              (!gv.equalsWithEpsilon(Sv, xP.e) || ev < 1) && (zv.pbrMetallicRoughness = {
                baseColorFactor: [...gv.pPv(), ev]
              }), this._materials.push(zv), Pv.material = this._materials.length - 1
            } else if (dv) {
              const zv = {
                  name: lv.name
                },
                hv = vv;
              (!hv.color.equalsWithEpsilon(Cv.Color3.White(), xP.e) || hv.alpha < 1) && (zv.pbrMetallicRoughness = {
                baseColorFactor: [...hv.color.pPv(), hv.alpha]
              }), this._materials.push(zv), Pv.material = this._materials.length - 1
            } else await this._exportMaterialAsync(lv, gv, Tv, Pv);
            const Wv = dv || Nv ? ev.b.LineListDrawMode : vv.overrideRenderingFillMode ?? lv.fillMode;
            let wv = lv._getEffectiveOrientation(vv);
            zv.wasAddedByNoopNode && !vv.rD().useRightHandedSystem && (wv = wv === ev.b.ClockWiseSideOrientation ? ev.b.CounterClockWiseSideOrientation : ev.b.ClockWiseSideOrientation), this._exportIndices(Sv, Sv ? (0, UP.c)(Sv, Tv.indexCount, Tv.indexStart, Tv.verticesStart) : Tv.verticesCount > 65535, Sv ? Tv.indexStart : Tv.verticesStart, Sv ? Tv.indexCount : Tv.verticesCount, -Tv.verticesStart, Wv, wv, zv, Pv);
            for (const vv of Object.values(gv)) this._exportVertexBuffer(vv, lv, Tv.verticesStart, Tv.verticesCount, zv, Pv);
            if (pv) {
              Pv.targets = [];
              for (const vv of pv) Pv.targets.push(vv.attributes)
            }
            hv.primitives.push(Pv), this._extensionsPostExportMeshPrimitive(Pv)
          }
        if (pv) {
          hv.weights = [], hv.extras || (hv.extras = {}), hv.extras.targetNames = [];
          for (const vv of pv) hv.weights.push(vv.influence), hv.extras.targetNames.push(vv.name)
        }
        return Pv
      }
    }
    th._ExtensionNames = new Array, th._ExtensionFactories = {}, th._ExtensionOrders = {};
    class qh {
      static async GLTFAsync(vv, zv, Pv) {
        Pv && Pv.exportWithoutWaitingForScene || await vv.whenReadyAsync();
        const hv = new th(vv, Pv),
          Sv = await hv.generateGLTFAsync(zv.replace(/\.[^/.]+$/, ""));
        return hv.dispose(), Sv
      }
      static async GLBAsync(vv, zv, Pv) {
        Pv && Pv.exportWithoutWaitingForScene || await vv.whenReadyAsync();
        const hv = new th(vv, Pv),
          Sv = await hv.generateGLBAsync(zv.replace(/\.[^/.]+$/, ""));
        return hv.dispose(), Sv
      }
    }
    const Ih = "EXT_mesh_gpu_instancing";

    function Qh(vv, zv) {
      const Pv = new Float32Array(3 * zv);
      for (let hv = 0; hv < zv; hv++) Pv[3 * hv + 0] = vv[4 * hv + 0], Pv[3 * hv + 1] = vv[4 * hv + 1], Pv[3 * hv + 2] = vv[4 * hv + 2];
      return Pv
    }
    class Zh {
      constructor(vv) {
        this.name = Ih, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = vv
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(vv, zv, Pv, hv, Sv, ev) {
        return await new Promise((vv => {
          if (zv && Pv instanceof fh.c && Pv.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const vv = Zv.l.Zero(),
              hv = Zv.d.Identity(),
              gv = Zv.l.One(),
              pv = Pv.thinInstanceGetWorldMatrices(),
              dv = Zv.i.fa[2],
              Nv = Zv.i.Quaternion[1],
              lv = Zv.i.fa[3];
            let Tv = !1,
              Wv = !1,
              wv = !1;
            const av = new Float32Array(3 * Pv.yX),
              sv = new Float32Array(4 * Pv.yX),
              Cv = new Float32Array(3 * Pv.yX);
            let iv = 0;
            for (const zv of pv) zv.decompose(lv, Nv, dv), Sv && (BP(dv), JP(Nv)), av.set(dv.pPv(), 3 * iv), sv.set(Nv.normalize().pPv(), 4 * iv), Cv.set(lv.pPv(), 3 * iv), Tv = Tv || !dv.equalsWithEpsilon(vv), Wv = Wv || !Nv.equalsWithEpsilon(hv), wv = wv || !lv.equalsWithEpsilon(gv), iv++;
            const cv = {
              attributes: {}
            };
            Tv && (cv.attributes.TRANSLATION = this._buildAccessor(av, "VEC3", Pv.yX, ev)), Wv && (cv.attributes.ROTATION = this._buildAccessor(sv, "VEC4", Pv.yX, ev)), wv && (cv.attributes.SCALE = this._buildAccessor(Cv, "VEC3", Pv.yX, ev));
            let Gv = Pv._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (Gv) {
              const vv = Pv.yX,
                zv = "VEC3";
              Pv.hasVertexAlpha && Gv.length === 4 * vv ? (this._instanceColorWarned || (Dv.d.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), Gv = Qh(Gv, vv)) : Gv.length === 4 * vv && (Gv = Qh(Gv, vv)), Gv.length === 3 * vv && (cv.attributes._COLOR_0 = this._buildAccessor(Gv, zv, vv, ev))
            }
            zv.extensions = zv.extensions || {}, zv.extensions[Ih] = cv
          }
          vv(zv)
        }))
      }
      _buildAccessor(vv, zv, Pv, hv) {
        const Sv = hv.createBufferView(vv),
          ev = hv.createAccessor(Sv, zv, 5126, Pv);
        return this._exporter._accessors.push(ev), this._exporter._accessors.length - 1
      }
    }
    let Ah = !1;

    function Lh() {
      Ah || (Ah = !0, th.RegisterExtension(Ih, (vv => new Zh(vv))))
    }
    Pv(39800);
    Lh();
    var Hh = Pv(41174);

    function Mh(vv, zv, Pv, hv) {
      const Sv = vv;
      let ev = null,
        gv = null,
        pv = null,
        dv = null;
      const Nv = {},
        lv = zv.find((vv => "POSITION" === vv.dracoName));
      if (!lv) throw new Error("Draco: Missing position attribute for encoding.");
      if (!Pv) {
        const vv = lv.data.length / lv.size;
        Pv = new(vv > 65535 ? Uint32Array : Uint16Array)(vv);
        for (let zv = 0; zv < vv; zv++) Pv[zv] = zv
      }
      try {
        ev = new Sv.Encoder, gv = new Sv.MeshBuilder, pv = new Sv.Mesh, gv.AddFacesToMesh(pv, Pv.length / 3, Pv);
        const vv = new Map([
          [Float32Array, (vv, zv, Pv, hv, Sv, ev) => vv.AddFloatAttribute(zv, Pv, hv, Sv, ev)],
          [Uint32Array, (vv, zv, Pv, hv, Sv, ev) => vv.AddUInt32Attribute(zv, Pv, hv, Sv, ev)],
          [Uint16Array, (vv, zv, Pv, hv, Sv, ev) => vv.AddUInt16Attribute(zv, Pv, hv, Sv, ev)],
          [Uint8Array, (vv, zv, Pv, hv, Sv, ev) => vv.AddUInt8Attribute(zv, Pv, hv, Sv, ev)],
          [Int32Array, (vv, zv, Pv, hv, Sv, ev) => vv.AddInt32Attribute(zv, Pv, hv, Sv, ev)],
          [Int16Array, (vv, zv, Pv, hv, Sv, ev) => vv.AddInt16Attribute(zv, Pv, hv, Sv, ev)],
          [Int8Array, (vv, zv, Pv, hv, Sv, ev) => vv.AddInt8Attribute(zv, Pv, hv, Sv, ev)]
        ]);
        for (const Pv of zv) {
          Pv.data instanceof Uint8ClampedArray && (Pv.data = new Uint8Array(Pv.data));
          const zv = vv.get(Pv.data.constructor),
            dv = Pv.data.length / Pv.size;
          Nv[Pv.kind] = zv(gv, pv, Sv[Pv.dracoName], dv, Pv.size, Pv.data), hv.quantizationBits && hv.quantizationBits[Pv.dracoName] && ev.SetAttributeQuantization(Sv[Pv.dracoName], hv.quantizationBits[Pv.dracoName])
        }
        hv.method && ev.SetEncodingMethod(Sv[hv.method]), void 0 !== hv.encodeSpeed && void 0 !== hv.decodeSpeed && ev.SetSpeedOptions(hv.encodeSpeed, hv.decodeSpeed), dv = new Sv.DracoInt8Array;
        const lv = ev.EncodeMeshToDracoBuffer(pv, dv);
        if (lv <= 0) throw new Error("Draco: Failed to encode.");
        const Tv = new Int8Array(lv);
        for (let zv = 0; zv < lv; zv++) Tv[zv] = dv.GetValue(zv);
        return {
          data: Tv,
          attributeIds: Nv
        }
      } finally {
        pv && Sv.destroy(pv), gv && Sv.destroy(gv), ev && Sv.destroy(ev), dv && Sv.destroy(dv)
      }
    }

    function yh() {
      let vv;
      onmessage = zv => {
        const Pv = zv.data;
        switch (Pv.id) {
          case "init": {
            Pv.url && importScripts(Pv.url);
            const zv = Pv.wasmBinary ? {
              wasmBinary: Pv.wasmBinary
            } : {};
            vv = DracoEncoderModule(zv), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!vv) throw new Error("Draco: Encoder module is not available.");
            vv.then((vv => {
              const zv = Mh(vv, Pv.attributes, Pv.indices, Pv.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: zv
              }, zv ? [zv.data.buffer] : void 0)
            })).catch((vv => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: vv.message
              })
            }))
        }
      }
    }
    class Bh {
      constructor(vv) {
        if (vv.workerPool) return void(this._workerPoolPromise = Promise.resolve(vv.workerPool));
        const zv = vv.wasmBinary,
          Pv = vv.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          hv = Pv && "function" === typeof Worker && "function" === typeof URL,
          Sv = hv || !vv.jsModule,
          ev = vv.wasmUrl && vv.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: Sv ? Yz.h.GetBabylonScriptURL(vv.wasmUrl, !0) : "",
            wasmBinaryPromise: zv ? Promise.resolve(zv) : Yz.h.LoadFileAsync(Yz.h.GetBabylonScriptURL(vv.wasmBinaryUrl, !0))
          } : {
            url: Sv ? Yz.h.GetBabylonScriptURL(vv.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        hv ? this._workerPoolPromise = ev.wasmBinaryPromise.then((vv => {
          const zv = this._getWorkerContent(),
            hv = URL.createObjectURL(new Blob([zv], {
              type: "application/javascript"
            }));
          return new Hh.c(Pv, (() => async function(vv, zv, Pv) {
            return await new Promise(((hv, Sv) => {
              const ev = zv => {
                  vv.removeEventListener("error", ev), vv.removeEventListener("message", gv), Sv(zv)
                },
                gv = zv => {
                  "initDone" === zv.data.id && (vv.removeEventListener("error", ev), vv.removeEventListener("message", gv), hv(vv))
                };
              if (vv.addEventListener("error", ev), vv.addEventListener("message", gv), zv) {
                const hv = zv.slice(0);
                vv.postMessage({
                  id: "init",
                  url: Pv,
                  wasmBinary: hv
                }, [hv])
              } else vv.postMessage({
                id: "init",
                url: Pv
              })
            }))
          }(new Worker(hv), vv, ev.url)))
        })) : this._modulePromise = ev.wasmBinaryPromise.then((async zv => {
          if (!this._isModuleAvailable() && !vv.jsModule) {
            if (!ev.url) throw new Error("Draco codec module is not available");
            await Yz.h.LoadBabylonScriptAsync(ev.url)
          }
          return await this._createModuleAsync(zv, vv.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((vv => {
          vv.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function Jh() {
      const vv = vv => !!vv && "object" === typeof vv;
      for (var zv = arguments.length, Pv = new Array(zv), hv = 0; hv < zv; hv++) Pv[hv] = arguments[hv];
      return Pv.reduce(((zv, Pv) => {
        const hv = Object.keys(Pv);
        for (const Sv of hv) {
          const hv = zv[Sv],
            ev = Pv[Sv];
          Array.isArray(hv) && Array.isArray(ev) ? zv[Sv] = hv.concat(ev) : vv(hv) && vv(ev) ? zv[Sv] = Jh(hv, ev) : zv[Sv] = ev
        }
        return zv
      }), {})
    }

    function Eh(vv) {
      return vv === Av.k.PositionKind ? "POSITION" : vv === Av.k.NormalKind ? "NORMAL" : vv === Av.k.ColorKind ? "COLOR" : vv.startsWith(Av.k.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const oh = {
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
    class bh extends Bh {
      static get DefaultAvailable() {
        return !!((vv = bh.DefaultConfiguration).wasmUrl && (vv.wasmBinary || vv.wasmBinaryUrl) && "object" === typeof WebAssembly || vv.fallbackUrl);
        var vv
      }
      static get Default() {
        return bh._Default ?? (bh._Default = new bh), bh._Default
      }
      static ResetDefault(vv) {
        bh._Default && (vv || bh._Default.dispose(), bh._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(vv, zv) {
        return {
          module: await (zv || DracoEncoderModule)({
            wasmBinary: vv
          })
        }
      }
      _getWorkerContent() {
        return `${Mh}(${yh})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bh.DefaultConfiguration)
      }
      async _encodeAsync(vv, zv, Pv) {
        const hv = Pv ? Jh(oh, Pv) : oh;
        if (this._workerPoolPromise) {
          const Pv = await this._workerPoolPromise;
          return await new Promise(((Sv, ev) => {
            Pv.push(((Pv, gv) => {
              const pv = vv => {
                  Pv.removeEventListener("error", pv), Pv.removeEventListener("message", dv), ev(vv), gv()
                },
                dv = vv => {
                  "encodeMeshSuccess" === vv.data.id ? (Pv.removeEventListener("error", pv), Pv.removeEventListener("message", dv), Sv(vv.data.encodedMeshData), gv()) : "encodeMeshError" === vv.data.id && (Pv.removeEventListener("error", pv), Pv.removeEventListener("message", dv), ev(new Error(vv.data.errorMessage)), gv())
                };
              Pv.addEventListener("error", pv), Pv.addEventListener("message", dv);
              const Nv = [];
              for (const zv of vv) Nv.push(zv.data.buffer);
              zv && Nv.push(zv.buffer), Pv.postMessage({
                id: "encodeMesh",
                attributes: vv,
                indices: zv,
                options: hv
              }, Nv)
            }))
          }))
        }
        if (this._modulePromise) {
          return Mh((await this._modulePromise).module, vv, zv, hv)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(vv, zv) {
        if (0 == vv.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        vv instanceof fh.c && vv.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === zv?.method && (Dv.d.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), zv.method = "MESH_SEQUENTIAL_ENCODING");
        const Pv = function(vv) {
            let zv = vv.dPv(void 0, !0);
            return !zv || zv instanceof Uint32Array || zv instanceof Uint16Array || (zv = ((0, UP.c)(zv, zv.length) ? Uint32Array : Uint16Array).from(zv)), zv
          }(vv),
          hv = function(vv, zv) {
            const Pv = [];
            for (const hv of vv.getVerticesDataKinds()) {
              if (zv?.includes(hv)) {
                if (hv === Av.k.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const Sv = vv.getVertexBuffer(hv),
                ev = Sv.getSize(),
                gv = (0, UP.t)(Sv.getData(), ev, Sv.type, Sv.byteOffset, Sv.byteStride, vv.getTotalVertices(), !0);
              Pv.push({
                kind: hv,
                dracoName: Eh(hv),
                size: ev,
                data: gv
              })
            }
            return Pv
          }(vv, zv?.excludedAttributes);
        return await this._encodeAsync(hv, Pv, zv)
      }
    }
    bh.DefaultConfiguration = {
      wasmUrl: `${Yz.h._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${Yz.h._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${Yz.h._DefaultCdnUrl}/draco_encoder.js`
    }, bh._Default = null;
    const rh = "KHR_draco_mesh_compression";
    class kh {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(vv) {
        this.name = rh, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === vv.options.meshCompressionMethod && bh.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(vv, zv, Pv) {
        if (!this.enabled) return;
        if (4 !== vv.mode && 5 !== vv.mode) return void Dv.d.Warn("Cannot compress primitive with mode " + vv.mode + ".");
        const hv = [],
          Sv = [];
        let ev = null;
        if (void 0 !== vv.indices) {
          const gv = Pv[vv.indices],
            pv = zv.getBufferView(gv);
          ev = zv.getData(pv).slice(), hv.push(pv), Sv.push(gv)
        }
        const gv = [];
        for (const [lv, Tv] of Object.entries(vv.attributes)) {
          const vv = Pv[Tv],
            ev = zv.getBufferView(vv),
            dv = HP(vv.type),
            Nv = (0, UP.t)(zv.getData(ev), dv, vv.componentType, vv.byteOffset || 0, ev.byteStride || (0, UP.q)(vv.componentType) * dv, vv.count, !0);
          gv.push({
            kind: lv,
            dracoName: (pv = lv, "POSITION" === pv ? "POSITION" : "NORMAL" === pv ? "NORMAL" : pv.startsWith("COLOR") ? "COLOR" : pv.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: HP(vv.type),
            data: Nv
          }), hv.push(ev), Sv.push(vv)
        }
        var pv;
        const dv = {
            method: vv.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          Nv = bh.Default._encodeAsync(gv, ev, dv).then((Pv => {
            const ev = {
                bufferView: -1,
                attributes: Pv.attributeIds
              },
              gv = zv.createBufferView(Pv.data);
            zv.setBufferView(ev, gv);
            for (const vv of hv) this._bufferViewsUsed.add(vv);
            for (const vv of Sv) this._accessorsUsed.add(vv);
            vv.extensions || (vv.extensions = {}), vv.extensions[rh] = ev
          })).catch((vv => {
            Dv.d.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + vv.message)
          }));
        this._encodePromises.push(Nv), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(vv) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((zv => {
          vv.getPropertiesWithBufferView(zv).every((vv => this._accessorsUsed.has(vv))) && vv.removeBufferView(zv)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let Xh = !1;

    function uh() {
      Xh || (Xh = !0, th.RegisterExtension(rh, (vv => new kh(vv))))
    }
    uh();
    var vS = Pv(40875);
    const zS = "KHR_lights_punctual",
      PS = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      hS = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      SS = Zv.l.Backward();
    class eS {
      constructor(vv) {
        this.name = zS, this.enabled = !0, this.required = !1, this._exporter = vv
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[zS] = this._lights
      }
      async postExportNodeAsync(vv, zv, Pv, hv, Sv) {
        return await new Promise((ev => {
          if (!(Pv instanceof lh.c)) return void ev(zv);
          const gv = Pv.getTypeID() == lh.c.LIGHTTYPEID_POINTLIGHT ? "point" : Pv.getTypeID() == lh.c.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : Pv.getTypeID() == lh.c.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!gv || !(Pv instanceof vS.d)) return Dv.d.Warn(`${vv}: Light ${Pv.name} is not supported in ${zS}`), void ev(zv);
          if (Pv.falloffType !== lh.c.FALLOFF_GLTF && Dv.d.Warn(`${vv}: Light falloff for ${Pv.name} does not match the ${zS} specification!`), !Pv.position.Mev(0, 0, 0)) {
            const vv = Zv.i.fa[0].Vzv(Pv.position);
            Sv && BP(vv), zv.translation = vv.pPv()
          }
          if ("point" !== gv) {
            const vv = Pv.direction.normalizeToRef(Zv.i.fa[0]);
            Sv && BP(vv);
            const hv = Zv.d.FromUnitVectorsToRef(SS, vv, Zv.i.Quaternion[0]);
            Zv.d.IsIdentity(hv) || (zv.rotation = hv.pPv())
          }
          const pv = {
            type: gv,
            name: Pv.name,
            color: Pv.diffuse.pPv(),
            intensity: Pv.intensity,
            range: Pv.range
          };
          if (kP(pv, PS), "spot" === gv) {
            const vv = Pv;
            pv.spot = {
              innerConeAngle: vv.innerAngle / 2,
              outerConeAngle: vv.angle / 2
            }, kP(pv.spot, hS)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(pv);
          const dv = {
              light: this._lights.lights.length - 1
            },
            Nv = Pv.parent;
          if (Nv && bP(Pv, Nv)) {
            const vv = hv.get(Nv);
            if (vv) {
              const Pv = this._exporter._nodes[vv];
              return oP(zv, Pv), Pv.extensions || (Pv.extensions = {}), Pv.extensions[zS] = dv, void ev(null)
            }
          }
          zv.extensions || (zv.extensions = {}), zv.extensions[zS] = dv, ev(zv)
        }))
      }
    }
    let gS = !1;

    function pS() {
      gS || (gS = !0, th.RegisterExtension(zS, (vv => new eS(vv))))
    }
    pS();
    const dS = "KHR_interactivity";
    class NS {
      constructor(vv) {
        this._exporter = vv, this.name = dS, this.enabled = !!vv.options.khrInteractivity, this.required = vv.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var vv, zv, Pv;
        const hv = this._exporter.options.khrInteractivity;
        if (!hv) return;
        const Sv = hv.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: vv => this._exporter._getNodeIndex(vv),
          getAnimationIndex: vv => this._exporter._getAnimationIndex(vv),
          getCameraIndex: vv => this._exporter._getCameraIndex(vv),
          getMaterialIndex: vv => this._exporter._getMaterialIndex(vv),
          getRootIndex: (vv, zv) => this._exporter._getRootIndex(vv, zv),
          setNodeExtension: (vv, zv, Pv) => this._exporter._setNodeExtension(vv, zv, Pv)
        });
        this._exporter._glTF.extensions[dS] = Sv;
        for (const ev of hv.additionalExtensionsUsed)(vv = this._exporter._glTF).extensionsUsed || (vv.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(ev) && this._exporter._glTF.extensionsUsed.push(ev);
        for (const ev of hv.additionalExtensionsRequired)(zv = this._exporter._glTF).extensionsUsed || (zv.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(ev) && this._exporter._glTF.extensionsUsed.push(ev), (Pv = this._exporter._glTF).extensionsRequired || (Pv.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(ev) && this._exporter._glTF.extensionsRequired.push(ev)
      }
    }
    let lS = !1;

    function TS() {
      lS || (lS = !0, th.RegisterExtension(dS, (vv => new NS(vv)), 200))
    }
    TS();
    const WS = "EXT_lights_area",
      wS = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      aS = {
        aspect: 1
      },
      sS = Zv.l.Backward();
    class CS {
      constructor(vv) {
        this.name = WS, this.enabled = !0, this.required = !1, this._exporter = vv
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[WS] = this._lights
      }
      async postExportNodeAsync(vv, zv, Pv, hv, Sv) {
        return await new Promise((ev => {
          if (!(Pv instanceof lh.c)) return void ev(zv);
          const gv = Pv.getTypeID() == lh.c.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!gv) return Dv.d.Warn(`${vv}: Light ${Pv.name} is not supported in ${WS}`), void ev(zv);
          const pv = Pv;
          if (pv.falloffType !== lh.c.FALLOFF_GLTF && Dv.d.Warn(`${vv}: Light falloff for ${Pv.name} does not match the ${WS} specification!`), !pv.position.Mev(0, 0, 0)) {
            const vv = Zv.i.fa[0].Vzv(pv.position);
            Sv && BP(vv), zv.translation = vv.pPv()
          }
          const dv = Zv.l.Forward();
          Sv && BP(dv);
          const Nv = Zv.d.FromUnitVectorsToRef(sS, dv, Zv.i.Quaternion[0]);
          Zv.d.IsIdentity(Nv) || (zv.rotation = Nv.pPv());
          const lv = {
            type: gv,
            name: pv.name,
            color: pv.diffuse.pPv(),
            intensity: pv.intensity,
            size: pv.height,
            rect: {
              aspect: pv.width / pv.height
            }
          };
          kP(lv, wS), lv.rect && kP(lv.rect, aS), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(lv);
          const Tv = {
              light: this._lights.lights.length - 1
            },
            Wv = Pv.parent;
          if (Wv && bP(pv, Wv)) {
            const vv = hv.get(Wv);
            if (vv) {
              const Pv = this._exporter._nodes[vv];
              return oP(zv, Pv), Pv.extensions || (Pv.extensions = {}), Pv.extensions[WS] = Tv, void ev(null)
            }
          }
          zv.extensions || (zv.extensions = {}), zv.extensions[WS] = Tv, ev(zv)
        }))
      }
    }
    let iS = !1;

    function cS() {
      iS || (iS = !0, th.RegisterExtension(WS, (vv => new CS(vv))))
    }
    cS();
    const GS = "KHR_materials_anisotropy";
    class mS {
      constructor(vv) {
        this.name = GS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = vv
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(vv, zv, Pv) {
        const hv = [];
        if (Pv instanceof fz) {
          if (Pv.anisotropy.isEnabled && !Pv.anisotropy.legacy) return Pv.anisotropy.texture && hv.push(Pv.anisotropy.texture), hv
        } else if (Pv instanceof Xz && Pv.specularRoughnessAnisotropy > 0) {
          const vv = function(vv) {
            const zv = vv.specularRoughnessAnisotropyTexture,
              Pv = vv.geometryTangentTexture;
            return `${zv&&zv.getInternalTexture()?zv.getInternalTexture().uniqueId:"NoStrength"}_${Pv&&Pv.getInternalTexture()?Pv.getInternalTexture().uniqueId:"NoTangent"}`
          }(Pv);
          if (this._anisoTexturesMap[vv]) hv.push(this._anisoTexturesMap[vv]);
          else {
            const zv = await async function(vv) {
              const zv = vv.rD(),
                Pv = vv.specularRoughnessAnisotropyTexture,
                hv = vv.geometryTangentTexture;
              return Pv || hv ? await gP("AnisotropyTexture", NP(hv ? pP(hv, 0) : dP(1), hv ? pP(hv, 1) : dP(0), Pv ? pP(Pv, 0) : dP(1)), zv) : null
            }(Pv);
            zv && (hv.push(zv), this._anisoTexturesMap[vv] = zv)
          }
          return hv
        }
        return []
      }
      postExportMaterialAsync(vv, zv, Pv) {
        return new Promise((vv => {
          var hv;
          if (Pv instanceof fz) {
            if (!Pv.anisotropy.isEnabled || Pv.anisotropy.legacy) return void vv(zv);
            this._wasUsed = !0, zv.extensions = zv.extensions || {};
            const hv = this._exporter._materialExporter.getTextureInfo(Pv.anisotropy.texture),
              Sv = {
                anisotropyStrength: Pv.anisotropy.intensity,
                anisotropyRotation: Pv.anisotropy.angle,
                anisotropyTexture: hv ?? void 0
              };
            null !== Sv.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(Pv), zv.extensions[GS] = Sv
          } else if (Pv instanceof Xz && Pv.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, zv.extensions = zv.extensions || {};
            let Sv = Pv.specularRoughnessTexture;
            Pv._useRoughnessFromMetallicTextureGreen && (Sv = Pv.baseMetalnessTexture);
            const ev = this._anisoTexturesMap[Pv.id];
            if (!Sv && !ev) {
              let hv = Pv.specularRoughness,
                Sv = Pv.specularRoughnessAnisotropy;
              if (!Pv._useGltfStyleAnisotropy) {
                const vv = function(vv, zv) {
                  const Pv = vv * vv,
                    hv = Pv * Math.sqrt(2 / (1 + (1 - zv) * (1 - zv))),
                    Sv = (1 - zv) * hv;
                  return {
                    newBaseRoughness: Math.sqrt(Sv),
                    newAnisotropyStrength: Math.min(Math.sqrt((hv - Pv) / Math.max(1 - Pv, 1e-4)), 1)
                  }
                }(Pv.specularRoughness, Pv.specularRoughnessAnisotropy);
                hv = vv.newBaseRoughness, Sv = vv.newAnisotropyStrength
              }
              zv.pbrMetallicRoughness && (zv.pbrMetallicRoughness.roughnessFactor = hv);
              const ev = {
                anisotropyStrength: Sv,
                anisotropyRotation: Pv.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return zv.extensions[GS] = ev, vv(zv)
            }
            const gv = ev ? this._exporter._materialExporter.getTextureInfo(ev) : null,
              pv = {
                anisotropyStrength: Pv.specularRoughnessAnisotropy,
                anisotropyRotation: Pv.geometryTangentAngle,
                anisotropyTexture: gv || void 0,
                extensions: {}
              };
            Pv._useGltfStyleAnisotropy || (zv.extensions.KHR_materials_openpbr = {}, (hv = this._exporter._glTF).extensionsUsed || (hv.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(Pv), zv.extensions[GS] = pv
          }
          vv(zv)
        }))
      }
    }
    let jS = !1;

    function fS() {
      jS || (jS = !0, th.RegisterExtension(GS, (vv => new mS(vv))))
    }
    fS();
    const FS = "KHR_materials_clearcoat";

    function YS(vv, zv) {
      const Pv = new Vv.e(zv.name, zv.rD());
      return Pv._texture = vv, Pv.coordinatesIndex = zv.coordinatesIndex, zv instanceof Vv.e && (Pv.uOffset = zv.uOffset, Pv.vOffset = zv.vOffset, Pv.uScale = zv.uScale, Pv.vScale = zv.vScale, Pv.wAng = zv.wAng), Pv.wrapU = zv.wrapU, Pv.wrapV = zv.wrapV, Pv
    }
    class nS {
      constructor(vv) {
        this.name = FS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = vv
      }
      dispose() {
        for (const vv of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[vv].dispose()
        }
        this._mergedTexturesMap = {};
        for (const vv of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[vv].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(vv, zv, Pv) {
        const hv = [];
        if (Pv instanceof fz) {
          if (Pv.clearCoat.isEnabled) return Pv.clearCoat.texture && hv.push(Pv.clearCoat.texture), !Pv.clearCoat.useRoughnessFromMainTexture && Pv.clearCoat.textureRoughness && hv.push(Pv.clearCoat.textureRoughness), Pv.clearCoat.bumpTexture && hv.push(Pv.clearCoat.bumpTexture), hv
        } else if (Pv instanceof Xz && Pv.coatWeight > 0) {
          let vv = !1;
          if (Pv.coatWeightTexture ? Pv.coatRoughnessTexture ? Pv._useCoatRoughnessFromGreenChannel && Pv.coatWeightTexture.getInternalTexture() === Pv.coatRoughnessTexture.getInternalTexture() ? (hv.push(Pv.coatWeightTexture), hv.push(Pv.coatRoughnessTexture)) : vv = !0 : hv.push(Pv.coatWeightTexture) : Pv.coatRoughnessTexture && (Pv._useCoatRoughnessFromGreenChannel ? hv.push(Pv.coatRoughnessTexture) : vv = !0), vv) {
            const vv = function(vv) {
              const zv = vv.coatWeightTexture,
                Pv = zv && zv.getInternalTexture() ? zv.getInternalTexture().uniqueId : "NoCoat",
                hv = vv.coatRoughnessTexture;
              return `${Pv}_${hv&&hv.getInternalTexture()?hv.getInternalTexture().uniqueId:"NoRoughness"}`
            }(Pv);
            if (!this._cachedInternalTexturesMap[vv]) {
              const zv = await async function(vv) {
                const zv = vv.rD(),
                  Pv = vv.coatWeightTexture,
                  hv = vv.coatRoughnessTexture;
                return Pv || hv ? (await gP("CoatTexture", NP(Pv ? pP(Pv, 0) : dP(1), hv ? pP(hv, vv._useCoatRoughnessFromGreenChannel ? 1 : 0) : dP(1)), zv)).getInternalTexture() : null
              }(Pv);
              zv && (this._cachedInternalTexturesMap[vv] = zv)
            }
            this._cachedInternalTexturesMap[vv] && (Pv.coatWeightTexture && (this._mergedTexturesMap[Pv.coatWeightTexture.uniqueId] = YS(this._cachedInternalTexturesMap[vv], Pv.coatWeightTexture), hv.push(this._mergedTexturesMap[Pv.coatWeightTexture.uniqueId])), Pv.coatRoughnessTexture && (this._mergedTexturesMap[Pv.coatRoughnessTexture.uniqueId] = YS(this._cachedInternalTexturesMap[vv], Pv.coatRoughnessTexture), hv.push(this._mergedTexturesMap[Pv.coatRoughnessTexture.uniqueId])))
          }
          return Pv.geometryCoatNormalTexture && hv.push(Pv.geometryCoatNormalTexture), hv
        }
        return []
      }
      postExportMaterialAsync(vv, zv, Pv) {
        return new Promise((vv => {
          if (Pv instanceof fz) {
            if (!Pv.clearCoat.isEnabled) return void vv(zv);
            this._wasUsed = !0, zv.extensions = zv.extensions || {};
            const hv = this._exporter._materialExporter.getTextureInfo(Pv.clearCoat.texture);
            let Sv;
            Sv = Pv.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(Pv.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(Pv.clearCoat.textureRoughness), Pv.clearCoat.isTintEnabled && Yz.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${Pv.name}`), Pv.clearCoat.remapF0OnInterfaceChange && Yz.h.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${Pv.name}`);
            const ev = this._exporter._materialExporter.getTextureInfo(Pv.clearCoat.bumpTexture),
              gv = {
                clearcoatFactor: Pv.clearCoat.intensity,
                clearcoatTexture: hv ?? void 0,
                clearcoatRoughnessFactor: Pv.clearCoat.roughness,
                clearcoatRoughnessTexture: Sv ?? void 0,
                clearcoatNormalTexture: ev ?? void 0
              };
            null === gv.clearcoatTexture && null === gv.clearcoatRoughnessTexture && null === gv.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Pv), zv.extensions[FS] = gv
          } else if (Pv instanceof Xz) {
            if (0 == Pv.coatWeight) return void vv(zv);
            let hv, Sv, ev, gv;
            this._wasUsed = !0, zv.extensions = zv.extensions || {}, Pv.coatWeightTexture && (hv = this._mergedTexturesMap[Pv.coatWeightTexture.uniqueId], Sv = this._exporter._materialExporter.getTextureInfo(hv)), Pv.coatRoughnessTexture && (ev = this._mergedTexturesMap[Pv.coatRoughnessTexture.uniqueId], gv = this._exporter._materialExporter.getTextureInfo(ev)), Pv.coatColorTexture && Yz.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${Pv.name}`);
            const pv = this._exporter._materialExporter.getTextureInfo(Pv.geometryCoatNormalTexture),
              dv = {
                clearcoatFactor: Pv.coatWeight,
                clearcoatTexture: Sv ?? void 0,
                clearcoatRoughnessFactor: Pv.coatRoughness,
                clearcoatRoughnessTexture: gv ?? void 0,
                clearcoatNormalTexture: pv ?? void 0
              };
            null === dv.clearcoatTexture && null === dv.clearcoatRoughnessTexture && null === dv.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Pv), zv.extensions[FS] = dv
          }
          vv(zv)
        }))
      }
    }
    let OS = !1;

    function DS() {
      OS || (OS = !0, th.RegisterExtension(FS, (vv => new nS(vv))))
    }
    DS();
    const KS = "KHR_materials_coat";

    function VS(vv) {
      const zv = vv.coatRoughnessAnisotropyTexture,
        Pv = vv.geometryCoatTangentTexture;
      return `${zv&&zv.getInternalTexture()?zv.getInternalTexture().uniqueId:"NoStrength"}_${Pv&&Pv.getInternalTexture()?Pv.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function US(vv, zv) {
      const Pv = new Vv.e(zv.name, zv.rD());
      return Pv._texture = vv, Pv.coordinatesIndex = zv.coordinatesIndex, zv instanceof Vv.e && (Pv.uOffset = zv.uOffset, Pv.vOffset = zv.vOffset, Pv.uScale = zv.uScale, Pv.vScale = zv.vScale, Pv.wAng = zv.wAng), Pv.wrapU = zv.wrapU, Pv.wrapV = zv.wrapV, Pv
    }
    class RS {
      constructor(vv) {
        this.name = KS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = vv
      }
      dispose() {
        for (const vv of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[vv].dispose()
        }
        this._mergedTexturesMap = {};
        for (const vv of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[vv].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(vv, zv, Pv) {
        const hv = [];
        if (Pv instanceof fz) {
          if (Pv.clearCoat.isEnabled) return Pv.clearCoat.texture && hv.push(Pv.clearCoat.texture), !Pv.clearCoat.useRoughnessFromMainTexture && Pv.clearCoat.textureRoughness && hv.push(Pv.clearCoat.textureRoughness), Pv.clearCoat.bumpTexture && hv.push(Pv.clearCoat.bumpTexture), Pv.clearCoat.tintTexture && hv.push(Pv.clearCoat.tintTexture), hv
        } else if (Pv instanceof Xz && Pv.coatWeight > 0) {
          let vv = !1;
          if (Pv.coatWeightTexture ? Pv.coatRoughnessTexture ? Pv._useCoatRoughnessFromGreenChannel && Pv.coatWeightTexture.getInternalTexture() === Pv.coatRoughnessTexture.getInternalTexture() ? (hv.push(Pv.coatWeightTexture), hv.push(Pv.coatRoughnessTexture)) : vv = !0 : hv.push(Pv.coatWeightTexture) : Pv.coatRoughnessTexture && (Pv._useCoatRoughnessFromGreenChannel ? hv.push(Pv.coatRoughnessTexture) : vv = !0), vv) {
            const vv = function(vv) {
              const zv = vv.coatWeightTexture,
                Pv = zv && zv.getInternalTexture() ? zv.getInternalTexture().uniqueId : "NoCoat",
                hv = vv.coatRoughnessTexture;
              return `${Pv}_${hv&&hv.getInternalTexture()?hv.getInternalTexture().uniqueId:"NoRoughness"}`
            }(Pv);
            if (!this._cachedInternalTexturesMap[vv]) {
              const zv = await async function(vv) {
                const zv = vv.rD(),
                  Pv = vv.coatWeightTexture,
                  hv = vv.coatRoughnessTexture;
                return Pv || hv ? (await gP("CoatTexture", NP(Pv ? pP(Pv, 0) : dP(1), hv ? pP(hv, vv._useCoatRoughnessFromGreenChannel ? 1 : 0) : dP(1)), zv)).getInternalTexture() : null
              }(Pv);
              zv && (this._cachedInternalTexturesMap[vv] = zv)
            }
            this._cachedInternalTexturesMap[vv] && (Pv.coatWeightTexture && (this._mergedTexturesMap[Pv.coatWeightTexture.uniqueId] = US(this._cachedInternalTexturesMap[vv], Pv.coatWeightTexture), hv.push(this._mergedTexturesMap[Pv.coatWeightTexture.uniqueId])), Pv.coatRoughnessTexture && (this._mergedTexturesMap[Pv.coatRoughnessTexture.uniqueId] = US(this._cachedInternalTexturesMap[vv], Pv.coatRoughnessTexture), hv.push(this._mergedTexturesMap[Pv.coatRoughnessTexture.uniqueId])))
          }
          if (Pv.geometryCoatNormalTexture && hv.push(Pv.geometryCoatNormalTexture), Pv.coatColorTexture && hv.push(Pv.coatColorTexture), Pv.coatRoughnessAnisotropy > 0) {
            const vv = VS(Pv);
            if (this._mergedTexturesMap[vv]) hv.push(this._mergedTexturesMap[vv]);
            else {
              const zv = await async function(vv) {
                const zv = vv.rD(),
                  Pv = vv.coatRoughnessAnisotropyTexture,
                  hv = vv.geometryCoatTangentTexture;
                return Pv || hv ? await gP("AnisotropyTexture", NP(hv ? pP(hv, 0) : dP(1), hv ? pP(hv, 1) : dP(0), Pv ? pP(Pv, 0) : dP(1)), zv) : null
              }(Pv);
              zv && (hv.push(zv), this._mergedTexturesMap[vv] = zv)
            }
            return hv
          }
          return hv
        }
        return []
      }
      postExportMaterialAsync(vv, zv, Pv) {
        return new Promise((vv => {
          var hv;
          if (Pv instanceof fz) {
            if (!Pv.clearCoat.isEnabled) return void vv(zv);
            this._wasUsed = !0, zv.extensions = zv.extensions || {};
            const hv = this._exporter._materialExporter.getTextureInfo(Pv.clearCoat.texture);
            let Sv, ev;
            Sv = Pv.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(Pv.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(Pv.clearCoat.textureRoughness), Pv.clearCoat.isTintEnabled && (ev = this._exporter._materialExporter.getTextureInfo(Pv.clearCoat.tintTexture));
            const gv = this._exporter._materialExporter.getTextureInfo(Pv.clearCoat.bumpTexture),
              pv = Pv.clearCoat.indexOfRefraction,
              dv = {
                coatFactor: Pv.clearCoat.intensity,
                coatTexture: hv ?? void 0,
                coatRoughnessFactor: Pv.clearCoat.roughness,
                coatRoughnessTexture: Sv ?? void 0,
                coatNormalTexture: gv ?? void 0,
                coatColorFactor: Pv.clearCoat.tintColor.pPv(),
                coatColorTexture: ev ?? void 0,
                coatIor: 1.5 !== pv ? pv : void 0
              };
            null === dv.coatTexture && null === dv.coatRoughnessTexture && null === dv.coatRoughnessTexture && null === dv.coatColorTexture || this._exporter._materialNeedsUVsSet.add(Pv), zv.extensions[KS] = dv
          } else if (Pv instanceof Xz) {
            if (0 == Pv.coatWeight) return void vv(zv);
            let Sv, ev, gv, pv;
            this._wasUsed = !0, zv.extensions = zv.extensions || {}, Pv.coatWeightTexture && (Sv = this._mergedTexturesMap[Pv.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[Pv.coatWeightTexture.uniqueId] : Pv.coatWeightTexture, ev = this._exporter._materialExporter.getTextureInfo(Sv)), Pv.coatRoughnessTexture && (gv = this._mergedTexturesMap[Pv.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[Pv.coatRoughnessTexture.uniqueId] : Pv.coatRoughnessTexture, pv = this._exporter._materialExporter.getTextureInfo(gv));
            const dv = this._exporter._materialExporter.getTextureInfo(Pv.geometryCoatNormalTexture),
              Nv = this._exporter._materialExporter.getTextureInfo(Pv.coatColorTexture),
              lv = Pv.coatIor,
              Tv = Pv.coatDarkening,
              Wv = Pv.coatRoughnessTexture,
              wv = VS(Pv),
              av = this._mergedTexturesMap[wv];
            let sv, Cv = 0,
              iv = 0;
            if (Pv.coatRoughnessAnisotropy > 0) {
              if (Wv || av) {
                const vv = av ? this._exporter._materialExporter.getTextureInfo(av) : null;
                Cv = Pv.coatRoughnessAnisotropy, iv = Pv.geometryCoatTangentAngle, sv = vv || void 0
              } else {
                let vv = Pv.coatRoughness,
                  hv = Pv.coatRoughnessAnisotropy;
                if (!Pv._useGltfStyleAnisotropy) {
                  const zv = function(vv, zv) {
                    const Pv = vv * vv,
                      hv = Pv * Math.sqrt(2 / (1 + (1 - zv) * (1 - zv))),
                      Sv = (1 - zv) * hv;
                    return {
                      newBaseRoughness: Math.sqrt(Sv),
                      newAnisotropyStrength: Math.min(Math.sqrt((hv - Pv) / Math.max(1 - Pv, 1e-4)), 1)
                    }
                  }(Pv.coatRoughness, Pv.coatRoughnessAnisotropy);
                  vv = zv.newBaseRoughness, hv = zv.newAnisotropyStrength
                }
                zv.pbrMetallicRoughness && (zv.pbrMetallicRoughness.roughnessFactor = vv), Cv = hv, iv = Pv.geometryCoatTangentAngle + .5 * Math.PI, sv = void 0
              }
              Pv._useGltfStyleAnisotropy || (zv.extensions.KHR_materials_openpbr = {}, (hv = this._exporter._glTF).extensionsUsed || (hv.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const cv = {
              coatFactor: Pv.coatWeight,
              coatTexture: ev ?? void 0,
              coatRoughnessFactor: Pv.coatRoughness,
              coatRoughnessTexture: pv ?? void 0,
              coatNormalTexture: dv ?? void 0,
              coatColorFactor: Pv.coatColor.pPv(),
              coatColorTexture: Nv ?? void 0,
              coatIor: 1.5 !== lv ? lv : void 0,
              coatDarkeningFactor: 1 !== Tv ? Tv : void 0,
              coatAnisotropyRotation: iv,
              coatAnisotropyStrength: Cv,
              coatAnisotropyTexture: sv
            };
            null === cv.coatTexture && null === cv.coatRoughnessTexture && null === cv.coatRoughnessTexture && null === cv.coatAnisotropyTexture && null === cv.coatColorTexture || this._exporter._materialNeedsUVsSet.add(Pv), zv.extensions[KS] = cv
          }
          vv(zv)
        }))
      }
    }
    let xS = !1;

    function tS() {
      xS || (xS = !0, th.RegisterExtension(KS, (vv => new RS(vv))))
    }
    tS();
    let qS = (() => {
      var vv, zv, Pv, hv, Sv, gv, pv, dv, Nv, lv, Tv, Wv, wv, av, sv, Cv, iv, cv, Gv, mv, jv, fv, Fv, Yv, Dv, Kv, Vv, Uv, Rv, xv, qv, Iv, Qv, Zv, Av, Lv, Hv, Mv, yv, Bv, Ev, ov, bv, rv, kv, Xv, uv, vz, zz, Pz, hz, Sz, ez, gz, pz, dz, Nz, lz, Tz, Wz, wz, az, sz, Cz, iz, cz, Gz;
      let mz, jz, Yz, nz, Oz, Dz, Kz, Vz, Uz, Rz, xz, tz, qz, Iz, Qz, Zz, Az, Lz, Hz, Mz, yz, Bz, Jz, Ez, oz, bz, rz, kz, Xz, uz, vP, zP, PP, hP, SP, eP, gP, pP, dP, NP, lP, TP, WP, wP, aP, sP, CP, iP, cP, GP, mP, jP, fP, FP, YP, nP, OP, DP, KP, VP, UP, RP, xP, tP, qP, IP, QP, ZP, AP = fz,
        LP = [],
        HP = [],
        MP = [],
        yP = [],
        BP = [],
        JP = [],
        EP = [],
        oP = [],
        bP = [],
        rP = [],
        kP = [],
        XP = [],
        uP = [],
        vh = [],
        zh = [],
        Ph = [],
        hh = [],
        Sh = [],
        eh = [],
        gh = [],
        ph = [],
        dh = [],
        Nh = [],
        lh = [],
        Th = [],
        Wh = [],
        wh = [],
        ah = [],
        sh = [],
        Ch = [],
        ih = [],
        ch = [],
        Gh = [],
        mh = [],
        jh = [],
        fh = [],
        Fh = [],
        Yh = [],
        nh = [],
        Oh = [],
        Dh = [],
        Kh = [],
        Vh = [],
        Uh = [],
        Rh = [],
        xh = [],
        th = [],
        qh = [],
        Ih = [],
        Qh = [],
        Zh = [],
        Ah = [],
        Lh = [],
        Hh = [],
        Mh = [],
        yh = [],
        Bh = [],
        Jh = [],
        Eh = [],
        oh = [],
        bh = [],
        rh = [],
        kh = [],
        Xh = [],
        uh = [],
        vS = [],
        zS = [],
        PS = [],
        hS = [],
        SS = [],
        eS = [],
        gS = [],
        pS = [],
        dS = [],
        NS = [],
        lS = [],
        TS = [],
        WS = [],
        wS = [],
        aS = [],
        sS = [],
        CS = [],
        iS = [],
        cS = [],
        GS = [],
        mS = [],
        jS = [],
        fS = [],
        FS = [],
        YS = [],
        nS = [],
        OS = [],
        DS = [],
        KS = [],
        VS = [],
        US = [],
        RS = [],
        xS = [],
        tS = [],
        qS = [],
        IS = [],
        QS = [],
        ZS = [],
        AS = [],
        LS = [],
        HS = [],
        MS = [],
        yS = [],
        BS = [],
        JS = [],
        ES = [],
        oS = [],
        bS = [],
        rS = [],
        kS = [],
        XS = [],
        uS = [],
        ve = [],
        ze = [],
        Pe = [],
        he = [],
        Se = [],
        ee = [],
        ge = [],
        pe = [],
        de = [],
        Ne = [],
        le = [],
        Te = [],
        We = [],
        we = [],
        ae = [],
        se = [];
      return vv = class extends AP {
        get directIntensity() {
          return (0, nv.c)(this, zv, "f")
        }
        set directIntensity(vv) {
          (0, nv.d)(this, zv, vv, "f")
        }
        get emissiveIntensity() {
          return (0, nv.c)(this, Pv, "f")
        }
        set emissiveIntensity(vv) {
          (0, nv.d)(this, Pv, vv, "f")
        }
        get environmentIntensity() {
          return (0, nv.c)(this, hv, "f")
        }
        set environmentIntensity(vv) {
          (0, nv.d)(this, hv, vv, "f")
        }
        get specularIntensity() {
          return (0, nv.c)(this, Sv, "f")
        }
        set specularIntensity(vv) {
          (0, nv.d)(this, Sv, vv, "f")
        }
        get disableBumpMap() {
          return (0, nv.c)(this, gv, "f")
        }
        set disableBumpMap(vv) {
          (0, nv.d)(this, gv, vv, "f")
        }
        get albedoTexture() {
          return (0, nv.c)(this, pv, "f")
        }
        set albedoTexture(vv) {
          (0, nv.d)(this, pv, vv, "f")
        }
        get baseWeightTexture() {
          return (0, nv.c)(this, dv, "f")
        }
        set baseWeightTexture(vv) {
          (0, nv.d)(this, dv, vv, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, nv.c)(this, Nv, "f")
        }
        set baseDiffuseRoughnessTexture(vv) {
          (0, nv.d)(this, Nv, vv, "f")
        }
        get ambientTexture() {
          return (0, nv.c)(this, lv, "f")
        }
        set ambientTexture(vv) {
          (0, nv.d)(this, lv, vv, "f")
        }
        get ambientTextureStrength() {
          return (0, nv.c)(this, Tv, "f")
        }
        set ambientTextureStrength(vv) {
          (0, nv.d)(this, Tv, vv, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, nv.c)(this, Wv, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(vv) {
          (0, nv.d)(this, Wv, vv, "f")
        }
        get opacityTexture() {
          return (0, nv.c)(this, wv, "f")
        }
        set opacityTexture(vv) {
          (0, nv.d)(this, wv, vv, "f")
        }
        get reflectionTexture() {
          return (0, nv.c)(this, av, "f")
        }
        set reflectionTexture(vv) {
          (0, nv.d)(this, av, vv, "f")
        }
        get emissiveTexture() {
          return (0, nv.c)(this, sv, "f")
        }
        set emissiveTexture(vv) {
          (0, nv.d)(this, sv, vv, "f")
        }
        get reflectivityTexture() {
          return (0, nv.c)(this, Cv, "f")
        }
        set reflectivityTexture(vv) {
          (0, nv.d)(this, Cv, vv, "f")
        }
        get metallicTexture() {
          return (0, nv.c)(this, iv, "f")
        }
        set metallicTexture(vv) {
          (0, nv.d)(this, iv, vv, "f")
        }
        get metallic() {
          return (0, nv.c)(this, cv, "f")
        }
        set metallic(vv) {
          (0, nv.d)(this, cv, vv, "f")
        }
        get roughness() {
          return (0, nv.c)(this, Gv, "f")
        }
        set roughness(vv) {
          (0, nv.d)(this, Gv, vv, "f")
        }
        get metallicF0Factor() {
          return (0, nv.c)(this, mv, "f")
        }
        set metallicF0Factor(vv) {
          (0, nv.d)(this, mv, vv, "f")
        }
        get metallicReflectanceColor() {
          return (0, nv.c)(this, jv, "f")
        }
        set metallicReflectanceColor(vv) {
          (0, nv.d)(this, jv, vv, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, nv.c)(this, fv, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(vv) {
          (0, nv.d)(this, fv, vv, "f")
        }
        get metallicReflectanceTexture() {
          return (0, nv.c)(this, Fv, "f")
        }
        set metallicReflectanceTexture(vv) {
          (0, nv.d)(this, Fv, vv, "f")
        }
        get reflectanceTexture() {
          return (0, nv.c)(this, Yv, "f")
        }
        set reflectanceTexture(vv) {
          (0, nv.d)(this, Yv, vv, "f")
        }
        get microSurfaceTexture() {
          return (0, nv.c)(this, Dv, "f")
        }
        set microSurfaceTexture(vv) {
          (0, nv.d)(this, Dv, vv, "f")
        }
        get bumpTexture() {
          return (0, nv.c)(this, Kv, "f")
        }
        set bumpTexture(vv) {
          (0, nv.d)(this, Kv, vv, "f")
        }
        get lightmapTexture() {
          return (0, nv.c)(this, Vv, "f")
        }
        set lightmapTexture(vv) {
          (0, nv.d)(this, Vv, vv, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(vv) {
          this.subSurface.refractionTexture = vv, vv ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, nv.c)(this, Uv, "f")
        }
        set ambientColor(vv) {
          (0, nv.d)(this, Uv, vv, "f")
        }
        get albedoColor() {
          return (0, nv.c)(this, Rv, "f")
        }
        set albedoColor(vv) {
          (0, nv.d)(this, Rv, vv, "f")
        }
        get baseWeight() {
          return (0, nv.c)(this, xv, "f")
        }
        set baseWeight(vv) {
          (0, nv.d)(this, xv, vv, "f")
        }
        get baseDiffuseRoughness() {
          return (0, nv.c)(this, qv, "f")
        }
        set baseDiffuseRoughness(vv) {
          (0, nv.d)(this, qv, vv, "f")
        }
        get reflectivityColor() {
          return (0, nv.c)(this, Iv, "f")
        }
        set reflectivityColor(vv) {
          (0, nv.d)(this, Iv, vv, "f")
        }
        get reflectionColor() {
          return (0, nv.c)(this, Qv, "f")
        }
        set reflectionColor(vv) {
          (0, nv.d)(this, Qv, vv, "f")
        }
        get emissiveColor() {
          return (0, nv.c)(this, Zv, "f")
        }
        set emissiveColor(vv) {
          (0, nv.d)(this, Zv, vv, "f")
        }
        get microSurface() {
          return (0, nv.c)(this, Av, "f")
        }
        set microSurface(vv) {
          (0, nv.d)(this, Av, vv, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(vv) {
          this.subSurface.indexOfRefraction = vv
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(vv) {
          this.subSurface.invertRefractionY = vv
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(vv) {
          this.subSurface.linkRefractionWithTransparency = vv, vv && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, nv.c)(this, Lv, "f")
        }
        set useLightmapAsShadowmap(vv) {
          (0, nv.d)(this, Lv, vv, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, nv.c)(this, Hv, "f")
        }
        set useAlphaFromAlbedoTexture(vv) {
          (0, nv.d)(this, Hv, vv, "f")
        }
        get forceAlphaTest() {
          return (0, nv.c)(this, Mv, "f")
        }
        set forceAlphaTest(vv) {
          (0, nv.d)(this, Mv, vv, "f")
        }
        get alphaCutOff() {
          return (0, nv.c)(this, yv, "f")
        }
        set alphaCutOff(vv) {
          (0, nv.d)(this, yv, vv, "f")
        }
        get useSpecularOverAlpha() {
          return (0, nv.c)(this, Bv, "f")
        }
        set useSpecularOverAlpha(vv) {
          (0, nv.d)(this, Bv, vv, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, nv.c)(this, Ev, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(vv) {
          (0, nv.d)(this, Ev, vv, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, nv.c)(this, ov, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(vv) {
          (0, nv.d)(this, ov, vv, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, nv.c)(this, bv, "f")
        }
        set useRoughnessFromMetallicTextureGreen(vv) {
          (0, nv.d)(this, bv, vv, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, nv.c)(this, rv, "f")
        }
        set useMetallnessFromMetallicTextureBlue(vv) {
          (0, nv.d)(this, rv, vv, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, nv.c)(this, kv, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(vv) {
          (0, nv.d)(this, kv, vv, "f")
        }
        get useAmbientInGrayScale() {
          return (0, nv.c)(this, Xv, "f")
        }
        set useAmbientInGrayScale(vv) {
          (0, nv.d)(this, Xv, vv, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, nv.c)(this, uv, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(vv) {
          (0, nv.d)(this, uv, vv, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === fz.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(vv) {
          vv !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = vv ? fz.LIGHTFALLOFF_PHYSICAL : fz.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === fz.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(vv) {
          vv !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = vv ? fz.LIGHTFALLOFF_GLTF : fz.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, nv.c)(this, vz, "f")
        }
        set useRadianceOverAlpha(vv) {
          (0, nv.d)(this, vz, vv, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, nv.c)(this, zz, "f")
        }
        set useObjectSpaceNormalMap(vv) {
          (0, nv.d)(this, zz, vv, "f")
        }
        get useParallax() {
          return (0, nv.c)(this, Pz, "f")
        }
        set useParallax(vv) {
          (0, nv.d)(this, Pz, vv, "f")
        }
        get useParallaxOcclusion() {
          return (0, nv.c)(this, hz, "f")
        }
        set useParallaxOcclusion(vv) {
          (0, nv.d)(this, hz, vv, "f")
        }
        get parallaxScaleBias() {
          return (0, nv.c)(this, Sz, "f")
        }
        set parallaxScaleBias(vv) {
          (0, nv.d)(this, Sz, vv, "f")
        }
        get disableLighting() {
          return (0, nv.c)(this, ez, "f")
        }
        set disableLighting(vv) {
          (0, nv.d)(this, ez, vv, "f")
        }
        get forceIrradianceInFragment() {
          return (0, nv.c)(this, gz, "f")
        }
        set forceIrradianceInFragment(vv) {
          (0, nv.d)(this, gz, vv, "f")
        }
        get maxSimultaneousLights() {
          return (0, nv.c)(this, pz, "f")
        }
        set maxSimultaneousLights(vv) {
          (0, nv.d)(this, pz, vv, "f")
        }
        get invertNormalMapX() {
          return (0, nv.c)(this, dz, "f")
        }
        set invertNormalMapX(vv) {
          (0, nv.d)(this, dz, vv, "f")
        }
        get invertNormalMapY() {
          return (0, nv.c)(this, Nz, "f")
        }
        set invertNormalMapY(vv) {
          (0, nv.d)(this, Nz, vv, "f")
        }
        get twoSidedLighting() {
          return (0, nv.c)(this, lz, "f")
        }
        set twoSidedLighting(vv) {
          (0, nv.d)(this, lz, vv, "f")
        }
        get useAlphaFresnel() {
          return (0, nv.c)(this, Tz, "f")
        }
        set useAlphaFresnel(vv) {
          (0, nv.d)(this, Tz, vv, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, nv.c)(this, Wz, "f")
        }
        set useLinearAlphaFresnel(vv) {
          (0, nv.d)(this, Wz, vv, "f")
        }
        get environmentBRDFTexture() {
          return (0, nv.c)(this, wz, "f")
        }
        set environmentBRDFTexture(vv) {
          (0, nv.d)(this, wz, vv, "f")
        }
        get forceNormalForward() {
          return (0, nv.c)(this, az, "f")
        }
        set forceNormalForward(vv) {
          (0, nv.d)(this, az, vv, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, nv.c)(this, sz, "f")
        }
        set enableSpecularAntiAliasing(vv) {
          (0, nv.d)(this, sz, vv, "f")
        }
        get useHorizonOcclusion() {
          return (0, nv.c)(this, Cz, "f")
        }
        set useHorizonOcclusion(vv) {
          (0, nv.d)(this, Cz, vv, "f")
        }
        get useRadianceOcclusion() {
          return (0, nv.c)(this, iz, "f")
        }
        set useRadianceOcclusion(vv) {
          (0, nv.d)(this, iz, vv, "f")
        }
        get unlit() {
          return (0, nv.c)(this, cz, "f")
        }
        set unlit(vv) {
          (0, nv.d)(this, cz, vv, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, nv.c)(this, Gz, "f")
        }
        set applyDecalMapAfterDetailMap(vv) {
          (0, nv.d)(this, Gz, vv, "f")
        }
        constructor(ev, Ov) {
          super(ev, Ov, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), zv.set(this, ((0, nv.f)(this, LP), (0, nv.f)(this, HP, 1))), Pv.set(this, ((0, nv.f)(this, MP), (0, nv.f)(this, yP, 1))), hv.set(this, ((0, nv.f)(this, BP), (0, nv.f)(this, JP, 1))), Sv.set(this, ((0, nv.f)(this, EP), (0, nv.f)(this, oP, 1))), gv.set(this, ((0, nv.f)(this, bP), (0, nv.f)(this, rP, !1))), pv.set(this, ((0, nv.f)(this, kP), (0, nv.f)(this, XP, void 0))), dv.set(this, ((0, nv.f)(this, uP), (0, nv.f)(this, vh, void 0))), Nv.set(this, ((0, nv.f)(this, zh), (0, nv.f)(this, Ph, void 0))), lv.set(this, ((0, nv.f)(this, hh), (0, nv.f)(this, Sh, void 0))), Tv.set(this, ((0, nv.f)(this, eh), (0, nv.f)(this, gh, 1))), Wv.set(this, ((0, nv.f)(this, ph), (0, nv.f)(this, dh, vv.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), wv.set(this, ((0, nv.f)(this, Nh), (0, nv.f)(this, lh, void 0))), av.set(this, ((0, nv.f)(this, Th), (0, nv.f)(this, Wh, void 0))), sv.set(this, ((0, nv.f)(this, wh), (0, nv.f)(this, ah, void 0))), Cv.set(this, ((0, nv.f)(this, sh), (0, nv.f)(this, Ch, void 0))), iv.set(this, ((0, nv.f)(this, ih), (0, nv.f)(this, ch, void 0))), cv.set(this, ((0, nv.f)(this, Gh), (0, nv.f)(this, mh, void 0))), Gv.set(this, ((0, nv.f)(this, jh), (0, nv.f)(this, fh, void 0))), mv.set(this, ((0, nv.f)(this, Fh), (0, nv.f)(this, Yh, 1))), jv.set(this, ((0, nv.f)(this, nh), (0, nv.f)(this, Oh, Jv.b.White()))), fv.set(this, ((0, nv.f)(this, Dh), (0, nv.f)(this, Kh, !1))), Fv.set(this, ((0, nv.f)(this, Vh), (0, nv.f)(this, Uh, void 0))), Yv.set(this, ((0, nv.f)(this, Rh), (0, nv.f)(this, xh, void 0))), Dv.set(this, ((0, nv.f)(this, th), (0, nv.f)(this, qh, void 0))), Kv.set(this, ((0, nv.f)(this, Ih), (0, nv.f)(this, Qh, void 0))), Vv.set(this, ((0, nv.f)(this, Zh), (0, nv.f)(this, Ah, void 0))), Uv.set(this, ((0, nv.f)(this, Lh), (0, nv.f)(this, Hh, new Jv.b(0, 0, 0)))), Rv.set(this, ((0, nv.f)(this, Mh), (0, nv.f)(this, yh, new Jv.b(1, 1, 1)))), xv.set(this, ((0, nv.f)(this, Bh), (0, nv.f)(this, Jh, 1))), qv.set(this, ((0, nv.f)(this, Eh), (0, nv.f)(this, oh, void 0))), Iv.set(this, ((0, nv.f)(this, bh), (0, nv.f)(this, rh, new Jv.b(1, 1, 1)))), Qv.set(this, ((0, nv.f)(this, kh), (0, nv.f)(this, Xh, new Jv.b(1, 1, 1)))), Zv.set(this, ((0, nv.f)(this, uh), (0, nv.f)(this, vS, new Jv.b(0, 0, 0)))), Av.set(this, ((0, nv.f)(this, zS), (0, nv.f)(this, PS, 1))), Lv.set(this, ((0, nv.f)(this, hS), (0, nv.f)(this, SS, !1))), Hv.set(this, ((0, nv.f)(this, eS), (0, nv.f)(this, gS, !1))), Mv.set(this, ((0, nv.f)(this, pS), (0, nv.f)(this, dS, !1))), yv.set(this, ((0, nv.f)(this, NS), (0, nv.f)(this, lS, .4))), Bv.set(this, ((0, nv.f)(this, TS), (0, nv.f)(this, WS, !0))), Ev.set(this, ((0, nv.f)(this, wS), (0, nv.f)(this, aS, !1))), ov.set(this, ((0, nv.f)(this, sS), (0, nv.f)(this, CS, !0))), bv.set(this, ((0, nv.f)(this, iS), (0, nv.f)(this, cS, !1))), rv.set(this, ((0, nv.f)(this, GS), (0, nv.f)(this, mS, !1))), kv.set(this, ((0, nv.f)(this, jS), (0, nv.f)(this, fS, !1))), Xv.set(this, ((0, nv.f)(this, FS), (0, nv.f)(this, YS, !1))), uv.set(this, ((0, nv.f)(this, nS), (0, nv.f)(this, OS, !1))), vz.set(this, ((0, nv.f)(this, DS), (0, nv.f)(this, KS, !0))), zz.set(this, ((0, nv.f)(this, VS), (0, nv.f)(this, US, !1))), Pz.set(this, ((0, nv.f)(this, RS), (0, nv.f)(this, xS, !1))), hz.set(this, ((0, nv.f)(this, tS), (0, nv.f)(this, qS, !1))), Sz.set(this, ((0, nv.f)(this, IS), (0, nv.f)(this, QS, .05))), ez.set(this, ((0, nv.f)(this, ZS), (0, nv.f)(this, AS, !1))), gz.set(this, ((0, nv.f)(this, LS), (0, nv.f)(this, HS, !1))), pz.set(this, ((0, nv.f)(this, MS), (0, nv.f)(this, yS, 4))), dz.set(this, ((0, nv.f)(this, BS), (0, nv.f)(this, JS, !1))), Nz.set(this, ((0, nv.f)(this, ES), (0, nv.f)(this, oS, !1))), lz.set(this, ((0, nv.f)(this, bS), (0, nv.f)(this, rS, !1))), Tz.set(this, ((0, nv.f)(this, kS), (0, nv.f)(this, XS, !1))), Wz.set(this, ((0, nv.f)(this, uS), (0, nv.f)(this, ve, !1))), wz.set(this, ((0, nv.f)(this, ze), (0, nv.f)(this, Pe, null))), az.set(this, ((0, nv.f)(this, he), (0, nv.f)(this, Se, !1))), sz.set(this, ((0, nv.f)(this, ee), (0, nv.f)(this, ge, !1))), Cz.set(this, ((0, nv.f)(this, pe), (0, nv.f)(this, de, !0))), iz.set(this, ((0, nv.f)(this, Ne), (0, nv.f)(this, le, !0))), cz.set(this, ((0, nv.f)(this, Te), (0, nv.f)(this, We, !1))), Gz.set(this, ((0, nv.f)(this, we), (0, nv.f)(this, ae, !1))), (0, nv.f)(this, se), this._environmentBRDFTexture = tv(this.rD())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(zv) {
          let Pv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Sv = Fz.c.Clone((() => new vv(zv, this.rD())), this, {
            cloneTexturesOnlyOnce: Pv
          });
          return Sv.id = zv, Sv.name = zv, this.stencil.copyTo(Sv.stencil), this._clonePlugins(Sv, hv), Sv
        }
        serialize() {
          const vv = super.serialize();
          return vv.customType = "BABYLON.PBRMaterial", vv
        }
        static Parse(zv, Pv, hv) {
          const Sv = Fz.c.Parse((() => new vv(zv.name, Pv)), zv, Pv, hv);
          return zv.stencil && Sv.stencil.parse(zv.stencil, Pv, hv), ev.b._ParsePlugins(zv, Sv, Pv, hv), zv.clearCoat && Sv.clearCoat.parse(zv.clearCoat, Pv, hv), zv.anisotropy && Sv.anisotropy.parse(zv.anisotropy, Pv, hv), zv.brdf && Sv.brdf.parse(zv.brdf, Pv, hv), zv.sheen && Sv.sheen.parse(zv.sheen, Pv, hv), zv.subSurface && Sv.subSurface.parse(zv.subSurface, Pv, hv), zv.iridescence && Sv.iridescence.parse(zv.iridescence, Pv, hv), Sv
        }
      }, zv = new WeakMap, Pv = new WeakMap, hv = new WeakMap, Sv = new WeakMap, gv = new WeakMap, pv = new WeakMap, dv = new WeakMap, Nv = new WeakMap, lv = new WeakMap, Tv = new WeakMap, Wv = new WeakMap, wv = new WeakMap, av = new WeakMap, sv = new WeakMap, Cv = new WeakMap, iv = new WeakMap, cv = new WeakMap, Gv = new WeakMap, mv = new WeakMap, jv = new WeakMap, fv = new WeakMap, Fv = new WeakMap, Yv = new WeakMap, Dv = new WeakMap, Kv = new WeakMap, Vv = new WeakMap, Uv = new WeakMap, Rv = new WeakMap, xv = new WeakMap, qv = new WeakMap, Iv = new WeakMap, Qv = new WeakMap, Zv = new WeakMap, Av = new WeakMap, Lv = new WeakMap, Hv = new WeakMap, Mv = new WeakMap, yv = new WeakMap, Bv = new WeakMap, Ev = new WeakMap, ov = new WeakMap, bv = new WeakMap, rv = new WeakMap, kv = new WeakMap, Xv = new WeakMap, uv = new WeakMap, vz = new WeakMap, zz = new WeakMap, Pz = new WeakMap, hz = new WeakMap, Sz = new WeakMap, ez = new WeakMap, gz = new WeakMap, pz = new WeakMap, dz = new WeakMap, Nz = new WeakMap, lz = new WeakMap, Tz = new WeakMap, Wz = new WeakMap, wz = new WeakMap, az = new WeakMap, sz = new WeakMap, Cz = new WeakMap, iz = new WeakMap, cz = new WeakMap, Gz = new WeakMap, (() => {
        const zv = "function" === typeof Symbol && Symbol.metadata ? Object.create(AP[Symbol.metadata] ?? null) : void 0;
        mz = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], jz = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Yz = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], nz = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Oz = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Dz = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Kz = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Vz = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Uz = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Rz = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], xz = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], tz = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], qz = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Iz = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Qz = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Zz = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Az = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Lz = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Hz = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Mz = [(0, Ov.n)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], yz = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Bz = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Jz = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Ez = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], oz = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], bz = [(0, Ov.E)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty", null)], rz = [(0, Ov.n)("ambient"), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], kz = [(0, Ov.n)("albedo"), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], Xz = [(0, Ov.L)("baseWeight"), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], uz = [(0, Ov.L)("baseDiffuseRoughness"), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], vP = [(0, Ov.n)("reflectivity"), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], zP = [(0, Ov.n)("reflection"), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], PP = [(0, Ov.n)("emissive"), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], hP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], SP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], eP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], gP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], pP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], dP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], NP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], lP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], TP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], WP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], wP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], aP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], sP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], CP = [(0, Ov.L)()], iP = [(0, Ov.L)()], cP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], GP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], mP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], jP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], fP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], FP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsLightsDirty")], YP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], nP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsLightsDirty")], OP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], DP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], KP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], VP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], UP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], RP = [(0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], xP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], tP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], qP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], IP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsTexturesDirty")], QP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsMiscDirty")], ZP = [(0, Ov.L)(), (0, Ov.e)("_markAllSubMeshesAsMiscDirty")], (0, nv.e)(vv, null, mz, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: vv => "directIntensity" in vv,
            get: vv => vv.directIntensity,
            set: (vv, zv) => {
              vv.directIntensity = zv
            }
          },
          metadata: zv
        }, HP, MP), (0, nv.e)(vv, null, jz, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: vv => "emissiveIntensity" in vv,
            get: vv => vv.emissiveIntensity,
            set: (vv, zv) => {
              vv.emissiveIntensity = zv
            }
          },
          metadata: zv
        }, yP, BP), (0, nv.e)(vv, null, Yz, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: vv => "environmentIntensity" in vv,
            get: vv => vv.environmentIntensity,
            set: (vv, zv) => {
              vv.environmentIntensity = zv
            }
          },
          metadata: zv
        }, JP, EP), (0, nv.e)(vv, null, nz, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: vv => "specularIntensity" in vv,
            get: vv => vv.specularIntensity,
            set: (vv, zv) => {
              vv.specularIntensity = zv
            }
          },
          metadata: zv
        }, oP, bP), (0, nv.e)(vv, null, Oz, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: vv => "disableBumpMap" in vv,
            get: vv => vv.disableBumpMap,
            set: (vv, zv) => {
              vv.disableBumpMap = zv
            }
          },
          metadata: zv
        }, rP, kP), (0, nv.e)(vv, null, Dz, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "albedoTexture" in vv,
            get: vv => vv.albedoTexture,
            set: (vv, zv) => {
              vv.albedoTexture = zv
            }
          },
          metadata: zv
        }, XP, uP), (0, nv.e)(vv, null, Kz, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "baseWeightTexture" in vv,
            get: vv => vv.baseWeightTexture,
            set: (vv, zv) => {
              vv.baseWeightTexture = zv
            }
          },
          metadata: zv
        }, vh, zh), (0, nv.e)(vv, null, Vz, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "baseDiffuseRoughnessTexture" in vv,
            get: vv => vv.baseDiffuseRoughnessTexture,
            set: (vv, zv) => {
              vv.baseDiffuseRoughnessTexture = zv
            }
          },
          metadata: zv
        }, Ph, hh), (0, nv.e)(vv, null, Uz, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "ambientTexture" in vv,
            get: vv => vv.ambientTexture,
            set: (vv, zv) => {
              vv.ambientTexture = zv
            }
          },
          metadata: zv
        }, Sh, eh), (0, nv.e)(vv, null, Rz, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: vv => "ambientTextureStrength" in vv,
            get: vv => vv.ambientTextureStrength,
            set: (vv, zv) => {
              vv.ambientTextureStrength = zv
            }
          },
          metadata: zv
        }, gh, ph), (0, nv.e)(vv, null, xz, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: vv => "ambientTextureImpactOnAnalyticalLights" in vv,
            get: vv => vv.ambientTextureImpactOnAnalyticalLights,
            set: (vv, zv) => {
              vv.ambientTextureImpactOnAnalyticalLights = zv
            }
          },
          metadata: zv
        }, dh, Nh), (0, nv.e)(vv, null, tz, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "opacityTexture" in vv,
            get: vv => vv.opacityTexture,
            set: (vv, zv) => {
              vv.opacityTexture = zv
            }
          },
          metadata: zv
        }, lh, Th), (0, nv.e)(vv, null, qz, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "reflectionTexture" in vv,
            get: vv => vv.reflectionTexture,
            set: (vv, zv) => {
              vv.reflectionTexture = zv
            }
          },
          metadata: zv
        }, Wh, wh), (0, nv.e)(vv, null, Iz, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "emissiveTexture" in vv,
            get: vv => vv.emissiveTexture,
            set: (vv, zv) => {
              vv.emissiveTexture = zv
            }
          },
          metadata: zv
        }, ah, sh), (0, nv.e)(vv, null, Qz, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "reflectivityTexture" in vv,
            get: vv => vv.reflectivityTexture,
            set: (vv, zv) => {
              vv.reflectivityTexture = zv
            }
          },
          metadata: zv
        }, Ch, ih), (0, nv.e)(vv, null, Zz, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "metallicTexture" in vv,
            get: vv => vv.metallicTexture,
            set: (vv, zv) => {
              vv.metallicTexture = zv
            }
          },
          metadata: zv
        }, ch, Gh), (0, nv.e)(vv, null, Az, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: vv => "metallic" in vv,
            get: vv => vv.metallic,
            set: (vv, zv) => {
              vv.metallic = zv
            }
          },
          metadata: zv
        }, mh, jh), (0, nv.e)(vv, null, Lz, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: vv => "roughness" in vv,
            get: vv => vv.roughness,
            set: (vv, zv) => {
              vv.roughness = zv
            }
          },
          metadata: zv
        }, fh, Fh), (0, nv.e)(vv, null, Hz, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: vv => "metallicF0Factor" in vv,
            get: vv => vv.metallicF0Factor,
            set: (vv, zv) => {
              vv.metallicF0Factor = zv
            }
          },
          metadata: zv
        }, Yh, nh), (0, nv.e)(vv, null, Mz, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: vv => "metallicReflectanceColor" in vv,
            get: vv => vv.metallicReflectanceColor,
            set: (vv, zv) => {
              vv.metallicReflectanceColor = zv
            }
          },
          metadata: zv
        }, Oh, Dh), (0, nv.e)(vv, null, yz, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "useOnlyMetallicFromMetallicReflectanceTexture" in vv,
            get: vv => vv.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (vv, zv) => {
              vv.useOnlyMetallicFromMetallicReflectanceTexture = zv
            }
          },
          metadata: zv
        }, Kh, Vh), (0, nv.e)(vv, null, Bz, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "metallicReflectanceTexture" in vv,
            get: vv => vv.metallicReflectanceTexture,
            set: (vv, zv) => {
              vv.metallicReflectanceTexture = zv
            }
          },
          metadata: zv
        }, Uh, Rh), (0, nv.e)(vv, null, Jz, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "reflectanceTexture" in vv,
            get: vv => vv.reflectanceTexture,
            set: (vv, zv) => {
              vv.reflectanceTexture = zv
            }
          },
          metadata: zv
        }, xh, th), (0, nv.e)(vv, null, Ez, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "microSurfaceTexture" in vv,
            get: vv => vv.microSurfaceTexture,
            set: (vv, zv) => {
              vv.microSurfaceTexture = zv
            }
          },
          metadata: zv
        }, qh, Ih), (0, nv.e)(vv, null, oz, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "bumpTexture" in vv,
            get: vv => vv.bumpTexture,
            set: (vv, zv) => {
              vv.bumpTexture = zv
            }
          },
          metadata: zv
        }, Qh, Zh), (0, nv.e)(vv, null, bz, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "lightmapTexture" in vv,
            get: vv => vv.lightmapTexture,
            set: (vv, zv) => {
              vv.lightmapTexture = zv
            }
          },
          metadata: zv
        }, Ah, Lh), (0, nv.e)(vv, null, rz, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: vv => "ambientColor" in vv,
            get: vv => vv.ambientColor,
            set: (vv, zv) => {
              vv.ambientColor = zv
            }
          },
          metadata: zv
        }, Hh, Mh), (0, nv.e)(vv, null, kz, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: vv => "albedoColor" in vv,
            get: vv => vv.albedoColor,
            set: (vv, zv) => {
              vv.albedoColor = zv
            }
          },
          metadata: zv
        }, yh, Bh), (0, nv.e)(vv, null, Xz, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: vv => "baseWeight" in vv,
            get: vv => vv.baseWeight,
            set: (vv, zv) => {
              vv.baseWeight = zv
            }
          },
          metadata: zv
        }, Jh, Eh), (0, nv.e)(vv, null, uz, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: vv => "baseDiffuseRoughness" in vv,
            get: vv => vv.baseDiffuseRoughness,
            set: (vv, zv) => {
              vv.baseDiffuseRoughness = zv
            }
          },
          metadata: zv
        }, oh, bh), (0, nv.e)(vv, null, vP, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: vv => "reflectivityColor" in vv,
            get: vv => vv.reflectivityColor,
            set: (vv, zv) => {
              vv.reflectivityColor = zv
            }
          },
          metadata: zv
        }, rh, kh), (0, nv.e)(vv, null, zP, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: vv => "reflectionColor" in vv,
            get: vv => vv.reflectionColor,
            set: (vv, zv) => {
              vv.reflectionColor = zv
            }
          },
          metadata: zv
        }, Xh, uh), (0, nv.e)(vv, null, PP, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: vv => "emissiveColor" in vv,
            get: vv => vv.emissiveColor,
            set: (vv, zv) => {
              vv.emissiveColor = zv
            }
          },
          metadata: zv
        }, vS, zS), (0, nv.e)(vv, null, hP, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: vv => "microSurface" in vv,
            get: vv => vv.microSurface,
            set: (vv, zv) => {
              vv.microSurface = zv
            }
          },
          metadata: zv
        }, PS, hS), (0, nv.e)(vv, null, SP, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: vv => "useLightmapAsShadowmap" in vv,
            get: vv => vv.useLightmapAsShadowmap,
            set: (vv, zv) => {
              vv.useLightmapAsShadowmap = zv
            }
          },
          metadata: zv
        }, SS, eS), (0, nv.e)(vv, null, eP, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "useAlphaFromAlbedoTexture" in vv,
            get: vv => vv.useAlphaFromAlbedoTexture,
            set: (vv, zv) => {
              vv.useAlphaFromAlbedoTexture = zv
            }
          },
          metadata: zv
        }, gS, pS), (0, nv.e)(vv, null, gP, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: vv => "forceAlphaTest" in vv,
            get: vv => vv.forceAlphaTest,
            set: (vv, zv) => {
              vv.forceAlphaTest = zv
            }
          },
          metadata: zv
        }, dS, NS), (0, nv.e)(vv, null, pP, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: vv => "alphaCutOff" in vv,
            get: vv => vv.alphaCutOff,
            set: (vv, zv) => {
              vv.alphaCutOff = zv
            }
          },
          metadata: zv
        }, lS, TS), (0, nv.e)(vv, null, dP, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: vv => "useSpecularOverAlpha" in vv,
            get: vv => vv.useSpecularOverAlpha,
            set: (vv, zv) => {
              vv.useSpecularOverAlpha = zv
            }
          },
          metadata: zv
        }, WS, wS), (0, nv.e)(vv, null, NP, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: vv => "useMicroSurfaceFromReflectivityMapAlpha" in vv,
            get: vv => vv.useMicroSurfaceFromReflectivityMapAlpha,
            set: (vv, zv) => {
              vv.useMicroSurfaceFromReflectivityMapAlpha = zv
            }
          },
          metadata: zv
        }, aS, sS), (0, nv.e)(vv, null, lP, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: vv => "useRoughnessFromMetallicTextureAlpha" in vv,
            get: vv => vv.useRoughnessFromMetallicTextureAlpha,
            set: (vv, zv) => {
              vv.useRoughnessFromMetallicTextureAlpha = zv
            }
          },
          metadata: zv
        }, CS, iS), (0, nv.e)(vv, null, TP, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: vv => "useRoughnessFromMetallicTextureGreen" in vv,
            get: vv => vv.useRoughnessFromMetallicTextureGreen,
            set: (vv, zv) => {
              vv.useRoughnessFromMetallicTextureGreen = zv
            }
          },
          metadata: zv
        }, cS, GS), (0, nv.e)(vv, null, WP, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: vv => "useMetallnessFromMetallicTextureBlue" in vv,
            get: vv => vv.useMetallnessFromMetallicTextureBlue,
            set: (vv, zv) => {
              vv.useMetallnessFromMetallicTextureBlue = zv
            }
          },
          metadata: zv
        }, mS, jS), (0, nv.e)(vv, null, wP, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: vv => "useAmbientOcclusionFromMetallicTextureRed" in vv,
            get: vv => vv.useAmbientOcclusionFromMetallicTextureRed,
            set: (vv, zv) => {
              vv.useAmbientOcclusionFromMetallicTextureRed = zv
            }
          },
          metadata: zv
        }, fS, FS), (0, nv.e)(vv, null, aP, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: vv => "useAmbientInGrayScale" in vv,
            get: vv => vv.useAmbientInGrayScale,
            set: (vv, zv) => {
              vv.useAmbientInGrayScale = zv
            }
          },
          metadata: zv
        }, YS, nS), (0, nv.e)(vv, null, sP, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: vv => "useAutoMicroSurfaceFromReflectivityMap" in vv,
            get: vv => vv.useAutoMicroSurfaceFromReflectivityMap,
            set: (vv, zv) => {
              vv.useAutoMicroSurfaceFromReflectivityMap = zv
            }
          },
          metadata: zv
        }, OS, DS), (0, nv.e)(vv, null, CP, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: vv => "usePhysicalLightFalloff" in vv,
            get: vv => vv.usePhysicalLightFalloff
          },
          metadata: zv
        }, null, LP), (0, nv.e)(vv, null, iP, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: vv => "useGLTFLightFalloff" in vv,
            get: vv => vv.useGLTFLightFalloff
          },
          metadata: zv
        }, null, LP), (0, nv.e)(vv, null, cP, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: vv => "useRadianceOverAlpha" in vv,
            get: vv => vv.useRadianceOverAlpha,
            set: (vv, zv) => {
              vv.useRadianceOverAlpha = zv
            }
          },
          metadata: zv
        }, KS, VS), (0, nv.e)(vv, null, GP, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: vv => "useObjectSpaceNormalMap" in vv,
            get: vv => vv.useObjectSpaceNormalMap,
            set: (vv, zv) => {
              vv.useObjectSpaceNormalMap = zv
            }
          },
          metadata: zv
        }, US, RS), (0, nv.e)(vv, null, mP, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: vv => "useParallax" in vv,
            get: vv => vv.useParallax,
            set: (vv, zv) => {
              vv.useParallax = zv
            }
          },
          metadata: zv
        }, xS, tS), (0, nv.e)(vv, null, jP, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: vv => "useParallaxOcclusion" in vv,
            get: vv => vv.useParallaxOcclusion,
            set: (vv, zv) => {
              vv.useParallaxOcclusion = zv
            }
          },
          metadata: zv
        }, qS, IS), (0, nv.e)(vv, null, fP, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: vv => "parallaxScaleBias" in vv,
            get: vv => vv.parallaxScaleBias,
            set: (vv, zv) => {
              vv.parallaxScaleBias = zv
            }
          },
          metadata: zv
        }, QS, ZS), (0, nv.e)(vv, null, FP, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: vv => "disableLighting" in vv,
            get: vv => vv.disableLighting,
            set: (vv, zv) => {
              vv.disableLighting = zv
            }
          },
          metadata: zv
        }, AS, LS), (0, nv.e)(vv, null, YP, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: vv => "forceIrradianceInFragment" in vv,
            get: vv => vv.forceIrradianceInFragment,
            set: (vv, zv) => {
              vv.forceIrradianceInFragment = zv
            }
          },
          metadata: zv
        }, HS, MS), (0, nv.e)(vv, null, nP, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: vv => "maxSimultaneousLights" in vv,
            get: vv => vv.maxSimultaneousLights,
            set: (vv, zv) => {
              vv.maxSimultaneousLights = zv
            }
          },
          metadata: zv
        }, yS, BS), (0, nv.e)(vv, null, OP, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: vv => "invertNormalMapX" in vv,
            get: vv => vv.invertNormalMapX,
            set: (vv, zv) => {
              vv.invertNormalMapX = zv
            }
          },
          metadata: zv
        }, JS, ES), (0, nv.e)(vv, null, DP, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: vv => "invertNormalMapY" in vv,
            get: vv => vv.invertNormalMapY,
            set: (vv, zv) => {
              vv.invertNormalMapY = zv
            }
          },
          metadata: zv
        }, oS, bS), (0, nv.e)(vv, null, KP, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: vv => "twoSidedLighting" in vv,
            get: vv => vv.twoSidedLighting,
            set: (vv, zv) => {
              vv.twoSidedLighting = zv
            }
          },
          metadata: zv
        }, rS, kS), (0, nv.e)(vv, null, VP, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: vv => "useAlphaFresnel" in vv,
            get: vv => vv.useAlphaFresnel,
            set: (vv, zv) => {
              vv.useAlphaFresnel = zv
            }
          },
          metadata: zv
        }, XS, uS), (0, nv.e)(vv, null, UP, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: vv => "useLinearAlphaFresnel" in vv,
            get: vv => vv.useLinearAlphaFresnel,
            set: (vv, zv) => {
              vv.useLinearAlphaFresnel = zv
            }
          },
          metadata: zv
        }, ve, ze), (0, nv.e)(vv, null, RP, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: vv => "environmentBRDFTexture" in vv,
            get: vv => vv.environmentBRDFTexture,
            set: (vv, zv) => {
              vv.environmentBRDFTexture = zv
            }
          },
          metadata: zv
        }, Pe, he), (0, nv.e)(vv, null, xP, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: vv => "forceNormalForward" in vv,
            get: vv => vv.forceNormalForward,
            set: (vv, zv) => {
              vv.forceNormalForward = zv
            }
          },
          metadata: zv
        }, Se, ee), (0, nv.e)(vv, null, tP, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: vv => "enableSpecularAntiAliasing" in vv,
            get: vv => vv.enableSpecularAntiAliasing,
            set: (vv, zv) => {
              vv.enableSpecularAntiAliasing = zv
            }
          },
          metadata: zv
        }, ge, pe), (0, nv.e)(vv, null, qP, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: vv => "useHorizonOcclusion" in vv,
            get: vv => vv.useHorizonOcclusion,
            set: (vv, zv) => {
              vv.useHorizonOcclusion = zv
            }
          },
          metadata: zv
        }, de, Ne), (0, nv.e)(vv, null, IP, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: vv => "useRadianceOcclusion" in vv,
            get: vv => vv.useRadianceOcclusion,
            set: (vv, zv) => {
              vv.useRadianceOcclusion = zv
            }
          },
          metadata: zv
        }, le, Te), (0, nv.e)(vv, null, QP, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: vv => "unlit" in vv,
            get: vv => vv.unlit,
            set: (vv, zv) => {
              vv.unlit = zv
            }
          },
          metadata: zv
        }, We, we), (0, nv.e)(vv, null, ZP, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: vv => "applyDecalMapAfterDetailMap" in vv,
            get: vv => vv.applyDecalMapAfterDetailMap,
            set: (vv, zv) => {
              vv.applyDecalMapAfterDetailMap = zv
            }
          },
          metadata: zv
        }, ae, se), zv && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zv
        })
      })(), vv.PBRMATERIAL_OPAQUE = fz.PBRMATERIAL_OPAQUE, vv.PBRMATERIAL_ALPHATEST = fz.PBRMATERIAL_ALPHATEST, vv.PBRMATERIAL_ALPHABLEND = fz.PBRMATERIAL_ALPHABLEND, vv.PBRMATERIAL_ALPHATESTANDBLEND = fz.PBRMATERIAL_ALPHATESTANDBLEND, vv.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = fz.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, vv
    })();
    const IS = "KHR_materials_diffuse_transmission";

    function QS(vv, zv) {
      const Pv = zv.subSurface;
      let hv = null;
      return Pv.translucencyIntensityTexture ? hv = Pv.translucencyIntensityTexture : Pv.thicknessTexture && Pv.useMaskFromThicknessTexture && (hv = Pv.thicknessTexture), hv && !Pv.useGltfStyleTextures ? (Dv.d.Warn(`${vv}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${zv.name}`, 1), null) : hv
    }
    class ZS {
      constructor(vv) {
        this.name = IS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = vv
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(vv, zv, Pv) {
        const hv = [];
        if (Pv instanceof qS && this._isExtensionEnabled(Pv)) {
          const zv = QS(vv, Pv);
          return zv && hv.push(zv), Pv.subSurface.translucencyColorTexture && hv.push(Pv.subSurface.translucencyColorTexture), hv
        }
        return hv
      }
      _isExtensionEnabled(vv) {
        if (vv.unlit) return !1;
        const zv = vv.subSurface;
        return !!zv.isTranslucencyEnabled && (!vv.unlit && !zv.useAlbedoToTintTranslucency && zv.useGltfStyleTextures && 1 === zv.volumeIndexOfRefraction && 0 === zv.minimumThickness && 0 === zv.maximumThickness)
      }
      postExportMaterialAsync(vv, zv, Pv) {
        return new Promise((hv => {
          if (Pv instanceof qS && this._isExtensionEnabled(Pv)) {
            this._wasUsed = !0;
            const hv = Pv.subSurface,
              Sv = QS(vv, Pv),
              ev = 0 == hv.translucencyIntensity ? void 0 : hv.translucencyIntensity,
              gv = this._exporter._materialExporter.getTextureInfo(Sv) ?? void 0,
              pv = !hv.translucencyColor || hv.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : hv.translucencyColor.pPv(),
              dv = this._exporter._materialExporter.getTextureInfo(hv.translucencyColorTexture) ?? void 0,
              Nv = {
                diffuseTransmissionFactor: ev,
                diffuseTransmissionTexture: gv,
                diffuseTransmissionColorFactor: pv,
                diffuseTransmissionColorTexture: dv
              };
            (gv || dv) && this._exporter._materialNeedsUVsSet.add(Pv), zv.extensions = zv.extensions || {}, zv.extensions[IS] = Nv
          }
          hv(zv)
        }))
      }
    }
    let AS = !1;

    function LS() {
      AS || (AS = !0, th.RegisterExtension(IS, (vv => new ZS(vv))))
    }
    LS();
    const HS = "KHR_materials_dispersion";
    class MS {
      constructor() {
        this.name = HS, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(vv) {
        if (vv.unlit) return !1;
        const zv = vv.subSurface;
        return !(!zv.isRefractionEnabled && !zv.isDispersionEnabled)
      }
      postExportMaterialAsync(vv, zv, Pv) {
        return new Promise((vv => {
          if (Pv instanceof qS && this._isExtensionEnabled(Pv)) {
            this._wasUsed = !0;
            const vv = {
              dispersion: Pv.subSurface.dispersion
            };
            zv.extensions = zv.extensions || {}, zv.extensions[HS] = vv
          }
          vv(zv)
        }))
      }
    }
    let yS = !1;

    function BS() {
      yS || (yS = !0, th.RegisterExtension(HS, (() => new MS)))
    }
    BS();
    const JS = "KHR_materials_emissive_strength";
    class ES {
      constructor() {
        this.name = JS, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(vv, zv, Pv) {
        return await new Promise((vv => {
          if (!(Pv instanceof qS)) return vv(zv);
          const hv = Pv.emissiveColor.scale(Pv.emissiveIntensity),
            Sv = Math.max(...hv.pPv());
          if (Sv > 1) {
            zv.emissiveFactor = hv.scale(1 / Sv).pPv(), this._wasUsed = !0;
            const vv = {
              emissiveStrength: Sv
            };
            zv.extensions || (zv.extensions = {}), zv.extensions[JS] = vv
          } else zv.emissiveFactor = hv.pPv();
          return vv(zv)
        }))
      }
    }
    let oS = !1;

    function bS() {
      oS || (oS = !0, th.RegisterExtension(JS, (() => new ES)))
    }
    bS();
    const rS = "KHR_materials_ior";
    class kS {
      constructor() {
        this.name = rS, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(vv) {
        return !vv.unlit && (vv instanceof Xz ? 1.5 != vv.specularIor : vv instanceof qS && (void 0 != vv.indexOfRefraction && 1.5 != vv.indexOfRefraction))
      }
      postExportMaterialAsync(vv, zv, Pv) {
        return new Promise((vv => {
          if (Pv instanceof qS && this._isExtensionEnabled(Pv)) {
            this._wasUsed = !0;
            const vv = {
              ior: Pv.indexOfRefraction
            };
            zv.extensions = zv.extensions || {}, zv.extensions[rS] = vv
          } else if (Pv instanceof Xz && this._isExtensionEnabled(Pv)) {
            this._wasUsed = !0;
            const vv = {
              ior: Pv.specularIor
            };
            zv.extensions = zv.extensions || {}, zv.extensions[rS] = vv
          }
          vv(zv)
        }))
      }
    }
    let XS = !1;

    function uS() {
      XS || (XS = !0, th.RegisterExtension(rS, (() => new kS)))
    }
    uS();
    const ve = "KHR_materials_iridescence";
    class ze {
      constructor(vv) {
        this.name = ve, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = vv
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(vv, zv, Pv) {
        const hv = [];
        if (Pv instanceof fz) {
          if (Pv.iridescence.isEnabled) return Pv.iridescence.texture && hv.push(Pv.iridescence.texture), Pv.iridescence.thicknessTexture && Pv.iridescence.thicknessTexture !== Pv.iridescence.texture && hv.push(Pv.iridescence.thicknessTexture), hv
        } else if (Pv instanceof Xz && Pv.thinFilmWeight > 0) return Pv.thinFilmWeightTexture && hv.push(Pv.thinFilmWeightTexture), Pv.thinFilmThicknessTexture && Pv.thinFilmThicknessTexture !== Pv.thinFilmWeightTexture && hv.push(Pv.thinFilmThicknessTexture), hv;
        return []
      }
      postExportMaterialAsync(vv, zv, Pv) {
        return new Promise((vv => {
          if (Pv instanceof fz) {
            if (!Pv.iridescence.isEnabled) return void vv(zv);
            this._wasUsed = !0, zv.extensions = zv.extensions || {};
            const hv = this._exporter._materialExporter.getTextureInfo(Pv.iridescence.texture),
              Sv = this._exporter._materialExporter.getTextureInfo(Pv.iridescence.thicknessTexture),
              ev = {
                iridescenceFactor: Pv.iridescence.intensity,
                iridescenceIor: Pv.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: Pv.iridescence.minimumThickness,
                iridescenceThicknessMaximum: Pv.iridescence.maximumThickness,
                iridescenceTexture: hv ?? void 0,
                iridescenceThicknessTexture: Sv ?? void 0
              };
            null === ev.iridescenceTexture && null === ev.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(Pv), zv.extensions[ve] = ev
          } else if (Pv instanceof Xz) {
            if (Pv.thinFilmWeight <= 0) return void vv(zv);
            this._wasUsed = !0, zv.extensions = zv.extensions || {};
            const hv = this._exporter._materialExporter.getTextureInfo(Pv.thinFilmWeightTexture),
              Sv = this._exporter._materialExporter.getTextureInfo(Pv.thinFilmThicknessTexture),
              ev = {
                iridescenceFactor: Pv.thinFilmWeight,
                iridescenceIor: Pv.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * Pv.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * Pv.thinFilmThickness,
                iridescenceTexture: hv ?? void 0,
                iridescenceThicknessTexture: Sv ?? void 0
              };
            null === ev.iridescenceTexture && null === ev.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(Pv), zv.extensions[ve] = ev
          }
          vv(zv)
        }))
      }
    }
    let Pe = !1;

    function he() {
      Pe || (Pe = !0, th.RegisterExtension(ve, (vv => new ze(vv))))
    }
    he();
    const Se = "KHR_materials_sheen";
    class ee {
      constructor(vv) {
        this.name = Se, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = vv
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(vv, zv, Pv) {
        return Pv instanceof qS && Pv.sheen.isEnabled && Pv.sheen.texture ? [Pv.sheen.texture] : []
      }
      async postExportMaterialAsync(vv, zv, Pv) {
        return await new Promise((vv => {
          if (Pv instanceof qS) {
            if (!Pv.sheen.isEnabled) return void vv(zv);
            this._wasUsed = !0, null == zv.extensions && (zv.extensions = {});
            const hv = {
              sheenColorFactor: Pv.sheen.color.pPv(),
              sheenRoughnessFactor: Pv.sheen.roughness ?? 0
            };
            null === hv.sheenColorTexture && null === hv.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Pv), Pv.sheen.texture && (hv.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(Pv.sheen.texture) ?? void 0), Pv.sheen.textureRoughness && !Pv.sheen.useRoughnessFromMainTexture ? hv.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Pv.sheen.textureRoughness) ?? void 0 : Pv.sheen.texture && Pv.sheen.useRoughnessFromMainTexture && (hv.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Pv.sheen.texture) ?? void 0), zv.extensions[Se] = hv
          }
          vv(zv)
        }))
      }
    }
    let ge = !1;

    function pe() {
      ge || (ge = !0, th.RegisterExtension(Se, (vv => new ee(vv))))
    }
    pe();
    const de = "KHR_materials_fuzz";

    function Ne(vv, zv) {
      const Pv = new Vv.e(zv.name, zv.rD());
      return Pv._texture = vv, Pv.coordinatesIndex = zv.coordinatesIndex, zv instanceof Vv.e && (Pv.uOffset = zv.uOffset, Pv.vOffset = zv.vOffset, Pv.uScale = zv.uScale, Pv.vScale = zv.vScale, Pv.wAng = zv.wAng), Pv.wrapU = zv.wrapU, Pv.wrapV = zv.wrapV, Pv
    }
    class le {
      constructor(vv) {
        this.name = de, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = vv
      }
      dispose() {
        for (const vv of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[vv].dispose()
        }
        this._mergedTexturesMap = {};
        for (const vv of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[vv].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(vv, zv, Pv) {
        if (Pv instanceof Xz) {
          const vv = [];
          if (Pv.fuzzWeight > 0) {
            Pv.fuzzWeightTexture && vv.push(Pv.fuzzWeightTexture);
            let zv = !1;
            if (Pv.fuzzRoughnessTexture && (Pv._useFuzzRoughnessFromTextureAlpha ? vv.push(Pv.fuzzRoughnessTexture) : zv = !0), Pv.fuzzColorTexture && !zv && vv.push(Pv.fuzzColorTexture), zv) {
              const zv = function(vv) {
                const zv = vv.fuzzColorTexture,
                  Pv = zv && zv.getInternalTexture() ? zv.getInternalTexture().uniqueId : "NoFuzzColor",
                  hv = vv.fuzzRoughnessTexture;
                return `FuzzColor_${Pv}_FuzzRoughness_${hv&&hv.getInternalTexture()?hv.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(Pv);
              if (!this._cachedInternalTexturesMap[zv]) {
                const vv = await async function(vv) {
                  const zv = vv.rD(),
                    Pv = vv.fuzzColorTexture,
                    hv = vv.fuzzRoughnessTexture;
                  return Pv || hv ? (await gP("FuzzTexture", NP(Pv ? pP(Pv, 0) : dP(1), Pv ? pP(Pv, 1) : dP(1), Pv ? pP(Pv, 2) : dP(1), hv ? pP(hv, vv._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : dP(1)), zv)).getInternalTexture() : null
                }(Pv);
                vv && (this._cachedInternalTexturesMap[zv] = vv)
              }
              this._cachedInternalTexturesMap[zv] && (Pv.fuzzColorTexture && (this._mergedTexturesMap[Pv.fuzzColorTexture.uniqueId] = Ne(this._cachedInternalTexturesMap[zv], Pv.fuzzColorTexture), vv.push(this._mergedTexturesMap[Pv.fuzzColorTexture.uniqueId])), Pv.fuzzRoughnessTexture && (this._mergedTexturesMap[Pv.fuzzRoughnessTexture.uniqueId] = Ne(this._cachedInternalTexturesMap[zv], Pv.fuzzRoughnessTexture), vv.push(this._mergedTexturesMap[Pv.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return vv
        }
        return []
      }
      async postExportMaterialAsync(vv, zv, Pv) {
        return await new Promise((vv => {
          if (Pv instanceof Xz) {
            if (0 == Pv.fuzzWeight) return void vv(zv);
            this._wasUsed = !0, null == zv.extensions && (zv.extensions = {});
            const hv = {
              fuzzFactor: Pv.fuzzWeight,
              fuzzColorFactor: Pv.fuzzColor.pPv(),
              fuzzRoughnessFactor: Pv.fuzzRoughness
            };
            let Sv, ev;
            Pv.fuzzWeightTexture && (hv.fuzzTexture = this._exporter._materialExporter.getTextureInfo(Pv.fuzzWeightTexture) ?? void 0), Pv.fuzzColorTexture && (Sv = this._mergedTexturesMap[Pv.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[Pv.fuzzColorTexture.uniqueId] : Pv.fuzzColorTexture, hv.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(Sv) ?? void 0), Pv.fuzzRoughnessTexture && (ev = this._mergedTexturesMap[Pv.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[Pv.fuzzRoughnessTexture.uniqueId] : Pv.fuzzRoughnessTexture, hv.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(ev) ?? void 0), null === hv.fuzzColorTexture && null === hv.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Pv), zv.extensions[de] = hv
          }
          vv(zv)
        }))
      }
    }
    let Te = !1;

    function We() {
      Te || (Te = !0, th.RegisterExtension(de, (vv => new le(vv))))
    }
    We();
    const we = "KHR_materials_specular";
    class ae {
      constructor(vv) {
        this.name = we, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = vv
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(vv, zv, Pv) {
        const hv = [];
        return Pv instanceof qS && this._isExtensionEnabled(Pv) ? (Pv.metallicReflectanceTexture && hv.push(Pv.metallicReflectanceTexture), Pv.reflectanceTexture && hv.push(Pv.reflectanceTexture), hv) : hv
      }
      _isExtensionEnabled(vv) {
        return !vv.unlit && (void 0 != vv.metallicF0Factor && 1 != vv.metallicF0Factor || void 0 != vv.metallicReflectanceColor && !vv.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(vv))
      }
      _hasTexturesExtension(vv) {
        return null != vv.metallicReflectanceTexture || null != vv.reflectanceTexture
      }
      postExportMaterialAsync(vv, zv, Pv) {
        return new Promise((vv => {
          var hv;
          if (Pv instanceof qS && this._isExtensionEnabled(Pv)) {
            this._wasUsed = !0, zv.extensions = zv.extensions || {};
            const vv = this._exporter._materialExporter.getTextureInfo(Pv.metallicReflectanceTexture) ?? void 0,
              hv = this._exporter._materialExporter.getTextureInfo(Pv.reflectanceTexture) ?? void 0,
              Sv = {
                specularFactor: 1 == Pv.metallicF0Factor ? void 0 : Pv.metallicF0Factor,
                specularTexture: vv,
                specularColorFactor: Pv.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : Pv.metallicReflectanceColor.pPv(),
                specularColorTexture: hv
              };
            this._hasTexturesExtension(Pv) && this._exporter._materialNeedsUVsSet.add(Pv), zv.extensions[we] = Sv
          } else if (Pv instanceof Xz) {
            zv.extensions = zv.extensions || {};
            const Sv = this._exporter._materialExporter.getTextureInfo(Pv.specularWeightTexture) ?? void 0,
              ev = this._exporter._materialExporter.getTextureInfo(Pv.specularColorTexture) ?? void 0,
              gv = 1 == Pv.specularWeight ? void 0 : Pv.specularWeight,
              pv = Pv.specularColor.equalsFloats(1, 1, 1) ? void 0 : Pv.specularColor.pPv();
            if (!ev && !Sv && void 0 === gv && void 0 === pv) return vv(zv);
            this._wasUsed = !0;
            const dv = {
                specularEdgeColorEnabled: !0
              },
              Nv = {
                specularFactor: gv,
                specularTexture: Sv,
                specularColorFactor: pv,
                specularColorTexture: ev,
                extensions: {}
              };
            Nv.extensions.EXT_materials_specular_edge_color = dv, (hv = this._exporter._glTF).extensionsUsed || (hv.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (Sv || ev) && this._exporter._materialNeedsUVsSet.add(Pv), zv.extensions[we] = Nv
          }
          vv(zv)
        }))
      }
    }
    let se = !1;

    function Ce() {
      se || (se = !0, th.RegisterExtension(we, (vv => new ae(vv))))
    }
    Ce();
    const ie = "KHR_materials_transmission";
    class ce {
      constructor(vv) {
        this.name = ie, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = vv
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(vv, zv, Pv) {
        const hv = [];
        if (Pv instanceof qS) {
          if (this._isExtensionEnabled(Pv)) return Pv.subSurface.refractionIntensityTexture && Pv.subSurface.useGltfStyleTextures && hv.push(Pv.subSurface.refractionIntensityTexture), hv
        } else Pv instanceof Xz && (Pv.transmissionWeight > 0 && Pv.transmissionWeightTexture && (hv.push(Pv.transmissionWeightTexture), Pv.transmissionColorTexture && hv.push(Pv.transmissionColorTexture)), Pv.subsurfaceWeight > 0 && Pv.subsurfaceWeightTexture && hv.push(Pv.subsurfaceWeightTexture));
        return hv
      }
      _isExtensionEnabled(vv) {
        if (vv instanceof Xz && !vv.unlit) return vv.transmissionWeight > 0 || vv.subsurfaceWeight > 0;
        if (vv instanceof qS && !vv.unlit) {
          const zv = vv.subSurface;
          return zv.isRefractionEnabled && void 0 != zv.refractionIntensity && 0 != zv.refractionIntensity || null != zv.refractionIntensityTexture && zv.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(vv, zv, Pv) {
        if (!this._isExtensionEnabled(Pv)) return zv;
        if (Pv instanceof qS) {
          this._wasUsed = !0;
          const hv = Pv.subSurface,
            Sv = {
              transmissionFactor: 0 === hv.refractionIntensity ? void 0 : hv.refractionIntensity
            };
          if (hv.refractionIntensityTexture)
            if (hv.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(Pv);
              const vv = this._exporter._materialExporter.getTextureInfo(hv.refractionIntensityTexture);
              vv && (Sv.transmissionTexture = vv)
            } else Dv.d.Warn(`${vv}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          zv.extensions || (zv.extensions = {}), zv.extensions[ie] = Sv
        } else if (Pv instanceof Xz) {
          this._wasUsed = !0;
          const vv = {
            transmissionFactor: (1 - Pv.transmissionWeight) * Pv.subsurfaceWeight + Pv.transmissionWeight
          };
          if (Pv.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(Pv);
            const zv = this._exporter._materialExporter.getTextureInfo(Pv.transmissionWeightTexture);
            zv && (vv.transmissionTexture = zv)
          } else if (Pv.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(Pv);
            const zv = this._exporter._materialExporter.getTextureInfo(Pv.subsurfaceWeightTexture);
            zv && (vv.transmissionTexture = zv)
          }
          if (0 == Pv.transmissionDepth && (!Pv.transmissionColor.equals(Jv.b.White()) || Pv.transmissionColorTexture) && zv.pbrMetallicRoughness && (zv.pbrMetallicRoughness.baseColorFactor || (zv.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), zv.pbrMetallicRoughness.baseColorFactor[0] *= Pv.transmissionColor.r, zv.pbrMetallicRoughness.baseColorFactor[1] *= Pv.transmissionColor.g, zv.pbrMetallicRoughness.baseColorFactor[2] *= Pv.transmissionColor.b, Pv.transmissionColorTexture && !zv.pbrMetallicRoughness.baseColorTexture)) {
            const vv = this._exporter._materialExporter.getTextureInfo(Pv.transmissionColorTexture);
            vv && (zv.pbrMetallicRoughness.baseColorTexture = vv, this._exporter._materialNeedsUVsSet.add(Pv))
          }
          zv.extensions || (zv.extensions = {}), zv.extensions[ie] = vv
        }
        return zv
      }
    }
    let Ge = !1;

    function me() {
      Ge || (Ge = !0, th.RegisterExtension(ie, (vv => new ce(vv))))
    }
    me();
    var je = Pv(39564);
    const fe = "KHR_materials_unlit";
    class Fe {
      constructor() {
        this.name = fe, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(vv, zv, Pv) {
        return new Promise((vv => {
          let hv = !1;
          Pv instanceof qS ? hv = Pv.unlit : Pv instanceof je.i && (hv = Pv.disableLighting), hv && (this._wasUsed = !0, null == zv.extensions && (zv.extensions = {}), zv.extensions[fe] = {}), vv(zv)
        }))
      }
    }
    let Ye = !1;

    function ne() {
      Ye || (Ye = !0, th.RegisterExtension(fe, (() => new Fe)))
    }
    ne();
    const Oe = "KHR_materials_volume";
    class De {
      constructor(vv) {
        this.name = Oe, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = vv
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(vv, zv, Pv) {
        const hv = [];
        if (Pv instanceof qS) {
          if (this._isExtensionEnabled(Pv)) return Pv.subSurface.thicknessTexture && hv.push(Pv.subSurface.thicknessTexture), hv
        } else Pv instanceof Xz && (Pv.transmissionWeight > 0 || Pv.subsurfaceWeight > 0) && Pv.geometryThicknessTexture && hv.push(Pv.geometryThicknessTexture);
        return hv
      }
      _isExtensionEnabled(vv) {
        if (vv.unlit) return !1;
        const zv = vv.subSurface;
        return !(!zv.isRefractionEnabled && !zv.isTranslucencyEnabled) && (void 0 != zv.maximumThickness && 0 != zv.maximumThickness || void 0 != zv.tintColorAtDistance && zv.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != zv.tintColor && zv.tintColor != Jv.b.White() || this._hasTexturesExtension(vv))
      }
      _hasTexturesExtension(vv) {
        return null != vv.subSurface.thicknessTexture
      }
      postExportMaterialAsync(vv, zv, Pv) {
        return new Promise((vv => {
          if (Pv instanceof qS && this._isExtensionEnabled(Pv)) {
            this._wasUsed = !0;
            const vv = Pv.subSurface,
              hv = {
                thicknessFactor: 0 == vv.maximumThickness ? void 0 : vv.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(vv.thicknessTexture) ?? void 0,
                attenuationDistance: vv.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : vv.tintColorAtDistance,
                attenuationColor: vv.tintColor.equalsFloats(1, 1, 1) ? void 0 : vv.tintColor.pPv()
              };
            this._hasTexturesExtension(Pv) && this._exporter._materialNeedsUVsSet.add(Pv), zv.extensions = zv.extensions || {}, zv.extensions[Oe] = hv
          } else if (Pv instanceof Xz) {
            const vv = Pv.transmissionWeight > 0 && !Pv.geometryThinWalled,
              hv = Pv.subsurfaceWeight > 0 && !Pv.geometryThinWalled;
            if (vv || hv) {
              this._wasUsed = !0;
              const Sv = Pv.geometryThickness,
                ev = this._exporter._materialExporter.getTextureInfo(Pv.geometryThicknessTexture) ?? void 0;
              let gv;
              ev && this._exporter._materialNeedsUVsSet.add(Pv);
              const pv = Jv.b.White().pPv();
              if (vv && Pv.transmissionDepth > 0) {
                const vv = 1 / Pv.transmissionDepth;
                let zv = new Zv.l(-Math.log(Pv.transmissionColor.r) * vv, -Math.log(Pv.transmissionColor.g) * vv, -Math.log(Pv.transmissionColor.b) * vv);
                const hv = new Zv.l(Pv.transmissionScatter.r * vv, Pv.transmissionScatter.g * vv, Pv.transmissionScatter.b * vv),
                  Sv = zv.subtract(hv),
                  ev = Math.min(Sv.x, Sv.y, Sv.z);
                ev < 0 && (Sv.x = Sv.x - ev, Sv.y = Sv.y - ev, Sv.z = Sv.z - ev), zv = Sv.add(hv);
                gv = 1 / Math.max(zv.x, zv.y, zv.z), pv[0] = Math.exp(-zv.x * gv), pv[1] = Math.exp(-zv.y * gv), pv[2] = Math.exp(-zv.z * gv)
              } else gv = Number.MAX_VALUE, pv[0] = 1, pv[1] = 1, pv[2] = 1;
              let dv = 1;
              const Nv = Jv.b.White().pPv();
              if (hv) {
                const vv = Pv.subsurfaceRadius,
                  zv = Pv.subsurfaceRadiusScale,
                  hv = new Zv.l(zv.r, zv.g, zv.b).multiplyByFloats(vv, vv, vv),
                  Sv = new Zv.l(1 / Math.max(hv.x, 1e-6), 1 / Math.max(hv.y, 1e-6), 1 / Math.max(hv.z, 1e-6));
                dv = 1 / Math.max(Sv.x, Sv.y, Sv.z), Nv[0] = Math.exp(-Sv.x * dv), Nv[1] = Math.exp(-Sv.y * dv), Nv[2] = Math.exp(-Sv.z * dv)
              }
              const lv = (1 - Pv.transmissionWeight) * Pv.subsurfaceWeight,
                Tv = lv + Pv.transmissionWeight,
                Wv = 1 / Math.max(Tv, 1e-6),
                wv = Pv.transmissionWeight * Wv,
                av = lv * Wv,
                sv = pv.map(((vv, zv) => vv * wv + Nv[zv] * av)),
                Cv = {
                  thicknessFactor: Sv,
                  thicknessTexture: ev,
                  attenuationDistance: gv * wv + dv * av,
                  attenuationColor: sv
                };
              zv.extensions = zv.extensions || {}, zv.extensions[Oe] = Cv
            }
          }
          vv(zv)
        }))
      }
    }
    let Ke = !1;

    function Ve() {
      Ke || (Ke = !0, th.RegisterExtension(Oe, (vv => new De(vv))))
    }
    Ve();
    const Ue = "KHR_materials_volume_scatter";
    class Re {
      constructor(vv) {
        this.name = Ue, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = vv
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(vv, zv, Pv) {
        const hv = [];
        return Pv instanceof Xz && (Pv.transmissionWeight > 0 && Pv.transmissionScatterTexture && hv.push(Pv.transmissionScatterTexture), Pv.subsurfaceWeight > 0 && Pv.subsurfaceColorTexture && hv.push(Pv.subsurfaceColorTexture)), hv
      }
      _isExtensionEnabled(vv) {
        if (vv.unlit) return !1;
        const zv = vv.transmissionWeight > 0 && !vv.geometryThinWalled && vv.transmissionDepth > 0 && !vv.transmissionScatter.equals(Jv.b.Black()),
          Pv = vv.subsurfaceWeight > 0 && !vv.geometryThinWalled;
        return !(!zv && !Pv)
      }
      postExportMaterialAsync(vv, zv, Pv) {
        return new Promise((vv => {
          if (Pv instanceof Xz && this._isExtensionEnabled(Pv)) {
            this._wasUsed = !0;
            let vv = Zv.l.Zero(),
              hv = 0;
            if (Pv.transmissionWeight > 0) {
              vv = function(vv) {
                const zv = new Zv.l(Math.sqrt(1 - vv.x), Math.sqrt(1 - vv.y), Math.sqrt(1 - vv.z)),
                  Pv = new Zv.l(1, 1, 1),
                  hv = Pv.subtract(zv),
                  Sv = Pv.subtract(new Zv.l(.139, .139, .139).multiplyInPlace(zv)),
                  ev = Pv.add(new Zv.l(1.17, 1.17, 1.17).multiplyInPlace(zv));
                return hv.multiplyInPlace(Sv).divideInPlace(ev)
              }(new Zv.l(Pv.transmissionScatter.r, Pv.transmissionScatter.g, Pv.transmissionScatter.b)), hv = Pv.transmissionScatterAnisotropy
            }
            const Sv = Zv.l.Zero();
            let ev = 0;
            Pv.subsurfaceWeight > 0 && (Sv.set(Pv.subsurfaceColor.r, Pv.subsurfaceColor.g, Pv.subsurfaceColor.b), ev = Pv.subsurfaceScatterAnisotropy);
            const gv = (1 - Pv.transmissionWeight) * Pv.subsurfaceWeight,
              pv = gv + Pv.transmissionWeight,
              dv = 1 / Math.max(pv, 1e-6),
              Nv = Pv.transmissionWeight * dv,
              lv = gv * dv,
              Tv = {
                multiscatterColorFactor: vv.multiplyByFloats(Nv, Nv, Nv).addInPlace(Sv.multiplyByFloats(lv, lv, lv)).pPv(),
                scatterAnisotropy: hv * Nv + ev * lv
              };
            if (Pv.subsurfaceWeight > 0 && Pv.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(Pv);
              const vv = this._exporter._materialExporter.getTextureInfo(Pv.subsurfaceColorTexture);
              vv && (Tv.multiscatterColorTexture = vv)
            } else if (Pv.transmissionWeight > 0 && Pv.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(Pv);
              const vv = this._exporter._materialExporter.getTextureInfo(Pv.transmissionScatterTexture);
              vv && (Tv.multiscatterColorTexture = vv)
            }
            zv.extensions = zv.extensions || {}, zv.extensions[Ue] = Tv
          }
          vv(zv)
        }))
      }
    }
    let xe = !1;

    function te() {
      xe || (xe = !0, th.RegisterExtension(Ue, (vv => new Re(vv)), 101))
    }
    te();
    const qe = "KHR_materials_diffuse_roughness";
    class Ie {
      constructor(vv) {
        this.name = qe, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = vv
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(vv, zv, Pv) {
        const hv = [];
        if (Pv instanceof fz) {
          if (Pv._baseDiffuseRoughness) return Pv._baseDiffuseRoughnessTexture && hv.push(Pv._baseDiffuseRoughnessTexture), hv
        } else if (Pv instanceof Xz && Pv.baseDiffuseRoughness) return Pv.baseDiffuseRoughnessTexture && hv.push(Pv.baseDiffuseRoughnessTexture), hv;
        return []
      }
      postExportMaterialAsync(vv, zv, Pv) {
        return new Promise((vv => {
          let hv = null,
            Sv = null;
          if (Pv instanceof fz ? (hv = Pv._baseDiffuseRoughness, Sv = Pv._baseDiffuseRoughnessTexture) : Pv instanceof Xz && (hv = Pv.baseDiffuseRoughness, Sv = Pv.baseDiffuseRoughnessTexture), !hv) return void vv(zv);
          this._wasUsed = !0, zv.extensions = zv.extensions || {};
          const ev = {
            diffuseRoughnessFactor: hv,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(Sv) ?? void 0
          };
          null !== ev.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(Pv), zv.extensions[qe] = ev, vv(zv)
        }))
      }
    }
    let Qe = !1;

    function Ze() {
      Qe || (Qe = !0, th.RegisterExtension(qe, (vv => new Ie(vv))))
    }
    Ze();
    const Ae = "KHR_materials_openpbr";
    class Le {
      constructor() {
        this.name = Ae, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(vv, zv, Pv) {
        return new Promise((vv => {
          Pv instanceof Xz && (this._wasUsed = !0, zv.extensions = zv.extensions || {}, zv.extensions[Ae] = {}), vv(zv)
        }))
      }
    }
    let He = !1;

    function Me() {
      He || (He = !0, th.RegisterExtension(Ae, (() => new Le)))
    }
    Me();
    const ye = "KHR_texture_transform";
    class Be {
      constructor() {
        this.name = ye, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(vv, zv, Pv) {
        if (Pv.rD() || Yz.h.Warn(`${vv}: "scene" is not defined for Babylon texture ${Pv.name}!`), (0 !== Pv.uAng || 0 !== Pv.vAng) && (Yz.h.Warn(`${vv}: Texture ${Pv.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== Pv.uRotationCenter || 0 !== Pv.vRotationCenter)) return;
        const hv = {};
        let Sv = !1;
        if (0 === Pv.uOffset && 0 === Pv.vOffset || (hv.offset = [Pv.uOffset, Pv.vOffset], Sv = !0), 1 === Pv.uScale && 1 === Pv.vScale || (hv.scale = [Pv.uScale, Pv.vScale], Sv = !0), 0 !== Pv.wAng) {
          if (0 !== Pv.uRotationCenter || 0 !== Pv.vRotationCenter) {
            if (Pv.homogeneousRotationInUVTransform && Pv.uScale !== Pv.vScale) return void Yz.h.Warn(`${vv}: Texture ${Pv.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${ye}.`);
            Yz.h.Warn(`${vv}: Texture ${Pv.name} with non-origin rotation center will be exported using an adjusted offset with ${ye}.`), hv.offset = function(vv) {
              const {
                uOffset: zv,
                vOffset: Pv,
                uRotationCenter: hv,
                vRotationCenter: Sv,
                uScale: ev,
                vScale: gv,
                wAng: pv
              } = vv, dv = Math.cos(pv), Nv = Math.sin(pv), lv = hv * ev, Tv = Sv * gv;
              return [zv + (lv * (1 - dv) + Tv * Nv), Pv + (Tv * (1 - dv) - lv * Nv)]
            }(Pv)
          }
          hv.rotation = -Pv.wAng, Sv = !0
        }
        0 !== Pv.coordinatesIndex && (hv.texCoord = Pv.coordinatesIndex, Sv = !0), Sv && (this._wasUsed = !0, zv.extensions || (zv.extensions = {}), zv.extensions[ye] = hv)
      }
    }
    let Je = !1;

    function Ee() {
      Je || (Je = !0, th.RegisterExtension(ye, (() => new Be)))
    }
    Ee();
    var oe = Pv(39338);
    const be = "KHR_texture_basisu";
    class re {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(vv) {
        this.name = be, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = vv
      }
      dispose() {}
      postExportTexture(vv, zv) {
        const Pv = this._exporter._textures[zv.index],
          hv = Pv.source;
        if (void 0 === hv) return;
        const Sv = this._exporter._images[hv];
        "image/ktx2" === (Sv.mimeType || (0, oe.i)(Sv.uri)) && (Pv.source = void 0, Pv.extensions || (Pv.extensions = {}), Pv.extensions[be] = {
          source: hv
        }, this._wasUsed = !0)
      }
    }
    let ke = !1;

    function Xe() {
      ke || (ke = !0, th.RegisterExtension(be, (vv => new re(vv))))
    }
    Xe();
    const ue = "EXT_texture_webp";
    class vg {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(vv) {
        this.name = ue, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = vv
      }
      dispose() {}
      postExportTexture(vv, zv) {
        const Pv = this._exporter._textures[zv.index],
          hv = Pv.source;
        if (void 0 === hv) return;
        const Sv = this._exporter._images[hv];
        "image/webp" === (Sv.mimeType || (0, oe.i)(Sv.uri)) && (Pv.source = void 0, Pv.extensions || (Pv.extensions = {}), Pv.extensions[ue] = {
          source: hv
        }, this._wasUsed = !0)
      }
    }
    let zg = !1;

    function Pg() {
      zg || (zg = !0, th.RegisterExtension(ue, (vv => new vg(vv))))
    }
    Pg();
    const hg = "EXT_texture_avif";
    class Sg {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(vv) {
        this.name = hg, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = vv
      }
      dispose() {}
      postExportTexture(vv, zv) {
        const Pv = this._exporter._textures[zv.index],
          hv = Pv.source;
        if (void 0 === hv) return;
        const Sv = this._exporter._images[hv];
        "image/avif" === (Sv.mimeType || (0, oe.i)(Sv.uri)) && (Pv.source = void 0, Pv.extensions || (Pv.extensions = {}), Pv.extensions[hg] = {
          source: hv
        }, this._wasUsed = !0)
      }
    }
    let eg = !1;

    function gg() {
      eg || (eg = !0, th.RegisterExtension(hg, (vv => new Sg(vv))))
    }
    gg();
    class pg {
      static CreateSTL(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          Sv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          ev = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          gv = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          pv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          dv = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const Nv = function(vv, zv, Pv) {
            const Sv = [3 * vv[Pv], 3 * vv[Pv + 1], 3 * vv[Pv + 2]],
              ev = [new hv.fa(zv[Sv[0]], zv[Sv[0] + 2], zv[Sv[0] + 1]), new hv.fa(zv[Sv[1]], zv[Sv[1] + 2], zv[Sv[1] + 1]), new hv.fa(zv[Sv[2]], zv[Sv[2] + 2], zv[Sv[2] + 1])],
              gv = ev[0].subtract(ev[1]),
              pv = ev[2].subtract(ev[1]);
            return {
              v: ev,
              n: hv.fa.Cross(pv, gv).normalize()
            }
          },
          Tv = function(vv, zv, Pv, hv) {
            return zv = Wv(vv, zv, Pv.x, hv), zv = Wv(vv, zv, Pv.y, hv), Wv(vv, zv, Pv.z, hv)
          },
          Wv = function(vv, zv, Pv, hv) {
            return vv.setFloat32(zv, Pv, hv), zv + 4
          },
          av = function(vv) {
            if (pv) {
              let zv = vv;
              vv instanceof wv.d && (zv = vv.hhv);
              const Pv = zv.getVerticesData(lv.i.PositionKind, !0, !0);
              if (!Pv) return [];
              const Sv = hv.fa.Zero();
              let ev;
              for (ev = 0; ev < Pv.length; ev += 3) hv.fa.TransformCoordinatesFromFloatsToRef(Pv[ev], Pv[ev + 1], Pv[ev + 2], vv.computeWorldMatrix(!0), Sv).toArray(Pv, ev);
              return Pv
            }
            return vv.getVerticesData(lv.i.PositionKind) || []
          };
        pv && (gv = !0);
        let sv = "",
          Cv = 0,
          iv = 0;
        if (Sv) {
          for (let Pv = 0; Pv < vv.length; Pv++) {
            const zv = vv[Pv].dPv();
            Cv += zv ? zv.length / 3 : 0
          }
          const zv = new ArrayBuffer(84 + 50 * Cv);
          sv = new DataView(zv), iv += 80, sv.setUint32(iv, Cv, ev), iv += 4
        } else dv || (sv = "solid stlmesh\r\n");
        for (let hv = 0; hv < vv.length; hv++) {
          const zv = vv[hv];
          !Sv && dv && (sv += "solid " + zv.name + "\r\n"), !gv && zv instanceof Nh.e && zv.bakeCurrentTransformIntoVertices();
          const Pv = av(zv),
            pv = zv.dPv() || [];
          for (let vv = 0; vv < pv.length; vv += 3) {
            const zv = Nv(pv, Pv, vv);
            Sv ? (iv = Tv(sv, iv, zv.n, ev), iv = Tv(sv, iv, zv.v[0], ev), iv = Tv(sv, iv, zv.v[1], ev), iv = Tv(sv, iv, zv.v[2], ev), iv += 2) : (sv += "\tfacet normal " + zv.n.x + " " + zv.n.y + " " + zv.n.z + "\r\n", sv += "\t\touter loop\r\n", sv += "\t\t\tvertex " + zv.v[0].x + " " + zv.v[0].y + " " + zv.v[0].z + "\r\n", sv += "\t\t\tvertex " + zv.v[1].x + " " + zv.v[1].y + " " + zv.v[1].z + "\r\n", sv += "\t\t\tvertex " + zv.v[2].x + " " + zv.v[2].y + " " + zv.v[2].z + "\r\n", sv += "\t\tendloop\r\n", sv += "\tendfacet\r\n")
          }!Sv && dv && (sv += "endsolid " + name + "\r\n")
        }
        if (Sv || dv || (sv += "endsolid stlmesh"), zv) {
          const vv = document.createElement("a"),
            zv = new Blob([sv], {
              type: "application/octet-stream"
            });
          vv.href = window.URL.createObjectURL(zv), vv.download = Pv + ".stl", vv.click()
        }
        return sv
      }
    }

    function dg(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Sv = [];
      for (let ev = 0; ev < vv.length / Pv; ev++) {
        const gv = vv[ev * Pv] * (hv ? -1 : 1),
          pv = vv[ev * Pv + 1],
          dv = vv[ev * Pv + 2];
        Sv.push(`(${gv.toPrecision(zv.precision)}, ${pv.toPrecision(zv.precision)}, ${dv.toPrecision(zv.precision)})`)
      }
      return Sv.join(", ")
    }

    function Ng(vv, zv) {
      const Pv = [];
      for (let hv = 0; hv < vv.length / 2; hv++) {
        const Sv = vv[2 * hv],
          ev = vv[2 * hv + 1];
        Pv.push(`(${Sv.toPrecision(zv.precision)}, ${(1-ev).toPrecision(zv.precision)})`)
      }
      return Pv.join(", ")
    }

    function lg(vv, zv, Pv, hv) {
      const Sv = vv.getVerticesData(lv.i.PositionKind),
        ev = vv.getVerticesData(lv.i.NormalKind);
      if (Sv && ev) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${Pv}"\n\t\tint[] faceVertexCounts = [${function(vv){const zv=vv.dPv()?.length?vv.getTotalIndices():vv.getTotalVertices();return Array(zv/3).fill(3).join(", ")}(vv)}]\n\t\tint[] faceVertexIndices = [${function(vv){const zv=vv.dPv(),Pv=zv?.length??vv.getTotalVertices(),hv=[];if(null!==zv)for(let Sv=0;Sv<Pv;Sv++)hv.push(zv[Sv]);else for(let Sv=0;Sv<Pv;Sv++)hv.push(Sv);return hv.join(", ")}(vv)}]\n\t\tnormal3f[] normals = [${dg(ev,zv,void 0,hv)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${dg(Sv,zv,void 0,hv)}]\n        ${function(vv,zv){let Pv="";for(let Sv=0;Sv<4;Sv++){const hv=Sv>0?Sv:"",ev=vv.getVerticesData(lv.i.UVKind+(hv?hv+1:""));ev&&(Pv+=`\n\t\ttexCoord2f[] primvars:st${hv} = [${Ng(ev,zv)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const hv=vv.getVerticesData(lv.i.ColorKind);return hv&&(Pv+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        dg(hv, zv, hv.length / vv.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),Pv}(vv,zv)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function Tg(vv, zv, Pv, hv) {
      return `\n        def "Geometry"\n        {\n        ${lg(vv,zv,Pv,hv)}\n        }\n        `
    }

    function Wg(vv) {
      let zv = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return zv += vv, fflate.strToU8(zv)
    }

    function wg(vv) {
      const zv = vv.m;
      return `( ${ag(zv,0)}, ${ag(zv,4)}, ${ag(zv,8)}, ${ag(zv,12)} )`
    }

    function ag(vv, zv) {
      return `(${vv[zv+0]}, ${vv[zv+1]}, ${vv[zv+2]}, ${vv[zv+3]})`
    }

    function sg(vv, zv) {
      const Pv = "Object_" + vv.uniqueId,
        hv = wg(zv);
      return `def Xform "${Pv}" (\n\tprepend references = @./geometries/Geometry_${vv.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${hv}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${vv.material.uniqueId}>\n}\n\n`
    }

    function Cg(vv) {
      switch (vv) {
        case Fv.d.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case Fv.d.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case Fv.d.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function ig(vv) {
      return `(${vv.x}, ${vv.y})`
    }

    function cg(vv) {
      return `(${vv.r}, ${vv.g}, ${vv.b})`
    }

    function Gg(vv) {
      return "image/jpeg" === vv || "image/png" === vv
    }

    function mg(vv, zv, Pv, Sv, ev, gv) {
      const pv = vv.getInternalTexture().uniqueId + "_" + vv.invertY,
        Nv = vv.mimeType || (0, dv.c)(vv.getInternalTexture()?.url ?? ""),
        lv = Gg(Nv) ? Nv : "image/png",
        Tv = "image/jpeg" === lv ? "jpg" : "png";
      ev[pv] = {
        texture: vv,
        mimeType: lv,
        ext: Tv
      };
      const Wv = vv.coordinatesIndex > 0 ? "st" + vv.coordinatesIndex : "st",
        wv = new hv.Vector2(vv.uScale, vv.vScale),
        av = new hv.Vector2(vv.uOffset, vv.vOffset),
        sv = vv.wAng,
        Cv = Math.sin(sv),
        iv = Math.cos(sv);
      return av.y = 1 - av.y - wv.y, av.x += Cv * wv.x, av.y += (1 - iv) * wv.y, `\n    def Shader "PrimvarReader_${Pv}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${Wv}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${Pv}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${zv.uniqueId}/PrimvarReader_${Pv}.outputs:result>\n        float inputs:rotation = ${(sv*(180/Math.PI)).toFixed(gv.precision)}\n        float2 inputs:scale = ${ig(wv)}\n        float2 inputs:translation = ${ig(av)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${vv.uniqueId}_${Pv}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${pv}.${Tv}@\n        float2 inputs:st.connect = </Root/Materials/Material_${zv.uniqueId}/Transform2d_${Pv}.outputs:result>\n        ${Sv?"float4 inputs:scale = "+function(vv){return`(${vv.r}, ${vv.g}, ${vv.b}, 1.0)`}(Sv):""}\n        token inputs:sourceColorSpace = "${vv.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${Cg(vv.wrapU)}"\n        token inputs:wrapT = "${Cg(vv.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${zv.needAlphaBlending()||zv.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function jg(vv, zv, Pv) {
      const hv = "\t\t\t",
        Sv = [],
        ev = [],
        {
          diffuseMap: gv,
          diffuse: pv,
          alphaCutOff: dv,
          emissiveMap: Nv,
          emissive: lv,
          normalMap: Tv,
          roughnessMap: Wv,
          roughnessChannel: wv,
          roughness: av,
          metalnessMap: sv,
          metalnessChannel: iv,
          metalness: cv,
          aoMap: Gv,
          aoMapChannel: mv,
          aoMapIntensity: jv,
          alphaMap: fv,
          ior: Fv,
          clearCoatEnabled: Yv,
          clearCoat: nv,
          clearCoatMap: Ov,
          clearCoatRoughness: Dv,
          clearCoatRoughnessMap: Kv
        } = function(vv) {
          const zv = {
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
          return vv instanceof eh.StandardMaterial ? {
            ...zv,
            diffuseMap: vv.diffuseTexture,
            diffuse: vv.diffuseColor,
            alphaCutOff: vv.alphaCutOff,
            emissiveMap: vv.emissiveTexture,
            emissive: vv.emissiveColor,
            roughness: 1,
            alphaMap: vv.opacityTexture
          } : vv instanceof fz ? {
            ...zv,
            diffuseMap: vv._albedoTexture,
            diffuse: vv._albedoColor,
            alphaCutOff: vv._alphaCutOff,
            emissiveMap: vv._emissiveTexture,
            emissive: vv._emissiveColor,
            normalMap: vv._bumpTexture,
            roughnessMap: vv._metallicTexture,
            roughnessChannel: vv._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: vv._roughness ?? 1,
            metalnessMap: vv._metallicTexture,
            metalnessChannel: vv._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: vv._metallic ?? 0,
            aoMap: vv._ambientTexture,
            aoMapChannel: vv._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: vv._ambientTextureStrength,
            alphaMap: vv._opacityTexture,
            ior: vv.subSurface.indexOfRefraction,
            clearCoatEnabled: vv.clearCoat.isEnabled,
            clearCoat: vv.clearCoat.intensity,
            clearCoatMap: vv.clearCoat.texture,
            clearCoatRoughness: vv.clearCoat.roughness,
            clearCoatRoughnessMap: vv.clearCoat.useRoughnessFromMainTexture ? vv.clearCoat.texture : vv.clearCoat.textureRoughness
          } : zv
        }(vv);
      return null !== gv ? (Sv.push(`${hv}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${vv.uniqueId}/Texture_${gv.uniqueId}_diffuse.outputs:rgb>`), vv.needAlphaBlending() ? Sv.push(`${hv}float inputs:opacity.connect = </Root/Materials/Material_${vv.uniqueId}/Texture_${gv.uniqueId}_diffuse.outputs:a>`) : vv.needAlphaTesting() && (Sv.push(`${hv}float inputs:opacity.connect = </Root/Materials/Material_${vv.uniqueId}/Texture_${gv.uniqueId}_diffuse.outputs:a>`), Sv.push(`${hv}float inputs:opacityThreshold = ${dv}`)), ev.push(mg(gv, vv, "diffuse", pv, zv, Pv))) : Sv.push(`${hv}color3f inputs:diffuseColor = ${cg(pv||Cv.Color3.White())}`), null !== Nv ? (Sv.push(`${hv}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${vv.uniqueId}/Texture_${Nv.uniqueId}_emissive.outputs:rgb>`), ev.push(mg(Nv, vv, "emissive", lv, zv, Pv))) : lv && lv.toLuminance() > 0 && Sv.push(`${hv}color3f inputs:emissiveColor = ${cg(lv)}`), null !== Tv && (Sv.push(`${hv}normal3f inputs:normal.connect = </Root/Materials/Material_${vv.uniqueId}/Texture_${Tv.uniqueId}_normal.outputs:rgb>`), ev.push(mg(Tv, vv, "normal", null, zv, Pv))), null !== Gv && (Sv.push(`${hv}float inputs:occlusion.connect = </Root/Materials/Material_${vv.uniqueId}/Texture_${Gv.uniqueId}_occlusion.outputs:${mv}>`), ev.push(mg(Gv, vv, "occlusion", new Cv.Color3(jv, jv, jv), zv, Pv))), null !== Wv ? (Sv.push(`${hv}float inputs:roughness.connect = </Root/Materials/Material_${vv.uniqueId}/Texture_${Wv.uniqueId}_roughness.outputs:${wv}>`), ev.push(mg(Wv, vv, "roughness", new Cv.Color3(av, av, av), zv, Pv))) : Sv.push(`${hv}float inputs:roughness = ${av}`), null !== sv ? (Sv.push(`${hv}float inputs:metallic.connect = </Root/Materials/Material_${vv.uniqueId}/Texture_${sv.uniqueId}_metallic.outputs:${iv}>`), ev.push(mg(sv, vv, "metallic", new Cv.Color3(cv, cv, cv), zv, Pv))) : Sv.push(`${hv}float inputs:metallic = ${cv}`), null !== fv ? (Sv.push(`${hv}float inputs:opacity.connect = </Root/Materials/Material_${vv.uniqueId}/Texture_${fv.uniqueId}_opacity.outputs:r>`), Sv.push(`${hv}float inputs:opacityThreshold = 0.0001`), ev.push(mg(fv, vv, "opacity", null, zv, Pv))) : Sv.push(`${hv}float inputs:opacity = ${vv.alpha}`), Yv && (null !== Ov ? (Sv.push(`${hv}float inputs:clearcoat.connect = </Root/Materials/Material_${vv.uniqueId}/Texture_${Ov.uniqueId}_clearcoat.outputs:r>`), ev.push(mg(Ov, vv, "clearcoat", new Cv.Color3(nv, nv, nv), zv, Pv))) : Sv.push(`${hv}float inputs:clearcoat = ${nv}`), null !== Kv ? (Sv.push(`${hv}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${vv.uniqueId}/Texture_${Kv.uniqueId}_clearcoatRoughness.outputs:g>`), ev.push(mg(Kv, vv, "clearcoatRoughness", new Cv.Color3(Dv, Dv, Dv), zv, Pv))) : Sv.push(`${hv}float inputs:clearcoatRoughness = ${Dv}`)), Sv.push(`${hv}float inputs:ior = ${Fv}`), `\n\tdef Material "Material_${vv.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${Sv.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${vv.uniqueId}/PreviewSurface.outputs:surface>\n\n${ev.join("\n")}\n\n\t}\n`
    }

    function fg(vv) {
      vv.computeWorldMatrix(!0);
      const zv = vv.getWorldMatrix().clone(),
        Pv = vv.rD().useRightHandedSystem;
      let hv = vv.material?._getEffectiveOrientation(vv) ?? vv.sideOrientation,
        gv = !Pv,
        pv = vv.parent;
      for (; pv;) {
        if (qP(pv, Pv) && null === pv.parent) {
          Pv || (zv.multiplyToRef(pv.getWorldMatrix().invert(), zv), hv = hv === ev.b.ClockWiseSideOrientation ? ev.b.CounterClockWiseSideOrientation : ev.b.ClockWiseSideOrientation), gv = !1;
          break
        }
        pv = pv.parent
      }
      return zv.determinant() < 0 && Sv.Tools.Warn(`Mesh ${vv.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: zv,
        windingOrder: hv === ev.b.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: gv
      }
    }
    async function Fg(vv, zv, Pv) {
      const ev = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...zv
      };
      "undefined" === typeof fflate && await Sv.Tools.LoadScriptAsync(ev.fflateUrl);
      const gv = {};
      gv[ev.modelFileName] = null;
      let pv = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      pv += function(vv) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===vv.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${vv.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${vv.planeAnchoringAlignment}"`:""}\n            `
      }(ev);
      const dv = {};
      for (const hv of vv.meshes) {
        if (0 === hv.getTotalVertices()) continue;
        const vv = hv,
          zv = vv.geometry,
          Nv = vv.material;
        if (!Nv || !zv || Pv && !Pv(vv)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(Nv.getClassName())) {
          const Pv = "geometries/Geometry_" + zv.uniqueId + ".usda",
            {
              matrix: hv,
              windingOrder: Sv,
              convertToRightHanded: lv
            } = fg(vv);
          if (!(Pv in gv)) {
            const vv = Tg(zv, ev, Sv, lv);
            gv[Pv] = Wg(vv)
          }
          Nv.uniqueId in dv || (dv[Nv.uniqueId] = Nv), pv += sg(vv, hv)
        } else Sv.Tools.Warn("USDZExportAsync does not support this material type: " + Nv.getClassName())
      }
      vv.activeCamera && ev.exportCamera && (pv += function(vv, zv) {
        const Pv = "Camera_" + vv.uniqueId,
          Sv = wg(hv.Matrix.RotationY(Math.PI).multiply(vv.getWorldMatrix()));
        if (vv.mode === Fv.d.ORTHOGRAPHIC_CAMERA) return `def Camera "${Pv}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Sv}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${vv.minZ.toPrecision(zv.precision)}, ${vv.maxZ.toPrecision(zv.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(vv.orthoLeft||1)+Math.abs(vv.orthoRight||1))).toPrecision(zv.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(vv.orthoTop||1)+Math.abs(vv.orthoBottom||1))).toPrecision(zv.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const hv = vv.ma().getAspectRatio(vv),
            ev = zv.cameraSensorWidth || 35;
          return `def Camera "${Pv}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Sv}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${vv.minZ.toPrecision(zv.precision)}, ${vv.maxZ.toPrecision(zv.precision)})\n\t\t\tfloat focalLength = ${(ev/(2*Math.tan(.5*vv.fov))).toPrecision(zv.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(ev*hv).toPrecision(zv.precision)}\n\t\t\tfloat verticalAperture = ${(ev/hv).toPrecision(zv.precision)}            \n\t\t}\n\t\n\t`
        }
      }(vv.activeCamera, ev)), pv += "\n            }\n        }";
      const Nv = {};
      pv += function(vv, zv, Pv) {
        const hv = [];
        for (const Sv in vv) {
          const ev = vv[Sv];
          hv.push(jg(ev, zv, Pv))
        }
        return `\n    def "Materials"\n{\n${hv.join("")}\n}\n\n`
      }(dv, Nv, ev), pv += "\n    }", gv[ev.modelFileName] = fflate.strToU8(pv);
      for (const hv in Nv) {
        const {
          texture: vv,
          ext: zv,
          mimeType: Pv
        } = Nv[hv], Sv = await iP(vv);
        if (Sv && Gg(Sv.mimeType) && Sv.mimeType === Pv) gv[`textures/Texture_${hv}.${zv}`] = new Uint8Array(Sv.data);
        else {
          const Sv = vv.getSize(),
            ev = await (0, mv.d)(vv),
            pv = await Yv.DumpTools.DumpDataAsync(Sv.width, Sv.height, ev, Pv, void 0, !1, !0);
          gv[`textures/Texture_${hv}.${zv}`] = new Uint8Array(pv).slice()
        }
      }
      let lv = 0;
      for (const hv in gv) {
        const vv = gv[hv];
        if (!vv) continue;
        lv += 34 + hv.length;
        const zv = 63 & lv;
        if (4 !== zv) {
          const Pv = new Uint8Array(64 - zv);
          gv[hv] = [vv, {
            extra: {
              12345: Pv
            }
          }]
        }
        lv = vv.length
      }
      return fflate.zipSync(gv, {
        level: 0
      })
    }
    var Yg = Pv(40402);
    class ng {
      static Export(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        if (!vv || 0 === vv.bones.length) throw new Error("Invalid or empty skeleton provided");
        let hv = zv;
        zv && 0 !== zv.length || (hv = vv.animations.map((vv => vv.name)));
        let Sv = null;
        for (const Nv of hv) {
          const zv = vv.getAnimationRange(Nv);
          zv && (Sv = Sv ? new Yg.e("animation-range", Math.min(Sv.from, zv.from), Math.max(Sv.to, zv.to)) : zv)
        }
        if (!Sv && (vv.animations.length > 0 && (Sv = vv.getAnimationRange(vv.animations[0].name)), !Sv)) throw new Error("No animation range found in skeleton");
        const ev = Pv || 1 / (vv.animations[0]?.framePerSecond || 30),
          gv = this._BuildBoneHierarchy(vv, hv);
        let pv = 0;
        for (const Nv of gv) Nv.positionKeys.length > 0 && (pv = Math.max(pv, Nv.positionKeys.length)), Nv.rotationKeys.length > 0 && (pv = Math.max(pv, Nv.rotationKeys.length));
        0 === pv && (pv = Math.floor((Sv.to - Sv.from) / ev) + 1);
        let dv = "";
        return dv += "HIERARCHY\n", dv += this._ExportHierarchy(gv, 0), dv += "MOTION\n", dv += `Frames: ${pv}\n`, dv += `Frame Time: ${ev.toFixed(6)}\n`, dv += this._ExportMotionData(gv, pv, 0, hv), dv
      }
      static _BuildBoneHierarchy(vv, zv) {
        const Pv = new Map,
          hv = [];
        for (const Sv of vv.bones) {
          const vv = {
            bone: Sv,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          Pv.set(Sv, vv)
        }
        for (const Sv of vv.bones) {
          const vv = Pv.get(Sv);
          if (Sv.animations.length > 0)
            for (const Pv of Sv.animations) zv.includes(Pv.name) && ("position" === Pv.targetProperty ? (vv.hasPositionChannels = !0, vv.positionKeys.push(...Pv.getKeys())) : "rotationQuaternion" === Pv.targetProperty && (vv.hasRotationChannels = !0, vv.rotationKeys.push(...Pv.getKeys())));
          if (Sv.getParent()) {
            const zv = Pv.get(Sv.getParent());
            zv && zv.children.push(vv)
          } else hv.push(vv)
        }
        return hv
      }
      static _ExportHierarchy(vv, zv) {
        let Pv = "";
        const hv = "    ".repeat(zv);
        for (const Sv of vv) {
          const vv = Sv.bone;
          if (this._IsEndSite(Sv)) {
            Pv += `${hv}End Site\n`, Pv += `${hv}{\n`;
            const zv = this._GetBoneOffset(vv);
            Pv += `${hv}    OFFSET ${zv.x.toFixed(6)} ${zv.y.toFixed(6)} ${zv.z.toFixed(6)}\n`, Pv += `${hv}}\n`
          } else {
            Pv += `${0===zv?"ROOT":`${hv}JOINT`} ${vv.name}\n`, Pv += `${hv}{\n`;
            const ev = this._GetBoneOffset(vv);
            Pv += `${hv}    OFFSET ${ev.x.toFixed(6)} ${ev.y.toFixed(6)} ${ev.z.toFixed(6)}\n`;
            const gv = [];
            Sv.hasPositionChannels && gv.push("Xposition", "Yposition", "Zposition"), Sv.hasRotationChannels && gv.push("Zrotation", "Xrotation", "Yrotation"), gv.length > 0 && (Pv += `${hv}    CHANNELS ${gv.length} ${gv.join(" ")}\n`), Sv.children.length > 0 && (Pv += this._ExportHierarchy(Sv.children, zv + 1)), Pv += `${hv}}\n`
          }
        }
        return Pv
      }
      static _IsEndSite(vv) {
        return 0 === vv.children.length
      }
      static _GetBoneOffset(vv) {
        try {
          if (!vv.getParent()) return vv.getRestMatrix().getTranslation();
          return vv.getLocalMatrix().getTranslation()
        } catch (zv) {
          return hv.fa.Zero()
        }
      }
      static _ExportMotionData(vv, zv, Pv, hv) {
        let Sv = "";
        for (let ev = 0; ev < zv; ev++) {
          const zv = [];
          this._CollectFrameValues(vv, ev + Pv, zv, hv), Sv += zv.map((vv => vv.toFixed(6))).join(" ") + "\n"
        }
        return Sv
      }
      static _CollectFrameValues(vv, zv, Pv, hv) {
        for (const Sv of vv)
          if (!this._IsEndSite(Sv)) {
            if (Sv.hasPositionChannels) {
              const vv = this._GetPositionAtFrameIndex(Sv.positionKeys, zv);
              Pv.push(vv.x, vv.y, vv.z)
            }
            if (Sv.hasRotationChannels) {
              const vv = this._GetRotationAtFrameIndex(Sv.rotationKeys, zv),
                hv = this._QuaternionToEuler(vv);
              Pv.push(hv.z, hv.x, hv.y)
            }
            Sv.children.length > 0 && this._CollectFrameValues(Sv.children, zv, Pv, hv)
          }
      }
      static _GetPositionAtFrameIndex(vv, zv) {
        if (0 === vv.length) return hv.fa.Zero();
        return vv[Math.max(0, Math.min(zv, vv.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(vv, zv) {
        if (0 === vv.length) return hv.Quaternion.Identity();
        return vv[Math.max(0, Math.min(zv, vv.length - 1))].value.clone()
      }
      static _QuaternionToEuler(vv) {
        const zv = new hv.Matrix;
        vv.toRotationMatrix(zv);
        const Pv = zv.m;
        let ev, gv, pv;
        const dv = Math.sqrt(Pv[0] * Pv[0] + Pv[1] * Pv[1]);
        return dv > xP.e ? (ev = Math.atan2(Pv[6], Pv[10]), gv = Math.atan2(-Pv[2], dv), pv = Math.atan2(Pv[1], Pv[0])) : (ev = Math.atan2(-Pv[9], Pv[5]), gv = Math.atan2(-Pv[2], dv), pv = 0), new hv.fa(Sv.Tools.ToDegrees(ev), Sv.Tools.ToDegrees(gv), Sv.Tools.ToDegrees(pv))
      }
    }

    function Og(vv) {
      return "string" === typeof vv?.name
    }
    const Dg = Symbol("__xml:meta$__"),
      Kg = Symbol("__xml:name$__");

    function Vg(vv, zv) {
      Object.prototype.hasOwnProperty.call(vv.metadata, Dg) || (vv.metadata[Dg] = []), vv.metadata[Dg].push(zv)
    }

    function Ug(vv) {
      return (zv, Pv) => {
        zv[Kg] = vv
      }
    }

    function Rg() {
      return (vv, zv) => Vg(zv, {
        kind: "none",
        prop: String(zv.name),
        ignore: !0
      })
    }

    function xg(vv) {
      return (zv, Pv) => Vg(Pv, {
        kind: "attr",
        prop: String(Pv.name),
        ...vv
      })
    }

    function tg(vv) {
      return (zv, Pv) => Vg(Pv, {
        kind: "elem",
        prop: String(Pv.name),
        ...vv
      })
    }

    function qg(vv) {
      const zv = "function" === typeof vv ? vv : vv?.constructor,
        Pv = zv?.[Symbol.metadata];
      if (!Pv) return [];
      const hv = [];
      let Sv = Pv;
      for (; Sv;) Object.prototype.hasOwnProperty.call(Sv, Dg) && hv.push(...Sv[Dg]), Sv = Object.getPrototypeOf(Sv);
      return hv
    }

    function Ig(vv) {
      const zv = vv?.constructor?.[Kg];
      return zv || void 0
    }

    function Qg(vv) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(vv)
    }

    function Zg(vv) {
      if (Og(vv)) return vv;
      const zv = (vv ?? "").trim();
      if (!zv) return {
        name: ""
      };
      const Pv = zv.indexOf(":");
      if (-1 === Pv) return {
        name: zv
      };
      if (-1 !== zv.indexOf(":", Pv + 1)) return {
        name: zv
      };
      const hv = zv.slice(0, Pv),
        Sv = zv.slice(Pv + 1);
      return Qg(hv) && Qg(Sv) ? {
        ns: hv,
        name: Sv
      } : {
        name: zv
      }
    }

    function Ag(vv, zv) {
      return zv ? `${zv}:${vv}` : vv
    }
    const Lg = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      Hg = Object.freeze({
        number: Lg
      });

    function Mg(vv) {
      const zv = vv?.eps ?? Lg.eps;
      return {
        eps: zv,
        maxDecimalsCap: vv?.maxDecimalsCap ?? Lg.maxDecimalsCap,
        trimTrailingZeros: vv?.trimTrailingZeros ?? Lg.trimTrailingZeros,
        fixedDecimals: vv?.fixedDecimals,
        allowScientific: vv?.allowScientific ?? Lg.allowScientific,
        snapNearZero: vv?.snapNearZero ?? Lg.snapNearZero,
        zeroThreshold: vv?.zeroThreshold ?? zv,
        perAttributeEps: vv?.perAttributeEps
      }
    }

    function yg(vv) {
      return {
        number: Mg(vv?.number)
      }
    }
    class Bg {
      constructor(vv) {
        if (this.o = vv, this._o = vv.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(vv) {
        if (!Number.isFinite(vv)) throw new Error(`Cannot format non-finite number: ${vv}`);
        const zv = this._o,
          Pv = this._clampInt(zv.maxDecimalsCap ?? 15, 0, 20),
          hv = zv.trimTrailingZeros ?? !0,
          Sv = zv.snapNearZero ?? !0,
          ev = zv.zeroThreshold ?? zv.eps,
          gv = 1 / zv.eps;
        let pv, dv = Math.round(vv * gv) / gv;
        if (Object.is(dv, -0) && (dv = 0), Sv && Math.abs(dv) <= ev && (dv = 0), pv = void 0 !== zv.fixedDecimals ? this._clampInt(zv.fixedDecimals, 0, Pv) : this._clampInt(Math.ceil(-Math.log10(zv.eps)), 0, Pv), zv.allowScientific, 0 === pv) return String(Math.trunc(dv));
        let Nv = dv.toFixed(pv);
        if (hv && void 0 === zv.fixedDecimals && (Nv = Nv.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(Nv)) throw new Error(`Scientific notation not allowed in XML output: ${Nv}`);
        return Nv
      }
      _clampInt(vv, zv, Pv) {
        return Number.isFinite(vv) ? (vv = Math.trunc(vv), Math.max(zv, Math.min(Pv, vv))) : zv
      }
    }

    function Jg(vv) {
      return vv instanceof Date
    }

    function Eg(vv) {
      return "string" === typeof vv
    }

    function og(vv) {
      return "string" === typeof vv || "number" === typeof vv || "boolean" === typeof vv || "bigint" === typeof vv || Jg(vv)
    }

    function bg(vv) {
      return "number" === typeof vv || "boolean" === typeof vv || "bigint" === typeof vv || Jg(vv)
    }
    class rg {
      constructor(vv, zv) {
        this._ns = new Map, this._prefixCount = 0, this._builder = vv, this._format = yg(zv), this._nFmt = new Bg(this._format)
      }
      withNamespace() {
        for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
        for (const hv of zv) this._assignNamespace(hv);
        return this
      }
      serialize(vv, zv) {
        if (!(zv = zv ?? Ig(vv))) throw new Error("can not find name for given object");
        const Pv = Zg(zv);
        Pv.ns && this._assignNamespace(Pv.ns, "xmlns"), this._gatherNamespaces(vv, new WeakSet);
        const hv = this._builder.ele(null, Pv.name);
        for (const [Sv, ev] of Array.from(this._ns.entries())) hv.att("xmlns", ev, Sv);
        this._writeObjectContent(hv, vv, (new WeakSet).add(vv)), this._builder.end()
      }
      _writeObject(vv, zv, Pv) {
        if (Pv.has(zv)) return;
        if (Pv.add(zv), Array.isArray(zv)) {
          for (const hv of zv) bg(hv) || (Eg(hv) ? this._builder.text(hv) : this._writeObject(vv, hv, Pv));
          return
        }
        const hv = Ig(zv);
        if (!hv) return;
        const Sv = Zg(hv),
          ev = this._getPrefix(Sv),
          gv = Ag(Sv.name, ev);
        vv.ele(null, gv), this._writeObjectContent(vv, zv, Pv), this._builder.end()
      }
      _getPrefix(vv) {
        if (vv.ns) {
          const zv = this._ns.get(vv.ns.toLowerCase());
          if ("xmlns" !== zv) return zv
        }
      }
      _writeObjectContent(vv, zv, Pv) {
        const hv = qg(zv) ?? [],
          Sv = new Map;
        for (const gv of hv) {
          const vv = Sv.get(gv.prop) ?? [];
          vv.push(gv), Sv.set(gv.prop, vv)
        }
        const ev = Object.keys(zv).sort(((vv, zv) => {
          const Pv = (Sv.get(vv) ?? []).some((vv => "attr" === vv.kind));
          return Pv === (Sv.get(zv) ?? []).some((vv => "attr" === vv.kind)) ? 0 : Pv ? -1 : 1
        }));
        for (const gv of ev) {
          const hv = zv[gv];
          if (null === hv || void 0 === hv) continue;
          const ev = Sv.get(gv);
          if (ev) {
            if (ev.some((vv => !0 === vv.ignore || "none" === vv.kind))) continue;
            for (const zv of ev) {
              const Pv = zv.name ?? zv.prop.toLowerCase();
              if (Pv) switch (zv.kind) {
                case "attr": {
                  let Sv = null;
                  if ("number" === typeof hv && this._nFmt && (Sv = this._nFmt.toString(hv)), zv.formatter) {
                    Sv = new zv.formatter(this._format).toString(hv)
                  }
                  if (Sv = Sv ?? hv.toString(), Sv) {
                    const zv = Zg(Pv),
                      hv = this._getPrefix(zv),
                      ev = Ag(zv.name, hv);
                    vv.att(null, ev, Sv)
                  }
                  break
                }
              }
            }
          } else bg(hv) || (Eg(hv) ? this._builder.text(hv) : this._writeObject(vv, hv, Pv))
        }
      }
      _gatherNamespaces(vv, zv) {
        if (zv.has(vv)) return;
        if (zv.add(vv), Array.isArray(vv)) {
          for (const Pv of vv) og(Pv) || this._gatherNamespaces(Pv, zv);
          return
        }
        const Pv = Ig(vv);
        Pv && this._assignNamespace(Pv);
        const hv = qg(vv) ?? [],
          Sv = new Map;
        for (const gv of hv) {
          const vv = Sv.get(gv.prop) ?? [];
          vv.push(gv), Sv.set(gv.prop, vv)
        }
        const ev = [];
        for (const gv of Object.keys(vv)) {
          const zv = vv[gv];
          if (null === zv || void 0 === zv) continue;
          const Pv = Sv.get(gv);
          if (Pv) {
            if (Pv.some((vv => !0 === vv.ignore || "none" === vv.kind))) continue;
            for (const vv of Pv) vv.name && this._assignNamespace(vv.name)
          }
          ev.push(zv)
        }
        for (const gv of ev) og(gv) || this._gatherNamespaces(gv, zv)
      }
      _assignNamespace(vv, zv) {
        const Pv = Zg(vv);
        if (Pv?.ns) {
          const vv = Pv.ns.toLowerCase();
          this._ns.get(vv) || this._ns.set(vv, zv ?? this._buildNsPrefix(vv))
        } else if ("xmlns" === zv) {
          const vv = Pv.name.toLowerCase();
          this._ns.get(vv) || this._ns.set(vv, zv ?? this._buildNsPrefix(vv))
        }
      }
      _buildNsPrefix(vv) {
        let zv, Pv = !1;
        do {
          zv = "ns" + this._prefixCount++;
          for (const vv of Array.from(this._ns.values()))
            if (vv === zv) {
              Pv = !0;
              break
            }
        } while (Pv);
        return zv
      }
    }
    class kg {}
    var Xg;
    kg.OpenTag = "<", kg.CloseTag = ">", kg.Slash = "/", kg.Question = "?", kg.Quote = '"', kg.Equal = "=", kg.Space = " ", kg.Semicolon = ":", kg.Dec = "<?xml", kg.Xml = "xml", kg.Xmlns = "xmlns", kg.Xsi = "xsi", kg.VersionKeyword = "version", kg.EncodingKeyword = "encoding", kg.StandaloneKeyword = "standalone",
      function(vv) {
        vv[vv.Declaration = 0] = "Declaration", vv[vv.Tag = 1] = "Tag", vv[vv.Attribute = 2] = "Attribute", vv[vv.Text = 3] = "Text"
      }(Xg || (Xg = {}));
    class ug {
      constructor(vv) {
        this._ctxStack = [], this._d = 0, this._w = vv
      }
      dec(vv, zv, Pv) {
        return this._w.write(kg.Dec), this._writeAttStr(kg.VersionKeyword, vv), zv && this._writeAttStr(kg.EncodingKeyword, zv), void 0 !== Pv && this._writeAttStr(kg.StandaloneKeyword, Pv ? "yes" : "no"), this._w.write(kg.Question, kg.CloseTag), this
      }
      att(vv, zv, Pv) {
        const hv = this._peekContext();
        if (!hv) throw new Error("att() without open element");
        if (hv.closed) throw new Error(`att() after start tag closed for <${hv.name}>`);
        if (this._isXmlnsDecl(vv, zv)) {
          if (zv === kg.Xmlns) hv.defaultNs = Pv, this._registerNamespace(hv, "", Pv), this._writeAttStr(kg.Xmlns, Pv);
          else if (vv) this._registerNamespace(hv, zv, Pv), this._writeAttStr(`${vv}:${zv}`, Pv);
          else {
            const vv = zv.slice(6);
            this._registerNamespace(hv, vv, Pv), this._writeAttStr(zv, Pv)
          }
          return hv.lastToken = Xg.Attribute, this
        }
        let Sv = zv;
        if (vv) {
          Sv = `${this._ensurePrefixDeclared(hv,vv)}:${zv}`
        }
        return hv.lastToken = Xg.Attribute, this._writeAttStr(Sv, Pv), this
      }
      ele(vv, zv) {
        const Pv = this._peekContext();
        Pv && this._closeOpenTagIfNeeded(Pv);
        let hv = zv;
        if (vv) {
          hv = `${this._lookupPrefix(vv)??vv}:${zv}`
        }
        return this._pushContext(hv, ++this._d), this._w.write(kg.OpenTag, hv), this
      }
      text(vv) {
        const zv = this._peekContext();
        if (!zv) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(zv), zv.lastToken = Xg.Text, this._w.write(this._escText(vv)), this
      }
      end() {
        const vv = this._popContext();
        return vv && (this._d--, vv.closed ? this._w.write(kg.OpenTag, kg.Slash, vv.name, kg.CloseTag) : this._w.write(kg.Slash, kg.CloseTag)), this
      }
      _pushContext(vv, zv) {
        const Pv = new ug.Context(vv, zv);
        return this._ctxStack.push(Pv), Pv
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
      _writeAttStr(vv, zv) {
        this._w.write(kg.Space, vv, kg.Equal, kg.Quote, this._escAttr(zv), kg.Quote)
      }
      _lookupPrefix(vv) {
        let zv = this._ctxStack.length - 1;
        if (zv >= 0)
          do {
            const Pv = this._ctxStack[zv--],
              hv = Pv.ns2prefix?.get(vv);
            if (hv) return hv
          } while (zv >= 0)
      }
      _escText(vv) {
        return vv.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(vv) {
        return this._escText(vv).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(vv, zv) {
        if (vv) return vv === kg.Xmlns;
        const Pv = zv.length,
          hv = kg.Xmlns.length;
        return Pv >= hv && (zv.startsWith(kg.Xmlns) && (zv.length == hv || zv[hv] == kg.Semicolon))
      }
      _registerNamespace(vv, zv, Pv) {
        if (zv === kg.Xml || zv === kg.Xmlns) throw new Error(`reserved prefix '${zv}'`);
        const hv = vv.prefix2ns.get(zv);
        if (hv && hv !== Pv) throw new Error(`prefix '${zv}' already bound to a different namespace`);
        vv.ns2prefix.get(Pv) || vv.ns2prefix.set(Pv, zv), vv.prefix2ns.set(zv, Pv)
      }
      _allocPrefix(vv) {
        let zv = 1;
        for (;;) {
          const Pv = "ns" + zv++;
          if (!vv.prefix2ns.has(Pv)) return Pv
        }
      }
      _ensurePrefixDeclared(vv, zv) {
        const Pv = this._lookupPrefix(zv);
        if (Pv) return Pv;
        if (vv.closed) throw new Error(`can not declare namespace after start tag closed for <${vv.name}>`);
        const hv = this._allocPrefix(vv);
        return this._writeAttStr(`${kg.Xmlns}:${hv}`, zv), this._registerNamespace(vv, hv, zv), hv
      }
      _closeOpenTagIfNeeded(vv) {
        vv.closed || (this._w.write(kg.CloseTag), vv.closed = !0)
      }
    }
    ug.Context = class {
      constructor(vv, zv) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = vv, this.depth = zv
      }
    };
    class vp {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
        if (0 === zv.length) return this;
        const hv = zv.join("");
        return this._chunks.push(hv), this.count += hv.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class zp {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = vv, this._opts = zv, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
        if (0 === zv.length) return this;
        const hv = zv.join("");
        if (0 === hv.length) return this;
        this._pending += hv, this._pendingChars += hv.length;
        const Sv = this._opts.flushChars ?? 65536;
        return this._pendingChars >= Sv && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const vv = this._encoder.encode(this._pending);
        return this._sink.push(vv), this.count += vv.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const Pp = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      hp = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var Sp, ep;
    ! function(vv) {
      vv.micron = "micron", vv.millimeter = "millimeter", vv.centimeter = "centimeter", vv.inch = "inch", vv.foot = "foot", vv.meter = "meter"
    }(Sp || (Sp = {})),
    function(vv) {
      vv.model = "model", vv.solidsupport = "solidsupport", vv.support = "support", vv.surface = "surface", vv.other = "other"
    }(ep || (ep = {}));
    const gp = "http://schemas.openxmlformats.org/package/2006/content-types",
      pp = "http://schemas.openxmlformats.org/package/2006/relationships";
    var dp;
    ! function(vv) {
      vv.Relationships = "application/vnd.openxmlformats-package.relationships+xml", vv.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", vv.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", vv.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", vv.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", vv.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", vv.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", vv.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", vv.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", vv.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", vv.Png = "image/png", vv.Jpeg = "image/jpeg", vv.Tiff = "image/tiff", vv.Xml = "application/xml"
    }(dp || (dp = {}));
    const Np = "_rels/",
      lp = "3D/",
      Tp = "3dmodel.model",
      Wp = ".rels",
      wp = "[Content_Types].xml";
    class ap {
      static IsKnown(vv) {
        return ap.Known.has(vv)
      }
      static IsThreeDimModel(vv) {
        return vv === ap.ThreeDimModel
      }
    }
    ap.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", ap.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", ap.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", ap.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", ap.Known = new Set([ap.ThreeDimModel, ap.Thumbnail, ap.PrintTicket, ap.MustPreserve]);
    let sp = (() => {
        let vv, zv, Pv = [Ug({
            ns: gp,
            name: "Types"
          })],
          hv = [];
        zv = class {
          constructor() {
            this.items = []
          }
        };
        return (0, nv.i)(zv, "ThreeMfContentTypes"), (() => {
          const Sv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, nv.e)(null, vv = {
            value: zv
          }, Pv, {
            kind: "class",
            name: zv.name,
            metadata: Sv
          }, null, hv), zv = vv.value, Sv && Object.defineProperty(zv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Sv
          }), (0, nv.f)(zv, hv)
        })(), zv
      })(),
      Cp = (() => {
        let vv, zv, Pv, hv, Sv = [Ug({
            ns: gp,
            name: "Default"
          })],
          ev = [],
          gv = [],
          pv = [],
          dv = [],
          Nv = [];
        zv = class {
          constructor(vv, zv) {
            this.ext = (0, nv.f)(this, gv, void 0), this.ct = ((0, nv.f)(this, pv), (0, nv.f)(this, dv, void 0)), (0, nv.f)(this, Nv), this.ext = vv, this.ct = zv
          }
        };
        return (0, nv.i)(zv, "ThreeMfContentType"), (() => {
          const lv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Pv = [xg({
            name: {
              ns: gp,
              name: "Extension"
            }
          })], hv = [xg({
            name: {
              ns: gp,
              name: "ContentType"
            }
          })], (0, nv.e)(null, null, Pv, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: vv => "ext" in vv,
              get: vv => vv.ext,
              set: (vv, zv) => {
                vv.ext = zv
              }
            },
            metadata: lv
          }, gv, pv), (0, nv.e)(null, null, hv, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: vv => "ct" in vv,
              get: vv => vv.ct,
              set: (vv, zv) => {
                vv.ct = zv
              }
            },
            metadata: lv
          }, dv, Nv), (0, nv.e)(null, vv = {
            value: zv
          }, Sv, {
            kind: "class",
            name: zv.name,
            metadata: lv
          }, null, ev), zv = vv.value, lv && Object.defineProperty(zv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lv
          }), (0, nv.f)(zv, ev)
        })(), zv
      })(),
      ip = (() => {
        let vv, zv, Pv = [Ug({
            ns: pp,
            name: "Relationships"
          })],
          hv = [];
        zv = class {
          constructor() {
            this.items = []
          }
        };
        return (0, nv.i)(zv, "ThreeMfRelationships"), (() => {
          const Sv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, nv.e)(null, vv = {
            value: zv
          }, Pv, {
            kind: "class",
            name: zv.name,
            metadata: Sv
          }, null, hv), zv = vv.value, Sv && Object.defineProperty(zv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Sv
          }), (0, nv.f)(zv, hv)
        })(), zv
      })(),
      cp = (() => {
        let vv, zv, Pv, hv, Sv, ev = [Ug({
            ns: pp,
            name: "Relationship"
          })],
          gv = [],
          pv = [],
          dv = [],
          Nv = [],
          lv = [],
          Tv = [],
          Wv = [];
        zv = class {
          constructor(vv, zv, Pv) {
            this.id = (0, nv.f)(this, pv, void 0), this.type = ((0, nv.f)(this, dv), (0, nv.f)(this, Nv, void 0)), this.target = ((0, nv.f)(this, lv), (0, nv.f)(this, Tv, void 0)), (0, nv.f)(this, Wv), this.id = vv, this.type = zv, this.target = Pv
          }
        };
        return (0, nv.i)(zv, "ThreeMfRelationship"), (() => {
          const wv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Pv = [xg({
            name: "Id"
          })], hv = [xg({
            name: "Type"
          })], Sv = [xg({
            name: "Target"
          })], (0, nv.e)(null, null, Pv, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: vv => "id" in vv,
              get: vv => vv.id,
              set: (vv, zv) => {
                vv.id = zv
              }
            },
            metadata: wv
          }, pv, dv), (0, nv.e)(null, null, hv, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: vv => "type" in vv,
              get: vv => vv.type,
              set: (vv, zv) => {
                vv.type = zv
              }
            },
            metadata: wv
          }, Nv, lv), (0, nv.e)(null, null, Sv, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: vv => "target" in vv,
              get: vv => vv.target,
              set: (vv, zv) => {
                vv.target = zv
              }
            },
            metadata: wv
          }, Tv, Wv), (0, nv.e)(null, vv = {
            value: zv
          }, ev, {
            kind: "class",
            name: zv.name,
            metadata: wv
          }, null, gv), zv = vv.value, wv && Object.defineProperty(zv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wv
          }), (0, nv.f)(zv, gv)
        })(), zv
      })();
    class Gp {
      constructor(vv, zv, Pv) {
        this.contentTypes = vv, this.relationships = zv, this.model = Pv
      }
    }
    class mp {
      static Zero() {
        return new mp([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(vv) {
        this.values = vv
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class jp {
      constructor(vv) {
        this.o = vv, this._f = new Bg(vv)
      }
      toString(vv) {
        return vv.values.map((vv => this._f.toString(vv))).join(" ")
      }
    }
    let fp = (() => {
        let vv, zv, Pv, hv, Sv, ev = [Ug({
            ns: Pp,
            name: "model"
          })],
          gv = [],
          pv = [],
          dv = [],
          Nv = [],
          lv = [],
          Tv = [],
          Wv = [];
        zv = class {
          constructor() {
            this.unit = (0, nv.f)(this, pv, Sp.millimeter), this.requiredextensions = ((0, nv.f)(this, dv), (0, nv.f)(this, Nv, void 0)), this.recommendedextensions = ((0, nv.f)(this, lv), (0, nv.f)(this, Tv, void 0)), this.metadata = (0, nv.f)(this, Wv)
          }
        };
        return (0, nv.i)(zv, "ThreeMfModel"), (() => {
          const wv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Pv = [xg({
            name: "unit"
          })], hv = [xg({
            name: "requiredextensions"
          })], Sv = [xg({
            name: "recommendedextensions"
          })], (0, nv.e)(null, null, Pv, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: vv => "unit" in vv,
              get: vv => vv.unit,
              set: (vv, zv) => {
                vv.unit = zv
              }
            },
            metadata: wv
          }, pv, dv), (0, nv.e)(null, null, hv, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: vv => "requiredextensions" in vv,
              get: vv => vv.requiredextensions,
              set: (vv, zv) => {
                vv.requiredextensions = zv
              }
            },
            metadata: wv
          }, Nv, lv), (0, nv.e)(null, null, Sv, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: vv => "recommendedextensions" in vv,
              get: vv => vv.recommendedextensions,
              set: (vv, zv) => {
                vv.recommendedextensions = zv
              }
            },
            metadata: wv
          }, Tv, Wv), (0, nv.e)(null, vv = {
            value: zv
          }, ev, {
            kind: "class",
            name: zv.name,
            metadata: wv
          }, null, gv), zv = vv.value, wv && Object.defineProperty(zv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wv
          })
        })(), zv.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, nv.f)(zv, gv), zv
      })(),
      Fp = (() => {
        let vv, zv, Pv, hv, Sv, ev = [Ug({
            ns: Pp,
            name: "meta"
          })],
          gv = [],
          pv = [],
          dv = [],
          Nv = [],
          lv = [],
          Tv = [],
          Wv = [];
        zv = class {
          constructor(vv, zv, Pv, hv) {
            this.name = (0, nv.f)(this, pv, void 0), this.preserve = ((0, nv.f)(this, dv), (0, nv.f)(this, Nv, void 0)), this.type = ((0, nv.f)(this, lv), (0, nv.f)(this, Tv, void 0)), this.value = (0, nv.f)(this, Wv), this.name = vv, this.value = zv, this.preserve = Pv, this.type = hv
          }
        };
        return (0, nv.i)(zv, "ThreeMfMeta"), (() => {
          const wv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Pv = [xg({
            name: "name"
          })], hv = [xg({
            name: "preserve"
          })], Sv = [xg({
            name: "type"
          })], (0, nv.e)(null, null, Pv, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: vv => "name" in vv,
              get: vv => vv.name,
              set: (vv, zv) => {
                vv.name = zv
              }
            },
            metadata: wv
          }, pv, dv), (0, nv.e)(null, null, hv, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: vv => "preserve" in vv,
              get: vv => vv.preserve,
              set: (vv, zv) => {
                vv.preserve = zv
              }
            },
            metadata: wv
          }, Nv, lv), (0, nv.e)(null, null, Sv, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: vv => "type" in vv,
              get: vv => vv.type,
              set: (vv, zv) => {
                vv.type = zv
              }
            },
            metadata: wv
          }, Tv, Wv), (0, nv.e)(null, vv = {
            value: zv
          }, ev, {
            kind: "class",
            name: zv.name,
            metadata: wv
          }, null, gv), zv = vv.value, wv && Object.defineProperty(zv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wv
          }), (0, nv.f)(zv, gv)
        })(), zv
      })(),
      Yp = (() => {
        let vv, zv, Pv = [Ug({
            ns: Pp,
            name: "metadatagroup"
          })],
          hv = [];
        zv = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, nv.i)(zv, "ThreeMfMetadataGroup"), (() => {
          const Sv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, nv.e)(null, vv = {
            value: zv
          }, Pv, {
            kind: "class",
            name: zv.name,
            metadata: Sv
          }, null, hv), zv = vv.value, Sv && Object.defineProperty(zv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Sv
          }), (0, nv.f)(zv, hv)
        })(), zv
      })(),
      np = (() => {
        let vv, zv, Pv = [Ug({
            ns: Pp,
            name: "resources"
          })],
          hv = [];
        zv = class {
          constructor() {
            this.object = []
          }
        };
        return (0, nv.i)(zv, "ThreeMfResources"), (() => {
          const Sv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, nv.e)(null, vv = {
            value: zv
          }, Pv, {
            kind: "class",
            name: zv.name,
            metadata: Sv
          }, null, hv), zv = vv.value, Sv && Object.defineProperty(zv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Sv
          }), (0, nv.f)(zv, hv)
        })(), zv
      })(),
      Op = (() => {
        let vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv = [Ug({
            ns: Pp,
            name: "object"
          })],
          lv = [],
          Tv = [],
          Wv = [],
          wv = [],
          av = [],
          sv = [],
          Cv = [],
          iv = [],
          cv = [],
          Gv = [],
          mv = [],
          jv = [],
          fv = [],
          Fv = [],
          Yv = [];
        zv = class {
          constructor(vv) {
            let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.model;
            this.id = (0, nv.f)(this, Tv, void 0), this.type = ((0, nv.f)(this, Wv), (0, nv.f)(this, wv, void 0)), this.thumbnail = ((0, nv.f)(this, av), (0, nv.f)(this, sv, void 0)), this.partnumber = ((0, nv.f)(this, Cv), (0, nv.f)(this, iv, void 0)), this.name = ((0, nv.f)(this, cv), (0, nv.f)(this, Gv, void 0)), this.pid = ((0, nv.f)(this, mv), (0, nv.f)(this, jv, void 0)), this.pindex = ((0, nv.f)(this, fv), (0, nv.f)(this, Fv, void 0)), this.metadatagroup = (0, nv.f)(this, Yv), this.id = vv, this.type = zv
          }
        };
        return (0, nv.i)(zv, "ThreeMfObject"), (() => {
          const Ov = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Pv = [xg({
            name: "id"
          })], hv = [xg({
            name: "type"
          })], Sv = [xg({
            name: "thumbnail"
          })], ev = [xg({
            name: "partnumber"
          })], gv = [xg({
            name: "name"
          })], pv = [xg({
            name: "pid"
          })], dv = [xg({
            name: "pindex"
          })], (0, nv.e)(null, null, Pv, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: vv => "id" in vv,
              get: vv => vv.id,
              set: (vv, zv) => {
                vv.id = zv
              }
            },
            metadata: Ov
          }, Tv, Wv), (0, nv.e)(null, null, hv, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: vv => "type" in vv,
              get: vv => vv.type,
              set: (vv, zv) => {
                vv.type = zv
              }
            },
            metadata: Ov
          }, wv, av), (0, nv.e)(null, null, Sv, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: vv => "thumbnail" in vv,
              get: vv => vv.thumbnail,
              set: (vv, zv) => {
                vv.thumbnail = zv
              }
            },
            metadata: Ov
          }, sv, Cv), (0, nv.e)(null, null, ev, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: vv => "partnumber" in vv,
              get: vv => vv.partnumber,
              set: (vv, zv) => {
                vv.partnumber = zv
              }
            },
            metadata: Ov
          }, iv, cv), (0, nv.e)(null, null, gv, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: vv => "name" in vv,
              get: vv => vv.name,
              set: (vv, zv) => {
                vv.name = zv
              }
            },
            metadata: Ov
          }, Gv, mv), (0, nv.e)(null, null, pv, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: vv => "pid" in vv,
              get: vv => vv.pid,
              set: (vv, zv) => {
                vv.pid = zv
              }
            },
            metadata: Ov
          }, jv, fv), (0, nv.e)(null, null, dv, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: vv => "pindex" in vv,
              get: vv => vv.pindex,
              set: (vv, zv) => {
                vv.pindex = zv
              }
            },
            metadata: Ov
          }, Fv, Yv), (0, nv.e)(null, vv = {
            value: zv
          }, Nv, {
            kind: "class",
            name: zv.name,
            metadata: Ov
          }, null, lv), zv = vv.value, Ov && Object.defineProperty(zv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ov
          }), (0, nv.f)(zv, lv)
        })(), zv
      })(),
      Dp = (() => {
        let vv, zv, Pv = [Ug({
            ns: Pp,
            name: "mesh"
          })],
          hv = [];
        zv = class {
          constructor(vv, zv) {
            this.vertices = vv ?? new Kp, this.triangles = zv ?? new Up
          }
        };
        return (0, nv.i)(zv, "ThreeMfMesh"), (() => {
          const Sv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, nv.e)(null, vv = {
            value: zv
          }, Pv, {
            kind: "class",
            name: zv.name,
            metadata: Sv
          }, null, hv), zv = vv.value, Sv && Object.defineProperty(zv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Sv
          }), (0, nv.f)(zv, hv)
        })(), zv
      })(),
      Kp = (() => {
        let vv, zv, Pv = [Ug({
            ns: Pp,
            name: "vertices"
          })],
          hv = [];
        zv = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, nv.i)(zv, "ThreeMfVertices"), (() => {
          const Sv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, nv.e)(null, vv = {
            value: zv
          }, Pv, {
            kind: "class",
            name: zv.name,
            metadata: Sv
          }, null, hv), zv = vv.value, Sv && Object.defineProperty(zv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Sv
          }), (0, nv.f)(zv, hv)
        })(), zv
      })(),
      Vp = (() => {
        let vv, zv, Pv, hv, Sv, ev = [Ug({
            ns: Pp,
            name: "vertex"
          })],
          gv = [],
          pv = [],
          dv = [],
          Nv = [],
          lv = [],
          Tv = [],
          Wv = [];
        zv = class {
          constructor() {
            let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, nv.f)(this, pv, void 0), this.y = ((0, nv.f)(this, dv), (0, nv.f)(this, Nv, void 0)), this.z = ((0, nv.f)(this, lv), (0, nv.f)(this, Tv, void 0)), (0, nv.f)(this, Wv), this.x = vv, this.y = zv, this.z = Pv
          }
        };
        return (0, nv.i)(zv, "ThreeMfVertex"), (() => {
          const wv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Pv = [xg({
            name: "x"
          })], hv = [xg({
            name: "y"
          })], Sv = [xg({
            name: "z"
          })], (0, nv.e)(null, null, Pv, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: vv => "x" in vv,
              get: vv => vv.x,
              set: (vv, zv) => {
                vv.x = zv
              }
            },
            metadata: wv
          }, pv, dv), (0, nv.e)(null, null, hv, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: vv => "y" in vv,
              get: vv => vv.y,
              set: (vv, zv) => {
                vv.y = zv
              }
            },
            metadata: wv
          }, Nv, lv), (0, nv.e)(null, null, Sv, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: vv => "z" in vv,
              get: vv => vv.z,
              set: (vv, zv) => {
                vv.z = zv
              }
            },
            metadata: wv
          }, Tv, Wv), (0, nv.e)(null, vv = {
            value: zv
          }, ev, {
            kind: "class",
            name: zv.name,
            metadata: wv
          }, null, gv), zv = vv.value, wv && Object.defineProperty(zv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wv
          }), (0, nv.f)(zv, gv)
        })(), zv
      })(),
      Up = (() => {
        let vv, zv, Pv = [Ug({
            ns: Pp,
            name: "triangles"
          })],
          hv = [];
        zv = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, nv.i)(zv, "ThreeMfTriangles"), (() => {
          const Sv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, nv.e)(null, vv = {
            value: zv
          }, Pv, {
            kind: "class",
            name: zv.name,
            metadata: Sv
          }, null, hv), zv = vv.value, Sv && Object.defineProperty(zv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Sv
          }), (0, nv.f)(zv, hv)
        })(), zv
      })(),
      Rp = (() => {
        let vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv = [Ug({
            ns: Pp,
            name: "triangle"
          })],
          lv = [],
          Tv = [],
          Wv = [],
          wv = [],
          av = [],
          sv = [],
          Cv = [],
          iv = [],
          cv = [],
          Gv = [],
          mv = [],
          jv = [],
          fv = [],
          Fv = [],
          Yv = [];
        zv = class {
          constructor(vv, zv, Pv) {
            this.v1 = (0, nv.f)(this, Tv, void 0), this.v2 = ((0, nv.f)(this, Wv), (0, nv.f)(this, wv, void 0)), this.v3 = ((0, nv.f)(this, av), (0, nv.f)(this, sv, void 0)), this.p1 = ((0, nv.f)(this, Cv), (0, nv.f)(this, iv, void 0)), this.p2 = ((0, nv.f)(this, cv), (0, nv.f)(this, Gv, void 0)), this.p3 = ((0, nv.f)(this, mv), (0, nv.f)(this, jv, void 0)), this.pid = ((0, nv.f)(this, fv), (0, nv.f)(this, Fv, void 0)), (0, nv.f)(this, Yv), this.v1 = vv, this.v2 = zv, this.v3 = Pv
          }
        };
        return (0, nv.i)(zv, "ThreeMfTriangle"), (() => {
          const Ov = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Pv = [xg({
            name: "v1"
          })], hv = [xg({
            name: "v2"
          })], Sv = [xg({
            name: "v3"
          })], ev = [xg({
            name: "p1"
          })], gv = [xg({
            name: "p2"
          })], pv = [xg({
            name: "p3"
          })], dv = [xg({
            name: "pid"
          })], (0, nv.e)(null, null, Pv, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: vv => "v1" in vv,
              get: vv => vv.v1,
              set: (vv, zv) => {
                vv.v1 = zv
              }
            },
            metadata: Ov
          }, Tv, Wv), (0, nv.e)(null, null, hv, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: vv => "v2" in vv,
              get: vv => vv.v2,
              set: (vv, zv) => {
                vv.v2 = zv
              }
            },
            metadata: Ov
          }, wv, av), (0, nv.e)(null, null, Sv, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: vv => "v3" in vv,
              get: vv => vv.v3,
              set: (vv, zv) => {
                vv.v3 = zv
              }
            },
            metadata: Ov
          }, sv, Cv), (0, nv.e)(null, null, ev, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: vv => "p1" in vv,
              get: vv => vv.p1,
              set: (vv, zv) => {
                vv.p1 = zv
              }
            },
            metadata: Ov
          }, iv, cv), (0, nv.e)(null, null, gv, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: vv => "p2" in vv,
              get: vv => vv.p2,
              set: (vv, zv) => {
                vv.p2 = zv
              }
            },
            metadata: Ov
          }, Gv, mv), (0, nv.e)(null, null, pv, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: vv => "p3" in vv,
              get: vv => vv.p3,
              set: (vv, zv) => {
                vv.p3 = zv
              }
            },
            metadata: Ov
          }, jv, fv), (0, nv.e)(null, null, dv, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: vv => "pid" in vv,
              get: vv => vv.pid,
              set: (vv, zv) => {
                vv.pid = zv
              }
            },
            metadata: Ov
          }, Fv, Yv), (0, nv.e)(null, vv = {
            value: zv
          }, Nv, {
            kind: "class",
            name: zv.name,
            metadata: Ov
          }, null, lv), zv = vv.value, Ov && Object.defineProperty(zv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ov
          }), (0, nv.f)(zv, lv)
        })(), zv
      })(),
      xp = (() => {
        let vv, zv, Pv = [Ug({
            ns: Pp,
            name: "components"
          })],
          hv = [];
        zv = class {
          constructor() {
            this.component = []
          }
        };
        return (0, nv.i)(zv, "ThreeMfComponents"), (() => {
          const Sv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, nv.e)(null, vv = {
            value: zv
          }, Pv, {
            kind: "class",
            name: zv.name,
            metadata: Sv
          }, null, hv), zv = vv.value, Sv && Object.defineProperty(zv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Sv
          }), (0, nv.f)(zv, hv)
        })(), zv
      })(),
      tp = (() => {
        let vv, zv, Pv, hv, Sv = [Ug({
            ns: Pp,
            name: "component"
          })],
          ev = [],
          gv = [],
          pv = [],
          dv = [],
          Nv = [];
        zv = class {
          constructor(vv, zv) {
            this.objectid = (0, nv.f)(this, gv, void 0), this.transform = ((0, nv.f)(this, pv), (0, nv.f)(this, dv, void 0)), (0, nv.f)(this, Nv), this.objectid = vv, this.transform = zv
          }
        };
        return (0, nv.i)(zv, "ThreeMfComponent"), (() => {
          const lv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Pv = [xg({
            name: "objectid"
          })], hv = [xg({
            name: "transform",
            formatter: jp
          })], (0, nv.e)(null, null, Pv, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: vv => "objectid" in vv,
              get: vv => vv.objectid,
              set: (vv, zv) => {
                vv.objectid = zv
              }
            },
            metadata: lv
          }, gv, pv), (0, nv.e)(null, null, hv, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: vv => "transform" in vv,
              get: vv => vv.transform,
              set: (vv, zv) => {
                vv.transform = zv
              }
            },
            metadata: lv
          }, dv, Nv), (0, nv.e)(null, vv = {
            value: zv
          }, Sv, {
            kind: "class",
            name: zv.name,
            metadata: lv
          }, null, ev), zv = vv.value, lv && Object.defineProperty(zv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lv
          }), (0, nv.f)(zv, ev)
        })(), zv
      })(),
      qp = (() => {
        let vv, zv, Pv, hv = [Ug({
            ns: Pp,
            name: "basematerials"
          })],
          Sv = [],
          ev = [],
          gv = [];
        zv = class {
          constructor(vv) {
            this.id = (0, nv.f)(this, ev, void 0), this.base = ((0, nv.f)(this, gv), []), this.id = vv
          }
        };
        return (0, nv.i)(zv, "ThreeMfBaseMaterials"), (() => {
          const pv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Pv = [xg({
            name: "id"
          })], (0, nv.e)(null, null, Pv, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: vv => "id" in vv,
              get: vv => vv.id,
              set: (vv, zv) => {
                vv.id = zv
              }
            },
            metadata: pv
          }, ev, gv), (0, nv.e)(null, vv = {
            value: zv
          }, hv, {
            kind: "class",
            name: zv.name,
            metadata: pv
          }, null, Sv), zv = vv.value, pv && Object.defineProperty(zv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pv
          }), (0, nv.f)(zv, Sv)
        })(), zv
      })(),
      Ip = (() => {
        let vv, zv, Pv, hv, Sv = [Ug({
            ns: Pp,
            name: "base"
          })],
          ev = [],
          gv = [],
          pv = [],
          dv = [],
          Nv = [];
        zv = class {
          constructor(vv, zv) {
            this.name = (0, nv.f)(this, gv, void 0), this.displaycolor = ((0, nv.f)(this, pv), (0, nv.f)(this, dv, void 0)), (0, nv.f)(this, Nv), this.name = vv, this.displaycolor = zv
          }
        };
        return (0, nv.i)(zv, "ThreeMfBase"), (() => {
          const lv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Pv = [xg({
            name: "name"
          })], hv = [xg({
            name: "displaycolor"
          })], (0, nv.e)(null, null, Pv, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: vv => "name" in vv,
              get: vv => vv.name,
              set: (vv, zv) => {
                vv.name = zv
              }
            },
            metadata: lv
          }, gv, pv), (0, nv.e)(null, null, hv, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: vv => "displaycolor" in vv,
              get: vv => vv.displaycolor,
              set: (vv, zv) => {
                vv.displaycolor = zv
              }
            },
            metadata: lv
          }, dv, Nv), (0, nv.e)(null, vv = {
            value: zv
          }, Sv, {
            kind: "class",
            name: zv.name,
            metadata: lv
          }, null, ev), zv = vv.value, lv && Object.defineProperty(zv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lv
          }), (0, nv.f)(zv, ev)
        })(), zv
      })(),
      Qp = (() => {
        let vv, zv, Pv = [Ug({
            ns: Pp,
            name: "build"
          })],
          hv = [];
        zv = class {
          constructor() {
            this.item = []
          }
        };
        return (0, nv.i)(zv, "ThreeMfBuild"), (() => {
          const Sv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, nv.e)(null, vv = {
            value: zv
          }, Pv, {
            kind: "class",
            name: zv.name,
            metadata: Sv
          }, null, hv), zv = vv.value, Sv && Object.defineProperty(zv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Sv
          }), (0, nv.f)(zv, hv)
        })(), zv
      })(),
      Zp = (() => {
        let vv, zv, Pv, hv, Sv, ev = [Ug({
            ns: Pp,
            name: "item"
          })],
          gv = [],
          pv = [],
          dv = [],
          Nv = [],
          lv = [],
          Tv = [],
          Wv = [];
        zv = class {
          constructor(vv, zv, Pv) {
            this.objectid = (0, nv.f)(this, pv, void 0), this.transform = ((0, nv.f)(this, dv), (0, nv.f)(this, Nv, void 0)), this.partnumber = ((0, nv.f)(this, lv), (0, nv.f)(this, Tv, void 0)), this.metadatagroup = (0, nv.f)(this, Wv), this.objectid = vv, this.transform = zv, this.partnumber = Pv
          }
        };
        return (0, nv.i)(zv, "ThreeMfItem"), (() => {
          const wv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Pv = [xg({
            name: "objectid"
          })], hv = [xg({
            name: "transform",
            formatter: jp
          })], Sv = [xg({
            name: "partnumber"
          })], (0, nv.e)(null, null, Pv, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: vv => "objectid" in vv,
              get: vv => vv.objectid,
              set: (vv, zv) => {
                vv.objectid = zv
              }
            },
            metadata: wv
          }, pv, dv), (0, nv.e)(null, null, hv, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: vv => "transform" in vv,
              get: vv => vv.transform,
              set: (vv, zv) => {
                vv.transform = zv
              }
            },
            metadata: wv
          }, Nv, lv), (0, nv.e)(null, null, Sv, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: vv => "partnumber" in vv,
              get: vv => vv.partnumber,
              set: (vv, zv) => {
                vv.partnumber = zv
              }
            },
            metadata: wv
          }, Tv, Wv), (0, nv.e)(null, vv = {
            value: zv
          }, ev, {
            kind: "class",
            name: zv.name,
            metadata: wv
          }, null, gv), zv = vv.value, wv && Object.defineProperty(zv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wv
          }), (0, nv.f)(zv, gv)
        })(), zv
      })();
    class Ap {
      constructor(vv, zv) {
        this._object = new Op(vv, zv)
      }
      withName(vv) {
        return this._object.name = vv, this
      }
      withThumbnail(vv) {
        return this._object.thumbnail = vv, this
      }
      withProperty(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = vv, this._object.id = zv, this
      }
      build() {
        return this._object
      }
      reset(vv, zv) {
        this._object = new Op(vv, zv)
      }
    }
    class Lp extends Ap {
      constructor(vv) {
        super(vv, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.model), this._object.content = new xp
      }
      withComponent(vv, zv) {
        return this._object.content.component.push(new tp(vv, zv)), this
      }
    }
    class Hp extends Ap {
      constructor(vv) {
        super(vv, ep.model)
      }
      withPostProcessHandlers(vv, zv) {
        return this._vh = vv, this._th = zv, this
      }
      withData(vv) {
        return this._object.content = this._buildMesh(vv), this
      }
      withMaterial(vv, zv) {
        return this._object.pid = vv, this._object.pindex = zv, this
      }
      _buildMesh(vv) {
        const zv = this._buildVertices(vv.positions),
          Pv = this._buildTriangle(vv.indices);
        return new Dp(zv, Pv)
      }
      _buildVertices(vv) {
        const zv = new Kp;
        if (vv)
          for (let Pv = 0; Pv < vv.length;) {
            const hv = vv[Pv++],
              Sv = vv[Pv++],
              ev = vv[Pv++];
            let gv = new Vp(hv, Sv, ev);
            this._vh && (gv = this._vh(gv)), zv.vertex.push(gv)
          }
        return zv
      }
      _buildTriangle(vv) {
        const zv = new Up;
        if (vv)
          for (let Pv = 0; Pv < vv.length;) {
            const hv = vv[Pv++],
              Sv = vv[Pv++],
              ev = vv[Pv++];
            let gv = new Rp(hv, Sv, ev);
            this._th && (gv = this._th(gv)), zv.triangle.push(gv)
          }
        return zv
      }
    }
    class Mp {
      constructor(vv) {
        this._m = new qp(vv)
      }
      withColor(vv, zv) {
        this._m.base = this._m.base ?? [];
        let Pv = this._m.base.find((zv => zv.name.toLowerCase() === vv.toLowerCase()));
        return Pv ? (Pv.displaycolor = this._rgbaToHex(zv), this) : (Pv = new Ip(vv, this._rgbaToHex(zv)), this._m.base.push(Pv), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(vv) {
        const zv = vv => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(vv, 1 / 2.2)))),
          Pv = zv(vv.r).toString(16).padStart(2, "0").toUpperCase(),
          hv = zv(vv.g).toString(16).padStart(2, "0").toUpperCase(),
          Sv = zv(vv.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof vv.a) {
          return `#${Pv}${hv}${Sv}${Math.round(Math.min(255,Math.max(0,255*vv.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${Pv}${hv}${Sv}`
      }
    }
    class yp {
      constructor() {
        this._model = new fp, this._objects = new Map
      }
      withMetaData(vv, zv, Pv, hv) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new Fp(vv, zv, Pv, hv)), this
      }
      withMaterial(vv) {
        return vv instanceof Mp && (vv = vv.build()), vv && (this._model.resources = this._model.resources ?? new np, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(vv)), this
      }
      withMesh(vv) {
        return vv instanceof Hp && (vv = vv.build()), this._model.resources = this._model.resources ?? new np, this._model.resources.object.push(vv), this
      }
      withComponents(vv) {
        return vv instanceof Lp && (vv = vv.build()), this._model.resources = this._model.resources ?? new np, this._model.resources.object.push(vv), this
      }
      withBuild(vv, zv, Pv) {
        return this._model.build = this._model.build ?? new Qp, this._model.build.item?.push(new Zp(vv, zv, Pv)), this
      }
      withUnit(vv) {
        return this._model.unit = vv, this
      }
      reset() {
        return this._model = new fp, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    yp.KnownMetaSet = new Set(fp.KnownMeta.map((vv => vv.toLowerCase())));
    class Bp {
      withContentType(vv) {
        this._cts || (this._cts = new sp);
        const zv = this._cts.items;
        return zv.some((zv => zv.ext === vv.ext && zv.ct === vv.ct)) || zv.push(vv), this
      }
      withRelationship(vv) {
        this._rs || (this._rs = new ip);
        const zv = this._rs.items;
        return zv.some((zv => zv.id === vv.id)) || zv.push(vv), this.withContentType(new Cp("rels", dp.Relationships)), this
      }
      withModel(vv) {
        return vv instanceof yp && (vv = vv.build()), this._m = vv, this.withContentType(new Cp("model", dp.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const vv = `${lp}${Tp}`;
        if (!this._rs) {
          const zv = `/${vv}`;
          this.withRelationship(new cp("rel0", ap.ThreeDimModel, zv))
        }
        return new Gp(this._cts, this._rs, this._m)
      }
    }
    class Jp {
      constructor(vv) {
        this._o = vv
      }
      get options() {
        return this._o
      }
      async serializeAsync(vv) {
        const zv = await this.ensureZipLibReadyAsync();
        if (!zv) return;
        const Pv = zv.Zip,
          hv = zv.ZipDeflate;
        if (!Pv || !hv) throw new Error("fflate Zip / ZipDeflate not available");
        const Sv = function(vv, zv, Pv) {
          const Sv = new hv(zv, {
            level: 6
          });
          vv.add(Sv);
          const ev = function(vv) {
              return {
                push: (zv, Pv) => vv.push(zv, Pv)
              }
            }(Sv),
            gv = new zp(ev),
            pv = new ug(gv).dec("1.0", "UTF-8");
          new rg(pv).serialize(Pv), gv.finish()
        };
        for (var ev = arguments.length, gv = new Array(ev > 1 ? ev - 1 : 0), pv = 1; pv < ev; pv++) gv[pv - 1] = arguments[pv];
        const dv = this.toDocument(...gv);
        if (!dv) return;
        const Nv = new Pv(vv);
        Sv(Nv, wp, dv.contentTypes), Sv(Nv, `${Np}${Wp}`, dv.relationships), Sv(Nv, `${lp}${Tp}`, dv.model), Nv.end()
      }
      toDocument() {
        const vv = (new yp).withUnit(this._o?.unit ?? Sp.millimeter);
        if (this.options.metadata)
          for (const Sv in this.options.metadata) vv.withMetaData(Sv, this.options.metadata[Sv]);
        for (var zv = arguments.length, Pv = new Array(zv), hv = 0; hv < zv; hv++) Pv[hv] = arguments[hv];
        return (new Bp).withModel(this.toModel(vv, ...Pv)).build()
      }
    }
    class Ep {
      static async SerializeToMemoryAsync(vv) {
        const zv = new Array;
        let Pv = 0;
        for (var hv = arguments.length, Sv = new Array(hv > 1 ? hv - 1 : 0), ev = 1; ev < hv; ev++) Sv[ev - 1] = arguments[ev];
        if (await vv.serializeAsync((function(vv, hv, Sv) {
            zv.push(hv), Pv += hv.length
          }), ...Sv), !Pv) return;
        const gv = new Uint8Array(Pv);
        let pv = 0;
        for (const dv of zv) gv.set(dv, pv), pv += dv.length;
        return gv
      }
    }
    class op {}
    op.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class bp {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = vv, this._to = zv, this._step = Pv, this._i = vv
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const vv = this._i;
        return this._i += this._step, vv
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class rp extends Jp {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...rp.DefaultOptions,
          ...vv
        })
      }
      toModel(vv) {
        for (var zv = arguments.length, Pv = new Array(zv > 1 ? zv - 1 : 0), hv = 1; hv < zv; hv++) Pv[hv - 1] = arguments[hv];
        Pv = Pv.filter((vv => vv instanceof Nh.e || vv instanceof wv.d));
        const Sv = new bp,
          ev = vv,
          gv = new Map,
          pv = this.options.exportInstances ? [] : null;
        for (let dv = 0; dv < Pv.length; dv++) {
          const vv = Pv[dv];
          if (vv instanceof wv.d) {
            pv?.push(vv);
            continue
          }
          const zv = vv.name || `mesh${dv}`,
            hv = vv.getWorldMatrix(),
            Nv = this._handleBabylonTo3mfMatrixTransformToRef(hv, mp.Zero()),
            lv = vv.sF;
          if (void 0 === lv) continue;
          const Tv = 1 == lv.length;
          for (let Pv = 0; Pv < lv.length; Pv++) {
            const hv = lv[Pv],
              pv = this._extractSubMesh(vv, hv);
            if (pv) {
              const vv = Tv ? `${zv}` : `${zv}_${Pv}`,
                dv = new Hp(Sv.next()).withData(pv).withName(vv).build();
              ev.withMesh(dv), ev.withBuild(dv.id, Nv), gv.set(hv, dv)
            }
          }
        }
        if (pv && pv.length) {
          const vv = this._groupBy(pv, (vv => vv.hhv));
          for (const [zv, Pv] of Array.from(vv.entries()))
            if (Pv && Pv.length)
              for (let vv = 0; vv < Pv.length; vv++) {
                const hv = Pv[vv].getWorldMatrix(),
                  Sv = zv.sF;
                for (let vv = 0; vv < Sv.length; vv++) {
                  const zv = Sv[vv],
                    Pv = gv.get(zv);
                  Pv && ev.withBuild(Pv.id, this._handleBabylonTo3mfMatrixTransformToRef(hv, mp.Zero()))
                }
              }
        }
        return ev.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const vv = globalThis;
          return vv.fflate || await Sv.Tools.LoadScriptAsync(op.FFLATEUrl), vv.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(vv, zv) {
        const Pv = vv.dPv();
        if (!Pv) return;
        const hv = vv.getVerticesData(rp._PositionKind);
        if (!hv) return;
        if (0 == zv.indexStart && zv.indexCount == Pv.length) return {
          positions: hv,
          indices: Pv
        };
        const Sv = zv.indexStart,
          ev = new Map,
          gv = [],
          pv = new Uint32Array(zv.indexCount);
        for (let dv = 0; dv < zv.indexCount; dv++) {
          const vv = Pv[Sv + dv];
          let zv = ev.get(vv);
          if (void 0 === zv) {
            zv = ev.size, ev.set(vv, zv);
            const Pv = 3 * vv;
            gv.push(hv[Pv], hv[Pv + 1], hv[Pv + 2])
          }
          pv[dv] = zv
        }
        return {
          positions: new Float32Array(gv),
          indices: pv
        }
      }
      _groupBy(vv, zv) {
        const Pv = new Map;
        for (const hv of vv) {
          const vv = zv(hv),
            Sv = Pv.get(vv);
          Sv ? Sv.push(hv) : Pv.set(vv, [hv])
        }
        return Pv
      }
      _handleBabylonTo3mfMatrixTransformToRef(vv, zv) {
        const Pv = vv.multiplyToRef(rp._R_BJS_TO_3MF, Zv.c.Zero()).m;
        return zv.values = [Pv[0], Pv[1], Pv[2], Pv[4], Pv[5], Pv[6], Pv[8], Pv[9], Pv[10], Pv[12], Pv[13], Pv[14]], zv
      }
    }
    rp.DefaultOptions = {
      unit: Sp.meter,
      exportInstances: !1
    }, rp._PositionKind = "position", rp._R_BJS_TO_3MF = Zv.c.RotationX(Math.PI / 2).multiply(Zv.c.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);